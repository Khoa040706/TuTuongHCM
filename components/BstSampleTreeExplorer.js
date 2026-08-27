"use client";

import React, { useState } from "react";
import { TreePine, Info, Layers, Eye, CornerDownRight, Sparkles } from "lucide-react";

export default function BstSampleTreeExplorer() {
  // Highlight mode: "none" | "internal" | "leaves" | "bst_prop" | "recursion"
  const [highlightMode, setHighlightMode] = useState("none");
  const [selectedNode, setSelectedNode] = useState(null); // Node details object

  // Tree nodes metadata
  const nodes = [
    { id: 15, key: 15, x: 250, y: 50, parent: null, left: 6, right: 23, depth: 0, isLeaf: false, role: "Root (Gốc cây)" },
    { id: 6, key: 6, x: 140, y: 130, parent: 15, left: 4, right: 7, depth: 1, isLeaf: false, role: "Internal Vertex (Đỉnh trong - Gốc cây con trái)" },
    { id: 23, key: 23, x: 360, y: 130, parent: 15, left: null, right: 71, depth: 1, isLeaf: false, role: "Internal Vertex (Đỉnh trong - Gốc cây con phải)" },
    { id: 4, key: 4, x: 80, y: 210, parent: 6, left: null, right: 5, depth: 2, isLeaf: false, role: "Internal Vertex (Đỉnh trong)" },
    { id: 7, key: 7, x: 200, y: 210, parent: 6, left: null, right: null, depth: 2, isLeaf: true, role: "Leaf (Đỉnh lá - không có con)" },
    { id: 71, key: 71, x: 420, y: 210, parent: 23, left: 50, right: null, depth: 2, isLeaf: false, role: "Internal Vertex (Đỉnh trong)" },
    { id: 5, key: 5, x: 120, y: 290, parent: 4, left: null, right: null, depth: 3, isLeaf: true, role: "Leaf (Đỉnh lá - không có con)" },
    { id: 50, key: 50, x: 370, y: 290, parent: 71, left: null, right: null, depth: 3, isLeaf: true, role: "Leaf (Đỉnh lá - không có con)" },
  ];

  // Tree edges
  const edges = [
    { from: 15, to: 6, label: "< 15 (trái)" },
    { from: 15, to: 23, label: "> 15 (phải)" },
    { from: 6, to: 4, label: "< 6 (trái)" },
    { from: 6, to: 7, label: "> 6 (phải)" },
    { from: 4, to: 5, label: "> 4 (phải)" },
    { from: 23, to: 71, label: "> 23 (phải)" },
    { from: 71, to: 50, label: "< 71 (trái)" },
  ];

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const isInternal = (key) => [15, 6, 23, 4, 71].includes(key);
  const isLeaf = (key) => [5, 7, 50].includes(key);

  const getNodeFill = (node) => {
    if (selectedNode && selectedNode.id === node.id) {
      return "#fef3c7"; // Warm Amber
    }
    if (highlightMode === "internal") {
      return isInternal(node.key) ? "#d1fae5" : "#f8fafc";
    }
    if (highlightMode === "leaves") {
      return isLeaf(node.key) ? "#ffedd5" : "#f8fafc";
    }
    if (highlightMode === "recursion") {
      if ([6, 4, 7, 5].includes(node.key)) return "#e0f2fe"; // Left subtree
      if ([23, 71, 50].includes(node.key)) return "#f3e8ff"; // Right subtree
      return "#dcfce7"; // Root
    }
    if (highlightMode === "bst_prop") {
      return "#ccfbf1";
    }
    return node.key === 15 ? "#dcfce7" : isLeaf(node.key) ? "#e0f2fe" : "#ffffff";
  };

  const getNodeStroke = (node) => {
    if (selectedNode && selectedNode.id === node.id) return "#d97706";
    if (highlightMode === "internal" && isInternal(node.key)) return "#059669";
    if (highlightMode === "leaves" && isLeaf(node.key)) return "#ea580c";
    if (highlightMode === "recursion") {
      if ([6, 4, 7, 5].includes(node.key)) return "#0284c7";
      if ([23, 71, 50].includes(node.key)) return "#7e22ce";
    }
    return node.key === 15 ? "#059669" : "#64748b";
  };

  const getNodeTextColor = (node) => {
    if (selectedNode && selectedNode.id === node.id) return "#92400e";
    if (highlightMode === "internal" && isInternal(node.key)) return "#065f46";
    if (highlightMode === "leaves" && isLeaf(node.key)) return "#9a3412";
    if (highlightMode === "recursion") {
      if ([6, 4, 7, 5].includes(node.key)) return "#0369a1";
      if ([23, 71, 50].includes(node.key)) return "#6b21a8";
    }
    return "#0f172a";
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <TreePine className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mô Hình Cây Chuẩn Mực</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Cây Mẫu BST Dùng Xuyên Suốt Bài Học (Root = 15)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Được sử dụng làm chuẩn mực minh họa cho tất cả các thao tác: Search, Successor, Insert, Delete, Inorder...
          </p>
        </div>

        {/* Legend Summary */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold font-mono">
            5 Đỉnh Trong (Internal)
          </span>
          <span className="px-3 py-1 rounded-xl bg-amber-50 border border-amber-300 text-amber-800 font-bold font-mono">
            3 Đỉnh Lá (Leaves)
          </span>
        </div>
      </div>

      {/* 4 Interactive Mode Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 p-3 rounded-2xl bg-white border border-emerald-100 shadow-sm">
        <span className="text-xs font-bold text-slate-700 self-center mr-2 flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-emerald-600" />
          Chế độ xem:
        </span>

        <button
          onClick={() => setHighlightMode("none")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            highlightMode === "none"
              ? "bg-emerald-700 text-white shadow-sm"
              : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          Mặc Định
        </button>

        <button
          onClick={() => setHighlightMode("internal")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            highlightMode === "internal"
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Internal Vertices (Đỉnh trong: 15, 6, 23, 4, 71)
        </button>

        <button
          onClick={() => setHighlightMode("leaves")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            highlightMode === "leaves"
              ? "bg-amber-600 text-white shadow-sm"
              : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          Leaves (Đỉnh lá: 5, 7, 50)
        </button>

        <button
          onClick={() => setHighlightMode("bst_prop")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            highlightMode === "bst_prop"
              ? "bg-teal-600 text-white shadow-sm"
              : "bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Bất Đẳng Thức Nhánh (&lt; / &gt;)
        </button>

        <button
          onClick={() => setHighlightMode("recursion")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            highlightMode === "recursion"
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          Tính Chất Đệ Quy (Cây Con Trái/Phải)
        </button>
      </div>

      {/* Main Canvas + Node Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree View (8 cols) */}
        <div className="lg:col-span-8 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
          <svg viewBox="0 0 500 350" className="w-full h-auto select-none max-w-[500px]">
            {/* Recursion Subtree Enclosure Boxes */}
            {highlightMode === "recursion" && (
              <>
                {/* Left Subtree Enclosure */}
                <rect
                  x="40"
                  y="100"
                  width="190"
                  height="225"
                  rx="16"
                  fill="rgba(2, 132, 199, 0.06)"
                  stroke="#0284c7"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <text x="135" y="318" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">
                  Cây con trái (Root=6) là BST hợp lệ
                </text>

                {/* Right Subtree Enclosure */}
                <rect
                  x="330"
                  y="100"
                  width="140"
                  height="225"
                  rx="16"
                  fill="rgba(126, 34, 206, 0.06)"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <text x="400" y="318" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="bold">
                  Cây con phải (Root=23) là BST hợp lệ
                </text>
              </>
            )}

            {/* Draw Edges */}
            {edges.map((edge, idx) => {
              const fromNode = nodes.find((n) => n.id === edge.from);
              const toNode = nodes.find((n) => n.id === edge.to);
              const midX = (fromNode.x + toNode.x) / 2;
              const midY = (fromNode.y + toNode.y) / 2;

              return (
                <g key={idx}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke="#94a3b8"
                    strokeWidth="2.5"
                  />
                  {highlightMode === "bst_prop" && (
                    <g>
                      <rect
                        x={midX - 24}
                        y={midY - 10}
                        width="48"
                        height="18"
                        rx="4"
                        fill="#ffffff"
                        stroke="#0d9488"
                        strokeWidth="1.5"
                      />
                      <text
                        x={midX}
                        y={midY + 3}
                        textAnchor="middle"
                        fill="#0f766e"
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {edge.label.split(" ")[0]}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Draw Nodes */}
            {nodes.map((node) => {
              const isSel = selectedNode && selectedNode.id === node.id;
              return (
                <g
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={22}
                    fill={getNodeFill(node)}
                    stroke={getNodeStroke(node)}
                    strokeWidth={isSel ? "3.5" : "2.5"}
                  />
                  <text
                    x={node.x}
                    y={node.y + 6}
                    textAnchor="middle"
                    fill={getNodeTextColor(node)}
                    fontSize="15"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.key}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="text-[11px] text-slate-500 mt-2 italic">
            * Nhấp vào bất kỳ đỉnh nào để tra cứu thông số liên kết chi tiết
          </div>
        </div>

        {/* Node Inspector Panel (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm flex flex-col justify-between self-stretch">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-600" />
                Thông Số Đỉnh Đã Chọn
              </h4>
              {selectedNode && (
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-[10px] text-slate-500 hover:text-slate-800 underline"
                >
                  Bỏ chọn
                </button>
              )}
            </div>

            {selectedNode ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="text-xs text-slate-600">Khóa (Key / Age):</div>
                  <div className="text-2xl font-black font-mono text-emerald-900">
                    {selectedNode.key}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-bold mt-0.5">
                    {selectedNode.role}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-600 font-mono">x.parent:</span>
                    <span className="font-mono font-bold text-sky-700">
                      {selectedNode.parent !== null ? selectedNode.parent : "NULL (Root)"}
                    </span>
                  </div>

                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-600 font-mono">x.left:</span>
                    <span className="font-mono font-bold text-rose-700">
                      {selectedNode.left !== null ? selectedNode.left : "NULL"}
                    </span>
                  </div>

                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-600 font-mono">x.right:</span>
                    <span className="font-mono font-bold text-purple-700">
                      {selectedNode.right !== null ? selectedNode.right : "NULL"}
                    </span>
                  </div>

                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-600">Độ sâu (Depth):</span>
                    <span className="font-mono font-bold text-emerald-800">
                      level {selectedNode.depth}
                    </span>
                  </div>

                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-600">Loại đỉnh:</span>
                    <span className={`font-bold ${selectedNode.isLeaf ? "text-amber-800" : "text-emerald-800"}`}>
                      {selectedNode.isLeaf ? "🍃 Đỉnh lá (Leaf)" : "🌳 Đỉnh trong (Internal)"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-xs text-slate-500 space-y-2">
                <CornerDownRight className="w-8 h-8 text-slate-400 mx-auto animate-bounce" />
                <p>Hãy nhấp vào một hình tròn trên cây để xem chi tiết liên kết <span className="font-mono text-emerald-700 font-bold">parent, left, right</span>.</p>
              </div>
            )}
          </div>

          {/* Bottom Card Summary */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">Quy ước bài giảng:</span> Cây mẫu này sẽ được tái sử dụng trong tất cả các ví dụ minh họa tiếp theo.
          </div>
        </div>
      </div>
    </div>
  );
}
