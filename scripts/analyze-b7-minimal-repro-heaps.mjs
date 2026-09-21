import fs from "node:fs";
import path from "node:path";

const beforeFile = path.resolve(process.argv[2]);
const afterFile = path.resolve(process.argv[3]);
const outputFile = path.resolve(process.argv[4]);

function decode(file) {
  const heap = JSON.parse(fs.readFileSync(file, "utf8"));
  const nodeFields = heap.snapshot.meta.node_fields;
  const edgeFields = heap.snapshot.meta.edge_fields;
  const nodeTypes = heap.snapshot.meta.node_types[0];
  const edgeTypes = heap.snapshot.meta.edge_types[0];
  const nf = Object.fromEntries(nodeFields.map((name, index) => [name, index]));
  const ef = Object.fromEntries(edgeFields.map((name, index) => [name, index]));
  const nodeStride = nodeFields.length;
  const edgeStride = edgeFields.length;
  const nodes = new Array(heap.nodes.length / nodeStride);
  let edgeStart = 0;
  for (let index = 0; index < nodes.length; index += 1) {
    const offset = index * nodeStride;
    const edgeCount = heap.nodes[offset + nf.edge_count];
    nodes[index] = {
      index, id: heap.nodes[offset + nf.id], type: nodeTypes[heap.nodes[offset + nf.type]],
      name: heap.strings[heap.nodes[offset + nf.name]], selfSize: heap.nodes[offset + nf.self_size],
      detachedness: nf.detachedness == null ? 0 : heap.nodes[offset + nf.detachedness], edgeStart, edgeCount,
    };
    edgeStart += edgeCount * edgeStride;
  }
  return { heap, nodes, edgeTypes, nf, ef, nodeStride, edgeStride };
}

function edgeDetails(decoded, offset) {
  const type = decoded.edgeTypes[decoded.heap.edges[offset + decoded.ef.type]];
  const raw = decoded.heap.edges[offset + decoded.ef.name_or_index];
  return { type, name: type === "element" || type === "hidden" ? String(raw) : decoded.heap.strings[raw] };
}

function outgoingProperties(decoded, nodeIndex, limit = 80) {
  const node = decoded.nodes[nodeIndex];
  const result = [];
  const end = node.edgeStart + node.edgeCount * decoded.edgeStride;
  for (let offset = node.edgeStart; offset < end && result.length < limit; offset += decoded.edgeStride) {
    const edge = edgeDetails(decoded, offset);
    const targetIndex = decoded.heap.edges[offset + decoded.ef.to_node] / decoded.nodeStride;
    const target = decoded.nodes[targetIndex];
    result.push({ edge, target: { index: target.index, id: target.id, type: target.type, name: target.name, selfSize: target.selfSize } });
  }
  return result;
}

function strongPathsFromRoot(decoded, targetIndexes, { skipEphemerons = false } = {}) {
  const previous = new Int32Array(decoded.nodes.length); previous.fill(-2); previous[0] = -1;
  const previousEdge = new Int32Array(decoded.nodes.length); previousEdge.fill(-1);
  const queue = new Int32Array(decoded.nodes.length); let head = 0; let tail = 0; queue[tail++] = 0;
  const unresolved = new Set(targetIndexes);
  while (head < tail && unresolved.size) {
    const fromIndex = queue[head++]; const from = decoded.nodes[fromIndex];
    const end = from.edgeStart + from.edgeCount * decoded.edgeStride;
    for (let offset = from.edgeStart; offset < end; offset += decoded.edgeStride) {
      const details = edgeDetails(decoded, offset);
      if (details.type === "weak") continue;
      if (skipEphemerons && /WeakMap|part of key .* value .* pair/i.test(details.name)) continue;
      const to = decoded.heap.edges[offset + decoded.ef.to_node] / decoded.nodeStride;
      if (previous[to] !== -2) continue;
      previous[to] = fromIndex; previousEdge[to] = offset; queue[tail++] = to; unresolved.delete(to);
    }
  }
  const result = new Map();
  for (const target of targetIndexes) {
    if (previous[target] === -2) { result.set(target, null); continue; }
    const pathItems = []; let current = target;
    while (current !== 0 && current !== -1) {
      const parent = previous[current]; const edge = previousEdge[current];
      pathItems.push({ node: decoded.nodes[current], retainedBy: edge >= 0 ? { ...edgeDetails(decoded, edge), node: decoded.nodes[parent] } : null });
      current = parent;
    }
    result.set(target, pathItems);
  }
  return result;
}

const before = decode(beforeFile);
const after = decode(afterFile);
const beforeIds = new Set(before.nodes.map((node) => node.id));
const newNodes = after.nodes.filter((node) => !beforeIds.has(node.id));
const groups = new Map();
for (const node of newNodes) {
  const key = `${node.type}\u0000${node.name}\u0000${node.detachedness > 0 ? 1 : 0}`;
  const group = groups.get(key) || { type: node.type, name: node.name, detached: node.detachedness > 0, count: 0, selfSize: 0 };
  group.count += 1; group.selfSize += node.selfSize; groups.set(key, group);
}
const newGrowth = [...groups.values()].sort((left, right) => right.selfSize - left.selfSize || right.count - left.count);
const targetMatchers = [
  ["home-story", (node) => node.detachedness > 0 && node.type === "native" && /<main id=\"home-story\"/.test(node.name)],
  ["home-svg", (node) => node.detachedness > 0 && node.type === "native" && /SVG(?:SVG|Path|Text|Rect|G)Element/.test(node.name)],
  ["label-canvas", (node) => node.detachedness > 0 && node.type === "native" && /<canvas width=\"512\" height=\"256\">/.test(node.name)],
  ["detached-canvas", (node) => node.detachedness > 0 && node.type === "native" && /<canvas/.test(node.name)],
  ["webgl-context", (node) => node.type === "native" && /WebGL2?RenderingContext/.test(node.name)],
  ["webgl-buffer", (node) => node.type === "native" && node.name === "WebGLBuffer"],
  ["webgl-texture", (node) => node.type === "native" && node.name === "WebGLTexture"],
];
const targets = targetMatchers.map(([label, matcher]) => ({ label, node: newNodes.find(matcher) })).filter((entry) => entry.node);
const paths = strongPathsFromRoot(after, targets.map((entry) => entry.node.index));
const strictPaths = strongPathsFromRoot(after, targets.map((entry) => entry.node.index), { skipEphemerons: true });
const result = {
  generatedAt: new Date().toISOString(), beforeFile: path.basename(beforeFile), afterFile: path.basename(afterFile),
  method: "Compare stable heap node IDs, select objects first appearing after five rounds, then breadth-first paths from GC root excluding weak edges.",
  caveat: "A strong path proves reachability in this snapshot, not causal ownership. Weak edges are reported separately by omission and are not treated as proof.",
  newNodeCount: newNodes.length, newGrowth: newGrowth.slice(0, 80),
  targets: targets.map(({ label, node }) => ({
    label,
    candidate: node,
    strongPathFromGcRoot: paths.get(node.index),
    strongPathWithoutWeakMapEphemerons: strictPaths.get(node.index),
  })),
};
result.listenerOwners = [];
for (const target of result.targets.filter((item) => ["home-story", "home-svg", "label-canvas"].includes(item.label))) {
  const path = target.strongPathWithoutWeakMapEphemerons || [];
  for (const item of path) {
    if (item.retainedBy?.name !== "_listeners") continue;
    const owner = item.retainedBy.node;
    if (result.listenerOwners.some((entry) => entry.node.id === owner.id)) continue;
    result.listenerOwners.push({
      observedFrom: target.label,
      node: owner,
      outgoing: outgoingProperties(after, owner.index),
    });
  }
}
const normalizedPaths = result.targets
  .filter((target) => ["home-story", "home-svg", "label-canvas"].includes(target.label))
  .map((target) => new Set((target.strongPathFromGcRoot || []).map((item) => `${item.node.type}\u0000${item.node.name}`)));
result.commonOwnerSignatures = normalizedPaths.length === 3
  ? [...normalizedPaths[0]].filter((signature) => normalizedPaths.slice(1).every((pathSet) => pathSet.has(signature)))
      .map((signature) => { const [type, name] = signature.split("\u0000"); return { type, name }; })
  : [];
fs.writeFileSync(outputFile, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ outputFile, newNodeCount: result.newNodeCount, targets: result.targets.map((target) => ({ label: target.label, pathLength: target.strongPathFromGcRoot?.length ?? null })) }, null, 2));
