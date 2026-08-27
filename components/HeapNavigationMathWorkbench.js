"use client";

import React, { useState } from "react";
import { Compass, ArrowUp, ArrowDownLeft, ArrowDownRight, CheckCircle2, AlertTriangle } from "lucide-react";

export default function HeapNavigationMathWorkbench() {
  const heapsize = 9;
  const [selectedIdx, setSelectedIdx] = useState(4); // default node 4 (val: 17)

  // Sample heap values for 1..9: [null, 90, 19, 36, 17, 3, 25, 1, 2, 7]
  const heapVals = [null, 90, 19, 36, 17, 3, 25, 1, 2, 7];

  const parentIdx = selectedIdx === 1 ? null : Math.floor(selectedIdx / 2);
  const leftIdx = 2 * selectedIdx <= heapsize ? 2 * selectedIdx : null;
  const rightIdx = 2 * selectedIdx + 1 <= heapsize ? 2 * selectedIdx + 1 : null;

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-sky-700" />
            <span>Phép Toán Điều Hướng (Mục 4.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
            Bàn Làm Việc: parent(i), left(i), right(i) &amp; Kiểm Tra Biên
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Không cần lưu trữ con trỏ tốn bộ nhớ! Mọi vị trí cha và con đều được tính toán trực tiếp trong <strong>O(1)</strong> qua các phép nhân chia 2.
          </p>
        </div>

        {/* Node Index Quick Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100 rounded-2xl border border-slate-200 self-start md:self-auto text-xs font-mono">
          <span className="text-slate-500 px-2 text-[10px] font-semibold">Chọn i:</span>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`w-7 h-7 rounded-xl font-bold transition-all flex items-center justify-center shadow-sm ${
                selectedIdx === idx
                  ? "bg-sky-600 text-white scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {idx}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Node Summary Bar */}
      <div className="p-5 rounded-2xl bg-white border border-sky-100 flex flex-wrap items-center justify-between gap-4 mb-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-300 text-sky-950 font-mono font-extrabold text-lg flex items-center justify-center shadow-sm">
            {selectedIdx}
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">
              Đang khảo sát nút: <strong className="text-amber-900 font-mono">A[{selectedIdx}] = {heapVals[selectedIdx]}</strong>
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              {selectedIdx === 1 ? "Đây là Gốc (Root) của cây" : `Nằm ở tầng Level ${Math.floor(Math.log2(selectedIdx))}`}
            </div>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-600">
          Sức chứa hiện tại: <span className="text-emerald-800 font-bold">heapsize = {heapsize}</span>
        </div>
      </div>

      {/* 3 Math Operation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Parent Card */}
        <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
            <span className="flex items-center gap-1.5 text-amber-900 font-bold">
              <ArrowUp className="w-3.5 h-3.5 text-amber-700" />
              parent(i) = ⌊i / 2⌋
            </span>
            <span className="text-[10px] text-slate-500 font-semibold">Cha</span>
          </div>

          <div className="py-2">
            {parentIdx !== null ? (
              <div>
                <div className="text-sm font-mono font-bold text-slate-800">
                  ⌊{selectedIdx} / 2⌋ = <span className="text-amber-900 font-extrabold text-base">Index {parentIdx}</span>
                </div>
                <div className="text-xs text-slate-600 font-mono mt-1">
                  Giá trị cha: <strong className="text-slate-900">A[{parentIdx}] = {heapVals[parentIdx]}</strong>
                </div>
              </div>
            ) : (
              <div className="text-xs text-amber-900 font-mono font-bold py-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                Root (i = 1) không có parent!
              </div>
            )}
          </div>
        </div>

        {/* Left Child Card */}
        <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
            <span className="flex items-center gap-1.5 text-sky-900 font-bold">
              <ArrowDownLeft className="w-3.5 h-3.5 text-sky-700" />
              left(i) = 2 * i
            </span>
            <span className="text-[10px] text-slate-500 font-semibold">Con Trái</span>
          </div>

          <div className="py-2">
            {leftIdx !== null ? (
              <div>
                <div className="text-sm font-mono font-bold text-slate-800">
                  2 * {selectedIdx} = <span className="text-sky-900 font-extrabold text-base">Index {leftIdx}</span>
                </div>
                <div className="text-xs text-slate-600 font-mono mt-1">
                  Giá trị con trái: <strong className="text-slate-900">A[{leftIdx}] = {heapVals[leftIdx]}</strong>
                </div>
              </div>
            ) : (
              <div className="text-xs text-rose-900 font-mono font-bold py-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                NULL (2 * {selectedIdx} = {2 * selectedIdx} &gt; heapsize {heapsize})
              </div>
            )}
          </div>
        </div>

        {/* Right Child Card */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
            <span className="flex items-center gap-1.5 text-emerald-950 font-bold">
              <ArrowDownRight className="w-3.5 h-3.5 text-emerald-700" />
              right(i) = 2 * i + 1
            </span>
            <span className="text-[10px] text-slate-500 font-semibold">Con Phải</span>
          </div>

          <div className="py-2">
            {rightIdx !== null ? (
              <div>
                <div className="text-sm font-mono font-bold text-slate-800">
                  2 * {selectedIdx} + 1 = <span className="text-emerald-900 font-extrabold text-base">Index {rightIdx}</span>
                </div>
                <div className="text-xs text-slate-600 font-mono mt-1">
                  Giá trị con phải: <strong className="text-slate-900">A[{rightIdx}] = {heapVals[rightIdx]}</strong>
                </div>
              </div>
            ) : (
              <div className="text-xs text-rose-900 font-mono font-bold py-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                NULL (2 * {selectedIdx} + 1 = {2 * selectedIdx + 1} &gt; heapsize {heapsize})
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide Takeaways */}
      <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs font-sans space-y-1.5 shadow-sm">
        <div className="flex items-center gap-2 text-sky-950 font-bold font-mono">
          <CheckCircle2 className="w-4 h-4 text-sky-700" />
          <span>Quy Tắc Điều Hướng Cần Ghi Nhớ (Slide 4.2):</span>
        </div>
        <p className="text-slate-700 leading-relaxed font-mono text-[11px]">
          • <code>parent(i) = i / 2</code> (trừ khi i = 1 là root)<br />
          • <code>left(i) = 2 * i</code> (Không có left child khi: <code>left(i) &gt; heapsize</code>)<br />
          • <code>right(i) = 2 * i + 1</code> (Không có right child khi: <code>right(i) &gt; heapsize</code>)
        </p>
      </div>
    </div>
  );
}
