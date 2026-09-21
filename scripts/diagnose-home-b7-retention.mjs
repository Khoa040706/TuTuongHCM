import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b7/revision/diagnosis/before");
const qaMode = process.argv[4] || "full";
const instrumentationEnabled = (process.argv[5] || "on") !== "off";
const browserMode = process.argv[6] || "swiftshader";
if (!new Set(["swiftshader", "desktop-gpu"]).has(browserMode)) {
  throw new Error(`Unknown browser mode: ${browserMode}`);
}
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-b7-retention-${process.pid}`);
fs.mkdirSync(outputDir, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

async function waitFor(check, { timeout = 60_000, interval = 150 } = {}) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const value = await check();
      if (value) return value;
    } catch (error) {
      lastError = error;
    }
    await delay(interval);
  }
  throw lastError || new Error(`Timed out after ${timeout}ms`);
}

class CdpClient {
  constructor(url) {
    this.url = url;
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
  }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      this.socket.once("open", resolve);
      this.socket.once("error", reject);
    });
    this.socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
        else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) || []) listener(message.params);
    });
  }
  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject, method });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  on(method, listener) {
    if (!this.listeners.has(method)) this.listeners.set(method, []);
    this.listeners.get(method).push(listener);
    return () => {
      this.listeners.set(method, (this.listeners.get(method) || []).filter((item) => item !== listener));
    };
  }
  close() { this.socket?.close(); }
}

async function createPage(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?about%3Ablank`, { method: "PUT" });
  if (!response.ok) throw new Error(`Cannot create page: ${response.status}`);
  return response.json();
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}

async function navigate(client, url) {
  await client.send("Page.navigate", { url });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"));
}

async function waitForLanding(client) {
  await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell') !== null"));
  try {
    await waitFor(() => evaluate(client, `(() => {
      const root = document.querySelector('#home-story');
      return root?.dataset.b7QaMode === ${JSON.stringify(qaMode)} && root?.dataset.modelStatus === 'ready';
    })()`));
  } catch (error) {
    const state = await evaluate(client, `(() => {
      const root = document.querySelector('#home-story');
      return {
        qaMode: root?.dataset.b7QaMode ?? null,
        modelStatus: root?.dataset.modelStatus ?? null,
        canvasState: document.querySelector('[data-testid=home-canvas-state]')?.dataset.state ?? null,
        landing: Boolean(document.querySelector('.home-landing-shell')),
        bodyText: document.body.innerText.slice(0, 500),
      };
    })()`);
    throw new Error(`${error.message}; landing state=${JSON.stringify(state)}`);
  }
}

async function login(client, username, password) {
  await evaluate(client, `(() => {
    localStorage.setItem('studymaster_users', JSON.stringify([{username:${JSON.stringify(username)},email:${JSON.stringify(`${username}@example.test`)},password:${JSON.stringify(password)},locked:false}]));
    document.querySelector('[data-testid=home-login]')?.click();
  })()`);
  await waitFor(() => evaluate(client, "document.querySelector('[role=dialog]:not([aria-hidden=true]) form') !== null"));
  await evaluate(client, `(() => {
    const inputs=document.querySelectorAll('[role=dialog] form input');
    const setValue=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;
    setValue.call(inputs[0],${JSON.stringify(username)}); inputs[0].dispatchEvent(new Event('input',{bubbles:true}));
    setValue.call(inputs[1],${JSON.stringify(password)}); inputs[1].dispatchEvent(new Event('input',{bubbles:true}));
    document.querySelector('[role=dialog] form').requestSubmit();
  })()`);
  await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell') === null"), { timeout: 20_000 });
}

async function logout(client) {
  await evaluate(client, `Array.from(document.querySelectorAll('button')).filter((button)=>button.style.minWidth === '140px').at(-1)?.click()`);
  await waitFor(() => evaluate(client, "Array.from(document.querySelectorAll('h4')).some((item)=>item.parentElement?.parentElement?.querySelectorAll('button').length >= 1)"));
  await evaluate(client, `(() => {
    const title=Array.from(document.querySelectorAll('h4')).find((item)=>item.parentElement?.parentElement?.querySelectorAll('button').length >= 1);
    Array.from(title?.parentElement?.parentElement?.querySelectorAll('button') || []).at(-1)?.click();
  })()`);
  await waitForLanding(client);
}

async function settleAndGc(client) {
  await delay(2_500);
  await client.send("HeapProfiler.collectGarbage");
  await delay(500);
  await client.send("HeapProfiler.collectGarbage");
  await delay(250);
}

async function metrics(client) {
  const [performance, dom, page] = await Promise.all([
    client.send("Performance.getMetrics"),
    client.send("Memory.getDOMCounters"),
    evaluate(client, `(() => {
      const qaSnapshot = window.__STUDYMASTER_B6_QA__?.snapshot?.() ?? null;
      return ({
      landing:!!document.querySelector('.home-landing-shell'),
      activeElements:document.getElementsByTagName('*').length,
      canvases:document.querySelectorAll('.home-webgl-canvas').length,
      qa:qaSnapshot?.controller ?? null,
      qaSnapshot,
      lifecycle:window.__STUDYMASTER_HOME_LIFECYCLE__ ?? null,
      controllerRegistry:window.__STUDYMASTER_HOME_CONTROLLER_REGISTRY__ ?? null
      ,qaMode:document.querySelector('#home-story')?.dataset.b7QaMode ?? null
    }); })()`),
  ]);
  const get = (name) => performance.metrics.find((item) => item.name === name)?.value ?? null;
  return {
    jsHeapUsedBytes: get("JSHeapUsedSize"),
    jsHeapTotalBytes: get("JSHeapTotalSize"),
    documents: dom.documents,
    nodes: dom.nodes,
    jsEventListeners: dom.jsEventListeners,
    ...page,
  };
}

async function graphicsInfo(client) {
  return evaluate(client, `(() => {
    const canvas = document.querySelector('canvas[data-engine], .home-webgl-canvas canvas, canvas');
    const gl = canvas?.getContext('webgl2') || canvas?.getContext('webgl');
    const extension = gl?.getExtension('WEBGL_debug_renderer_info');
    const vendor = gl && extension ? gl.getParameter(extension.UNMASKED_VENDOR_WEBGL) : null;
    const renderer = gl && extension ? gl.getParameter(extension.UNMASKED_RENDERER_WEBGL) : null;
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      devicePixelRatio: window.devicePixelRatio,
      webglVendor: vendor,
      webglRenderer: renderer,
      softwareRenderer: /swiftshader|software|llvmpipe/i.test(String(renderer || '')),
    };
  })()`);
}

async function takeSnapshot(client, target) {
  const chunks = [];
  const remove = client.on("HeapProfiler.addHeapSnapshotChunk", ({ chunk }) => chunks.push(chunk));
  await client.send("HeapProfiler.takeHeapSnapshot", { reportProgress: false, captureNumericValue: true });
  remove();
  fs.writeFileSync(target, chunks.join(""));
  return target;
}

function decodeSnapshot(file) {
  const snapshot = JSON.parse(fs.readFileSync(file, "utf8"));
  const nodeFields = snapshot.snapshot.meta.node_fields;
  const edgeFields = snapshot.snapshot.meta.edge_fields;
  const nodeTypes = snapshot.snapshot.meta.node_types[0];
  const edgeTypes = snapshot.snapshot.meta.edge_types[0];
  const nodeFieldCount = nodeFields.length;
  const edgeFieldCount = edgeFields.length;
  const nodeCount = snapshot.nodes.length / nodeFieldCount;
  const indexes = Object.fromEntries(nodeFields.map((name, index) => [name, index]));
  const edgeIndexes = Object.fromEntries(edgeFields.map((name, index) => [name, index]));
  const nodes = new Array(nodeCount);
  let edgeOffset = 0;
  for (let index = 0; index < nodeCount; index += 1) {
    const offset = index * nodeFieldCount;
    const edgeCount = snapshot.nodes[offset + indexes.edge_count];
    nodes[index] = {
      index,
      type: nodeTypes[snapshot.nodes[offset + indexes.type]],
      name: snapshot.strings[snapshot.nodes[offset + indexes.name]],
      id: snapshot.nodes[offset + indexes.id],
      selfSize: snapshot.nodes[offset + indexes.self_size],
      detachedness: indexes.detachedness == null ? 0 : snapshot.nodes[offset + indexes.detachedness],
      edgeStart: edgeOffset,
      edgeCount,
    };
    edgeOffset += edgeCount * edgeFieldCount;
  }
  return { snapshot, nodes, edgeFields, edgeTypes, edgeFieldCount, edgeIndexes, nodeFieldCount };
}

function summarizeHeap(decoded) {
  const groups = new Map();
  let detachedCount = 0;
  let detachedSize = 0;
  for (const node of decoded.nodes) {
    const detached = node.detachedness > 0 || /^Detached\b/.test(node.name);
    if (detached) {
      detachedCount += 1;
      detachedSize += node.selfSize;
    }
    const key = `${node.type}\u0000${node.name}\u0000${detached ? 1 : 0}`;
    const group = groups.get(key) || { type: node.type, name: node.name, detached, count: 0, selfSize: 0 };
    group.count += 1;
    group.selfSize += node.selfSize;
    groups.set(key, group);
  }
  return { nodeCount: decoded.nodes.length, detachedCount, detachedSize, groups };
}

function edgeName(decoded, offset) {
  const typeId = decoded.snapshot.edges[offset + decoded.edgeIndexes.type];
  const type = decoded.edgeTypes[typeId];
  const raw = decoded.snapshot.edges[offset + decoded.edgeIndexes.name_or_index];
  return { type, name: type === "element" || type === "hidden" ? String(raw) : decoded.snapshot.strings[raw] };
}

function incomingFor(decoded, targets) {
  const incoming = new Map([...targets].map((target) => [target, []]));
  for (const from of decoded.nodes) {
    for (let edge = from.edgeStart; edge < from.edgeStart + from.edgeCount * decoded.edgeFieldCount; edge += decoded.edgeFieldCount) {
      const typeId = decoded.snapshot.edges[edge + decoded.edgeIndexes.type];
      if (decoded.edgeTypes[typeId] === "weak") continue;
      const to = decoded.snapshot.edges[edge + decoded.edgeIndexes.to_node] / decoded.nodeFieldCount;
      if (!incoming.has(to)) continue;
      incoming.get(to).push({ from: from.index, ...edgeName(decoded, edge) });
    }
  }
  return incoming;
}

function edgePriority(decoded, edge) {
  const parent = decoded.nodes[edge.from];
  let score = edge.type === "property" ? 80 : edge.type === "context" ? 70 : edge.type === "element" ? 50 : 20;
  if (parent.type !== "native") score += 35;
  if (/Tween|Timeline|Context|gsap|Array|Object|Fiber|react/i.test(parent.name)) score += 50;
  if (parent.type === "synthetic") score += 100;
  return score;
}

function retainingPath(decoded, start, maxDepth = 12) {
  const path = [];
  const seen = new Set([start]);
  let current = start;
  for (let depth = 0; depth < maxDepth; depth += 1) {
    const incoming = incomingFor(decoded, new Set([current])).get(current) || [];
    const candidates = incoming
      .filter((edge) => !seen.has(edge.from))
      .sort((left, right) => edgePriority(decoded, right) - edgePriority(decoded, left));
    if (!candidates.length) break;
    const chosen = candidates[0];
    const node = decoded.nodes[current];
    const parent = decoded.nodes[chosen.from];
    path.push({
      node: { index: node.index, id: node.id, type: node.type, name: node.name, detachedness: node.detachedness },
      retainedBy: { edgeType: chosen.type, edgeName: chosen.name, index: parent.index, id: parent.id, type: parent.type, name: parent.name },
    });
    current = parent.index;
    if (parent.type === "synthetic") break;
    seen.add(current);
  }
  return path;
}

function compareHeaps(before, after) {
  const deltas = [];
  for (const [key, group] of after.groups) {
    const baseline = before.groups.get(key) || { count: 0, selfSize: 0 };
    const countDelta = group.count - baseline.count;
    const sizeDelta = group.selfSize - baseline.selfSize;
    if (countDelta > 0 || sizeDelta > 0) deltas.push({ ...group, countDelta, sizeDelta });
  }
  deltas.sort((left, right) => right.sizeDelta - left.sizeDelta || right.countDelta - left.countDelta);
  return deltas;
}

const debugPort = await freePort();
const chromeArgs = [
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding",
  `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`, "--window-size=1366,768", "about:blank",
];
if (browserMode === "swiftshader") {
  chromeArgs.unshift("--headless=new", "--no-sandbox", "--disable-gpu-sandbox", "--use-angle=swiftshader");
} else {
  chromeArgs.unshift("--no-first-run", "--no-default-browser-check", "--start-minimized");
}
const chrome = spawn(chromePath, chromeArgs, { stdio: "ignore" });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok, { timeout: 20_000 });
  const page = await createPage(debugPort);
  client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Performance.enable");
  await client.send("HeapProfiler.enable");
  await client.send("Page.addScriptToEvaluateOnNewDocument", {
    source: `window.__STUDYMASTER_B7_QA_ENABLED__ = ${instrumentationEnabled}; window.__STUDYMASTER_B7_QA_MODE__ = ${JSON.stringify(qaMode)};`,
  });
  await navigate(client, baseUrl);
  await waitForLanding(client);
  const browserGraphics = await graphicsInfo(client);

  const username = "qa_b7_retention";
  const password = "StudyMaster!123";
  await login(client, username, password);
  await logout(client);
  await login(client, username, password);
  await settleAndGc(client);
  const baselineMetrics = await metrics(client);
  const baselineFile = path.join(outputDir, "outside-after-warmup.heapsnapshot");
  await takeSnapshot(client, baselineFile);
  console.log(`B7 retention ${qaMode}/${instrumentationEnabled ? "instrumented" : "uninstrumented"}: warm-up snapshot ${baselineFile}`);

  const rounds = [];
  for (let round = 1; round <= 5; round += 1) {
    await logout(client);
    await settleAndGc(client);
    const inside = await metrics(client);
    const movement = await evaluate(client, `(async () => {
      const before = window.__STUDYMASTER_B6_QA__?.snapshot?.() ?? null;
      const end = before?.controller?.end ?? 0;
      window.scrollTo(0, Math.max(1, end * 0.52));
      await new Promise((resolve) => setTimeout(resolve, 900));
      const after = window.__STUDYMASTER_B6_QA__?.snapshot?.() ?? null;
      window.scrollTo(0, 0);
      await new Promise((resolve) => setTimeout(resolve, 300));
      return { before, after };
    })()`);
    await login(client, username, password);
    await settleAndGc(client);
    const outside = await metrics(client);
    rounds.push({ round, inside, movement, outside });
    console.log(`B7 retention ${qaMode}: round ${round}/5`);
  }

  const finalFile = path.join(outputDir, "outside-after-five-rounds.heapsnapshot");
  await takeSnapshot(client, finalFile);
  const finalMetrics = await metrics(client);
  console.log(`B7 retention: final snapshot ${finalFile}`);

  const beforeHeap = summarizeHeap(decodeSnapshot(baselineFile));
  const afterDecoded = decodeSnapshot(finalFile);
  const afterHeap = summarizeHeap(afterDecoded);
  const deltas = compareHeaps(beforeHeap, afterHeap);
  const detachedGrowth = deltas.filter((item) => item.detached).slice(0, 20);
  const ownerGrowth = deltas.filter((item) => /Tween|Timeline|Context|gsap|Fiber|react|HTML|Detached/i.test(item.name)).slice(0, 40);
  const candidateNodes = afterDecoded.nodes
    .filter((node) => node.detachedness > 0 || /^Detached\b/.test(node.name))
    .slice(0, 8);
  const retainingPaths = candidateNodes.map((node) => ({
    candidate: { index: node.index, id: node.id, type: node.type, name: node.name, detachedness: node.detachedness },
    path: retainingPath(afterDecoded, node.index),
  }));

  const result = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    qaMode,
    instrumentationEnabled,
    browserMode,
    browserGraphics,
    method: {
      warmup: "login -> logout -> login, then 2500ms cleanup wait + two forced GCs",
      measuredRounds: 5,
      perStateCleanup: "2500ms wait + GC + 500ms wait + GC + 250ms settle",
      snapshotStates: "outside homepage after warm-up and outside homepage after five full logout/login rounds",
      instrumentation: instrumentationEnabled
        ? "QA globals and lifecycle/controller registries enabled"
        : "QA globals/registries disabled; CDP uses returnByValue and retains no Runtime objectId",
      browserMode: browserMode === "desktop-gpu"
        ? "desktop Chrome process; no headless flag and no forced ANGLE/SwiftShader flag"
        : "headless Chrome with ANGLE SwiftShader forced",
    },
    baselineMetrics,
    rounds,
    finalMetrics,
    heap: {
      baseline: { nodeCount: beforeHeap.nodeCount, detachedCount: beforeHeap.detachedCount, detachedSize: beforeHeap.detachedSize, file: path.basename(baselineFile), bytes: fs.statSync(baselineFile).size },
      final: { nodeCount: afterHeap.nodeCount, detachedCount: afterHeap.detachedCount, detachedSize: afterHeap.detachedSize, file: path.basename(finalFile), bytes: fs.statSync(finalFile).size },
      topGrowth: deltas.slice(0, 60),
      detachedGrowth,
      ownerGrowth,
      retainingPaths,
    },
  };
  fs.writeFileSync(path.join(outputDir, "retention-diagnosis.json"), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({
    output: path.join(outputDir, "retention-diagnosis.json"),
    baselineMetrics,
    finalMetrics,
    detachedBefore: beforeHeap.detachedCount,
    detachedAfter: afterHeap.detachedCount,
    topDetachedGrowth: detachedGrowth.slice(0, 6),
  }, null, 2));
} finally {
  client?.close();
  chrome.kill();
  await delay(300);
  fs.rmSync(profileDir, { recursive: true, force: true });
}
