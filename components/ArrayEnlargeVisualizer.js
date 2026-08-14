"use client";
import React, { useState } from "react";
import { Maximize2, Play, RotateCcw, ArrowDown, CheckCircle2, Clock, Sparkles, AlertTriangle } from "lucide-react";

export default function ArrayEnlargeVisualizer() {
  const [oldSize, setOldSize] = useState(4);
  const [oldArr, setOldArr] = useState(["e0", "e1", "e2", "e3"]);
  const [newSize, setNewSize] = useState(8);
  const [newArr, setNewArr] = useState(Array(8).fill(null));
  const [copyIndex, setCopyIndex] = useState(-1);
  const [isCopying, setIsCopying] = useState(false);
  const [logText, setLogText] = useState(
    "Cơ chế enlargeArr(): Khi mảng đầy (top >= maxSize - 1), hệ thống khởi tạo mảng mới x[] kích thước gấp đôi (2 * maxSize) và copy các phần tử sang."
  );

  const handleStartEnlarge = () => {
    if (isCopying) return;
    setIsCopying(true);
    setCopyIndex(0);
    setNewArr(Array(newSize).fill(null));
    setLogText("Bắt đầu enlargeArr(): Khởi tạo mảng x mới kích thước 8 (2 * 4)...");

    let curr = 0;
    const interval = setInterval(() => {
      if (curr < oldSize) {
        const val = oldArr[curr];
        setNewArr((prev) => {
          const updated = [...prev];
          updated[curr] = val;
          return updated;
        });
        setCopyIndex(curr);
        setLogText(`Copying [${curr}]: Sao chép arr[${curr}] = "${val}" sang x[${curr}].`);
        curr++;
      } else {
        clearInterval(interval);
        setIsCopying(false);
        setCopyIndex(-1);
        setLogText("✅ Hoàn tất enlargeArr(): maxSize = 8, arr = x. Thao tác push() có thể tiếp tục!");
      }
    }, 600);
  };

  const handleReset = () => {
    setOldSize(4);
    setOldArr(["e0", "e1", "e2", "e3"]);
    setNewSize(8);
    setNewArr(Array(8).fill(null));
    setCopyIndex(-1);
    setIsCopying(false);
    setLogText("Đã khôi phục trạng thái ban đầu (mảng cũ đầy 4/4 phần tử).");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-amber-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-amber-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 text-amber-800 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mô phỏng Tràn Mảng §2.4
              </span>
              <span className="text-xs text-slate-500 font-mono">enlargeArr()</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <Maximize2 className="w-5 h-5 text-amber-600" />
              Mô Phỏng Cơ Chế Nhân Đôi Mảng Khi Stack Tràn (enlargeArr)
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800">
              Mảng cũ: <strong>maxSize = {oldSize}</strong>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
              Mảng mới: <strong>newSize = {newSize}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-slate-900 p-4 rounded-xl text-white mb-6 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Khi push() gặp top &gt;= maxSize-1 &rarr; Gọi enlargeArr()</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleStartEnlarge}
            disabled={isCopying}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white text-xs font-medium rounded-lg transition-colors shadow-md"
          >
            <Play className="w-4 h-4" /> Kích hoạt enlargeArr()
          </button>
          <button
            onClick={handleReset}
            disabled={isCopying}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-slate-200 text-xs font-medium rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      {/* Array Copy Visual Transformation */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-6">
        {/* Old Array Visual */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2">
            <span className="font-bold text-amber-900">Mảng Cũ `arr[]` (maxSize = 4 — ĐÃ ĐẦY 100%):</span>
            <span className="text-amber-700">O(1)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            {oldArr.map((val, idx) => (
              <div
                key={idx}
                className={`w-14 h-14 rounded-xl border-2 flex flex-col items-center justify-center p-1 font-mono transition-all ${
                  copyIndex === idx
                    ? "border-amber-500 bg-amber-100 ring-4 ring-amber-300 font-bold scale-110 shadow-lg"
                    : "border-slate-300 bg-white text-slate-800"
                }`}
              >
                <span className="text-[10px] text-slate-400">[{idx}]</span>
                <span className="text-xs font-bold">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copy Flow Arrow */}
        <div className="flex items-center justify-center text-slate-400 gap-2">
          <ArrowDown className="w-5 h-5 text-amber-600 animate-bounce" />
          <span className="text-xs font-mono text-amber-800 font-bold">
            Copying elements (for j = 0; j &lt; maxSize; j++)
          </span>
          <ArrowDown className="w-5 h-5 text-amber-600 animate-bounce" />
        </div>

        {/* New Double Size Array Visual */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2">
            <span className="font-bold text-emerald-900">Mảng Mới `x[]` (newSize = 8 — GẤP ĐÔI BỘ NHỚ):</span>
            <span className="text-emerald-700">Amortized O(1)</span>
          </div>
          <div className="flex items-center justify-center gap-2 overflow-x-auto">
            {newArr.map((val, idx) => {
              const isFilled = val !== null;
              const isJustCopied = copyIndex === idx;

              return (
                <div
                  key={idx}
                  className={`w-14 h-14 rounded-xl border-2 flex flex-col items-center justify-center p-1 font-mono transition-all ${
                    isJustCopied
                      ? "border-emerald-500 bg-emerald-100 ring-4 ring-emerald-300 font-bold scale-110 shadow-lg"
                      : isFilled
                      ? "border-emerald-400 bg-white text-emerald-900"
                      : "border-dashed border-slate-300 bg-slate-100/60 text-slate-300"
                  }`}
                >
                  <span className="text-[10px] text-slate-400">[{idx}]</span>
                  <span className="text-xs font-bold">{isFilled ? val : "free"}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Complexity Note */}
      <div className="mt-4 bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-950 font-sans">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block mb-0.5">Đánh giá Độ Phức Tạp (Complexity Analysis):</strong>
          <span>{logText}</span>
        </div>
      </div>
    </div>
  );
}
