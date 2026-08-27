"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Trees,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
  Search,
  Plus,
  Trash2,
  CheckCircle2,
  Layers,
  ArrowRight,
  Split,
  Scale,
  Compass,
  ArrowDownUp,
  Cpu,
  BookOpen
} from "lucide-react";

// BST Node Helper Class
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.x = 0;
    this.y = 0;
  }
}

export default function DsaBstHeroBanner() {
  const [inputVal, setInputVal] = useState("");
  const [treeValues, setTreeValues] = useState([50, 30, 70, 20, 40, 60, 80]);
  const [activeNodeVal, setActiveNodeVal] = useState(null);
  const [highlightPath, setHighlightPath] = useState([]);
  const [traversalType, setTraversalType] = useState(null);
  const [traversalResult, setTraversalResult] = useState([]);
  const [isTraversing, setIsTraversing] = useState(false);
  const [activeTab, setActiveTab] = useState("property");
  const [searchStatus, setSearchStatus] = useState(null); // { found: boolean, message: string }

  const isTraversingRef = useRef(false);
  isTraversingRef.current = isTraversing;

  // Build BST from values
  const buildTree = (values) => {
    if (!values || values.length === 0) return null;
    let root = new TreeNode(values[0]);

    const insertNode = (node, val) => {
      if (val === node.val) return; // ignore duplicate in simple demo
      if (val < node.val) {
        if (!node.left) node.left = new TreeNode(val);
        else insertNode(node.left, val);
      } else {
        if (!node.right) node.right = new TreeNode(val);
        else insertNode(node.right, val);
      }
    };

    for (let i = 1; i < values.length; i++) {
      insertNode(root, values[i]);
    }
    return root;
  };

  // Compute positions for SVG rendering
  const calculateNodePositions = (root) => {
    if (!root) return [];
    const nodes = [];
    const edges = [];

    const assignCoords = (node, x, y, spread, level) => {
      if (!node) return;
      node.x = x;
      node.y = y;
      nodes.push({ val: node.val, x, y, level });

      if (node.left) {
        const nextX = x - spread;
        const nextY = y + 64;
        edges.push({ from: { x, y }, to: { x: nextX, y: nextY }, fromVal: node.val, toVal: node.left.val, side: "L" });
        assignCoords(node.left, nextX, nextY, spread * 0.55, level + 1);
      }
      if (node.right) {
        const nextX = x + spread;
        const nextY = y + 64;
        edges.push({ from: { x, y }, to: { x: nextX, y: nextY }, fromVal: node.val, toVal: node.right.val, side: "R" });
        assignCoords(node.right, nextX, nextY, spread * 0.55, level + 1);
      }
    };

    assignCoords(root, 240, 36, 110, 0);
    return { nodes, edges };
  };

  const currentTree = buildTree(treeValues);
  const { nodes, edges } = calculateNodePositions(currentTree);

  // Insert
  const handleInsert = (customVal) => {
    const val = customVal !== undefined ? customVal : parseInt(inputVal, 10);
    if (isNaN(val)) return;
    if (treeValues.includes(val)) {
      setSearchStatus({ found: true, message: `Giá trị ${val} đã tồn tại trong cây!` });
      return;
    }
    if (treeValues.length >= 15) {
      setSearchStatus({ found: false, message: "Cây mẫu giới hạn tối đa 15 nút để đảm bảo hiển thị đẹp!" });
      return;
    }

    setTreeValues([...treeValues, val]);
    setInputVal("");
    setSearchStatus({ found: true, message: `Đã chèn thành công nút ${val} vào cây BST!` });
    setActiveNodeVal(val);
    setTimeout(() => setActiveNodeVal(null), 1500);
  };

  // Delete
  const handleDelete = (valToDelete) => {
    const val = valToDelete !== undefined ? valToDelete : parseInt(inputVal, 10);
    if (isNaN(val)) return;
    if (!treeValues.includes(val)) {
      setSearchStatus({ found: false, message: `Không tìm thấy nút ${val} để xóa!` });
      return;
    }
    setTreeValues(treeValues.filter((v) => v !== val));
    setInputVal("");
    setSearchStatus({ found: true, message: `Đã xóa nút ${val} khỏi cây BST!` });
    setActiveNodeVal(null);
    setHighlightPath([]);
  };

  // Search with path trace
  const handleSearch = () => {
    const val = parseInt(inputVal, 10);
    if (isNaN(val)) return;

    if (!currentTree) {
      setSearchStatus({ found: false, message: "Cây đang rỗng!" });
      return;
    }

    let curr = currentTree;
    const path = [];
    let found = false;

    while (curr) {
      path.push(curr.val);
      if (curr.val === val) {
        found = true;
        break;
      } else if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    setHighlightPath(path);
    setActiveNodeVal(found ? val : null);
    if (found) {
      setSearchStatus({
        found: true,
        message: `Tìm thấy ${val}! Đường đi: ${path.join(" → ")} (${path.length} bước so sánh)`
      });
    } else {
      setSearchStatus({
        found: false,
        message: `Không tìm thấy ${val} trong cây. Đã duyệt vết: ${path.join(" → ")}`
      });
    }
  };

  // Reset Tree
  const handleReset = () => {
    setIsTraversing(false);
    setTreeValues([50, 30, 70, 20, 40, 60, 80]);
    setActiveNodeVal(null);
    setHighlightPath([]);
    setTraversalResult([]);
    setTraversalType(null);
    setSearchStatus(null);
    setInputVal("");
  };

  // Traversal Algorithms
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runTraversal = async (type) => {
    if (isTraversing || !currentTree) return;
    setIsTraversing(true);
    setTraversalType(type);
    setTraversalResult([]);
    setSearchStatus(null);
    setHighlightPath([]);

    const result = [];

    const inorder = (node, list) => {
      if (!node) return;
      inorder(node.left, list);
      list.push(node.val);
      inorder(node.right, list);
    };

    const preorder = (node, list) => {
      if (!node) return;
      list.push(node.val);
      preorder(node.left, list);
      preorder(node.right, list);
    };

    const postorder = (node, list) => {
      if (!node) return;
      postorder(node.left, list);
      postorder(node.right, list);
      list.push(node.val);
    };

    const levelorder = (root, list) => {
      if (!root) return;
      const queue = [root];
      while (queue.length > 0) {
        const curr = queue.shift();
        list.push(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    };

    const sequence = [];
    if (type === "inorder") inorder(currentTree, sequence);
    else if (type === "preorder") preorder(currentTree, sequence);
    else if (type === "postorder") postorder(currentTree, sequence);
    else if (type === "levelorder") levelorder(currentTree, sequence);

    for (let i = 0; i < sequence.length; i++) {
      if (!isTraversingRef.current) break;
      const val = sequence[i];
      setActiveNodeVal(val);
      result.push(val);
      setTraversalResult([...result]);
      await delay(450);
    }

    setActiveNodeVal(null);
    setIsTraversing(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 text-slate-800 rounded-3xl p-6 md:p-9 border border-emerald-200/80 shadow-sm my-6 font-sans relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER BADGE & TITLE */}
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Trees className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>DSA • BÀI 8: BINARY SEARCH TREE (BST)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 bg-teal-100/70 border border-teal-200 text-teal-800 rounded-lg flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-teal-600" />
              Độ phức tạp: O(log n)
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100/70 border border-amber-200 text-amber-800 rounded-lg flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              Left &lt; Root &lt; Right
            </span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Cây Nhị Phân Tìm Kiếm & Cấu Trúc Dữ Liệu Phân Cấp
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-2 max-w-4xl leading-relaxed">
          Khám phá cấu trúc dữ liệu cây phi tuyến tính (Hierarchical Tree), quy tắc vàng{" "}
          <strong className="text-emerald-700 font-bold font-mono">Left &lt; Root &lt; Right</strong>, các giải thuật duyệt cây kinh điển (In-order, Pre-order, Post-order, Level-order) và thao tác tìm kiếm, chèn, xóa nút với hiệu năng{" "}
          <strong className="text-emerald-700 font-bold">O(log n)</strong>.
        </p>
      </div>

      {/* 4 QUICK METRIC STAT CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 my-6 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-2xl p-4 shadow-sm hover:border-emerald-300 transition-all">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Quy Tắc BST</span>
          </div>
          <div className="text-sm font-extrabold text-emerald-800 font-mono">Left &lt; Root &lt; Right</div>
          <div className="text-xs text-slate-500 mt-1">Tính chất cốt lõi không trùng lặp</div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm border border-teal-200 rounded-2xl p-4 shadow-sm hover:border-teal-300 transition-all">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
              <Scale className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Cây Cân Bằng</span>
          </div>
          <div className="text-base font-extrabold text-teal-800 font-mono">O(log n)</div>
          <div className="text-xs text-slate-500 mt-1">Search / Insert / Delete (Best/Avg)</div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm border border-amber-200 rounded-2xl p-4 shadow-sm hover:border-amber-300 transition-all">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Split className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Cây Thoái Hóa</span>
          </div>
          <div className="text-base font-extrabold text-amber-800 font-mono">O(n)</div>
          <div className="text-xs text-slate-500 mt-1">Suy biến thành danh sách liên kết</div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm border border-indigo-200 rounded-2xl p-4 shadow-sm hover:border-indigo-300 transition-all">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
              <ArrowDownUp className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">In-Order Traversal</span>
          </div>
          <div className="text-sm font-extrabold text-indigo-800 font-mono">L → V → R</div>
          <div className="text-xs text-slate-500 mt-1">Xuất dãy khóa sắp thứ tự tăng dần</div>
        </div>
      </div>

      {/* INTERACTIVE LIVE BST WORKBENCH */}
      <div className="bg-white/95 rounded-2xl border border-emerald-200 shadow-sm p-4 md:p-6 mb-6 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              Phòng Thí Nghiệm Cây BST Trực Quan (Live BST Sandbox)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Thực hành Thêm, Tìm kiếm theo vết, Xóa và Quan sát 4 chế độ duyệt cây đệ quy thời gian thực.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Đặt lại cây mẫu
            </button>
          </div>
        </div>

        {/* CONTROLS BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 my-4">
          {/* Input and Basic Operations */}
          <div className="lg:col-span-6 flex items-center gap-2">
            <input
              type="number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Nhập giá trị khóa (VD: 25, 65...)"
              className="flex-1 px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-mono"
            />
            <button
              onClick={() => handleInsert()}
              disabled={isTraversing || !inputVal}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              Chèn
            </button>
            <button
              onClick={handleSearch}
              disabled={isTraversing || !inputVal}
              className="px-3.5 py-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1"
            >
              <Search className="w-3.5 h-3.5" />
              Tìm
            </button>
            <button
              onClick={() => handleDelete()}
              disabled={isTraversing || !inputVal}
              className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 disabled:opacity-50 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Xóa
            </button>
          </div>

          {/* Traversal Buttons */}
          <div className="lg:col-span-6 flex items-center gap-1.5 flex-wrap justify-start lg:justify-end">
            <span className="text-xs font-bold text-slate-500 mr-1">Duyệt:</span>
            <button
              onClick={() => runTraversal("inorder")}
              disabled={isTraversing}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                traversalType === "inorder"
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200"
              }`}
            >
              <Play className="w-3 h-3" />
              In-Order (LVR)
            </button>
            <button
              onClick={() => runTraversal("preorder")}
              disabled={isTraversing}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                traversalType === "preorder"
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200"
              }`}
            >
              <Play className="w-3 h-3" />
              Pre-Order (VLR)
            </button>
            <button
              onClick={() => runTraversal("postorder")}
              disabled={isTraversing}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                traversalType === "postorder"
                  ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                  : "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200"
              }`}
            >
              <Play className="w-3 h-3" />
              Post-Order (LRV)
            </button>
            <button
              onClick={() => runTraversal("levelorder")}
              disabled={isTraversing}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                traversalType === "levelorder"
                  ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                  : "bg-teal-50 hover:bg-teal-100 text-teal-700 border-teal-200"
              }`}
            >
              <Play className="w-3 h-3" />
              Level-Order (BFS)
            </button>
          </div>
        </div>

        {/* STATUS BAR OR NOTIFICATION */}
        {searchStatus && (
          <div
            className={`p-2.5 rounded-xl text-xs font-medium mb-3 flex items-center gap-2 border ${
              searchStatus.found
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-amber-50 text-amber-800 border-amber-200"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>{searchStatus.message}</span>
          </div>
        )}

        {/* SVG TREE CANVAS */}
        <div className="w-full bg-slate-900 rounded-2xl p-4 overflow-x-auto min-h-[260px] flex items-center justify-center relative shadow-inner border border-slate-800">
          <svg className="w-[480px] h-[250px] overflow-visible" viewBox="0 0 480 250">
            {/* Draw Edges */}
            {edges.map((edge, idx) => {
              const isPath =
                highlightPath.includes(edge.fromVal) &&
                highlightPath.includes(edge.toVal) &&
                highlightPath.indexOf(edge.toVal) === highlightPath.indexOf(edge.fromVal) + 1;

              return (
                <g key={`edge-${idx}`}>
                  <line
                    x1={edge.from.x}
                    y1={edge.from.y}
                    x2={edge.to.x}
                    y2={edge.to.y}
                    stroke={isPath ? "#10B981" : "#475569"}
                    strokeWidth={isPath ? 3.5 : 2}
                    strokeDasharray={isPath ? "none" : "none"}
                    className="transition-all duration-300"
                  />
                  {/* Left / Right indicator label */}
                  <text
                    x={(edge.from.x + edge.to.x) / 2 + (edge.side === "L" ? -10 : 10)}
                    y={(edge.from.y + edge.to.y) / 2}
                    fill="#94A3B8"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {edge.side}
                  </text>
                </g>
              );
            })}

            {/* Draw Nodes */}
            {nodes.map((node) => {
              const isActive = activeNodeVal === node.val;
              const isPath = highlightPath.includes(node.val);

              let fillColor = "#1E293B"; // Slate 800
              let strokeColor = "#64748B"; // Slate 500
              let textColor = "#F8FAFC"; // Slate 50

              if (isActive) {
                fillColor = "#10B981"; // Emerald 500
                strokeColor = "#34D399";
                textColor = "#FFFFFF";
              } else if (isPath) {
                fillColor = "#047857"; // Emerald 700
                strokeColor = "#10B981";
                textColor = "#FFFFFF";
              }

              return (
                <g
                  key={`node-${node.val}`}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110 origin-center"
                  onClick={() => {
                    setInputVal(node.val.toString());
                    handleSearch();
                  }}
                >
                  {/* Outer pulse effect if active */}
                  {isActive && (
                    <circle cx={node.x} cy={node.y} r={24} fill="none" stroke="#34D399" strokeWidth="2" opacity="0.6" className="animate-ping" />
                  )}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={18}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isActive || isPath ? 3 : 2}
                    className="transition-all duration-300 shadow-md"
                  />
                  <text
                    x={node.x}
                    y={node.y + 4}
                    fill={textColor}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {node.val}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* TRAVERSAL SEQUENCE OUTPUT BAR */}
        {traversalResult.length > 0 && (
          <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                Kết quả duyệt{" "}
                <span className="font-mono text-emerald-700 uppercase font-bold">
                  ({traversalType})
                </span>
                :
              </span>
              <span className="text-xs text-slate-500 font-mono font-medium">
                {traversalResult.length}/{nodes.length} nút
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {traversalResult.map((val, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span className="px-2.5 py-1 bg-white border border-emerald-300 text-emerald-800 rounded-lg text-xs font-bold font-mono shadow-2xs">
                    {val}
                  </span>
                  {idx < traversalResult.length - 1 && (
                    <span className="text-slate-400 text-xs font-bold">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4 CORE KNOWLEDGE TABS */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-emerald-200/80 p-4 md:p-6 relative z-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("property")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === "property"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            1. Tính chất cốt lõi BST
          </button>
          <button
            onClick={() => setActiveTab("traversals")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === "traversals"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <ArrowDownUp className="w-3.5 h-3.5" />
            2. 4 Cách Duyệt Cây (Traversals)
          </button>
          <button
            onClick={() => setActiveTab("deletion")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === "deletion"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            3. Ba Trường Hợp Xóa Nút
          </button>
          <button
            onClick={() => setActiveTab("complexity")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === "complexity"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            4. Hiệu Năng: O(log n) vs O(n)
          </button>
        </div>

        {/* TAB CONTENTS */}
        <div className="pt-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          {activeTab === "property" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5">
                <strong className="text-emerald-900 block mb-1 font-bold">Cây con trái (Left Subtree)</strong>
                Mọi phần tử trong cây con trái đều phải có giá trị khóa <strong className="text-emerald-800 font-mono">nhỏ hơn (&lt;)</strong> nút gốc (Root).
              </div>
              <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3.5">
                <strong className="text-teal-900 block mb-1 font-bold">Cây con phải (Right Subtree)</strong>
                Mọi phần tử trong cây con phải đều phải có giá trị khóa <strong className="text-teal-800 font-mono">lớn hơn (&gt;)</strong> nút gốc (Root).
              </div>
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5">
                <strong className="text-amber-900 block mb-1 font-bold">Tính đệ quy (Recursive Property)</strong>
                Mọi cây con (Subtree) của cây BST đều phải thỏa mãn tính chất BST một cách đệ quy.
              </div>
            </div>
          )}

          {activeTab === "traversals" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-bold font-mono text-xs">In-Order</span>
                <div className="font-bold text-slate-800 mt-1.5 font-mono">L → V → R</div>
                <p className="text-xs text-slate-500 mt-1">Duyệt Trái → Gốc → Phải. Xuất dãy tăng dần trên BST.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold font-mono text-xs">Pre-Order</span>
                <div className="font-bold text-slate-800 mt-1.5 font-mono">V → L → R</div>
                <p className="text-xs text-slate-500 mt-1">Duyệt Gốc → Trái → Phải. Ứng dụng sao chép cây, Prefix.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-bold font-mono text-xs">Post-Order</span>
                <div className="font-bold text-slate-800 mt-1.5 font-mono">L → R → V</div>
                <p className="text-xs text-slate-500 mt-1">Duyệt Trái → Phải → Gốc. Ứng dụng xóa cây, giải phóng RAM.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded font-bold font-mono text-xs">Level-Order</span>
                <div className="font-bold text-slate-800 mt-1.5 font-mono">Queue (BFS)</div>
                <p className="text-xs text-slate-500 mt-1">Duyệt từng tầng theo chiều ngang từ trên xuống dưới.</p>
              </div>
            </div>
          )}

          {activeTab === "deletion" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong className="text-slate-900 block mb-1 font-bold text-xs uppercase text-rose-700">Trường hợp 1: Nút Lá (0 con)</strong>
                Đơn giản ngắt liên kết từ nút cha trỏ đến nó (<code className="font-mono text-xs">parent.link = null</code>).
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong className="text-slate-900 block mb-1 font-bold text-xs uppercase text-amber-700">Trường hợp 2: Nút có 1 con</strong>
                Bỏ qua nút bị xóa, nối trực tiếp nút cha của nó tới nút con duy nhất còn lại.
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong className="text-slate-900 block mb-1 font-bold text-xs uppercase text-emerald-700">Trường hợp 3: Nút có 2 con</strong>
                Thay thế bằng <strong className="text-emerald-800">Inorder Successor</strong> (nút nhỏ nhất cây con phải) hoặc <strong className="text-indigo-800">Inorder Predecessor</strong>.
              </div>
            </div>
          )}

          {activeTab === "complexity" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-emerald-900 font-bold">Cây Cân Bằng (Balanced BST)</strong>
                  <span className="font-mono font-extrabold text-emerald-700 text-sm">O(log n)</span>
                </div>
                <p className="text-xs text-slate-600">
                  Chiều cao cây đạt mức tối ưu $h = \lfloor \log_2 n \rfloor$. Số phép so sánh giảm theo hàm logarit tương tự Binary Search trên mảng đã sắp xếp.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-amber-900 font-bold">Cây Thoái Hóa (Skewed / Degenerate)</strong>
                  <span className="font-mono font-extrabold text-amber-700 text-sm">O(n)</span>
                </div>
                <p className="text-xs text-slate-600">
                  Xảy ra khi chèn dãy số đã được sắp xếp tăng dần hoặc giảm dần. Cây bị lệch hẳn về một phía và thoái hóa thành Danh sách liên kết.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
