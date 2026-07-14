"use client";
import React, { useState } from "react";

export default function PrintfSandbox() {
  const [type, setType] = useState("double"); // "int", "double", "string"
  const [val, setVal] = useState("3.14159");
  const [width, setWidth] = useState(10);
  const [precision, setPrecision] = useState(2);
  const [flag, setFlag] = useState(""); // "", "-", "0"

  const handleTypeChange = (newType) => {
    setType(newType);
    setFlag("");
    if (newType === "int") {
      setVal("123");
      setWidth(8);
    } else if (newType === "double") {
      setVal("3.14159");
      setWidth(10);
      setPrecision(2);
    } else {
      setVal("Hello");
      setWidth(10);
    }
  };

  const getFormatString = () => {
    const flagStr = flag;
    const widthStr = width > 0 ? width.toString() : "";
    if (type === "int") {
      return `%${flagStr}${widthStr}d`;
    } else if (type === "double") {
      return `%${flagStr}${widthStr}.${precision}f`;
    } else {
      // String doesn't support '0' flag in Java
      const cleanFlag = flag === "0" ? "" : flag;
      return `%${cleanFlag}${widthStr}s`;
    }
  };

  const getFormattedOutput = () => {
    let result = "";
    const cleanFlag = type === "string" && flag === "0" ? "" : flag;

    if (type === "int") {
      const parsedInt = parseInt(val);
      const isNegative = parsedInt < 0;
      const numStr = isNaN(parsedInt) ? "0" : Math.abs(parsedInt).toString();
      const rawSign = isNegative ? "-" : "";

      result = rawSign + numStr;

      if (width > result.length) {
        const diff = width - result.length;
        if (cleanFlag === "-") {
          result = result + " ".repeat(diff);
        } else if (cleanFlag === "0") {
          // If negative, sign should stay at the far left
          result = rawSign + "0".repeat(diff) + numStr;
        } else {
          result = " ".repeat(diff) + result;
        }
      }
    } else if (type === "double") {
      const parsedFloat = parseFloat(val);
      const isNegative = parsedFloat < 0;
      const absVal = isNaN(parsedFloat) ? 0 : Math.abs(parsedFloat);
      const numStr = absVal.toFixed(precision);
      const rawSign = isNegative ? "-" : "";

      result = rawSign + numStr;

      if (width > result.length) {
        const diff = width - result.length;
        if (cleanFlag === "-") {
          result = result + " ".repeat(diff);
        } else if (cleanFlag === "0") {
          result = rawSign + "0".repeat(diff) + numStr;
        } else {
          result = " ".repeat(diff) + result;
        }
      }
    } else if (type === "string") {
      result = val.toString();
      if (width > result.length) {
        const diff = width - result.length;
        if (cleanFlag === "-") {
          result = result + " ".repeat(diff);
        } else {
          result = " ".repeat(diff) + result;
        }
      }
    }
    return result;
  };

  const formatStr = getFormatString();
  const outputStr = getFormattedOutput();

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          Hộp Thử Nghiệm Định Dạng Xuất printf()
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Thay đổi các thuộc tính định dạng để thấy ngay cách Java in và chèn khoảng trắng đệm (padding).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Left Control Panel (6 cols) */}
        <div className="md:col-span-6 space-y-4">
          
          {/* Tab Selector */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1.5">
              Kiểu dữ liệu (Specifier Type)
            </label>
            <div className="flex bg-stone-200 p-1 rounded-xl w-full">
              {["double", "int", "string"].map((t) => (
                <button
                  key={t}
                  onClick={() => handleTypeChange(t)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer capitalize ${
                    type === t
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  {t === "int" ? "Số nguyên (d)" : t === "double" ? "Số thực (f)" : "Chuỗi (s)"}
                </button>
              ))}
            </div>
          </div>

          {/* Value input */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1">
              Giá trị nhập vào (Value)
            </label>
            <input
              type={type === "string" ? "text" : "number"}
              step={type === "double" ? "0.0001" : "1"}
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="w-full bg-white border border-stone-250 rounded-xl px-3 py-2 text-xs md:text-sm font-mono focus:outline-none focus:border-accent text-stone-800"
            />
          </div>

          {/* Format Settings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Width setting */}
            <div>
              <div className="flex justify-between text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1">
                <span>Độ rộng (Width)</span>
                <span className="font-mono text-accent">{width}</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={width}
                onChange={(e) => setWidth(parseInt(e.target.value))}
                className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            {/* Precision setting (only double) */}
            {type === "double" && (
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1">
                  <span>Số thập phân (Precision)</span>
                  <span className="font-mono text-accent">.{precision}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={precision}
                  onChange={(e) => setPrecision(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>
            )}
          </div>

          {/* Flag Options */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-extrabold text-stone-400 mb-1.5">
              Cờ định dạng (Flags)
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setFlag("")}
                className={`flex-1 py-1.5 border rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  flag === ""
                    ? "border-accent bg-accent/5 text-accent shadow-sm"
                    : "border-stone-200 bg-white text-stone-650 hover:border-stone-300"
                }`}
              >
                Mặc định (Căn phải)
              </button>
              
              <button
                onClick={() => setFlag("-")}
                className={`flex-1 py-1.5 border rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  flag === "-"
                    ? "border-accent bg-accent/5 text-accent shadow-sm"
                    : "border-stone-200 bg-white text-stone-650 hover:border-stone-300"
                }`}
              >
                Dấu <code>-</code> (Căn trái)
              </button>

              {type !== "string" && (
                <button
                  onClick={() => setFlag("0")}
                  className={`flex-1 py-1.5 border rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    flag === "0"
                      ? "border-accent bg-accent/5 text-accent shadow-sm"
                      : "border-stone-200 bg-white text-stone-650 hover:border-stone-300"
                  }`}
                >
                  Dấu <code>0</code> (Lấp số 0)
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Right Output Panel (6 cols) */}
        <div className="md:col-span-6 space-y-4 h-full flex flex-col justify-between">
          
          {/* Java Code Representation */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs md:text-sm shadow-inner">
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2">Mã nguồn Java sinh ra</div>
            <div className="text-stone-300">
              <span className="text-amber-400">System.out.printf</span>(
              <span className="text-emerald-400">"{formatStr}"</span>,{" "}
              <span className="text-sky-300">{type === "string" ? `"${val}"` : val}</span>
              );
            </div>
          </div>

          {/* Console output display */}
          <div className="bg-stone-900 border border-stone-850 p-4 rounded-xl text-white flex-1 flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2">Kết quả hiển thị trên Console</div>
              <div className="font-mono text-base md:text-lg leading-none border border-stone-800 bg-stone-950 p-3 rounded-lg flex items-center justify-between text-emerald-450 tracking-wider">
                <span className="text-stone-500 font-bold select-none">[</span>
                <pre className="m-0 bg-transparent text-emerald-400 font-mono whitespace-pre">{outputStr}</pre>
                <span className="text-stone-500 font-bold select-none">]</span>
              </div>
            </div>
            
            {/* Legend explanation of spaces */}
            <div className="text-[10px] text-stone-400 border-t border-stone-800 pt-2.5 mt-4">
              💡 **Giải thích:** Cặp ngoặc <code className="text-stone-350">[ ]</code> được thêm vào để giúp bạn đếm và nhìn rõ các khoảng trắng đệm (spaces) được in ra màn hình.
              {flag === "-" && <p className="mt-1 text-amber-400">➔ Cờ <code>-</code> căn lề trái: giá trị nằm bên trái, khoảng trắng đệm bù vào bên phải.</p>}
              {flag === "0" && <p className="mt-1 text-amber-400">➔ Cờ <code>0</code> lấp đầy: các khoảng trống đệm bên trái được thay thế bằng ký tự số <code>0</code>.</p>}
              {flag === "" && width > outputStr.trim().length && <p className="mt-1 text-amber-400">➔ Mặc định căn lề phải: khoảng trắng đệm bù vào bên trái.</p>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
