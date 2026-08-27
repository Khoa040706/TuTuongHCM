"use client";

import React, { useState } from "react";
import { Plus, RotateCcw, ScanLine } from "lucide-react";

export default function PqUnsortedArraySim() {
  const [array, setArray] = useState([35, 90, 20, 85, 45]);
  const [inputVal, setInputVal] = useState(72);
  const [scanningIdx, setScanningIdx] = useState(null);
  const [maxFoundIdx, setMaxFoundIdx] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [log, setLog] = useState("Sẵn sàng! Thử Enqueue để thấy tốc độ O(1) hoặc Dequeue để xem quá trình quét mảng O(n).");

  // Helper delay
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Enqueue in O(1) at the back
  const handleEnqueue = () => {
    if (array.length >= 8) {
      setLog("Mảng đã đầy (tối đa 8 phần tử để quan sát).");
      return;
    }
    const val = Number(inputVal) || 50;
    setArray([...array, val]);
    setLog(`⚡ Enqueue(${val}) thành công! Chỉ cần gán A[size++] = ${val} vào cuối mảng. Chi phí: O(1) tức thì.`);
    setInputVal(Math.floor(Math.random() * 80) + 15);
  };

  // Dequeue in O(n) by scanning and closing the gap
  const handleDequeue = async () => {
    if (isProcessing || array.length === 0) return;
    setIsProcessing(true);
    setLog("1. Bắt đầu quét (scan) toàn bộ mảng từ trái qua phải để tìm phần tử có priority lớn nhất...");

    let maxIdx = 0;
    setMaxFoundIdx(0);

    // Scan loop
    for (let i = 0; i < array.length; i++) {
      setScanningIdx(i);
      setLog(`Quét Index ${i} (Giá trị: ${array[i]})...`);
      await delay(450);

      if (array[i] > array[maxIdx]) {
        maxIdx = i;
        setMaxFoundIdx(i);
        setLog(`Tìm thấy Max tạm thời mới: ${array[i]} tại Index ${i}!`);
        await delay(450);
      }
    }

    const maxVal = array[maxIdx];
    setLog(`2. Đã tìm thấy Max = ${maxVal} tại Index ${maxIdx}. Bắt đầu gỡ bỏ và dời mảng (close the gap)...`);
    await delay(700);

    // Close the gap
    let newArr = [...array];
    newArr.splice(maxIdx, 1);
    setArray(newArr);

    setScanningIdx(null);
    setMaxFoundIdx(null);
    setIsProcessing(false);
    setLog(`✅ Hoàn tất Dequeue() ⟹ Lấy Max = ${maxVal}. Chi phí: O(n) do phải quét n phần tử và dời mảng.`);
  };

  const handleReset = () => {
    setArray([35, 90, 20, 85, 45]);
    setInputVal(72);
    setScanningIdx(null);
    setMaxFoundIdx(null);
    setIsProcessing(false);
    setLog("Đã đặt lại trạng thái ban đầu của Unsorted Array.");
  };

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <ScanLine className="w-3.5 h-3.5 text-amber-700" />
            <span>Chiến Lược 2: Mảng Không Cần Sắp Xếp (Mục 2.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Strategy 2: Unsorted Array (Enqueue O(1), Dequeue O(n))
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Không sắp xếp khi chèn: <code>Enqueue</code> cực nhanh <strong>O(1)</strong>, nhưng <code>Dequeue</code> phải quét toàn bộ mảng <strong>O(n)</strong> để tìm Max và đóng khoảng trống.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-950 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Enqueue: O(1) • Dequeue: O(n)</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="p-4 rounded-2xl bg-white border border-amber-100 shadow-sm flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-mono font-semibold">Giá trị:</span>
            <input
              type="number"
              value={inputVal}
              disabled={isProcessing}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-14 bg-white border border-slate-300 text-amber-900 font-bold font-mono text-center rounded-lg px-1 py-0.5 text-xs focus:outline-none focus:border-amber-500 shadow-inner"
            />
            <button
              onClick={handleEnqueue}
              disabled={isProcessing}
              className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold rounded-lg transition-all flex items-center gap-1 shadow-sm font-mono"
            >
              <Plus className="w-3.5 h-3.5" />
              Enqueue O(1)
            </button>
          </div>

          <button
            onClick={handleDequeue}
            disabled={isProcessing || array.length === 0}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm font-mono"
          >
            <ScanLine className="w-3.5 h-3.5" />
            {isProcessing ? "Đang quét O(n)..." : "Dequeue() O(n)"}
          </button>
        </div>

        <button
          onClick={handleReset}
          disabled={isProcessing}
          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Đặt lại
        </button>
      </div>

      {/* Unsorted Array Visualizer */}
      <div className="p-5 rounded-2xl bg-white border border-amber-100 space-y-4 shadow-sm mb-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
          <span>Unsorted Array A[0..{array.length - 1}] (Số phần tử: {array.length})</span>
          <span className="text-amber-800 font-bold">
            {maxFoundIdx !== null ? `Max hiện tại: A[${maxFoundIdx}] = ${array[maxFoundIdx]}` : "Chưa quét"}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-2">
          {array.map((val, idx) => {
            const isScanning = scanningIdx === idx;
            const isMax = maxFoundIdx === idx;

            return (
              <div
                key={idx}
                className={`flex-1 min-w-[50px] p-3 rounded-xl flex flex-col items-center justify-center border transition-all shadow-sm ${
                  isScanning
                    ? "bg-sky-100 border-sky-400 text-sky-950 scale-110 ring-2 ring-sky-500/40 animate-pulse font-bold"
                    : isMax
                    ? "bg-amber-100 border-amber-400 text-amber-950 ring-2 ring-amber-500/40 font-bold"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <span className="font-mono font-extrabold text-base">{val}</span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">
                  [{idx}] {isScanning ? "🔎" : isMax ? "👑" : ""}
                </span>
              </div>
            );
          })}
        </div>

        {/* Action Log (Terminal Dark Box) */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-300 shadow-md">
          &gt; {log}
        </div>
      </div>

      {/* Slide Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
        <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-sm space-y-1">
          <span className="font-bold text-emerald-950 uppercase font-mono">1. Enqueue chỉ tốn O(1):</span>
          <p className="text-slate-700 leading-relaxed">
            Chỉ cần đưa phần tử mới vào cuối queue (<code>A[size++] = x</code>) mà không cần quan tâm đến thứ tự của mảng.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-sm space-y-1">
          <span className="font-bold text-rose-950 uppercase font-mono">2. Dequeue tốn O(n):</span>
          <p className="text-slate-700 leading-relaxed">
            Bắt buộc phải <strong>quét (scan) qua toàn bộ n phần tử</strong> để tìm ra phần tử có priority lớn nhất và có thể phải <strong>dời mảng để đóng khoảng trống (close the gap)</strong>!
          </p>
        </div>
      </div>
    </div>
  );
}
