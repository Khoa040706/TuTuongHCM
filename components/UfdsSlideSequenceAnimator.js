"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, Sparkles } from "lucide-react";

export default function UfdsSlideSequenceAnimator() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "1. Khởi Tạo: 8 Tập Hợp Rời Rạc Độc Lập",
      cmd: "UnionFind(8)",
      desc: "8 nút [0..7] tự trỏ chính nó: p[i] = i, rank[i] = 0.",
      pArr: [0, 1, 2, 3, 4, 5, 6, 7],
      rankArr: [0, 0, 0, 0, 0, 0, 0, 0],
      activeRoots: [0, 1, 2, 3, 4, 5, 6, 7],
      check04: false,
      check05: false,
    },
    {
      title: "2. unionSet(0, 1) — Gộp tập {0} và {1}",
      cmd: "unionSet(0, 1)",
      desc: "rank(0) == rank(1) == 0 ⟹ p[0] = 1, rank[1] tăng lên 1.",
      pArr: [1, 1, 2, 3, 4, 5, 6, 7],
      rankArr: [0, 1, 0, 0, 0, 0, 0, 0],
      activeRoots: [1, 2, 3, 4, 5, 6, 7],
      check04: false,
      check05: false,
    },
    {
      title: "3. unionSet(2, 3) — Gộp tập {2} và {3}",
      cmd: "unionSet(2, 3)",
      desc: "rank(2) == rank(3) == 0 ⟹ p[2] = 3, rank[3] tăng lên 1.",
      pArr: [1, 1, 3, 3, 4, 5, 6, 7],
      rankArr: [0, 1, 0, 1, 0, 0, 0, 0],
      activeRoots: [1, 3, 4, 5, 6, 7],
      check04: false,
      check05: false,
    },
    {
      title: "4. unionSet(4, 3) — Gộp tập {4} vào tập {2, 3}",
      cmd: "unionSet(4, 3)",
      desc: "findSet(4) = 4 (rank 0) < findSet(3) = 3 (rank 1) ⟹ p[4] = 3, rank[3] giữ nguyên = 1.",
      pArr: [1, 1, 3, 3, 3, 5, 6, 7],
      rankArr: [0, 1, 0, 1, 0, 0, 0, 0],
      activeRoots: [1, 3, 5, 6, 7],
      check04: false,
      check05: false,
    },
    {
      title: "5. unionSet(0, 3) — Gộp tập {0, 1} vào tập {2, 3, 4}",
      cmd: "unionSet(0, 3)",
      desc: "findSet(0) = 1 (rank 1) == findSet(3) = 3 (rank 1) ⟹ Cùng rank 1, gắn p[1] = 3 và rank[3] TĂNG LÊN 2!",
      pArr: [1, 3, 3, 3, 3, 5, 6, 7],
      rankArr: [0, 1, 0, 2, 0, 0, 0, 0],
      activeRoots: [3, 5, 6, 7],
      check04: true, // isSameSet(0, 4) is now TRUE!
      check05: false,
    },
  ];

  const step = steps[currentStep];

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Ví Dụ Chuỗi 4 Bước Trong Slide (Mục 1.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-orange-950 to-slate-900 bg-clip-text text-transparent">
            Hoạt Họa Chuỗi unionSet: (0,1) &rarr; (2,3) &rarr; (4,3) &rarr; (0,3)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quan sát quá trình gộp các tập hợp độc lập thành tập hợp lớn và kiểm tra liên thông với <code>isSameSet()</code>.
          </p>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Trước
          </button>
          <span className="text-xs font-mono font-bold text-amber-950 px-1">
            {currentStep + 1} / {steps.length}
          </span>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-1 shadow-sm font-mono"
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
      <div className="p-4 rounded-2xl bg-white border border-amber-200 mb-6 shadow-sm space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-amber-950 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            {step.title}
          </h4>
          <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-mono font-bold text-xs">
            Lệnh: {step.cmd}
          </span>
        </div>
        <p className="text-xs text-slate-600 font-sans leading-relaxed">{step.desc}</p>
      </div>

      {/* Dual Grid: Array Inspection & isSameSet Checks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Arrays Table (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Trạng Thái Mảng Parent &amp; Rank Sau {step.cmd}</span>
            <span className="text-amber-800 font-bold">8 Nút [0..7]</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center font-mono text-xs">
              <thead>
                <tr className="text-slate-500 text-[10px] border-b border-slate-200">
                  <th className="pb-1.5 text-left text-slate-600">Nút</th>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <th key={i} className="pb-1.5">[{i}]</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                <tr>
                  <td className="py-2 text-left font-bold text-emerald-800">parent</td>
                  {step.pArr.map((p, idx) => (
                    <td
                      key={idx}
                      className={`py-2 font-bold ${
                        p === idx ? "text-amber-900 bg-amber-100/80 rounded font-extrabold" : "text-slate-700"
                      }`}
                    >
                      {p}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2 text-left font-bold text-teal-800">rank</td>
                  {step.rankArr.map((r, idx) => (
                    <td
                      key={idx}
                      className={`py-2 font-bold ${
                        r > 0 ? "text-teal-900 font-extrabold" : "text-slate-400"
                      }`}
                    >
                      {r}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[11px] text-slate-600 font-sans pt-1">
            ⭐ Các ô nền vàng là các <strong>Root đại diện</strong> hiện tại của rừng cây.
          </div>
        </div>

        {/* Right: isSameSet() Checker (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 text-xs font-sans shadow-sm">
          <span className="font-bold uppercase tracking-wider text-emerald-950 font-mono flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            Kiểm Tra isSameSet(i, j) Hiện Tại:
          </span>

          <div className="space-y-2 font-mono text-xs">
            {/* Query 1: isSameSet(0, 4) */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-slate-800 font-bold block">isSameSet(0, 4)</span>
                <span className="text-[10px] text-slate-500 font-sans">
                  findSet(0)={step.pArr[0] === 3 ? "3" : "1"} vs findSet(4)={step.pArr[4] === 3 ? "3" : "4"}
                </span>
              </div>
              <span className={`px-2.5 py-1 rounded-lg font-bold shadow-sm ${
                step.check04
                  ? "bg-emerald-100 text-emerald-950 border border-emerald-300"
                  : "bg-slate-100 text-slate-400 border border-slate-200"
              }`}>
                {step.check04 ? "TRUE (Cùng tập 3!)" : "FALSE"}
              </span>
            </div>

            {/* Query 2: isSameSet(0, 5) */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-slate-800 font-bold block">isSameSet(0, 5)</span>
                <span className="text-[10px] text-slate-500 font-sans">
                  findSet(0)={step.pArr[0] === 3 ? "3" : "1"} vs findSet(5)=5
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-400 border border-slate-200 font-bold shadow-sm">
                FALSE (Khác tập)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
