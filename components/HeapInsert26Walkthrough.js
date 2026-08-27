"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";

export default function HeapInsert26Walkthrough() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      stepNum: 0,
      title: "Trạng Thái Ban Đầu (Initial Sample Heap)",
      desc: "Heap mẫu gồm 9 phần tử: [90, 19, 36, 17, 3, 25, 1, 2, 7]. Sẵn sàng thực hiện Insert(26).",
      heap: [null, 90, 19, 36, 17, 3, 25, 1, 2, 7],
      highlightIdx: null,
      comparingWith: null,
      actionNote: "Chuẩn bị chèn giá trị 26 vào heap.",
    },
    {
      stepNum: 1,
      title: "Bước 1: Chèn vào A[10] = 26 (heapsize = 10)",
      desc: "26 được đặt vào cuối mảng tại A[10], trở thành con phải của node 5 (giá trị 3).",
      heap: [null, 90, 19, 36, 17, 3, 25, 1, 2, 7, 26],
      highlightIdx: 10,
      comparingWith: null,
      actionNote: "heapsize tăng lên 10. A[10] = 26. Cây vẫn giữ được tính chất Complete Tree!",
    },
    {
      stepNum: 2,
      title: "Bước 2: So sánh A[10]=26 với A[parent(10)=5]=3 ⟹ SWAP lần 1",
      desc: "Vì 26 > 3, vi phạm Max-Heap property! Hoán đổi 26 với 3. 26 leo lên vị trí Index 5 (i = 5).",
      heap: [null, 90, 19, 36, 17, 26, 25, 1, 2, 7, 3],
      highlightIdx: 5,
      comparingWith: 10,
      actionNote: "Hoán đổi thành công A[10] và A[5]! 26 chuyển lên Index 5.",
    },
    {
      stepNum: 3,
      title: "Bước 3: So sánh A[5]=26 với A[parent(5)=2]=19 ⟹ SWAP lần 2",
      desc: "Vì 26 > 19, tiếp tục vi phạm Max-Heap property! Hoán đổi 26 với 19. 26 leo lên vị trí Index 2 (i = 2).",
      heap: [null, 90, 26, 36, 17, 19, 25, 1, 2, 7, 3],
      highlightIdx: 2,
      comparingWith: 5,
      actionNote: "Hoán đổi thành công A[5] và A[2]! 26 chuyển lên Index 2.",
    },
    {
      stepNum: 4,
      title: "Bước 4: So sánh A[2]=26 với A[parent(2)=1]=90 ⟹ DỪNG LẠI",
      desc: "Vì 26 < 90 (A[parent(2)] >= A[2]), không còn vi phạm Max-Heap! ShiftUp kết thúc an toàn.",
      heap: [null, 90, 26, 36, 17, 19, 25, 1, 2, 7, 3],
      highlightIdx: 2,
      comparingWith: 1,
      actionNote: "✅ Hoàn tất Insert(26)! 26 dừng lại ở vị trí node 2 (ngay dưới root).",
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
    10: { x: 125, y: 215 },
  };

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
    { from: 4, to: 9 },
  ];
  if (step.heap.length > 10) {
    edges.push({ from: 5, to: 10 });
  }

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Ví Dụ Minh Họa VisuAlgo (Mục 6.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Từng Bước Thực Hiện: Insert(26) Vào Binary Max Heap
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quan sát giá trị 26 chèn vào lá <code>A[10]</code> và bong bóng leo dần (Bubble-Up) 2 lần swap lên đỉnh số 2.
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
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-slate-950 text-xs font-bold transition-all flex items-center gap-1 shadow-sm font-mono"
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
      <div className="p-4 rounded-2xl bg-white border border-amber-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
        <div>
          <h4 className="text-sm font-bold text-amber-950 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {step.title}
          </h4>
          <p className="text-xs text-slate-600 font-sans mt-0.5">{step.desc}</p>
        </div>
        <div className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-950 self-start md:self-auto font-bold shadow-sm">
          {step.actionNote}
        </div>
      </div>

      {/* Main Dual-View Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Tree (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Complete Binary Tree (Số node: {step.heap.length - 1})</span>
            <span className="text-amber-800 font-bold">Node 26 đang ở Index {step.highlightIdx || "chưa chèn"}</span>
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
                const is26 = val === 26;
                const isRoot = idx === 1;

                return (
                  <g key={idx}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={is26 ? "18" : "15"}
                      fill={is26 ? "#fef3c7" : isRoot ? "#fef3c7" : "#ffffff"}
                      stroke={is26 ? "#d97706" : isRoot ? "#d97706" : "#059669"}
                      strokeWidth={is26 ? "3" : isRoot ? "2.5" : "2"}
                      className={is26 ? "animate-pulse" : ""}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 4.5}
                      textAnchor="middle"
                      fill={is26 ? "#92400e" : isRoot ? "#92400e" : "#0f172a"}
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
                      fill={is26 ? "#b45309" : "#64748b"}
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
        <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mảng 1D A[1..{step.heap.length - 1}]</span>
            <span className="text-emerald-800 font-bold">1-based compact</span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5">
            {step.heap.slice(1).map((val, i) => {
              const idx = i + 1;
              const is26 = val === 26;

              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl flex flex-col items-center justify-center border transition-all shadow-sm ${
                    is26
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
            <strong className="text-amber-950 block font-mono">Điểm Cốt Lõi Cần Nhớ (Slide 6.5):</strong>
            <p className="leading-relaxed text-[11px]">
              • <code>Insert</code> luôn chèn vào cuối mảng (<code>A[heapsize]</code>) rồi gọi <code>ShiftUp</code>.<br />
              • <code>ShiftUp</code>: so sánh với parent, nếu con &gt; cha thì swap, đi lên tiếp cho đến root hoặc không còn vi phạm.<br />
              • <code>Insert(v)</code> = <strong>O(log n)</strong> &mdash; số bước swap tối đa = height của heap = <strong>O(log n)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
