"use client";

import React, { useState } from "react";
import { ShieldCheck, Calculator } from "lucide-react";

export default function AvlFibonacciProofVisualizer() {
  const [activeStep, setActiveStep] = useState(1);
  const [testHeight, setTestHeight] = useState(4);

  // Calculate Fibonacci-like minimum nodes for height h
  // n_0 = 1, n_1 = 2, n_2 = 4, n_3 = 7, n_4 = 12, n_5 = 20, n_6 = 33
  const getMinNodes = (h) => {
    if (h < 0) return 0;
    if (h === 0) return 1;
    if (h === 1) return 2;
    let a = 1; // n_0
    let b = 2; // n_1
    for (let i = 2; i <= h; i++) {
      const c = 1 + b + a;
      a = b;
      b = c;
    }
    return b;
  };

  const proofSteps = [
    {
      step: 1,
      title: "1. Thiết Lập Bài Toán & Định Nghĩa n_h",
      badge: "Định Nghĩa",
      formula: "n_h = 1 + n_{h-1} + n_{h-2}",
      desc: "Gọi n_h là số đỉnh TỐI THIỂU để tạo ra một cây AVL có chiều cao h. Để tốn ít đỉnh nhất mà vẫn có chiều cao h, một nhánh con phải có chiều cao tối đa (h-1) và nhánh con kia có chiều cao tối thiểu cho phép là (h-2).",
    },
    {
      step: 2,
      title: "2. Chuyển Đổi Thành Bất Đẳng Thức Cấp Số Nhân",
      badge: "Bất Đẳng Thức",
      formula: "n_h > 1 + 2·n_{h-2} > 2·n_{h-2}",
      desc: "Vì n_{h-1} > n_{h-2}, ta có thể chặn dưới: n_h = 1 + n_{h-1} + n_{h-2} > 2·n_{h-2}. Cứ mỗi lần giảm chiều cao đi 2 nấc, số đỉnh tối thiểu bị chia đôi.",
    },
    {
      step: 3,
      title: "3. Lặp h/2 Lần Về Base Case n_0 = 1",
      badge: "Quy Nạp",
      formula: "n_h > 2^{h/2} · n_0 = 2^{h/2}",
      desc: "Lặp lại quá trình giảm bậc h/2 lần (giả sử h chẵn) cho đến khi về base case n_0 = 1 đỉnh. Ta thu được bất đẳng thức hàm mũ: n_h > 2^{h/2}.",
    },
    {
      step: 4,
      title: "4. Lấy Logarit Cơ Số 2 Hai Vế",
      badge: "Lấy Logarithm",
      formula: "n ≥ n_h > 2^{h/2}  ⟹  log₂(n) > h/2",
      desc: "Vì cây thực tế có n đỉnh (n ≥ n_h), ta có n > 2^{h/2}. Lấy log₂ cả hai vế: log₂(n) > log₂(2^{h/2}) = h/2.",
    },
    {
      step: 5,
      title: "5. Kết Luận Chặn Trên: h < 2·log₂(n)",
      badge: "KẾT LUẬN Q.E.D",
      formula: "h < 2 · log₂(n)  ⟹  h = O(log n)",
      desc: "Nhân 2 sang vế trái: h < 2·log₂(n). Vậy chiều cao của mọi cây Height-balanced luôn bị chặn trên bởi O(log n) trong trường hợp xấu nhất!",
    },
  ];

  const current = proofSteps.find((p) => p.step === activeStep) || proofSteps[0];
  const minNodes = getMinNodes(testHeight);
  const theoreticalBound = (2 * Math.log2(minNodes)).toFixed(2);

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Chứng Minh Toán Học Chặt Chẽ (Mục 3.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Proof: Cây Height-Balanced Có h &lt; 2log&#8322;(n)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Minh họa từng bước chứng minh từ Slide 3.3 (&quot;Proof - Không cần sợ!&quot;) bằng công thức truy hồi Fibonacci Tree.
          </p>
        </div>

        {/* Claim Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Claim: h &lt; 2·log₂(n)</span>
        </div>
      </div>

      {/* 5 Steps Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
        {proofSteps.map((s) => {
          const isSel = activeStep === s.step;

          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                isSel
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className={`text-[10px] font-mono font-bold ${isSel ? "text-emerald-100" : "text-emerald-700"} uppercase`}>{s.badge}</div>
              <div className="text-xs font-bold font-sans mt-0.5 line-clamp-1">Bước 0{s.step}</div>
            </button>
          );
        })}
      </div>

      {/* Main Step Detail Card */}
      <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-4 mb-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base font-bold text-slate-900">{current.title}</h4>
          <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold font-mono bg-emerald-50 text-emerald-900 border border-emerald-200">
            {current.badge}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center">
          <div className="font-mono text-base md:text-lg font-extrabold text-emerald-950">
            {current.formula}
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">{current.desc}</p>
      </div>

      {/* Interactive Fibonacci Minimum Node Calculator (Footer) */}
      <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-600" />
            Kiểm Chứng Thực Tế Bằng Máy Tính Số Đỉnh Tối Thiểu n_h:
          </span>
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 text-[11px] font-semibold">Chiều cao h:</span>
            {[0, 1, 2, 3, 4, 5, 6].map((h) => (
              <button
                key={h}
                onClick={() => setTestHeight(h)}
                className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                  testHeight === h
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                h={h}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 font-semibold">
          <div>
            • Chiều cao h: <strong className="text-emerald-950 font-bold">{testHeight}</strong>
          </div>
          <div>
            • Số đỉnh tối thiểu n_h: <strong className="text-emerald-800 font-bold">{minNodes}</strong>
          </div>
          <div>
            • 2 &times; log&#8322;(n_h): <strong className="text-teal-800 font-bold">{theoreticalBound}</strong> ({theoreticalBound} &gt; {testHeight} ✅)
          </div>
        </div>
      </div>
    </div>
  );
}
