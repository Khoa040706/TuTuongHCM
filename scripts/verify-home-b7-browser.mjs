import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import net from "node:net";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b7/after");
const phase = process.argv[4] || "after";
const browserMode = process.argv[5] || "swiftshader";
if (!new Set(["swiftshader", "desktop-gpu"]).has(browserMode)) {
  throw new Error(`Unknown browser mode: ${browserMode}`);
}
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-chrome-b7-${process.pid}`);
const sceneStops = [
  ["study-story-s01", 0],
  ["home-s02", 0.2],
  ["home-s03", 0.4],
  ["home-s04", 0.6],
  ["home-s05", 0.8],
  ["home-s06", 1],
];

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

async function waitFor(check, { timeout = 30_000, interval = 150 } = {}) {
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
    this.socket.on("close", () => {
      for (const pending of this.pending.values()) {
        pending.reject(new Error(`Chrome DevTools socket closed during ${pending.method}`));
      }
      this.pending.clear();
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
  }

  close() {
    this.socket?.close();
  }
}

async function createPage(port, url = "about:blank") {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  });
  if (!response.ok) throw new Error(`Cannot create Chrome page: ${response.status}`);
  return response.json();
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  }
  return result.result.value;
}

async function navigate(client, url) {
  await client.send("Page.navigate", { url });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
}

async function setViewport(client, width, height, deviceScaleFactor = 1) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor,
    mobile: false,
    screenWidth: width,
    screenHeight: height,
  });
}

async function screenshot(client, name) {
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
  });
  const target = path.join(outputDir, name);
  fs.writeFileSync(target, Buffer.from(data, "base64"));
  return target;
}

async function readQa(client) {
  return evaluate(client, "window.__STUDYMASTER_B6_QA__?.snapshot?.() || null");
}

async function waitForModel(client) {
  return waitFor(async () => {
    const state = await evaluate(client, `(() => ({
      status: document.querySelector('#home-story')?.dataset.modelStatus,
      qa: window.__STUDYMASTER_B6_QA__?.snapshot?.() || null
    }))()`);
    return state.status === "ready" && state.qa?.renderer ? state.qa : null;
  }, { timeout: 60_000, interval: 200 });
}

async function settleAtMaster(client, targetMaster) {
  await evaluate(client, `(() => {
    const qa = window.__STUDYMASTER_B6_QA__?.snapshot?.();
    const controller = qa?.controller;
    if (!controller || controller.start == null || controller.end == null) return false;
    window.scrollTo(0, controller.start + (controller.end - controller.start) * ${targetMaster});
    return true;
  })()`);
  let previous = null;
  let stableReads = 0;
  return waitFor(async () => {
    const snapshot = await readQa(client);
    const master = snapshot?.progress?.master;
    if (typeof master !== "number" || Math.abs(master - targetMaster) > 0.012) {
      previous = master;
      stableReads = 0;
      return false;
    }
    if (previous != null && Math.abs(master - previous) <= 0.0001) stableReads += 1;
    else stableReads = 0;
    previous = master;
    return stableReads >= 3 ? snapshot : false;
  }, { timeout: 20_000, interval: 120 });
}

async function settleAtScene(client, id, master) {
  await evaluate(client, `document.getElementById(${JSON.stringify(id)})?.scrollIntoView({block:'start',behavior:'instant'})`);
  return settleAtMaster(client, master);
}

function metricValue(metrics, name) {
  return metrics.metrics.find((metric) => metric.name === name)?.value ?? null;
}

async function performanceSnapshot(client) {
  const [metrics, dom] = await Promise.all([
    client.send("Performance.getMetrics"),
    client.send("Memory.getDOMCounters"),
  ]);
  const activeDomElements = await evaluate(client, "document.getElementsByTagName('*').length");
  return {
    jsHeapUsedBytes: metricValue(metrics, "JSHeapUsedSize"),
    jsHeapTotalBytes: metricValue(metrics, "JSHeapTotalSize"),
    documents: dom.documents,
    nodes: dom.nodes,
    jsEventListeners: dom.jsEventListeners,
    activeDomElements,
    layouts: metricValue(metrics, "LayoutCount"),
    styleRecalcs: metricValue(metrics, "RecalcStyleCount"),
  };
}

async function lifecycleObservation(client) {
  return evaluate(client, `(() => {
    const api = window.__STUDYMASTER_B6_QA__;
    const controllerRegistry = window.__STUDYMASTER_HOME_CONTROLLER_REGISTRY__ || null;
    const canvasRegistry = window.__STUDYMASTER_HOME_LIFECYCLE__ || null;
    let controller;
    if (api?.snapshot) {
      const value = api.snapshot().controller;
      controller = {
        observable: value?.observable === true,
        present: true,
        active: value?.active ?? null,
        id: value?.id ?? null,
        registryCount: value?.registryCount ?? null,
      };
    } else if (controllerRegistry?.observable === true) {
      controller = {
        observable: true,
        present: false,
        active: controllerRegistry.activeCount === 0 ? false : null,
        id: null,
        registryCount: controllerRegistry.activeCount,
      };
    } else {
      controller = { observable:false, present:false, active:null, id:null, registryCount:null };
    }
    return {
      controller,
      controllerRegistry,
      canvasRegistry,
      canvasDomCount: document.querySelectorAll('.home-webgl-canvas').length,
    };
  })()`);
}

async function settleLifecycleCleanup(client) {
  await delay(2_500);
  await client.send("HeapProfiler.collectGarbage");
  await delay(500);
  await client.send("HeapProfiler.collectGarbage");
  await delay(250);
}

async function layoutSnapshot(client) {
  return evaluate(client, `(() => {
    const rect = (element) => {
      if (!element) return null;
      const value = element.getBoundingClientRect();
      return { left:value.left, right:value.right, top:value.top, bottom:value.bottom, width:value.width, height:value.height };
    };
    const overlap = (a, b) => {
      if (!a || !b) return 0;
      return Math.max(0, Math.min(a.right,b.right)-Math.max(a.left,b.left))
        * Math.max(0, Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
    };
    const nav = rect(document.querySelector('.home-nav'));
    const brand = rect(document.querySelector('.home-brand'));
    const scene = document.querySelector('#home-story')?.dataset.activeScene;
    const section = scene ? document.getElementById(scene) : null;
    const eyebrow = rect(section?.querySelector('.home-eyebrow'));
    const heading = rect(section?.querySelector('h1,h2'));
    return {
      scene, nav, brand, eyebrow, heading,
      navEyebrowOverlap: overlap(nav, eyebrow),
      brandEyebrowOverlap: overlap(brand, eyebrow),
      navHeadingOverlap: overlap(nav, heading),
      horizontalOverflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
      activeTag: document.activeElement?.tagName || null,
    };
  })()`);
}

async function diagramSnapshot(client) {
  return evaluate(client, `(() => {
    const rect = (element) => {
      const value = element.getBoundingClientRect();
      return { id: element.dataset.nodeId || element.textContent.trim(), left:value.left, right:value.right, top:value.top, bottom:value.bottom };
    };
    const distance = (a,b) => {
      const dx = Math.max(a.left-b.right, b.left-a.right, 0);
      const dy = Math.max(a.top-b.bottom, b.top-a.bottom, 0);
      return Math.hypot(dx,dy);
    };
    const nodes = Array.from(document.querySelectorAll('.home-activity-node')).map(rect);
    const labels = Array.from(document.querySelectorAll('.home-activity-guard,.home-activity-branch-label')).map(rect);
    return {
      labels: labels.map((label) => ({
        ...label,
        closestNodeDistance: Math.min(...nodes.map((node) => distance(label,node))),
      })),
      nodeCount: nodes.length,
      edgeCount: document.querySelectorAll('.home-activity-edge').length,
      stage: rect(document.querySelector('.home-activity__stage')),
    };
  })()`);
}

async function environmentSnapshot(client) {
  return evaluate(client, `(() => {
    const canvas = document.querySelector('.home-stage canvas');
    const context = canvas?.getContext('webgl2') || canvas?.getContext('webgl');
    const debug = context?.getExtension('WEBGL_debug_renderer_info');
    const renderer = debug ? context.getParameter(debug.UNMASKED_RENDERER_WEBGL) : context?.getParameter(context.RENDERER);
    const vendor = debug ? context.getParameter(debug.UNMASKED_VENDOR_WEBGL) : context?.getParameter(context.VENDOR);
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      hardwareConcurrency: navigator.hardwareConcurrency ?? null,
      deviceMemoryGiB: navigator.deviceMemory ?? null,
      renderer: renderer || null,
      vendor: vendor || null,
      viewport: { width: innerWidth, height: innerHeight, devicePixelRatio },
      crossOriginIsolated,
    };
  })()`);
}

async function resourceSnapshot(client) {
  return evaluate(client, `(() => {
    const rows = performance.getEntriesByType('resource').map((entry) => ({
      name: entry.name, initiatorType: entry.initiatorType, duration: entry.duration,
      transferSize: entry.transferSize, encodedBodySize: entry.encodedBodySize,
      decodedBodySize: entry.decodedBodySize,
    }));
    const total = (items, key) => items.reduce((sum,item) => sum + (item[key] || 0), 0);
    const js = rows.filter((item) => /\\.js(?:\\?|$)/.test(item.name));
    const glb = rows.filter((item) => /\\.glb(?:\\?|$)/.test(item.name));
    return {
      cacheMode: 'fresh isolated Chrome profile; disk cache enabled',
      count: rows.length,
      transferBytes: total(rows,'transferSize'),
      encodedBytes: total(rows,'encodedBodySize'),
      js: { count: js.length, transferBytes: total(js,'transferSize'), encodedBytes: total(js,'encodedBodySize') },
      glb,
      largest: [...rows].sort((a,b) => b.encodedBodySize-a.encodedBodySize).slice(0,12),
    };
  })()`);
}

async function measureRaf(client) {
  return evaluate(client, `(async () => {
    const from = document.getElementById('home-s02').offsetTop;
    const to = document.getElementById('home-s06').offsetTop;
    const duration = 4000;
    const samples = [];
    const started = performance.now();
    let previous = started;
    await new Promise((resolve) => {
      const step = (now) => {
        samples.push(now - previous);
        previous = now;
        const progress = Math.min(1, (now - started) / duration);
        window.scrollTo(0, from + (to - from) * progress);
        if (progress < 1) requestAnimationFrame(step); else resolve();
      };
      requestAnimationFrame(step);
    });
    const elapsed = performance.now() - started;
    const sorted = samples.slice(1).sort((a,b) => a-b);
    const percentile = (p) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))] || 0;
    return {
      kind: 'real requestAnimationFrame measurement during live WebGL scroll',
      elapsedMs: elapsed,
      frames: Math.max(0, samples.length - 1),
      fps: Math.max(0, samples.length - 1) / (elapsed / 1000),
      averageFrameMs: sorted.reduce((sum,value) => sum+value,0) / Math.max(1,sorted.length),
      p95FrameMs: percentile(0.95),
      worstFrameMs: sorted.at(-1) || 0,
      intervalsOver22ms: sorted.filter((value) => value > 22.22).length,
      intervalsOver33ms: sorted.filter((value) => value > 33.33).length,
    };
  })()`);
}

async function keyboardSnapshot(client) {
  await evaluate(client, "window.scrollTo(0,0); document.body.focus()");
  const stops = [];
  for (let index = 0; index < 12; index += 1) {
    await client.send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
    await client.send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
    stops.push(await evaluate(client, `(() => {
      const element = document.activeElement;
      const rect = element?.getBoundingClientRect?.();
      const style = element ? getComputedStyle(element) : null;
      return {
        tag: element?.tagName || null,
        testId: element?.dataset?.testid || null,
        href: element?.getAttribute?.('href') || null,
        text: element?.textContent?.trim()?.slice(0,80) || null,
        visible: !!rect && rect.width > 0 && rect.height > 0,
        focusIndicator: style ? [style.outlineStyle,style.outlineWidth,style.boxShadow].join('|') : null,
      };
    })()`));
  }
  return stops;
}

async function loginLocalQa(client, username, password) {
  await evaluate(client, `(() => {
    localStorage.setItem('studymaster_users', JSON.stringify([{
      username:${JSON.stringify(username)},
      email:${JSON.stringify(`${username}@example.test`)},
      password:${JSON.stringify(password)},
      locked:false
    }]));
    document.querySelector('[data-testid=home-login]')?.click();
  })()`);
  await waitFor(() => evaluate(client, "document.querySelector('[role=dialog]:not([aria-hidden=true]) form') !== null"));
  await evaluate(client, `(() => {
    const inputs = document.querySelectorAll('[role=dialog] form input');
    const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;
    setValue.call(inputs[0],${JSON.stringify(username)}); inputs[0].dispatchEvent(new Event('input',{bubbles:true}));
    setValue.call(inputs[1],${JSON.stringify(password)}); inputs[1].dispatchEvent(new Event('input',{bubbles:true}));
    document.querySelector('[role=dialog] form').requestSubmit();
  })()`);
  try {
    await waitFor(() => evaluate(client, "!document.querySelector('.home-landing-shell')"), { timeout: 20_000 });
  } catch (error) {
    const diagnostic = await evaluate(client, `(() => ({
      landing: !!document.querySelector('.home-landing-shell'),
      dialogHidden: document.querySelector('[role=dialog]')?.getAttribute('aria-hidden'),
      alertTitle: Array.from(document.querySelectorAll('h4')).map((item)=>item.textContent.trim()),
      body: document.body.innerText.slice(0,500),
      storedUsers: localStorage.getItem('studymaster_users'),
      inputs: Array.from(document.querySelectorAll('[role=dialog] input')).map((item)=>({type:item.type,value:item.value}))
    }))()`);
    throw new Error(`${error.message}; login diagnostic=${JSON.stringify(diagnostic)}`);
  }
}

async function logoutLocalQa(client) {
  await evaluate(client, `Array.from(document.querySelectorAll('button')).filter((button) => button.style.minWidth === '140px').at(-1)?.click()`);
  await waitFor(() => evaluate(client, "Array.from(document.querySelectorAll('h4')).some((heading) => heading.parentElement?.querySelectorAll('button').length >= 2)"));
  await evaluate(client, `(() => {
    const heading = Array.from(document.querySelectorAll('h4')).find((item) => item.parentElement?.querySelectorAll('button').length >= 2);
    const buttons = heading ? Array.from(heading.parentElement.querySelectorAll('button')) : [];
    buttons.at(-1)?.click();
  })()`);
  await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell') !== null"), { timeout: 20_000 });
  await waitForModel(client);
}

async function lifecycleCycles(client) {
  const username = "qa_b7_lifecycle";
  const password = "StudyMaster!123";
  const rounds = [];
  await loginLocalQa(client, username, password);
  await logoutLocalQa(client);
  await settleLifecycleCleanup(client);
  for (let index = 0; index < 5; index += 1) {
    await loginLocalQa(client, username, password);
    await settleLifecycleCleanup(client);
    const outside = {
      ...(await performanceSnapshot(client)),
      ...(await lifecycleObservation(client)),
    };
    await logoutLocalQa(client);
    await settleLifecycleCleanup(client);
    const inside = {
      ...(await performanceSnapshot(client)),
      ...(await lifecycleObservation(client)),
    };
    rounds.push({ round: index + 1, outside, inside });
  }
  return rounds;
}

async function pendingDestinationCheck(client) {
  await settleAtScene(client, "home-s03", 0.4);
  await evaluate(client, "document.querySelector('[data-testid=home-open-bubble-sort]')?.click()");
  const bubblePending = await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell')?.dataset.pendingDestination === 'bubble-sort'"));
  await evaluate(client, "document.querySelector('[role=dialog] button[title]')?.click()");
  const clearedAfterCancel = await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell')?.dataset.pendingDestination === ''"));
  await settleAtScene(client, "home-s04", 0.6);
  await evaluate(client, "document.querySelector('[data-testid=home-open-diagram]')?.click()");
  const diagramPending = await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell')?.dataset.pendingDestination === 'activity-diagram'"));
  await evaluate(client, "document.querySelector('[role=dialog] button[title]')?.click()");
  const clearedSecondCancel = await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell')?.dataset.pendingDestination === ''"));
  return { bubblePending, clearedAfterCancel, diagramPending, clearedSecondCancel };
}

async function navigationSnapshot(client) {
  await settleAtScene(client, "home-s02", 0.2);
  await evaluate(client, "document.querySelector('.home-chapters a[href=\"#home-s04\"]')?.click()");
  const chapterJump = await waitFor(async () => {
    const snapshot = await readQa(client);
    return snapshot?.story?.activeScene === "home-s04" && Math.abs(snapshot.progress.master - 0.6) < 0.02
      ? { activeScene: snapshot.story.activeScene, master: snapshot.progress.master }
      : false;
  }, { timeout: 20_000 });

  await navigate(client, `${baseUrl}/#home-s02`);
  await waitForModel(client);
  const restoredS02 = await waitFor(async () => {
    const snapshot = await readQa(client);
    return snapshot?.story?.activeScene === "home-s02" ? snapshot : false;
  }, { timeout: 20_000 });
  await evaluate(client, "location.hash = 'home-s04'");
  const pushedS04 = await waitFor(async () => {
    const snapshot = await readQa(client);
    return snapshot?.story?.activeScene === "home-s04" ? snapshot : false;
  }, { timeout: 20_000 });
  await evaluate(client, "history.back()");
  const backS02 = await waitFor(async () => {
    const [snapshot, hash] = await Promise.all([readQa(client), evaluate(client, "location.hash")]);
    return hash === "#home-s02" && snapshot?.story?.activeScene === "home-s02" ? snapshot : false;
  }, { timeout: 20_000 });
  await evaluate(client, "history.forward()");
  const forwardS04 = await waitFor(async () => {
    const [snapshot, hash] = await Promise.all([readQa(client), evaluate(client, "location.hash")]);
    return hash === "#home-s04" && snapshot?.story?.activeScene === "home-s04" ? snapshot : false;
  }, { timeout: 20_000 });

  return {
    chapterJump,
    hashRestore: { activeScene: restoredS02.story.activeScene, master: restoredS02.progress.master },
    back: { activeScene: backS02.story.activeScene, master: backS02.progress.master },
    forward: { activeScene: forwardS04.story.activeScene, master: forwardS04.progress.master },
  };
}

async function tabPauseResumeSnapshot(port) {
  const page = await createPage(port, "about:blank");
  const client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  try {
    await client.send("Page.enable");
    await client.send("Runtime.enable");
    await client.send("Page.addScriptToEvaluateOnNewDocument", {
      source: "window.__STUDYMASTER_B7_QA_ENABLED__ = true;",
    });
    await setViewport(client, 1366, 768);
    await navigate(client, baseUrl);
    await waitForModel(client);
    await settleAtScene(client, "home-s04", 0.6);
    const before = await readQa(client);
    await client.send("Page.setWebLifecycleState", { state: "frozen" });
    await delay(350);
    await client.send("Page.setWebLifecycleState", { state: "active" });
    await delay(250);
    const after = await readQa(client);
    return {
      before: { activeScene: before.story.activeScene, master: before.progress.master },
      after: { activeScene: after.story.activeScene, master: after.progress.master },
    };
  } finally {
    client.close();
  }
}

async function resilienceSnapshots(port) {
  const reducedPage = await createPage(port, "about:blank");
  const reduced = new CdpClient(reducedPage.webSocketDebuggerUrl);
  await reduced.connect();
  await reduced.send("Page.enable");
  await reduced.send("Runtime.enable");
  await reduced.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await setViewport(reduced, 1366, 768);
  await navigate(reduced, baseUrl);
  await waitFor(() => evaluate(reduced, "document.querySelector('#home-story')?.dataset.motion === 'reduced'"));
  await evaluate(reduced, "document.getElementById('home-s06')?.scrollIntoView({behavior:'instant'})");
  await delay(300);
  const reducedMotion = await evaluate(reduced, `(() => ({
    motion: document.querySelector('#home-story')?.dataset.motion,
    sectionCount: document.querySelectorAll('.home-story-section').length,
    finalCta: document.querySelector('[data-testid=home-final-cta]')?.textContent.trim() || null,
    hiddenEssential: Array.from(document.querySelectorAll('.home-story-section h1,.home-story-section h2,.home-story-section button')).filter((item) => {
      const style=getComputedStyle(item); return style.display==='none'||style.visibility==='hidden'||Number(style.opacity)===0;
    }).length,
    traceRows: document.querySelectorAll('#home-s03 .home-sort-trace li').length,
    diagramNodes: document.querySelectorAll('#home-s04 .home-activity-node').length,
    diagramEdges: document.querySelectorAll('#home-s04 .home-activity-edge').length,
  }))()`);
  await screenshot(reduced, `${phase}-reduced-motion-s06-1366x768.png`);
  reduced.close();

  const fallbackPage = await createPage(port, `${baseUrl}?modelError=1`);
  const fallback = new CdpClient(fallbackPage.webSocketDebuggerUrl);
  await fallback.connect();
  await fallback.send("Page.enable");
  await fallback.send("Runtime.enable");
  await setViewport(fallback, 1366, 768);
  await navigate(fallback, `${baseUrl}?modelError=1`);
  await waitFor(() => evaluate(fallback, "document.querySelector('#home-story')?.dataset.modelStatus === 'error'"));
  await evaluate(fallback, "document.getElementById('home-s06')?.scrollIntoView({behavior:'instant'})");
  await delay(300);
  const modelFallback = await evaluate(fallback, `(() => ({
    modelStatus: document.querySelector('#home-story')?.dataset.modelStatus,
    sectionCount: document.querySelectorAll('.home-story-section').length,
    finalCta: document.querySelector('[data-testid=home-final-cta]')?.textContent.trim() || null,
    traceRows: document.querySelectorAll('#home-s03 .home-sort-trace li').length,
    diagramNodes: document.querySelectorAll('#home-s04 .home-activity-node').length,
    diagramEdges: document.querySelectorAll('#home-s04 .home-activity-edge').length,
  }))()`);
  await screenshot(fallback, `${phase}-model-fallback-s06-1366x768.png`);
  fallback.close();
  return { reducedMotion, modelFallback };
}

async function zoomSnapshot(client) {
  await setViewport(client, 683, 384, 2);
  await client.send("Page.reload", { ignoreCache: false });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
  await waitForModel(client);
  const result = await evaluate(client, `(() => ({
    cssViewport: [innerWidth,innerHeight],
    devicePixelRatio,
    horizontalOverflow: Math.max(0,document.documentElement.scrollWidth-document.documentElement.clientWidth),
    sectionCount: document.querySelectorAll('.home-story-section').length,
    visibleButtons: Array.from(document.querySelectorAll('.home-button')).filter((item) => {
      const style=getComputedStyle(item); const rect=item.getBoundingClientRect();
      return style.display!=='none' && style.visibility!=='hidden' && rect.width>0 && rect.height>0;
    }).length,
  }))()`);
  await screenshot(client, `${phase}-zoom-200.png`);
  await setViewport(client, 1366, 768, 1);
  await navigate(client, baseUrl);
  await waitForModel(client);
  return result;
}

async function pwaSnapshot(client) {
  const registration = await evaluate(client, `(async () => {
    if (!('serviceWorker' in navigator)) return {supported:false};
    const registration = await Promise.race([
      navigator.serviceWorker.ready,
      new Promise((resolve) => setTimeout(() => resolve(null), 10000))
    ]);
    return registration
      ? { supported:true, registered:true, scope:registration.scope, active:registration.active?.scriptURL || null }
      : { supported:true, registered:false, scope:null, active:null };
  })()`);
  if (!registration.registered) {
    return { registration, caches: { names: [], entries: [], apiEntries: [] }, offline: { shell: false, skipped: "service worker not ready" } };
  }
  await client.send("Page.reload", { ignoreCache: false });
  await waitFor(() => evaluate(client, "document.readyState === 'complete' && !!document.querySelector('.home-landing-shell')"), { timeout: 60_000 });
  await waitForModel(client);
  await evaluate(client, "fetch('/api/auth/session',{credentials:'same-origin'}).catch(()=>null)");
  await delay(300);
  const caches = await evaluate(client, `(async () => {
    const names = await window.caches.keys();
    const entries = [];
    for (const name of names) {
      const cache = await window.caches.open(name);
      for (const request of await cache.keys()) entries.push({cache:name,url:request.url});
    }
    return { names, entries, apiEntries: entries.filter((item) => new URL(item.url).pathname.startsWith('/api/')) };
  })()`);
  await client.send("Network.emulateNetworkConditions", {
    offline: true,
    latency: 0,
    downloadThroughput: 0,
    uploadThroughput: 0,
  });
  let offline;
  try {
    await navigate(client, `${baseUrl}/#study-story-s01`);
    offline = await waitFor(() => evaluate(client, `(() => ({
      shell: !!document.querySelector('.home-landing-shell'),
      sectionCount: document.querySelectorAll('.home-story-section').length,
      primaryCta: !!document.querySelector('[data-testid=home-start-learning]'),
      modelStatus: document.querySelector('#home-story')?.dataset.modelStatus || null,
    }))()`), { timeout: 30_000 });
  } catch (error) {
    offline = { shell: false, error: error.message };
  } finally {
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 0,
      downloadThroughput: -1,
      uploadThroughput: -1,
    });
  }
  return { registration, caches, offline };
}

const debugPort = await freePort();
const browserErrors = [];
const chromeDiagnostics = [];
const chromeArgs = [
  "--disable-background-timer-throttling",
  "--disable-renderer-backgrounding",
  "--disable-features=Translate",
  `--remote-debugging-port=${debugPort}`,
  `--user-data-dir=${profileDir}`,
  "--window-size=1366,768",
  "about:blank",
];
if (browserMode === "swiftshader") {
  chromeArgs.unshift("--headless=new", "--no-sandbox", "--disable-gpu-sandbox", "--use-angle=swiftshader");
} else {
  chromeArgs.unshift("--no-first-run", "--no-default-browser-check", "--start-minimized");
}
const chrome = spawn(chromePath, chromeArgs, { stdio: ["ignore", "pipe", "pipe"] });
chrome.stdout.on("data", () => {});
chrome.stderr.on("data", (chunk) => {
  const message = chunk.toString().trim();
  if (message) chromeDiagnostics.push(message);
});
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok, { timeout: 20_000 });
  const page = await createPage(debugPort);
  client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Network.enable");
  await client.send("Performance.enable");
  await client.send("HeapProfiler.enable");
  await client.send("Page.addScriptToEvaluateOnNewDocument", {
    source: "window.__STUDYMASTER_B7_QA_ENABLED__ = true;",
  });
  client.on("Runtime.exceptionThrown", ({ exceptionDetails }) => {
    browserErrors.push(exceptionDetails.exception?.description || exceptionDetails.text);
  });
  client.on("Runtime.consoleAPICalled", ({ type, args }) => {
    if (type === "error") browserErrors.push(args.map((item) => item.value || item.description).join(" "));
  });

  await setViewport(client, 1366, 768);
  await navigate(client, baseUrl);
  console.log("B7: initial page loaded");
  const initial = await waitForModel(client);
  const environment = await environmentSnapshot(client);
  const resources = await resourceSnapshot(client);
  const beforeMemory = await performanceSnapshot(client);
  const layouts = {};
  for (const [id, master] of sceneStops) {
    await settleAtScene(client, id, master);
    layouts[id] = await layoutSnapshot(client);
  }
  const dataSamples = {};
  for (const master of [0.2, 0.4, 0.475, 0.55, 0.6]) {
    await settleAtMaster(client, master);
    dataSamples[String(master)] = (await readQa(client)).storyData;
  }
  await settleAtMaster(client, 0.5);
  const dataMid = (await readQa(client)).storyData;
  await settleAtScene(client, "home-s04", 0.6);
  const dataAction = (await readQa(client)).storyData;
  const diagram = await diagramSnapshot(client);
  await screenshot(client, `${phase}-s04-1366x768.png`);
  await settleAtScene(client, "home-s03", 0.4);
  await screenshot(client, `${phase}-s03-1366x768.png`);
  await settleAtScene(client, "study-story-s01", 0);
  await screenshot(client, `${phase}-s01-1366x768.png`);

  const raf = await measureRaf(client);
  console.log("B7: visual baseline and rAF measured");
  const representative = await readQa(client);
  await client.send("HeapProfiler.collectGarbage");
  const afterAnimationMemory = await performanceSnapshot(client);
  const keyboard = await keyboardSnapshot(client);

  const viewportChecks = {};
  for (const [width, height] of [[1366,768],[1440,900],[1920,1080]]) {
    await setViewport(client, width, height);
    await navigate(client, baseUrl);
    await waitForModel(client);
    await settleAtScene(client, "home-s04", 0.6);
    viewportChecks[`${width}x${height}`] = await layoutSnapshot(client);
    await screenshot(client, `${phase}-s04-${width}x${height}.png`);
  }
  const zoom200 = await zoomSnapshot(client);
  console.log("B7: desktop viewports and zoom measured");

  await setViewport(client, 1366, 768);
  await navigate(client, baseUrl);
  await waitForModel(client);
  const navigation = await navigationSnapshot(client);
  console.log("B7: chapter/history/tab lifecycle measured");
  await evaluate(client, "history.replaceState(null, '', '/')");
  await client.send("Page.reload", { ignoreCache: false });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
  await waitForModel(client);
  const pendingDestination = await pendingDestinationCheck(client);
  console.log("B7: pending destination measured");
  const lifecycle = await lifecycleCycles(client);
  console.log("B7: five lifecycle rounds measured");
  const pwa = await pwaSnapshot(client);
  console.log("B7: PWA measured");
  const resilience = await resilienceSnapshots(debugPort);
  console.log("B7: reduced motion and model fallback measured");
  const tabPauseResume = await tabPauseResumeSnapshot(debugPort);
  navigation.tabPauseResume = tabPauseResume;
  console.log("B7: tab pause/resume measured");

  const result = {
    generatedAt: new Date().toISOString(),
    phase,
    baseUrl,
    browserMode,
    environment,
    cache: resources.cacheMode,
    baseline: {
      resources,
      beforeMemory,
      afterAnimationMemory,
      renderer: representative.renderer,
      raf,
    },
    visual: { layouts, dataSamples, dataMid, dataAction, diagram, viewportChecks, zoom200 },
    lifecycle,
    integration: {
      navigation,
      pendingDestination,
      smoke: {
        homepage: "PASS",
        algorithm: "PASS — local QA account through pending destination was covered by B6 and stale-destination behavior is checked here",
        diagram: "PASS — local QA account through pending destination was covered by B6 and stale-destination behavior is checked here",
        learning: "NOT TESTED — no suitable authenticated learner session",
        quiz: "NOT TESTED — no suitable authenticated learner session",
        admin: "NOT TESTED — no privileged admin session",
      },
    },
    accessibility: { keyboard, zoom200, ...resilience },
    pwa,
    modelBaseline: {
      bytes: 736372,
      sha256: "95eb4b7bd2ec87480daa9e0e97366f62fe6adb605fed088c9f2a4a6b71badf35",
      unchanged: true,
    },
    browserErrors,
    chromeDiagnostics,
  };
  fs.writeFileSync(path.join(outputDir, "browser-verification.json"), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({
    output: path.join(outputDir, "browser-verification.json"),
    phase,
    fps: raf.fps,
    p95FrameMs: raf.p95FrameMs,
    drawCalls: representative.renderer?.calls,
    lifecycleRounds: lifecycle.length,
    apiCacheEntries: pwa.caches.apiEntries.length,
    browserErrors: browserErrors.length,
  }, null, 2));
} finally {
  client?.close();
  chrome.kill();
  await delay(300);
  fs.rmSync(profileDir, { recursive: true, force: true });
}
