"use client";

import React, { useState } from "react";
import { Layers, RotateCcw, Play, Sparkles, Code } from "lucide-react";

export default function AvlAugmentationPathAnimator() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Idle, 1: Insert 5, 2: Update 4, 3: Update 6, 4: Update 15

  // Tree nodes before and during update
  const nodes = [
    { key: 15, x: 240, y: 40, h: currentStep >= 4 ? 3 : 2, onPath: true },
    { key: 6, x: 140, y: 110, h: currentStep >= 3 ? 2 : 1, onPath: true },
    { key: 23, x: 340, y: 110, h: 1, onPath: false },
    { key: 4, x: 90, y: 180, h: currentStep >= 2 ? 1 : 0, onPath: true },
    { key: 7, x: 190, y: 180, h: 0, onPath: false },
    { key: 71, x: 390, y: 180, h: 0, onPath: false },
    { key: 5, x: 120, y: 250, h: 0, isNew: true, onPath: true },
  ];

  const edges = [
    { from: 15, to: 6, onPath: true },
    { from: 15, to: 23, onPath: false },
    { from: 6, to: 4, onPath: true },
    { from: 6, to: 7, onPath: false },
    { from: 4, to: 5, onPath: true, isNewEdge: true },
    { from: 23, to: 71, onPath: false },
  ];

  const stepDescriptions = [
    {
      title: "Trạng thái ban đầu",
      text: "Cây BST đang có 6 đỉnh (15, 6, 23, 4, 7, 71). Chuẩn bị chèn nút mới mang khóa 5 làm con phải của nút 4.",
      codeHighlight: "// Sẵn sàng thực hiện insert(5)...",
    },
    {
      title: "Bước 1: Chèn đỉnh 5 mới (Lá)",
      text: "Đỉnh 5 được gắn vào làm lá mới. Chiều cao khởi tạo: 5.height = 0 (do max(-1, -1) + 1).",
      codeHighlight: "5.height = max(-1, -1) + 1 = 0;",
    },
    {
      title: "Bước 2: Cập nhật cha trực tiếp (Đỉnh 4)",
      text: "Lần ngược lên cha là đỉnh 4: 4.left = null (h = -1), 4.right = 5 (h = 0) → 4.height = max(-1, 0) + 1 = 1.",
      codeHighlight: "4.height = max(-1, 0) + 1 = 1;",
    },
    {
      title: "Bước 3: Cập nhật ông nội (Đỉnh 6)",
      text: "Lần tiếp lên đỉnh 6: 6.left = 4 (h = 1), 6.right = 7 (h = 0) → 6.height = max(1, 0) + 1 = 2.",
      codeHighlight: "6.height = max(1, 0) + 1 = 2;",
    },
    {
      title: "Bước 4: Cập nhật Cụ / Root (Đỉnh 15)",
      text: "Lần lên đến Root 15: 15.left = 6 (h = 2), 15.right = 23 (h = 1) → 15.height = max(2, 1) + 1 = 3.",
      codeHighlight: "15.height = max(2, 1) + 1 = 3; // Hoàn tất!",
    },
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kỹ Thuật Augmentation: Cập Nhật Height Dọc Đường Đi (Mục 3.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Augmentation: Cập Nhật Height Dọc Ancestor Path
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Minh họa định lý slide: <strong>Chỉ những đỉnh nằm trên đường đi (Ancestor path) mới bị thay đổi height</strong>, không tốn công duyệt cả cây!
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep >= 4}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              currentStep >= 4
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            {currentStep === 0 ? "Bắt đầu chèn 5" : `Bước tiếp theo (${currentStep}/4)`}
          </button>
        </div>
      </div>

      {/* Main Grid: SVG Tree + Code & Path Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree Canvas (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative min-h-[340px]">
          <svg viewBox="0 0 480 300" className="w-full h-auto select-none max-w-[480px]">
            {/* Edges */}
            {edges.map((e, idx) => {
              const f = nodes.find((n) => n.key === e.from);
              const t = nodes.find((n) => n.key === e.to);
              if (e.isNewEdge && currentStep === 0) return null;

              const isPathActive = e.onPath && currentStep > 0;

              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={isPathActive ? "#059669" : "#cbd5e1"}
                  strokeWidth={isPathActive ? "3" : "2"}
                  strokeDasharray={e.isNewEdge ? "4 4" : "none"}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              if (node.isNew && currentStep === 0) return null;

              let isCurrentActiveNode = false;
              if (currentStep === 1 && node.key === 5) isCurrentActiveNode = true;
              if (currentStep === 2 && node.key === 4) isCurrentActiveNode = true;
              if (currentStep === 3 && node.key === 6) isCurrentActiveNode = true;
              if (currentStep === 4 && node.key === 15) isCurrentActiveNode = true;

              const isDimmed = !node.onPath && currentStep > 0;

              return (
                <g key={node.key} className="transition-all duration-500">
                  {isCurrentActiveNode && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="25"
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
                    fill={
                      isCurrentActiveNode
                        ? "#d1fae5"
                        : node.onPath && currentStep > 0
                        ? "#ecfdf5"
                        : "#ffffff"
                    }
                    stroke={
                      isCurrentActiveNode
                        ? "#059669"
                        : node.onPath && currentStep > 0
                        ? "#10b981"
                        : "#94a3b8"
                    }
                    strokeWidth={node.onPath && currentStep > 0 ? "2.5" : "2"}
                    opacity={isDimmed ? "0.4" : "1"}
                  />

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

                  {/* Height Badge */}
                  <g transform={`translate(${node.x + 13}, ${node.y - 12})`}>
                    <rect
                      x="-10"
                      y="-7"
                      width="20"
                      height="14"
                      rx="4"
                      fill={isCurrentActiveNode ? "#d1fae5" : "#f1f5f9"}
                      stroke={isCurrentActiveNode ? "#059669" : "#cbd5e1"}
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fill={isCurrentActiveNode ? "#065f46" : "#475569"}
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      h:{node.h}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          <div className="w-full mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono text-center font-bold">
            {currentStep === 0
              ? "Trạng thái trước khi chèn"
              : `Đường cập nhật: 5 → 4 → 6 → 15 (Độ dài đường đi = h ≤ O(h))`}
          </div>
        </div>

        {/* Code & Step Details (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                {stepDescriptions[currentStep].title}
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                Step {currentStep}/4
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {stepDescriptions[currentStep].text}
            </p>

            {/* Java Code Highlight Box — TERMINAL NỀN TỐI */}
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 shadow-md">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 font-semibold text-slate-300">
                  <Code className="w-3 h-3 text-emerald-400" />
                  Mã Java Cập Nhật (Slide 3.1):
                </span>
              </div>
              <pre className="text-[11px] font-mono text-emerald-300 bg-slate-900/90 p-2.5 rounded-xl overflow-x-auto border border-slate-800">
{`insert(x, v) {
  // ... chèn BST bình thường ...
  x.height = max(x.left.h, x.right.h) + 1;
}`}
              </pre>
              <div className="text-[11px] text-amber-300 font-mono font-semibold">
                &gt; {stepDescriptions[currentStep].codeHighlight}
              </div>
            </div>
          </div>

          {/* Golden Takeaway */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Tại Sao Chỉ Tốn O(h)?
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              Các đỉnh <strong>7, 23, 71</strong> không hề bị đổi con trỏ hay chiều cao. Vì đường đi từ lá lên root dài tối đa h cạnh, bước cập nhật này chỉ tốn đúng <strong>O(h)</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
