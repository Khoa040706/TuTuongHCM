"use client";

import React, { useState } from "react";
import { Zap, ShieldCheck } from "lucide-react";

export default function BuildHeapFastO1NStudio() {
  const [activeStep, setActiveStep] = useState(0);

  // Sample array of 9 elements: [4, 10, 3, 5, 1, 9, 2, 8, 7]
  // parent(9) = 4. Loop runs for i = 4, 3, 2, 1.
  const steps = [
    {
      i: null,
      title: "1. Khởi tạo: Copy toàn bộ mảng vào A (Chưa thỏa Heap)",
      desc: "Mảng ban đầu A[1..9] = [4, 10, 3, 5, 1, 9, 2, 8, 7]. Các nút lá (Index 5..9) tự động thỏa Max-Heap (không có con).",
      highlightNode: null,
      leafNodes: [5, 6, 7, 8, 9],
      internalNodes: [4, 3, 2, 1],
    },
    {
      i: 4,
      title: "2. ShiftDown(4) tại nút cha không phải lá cuối cùng (i = ⌊9/2⌋ = 4)",
      desc: "Nút A[4] = 5 có con trái A[8]=8, con phải A[9]=7. Max là 8 (A[8]) ⟹ Swap A[4] với A[8].",
      highlightNode: 4,
      leafNodes: [5, 6, 7, 8, 9],
      internalNodes: [3, 2, 1],
    },
    {
      i: 3,
      title: "3. ShiftDown(3) tại nút i = 3",
      desc: "Nút A[3] = 3 có con trái A[6]=9, con phải A[7]=2. Max là 9 (A[6]) ⟹ Swap A[3] với A[6].",
      highlightNode: 3,
      leafNodes: [5, 6, 7, 8, 9],
      internalNodes: [2, 1],
    },
    {
      i: 2,
      title: "4. ShiftDown(2) tại nút i = 2",
      desc: "Nút A[2] = 10 có con trái A[4]=8, con phải A[5]=1. 10 >= 8 và 10 >= 1 ⟹ Không vi phạm, dừng ngay!",
      highlightNode: 2,
      leafNodes: [5, 6, 7, 8, 9],
      internalNodes: [1],
    },
    {
      i: 1,
      title: "5. ShiftDown(1) tại đỉnh Root (i = 1)",
      desc: "Nút A[1] = 4 có con trái A[2]=10, con phải A[3]=9. Max là 10 ⟹ Swap A[1] với A[2]. Tiếp tục chìm xuống nếu cần.",
      highlightNode: 1,
      leafNodes: [5, 6, 7, 8, 9],
      internalNodes: [],
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Chiến Lược Bottom-Up Đột Phá (Mục 9.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
            BuildHeap Nhanh O(n) &mdash; Duyệt Ngược Từ Nút ⌊n/2⌋ Về 1
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Không cần chèn từng phần tử! Chỉ cần <code>ShiftDown</code> các nút trong (Internal nodes) từ <code>parent(heapsize)</code> về Root, bỏ qua 50% số nút lá.
          </p>
        </div>

        {/* Big O(n) Badge */}
        <div className="px-4 py-2 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono font-extrabold text-sm self-start md:self-auto shadow-sm">
          Thời gian: O(n) Tuyệt Đối
        </div>
      </div>

      {/* Step Selector Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 text-xs font-mono">
        {steps.map((st, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`px-3.5 py-1.5 rounded-xl border font-bold transition-all whitespace-nowrap shadow-sm ${
              activeStep === idx
                ? "bg-emerald-600 text-white border-emerald-700 scale-105"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Bước {idx + 1}: {st.i ? `i = ${st.i}` : "Khởi tạo"}
          </button>
        ))}
      </div>

      {/* Step Explanation Card */}
      <div className="p-4 rounded-2xl bg-white border border-emerald-200 mb-6 shadow-sm space-y-1">
        <h4 className="text-xs font-bold text-emerald-950 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          {current.title}
        </h4>
        <p className="text-xs text-slate-600 font-sans leading-relaxed">{current.desc}</p>
      </div>

      {/* Code & Logic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Pseudo-Code Box (7 cols) - KEPT IN DARK THEME bg-slate-950 */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2">BuildHeap.pseudo</span>
            </div>
            <span className="text-emerald-400 font-bold">Fast Bottom-Up O(n)</span>
          </div>

          <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
            <code>
{`// Thuật toán xây dựng Heap thần tốc trong O(n)
BuildHeap(array)
  heapsize = size(array)
  A[0] = 0                              // dummy entry
  for i = 1 to heapsize                 // copy mảng: O(n)
    A[i] = array[i-1]

  // Duyệt ngược từ nút không phải lá cuối cùng về Root
  for i = parent(heapsize) down to 1    // O(n/2) lần gọi
    ShiftDown(i)                        // O(height of node i)`}
            </code>
          </pre>
        </div>

        {/* Why Leaf Free Pass (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-3 text-xs font-sans shadow-sm">
          <span className="font-bold uppercase tracking-wider text-emerald-950 font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Tại Sao Bỏ Qua Nút Lá? (Slide 9.3)
          </span>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1 shadow-sm">
            <strong className="text-amber-950 block font-mono">1. Không có con &rarr; Tự động thỏa:</strong>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              Tất cả các nút lá từ index <code>⌊n/2⌋ + 1</code> đến <code>n</code> (chiếm &ge; 50% số nút của cây) đều không có con, nên tính chất Max-Heap tự động thỏa mãn mà không cần bất kỳ thao tác nào!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 shadow-sm">
            <strong className="text-emerald-950 block font-mono">2. Bắt đầu từ parent(heapsize):</strong>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              Nút <code>⌊heapsize / 2⌋</code> chính là nút cha sâu nhất có ít nhất 1 con. Duyệt ngược từ đây lên Root đảm bảo các cây con bên dưới đã là Heap trước khi nút cha gọi ShiftDown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
