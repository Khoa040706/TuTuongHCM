"use client";
import React, { useState } from "react";

export default function PassByValueVisualizer() {
  const [step, setStep] = useState(0); // 0, 1, 2, 3, 4

  const steps = [
    {
      highlightedLine: 2,
      mainStack: [{ name: "x", val: "5", active: true }],
      methodStack: null,
      desc: "<strong>Bước 1: Khởi tạo biến trong main()</strong><br/>Khởi tạo biến số nguyên <code>int x = 5;</code>. Vùng nhớ Stack của hàm <code>main()</code> tạo ra một ô nhớ đặt tên là <code>x</code> chứa giá trị <code>5</code>.",
      console: ""
    },
    {
      highlightedLine: 3,
      mainStack: [{ name: "x", val: "5", active: false }],
      methodStack: [{ name: "val", val: "5 (Bản sao)", active: true }],
      desc: "<strong>Bước 2: Gọi hàm và nhân bản tham số</strong><br/>Gọi hàm <code>tripleValue(x)</code>. Một vùng nhớ Stack mới được cấp cho hàm phụ. Biến tham số <code>val</code> được tạo ra và nhận một **bản sao (copy) giá trị** của <code>x</code>. Lúc này, <code>x</code> và <code>val</code> là 2 ô nhớ độc lập!",
      console: ""
    },
    {
      highlightedLine: 7,
      mainStack: [{ name: "x", val: "5", active: false }],
      methodStack: [{ name: "val", val: "15", active: true }],
      desc: "<strong>Bước 3: Thay đổi giá trị bên trong hàm phụ</strong><br/>Lệnh <code>val = val * 3;</code> nhân 3 giá trị của biến bản sao. Ô nhớ <code>val</code> ở hàm phụ thay đổi từ <code>5 ➔ 15</code>. <br/>Chú ý: Ô nhớ <code>x</code> ở hàm <code>main()</code> vẫn giữ nguyên là <code>5</code>!",
      console: ""
    },
    {
      highlightedLine: 4,
      mainStack: [{ name: "x", val: "5", active: true }],
      methodStack: null,
      desc: "<strong>Bước 4: Kết thúc hàm phụ & Hủy vùng nhớ</strong><br/>Hàm phụ kết thúc, vùng nhớ Stack của nó bị **xóa bỏ hoàn toàn** khỏi RAM. Con trỏ quay về hàm <code>main()</code>.",
      console: ""
    },
    {
      highlightedLine: 4,
      mainStack: [{ name: "x", val: "5", active: true }],
      methodStack: null,
      desc: "<strong>Bước 5: In kết quả ra màn hình</strong><br/>Hàm <code>main()</code> in giá trị <code>x</code> ra màn hình. Kết quả in ra là <code>5</code> (không hề bị thay đổi sau lời gọi hàm phụ).",
      console: "x = 5"
    }
  ];

  const currentStep = steps[step];

  const codeLines = [
    "public static void main(String[] args) {",
    "    int x = 5;",
    "    tripleValue(x);",
    "    System.out.println(\"x = \" + x);",
    "}",
    "public static void tripleValue(int val) {",
    "    val = val * 3;",
    "}"
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
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

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          Giả Lập Cơ Chế Truyền Tham Trị (Pass-by-Value)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Quan sát cách Java nhân bản giá trị biến để thấy tại sao biến gốc ở hàm main không hề thay đổi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Mã nguồn Java đang chạy</div>
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

          {/* Console Mock */}
          <div className="bg-stone-900 border border-stone-850 p-3 rounded-xl text-white font-mono text-xs">
            <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-1">Màn hình Console</div>
            <div className="bg-stone-950 p-2.5 rounded border border-stone-800 text-emerald-400 min-h-[35px] flex items-center">
              {currentStep.console || <span className="text-stone-600 italic">Chưa có kết quả xuất</span>}
            </div>
          </div>
        </div>

        {/* Right Column: Stack RAM Visualization (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
          
          {/* Vùng nhớ Stack */}
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Bản đồ bộ nhớ RAM (Stack Memory)</div>
            <div className="space-y-4">
              
              {/* Stack Frame 2 (Hàm phụ) */}
              {currentStep.methodStack ? (
                <div className="border-2 border-amber-500 bg-amber-50/20 p-3.5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-600">Stack Frame: tripleValue()</span>
                    <span className="text-[9px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-bold animate-pulse">Hàm Phụ</span>
                  </div>
                  <div className="flex gap-3">
                    {currentStep.methodStack.map((cell, idx) => (
                      <div key={idx} className="flex-1 font-mono text-xs bg-white border border-amber-300 rounded-lg p-2.5 flex justify-between items-center shadow-sm">
                        <span className="font-bold text-stone-600">{cell.name} (tham số)</span>
                        <span className="font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">{cell.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="border border-dashed border-stone-250 p-4 rounded-xl text-center text-xs text-stone-400 italic transition-all duration-300">
                  Chưa có lời gọi hàm (vùng nhớ trống)
                </div>
              )}

              {/* Stack Frame 1 (Hàm main) */}
              <div className="border-2 border-sky-500 bg-sky-50/25 p-3.5 rounded-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-700">Stack Frame: main()</span>
                  <span className="text-[9px] bg-sky-500 text-white px-1.5 py-0.5 rounded font-bold">Hàm Chính</span>
                </div>
                <div className="flex gap-3">
                  {currentStep.mainStack.map((cell, idx) => (
                    <div key={idx} className="flex-1 font-mono text-xs bg-white border border-sky-200 rounded-lg p-2.5 flex justify-between items-center shadow-sm">
                      <span className="font-bold text-stone-600">{cell.name} (biến gốc)</span>
                      <span className="font-black text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">{cell.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Stepper description */}
          <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-700">
            <span dangerouslySetInnerHTML={{ __html: currentStep.desc }} />
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center border-t border-stone-100 pt-3 mt-3">
            <div className="text-[10px] font-bold text-stone-400">
              Bước {step + 1} / {steps.length}
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
              {step < steps.length - 1 ? (
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
