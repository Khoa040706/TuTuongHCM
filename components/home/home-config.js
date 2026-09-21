export const HOME_MODEL_URL =
  "/assets/home/cancer-knowledge-machine/cancer-machine.glb";

export const HOME_MODEL_MANIFEST_URL =
  "/assets/home/cancer-knowledge-machine/model-manifest.json";

export const HOME_MODEL_ERROR_URL =
  "/assets/home/cancer-knowledge-machine/__missing-blockout-v2.glb";

export const REQUIRED_MODEL_NODES = [
  "crab_root",
  "claw_left",
  "claw_right",
  "pincer_left",
  "pincer_right",
  "ring_inner",
  "ring_outer",
  "leg_left_01",
  "leg_left_02",
  "leg_left_03",
  "leg_left_04",
  "leg_right_01",
  "leg_right_02",
  "leg_right_03",
  "leg_right_04",
];

export const SCROLL_POSE_NODES = REQUIRED_MODEL_NODES.filter(
  (name) => name !== "crab_root",
);

export const STORY_PHASE_WINDOWS = Object.freeze({
  claws: [0.06, 0.42],
  rings: [0.3, 0.68],
  body: [0.58, 0.86],
  root: [0.7, 1],
});

export const STORY_ROOT_POSES = Object.freeze({
  closed: {
    position: [0, -0.1, 0],
    rotation: [0.04, -0.08, 0],
    scale: [1, 1, 1],
  },
  open: {
    position: [0.36, 0.16, -0.18],
    rotation: [0.01, -0.2, -0.025],
    scale: [1, 1, 1],
  },
  guide_left: {
    position: [1.25, 0.72, -0.3],
    rotation: [0.015, -0.12, 0.035],
    scale: [0.66, 0.66, 0.66],
  },
  guide_right: {
    position: [1.45, 0.82, -0.35],
    rotation: [0.01, -0.24, -0.035],
    scale: [0.62, 0.62, 0.62],
  },
  compact: {
    position: [0.55, -0.05, -0.12],
    rotation: [0.025, -0.16, -0.018],
    scale: [0.76, 0.76, 0.76],
  },
});

export const STORY_SCENE_STOPS = Object.freeze([
  { id: "study-story-s01", progress: 0, pose: "closed" },
  { id: "home-s02", progress: 0.2, pose: "open" },
  { id: "home-s03", progress: 0.4, pose: "guide_left" },
  { id: "home-s04", progress: 0.6, pose: "guide_right" },
  { id: "home-s05", progress: 0.8, pose: "compact" },
  { id: "home-s06", progress: 1, pose: "compact" },
]);

export const CAMERA_FIT_MARGIN = 1.18;

export const STORY_TRANSFORM_OWNERS = Object.freeze({
  gsap: [
    "story_root.position",
    "story_root.rotation",
    "story_root.scale",
    "named pose node position/quaternion/scale",
    "story data block position/body scale/material emphasis",
    "story data label opacity (label scale stays independent from body deformation)",
    "scene DOM reveal opacity/translateY",
  ],
  r3fUseFrame: ["idle_root.rotation"],
  glbAnimationMixer: [],
});
