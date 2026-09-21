import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_URL = "/assets/home/cancer-knowledge-machine/cancer-machine.glb";
const target = document.getElementById("target");
const state = {
  mode: null,
  phase: "idle",
  rendered: false,
  renderProof: null,
  mountCount: 0,
  unmountCount: 0,
  contextsCreated: 0,
  contextsDisposed: 0,
  contextsLost: 0,
  errors: [],
};
let reactRoot = null;
let loadedGltf = null;
let plainCleanup = null;

function publish() {
  document.body.dataset.phase = state.phase;
  document.body.dataset.mode = state.mode || "none";
}

function snapshot() {
  return {
    ...state,
    canvases: document.querySelectorAll("canvas").length,
    targetChildren: target.childElementCount,
  };
}

async function ensureGltf() {
  if (!loadedGltf) loadedGltf = await new GLTFLoader().loadAsync(MODEL_URL);
  return loadedGltf;
}

function cloneGltf({ basicMaterial }) {
  const clone = loadedGltf.scene.clone(true);
  const ownedMaterials = [];
  clone.traverse((object) => {
    if (!object.isMesh) return;
    if (basicMaterial) {
      const material = new THREE.MeshBasicMaterial({ color: 0xd97706 });
      object.material = material;
      ownedMaterials.push(material);
    }
    object.frustumCulled = false;
  });
  return { object: clone, ownedMaterials };
}

function RenderProbe({ mode }) {
  const { gl } = useThree();
  const confirmed = useRef(false);
  useEffect(() => {
    state.contextsCreated += 1;
    const canvas = gl.domElement;
    const onLost = () => { state.contextsLost += 1; };
    canvas.addEventListener("webglcontextlost", onLost);
    return () => {
      state.contextsDisposed += 1;
      canvas.removeEventListener("webglcontextlost", onLost);
    };
  }, [gl]);
  useFrame(() => {
    if (confirmed.current || gl.info.render.calls < 1) return;
    confirmed.current = true;
    state.rendered = true;
    state.phase = "rendered";
    state.renderProof = {
      mode,
      calls: gl.info.render.calls,
      triangles: gl.info.render.triangles,
      lines: gl.info.render.lines,
      points: gl.info.render.points,
      canvasWidth: gl.domElement.width,
      canvasHeight: gl.domElement.height,
    };
    publish();
  });
  return null;
}

function GltfScene({ basicMaterial, releaseResources }) {
  const instance = useRef(null);
  const { gl } = useThree();
  if (!instance.current) instance.current = cloneGltf({ basicMaterial });
  useEffect(() => () => {
    for (const material of instance.current.ownedMaterials) material.dispose();
    if (releaseResources) {
      const geometries = new Set();
      instance.current.object.traverse((object) => { if (object.isMesh && object.geometry) geometries.add(object.geometry); });
      for (const geometry of geometries) geometry.dispose();
      gl.dispose();
    }
  }, []);
  return React.createElement("primitive", { object: instance.current.object, scale: 0.45, dispose: null });
}

function R3fTarget({ mode }) {
  const content = mode === "r3f-box"
    ? React.createElement("mesh", null,
        React.createElement("boxGeometry", { args: [2, 2, 2] }),
        React.createElement("meshBasicMaterial", { color: "#d97706" }))
    : React.createElement(GltfScene, {
        basicMaterial: mode === "r3f-glb-basic" || mode === "r3f-glb-basic-release",
        releaseResources: mode === "r3f-glb-basic-release",
      });
  return React.createElement(Canvas, {
    frameloop: "always", camera: { position: [0, 0, 12], fov: 45 }, gl: { antialias: false },
  }, content, React.createElement(RenderProbe, { mode }));
}

function mountPlain(mode) {
  const canvas = document.createElement("canvas");
  canvas.width = 720;
  canvas.height = 520;
  target.appendChild(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  renderer.setSize(720, 520, false);
  state.contextsCreated += 1;
  const onLost = () => { state.contextsLost += 1; };
  canvas.addEventListener("webglcontextlost", onLost);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 720 / 520, 0.1, 100);
  camera.position.z = 12;
  let rootObject;
  const ownedGeometries = [];
  const ownedMaterials = [];
  if (mode === "three-box") {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xd97706 });
    rootObject = new THREE.Mesh(geometry, material);
    ownedGeometries.push(geometry);
    ownedMaterials.push(material);
  } else {
    const basicMaterial = mode === "three-glb-basic" || mode === "three-glb-basic-dispose-geometry";
    const clone = cloneGltf({ basicMaterial });
    rootObject = clone.object;
    rootObject.scale.setScalar(0.45);
    ownedMaterials.push(...clone.ownedMaterials);
  }
  scene.add(rootObject);
  renderer.render(scene, camera);
  state.rendered = renderer.info.render.calls > 0;
  state.phase = state.rendered ? "rendered" : "render-failed";
  state.renderProof = {
    mode,
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    lines: renderer.info.render.lines,
    points: renderer.info.render.points,
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
  };
  publish();
  plainCleanup = () => {
    scene.remove(rootObject);
    if (mode === "three-glb-basic-dispose-geometry") {
      const geometries = new Set();
      rootObject.traverse((object) => { if (object.isMesh && object.geometry) geometries.add(object.geometry); });
      for (const geometry of geometries) geometry.dispose();
    }
    for (const geometry of ownedGeometries) geometry.dispose();
    for (const material of ownedMaterials) material.dispose();
    renderer.setAnimationLoop(null);
    renderer.dispose();
    renderer.forceContextLoss();
    state.contextsDisposed += 1;
    canvas.removeEventListener("webglcontextlost", onLost);
    canvas.remove();
  };
}

async function mount(mode) {
  if (state.phase !== "idle") throw new Error(`Cannot mount during ${state.phase}`);
  if (!new Set(["r3f-box", "r3f-glb", "r3f-glb-basic", "r3f-glb-basic-release", "three-box", "three-glb", "three-glb-basic", "three-glb-basic-dispose-geometry"]).has(mode)) {
    throw new Error(`Unknown mode: ${mode}`);
  }
  state.mode = mode;
  state.phase = "mounting";
  state.rendered = false;
  state.renderProof = null;
  state.mountCount += 1;
  publish();
  try {
    if (mode.includes("glb")) await ensureGltf();
    if (mode.startsWith("r3f-")) {
      reactRoot = createRoot(target);
      reactRoot.render(React.createElement(R3fTarget, { mode }));
    } else {
      mountPlain(mode);
    }
  } catch (error) {
    state.errors.push(String(error?.stack || error));
    state.phase = "error";
    publish();
    throw error;
  }
}

async function unmount() {
  if (!state.mode) return;
  state.phase = "unmounting";
  publish();
  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = null;
  }
  if (plainCleanup) {
    plainCleanup();
    plainCleanup = null;
  }
  target.replaceChildren();
  state.unmountCount += 1;
  state.mode = null;
  state.phase = "idle";
  publish();
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

window.__B7_MINIMAL_REPRO__ = { mount, unmount, snapshot };
publish();
