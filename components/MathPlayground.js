"use client";
import React, { useState } from "react";

export default function MathPlayground() {
  const [method, setMethod] = useState("ceil"); // "abs", "ceil", "floor", "max", "min", "pow", "sqrt", "random"
  const [valX, setValX] = useState("-3.5");
  const [valY, setValY] = useState("2");

  const getResultAndExplain = () => {
    const x = parseFloat(valX);
    const y = parseFloat(valY);

    if (isNaN(x) && method !== "random") {
      return { result: "N/A", desc: "Vui lòng nhập giá trị hợp lệ." };
    }

    switch (method) {
      case "abs":
        return {
          result: Math.abs(x).toString(),
          code: `Math.abs(${x})`,
          desc: `Trả về khoảng cách từ số <code>${x}</code> đến số <code>0</code> trên trục số. Giá trị khoảng cách luôn là số dương.`
        };
      case "ceil": {
        const res = Math.ceil(x);
        return {
          result: res.toFixed(1),
          code: `Math.ceil(${x})`,
          desc: `Làm tròn <strong>lên</strong> (hướng về phía dương vô cực - bên phải trục số).<br/>Số <code>${x}</code> nằm giữa <code>${Math.floor(x)}</code> và <code>${Math.ceil(x)}</code>. Khi làm tròn lên sẽ ra <code>${res}</code>.`
        };
      }
      case "floor": {
        const res = Math.floor(x);
        return {
          result: res.toFixed(1),
          code: `Math.floor(${x})`,
          desc: `Làm tròn <strong>xuống</strong> (hướng về phía âm vô cực - bên trái trục số).<br/>Số <code>${x}</code> nằm giữa <code>${Math.floor(x)}</code> và <code>${Math.ceil(x)}</code>. Khi làm tròn xuống sẽ ra <code>${res}</code>.`
        };
      }
      case "max":
        if (isNaN(y)) return { result: "N/A", desc: "Vui lòng nhập số thứ hai." };
        return {
          result: Math.max(x, y).toString(),
          code: `Math.max(${x}, ${y})`,
          desc: `So sánh <code>${x}</code> và <code>${y}</code>, trả về số lớn hơn (nằm bên phải hơn trên trục số). Kết quả là <code>${Math.max(x, y)}</code>.`
        };
      case "min":
        if (isNaN(y)) return { result: "N/A", desc: "Vui lòng nhập số thứ hai." };
        return {
          result: Math.min(x, y).toString(),
          code: `Math.min(${x}, ${y})`,
          desc: `So sánh <code>${x}</code> và <code>${y}</code>, trả về số nhỏ hơn (nằm bên trái hơn trên trục số). Kết quả là <code>${Math.min(x, y)}</code>.`
        };
      case "pow":
        if (isNaN(y)) return { result: "N/A", desc: "Vui lòng nhập số thứ hai." };
        const powRes = Math.pow(x, y);
        return {
          result: powRes.toString(),
          code: `Math.pow(${x}, ${y})`,
          desc: `Tính lũy thừa <code>${x}<sup>${y}</sup></code> (tức là <code>${x}</code> mũ <code>${y}</code>). Kết quả là <code>${powRes}</code>.`
        };
      case "sqrt":
        if (x < 0) {
          return {
            result: "NaN",
            code: `Math.sqrt(${x})`,
            desc: "<strong>Lỗi toán học:</strong> Không thể tính căn bậc hai của một số âm trong tập số thực Java. Kết quả trả về là hằng số đặc biệt <code>NaN</code> (Not a Number)."
          };
        }
        const sqrtRes = Math.sqrt(x);
        return {
          result: sqrtRes.toFixed(4),
          code: `Math.sqrt(${x})`,
          desc: `Tính căn bậc hai của <code>${x}</code> (tức là &radic;<code>${x}</code>). Kết quả xấp xỉ là <code>${sqrtRes.toFixed(4)}</code>.`
        };
      case "random":
        return {
          result: "[Giá trị ngẫu nhiên trong khoảng [0.0, 1.0)]",
          code: "Math.random()",
          desc: "Trả về một số thực ngẫu nhiên có kiểu <code>double</code> nằm trong nửa khoảng từ <code>0.0</code> (bao gồm) đến cận dưới <code>1.0</code> (không bao gồm)."
        };
      default:
        return { result: "", desc: "" };
    }
  };

  const info = getResultAndExplain();

  const handleMethodChange = (m) => {
    setMethod(m);
    if (m === "pow") {
      setValX("2");
      setValY("3");
    } else if (m === "sqrt") {
      setValX("9");
    } else if (m === "max" || m === "min") {
      setValX("5");
      setValY("8");
    } else {
      setValX("-3.5");
    }
  };

  const isTwoParams = method === "max" || method === "min" || method === "pow";
  const isNoParams = method === "random";

  // Drawing number line for floor/ceil
  const renderNumberLine = () => {
    if (method !== "ceil" && method !== "floor") return null;
    const x = parseFloat(valX);
    if (isNaN(x)) return null;

    const lower = Math.floor(x);
    const upper = Math.ceil(x);
    
    // Calculate relative percentage for visual pointer
    let pct = 50;
    if (upper !== lower) {
      pct = ((x - lower) / (upper - lower)) * 100;
    } else {
      pct = 50;
    }

    // Clamp between 5% and 95% for UI layout safety
    pct = Math.max(5, Math.min(95, pct));

    return (
      <div className="bg-stone-900 border border-stone-850 p-4 rounded-xl text-white my-4 relative">
        <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-5">
          Minh họa trực quan trục số (Trực quan hóa làm tròn)
        </div>
        
        {/* The Number Line Line */}
        <div className="h-1 bg-stone-750 relative my-6 rounded-full">
          
          {/* Lower Bound tick */}
          <div className="absolute left-0 -top-2 flex flex-col items-center">
            <div className="w-1.5 h-4 bg-stone-500 rounded-full"></div>
            <span className="text-xs font-mono font-bold mt-1 text-stone-400">{lower}</span>
          </div>

          {/* Upper Bound tick */}
          <div className="absolute right-0 -top-2 flex flex-col items-center">
            <div className="w-1.5 h-4 bg-stone-500 rounded-full"></div>
            <span className="text-xs font-mono font-bold mt-1 text-stone-400">{upper}</span>
          </div>

          {/* Value pointer */}
          <div 
            className="absolute -top-3.5 flex flex-col items-center transition-all duration-300"
            style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-3 h-3 bg-amber-500 rounded-full border border-white animate-pulse"></div>
            <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black font-mono mt-1">
              {x}
            </span>
          </div>

          {/* Direction indicator arrow */}
          {method === "ceil" && (
            <div 
              className="absolute -top-8 text-emerald-400 text-xs font-black transition-all duration-300 flex items-center gap-1"
              style={{ left: `${(pct + 100) / 2}%`, transform: "translateX(-50%)" }}
            >
              Làm tròn lên ➔
            </div>
          )}
          {method === "floor" && (
            <div 
              className="absolute -top-8 text-emerald-400 text-xs font-black transition-all duration-300 flex items-center gap-1"
              style={{ left: `${pct / 2}%`, transform: "translateX(-50%)" }}
            >
              ⬅ Làm tròn xuống
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          Bộ Thử Nghiệm Phương Thức Lớp Math
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chọn phương thức toán học và thay đổi giá trị đầu vào để xem trực quan cách Java hoạt động.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        
        {/* Left selector and inputs (5 cols) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
          
          {/* Method selector */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1.5">
              Chọn phương thức (Method)
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-stone-200 p-1.5 rounded-xl">
              {["abs", "ceil", "floor", "pow", "sqrt", "max", "min", "random"].map((m) => (
                <button
                  key={m}
                  onClick={() => handleMethodChange(m)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    method === m
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  Math.{m}()
                </button>
              ))}
            </div>
          </div>

          {/* Inputs based on selection */}
          {!isNoParams && (
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1">
                  Giá trị X
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={valX}
                  onChange={(e) => setValX(e.target.value)}
                  className="w-full bg-white border border-stone-250 rounded-xl px-3 py-2 text-xs md:text-sm font-mono focus:outline-none focus:border-accent text-stone-800 font-bold"
                />
              </div>

              {isTwoParams && (
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1">
                    Giá trị Y
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={valY}
                    onChange={(e) => setValY(e.target.value)}
                    className="w-full bg-white border border-stone-250 rounded-xl px-3 py-2 text-xs md:text-sm font-mono focus:outline-none focus:border-accent text-stone-800 font-bold"
                  />
                </div>
              )}
            </div>
          )}

        </div>

        {/* Right visualization and results (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between gap-4">
          
          {/* Java expression */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2">Lời gọi hàm Java</div>
            <div className="text-stone-300">
              <span className="text-amber-400">double</span> result = <span className="text-sky-300">{info.code}</span>;
            </div>
          </div>

          {/* Result view */}
          <div className="bg-stone-900 border border-stone-850 p-4 rounded-xl text-white flex-1 flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2">Giá trị trả về (result)</div>
              <div className="font-mono text-base md:text-lg border border-stone-800 bg-[#151413] p-3 rounded-lg text-[#34d399] tracking-wider font-black text-center">
                {info.result}
              </div>
            </div>
            
            {/* Visual Number Line */}
            {renderNumberLine()}
            
            {/* Legend explanation of spaces */}
            <div className="text-[10px] text-stone-400 border-t border-stone-800 pt-2.5 mt-3 leading-relaxed">
              💡 <strong>Giải thích chi tiết:</strong><br/>
              <span dangerouslySetInnerHTML={{ __html: info.desc }} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
