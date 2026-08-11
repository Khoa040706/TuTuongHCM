"use client";
import React, { useState } from "react";
import { Plus, Minus, X, CheckCircle2, RefreshCw, ShieldAlert, ArrowRight } from "lucide-react";

export default function FractionAdtSandbox() {
  const [n1, setN1] = useState(2);
  const [d1, setD1] = useState(4);
  const [n2, setN2] = useState(2);
  const [d2, setD2] = useState(3);
  const [op, setOp] = useState("add");
  const [gcdDemoNum, setGcdDemoNum] = useState(24);
  const [gcdDemoDenom, setGcdDemoDenom] = useState(18);

  // GCD helper
  const gcd = (a, b) => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y > 0) {
      let rem = x % y;
      x = y;
      y = rem;
    }
    return x || 1;
  };

  // Euclidean steps for GCD demo
  const getGcdSteps = (a, b) => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    let steps = [];
    while (y > 0) {
      let rem = x % y;
      steps.push({ a: x, b: y, rem: rem });
      x = y;
      y = rem;
    }
    return { gcd: x, steps };
  };

  const gcdStepsResult = getGcdSteps(gcdDemoNum, gcdDemoDenom);

  // Calculation logic
  let resN = 0;
  let resD = 1;

  if (op === "add") {
    resN = n1 * d2 + n2 * d1;
    resD = d1 * d2;
  } else if (op === "minus") {
    resN = n1 * d2 - n2 * d1;
    resD = d1 * d2;
  } else if (op === "times") {
    resN = n1 * n2;
    resD = d1 * d2;
  }

  const common = gcd(resN, resD);
  const simpN = resN / common;
  const simpD = resD / common;

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              VÍ DỤ 4.1 & 4.2
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Fraction ADT Calculator & Euclidean GCD Sandbox
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Máy tính ADT Phân số hỗ trợ các phép toán <code>add</code>, <code>minus</code>, <code>times</code>, <code>simplify</code> và mô phỏng từng bước thuật toán Euclid.
          </p>
        </div>
      </div>

      {/* TOP: IMMUTABLE VS MUTABLE COMPARISON CARD */}
      <div className="mb-6 p-4 rounded-xl bg-purple-50/60 border border-purple-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-bold text-purple-950 font-mono text-sm block">
              💡 Điểm khác biệt quan trọng: Immutable Object Return
            </span>
            <p className="text-slate-700 leading-relaxed">
              • <b>Complex ADT:</b> Các phương thức <code>add()</code>, <code>minus()</code> trực tiếp thay đổi <b><code>this</code></b> (Mutable).<br/>
              • <b>Fraction ADT (FractionI):</b> Các phép toán <b>trả về một đối tượng <code>FractionI</code> mới</b> (Immutable), giữ nguyên <code>this</code> gốc!
            </p>
          </div>
        </div>
      </div>

      {/* CALCULATOR INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* INPUT FRACTIONS & OPERATOR */}
        <div className="lg:col-span-2 bg-purple-50/40 border border-purple-100 rounded-xl p-5">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-4 font-mono">
            1. Mô phỏng Phép toán Phân số (FractionI Operations)
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Fraction 1 */}
            <div className="bg-white p-4 rounded-xl border border-purple-200 flex flex-col items-center gap-2 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500">Phân số #1 (f1)</span>
              <input
                type="number"
                value={n1}
                onChange={(e) => setN1(parseInt(e.target.value) || 0)}
                className="w-16 text-center font-mono font-bold text-sm bg-purple-50 border border-purple-200 rounded px-2 py-1 text-purple-700"
              />
              <div className="w-full h-0.5 bg-purple-200"></div>
              <input
                type="number"
                value={d1}
                onChange={(e) => setD1(parseInt(e.target.value) || 1)}
                className="w-16 text-center font-mono font-bold text-sm bg-purple-50 border border-purple-200 rounded px-2 py-1 text-purple-700"
              />
            </div>

            {/* Operator Buttons */}
            <div className="flex flex-row sm:flex-col gap-2">
              <button
                onClick={() => setOp("add")}
                className={`p-2 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${
                  op === "add" ? "bg-purple-600 text-white shadow-sm" : "bg-white border border-purple-200 text-slate-600 hover:bg-purple-50"
                }`}
              >
                <Plus className="w-3.5 h-3.5" /> add()
              </button>
              <button
                onClick={() => setOp("minus")}
                className={`p-2 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${
                  op === "minus" ? "bg-purple-600 text-white shadow-sm" : "bg-white border border-purple-200 text-slate-600 hover:bg-purple-50"
                }`}
              >
                <Minus className="w-3.5 h-3.5" /> minus()
              </button>
              <button
                onClick={() => setOp("times")}
                className={`p-2 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${
                  op === "times" ? "bg-purple-600 text-white shadow-sm" : "bg-white border border-purple-200 text-slate-600 hover:bg-purple-50"
                }`}
              >
                <X className="w-3.5 h-3.5" /> times()
              </button>
            </div>

            {/* Fraction 2 */}
            <div className="bg-white p-4 rounded-xl border border-purple-200 flex flex-col items-center gap-2 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500">Phân số #2 (f2)</span>
              <input
                type="number"
                value={n2}
                onChange={(e) => setN2(parseInt(e.target.value) || 0)}
                className="w-16 text-center font-mono font-bold text-sm bg-purple-50 border border-purple-200 rounded px-2 py-1 text-indigo-700"
              />
              <div className="w-full h-0.5 bg-purple-200"></div>
              <input
                type="number"
                value={d2}
                onChange={(e) => setD2(parseInt(e.target.value) || 1)}
                className="w-16 text-center font-mono font-bold text-sm bg-purple-50 border border-purple-200 rounded px-2 py-1 text-indigo-700"
              />
            </div>
          </div>

          {/* RESULT PANEL */}
          <div className="bg-white p-4 rounded-xl border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs shadow-sm">
            <div>
              <span className="text-slate-500 block text-[10px]">Kết quả thô (chưa rút gọn):</span>
              <span className="text-sm font-bold text-slate-800">{resN}/{resD}</span>
            </div>

            <div className="flex items-center gap-2 text-purple-700">
              <RefreshCw className="w-4 h-4 animate-spin text-purple-600" />
              <span>Chạy simplify() (GCD = {common})</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-purple-900 block font-bold">KẾT QUẢ TỐI GIẢN (NEW FRACTION):</span>
                <span className="text-base font-bold text-purple-700">{simpN}/{simpD}</span>
              </div>
            </div>
          </div>
        </div>

        {/* EUCLIDEAN GCD ALGORITHM STEP-BY-STEP */}
        <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-5">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-3 font-mono">
            2. Trực quan thuật toán Euclid private static int gcd(a, b)
          </span>

          <div className="space-y-2 mb-4">
            <div className="flex gap-2 items-center text-xs">
              <span className="text-slate-500 text-[10px]">Thử nghiệm gcd(a, b):</span>
              <input
                type="number"
                value={gcdDemoNum}
                onChange={(e) => setGcdDemoNum(parseInt(e.target.value) || 1)}
                className="w-14 font-mono bg-white border border-purple-200 rounded px-1.5 py-0.5 text-center text-purple-700 text-xs shadow-sm"
              />
              <span className="text-slate-500">và</span>
              <input
                type="number"
                value={gcdDemoDenom}
                onChange={(e) => setGcdDemoDenom(parseInt(e.target.value) || 1)}
                className="w-14 font-mono bg-white border border-purple-200 rounded px-1.5 py-0.5 text-center text-indigo-700 text-xs shadow-sm"
              />
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-purple-100 space-y-2 font-mono text-[11px] shadow-sm">
            {gcdStepsResult.steps.map((step, idx) => (
              <div key={idx} className="flex justify-between items-center text-slate-700 border-b border-purple-50 pb-1">
                <span>Bước {idx + 1}: {step.a} % {step.b}</span>
                <span className="text-purple-700 font-bold">dư {step.rem}</span>
              </div>
            ))}
            <div className="pt-1 text-purple-900 font-bold flex justify-between">
              <span>GCD Trả về:</span>
              <span className="text-purple-700">{gcdStepsResult.gcd}</span>
            </div>
          </div>

          <div className="mt-3 p-2 bg-white rounded border border-purple-100 text-[10px] text-slate-500 leading-relaxed shadow-sm">
            * <code>gcd()</code> là <b>private method</b> ẩn trong class, client không thể gọi trực tiếp.
          </div>
        </div>
      </div>
    </div>
  );
}
