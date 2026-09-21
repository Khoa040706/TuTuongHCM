import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const [glbArg, manifestArg, reportArg] = process.argv.slice(2);
if (!glbArg || !manifestArg || !reportArg) {
  console.error("Usage: node validate_pose_times.mjs <model.glb> <manifest.json> <report.json>");
  process.exit(2);
}

const glbPath = path.resolve(glbArg);
const manifestPath = path.resolve(manifestArg);
const reportPath = path.resolve(reportArg);
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const buffer = fs.readFileSync(glbPath);
const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
const resourcePath = pathToFileURL(`${path.dirname(glbPath)}${path.sep}`).href;
const gltf = await new Promise((resolve, reject) => {
  new GLTFLoader().parse(arrayBuffer, resourcePath, resolve, reject);
});

const poseNames = ["closed", "open", "guide_left", "guide_right", "compact"];
const epsilonTime = 2e-4;
const epsilonValue = 2e-4;
const trackMap = new Map();
for (const clip of gltf.animations) {
  for (const track of clip.tracks) {
    trackMap.set(track.name, { clip: clip.name, track });
  }
}

function blenderEulerToGltfQuaternion(x, y, z) {
  const blender = new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z, "XYZ"));
  return new THREE.Quaternion(blender.x, -blender.z, -blender.y, blender.w).normalize();
}

function expectedTransforms(pose) {
  const radians = THREE.MathUtils.degToRad;
  const expected = new Map([
    ["crab_root.scale", [pose.rootScale, pose.rootScale, pose.rootScale]],
    ["claw_left.quaternion", blenderEulerToGltfQuaternion(0, radians(pose.clawLeftYDeg), 0).toArray()],
    ["claw_right.quaternion", blenderEulerToGltfQuaternion(0, radians(pose.clawRightYDeg), 0).toArray()],
    ["pincer_left.scale", [1, pose.pincerScaleZ, 1]],
    ["pincer_right.scale", [1, pose.pincerScaleZ, 1]],
    ["ring_inner.quaternion", blenderEulerToGltfQuaternion(Math.PI / 2, radians(pose.ringInnerYDeg), 0).toArray()],
    ["ring_outer.quaternion", blenderEulerToGltfQuaternion(Math.PI / 2, radians(pose.ringOuterYDeg), 0).toArray()],
    ["ring_inner.scale", [pose.ringScale, pose.ringScale, pose.ringScale]],
    ["ring_outer.scale", [pose.ringScale, pose.ringScale, pose.ringScale]],
    ["legs_group.scale", [pose.legsScale, pose.legsScale, pose.legsScale]],
  ]);
  for (const side of ["left", "right"]) {
    const sideSign = side === "left" ? -1 : 1;
    for (let index = 1; index <= 4; index += 1) {
      const rhythm = 0.82 + 0.06 * index;
      const angle = radians(sideSign * pose.legFoldDeg * rhythm);
      expected.set(
        `leg_${side}_${String(index).padStart(2, "0")}.quaternion`,
        blenderEulerToGltfQuaternion(0, angle, 0).toArray(),
      );
    }
  }
  return expected;
}

function sampleAtTime(track, time) {
  const firstTime = track.times[0];
  const lastTime = track.times[track.times.length - 1];
  if (time < firstTime - epsilonTime || time > lastTime + epsilonTime) return null;
  let bestIndex = -1;
  let bestDelta = Infinity;
  for (let index = 0; index < track.times.length; index += 1) {
    const delta = Math.abs(track.times[index] - time);
    if (delta < bestDelta) {
      bestDelta = delta;
      bestIndex = index;
    }
  }
  const valueSize = track.getValueSize();
  const target = new Float32Array(valueSize);
  track.createInterpolant(target).evaluate(time);
  return {
    nearestKeyTime: track.times[bestIndex],
    nearestKeyDelta: bestDelta,
    exactKeyPresent: bestDelta <= epsilonTime,
    value: Array.from(target),
  };
}

function valuesMatch(trackName, actual, expected) {
  if (trackName.endsWith(".quaternion")) {
    const actualQ = new THREE.Quaternion(...actual).normalize();
    const expectedQ = new THREE.Quaternion(...expected).normalize();
    return 1 - Math.abs(actualQ.dot(expectedQ)) <= epsilonValue;
  }
  return actual.length === expected.length
    && actual.every((value, index) => Math.abs(value - expected[index]) <= epsilonValue);
}

const poseResults = {};
const failures = [];
for (const poseName of poseNames) {
  const sampling = manifest.poseSampling?.poses?.[poseName];
  const pose = manifest.poses?.[poseName];
  const result = {
    frame: sampling?.frame ?? null,
    timeSeconds: sampling?.timeSeconds ?? null,
    tracksChecked: 0,
    failures: [],
  };
  if (!sampling || !pose || !Number.isFinite(sampling.timeSeconds)) {
    result.failures.push("missing manifest pose sampling");
  } else {
    for (const [trackName, expected] of expectedTransforms(pose)) {
      const record = trackMap.get(trackName);
      if (!record) {
        result.failures.push(`missing track ${trackName}`);
        continue;
      }
      const sample = sampleAtTime(record.track, sampling.timeSeconds);
      if (!sample) {
        result.failures.push(`time outside track range for ${trackName}`);
        continue;
      }
      result.tracksChecked += 1;
      if (!valuesMatch(trackName, sample.value, expected)) {
        result.failures.push(`value mismatch for ${trackName}`);
      }
    }
  }
  result.pass = result.failures.length === 0;
  if (!result.pass) failures.push(poseName);
  poseResults[poseName] = result;
}

const report = {
  status: failures.length === 0 ? "PASS" : "FAIL",
  checkedAtUtc: new Date().toISOString(),
  files: { glb: glbPath, manifest: manifestPath },
  contract: {
    fps: manifest.poseSampling?.fps ?? null,
    timeFormula: manifest.poseSampling?.timeFormula ?? null,
    runtimeRule: manifest.poseSampling?.runtimeRule ?? null,
    method: "Evaluate each required track at manifest timeSeconds and compare transforms; exact keys are not required and keyframe-array indexes are never used.",
  },
  poses: poseResults,
  failedPoses: failures,
};
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ status: report.status, report: reportPath, failedPoses: failures }));
if (failures.length > 0) process.exitCode = 1;
