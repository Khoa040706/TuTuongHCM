import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const [glbArg, manifestArg, reportArg] = process.argv.slice(2);

if (!glbArg || !manifestArg || !reportArg) {
  console.error("Usage: node validate_glb.mjs <model.glb> <manifest.json> <report.json>");
  process.exit(2);
}

const glbPath = path.resolve(glbArg);
const manifestPath = path.resolve(manifestArg);
const reportPath = path.resolve(reportArg);
const requiredRootChildren = [
  "crab_body",
  "claw_left",
  "claw_right",
  "legs_group",
  "cancer_mark",
  "ring_inner",
  "ring_outer",
];
const poseNames = ["closed", "open", "guide_left", "guide_right", "compact"];
const forbiddenNameParts = ["antenna", "tentacle", "whisker", "rau_"];

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function check(pass, details = {}) {
  return { pass: Boolean(pass), ...details };
}

function parseGlb(loader, arrayBuffer, resourcePath) {
  return new Promise((resolve, reject) => {
    loader.parse(arrayBuffer, resourcePath, resolve, reject);
  });
}

const glbBuffer = fs.readFileSync(glbPath);
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const arrayBuffer = glbBuffer.buffer.slice(
  glbBuffer.byteOffset,
  glbBuffer.byteOffset + glbBuffer.byteLength,
);
const resourcePath = pathToFileURL(`${path.dirname(glbPath)}${path.sep}`).href;
const loader = new GLTFLoader();
const gltf = await parseGlb(loader, arrayBuffer, resourcePath);

const names = [];
const meshNames = [];
const materialNames = new Set();
gltf.scene.traverse((object) => {
  if (object.name) names.push(object.name);
  if (object.isMesh) {
    meshNames.push(object.name);
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    for (const material of materials) {
      if (material?.name) materialNames.add(material.name);
    }
  }
});

const root = gltf.scene.getObjectByName("crab_root");
const actualRootChildren = root ? root.children.map((child) => child.name) : [];
const expectedLegs = [];
for (const side of ["left", "right"]) {
  for (let index = 1; index <= 4; index += 1) {
    expectedLegs.push(`leg_${side}_${String(index).padStart(2, "0")}`);
  }
}
const expectedAnimatedNodes = [
  "crab_root",
  "claw_left",
  "claw_right",
  "pincer_left",
  "pincer_right",
  "ring_inner",
  "ring_outer",
  "legs_group",
  ...expectedLegs,
];
const expectedClipNames = expectedAnimatedNodes.map((name) => `${name}Action`).sort();
const actualClipNames = gltf.animations.map((clip) => clip.name).sort();
const missingLegs = expectedLegs.filter((name) => !names.includes(name));
const forbiddenMatches = names.filter((name) =>
  forbiddenNameParts.some((part) => name.toLowerCase().includes(part)),
);
const manifestPoseNames = Object.keys(manifest.poses ?? {});
const bounds = new THREE.Box3().setFromObject(gltf.scene);
const boundsSize = bounds.getSize(new THREE.Vector3());
const actualHash = sha256(glbBuffer);
const manifestHash = manifest.files?.glb?.sha256;

const checks = {
  parsedByThreeGLTFLoader: check(Boolean(gltf.scene), {
    loader: "three/examples/jsm/loaders/GLTFLoader.js",
    threeRevision: THREE.REVISION,
  }),
  glbMagic: check(glbBuffer.subarray(0, 4).toString("ascii") === "glTF"),
  rootPresent: check(Boolean(root)),
  requiredRootChildren: check(
    requiredRootChildren.every((name) => actualRootChildren.includes(name)),
    {
      actual: actualRootChildren,
      missing: requiredRootChildren.filter((name) => !actualRootChildren.includes(name)),
    },
  ),
  walkingLegRoots: check(missingLegs.length === 0, { actual: 8 - missingLegs.length, missing: missingLegs }),
  forbiddenAntennaLikeNodes: check(forbiddenMatches.length === 0, { matches: forbiddenMatches }),
  fivePoseManifest: check(
    poseNames.length === manifestPoseNames.length && poseNames.every((name) => manifestPoseNames.includes(name)),
    { actual: manifestPoseNames },
  ),
  animationData: check(gltf.animations.length > 0, {
    clipCount: gltf.animations.length,
    clips: gltf.animations.map((clip) => ({ name: clip.name, duration: clip.duration, tracks: clip.tracks.length })),
  }),
  canonicalActionNames: check(
    actualClipNames.length === expectedClipNames.length
      && expectedClipNames.every((name, index) => name === actualClipNames[index]),
    {
      expected: expectedClipNames,
      actual: actualClipNames,
      missing: expectedClipNames.filter((name) => !actualClipNames.includes(name)),
      unexpected: actualClipNames.filter((name) => !expectedClipNames.includes(name)),
    },
  ),
  finiteBounds: check(
    [bounds.min.x, bounds.min.y, bounds.min.z, bounds.max.x, bounds.max.y, bounds.max.z].every(Number.isFinite),
    {
      min: bounds.min.toArray(),
      max: bounds.max.toArray(),
      size: boundsSize.toArray(),
    },
  ),
  materialSlots: check(
    ["MAT_GoldSatin", "MAT_Charcoal", "MAT_AmberGlow"].every((name) => materialNames.has(name)),
    { actual: [...materialNames].sort() },
  ),
  manifestGlbHash: check(Boolean(manifestHash) && manifestHash === actualHash, {
    manifest: manifestHash ?? null,
    actual: actualHash,
  }),
};

const failed = Object.entries(checks)
  .filter(([, result]) => !result.pass)
  .map(([name]) => name);
const report = {
  status: failed.length === 0 ? "PASS" : "FAIL",
  checkedAtUtc: new Date().toISOString(),
  files: { glb: glbPath, manifest: manifestPath },
  stats: {
    bytes: glbBuffer.length,
    sceneChildren: gltf.scene.children.length,
    namedNodes: names.length,
    meshes: meshNames.length,
    materials: materialNames.size,
    animations: gltf.animations.length,
  },
  checks,
  failed,
  limitation:
    "This verifies GLB parsing and structural contracts with the installed Three.js loader; browser/R3F integration remains Step 4.",
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ status: report.status, report: reportPath, failed }));
if (failed.length > 0) process.exitCode = 1;
