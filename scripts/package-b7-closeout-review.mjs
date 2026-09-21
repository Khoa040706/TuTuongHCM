import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import archiver from "archiver";
import unzipper from "unzipper";

const root = process.cwd();
const zipPath = path.resolve("studymaster-b7-closeout-review.zip");
const explicitFiles = [
  "artifacts/homepage-3d/b7/closeout-review/README.md",
  "artifacts/homepage-3d/b7/closeout-review/b7-closeout-verification.md",
  "artifacts/homepage-3d/b7/closeout-review/closeout-summary.json",
  "artifacts/homepage-3d/b7/closeout-review/source-diff.md",
  "artifacts/homepage-3d/b7/closeout-review/prior-callback-owner-summary.json",
  "artifacts/homepage-3d/b7/closeout/r3f-teardown-harness/run2/result.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/retention-diagnosis.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/material-listener-analysis-baseline.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/material-listener-analysis-final.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/heap-delta-evidence.json",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/browser-verification.json",
  "artifacts/homepage-3d/b7/final/production-deferred650-memory-intel/material-listener-analysis-final.json",
  "patches/three-0.185.1-dfg-lut-lifecycle.patch",
  "patches/react-three-fiber-9.7.0-deterministic-teardown.patch",
  "scripts/apply-three-dfg-lut-patch.mjs",
  "scripts/apply-r3f-teardown-patch.mjs",
  "scripts/build-three-dfg-lut-harness.mjs",
  "scripts/run-three-dfg-lut-harness.mjs",
  "scripts/build-r3f-teardown-harness.mjs",
  "scripts/run-r3f-teardown-harness.mjs",
  "scripts/analyze-b7-material-listeners.mjs",
  "scripts/analyze-b7-minimal-repro-heaps.mjs",
  "scripts/analyze-b7-renderer-owner.mjs",
  "scripts/diagnose-home-b7-retention.mjs",
  "scripts/diagnose-home-b7-remount.mjs",
  "scripts/verify-home-b7-browser.mjs",
  "package.json",
  "package-lock.json",
  "plan.md",
  "plans/homepage-3d/07-integration-performance.md",
  "plans/homepage-3d/08-qa-handoff.md"
];
const recursiveRoots = ["components/home", "qa/b7-three-dfg-patch", "qa/b7-r3f-teardown"];
const imageRoot = "artifacts/homepage-3d/b7/closeout/production-regression-intel";

function walk(relative) {
  const absolute = path.join(root, relative);
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    return entry.isDirectory() ? walk(child) : [child];
  });
}

const files = new Set(explicitFiles);
for (const relative of recursiveRoots) for (const file of walk(relative)) files.add(file);
for (const entry of fs.readdirSync(path.join(root, imageRoot))) {
  if (entry.endsWith(".png")) files.add(path.join(imageRoot, entry));
}

const banned = /(^|[\\/])(node_modules|\.next|\.git|chrome-profile|cache)([\\/]|$)|(^|[\\/])\.env(?:\.|$)|credential|\.heapsnapshot$|\.glb$|\.blend1$/i;
const normalizedFiles = [...files].map((file) => file.replaceAll("\\", "/")).sort();
for (const relative of normalizedFiles) {
  if (banned.test(relative)) throw new Error(`Banned path selected: ${relative}`);
  const absolute = path.join(root, relative);
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) throw new Error(`Missing file: ${relative}`);
}

const manifest = {
  schemaVersion: "studymaster-b7-closeout-package-v1",
  generatedAt: new Date().toISOString(),
  status: "READY FOR REVIEW",
  buildId: fs.readFileSync(path.join(root, ".next", "BUILD_ID"), "utf8").trim(),
  files: normalizedFiles,
  exclusions: [".env", "credentials", "user data", "node_modules", ".next", ".git", "Chrome profiles/cache", "heap snapshots", "GLB/Blender assets"],
};

await new Promise((resolve, reject) => {
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });
  output.on("close", resolve);
  output.on("error", reject);
  archive.on("error", reject);
  archive.pipe(output);
  for (const relative of normalizedFiles) archive.file(path.join(root, relative), { name: relative });
  archive.append(`${JSON.stringify(manifest, null, 2)}\n`, { name: "artifacts/homepage-3d/b7/closeout-review/package-manifest.json" });
  archive.finalize();
});

const directory = await unzipper.Open.file(zipPath);
const entries = directory.files.filter((entry) => entry.type !== "Directory").map((entry) => entry.path);
const entrySet = new Set(entries);
for (const required of [
  "artifacts/homepage-3d/b7/closeout-review/README.md",
  "artifacts/homepage-3d/b7/closeout-review/b7-closeout-verification.md",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/browser-verification.json",
  "patches/three-0.185.1-dfg-lut-lifecycle.patch",
  "patches/react-three-fiber-9.7.0-deterministic-teardown.patch",
  "scripts/apply-three-dfg-lut-patch.mjs",
  "scripts/apply-r3f-teardown-patch.mjs",
]) {
  if (!entrySet.has(required)) throw new Error(`ZIP verification missing: ${required}`);
}
for (const entry of entries) if (banned.test(entry)) throw new Error(`ZIP contains banned entry: ${entry}`);
const bytes = fs.statSync(zipPath).size;
const sha256 = crypto.createHash("sha256").update(fs.readFileSync(zipPath)).digest("hex");
console.log(JSON.stringify({ zipPath, bytes, sha256, entries: entries.length, verified: true }, null, 2));
