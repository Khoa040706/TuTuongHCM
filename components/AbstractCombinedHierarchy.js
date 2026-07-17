"use client";
import React, { useState } from "react";
import { Info, Code, Play, ArrowRight, CornerDownRight, Landmark } from "lucide-react";

export default function AbstractCombinedHierarchy() {
  const [activeStep, setActiveStep] = useState(0); // 0: Idle, 1: Instantiation, 2: Call a(), 3: Call b(), 4: Call c()
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [methodLookup, setMethodLookup] = useState(""); // Highlight search paths

  const handleRunDemo = () => {
    setActiveStep(1);
    setConsoleLogs(["$ java TestAbstraction4", "A a = new M(); // Khởi tạo thực thể M"]);
    setMethodLookup("Khởi tạo M thành công");
    
    // Simulate runtime steps sequentially
    setTimeout(() => {
      setActiveStep(2);
      setMethodLookup("Tìm thấy a() trực tiếp trong class M -> Chạy!");
      setConsoleLogs(prev => [...prev, "a.a(); -> Output: I am a"]);
    }, 2000);

    setTimeout(() => {
      setActiveStep(3);
      setMethodLookup("Tìm thấy b() trực tiếp trong class M -> Chạy!");
      setConsoleLogs(prev => [...prev, "a.b(); -> Output: I am b"]);
    }, 4000);

    setTimeout(() => {
      setActiveStep(4);
      setMethodLookup("Gọi c(): Không có trong M -> JVM nhảy lên class cha B -> Tìm thấy c() -> Chạy!");
      setConsoleLogs(prev => [...prev, "a.c(); -> Output: I am c"]);
    }, 6500);

    setTimeout(() => {
      setActiveStep(0);
      setMethodLookup("Hoàn tất demo thực thi");
    }, 9500);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-purple-100 text-purple-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          5. Ví dụ kết hợp tổng hợp
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          🌳 Sơ Đồ Phân Cấp Kế Thừa 3 Tầng & Đa Hình
        </h4>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
          Phân tích mối quan hệ kế thừa phức tạp giữa <code>Interface A</code> → <code>Abstract Class B</code> → <code>Class cụ thể M</code>. Nhấn nút chạy demo để quan sát luồng tìm kiếm phương thức (Method Lookup) của JVM.
        </p>
      </div>

      {/* Hierarchy SVG Diagram */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 mb-5 shadow-sm overflow-x-auto">
        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-4">
          Sơ đồ kế thừa & cài đặt 3 tầng
        </span>
        
        <div className="min-w-[500px] flex flex-col items-center gap-6 py-4 relative">
          
          {/* TIER 1: Interface A */}
          <div className={`border-2 rounded-xl p-3 w-56 text-center transition-all duration-300 relative ${
            activeStep === 0 ? "border-blue-300 bg-blue-50/20" : "border-stone-200 bg-stone-50/50 opacity-40"
          }`}>
            <span className="absolute top-1 right-2 text-[8px] bg-blue-100 text-blue-700 font-extrabold px-1 rounded font-mono">
              INTERFACE
            </span>
            <div className="text-xs font-black text-stone-850 font-mono">interface A</div>
            <div className="border-t border-stone-200 my-1.5"></div>
            <div className="text-[10px] text-stone-600 font-mono text-left space-y-0.5">
              <div>+ a(): void</div>
              <div>+ b(): void</div>
              <div>+ c(): void</div>
            </div>
          </div>

          {/* Connection Line: Interface to Abstract */}
          <div className="h-6 w-0.5 bg-stone-300 relative">
            <div className="absolute top-0 -left-1 text-stone-300 text-[8px] font-mono select-none">▲</div>
          </div>

          {/* TIER 2: Abstract Class B */}
          <div className={`border-2 rounded-xl p-3 w-56 text-center transition-all duration-300 relative ${
            activeStep === 4
              ? "border-orange-500 bg-orange-50 shadow-md scale-105"
              : activeStep === 0
              ? "border-orange-300 bg-orange-50/20"
              : "border-stone-200 bg-stone-50/50 opacity-40"
          }`}>
            <span className="absolute top-1 right-2 text-[8px] bg-orange-100 text-orange-700 font-extrabold px-1 rounded font-mono">
              ABSTRACT
            </span>
            <div className="text-xs font-black text-stone-850 font-mono">abstract class B</div>
            <div className="border-t border-stone-250 my-1.5"></div>
            <div className="text-[10px] text-left font-mono space-y-0.5">
              <div className="text-stone-400 italic">a(), b() // chưa cài đặt</div>
              <div className="text-orange-650 font-semibold">+ c(): void &#123; I am c &#125;</div>
            </div>
          </div>

          {/* Connection Line: Abstract to Concrete */}
          <div className="h-6 w-0.5 bg-stone-300 relative">
            <div className="absolute top-0 -left-1 text-stone-300 text-[8px] font-mono select-none">▲</div>
          </div>

          {/* TIER 3: Concrete Class M */}
          <div className={`border-2 rounded-xl p-3 w-56 text-center transition-all duration-300 relative ${
            (activeStep === 1 || activeStep === 2 || activeStep === 3)
              ? "border-emerald-500 bg-emerald-50 shadow-md scale-105"
              : activeStep === 0
              ? "border-emerald-300 bg-emerald-50/20"
              : "border-stone-200 bg-stone-50/50 opacity-40"
          }`}>
            <span className="absolute top-1 right-2 text-[8px] bg-emerald-100 text-emerald-700 font-extrabold px-1 rounded font-mono">
              CONCRETE
            </span>
            <div className="text-xs font-black text-stone-850 font-mono">class M extends B</div>
            <div className="border-t border-stone-200 my-1.5"></div>
            <div className="text-[10px] text-left font-mono space-y-0.5">
              <div className={activeStep === 2 ? "text-emerald-700 font-bold" : "text-stone-600"}>
                + a(): void &#123; I am a &#125;
              </div>
              <div className={activeStep === 3 ? "text-emerald-700 font-bold" : "text-stone-600"}>
                + b(): void &#123; I am b &#125;
              </div>
              <div className="text-stone-400 italic">c() // kế thừa từ B</div>
            </div>
          </div>

          {/* SVG Animated Search Path during activeStep = 4 (c() call) */}
          {activeStep === 4 && (
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center">
              {/* Dotted indicator from M rising up to B */}
              <div className="absolute bottom-[60px] top-[140px] w-1 border-r-2 border-dashed border-orange-500 animate-[pulse_1s_infinite]"></div>
              <div className="absolute top-[138px] text-orange-500 text-xs font-bold animate-[bounce_1s_infinite]">
                Method Lookup 🔎
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Code, Controls, and Console Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Code view */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#1e1d1a] border border-stone-800 rounded-2xl p-4 font-mono text-xs text-stone-300 shadow-inner flex-1 max-h-[300px] overflow-y-auto">
            <div className="text-[10px] font-bold text-stone-500 uppercase border-b border-stone-850 pb-1.5 mb-2.5">
              M.java (Mã nguồn gộp)
            </div>
            <pre className="text-[10px] leading-relaxed">
{`interface A {
  void a();
  void b();
  void c();
}

abstract class B implements A {
  public void c() {
    System.out.println("I am c");
  }
}

class M extends B {
  public void a() { System.out.println("I am a"); }
  public void b() { System.out.println("I am b"); }
}

class Test {
  public static void main(String args[]) {
    A a = new M();
    a.a();
    a.b();
    a.c();
  }
}`}
            </pre>
          </div>
        </div>

        {/* Right Column: Controller & Console */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Controls */}
          <div className="bg-stone-100 border border-stone-200 rounded-2xl p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> Điều khiển mô phỏng
              </span>
              
              <button
                onClick={handleRunDemo}
                disabled={activeStep !== 0}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-md disabled:bg-stone-300 disabled:shadow-none cursor-pointer transition-all uppercase tracking-wider"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Chạy Demo thực thi</span>
              </button>

              <div className="bg-white/80 rounded-xl p-3 border border-stone-200/60 min-h-[70px] flex items-start gap-2">
                <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-black uppercase shrink-0 mt-0.5">
                  JVM Trace
                </span>
                <span className="text-[11px] text-stone-700 font-semibold leading-relaxed">
                  {methodLookup || "Nhấn nút ở trên để bắt đầu chạy luồng chạy thử code."}
                </span>
              </div>
            </div>

            <div className="text-[9px] text-stone-400 mt-2 font-mono">
              JVM Class Loader: M.class, B.class, A.class loaded.
            </div>
          </div>

          {/* Console */}
          <div className="bg-stone-900 border border-stone-850 rounded-2xl p-4 h-[120px] flex flex-col justify-between shadow-md">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider font-sans border-b border-stone-850 pb-1.5">
              Console Output
            </span>
            <div className="flex-1 font-mono text-[10px] text-emerald-450 pt-2 overflow-y-auto">
              {consoleLogs.length > 0 ? (
                consoleLogs.map((log, idx) => (
                  <div key={idx} className={idx === 0 ? "text-stone-500" : ""}>{log}</div>
                ))
              ) : (
                <span className="text-stone-600 italic text-[10px]">Đang đợi chạy code...</span>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
