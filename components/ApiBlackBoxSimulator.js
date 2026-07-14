"use client";
import React, { useState } from "react";

export default function ApiBlackBoxSimulator() {
  const [selectedMethod, setSelectedMethod] = useState("sqrt"); // sqrt, random
  const [inputVal, setInputVal] = useState(25.0);
  const [showInside, setShowInside] = useState(false);
  const [resultVal, setResultVal] = useState("5.0");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRun = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (selectedMethod === "sqrt") {
        if (inputVal < 0) {
          setResultVal("NaN (Không xác định)");
        } else {
          setResultVal(Math.sqrt(inputVal).toFixed(5));
        }
      } else {
        setResultVal(Math.random().toFixed(5));
      }
    }, 600);
  };

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          📦 Bộ Giả Lập Hộp Đen API (Black Box Simulator)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Học trực quan khái niệm Trừu tượng hóa (Abstraction): Chỉ cần biết CÁI GÌ cần làm mà không cần biết LÀM NHƯ THẾ NÀO.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Panel: Inputs & Controls (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-3">Thông điệp gửi đi (Input)</div>
            
            <div className="space-y-4">
              {/* Method choice */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5 font-sans">Chọn phương thức API:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedMethod("sqrt");
                      setResultVal("5.0");
                    }}
                    className={`flex-1 py-2 px-3 border rounded-xl text-xs font-bold font-mono transition-all cursor-pointer text-center ${
                      selectedMethod === "sqrt"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    Math.sqrt(x)
                  </button>
                  <button
                    onClick={() => {
                      setSelectedMethod("random");
                      setResultVal("Bấm Run để sinh...");
                    }}
                    className={`flex-1 py-2 px-3 border rounded-xl text-xs font-bold font-mono transition-all cursor-pointer text-center ${
                      selectedMethod === "random"
                        ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    Math.random()
                  </button>
                </div>
              </div>

              {/* Parameter input if sqrt */}
              {selectedMethod === "sqrt" && (
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1 font-mono">Đối số truyền vào x (double):</label>
                  <input
                    type="number"
                    value={inputVal}
                    onChange={(e) => setInputVal(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-stone-250 rounded-xl font-mono text-sm focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                  />
                </div>
              )}

            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <button
              onClick={handleRun}
              className="w-full px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm cursor-pointer text-center"
            >
              🚀 Chạy hàm (Execute Call)
            </button>
            
            <button
              onClick={() => setShowInside(!showInside)}
              className={`w-full px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                showInside
                  ? "border-stone-850 bg-stone-900 text-white"
                  : "border-stone-250 bg-stone-50 hover:bg-stone-100 text-stone-700"
              }`}
            >
              {showInside ? "🔒 Che giấu thuật toán (Hide)" : "🔑 Mở Hộp Đen (Show implementation)"}
            </button>
          </div>

        </div>

        {/* Right Panel: The Black Box simulator (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md relative overflow-hidden">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">
              Trực quan hóa Procedural Abstraction
            </div>

            {/* The Visual Box Container */}
            <div className={`border rounded-2xl p-4 min-h-[170px] flex flex-col justify-center items-center transition-all relative ${
              showInside
                ? "border-sky-500 bg-sky-950/5 text-stone-200"
                : "border-[#3e3d3a] bg-[#151413] text-stone-500"
            }`}>
              
              {/* Overlay status label */}
              <div className="absolute top-2 right-3 text-[8px] font-black uppercase tracking-wider">
                {showInside ? "🔓 OPEN BOX (Đang hiển thị)" : "🔒 BLACK BOX (Đã ẩn)"}
              </div>

              {/* Normal Opaque Black Box Mode */}
              {!showInside ? (
                <div className="text-center space-y-2">
                  <span className="text-3xl block animate-pulse">⚙️</span>
                  <div className="text-stone-300 font-bold font-sans text-xs">
                    {selectedMethod === "sqrt" ? `Math.sqrt(${inputVal})` : "Math.random()"}
                  </div>
                  <p className="text-[9px] text-stone-500 font-sans max-w-xs leading-relaxed">
                    Mã nguồn thuật toán tính toán phức tạp bên trong đã được hệ thống tự động che giấu (Information Hiding).
                  </p>
                </div>
              ) : (
                /* Transparent Mode: Reveals Implementation */
                <div className="w-full text-[10px] leading-relaxed text-sky-200 font-mono">
                  <div className="text-[8px] text-stone-500 font-black uppercase mb-1 font-sans">Mã cài đặt nội bộ của JDK:</div>
                  {selectedMethod === "sqrt" ? (
                    <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-2.5 rounded-lg border border-stone-850 leading-normal">
{`// Thuật toán xấp xỉ Newton-Raphson
public static double sqrt(double x) {
    if (x < 0) return Double.NaN;
    double t = x;
    while (Math.abs(t - x/t) > 1e-15 * t) {
        t = (x/t + t) / 2.0; // Dịch chuyển hội tụ
    }
    return t;
}`}
                    </pre>
                  ) : (
                    <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-2.5 rounded-lg border border-stone-850 leading-normal">
{`// Linear Congruential Generator (LCG)
private static long seed;
public static double random() {
    // Phép nhân dịch chuyển nhị phân 48-bit
    seed = (seed * 0x5DEECE66DL + 0xBL) & ((1L << 48) - 1);
    return (double) (seed >>> 22) / (1L << 26);
}`}
                    </pre>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Console output display */}
          <div className="mt-4 pt-3 border-t border-stone-850 flex justify-between items-center">
            <div>
              <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-1 font-sans">Giao diện kết quả trả về</div>
              <div className={`font-mono text-sm font-black ${isProcessing ? "text-amber-400" : "text-emerald-450"}`}>
                {isProcessing ? "🔄 Đang tính toán..." : `result = ${resultVal}`}
              </div>
            </div>
            <div className="text-right text-[10px] text-stone-500 font-sans max-w-[200px] leading-relaxed">
              Bạn sử dụng hàm mà hoàn toàn không cần viết hay hiểu thuật toán toán học bên trong!
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
