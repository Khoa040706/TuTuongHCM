import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import WebSocket from "ws";

const projectRoot = process.cwd();
const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = path.resolve(
  projectRoot,
  process.argv[3] || "artifacts/homepage-3d/b4/revision/browser",
);
const chromePath = process.env.STUDYMASTER_CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = path.join(os.tmpdir(), "studymaster-chrome-b4-revision-" + process.pid);
const recordingFrameDir = path.join(outputDir, "recording-frames");
const sampleTargets = Array.from({ length: 11 }, (_, index) => index / 10);
const recordingFrameCount = 180;
const recordingFps = 10;
const skipRecording = process.env.STUDYMASTER_B4_SKIP_RECORDING === "1";
const disableRecording = process.env.STUDYMASTER_B4_DISABLE_RECORDING === "1";

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(profileDir, { recursive: true });
fs.mkdirSync(recordingFrameDir, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const approximately = (value, expected, tolerance) =>
  Number.isFinite(value) && Math.abs(value - expected) <= tolerance;

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
  throw lastError || new Error("Timed out after " + timeout + "ms");
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
        if (message.error) {
          pending.reject(new Error(pending.method + ": " + message.error.message));
        }
        else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) || []) listener(message.params);
    });
    this.socket.on("close", () => {
      for (const pending of this.pending.values()) {
        clearTimeout(pending.timer);
        pending.reject(new Error("CDP socket closed while waiting for " + pending.method));
      }
      this.pending.clear();
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error("CDP command timed out: " + method));
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

async function createPage(port, url) {
  return waitFor(async () => {
    const endpoint = "http://127.0.0.1:" + port + "/json/new?" + encodeURIComponent(url);
    const response = await fetch(endpoint, { method: "PUT" });
    if (!response.ok) return null;
    return response.json();
  });
}

async function evaluate(client, expression, awaitPromise = true) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || "Browser evaluation failed");
  }
  return result.result.value;
}

async function screenshot(client, name) {
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const file = path.join(outputDir, name);
  fs.writeFileSync(file, Buffer.from(data, "base64"));
  return file;
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
  await waitFor(() => evaluate(client, "document.readyState === 'complete'"), { timeout: 60_000 });
}

async function waitForModelState(client, accepted, timeout = 60_000) {
  return waitFor(async () => {
    const state = await evaluate(
      client,
      "document.querySelector('#home-story')?.dataset.modelStatus || null",
    );
    return accepted.includes(state) ? state : null;
  }, { timeout, interval: 250 });
}

async function readQa(client) {
  return evaluate(client, "window.__STUDYMASTER_B4_QA__?.snapshot?.() || null");
}

async function waitForQa(client) {
  return waitFor(async () => {
    const snapshot = await readQa(client);
    return snapshot?.poseTiming?.validatedClipCount > 0
      && snapshot?.poseTiming?.validatedPoseCount === 5
      && snapshot?.poseTiming?.source === "manifest-timeSeconds"
      ? snapshot
      : null;
  }, { timeout: 60_000, interval: 200 });
}

async function setControllerProgress(client, target, settle = 650) {
  const snapshot = await waitForQa(client);
  if (!snapshot.controller.active) {
    throw new Error("Cannot set progress: B4 controller is not active");
  }
  const top = snapshot.controller.start
    + ((snapshot.controller.end - snapshot.controller.start) * target);
  await evaluate(client, "scrollTo({ top: " + top + ", behavior: 'instant' })");
  await delay(Math.min(settle, 150));
  let previous = null;
  let consecutiveStableReads = 0;
  return waitFor(async () => {
    const current = await readQa(client);
    const atController = approximately(current?.controller?.progress, target, 0.015);
    const atMaster = approximately(current?.progress?.master, target, 0.01);
    if (!atController || !atMaster) {
      previous = current;
      consecutiveStableReads = 0;
      return null;
    }
    if (previous) {
      const distances = snapshotDistance(previous, current);
      const transformsStable = Object.values(distances).every((value) => value <= 0.0005);
      const phasesStable = ["claws", "rings", "body", "root"].every(
        (phase) => Math.abs(current.progress[phase] - previous.progress[phase]) <= 0.0005,
      );
      consecutiveStableReads = transformsStable && phasesStable
        ? consecutiveStableReads + 1
        : 0;
    }
    previous = current;
    return consecutiveStableReads >= 2
      ? {
        ...current,
        endpointStability: {
          stable: true,
          target,
          controllerTolerance: 0.015,
          masterTolerance: 0.01,
          transformTolerance: 0.0005,
          consecutiveStableReads,
        },
      }
      : null;
  }, { timeout: 10_000, interval: 120 });
}

async function inspectElement(client, selector) {
  return evaluate(client, "(() => {"
    + "const element = document.querySelector(" + JSON.stringify(selector) + ");"
    + "if (!element) return { exists: false };"
    + "const rect = element.getBoundingClientRect();"
    + "const x = rect.left + rect.width / 2;"
    + "const y = rect.top + rect.height / 2;"
    + "const top = document.elementFromPoint(x, y);"
    + "return {"
    + "exists: true,"
    + "inViewport: rect.top >= 0 && rect.left >= 0 && rect.bottom <= innerHeight && rect.right <= innerWidth,"
    + "unobscured: top === element || element.contains(top),"
    + "rect: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },"
    + "text: element.textContent.trim()"
    + "};"
    + "})()");
}

async function inspectComposition(client, copySelector, snapshot) {
  const layout = await evaluate(client, "(() => {"
    + "const stage = document.querySelector('[data-testid=\"home-stage\"]');"
    + "const copy = document.querySelector(" + JSON.stringify(copySelector) + ");"
    + "if (!stage || !copy) return null;"
    + "const pack = (rect) => ({ left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom });"
    + "return { stage: pack(stage.getBoundingClientRect()), copy: pack(copy.getBoundingClientRect()) };"
    + "})()");
  const ndc = snapshot?.framing?.ndcBounds;
  if (!layout || !ndc) return { available: false };
  const stageWidth = layout.stage.right - layout.stage.left;
  const stageHeight = layout.stage.bottom - layout.stage.top;
  const model = {
    left: layout.stage.left + ((ndc.minX + 1) / 2) * stageWidth,
    right: layout.stage.left + ((ndc.maxX + 1) / 2) * stageWidth,
    top: layout.stage.top + ((1 - ndc.maxY) / 2) * stageHeight,
    bottom: layout.stage.top + ((1 - ndc.minY) / 2) * stageHeight,
  };
  const overlapWidth = Math.max(
    0,
    Math.min(model.right, layout.copy.right) - Math.max(model.left, layout.copy.left),
  );
  const overlapHeight = Math.max(
    0,
    Math.min(model.bottom, layout.copy.bottom) - Math.max(model.top, layout.copy.top),
  );
  return {
    available: true,
    model,
    copy: layout.copy,
    horizontalGap: model.left - layout.copy.right,
    overlapArea: overlapWidth * overlapHeight,
    noOverlap: overlapWidth === 0 || overlapHeight === 0,
  };
}

async function dispatchKey(client, key, code = key) {
  await client.send("Input.dispatchKeyEvent", { type: "keyDown", key, code });
  await client.send("Input.dispatchKeyEvent", { type: "keyUp", key, code });
}

function flattenTransform(transform) {
  if (!transform) return [];
  return [
    ...(transform.position || []),
    ...(transform.quaternion || []),
    ...(transform.scale || []),
  ];
}

function transformDistance(left, right) {
  const a = flattenTransform(left);
  const b = flattenTransform(right);
  if (a.length === 0 || a.length !== b.length) return Infinity;
  return Math.sqrt(a.reduce((sum, value, index) => sum + ((value - b[index]) ** 2), 0));
}

function snapshotDistance(left, right) {
  const names = ["storyRoot", "claw_left", "ring_inner", "leg_left_01"];
  return Object.fromEntries(
    names.map((name) => [name, transformDistance(left?.transforms?.[name], right?.transforms?.[name])]),
  );
}

function minimumClearance(snapshot) {
  const values = Object.values(snapshot?.framing?.clearance || {});
  return values.length > 0 ? Math.min(...values) : -Infinity;
}

function phaseOnset(samples, phase) {
  return samples.findIndex((sample) => sample.progress[phase] > 0.01);
}

async function captureRecording(client) {
  for (let index = 0; index < recordingFrameCount; index += 1) {
    const half = recordingFrameCount / 2;
    const linear = index < half
      ? index / (half - 1)
      : 1 - ((index - half) / (half - 1));
    const eased = linear * linear * (3 - (2 * linear));
    const current = await readQa(client);
    const top = current.controller.start
      + ((current.controller.end - current.controller.start) * eased);
    await evaluate(client, "scrollTo({ top: " + top + ", behavior: 'instant' })");
    await delay(52);
    await screenshot(
      client,
      "recording-frames/frame-" + String(index + 1).padStart(4, "0") + ".png",
    );
  }
}

const port = await getFreePort();
const chrome = spawn(chromePath, [
  "--headless=new",
  "--enable-webgl",
  "--enable-unsafe-swiftshader",
  "--use-angle=swiftshader",
  "--no-sandbox",
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
  "--remote-debugging-port=" + port,
  "--user-data-dir=" + profileDir,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });

let client;
const browserErrors = [];
const checks = {};
let chromeStderr = "";
chrome.stderr.on("data", (chunk) => {
  chromeStderr += chunk.toString();
});

try {
  console.error("[B4 QA] launching page");
  const page = await createPage(port, "about:blank");
  client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  // Enable CDP domains sequentially. Chromium's software-rendered Windows
  // target has proved unreliable when these initialization commands race.
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Log.enable");
  client.on("Runtime.exceptionThrown", ({ exceptionDetails }) => {
    browserErrors.push(exceptionDetails.exception?.description || exceptionDetails.text);
  });
  client.on("Log.entryAdded", ({ entry }) => {
    if (entry.level === "error") browserErrors.push(entry.text);
  });

  await setViewport(client, 1366, 768);
  console.error("[B4 QA] navigating to production preview");
  await navigate(client, baseUrl);
  console.error("[B4 QA] waiting for model");
  checks.modelState = await waitForModelState(client, ["ready", "error", "webgl-error"]);
  console.error("[B4 QA] model state: " + checks.modelState);
  checks.fullMotion = await evaluate(
    client,
    "document.querySelector('#home-story')?.dataset.motion === 'full'",
  );
  const start1366 = await setControllerProgress(client, 0);
  console.error("[B4 QA] diagnostics ready; testing 1366x768");
  checks.poseTiming = start1366.poseTiming;
  checks.controllerAtStart = start1366.controller;
  checks.framing1366 = { s01: start1366.framing };
  checks.composition1366 = {
    s01: await inspectComposition(client, ".home-copy--hero", start1366),
  };
  checks.startCta = await inspectElement(client, "[data-testid='home-start-learning']");
  checks.exploreCta = await inspectElement(client, "[data-testid='home-explore']");
  checks.loginCta = await inspectElement(client, "[data-testid='home-login']");
  checks.canvasDoesNotCapturePointer = await evaluate(client, "(() => {"
    + "const stage = document.querySelector('[data-testid=\"home-stage\"]');"
    + "return stage ? getComputedStyle(stage).pointerEvents === 'none' : false;"
    + "})()");
  await screenshot(client, "01-s01-1366x768.png");

  await dispatchKey(client, "Enter");
  await delay(200);
  checks.globalEnterDoesNotOpenAuth = await evaluate(
    client,
    "document.querySelector('[role=dialog]')?.getAttribute('aria-hidden') === 'true'",
  );
  await evaluate(client, "document.querySelector('[data-testid=\"home-start-learning\"]')?.click()");
  await delay(300);
  checks.startCtaOpensAuth = await evaluate(
    client,
    "document.querySelector('[role=dialog]')?.getAttribute('aria-hidden') === 'false'",
  );
  await dispatchKey(client, "Escape", "Escape");
  await delay(300);
  checks.escapeClosesAndRestoresFocus = await evaluate(client, "(() => ({"
    + "closed: document.querySelector('[role=\"dialog\"]')?.getAttribute('aria-hidden') === 'true',"
    + "focus: document.activeElement?.dataset?.testid || null"
    + "}))()");

  const runtimeSamples = [];
  for (const target of sampleTargets) {
    console.error("[B4 QA] interpolation sample " + target.toFixed(1));
    runtimeSamples.push(await setControllerProgress(client, target, 520));
    if (approximately(target, 0.5, 0.001)) {
      await screenshot(client, "02-mid-1366x768.png");
    }
  }
  checks.runtimeInterpolation = {
    targets: sampleTargets,
    samples: runtimeSamples,
    phaseOnsets: {
      claws: phaseOnset(runtimeSamples, "claws"),
      rings: phaseOnset(runtimeSamples, "rings"),
      body: phaseOnset(runtimeSamples, "body"),
      root: phaseOnset(runtimeSamples, "root"),
    },
    endpointDistance: snapshotDistance(runtimeSamples[0], runtimeSamples.at(-1)),
    allFramesInside: runtimeSamples.every((sample) => sample.framing.inside),
    minimumClearance: Math.min(...runtimeSamples.map(minimumClearance)),
  };
  const end1366 = runtimeSamples.at(-1);
  checks.framing1366.s02 = end1366.framing;
  checks.composition1366.s02 = await inspectComposition(
    client,
    ".home-copy--knowledge",
    end1366,
  );
  checks.s02Cta = await inspectElement(client, "[data-testid='home-s02-start']");
  await screenshot(client, "03-s02-1366x768.png");

  const reverse1366 = await setControllerProgress(client, 0);
  checks.reverse = {
    controller: reverse1366.controller,
    progress: reverse1366.progress,
    distanceFromInitial: snapshotDistance(start1366, reverse1366),
  };
  await screenshot(client, "04-s01-reverse-1366x768.png");

  await setViewport(client, 1440, 900);
  console.error("[B4 QA] testing 1440x900");
  await delay(500);
  const start1440 = await setControllerProgress(client, 0);
  checks.framing1440 = { s01: start1440.framing };
  checks.composition1440 = {
    s01: await inspectComposition(client, ".home-copy--hero", start1440),
  };
  checks.resize = {
    viewport: await evaluate(client, "({ width: innerWidth, height: innerHeight })"),
    startCta: await inspectElement(client, "[data-testid='home-start-learning']"),
  };
  await screenshot(client, "05-s01-1440x900.png");
  const end1440 = await setControllerProgress(client, 1);
  checks.framing1440.s02 = end1440.framing;
  checks.composition1440.s02 = await inspectComposition(
    client,
    ".home-copy--knowledge",
    end1440,
  );
  await screenshot(client, "06-s02-1440x900.png");

  await setViewport(client, 1366, 768);
  await setControllerProgress(client, 0);
  if (disableRecording) {
    console.error("[B4 QA] recording disabled for targeted B5 model verification");
    checks.recording = {
      kind: "not captured in this targeted verification",
      direction: null,
      frameCount: 0,
      fps: null,
      durationSeconds: 0,
      reusedExistingFrames: false,
    };
  }
  else if (skipRecording) {
    const existingFrames = fs.readdirSync(recordingFrameDir)
      .filter((name) => /^frame-\d{4}\.png$/.test(name)).length;
    if (existingFrames !== recordingFrameCount) {
      throw new Error(
        "Expected " + recordingFrameCount + " existing recording frames, found " + existingFrames,
      );
    }
    console.error("[B4 QA] reusing 180 frames from the immediately preceding run");
  } else {
    console.error("[B4 QA] capturing 180 forward/reverse frames");
    await captureRecording(client);
    console.error("[B4 QA] recording frames complete");
  }
  if (!disableRecording) {
    checks.recording = {
      kind: "frame-composited from actual browser-rendered forward/reverse states",
      direction: "S01 to S02 to S01",
      frameCount: recordingFrameCount,
      fps: recordingFps,
      durationSeconds: recordingFrameCount / recordingFps,
      reusedExistingFrames: skipRecording,
    };
  }

  await navigate(client, baseUrl + (baseUrl.includes("?") ? "&" : "?") + "modelError=1");
  console.error("[B4 QA] testing forced fallback");
  checks.forcedModelError = await waitForModelState(client, ["error", "webgl-error"]);
  checks.fallbackKeepsCta = await inspectElement(client, "[data-testid='home-start-learning']");
  await screenshot(client, "07-model-error-fallback.png");

  await client.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await navigate(client, baseUrl);
  console.error("[B4 QA] testing reduced motion");
  await waitForModelState(client, ["ready", "error", "webgl-error"]);
  const reducedStart = await waitForQa(client);
  const maxScroll = await evaluate(
    client,
    "Math.max(0, document.scrollingElement.scrollHeight - innerHeight)",
  );
  await evaluate(client, "scrollTo({ top: " + maxScroll + ", behavior: 'instant' })");
  await delay(750);
  const reducedAfterScroll = await readQa(client);
  const reducedS02Cta = await inspectElement(client, "[data-testid='home-s02-start']");
  await evaluate(client, "scrollTo({ top: 0, behavior: 'instant' })");
  await delay(200);
  const reducedStartCta = await inspectElement(client, "[data-testid='home-start-learning']");
  checks.reducedMotion = {
    motion: await evaluate(client, "document.querySelector('#home-story')?.dataset.motion"),
    controller: reducedStart.controller,
    progressBefore: reducedStart.progress,
    progressAfterScroll: reducedAfterScroll.progress,
    stableTransformDistance: snapshotDistance(reducedStart, reducedAfterScroll),
    framing: reducedAfterScroll.framing,
    startCta: reducedStartCta,
    s02Cta: reducedS02Cta,
  };
  await screenshot(client, "08-reduced-motion-1366x768.png");

  const failedChecks = [];
  const requireTrue = (name, value) => {
    if (value !== true) failedChecks.push(name + ": " + JSON.stringify(value));
  };
  const requireNear = (name, value, expected, tolerance) => {
    requireTrue(name, approximately(value, expected, tolerance));
  };
  const requireSmallDistances = (name, distances, tolerance) => {
    requireTrue(name, Object.values(distances).every((value) => value <= tolerance));
  };

  requireTrue("fullMotion", checks.fullMotion);
  requireTrue("modelState", checks.modelState === "ready");
  requireTrue("controller.active", checks.controllerAtStart.active);
  requireTrue("controller.id", checks.controllerAtStart.id === "studymaster-s01-s02");
  requireTrue("startCta.exists", checks.startCta.exists);
  requireTrue("startCta.unobscured", checks.startCta.unobscured);
  requireTrue("exploreCta.unobscured", checks.exploreCta.unobscured);
  requireTrue("loginCta.unobscured", checks.loginCta.unobscured);
  requireTrue("canvasDoesNotCapturePointer", checks.canvasDoesNotCapturePointer);
  requireTrue("globalEnterDoesNotOpenAuth", checks.globalEnterDoesNotOpenAuth);
  requireTrue("startCtaOpensAuth", checks.startCtaOpensAuth);
  requireTrue("escapeCloses", checks.escapeClosesAndRestoresFocus.closed);
  requireTrue(
    "focusRestored",
    checks.escapeClosesAndRestoresFocus.focus === "home-start-learning",
  );

  requireTrue("poseTiming.closedFrame", checks.poseTiming.closedFrame === 1);
  requireTrue("poseTiming.openFrame", checks.poseTiming.openFrame === 21);
  requireTrue("poseTiming.source", checks.poseTiming.source === "manifest-timeSeconds");
  requireTrue("poseTiming.validatedPoseCount", checks.poseTiming.validatedPoseCount === 5);
  requireNear("poseTiming.closedTime", checks.poseTiming.closedTime, 1 / 24, 0.0001);
  requireNear("poseTiming.openTime", checks.poseTiming.openTime, 21 / 24, 0.0001);
  requireNear(
    "poseTiming.derivedNormalizedTime",
    checks.poseTiming.derivedNormalizedTime,
    0.25,
    0.0001,
  );
  requireTrue("poseTiming.validatedClipCount", checks.poseTiming.validatedClipCount === 16);
  requireTrue("endpoint.s01Stable", start1366.endpointStability?.stable === true);
  requireTrue("endpoint.s02Stable", runtimeSamples.at(-1).endpointStability?.stable === true);
  requireTrue("endpoint.reverseStable", reverse1366.endpointStability?.stable === true);
  requireTrue("endpoint.1440s01Stable", start1440.endpointStability?.stable === true);
  requireTrue("endpoint.1440s02Stable", end1440.endpointStability?.stable === true);

  const interpolation = checks.runtimeInterpolation;
  requireTrue(
    "runtime.masterMonotonic",
    interpolation.samples.every(
      (sample, index) => index === 0
        || sample.progress.master >= interpolation.samples[index - 1].progress.master - 0.002,
    ),
  );
  requireNear("runtime.startProgress", interpolation.samples[0].progress.master, 0, 0.015);
  requireNear("runtime.endProgress", interpolation.samples.at(-1).progress.master, 1, 0.015);
  requireTrue(
    "runtime.phaseOrder",
    interpolation.phaseOnsets.claws >= 0
      && interpolation.phaseOnsets.claws < interpolation.phaseOnsets.rings
      && interpolation.phaseOnsets.rings < interpolation.phaseOnsets.body
      && interpolation.phaseOnsets.body <= interpolation.phaseOnsets.root,
  );
  requireTrue("runtime.clawTransformChanged", interpolation.endpointDistance.claw_left > 0.01);
  requireTrue("runtime.ringTransformChanged", interpolation.endpointDistance.ring_inner > 0.01);
  requireTrue("runtime.legTransformChanged", interpolation.endpointDistance.leg_left_01 > 0.001);
  requireTrue("runtime.storyRootTransformChanged", interpolation.endpointDistance.storyRoot > 0.01);
  requireTrue("runtime.allFramesInside", interpolation.allFramesInside);
  requireTrue("runtime.breathingRoom", interpolation.minimumClearance >= 0.075);
  requireNear("reverse.controllerProgress", checks.reverse.controller.progress, 0, 0.02);
  requireNear("reverse.masterProgress", checks.reverse.progress.master, 0, 0.02);
  requireSmallDistances("reverse.transformsReturn", checks.reverse.distanceFromInitial, 0.002);

  for (const [viewport, framing] of Object.entries({
    framing1366: checks.framing1366,
    framing1440: checks.framing1440,
  })) {
    requireTrue(viewport + ".s01.inside", framing.s01.inside);
    requireTrue(viewport + ".s02.inside", framing.s02.inside);
    requireTrue(viewport + ".s01.margin", minimumClearance({ framing: framing.s01 }) >= 0.075);
    requireTrue(viewport + ".s02.margin", minimumClearance({ framing: framing.s02 }) >= 0.075);
  }
  for (const [viewport, composition] of Object.entries({
    composition1366: checks.composition1366,
    composition1440: checks.composition1440,
  })) {
    requireTrue(viewport + ".s01.noOverlap", composition.s01.noOverlap);
    requireTrue(viewport + ".s02.noOverlap", composition.s02.noOverlap);
  }
  requireTrue(
    "resize.viewport",
    checks.resize.viewport.width === 1440 && checks.resize.viewport.height === 900,
  );
  requireTrue("resize.startCta", checks.resize.startCta.exists && checks.resize.startCta.unobscured);
  requireTrue("s02Cta", checks.s02Cta.exists && checks.s02Cta.unobscured);
  requireTrue("fallbackCta", checks.fallbackKeepsCta.exists && checks.fallbackKeepsCta.unobscured);

  requireTrue("reduced.motion", checks.reducedMotion.motion === "reduced");
  requireTrue("reduced.controllerInactive", checks.reducedMotion.controller.active === false);
  requireNear("reduced.masterBefore", checks.reducedMotion.progressBefore.master, 0, 0.001);
  requireNear("reduced.masterAfter", checks.reducedMotion.progressAfterScroll.master, 0, 0.001);
  requireSmallDistances("reduced.stablePose", checks.reducedMotion.stableTransformDistance, 0.001);
  requireTrue("reduced.framingInside", checks.reducedMotion.framing.inside);
  requireTrue(
    "reduced.breathingRoom",
    minimumClearance({ framing: checks.reducedMotion.framing }) >= 0.075,
  );
  requireTrue(
    "reduced.startCta",
    checks.reducedMotion.startCta.exists && checks.reducedMotion.startCta.unobscured,
  );
  requireTrue(
    "reduced.s02Cta",
    checks.reducedMotion.s02Cta.exists && checks.reducedMotion.s02Cta.unobscured,
  );

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    viewports: ["1366x768", "1440x900"],
    evidenceClassification: {
      measured: [
        "ScrollTrigger controller presence/range/progress",
        "master and phased progress",
        "story_root and representative claw/ring/leg transforms",
        "manifest timeSeconds for all five poses and closed/open sampling across all clips",
        "controller/master/phases and representative transforms stable before endpoint capture",
        "projected model bounds, Canvas clearance, DOM/model overlap",
        "reduced-motion controller absence and pose stability",
      ],
      visualReviewRequired: [
        "Both claw silhouettes remain readable",
        "No visible mesh penetration during browser interpolation",
        "Perceived storytelling rhythm and visual balance",
      ],
      limits: [
        "Browser QA does not run an exact triangle-mesh intersection solver",
        "Blender B3 collision scan is separate evidence and is not treated as covering web interpolation",
        "Video is frame-composited from browser-rendered states, not a real-time screen recording",
      ],
    },
    checks,
    browserErrors,
    failedChecks,
    pass: failedChecks.length === 0 && checks.modelState === "ready",
  };
  fs.writeFileSync(
    path.join(outputDir, "browser-verification.json"),
    JSON.stringify(report, null, 2) + "\n",
  );
  console.log(JSON.stringify(report, null, 2));
  if (!report.pass) process.exitCode = 1;
} finally {
  if (chromeStderr.trim()) console.error(chromeStderr.trim());
  client?.close();
  chrome.kill();
  await delay(250);
  const resolvedProfile = path.resolve(profileDir);
  const resolvedTmpRoot = path.resolve(os.tmpdir());
  if (resolvedProfile.startsWith(resolvedTmpRoot + path.sep)) {
    fs.rmSync(resolvedProfile, { recursive: true, force: true });
  }
}
