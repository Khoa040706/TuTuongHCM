/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import confetti from "canvas-confetti";
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
  Shuffle,
  Keyboard,
  Activity
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
  
  const heatmap = {};
  for (let idx = 0; idx < n; idx++) heatmap[idx] = 0;

  const swapHistory = [];

  const createPredictQuestion = (startIndex, currentArr) => {
    const unsortedSlice = currentArr.slice(startIndex);
    const minVal = Math.min(...unsortedSlice);
    const optionsSet = new Set([minVal]);
    for (let val of unsortedSlice) {
      optionsSet.add(val);
      if (optionsSet.size >= 4) break;
    }
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

const PYTHON_CODE = [
  { line: 1, text: "def selection_sort(arr):" },
  { line: 2, text: "    n = len(arr)" },
  { line: 3, text: "    for i in range(n - 1):" },
  { line: 4, text: "        min_idx = i" },
  { line: 5, text: "        for j in range(i + 1, n):" },
  { line: 6, text: "            if arr[j] < arr[min_idx]:" },
  { line: 7, text: "                min_idx = j" },
  { line: 8, text: "        if min_idx != i:" },
  { line: 9, text: "            arr[i], arr[min_idx] = arr[min_idx], arr[i]" },
];

const JAVA_CODE = [
  { line: 1, text: "static void selectionSort(int[] arr) {" },
  { line: 2, text: "    int n = arr.length;" },
  { line: 3, text: "    for (int i = 0; i < n - 1; i++) {" },
  { line: 4, text: "        int minIdx = i;" },
  { line: 5, text: "        for (int j = i + 1; j < n; j++) {" },
  { line: 6, text: "            if (arr[j] < arr[minIdx]) minIdx = j;" },
  { line: 7, text: "        }" },
  { line: 8, text: "        if (minIdx != i) {" },
  { line: 9, text: "            int temp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = temp;" },
  { line: 10, text: "        }" },
  { line: 11, text: "    }" },
  { line: 12, text: "}" },
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
  const [lang, setLang] = useState("EN"); // "EN" | "python" | "java"
  const [showHeatmap, setShowHeatmap] = useState(true);

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
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);
  const isFinished = currentStep === steps.length - 1;

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

  // Confetti celebration when finished
  useEffect(() => {
    if (isFinished && steps.length > 1) {
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#f43f5e"]
        });
      } catch (e) {}
    }
  }, [isFinished, steps.length]);

  // Keyboard Shortcuts Listener (Space, ArrowLeft, ArrowRight, R)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        setIsPlaying(false);
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        setIsPlaying(false);
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      } else if (e.code === "KeyR") {
        e.preventDefault();
        setIsPlaying(false);
        setCurrentStep(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [steps.length]);

  // Generators for random array
  const handleGenerateRandom = () => {
    setIsPlaying(false);
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 45) + 5);
    setInitialArray(newArr);
    setCurrentStep(0);
    setManualInput(newArr.join(", "));
    setPredictScore({ correct: 0, total: 0 });
  };

  // Preset: Reverse array
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

  // Determine active code line
  const activeLine =
    lang === "VI"
      ? step.activeLineVI
      : lang === "EN"
      ? step.activeLineEN
      : lang === "python"
      ? step.activeLineVI
      : step.activeLineVI;

  const currentCodeLines =
    lang === "VI"
      ? PSEUDOCODE_VI
      : lang === "EN"
      ? PSEUDOCODE_EN
      : lang === "python"
      ? PYTHON_CODE
      : JAVA_CODE;

  // Maximum heatmap count
  const maxHeatmapCount = useMemo(() => {
    const vals = Object.values(step.heatmap || {});
    return Math.max(...vals, 1);
  }, [step.heatmap]);

  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-slate-100 p-3 sm:p-5 md:p-6 font-sans space-y-6 select-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#161b22] via-[#0d1117] to-[#0d1117]">
      
      {/* 1. HEADER BAR (FULL WIDTH TOPBAR - MIDNIGHT SLATE & ELECTRIC CYAN) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#161b22]/90 backdrop-blur-md p-5 rounded-3xl border border-[#30363d] shadow-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="px-3.5 py-1.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-200 hover:text-white transition-all flex items-center gap-2 text-xs font-bold cursor-pointer shadow-md border border-[#30363d] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>← Quay về Kho Mô Phỏng</span>
          </button>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-extrabold text-sky-400 uppercase tracking-widest bg-[#21262d] border border-[#30363d] px-3.5 py-1 rounded-full shadow-inner flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>Selection Sort Lab 3D</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 font-mono uppercase">
              SELECTION SORT — SẮP XẾP CHỌN 3D
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Quét tìm phần tử nhỏ nhất (Min) trong đoạn chưa sắp xếp và đưa về vị trí cố định.
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-[#0d1117] p-1.5 rounded-2xl border border-[#30363d] text-xs font-semibold shadow-inner">
          <button
            onClick={() => setActiveMode("simulator")}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeMode === "simulator"
                ? "bg-sky-600 text-white font-bold shadow-lg shadow-sky-950/60"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. Mô phỏng 3D từng bước
          </button>
          <button
            onClick={() => setActiveMode("comparison")}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeMode === "comparison"
                ? "bg-teal-600 text-white font-bold shadow-lg shadow-teal-950/60"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. So sánh vs Bubble Sort
          </button>
          <button
            onClick={() => setActiveMode("unstable")}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeMode === "unstable"
                ? "bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-950/60"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            3. Demo Tính Ổn Định
          </button>
        </div>
      </div>

      {/* MODE 1: Step-by-Step Simulator */}
      {activeMode === "simulator" && (
        <div className="space-y-6">
          {/* 2. CONFIGURATION CONTROLS */}
          <div className="bg-[#161b22]/90 backdrop-blur-md p-5 rounded-3xl border border-[#30363d] shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-sky-400" />
              <span>Cấu hình dữ liệu & Chế độ thử thách:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Array Size Slider */}
              <div className="md:col-span-4 flex items-center gap-3 bg-[#0d1117] px-4 py-2.5 rounded-2xl border border-[#30363d]">
                <span className="text-xs font-bold text-slate-300 shrink-0">Kích thước:</span>
                <input
                  type="range"
                  min="4"
                  max="16"
                  value={arraySize}
                  onChange={(e) => {
                    const sz = parseInt(e.target.value, 10);
                    setArraySize(sz);
                    const newArr = Array.from({ length: sz }, () => Math.floor(Math.random() * 45) + 5);
                    setInitialArray(newArr);
                    setCurrentStep(0);
                    setIsPlaying(false);
                    setPredictScore({ correct: 0, total: 0 });
                  }}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-xs font-mono font-extrabold text-cyan-400 shrink-0 bg-[#21262d] px-2.5 py-0.5 rounded-lg border border-[#30363d]">
                  {arraySize}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-4 flex items-center gap-2">
                <button
                  onClick={handleGenerateRandom}
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
                >
                  <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ngẫu Nhiên</span>
                </button>
                <button
                  onClick={handleGenerateReverse}
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
                >
                  <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mảng Ngược</span>
                </button>
              </div>

              {/* Prediction Toggle Button */}
              <div className="md:col-span-4">
                <button
                  onClick={() => setEnablePredictMode(!enablePredictMode)}
                  className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 ${
                    enablePredictMode
                      ? "bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-sky-950/50"
                      : "bg-[#0d1117] text-slate-400 border border-[#30363d] hover:text-slate-200"
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Thử thách dự đoán: {enablePredictMode ? "BẬT 🎯" : "TẮT"}</span>
                </button>
              </div>
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleApplyManual} className="flex items-center gap-2 pt-2 border-t border-[#30363d]">
              <span className="text-xs font-bold text-slate-300 shrink-0">Mảng tùy chỉnh:</span>
              <input
                type="text"
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                placeholder="Ví dụ: 29, 10, 14, 37, 13, 22..."
                className="flex-1 px-4 py-2 rounded-2xl bg-[#0d1117] border border-[#30363d] text-xs font-mono font-semibold text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-all cursor-pointer shadow-md active:scale-95"
              >
                Áp Dụng
              </button>
            </form>
          </div>

          {/* 3. TẦNG 1: BỘ MÔ PHỎNG NỔI BẬT CHIA 3 CỘT (LAYOUT 2.5 : 7 : 2.5) */}
          <div className="w-full bg-[#161124]/80 backdrop-blur-md rounded-3xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
            
            {/* Playback Controls & Speed Toolbar & Keyboard Shortcuts Hint */}
            <div className="bg-[#0d1117] p-3.5 rounded-2xl border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-100">
              {/* Buttons Group */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentStep(0)}
                  disabled={currentStep === 0}
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
                  title="Về bước đầu (Phím R)"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                  disabled={currentStep === 0}
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
                  title="Bước trước (Phím ←)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 text-white font-extrabold text-xs shadow-lg shadow-sky-950/60 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
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

                <button
                  onClick={() => setCurrentStep((p) => Math.min(steps.length - 1, p + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
                  title="Bước tiếp (Phím →)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentStep(steps.length - 1)}
                  disabled={currentStep === steps.length - 1}
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
                  title="Xem kết quả cuối cùng"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Keyboard Shortcut Hint Tag */}
              <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-[#21262d] px-3 py-1.5 rounded-xl border border-[#30363d]">
                <Keyboard className="w-3.5 h-3.5 text-cyan-400" />
                <span>[Space] Tạm dừng/Chạy | [←] Lùi | [→] Tiến | [R] Đặt lại</span>
              </div>

              {/* Speed Slider */}
              <div className="flex items-center gap-3 w-full sm:w-auto bg-[#21262d] px-4 py-2 rounded-xl border border-[#30363d] shadow-xs">
                <span className="text-xs font-bold text-slate-300 shrink-0">Tốc độ:</span>
                <input
                  type="range"
                  min="150"
                  max="1500"
                  step="50"
                  value={1650 - speed}
                  onChange={(e) => setSpeed(1650 - parseInt(e.target.value, 10))}
                  className="w-28 sm:w-36 accent-cyan-400 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-cyan-400 shrink-0 w-14 text-right">
                  {speed}ms
                </span>
              </div>
            </div>

            {/* SIDE-BY-SIDE 3-PANEL GRID WORKSPACE (LAYOUT 2.5 : 7 : 2.5) */}
            <div className="relative w-full min-h-[490px] grid grid-cols-12 select-none overflow-hidden rounded-2xl border border-[#30363d] shadow-2xl">
              
              {/* CỘT 1 (LEFT - 2.5 COLS ~ 25%): PSEUDOCODE & CYBER LED LIVE VARIABLE WATCHER */}
              <div className="col-span-12 lg:col-span-3 bg-[#0d1117] text-slate-100 p-4 border-r border-[#30363d] flex flex-col justify-between overflow-hidden shadow-inner">
                <div>
                  <div className="flex items-center justify-between border-b border-[#30363d] pb-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-slate-100">
                        Mã Giả & Biến Số
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-[#21262d] px-2 py-0.5 rounded border border-[#30363d] font-bold">
                      Selection Sort
                    </span>
                  </div>

                  {/* Pseudocode Snippet */}
                  <div className="space-y-1 font-mono text-[11px] max-h-[220px] overflow-y-auto pr-1">
                    {currentCodeLines.map((item) => {
                      const isActive = item.line === activeLine;
                      return (
                        <div
                          key={item.line}
                          className={`p-1.5 rounded-lg flex items-center gap-2 transition-all ${
                            isActive
                              ? "bg-[#1f2937] text-sky-300 font-bold border-l-4 border-sky-400 pl-2 shadow-md"
                              : "text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <span className="text-[10px] opacity-40 w-4 text-right font-mono">{item.line}</span>
                          <span className="truncate whitespace-pre">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Variables Cyber LED Watch Box */}
                <div className="pt-3 border-t border-[#30363d] space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Theo dõi biến Cyber LED:</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                    <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Lượt Pass (i)</span>
                      <span className="font-extrabold text-slate-200 text-xs">i = {step.i >= 0 ? step.i : 0}</span>
                    </div>
                    <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Đang Quét (j)</span>
                      <span className="font-extrabold text-teal-400 text-xs">{step.j >= 0 ? `j = ${step.j}` : "-"}</span>
                    </div>
                    <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Vương Miện Min</span>
                      <span className="font-extrabold text-amber-400 text-xs">{step.minIdx >= 0 ? `[${step.minIdx}] = ${step.array[step.minIdx]}` : "-"}</span>
                    </div>
                    <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Hoán Đổi?</span>
                      <span className={`font-extrabold text-xs ${step.swapping.length > 0 ? "text-rose-400 animate-pulse" : "text-emerald-400"}`}>
                        {step.swapping.length > 0 ? "✓ SWAP" : "SCAN"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CỘT 2 (CENTER - 7 COLS ~ 50-60%): 3D SELECTION SORT STAGE WITH CROWN & SCANNER BEAM */}
              <div className="col-span-12 lg:col-span-6 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#0d1117] p-3 md:p-4 flex flex-col justify-between items-center relative border-r border-[#30363d] overflow-hidden">
                
                {/* Status Explanatory Banner */}
                <div className="w-full flex items-center justify-between z-10 px-2 py-1 bg-[#161b22]/90 rounded-xl border border-[#30363d] backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                    <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate max-w-md">{step.status}</span>
                  </div>
                  {predictScore.total > 0 && (
                    <div className="text-[11px] font-mono font-bold text-cyan-400 shrink-0 bg-[#21262d] px-2.5 py-0.5 rounded-lg border border-[#30363d]">
                      🎯 Quiz: {predictScore.correct}/{predictScore.total}
                    </div>
                  )}
                </div>

                {/* 3D BARS VISUALIZATION STAGE */}
                <div className="relative h-64 w-full flex items-end justify-center gap-2 md:gap-3 overflow-visible pt-10 my-auto">
                  
                  {/* Legend Header */}
                  <div className="absolute top-2 left-2 flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-400 bg-[#21262d] px-2.5 py-1 rounded-lg border border-[#30363d]">
                    <div className="flex items-center gap-1">
                      <Crown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                      <span>Min Candidate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                      <span>Scanner Beam j</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
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

                    let barBg = "bg-[#21262d] border-[#30363d] text-slate-200";
                    if (isFinished) {
                      barBg = "bg-emerald-500 border-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-500/40";
                    } else if (isLocked) {
                      barBg = "bg-emerald-600/80 border-emerald-400 text-white font-bold";
                    } else if (isSwapping) {
                      barBg = "bg-rose-500 border-rose-300 text-white font-black animate-bounce shadow-xl shadow-rose-500/50";
                    } else if (isMin) {
                      barBg = "bg-gradient-to-t from-amber-500 to-amber-300 border-amber-200 text-slate-950 font-black shadow-xl shadow-amber-400/40 ring-2 ring-amber-300";
                    } else if (isScanning) {
                      barBg = "bg-gradient-to-t from-teal-600 to-teal-400 border-teal-300 text-slate-950 font-extrabold shadow-lg shadow-teal-400/30";
                    }

                    return (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center justify-end h-full max-w-[48px] relative group transition-all duration-300"
                      >
                        {/* 👑 Amber Crown Icon above current min element */}
                        {isMin && !isFinished && (
                          <div className="absolute -top-7 text-amber-400 animate-bounce z-20 flex flex-col items-center">
                            <Crown className="w-5 h-5 drop-shadow-[0_2px_10px_rgba(251,191,36,0.9)]" />
                            <Sparkles className="w-3 h-3 text-amber-300 animate-spin -mt-1" />
                          </div>
                        )}

                        {/* Gold Crown when finished */}
                        {isFinished && idx === 0 && (
                          <div className="absolute -top-7 text-amber-400 animate-bounce z-20 flex flex-col items-center">
                            <Crown className="w-5 h-5 drop-shadow-[0_2px_10px_rgba(251,191,36,0.9)]" />
                          </div>
                        )}

                        {/* Neon Teal Scanner Beam effect above scanning index j */}
                        {isScanning && !isFinished && (
                          <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-transparent shadow-[0_0_12px_#2dd4bf] animate-pulse z-10" />
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
                        <div className="absolute -bottom-6 flex flex-col items-center gap-0.5 text-[9px] font-extrabold font-mono">
                          {isI && <span className="text-slate-300">▼ i</span>}
                          {isScanning && <span className="text-teal-400">▲ j</span>}
                          {isMin && <span className="text-amber-400">▲ min</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Heatmap Bar (Soft Mint -> Coral Pink) */}
                {showHeatmap && (
                  <div className="w-full pt-4 border-t border-[#30363d] space-y-1 z-10">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" />
                        <span>Mật độ so sánh (Heatmap):</span>
                      </span>
                      <span>Max: {maxHeatmapCount} lần</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {step.array.map((_, idx) => {
                        const count = step.heatmap[idx] || 0;
                        const opacity = Math.min(1, Math.max(0.15, count / maxHeatmapCount));
                        return (
                          <div
                            key={`hm-${idx}`}
                            className="flex-1 h-2 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: `rgba(56, 189, 248, ${opacity})`,
                              boxShadow: opacity > 0.5 ? "0 0 8px rgba(56, 189, 248, 0.6)" : "none"
                            }}
                            title={`Index [${idx}]: ${count} lần so sánh`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* CỘT 3 (RIGHT - 2.5 COLS ~ 25%): EXECUTION STATS & COMPLEXITY */}
              <div className="col-span-12 lg:col-span-3 bg-[#0d1117] text-slate-100 p-4 flex flex-col justify-between overflow-y-auto space-y-4 shadow-inner">
                <div>
                  <div className="flex items-center justify-between border-b border-[#30363d] pb-2.5 mb-3">
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <BarChart2 className="w-4 h-4 text-sky-400" />
                      <span>Thống Kê Thực Thi</span>
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {currentStep + 1}/{steps.length}
                    </span>
                  </div>

                  {/* Counter Grid */}
                  <div className="grid grid-cols-1 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                      <span className="text-xs font-bold text-slate-400 uppercase">So sánh</span>
                      <span className="text-lg font-black text-sky-400 font-mono">{step.comparisons}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                      <span className="text-xs font-bold text-slate-400 uppercase">Hoán đổi</span>
                      <span className="text-lg font-black text-amber-400 font-mono">{step.swaps}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                      <span className="text-xs font-bold text-slate-400 uppercase">Đổi Min</span>
                      <span className="text-lg font-black text-teal-400 font-mono">{step.minUpdates}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                      <span className="text-xs font-bold text-slate-400 uppercase">Tỷ lệ Swap/Comp</span>
                      <span className="text-sm font-black text-emerald-400 font-mono">{swapRatio}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-3">
                    <div className="flex justify-between text-xs font-bold text-slate-200">
                      <span>Tiến trình hoàn thành</span>
                      <span className="font-mono text-cyan-400">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#161b22] overflow-hidden border border-[#30363d]">
                      <div
                        style={{ width: `${progressPercent}%` }}
                        className="h-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Complexity Card */}
                <div className="pt-3 border-t border-[#30363d] space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <Activity className="w-4 h-4 text-sky-400" />
                    <span>Độ phức tạp Selection Sort:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between">
                      <span className="text-slate-400 text-[9px] uppercase font-semibold">Tốt nhất (Best)</span>
                      <span className="font-mono font-bold text-amber-400">O(n²)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between">
                      <span className="text-slate-400 text-[9px] uppercase font-semibold">Bộ nhớ (Space)</span>
                      <span className="font-mono font-bold text-emerald-400">O(1)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. TẦNG 2: MÃ GIẢ FULL & TRÌNH ĐỌC CODE (FULL WIDTH DUAL-LANGUAGE CODE EDITOR) */}
          <div className="w-full bg-[#0d1117] p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-4 text-slate-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#30363d] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 leading-tight">
                    Mã Giả Full & Trình Đọc Mã Nguồn Thuật Toán [SELECTION SORT]
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Xem toàn bộ cấu trúc mã nguồn nguyên bản và theo dõi dòng lệnh thi hành thời gian thực
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Dedicated Playback Toolbar for Tier 2 Code Reader */}
                <div className="flex items-center gap-1.5 bg-[#161b22] px-2.5 py-1 rounded-xl border border-[#30363d] shadow-md">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="p-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-slate-300 transition-colors cursor-pointer"
                    title="Về bước đầu (Phím R)"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                    disabled={currentStep === 0}
                    className="p-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] disabled:opacity-30 text-slate-300 transition-colors cursor-pointer"
                    title="Lùi 1 bước (Phím ←)"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-3 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                      isPlaying
                        ? "bg-rose-600 hover:bg-rose-500 text-white animate-pulse"
                        : "bg-sky-600 hover:bg-sky-500 text-white"
                    }`}
                    title={isPlaying ? "Tạm dừng" : "Chạy tự động mã nguồn"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? "Tạm Dừng" : "Chạy Code"}</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep((p) => Math.min(steps.length - 1, p + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="p-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] disabled:opacity-30 text-slate-300 transition-colors cursor-pointer"
                    title="Tiến 1 bước (Phím →)"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-400 border-l border-[#30363d] pl-2">
                    Bước <strong className="text-cyan-400">{currentStep + 1}</strong>/{steps.length}
                  </span>
                </div>

                {/* Language Switcher Tabs: Pseudocode | Python | Java */}
                <div className="flex bg-[#161b22] p-1 rounded-xl border border-[#30363d]">
                  <button
                    onClick={() => setLang("EN")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      lang === "EN"
                        ? "bg-sky-600 text-white shadow-md"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Mã Giả (Pseudocode)
                  </button>
                  <button
                    onClick={() => setLang("python")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      lang === "python"
                        ? "bg-teal-600 text-white shadow-md"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setLang("java")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      lang === "java"
                        ? "bg-emerald-600 text-white shadow-md"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Java
                  </button>
                </div>
              </div>
            </div>

            {/* Code Lines Display */}
            <div className="font-mono text-xs space-y-1.5 py-2">
              {currentCodeLines.map((item) => {
                const isActive = item.line === activeLine;
                return (
                  <div
                    key={item.line}
                    className={`flex items-center px-4 py-2 rounded-xl transition-all ${
                      isActive
                        ? "bg-[#1f2937] text-sky-300 font-extrabold border-l-4 border-sky-400 shadow-lg scale-[1.005]"
                        : "text-slate-400 hover:text-slate-200 hover:bg-[#161b22]/50"
                    }`}
                  >
                    <span className="w-10 text-[11px] text-slate-500 shrink-0 select-none font-bold">
                      #{item.line}
                    </span>
                    <span className="whitespace-pre flex items-center gap-2">
                      {isActive && <span className="text-sky-400 text-[10px] animate-pulse">▶</span>}
                      <span>{item.text}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#30363d] text-[11px] font-mono text-slate-400 flex justify-between items-center">
              <span>● Đang thi hành bước {currentStep + 1} / {steps.length}</span>
              <span className="text-sky-400 font-bold">● Active Line: #{activeLine}</span>
            </div>
          </div>

          {/* 5. TẦNG 3: THỐNG KÊ CHI TIẾT & BẢNG ĐỘ PHỨC TẠP BỔ TRỢ */}
          <div className="w-full bg-[#161124]/80 backdrop-blur-md p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-4 text-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-wider border-b border-[#30363d] pb-3">
              <Activity className="w-4 h-4 text-sky-400" />
              <span>Bảng Đánh Giá Độ Phức Tạp Thuật Toán & Phân Tích Chuyên Sâu Selection Sort</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-amber-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp tốt nhất (Best)</span>
                <span className="font-mono font-black text-amber-400 text-lg block">O(n²)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Dù mảng đã sắp xếp vẫn phải quét hết để xác nhận min.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-amber-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp trung bình (Avg)</span>
                <span className="font-mono font-black text-amber-400 text-lg block">O(n²)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Luôn cần thực hiện cố định n(n-1)/2 phép so sánh.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-rose-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp xấu nhất (Worst)</span>
                <span className="font-mono font-black text-rose-400 text-lg block">O(n²)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Số phép so sánh luôn luôn không đổi O(n²).</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-cyan-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Bộ nhớ sử dụng (Space)</span>
                <span className="font-mono font-black text-cyan-400 text-lg block">O(1)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Sắp xếp tại chỗ (In-place sort), tối đa n-1 phép hoán đổi.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Comparison vs Bubble Sort */}
      {activeMode === "comparison" && (
        <div className="bg-[#161124]/80 backdrop-blur-md p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
            <div className="p-2.5 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                So sánh hiệu năng: Selection Sort vs Bubble Sort
              </h2>
              <p className="text-xs text-slate-400">
                So sánh số phép so sánh và số lần hoán đổi bộ nhớ thực tế trên cùng một mảng đầu vào.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Selection Sort Card */}
            <div className="p-5 rounded-2xl bg-[#0d1117] border border-[#30363d] space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
                <div className="flex items-center gap-2 font-bold text-sky-300 text-sm">
                  <Crown className="w-4 h-4 text-amber-400" />
                  Selection Sort (Sắp Xếp Chọn)
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#21262d] text-sky-300 text-[10px] font-mono font-bold border border-[#30363d]">
                  Tối đa O(n) Swaps
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-[#161b22] border border-[#30363d]">
                  <span className="text-slate-300">Tổng số phép so sánh:</span>
                  <span className="font-bold text-sky-400">{steps[steps.length - 1]?.comparisons || 0}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-[#161b22] border border-[#30363d]">
                  <span className="text-slate-300">Tổng số lần hoán đổi:</span>
                  <span className="font-bold text-emerald-400">{steps[steps.length - 1]?.swaps || 0}</span>
                </div>
                <p className="text-[11px] font-sans text-slate-400 leading-relaxed pt-1">
                  💡 Selection Sort quét để tìm giá trị nhỏ nhất rồi mới hoán đổi 1 lần ở cuối mỗi Lượt Pass. Do đó số lần hoán đổi ghi bộ nhớ rất ít (tối đa $n-1$).
                </p>
              </div>
            </div>

            {/* Bubble Sort Card */}
            <div className="p-5 rounded-2xl bg-[#0d1117] border border-[#30363d] space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
                <div className="flex items-center gap-2 font-bold text-sky-300 text-sm">
                  <RefreshCw className="w-4 h-4 text-sky-400" />
                  Bubble Sort (Sắp Xếp Nổi Bọt)
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#21262d] text-rose-300 text-[10px] font-mono font-bold border border-[#30363d]">
                  Nhiều Swaps liên tục
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-[#161b22] border border-[#30363d]">
                  <span className="text-slate-300">Tổng số phép so sánh:</span>
                  <span className="font-bold text-sky-400">{bubbleStats.comparisons}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-[#161b22] border border-[#30363d]">
                  <span className="text-slate-300">Tổng số lần hoán đổi:</span>
                  <span className="font-bold text-rose-400">{bubbleStats.swaps}</span>
                </div>
                <p className="text-[11px] font-sans text-slate-400 leading-relaxed pt-1">
                  💡 Bubble Sort liên tục hoán đổi ngay khi phát hiện $a[j] &gt; a[j+1]$, dẫn đến số phép hoán đổi bộ nhớ lớn hơn nhiều so với Selection Sort.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: Unstable Sort Demo */}
      {activeMode === "unstable" && (
        <div className="bg-[#161124]/80 backdrop-blur-md p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
            <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                Demo Tính Không Ổn Định (Unstable Sort Feature)
              </h2>
              <p className="text-xs text-slate-400">
                Giải thích lý do tại sao Selection Sort là thuật toán sắp xếp KHÔNG ỔN ĐỊNH (Unstable).
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs leading-relaxed text-slate-300">
            <p>
              Thuật toán được gọi là <strong>Ổn định (Stable)</strong> nếu thứ tự tương đối giữa các phần tử có giá trị bằng nhau được giữ nguyên sau khi sắp xếp.
            </p>

            <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] space-y-3 font-mono">
              <div className="text-xs font-bold text-sky-300 uppercase">Mảng ví dụ ban đầu:</div>
              <div className="flex items-center gap-2">
                {unstableArray.map((item, idx) => (
                  <div key={idx} className="px-3 py-2 rounded-xl bg-[#21262d] border border-[#30363d] font-bold flex items-center gap-1 text-slate-200">
                    <span>{item.val}</span>
                    {item.tag && <span className="text-[10px] text-amber-400 font-bold">({item.tag})</span>}
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-sans text-slate-400 pt-2">
                Trong ví dụ trên có ba số 5: $5_a, 5_b, 5_c$. Khi Selection Sort hoán đổi phần tử nhỏ nhất $1$ ở cuối với phần tử đầu tiên $5_a$, vị trí tương đối của $5_a$ bị đẩy xuống đằng sau $5_b$ và $5_c$, làm đảo lộn thứ tự ban đầu của các số 5.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Prediction Challenge Modal Dialog */}
      {predictModalOpen && step.predictQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 text-slate-100 relative">
            <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <HelpCircle className="w-5 h-5 text-cyan-400 animate-bounce" />
                Thử Thách Dự Đoán Min (Lượt {step.pass})
              </div>
              <span className="text-xs font-mono text-slate-400">
                Đoạn {step.predictQuestion.rangeText}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Trước khi thuật toán tiến hành quét, theo bạn giá trị <strong>nhỏ nhất (Min)</strong> trong đoạn chưa sắp xếp {step.predictQuestion.rangeText} sẽ là bao nhiêu?
            </p>

            <div className="grid grid-cols-2 gap-3 font-mono">
              {step.predictQuestion.options.map((optVal, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => handleSelectPredictAnswer(optVal, step.predictQuestion)}
                  disabled={predictFeedback !== null}
                  className="p-3 rounded-2xl bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] text-base font-extrabold text-slate-200 hover:text-white transition-all cursor-pointer shadow-md active:scale-95 text-center"
                >
                  {optVal}
                </button>
              ))}
            </div>

            {predictFeedback && (
              <div className={`p-3.5 rounded-2xl text-xs font-bold font-mono text-center border animate-in zoom-in-95 duration-200 ${
                predictFeedback.isCorrect
                  ? "bg-emerald-950/90 border-emerald-500/60 text-emerald-300"
                  : "bg-rose-950/90 border-rose-500/60 text-rose-300"
              }`}>
                {predictFeedback.msg}
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setPredictModalOpen(false);
                  setIsPlaying(true);
                }}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg cursor-pointer transition-all active:scale-95"
              >
                Tiếp tục thuật toán →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
