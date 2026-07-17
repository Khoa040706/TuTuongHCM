"use client";
import React, { useState } from "react";
import { Play, HelpCircle, Layers, ChevronRight, Terminal, RotateCcw } from "lucide-react";

export default function CollectionArrayForLoopSim() {
  const [loopType, setLoopType] = useState("TRADITIONAL"); // "TRADITIONAL" | "ENHANCED"
  const [step, setStep] = useState(0); // 0 to 5
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [log, setLog] = useState("Nhấn 'Chạy bước tiếp theo' để theo dõi luồng thực thi.");

  const arrayData = [35.1, 21.0, 57.7, 18.3];

  const handleStep = () => {
    if (step >= 5) {
      setLog("Vòng lặp đã kết thúc!");
      return;
    }

    const nextStep = step + 1;
    setStep(nextStep);

    if (loopType === "TRADITIONAL") {
      if (nextStep <= 4) {
        const idx = nextStep - 1;
        const val = arrayData[idx];
        setConsoleOutput((prev) => [...prev, `arr[${idx}] = ${val}`]);
        setLog(`Bước ${nextStep}: i = ${idx}. Điều kiện i < arr.length ( ${idx} < 4 ) đúng. Truy xuất arr[${idx}] và in ra console.`);
      } else {
        setLog(`Bước 5: i = 4. Điều kiện i < arr.length ( 4 < 4 ) SAI. Vòng lặp dừng.`);
      }
    } else {
      // Enhanced
      if (nextStep <= 4) {
        const idx = nextStep - 1;
        const val = arrayData[idx];
        setConsoleOutput((prev) => [...prev, `${val}`]);
        setLog(`Bước ${nextStep}: Biến e tự động sao chép giá trị phần tử kế tiếp ➔ e = ${val}. Thực hiện in.`);
      } else {
        setLog(`Bước 5: Đã duyệt hết tất cả các phần tử của mảng. Vòng lặp tự động kết thúc.`);
      }
    }
  };

  const handleReset = () => {
    setStep(0);
    setConsoleOutput([]);
    setLog("Nhấn 'Chạy bước tiếp theo' để theo dõi luồng thực thi.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
            Trình Giả Lập Vòng Lặp Mảng (Loop Simulator)
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            So sánh cách hoạt động của vòng lặp for truyền thống và for-each mở rộng
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => { setLoopType("TRADITIONAL"); handleReset(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              loopType === "TRADITIONAL" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            For-i truyền thống
          </button>
          <button
            onClick={() => { setLoopType("ENHANCED"); handleReset(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              loopType === "ENHANCED" ? "bg-teal-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Enhanced For-each
          </button>
        </div>
      </div>

      {/* Visual Array RAM Blocks */}
      <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 mb-6 flex flex-col items-center">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono self-start">
          Trạng thái chỉ định ô nhớ mảng
        </span>

        <div className="flex gap-2">
          {arrayData.map((val, idx) => {
            const isActive = step > 0 && step <= 4 && (step - 1 === idx);
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border font-mono text-center min-w-[72px] transition-all duration-300 relative ${
                  isActive
                    ? "bg-teal-950/40 border-teal-500 text-teal-200 scale-105 shadow shadow-teal-500/10"
                    : "bg-slate-900 border-slate-850 text-slate-500"
                }`}
              >
                <span className="text-[8px] block opacity-60">index {idx}</span>
                <span className="font-bold text-sm block mt-1">{val}</span>

                {/* Arrow Pointer */}
                {isActive && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[8px] bg-teal-500 text-white font-bold px-1 py-0.5 rounded leading-none">
                      {loopType === "TRADITIONAL" ? `i=${idx}` : `e`}
                    </span>
                    <span className="w-1.5 h-1.5 border-r border-b border-teal-500 rotate-45 mt-0.5 bg-slate-950"></span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Code trace */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mã nguồn Java đang thực thi
            </span>

            {loopType === "TRADITIONAL" ? (
              <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
                <div className={step === 1 ? "text-teal-300 font-bold bg-teal-950/20 px-1 rounded" : ""}>
                  {`for (int i = 0; i < arr.length; i++) {`}
                </div>
                <div className={step > 0 && step <= 4 ? "text-teal-300 font-bold bg-teal-950/20 px-1 rounded" : ""}>
                  {`    System.out.println("arr[" + i + "] = " + arr[i]);`}
                </div>
                <div>{`}`}</div>
              </pre>
            ) : (
              <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
                <div className={step > 0 && step <= 4 ? "text-teal-300 font-bold bg-teal-950/20 px-1 rounded" : ""}>
                  {`for (double e : arr) {`}
                </div>
                <div className={step > 0 && step <= 4 ? "text-teal-300 font-bold bg-teal-950/20 px-1 rounded" : ""}>
                  {`    System.out.println(e);`}
                </div>
                <div>{`}`}</div>
              </pre>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleStep}
              className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg shadow transition-all select-none"
            >
              <Play className="w-4 h-4" />
              <span>Chạy bước tiếp theo</span>
            </button>
            <button
              onClick={handleReset}
              className="p-2 bg-slate-800 hover:bg-slate-750 rounded-lg border border-slate-700 text-slate-300 transition-all select-none"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console output display */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono flex items-center gap-1.5 text-teal-400">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Console Output</span>
            </span>

            <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-xs text-slate-350 min-h-[96px] space-y-1">
              {consoleOutput.length > 0 ? (
                consoleOutput.map((line, idx) => <div key={idx}>{line}</div>)
              ) : (
                <div className="text-slate-650 italic">Console trống. Chờ chạy code...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Steps simulator logger */}
      <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-400 font-mono">
        {log}
      </div>
    </div>
  );
}
