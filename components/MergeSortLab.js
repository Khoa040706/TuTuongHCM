"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  RotateCcw,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Plus,
  Trash2,
  Shuffle,
  GitBranch,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart2,
  ArrowDown,
  ArrowRight,
  Tag,
  Gauge
} from "lucide-react";

// ==========================================
// 1. PSEUDOCODE DEFINITIONS
// ==========================================

const PSEUDOCODE = [
  { line: 1, text: "procedure MERGE_SORT(arr, left, right)" },
  { line: 2, text: "  if left >= right then return // Base Case" },
  { line: 3, text: "  mid = (left + right) / 2" },
  { line: 4, text: "  MERGE_SORT(arr, left, mid) // Chia nửa trái" },
  { line: 5, text: "  MERGE_SORT(arr, mid + 1, right) // Chia nửa phải" },
  { line: 6, text: "  MERGE(arr, left, mid, right) // Trộn 2 nửa" },
  { line: 7, text: "end procedure" },
  { line: 8, text: "procedure MERGE(arr, left, mid, right)" },
  { line: 9, text: "  while i <= mid and j <= right do" },
  { line: 10, text: "    if Left[i] <= Right[j] then arr[k] = Left[i++];" },
  { line: 11, text: "    else arr[k] = Right[j++];" },
  { line: 12, text: "  end while; chép nốt phần dư" },
  { line: 13, text: "end procedure" },
];

// ==========================================
// 2. STEP GENERATOR ENGINE
// ==========================================

function generateMergeSortSteps(initialArr, isStabilityTest = false) {
  const steps = [];
  let comparisons = 0;
  let mergeWrites = 0;

  // Format elements (if stability test, attach tag like 5a, 5b)
  let workingArr = initialArr.map((val, idx) => {
    if (typeof val === "object") return val;
    return {
      value: val,
      id: `elem-${idx}-${val}`,
      tag: isStabilityTest ? `${val}${String.fromCharCode(97 + idx % 3)}` : `${val}`,
    };
  });

  // Step 1: Initial state
  steps.push({
    activeLine: 1,
    status: `Khởi tạo mảng ban đầu với ${workingArr.length} phần tử. Thuật toán Merge Sort chuẩn bị thực thi Chia để Trị.`,
    treeLevels: [{ level: 0, subArrays: [{ arr: [...workingArr], leftIndex: 0 }] }],
    currentArray: [...workingArr],
    pointers: null,
    comparisons: 0,
    mergeWrites: 0,
  });

  // Structure to store current state of sub-array tree levels
  const treeLevelsMap = {};
  treeLevelsMap[0] = [{ arr: [...workingArr], leftIndex: 0 }];

  function mergeSortHelper(arr, left, right, depth = 0) {
    if (left >= right) {
      steps.push({
        activeLine: 2,
        status: `[Base Case] Mảng con tại vị trí [${left}] chỉ có 1 phần tử (${arr[left].tag}). Đã tự sắp xếp.`,
        currentArray: [...workingArr],
        pointers: null,
        comparisons,
        mergeWrites,
        highlightSubArray: { left, right },
      });
      return;
    }

    const mid = Math.floor((left + right) / 2);

    // Record split step
    const leftSub = arr.slice(left, mid + 1);
    const rightSub = arr.slice(mid + 1, right + 1);

    if (!treeLevelsMap[depth + 1]) treeLevelsMap[depth + 1] = [];
    treeLevelsMap[depth + 1].push({ arr: leftSub, leftIndex: left });
    treeLevelsMap[depth + 1].push({ arr: rightSub, leftIndex: mid + 1 });

    steps.push({
      activeLine: 3,
      status: `[CHIA ĐÔI] Chia mảng từ [${left}...${right}] thành 2 mảng con: Trái [${left}...${mid}] và Phải [${
        mid + 1
      }...${right}].`,
      currentArray: [...workingArr],
      pointers: null,
      comparisons,
      mergeWrites,
      highlightSubArray: { left, right, mid },
    });

    // Recurse Left
    steps.push({
      activeLine: 4,
      status: `[ĐỆ QUY TRÁI] Đệ quy sắp xếp mảng con bên Trái [${left}...${mid}].`,
      currentArray: [...workingArr],
      pointers: null,
      comparisons,
      mergeWrites,
    });
    mergeSortHelper(arr, left, mid, depth + 1);

    // Recurse Right
    steps.push({
      activeLine: 5,
      status: `[ĐỆ QUY PHẢI] Đệ quy sắp xếp mảng con bên Phải [${mid + 1}...${right}].`,
      currentArray: [...workingArr],
      pointers: null,
      comparisons,
      mergeWrites,
    });
    mergeSortHelper(arr, mid + 1, right, depth + 1);

    // Merge Phase
    steps.push({
      activeLine: 6,
      status: `[TRỘN] Chuẩn bị trộn 2 mảng con đã sắp xếp: Trái [${left}...${mid}] và Phải [${
        mid + 1
      }...${right}].`,
      currentArray: [...workingArr],
      pointers: null,
      comparisons,
      mergeWrites,
      highlightMerge: { left, mid, right },
    });

    // Perform Actual Merge with Step Snapshots
    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;

    while (i < L.length && j < R.length) {
      comparisons++;

      const isLessEqual = L[i].value <= R[j].value;
      const compText = isLessEqual
        ? `L[${i}] (${L[i].tag}) <= R[${j}] (${R[j].tag})`
        : `R[${j}] (${R[j].tag}) < L[${i}] (${L[i].tag})`;

      steps.push({
        activeLine: 10,
        status: `[SO SÁNH ${comparisons}] So sánh: ${compText} ➔ Đưa ${
          isLessEqual ? L[i].tag : R[j].tag
        } vào mảng kết quả tại vị trí ${k}.`,
        currentArray: [...workingArr],
        pointers: { i: left + i, j: mid + 1 + j, k },
        comparisons,
        mergeWrites,
        comparingValues: { leftVal: L[i].tag, rightVal: R[j].tag },
      });

      if (isLessEqual) {
        workingArr[k] = L[i];
        i++;
      } else {
        workingArr[k] = R[j];
        j++;
      }
      mergeWrites++;
      k++;

      steps.push({
        activeLine: 11,
        status: `[GÁN TRỘN ${mergeWrites}] Đã chép phần tử vào vị trí ${k - 1}. Mảng hiện tại được cập nhật.`,
        currentArray: [...workingArr],
        pointers: { i: left + i, j: mid + 1 + j, k },
        comparisons,
        mergeWrites,
      });
    }

    // Copy remaining left elements
    while (i < L.length) {
      workingArr[k] = L[i];
      mergeWrites++;
      steps.push({
        activeLine: 12,
        status: `[CHÉP DƯ TRÁI] Chép nốt phần tử ${L[i].tag} từ mảng con trái vào vị trí ${k}.`,
        currentArray: [...workingArr],
        pointers: { i: left + i, j: null, k },
        comparisons,
        mergeWrites,
      });
      i++;
      k++;
    }

    // Copy remaining right elements
    while (j < R.length) {
      workingArr[k] = R[j];
      mergeWrites++;
      steps.push({
        activeLine: 12,
        status: `[CHÉP DƯ PHẢI] Chép nốt phần tử ${R[j].tag} từ mảng con phải vào vị trí ${k}.`,
        currentArray: [...workingArr],
        pointers: { i: null, j: mid + 1 + j, k },
        comparisons,
        mergeWrites,
      });
      j++;
      k++;
    }
  }

  mergeSortHelper(workingArr, 0, workingArr.length - 1, 0);

  // Final Completion Step
  steps.push({
    activeLine: 7,
    status: `🎉 HOÀN THÀNH MERGE SORT! Mảng đã được sắp xếp tăng dần hoàn hảo sau ${comparisons} phép so sánh và ${mergeWrites} lần gán trộn.`,
    currentArray: [...workingArr],
    pointers: null,
    comparisons,
    mergeWrites,
    isCompleted: true,
  });

  return steps;
}

// Generate Bubble Sort Steps for Speed Comparison Mode
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

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

export default function MergeSortLab({ onBack }) {
  // Mode State
  const [mode, setMode] = useState("simulator"); // 'simulator' | 'speed-compare' | 'stability-test'

  // Array Config
  const [arraySize, setArraySize] = useState(8);
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10, 19]);
  const [customInput, setCustomInput] = useState("");

  // Animation Engine State
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);

  const timerRef = useRef(null);

  // Generate Random Array
  const handleRandomArray = () => {
    const newArr = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 85) + 10
    );
    setArray(newArr);
  };

  // Generate Reverse Array (Worst Case)
  const handleReverseArray = () => {
    const sorted = [...array].sort((a, b) => (typeof a === "object" ? a.value - b.value : a - b));
    const reversed = sorted.reverse();
    setArray(reversed);
  };

  // Set Stability Test Array
  const handleSetStabilityArray = () => {
    // Array with duplicates: 5a, 2, 5b, 8, 5c
    const stabilityArr = [25, 12, 25, 40, 25, 8];
    setArray(stabilityArr);
  };

  // Re-generate steps when inputs change
  useEffect(() => {
    if (mode === "stability-test") {
      handleSetStabilityArray();
    }
  }, [mode]);

  useEffect(() => {
    const isStability = mode === "stability-test";
    const generated = generateMergeSortSteps(array, isStability);
    setSteps(generated);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [array, mode]);

  // Playback timer loop
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

  // Controls Handlers
  const handleTogglePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleStepBack = () => {
    setIsPlaying(false);
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleSkipToEnd = () => {
    setIsPlaying(false);
    setCurrentStep(steps.length - 1);
  };

  // Handle Custom Input
  const handleCustomInputSubmit = () => {
    if (!customInput.trim()) return;
    const parsed = customInput
      .split(/[,;\s]+/)
      .map(Number)
      .filter((v) => !isNaN(v) && v > 0 && v <= 999);

    if (parsed.length >= 4 && parsed.length <= 16) {
      setArray(parsed);
      setArraySize(parsed.length);
      setCustomInput("");
    }
  };

  const currentStepData = steps[currentStep] || {};
  const currentArrayState = currentStepData.currentArray || array;

  // Calculate Speed Compare Steps Count
  const bubbleSortStepCount = useMemo(() => {
    return generateBubbleSortStepsForCompare(array);
  }, [array]);

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300 pb-12">
      {/* TIER 1: HEADER & CONFIGURATION BAR */}
      <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                <GitBranch className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Mô Phỏng Thuật Toán Merge Sort (Sắp Xếp Trộn)
                </h1>
                <p className="text-xs text-slate-500 font-mono">
                  Chia để Trị (Divide & Conquer) • Con trỏ i, j, k • O(N log N)
                </p>
              </div>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => setMode("simulator")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "simulator"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>1. Mô phỏng Cây Mảng Con</span>
            </button>
            <button
              onClick={() => setMode("speed-compare")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "speed-compare"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>2. So sánh vs Bubble Sort</span>
            </button>
            <button
              onClick={() => setMode("stability-test")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "stability-test"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>3. Kiểm tra Tính Ổn định</span>
            </button>
          </div>
        </div>

        {/* Input Configuration Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Slider size */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700">Kích thước:</span>
              <input
                type="range"
                min="6"
                max="16"
                value={arraySize}
                onChange={(e) => {
                  const size = Number(e.target.value);
                  setArraySize(size);
                  const newArr = Array.from(
                    { length: size },
                    () => Math.floor(Math.random() * 85) + 10
                  );
                  setArray(newArr);
                }}
                className="w-28 accent-indigo-600 cursor-pointer"
              />
              <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg border border-indigo-100">
                {arraySize} phần tử
              </span>
            </div>

            <div className="h-4 w-px bg-slate-200" />

            {/* Random & Reverse buttons */}
            <button
              onClick={handleRandomArray}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tạo ngẫu nhiên</span>
            </button>

            <button
              onClick={handleReverseArray}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
              <span>Mảng đảo ngược (Worst Case)</span>
            </button>
          </div>

          {/* Custom Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCustomInputSubmit()}
              placeholder="38, 27, 43, 3, 9..."
              className="w-44 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleCustomInputSubmit}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              Nhập mảng
            </button>
          </div>
        </div>
      </div>

      {/* TIER 2: FULL-WIDTH SIMULATION CANVAS & PLAYBACK TOOLBAR */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
        {/* Canvas Header Bar */}
        <div className="px-6 py-4 bg-slate-100/90 text-slate-800 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider uppercase text-cyan-600 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              <span>Canvas Mô Phỏng Merge Sort</span>
            </span>

            <span className="text-xs text-slate-500 font-mono">
              Bước {currentStep + 1} / {steps.length || 1}
            </span>
          </div>

          {/* Active Pseudocode Line Badge */}
          <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 max-w-xl overflow-hidden shadow-sm">
            <span className="text-[11px] font-mono text-slate-400 shrink-0">💻 Code:</span>
            <span className="text-xs font-mono font-semibold text-cyan-300 truncate">
              {PSEUDOCODE.find((p) => p.line === currentStepData.activeLine)?.text ||
                "Sẵn sàng..."}
            </span>
          </div>
        </div>

        {/* Visual Workspace Canvas (Light Mode Background) */}
        <div className="relative w-full min-h-[440px] bg-slate-50 overflow-hidden flex flex-col items-center justify-center p-6 select-none border-b border-slate-200/60">
          {/* Light Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {mode === "speed-compare" ? (
            /* SPEED COMPARISON CANVAS (Merge Sort vs Bubble Sort) */
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Merge Sort Box */}
              <div className="p-5 bg-white rounded-3xl border border-indigo-200 shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">Merge Sort</h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    O(N log N)
                  </span>
                </div>
                <div className="text-center py-4">
                  <span className="text-xs text-slate-500 block font-mono">Tổng số bước thực thi</span>
                  <span className="text-3xl font-extrabold text-indigo-600 font-mono">
                    {steps.length} bước
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl">
                  Nhờ cơ chế Chia để Trị, Merge Sort luôn chia mảng thành $\log_2 N$ tầng đệ quy,
                  giúp giảm thời gian thực thi vượt trội khi $N$ lớn.
                </p>
              </div>

              {/* Bubble Sort Box */}
              <div className="p-5 bg-white rounded-3xl border border-rose-200 shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">Bubble Sort</h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                    O(N²)
                  </span>
                </div>
                <div className="text-center py-4">
                  <span className="text-xs text-slate-500 block font-mono">Tổng số bước thực thi</span>
                  <span className="text-3xl font-extrabold text-rose-600 font-mono">
                    {bubbleSortStepCount} bước
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl">
                  Bubble Sort sử dụng 2 vòng lặp lồng nhau $O(N^2)$, thực hiện số phép so sánh nhiều
                  hơn gấp <strong>{Math.round(bubbleSortStepCount / (steps.length || 1))} lần</strong>!
                </p>
              </div>
            </div>
          ) : (
            /* STANDARD SUB-ARRAY TREE & POINTER SIMULATOR */
            <div className="w-full flex flex-col items-center justify-center gap-6 relative z-10">
              {/* Main Array Display (Current State) */}
              <div className="w-full max-w-3xl flex items-center justify-center gap-2 sm:gap-3">
                {currentArrayState.map((elem, idx) => {
                  const val = typeof elem === "object" ? elem.value : elem;
                  const tagLabel = typeof elem === "object" ? elem.tag : val;

                  const isI = currentStepData.pointers?.i === idx;
                  const isJ = currentStepData.pointers?.j === idx;
                  const isK = currentStepData.pointers?.k === idx;

                  let cardBg = "bg-white border-slate-200 text-slate-800 shadow-sm";
                  let pointerLabel = null;

                  if (isK) {
                    cardBg = "bg-indigo-600 border-indigo-700 text-white font-extrabold shadow-lg scale-105 ring-2 ring-indigo-300";
                    pointerLabel = "▼ k (Target)";
                  } else if (isI) {
                    cardBg = "bg-amber-400 border-amber-500 text-slate-950 font-extrabold shadow-md scale-105";
                    pointerLabel = "▲ i (Trái)";
                  } else if (isJ) {
                    cardBg = "bg-cyan-400 border-cyan-500 text-slate-950 font-extrabold shadow-md scale-105";
                    pointerLabel = "▲ j (Phải)";
                  } else if (currentStepData.isCompleted) {
                    cardBg = "bg-emerald-500 border-emerald-600 text-white font-bold";
                  }

                  return (
                    <div key={idx} className="flex flex-col items-center gap-1.5 flex-1 max-w-[58px]">
                      {/* Top Pointer Tag */}
                      <span className="text-[10px] font-mono font-bold text-indigo-600 h-4">
                        {pointerLabel || ""}
                      </span>

                      {/* Element Value Box */}
                      <div
                        className={`w-full h-14 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300 ${cardBg}`}
                      >
                        <span className="text-sm font-mono font-extrabold">
                          {mode === "stability-test" ? tagLabel : val}
                        </span>
                        <span className="text-[9px] opacity-60 font-mono">[{idx}]</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Comparing Pair Badge (if active comparison) */}
              {currentStepData.comparingValues && (
                <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-2xl text-xs font-mono text-amber-900 font-bold flex items-center gap-2 animate-bounce shadow-xs">
                  <span>So sánh:</span>
                  <span className="bg-amber-400 px-2 py-0.5 rounded text-slate-950">
                    {currentStepData.comparingValues.leftVal}
                  </span>
                  <span>vs</span>
                  <span className="bg-cyan-400 px-2 py-0.5 rounded text-slate-950">
                    {currentStepData.comparingValues.rightVal}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Step Explanation Status Banner */}
        <div className="px-6 py-3 bg-indigo-50/70 border-t border-indigo-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs font-medium text-indigo-950">
              {currentStepData.status || "Sẵn sàng chạy mô phỏng Merge Sort."}
            </p>
          </div>

          {currentStepData.isCompleted && (
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Hoàn thành Merge Sort!
            </span>
          )}
        </div>

        {/* Playback Controls Toolbar */}
        <div className="px-6 py-3.5 bg-slate-50 text-slate-700 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Khởi tạo lại"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleStepBack}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Lùi lại 1 bước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleTogglePlay}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Chạy tự động</span>
                </>
              )}
            </button>
            <button
              onClick={handleStepForward}
              disabled={currentStep >= steps.length - 1}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Tất cả bước tiếp theo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleSkipToEnd}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Nhảy đến kết thúc"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Slider */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Tốc độ:</span>
            <input
              type="range"
              min="200"
              max="1500"
              step="100"
              value={1700 - speed}
              onChange={(e) => setSpeed(1700 - Number(e.target.value))}
              className="w-32 accent-indigo-600 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-indigo-600 w-12 text-right">
              {speed}ms
            </span>
          </div>
        </div>
      </div>

      {/* TIER 3: BOTTOM SPLIT GRID (METRICS VS PSEUDOCODE PANEL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN (6 Cols): METRICS & LOG */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Chỉ số thực thi Merge Sort
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <span className="text-[10px] font-mono text-slate-500 block">Số phép so sánh</span>
                <span className="text-sm font-mono font-bold text-indigo-600">
                  {currentStepData.comparisons || 0}
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <span className="text-[10px] font-mono text-slate-500 block">Số lần gán / trộn</span>
                <span className="text-sm font-mono font-bold text-purple-600">
                  {currentStepData.mergeWrites || 0}
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <span className="text-[10px] font-mono text-slate-500 block">
                  Độ sâu cây log₂N
                </span>
                <span className="text-sm font-mono font-bold text-emerald-600">
                  {Math.ceil(Math.log2(array.length))} tầng
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (6 Cols): PSEUDOCODE HIGHLIGHT PANEL (DARK MODE ONLY) */}
        <div className="lg:col-span-6 bg-slate-900 text-slate-100 p-5 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Mã Giả Thuật Toán Merge Sort</h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                Pseudocode
              </span>
            </div>

            {/* Line-by-Line Pseudocode Rendering */}
            <div className="flex flex-col gap-1 font-mono text-xs">
              {PSEUDOCODE.map((item) => {
                const isActive = item.line === currentStepData.activeLine;
                return (
                  <div
                    key={item.line}
                    className={`px-3 py-1.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-indigo-600/90 text-white font-extrabold border-l-4 border-cyan-400 scale-[1.02] shadow-md"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 w-4 text-right">
                        {item.line}
                      </span>
                      <span>{item.text}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider animate-pulse">
                        Đang chạy
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Theoretical Complexity Summary Badge */}
          <div className="mt-6 border-t border-slate-800 pt-4 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Độ phức tạp thời gian:</span>
              <span className="text-cyan-400 font-bold">O(N log N) mọi trường hợp</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Độ phức tạp bộ nhớ phụ:</span>
              <span className="text-indigo-400 font-bold">O(N) mảng phụ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
