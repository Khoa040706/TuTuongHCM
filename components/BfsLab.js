"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  RotateCcw,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Plus,
  Trash2,
  Move,
  Shuffle,
  Grid,
  Share2,
  Radio,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap
} from "lucide-react";

// ==========================================
// 1. PRESET GRAPHS & MAZE HELPERS
// ==========================================

const PRESET_GRAPHS = {
  "tree-7": {
    name: "Cây nhị phân (7 nút)",
    nodes: [
      { id: "A", label: "A", x: 400, y: 80 },
      { id: "B", label: "B", x: 250, y: 180 },
      { id: "C", label: "C", x: 550, y: 180 },
      { id: "D", label: "D", x: 170, y: 290 },
      { id: "E", label: "E", x: 330, y: 290 },
      { id: "F", label: "F", x: 470, y: 290 },
      { id: "G", label: "G", x: 630, y: 290 },
    ],
    edges: [
      { from: "A", to: "B" },
      { from: "A", to: "C" },
      { from: "B", to: "D" },
      { from: "B", to: "E" },
      { from: "C", to: "F" },
      { from: "C", to: "G" },
    ],
    startNode: "A",
  },
  "graph-10": {
    name: "Đồ thị 10 nút kết nối",
    nodes: [
      { id: "S", label: "S", x: 100, y: 200 },
      { id: "A", label: "A", x: 240, y: 100 },
      { id: "B", label: "B", x: 240, y: 300 },
      { id: "C", label: "C", x: 420, y: 80 },
      { id: "D", label: "D", x: 420, y: 200 },
      { id: "E", label: "E", x: 420, y: 320 },
      { id: "F", label: "F", x: 600, y: 120 },
      { id: "G", label: "G", x: 600, y: 280 },
      { id: "H", label: "H", x: 740, y: 200 },
      { id: "I", label: "I", x: 520, y: 380 },
    ],
    edges: [
      { from: "S", to: "A" },
      { from: "S", to: "B" },
      { from: "A", to: "C" },
      { from: "A", to: "D" },
      { from: "B", to: "D" },
      { from: "B", to: "E" },
      { from: "C", to: "F" },
      { from: "D", to: "F" },
      { from: "D", to: "G" },
      { from: "E", to: "G" },
      { from: "E", to: "I" },
      { from: "F", to: "H" },
      { from: "G", to: "H" },
    ],
    startNode: "S",
  },
  "cycle-8": {
    name: "Đồ thị có chu trình (8 nút)",
    nodes: [
      { id: "A", label: "A", x: 400, y: 80 },
      { id: "B", label: "B", x: 580, y: 140 },
      { id: "C", label: "C", x: 640, y: 280 },
      { id: "D", label: "D", x: 540, y: 390 },
      { id: "E", label: "E", x: 380, y: 400 },
      { id: "F", label: "F", x: 220, y: 340 },
      { id: "G", label: "G", x: 180, y: 200 },
      { id: "H", label: "H", x: 300, y: 120 },
    ],
    edges: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "D" },
      { from: "D", to: "E" },
      { from: "E", to: "F" },
      { from: "F", to: "G" },
      { from: "G", to: "H" },
      { from: "H", to: "A" },
      { from: "A", to: "E" },
      { from: "B", to: "F" },
      { from: "C", to: "G" },
    ],
    startNode: "A",
  },
  "disconnected-12": {
    name: "Đồ thị rời rạc (2 thành phần)",
    nodes: [
      { id: "A", label: "A", x: 150, y: 120 },
      { id: "B", label: "B", x: 300, y: 100 },
      { id: "C", label: "C", x: 120, y: 260 },
      { id: "D", label: "D", x: 280, y: 280 },
      { id: "E", label: "E", x: 200, y: 380 },
      { id: "F", label: "F", x: 380, y: 190 },

      { id: "G", label: "G", x: 550, y: 120 },
      { id: "H", label: "H", x: 700, y: 140 },
      { id: "I", label: "I", x: 540, y: 280 },
      { id: "J", label: "J", x: 680, y: 300 },
      { id: "K", label: "K", x: 610, y: 400 },
      { id: "L", label: "L", x: 770, y: 370 },
    ],
    edges: [
      { from: "A", to: "B" },
      { from: "A", to: "C" },
      { from: "B", to: "F" },
      { from: "C", to: "D" },
      { from: "D", to: "E" },
      { from: "E", to: "C" },

      { from: "G", to: "H" },
      { from: "G", to: "I" },
      { from: "H", to: "J" },
      { from: "I", to: "K" },
      { from: "J", to: "K" },
      { from: "J", to: "L" },
    ],
    startNode: "A",
  },
  "dense-15": {
    name: "Đồ thị 15 nút phức tạp",
    nodes: [
      { id: "0", label: "0", x: 400, y: 60 },
      { id: "1", label: "1", x: 250, y: 130 },
      { id: "2", label: "2", x: 550, y: 130 },
      { id: "3", label: "3", x: 150, y: 220 },
      { id: "4", label: "4", x: 320, y: 210 },
      { id: "5", label: "5", x: 480, y: 210 },
      { id: "6", label: "6", x: 650, y: 220 },
      { id: "7", label: "7", x: 100, y: 320 },
      { id: "8", label: "8", x: 220, y: 310 },
      { id: "9", label: "9", x: 360, y: 300 },
      { id: "10", label: "10", x: 440, y: 300 },
      { id: "11", label: "11", x: 580, y: 310 },
      { id: "12", label: "12", x: 700, y: 320 },
      { id: "13", label: "13", x: 300, y: 400 },
      { id: "14", label: "14", x: 500, y: 400 },
    ],
    edges: [
      { from: "0", to: "1" }, { from: "0", to: "2" },
      { from: "1", to: "3" }, { from: "1", to: "4" },
      { from: "2", to: "5" }, { from: "2", to: "6" },
      { from: "3", to: "7" }, { from: "3", to: "8" },
      { from: "4", to: "8" }, { from: "4", to: "9" },
      { from: "5", to: "10" }, { from: "5", to: "11" },
      { from: "6", to: "11" }, { from: "6", to: "12" },
      { from: "8", to: "13" }, { from: "9", to: "13" },
      { from: "10", to: "14" }, { from: "11", to: "14" },
    ],
    startNode: "0",
  },
};

const PSEUDOCODE = [
  { line: 1, text: "procedure BFS(G: Đồ thị, s: Đỉnh bắt đầu)" },
  { line: 2, text: "  let Q = Hàng đợi rỗng (Queue FIFO)" },
  { line: 3, text: "  Khởi tạo Visited = [false], Distance = [∞]" },
  { line: 4, text: "  Visited[s] = true; Distance[s] = 0" },
  { line: 5, text: "  Q.enqueue(s)" },
  { line: 6, text: "  while Q không rỗng do" },
  { line: 7, text: "    u = Q.dequeue()" },
  { line: 8, text: "    for mỗi đỉnh kề v của u do" },
  { line: 9, text: "      if Visited[v] == false then" },
  { line: 10, text: "        Visited[v] = true" },
  { line: 11, text: "        Distance[v] = Distance[u] + 1" },
  { line: 12, text: "        Q.enqueue(v)" },
  { line: 13, text: "      end if" },
  { line: 14, text: "    end for" },
  { line: 15, text: "  end while" },
  { line: 16, text: "end procedure" },
];

// ==========================================
// 2. STEP GENERATORS
// ==========================================

function generateBfsGraphSteps(nodes, edges, startNodeId, isDirected) {
  if (!startNodeId || !nodes.find((n) => n.id === startNodeId)) return [];

  const adj = {};
  nodes.forEach((n) => (adj[n.id] = []));
  edges.forEach(({ from, to }) => {
    if (adj[from]) adj[from].push(to);
    if (!isDirected && adj[to]) adj[to].push(from);
  });

  // Sort neighbors for deterministic execution
  Object.keys(adj).forEach((key) => adj[key].sort());

  const steps = [];
  const queue = [];
  const visited = new Set();
  const distances = {};
  const treeEdges = [];
  const traversalOrder = [];

  // Step 1: Init
  steps.push({
    activeLine: 3,
    status: `Khởi tạo mảng Visited = false và Distance = ∞ cho tất cả các đỉnh.`,
    queue: [],
    currentNode: null,
    neighborNode: null,
    visited: Array.from(visited),
    distances: { ...distances },
    treeEdges: [...treeEdges],
    traversalOrder: [...traversalOrder],
    inspectedEdge: null,
    level: 0,
  });

  // Step 2: Mark start
  visited.add(startNodeId);
  distances[startNodeId] = 0;
  queue.push(startNodeId);
  traversalOrder.push(startNodeId);

  steps.push({
    activeLine: 5,
    status: `Đánh dấu đỉnh nguồn [${startNodeId}] là đã thăm, khoảng cách = 0. Đưa [${startNodeId}] vào Queue.`,
    queue: [...queue],
    currentNode: null,
    neighborNode: null,
    visited: Array.from(visited),
    distances: { ...distances },
    treeEdges: [...treeEdges],
    traversalOrder: [...traversalOrder],
    inspectedEdge: null,
    level: 0,
  });

  // Step 3: Loop
  while (queue.length > 0) {
    steps.push({
      activeLine: 6,
      status: `Kiểm tra Queue: Đang có ${queue.length} phần tử [${queue.join(", ")}]. Tiếp tục vòng lặp.`,
      queue: [...queue],
      currentNode: null,
      neighborNode: null,
      visited: Array.from(visited),
      distances: { ...distances },
      treeEdges: [...treeEdges],
      traversalOrder: [...traversalOrder],
      inspectedEdge: null,
      level: distances[queue[0]] || 0,
    });

    const u = queue.shift();

    steps.push({
      activeLine: 7,
      status: `Lấy đỉnh [${u}] ra khỏi Queue (Dequeue). Đỉnh [${u}] trở thành đỉnh hiện tại đang xét.`,
      queue: [...queue],
      currentNode: u,
      neighborNode: null,
      visited: Array.from(visited),
      distances: { ...distances },
      treeEdges: [...treeEdges],
      traversalOrder: [...traversalOrder],
      inspectedEdge: null,
      level: distances[u],
    });

    const neighbors = adj[u] || [];
    if (neighbors.length === 0) {
      steps.push({
        activeLine: 8,
        status: `Đỉnh [${u}] không có đỉnh kề nào chưa thăm.`,
        queue: [...queue],
        currentNode: u,
        neighborNode: null,
        visited: Array.from(visited),
        distances: { ...distances },
        treeEdges: [...treeEdges],
        traversalOrder: [...traversalOrder],
        inspectedEdge: null,
        level: distances[u],
      });
    } else {
      for (const v of neighbors) {
        const inspected = { from: u, to: v };

        steps.push({
          activeLine: 8,
          status: `Xét đỉnh kề [${v}] của đỉnh [${u}].`,
          queue: [...queue],
          currentNode: u,
          neighborNode: v,
          visited: Array.from(visited),
          distances: { ...distances },
          treeEdges: [...treeEdges],
          traversalOrder: [...traversalOrder],
          inspectedEdge: inspected,
          level: distances[u],
        });

        if (!visited.has(v)) {
          visited.add(v);
          distances[v] = distances[u] + 1;
          queue.push(v);
          traversalOrder.push(v);
          treeEdges.push({ from: u, to: v });

          steps.push({
            activeLine: 12,
            status: `Đỉnh [${v}] chưa thăm! Đánh dấu Visited[${v}]=true, Distance[${v}]=${distances[v]}. Push [${v}] vào Queue.`,
            queue: [...queue],
            currentNode: u,
            neighborNode: v,
            visited: Array.from(visited),
            distances: { ...distances },
            treeEdges: [...treeEdges],
            traversalOrder: [...traversalOrder],
            inspectedEdge: inspected,
            level: distances[u],
          });
        } else {
          steps.push({
            activeLine: 9,
            status: `Đỉnh [${v}] đã được thăm từ trước (bỏ qua).`,
            queue: [...queue],
            currentNode: u,
            neighborNode: v,
            visited: Array.from(visited),
            distances: { ...distances },
            treeEdges: [...treeEdges],
            traversalOrder: [...traversalOrder],
            inspectedEdge: inspected,
            level: distances[u],
          });
        }
      }
    }
  }

  // Done
  steps.push({
    activeLine: 16,
    status: `Hàng đợi (Queue) đã rỗng! Thuật toán BFS hoàn tất duyệt toàn bộ thành phần liên thông từ [${startNodeId}].`,
    queue: [],
    currentNode: null,
    neighborNode: null,
    visited: Array.from(visited),
    distances: { ...distances },
    treeEdges: [...treeEdges],
    traversalOrder: [...traversalOrder],
    inspectedEdge: null,
    level: 0,
    isCompleted: true,
  });

  return steps;
}

function generateBfsMazeSteps(mazeSize, walls, start, end) {
  const steps = [];
  const queue = [{ r: start.r, c: start.c }];
  const visited = new Set([`${start.r}-${start.c}`]);
  const parent = {};
  const distances = { [`${start.r}-${start.c}`]: 0 };

  const key = (r, c) => `${r}-${c}`;

  steps.push({
    activeLine: 5,
    status: `Khởi tạo BFS tại ô xuất phát 🟢 (${start.r}, ${start.c}). Đưa vào Queue.`,
    queue: [...queue],
    currentCell: null,
    visited: Array.from(visited),
    distances: { ...distances },
    parent: { ...parent },
    shortestPath: [],
    activeNeighbor: null,
  });

  let found = false;
  const dirs = [
    { r: -1, c: 0, name: "Trên" },
    { r: 1, c: 0, name: "Dưới" },
    { r: 0, c: -1, name: "Trái" },
    { r: 0, c: 1, name: "Phải" },
  ];

  while (queue.length > 0 && !found) {
    const curr = queue.shift();
    const currKey = key(curr.r, curr.c);

    steps.push({
      activeLine: 7,
      status: `Dequeue ô (${curr.r}, ${curr.c}). Khoảng cách hiện tại: ${distances[currKey]}.`,
      queue: [...queue],
      currentCell: curr,
      visited: Array.from(visited),
      distances: { ...distances },
      parent: { ...parent },
      shortestPath: [],
      activeNeighbor: null,
    });

    if (curr.r === end.r && curr.c === end.c) {
      found = true;
      break;
    }

    for (const d of dirs) {
      const nr = curr.r + d.r;
      const nc = curr.c + d.c;
      const nKey = key(nr, nc);

      if (nr >= 0 && nr < mazeSize && nc >= 0 && nc < mazeSize && !walls.has(nKey)) {
        if (!visited.has(nKey)) {
          visited.add(nKey);
          distances[nKey] = distances[currKey] + 1;
          parent[nKey] = currKey;
          queue.push({ r: nr, c: nc });

          steps.push({
            activeLine: 12,
            status: `Loang sang ô kề (${nr}, ${nc}) [Hướng ${d.name}]. Đưa vào Queue với khoảng cách ${distances[nKey]}.`,
            queue: [...queue],
            currentCell: curr,
            visited: Array.from(visited),
            distances: { ...distances },
            parent: { ...parent },
            shortestPath: [],
            activeNeighbor: { r: nr, c: nc },
          });

          if (nr === end.r && nc === end.c) {
            found = true;
            break;
          }
        }
      }
    }
  }

  // Reconstruct path
  let path = [];
  if (found) {
    let currKey = key(end.r, end.c);
    while (currKey) {
      const [r, c] = currKey.split("-").map(Number);
      path.unshift({ r, c });
      currKey = parent[currKey];
    }

    steps.push({
      activeLine: 16,
      status: `🎉 ĐÃ TÌM THẤY ĐÍCH 🔴! Đường đi ngắn nhất dài ${path.length - 1} bước được tô màu vàng.`,
      queue: [],
      currentCell: null,
      visited: Array.from(visited),
      distances: { ...distances },
      parent: { ...parent },
      shortestPath: path,
      activeNeighbor: null,
      isCompleted: true,
    });
  } else {
    steps.push({
      activeLine: 16,
      status: `❌ KHÔNG TÌM THẤY ĐƯỜNG ĐI! Tường đã chặn hoàn toàn lối đến đích.`,
      queue: [],
      currentCell: null,
      visited: Array.from(visited),
      distances: { ...distances },
      parent: { ...parent },
      shortestPath: [],
      activeNeighbor: null,
      isCompleted: true,
    });
  }

  return steps;
}

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

export default function BfsLab({ onBack }) {
  // Mode Selection
  const [mode, setMode] = useState("graph"); // 'graph' | 'maze'

  // Graph Mode State
  const [selectedPreset, setSelectedPreset] = useState("graph-10");
  const [nodes, setNodes] = useState(PRESET_GRAPHS["graph-10"].nodes);
  const [edges, setEdges] = useState(PRESET_GRAPHS["graph-10"].edges);
  const [startNode, setStartNode] = useState(PRESET_GRAPHS["graph-10"].startNode);
  const [isDirected, setIsDirected] = useState(false);
  const [tool, setTool] = useState("select"); // 'select' | 'add-node' | 'add-edge' | 'delete'
  const [edgeStartNode, setEdgeStartNode] = useState(null);
  const [dragNodeId, setDragNodeId] = useState(null);

  // Maze Mode State
  const [mazeSize, setMazeSize] = useState(8);
  const [walls, setWalls] = useState(
    new Set(["1-2", "2-2", "3-2", "4-2", "4-3", "4-4", "2-5", "3-5", "4-5", "5-5"])
  );
  const [mazeStart, setMazeStart] = useState({ r: 0, c: 0 });
  const [mazeEnd, setMazeEnd] = useState({ r: 7, c: 7 });
  const [mazeTool, setMazeTool] = useState("wall"); // 'wall' | 'start' | 'end'

  // Animation Engine State
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);

  const svgRef = useRef(null);
  const timerRef = useRef(null);

  // Load Preset
  const handleSelectPreset = (presetKey) => {
    setSelectedPreset(presetKey);
    const preset = PRESET_GRAPHS[presetKey];
    if (preset) {
      setNodes(preset.nodes);
      setEdges(preset.edges);
      setStartNode(preset.startNode);
      setIsPlaying(false);
      setCurrentStep(0);
    }
  };

  // Re-generate steps when inputs change
  useEffect(() => {
    if (mode === "graph") {
      const generated = generateBfsGraphSteps(nodes, edges, startNode, isDirected);
      setSteps(generated);
      setCurrentStep(0);
      setIsPlaying(false);
    } else {
      const generated = generateBfsMazeSteps(mazeSize, walls, mazeStart, mazeEnd);
      setSteps(generated);
      setCurrentStep(0);
      setIsPlaying(false);
    }
  }, [mode, nodes, edges, startNode, isDirected, mazeSize, walls, mazeStart, mazeEnd]);

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, speed, steps.length]);

  // Controls Handlers
  const handleTogglePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleStepBack = () => {
    setIsPlaying(false);
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleSkipToEnd = () => {
    setIsPlaying(false);
    setCurrentStep(steps.length - 1);
  };

  // Graph Canvas Interaction
  const handleSvgClick = (e) => {
    if (mode !== "graph" || tool !== "add-node") return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    // Generate next node label (A, B, C... Z, N1, N2...)
    const existingLabels = new Set(nodes.map((n) => n.label));
    let nextLabel = "";
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(65 + i);
      if (!existingLabels.has(char)) {
        nextLabel = char;
        break;
      }
    }
    if (!nextLabel) nextLabel = `N${nodes.length + 1}`;

    const newNode = { id: nextLabel, label: nextLabel, x, y };
    setNodes((prev) => [...prev, newNode]);
    if (!startNode) setStartNode(nextLabel);
  };

  const handleNodeClick = (nodeId, e) => {
    e.stopPropagation();
    if (tool === "delete") {
      setNodes((prev) => prev.filter((n) => n.id !== nodeId));
      setEdges((prev) => prev.filter((e) => e.from !== nodeId && e.to !== nodeId));
      if (startNode === nodeId) {
        const remaining = nodes.filter((n) => n.id !== nodeId);
        setStartNode(remaining.length > 0 ? remaining[0].id : null);
      }
      return;
    }

    if (tool === "add-edge") {
      if (!edgeStartNode) {
        setEdgeStartNode(nodeId);
      } else {
        if (edgeStartNode !== nodeId) {
          const exists = edges.some(
            (e) =>
              (e.from === edgeStartNode && e.to === nodeId) ||
              (!isDirected && e.from === nodeId && e.to === edgeStartNode)
          );
          if (!exists) {
            setEdges((prev) => [...prev, { from: edgeStartNode, to: nodeId }]);
          }
        }
        setEdgeStartNode(null);
      }
    }
  };

  const handleNodeMouseDown = (nodeId, e) => {
    if (tool === "select") {
      setDragNodeId(nodeId);
    }
  };

  const handleSvgMouseMove = (e) => {
    if (dragNodeId && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      setNodes((prev) =>
        prev.map((n) => (n.id === dragNodeId ? { ...n, x, y } : n))
      );
    }
  };

  const handleSvgMouseUp = () => {
    setDragNodeId(null);
  };

  // Maze Cell Click
  const handleCellClick = (r, c) => {
    const key = `${r}-${c}`;
    if (mazeTool === "start") {
      setMazeStart({ r, c });
      if (walls.has(key)) {
        const next = new Set(walls);
        next.delete(key);
        setWalls(next);
      }
    } else if (mazeTool === "end") {
      setMazeEnd({ r, c });
      if (walls.has(key)) {
        const next = new Set(walls);
        next.delete(key);
        setWalls(next);
      }
    } else if (mazeTool === "wall") {
      if (
        (r === mazeStart.r && c === mazeStart.c) ||
        (r === mazeEnd.r && c === mazeEnd.c)
      )
        return;
      const next = new Set(walls);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      setWalls(next);
    }
  };

  // Random Maze Generator
  const generateRandomMaze = () => {
    const nextWalls = new Set();
    for (let r = 0; r < mazeSize; r++) {
      for (let c = 0; c < mazeSize; c++) {
        if (
          (r === mazeStart.r && c === mazeStart.c) ||
          (r === mazeEnd.r && c === mazeEnd.c)
        )
          continue;
        if (Math.random() < 0.28) {
          nextWalls.add(`${r}-${c}`);
        }
      }
    }
    setWalls(nextWalls);
  };

  const currentStepData = steps[currentStep] || {};

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300 pb-12">
      {/* TIER 1: HEADER & CONFIGURATION BAR */}
      <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Mô Phỏng Thuật Toán BFS (Breadth-First Search)
                </h1>
                <p className="text-xs text-slate-500 font-mono">
                  Duyệt đồ thị theo chiều rộng • Hàng đợi FIFO • O(V + E)
                </p>
              </div>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => setMode("graph")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "graph"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>1. Đồ thị tự do (Graph Mode)</span>
            </button>
            <button
              onClick={() => setMode("maze")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "maze"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>2. Mê cung (Maze Solver Mode)</span>
            </button>
          </div>
        </div>

        {/* Configuration Controls based on Mode */}
        {mode === "graph" ? (
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">Đồ thị mẫu:</span>
                <select
                  value={selectedPreset}
                  onChange={(e) => handleSelectPreset(e.target.value)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {Object.entries(PRESET_GRAPHS).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-4 w-px bg-slate-200" />

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">Đỉnh bắt đầu:</span>
                <select
                  value={startNode || ""}
                  onChange={(e) => setStartNode(e.target.value)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {nodes.map((n) => (
                    <option key={n.id} value={n.id}>
                      Đỉnh {n.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-4 w-px bg-slate-200" />

              {/* Edge direction toggle */}
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={isDirected}
                  onChange={(e) => setIsDirected(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                />
                <span>Đồ thị có hướng (Directed)</span>
              </label>
            </div>

            {/* Right Graph Editing Toolbar */}
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Công cụ:</span>
              <button
                onClick={() => {
                  setTool("select");
                  setEdgeStartNode(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  tool === "select"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Move className="w-3.5 h-3.5" />
                <span>Kéo di chuyển</span>
              </button>

              <button
                onClick={() => {
                  setTool("add-node");
                  setEdgeStartNode(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  tool === "add-node"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm Node</span>
              </button>

              <button
                onClick={() => {
                  setTool("add-edge");
                  setEdgeStartNode(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  tool === "add-edge"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Thêm Edge {edgeStartNode ? `(từ ${edgeStartNode}...)` : ""}</span>
              </button>

              <button
                onClick={() => {
                  setTool("delete");
                  setEdgeStartNode(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  tool === "delete"
                    ? "bg-rose-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa Đỉnh</span>
              </button>
            </div>
          </div>
        ) : (
          /* Maze Mode Controls */
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-600">Kích thước Lưới:</span>
                <input
                  type="range"
                  min="5"
                  max="12"
                  value={mazeSize}
                  onChange={(e) => setMazeSize(Number(e.target.value))}
                  className="w-28 accent-indigo-600 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg border border-indigo-100">
                  {mazeSize} × {mazeSize}
                </span>
              </div>

              <div className="h-4 w-px bg-slate-200" />

              <button
                onClick={generateRandomMaze}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
                <span>Tạo mê cung ngẫu nhiên</span>
              </button>

              <button
                onClick={() => setWalls(new Set())}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa toàn bộ tường</span>
              </button>
            </div>

            {/* Maze Click Tools */}
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Click ô để:</span>
              <button
                onClick={() => setMazeTool("wall")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  mazeTool === "wall"
                    ? "bg-slate-800 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <div className="w-3 h-3 bg-slate-600 rounded-xs" />
                <span>Đặt/Bỏ Tường</span>
              </button>
              <button
                onClick={() => setMazeTool("start")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  mazeTool === "start"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <span>Đặt Xuất phát 🟢</span>
              </button>
              <button
                onClick={() => setMazeTool("end")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  mazeTool === "end"
                    ? "bg-rose-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                <div className="w-3 h-3 bg-rose-500 rounded-full" />
                <span>Đặt Đích 🔴</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* TIER 2: FULL-WIDTH SIMULATION CANVAS & PLAYBACK TOOLBAR (LIGHT MODE) */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
        {/* Canvas Header Bar (Light Mode) */}
        <div className="px-6 py-4 bg-slate-100/90 text-slate-800 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 flex items-center gap-1.5">
              <Radio className="w-4 h-4" />
              <span>Màn Hình Mô Phỏng Canvas</span>
            </span>

            <span className="text-xs text-slate-500 font-mono">
              Bước {currentStep + 1} / {steps.length || 1}
            </span>
          </div>

          {/* Active Pseudocode Line Badge */}
          <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 max-w-xl overflow-hidden shadow-sm">
            <span className="text-[11px] font-mono text-slate-400 shrink-0">💻 Code:</span>
            <span className="text-xs font-mono font-semibold text-cyan-300 truncate">
              {PSEUDOCODE.find((p) => p.line === currentStepData.activeLine)?.text ||
                "Đang chuẩn bị..."}
            </span>
          </div>
        </div>

        {/* Visual Workspace Canvas (Light Pastel Background) */}
        <div className="relative w-full h-[460px] bg-slate-50 overflow-hidden flex items-center justify-center select-none border-b border-slate-200/60">
          {/* Subtle Light Dot Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {mode === "graph" ? (
            /* GRAPH CANVAS SVG (Light Mode Colors) */
            <svg
              ref={svgRef}
              className="w-full h-full cursor-crosshair relative z-10"
              onClick={handleSvgClick}
              onMouseMove={handleSvgMouseMove}
              onMouseUp={handleSvgMouseUp}
            >
              {/* SVG Arrow Marker Definition */}
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="28"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                </marker>
                <marker
                  id="arrow-active"
                  viewBox="0 0 10 10"
                  refX="28"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
                </marker>
                <marker
                  id="arrow-tree"
                  viewBox="0 0 10 10"
                  refX="28"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" />
                </marker>
              </defs>

              {/* Render Edges */}
              {edges.map((edge, index) => {
                const source = nodes.find((n) => n.id === edge.from);
                const target = nodes.find((n) => n.id === edge.to);
                if (!source || !target) return null;

                // Check edge execution state
                const isTreeEdge = currentStepData.treeEdges?.some(
                  (te) =>
                    (te.from === edge.from && te.to === edge.to) ||
                    (!isDirected && te.from === edge.to && te.to === edge.from)
                );

                const isInspectedEdge =
                  currentStepData.inspectedEdge?.from === edge.from &&
                  currentStepData.inspectedEdge?.to === edge.to;

                let strokeColor = "#cbd5e1"; // slate-300 default
                let strokeWidth = 2;
                let strokeDasharray = "none";
                let markerEnd = isDirected ? "url(#arrow)" : undefined;

                if (isInspectedEdge) {
                  strokeColor = "#06b6d4"; // cyan-500
                  strokeWidth = 4;
                  strokeDasharray = "6 6";
                  markerEnd = isDirected ? "url(#arrow-active)" : undefined;
                } else if (isTreeEdge) {
                  strokeColor = "#4f46e5"; // indigo-600
                  strokeWidth = 3.5;
                  markerEnd = isDirected ? "url(#arrow-tree)" : undefined;
                }

                return (
                  <g key={`${edge.from}-${edge.to}-${index}`}>
                    <line
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeDasharray={strokeDasharray}
                      markerEnd={markerEnd}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Render Nodes */}
              {nodes.map((node) => {
                const isStart = node.id === startNode;
                const isCurrent = currentStepData.currentNode === node.id;
                const isNeighbor = currentStepData.neighborNode === node.id;
                const isInQueue = currentStepData.queue?.includes(node.id);
                const isVisited = currentStepData.visited?.includes(node.id);

                // Traversal Order Index (1-based)
                const orderIdx = currentStepData.traversalOrder?.indexOf(node.id);

                // Node Light Palette Logic
                let circleFill = "#f8fafc"; // slate-50
                let circleStroke = "#94a3b8"; // slate-400
                let textColor = "#334155"; // slate-700
                let glowEffect = "";

                if (isCurrent) {
                  circleFill = "#4f46e5"; // indigo-600
                  circleStroke = "#3730a3"; // indigo-800
                  textColor = "#ffffff";
                  glowEffect = "drop-shadow(0 0 16px rgba(79, 70, 229, 0.7))";
                } else if (isNeighbor) {
                  circleFill = "#0891b2"; // cyan-600
                  circleStroke = "#155e75"; // cyan-800
                  textColor = "#ffffff";
                  glowEffect = "drop-shadow(0 0 12px rgba(8, 145, 178, 0.6))";
                } else if (isInQueue) {
                  circleFill = "#0284c7"; // sky-600
                  circleStroke = "#0369a1"; // sky-700
                  textColor = "#ffffff";
                } else if (isVisited) {
                  circleFill = "#10b981"; // emerald-500
                  circleStroke = "#047857"; // emerald-700
                  textColor = "#ffffff";
                }

                if (isStart && !isCurrent) {
                  circleStroke = "#f59e0b"; // amber-500
                }

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={(e) => handleNodeClick(node.id, e)}
                    onMouseDown={(e) => handleNodeMouseDown(node.id, e)}
                    className="cursor-pointer group"
                    style={{ filter: glowEffect }}
                  >
                    {/* Pulsing ring for current active node */}
                    {isCurrent && (
                      <circle
                        r="28"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="2"
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Main Node Circle */}
                    <circle
                      r="22"
                      fill={circleFill}
                      stroke={circleStroke}
                      strokeWidth={isStart ? "3.5" : "2.5"}
                      className="transition-colors duration-300 shadow-sm"
                    />

                    {/* Node Label Text */}
                    <text
                      textAnchor="middle"
                      dy="4"
                      fill={textColor}
                      fontSize="14"
                      fontWeight="bold"
                      fontFamily="monospace"
                      className="pointer-events-none"
                    >
                      {node.label}
                    </text>

                    {/* Start Node Badge Icon ⭐ */}
                    {isStart && (
                      <text
                        x="14"
                        y="-14"
                        fontSize="12"
                        className="pointer-events-none"
                      >
                        ⭐
                      </text>
                    )}

                    {/* Traversal Order Badge (Upper Left) */}
                    {orderIdx !== undefined && orderIdx >= 0 && (
                      <g transform="translate(-18, -18)">
                        <circle r="9" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                        <text
                          textAnchor="middle"
                          dy="3.5"
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="extrabold"
                          fontFamily="monospace"
                        >
                          {orderIdx + 1}
                        </text>
                      </g>
                    )}

                    {/* Distance Metric Tag (Below Node) */}
                    {currentStepData.distances &&
                      currentStepData.distances[node.id] !== undefined && (
                        <g transform="translate(0, 36)">
                          <rect
                            x="-18"
                            y="-9"
                            width="36"
                            height="16"
                            rx="8"
                            fill="#ffffff"
                            stroke="#cbd5e1"
                            strokeWidth="1.5"
                            className="shadow-xs"
                          />
                          <text
                            textAnchor="middle"
                            dy="3"
                            fill="#4f46e5"
                            fontSize="10"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            d={currentStepData.distances[node.id]}
                          </text>
                        </g>
                      )}
                  </g>
                );
              })}
            </svg>
          ) : (
            /* MAZE CANVAS GRID (Light Mode) */
            <div className="w-full h-full flex items-center justify-center p-4 relative z-10 overflow-auto">
              <div
                className="grid gap-1.5 p-3 bg-white rounded-2xl border border-slate-200/90 shadow-lg"
                style={{
                  gridTemplateColumns: `repeat(${mazeSize}, minmax(0, 1fr))`,
                  width: `${Math.min(mazeSize * 44, 420)}px`,
                  height: `${Math.min(mazeSize * 44, 420)}px`,
                }}
              >
                {Array.from({ length: mazeSize }).map((_, r) =>
                  Array.from({ length: mazeSize }).map((_, c) => {
                    const cellKey = `${r}-${c}`;
                    const isStart = r === mazeStart.r && c === mazeStart.c;
                    const isEnd = r === mazeEnd.r && c === mazeEnd.c;
                    const isWall = walls.has(cellKey);

                    const isCurrent =
                      currentStepData.currentCell?.r === r &&
                      currentStepData.currentCell?.c === c;

                    const isNeighbor =
                      currentStepData.activeNeighbor?.r === r &&
                      currentStepData.activeNeighbor?.c === c;

                    const isInQueue = currentStepData.queue?.some(
                      (q) => q.r === r && q.c === c
                    );

                    const isVisited = currentStepData.visited?.includes(cellKey);

                    const isShortestPath = currentStepData.shortestPath?.some(
                      (p) => p.r === r && p.c === c
                    );

                    let bgClass = "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600";
                    let cellContent = null;

                    if (isStart) {
                      bgClass = "bg-emerald-500 border-emerald-600 font-bold text-white shadow-md";
                      cellContent = "🟢";
                    } else if (isEnd) {
                      bgClass = "bg-rose-500 border-rose-600 font-bold text-white shadow-md";
                      cellContent = "🔴";
                    } else if (isWall) {
                      bgClass = "bg-slate-800 border-slate-900 text-white shadow-inner";
                      cellContent = "🧱";
                    } else if (isShortestPath) {
                      bgClass = "bg-amber-400 border-amber-500 text-slate-950 font-extrabold shadow-md animate-pulse";
                      cellContent = "⭐";
                    } else if (isCurrent) {
                      bgClass = "bg-indigo-600 border-indigo-700 text-white font-extrabold scale-105 shadow-lg ring-2 ring-indigo-300";
                    } else if (isNeighbor) {
                      bgClass = "bg-cyan-500 border-cyan-600 text-white font-bold animate-bounce";
                    } else if (isInQueue) {
                      bgClass = "bg-sky-200 border-sky-400 text-sky-900 font-bold";
                    } else if (isVisited) {
                      bgClass = "bg-emerald-100/80 border-emerald-300 text-emerald-800";
                    }

                    return (
                      <button
                        key={cellKey}
                        onClick={() => handleCellClick(r, c)}
                        className={`w-full h-full rounded-xl border flex items-center justify-center text-xs font-mono transition-all duration-200 cursor-pointer ${bgClass}`}
                      >
                        {cellContent || (
                          <span className="text-[9px] opacity-40">
                            {r},{c}
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Step Explanation Status Banner */}
        <div className="px-6 py-3 bg-indigo-50/70 border-t border-indigo-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs font-medium text-indigo-950">
              {currentStepData.status || "Sẵn sàng chạy mô phỏng."}
            </p>
          </div>

          {currentStepData.isCompleted && (
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Hoàn thành BFS!
            </span>
          )}
        </div>

        {/* Playback Controls Toolbar (Light Mode) */}
        <div className="px-6 py-3.5 bg-slate-50 text-slate-700 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Khởi tạo lại"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleStepBack}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Lùi lại 1 bước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleTogglePlay}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Chạy tự động</span>
                </>
              )}
            </button>
            <button
              onClick={handleStepForward}
              disabled={currentStep >= steps.length - 1}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Tất cả bước tiếp theo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleSkipToEnd}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Nhảy đến kết thúc"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Slider */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Tốc độ:</span>
            <input
              type="range"
              min="200"
              max="1500"
              step="100"
              value={1700 - speed}
              onChange={(e) => setSpeed(1700 - Number(e.target.value))}
              className="w-32 accent-indigo-600 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-indigo-600 w-12 text-right">
              {speed}ms
            </span>
          </div>
        </div>
      </div>

      {/* TIER 3: BOTTOM SPLIT GRID (QUEUE & METRICS VS PSEUDOCODE PANEL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN (6 Cols): QUEUE VISUALIZER & METRICS (LIGHT MODE) */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {/* FIFO Queue Visualizer Panel */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Hàng đợi FIFO (Queue Data Structure)
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Kích thước: {currentStepData.queue?.length || 0}
              </span>
            </div>

            {/* Queue Array Cards Container (Light Mode) */}
            <div className="w-full min-h-[68px] p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-start gap-2 overflow-x-auto">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0 mr-1">
                OUT ➔
              </span>

              {currentStepData.queue?.length > 0 ? (
                currentStepData.queue.map((item, idx) => {
                  const label = typeof item === "string" ? item : `(${item.r},${item.c})`;
                  return (
                    <div
                      key={idx}
                      className="px-3.5 py-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-mono font-bold text-xs rounded-xl shadow-md border border-sky-300 flex items-center gap-1.5 shrink-0 animate-in fade-in zoom-in-75"
                    >
                      <span className="text-[10px] opacity-60">[{idx}]</span>
                      <span>{label}</span>
                    </div>
                  );
                })
              ) : (
                <span className="text-xs text-slate-400 italic font-mono">
                  (Hàng đợi Queue rỗng)
                </span>
              )}

              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0 ml-auto pl-2">
                 IN
              </span>
            </div>
          </div>

          {/* Visited List & Metrics */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Danh sách đã duyệt (Visited List)
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                {currentStepData.visited?.length || 0} phần tử
              </span>
            </div>

            {/* Visited Items Badge Wrap */}
            <div className="flex flex-wrap items-center gap-2 min-h-[42px]">
              {currentStepData.visited?.map((v, i) => (
                <div
                  key={i}
                  className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-emerald-500">#{i + 1}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            {/* Distance Map Cards */}
            {mode === "graph" && currentStepData.distances && (
              <div className="mt-2 border-t border-slate-100 pt-3">
                <span className="text-xs font-semibold text-slate-600 mb-2 block">
                  Bảng khoảng cách ngắn nhất (Distance Array):
                </span>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {Object.entries(currentStepData.distances).map(([nodeId, dist]) => (
                    <div
                      key={nodeId}
                      className="p-2 bg-slate-50 border border-slate-200/80 rounded-xl text-center"
                    >
                      <span className="text-[10px] font-mono text-slate-500 block">
                        Đỉnh {nodeId}
                      </span>
                      <span className="text-xs font-mono font-bold text-indigo-600">
                        {dist}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN (6 Cols): PSEUDOCODE HIGHLIGHT PANEL (ONLY THIS IS DARK MODE) */}
        <div className="lg:col-span-6 bg-slate-900 text-slate-100 p-5 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Mã Giả Thuật Toán BFS</h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                Pseudocode
              </span>
            </div>

            {/* Line-by-Line Pseudocode Rendering */}
            <div className="flex flex-col gap-1 font-mono text-xs">
              {PSEUDOCODE.map((item) => {
                const isActive = item.line === currentStepData.activeLine;
                return (
                  <div
                    key={item.line}
                    className={`px-3 py-1.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-indigo-600/90 text-white font-extrabold border-l-4 border-cyan-400 scale-[1.02] shadow-md"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 w-4 text-right">
                        {item.line}
                      </span>
                      <span>{item.text}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider animate-pulse">
                        Đang chạy
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Theoretical Complexity Summary Badge */}
          <div className="mt-6 border-t border-slate-800 pt-4 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Độ phức tạp thời gian:</span>
              <span className="text-cyan-400 font-bold">O(V + E)</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Độ phức tạp không gian:</span>
              <span className="text-indigo-400 font-bold">O(V)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
