"use client";
import React, { useState } from "react";
import { Play, SkipForward, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";

export default function InterfacePrePostConditions() {
  const [inputValue, setInputValue] = useState(9.0);
  const [currentStep, setCurrentStep] = useState(0); // 0: Idle, 1: Pre-cond check, 2: Execute body, 3: Post-cond check
  const [simulationLog, setSimulationLog] = useState("");
  const [isError, setIsError] = useState(false);

  const codeLines = [
    { num: 1, text: "// Pre-cond: x >= 0", type: "pre" },
    { num: 2, text: "// Post-cond: Return the square root of x", type: "post" },
    { num: 3, text: "public static double squareRoot(double x) {", type: "header" },
    { num: 4, text: "    double result = Math.sqrt(x);", type: "body" },
    { num: 5, text: "    return result;", type: "body" },
    { num: 6, text: "}", type: "footer" }
  ];

  const resetSimulation = () => {
    setCurrentStep(0);
    setSimulationLog("Chọn giá trị x và nhấn 'Bắt đầu chạy thử từng bước'.");
    setIsError(false);
  };

  const startSimulation = () => {
    setCurrentStep(1);
    setIsError(false);
    setSimulationLog(`[Bắt đầu] Nhận giá trị đầu vào x = ${inputValue}. Kiểm tra Pre-condition...`);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      // Evaluate Pre-condition
      if (inputValue < 0) {
        setIsError(true);
        setCurrentStep(1); // Keep highlighted on pre-cond
        setSimulationLog(`[LỖI PRE-CONDITION] x = ${inputValue} < 0. Vi phạm cam kết đầu vào! Đây là trách nhiệm của Caller (Người gọi hàm) đã không tuân thủ tài liệu.`);
      } else {
        setCurrentStep(2);
        setSimulationLog(`[Pre-condition ĐẠT] ${inputValue} >= 0. Trách nhiệm của Caller được hoàn thành. Đang chuyển vào tính toán...`);
      }
    } else if (currentStep === 2) {
      setCurrentStep(3);
      const computedResult = Math.sqrt(inputValue);
      setSimulationLog(`[Tính toán] Chạy hàm Math.sqrt(${inputValue}) = ${computedResult.toFixed(4)}. Kiểm tra Post-condition...`);
    } else if (currentStep === 3) {
      setCurrentStep(4); // Finished
      const computedResult = Math.sqrt(inputValue);
      setSimulationLog(`[Post-condition ĐẠT] Đã trả về kết quả ${computedResult.toFixed(4)}, bình phương bằng ${inputValue}. Trách nhiệm của Method (Người viết hàm) được thực hiện thành công!`);
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            Hợp Đồng Lập Trình: Pre-conditions & Post-conditions
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Chạy thử từng bước hàm squareRoot để hiểu sự phân chia trách nhiệm giữa Caller và Method
          </p>
        </div>

        {/* Quick controls */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {[-4.0, 0.0, 9.0, 16.0].map((val) => (
              <button
                key={val}
                onClick={() => {
                  setInputValue(val);
                  resetSimulation();
                }}
                disabled={currentStep > 0}
                className={`px-3 py-1 text-xs rounded border transition-all font-mono font-semibold ${
                  inputValue === val
                    ? "bg-sky-600 border-sky-500 text-white"
                    : "bg-slate-800 border-slate-750 text-slate-300 hover:bg-slate-750 disabled:opacity-50"
                }`}
              >
                x = {val < 0 ? val : ` ${val}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Code Panel */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-850 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-850">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Java Code Editor</span>
            <span className="text-[10px] bg-slate-800 text-sky-400 px-2 py-0.5 rounded border border-slate-700 font-mono">squareRoot()</span>
          </div>

          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-1">
            {codeLines.map((line) => {
              let lineClass = "text-slate-400 pl-4 border-l-2 border-transparent";
              
              if (currentStep === 1 && line.type === "pre") {
                lineClass = isError 
                  ? "text-rose-400 bg-rose-950/20 border-l-2 border-rose-500 font-semibold pl-4" 
                  : "text-amber-400 bg-amber-950/20 border-l-2 border-amber-500 font-semibold pl-4";
              } else if (currentStep === 2 && line.type === "body") {
                lineClass = "text-sky-300 bg-sky-950/20 border-l-2 border-sky-500 font-semibold pl-4";
              } else if (currentStep === 3 && line.type === "post") {
                lineClass = "text-emerald-400 bg-emerald-950/20 border-l-2 border-emerald-500 font-semibold pl-4";
              } else if (currentStep === 4 && (line.type === "body" || line.type === "post")) {
                lineClass = "text-slate-300 pl-4 border-l-2 border-transparent";
              }

              return (
                <div key={line.num} className={`flex items-center py-1 transition-all rounded ${lineClass}`}>
                  <span className="w-6 text-slate-600 text-xs select-none">{line.num}</span>
                  <span>{line.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-850 flex gap-2">
            {currentStep === 0 ? (
              <button
                onClick={startSimulation}
                className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg shadow-md shadow-sky-600/10 transition-all"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Bắt đầu chạy</span>
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={isError || currentStep === 4}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-md shadow-emerald-600/10 disabled:opacity-40 disabled:hover:bg-emerald-600 transition-all animate-pulse"
              >
                <SkipForward className="w-3.5 h-3.5" />
                <span>{currentStep === 3 ? "Hoàn thành" : "Bước tiếp theo"}</span>
              </button>
            )}
            <button
              onClick={resetSimulation}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-lg border border-slate-700 transition-all"
            >
              Đặt lại
            </button>
          </div>
        </div>

        {/* Execution Log & Responsibility Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Visual Log */}
          <div className="bg-slate-850 border border-slate-800 rounded-xl p-4 flex-1 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2 block">
              Trạng thái dòng lệnh thực tế
            </span>
            <div className={`p-4 rounded-lg flex-1 font-mono text-xs flex items-center justify-center border text-center ${
              isError
                ? "bg-rose-950/20 border-rose-500/20 text-rose-300"
                : currentStep === 4
                ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300"
                : "bg-slate-900 border-slate-800 text-slate-300"
            }`}>
              {simulationLog || "Nhấn nút 'Bắt đầu chạy' để xem mô phỏng hoạt động."}
            </div>
          </div>

          {/* Responsibility split */}
          <div className="bg-slate-850 border border-slate-800 rounded-xl p-4">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3 block">
              Phân chia trách nhiệm trong Hợp đồng
            </span>
            <div className="space-y-3">
              <div className={`p-2.5 rounded-lg border transition-all ${
                currentStep === 1 
                  ? isError 
                    ? "bg-rose-950/40 border-rose-500 text-rose-300" 
                    : "bg-amber-950/40 border-amber-500 text-amber-300"
                  : "bg-slate-900/60 border-slate-800 text-slate-400"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-mono">1. Pre-condition (Đầu vào)</span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold">Của Caller</span>
                </div>
                <p className="text-[10px] leading-relaxed">
                  Người dùng hoặc phương thức khác trước khi gọi hàm phải đảm bảo tham số truyền vào thỏa mãn (ở đây là x &ge; 0).
                </p>
              </div>

              <div className={`p-2.5 rounded-lg border transition-all ${
                currentStep === 3
                  ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                  : "bg-slate-900/60 border-slate-800 text-slate-400"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-mono">2. Post-condition (Đầu ra)</span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold">Của Method</span>
                </div>
                <p className="text-[10px] leading-relaxed">
                  Nhà phát triển viết hàm cam kết nếu đầu vào hợp lệ, kết quả trả về sẽ đúng như đặc tả (trả về căn bậc hai của x).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Trap Alert collapsable box */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider">
            Cảnh Báo Phòng Thi (Rất Dễ Ra Đề)
          </span>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Đề thi cực kỳ hay hỏi: **&quot;Ai chịu trách nhiệm đảm bảo Pre-condition?&quot;** ➔ Đáp án là **Caller (Người gọi hàm)**. 
            Nếu Caller vi phạm, Method không chịu trách nhiệm về kết quả hoạt động hoặc tính chính xác của chương trình.
          </p>
        </div>
      </div>
    </div>
  );
}
