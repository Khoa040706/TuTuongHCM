/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
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
  Info
} from "lucide-react";

// Fixed English Pseudocode definition with Vietnamese Explanations side-by-side
const PSEUDOCODE = [
  { line: 1, text: "procedure MERGE_SORT(arr, left, right)", explain: "Hàm chính sắp xếp trộn mảng arr từ vị trí left đến right" },
  { line: 2, text: "  if left >= right then return // Base Case", explain: "Điều kiện dừng đệ quy: Mảng con chỉ còn 0 hoặc 1 phần tử" },
  { line: 3, text: "  mid = (left + right) / 2", explain: "Tìm chỉ số giữa để chia mảng thành 2 nửa bằng nhau" },
  { line: 4, text: "  MERGE_SORT(arr, left, mid)", explain: "Đệ quy sắp xếp nửa trái từ left đến mid" },
  { line: 5, text: "  MERGE_SORT(arr, mid + 1, right)", explain: "Đệ quy sắp xếp nửa phải từ mid + 1 đến right" },
  { line: 6, text: "  MERGE(arr, left, mid, right)", explain: "Trộn 2 mảng con đã sắp xếp thành 1 mảng hoàn chỉnh" },
  { line: 7, text: "end procedure", explain: "Kết thúc thủ tục MERGE_SORT" },
  { line: 8, text: "procedure MERGE(arr, left, mid, right)", explain: "Thủ tục trộn 2 mảng con đã sắp xếp" },
  { line: 9, text: "  while i <= mid and j <= right do", explain: "Lặp so sánh 2 con trỏ i (nửa trái) và j (nửa phải)" },
  { line: 10, text: "    if Left[i] <= Right[j] then arr[k] = Left[i++]", explain: "Nếu phần tử trái nhỏ hơn hoặc bằng, chép vào vị trí k và tăng i" },
  { line: 11, text: "    else arr[k] = Right[j++]", explain: "Nếu phần tử phải nhỏ hơn, chép vào vị trí k và tăng j" },
  { line: 12, text: "  end while; copy remaining elements", explain: "Sao chép tất cả các phần tử còn lại của mảng chưa hết vào k" },
  { line: 13, text: "end procedure", explain: "Kết thúc thủ tục MERGE" },
];

// Clean Step Generator: Only meaningful algorithmic steps
function generateMergeSortSteps(initialArr, isStabilityTest = false) {
  const steps = [];
  let comparisons = 0;
  let mergeWrites = 0;

  // Wrap values into element objects with unique IDs and tags
  let workingArr = initialArr.map((val, idx) => {
    if (typeof val === "object") return val;
    return {
      value: val,
      id: `elem-${idx}-${val}`,
      tag: isStabilityTest ? `${val}${String.fromCharCode(97 + (idx % 3))}` : `${val}`,
    };
  });

  // Step 0: Initial State
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
    mergedRanges: []
  });

  const mergedRanges = []; // Track fully merged ranges [left, right]

  function mergeSortHelper(left, right, depth = 0) {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);

    // Step: Split Range
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
      mergedRanges: [...mergedRanges]
    });

    // Recurse Left
    mergeSortHelper(left, mid, depth + 1);

    // Recurse Right
    mergeSortHelper(mid + 1, right, depth + 1);

    // Merge Phase
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
      mergedRanges: [...mergedRanges]
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
        mergedRanges: [...mergedRanges]
      });

      if (isLessEqual) i++;
      else j++;
      k++;
    }

    // Copy remaining left
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
        mergedRanges: [...mergedRanges]
      });

      i++;
      k++;
    }

    // Copy remaining right
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
        mergedRanges: [...mergedRanges]
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
      mergedRanges: [...mergedRanges]
    });
  }

  mergeSortHelper(0, workingArr.length - 1, 0);

  // Final step
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
    mergedRanges: [{ left: 0, right: workingArr.length - 1 }]
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
  };

  // Generate Reverse Array (Worst Case)
  const handleReverseArray = () => {
    const sorted = [...array].sort((a, b) => (typeof a === "object" ? a.value - b.value : a - b));
    const reversed = sorted.reverse();
    setArray(reversed);
    setCurrentStep(0);
    setIsPlaying(false);
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
  const currentArrayState = currentStepData.currentArray || array;

  // Auto-play timer
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

  const handleTogglePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Custom Input
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
      setCurrentStep(0);
      setIsPlaying(false);
    }
  };

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

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => handleModeChange("simulator")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "simulator"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>1. Mô phỏng Trực Quan Sub-Arrays</span>
            </button>
            <button
              onClick={() => handleModeChange("speed-compare")}
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
              onClick={() => handleModeChange("stability-test")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                mode === "stability-test"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>3. Kiểm tra Tính Ổn Định</span>
            </button>
          </div>
        </div>

        {/* Input Config Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-700">Kích thước:</span>
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
              }}
              className="w-28 accent-indigo-600 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
              {arraySize} phần tử
            </span>

            <div className="h-4 w-px bg-slate-200" />

            <button
              onClick={handleRandomArray}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ngẫu nhiên</span>
            </button>

            <button
              onClick={handleReverseArray}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
              <span>Mảng ngược (Worst Case)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 shrink-0">Mảng hiện tại:</span>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCustomInputSubmit()}
              placeholder="38, 27, 43, 3, 9..."
              className="w-56 md:w-72 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
            <button
              onClick={handleCustomInputSubmit}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      {/* TIER 2: CANVAS & PLAYBACK TOOLBAR */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
        {/* Canvas Header */}
        <div className="px-6 py-4 bg-slate-100/90 text-slate-800 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider uppercase text-cyan-600 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              <span>Canvas Mô Phỏng Merge Sort</span>
            </span>

            <span className="text-xs font-mono font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
              Bước {currentStep + 1} / {steps.length || 1}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 max-w-xl overflow-hidden shadow-sm">
            <span className="text-[11px] font-mono text-slate-400 shrink-0">💻 Code:</span>
            <span className="text-xs font-mono font-semibold text-cyan-300 truncate">
              {PSEUDOCODE.find((p) => p.line === currentStepData.activeLine)?.text || "Sẵn sàng..."}
            </span>
          </div>
        </div>

        {/* Visual Canvas Area */}
        <div className="relative w-full min-h-[460px] bg-slate-50 overflow-hidden flex flex-col items-center justify-center p-6 select-none border-b border-slate-200/60">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {mode === "speed-compare" ? (
            <div className="w-full max-w-4xl flex flex-col gap-6 relative z-10 py-4">
              {/* Mode Header Banner */}
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-center shadow-xs">
                <h3 className="text-base font-extrabold text-indigo-900 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  Bảng So Sánh Hiệu Suất Tĩnh (Merge Sort vs Bubble Sort)
                </h3>
                <p className="text-xs text-indigo-700 mt-1">
                  Bảng phân tích đối sánh đặc tính và tốc độ thực thi giữa thuật toán Chia để Trị O(N log N) và Nổi Bọt O(N²)
                </p>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Merge Sort Card */}
                <div className="p-5 bg-white rounded-3xl border-2 border-indigo-300 shadow-md flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900">Merge Sort</h3>
                    </div>
                    <span className="text-xs font-mono font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                      O(N log N)
                    </span>
                  </div>
                  <div className="text-center py-2">
                    <span className="text-xs text-slate-500 block font-mono">Tổng số bước thực thi (N={array.length})</span>
                    <span className="text-3xl font-black text-indigo-600 font-mono">
                      {steps.length} bước
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700 bg-indigo-50/50 p-3.5 rounded-2xl border border-indigo-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Độ phức tạp TB:</span>
                      <strong className="text-indigo-900 font-mono">O(N log N)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Bộ nhớ phụ (Space):</span>
                      <strong className="text-indigo-900 font-mono">O(N) (Cần mảng phụ)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Tính ổn định (Stable):</span>
                      <strong className="text-emerald-600">Có Ổn Định ✅</strong>
                    </div>
                  </div>
                </div>

                {/* Bubble Sort Card */}
                <div className="p-5 bg-white rounded-3xl border-2 border-rose-300 shadow-md flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                        <BarChart2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900">Bubble Sort</h3>
                    </div>
                    <span className="text-xs font-mono font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      O(N²)
                    </span>
                  </div>
                  <div className="text-center py-2">
                    <span className="text-xs text-slate-500 block font-mono">Tổng số bước thực thi (N={array.length})</span>
                    <span className="text-3xl font-black text-rose-600 font-mono">
                      {bubbleSortStepCount} bước
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700 bg-rose-50/50 p-3.5 rounded-2xl border border-rose-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Độ phức tạp TB:</span>
                      <strong className="text-rose-900 font-mono">O(N²)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Bộ nhớ phụ (Space):</span>
                      <strong className="text-rose-900 font-mono">O(1) (Tại chỗ)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Tính ổn định (Stable):</span>
                      <strong className="text-emerald-600">Có Ổn Định ✅</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Table Summary */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs overflow-x-auto">
                <table className="w-full text-xs text-left text-slate-700">
                  <thead className="text-[11px] uppercase bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="p-2.5 rounded-l-xl">Tiêu chí so sánh</th>
                      <th className="p-2.5 text-indigo-700">Merge Sort</th>
                      <th className="p-2.5 text-rose-700 rounded-r-xl">Bubble Sort</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="p-2.5 font-bold text-slate-900">Chiến lược giải thuật</td>
                      <td className="p-2.5 text-indigo-900">Chia để trị (Divide & Conquer)</td>
                      <td className="p-2.5 text-slate-800">Sắp xếp nổi bọt (So sánh cặp kề)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-slate-900">Số phép so sánh khi N lớn</td>
                      <td className="p-2.5 text-indigo-900 font-mono">Tăng theo log₂N (Rất chậm)</td>
                      <td className="p-2.5 text-rose-700 font-mono">Tăng theo N² (Bùng nổ nhanh)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-slate-900">Hiệu năng thực tế khi N=1000</td>
                      <td className="p-2.5 text-emerald-600 font-bold">~ 10,000 bước ⚡</td>
                      <td className="p-2.5 text-rose-600 font-bold">~ 500,000 bước 🐢 (Chậm 50 lần)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* DUAL WINDOW CANVAS: SUB-ARRAYS (TOP) & MERGED TARGET ARRAY (BOTTOM) */
            <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-6 relative z-10">
              {/* Educational Explanatory Banner for Stability Mode (Tab 3) */}
              {mode === "stability-test" && (
                <div className="w-full p-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl border-2 border-amber-300 shadow-md flex flex-col gap-3 text-slate-900 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/80 pb-2.5">
                    <div className="flex items-center gap-2 text-amber-950 font-black text-sm">
                      <span className="p-1.5 bg-amber-500 text-white rounded-xl shadow-xs">🎓</span>
                      <span>HƯỚNG DẪN HỌC TẬP: TÍNH ỔN ĐỊNH LÀ GÌ? (STABLE SORT)</span>
                    </div>

                    <span className="text-xs font-mono font-extrabold text-amber-900 bg-white px-3 py-1 rounded-full border border-amber-300 shadow-2xs">
                      Mảng thử nghiệm: [25a, 12b, 25b, 40a, 25c, 8c]
                    </span>
                  </div>

                  {/* Explanation Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white/90 rounded-2xl border border-amber-200/80 shadow-2xs space-y-1">
                      <span className="font-extrabold text-amber-950 block">💡 1. Khái niệm Ổn định:</span>
                      <p className="text-slate-700 leading-relaxed font-medium">
                        Một thuật toán được gọi là <strong>Ổn định (Stable)</strong> nếu nó <strong>giữ nguyên thứ tự ban đầu</strong> giữa các phần tử có cùng giá trị.
                      </p>
                    </div>

                    <div className="p-3 bg-white/90 rounded-2xl border border-amber-200/80 shadow-2xs space-y-1">
                      <span className="font-extrabold text-amber-950 block">🏷️ 2. Ý nghĩa thẻ a, b, c:</span>
                      <p className="text-slate-700 leading-relaxed font-medium">
                        Ba số 25 được gắn thẻ <strong>25a</strong> (25 xuất hiện đầu), <strong>25b</strong> (25 thứ hai), <strong>25c</strong> (25 thứ ba) để dễ theo dõi thứ tự.
                      </p>
                    </div>

                    <div className="p-3 bg-white/90 rounded-2xl border border-amber-200/80 shadow-2xs space-y-1">
                      <span className="font-extrabold text-amber-950 block">✅ 3. Kết quả Merge Sort:</span>
                      <p className="text-emerald-800 leading-relaxed font-bold">
                        Sau khi trộn xong, thứ tự luôn duy trì <strong>25a ➔ 25b ➔ 25c</strong>. Merge Sort là thuật toán <strong>ỔN ĐỊNH 100%</strong>!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TOP REGION: ACTIVE SUB-ARRAYS BEING MERGED */}
              {currentStepData.leftSub || currentStepData.rightSub ? (
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 bg-slate-100/80 p-6 rounded-3xl border border-slate-200 shadow-inner">
                  {/* Left Sub-array Box */}
                  {currentStepData.leftSub && (
                    <div className="flex flex-col items-center p-4 bg-amber-50/90 rounded-2xl border border-amber-200 flex-1 w-full min-h-[140px] justify-between">
                      <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-amber-200/60 pb-2 w-full justify-center">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        Mảng con Trái [{currentStepData.leftSub.leftIndex}..{currentStepData.leftSub.leftIndex + currentStepData.leftSub.arr.length - 1}]
                      </div>

                      <div className="flex items-center justify-center gap-3 pt-3 pb-1 w-full">
                        {currentStepData.leftSub.arr.map((elem, idx) => {
                          const isActiveI = currentStepData.pointers?.i === idx;
                          const val = typeof elem === "object" ? elem.value : elem;
                          const tag = typeof elem === "object" ? elem.tag : val;

                          return (
                            <div key={idx} className="flex flex-col items-center gap-2">
                              {/* Pointer Badge */}
                              <div className="h-6 flex items-center justify-center">
                                {isActiveI ? (
                                  <span className="text-[11px] font-mono font-bold text-amber-950 bg-amber-300 border border-amber-400 px-2 py-0.5 rounded-full shadow-xs animate-bounce">
                                    ▲ i (Trái)
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-mono text-amber-700/50">[{idx}]</span>
                                )}
                              </div>

                              {/* Card */}
                              <div
                                className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center font-mono font-bold text-xs transition-all ${
                                  isActiveI
                                    ? "bg-amber-400 border-amber-500 text-slate-950 shadow-md scale-110 ring-2 ring-amber-300"
                                    : "bg-white border-amber-200 text-amber-950 opacity-80"
                                }`}
                              >
                                {mode === "stability-test" ? tag : val}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Active Comparison Badge in the middle */}
                  {currentStepData.comparing && (
                    <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col items-center gap-1.5 shrink-0 animate-bounce self-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400">So sánh</span>
                      <div className="flex items-center gap-1.5 text-xs font-mono font-black">
                        <span className="px-2.5 py-1 bg-amber-400 text-slate-950 rounded-lg shadow-xs">
                          {currentStepData.comparing.leftVal}
                        </span>
                        <span className="text-slate-400">vs</span>
                        <span className="px-2.5 py-1 bg-cyan-400 text-slate-950 rounded-lg shadow-xs">
                          {currentStepData.comparing.rightVal}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Right Sub-array Box */}
                  {currentStepData.rightSub && (
                    <div className="flex flex-col items-center p-4 bg-cyan-50/90 rounded-2xl border border-cyan-200 flex-1 w-full min-h-[140px] justify-between">
                      <div className="text-[11px] font-bold text-cyan-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-cyan-200/60 pb-2 w-full justify-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                        Mảng con Phải [{currentStepData.rightSub.leftIndex}..{currentStepData.rightSub.leftIndex + currentStepData.rightSub.arr.length - 1}]
                      </div>

                      <div className="flex items-center justify-center gap-3 pt-3 pb-1 w-full">
                        {currentStepData.rightSub.arr.map((elem, idx) => {
                          const isActiveJ = currentStepData.pointers?.j === idx;
                          const val = typeof elem === "object" ? elem.value : elem;
                          const tag = typeof elem === "object" ? elem.tag : val;

                          return (
                            <div key={idx} className="flex flex-col items-center gap-2">
                              {/* Pointer Badge */}
                              <div className="h-6 flex items-center justify-center">
                                {isActiveJ ? (
                                  <span className="text-[11px] font-mono font-bold text-cyan-950 bg-cyan-300 border border-cyan-400 px-2 py-0.5 rounded-full shadow-xs animate-bounce">
                                    ▲ j (Phải)
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-mono text-cyan-700/50">[{idx}]</span>
                                )}
                              </div>

                              {/* Card */}
                              <div
                                className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center font-mono font-bold text-xs transition-all ${
                                  isActiveJ
                                    ? "bg-cyan-400 border-cyan-500 text-slate-950 shadow-md scale-110 ring-2 ring-cyan-300"
                                    : "bg-white border-cyan-200 text-cyan-950 opacity-80"
                                }`}
                              >
                                {mode === "stability-test" ? tag : val}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold text-slate-500">
                  {currentStepData.isCompleted
                    ? "🎉 Toàn bộ mảng đã được trộn và sắp xếp hoàn chỉnh!"
                    : "Mảng chính đang ở trạng thái ban đầu. Hãy bấm Phát Tự Động để bắt đầu Chia để Trị."}
                </div>
              )}

              {/* Downward Arrow */}
              <div className="flex items-center justify-center text-indigo-500 animate-pulse my-1">
                <ArrowDown className="w-6 h-6" />
              </div>

              {/* BOTTOM REGION: MAIN TARGET ARRAY */}
              <div className="w-full flex flex-col items-center p-5 bg-white rounded-3xl border border-slate-200 shadow-md gap-3">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2 w-full justify-center">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  Mảng Chính Kết Quả [0..{currentArrayState.length - 1}]
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2 w-full">
                  {currentArrayState.map((elem, idx) => {
                    const val = typeof elem === "object" ? elem.value : elem;
                    const tag = typeof elem === "object" ? elem.tag : val;

                    const isTargetK = currentStepData.pointers?.k === idx || currentStepData.targetK === idx;
                    const isFullySorted = currentStepData.isCompleted;
                    const isMergedSegment = currentStepData.mergedRanges?.some(r => idx >= r.left && idx <= r.right);

                    let cardBg = "bg-slate-50 border-slate-200 text-slate-800 shadow-xs";

                    if (isTargetK) {
                      cardBg = "bg-indigo-600 border-indigo-700 text-white font-extrabold shadow-lg scale-110 ring-4 ring-indigo-300";
                    } else if (isFullySorted || isMergedSegment) {
                      cardBg = "bg-emerald-500 border-emerald-600 text-white font-bold";
                    }

                    return (
                      <div key={idx} className="flex flex-col items-center gap-2 flex-1 max-w-[58px]">
                        {/* Pointer Badge for k */}
                        <div className="h-6 flex items-center justify-center">
                          {isTargetK ? (
                            <span className="text-[11px] font-mono font-bold text-indigo-950 bg-indigo-200 border border-indigo-300 px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap animate-bounce">
                              ▼ k (Vị trí gán)
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-400">[{idx}]</span>
                          )}
                        </div>

                        <div
                          className={`w-full h-14 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300 ${cardBg}`}
                        >
                          <span className="text-sm font-mono font-extrabold">
                            {mode === "stability-test" ? tag : val}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Step Explanation Status Banner & Playback Controls Toolbar (Hidden in Mode 2 Benchmark) */}
        {mode !== "speed-compare" && (
          <>
            <div className="px-6 py-3.5 bg-indigo-50/70 border-t border-indigo-100 flex items-center justify-between gap-4">
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

            <div className="px-6 py-3.5 bg-slate-50 text-slate-700 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setIsPlaying(false); setCurrentStep(0); }}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                  title="Khởi tạo lại"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { setIsPlaying(false); if (currentStep > 0) setCurrentStep((p) => p - 1); }}
                  disabled={currentStep === 0}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                  title="Lùi 1 bước"
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
                      <span>Phát Tự Động</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => { setIsPlaying(false); if (currentStep < steps.length - 1) setCurrentStep((p) => p + 1); }}
                  disabled={currentStep >= steps.length - 1}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                  title="Tiến 1 bước"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { setIsPlaying(false); setCurrentStep(steps.length - 1); }}
                  disabled={currentStep >= steps.length - 1}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                  title="Đến bước cuối"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-xs font-semibold text-slate-500">Tốc độ:</div>
                <input
                  type="range"
                  min="200"
                  max="1600"
                  step="100"
                  value={1800 - speed}
                  onChange={(e) => setSpeed(1800 - parseInt(e.target.value, 10))}
                  className="w-28 accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* TIER 3: FULL INTERACTIVE PSEUDOCODE TABLE / PANEL (LIGHT THEME MATCHING SUBJECT) */}
      {mode !== "speed-compare" && (
        <div className="w-full bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                Bảng Mã Giả (Pseudocode) & Pop-up Giải Thích Chi Tiết
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Mã giả Tiếng Anh chuẩn (giao diện tối) • Pop-up giải thích màu sáng bên phải
              </p>
            </div>
          </div>

          {/* Current Step Counter Badge */}
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-500 font-mono">Trạng thái:</span>
            <span key={currentStep} className="text-xs font-mono font-extrabold text-indigo-600 animate-pulse">
              Bước {currentStep + 1} / {steps.length || 1}
            </span>
          </div>
        </div>

        {/* 2-COLUMN GRID: LEFT DARK CODE EDITOR & RIGHT BRIGHT POP-UP CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1">
          {/* LEFT COLUMN (lg:col-span-6): Dark IDE Pseudocode List (Mã giả màu tối) */}
          <div className="lg:col-span-6 bg-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-inner space-y-1.5 font-mono text-slate-100">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2 mb-2 flex items-center justify-between">
              <span>📄 Mã Giả Merge Sort (English)</span>
              <span>13 dòng code</span>
            </div>

            {PSEUDOCODE.map((item) => {
              const isActive = item.line === currentStepData.activeLine;
              return (
                <div
                  key={item.line}
                  className={`px-3 py-2 rounded-xl transition-all flex items-center justify-between gap-2 border ${
                    isActive
                      ? "bg-indigo-600 border-l-4 border-amber-400 text-white font-bold shadow-lg shadow-indigo-600/30 ring-1 ring-amber-400/50 scale-[1.01]"
                      : "bg-slate-900/40 border-transparent text-slate-400 hover:bg-slate-900/80 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={`text-xs w-6 font-mono font-bold shrink-0 ${isActive ? "text-amber-300" : "text-slate-600"}`}>
                      {item.line}.
                    </span>
                    <span className={`text-xs md:text-sm font-mono whitespace-pre truncate ${isActive ? "text-cyan-200 font-extrabold" : "text-slate-300"}`}>
                      {item.text}
                    </span>
                  </div>

                  {isActive && (
                    <span className="shrink-0 text-[9px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md animate-pulse">
                      Đang chạy
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN (lg:col-span-6): Bright Mode Pop-up Card centered in the middle */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center w-full">
            {(() => {
              const activeItem = PSEUDOCODE.find((p) => p.line === currentStepData.activeLine) || PSEUDOCODE[0];
              return (
                <div className="w-full bg-gradient-to-br from-indigo-50/90 via-white to-cyan-50/90 p-6 rounded-3xl border-2 border-indigo-400/90 text-slate-900 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden">
                  {/* Soft background glow */}
                  <div className="absolute -right-12 -top-12 w-44 h-44 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />

                  {/* Pop-up Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 pb-3 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-xl bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wide shadow-xs">
                        ⚡ POP-UP GIẢI THÍCH BƯỚC {currentStep + 1}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-indigo-900 bg-white px-3.5 py-1 rounded-xl border border-indigo-200 font-bold shadow-2xs">
                      📌 Dòng code số #{activeItem.line}
                    </div>
                  </div>

                  {/* Active Code Line Snippet Display */}
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 flex items-center gap-2 relative z-10 shadow-2xs">
                    <span className="text-indigo-600 font-extrabold">💻 Code:</span>
                    <span className="text-slate-900 font-bold truncate">{activeItem.text}</span>
                  </div>

                  {/* BIG CLEAR EXPLANATION TEXT IN THE MIDDLE (Màu sáng, chữ to rõ) */}
                  <div className="py-4 px-4 bg-white/95 rounded-2xl border border-indigo-200 shadow-sm relative z-10">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 block mb-1">
                      💡 Giải thích ý nghĩa thuật toán:
                    </span>
                    <p className="text-base md:text-lg font-black text-slate-900 leading-relaxed tracking-wide">
                      👉 {currentStepData.status || activeItem.explain}
                    </p>
                  </div>

                  {/* POP-UP DETAILS SUB-TABLE (Màu sáng 3 cột) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-mono relative z-10">
                    <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col gap-1 shadow-2xs">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">📍 Vị trí mảng</span>
                      <span className="text-cyan-700 font-extrabold text-xs">
                        {currentStepData.leftSub || currentStepData.rightSub
                          ? `Đoạn [${currentStepData.leftSub?.leftIndex ?? 0}..${currentStepData.rightSub ? currentStepData.rightSub.leftIndex + currentStepData.rightSub.arr.length - 1 : currentArrayState.length - 1}]`
                          : "Toàn mảng [0.." + (currentArrayState.length - 1) + "]"}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col gap-1 shadow-2xs">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">🔍 Con trỏ</span>
                      <span className="text-amber-700 font-extrabold text-xs">
                        {currentStepData.pointers
                          ? `i=${currentStepData.pointers.i ?? "-"}, j=${currentStepData.pointers.j ?? "-"}, k=${currentStepData.pointers.k ?? "-"}`
                          : "Không con trỏ"}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col gap-1 shadow-2xs">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">🎯 Thao tác</span>
                      <span className="text-indigo-700 font-extrabold text-xs truncate">
                        {currentStepData.comparing
                          ? `So sánh ${currentStepData.comparing.leftVal} vs ${currentStepData.comparing.rightVal}`
                          : currentStepData.isCompleted
                          ? "🎉 Hoàn thành"
                          : "Chia / Sao chép"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Table Footer: Bright Controls Toolbar */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setIsPlaying(false); setCurrentStep(0); }}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
              title="Khởi tạo lại"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => { setIsPlaying(false); if (currentStep > 0) setCurrentStep((p) => p - 1); }}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 disabled:opacity-40 transition-colors cursor-pointer shadow-2xs"
              title="Lùi 1 bước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleTogglePlay}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm Dừng Code</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Chạy Tự Động Code</span>
                </>
              )}
            </button>

            <button
              onClick={() => { setIsPlaying(false); if (currentStep < steps.length - 1) setCurrentStep((p) => p + 1); }}
              disabled={currentStep >= steps.length - 1}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 disabled:opacity-40 transition-colors cursor-pointer shadow-2xs"
              title="Tiến 1 bước"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => { setIsPlaying(false); setCurrentStep(steps.length - 1); }}
              disabled={currentStep >= steps.length - 1}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 disabled:opacity-40 transition-colors cursor-pointer shadow-2xs"
              title="Đến bước cuối"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Step Increment Badge & Speed slider */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold flex items-center gap-2.5 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Số bước hiện tại: <strong className="text-indigo-600 text-sm font-black">Bước {currentStep + 1}</strong> / {steps.length}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <span className="text-slate-600 font-semibold">Tốc độ:</span>
              <input
                type="range"
                min="200"
                max="1600"
                step="100"
                value={1800 - speed}
                onChange={(e) => setSpeed(1800 - parseInt(e.target.value, 10))}
                className="w-24 accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
