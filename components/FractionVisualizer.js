"use client";
import React, { useState } from "react";

export default function FractionVisualizer() {
  const [numer, setNumer] = useState(6);
  const [denom, setDenom] = useState(8);
  const [implMode, setImplMode] = useState("traditional"); // "traditional" vs "array"
  
  // Animation states for Simplify
  const [gcdSteps, setGcdSteps] = useState([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(-1);
  const [isSimplifying, setIsSimplifying] = useState(false);
  const [simplifiedNumer, setSimplifiedNumer] = useState(null);
  const [simplifiedDenom, setSimplifiedDenom] = useState(null);
  const [gcdResult, setGcdResult] = useState(null);

  const handleNumerChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setNumer(Math.max(-24, Math.min(24, val)));
      resetSimplify();
    }
  };

  const handleDenomChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val !== 0) {
      setDenom(Math.max(1, Math.min(24, val))); // Keep denom positive for visual representation
      resetSimplify();
    }
  };

  const resetSimplify = () => {
    setIsSimplifying(false);
    setGcdSteps([]);
    setCurrentStepIdx(-1);
    setSimplifiedNumer(null);
    setSimplifiedDenom(null);
    setGcdResult(null);
  };

  const startSimplify = () => {
    setIsSimplifying(true);
    
    // Calculate GCD step-by-step
    let a = Math.abs(numer);
    let b = Math.abs(denom);
    const steps = [];
    
    steps.push({ a, b, desc: `Khởi tạo thuật toán Euclid tìm GCD(${a}, ${b})` });

    while (b > 0) {
      const rem = a % b;
      steps.push({
        a,
        b,
        rem,
        desc: `Tính phần dư: ${a} % ${b} = ${rem}. Gán a = ${b}, b = ${rem}.`
      });
      a = b;
      b = rem;
    }
    
    steps.push({
      a,
      b,
      desc: `Thuật toán kết thúc vì b = 0. Ước chung lớn nhất (GCD) là a = ${a}`
    });

    setGcdSteps(steps);
    setCurrentStepIdx(0);
    setGcdResult(a);
    
    // Calculate final simplified values
    setSimplifiedNumer(numer / a);
    setSimplifiedDenom(denom / a);
  };

  const nextStep = () => {
    if (currentStepIdx < gcdSteps.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
    }
  };

  const completeAllSteps = () => {
    setCurrentStepIdx(gcdSteps.length - 1);
  };

  // Render SVG Pie Chart representation of fraction
  const renderVisualFraction = (n, d) => {
    const radius = 50;
    const cx = 60;
    const cy = 60;
    const slices = [];
    
    // Draw background circle (denominator segments)
    for (let i = 0; i < d; i++) {
      const angleStep = (2 * Math.PI) / d;
      const startAngle = i * angleStep - Math.PI / 2;
      const endAngle = (i + 1) * angleStep - Math.PI / 2;
      
      const x1 = cx + radius * Math.cos(startAngle);
      const y1 = cy + radius * Math.sin(startAngle);
      const x2 = cx + radius * Math.cos(endAngle);
      const y2 = cy + radius * Math.sin(endAngle);
      
      const isShaded = i < Math.abs(n);
      const strokeColor = "#d6d3d1"; // tailwind stone-300
      const fillColor = isShaded 
        ? (n < 0 ? "#fee2e2" : "#f5f3ff") // red-100 for negative, purple-100 for positive
        : "transparent";
      const sliceStrokeColor = isShaded
        ? (n < 0 ? "#ef4444" : "#7c3aed")
        : strokeColor;

      const largeArcFlag = angleStep > Math.PI ? 1 : 0;
      
      // If denominator is 1, draw full circle
      if (d === 1) {
        slices.push(
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={radius}
            className={isShaded ? (n < 0 ? "fill-red-100 stroke-red-500" : "fill-purple-100 stroke-purple-600") : "fill-transparent stroke-stone-300"}
            strokeWidth="1.5"
          />
        );
      } else {
        const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
        slices.push(
          <path
            key={i}
            d={pathData}
            fill={fillColor}
            stroke={sliceStrokeColor}
            strokeWidth="1.5"
            className="transition-all duration-350"
          />
        );
      }
    }

    return (
      <svg width="120" height="120" className="overflow-visible select-none">
        {slices}
        {/* Draw origin dot */}
        <circle cx={cx} cy={cy} r="2" className="fill-stone-600" />
      </svg>
    );
  };

  // Determine which fraction to display in visualizer
  const showSimplified = simplifiedNumer !== null && currentStepIdx === gcdSteps.length - 1;
  const displayNumer = showSimplified ? simplifiedNumer : numer;
  const displayDenom = showSimplified ? simplifiedDenom : denom;

  return (
    <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="mb-5 border-b border-stone-200 pb-3">
        <div className="flex justify-between items-center">
          <h4 className="text-base font-extrabold text-stone-900">
            Giả lập Phân số ADT: Một Interface - Hai Hiện thực
          </h4>
          <span className="text-[10px] font-extrabold uppercase tracking-wide bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
            Interactive
          </span>
        </div>
        <p className="text-xs text-stone-500 mt-1">
          Thay đổi tử số và mẫu số để thấy cách hai lớp hiện thực (Fraction truyền thống vs FractionArr) lưu trữ dữ liệu khác nhau nhưng cùng mang lại giao diện toán học đồng nhất.
        </p>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1.5">Tử số (int numer)</label>
          <input
            type="number"
            value={numer}
            onChange={handleNumerChange}
            className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2 text-sm font-mono font-bold text-stone-800 transition-all outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-1.5">Mẫu số (int denom)</label>
          <input
            type="number"
            value={denom}
            onChange={handleDenomChange}
            className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2 text-sm font-mono font-bold text-stone-850 transition-all outline-none"
          />
        </div>
      </div>

      {/* Implementation Picker */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setImplMode("traditional")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            implMode === "traditional"
              ? "border-purple-600 bg-purple-500/5 text-purple-700 font-extrabold"
              : "border-stone-200 hover:border-stone-300 text-stone-600 bg-white"
          }`}
        >
          Phương án A: Lớp Fraction (Biến rời)
        </button>
        <button
          onClick={() => setImplMode("array")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            implMode === "array"
              ? "border-purple-600 bg-purple-500/5 text-purple-700 font-extrabold"
              : "border-stone-200 hover:border-stone-300 text-stone-600 bg-white"
          }`}
        >
          Phương án B: Lớp FractionArr (Mảng int[])
        </button>
      </div>

      {/* Main visual Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Code Structure memory representation */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-xl p-5 flex flex-col justify-between text-white font-mono">
          <div>
            <div className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest border-b border-stone-800 pb-2 mb-4">
              Cấu trúc vùng nhớ vật lý tương ứng
            </div>

            <div className="bg-[#151413] border border-stone-800 rounded-lg p-3.5 mb-5 text-xs text-stone-300 leading-relaxed">
              {implMode === "traditional" ? (
                <div>
                  <span className="text-purple-400">class</span> <span className="text-amber-400">Fraction</span> <span className="text-purple-400">implements</span> FractionI &#123;
                  <div className="pl-4 text-stone-450">// Lưu trực tiếp 2 biến độc lập</div>
                  <div className="pl-4"><span className="text-purple-400">private int</span> numer = <span className="text-amber-400">{displayNumer}</span>;</div>
                  <div className="pl-4"><span className="text-purple-400">private int</span> denom = <span className="text-amber-400">{displayDenom}</span>;</div>
                  &#125;
                </div>
              ) : (
                <div>
                  <span className="text-purple-400">class</span> <span className="text-amber-400">FractionArr</span> <span className="text-purple-400">implements</span> FractionI &#123;
                  <div className="pl-4 text-stone-450">// Gói dữ liệu vào 1 mảng số nguyên</div>
                  <div className="pl-4"><span className="text-purple-400">private int[]</span> members = <span className="text-amber-400">&#123; {displayNumer}, {displayDenom} &#125;</span>;</div>
                  <div className="pl-4 text-stone-450">// members[0] = Tử số ({displayNumer})</div>
                  <div className="pl-4 text-stone-450">// members[1] = Mẫu số ({displayDenom})</div>
                  &#125;
                </div>
              )}
            </div>

            {/* Methods interface display */}
            <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-3 text-[11px] text-stone-300">
              <div className="text-stone-400 font-extrabold uppercase tracking-widest text-[9px] mb-2">Hành vi phản hồi qua Interface (FractionI)</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>getNumer() = <span className="text-amber-400 font-bold">{displayNumer}</span></div>
                <div>getDenom() = <span className="text-amber-400 font-bold">{displayDenom}</span></div>
                <div>toString() = <span className="text-purple-300 font-bold">"{displayNumer}/{displayDenom}"</span></div>
                <div>doubleValue() = <span className="text-emerald-400 font-bold">{(displayNumer / displayDenom).toFixed(4)}</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pie visualization and simplify controls */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between items-center shadow-inner">
          <div className="w-full flex justify-between items-center mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wide bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
              Biểu diễn trực quan (Pie Chart)
            </span>
            {showSimplified && (
              <span className="text-[9px] font-bold bg-emerald-100 text-emerald-850 px-2 py-0.5 rounded">
                Đã tối giản!
              </span>
            )}
          </div>

          {/* Visual Pie */}
          <div className="my-3 flex justify-center items-center h-[120px]">
            {renderVisualFraction(displayNumer, displayDenom)}
          </div>

          <div className="w-full text-center text-sm font-bold font-mono text-stone-750 mt-1 mb-4">
            Giá trị biểu diễn: {displayNumer}/{displayDenom}
          </div>

          {/* Simplify Button & Euclid Console */}
          <div className="w-full border-t border-stone-100 pt-4">
            {!isSimplifying ? (
              <button
                onClick={startSimplify}
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                ⚡ Tối giản phân số (Rút gọn GCD Euclid)
              </button>
            ) : (
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs leading-normal">
                <div className="flex justify-between items-center mb-2 font-bold text-stone-800 border-b border-stone-200 pb-1.5">
                  <span>Giải thuật Euclid</span>
                  <span className="text-[10px] font-mono text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">
                    Bước {currentStepIdx + 1}/{gcdSteps.length}
                  </span>
                </div>
                
                {/* Current step explanation */}
                <p className="text-[11px] text-stone-700 font-medium mb-3 min-h-[32px]">
                  {gcdSteps[currentStepIdx]?.desc}
                </p>

                {/* Step controls */}
                <div className="flex justify-between gap-1.5">
                  <button
                    disabled={currentStepIdx === 0}
                    onClick={prevStep}
                    className="flex-1 py-1.5 bg-white border border-stone-200 hover:bg-stone-50 disabled:opacity-50 text-stone-700 rounded-lg font-bold text-[10px] cursor-pointer"
                  >
                    ◀ Trước
                  </button>
                  <button
                    disabled={currentStepIdx === gcdSteps.length - 1}
                    onClick={nextStep}
                    className="flex-1 py-1.5 bg-white border border-stone-200 hover:bg-stone-50 disabled:opacity-50 text-stone-700 rounded-lg font-bold text-[10px] cursor-pointer"
                  >
                    Tiếp ▶
                  </button>
                  <button
                    onClick={completeAllSteps}
                    className="py-1.5 px-2.5 bg-stone-900 text-white hover:bg-stone-800 rounded-lg font-bold text-[10px] cursor-pointer"
                  >
                    Bỏ qua ▶▶
                  </button>
                </div>

                {/* Show simplified result when completed */}
                {currentStepIdx === gcdSteps.length - 1 && (
                  <div className="mt-3 pt-2.5 border-t border-stone-200 text-center">
                    <span className="font-bold text-emerald-700">Rút gọn thành công!</span>
                    <div className="font-mono mt-1 text-[11px] text-stone-600">
                      GCD = {gcdResult} ➜ ({numer}/{denom}) / {gcdResult} = <span className="font-bold text-stone-850">{simplifiedNumer}/{simplifiedDenom}</span>
                    </div>
                    <button
                      onClick={resetSimplify}
                      className="mt-2 text-[10px] text-purple-600 hover:underline font-bold cursor-pointer"
                    >
                      Xoá kết quả để nhập mới
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
