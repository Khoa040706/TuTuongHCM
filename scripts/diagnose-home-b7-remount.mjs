import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { spawn } from "node:child_process";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b7/final/remount-diagnosis");
const testMode = process.argv[4] || "cycles";
const chromePath = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const profileDir = path.join(outputDir, "chrome-profile");
fs.mkdirSync(outputDir, { recursive: true });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function waitFor(predicate, { timeout = 20_000, interval = 200 } = {}) {
  const deadline = Date.now() + timeout;
  let lastError;
  while (Date.now() < deadline) {
    try {
      if (await predicate()) return;
    } catch (error) {
      lastError = error;
    }
    await delay(interval);
  }
  throw lastError || new Error(`Timed out after ${timeout}ms`);
}

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
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    const rejectPending = (event) => {
      const error = new Error(`CDP socket closed before response (${event?.code ?? "unknown"})`);
      for (const pending of this.pending.values()) pending.reject(error);
      this.pending.clear();
    };
    this.socket.addEventListener("close", rejectPending, { once: true });
    this.socket.addEventListener("error", rejectPending, { once: true });
    this.socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) || []) listener(message.params);
    });
  }
  send(method, params = {}) {
    if (this.socket?.readyState !== WebSocket.OPEN) {
      return Promise.reject(new Error("CDP socket is not open"));
    }
    const id = this.nextId++;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  on(method, listener) {
    const listeners = this.listeners.get(method) || [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }
  close() { this.socket?.close(); }
}

async function createPage(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?about%3Ablank`, { method: "PUT" });
  if (!response.ok) throw new Error(`Cannot create page: ${response.status}`);
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

async function takeSnapshot(client, target) {
  const stream = fs.createWriteStream(target);
  client.on("HeapProfiler.addHeapSnapshotChunk", ({ chunk }) => stream.write(chunk));
  await client.send("HeapProfiler.takeHeapSnapshot", { reportProgress: false, captureNumericValue: true });
  await new Promise((resolve, reject) => {
    stream.end(resolve);
    stream.on("error", reject);
  });
}

async function state(client) {
  return evaluate(client, `(() => {
    const root = document.querySelector('#home-story');
    const snapshot = window.__STUDYMASTER_B6_QA__?.snapshot?.() ?? null;
    const canvas = document.querySelector('canvas.home-webgl-canvas, .home-webgl-canvas canvas');
    const gl = canvas?.getContext('webgl2') || canvas?.getContext('webgl');
    const info = gl?.getExtension('WEBGL_debug_renderer_info');
    return {
      at: performance.now(),
      landing: Boolean(document.querySelector('.home-landing-shell')),
      modelStatus: root?.dataset.modelStatus ?? null,
      canvasState: document.querySelector('[data-testid=home-canvas-state]')?.dataset.state ?? null,
      canvasCount: document.querySelectorAll('.home-webgl-canvas').length,
      contextLost: gl?.isContextLost?.() ?? null,
      renderer: gl && info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : null,
      lifecycle: window.__STUDYMASTER_HOME_LIFECYCLE__ ?? null,
      controllerRegistry: window.__STUDYMASTER_HOME_CONTROLLER_REGISTRY__ ?? null,
      rendererLifecycle: window.__STUDYMASTER_RENDERER_LIFECYCLE__ ?? null,
      qaRenderer: snapshot?.renderer ?? null,
      qaProgress: snapshot?.progress ?? null,
      telemetry: window.__B7_REMOUNT_TELEMETRY__ ?? null,
    };
  })()`);
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
  await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell') === null"));
}

async function logout(client) {
  await evaluate(client, "Array.from(document.querySelectorAll('button')).filter((button)=>button.style.minWidth === '140px').at(-1)?.click()");
  await waitFor(() => evaluate(client, "Array.from(document.querySelectorAll('h4')).some((item)=>item.parentElement?.parentElement?.querySelectorAll('button').length >= 1)"));
  await evaluate(client, `(() => {
    const title=Array.from(document.querySelectorAll('h4')).find((item)=>item.parentElement?.parentElement?.querySelectorAll('button').length >= 1);
    Array.from(title?.parentElement?.parentElement?.querySelectorAll('button') || []).at(-1)?.click();
  })()`);
  await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell') !== null"));
}

const debugPort = await freePort();
const chrome = spawn(chromePath, [
  "--no-first-run", "--no-default-browser-check", "--start-minimized",
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding",
  "--enable-logging=stderr", "--v=1",
  `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`,
  "--window-size=1366,768", "about:blank",
], { stdio: ["ignore", "pipe", "pipe"] });

const result = {
  schemaVersion: "studymaster-b7-remount-diagnosis-v1",
  baseUrl,
  startedAt: new Date().toISOString(),
  sourceBuildId: fs.readFileSync(path.resolve(".next/BUILD_ID"), "utf8").trim(),
  debugPort,
  testMode,
  events: [],
  requests: [],
  rounds: [],
  status: "RUNNING",
};
chrome.stdout.on("data", (chunk) => fs.appendFileSync(path.join(outputDir, "chrome.stdout.log"), chunk));
chrome.stderr.on("data", (chunk) => fs.appendFileSync(path.join(outputDir, "chrome.stderr.log"), chunk));
chrome.on("exit", (code, signal) => {
  result.events.push({ type: "chrome-exit", at: Date.now(), code, signal });
});
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok);
  const page = await createPage(debugPort);
  client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  for (const domain of ["Page", "Runtime", "Log", "Network", "HeapProfiler"]) {
    await client.send(`${domain}.enable`);
  }
  client.on("Runtime.exceptionThrown", ({ exceptionDetails }) => {
    result.events.push({ type: "exception", at: Date.now(), details: exceptionDetails.text, description: exceptionDetails.exception?.description ?? null });
  });
  client.on("Runtime.consoleAPICalled", ({ type, args }) => {
    const text = args.map((arg) => arg.value ?? arg.description ?? "").join(" ");
    if (/webgl|context|three|error|warn/i.test(text)) result.events.push({ type: `console:${type}`, at: Date.now(), text });
  });
  client.on("Log.entryAdded", ({ entry }) => result.events.push({ type: `log:${entry.level}`, at: Date.now(), text: entry.text, source: entry.source }));
  client.on("Network.loadingFailed", (event) => result.requests.push({ type: "failed", at: Date.now(), ...event }));
  client.on("Network.responseReceived", ({ response }) => {
    if (/cancer-machine|model-manifest/.test(response.url)) result.requests.push({ type: "response", at: Date.now(), url: response.url, status: response.status, fromDiskCache: response.fromDiskCache, fromServiceWorker: response.fromServiceWorker });
  });
  await client.send("Page.addScriptToEvaluateOnNewDocument", { source: `
    window.__STUDYMASTER_B7_QA_ENABLED__ = true;
    window.__STUDYMASTER_B7_QA_MODE__ = 'full';
    window.__B7_REMOUNT_TELEMETRY__ = { errors: [], contexts: [] };
    addEventListener('error', (event) => window.__B7_REMOUNT_TELEMETRY__.errors.push({ type: 'error', message: event.message, at: performance.now() }));
    addEventListener('unhandledrejection', (event) => window.__B7_REMOUNT_TELEMETRY__.errors.push({ type: 'rejection', message: String(event.reason), at: performance.now() }));
    addEventListener('webglcontextlost', (event) => window.__B7_REMOUNT_TELEMETRY__.contexts.push({ type: 'lost', target: event.target?.className ?? null, at: performance.now() }), true);
    addEventListener('webglcontextrestored', (event) => window.__B7_REMOUNT_TELEMETRY__.contexts.push({ type: 'restored', target: event.target?.className ?? null, at: performance.now() }), true);
  ` });
  await client.send("Page.navigate", { url: baseUrl });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
  await waitFor(async () => (await state(client)).modelStatus === "ready", { timeout: 60_000 });
  result.initial = await state(client);

  const username = "qa_b7_remount";
  const password = "StudyMaster!123";
  if (testMode === "warmup-snapshot") {
    await login(client, username, password);
    await logout(client);
    await waitFor(async () => (await state(client)).modelStatus === "ready", { timeout: 60_000 });
    await login(client, username, password);
    await delay(2_500);
    await client.send("HeapProfiler.collectGarbage");
    await delay(500);
    await client.send("HeapProfiler.collectGarbage");
    result.warmupOutside = await state(client);
    result.snapshot = "outside-after-warmup.heapsnapshot";
    await takeSnapshot(client, path.join(outputDir, result.snapshot));
    result.status = "PASS";
  }

  if (testMode !== "cycles" && testMode !== "warmup-snapshot") {
    throw new Error(`Unknown test mode: ${testMode}`);
  }

  if (testMode === "cycles") {
  for (let round = 1; round <= 5; round += 1) {
    const entry = { round, beforeLogin: await state(client) };
    await login(client, username, password);
    entry.afterLogin = await state(client);
    await delay(2_500);
    await client.send("HeapProfiler.collectGarbage");
    await logout(client);
    entry.afterLogout = await state(client);
    try {
      await waitFor(async () => (await state(client)).modelStatus === "ready", { timeout: 60_000, interval: 500 });
      entry.ready = await state(client);
      entry.status = "PASS";
    } catch (error) {
      entry.status = "FAIL";
      entry.error = error.message;
      entry.samples = [];
      for (let sample = 0; sample < 5; sample += 1) {
        entry.samples.push(await state(client));
        await delay(500);
      }
      result.rounds.push(entry);
      throw new Error(`Round ${round} remount failed: ${error.message}`);
    }
    result.rounds.push(entry);
  }
  result.status = "PASS";
  }
} catch (error) {
  result.status = "FAIL";
  result.error = error.stack || error.message;
  if (client?.socket?.readyState === WebSocket.OPEN) {
    result.finalState = await state(client).catch(() => null);
  }
  process.exitCode = 2;
} finally {
  result.finishedAt = new Date().toISOString();
  fs.writeFileSync(path.join(outputDir, "remount-diagnosis.json"), `${JSON.stringify(result, null, 2)}\n`);
  client?.close();
  chrome.kill();
  console.log(JSON.stringify({ status: result.status, output: path.join(outputDir, "remount-diagnosis.json"), rounds: result.rounds.map(({ round, status }) => ({ round, status })) }, null, 2));
}
