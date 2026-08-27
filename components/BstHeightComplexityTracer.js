"use client";

import React, { useState, useEffect, useRef } from "react";
import { Gauge, RotateCcw, Play, Sparkles } from "lucide-react";

export default function BstHeightComplexityTracer() {
  const [selectedOp, setSelectedOp] = useState("search51"); // "search51" | "findMin" | "findMax" | "insert50" | "succ71"
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Tree nodes with level information
  const nodes = [
    { key: 15, x: 230, y: 40, level: 0, left: 6, right: 23 },
    { key: 6, x: 125, y: 110, level: 1, left: 4, right: 7 },
    { key: 23, x: 335, y: 110, level: 1, left: null, right: 71 },
    { key: 4, x: 70, y: 180, level: 2, left: null, right: 5 },
    { key: 7, x: 180, y: 180, level: 2, left: null, right: null },
    { key: 71, x: 390, y: 180, level: 2, left: 50, right: null },
    { key: 5, x: 110, y: 250, level: 3, left: null, right: null },
    { key: 50, x: 345, y: 250, level: 3, left: null, right: null },
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

  const operations = {
    search51: {
      title: "Search(51) — Khóa Không Tồn Tại",
      steps: [
        { nodeKey: 15, level: 0, desc: "Level 0 (Root): 51 > 15 → Đi sang PHẢI ↘" },
        { nodeKey: 23, level: 1, desc: "Level 1: 51 > 23 → Đi sang PHẢI ↘" },
        { nodeKey: 71, level: 2, desc: "Level 2: 51 < 71 → Đi sang TRÁI ↙" },
        { nodeKey: 50, level: 3, desc: "Level 3: 51 > 50 → Đi sang phải (NULL) → ❌ 51 is not found!" },
      ],
      maxLevels: 3,
      conclusion: "Search chỉ đi xuống đúng 1 tầng ở mỗi bước. Số tầng tối đa đi qua là h = 3 → O(h).",
    },
    findMin: {
      title: "FindMin() — Nhánh Trái Liên Tục",
      steps: [
        { nodeKey: 15, level: 0, desc: "Level 0 (Root 15) → Đi sang TRÁI ↙" },
        { nodeKey: 6, level: 1, desc: "Level 1 (Đỉnh 6) → Tiếp tục đi sang TRÁI ↙" },
        { nodeKey: 4, level: 2, desc: "Level 2 (Đỉnh 4) → Không còn con trái (NULL) → Dừng lại: MIN = 4 🏆" },
      ],
      maxLevels: 2,
      conclusion: "Đi thẳng một mạch theo nhánh trái, số bước tối đa bằng chiều cao h = 2 → O(h).",
    },
    findMax: {
      title: "FindMax() — Nhánh Phải Liên Tục",
      steps: [
        { nodeKey: 15, level: 0, desc: "Level 0 (Root 15) → Đi sang PHẢI ↘" },
        { nodeKey: 23, level: 1, desc: "Level 1 (Đỉnh 23) → Tiếp tục đi sang PHẢI ↘" },
        { nodeKey: 71, level: 2, desc: "Level 2 (Đỉnh 71) → Không còn con phải (NULL) → Dừng lại: MAX = 71 🏆" },
      ],
      maxLevels: 2,
      conclusion: "Đi thẳng một mạch theo nhánh phải, số bước tối đa bằng chiều cao h = 2 → O(h).",
    },
    insert50: {
      title: "Insert(50) — Chèn Khóa Mới Làm Lá",
      steps: [
        { nodeKey: 15, level: 0, desc: "Level 0: 50 > 15 → Đi sang PHẢI ↘" },
        { nodeKey: 23, level: 1, desc: "Level 1: 50 > 23 → Đi sang PHẢI ↘" },
        { nodeKey: 71, level: 2, desc: "Level 2: 50 < 71 → Đi sang TRÁI (chưa có con trái) ↙" },
        { nodeKey: 50, level: 3, desc: "Level 3: Gắn 50 làm CON TRÁI của 71 (Chèn làm lá) ✅" },
      ],
      maxLevels: 3,
      conclusion: "Insert cũng chỉ đi theo đúng 1 đường duy nhất từ root xuống lá → Chạy trong O(h).",
    },
    succ71: {
      title: "Successor(71) — Đi Lên Tổ Tiên",
      steps: [
        { nodeKey: 71, level: 2, desc: "Tại 71: Không có con phải → Bắt đầu đi lên cha (23) ↗" },
        { nodeKey: 23, level: 1, desc: "Tại 23: Ta đi lên từ nhánh con PHẢI (không phải rẽ phải) → Tiếp tục lên 15 ↗" },
        { nodeKey: 15, level: 0, desc: "Tại 15 (Root): Vẫn đi lên từ nhánh con phải → Không còn cha → KHÔNG CÓ SUCCESSOR! (71 là Max) 🛑" },
      ],
      maxLevels: 2,
      conclusion: "Đi ngược lên cây theo con trỏ parent, số bước leo lên tối đa cũng chỉ là h → O(h).",
    },
  };

  const currentOp = operations[selectedOp];
  const timerRef = useRef(null);

  useEffect(() => {
    setActiveStep(0);
    setIsPlaying(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, [selectedOp]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        if (activeStep < currentOp.steps.length - 1) {
          setActiveStep((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 1200);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, activeStep, currentOp]);

  const currentStepObj = currentOp.steps[activeStep] || currentOp.steps[0];
  const visitedKeys = currentOp.steps.slice(0, activeStep + 1).map((s) => s.nodeKey);

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Gauge className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phân Tích Chiều Cao &amp; Cấp Độ (Level by Level)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Tại Sao Mọi Thao Tác BST Cơ Bản Đều Chạy Trong O(h)?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quy ước: <span className="font-mono text-emerald-700 font-bold">h = height</span> là số cạnh trên đường đi dài nhất từ root xuống lá (ở cây này h = 3).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono font-bold text-xs">
            Độ phức tạp = O(h)
          </span>
        </div>
      </div>

      {/* Operation Picker Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 p-2 rounded-2xl bg-white border border-emerald-100 shadow-sm">
        {[
          { id: "search51", label: "Search(51)" },
          { id: "findMin", label: "FindMin()" },
          { id: "findMax", label: "FindMax()" },
          { id: "insert50", label: "Insert(50)" },
          { id: "succ71", label: "Successor(71)" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedOp(item.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
              selectedOp === item.id
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Grid: SVG Tree with Level Guides + Step Walkthrough */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Tree View with Level Indicators (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[350px] shadow-sm">
          <svg viewBox="0 0 460 300" className="w-full h-auto select-none max-w-[460px]">
            {/* Level Guide Horizontal Lines */}
            {[0, 1, 2, 3].map((lvl) => {
              const yPos = 40 + lvl * 70;
              const isCurrentLevel = currentStepObj.level === lvl;
              return (
                <g key={lvl}>
                  <line
                    x1="20"
                    y1={yPos}
                    x2="440"
                    y2={yPos}
                    stroke={isCurrentLevel ? "#059669" : "#e2e8f0"}
                    strokeWidth={isCurrentLevel ? "1.5" : "1"}
                    strokeDasharray="4 4"
                  />
                  <text
                    x="24"
                    y={yPos - 6}
                    fill={isCurrentLevel ? "#065f46" : "#94a3b8"}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    Level {lvl} {lvl === 0 ? "(Root)" : lvl === 3 ? "(Max height h=3)" : ""}
                  </text>
                </g>
              );
            })}

            {/* Tree Edges */}
            {edges.map((edge, idx) => {
              const f = nodes.find((n) => n.key === edge.from);
              const t = nodes.find((n) => n.key === edge.to);
              const isPassed = visitedKeys.includes(f.key) && visitedKeys.includes(t.key);

              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={isPassed ? "#059669" : "#cbd5e1"}
                  strokeWidth={isPassed ? "3.5" : "2"}
                />
              );
            })}

            {/* Tree Nodes */}
            {nodes.map((node) => {
              const isCurrent = currentStepObj.nodeKey === node.key;
              const isVisited = visitedKeys.includes(node.key);

              let fill = "#ffffff";
              let stroke = "#94a3b8";
              let textColor = "#0f172a";

              if (isCurrent) {
                fill = "#d1fae5";
                stroke = "#059669";
                textColor = "#065f46";
              } else if (isVisited) {
                fill = "#ecfdf5";
                stroke = "#10b981";
                textColor = "#047857";
              }

              return (
                <g key={node.key} className="transition-all duration-300">
                  {isCurrent && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="26"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}
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
                </g>
              );
            })}
          </svg>

          {/* Current Step Bubble */}
          <div className="w-full mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-mono font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{currentStepObj.desc}</span>
          </div>
        </div>

        {/* Right Step Walkthrough & Height Gauge (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm flex flex-col justify-between self-stretch">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-sm font-bold text-slate-900">{currentOp.title}</h4>
              <span className="text-[11px] font-mono text-slate-500">
                Bước {activeStep + 1} / {currentOp.steps.length}
              </span>
            </div>

            {/* Height Ruler Meter */}
            <div className="space-y-2 mb-4">
              <div className="text-xs text-slate-600 font-bold flex justify-between">
                <span>Thước đo độ sâu (Level Depth Gauge):</span>
                <span className="text-emerald-700 font-mono font-bold">
                  {activeStep} / {currentOp.maxLevels} bước
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[0, 1, 2, 3].map((lvl) => {
                  const isReached = currentStepObj.level >= lvl;
                  return (
                    <div
                      key={lvl}
                      className={`p-2 rounded-xl text-center font-mono text-xs font-bold border transition-all ${
                        isReached
                          ? "bg-emerald-100 border-emerald-300 text-emerald-900"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      Lvl {lvl}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Steps list */}
            <div className="space-y-2">
              {currentOp.steps.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border text-xs leading-relaxed transition-all ${
                    idx === activeStep
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                      : idx < activeStep
                      ? "bg-slate-50 border-slate-200 text-slate-600"
                      : "bg-white border-slate-100 text-slate-400"
                  }`}
                >
                  <span className="font-mono text-[11px] font-bold text-emerald-800 mr-2">
                    [Lvl {s.level}]
                  </span>
                  {s.desc}
                </div>
              ))}
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
                  if (activeStep < currentOp.steps.length - 1) setActiveStep((prev) => prev + 1);
                }}
                disabled={activeStep >= currentOp.steps.length - 1}
                className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 text-xs font-bold"
              >
                Tiếp &rarr;
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStep(0);
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
                title="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Conclusion Box */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-700 leading-relaxed bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
            <span className="font-bold text-emerald-900">💡 Điểm mấu chốt: </span>
            {currentOp.conclusion}
          </div>
        </div>
      </div>
    </div>
  );
}
