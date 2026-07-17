"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Database, Code, Info } from "lucide-react";

export default function AbstractShapeVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playInterval = useRef(null);

  const steps = [
    {
      line: 16,
      desc: "Khai báo biến 's' kiểu Shape và gán bằng đối tượng Rectangle mới.",
      activeClass: "rectangle",
      stackVar: "s (Shape ref)",
      heapObj: { type: "Rectangle", id: "0x3f5b" },
      console: "",
      explanation: "Lớp Shape là abstract, không thể tạo trực tiếp bằng new Shape(), nhưng có thể dùng làm kiểu tham chiếu cho đối tượng lớp con Rectangle."
    },
    {
      line: 17,
      desc: "Gọi phương thức s.draw(). JVM liên kết động đến draw() của Rectangle.",
      activeClass: "rectangle",
      stackVar: "s (Shape ref)",
      heapObj: { type: "Rectangle", id: "0x3f5b" },
      console: "drawing rectangle",
      explanation: "Mặc dù kiểu khai báo là Shape, JVM dựa vào thực thể thực tế trên Heap (Rectangle) để gọi đúng phương thức draw() của Rectangle."
    },
    {
      line: 18,
      desc: "Gán biến 's' trỏ sang đối tượng Circle1 mới được tạo.",
      activeClass: "circle",
      stackVar: "s (Shape ref)",
      heapObj: { type: "Circle1", id: "0x4a9d" },
      console: "drawing rectangle",
      explanation: "Biến tham chiếu s thay đổi địa chỉ trỏ tới. Đối tượng Rectangle cũ ở địa chỉ 0x3f5b sẽ bị thu gom rác (Garbage Collector) sau này."
    },
    {
      line: 19,
      desc: "Gọi phương thức s.draw(). JVM liên kết động đến draw() của Circle1.",
      activeClass: "circle",
      stackVar: "s (Shape ref)",
      heapObj: { type: "Circle1", id: "0x4a9d" },
      console: "drawing rectangle\ndrawing circle",
      explanation: "Bây giờ đối tượng thực tế trên Heap là Circle1, JVM tự động điều phối cuộc gọi draw() đến code của Circle1."
    }
  ];

  const codeLines = [
    { num: 1, text: "abstract class Shape {", indent: 0 },
    { num: 2, text: "  abstract void draw();", indent: 2 },
    { num: 3, text: "}", indent: 0 },
    { num: 4, text: "", indent: 0 },
    { num: 5, text: "class Rectangle extends Shape {", indent: 0 },
    { num: 6, text: "  void draw() { System.out.println(\"drawing rectangle\"); }", indent: 2 },
    { num: 7, text: "}", indent: 0 },
    { num: 8, text: "", indent: 0 },
    { num: 9, text: "class Circle1 extends Shape {", indent: 0 },
    { num: 10, text: "  void draw() { System.out.println(\"drawing circle\"); }", indent: 2 },
    { num: 11, text: "}", indent: 0 },
    { num: 12, text: "", indent: 0 },
    { num: 13, text: "class TestAbstraction2 {", indent: 0 },
    { num: 14, text: "  public static void main(String args[]) {", indent: 2 },
    { num: 15, text: "    // In real scenario, object is provided through method", indent: 4 },
    { num: 16, text: "    Shape s = new Rectangle();", indent: 4, highlight: true },
    { num: 17, text: "    s.draw();", indent: 4, highlight: true },
    { num: 18, text: "    s = new Circle1();", indent: 4, highlight: true },
    { num: 19, text: "    s.draw();", indent: 4, highlight: true },
    { num: 20, text: "  }", indent: 2 },
    { num: 21, text: "}", indent: 0 }
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
      }, 3000);
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
        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          Ví dụ 2: Shape, Rectangle & Circle
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          📐 Trực Quan Hóa UML & Biểu Đồ Bộ Nhớ
        </h4>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
          Quan sát cách biến tham chiếu cha <code>Shape s</code> liên kết động với các thực thể khác nhau trên vùng nhớ Heap.
        </p>
      </div>

      {/* UML Class Diagram Panel */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 mb-5 shadow-sm">
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5" /> Sơ đồ lớp UML (Class Diagram)
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 py-2">
          
          {/* Base class Shape */}
          <div className="border-2 border-dashed border-stone-400 bg-stone-50 rounded-xl p-3 w-44 text-center transition-all duration-300 relative shadow-sm">
            <div className="text-[9px] text-stone-500 font-mono italic">«abstract»</div>
            <div className="text-xs font-extrabold text-stone-800 font-mono italic">Shape</div>
            <div className="border-t border-stone-250 my-1.5"></div>
            <div className="text-[10px] text-stone-600 font-mono italic">+ draw(): void</div>
          </div>

          {/* SVG arrows pointing up to Shape */}
          <div className="hidden md:flex flex-col justify-center items-center h-full text-stone-400">
            <svg width="60" height="40" className="overflow-visible">
              {/* Inherit arrows */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="none" stroke="#a8a29e" strokeWidth="1.5" />
                </marker>
              </defs>
              <line x1="0" y1="20" x2="50" y2="20" stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="3,3" />
            </svg>
          </div>

          <div className="flex gap-4">
            {/* Rectangle child class */}
            <div className={`border-2 rounded-xl p-3 w-40 text-center transition-all duration-300 shadow-sm ${
              currentStepData.activeClass === "rectangle"
                ? "border-amber-500 bg-amber-50 shadow-md scale-105"
                : "border-stone-200 bg-white opacity-60"
            }`}>
              <div className="text-xs font-extrabold text-stone-800 font-mono">Rectangle</div>
              <div className="border-t border-stone-200 my-1.5"></div>
              <div className="text-[10px] text-stone-750 font-mono font-semibold">+ draw(): void</div>
            </div>

            {/* Circle child class */}
            <div className={`border-2 rounded-xl p-3 w-40 text-center transition-all duration-300 shadow-sm ${
              currentStepData.activeClass === "circle"
                ? "border-emerald-500 bg-emerald-50 shadow-md scale-105"
                : "border-stone-200 bg-white opacity-60"
            }`}>
              <div className="text-xs font-extrabold text-stone-800 font-mono">Circle1</div>
              <div className="border-t border-stone-200 my-1.5"></div>
              <div className="text-[10px] text-stone-750 font-mono font-semibold">+ draw(): void</div>
            </div>
          </div>

        </div>
      </div>

      {/* Memory Diagram Panel */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 mb-5 text-stone-300">
        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-stone-500" /> Sơ đồ phân bổ bộ nhớ JVM (Stack vs Heap)
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
          
          {/* Stack segment */}
          <div className="bg-stone-950/80 rounded-xl p-4 border border-stone-850 flex flex-col justify-between min-h-[140px]">
            <div className="text-[10px] font-bold text-stone-500 mb-2 border-b border-stone-850 pb-1 flex justify-between">
              <span>STACK MEMORY (Địa chỉ cục bộ)</span>
              <span className="text-stone-600 font-mono">LIFO</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-[#1e1d1a] border border-amber-500/50 rounded-lg px-4 py-2 text-center w-40 relative shadow-md">
                <span className="text-[9px] text-stone-500 block font-mono">Biến cục bộ</span>
                <span className="text-xs font-mono font-bold text-stone-200">{currentStepData.stackVar}</span>
                <div className="text-[9px] text-amber-400 mt-1 font-mono">{currentStepData.heapObj.id}</div>
              </div>
            </div>
          </div>

          {/* Connection Line (SVG overlay or absolute indicator) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 pointer-events-none">
            <svg width="80" height="40" className="overflow-visible">
              <path
                d="M -30 20 Q 0 0, 30 20"
                fill="none"
                stroke={currentStepData.activeClass === "rectangle" ? "#f59e0b" : "#10b981"}
                strokeWidth="2.5"
                strokeDasharray="4 2"
                className="animate-[dash_2s_linear_infinite]"
              />
              <circle
                cx="30"
                cy="20"
                r="4"
                fill={currentStepData.activeClass === "rectangle" ? "#f59e0b" : "#10b981"}
              />
            </svg>
          </div>

          {/* Heap segment */}
          <div className="bg-stone-950/80 rounded-xl p-4 border border-stone-850 flex flex-col justify-between min-h-[140px]">
            <div className="text-[10px] font-bold text-stone-500 mb-2 border-b border-stone-850 pb-1 flex justify-between">
              <span>HEAP MEMORY (Vùng nhớ đối tượng)</span>
              <span className="text-stone-600 font-mono">Dữ liệu động</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className={`border rounded-xl px-5 py-3 text-center w-44 transition-all duration-500 shadow-md ${
                currentStepData.activeClass === "rectangle"
                  ? "bg-amber-950/20 border-amber-500 text-amber-200 scale-105"
                  : "bg-emerald-950/20 border-emerald-500 text-emerald-200 scale-105"
              }`}>
                <span className="text-[9px] text-stone-500 block font-mono">Địa chỉ: {currentStepData.heapObj.id}</span>
                <span className="text-xs font-mono font-bold block mt-0.5">{currentStepData.heapObj.type} Object</span>
                <span className="text-[9px] bg-stone-900 px-1.5 py-0.5 rounded text-stone-400 font-mono mt-2 inline-block">
                  draw() = "drawing..."
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Code & Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code block */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#1e1d1a] border border-stone-800 rounded-2xl p-4 font-mono text-xs text-stone-300 shadow-inner flex-1 max-h-[300px] overflow-y-auto">
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

        {/* Right Column: Console & Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* State Explain */}
          <div className="bg-stone-100 border border-stone-200 rounded-2xl p-4 flex-1 flex flex-col justify-between shadow-inner">
            <div className="space-y-2">
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Mô tả bước {currentStep + 1}
              </span>
              <p className="text-xs font-semibold text-stone-800 leading-relaxed">
                {currentStepData.desc}
              </p>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {currentStepData.explanation}
              </p>
            </div>
            
            {/* Control buttons */}
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-stone-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white text-stone-700 cursor-pointer shadow-sm"
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
                {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                <span>{isPlaying ? "Tạm dừng" : "Tự động"}</span>
              </button>

              <button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white text-stone-700 cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={reset}
                className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-50 text-stone-700 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 h-[100px] flex flex-col justify-between shadow-md">
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider font-sans border-b border-stone-850 pb-1.5">
              Console Output
            </div>
            <div className="flex-1 font-mono text-[11px] text-emerald-450 pt-2 overflow-y-auto flex items-end">
              {currentStepData.console ? (
                <div className="w-full">
                  <div className="text-stone-600 text-[9px]">$ java TestAbstraction2</div>
                  <pre className="font-bold leading-normal m-0">{currentStepData.console}</pre>
                </div>
              ) : (
                <span className="text-stone-600 italic text-[10px]">Đang đợi chạy code...</span>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* CSS Keyframes for line transition animation */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>

    </div>
  );
}
