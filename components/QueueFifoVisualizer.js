"use client";
import React, { useState } from "react";
import { ArrowRight, Plus, Trash2, Eye, Play, RotateCcw, Sparkles } from "lucide-react";

export default function QueueFifoVisualizer() {
  const [queue, setQueue] = useState(["a", "b", "c"]);
  const [inputValue, setInputValue] = useState("d");
  const [log, setLog] = useState("Queue (FIFO): Phần tử thêm vào ở CUỐI (back), lấy ra ở ĐẦU (front).");
  const [activeStep, setActiveStep] = useState(0);

  const stepsExample = [
    { code: 'Queue q = new Queue();', desc: 'Khởi tạo Queue rỗng.', action: () => setQueue([]) },
    { code: 'q.offer("a");', desc: 'Thêm "a" vào cuối Queue.', action: () => setQueue(["a"]) },
    { code: 'q.offer("b");', desc: 'Thêm "b" vào cuối Queue.', action: () => setQueue(["a", "b"]) },
    { code: 'q.offer("c");', desc: 'Thêm "c" vào cuối Queue.', action: () => setQueue(["a", "b", "c"]) },
    { code: 'd = q.peek(); // d = "a"', desc: 'Xem phần tử ở đầu Queue (front) -> "a". Queue không đổi.', action: () => setQueue(["a", "b", "c"]) },
    { code: 'q.poll(); // xóa "a"', desc: 'Lấy và xóa phần tử ở đầu Queue ("a").', action: () => setQueue(["b", "c"]) },
    { code: 'q.offer("e");', desc: 'Thêm "e" vào cuối Queue.', action: () => setQueue(["b", "c", "e"]) },
    { code: 'q.poll(); // xóa "b"', desc: 'Lấy và xóa phần tử ở đầu Queue ("b").', action: () => setQueue(["c", "e"]) }
  ];

  const handleOffer = () => {
    if (!inputValue.trim()) return;
    const val = inputValue.trim();
    if (queue.length >= 7) {
      setLog("⚠️ Queue đã đầy (max 7 phần tử mô phỏng).");
      return;
    }
    setQueue([...queue, val]);
    setLog(`offer("${val}"): Thêm "${val}" vào CUỐI (back) Queue.`);
    setInputValue(String.fromCharCode(inputValue.charCodeAt(0) + 1));
  };

  const handlePoll = () => {
    if (queue.length === 0) {
      setLog("⚠️ Queue rỗng! poll() trả về null.");
      return;
    }
    const polled = queue[0];
    setQueue(queue.slice(1));
    setLog(`poll(): Lấy và xóa phần tử ở ĐẦU (front) là "${polled}".`);
  };

  const handlePeek = () => {
    if (queue.length === 0) {
      setLog("⚠️ Queue rỗng! peek() trả về null.");
      return;
    }
    setLog(`peek(): Xem phần tử đầu Queue (front) = "${queue[0]}". Queue giữ nguyên.`);
  };

  const handleNextStep = () => {
    const next = (activeStep + 1) % stepsExample.length;
    setActiveStep(next);
    stepsExample[next].action();
    setLog(`Step ${next + 1}: ${stepsExample[next].desc}`);
  };

  const handleResetStep = () => {
    setActiveStep(0);
    stepsExample[0].action();
    setLog("Đã reset stepper ví dụ.");
  };

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold font-mono bg-cyan-100 text-cyan-800 border border-cyan-200 px-2.5 py-1 rounded-full uppercase">
            Mục 6.1 - 6.5
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-1">Mô phỏng tương tác Queue (FIFO)</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleResetStep}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Replay ví dụ 6.5
          </button>
          <button
            onClick={handleNextStep}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Bước tiếp ({activeStep + 1}/{stepsExample.length})
          </button>
        </div>
      </div>

      {/* Stepper code bar */}
      <div className="my-4 bg-slate-950 text-slate-200 p-3 rounded-xl border border-slate-800 font-mono text-xs shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="text-[11px] text-slate-400 font-sans ml-1">Stepper ví dụ</span>
          </div>
          <span className="text-slate-400 italic text-[11px] font-sans">{stepsExample[activeStep].desc}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">Code:</span>
          <code className="text-amber-300 font-bold">{stepsExample[activeStep].code}</code>
        </div>
      </div>

      {/* Main Visual Queue Bar */}
      <div className="my-6">
        <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2 font-mono">
          <span className="text-emerald-600 flex items-center gap-1">
            <ArrowRight className="w-4 h-4" /> FRONT (Đầu queue - Lấy ra ở đây)
          </span>
          <span className="text-cyan-600 flex items-center gap-1">
            BACK (Cuối queue - Thêm vào ở đây) <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border-2 border-dashed border-slate-300 min-h-[90px] flex items-center justify-start gap-3 overflow-x-auto">
          {queue.length === 0 ? (
            <div className="w-full text-center text-slate-400 text-sm italic font-mono py-2">
              Queue rỗng (Empty Queue)
            </div>
          ) : (
            queue.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold font-mono text-lg transition-all duration-300 ${
                  idx === 0
                    ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-2 border-emerald-400 scale-105 shadow-md"
                    : idx === queue.length - 1
                    ? "bg-gradient-to-br from-teal-600 to-cyan-600 text-white border-2 border-cyan-400 shadow-md"
                    : "bg-white text-slate-800 border border-slate-300 shadow-sm"
                }`}
              >
                <span>{item}</span>
                <span className={`text-[9px] font-normal mt-0.5 ${idx === 0 || idx === queue.length - 1 ? "text-teal-100 opacity-90" : "text-slate-500"}`}>
                  [{idx}]
                </span>
                {idx === 0 && (
                  <span className="absolute -top-3 bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase shadow-sm">
                    FRONT
                  </span>
                )}
                {idx === queue.length - 1 && queue.length > 1 && (
                  <span className="absolute -bottom-3 bg-cyan-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase shadow-sm">
                    BACK
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Custom Control Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-20 bg-slate-50 border border-slate-300 text-slate-900 font-mono text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-bold"
            maxLength={6}
          />
          <button
            onClick={handleOffer}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-2 rounded-lg transition flex items-center justify-center gap-1 shadow-sm"
          >
            <Plus className="w-4 h-4" /> offer("{inputValue}")
          </button>
        </div>

        <button
          onClick={handlePoll}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-lg transition flex items-center justify-center gap-1 shadow-sm"
        >
          <Trash2 className="w-4 h-4" /> poll() [Xóa Front]
        </button>

        <button
          onClick={handlePeek}
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2 px-4 rounded-lg transition flex items-center justify-center gap-1 shadow-sm"
        >
          <Eye className="w-4 h-4 text-cyan-400" /> peek() [Xem Front]
        </button>
      </div>

      {/* Log Output */}
      <div className="mt-4 bg-slate-950 text-cyan-300 font-mono text-xs rounded-xl p-3 border border-slate-800 flex items-start gap-2 shadow-md">
        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
        <span>{log}</span>
      </div>
    </div>
  );
}

