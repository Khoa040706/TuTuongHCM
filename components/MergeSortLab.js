/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import confetti from "canvas-confetti";
import {
  ArrowLeft,
  RotateCcw,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Shuffle,
  GitBranch,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart2,
  Gauge,
  ArrowDown,
  Layers,
  Code2,
  Info,
  Sliders,
  Keyboard,
  Activity,
  Flame,
  HelpCircle,
  Trophy,
  Check,
  RefreshCw,
  Crown
} from "lucide-react";

// Fixed English Pseudocode definition with Vietnamese Explanations
const PSEUDOCODE_VI = [
  { line: 1, text: "thủ tục MERGE_SORT(arr, left, right):", explain: "Hàm chính sắp xếp trộn mảng arr từ vị trí left đến right" },
  { line: 2, text: "  nếu left >= right thì return // Điểm dừng", explain: "Điều kiện dừng đệ quy: Mảng con chỉ còn 0 hoặc 1 phần tử" },
  { line: 3, text: "  mid = (left + right) / 2", explain: "Tìm chỉ số giữa để chia mảng thành 2 nửa bằng nhau" },
  { line: 4, text: "  MERGE_SORT(arr, left, mid)", explain: "Đệ quy sắp xếp nửa trái từ left đến mid" },
  { line: 5, text: "  MERGE_SORT(arr, mid + 1, right)", explain: "Đệ quy sắp xếp nửa phải từ mid + 1 đến right" },
  { line: 6, text: "  MERGE(arr, left, mid, right)", explain: "Trộn 2 mảng con đã sắp xếp thành 1 mảng hoàn chỉnh" },
  { line: 7, text: "kết thúc thủ tục", explain: "Kết thúc thủ tục MERGE_SORT" },
  { line: 8, text: "thủ tục MERGE(arr, left, mid, right):", explain: "Thủ tục trộn 2 mảng con đã sắp xếp" },
  { line: 9, text: "  khi i <= mid và j <= right lặp:", explain: "Lặp so sánh 2 con trỏ i (nửa trái) và j (nửa phải)" },
  { line: 10, text: "    nếu Left[i] <= Right[j] thì arr[k] = Left[i++]", explain: "Nếu phần tử trái nhỏ hơn hoặc bằng, chép vào vị trí k và tăng i" },
  { line: 11, text: "    ngược lại arr[k] = Right[j++]", explain: "Nếu phần tử phải nhỏ hơn, chép vào vị trí k và tăng j" },
  { line: 12, text: "  chép các phần tử còn lại vào arr[k]", explain: "Sao chép tất cả các phần tử còn lại vào k" },
];

const PSEUDOCODE_EN = [
  { line: 1, text: "procedure MERGE_SORT(arr, left, right):" },
  { line: 2, text: "  if left >= right then return // Base case" },
  { line: 3, text: "  mid = (left + right) / 2" },
  { line: 4, text: "  MERGE_SORT(arr, left, mid)" },
  { line: 5, text: "  MERGE_SORT(arr, mid + 1, right)" },
  { line: 6, text: "  MERGE(arr, left, mid, right)" },
  { line: 7, text: "end procedure" },
  { line: 8, text: "procedure MERGE(arr, left, mid, right):" },
  { line: 9, text: "  while i <= mid and j <= right do:" },
  { line: 10, text: "    if Left[i] <= Right[j] then arr[k] = Left[i++]" },
  { line: 11, text: "    else arr[k] = Right[j++]" },
  { line: 12, text: "  copy remaining elements to arr[k]" },
];

const PYTHON_CODE = [
  { line: 1, text: "def merge_sort(arr, left, right):" },
  { line: 2, text: "    if left >= right: return" },
  { line: 3, text: "    mid = (left + right) // 2" },
  { line: 4, text: "    merge_sort(arr, left, mid)" },
  { line: 5, text: "    merge_sort(arr, mid + 1, right)" },
  { line: 6, text: "    merge(arr, left, mid, right)" },
  { line: 7, text: "def merge(arr, left, mid, right):" },
  { line: 8, text: "    # Compare L[i] vs R[j] and put into arr[k]" },
];

const JAVA_CODE = [
  { line: 1, text: "void mergeSort(int[] arr, int left, int right) {" },
  { line: 2, text: "    if (left >= right) return;" },
  { line: 3, text: "    int mid = (left + right) / 2;" },
  { line: 4, text: "    mergeSort(arr, left, mid);" },
  { line: 5, text: "    mergeSort(arr, mid + 1, right);" },
  { line: 6, text: "    merge(arr, left, mid, right);" },
  { line: 7, text: "}" },
];

// Clean Step Generator for Merge Sort
function generateMergeSortSteps(initialArr, isStabilityTest = false) {
  const steps = [];
  let comparisons = 0;
  let mergeWrites = 0;

  let workingArr = initialArr.map((val, idx) => {
    if (typeof val === "object") return val;
    return {
      value: val,
      id: `elem-${idx}-${val}`,
      tag: isStabilityTest ? `${val}${String.fromCharCode(97 + (idx % 3))}` : `${val}`,
    };
  });

  steps.push({
    activeLine: 1,
    type: "INITIAL",
    status: `Khởi tạo mảng ban đầu với ${workingArr.length} phần tử. Chuẩn bị thực thi Chia để Trị (Divide & Conquer).`,
    currentArray: [...workingArr],
    leftSub: null,
    rightSub: null,
    pointers: null,
    comparisons: 0,
    mergeWrites: 0,
    mergedRanges: [],
    depth: 0
  });

  const mergedRanges = [];

  function mergeSortHelper(left, right, depth = 0) {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);

    const leftSub = workingArr.slice(left, mid + 1);
    const rightSub = workingArr.slice(mid + 1, right + 1);

    steps.push({
      activeLine: 3,
      type: "SPLIT",
      status: `[CHIA ĐÔI] Chia đoạn [${left}..${right}] thành 2 nửa: Trái [${left}..${mid}] (${leftSub.map(e => e.tag).join(", ")}) và Phải [${mid + 1}..${right}] (${rightSub.map(e => e.tag).join(", ")}).`,
      currentArray: [...workingArr],
      leftSub: { arr: leftSub, leftIndex: left },
      rightSub: { arr: rightSub, leftIndex: mid + 1 },
      activeRange: { left, mid, right },
      pointers: null,
      comparisons,
      mergeWrites,
      mergedRanges: [...mergedRanges],
      depth
    });

    mergeSortHelper(left, mid, depth + 1);
    mergeSortHelper(mid + 1, right, depth + 1);

    const L = workingArr.slice(left, mid + 1);
    const R = workingArr.slice(mid + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;

    steps.push({
      activeLine: 6,
      type: "START_MERGE",
      status: `[BẮT ĐẦU TRỘN] Chuẩn bị trộn 2 mảng con: Trái [${left}..${mid}] và Phải [${mid + 1}..${right}] vào đoạn chính [${left}..${right}].`,
      currentArray: [...workingArr],
      leftSub: { arr: L, leftIndex: left, activeIdx: 0 },
      rightSub: { arr: R, leftIndex: mid + 1, activeIdx: 0 },
      activeRange: { left, mid, right },
      pointers: { i: 0, j: 0, k },
      comparisons,
      mergeWrites,
      mergedRanges: [...mergedRanges],
      depth,
      predictQuestion: {
        leftVal: L[0]?.value,
        rightVal: R[0]?.value,
        leftTag: L[0]?.tag,
        rightTag: R[0]?.tag,
        correctSide: L[0]?.value <= R[0]?.value ? "L" : "R",
        correctVal: L[0]?.value <= R[0]?.value ? L[0]?.tag : R[0]?.tag
      }
    });

    while (i < L.length && j < R.length) {
      comparisons++;
      const isLessEqual = L[i].value <= R[j].value;
      const selected = isLessEqual ? L[i] : R[j];
      const fromSide = isLessEqual ? "Trái" : "Phải";

      workingArr[k] = selected;
      mergeWrites++;

      steps.push({
        activeLine: isLessEqual ? 10 : 11,
        type: "MERGE_STEP",
        status: `[SO SÁNH & GÁN ${mergeWrites}] So sánh L[${i}] (${L[i].tag}) vs R[${j}] (${R[j].tag}) ➔ Chọn ${selected.tag} (${fromSide}) đưa vào vị trí k=${k}.`,
        currentArray: [...workingArr],
        leftSub: { arr: L, leftIndex: left, activeIdx: i },
        rightSub: { arr: R, leftIndex: mid + 1, activeIdx: j },
        activeRange: { left, mid, right },
        pointers: { i, j, k },
        comparing: { leftVal: L[i].tag, rightVal: R[j].tag, chosen: isLessEqual ? "left" : "right" },
        targetK: k,
        comparisons,
        mergeWrites,
        mergedRanges: [...mergedRanges],
        depth
      });

      if (isLessEqual) i++;
      else j++;
      k++;
    }

    while (i < L.length) {
      const selected = L[i];
      workingArr[k] = selected;
      mergeWrites++;

      steps.push({
        activeLine: 12,
        type: "COPY_REMAINING",
        status: `[CHÉP DƯ TRÁI] Chép nốt phần tử L[${i}] (${selected.tag}) vào vị trí k=${k}.`,
        currentArray: [...workingArr],
        leftSub: { arr: L, leftIndex: left, activeIdx: i },
        rightSub: { arr: R, leftIndex: mid + 1, activeIdx: j },
        activeRange: { left, mid, right },
        pointers: { i, j: null, k },
        targetK: k,
        comparisons,
        mergeWrites,
        mergedRanges: [...mergedRanges],
        depth
      });

      i++;
      k++;
    }

    while (j < R.length) {
      const selected = R[j];
      workingArr[k] = selected;
      mergeWrites++;

      steps.push({
        activeLine: 12,
        type: "COPY_REMAINING",
        status: `[CHÉP DƯ PHẢI] Chép nốt phần tử R[${j}] (${selected.tag}) vào vị trí k=${k}.`,
        currentArray: [...workingArr],
        leftSub: { arr: L, leftIndex: left, activeIdx: i },
        rightSub: { arr: R, leftIndex: mid + 1, activeIdx: j },
        activeRange: { left, mid, right },
        pointers: { i: null, j, k },
        targetK: k,
        comparisons,
        mergeWrites,
        mergedRanges: [...mergedRanges],
        depth
      });

      j++;
      k++;
    }

    mergedRanges.push({ left, right });

    steps.push({
      activeLine: 7,
      type: "SEGMENT_MERGED",
      status: `[ĐÃ TRỘN XONG] Hoàn tất trộn đoạn [${left}..${right}]: (${workingArr.slice(left, right + 1).map(e => e.tag).join(", ")}).`,
      currentArray: [...workingArr],
      leftSub: null,
      rightSub: null,
      activeRange: { left, mid, right },
      pointers: null,
      comparisons,
      mergeWrites,
      mergedRanges: [...mergedRanges],
      depth
    });
  }

  mergeSortHelper(0, workingArr.length - 1, 0);

  steps.push({
    activeLine: 7,
    type: "ALL_COMPLETE",
    status: `🎉 HOÀN THÀNH MERGE SORT! Mảng đã được sắp xếp tăng dần hoàn hảo sau ${comparisons} phép so sánh và ${mergeWrites} lần gán.`,
    currentArray: [...workingArr],
    leftSub: null,
    rightSub: null,
    pointers: null,
    comparisons,
    mergeWrites,
    isCompleted: true,
    mergedRanges: [{ left: 0, right: workingArr.length - 1 }],
    depth: 0
  });

  return steps;
}

// Compare step count with Bubble Sort
function generateBubbleSortStepsForCompare(initialArr) {
  let arr = initialArr.map((v) => (typeof v === "object" ? v.value : v));
  let steps = 0;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        steps++;
      }
    }
  }
  return steps;
}

export default function MergeSortLab({ onBack }) {
  const [mode, setMode] = useState("simulator"); // 'simulator' | 'speed-compare' | 'stability-test'
  const [arraySize, setArraySize] = useState(8);
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10, 19]);
  const [customInput, setCustomInput] = useState("");

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);

  const [lang, setLang] = useState("EN"); // "EN" | "python" | "java"

  // Prediction Quiz states
  const [enablePredictMode, setEnablePredictMode] = useState(true);
  const [predictModalOpen, setPredictModalOpen] = useState(false);
  const [predictScore, setPredictScore] = useState({ correct: 0, total: 0 });
  const [predictFeedback, setPredictFeedback] = useState(null);

  const timerRef = useRef(null);

  // Generate Random Array
  const handleRandomArray = () => {
    const newArr = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 85) + 10
    );
    setArray(newArr);
    setCurrentStep(0);
    setIsPlaying(false);
    setPredictScore({ correct: 0, total: 0 });
  };

  // Generate Reverse Array (Worst Case)
  const handleReverseArray = () => {
    const sorted = [...array].sort((a, b) => (typeof a === "object" ? a.value - b.value : a - b));
    const reversed = sorted.reverse();
    setArray(reversed);
    setCurrentStep(0);
    setIsPlaying(false);
    setPredictScore({ correct: 0, total: 0 });
  };

  // Mode changes
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsPlaying(false);
    setCurrentStep(0);
    if (newMode === "stability-test") {
      setArray([25, 12, 25, 40, 25, 8]);
    }
  };

  // Sync customInput string whenever array changes
  useEffect(() => {
    const text = array.map((v) => (typeof v === "object" ? v.value : v)).join(", ");
    setCustomInput(text);
  }, [array]);

  // Steps generated memoized
  const steps = useMemo(() => {
    const isStability = mode === "stability-test";
    return generateMergeSortSteps(array, isStability);
  }, [array, mode]);

  const currentStepData = steps[currentStep] || steps[0] || {};
  const isFinished = currentStep === steps.length - 1;
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);

  const maxVal = useMemo(() => {
    const rawVals = (currentStepData.currentArray || array).map(e => typeof e === "object" ? e.value : e);
    return Math.max(...rawVals, 1);
  }, [currentStepData.currentArray, array]);

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          const nextIdx = prev + 1;
          const nextStep = steps[nextIdx];
          
          if (enablePredictMode && nextStep && nextStep.type === "START_MERGE" && nextStep.predictQuestion) {
            setIsPlaying(false);
            setPredictModalOpen(true);
            setPredictFeedback(null);
          }
          return nextIdx;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, speed, steps, enablePredictMode]);

  // Confetti celebration when finished
  useEffect(() => {
    if (isFinished && steps.length > 1) {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#f43f5e"]
        });
      } catch (e) {}
    }
  }, [isFinished, steps.length]);

  // Keyboard Shortcuts Listener (Space, ArrowLeft, ArrowRight, KeyR)
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

  // Custom Input Submit
  const handleCustomInputSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const parsed = customInput
      .split(/[,;\s]+/)
      .map(Number)
      .filter((v) => !isNaN(v) && v > 0 && v <= 999);

    if (parsed.length >= 4 && parsed.length <= 16) {
      setArray(parsed);
      setArraySize(parsed.length);
      setCurrentStep(0);
      setIsPlaying(false);
      setPredictScore({ correct: 0, total: 0 });
    }
  };

  // Prediction answer check
  const handleSelectPredictAnswer = (side, q) => {
    const isCorrect = side === q.correctSide;
    setPredictScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setPredictFeedback({
      isCorrect,
      msg: isCorrect
        ? `✅ Chính xác! Chọn ${q.correctVal} (${q.correctSide === "L" ? "Nửa Trái" : "Nửa Phải"}).`
        : `❌ Chưa đúng. Đúng là ${q.correctVal} (${q.correctSide === "L" ? "Nửa Trái" : "Nửa Phải"}).`
    });
  };

  const bubbleSortStepCount = useMemo(() => {
    return generateBubbleSortStepsForCompare(array);
  }, [array]);

  const activeLine = currentStepData.activeLine || 1;
  const currentCodeLines =
    lang === "VI"
      ? PSEUDOCODE_VI
      : lang === "EN"
      ? PSEUDOCODE_EN
      : lang === "python"
      ? PYTHON_CODE
      : JAVA_CODE;

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
                <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                <span>Merge Sort Lab 3D</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 font-mono uppercase">
              MERGE SORT — SẮP XẾP TRỘN 3D
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Chia mảng đệ quy thành 2 nửa và trộn tăng dần (Divide & Conquer - $O(N \log N)$).
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-[#0d1117] p-1.5 rounded-2xl border border-[#30363d] text-xs font-semibold shadow-inner">
          <button
            onClick={() => handleModeChange("simulator")}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              mode === "simulator"
                ? "bg-sky-600 text-white font-bold shadow-lg shadow-sky-950/60"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. Mô phỏng 3D Sub-Arrays
          </button>
          <button
            onClick={() => handleModeChange("speed-compare")}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              mode === "speed-compare"
                ? "bg-teal-600 text-white font-bold shadow-lg shadow-teal-950/60"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. So sánh vs Bubble Sort
          </button>
          <button
            onClick={() => handleModeChange("stability-test")}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              mode === "stability-test"
                ? "bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-950/60"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            3. Demo Tính Ổn Định
          </button>
        </div>
      </div>

      {/* MODE 1 & MODE 3: Visual Simulator */}
      {(mode === "simulator" || mode === "stability-test") && (
        <div className="space-y-6">
          
          {/* 2. CONFIGURATION CONTROLS */}
          <div className="bg-[#161b22]/90 backdrop-blur-md p-5 rounded-3xl border border-[#30363d] shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-sky-400" />
              <span>Cấu hình mảng & Chế độ thử thách:</span>
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
                    const newArr = Array.from({ length: sz }, () => Math.floor(Math.random() * 85) + 10);
                    setArray(newArr);
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
                  onClick={handleRandomArray}
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
                >
                  <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ngẫu Nhiên</span>
                </button>
                <button
                  onClick={handleReverseArray}
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
                >
                  <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
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
            <form onSubmit={handleCustomInputSubmit} className="flex items-center gap-2 pt-2 border-t border-[#30363d]">
              <span className="text-xs font-bold text-slate-300 shrink-0">Mảng tùy chỉnh:</span>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ví dụ: 38, 27, 43, 3, 9, 82..."
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
            
            {/* Playback Controls Toolbar & Keyboard Hints */}
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
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] disabled:opacity-30 text-slate-300 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
                  title="Bước tiếp (Phím →)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentStep(steps.length - 1)}
                  disabled={currentStep === steps.length - 1}
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] disabled:opacity-30 text-slate-300 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
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
            <div className="relative w-full min-h-[510px] grid grid-cols-12 select-none overflow-hidden rounded-2xl border border-[#30363d] shadow-2xl">
              
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
                      Merge Sort
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

                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                    <div className="p-1.5 bg-[#161b22] rounded-xl border border-[#30363d]">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Trái i</span>
                      <span className="font-extrabold text-sky-400 text-xs">{currentStepData.pointers?.i ?? "-"}</span>
                    </div>
                    <div className="p-1.5 bg-[#161b22] rounded-xl border border-[#30363d]">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Phải j</span>
                      <span className="font-extrabold text-teal-400 text-xs">{currentStepData.pointers?.j ?? "-"}</span>
                    </div>
                    <div className="p-1.5 bg-[#161b22] rounded-xl border border-[#30363d]">
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Đích k</span>
                      <span className="font-extrabold text-emerald-400 text-xs">{currentStepData.pointers?.k ?? "-"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CỘT 2 (CENTER - 7 COLS ~ 50-60%): 3D DUAL-LEVEL MERGE STAGE */}
              <div className="col-span-12 lg:col-span-6 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#0d1117] p-3 md:p-4 flex flex-col justify-between items-center relative border-r border-[#30363d] overflow-hidden">
                
                {/* Status Explanatory Banner */}
                <div className="w-full flex items-center justify-between z-10 px-2.5 py-1.5 bg-[#161b22]/90 rounded-xl border border-[#30363d] backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                    <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate max-w-md">{currentStepData.status}</span>
                  </div>
                  {predictScore.total > 0 && (
                    <div className="text-[11px] font-mono font-bold text-cyan-400 shrink-0 bg-[#21262d] px-2.5 py-0.5 rounded-lg border border-[#30363d]">
                      🎯 Quiz: {predictScore.correct}/{predictScore.total}
                    </div>
                  )}
                </div>

                {/* DUAL-LEVEL 3D BARS STAGE */}
                <div className="relative w-full flex-1 flex flex-col justify-around py-4">
                  
                  {/* UPPER LEVEL: Left Subarray L (Soft Sky Blue) & Right Subarray R (Teal) */}
                  <div className="h-32 w-full flex items-end justify-center gap-2 border-b border-[#30363d] pb-3 relative">
                    <div className="absolute top-0 left-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <span>● Tầng trên: Mảng con L (Sky Blue) & R (Teal)</span>
                    </div>

                    {currentStepData.leftSub || currentStepData.rightSub ? (
                      <div className="flex items-end justify-center gap-6 w-full h-full pt-6">
                        
                        {/* Left Subarray L */}
                        {currentStepData.leftSub && (
                          <div className="flex items-end gap-1.5 bg-sky-950/40 p-2 rounded-2xl border border-sky-700/40 shadow-inner">
                            <span className="absolute -top-3 left-3 text-[9px] font-mono text-sky-300 font-bold bg-sky-900 px-1.5 py-0.5 rounded">
                              L [{currentStepData.leftSub.leftIndex}]
                            </span>
                            {currentStepData.leftSub.arr.map((item, idx) => {
                              const val = typeof item === "object" ? item.value : item;
                              const tag = typeof item === "object" ? item.tag : item;
                              const heightPct = Math.max(20, Math.round((val / maxVal) * 100));
                              const isActive = currentStepData.pointers?.i === idx;
                              return (
                                <div key={`L-${idx}`} className="flex flex-col items-center justify-end h-full w-8">
                                  <div
                                    style={{ height: `${heightPct}%` }}
                                    className={`w-full rounded-t-lg border-t border-x flex flex-col items-center justify-center transition-all ${
                                      isActive
                                        ? "bg-sky-500 border-sky-300 text-slate-950 font-black shadow-lg shadow-sky-500/50 scale-105"
                                        : "bg-sky-900/80 border-sky-700 text-sky-200"
                                    }`}
                                  >
                                    <span className="text-[10px] font-bold">{tag}</span>
                                  </div>
                                  <span className="text-[9px] font-mono text-sky-400 mt-1">L[{idx}]</span>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Right Subarray R */}
                        {currentStepData.rightSub && (
                          <div className="flex items-end gap-1.5 bg-teal-950/40 p-2 rounded-2xl border border-teal-700/40 shadow-inner">
                            <span className="absolute -top-3 right-3 text-[9px] font-mono text-teal-300 font-bold bg-teal-900 px-1.5 py-0.5 rounded">
                              R [{currentStepData.rightSub.leftIndex}]
                            </span>
                            {currentStepData.rightSub.arr.map((item, idx) => {
                              const val = typeof item === "object" ? item.value : item;
                              const tag = typeof item === "object" ? item.tag : item;
                              const heightPct = Math.max(20, Math.round((val / maxVal) * 100));
                              const isActive = currentStepData.pointers?.j === idx;
                              return (
                                <div key={`R-${idx}`} className="flex flex-col items-center justify-end h-full w-8">
                                  <div
                                    style={{ height: `${heightPct}%` }}
                                    className={`w-full rounded-t-lg border-t border-x flex flex-col items-center justify-center transition-all ${
                                      isActive
                                        ? "bg-teal-500 border-teal-300 text-slate-950 font-black shadow-lg shadow-teal-500/50 scale-105"
                                        : "bg-teal-900/80 border-teal-700 text-teal-200"
                                    }`}
                                  >
                                    <span className="text-[10px] font-bold">{tag}</span>
                                  </div>
                                  <span className="text-[9px] font-mono text-teal-400 mt-1">R[{idx}]</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-xs font-mono text-slate-400/60 italic h-full">
                        ● Chưa ở giai đoạn Trộn (Merge Phase)
                      </div>
                    )}
                  </div>

                  {/* LOWER LEVEL: Main Target Array arr[k] (Cyan / Soft Mint) */}
                  <div className="h-36 w-full flex items-end justify-center gap-2 pt-4 relative">
                    <div className="absolute top-1 left-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                      <span>● Tầng dưới: Mảng chính arr[k] (Cyan / Soft Mint)</span>
                    </div>

                    {currentStepData.currentArray.map((item, idx) => {
                      const val = typeof item === "object" ? item.value : item;
                      const tag = typeof item === "object" ? item.tag : item;
                      const heightPct = Math.max(20, Math.round((val / maxVal) * 100));
                      const isTargetK = currentStepData.pointers?.k === idx;
                      const isMerged = currentStepData.mergedRanges?.some(r => idx >= r.left && idx <= r.right);

                      let barBg = "bg-[#21262d] border-[#30363d] text-slate-200";
                      if (isFinished) {
                        barBg = "bg-emerald-500 border-emerald-300 text-slate-950 font-black shadow-lg shadow-emerald-500/40";
                      } else if (isTargetK) {
                        barBg = "bg-cyan-400 border-cyan-200 text-slate-950 font-black shadow-xl shadow-cyan-400/50 animate-bounce";
                      } else if (isMerged) {
                        barBg = "bg-emerald-600/80 border-emerald-400 text-white font-bold";
                      }

                      return (
                        <div key={`arr-${idx}`} className="flex-1 flex flex-col items-center justify-end h-full max-w-[44px] relative">
                          <div
                            style={{ height: `${heightPct}%` }}
                            className={`w-full rounded-t-xl border-t border-x flex flex-col items-center justify-center transition-all duration-300 ${barBg}`}
                          >
                            <span className="text-xs font-extrabold">{tag}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 mt-1">[{idx}]</span>
                          {isTargetK && <span className="text-[9px] font-mono text-cyan-400 font-bold -bottom-4 absolute">▲ k</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Series Completion Banner if finished */}
                {isFinished && (
                  <div className="w-full z-10 p-3 bg-gradient-to-r from-emerald-950 via-slate-900 to-sky-950 rounded-2xl border border-emerald-500/50 shadow-xl flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold font-mono">
                      <Trophy className="w-5 h-5 text-amber-400 animate-bounce shrink-0" />
                      <span>🎉 CHÚC MỪNG HOÀN THÀNH 100% CHUỖI BÀI MÔ PHỎNG THUẬT TOÁN SORT!</span>
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
                      <span className="text-lg font-black text-sky-400 font-mono">{currentStepData.comparisons || 0}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                      <span className="text-xs font-bold text-slate-400 uppercase">Ghi mảng (Writes)</span>
                      <span className="text-lg font-black text-cyan-400 font-mono">{currentStepData.mergeWrites || 0}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                      <span className="text-xs font-bold text-slate-400 uppercase">Độ sâu đệ quy</span>
                      <span className="text-sm font-black text-emerald-400 font-mono">Depth {currentStepData.depth || 0}</span>
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
                    <span>Độ phức tạp Merge Sort:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between">
                      <span className="text-slate-400 text-[9px] uppercase font-semibold">Tốt nhất (Best)</span>
                      <span className="font-mono font-bold text-emerald-400">O(N log N)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between">
                      <span className="text-slate-400 text-[9px] uppercase font-semibold">Bộ nhớ (Space)</span>
                      <span className="font-mono font-bold text-cyan-400">O(N)</span>
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
                    Mã Giả Full & Trình Đọc Mã Nguồn Thuật Toán [MERGE SORT]
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
              <span>Bảng Đánh Giá Độ Phức Tạp Thuật Toán & Phân Tích Chuyên Sâu Merge Sort</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-emerald-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp tốt nhất (Best)</span>
                <span className="font-mono font-black text-emerald-400 text-lg block">O(N log N)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Luôn luôn thực hiện chia đôi mảng và trộn đệ quy.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-emerald-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp trung bình (Avg)</span>
                <span className="font-mono font-black text-emerald-400 text-lg block">O(N log N)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Số phép so sánh cố định không phụ thuộc thứ tự mảng đầu vào.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-emerald-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp xấu nhất (Worst)</span>
                <span className="font-mono font-black text-emerald-400 text-lg block">O(N log N)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Hiệu năng cực kỳ ổn định trong mọi trường hợp.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-cyan-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
                <span className="text-slate-400 font-semibold block text-[11px]">Bộ nhớ sử dụng (Space)</span>
                <span className="font-mono font-black text-cyan-400 text-lg block">O(N)</span>
                <p className="text-[11px] text-slate-400 leading-snug">Cần mảng phụ tạm thời để lưu các nửa mảng con khi Trộn.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Speed Compare vs Bubble Sort */}
      {mode === "speed-compare" && (
        <div className="bg-[#161124]/80 backdrop-blur-md p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
            <div className="p-2.5 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                So sánh hiệu năng: Merge Sort ($O(N \log N)$) vs Bubble Sort ($O(N^2)$)
              </h2>
              <p className="text-xs text-slate-400">
                Chứng minh sự chênh lệch vượt trội về tốc độ xử lý khi kích thước dữ liệu $N$ tăng lên.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0d1117] border border-[#30363d] space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
                <div className="flex items-center gap-2 font-bold text-sky-300 text-sm">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  Merge Sort (Sắp Xếp Trộn)
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#21262d] text-emerald-300 text-[10px] font-mono font-bold border border-[#30363d]">
                  O(N log N) Nhanh Vượt Trội
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-[#161b22] border border-[#30363d]">
                  <span className="text-slate-300">Tổng số bước thực thi:</span>
                  <span className="font-bold text-emerald-400">{steps.length} bước</span>
                </div>
                <p className="text-[11px] font-sans text-slate-400 leading-relaxed pt-1">
                  💡 Nhờ cơ chế Chia để Trị, số lần thao tác chỉ tỷ lệ thuận với $N \log N$, giúp xử lý dữ liệu lớn trong thời gian ngắn.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1117] border border-[#30363d] space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
                <div className="flex items-center gap-2 font-bold text-slate-300 text-sm">
                  <RefreshCw className="w-4 h-4 text-rose-400" />
                  Bubble Sort (Sắp Xếp Nổi Bọt)
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#21262d] text-rose-300 text-[10px] font-mono font-bold border border-[#30363d]">
                  O(N²) Chậm Khi N Lớn
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-[#161b22] border border-[#30363d]">
                  <span className="text-slate-300">Ước tính số bước:</span>
                  <span className="font-bold text-rose-400">{bubbleSortStepCount} bước</span>
                </div>
                <p className="text-[11px] font-sans text-slate-400 leading-relaxed pt-1">
                  💡 Với hai vòng lặp lồng nhau, Bubble Sort có số phép so sánh tăng theo hàm bình phương $N^2$, rất chậm khi dữ liệu lớn.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prediction Challenge Modal Dialog */}
      {predictModalOpen && currentStepData.predictQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#161b22] border border-[#30363d] rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 text-slate-100 relative">
            <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <HelpCircle className="w-5 h-5 text-cyan-400 animate-bounce" />
                Thử Thách Dự Đoán Merge Step
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Đang so sánh <strong>L[i] ({currentStepData.predictQuestion.leftTag})</strong> vs <strong>R[j] ({currentStepData.predictQuestion.rightTag})</strong>. Phần tử nào sẽ được chép vào vị trí <strong>k</strong> tiếp theo?
            </p>

            <div className="grid grid-cols-2 gap-3 font-mono">
              <button
                onClick={() => handleSelectPredictAnswer("L", currentStepData.predictQuestion)}
                disabled={predictFeedback !== null}
                className="p-3.5 rounded-2xl bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] text-slate-200 hover:text-white transition-all cursor-pointer shadow-md active:scale-95 text-center flex flex-col items-center gap-1"
              >
                <span className="text-[10px] text-sky-400 uppercase font-bold">Nửa Trái (L)</span>
                <span className="text-lg font-black text-sky-300">{currentStepData.predictQuestion.leftTag}</span>
              </button>

              <button
                onClick={() => handleSelectPredictAnswer("R", currentStepData.predictQuestion)}
                disabled={predictFeedback !== null}
                className="p-3.5 rounded-2xl bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] text-slate-200 hover:text-white transition-all cursor-pointer shadow-md active:scale-95 text-center flex flex-col items-center gap-1"
              >
                <span className="text-[10px] text-teal-400 uppercase font-bold">Nửa Phải (R)</span>
                <span className="text-lg font-black text-teal-300">{currentStepData.predictQuestion.rightTag}</span>
              </button>
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
