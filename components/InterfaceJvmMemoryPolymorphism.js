"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, HelpCircle, Layers, ShieldAlert, Sparkles, Info } from "lucide-react";

export default function InterfaceJvmMemoryPolymorphism() {
  const [activeLine, setActiveLine] = useState(0); // 0: uninitialized, 1: declared, 2: assigned cartesian, 3: assigned polar
  const [log, setLog] = useState("Nhấn các nút chạy dòng code để xem biến động của bộ nhớ JVM Stack/Heap.");

  const runLine = (line) => {
    setActiveLine(line);
    if (line === 1) {
      setLog("Đã chạy dòng 1: Khai báo tham chiếu Complex a. JVM tạo ô nhớ 'a' ở Stack, ban đầu trỏ về null.");
    } else if (line === 2) {
      setLog("Đã chạy dòng 2: a = new ComplexCart(10.0, 12.0). Cấp phát đối tượng Cartesian trên Heap. Mũi tên tham chiếu trỏ đến ô nhớ Heap đó.");
    } else if (line === 3) {
      setLog("Đã chạy dòng 3: a = new ComplexPolar(5.0, 0.46). Cấp phát đối tượng Polar trên Heap. Mũi tên tham chiếu của 'a' lập tức đổi hướng.");
    }
  };

  const resetAll = () => {
    setActiveLine(0);
    setLog("Nhấn các nút chạy dòng code để xem biến động của bộ nhớ JVM Stack/Heap.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <span>JVM Memory Simulator: Tính Đa Hình</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Trực quan hóa mối liên kết giữa bộ nhớ Stack và Heap khi khai báo biến kiểu Interface
          </p>
        </div>

        <button
          onClick={resetAll}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
        >
          Đặt lại bộ nhớ
        </button>
      </div>

      {/* Code Editor Panel */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 mb-6 font-mono text-xs md:text-sm leading-relaxed space-y-1 relative">
        <div className="absolute top-2 right-2 text-[10px] text-slate-500 font-bold tracking-widest uppercase">
          Java Code Runner
        </div>
        
        <div onClick={() => runLine(1)} className={`cursor-pointer p-1 rounded transition-colors ${
          activeLine === 1 ? "bg-sky-950/40 text-sky-300 font-semibold border-l-2 border-sky-500 pl-2" : "text-slate-450 hover:bg-slate-900/40 pl-2"
        }`}>
          <span className="text-slate-600 mr-3">1</span>
          <span>Complex a; <span className="text-slate-500">// Khai báo biến kiểu Interface</span></span>
        </div>

        <div onClick={() => runLine(2)} className={`cursor-pointer p-1 rounded transition-colors ${
          activeLine === 2 ? "bg-sky-950/40 text-sky-300 font-semibold border-l-2 border-sky-500 pl-2" : "text-slate-450 hover:bg-slate-900/40 pl-2"
        }`}>
          <span className="text-slate-600 mr-3">2</span>
          <span>a = new ComplexCart(10.0, 12.0); <span className="text-slate-500">// Gán đối tượng Cartesian</span></span>
        </div>

        <div onClick={() => runLine(3)} className={`cursor-pointer p-1 rounded transition-colors ${
          activeLine === 3 ? "bg-sky-950/40 text-sky-300 font-semibold border-l-2 border-sky-500 pl-2" : "text-slate-450 hover:bg-slate-900/40 pl-2"
        }`}>
          <span className="text-slate-600 mr-3">3</span>
          <span>a = new ComplexPolar(5.0, 0.46); <span className="text-slate-500">// Đa hình: Gán sang đối tượng Polar</span></span>
        </div>
      </div>

      {/* Simulator Layout Stack vs Heap */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-950/80 p-6 rounded-xl border border-slate-850 mb-6 min-h-[220px]">
        {/* JVM STACK */}
        <div className="md:col-span-4 flex flex-col items-center">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 block">
            JVM Stack (Biến cục bộ)
          </span>
          <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
            <div className="w-full p-3 bg-slate-950 rounded-lg border border-slate-850 flex justify-between items-center relative">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold">Kiểu khai báo: Complex</span>
                <span className="text-sm font-bold font-mono text-sky-400">a</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {activeLine === 0 ? "Chưa tạo" : activeLine === 1 ? "null" : activeLine === 2 ? "@ComplexCart" : "@ComplexPolar"}
              </span>
              
              {/* Highlight active cell */}
              {activeLine > 0 && (
                <div className="absolute inset-0 border border-sky-500/40 rounded-lg animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        {/* CONNECTION FLOW ARROW */}
        <div className="md:col-span-2 flex justify-center items-center h-12 md:h-full">
          {activeLine >= 2 ? (
            <div className="flex items-center gap-1 text-sky-500 animate-pulse">
              <span className="text-xs font-bold font-mono">Trỏ đến</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          ) : (
            <span className="text-xs text-slate-600 font-mono">Không kết nối</span>
          )}
        </div>

        {/* JVM HEAP */}
        <div className="md:col-span-6 flex flex-col items-center">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 block">
            JVM Heap (Vùng nhớ chứa đối tượng thực tế)
          </span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Cartesian Object */}
            <div className={`p-4 rounded-xl border transition-all duration-500 relative ${
              activeLine === 2 
                ? "bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-500/10 text-indigo-200" 
                : "bg-slate-900/40 border-slate-850 text-slate-500"
            }`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold font-mono">ComplexCart</span>
                <span className="text-[8px] opacity-60">@HeapRef_Cart</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono opacity-80">
                <div>double real = 10.0;</div>
                <div>double imag = 12.0;</div>
              </div>
              {activeLine === 2 && (
                <Sparkles className="w-4 h-4 text-indigo-400 absolute top-2 right-2 animate-bounce" />
              )}
            </div>

            {/* Polar Object */}
            <div className={`p-4 rounded-xl border transition-all duration-500 relative ${
              activeLine === 3 
                ? "bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-500/10 text-emerald-200" 
                : "bg-slate-900/40 border-slate-850 text-slate-500"
            }`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold font-mono">ComplexPolar</span>
                <span className="text-[8px] opacity-60">@HeapRef_Polar</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono opacity-80">
                <div>double mag = 5.0;</div>
                <div>double ang = 0.46;</div>
              </div>
              {activeLine === 3 && (
                <Sparkles className="w-4 h-4 text-emerald-400 absolute top-2 right-2 animate-bounce" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Simulator logs and highlights */}
      <div className="flex gap-3 items-center bg-slate-950/50 p-4 rounded-xl border border-slate-850 mb-4">
        <Info className="w-5 h-5 text-sky-400 flex-shrink-0" />
        <p className="text-xs leading-relaxed font-mono">{log}</p>
      </div>

      {/* Traps Alert Callout Box */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 flex gap-3 items-start">
        <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider block">
            Cạm bẫy trắc nghiệm lý thuyết ôn thi
          </span>
          <p className="text-xs text-slate-350 mt-1 leading-relaxed">
            **Nhớ kỹ quy tắc vàng:** Biến khai báo (`Complex a`) thuộc kiểu Interface **được phép** trỏ đến bất kỳ đối tượng của lớp hiện thực nào của nó (`ComplexCart` hoặc `ComplexPolar`). Đây chính là cơ chế **Đa hình (Polymorphism)**. Đề thi cực kỳ hay gài bẫy hỏi xem cú pháp gán này có hợp lệ không!
          </p>
        </div>
      </div>
    </div>
  );
}
