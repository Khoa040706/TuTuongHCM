"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";

export default function HeapExtractMax90Walkthrough() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      stepNum: 0,
      title: "Trạng Thái Ban Đầu (Initial Heap, heapsize = 9)",
      desc: "Heap mẫu 9 phần tử: [90, 19, 36, 17, 3, 25, 1, 2, 7]. Đỉnh Root = 90 là giá trị lớn nhất.",
      heap: [null, 90, 19, 36, 17, 3, 25, 1, 2, 7],
      highlightIdx: 1,
      comparingWith: null,
      maxV: null,
      actionNote: "Chuẩn bị gọi ExtractMax().",
    },
    {
      stepNum: 1,
      title: "Bước 1 & 2: Rút Root 90 ra & Đưa lá cuối A[9] = 7 lên Root",
      desc: "Lưu maxV = 90 để trả về. Đưa A[9]=7 lên A[1]. Giảm heapsize = 8 (loại bỏ ô cuối A[9]).",
      heap: [null, 7, 19, 36, 17, 3, 25, 1, 2],
      highlightIdx: 1,
      comparingWith: null,
      maxV: 90,
      actionNote: "maxV = 90. A[1] = 7. heapsize giảm còn 8.",
    },
    {
      stepNum: 2,
      title: "Bước 3 (ShiftDown 1): So sánh A[1]=7 với con trái 19 và con phải 36 ⟹ SWAP với 36",
      desc: "Trong 3 số {7, 19, 36}, max là 36 (tại index 3). Hoán đổi A[1] với A[3]. 36 lên Root, 7 xuống Index 3 (i = 3).",
      heap: [null, 36, 19, 7, 17, 3, 25, 1, 2],
      highlightIdx: 3,
      comparingWith: 1,
      maxV: 90,
      actionNote: "Hoán đổi thành công A[1] và A[3]! 7 chuyển xuống Index 3.",
    },
    {
      stepNum: 3,
      title: "Bước 4 (ShiftDown 2): So sánh A[3]=7 với con trái 25 và con phải 1 ⟹ SWAP với 25",
      desc: "Trong 3 số {7, 25, 1}, max là 25 (tại index 6). Hoán đổi A[3] với A[6]. 25 lên Index 3, 7 xuống Index 6 (i = 6).",
      heap: [null, 36, 19, 25, 17, 3, 7, 1, 2],
      highlightIdx: 6,
      comparingWith: 3,
      maxV: 90,
      actionNote: "Hoán đổi thành công A[3] và A[6]! 7 chuyển xuống Index 6.",
    },
    {
      stepNum: 4,
      title: "Bước 5: Kiểm tra tại Index 6: left(6) = 12 > heapsize(8) ⟹ DỪNG LẠI (BREAK)",
      desc: "Nút 6 không còn con nào bên dưới. Hoàn tất ShiftDown an toàn. Trả về maxV = 90!",
      heap: [null, 36, 19, 25, 17, 3, 7, 1, 2],
      highlightIdx: null,
      comparingWith: null,
      maxV: 90,
      actionNote: "✅ Hoàn tất ExtractMax()! Trả về 90. Heap còn 8 phần tử chuẩn Max-Heap.",
    },
  ];

  const step = steps[currentStep];

  // Tree Node Positions
  const nodeCoords = {
    1: { x: 200, y: 35 },
    2: { x: 100, y: 95 },
    3: { x: 300, y: 95 },
    4: { x: 55, y: 155 },
    5: { x: 145, y: 155 },
    6: { x: 255, y: 155 },
    7: { x: 345, y: 155 },
    8: { x: 30, y: 215 },
    9: { x: 80, y: 215 },
  };

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
  ];
  if (step.heap.length > 9) {
    edges.push({ from: 4, to: 9 });
  }

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-700" />
            <span>Ví Dụ Minh Họa VisuAlgo (Mục 7.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-slate-900 bg-clip-text text-transparent">
            Từng Bước Thực Hiện: ExtractMax() Rút Gốc 90 Khỏi Heap Mẫu
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quan sát giá trị 7 từ lá cuối đưa lên đỉnh và chìm dần (Shift-Down) 2 lần swap để khôi phục cấu trúc Max-Heap.
          </p>
        </div>

        {/* Next / Prev Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Trước
          </button>
          <span className="text-xs font-mono font-bold text-amber-900 px-1">
            {currentStep + 1} / {steps.length}
          </span>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-sm font-mono"
          >
            Tiếp theo
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all ml-1 border border-slate-200 shadow-sm"
            title="Đặt lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Step Info Banner */}
      <div className="p-4 rounded-2xl bg-white border border-rose-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
        <div>
          <h4 className="text-sm font-bold text-rose-950 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            {step.title}
          </h4>
          <p className="text-xs text-slate-600 font-sans mt-0.5">{step.desc}</p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
          {step.maxV && (
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-bold shadow-sm">
              Giá trị trả về: {step.maxV}
            </span>
          )}
          <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold shadow-sm">
            {step.actionNote}
          </span>
        </div>
      </div>

      {/* Main Dual-View Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Tree (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-rose-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Complete Binary Tree (Số node: {step.heap.length - 1})</span>
            <span className="text-amber-800 font-bold">Node 7 đang ở Index {step.highlightIdx || "đã ổn định"}</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 400 250" className="w-full max-w-[380px] h-auto select-none">
              {/* Edges */}
              {edges.map((e, idx) => {
                const f = nodeCoords[e.from];
                const t = nodeCoords[e.to];
                return (
                  <line
                    key={idx}
                    x1={f.x}
                    y1={f.y}
                    x2={t.x}
                    y2={t.y}
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                );
              })}

              {/* Nodes */}
              {Object.keys(nodeCoords).map((idxStr) => {
                const idx = Number(idxStr);
                if (idx >= step.heap.length) return null;
                const pos = nodeCoords[idx];
                const val = step.heap[idx];
                const is7 = val === 7;
                const isRoot = idx === 1;

                return (
                  <g key={idx}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={is7 ? "18" : "15"}
                      fill={is7 ? "#fef3c7" : isRoot ? "#fef3c7" : "#ffffff"}
                      stroke={is7 ? "#d97706" : isRoot ? "#d97706" : "#059669"}
                      strokeWidth={is7 ? "3" : isRoot ? "2.5" : "2"}
                      className={is7 ? "animate-pulse" : ""}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 4.5}
                      textAnchor="middle"
                      fill={is7 ? "#92400e" : isRoot ? "#92400e" : "#0f172a"}
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {val}
                    </text>
                    <text
                      x={pos.x}
                      y={pos.y - 18}
                      textAnchor="middle"
                      fill={is7 ? "#b45309" : "#64748b"}
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      [{idx}]
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Array View (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-rose-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mảng 1D A[1..{step.heap.length - 1}]</span>
            <span className="text-emerald-800 font-bold">1-based compact</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {step.heap.slice(1).map((val, i) => {
              const idx = i + 1;
              const is7 = val === 7;

              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl flex flex-col items-center justify-center border transition-all shadow-sm ${
                    is7
                      ? "bg-amber-100 border-amber-400 text-amber-950 scale-105 ring-2 ring-amber-500/40 font-bold"
                      : "bg-white border-slate-200 text-slate-800"
                  }`}
                >
                  <span className="font-mono font-extrabold text-sm">{val}</span>
                  <span className="text-[9px] font-mono text-slate-500 mt-0.5">[{idx}]</span>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-sans text-slate-700 space-y-1.5 shadow-sm">
            <strong className="text-amber-950 block font-mono">Điểm Cốt Lõi Cần Nhớ (Slide 7.5):</strong>
            <p className="leading-relaxed text-[11px]">
              • <code>ExtractMax</code> = lấy root ra, đưa lá cuối lên root, giảm heapsize, rồi gọi <code>ShiftDown(1)</code>.<br />
              • <code>ShiftDown</code>: so sánh node với 2 con, swap với con lớn hơn, đi xuống tiếp; dừng khi node đã lớn nhất trong 3 hoặc hết con.<br />
              • <code>ExtractMax()</code> = <strong>O(log n)</strong> &mdash; số bước swap tối đa = height của heap = <strong>O(log n)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
