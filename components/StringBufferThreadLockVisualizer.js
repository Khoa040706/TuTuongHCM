"use client";
import React, { useState, useEffect, useRef } from "react";

export default function StringBufferThreadLockVisualizer() {
  const [simulationState, setSimulationState] = useState("idle"); // idle, running, finished
  const [step, setStep] = useState(0);
  const [lockStatus, setLockStatus] = useState("unlocked"); // unlocked, locked-a, locked-b
  const [threadAState, setThreadAState] = useState("idle"); // idle, requesting, active, done
  const [threadBState, setThreadBState] = useState("idle"); // idle, blocked, active, done
  const [bufferContent, setBufferContent] = useState("");
  const [consoleLogs, setConsoleLogs] = useState([
    { text: "Hệ thống sẵn sàng. Nhấn 'Bắt đầu mô phỏng' để chạy.", type: "system" }
  ]);
  
  const timerRef = useRef(null);

  const addLog = (msg, type = "info") => {
    setConsoleLogs((prev) => [...prev, { text: msg, type }]);
  };

  const resetSim = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSimulationState("idle");
    setStep(0);
    setLockStatus("unlocked");
    setThreadAState("idle");
    setThreadBState("idle");
    setBufferContent("");
    setConsoleLogs([{ text: "Hệ thống sẵn sàng. Nhấn 'Bắt đầu mô phỏng' để chạy.", type: "system" }]);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const runSimulationStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        addLog("🎬 Bắt đầu: Thread A và Thread B cùng gửi yêu cầu gọi .append() đồng thời.", "system");
        setThreadAState("requesting");
        setThreadBState("requesting");
        addLog("Thread A yêu cầu ghi dữ liệu...", "a");
        addLog("Thread B yêu cầu ghi dữ liệu...", "b");
        break;
      case 2:
        addLog("🔒 Thread A được cấp quyền truy cập trước, lấy khóa Lock thành công. Khóa đối tượng chuyển thành [LOCKED].", "a");
        setLockStatus("locked-a");
        setThreadAState("active");
        setThreadBState("blocked");
        addLog("⚠️ Thread B bị CHẶN (Blocked) - đang đợi Thread A giải phóng Lock.", "b");
        break;
      case 3:
        addLog("✍️ Thread A ghi dữ liệu vào buffer: sb.append('Hello')", "a");
        setBufferContent("Hello");
        break;
      case 4:
        addLog("✅ Thread A hoàn thành tác vụ, tự động giải phóng Lock.", "a");
        setLockStatus("unlocked");
        setThreadAState("done");
        break;
      case 5:
        addLog("🔑 Lock được mở! Thread B ngay lập tức nhận diện, lấy khóa Lock thành công.", "b");
        setLockStatus("locked-b");
        setThreadBState("active");
        break;
      case 6:
        addLog("✍️ Thread B ghi tiếp dữ liệu vào buffer: sb.append(' Java')", "b");
        setBufferContent("Hello Java");
        break;
      case 7:
        addLog("✅ Thread B hoàn thành tác vụ, tự động giải phóng Lock.", "b");
        setLockStatus("unlocked");
        setThreadBState("done");
        addLog("🎉 Kết quả hoàn tất hoàn hảo: 'Hello Java' (An toàn luồng thành công).", "system");
        setSimulationState("finished");
        break;
      default:
        break;
    }
  };

  const startSimulation = () => {
    if (simulationState === "running") return;
    resetSim();
    setSimulationState("running");
    setConsoleLogs([]);
    
    let currentStep = 1;
    setStep(currentStep);
    runSimulationStep(currentStep);

    timerRef.current = setInterval(() => {
      currentStep += 1;
      if (currentStep <= 7) {
        setStep(currentStep);
        runSimulationStep(currentStep);
      } else {
        clearInterval(timerRef.current);
      }
    }, 2200); // 2.2s delay for student visibility
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-purple-100 text-purple-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Kiến thức thi trắc nghiệm</span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1">
          StringBuffer Thread-Safe Lock Simulator
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Minh họa cách từ khóa <code>synchronized</code> bảo vệ tài nguyên StringBuffer trước sự tranh chấp của nhiều Thread (Đa luồng).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch mb-5">
        
        {/* Thread A State Box (col 3) */}
        <div className="md:col-span-3 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between text-center select-none bg-stone-50/50">
          <div>
            <span className="bg-sky-100 text-sky-800 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md">Luồng số 1</span>
            <h5 className="font-extrabold text-stone-900 text-xs mt-1">Thread A</h5>
            <p className="text-[10px] text-stone-400 mt-0.5">Thêm chuỗi: <code>&quot;Hello&quot;</code></p>
          </div>
          
          <div className="my-4 flex justify-center">
            {threadAState === "idle" && <span className="bg-stone-200 text-stone-600 px-3 py-1.5 rounded-xl text-[10px] font-bold">Chờ chạy</span>}
            {threadAState === "requesting" && <span className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-xl text-[10px] font-bold animate-pulse">Xin khóa 🔑</span>}
            {threadAState === "active" && <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl text-[10px] font-black animate-bounce">Đang ghi ✍️</span>}
            {threadAState === "done" && <span className="bg-sky-100 text-sky-800 px-3 py-1.5 rounded-xl text-[10px] font-bold">Xong ✅</span>}
          </div>
          
          <div className="text-[9px] text-stone-500 font-medium">
            {threadAState === "active" ? "Đang độc quyền giữ khóa Lock" : "Trạng thái nhàn rỗi"}
          </div>
        </div>

        {/* Central Lock Object (col 6) */}
        <div className="md:col-span-6 border-2 border-dashed border-stone-200 rounded-2xl p-4 flex flex-col justify-between items-center text-center bg-[#151413] text-stone-300 min-h-[180px]">
          <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider select-none">Vùng nhớ Heap (StringBuffer Object)</div>
          
          {/* Lock Visualization */}
          <div className="flex flex-col items-center gap-2.5">
            {lockStatus === "unlocked" && (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-950/45 border-2 border-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/10">
                  🔓
                </div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mt-1.5 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900 select-none">Sẵn sàng (Unlocked)</span>
              </div>
            )}
            {lockStatus === "locked-a" && (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-rose-950/40 border-2 border-rose-500 flex items-center justify-center text-xl shadow-lg shadow-rose-500/10 animate-pulse">
                  🔒
                </div>
                <span className="text-[10px] text-rose-450 font-bold uppercase tracking-wider mt-1.5 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-900 select-none">Khóa bởi Thread A</span>
              </div>
            )}
            {lockStatus === "locked-b" && (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-950/40 border-2 border-purple-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/10 animate-pulse">
                  🔒
                </div>
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider mt-1.5 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-900 select-none">Khóa bởi Thread B</span>
              </div>
            )}
          </div>

          {/* Buffer Value */}
          <div className="w-full mt-3">
            <span className="text-[8px] text-stone-500 block uppercase font-bold select-none">Dữ liệu StringBuffer hiện tại:</span>
            <div className="mt-1 font-mono text-sm font-bold bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-850 text-amber-400 min-h-[36px] flex items-center justify-center break-all select-all">
              {bufferContent ? `"${bufferContent}"` : "(Trống)"}
            </div>
          </div>
        </div>

        {/* Thread B State Box (col 3) */}
        <div className="md:col-span-3 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between text-center select-none bg-stone-50/50">
          <div>
            <span className="bg-purple-100 text-purple-800 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md">Luồng số 2</span>
            <h5 className="font-extrabold text-stone-900 text-xs mt-1">Thread B</h5>
            <p className="text-[10px] text-stone-400 mt-0.5">Thêm chuỗi: <code>&quot; Java&quot;</code></p>
          </div>
          
          <div className="my-4 flex justify-center">
            {threadBState === "idle" && <span className="bg-stone-200 text-stone-600 px-3 py-1.5 rounded-xl text-[10px] font-bold">Chờ chạy</span>}
            {threadBState === "requesting" && <span className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-xl text-[10px] font-bold animate-pulse">Xin khóa 🔑</span>}
            {threadBState === "blocked" && <span className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-xl text-[10px] font-black animate-pulse">Bị Chặn ⏳</span>}
            {threadBState === "active" && <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl text-[10px] font-black animate-bounce">Đang ghi ✍️</span>}
            {threadBState === "done" && <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-xl text-[10px] font-bold">Xong ✅</span>}
          </div>
          
          <div className="text-[9px] text-stone-500 font-medium">
            {threadBState === "blocked" ? "⚠️ Đợi mở khóa đối tượng..." : "Trạng thái nhàn rỗi"}
          </div>
        </div>

      </div>

      {/* Control Buttons */}
      <div className="flex gap-3.5 mb-5 select-none">
        <button
          onClick={startSimulation}
          disabled={simulationState === "running"}
          className={`flex-1 py-3 text-xs font-black rounded-full uppercase tracking-wider transition-all border-none cursor-pointer ${
            simulationState === "running"
              ? "bg-stone-150 text-stone-400 cursor-not-allowed"
              : "bg-purple-650 hover:bg-purple-750 text-white shadow-md shadow-purple-550/20 hover:shadow-purple-550/30 hover:scale-[1.02]"
          }`}
        >
          {simulationState === "running" ? "Đang mô phỏng..." : "Bắt đầu mô phỏng Đa luồng"}
        </button>
        <button
          onClick={resetSim}
          className="px-5 py-3 text-xs font-bold rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all border-none cursor-pointer"
        >
          Reset
        </button>
      </div>

      {/* Logger console */}
      <div className="bg-[#121110] border border-stone-850 rounded-2xl p-4 font-mono text-xs text-stone-300">
        <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 select-none">Nhật ký máy chạy ảo (JVM Thread Console):</div>
        <div className="space-y-1.5 max-h-[140px] overflow-y-auto font-mono text-[11px] leading-relaxed">
          {consoleLogs.map((log, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-stone-600 select-none">[{i + 1}]</span>
              <span
                className={
                  log.type === "system"
                    ? "text-amber-500 font-bold"
                    : log.type === "a"
                    ? "text-sky-400"
                    : log.type === "b"
                    ? "text-purple-400"
                    : "text-stone-300"
                }
              >
                {log.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
