"use client";

import React, { useState } from "react";
import { Code2, Tag, Triangle } from "lucide-react";

export default function HeapShiftDownCodeWorkbench() {
  const [activeTab, setActiveTab] = useState("shiftdown"); // "extractmax" | "shiftdown"

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Code2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Mã Nguồn &amp; So Sánh 3 Ngôi (Mục 7.2 &amp; 7.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Mã Nguồn: ExtractMax() &amp; Cơ Chế ShiftDown(i)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            So sánh 3 đỉnh (Cha, Con Trái, Con Phải) để tìm <code className="font-mono font-bold text-slate-800">max_id</code>. Hoán đổi với <strong>con lớn hơn</strong> và tiếp tục lặn xuống đáy cây.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("extractmax")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "extractmax"
                ? "bg-rose-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ExtractMax() [O(log n)]
          </button>
          <button
            onClick={() => setActiveTab("shiftdown")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "shiftdown"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ShiftDown(i) [O(log n)]
          </button>
        </div>
      </div>

      {/* Aliases Callout */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
        <span className="text-slate-600 font-bold flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-amber-600" />
          Các tên gọi tương đương khác:
        </span>
        <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-bold">ShiftDown</span>
        <span className="px-2.5 py-0.5 rounded-lg bg-teal-50 border border-teal-300 text-teal-950 font-bold">BubbleDown</span>
        <span className="px-2.5 py-0.5 rounded-lg bg-sky-50 border border-sky-300 text-sky-950 font-bold">Heapify</span>
        <span className="px-2.5 py-0.5 rounded-lg bg-purple-50 border border-purple-300 text-purple-950 font-bold">SiftDown</span>
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
              <span className="ml-2">Pseudo-code: {activeTab === "extractmax" ? "ExtractMax()" : "ShiftDown(i)"}</span>
            </div>
            <span className="text-amber-400 font-bold">Standard Slide Code</span>
          </div>

          <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
            {activeTab === "extractmax" ? (
              <code>
{`// Hàm rút phần tử lớn nhất ở Root và tái cấu trúc heap
ExtractMax()
  maxV = A[1]              // lưu giá trị root để trả về, O(1)
  A[1] = A[heapsize]       // đưa lá cuối lên root, O(1)
  heapsize = heapsize - 1  // giảm kích thước heap, O(1)
  ShiftDown(1)             // phục hồi tính chất heap từ đỉnh, O(log n)
  return maxV

// Time Complexity: O(1) + O(1) + O(1) + O(log n) = O(log n)`}
              </code>
            ) : (
              <code>
{`// Hàm đẩy phần tử tại vị trí i chìm dần xuống dưới
ShiftDown(i)
  while (i <= heapsize) {
    maxV = A[i]; max_id = i;

    // So sánh với con trái nếu tồn tại
    if (left(i) <= heapsize && maxV < A[left(i)]) {
      maxV = A[left(i)]; max_id = left(i);
    }

    // So sánh tiếp với con phải nếu tồn tại
    if (right(i) <= heapsize && maxV < A[right(i)]) {
      maxV = A[right(i)]; max_id = right(i);
    }

    // Nếu nút con lớn hơn cha -> swap và tiếp tục lặn xuống
    if (max_id != i) {
      swap(A[i], A[max_id]);
      i = max_id;
    } else {
      break; // Cha đã lớn hơn cả 2 con -> dừng an toàn
    }
  }`}
              </code>
            )}
          </pre>
        </div>

        {/* 3-Way Logic Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-950 font-mono flex items-center gap-1.5">
            <Triangle className="w-4 h-4 text-amber-700" />
            Cơ Chế So Sánh 3 Ngôi (3-Way Compare):
          </span>

          <div className="space-y-2.5 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1 shadow-sm">
              <strong className="text-amber-950 block font-mono">1. Tìm Max trong 3 đỉnh:</strong>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                So sánh cha <code>A[i]</code> với con trái <code>A[2i]</code> và con phải <code>A[2i+1]</code> để xác định vị trí có giá trị lớn nhất (<code>max_id</code>).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 shadow-sm">
              <strong className="text-emerald-950 block font-mono">2. Hoán đổi với con lớn hơn:</strong>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                Bắt buộc phải swap với <strong>con có giá trị lớn hơn</strong> để sau khi swap, nút cha mới vẫn lớn hơn cả 2 nút con bên dưới!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
