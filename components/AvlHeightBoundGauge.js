"use client";

import React, { useState } from "react";
import { Scale, Zap } from "lucide-react";

export default function AvlHeightBoundGauge() {
  const [nodeCount, setNodeCount] = useState(1000);

  const lowerBound = Math.ceil(Math.log2(nodeCount));
  const upperBound = nodeCount - 1;
  const speedupRatio = (upperBound / Math.max(1, lowerBound)).toFixed(0);

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Scale className="w-3.5 h-3.5 text-emerald-700" />
            <span>Khoảng Kẹp Chiều Cao Của Cây BST (Mục 2.2 – 2.4)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Thước Đo Cận Chiều Cao: log&#8322;(n) &lt; h &lt; n
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Kéo thanh trượt số đỉnh n để thấy sự chênh lệch khổng lồ giữa Cây Cân Bằng (Cận dưới) và Cây Suy Biến (Cận trên).
          </p>
        </div>

        {/* Big Math Clamp Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>log&#8322;(n) &lt; h &lt; n</span>
        </div>
      </div>

      {/* Slider Control Bar */}
      <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
            <span>Số lượng đỉnh trong cây (n):</span>
            <span className="font-mono text-base font-extrabold text-emerald-800">{nodeCount.toLocaleString()}</span>
          </label>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 text-[11px] font-semibold">Chọn nhanh (Slide):</span>
            {[8, 64, 500, 1000].map((val) => (
              <button
                key={val}
                onClick={() => setNodeCount(val)}
                className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                  nodeCount === val
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                n={val}
              </button>
            ))}
          </div>
        </div>

        <input
          type="range"
          min="8"
          max="1000"
          step="4"
          value={nodeCount}
          onChange={(e) => setNodeCount(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
        />
      </div>

      {/* Visual Clamp Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left: Lower Bound (Balanced) */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-300 shadow-sm relative overflow-hidden space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono">
              Cận Dưới (Lower Bound) • Tối Ưu
            </span>
            <span className="text-xs font-mono font-bold text-emerald-800">h &gt; log&#8322;(n)</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-emerald-800">{lowerBound}</span>
            <span className="text-xs text-slate-600 font-mono font-semibold">cạnh (chiều cao)</span>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            Đạt được khi cây <strong>cân bằng hoàn hảo</strong>. Mọi phép tìm kiếm chỉ mất tối đa <strong>{lowerBound} bước</strong> so sánh.
          </p>

          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-mono font-bold">
            n &le; 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1 &rarr; h &gt; log&#8322;(n)
          </div>
        </div>

        {/* Right: Upper Bound (Skewed) */}
        <div className="p-5 rounded-2xl bg-white border border-rose-300 shadow-sm relative overflow-hidden space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase bg-rose-100 text-rose-900 border border-rose-200 font-mono">
              Cận Trên (Upper Bound) • Thảm Họa
            </span>
            <span className="text-xs font-mono font-bold text-rose-800">h = n - 1 &lt; n</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-rose-800">{upperBound}</span>
            <span className="text-xs text-slate-600 font-mono font-semibold">cạnh (chiều cao)</span>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            Xảy ra khi cây bị <strong>suy biến thành đường thẳng</strong> (như linked list). Phải đi qua <strong>{upperBound} bước</strong> để tìm phần tử cuối!
          </p>

          <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-[11px] text-rose-900 font-mono font-bold">
            Trường hợp xấu nhất: h = n - 1 &rarr; Mọi thao tác O(h) thành O(n)
          </div>
        </div>
      </div>

      {/* Speedup Takeaway Banner */}
      <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-950">
              Hiệu Quả Tăng Tốc Của Cây Cân Bằng:
            </div>
            <div className="text-xs text-slate-700 mt-0.5">
              Với n = {nodeCount.toLocaleString()}, cây cân bằng nhanh hơn cây suy biến gấp <strong className="text-emerald-800 font-mono text-sm">{speedupRatio} lần</strong>!
            </div>
          </div>
        </div>

        <div className="text-right text-xs font-mono text-slate-600">
          <strong className="text-emerald-800 font-bold">Định nghĩa Balanced:</strong> h = O(log n)
        </div>
      </div>
    </div>
  );
}
