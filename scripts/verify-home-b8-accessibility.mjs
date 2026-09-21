import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3018";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b8/accessibility-retest");
const chromePath = process.env.STUDYMASTER_CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-b8-a11y-${process.pid}`);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
fs.mkdirSync(outputDir, { recursive: true });

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
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const value = await check().catch(() => false);
    if (value) return value;
    await delay(150);
  }
  throw new Error(`Timed out after ${timeout}ms`);
}

class Client {
  constructor(url) { this.url = url; this.id = 0; this.pending = new Map(); }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => { this.socket.once("open", resolve); this.socket.once("error", reject); });
    this.socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (!message.id) return;
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message)); else pending.resolve(message.result);
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { this.socket?.close(); }
}

async function evaluate(client, expression) {
  const value = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (value.exceptionDetails) throw new Error(value.exceptionDetails.text);
  return value.result.value;
}

const port = await freePort();
const chrome = spawn(chromePath, [
  "--no-first-run", "--no-default-browser-check", "--start-minimized",
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profileDir}`,
  "--window-size=1366,768", "about:blank",
], { stdio: "ignore", windowsHide: true });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${port}/json/version`)).ok, 20_000);
  const pageResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`, { method: "PUT" });
  const page = await pageResponse.json();
  client = new Client(page.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Emulation.setDeviceMetricsOverride", { width:1366, height:768, deviceScaleFactor:1, mobile:false, screenWidth:1366, screenHeight:768 });
  await client.send("Page.addScriptToEvaluateOnNewDocument", { source:"window.__STUDYMASTER_B7_QA_ENABLED__=true;" });
  await client.send("Page.navigate", { url:baseUrl });
  await waitFor(() => evaluate(client, "document.readyState==='complete'&&document.querySelector('#home-story')?.dataset.modelStatus==='ready'"));
  const measurement = await evaluate(client, `(() => {
    const element=document.querySelector('.home-eyebrow');
    const style=getComputedStyle(element);
    const parse=(value)=>{const p=value.match(/rgba?\\(([^)]+)\\)/)[1].split(/[ ,/]+/).filter(Boolean).map(Number);return {r:p[0],g:p[1],b:p[2],a:p[3]??1}};
    const luminance=(c)=>{const f=(v)=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)};return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b)};
    const foreground=parse(style.color);
    const opaqueBackground=(start)=>{let current=start;while(current){const value=parse(getComputedStyle(current).backgroundColor);if(value.a>.98)return value;current=current.parentElement}return {r:255,g:255,b:255,a:1}};
    const background=opaqueBackground(element);
    const l1=luminance(foreground),l2=luminance(background);
    const ratio=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);
    const sections=[...document.querySelectorAll('.home-story-section')];
    return {
      selector:'.home-eyebrow', foreground, background, ratio,
      fontSize:style.fontSize, fontWeight:style.fontWeight, lineHeight:style.lineHeight,
      sectionOrder:sections.map((item)=>item.id),
      headings:[...document.querySelectorAll('#home-story h1,#home-story h2')].map((item)=>({tag:item.tagName,id:item.id,text:item.textContent.trim()})),
      duplicateIds:[...document.querySelectorAll('[id]')].map((item)=>item.id).filter((id,index,all)=>all.indexOf(id)!==index),
      unnamedInteractive:[...document.querySelectorAll('#home-story a,#home-story button')].filter((item)=>!(item.getAttribute('aria-label')||item.textContent.trim())).length,
      pass:ratio>=4.5,
    };
  })()`);
  const { data } = await client.send("Page.captureScreenshot", { format:"png", fromSurface:true });
  const image = path.join(outputDir, "s01-eyebrow-contrast-1366x768.png");
  fs.writeFileSync(image, Buffer.from(data, "base64"));
  const report = { schemaVersion:"studymaster-b8-accessibility-retest-v1", generatedAt:new Date().toISOString(), baseUrl, viewport:[1366,768], measurement, image:path.relative(process.cwd(),image).replaceAll("\\","/") };
  fs.writeFileSync(path.join(outputDir,"accessibility-retest.json"), `${JSON.stringify(report,null,2)}\n`);
  if (!measurement.pass) throw new Error(`Eyebrow contrast ${measurement.ratio.toFixed(3)} is below 4.5`);
  console.log(JSON.stringify({ output:path.join(outputDir,"accessibility-retest.json"), ratio:measurement.ratio, pass:measurement.pass },null,2));
} finally {
  client?.close();
  chrome.kill();
  await delay(300);
  fs.rmSync(profileDir,{recursive:true,force:true});
}
