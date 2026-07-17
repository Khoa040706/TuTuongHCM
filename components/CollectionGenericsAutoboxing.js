"use client";
import React, { useState } from "react";
import { ArrowLeftRight, Cpu, Eye, HelpCircle, Layers, Play, RefreshCw } from "lucide-react";

export default function CollectionGenericsAutoboxing() {
  const [mode, setMode] = useState("AUTOBOX"); // "AUTOBOX" | "UNBOX"
  const [step, setStep] = useState(0); // 0: idle, 1: transfer start, 2: completed
  const [log, setLog] = useState("Chọn chiều chuyển đổi và nhấn 'Bắt đầu mô phỏng'.");

  const runSim = () => {
    setStep(1);
    if (mode === "AUTOBOX") {
      setLog("Đang đóng gói: Lấy giá trị thô primitive int = 7 từ Stack để chuyển thành đối tượng Integer...");
      setTimeout(() => {
        setStep(2);
        setLog("Autoboxing thành công: compiler tự động bao bọc giá trị 7 vào đối tượng Integer ở Heap.");
      }, 1500);
    } else {
      setLog("Đang mở gói: Lấy giá trị từ đối tượng Integer ở Heap để chuyển về kiểu nguyên thủy int...");
      setTimeout(() => {
        setStep(2);
        setLog("Unboxing thành công: compiler tự động trích xuất giá trị 5 từ đối tượng và gán cho biến int ở Stack.");
      }, 1500);
    }
  };

  const handleReset = () => {
    setStep(0);
    setLog("Chọn chiều chuyển đổi và nhấn 'Bắt đầu mô phỏng'.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-teal-400" />
            <span>Trình Giả Lập Autoboxing & Unboxing Bộ Nhớ</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Minh họa cách compiler tự động chuyển đổi giữa kiểu dữ liệu nguyên thủy và đối tượng bao bọc
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => { setMode("AUTOBOX"); handleReset(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === "AUTOBOX" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Autoboxing (int ➔ Integer)
          </button>
          <button
            onClick={() => { setMode("UNBOX"); handleReset(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === "UNBOX" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Unboxing (Integer ➔ int)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Memory map */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[220px]">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-4 font-mono">
              Quy trình di chuyển giá trị trong RAM
            </span>

            <div className="flex justify-between items-center bg-slate-900 p-4 rounded-xl border border-slate-850 relative">
              {/* Stack side */}
              <div className="text-center font-mono w-28">
                <span className="text-[8px] text-slate-600 block mb-1 uppercase font-bold">Stack (Primitive)</span>
                <div className={`p-3 rounded-lg border text-center font-bold text-sm ${
                  mode === "AUTOBOX"
                    ? step === 1 ? "bg-slate-950 border-slate-800 text-slate-600" : "bg-teal-950 border-teal-500 text-teal-300"
                    : step === 2 ? "bg-teal-950 border-teal-500 text-teal-300 scale-105" : "bg-slate-950 border-slate-800 text-slate-650"
                }`}>
                  {mode === "AUTOBOX" ? "int = 7" : step === 2 ? "int = 5" : "int = ?"}
                </div>
              </div>

              {/* Transfer arrow animation */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-1 bg-slate-800 rounded relative overflow-hidden">
                  {step === 1 && (
                    <div className={`absolute top-0 bottom-0 w-6 bg-teal-400 rounded animate-ping ${
                      mode === "AUTOBOX" ? "left-0" : "right-0"
                    }`}></div>
                  )}
                </div>
                <span className="text-[8px] text-slate-500 font-mono mt-1">
                  {mode === "AUTOBOX" ? "Tự động Autobox" : "Tự động Unbox"}
                </span>
              </div>

              {/* Heap side */}
              <div className="text-center font-mono w-32">
                <span className="text-[8px] text-slate-600 block mb-1 uppercase font-bold">Heap (Wrapper Object)</span>
                <div className={`p-3 rounded-lg border text-center font-bold text-xs ${
                  mode === "AUTOBOX"
                    ? step === 2 ? "bg-teal-950 border-teal-500 text-teal-300 scale-105" : "bg-slate-950 border-slate-800 text-slate-650"
                    : step === 0 ? "bg-teal-950 border-teal-500 text-teal-300" : "bg-slate-950 border-slate-800 text-slate-600"
                }`}>
                  {mode === "AUTOBOX"
                    ? step === 2 ? "Integer(7)" : "Integer(?)"
                    : "Integer(5)"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={runSim}
              disabled={step === 1}
              className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg transition-all disabled:opacity-50 select-none"
            >
              Bắt đầu mô phỏng
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
            >
              Đặt lại
            </button>
          </div>
        </div>

        {/* Code & explanation */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Đoạn mã tương ứng
            </span>

            {mode === "AUTOBOX" ? (
              <div className="space-y-4">
                <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto">
{`// Autoboxing khi gán trị
Integer intObj = 7; 

// compiler tự động biên dịch thành:
// Integer intObj = Integer.valueOf(7);`}
                </pre>
                <p className="text-xs text-slate-450 leading-relaxed">
                  * **Ngữ cảnh:** Xảy ra khi gán giá trị primitive cho biến wrapper hoặc truyền giá trị primitive vào tham số hàm yêu cầu wrapper class.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto">
{`// Unboxing khi gán về primitive
Integer intObj = new Integer(5);
int i = intObj;

// compiler tự động biên dịch thành:
// int i = intObj.intValue();`}
                </pre>
                <p className="text-xs text-slate-450 leading-relaxed">
                  * **Ngữ cảnh:** Xảy ra khi gán đối tượng wrapper cho biến primitive hoặc truyền đối tượng wrapper vào tham số hàm yêu cầu primitive.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logger */}
      <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-400 font-mono">
        {log}
      </div>
    </div>
  );
}
