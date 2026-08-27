"use client";

import React, { useState } from "react";
import { Zap, Sparkles, TrendingUp, Gauge, ArrowRight } from "lucide-react";

export default function BigOComparisonVisualizer() {
  const [sliderVal, setSliderVal] = useState(3); // index in values array: 0 -> 8, 1 -> 16, 2 -> 32, 3 -> 1000000

  const benchmarks = [
    { n: 8, logN: 3, label: "n = 8 (Rất nhỏ)", linearBar: 8, logBar: 3, ratio: 2.7, comment: "Chênh lệch nhỏ, mảng vẫn dùng tốt" },
    { n: 16, logN: 4, label: "n = 16 (Nhỏ)", linearBar: 16, logBar: 4, ratio: 4.0, comment: "O(n) bắt đầu chậm hơn gấp 4 lần" },
    { n: 32, logN: 5, label: "n = 32 (Trung bình)", linearBar: 32, logBar: 5, ratio: 6.4, comment: "O(log n) chỉ tăng thêm 1 phép so sánh!" },
    { n: 1000000, logN: 20, label: "n = 1,000,000 (1 Triệu - Lớn)", linearBar: 100, logBar: 2, ratio: 50000, isHuge: true, comment: "O(n) cần 1 TRIỆU bước, O(log n) chỉ cần ~20 bước! 🚀" },
  ];

  const current = benchmarks[sliderVal];

  const calcLogWidth = (item) => {
    if (item.isHuge) return "18%";
    return `${Math.min(100, (item.logBar / 32) * 100)}%`;
  };

  const calcLinearWidth = (item) => {
    if (item.isHuge) return "100%";
    return `${Math.min(100, (item.linearBar / 32) * 100)}%`;
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mô Phỏng Trực Quan Tăng Trưởng</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Cuộc Đua Tốc Độ: O(n) Tuyến Tính vs O(log n) Logarithmic
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Minh họa trực quan lý do vì sao cây BST cân bằng (h &approx; log&#8322;n) là &quot;chén thánh&quot; xử lý dữ liệu lớn.
          </p>
        </div>

        {/* Quick stat badge */}
        <div className="flex items-center gap-3 bg-white border border-emerald-200 px-4 py-2.5 rounded-2xl shadow-sm self-start md:self-auto">
          <Gauge className="w-5 h-5 text-emerald-600" />
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Tỷ Lệ Bứt Tốc</div>
            <div className="text-lg font-black text-emerald-700">
              {current.ratio >= 1000 ? `x${current.ratio.toLocaleString()}` : `x${current.ratio}`}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Slider Controller */}
      <div className="relative z-10 my-6 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Chọn Quy Mô Dữ Liệu (n):</span>
          </label>
          <span className="font-mono text-xs px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-bold">
            {current.label}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {benchmarks.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSliderVal(idx)}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-200 border flex flex-col items-center gap-1 ${
                sliderVal === idx
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-sm scale-[1.02]"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className="font-mono font-bold">n = {item.n.toLocaleString()}</span>
              <span className={`text-[10px] ${sliderVal === idx ? "text-emerald-100" : "text-slate-500"}`}>
                log&#8322;n &approx; {item.logN}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 4-Row Benchmark Race Showcase */}
      <div className="relative z-10 space-y-3.5">
        {benchmarks.map((row, idx) => {
          const isSelected = sliderVal === idx;
          return (
            <div
              key={idx}
              onClick={() => setSliderVal(idx)}
              className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                isSelected
                  ? "bg-white border-emerald-400 shadow-md ring-2 ring-emerald-400/20"
                  : "bg-white/80 border-emerald-100 hover:bg-white hover:border-emerald-200"
              }`}
            >
              {/* Row Header */}
              <div className="flex flex-wrap justify-between items-center gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-slate-800">
                    Dữ liệu n = {row.n.toLocaleString()}
                  </span>
                  {isSelected && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                      Đang xem
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-rose-700 font-mono font-bold">O(n) = {row.n.toLocaleString()}</span>
                  <span className="text-slate-400">vs</span>
                  <span className="text-emerald-700 font-mono font-bold">O(log n) &approx; {row.logN}</span>
                  <span className="px-2 py-0.5 rounded bg-amber-50 font-mono font-bold text-amber-800 border border-amber-200">
                    Nhanh gấp x{row.ratio >= 1000 ? row.ratio.toLocaleString() : row.ratio}
                  </span>
                </div>
              </div>

              {/* Bar 1: O(n) Red Bar */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1 text-slate-600">
                    <span className="font-medium flex items-center gap-1.5 text-rose-700">
                      <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                      Mảng thường / Thao tác tuyến tính O(n)
                    </span>
                    <span className="font-mono text-rose-700 font-bold">{row.n.toLocaleString()} phép tính</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-bold text-white ${
                        row.isHuge
                          ? "bg-gradient-to-r from-rose-600 to-red-600 shadow-sm"
                          : "bg-gradient-to-r from-rose-500 to-orange-500"
                      }`}
                      style={{ width: calcLinearWidth(row) }}
                    >
                      {row.isHuge && "TRÀN KHUNG HỆ THỐNG (1,000,000) ⚠️"}
                    </div>
                  </div>
                </div>

                {/* Bar 2: O(log n) Green Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1 text-slate-600">
                    <span className="font-medium flex items-center gap-1.5 text-emerald-800">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Cây BST cân bằng O(log n)
                    </span>
                    <span className="font-mono text-emerald-700 font-bold">chỉ ~{row.logN} phép so sánh ⚡</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm flex items-center px-2 text-[9px] font-bold text-white"
                      style={{ width: calcLogWidth(row) }}
                    >
                      {row.logN}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row Comment */}
              <div className="mt-3 text-xs text-slate-600 flex items-center gap-1.5 pt-2 border-t border-slate-100">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{row.comment}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Callout */}
      <div className="relative z-10 mt-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 mt-0.5 shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">
              &quot;Lời Hứa Hẹn&quot; Cốt Lõi Của Cây BST (BST Promise)
            </h4>
            <p className="text-xs md:text-sm text-slate-700 mt-1 leading-relaxed">
              Hàm <span className="font-mono text-emerald-800 font-bold">O(log n)</span> tăng trưởng <span className="text-amber-800 font-bold">cực kỳ chậm</span> so với <span className="font-mono text-rose-700 font-bold">O(n)</span>.
              Khi lượng dữ liệu bùng nổ lên đến <strong>hàng triệu</strong> hay <strong>hàng tỷ</strong> phần tử, thuật toán <span className="font-mono text-rose-700 font-bold">O(n)</span> sẽ gây đơ nghẽn hệ thống (cần 1,000,000 bước), trong khi cây BST có chiều cao thấp (cân bằng) chỉ mất đúng <strong>~20 phép so sánh</strong> để tìm thấy bất kỳ ai!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
