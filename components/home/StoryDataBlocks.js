"use client";

import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";
import { deriveStoryDataState, STORY_DATA_BLOCKS } from "./home-story-state";

const COLORS = {
  default: new THREE.Color("#d97706"),
  compared: new THREE.Color("#f5b544"),
  locked: new THREE.Color("#5d7d55"),
};

const LABEL_TEXTURE_SIZE = Object.freeze({ width: 512, height: 256 });
const LABEL_PLANES = Object.freeze({
  value: Object.freeze({ width: 1.12, height: 0.56 }),
  action: Object.freeze({ width: 1.2, height: 0.6 }),
});

function createLabelTexture(lines, { foreground = "#2c2a26", fontSize = 92 } = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = LABEL_TEXTURE_SIZE.width;
  canvas.height = LABEL_TEXTURE_SIZE.height;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = foreground;
  context.font = `800 ${fontSize}px "Be Vietnam Pro", Arial, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  const rows = Array.isArray(lines) ? lines : [String(lines)];
  const lineHeight = fontSize * 1.05;
  const firstY = canvas.height / 2 - ((rows.length - 1) * lineHeight) / 2;
  const measuredRows = rows.map((line, index) => {
    const metrics = context.measureText(line);
    const baselineY = firstY + index * lineHeight;
    const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.78;
    const descent = metrics.actualBoundingBoxDescent || fontSize * 0.22;
    return {
      text: line,
      width: metrics.width,
      ascent,
      descent,
      top: baselineY - ascent,
      bottom: baselineY + descent,
    };
  });
  measuredRows.forEach((row, index) => {
    context.fillText(row.text, canvas.width / 2, firstY + index * lineHeight);
  });
  const glyphTop = Math.min(...measuredRows.map((row) => row.top));
  const glyphBottom = Math.max(...measuredRows.map((row) => row.bottom));
  const maxGlyphWidth = Math.max(...measuredRows.map((row) => row.width));
  const maxRowGlyphHeight = Math.max(...measuredRows.map((row) => row.ascent + row.descent));
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  texture.userData.labelMetrics = {
    textureWidth: canvas.width,
    textureHeight: canvas.height,
    textureAspect: canvas.width / canvas.height,
    fontSize,
    lineHeight,
    lineCount: rows.length,
    maxGlyphWidth,
    glyphTop,
    glyphBottom,
    glyphHeight: glyphBottom - glyphTop,
    maxRowGlyphHeight,
    horizontalPadding: (canvas.width - maxGlyphWidth) / 2,
    verticalPaddingTop: glyphTop,
    verticalPaddingBottom: canvas.height - glyphBottom,
  };
  return texture;
}

function projectBounds(object, camera, size) {
  if (!object) return null;
  const bounds = new THREE.Box3().setFromObject(object);
  if (bounds.isEmpty()) return null;
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
  const screen = {
    left: (minX * 0.5 + 0.5) * size.width,
    right: (maxX * 0.5 + 0.5) * size.width,
    top: (-maxY * 0.5 + 0.5) * size.height,
    bottom: (-minY * 0.5 + 0.5) * size.height,
  };
  return {
    ndc: { minX, maxX, minY, maxY },
    screen,
    width: screen.right - screen.left,
    height: screen.bottom - screen.top,
    inside: minX >= -1 && maxX <= 1 && minY >= -1 && maxY <= 1,
  };
}

function StoryDataBlock({ block, register }) {
  const valueTexture = useMemo(() => createLabelTexture(String(block.value)), [block.value]);
  const actionTexture = useMemo(
    () => createLabelTexture(block.actionLabel, { fontSize: 80 }),
    [block.actionLabel],
  );

  useEffect(() => () => {
    valueTexture.dispose();
    actionTexture.dispose();
    valueTexture.source.data = null;
    actionTexture.source.data = null;
  }, [actionTexture, valueTexture]);

  return (
    <group
      ref={(object) => register(block.id, "group", object)}
      name={`story_data_${block.id}`}
      userData={{ identity: block.id, value: block.value }}
    >
      <mesh
        ref={(object) => register(block.id, "surfaceMesh", object)}
        castShadow={false}
        receiveShadow={false}
      >
        <boxGeometry args={[1.35, 1.08, 0.34, 2, 2, 1]} />
        <meshPhysicalMaterial
          ref={(material) => register(block.id, "surface", material)}
          color="#d97706"
          emissive="#7a3c02"
          emissiveIntensity={0.12}
          metalness={0.34}
          roughness={0.3}
          transparent
        />
      </mesh>
      <mesh ref={(object) => register(block.id, "valueMesh", object)} position={[0, 0, 0.181]}>
        <planeGeometry args={[LABEL_PLANES.value.width, LABEL_PLANES.value.height]} />
        <meshBasicMaterial
          ref={(material) => register(block.id, "value", material)}
          map={valueTexture}
          transparent
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={(object) => register(block.id, "actionMesh", object)} position={[0, 0, 0.184]}>
        <planeGeometry args={[LABEL_PLANES.action.width, LABEL_PLANES.action.height]} />
        <meshBasicMaterial
          ref={(material) => register(block.id, "action", material)}
          map={actionTexture}
          transparent
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

const StoryDataBlocks = forwardRef(function StoryDataBlocks(_props, ref) {
  const rootRef = useRef(null);
  const refs = useRef(new Map());
  const lastStateRef = useRef(deriveStoryDataState(0));

  const register = (id, kind, value) => {
    if (!refs.current.has(id)) refs.current.set(id, {});
    refs.current.get(id)[kind] = value;
  };

  useEffect(() => () => {
    refs.current.clear();
    rootRef.current = null;
  }, []);

  useImperativeHandle(ref, () => ({
    applyMaster(master) {
      const state = deriveStoryDataState(master);
      lastStateRef.current = state;
      if (rootRef.current) rootRef.current.visible = state.visible;
      for (const block of state.blocks) {
        const target = refs.current.get(block.id);
        if (!target?.group) continue;
        target.group.position.set(...block.position);
        target.group.scale.set(1, 1, 1);
        target.group.rotation.set(0, 0, 0);
        target.surfaceMesh?.scale.set(...block.scale);
        target.valueMesh?.scale.set(1, 1, 1);
        target.actionMesh?.scale.set(1, 1, 1);
        if (target.surface) {
          target.surface.color.copy(block.locked ? COLORS.locked : block.compared ? COLORS.compared : COLORS.default);
          target.surface.emissiveIntensity = block.compared ? 0.38 : block.locked ? 0.16 : 0.12;
          target.surface.opacity = state.opacity;
        }
        if (target.value) {
          target.value.opacity = state.opacity * (block.labelMode === "value" ? 1 : 0);
        }
        if (target.action) {
          target.action.opacity = state.opacity * (block.labelMode === "action" ? 1 : 0);
        }
      }
    },
    snapshot(camera, size) {
      rootRef.current?.updateMatrixWorld(true);
      return {
        master: lastStateRef.current.master,
        phase: lastStateRef.current.phase,
        order: lastStateRef.current.order,
        algorithmProgress: lastStateRef.current.algorithmProgress,
        diagramProgress: lastStateRef.current.diagramProgress,
        visible: lastStateRef.current.visible,
        blocks: lastStateRef.current.blocks.map((block) => {
          const target = refs.current.get(block.id);
          const object = target?.group;
          const world = object?.getWorldPosition(new THREE.Vector3()) ?? new THREE.Vector3(...block.position);
          const ndc = world.clone().project(camera);
          const labelMesh = block.labelMode === "action" ? target?.actionMesh : target?.valueMesh;
          const labelWorldScale = labelMesh?.getWorldScale(new THREE.Vector3());
          const geometryWidth = labelMesh?.geometry?.parameters?.width ?? null;
          const geometryHeight = labelMesh?.geometry?.parameters?.height ?? null;
          const textureMetrics = labelMesh?.material?.map?.userData?.labelMetrics ?? null;
          const geometryAspect = geometryWidth && geometryHeight ? geometryWidth / geometryHeight : null;
          const worldScaleAspect = labelWorldScale ? labelWorldScale.x / labelWorldScale.y : null;
          const displayedAspect = geometryAspect && worldScaleAspect ? geometryAspect * worldScaleAspect : null;
          const textureAspect = textureMetrics?.textureAspect ?? null;
          const bounds = projectBounds(object, camera, size);
          const labelBounds = projectBounds(labelMesh, camera, size);
          const projectedGlyphHeight = labelBounds && textureMetrics
            ? labelBounds.height * textureMetrics.glyphHeight / textureMetrics.textureHeight
            : null;
          const projectedLineHeight = labelBounds && textureMetrics
            ? labelBounds.height * textureMetrics.lineHeight / textureMetrics.textureHeight
            : null;
          const projectedMaxGlyphWidth = labelBounds && textureMetrics
            ? labelBounds.width * textureMetrics.maxGlyphWidth / textureMetrics.textureWidth
            : null;
          const projectedFontSize = labelBounds && textureMetrics
            ? labelBounds.height * textureMetrics.fontSize / textureMetrics.textureHeight
            : null;
          const projectedRowGlyphHeight = labelBounds && textureMetrics
            ? labelBounds.height * textureMetrics.maxRowGlyphHeight / textureMetrics.textureHeight
            : null;
          return {
            id: block.id,
            value: block.value,
            slot: block.slot,
            compared: block.compared,
            locked: block.locked,
            labelMode: block.labelMode,
            bodyScale: block.scale,
            position: block.position.map((value) => Math.round(value * 1e5) / 1e5),
            ndc: ndc.toArray().map((value) => Math.round(value * 1e5) / 1e5),
            screen: [
              Math.round((ndc.x * 0.5 + 0.5) * size.width * 100) / 100,
              Math.round((-ndc.y * 0.5 + 0.5) * size.height * 100) / 100,
            ],
            inside: Math.abs(ndc.x) <= 1 && Math.abs(ndc.y) <= 1 && ndc.z >= -1 && ndc.z <= 1,
            bounds,
            labelBounds,
            labelWorldScale: labelWorldScale?.toArray() ?? null,
            labelAspect: {
              geometryWidth,
              geometryHeight,
              geometryAspect,
              textureWidth: textureMetrics?.textureWidth ?? null,
              textureHeight: textureMetrics?.textureHeight ?? null,
              textureAspect,
              displayedAspect,
              preservationRatio: displayedAspect && textureAspect ? displayedAspect / textureAspect : null,
              fontSize: textureMetrics?.fontSize ?? null,
              lineHeight: textureMetrics?.lineHeight ?? null,
              lineCount: textureMetrics?.lineCount ?? null,
              maxGlyphWidth: textureMetrics?.maxGlyphWidth ?? null,
              glyphHeight: textureMetrics?.glyphHeight ?? null,
              maxRowGlyphHeight: textureMetrics?.maxRowGlyphHeight ?? null,
              horizontalPadding: textureMetrics?.horizontalPadding ?? null,
              verticalPaddingTop: textureMetrics?.verticalPaddingTop ?? null,
              verticalPaddingBottom: textureMetrics?.verticalPaddingBottom ?? null,
              projectedGlyphHeight,
              projectedLineHeight,
              projectedMaxGlyphWidth,
              projectedFontSize,
              projectedRowGlyphHeight,
              linesDoNotOverlap: textureMetrics
                ? textureMetrics.lineCount <= 1 || textureMetrics.lineHeight >= textureMetrics.maxRowGlyphHeight
                : null,
              glyphFitsTexture: textureMetrics
                ? textureMetrics.horizontalPadding >= 0
                  && textureMetrics.verticalPaddingTop >= 0
                  && textureMetrics.verticalPaddingBottom >= 0
                : null,
            },
          };
        }),
      };
    },
  }), []);

  return (
    <group ref={rootRef} name="story_data_blocks" visible={false}>
      {STORY_DATA_BLOCKS.map((block) => (
        <StoryDataBlock key={block.id} block={block} register={register} />
      ))}
    </group>
  );
});

export default StoryDataBlocks;
