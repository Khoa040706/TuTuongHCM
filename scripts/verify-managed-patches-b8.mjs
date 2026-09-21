import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

const repoRoot = process.cwd();
const outputPath = path.resolve(
  process.argv[2] || "artifacts/homepage-3d/b8/managed-patch-verification.json",
);

const cases = [
  {
    name: "three",
    script: "scripts/apply-three-dfg-lut-patch.mjs",
    packageRoot: "node_modules/three",
    targets: [
      "package.json",
      "src/renderers/shaders/DFGLUTData.js",
      "src/renderers/WebGLRenderer.js",
      "build/three.module.js",
      "build/three.cjs",
    ],
    tamperTarget: "src/renderers/shaders/DFGLUTData.js",
  },
  {
    name: "r3f",
    script: "scripts/apply-r3f-teardown-patch.mjs",
    packageRoot: "node_modules/@react-three/fiber",
    targets: [
      "package.json",
      "dist/events-156d8d12.esm.js",
      "dist/events-4c71f21f.cjs.prod.js",
      "dist/events-b1bdeb1a.cjs.dev.js",
    ],
    tamperTarget: "dist/events-156d8d12.esm.js",
  },
];

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function run(script, packageRoot, args = []) {
  const commandArgs = [path.resolve(repoRoot, script), "--package-root", packageRoot, ...args];
  const result = spawnSync(process.execPath, commandArgs, {
    cwd: repoRoot,
    encoding: "utf8",
    windowsHide: true,
  });
  return {
    args,
    exitCode: result.status,
    stdout: result.stdout.trim(),
    stderr: result.stderr.trim(),
  };
}

function requirePass(result, label) {
  if (result.exitCode !== 0) throw new Error(`${label} failed: ${result.stderr || result.stdout}`);
  return result;
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "studymaster-b8-patches-"));
const results = [];
try {
  for (const item of cases) {
    const sourceRoot = path.resolve(repoRoot, item.packageRoot);
    const copyRoot = path.join(tempRoot, item.name);
    for (const relative of item.targets) {
      const source = path.join(sourceRoot, relative);
      const target = path.join(copyRoot, relative);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(source, target);
    }

    const liveBefore = Object.fromEntries(
      item.targets.filter((entry) => entry !== "package.json").map((entry) => [entry, sha256(path.join(sourceRoot, entry))]),
    );
    const liveCheck = requirePass(run(item.script, sourceRoot, ["--check"]), `${item.name} live check`);
    const liveAlreadyPatched = requirePass(run(item.script, sourceRoot), `${item.name} live already-patched`);
    const liveAfter = Object.fromEntries(
      item.targets.filter((entry) => entry !== "package.json").map((entry) => [entry, sha256(path.join(sourceRoot, entry))]),
    );
    if (JSON.stringify(liveBefore) !== JSON.stringify(liveAfter)) {
      throw new Error(`${item.name} already-patched run changed installed dependency bytes`);
    }

    const rollback = requirePass(run(item.script, copyRoot, ["--reverse"]), `${item.name} isolated rollback`);
    const apply = requirePass(run(item.script, copyRoot), `${item.name} isolated apply`);
    const check = requirePass(run(item.script, copyRoot, ["--check"]), `${item.name} isolated check`);
    const alreadyPatched = requirePass(run(item.script, copyRoot), `${item.name} isolated already-patched`);

    fs.appendFileSync(path.join(copyRoot, item.tamperTarget), "\n// B8 tamper probe\n");
    const tamperCheck = run(item.script, copyRoot, ["--check"]);
    if (tamperCheck.exitCode === 0 || !/hash mismatch/.test(tamperCheck.stderr)) {
      throw new Error(`${item.name} tamper probe was not rejected by complete hash verification`);
    }

    results.push({
      name: item.name,
      liveHashes: liveAfter,
      liveCheck: JSON.parse(liveCheck.stdout),
      liveAlreadyPatched: JSON.parse(liveAlreadyPatched.stdout),
      isolated: {
        rollback: JSON.parse(rollback.stdout),
        apply: JSON.parse(apply.stdout),
        check: JSON.parse(check.stdout),
        alreadyPatched: JSON.parse(alreadyPatched.stdout),
        tamperRejected: true,
        tamperError: tamperCheck.stderr.split(/\r?\n/)[0],
      },
    });
  }
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}

const report = {
  schemaVersion: "studymaster-b8-managed-patch-verification-v1",
  generatedAt: new Date().toISOString(),
  pass: true,
  guarantees: [
    "--check verifies every managed patched-file SHA-256",
    "already-patched verifies every managed patched-file SHA-256 and is byte-idempotent",
    "rollback verifies upstream original hashes",
    "apply verifies complete patched output hashes",
    "tampered patched file is rejected",
  ],
  results,
};
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ outputPath, pass: report.pass, cases: results.map((item) => item.name) }, null, 2));
