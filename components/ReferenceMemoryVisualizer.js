"use client";
import React, { useState } from "react";
import { ArrowRight, RefreshCw, Sparkles, Check, X, ShieldAlert, Cpu } from "lucide-react";

export default function ReferenceMemoryVisualizer() {
  const [isReassigned, setIsReassigned] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
              Mô phỏng Bộ nhớ IV.3
            </span>
            <span className="text-xs text-slate-500 font-mono">Stack vs Heap & Object References</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
            Phân biệt Primitive vs Reference & Phép so sánh <code className="text-purple-700 font-mono">==</code>
          </h3>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsReassigned(!isReassigned)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 shadow-sm transition-all ${
              isReassigned
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isReassigned ? "Reset lại ban đầu" : "Chạy lệnh: w = y;"}</span>
          </button>
        </div>
      </div>

      {/* Code Block Snippet */}
      <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-xs mb-5 border border-slate-800 flex flex-col gap-1">
        <div className="text-slate-400">// Đoạn code minh họa:</div>
        <div>
          <span className="text-purple-400">Integer</span> y = <span className="text-purple-400">new Integer</span>(<span className="text-amber-400">20</span>);
        </div>
        <div>
          <span className="text-purple-400">Integer</span> w = <span className="text-purple-400">new Integer</span>(<span className="text-amber-400">20</span>);
        </div>
        <div className={isReassigned ? "bg-purple-900/60 text-purple-200 px-2 py-0.5 rounded font-bold border-l-2 border-purple-400" : ""}>
          {isReassigned ? "w = y; // Bây giờ w trỏ tới CÙNG object với y" : "// Chưa thực hiện w = y"}
        </div>
        <div>
          <span className="text-sky-400">if</span> (w == y) System.out.println(<span className="text-emerald-300">"w == y"</span>);
        </div>
      </div>

      {/* Stack vs Heap Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* STACK Column */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-800 text-xs font-mono flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-600" />
              STACK MEMORY (Biến tham chiếu)
            </span>
            <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
              Stack Frame
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Variable x (Primitive) */}
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-slate-700">int x</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold border border-emerald-200">
                20 (trực tiếp)
              </span>
            </div>

            {/* Variable y (Reference) */}
            <div className="bg-white p-2.5 rounded-lg border border-purple-200 shadow-sm flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-purple-700">Integer y</span>
              <span className="text-purple-600 font-bold flex items-center gap-1">
                <span>0x10A4</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Variable w (Reference) */}
            <div className="bg-white p-2.5 rounded-lg border border-purple-200 shadow-sm flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-purple-700">Integer w</span>
              <span className="text-purple-600 font-bold flex items-center gap-1">
                <span>{isReassigned ? "0x10A4" : "0x20B8"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* HEAP Column */}
        <div className="bg-purple-50/50 border border-purple-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-purple-200 pb-2">
            <span className="font-bold text-purple-950 text-xs font-mono flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" />
              HEAP MEMORY (Dynamic Objects)
            </span>
            <span className="text-[10px] font-mono font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded">
              Heap Space
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Object 1 (0x10A4) */}
            <div className="bg-white p-3 rounded-lg border-2 border-purple-400 shadow-md font-mono text-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] text-purple-500 font-bold block">Addr: 0x10A4</span>
                <span className="font-bold text-slate-800">Integer(20)</span>
              </div>
              <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">
                {isReassigned ? "Trỏ bởi: y & w" : "Trỏ bởi: y"}
              </span>
            </div>

            {/* Object 2 (0x20B8) */}
            <div
              className={`p-3 rounded-lg border font-mono text-xs flex items-center justify-between transition-all ${
                isReassigned
                  ? "bg-slate-100 border-slate-300 opacity-60 line-through"
                  : "bg-white border-2 border-purple-400 shadow-md"
              }`}
            >
              <div>
                <span className="text-[10px] text-slate-500 font-bold block">Addr: 0x20B8</span>
                <span className="font-bold text-slate-800">Integer(20)</span>
              </div>
              {isReassigned ? (
                <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  Garbage (No reference)
                </span>
              ) : (
                <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">
                  Trỏ bởi: w
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Result Box */}
      <div className="p-4 rounded-xl border flex items-center justify-between gap-3 text-xs font-mono ${isReassigned ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}">
        <div className="flex items-center gap-2">
          {isReassigned ? (
            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <X className="w-5 h-5 text-rose-600 shrink-0" />
          )}
          <div>
            <span className="font-bold block">
              Kết quả phép so sánh <code className="bg-white px-1.5 py-0.5 rounded border border-current">w == y</code>:
            </span>
            <span>
              {isReassigned
                ? "TRUE — Vì w và y cùng chứa địa chỉ 0x10A4 (Cùng trỏ tới 1 object)."
                : "FALSE — Dù 2 object cùng chứa giá trị 20, nhưng nằm ở 2 địa chỉ khác nhau (0x10A4 ≠ 0x20B8)."}
            </span>
          </div>
        </div>
      </div>

      {/* Key Takeaway Callout */}
      <div className="mt-3 text-xs text-slate-600 italic bg-purple-50/50 p-2.5 rounded-lg border border-purple-100">
        📌 <strong>Cần nhớ:</strong> Toán tử <code>==</code> giữa 2 biến tham chiếu chỉ so sánh <strong>địa chỉ (identity)</strong>, không so sánh nội dung. Đây là kiến thức nền tảng để hiểu con trỏ <code>next</code> trong Linked List!
      </div>
    </div>
  );
}
