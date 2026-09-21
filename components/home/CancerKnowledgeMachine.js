"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import StoryDataBlocks from "./StoryDataBlocks";
import {
  CAMERA_FIT_MARGIN,
  REQUIRED_MODEL_NODES,
  SCROLL_POSE_NODES,
  STORY_PHASE_WINDOWS,
  STORY_ROOT_POSES,
  STORY_SCENE_STOPS,
} from "./home-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EPSILON = 1e-5;
const QA_NODE_NAMES = ["claw_left", "ring_inner", "leg_left_01"];
const REQUIRED_POSE_NAMES = ["closed", "open", "guide_left", "guide_right", "compact"];

function updateControllerRegistry(type, instanceId, trigger = null) {
  if (typeof window === "undefined" || !window.__STUDYMASTER_B7_QA_ENABLED__) return;
  const previous = window.__STUDYMASTER_HOME_CONTROLLER_REGISTRY__ || {
    observable: true,
    activeControllers: [],
    events: [],
  };
  const activeControllers = new Map(
    (previous.activeControllers || []).map((item) => [item.instanceId, item]),
  );
  if (type === "mount") {
    activeControllers.set(instanceId, {
      instanceId,
      triggerId: trigger?.vars?.id ?? null,
    });
  } else {
    activeControllers.delete(instanceId);
  }
  window.__STUDYMASTER_HOME_CONTROLLER_REGISTRY__ = {
    observable: true,
    activeControllers: [...activeControllers.values()],
    activeCount: activeControllers.size,
    events: [
      ...(previous.events || []),
      { type, instanceId, triggerId: trigger?.vars?.id ?? null, at: performance.now() },
    ].slice(-40),
  };
}

function round(value, precision = 6) {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function materialListenerSnapshot(scene) {
  const materials = new Map();
  scene.traverse((object) => {
    if (!object.isMesh || !object.material) return;
    const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
    for (const material of objectMaterials) materials.set(material.uuid, material);
  });
  return [...materials.values()].map((material) => ({
    uuid: material.uuid,
    name: material.name,
    disposeListeners: material._listeners?.dispose?.length ?? 0,
  }));
}

function recordRendererLifecycle(event) {
  if (typeof window === "undefined" || !window.__STUDYMASTER_B7_QA_ENABLED__) return;
  window.__STUDYMASTER_RENDERER_LIFECYCLE__ = [
    ...(window.__STUDYMASTER_RENDERER_LIFECYCLE__ || []),
    { ...event, at: performance.now() },
  ].slice(-80);
}

function derivePoseTiming(clips, manifest) {
  const poseSamples = Object.fromEntries(REQUIRED_POSE_NAMES.map((name) => {
    const sample = manifest?.poseSampling?.poses?.[name];
    if (!sample || !Number.isFinite(sample.frame) || !Number.isFinite(sample.timeSeconds)) {
      throw new Error(`Manifest thiếu frame/timeSeconds hợp lệ cho pose ${name}`);
    }
    return [name, { frame: sample.frame, timeSeconds: sample.timeSeconds }];
  }));
  const poseTimes = REQUIRED_POSE_NAMES.map((name) => poseSamples[name].timeSeconds);
  if (poseTimes.some((time, index) => index > 0 && time <= poseTimes[index - 1] + EPSILON)) {
    throw new Error("Manifest pose timeSeconds phải tăng đúng thứ tự 5 pose");
  }

  const closedTime = poseSamples.closed.timeSeconds;
  const openTime = poseSamples.open.timeSeconds;
  const sourceEndTime = Math.max(...clips.map((clip) => clip.duration));
  const validatedClipCount = clips.filter((clip) => clip.tracks.every((track) => {
    const first = track.times[0];
    const last = track.times[track.times.length - 1];
    return poseTimes.every((time) => first <= time + EPSILON && last >= time - EPSILON);
  })).length;

  if (validatedClipCount !== clips.length) {
    throw new Error(
      `Clip không phủ đủ 5 timeSeconds manifest: ${validatedClipCount}/${clips.length} hợp lệ`,
    );
  }

  return Object.freeze({
    closedFrame: poseSamples.closed.frame,
    openFrame: poseSamples.open.frame,
    closedTime,
    openTime,
    derivedNormalizedTime: (openTime - closedTime) / (sourceEndTime - closedTime),
    validatedClipCount,
    validatedPoseCount: REQUIRED_POSE_NAMES.length,
    poseTimes: Object.freeze(poseSamples),
    source: "manifest-timeSeconds",
    manifestSchema: manifest.schemaVersion ?? null,
    assetRevision: manifest.asset?.revision ?? null,
  });
}

function sampleTrackAtTime(track, time) {
  if (!track || track.times.length === 0) return null;
  const first = track.times[0];
  const last = track.times[track.times.length - 1];
  return Array.from(track.createInterpolant().evaluate(THREE.MathUtils.clamp(time, first, last)));
}

function readPose(clip, time) {
  const track = (property) => clip?.tracks.find(({ name }) => name.endsWith(`.${property}`));
  return {
    position: sampleTrackAtTime(track("position"), time),
    quaternion: sampleTrackAtTime(track("quaternion"), time),
    scale: sampleTrackAtTime(track("scale"), time),
  };
}

function clipForNode(clips, nodeName) {
  const expectedName = `${nodeName}Action`;
  const matches = clips.filter((clip) => clip.name === expectedName);
  if (matches.length !== 1) {
    throw new Error(`GLB cần đúng một clip ${expectedName}; nhận ${matches.length}`);
  }
  return matches[0];
}

function vector3(values, fallback) {
  return values ? new THREE.Vector3(...values) : fallback.clone();
}

function quaternion(values, fallback) {
  return values ? new THREE.Quaternion(...values).normalize() : fallback.clone();
}

function phaseForNode(nodeName) {
  if (nodeName.startsWith("claw_") || nodeName.startsWith("pincer_")) return "claws";
  if (nodeName.startsWith("ring_")) return "rings";
  return "body";
}

function makePoseChannel(object, clip, poseTiming) {
  const poses = Object.fromEntries(REQUIRED_POSE_NAMES.map((name) => {
    const pose = readPose(clip, poseTiming.poseTimes[name].timeSeconds);
    return [name, {
      position: vector3(pose.position, object.position),
      quaternion: quaternion(pose.quaternion, object.quaternion),
      scale: vector3(pose.scale, object.scale),
    }];
  }));
  return {
    object,
    phase: phaseForNode(object.name),
    poses,
  };
}

function applyPose(channels, progress) {
  for (const channel of channels) {
    const phaseProgress = progress[channel.phase];
    const from = channel.poses[progress.poseFrom];
    const to = channel.poses[progress.poseTo];
    channel.object.position.lerpVectors(from.position, to.position, phaseProgress);
    channel.object.quaternion.slerpQuaternions(
      from.quaternion,
      to.quaternion,
      phaseProgress,
    );
    channel.object.scale.lerpVectors(from.scale, to.scale, phaseProgress);
  }
}

function smoothPhase(master, [start, end]) {
  const linear = THREE.MathUtils.clamp((master - start) / (end - start), 0, 1);
  return linear * linear * (3 - 2 * linear);
}

function progressFromMaster(master) {
  const stableMaster = THREE.MathUtils.clamp(master, 0, 1);
  let sceneIndex = STORY_SCENE_STOPS.length - 2;
  for (let index = 0; index < STORY_SCENE_STOPS.length - 1; index += 1) {
    if (stableMaster <= STORY_SCENE_STOPS[index + 1].progress + EPSILON) {
      sceneIndex = index;
      break;
    }
  }
  const from = STORY_SCENE_STOPS[sceneIndex];
  const to = STORY_SCENE_STOPS[sceneIndex + 1];
  const segmentProgress = THREE.MathUtils.clamp(
    (stableMaster - from.progress) / (to.progress - from.progress),
    0,
    1,
  );
  const eased = segmentProgress * segmentProgress * (3 - 2 * segmentProgress);
  const isOpening = sceneIndex === 0;
  return {
    master: stableMaster,
    sceneIndex,
    segmentProgress,
    poseFrom: from.pose,
    poseTo: to.pose,
    claws: isOpening ? smoothPhase(segmentProgress, STORY_PHASE_WINDOWS.claws) : eased,
    rings: isOpening ? smoothPhase(segmentProgress, STORY_PHASE_WINDOWS.rings) : eased,
    body: isOpening ? smoothPhase(segmentProgress, STORY_PHASE_WINDOWS.body) : eased,
    root: isOpening ? smoothPhase(segmentProgress, STORY_PHASE_WINDOWS.root) : eased,
  };
}

function applyStoryRoot(storyRoot, progress) {
  const from = STORY_ROOT_POSES[progress.poseFrom];
  const to = STORY_ROOT_POSES[progress.poseTo];
  const rootProgress = progress.root;
  storyRoot.position.set(
    THREE.MathUtils.lerp(from.position[0], to.position[0], rootProgress),
    THREE.MathUtils.lerp(from.position[1], to.position[1], rootProgress),
    THREE.MathUtils.lerp(from.position[2], to.position[2], rootProgress),
  );
  storyRoot.rotation.set(
    THREE.MathUtils.lerp(from.rotation[0], to.rotation[0], rootProgress),
    THREE.MathUtils.lerp(from.rotation[1], to.rotation[1], rootProgress),
    THREE.MathUtils.lerp(from.rotation[2], to.rotation[2], rootProgress),
  );
  storyRoot.scale.set(
    THREE.MathUtils.lerp(from.scale[0], to.scale[0], rootProgress),
    THREE.MathUtils.lerp(from.scale[1], to.scale[1], rootProgress),
    THREE.MathUtils.lerp(from.scale[2], to.scale[2], rootProgress),
  );
}

function transformBox(box, position, rotation) {
  const matrix = new THREE.Matrix4().compose(
    new THREE.Vector3(...position),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),
    new THREE.Vector3(1, 1, 1),
  );
  const transformed = new THREE.Box3().makeEmpty();
  for (const x of [box.min.x, box.max.x]) {
    for (const y of [box.min.y, box.max.y]) {
      for (const z of [box.min.z, box.max.z]) {
        transformed.expandByPoint(new THREE.Vector3(x, y, z).applyMatrix4(matrix));
      }
    }
  }
  return transformed;
}

function buildFramingBounds(scene, channels) {
  const closedProgress = progressFromMaster(0);
  const openProgress = progressFromMaster(STORY_SCENE_STOPS[1].progress);
  applyPose(channels, closedProgress);
  scene.updateMatrixWorld(true);
  const closedBounds = new THREE.Box3().setFromObject(scene);
  applyPose(channels, openProgress);
  scene.updateMatrixWorld(true);
  const openBounds = new THREE.Box3().setFromObject(scene);
  applyPose(channels, closedProgress);
  scene.updateMatrixWorld(true);

  return transformBox(
    closedBounds,
    STORY_ROOT_POSES.closed.position,
    STORY_ROOT_POSES.closed.rotation,
  ).union(transformBox(
    openBounds,
    STORY_ROOT_POSES.open.position,
    STORY_ROOT_POSES.open.rotation,
  ));
}

function fitCameraToBounds(camera, size, bounds) {
  if (!size.width || !size.height || bounds.isEmpty()) return;
  const boundsSize = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const tangent = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  const aspect = size.width / size.height;
  const verticalDistance = boundsSize.y / (2 * tangent);
  const horizontalDistance = boundsSize.x / (2 * tangent * aspect);
  const distance = Math.max(verticalDistance, horizontalDistance) * CAMERA_FIT_MARGIN
    + boundsSize.z / 2;

  camera.position.set(center.x, center.y, center.z + distance);
  camera.near = Math.max(0.05, distance - boundsSize.z * 2.5);
  camera.far = distance + boundsSize.z * 4 + 20;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
}

function serializeTransform(object) {
  return {
    position: object.position.toArray().map((value) => round(value)),
    quaternion: object.quaternion.toArray().map((value) => round(value)),
    scale: object.scale.toArray().map((value) => round(value)),
  };
}

function projectedFraming(camera, size, bounds) {
  camera.updateMatrixWorld(true);
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const x of [bounds.min.x, bounds.max.x]) {
    for (const y of [bounds.min.y, bounds.max.y]) {
      for (const z of [bounds.min.z, bounds.max.z]) {
        const point = new THREE.Vector3(x, y, z).project(camera);
        minX = Math.min(minX, point.x);
        maxX = Math.max(maxX, point.x);
        minY = Math.min(minY, point.y);
        maxY = Math.max(maxY, point.y);
      }
    }
  }
  const clearance = {
    left: minX + 1,
    right: 1 - maxX,
    top: 1 - maxY,
    bottom: minY + 1,
  };
  return {
    viewportWidth: size.width,
    viewportHeight: size.height,
    ndcBounds: {
      minX: round(minX),
      maxX: round(maxX),
      minY: round(minY),
      maxY: round(maxY),
    },
    clearance: Object.fromEntries(
      Object.entries(clearance).map(([key, value]) => [key, round(value)]),
    ),
    inside: Object.values(clearance).every((value) => value >= -EPSILON),
  };
}

export default function CancerKnowledgeMachine({
  modelUrl,
  manifestUrl,
  scrollRootRef,
  reducedMotion,
  onReady,
  onDiagnostics,
}) {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const manifest = useLoader(
    THREE.FileLoader,
    manifestUrl,
    (loader) => loader.setResponseType("json"),
  );
  const { camera, gl, size, invalidate } = useThree();
  const storyRootRef = useRef(null);
  const idleRootRef = useRef(null);
  const storyDataRef = useRef(null);
  const triggerRef = useRef(null);
  const controllerReactId = useId();
  const controllerInstanceIdRef = useRef(
    `home-controller-${controllerReactId.replace(/:/g, "")}`,
  );
  const progressRef = useRef(progressFromMaster(0));

  const { scene, channels, poseTiming, framingBounds } = useMemo(() => {
    const clonedScene = gltf.scene.clone(true);
    const missing = REQUIRED_MODEL_NODES.filter((name) => !clonedScene.getObjectByName(name));
    if (missing.length > 0) {
      throw new Error(`GLB thiếu node bắt buộc: ${missing.join(", ")}`);
    }
    const timing = derivePoseTiming(gltf.animations, manifest);
    const poseChannels = SCROLL_POSE_NODES.map((name) => {
      const object = clonedScene.getObjectByName(name);
      return makePoseChannel(object, clipForNode(gltf.animations, name), timing);
    });
    const bounds = buildFramingBounds(clonedScene, poseChannels);
    return { scene: clonedScene, channels: poseChannels, poseTiming: timing, framingBounds: bounds };
  }, [gltf, manifest]);

  useEffect(() => {
    const rendererId = gl.domElement.dataset.studymasterRendererId ?? "unknown";
    const inspectMaterialListeners = () => materialListenerSnapshot(scene);
    if (!window.__STUDYMASTER_B7_QA_ENABLED__) return undefined;
    window.__STUDYMASTER_RENDERER_INSPECTORS__ ??= new Map();
    window.__STUDYMASTER_RENDERER_INSPECTORS__.set(rendererId, inspectMaterialListeners);
    recordRendererLifecycle({
      type: "model-effect-mounted",
      rendererId,
      materials: inspectMaterialListeners(),
    });
    return () => recordRendererLifecycle({
      type: "model-effect-cleanup",
      rendererId,
      materials: inspectMaterialListeners(),
    });
  }, [gl, scene]);

  useEffect(() => () => {
    // The GLTF loader cache intentionally keeps CPU-side geometry alive. Signal
    // renderer-specific GPU bindings to detach before this instance leaves.
    const geometries = new Set();
    scene.traverse((object) => {
      if (object.isMesh && object.geometry) geometries.add(object.geometry);
    });
    for (const geometry of geometries) geometry.dispose();
  }, [scene]);

  useLayoutEffect(() => {
    fitCameraToBounds(camera, size, framingBounds);
    invalidate();
  }, [camera, framingBounds, invalidate, size]);

  useEffect(() => {
    onReady?.({
      clipCount: gltf.animations.length,
      nodeCount: REQUIRED_MODEL_NODES.length,
      poseTiming,
    });
  }, [gltf.animations.length, onReady, poseTiming]);

  useLayoutEffect(() => {
    const scrollRoot = scrollRootRef.current;
    const storyRoot = storyRootRef.current;
    if (!scrollRoot || !storyRoot) return undefined;
    const controllerInstanceId = controllerInstanceIdRef.current;

    const applyMaster = (master) => {
      const progress = progressFromMaster(master);
      progressRef.current = progress;
      applyPose(channels, progress);
      applyStoryRoot(storyRoot, progress);
      storyDataRef.current?.applyMaster(master);
    };
    applyMaster(0);
    idleRootRef.current?.rotation.set(0, 0, 0);
    triggerRef.current = null;
    if (reducedMotion) {
      invalidate();
      return undefined;
    }

    const master = { value: 0 };
    let timeline;
    const context = gsap.context(() => {
      const revealTargets = gsap.utils.toArray(".home-copy--knowledge > *", scrollRoot);
      const algorithmTargets = gsap.utils.toArray(".home-story-section--algorithm .home-scene-reveal > *", scrollRoot);
      const diagramLeadTargets = gsap.utils.toArray(
        ".home-story-section--diagram .home-eyebrow, .home-story-section--diagram h2, .home-story-section--diagram .home-lede, .home-story-section--diagram .home-activity",
        scrollRoot,
      );
      const diagramNodes = gsap.utils.toArray(".home-story-section--diagram .home-activity-node", scrollRoot);
      const diagramEdges = gsap.utils.toArray(".home-story-section--diagram .home-activity-edge", scrollRoot);
      const diagramGuards = gsap.utils.toArray(
        ".home-story-section--diagram .home-activity-guard, .home-story-section--diagram .home-activity-branch-label",
        scrollRoot,
      );
      const diagramMainEdges = gsap.utils.toArray(".home-story-section--diagram .home-activity-edge--main", scrollRoot);
      const diagramSource = gsap.utils.toArray(".home-story-section--diagram .home-diagram-source", scrollRoot);
      const diagramCta = gsap.utils.toArray(".home-story-section--diagram .home-button", scrollRoot);
      const toolTargets = gsap.utils.toArray(".home-story-section--tools .home-scene-reveal > *", scrollRoot);
      const finalTargets = gsap.utils.toArray(".home-story-section--final .home-scene-reveal > *", scrollRoot);
      timeline = gsap.timeline({ defaults: { ease: "none" } });
      timeline
        .to(master, {
          value: 1,
          duration: 1,
          onUpdate: () => applyMaster(master.value),
        }, 0)
        .fromTo(
          revealTargets,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.07, stagger: 0.008 },
          0.12,
        )
        .fromTo(algorithmTargets, { autoAlpha: 0, y: 20 }, {
          autoAlpha: 1, y: 0, duration: 0.08, stagger: 0.006,
        }, 0.32)
        .fromTo(diagramLeadTargets, { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1, y: 0, duration: 0.065, stagger: 0.005,
        }, 0.47)
        .fromTo(diagramNodes, { autoAlpha: 0, scale: 0.82, transformOrigin: "center" }, {
          autoAlpha: 1, scale: 1, duration: 0.045, stagger: 0.0025,
        }, 0.49)
        .fromTo(diagramEdges, { autoAlpha: 0, strokeDashoffset: 1 }, {
          autoAlpha: 1, strokeDashoffset: 0, duration: 0.055, stagger: 0.0015,
        }, 0.525)
        .fromTo(diagramGuards, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.025 }, 0.55)
        .to(diagramMainEdges, {
          stroke: "#d97706", strokeWidth: 3.2, duration: 0.045, stagger: 0.001,
        }, 0.56)
        .fromTo(diagramSource, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.03 }, 0.57)
        .fromTo(diagramCta, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.035 }, 0.575)
        .fromTo(toolTargets, { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1, y: 0, duration: 0.075, stagger: 0.006,
        }, 0.715)
        .fromTo(finalTargets, { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1, y: 0, duration: 0.075, stagger: 0.008,
        }, 0.905);

      triggerRef.current = ScrollTrigger.create({
        id: "studymaster-s01-s02",
        trigger: scrollRoot,
        start: "top top",
        end: "bottom bottom",
        animation: timeline,
        scrub: 0.45,
        invalidateOnRefresh: true,
      });
      updateControllerRegistry("mount", controllerInstanceId, triggerRef.current);
    }, scrollRoot);

    return () => {
      updateControllerRegistry("unmount", controllerInstanceId, triggerRef.current);
      triggerRef.current?.kill();
      triggerRef.current = null;
      timeline?.kill();
      context.revert();
      applyMaster(0);
    };
  }, [channels, invalidate, reducedMotion, scrollRootRef]);

  const snapshot = useCallback(() => {
    const storyRoot = storyRootRef.current;
    const progress = progressRef.current;
    const trigger = triggerRef.current;
    const transforms = storyRoot ? { storyRoot: serializeTransform(storyRoot) } : {};
    for (const name of QA_NODE_NAMES) {
      const object = scene.getObjectByName(name);
      if (object) transforms[name] = serializeTransform(object);
    }
    storyRoot?.updateMatrixWorld(true);
    const actualBounds = storyRoot
      ? new THREE.Box3().setFromObject(storyRoot)
      : framingBounds;
    return {
      controller: {
        observable: true,
        active: Boolean(trigger),
        registryCount: trigger ? 1 : 0,
        id: trigger?.vars.id ?? null,
        start: trigger ? round(trigger.start) : null,
        end: trigger ? round(trigger.end) : null,
        progress: trigger ? round(trigger.progress) : 0,
      },
      progress: Object.fromEntries(Object.entries(progress).map(([key, value]) => [
        key,
        typeof value === "number" ? round(value) : value,
      ])),
      poseTiming: {
        closedFrame: poseTiming.closedFrame,
        openFrame: poseTiming.openFrame,
        closedTime: round(poseTiming.closedTime),
        openTime: round(poseTiming.openTime),
        derivedNormalizedTime: round(poseTiming.derivedNormalizedTime),
        validatedClipCount: poseTiming.validatedClipCount,
        validatedPoseCount: poseTiming.validatedPoseCount,
        poseTimes: poseTiming.poseTimes,
        source: poseTiming.source,
        manifestSchema: poseTiming.manifestSchema,
        assetRevision: poseTiming.assetRevision,
      },
      storyData: storyDataRef.current?.snapshot(camera, size) ?? null,
      renderer: {
        calls: gl.info.render.calls,
        triangles: gl.info.render.triangles,
        lines: gl.info.render.lines,
        points: gl.info.render.points,
        frame: gl.info.render.frame,
        geometries: gl.info.memory.geometries,
        textures: gl.info.memory.textures,
        pixelRatio: gl.getPixelRatio(),
        drawingBuffer: [gl.domElement.width, gl.domElement.height],
      },
      transforms,
      framing: projectedFraming(camera, size, actualBounds),
      fitEnvelope: projectedFraming(camera, size, framingBounds),
      reducedMotion,
    };
  }, [camera, framingBounds, gl, poseTiming, reducedMotion, scene, size]);

  useEffect(() => {
    onDiagnostics?.(snapshot);
    return () => onDiagnostics?.(null);
  }, [onDiagnostics, snapshot]);

  useFrame(({ clock }) => {
    if (!reducedMotion && idleRootRef.current) {
      idleRootRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.42) * 0.018;
      idleRootRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.31) * 0.008;
    }
  });

  return (
    <>
      <group ref={storyRootRef} name="story_root">
        <group ref={idleRootRef} name="idle_root">
          <primitive object={scene} dispose={null} />
        </group>
      </group>
      <StoryDataBlocks ref={storyDataRef} />
    </>
  );
}
