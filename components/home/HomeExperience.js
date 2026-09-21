"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeContent from "./HomeContent";
import HomeFallback from "./HomeFallback";
import {
  HOME_MODEL_ERROR_URL,
  HOME_MODEL_MANIFEST_URL,
  HOME_MODEL_URL,
} from "./home-config";

const HomeCanvas = dynamic(() => import("./HomeCanvas"), {
  ssr: false,
  loading: () => null,
});

const B7DiagnosticCanvas = dynamic(() => import("./B7DiagnosticCanvas"), {
  ssr: false,
  loading: () => null,
});

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const HOME_SCENE_IDS = [
  "study-story-s01",
  "home-s02",
  "home-s03",
  "home-s04",
  "home-s05",
  "home-s06",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function detectWebGL() {
  try {
    const probe = document.createElement("canvas");
    const context = probe.getContext("webgl2") || probe.getContext("webgl");
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(context);
  } catch {
    return false;
  }
}

function emptyQaSnapshot(reducedMotion) {
  return {
    controller: {
      active: false,
      id: null,
      start: null,
      end: null,
      progress: 0,
    },
    progress: { master: 0, claws: 0, rings: 0, body: 0, root: 0 },
    poseTiming: {
      closedFrame: 1,
      openFrame: 21,
      closedTime: null,
      openTime: null,
      derivedNormalizedTime: null,
      validatedClipCount: 0,
      validatedPoseCount: 0,
      source: null,
    },
    transforms: {},
    framing: {
      viewportWidth: 0,
      viewportHeight: 0,
      ndcBounds: null,
      clearance: null,
      inside: false,
    },
    reducedMotion,
  };
}

function B7AuthSpaMinimal({ onOpenAuth }) {
  return (
    <main
      id="home-story"
      className="home-experience home-b7-diagnostic"
      data-model-status="ready"
      data-b7-qa-mode="auth-spa-minimal"
    >
      <button type="button" data-testid="home-login" onClick={onOpenAuth}>Đăng nhập</button>
    </main>
  );
}

function B7CanvasMinimal({ onOpenAuth, qaMode }) {
  const storyRootRef = useRef(null);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);
  return (
    <main
      ref={storyRootRef}
      id="home-story"
      className="home-experience home-b7-diagnostic"
      data-model-status={ready ? "ready" : "loading"}
      data-b7-qa-mode={qaMode}
    >
      <div className="home-stage" aria-hidden="true">
        <B7DiagnosticCanvas
          mode={qaMode}
          scrollRootRef={storyRootRef}
          onReady={handleReady}
        />
      </div>
      <button type="button" data-testid="home-login" onClick={onOpenAuth}>Đăng nhập</button>
    </main>
  );
}

function B7DomGsapController({ storyRootRef }) {
  useEffect(() => {
    const root = storyRootRef.current;
    if (!root) return undefined;
    const context = gsap.context(() => {
      const targets = gsap.utils.toArray(
        ".home-copy > *, .home-activity-node, .home-activity-edge, .home-tool-preview",
        root,
      );
      const timeline = gsap.timeline({ defaults: { ease: "none" } })
        .fromTo(targets, { autoAlpha: 0.25, y: 8 }, { autoAlpha: 1, y: 0, stagger: 0.001 });
      ScrollTrigger.create({
        id: "studymaster-b7-dom-only",
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.45,
        animation: timeline,
      });
    }, root);
    return () => context.revert();
  }, [storyRootRef]);
  return null;
}

function FullHomeExperience({
  authOpen,
  onOpenAdmin,
  onOpenAuth,
  onOpenBubbleSort,
  onOpenDiagram,
  onOpenSubjects,
  qaMode = "full",
  viewerRole = "guest",
}) {
  const storyRootRef = useRef(null);
  const diagnosticsFactoryRef = useRef(null);
  const lastAuthTriggerRef = useRef(null);
  const authWasOpenRef = useRef(authOpen);
  const reducedMotion = useReducedMotion();
  const [webglSupported, setWebglSupported] = useState(null);
  const [modelStatus, setModelStatus] = useState("loading");
  const [forceModelError, setForceModelError] = useState(false);
  const [activeScene, setActiveScene] = useState(HOME_SCENE_IDS[0]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setWebglSupported(detectWebGL());
      setForceModelError(new URLSearchParams(window.location.search).get("modelError") === "1");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (authWasOpenRef.current && !authOpen) {
      lastAuthTriggerRef.current?.focus();
    }
    authWasOpenRef.current = authOpen;
  }, [authOpen]);

  useEffect(() => () => {
    lastAuthTriggerRef.current = null;
    diagnosticsFactoryRef.current = null;
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewportFocus = window.innerHeight * 0.46;
      const nextScene = HOME_SCENE_IDS
        .map((id) => ({ id, element: document.getElementById(id) }))
        .filter(({ element }) => element)
        .map(({ id, element }) => {
          const rect = element.getBoundingClientRect();
          const containsFocus = rect.top <= viewportFocus && rect.bottom >= viewportFocus;
          return { id, distance: containsFocus ? 0 : Math.min(Math.abs(rect.top - viewportFocus), Math.abs(rect.bottom - viewportFocus)) };
        })
        .sort((left, right) => left.distance - right.distance)[0]?.id || HOME_SCENE_IDS[0];
      setActiveScene((current) => current === nextScene ? current : nextScene);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    let timer = 0;
    const restoreSceneFromHash = () => {
      const sceneId = window.location.hash.slice(1);
      if (!HOME_SCENE_IDS.includes(sceneId)) return;
      const target = document.getElementById(sceneId);
      if (!target) return;
      target.scrollIntoView({ behavior: "auto", block: "start" });
    };
    const scheduleRestore = () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        restoreSceneFromHash();
      });
      timer = window.setTimeout(restoreSceneFromHash, 250);
    };

    scheduleRestore();
    window.addEventListener("hashchange", scheduleRestore);
    window.addEventListener("popstate", scheduleRestore);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scheduleRestore);
      window.removeEventListener("popstate", scheduleRestore);
    };
  }, [modelStatus]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production" && !window.__STUDYMASTER_B7_QA_ENABLED__) {
      return undefined;
    }
    const homeRoot = storyRootRef.current;
    const api = {
      snapshot: () => ({
        ...(diagnosticsFactoryRef.current?.() ?? emptyQaSnapshot(reducedMotion)),
        story: {
          activeScene,
          sceneIds: HOME_SCENE_IDS,
          viewerRole,
        },
      }),
    };
    window.__STUDYMASTER_B4_QA__ = api;
    window.__STUDYMASTER_B6_QA__ = api;
    if (homeRoot) homeRoot.__STUDYMASTER_B4_QA__ = api;
    return () => {
      if (window.__STUDYMASTER_B4_QA__ === api) {
        delete window.__STUDYMASTER_B4_QA__;
      }
      if (window.__STUDYMASTER_B6_QA__ === api) {
        delete window.__STUDYMASTER_B6_QA__;
      }
      if (homeRoot?.__STUDYMASTER_B4_QA__ === api) {
        delete homeRoot.__STUDYMASTER_B4_QA__;
      }
    };
  }, [activeScene, reducedMotion, viewerRole]);

  const openAuth = useCallback((event) => {
    lastAuthTriggerRef.current = event.currentTarget;
    onOpenAuth();
  }, [onOpenAuth]);

  const explore = useCallback(() => {
    document.getElementById("home-s02")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [reducedMotion]);

  const openBubbleSort = useCallback((event) => {
    lastAuthTriggerRef.current = event.currentTarget;
    onOpenBubbleSort?.();
  }, [onOpenBubbleSort]);

  const openDiagram = useCallback((event) => {
    lastAuthTriggerRef.current = event.currentTarget;
    onOpenDiagram?.();
  }, [onOpenDiagram]);

  const jumpToScene = useCallback((sceneId) => {
    if (!HOME_SCENE_IDS.includes(sceneId)) return;
    const target = document.getElementById(sceneId);
    if (!target) return;
    window.history.replaceState(null, "", `#${sceneId}`);
    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [reducedMotion]);

  const primaryAction = useCallback((event) => {
    if (viewerRole === "admin") {
      onOpenAdmin?.();
      return;
    }
    if (viewerRole === "learner") {
      onOpenSubjects?.();
      return;
    }
    openAuth(event);
  }, [onOpenAdmin, onOpenSubjects, openAuth, viewerRole]);

  const handleReady = useCallback(() => setModelStatus("ready"), []);
  const handleError = useCallback(() => setModelStatus("error"), []);
  const handleDiagnostics = useCallback((factory) => {
    diagnosticsFactoryRef.current = factory;
  }, []);
  const handleLifecycle = useCallback((event) => {
    if (process.env.NODE_ENV !== "production" || window.__STUDYMASTER_B7_QA_ENABLED__) {
      const type = event?.type === "unmount" ? "unmount" : "mount";
      const instanceId = event?.instanceId || "unknown";
      const previous = window.__STUDYMASTER_HOME_LIFECYCLE__ || {
        activeCanvasIds: [],
        mountEvents: 0,
        unmountEvents: 0,
        events: [],
      };
      const activeCanvasIds = new Set(previous.activeCanvasIds || []);
      if (type === "mount") activeCanvasIds.add(instanceId);
      else activeCanvasIds.delete(instanceId);
      const registry = {
        activeCanvasIds: [...activeCanvasIds],
        activeCanvasCount: activeCanvasIds.size,
        mountEvents: previous.mountEvents + (type === "mount" ? 1 : 0),
        unmountEvents: previous.unmountEvents + (type === "unmount" ? 1 : 0),
        events: [...(previous.events || []), { type, instanceId, at: performance.now() }].slice(-40),
      };
      window.__STUDYMASTER_HOME_LIFECYCLE__ = registry;
      window.__studyMasterHomeCanvasMounts = registry.activeCanvasCount;
      window.__studyMasterHomeLifecycleEvents = registry.events;
    }
  }, []);

  const domGsapOnly = qaMode === "dom-gsap-no-canvas";
  const showCanvas = !domGsapOnly && webglSupported === true;
  const fallbackStatus = webglSupported === false ? "webgl-error" : modelStatus;
  const canvasState = reducedMotion
    ? "reduced"
    : fallbackStatus === "webgl-error" ? "error" : fallbackStatus;

  return (
    <main
      id="home-story"
      ref={storyRootRef}
      className={`home-experience${reducedMotion ? " home-experience--reduced" : ""}`}
      data-motion={reducedMotion ? "reduced" : "full"}
      data-model-status={domGsapOnly ? "ready" : fallbackStatus}
      data-active-scene={activeScene}
      data-b7-qa-mode={qaMode}
      data-viewer-role={viewerRole}
    >
      {domGsapOnly ? <B7DomGsapController storyRootRef={storyRootRef} /> : null}
      <output
        className="sr-only"
        role="status"
        aria-live="polite"
        data-testid="home-canvas-state"
        data-state={canvasState}
      >
        {canvasState}
      </output>
      <div className="home-stage" aria-hidden="true" data-testid="home-stage">
        {showCanvas ? (
          <HomeCanvas
            modelUrl={forceModelError ? HOME_MODEL_ERROR_URL : HOME_MODEL_URL}
            manifestUrl={HOME_MODEL_MANIFEST_URL}
            scrollRootRef={storyRootRef}
            reducedMotion={reducedMotion}
            onReady={handleReady}
            onDiagnostics={handleDiagnostics}
            onError={handleError}
            onLifecycle={handleLifecycle}
          />
        ) : null}
        {!domGsapOnly && (!showCanvas || modelStatus !== "ready") && <HomeFallback status={fallbackStatus} />}
      </div>

      <HomeContent
        activeScene={activeScene}
        onJumpScene={jumpToScene}
        onOpenAuth={openAuth}
        onExplore={explore}
        onOpenBubbleSort={openBubbleSort}
        onOpenDiagram={openDiagram}
        onPrimaryAction={primaryAction}
        reducedMotion={reducedMotion}
        viewerRole={viewerRole}
      />

      <footer className="home-footer">
        <span>© 2026 StudyMaster</span>
        <span>Thấu hiểu · Quan sát · Thực hành</span>
      </footer>
    </main>
  );
}

export default function HomeExperience(props) {
  if (props.qaMode === "auth-spa-minimal") {
    return <B7AuthSpaMinimal onOpenAuth={props.onOpenAuth} />;
  }
  if (props.qaMode.startsWith("canvas-")) {
    return <B7CanvasMinimal onOpenAuth={props.onOpenAuth} qaMode={props.qaMode} />;
  }
  return <FullHomeExperience {...props} />;
}
