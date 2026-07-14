"use client";
import React, { useState } from "react";

export default function StringPoolVisualizer() {
  const [step, setStep] = useState(0); // 0 to 4

  const steps = [
    {
      codeLine: 0,
      s1Pointer: "0x99a (Pool)",
      s2Pointer: null,
      s3Pointer: null,
      showHeapObj: false,
      desc: "<strong>Bước 1: Khai báo s1 = \"abc\";</strong><br/>JVM tìm chuỗi <code>\"abc\"</code> trong String Constant Pool. Do chưa tồn tại, JVM tạo đối tượng <code>\"abc\"</code> tại địa chỉ <code>0x99a</code> trong Pool. Biến <code>s1</code> trỏ thẳng đến địa chỉ này.",
      compareResult: null
    },
    {
      codeLine: 1,
      s1Pointer: "0x99a (Pool)",
      s2Pointer: "0x99a (Pool)",
      s3Pointer: null,
      showHeapObj: false,
      desc: "<strong>Bước 2: Khai báo s2 = \"abc\";</strong><br/>JVM tìm thấy <code>\"abc\"</code> đã tồn tại trong Pool tại <code>0x99a</code>. JVM không tạo thêm đối tượng mới mà chỉ cho phép <code>s2</code> <strong>tái sử dụng</strong>, trỏ trực tiếp đến <code>0x99a</code>.",
      compareResult: null
    },
    {
      codeLine: 2,
      s1Pointer: "0x99a (Pool)",
      s2Pointer: "0x99a (Pool)",
      s3Pointer: "0x88f (Heap)",
      showHeapObj: true,
      desc: "<strong>Bước 3: Khai báo s3 = new String(\"abc\");</strong><br/>Từ khóa <code>new</code> ép JVM tạo ra một đối tượng String <strong>mới hoàn toàn trên Heap</strong> (địa chỉ <code>0x88f</code>). Biến <code>s3</code> trỏ tới Heap này, đối tượng Heap mới trỏ liên kết đến <code>0x99a</code> trong Pool.",
      compareResult: null
    },
    {
      codeLine: 3,
      s1Pointer: "0x99a (Pool)",
      s2Pointer: "0x99a (Pool)",
      s3Pointer: "0x88f (Heap)",
      showHeapObj: true,
      desc: "<strong>Bước 4: So sánh địa chỉ (Toán tử ==)</strong><br/>• <code>s1 == s2</code> trả về <strong class='text-emerald-600'>true</strong> vì cùng trỏ tới <code>0x99a</code>.<br/>• <code>s1 == s3</code> trả về <strong class='text-red-500'>false</strong> vì <code>s1</code> trỏ <code>0x99a</code> còn <code>s3</code> trỏ <code>0x88f</code>.",
      compareResult: {
        eq12: "s1 == s2 ➔ true (Địa chỉ 0x99a = 0x99a)",
        eq13: "s1 == s3 ➔ false (Địa chỉ 0x99a ≠ 0x88f)"
      }
    },
    {
      codeLine: 4,
      s1Pointer: "0x99a (Pool)",
      s2Pointer: "0x99a (Pool)",
      s3Pointer: "0x88f (Heap)",
      showHeapObj: true,
      desc: "<strong>Bước 5: So sánh nội dung (Phương thức .equals)</strong><br/>• <code>s1.equals(s3)</code> trả về <strong class='text-emerald-600'>true</strong>.<br/>Phương thức <code>.equals()</code> đi sâu vào so sánh từng ký tự bên trong mảng <code>{'a','b','c'}</code> chứ không quan tâm đến địa chỉ tham chiếu.",
      compareResult: {
        eq12: "s1 == s2 ➔ true (Địa chỉ 0x99a = 0x99a)",
        eq13: "s1 == s3 ➔ false (Địa chỉ 0x99a ≠ 0x88f)",
        equals13: "s1.equals(s3) ➔ true (Nội dung \"abc\" = \"abc\")"
      }
    }
  ];

  const codeLines = [
    "String s1 = \"abc\";",
    "String s2 = \"abc\";",
    "String s3 = new String(\"abc\");",
    "System.out.println(s1 == s2); // true | s1 == s3 // false",
    "System.out.println(s1.equals(s3)); // true"
  ];

  const currentStep = steps[step];

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

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          Giả Lập Vùng Nhớ String Pool (String Constant Pool Visualizer)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Xem sự phân tách bộ nhớ giữa String Literal và đối tượng tạo bằng từ khóa new để hiểu bản chất so sánh chuỗi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner flex-1">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3 font-sans">Khai báo Chuỗi trong Java</div>
            <div className="space-y-1.5">
              {codeLines.map((line, idx) => {
                const isHighlighted = idx === currentStep.codeLine;
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

          {/* Test results mock */}
          <div className="bg-stone-900 border border-stone-850 p-3 rounded-xl text-white font-mono text-xs">
            <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-1 font-sans">Màn hình Console</div>
            <div className="bg-stone-950 p-2.5 rounded border border-stone-800 text-emerald-450 min-h-[85px] space-y-1">
              {currentStep.compareResult ? (
                <>
                  <div className="text-stone-300">{currentStep.compareResult.eq12}</div>
                  <div className="text-stone-300">{currentStep.compareResult.eq13}</div>
                  {currentStep.compareResult.equals13 && (
                    <div className="text-emerald-450 font-bold">{currentStep.compareResult.equals13}</div>
                  )}
                </>
              ) : (
                <span className="text-stone-600 italic">Chưa thực thi câu lệnh so sánh</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Memory visualization (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Bản đồ phân vùng RAM (Stack, Heap & Pool)</div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
              
              {/* Stack (4 cols) */}
              <div className="md:col-span-4 border border-stone-150 p-3 rounded-xl bg-stone-50/50 space-y-3">
                <div className="text-[9px] font-black text-stone-450 uppercase tracking-widest text-center">STACK (Tham chiếu)</div>
                
                {/* s1 */}
                <div className="bg-white border border-stone-200 p-2 rounded-lg text-[11px] font-mono flex justify-between items-center shadow-sm">
                  <span className="font-bold text-stone-600">s1</span>
                  <span className="font-black text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 text-[10px]">
                    {currentStep.s1Pointer}
                  </span>
                </div>

                {/* s2 */}
                <div className="bg-white border border-stone-200 p-2 rounded-lg text-[11px] font-mono flex justify-between items-center shadow-sm">
                  <span className="font-bold text-stone-600">s2</span>
                  <span className="font-black text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 text-[10px]">
                    {currentStep.s2Pointer || <span className="text-stone-400 italic">null</span>}
                  </span>
                </div>

                {/* s3 */}
                <div className="bg-white border border-stone-200 p-2 rounded-lg text-[11px] font-mono flex justify-between items-center shadow-sm">
                  <span className="font-bold text-stone-600">s3</span>
                  <span className="font-black text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 text-[10px]">
                    {currentStep.s3Pointer || <span className="text-stone-400 italic">null</span>}
                  </span>
                </div>
              </div>

              {/* Heap & Pool (8 cols) */}
              <div className="md:col-span-8 border border-stone-150 p-3 rounded-xl bg-stone-50/50 space-y-3">
                <div className="text-[9px] font-black text-stone-450 uppercase tracking-widest text-center">VÙNG NHỚ HEAP</div>
                
                {/* Heap container */}
                <div className="space-y-3 min-h-[140px] flex flex-col justify-between">
                  {/* Heap object for new String() */}
                  {currentStep.showHeapObj ? (
                    <div className="border border-sky-400 bg-sky-50/10 p-2.5 rounded-lg font-mono text-[10px] relative text-center shadow-sm animate-fade-in">
                      <span className="text-[8px] bg-sky-500 text-white px-1.5 rounded font-bold uppercase absolute -top-2 left-2 shadow-sm">Heap (Non-pool)</span>
                      <div className="mt-1 font-bold text-stone-700">Đối tượng String (0x88f)</div>
                      <div className="text-sky-700 font-bold mt-1">Trỏ tham chiếu ➔ 0x99a (Pool)</div>
                    </div>
                  ) : (
                    <div className="border border-dashed border-stone-200 p-3 rounded-lg text-center text-[10px] text-stone-400 italic flex-1 flex items-center justify-center">
                      Vùng Heap thông thường trống
                    </div>
                  )}

                  {/* String Constant Pool */}
                  <div className="border border-amber-400 bg-[#fffbeb] p-3 rounded-xl font-mono text-[10px] relative text-center shadow-sm">
                    <span className="text-[8px] bg-amber-500 text-black px-1.5 rounded font-black uppercase absolute -top-2 left-2 shadow-sm">String Constant Pool</span>
                    <div className="mt-1 flex justify-between items-center bg-white border border-amber-200 p-1.5 rounded-lg">
                      <span className="font-bold text-stone-550">Địa chỉ: 0x99a</span>
                      <span className="font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">"abc"</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Stepper Description */}
          <div className="bg-stone-50 border border-stone-180 rounded-xl p-3 text-xs leading-relaxed text-stone-750">
            <span dangerouslySetInnerHTML={{ __html: currentStep.desc }} />
          </div>

          {/* Stepper Controls */}
          <div className="flex justify-between items-center border-t border-stone-100 pt-3">
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
                  onClick={() => setStep(0)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  🔄 Chạy lại
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
