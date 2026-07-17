"use client";
import React, { useState } from "react";
import { AlertTriangle, ArrowRight, Cpu, Eye, HelpCircle, Layers, MemoryStick, Play } from "lucide-react";

export default function CollectionGenericsWrapperType() {
  const [selectedCell, setSelectedCell] = useState(null); // null | "primitive" | "wrapper"

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-rose-400 animate-pulse" />
            <span>Phân Biệt Bộ Nhớ: Primitive Type vs Wrapper Class</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Click vào từng kiểu để xem sơ đồ ô nhớ vật lý trên Stack & Heap
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* RAM block diagram */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[220px]">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Bản đồ ô nhớ RAM (Stack vs Heap)
            </span>

            <div className="grid grid-cols-2 gap-4">
              {/* Stack Side */}
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-850">
                <span className="text-[9px] text-slate-550 font-bold block mb-2 font-mono">JVM STACK</span>
                
                <div className="space-y-3 font-mono text-[10px]">
                  {/* Primitive variable */}
                  <div
                    onClick={() => setSelectedCell("primitive")}
                    className={`p-2.5 rounded border cursor-pointer transition-all ${
                      selectedCell === "primitive"
                        ? "bg-amber-950/40 border-amber-500 text-amber-200 scale-105"
                        : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}
                  >
                    <span className="block text-[8px] text-slate-650">int a (Primitive)</span>
                    <span className="font-bold text-xs text-amber-400">5</span>
                  </div>

                  {/* Wrapper variable */}
                  <div
                    onClick={() => setSelectedCell("wrapper")}
                    className={`p-2.5 rounded border cursor-pointer transition-all ${
                      selectedCell === "wrapper"
                        ? "bg-sky-950/40 border-sky-500 text-sky-200 scale-105"
                        : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}
                  >
                    <span className="block text-[8px] text-slate-650">Integer b (Reference)</span>
                    <span className="font-bold text-xs text-sky-400">@HeapRef_Integer</span>
                  </div>
                </div>
              </div>

              {/* Heap Side */}
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-850 flex flex-col justify-center">
                <span className="text-[9px] text-slate-550 font-bold block mb-2 font-mono">JVM HEAP</span>

                {selectedCell === "wrapper" ? (
                  <div className="p-3 bg-sky-950/30 border border-sky-500/30 rounded-lg font-mono text-[10px] text-sky-300 animate-fade-in text-center">
                    <span className="block text-[8px] opacity-60">Integer Object</span>
                    <span className="font-bold text-xs">value = 5</span>
                  </div>
                ) : (
                  <div className="text-center py-6 text-slate-700 font-mono text-[10px] leading-relaxed">
                    {selectedCell === "primitive" 
                      ? "Primitive type lưu thô trực tiếp ở Stack, không có đối tượng nào ở Heap!"
                      : "Click chọn kiểu biến ở Stack để xem..."}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Rules & Warnings */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Quy tắc tham chiếu Generics
            </span>

            <p className="text-xs text-slate-350 leading-relaxed mb-4">
              Do Generics chỉ hoạt động trên kiểu dữ liệu tham chiếu (Reference Type), việc khai báo kiểu nguyên thủy trực tiếp làm tham số kiểu là hoàn toàn **bị cấm**.
            </p>

            <div className="space-y-2.5 font-mono text-[10px]">
              {/* Wrong code card */}
              <div className="p-3 bg-rose-950/20 border-l-4 border-rose-500 rounded-r-lg text-rose-400">
                <div className="font-bold">❌ SAI (Lỗi biên dịch):</div>
                <div className="mt-1">Pair&lt;<span className="underline decoration-rose-500">int</span>&gt; twoInt = new Pair&lt;&gt;(-5, 20);</div>
              </div>

              {/* Correct code card */}
              <div className="p-3 bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-lg text-emerald-400">
                <div className="font-bold">✓ ĐÚNG:</div>
                <div className="mt-1">Pair&lt;Integer&gt; twoInt = new Pair&lt;&gt;(-5, 20);</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flashing exam warning alert */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 flex gap-3 items-start animate-pulse">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider block">
            🚨 Cạm bẫy thi cử: Cấm dùng Primitive Type
          </span>
          <p className="text-xs text-slate-350 mt-1 leading-relaxed">
            Đề thi trắc nghiệm lập trình Java vô cùng hay lồng ghép các khai báo kiểu nguyên thủy như <code>Pair&lt;double&gt;</code> hoặc <code>Pair&lt;char&gt;</code> để lừa học sinh. Hãy nhớ rằng Generics **chỉ chấp nhận các kiểu Class** như <code>Double</code>, <code>Character</code>...
          </p>
        </div>
      </div>
    </div>
  );
}
