import crypto from "node:crypto";
import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import WebSocket from "ws";

const projectRoot = process.cwd();
const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(
  projectRoot,
  process.argv[3] || "artifacts/homepage-3d/b5a/browser",
);
const candidatePath = path.resolve(
  projectRoot,
  process.argv[4] || "public/assets/home/cancer-knowledge-machine/cancer-machine.b5a-candidate.glb",
);
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(projectRoot, ".tmp", `chrome-b5a-${process.pid}`);
const candidate = fs.readFileSync(candidatePath);
const candidateSha256 = crypto.createHash("sha256").update(candidate).digest("hex");

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(profileDir, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitFor(check, { timeout = 60_000, interval = 200 } = {}) {
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
        clearTimeout(pending.timer);
        if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
        else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) || []) listener(message.params);
    });
    this.socket.on("close", () => {
      for (const pending of this.pending.values()) {
        clearTimeout(pending.timer);
        pending.reject(new Error(`CDP socket closed while waiting for ${pending.method}`));
      }
      this.pending.clear();
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP command timed out: ${method}`));
      }, 15_000);
      this.pending.set(id, { resolve, reject, method, timer });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) || [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }

  close() {
    this.socket?.close();
  }
}

async function createPage(port) {
  return waitFor(async () => {
    const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`, {
      method: "PUT",
    });
    return response.ok ? response.json() : null;
  });
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Browser evaluation failed");
  return result.result.value;
}

async function screenshot(client, name) {
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const target = path.join(outputDir, name);
  fs.writeFileSync(target, Buffer.from(data, "base64"));
  return target;
}

async function readQa(client) {
  return evaluate(client, "window.__STUDYMASTER_B4_QA__?.snapshot?.() || null");
}

async function setProgress(client, target) {
  const initial = await waitFor(async () => {
    const snapshot = await readQa(client);
    return snapshot?.controller?.active && snapshot?.poseTiming?.validatedClipCount > 0
      ? snapshot
      : null;
  });
  const top = initial.controller.start
    + ((initial.controller.end - initial.controller.start) * target);
  await evaluate(client, `scrollTo({ top: ${top}, behavior: "instant" })`);
  const settled = await waitFor(async () => {
    const snapshot = await readQa(client);
    return Math.abs((snapshot?.controller?.progress ?? -1) - target) <= 0.025
      ? snapshot
      : null;
  });
  await delay(700);
  return settled;
}

const port = await getFreePort();
const chrome = spawn(chromePath, [
  "--headless=new",
  "--enable-webgl",
  "--enable-unsafe-swiftshader",
  "--use-angle=swiftshader",
  "--disable-gpu-sandbox",
  "--disable-background-networking",
  "--disable-component-update",
  "--disable-default-apps",
  "--disable-extensions",
  "--disable-sync",
  "--hide-scrollbars",
  "--mute-audio",
  "--no-first-run",
  "--no-default-browser-check",
  "--remote-allow-origins=*",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });
let chromeStderr = "";
chrome.stderr.on("data", (chunk) => {
  chromeStderr += chunk.toString();
});

let client;
let interceptedRequests = 0;
const browserErrors = [];
try {
  console.error("[B5A preview] creating Chrome page");
  const page = await createPage(port);
  console.error(`[B5A preview] target ${page.type} ${page.webSocketDebuggerUrl}`);
  client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  console.error("[B5A preview] CDP connected");
  client.on("Fetch.requestPaused", async ({ requestId }) => {
    interceptedRequests += 1;
    try {
      await client.send("Fetch.fulfillRequest", {
        requestId,
        responseCode: 200,
        responseHeaders: [
          { name: "Content-Type", value: "model/gltf-binary" },
          { name: "Content-Length", value: String(candidate.length) },
          { name: "Cache-Control", value: "no-store" },
          { name: "X-StudyMaster-B5A-Candidate", value: candidateSha256 },
        ],
        body: candidate.toString("base64"),
      });
      console.error("[B5A preview] candidate GLB fulfilled");
    } catch (error) {
      browserErrors.push(error.message);
    }
  });
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Log.enable");
  await client.send("Fetch.enable", {
    patterns: [{ urlPattern: "*cancer-machine.blockout-v2.glb*", requestStage: "Request" }],
  });
  console.error("[B5A preview] CDP domains enabled");
  client.on("Runtime.exceptionThrown", ({ exceptionDetails }) => {
    browserErrors.push(exceptionDetails.exception?.description || exceptionDetails.text);
  });
  client.on("Log.entryAdded", ({ entry }) => {
    if (entry.level === "error") browserErrors.push(entry.text);
  });

  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await client.send("Page.navigate", { url: baseUrl });
  console.error("[B5A preview] navigation requested");
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"));
  console.error("[B5A preview] document complete");
  const modelState = await waitFor(() => evaluate(
    client,
    "document.querySelector('#home-story')?.dataset.modelStatus === 'ready' ? 'ready' : null",
  ));
  console.error("[B5A preview] model ready");
  const s01 = await setProgress(client, 0);
  const s01Image = await screenshot(client, "01-b5a-s01-1366x768.png");
  const s02 = await setProgress(client, 1);
  const s02Image = await screenshot(client, "02-b5a-s02-1366x768.png");
  const report = {
    status: modelState === "ready"
      && interceptedRequests > 0
      && s01.poseTiming?.validatedClipCount === 16
      && s02.poseTiming?.validatedClipCount === 16
      && s01.framing?.inside === true
      && s02.framing?.inside === true
      ? "PASS"
      : "FAIL",
    checkedAtUtc: new Date().toISOString(),
    method: "Real B4 production layout with the v2 GLB request intercepted and fulfilled by the separate B5A candidate; product files and v2 asset remain unchanged.",
    baseUrl,
    viewport: { width: 1366, height: 768, deviceScaleFactor: 1 },
    candidate: { path: candidatePath, bytes: candidate.length, sha256: candidateSha256 },
    interceptedRequests,
    modelState,
    s01,
    s02,
    images: [s01Image, s02Image],
    browserErrors,
  };
  fs.writeFileSync(
    path.join(outputDir, "browser-preview-verification.json"),
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );
  console.log(JSON.stringify({ status: report.status, outputDir, interceptedRequests }));
  if (report.status !== "PASS") process.exitCode = 1;
}
finally {
  if (chromeStderr.trim()) console.error(chromeStderr.trim());
  client?.close();
  chrome.kill();
}
