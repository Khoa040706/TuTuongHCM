"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";

export default function InfixPrefixPostfixConverter() {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      infix: "2 + 3 * 4",
      postfix: "2 3 4 * +",
      prefix: "+ 2 * 3 4",
      explanation: "Phép nhân * có độ ưu tiên cao hơn +, thực hiện 3 * 4 = 12 trước, sau đó 2 + 12 = 14.",
      hasParens: false
    },
    {
      infix: "(2 + 3) * 4",
      postfix: "2 3 + 4 *",
      prefix: "* + 2 3 4",
      explanation: "Dấu ngoặc () thay đổi thứ tự ưu tiên: cộng 2 + 3 = 5 trước, sau đó nhân 5 * 4 = 20.",
      hasParens: true
    },
    {
      infix: "a - (b + c * d) / e",
      postfix: "a b c d * + e / -",
      prefix: "- a / + b * c d e",
      explanation: "Ví dụ kinh điển trong giáo trình: c*d trước ➔ b + (c*d) ➔ / e ➔ a - (...).",
      hasParens: true
    }
  ];

  const current = examples[selectedExample];

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-100 text-cyan-800 border border-cyan-200 font-semibold text-xs tracking-wider uppercase mb-1.5">
            <ArrowLeftRight className="w-3.5 h-3.5 text-cyan-700" />
            <span>6.1 & 6.2 Biểu thức số học (Arithmetic Expressions)</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">So sánh Infix, Prefix và Postfix</h3>
        </div>

        {/* Example Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Chọn ví dụ mẫu:</span>
          <select
            value={selectedExample}
            onChange={(e) => setSelectedExample(Number(e.target.value))}
            className="bg-slate-50 border border-slate-300 text-slate-800 font-mono rounded-lg p-2 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer shadow-sm"
          >
            {examples.map((ex, idx) => (
              <option key={idx} value={idx}>
                {ex.infix}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3 Forms Display Grid: Infix, Postfix, Prefix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* INFIX CARD */}
        <div className="bg-indigo-50/70 border border-indigo-200 text-indigo-900 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Infix (Trung tố)</span>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono font-medium">
                Con người dùng
              </span>
            </div>
            <div className="text-xs text-indigo-700/80 mb-3">
              Cấu trúc: <code className="text-indigo-950 font-mono font-semibold bg-indigo-100/60 px-1 py-0.5 rounded">operand1 operator operand2</code>
            </div>
            <div className="bg-white/90 rounded-lg p-3 font-mono text-sm font-bold text-indigo-950 border border-indigo-200/80 text-center mb-3 shadow-sm">
              {current.infix}
            </div>
          </div>
          <div className="text-[11px] text-indigo-800/90 border-t border-indigo-200/60 pt-2">
            ⚠️ <strong className="text-indigo-950">Mơ hồ (ambiguous):</strong> Cần dấu ngoặc <code className="text-indigo-950 font-mono font-semibold">()</code> hoặc quy tắc ưu tiên để giải nghĩa.
          </div>
        </div>

        {/* POSTFIX CARD */}
        <div className="bg-teal-50/70 border border-teal-200 text-teal-900 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">Postfix (Hậu tố)</span>
              <span className="text-[10px] bg-teal-100 text-teal-700 border border-teal-200 px-2 py-0.5 rounded font-mono font-medium">
                Reverse Polish
              </span>
            </div>
            <div className="text-xs text-teal-700/80 mb-3">
              Cấu trúc: <code className="text-teal-950 font-mono font-semibold bg-teal-100/60 px-1 py-0.5 rounded">operand1 operand2 operator</code>
            </div>
            <div className="bg-white/90 rounded-lg p-3 font-mono text-sm font-bold text-teal-950 border border-teal-200/80 text-center mb-3 shadow-sm">
              {current.postfix}
            </div>
          </div>
          <div className="text-[11px] text-teal-800/90 border-t border-teal-200/60 pt-2">
            ✔ <strong className="text-teal-950">Diễn giải duy nhất:</strong> Máy tính dễ dàng tính bằng Stack!
          </div>
        </div>

        {/* PREFIX CARD */}
        <div className="bg-cyan-50/70 border border-cyan-200 text-cyan-900 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider">Prefix (Tiền tố)</span>
              <span className="text-[10px] bg-cyan-100 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded font-mono font-medium">
                Polish Notation
              </span>
            </div>
            <div className="text-xs text-cyan-700/80 mb-3">
              Cấu trúc: <code className="text-cyan-950 font-mono font-semibold bg-cyan-100/60 px-1 py-0.5 rounded">operator operand1 operand2</code>
            </div>
            <div className="bg-white/90 rounded-lg p-3 font-mono text-sm font-bold text-cyan-950 border border-cyan-200/80 text-center mb-3 shadow-sm">
              {current.prefix}
            </div>
          </div>
          <div className="text-[11px] text-cyan-800/90 border-t border-cyan-200/60 pt-2">
            ✔ <strong className="text-cyan-950">Diễn giải duy nhất:</strong> Không cần bất kỳ dấu ngoặc nào.
          </div>
        </div>
      </div>

      {/* Explanation Box */}
      <div className="bg-amber-50/80 border border-amber-200 text-amber-900 p-4 rounded-xl text-xs md:text-sm flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-950 font-bold">Giải thích thứ tự ưu tiên:</strong> {current.explanation}
        </div>
      </div>
    </div>
  );
}

