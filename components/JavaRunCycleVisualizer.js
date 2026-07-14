/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";

export default function JavaRunCycleVisualizer() {
  const [lang, setLang] = useState("java"); // "c" or "java"
  const [os, setOs] = useState("windows"); // "windows", "macos", "linux"
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 4 steps
  const [consoleMsg, setConsoleMsg] = useState("Sẵn sàng chạy mô phỏng. Hãy nhấn 'Chạy mô phỏng'.");

  const timerRef = React.useRef(null);
  const currentStepRef = React.useRef(0);

  const getStepData = (stepIndex) => {
    const data = [
      {
        progress: 0,
        msg: "Bắt đầu: Đọc file mã nguồn...",
        delay: 1500
      },
      {
        progress: 1,
        msg: lang === "c" 
          ? "Bước 1: Trình biên dịch GCC biên dịch trực tiếp welcome.c sang mã máy nhị phân." 
          : "Bước 1: Trình biên dịch javac dịch HelloWorld.java sang file Bytecode trung gian (.class).",
        delay: 2000
      },
      {
        progress: 2,
        msg: lang === "c" 
          ? "Bước 2: Tạo ra file thực thi a.out chứa mã máy nhị phân gốc (Native Binary)." 
          : "Bước 2: Tạo ra file HelloWorld.class độc lập nền tảng, chứa các mã bytecode tiêu chuẩn.",
        delay: 2000
      },
      {
        progress: 3,
        msg: lang === "c"
          ? `Bước 3: Nạp file a.out (được biên dịch giả định trên Linux) vào hệ điều hành ${os.toUpperCase()}...`
          : `Bước 3: Nạp HelloWorld.class vào Máy ảo Java (JVM) được cài đặt riêng trên ${os.toUpperCase()}...`,
        delay: 2500
      },
      {
        progress: 4,
        msg: lang === "c"
          ? (os === "linux"
              ? "✔ Kết quả: CHẠY THÀNH CÔNG! CPU Linux thực thi trực tiếp file a.out vì mã máy nhị phân khớp 100% với tập lệnh nhân Linux."
              : `❌ Kết quả: THẤT BẠI! Hệ điều hành ${os.toUpperCase()} không thể thực thi file a.out vì định dạng nhị phân ELF và tập lệnh máy không tương thích hệ thống này.`)
          : `✔ Kết quả: CHẠY THÀNH CÔNG! Máy ảo JVM trên ${os.toUpperCase()} đọc hiểu mã Bytecode trong file .class và thông dịch trực tiếp thành các lệnh máy tương thích với hệ điều hành ${os.toUpperCase()}.`,
        delay: 0
      }
    ];
    return data[stepIndex];
  };

  const runNextStep = () => {
    const nextIdx = currentStepRef.current + 1;
    if (nextIdx >= 5) {
      setIsRunning(false);
      return;
    }

    const stepInfo = getStepData(nextIdx);
    currentStepRef.current = nextIdx;
    setProgress(stepInfo.progress);
    setConsoleMsg(stepInfo.msg);

    if (nextIdx === 4) {
      setIsRunning(false);
      return;
    }

    // Queue next step
    timerRef.current = setTimeout(() => {
      runNextStep();
    }, stepInfo.delay);
  };

  const startSimulation = () => {
    setIsRunning(true);
    setIsPaused(false);
    setProgress(0);
    setConsoleMsg("Bắt đầu: Đọc file mã nguồn...");
    currentStepRef.current = 0;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      runNextStep();
    }, 1500);
  };

  const pauseSimulation = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPaused(true);
    setConsoleMsg((prev) => prev + " <span class='text-amber-500 font-bold'>(ĐANG TẠM DỪNG - Nhấn 'Tiếp tục' để chạy tiếp)</span>");
  };

  const resumeSimulation = () => {
    setIsPaused(false);
    // Strip the pause message
    setConsoleMsg((prev) => prev.replace(/\s*<span class='text-amber-500 font-bold'>\(ĐANG TẠM DỪNG - Nhấn 'Tiếp tục' để chạy tiếp\)<\/span>/g, ""));
    runNextStep();
  };

  const resetSimulation = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setProgress(0);
    setConsoleMsg("Sẵn sàng chạy mô phỏng. Hãy nhấn 'Chạy mô phỏng'.");
  };

  useEffect(() => {
    setProgress(0);
    setIsRunning(false);
    setIsPaused(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    setConsoleMsg(`Đã đổi cấu hình sang: ${lang.toUpperCase()} chạy trên ${os.toUpperCase()}. Nhấn 'Chạy mô phỏng' để kiểm tra.`);
  }, [lang, os]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-stone-200 pb-4">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            Giả Lập Chu Trình Biên Dịch & Chạy Chương Trình
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            So sánh cơ chế biên dịch phụ thuộc phần cứng của C và tính độc lập nền tảng của Java.
          </p>
        </div>
        
        {/* Toggle Language */}
        <div className="flex bg-stone-200 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setLang("c")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              lang === "c"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            Ngôn ngữ C
          </button>
          <button
            onClick={() => setLang("java")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              lang === "java"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            Ngôn ngữ Java (JVM)
          </button>
        </div>
      </div>

      {/* OS Selector Tabs */}
      <div className="flex gap-2 mb-5">
        <span className="text-xs font-bold text-stone-400 self-center mr-2 uppercase tracking-wide">Môi trường chạy:</span>
        {["windows", "macos", "linux"].map((targetOs) => (
          <button
            key={targetOs}
            onClick={() => setOs(targetOs)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer capitalize ${
              os === targetOs
                ? "border-accent bg-accent/5 text-accent shadow-sm"
                : "border-stone-200 hover:border-stone-300 text-stone-650 bg-white"
            }`}
          >
            {targetOs === "macos" ? "macOS" : targetOs}
          </button>
        ))}
      </div>

      {/* Pipeline Visualization Area */}
      <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-xl p-5 text-white min-h-[260px] flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative py-6">
          {/* Step 1: Source Code */}
          <div className={`border rounded-xl p-3 text-center transition-all duration-300 ${
            progress >= 0 ? "border-amber-500 bg-amber-500/5" : "border-stone-800 opacity-40"
          }`}>
            <div className="text-[9px] uppercase tracking-wider font-extrabold text-amber-500 mb-1.5">Mã Nguồn</div>
            <div className="font-mono text-xs font-bold">
              {lang === "c" ? "welcome.c" : "HelloWorld.java"}
            </div>
            <div className="text-[10px] text-stone-400 mt-2 font-sans italic">
              {lang === "c" ? "Code C tuần tự" : "Code Java Class"}
            </div>
          </div>

          {/* Step 2: Compiler */}
          <div className={`border rounded-xl p-3 text-center transition-all duration-300 relative ${
            progress >= 1 ? "border-amber-500 bg-amber-500/5" : "border-stone-800 opacity-40"
          }`}>
            {/* Arrow from 1 to 2 */}
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-amber-500 text-lg font-bold">➔</div>
            <div className="text-[9px] uppercase tracking-wider font-extrabold text-amber-500 mb-1.5">Compiler</div>
            <div className="font-mono text-xs font-bold">
              {lang === "c" ? "gcc (Linux)" : "javac"}
            </div>
            <div className="text-[10px] text-stone-400 mt-2 font-sans">
              {lang === "c" ? "Dịch ra mã máy" : "Dịch ra Bytecode"}
            </div>
          </div>

          {/* Step 3: Executable / Bytecode */}
          <div className={`border rounded-xl p-3 text-center transition-all duration-300 relative ${
            progress >= 2 ? "border-amber-500 bg-amber-500/5" : "border-stone-800 opacity-40"
          }`}>
            {/* Arrow from 2 to 3 */}
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-amber-500 text-lg font-bold">➔</div>
            <div className="text-[9px] uppercase tracking-wider font-extrabold text-amber-500 mb-1.5">
              {lang === "c" ? "File Nhị Phân" : "Mã Trung Gian"}
            </div>
            <div className="font-mono text-xs font-bold">
              {lang === "c" ? "a.out (Linux ELF)" : "HelloWorld.class"}
            </div>
            <div className="text-[10px] text-stone-400 mt-2 font-sans font-bold">
              {lang === "c" ? "Chỉ chạy trên Linux" : "Chạy được mọi nơi"}
            </div>
          </div>

          {/* Step 4: Interpreter / Execution */}
          <div className={`border rounded-xl p-3 text-center transition-all duration-300 relative ${
            progress >= 3 ? "border-amber-500 bg-amber-500/5" : "border-stone-800 opacity-40"
          }`}>
            {/* Arrow from 3 to 4 */}
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-amber-500 text-lg font-bold">➔</div>
            
            {lang === "java" ? (
              <>
                <div className="text-[9px] uppercase tracking-wider font-extrabold text-emerald-450 mb-1">Máy ảo JVM</div>
                <div className="font-mono text-xs font-bold text-emerald-400">
                  JVM ({os === "macos" ? "macOS" : os})
                </div>
                <div className="text-[9px] text-stone-400 mt-2 font-sans">
                  Thông dịch sang lệnh {os === "macos" ? "macOS" : os}
                </div>
              </>
            ) : (
              <>
                <div className="text-[9px] uppercase tracking-wider font-extrabold text-amber-500 mb-1">Thực Thi CPU</div>
                <div className="font-mono text-xs font-bold">
                  {os === "macos" ? "macOS" : os} OS
                </div>
                <div className="text-[9px] text-stone-400 mt-2 font-sans">
                  {os === "linux" ? "Đọc định dạng ELF" : "Không đọc được ELF"}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Console logs */}
        <div className="mt-4 p-3 bg-stone-900 border border-stone-800 rounded-lg min-h-[60px] flex items-center">
          <div className="text-xs font-mono leading-relaxed text-stone-300">
            <span className="text-amber-500 font-bold mr-1">&gt;_</span>
            <span dangerouslySetInnerHTML={{ __html: consoleMsg }} />
          </div>
        </div>
      </div>

      {/* Simulator Controls */}
      <div className="flex justify-end gap-3 mt-4">
        {isRunning ? (
          <>
            <button
              onClick={resetSimulation}
              className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <span>⏹</span> Đặt lại
            </button>
            {isPaused ? (
              <button
                onClick={resumeSimulation}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <span>▶</span> Tiếp tục
              </button>
            ) : (
              <button
                onClick={pauseSimulation}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <span>⏸</span> Tạm dừng
              </button>
            )}
          </>
        ) : (
          <button
            onClick={startSimulation}
            className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>⚡</span> Chạy mô phỏng
          </button>
        )}
      </div>
    </div>
  );
}
