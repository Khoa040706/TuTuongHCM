"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function QueueEnlargeArrVisualizer() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Trạng thái ban đầu (Mảng cũ bị ĐẦY)",
      desc: "Mảng cũ maxSize = 4. front = 2, back = 1. Lưu các phần tử: 'A' (tại [2]), 'B' (tại [3]), 'C' (tại [0]). Slot [1] là ô trống (Solution 2: Full).",
      oldArr: ["C", null, "A", "B"], // front = 2, back = 1
      oldFront: 2,
      oldBack: 1,
      newArr: Array(8).fill(null),
      newFront: null,
      newBack: null,
      highlightIndex: null
    },
    {
      title: "Bước 1: Cấp phát mảng mới (Gấp đôi kích thước = 8)",
      desc: "Tạo mảng mới x = new Object[8]. Khởi tạo tất cả slot bằng null.",
      oldArr: ["C", null, "A", "B"],
      oldFront: 2,
      oldBack: 1,
      newArr: Array(8).fill(null),
      newFront: null,
      newBack: null,
      highlightIndex: null
    },
    {
      title: "Bước 2: Copy phần tử thứ nhất từ front (j = 0)",
      desc: "Copy arr[(front + 0) % 4] = arr[2] ('A') sang x[0].",
      oldArr: ["C", null, "A", "B"],
      oldFront: 2,
      oldBack: 1,
      newArr: ["A", null, null, null, null, null, null, null],
      newFront: 0,
      newBack: null,
      highlightIndex: 2
    },
    {
      title: "Bước 3: Copy phần tử thứ hai (j = 1)",
      desc: "Copy arr[(front + 1) % 4] = arr[3] ('B') sang x[1].",
      oldArr: ["C", null, "A", "B"],
      oldFront: 2,
      oldBack: 1,
      newArr: ["A", "B", null, null, null, null, null, null],
      newFront: 0,
      newBack: null,
      highlightIndex: 3
    },
    {
      title: "Bước 4: Copy phần tử thứ ba (j = 2)",
      desc: "Copy arr[(front + 2) % 4] = arr[0] ('C') sang x[2].",
      oldArr: ["C", null, "A", "B"],
      oldFront: 2,
      oldBack: 1,
      newArr: ["A", "B", "C", null, null, null, null, null],
      newFront: 0,
      newBack: null,
      highlightIndex: 0
    },
    {
      title: "Bước 5: Hoàn tất & Reset chỉ số",
      desc: "Reset front = 0, back = maxSize - 1 (mảng cũ) = 3. Mảng mới đã sẵn sàng nhận thêm dữ liệu!",
      oldArr: ["C", null, "A", "B"],
      oldFront: 2,
      oldBack: 1,
      newArr: ["A", "B", "C", null, null, null, null, null],
      newFront: 0,
      newBack: 3,
      highlightIndex: null
    }
  ];

  const current = steps[step];

  const handleNext = () => {
    setStep((prev) => (prev + 1) % steps.length);
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold font-mono bg-cyan-100 text-cyan-800 border border-cyan-200 px-2.5 py-1 rounded-full uppercase">
            Mục 7.6 - Thuật toán quan trọng
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2 flex items-center gap-2">
            Mô phỏng Mở rộng Mảng tuần hoàn <code className="text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200/60 font-mono text-base">enlargeArr()</code>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Replay
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold rounded-lg transition shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Bước tiếp ({step + 1}/{steps.length})
          </button>
        </div>
      </div>

      {/* Description Box */}
      <div className="my-4 p-3 bg-slate-950 text-cyan-300 font-mono text-xs rounded-xl border border-slate-800 flex items-start gap-2.5 shadow-inner">
        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block mb-0.5 font-sans font-bold">{current.title}</strong>
          <span className="leading-relaxed">{current.desc}</span>
        </div>
      </div>

      {/* Array Comparison Visualizer */}
      <div className="space-y-6 my-6">
        {/* Old Array (Size 4) */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              1. MẢNG CŨ (maxSize = 4):
            </span>
            <span className="text-[11px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
              front = {current.oldFront}, back = {current.oldBack}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 font-mono text-center">
            {current.oldArr.map((val, idx) => {
              const isHighlight = idx === current.highlightIndex;
              const isFront = idx === current.oldFront;
              const isBack = idx === current.oldBack;

              return (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-full py-3 rounded-xl font-extrabold text-base border transition-all ${
                      isHighlight
                        ? "bg-amber-400 text-slate-950 font-bold border-amber-500 scale-105 shadow-md"
                        : val !== null
                        ? "bg-white text-slate-800 border border-slate-300 shadow-sm"
                        : "bg-slate-100 text-slate-400 border border-slate-200 border-dashed"
                    }`}
                  >
                    {val !== null ? val : "null"}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-semibold">[{idx}]</span>
                  <div className="flex flex-col gap-0.5 mt-0.5 text-[9px] font-extrabold uppercase">
                    {isFront && <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-1.5 py-0.5 rounded">FRONT</span>}
                    {isBack && <span className="bg-indigo-100 text-indigo-800 border border-indigo-300 px-1.5 py-0.5 rounded">BACK</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copy Formula Indicator */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-600 py-1">
          <ArrowRight className="w-4 h-4 text-cyan-600 rotate-90 md:rotate-0" />
          <span className="bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1 rounded-full font-mono text-xs font-bold shadow-xs">
            Công thức copy: <code className="text-cyan-700 font-bold">x[j] = arr[(front + j) % maxSize]</code>
          </span>
          <ArrowRight className="w-4 h-4 text-cyan-600 rotate-90 md:rotate-0" />
        </div>

        {/* New Array (Size 8) */}
        <div className="bg-teal-50/50 border border-teal-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-teal-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              2. MẢNG MỚI ĐÃ MỞ RỘNG (newSize = 8):
            </span>
            <span className="text-[11px] font-mono text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded">
              {current.newFront !== null ? `front = ${current.newFront}` : ""}{" "}
              {current.newBack !== null ? `, back = ${current.newBack}` : ""}
            </span>
          </div>
          <div className="grid grid-cols-8 gap-1.5 font-mono text-center">
            {current.newArr.map((val, idx) => {
              const isFront = idx === current.newFront;
              const isBack = idx === current.newBack;

              return (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-full py-2.5 rounded-lg font-extrabold text-sm border transition-all ${
                      val !== null
                        ? "bg-teal-600 text-white border border-teal-700 shadow-sm"
                        : "bg-white/80 text-slate-400 border border-teal-200 border-dashed"
                    }`}
                  >
                    {val !== null ? val : "null"}
                  </div>
                  <span className="text-[10px] text-teal-700/80 mt-1 font-semibold">[{idx}]</span>
                  <div className="flex flex-col gap-0.5 mt-0.5 text-[9px] font-extrabold uppercase">
                    {isFront && <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-1 py-0.5 rounded">FRONT</span>}
                    {isBack && <span className="bg-indigo-100 text-indigo-800 border border-indigo-300 px-1 py-0.5 rounded">BACK</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

