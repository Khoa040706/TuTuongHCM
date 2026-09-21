import fs from "node:fs";
import path from "node:path";

const beforeFile = path.resolve(process.argv[2]);
const afterFile = path.resolve(process.argv[3]);
const outputFile = path.resolve(process.argv[4]);

function decode(file) {
  const snapshot = JSON.parse(fs.readFileSync(file, "utf8"));
  const nodeFields = snapshot.snapshot.meta.node_fields;
  const edgeFields = snapshot.snapshot.meta.edge_fields;
  const nodeTypes = snapshot.snapshot.meta.node_types[0];
  const edgeTypes = snapshot.snapshot.meta.edge_types[0];
  const nf = Object.fromEntries(nodeFields.map((name, index) => [name, index]));
  const ef = Object.fromEntries(edgeFields.map((name, index) => [name, index]));
  const nodeStride = nodeFields.length;
  const edgeStride = edgeFields.length;
  const nodes = [];
  let edgeStart = 0;
  for (let index = 0; index < snapshot.nodes.length / nodeStride; index += 1) {
    const offset = index * nodeStride;
    const edgeCount = snapshot.nodes[offset + nf.edge_count];
    nodes.push({
      index,
      id: snapshot.nodes[offset + nf.id],
      type: nodeTypes[snapshot.nodes[offset + nf.type]],
      name: snapshot.strings[snapshot.nodes[offset + nf.name]],
      selfSize: snapshot.nodes[offset + nf.self_size],
      detachedness: nf.detachedness == null ? 0 : snapshot.nodes[offset + nf.detachedness],
      edgeStart,
      edgeCount,
    });
    edgeStart += edgeCount * edgeStride;
  }
  return { snapshot, nodes, edgeTypes, ef, nodeStride, edgeStride };
}

function forEachEdge(heap, callback) {
  for (const from of heap.nodes) {
    const end = from.edgeStart + from.edgeCount * heap.edgeStride;
    for (let offset = from.edgeStart; offset < end; offset += heap.edgeStride) {
      const type = heap.edgeTypes[heap.snapshot.edges[offset + heap.ef.type]];
      if (type === "weak") continue;
      const rawName = heap.snapshot.edges[offset + heap.ef.name_or_index];
      const name = type === "element" || type === "hidden" ? String(rawName) : heap.snapshot.strings[rawName];
      const to = heap.snapshot.edges[offset + heap.ef.to_node] / heap.nodeStride;
      callback({ from: from.index, to, type, name });
    }
  }
}

function directIncoming(heap, target) {
  const result = [];
  forEachEdge(heap, (edge) => {
    if (edge.to === target) result.push(edge);
  });
  return result;
}

function scoreParent(heap, edge) {
  const node = heap.nodes[edge.from];
  let score = node.type === "synthetic" ? 1000 : node.type === "native" ? 0 : 180;
  if (edge.type === "property") score += 100;
  else if (edge.type === "context") score += 90;
  else if (edge.type === "element") score += 30;
  if (/Tween|Timeline|Context|gsap|Fiber|react|CanvasTexture|WebGL|Array|Map|Set/i.test(node.name)) score += 160;
  if (/Window|global|GC roots/i.test(node.name)) score += 300;
  return score;
}

function findPathToRoot(heap, start, maxDepth = 14, maxFrontier = 120) {
  let frontier = new Set([start]);
  const visited = new Set([start]);
  const childOf = new Map();
  const via = new Map();
  let root = null;
  for (let depth = 0; depth < maxDepth && frontier.size; depth += 1) {
    const incoming = new Map([...frontier].map((target) => [target, []]));
    forEachEdge(heap, (edge) => {
      if (incoming.has(edge.to) && !visited.has(edge.from)) incoming.get(edge.to).push(edge);
    });
    const candidates = [];
    for (const [child, edges] of incoming) {
      for (const edge of edges) candidates.push({ child, edge, score: scoreParent(heap, edge) });
    }
    candidates.sort((left, right) => right.score - left.score);
    const next = new Set();
    for (const { child, edge } of candidates) {
      if (visited.has(edge.from)) continue;
      visited.add(edge.from);
      childOf.set(edge.from, child);
      via.set(edge.from, edge);
      const parent = heap.nodes[edge.from];
      if (parent.type === "synthetic" || parent.index === 0) {
        root = parent.index;
        break;
      }
      next.add(parent.index);
      if (next.size >= maxFrontier) break;
    }
    if (root != null) break;
    frontier = next;
  }
  if (root == null) {
    const candidates = [...visited].filter((index) => index !== start);
    candidates.sort((a, b) => scoreParent(heap, { from: b, type: "internal" }) - scoreParent(heap, { from: a, type: "internal" }));
    root = candidates[0] ?? start;
  }
  const pathResult = [];
  let current = root;
  const pathSeen = new Set();
  while (!pathSeen.has(current)) {
    pathSeen.add(current);
    const node = heap.nodes[current];
    const edge = via.get(current);
    pathResult.push({
      node: { index: node.index, id: node.id, type: node.type, name: node.name, detachedness: node.detachedness },
      edgeToChild: edge ? { type: edge.type, name: edge.name } : null,
    });
    if (current === start || !childOf.has(current)) break;
    current = childOf.get(current);
  }
  return pathResult;
}

function group(heap) {
  const result = new Map();
  for (const node of heap.nodes) {
    const detached = node.detachedness > 0 || /^Detached\b/.test(node.name);
    const key = `${node.type}\u0000${node.name}\u0000${detached ? 1 : 0}`;
    const value = result.get(key) || { type: node.type, name: node.name, detached, count: 0, selfSize: 0 };
    value.count += 1;
    value.selfSize += node.selfSize;
    result.set(key, value);
  }
  return result;
}

const before = decode(beforeFile);
const after = decode(afterFile);
const beforeGroups = group(before);
const afterGroups = group(after);
const growth = [];
for (const [key, value] of afterGroups) {
  const baseline = beforeGroups.get(key) || { count: 0, selfSize: 0 };
  if (value.count > baseline.count || value.selfSize > baseline.selfSize) {
    growth.push({ ...value, countDelta: value.count - baseline.count, sizeDelta: value.selfSize - baseline.selfSize });
  }
}
growth.sort((a, b) => b.sizeDelta - a.sizeDelta || b.countDelta - a.countDelta);

const targetMatchers = [
  { id: "label-canvas", test: (node) => node.detachedness > 0 && /^<canvas width="512" height="256">$/.test(node.name) },
  { id: "home-root", test: (node) => node.detachedness > 0 && /id="home-story"/.test(node.name) },
  { id: "home-svg-path", test: (node) => node.detachedness > 0 && node.name === "SVGPathElement" },
  { id: "subject-card", test: (node) => node.detachedness > 0 && /bento-subject-card/.test(node.name) },
];

const targets = targetMatchers.map(({ id, test }) => {
  const node = after.nodes.find(test);
  if (!node) return { id, found: false };
  const incoming = directIncoming(after, node.index)
    .sort((a, b) => scoreParent(after, b) - scoreParent(after, a))
    .slice(0, 30)
    .map((edge) => ({
      edge: { type: edge.type, name: edge.name },
      parent: after.nodes[edge.from],
      score: scoreParent(after, edge),
    }));
  return {
    id,
    found: true,
    candidate: node,
    directIncoming: incoming,
    retainingPath: findPathToRoot(after, node.index),
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  beforeFile: path.basename(beforeFile),
  afterFile: path.basename(afterFile),
  topGrowth: growth.slice(0, 80),
  detachedGrowth: growth.filter((item) => item.detached).slice(0, 50),
  targets,
};
fs.writeFileSync(outputFile, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ outputFile, targets: targets.map((target) => ({ id: target.id, found: target.found, path: target.retainingPath })) }, null, 2));
