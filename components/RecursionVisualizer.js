"use client";
import React, { useState } from "react";

export default function RecursionVisualizer() {
  const [nVal, setNVal] = useState(4); // Default to 4
  const [step, setStep] = useState(0); // Current execution step

  // Generate the steps based on selected N
  const generateSteps = (n) => {
    const stepsList = [];
    
    // Step 0: Init
    stepsList.push({
      phase: "init",
      stack: [],
      desc: `Khởi đầu: Gọi hàm <code>factorial(${n})</code>. Hệ thống chuẩn bị nạp các lời gọi hàm đệ quy vào ngăn xếp Call Stack.`,
      highlightedLine: 8
    });

    // Push phase (from n down to 1)
    const currentStack = [];
    for (let i = n; i >= 1; i--) {
      currentStack.push({
        name: `factorial(${i})`,
        formula: `${i} * factorial(${i - 1})`,
        val: "?",
        active: true
      });
      // Deactivate previous items in stack view
      const displayStack = currentStack.map((item, idx) => ({
        ...item,
        active: idx === currentStack.length - 1
      }));

      stepsList.push({
        phase: "push",
        stack: [...displayStack],
        desc: `<strong>Đệ quy (Phần PUSH):</strong> Gọi tiếp <code>factorial(${i})</code>. Vì <code>n = ${i}</code> khác 0, hàm rẽ vào nhánh <code>else</code> và gọi đệ quy <code>factorial(${i - 1})</code>. Lời gọi này được xếp chồng lên Stack.`,
        highlightedLine: 5
      });
    }

    // Base case: factorial(0)
    currentStack.push({
      name: "factorial(0)",
      formula: "1",
      val: "1",
      active: true
    });
    // Set others to inactive
    let displayStack = currentStack.map((item, idx) => ({
      ...item,
      active: idx === currentStack.length - 1
    }));

    stepsList.push({
      phase: "base",
      stack: [...displayStack],
      desc: "<strong>Điều kiện dừng (Base Case):</strong> Gọi <code>factorial(0)</code>. Lần này <code>n == 0</code>, chương trình thực hiện lệnh <code>return 1;</code> ngay lập tức. Đệ quy dừng lại và chuẩn bị trả ngược kết quả!",
      highlightedLine: 4
    });

    // Pop phase (evaluating values back up)
    let currentVal = 1;
    for (let i = 0; i <= n; i++) {
      if (i > 0) {
        currentVal = i * currentVal;
      }
      
      // Update values in stack
      const popStack = [];
      for (let j = 0; j < currentStack.length; j++) {
        const item = currentStack[j];
        const itemN = parseInt(item.name.replace("factorial(", "").replace(")", ""));
        
        let displayVal = item.val;
        let isActive = false;
        
        if (itemN === i) {
          displayVal = currentVal.toString();
          isActive = true;
        } else if (itemN < i) {
          // Already popped/evaluated and removed from visual stack or marked evaluated
          continue;
        }

        popStack.push({
          ...item,
          val: displayVal,
          active: isActive
        });
      }

      stepsList.push({
        phase: "pop",
        stack: [...popStack],
        desc: i === 0 
          ? `<strong>Trả kết quả (Phần POP):</strong> <code>factorial(0)</code> trả về giá trị <code>1</code> cho hàm gọi nó.`
          : `<strong>Trả kết quả (Phần POP):</strong> Trả giá trị <code>factorial(${i - 1}) = ${currentVal / i}</code> ngược lên. Hàm <code>factorial(${i})</code> thực hiện phép tính: <code>${i} * ${currentVal / i} = ${currentVal}</code> và trả tiếp lên trên.`,
        highlightedLine: 5
      });
    }

    // Step Final: Return output
    stepsList.push({
      phase: "final",
      stack: [],
      desc: `<strong>Hoàn tất:</strong> Hàm <code>factorial(${n})</code> đã tính toán xong và trả về kết quả cuối cùng là <code>${currentVal}</code>. Màn hình Console in ra kết quả.`,
      highlightedLine: 9,
      console: currentVal.toString()
    });

    return stepsList;
  };

  const stepsList = generateSteps(nVal);
  const currentStep = stepsList[step] || stepsList[stepsList.length - 1];

  const codeLines = [
    "public class Factorial {",
    "    public static int factorial(int n) {",
    "        if (n == 0)",
    "            return 1; // Điểm dừng",
    "        else",
    "            return n * factorial(n - 1); // Đệ quy",
    "    }",
    "    public static void main(String[] args) {",
    `        int n = ${nVal};`,
    "        System.out.println(factorial(n));",
    "    }",
    "}"
  ];

  const handleNext = () => {
    if (step < stepsList.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
  };

  const handleNChange = (newN) => {
    setNVal(newN);
    setStep(0);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 border-b border-stone-200 pb-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            Giả Lập Ngăn Xếp Đệ Quy (Call Stack Visualizer)
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Chọn giá trị n và bấm chạy từng bước để xem cách các lời gọi hàm xếp chồng và trả giá trị.
          </p>
        </div>

        {/* N Selector Buttons */}
        <div className="flex bg-stone-200 p-1 rounded-xl shrink-0">
          {[3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => handleNChange(num)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                nVal === num
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              n = {num}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Code (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Mã nguồn đệ quy Giai Thừa</div>
            <div className="space-y-1">
              {codeLines.map((line, idx) => {
                const isHighlighted = idx === currentStep.highlightedLine;
                return (
                  <div
                    key={idx}
                    className={`py-1 px-2 rounded transition-all whitespace-pre ${
                      isHighlighted
                        ? "bg-amber-500/10 border-l-4 border-amber-500 text-amber-300 font-bold"
                        : "text-stone-300 opacity-55"
                    }`}
                  >
                    {line}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Console Output */}
          <div className="bg-stone-900 border border-stone-850 p-3 rounded-xl text-white font-mono text-xs">
            <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-1">Màn hình Console</div>
            <div className="bg-stone-950 p-2.5 rounded border border-stone-800 text-emerald-400 min-h-[35px] flex items-center">
              {currentStep.console || <span className="text-stone-600 italic">Chưa có kết quả xuất</span>}
            </div>
          </div>
        </div>

        {/* Right Column: Stack Representation (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
          
          {/* Stack Container */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3 self-start">Ngăn xếp lời gọi hàm (Call Stack)</div>
            
            {/* The Stack Box Visual (reverse order so top is on top) */}
            <div className="border-2 border-stone-300 bg-stone-50 rounded-2xl p-4 min-h-[220px] flex flex-col-reverse justify-start gap-2 shadow-inner">
              {currentStep.stack && currentStep.stack.length > 0 ? (
                currentStep.stack.map((item, idx) => {
                  let frameClass = "border-stone-250 bg-white text-stone-700 opacity-60";
                  if (item.active) {
                    frameClass = "border-amber-500 bg-amber-50/20 text-stone-900 font-bold scale-102 shadow-sm border-2";
                  }
                  return (
                    <div
                      key={idx}
                      className={`font-mono text-xs border rounded-xl p-3 flex justify-between items-center transition-all duration-300 ${frameClass}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-stone-400">Hàm đệ quy</span>
                        <span>{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-stone-400 block">Biểu thức tính</span>
                        <span className="text-xs bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                          {item.formula} = <strong className={item.active ? "text-amber-600" : "text-stone-750"}>{item.val}</strong>
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-xs text-stone-400 italic my-auto">
                  Ngăn xếp trống (Call Stack Empty)
                </div>
              )}
            </div>
          </div>

          {/* Stepper description */}
          <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-750 min-h-[70px]">
            <span dangerouslySetInnerHTML={{ __html: currentStep.desc }} />
          </div>

          {/* Stepper Controls */}
          <div className="flex justify-between items-center border-t border-stone-100 pt-3">
            <div className="text-[10px] font-bold text-stone-400">
              Bước {step + 1} / {stepsList.length}
            </div>
            <div className="flex gap-2">
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  ◀ Lùi lại
                </button>
              )}
              {step < stepsList.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  Tiếp tục ▶
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  🔄 Chạy lại từ đầu
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
