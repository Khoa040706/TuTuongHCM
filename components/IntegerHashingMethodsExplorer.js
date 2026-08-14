"use client";

import React, { useState } from "react";
import {
  Calculator,
  Binary,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Divide,
  Percent
} from "lucide-react";

export default function IntegerHashingMethodsExplorer() {
  const [activeMethod, setActiveMethod] = useState("division"); // "division" or "multiplication"

  // Division method state
  const [divKey, setDivKey] = useState(35);
  const [divM, setDivM] = useState(16); // 16 (2^4), 100 (10^2), or 17 (Prime)

  // Multiplication method state
  const [multKey, setMultKey] = useState(123456);
  const [multM, setMultM] = useState(1000);
  const GOLDEN_A = 0.6180339887; // (sqrt(5) - 1) / 2

  // Calculation for Multiplication
  const step1 = multKey * GOLDEN_A;
  const step2 = step1 - Math.floor(step1); // Fractional part
  const step3 = Math.floor(multM * step2);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 3.4 &amp; 3.5 — Các Phương Pháp Hashing Số Nguyên
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Division Method (Phép Mod) &amp; Multiplication Method (Tỉ Lệ Vàng)
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát 2 phương pháp băm số nguyên kinh điển và bí quyết chọn kích thước bảng $m$ là số nguyên tố
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Calculator className="w-3.5 h-3.5 text-teal-600" />
          Integer Hashing Methods
        </div>
      </div>

      {/* Method Switcher */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveMethod("division")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 ${
            activeMethod === "division"
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          <Percent className="w-3.5 h-3.5" />
          1. Division Method (k mod m) &amp; Bí Quyết Chọn m
        </button>
        <button
          onClick={() => setActiveMethod("multiplication")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 ${
            activeMethod === "multiplication"
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          <Binary className="w-3.5 h-3.5" />
          2. Multiplication Method (Knuth A &asymp; 0.618033)
        </button>
      </div>

      {/* Method 1: Division Method */}
      {activeMethod === "division" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          <div className="bg-gradient-to-br from-teal-50/70 via-white to-slate-50 text-slate-800 rounded-2xl p-5 border-2 border-teal-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-teal-100 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-teal-900 block uppercase">
                  CÔNG THỨC DIVISION METHOD: h(k) = k mod m
                </span>
                <span className="text-xs text-slate-500 font-sans">
                  Phương pháp phổ biến nhất trong thực tế
                </span>
              </div>

              {/* M Presets */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 font-bold">Chọn m:</span>
                <button
                  onClick={() => setDivM(16)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition ${
                    divM === 16
                      ? "bg-rose-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  m = 16 (2⁴ Lũy thừa 2)
                </button>
                <button
                  onClick={() => setDivM(100)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition ${
                    divM === 100
                      ? "bg-rose-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  m = 100 (10²)
                </button>
                <button
                  onClick={() => setDivM(17)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition ${
                    divM === 17
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-50 shadow-2xs"
                  }`}
                >
                  m = 17 (Số nguyên tố ⭐)
                </button>
              </div>
            </div>

            {/* Interactive calculation & binary bit explanation */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 flex-col sm:flex-row">
                <div className="flex-1">
                  <label className="text-[11px] text-slate-600 font-bold block mb-1">Nhập khóa số nguyên k:</label>
                  <input
                    type="number"
                    value={divKey}
                    onChange={(e) => setDivKey(parseInt(e.target.value, 10) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 shadow-xs"
                  />
                </div>
                <div className="flex items-center gap-1.5 pt-4">
                  {[19, 35, 51, 67].map((num) => (
                    <button
                      key={num}
                      onClick={() => setDivKey(num)}
                      className="px-2.5 py-1 rounded-lg bg-white text-teal-800 border border-teal-200 text-xs font-semibold hover:bg-teal-50 shadow-2xs"
                    >
                      k={num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Pill */}
              <div className="p-3.5 bg-white rounded-xl border-2 border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs text-slate-800">
                <div>
                  <span className="text-slate-500 block text-[11px] font-bold">PHÉP TÍNH TOÁN:</span>
                  <span className="text-sm font-bold text-slate-900">
                    {divKey} mod {divM} ={" "}
                    <span className="text-teal-700 font-black text-base">
                      {((divKey % divM) + divM) % divM}
                    </span>
                  </span>
                </div>

                <div className="text-right text-[11px] text-slate-600 font-semibold">
                  Binary của k: <code>{(divKey >>> 0).toString(2).padStart(8, "0")}₂</code>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Analysis on Why Prime m is Best */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 block font-mono">1. Nếu m = 2ⁿ (Lũy thừa 2) &rarr; TỆ ❌</span>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                <code>k mod 2ⁿ</code> thực chất chỉ cắt lấy đúng <strong>n bit cuối</strong> của $k$. Mọi số có cùng đuôi bit (như $19, 35, 51, 67$ đều có đuôi <code>0011₂</code>) sẽ đụng độ 100% vào cùng slot 3!
              </p>
            </div>

            <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 block font-mono">2. Nếu m = 10ⁿ (Lũy thừa 10) &rarr; TỆ ❌</span>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                <code>k mod 10ⁿ</code> chỉ lấy đúng <strong>n chữ số cuối</strong> của $k$. Nếu các khóa có quy luật số cuối giống nhau sẽ dồn cục va chạm hoàn toàn.
              </p>
            </div>

            <div className="p-3.5 bg-emerald-50 rounded-2xl border-2 border-emerald-300 space-y-1">
              <span className="font-bold text-emerald-950 block font-mono">3. Chọn m là SỐ NGUYÊN TỐ &rarr; TỐT NHẤT ⭐</span>
              <p className="text-slate-800 text-[11px] leading-relaxed">
                <strong>Rule of Thumb:</strong> Chọn số nguyên tố không gần lũy thừa của 2. Phép mod với số nguyên tố bắt buộc <strong>toàn bộ các bit</strong> của $k$ phải tham gia vào việc quyết định chỉ số slot!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Method 2: Multiplication Method */}
      {activeMethod === "multiplication" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-slate-50 text-slate-800 rounded-2xl p-5 border-2 border-amber-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-amber-100 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-950 block uppercase">
                  CÔNG THỨC MULTIPLICATION METHOD: hash(k) = &lfloor; m &times; (k&middot;A - &lfloor;k&middot;A&rfloor;) &rfloor;
                </span>
                <span className="text-xs text-slate-600 font-sans">
                  Hằng số Donald Knuth: A = (√5 - 1) / 2 &asymp; 0.6180339887 (Nghịch đảo Tỉ Lệ Vàng)
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold shadow-2xs">
                  A &asymp; 0.618033
                </span>
              </div>
            </div>

            {/* 3 Step Interactive Breakdown */}
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-600 font-bold block mb-1">Khóa số nguyên k:</label>
                  <input
                    type="number"
                    value={multKey}
                    onChange={(e) => setMultKey(parseInt(e.target.value, 10) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 shadow-xs"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-600 font-bold block mb-1">Kích thước bảng m:</label>
                  <input
                    type="number"
                    value={multM}
                    onChange={(e) => setMultM(parseInt(e.target.value, 10) || 1)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 shadow-xs"
                  />
                </div>
              </div>

              {/* 3 Step Cards */}
              <div className="space-y-2 pt-2">
                <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between shadow-2xs text-slate-800">
                  <span>Bước 1: Nhân k với A &rarr; {multKey} &times; {GOLDEN_A}</span>
                  <span className="text-amber-800 font-bold">{step1.toFixed(6)}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between shadow-2xs text-slate-800">
                  <span>Bước 2: Lấy phần thập phân (Fractional Part)</span>
                  <span className="text-teal-800 font-bold">{step2.toFixed(6)}</span>
                </div>
                <div className="p-3.5 bg-gradient-to-r from-amber-100 via-white to-amber-50 rounded-xl border-2 border-amber-300 flex items-center justify-between shadow-xs text-slate-900">
                  <span className="font-bold text-slate-900">Bước 3: Nhân với m={multM} và lấy sàn &lfloor; &rfloor;</span>
                  <span className="text-lg font-black text-amber-800">&rarr; Slot [{step3}]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-teal-50/80 border-2 border-teal-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-teal-950">
        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 3.4 - 3.5):</strong><br/>
          • <strong>Division method:</strong> <code>k mod m</code> là phổ biến nhất. Luôn chọn <code>m</code> là <strong>số nguyên tố</strong> để tránh đụng độ do quy luật bit.<br/>
          • <strong>Multiplication method:</strong> <code>hash(k) = &lfloor;m &times; (k&middot;A - &lfloor;k&middot;A&rfloor;)&rfloor;</code> với A = (√5 - 1)/2 &asymp; 0.618033 (nghịch đảo tỉ lệ vàng của Knuth) – ưu điểm là không phụ thuộc quá nhiều vào việc chọn <code>m</code>.
        </div>
      </div>
    </div>
  );
}
