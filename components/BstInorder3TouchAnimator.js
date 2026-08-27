"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lightbulb, Play, RotateCcw, Zap, Calculator } from "lucide-react";

export default function BstInorder3TouchAnimator() {
  const [currentTouchStep, setCurrentTouchStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Nodes for sample BST (8 nodes)
  const nodes = [
    { key: 15, x: 230, y: 40, left: 6, right: 23 },
    { key: 6, x: 125, y: 110, left: 4, right: 7 },
    { key: 23, x: 335, y: 110, left: null, right: 71 },
    { key: 4, x: 70, y: 180, left: null, right: 5 },
    { key: 7, x: 180, y: 180, left: null, right: null },
    { key: 71, x: 390, y: 180, left: 50, right: null },
    { key: 5, x: 110, y: 250, left: null, right: null },
    { key: 50, x: 345, y: 250, left: null, right: null },
  ];

  const edges = [
    { from: 15, to: 6 },
    { from: 15, to: 23 },
    { from: 6, to: 4 },
    { from: 6, to: 7 },
    { from: 4, to: 5 },
    { from: 23, to: 71 },
    { from: 71, to: 50 },
  ];

  // 24 touches simulation sequence (3 touches for each of the 8 nodes in inorder order)
  const touchSequence = [
    { nodeKey: 15, touchIdx: 1, label: "Đỉnh 15 — Lần chạm 1: Từ Parent đi xuống (bắt đầu gọi Inorder(15))" },
    { nodeKey: 6, touchIdx: 1, label: "Đỉnh 6 — Lần chạm 1: Đỉnh 15 gọi đệ quy xuống con trái (6)" },
    { nodeKey: 4, touchIdx: 1, label: "Đỉnh 4 — Lần chạm 1: Đỉnh 6 gọi đệ quy xuống con trái (4)" },
    { nodeKey: 4, touchIdx: 2, label: "Đỉnh 4 — Lần chạm 2: Hỏi con trái của 4 (là NULL) → Thăm chính đỉnh 4" },
    { nodeKey: 5, touchIdx: 1, label: "Đỉnh 5 — Lần chạm 1: Đỉnh 4 gọi đệ quy xuống con phải (5)" },
    { nodeKey: 5, touchIdx: 2, label: "Đỉnh 5 — Lần chạm 2: Hỏi con trái của 5 (là NULL) → Thăm đỉnh 5" },
    { nodeKey: 5, touchIdx: 3, label: "Đỉnh 5 — Lần chạm 3: Hỏi con phải của 5 (là NULL) → Hoàn tất đỉnh 5" },
    { nodeKey: 4, touchIdx: 3, label: "Đỉnh 4 — Lần chạm 3: Trở về từ con phải 5 → Hoàn tất đỉnh 4" },
    { nodeKey: 6, touchIdx: 2, label: "Đỉnh 6 — Lần chạm 2: Trở về từ toàn bộ nhánh trái (4) → Thăm chính đỉnh 6" },
    { nodeKey: 7, touchIdx: 1, label: "Đỉnh 7 — Lần chạm 1: Đỉnh 6 gọi đệ quy sang con phải (7)" },
    { nodeKey: 7, touchIdx: 2, label: "Đỉnh 7 — Lần chạm 2: Hỏi con trái của 7 (NULL) → Thăm đỉnh 7" },
    { nodeKey: 7, touchIdx: 3, label: "Đỉnh 7 — Lần chạm 3: Hỏi con phải của 7 (NULL) → Hoàn tất đỉnh 7" },
    { nodeKey: 6, touchIdx: 3, label: "Đỉnh 6 — Lần chạm 3: Trở về từ con phải (7) → Hoàn tất nhánh trái root" },
    { nodeKey: 15, touchIdx: 2, label: "Đỉnh 15 — Lần chạm 2: Hoàn tất toàn bộ nhánh trái! Thăm chính Root 15" },
    { nodeKey: 23, touchIdx: 1, label: "Đỉnh 23 — Lần chạm 1: Đỉnh 15 gọi đệ quy sang toàn bộ nhánh phải (23)" },
    { nodeKey: 23, touchIdx: 2, label: "Đỉnh 23 — Lần chạm 2: Hỏi con trái của 23 (NULL) → Thăm đỉnh 23" },
    { nodeKey: 71, touchIdx: 1, label: "Đỉnh 71 — Lần chạm 1: Đỉnh 23 gọi đệ quy sang con phải (71)" },
    { nodeKey: 50, touchIdx: 1, label: "Đỉnh 50 — Lần chạm 1: Đỉnh 71 gọi đệ quy xuống con trái (50)" },
    { nodeKey: 50, touchIdx: 2, label: "Đỉnh 50 — Lần chạm 2: Hỏi con trái của 50 (NULL) → Thăm đỉnh 50" },
    { nodeKey: 50, touchIdx: 3, label: "Đỉnh 50 — Lần chạm 3: Hỏi con phải của 50 (NULL) → Hoàn tất đỉnh 50" },
    { nodeKey: 71, touchIdx: 2, label: "Đỉnh 71 — Lần chạm 2: Trở về từ nhánh con trái (50) → Thăm đỉnh 71" },
    { nodeKey: 71, touchIdx: 3, label: "Đỉnh 71 — Lần chạm 3: Hỏi con phải của 71 (NULL) → Hoàn tất đỉnh 71" },
    { nodeKey: 23, touchIdx: 3, label: "Đỉnh 23 — Lần chạm 3: Trở về từ con phải (71) → Hoàn tất nhánh 23" },
    { nodeKey: 15, touchIdx: 3, label: "Đỉnh 15 — Lần chạm 3: Trở về từ toàn bộ nhánh phải → Hoàn tất Inorder toàn cây! 🎉" },
  ];

  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        if (currentTouchStep < touchSequence.length - 1) {
          setCurrentTouchStep((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 700);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentTouchStep]);

  const currentStep = touchSequence[currentTouchStep] || touchSequence[0];

  const getNodeTouchCount = (key) => {
    return touchSequence.slice(0, currentTouchStep + 1).filter((s) => s.nodeKey === key).length;
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTouchStep(0);
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kỹ Thuật Phân Tích Mới: Đếm Số Lần Chạm (Touch Count)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Tại Sao Inorder Traversal Có Độ Phức Tạp O(n) Thay Vì O(h)?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Mỗi đỉnh trong cây bị &quot;chạm&quot; đúng <strong>3 lần</strong> trong suốt quá trình đệ quy &rArr; 3 &times; n lần chạm.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            O(3n) = O(n)
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree with 3 LED Indicators per node (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[360px] shadow-sm">
          <svg viewBox="0 0 460 310" className="w-full h-auto select-none max-w-[460px]">
            {edges.map((edge, idx) => {
              const f = nodes.find((n) => n.key === edge.from);
              const t = nodes.find((n) => n.key === edge.to);
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

            {nodes.map((node) => {
              const touchCount = getNodeTouchCount(node.key);
              const isCurrent = currentStep.nodeKey === node.key;

              let fill = "#ffffff";
              let stroke = "#94a3b8";
              let textColor = "#0f172a";

              if (isCurrent) {
                fill = "#fef3c7";
                stroke = "#d97706";
                textColor = "#92400e";
              } else if (touchCount === 3) {
                fill = "#d1fae5";
                stroke = "#059669";
                textColor = "#065f46";
              } else if (touchCount > 0) {
                fill = "#ecfdf5";
                stroke = "#10b981";
                textColor = "#047857";
              }

              return (
                <g key={node.key} className="transition-all duration-300">
                  {/* Outer active highlight ring */}
                  {isCurrent && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="26"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      className="animate-ping"
                      opacity="0.7"
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={19}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isCurrent ? "3" : "2"}
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.key}
                  </text>

                  {/* 3 Small LED Indicator Dots above node */}
                  <g>
                    {/* LED 1: From Parent */}
                    <circle
                      cx={node.x - 10}
                      cy={node.y - 25}
                      r="3.5"
                      fill={touchCount >= 1 ? "#d97706" : "#e2e8f0"}
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* LED 2: Ask Left */}
                    <circle
                      cx={node.x}
                      cy={node.y - 25}
                      r="3.5"
                      fill={touchCount >= 2 ? "#d97706" : "#e2e8f0"}
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    {/* LED 3: Ask Right */}
                    <circle
                      cx={node.x + 10}
                      cy={node.y - 25}
                      r="3.5"
                      fill={touchCount >= 3 ? "#059669" : "#e2e8f0"}
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Current Step Description */}
          <div className="w-full mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-mono font-bold flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0 animate-bounce" />
            <span>{currentStep.label}</span>
          </div>
        </div>

        {/* Right Touch Meter & 3-Touch Theory Panel (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm flex flex-col justify-between self-stretch">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-sm font-bold text-slate-900">Bộ Đếm 3 Lần Chạm (Touch Meter)</h4>
              <span className="font-mono text-emerald-800 font-bold text-xs">
                {currentTouchStep + 1} / {touchSequence.length} lần
              </span>
            </div>

            {/* Touch Counter Stats Bar */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600 font-medium">Tổng số lần chạm hiện tại:</span>
                <span className="font-mono font-bold text-emerald-800 text-sm">
                  {currentTouchStep + 1} lần
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                  style={{ width: `${((currentTouchStep + 1) / touchSequence.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>0</span>
                <span>Mục tiêu: 3 &times; 8 = 24 lần</span>
              </div>
            </div>

            {/* 3 Touch Rules Checklist */}
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-slate-700">
                  <strong>Lần 1:</strong> Từ cha (parent) đi xuống đỉnh đó khi bắt đầu gọi đệ quy.
                </span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-slate-700">
                  <strong>Lần 2:</strong> Sau khi thăm xong cây con trái (hoặc con trái là NULL) &rarr; thăm chính đỉnh này.
                </span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-slate-700">
                  <strong>Lần 3:</strong> Sau khi thăm xong cây con phải (hoặc con phải là NULL) &rarr; hoàn tất đỉnh và quay về cha.
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isPlaying ? "Tạm dừng" : "Tự động chạy"}</span>
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  if (currentTouchStep < touchSequence.length - 1) setCurrentTouchStep((prev) => prev + 1);
                }}
                disabled={currentTouchStep >= touchSequence.length - 1}
                className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 text-xs font-bold"
              >
                Chạm tiếp &rarr;
              </button>

              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
                title="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mathematical Conclusion */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-700 leading-relaxed bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
            <span className="font-bold text-emerald-950">📌 Kết luận: </span>
            Với n đỉnh, tổng số lần chạm là 3n &rArr; O(3n) = <strong>O(n)</strong>. Inorder Traversal bắt buộc phải ghé thăm toàn bộ n đỉnh nên là <strong>O(n)</strong>, <strong>KHÔNG</strong> phải O(h).
          </div>
        </div>
      </div>
    </div>
  );
}
