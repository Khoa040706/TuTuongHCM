import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const PATCH_ID = "studymaster-three-r185-dfg-lut-owner-v2";
const EXPECTED_VERSION = "0.185.1";
const args = process.argv.slice(2);
const rootFlag = args.indexOf("--package-root");
const packageRoot = path.resolve(
  rootFlag >= 0 ? args[rootFlag + 1] : path.join(process.cwd(), "node_modules", "three"),
);
const reverse = args.includes("--reverse");
const checkOnly = args.includes("--check");

if (rootFlag >= 0 && !args[rootFlag + 1]) throw new Error("--package-root requires a path");
if (reverse && checkOnly) throw new Error("Use either --reverse or --check, not both");

const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const originalHashes = {
  "src/renderers/shaders/DFGLUTData.js": "4a6e5e13121a71227524272d63e38adc9f6b3ecad9265f7bb001a0cd8b8990c4",
  "src/renderers/WebGLRenderer.js": "867948b57a6abb84d4cfd7619b38ea14fbb2c100c1b6f78d59de2383662ab7a0",
  "build/three.module.js": "bbf5ed13fe4373f5bd38b14ea8e62e9f157327da5638edc6d3863e08b167c9c7",
  "build/three.cjs": "a681da9aba775c1de422367863efda9e5638847e6e1fccc51ba57e8a8124fc07",
};
const patchedHashes = {
  "src/renderers/shaders/DFGLUTData.js": "516de13b053eb01a9037a4cf7935915c7ae8452e93e68fcdfb9de2d1e7d8f0a4",
  "src/renderers/WebGLRenderer.js": "6715f8258f5936fe38c2135cc1ff999eed1d604d550a5e3ab5931d701504cc29",
  "build/three.module.js": "811a499d7a2d8c5fee0995047aea4c43155e89e9ee188f50259008c889222cfd",
  "build/three.cjs": "4661d7ea09503eae119e97b3cb2a00a55ed7ce05e2a984f1d8cdad6a777025c8",
};

const originalLutSource = `let lut = null;

export function getDFGLUT() {

\tif ( lut === null ) {

\t\tlut = new DataTexture( DATA, 16, 16, RGFormat, HalfFloatType );
\t\tlut.name = 'DFG_LUT';
\t\tlut.minFilter = LinearFilter;
\t\tlut.magFilter = LinearFilter;
\t\tlut.wrapS = ClampToEdgeWrapping;
\t\tlut.wrapT = ClampToEdgeWrapping;
\t\tlut.generateMipmaps = false;
\t\tlut.needsUpdate = true;

\t}

\treturn lut;

}`;

const patchedLutSource = `export function createDFGLUT() {

\tconst lut = new DataTexture( DATA, 16, 16, RGFormat, HalfFloatType );
\tlut.name = 'DFG_LUT';
\tlut.minFilter = LinearFilter;
\tlut.magFilter = LinearFilter;
\tlut.wrapS = ClampToEdgeWrapping;
\tlut.wrapT = ClampToEdgeWrapping;
\tlut.generateMipmaps = false;
\tlut.needsUpdate = true;

\treturn lut;

}`;

const originalLutBuild = originalLutSource.replace("export function", "function");
const patchedLutBuild = patchedLutSource.replace("export function", "function");

const rendererTransforms = [
  {
    before: "import { getDFGLUT } from './shaders/DFGLUTData.js';",
    after: "import { createDFGLUT } from './shaders/DFGLUTData.js';",
  },
  {
    before: "\t\tlet _nodesHandler = null;\n\n\t\tlet _scratchFramebuffer = null;",
    after: `\t\tlet _nodesHandler = null;
\t\t// ${PATCH_ID}: the LUT is owned by this renderer, not by the module.
\t\tlet _dfgLUT = null;
\t\tconst _trackedMaterials = new Set();

\t\tlet _scratchFramebuffer = null;`,
  },
  {
    before: "\t\t\tcanvas.removeEventListener( 'webglcontextcreationerror', onContextCreationError, false );\n\n\t\t\tbackground.dispose();",
    after: `\t\t\tcanvas.removeEventListener( 'webglcontextcreationerror', onContextCreationError, false );

\t\t\tif ( _dfgLUT !== null ) {

\t\t\t\t_dfgLUT.dispose();
\t\t\t\t_dfgLUT = null;

\t\t\t}

\t\t\tfor ( const material of _trackedMaterials ) {

\t\t\t\tmaterial.removeEventListener( 'dispose', onMaterialDispose );
\t\t\t\tdeallocateMaterial( material );

\t\t\t}

\t\t\t_trackedMaterials.clear();

\t\t\tbackground.dispose();`,
  },
  {
    before: `\t\tfunction onMaterialDispose( event ) {

\t\t\tconst material = event.target;

\t\t\tmaterial.removeEventListener( 'dispose', onMaterialDispose );

\t\t\tdeallocateMaterial( material );

\t\t}`,
    after: `\t\tfunction onMaterialDispose( event ) {

\t\t\tconst material = event.target;

\t\t\tmaterial.removeEventListener( 'dispose', onMaterialDispose );
\t\t\t_trackedMaterials.delete( material );

\t\t\tdeallocateMaterial( material );

\t\t}`,
  },
  {
    before: `\t\t\tif ( programs === undefined ) {

\t\t\t\t// new material

\t\t\t\tmaterial.addEventListener( 'dispose', onMaterialDispose );

\t\t\t\tprograms = new Map();`,
    after: `\t\t\tif ( programs === undefined ) {

\t\t\t\t// new material

\t\t\t\tmaterial.addEventListener( 'dispose', onMaterialDispose );
\t\t\t\t_trackedMaterials.add( material );

\t\t\t\tprograms = new Map();`,
  },
  {
    before: "\t\t\t\tm_uniforms.dfgLUT.value = getDFGLUT();",
    after: `\t\t\t\tif ( _dfgLUT === null ) _dfgLUT = createDFGLUT();
\t\t\t\tm_uniforms.dfgLUT.value = _dfgLUT;`,
  },
];

const buildTransforms = [
  { before: originalLutBuild, after: patchedLutBuild },
  {
    before: "\t\tlet _nodesHandler = null;\n\n\t\tlet _scratchFramebuffer = null;",
    after: `\t\tlet _nodesHandler = null;
\t\t// ${PATCH_ID}: the LUT is owned by this renderer, not by the module.
\t\tlet _dfgLUT = null;
\t\tconst _trackedMaterials = new Set();

\t\tlet _scratchFramebuffer = null;`,
  },
  {
    before: "\t\t\tcanvas.removeEventListener( 'webglcontextcreationerror', onContextCreationError, false );\n\n\t\t\tbackground.dispose();",
    after: `\t\t\tcanvas.removeEventListener( 'webglcontextcreationerror', onContextCreationError, false );

\t\t\tif ( _dfgLUT !== null ) {

\t\t\t\t_dfgLUT.dispose();
\t\t\t\t_dfgLUT = null;

\t\t\t}

\t\t\tfor ( const material of _trackedMaterials ) {

\t\t\t\tmaterial.removeEventListener( 'dispose', onMaterialDispose );
\t\t\t\tdeallocateMaterial( material );

\t\t\t}

\t\t\t_trackedMaterials.clear();

\t\t\tbackground.dispose();`,
  },
  {
    before: `\t\tfunction onMaterialDispose( event ) {

\t\t\tconst material = event.target;

\t\t\tmaterial.removeEventListener( 'dispose', onMaterialDispose );

\t\t\tdeallocateMaterial( material );

\t\t}`,
    after: `\t\tfunction onMaterialDispose( event ) {

\t\t\tconst material = event.target;

\t\t\tmaterial.removeEventListener( 'dispose', onMaterialDispose );
\t\t\t_trackedMaterials.delete( material );

\t\t\tdeallocateMaterial( material );

\t\t}`,
  },
  {
    before: `\t\t\tif ( programs === undefined ) {

\t\t\t\t// new material

\t\t\t\tmaterial.addEventListener( 'dispose', onMaterialDispose );

\t\t\t\tprograms = new Map();`,
    after: `\t\t\tif ( programs === undefined ) {

\t\t\t\t// new material

\t\t\t\tmaterial.addEventListener( 'dispose', onMaterialDispose );
\t\t\t\t_trackedMaterials.add( material );

\t\t\t\tprograms = new Map();`,
  },
  {
    before: "\t\t\t\tm_uniforms.dfgLUT.value = getDFGLUT();",
    after: `\t\t\t\tif ( _dfgLUT === null ) _dfgLUT = createDFGLUT();
\t\t\t\tm_uniforms.dfgLUT.value = _dfgLUT;`,
  },
];

const targets = [
  {
    relative: "src/renderers/shaders/DFGLUTData.js",
    transforms: [{ before: originalLutSource, after: patchedLutSource }],
  },
  { relative: "src/renderers/WebGLRenderer.js", transforms: rendererTransforms },
  { relative: "build/three.module.js", transforms: buildTransforms },
  { relative: "build/three.cjs", transforms: buildTransforms },
];

const packageJsonPath = path.join(packageRoot, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
if (packageJson.version !== EXPECTED_VERSION) {
  throw new Error(`Patch ${PATCH_ID} requires three ${EXPECTED_VERSION}; found ${packageJson.version}`);
}

function occurrenceCount(source, value) {
  return source.split(value).length - 1;
}

const results = [];
for (const target of targets) {
  const file = path.join(packageRoot, target.relative);
  let source = fs.readFileSync(file, "utf8");
  const beforeHash = sha256(source);
  const hasAllOriginal = target.transforms.every(({ before }) => occurrenceCount(source, before) === 1);
  const hasAllPatched = target.transforms.every(({ after }) => occurrenceCount(source, after) === 1);

  if (checkOnly) {
    if (!hasAllPatched) throw new Error(`${target.relative} is not patched with ${PATCH_ID}`);
    if (beforeHash !== patchedHashes[target.relative]) {
      throw new Error(`${target.relative} patched hash mismatch: ${beforeHash}`);
    }
    results.push({ file: target.relative, status: "patched", sha256: beforeHash });
    continue;
  }

  if (reverse) {
    if (!hasAllPatched || hasAllOriginal) throw new Error(`${target.relative} is not in the expected patched state`);
    for (const { before, after } of [...target.transforms].reverse()) source = source.replace(after, before);
    const restoredHash = sha256(source);
    if (restoredHash !== originalHashes[target.relative]) {
      throw new Error(`${target.relative} rollback hash mismatch: ${restoredHash}`);
    }
    fs.writeFileSync(file, source);
    results.push({ file: target.relative, status: "restored", sha256: restoredHash });
    continue;
  }

  if (hasAllPatched && !hasAllOriginal) {
    if (beforeHash !== patchedHashes[target.relative]) {
      throw new Error(`${target.relative} already-patched hash mismatch: ${beforeHash}`);
    }
    results.push({ file: target.relative, status: "already-patched", sha256: beforeHash });
    continue;
  }
  if (!hasAllOriginal || hasAllPatched) {
    throw new Error(`${target.relative} does not match the expected original or patched state`);
  }
  if (beforeHash !== originalHashes[target.relative]) {
    throw new Error(`${target.relative} upstream hash mismatch: ${beforeHash}`);
  }
  for (const { before, after } of target.transforms) source = source.replace(before, after);
  const patchedHash = sha256(source);
  if (patchedHash !== patchedHashes[target.relative]) {
    throw new Error(`${target.relative} patched output hash mismatch: ${patchedHash}`);
  }
  fs.writeFileSync(file, source);
  results.push({ file: target.relative, status: "patched", sha256: patchedHash });
}

console.log(JSON.stringify({
  patchId: PATCH_ID,
  threeVersion: packageJson.version,
  packageRoot,
  mode: checkOnly ? "check" : reverse ? "rollback" : "apply",
  results,
}, null, 2));
