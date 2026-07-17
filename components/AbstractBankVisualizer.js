"use client";
import React, { useState } from "react";
import { Info, Code, Landmark, ArrowRight, Server } from "lucide-react";

export default function AbstractBankVisualizer() {
  const [selectedBank, setSelectedBank] = useState("SBI");
  const [customRate, setCustomRate] = useState(8.5);
  const [isCustomMode, setIsCustomMode] = useState(false);

  const bankData = {
    SBI: {
      name: "State Bank of India",
      rate: 7.0,
      codeLine: "    Bank b = new SBI();",
      console: "Rate of Interest is: 7 %",
      color: "from-blue-600 to-cyan-500",
      textColor: "text-blue-600",
      accentBg: "bg-blue-50/50 border-blue-200",
      activeText: "SBI obj = new SBI()",
      desc: "Lớp SBI kế thừa lớp trừu tượng Bank và cài đặt phương thức getRateOfInterest() trả về giá trị 7."
    },
    PNB: {
      name: "Punjab National Bank",
      rate: 8.0,
      codeLine: "    Bank b = new PNB();",
      console: "Rate of Interest is: 8 %",
      color: "from-rose-600 to-orange-500",
      textColor: "text-rose-600",
      accentBg: "bg-rose-50/50 border-rose-200",
      activeText: "PNB obj = new PNB()",
      desc: "Lớp PNB kế thừa lớp trừu tượng Bank và cài đặt phương thức getRateOfInterest() trả về giá trị 8."
    },
    CUSTOM: {
      name: "Ngân hàng Tùy chỉnh (Đa hình mở rộng)",
      rate: customRate,
      codeLine: "    Bank b = new CustomBank();",
      console: `Rate of Interest is: ${customRate} %`,
      color: "from-emerald-600 to-teal-500",
      textColor: "text-emerald-600",
      accentBg: "bg-emerald-50/50 border-emerald-200",
      activeText: "CustomBank obj = new CustomBank()",
      desc: "Một lớp ngân hàng bất kỳ được tạo thêm tự động kế thừa Bank, minh họa khả năng mở rộng tuyệt vời của Abstraction."
    }
  };

  const activeData = isCustomMode ? bankData.CUSTOM : bankData[selectedBank];

  // SVG Circular progress calculator
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const maxDisplayRate = 12; // 12% max scale for gauge
  const progress = Math.min(activeData.rate / maxDisplayRate, 1);
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          Ví dụ 3: Bank, SBI & PNB
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          🏛️ Bảng So Sánh Lãi Suất Tương Tác (Radial Gauge)
        </h4>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
          Tương tác trực tiếp bằng cách chọn Ngân hàng để xem cách JVM tự động nhận diện và tính toán lãi suất tương ứng qua lớp trừu tượng <code>Bank</code>.
        </p>
      </div>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Interactive controls & Gauge */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Bank Selector Buttons */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              1. Chọn ngân hàng
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setSelectedBank("SBI");
                  setIsCustomMode(false);
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  !isCustomMode && selectedBank === "SBI"
                    ? "border-blue-500 bg-blue-50/50 shadow-sm"
                    : "border-stone-200 hover:bg-stone-50 bg-white"
                }`}
              >
                <Landmark className={`w-6 h-6 mb-1 ${!isCustomMode && selectedBank === "SBI" ? "text-blue-500" : "text-stone-400"}`} />
                <span className="text-xs font-bold text-stone-850">SBI</span>
                <span className="text-[9px] text-stone-500 mt-0.5">Rate: 7%</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBank("PNB");
                  setIsCustomMode(false);
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  !isCustomMode && selectedBank === "PNB"
                    ? "border-rose-500 bg-rose-50/50 shadow-sm"
                    : "border-stone-200 hover:bg-stone-50 bg-white"
                }`}
              >
                <Landmark className={`w-6 h-6 mb-1 ${!isCustomMode && selectedBank === "PNB" ? "text-rose-500" : "text-stone-400"}`} />
                <span className="text-xs font-bold text-stone-850">PNB</span>
                <span className="text-[9px] text-stone-500 mt-0.5">Rate: 8%</span>
              </button>
            </div>

            {/* Custom Rate Simulator */}
            <div className="border-t border-stone-150 pt-3">
              <button
                onClick={() => setIsCustomMode(true)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isCustomMode
                    ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                    : "border-stone-200 hover:bg-stone-50 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Landmark className={`w-4 h-4 ${isCustomMode ? "text-emerald-500" : "text-stone-400"}`} />
                  <span className="text-xs font-bold text-stone-800">Tùy biến lãi suất</span>
                </div>
                <span className="text-xs font-bold text-emerald-600">{customRate}%</span>
              </button>

              {isCustomMode && (
                <div className="mt-2.5 px-2 py-1.5 bg-stone-100 rounded-xl space-y-1.5 border border-stone-200">
                  <div className="flex justify-between text-[10px] font-bold text-stone-500">
                    <span>Điều chỉnh lãi suất ngân hàng mới:</span>
                    <span className="text-emerald-600">{customRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.5"
                    value={customRate}
                    onChange={(e) => setCustomRate(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-stone-250 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Radial Gauge Visualizer */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center min-h-[220px]">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 self-start">
              2. Đồng hồ đo Lãi suất
            </span>
            
            <div className="relative w-36 h-36 flex items-center justify-center my-2">
              {/* SVG Radial Progress */}
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke="#f1f0ee"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Active progress arc */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className={`transition-all duration-700 ease-out ${
                    isCustomMode ? "text-emerald-500" : selectedBank === "SBI" ? "text-blue-500" : "text-rose-500"
                  }`}
                />
              </svg>
              {/* Central Text */}
              <div className="absolute text-center">
                <span className="text-3xl font-black text-stone-900 tracking-tight">{activeData.rate.toFixed(1)}</span>
                <span className="text-sm font-extrabold text-stone-500 ml-0.5">%</span>
                <span className="block text-[9px] font-bold text-stone-450 uppercase mt-0.5 tracking-wider">
                  Lãi suất
                </span>
              </div>
            </div>

            <div className="text-center mt-1">
              <span className="text-xs font-extrabold text-stone-850 block">{activeData.name}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Code viewer & explain */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Explanation box */}
          <div className={`border rounded-2xl p-4 transition-all duration-500 flex-1 flex flex-col justify-between ${activeData.accentBg}`}>
            <div className="space-y-2">
              <span className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${activeData.textColor}`}>
                <Info className="w-4 h-4" /> Chi tiết cài đặt đối tượng
              </span>
              <h5 className="text-sm font-extrabold text-stone-900">{activeData.name}</h5>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">
                {activeData.desc}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-2 text-[10px] text-stone-500">
              <span className="font-bold">Đa hình tham chiếu:</span>
              <span className="font-mono bg-white px-2 py-0.5 border border-stone-200 rounded text-stone-600 font-semibold shadow-xs">
                {activeData.activeText}
              </span>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="bg-[#1e1d1a] border border-stone-800 rounded-2xl p-4 font-mono text-xs text-stone-300 shadow-lg">
            <div className="text-[10px] font-bold text-stone-500 uppercase border-b border-stone-850 pb-2 mb-3 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-stone-500" /> TestAbstraction3.java
            </div>
            
            <div className="space-y-1.5 py-1 text-[11px] leading-relaxed">
              <div><span className="text-purple-400">class</span> <span className="text-blue-300">TestAbstraction3</span> &#123;</div>
              <div>  <span className="text-purple-400">public static void</span> <span className="text-blue-300">main</span>(String args[]) &#123;</div>
              
              {/* Highlightable line 1 */}
              <div className={`pl-4 rounded transition-all duration-300 ${isCustomMode ? "opacity-30" : "bg-stone-800/40"}`}>
                <span className="text-stone-500 select-none mr-2 text-[9px]">1</span>
                <span className="text-stone-100 font-semibold">{activeData.codeLine}</span>
              </div>
              
              {/* Line 2 */}
              <div className="pl-4 opacity-80">
                <span className="text-stone-500 select-none mr-2 text-[9px]">2</span>
                <span>System.out.println(<span className="text-amber-300">"Rate of Interest is: "</span> + b.getRateOfInterest() + <span className="text-amber-300">" %"</span>);</span>
              </div>
              
              <div>  &#125;</div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Console */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 h-[100px] flex flex-col justify-between shadow-md">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider font-sans border-b border-stone-850 pb-1.5">
              Console Output
            </span>
            <div className="flex-1 font-mono text-xs text-emerald-450 pt-2 flex items-end">
              <div className="w-full">
                <div className="text-stone-600 text-[9px]">$ java TestAbstraction3</div>
                <div className="font-bold">{activeData.console}</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
