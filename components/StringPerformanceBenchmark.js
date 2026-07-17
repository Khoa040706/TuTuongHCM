"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Zap, Info, ShieldAlert } from "lucide-react";

export default function StringPerformanceBenchmark() {
  const [iterations, setIterations] = useState(10000); // 10k, 25k, 50k
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [results, setResults] = useState(null);
  
  const timerRef = useRef(null);

  const runBenchmark = () => {
    setIsRunning(true);
    setProgress(0);
    setResults(null);

    let currentProgress = 0;
    
    // Simulate steps so progress animations render beautifully
    timerRef.current = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timerRef.current);
        
        // Calculate benchmark results dynamically based on number of iterations selected
        // To make it realistic, String concatenation scales quadratically O(N^2) while builder/buffer scale O(N)
        const stringTime = Math.round((iterations * iterations) / 2500000) + 12; // scales O(N^2)
        const bufferTime = Math.round(iterations / 850) + 5; // scales O(N) but slower due to synchronization lock check
        const builderTime = Math.round(iterations / 1400) + 2; // scales O(N) - fastest

        const stringAlloc = iterations; // each concat creates a new String object
        const bufferAlloc = 1; // only 1 StringBuffer object
        const builderAlloc = 1; // only 1 StringBuilder object

        setResults({
          string: { time: stringTime, alloc: stringAlloc },
          buffer: { time: bufferTime, alloc: bufferAlloc },
          builder: { time: builderTime, alloc: builderAlloc }
        });
        setIsRunning(false);
      }
    }, 150);
  };

  const resetBenchmark = () => {
    setIsRunning(false);
    setProgress(0);
    setResults(null);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 border-b border-stone-200 pb-4">
        <div>
          <h4 className="text-sm md:text-base font-extrabold text-stone-900 flex items-center gap-2 font-serif">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Thực nghiệm Hiệu năng & Bộ nhớ (String vs StringBuffer vs StringBuilder)</span>
          </h4>
          <p className="text-[10px] text-stone-550 mt-1">Chạy thử nghiệm ghép chuỗi với vòng lặp lớn để đánh giá tốc độ thực thi và số lượng đối tượng sinh ra trên RAM Heap.</p>
        </div>

        {/* Iteration Selector */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-stone-500">Số vòng lặp:</span>
          <select
            value={iterations}
            onChange={(e) => setIterations(Number(e.target.value))}
            disabled={isRunning}
            className="bg-white border border-stone-200 rounded-xl px-2.5 py-1 text-xs font-mono font-bold focus:outline-none focus:border-accent"
          >
            <option value={10000}>10.000 lần</option>
            <option value={25000}>25.000 lần</option>
            <option value={50000}>50.000 lần</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left control/setup (col 4) */}
        <div className="md:col-span-4 p-4 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col justify-between">
          <div className="space-y-4 text-xs">
            <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1">
              <span className="font-bold text-stone-900 block">Thao tác ghép chuỗi:</span>
              <p className="text-[10px] text-stone-500 leading-relaxed">Ghép chuỗi bằng toán tử <code>+</code> tạo ra hàng ngàn đối tượng trung gian rác trong RAM, buộc bộ dọn rác (GC) phải dọn dẹp liên tục.</p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1">
              <span className="font-bold text-stone-900 block">Cấp phát đệm:</span>
              <p className="text-[10px] text-stone-550 leading-relaxed">StringBuffer và StringBuilder sửa đổi mảng ký tự nội bộ <code>char[]</code> trực tiếp, chỉ cần tạo duy nhất 1 đối tượng bộ đệm.</p>
            </div>
          </div>

          <div className="flex gap-2 mt-5">
            <button
              onClick={runBenchmark}
              disabled={isRunning}
              className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                isRunning
                  ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                  : "bg-accent text-white hover:bg-accent/90"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Chạy thực nghiệm</span>
            </button>
            <button
              onClick={resetBenchmark}
              className="px-3 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Output chart (col 8) */}
        <div className="md:col-span-8 flex flex-col justify-between gap-5">
          
          {/* Progress bar when running */}
          {isRunning && (
            <div className="space-y-2 p-4 bg-white rounded-2xl border border-stone-200 animate-pulse">
              <div className="flex justify-between text-xs font-bold">
                <span>Hệ thống đang mô phỏng ghép chuỗi...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-accent h-full transition-all duration-150" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Results grid */}
          {!isRunning && !results && (
            <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-stone-300 rounded-2xl p-8 text-center text-stone-400">
              <Zap className="w-8 h-8 text-stone-300 mb-2 animate-bounce" />
              <p className="text-xs font-bold">Chưa có kết quả thực nghiệm.</p>
              <p className="text-[10px] text-stone-500 mt-1">Hãy nhấn nút "Chạy thực nghiệm" bên trái để chạy đo lường.</p>
            </div>
          )}

          {!isRunning && results && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {/* String Card */}
                <div className="p-3.5 rounded-2xl border border-rose-250 bg-rose-50/20 text-center space-y-2">
                  <span className="text-[9px] font-black text-rose-600 uppercase tracking-widest block">String (+)</span>
                  <div className="space-y-1">
                    <span className="text-[9px] text-stone-500 block">Thời gian chạy:</span>
                    <span className="text-lg font-black font-mono text-rose-550 block">{results.string.time} ms</span>
                  </div>
                  <div className="border-t border-rose-100 pt-2 text-[9px] text-stone-500">
                    Đối tượng Heap: <strong className="text-rose-600 font-mono">{results.string.alloc.toLocaleString()}</strong>
                  </div>
                </div>

                {/* StringBuffer Card */}
                <div className="p-3.5 rounded-2xl border border-amber-250 bg-amber-50/20 text-center space-y-2">
                  <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block">StringBuffer</span>
                  <div className="space-y-1">
                    <span className="text-[9px] text-stone-500 block">Thời gian chạy:</span>
                    <span className="text-lg font-black font-mono text-amber-550 block">{results.buffer.time} ms</span>
                  </div>
                  <div className="border-t border-amber-100 pt-2 text-[9px] text-stone-500">
                    Đối tượng Heap: <strong className="text-amber-600 font-mono">{results.buffer.alloc}</strong>
                  </div>
                </div>

                {/* StringBuilder Card */}
                <div className="p-3.5 rounded-2xl border border-emerald-250 bg-emerald-50/20 text-center space-y-2">
                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest block">StringBuilder</span>
                  <div className="space-y-1">
                    <span className="text-[9px] text-stone-500 block">Thời gian chạy:</span>
                    <span className="text-lg font-black font-mono text-emerald-550 block">{results.builder.time} ms</span>
                  </div>
                  <div className="border-t border-emerald-100 pt-2 text-[9px] text-stone-500">
                    Đối tượng Heap: <strong className="text-emerald-600 font-mono">{results.builder.alloc}</strong>
                  </div>
                </div>
              </div>

              {/* Graphical representation (Bars) */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3.5">
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider block">Biểu đồ so sánh thời gian thực thi (Càng ngắn càng tốt):</span>
                
                <div className="space-y-3">
                  {/* String row */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span>String (+)</span>
                      <span className="font-mono text-rose-500">{results.string.time} ms</span>
                    </div>
                    <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>

                  {/* StringBuffer row */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span>StringBuffer</span>
                      <span className="font-mono text-amber-500">{results.buffer.time} ms (nhanh gấp {Math.round(results.string.time / results.buffer.time)}x)</span>
                    </div>
                    <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-500 h-full rounded-full" 
                        style={{ width: `${Math.max(4, (results.buffer.time / results.string.time) * 100)}%` }} 
                      />
                    </div>
                  </div>

                  {/* StringBuilder row */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span>StringBuilder</span>
                      <span className="font-mono text-emerald-500">{results.builder.time} ms (nhanh gấp {Math.round(results.string.time / results.builder.time)}x)</span>
                    </div>
                    <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full" 
                        style={{ width: `${Math.max(2, (results.builder.time / results.string.time) * 100)}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanatory alert info */}
              <div className="bg-amber-500/5 border border-amber-500/25 p-3 rounded-xl flex items-start gap-2 text-stone-750">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-[10px] leading-relaxed font-medium">
                  <strong>Giải thích kết quả:</strong> Ghép chuỗi bằng <code>String (+)</code> có độ phức tạp thời gian tăng dần dạng lũy thừa $O(N^2)$ vì mỗi lần cộng chuỗi sẽ sao chép toàn bộ chuỗi cũ sang đối tượng mới. <code>StringBuilder</code> đạt tốc độ cao nhất vì không cần đồng bộ hóa đa luồng, loại bỏ toàn bộ hao phí kiểm tra khóa trong mã máy so với <code>StringBuffer</code>.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
