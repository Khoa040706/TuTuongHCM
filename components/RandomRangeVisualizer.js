"use client";
import React, { useState } from "react";

export default function RandomRangeVisualizer() {
  const [minVal, setMinVal] = useState(51);
  const [maxVal, setMaxVal] = useState(70);
  const [method, setMethod] = useState("random_class"); // random_class, math_random
  const [history, setHistory] = useState([]);

  const handleRoll = () => {
    if (minVal > maxVal) return;
    const diff = maxVal - minVal + 1;
    let rolled = 0;
    if (method === "math_random") {
      rolled = Math.floor(Math.random() * diff) + minVal;
    } else {
      rolled = Math.floor(Math.random() * diff) + minVal; // Simulated Random.nextInt
    }
    setHistory((prev) => [rolled, ...prev.slice(0, 5)]);
  };

  const handleClear = () => {
    setHistory([]);
  };

  const diffVal = maxVal - minVal + 1;

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🎲 Bộ Tạo Số Ngẫu Nhiên Theo Khoảng [min, max]
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Cấu hình min và max để quan sát công thức sinh số ngẫu nhiên Java được tạo động và chạy thử kết quả.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Panel: Inputs & Roll (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-3">Tham số cấu hình</div>
            
            <div className="space-y-4">
              {/* Method choice */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">Phương thức sử dụng:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMethod("random_class")}
                    className={`flex-1 py-2 px-3 border rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      method === "random_class"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    Lớp Random
                  </button>
                  <button
                    onClick={() => setMethod("math_random")}
                    className={`flex-1 py-2 px-3 border rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      method === "math_random"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    Math.random()
                  </button>
                </div>
              </div>

              {/* Min Max inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1 font-mono">Giá trị min:</label>
                  <input
                    type="number"
                    value={minVal}
                    onChange={(e) => setMinVal(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1 font-mono">Giá trị max:</label>
                  <input
                    type="number"
                    value={maxVal}
                    onChange={(e) => setMaxVal(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                  />
                </div>
              </div>

              {minVal > maxVal && (
                <div className="text-[10px] text-rose-600 font-bold bg-rose-50 border border-rose-100 rounded-lg p-2">
                  Lỗi: Giá trị min không thể lớn hơn giá trị max!
                </div>
              )}

            </div>
          </div>

          <div className="flex gap-2 mt-5">
            <button
              onClick={handleRoll}
              disabled={minVal > maxVal}
              className="flex-1 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm disabled:bg-stone-200 disabled:text-stone-400 cursor-pointer text-center"
            >
              🎲 Sinh số ngẫu nhiên
            </button>
            <button
              onClick={handleClear}
              className="px-3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl text-xs transition-all border border-stone-200 cursor-pointer"
            >
              Clear
            </button>
          </div>

        </div>

        {/* Right Side: Java Code & Execution explanation (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">Công thức mã nguồn Java động</div>
            
            <div className="bg-[#151413] border border-stone-850 p-3 rounded-xl mb-4 font-mono text-[11px] leading-relaxed">
              {method === "random_class" ? (
                <>
                  <div className="text-stone-550">// Công thức chuẩn: rnd.nextInt(max - min + 1) + min</div>
                  <div>Random rnd = <span className="text-amber-500">new</span> Random();</div>
                  <div><span className="text-amber-500">int</span> num = rnd.nextInt(<span className="text-amber-300">{maxVal}</span> - <span className="text-amber-300">{minVal}</span> + <span className="text-amber-300">1</span>) + <span className="text-amber-300">{minVal}</span>;</div>
                  <div className="text-emerald-450 mt-1">// Rút gọn: int num = rnd.nextInt({diffVal}) + {minVal};</div>
                </>
              ) : (
                <>
                  <div className="text-stone-550">// Công thức chuẩn: (int)(Math.random() * (max - min + 1)) + min</div>
                  <div><span className="text-amber-500">int</span> num = (<span className="text-amber-500">int</span>)(Math.random() * (<span className="text-amber-300">{maxVal}</span> - <span className="text-amber-300">{minVal}</span> + <span className="text-amber-300">1</span>)) + <span className="text-amber-300">{minVal}</span>;</div>
                  <div className="text-emerald-450 mt-1">// Rút gọn: int num = (int)(Math.random() * {diffVal}) + {minVal};</div>
                </>
              )}
            </div>

            {/* Explanation breakdown */}
            <div className="text-stone-400 font-sans text-xs bg-stone-900/30 border border-stone-850 p-3 rounded-xl leading-relaxed mb-4">
              <span className="font-extrabold text-stone-300 block mb-1">💡 Giải thích các bước dịch chuyển khoảng:</span>
              {method === "random_class" ? (
                <span>
                  1. Lệnh <code>rnd.nextInt({diffVal})</code> sinh số nguyên ngẫu nhiên từ <code>0</code> đến <code>{diffVal - 1}</code>.<br/>
                  2. Cộng thêm hằng số dịch chuyển <code>{minVal}</code> ở cuối sẽ tịnh tiến toàn bộ khoảng giá trị thành từ <code>{minVal}</code> đến <code>{maxVal}</code> (đoạn <code>[{minVal}, {maxVal}]</code>).
                </span>
              ) : (
                <span>
                  1. Hàm <code>Math.random()</code> sinh số thực trong khoảng nửa mở <code>[0.0, 1.0)</code>.<br/>
                  2. Nhân với <code>{diffVal}</code> mở rộng biên độ thành <code>[0.0, {diffVal}.0)</code>.<br/>
                  3. Ép kiểu <code>(int)</code> lấy phần nguyên làm tròn xuống thành số nguyên từ <code>0</code> đến <code>{diffVal - 1}</code>.<br/>
                  4. Cộng thêm <code>{minVal}</code> tịnh tiến khoảng thành từ <code>{minVal}</code> đến <code>{maxVal}</code>.
                </span>
              )}
            </div>
          </div>

          {/* Roll output console list */}
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 font-sans">Lịch sử kết quả sinh số ngẫu nhiên</div>
            <div className="bg-[#151413] border border-stone-800 p-2.5 rounded-xl text-emerald-400 font-bold font-mono text-xs shadow-inner min-h-[46px] flex items-center gap-2 overflow-x-auto">
              {history.length === 0 ? (
                <span className="text-stone-500 italic text-[11px] font-normal">Chưa sinh số, hãy bấm nút "Sinh số ngẫu nhiên"...</span>
              ) : (
                history.map((num, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded-lg border font-mono text-sm transition-all ${
                      idx === 0
                        ? "bg-amber-950/45 border-amber-500 text-amber-300 scale-105 animate-pulse"
                        : "bg-stone-900 border-stone-800 text-stone-400"
                    }`}
                  >
                    {num}
                  </span>
                ))
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
