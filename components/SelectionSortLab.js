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
  Crown,
  Sparkles,
  Zap,
  Flame,
  HelpCircle,
  Clock,
  CheckCircle2,
  XCircle,
  Layers,
  ArrowUpDown,
  Shuffle
} from "lucide-react";

// Pure function: Step generation for Selection Sort
function generateSelectionSortSteps(initialArray) {
  const steps = [];
  const arr = [...initialArray];
  const n = arr.length;
  const lockedIndices = [];
  let comparisons = 0;
  let swaps = 0;
  let minUpdates = 0;
  
  // Heatmap tracker: count of comparisons per index
  const heatmap = {};
  for (let idx = 0; idx < n; idx++) heatmap[idx] = 0;

  const swapHistory = [];

  // Helper for generating prediction question
  const createPredictQuestion = (startIndex, currentArr) => {
    const unsortedSlice = currentArr.slice(startIndex);
    const minVal = Math.min(...unsortedSlice);
    // Unique options
    const optionsSet = new Set([minVal]);
    for (let val of unsortedSlice) {
      optionsSet.add(val);
      if (optionsSet.size >= 4) break;
    }
    // Fill up if fewer than 4
    let dummy = 1;
    while (optionsSet.size < 4) {
      if (!optionsSet.has(minVal + dummy)) optionsSet.add(minVal + dummy);
      dummy++;
    }
    const options = Array.from(optionsSet).sort(() => Math.random() - 0.5);
    return {
      minVal,
      options,
      correctIdx: options.indexOf(minVal),
      rangeText: `[${startIndex} .. ${n - 1}]`
    };
  };

  // Step 0: Initial State
  steps.push({
    array: [...arr],
    i: -1,
    j: -1,
    minIdx: -1,
    comparing: [],
    swapping: [],
    locked: [],
    status: `Bắt đầu thuật toán Sắp xếp Chọn (Selection Sort) trên mảng gồm ${n} phần tử.`,
    activeLineVI: 1,
    activeLineEN: 1,
    comparisons: 0,
    swaps: 0,
    minUpdates: 0,
    pass: 0,
    heatmap: { ...heatmap },
    swapHistory: [...swapHistory],
    isNewPass: false
  });

  for (let i = 0; i < n - 1; i++) {
    const currentPass = i + 1;
    let minIdx = i;

    // Pass start step
    steps.push({
      array: [...arr],
      i,
      j: -1,
      minIdx: i,
      comparing: [],
      swapping: [],
      locked: [...lockedIndices],
      status: `Lượt ${currentPass}: Giả định phần tử tại vị trí i = ${i} (giá trị ${arr[i]}) là nhỏ nhất. Chuẩn bị quét đoạn [${i + 1}..${n - 1}].`,
      activeLineVI: 2,
      activeLineEN: 2,
      comparisons,
      swaps,
      minUpdates,
      pass: currentPass,
      heatmap: { ...heatmap },
      swapHistory: [...swapHistory],
      isNewPass: true,
      predictQuestion: createPredictQuestion(i, arr)
    });

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      heatmap[j] = (heatmap[j] || 0) + 1;
      heatmap[minIdx] = (heatmap[minIdx] || 0) + 1;

      const isNewMin = arr[j] < arr[minIdx];

      steps.push({
        array: [...arr],
        i,
        j,
        minIdx,
        comparing: [j, minIdx],
        swapping: [],
        locked: [...lockedIndices],
        status: `So sánh arr[j=${j}] (${arr[j]}) với arr[minIdx=${minIdx}] (${arr[minIdx]}). ${isNewMin ? "Phát hiện giá trị nhỏ hơn!" : "Lớn hơn hoặc bằng, giữ nguyên minIdx."}`,
        activeLineVI: 4,
        activeLineEN: 4,
        comparisons,
        swaps,
        minUpdates,
        pass: currentPass,
        heatmap: { ...heatmap },
        swapHistory: [...swapHistory],
        isNewPass: false
      });

      if (isNewMin) {
        minIdx = j;
        minUpdates++;
        steps.push({
          array: [...arr],
          i,
          j,
          minIdx,
          comparing: [],
          swapping: [],
          locked: [...lockedIndices],
          status: `👑 Cập nhật Vương miện Min mới! minIdx chuyển sang vị trí ${minIdx} (giá trị ${arr[minIdx]}).`,
          activeLineVI: 5,
          activeLineEN: 5,
          comparisons,
          swaps,
          minUpdates,
          pass: currentPass,
          heatmap: { ...heatmap },
          swapHistory: [...swapHistory],
          isNewPass: false
        });
      }
    }

    // End of pass: Swap if minIdx != i
    if (minIdx !== i) {
      swaps++;
      const valI = arr[i];
      const valMin = arr[minIdx];
      
      steps.push({
        array: [...arr],
        i,
        j: -1,
        minIdx,
        comparing: [],
        swapping: [i, minIdx],
        locked: [...lockedIndices],
        status: `Hoán đổi arr[i=${i}] (${valI}) ↔ arr[minIdx=${minIdx}] (${valMin}) để đưa giá trị nhỏ nhất về đúng vị trí cố định.`,
        activeLineVI: 7,
        activeLineEN: 7,
        comparisons,
        swaps,
        minUpdates,
        pass: currentPass,
        heatmap: { ...heatmap },
        swapHistory: [...swapHistory],
        isNewPass: false
      });

      // Do actual swap
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;

      swapHistory.push({
        stepIndex: steps.length,
        pass: currentPass,
        i,
        minIdx,
        valI,
        valMin
      });
    } else {
      steps.push({
        array: [...arr],
        i,
        j: -1,
        minIdx,
        comparing: [],
        swapping: [],
        locked: [...lockedIndices],
        status: `Phần tử tại index ${i} (${arr[i]}) đã là nhỏ nhất. Không cần hoán đổi.`,
        activeLineVI: 6,
        activeLineEN: 6,
        comparisons,
        swaps,
        minUpdates,
        pass: currentPass,
        heatmap: { ...heatmap },
        swapHistory: [...swapHistory],
        isNewPass: false
      });
    }

    lockedIndices.push(i);

    steps.push({
      array: [...arr],
      i,
      j: -1,
      minIdx: -1,
      comparing: [],
      swapping: [],
      locked: [...lockedIndices],
      status: `Đã khóa vị trí ${i} (giá trị ${arr[i]}). Hoàn tất Lượt ${currentPass}.`,
      activeLineVI: 1,
      activeLineEN: 1,
      comparisons,
      swaps,
      minUpdates,
      pass: currentPass,
      heatmap: { ...heatmap },
      swapHistory: [...swapHistory],
      isNewPass: false
    });
  }

  // Lock final element
  lockedIndices.push(n - 1);
  steps.push({
    array: [...arr],
    i: n - 1,
    j: -1,
    minIdx: -1,
    comparing: [],
    swapping: [],
    locked: Array.from({ length: n }, (_, k) => k),
    status: `🎉 Hoàn thành Selection Sort! Toàn bộ mảng đã được sắp xếp tăng dần thành công.`,
    activeLineVI: 1,
    activeLineEN: 1,
    comparisons,
    swaps,
    minUpdates,
    pass: n - 1,
    heatmap: { ...heatmap },
    swapHistory: [...swapHistory],
    isNewPass: false
  });

  return steps;
}

// Pure function for Bubble Sort trace comparison (Mode 2)
function generateBubbleSortStats(initialArray) {
  const arr = [...initialArray];
  const n = arr.length;
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        const t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
        swaps++;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return { comparisons, swaps };
}

// Pseudocode definitions
const PSEUDOCODE_VI = [
  { line: 1, text: "Lặp i từ 0 đến n-2:", tip: "Duyệt qua từng vị trí i từ đầu mảng đến kế cuối" },
  { line: 2, text: "  Gán minIdx = i", tip: "Giả định phần tử i là nhỏ nhất trong phần chưa sắp xếp" },
  { line: 3, text: "  Lặp j từ i+1 đến n-1:", tip: "Quét qua tất cả phần tử đứng sau i để tìm min thật sự" },
  { line: 4, text: "    Nếu arr[j] < arr[minIdx]:", tip: "So sánh phần tử j hiện tại với min đang lưu" },
  { line: 5, text: "      Cập nhật minIdx = j", tip: "Cập nhật vương miện minIdx sang vị trí mới nhỏ hơn" },
  { line: 6, text: "  Nếu minIdx ≠ i:", tip: "Kiểm tra xem vị trí min mới có khác vị trí ban đầu không" },
  { line: 7, text: "    Hoán đổi arr[i] ↔ arr[minIdx]", tip: "Hoán đổi phần tử tại i với phần tử nhỏ nhất tìm được" },
];

const PSEUDOCODE_EN = [
  { line: 1, text: "for i = 0 to n-2:", tip: "Iterate through each position i from start to n-2" },
  { line: 2, text: "  minIdx = i", tip: "Assume element at i is minimum in unsorted portion" },
  { line: 3, text: "  for j = i+1 to n-1:", tip: "Scan all elements after i to find the true minimum" },
  { line: 4, text: "    if arr[j] < arr[minIdx]:", tip: "Compare current element j with current minimum" },
  { line: 5, text: "      minIdx = j", tip: "Update minIdx pointer to the new smaller element" },
  { line: 6, text: "  if minIdx ≠ i:", tip: "Check if the minimum found is at a different index" },
  { line: 7, text: "    swap(arr[i], arr[minIdx])", tip: "Swap element at i with the minimum element found" },
];

export default function SelectionSortLab({ onBack }) {
  // Mode selection: "simulator" | "comparison" | "unstable"
  const [activeMode, setActiveMode] = useState("simulator");

  // Core array & configuration states
  const [arraySize, setArraySize] = useState(8);
  const [manualInput, setManualInput] = useState("");
  const [initialArray, setInitialArray] = useState([29, 10, 14, 37, 13, 22, 45, 8]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(600); // ms per step

  // Extra Features States
  const [pseudoLang, setPseudoLang] = useState("VI"); // "VI" | "EN"
  const [hoveredLineTip, setHoveredLineTip] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showTimeline, setShowTimeline] = useState(true);

  // Prediction Challenge states
  const [enablePredictMode, setEnablePredictMode] = useState(true);
  const [predictModalOpen, setPredictModalOpen] = useState(false);
  const [predictScore, setPredictScore] = useState({ correct: 0, total: 0 });
  const [predictFeedback, setPredictFeedback] = useState(null);

  // Unstable Sort Demo state
  const [unstableArray] = useState([
    { val: 5, tag: "a", color: "indigo" },
    { val: 3, tag: "", color: "slate" },
    { val: 5, tag: "b", color: "emerald" },
    { val: 2, tag: "", color: "slate" },
    { val: 5, tag: "c", color: "rose" },
    { val: 1, tag: "", color: "amber" }
  ]);

  // Keep manualInput synced with initialArray state
  useEffect(() => {
    setManualInput(initialArray.join(", "));
  }, [initialArray]);

  // Compute Selection Sort steps memoized
  const steps = useMemo(() => {
    return generateSelectionSortSteps(initialArray);
  }, [initialArray]);

  // Compute Bubble Sort stats for Mode 2 comparison
  const bubbleStats = useMemo(() => {
    return generateBubbleSortStats(initialArray);
  }, [initialArray]);

  const maxVal = useMemo(() => Math.max(...initialArray, 1), [initialArray]);

  const step = steps[currentStep] || steps[0];

  // Auto-play timer
  const timerRef = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          const nextStepIdx = prev + 1;
          const nextStep = steps[nextStepIdx];
          
          // Trigger Prediction Challenge if enabled and starting a new pass
          if (enablePredictMode && nextStep && nextStep.isNewPass && nextStep.predictQuestion) {
            setIsPlaying(false);
            setPredictModalOpen(true);
            setPredictFeedback(null);
          }
          return nextStepIdx;
        });
      }, speed);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, speed, steps, enablePredictMode]);

  // Generators for random array
  const handleGenerateRandom = () => {
    setIsPlaying(false);
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 45) + 5);
    setInitialArray(newArr);
    setCurrentStep(0);
    setManualInput(newArr.join(", "));
    setPredictScore({ correct: 0, total: 0 });
  };

  // Preset: Reverse array (Worst case scenario)
  const handleGenerateReverse = () => {
    setIsPlaying(false);
    const newArr = Array.from({ length: arraySize }, (_, idx) => (arraySize - idx) * 5 + 3);
    setInitialArray(newArr);
    setCurrentStep(0);
    setManualInput(newArr.join(", "));
    setPredictScore({ correct: 0, total: 0 });
  };

  // Manual array apply
  const handleApplyManual = (e) => {
    e.preventDefault();
    const parsed = manualInput
      .split(/[\s,]+/)
      .map((v) => parseInt(v.trim(), 10))
      .filter((v) => !isNaN(v) && v > 0 && v <= 99);

    if (parsed.length >= 3 && parsed.length <= 20) {
      setIsPlaying(false);
      setArraySize(parsed.length);
      setInitialArray(parsed);
      setCurrentStep(0);
      setPredictScore({ correct: 0, total: 0 });
    }
  };

  // Prediction answer check
  const handleSelectPredictAnswer = (selectedVal, q) => {
    const isCorrect = selectedVal === q.minVal;
    setPredictScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setPredictFeedback({
      isCorrect,
      msg: isCorrect 
        ? `✅ Chính xác! Giá trị nhỏ nhất là ${q.minVal}.` 
        : `❌ Chưa chính xác. Giá trị nhỏ nhất đúng là ${q.minVal}.`
    });
  };

  // Calculate swap ratio
  const swapRatio = useMemo(() => {
    if (!step.comparisons) return "0.0%";
    return ((step.swaps / step.comparisons) * 100).toFixed(1) + "%";
  }, [step.comparisons, step.swaps]);

  const activePseudocode = pseudoLang === "VI" ? PSEUDOCODE_VI : PSEUDOCODE_EN;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors flex items-center gap-2 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </button>
          <div className="h-5 w-px bg-stone-200" />
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-stone-800 leading-tight">
                Selection Sort Lab (Sắp Xếp Chọn)
              </h1>
              <p className="text-xs text-stone-500 font-medium">
                Mô phỏng trực quan • Tìm phần tử nhỏ nhất & đưa về đúng vị trí
              </p>
            </div>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-semibold">
          <button
            onClick={() => setActiveMode("simulator")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeMode === "simulator"
                ? "bg-white text-amber-600 shadow-sm font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            1. Mô phỏng từng bước
          </button>
          <button
            onClick={() => setActiveMode("comparison")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeMode === "comparison"
                ? "bg-white text-indigo-600 shadow-sm font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            2. So sánh vs Bubble Sort
          </button>
          <button
            onClick={() => setActiveMode("unstable")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeMode === "unstable"
                ? "bg-white text-rose-600 shadow-sm font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            3. Demo Không Ổn Định
          </button>
        </div>
      </div>

      {/* MODE 1: Step-by-Step Simulator */}
      {activeMode === "simulator" && (
        <div className="space-y-6">
          {/* Controls & Config Row */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Array Size Slider */}
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-stone-600 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-stone-500" />
                  Kích thước ({arraySize}):
                </label>
                <input
                  type="range"
                  min="4"
                  max="18"
                  value={arraySize}
                  onChange={(e) => {
                    const sz = parseInt(e.target.value, 10);
                    setArraySize(sz);
                    const newArr = Array.from({ length: sz }, () => Math.floor(Math.random() * 45) + 5);
                    setInitialArray(newArr);
                    setCurrentStep(0);
                    setIsPlaying(false);
                    setManualInput(newArr.join(", "));
                  }}
                  className="w-28 accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleGenerateRandom}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  Mảng Ngẫu Nhiên
                </button>
                <button
                  onClick={handleGenerateReverse}
                  className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-amber-200"
                >
                  <ArrowUpDown className="w-3.5 h-3.5 text-amber-600" />
                  Trường Hợp Xấu (Ngược)
                </button>
              </div>

              {/* Prediction Toggle */}
              <button
                onClick={() => setEnablePredictMode(!enablePredictMode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                  enablePredictMode
                    ? "bg-amber-500 text-white border-amber-600 shadow-sm shadow-amber-500/20"
                    : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Thử thách dự đoán: {enablePredictMode ? "BẬT 🎯" : "TẮT"}
              </button>
            </div>

            {/* Custom Input Field */}
            <form onSubmit={handleApplyManual} className="flex items-center gap-2 pt-2 border-t border-stone-100">
              <span className="text-xs font-bold text-stone-700 shrink-0">Mảng hiện tại:</span>
              <input
                type="text"
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                placeholder="Ví dụ: 29, 10, 14, 37, 13..."
                className="flex-1 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-mono font-bold text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                Cập Nhật Mảng
              </button>
            </form>
          </div>

          {/* Main Visual Canvas & Control Toolbar */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6 relative overflow-hidden">
            {/* Status Explanatory Banner */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-amber-900">
                  {step.status}
                </div>
                {predictScore.total > 0 && (
                  <div className="text-[11px] font-medium text-amber-700 mt-0.5">
                    🎯 Điểm thử thách dự đoán: <span className="font-bold text-amber-900">{predictScore.correct}/{predictScore.total}</span> ({(predictScore.correct / predictScore.total * 100).toFixed(0)}%)
                  </div>
                )}
              </div>
            </div>

            {/* Bars Visualization Window */}
            <div className="relative h-64 w-full bg-slate-900/95 rounded-2xl p-4 flex items-end justify-center gap-2 md:gap-3 border border-slate-800 overflow-visible pt-10">
              {/* Crown Header Legend */}
              <div className="absolute top-3 left-4 flex items-center gap-4 text-[11px] font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                  <span>Min Candidate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>Scanning j</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Sorted i</span>
                </div>
              </div>

              {/* Bars Mapping */}
              {step.array.map((val, idx) => {
                const heightPercent = Math.max(15, Math.round((val / maxVal) * 100));
                const isMin = idx === step.minIdx;
                const isScanning = idx === step.j;
                const isI = idx === step.i;
                const isLocked = step.locked.includes(idx);
                const isSwapping = step.swapping.includes(idx);

                let barBg = "bg-slate-700/80 border-slate-600 text-slate-200";
                if (isLocked) barBg = "bg-emerald-500 border-emerald-400 text-white font-bold";
                else if (isSwapping) barBg = "bg-rose-500 border-rose-400 text-white font-black animate-bounce shadow-lg shadow-rose-500/50";
                else if (isMin) barBg = "bg-amber-400 border-amber-300 text-slate-950 font-extrabold shadow-lg shadow-amber-400/40 ring-2 ring-amber-300";
                else if (isScanning) barBg = "bg-cyan-400 border-cyan-300 text-slate-950 font-bold shadow-md shadow-cyan-400/30";

                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center justify-end h-full max-w-[48px] relative group transition-all duration-300"
                  >
                    {/* 👑 Bouncing Crown Icon above current min element */}
                    {isMin && (
                      <div className="absolute -top-7 text-amber-400 animate-bounce z-20 flex flex-col items-center">
                        <Crown className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(251,191,36,0.8)]" />
                        <Sparkles className="w-3 h-3 text-amber-300 animate-spin -mt-1" />
                      </div>
                    )}

                    {/* Numeric Bar */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-xl border-t border-x flex flex-col items-center justify-between py-1 transition-all duration-300 ${barBg}`}
                    >
                      <span className="text-xs font-extrabold tracking-tight">
                        {val}
                      </span>
                    </div>

                    {/* Index Label */}
                    <div className="text-[10px] font-mono font-bold text-slate-400 mt-1.5">
                      [{idx}]
                    </div>

                    {/* Pointer Arrows below */}
                    <div className="absolute -bottom-6 flex flex-col items-center gap-0.5 text-[9px] font-extrabold">
                      {isI && <span className="text-indigo-400">▼ i</span>}
                      {isScanning && <span className="text-cyan-400">▲ j</span>}
                      {isMin && <span className="text-amber-400">▲ min</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Playback Controls Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentStep(0)}
                  disabled={currentStep === 0}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 transition-colors"
                  title="Về bước đầu"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                  disabled={currentStep === 0}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 transition-colors"
                  title="Bước trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 flex items-center gap-1.5 transition-all transform active:scale-95"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" /> Tạm Dừng
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Phát Tự Động
                    </>
                  )}
                </button>

                <button
                  onClick={() => setCurrentStep((p) => Math.min(steps.length - 1, p + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 transition-colors"
                  title="Bước tiếp"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentStep(steps.length - 1)}
                  disabled={currentStep === steps.length - 1}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 transition-colors"
                  title="Đến cuối"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Progress & Speed Slider */}
              <div className="flex items-center gap-4">
                <div className="text-xs font-mono font-bold text-stone-600">
                  Bước {currentStep + 1} / {steps.length}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500">Tốc độ:</span>
                  <input
                    type="range"
                    min="150"
                    max="1500"
                    step="50"
                    value={1650 - speed}
                    onChange={(e) => setSpeed(1650 - parseInt(e.target.value, 10))}
                    className="w-24 accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Step Progress Line */}
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300"
              />
            </div>
          </div>

          {/* 5 Metrics Cards Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-cyan-600" />
                So sánh
              </div>
              <div className="text-2xl font-black text-cyan-600 mt-1">
                {step.comparisons}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
                Hoán đổi
              </div>
              <div className="text-2xl font-black text-amber-600 mt-1">
                {step.swaps}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-600" />
                Lượt (Pass i)
              </div>
              <div className="text-2xl font-black text-indigo-600 mt-1">
                {step.pass} / {initialArray.length - 1}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-rose-600" />
                Min Đổi
              </div>
              <div className="text-2xl font-black text-rose-600 mt-1">
                {step.minUpdates}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between col-span-2 md:col-span-1">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                Tỉ lệ Swap/Comp
              </div>
              <div className="text-2xl font-black text-emerald-600 mt-1">
                {swapRatio}
              </div>
            </div>
          </div>

          {/* Dual Panel Grid: Heatmap + Timeline & Interactive Pseudocode */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Heatmap & Timeline Panel */}
            <div className="space-y-6">
              {/* 🔥 Heatmap Panel */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                    <Flame className="w-4 h-4 text-rose-500" />
                    Bản đồ nhiệt so sánh (Heatmap)
                  </h3>
                  <button
                    onClick={() => setShowHeatmap(!showHeatmap)}
                    className="text-[11px] text-stone-500 hover:text-stone-800 font-semibold"
                  >
                    {showHeatmap ? "Ẩn" : "Hiện"}
                  </button>
                </div>

                {showHeatmap && (
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] text-stone-500">
                      Tần suất bị so sánh của từng vị trí trong mảng. Vị trí cuối mảng bị so sánh ít nhất vì đoạn chưa sắp ngắn dần.
                    </p>
                    <div className="flex items-center gap-1.5 pt-2">
                      {step.array.map((val, idx) => {
                        const count = step.heatmap[idx] || 0;
                        const maxCount = Math.max(...Object.values(step.heatmap), 1);
                        const opacity = Math.min(1, 0.15 + (count / maxCount) * 0.85);

                        return (
                          <div
                            key={idx}
                            className="flex-1 flex flex-col items-center gap-1"
                          >
                            <div
                              style={{ backgroundColor: `rgba(244, 63, 94, ${opacity})` }}
                              className="w-full h-8 rounded-lg flex items-center justify-center text-xs font-black text-stone-900 border border-rose-200 transition-all duration-300"
                            >
                              {count}
                            </div>
                            <span className="text-[10px] font-mono text-stone-400">[{idx}]</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* 📊 Swap Timeline Panel */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    Lịch sử Hoán đổi (Swap Timeline)
                  </h3>
                  <button
                    onClick={() => setShowTimeline(!showTimeline)}
                    className="text-[11px] text-stone-500 hover:text-stone-800 font-semibold"
                  >
                    {showTimeline ? "Ẩn" : "Hiện"}
                  </button>
                </div>

                {showTimeline && (
                  <div className="space-y-2 pt-1">
                    {step.swapHistory.length === 0 ? (
                      <div className="text-xs text-stone-400 italic py-2">
                        Chưa có phép hoán đổi nào được thực hiện.
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                        {step.swapHistory.map((item, hIdx) => (
                          <button
                            key={hIdx}
                            onClick={() => setCurrentStep(item.stepIndex)}
                            className="px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left shrink-0 transition-all group"
                          >
                            <div className="text-[10px] font-bold text-amber-800 group-hover:text-amber-900">
                              Pass {item.pass}: arr[{item.i}] ↔ arr[{item.minIdx}]
                            </div>
                            <div className="text-[11px] font-mono font-semibold text-amber-600">
                              {item.valI} ↔ {item.valMin}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Bilingual Interactive Pseudocode Panel */}
            <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl border border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    Mã Giả (Pseudocode)
                  </div>

                  {/* Language Toggle */}
                  <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-[11px] font-bold">
                    <button
                      onClick={() => setPseudoLang("VI")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        pseudoLang === "VI" ? "bg-amber-500 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Tiếng Việt
                    </button>
                    <button
                      onClick={() => setPseudoLang("EN")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        pseudoLang === "EN" ? "bg-amber-500 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>

                {/* Pseudocode Lines List */}
                <div className="space-y-1.5 pt-4 font-mono text-xs">
                  {activePseudocode.map((item) => {
                    const isActive = 
                      (pseudoLang === "VI" && item.line === step.activeLineVI) ||
                      (pseudoLang === "EN" && item.line === step.activeLineEN);

                    return (
                      <div
                        key={item.line}
                        onMouseEnter={() => setHoveredLineTip(item.tip)}
                        onMouseLeave={() => setHoveredLineTip(null)}
                        className={`px-3 py-2 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-amber-500/20 border-l-4 border-amber-400 text-amber-200 font-bold scale-[1.01]"
                            : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-slate-500 w-4">{item.line}</span>
                          <span className="whitespace-pre">{item.text}</span>
                        </div>
                        {isActive && <span className="text-[10px] text-amber-400 font-extrabold uppercase">Executing</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tooltip Explanation Line */}
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-amber-300/90 font-sans italic min-h-[44px] flex items-center">
                {hoveredLineTip ? (
                  <span>💡 {hoveredLineTip}</span>
                ) : (
                  <span className="text-slate-500">Rê chuột vào từng dòng pseudocode để xem giải thích chi tiết.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Speed & Swap Count Comparison vs Bubble Sort */}
      {activeMode === "comparison" && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-base font-bold text-stone-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-indigo-600" />
              So Sánh Trực Quan: Selection Sort vs Bubble Sort
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Thực thi trên cùng một mảng ngẫu nhiên gồm {initialArray.length} phần tử. Quan sát sự khác biệt vượt trội về số phép hoán đổi (Swaps).
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Selection Sort Card */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-4">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <div className="font-bold text-amber-900 text-sm flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-600" />
                  Selection Sort
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-200 text-amber-900 rounded-md">
                  O(N²) time | O(N) swaps
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-600 font-semibold">Phép So Sánh (Comparisons):</span>
                  <span className="font-bold text-stone-900">{step.comparisons}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-600 font-semibold">Phép Hoán Đổi (Swaps):</span>
                  <span className="font-bold text-amber-700 text-sm">{step.swaps} (Tối đa N-1)</span>
                </div>

                {/* Progress Visual */}
                <div className="space-y-1">
                  <div className="text-[10px] text-stone-500 font-semibold">Mức độ hoán đổi (Càng ít càng tối ưu):</div>
                  <div className="w-full h-3 bg-amber-100 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, (step.swaps / Math.max(bubbleStats.swaps, 1)) * 100)}%` }}
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bubble Sort Card */}
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-4">
              <div className="flex items-center justify-between border-b border-indigo-200/60 pb-3">
                <div className="font-bold text-indigo-900 text-sm flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-indigo-600" />
                  Bubble Sort
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-indigo-200 text-indigo-900 rounded-md">
                  O(N²) time | O(N²) swaps
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-600 font-semibold">Phép So Sánh (Comparisons):</span>
                  <span className="font-bold text-stone-900">{bubbleStats.comparisons}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-600 font-semibold">Phép Hoán Đổi (Swaps):</span>
                  <span className="font-bold text-rose-600 text-sm">{bubbleStats.swaps} (Có thể tới N(N-1)/2)</span>
                </div>

                {/* Progress Visual */}
                <div className="space-y-1">
                  <div className="text-[10px] text-stone-500 font-semibold">Mức độ hoán đổi:</div>
                  <div className="w-full h-3 bg-indigo-100 rounded-full overflow-hidden">
                    <div
                      style={{ width: `100%` }}
                      className="h-full bg-rose-500 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Insight Box */}
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 space-y-2">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-2">
              💡 Insight cốt lõi: Tại sao Selection Sort ít hoán đổi hơn Bubble Sort?
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Cả hai đều có độ phức tạp thời gian <code className="text-amber-300">O(N²)</code>, nhưng <strong>Selection Sort chỉ hoán đổi tối đa N-1 lần</strong> (mỗi lượt duyệt chỉ hoán đổi 1 lần sau khi đã tìm thấy min). Trong khi đó, Bubble Sort hoán đổi liên tục mỗi khi thấy cặp sai thứ tự (có thể lên tới <code className="text-rose-400">N(N-1)/2</code> lần). Vì vậy, nếu chi phí ghi/hoán đổi bộ nhớ đắt đỏ, Selection Sort sẽ vượt trội hơn hẳn.
            </p>
          </div>
        </div>
      )}

      {/* MODE 3: Unstable Sort Demo */}
      {activeMode === "unstable" && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-base font-bold text-stone-800 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-500" />
              Minh Họa Tính KHÔNG ỔN ĐỊNH (Unstable Algorithm)
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Thuật toán ổn định (Stable) giữ nguyên thứ tự tương đối của các phần tử có giá trị bằng nhau. Selection Sort KHÔNG ổn định.
            </p>
          </div>

          {/* Before & After Duplicate Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before Sort */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="text-xs font-bold text-stone-700">Mảng ban đầu (3 phần tử giá trị 5 có ký hiệu a, b, c):</div>
              <div className="flex items-center gap-2">
                {unstableArray.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-14 rounded-xl bg-white border border-stone-300 flex flex-col items-center justify-center font-bold text-sm shadow-sm"
                  >
                    <span>{item.val}</span>
                    {item.tag && <span className="text-[10px] text-indigo-600 font-extrabold">{item.tag}</span>}
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-stone-500 italic">
                Thứ tự ban đầu của các số 5: <span className="font-bold text-indigo-600">5a</span> đứng trước <span className="font-bold text-emerald-600">5b</span> đứng trước <span className="font-bold text-rose-600">5c</span>.
              </div>
            </div>

            {/* After Selection Sort */}
            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
              <div className="text-xs font-bold text-rose-900">Sau khi Selection Sort hoàn tất:</div>
              <div className="flex items-center gap-2">
                {[
                  { val: 1, tag: "" },
                  { val: 2, tag: "" },
                  { val: 3, tag: "" },
                  { val: 5, tag: "c" },
                  { val: 5, tag: "b" },
                  { val: 5, tag: "a" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-14 rounded-xl bg-white border border-rose-300 flex flex-col items-center justify-center font-bold text-sm shadow-sm"
                  >
                    <span>{item.val}</span>
                    {item.tag && <span className="text-[10px] text-rose-600 font-extrabold">{item.tag}</span>}
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-rose-700 font-bold">
                ⚠️ Thứ tự bị đảo ngược: 5c → 5b → 5a! Phép hoán đổi nhảy cóc qua khoảng cách xa đã làm vỡ thứ tự ban đầu.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prediction Challenge Modal */}
      {predictModalOpen && step.predictQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 border border-stone-200 shadow-2xl space-y-5">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <div className="p-2 rounded-xl bg-amber-500 text-white font-black">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-800">
                  Thử Thách Dự Đoán — Lượt {step.pass}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Kiểm tra khả năng tư duy trước khi thuật toán quét
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-stone-700 leading-relaxed">
                Phần tử nào có giá trị <strong className="text-amber-600">nhỏ nhất</strong> trong đoạn chưa sắp xếp <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono">{step.predictQuestion.rangeText}</code>?
              </p>
            </div>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-2 gap-2">
              {step.predictQuestion.options.map((optVal, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => handleSelectPredictAnswer(optVal, step.predictQuestion)}
                  disabled={predictFeedback !== null}
                  className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 font-bold text-sm text-stone-800 transition-all text-center disabled:opacity-80"
                >
                  {optVal}
                </button>
              ))}
            </div>

            {/* Feedback & Continue Button */}
            {predictFeedback && (
              <div className="space-y-3 pt-2">
                <div className={`p-3 rounded-xl text-xs font-bold ${
                  predictFeedback.isCorrect ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}>
                  {predictFeedback.msg}
                </div>

                <button
                  onClick={() => {
                    setPredictModalOpen(false);
                    setIsPlaying(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  Tiếp Tục Mô Phỏng <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
