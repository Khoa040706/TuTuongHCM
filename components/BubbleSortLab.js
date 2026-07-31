/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  SkipForward, 
  RefreshCw, 
  Sliders, 
  BarChart2, 
  Code2, 
  Info,
  Activity
} from "lucide-react";

// Pure function to generate step-by-step execution trace for Bubble Sort
function generateBubbleSortSteps(initialArray) {
  const steps = [];
  const arr = [...initialArray];
  const n = arr.length;
  const lockedIndices = [];
  let comparisons = 0;
  let swaps = 0;

  // Initial step
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    locked: [],
    status: `Bắt đầu thuật toán Sắp xếp Nổi bọt trên mảng gồm ${n} phần tử.`,
    activeLine: 1,
    comparisons: 0,
    swaps: 0,
    pass: 0,
  });

  for (let i = 0; i < n - 1; i++) {
    const currentPass = i + 1;
    let swappedInThisPass = false;

    // Pass start step
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      locked: [...lockedIndices],
      status: `Bắt đầu Lượt ${currentPass}: Tìm phần tử lớn nhất đẩy về vị trí cuối chưa cố định (index ${n - 1 - i}).`,
      activeLine: 3,
      comparisons,
      swaps,
      pass: currentPass,
    });

    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++;
      // Comparing step
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        locked: [...lockedIndices],
        status: `Lượt ${currentPass}: So sánh A[${j}] = ${arr[j]} và A[${j + 1}] = ${arr[j + 1]}.`,
        activeLine: 5,
        comparisons,
        swaps,
        pass: currentPass,
      });

      if (arr[j] > arr[j + 1]) {
        swaps++;
        swappedInThisPass = true;
        // Swap values
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Swapping step
        steps.push({
          array: [...arr],
          comparing: [j, j + 1],
          swapping: [j, j + 1],
          locked: [...lockedIndices],
          status: `Vì ${temp} > ${arr[j]}, thực hiện hoán đổi A[${j}] và A[${j + 1}].`,
          activeLine: 6,
          comparisons,
          swaps,
          pass: currentPass,
        });
      }
    }

    // Lock the sorted element at end of pass
    lockedIndices.push(n - 1 - i);
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      locked: [...lockedIndices],
      status: `Kết thúc Lượt ${currentPass}: Phần tử ${arr[n - 1 - i]} tại index ${n - 1 - i} đã nằm đúng vị trí cố định!`,
      activeLine: 8,
      comparisons,
      swaps,
      pass: currentPass,
    });

    // Early exit optimization if no swaps happened
    if (!swappedInThisPass && i < n - 2) {
      // Lock all remaining
      for (let k = 0; k < n; k++) {
        if (!lockedIndices.includes(k)) lockedIndices.push(k);
      }
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        locked: [...lockedIndices],
        status: `Không phát sinh hoán đổi nào trong Lượt ${currentPass}. Mảng đã hoàn toàn được sắp xếp! Tối ưu kết thúc sớm.`,
        activeLine: 9,
        comparisons,
        swaps,
        pass: currentPass,
      });
      break;
    }
  }

  // Lock remaining first element
  for (let k = 0; k < n; k++) {
    if (!lockedIndices.includes(k)) lockedIndices.push(k);
  }

  // Final step
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    locked: [...lockedIndices],
    status: `Hoàn tất! Mảng đã được sắp xếp tăng dần hoàn chỉnh sau ${comparisons} lần so sánh và ${swaps} lần hoán đổi.`,
    activeLine: 10,
    comparisons,
    swaps,
    pass: n - 1,
  });

  return steps;
}

const PSEUDOCODE = [
  { line: 1, text: "procedure bubbleSort(A: list of sortable items)" },
  { line: 2, text: "  n = length(A)" },
  { line: 3, text: "  for i = 0 to n - 1 do" },
  { line: 4, text: "    for j = 0 to n - i - 2 do" },
  { line: 5, text: "      if A[j] > A[j+1] then" },
  { line: 6, text: "        swap(A[j], A[j+1])" },
  { line: 7, text: "      end if" },
  { line: 8, text: "    end for" },
  { line: 9, text: "  end for" },
  { line: 10, text: "end procedure" }
];

export default function BubbleSortLab({ onBack }) {
  // Config state
  const [arraySize, setArraySize] = useState(8);
  const [initialArray, setInitialArray] = useState([45, 12, 89, 23, 67, 9, 34, 52]);
  const [manualInput, setManualInput] = useState("45, 12, 89, 23, 67, 9, 34, 52");

  // Playback state
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(800); // ms per step
  const timerRef = useRef(null);

  // Generate steps dynamically
  const steps = useMemo(() => {
    return generateBubbleSortSteps(initialArray);
  }, [initialArray]);

  // Find max value in current array to calculate relative bar height
  const maxValue = useMemo(() => {
    return Math.max(...initialArray, 1);
  }, [initialArray]);

  // Handle Auto Play
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, speed, steps.length]);

  // Controls
  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (currentStep >= steps.length - 1) {
        setCurrentStep(0);
      }
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setIsPlaying(false);
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleSkipToEnd = () => {
    setIsPlaying(false);
    setCurrentStep(steps.length - 1);
  };

  // Generate Random Array
  const handleGenerateRandom = (size = arraySize) => {
    setIsPlaying(false);
    const newArr = Array.from({ length: size }, () => Math.floor(Math.random() * 89) + 10);
    setInitialArray(newArr);
    setManualInput(newArr.join(", "));
    setCurrentStep(0);
  };

  // Apply Manual Custom Input
  const handleApplyManualInput = () => {
    setIsPlaying(false);
    const parsed = manualInput
      .split(/[,;\s]+/)
      .map((val) => parseInt(val.trim(), 10))
      .filter((val) => !isNaN(val) && val > 0 && val <= 999);

    if (parsed.length >= 3 && parsed.length <= 20) {
      setInitialArray(parsed);
      setArraySize(parsed.length);
      setCurrentStep(0);
    } else {
      alert("Vui lòng nhập từ 3 đến 20 số nguyên dương hợp lệ!");
    }
  };

  const stepData = steps[currentStep] || steps[0];
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);

  const activePseudocodeText = useMemo(() => {
    const lineObj = PSEUDOCODE.find((p) => p.line === stepData?.activeLine);
    return lineObj ? lineObj.text.trim() : "";
  }, [stepData?.activeLine]);

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* TẦNG 1: Navigation & Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition-colors flex items-center gap-2 text-xs font-bold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Dashboard</span>
          </button>

          <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

          <div>
            <h1 className="text-xl font-extrabold text-slate-900 font-sans tracking-tight flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-indigo-600" />
              <span>Sắp xếp Nổi bọt</span>
              <span className="text-indigo-600 font-mono text-base">(Bubble Sort)</span>
            </h1>
          </div>
        </div>

        {/* Step counter badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-extrabold font-mono">
            Bước {currentStep + 1} / {steps.length}
          </span>
        </div>
      </div>

      {/* Input Configuration Panel (Full Width) */}
      <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 border-b border-slate-100 pb-3">
          <Sliders className="w-4 h-4 text-cyan-500" />
          <span>Cấu hình mảng dữ liệu đầu vào:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Array Size Slider */}
          <div className="md:col-span-4 flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-600 shrink-0">Kích thước:</span>
            <input
              type="range"
              min="4"
              max="20"
              value={arraySize}
              onChange={(e) => {
                const newSize = parseInt(e.target.value, 10);
                setArraySize(newSize);
                handleGenerateRandom(newSize);
              }}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <span className="text-xs font-extrabold font-mono text-indigo-600 bg-white px-2 py-1 rounded-lg border border-slate-200 shrink-0">
              {arraySize} phần tử
            </span>
          </div>

          {/* Manual Array Input */}
          <div className="md:col-span-5 flex items-center gap-2">
            <input
              type="text"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder="Nhập mảng (VD: 45, 12, 89, 23)"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              onClick={handleApplyManualInput}
              className="px-3.5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
            >
              Áp dụng
            </button>
          </div>

          {/* Random Generator Button */}
          <div className="md:col-span-3">
            <button
              onClick={() => handleGenerateRandom(arraySize)}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Tạo mảng ngẫu nhiên</span>
            </button>
          </div>
        </div>
      </div>

      {/* TẦNG 2: FULL-WIDTH MAIN SIMULATION CANVAS */}
      <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 relative overflow-hidden">
        {/* Active Pseudocode Line Header Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-extrabold font-mono">
            <BarChart2 className="w-4 h-4 text-indigo-600" />
            <span>Thuật toán Sắp xếp Nổi bọt</span>
          </div>

          {/* Active Pseudocode Line Badge in Canvas Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-cyan-300 text-xs font-mono font-bold shadow-xs border border-slate-800 max-w-full truncate">
            <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">Code: <span className="text-white font-extrabold">{activePseudocodeText}</span></span>
          </div>

          <div className="text-xs font-mono font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            Lượt duyệt: <span className="text-indigo-600 font-extrabold">Pass {stepData.pass}</span>
          </div>
        </div>
        <div className="flex items-end justify-center gap-1 sm:gap-2 h-64 w-full pt-6 pb-2 px-1 border-b border-slate-100 overflow-hidden">
          {stepData.array.map((val, idx) => {
            const isComparing = stepData.comparing.includes(idx);
            const isSwapping = stepData.swapping.includes(idx);
            const isLocked = stepData.locked.includes(idx);

            const heightPercent = Math.max(15, Math.round((val / maxValue) * 100));

            let bgStyle = "bg-slate-100 border-slate-300 text-slate-700";
            let badgeStyle = "bg-slate-200 text-slate-700";
            let statusLabel = "";

            if (isLocked) {
              bgStyle = "bg-emerald-500 border-emerald-600 text-white font-black shadow-md shadow-emerald-500/20";
              badgeStyle = "bg-emerald-100 text-emerald-800 font-extrabold";
              statusLabel = "Đã khóa";
            } else if (isSwapping) {
              bgStyle = "bg-amber-500 border-amber-600 text-white font-black animate-pulse shadow-lg shadow-amber-500/30 scale-105";
              badgeStyle = "bg-amber-100 text-amber-800 font-extrabold";
              statusLabel = "Hoán đổi";
            } else if (isComparing) {
              bgStyle = "bg-cyan-500 border-cyan-600 text-white font-black shadow-lg shadow-cyan-500/30 scale-105 ring-4 ring-cyan-500/20";
              badgeStyle = "bg-cyan-100 text-cyan-800 font-extrabold";
              statusLabel = "So sánh";
            }

            return (
              <div key={idx} className="flex-1 max-w-[56px] min-w-[28px] flex flex-col items-center group transition-all duration-300">
                {/* Status Badge Tag */}
                <div className="h-5 mb-1 flex items-center justify-center">
                  {statusLabel && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${badgeStyle} animate-in fade-in`}>
                      {statusLabel}
                    </span>
                  )}
                </div>

                {/* Vertical Bar */}
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full rounded-t-2xl border-2 flex flex-col items-center justify-between py-2 transition-all duration-300 select-none ${bgStyle}`}
                >
                  <span className="text-xs sm:text-sm font-black font-mono leading-none">{val}</span>
                </div>

                {/* Index Label */}
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 mt-2 font-bold">
                  [{idx}]
                </span>
              </div>
            );
          })}
        </div>

        {/* Explanation Status Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-sans">
            {stepData.status}
          </p>
        </div>

        {/* Playback Controls Toolbar */}
        <div className="pt-2 space-y-4 border-t border-slate-100">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            {/* Reset */}
            <button
              onClick={handleReset}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Đặt lại từ đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Bước trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Play / Pause */}
            <button
              onClick={handleTogglePlay}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-cyan-500/25 flex items-center gap-2.5 cursor-pointer transition-all active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Tự động chạy</span>
                </>
              )}
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Bước tiếp theo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Skip to end */}
            <button
              onClick={handleSkipToEnd}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Xem kết quả cuối cùng"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Control Slider */}
          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 shrink-0">Tốc độ:</span>
            <input
              type="range"
              min="200"
              max="2000"
              step="100"
              value={2200 - speed}
              onChange={(e) => setSpeed(2200 - parseInt(e.target.value, 10))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <span className="text-[11px] font-mono font-bold text-slate-600 shrink-0 w-16 text-right">
              {speed}ms
            </span>
          </div>
        </div>
      </div>

      {/* TẦNG 3: BOTTOM SPLIT GRID (STATS + PSEUDOCODE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Stats & Complexity (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Stats Counters & Progress Bar */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">So sánh</div>
                <div className="text-xl font-black text-cyan-600 font-mono mt-0.5">{stepData.comparisons}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hoán đổi</div>
                <div className="text-xl font-black text-amber-600 font-mono mt-0.5">{stepData.swaps}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Lượt duyệt</div>
                <div className="text-xl font-black text-indigo-600 font-mono mt-0.5">{stepData.pass}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2 pt-1">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>Tiến trình hoàn thành</span>
                <span className="font-mono text-indigo-600">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Complexity Reference Card */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
              <Activity className="w-4 h-4 text-indigo-600" />
              <span>Độ phức tạp thuật toán (Complexity):</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50">
                <span className="font-semibold text-slate-600">Tốt nhất (Best):</span>
                <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  O(n)
                </span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50">
                <span className="font-semibold text-slate-600">Trung bình (Avg):</span>
                <span className="font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  O(n²)
                </span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50">
                <span className="font-semibold text-slate-600">Xấu nhất (Worst):</span>
                <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                  O(n²)
                </span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50">
                <span className="font-semibold text-slate-600">Bộ nhớ (Space):</span>
                <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                  O(1)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pseudocode (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 text-slate-100 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <Code2 className="w-4 h-4" />
                  <span>Mã Giả (Pseudocode)</span>
                </div>

                {/* Interactive Controls directly on Pseudocode Header */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer text-xs"
                    title="Đặt lại từ đầu"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 transition-colors cursor-pointer text-xs"
                    title="Bước trước"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleTogglePlay}
                    className="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-extrabold text-xs flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-xs"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3 h-3 fill-white" />
                        <span>Dừng</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-white" />
                        <span>Chạy</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 transition-colors cursor-pointer text-xs"
                    title="Bước tiếp"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Code Lines View */}
              <div className="font-mono text-xs space-y-1 py-1">
                {PSEUDOCODE.map((item) => {
                  const isActive = item.line === stepData.activeLine;
                  return (
                    <div
                      key={item.line}
                      className={`flex items-center px-3 py-1.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-indigo-600/90 text-white font-extrabold shadow-md border-l-4 border-cyan-400 scale-[1.02]"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <span className="w-6 text-[10px] text-slate-500 shrink-0 select-none font-bold">
                        {item.line}
                      </span>
                      <span className="whitespace-pre">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
