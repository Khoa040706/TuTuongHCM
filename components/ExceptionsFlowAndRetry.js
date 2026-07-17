"use client";
import React, { useState } from "react";
import { Terminal, Cpu, Play, RotateCcw, Info, RefreshCw } from "lucide-react";

export default function ExceptionsFlowAndRetry() {
  // Part A: Flow Sim
  const [flowMode, setFlowMode] = useState("SUCCESS"); // "SUCCESS" (n=4) | "CRASH" (n=-2)
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState([]);
  const [activeCodeLine, setActiveCodeLine] = useState(null);

  // Part B: Retry Simulation
  const [retryStep, setRetryStep] = useState(0);
  const [retryLogs, setRetryLogs] = useState([]);

  const successSteps = [
    { line: 316, log: "Console: Enter n: 4" },
    { line: 319, log: "Console: Before factorial()" },
    { line: 305, log: "JVM: Vào phương thức factorial(4)" },
    { line: 306, log: "Console: Before Checking" },
    { line: 307, log: "JVM: Kiểm tra (4 < 0) ➔ false, bỏ qua throw" },
    { line: 310, log: "Console: After Checking" },
    { line: 320, log: "Console: Ans = 24" },
    { line: 321, log: "Console: After factorial()" },
    { line: 325, log: "JVM: Bỏ qua khối catch (không có exception)" },
    { line: 327, log: "Console: Finally!" }
  ];

  const crashSteps = [
    { line: 316, log: "Console: Enter n: -2" },
    { line: 319, log: "Console: Before factorial()" },
    { line: 305, log: "JVM: Vào phương thức factorial(-2)" },
    { line: 306, log: "Console: Before Checking" },
    { line: 308, log: "JVM: Kiểm tra (-2 < 0) ➔ true, thực hiện throw!" },
    { line: 323, log: "JVM: Nhảy thẳng đến khối catch tương ứng trong main, bỏ qua 'After Checking' và 'After factorial()'" },
    { line: 324, log: "Console: In Catch Block" },
    { line: 325, log: "Console: -2 is invalid!" },
    { line: 327, log: "Console: Finally!" }
  ];

  const handleNextFlowStep = () => {
    const currentSteps = flowMode === "SUCCESS" ? successSteps : crashSteps;
    if (step >= currentSteps.length) return;

    const nextStep = step + 1;
    setStep(nextStep);
    setActiveCodeLine(currentSteps[step].line);
    setLogs((prev) => [...prev, currentSteps[step].log]);
  };

  const handleResetFlow = (mode) => {
    setStep(0);
    setLogs([]);
    setActiveCodeLine(null);
    setFlowMode(mode);
  };

  const handleNextRetryStep = () => {
    if (retryStep >= 4) return;
    const nextStep = retryStep + 1;
    setRetryStep(nextStep);

    if (nextStep === 1) {
      setRetryLogs(["Console: Enter n: -2", "Console: -2 is invalid!", "JVM: Bắt lỗi ➔ Tiếp tục lặp lại do-while..."]);
    } else if (nextStep === 2) {
      setRetryLogs((prev) => [...prev, "Console: Enter n: -7", "Console: -7 is invalid!", "JVM: Bắt lỗi ➔ Tiếp tục lặp lại..."]);
    } else if (nextStep === 3) {
      setRetryLogs((prev) => [...prev, "Console: Enter n: 6", "Console: Ans = 720", "JVM: Khối try chạy hoàn tất ➔ gán retry = false"]);
    } else if (nextStep === 4) {
      setRetryLogs((prev) => [...prev, "✅ Vòng lặp do-while kết thúc thành công!"]);
    }
  };

  const handleResetRetry = () => {
    setRetryStep(0);
    setRetryLogs([]);
  };

  return (
    <div className="space-y-6">
      {/* PART A: Flow Simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-indigo-600" />
          <span>Mục IV - Phần 1: Luồng Thực Thi Khi Có và Không Có Lỗi</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Chọn kịch bản thành công hoặc lỗi bên dưới, sau đó chạy từng bước để quan sát sự khác biệt của luồng thực thi trong khối try-catch-finally.
        </p>

        {/* Mode Selector */}
        <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200/60 select-none max-w-sm mb-4">
          <button
            onClick={() => handleResetFlow("SUCCESS")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              flowMode === "SUCCESS" ? "bg-white text-emerald-700 shadow-sm" : "text-stone-500"
            }`}
          >
            Trường hợp n = 4 (Không lỗi)
          </button>
          <button
            onClick={() => handleResetFlow("CRASH")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              flowMode === "CRASH" ? "bg-white text-rose-700 shadow-sm" : "text-stone-500"
            }`}
          >
            Trường hợp n = -2 (Có lỗi)
          </button>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-4">
          {/* Source code */}
          <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Mã nguồn thực thi và highlight dòng lệnh
              </span>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9px] leading-relaxed text-indigo-200 shadow-md overflow-x-auto">
                <div className={activeCodeLine === 305 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-4" : "px-1 py-0.5 pl-4"}>
                  {`public static int factorial(int n) throws IllegalArgumentException {`}
                </div>
                <div className={activeCodeLine === 306 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("Before Checking");`}
                </div>
                <div className={activeCodeLine === 307 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`if (n < 0) {`}
                </div>
                <div className={activeCodeLine === 308 ? "text-red-400 font-bold bg-red-950/40 px-1 py-0.5 rounded pl-12" : "px-1 py-0.5 pl-12"}>
                  {`throw new IllegalArgumentException(n + " is invalid!");`}
                </div>
                <div className="px-1 py-0.5 pl-8">{`}`}</div>
                <div className={activeCodeLine === 310 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("After Checking");`}
                </div>
                <div className="px-1 py-0.5 pl-8">{`return ans;`}</div>
                <div className="px-1 py-0.5 pl-4">{`}`}</div>

                <div className="h-2" />

                <div className="px-1 py-0.5 pl-4 text-stone-500">{`// Trong hàm main:`}</div>
                <div className={activeCodeLine === 316 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-4" : "px-1 py-0.5 pl-4"}>
                  {`System.out.print("Enter n: "); int input = sc.nextInt();`}
                </div>
                <div className="px-1 py-0.5 pl-4">{`try {`}</div>
                <div className={activeCodeLine === 319 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("Before factorial()");`}
                </div>
                <div className={activeCodeLine === 320 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("Ans = " + factorial(input));`}
                </div>
                <div className={activeCodeLine === 321 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("After factorial()");`}
                </div>
                <div className="px-1 py-0.5 pl-4">{`} catch (IllegalArgumentException expObj) {`}</div>
                <div className={activeCodeLine === 324 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("In Catch Block");`}
                </div>
                <div className={activeCodeLine === 325 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println(expObj.getMessage());`}
                </div>
                <div className="px-1 py-0.5 pl-4">{`} finally {`}</div>
                <div className={activeCodeLine === 327 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1 py-0.5 rounded pl-8" : "px-1 py-0.5 pl-8"}>
                  {`System.out.println("Finally!");`}
                </div>
                <div className="px-1 py-0.5 pl-4">{`}`}</div>
              </pre>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleNextFlowStep}
                disabled={step >= (flowMode === "SUCCESS" ? successSteps.length : crashSteps.length)}
                className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Chạy bước tiếp theo ({step + 1})</span>
              </button>
              <button
                onClick={() => handleResetFlow(flowMode)}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console Box */}
          <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Console Output của chương trình
              </span>

              <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] min-h-[180px] space-y-1.5 shadow-md overflow-y-auto">
                {logs.length > 0 ? (
                  logs.map((line, idx) => {
                    let color = "text-emerald-300";
                    if (line.startsWith("JVM:")) color = "text-stone-500 italic";
                    if (line.includes("throw") || line.includes("IllegalArgumentException")) color = "text-rose-400 font-bold";
                    return <div key={idx} className={color}>{line}</div>;
                  })
                ) : (
                  <div className="text-stone-650 italic text-[11px]">Chờ bấm nút khởi động từng bước...</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Key rule alert */}
        <div className="bg-yellow-50/60 border border-yellow-250/60 rounded-2xl p-4 flex gap-3 items-start shadow-sm mt-4">
          <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-yellow-900 font-mono uppercase tracking-wider block">
              📌 Quy Tắc Vàng (Rất dễ thi dạng Hỏi Output)
            </span>
            <p className="text-xs text-yellow-700 mt-1 leading-relaxed">
              Khi lỗi xảy ra tại lệnh <code>throw</code>, chương trình sẽ <strong>nhảy ngay vào khối catch tương ứng</strong>, bỏ qua toàn bộ phần code còn lại của khối <code>try</code> (ví dụ: dòng <code>After factorial()</code> sẽ không bao giờ được in ra). Tuy nhiên, khối <code>finally</code> vẫn <strong>luôn luôn chạy</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* PART B: Retry simulator */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-teal-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <RefreshCw className="w-5 h-5 text-teal-600" />
          <span>Mục IV - Phần 2: Cơ Chế Thử Lại (Retry Pattern - TestExceptionRetry.java)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Bấm chạy mô phỏng kỹ thuật đặt <code className="bg-stone-100 px-1 rounded font-mono">try-catch</code> bên trong vòng lặp <code className="bg-stone-100 px-1 rounded font-mono">do-while</code> để bắt người dùng nhập đi nhập lại cho đến khi nhập đúng.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-4">
          {/* Retry Source code */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
                Mã nguồn TestExceptionRetry.java
              </span>

              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9px] leading-relaxed text-indigo-300 shadow-md overflow-x-auto">
{`do {
  try {
    System.out.print("Enter n: ");
    input = sc.nextInt();
    System.out.println("Ans = " + factorial(input));
    retry = false; // ➔ Thành công, thoát lặp
  } catch (IllegalArgumentException expObj) {
    System.out.println(expObj.getMessage());
    // JVM tiếp tục chạy, lặp lại do-while
  }
} while (retry);`}
              </pre>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleNextRetryStep}
                disabled={retryStep >= 4}
                className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Simulate nhập giá trị tiếp theo</span>
              </button>
              <button
                onClick={handleResetRetry}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console retry */}
          <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Simulated Console Output
              </span>

              <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] min-h-[140px] space-y-1.5 shadow-md overflow-y-auto">
                {retryLogs.length > 0 ? (
                  retryLogs.map((line, idx) => {
                    let color = "text-emerald-300";
                    if (line.startsWith("JVM:")) color = "text-stone-500 italic";
                    if (line.includes("invalid!")) color = "text-rose-400 font-bold";
                    if (line.startsWith("✅")) color = "text-emerald-400 font-black";
                    return <div key={idx} className={color}>{line}</div>;
                  })
                ) : (
                  <div className="text-stone-650 italic text-[11px]">Chờ chạy nhập dữ liệu mô phỏng... (n=-2, n=-7, n=6)</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
