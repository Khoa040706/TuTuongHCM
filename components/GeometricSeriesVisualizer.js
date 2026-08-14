"use client";

import React, { useState } from "react";
import { Sigma, Sparkles, ArrowRight, CheckCircle2, Calculator, Layers, HelpCircle } from "lucide-react";

export default function GeometricSeriesVisualizer() {
  const presets = [
    {
      id: "third",
      label: "c = 1/3 (Ví dụ 5.2 Giáo Trình)",
      cVal: 1 / 3,
      cDisplay: "1/3",
      formulaDisplay: "1 + 1/3 + 1/9 + 1/27 + ...",
      limitFraction: "3/2",
      limitDecimal: 1.5,
      terms: [
        { label: "1.000", val: 1.0, frac: "1" },
        { label: "0.333", val: 1 / 3, frac: "1/3" },
        { label: "0.111", val: 1 / 9, frac: "1/9" },
        { label: "0.037", val: 1 / 27, frac: "1/27" },
        { label: "0.012", val: 1 / 81, frac: "1/81" },
        { label: "0.007", val: 1 / 243 + 1 / 729, frac: "..." }
      ],
      codeContext: "Áp dụng cho vòng lặp lồng i *= 3 ➔ f(n) = n * (3/2) = 1.5n ➔ O(n)"
    },
    {
      id: "half",
      label: "c = 1/2 (Cơ số 2 kinh điển)",
      cVal: 1 / 2,
      cDisplay: "1/2",
      formulaDisplay: "1 + 1/2 + 1/4 + 1/8 + ...",
      limitFraction: "2/1",
      limitDecimal: 2.0,
      terms: [
        { label: "1.000", val: 1.0, frac: "1" },
        { label: "0.500", val: 0.5, frac: "1/2" },
        { label: "0.250", val: 0.25, frac: "1/4" },
        { label: "0.125", val: 0.125, frac: "1/8" },
        { label: "0.063", val: 0.0625, frac: "1/16" },
        { label: "0.062", val: 0.0625, frac: "..." }
      ],
      codeContext: "Áp dụng khi mỗi bước giảm một nửa kích thước dữ liệu ➔ Tổng hội tụ về đúng 2"
    },
    {
      id: "fourth",
      label: "c = 1/4 (Cơ số 4)",
      cVal: 1 / 4,
      cDisplay: "1/4",
      formulaDisplay: "1 + 1/4 + 1/16 + 1/64 + ...",
      limitFraction: "4/3",
      limitDecimal: 1.333,
      terms: [
        { label: "1.000", val: 1.0, frac: "1" },
        { label: "0.250", val: 0.25, frac: "1/4" },
        { label: "0.063", val: 0.0625, frac: "1/16" },
        { label: "0.016", val: 0.0156, frac: "1/64" },
        { label: "0.004", val: 0.0039, frac: "1/256" },
        { label: "0.000", val: 0.001, frac: "..." }
      ],
      codeContext: "Hội tụ cực nhanh về 4/3 ≈ 1.333"
    }
  ];

  const [activePreset, setActivePreset] = useState(presets[0]);

  const colors = [
    "bg-indigo-600 text-white",
    "bg-teal-500 text-white",
    "bg-amber-500 text-white",
    "bg-rose-500 text-white",
    "bg-purple-500 text-white",
    "bg-slate-400 text-white"
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 7 — Công Thức Toán Học Bổ Trợ
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tổng Chuỗi Hình Học Vô Hạn (Infinite Geometric Series)
          </h3>
          <p className="text-xs text-slate-500">
            Công cụ toán học then chốt để chứng minh các thuật toán chia tỉ lệ có độ phức tạp tuyến tính <code>O(n)</code>
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto flex-wrap">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePreset(p)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activePreset.id === p.id
                  ? "bg-white text-teal-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Formula Card */}
      <div className="bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/60 text-slate-800 rounded-3xl p-5 border border-teal-200 shadow-sm mb-6">
        <div className="flex items-center justify-between pb-3 border-b border-teal-200/80 text-xs font-mono mb-4">
          <span className="text-teal-950 font-bold uppercase">Công thức chuỗi hình học tổng quát</span>
          <span className="text-teal-800 font-bold bg-teal-100 border border-teal-300 px-2.5 py-0.5 rounded-full">
            Điều kiện: |c| &lt; 1
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-500 font-semibold">Chuỗi tổng vô hạn hội tụ:</span>
            <div className="text-lg md:text-2xl font-mono font-black text-amber-900 bg-amber-50/90 px-4 py-2 rounded-2xl border border-amber-200 shadow-xs inline-block">
              1 + c + c² + c³ + ... = 1 / (1 - c)
            </div>
          </div>

          <div className="bg-white border border-teal-200 p-3.5 rounded-2xl shadow-xs flex items-center gap-4">
            <div>
              <span className="text-[11px] font-mono text-slate-500 font-semibold block">Với công bội c = {activePreset.cDisplay}:</span>
              <div className="text-xl font-mono font-black text-teal-800">
                Sum = 1 / (1 - {activePreset.cDisplay}) = {activePreset.limitFraction} = <strong className="text-emerald-700">{activePreset.limitDecimal}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Bar Breakdown */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 pb-2 border-b border-slate-200 mb-3">
          <span>TRỰC QUAN HÓA PHÂN RÃ HÌNH HỌC (TỔNG HỘI TỤ VỀ {activePreset.limitDecimal})</span>
          <span className="text-teal-700">100% = {activePreset.limitDecimal}</span>
        </div>

        {/* Stacked Percentage Bar */}
        <div className="w-full h-8 bg-slate-200 rounded-xl overflow-hidden flex shadow-inner mb-3">
          {activePreset.terms.map((term, idx) => {
            const widthPct = (term.val / activePreset.limitDecimal) * 100;
            return (
              <div
                key={idx}
                style={{ width: `${widthPct}%` }}
                className={`h-full ${colors[idx % colors.length]} flex items-center justify-center font-mono text-[10px] font-bold transition-all hover:opacity-90 cursor-pointer`}
                title={`Số hạng ${term.frac} = ${term.val.toFixed(3)} (${widthPct.toFixed(1)}%)`}
              >
                {widthPct > 8 ? term.frac : ""}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 flex-wrap text-xs font-mono text-slate-600">
          {activePreset.terms.slice(0, 5).map((term, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${colors[idx].split(" ")[0]}`} />
              <span>
                Term #{idx + 1} ({term.frac}) = <strong>{term.label}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Application to Algorithm Analysis */}
      <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div className="text-xs text-teal-950 space-y-1">
          <h4 className="font-bold text-teal-900 text-sm">
            💡 Ứng dụng thực tế trong phân tích thuật toán (Ví dụ 5.2):
          </h4>
          <p className="leading-relaxed font-mono text-[11px]">
            f(n) = n + n/3 + n/9 + n/27 + ... = n · (1 + 1/3 + 1/9 + 1/27 + ...) ≈ n · (3/2) = 1.5n ➔ <strong>O(n)</strong>.
          </p>
          <p className="leading-relaxed">
            Dù có rất nhiều bước lặp lồng nhau, nhưng vì chi phí ở mỗi bước giảm theo cấp số nhân (công bội $c = 1/3$), <strong>tổng chuỗi bị chặn bởi hằng số 1.5</strong> ➔ Thuật toán giữ nguyên độ phức tạp tuyến tính <strong>O(n)</strong> chứ không bị bùng nổ lên $O(n^2)$!
          </p>
        </div>
      </div>
    </div>
  );
}
