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
  Code2, 
  Target, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Activity, 
  Search
} from "lucide-react";

// Pure function to generate execution trace for Binary Search
function generateBinarySearchSteps(inputArray, targetVal) {
  const steps = [];
  // Ensure array is sorted ascending
  const arr = [...inputArray].sort((a, b) => a - b);
  const n = arr.length;
  let comparisons = 0;

  let low = 0;
  let high = n - 1;

  // Step 1: Init
  steps.push({
    array: [...arr],
    low: 0,
    high: n - 1,
    mid: null,
    target: targetVal,
    eliminated: [],
    found: false,
    foundIndex: null,
    notFound: false,
    decision: "init",
    comparisonText: "Khởi tạo phạm vi tìm kiếm từ vị trí low = 0 đến high = " + (n - 1) + ".",
    status: `Bắt đầu thuật toán Tìm kiếm Nhị phân. Mảng có ${n} phần tử đã được sắp xếp tăng dần. Cần tìm giá trị ${targetVal}.`,
    activeLine: 2,
    comparisons: 0,
  });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    comparisons++;

    // Calculate eliminated indices (outside [low, high])
    const eliminated = [];
    for (let i = 0; i < n; i++) {
      if (i < low || i > high) eliminated.push(i);
    }

    // Step: Mid calculated
    steps.push({
      array: [...arr],
      low,
      high,
      mid,
      target: targetVal,
      eliminated: [...eliminated],
      found: false,
      foundIndex: null,
      notFound: false,
      decision: "mid_calc",
      comparisonText: `Tính điểm giữa mid = ⌊(${low} + ${high}) / 2⌋ = ${mid}. Giá trị A[${mid}] = ${arr[mid]}.`,
      status: `Đang kiểm tra phần tử giữa mảng A[${mid}] = ${arr[mid]} với Target = ${targetVal}.`,
      activeLine: 5,
      comparisons,
    });

    if (arr[mid] === targetVal) {
      // FOUND!
      steps.push({
        array: [...arr],
        low,
        high,
        mid,
        target: targetVal,
        eliminated: [...eliminated],
        found: true,
        foundIndex: mid,
        notFound: false,
        decision: "equal",
        comparisonText: `✅ A[${mid}] = ${arr[mid]} == Target (${targetVal})! Đã tìm thấy thành công.`,
        status: `TÌM THẤY THÀNH CÔNG! Giá trị ${targetVal} xuất hiện tại chỉ số (index) ${mid} trong mảng sau ${comparisons} lần so sánh.`,
        activeLine: 7,
        comparisons,
      });
      return steps;
    } else if (arr[mid] < targetVal) {
      // Target is larger -> go right
      steps.push({
        array: [...arr],
        low,
        high,
        mid,
        target: targetVal,
        eliminated: [...eliminated],
        found: false,
        foundIndex: null,
        notFound: false,
        decision: "less",
        comparisonText: `A[${mid}] (${arr[mid]}) < Target (${targetVal}) ➔ Target nằm ở NỬA PHẢI. Bỏ đoạn [${low}...${mid}].`,
        status: `Vì ${arr[mid]} < ${targetVal}, thu hẹp phạm vi tìm kiếm sang bên phải: low = mid + 1 = ${mid + 1}.`,
        activeLine: 9,
        comparisons,
      });
      low = mid + 1;
    } else {
      // Target is smaller -> go left
      steps.push({
        array: [...arr],
        low,
        high,
        mid,
        target: targetVal,
        eliminated: [...eliminated],
        found: false,
        foundIndex: null,
        notFound: false,
        decision: "greater",
        comparisonText: `A[${mid}] (${arr[mid]}) > Target (${targetVal}) ➔ Target nằm ở NỬA TRÁI. Bỏ đoạn [${mid}...${high}].`,
        status: `Vì ${arr[mid]} > ${targetVal}, thu hẹp phạm vi tìm kiếm sang bên trái: high = mid - 1 = ${mid - 1}.`,
        activeLine: 11,
        comparisons,
      });
      high = mid - 1;
    }
  }

  // Target Not Found
  const allEliminated = Array.from({ length: n }, (_, i) => i);
  steps.push({
    array: [...arr],
    low,
    high,
    mid: null,
    target: targetVal,
    eliminated: allEliminated,
    found: false,
    foundIndex: null,
    notFound: true,
    decision: "not_found",
    comparisonText: `❌ low (${low}) > high (${high}): Vùng tìm kiếm rỗng!`,
    status: `KHÔNG TÌM THẤY! Giá trị ${targetVal} không có trong mảng. Kết thúc thuật toán sau ${comparisons} lần so sánh.`,
    activeLine: 13,
    comparisons,
  });

  return steps;
}

const PSEUDOCODE = [
  { line: 1, text: "procedure binarySearch(A: sorted list, target)" },
  { line: 2, text: "  low = 0" },
  { line: 3, text: "  high = length(A) - 1" },
  { line: 4, text: "  while low <= high do" },
  { line: 5, text: "    mid = floor((low + high) / 2)" },
  { line: 6, text: "    if A[mid] == target then" },
  { line: 7, text: "      return mid  // Found target!" },
  { line: 8, text: "    else if A[mid] < target then" },
  { line: 9, text: "      low = mid + 1  // Search right" },
  { line: 10, text: "    else" },
  { line: 11, text: "      high = mid - 1 // Search left" },
  { line: 12, text: "  end while" },
  { line: 13, text: "  return -1  // Target not found" },
  { line: 14, text: "end procedure" }
];

export default function BinarySearchLab({ onBack }) {
  // Array & Target Config state
  const [arraySize, setArraySize] = useState(10);
  const [initialArray, setInitialArray] = useState([5, 12, 18, 23, 34, 45, 67, 78, 89, 95]);
  const [manualInput, setManualInput] = useState("5, 12, 18, 23, 34, 45, 67, 78, 89, 95");
  const [targetValue, setTargetValue] = useState(34);
  const [targetInput, setTargetInput] = useState("34");

  // Playback state
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(800);
  const timerRef = useRef(null);

  // Generate steps dynamically
  const sortedArray = useMemo(() => {
    return [...initialArray].sort((a, b) => a - b);
  }, [initialArray]);

  const steps = useMemo(() => {
    return generateBinarySearchSteps(sortedArray, targetValue);
  }, [sortedArray, targetValue]);

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

  // Generate Random Array & pick random target
  const handleGenerateRandom = (size = arraySize) => {
    setIsPlaying(false);
    const setOfVals = new Set();
    while (setOfVals.size < size) {
      setOfVals.add(Math.floor(Math.random() * 90) + 5);
    }
    const newArr = Array.from(setOfVals).sort((a, b) => a - b);
    setInitialArray(newArr);
    setManualInput(newArr.join(", "));
    
    const randomTarget = Math.random() > 0.25 
      ? newArr[Math.floor(Math.random() * newArr.length)] 
      : Math.floor(Math.random() * 90) + 5;
    
    setTargetValue(randomTarget);
    setTargetInput(randomTarget.toString());
    setCurrentStep(0);
  };

  // Apply Manual Custom Input
  const handleApplyManualInput = () => {
    setIsPlaying(false);
    const parsed = manualInput
      .split(/[,;\s]+/)
      .map((val) => parseInt(val.trim(), 10))
      .filter((val) => !isNaN(val) && val >= 0 && val <= 999);

    if (parsed.length >= 3 && parsed.length <= 20) {
      const sorted = Array.from(new Set(parsed)).sort((a, b) => a - b);
      setInitialArray(sorted);
      setArraySize(sorted.length);
      setManualInput(sorted.join(", "));
      
      const newTarget = parseInt(targetInput, 10);
      if (!isNaN(newTarget)) {
        setTargetValue(newTarget);
      } else {
        setTargetValue(sorted[Math.floor(sorted.length / 2)]);
        setTargetInput(sorted[Math.floor(sorted.length / 2)].toString());
      }
      setCurrentStep(0);
    } else {
      alert("Vui lòng nhập từ 3 đến 20 số nguyên dương hợp lệ!");
    }
  };

  // Apply Target change only
  const handleApplyTargetOnly = () => {
    setIsPlaying(false);
    const newTarget = parseInt(targetInput, 10);
    if (!isNaN(newTarget)) {
      setTargetValue(newTarget);
      setCurrentStep(0);
    } else {
      alert("Vui lòng nhập giá trị Target là một số hợp lệ!");
    }
  };

  const stepData = steps[currentStep] || steps[0];
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);

  const currentRangeSize = useMemo(() => {
    if (stepData.notFound) return 0;
    if (stepData.low > stepData.high) return 0;
    return stepData.high - stepData.low + 1;
  }, [stepData]);

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
              <Search className="w-5 h-5 text-indigo-600" />
              <span>Tìm kiếm Nhị phân</span>
              <span className="text-indigo-600 font-mono text-base">(Binary Search)</span>
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
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Cấu hình mảng đã sắp xếp & Target:</span>
          </div>

          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
            ⚠️ Binary Search yêu cầu mảng luôn được sắp xếp tăng dần
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Array Size Slider */}
          <div className="md:col-span-3 flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-600 shrink-0">Kích thước:</span>
            <input
              type="range"
              min="5"
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
              {arraySize}
            </span>
          </div>

          {/* Target Value Input */}
          <div className="md:col-span-3 flex items-center gap-2 bg-indigo-50/70 p-1.5 px-3 rounded-2xl border border-indigo-100">
            <Target className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="text-xs font-bold text-indigo-900 shrink-0">Target:</span>
            <input
              type="number"
              value={targetInput}
              onChange={(e) => setTargetInput(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-indigo-200 text-xs font-mono font-extrabold text-indigo-700 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleApplyTargetOnly}
              className="px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold shrink-0 cursor-pointer transition-colors"
              title="Đổi giá trị Target mà không đổi mảng"
            >
              Thử
            </button>
          </div>

          {/* Manual Array Input */}
          <div className="md:col-span-4 flex items-center gap-2">
            <input
              type="text"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder="Nhập mảng (VD: 5, 12, 18, 23)"
              className="w-full px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              onClick={handleApplyManualInput}
              className="px-3 py-2 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
            >
              Lưu mảng
            </button>
          </div>

          {/* Random Generator Button */}
          <div className="md:col-span-2">
            <button
              onClick={() => handleGenerateRandom(arraySize)}
              className="w-full py-2 px-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Tạo mới</span>
            </button>
          </div>
        </div>
      </div>

      {/* TẦNG 2: FULL-WIDTH MAIN SIMULATION CANVAS */}
      <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 relative overflow-hidden">
        {/* Target & Active Code & Range Bar Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-extrabold font-mono">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>Cần tìm Target = <strong className="text-sm underline decoration-wavy text-indigo-900">{stepData.target}</strong></span>
          </div>

          {/* Active Pseudocode Line Badge in Canvas Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-cyan-300 text-xs font-mono font-bold shadow-xs border border-slate-800 max-w-full truncate">
            <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">Code: <span className="text-white font-extrabold">{activePseudocodeText}</span></span>
          </div>

          <div className="text-xs font-mono font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            Phạm vi: <span className="text-cyan-600">low = {stepData.low}</span> ➔ <span className="text-amber-600">high = {stepData.high}</span>
          </div>
        </div>

        {/* FULL-WIDTH Horizontal Array Canvas Container (Guaranteed NO Horizontal Scroll) */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 py-6 px-1 w-full max-w-full overflow-hidden min-h-[150px]">
          {stepData.array.map((val, idx) => {
            const isLow = idx === stepData.low && !stepData.notFound;
            const isHigh = idx === stepData.high && !stepData.notFound;
            const isMid = idx === stepData.mid;
            const isEliminated = stepData.eliminated.includes(idx);
            const isFound = stepData.found && idx === stepData.foundIndex;
            const isLeftHalf = !isMid && !isFound && !isEliminated && stepData.mid !== null && idx >= stepData.low && idx < stepData.mid;
            const isRightHalf = !isMid && !isFound && !isEliminated && stepData.mid !== null && idx > stepData.mid && idx <= stepData.high;
            const totalCount = stepData.array.length;

            let boxStyle = "bg-white border-slate-300 text-slate-800";
            let scaleStyle = "scale-100";
            let ringStyle = "";

            if (isFound) {
              boxStyle = "bg-emerald-500 border-emerald-600 text-white font-black shadow-xl shadow-emerald-500/40 scale-105";
              ringStyle = "ring-4 ring-emerald-500/30";
            } else if (isMid) {
              boxStyle = "bg-indigo-600 border-indigo-700 text-white font-black shadow-lg shadow-indigo-500/30 scale-105";
              ringStyle = "ring-4 ring-indigo-500/30";
            } else if (isEliminated) {
              boxStyle = "bg-slate-100 border-slate-200 text-slate-400 opacity-25 grayscale";
            } else if (isLeftHalf) {
              boxStyle = "bg-cyan-50/90 border-cyan-400 text-cyan-900 font-bold border-t-4 border-t-cyan-500";
            } else if (isRightHalf) {
              boxStyle = "bg-amber-50/90 border-amber-400 text-amber-900 font-bold border-t-4 border-t-amber-500";
            } else {
              boxStyle = "bg-cyan-50/90 border-cyan-300 text-cyan-900 font-bold";
            }

            // Dynamic heights & font sizes depending on element count
            let boxHeight = "h-13 sm:h-15";
            let valFontSize = "text-sm sm:text-base";
            let labelFontSize = "text-[10px] sm:text-xs";
            let tagFontSize = "text-[9px] sm:text-[10px]";

            if (totalCount >= 15) {
              boxHeight = "h-10 sm:h-12";
              valFontSize = "text-[10px] sm:text-xs";
              labelFontSize = "text-[8px] sm:text-[9px]";
              tagFontSize = "text-[7px] sm:text-[8px]";
            } else if (totalCount >= 10) {
              boxHeight = "h-11 sm:h-13";
              valFontSize = "text-xs sm:text-sm";
              labelFontSize = "text-[9px] sm:text-[10px]";
              tagFontSize = "text-[8px] sm:text-[9px]";
            }

            return (
              <div key={idx} className="flex-1 min-w-0 max-w-[56px] flex flex-col items-center group transition-all duration-300">
                {/* Upper Indicator Badge */}
                <div className="h-5 mb-1 flex items-center justify-center w-full">
                  {isFound && (
                    <span className={`${tagFontSize} px-1 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-black animate-bounce truncate`}>
                      ✓ THẤY
                    </span>
                  )}
                  {isMid && !isFound && (
                    <span className={`${tagFontSize} px-1.5 py-0.2 rounded-full bg-indigo-600 text-white font-black shadow-xs animate-pulse truncate`}>
                      🎯 MID
                    </span>
                  )}
                  {isLeftHalf && (
                    <span className={`${tagFontSize} text-cyan-600 font-extrabold truncate`}>
                      👈 Trái
                    </span>
                  )}
                  {isRightHalf && (
                    <span className={`${tagFontSize} text-amber-600 font-extrabold truncate`}>
                      Phải 👉
                    </span>
                  )}
                </div>

                {/* Array Item Box */}
                <div
                  className={`w-full ${boxHeight} rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300 select-none shadow-xs ${boxStyle} ${scaleStyle} ${ringStyle}`}
                >
                  <span className={`${valFontSize} font-black font-mono leading-none truncate px-0.5`}>{val}</span>
                </div>

                {/* Index Label */}
                <span className={`${labelFontSize} font-mono text-slate-400 mt-1 font-bold truncate`}>
                  [{idx}]
                </span>

                {/* Bottom Pointer Arrows (Low / Mid / High) */}
                <div className={`h-6 mt-0.5 flex flex-col items-center justify-start ${labelFontSize} font-black font-mono leading-none`}>
                  {isLow && (
                    <span className="text-cyan-600 leading-tight animate-in fade-in" title="Biên trái low">
                      ▲L
                    </span>
                  )}
                  {isHigh && !isLow && (
                    <span className="text-amber-600 leading-tight animate-in fade-in" title="Biên phải high">
                      ▲R
                    </span>
                  )}
                  {isLow && isHigh && (
                    <span className="text-purple-600 leading-tight animate-in fade-in" title="low == high">
                      ▲L=R
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Halving Trace Banner */}
        {stepData.mid !== null && !stepData.notFound && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 text-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border border-slate-800 shadow-md animate-in fade-in">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-extrabold text-[11px]">
                ⚖️ PHÉP CHIA ĐÔI
              </span>
              <span className="text-slate-200 leading-relaxed">
                Công thức: <code className="text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">mid = ⌊({stepData.low} + {stepData.high}) / 2⌋ = {stepData.mid}</code> (A[{stepData.mid}] = {stepData.array[stepData.mid]})
                {(stepData.high - stepData.low + 1) % 2 === 0 && (
                  <span className="text-amber-300 text-[11px] font-sans font-semibold ml-2 inline-block">
                    💡 Mảng số chẵn ({stepData.high - stepData.low + 1} p.tử): làm tròn xuống, lấy phần tử giữa bên trái.
                  </span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold shrink-0 bg-slate-800/90 px-3 py-1.5 rounded-xl border border-slate-700">
              <span className="text-cyan-400">👈 Trái: {Math.max(0, stepData.mid - stepData.low)}</span>
              <span className="text-slate-600">|</span>
              <span className="text-indigo-300">🎯 Mid: 1</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400">Phải 👉: {Math.max(0, stepData.high - stepData.mid)}</span>
            </div>
          </div>
        )}

        {/* Status Explanation Banner */}
        <div className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3 transition-colors ${
          stepData.found
            ? "bg-emerald-50 border-emerald-200 text-emerald-900"
            : stepData.notFound
            ? "bg-rose-50 border-rose-200 text-rose-900"
            : "bg-indigo-50/60 border-indigo-100 text-slate-800"
        }`}>
          {stepData.found ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : stepData.notFound ? (
            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          ) : (
            <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <div className="text-xs font-extrabold font-mono uppercase tracking-wide opacity-80">
              {stepData.comparisonText}
            </div>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed font-sans">
              {stepData.status}
            </p>
          </div>
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
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-indigo-500/25 flex items-center gap-2.5 cursor-pointer transition-all active:scale-95"
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

      {/* TẦNG 3: BOTTOM SPLIT GRID (VARIABLE TRACKER + PSEUDOCODE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Variable Tracker & Stats Counters (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Variable Tracker */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
              <Sliders className="w-4 h-4 text-indigo-600" />
              <span>Bảng theo dõi biến (Variable Tracker):</span>
            </div>

            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-cyan-50/60 border border-cyan-100">
                <div className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider">Low (Trái)</div>
                <div className="text-xl font-black text-cyan-600 font-mono mt-0.5">
                  {stepData.notFound ? "-" : stepData.low}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider">Mid (Giữa)</div>
                <div className="text-xl font-black text-indigo-600 font-mono mt-0.5">
                  {stepData.mid !== null ? stepData.mid : "-"}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100">
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">High (Phải)</div>
                <div className="text-xl font-black text-amber-600 font-mono mt-0.5">
                  {stepData.notFound ? "-" : stepData.high}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">So sánh</div>
                <div className="text-xl font-black text-slate-700 font-mono mt-0.5">{stepData.comparisons}</div>
              </div>
            </div>

            {/* Progress & Search Window shrink bar */}
            <div className="space-y-2 pt-1">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>Vùng tìm kiếm còn lại: <strong className="text-indigo-600 font-mono">{currentRangeSize} / {sortedArray.length} phần tử</strong></span>
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
                  O(1)
                </span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50">
                <span className="font-semibold text-slate-600">Trung bình (Avg):</span>
                <span className="font-mono font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200">
                  O(log n)
                </span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50">
                <span className="font-semibold text-slate-600">Xấu nhất (Worst):</span>
                <span className="font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  O(log n)
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
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
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
