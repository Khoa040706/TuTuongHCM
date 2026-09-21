const clamp01 = (value) => Math.min(1, Math.max(0, value));

const smoothstep = (start, end, value) => {
  const t = clamp01((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

const lerp = (from, to, progress) => from + (to - from) * progress;

const SLOT_X = [-2.15, 0, 2.15];

export const STORY_DATA_BLOCKS = Object.freeze([
  { id: "value-3", value: 3, actionLabel: ["Đưa", "thẻ"] },
  { id: "value-1", value: 1, actionLabel: ["Nhập", "PIN"] },
  { id: "value-2", value: 2, actionLabel: ["Kiểm tra", "số dư"] },
]);

const INITIAL_SLOTS = Object.freeze({ "value-3": 0, "value-1": 1, "value-2": 2 });
const AFTER_FIRST_SWAP = Object.freeze({ "value-3": 1, "value-1": 0, "value-2": 2 });
const AFTER_SECOND_SWAP = Object.freeze({ "value-3": 2, "value-1": 0, "value-2": 1 });

function swapPosition(blockId, fromSlots, toSlots, progress) {
  const eased = smoothstep(0, 1, progress);
  const fromX = SLOT_X[fromSlots[blockId]];
  const toX = SLOT_X[toSlots[blockId]];
  const moving = fromX !== toX;
  const arcDirection = fromX < toX ? 1 : -1;
  return {
    x: lerp(fromX, toX, eased),
    y: moving ? Math.sin(Math.PI * eased) * 0.82 * arcDirection : 0,
    z: moving ? Math.sin(Math.PI * eased) * (arcDirection > 0 ? 0.55 : -0.28) : 0,
    slot: eased < 0.5 ? fromSlots[blockId] : toSlots[blockId],
  };
}

function algorithmBlockState(block, progress) {
  let position;
  let phase;
  let compared = false;
  let locked = false;

  if (progress < 0.16) {
    position = { x: SLOT_X[INITIAL_SLOTS[block.id]], y: 0, z: 0, slot: INITIAL_SLOTS[block.id] };
    phase = "compare-3-1";
    compared = block.value === 3 || block.value === 1;
  } else if (progress < 0.34) {
    position = swapPosition(block.id, INITIAL_SLOTS, AFTER_FIRST_SWAP, (progress - 0.16) / 0.18);
    phase = "swap-3-1";
    compared = block.value === 3 || block.value === 1;
  } else if (progress < 0.45) {
    position = { x: SLOT_X[AFTER_FIRST_SWAP[block.id]], y: 0, z: 0, slot: AFTER_FIRST_SWAP[block.id] };
    phase = "settle-1-3-2";
  } else if (progress < 0.58) {
    position = { x: SLOT_X[AFTER_FIRST_SWAP[block.id]], y: 0, z: 0, slot: AFTER_FIRST_SWAP[block.id] };
    phase = "compare-3-2";
    compared = block.value === 3 || block.value === 2;
  } else if (progress < 0.76) {
    position = swapPosition(block.id, AFTER_FIRST_SWAP, AFTER_SECOND_SWAP, (progress - 0.58) / 0.18);
    phase = "swap-3-2";
    compared = block.value === 3 || block.value === 2;
  } else if (progress < 0.86) {
    position = { x: SLOT_X[AFTER_SECOND_SWAP[block.id]], y: 0, z: 0, slot: AFTER_SECOND_SWAP[block.id] };
    phase = "lock-last";
    locked = block.value === 3;
  } else if (progress < 0.95) {
    position = { x: SLOT_X[AFTER_SECOND_SWAP[block.id]], y: 0, z: 0, slot: AFTER_SECOND_SWAP[block.id] };
    phase = "compare-no-swap";
    compared = block.value === 1 || block.value === 2;
    locked = block.value === 3;
  } else {
    position = { x: SLOT_X[AFTER_SECOND_SWAP[block.id]], y: 0, z: 0, slot: AFTER_SECOND_SWAP[block.id] };
    phase = "early-exit";
    locked = true;
  }

  return { ...position, phase, compared, locked };
}

export function deriveStoryDataState(masterValue) {
  const master = clamp01(masterValue);
  const entrance = smoothstep(0.13, 0.21, master);
  const bridge = smoothstep(0.2, 0.4, master);
  const algorithmProgress = clamp01((master - 0.4) / 0.15);
  const diagramProgress = smoothstep(0.55, 0.61, master);
  const fadeOut = 1 - smoothstep(0.65, 0.7, master);
  const opacity = entrance * fadeOut;

  const blocks = STORY_DATA_BLOCKS.map((block, identityIndex) => {
    const algorithm = algorithmBlockState(block, algorithmProgress);
    const bridgeStartX = (identityIndex - 1) * 0.72;
    const bridgeX = lerp(bridgeStartX, SLOT_X[identityIndex], bridge);
    const bridgeY = lerp(-0.95 + Math.abs(identityIndex - 1) * 0.1, 0, bridge);
    const algorithmMix = smoothstep(0.36, 0.4, master);
    const simulationPosition = {
      x: lerp(bridgeX, algorithm.x, algorithmMix),
      y: lerp(bridgeY, algorithm.y, algorithmMix),
      z: 4.05 + algorithm.z,
    };
    const actionTarget = [
      { x: -2.15, y: 1.25, z: 4.05 },
      { x: 0, y: 0, z: 4.05 },
      { x: 2.15, y: -1.25, z: 4.05 },
    ][identityIndex];

    return {
      ...block,
      slot: algorithm.slot,
      position: [
        lerp(simulationPosition.x, actionTarget.x, diagramProgress),
        lerp(simulationPosition.y, actionTarget.y, diagramProgress),
        lerp(simulationPosition.z, actionTarget.z, diagramProgress),
      ],
      scale: [
        lerp(1, 1.55, diagramProgress),
        lerp(1, 0.72, diagramProgress),
        1,
      ],
      compared: algorithm.compared && diagramProgress < 0.35,
      locked: algorithm.locked && diagramProgress < 0.35,
      phase: diagramProgress > 0.02 ? "become-action-nodes" : (master < 0.4 ? "knowledge-to-simulation" : algorithm.phase),
      labelMode: diagramProgress >= 0.5 ? "action" : "value",
    };
  });

  return {
    master,
    visible: opacity > 0.001,
    opacity,
    algorithmProgress,
    diagramProgress,
    phase: blocks[0].phase,
    order: [...blocks].sort((left, right) => left.position[0] - right.position[0]).map(({ value }) => value),
    blocks,
  };
}
