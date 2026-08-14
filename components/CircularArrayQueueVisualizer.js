"use client";
import React, { useState } from "react";
import { Plus, Trash2, RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function CircularArrayQueueVisualizer() {
  const maxSize = 6; // 6 slots
  // Initial state: front = 0, back = 3, elements at 0, 1, 2
  const [arr, setArr] = useState(["A", "B", "C", null, null, null]);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(3);
  const [log, setLog] = useState("Circular Array (Mảng tuần hoàn): Tăng chỉ số dùng (index + 1) % maxSize.");

  // Solution 2 rule: Leave 1 gap
  // Empty: front == back
  // Full: (back + 1) % maxSize == front
  const isEmpty = front === back;
  const isFull = (back + 1) % maxSize === front;

  const handleOffer = () => {
    if (isFull) {
      setLog(`⚠️ FULL! (back+1)%maxSize == front ((${back}+1)%${maxSize} == ${front}). Phải chừa 1 ô trống!`);
      return;
    }
    const nextChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const newArr = [...arr];
    newArr[back] = nextChar;
    const nextBack = (back + 1) % maxSize;

    setArr(newArr);
    setBack(nextBack);
    setLog(`offer("${nextChar}"): arr[${back}] = "${nextChar}"; back = (${back}+1)%${maxSize} = ${nextBack}.`);
  };

  const handlePoll = () => {
    if (isEmpty) {
      setLog(`⚠️ EMPTY! front == back (${front} == ${back}). Queue rỗng!`);
      return;
    }
    const polledVal = arr[front];
    const newArr = [...arr];
    newArr[front] = null;
    const nextFront = (front + 1) % maxSize;

    setArr(newArr);
    setFront(nextFront);
    setLog(`poll(): Lấy arr[${front}]="${polledVal}"; arr[${front}]=null; front = (${front}+1)%${maxSize} = ${nextFront}.`);
  };

  const handleReset = () => {
    setArr(["A", "B", "C", null, null, null]);
    setFront(0);
    setBack(3);
    setLog("Đã khôi phục mảng về trạng thái ban đầu.");
  };

  // Render SVG Circle
  const radius = 90;
  const centerX = 130;
  const centerY = 130;

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold font-mono px-2.5 py-1 rounded-full uppercase">
            Mục 7.1 - 7.3
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-1.5">Trực quan hoá Circular Array (Mảng tuần hoàn)</h3>
        </div>
        <div className="flex items-center gap-2">
          {isEmpty && (
            <span className="text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> TRẠNG THÁI: EMPTY (front == back)
            </span>
          )}
          {isFull && (
            <span className="text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200 px-2.5 py-1 rounded-full flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> TRẠNG THÁI: FULL ((back+1)%max == front)
            </span>
          )}
          {!isEmpty && !isFull && (
            <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> NORMAL (Đang có dữ liệu)
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 items-center">
        {/* Left: Circle SVG Representation */}
        <div className="flex flex-col items-center justify-center bg-slate-50 rounded-xl border border-slate-200 p-4 relative">
          <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible">
            {/* Base Ring */}
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#cbd5e1" strokeWidth="24" className="stroke-slate-300" />

            {/* Slots */}
            {arr.map((val, i) => {
              const angle = (i * 360) / maxSize - 90; // Start top (-90deg)
              const rad = (angle * Math.PI) / 180;
              const x = centerX + radius * Math.cos(rad);
              const y = centerY + radius * Math.sin(rad);

              const isFrontSlot = i === front;
              const isBackSlot = i === back;
              const isGapSlot = isFull && i === back;

              return (
                <g key={i} className="transition-all duration-300">
                  {/* Slot Circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    className={`transition-all duration-300 ${
                      val !== null
                        ? "fill-teal-600 stroke-teal-400 stroke-2"
                        : isGapSlot
                        ? "fill-rose-100 stroke-rose-400 stroke-2"
                        : "fill-white stroke-slate-300 stroke-1"
                    }`}
                  />

                  {/* Slot Value */}
                  <text
                    x={x}
                    y={y + 5}
                    textAnchor="middle"
                    className={`font-mono font-bold text-sm pointer-events-none ${
                      val !== null ? "fill-white" : "fill-slate-400"
                    }`}
                  >
                    {val !== null ? val : `[${i}]`}
                  </text>

                  {/* Pointer Front (Green Arrow/Label outside) */}
                  {isFrontSlot && (
                    <g className="animate-pulse">
                      <text
                        x={centerX + (radius + 38) * Math.cos(rad)}
                        y={centerY + (radius + 38) * Math.sin(rad) + 4}
                        textAnchor="middle"
                        className="fill-emerald-600 font-mono text-[11px] font-extrabold"
                      >
                        FRONT ({i})
                      </text>
                    </g>
                  )}

                  {/* Pointer Back (Indigo Arrow/Label outside) */}
                  {isBackSlot && (
                    <g className="animate-pulse">
                      <text
                        x={centerX + (radius + (isFrontSlot ? 54 : 38)) * Math.cos(rad)}
                        y={centerY + (radius + (isFrontSlot ? 54 : 38)) * Math.sin(rad) + 4}
                        textAnchor="middle"
                        className="fill-indigo-600 font-mono text-[11px] font-extrabold"
                      >
                        BACK ({i})
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
          <span className="text-[11px] font-mono text-slate-500 mt-2">
            Mảng maxSize = {maxSize} (Tối đa lưu {maxSize - 1} phần tử do chừa 1 ô trống)
          </span>
        </div>

        {/* Right: Linear View & State Formulas */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-800 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-mono font-bold text-slate-500 mb-2">
              MẢNG TUẦN HOÀN DẠNG THẲNG (INDEX 0..5):
            </div>
            <div className="grid grid-cols-6 gap-1.5 font-mono text-center">
              {arr.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-full py-2 rounded-lg font-bold text-sm border transition-all ${
                      val !== null
                        ? "bg-teal-50 border-teal-300 text-teal-700"
                        : "bg-slate-100 border-slate-200 text-slate-400"
                    }`}
                  >
                    {val !== null ? val : "null"}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1">[{idx}]</span>
                  <div className="flex flex-col gap-0.5 mt-1 text-[9px] font-extrabold uppercase">
                    {idx === front && <span className="bg-emerald-100 text-emerald-800 px-1 rounded border border-emerald-200">FRONT</span>}
                    {idx === back && <span className="bg-indigo-100 text-indigo-800 px-1 rounded border border-indigo-200">BACK</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulas Box */}
          <div className="bg-slate-950 text-cyan-300 font-mono text-xs p-3 rounded-xl border border-slate-800 space-y-2 shadow-inner">
            <div className="flex items-center gap-1.5 pb-2 mb-1 border-b border-slate-800 text-slate-400 font-bold">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-1 text-slate-300">📌 CÔNG THỨC & TRẠNG THÁI HIỆN TẠI (Solution 2):</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Công thức tăng chỉ số:</span>
              <span className="text-cyan-400 font-bold">(index + 1) % maxSize</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Trạng thái Empty:</span>
              <span className={isEmpty ? "text-amber-400 font-bold" : "text-slate-500"}>
                front == back ({front} == {back}) &rarr; {isEmpty ? "TRUE" : "FALSE"}
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Trạng thái Full:</span>
              <span className={isFull ? "text-rose-400 font-bold" : "text-slate-500"}>
                (back + 1) % {maxSize} == front ({((back + 1) % maxSize)} == {front}) &rarr; {isFull ? "TRUE" : "FALSE"}
              </span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleOffer}
              disabled={isFull}
              className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold py-2.5 rounded-lg transition flex items-center justify-center gap-1 shadow-sm"
            >
              <Plus className="w-4 h-4" /> offer() [Thêm vào Back]
            </button>
            <button
              onClick={handlePoll}
              disabled={isEmpty}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold py-2.5 rounded-lg transition flex items-center justify-center gap-1 shadow-sm"
            >
              <Trash2 className="w-4 h-4" /> poll() [Xóa từ Front]
            </button>
            <button
              onClick={handleReset}
              className="px-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg transition shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Log Output */}
      <div className="bg-slate-950 text-cyan-300 font-mono text-xs rounded-xl p-3 border border-slate-800 flex items-start gap-2 shadow-inner">
        <span className="text-cyan-400 font-bold">💡 Log:</span>
        <span className="flex-1">{log}</span>
      </div>
    </div>
  );
}

