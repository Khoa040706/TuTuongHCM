"use client";

import React, { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function RecursionRecipeComparator() {
  const [testOddN, setTestOddN] = useState(5);

  const badCode = `// Ví dụ Bad Recursion từ Giáo trình:
// Base case chỉ bắt n == 0
double funct(int n) {
    if (n == 0) {
        return 1.0; // Base case
    } else {
        return funct(n - 2) / n; // Bước nhảy n - 2
    }
}
// Nếu n = 5 (số lẻ) -> funct(5) -> funct(3) -> funct(1) -> funct(-1) -> funct(-3)...
// KHÔNG BAO GIỜ CHẠM n == 0 -> INFINITE RECURSION -> StackOverflowError!`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 2.3 &amp; 2.4 — Đối chiếu Công thức vs Lỗi sai
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Bảng So Sánh: Công Thức Chuẩn (Recipe) vs Đệ Quy Sai (Bad Recursion)
          </h3>
          <p className="text-xs text-slate-500">
            3 quy tắc vàng bắt buộc để thiết kế giải thuật đệ quy chính xác và an toàn bộ nhớ
          </p>
        </div>
      </div>

      {/* 2-Column Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: 3-Step Valid Recipe */}
        <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-emerald-950 font-sans">
                  ✅ 3 Bước Chuẩn (Recursion Recipe)
                </h4>
                <span className="text-[11px] font-mono text-emerald-700">Quy trình xây dựng lời giải</span>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs">
                <strong className="text-xs font-mono font-bold text-emerald-800 block mb-1">
                  1. General (recursive) case — Inductive Step:
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Xác định các instance <em>"đơn giản hơn"</em> của cùng bài toán (để có thể gọi đệ quy giải chúng).
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs">
                <strong className="text-xs font-mono font-bold text-emerald-800 block mb-1">
                  2. Base case (Điều kiện dừng):
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Xác định instance <em>"đơn giản nhất"</em> (giải được trực tiếp mà không cần đệ quy).
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs">
                <strong className="text-xs font-mono font-bold text-emerald-800 block mb-1">
                  3. Đảm bảo luôn hội tụ về Base Case:
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mỗi bước gọi đệ quy bắt buộc phải thu hẹp khoảng cách tiến dần về Base case, tránh lặp vô hạn.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-100/70 border border-emerald-300 rounded-xl p-3 text-xs text-emerald-950 font-medium">
            🛡️ Tuân thủ 3 bước trên đảm bảo giải thuật đệ quy luôn dừng và tính đúng kết quả.
          </div>
        </div>

        {/* Right Column: Bad Recursion Flaw */}
        <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-rose-950 font-sans">
                  ❌ Bad Recursion (Đệ quy sai hội tụ)
                </h4>
                <span className="text-[11px] font-mono text-rose-700">Lỗi kinh điển từ Giáo trình</span>
              </div>
            </div>

            {/* Bad Code Snippet */}
            <div className="space-y-3 mt-4">
              <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-3.5 rounded-xl border border-slate-800 shadow-md overflow-x-auto">
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightJavaVsCode(badCode)
                  }}
                />
              </pre>

              <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-xs">
                <strong className="text-xs font-mono font-bold text-rose-800 block mb-1">
                  Nguyên nhân gây Infinite Recursion:
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nếu <code>n</code> là số lẻ (1, 3, 5...), giá trị <code>n</code> sẽ giảm 2: <code>5 → 3 → 1 → -1 → -3...</code> và <strong>không bao giờ chạm được n == 0</strong> → không đạt được Base case → Lỗi tràn Call Stack (StackOverflowError).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-rose-100/70 border border-rose-300 rounded-xl p-3 text-xs text-rose-950 font-medium">
            ⚠️ Cách sửa: Cần sửa Base Case thành <code>n &lt;= 0</code> hoặc <code>n == 1 || n == 0</code> để bảo vệ cho cả số chẵn và số lẻ!
          </div>
        </div>
      </div>
    </div>
  );
}
