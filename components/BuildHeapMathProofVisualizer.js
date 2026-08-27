"use client";

import React, { useState } from "react";
import { Sparkles, Calculator } from "lucide-react";

export default function BuildHeapMathProofVisualizer() {
  const [selectedTerms, setSelectedTerms] = useState(6);

  // Series terms: h / 2^h for h = 0..6
  const terms = [
    { h: 0, val: 0, text: "0 / 2⁰ = 0" },
    { h: 1, val: 0.5, text: "1 / 2¹ = 0.5" },
    { h: 2, val: 0.5, text: "2 / 2² = 0.5" },
    { h: 3, val: 0.375, text: "3 / 2³ = 0.375" },
    { h: 4, val: 0.25, text: "4 / 2⁴ = 0.25" },
    { h: 5, val: 0.15625, text: "5 / 2⁵ = 0.15625" },
    { h: 6, val: 0.09375, text: "6 / 2⁶ = 0.09375" },
  ];

  const currentSum = terms.slice(0, selectedTerms + 1).reduce((acc, t) => acc + t.val, 0);

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-teal-700" />
            <span>Chứng Minh Toán Học (Mục 9.4)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
            Tại Sao BuildHeap Chỉ Tốn O(n)? &mdash; Tổng Chuỗi Hội Tụ &lt; 2
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Nút ở tầng thấp (chiều cao bé) chiếm số lượng áp đảo; nút ở tầng cao (chiều cao lớn) chỉ có vài nút.
          </p>
        </div>

        {/* Conclusion Badge */}
        <div className="px-4 py-2 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-mono font-extrabold text-sm self-start md:self-auto shadow-sm">
          Total Cost = O(2n) = O(n)
        </div>
      </div>

      {/* Proof Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Mathematical Formulation (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-teal-100 p-5 space-y-4 shadow-sm">
          <span className="text-xs font-mono font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <Sparkles className="w-4 h-4 text-teal-700" />
            Công Thức Tính Tổng Chi Phí (Slide 9.4):
          </span>

          <div className="space-y-3 text-xs font-mono text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 text-[10px] block font-semibold">1. Chi phí tại mỗi tầng chiều cao h:</span>
              <div className="text-slate-900 font-bold">
                Số node ở height h &approx; ⌈n / 2^(h+1)⌉ • Chi phí ShiftDown = O(h)
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-slate-500 text-[10px] block font-semibold">2. Tổng chi phí toàn cây:</span>
              <div className="text-amber-950 font-bold">
                &Sigma; (h = 0 &rarr; ⌊lg n⌋) [n / 2^(h+1)] &times; O(h) = O( n &times; &Sigma; (h / 2^h) )
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-emerald-950 shadow-sm">
              <span className="text-emerald-900 text-[10px] font-bold block">3. Áp dụng công thức chuỗi hình học:</span>
              <div className="font-extrabold text-sm text-emerald-950">
                &Sigma; (k &times; x^k) = x / (1 - x)² &mdash; với x = 1/2 &rArr; Kết quả = 2
              </div>
              <div className="text-xs font-sans text-slate-700 pt-1">
                &rArr; <strong>Tổng chi phí = O(2n) = O(n)</strong> (Tuyến tính hoàn hảo!).
              </div>
            </div>
          </div>
        </div>

        {/* Series Terms Interactive Calculator (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-teal-100 p-5 space-y-4 text-xs shadow-sm">
          <span className="font-bold uppercase tracking-wider text-teal-950 font-mono flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-teal-700" />
            Minh Họa Bằng Dãy Số Thực Tế:
          </span>

          <div className="space-y-1.5 font-mono text-[11px]">
            {terms.map((t, idx) => (
              <div
                key={t.h}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all shadow-sm ${
                  idx <= selectedTerms
                    ? "bg-teal-50/70 border-teal-200 text-teal-950"
                    : "bg-slate-50 border-slate-200 text-slate-400 opacity-60"
                }`}
              >
                <span>h = {t.h} : {t.text}</span>
                <span className="font-bold text-teal-900">+{t.val}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between font-mono">
            <span className="text-slate-600 text-[11px] font-semibold">Tổng các số hạng:</span>
            <strong className="text-base font-extrabold text-emerald-800">
              {currentSum.toFixed(5)} &lt; 2
            </strong>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-[11px] text-amber-950 font-sans shadow-sm">
            ⚠️ <strong>Điểm thi then chốt:</strong> Nhớ rõ <code>BuildHeap</code> chỉ tốn <strong>O(n)</strong> chứ không phải <strong>O(n log n)</strong> như nhiều người lầm tưởng!
          </div>
        </div>
      </div>
    </div>
  );
}
