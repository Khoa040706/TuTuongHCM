"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function FloatEpsilonPrecisionSandbox() {
  const [val1, setVal1] = useState(0.1);
  const [val2, setVal2] = useState(0.2);
  const epsilon = 0.0000001;

  const sum = val1 + val2;
  const target = 0.3;
  const directEqual = sum === target;

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              VÍ DỤ MÔ PHỎNG 3.7
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Floating-point Precision (EPSILON) & Casting Sandbox
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Số thực dấu phẩy động (<code>double</code>) trong Java luôn có sai số nhị phân. Không bao giờ dùng <code>==</code> để so sánh trực tiếp!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* LEFT: Precision Error Demo */}
        <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-5">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-3 font-mono">
            1. Mô phỏng sai số Dấu phẩy động (Floating-Point Error)
          </span>

          <div className="bg-white p-4 rounded-xl border border-purple-100 space-y-3 font-mono text-xs mb-4 shadow-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Phép tính: 0.1 + 0.2</span>
              <span className="text-purple-700 font-bold">{sum}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Kỳ vọng mong muốn:</span>
              <span className="text-slate-800">0.3</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            {/* Direct equality check */}
            <div className={`p-3 rounded-lg border flex items-center justify-between font-mono ${
              directEqual ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-rose-50 border-rose-200 text-rose-800"
            }`}>
              <span>So sánh trực tiếp (sum == 0.3):</span>
              <span className="font-bold flex items-center gap-1">
                <XCircle className="w-4 h-4 text-rose-600" />
                false (Lỗi sai số!)
              </span>
            </div>

            {/* EPSILON check */}
            <div className="p-3 rounded-lg border bg-emerald-50 border-emerald-200 text-emerald-800 flex items-center justify-between font-mono">
              <span>So sánh EPSILON (Math.abs &lt; 1e-7):</span>
              <span className="font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                true (Chính xác!)
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: instanceof & Casting in equals() */}
        <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-5">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-3 font-mono">
            2. Cài đặt phương thức equals() an toàn với instanceof & Casting
          </span>

          {(() => {
            const equalsCode = `public boolean equals(Object cl) {
    // Kiểm tra kiểu trước khi ép kiểu!
    if (cl instanceof Complex) {
        Complex temp = (Complex) cl; // Casting
        return (Math.abs(realpart() - temp.realpart()) < EPSILON
                && Math.abs(imagpart() - temp.imagpart()) < EPSILON);
    }
    return false;
}`;
            return (
              <div className="bg-[#1e1e1e] p-3.5 rounded-xl border border-[#2d2d2d] font-mono text-xs text-[#d4d4d4] overflow-x-auto leading-relaxed mb-3">
                <pre><code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(equalsCode) }} /></pre>
              </div>
            );
          })()}

          <div className="p-2.5 bg-white rounded-lg border border-purple-100 text-[10px] text-slate-600 leading-relaxed shadow-sm">
            * Khai báo hằng số EPSILON ở đầu class: <code className="text-purple-700 font-bold">public static final double EPSILON = 0.0000001;</code>
          </div>
        </div>
      </div>
    </div>
  );
}
