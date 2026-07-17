"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, Eye, HelpCircle, Layers, Play, RefreshCw, Trash2 } from "lucide-react";

export default function CollectionArrayReconstruction() {
  const [step, setStep] = useState(0); // 0: idle, 1: allocate new, 2: copying, 3: update ref, 4: garbage collected
  const [log, setLog] = useState("Nhấn 'Chạy tái cấu trúc' để xem cách JVM cấp phát và sao chép mảng mới.");

  const runRecon = () => {
    setStep(1);
    setLog("Bước 1: JVM nhận lệnh cấp phát. Tạo mảng mới 5 ô nhớ trên Heap: new int[5] (giá trị mặc định là 0).");

    setTimeout(() => {
      setStep(2);
      setLog("Bước 2: Sao chép dữ liệu từ mảng cũ sang mảng mới: temp[0]=arr[0], temp[1]=arr[1], temp[2]=arr[2].");
    }, 1500);

    setTimeout(() => {
      setStep(3);
      setLog("Bước 3: Gán lại tham chiếu: arr = temp. Biến arr ở Stack trỏ sang mảng mới. Mảng cũ mất tham chiếu.");
    }, 3000);

    setTimeout(() => {
      setStep(4);
      setLog("Bước 4: Bộ dọn rác Garbage Collector quét qua Heap, tự động giải phóng vùng nhớ của mảng cũ. Hoàn tất!");
    }, 4500);
  };

  const handleReset = () => {
    setStep(0);
    setLog("Nhấn 'Chạy tái cấu trúc' để xem cách JVM cấp phát và sao chép mảng mới.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span>Mô Phỏng Tái Cấu Trúc Kích Thước Mảng (Array Reconstruction)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Minh họa quy trình cấp phát, sao chép dữ liệu và dọn dẹp bộ nhớ RAM khi mảng co giãn
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={runRecon}
            disabled={step > 0 && step < 4}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow transition-all disabled:opacity-50 select-none"
          >
            Chạy tái cấu trúc
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-850 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-450 transition-all select-none"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Stack frame & variables */}
        <div className="lg:col-span-4 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              JVM Stack (Tham chiếu)
            </span>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-850 relative">
                <span className="text-[9px] text-slate-500 block mb-1">Khai báo chính: int[] arr</span>
                <span className="text-sm font-bold text-sky-400">
                  {step >= 3 ? "@HeapRef_ArrayNew" : "@HeapRef_ArrayOld"}
                </span>
                
                {step === 3 && (
                  <div className="absolute inset-0 border border-sky-500 rounded-lg animate-pulse"></div>
                )}
              </div>

              {step >= 1 && step < 3 && (
                <div className="p-3 bg-slate-900 border border-dashed border-indigo-500/40 rounded-lg">
                  <span className="text-[9px] text-indigo-400 block mb-1">Mảng tạm: int[] temp</span>
                  <span className="text-sm font-bold text-indigo-400">@HeapRef_ArrayNew</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Heap Arrays blocks */}
        <div className="lg:col-span-8 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[220px]">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Heap Memory Objects
            </span>

            <div className="space-y-4">
              {/* Old Array of size 3 */}
              {step < 4 && (
                <div className={`p-3.5 rounded-xl border transition-all duration-700 relative ${
                  step >= 3 
                    ? "bg-rose-950/20 border-rose-950 text-slate-500 opacity-40 scale-95" 
                    : "bg-slate-900 border-slate-850 text-slate-200"
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-slate-550 font-bold">MẢNG CŨ (size = 3)</span>
                    {step >= 3 && (
                      <span className="text-[8px] uppercase font-bold text-rose-500 flex items-center gap-1">
                        <Trash2 className="w-3 h-3" />
                        <span>Mất tham chiếu - Chờ dọn rác</span>
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 font-mono text-xs">
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">10</div>
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">20</div>
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">30</div>
                  </div>
                </div>
              )}

              {/* New Array of size 5 */}
              {step >= 1 && (
                <div className={`p-3.5 rounded-xl border transition-all duration-700 ${
                  step === 3 
                    ? "bg-emerald-950/40 border-emerald-500 text-emerald-200 scale-105 shadow shadow-emerald-500/10" 
                    : "bg-slate-900 border-slate-850 text-slate-200"
                }`}>
                  <span className="text-[9px] font-mono text-indigo-400 font-bold block mb-2">
                    MẢNG MỚI ĐƯỢC CẤP PHÁT (size = 5)
                  </span>
                  
                  <div className="flex gap-2 font-mono text-xs">
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">
                      {step >= 2 ? "10" : "0"}
                    </div>
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">
                      {step >= 2 ? "20" : "0"}
                    </div>
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">
                      {step >= 2 ? "30" : "0"}
                    </div>
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">0</div>
                    <div className="px-3 py-1 bg-slate-950 rounded border border-slate-850 text-center min-w-[36px]">0</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-300 font-mono">
            {log}
          </div>
        </div>
      </div>
    </div>
  );
}
