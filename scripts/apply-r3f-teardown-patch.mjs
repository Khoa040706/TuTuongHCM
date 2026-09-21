import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const PATCH_ID = "studymaster-r3f-9.7.0-deterministic-teardown-v1";
const EXPECTED_VERSION = "9.7.0";
const args = process.argv.slice(2);
const rootFlag = args.indexOf("--package-root");
const packageRoot = path.resolve(
  rootFlag >= 0 ? args[rootFlag + 1] : path.join(process.cwd(), "node_modules", "@react-three", "fiber"),
);
const reverse = args.includes("--reverse");
const checkOnly = args.includes("--check");

if (rootFlag >= 0 && !args[rootFlag + 1]) throw new Error("--package-root requires a path");
if (reverse && checkOnly) throw new Error("Use either --reverse or --check, not both");

const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const originalHashes = {
  "dist/events-156d8d12.esm.js": "4807e252e0f4529b7783c9c4b96056b066626552d4fb83570e50ce61746440e9",
  "dist/events-4c71f21f.cjs.prod.js": "ee2d5e586702c3c08468b9bc9b28dddea7561a38cf2e63585b797ca58fe1323a",
  "dist/events-b1bdeb1a.cjs.dev.js": "9b4b2e2b2f5900ad458c85ea8f674e008a6e736c1c96a66e639d943cb5a13e6e",
};
const patchedHashes = {
  "dist/events-156d8d12.esm.js": "ba66b6bccbedc6fd58a477d5d24430175face8d68b41642cfd39b4d86c9e908a",
  "dist/events-4c71f21f.cjs.prod.js": "1ed02d0617de9d451ad2a301990507580a2c9ec4c04f5f31101dbc7f8b005bda",
  "dist/events-b1bdeb1a.cjs.dev.js": "2d5f8aa2cbae72fe2a2c9cbc8b25b7e4a52af1699e4a0eb225d7611adaa4530b",
};

const lifecycleHelper = `function disposeRendererAfterUnmount(state) {
  if (!state) return;
  var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3, _state$gl4;
  state.events.disconnect == null ? void 0 : state.events.disconnect();
  if ((_state$gl = state.gl) != null && _state$gl.xr) state.xr.disconnect();
  (_state$gl2 = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl2.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
  dispose(state.scene);
  (_state$gl3 = state.gl) == null ? void 0 : _state$gl3.dispose == null ? void 0 : _state$gl3.dispose();
  (_state$gl4 = state.gl) == null ? void 0 : _state$gl4.forceContextLoss == null ? void 0 : _state$gl4.forceContextLoss();
}
function disposeUncommittedRenderer(renderer) {
  if (!renderer) return;
  var _renderer$renderLists;
  (_renderer$renderLists = renderer.renderLists) == null ? void 0 : _renderer$renderLists.dispose == null ? void 0 : _renderer$renderLists.dispose();
  renderer.dispose == null ? void 0 : renderer.dispose();
  renderer.forceContextLoss == null ? void 0 : renderer.forceContextLoss();
}
function createRoot(canvas) {`;

const originalUnmount = `function unmountComponentAtNode(canvas, callback) {
  const root = _roots.get(canvas);
  const fiber = root == null ? void 0 : root.fiber;
  if (fiber) {
    const state = root == null ? void 0 : root.store.getState();
    if (state) state.internal.active = false;
    reconciler.updateContainer(null, fiber, null, () => {
      if (state) {
        setTimeout(() => {
          try {
            var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
            state.events.disconnect == null ? void 0 : state.events.disconnect();
            (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
            (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
            if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
            dispose(state.scene);
            _roots.delete(canvas);
            if (callback) callback(canvas);
          } catch (e) {
            /* ... */
          }
        }, 500);
      }
    });
  }
}`;

const patchedUnmount = `function unmountComponentAtNode(canvas, callback) {
  const root = _roots.get(canvas);
  const fiber = root == null ? void 0 : root.fiber;
  if (!fiber || root.lifecycle.teardownStarted) return;
  root.lifecycle.unmounted = true;
  root.lifecycle.teardownStarted = true;
  const state = root.store.getState();
  if (state) state.internal.active = false;
  reconciler.updateContainer(null, fiber, null, () => {
    try {
      disposeRendererAfterUnmount(state);
    } catch (e) {
      /* ... */
    } finally {
      if (_roots.get(canvas) === root) _roots.delete(canvas);
      if (callback) callback(canvas);
    }
  });
}`;

const transforms = [
  { before: "function createRoot(canvas) {", after: lifecycleHelper },
  {
    before: `  // Map it
  if (!prevRoot) _roots.set(canvas, {
    fiber,
    store
  });`,
    after: `  // Map it
  const lifecycle = (prevRoot == null ? void 0 : prevRoot.lifecycle) || {
    unmounted: false,
    teardownStarted: false
  };
  if (!prevRoot) _roots.set(canvas, {
    fiber,
    store,
    lifecycle
  });`,
  },
  {
    before: `        const customRenderer = typeof glConfig === 'function' ? await glConfig(defaultProps) : glConfig;
        if (isRenderer(customRenderer)) {`,
    after: `        const customRenderer = typeof glConfig === 'function' ? await glConfig(defaultProps) : glConfig;
        if (lifecycle.unmounted) {
          if (isRenderer(customRenderer)) disposeUncommittedRenderer(customRenderer);
          resolve();
          return this;
        }
        if (isRenderer(customRenderer)) {`,
  },
  {
    before: `      pending.then(() => {
        reconciler.updateContainer(`,
    after: `      pending.then(() => {
        if (lifecycle.unmounted || (_roots.get(canvas) == null ? void 0 : _roots.get(canvas).lifecycle) !== lifecycle) return;
        reconciler.updateContainer(`,
  },
  { before: originalUnmount, after: patchedUnmount },
];

const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
if (packageJson.version !== EXPECTED_VERSION) {
  throw new Error(`Patch ${PATCH_ID} requires @react-three/fiber ${EXPECTED_VERSION}; found ${packageJson.version}`);
}

function occurrenceCount(source, value) {
  return source.split(value).length - 1;
}

const results = [];
for (const [relative, expectedOriginalHash] of Object.entries(originalHashes)) {
  const file = path.join(packageRoot, relative);
  let source = fs.readFileSync(file, "utf8");
  const beforeHash = sha256(source);
  const hasAllOriginal = transforms.every(({ before }) => occurrenceCount(source, before) === 1);
  const hasAllPatched = transforms.every(({ after }) => occurrenceCount(source, after) === 1);

  if (checkOnly) {
    if (!hasAllPatched || hasAllOriginal) throw new Error(`${relative} is not patched with ${PATCH_ID}`);
    if (beforeHash !== patchedHashes[relative]) {
      throw new Error(`${relative} patched hash mismatch: ${beforeHash}`);
    }
    results.push({ file: relative, status: "patched", sha256: beforeHash });
    continue;
  }
  if (reverse) {
    if (!hasAllPatched || hasAllOriginal) throw new Error(`${relative} is not in the expected patched state`);
    for (const { before, after } of [...transforms].reverse()) source = source.replace(after, before);
    const restoredHash = sha256(source);
    if (restoredHash !== expectedOriginalHash) throw new Error(`${relative} rollback hash mismatch: ${restoredHash}`);
    fs.writeFileSync(file, source);
    results.push({ file: relative, status: "restored", sha256: restoredHash });
    continue;
  }
  if (hasAllPatched && !hasAllOriginal) {
    if (beforeHash !== patchedHashes[relative]) {
      throw new Error(`${relative} already-patched hash mismatch: ${beforeHash}`);
    }
    results.push({ file: relative, status: "already-patched", sha256: beforeHash });
    continue;
  }
  if (!hasAllOriginal || hasAllPatched) throw new Error(`${relative} does not match the expected original or patched state`);
  if (beforeHash !== expectedOriginalHash) throw new Error(`${relative} upstream hash mismatch: ${beforeHash}`);
  for (const { before, after } of transforms) source = source.replace(before, after);
  const patchedHash = sha256(source);
  if (patchedHash !== patchedHashes[relative]) {
    throw new Error(`${relative} patched output hash mismatch: ${patchedHash}`);
  }
  fs.writeFileSync(file, source);
  results.push({ file: relative, status: "patched", sha256: patchedHash });
}

console.log(JSON.stringify({
  patchId: PATCH_ID,
  fiberVersion: packageJson.version,
  packageRoot,
  mode: checkOnly ? "check" : reverse ? "rollback" : "apply",
  results,
}, null, 2));
