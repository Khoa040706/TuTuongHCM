"use client";

import React, { useState } from "react";
import { Crown, Scale, CheckCircle2, HelpCircle, ArrowDown, Sparkles } from "lucide-react";

export default function HeapPropertyRootProofStudio() {
  const [heapType, setHeapType] = useState("max"); // "max" | "min"
  const [selectedQuizOpt, setSelectedQuizOpt] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const quizOptions = [
    "1. Một trong các leaves (lá cây)",
    "2. Một trong các internal vertices (đỉnh trong)",
    "3. Có thể ở bất kỳ đâu trong heap",
    "4. The root (Gốc cây)",
  ];
  const correctQuizIdx = 3; // "4. The root"

  const handleQuizSelect = (idx) => {
    setSelectedQuizOpt(idx);
    setIsAnswered(true);
  };

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>Tính Chất Heap &amp; Vị Trí Cực Trị (Mục 5.1 &amp; 5.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Binary Heap Property &amp; Chứng Minh Max Luôn Ở Root
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quy tắc vàng: Mọi nút cha đều phải lớn hơn hoặc bằng các nút con của nó (đối với Max-Heap).
          </p>
        </div>

        {/* Max/Min Heap Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setHeapType("max")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              heapType === "max"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Max-Heap (Cha &ge; Con)
          </button>
          <button
            onClick={() => setHeapType("min")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              heapType === "min"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Min-Heap (Cha &le; Con)
          </button>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className={`p-5 rounded-2xl border transition-all shadow-sm ${
          heapType === "max"
            ? "bg-amber-50 border-amber-300 text-amber-950 scale-[1.01]"
            : "bg-white border-slate-200 text-slate-600"
        }`}>
          <div className="flex items-center justify-between font-mono font-bold text-xs mb-2">
            <span className="flex items-center gap-1.5 text-amber-900 font-extrabold">
              <Crown className="w-4 h-4 text-amber-700" />
              1. Max-Heap Property:
            </span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-950 border border-amber-300 font-bold">
              Mặc định bài giảng
            </span>
          </div>
          <div className="font-mono text-base font-extrabold text-amber-900 py-1">
            A[parent(i)] &ge; A[i]
          </div>
          <p className="text-xs text-slate-700 font-sans mt-1 leading-relaxed">
            Áp dụng cho mọi nút <span className="font-mono font-bold">i &ne; root</span>. Giá trị của nút cha luôn lớn hơn hoặc bằng giá trị của các con.
          </p>
        </div>

        <div className={`p-5 rounded-2xl border transition-all shadow-sm ${
          heapType === "min"
            ? "bg-emerald-50 border-emerald-300 text-emerald-950 scale-[1.01]"
            : "bg-white border-slate-200 text-slate-600"
        }`}>
          <div className="flex items-center justify-between font-mono font-bold text-xs mb-2">
            <span className="flex items-center gap-1.5 text-emerald-900 font-extrabold">
              <Scale className="w-4 h-4 text-emerald-700" />
              2. Min-Heap Property:
            </span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 font-bold">
              Ngược lại
            </span>
          </div>
          <div className="font-mono text-base font-extrabold text-emerald-900 py-1">
            A[parent(i)] &le; A[i]
          </div>
          <p className="text-xs text-slate-700 font-sans mt-1 leading-relaxed">
            Áp dụng cho mọi nút <span className="font-mono font-bold">i &ne; root</span>. Giá trị của nút cha luôn nhỏ hơn hoặc bằng giá trị của các con.
          </p>
        </div>
      </div>

      {/* Proof Box & Slide Quiz */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Proof (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <span className="text-xs font-mono font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-700" />
            Chứng Minh Toán Học (Slide 5.2):
          </span>

          <div className="space-y-2 text-xs font-sans text-slate-700 leading-relaxed">
            <p>
              Theo định nghĩa Max-Heap: với mọi đường đi từ <strong>Root</strong> xuống bất kỳ nút lá nào:
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 font-mono text-xs text-center text-amber-950 font-bold flex items-center justify-center gap-2 shadow-inner">
              <span>A[Root]</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber-600" />
              <span>&ge; A[Level 1]</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber-600" />
              <span>&ge; A[Level 2]</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber-600" />
              <span>&ge; A[Leaf]</span>
            </div>
            <p>
              &rArr; Giá trị của các node <strong>không bao giờ tăng</strong> khi đi từ trên xuống dưới.
            </p>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold shadow-sm">
              ✅ Kết luận: Root luôn luôn là giá trị lớn nhất trong toàn bộ Max-Heap! Thao tác tìm Max chỉ tốn O(1).
            </div>
          </div>
        </div>

        {/* Slide Quiz (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-amber-950 font-mono text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>Câu Hỏi Trắc Nghiệm Trong Slide:</span>
          </div>

          <p className="text-xs text-slate-900 font-semibold font-sans">
            Phần tử lớn nhất trong Binary Max Heap được lưu ở đâu?
          </p>

          <div className="space-y-1.5 font-mono text-xs">
            {quizOptions.map((opt, idx) => {
              const isSelected = selectedQuizOpt === idx;
              const isCorrect = idx === correctQuizIdx;

              let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-50";
              if (isAnswered) {
                if (isCorrect) btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                else if (isSelected) btnStyle = "bg-rose-100 border-rose-400 text-rose-950";
                else btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleQuizSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between shadow-sm ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] font-sans text-slate-700 shadow-sm">
              <strong className="text-emerald-950 block font-mono">Giải thích:</strong>
              Do tính chất <span className="font-mono font-bold">A[parent(i)] &ge; A[i]</span>, root luôn lớn hơn hoặc bằng mọi nút con cháu trong cây.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
