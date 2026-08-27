"use client";

import React, { useState } from "react";
import { Code2, Tag, ShieldCheck } from "lucide-react";

export default function HeapShiftUpCodeWorkbench() {
  const [activeTab, setActiveTab] = useState("shiftup"); // "insert" | "shiftup"

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Code2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mã Nguồn Thuật Toán (Mục 6.2 &amp; 6.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
            Mã Nguồn: Insert(v) &amp; Vòng Lặp ShiftUp(i)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá 2 điều kiện dừng vòng lặp: Đã tới Root (<code className="font-mono font-bold text-slate-800">i = 1</code>) hoặc Cha đã lớn hơn con (<code className="font-mono font-bold text-slate-800">A[parent(i)] &ge; A[i]</code>).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("insert")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "insert"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Insert(v) [O(1) + O(log n)]
          </button>
          <button
            onClick={() => setActiveTab("shiftup")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "shiftup"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ShiftUp(i) [O(log n)]
          </button>
        </div>
      </div>

      {/* Aliases Callout */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
        <span className="text-slate-600 font-bold flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-amber-600" />
          Các tên gọi tương đương khác:
        </span>
        <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-bold">ShiftUp</span>
        <span className="px-2.5 py-0.5 rounded-lg bg-teal-50 border border-teal-300 text-teal-950 font-bold">BubbleUp</span>
        <span className="px-2.5 py-0.5 rounded-lg bg-sky-50 border border-sky-300 text-sky-950 font-bold">IncreaseKey</span>
        <span className="px-2.5 py-0.5 rounded-lg bg-purple-50 border border-purple-300 text-purple-950 font-bold">SiftUp</span>
      </div>

      {/* Code Display & Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Code Box (7 cols) - KEPT IN DARK THEME bg-slate-950 */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2">Pseudo-code: {activeTab === "insert" ? "Insert(v)" : "ShiftUp(i)"}</span>
            </div>
            <span className="text-emerald-400 font-bold">Standard Slide Code</span>
          </div>

          <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
            {activeTab === "insert" ? (
              <code>
{`// Hàm chèn phần tử v vào Binary Max Heap
Insert(v)
  heapsize = heapsize + 1    // extend array, O(1)
  A[heapsize] = v            // insert at the back, O(1)
  ShiftUp(heapsize)          // fix heap property, O(log n)

// Time Complexity: O(1) + O(1) + O(log n) = O(log n)`}
              </code>
            ) : (
              <code>
{`// Hàm đẩy phần tử tại vị trí i leo lên trên
ShiftUp(i)
  while (i > 1 && A[parent(i)] < A[i]) {
    swap(A[i], A[parent(i)])
    i = parent(i)
  }

// Phân tích: Mỗi bước nhảy i = parent(i) leo lên 1 tầng
// Số bước lặp tối đa <= chiều cao cây h = O(log n)`}
              </code>
            )}
          </pre>
        </div>

        {/* Loop Invariant Analysis (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            2 Điều Kiện Dừng Vòng Lặp:
          </span>

          <div className="space-y-2.5 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1 shadow-sm">
              <strong className="text-amber-950 block font-mono">1. Điều kiện i = 1 (Lên đến Root):</strong>
              <p className="text-slate-700 leading-relaxed">
                Nút chèn đã leo lên tới đỉnh cao nhất của cây. Vì Root không có nút cha nên không thể so sánh tiếp &rarr; dừng vòng lặp!
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 shadow-sm">
              <strong className="text-emerald-950 block font-mono">2. Điều kiện A[parent(i)] &ge; A[i]:</strong>
              <p className="text-slate-700 leading-relaxed">
                Nút cha đã có giá trị lớn hơn hoặc bằng nút hiện tại &rarr; Tính chất Max-Heap đã được khôi phục &rarr; dừng vòng lặp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
