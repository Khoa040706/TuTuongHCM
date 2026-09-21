"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import CancerKnowledgeMachine from "./CancerKnowledgeMachine";
import SceneLighting from "./SceneLighting";
import StoryDataBlocks from "./StoryDataBlocks";
import { HOME_MODEL_MANIFEST_URL, HOME_MODEL_URL } from "./home-config";

let diagnosticCanvasSequence = 0;

function updateRegistry(type, instanceId) {
  if (!window.__STUDYMASTER_B7_QA_ENABLED__) return;
  const previous = window.__STUDYMASTER_HOME_LIFECYCLE__ || {
    activeCanvasIds: [], mountEvents: 0, unmountEvents: 0, events: [],
  };
  const active = new Set(previous.activeCanvasIds || []);
  if (type === "mount") active.add(instanceId);
  else active.delete(instanceId);
  window.__STUDYMASTER_HOME_LIFECYCLE__ = {
    activeCanvasIds: [...active],
    activeCanvasCount: active.size,
    mountEvents: previous.mountEvents + (type === "mount" ? 1 : 0),
    unmountEvents: previous.unmountEvents + (type === "unmount" ? 1 : 0),
    events: [...(previous.events || []), { type, instanceId, at: performance.now() }].slice(-40),
  };
}

function ReadySignal({ onReady }) {
  useEffect(() => onReady?.(), [onReady]);
  return null;
}

function DiagnosticModel({ onReady }) {
  const gltf = useLoader(GLTFLoader, HOME_MODEL_URL);
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  useEffect(() => onReady?.(), [onReady]);
  return <primitive object={scene} dispose={null} />;
}

function DiagnosticModelLoader({ onReady }) {
  useLoader(GLTFLoader, HOME_MODEL_URL);
  useEffect(() => onReady?.(), [onReady]);
  return null;
}

function DiagnosticScene({ mode, scrollRootRef, onReady }) {
  const withModel = ![
    "canvas-minimal",
    "canvas-model-loader-only",
  ].includes(mode);
  const withLighting = [
    "canvas-model-lighting",
    "canvas-model-lighting-data",
    "canvas-production-machine",
  ].includes(mode);
  const withData = mode === "canvas-model-lighting-data";

  if (mode === "canvas-production-machine") {
    return (
      <>
        <SceneLighting />
        <CancerKnowledgeMachine
          modelUrl={HOME_MODEL_URL}
          manifestUrl={HOME_MODEL_MANIFEST_URL}
          scrollRootRef={scrollRootRef}
          reducedMotion={false}
          onReady={onReady}
        />
      </>
    );
  }

  return (
    <>
      {withLighting ? <SceneLighting /> : <ambientLight intensity={1} />}
      {mode === "canvas-model-loader-only" ? <DiagnosticModelLoader onReady={onReady} /> : null}
      {withModel ? <DiagnosticModel onReady={onReady} /> : null}
      {mode === "canvas-minimal" ? <ReadySignal onReady={onReady} /> : null}
      {withData ? <StoryDataBlocks /> : null}
    </>
  );
}

export default function B7DiagnosticCanvas({ mode = "canvas-minimal", scrollRootRef, onReady }) {
  const instanceIdRef = useRef(null);

  useEffect(() => {
    diagnosticCanvasSequence += 1;
    instanceIdRef.current = `b7-minimal-canvas-${diagnosticCanvasSequence}`;
    const instanceId = instanceIdRef.current;
    updateRegistry("mount", instanceId);
    return () => updateRegistry("unmount", instanceId);
  }, []);

  return (
    <Canvas className="home-webgl-canvas" frameloop="demand" camera={{ position: [0, 0, 20] }}>
      <Suspense fallback={null}>
        <DiagnosticScene
          mode={mode}
          scrollRootRef={scrollRootRef}
          onReady={onReady}
        />
      </Suspense>
    </Canvas>
  );
}
