"use client";

import React, { useState } from "react";
import { Swords, Sparkles, AlertTriangle, Crown } from "lucide-react";

export default function PqStrategyDuelArena() {
  const [showHeapSolution, setShowHeapSolution] = useState(false);

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Swords className="w-3.5 h-3.5 text-indigo-700" />
            <span>Đối Đầu 2 Chiến Lược Mảng (Mục 2.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            So Sánh 2 Chiến Lược &amp; Thế Bế Tắc Của Mảng
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cả 2 chiến lược mảng đều bị kẹt bởi một thao tác <strong>O(n)</strong> chậm chạp khi $N$ lớn.
          </p>
        </div>

        <button
          onClick={() => setShowHeapSolution(!showHeapSolution)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm self-start md:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950" />
          {showHeapSolution ? "Ẩn Giải Pháp Đột Phá" : "Xem Giải Pháp Đột Phá: Binary Heap!"}
        </button>
      </div>

      {/* Duel Matrix Table */}
      <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm mb-6">
        <table className="w-full text-left text-xs border-collapse font-mono">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px] uppercase tracking-wider">
              <th className="py-3 px-4">Chiến Lược Cài Đặt (Strategy)</th>
              <th className="py-3 px-4 text-center">Enqueue(x)</th>
              <th className="py-3 px-4 text-center">Dequeue()</th>
              <th className="py-3 px-4">Nhận Xét Nhược Điểm (Trade-off)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {/* Row 1: Strategy 1 */}
            <tr className="hover:bg-slate-50/80 transition-all">
              <td className="py-3.5 px-4 font-bold text-teal-800">
                1. Circular-Array-Based PQ (1) <span className="text-[10px] text-slate-500 block font-normal">(Mảng luôn Sorted)</span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 font-bold">
                  O(n)
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold">
                  O(1)
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-600 font-sans text-[11px]">
                Chèn chậm vì phải dịch chuyển mảng để giữ thứ tự; Lấy Max nhanh nhờ dịch con trỏ <code>front</code>.
              </td>
            </tr>

            {/* Row 2: Strategy 2 */}
            <tr className="hover:bg-slate-50/80 transition-all">
              <td className="py-3.5 px-4 font-bold text-amber-900">
                2. Circular-Array-Based PQ (2) <span className="text-[10px] text-slate-500 block font-normal">(Mảng không Sorted)</span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold">
                  O(1)
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 font-bold">
                  O(n)
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-600 font-sans text-[11px]">
                Chèn nhanh ở đuôi; Lấy Max chậm vì phải quét toàn bộ $n$ phần tử và dời lấp chỗ trống.
              </td>
            </tr>

            {/* Row 3: Can we do better? */}
            <tr className={`transition-all ${showHeapSolution ? "bg-amber-50/80 font-bold" : "bg-slate-50/40"}`}>
              <td className="py-3.5 px-4 font-bold text-amber-950 flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>3. Có thể làm tốt hơn không? {showHeapSolution ? "(Binary Heap)" : ""}</span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className={`px-2.5 py-1 rounded-lg font-bold ${showHeapSolution ? "bg-emerald-100 text-emerald-950 border border-emerald-400" : "bg-slate-100 text-amber-900 animate-pulse border border-slate-200"}`}>
                  {showHeapSolution ? "O(log n)" : "O(?)"}
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className={`px-2.5 py-1 rounded-lg font-bold ${showHeapSolution ? "bg-emerald-100 text-emerald-950 border border-emerald-400" : "bg-slate-100 text-amber-900 animate-pulse border border-slate-200"}`}>
                  {showHeapSolution ? "O(log n)" : "O(?)"}
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-700 font-sans text-[11px]">
                {showHeapSolution
                  ? "⭐ Cân bằng hoàn hảo! Cả Enqueue và Dequeue đều đạt O(log n) nhờ chiều cao cây hoàn chỉnh h = O(log n)!"
                  : "Nếu N lớn (hàng triệu phần tử) ⟹ O(n) sẽ khiến hệ thống bị treo. Cần một cấu trúc mới!"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Alert */}
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-sans space-y-2 text-slate-800 shadow-sm">
        <div className="flex items-center gap-2 text-amber-950 font-bold font-mono">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>Điểm Cốt Lõi Cần Nhớ (Slide 2.3):</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          • Strategy 1: Enqueue O(n), Dequeue O(1) (mảng luôn sorted).<br />
          • Strategy 2: Enqueue O(1), Dequeue O(n) (mảng không sorted, phải scan).<br />
          • <strong>Cả 2 cách đều có 1 thao tác O(n)</strong> &rarr; Cần cấu trúc tốt hơn: <strong>Binary Heap</strong>!
        </p>
      </div>
    </div>
  );
}
