"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Cpu,
  Layers,
  Calculator
} from "lucide-react";

export default function QuadraticProbingStepVisualizer() {
  const [stepIndex, setStepIndex] = useState(2); // 0: before 38, 1: probe 1 (slot 4), 2: probe 2 (slot 0)

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Mục 4.3 — Bước Nhảy Bậc Hai &amp; Định Lý &alpha; &lt; 0.5
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Quadratic Probing: Dò Bước Nhảy Bậc Hai &amp; Thứ Cấp Clustering
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát chuỗi bước nhảy $(+1^2, +2^2, +3^2, \dots)$, trace giáo trình chèn 3 &amp; 38 và định lý bảo đảm tìm thấy ô trống
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
          Quadratic Probing
        </div>
      </div>

      {/* Interactive Step-by-Step Trace */}
      <div className="bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/40 text-slate-800 rounded-2xl p-5 border-2 border-purple-200 shadow-sm mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-100">
          <div>
            <span className="text-xs font-mono font-bold text-purple-950 block uppercase">
              VÍ DỤ GIÁO TRÌNH: CHÈN 3 VÀ 38 VÀO BẢNG m = 7 (k mod 7)
            </span>
            <span className="text-xs text-slate-500 font-sans">
              Probe sequence: <code>(hash(key) + i&sup2;) mod 7</code>
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setStepIndex(0)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer shadow-2xs ${
                stepIndex === 0 ? "bg-purple-600 text-white font-bold shadow-xs" : "bg-white text-purple-950 border border-purple-200 hover:bg-purple-50"
              }`}
            >
              1. Chèn 3
            </button>
            <button
              onClick={() => setStepIndex(1)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer shadow-2xs ${
                stepIndex === 1 ? "bg-purple-600 text-white font-bold shadow-xs" : "bg-white text-purple-950 border border-purple-200 hover:bg-purple-50"
              }`}
            >
              2. Probe 1 (i=1)
            </button>
            <button
              onClick={() => setStepIndex(2)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer shadow-2xs ${
                stepIndex === 2 ? "bg-emerald-600 text-white font-bold shadow-xs" : "bg-white text-emerald-950 border border-emerald-300 hover:bg-emerald-50"
              }`}
            >
              3. Probe 2 (i=2 &rarr; Vào slot 0 ✓)
            </button>
          </div>
        </div>

        {/* Visual Slots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 font-mono text-xs">
          {[
            { slot: 0, val: stepIndex === 2 ? 38 : null, label: stepIndex === 2 ? "38 (Probe 2)" : "Empty" },
            { slot: 1, val: null, label: "Empty" },
            { slot: 2, val: null, label: "Empty" },
            { slot: 3, val: 3, label: "3 (Gốc)" },
            { slot: 4, val: 18, label: "18 (Đã có sẵn)" },
            { slot: 5, val: null, label: "Empty" },
            { slot: 6, val: null, label: "Empty" }
          ].map((item) => (
            <div
              key={item.slot}
              className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 ${
                item.slot === 0 && stepIndex === 2
                  ? "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-200 shadow-sm animate-fadeIn"
                  : item.slot === 4 && stepIndex === 1
                  ? "bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-200 animate-fadeIn"
                  : item.val !== null
                  ? "bg-white border-purple-300 text-slate-900 shadow-xs"
                  : "bg-slate-50/80 border-slate-200 text-slate-400"
              }`}
            >
              <span className="text-[10px] text-slate-500 font-bold">Slot [{item.slot}]</span>
              <span className="text-base font-black">{item.val !== null ? item.val : "null"}</span>
              <span className="text-[9px] font-semibold opacity-75">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Calculation Step Box */}
        <div className="p-3.5 bg-white rounded-xl border border-purple-200 text-xs font-mono space-y-1 shadow-2xs text-slate-800">
          {stepIndex === 0 && (
            <p className="text-slate-800">
              • <strong>Insert 3:</strong> <code>3 mod 7 = 3</code> &rarr; Chèn trực tiếp vào Slot [3] trong $O(1)$.
            </p>
          )}
          {stepIndex === 1 && (
            <p className="text-rose-900">
              • <strong>Insert 38:</strong> <code>38 mod 7 = 3</code> (Collision với 3!).<br/>
              &nbsp;&nbsp;&rarr; <strong>Probe 1 (i=1):</strong> <code>(3 + 1&sup2;) mod 7 = (3 + 1) mod 7 = 4</code> (Slot [4] đã có 18 chiếm giữ &rarr; Va chạm tiếp!).
            </p>
          )}
          {stepIndex === 2 && (
            <p className="text-emerald-900 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                • <strong>Probe 2 (i=2):</strong> <code>(3 + 2&sup2;) mod 7 = (3 + 4) mod 7 = 0</code> &rarr; Slot [0] đang TRỐNG &rarr; Đặt 38 vào Slot [0] thành công!
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Theorem & Secondary Clustering Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-xs font-sans">
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 space-y-2 text-emerald-950">
          <div className="flex items-center gap-2 font-bold font-mono text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            ĐỊNH LÝ (THEOREM) CỦA QUADRATIC PROBING
          </div>
          <p className="leading-relaxed text-slate-800">
            Nếu hệ số tải <strong>&alpha; &lt; 0.5</strong> (tức hash table chưa đầy quá nửa) và <strong>m là số nguyên tố</strong>, thì thuật toán <strong>LUÔN LUÔN TÌM ĐƯỢC 1 SLOT TRỐNG</strong> để chèn và không bao giờ bị rơi vào vòng lặp vô hạn!
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 space-y-2 text-purple-950">
          <div className="flex items-center gap-2 font-bold font-mono text-purple-900">
            <Layers className="w-4 h-4 text-purple-600" />
            SECONDARY CLUSTERING (DỒN CỤM THỨ CẤP)
          </div>
          <p className="leading-relaxed text-slate-700">
            Nếu 2 key khác nhau có cùng vị trí băm ban đầu $h(k_1) = h(k_2)$, chuỗi probe sequence của chúng sẽ <strong>giống hệt nhau</strong>. Tuy nhiên, hiện tượng này <strong>nhẹ hơn rất nhiều</strong> so với Primary Clustering của Linear Probing.
          </p>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-purple-50/80 border-2 border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-950">
        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 4.3):</strong><br/>
          • <strong>Quadratic probing:</strong> Bước nhảy bậc hai $1^2, 2^2, 3^2, \dots$ thay vì bước nhảy $+1$ tuyến tính.<br/>
          • <strong>Định lý:</strong> Khi $\alpha &lt; 0.5$ và $m$ là số nguyên tố &rarr; luôn tìm được slot trống.<br/>
          • <strong>Nhược điểm:</strong> Bị <strong>Secondary clustering</strong> (nhẹ hơn Primary clustering).
        </div>
      </div>
    </div>
  );
}
