"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, CornerDownRight } from "lucide-react";

export default function HeapShiftDownTerminationCard() {
  const [selectedCondition, setSelectedCondition] = useState(1);

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-700" />
            <span>Điều Kiện Dừng Thuật Toán (Mục 7.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            2 Điều Kiện Dừng An Toàn Của Vòng Lặp ShiftDown
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Làm sao để biết khi nào phần tử đã chìm đến vị trí tối ưu và thuật toán kết thúc?
          </p>
        </div>

        {/* Condition Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedCondition(1)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedCondition === 1
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Cha &ge; Cả 2 con (max_id == i)
          </button>
          <button
            onClick={() => setSelectedCondition(2)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedCondition === 2
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Chạm đáy lá (left(i) &gt; heapsize)
          </button>
        </div>
      </div>

      {/* Condition Content Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Condition 1 Card */}
        <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-sm ${
          selectedCondition === 1
            ? "bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-500/30 scale-[1.01]"
            : "bg-white border-slate-200 text-slate-600"
        }`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ĐIỀU KIỆN 1: max_id == i (Không còn vi phạm)
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold">
                Lệnh break
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 font-mono text-xs text-amber-950 space-y-1 shadow-sm">
              <div className="font-bold">A[i] &ge; A[left(i)] &amp;&amp; A[i] &ge; A[right(i)]</div>
              <div className="text-[11px] text-slate-500">&rarr; max_id giữ nguyên là i (không đổi)</div>
            </div>

            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              Khi giá trị tại nút hiện tại đã lớn hơn hoặc bằng cả 2 nút con bên dưới, tính chất Max-Heap tại nhánh này đã được thỏa mãn 100%. Vòng lặp kích hoạt lệnh <code>break</code> để kết thúc ngay lập tức.
            </p>
          </div>

          <div className="pt-3 border-t border-emerald-200/80 text-[11px] text-emerald-900 font-mono font-semibold">
            💡 Không cần hoán đổi thêm bất kỳ bước nào nữa.
          </div>
        </div>

        {/* Condition 2 Card */}
        <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-sm ${
          selectedCondition === 2
            ? "bg-sky-50 border-sky-300 text-sky-950 ring-2 ring-sky-500/30 scale-[1.01]"
            : "bg-white border-slate-200 text-slate-600"
        }`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-sky-950 flex items-center gap-1.5">
                <CornerDownRight className="w-4 h-4 text-sky-600" />
                ĐIỀU KIỆN 2: left(i) &gt; heapsize (Chạm đáy lá)
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-sky-100 border border-sky-300 text-sky-950 font-bold">
                Hết con để so sánh
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 font-mono text-xs text-sky-950 space-y-1 shadow-sm">
              <div className="font-bold">left(i) = 2*i &gt; heapsize</div>
              <div className="text-[11px] text-slate-500">&rarr; Nút i là một nút lá (Leaf node)</div>
            </div>

            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              Khi phần tử chìm xuống tận tầng đáy cùng của cây, cả con trái lẫn con phải đều không tồn tại (chỉ số vượt quá <code>heapsize</code>). Không còn nút nào bên dưới để so sánh &rarr; Dừng vòng lặp.
            </p>
          </div>

          <div className="pt-3 border-t border-sky-200/80 text-[11px] text-sky-900 font-mono font-semibold">
            💡 Đã đạt đến độ sâu tối đa của cây (Height = O(log N)).
          </div>
        </div>
      </div>
    </div>
  );
}
