"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Terminal, Info, Code, Eye, Layers } from "lucide-react";

export default function AbstractBikeConstructorVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playInterval = useRef(null);

  const steps = [
    {
      line: 23,
      desc: "Bắt đầu khởi tạo đối tượng Honda mới bằng constructor: 'new Honda()'.",
      console: "",
      heapState: { created: false, gear: "undefined" },
      activeMethod: "main",
      explanation: "Hàm main() gọi constructor của lớp con Honda. Quy trình khởi tạo đối tượng kế thừa sẽ kích hoạt chuỗi gọi constructor từ cha lên con."
    },
    {
      line: 16,
      desc: "JVM nhảy vào Constructor của lớp con Honda.",
      console: "",
      heapState: { created: false, gear: "0 (mặc định)" },
      activeMethod: "Honda()",
      explanation: "Trước khi chạy thân hàm của Honda(), constructor của lớp cha Bike() sẽ tự động được gọi ngầm thông qua lệnh super()."
    },
    {
      line: 3,
      desc: "Constructor của lớp cha Bike được kích hoạt.",
      console: "bike is created",
      heapState: { created: true, gear: "10 (khởi tạo trong constructor cha)" },
      activeMethod: "Bike()",
      explanation: "Bộ nhớ cho Bike được cấp phát. Thân hàm Bike() chạy, gán giá trị gear = 10 và in ra console 'bike is created'."
    },
    {
      line: 17,
      desc: "Constructor của Honda hoàn thành và đối tượng được gán vào biến 'obj'.",
      console: "bike is created",
      heapState: { created: true, gear: "10" },
      activeMethod: "main",
      explanation: "Constructor con hoàn tất. Đối tượng Honda đã được tạo lập hoàn chỉnh trong vùng nhớ Heap và gán vào biến tham chiếu obj."
    },
    {
      line: 24,
      desc: "Gọi phương thức obj.run(). JVM nhảy vào run() của Honda.",
      console: "bike is created",
      heapState: { created: true, gear: "10" },
      activeMethod: "Honda.run()",
      explanation: "JVM liên kết động và thực thi cài đặt của run() trong lớp con Honda."
    },
    {
      line: 19,
      desc: "Phương thức run() in ra chuỗi 'running safely..'.",
      console: "bike is created\nrunning safely..",
      heapState: { created: true, gear: "10" },
      activeMethod: "Honda.run()",
      explanation: "Màn hình console xuất dòng chữ báo hiệu phương thức trừu tượng đã được ghi đè thành công."
    },
    {
      line: 25,
      desc: "Gọi phương thức obj.changeGear().",
      console: "bike is created\nrunning safely..",
      heapState: { created: true, gear: "10" },
      activeMethod: "Bike.changeGear()",
      explanation: "Vì Honda kế thừa Bike, nó thừa hưởng toàn bộ các phương thức non-abstract của Bike, bao gồm changeGear()."
    },
    {
      line: 8,
      desc: "Thực thi changeGear() được định nghĩa sẵn trong lớp cha Bike.",
      console: "bike is created\nrunning safely..\ngear changed",
      heapState: { created: true, gear: "10" },
      activeMethod: "Bike.changeGear()",
      explanation: "Lớp trừu tượng hoàn toàn có thể chứa phương thức thông thường có phần thân code hoàn chỉnh để lớp con tái sử dụng."
    },
    {
      line: 26,
      desc: "Kết thúc phương thức main. Đối tượng hoàn thành vòng đời.",
      console: "bike is created\nrunning safely..\ngear changed",
      heapState: { created: true, gear: "10" },
      activeMethod: "main",
      explanation: "Chương trình dừng chạy hoàn hảo."
    }
  ];

  const codeLines = [
    { num: 1, text: "abstract class Bike {", indent: 0 },
    { num: 2, text: "  int gear;", indent: 2 },
    { num: 3, text: "  Bike() { System.out.println(\"bike is created\"); }", indent: 2, highlightKey: "Bike()" },
    { num: 4, text: "  abstract void run();", indent: 2 },
    { num: 5, text: "  void changeGear() {", indent: 2 },
    { num: 6, text: "    System.out.println(\"gear changed\");", indent: 4 },
    { num: 7, text: "  }", indent: 2, highlightKey: "Bike.changeGear()" },
    { num: 8, text: "}", indent: 0 },
    { num: 9, text: "", indent: 0 },
    { num: 10, text: "// Lớp con Honda extends Bike", indent: 0 },
    { num: 11, text: "class Honda extends Bike {", indent: 0 },
    { num: 12, text: "  Honda() {", indent: 2 },
    { num: 13, text: "    // super(); // Tự động gọi ngầm constructor cha", indent: 4 },
    { num: 14, text: "  }", indent: 2, highlightKey: "Honda()" },
    { num: 15, text: "  void run() {", indent: 2 },
    { num: 16, text: "    System.out.println(\"running safely..\");", indent: 4 },
    { num: 17, text: "  }", indent: 2, highlightKey: "Honda.run()" },
    { num: 18, text: "}", indent: 0 },
    { num: 19, text: "", indent: 0 },
    { num: 20, text: "class TestAbstraction4 {", indent: 0 },
    { num: 21, text: "  public static void main(String args[]) {", indent: 2 },
    { num: 22, text: "    Bike obj = new Honda();", indent: 4, highlightKey: "main" },
    { num: 23, text: "    obj.run();", indent: 4 },
    { num: 24, text: "    obj.changeGear();", indent: 4 },
    { num: 25, text: "  }", indent: 2 },
    { num: 26, text: "}", indent: 0 }
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
  const currentStepData = steps[currentStep];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-orange-100 text-orange-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          Ví dụ 4: Bike có Constructor
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          🏗️ Bộ Mô Phỏng Chuỗi Constructor & Biến Đối Tượng
        </h4>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
          Tìm hiểu cách một lớp trừu tượng <code>Bike</code> khởi chạy hàm dựng (Constructor), gán biến thành viên <code>gear</code>, và cung cấp phương thức có sẵn cho lớp con.
        </p>
      </div>

      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-stone-100/80 p-3 rounded-2xl mb-5">
        <div className="flex items-center gap-2">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white text-stone-700 cursor-pointer shadow-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer shadow-sm transition-all ${
              isPlaying
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-white border border-stone-250 hover:bg-stone-50 text-stone-700"
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? "Tạm dừng" : "Tự động chạy"}</span>
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white text-stone-700 cursor-pointer shadow-sm transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={reset}
            className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 text-stone-700 cursor-pointer shadow-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs font-semibold text-stone-500">
          Bước <span className="text-orange-750 font-bold">{currentStep + 1}</span> / {steps.length}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code screen */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#1e1d1a] border border-stone-800 rounded-2xl p-4 font-mono text-xs text-stone-300 shadow-inner flex-1 max-h-[360px] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-850 pb-2 mb-3">
              <span className="text-stone-500 flex items-center gap-1.5 font-sans font-bold text-[10px]">
                <Code className="w-3.5 h-3.5 text-stone-500" /> TestAbstraction4.java
              </span>
            </div>
            <div className="space-y-0.5 py-1 text-[11px]">
              {codeLines.map((line, idx) => {
                const isLineActive = (line.num === activeLineNum) || 
                                     (line.num === 3 && activeLineNum === 3) ||
                                     (line.num === 6 && activeLineNum === 8) ||
                                     (line.num === 13 && activeLineNum === 16) ||
                                     (line.num === 16 && activeLineNum === 19) ||
                                     (line.num === 22 && activeLineNum === 23) ||
                                     (line.num === 23 && activeLineNum === 24) ||
                                     (line.num === 24 && activeLineNum === 25) ||
                                     (line.num === 25 && activeLineNum === 26);
                
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
                    <pre className="whitespace-pre-wrap flex-1 leading-relaxed">
                      {line.text}
                    </pre>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Variable Inspector & Console */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Variable Inspector Panel */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Bảng Thanh tra biến (Variable Inspector)
            </span>
            
            <div className="border border-stone-150 rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-2 bg-stone-105 border-b border-stone-150 p-2 font-bold text-stone-500 text-[10px] uppercase">
                <span>Thuộc tính (Field)</span>
                <span>Giá trị hiện thời</span>
              </div>
              
              <div className="grid grid-cols-2 border-b border-stone-150 p-2 font-mono">
                <span className="font-sans font-medium text-stone-700">obj reference</span>
                <span className={currentStep >= 3 ? "text-emerald-600 font-bold" : "text-stone-400"}>
                  {currentStep >= 3 ? "Honda@0x5d9b" : "null"}
                </span>
              </div>

              <div className="grid grid-cols-2 p-2 font-mono">
                <span className="font-sans font-medium text-stone-700">this.gear</span>
                <span className={currentStep >= 2 ? "text-amber-600 font-bold" : "text-stone-400"}>
                  {currentStepData.heapState.gear}
                </span>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-2.5 border border-stone-200 text-[10px] text-stone-500 font-mono">
              <span className="font-bold text-stone-700 block mb-0.5">Hàm dựng đang chạy (Active Frame):</span>
              <span className="text-orange-600 font-bold">{currentStepData.activeMethod}</span>
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-orange-50/50 border border-orange-200/50 rounded-2xl p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-orange-850 text-[10px] font-black uppercase flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Giải thích cơ chế
              </span>
              <p className="text-xs font-semibold text-stone-800 leading-normal">
                {currentStepData.desc}
              </p>
              <p className="text-[11px] text-stone-600 leading-relaxed italic mt-1">
                {currentStepData.explanation}
              </p>
            </div>
            <div className="text-[9px] text-stone-400 text-right mt-3">
              JVM Frame: {currentStepData.activeMethod}
            </div>
          </div>

          {/* Console Output */}
          <div className="bg-stone-900 border border-stone-850 rounded-2xl p-4 h-[100px] flex flex-col justify-between shadow-md">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider font-sans border-b border-stone-850 pb-1.5">
              Console Output
            </span>
            <div className="flex-1 font-mono text-xs text-emerald-450 pt-2 flex items-end">
              <div className="w-full">
                <div className="text-stone-600 text-[9px]">$ java TestAbstraction4</div>
                <pre className="font-bold leading-tight m-0">{currentStepData.console}</pre>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
