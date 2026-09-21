import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const distDir = path.resolve(process.argv[2]);
const outputDir = path.resolve(process.argv[3]);
const chromePath = process.env.STUDYMASTER_CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-r3f-teardown-${process.pid}`);
fs.mkdirSync(outputDir, { recursive: true });
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function freePort() { return new Promise((resolve, reject) => { const server = net.createServer(); server.unref(); server.once("error", reject); server.listen(0, "127.0.0.1", () => { const { port } = server.address(); server.close(() => resolve(port)); }); }); }
async function waitFor(check, timeout = 30000) { const started = Date.now(); let lastError; while (Date.now() - started < timeout) { try { const value = await check(); if (value) return value; } catch (error) { lastError = error; } await delay(100); } throw lastError || new Error(`Timeout after ${timeout}ms`); }
class Cdp {
  constructor(url) { this.url = url; this.id = 1; this.pending = new Map(); }
  async connect() { this.socket = new WebSocket(this.url); await new Promise((resolve, reject) => { this.socket.once("open", resolve); this.socket.once("error", reject); }); this.socket.on("message", (raw) => { const message = JSON.parse(raw.toString()); if (!message.id) return; const pending = this.pending.get(message.id); if (!pending) return; this.pending.delete(message.id); if (message.error) pending.reject(new Error(message.error.message)); else pending.resolve(message.result); }); }
  send(method, params = {}) { const id = this.id++; return new Promise((resolve, reject) => { this.pending.set(id, { resolve, reject }); this.socket.send(JSON.stringify({ id, method, params })); }); }
  close() { this.socket?.close(); }
}
async function evaluate(client, expression) { const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }); if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text); return result.result.value; }

const port = await freePort();
const server = http.createServer((request, response) => { const pathname = new URL(request.url, `http://127.0.0.1:${port}`).pathname; const file = pathname === "/qa.js" ? path.join(distDir, "qa.js") : path.join(distDir, "index.html"); response.writeHead(200, { "content-type": file.endsWith(".js") ? "text/javascript" : "text/html", "cache-control": "no-store" }); fs.createReadStream(file).pipe(response); });
await new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", resolve); });
const debugPort = await freePort();
const chrome = spawn(chromePath, ["--no-first-run", "--no-default-browser-check", "--start-minimized", "--disable-background-timer-throttling", `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`, `http://127.0.0.1:${port}/`], { stdio: "ignore" });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok);
  const targets = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
  client = new Cdp(targets.find((item) => item.type === "page").webSocketDebuggerUrl);
  await client.connect();
  await client.send("Runtime.enable");
  await waitFor(() => evaluate(client, "document.readyState === 'complete' && !!window.__R3F_TEARDOWN_QA__"));
  const graphics = await evaluate(client, `(() => { const c=document.createElement('canvas'); const gl=c.getContext('webgl2'); const e=gl.getExtension('WEBGL_debug_renderer_info'); return {vendor:gl.getParameter(e.UNMASKED_VENDOR_WEBGL),renderer:gl.getParameter(e.UNMASKED_RENDERER_WEBGL),userAgent:navigator.userAgent,devicePixelRatio}; })()`);
  if (/swiftshader|software|llvmpipe/i.test(graphics.renderer)) throw new Error(`Real GPU required: ${graphics.renderer}`);
  const result = await evaluate(client, "window.__R3F_TEARDOWN_QA__.runAll()");
  const output = { generatedAt: new Date().toISOString(), sourceLocked: true, graphics, result };
  fs.writeFileSync(path.join(outputDir, "result.json"), `${JSON.stringify(output, null, 2)}\n`);
  if (!result.pass) throw new Error(`R3F teardown harness failed: ${result.failures.join(", ")}`);
  console.log(JSON.stringify({ output: path.join(outputDir, "result.json"), renderer: graphics.renderer, pass: result.pass }, null, 2));
} finally {
  client?.close(); chrome.kill(); server.close(); await delay(300); fs.rmSync(profileDir, { recursive: true, force: true });
}
