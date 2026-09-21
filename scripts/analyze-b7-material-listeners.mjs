import fs from "node:fs";
import path from "node:path";

const inputFile = path.resolve(process.argv[2]);
const outputFile = path.resolve(process.argv[3]);

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
  return { heap, nodes, edgeTypes, ef, nodeStride, edgeStride };
}

function edgeDetails(decoded, offset) {
  const type = decoded.edgeTypes[decoded.heap.edges[offset + decoded.ef.type]];
  const raw = decoded.heap.edges[offset + decoded.ef.name_or_index];
  return {
    type,
    name: type === "element" || type === "hidden" ? String(raw) : decoded.heap.strings[raw],
  };
}

function outgoing(decoded, nodeIndex) {
  const node = decoded.nodes[nodeIndex];
  const result = [];
  const end = node.edgeStart + node.edgeCount * decoded.edgeStride;
  for (let offset = node.edgeStart; offset < end; offset += decoded.edgeStride) {
    const edge = edgeDetails(decoded, offset);
    const targetIndex = decoded.heap.edges[offset + decoded.ef.to_node] / decoded.nodeStride;
    result.push({ edge, target: decoded.nodes[targetIndex] });
  }
  return result;
}

function property(decoded, nodeIndex, name) {
  return outgoing(decoded, nodeIndex).find(({ edge }) => edge.name === name)?.target ?? null;
}

function summarize(node) {
  if (!node) return null;
  return {
    index: node.index,
    id: node.id,
    type: node.type,
    name: node.name,
    selfSize: node.selfSize,
    detachedness: node.detachedness,
  };
}

function pathFromRoot(decoded, targetIndex) {
  const previous = new Int32Array(decoded.nodes.length);
  previous.fill(-2);
  previous[0] = -1;
  const previousEdge = new Int32Array(decoded.nodes.length);
  previousEdge.fill(-1);
  const queue = new Int32Array(decoded.nodes.length);
  let head = 0;
  let tail = 0;
  queue[tail++] = 0;
  while (head < tail && previous[targetIndex] === -2) {
    const fromIndex = queue[head++];
    for (const { edge, target } of outgoing(decoded, fromIndex)) {
      if (edge.type === "weak" || previous[target.index] !== -2) continue;
      previous[target.index] = fromIndex;
      previousEdge[target.index] = edge;
      queue[tail++] = target.index;
    }
  }
  if (previous[targetIndex] === -2) return null;
  const result = [];
  let current = targetIndex;
  while (current > 0) {
    const parent = previous[current];
    result.push({ node: summarize(decoded.nodes[current]), retainedBy: previousEdge[current] });
    current = parent;
  }
  return result;
}

const decoded = decode(inputFile);
const amberNameNodes = new Set(decoded.nodes.filter((node) => node.type === "string" && node.name === "MAT_AmberGlow").map((node) => node.index));
const materials = [];
for (const node of decoded.nodes) {
  if (node.type !== "object") continue;
  const edges = outgoing(decoded, node.index);
  if (!edges.some(({ edge, target }) => edge.name === "name" && amberNameNodes.has(target.index))) continue;
  if (!edges.some(({ edge, target }) => edge.name === "isMaterial" && target.name === "true")) continue;
  const listeners = property(decoded, node.index, "_listeners");
  const dispose = listeners ? property(decoded, listeners.index, "dispose") : null;
  const listenerEntries = dispose
    ? outgoing(decoded, dispose.index).filter(({ edge }) => edge.type === "element")
    : [];
  materials.push({
    material: summarize(node),
    rootPath: pathFromRoot(decoded, node.index),
    listeners: summarize(listeners),
    disposeArray: summarize(dispose),
    disposeListeners: listenerEntries.map(({ edge, target }) => ({
      slot: edge.name,
      listener: summarize(target),
      rootPath: pathFromRoot(decoded, target.index),
      outgoing: outgoing(decoded, target.index).map(({ edge: childEdge, target: child }) => ({
        edge: childEdge,
        target: summarize(child),
      })),
    })),
  });
}

const result = {
  schemaVersion: "studymaster-b7-material-listeners-v1",
  generatedAt: new Date().toISOString(),
  inputFile: path.basename(inputFile),
  materials,
};
fs.writeFileSync(outputFile, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({
  outputFile,
  materials: materials.map((entry) => ({
    material: entry.material,
    disposeListenerCount: entry.disposeListeners.length,
    disposeListeners: entry.disposeListeners.map(({ slot, listener }) => ({ slot, listener })),
  })),
}, null, 2));
