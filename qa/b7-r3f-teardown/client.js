import React from "react";
import { createRoot as createReactRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const target = document.getElementById("target");
const sharedMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xd97706,
  metalness: 0.72,
  roughness: 0.3,
  clearcoat: 0.2,
  clearcoatRoughness: 0.4,
});
const instances = new Map();
const state = { events: [], lateRendererDisposals: 0 };
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function listenerCount() {
  return sharedMaterial._listeners?.dispose?.length ?? 0;
}

function Scene({ id }) {
  const mesh = React.useRef();
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y = 0.58;
  });
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("hemisphereLight", { intensity: 2.1, color: 0xfff7e6, groundColor: 0x2c2a26 }),
    React.createElement("directionalLight", { intensity: 4.2, color: 0xffe0a8, position: [4, 5, 6] }),
    React.createElement(
      "mesh",
      {
        ref: mesh,
        material: sharedMaterial,
        onAfterRender: () => {
          const instance = instances.get(id);
          if (instance) instance.frames += 1;
        },
      },
      React.createElement("torusKnotGeometry", { args: [1.35, 0.42, 96, 20] }),
    ),
  );
}

function pixelSignature(renderer) {
  const gl = renderer.getContext();
  const width = gl.drawingBufferWidth;
  const height = gl.drawingBufferHeight;
  const pixels = new Uint8Array(width * height * 4);
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  let hash = 2166136261;
  let nonTransparent = 0;
  for (let index = 0; index < pixels.length; index += 4) {
    hash ^= pixels[index]; hash = Math.imul(hash, 16777619);
    hash ^= pixels[index + 1]; hash = Math.imul(hash, 16777619);
    hash ^= pixels[index + 2]; hash = Math.imul(hash, 16777619);
    if (pixels[index + 3] > 0) nonTransparent += 1;
  }
  return { hash: (hash >>> 0).toString(16).padStart(8, "0"), nonTransparent };
}

async function waitFor(check, timeout = 5000) {
  const started = performance.now();
  while (performance.now() - started < timeout) {
    const value = check();
    if (value) return value;
    await delay(20);
  }
  throw new Error(`Timeout after ${timeout}ms`);
}

async function mount(id, { asyncRendererMs = 0 } = {}) {
  const host = document.createElement("section");
  host.dataset.qaInstance = id;
  host.style.cssText = "width:320px;height:240px";
  target.appendChild(host);
  const record = {
    id,
    host,
    root: createReactRoot(host),
    renderer: null,
    frames: 0,
    created: false,
    rendererFactoryStarted: false,
    rendererFactoryResolved: false,
  };
  instances.set(id, record);
  const gl = asyncRendererMs
    ? async (props) => {
        record.rendererFactoryStarted = true;
        await delay(asyncRendererMs);
        const renderer = new THREE.WebGLRenderer({ ...props, preserveDrawingBuffer: true });
        record.rendererFactoryResolved = true;
        const originalDispose = renderer.dispose.bind(renderer);
        renderer.dispose = () => { state.lateRendererDisposals += 1; originalDispose(); };
        return renderer;
      }
    : { antialias: true, alpha: true, preserveDrawingBuffer: true };
  record.root.render(React.createElement(
    Canvas,
    {
      gl,
      frameloop: "always",
      camera: { fov: 35, position: [0, 0.1, 7.2] },
      onCreated: ({ gl: renderer }) => {
        record.renderer = renderer;
        record.created = true;
        renderer.domElement.dataset.qaRenderer = id;
        renderer.setClearColor(0xfaf8f4, 1);
        state.events.push({ type: "created", id, at: performance.now() });
      },
    },
    React.createElement(Scene, { id }),
  ));
  return record;
}

async function ready(id) {
  const record = await waitFor(() => {
    const value = instances.get(id);
    return value?.created && value.frames > 1 ? value : null;
  });
  return { id, frames: record.frames, signature: pixelSignature(record.renderer), listeners: listenerCount() };
}

async function unmount(id) {
  const record = instances.get(id);
  if (!record) return;
  record.root.unmount();
  record.host.remove();
  instances.delete(id);
  state.events.push({ type: "unmounted", id, at: performance.now() });
  await delay(80);
}

async function runAll() {
  const baselineListeners = listenerCount();
  const normal = await mount("normal");
  const normalBefore = await ready(normal.id);
  await unmount(normal.id);
  const normalAfter = { listeners: listenerCount(), canvases: document.querySelectorAll("canvas").length };

  const fast = await mount("fast", { asyncRendererMs: 180 });
  await waitFor(() => fast.rendererFactoryStarted);
  await unmount(fast.id);
  await delay(260);
  const fastAfter = {
    created: fast.created,
    rendererFactoryStarted: fast.rendererFactoryStarted,
    rendererFactoryResolved: fast.rendererFactoryResolved,
    lateRendererDisposals: state.lateRendererDisposals,
    listeners: listenerCount(),
    canvases: document.querySelectorAll("canvas").length,
  };

  const previous = await mount("previous");
  const previousBefore = await ready(previous.id);
  const previousUnmount = unmount(previous.id);
  const replacement = await mount("replacement");
  const replacementBefore = await ready(replacement.id);
  await previousUnmount;
  await delay(100);
  const replacementAfterPrevious = {
    frames: replacement.frames,
    signature: pixelSignature(replacement.renderer),
    contextLost: replacement.renderer.getContext().isContextLost(),
    listeners: listenerCount(),
  };
  await unmount(replacement.id);

  const first = await mount("first");
  const firstBefore = await ready(first.id);
  const second = await mount("second");
  const secondBefore = await ready(second.id);
  const listenersWithTwo = listenerCount();
  await unmount(first.id);
  const secondAfterFirst = {
    frames: second.frames,
    signature: pixelSignature(second.renderer),
    contextLost: second.renderer.getContext().isContextLost(),
    listeners: listenerCount(),
  };
  await delay(120);
  const listenersAfterOldCouldReregister = listenerCount();
  await unmount(second.id);
  const listenersAfterTwo = listenerCount();

  const result = {
    baselineListeners,
    normal: { before: normalBefore, after: normalAfter },
    fastUnmount: fastAfter,
    immediateRemount: { previousBefore, replacementBefore, replacementAfterPrevious },
    twoRenderers: { firstBefore, secondBefore, listenersWithTwo, secondAfterFirst, listenersAfterOldCouldReregister, listenersAfterTwo },
    events: state.events,
  };
  const failures = [];
  if (normalAfter.listeners !== baselineListeners || normalAfter.canvases !== 0) failures.push("normal teardown");
  if (fastAfter.created || fastAfter.lateRendererDisposals !== 1 || fastAfter.listeners !== baselineListeners) failures.push("fast unmount");
  if (replacementAfterPrevious.contextLost || replacementAfterPrevious.signature.hash !== replacementBefore.signature.hash) failures.push("immediate remount");
  if (listenersWithTwo !== baselineListeners + 2) failures.push("two renderer registration");
  if (secondAfterFirst.listeners !== baselineListeners + 1 || secondAfterFirst.contextLost) failures.push("renderer isolation");
  if (listenersAfterOldCouldReregister !== baselineListeners + 1 || listenersAfterTwo !== baselineListeners) failures.push("late registration/second teardown");
  result.pass = failures.length === 0;
  result.failures = failures;
  return result;
}

window.__R3F_TEARDOWN_QA__ = { runAll, listenerCount };
