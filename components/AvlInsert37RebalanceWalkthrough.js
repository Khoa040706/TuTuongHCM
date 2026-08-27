"use client";

import React, { useState } from "react";
import { Zap, Play, RotateCcw, ShieldCheck, AlertTriangle } from "lucide-react";

export default function AvlInsert37RebalanceWalkthrough() {
  const [step, setStep] = useState(0);

  const stepsData = [
    {
      title: "Trạng thái ban đầu: Cây cân bằng (29, 26, 32)",
      desc: "Trước khi chèn, cây có 3 đỉnh: 29 (Root, BF = 0), con trái 26 (BF = 0), con phải 32 (BF = 0).",
      nodes: [
        { key: 29, x: 220, y: 45, bf: 0, isViolated: false },
        { key: 26, x: 140, y: 115, bf: 0, isViolated: false },
        { key: 32, x: 300, y: 115, bf: 0, isViolated: false },
      ],
      edges: [
        { from: 29, to: 26 },
        { from: 29, to: 32 },
      ],
    },
    {
      title: "Bước 1: Chèn 37 vào cây (Insert)",
      desc: "37 > 29 và 37 > 32 → 37 được gắn làm con phải của 32. Chiều cao của 32 và 29 bắt đầu thay đổi.",
      nodes: [
        { key: 29, x: 220, y: 45, bf: -1, isViolated: false },
        { key: 26, x: 140, y: 115, bf: 0, isViolated: false },
        { key: 32, x: 300, y: 115, bf: -1, isViolated: false },
        { key: 37, x: 360, y: 185, bf: 0, isViolated: false, isNew: true },
      ],
      edges: [
        { from: 29, to: 26 },
        { from: 29, to: 32 },
        { from: 32, to: 37 },
      ],
    },
    {
      title: "Bước 2: Phát hiện Mất Cân Bằng (Vi phạm Invariant)",
      desc: "Lần ngược lên: Đỉnh 32 có BF = -1 (hợp lệ). Lần tiếp lên đỉnh 29: 29.left.h = 0, 29.right.h = 2 → BF(29) = 0 - 2 = -2 (VI PHẠM RR CASE!).",
      nodes: [
        { key: 29, x: 220, y: 45, bf: -2, isViolated: true },
        { key: 26, x: 140, y: 115, bf: 0, isViolated: false },
        { key: 32, x: 300, y: 115, bf: -1, isViolated: false },
        { key: 37, x: 360, y: 185, bf: 0, isViolated: false },
      ],
      edges: [
        { from: 29, to: 26 },
        { from: 29, to: 32 },
        { from: 32, to: 37 },
      ],
    },
    {
      title: "Bước 3: Thực hiện leftRotate(29) Phục Hồi Cân Bằng",
      desc: "Đỉnh 32 được nâng lên làm Gốc mới. Đỉnh 29 chuyển thành con trái của 32. Toàn bộ cây trở lại trạng thái cân bằng tuyệt đối!",
      nodes: [
        { key: 32, x: 220, y: 45, bf: 0, isViolated: false, isNewRoot: true },
        { key: 29, x: 140, y: 115, bf: 0, isViolated: false },
        { key: 37, x: 300, y: 115, bf: 0, isViolated: false },
        { key: 26, x: 80, y: 185, bf: 0, isViolated: false },
      ],
      edges: [
        { from: 32, to: 29 },
        { from: 32, to: 37 },
        { from: 29, to: 26 },
      ],
    },
  ];

  const current = stepsData[step];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ví Dụ Rebalancing Thực Tế Từ Slide (Mục 4.6)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Walkthrough: Chèn 37 &amp; Rebalance leftRotate(29)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quan sát toàn bộ quy trình phát hiện mất cân bằng và tự động xoay cân bằng đỉnh 29.
          </p>
        </div>

        {/* Step Controller */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setStep(0)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 0))}
            className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            {step < 3 ? `Bước tiếp theo (${step + 1}/3)` : "Xem lại từ đầu"}
          </button>
        </div>
      </div>

      {/* Main Grid: SVG Canvas + Step Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree Canvas (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative min-h-[300px]">
          <svg viewBox="0 0 460 240" className="w-full h-auto select-none max-w-[460px]">
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
              return (
                <g key={node.key} className="transition-all duration-500">
                  {node.isViolated && (
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
                    fill={
                      node.isViolated
                        ? "#ffe4e6"
                        : node.isNew
                        ? "#d1fae5"
                        : node.isNewRoot
                        ? "#e0f2fe"
                        : "#ffffff"
                    }
                    stroke={
                      node.isViolated
                        ? "#e11d48"
                        : node.isNew
                        ? "#059669"
                        : node.isNewRoot
                        ? "#0284c7"
                        : "#94a3b8"
                    }
                    strokeWidth="2"
                  />

                  <text
                    x={node.x}
                    y={node.y + 4.5}
                    textAnchor="middle"
                    fill={node.isViolated ? "#9f1239" : "#0f172a"}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.key}
                  </text>

                  {/* Balance Factor Mini Badge */}
                  <g transform={`translate(${node.x + 13}, ${node.y - 12})`}>
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill={node.isViolated ? "#ffe4e6" : node.bf === 0 ? "#d1fae5" : "#e0f2fe"}
                      stroke={node.isViolated ? "#e11d48" : node.bf === 0 ? "#059669" : "#0284c7"}
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="3"
                      textAnchor="middle"
                      fill={node.isViolated ? "#9f1239" : node.bf === 0 ? "#065f46" : "#0369a1"}
                      fontSize="8.5"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {node.bf > 0 ? `+${node.bf}` : node.bf}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          <div className="w-full mt-2 p-2 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono text-center font-bold">
            {step === 3
              ? "✅ leftRotate(29) thành công! Tất cả đỉnh đều đạt bf = 0."
              : `Trạng thái: Bước ${step}/3`}
          </div>
        </div>

        {/* Step Explanation Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                {current.title}
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                Bước {step}/3
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-sans">{current.desc}</p>

            {step === 2 && (
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-rose-800">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  Xác Định Phép Quay:
                </div>
                <p className="text-[11px] font-mono text-rose-900 font-semibold">
                  bf(29) = -2 &amp; bf(32) = -1 &rarr; <strong>Right-Right (RR) Case</strong> &rarr; Thực hiện <code>leftRotate(29)</code>.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Kết Quả Hoàn Hảo:
                </div>
                <p className="text-[11px] font-sans text-slate-700">
                  Cây con gốc 32 đã trở lại trạng thái cân bằng tuyệt đối chỉ với <strong>1 phép quay đơn O(1)</strong>!
                </p>
              </div>
            )}
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 italic">
            * Minh họa trích xuất từ slide bài giảng AVL Tree (Slide 4.6).
          </div>
        </div>
      </div>
    </div>
  );
}
