"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Terminal, Info, Code, Eye } from "lucide-react";

export default function AbstractBikeVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playInterval = useRef(null);

  const steps = [
    {
      line: 14,
      desc: "Chương trình Java bắt đầu chạy từ phương thức main().",
      console: "",
      highlights: { bike: false, honda: false, main: true },
      explanation: "Điểm khởi đầu của mọi ứng dụng Java là hàm main(). Tại đây ta sẽ khởi tạo đối tượng và gọi phương thức."
    },
    {
      line: 15,
      desc: "Khởi tạo đối tượng: Khai báo biến tham chiếu 'obj' kiểu Bike, gán bằng thực thể của lớp con 'Honda4'.",
      console: "",
      highlights: { bike: true, honda: true, main: false },
      explanation: "Tính đa hình (Polymorphism) cho phép kiểu dữ liệu cha (Bike - lớp trừu tượng) tham chiếu đến đối tượng của lớp con cụ thể (Honda4)."
    },
    {
      line: 16,
      desc: "Gọi phương thức run() trên tham chiếu 'obj'.",
      console: "",
      highlights: { runCall: true },
      explanation: "Lúc này, JVM sẽ tìm xem phương thức run() được định nghĩa thế nào. Vì obj trỏ tới một thực thể Honda4, JVM sẽ gọi run() của Honda4 (Dynamic Binding)."
    },
    {
      line: 8,
      desc: "JVM nhảy vào định nghĩa của phương thức run() bên trong lớp con Honda4.",
      console: "",
      highlights: { hondaRun: true },
      explanation: "Lớp Honda4 đã override phương thức run() của cha. Bây giờ mã nguồn của phương thức này sẽ được thực thi."
    },
    {
      line: 9,
      desc: "Thực thi dòng lệnh in kết quả ra màn hình Console.",
      console: "running safely..",
      highlights: { print: true },
      explanation: "Lệnh System.out.println() sẽ xuất chuỗi 'running safely..' ra màn hình console."
    },
    {
      line: 17,
      desc: "Kết thúc phương thức main(). Chương trình dừng.",
      console: "running safely..",
      highlights: { end: true },
      explanation: "Kết thúc hàm main, bộ nhớ cấp phát cho biến tạm obj sẽ được thu hồi."
    }
  ];

  const codeLines = [
    { num: 1, text: "abstract class Bike {", indent: 0 },
    { num: 2, text: "  abstract void run();", indent: 0, highlightKey: "bike" },
    { num: 3, text: "}", indent: 0 },
    { num: 4, text: "", indent: 0 },
    { num: 5, text: "// Lớp con Honda4 kế thừa Bike và cài đặt method run()", indent: 0 },
    { num: 6, text: "class Honda4 extends Bike {", indent: 0, highlightKey: "honda" },
    { num: 7, text: "  @Override", indent: 0 },
    { num: 8, text: "  void run() {", indent: 0, highlightKey: "hondaRun" },
    { num: 9, text: "    System.out.println(\"running safely..\");", indent: 0, highlightKey: "print" },
    { num: 10, text: "  }", indent: 0 },
    { num: 11, text: "}", indent: 0 },
    { num: 12, text: "", indent: 0 },
    { num: 13, text: "class TestAbstraction1 {", indent: 0 },
    { num: 14, text: "  public static void main(String args[]) {", indent: 0, highlightKey: "main" },
    { num: 15, text: "    Bike obj = new Honda4();", indent: 0, highlightKey: "bike" },
    { num: 16, text: "    obj.run();", indent: 0, highlightKey: "runCall" },
    { num: 17, text: "  }", indent: 0, highlightKey: "end" },
    { num: 18, text: "}", indent: 0 }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      playInterval.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2500);
    } else {
      if (playInterval.current) clearInterval(playInterval.current);
    }
    return () => {
      if (playInterval.current) clearInterval(playInterval.current);
    };
  }, [isPlaying]);

  const activeLineNum = steps[currentStep].line;
  const currentConsoleOutput = steps[currentStep].console;

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          Ví dụ 1: Bike & Honda4
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          ⚙️ Bộ Mô Phỏng Chạy Code Từng Bước (Step-by-Step)
        </h4>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
          Quan sát cách chương trình biên dịch liên kết lớp trừu tượng <code>Bike</code> với cài đặt cụ thể ở lớp con <code>Honda4</code> khi chạy thực tế.
        </p>
      </div>

      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-stone-100/80 p-3 rounded-2xl mb-5">
        <div className="flex items-center gap-2">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white text-stone-700 cursor-pointer transition-all shadow-sm"
            title="Bước trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer shadow-sm transition-all ${
              isPlaying
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-white border border-stone-250 hover:bg-stone-50 text-stone-700"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Tạm dừng</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Tự động chạy</span>
              </>
            )}
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white text-stone-700 cursor-pointer transition-all shadow-sm"
            title="Bước tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={reset}
            className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 text-stone-700 cursor-pointer transition-all shadow-sm"
            title="Khởi động lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs font-semibold text-stone-500">
          Bước <span className="text-amber-700 font-bold">{currentStep + 1}</span> / {steps.length}
        </div>
      </div>

      {/* Workspace Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#1e1d1a] rounded-2xl border border-stone-800 p-4 font-mono text-xs text-stone-300 shadow-inner flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3">
              <span className="text-stone-500 flex items-center gap-1.5 font-sans font-bold text-[10px]">
                <Code className="w-3.5 h-3.5" /> TESTABSTRACTION1.JAVA
              </span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
            </div>

            <div className="space-y-1 py-1 flex-1 overflow-y-auto max-h-[360px]">
              {codeLines.map((line, idx) => {
                const isLineActive = line.num === activeLineNum;
                return (
                  <div
                    key={idx}
                    className={`flex items-start rounded px-2 py-0.5 transition-all ${
                      isLineActive
                        ? "bg-amber-950/40 border-l-2 border-amber-500 text-white font-semibold"
                        : "opacity-85"
                    }`}
                  >
                    <span className="w-6 text-stone-600 text-right pr-2 select-none text-[10px]">
                      {line.num}
                    </span>
                    <pre className="whitespace-pre-wrap flex-1 text-[11px] leading-relaxed">
                      {line.text}
                    </pre>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Inspector & Output */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Explanation panel */}
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 flex flex-col justify-between flex-1">
            <div className="space-y-2">
              <span className="text-amber-800 text-[10px] font-black uppercase flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Giải thích trạng thái
              </span>
              <p className="text-xs text-stone-750 font-medium leading-relaxed">
                {steps[currentStep].desc}
              </p>
              <div className="bg-white/80 rounded-xl p-3 border border-stone-200/50 text-[11px] text-stone-600 leading-relaxed italic">
                {steps[currentStep].explanation}
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[10px] text-stone-500">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3 text-stone-400" /> JVM Call Stack
              </span>
              <span className="font-mono text-stone-400">
                {activeLineNum ? `line: ${activeLineNum}` : "idle"}
              </span>
            </div>
          </div>

          {/* Console console panel */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 h-[120px] flex flex-col justify-between shadow-md">
            <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
              <Terminal className="w-3.5 h-3.5 text-stone-450" />
              <span className="text-[10px] font-bold text-stone-450 tracking-wider uppercase font-sans">
                Console Output
              </span>
            </div>
            
            <div className="flex-1 font-mono text-xs text-emerald-450 py-2 overflow-y-auto flex items-end">
              {currentConsoleOutput ? (
                <div className="w-full">
                  <div className="text-stone-500 text-[10px] mb-0.5">$ java TestAbstraction1</div>
                  <div className="font-bold">{currentConsoleOutput}</div>
                </div>
              ) : (
                <span className="text-stone-600 italic text-[11px]">Đang đợi chạy code...</span>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
