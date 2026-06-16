"use client";
import React, { useState } from "react";

export default function CastingPlayground() {
  const [num, setNum] = useState(31415);
  const [den, setDen] = useState(10000);
  const [strategy, setStrategy] = useState("integer"); // "integer", "cast", "literal"

  const handleNumChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) setNum(value);
  };

  const handleDenChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value !== 0) setDen(value);
  };

  const calculate = () => {
    if (strategy === "integer") {
      const integerDiv = Math.floor(num / den);
      return integerDiv.toFixed(1); // Converts to 3.0
    }
    if (strategy === "cast") {
      return (num / den).toString();
    }
    if (strategy === "literal") {
      return (num / den).toString();
    }
    return "0.0";
  };

  const result = calculate();

  const getExplanation = () => {
    if (strategy === "integer") {
      return `<b>Cơ chế xử lý của Java:</b><br/>
      1. Phép tính <code>${num} / ${den}</code> được thực hiện giữa 2 số nguyên (<code>int / int</code>).<br/>
      2. Kết quả phép chia nguyên là <b>${Math.floor(num / den)}</b> (phần dư bị cắt bỏ hoàn toàn).<br/>
      3. Sau đó, giá trị nguyên này mới được ép kiểu ngầm định sang <code>double</code> để gán cho <code>d</code>.<br/>
      4. Kết quả nhận được là <code>d = ${result}</code> (Gây mất mát dữ liệu thập phân ❌).`;
    }
    if (strategy === "cast") {
      return `<b>Cơ chế xử lý của Java:</b><br/>
      1. Phép ép kiểu tường minh <code>(double) ${num}</code> chuyển đổi tử số thành số thực <code>${num}.0</code>.<br/>
      2. Phép tính trở thành <code>${num}.0 / ${den}</code> (phép chia giữa <code>double / int</code>).<br/>
      3. Java tự động nâng kiểu mẫu số lên số thực và thực hiện chia số thực.<br/>
      4. Kết quả nhận được là <code>d = ${result}</code> (Dữ liệu thập phân được giữ lại trọn vẹn ✔).`;
    }
    return `<b>Cơ chế xử lý của Java:</b><br/>
    1. Số chia được viết trực tiếp dưới dạng số thực literal <code>${den}.0</code>.<br/>
    2. Phép tính trở thành <code>${num} / ${den}.0</code> (phép chia giữa <code>int / double</code>).<br/>
    3. Java tự động ép kiểu ngầm định tử số lên double để thực hiện phép chia số thực.<br/>
    4. Kết quả nhận được là <code>d = ${result}</code> (Dữ liệu thập phân được giữ lại trọn vẹn ✔).`;
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="mb-5 border-b border-stone-200 pb-3">
        <h4 className="text-base font-extrabold text-stone-900">
          Hộp Cát Thực Hành: Ép Kiểu & Chia Số Nguyên
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Thay đổi tử số, mẫu số và quan sát sự khác biệt khi không ép kiểu và có ép kiểu.
        </p>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Tử số (int i)</label>
          <input
            type="number"
            value={num}
            onChange={handleNumChange}
            className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-stone-800 transition-all outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Mẫu số (int j)</label>
          <input
            type="number"
            value={den}
            onChange={handleDenChange}
            className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-stone-800 transition-all outline-none"
          />
        </div>
      </div>

      {/* Strategy selector buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setStrategy("integer")}
          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            strategy === "integer"
              ? "border-red-500 bg-red-500/5 text-red-700 font-extrabold"
              : "border-stone-200 hover:border-stone-300 text-stone-650 bg-white"
          }`}
        >
          ❌ Chia số nguyên: i / j
        </button>
        <button
          onClick={() => setStrategy("cast")}
          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            strategy === "cast"
              ? "border-emerald-500 bg-emerald-500/5 text-emerald-700 font-extrabold"
              : "border-stone-200 hover:border-stone-300 text-stone-650 bg-white"
          }`}
        >
          ✔ Ép kiểu tử số: (double) i / j
        </button>
        <button
          onClick={() => setStrategy("literal")}
          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            strategy === "literal"
              ? "border-emerald-500 bg-emerald-500/5 text-emerald-700 font-extrabold"
              : "border-stone-200 hover:border-stone-300 text-stone-650 bg-white"
          }`}
        >
          ✔ Chia mẫu số thực: i / 10000.0
        </button>
      </div>

      {/* Visual Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: Code area and output variable boxes */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-xl p-5 flex flex-col justify-between text-white">
          <div>
            <div className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest border-b border-stone-800 pb-2 mb-4">
              Biểu diễn trong Bộ nhớ RAM
            </div>

            {/* Code preview block */}
            <div className="bg-[#151413] border border-stone-800 rounded-lg p-3.5 mb-5 select-text font-mono text-xs text-stone-300">
              {strategy === "integer" && (
                <code>
                  {`int i = ${num};
int j = ${den};
double d = i / j; // Thực hiện chia nguyên trước`}
                </code>
              )}
              {strategy === "cast" && (
                <code>
                  {`int i = ${num};
int j = ${den};
double d = (double) i / j; // Ép kiểu tử số thành double`}
                </code>
              )}
              {strategy === "literal" && (
                <code>
                  {`int i = ${num};
double d = i / ${den}.0; // Chia với hằng số thực`}
                </code>
              )}
            </div>

            {/* Variables Memory representation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4">
              <div className="flex-1 bg-stone-900/40 border border-stone-800 p-3 rounded-lg text-center">
                <span className="text-[9px] text-stone-500 uppercase tracking-wider font-bold">Biến i (int)</span>
                <div className="text-sm font-bold font-mono mt-1 text-amber-450">{num}</div>
              </div>
              <div className="flex-1 bg-stone-900/40 border border-stone-800 p-3 rounded-lg text-center">
                <span className="text-[9px] text-stone-500 uppercase tracking-wider font-bold">Biến j (int)</span>
                <div className="text-sm font-bold font-mono mt-1 text-amber-450">{den}</div>
              </div>
              <div className={`flex-1 border p-3 rounded-lg text-center transition-all duration-300 ${
                strategy === "integer" 
                  ? "border-red-500/40 bg-red-500/5 text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.05)]"
                  : "border-emerald-500/40 bg-emerald-500/5 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.05)]"
              }`}>
                <span className="text-[9px] text-stone-400 uppercase tracking-wider font-bold">Kết quả d (double)</span>
                <div className="text-base font-black font-mono mt-1">{result}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Explanation text block */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-xl p-5 shadow-inner flex flex-col justify-center">
          <div className="text-[10px] font-extrabold uppercase tracking-wide bg-stone-100 text-stone-500 px-2 py-0.5 rounded w-fit mb-3">
            Phân tích chi tiết
          </div>
          <p
            className="text-xs text-stone-650 leading-relaxed font-sans"
            dangerouslySetInnerHTML={{ __html: getExplanation() }}
          />
        </div>
      </div>
    </div>
  );
}
