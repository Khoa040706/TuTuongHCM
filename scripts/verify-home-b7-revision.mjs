import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b7/revision/labels");
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-b7-revision-${process.pid}`);
const viewports = [{ width: 1366, height: 768 }, { width: 1440, height: 900 }];
const scenes = [{ id: "home-s03", master: 0.4 }, { id: "home-s04", master: 0.6 }];

fs.mkdirSync(outputDir, { recursive: true });
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function waitFor(check, timeout = 30_000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const result = await check();
      if (result) return result;
    } catch (error) { lastError = error; }
    await delay(150);
  }
  throw lastError || new Error(`Timed out after ${timeout}ms`);
}

class Client {
  constructor(url) { this.url = url; this.nextId = 1; this.pending = new Map(); }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      this.socket.once("open", resolve);
      this.socket.once("error", reject);
    });
    this.socket.on("message", (raw) => {
      const message = JSON.parse(raw.toString());
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }
  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { this.socket?.close(); }
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression, awaitPromise: true, returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}

async function settle(client, master) {
  await evaluate(client, `(() => {
    const controller = window.__STUDYMASTER_B6_QA__?.snapshot?.().controller;
    if (!controller || controller.start == null || controller.end == null) return false;
    scrollTo(0, controller.start + (controller.end - controller.start) * ${master});
    return true;
  })()`);
  let previous = null;
  let stable = 0;
  try {
    return await waitFor(async () => {
    await evaluate(client, `(() => {
      const controller = window.__STUDYMASTER_B6_QA__?.snapshot?.().controller;
      if (controller?.start != null && controller?.end != null) {
        const target = controller.start + (controller.end - controller.start) * ${master};
        if (Math.abs(scrollY - target) > 2) scrollTo(0, target);
      }
    })()`);
    const snapshot = await evaluate(client, "window.__STUDYMASTER_B6_QA__?.snapshot?.() || null");
    const current = snapshot?.progress?.master;
    if (typeof current !== "number" || Math.abs(current - master) > 0.012) {
      previous = current; stable = 0; return false;
    }
    stable = previous != null && Math.abs(current - previous) < 0.0001 ? stable + 1 : 0;
    previous = current;
    return stable >= 3 ? snapshot : false;
    }, 30_000);
  } catch (error) {
    const diagnostic = await evaluate(client, `(() => ({
      scrollY,
      scrollHeight:document.documentElement.scrollHeight,
      viewport:innerHeight,
      snapshot:window.__STUDYMASTER_B6_QA__?.snapshot?.() || null
    }))()`);
    throw new Error(`${error.message}; settle=${JSON.stringify(diagnostic)}`);
  }
}

const port = await freePort();
const chrome = spawn(chromePath, [
  "--headless=new", "--no-sandbox", "--disable-gpu-sandbox", "--use-angle=swiftshader",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profileDir}`, "--window-size=1440,900", "about:blank",
], { stdio: "ignore" });
let client;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${port}/json/version`)).ok, 20_000);
  const page = await (await fetch(`http://127.0.0.1:${port}/json/new?about%3Ablank`, { method: "PUT" })).json();
  client = new Client(page.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Page.addScriptToEvaluateOnNewDocument", {
    source: "window.__STUDYMASTER_B7_QA_ENABLED__ = true;",
  });
  await client.send("Page.navigate", { url: `${baseUrl}/?b7qa=1#home-s03` });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), 60_000);
  await waitFor(() => evaluate(client, "document.querySelector('#home-story')?.dataset.modelStatus === 'ready' && !!window.__STUDYMASTER_B6_QA__?.snapshot"), 60_000);

  const checks = [];
  for (const viewport of viewports) {
    await client.send("Emulation.setDeviceMetricsOverride", {
      ...viewport, deviceScaleFactor: 1, mobile: false,
      screenWidth: viewport.width, screenHeight: viewport.height,
    });
    await delay(300);
    for (const scene of scenes) {
      await evaluate(client, `document.getElementById(${JSON.stringify(scene.id)})?.scrollIntoView({block:'start',behavior:'instant'})`);
      const snapshot = await settle(client, scene.master);
      const rows = snapshot.storyData.blocks.map((block) => {
        const aspect = block.labelAspect;
        return {
          id: block.id,
          labelMode: block.labelMode,
          geometryAspect: aspect.geometryAspect,
          textureAspect: aspect.textureAspect,
          worldScaleAspect: block.labelWorldScale[0] / block.labelWorldScale[1],
          displayedAspect: aspect.displayedAspect,
          preservationRatio: aspect.preservationRatio,
          fontSize: aspect.fontSize,
          lineHeight: aspect.lineHeight,
          lineCount: aspect.lineCount,
          projectedFontSizeCssPx: aspect.projectedFontSize,
          projectedRowGlyphHeightCssPx: aspect.projectedRowGlyphHeight,
          projectedLineHeightCssPx: aspect.projectedLineHeight,
          projectedMaxGlyphWidthCssPx: aspect.projectedMaxGlyphWidth,
          projectedWidthPx: block.labelBounds?.width ?? null,
          projectedHeightPx: block.labelBounds?.height ?? null,
          glyphFitsTexture: aspect.glyphFitsTexture,
          linesDoNotOverlap: aspect.linesDoNotOverlap,
          inside: block.labelBounds?.inside ?? false,
        };
      });
      const assertions = {
        allGeometryMatchesTexture: rows.every((row) => Math.abs(row.geometryAspect - row.textureAspect) < 0.0001),
        allPreserveTextureAspect: rows.every((row) => Math.abs(row.preservationRatio - 1) < 0.0001),
        allLabelsInsideCanvas: rows.every((row) => row.inside),
        allGlyphsFitTexture: rows.every((row) => row.glyphFitsTexture),
        noLineOverlap: rows.every((row) => row.linesDoNotOverlap),
        readableFontSize: rows.every((row) => row.projectedFontSizeCssPx >= 14 && row.projectedFontSizeCssPx <= 16.5),
        minimumProjectedHeightPx: Math.min(...rows.map((row) => row.projectedHeightPx)),
        minimumProjectedFontSizeCssPx: Math.min(...rows.map((row) => row.projectedFontSizeCssPx)),
      };
      const name = `b7-revision-${scene.id}-${viewport.width}x${viewport.height}.png`;
      const { data } = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true });
      fs.writeFileSync(path.join(outputDir, name), Buffer.from(data, "base64"));
      checks.push({ viewport, scene, master: snapshot.progress.master, rows, assertions, screenshot: name });
    }
  }

  const result = {
    generatedAt: new Date().toISOString(),
    scope: "B7 StoryDataBlocks label aspect revision",
    renderer: "Chrome headless with SwiftShader; visual proof only, not desktop GPU performance evidence",
    expectedTextureAspect: 2,
    checks,
    passed: checks.every((check) => check.assertions.allGeometryMatchesTexture
      && check.assertions.allPreserveTextureAspect
      && check.assertions.allLabelsInsideCanvas
      && check.assertions.allGlyphsFitTexture
      && check.assertions.noLineOverlap
      && check.assertions.readableFontSize),
  };
  fs.writeFileSync(path.join(outputDir, "label-verification.json"), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify(result, null, 2));
} finally {
  client?.close();
  chrome.kill();
  await delay(250);
  fs.rmSync(profileDir, { recursive: true, force: true });
}
