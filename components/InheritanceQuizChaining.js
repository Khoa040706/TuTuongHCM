"use client";
import React, { useState } from "react";
import { Play, RotateCcw, Info, Terminal, ChevronRight } from "lucide-react";

export default function InheritanceQuizChaining() {
  const [traceStep, setTraceStep] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState([]);

  const traceSteps = [
    {
      title: "1. Khởi tạo đối tượng",
      desc: "Chạy lệnh <code>ClassC objc = new ClassC(10);</code>. JVM gọi constructor lớp con nhất <code>ClassC(int)</code>.",
      code: "public ClassC(int val) {"
    },
    {
      title: "2. Chaining lên ClassB",
      desc: "Gặp lệnh <code>super(val - 1)</code> (tức <code>super(9)</code>). Chương trình tạm hoãn ClassC, nhảy lên constructor <code>ClassB(int)</code>.",
      code: "    super.value = val - 1;\n    value = val;" // Highlight inside ClassC: super(val - 1)
    },
    {
      title: "3. Chaining tiếp lên ClassA",
      desc: "JVM tự động gọi constructor mặc định không tham số của lớp cha nhất: <code>super()</code> của <code>ClassA</code>.",
      code: "public ClassA() { }" // ClassA default constructor
    },
    {
      title: "4. Thực thi constructor ClassB",
      desc: "Constructor ClassB chạy: <code>super.value = 8</code> (gán biến value của ClassA = 8). Tiếp đó, <code>value = 9</code> (gán biến value của ClassB = 9).",
      code: "public ClassB(int val) {\n    super.value = val - 1; // A.value = 8\n    value = val;          // B.value = 9\n}"
    },
    {
      title: "5. Hoàn tất constructor ClassC",
      desc: "Quay lại ClassC: <code>super.value = 9</code> (gán biến value của ClassB = 9 - thực chất đã gán đè lại). Tiếp đó, <code>value = 10</code> (gán biến value của ClassC = 10).",
      code: "public ClassC(int val) {\n    super(val - 1);\n    super.value = val - 1; // B.value = 9\n    value = val;          // C.value = 10\n}"
    },
    {
      title: "6. Gọi hàm objc.print()",
      desc: "Bắt đầu chạy <code>objc.print()</code>. Theo đa hình, hàm <code>print()</code> của lớp con nhất <code>ClassC</code> được gọi.",
      code: "public void print() {\n    super.print();\n    System.out.println(\"Class C: value = \" + value);\n}"
    },
    {
      title: "7. Gọi tiếp super.print() ở B",
      desc: "Trong <code>ClassC.print()</code> có <code>super.print()</code>, JVM chuyển tiếp gọi phương thức <code>print()</code> của <code>ClassB</code>.",
      code: "public void print() {\n    super.print();\n    System.out.println(\"Class B: value = \" + value);\n}"
    },
    {
      title: "8. Gọi tiếp super.print() ở A",
      desc: "Trong <code>ClassB.print()</code> có <code>super.print()</code>, JVM tiếp tục gọi <code>print()</code> của <code>ClassA</code>.",
      code: "public void print() {\n    System.out.println(\"Class A: value = \" + value);\n}"
    },
    {
      title: "9. Output từ ClassA",
      desc: "Hàm <code>ClassA.print()</code> thực thi, in ra biến <code>value</code> của chính nó (hiện đang bằng 8).",
      code: "System.out.println(\"Class A: value = \" + value);",
      log: "Class A: value = 8"
    },
    {
      title: "10. Output từ ClassB",
      desc: "Hàm ClassA kết thúc, quay về ClassB thực thi dòng lệnh tiếp theo, in ra biến <code>value</code> của ClassB (bằng 9).",
      code: "System.out.println(\"Class B: value = \" + value);",
      log: "Class B: value = 9"
    },
    {
      title: "11. Output từ ClassC",
      desc: "Hàm ClassB kết thúc, quay về ClassC thực thi dòng lệnh cuối cùng, in ra biến <code>value</code> của ClassC (bằng 10).",
      code: "System.out.println(\"Class C: value = \" + value);",
      log: "Class C: value = 10"
    }
  ];

  const handleNextStep = () => {
    if (traceStep < traceSteps.length) {
      const step = traceSteps[traceStep];
      if (step.log) {
        setConsoleLogs(prev => [...prev, step.log]);
      }
      setTraceStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setTraceStep(0);
    setConsoleLogs([]);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // IX. QUIZ 1: KẾ THỪA 3 TẦNG (CLASSA → CLASSB → CLASSC)
      </span>

      <div className="space-y-4">
        {/* Core Lesson Detail */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-2 text-xs">
          <span className="text-[9px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">Điểm mấu chốt đề thi</span>
          <p className="leading-relaxed text-stone-600 font-semibold">
            Mỗi lớp (A, B, C) đều tự khai báo biến <code>value</code> riêng của mình. Đây là hiện tượng <strong>che khuất thuộc tính (shadowing)</strong> chứ không phải override thuộc tính. 
            Do đó, khi gọi <code>super.print()</code>, phương thức của lớp cha nào sẽ truy cập vào biến <code>value</code> của chính lớp cha đó, chứ không truy cập biến của lớp con.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// BỘ DÒ LUỒNG THỰC THI (EXECUTION TRACER)</span>
            
            <div className="flex gap-2">
              <button
                onClick={handleNextStep}
                disabled={traceStep === traceSteps.length}
                className={`px-3 py-1 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1.5 shadow ${
                  traceStep === traceSteps.length 
                    ? "bg-stone-200 text-stone-400 cursor-not-allowed" 
                    : "bg-indigo-650 hover:bg-indigo-750 text-white"
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{traceStep === 0 ? "Bắt đầu chạy" : "Dòng lệnh kế tiếp"}</span>
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Step Detail Explanation */}
            <div className="lg:col-span-4 bg-indigo-50/40 border border-indigo-100 p-4 rounded-xl flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[9px] font-black text-indigo-600 block uppercase tracking-widest font-mono mb-1">
                  Bước {traceStep === 0 ? 1 : traceStep} / {traceSteps.length}
                </span>
                <h4 className="text-xs font-black text-stone-850 mb-1">
                  {traceSteps[traceStep === traceSteps.length ? traceStep - 1 : traceStep].title}
                </h4>
                <p 
                  className="text-[10px] text-stone-600 leading-relaxed font-semibold"
                  dangerouslySetInnerHTML={{ 
                    __html: traceSteps[traceStep === traceSteps.length ? traceStep - 1 : traceStep].desc 
                  }} 
                />
              </div>
              {traceStep === traceSteps.length && (
                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block text-center mt-2 font-mono">
                  ✓ LUỒNG CHẠY HOÀN TẤT
                </span>
              )}
            </div>

            {/* Code Tracer display */}
            <div className="lg:col-span-4 bg-stone-900 border border-stone-950 p-4 rounded-xl text-stone-300 font-mono text-[9px] md:text-xs min-h-[160px] flex items-center justify-center">
              <pre className="w-full whitespace-pre-wrap leading-relaxed">
                {traceSteps[traceStep === traceSteps.length ? traceStep - 1 : traceStep].code}
              </pre>
            </div>

            {/* Console output display */}
            <div className="lg:col-span-4 bg-black text-emerald-400 p-4 rounded-xl font-mono text-[10px] md:text-xs flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[8px] uppercase tracking-widest text-stone-600 font-black block mb-2 border-b border-stone-900 pb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Console Output
                </span>
                <div className="space-y-1.5 max-h-[120px] overflow-y-auto pl-1">
                  {consoleLogs.map((log, idx) => (
                    <div key={idx} className="text-white border-l-2 border-emerald-500 pl-2">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
