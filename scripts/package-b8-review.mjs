import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import archiver from "archiver";
import unzipper from "unzipper";

const root = process.cwd();
const zipPath = path.resolve("studymaster-b8-review.zip");
const b8Root = "artifacts/homepage-3d/b8";
const explicitFiles = [
  "app/globals.css",
  "components/home/B7DiagnosticCanvas.js",
  "patches/three-0.185.1-dfg-lut-lifecycle.patch",
  "patches/react-three-fiber-9.7.0-deterministic-teardown.patch",
  "scripts/apply-three-dfg-lut-patch.mjs",
  "scripts/apply-r3f-teardown-patch.mjs",
  "scripts/verify-managed-patches-b8.mjs",
  "scripts/create-b8-release-manifest.mjs",
  "scripts/verify-home-b8-browser.mjs",
  "scripts/verify-home-b8-accessibility.mjs",
  "scripts/package-b8-review.mjs",
  "package.json",
  "package-lock.json",
  "plan.md",
  "plans/homepage-3d/07-integration-performance.md",
  "plans/homepage-3d/08-qa-handoff.md",
  "plans/homepage-3d/requirements-traceability.md",
  "public/assets/home/cancer-knowledge-machine/model-manifest.json",
  "public/assets/home/cancer-knowledge-machine/LICENSE-model.md",
  "artifacts/homepage-3d/b7/closeout-review/b7-closeout-verification.md",
  "artifacts/homepage-3d/b7/closeout-review/closeout-summary.json",
  "artifacts/homepage-3d/b7/closeout/r3f-teardown-harness/run2/result.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/retention-diagnosis.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/material-listener-analysis-baseline.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/material-listener-analysis-final.json",
  "artifacts/homepage-3d/b7/closeout/production-retention-intel/heap-delta-evidence.json",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/browser-verification.json",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/closeout-s01-1366x768.png",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/closeout-reduced-motion-s06-1366x768.png",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/closeout-model-fallback-s06-1366x768.png",
  "artifacts/homepage-3d/b7/closeout/production-regression-intel/closeout-zoom-200.png"
];

function walk(relative) {
  const absolute = path.join(root, relative);
  if (!fs.existsSync(absolute)) return [];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    return entry.isDirectory() ? walk(child) : [child];
  });
}

const banned = /(^|[\\/])(node_modules|\.next|\.git|chrome-profile|cache)([\\/]|$)|(^|[\\/])\.env(?:\.|$)|credential|user-data|\.heapsnapshot$|\.glb$|\.blend1?$|studymaster-.*-review\.zip$/i;
const files = new Set(explicitFiles);
for (const file of walk(b8Root)) files.add(file);
files.delete(`${b8Root}/evidence-index.json`);

const normalized = [...files].map((file) => file.replaceAll("\\", "/")).sort();
for (const relative of normalized) {
  if (banned.test(relative)) throw new Error(`Banned path selected: ${relative}`);
  const absolute = path.join(root, relative);
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) throw new Error(`Missing file: ${relative}`);
}

const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const evidenceIndex = {
  schemaVersion: "studymaster-b8-evidence-index-v1",
  generatedAt: new Date().toISOString(),
  candidateId: "b8-I2Mm0biBhvFAn_EPavk2i-45808f541d79",
  files: normalized.map((relative) => {
    const value = fs.readFileSync(path.join(root, relative));
    return { path: relative, bytes: value.length, sha256: sha256(value) };
  }),
};
const evidenceIndexPath = path.join(root, b8Root, "evidence-index.json");
fs.writeFileSync(evidenceIndexPath, `${JSON.stringify(evidenceIndex, null, 2)}\n`);
normalized.push(`${b8Root}/evidence-index.json`);
normalized.sort();

const packageManifest = {
  schemaVersion: "studymaster-b8-review-package-v1",
  generatedAt: new Date().toISOString(),
  status: "READY FOR REVIEW — RELEASE SIGN-OFF BLOCKED",
  candidateId: "b8-I2Mm0biBhvFAn_EPavk2i-45808f541d79",
  buildId: fs.readFileSync(path.join(root, ".next", "BUILD_ID"), "utf8").trim(),
  files: normalized,
  exclusions: [".env", "credentials", "user data", "node_modules", ".next", ".git", "Chrome profiles/cache", "heap snapshots", "GLB/Blender assets", "old review ZIPs"],
};

await new Promise((resolve, reject) => {
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });
  output.on("close", resolve);
  output.on("error", reject);
  archive.on("error", reject);
  archive.pipe(output);
  for (const relative of normalized) archive.file(path.join(root, relative), { name: relative });
  archive.append(`${JSON.stringify(packageManifest, null, 2)}\n`, { name: `${b8Root}/package-manifest.json` });
  archive.finalize();
});

const directory = await unzipper.Open.file(zipPath);
const zipFiles = directory.files.filter((entry) => entry.type !== "Directory");
const entries = zipFiles.map((entry) => entry.path);
const expectedEntries = new Set([...normalized, `${b8Root}/package-manifest.json`]);
if (entries.length !== expectedEntries.size) throw new Error(`ZIP entry count mismatch: ${entries.length} vs ${expectedEntries.size}`);
for (const entry of entries) {
  if (!expectedEntries.has(entry)) throw new Error(`Unexpected ZIP entry: ${entry}`);
  if (banned.test(entry)) throw new Error(`ZIP contains banned entry: ${entry}`);
}
for (const required of [
  `${b8Root}/README.md`,
  `${b8Root}/b8-verification.md`,
  `${b8Root}/ac01-ac17-matrix.md`,
  `${b8Root}/bugs-and-limitations.md`,
  `${b8Root}/release-manifest.json`,
  `${b8Root}/evidence-index.json`,
  `${b8Root}/browser/browser-verification.json`,
  `${b8Root}/accessibility-retest/accessibility-retest.json`,
  "scripts/apply-three-dfg-lut-patch.mjs",
  "scripts/apply-r3f-teardown-patch.mjs",
]) {
  if (!expectedEntries.has(required)) throw new Error(`ZIP verification missing: ${required}`);
}

for (const entry of zipFiles) {
  if (entry.path === `${b8Root}/package-manifest.json`) continue;
  const extracted = await entry.buffer();
  const source = fs.readFileSync(path.join(root, entry.path));
  if (sha256(extracted) !== sha256(source)) throw new Error(`ZIP content hash mismatch: ${entry.path}`);
}

const bytes = fs.statSync(zipPath).size;
const zipSha256 = sha256(fs.readFileSync(zipPath));
console.log(JSON.stringify({ zipPath, bytes, sha256: zipSha256, entries: entries.length, verified: true }, null, 2));
