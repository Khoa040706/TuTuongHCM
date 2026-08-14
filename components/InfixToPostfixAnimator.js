"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft, RotateCcw, Code2, Sparkles, Layers, ArrowRight } from "lucide-react";

export default function InfixToPostfixAnimator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("animator");

  // Trace steps for: a - ( b + c * d ) / e
  const traceSteps = [
    { step: 1, ch: "a", stack: [], postfix: "a", note: "Là operand 'a' ➔ Thêm ngay vào postfixExp" },
    { step: 2, ch: "-", stack: ["-"], postfix: "a", note: "Là operator '-' ➔ Push vào Stack" },
    { step: 3, ch: "(", stack: ["-", "("], postfix: "a", note: "Là '(' ➔ Push vào Stack" },
    { step: 4, ch: "b", stack: ["-", "("], postfix: "a b", note: "Là operand 'b' ➔ Thêm vào postfixExp" },
    { step: 5, ch: "+", stack: ["-", "(", "+"], postfix: "a b", note: "Là operator '+' ➔ Push vào Stack" },
    { step: 6, ch: "c", stack: ["-", "(", "+"], postfix: "a b c", note: "Là operand 'c' ➔ Thêm vào postfixExp" },
    { step: 7, ch: "*", stack: ["-", "(", "+", "*"], postfix: "a b c", note: "Operator '*' có độ ưu tiên cao hơn '+' trên đỉnh Stack ➔ Push '*' vào Stack" },
    { step: 8, ch: "d", stack: ["-", "(", "+", "*"], postfix: "a b c d", note: "Là operand 'd' ➔ Thêm vào postfixExp" },
    { step: 9, ch: ")", stack: ["-"], postfix: "a b c d * +", note: "Gặp ')' ➔ Pop liên tục các operator từ Stack (*, +) sang postfixExp cho đến khi gặp '('. Loại bỏ '('" },
    { step: 10, ch: "/", stack: ["-", "/"], postfix: "a b c d * +", note: "Operator '/' có độ ưu tiên cao hơn '-' trên đỉnh Stack ➔ Push '/' vào Stack" },
    { step: 11, ch: "e", stack: ["-", "/"], postfix: "a b c d * + e", note: "Là operand 'e' ➔ Thêm vào postfixExp" },
    { step: 12, ch: "END", stack: [], postfix: "a b c d * + e / -", note: "Duyệt hết biểu thức ➔ Pop toàn bộ các operator còn lại trong Stack (/, -) sang postfixExp" }
  ];

  const current = traceSteps[currentStep];

  const handleNext = () => {
    if (currentStep < traceSteps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 6.4–6.6 Thuật toán Chuyển Infix ➔ Postfix
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-2 flex-wrap">
            <span>Ví dụ mẫu giáo trình:</span>
            <code className="bg-slate-100 text-purple-700 px-2.5 py-0.5 rounded-lg font-mono text-base border border-slate-200">
              a - ( b + c * d ) / e
            </code>
          </h3>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-medium self-start md:self-auto">
          <button
            onClick={() => setActiveTab("animator")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "animator"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            Mô phỏng 12 Bước (Trace)
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "code"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" /> Code Java (§6.5)
          </button>
        </div>
      </div>

      {activeTab === "animator" ? (
        <div>
          {/* Controls & Current Character Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Ký tự đang xét (ch):
              </span>
              <div className="bg-amber-500 text-slate-950 font-mono font-extrabold text-xl p-3 rounded-xl shadow-md min-w-[50px] text-center">
                {current.ch}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="p-2.5 bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white rounded-xl text-slate-700 shadow-sm transition-colors cursor-pointer"
                title="Bước trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-600 font-semibold px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                Bước {currentStep + 1} / {traceSteps.length}
              </span>
              <button
                onClick={handleNext}
                disabled={currentStep === traceSteps.length - 1}
                className="p-2.5 bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white rounded-xl text-slate-700 shadow-sm transition-colors cursor-pointer"
                title="Bước sau"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentStep(0)}
                className="p-2.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-500 hover:text-slate-800 shadow-sm transition-colors cursor-pointer ml-1"
                title="Đặt lại từ đầu"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Stack Display Panel */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col items-center justify-between min-h-[240px]">
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-600" /> Operator Stack (bottom ➔ top)
              </span>
              
              <div className="w-full max-w-[220px] bg-white border border-purple-200 rounded-xl p-3 text-purple-900 font-mono flex flex-col-reverse items-center gap-2 min-h-[150px] justify-start shadow-inner">
                {current.stack.length === 0 ? (
                  <span className="text-xs text-slate-400 italic my-auto">Stack rỗng</span>
                ) : (
                  current.stack.map((op, idx) => (
                    <div
                      key={idx}
                      className={`w-full py-2 px-3 text-center font-mono font-bold text-sm rounded-lg transition-all ${
                        idx === current.stack.length - 1
                          ? "bg-purple-600 border border-purple-700 text-white shadow-md scale-105 flex items-center justify-center gap-1"
                          : "bg-purple-50 border border-purple-200 text-purple-900"
                      }`}
                    >
                      <span>{op}</span>
                      {idx === current.stack.length - 1 && (
                        <span className="text-[10px] bg-purple-700 text-purple-100 px-1.5 py-0.5 rounded font-normal ml-1">
                          top
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>

              <div className="text-[11px] text-slate-500 text-center mt-3">
                Đỉnh Stack điều khiển thứ tự ưu tiên của toán tử
              </div>
            </div>

            {/* Postfix Output Canvas */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ArrowRight className="w-4 h-4 text-teal-600" /> Biểu thức Postfix đang dựng (postfixExp)
                </span>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-teal-900 font-mono font-bold text-lg min-h-[64px] flex items-center justify-center text-center shadow-inner">
                  {current.postfix || <span className="text-slate-400 italic text-xs font-normal">Chưa có ký tự</span>}
                </div>
              </div>

              <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 leading-relaxed shadow-sm">
                <strong className="text-purple-700 font-semibold">Giải thích bước {current.step}:</strong> {current.note}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Java Code View with Dark Mac Code Window */
        <div className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-xl border border-slate-800 shadow-md">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="ml-2 text-xs text-slate-400 font-mono">InfixToPostfix.java</span>
            </div>
            <span className="text-[11px] text-slate-500 font-sans">§6.5 Thuật toán Chuyển đổi</span>
          </div>

          <div className="text-slate-500 mb-2">// 6.5 Thuật toán (Code) chuyển Infix ➔ Postfix</div>
          <pre className="overflow-x-auto leading-relaxed text-slate-300">{`String postfixExp = "";
for (each character ch in the infix expression) {
    switch (ch) {
        case operand:
            postfixExp = postfixExp + ch; break;
        case '(':
            stack.push(ch); break;
        case ')':
            while (stack.peek() != '(')
                postfixExp = postfixExp + stack.pop();
            stack.pop(); // loại bỏ '('
            break;
        case operator:
            while (!stack.empty() && stack.peek() != '(' &&
                   precedence(ch) <= precedence(stack.peek())) { // Vì sao <=?
                postfixExp = postfixExp + stack.pop();
            }
            stack.push(ch); break;
    } // end switch
} // end for

while (!stack.empty())
    postfixExp = postfixExp + stack.pop();`}</pre>
        </div>
      )}
    </div>
  );
}

