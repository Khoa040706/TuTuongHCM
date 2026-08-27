"use client";

import React, { useState } from "react";
import { TreePine, Sparkles, Layers, Info } from "lucide-react";

export default function BstHeightSizeInspector() {
  const [selectedNodeKey, setSelectedNodeKey] = useState(15);
  const [viewMode, setViewMode] = useState("both"); // "both" | "height" | "size"

  // Precomputed BST sample tree (Root = 15)
  const treeNodes = {
    15: { key: 15, x: 240, y: 40, height: 3, size: 7, left: 6, right: 23, leftH: 2, rightH: 2, leftS: 4, rightS: 2 },
    6: { key: 6, x: 140, y: 110, height: 2, size: 4, left: 4, right: 7, leftH: 1, rightH: 0, leftS: 2, rightS: 1 },
    23: { key: 23, x: 340, y: 110, height: 2, size: 2, left: null, right: 71, leftH: -1, rightH: 1, leftS: 0, rightS: 1 },
    4: { key: 4, x: 90, y: 180, height: 1, size: 2, left: null, right: 5, leftH: -1, rightH: 0, leftS: 0, rightS: 1 },
    7: { key: 7, x: 190, y: 180, height: 0, size: 1, left: null, right: null, leftH: -1, rightH: -1, leftS: 0, rightS: 0 },
    71: { key: 71, x: 390, y: 180, height: 1, size: 1, left: null, right: null, leftH: -1, rightH: -1, leftS: 0, rightS: 0 },
    5: { key: 5, x: 120, y: 250, height: 0, size: 1, left: null, right: null, leftH: -1, rightH: -1, leftS: 0, rightS: 0 },
  };

  const edges = [
    { from: 15, to: 6 },
    { from: 15, to: 23 },
    { from: 6, to: 4 },
    { from: 6, to: 7 },
    { from: 4, to: 5 },
    { from: 23, to: 71 },
  ];

  const selected = treeNodes[selectedNodeKey];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <TreePine className="w-3.5 h-3.5 text-emerald-700" />
            <span>Thuộc Tính Bổ Sung &amp; Đệ Quy Của Cây BST (Mục 1.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Inspector: Height &amp; Size Tính Toán Đệ Quy
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Nhấp vào từng đỉnh để quan sát công thức đệ quy tính toán <strong>Chiều cao (Height)</strong> và <strong>Kích thước (Size)</strong>.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setViewMode("both")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              viewMode === "both" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cả Height &amp; Size
          </button>
          <button
            onClick={() => setViewMode("height")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              viewMode === "height" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Chỉ Height (h)
          </button>
          <button
            onClick={() => setViewMode("size")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              viewMode === "size" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Chỉ Size (s)
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive SVG Canvas + Recursive Formula Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree Canvas (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative min-h-[320px]">
          <svg viewBox="0 0 480 300" className="w-full h-auto select-none max-w-[480px]">
            {/* Edges */}
            {edges.map((e, idx) => {
              const f = treeNodes[e.from];
              const t = treeNodes[e.to];
              const isHighlighted = selectedNodeKey === e.from || selectedNodeKey === e.to;
              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={isHighlighted ? "#059669" : "#cbd5e1"}
                  strokeWidth={isHighlighted ? "3" : "2"}
                />
              );
            })}

            {/* Nodes */}
            {Object.values(treeNodes).map((node) => {
              const isSel = selectedNodeKey === node.key;

              return (
                <g
                  key={node.key}
                  onClick={() => setSelectedNodeKey(node.key)}
                  className="cursor-pointer transition-all duration-300 group"
                >
                  {isSel && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="24"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2.5"
                      className="animate-ping"
                      opacity="0.5"
                    />
                  )}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="18"
                    fill={isSel ? "#d1fae5" : "#ffffff"}
                    stroke={isSel ? "#059669" : "#94a3b8"}
                    strokeWidth={isSel ? "3" : "2"}
                  />

                  {/* Node Key */}
                  <text
                    x={node.x}
                    y={node.y + 4.5}
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.key}
                  </text>

                  {/* Height Badge (Top Right) */}
                  {(viewMode === "both" || viewMode === "height") && (
                    <g transform={`translate(${node.x + 13}, ${node.y - 12})`}>
                      <rect
                        x="-10"
                        y="-7"
                        width="20"
                        height="14"
                        rx="4"
                        fill="#d1fae5"
                        stroke="#059669"
                        strokeWidth="1"
                      />
                      <text
                        x="0"
                        y="3.5"
                        textAnchor="middle"
                        fill="#065f46"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        h:{node.height}
                      </text>
                    </g>
                  )}

                  {/* Size Badge (Bottom Right) */}
                  {(viewMode === "both" || viewMode === "size") && (
                    <g transform={`translate(${node.x + 13}, ${node.y + 14})`}>
                      <rect
                        x="-10"
                        y="-7"
                        width="20"
                        height="14"
                        rx="4"
                        fill="#e0f2fe"
                        stroke="#0284c7"
                        strokeWidth="1"
                      />
                      <text
                        x="0"
                        y="3.5"
                        textAnchor="middle"
                        fill="#0369a1"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        s:{node.size}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Quick Info Bar */}
          <div className="w-full mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 flex items-center justify-between font-semibold">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-emerald-600" />
              Đang chọn: <strong className="text-emerald-900 font-mono">Đỉnh {selected.key}</strong>
            </span>
            <span className="text-slate-500 italic">Nhấp vào đỉnh khác để xem đệ quy</span>
          </div>
        </div>

        {/* Recursive Formula Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                Chi Tiết Đệ Quy Tại Đỉnh {selected.key}
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                h = {selected.height} | size = {selected.size}
              </span>
            </div>

            {/* Height Formula */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <div className="text-[11px] font-bold text-emerald-950 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-emerald-700" />
                Công thức Height (Chiều cao = Số cạnh đến lá sâu nhất):
              </div>
              <div className="font-mono text-xs text-slate-800 bg-white p-2.5 rounded-xl border border-emerald-100 font-bold">
                x.height = max(x.left.h, x.right.h) + 1<br />
                <span className="text-emerald-800">
                  {selected.key}.height = max({selected.leftH}, {selected.rightH}) + 1 = {selected.height}
                </span>
              </div>
              <p className="text-[10px] text-slate-600">
                * Cây con rỗng (null) quy ước có height = <strong className="text-amber-800 font-mono">-1</strong>.
              </p>
            </div>

            {/* Size Formula */}
            <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-1.5">
              <div className="text-[11px] font-bold text-sky-950 flex items-center gap-1">
                <TreePine className="w-3.5 h-3.5 text-sky-700" />
                Công thức Size (Kích thước = Tổng số đỉnh cây con):
              </div>
              <div className="font-mono text-xs text-slate-800 bg-white p-2.5 rounded-xl border border-sky-100 font-bold">
                x.size = x.left.size + x.right.size + 1<br />
                <span className="text-sky-800">
                  {selected.key}.size = {selected.leftS} + {selected.rightS} + 1 = {selected.size}
                </span>
              </div>
              <p className="text-[10px] text-slate-600">
                * Cây con rỗng (null) quy ước có size = <strong className="text-amber-800 font-mono">0</strong>.
              </p>
            </div>
          </div>

          {/* Golden Takeaway */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Điểm Cốt Lõi Cần Nhớ (Slide 1.2):
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              • <strong>Height của cả BST</strong> = <code>root.height</code> (ở đây = <strong>3</strong>).<br />
              • <strong>Size của cả BST</strong> = <code>root.size</code> (ở đây = <strong>7</strong>).<br />
              • Height tính bằng <strong>số cạnh (edges)</strong>, không phải số đỉnh!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
