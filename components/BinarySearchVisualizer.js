"use client";

import React, { useState } from "react";
import { Search, RotateCcw, ChevronRight, ChevronLeft, CheckCircle2, XCircle, Zap, ShieldCheck } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function BinarySearchVisualizer() {
  const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const [target, setTarget] = useState(23);
  const [inputVal, setInputVal] = useState("23");
  const [currentStep, setCurrentStep] = useState(0);

  // Generate binary search trace steps
  const generateSteps = (arr, x) => {
    const steps = [];
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midVal = arr[mid];

      if (midVal === x) {
        steps.push({
          low,
          high,
          mid,
          found: true,
          desc: `So sánh a[${mid}] = ${midVal} == ${x} ➔ TÌM THẤY tại chỉ số index = ${mid}!`,
          log: `Base case 2: a[${mid}] == ${x} -> Trả về index ${mid}`
        });
        break;
      } else if (x > midVal) {
        steps.push({
          low,
          high,
          mid,
          found: false,
          desc: `${x} > a[${mid}] (${midVal}) ➔ Loại bỏ nửa trái. Đệ quy với low = mid + 1 (${mid + 1}).`,
          log: `x > a[mid] -> return binarySearch(a, ${x}, ${mid + 1}, ${high})`
        });
        low = mid + 1;
      } else {
        steps.push({
          low,
          high,
          mid,
          found: false,
          desc: `${x} < a[${mid}] (${midVal}) ➔ Loại bỏ nửa phải. Đệ quy với high = mid - 1 (${mid - 1}).`,
          log: `x < a[mid] -> return binarySearch(a, ${x}, ${low}, ${mid - 1})`
        });
        high = mid - 1;
      }
    }

    if (low > high) {
      steps.push({
        low,
        high,
        mid: -1,
        notFound: true,
        desc: `low (${low}) > high (${high}) ➔ Không tìm thấy phần tử ${x} trong mảng!`,
        log: `Base case 1: low > high -> ném ngoại lệ ItemNotFound("Not Found")`
      });
    }

    return steps;
  };

  const steps = generateSteps(array, target);
  const current = steps[Math.min(currentStep, steps.length - 1)] || steps[0];

  const handleSearch = (val) => {
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setTarget(num);
      setCurrentStep(0);
    }
  };

  const bsCode = `public static int binarySearch(int[] a, int x, int low, int high) 
        throws ItemNotFound {
    if (low > high) // Base case 1: không tìm thấy
        throw new ItemNotFound("Not Found");

    int mid = (low + high) / 2;

    if (x > a[mid])
        return binarySearch(a, x, mid + 1, high);
    else if (x < a[mid])
        return binarySearch(a, x, low, mid - 1);
    else
        return mid; // Base case 2: tìm thấy tại mid
}

// Auxiliary Function (Hàm phụ trợ ẩn tham số low, high):
public static boolean binarySearch(int[] a, int x) {
    return binarySearch(a, x, 0, a.length - 1);
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Example 8 — Thuật toán O(log n)
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tìm Kiếm Nhị Phân Đệ Quy (Binary Search)
          </h3>
          <p className="text-xs text-slate-500">
            Mỗi bước đệ quy thu hẹp không gian tìm kiếm đi một nửa trên mảng đã sắp xếp
          </p>
        </div>

        {/* Target Input & Quick Select Buttons */}
        <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
          <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1.5 rounded-xl border border-slate-200">
            <span className="text-xs font-mono text-slate-500">Tìm x:</span>
            <input
              type="number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(inputVal)}
              className="w-14 bg-white border border-slate-300 rounded px-1.5 py-0.5 font-mono text-xs font-bold text-slate-900"
            />
            <button
              onClick={() => handleSearch(inputVal)}
              className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold cursor-pointer"
            >
              Tìm
            </button>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono">
            {[23, 5, 72, 99].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInputVal(String(q));
                  handleSearch(q);
                }}
                className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
              >
                x={q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Array Stage */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
          <span>MẢNG ĐÃ SẮP XẾP A (SIZE = 10)</span>
          <span className="text-emerald-700 font-bold">Target x = {target}</span>
        </div>

        {/* Array Bars */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {array.map((num, idx) => {
            const inRange = idx >= current.low && idx <= current.high;
            const isMid = idx === current.mid;
            const isFound = current.found && isMid;

            return (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-slate-400 mb-1">[{idx}]</span>
                <div
                  className={`w-full h-14 rounded-xl border flex flex-col items-center justify-center font-mono font-bold transition-all duration-300 shadow-xs ${
                    isFound
                      ? "bg-emerald-500 text-white border-emerald-600 scale-110 shadow-lg ring-4 ring-emerald-300"
                      : isMid
                      ? "bg-amber-400 text-slate-950 border-amber-500 scale-105 shadow-md ring-2 ring-amber-300"
                      : inRange
                      ? "bg-white text-slate-800 border-slate-300"
                      : "bg-slate-200/60 text-slate-400 border-dashed border-slate-300 opacity-40"
                  }`}
                >
                  <span className="text-sm">{num}</span>
                  {idx === current.low && inRange && (
                    <span className="text-[9px] text-indigo-700 font-bold">low</span>
                  )}
                  {idx === current.high && inRange && idx !== current.low && (
                    <span className="text-[9px] text-rose-700 font-bold">high</span>
                  )}
                </div>
                {isMid && (
                  <span className="text-[10px] font-mono font-bold text-amber-600 mt-1">▲ mid</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stepper Controls & Action Log */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
        <div className="md:col-span-8 bg-slate-50/90 text-slate-800 font-mono text-xs p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-1 font-bold text-slate-700">Binary Search Execution Trace</span>
            </div>
            <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600 font-semibold">
              Bước {currentStep + 1} / {steps.length}
            </span>
          </div>

          <div className="my-3 space-y-2">
            <div className="text-sm font-bold text-emerald-900 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs font-sans">
              {current.desc}
            </div>
            <div className="text-slate-600 font-mono text-xs px-1">
              {current.log}
            </div>
          </div>

          <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Time Complexity:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
              O(log n)
            </span>
          </div>
        </div>

        {/* Stepper Controls */}
        <div className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-xs font-mono font-bold text-slate-600">ĐIỀU KHIỂN TỪNG BƯỚC</span>

          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 text-slate-700 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-xs font-bold transition shadow-xs cursor-pointer flex items-center justify-center gap-1"
            >
              Bước tiếp <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentStep(0)}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Code Display */}
      <pre className="bg-slate-950 text-slate-200 font-mono text-xs p-4 rounded-2xl border border-slate-800 shadow-md overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(bsCode) }} />
      </pre>
    </div>
  );
}
