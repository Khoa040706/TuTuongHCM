"use client";

import React, { useState } from "react";
import { Gauge } from "lucide-react";

export default function HeapExtractMaxComplexityGauge() {
  const [nodeCount, setNodeCount] = useState(1000000); // 1M default

  const height = Math.floor(Math.log2(nodeCount));

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Gauge className="w-3.5 h-3.5 text-teal-700" />
            <span>Phân Tích Độ Phức Tạp (Mục 7.4)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
            Độ Phức Tạp: ExtractMax() = O(log N)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đường lặn xuống sâu nhất từ Root đến tầng lá sâu nhất chính là chiều cao $h = \lfloor \log_2 N \rfloor = O(\log N)$.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-4 py-2 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-mono font-extrabold text-sm self-start md:self-auto shadow-sm">
          ShiftDown: O(log n) &rarr; ExtractMax: O(log n)
        </div>
      </div>

      {/* Interactive Scale Slider */}
      <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-4 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <span className="text-slate-600 font-semibold">Quy mô phần tử: N = {nodeCount.toLocaleString()} phần tử</span>
          <span className="text-teal-800 font-bold">Số bước Swap chìm tối đa: &le; {height} bước!</span>
        </div>

        <input
          type="range"
          min="8"
          max="10000000"
          value={nodeCount}
          onChange={(e) => setNodeCount(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
        />

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span className="text-slate-500 font-semibold">Mốc mẫu:</span>
          {[100, 1000, 100000, 1000000, 10000000].map((preset) => (
            <button
              key={preset}
              onClick={() => setNodeCount(preset)}
              className={`px-3 py-1 rounded-xl border transition-all shadow-sm ${
                nodeCount === preset
                  ? "bg-teal-600 text-white border-teal-700 font-bold"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              N = {preset.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Steps Complexity Breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
          <span className="font-mono text-slate-500 text-[10px] block font-semibold">1. Lưu Max Root</span>
          <div className="font-mono font-bold text-sky-800 text-xs">maxV = A[1] : O(1)</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
          <span className="font-mono text-slate-500 text-[10px] block font-semibold">2. Đưa lá lên đỉnh</span>
          <div className="font-mono font-bold text-emerald-800 text-xs">A[1]=A[heapsize] : O(1)</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
          <span className="font-mono text-slate-500 text-[10px] block font-semibold">3. Giảm kích thước</span>
          <div className="font-mono font-bold text-purple-900 text-xs">heapsize-- : O(1)</div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
          <span className="font-mono text-slate-500 text-[10px] block font-semibold">4. Phục hồi Heap</span>
          <div className="font-mono font-bold text-amber-800 text-xs">ShiftDown(1) : O(log N)</div>
        </div>
      </div>
    </div>
  );
}
