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
  Activity,
  Zap,
  Sparkles,
  Keyboard,
  Database,
  Crown,
  CheckCircle2,
  Trophy
} from "lucide-react";

// Pure function: Step-by-step trace generator for Selection Sort with High Sky Parabolic Arc Ball Throw
function generateSelectionSortSteps(initialArray) {
  const steps = [];
  const arr = [...initialArray];
  const n = arr.length;
  const lockedIndices = [];
  let comparisons = 0;
  let swaps = 0;

  // Step 0: Initial State
  steps.push({
    array: [...arr],
    i: 0,
    j: -1,
    minIdx: 0,
    supersededMinIndices: [],
    comparing: [],
    locked: [],
    phase: "INIT",
    status: `Bắt đầu thuật toán Sắp xếp Chọn (Selection Sort) trên mảng gồm ${n} phần tử.`,
    activeLinePseudo: 1,
    activeLinePy: 1,
    activeLineJava: 1,
    comparisons: 0,
    swaps: 0,
    pass: 0,
  });

  for (let i = 0; i < n - 1; i++) {
    const currentPass = i + 1;
    let minIdx = i;
    let supersededMinIndices = [];

    // Phase 1: PASS START (Stickman #2 picks up ball i as initial min champion)
    steps.push({
      array: [...arr],
      i,
      j: i + 1,
      minIdx: i,
      supersededMinIndices: [...supersededMinIndices],
      comparing: [],
      locked: [...lockedIndices],
      phase: "PASS_START",
      status: `Lượt ${currentPass}: Người Que #1 đứng giữ mốc i = [${i}]. Người Que #2 cầm bóng minIdx = [${i}] (${arr[i]}) trên tay để đi so sánh.`,
      activeLinePseudo: 2,
      activeLinePy: 3,
      activeLineJava: 3,
      comparisons,
      swaps,
      pass: currentPass,
    });

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      const isNewMinFound = arr[j] < arr[minIdx];

      // Phase 2: SCAN & COMPARE (Stickman #2 carries current min ball to j and compares with candidate arr[j] on floor)
      steps.push({
        array: [...arr],
        i,
        j,
        minIdx,
        supersededMinIndices: [...supersededMinIndices],
        comparing: [j, minIdx],
        locked: [...lockedIndices],
        phase: "SCAN",
        status: `Lượt ${currentPass}: Người Que #2 cầm bóng Min (${arr[minIdx]}) bước đến ô [${j}] so sánh với bóng a[${j}] = ${arr[j]} trên mặt đất.`,
        activeLinePseudo: 4,
        activeLinePy: 5,
        activeLineJava: 6,
        comparisons,
        swaps,
        pass: currentPass,
      });

      if (isNewMinFound) {
        // Mark previous minIdx as superseded (Red color)
        supersededMinIndices.push(minIdx);
        minIdx = j;

        // Phase 3: NEW MIN FOUND (Stickman #2 drops old min ball, picks up new smaller min ball j!)
        steps.push({
          array: [...arr],
          i,
          j,
          minIdx,
          supersededMinIndices: [...supersededMinIndices],
          comparing: [j],
          locked: [...lockedIndices],
          phase: "NEW_MIN_FOUND",
          status: `🎉 Phát hiện Min nhỏ hơn! Người Que #2 đặt bóng cũ xuống và CẦM BÓNG MIN MỚI a[${j}] = ${arr[j]} lên tay. Hai người que giơ tay chào nhau.`,
          activeLinePseudo: 5,
          activeLinePy: 6,
          activeLineJava: 7,
          comparisons,
          swaps,
          pass: currentPass,
        });
      }
    }

    // Phase 4: SWAP & TOSS BALL (Quăng bóng BAY BỔNG CAO VÚT LÊN BẦU TRỜI rồi rơi xuống tay a[i])
    if (minIdx !== i) {
      swaps++;

      // Stage 4a: SWAP_THROW_HIGH_ARC (Quả bóng Min bay bổng CAO VÚT LÊN BẦU TRỜI theo đường cầu vồng tuyệt đẹp!)
      steps.push({
        array: [...arr],
        i,
        j: minIdx,
        minIdx,
        supersededMinIndices: [...supersededMinIndices],
        comparing: [i, minIdx],
        locked: [...lockedIndices],
        phase: "SWAP_THROW_HIGH_ARC",
        status: `☄️ Người Que #2 QUĂNG BÓNG MIN (${arr[minIdx]}) BAY BỔNG CAO VÚT LÊN BẦU TRỜI!`,
        activeLinePseudo: 6,
        activeLinePy: 7,
        activeLineJava: 8,
        comparisons,
        swaps,
        pass: currentPass,
      });

      // Stage 4b: SWAP_CATCH_LAND (Quả bóng Min từ trên bầu trời từ từ rơi xuống RƠI TRÚNG TAY Người Que a[i]!)
      steps.push({
        array: [...arr],
        i,
        j: minIdx,
        minIdx,
        supersededMinIndices: [...supersededMinIndices],
        comparing: [i, minIdx],
        locked: [...lockedIndices],
        phase: "SWAP_CATCH_LAND",
        status: `🎯 Quả bóng Min (${arr[minIdx]}) từ trên bầu trời rơi xuống ĐÁP TRÚNG TAY Người Que a[${i}]!`,
        activeLinePseudo: 6,
        activeLinePy: 7,
        activeLineJava: 8,
        comparisons,
        swaps,
        pass: currentPass,
      });

      // Perform array swap
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    } else {
      // Min is already at position i!
      steps.push({
        array: [...arr],
        i,
        j: i,
        minIdx: i,
        supersededMinIndices: [...supersededMinIndices],
        comparing: [i],
        locked: [...lockedIndices],
        phase: "NEW_MIN_FOUND",
        status: `✨ Phần tử a[${i}] = ${arr[i]} đã là nhỏ nhất sẵn! Người Que #2 đặt bóng chuẩn về vị trí mốc ô [${i}].`,
        activeLinePseudo: 6,
        activeLinePy: 7,
        activeLineJava: 8,
        comparisons,
        swaps,
        pass: currentPass,
      });
    }

    // PERMANENTLY LOCK position i as sorted (Green color)
    lockedIndices.push(i);

    // Phase 5: SORTED LOCK (Ball i turns Green, Stickmen walk to next unsorted position i+1!)
    steps.push({
      array: [...arr],
      i,
      j: -1,
      minIdx: i,
      supersededMinIndices: [],
      comparing: [],
      locked: [...lockedIndices],
      phase: "SORTED_LOCK",
      status: `✅ Đã cố định vị trí [${i}] (${arr[i]}) màu Xanh Lá Cây! Hai người que di chuyển sang ô chưa sort kế tiếp [${i + 1}].`,
      activeLinePseudo: 2,
      activeLinePy: 3,
      activeLineJava: 3,
      comparisons,
      swaps,
      pass: currentPass,
    });
  }

  // Lock final element n-1
  if (!lockedIndices.includes(n - 1)) {
    lockedIndices.push(n - 1);
  }

  // Final Step: Complete! All elements locked green
  steps.push({
    array: [...arr],
    i: n - 1,
    j: -1,
    minIdx: n - 1,
    supersededMinIndices: [],
    comparing: [],
    locked: Array.from({ length: n }, (_, idx) => idx),
    phase: "COMPLETE",
    status: `🎉 HOÀN THÀNH SELECTION SORT! Toàn bộ mảng đã được sắp xếp tăng dần và đổi sang màu Xanh Lá Cây hoàn hảo.`,
    activeLinePseudo: 7,
    activeLinePy: 9,
    activeLineJava: 13,
    comparisons,
    swaps,
    pass: n - 1,
  });

  return steps;
}

// Pseudocode line data
const PSEUDOCODE_EN = [
  { line: 1, text: "procedure selectionSort(A: list)", tip: "Declare Selection Sort procedure" },
  { line: 2, text: "  for i = 0 to n - 2 do", tip: "Outer loop for target position i" },
  { line: 3, text: "    minIdx = i", tip: "Assume element at i is initial min" },
  { line: 4, text: "    for j = i + 1 to n - 1 do", tip: "Inner loop to scan unsorted array" },
  { line: 5, text: "      if A[j] < A[minIdx] then minIdx = j", tip: "Update minIdx if smaller element found" },
  { line: 6, text: "    if minIdx != i then swap(A[i], A[minIdx])", tip: "Swap minimum element to index i" },
  { line: 7, text: "return A", tip: "Algorithm finished" },
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
  { line: 6, text: "            if (arr[j] < arr[minIdx]) {" },
  { line: 7, text: "                minIdx = j;" },
  { line: 8, text: "            }" },
  { line: 9, text: "        }" },
  { line: 10, text: "        if (minIdx != i) {" },
  { line: 11, text: "            int temp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = temp;" },
  { line: 12, text: "        }" },
  { line: 13, text: "    }" },
  { line: 14, text: "}" },
];

export default function SelectionSortLab({ onBack }) {
  // Array State (Max elements set to 10 so balls & stickmen have plenty of room!)
  const [arraySize, setArraySize] = useState(6);
  const [manualInputText, setManualInputText] = useState("64, 25, 12, 22, 11, 90");
  const [manualInputError, setManualInputError] = useState("");
  const [initialArray, setInitialArray] = useState([64, 25, 12, 22, 11, 90]);
  
  // Execution Control State (Main Visualizer Stage - Default 1100ms for slow & deliberate animation)
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1100); // ms per step
  
  // Code Editor State (Tier 2 Independent Code Reader)
  const [codeLang, setCodeLang] = useState("pseudo_en"); // 'pseudo_en' | 'python' | 'java'
  const [codeReaderLine, setCodeReaderLine] = useState(1);
  const [isCodeReaderPlaying, setIsCodeReaderPlaying] = useState(false);
  const [codeReaderSpeed, setCodeReaderSpeed] = useState(1000); // ms per line

  // Sync manual input string when initialArray changes
  useEffect(() => {
    setManualInputText(initialArray.join(", "));
  }, [initialArray]);

  // Compute all simulation steps memoized
  const steps = useMemo(() => {
    return generateSelectionSortSteps(initialArray);
  }, [initialArray]);

  const step = steps[currentStep] || steps[0];
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);
  const isFinished = currentStep === steps.length - 1;

  // Current active code lines list
  const currentCodeLines =
    codeLang === "pseudo_en"
      ? PSEUDOCODE_EN
      : codeLang === "python"
      ? PYTHON_CODE
      : JAVA_CODE;

  // Determine active line from main stage step
  const mainStageActiveLine =
    codeLang === "pseudo_en"
      ? step.activeLinePseudo
      : codeLang === "python"
      ? step.activeLinePy
      : step.activeLineJava;

  // Auto-sync Tier 2 Code Reader line with Main Stage when Tier 2 is NOT playing independently
  useEffect(() => {
    if (!isCodeReaderPlaying) {
      setCodeReaderLine(mainStageActiveLine);
    }
  }, [mainStageActiveLine, isCodeReaderPlaying]);

  // 1. Independent Tier 2 Code Reader Auto-Play Timer (STOPS AT LAST LINE!)
  const codeReaderTimerRef = useRef(null);
  useEffect(() => {
    if (isCodeReaderPlaying) {
      codeReaderTimerRef.current = setInterval(() => {
        setCodeReaderLine((prev) => {
          if (prev >= currentCodeLines.length) {
            setIsCodeReaderPlaying(false); // Stop auto-play when reaching the end!
            return prev;
          }
          return prev + 1;
        });
      }, codeReaderSpeed);
    } else {
      if (codeReaderTimerRef.current) clearInterval(codeReaderTimerRef.current);
    }
    return () => {
      if (codeReaderTimerRef.current) clearInterval(codeReaderTimerRef.current);
    };
  }, [isCodeReaderPlaying, codeReaderSpeed, currentCodeLines.length]);

  // 2. Auto-play timer ref for Main Stage (STOPS AT LAST STEP!)
  const timerRef = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false); // Stop auto-play when reaching the end!
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

  // Handler for Main Stage Play/Pause: If already finished, RESET to step 0 then start!
  const handleTogglePlayMain = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (currentStep >= steps.length - 1) {
        setCurrentStep(0);
      }
      setIsPlaying(true);
    }
  };

  // Handler for Code Reader Play/Pause: If already finished at last line, RESET to line 1 then start!
  const handleTogglePlayCodeReader = () => {
    if (isCodeReaderPlaying) {
      setIsCodeReaderPlaying(false);
    } else {
      if (codeReaderLine >= currentCodeLines.length) {
        setCodeReaderLine(1);
      }
      setIsCodeReaderPlaying(true);
    }
  };

  // Confetti celebration when sorting completes 100%
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

  // Ref to hold steps length for keyboard shortcuts without changing useEffect dependency size
  const stepsLengthRef = useRef(steps.length);
  useEffect(() => {
    stepsLengthRef.current = steps.length;
  }, [steps.length]);

  // Keyboard Shortcuts Listener (Static 0 dependencies to prevent React hook array size change errors!)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prevIsPlaying) => {
          if (!prevIsPlaying) {
            setCurrentStep((prevStep) => {
              if (prevStep >= stepsLengthRef.current - 1) {
                return 0;
              }
              return prevStep;
            });
            return true;
          }
          return false;
        });
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        setIsPlaying(false);
        setCurrentStep((prev) => Math.min(prev + 1, stepsLengthRef.current - 1));
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
  }, []);

  // Control Event Handlers
  const handleRandomArray = () => {
    setIsPlaying(false);
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 89) + 10);
    setInitialArray(newArr);
    setCurrentStep(0);
  };

  const handleApplyManualInput = (e) => {
    e.preventDefault();
    setManualInputError("");
    if (!manualInputText.trim()) return;

    if (/[^0-9,\s]/.test(manualInputText)) {
      setManualInputError("Mảng chứa ký tự không hợp lệ! Vui lòng chỉ nhập số không âm (0 - 99), phân cách bằng dấu phẩy.");
      return;
    }

    const tokens = manualInputText.split(/[, \s]+/).filter(Boolean);
    const parsed = tokens.map(Number);

    const hasInvalidNumber = parsed.some((v) => isNaN(v) || v < 0 || v > 99);
    if (hasInvalidNumber) {
      setManualInputError("Số không hợp lệ! Giá trị mỗi phần tử phải nằm trong khoảng từ 0 đến 99.");
      return;
    }

    if (parsed.length < 3 || parsed.length > 10) {
      setManualInputError(`Số lượng phần tử phải từ 3 đến 10 (hiện có ${parsed.length} phần tử).`);
      return;
    }

    setManualInputError("");
    setIsPlaying(false);
    setArraySize(parsed.length);
    setInitialArray(parsed);
    setCurrentStep(0);
  };

  // SVG Stage Layout Math (viewBox 0 0 600 320)
  const totalBars = step.array.length;
  const paddingX = 65;
  const availableW = 600 - paddingX * 2;
  const slotW = availableW / (totalBars || 1);

  // Ball Geometry & Placement (Ground Y = 248px)
  const groundY = 248;
  const ballRadius = 19; // Diameter = 38px
  const ballY = groundY - ballRadius - 1; // 228px (sitting right on flat ground surface)

  const getBallX = (idx) => paddingX + idx * slotW + slotW / 2;

  // Position Math for Dual Stickmen (NEVER STAND ON ALREADY SORTED GREEN BALLS!)
  let targetStickman1Idx = step.i;
  if (step.phase === "SORTED_LOCK" && step.i + 1 < totalBars) {
    targetStickman1Idx = step.i + 1; // Immediately step to the next unsorted ball!
  }
  const stickman1X = getBallX(targetStickman1Idx);

  let targetStickman2Idx = step.j >= 0 ? step.j : step.minIdx;
  if (step.phase === "SWAP_THROW_HIGH_ARC" || step.phase === "SWAP_CATCH_LAND") {
    targetStickman2Idx = step.minIdx; // Standing at minIdx position to throw
  } else if (step.phase === "SORTED_LOCK" && step.i + 1 < totalBars) {
    targetStickman2Idx = step.i + 1; // Step to the next unsorted ball!
  }
  const stickman2X = getBallX(targetStickman2Idx);

  // Hide Stickmen when array is 100% complete so no stickmen stand over green balls!
  const showStickmen = step.phase !== "COMPLETE";

  // Stickman Arm Pose States:
  const isStickman2HoldingBall = 
    step.phase === "PASS_START" || 
    step.phase === "SCAN" || 
    step.phase === "NEW_MIN_FOUND";

  const isReachingArms = step.phase === "NEW_MIN_FOUND";
  const isThrowingBall = step.phase === "SWAP_THROW_HIGH_ARC";

  // Stickman #1 Catching Arm Pose (Giơ 2 tay lên trời đón bóng)
  const isStickman1CatchingBall = 
    step.phase === "SWAP_THROW_HIGH_ARC" || 
    step.phase === "SWAP_CATCH_LAND";

  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-slate-100 p-3 sm:p-5 md:p-6 font-sans space-y-6 select-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#161b22] via-[#0d1117] to-[#0d1117]">
      
      {/* 1. HEADER BAR */}
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
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sorting Visualizer Lab</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 font-mono uppercase">
              SELECTION SORT — SẮP XẾP CHỌN (QUĂNG BÓNG BAY BỔNG CAO VÚT LÊN BẦU TRỜI)
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Quả bóng Min bay bổng cao vút lên bầu trời theo đường cầu vồng rồi rơi xuống đôi tay giơ cao của Người Que a[i]!
            </p>
          </div>
        </div>

        {/* Complexity Badges */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-[#21262d] border border-[#30363d] text-slate-300 flex items-center gap-1.5">
            <span className="text-slate-400">TIME:</span>
            <span className="font-bold text-amber-400">O(n²)</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-[#21262d] border border-[#30363d] text-slate-300 flex items-center gap-1.5">
            <span className="text-slate-400">SPACE:</span>
            <span className="font-bold text-emerald-400">O(1)</span>
          </div>
        </div>
      </div>

      {/* 2. CONFIGURATION CONTROLS TOOLBAR */}
      <div className="bg-[#161b22]/90 backdrop-blur-md p-5 rounded-3xl border border-[#30363d] shadow-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-sky-400" />
          <span>Cấu hình dữ liệu mảng đầu vào (Giới hạn Max = 10 phần tử để bóng & người que spacious):</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Slider Size (Max set to 10) */}
          <div className="md:col-span-4 flex items-center gap-3 bg-[#0d1117] px-4 py-2.5 rounded-2xl border border-[#30363d]">
            <span className="text-xs font-bold text-slate-300 shrink-0">Số phần tử (Max 10):</span>
            <input
              type="range"
              min="4"
              max="10"
              value={arraySize}
              onChange={(e) => {
                const sz = parseInt(e.target.value, 10);
                setArraySize(sz);
                const newArr = Array.from({ length: sz }, () => Math.floor(Math.random() * 89) + 10);
                setInitialArray(newArr);
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono font-extrabold text-cyan-400 shrink-0 bg-[#21262d] px-2.5 py-0.5 rounded-lg border border-[#30363d]">
              {arraySize}
            </span>
          </div>

          {/* Custom Input Form */}
          <div className="md:col-span-5 flex flex-col space-y-1">
            <form onSubmit={handleApplyManualInput} className="flex items-center gap-2">
              <input
                type="text"
                value={manualInputText}
                onChange={(e) => {
                  setManualInputText(e.target.value);
                  if (manualInputError) setManualInputError("");
                }}
                placeholder="Ví dụ: 64, 25, 12, 22, 11, 90..."
                className={`w-full px-4 py-2.5 rounded-2xl bg-[#0d1117] border text-xs font-mono font-semibold text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                  manualInputError ? "border-rose-500/80 focus:border-rose-400" : "border-[#30363d] focus:border-cyan-400"
                }`}
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-all cursor-pointer shadow-md active:scale-95"
              >
                Áp Dụng
              </button>
            </form>
            {manualInputError && (
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-rose-400 pl-2 animate-fadeIn">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                <span>{manualInputError}</span>
              </div>
            )}
          </div>

          {/* Random Button */}
          <div className="md:col-span-3">
            <button
              onClick={handleRandomArray}
              className="w-full py-2.5 px-4 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mảng Ngẫu Nhiên</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. TẦNG 1: BỘ MÔ PHỎNG NỔI BẬT CHIA 3 CỘT (LAYOUT 2.5 : 7 : 2.5) */}
      <div className="w-full bg-[#161124]/80 backdrop-blur-md rounded-3xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
        
        {/* Playback Controls & Speed Toolbar & Keyboard Hints */}
        <div className="bg-[#0d1117] p-3.5 rounded-2xl border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-100">
          {/* Buttons Group */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep(0);
              }}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
              title="Về bước đầu (Phím R)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep((p) => Math.max(0, p - 1));
              }}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
              title="Bước trước (Phím ←)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* TOP MAIN STAGE AUTO-PLAY BUTTON */}
            <button
              onClick={handleTogglePlayMain}
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
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep((p) => Math.min(steps.length - 1, p + 1));
              }}
              disabled={currentStep === steps.length - 1}
              className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#30363d] shadow-xs"
              title="Bước tiếp (Phím →)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep(steps.length - 1);
              }}
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
              min="200"
              max="2000"
              step="50"
              value={2200 - speed}
              onChange={(e) => setSpeed(2200 - parseInt(e.target.value, 10))}
              className="w-28 sm:w-36 accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-cyan-400 shrink-0 w-14 text-right">
              {speed}ms
            </span>
          </div>
        </div>

        {/* SIDE-BY-SIDE 3-PANEL GRID WORKSPACE (LAYOUT 2.5 : 7 : 2.5) */}
        <div className="relative w-full min-h-[500px] grid grid-cols-12 select-none overflow-hidden rounded-2xl border border-[#30363d] shadow-2xl">
          
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
                  const isActive = item.line === mainStageActiveLine;
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
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Chỉ số Target i</span>
                  <span className="font-extrabold text-cyan-400 text-xs">i = {step.i}</span>
                </div>
                <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Chỉ số So Sánh j</span>
                  <span className="font-extrabold text-sky-400 text-xs">
                    {step.j >= 0 ? `j = ${step.j}` : "-"}
                  </span>
                </div>
                <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Chỉ số Min hiện tại</span>
                  <span className="font-extrabold text-amber-400 text-xs">minIdx = {step.minIdx}</span>
                </div>
                <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Giá trị Min</span>
                  <span className="font-extrabold text-emerald-400 text-xs">
                    {step.array[step.minIdx]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT 2 (CENTER - 7 COLS ~ 50-60%): DUAL WHITE STICKMEN CHOREOGRAPHY ON FLAT GROUND */}
          <div className="col-span-12 lg:col-span-6 bg-gradient-to-b from-[#0b1329] via-[#0d1117] to-[#0d1117] p-3 md:p-4 flex flex-col justify-between items-center relative border-r border-[#30363d] overflow-hidden">
            
            {/* Status Explanatory Banner */}
            <div className="w-full flex items-center justify-between z-10 px-3 py-1.5 bg-[#161b22]/90 rounded-xl border border-[#30363d] backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate max-w-md">{step.status}</span>
              </div>
            </div>

            {/* UNIFIED SVG DUAL STICKMAN CHOREOGRAPHY STAGE (VIEWBOX 0 0 600 320) */}
            <div className="relative h-80 w-full flex items-center justify-center overflow-visible my-auto">
              
              <svg className="w-full h-full select-none" viewBox="0 0 600 320">
                <defs>
                  {/* Soft Subtle Glow Filters */}
                  <filter id="amberGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="redGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="blueGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="greenGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Clean Natural Flat Ground Gradients */}
                  <linearGradient id="flatGroundBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                {/* 1. REALISTIC CLEAN FLAT GROUND PLATFORM */}
                <rect x="15" y="248" width="570" height="28" fill="url(#flatGroundBody)" stroke="#334155" strokeWidth="1" rx="4" />
                <line x1="15" y1="248" x2="585" y2="248" stroke="#475569" strokeWidth="2.5" />
                <line x1="15" y1="249" x2="585" y2="249" stroke="#1e293b" strokeWidth="1" />

                {/* 2. RENDER STICKMEN FIRST (BEHIND BALLS!) - HIDDEN WHEN COMPLETE SO GREEN BALLS ARE UNOBSCURED */}
                {showStickmen && (
                  <g style={{ transition: "opacity 0.5s ease" }}>
                    {/* NGƯỜI QUE #1 (STICKMAN #1 AT TARGET i: NEVER STANDS ON SORTED GREEN BALLS!) */}
                    <g 
                      transform={`translate(${stickman1X}, ${groundY})`}
                      style={{ transition: "transform 0.8s cubic-bezier(0.34, 1.25, 0.64, 1)" }}
                    >
                      {/* Head */}
                      <circle cx="0" cy="-70" r="12" fill="none" stroke="#ffffff" strokeWidth="3.5" className={isStickman1CatchingBall ? "animate-pulse" : undefined} />
                      {/* Body Line */}
                      <line x1="0" y1="-58" x2="0" y2="-26" stroke="#ffffff" strokeWidth="3.5" />

                      {/* Arms Choreography */}
                      {isStickman1CatchingBall ? (
                        <>
                          {/* Both arms raised HIGH UP IN THE SKY to catch the incoming flying ball! */}
                          <line x1="0" y1="-48" x2="-16" y2="-68" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="16" y2="-68" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      ) : isReachingArms ? (
                        <>
                          {/* Left arm straight down, Right arm extended horizontally to the right toward Stickman #2 */}
                          <line x1="0" y1="-48" x2="-6" y2="-24" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="22" y2="-45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      ) : (
                        <>
                          {/* Both arms hanging straight down (tay duỗi xuống) */}
                          <line x1="0" y1="-48" x2="-6" y2="-24" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="6" y2="-24" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      )}

                      {/* Legs */}
                      <line x1="0" y1="-26" x2="-14" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="0" y1="-26" x2="14" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                    </g>

                    {/* NGƯỜI QUE #2 (STICKMAN #2 AT j: HOLDS MIN BALL IN HANDS ➔ EXTENDS ARM TO #1 ➔ THROWS BALL) */}
                    <g 
                      transform={`translate(${stickman2X}, ${groundY})`}
                      style={{ transition: "transform 0.8s cubic-bezier(0.34, 1.25, 0.64, 1)" }}
                    >
                      {/* Head */}
                      <circle cx="0" cy="-70" r="12" fill="none" stroke="#ffffff" strokeWidth="3.5" className={isReachingArms ? "animate-pulse" : undefined} />
                      {/* Body Line */}
                      <line x1="0" y1="-58" x2="0" y2="-26" stroke="#ffffff" strokeWidth="3.5" />

                      {/* Arms Choreography */}
                      {isThrowingBall ? (
                        <>
                          {/* Throwing arms bent upwards throwing ball in arc toward #1 */}
                          <line x1="0" y1="-48" x2="-22" y2="-68" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="-10" y2="-65" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      ) : isReachingArms ? (
                        <>
                          {/* Left arm extended horizontally to the left toward Stickman #1, Right arm holding ball */}
                          <line x1="0" y1="-48" x2="-22" y2="-45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="14" y2="-45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      ) : isStickman2HoldingBall ? (
                        <>
                          {/* Arms bent forward carrying/holding Min ball in hands in front of chest */}
                          <line x1="0" y1="-48" x2="-14" y2="-45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="14" y2="-45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      ) : (
                        <>
                          {/* Both arms hanging straight down */}
                          <line x1="0" y1="-48" x2="-6" y2="-24" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                          <line x1="0" y1="-48" x2="6" y2="-24" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" style={{ transition: "all 0.5s ease" }} />
                        </>
                      )}

                      {/* Legs */}
                      <line x1="0" y1="-26" x2="-14" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="0" y1="-26" x2="14" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                    </g>
                  </g>
                )}

                {/* 3. RENDER GLOWING CIRCULAR BALLS SECOND (HIGH SKY PARABOLIC THROW ARC INTO STICKMAN #1 HANDS!) */}
                {step.array.map((val, idx) => {
                  const isLocked = step.locked?.includes(idx) || (step.phase === "SORTED_LOCK" && idx === step.i);
                  const isCurrentMin = idx === step.minIdx && !isLocked;
                  const isSuperseded = step.supersededMinIndices?.includes(idx) && !isCurrentMin && !isLocked;
                  const isComparing = step.comparing?.includes(idx) && !isCurrentMin && !isLocked;

                  // Calculate High Sky Parabolic Arc Trajectory!
                  let bx = getBallX(idx);
                  let by = ballY;

                  if (isCurrentMin && isStickman2HoldingBall) {
                    // Min ball is HELD IN HANDS of Stickman #2 while walking & comparing!
                    bx = stickman2X;
                    by = groundY - 48; // Held up at chest level in hands!
                  } else if (step.phase === "SWAP_THROW_HIGH_ARC") {
                    if (idx === step.minIdx) {
                      // SWAP_THROW_HIGH_ARC: Min ball flies HIGH UP INTO THE SKY in a dramatic parabolic arc!
                      bx = (getBallX(step.minIdx) + getBallX(step.i)) / 2;
                      by = ballY - 80; // Flying high up in the sky!
                    } else if (idx === step.i) {
                      // Ball i glides along the floor to minIdx
                      bx = getBallX(step.minIdx);
                      by = ballY;
                    }
                  } else if (step.phase === "SWAP_CATCH_LAND") {
                    if (idx === step.minIdx) {
                      // SWAP_CATCH_LAND: Min ball lands into Stickman #1's raised hands at slot i!
                      bx = getBallX(step.i);
                      by = groundY - 48; // Caught in raised hands!
                    } else if (idx === step.i) {
                      // Ball i rests at slot minIdx
                      bx = getBallX(step.minIdx);
                      by = ballY;
                    }
                  }

                  // Determine Ball Color Palette & Filter
                  let ballFill = "#334155"; // Dark Slate
                  let ballStroke = "#475569";
                  let textColor = "#f1f5f9";
                  let glowFilter = undefined;

                  if (isLocked) {
                    ballFill = "#166534"; // PERMANENT Sorted Emerald Green
                    ballStroke = "#4ade80";
                    textColor = "#f0fdf4";
                    glowFilter = "url(#greenGlow)";
                  } else if (isCurrentMin) {
                    ballFill = "#d97706"; // Current Min Warm Amber Gold
                    ballStroke = "#fef08a";
                    textColor = "#ffffff";
                    glowFilter = "url(#amberGlow)";
                  } else if (isSuperseded) {
                    ballFill = "#b91c1c"; // Superseded Replaced Min Warning Red
                    ballStroke = "#fca5a5";
                    textColor = "#ffffff";
                    glowFilter = "url(#redGlow)";
                  } else if (isComparing) {
                    ballFill = "#0284c7"; // Comparing Cyan Blue
                    ballStroke = "#7dd3fc";
                    textColor = "#ffffff";
                    glowFilter = "url(#blueGlow)";
                  }

                  return (
                    <g 
                      key={idx} 
                      transform={`translate(${bx}, ${by})`} 
                      style={{ transition: "transform 0.8s cubic-bezier(0.34, 1.25, 0.64, 1)" }}
                    >
                      {/* Shadow under ball resting on flat ground OR floating under held/thrown ball */}
                      <ellipse 
                        cx="0" 
                        cy={ballRadius + (by < ballY ? (ballY - by) : 1)} 
                        rx={ballRadius * (by < ballY ? 0.35 : 0.85)} 
                        ry="2.5" 
                        fill="#000000" 
                        opacity={by < ballY ? 0.2 : 0.6} 
                      />

                      {/* 3D Ball Circle */}
                      <circle
                        cx="0"
                        cy="0"
                        r={ballRadius}
                        fill={ballFill}
                        stroke={ballStroke}
                        strokeWidth="1.8"
                        filter={glowFilter}
                      />

                      {/* 3D Highlight Specular Light Reflection Ring */}
                      <ellipse cx={-ballRadius * 0.3} cy={-ballRadius * 0.3} rx={ballRadius * 0.35} ry={ballRadius * 0.2} fill="#ffffff" opacity="0.3" />

                      {/* Numeric Label Centered Inside Ball */}
                      <text
                        x="0"
                        y="4"
                        fill={textColor}
                        fontSize="13"
                        fontWeight="900"
                        fontFamily="monospace"
                        textAnchor="middle"
                        className="drop-shadow-md"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

              </svg>
            </div>

            {/* Bottom Platform Base */}
            <div className="w-full h-2 bg-[#21262d] rounded-full border border-[#30363d]" />
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
                <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                  <span className="text-xs font-bold text-slate-400 uppercase">So sánh</span>
                  <span className="text-lg font-black text-sky-400 font-mono">{step.comparisons}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                  <span className="text-xs font-bold text-slate-400 uppercase">Hoán đổi</span>
                  <span className="text-lg font-black text-orange-400 font-mono">{step.swaps}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between px-3">
                  <span className="text-xs font-bold text-slate-400 uppercase">Lượt duyệt</span>
                  <span className="text-lg font-black text-amber-400 font-mono">Pass {step.pass}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-3">
                <div className="flex justify-between text-xs font-bold text-slate-200">
                  <span>Tiến trình hoàn thành</span>
                  <span className="font-mono text-[#064e3b]">{progressPercent}%</span>
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

      {/* 4. TẦNG 2: MÃ GIẢ FULL & TRÌNH ĐỌC CODE ĐỘC LẬP (FULL WIDTH DUAL-LANGUAGE INDEPENDENT CODE READER) */}
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
                Có nút Tự Động Chạy độc lập riêng cho học sinh tự học rà từng dòng code
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* INDEPENDENT CODE READER PLAYBACK TOOLBAR */}
            <div className="flex items-center gap-1.5 bg-[#161b22] px-3 py-1.5 rounded-2xl border border-[#30363d] shadow-md">
              <button
                onClick={() => {
                  setIsCodeReaderPlaying(false);
                  setCodeReaderLine(1);
                }}
                className="p-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-slate-300 transition-colors cursor-pointer"
                title="Về dòng 1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => {
                  setIsCodeReaderPlaying(false);
                  setCodeReaderLine((p) => Math.max(1, p - 1));
                }}
                className="p-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-slate-300 transition-colors cursor-pointer"
                title="Dòng trước (Lùi 1 dòng)"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {/* BOTTOM CODE READER AUTO-PLAY BUTTON */}
              <button
                onClick={handleTogglePlayCodeReader}
                className={`px-3.5 py-1.5 rounded-xl font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
                  isCodeReaderPlaying
                    ? "bg-rose-600 hover:bg-rose-500 text-white animate-pulse"
                    : "bg-teal-600 hover:bg-teal-500 text-white"
                }`}
                title={isCodeReaderPlaying ? "Tạm dừng rà code" : "Tự động chạy mã nguồn"}
              >
                {isCodeReaderPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-white" />
                    <span>Tạm dừng</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Tự động chạy</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsCodeReaderPlaying(false);
                  setCodeReaderLine((p) => Math.min(currentCodeLines.length, p + 1));
                }}
                className="p-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-slate-300 transition-colors cursor-pointer"
                title="Dòng tiếp (Tiến 1 dòng)"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-cyan-400 border-l border-[#30363d] pl-2 font-bold">
                Dòng #{codeReaderLine}/{currentCodeLines.length}
              </span>
            </div>

            {/* Language Switcher Tabs: Pseudocode | Python | Java */}
            <div className="flex bg-[#161b22] p-1 rounded-xl border border-[#30363d]">
              <button
                onClick={() => {
                  setCodeLang("pseudo_en");
                  setCodeReaderLine(1);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  codeLang === "pseudo_en"
                    ? "bg-sky-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Mã Giả (Pseudocode)
              </button>
              <button
                onClick={() => {
                  setCodeLang("python");
                  setCodeReaderLine(1);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  codeLang === "python"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Python
              </button>
              <button
                onClick={() => {
                  setCodeLang("java");
                  setCodeReaderLine(1);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  codeLang === "java"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Java
              </button>
            </div>
          </div>
        </div>

        {/* Code Lines Display - HIGHLIGHTS CODE READER LINE INDEPENDENTLY WHEN RUNNING IN TIER 2! */}
        <div className="font-mono text-xs space-y-1.5 py-2">
          {currentCodeLines.map((item) => {
            const isActive = item.line === codeReaderLine;
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
          <span>● Trạng thái rà code: {isCodeReaderPlaying ? "TỰ ĐỘNG CHẠY CODE ĐỘC LẬP" : "THỦ CÔNG / THEO DÕI"}</span>
          <span className="text-cyan-400 font-bold">● Active Line: #{codeReaderLine}</span>
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
            <p className="text-[11px] text-slate-400 leading-snug">Luôn thực hiện đủ n(n-1)/2 phép so sánh ngay cả khi mảng đã sắp xếp.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-amber-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp trung bình (Avg)</span>
            <span className="font-mono font-black text-amber-400 text-lg block">O(n²)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Số phép so sánh luôn là n(n-1)/2, số lần swap tối đa n-1.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-rose-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp xấu nhất (Worst)</span>
            <span className="font-mono font-black text-rose-400 text-lg block">O(n²)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Khi mảng ban đầu bị sắp xếp ngược hoàn toàn.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-emerald-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Bộ nhớ sử dụng (Space)</span>
            <span className="font-mono font-black text-emerald-400 text-lg block">O(1)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Sắp xếp tại chỗ (In-place sort), không tốn thêm mảng phụ.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
