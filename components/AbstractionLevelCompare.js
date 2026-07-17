"use client";
import React, { useState } from "react";
import { Info, ToggleLeft, ToggleRight, XCircle, CheckCircle2 } from "lucide-react";

export default function AbstractionLevelCompare() {
  // Abstract Class Method States (true = abstract, false = concrete)
  const [classMethods, setClassMethods] = useState({
    move: true,
    sound: false,
    sleep: false
  });

  // Interface Method States (locked to true before Java 8)
  const [interfaceError, setInterfaceError] = useState(false);

  // Toggle method for Abstract Class
  const toggleClassMethod = (method) => {
    setClassMethods(prev => ({
      ...prev,
      [method]: !prev[method]
    }));
  };

  // Click handler for Interface methods (which attempts to make them concrete and triggers compile error)
  const handleInterfaceToggleAttempt = () => {
    setInterfaceError(true);
    setTimeout(() => {
      setInterfaceError(false);
    }, 4000);
  };

  // Calculate abstraction level percentage
  const totalMethods = 3;
  const abstractCount = Object.values(classMethods).filter(Boolean).length;
  const classPercentage = Math.round((abstractCount / totalMethods) * 100);

  // Radial Gauge SVG calculations
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (classPercentage / 100) * circumference;

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Title block */}
      <div className="mb-5 border-b border-stone-200 pb-3">
        <h4 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
          ⚖️ Bộ So Sánh: Tỉ Lệ Trừu Tượng Hóa trong Java
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Học sinh trực quan hóa và tương tác để thấy sự khác biệt cốt lõi: Lớp trừu tượng có mức độ trừu tượng linh hoạt (0-100%), trong khi Giao diện bắt buộc đạt tuyệt đối (100%).
        </p>
      </div>

      {/* Main Grid: two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Column: Abstract Class */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
          {/* Header Accent Ring */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[9px] font-black tracking-widest text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded">Abstract Class</span>
                <h5 className="text-sm font-extrabold text-stone-900 mt-1">Lớp Trừu Tượng (0% - 100%)</h5>
              </div>

              {/* Circular Radial Gauge */}
              <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    className="stroke-stone-100"
                    strokeWidth="5.5"
                    fill="transparent"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    className="stroke-amber-500 transition-all duration-500"
                    strokeWidth="5.5"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[10px] font-mono font-black text-amber-600">{classPercentage}%</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 mb-5 leading-relaxed">
              Có thể chứa cả các phương thức trừu tượng (chưa cài đặt) và các phương thức cụ thể (đã cài đặt). Tỉ lệ tùy biến.
            </p>

            {/* Methods list */}
            <div className="space-y-3.5 mb-5">
              {Object.keys(classMethods).map((method) => {
                const isAbstract = classMethods[method];
                return (
                  <div key={method} className="bg-stone-50 border border-stone-150 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-stone-850">
                        {method}()
                      </div>
                      <div className="text-[9px] text-stone-450 font-bold uppercase mt-1">
                        {isAbstract ? (
                          <span className="text-amber-600">Abstract (Signature only)</span>
                        ) : (
                          <span className="text-stone-500">Concrete (Has Body)</span>
                        )}
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleClassMethod(method)}
                      className="cursor-pointer transition-all hover:scale-105 active:scale-95 text-stone-600"
                    >
                      {isAbstract ? (
                        <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-700 px-2 py-1 rounded-lg text-[10px] font-black">
                          <span>Chưa cài đặt</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 bg-stone-200/50 border border-stone-350 text-stone-600 px-2 py-1 rounded-lg text-[10px] font-black">
                          <span>Đã cài đặt</span>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Java Code representation */}
          <div className="bg-stone-900 border border-stone-850 rounded-xl p-3.5 font-mono text-[10px] text-stone-300 leading-relaxed select-text mt-3">
            <span className="text-amber-500">public abstract class</span> <span className="text-blue-400">Animal</span> &#123;<br/>
            {Object.keys(classMethods).map(method => {
              const isAbstract = classMethods[method];
              if (isAbstract) {
                return (
                  <div key={method} className="pl-4 text-amber-450/90 font-bold transition-all duration-300">
                    public abstract void {method}();
                  </div>
                );
              } else {
                return (
                  <div key={method} className="pl-4 text-stone-400 transition-all duration-300">
                    public void {method}() &#123;<br/>
                    &nbsp;&nbsp;System.out.println("{method}");<br/>
                    &#125;
                  </div>
                );
              }
            })}
            &#125;
          </div>

        </div>

        {/* Right Column: Interface */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
          {/* Header Accent Ring */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[9px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">Interface</span>
                <h5 className="text-sm font-extrabold text-stone-900 mt-1">Giao Diện (100% Abstract)</h5>
              </div>

              {/* Circular Radial Gauge (Locked to 100%) */}
              <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    className="stroke-stone-100"
                    strokeWidth="5.5"
                    fill="transparent"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    className="stroke-emerald-500"
                    strokeWidth="5.5"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[10px] font-mono font-black text-emerald-600">100%</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 mb-5 leading-relaxed">
              Bắt buộc 100% các phương thức đều phải là trừu tượng (trước Java 8). Không chứa phương thức nào có thân hàm.
            </p>

            {/* Methods list */}
            <div className="space-y-3.5 mb-5 relative">
              
              {/* Overlay simulation error */}
              {interfaceError && (
                <div className="absolute inset-0 bg-red-500/5 backdrop-blur-[1px] border border-red-500/20 rounded-xl flex items-center justify-center p-3 text-center z-20 animate-in fade-in zoom-in duration-300">
                  <div className="flex flex-col items-center gap-1.5">
                    <XCircle className="w-6 h-6 text-red-500 animate-bounce" />
                    <span className="text-[10px] font-mono font-bold text-red-650">
                      Compilation Error:<br/>
                      Interface abstract methods cannot have a body!
                    </span>
                  </div>
                </div>
              )}

              {["move", "sound", "sleep"].map((method) => {
                return (
                  <div key={method} className="bg-stone-50 border border-stone-150 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-stone-850">
                        {method}()
                      </div>
                      <div className="text-[9px] text-emerald-600 font-bold uppercase mt-1">
                        Abstract (Signature only)
                      </div>
                    </div>

                    {/* Locked Toggle Attempt Button */}
                    <button
                      onClick={handleInterfaceToggleAttempt}
                      className="cursor-pointer transition-all hover:scale-105 active:scale-95"
                    >
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/35 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-black">
                        <span>Chưa cài đặt</span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Java Code representation */}
          <div className="bg-stone-900 border border-stone-850 rounded-xl p-3.5 font-mono text-[10px] text-stone-300 leading-relaxed select-text mt-3">
            <span className="text-emerald-500">public interface</span> <span className="text-blue-400">Playable</span> &#123;<br/>
            {["move", "sound", "sleep"].map(method => (
              <div key={method} className="pl-4 text-emerald-450/90 font-bold">
                void {method}(); <span className="text-stone-550">// Tự động là public abstract</span>
              </div>
            ))}
            &#125;
          </div>

        </div>

      </div>

      {/* Info Tip block */}
      <div className="bg-stone-100 border border-stone-200 px-4 py-3 rounded-xl flex items-start gap-2.5 mt-5">
        <Info className="w-4.5 h-4.5 text-stone-550 shrink-0 mt-0.5" />
        <p className="text-xs text-stone-600 leading-relaxed font-sans select-text">
          💡 <strong>Điểm cần lưu ý:</strong> Từ phiên bản <strong>Java 8</strong> trở đi, Java cho phép viết phương thức có cài đặt trong Interface bằng cách khai báo từ khóa <code>default</code> hoặc <code>static</code>. Tuy nhiên trong lý thuyết OOP căn bản và câu hỏi thi trắc nghiệm học thuật truyền thống, Giao diện (Interface) luôn được coi là trừu tượng tuyệt đối (100%).
        </p>
      </div>

    </div>
  );
}
