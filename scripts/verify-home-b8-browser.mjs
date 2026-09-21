import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3018";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b8/browser");
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-chrome-b8-${process.pid}`);
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
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
      for (const pending of this.pending.values()) pending.reject(new Error(`CDP closed during ${pending.method}`));
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
  close() { this.socket?.close(); }
}

async function createPage(port, url = "about:blank") {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  if (!response.ok) throw new Error(`Cannot create Chrome page: ${response.status}`);
  return response.json();
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}

async function navigate(client, url) {
  await client.send("Page.navigate", { url });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
}

async function setViewport(client, width = 1366, height = 768) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width, height, deviceScaleFactor: 1, mobile: false, screenWidth: width, screenHeight: height,
  });
}

async function screenshot(client, name) {
  const { data } = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true });
  const target = path.join(outputDir, name);
  fs.writeFileSync(target, Buffer.from(data, "base64"));
  return path.relative(process.cwd(), target).replaceAll("\\", "/");
}

async function makeClient(port, { injection = "", fetchPattern = null, onPaused = null } = {}) {
  const page = await createPage(port);
  const client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Network.enable");
  await client.send("Page.addScriptToEvaluateOnNewDocument", {
    source: `window.__STUDYMASTER_B7_QA_ENABLED__ = true;${injection}`,
  });
  if (fetchPattern) {
    await client.send("Fetch.enable", { patterns: [{ urlPattern: fetchPattern, requestStage: "Request" }] });
    client.on("Fetch.requestPaused", (params) => onPaused?.(client, params));
  }
  await setViewport(client);
  return client;
}

async function waitForModel(client) {
  return waitFor(async () => {
    const value = await evaluate(client, `(() => ({
      status:document.querySelector('#home-story')?.dataset.modelStatus,
      qa:window.__STUDYMASTER_B6_QA__?.snapshot?.() || null
    }))()`);
    return value.status === "ready" && value.qa?.renderer?.calls > 0 ? value : false;
  }, { timeout: 60_000, interval: 200 });
}

async function environmentSnapshot(client) {
  return evaluate(client, `(() => {
    const canvas=document.querySelector('.home-stage canvas');
    const gl=canvas?.getContext('webgl2')||canvas?.getContext('webgl');
    const debug=gl?.getExtension('WEBGL_debug_renderer_info');
    return {
      userAgent:navigator.userAgent,
      renderer:debug?gl.getParameter(debug.UNMASKED_RENDERER_WEBGL):gl?.getParameter(gl.RENDERER)||null,
      vendor:debug?gl.getParameter(debug.UNMASKED_VENDOR_WEBGL):gl?.getParameter(gl.VENDOR)||null,
      viewport:[innerWidth,innerHeight], devicePixelRatio,
    };
  })()`);
}

async function accessibilitySnapshot(client) {
  return evaluate(client, `(() => {
    const visible=(element)=>{const s=getComputedStyle(element),r=element.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0};
    const name=(element)=>element.getAttribute('aria-label')||element.getAttribute('alt')||element.textContent.trim();
    const sections=[...document.querySelectorAll('.home-story-section')];
    const ids=[...document.querySelectorAll('[id]')].map((element)=>element.id);
    const duplicateIds=[...new Set(ids.filter((id,index)=>ids.indexOf(id)!==index))];
    const labelledBy=sections.map((section)=>({
      id:section.id,
      labelledBy:section.getAttribute('aria-labelledby'),
      resolves:Boolean(document.getElementById(section.getAttribute('aria-labelledby'))),
    }));
    const interactive=[...document.querySelectorAll('#home-story a,#home-story button')].filter(visible);
    const unnamedInteractive=interactive.filter((element)=>!name(element)).map((element)=>element.outerHTML.slice(0,160));
    const images=[...document.querySelectorAll('#home-story img')];
    const headingOrder=[...document.querySelectorAll('#home-story h1,#home-story h2')].map((element)=>({tag:element.tagName,id:element.id,text:element.textContent.trim()}));
    const focusChecks=['[data-testid=home-start-learning]','.home-brand','.home-chapters a[href="#home-s03"]','[data-testid=home-open-bubble-sort]','[data-testid=home-open-diagram]','[data-testid=home-final-cta]'].map((selector)=>{
      const element=document.querySelector(selector); if(!element)return {selector,missing:true};
      element.focus(); const style=getComputedStyle(element);
      return {selector,outlineStyle:style.outlineStyle,outlineWidth:style.outlineWidth,outlineColor:style.outlineColor,boxShadow:style.boxShadow};
    });
    const parse=(value)=>{const m=value.match(/rgba?\\(([^)]+)\\)/);if(!m)return null;const p=m[1].split(/[ ,/]+/).filter(Boolean).map(Number);return {r:p[0],g:p[1],b:p[2],a:p[3]??1}};
    const luminance=(c)=>{const f=(v)=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)};return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b)};
    const background=(element)=>{let current=element;while(current){const parsed=parse(getComputedStyle(current).backgroundColor);if(parsed&&parsed.a>.98)return parsed;current=current.parentElement}return {r:255,g:255,b:255,a:1}};
    const contrastSelectors=['.home-nav__login','.home-story-section--hero .home-eyebrow','.home-story-section--hero .home-lede','.home-button--primary','.home-button--secondary'];
    const contrast=contrastSelectors.map((selector)=>{const element=document.querySelector(selector);if(!element)return {selector,missing:true};const fg=parse(getComputedStyle(element).color),bg=background(element);const l1=luminance(fg),l2=luminance(bg);return {selector,foreground:fg,background:bg,ratio:(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05)}});
    return {
      sectionOrder:sections.map((section)=>section.id),
      headingOrder, h1Count:headingOrder.filter((item)=>item.tag==='H1').length,
      labelledBy, duplicateIds, unnamedInteractive,
      imageAlt:images.map((image)=>({src:image.getAttribute('src'),alt:image.getAttribute('alt'),hasAlt:image.hasAttribute('alt')})),
      mainCount:document.querySelectorAll('main').length,
      navLabels:[...document.querySelectorAll('nav')].map((element)=>element.getAttribute('aria-label')),
      focusChecks, contrast,
    };
  })()`);
}

async function setLocalUser(client, username, password) {
  await evaluate(client, `localStorage.setItem('studymaster_users',JSON.stringify([{username:${JSON.stringify(username)},email:${JSON.stringify(`${username}@example.test`)},password:${JSON.stringify(password)},role:'student',locked:false}]))`);
}

async function submitLocalLogin(client, username, password) {
  await waitFor(() => evaluate(client, "document.querySelector('[role=dialog][aria-hidden=false] form') !== null"));
  await evaluate(client, `(() => {
    const form=document.querySelector('[role=dialog][aria-hidden=false] form');
    const user=form.querySelector('input[type=text]');
    const pass=form.querySelector('input[type=password]');
    const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;
    setter.call(user,${JSON.stringify(username)});user.dispatchEvent(new Event('input',{bubbles:true}));
    setter.call(pass,${JSON.stringify(password)});pass.dispatchEvent(new Event('input',{bubbles:true}));
    form.requestSubmit();
  })()`);
  await waitFor(() => evaluate(client, "document.querySelector('.home-landing-shell') === null"), { timeout: 25_000 });
}

async function authDestination(port, kind) {
  const client = await makeClient(port);
  const username = `qa_b8_${kind.replaceAll('-', '_')}`;
  const password = "StudyMaster!123";
  try {
    await navigate(client, baseUrl);
    await waitForModel(client);
    await setLocalUser(client, username, password);
    const target = kind === "bubble-sort"
      ? { section: "home-s03", selector: "[data-testid=home-open-bubble-sort]", expected: "BUBBLE SORT — SẮP XẾP NỔI BỌT 3D" }
      : { section: "home-s04", selector: "[data-testid=home-open-diagram]", expected: "Bộ Mô Phỏng Toàn Diện Các Diagram" };
    await evaluate(client, `document.getElementById(${JSON.stringify(target.section)}).scrollIntoView({behavior:'instant'})`);
    await delay(250);
    await evaluate(client, `document.querySelector(${JSON.stringify(target.selector)}).click()`);
    const pendingBeforeLogin = await waitFor(() => evaluate(client, `document.querySelector('.home-landing-shell')?.dataset.pendingDestination === ${JSON.stringify(kind)}`));
    await submitLocalLogin(client, username, password);
    const landed = await waitFor(() => evaluate(client, `document.body.innerText.includes(${JSON.stringify(target.expected)})`), { timeout: 30_000 });
    const snapshot = await evaluate(client, `(() => ({
      pending:document.querySelector('.home-landing-shell')?.dataset.pendingDestination ?? null,
      hasStudy:!!document.querySelector('.main-study-content'),
      bodyMatch:document.body.innerText.includes(${JSON.stringify(target.expected)}),
      heading:[...document.querySelectorAll('h1,h2')].map((item)=>item.textContent.trim()).find((text)=>text.includes(${JSON.stringify(kind === "bubble-sort" ? "Bubble Sort" : "Mô Phỏng Toàn Diện")}))||null
    }))()`);
    return { kind, pendingBeforeLogin, landed, ...snapshot };
  } finally { client.close(); }
}

async function learnerStudyQuiz(port) {
  const client = await makeClient(port);
  const username = "qa_b8_study";
  const password = "StudyMaster!123";
  try {
    await navigate(client, baseUrl);
    await waitForModel(client);
    await setLocalUser(client, username, password);
    await evaluate(client, "document.querySelector('[data-testid=home-login]').click()");
    await submitLocalLogin(client, username, password);
    const subjectSelect = await waitFor(() => evaluate(client, `(() => {
      const view=document.querySelector('.select-subject-header');
      return view ? {present:true,heading:view.querySelector('h1')?.textContent.trim()||null} : false;
    })()`));
    await evaluate(client, "document.querySelector('.bento-subject-card:not(.cursor-not-allowed)').click()");
    await waitFor(() => evaluate(client, "document.querySelector('.storytelling-hero') !== null"));
    await evaluate(client, `Array.from(document.querySelectorAll('.storytelling-hero button')).find((button)=>button.textContent.includes('Vào bài học'))?.click()`);
    await waitFor(() => evaluate(client, "document.querySelector('.storytelling-hero') === null && document.querySelector('.main-study-content') !== null"), { timeout: 20_000 });
    const study = await evaluate(client, `(() => ({
      content:!!document.querySelector('.main-study-content'),
      subsectionCount:document.querySelectorAll('.subsection').length,
      quizButton:[...document.querySelectorAll('button')].find((button)=>button.textContent.includes('Bài kiểm tra trắc nghiệm'))?.disabled === false,
    }))()`);
    await evaluate(client, `Array.from(document.querySelectorAll('button')).find((button)=>button.textContent.includes('Bài kiểm tra trắc nghiệm')&&!button.disabled)?.click()`);
    const quiz = await waitFor(() => evaluate(client, `document.body.innerText.includes('Trình Ôn Tập Đánh Giá Kiến Thức')`), { timeout: 20_000 });
    return { scope: "local QA account only", subjectSelect, study, quiz };
  } finally { client.close(); }
}

async function faultInjection(port, kind) {
  let paused = 0;
  let release;
  const released = new Promise((resolve) => { release = resolve; });
  const injection = kind === "webgl-unavailable"
    ? `const originalGetContext=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl'||type==='webgl2'||type==='experimental-webgl')return null;return originalGetContext.call(this,type,...args);};`
    : "";
  const intercept = ["glb-404", "glb-corrupt", "glb-slow"].includes(kind);
  const client = await makeClient(port, {
    injection,
    fetchPattern: intercept ? "*cancer-machine.glb*" : null,
    onPaused: async (active, params) => {
      paused += 1;
      try {
        if (kind === "glb-404") {
          await active.send("Fetch.fulfillRequest", { requestId: params.requestId, responseCode: 404, responseHeaders: [{ name: "Content-Type", value: "text/plain" }], body: "" });
        } else if (kind === "glb-corrupt") {
          await active.send("Fetch.fulfillRequest", { requestId: params.requestId, responseCode: 200, responseHeaders: [{ name: "Content-Type", value: "model/gltf-binary" }], body: Buffer.from("not-a-valid-glb").toString("base64") });
        } else {
          await delay(1_600);
          await active.send("Fetch.continueRequest", { requestId: params.requestId });
        }
      } finally { release(); }
    },
  });
  try {
    if (intercept) {
      await client.send("Network.setCacheDisabled", { cacheDisabled: true });
      await client.send("Network.setBypassServiceWorker", { bypass: true });
    }
    await navigate(client, baseUrl);
    let loading = null;
    if (kind === "glb-slow") {
      loading = await evaluate(client, `(() => ({
        modelStatus:document.querySelector('#home-story')?.dataset.modelStatus,
        sectionCount:document.querySelectorAll('.home-story-section').length,
        primaryCta:!!document.querySelector('[data-testid=home-start-learning]'),
      }))()`);
      await released;
      await waitForModel(client);
    } else {
      await waitFor(() => evaluate(client, "['error','webgl-error'].includes(document.querySelector('#home-story')?.dataset.modelStatus)"), { timeout: 30_000 });
    }
    const final = await evaluate(client, `(() => ({
      modelStatus:document.querySelector('#home-story')?.dataset.modelStatus,
      canvasState:document.querySelector('[data-testid=home-canvas-state]')?.dataset.state,
      fallbackVisible:!!document.querySelector('[data-testid^=home-model-]'),
      sectionCount:document.querySelectorAll('.home-story-section').length,
      traceRows:document.querySelectorAll('#home-s03 .home-sort-trace li').length,
      diagramNodes:document.querySelectorAll('#home-s04 .home-activity-node').length,
      finalCta:document.querySelector('[data-testid=home-final-cta]')?.textContent.trim()||null,
    }))()`);
    const image = await screenshot(client, `fault-${kind}-1366x768.png`);
    return { kind, pausedRequests: paused, loading, final, image };
  } finally { client.close(); }
}

async function reloadMidScene(client) {
  await evaluate(client, "location.hash='home-s04';document.getElementById('home-s04').scrollIntoView({behavior:'instant'})");
  await waitFor(() => evaluate(client, "window.__STUDYMASTER_B6_QA__?.snapshot?.().story?.activeScene === 'home-s04'"));
  await client.send("Page.reload", { ignoreCache: false });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
  await waitForModel(client);
  return waitFor(async () => {
    const value = await evaluate(client, `(() => ({hash:location.hash,scene:window.__STUDYMASTER_B6_QA__?.snapshot?.().story?.activeScene||null,sections:document.querySelectorAll('.home-story-section').length}))()`);
    return value.hash === "#home-s04" && value.scene === "home-s04" ? value : false;
  }, { timeout: 20_000 });
}

async function currentPwaOffline(client) {
  const registration = await evaluate(client, `(async()=>{
    if(!('serviceWorker'in navigator))return {supported:false};
    const value=await Promise.race([navigator.serviceWorker.ready,new Promise((resolve)=>setTimeout(()=>resolve(null),12000))]);
    return value?{supported:true,registered:true,scope:value.scope,active:value.active?.scriptURL||null}:{supported:true,registered:false};
  })()`);
  if (!registration.registered) return { registration, status: "FAIL" };
  await client.send("Page.reload", { ignoreCache: false });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
  await waitForModel(client);
  const caches = await evaluate(client, `(async()=>{const names=await window.caches.keys();const entries=[];for(const name of names){const cache=await window.caches.open(name);for(const request of await cache.keys())entries.push({cache:name,url:request.url})}return {names,entryCount:entries.length,apiEntries:entries.filter((item)=>new URL(item.url).pathname.startsWith('/api/'))}})()`);
  await client.send("Network.emulateNetworkConditions", { offline:true, latency:0, downloadThroughput:0, uploadThroughput:0 });
  let offline;
  try {
    await navigate(client, `${baseUrl}/#study-story-s01`);
    offline = await waitFor(() => evaluate(client, `(() => ({shell:!!document.querySelector('.home-landing-shell'),sections:document.querySelectorAll('.home-story-section').length,cta:!!document.querySelector('[data-testid=home-start-learning]'),modelStatus:document.querySelector('#home-story')?.dataset.modelStatus||null}))()`), { timeout:30_000 });
  } finally {
    await client.send("Network.emulateNetworkConditions", { offline:false, latency:0, downloadThroughput:-1, uploadThroughput:-1 });
  }
  return { registration, caches, offline, status:offline.shell&&offline.sections===6&&offline.cta&&caches.apiEntries.length===0?"PASS":"FAIL" };
}

async function pwaOfflinePage(port) {
  const client = await makeClient(port);
  try {
    await navigate(client, baseUrl);
    await waitForModel(client);
    try {
      return await currentPwaOffline(client);
    } catch (error) {
      const diagnostic = await evaluate(client, `(() => ({
        readyState:document.readyState,
        modelStatus:document.querySelector('#home-story')?.dataset.modelStatus||null,
        shell:!!document.querySelector('.home-landing-shell'),
        sections:document.querySelectorAll('.home-story-section').length,
        controller:!!navigator.serviceWorker?.controller,
      }))()`);
      return { status:"FAIL", error:error.message, diagnostic };
    }
  } finally { client.close(); }
}

const debugPort = await freePort();
const chromeDiagnostics = [];
const chrome = spawn(chromePath, [
  "--no-first-run", "--no-default-browser-check", "--start-minimized",
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding",
  `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`,
  "--window-size=1366,768", "about:blank",
], { stdio:["ignore","pipe","pipe"], windowsHide:true });
chrome.stdout.on("data", () => {});
chrome.stderr.on("data", (chunk) => { const value=chunk.toString().trim(); if(value) chromeDiagnostics.push(value); });

let main;
try {
  await waitFor(async () => (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok, { timeout:20_000 });
  main = await makeClient(debugPort);
  await navigate(main, baseUrl);
  const initial = await waitForModel(main);
  const environment = await environmentSnapshot(main);
  const accessibility = await accessibilitySnapshot(main);
  const accessibilityImage = await screenshot(main, "accessibility-s01-1366x768.png");
  const reload = await reloadMidScene(main);
  const auth = {
    bubbleSort: await authDestination(debugPort, "bubble-sort"),
    activityDiagram: await authDestination(debugPort, "activity-diagram"),
    learnerStudyQuiz: await learnerStudyQuiz(debugPort),
    realLearner: { status:"NOT TESTED", prerequisite:"valid Firebase learner account and matching study/quiz data" },
    realAdmin: { status:"NOT TESTED", prerequisite:"valid privileged Firebase admin account; no role simulation" },
  };
  const faults = [];
  for (const kind of ["glb-404", "glb-corrupt", "glb-slow", "webgl-unavailable"]) {
    faults.push(await faultInjection(debugPort, kind));
  }
  const pwa = await pwaOfflinePage(debugPort);
  const result = {
    schemaVersion:"studymaster-b8-browser-verification-v1",
    generatedAt:new Date().toISOString(),
    baseUrl,
    browserMode:"desktop-gpu",
    environment,
    initial:{modelStatus:initial.status,rendererCalls:initial.qa.renderer.calls,modelVisible:initial.qa.model?.visible??null},
    accessibility:{...accessibility,image:accessibilityImage},
    auth,
    faults,
    reloadMidScene:reload,
    inheritedTabFreezeResume:{status:"PASS (inherited)",evidence:"artifacts/homepage-3d/b7/closeout/production-regression-intel/browser-verification.json"},
    pwa:{currentCandidateOffline:pwa,upgradeFromOldProduction:{status:"NOT TESTED",prerequisite:"archived old production URL/build and browser profile/cache created by it"}},
    adminNote:"No privileged credentials were used or packaged.",
    chromeDiagnostics,
  };
  fs.writeFileSync(path.join(outputDir, "browser-verification.json"), `${JSON.stringify(result,null,2)}\n`);
  console.log(JSON.stringify({
    output:path.join(outputDir,"browser-verification.json"),
    renderer:environment.renderer,
    auth:{bubble:auth.bubbleSort.landed,diagram:auth.activityDiagram.landed,localStudyQuiz:auth.learnerStudyQuiz.quiz},
    faults:faults.map((item)=>({kind:item.kind,status:item.final.modelStatus,sections:item.final.sectionCount})),
    pwa:pwa.status,
  },null,2));
} finally {
  main?.close();
  chrome.kill();
  await delay(300);
  fs.rmSync(profileDir,{recursive:true,force:true});
}
