import * as THREE from "three";

const target = document.getElementById("target");
let active = null;
const state = { mounts: 0, unmounts: 0, errors: [] };
const sharedMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xd97706,
  metalness: 0.72,
  roughness: 0.3,
  clearcoat: 0.2,
  clearcoatRoughness: 0.4,
});

function sharedMaterialDisposeListenerCount() {
  return sharedMaterial._listeners?.dispose?.length ?? 0;
}

function createRenderer() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  target.appendChild(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(512, 512, false);
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  return { canvas, renderer };
}

function createPbrScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfaf8f4);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.1, 7.2);
  camera.lookAt(0, 0, 0);
  const geometry = new THREE.TorusKnotGeometry(1.35, 0.42, 128, 24);
  const material = sharedMaterial;
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.set(0.34, 0.58, 0.08);
  scene.add(mesh);
  scene.add(new THREE.HemisphereLight(0xfff7e6, 0x2c2a26, 2.1));
  const key = new THREE.DirectionalLight(0xffe0a8, 4.2);
  key.position.set(4, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xb8d7ff, 2.4);
  rim.position.set(-4, 1, 3);
  scene.add(rim);
  return { scene, camera, geometry, material, mesh };
}

function pixelSignature(renderer) {
  const gl = renderer.getContext();
  const pixels = new Uint8Array(512 * 512 * 4);
  gl.readPixels(0, 0, 512, 512, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  let hash = 2166136261;
  let nonBackground = 0;
  for (let index = 0; index < pixels.length; index += 4) {
    const r = pixels[index];
    const g = pixels[index + 1];
    const b = pixels[index + 2];
    hash ^= r; hash = Math.imul(hash, 16777619);
    hash ^= g; hash = Math.imul(hash, 16777619);
    hash ^= b; hash = Math.imul(hash, 16777619);
    if (Math.abs(r - 250) + Math.abs(g - 248) + Math.abs(b - 244) > 20) nonBackground += 1;
  }
  return { hash: (hash >>> 0).toString(16).padStart(8, "0"), nonBackground };
}

function renderProof(renderer, pbr) {
  renderer.render(pbr.scene, pbr.camera);
  return {
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    signature: pixelSignature(renderer),
    material: {
      type: pbr.material.type,
      isMeshPhysicalMaterial: pbr.material.isMeshPhysicalMaterial,
      metalness: pbr.material.metalness,
      roughness: pbr.material.roughness,
      clearcoat: pbr.material.clearcoat,
    },
  };
}

function disposeScene(pbr) {
  pbr.geometry.dispose();
  pbr.scene.clear();
}

function mount() {
  if (active) throw new Error("A renderer is already mounted");
  const rendererState = createRenderer();
  const pbr = createPbrScene();
  const proof = renderProof(rendererState.renderer, pbr);
  if (proof.calls < 1 || proof.signature.nonBackground < 1000) throw new Error("PBR render proof failed");
  active = { ...rendererState, pbr, proof };
  state.mounts += 1;
  return proof;
}

function unmount() {
  if (!active) return;
  disposeScene(active.pbr);
  active.renderer.dispose();
  state.lastUnmountMaterialDisposeListeners = sharedMaterialDisposeListenerCount();
  active.canvas.remove();
  active = null;
  state.unmounts += 1;
}

function twoRendererIsolation() {
  if (active) throw new Error("Single-renderer test is still mounted");
  const pbr = createPbrScene();
  const first = createRenderer();
  const second = createRenderer();
  const firstBefore = renderProof(first.renderer, pbr);
  const secondBefore = renderProof(second.renderer, pbr);
  const listenersBeforeDispose = sharedMaterialDisposeListenerCount();
  first.renderer.dispose();
  const listenersAfterFirstDispose = sharedMaterialDisposeListenerCount();
  first.canvas.remove();
  const secondAfter = renderProof(second.renderer, pbr);
  const secondContextLost = second.renderer.getContext().isContextLost();
  const unchanged = secondBefore.signature.hash === secondAfter.signature.hash
    && secondBefore.signature.nonBackground === secondAfter.signature.nonBackground;
  disposeScene(pbr);
  second.renderer.dispose();
  const listenersAfterSecondDispose = sharedMaterialDisposeListenerCount();
  second.canvas.remove();
  if (!unchanged || secondContextLost || secondAfter.calls < 1) {
    throw new Error(`Renderer isolation failed: ${JSON.stringify({ secondBefore, secondAfter, secondContextLost })}`);
  }
  return {
    firstBefore,
    secondBefore,
    secondAfter,
    secondContextLost,
    unchanged,
    listenersBeforeDispose,
    listenersAfterFirstDispose,
    listenersAfterSecondDispose,
  };
}

function snapshot() {
  return {
    ...state,
    active: Boolean(active),
    canvases: document.querySelectorAll("canvas").length,
    sharedMaterialDisposeListeners: sharedMaterialDisposeListenerCount(),
  };
}

window.__DFG_PATCH_QA__ = { mount, unmount, twoRendererIsolation, snapshot };
