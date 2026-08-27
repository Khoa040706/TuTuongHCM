"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, Target } from "lucide-react";

export default function HeapSortWarmupQuizCard() {
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const options = [
    "1. O(n²)",
    "2. O(n log n)",
    "3. O(n)",
    "4. O(log n)",
  ];
  const correctIdx = 1; // O(n log n)

  const handleSelect = (idx) => {
    setSelectedOpt(idx);
    setIsAnswered(true);
  };

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Target className="w-3.5 h-3.5 text-indigo-700" />
            <span>Khởi Động Trước Khi Học HeapSort (Mục 9.0)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            Ôn Lại: MergeSort &amp; Mốc Chuẩn O(n log n)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Thiết lập mốc đối sánh hiệu năng trước khi tìm hiểu thuật toán sắp xếp dựa trên cây: <strong>HeapSort</strong>.
          </p>
        </div>

        {/* Complexity Target Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-indigo-300 bg-indigo-100 text-indigo-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Mục tiêu: O(n log n)
        </div>
      </div>

      {/* Quiz Card */}
      <div className="p-6 rounded-2xl bg-white border border-indigo-100 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-amber-950 font-mono text-xs font-bold">
          <HelpCircle className="w-4 h-4 text-amber-700" />
          <span>Câu Hỏi Trắc Nghiệm Khởi Động Trong Slide:</span>
        </div>

        <p className="text-xs md:text-sm text-slate-900 font-semibold font-sans leading-relaxed">
          MergeSort (đã học ở CS1020) sắp xếp một mảng $n$ phần tử trong thời gian:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
          {options.map((opt, idx) => {
            const isSelected = selectedOpt === idx;
            const isCorrect = idx === correctIdx;

            let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-50";
            if (isAnswered) {
              if (isCorrect) btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold shadow-sm";
              else if (isSelected) btnStyle = "bg-rose-100 border-rose-400 text-rose-950";
              else btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between shadow-sm ${btnStyle}`}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-slate-700 space-y-1.5 leading-relaxed shadow-sm">
            <strong className="text-emerald-950 block font-mono">Ý nghĩa của câu hỏi:</strong>
            Ôn lại mốc chuẩn <strong>O(n log n)</strong> để so sánh với <strong>HeapSort</strong> &mdash; cả hai thuật toán đều đạt độ phức tạp thời gian tối ưu <strong>O(n log n)</strong> trong trường hợp xấu nhất, nhưng HeapSort có ưu thế vượt trội về việc sắp xếp tại chỗ (in-place) mà không tốn thêm mảng phụ!
          </div>
        )}
      </div>
    </div>
  );
}
