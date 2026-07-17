"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Lock, Unlock, Cpu, AlertTriangle, CheckCircle } from "lucide-react";

export default function StringBuilderThreadSafetyVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState("builder"); // "builder" or "buffer"
  const [step, setStep] = useState(0); // 0 to 10
  const [buffer, setBuffer] = useState(Array(10).fill(""));
  const [threadAProgress, setThreadAProgress] = useState(-1); // index thread A is writing
  const [threadBProgress, setThreadBProgress] = useState(-1); // index thread B is writing
  const [statusText, setStatusText] = useState("Sẵn sàng mô phỏng. Nhấn Chạy để bắt đầu.");
  const [isLocked, setIsLocked] = useState(false);
  const [hasCollision, setHasCollision] = useState(false);
  const [collisions, setCollisions] = useState([]); // indices where collisions happened

  const timerRef = useRef(null);

  const resetSimulation = () => {
    setIsPlaying(false);
    setStep(0);
    setBuffer(Array(10).fill(""));
    setThreadAProgress(-1);
    setThreadBProgress(-1);
    setIsLocked(false);
    setHasCollision(false);
    setCollisions([]);
    setStatusText("Đã làm mới. Sẵn sàng mô phỏng.");
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const runSimulationStep = () => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      
      if (nextStep > 10) {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
        setStatusText(
          mode === "builder"
            ? "❌ Hoàn thành: Dữ liệu bị ghi đè, trùng lặp và mất mát (Race Condition)!"
            : "✅ Hoàn thành: Dữ liệu an toàn, ghi đệm đồng bộ hoàn hảo!"
        );
        return prevStep;
      }

      setBuffer((prevBuffer) => {
        const newBuf = [...prevBuffer];
        
        if (mode === "builder") {
          // StringBuilder: Threads write concurrently without locks
          // Step 1 to 5: Both threads write to same positions or out of sync
          if (nextStep === 1) {
            newBuf[0] = "A";
            setThreadAProgress(0);
            setStatusText("🧵 Luồng A bắt đầu ghi 'A' vào index 0.");
          } else if (nextStep === 2) {
            newBuf[0] = "B"; // Overwritten!
            setThreadBProgress(0);
            setCollisions([0]);
            setHasCollision(true);
            setStatusText("⚠️ Race Condition! Luồng B ghi đè 'B' lên index 0 của Luồng A!");
          } else if (nextStep === 3) {
            newBuf[1] = "A";
            setThreadAProgress(1);
            setStatusText("🧵 Luồng A ghi 'A' vào index 1.");
          } else if (nextStep === 4) {
            newBuf[1] = "B"; // Overwritten!
            setThreadBProgress(1);
            setCollisions([0, 1]);
            setStatusText("⚠️ Race Condition! Luồng B tiếp tục ghi đè 'B' lên index 1!");
          } else if (nextStep === 5) {
            newBuf[2] = "A";
            newBuf[3] = "B";
            setThreadAProgress(2);
            setThreadBProgress(3);
            setStatusText("🧵 Luồng A ghi vào index 2, Luồng B ghi vào index 3 đồng thời.");
          } else if (nextStep === 6) {
            newBuf[4] = "A";
            newBuf[4] = "B"; // Crash or overwriting collision
            setThreadAProgress(4);
            setThreadBProgress(4);
            setCollisions([0, 1, 4]);
            setStatusText("⚠️ Tranh chấp trầm trọng! Cả hai luồng cùng cố ghi vào index 4!");
          } else if (nextStep === 7) {
            newBuf[5] = "A";
            setThreadAProgress(5);
            setStatusText("🧵 Luồng A ghi 'A' vào index 5.");
          } else if (nextStep === 8) {
            newBuf[6] = "B";
            setThreadBProgress(6);
            setStatusText("🧵 Luồng B ghi 'B' vào index 6.");
          } else if (nextStep === 9) {
            newBuf[7] = "A";
            setThreadAProgress(7);
            setStatusText("🧵 Luồng A ghi 'A' vào index 7.");
          } else if (nextStep === 10) {
            newBuf[8] = "B";
            setThreadBProgress(8);
            setStatusText("🧵 Luồng B ghi 'B' vào index 8.");
          }
        } else {
          // StringBuffer: Threads write with Synchronized locks
          if (nextStep === 1) {
            setIsLocked(true);
            setThreadAProgress(0);
            newBuf[0] = "A";
            setStatusText("🔒 Luồng A giữ khóa (synchronized). Luồng B bị chặn (BLOCKED).");
          } else if (nextStep === 2) {
            setThreadAProgress(1);
            newBuf[1] = "A";
            setStatusText("🔒 Luồng A tiếp tục ghi 'A' vào index 1. Khóa vẫn được giữ.");
          } else if (nextStep === 3) {
            setThreadAProgress(2);
            newBuf[2] = "A";
            setStatusText("🔒 Luồng A ghi 'A' vào index 2.");
          } else if (nextStep === 4) {
            setThreadAProgress(3);
            newBuf[3] = "A";
            setStatusText("🔒 Luồng A ghi xong. Đang giải phóng khóa...");
          } else if (nextStep === 5) {
            setIsLocked(false);
            setThreadAProgress(-1);
            setStatusText("🔓 Luồng A nhả khóa. Luồng B giành được khóa và kích hoạt!");
          } else if (nextStep === 6) {
            setIsLocked(true);
            setThreadBProgress(4);
            newBuf[4] = "B";
            setStatusText("🔒 Luồng B giữ khóa. Bắt đầu ghi 'B' từ index 4 nối tiếp.");
          } else if (nextStep === 7) {
            setThreadBProgress(5);
            newBuf[5] = "B";
            setStatusText("🔒 Luồng B ghi 'B' vào index 5.");
          } else if (nextStep === 8) {
            setThreadBProgress(6);
            newBuf[6] = "B";
            setStatusText("🔒 Luồng B ghi 'B' vào index 6.");
          } else if (nextStep === 9) {
            setThreadBProgress(7);
            newBuf[7] = "B";
            setStatusText("🔒 Luồng B kết thúc ghi.");
          } else if (nextStep === 10) {
            setIsLocked(false);
            setThreadBProgress(-1);
            setStatusText("🔓 Giải phóng tất cả khóa. StringBuffer ghi chuỗi an toàn tuyệt đối!");
          }
        }
        return newBuf;
      });

      return nextStep;
    });
  };

  const startSimulation = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsPlaying(true);
      if (step >= 10) {
        // Reset if completed
        resetSimulation();
      }
      timerRef.current = setInterval(runSimulationStep, 1000);
    }
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    resetSimulation();
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 border-b border-stone-200 pb-4">
        <div>
          <h4 className="text-sm md:text-base font-extrabold text-stone-900 flex items-center gap-2 font-serif">
            <Cpu className="w-4 h-4 text-accent" />
            <span>Mô phỏng Đa luồng & Thread-Safety (StringBuffer vs StringBuilder)</span>
          </h4>
          <p className="text-[10px] text-stone-500 mt-1">Trực quan hóa cơ chế đồng bộ hóa luồng (thread synchronization) trong Java.</p>
        </div>

        {/* Selector */}
        <div className="flex bg-stone-200 p-1 rounded-xl w-fit">
          <button
            onClick={() => handleModeChange("builder")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              mode === "builder" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
            }`}
          >
            StringBuilder
          </button>
          <button
            onClick={() => handleModeChange("buffer")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              mode === "buffer" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
            }`}
          >
            StringBuffer
          </button>
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Control Panel (col 4) */}
        <div className="md:col-span-4 flex flex-col justify-between p-4 bg-stone-100 rounded-2xl border border-stone-200">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-stone-455 uppercase tracking-widest block">Loại mô phỏng</span>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  mode === "builder" ? "bg-red-500/10 text-red-500 border border-red-500/25" : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/25"
                }`}>
                  {mode === "builder" ? "Non-synchronized" : "Synchronized"}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  mode === "builder" ? "bg-rose-500/10 text-rose-500 border border-rose-500/25" : "bg-teal-500/10 text-teal-500 border border-teal-500/25"
                }`}>
                  {mode === "builder" ? "Non-thread-safe" : "Thread-safe"}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[9px] font-black text-stone-455 uppercase tracking-widest block">Trạng thái Khóa (Lock state)</span>
              <div className="flex items-center gap-1.5 text-xs">
                {isLocked ? (
                  <span className="text-amber-600 font-extrabold flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Lớp đang bị KHÓA (Synchronized Locked)</span>
                  </span>
                ) : (
                  <span className="text-stone-500 font-semibold flex items-center gap-1">
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Không có khóa (Unlocked)</span>
                  </span>
                )}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-850 text-white font-mono text-[9px] leading-relaxed">
              <span className="text-stone-500 block mb-1">// Mã giả hoạt động</span>
              {mode === "builder" ? (
                <div className="space-y-1">
                  <div><span className="text-rose-450">// Chạy đa luồng song song</span></div>
                  <div><span className="text-purple-400">new</span> Thread(() -&gt; sb.append(<span className="text-amber-300">"A"</span>)).start();</div>
                  <div><span className="text-purple-400">new</span> Thread(() -&gt; sb.append(<span className="text-amber-300">"B"</span>)).start();</div>
                </div>
              ) : (
                <div className="space-y-1">
                  <div><span className="text-emerald-500">// Giao tác đồng bộ an toàn</span></div>
                  <div><span className="text-purple-400">public synchronized</span> append(...) {"{"}</div>
                  <div className="pl-3"><span className="text-stone-450">// Chỉ 1 luồng được ghi tại 1 thời điểm</span></div>
                  <div>{"}"}</div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={startSimulation}
              className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                isPlaying 
                  ? "bg-stone-800 text-white hover:bg-stone-900" 
                  : "bg-accent text-white hover:bg-accent/90"
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isPlaying ? "animate-pulse" : ""}`} />
              <span>{isPlaying ? "Tạm dừng" : "Chạy"}</span>
            </button>
            <button
              onClick={resetSimulation}
              className="px-3 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Simulation Stream (col 8) */}
        <div className="md:col-span-8 flex flex-col justify-between gap-4">
          
          {/* Active Status Display Banner */}
          <div className={`p-4 rounded-2xl border flex items-center gap-3 transition-all duration-300 ${
            hasCollision && mode === "builder"
              ? "bg-rose-500/10 border-rose-500/30 text-rose-800"
              : step > 9
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800"
              : "bg-white border-stone-200"
          }`}>
            {hasCollision && mode === "builder" ? (
              <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 animate-bounce" />
            ) : step > 9 ? (
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            ) : (
              <Cpu className="w-5 h-5 text-stone-400 shrink-0" />
            )}
            <div className="text-xs font-bold leading-normal">{statusText}</div>
          </div>

          {/* Parallel Thread visualization */}
          <div className="grid grid-cols-2 gap-4">
            {/* Thread A block */}
            <div className={`p-3.5 rounded-2xl border transition-all ${
              threadAProgress !== -1 
                ? "bg-emerald-500/10 border-emerald-500/30 shadow-sm" 
                : "bg-white border-stone-200 opacity-60"
            }`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider">🧵 Thread A (Luồng 1)</span>
                {threadAProgress !== -1 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />}
              </div>
              <div className="text-xs font-bold text-stone-850">Đang ghi chuỗi: <span className="font-mono text-emerald-500">"AAAA"</span></div>
              <div className="text-[10px] text-stone-500 mt-1">Trạng thái: {threadAProgress !== -1 ? "ĐANG GHI..." : "Đang đợi..."}</div>
            </div>

            {/* Thread B block */}
            <div className={`p-3.5 rounded-2xl border transition-all ${
              threadBProgress !== -1 
                ? "bg-blue-500/10 border-blue-500/30 shadow-sm" 
                : isLocked && mode === "buffer"
                ? "bg-amber-500/5 border-amber-500/20 opacity-65"
                : "bg-white border-stone-200 opacity-60"
            }`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-black text-blue-600 uppercase tracking-wider">🧵 Thread B (Luồng 2)</span>
                {threadBProgress !== -1 && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />}
              </div>
              <div className="text-xs font-bold text-stone-850">Đang ghi chuỗi: <span className="font-mono text-blue-500">"BBBB"</span></div>
              <div className="text-[10px] text-stone-500 mt-1">
                Trạng thái: {
                  threadBProgress !== -1 
                    ? "ĐANG GHI..." 
                    : isLocked && mode === "buffer"
                    ? "⚠️ BỊ CHẶN (BLOCKED)"
                    : "Đang đợi..."
                }
              </div>
            </div>
          </div>

          {/* Array cells representing internal buffer */}
          <div className="bg-stone-900 border border-stone-850 rounded-2xl p-4">
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2.5 select-none">Bản đồ bộ đệm RAM dùng chung:</div>
            
            <div className="flex flex-wrap gap-1.5 items-center min-h-[50px]">
              {buffer.map((char, idx) => {
                let cellClass = "bg-stone-950 border-stone-800 text-stone-300";
                
                if (collisions.includes(idx) && mode === "builder") {
                  cellClass = "bg-rose-500/25 border-rose-500 text-rose-500 font-black animate-shake";
                } else if (char === "A") {
                  cellClass = "bg-emerald-950/40 border-emerald-500 text-emerald-400 font-bold";
                } else if (char === "B") {
                  cellClass = "bg-blue-950/40 border-blue-500 text-blue-400 font-bold";
                } else if (char === "") {
                  cellClass = "bg-stone-900 border-stone-800 text-stone-600 border-dashed";
                }

                return (
                  <div
                    key={idx}
                    className={`w-7 h-9 rounded-lg flex flex-col justify-between items-center py-0.5 transition-all select-none border text-[10px] relative ${cellClass}`}
                  >
                    <span className="text-[6px] text-stone-500 font-mono">{idx}</span>
                    <span className="font-mono font-bold text-xs">{char || "·"}</span>
                    {collisions.includes(idx) && mode === "builder" && (
                      <span className="absolute -top-1.5 -right-1 text-[8px] bg-rose-500 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">⚡</span>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-between items-center mt-3.5 text-[9px] text-stone-500 border-t border-stone-850 pt-2.5 select-none">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-950/40 border border-emerald-500" />
                  <span>Ký tự Luồng A</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-blue-950/40 border border-blue-500" />
                  <span>Ký tự Luồng B</span>
                </span>
                {mode === "builder" && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-rose-500/25 border border-rose-500" />
                    <span>Lỗi ghi đè (Collision)</span>
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
