"use client";

import React, { useState } from "react";
import { TreePine, CheckCircle2, XCircle, HelpCircle, Sparkles, Scale } from "lucide-react";

export default function CompleteBinaryTreeValidatorLab() {
  const [selectedSample, setSelectedSample] = useState(1);
  const [nodeCount, setNodeCount] = useState(10);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);

  const samples = [
    {
      id: 1,
      title: "Mẫu 1: Cây Nhị Phân Hoàn Chỉnh Chuẩn",
      isValid: true,
      desc: "Mọi tầng trên đều đầy 100%. Tầng cuối cùng có các nút được dồn hết về phía bên trái liên tục không có khoảng trống.",
      reason: "✅ HỢP LỆ: Thỏa mãn 100% định nghĩa Complete Binary Tree.",
      nodes: [
        { id: 1, x: 150, y: 30, val: "A" },
        { id: 2, x: 80, y: 80, val: "B" },
        { id: 3, x: 220, y: 80, val: "C" },
        { id: 4, x: 45, y: 130, val: "D" },
        { id: 5, x: 115, y: 130, val: "E" },
        { id: 6, x: 185, y: 130, val: "F" },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
      ],
    },
    {
      id: 2,
      title: "Mẫu 2: Cây Đầy Hoàn Hảo (Full Tree)",
      isValid: true,
      desc: "Tất cả các tầng đều được lấp kín hoàn toàn (Level 0: 1, Level 1: 2, Level 2: 4 nút).",
      reason: "✅ HỢP LỆ: Cây nhị phân đầy đủ luôn là cây Complete.",
      nodes: [
        { id: 1, x: 150, y: 30, val: "1" },
        { id: 2, x: 80, y: 80, val: "2" },
        { id: 3, x: 220, y: 80, val: "3" },
        { id: 4, x: 45, y: 130, val: "4" },
        { id: 5, x: 115, y: 130, val: "5" },
        { id: 6, x: 185, y: 130, val: "6" },
        { id: 7, x: 255, y: 130, val: "7" },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 3, to: 7 },
      ],
    },
    {
      id: 3,
      title: "Mẫu 3: Lệch Phải Ở Tầng Cuối (Có Lỗ Hổng)",
      isValid: false,
      desc: "Tầng cuối cùng nút con bên phải (F) tồn tại nhưng nút con bên trái (E) lại bị khuyết!",
      reason: "❌ VI PHẠM: Tầng cuối không được dồn hết về bên trái (as far left as possible). Xuất hiện lỗ hổng ở giữa.",
      nodes: [
        { id: 1, x: 150, y: 30, val: "A" },
        { id: 2, x: 80, y: 80, val: "B" },
        { id: 3, x: 220, y: 80, val: "C" },
        { id: 4, x: 45, y: 130, val: "D" },
        { id: 6, x: 255, y: 130, val: "G" }, // rightmost child without left ones
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 3, to: 6 },
      ],
    },
    {
      id: 4,
      title: "Mẫu 4: Khuyết Nút Ở Tầng Giữa",
      isValid: false,
      desc: "Tầng 1 chưa được lấp đầy (nút A không có con phải C) nhưng tầng dưới đã có con!",
      reason: "❌ VI PHẠM: Tầng giữa chưa đầy mà tầng dưới đã có phần tử.",
      nodes: [
        { id: 1, x: 150, y: 30, val: "A" },
        { id: 2, x: 80, y: 80, val: "B" },
        { id: 4, x: 45, y: 130, val: "D" },
        { id: 5, x: 115, y: 130, val: "E" },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
      ],
    },
  ];

  const currentSample = samples.find((s) => s.id === selectedSample) || samples[0];

  const quizOptions = [
    "A. Chiều cao là O(N)",
    "B. Chiều cao là O(√N)",
    "C. Chiều cao là O(log N)",
    "D. Chiều cao là O(1)",
  ];
  const correctQuizIdx = 2; // C: O(log N)

  const handleQuizSelect = (idx) => {
    setSelectedQuizOption(idx);
    setIsQuizAnswered(true);
  };

  // Dynamic log calculation
  const calculatedHeight = Math.floor(Math.log2(nodeCount));
  const calculatedLevels = calculatedHeight + 1;

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <TreePine className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cây Nhị Phân Hoàn Chỉnh (Mục 3.1 &amp; 3.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
            Complete Binary Tree &amp; Chiều Cao O(log N)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Định nghĩa cốt lõi: Mọi level đầy 100%, level cuối cùng dồn hết về bên trái (as far left as possible).
          </p>
        </div>

        {/* Height Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Height = O(log N)</span>
        </div>
      </div>

      {/* Part 1: Interactive Sample Tree Validator */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            1. Bộ Kiểm Tra Tính Chất Complete Binary Tree:
          </h4>
          <span className="text-xs text-slate-500 font-mono">Chọn mẫu cây để kiểm tra</span>
        </div>

        {/* 4 Sample Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {samples.map((s) => {
            const isSel = selectedSample === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSample(s.id)}
                className={`p-3 rounded-2xl border text-xs font-bold transition-all text-left flex items-center justify-between shadow-sm ${
                  isSel
                    ? "bg-emerald-600 border-emerald-700 text-white scale-[1.02]"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{s.title.split(":")[0]}</span>
                {s.isValid ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${isSel ? "text-white" : "text-emerald-600"}`} />
                ) : (
                  <XCircle className={`w-3.5 h-3.5 flex-shrink-0 ${isSel ? "text-white" : "text-rose-600"}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Sample SVG & Reason Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white border border-emerald-100 p-5 rounded-2xl shadow-sm">
          <div className="md:col-span-6 flex justify-center py-2">
            <svg viewBox="0 0 300 170" className="w-full max-w-[280px] h-auto select-none">
              {/* Edges */}
              {currentSample.edges.map((e, idx) => {
                const f = currentSample.nodes.find((n) => n.id === e.from);
                const t = currentSample.nodes.find((n) => n.id === e.to);
                return (
                  <line
                    key={idx}
                    x1={f.x}
                    y1={f.y}
                    x2={t.x}
                    y2={t.y}
                    stroke="#94a3b8"
                    strokeWidth="2"
                  />
                );
              })}

              {/* Nodes */}
              {currentSample.nodes.map((n) => (
                <g key={n.id}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="15"
                    fill={currentSample.isValid ? "#d1fae5" : "#ffe4e6"}
                    stroke={currentSample.isValid ? "#059669" : "#e11d48"}
                    strokeWidth="2"
                  />
                  <text
                    x={n.x}
                    y={n.y + 4.5}
                    textAnchor="middle"
                    fill={currentSample.isValid ? "#065f46" : "#9f1239"}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {n.val}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="md:col-span-6 space-y-2.5 text-xs font-sans">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono uppercase ${
                currentSample.isValid
                  ? "bg-emerald-100 text-emerald-950 border border-emerald-300"
                  : "bg-rose-100 text-rose-950 border border-rose-300"
              }`}>
                {currentSample.isValid ? "Hợp Lệ (Complete)" : "Không Hợp Lệ"}
              </span>
              <h5 className="font-bold text-slate-900">{currentSample.title}</h5>
            </div>
            <p className="text-slate-600 leading-relaxed">{currentSample.desc}</p>
            <div className={`p-3 rounded-xl border text-[11px] font-mono leading-relaxed shadow-sm ${
              currentSample.isValid
                ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                : "bg-rose-50 border-rose-200 text-rose-950"
            }`}>
              {currentSample.reason}
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Slide Quiz & Height Calculator */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-emerald-100">
        {/* Left: Slide Quiz */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-100 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-amber-900 font-mono text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>Câu Hỏi Trắc Nghiệm Trong Slide:</span>
          </div>

          <p className="text-xs text-slate-800 leading-relaxed font-sans font-semibold">
            Chiều cao (Height = số cạnh đến lá sâu nhất) của Complete Binary Tree có $N$ items là:
          </p>

          <div className="space-y-1.5 font-mono text-xs">
            {quizOptions.map((opt, idx) => {
              const isSelected = selectedQuizOption === idx;
              const isCorrect = idx === correctQuizIdx;

              let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-50";
              if (isQuizAnswered) {
                if (isCorrect) btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                else if (isSelected) btnStyle = "bg-rose-100 border-rose-400 text-rose-950";
                else btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleQuizSelect(idx)}
                  disabled={isQuizAnswered}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between shadow-sm ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isQuizAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </button>
              );
            })}
          </div>

          {isQuizAnswered && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-slate-700 space-y-1 shadow-sm">
              <strong className="text-emerald-950 block font-mono">Giải thích từ slide:</strong>
              Mỗi level của cây nhị phân hoàn chỉnh chứa <strong>gấp đôi số node</strong> so với level trước (Level 0: 1, Level 1: 2, Level 2: 4, Level 3: 8,...). Vậy với N node, số level cần thiết chỉ tăng theo <strong>logarit cơ số 2 của N</strong> &rArr; <strong className="text-emerald-900">Height = O(log N)</strong>.
            </div>
          )}
        </div>

        {/* Right: Height Calculator */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-100 space-y-3 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 font-mono flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-700" />
              Máy Tính Chiều Cao Cây Hoàn Chỉnh:
            </span>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Số phần tử N = {nodeCount}</span>
                <span className="text-emerald-800 font-bold">h = ⌊log₂({nodeCount})⌋ = {calculatedHeight}</span>
              </div>
              <input
                type="range"
                min="1"
                max="1024"
                value={nodeCount}
                onChange={(e) => setNodeCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 shadow-sm">
                <span className="text-slate-500 text-[10px] block font-semibold">Số tầng (Levels):</span>
                <strong className="text-sky-950 text-sm">{calculatedLevels}</strong>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm">
                <span className="text-slate-500 text-[10px] block font-semibold">Chiều cao (Height):</span>
                <strong className="text-emerald-950 text-sm">{calculatedHeight} cạnh</strong>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] text-emerald-950 shadow-sm">
            ⚠️ <strong>Ghi nhớ bắt buộc:</strong> Đáp án <strong>Height = O(log N)</strong> sẽ dùng cho gần như mọi phân tích độ phức tạp thời gian của Binary Heap!
          </div>
        </div>
      </div>
    </div>
  );
}
