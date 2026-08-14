"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Play, Pause, RotateCcw, ChevronRight, ChevronLeft, ArrowDown, ArrowUp, Layers } from "lucide-react";

export default function RecursionCallStackSimulator() {
  const [selectedFunc, setSelectedFunc] = useState("fact");
  const [paramN, setParamN] = useState(5);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Pre-generate steps for fact(5)
  const fact5Steps = [
    {
      action: "call",
      title: "Gọi fact(5)",
      desc: "n = 5 > 0 -> PUSH Frame fact(5). Cần đợi 5 * fact(4).",
      stack: [{ id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }],
      log: "► PUSH fact(5) | Call Stack size: 1"
    },
    {
      action: "call",
      title: "Gọi fact(4)",
      desc: "n = 4 > 0 -> PUSH Frame fact(4). Cần đợi 4 * fact(3).",
      stack: [
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "► PUSH fact(4) | Call Stack size: 2"
    },
    {
      action: "call",
      title: "Gọi fact(3)",
      desc: "n = 3 > 0 -> PUSH Frame fact(3). Cần đợi 3 * fact(2).",
      stack: [
        { id: 3, label: "fact(3)", detail: "3 * fact(2)", state: "waiting" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "► PUSH fact(3) | Call Stack size: 3"
    },
    {
      action: "call",
      title: "Gọi fact(2)",
      desc: "n = 2 > 0 -> PUSH Frame fact(2). Cần đợi 2 * fact(1).",
      stack: [
        { id: 2, label: "fact(2)", detail: "2 * fact(1)", state: "waiting" },
        { id: 3, label: "fact(3)", detail: "3 * fact(2)", state: "waiting" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "► PUSH fact(2) | Call Stack size: 4"
    },
    {
      action: "call",
      title: "Gọi fact(1)",
      desc: "n = 1 > 0 -> PUSH Frame fact(1). Cần đợi 1 * fact(0).",
      stack: [
        { id: 1, label: "fact(1)", detail: "1 * fact(0)", state: "waiting" },
        { id: 2, label: "fact(2)", detail: "2 * fact(1)", state: "waiting" },
        { id: 3, label: "fact(3)", detail: "3 * fact(2)", state: "waiting" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "► PUSH fact(1) | Call Stack size: 5"
    },
    {
      action: "base",
      title: "Chạm Base Case: fact(0)",
      desc: "n = 0 == 0 -> BASE CASE REACHED! Trả về ngay giá trị 1 không đệ quy thêm.",
      stack: [
        { id: 0, label: "fact(0)", detail: "BASE CASE = 1", state: "base" },
        { id: 1, label: "fact(1)", detail: "1 * fact(0)", state: "waiting" },
        { id: 2, label: "fact(2)", detail: "2 * fact(1)", state: "waiting" },
        { id: 3, label: "fact(3)", detail: "3 * fact(2)", state: "waiting" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "🎯 BASE CASE: fact(0) trả về 1. Bắt đầu UNWINDING (Thu hồi Stack)!"
    },
    {
      action: "return",
      title: "POP fact(0) & Tính fact(1)",
      desc: "fact(0) trả về 1 -> fact(1) = 1 * 1 = 1. POP Frame fact(1).",
      stack: [
        { id: 1, label: "fact(1)", detail: "1 * 1 = 1 (Trả về 1)", state: "return" },
        { id: 2, label: "fact(2)", detail: "2 * fact(1)", state: "waiting" },
        { id: 3, label: "fact(3)", detail: "3 * fact(2)", state: "waiting" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "◄ POP fact(0) -> fact(1) hoàn thành với kết quả = 1"
    },
    {
      action: "return",
      title: "POP fact(1) & Tính fact(2)",
      desc: "fact(1) trả về 1 -> fact(2) = 2 * 1 = 2. POP Frame fact(2).",
      stack: [
        { id: 2, label: "fact(2)", detail: "2 * 1 = 2 (Trả về 2)", state: "return" },
        { id: 3, label: "fact(3)", detail: "3 * fact(2)", state: "waiting" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "◄ POP fact(1) -> fact(2) hoàn thành với kết quả = 2"
    },
    {
      action: "return",
      title: "POP fact(2) & Tính fact(3)",
      desc: "fact(2) trả về 2 -> fact(3) = 3 * 2 = 6. POP Frame fact(3).",
      stack: [
        { id: 3, label: "fact(3)", detail: "3 * 2 = 6 (Trả về 6)", state: "return" },
        { id: 4, label: "fact(4)", detail: "4 * fact(3)", state: "waiting" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "◄ POP fact(2) -> fact(3) hoàn thành với kết quả = 6"
    },
    {
      action: "return",
      title: "POP fact(3) & Tính fact(4)",
      desc: "fact(3) trả về 6 -> fact(4) = 4 * 6 = 24. POP Frame fact(4).",
      stack: [
        { id: 4, label: "fact(4)", detail: "4 * 6 = 24 (Trả về 24)", state: "return" },
        { id: 5, label: "fact(5)", detail: "5 * fact(4)", state: "waiting" }
      ],
      log: "◄ POP fact(3) -> fact(4) hoàn thành với kết quả = 24"
    },
    {
      action: "return",
      title: "POP fact(4) & Tính fact(5) KẾT QUẢ CUỐI",
      desc: "fact(4) trả về 24 -> fact(5) = 5 * 24 = 120. Hoàn tất toàn bộ Call Stack!",
      stack: [
        { id: 5, label: "fact(5)", detail: "5 * 24 = 120 (KẾT QUẢ)", state: "return" }
      ],
      log: "🎉 POP fact(4) -> fact(5) = 120! Stack giải phóng hoàn toàn."
    }
  ];

  const steps = fact5Steps;
  const current = steps[currentStepIndex];

  // Auto play effect
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 1600);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200">
            Mục 2.2 — Trực quan hóa Đệ quy
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Bộ Mô phỏng Cơ chế Hoạt động Call Stack (Push / Pop)
          </h3>
          <p className="text-xs text-slate-500">
            Mỗi lần gọi đệ quy tạo ra một Stack Frame bản sao (copy) chứa biến cục bộ, sau đó thu hồi khi trả giá trị
          </p>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <button
            onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentStepIndex === 0}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition cursor-pointer"
            title="Lùi 1 bước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs font-bold transition shadow-xs cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? "Tạm dừng" : "Tự động"}
          </button>
          <button
            onClick={() => setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStepIndex === steps.length - 1}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition cursor-pointer"
            title="Tiến 1 bước"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(false);
            }}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
            title="Đặt lại từ đầu"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Visualizer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Stack Frames Bucket */}
        <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between min-h-[300px]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs font-mono font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-600" />
              BỘ NHỚ HỆ THỐNG CALL STACK
            </span>
            <span className="text-violet-600 font-mono">Độ sâu: {current.stack.length}</span>
          </div>

          {/* Vertical Stack Frame Visualizer */}
          <div className="flex flex-col-reverse gap-2 my-auto py-3">
            {current.stack.map((frame, idx) => (
              <div
                key={frame.id}
                className={`p-3 rounded-xl border transition-all duration-300 font-mono text-xs flex items-center justify-between shadow-xs ${
                  frame.state === "base"
                    ? "bg-amber-100 border-amber-400 text-amber-900 ring-2 ring-amber-400/50"
                    : frame.state === "return"
                    ? "bg-emerald-100 border-emerald-400 text-emerald-900 ring-2 ring-emerald-400/50"
                    : idx === 0
                    ? "bg-violet-600 text-white border-violet-700 shadow-md scale-[1.02]"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {frame.state === "base" ? (
                    <span className="bg-amber-500 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px]">
                      BASE
                    </span>
                  ) : frame.state === "return" ? (
                    <ArrowUp className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <ArrowDown className="w-3.5 h-3.5 opacity-70" />
                  )}
                  <strong className="font-bold">{frame.label}</strong>
                </div>
                <span className="text-[11px] opacity-90">{frame.detail}</span>
              </div>
            ))}
          </div>

          <div className="text-center text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-200">
            ▲ Đỉnh Stack (Top) — Thực thi &amp; Giải phóng trước
          </div>
        </div>

        {/* Right Column: Step Description & Console */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          <div className="bg-slate-50/90 text-slate-800 font-mono text-xs p-4 rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-2 font-bold text-slate-700">Call Stack Trace Log</span>
              </div>
              <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600 font-semibold">
                Bước {currentStepIndex + 1} / {steps.length}
              </span>
            </div>

            <div className="my-3 space-y-2.5">
              <div className="text-violet-700 font-bold text-sm font-sans">{current.title}</div>
              <div className="text-slate-600 font-sans text-xs leading-relaxed">{current.desc}</div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 text-teal-900 font-mono text-xs font-bold shadow-xs">
                {current.log}
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 font-medium">Giai đoạn:</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase border text-[10px] ${
                current.action === "base"
                  ? "bg-amber-100 text-amber-900 border-amber-300"
                  : current.action === "return"
                  ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                  : "bg-violet-100 text-violet-900 border-violet-300"
              }`}>
                {current.action === "call" ? "Push Stack (Winding)" : current.action === "base" ? "Base Case" : "Pop Stack (Unwinding)"}
              </span>
            </div>
          </div>

          <div className="bg-violet-50/70 border border-violet-200 p-3.5 rounded-xl text-xs text-violet-950 font-mono">
            <strong>Nguyên lý giáo trình: </strong>
            <code>push()</code> khi có lời gọi đệ quy mới; <code>pop()</code> khi trả giá trị từ lời gọi về nơi gọi (caller).
          </div>
        </div>
      </div>
    </div>
  );
}
