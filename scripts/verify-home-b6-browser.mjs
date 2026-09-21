import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(process.argv[3] || "artifacts/homepage-3d/b6/browser");
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), `studymaster-chrome-b6-${process.pid}`);
const recordFrames = process.env.STUDYMASTER_B6_RECORD_FRAMES === "1";
const sceneStops = [
  ["study-story-s01", 0, "closed"],
  ["home-s02", 0.2, "open"],
  ["home-s03", 0.4, "guide_left"],
  ["home-s04", 0.6, "guide_right"],
  ["home-s05", 0.8, "compact"],
  ["home-s06", 1, "compact"],
];

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(profileDir, { recursive: true });
const recordingDir = path.join(outputDir, "recording-frames");
if (recordFrames) fs.mkdirSync(recordingDir, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const approximately = (value, expected, tolerance) =>
  Number.isFinite(value) && Math.abs(value - expected) <= tolerance;

async function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitFor(check, { timeout = 60_000, interval = 150 } = {}) {
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
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject, method });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, listener) {
    const list = this.listeners.get(method) || [];
    list.push(listener);
    this.listeners.set(method, list);
  }

  close() {
    this.socket?.close();
  }
}

async function createPage(port, url) {
  return waitFor(async () => {
    const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
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
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || "Browser evaluation failed");
  }
  return result.result.value;
}

async function screenshot(client, name, directory = outputDir) {
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const target = path.join(directory, name);
  fs.writeFileSync(target, Buffer.from(data, "base64"));
  return target;
}

async function setViewport(client, width, height) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
  });
}

async function navigate(client, url) {
  await client.send("Page.navigate", { url });
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"));
}

async function readQa(client) {
  return evaluate(client, "window.__STUDYMASTER_B6_QA__?.snapshot?.() || null");
}

function transformDistance(left, right) {
  if (!left || !right) return null;
  const values = ["position", "quaternion", "scale"];
  return Math.sqrt(values.reduce((total, key) => total + left[key].reduce(
    (sum, value, index) => sum + ((value - right[key][index]) ** 2),
    0,
  ), 0));
}

async function waitForModel(client) {
  return waitFor(async () => {
    const snapshot = await readQa(client);
    const status = await evaluate(client, "document.querySelector('#home-story')?.dataset.modelStatus");
    return status === "ready"
      && snapshot?.poseTiming?.validatedPoseCount === 5
      && snapshot?.poseTiming?.source === "manifest-timeSeconds"
      ? snapshot
      : null;
  }, { timeout: 90_000, interval: 250 });
}

async function settleAtScene(client, id, expectedMaster) {
  await evaluate(client, `(() => {
    const target = document.getElementById(${JSON.stringify(id)});
    scrollTo({ top: target.offsetTop, behavior: 'instant' });
    return target.offsetTop;
  })()`);
  let previous;
  let stableReads = 0;
  return waitFor(async () => {
    const current = await readQa(client);
    const atScene = current?.story?.activeScene === id;
    const atMaster = approximately(current?.progress?.master, expectedMaster, 0.018);
    if (!atScene || !atMaster) {
      previous = current;
      stableReads = 0;
      return null;
    }
    if (previous) {
      const stable = ["storyRoot", "claw_left", "ring_inner", "leg_left_01"].every(
        (name) => transformDistance(previous.transforms?.[name], current.transforms?.[name]) <= 0.0001,
      );
      stableReads = stable ? stableReads + 1 : 0;
    }
    previous = current;
    return stableReads >= 4 ? current : null;
  }, { timeout: 12_000, interval: 140 });
}

function storyDataDistance(left, right) {
  if (!left?.blocks || !right?.blocks) return Infinity;
  return Math.max(...left.blocks.map((block) => {
    const match = right.blocks.find(({ id }) => id === block.id);
    if (!match) return Infinity;
    return Math.sqrt(block.position.reduce(
      (sum, value, index) => sum + ((value - match.position[index]) ** 2),
      0,
    ));
  }));
}

async function settleAtMaster(client, targetMaster) {
  await evaluate(client, `scrollTo({
    top: (document.documentElement.scrollHeight - innerHeight) * ${targetMaster},
    behavior: 'instant'
  })`);
  let previous;
  let stableReads = 0;
  return waitFor(async () => {
    const current = await readQa(client);
    if (!approximately(current?.progress?.master, targetMaster, 0.018)) {
      previous = current;
      stableReads = 0;
      return null;
    }
    if (previous) {
      const modelStable = transformDistance(previous.transforms?.storyRoot, current.transforms?.storyRoot) <= 0.0001;
      const dataStable = storyDataDistance(previous.storyData, current.storyData) <= 0.0001;
      stableReads = modelStable && dataStable ? stableReads + 1 : 0;
    }
    previous = current;
    return stableReads >= 4 ? current : null;
  }, { timeout: 12_000, interval: 140 });
}

async function inspectDiagram(client) {
  return evaluate(client, `(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      return style.visibility !== 'hidden' && Number(style.opacity) > 0.01;
    };
    const nodes = Array.from(document.querySelectorAll('#home-s04 .home-activity-node'));
    const edges = Array.from(document.querySelectorAll('#home-s04 .home-activity-edge'));
    const guards = Array.from(document.querySelectorAll('#home-s04 .home-activity-guard'));
    return {
      laneIds: Array.from(document.querySelectorAll('#home-s04 .home-activity-lane')).map((item) => item.dataset.lane),
      nodeIds: nodes.map((item) => item.dataset.nodeId),
      nodeTypes: Object.fromEntries(nodes.map((item) => [item.dataset.nodeId, item.dataset.nodeType])),
      visibleNodes: nodes.filter(visible).length,
      edgeIds: edges.map((item) => item.dataset.edgeId),
      edgeEndpoints: edges.map((item) => ({
        id: item.dataset.edgeId,
        from: item.dataset.from,
        to: item.dataset.to,
        guard: item.dataset.guard,
      })),
      visibleEdges: edges.filter(visible).length,
      revealedEdges: edges.filter((item) => Math.abs(Number.parseFloat(getComputedStyle(item).strokeDashoffset || '0')) < 0.03).length,
      highlightedMainEdges: edges.filter((item) => item.classList.contains('home-activity-edge--main') && /217, 119, 6/.test(getComputedStyle(item).stroke)).length,
      visibleGuards: guards.filter(visible).length,
      sourceImage: document.querySelector('#home-s04 .home-diagram-source img')?.getAttribute('src') || null,
      stageRect: (() => {
        const rect = document.querySelector('#home-s04 .home-activity__stage')?.getBoundingClientRect();
        return rect ? { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left } : null;
      })(),
    };
  })()`);
}

async function inspectScene(client, id) {
  return evaluate(client, `(() => {
    const section = document.getElementById(${JSON.stringify(id)});
    const rect = section.getBoundingClientRect();
    const buttons = Array.from(section.querySelectorAll('button')).map((button) => {
      const box = button.getBoundingClientRect();
      return {
        text: button.textContent.trim().replace(/\\s+/g, ' '),
        inViewport: box.top >= 0 && box.bottom <= innerHeight && box.left >= 0 && box.right <= innerWidth,
      };
    });
    const copy = section.querySelector('.home-copy')?.getBoundingClientRect();
    const nav = document.querySelector('.home-nav')?.getBoundingClientRect();
    return {
      id: section.id,
      text: section.textContent.trim().replace(/\\s+/g, ' '),
      rect: { top: rect.top, bottom: rect.bottom, height: rect.height },
      copy: copy ? { top: copy.top, right: copy.right, bottom: copy.bottom, left: copy.left } : null,
      nav: nav ? { top: nav.top, right: nav.right, bottom: nav.bottom, left: nav.left } : null,
      buttons,
      activeChapter: document.querySelector('.home-chapters [aria-current="step"]')?.getAttribute('href'),
    };
  })()`);
}

async function testPendingToolDestination(port, url, tool) {
  const page = await createPage(port, "about:blank");
  const testClient = new CdpClient(page.webSocketDebuggerUrl);
  const username = `qa_pending_${tool.replace(/[^a-z]/g, "_")}`;
  const password = "StudyMaster!123";
  const selector = tool === "bubble-sort"
    ? "[data-testid=home-open-bubble-sort]"
    : "[data-testid=home-open-diagram]";
  const sceneId = tool === "bubble-sort" ? "home-s03" : "home-s04";
  const sceneMaster = tool === "bubble-sort" ? 0.4 : 0.6;
  try {
    await testClient.connect();
    await testClient.send("Page.enable");
    await testClient.send("Runtime.enable");
    await setViewport(testClient, 1366, 768);
    await navigate(testClient, url);
    await waitForModel(testClient);
    await evaluate(testClient, `localStorage.setItem('studymaster_users', JSON.stringify([{
      username: ${JSON.stringify(username)},
      email: ${JSON.stringify(`${username}@example.test`)},
      password: ${JSON.stringify(password)},
      locked: false
    }]))`);
    await settleAtScene(testClient, sceneId, sceneMaster);
    await evaluate(testClient, `document.querySelector(${JSON.stringify(selector)}).click()`);
    const pendingBeforeLogin = await waitFor(() => evaluate(
      testClient,
      `document.querySelector('.home-landing-shell')?.dataset.pendingDestination === ${JSON.stringify(tool)}`,
    ));
    await evaluate(testClient, `(() => {
      const inputs = document.querySelectorAll('[role=dialog] form input');
      const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
      setValue.call(inputs[0], ${JSON.stringify(username)});
      inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
      setValue.call(inputs[1], ${JSON.stringify(password)});
      inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
      document.querySelector('[role=dialog] form').requestSubmit();
    })()`);
    const arrived = await waitFor(() => evaluate(testClient, tool === "bubble-sort"
      ? "Array.from(document.querySelectorAll('h1')).some((item) => item.textContent.includes('BUBBLE SORT'))"
      : "document.body.innerText.includes('Diagram Studio')"), { timeout: 20_000, interval: 200 });
    return {
      clicked: true,
      pendingBeforeLogin,
      arrived,
      destination: tool === "bubble-sort" ? "dsa / bubble-sort" : "analysis-design / DiagramSimDashboard",
      authMechanism: "existing local account login in isolated Chrome QA profile",
    };
  } finally {
    testClient.close();
  }
}

const debugPort = await freePort();
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

const browserErrors = [];
let client;
try {
  const page = await createPage(debugPort, baseUrl);
  client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  client.on("Runtime.consoleAPICalled", ({ type, args }) => {
    if (type === "error") browserErrors.push(args.map((arg) => arg.value || arg.description).join(" "));
  });
  client.on("Runtime.exceptionThrown", ({ exceptionDetails }) => {
    browserErrors.push(exceptionDetails.exception?.description || exceptionDetails.text);
  });
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await setViewport(client, 1366, 768);
  await navigate(client, baseUrl);
  const initial = await waitForModel(client).catch(async (error) => {
    const diagnostic = await evaluate(client, `(() => ({
      modelStatus: document.querySelector('#home-story')?.dataset.modelStatus,
      canvasState: document.querySelector('[data-testid=home-canvas-state]')?.dataset.state,
      qa: window.__STUDYMASTER_B6_QA__?.snapshot?.() || null,
    }))()`);
    console.error(JSON.stringify({ diagnostic, browserErrors }, null, 2));
    throw error;
  });

  const checks = {
    poseTiming: initial.poseTiming,
    transformOwner: await evaluate(client, `(() => ({
      controllerCount: window.ScrollTrigger?.getAll?.().filter((item) => item.vars?.id === 'studymaster-s01-s02').length ?? null,
      mixerActions: 0,
    }))()`),
    scenes1366: {},
    snapshotsForward: {},
    snapshotsReverse: {},
  };

  for (let index = 0; index < sceneStops.length; index += 1) {
    const [id, progress, pose] = sceneStops[index];
    const snapshot = await settleAtScene(client, id, progress);
    checks.snapshotsForward[id] = {
      expectedPose: pose,
      actual: { from: snapshot.progress.poseFrom, to: snapshot.progress.poseTo },
      progress: snapshot.progress,
      transforms: snapshot.transforms,
      storyData: snapshot.storyData,
      framing: snapshot.framing,
    };
    checks.scenes1366[id] = await inspectScene(client, id);
    await screenshot(client, `${String(index + 1).padStart(2, "0")}-${id}-1366x768.png`);
  }

  checks.interpolation = [];
  for (let index = 0; index <= 20; index += 1) {
    const target = index / 20;
    await evaluate(client, `scrollTo({ top: (document.documentElement.scrollHeight - innerHeight) * ${target}, behavior: 'instant' })`);
    await delay(620);
    const snapshot = await readQa(client);
    checks.interpolation.push({
      target,
      master: snapshot.progress.master,
      poseFrom: snapshot.progress.poseFrom,
      poseTo: snapshot.progress.poseTo,
      segmentProgress: snapshot.progress.segmentProgress,
      transforms: snapshot.transforms,
      framing: snapshot.framing,
    });
  }

  for (let index = sceneStops.length - 1; index >= 0; index -= 1) {
    const [id, progress] = sceneStops[index];
    const snapshot = await settleAtScene(client, id, progress);
    checks.snapshotsReverse[id] = {
      progress: snapshot.progress,
      transforms: snapshot.transforms,
      storyData: snapshot.storyData,
    };
  }

  checks.reverseDistances = Object.fromEntries(sceneStops.map(([id]) => [
    id,
    Object.fromEntries(["storyRoot", "claw_left", "ring_inner", "leg_left_01"].map((name) => [
      name,
      transformDistance(
        checks.snapshotsForward[id].transforms[name],
        checks.snapshotsReverse[id].transforms[name],
      ),
    ])),
  ]));
  checks.storyDataReverseDistances = Object.fromEntries(sceneStops.map(([id]) => [
    id,
    storyDataDistance(
      checks.snapshotsForward[id].storyData,
      checks.snapshotsReverse[id].storyData,
    ),
  ]));

  checks.storyDataMilestones = {};
  const storyDataMilestones = [
    ["s02-bridge", 0.22],
    ["compare-3-1", 0.4],
    ["swap-3-1-mid", 0.4375],
    ["state-1-3-2", 0.4585],
    ["compare-3-2", 0.475],
    ["swap-3-2-mid", 0.5005],
    ["state-1-2-3", 0.52],
    ["no-swap", 0.535],
    ["early-exit", 0.547],
    ["become-action-nodes", 0.595],
  ];
  for (const [name, target] of storyDataMilestones) {
    const snapshot = await settleAtMaster(client, target);
    checks.storyDataMilestones[name] = snapshot.storyData;
    await screenshot(client, `motion-${name}-1366x768.png`);
  }

  checks.diagramMilestones = {};
  for (const [name, target] of [["nodes", 0.51], ["edges", 0.55], ["highlight", 0.61]]) {
    await settleAtMaster(client, target);
    checks.diagramMilestones[name] = await inspectDiagram(client);
    await screenshot(client, `motion-s04-${name}-1366x768.png`);
  }

  checks.trace = await evaluate(client, `(() => ({
    arrays: Array.from(document.querySelectorAll('#home-s03 .home-sort-blocks')).map((row) => row.getAttribute('aria-label')),
    details: Array.from(document.querySelectorAll('#home-s03 .home-sort-trace li p')).map((row) => row.textContent.trim()),
  }))()`);
  checks.diagram = {
    ...(await inspectDiagram(client)),
    sourceAlt: await evaluate(client, "document.querySelector('#home-s04 .home-diagram-source img')?.alt || null"),
    guards: await evaluate(client, "Array.from(document.querySelectorAll('#home-s04 .home-activity-guard')).map((item) => item.textContent.trim())"),
  };
  checks.toolPreview = await evaluate(client, `(() => ({
    label: document.querySelector('#home-s05 .home-demo-label')?.textContent.trim(),
    actions: Array.from(document.querySelectorAll('#home-s05 .home-tool-preview__actions li')).map((item) => item.textContent.trim()),
    fakeButtonCount: document.querySelectorAll('#home-s05 .home-tool-preview button').length,
  }))()`);
  checks.typography = await evaluate(client, `(() => {
    const heading = document.querySelector('#home-s01-title');
    const style = getComputedStyle(heading);
    return {
      nfc: heading.textContent === heading.textContent.normalize('NFC'),
      fontFamily: style.fontFamily,
      externalFontResources: performance.getEntriesByType('resource')
        .filter((entry) => /googleapis|gstatic|woff/i.test(entry.name))
        .map((entry) => ({ name: entry.name, transferSize: entry.transferSize })),
    };
  })()`);

  await setViewport(client, 1440, 900);
  await delay(350);
  checks.scenes1440 = {};
  for (const [id, progress] of sceneStops) {
    await settleAtScene(client, id, progress);
    checks.scenes1440[id] = await inspectScene(client, id);
    await screenshot(client, `${id}-1440x900.png`);
  }

  await setViewport(client, 1366, 768);
  await settleAtScene(client, "home-s03", 0.4);
  await evaluate(client, "document.querySelector('[data-testid=home-open-bubble-sort]').click()");
  checks.guestToolCtaOpensAuth = await waitFor(() => evaluate(
    client,
    "document.querySelector('[role=dialog][aria-label=\"Xác thực StudyMaster\"]')?.getAttribute('aria-hidden') === 'false'",
  ));
  await client.send("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape" });
  await client.send("Input.dispatchKeyEvent", { type: "keyUp", key: "Escape", code: "Escape" });
  await waitFor(() => evaluate(client, "document.querySelector('[role=dialog][aria-label=\"Xác thực StudyMaster\"]')?.getAttribute('aria-hidden') === 'true'"));

  await evaluate(client, "document.querySelector('.home-chapters a[href=\"#home-s04\"]')?.click()");
  const jumpS04 = await settleAtScene(client, "home-s04", 0.6);
  await evaluate(client, "document.querySelector('.home-chapters a[href=\"#home-s02\"]')?.click()");
  const jumpS02 = await settleAtScene(client, "home-s02", 0.2);
  checks.chapterJumps = {
    s04: { activeScene: jumpS04.story.activeScene, master: jumpS04.progress.master },
    s02: { activeScene: jumpS02.story.activeScene, master: jumpS02.progress.master },
  };

  await evaluate(client, "scrollTo({ top: 0, behavior: 'instant' }); scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }); scrollTo({ top: document.getElementById('home-s03').offsetTop, behavior: 'instant' })");
  const fastScroll = await settleAtScene(client, "home-s03", 0.4);
  checks.fastScroll = { activeScene: fastScroll.story.activeScene, progress: fastScroll.progress };

  const beforePause = await readQa(client);
  await client.send("Page.setWebLifecycleState", { state: "frozen" });
  await delay(350);
  await client.send("Page.setWebLifecycleState", { state: "active" });
  await delay(220);
  const afterPause = await readQa(client);
  checks.pauseResume = {
    sceneBefore: beforePause.story.activeScene,
    sceneAfter: afterPause.story.activeScene,
    transformDistances: Object.fromEntries(["storyRoot", "claw_left", "ring_inner", "leg_left_01"].map((name) => [
      name,
      transformDistance(beforePause.transforms[name], afterPause.transforms[name]),
    ])),
  };

  const reducedPage = await createPage(debugPort, "about:blank");
  const reduced = new CdpClient(reducedPage.webSocketDebuggerUrl);
  await reduced.connect();
  await reduced.send("Page.enable");
  await reduced.send("Runtime.enable");
  await reduced.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await reduced.send("Emulation.setDeviceMetricsOverride", {
    width: 1366, height: 768, deviceScaleFactor: 1, mobile: false,
  });
  await navigate(reduced, baseUrl);
  await waitFor(() => evaluate(reduced, "document.querySelector('#home-story')?.dataset.motion === 'reduced'"));
  await evaluate(reduced, "document.getElementById('home-s06').scrollIntoView({behavior:'instant'})");
  await delay(350);
  checks.reducedMotion = await evaluate(reduced, `(() => ({
    motion: document.querySelector('#home-story')?.dataset.motion,
    sectionCount: document.querySelectorAll('.home-story-section').length,
    finalCta: document.querySelector('[data-testid=home-final-cta]')?.textContent.trim(),
    activeScene: document.querySelector('#home-story')?.dataset.activeScene,
    hiddenEssential: Array.from(document.querySelectorAll('.home-story-section h1, .home-story-section h2, .home-story-section button')).filter((item) => {
      const style = getComputedStyle(item);
      return style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0;
    }).length,
    traceRows: document.querySelectorAll('#home-s03 .home-sort-trace li').length,
    diagramNodes: document.querySelectorAll('#home-s04 .home-activity-node').length,
    diagramEdges: document.querySelectorAll('#home-s04 .home-activity-edge').length,
  }))()`);
  await screenshot(reduced, "07-reduced-motion-s06-1366x768.png");
  reduced.close();

  const fallbackPage = await createPage(debugPort, `${baseUrl}?modelError=1`);
  const fallback = new CdpClient(fallbackPage.webSocketDebuggerUrl);
  await fallback.connect();
  await fallback.send("Page.enable");
  await fallback.send("Runtime.enable");
  await fallback.send("Emulation.setDeviceMetricsOverride", {
    width: 1366, height: 768, deviceScaleFactor: 1, mobile: false,
  });
  await navigate(fallback, `${baseUrl}?modelError=1`);
  await waitFor(() => evaluate(fallback, "document.querySelector('#home-story')?.dataset.modelStatus === 'error'"));
  await evaluate(fallback, "document.getElementById('home-s06').scrollIntoView({behavior:'instant'})");
  await delay(300);
  checks.fallback = await evaluate(fallback, `(() => ({
    modelStatus: document.querySelector('#home-story')?.dataset.modelStatus,
    sectionCount: document.querySelectorAll('.home-story-section').length,
    finalCta: document.querySelector('[data-testid=home-final-cta]')?.textContent.trim(),
    traceRows: document.querySelectorAll('#home-s03 .home-sort-trace li').length,
    diagramNodes: document.querySelectorAll('#home-s04 .home-activity-node').length,
    diagramEdges: document.querySelectorAll('#home-s04 .home-activity-edge').length,
  }))()`);
  await screenshot(fallback, "08-webgl-model-fallback-s06-1366x768.png");
  fallback.close();

  checks.ctaDestinations = {
    clickTested: {
      bubbleSort: await testPendingToolDestination(debugPort, baseUrl, "bubble-sort"),
      activityDiagram: await testPendingToolDestination(debugPort, baseUrl, "activity-diagram"),
    },
    sourceReviewedOnly: [
      "S06 learner -> subject-select",
      "S06 admin -> admin-dashboard",
    ],
  };

  if (recordFrames) {
    await setViewport(client, 1366, 768);
    const frameCount = 96;
    for (let index = 0; index < frameCount; index += 1) {
      const half = (frameCount - 1) / 2;
      const progress = index <= half ? index / half : (frameCount - 1 - index) / half;
      await evaluate(client, `scrollTo({ top: (document.documentElement.scrollHeight - innerHeight) * ${progress}, behavior: 'instant' })`);
      await delay(90);
      await screenshot(client, `frame-${String(index + 1).padStart(4, "0")}.png`, recordingDir);
    }
    checks.recording = {
      kind: "frame-composited from browser-rendered states",
      direction: "S01→S06→S01",
      frameCount,
      fps: 8,
      durationSeconds: frameCount / 8,
    };
  } else {
    checks.recording = { kind: "not captured", frameCount: 0 };
  }

  const failedChecks = [];
  if (checks.poseTiming.validatedPoseCount !== 5) failedChecks.push("five manifest-time poses");
  if (checks.trace.arrays.join("|") !== "[3, 1, 2]|[1, 3, 2]|[1, 2, 3]|[1, 2, 3]") failedChecks.push("Bubble Sort trace");
  if (!checks.trace.details.at(-1)?.includes("kết thúc sớm")) failedChecks.push("Bubble Sort early exit");
  const milestone = checks.storyDataMilestones;
  const expectedIdentities = "value-3:3|value-1:1|value-2:2";
  for (const [name, sample] of Object.entries(milestone)) {
    const identities = sample.blocks.map(({ id, value }) => `${id}:${value}`).join("|");
    if (identities !== expectedIdentities) failedChecks.push(`${name} fixed block identity`);
    if (sample.visible && sample.blocks.some(({ inside }) => !inside)) failedChecks.push(`${name} data block framing`);
  }
  if (milestone["compare-3-1"].order.join(",") !== "3,1,2") failedChecks.push("initial data order");
  if (milestone["state-1-3-2"].order.join(",") !== "1,3,2") failedChecks.push("first swap result");
  if (milestone["state-1-2-3"].order.join(",") !== "1,2,3") failedChecks.push("second swap result");
  if (milestone["swap-3-1-mid"].blocks.filter(({ compared }) => compared).length !== 2
    || milestone["swap-3-1-mid"].blocks.filter(({ compared }) => compared).some(({ position }) => Math.abs(position[1]) <= 0.1)) {
    failedChecks.push("first swap lift/compare state");
  }
  if (milestone["early-exit"].phase !== "early-exit"
    || milestone["early-exit"].blocks.some(({ locked }) => !locked)) {
    failedChecks.push("derived early-exit state");
  }
  if (!checks.diagram.sourceImage?.includes("atm_activity_diagram.png")) failedChecks.push("ATM source asset");
  if (checks.diagram.laneIds.join("|") !== "customer|terminal|bank") failedChecks.push("ATM swimlanes");
  if (checks.diagram.nodeIds.length !== 14 || checks.diagram.edgeIds.length !== 16) failedChecks.push("ATM node/edge structure");
  if (Object.values(checks.diagram.nodeTypes).filter((type) => type === "decision").length !== 2
    || checks.diagram.guards.join("|") !== "[Valid PIN?]|[Balance ≥ Amount?]") {
    failedChecks.push("ATM decision guards");
  }
  if (checks.diagramMilestones.nodes.visibleNodes <= checks.diagramMilestones.nodes.visibleEdges) failedChecks.push("ATM nodes precede edges");
  if (checks.diagramMilestones.edges.revealedEdges <= 0) failedChecks.push("ATM edge draw progress");
  if (checks.diagramMilestones.highlight.highlightedMainEdges <= 0) failedChecks.push("ATM main flow highlight");
  if (checks.toolPreview.label !== "Minh họa" || checks.toolPreview.fakeButtonCount !== 0) failedChecks.push("tool preview guard");
  if (!checks.typography.nfc || !checks.typography.fontFamily.includes("Times New Roman")) failedChecks.push("Vietnamese typography fallback");
  if (!checks.guestToolCtaOpensAuth) failedChecks.push("guest tool auth gate");
  if (!checks.ctaDestinations.clickTested.bubbleSort.arrived
    || !checks.ctaDestinations.clickTested.activityDiagram.arrived) failedChecks.push("pending CTA destination after login");
  if (checks.reducedMotion.sectionCount !== 6 || checks.reducedMotion.hiddenEssential !== 0
    || checks.reducedMotion.traceRows !== 4 || checks.reducedMotion.diagramNodes !== 14
    || checks.reducedMotion.diagramEdges !== 16) failedChecks.push("reduced-motion content");
  if (checks.fallback.sectionCount !== 6 || checks.fallback.modelStatus !== "error"
    || checks.fallback.traceRows !== 4 || checks.fallback.diagramNodes !== 14
    || checks.fallback.diagramEdges !== 16) failedChecks.push("fallback content");
  if (checks.interpolation.some((sample) => !approximately(sample.master, sample.target, 0.025) || !sample.framing.inside)) failedChecks.push("continuous interpolation/framing");
  if (checks.fastScroll.activeScene !== "home-s03" || !approximately(checks.fastScroll.progress.master, 0.4, 0.02)) failedChecks.push("fast scroll deterministic state");
  if (checks.pauseResume.sceneBefore !== checks.pauseResume.sceneAfter || Object.values(checks.pauseResume.transformDistances).some((distance) => distance > 0.001)) failedChecks.push("pause/resume stable state");
  for (const [id] of sceneStops) {
    if (checks.scenes1366[id].buttons.some((button) => !button.inViewport)) failedChecks.push(`${id} CTA viewport`);
    if (checks.scenes1440[id].buttons.some((button) => !button.inViewport)) failedChecks.push(`${id} CTA 1440 viewport`);
    if (Object.values(checks.reverseDistances[id]).some((distance) => distance > 0.001)) failedChecks.push(`${id} reverse state`);
    if (checks.storyDataReverseDistances[id] > 0.001) failedChecks.push(`${id} reverse story data state`);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    viewports: ["1366x768", "1440x900"],
    evidenceClassification: {
      measured: [
        "manifest timeSeconds and five-pose coverage",
        "scene/master state at six forward and reverse endpoints",
        "representative root/claw/ring/leg transforms",
        "fixed R3F data-block identity, projected position, compare/swap/lock state and reverse distance",
        "structured ATM node/edge/guard inventory plus node-first, edge-draw and main-flow highlight milestones",
        "CTA viewport bounds, chapter jumps, reduced motion and model fallback",
        "guest pending destinations click-tested through existing login into Bubble Sort and Diagram Studio",
        "Unicode NFC, computed display font chain and external font transfer",
      ],
      visualReviewRequired: [
        "perceived S02-to-S03 bridge rhythm and block label readability",
        "ATM edge routing and labels at hero size",
        "mesh occlusion during continuous scroll",
      ],
      limits: [
        "No exact triangle intersection solver runs in browser QA",
        "Learner and admin S06 role branches are source-reviewed, not click-tested with privileged accounts",
        "Video frames, when enabled, are browser-rendered states composed later rather than a real-time screen recording",
      ],
    },
    checks,
    browserErrors,
    failedChecks,
    pass: failedChecks.length === 0,
  };
  fs.writeFileSync(path.join(outputDir, "browser-verification.json"), `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify({ pass: report.pass, failedChecks, browserErrors: browserErrors.length }, null, 2));
  if (!report.pass) process.exitCode = 1;
} finally {
  client?.close();
  chrome.kill();
}
