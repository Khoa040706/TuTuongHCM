"use client";

import React, { useState } from "react";
import { Scale, CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";

export default function AvlInvariantValidator() {
  const [treeState, setTreeState] = useState("balanced"); // "balanced" | "violated_root" | "violated_sub"

  const states = {
    balanced: {
      title: "Cây Đạt Chuẩn Cân Bằng (Balanced AVL)",
      desc: "Mọi đỉnh trong cây đều có chênh lệch chiều cao hai con |h_L - h_R| ≤ 1.",
      isAllValid: true,
      nodes: [
        { key: 15, x: 240, y: 40, leftH: 2, rightH: 2 },
        { key: 6, x: 140, y: 110, leftH: 1, rightH: 0 },
        { key: 23, x: 340, y: 110, leftH: -1, rightH: 1 },
        { key: 4, x: 90, y: 180, leftH: -1, rightH: 0 },
        { key: 7, x: 190, y: 180, leftH: -1, rightH: -1 },
        { key: 71, x: 390, y: 180, leftH: -1, rightH: -1 },
        { key: 5, x: 120, y: 250, leftH: -1, rightH: -1 },
      ],
      edges: [
        { from: 15, to: 6 },
        { from: 15, to: 23 },
        { from: 6, to: 4 },
        { from: 6, to: 7 },
        { from: 4, to: 5 },
        { from: 23, to: 71 },
      ],
    },
    violated_root: {
      title: "Vi Phạm Tại Gốc (Root = 15)",
      desc: "Nhánh trái có chiều cao 3 trong khi nhánh phải có chiều cao 0 → Chênh lệch |3 - 0| = 3 ≥ 2 (Vi phạm nghiêm trọng tại đỉnh 15).",
      isAllValid: false,
      nodes: [
        { key: 15, x: 240, y: 40, leftH: 3, rightH: 0 },
        { key: 6, x: 140, y: 100, leftH: 2, rightH: 0 },
        { key: 23, x: 340, y: 100, leftH: -1, rightH: -1 },
        { key: 4, x: 90, y: 160, leftH: 1, rightH: -1 },
        { key: 7, x: 190, y: 160, leftH: -1, rightH: -1 },
        { key: 3, x: 60, y: 220, leftH: 0, rightH: -1 },
        { key: 2, x: 40, y: 270, leftH: -1, rightH: -1 },
      ],
      edges: [
        { from: 15, to: 6 },
        { from: 15, to: 23 },
        { from: 6, to: 4 },
        { from: 6, to: 7 },
        { from: 4, to: 3 },
        { from: 3, to: 2 },
      ],
    },
    violated_sub: {
      title: "Vi Phạm Tại Đỉnh Con (Node = 23)",
      desc: "Gốc 15 vẫn có thể tạm cân bằng, nhưng đỉnh con 23 có nhánh phải cao 2 và nhánh trái rỗng (-1) → Chênh lệch |(-1) - 2| = 3 ≥ 2 (Vi phạm tại đỉnh 23).",
      isAllValid: false,
      nodes: [
        { key: 15, x: 200, y: 40, leftH: 1, rightH: 3 },
        { key: 6, x: 100, y: 100, leftH: 0, rightH: 0 },
        { key: 23, x: 300, y: 100, leftH: -1, rightH: 2 },
        { key: 4, x: 70, y: 160, leftH: -1, rightH: -1 },
        { key: 7, x: 130, y: 160, leftH: -1, rightH: -1 },
        { key: 50, x: 350, y: 160, leftH: -1, rightH: 1 },
        { key: 71, x: 390, y: 220, leftH: -1, rightH: 0 },
        { key: 80, x: 420, y: 270, leftH: -1, rightH: -1 },
      ],
      edges: [
        { from: 15, to: 6 },
        { from: 15, to: 23 },
        { from: 6, to: 4 },
        { from: 6, to: 7 },
        { from: 23, to: 50 },
        { from: 50, to: 71 },
        { from: 71, to: 80 },
      ],
    },
  };

  const current = states[treeState];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Scale className="w-3.5 h-3.5 text-emerald-700" />
            <span>Định Nghĩa Invariant (Bất Biến) Của Cây AVL (Mục 3.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Invariant: |x.left.height - x.right.height| &le; 1
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cây được gọi là <strong>BST Height-balanced (AVL)</strong> nếu và chỉ nếu <strong>MỌI đỉnh</strong> trong cây đều thỏa mãn Invariant.
          </p>
        </div>

        {/* Global Status Badge */}
        <div
          className={`px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm ${
            current.isAllValid
              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
              : "bg-rose-50 border-rose-300 text-rose-900 animate-pulse"
          }`}
        >
          {current.isAllValid ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Đạt Chuẩn AVL Tree</span>
            </>
          ) : (
            <>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Vi Phạm Invariant!</span>
            </>
          )}
        </div>
      </div>

      {/* Scenario Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
        <button
          onClick={() => setTreeState("balanced")}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            treeState === "balanced"
              ? "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.01]"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <div className={`text-[10px] uppercase font-bold ${treeState === "balanced" ? "text-emerald-100" : "text-emerald-700"} font-mono`}>Trạng Thái Chuẩn</div>
          <div className="text-xs font-bold font-mono mt-0.5">Cây Đạt Chuẩn Cân Bằng</div>
        </button>

        <button
          onClick={() => setTreeState("violated_root")}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            treeState === "violated_root"
              ? "bg-rose-600 border-rose-500 text-white shadow-sm scale-[1.01]"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <div className={`text-[10px] uppercase font-bold ${treeState === "violated_root" ? "text-rose-100" : "text-rose-700"} font-mono`}>Thử Nghiệm Lệch 1</div>
          <div className="text-xs font-bold font-mono mt-0.5">Vi Phạm Tại Đỉnh Gốc 15</div>
        </button>

        <button
          onClick={() => setTreeState("violated_sub")}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            treeState === "violated_sub"
              ? "bg-rose-600 border-rose-500 text-white shadow-sm scale-[1.01]"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <div className={`text-[10px] uppercase font-bold ${treeState === "violated_sub" ? "text-rose-100" : "text-rose-700"} font-mono`}>Thử Nghiệm Lệch 2</div>
          <div className="text-xs font-bold font-mono mt-0.5">Vi Phạm Tại Đỉnh Con 23</div>
        </button>
      </div>

      {/* Main Grid: SVG Tree + Formula Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree Canvas (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative min-h-[340px]">
          <svg viewBox="0 0 480 300" className="w-full h-auto select-none max-w-[480px]">
            {/* Edges */}
            {current.edges.map((e, idx) => {
              const f = current.nodes.find((n) => n.key === e.from);
              const t = current.nodes.find((n) => n.key === e.to);
              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                />
              );
            })}

            {/* Nodes */}
            {current.nodes.map((node) => {
              const diff = Math.abs(node.leftH - node.rightH);
              const isViolated = diff > 1;

              return (
                <g key={node.key} className="transition-all duration-300">
                  {isViolated && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="25"
                      fill="none"
                      stroke="#e11d48"
                      strokeWidth="2.5"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="18"
                    fill={isViolated ? "#ffe4e6" : "#ffffff"}
                    stroke={isViolated ? "#e11d48" : "#059669"}
                    strokeWidth={isViolated ? "2.5" : "2"}
                  />

                  <text
                    x={node.x}
                    y={node.y + 4.5}
                    textAnchor="middle"
                    fill={isViolated ? "#9f1239" : "#0f172a"}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.key}
                  </text>

                  {/* Math Difference Badge */}
                  <g transform={`translate(${node.x + 14}, ${node.y - 12})`}>
                    <rect
                      x="-14"
                      y="-7"
                      width="28"
                      height="14"
                      rx="4"
                      fill={isViolated ? "#ffe4e6" : "#d1fae5"}
                      stroke={isViolated ? "#e11d48" : "#059669"}
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fill={isViolated ? "#9f1239" : "#065f46"}
                      fontSize="8.5"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      |&Delta;|:{diff}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          <div className="w-full mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono text-center font-bold">
            {current.isAllValid
              ? "✅ Tất cả các đỉnh đều có |Δ| ≤ 1 → BST Height-Balanced!"
              : "🚨 Phát hiện đỉnh có |Δ| ≥ 2 → Cần phép quay để sửa lại!"}
          </div>
        </div>

        {/* Formula Analysis & Rules (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900">{current.title}</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">{current.desc}</p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-emerald-900 uppercase font-mono">
                Quy Tắc Bất Biến (Invariant Rules):
              </span>
              <div className="space-y-1.5 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>|h_L - h_R| = 0: Cân bằng hoàn hảo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span>|h_L - h_R| = 1: Cho phép (Hợp lệ)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-rose-900 font-bold">|h_L - h_R| &ge; 2: Vi phạm (Mất cân bằng)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Takeaway Box */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Định nghĩa cốt lõi (Slide 3.2):
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              Một cây BST là <strong>Height-balanced</strong> khi và chỉ khi <strong>MỌI đỉnh</strong> trong cây đều thỏa mãn <code>|x.left.height - x.right.height| &le; 1</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
