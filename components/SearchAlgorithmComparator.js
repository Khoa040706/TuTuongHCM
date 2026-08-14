"use client";

import React, { useState } from "react";
import { Search, Split, CheckCircle2, ArrowRight, ShieldAlert, Cpu } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function SearchAlgorithmComparator() {
  const [activeTab, setActiveTab] = useState("both");

  const seqCode = `public int seqSearch(int[] a, int len, int x) {
    for (int i = 0; i < len; i++) {
        if (a[i] == x)
            return i;
    }
    return -1;
}`;

  const binCode = `public static int binSearch(int[] a, int len, int x) {
    int mid, low = 0;
    int high = len - 1;
    while (low <= high) {
        mid = (low + high) / 2;
        if (x == a[mid]) return mid;
        else if (x > a[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 5.4 – 5.6 — So Sánh Hai Thuật Toán Tìm Kiếm
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Sequential Search (O(n)) vs Binary Search (O(log n))
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát chi tiết mã nguồn, điều kiện dữ liệu và quá trình suy diễn toán học chứng minh độ phức tạp
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("both")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activeTab === "both" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
            }`}
          >
            Cả hai
          </button>
          <button
            onClick={() => setActiveTab("seq")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activeTab === "seq" ? "bg-white text-blue-900 shadow-xs" : "text-slate-600"
            }`}
          >
            Sequential
          </button>
          <button
            onClick={() => setActiveTab("bin")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activeTab === "bin" ? "bg-white text-teal-900 shadow-xs" : "text-slate-600"
            }`}
          >
            Binary
          </button>
        </div>
      </div>

      {/* 2-Column Comparison Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Column 1: Sequential Search */}
        {(activeTab === "both" || activeTab === "seq") && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sequential Search</h4>
                    <span className="text-[11px] font-mono text-slate-500">Tìm kiếm tuần tự</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-black border border-blue-300">
                  O(n)
                </span>
              </div>

              {/* Requirement */}
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs font-sans mb-3 text-slate-700">
                <strong>Yêu cầu đầu vào:</strong> Dữ liệu <em>không cần sắp xếp trước</em> (unindexed / unsorted).
              </div>

              {/* Code */}
              <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 mb-3">
                <pre className="text-xs font-mono overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(seqCode) }} />
                </pre>
              </div>

              {/* Step derivation */}
              <div className="space-y-1.5 text-xs text-slate-700 font-sans">
                <p>• Thời gian mỗi lần lặp trong loop: tối đa hằng số <code>t1</code>.</p>
                <p>• Thời gian ngoài loop: tối đa hằng số <code>t2</code>.</p>
                <p>• Số lần lặp tối đa: <code>n</code> (độ dài mảng).</p>
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 font-mono text-[11px] text-blue-900">
                  ➔ Asymptotic upper bound: <code>t1 · n + t2 = O(n)</code>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 text-xs font-sans text-slate-600">
              📌 <strong>Rule of Thumb:</strong> Vòng lặp với <code>n</code> lần lặp ➔ dẫn đến <code>O(n)</code> (linear complexity).
            </div>
          </div>
        )}

        {/* Column 2: Binary Search */}
        {(activeTab === "both" || activeTab === "bin") && (
          <div className="bg-slate-50 border border-teal-200 rounded-2xl p-4 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-teal-200 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-teal-100 text-teal-700">
                    <Split className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Binary Search</h4>
                    <span className="text-[11px] font-mono text-slate-500">Tìm kiếm nhị phân</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 font-mono text-xs font-black border border-teal-300">
                  O(log n)
                </span>
              </div>

              {/* Requirement */}
              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-xs font-sans mb-3 text-amber-950 font-medium">
                <strong>Bắt buộc:</strong> Mảng phải được <strong>sắp xếp tăng dần (sorted ascending)</strong>.
              </div>

              {/* Code */}
              <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 mb-3">
                <pre className="text-xs font-mono overflow-x-auto">
                  <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(binCode) }} />
                </pre>
              </div>

              {/* Step derivation */}
              <div className="space-y-1.5 text-xs text-slate-700 font-sans">
                <p>• Ban đầu: <code>n</code> phần tử còn lại.</p>
                <p>• Sau 1 lần lặp: tối đa <code>n / 2</code> phần tử.</p>
                <p>• Sau 2 lần: <code>n / 4 = n / 2²</code>; sau 3 lần: <code>n / 8 = n / 2³</code>.</p>
                <p>• Sau i lần: <code>n / 2ⁱ</code>; lần cuối còn 1 phần tử: <code>n / 2ᵏ = 1 ➔ 2ᵏ = n ➔ k = log₂ n</code>.</p>
                <div className="p-2 rounded-lg bg-teal-50 border border-teal-200 font-mono text-[11px] text-teal-900">
                  ➔ Complexity: <code>t1 + t2 · f(n) = O(log n)</code>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-teal-200 text-xs font-sans text-slate-600">
              📌 <strong>Rule of Thumb:</strong> Khi phạm vi tìm kiếm bị <strong>giảm theo tỉ lệ (1/2, 1/3, 1/10...)</strong> mỗi lần lặp ➔ dẫn đến <code>O(log n)</code>.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
