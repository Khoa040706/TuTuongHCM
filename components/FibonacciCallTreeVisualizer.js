"use client";

import React, { useState } from "react";
import { GitBranch, AlertOctagon, Zap, Layers, RefreshCw } from "lucide-react";

export default function FibonacciCallTreeVisualizer() {
  const [highlightDuplicate, setHighlightDuplicate] = useState(true);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Cảnh báo Hiệu năng Đệ quy
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Cây Gọi Hàm Fibonacci: Trùng Lặp Lời Gọi (Duplicate Calls)
          </h3>
          <p className="text-xs text-slate-500">
            Minh họa trực quan vì sao đệ quy ngây thơ <code>fib(n)</code> có độ phức tạp thời gian cấp số nhân O(2ⁿ)
          </p>
        </div>

        <button
          onClick={() => setHighlightDuplicate(!highlightDuplicate)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all border cursor-pointer ${
            highlightDuplicate
              ? "bg-rose-50 text-rose-700 border-rose-300 shadow-xs"
              : "bg-slate-100 text-slate-600 border-slate-200"
          }`}
        >
          <AlertOctagon className="w-4 h-4" />
          {highlightDuplicate ? "Đang bật tô màu trùng lặp" : "Tắt tô màu trùng lặp"}
        </button>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
          <span className="text-[11px] font-mono text-slate-500 block">Kích thước n</span>
          <strong className="text-lg font-black text-slate-900 font-mono">n = 6</strong>
        </div>
        <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-2xl">
          <span className="text-[11px] font-mono text-rose-600 block">Tổng số lần gọi hàm</span>
          <strong className="text-lg font-black text-rose-700 font-mono">25 lần</strong>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl">
          <span className="text-[11px] font-mono text-amber-700 block">Số lần tính trùng thừa</span>
          <strong className="text-lg font-black text-amber-800 font-mono">17 lần (68%)</strong>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl">
          <span className="text-[11px] font-mono text-emerald-700 block">Nếu dùng Vòng lặp (Loop)</span>
          <strong className="text-lg font-black text-emerald-800 font-mono">Chỉ 5 bước (O(n))</strong>
        </div>
      </div>

      {/* Tree Visualization Diagram (Styled CSS Graph) */}
      <div className="bg-slate-50/80 text-slate-800 rounded-2xl p-6 border border-slate-200 shadow-inner overflow-x-auto">
        <div className="min-w-[640px] text-center font-mono text-xs space-y-4">
          {/* Level 0: Root */}
          <div className="flex justify-center">
            <span className="px-4 py-1.5 rounded-xl bg-violet-600 text-white font-bold border border-violet-500 shadow-sm">
              fib(6)
            </span>
          </div>

          {/* Level 1 */}
          <div className="flex justify-around px-8">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-[10px] font-bold">┌── trái</span>
              <span className="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold border border-indigo-500 shadow-xs">
                fib(5)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-[10px] font-bold">phải ──┐</span>
              <span className={`px-3.5 py-1.5 rounded-xl font-bold border transition-all ${
                highlightDuplicate
                  ? "bg-rose-100 text-rose-900 border-rose-300 ring-2 ring-rose-400/50 shadow-xs"
                  : "bg-indigo-600 text-white border-indigo-500 shadow-xs"
              }`}>
                fib(4) ⚠️ Lần 1
              </span>
            </div>
          </div>

          {/* Level 2 */}
          <div className="grid grid-cols-4 gap-2 text-[11px]">
            <div className="flex flex-col items-center">
              <span className="px-3 py-1.5 rounded-xl bg-indigo-100 text-indigo-900 border border-indigo-300 font-bold shadow-xs">
                fib(4)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className={`px-3 py-1.5 rounded-xl font-bold border transition-all ${
                highlightDuplicate
                  ? "bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400/50 shadow-xs"
                  : "bg-indigo-100 text-indigo-900 border-indigo-300 shadow-xs"
              }`}>
                fib(3) ⚠️ Lần 1
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className={`px-3 py-1.5 rounded-xl font-bold border transition-all ${
                highlightDuplicate
                  ? "bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400/50 shadow-xs"
                  : "bg-indigo-100 text-indigo-900 border-indigo-300 shadow-xs"
              }`}>
                fib(3) ⚠️ Lần 2
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold shadow-xs">
                fib(2) = 1
              </span>
            </div>
          </div>

          {/* Level 3: Leaf Nodes Preview / Legend */}
          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-center gap-4 flex-wrap font-sans">
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 inline-block" /> Gốc ban đầu
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Lời gọi trùng fib(4) (2 lần)
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Lời gọi trùng fib(3) (3 lần)
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Base Case fib(2), fib(1)
            </span>
          </div>
        </div>
      </div>

      {/* Lesson Takeaway Card */}
      <div className="mt-5 bg-rose-50/70 border border-rose-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div className="text-xs md:text-sm text-rose-950 leading-relaxed">
          <strong className="font-semibold text-rose-900">Bài học rút ra từ Giáo trình: </strong>
          Cách viết đệ quy Fibonacci tuy <em>rất thanh lịch (elegant)</em> nhưng <em>cực kỳ kém hiệu quả (extremely inefficient)</em> vì không lưu lại kết quả đã tính. Để giải quyết, người ta dùng <strong>Vòng lặp Iterative O(n)</strong> hoặc <strong>Quy hoạch động (Memoization / Dynamic Programming)</strong>.
        </div>
      </div>
    </div>
  );
}
