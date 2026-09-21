import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b6/typography");
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-typography-${process.pid}`);
const debugPort = 43000 + (process.pid % 1000);

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(profileDir, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

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

class CdpClient {
  constructor(url) {
    this.url = url;
    this.nextId = 1;
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
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.socket?.close();
  }
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || "Browser evaluation failed");
  }
  return result.result.value;
}

const chrome = spawn(chromePath, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu-sandbox",
  "--use-angle=swiftshader",
  `--remote-debugging-port=${debugPort}`,
  `--user-data-dir=${profileDir}`,
  "--window-size=1366,768",
  "about:blank",
], { stdio: "ignore" });

let client;
try {
  const target = await waitFor(async () => {
    const response = await fetch(`http://127.0.0.1:${debugPort}/json`);
    if (!response.ok) return null;
    const targets = await response.json();
    return targets.find((entry) => entry.type === "page") || null;
  });
  client = new CdpClient(target.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await client.send("Page.navigate", { url: baseUrl });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"));
  await waitFor(() => evaluate(client, "Boolean(document.querySelector('#home-s01-title'))"));
  await evaluate(client, "document.fonts.ready.then(() => true)");
  await delay(1_500);

  const evidence = await evaluate(client, `(() => {
    const selectors = ['#home-s01-title', '#home-s02-title'];
    const inspect = (selector) => {
      const element = document.querySelector(selector);
      const style = getComputedStyle(element);
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const glyphs = [];
      let node;
      while ((node = walker.nextNode())) {
        for (let index = 0; index < node.data.length; index += 1) {
          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + 1);
          const rect = range.getBoundingClientRect();
          glyphs.push({
            char: node.data[index],
            codePoint: 'U+' + node.data.codePointAt(index).toString(16).toUpperCase(),
            left: Number(rect.left.toFixed(3)),
            right: Number(rect.right.toFixed(3)),
            top: Number(rect.top.toFixed(3)),
            width: Number(rect.width.toFixed(3)),
          });
        }
      }
      const unexpectedGaps = [];
      for (let index = 1; index < glyphs.length; index += 1) {
        const previous = glyphs[index - 1];
        const current = glyphs[index];
        if (previous.char !== ' ' && current.char !== ' ' && Math.abs(previous.top - current.top) < 1) {
          const gap = current.left - previous.right;
          if (gap > 4) unexpectedGaps.push({ after: previous.char, before: current.char, gap: Number(gap.toFixed(3)) });
        }
      }
      return {
        selector,
        text: element.textContent,
        normalizedNfc: element.textContent === element.textContent.normalize('NFC'),
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        letterSpacing: style.letterSpacing,
        textWrap: style.textWrap,
        wordBreak: style.wordBreak,
        overflowWrap: style.overflowWrap,
        glyphs,
        unexpectedGaps,
      };
    };
    const resources = performance.getEntriesByType('resource')
      .filter((entry) => /font|googleapis|gstatic|woff/i.test(entry.name))
      .map((entry) => ({ name: entry.name, duration: entry.duration, transferSize: entry.transferSize }));
    return {
      generatedAt: new Date().toISOString(),
      baseUrl: location.href,
      modelStatus: document.querySelector('#home-story')?.dataset.modelStatus,
      qa: window.__STUDYMASTER_B6_QA__?.snapshot?.() || null,
      layout: {
        scrollY,
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight,
        sections: Array.from(document.querySelectorAll('.home-story-section')).map((section) => ({
          id: section.id,
          offsetTop: section.offsetTop,
          height: section.offsetHeight,
        })),
      },
      documentFontsStatus: document.fonts.status,
      fontFaces: Array.from(document.fonts).map((font) => ({ family: font.family, status: font.status, weight: font.weight })),
      checks: {
        playfair650: document.fonts.check('650 72px "Playfair Display"'),
        georgia650: document.fonts.check('650 72px Georgia'),
        beVietnam400: document.fonts.check('400 16px "Be Vietnam Pro"'),
      },
      resources,
      headings: selectors.map(inspect),
    };
  })()`);

  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  fs.writeFileSync(path.join(outputDir, "typography-1366x768.png"), Buffer.from(data, "base64"));
  fs.writeFileSync(
    path.join(outputDir, "typography-verification.json"),
    `${JSON.stringify(evidence, null, 2)}\n`,
  );
  console.log(JSON.stringify(evidence, null, 2));
} finally {
  client?.close();
  chrome.kill();
}
