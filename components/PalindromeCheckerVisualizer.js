"use client";
import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  CheckCircle2,
  XCircle,
  Layers,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Clock,
  HardDrive,
  Check,
  X,
  ArrowDown,
  Terminal
} from "lucide-react";

export default function PalindromeCheckerVisualizer() {
  const [inputStr, setInputStr] = useState("radar");
  const [stack, setStack] = useState([]);
  const [queue, setQueue] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState("idle"); // 'idle' | 'ready' | 'comparing' | 'passed' | 'failed'
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCompare, setActiveCompare] = useState(null); // { popChar, pollChar, isMatch }

  const suggestions = ["radar", "deed", "aibohphobia", "data", "little"];

  // Chuyển đổi chuỗi đầu vào thành mảng ký tự thường
  const getNormalizedChars = (str) => {
    return str.trim().toLowerCase().split("");
  };

  // Khởi tạo trạng thái Stack và Queue ban đầu
  const initializeSimulation = (strToUse = inputStr) => {
    const raw = strToUse.trim();
    if (!raw) return;

    const chars = getNormalizedChars(raw);

    // Stack: đẩy từng ký tự vào -> phần tử cuối cùng đẩy vào nằm ở đỉnh (index 0)
    // Ví dụ: push('r'), push('a'), push('d'), push('a'), push('r') -> stack [r, a, d, a, r] với TOP là r ở index 0
    const initialStack = [...chars].reverse();

    // Queue: offer từng ký tự vào -> phần tử đầu tiên thêm vào ở vị trí FRONT (index 0)
    // Ví dụ: offer('r'), offer('a'), offer('d'), offer('a'), offer('r') -> queue [r, a, d, a, r] với FRONT là r ở index 0
    const initialQueue = [...chars];

    setStack(initialStack);
    setQueue(initialQueue);
    setCurrentStep(0);
    setHistory([]);
    setActiveCompare(null);
    setStatus("ready");
    setIsPlaying(false);
  };

  // Tự động khởi tạo khi load component
  useEffect(() => {
    initializeSimulation("radar");
  }, []);

  // Thực hiện 1 bước so sánh: pop() từ Stack và poll() từ Queue
  const stepForward = () => {
    if (status === "passed" || status === "failed") {
      initializeSimulation(inputStr);
      return;
    }

    if (stack.length === 0 || queue.length === 0) {
      const allMatched = history.length > 0 && history.every((h) => h.isMatch);
      if (allMatched) {
        setStatus("passed");
      } else {
        setStatus("failed");
      }
      setIsPlaying(false);
      return;
    }

    // Lấy phần tử đỉnh Stack (pop)
    const popChar = stack[0];
    const newStack = stack.slice(1);

    // Lấy phần tử đầu Queue (poll)
    const pollChar = queue[0];
    const newQueue = queue.slice(1);

    const isMatch = popChar === pollChar;
    const stepNum = currentStep + 1;

    const stepRecord = {
      stepNumber: stepNum,
      popChar,
      pollChar,
      isMatch,
      stackRemainingCount: newStack.length,
      queueRemainingCount: newQueue.length
    };

    setActiveCompare({ popChar, pollChar, isMatch });
    setStack(newStack);
    setQueue(newQueue);
    setHistory((prev) => [...prev, stepRecord]);
    setCurrentStep(stepNum);

    if (!isMatch) {
      setStatus("failed");
      setIsPlaying(false);
    } else if (newStack.length === 0 && newQueue.length === 0) {
      setStatus("passed");
      setIsPlaying(false);
    } else {
      setStatus("comparing");
    }
  };

  // Timer cho chế độ tự động chạy
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      if (status === "passed" || status === "failed") {
        setIsPlaying(false);
      } else {
        timer = setTimeout(() => {
          stepForward();
        }, 900);
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPlaying, stack, queue, status]);

  const handleStartCheck = () => {
    const raw = inputStr.trim();
    if (!raw) return;
    const chars = getNormalizedChars(raw);
    setStack([...chars].reverse());
    setQueue([...chars]);
    setCurrentStep(0);
    setHistory([]);
    setActiveCompare(null);
    setStatus("comparing");
    setIsPlaying(true);
  };

  const handlePresetSelect = (word) => {
    setInputStr(word);
    initializeSimulation(word);
  };

  const handleReset = () => {
    initializeSimulation(inputStr);
  };

  const displayString = inputStr.trim() || "radar";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Mục 10</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ứng dụng: Kiểm tra Palindrome (Stack + Queue)
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Mô phỏng thuật toán kiểm tra chuỗi đối xứng bằng cách so sánh từng cặp phần tử giữa Stack (LIFO - Đảo ngược) và Queue (FIFO - Giữ nguyên).
          </p>
        </div>
      </div>

      {/* Input & Control Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 mb-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Input control */}
          <div className="flex-1 space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nhập chuỗi cần kiểm tra:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputStr}
                onChange={(e) => {
                  setInputStr(e.target.value);
                  setStatus("idle");
                }}
                placeholder="Nhập chuỗi..."
                className="flex-1 bg-slate-50 border border-slate-300 text-slate-900 font-mono font-bold rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-base"
              />
              <button
                onClick={handleStartCheck}
                className="whitespace-nowrap px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow transition-all flex items-center gap-2 active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Kiểm tra</span>
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-end gap-2 pt-1 lg:pt-5">
            <button
              onClick={stepForward}
              disabled={status === "passed" || status === "failed"}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-300 shadow-sm disabled:opacity-40 transition flex items-center gap-1.5 text-sm"
            >
              <StepForward className="w-4 h-4 text-indigo-600" />
              <span>Bước tiếp</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={status === "passed" || status === "failed"}
              className={`px-4 py-2.5 font-medium rounded-xl transition flex items-center gap-1.5 text-sm border shadow-sm ${
                isPlaying
                  ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-600"
                  : "bg-teal-600 hover:bg-teal-700 text-white border-teal-600"
              } disabled:opacity-40`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Tự động</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-300 shadow-sm transition flex items-center gap-1.5 text-sm"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Đặt lại</span>
            </button>
          </div>
        </div>

        {/* Suggestions chips */}
        <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-medium mr-1">Gợi ý mẫu:</span>
          {suggestions.map((word) => (
            <button
              key={word}
              onClick={() => handlePresetSelect(word)}
              className={`bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-800 border border-slate-200 px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                inputStr === word
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:text-white border-indigo-600 font-bold shadow-sm"
                  : ""
              }`}
            >
              "{word}"
            </button>
          ))}
        </div>
      </div>

      {/* Two columns layout: Stack vs Queue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Column: Stack (Vertical - LIFO) */}
        <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4 text-indigo-900 flex flex-col justify-between relative shadow-sm min-h-[380px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-100 border border-indigo-200 text-indigo-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Stack (Ngăn xếp)</h3>
                  <p className="text-xs text-indigo-600 font-mono font-semibold">Cơ chế LIFO (Last-In, First-Out)</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-indigo-100 border border-indigo-200 text-indigo-800 rounded text-xs font-mono font-semibold">
                pop()
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Nạp các ký tự theo thứ tự ban đầu. Rút ra (pop) từ <span className="text-indigo-700 font-bold">ĐỈNH (TOP)</span> tạo ra thứ tự <span className="text-indigo-700 font-bold">ĐẢO NGUYỢC</span>.
            </p>
          </div>

          {/* Vertical Stack Container */}
          <div className="flex-1 flex flex-col justify-end items-center my-2 p-4 bg-white rounded-xl border border-indigo-100 relative shadow-inner">
            <div className="absolute top-2 left-3 text-[10px] uppercase tracking-wider text-indigo-700 font-bold flex items-center gap-1">
              <span>Đỉnh (TOP)</span>
              <ArrowDown className="w-3 h-3 text-indigo-600" />
            </div>

            {stack.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm italic">
                Stack rỗng (Đã pop hết phần tử)
              </div>
            ) : (
              <div className="w-full max-w-[200px] flex flex-col gap-2 items-center">
                {stack.map((char, idx) => {
                  const isTop = idx === 0;
                  return (
                    <div
                      key={`stack-${idx}-${char}`}
                      className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-between font-mono text-base transition-all duration-300 ${
                        isTop
                          ? "bg-indigo-600 text-white font-bold ring-2 ring-indigo-400 shadow-md scale-[1.02]"
                          : "bg-white border-2 border-indigo-300 text-indigo-950 font-bold rounded-lg shadow-sm"
                      }`}
                    >
                      <span className={`text-xs font-sans ${isTop ? "text-indigo-100" : "text-indigo-600"}`}>
                        {isTop ? "TOP" : `[${idx}]`}
                      </span>
                      <span className="text-lg font-bold">'{char}'</span>
                      {isTop ? (
                        <span className="text-[10px] px-1.5 py-0.5 bg-indigo-700 text-white rounded font-medium">
                          Kế tiếp
                        </span>
                      ) : (
                        <span className="w-4"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="w-full max-w-[200px] border-b-2 border-indigo-300 mt-2 pt-1 text-center text-[10px] text-indigo-700 uppercase tracking-widest font-mono font-bold">
              ĐÁY STACK (BOTTOM)
            </div>
          </div>
        </div>

        {/* Right Column: Queue (Horizontal - FIFO) */}
        <div className="bg-teal-50/50 border border-teal-200 rounded-xl p-4 text-teal-900 flex flex-col justify-between relative shadow-sm min-h-[380px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-teal-100 border border-teal-200 text-teal-700">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Queue (Hàng đợi)</h3>
                  <p className="text-xs text-teal-600 font-mono font-semibold">Cơ chế FIFO (First-In, First-Out)</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-teal-100 border border-teal-200 text-teal-800 rounded text-xs font-mono font-semibold">
                poll()
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Thêm các ký tự theo thứ tự ban đầu. Lấy ra (poll) từ <span className="text-teal-700 font-bold">ĐẦU (FRONT)</span> giữ nguyên <span className="text-teal-700 font-bold">THỨ TỰ GỐC</span>.
            </p>
          </div>

          {/* Horizontal Queue Container */}
          <div className="flex-1 flex flex-col justify-center items-center my-2 p-4 bg-white rounded-xl border border-teal-100 relative shadow-inner overflow-x-auto">
            <div className="w-full flex items-center justify-between text-[10px] uppercase tracking-wider text-teal-700 font-bold mb-3 px-2">
              <span className="flex items-center gap-1 text-teal-800">
                <span>FRONT (Lấy ra)</span>
                <ArrowRight className="w-3 h-3 text-teal-600" />
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span>REAR (Thêm vào)</span>
              </span>
            </div>

            {queue.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm italic">
                Queue rỗng (Đã poll hết phần tử)
              </div>
            ) : (
              <div className="flex items-center gap-2 max-w-full overflow-x-auto py-2 px-1">
                {queue.map((char, idx) => {
                  const isFront = idx === 0;
                  return (
                    <div
                      key={`queue-${idx}-${char}`}
                      className={`min-w-[64px] h-20 p-2 rounded-xl flex flex-col items-center justify-between font-mono transition-all duration-300 ${
                        isFront
                          ? "bg-teal-600 text-white font-bold ring-2 ring-teal-400 shadow-md scale-105"
                          : "bg-white border-2 border-teal-400 text-teal-950 font-bold rounded-lg shadow-sm"
                      }`}
                    >
                      <span className={`text-[10px] font-sans ${isFront ? "text-teal-100" : "text-teal-600"}`}>
                        {isFront ? "FRONT" : `[${idx}]`}
                      </span>
                      <span className="text-lg font-bold">'{char}'</span>
                      <span className="text-[9px] opacity-80">
                        {isFront ? "poll()" : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="w-full text-center text-[10px] text-teal-700 uppercase tracking-widest font-mono font-bold mt-3">
              HÀNG ĐỜI TRUYỀN THỐNG (FIFO QUEUE)
            </div>
          </div>
        </div>
      </div>

      {/* Stepper Comparison Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 mb-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-600" />
          <span>Tiến trình so sánh theo bước:</span>
        </h3>

        {/* Active step dual display card */}
        {activeCompare ? (
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4 flex flex-col sm:flex-row items-center justify-around gap-4 text-center shadow-sm">
            {/* Stack side */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-indigo-800 font-mono font-semibold">Stack pop():</span>
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xl flex items-center justify-center shadow-md">
                '{activeCompare.popChar}'
              </div>
            </div>

            {/* Match status indicator */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">So sánh</div>
              {activeCompare.isMatch ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold animate-pulse">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>TRÙNG KHỚP (Match)</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold animate-bounce">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>BẤT ĐỒNG (Mismatch)</span>
                </div>
              )}
            </div>

            {/* Queue side */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-teal-800 font-mono font-semibold">Queue poll():</span>
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white font-mono font-bold text-xl flex items-center justify-center shadow-md">
                '{activeCompare.pollChar}'
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl py-6 px-4 text-center text-slate-500 text-xs mb-4">
            Nhấn "Kiểm tra" hoặc "Bước tiếp" để bắt đầu tiến trình so sánh.
          </div>
        )}

        {/* Stepper comparison log box (Dark Terminal Code Block) */}
        <div className="bg-slate-950 text-cyan-300 font-mono text-xs p-4 rounded-xl border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-[11px] text-slate-400 font-sans ml-2 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Terminal Comparison Log
              </span>
            </div>
            <span className="text-[10px] text-slate-500">LIFO vs FIFO Log</span>
          </div>

          {history.length > 0 ? (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {history.map((h, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 px-2 rounded hover:bg-slate-900/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">Step #{h.stepNumber}:</span>
                    <span>
                      <span className="text-indigo-400 font-bold">pop()</span> = <span className="text-white font-bold">'{h.popChar}'</span>
                    </span>
                    <span className="text-slate-600">vs</span>
                    <span>
                      <span className="text-cyan-400 font-bold">poll()</span> = <span className="text-white font-bold">'{h.pollChar}'</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {h.isMatch ? (
                      <span className="text-emerald-400 font-bold inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> MATCH
                      </span>
                    ) : (
                      <span className="text-rose-400 font-bold inline-flex items-center gap-1">
                        <X className="w-3.5 h-3.5 text-rose-400" /> MISMATCH
                      </span>
                    )}
                    <span className="text-slate-500 text-[11px]">
                      (Remaining: {h.stackRemainingCount})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-3 text-slate-500 italic text-center">
              // Sẵn sàng ghi nhận log so sánh từng bước...
            </div>
          )}
        </div>
      </div>

      {/* Final Result Banner */}
      {(status === "passed" || status === "failed") && (
        <div
          className={`p-4 md:p-5 rounded-xl border font-bold shadow-md mb-6 transition-all duration-500 ${
            status === "passed"
              ? "bg-emerald-100 text-emerald-900 border-emerald-300"
              : "bg-rose-100 text-rose-900 border-rose-300"
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`p-2.5 rounded-xl flex-shrink-0 ${
                status === "passed" ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
              }`}
            >
              {status === "passed" ? (
                <CheckCircle2 className="w-7 h-7" />
              ) : (
                <XCircle className="w-7 h-7" />
              )}
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-extrabold tracking-tight mb-1">
                {status === "passed"
                  ? `✅ "${displayString}" LÀ CHUỖI PALINDROME!`
                  : `❌ "${displayString}" KHÔNG PHẢI LÀ CHUỖI PALINDROME!`}
              </h2>
              <p className="text-xs md:text-sm font-normal opacity-90 leading-relaxed mt-1">
                {status === "passed"
                  ? `Tất cả ${history.length} bước so sánh giữa phần tử pop() từ Stack và poll() từ Queue đều trùng khớp hoàn toàn. Khi đọc xuôi hay đọc ngược, chuỗi đều có cùng giá trị.`
                  : `Tại bước #${currentStep}, ký tự lấy ra từ Stack (pop = '${activeCompare?.popChar}') khác với ký tự lấy ra từ Queue (poll = '${activeCompare?.pollChar}'). Chỉ cần 1 cặp ký tự khác biệt, chuỗi không đạt điều kiện Palindrome.`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Callout Warning Section (📌 Cần nhớ) */}
      <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 md:p-5 rounded-xl shadow-sm mb-6">
        <div className="flex items-center gap-2 text-amber-900 mb-2.5">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600" />
          <h3 className="font-bold text-base">📌 Cần nhớ (Ghi chú trọng tâm giáo trình):</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>
              <strong className="text-amber-950">Stack = đảo ngược thứ tự, Queue = giữ nguyên thứ tự</strong> → so sánh từng cặp <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono font-bold">pop()</code> với <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono font-bold">poll()</code>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>
              Chỉ dùng để minh họa cách kết hợp Stack + Queue, <strong className="text-amber-950">KHÔNG PHẢI ứng dụng thực tế điển hình của Queue</strong> (trong thực tế có thể dùng 2 con trỏ left/right trực tiếp trên chuỗi).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>
              <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono font-bold">LinkedList</code> trong Java implement interface <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono font-bold">Queue</code> (và nhiều interface khác: Deque, List, Collection,...).
            </span>
          </li>
        </ul>
      </div>

      {/* Complexity Note Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2.5 bg-indigo-100 border border-indigo-200 rounded-xl text-indigo-700">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Độ phức tạp Thời gian</div>
            <div className="text-base font-bold text-slate-900 font-mono mt-0.5">O(n)</div>
            <div className="text-[11px] text-slate-600">Duyệt n ký tự để nạp và n bước pop/poll để so sánh</div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2.5 bg-teal-100 border border-teal-200 rounded-xl text-teal-700">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Độ phức tạp Không gian</div>
            <div className="text-base font-bold text-slate-900 font-mono mt-0.5">O(n)</div>
            <div className="text-[11px] text-slate-600">Bộ nhớ cho n ký tự trong Stack + n ký tự trong Queue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

