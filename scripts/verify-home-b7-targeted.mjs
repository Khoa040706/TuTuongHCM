import { spawn } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b7/after");
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-b7-targeted-${process.pid}`);
fs.mkdirSync(outputDir, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const sha256 = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");

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

async function waitFor(check, timeout = 60_000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const value = await check();
      if (value) return value;
    } catch (error) {
      lastError = error;
    }
    await delay(150);
  }
  throw lastError || new Error(`Timed out after ${timeout}ms`);
}

class Client {
  constructor(url) {
    this.url = url;
    this.id = 1;
    this.pending = new Map();
  }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      this.socket.once("open", resolve);
      this.socket.once("error", reject);
    });
    this.socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (!message.id) return;
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }
  send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { this.socket?.close(); }
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function navigate(client, url) {
  await client.send("Page.navigate", { url });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"));
}

async function screenshot(client, name) {
  const { data } = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true });
  fs.writeFileSync(path.join(outputDir, name), Buffer.from(data, "base64"));
}

const port = await freePort();
const chrome = spawn(chromePath, [
  "--headless=new", "--no-sandbox", "--disable-gpu-sandbox", "--use-angle=swiftshader",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profileDir}`, "--window-size=1366,768", "about:blank",
], { stdio: "ignore" });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${port}/json/version`)).ok, 20_000);
  const page = await (await fetch(`http://127.0.0.1:${port}/json/new?about%3Ablank`, { method: "PUT" })).json();
  client = new Client(page.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Network.enable");
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1366, height: 768, deviceScaleFactor: 1, mobile: false,
  });
  await navigate(client, `${baseUrl}/#home-s04`);
  await waitFor(() => evaluate(client, "document.querySelector('#home-story')?.dataset.modelStatus === 'ready'"));
  await waitFor(() => evaluate(client, "document.querySelector('#home-story')?.dataset.activeScene === 'home-s04'"));
  await delay(500);

  const diagram = await evaluate(client, `(() => {
    const rect = (element) => { const value=element.getBoundingClientRect(); return {id:element.textContent.trim(),left:value.left,right:value.right,top:value.top,bottom:value.bottom}; };
    const distance = (a,b) => Math.hypot(Math.max(a.left-b.right,b.left-a.right,0),Math.max(a.top-b.bottom,b.top-a.bottom,0));
    const nodes=Array.from(document.querySelectorAll('.home-activity-node')).map(rect);
    const labels=Array.from(document.querySelectorAll('.home-activity-guard,.home-activity-branch-label')).map(rect);
    const nav=rect(document.querySelector('.home-nav'));
    const eyebrow=rect(document.querySelector('#home-s04 .home-eyebrow'));
    const overlap=Math.max(0,Math.min(nav.right,eyebrow.right)-Math.max(nav.left,eyebrow.left))*Math.max(0,Math.min(nav.bottom,eyebrow.bottom)-Math.max(nav.top,eyebrow.top));
    return {nodeCount:nodes.length,edgeCount:document.querySelectorAll('.home-activity-edge').length,navEyebrowOverlap:overlap,labels:labels.map((label)=>({...label,closestNodeDistance:Math.min(...nodes.map((node)=>distance(label,node)))}))};
  })()`);
  await screenshot(client, "targeted-s04-1366x768.png");

  const registration = await evaluate(client, `(async () => {
    const value=await Promise.race([navigator.serviceWorker.ready,new Promise((resolve)=>setTimeout(()=>resolve(null),10000))]);
    return value ? {registered:true,scope:value.scope,active:value.active?.scriptURL||null} : {registered:false};
  })()`);
  await client.send("Page.reload", { ignoreCache: false });
  await waitFor(() => evaluate(client, "document.readyState === 'complete' && !!document.querySelector('.home-landing-shell')"));
  await evaluate(client, "fetch('/api/auth/session',{credentials:'same-origin'}).catch(()=>null)");
  await delay(300);
  const caches = await evaluate(client, `(async () => {
    const entries=[];
    for (const name of await window.caches.keys()) {
      const cache=await window.caches.open(name);
      for (const request of await cache.keys()) entries.push({cache:name,url:request.url});
    }
    return {count:entries.length,glbEntries:entries.filter((item)=>new URL(item.url).pathname.endsWith('.glb')),apiEntries:entries.filter((item)=>new URL(item.url).pathname.startsWith('/api/'))};
  })()`);
  await client.send("Network.emulateNetworkConditions", { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 });
  let offline;
  try {
    await navigate(client, `${baseUrl}/#study-story-s01`);
    offline = await waitFor(() => evaluate(client, `(() => ({shell:!!document.querySelector('.home-landing-shell'),sections:document.querySelectorAll('.home-story-section').length,cta:!!document.querySelector('[data-testid=home-start-learning]')}))()`), 30_000);
  } catch (error) {
    offline = { shell: false, error: error.message };
  } finally {
    await client.send("Network.emulateNetworkConditions", { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  }

  const result = {
    generatedAt: new Date().toISOString(),
    scope: "targeted retest after final S04 label spacing and PWA GLB precache exclusions",
    baseUrl,
    build: {
      serviceWorkerSha256: sha256(path.resolve("public/sw.js")),
      baselineGlbSha256: sha256(path.resolve("public/assets/home/cancer-knowledge-machine/cancer-machine.glb")),
    },
    diagram,
    pwa: { registration, caches, offline },
  };
  fs.writeFileSync(path.join(outputDir, "targeted-verification.json"), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify(result, null, 2));
} finally {
  client?.close();
  chrome.kill();
  await delay(250);
  fs.rmSync(profileDir, { recursive: true, force: true });
}
