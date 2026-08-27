"use client";

import React, { useState } from "react";
import { Plus, Zap, RotateCcw, Layers } from "lucide-react";

export default function PqSortedCircularArraySim() {
  const capacity = 8;
  const [array, setArray] = useState([95, 80, 70, 50, null, null, null, null]);
  const [front, setFront] = useState(0);
  const [size, setSize] = useState(4);
  const [inputVal, setInputVal] = useState(65);
  const [log, setLog] = useState("Sẵn sàng! Thử Enqueue để thấy chi phí dời mảng O(n) hoặc Dequeue để thấy chi phí dời con trỏ O(1).");

  // Enqueue maintaining sorted order (Descending order for Max-PQ)
  const handleEnqueue = () => {
    if (size >= capacity) {
      setLog("Mảng tròn đã đầy (Capacity = 8). Không thể chèn thêm.");
      return;
    }
    const val = Number(inputVal) || 60;
    setLog(`1. Enqueue(${val}): Tìm vị trí chèn trong mảng đã sắp xếp (giống Insertion Sort)...`);

    let newArr = [...array];
    // Find index to insert relative to front
    let insertPos = 0;
    for (let i = 0; i < size; i++) {
      let actualIdx = (front + i) % capacity;
      if (val > newArr[actualIdx]) {
        break;
      }
      insertPos = i + 1;
    }

    // Shift elements from size - 1 down to insertPos
    for (let i = size - 1; i >= insertPos; i--) {
      let fromIdx = (front + i) % capacity;
      let toIdx = (front + i + 1) % capacity;
      newArr[toIdx] = newArr[fromIdx];
    }

    let actualInsertIdx = (front + insertPos) % capacity;
    newArr[actualInsertIdx] = val;

    setArray([...newArr]);
    setSize((prev) => prev + 1);
    setLog(`✅ Enqueue(${val}) thành công tại Index ${actualInsertIdx}! Chi phí: O(n) vì phải tìm vị trí và dịch chuyển các phần tử.`);
    setInputVal(Math.floor(Math.random() * 80) + 15);
  };

  // Dequeue in O(1) by advancing front pointer
  const handleDequeue = () => {
    if (size === 0) {
      setLog("Mảng rỗng, không thể Dequeue.");
      return;
    }
    const maxVal = array[front];
    let newArr = [...array];
    newArr[front] = null; // Visual clear
    const nextFront = (front + 1) % capacity;

    setArray(newArr);
    setFront(nextFront);
    setSize((prev) => prev - 1);
    setLog(`⚡ Dequeue() ⟹ Lấy phần tử lớn nhất: Max = ${maxVal} tại front=${front}. Chỉ cần tăng con trỏ front = (${front} + 1) % 8 = ${nextFront}. Chi phí: O(1) tuyệt đối!`);
  };

  const handleReset = () => {
    setArray([95, 80, 70, 50, null, null, null, null]);
    setFront(0);
    setSize(4);
    setInputVal(65);
    setLog("Đã đặt lại trạng thái ban đầu của Circular Sorted Array.");
  };

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-teal-700" />
            <span>Chiến Lược 1: Mảng Tròn Có Thứ Tự (Mục 2.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
            Strategy 1: Circular Sorted Array (Enqueue O(n), Dequeue O(1))
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Duy trì mảng luôn được sắp xếp: <code>Enqueue</code> tốn <strong>O(n)</strong> để chèn, bù lại <code>Dequeue</code> cực nhanh <strong>O(1)</strong> nhờ dịch con trỏ <code>front</code>.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-teal-300 bg-teal-50 text-teal-950 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Enqueue: O(n) • Dequeue: O(1)</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="p-4 rounded-2xl bg-white border border-teal-100 shadow-sm flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-mono font-semibold">Giá trị:</span>
            <input
              type="number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-14 bg-white border border-slate-300 text-teal-900 font-bold font-mono text-center rounded-lg px-1 py-0.5 text-xs focus:outline-none focus:border-teal-500 shadow-inner"
            />
            <button
              onClick={handleEnqueue}
              className="px-2.5 py-1 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all flex items-center gap-1 shadow-sm font-mono"
            >
              <Plus className="w-3.5 h-3.5" />
              Enqueue O(n)
            </button>
          </div>

          <button
            onClick={handleDequeue}
            disabled={size === 0}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm font-mono"
          >
            <Zap className="w-3.5 h-3.5" />
            Dequeue() O(1)
          </button>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Đặt lại
        </button>
      </div>

      {/* Circular Array Visualizer */}
      <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-4 shadow-sm mb-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
          <span>Circular Array A[0..7] (Sức chứa: 8 | Đang chứa: {size} phần tử)</span>
          <span className="text-teal-800 font-bold">Con trỏ front = Index {front}</span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 py-2">
          {array.map((val, idx) => {
            const isFront = idx === front && val !== null;
            const isEmpty = val === null;

            return (
              <div
                key={idx}
                className={`p-3 rounded-xl flex flex-col items-center justify-center border transition-all shadow-sm ${
                  isFront
                    ? "bg-teal-50 border-teal-400 text-teal-950 scale-105 ring-2 ring-teal-500/30 font-bold"
                    : isEmpty
                    ? "bg-slate-50 border-dashed border-slate-200 text-slate-400"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <span className="font-mono font-extrabold text-base">
                  {val !== null ? val : "Ø"}
                </span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">
                  [{idx}] {isFront ? "← front" : ""}
                </span>
              </div>
            );
          })}
        </div>

        {/* Log callout (Terminal Dark Box) */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 shadow-md">
          &gt; {log}
        </div>
      </div>

      {/* Slide Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
        <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm space-y-1">
          <span className="font-bold text-amber-950 uppercase font-mono">1. Enqueue tốn O(n):</span>
          <p className="text-slate-700 leading-relaxed">
            Phải tìm đúng vị trí chèn (insertion point) và dịch chuyển các phần tử phía sau để bảo toàn tính thứ tự của mảng (tương tự như Insertion Sort).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-sm space-y-1">
          <span className="font-bold text-emerald-950 uppercase font-mono">2. Dequeue chỉ tốn O(1):</span>
          <p className="text-slate-700 leading-relaxed">
            Nhờ cơ chế mảng tròn (Circular), ta <strong>không cần đóng khoảng trống (close the gap)</strong>, chỉ cần dịch con trỏ <code>front = (front + 1) % capacity</code>!
          </p>
        </div>
      </div>
    </div>
  );
}
