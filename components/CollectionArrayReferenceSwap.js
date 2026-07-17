"use client";
import React, { useState } from "react";
import { ArrowRight, Cpu, Eye, HelpCircle, Layers, MemoryStick, Play, RotateCcw } from "lucide-react";

export default function CollectionArrayReferenceSwap() {
  const [step, setStep] = useState(0); // 0: idle, 1: list declared, 2: swap frame created, 3: temp assigned, 4: arr[0] swapped, 5: arr[2] swapped/complete
  const [arrayData, setArrayData] = useState([22, 55, 33]);
  const [tempVal, setTempVal] = useState(null);
  const [log, setLog] = useState("Nhấn 'Chạy bước tiếp theo' để xem cách tham chiếu hoạt động trong bộ nhớ.");

  const handleStep = () => {
    if (step >= 5) return;

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep === 1) {
      setLog("Bước 1: main() khai báo biến list. Cấp phát mảng [22, 55, 33] ở Heap. Biến list ở Stack trỏ vào Heap.");
    } else if (nextStep === 2) {
      setLog("Bước 2: Gọi swap(list, 0, 2). Tạo Stack Frame mới của swap(). Tham số 'arr' nhận giá trị tham chiếu và trỏ cùng vào mảng Heap.");
    } else if (nextStep === 3) {
      setTempVal(arrayData[0]);
      setLog(`Bước 3: Chạy 'int temp = arr[0]'. Biến temp lưu tạm giá trị ${arrayData[0]}.`);
    } else if (nextStep === 4) {
      const newData = [...arrayData];
      newData[0] = arrayData[2];
      setArrayData(newData);
      setLog(`Bước 4: Chạy 'arr[0] = arr[2]'. Giá trị tại index 0 ở Heap được cập nhật thành ${arrayData[2]}.`);
    } else if (nextStep === 5) {
      const newData = [...arrayData];
      newData[2] = tempVal;
      setArrayData(newData);
      setLog(`Bước 5: Chạy 'arr[2] = temp'. Giá trị tại index 2 ở Heap được cập nhật thành ${tempVal}. Hoàn tất hoán đổi!`);
    }
  };

  const handleReset = () => {
    setStep(0);
    setArrayData([22, 55, 33]);
    setTempVal(null);
    setLog("Nhấn 'Chạy bước tiếp theo' để xem cách tham chiếu hoạt động trong bộ nhớ.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <span>JVM Memory: Truyền Tham Chiếu Mảng (Reference Passing)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Trực quan hóa hoạt động hoán đổi phần tử của hàm swap(list, 0, 2)
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleStep}
            disabled={step >= 5}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-md transition-all disabled:opacity-50 select-none"
          >
            Chạy bước tiếp theo
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-850 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-400 transition-all select-none"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simulator Layout Stack vs Heap */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
        {/* JVM STACK */}
        <div className="md:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              JVM Stack (Local Variables)
            </span>

            <div className="space-y-4">
              {/* swap() frame */}
              {step >= 2 && (
                <div className="p-3 bg-slate-900 border-l-4 border-indigo-500 rounded-lg border border-slate-850">
                  <div className="text-[9px] text-indigo-400 font-bold font-mono mb-2 uppercase">Stack Frame: swap()</div>
                  <div className="space-y-1.5 font-mono text-[10px] text-slate-300">
                    <div className="flex justify-between">
                      <span>arr (reference):</span>
                      <span className="text-indigo-400 font-bold">@Heap_Array</span>
                    </div>
                    <div className="flex justify-between">
                      <span>i (int):</span>
                      <span>0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>j (int):</span>
                      <span>2</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-850 pt-1 mt-1">
                      <span>temp (int):</span>
                      <span className="text-amber-400 font-bold">{tempVal !== null ? tempVal : "null"}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* main() frame */}
              <div className="p-3 bg-slate-900 border-l-4 border-slate-600 rounded-lg border border-slate-850">
                <div className="text-[9px] text-slate-550 font-bold font-mono mb-2 uppercase">Stack Frame: main()</div>
                <div className="space-y-1.5 font-mono text-[10px] text-slate-350">
                  <div className="flex justify-between">
                    <span>list (reference):</span>
                    <span className="text-slate-400">
                      {step >= 1 ? "@Heap_Array" : "null"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEAP MEMORY */}
        <div className="md:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              JVM Heap (Đối tượng thực tế)
            </span>

            {step >= 1 ? (
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-850 relative">
                <span className="text-[9px] text-indigo-400 font-mono font-bold block mb-3">MẢNG list / arr @Heap_Array</span>
                
                <div className="flex gap-3 font-mono text-xs">
                  {arrayData.map((val, idx) => {
                    const isTarget = step >= 3 && (idx === 0 || idx === 2);
                    return (
                      <div
                        key={idx}
                        className={`flex-1 p-3 rounded-lg border text-center transition-all ${
                          isTarget 
                            ? "bg-indigo-950/40 border-indigo-500 text-indigo-200" 
                            : "bg-slate-950 border-slate-850 text-slate-400"
                        }`}
                      >
                        <span className="text-[9px] block text-slate-600">index [{idx}]</span>
                        <span className="text-sm font-bold block mt-1">{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-700 font-mono text-xs">
                Chờ khởi tạo mảng ở main()...
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-300 font-mono">
            {log}
          </div>
        </div>
      </div>
    </div>
  );
}
