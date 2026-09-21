import fs from "node:fs";
import path from "node:path";

const snapshotFile = path.resolve(process.argv[2]);
const outputFile = path.resolve(process.argv[3]);
const listenerId = Number(process.argv[4] || 0);
const heap = JSON.parse(fs.readFileSync(snapshotFile, "utf8"));
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
    index,
    id: heap.nodes[offset + nf.id],
    type: nodeTypes[heap.nodes[offset + nf.type]],
    name: heap.strings[heap.nodes[offset + nf.name]],
    selfSize: heap.nodes[offset + nf.self_size],
    detachedness: nf.detachedness == null ? 0 : heap.nodes[offset + nf.detachedness],
    edgeStart,
    edgeCount,
  };
  edgeStart += edgeCount * edgeStride;
}

function edgeAt(offset) {
  const type = edgeTypes[heap.edges[offset + ef.type]];
  const raw = heap.edges[offset + ef.name_or_index];
  return {
    type,
    name: type === "element" || type === "hidden" ? String(raw) : heap.strings[raw],
    target: nodes[heap.edges[offset + ef.to_node] / nodeStride],
  };
}

function outgoing(node) {
  const result = [];
  const end = node.edgeStart + node.edgeCount * edgeStride;
  for (let offset = node.edgeStart; offset < end; offset += edgeStride) result.push(edgeAt(offset));
  return result;
}

function summarize(node) {
  return node && {
    index: node.index,
    id: node.id,
    type: node.type,
    name: node.name,
    selfSize: node.selfSize,
    detachedness: node.detachedness,
  };
}

const listener = nodes.find((node) => node.id === listenerId);
if (!listener) throw new Error(`Listener node ${listenerId} was not found.`);

const previous = new Int32Array(nodes.length);
const previousEdge = new Array(nodes.length);
const depth = new Int16Array(nodes.length);
previous.fill(-2);
previous[listener.index] = -1;
const queue = new Int32Array(nodes.length);
let head = 0;
let tail = 0;
queue[tail++] = listener.index;
const maxDepth = 18;
const matches = [];
const matchPattern = /data-studymaster-renderer-id|WebGL(Renderer|Buffer|Texture|Program)|WebGL2RenderingContext|WebGLRenderingContext|MAT_AmberGlow|DFG_LUT|HTMLCanvasElement/i;

while (head < tail) {
  const fromIndex = queue[head++];
  const from = nodes[fromIndex];
  if (depth[fromIndex] >= maxDepth) continue;
  for (const edge of outgoing(from)) {
    if (edge.type === "weak" || previous[edge.target.index] !== -2) continue;
    previous[edge.target.index] = fromIndex;
    previousEdge[edge.target.index] = { type: edge.type, name: edge.name };
    depth[edge.target.index] = depth[fromIndex] + 1;
    queue[tail++] = edge.target.index;
    if (matchPattern.test(edge.target.name)) matches.push(edge.target.index);
  }
}

function pathTo(index) {
  const result = [];
  let current = index;
  while (current !== -1) {
    result.push({ node: summarize(nodes[current]), edgeFromParent: previousEdge[current] || null });
    current = previous[current];
  }
  return result.reverse();
}

const uniqueMatches = [...new Set(matches)]
  .map((index) => ({ target: summarize(nodes[index]), path: pathTo(index) }))
  .sort((a, b) => a.path.length - b.path.length)
  .slice(0, 160);
const context = outgoing(listener).find((edge) => edge.name === "context")?.target;
const result = {
  schemaVersion: "studymaster-b7-renderer-owner-v1",
  generatedAt: new Date().toISOString(),
  snapshot: path.basename(snapshotFile),
  listener: summarize(listener),
  listenerContext: summarize(context),
  contextEdges: context
    ? outgoing(context).filter((edge) => edge.type !== "weak").map((edge) => ({
        edge: { type: edge.type, name: edge.name },
        target: summarize(edge.target),
      }))
    : [],
  traversal: { maxDepth, visitedNodes: tail, weakEdgesExcluded: true },
  matches: uniqueMatches,
};

fs.writeFileSync(outputFile, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({
  outputFile,
  listener: result.listener,
  contextEdges: result.contextEdges,
  matches: result.matches.map(({ target, path: value }) => ({ target, depth: value.length - 1 })),
}, null, 2));
