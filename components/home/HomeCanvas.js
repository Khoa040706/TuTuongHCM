"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CancerKnowledgeMachine from "./CancerKnowledgeMachine";
import SceneLighting from "./SceneLighting";

const disabledPointerEvents = () => ({
  priority: 0,
  enabled: false,
  connected: undefined,
  handlers: {},
  compute: () => {},
  update: () => {},
  connect: () => {},
  disconnect: () => {},
});

function recordRendererLifecycle(event) {
  if (typeof window === "undefined" || !window.__STUDYMASTER_B7_QA_ENABLED__) return;
  window.__STUDYMASTER_RENDERER_LIFECYCLE__ = [
    ...(window.__STUDYMASTER_RENDERER_LIFECYCLE__ || []),
    { ...event, at: performance.now() },
  ].slice(-80);
}

class SceneErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    this.props.onError?.(error);
  }

  render() {
    if (this.state.error) return null;
    return this.props.children;
  }
}

export default function HomeCanvas({
  modelUrl,
  manifestUrl,
  scrollRootRef,
  reducedMotion,
  onReady,
  onDiagnostics,
  onError,
  onLifecycle,
}) {
  const reactInstanceId = React.useId();
  const instanceIdRef = React.useRef(`home-canvas-${reactInstanceId.replace(/:/g, "")}`);
  const rendererOwnerRef = React.useRef(null);
  const onLifecycleRef = React.useRef(onLifecycle);

  useEffect(() => {
    onLifecycleRef.current = onLifecycle;
  }, [onLifecycle]);

  useEffect(() => {
    const instanceId = instanceIdRef.current;
    onLifecycleRef.current?.({ type: "mount", instanceId });
    return () => {
      onLifecycleRef.current?.({ type: "unmount", instanceId });
      const rendererOwner = rendererOwnerRef.current;
      rendererOwnerRef.current = null;
      if (!rendererOwner) return;
      const inspectMaterialListeners =
        window.__STUDYMASTER_RENDERER_INSPECTORS__?.get(rendererOwner.rendererId);
      recordRendererLifecycle({
        type: "owner-delegated-to-r3f-teardown",
        rendererId: rendererOwner.rendererId,
        materials: inspectMaterialListeners?.() ?? null,
      });
      rendererOwner.gl.domElement.removeEventListener(
        "webglcontextlost",
        rendererOwner.handleContextLost,
      );
      window.__STUDYMASTER_RENDERER_INSPECTORS__?.delete(rendererOwner.rendererId);
    };
  }, []);

  return (
    <SceneErrorBoundary onError={onError}>
      <Canvas
        className="home-webgl-canvas"
        camera={{ fov: 34, near: 0.1, far: 100, position: [0, 0, 20] }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        events={disabledPointerEvents}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={(state) => {
          const { camera, gl } = state;
          const rendererId = instanceIdRef.current;
          gl.domElement.dataset.studymasterRendererId = rendererId;
          camera.lookAt(0, 0, 0);
          gl.setClearColor(0x000000, 0);
          const handleContextLost = (event) => {
            event.preventDefault();
            onError?.(new Error("WebGL context lost"));
          };
          gl.domElement.addEventListener("webglcontextlost", handleContextLost);
          rendererOwnerRef.current = { gl, handleContextLost, rendererId };
          recordRendererLifecycle({ type: "created", rendererId });
        }}
      >
        <SceneLighting />
        <Suspense fallback={null}>
          <CancerKnowledgeMachine
            modelUrl={modelUrl}
            manifestUrl={manifestUrl}
            scrollRootRef={scrollRootRef}
            reducedMotion={reducedMotion}
            onReady={onReady}
            onDiagnostics={onDiagnostics}
          />
        </Suspense>
      </Canvas>
    </SceneErrorBoundary>
  );
}
