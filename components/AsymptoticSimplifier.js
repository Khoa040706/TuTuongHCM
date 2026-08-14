"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, RotateCcw, Filter, Flame } from "lucide-react";

export default function AsymptoticSimplifier() {
  const presets = [
    {
      id: "textbook",
      title: "Ví dụ Giáo Trình",
      fullFormula: "3n² + 2n + log n + 1/(4n)",
      terms: [
        { term: "3n²", isDominating: true, reason: "Bậc cao nhất (Leading term n²)" },
        { term: "+ 2n", isDominating: false, reason: "Bậc thấp hơn n², bị n² áp đảo khi n lớn" },
        { term: "+ log n", isDominating: false, reason: "Tăng rất chậm so với n²" },
        { term: "+ 1/(4n)", isDominating: false, reason: "Tiến về 0 khi n tiến ra vô cùng" }
      ],
      dominatingTerm: "3n²",
      leadingPart: "n²",
      coefficient: "3",
      bigO: "O(n²)"
    },
    {
      id: "cubic",
      title: "Đa thức Bậc 3",
      fullFormula: "5n³ + 100n² + 20n + 500",
      terms: [
        { term: "5n³", isDominating: true, reason: "Bậc cao nhất (n³)" },
        { term: "+ 100n²", isDominating: false, reason: "Dù hệ số 100 lớn nhưng bị n³ vượt xa khi n lớn" },
        { term: "+ 20n", isDominating: false, reason: "Bậc thấp hơn n³" },
        { term: "+ 500", isDominating: false, reason: "Hằng số cố định, không đổi theo n" }
      ],
      dominatingTerm: "5n³",
      leadingPart: "n³",
      coefficient: "5",
      bigO: "O(n³)"
    },
    {
      id: "linear",
      title: "Tuyến tính & Logarit",
      fullFormula: "100n + 50 log n",
      terms: [
        { term: "100n", isDominating: true, reason: "Bậc tuyến tính n lớn hơn log n" },
        { term: "+ 50 log n", isDominating: false, reason: "Tốc độ log n bị n tuyến tính áp đảo" }
      ],
      dominatingTerm: "100n",
      leadingPart: "n",
      coefficient: "100",
      bigO: "O(n)"
    },
    {
      id: "exponential",
      title: "Cấp số nhân & Đa thức",
      fullFormula: "2ⁿ + 1000n²",
      terms: [
        { term: "2ⁿ", isDominating: true, reason: "Tăng theo cấp số nhân (áp đảo mọi đa thức)" },
        { term: "+ 1000n²", isDominating: false, reason: "Đa thức bị hàm mũ 2ⁿ vượt qua ở n đủ lớn" }
      ],
      dominatingTerm: "2ⁿ",
      leadingPart: "2ⁿ",
      coefficient: "1",
      bigO: "O(2ⁿ)"
    }
  ];

  const [activePreset, setActivePreset] = useState(presets[0]);
  const [step, setStep] = useState(1); // 1: Full, 2: Strikethrough, 3: Final Big O

  const handleSelectPreset = (p) => {
    setActivePreset(p);
    setStep(1);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 3.4 – 3.5 — Phép Loại Trừ Số Hạng
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Xấp Xỉ &amp; Phân Tích Tiệm Cận (Asymptotic Simplifier)
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá 3 bước rút gọn từ công thức toán học đầy đủ về ký pháp tiệm cận Big-O
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto flex-wrap">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activePreset.id === p.id
                  ? "bg-white text-teal-800 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive 3-Step Animation Box */}
      <div className="bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/60 text-slate-800 rounded-3xl p-6 border border-teal-200 shadow-sm mb-6">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-3 border-b border-teal-200/80 mb-6">
          <span className="font-bold text-teal-950 uppercase">Tiến trình rút gọn tiệm cận (Asymptotic Reduction)</span>
          <span className="bg-teal-100 text-teal-800 border border-teal-300 px-2.5 py-0.5 rounded-full font-bold">
            Bước {step} / 3
          </span>
        </div>

        {/* Main Formula Stage */}
        <div className="min-h-[120px] flex flex-col items-center justify-center text-center py-3">
          {step === 1 && (
            <div className="space-y-2 animate-fadeIn">
              <span className="text-xs font-mono text-slate-500 block font-semibold">
                Bước 1: Công thức chi phí đầy đủ f(n)
              </span>
              <div className="text-xl md:text-3xl font-mono font-bold text-amber-900 bg-amber-50/90 px-5 py-2.5 rounded-2xl border border-amber-200 shadow-xs inline-block">
                f(n) = {activePreset.fullFormula}
              </div>
              <span className="text-xs text-slate-500 block mt-2">
                Quá nhiều số hạng phức tạp và chi tiết vụn vặt không cần thiết
              </span>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-mono text-slate-500 block font-semibold">
                Bước 2: Gạch bỏ các số hạng nhỏ ➔ Giữ lại Dominating / Leading Term
              </span>
              <div className="flex items-center justify-center gap-2 flex-wrap text-xl md:text-3xl font-mono font-bold">
                {activePreset.terms.map((t, idx) => (
                  <span
                    key={idx}
                    className={`transition-all duration-300 ${
                      t.isDominating
                        ? "text-emerald-950 scale-105 bg-emerald-100/90 px-4 py-1.5 rounded-2xl border-2 border-emerald-400 shadow-sm"
                        : "text-slate-400 line-through opacity-60"
                    }`}
                  >
                    {t.term}
                  </span>
                ))}
              </div>
              <span className="text-xs text-emerald-800 block font-mono font-bold">
                ✓ Dominating Term: <strong className="text-emerald-950 font-black">{activePreset.dominatingTerm}</strong>
              </span>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-mono text-slate-500 block font-semibold">
                Bước 3: Loại bỏ hệ số hằng số (coefficient) ➔ Đưa về Big-O Notation
              </span>
              <div className="flex items-center justify-center gap-4">
                <span className="text-xl md:text-2xl font-mono text-slate-400 line-through font-semibold">
                  {activePreset.dominatingTerm}
                </span>
                <ArrowRight className="w-6 h-6 text-teal-600 animate-pulse" />
                <span className="text-3xl md:text-5xl font-mono font-black text-white bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-2.5 rounded-2xl shadow-lg ring-4 ring-emerald-100">
                  {activePreset.bigO}
                </span>
              </div>
              <span className="text-xs text-slate-600 block">
                Hệ số {activePreset.coefficient} không ảnh hưởng đến cấp độ tăng trưởng khi n tiến ra vô cùng (n → ∞)
              </span>
            </div>
          )}
        </div>

        {/* Stepper Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-teal-200/80 mt-4">
          <button
            onClick={() => setStep((prev) => Math.max(1, prev - 1))}
            disabled={step === 1}
            className="px-4 py-1.5 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-40 text-xs font-mono font-bold text-slate-700 border border-slate-200 shadow-xs transition cursor-pointer"
          >
            Lùi bước
          </button>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`w-7 h-7 rounded-full font-mono text-xs font-bold transition cursor-pointer ${
                  step === s
                    ? "bg-teal-600 text-white font-black shadow-xs ring-2 ring-teal-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep((prev) => Math.min(3, prev + 1))}
            disabled={step === 3}
            className="px-4 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white text-xs font-mono font-bold transition cursor-pointer shadow-sm"
          >
            Bước tiếp theo
          </button>
        </div>
      </div>

      {/* Breakdown Explanation Table */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <h4 className="text-xs font-mono font-bold text-slate-700 uppercase mb-3 flex items-center gap-1.5">
          <Filter className="w-4 h-4 text-teal-600" />
          GIẢI THÍCH LÝ DO LOẠI TRỪ CÁC SỐ HẠNG:
        </h4>
        <div className="space-y-2">
          {activePreset.terms.map((t, idx) => (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border text-xs font-sans flex items-start justify-between gap-3 ${
                t.isDominating
                  ? "bg-emerald-50 border-emerald-200 text-emerald-950 font-bold"
                  : "bg-white border-slate-200 text-slate-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <code className="font-mono px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-900 font-bold">
                  {t.term}
                </code>
                <span>{t.reason}</span>
              </div>
              <span className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                t.isDominating ? "bg-emerald-200 text-emerald-800" : "bg-slate-100 text-slate-500"
              }`}>
                {t.isDominating ? "GIỮ LẠI" : "LOẠI BỎ"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Note */}
      <div className="mt-4 bg-teal-50/80 border border-teal-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-teal-950">
        <Sparkles className="w-5 h-5 text-teal-600 shrink-0" />
        <div>
          <strong>📌 Quy tắc cốt lõi cần nhớ:</strong> Phân tích tiệm cận (Asymptotic Analysis) chỉ tập trung vào <strong>khi n rất lớn</strong> ➔ Chỉ giữ lại <strong>Leading / Dominating Term</strong> (bậc cao nhất) và <strong>Bỏ qua toàn bộ hệ số (coefficient)</strong>.
        </div>
      </div>
    </div>
  );
}
