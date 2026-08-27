"use client";

import React, { useState } from "react";
import { KeyRound, ShieldCheck, CheckCircle2, ArrowRight, Layers, Sparkles, Filter } from "lucide-react";

export default function PrimeAttributeInspector() {
  const [selectedExample, setSelectedExample] = useState("ex1");

  const examples = {
    ex1: {
      schema: "U = { A, B, C, D, E }",
      keys: "K₁ = AB, K₂ = CB",
      prime: ["A", "B", "C"],
      nonPrime: ["D", "E"],
      note: "A, B thuộc K₁; B, C thuộc K₂ ⇒ Hợp của các khóa là {A, B, C}. Các thuộc tính còn lại {D, E} là không khóa."
    },
    ex2: {
      schema: "U = { soDH, maHH, ngayDH, maKH, soluongdat }",
      keys: "K = { soDH, maHH }",
      prime: ["soDH", "maHH"],
      nonPrime: ["ngayDH", "maKH", "soluongdat"],
      note: "Khóa gồm 2 thuộc tính {soDH, maHH}. Ba thuộc tính còn lại là thuộc tính không khóa."
    },
    ex3: {
      schema: "U = { C, S, Z }",
      keys: "K₁ = CS, K₂ = SZ",
      prime: ["C", "S", "Z"],
      nonPrime: [],
      note: "Mọi thuộc tính đều thuộc ít nhất một khóa dự tuyển ⇒ Tập thuộc tính không khóa là ∅ ⇒ Luôn thỏa 2NF!"
    }
  };

  const curr = examples[selectedExample];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <KeyRound className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">PrimeAttributeInspector</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Thuộc Tính Khóa &amp; Không Khóa
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phân loại Thuộc tính Khóa (Prime Attribute) vs Thuộc tính Không Khóa (Non-prime Attribute) dựa trên các khóa dự tuyển
            </p>
          </div>
        </div>

        {/* Example Switcher */}
        <div className="flex rounded-xl bg-purple-100/80 p-1 border border-purple-200">
          <button
            onClick={() => setSelectedExample("ex1")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedExample === "ex1" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            Ví Dụ 1 (U = ABCDE)
          </button>
          <button
            onClick={() => setSelectedExample("ex2")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedExample === "ex2" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            Ví Dụ 2 (Đặt Hàng)
          </button>
          <button
            onClick={() => setSelectedExample("ex3")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedExample === "ex3" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            Ví Dụ 3 (R(CSZ))
          </button>
        </div>
      </div>

      {/* Definitions Row */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 font-mono text-xs">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 space-y-1">
          <span className="font-bold text-emerald-950 block font-sans text-xs">🔑 THUỘC TÍNH KHÓA (PRIME ATTRIBUTE):</span>
          <p className="text-gray-700 font-sans text-[11px] leading-relaxed">
            Là thuộc tính là thành phần của <strong>ít nhất một khóa dự tuyển (candidate key)</strong> trong quan hệ R.
          </p>
        </div>

        <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3.5 space-y-1">
          <span className="font-bold text-rose-950 block font-sans text-xs">🛡️ THUỘC TÍNH KHÔNG KHÓA (NON-PRIME):</span>
          <p className="text-gray-700 font-sans text-[11px] leading-relaxed">
            Là thuộc tính <strong>không tham gia vào bất kỳ khóa nào</strong> trong số tất cả các khóa của quan hệ R.
          </p>
        </div>
      </div>

      {/* Selected Example Breakdown */}
      <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="text-purple-950 font-bold">
          Lược đồ: {curr.schema} &bull; Các khóa dự tuyển: {curr.keys}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 pt-1">
          <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
            <span className="text-emerald-900 font-bold block text-[11px] uppercase">Tập thuộc tính khóa (Prime):</span>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {curr.prime.length > 0 ? (
                curr.prime.map((a, i) => (
                  <span key={i} className="font-bold text-emerald-900 bg-white px-2.5 py-0.5 rounded border border-emerald-300">
                    {a}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 font-sans">∅</span>
              )}
            </div>
          </div>

          <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
            <span className="text-rose-900 font-bold block text-[11px] uppercase">Tập thuộc tính không khóa (Non-prime):</span>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {curr.nonPrime.length > 0 ? (
                curr.nonPrime.map((a, i) => (
                  <span key={i} className="font-bold text-rose-900 bg-white px-2.5 py-0.5 rounded border border-rose-300">
                    {a}
                  </span>
                ))
              ) : (
                <span className="text-emerald-800 font-sans font-bold">∅ (Không có thuộc tính không khóa!)</span>
              )}
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-700 font-sans font-medium bg-gray-50 p-2.5 rounded border border-gray-200 leading-relaxed">
          <strong>💡 Phân tích: </strong>{curr.note}
        </p>
      </div>
    </div>
  );
}
