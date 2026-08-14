"use client";

import React, { useState } from "react";
import {
  Repeat,
  Sparkles,
  Layers,
  Play,
  RotateCcw,
  ChevronRight,
  ShieldCheck,
  Cpu,
  ArrowDownRight,
  ArrowUpRight,
  HelpCircle
} from "lucide-react";

export default function DsaRecursionHeroBanner() {
  const [num, setNum] = useState(4);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Pre-calculated trace steps for factorial(4)
  const steps = [
    {
      step: 0,
      phase: "call",
      title: "Gọi factorial(4)",
      action: "PUSH Frame factorial(4) vào Call Stack",
      stack: [{ name: "factorial(4)", val: "chờ (4 * factorial(3))", active: true }],
      log: "► Gọi factorial(4): n = 4 > 1 -> chưa chạm Base Case. Gọi đệ quy factorial(3).",
      isBase: false
    },
    {
      step: 1,
      phase: "call",
      title: "Gọi factorial(3)",
      action: "PUSH Frame factorial(3) vào Call Stack",
      stack: [
        { name: "factorial(3)", val: "chờ (3 * factorial(2))", active: true },
        { name: "factorial(4)", val: "chờ (4 * factorial(3))", active: false }
      ],
      log: "► Gọi factorial(3): n = 3 > 1 -> gọi đệ quy factorial(2). Stack depth = 2.",
      isBase: false
    },
    {
      step: 2,
      phase: "call",
      title: "Gọi factorial(2)",
      action: "PUSH Frame factorial(2) vào Call Stack",
      stack: [
        { name: "factorial(2)", val: "chờ (2 * factorial(1))", active: true },
        { name: "factorial(3)", val: "chờ (3 * factorial(2))", active: false },
        { name: "factorial(4)", val: "chờ (4 * factorial(3))", active: false }
      ],
      log: "► Gọi factorial(2): n = 2 > 1 -> gọi đệ quy factorial(1). Stack depth = 3.",
      isBase: false
    },
    {
      step: 3,
      phase: "base",
      title: "Chạm Base Case: factorial(1)",
      action: "BASE CASE REACHED: factorial(1) = 1",
      stack: [
        { name: "factorial(1)", val: "TRẢ VỀ 1 (BASE CASE)", active: true, base: true },
        { name: "factorial(2)", val: "chờ (2 * factorial(1))", active: false },
        { name: "factorial(3)", val: "chờ (3 * factorial(2))", active: false },
        { name: "factorial(4)", val: "chờ (4 * factorial(3))", active: false }
      ],
      log: "🎯 Chạm BASE CASE: n = 1 <= 1 -> Trả về giá trị 1. Bắt đầu quá trình quay lùi (Unwinding Call Stack)!",
      isBase: true
    },
    {
      step: 4,
      phase: "return",
      title: "POP factorial(1) -> Tính factorial(2)",
      action: "POP Frame factorial(1) & Trả về 1",
      stack: [
        { name: "factorial(2)", val: "2 * 1 = 2 (Đã có kq)", active: true, ret: true },
        { name: "factorial(3)", val: "chờ (3 * factorial(2))", active: false },
        { name: "factorial(4)", val: "chờ (4 * factorial(3))", active: false }
      ],
      log: "◄ Pop factorial(1) = 1 -> Thay vào factorial(2): 2 * 1 = 2. Trả về 2 cho tầng trên.",
      isBase: false
    },
    {
      step: 5,
      phase: "return",
      title: "POP factorial(2) -> Tính factorial(3)",
      action: "POP Frame factorial(2) & Trả về 2",
      stack: [
        { name: "factorial(3)", val: "3 * 2 = 6 (Đã có kq)", active: true, ret: true },
        { name: "factorial(4)", val: "chờ (4 * factorial(3))", active: false }
      ],
      log: "◄ Pop factorial(2) = 2 -> Thay vào factorial(3): 3 * 2 = 6. Trả về 6 cho tầng trên.",
      isBase: false
    },
    {
      step: 6,
      phase: "return",
      title: "POP factorial(3) -> Tính factorial(4)",
      action: "POP Frame factorial(3) & Trả về 6",
      stack: [
        { name: "factorial(4)", val: "4 * 6 = 24 (KẾT QUẢ CUỐI)", active: true, ret: true }
      ],
      log: "🎉 Pop factorial(3) = 6 -> Thay vào factorial(4): 4 * 6 = 24. Kết quả cuối cùng = 24!",
      isBase: false
    }
  ];

  const current = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-violet-50 via-white to-indigo-50/60 border border-violet-200/80 rounded-3xl shadow-xl p-6 md:p-8 text-slate-800 relative overflow-hidden font-sans my-6">
      {/* Soft Background Blur Shapes */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Badge & Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-violet-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-100 text-violet-800 border border-violet-200 uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
              DSA BÀI 4 — THUẬT TOÁN ĐỆ QUY
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold hidden sm:inline">
              Divide & Conquer Concept
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            RECURSION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
              (ĐỆ QUY)
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Kỹ thuật giải thuật kinh điển trong Khoa học Máy tính: <b>Hàm tự gọi lại chính mình</b> với kích thước bài toán nhỏ hơn cho đến khi chạm <b>Điểm dừng (Base Case)</b>.
          </p>
        </div>

        {/* Famous Humor Quote Card */}
        <div className="bg-white/80 backdrop-blur-md border border-violet-200/80 rounded-2xl p-4 md:w-80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-700 mb-1">
            <Repeat className="w-4 h-4 text-violet-600" /> Trích dẫn kinh điển
          </div>
          <p className="text-xs text-slate-700 italic leading-relaxed">
            “To understand recursion, you must first understand recursion.”
          </p>
          <span className="text-[11px] font-mono text-slate-400 mt-2 block text-right">
            — Computer Science Proverb
          </span>
        </div>
      </div>

      {/* 3 Pillar Concept Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 relative z-10">
        <div className="bg-white p-4 rounded-2xl border border-violet-100 shadow-sm hover:border-violet-300 transition-all">
          <div className="flex items-center gap-2 text-violet-700 font-bold text-xs uppercase mb-1">
            <ShieldCheck className="w-4 h-4 text-violet-600" /> 1. Base Case (Điểm dừng)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Điều kiện dừng giải thuật. Nếu thiếu Base Case, chương trình sẽ gọi vô tận dẫn đến lỗi <b>StackOverflowError</b>.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm hover:border-indigo-300 transition-all">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase mb-1">
            <Repeat className="w-4 h-4 text-indigo-600" /> 2. Recursive Step (Bước đệ quy)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Lời gọi lại chính hàm đó nhưng với tham số nhỏ hơn (ví dụ: <code>n - 1</code>) để thu hẹp bài toán về hướng Base Case.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-sm hover:border-purple-300 transition-all">
          <div className="flex items-center gap-2 text-purple-700 font-bold text-xs uppercase mb-1">
            <Layers className="w-4 h-4 text-purple-600" /> 3. Call Stack Unwinding
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sau khi chạm Base Case, các kết quả tạm được <b>pop()</b> trả ngược lên từng tầng hàm phía trên để tính ra giá trị cuối cùng.
          </p>
        </div>
      </div>

      {/* Interactive Call Stack Stepper Section */}
      <div className="bg-white rounded-2xl border border-violet-200/90 shadow-md p-5 md:p-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-5">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-violet-600" />
            <h3 className="text-base md:text-lg font-bold text-slate-900">
              Mô phỏng Trực quan Call Stack: <code className="text-violet-700 font-mono">factorial(4)</code>
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              Lùi lại
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
            >
              Bước tiếp <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Call Stack Visual Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Stack Frames Representation */}
          <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-600 mb-3 pb-2 border-b border-slate-200">
              <span>HỆ THỐNG CALL STACK MEMORY</span>
              <span className="text-violet-600">Depth: {current.stack.length}</span>
            </div>

            {/* Stack Frames Vertical Container */}
            <div className="flex flex-col gap-2 my-auto">
              {current.stack.map((frame, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between font-mono text-xs ${
                    frame.base
                      ? "bg-amber-100 border-amber-400 text-amber-900 shadow-md ring-2 ring-amber-400/50"
                      : frame.ret
                      ? "bg-emerald-100 border-emerald-400 text-emerald-900 shadow-md"
                      : frame.active
                      ? "bg-violet-600 text-white border-violet-700 shadow-md scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-300 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {frame.base ? (
                      <span className="bg-amber-500 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px]">BASE</span>
                    ) : frame.ret ? (
                      <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-violet-300" />
                    )}
                    <span className="font-bold">{frame.name}</span>
                  </div>
                  <span className="text-[11px] font-medium opacity-90">{frame.val}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 font-mono text-center mt-3">
              ▲ Đỉnh Stack (Top Frame) — Thực thi trước
            </div>
          </div>

          {/* Right Column: Console Trace & Explanation */}
          <div className="md:col-span-6 flex flex-col justify-between gap-3">
            {/* Terminal Trace Box */}
            <div className="bg-slate-50/90 text-slate-800 font-mono text-xs p-4 rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  <span className="ml-2 font-bold text-slate-700">Stack Execution Log</span>
                </div>
                <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600 font-semibold">
                  Step {currentStep + 1} / {steps.length}
                </span>
              </div>

              <div className="my-3 font-mono text-xs leading-relaxed text-violet-950 font-bold bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs min-h-[64px] flex items-center">
                {current.log}
              </div>

              <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Giai đoạn:</span>
                <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase border text-[10px] ${
                  current.phase === "base"
                    ? "bg-amber-100 text-amber-900 border-amber-300"
                    : current.phase === "return"
                    ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                    : "bg-violet-100 text-violet-900 border-violet-300"
                }`}>
                  {current.phase === "call" ? "Push Stack (Winding)" : current.phase === "base" ? "Chạm Base Case" : "Pop Stack (Unwinding)"}
                </span>
              </div>
            </div>

            {/* Action Summary Pill */}
            <div className="bg-violet-50 border border-violet-200 p-3 rounded-xl text-xs text-violet-900 font-mono font-bold flex items-center justify-between">
              <span>Hành vi hiện tại:</span>
              <span className="text-violet-700">{current.action}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
