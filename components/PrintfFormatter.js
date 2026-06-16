"use client";
import React, { useState } from "react";

export default function PrintfFormatter() {
  const [dataType, setDataType] = useState("double"); // "double", "int", "string"
  const [valDouble, setValDouble] = useState(3.14159265);
  const [valInt, setValInt] = useState(123);
  const [valString, setValString] = useState("Java");
  
  const [flag, setFlag] = useState(""); // "", "-", "+", "0"
  const [width, setWidth] = useState(10); // 0 to 20
  const [precision, setPrecision] = useState(3); // 0 to 6

  const getFormatString = () => {
    let specifier = "%";
    if (flag) specifier += flag;
    if (width > 0) specifier += width;
    if (dataType === "double") {
      specifier += "." + precision + "f";
    } else if (dataType === "int") {
      specifier += "d";
    } else {
      specifier += "s";
    }
    return specifier;
  };

  const getFormattedValue = (fmt) => {
    const activeVal = dataType === "double" ? valDouble : dataType === "int" ? valInt : valString;
    
    // Simulate java formatting behavior in Javascript
    let formatted = "";
    if (dataType === "double") {
      formatted = activeVal.toFixed(precision);
    } else {
      formatted = activeVal.toString();
    }

    const padLen = width - formatted.length;
    if (padLen <= 0) return formatted;

    const padChar = flag === "0" && dataType !== "string" ? "0" : " ";
    const padStr = padChar.repeat(padLen);

    if (flag === "-") {
      // Left aligned
      return formatted + padStr;
    } else {
      // Right aligned
      return padStr + formatted;
    }
  };

  const formatStr = getFormatString();
  const formattedVal = getFormattedValue(formatStr);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="mb-5 border-b border-stone-200 pb-3">
        <h4 className="text-base font-extrabold text-stone-900">
          Bộ Thực Hành Định Dạng Đầu Ra (System.out.printf)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Tùy chỉnh độ rộng rộng (width), độ chính xác (precision) và cờ căn lề (flags) để xem kết quả xuất ra màn hình.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Data Type and Value Selectors */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Kiểu Dữ Liệu</label>
            <div className="grid grid-cols-3 gap-2 bg-stone-200/50 p-1 rounded-xl">
              {["double", "int", "string"].map((type) => (
                <button
                  key={type}
                  onClick={() => setDataType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer capitalize ${
                    dataType === type
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  {type === "double" ? "Số thực" : type === "int" ? "Số nguyên" : "Chuỗi"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Giá Trị Truyền Vào</label>
            {dataType === "double" && (
              <input
                type="number"
                step="0.0001"
                value={valDouble}
                onChange={(e) => setValDouble(parseFloat(e.target.value) || 0)}
                className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2 text-xs font-mono font-bold text-stone-800 transition-all outline-none"
              />
            )}
            {dataType === "int" && (
              <input
                type="number"
                value={valInt}
                onChange={(e) => setValInt(parseInt(e.target.value) || 0)}
                className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2 text-xs font-mono font-bold text-stone-800 transition-all outline-none"
              />
            )}
            {dataType === "string" && (
              <input
                type="text"
                value={valString}
                onChange={(e) => setValString(e.target.value)}
                className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2 text-xs font-mono font-bold text-stone-800 transition-all outline-none"
              />
            )}
          </div>
        </div>

        {/* Center Column: Formatter Modifiers (Flags, Width, Precision) */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Cờ Căn Lề (Flags)</label>
            <div className="flex bg-stone-200/50 p-1 rounded-xl gap-1">
              <button
                onClick={() => setFlag("")}
                className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  flag === "" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`}
              >
                Trống
              </button>
              <button
                onClick={() => setFlag("-")}
                className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  flag === "-" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`}
                title="Căn lề trái"
              >
                Căn Trái (-)
              </button>
              <button
                onClick={() => setFlag("0")}
                disabled={dataType === "string"}
                className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer disabled:opacity-30 ${
                  flag === "0" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`}
                title="Đệm thêm chữ số 0 ở trước"
              >
                Đệm Số 0 (0)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide">Độ rộng (Width)</label>
                <span className="text-xs font-extrabold text-accent font-mono">{width}</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={width}
                onChange={(e) => setWidth(parseInt(e.target.value))}
                className="w-full accent-accent h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide">Số lẻ (Precision)</label>
                <span className="text-xs font-extrabold text-accent font-mono">{dataType === "double" ? precision : "N/A"}</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                disabled={dataType !== "double"}
                value={precision}
                onChange={(e) => setPrecision(parseInt(e.target.value))}
                className="w-full accent-accent h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer disabled:opacity-30"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Execution results rendering */}
        <div className="flex flex-col justify-between bg-[#1e1d1a] border border-[#2a2926] rounded-xl p-4 text-white min-h-[160px]">
          <div>
            <div className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest border-b border-stone-850 pb-2 mb-3">
              Mã Nguồn & Kết Quả
            </div>
            
            <div className="font-mono text-xs text-stone-300 bg-[#151413] border border-stone-800 p-2.5 rounded-lg mb-4 select-text">
              <code>{`System.out.printf("${formatStr}", val);`}</code>
            </div>

            {/* Visualizing output grid cells */}
            <div className="text-[9px] text-stone-400 font-bold uppercase tracking-wide mb-1.5">Màn hình Console (Độ dài: {formattedVal.length} kí tự)</div>
            
            <div className="flex flex-wrap bg-[#151413] border border-stone-800 p-2 rounded-lg font-mono text-xs overflow-x-auto select-none gap-0.5 justify-start">
              {formattedVal.split("").map((char, cIdx) => (
                <div
                  key={cIdx}
                  className={`w-5.5 h-6.5 rounded flex justify-center items-center font-black transition-all ${
                    char === " " 
                      ? "bg-stone-800/40 text-stone-600 border border-stone-850" 
                      : char === "0" && flag === "0"
                      ? "bg-amber-950/20 text-amber-500 border border-amber-900/30"
                      : "bg-emerald-950/25 text-emerald-450 border border-emerald-900/30"
                  }`}
                  title={`Ký tự vị trí ${cIdx + 1}: '${char}'`}
                >
                  {char === " " ? "␣" : char}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
