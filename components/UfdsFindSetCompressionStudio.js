"use client";

import React, { useState } from "react";
import { Search, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

export default function UfdsFindSetCompressionStudio() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Trạng Thái Ban Đầu: Cây Tập 1 Trước Khi Find",
      desc: "Nút 0 là con của nút 2 (p[0]=2); nút 2 là con của Root 3 (p[2]=3). Đường đi đến Root có độ dài 2 bước.",
      treeEdges: [
        { from: 0, to: 2 },
        { from: 2, to: 3 },
      ],
      pState: [2, 3, 3, 3, 3, 6, 6, 6, 8],
      highlightNode: 0,
      activeCall: "Bắt đầu: gọi findSet(0)",
      isCompressed: false,
    },
    {
      title: "Bước 1 (Đệ quy tiến): findSet(0) ⟹ thăm p[0] = 2",
      desc: "Do p[0] = 2 != 0, hàm gọi đệ quy findSet(2) để tiếp tục đi lên cha.",
      treeEdges: [
        { from: 0, to: 2 },
        { from: 2, to: 3 },
      ],
      pState: [2, 3, 3, 3, 3, 6, 6, 6, 8],
      highlightNode: 2,
      activeCall: "findSet(2) được đẩy vào Call Stack",
      isCompressed: false,
    },
    {
      title: "Bước 2 (Đệ quy tiến): findSet(2) ⟹ thăm p[2] = 3 (Gặp Root!)",
      desc: "Do p[2] = 3 != 2, hàm gọi findSet(3). Tại đây p[3] == 3 (Gốc!) ⟹ Base case return 3.",
      treeEdges: [
        { from: 0, to: 2 },
        { from: 2, to: 3 },
      ],
      pState: [2, 3, 3, 3, 3, 6, 6, 6, 8],
      highlightNode: 3,
      activeCall: "findSet(3) chạm Root 3! Chuẩn bị quay lui...",
      isCompressed: false,
    },
    {
      title: "Bước 3 (Quay lui & Nén 1): p.set(2, 3) ⟹ Gán trực tiếp p[2] = 3",
      desc: "Trong nhánh quay lui của findSet(2), giá trị p[2] được gán trực tiếp bằng 3 và return 3.",
      treeEdges: [
        { from: 0, to: 2 },
        { from: 2, to: 3 },
      ],
      pState: [2, 3, 3, 3, 3, 6, 6, 6, 8],
      highlightNode: 2,
      activeCall: "p[2] = 3 (Đã trỏ thẳng vào Root)",
      isCompressed: false,
    },
    {
      title: "Bước 4 (Quay lui & Nén 2): p.set(0, 3) ⟹ Nén nút 0 trỏ thẳng về Root 3!",
      desc: "⚡ PATH COMPRESSION: Nút 0 không còn trỏ vào nút 2 nữa mà được nối THẲNG vào Root 3! Chiều cao cây phẳng hoàn toàn.",
      treeEdges: [
        { from: 0, to: 3 },
        { from: 2, to: 3 },
      ],
      pState: [3, 3, 3, 3, 3, 6, 6, 6, 8],
      highlightNode: 0,
      activeCall: "✅ Hoàn tất! p[0] = 3. Mọi lần findSet(0) sau này chỉ tốn đúng 1 bước O(1)!",
      isCompressed: true,
    },
  ];

  const step = steps[currentStep];

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Search className="w-3.5 h-3.5 text-teal-700" />
            <span>Thao Tác FindSet &amp; Path Compression (Mục 1.4)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
            Thuật Toán FindSet &amp; Cơ Chế Nén Đường Đi (Path Compression)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Mô phỏng từng bước gọi đệ quy <code>findSet(0)</code> và cơ chế làm phẳng cây thần tốc trong quá trình quay lui (Backtracking).
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
          <span className="text-xs font-mono font-bold text-teal-950 px-1">
            {currentStep + 1} / {steps.length}
          </span>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-sm font-mono"
          >
            Tiếp theo
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-all shadow-sm ml-1"
            title="Đặt lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Step Info Banner */}
      <div className="p-4 rounded-2xl bg-white border border-teal-200 mb-6 shadow-sm space-y-1">
        <h4 className="text-xs font-bold text-teal-950 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
          {step.title}
        </h4>
        <p className="text-xs text-slate-600 font-sans leading-relaxed">{step.desc}</p>
        <div className="text-[11px] font-mono text-emerald-950 font-bold pt-1">
          📌 Trạng thái Call Stack: <strong>{step.activeCall}</strong>
        </div>
      </div>

      {/* Visual Animation Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Path Compression Demo (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-teal-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Cấu Trúc Cây Tập 1: &#123;0, 1, 2, 3, 4&#125;</span>
            <span className={step.isCompressed ? "text-emerald-800 font-bold" : "text-amber-800 font-bold"}>
              {step.isCompressed ? "⚡ Đã nén phẳng cây!" : "Đang đệ quy..."}
            </span>
          </div>

          <div className="flex justify-center py-4">
            <svg viewBox="0 0 350 180" className="w-full max-w-[320px] h-auto select-none">
              {/* Root 3 */}
              <circle cx="175" cy="30" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="175" y="34" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold" fontFamily="monospace">3</text>
              <text x="175" y="10" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">ROOT</text>

              {/* Node 1 & Node 4 (static siblings) */}
              <line x1="175" y1="30" x2="80" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
              <circle cx="80" cy="80" r="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="80" y="84" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">1</text>

              <line x1="175" y1="30" x2="270" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
              <circle cx="270" cy="80" r="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="270" y="84" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">4</text>

              {/* Node 2 */}
              <line x1="175" y1="30" x2="175" y2="90" stroke={step.highlightNode === 2 || step.highlightNode === 3 ? "#059669" : "#cbd5e1"} strokeWidth="2" />
              <circle cx="175" cy="90" r="15" fill={step.highlightNode === 2 ? "#d1fae5" : "#ffffff"} stroke="#059669" strokeWidth="2" />
              <text x="175" y="94" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

              {/* Dynamic Edge for Node 0 */}
              {step.isCompressed ? (
                // Compressed: 0 connects directly to 3!
                <line x1="175" y1="30" x2="120" y2="90" stroke="#059669" strokeWidth="3" strokeDasharray="4 2" />
              ) : (
                // Uncompressed: 0 connects to 2
                <line x1="175" y1="90" x2="175" y2="150" stroke={step.highlightNode === 0 ? "#059669" : "#cbd5e1"} strokeWidth="2" />
              )}

              {/* Node 0 */}
              <circle
                cx={step.isCompressed ? "120" : "175"}
                cy={step.isCompressed ? "90" : "150"}
                r="15"
                fill={step.isCompressed ? "#d1fae5" : step.highlightNode === 0 ? "#d1fae5" : "#ffffff"}
                stroke="#059669"
                strokeWidth={step.isCompressed ? "2.5" : "2"}
              />
              <text
                x={step.isCompressed ? "120" : "175"}
                y={step.isCompressed ? "94" : "154"}
                textAnchor="middle"
                fill="#0f172a"
                fontSize="11"
                fontWeight="bold"
                fontFamily="monospace"
              >
                0
              </text>
            </svg>
          </div>
        </div>

        {/* Right: Java Code & Array State (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-teal-100 p-5 space-y-4 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2">findSet.java</span>
              </div>
              <span className="text-emerald-400 font-bold">O(1) Amortized</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`public int findSet(int i) {
  if (p.get(i) == i) return i;
  else {
    int ret = findSet(p.get(i));
    p.set(i, ret); // Path compression!
    return ret;
  }
}`}
              </code>
            </pre>
          </div>

          {/* Current Array Value for p[0] */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono flex items-center justify-between shadow-sm">
            <span className="text-slate-600 font-semibold">Giá trị p[0] hiện tại:</span>
            <span className={`px-2.5 py-0.5 rounded-lg font-extrabold ${step.isCompressed ? "bg-emerald-100 text-emerald-950 border border-emerald-300" : "bg-amber-100 text-amber-950 border border-amber-300"}`}>
              p[0] = {step.pState[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
