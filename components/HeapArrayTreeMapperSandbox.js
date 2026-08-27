"use client";

import React, { useState } from "react";
import { Database, Eye } from "lucide-react";

export default function HeapArrayTreeMapperSandbox() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Sample array from slide: [NIL, 90, 19, 36, 17, 3, 25, 1, 2, 7, "-", "-"]
  const arrayData = [
    { idx: 0, val: "NIL", isNil: true, isUsed: false },
    { idx: 1, val: 90, isNil: false, isUsed: true },
    { idx: 2, val: 19, isNil: false, isUsed: true },
    { idx: 3, val: 36, isNil: false, isUsed: true },
    { idx: 4, val: 17, isNil: false, isUsed: true },
    { idx: 5, val: 3, isNil: false, isUsed: true },
    { idx: 6, val: 25, isNil: false, isUsed: true },
    { idx: 7, val: 1, isNil: false, isUsed: true },
    { idx: 8, val: 2, isNil: false, isUsed: true },
    { idx: 9, val: 7, isNil: false, isUsed: true },
    { idx: 10, val: "-", isNil: false, isUsed: false },
    { idx: 11, val: "-", isNil: false, isUsed: false },
  ];

  // Tree nodes with SVG positions
  const treeNodes = [
    { idx: 1, val: 90, x: 200, y: 35, level: 0 },
    { idx: 2, val: 19, x: 100, y: 95, level: 1 },
    { idx: 3, val: 36, x: 300, y: 95, level: 1 },
    { idx: 4, val: 17, x: 55, y: 155, level: 2 },
    { idx: 5, val: 3, x: 145, y: 155, level: 2 },
    { idx: 6, val: 25, x: 255, y: 155, level: 2 },
    { idx: 7, val: 1, x: 345, y: 155, level: 2 },
    { idx: 8, val: 2, x: 30, y: 215, level: 3 },
    { idx: 9, val: 7, x: 80, y: 215, level: 3 },
  ];

  const treeEdges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
    { from: 4, to: 9 },
  ];

  const activeNode = treeNodes.find((n) => n.idx === hoveredIdx);

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Database className="w-3.5 h-3.5 text-amber-700" />
            <span>Biểu Diễn Mảng 1-Based (Mục 4.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Lưu Trữ Cây Hoàn Chỉnh Bằng 1-Based Compact Array
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Không cần con trỏ `left/right` cồng kềnh (0 bytes overhead). Mảng 1 chiều ánh xạ 1-1 chính xác với cấu trúc cây nhị phân hoàn chỉnh.
          </p>
        </div>

        {/* Heap Size Badge */}
        <div className="flex items-center gap-2 text-xs font-mono self-start md:self-auto">
          <div className="px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-100 text-amber-950 font-bold shadow-sm">
            heapsize = 9
          </div>
          <div className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm">
            size(A) = 11
          </div>
        </div>
      </div>

      {/* Main Dual-View Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Tree SVG (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-1.5 font-bold">
              <Eye className="w-3.5 h-3.5 text-amber-600" />
              Complete Binary Tree (Cây Nhị Phân Hoàn Chỉnh)
            </span>
            <span className="text-[11px] text-amber-800 font-medium">Rê chuột vào node để xem ánh xạ</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 400 250" className="w-full max-w-[380px] h-auto select-none">
              {/* Edges */}
              {treeEdges.map((e, idx) => {
                const fromNode = treeNodes.find((n) => n.idx === e.from);
                const toNode = treeNodes.find((n) => n.idx === e.to);
                const isHighlighted = hoveredIdx === e.from || hoveredIdx === e.to;

                return (
                  <line
                    key={idx}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isHighlighted ? "#d97706" : "#cbd5e1"}
                    strokeWidth={isHighlighted ? "3" : "2"}
                    className="transition-all duration-200"
                  />
                );
              })}

              {/* Nodes */}
              {treeNodes.map((n) => {
                const isHovered = hoveredIdx === n.idx;
                const isRoot = n.idx === 1;

                return (
                  <g
                    key={n.idx}
                    onMouseEnter={() => setHoveredIdx(n.idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="cursor-pointer transition-transform"
                  >
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isHovered ? "18" : "15"}
                      fill={isHovered ? "#d1fae5" : isRoot ? "#fef3c7" : "#ffffff"}
                      stroke={isHovered ? "#059669" : isRoot ? "#d97706" : "#059669"}
                      strokeWidth={isHovered ? "3" : isRoot ? "2.5" : "2"}
                      className="transition-all duration-200"
                    />
                    <text
                      x={n.x}
                      y={n.y + 4.5}
                      textAnchor="middle"
                      fill={isHovered ? "#065f46" : isRoot ? "#92400e" : "#0f172a"}
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {n.val}
                    </text>
                    {/* Index Label above node */}
                    <text
                      x={n.x}
                      y={n.y - 18}
                      textAnchor="middle"
                      fill={isHovered ? "#047857" : "#64748b"}
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      [{n.idx}]
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: 1-Based Array Layout (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mảng 1D A[0..11] Trong Bộ Nhớ</span>
            <span className="text-[10px] text-emerald-800 font-bold">1-based indexing</span>
          </div>

          {/* Array Boxes */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
            {arrayData.map((item) => {
              const isHovered = hoveredIdx === item.idx;
              const isUsed = item.isUsed;
              const isNil = item.isNil;

              return (
                <div
                  key={item.idx}
                  onMouseEnter={() => item.idx > 0 && item.idx <= 9 && setHoveredIdx(item.idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`p-2.5 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer shadow-sm ${
                    isHovered
                      ? "bg-amber-100 border-amber-400 text-amber-950 scale-105 ring-2 ring-amber-500/40 font-bold"
                      : isNil
                      ? "bg-slate-50 border-dashed border-slate-200 text-slate-400 opacity-60"
                      : !isUsed
                      ? "bg-slate-50/40 border-dashed border-slate-200 text-slate-400"
                      : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                  }`}
                >
                  <span className="font-mono font-extrabold text-sm">
                    {item.val}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 mt-0.5">
                    [{item.idx}]
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Node Info Callout */}
          {activeNode ? (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-mono space-y-1 shadow-sm">
              <div className="text-amber-950 font-bold flex items-center justify-between">
                <span>Node A[{activeNode.idx}] = {activeNode.val}</span>
                <span className="text-[10px] text-slate-600">Tầng Level {activeNode.level}</span>
              </div>
              <div className="text-[11px] text-slate-700 space-y-0.5 pt-1">
                <div>• Parent: {activeNode.idx === 1 ? "Không có (Root)" : `A[⌊${activeNode.idx}/2⌋] = A[${Math.floor(activeNode.idx/2)}]`}</div>
                <div>• Left Child: {2 * activeNode.idx <= 9 ? `A[${2 * activeNode.idx}]` : "NULL (Tràn biên heapsize)"}</div>
                <div>• Right Child: {2 * activeNode.idx + 1 <= 9 ? `A[${2 * activeNode.idx + 1}]` : "NULL (Tràn biên heapsize)"}</div>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-sans text-slate-700 leading-relaxed shadow-sm">
              💡 <strong>Lưu ý:</strong> Vị trí <code>A[0] = NIL</code> không dùng để các công thức <code>parent = i/2</code>, <code>left = 2i</code>, <code>right = 2i+1</code> trở nên vô cùng đơn giản và ngắn gọn!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
