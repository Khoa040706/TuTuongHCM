import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const outputPath = path.resolve(
  process.argv[2] || "artifacts/homepage-3d/b8/release-manifest.json",
);
const sourceRoots = ["app", "components", "data", "hooks", "lib"];
const sourceExtensions = new Set([".css", ".js", ".json", ".mjs"]);
const sourceSingles = [
  "package.json",
  "package-lock.json",
  "next.config.mjs",
  "postcss.config.mjs",
  "scripts/apply-three-dfg-lut-patch.mjs",
  "scripts/apply-r3f-teardown-patch.mjs",
  "patches/three-0.185.1-dfg-lut-lifecycle.patch",
  "patches/react-three-fiber-9.7.0-deterministic-teardown.patch",
];

function sha256Buffer(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function record(relative) {
  const absolute = path.join(root, relative);
  const value = fs.readFileSync(absolute);
  return { path: relative.replaceAll("\\", "/"), bytes: value.length, sha256: sha256Buffer(value) };
}

function walk(relative) {
  const absolute = path.join(root, relative);
  if (!fs.existsSync(absolute)) return [];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) return walk(child);
    return sourceExtensions.has(path.extname(entry.name)) ? [child] : [];
  });
}

const sourcePaths = [...new Set([
  ...sourceRoots.flatMap(walk),
  ...sourceSingles.filter((relative) => fs.existsSync(path.join(root, relative))),
])].sort((left, right) => left.localeCompare(right));
const sourceFiles = sourcePaths.map(record);
const sourceDigestInput = sourceFiles.map((item) => `${item.path}\0${item.sha256}\n`).join("");

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const dependencyTargets = [
  "node_modules/three/src/renderers/shaders/DFGLUTData.js",
  "node_modules/three/src/renderers/WebGLRenderer.js",
  "node_modules/three/build/three.module.js",
  "node_modules/three/build/three.cjs",
  "node_modules/@react-three/fiber/dist/events-156d8d12.esm.js",
  "node_modules/@react-three/fiber/dist/events-4c71f21f.cjs.prod.js",
  "node_modules/@react-three/fiber/dist/events-b1bdeb1a.cjs.dev.js",
].map(record);
const dependencyDigestInput = dependencyTargets.map((item) => `${item.path}\0${item.sha256}\n`).join("");

const glb = record("public/assets/home/cancer-knowledge-machine/cancer-machine.glb");
const homeAssetTargets = [
  "public/assets/home/cancer-knowledge-machine/model-manifest.json",
  "public/assets/home/cancer-knowledge-machine/cancer-machine-fallback.png",
  "public/assets/home/cancer-knowledge-machine/LICENSE-model.md",
  "public/assets/diagrams/atm_activity_diagram.png",
].filter((relative) => fs.existsSync(path.join(root, relative))).map(record);
const pageChunk = fs.existsSync(path.join(root, ".next/static/chunks/app"))
  ? fs.readdirSync(path.join(root, ".next/static/chunks/app"))
      .filter((name) => /^page-.*\.js$/.test(name))
      .sort()
      .map((name) => record(path.join(".next/static/chunks/app", name)))
  : [];
const buildId = fs.readFileSync(path.join(root, ".next/BUILD_ID"), "utf8").trim();
const runtimeSourceSha256 = sha256Buffer(sourceDigestInput);
const dependencySha256 = sha256Buffer(dependencyDigestInput);
let gitHead = null;
let dirtyPathCount = null;
try {
  gitHead = execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
  dirtyPathCount = execFileSync("git", ["status", "--porcelain"], { cwd: root, encoding: "utf8" })
    .split(/\r?\n/).filter(Boolean).length;
} catch {
  // Manifest remains useful outside a Git worktree.
}

const manifest = {
  schemaVersion: "studymaster-b8-release-manifest-v1",
  generatedAt: new Date().toISOString(),
  candidateId: `b8-${buildId}-${runtimeSourceSha256.slice(0, 12)}`,
  build: {
    id: buildId,
    nextVersion: packageJson.dependencies.next,
    pageChunks: pageChunk,
    serviceWorker: fs.existsSync(path.join(root, "public/sw.js")) ? record("public/sw.js") : null,
  },
  source: {
    sha256: runtimeSourceSha256,
    fileCount: sourceFiles.length,
    files: sourceFiles,
  },
  dependency: {
    sha256: dependencySha256,
    versions: {
      three: JSON.parse(fs.readFileSync(path.join(root, "node_modules/three/package.json"), "utf8")).version,
      reactThreeFiber: JSON.parse(fs.readFileSync(path.join(root, "node_modules/@react-three/fiber/package.json"), "utf8")).version,
      react: packageJson.dependencies.react,
      next: packageJson.dependencies.next,
    },
    managedFiles: dependencyTargets,
  },
  model: { revision: "B5B", ...glb },
  supportingAssets: homeAssetTargets,
  git: {
    head: gitHead,
    dirty: dirtyPathCount == null ? null : dirtyPathCount > 0,
    dirtyPathCount,
    note: "The shared worktree contains pre-existing user changes; this candidate is locked by file hashes rather than by a clean commit.",
  },
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({
  outputPath,
  candidateId: manifest.candidateId,
  buildId,
  sourceFiles: sourceFiles.length,
  runtimeSourceSha256,
  dependencySha256,
  glbSha256: glb.sha256,
}, null, 2));
