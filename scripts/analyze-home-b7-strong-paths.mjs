import fs from "node:fs";
import path from "node:path";

const snapshotFile = path.resolve(process.argv[2]);
const outputFile = path.resolve(process.argv[3]);
const heap = JSON.parse(fs.readFileSync(snapshotFile, "utf8"));
const nodeFields = heap.snapshot.meta.node_fields;
const edgeFields = heap.snapshot.meta.edge_fields;
const nodeTypes = heap.snapshot.meta.node_types[0];
const edgeTypes = heap.snapshot.meta.edge_types[0];
const nf = Object.fromEntries(nodeFields.map((name, index) => [name, index]));
const ef = Object.fromEntries(edgeFields.map((name, index) => [name, index]));
const nodeStride = nodeFields.length;
const edgeStride = edgeFields.length;
const nodeCount = heap.nodes.length / nodeStride;
const nodes = new Array(nodeCount);
let edgeStart = 0;

for (let index = 0; index < nodeCount; index += 1) {
  const offset = index * nodeStride;
  const edgeCount = heap.nodes[offset + nf.edge_count];
  nodes[index] = {
    index,
    id: heap.nodes[offset + nf.id],
    type: nodeTypes[heap.nodes[offset + nf.type]],
    name: heap.strings[heap.nodes[offset + nf.name]],
    detachedness: nf.detachedness == null ? 0 : heap.nodes[offset + nf.detachedness],
    edgeStart,
    edgeCount,
  };
  edgeStart += edgeCount * edgeStride;
}

const matchers = [
  ["home-root", (node) => node.detachedness > 0 && /id=\"home-story\"/.test(node.name)],
  ["webgl-canvas", (node) => node.detachedness > 0 && /data-engine=\"three\.js/.test(node.name)],
  ["label-canvas", (node) => node.detachedness > 0 && /<canvas width=\"512\" height=\"256\">/.test(node.name)],
  ["home-svg-path", (node) => node.detachedness > 0 && node.name === "SVGPathElement"],
  ["subject-card", (node) => node.detachedness > 0 && /bento-subject-card/.test(node.name)],
];
const targets = new Map();
for (const [label, matches] of matchers) {
  const found = nodes.find(matches);
  if (found) targets.set(found.index, label);
}

const previous = new Int32Array(nodeCount);
const previousEdge = new Int32Array(nodeCount);
previous.fill(-2);
previousEdge.fill(-1);
const queue = new Int32Array(nodeCount);
let head = 0;
let tail = 0;
queue[tail++] = 0;
previous[0] = -1;
const unresolved = new Set(targets.keys());

while (head < tail && unresolved.size) {
  const fromIndex = queue[head++];
  const from = nodes[fromIndex];
  const end = from.edgeStart + from.edgeCount * edgeStride;
  for (let edge = from.edgeStart; edge < end; edge += edgeStride) {
    const edgeType = edgeTypes[heap.edges[edge + ef.type]];
    if (edgeType === "weak") continue;
    const toIndex = heap.edges[edge + ef.to_node] / nodeStride;
    if (previous[toIndex] !== -2) continue;
    previous[toIndex] = fromIndex;
    previousEdge[toIndex] = edge;
    queue[tail++] = toIndex;
    unresolved.delete(toIndex);
  }
}

function edgeDetails(offset) {
  const type = edgeTypes[heap.edges[offset + ef.type]];
  const raw = heap.edges[offset + ef.name_or_index];
  return {
    type,
    name: type === "element" || type === "hidden" ? String(raw) : heap.strings[raw],
  };
}

function serializeNode(node) {
  return { index: node.index, id: node.id, type: node.type, name: node.name, detachedness: node.detachedness };
}

const results = [...targets.entries()].map(([targetIndex, label]) => {
  if (previous[targetIndex] === -2) return { label, found: true, rooted: false, path: [] };
  const reversed = [];
  let current = targetIndex;
  while (current !== -1) {
    const parent = previous[current];
    reversed.push({
      node: serializeNode(nodes[current]),
      edgeFromParent: parent >= 0 ? edgeDetails(previousEdge[current]) : null,
    });
    current = parent;
  }
  return { label, found: true, rooted: true, path: reversed.reverse() };
});
for (const [label] of matchers) {
  if (!results.some((item) => item.label === label)) results.push({ label, found: false, rooted: false, path: [] });
}

const output = {
  generatedAt: new Date().toISOString(),
  snapshot: path.basename(snapshotFile),
  method: "breadth-first traversal from synthetic heap root; weak edges excluded",
  visitedNodes: tail,
  nodeCount,
  results,
};
fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify({ outputFile, visitedNodes: tail, results: results.map(({ label, found, rooted, path: value }) => ({ label, found, rooted, pathLength: value.length })) }, null, 2));
