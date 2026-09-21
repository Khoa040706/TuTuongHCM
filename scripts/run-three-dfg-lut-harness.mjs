import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const distDir = path.resolve(process.argv[2]);
const outputDir = path.resolve(process.argv[3]);
const label = process.argv[4] || "candidate";
const chromePath = process.env.STUDYMASTER_CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-dfg-patch-${process.pid}`);
fs.mkdirSync(outputDir, { recursive: true });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer(); server.unref(); server.once("error", reject);
    server.listen(0, "127.0.0.1", () => { const { port } = server.address(); server.close(() => resolve(port)); });
  });
}
async function waitFor(check, timeout = 30_000) {
  const started = Date.now(); let lastError;
  while (Date.now() - started < timeout) {
    try { const value = await check(); if (value) return value; } catch (error) { lastError = error; }
    await delay(100);
  }
  throw lastError || new Error(`Timeout after ${timeout}ms`);
}
class Cdp {
  constructor(url) { this.url = url; this.id = 1; this.pending = new Map(); }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => { this.socket.once("open", resolve); this.socket.once("error", reject); });
    this.socket.on("message", (raw) => {
      const message = JSON.parse(raw.toString()); if (!message.id) return;
      const pending = this.pending.get(message.id); if (!pending) return; this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message)); else pending.resolve(message.result);
    });
  }
  send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => { this.pending.set(id, { resolve, reject }); this.socket.send(JSON.stringify({ id, method, params })); });
  }
  close() { this.socket?.close(); }
}
async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}
async function gc(client) {
  await delay(1200); await client.send("HeapProfiler.collectGarbage"); await delay(300);
  await client.send("HeapProfiler.collectGarbage"); await delay(200);
}
async function metrics(client) {
  const [performance, dom, qa] = await Promise.all([
    client.send("Performance.getMetrics"), client.send("Memory.getDOMCounters"), evaluate(client, "window.__DFG_PATCH_QA__.snapshot()"),
  ]);
  const value = (name) => performance.metrics.find((item) => item.name === name)?.value ?? null;
  return { nodes: dom.nodes, listeners: dom.jsEventListeners, heapUsedBytes: value("JSHeapUsedSize"), qa };
}
async function graphics(client) {
  return evaluate(client, `(() => { const c=document.createElement('canvas'); const gl=c.getContext('webgl2'); const e=gl.getExtension('WEBGL_debug_renderer_info'); return {vendor:gl.getParameter(e.UNMASKED_VENDOR_WEBGL),renderer:gl.getParameter(e.UNMASKED_RENDERER_WEBGL),userAgent:navigator.userAgent,devicePixelRatio}; })()`);
}

const port = await freePort();
const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, `http://127.0.0.1:${port}`).pathname;
  const file = pathname === "/qa.js" ? path.join(distDir, "qa.js") : path.join(distDir, "index.html");
  response.writeHead(200, { "content-type": file.endsWith(".js") ? "text/javascript" : "text/html", "cache-control": "no-store" });
  fs.createReadStream(file).pipe(response);
});
await new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", resolve); });
const debugPort = await freePort();
const chrome = spawn(chromePath, ["--no-first-run", "--no-default-browser-check", "--start-minimized", "--disable-background-timer-throttling", `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`, `http://127.0.0.1:${port}/`], { stdio: "ignore" });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok);
  const targets = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
  const page = targets.find((item) => item.type === "page");
  client = new Cdp(page.webSocketDebuggerUrl); await client.connect();
  await client.send("Runtime.enable"); await client.send("Performance.enable"); await client.send("HeapProfiler.enable");
  await waitFor(() => evaluate(client, "document.readyState === 'complete' && !!window.__DFG_PATCH_QA__"));
  const browserGraphics = await graphics(client);
  if (/swiftshader|software|llvmpipe/i.test(browserGraphics.renderer)) throw new Error(`Real GPU required: ${browserGraphics.renderer}`);
  const twoRenderer = await evaluate(client, "window.__DFG_PATCH_QA__.twoRendererIsolation()");
  await gc(client);
  const warmup = [];
  for (let index = 0; index < 2; index += 1) {
    const proof = await evaluate(client, "window.__DFG_PATCH_QA__.mount()");
    await evaluate(client, "window.__DFG_PATCH_QA__.unmount()"); await gc(client);
    warmup.push({ proof, outside: await metrics(client) });
  }
  const baseline = await metrics(client);
  const rounds = [];
  for (let round = 1; round <= 5; round += 1) {
    const proof = await evaluate(client, "window.__DFG_PATCH_QA__.mount()");
    await evaluate(client, "window.__DFG_PATCH_QA__.unmount()"); await gc(client);
    const outside = await metrics(client); rounds.push({ round, proof, outside });
    console.log(`${label}: ${round}/5 nodes=${outside.nodes} listeners=${outside.listeners}`);
  }
  const final = await metrics(client);
  const result = {
    generatedAt: new Date().toISOString(), label, browserGraphics,
    method: { warmupCycles: 2, rounds: 5, sourceLocked: true, cleanup: "geometry.dispose + material.dispose + renderer.dispose, then two forced GCs" },
    twoRenderer, warmup, baseline, rounds, final,
    deltas: { nodes: final.nodes - baseline.nodes, listeners: final.listeners - baseline.listeners, heapUsedBytes: final.heapUsedBytes - baseline.heapUsedBytes },
  };
  fs.writeFileSync(path.join(outputDir, "result.json"), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ output: path.join(outputDir, "result.json"), deltas: result.deltas, signature: rounds[0].proof.signature, renderer: browserGraphics.renderer }, null, 2));
} finally {
  client?.close(); chrome.kill(); server.close(); await delay(300); fs.rmSync(profileDir, { recursive: true, force: true });
}
