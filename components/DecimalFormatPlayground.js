"use client";
import React, { useState } from "react";

export default function DecimalFormatPlayground() {
  const [numberVal, setNumberVal] = useState(3.1415926535);
  const [pattern, setPattern] = useState("0.000");

  const formatNumber = (num, pat) => {
    try {
      if (isNaN(num)) return "Invalid Number";
      
      // Simple JS formatting approximation of Java's DecimalFormat
      if (pat === "0.000") {
        return num.toFixed(3);
      }
      if (pat === "#.###") {
        // remove trailing zeroes in fraction
        const fixed = num.toFixed(3);
        return parseFloat(fixed).toString();
      }
      if (pat === "0.00%") {
        return (num * 100).toFixed(2) + "%";
      }
      if (pat === "#,##0.00") {
        return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      
      // Fallback custom pattern approximation
      if (pat.includes("%")) {
        const factor = num * 100;
        const decimals = (pat.split(".")[1] || "").replace(/%/g, "").length;
        return factor.toFixed(decimals) + "%";
      } else {
        const decimals = (pat.split(".")[1] || "").length;
        return num.toFixed(decimals);
      }
    } catch (e) {
      return "Format Error";
    }
  };

  const formattedResult = formatNumber(numberVal, pattern);

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          📍 Trình Thực Nghiệm Lớp DecimalFormat (Định dạng Số)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhập số thực và chọn các mẫu định dạng để xem cách chuỗi đầu ra được định dạng trong Java.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: Controls (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-3">Tham số cấu hình</div>
            
            <div className="space-y-4">
              {/* Input number */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5 font-mono">Số thực cần định dạng (double):</label>
                <input
                  type="number"
                  step="0.0001"
                  value={numberVal}
                  onChange={(e) => setNumberVal(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                />
              </div>

              {/* Pattern selectors */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">Chọn mẫu định dạng (Pattern):</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPattern("0.000")}
                    className={`py-2 px-3 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-center ${
                      pattern === "0.000"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    "0.000"
                  </button>

                  <button
                    onClick={() => setPattern("#.###")}
                    className={`py-2 px-3 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-center ${
                      pattern === "#.###"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    "#.###"
                  </button>

                  <button
                    onClick={() => setPattern("0.00%")}
                    className={`py-2 px-3 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-center ${
                      pattern === "0.00%"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    "0.00%"
                  </button>

                  <button
                    onClick={() => setPattern("#,##0.00")}
                    className={`py-2 px-3 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-center ${
                      pattern === "#,##0.00"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    "#,##0.00"
                  </button>
                </div>
              </div>

              {/* Custom pattern input */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">Mẫu tự định nghĩa:</label>
                <input
                  type="text"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                />
              </div>

            </div>
          </div>

          {/* Explanation check */}
          <div className="bg-amber-50/25 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-800 mt-4">
            <strong>💡 Bản chất của ký tự mẫu:</strong><br/>
            • <code>0</code>: Bắt buộc hiện chữ số (nếu trống sẽ bù bằng 0).<br/>
            • <code>#</code>: Hiện chữ số nếu có (nếu trống sẽ bỏ qua).<br/>
            • <code>%</code>: Nhân số thực với 100 và hiển thị thêm dấu %.
          </div>

        </div>

        {/* Right Side: Java Code & Console Output (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">Mã nguồn Java mô phỏng</div>
            
            <div className="space-y-1 py-1 text-[11px] leading-relaxed">
              <div><span className="text-amber-550 font-bold">import</span> java.text.DecimalFormat;</div>
              <div className="text-stone-600">// ...</div>
              <div><span className="text-amber-500">double</span> val = {numberVal};</div>
              <div>DecimalFormat df = <span className="text-amber-500">new</span> DecimalFormat(<span className="text-emerald-450">"{pattern}"</span>);</div>
              <div>String res = df.format(val);</div>
              <div>System.out.println(res);</div>
            </div>
          </div>

          {/* Terminal output */}
          <div className="mt-4 pt-3 border-t border-stone-850">
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 font-sans">Màn hình Console</div>
            <div className="bg-[#151413] border border-stone-800 p-2.5 rounded-xl text-emerald-400 font-bold font-mono text-xs shadow-inner">
              {formattedResult}
            </div>
            
            <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-2.5 text-[10px] text-emerald-300 font-sans mt-3 leading-relaxed">
              ⚠️ <strong>Lưu ý:</strong> Giá trị biến gốc <code>val</code> trong bộ nhớ vẫn là <code>{numberVal}</code>. Hàm <code>df.format(val)</code> chỉ trả về chuỗi hiển thị, hoàn toàn không làm biến đổi hay gán lại giá trị cho biến gốc!
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
