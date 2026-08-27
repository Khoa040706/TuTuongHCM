"use client";

import React, { useState } from "react";
import { Swords, CheckCircle2, XCircle, HardDrive, Cpu } from "lucide-react";

export default function HeapSortVsMergeSortArena() {
  const [activeTab, setActiveTab] = useState("comparison"); // "comparison" | "code"

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Swords className="w-3.5 h-3.5 text-indigo-700" />
            <span>Đối Đầu Thuật Toán O(n log n) (Mục 9.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            HeapSort vs MergeSort &mdash; In-Place vs Cache Locality
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cùng đạt <strong>O(n log n)</strong>, nhưng HeapSort chiến thắng về bộ nhớ RAM (In-Place) trong khi MergeSort tối ưu hơn về bộ nhớ đệm CPU.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("comparison")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "comparison"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Bảng So Sánh 5 Tiêu Chí
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "code"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn HeapSort O(n log n)
          </button>
        </div>
      </div>

      {activeTab === "comparison" ? (
        <div className="space-y-4">
          {/* Comparison Table */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px] uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4">Tiêu Chí Đánh Giá</th>
                  <th className="py-3.5 px-4 text-emerald-800 font-extrabold">HeapSort (Môn học)</th>
                  <th className="py-3.5 px-4 text-sky-800 font-extrabold">MergeSort (CS1020)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-all">
                  <td className="py-3.5 px-4 font-bold text-slate-900">1. Time Complexity (Worst)</td>
                  <td className="py-3.5 px-4 text-emerald-800 font-extrabold">O(n log n)</td>
                  <td className="py-3.5 px-4 text-sky-800 font-extrabold">O(n log n)</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-all">
                  <td className="py-3.5 px-4 font-bold text-slate-900">2. Space Complexity (Auxiliary)</td>
                  <td className="py-3.5 px-4 text-emerald-800 font-extrabold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>O(1) &mdash; Không tốn RAM phụ</span>
                  </td>
                  <td className="py-3.5 px-4 text-rose-800 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>O(n) &mdash; Cần mảng phụ</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-all">
                  <td className="py-3.5 px-4 font-bold text-slate-900">3. In-Place Sorting?</td>
                  <td className="py-3.5 px-4 text-emerald-800 font-bold">✅ CÓ (Memory Friendly)</td>
                  <td className="py-3.5 px-4 text-slate-500">❌ KHÔNG</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-all">
                  <td className="py-3.5 px-4 font-bold text-slate-900">4. Cache Friendly? (CPU Cache)</td>
                  <td className="py-3.5 px-4 text-rose-800 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>KHÔNG (Nhảy chỉ số 2i, 2i+1)</span>
                  </td>
                  <td className="py-3.5 px-4 text-emerald-800 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>CÓ (Duyệt mảng tuần tự)</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-all">
                  <td className="py-3.5 px-4 font-bold text-slate-900">5. Stability (Tính ổn định)</td>
                  <td className="py-3.5 px-4 text-slate-500">Không ổn định (Unstable)</td>
                  <td className="py-3.5 px-4 text-emerald-800 font-bold">Ổn định (Stable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-950 font-mono font-bold">
                <HardDrive className="w-4 h-4 text-emerald-700" />
                <span>Ưu điểm: In-Place (Memory Friendly)</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                HeapSort sắp xếp trực tiếp trên mảng đầu vào mà <strong>không cần cấp phát thêm mảng tạm</strong> như MergeSort. Cực kỳ hữu ích trong các hệ thống nhúng hoặc khi RAM bị giới hạn.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-rose-950 font-mono font-bold">
                <Cpu className="w-4 h-4 text-rose-700" />
                <span>Nhược điểm: Không Cache-Friendly</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                Khi gọi ShiftDown, thuật toán phải nhảy cách quãng giữa các chỉ số <code>i &rarr; 2i &rarr; 4i</code> phân tán trên bộ nhớ, dẫn đến tỷ lệ Cache Miss cao hơn so với QuickSort/MergeSort.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2">HeapSort.pseudo</span>
            </div>
            <span className="text-emerald-400 font-bold">Tổng chi phí: O(n log n)</span>
          </div>

          <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
            <code>
{`// Thuật toán sắp xếp HeapSort hoàn chỉnh
HeapSort(array)
  BuildHeap(array)          // Bước 1: Dựng Heap nhanh O(n)
  n = size(array)
  for i from 1 to n         // Bước 2: Lặp n lần rút Max
    A[n - i + 1] = ExtractMax() // mỗi lần tốn O(log n)
  return A

// Phân tích độ phức tạp thời gian:
// Cost = BuildHeap O(n) + n * ExtractMax O(log n)
//      = O(n) + O(n log n)
//      = O(n log n)`}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
