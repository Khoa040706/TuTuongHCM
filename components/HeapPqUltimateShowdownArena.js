"use client";

import React, { useState } from "react";
import { Swords, Crown } from "lucide-react";

export default function HeapPqUltimateShowdownArena() {
  const [scaleN, setScaleN] = useState(1000000); // 1M

  const logN = Math.round(Math.log2(scaleN));

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Swords className="w-3.5 h-3.5 text-amber-700" />
            <span>Đấu Trường Chung Kết (Mục 8)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            So Sánh Tổng Kết Các Cách Cài Đặt PriorityQueue
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Minh chứng sức mạnh cân bằng hoàn hảo của <strong>Binary Heap</strong> so với các cách cài đặt mảng thuần túy.
          </p>
        </div>

        {/* Quick Scale Selector */}
        <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono">
          <span className="text-slate-500 font-semibold">Quy mô N:</span>
          {[1000, 100000, 1000000].map((val) => (
            <button
              key={val}
              onClick={() => setScaleN(val)}
              className={`px-3 py-1 rounded-xl border transition-all shadow-sm ${
                scaleN === val
                  ? "bg-amber-500 text-slate-950 border-amber-600 font-bold"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {val.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Master 3-Way Table */}
      <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm mb-6">
        <table className="w-full text-left text-xs border-collapse font-mono">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px] uppercase tracking-wider font-bold">
              <th className="py-3.5 px-4">Phương Pháp Cài Đặt (Strategy)</th>
              <th className="py-3.5 px-4 text-center">Enqueue / Insert(key)</th>
              <th className="py-3.5 px-4 text-center">Dequeue / ExtractMax()</th>
              <th className="py-3.5 px-4">Số Phép Tính Khi N = {scaleN.toLocaleString()}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {/* Strategy 1 */}
            <tr className="hover:bg-slate-50/60 transition-all">
              <td className="py-3.5 px-4 font-bold text-teal-950">
                1. Array-Based PQ (1) <span className="text-[10px] text-slate-500 block font-normal">(Circular Sorted Array)</span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 border border-rose-300 text-rose-950 font-bold">
                  O(n)
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold">
                  O(1)
                </span>
              </td>
              <td className="py-3.5 px-4 font-sans text-xs">
                Chèn: <strong className="text-rose-900">{scaleN.toLocaleString()} phép tính</strong> (Treo máy!) • Rút: 1 phép
              </td>
            </tr>

            {/* Strategy 2 */}
            <tr className="hover:bg-slate-50/60 transition-all">
              <td className="py-3.5 px-4 font-bold text-amber-950">
                2. Array-Based PQ (2) <span className="text-[10px] text-slate-500 block font-normal">(Unsorted Array)</span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold">
                  O(1)
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 border border-rose-300 text-rose-950 font-bold">
                  O(n)
                </span>
              </td>
              <td className="py-3.5 px-4 font-sans text-xs">
                Chèn: 1 phép • Rút: <strong className="text-rose-900">{scaleN.toLocaleString()} phép tính</strong> (Quét toàn mảng!)
              </td>
            </tr>

            {/* Binary Heap */}
            <tr className="bg-amber-50/90 border-2 border-amber-400 transition-all">
              <td className="py-3.5 px-4 font-extrabold text-amber-950 flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>3. Binary Heap <span className="text-[10px] text-amber-800 block font-normal">(Cũng dùng Array!)</span></span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-400 text-emerald-950 font-extrabold shadow-sm">
                  O(log n)
                </span>
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-400 text-emerald-950 font-extrabold shadow-sm">
                  O(log n)
                </span>
              </td>
              <td className="py-3.5 px-4 font-sans text-xs font-bold text-emerald-950">
                ⭐ Cả Chèn &amp; Rút chỉ tốn: <span className="text-amber-950 text-sm font-extrabold">~{logN} phép tính</span> (Tốc độ ánh sáng!)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5 shadow-sm">
          <strong className="text-amber-950 font-mono block">📌 Tóm tắt Slide 8:</strong>
          <p className="text-slate-700 leading-relaxed text-[11px]">
            Heap là cấu trúc dữ liệu hiệu quả &mdash; cả <strong>enqueue lẫn dequeue đều O(log n)</strong> &mdash; để cài đặt ADT PriorityQueue, trong đó "key" biểu diễn "priority" của mỗi phần tử.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-1.5 text-emerald-950 shadow-sm">
          <strong className="text-emerald-950 font-mono block">💡 Cần nhớ:</strong>
          <p className="leading-relaxed text-[11px]">
            Binary Heap cân bằng tốt hơn 2 cách array thuần: <strong>cả 2 thao tác đều O(log n)</strong>, thay vì bị kẹt một thao tác O(n).
          </p>
        </div>
      </div>
    </div>
  );
}
