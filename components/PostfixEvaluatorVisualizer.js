"use client";

import React, { useState } from "react";
import { RotateCcw, CheckCircle2, ChevronRight, ChevronLeft, Layers, Terminal } from "lucide-react";

export default function PostfixEvaluatorVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);

  // Expression: 2 * (3 + 4) -> Postfix: 2 3 4 + *
  const steps = [
    {
      step: 1,
      token: "2",
      type: "operand",
      action: 's.push("2")',
      stack: ["2"],
      explain: "Gặp toán hạng (operand) 2 ➔ push(2) vào Stack."
    },
    {
      step: 2,
      token: "3",
      type: "operand",
      action: 's.push("3")',
      stack: ["2", "3"],
      explain: "Gặp toán hạng 3 ➔ push(3) vào Stack."
    },
    {
      step: 3,
      token: "4",
      type: "operand",
      action: 's.push("4")',
      stack: ["2", "3", "4"],
      explain: "Gặp toán hạng 4 ➔ push(4) vào Stack."
    },
    {
      step: 4,
      token: "+",
      type: "operator",
      action: "arg2 = pop() (4), arg1 = pop() (3) ➔ push(3 + 4 = 7)",
      stack: ["2", "7"],
      explain: "Gặp toán tử (operator) '+' ➔ pop 2 đối số từ Stack: arg2=4, arg1=3. Thực hiện 3 + 4 = 7 ➔ push(7) trở lại Stack."
    },
    {
      step: 5,
      token: "*",
      type: "operator",
      action: "arg2 = pop() (7), arg1 = pop() (2) ➔ push(2 * 7 = 14)",
      stack: ["14"],
      explain: "Gặp toán tử '*' ➔ pop 2 đối số từ Stack: arg2=7, arg1=2. Thực hiện 2 * 7 = 14 ➔ push(14) trở lại Stack."
    },
    {
      step: 6,
      token: "END",
      type: "end",
      action: "Hoàn tất! Pop kết quả cuối cùng = 14",
      stack: ["14"],
      explain: "Đã duyệt hết biểu thức Postfix. Kết quả cuối cùng còn lại duy nhất trong Stack là 14."
    }
  ];

  const current = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-2">
            <Layers className="w-3.5 h-3.5" /> 6.3 Thuật toán Tính giá trị biểu thức Postfix
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Ví dụ: <code className="bg-slate-100 text-amber-700 px-2 py-0.5 rounded font-mono text-base border border-slate-200">2 * (3 + 4)</code> ➔ Postfix: <code className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono text-base border border-emerald-200 font-bold">2 3 4 + *</code>
          </h3>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white font-bold rounded-lg px-3 py-2 text-sm transition-colors flex items-center gap-1 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Bước trước
          </button>
          <span className="text-xs font-mono text-slate-500 font-bold px-2">
            {currentStep + 1} / {steps.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white font-bold rounded-lg px-4 py-2 text-sm transition-colors flex items-center gap-1 cursor-pointer disabled:cursor-not-allowed"
          >
            Tiếp theo <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            title="Đặt lại"
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 transition-colors cursor-pointer ml-1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expression Sequence Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Chuỗi Token Postfix:</div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {["2", "3", "4", "+", "*"].map((t, idx) => {
            const isCurrent = idx === currentStep;
            const isPassed = idx < currentStep;
            return (
              <div
                key={idx}
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-base transition-all duration-300 shrink-0 ${
                  isCurrent
                    ? "bg-amber-500 text-slate-950 font-bold scale-110 shadow-md ring-4 ring-amber-500/20"
                    : isPassed
                    ? "bg-slate-200 text-slate-600 border border-slate-300"
                    : "bg-white text-slate-700 border border-slate-200 shadow-sm"
                }`}
              >
                {t}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Visualization Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Action Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Thao tác hiện tại (Bước {current.step})
              </span>
              <span className="text-xs px-2 py-0.5 bg-slate-200 text-slate-700 font-mono rounded font-semibold">
                Token: {current.token}
              </span>
            </div>

            {/* Dark Code Log */}
            <div className="bg-slate-950 text-cyan-300 font-mono text-xs p-3 rounded-xl border border-slate-800 mb-3 flex items-start gap-2 shadow-inner">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{current.action}</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">{current.explain}</p>
          </div>

          {current.step === steps.length && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Kết quả tính toán cuối cùng = 14
            </div>
          )}
        </div>

        {/* Visual Stack Box */}
        <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-4 min-h-[120px] flex flex-col items-center justify-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Stack (đỉnh ở trên):</span>
          <div className="flex flex-col-reverse items-center gap-2.5 w-full max-w-[180px]">
            {current.stack.length === 0 ? (
              <span className="text-xs text-slate-400 italic">Stack rỗng</span>
            ) : (
              current.stack.map((val, idx) => (
                <div
                  key={idx}
                  className={`bg-indigo-600 text-white font-mono font-bold rounded-lg p-3 shadow w-full text-center text-base flex items-center justify-center gap-2 transition-all ${
                    idx === current.stack.length - 1 ? "ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-50" : ""
                  }`}
                >
                  <span>{val}</span>
                  {idx === current.stack.length - 1 && (
                    <span className="text-[10px] bg-indigo-500 text-indigo-100 font-normal px-1.5 py-0.5 rounded">
                      top
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

