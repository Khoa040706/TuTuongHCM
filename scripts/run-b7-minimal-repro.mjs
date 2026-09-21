import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const mode = process.argv[2] || "r3f-box";
const outputDir = path.resolve(process.argv[3] || `artifacts/homepage-3d/b7/minimal-repro/${mode}`);
const snapshotMode = (process.argv[4] || "off") === "on";
const validModes = new Set(["r3f-box", "r3f-glb", "r3f-glb-basic", "r3f-glb-basic-release", "three-box", "three-glb", "three-glb-basic", "three-glb-basic-dispose-geometry"]);
if (!validModes.has(mode)) throw new Error(`Unknown mode: ${mode}`);

const repoRoot = process.cwd();
const distDir = path.join(repoRoot, "artifacts", "homepage-3d", "b7", "minimal-repro", "dist");
const modelFile = path.join(repoRoot, "public", "assets", "home", "cancer-knowledge-machine", "cancer-machine.glb");
const chromePath = process.env.STUDYMASTER_CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-b7-minimal-${process.pid}`);
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
async function waitFor(check, { timeout = 45_000, interval = 100 } = {}) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try { const value = await check(); if (value) return value; } catch (error) { lastError = error; }
    await delay(interval);
  }
  throw lastError || new Error(`Timed out after ${timeout}ms`);
}
function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".glb")) return "model/gltf-binary";
  return "application/octet-stream";
}
async function startServer() {
  const port = await freePort();
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    let file;
    if (url.pathname === "/" || url.pathname === "/index.html") file = path.join(distDir, "index.html");
    else if (url.pathname === "/repro.js") file = path.join(distDir, "repro.js");
    else if (url.pathname === "/assets/home/cancer-knowledge-machine/cancer-machine.glb") file = modelFile;
    if (!file || !fs.existsSync(file)) { response.writeHead(404); response.end("not found"); return; }
    response.writeHead(200, { "content-type": contentType(file), "cache-control": "no-store" });
    fs.createReadStream(file).pipe(response);
  });
  await new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", resolve); });
  return { server, port };
}

class CdpClient {
  constructor(url) { this.url = url; this.nextId = 1; this.pending = new Map(); this.listeners = new Map(); }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => { this.socket.once("open", resolve); this.socket.once("error", reject); });
    this.socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (message.id) {
        const pending = this.pending.get(message.id); if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`)); else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) || []) listener(message.params);
    });
  }
  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => { this.pending.set(id, { resolve, reject, method }); this.socket.send(JSON.stringify({ id, method, params })); });
  }
  on(method, listener) {
    if (!this.listeners.has(method)) this.listeners.set(method, []);
    this.listeners.get(method).push(listener);
    return () => this.listeners.set(method, (this.listeners.get(method) || []).filter((item) => item !== listener));
  }
  close() { this.socket?.close(); }
}
async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}
async function settleAndGc(client) {
  await delay(2_500);
  await client.send("HeapProfiler.collectGarbage");
  await delay(500);
  await client.send("HeapProfiler.collectGarbage");
  await delay(250);
}
async function metrics(client) {
  const [performance, dom, harness] = await Promise.all([
    client.send("Performance.getMetrics"), client.send("Memory.getDOMCounters"),
    evaluate(client, "window.__B7_MINIMAL_REPRO__.snapshot()"),
  ]);
  const get = (name) => performance.metrics.find((item) => item.name === name)?.value ?? null;
  return {
    jsHeapUsedBytes: get("JSHeapUsedSize"), jsHeapTotalBytes: get("JSHeapTotalSize"),
    documents: dom.documents, nodes: dom.nodes, jsEventListeners: dom.jsEventListeners, harness,
  };
}
async function mountAndProve(client) {
  await evaluate(client, `window.__B7_MINIMAL_REPRO__.mount(${JSON.stringify(mode)})`);
  await waitFor(() => evaluate(client, "window.__B7_MINIMAL_REPRO__.snapshot().phase === 'rendered'"));
  const result = await metrics(client);
  if (!result.harness.renderProof || result.harness.renderProof.calls < 1 || result.harness.canvases !== 1) {
    throw new Error(`Render proof failed: ${JSON.stringify(result.harness)}`);
  }
  return result;
}
async function unmountAndSettle(client) {
  await evaluate(client, "window.__B7_MINIMAL_REPRO__.unmount()");
  await settleAndGc(client);
  const result = await metrics(client);
  if (result.harness.canvases !== 0 || result.harness.phase !== "idle") throw new Error(`Unmount failed: ${JSON.stringify(result.harness)}`);
  return result;
}
async function graphicsInfo(client) {
  return evaluate(client, `(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const extension = gl?.getExtension('WEBGL_debug_renderer_info');
    return { userAgent:navigator.userAgent, platform:navigator.platform, devicePixelRatio:window.devicePixelRatio,
      vendor:gl && extension ? gl.getParameter(extension.UNMASKED_VENDOR_WEBGL) : null,
      renderer:gl && extension ? gl.getParameter(extension.UNMASKED_RENDERER_WEBGL) : null };
  })()`);
}
async function takeSnapshot(client, target) {
  const chunks = [];
  const remove = client.on("HeapProfiler.addHeapSnapshotChunk", ({ chunk }) => chunks.push(chunk));
  await client.send("HeapProfiler.takeHeapSnapshot", { reportProgress: false, captureNumericValue: true });
  remove(); fs.writeFileSync(target, chunks.join("")); return target;
}

const { server, port } = await startServer();
const debugPort = await freePort();
const chromeArgs = ["--no-first-run", "--no-default-browser-check", "--start-minimized", "--disable-background-timer-throttling", "--disable-renderer-backgrounding", `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`, "--window-size=1366,768", "about:blank"];
const chrome = spawn(chromePath, chromeArgs, { stdio: "ignore" });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok, { timeout: 20_000 });
  const response = await fetch(`http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(`http://127.0.0.1:${port}/`)}`, { method: "PUT" });
  const page = await response.json();
  client = new CdpClient(page.webSocketDebuggerUrl); await client.connect();
  await client.send("Page.enable"); await client.send("Runtime.enable"); await client.send("Performance.enable"); await client.send("HeapProfiler.enable");
  await waitFor(() => evaluate(client, "document.readyState === 'complete' && !!window.__B7_MINIMAL_REPRO__"));
  const browserGraphics = await graphicsInfo(client);
  if (/swiftshader|software|llvmpipe/i.test(String(browserGraphics.renderer))) throw new Error(`Real GPU required, got ${browserGraphics.renderer}`);

  const warmup = [];
  for (let index = 0; index < 2; index += 1) { warmup.push({ inside: await mountAndProve(client), outside: await unmountAndSettle(client) }); }
  const baselineMetrics = await metrics(client);
  const baselineSnapshot = snapshotMode ? await takeSnapshot(client, path.join(outputDir, "outside-after-warmup.heapsnapshot")) : null;
  const rounds = [];
  for (let round = 1; round <= 5; round += 1) {
    const inside = await mountAndProve(client);
    const outside = await unmountAndSettle(client);
    rounds.push({ round, inside, outside });
    console.log(`${mode}: round ${round}/5 nodes=${outside.nodes} heap=${outside.jsHeapUsedBytes}`);
  }
  const finalMetrics = await metrics(client);
  const finalSnapshot = snapshotMode ? await takeSnapshot(client, path.join(outputDir, "outside-after-five-rounds.heapsnapshot")) : null;
  const result = {
    generatedAt: new Date().toISOString(), mode, source: "standalone static harness; no Next.js, auth, SPA, GSAP, or homepage code",
    browserGraphics, modelFile: mode.includes("glb") ? path.relative(repoRoot, modelFile).replaceAll("\\", "/") : null,
    method: { warmupCycles: 2, measuredRounds: 5, cleanup: "2500ms + GC + 500ms + GC + 250ms", snapshots: snapshotMode, sourceLockedDuringRun: true },
    warmup, baselineMetrics, rounds, finalMetrics,
    deltas: {
      nodes: finalMetrics.nodes - baselineMetrics.nodes,
      listeners: finalMetrics.jsEventListeners - baselineMetrics.jsEventListeners,
      heapUsedBytes: finalMetrics.jsHeapUsedBytes - baselineMetrics.jsHeapUsedBytes,
      contextsCreated: finalMetrics.harness.contextsCreated - baselineMetrics.harness.contextsCreated,
      contextsDisposed: finalMetrics.harness.contextsDisposed - baselineMetrics.harness.contextsDisposed,
    },
    artifacts: { baselineSnapshot: baselineSnapshot ? path.basename(baselineSnapshot) : null, finalSnapshot: finalSnapshot ? path.basename(finalSnapshot) : null },
  };
  fs.writeFileSync(path.join(outputDir, "result.json"), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ output: path.join(outputDir, "result.json"), browserGraphics, deltas: result.deltas }, null, 2));
} finally {
  client?.close(); chrome.kill(); server.close(); await delay(300);
  fs.rmSync(profileDir, { recursive: true, force: true });
}
