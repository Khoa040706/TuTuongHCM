"use client";
import React, { useState } from "react";
import { Layers, ArrowRight, Layers2, ArrowDown, ArrowUp, Zap, Clock, ShieldCheck, Sparkles, Play, RefreshCw } from "lucide-react";

export default function DsaStackQueueHeroBanner() {
  // Mini interactive state for Stack preview
  const [stackItems, setStackItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [stackLog, setStackLog] = useState("Stack (LIFO): Thao tác đẩy (push) & lấy (pop) đều diễn ra ở ĐẦU CHỒNG (TOP).");

  // Mini interactive state for Queue preview
  const [queueItems, setQueueItems] = useState(["Person A", "Person B", "Person C"]);
  const [queueLog, setQueueLog] = useState("Queue (FIFO): Vào ở CUỐI HÀNG (REAR) và Ra ở ĐẦU HÀNG (FRONT).");

  // Stack Push
  const handleStackPush = () => {
    if (stackItems.length >= 5) {
      setStackLog("⚠️ Stack đầy (Stack Overflow simulation)");
      return;
    }
    const nextVal = `Item ${stackItems.length + 1}`;
    setStackItems([nextVal, ...stackItems]);
    setStackLog(`push("${nextVal}"): Phần tử mới nằm ngay trên TOP của Stack!`);
  };

  // Stack Pop
  const handleStackPop = () => {
    if (stackItems.length === 0) {
      setStackLog("⚠️ Stack rỗng (Stack Underflow simulation)");
      return;
    }
    const popped = stackItems[0];
    setStackItems(stackItems.slice(1));
    setStackLog(`pop(): Phần tử vừa bị lấy ra khỏi TOP là "${popped}".`);
  };

  // Queue Enqueue
  const handleQueueEnqueue = () => {
    if (queueItems.length >= 5) {
      setQueueLog("⚠️ Queue đầy (Queue Overflow simulation)");
      return;
    }
    const names = ["Person D", "Person E", "Person F", "Person G"];
    const nextVal = names[queueItems.length % names.length];
    setQueueItems([...queueItems, nextVal]);
    setQueueLog(`enqueue("${nextVal}"): Thêm vào CUỐI hàng đợi (REAR).`);
  };

  // Queue Dequeue
  const handleQueueDequeue = () => {
    if (queueItems.length === 0) {
      setQueueLog("⚠️ Queue rỗng (Queue Underflow simulation)");
      return;
    }
    const dequeued = queueItems[0];
    setQueueItems(queueItems.slice(1));
    setQueueLog(`dequeue(): Phần tử đầu hàng "${dequeued}" ra khỏi Queue (FRONT).`);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-teal-50 border border-indigo-100 rounded-3xl shadow-xl p-6 md:p-8 text-slate-800 relative overflow-hidden font-sans my-6 w-full">
      {/* Glow background pastel accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-100 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-mono font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                DSA BÀI 3 — ADT CHUYÊN BIỆT
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Linear Data Structures
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
              STACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">&amp;</span> QUEUE
            </h1>
            <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Hai cấu trúc dữ liệu trừu tượng quan trọng bậc nhất trong khoa học máy tính: Nguyên lý thao tác giới hạn <strong className="text-indigo-600 font-bold">LIFO (Stack)</strong> và <strong className="text-teal-600 font-bold">FIFO (Queue)</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <div className="px-4 py-3 bg-indigo-50/80 border border-indigo-200/80 rounded-2xl text-center backdrop-blur-md shadow-xs">
              <span className="text-[11px] text-indigo-700 font-mono uppercase tracking-wider block font-semibold">Stack Operation</span>
              <span className="text-base font-bold text-indigo-900 font-mono">LIFO O(1)</span>
            </div>
            <div className="px-4 py-3 bg-teal-50/80 border border-teal-200/80 rounded-2xl text-center backdrop-blur-md shadow-xs">
              <span className="text-[11px] text-teal-700 font-mono uppercase tracking-wider block font-semibold">Queue Operation</span>
              <span className="text-base font-bold text-teal-900 font-mono">FIFO O(1)</span>
            </div>
          </div>
        </div>

        {/* Dual Interactive Micro-Previews: STACK vs QUEUE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* STACK CARD */}
          <div className="bg-white border border-indigo-200/80 rounded-2xl shadow-sm p-4 text-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-indigo-100/80 rounded-xl border border-indigo-200 text-indigo-600">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900">1. STACK (Ngăn xếp)</h3>
                    <span className="text-xs text-indigo-600 font-mono font-medium">LIFO (Last-In, First-Out)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleStackPush}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    + push()
                  </button>
                  <button
                    onClick={handleStackPop}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    - pop()
                  </button>
                </div>
              </div>

              {/* Vertical Stack Visual Container */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 min-h-[160px] flex flex-col justify-end items-center gap-2 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100/90 px-2 py-0.5 rounded-md border border-indigo-200 shadow-xs">
                  TOP &uarr;
                </div>
                {stackItems.length === 0 ? (
                  <span className="text-xs text-slate-400 font-mono my-auto">Stack empty</span>
                ) : (
                  stackItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`w-full max-w-xs py-2 px-4 rounded-xl font-mono text-xs font-bold text-center transition-all ${
                        idx === 0
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md ring-2 ring-indigo-400/40"
                          : "bg-white border border-slate-200 text-slate-700 shadow-xs"
                      }`}
                    >
                      {item} {idx === 0 && "(TOP)"}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Output log bar */}
            <div className="mt-4 bg-slate-900 text-teal-300 font-mono text-xs rounded-xl p-3 border border-slate-800 shadow-inner flex items-center gap-2">
              <span className="text-indigo-400 font-bold shrink-0">Log:</span>
              <span className="text-slate-200 font-normal">{stackLog}</span>
            </div>
          </div>

          {/* QUEUE CARD */}
          <div className="bg-white border border-indigo-200/80 rounded-2xl shadow-sm p-4 text-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-teal-100/80 rounded-xl border border-teal-200 text-teal-600">
                    <Layers2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900">2. QUEUE (Hàng đợi)</h3>
                    <span className="text-xs text-teal-600 font-mono font-medium">FIFO (First-In, First-Out)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleQueueEnqueue}
                    className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    + enqueue()
                  </button>
                  <button
                    onClick={handleQueueDequeue}
                    className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    - dequeue()
                  </button>
                </div>
              </div>

              {/* Horizontal Queue Visual Container */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 min-h-[160px] flex items-center justify-center gap-2 relative overflow-x-auto">
                <div className="absolute top-2 left-2 text-[10px] font-mono font-bold text-teal-700 bg-teal-100/90 px-2 py-0.5 rounded-md border border-teal-200 shadow-xs">
                  FRONT &larr;
                </div>
                <div className="absolute top-2 right-2 text-[10px] font-mono font-bold text-teal-700 bg-teal-100/90 px-2 py-0.5 rounded-md border border-teal-200 shadow-xs">
                  &larr; REAR
                </div>
                {queueItems.length === 0 ? (
                  <span className="text-xs text-slate-400 font-mono my-auto">Queue empty</span>
                ) : (
                  queueItems.map((item, idx) => {
                    const isFront = idx === 0;
                    const isRear = idx === queueItems.length - 1;
                    return (
                      <div
                        key={idx}
                        className={`px-3.5 py-3 rounded-xl font-mono text-xs font-bold text-center shrink-0 border transition-all ${
                          isFront
                            ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-teal-500 shadow-md ring-2 ring-teal-400/40"
                            : isRear
                            ? "bg-white border-2 border-teal-500 text-teal-800 shadow-xs"
                            : "bg-white border border-slate-200 text-slate-700 shadow-xs"
                        }`}
                      >
                        <div>{item}</div>
                        <div className="text-[9px] opacity-85 mt-0.5 font-semibold">
                          {isFront ? "[FRONT]" : isRear ? "[REAR]" : `#${idx}`}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Output log bar */}
            <div className="mt-4 bg-slate-900 text-teal-300 font-mono text-xs rounded-xl p-3 border border-slate-800 shadow-inner flex items-center gap-2">
              <span className="text-teal-400 font-bold shrink-0">Log:</span>
              <span className="text-slate-200 font-normal">{queueLog}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Summary Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Thao tác Giới hạn</span>
              <span className="text-[11px] text-slate-500">Không truy cập ngẫu nhiên</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <Zap className="w-5 h-5 text-teal-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Hiệu năng O(1)</span>
              <span className="text-[11px] text-slate-500">Push/Pop/Enqueue/Dequeue</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">2 Cách cài đặt</span>
              <span className="text-[11px] text-slate-500">Array hoặc Linked List</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-teal-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Ứng dụng Thực tế</span>
              <span className="text-[11px] text-slate-500">Undo, Call Stack, BFS, Print</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

