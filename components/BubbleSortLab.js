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
  Layers,
  Database,
  CheckCircle2,
  Trophy
} from "lucide-react";

// Pure function to generate step-by-step execution trace for Bubble Sort with multi-phase 3D lifting
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
    willSwap: false,
    liftPhase: "NONE", // "NONE" | "COMPARE" | "CLAMP" | "MID_AIR" | "SLIDE" | "DROP"
    craneSlot: "COMPARE", // "J0" | "J1" | "COMPARE"
    status: `Bắt đầu thuật toán Sắp xếp Nổi bọt trên mảng gồm ${n} phần tử.`,
    activeLinePseudo: 1,
    activeLinePy: 1,
    activeLineJava: 1,
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
      willSwap: false,
      liftPhase: "NONE",
      craneSlot: "COMPARE",
      status: `Bắt đầu Lượt ${currentPass}: Tìm phần tử lớn nhất đẩy về vị trí cuối chưa cố định (index ${n - 1 - i}).`,
      activeLinePseudo: 2,
      activeLinePy: 3,
      activeLineJava: 3,
      comparisons,
      swaps,
      pass: currentPass,
    });

    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++;
      const needsSwap = arr[j] > arr[j + 1];

      // Phase 1: SCAN & COMPARE (Blue Spotlight ON, Crane centered between j and j+1)
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        locked: [...lockedIndices],
        willSwap: needsSwap,
        liftPhase: "COMPARE",
        craneSlot: "COMPARE",
        status: needsSwap
          ? `Lượt ${currentPass}: So sánh a[${j}] = ${arr[j]} và a[${j + 1}] = ${arr[j + 1]}. Phát hiện chênh lệch (${arr[j]} > ${arr[j + 1]}) ➔ Chuẩn bị di chuyển cẩu về ô [${j}]!`
          : `Lượt ${currentPass}: So sánh a[${j}] = ${arr[j]} và a[${j + 1}] = ${arr[j + 1]}. Đúng thứ tự (${arr[j]} ≤ ${arr[j + 1]}) ➔ Giữ nguyên.`,
        activeLinePseudo: 4,
        activeLinePy: 6,
        activeLineJava: 6,
        comparisons,
        swaps,
        pass: currentPass,
      });

      if (needsSwap) {
        swaps++;
        swappedInThisPass = true;

        // Phase 2: CLAMP & DROP DOWN (Trolley moves to center over J0, Piston extends down, clamps bar top cap)
        steps.push({
          array: [...arr],
          comparing: [j, j + 1],
          swapping: [j, j + 1],
          locked: [...lockedIndices],
          willSwap: true,
          liftPhase: "CLAMP",
          craneSlot: "J0",
          status: `⬇️ Cẩu di chuyển sang ô [${j}] ➔ Khung cẩu 3D công nghiệp hạ xuống khép chặt 2 tay kắp vào Khối Vuông Da Cam 3D (${arr[j]})...`,
          activeLinePseudo: 5,
          activeLinePy: 7,
          activeLineJava: 7,
          comparisons,
          swaps,
          pass: currentPass,
        });

        // Phase 3: LIFT UP (Piston retracts up carrying 3D Orange Square Cuboid in mid-air right in center of J0)
        const preSwapArray = [...arr];
        steps.push({
          array: preSwapArray,
          comparing: [],
          swapping: [j, j + 1],
          locked: [...lockedIndices],
          willSwap: true,
          liftPhase: "MID_AIR",
          craneSlot: "J0",
          status: `⬆️ Pít-tông thu lại kéo Khối Vuông Da Cam 3D (${arr[j]}) lên không trung ➔ Ô sàn [${j}] trống 100%!`,
          activeLinePseudo: 5,
          activeLinePy: 7,
          activeLineJava: 7,
          comparisons,
          swaps,
          pass: currentPass,
        });

        // Phase 4: SLIDE BOTTOM BAR (Bar j+1 slides under floor across to slot j)
        steps.push({
          array: preSwapArray,
          comparing: [],
          swapping: [j, j + 1],
          locked: [...lockedIndices],
          willSwap: true,
          liftPhase: "SLIDE",
          craneSlot: "J0",
          status: `➡️ Cột a[${j + 1}] (${arr[j + 1]}) trượt bên dưới sàn sang vị trí ô [${j}]...`,
          activeLinePseudo: 5,
          activeLinePy: 7,
          activeLineJava: 7,
          comparisons,
          swaps,
          pass: currentPass,
        });

        // Phase 5: CRANE MOVE & DROP DOWN (Crane slides overhead to slot j+1 and drops down via piston to release cube)
        steps.push({
          array: preSwapArray,
          comparing: [],
          swapping: [j, j + 1],
          locked: [...lockedIndices],
          willSwap: true,
          liftPhase: "DROP",
          craneSlot: "J1",
          status: `🛬 Cẩu di chuyển sang ô [${j + 1}] ➔ Pít-tông duỗi xuống thả khối vuông mở rộng lại thành cột 3D!`,
          activeLinePseudo: 5,
          activeLinePy: 7,
          activeLineJava: 7,
          comparisons,
          swaps,
          pass: currentPass,
        });

        // Mutate array
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    // Lock position (n - 1 - i)
    lockedIndices.push(n - 1 - i);

    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      locked: [...lockedIndices],
      willSwap: false,
      liftPhase: "NONE",
      craneSlot: "COMPARE",
      status: `Hoàn tất Lượt ${currentPass}! Vị trí index ${n - 1 - i} (giá trị ${arr[n - 1 - i]}) đã về vị trí cố định màu Xanh Lá Cây.`,
      activeLinePseudo: 2,
      activeLinePy: 3,
      activeLineJava: 3,
      comparisons,
      swaps,
      pass: currentPass,
    });

    if (!swappedInThisPass) {
      for (let k = 0; k < n; k++) {
        if (!lockedIndices.includes(k)) lockedIndices.push(k);
      }

      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        locked: [...lockedIndices],
        willSwap: false,
        liftPhase: "NONE",
        craneSlot: "COMPARE",
        status: `🚀 Tối ưu cờ hiệu (swapped = false): Mảng đã được sắp xếp hoàn toàn sớm!`,
        activeLinePseudo: 7,
        activeLinePy: 9,
        activeLineJava: 11,
        comparisons,
        swaps,
        pass: currentPass,
      });
      break;
    }
  }

  // Ensure index 0 is locked
  if (!lockedIndices.includes(0)) {
    lockedIndices.push(0);
  }

  // Final completed step
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    locked: Array.from({ length: n }, (_, idx) => idx),
    willSwap: false,
    liftPhase: "NONE",
    craneSlot: "COMPARE",
    status: `🎉 HOÀN THÀNH BUBBLE SORT! Toàn bộ các khối 3D đã được sắp xếp tăng dần thành công.`,
    activeLinePseudo: 7,
    activeLinePy: 9,
    activeLineJava: 11,
    comparisons,
    swaps,
    pass: n - 1,
  });

  return steps;
}

// Pseudocode line data
const PSEUDOCODE_EN = [
  { line: 1, text: "procedure bubbleSort(A: list)", tip: "Declare bubble sort procedure" },
  { line: 2, text: "  for i = 0 to n - 2 do", tip: "Outer loop for passes" },
  { line: 3, text: "    for j = 0 to n - i - 2 do", tip: "Inner loop for adjacent comparisons" },
  { line: 4, text: "      if A[j] > A[j+1] then", tip: "Check out-of-order condition" },
  { line: 5, text: "        swap(A[j], A[j+1])", tip: "Swap out-of-order elements" },
  { line: 6, text: "        swapped = true", tip: "Mark flag if swap occurred" },
  { line: 7, text: "  if not swapped then break", tip: "Early exit optimization" },
];

const PYTHON_CODE = [
  { line: 1, text: "def bubble_sort(arr):" },
  { line: 2, text: "    n = len(arr)" },
  { line: 3, text: "    for i in range(n - 1):" },
  { line: 4, text: "        swapped = False" },
  { line: 5, text: "        for j in range(n - 1 - i):" },
  { line: 6, text: "            if arr[j] > arr[j + 1]:" },
  { line: 7, text: "                arr[j], arr[j + 1] = arr[j + 1], arr[j]" },
  { line: 8, text: "                swapped = True" },
  { line: 9, text: "        if not swapped: break" },
];

const JAVA_CODE = [
  { line: 1, text: "static void bubbleSort(int[] arr) {" },
  { line: 2, text: "    int n = arr.length;" },
  { line: 3, text: "    for (int i = 0; i < n - 1; i++) {" },
  { line: 4, text: "        boolean swapped = false;" },
  { line: 5, text: "        for (int j = 0; j < n - 1 - i; j++) {" },
  { line: 6, text: "            if (arr[j] > arr[j + 1]) {" },
  { line: 7, text: "                int temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp;" },
  { line: 8, text: "                swapped = true;" },
  { line: 9, text: "            }" },
  { line: 10, text: "        }" },
  { line: 11, text: "        if (!swapped) break;" },
  { line: 12, text: "    }" },
  { line: 13, text: "}" },
];

export default function BubbleSortLab({ onBack }) {
  // Array State (Max elements set to 13 so pillars & 3D square caps remain wide & proportional!)
  const [arraySize, setArraySize] = useState(8);
  const [manualInputText, setManualInputText] = useState("2, 3, 4, 1, 5, 6, 7, 8");
  const [initialArray, setInitialArray] = useState([2, 3, 4, 1, 5, 6, 7, 8]);
  
  // Execution Control State (Main 3D Visualizer Stage)
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(750); // ms per step
  
  // Code Editor State (Tier 2 Independent Code Reader)
  const [codeLang, setCodeLang] = useState("pseudo_en"); // 'pseudo_en' | 'python' | 'java'
  const [codeReaderLine, setCodeReaderLine] = useState(1);
  const [isCodeReaderPlaying, setIsCodeReaderPlaying] = useState(false);
  const [codeReaderSpeed, setCodeReaderSpeed] = useState(800); // ms per line

  // Sync manual input string when initialArray changes
  useEffect(() => {
    setManualInputText(initialArray.join(", "));
  }, [initialArray]);

  // Compute all simulation steps memoized
  const steps = useMemo(() => {
    return generateBubbleSortSteps(initialArray);
  }, [initialArray]);

  const maxVal = useMemo(() => {
    return Math.max(...initialArray, 1);
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

  // Determine active line from 3D stage step
  const mainStageActiveLine =
    codeLang === "pseudo_en"
      ? step.activeLinePseudo
      : codeLang === "python"
      ? step.activeLinePy
      : step.activeLineJava;

  // Auto-sync Tier 2 Code Reader line with Main 3D Stage when Tier 2 is NOT playing independently
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

  // 2. Auto-play timer ref for Main 3D Stage (STOPS AT LAST STEP!)
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

  // Handler for Main 3D Stage Play/Pause: If already finished, RESET to step 0 then start!
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
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#f43f5e"]
        });
      } catch (e) {}
    }
  }, [isFinished, steps.length]);

  // Ref to hold steps length for keyboard shortcuts without changing useEffect dependency size
  const stepsLengthRef = useRef(steps.length);
  stepsLengthRef.current = steps.length;

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
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 45) + 3);
    setInitialArray(newArr);
    setCurrentStep(0);
  };

  const handleApplyManualInput = (e) => {
    e.preventDefault();
    const parsed = manualInputText
      .split(/[\s,]+/)
      .map((v) => parseInt(v.trim(), 10))
      .filter((v) => !isNaN(v) && v > 0 && v <= 99);

    if (parsed.length >= 3 && parsed.length <= 13) {
      setIsPlaying(false);
      setArraySize(parsed.length);
      setInitialArray(parsed);
      setCurrentStep(0);
    }
  };

  // Crane Arm position math (fallback to index 0 & 1 if not comparing)
  const compareJ0 = step.comparing[0] !== undefined ? step.comparing[0] : (step.swapping[0] !== undefined ? step.swapping[0] : 0);
  const compareJ1 = step.comparing[1] !== undefined ? step.comparing[1] : (step.swapping[1] !== undefined ? step.swapping[1] : 1);
  const totalBars = step.array.length;

  // Unified SVG Layout math (viewBox 0 0 600 320)
  const paddingX = 60;
  const availableW = 600 - paddingX * 2;
  const slotW = availableW / (totalBars || 1);
  
  // MINIMUM BAR WIDTH LOCKED AT 22PX (Max elements = 13 ensures spacious 3D square top caps!)
  const barW = Math.min(34, Math.max(22, slotW * 0.68));

  const getBarX = (idx) => paddingX + idx * slotW + (slotW - barW) / 2;
  const getBarCenterX = (idx) => getBarX(idx) + barW / 2;

  // Standard fixed spacing between adjacent bars
  const fixedBarSpacing = Math.abs(getBarCenterX(1) - getBarCenterX(0));
  
  // LARGER & WIDER INDUSTRIAL GANTRY CRANE CROSSBAR (Minimum 68px width so crane arms are spacious & powerful!)
  const crossbarW = Math.max(68, fixedBarSpacing + 24);

  // NEAT & COMPACT 3D ORANGE CUBE (Always fits 100% lọt lòng inside the claw arms cage with zero overlap!)
  const cubeSize = Math.max(14, Math.min(18, Math.round(barW * 0.55)));
  const cubeHalf = cubeSize / 2;
  const cubeFontSize = Math.min(10, Math.max(8, Math.round(cubeSize * 0.5)));

  // Calculate Y height for bar top (Baseline Y = 258px - spacious 3D surface cap of bottom beam)
  const getBarTopY = (val) => {
    const heightPx = Math.max(24, Math.round((val / maxVal) * 130));
    return { topY: 258 - heightPx, heightPx };
  };

  const valJ0 = step.array[compareJ0] || 0;
  const valJ1 = step.array[compareJ1] || 0;

  const barTopY0 = getBarTopY(valJ0).topY;
  const barTopY1 = getBarTopY(valJ1).topY;

  // Crane Trolley Position Math (Algomaster 1:1)
  // When COMPARE: trolley is centered between J0 and J1.
  // When CLAMP/MID_AIR/SLIDE: trolley slides horizontally to CENTER 100% directly over J0!
  // When DROP: trolley slides horizontally to CENTER 100% directly over J1!
  let craneTargetX = (getBarCenterX(compareJ0) + getBarCenterX(compareJ1)) / 2;
  if (step.craneSlot === "J0") {
    craneTargetX = getBarCenterX(compareJ0);
  } else if (step.craneSlot === "J1") {
    craneTargetX = getBarCenterX(compareJ1);
  }

  // Piston Extension Math: When CLAMP or DROP, central piston extends down to bar top cap
  const isDropping = step.liftPhase === "CLAMP" || step.liftPhase === "DROP";
  const craneOffsetY = isDropping ? Math.max(0, barTopY0 - 65) : 0;

  // State flags for Crane Piston & Mid-Air lifting
  const isMidAir = step.liftPhase === "MID_AIR" || step.liftPhase === "SLIDE" || step.liftPhase === "DROP";
  const isSlidePhase = step.liftPhase === "SLIDE";
  const isSpotlightActive = step.liftPhase === "COMPARE"; // Spotlight ONLY ON when comparing! OFF when grabbing/lifting!

  // DYNAMIC SPACIOUS CLAW ARM SPACING:
  // When COMPARE (scanning 2 bars): Arms are wide apart over J0 and J1 (fixedBarSpacing / 2).
  // When GRABBING (CLAMP/MID_AIR/SLIDE/DROP): Arms CLAMP INWARDS tightly onto the 2 sides of the 3D Cube (cubeHalf + 6px)!
  const currentArmOffset = isSpotlightActive ? fixedBarSpacing / 2 : cubeHalf + 6;

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
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sorting Visualizer Lab</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 font-mono uppercase">
              BUBBLE SORT — SẮP XẾP NỔI BỌT 3D
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Mô phỏng 3D cẩu gắp công nghiệp kết hợp trình đọc mã giả/code tự động nâng cao.
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
          <span>Cấu hình dữ liệu mảng đầu vào (Giới hạn Max = 13 phần tử để giữ mặt vuông 3D tỷ lệ vàng):</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Slider Size (Max set to 13) */}
          <div className="md:col-span-4 flex items-center gap-3 bg-[#0d1117] px-4 py-2.5 rounded-2xl border border-[#30363d]">
            <span className="text-xs font-bold text-slate-300 shrink-0">Số phần tử (Max 13):</span>
            <input
              type="range"
              min="4"
              max="13"
              value={arraySize}
              onChange={(e) => {
                const sz = parseInt(e.target.value, 10);
                setArraySize(sz);
                const newArr = Array.from({ length: sz }, () => Math.floor(Math.random() * 45) + 3);
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
          <form onSubmit={handleApplyManualInput} className="md:col-span-5 flex items-center gap-2">
            <input
              type="text"
              value={manualInputText}
              onChange={(e) => setManualInputText(e.target.value)}
              placeholder="Ví dụ: 2, 3, 4, 1, 5, 6, 7, 8..."
              className="w-full px-4 py-2.5 rounded-2xl bg-[#0d1117] border border-[#30363d] text-xs font-mono font-semibold text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-all cursor-pointer shadow-md active:scale-95"
            >
              Áp Dụng
            </button>
          </form>

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

            {/* TOP MAIN 3D AUTO-PLAY BUTTON: STOPS AT END, RESETS WHEN CLICKED AFTER FINISHING */}
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
              max="1600"
              step="50"
              value={1800 - speed}
              onChange={(e) => setSpeed(1800 - parseInt(e.target.value, 10))}
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
                  Bubble Sort
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
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Lượt (Pass i)</span>
                  <span className="font-extrabold text-sky-400 text-xs">Pass {step.pass}</span>
                </div>
                <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Cặp j, j+1</span>
                  <span className="font-extrabold text-amber-400 text-xs">
                    [{compareJ0}, {compareJ1}]
                  </span>
                </div>
                <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Giá trị (Val)</span>
                  <span className="font-extrabold text-cyan-300 text-xs">
                    ({step.array[compareJ0]}, {step.array[compareJ1]})
                  </span>
                </div>
                <div className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] shadow-inner">
                  <span className="text-slate-400 block text-[9px] uppercase font-semibold">Trạng Thái Swap</span>
                  <span className={`font-extrabold text-xs ${step.willSwap ? "text-orange-400 animate-pulse" : "text-emerald-400"}`}>
                    {step.willSwap ? "GẮP HOÁN ĐỔI" : "GIỮ NGUYÊN"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT 2 (CENTER - 7 COLS ~ 50-60%): 100% CLOSED 3D ISOMETRIC INDUSTRIAL GANTRY STAGE */}
          <div className="col-span-12 lg:col-span-6 bg-gradient-to-b from-[#0b1329] via-[#0d1117] to-[#0d1117] p-3 md:p-4 flex flex-col justify-between items-center relative border-r border-[#30363d] overflow-hidden">
            
            {/* Status Explanatory Banner */}
            <div className="w-full flex items-center justify-between z-10 px-3 py-1.5 bg-[#161b22]/90 rounded-xl border border-[#30363d] backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate max-w-md">{step.status}</span>
              </div>
            </div>

            {/* UNIFIED SVG 3D STAGE (VIEWBOX 0 0 600 320) */}
            <div className="relative h-80 w-full flex items-center justify-center overflow-visible my-auto">
              
              <svg className="w-full h-full select-none" viewBox="0 0 600 320">
                <defs>
                  {/* Metallic 3D Steel Beam Gradients */}
                  <linearGradient id="gantryFrontGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="50%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>

                  <linearGradient id="gantryTopCapGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>

                  <linearGradient id="gantrySideGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>

                  {/* Electric Blue Spotlight Beam Gradient */}
                  <linearGradient id="spotlightBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#60a5fa" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.1" />
                  </linearGradient>

                  {/* Metallic Pillar Gradients for Algomaster 3D Cuboids */}
                  <linearGradient id="barGlowShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                  
                  <filter id="cyanNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="spotlightGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* --- 1. SPACIOUS 3D ISOMETRIC BOTTOM BASE BEAM PLATFORM (CLOSED 3D RIGHT SIDE END-CAP) --- */}
                {/* Platform 3D Isometric Top Surface Cap (Spacious depth Y=244 to Y=258!) */}
                <polygon points="10,258 24,244 590,244 576,258" fill="url(#gantryTopCapGrad)" stroke="#334155" strokeWidth="0.8" />
                
                {/* Platform Front Main Face (Y=258 to Y=282) */}
                <rect x="10" y="258" width="566" height="24" fill="url(#gantryFrontGrad)" stroke="#334155" strokeWidth="1.5" rx="2" />
                
                {/* 3D RIGHT SIDE END-CAP FACET (CLOSES THE BOTTOM-RIGHT PLATFORM CORNER 100% IN PERFECT 3D ISOMETRIC DEPTH!) */}
                <polygon points="576,258 590,244 590,268 576,282" fill="url(#gantrySideGrad)" stroke="#1e293b" strokeWidth="1" />
                
                {/* Platform Bottom Bevel Edge (Y=282 to Y=286) */}
                <rect x="10" y="282" width="566" height="4" fill="#020617" />

                {/* Position Track Dots on Platform Surface */}
                {Array.from({ length: totalBars }).map((_, idx) => {
                  const dotX = getBarCenterX(idx);
                  return (
                    <g key={idx}>
                      {/* Glowing Track Indicator LED */}
                      <circle cx={dotX} cy="270" r="3.5" fill="#38bdf8" filter="url(#cyanNeonGlow)" />
                      <circle cx={dotX} cy="270" r="1.5" fill="#ffffff" />
                    </g>
                  );
                })}

                {/* --- 2. 3D VERTICAL SUPPORT PILLARS (MOUNTED COMFORTABLY INSIDE THE DEEP 3D BASE BEAM SURFACE Y=258!) --- */}
                {/* Left Support Pillar 3D */}
                {/* Front Face (Y=28 down to Y=258 right on top of spacious base beam surface!) */}
                <rect x="18" y="28" width="10" height="230" fill="url(#gantryFrontGrad)" stroke="#334155" strokeWidth="1" rx="1" />
                {/* 3D Side Depth Face */}
                <polygon points="28,28 34,22 34,248 28,258" fill="url(#gantrySideGrad)" stroke="#1e293b" strokeWidth="0.5" />
                {/* Left Heavy 3D Base Mounting Foot (Sitting 100% comfortably inside 3D surface cap!) */}
                <rect x="14" y="250" width="18" height="8" fill="#334155" stroke="#0f172a" strokeWidth="1" rx="1" />
                <circle cx="18" cy="254" r="1.5" fill="#cbd5e1" />
                <circle cx="28" cy="254" r="1.5" fill="#cbd5e1" />

                {/* Right Support Pillar 3D */}
                {/* Front Face (Y=28 down to Y=258 right on top of spacious base beam surface!) */}
                <rect x="558" y="28" width="10" height="230" fill="url(#gantryFrontGrad)" stroke="#334155" strokeWidth="1" rx="1" />
                {/* 3D Outer Side Depth Face (Right-most side facing outward!) */}
                <polygon points="568,28 574,22 574,248 568,258" fill="url(#gantrySideGrad)" stroke="#1e293b" strokeWidth="0.5" />
                {/* Right Heavy 3D Base Mounting Foot (Sitting 100% comfortably inside 3D surface cap!) */}
                <rect x="554" y="250" width="18" height="8" fill="#334155" stroke="#0f172a" strokeWidth="1" rx="1" />
                <circle cx="558" cy="254" r="1.5" fill="#cbd5e1" />
                <circle cx="568" cy="254" r="1.5" fill="#cbd5e1" />

                {/* --- 3. 3D ISOMETRIC OVERHEAD STEEL GANTRY RAIL & TRACK (WITH CLOSED 3D RIGHT SIDE END-CAP FACET!) --- */}
                {/* 3D Top Depth Cap Beam */}
                <polygon points="10,14 24,6 590,6 576,14" fill="url(#gantryTopCapGrad)" stroke="#475569" strokeWidth="0.8" />
                {/* 3D Main Front Beam Face */}
                <rect x="10" y="14" width="566" height="14" fill="url(#gantryFrontGrad)" stroke="#334155" strokeWidth="1" rx="2" />
                
                {/* 3D RIGHT SIDE END-CAP FACET FOR TOP OVERHEAD RAIL (CLOSES THE TOP-RIGHT OUTER CORNER 100% IN PERFECT 3D ISOMETRIC DEPTH!) */}
                <polygon points="576,14 590,6 590,20 576,28" fill="url(#gantrySideGrad)" stroke="#1e293b" strokeWidth="1" />

                {/* 3D Bottom Bevel Edge Shadow */}
                <rect x="10" y="28" width="566" height="3" fill="#090d16" />
                {/* Steel Trolley Guide Track Lines */}
                <line x1="16" y1="18" x2="570" y2="18" stroke="#0284c7" strokeWidth="1" opacity="0.8" />
                <line x1="16" y1="24" x2="570" y2="24" stroke="#0369a1" strokeWidth="1" opacity="0.8" />

                {/* Corner Joint 3D Anchor Gusset Plates with Rivet Bolts */}
                {/* Top-Left Corner */}
                <polygon points="10,14 32,14 10,36" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                <line x1="20" y1="36" x2="40" y2="16" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="16" cy="20" r="1.5" fill="#f59e0b" />
                
                {/* Top-Right Corner Joint Gusset Plate */}
                <polygon points="576,14 554,14 576,36" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                <line x1="566" y1="36" x2="546" y2="16" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="570" cy="20" r="1.5" fill="#f59e0b" />

                {/* 4. RENDER ALL 3D ISOMETRIC CUBOID PILLARS WITH PROPORTIONAL 3D ISOMETRIC SQUARE CAPS & CENTERED TOP LABELS */}
                {step.array.map((val, idx) => {
                  const isComparing = step.comparing.includes(idx);
                  const isSwapping = step.swapping.includes(idx);
                  const isLocked = step.locked.includes(idx);

                  // REALISTIC PHYSICAL LIFTING: If element compareJ0 is lifted in mid-air (MID_AIR / SLIDE / DROP), VACATE its slot on the bottom platform!
                  if (isMidAir && idx === compareJ0) {
                    return (
                      <g key={idx}>
                        {/* Empty vacant slot marker on platform */}
                        <rect
                          x={getBarX(idx)}
                          y="256"
                          width={barW}
                          height="4"
                          fill="#f97316"
                          opacity="0.3"
                          rx="2"
                          stroke="#ea580c"
                          strokeDasharray="3 2"
                        />
                      </g>
                    );
                  }

                  // PHUONG AN A: In SLIDE or DROP phase, bar j+1 slides smoothly to slot j!
                  let bx = getBarX(idx);
                  if (isMidAir && (isSlidePhase || step.liftPhase === "DROP") && idx === compareJ1) {
                    bx = getBarX(compareJ0);
                  }

                  const { topY, heightPx } = getBarTopY(val);

                  // BẰNG CẤP BẢNG MÀU SANG TRỌNG VỚI NẮP TRÊN 3D RỘNG RÃI & CHỮ SỐ IN CHÌM ĐẬM NỔI BẬT
                  let frontColor = "#2b334a"; // Default Unsorted Dark Slate
                  let topColor = "#475569";
                  let sideColor = "#1e293b";
                  let strokeColor = "rgba(100, 116, 139, 0.3)";
                  let topTextColor = "#ffffff";

                  if (isFinished || isLocked) {
                    frontColor = "#22c55e"; // Emerald Green Sorted
                    topColor = "#86efac";   // Soft Light Green Spacious Top Cap
                    sideColor = "#15803d";  // Deep Emerald Side
                    strokeColor = "rgba(22, 101, 52, 0.4)";
                    topTextColor = "#064e3b"; // Deep Forest Green Text (Super High Contrast!)
                  } else if (isSwapping) {
                    frontColor = "#f97316"; // Orange Swapping
                    topColor = "#fde047";   // Soft Light Yellow Spacious Top Cap
                    sideColor = "#c2410c";  // Deep Orange Side
                    strokeColor = "rgba(194, 65, 12, 0.4)";
                    topTextColor = "#78350f"; // Deep Amber Text
                  } else if (isComparing) {
                    frontColor = "#3b82f6"; // Electric Blue Comparing
                    topColor = "#93c5fd";   // Soft Sky Blue Spacious Top Cap
                    sideColor = "#1d4ed8";  // Deep Blue Side
                    strokeColor = "rgba(29, 78, 216, 0.4)";
                    topTextColor = "#1e3a8a"; // Deep Navy Text
                  }

                  // PROPORTIONAL 3D ISOMETRIC SQUARE TOP CAP (Scaling dynamically with barW so it is ALWAYS a beautiful 3D square!)
                  const capDx = Math.round(barW * 0.35); // 3D Isometric X depth offset (e.g. 8px for barW=24px)
                  const capDy = -Math.round(barW * 0.45); // 3D Isometric Y depth offset (e.g. -11px for barW=24px)

                  // EXACT GEOMETRIC CENTER OF PROPORTIONAL 3D SQUARE TOP CAP:
                  const topCapCenterX = bx + barW / 2 + capDx / 2; // Perfectly centered horizontally on 3D square top cap!
                  const topCapCenterY = topY + capDy / 2;         // Perfectly centered vertically on 3D square top cap!

                  return (
                    <g key={idx} className="transition-all duration-500">
                      {/* Bar Shadow on Base Platform */}
                      <ellipse cx={bx + barW / 2} cy="258" rx={barW / 2 + 2} ry="3" fill="url(#barGlowShadow)" />

                      {/* PROPORTIONAL 3D ISOMETRIC SQUARE TOP CAP SURFACE */}
                      <polygon
                        points={`${bx},${topY} ${bx + capDx},${topY + capDy} ${bx + barW + capDx},${topY + capDy} ${bx + barW},${topY}`}
                        fill={topColor}
                        stroke={isComparing ? "#60a5fa" : strokeColor}
                        strokeWidth={isComparing ? "1.5" : "0.8"}
                        filter={isComparing ? "url(#spotlightGlow)" : undefined}
                      />

                      {/* 3D RIGHT SIDE FACE (MATCHES THE PROPORTIONAL 3D SQUARE CAP DEPTH) */}
                      <polygon
                        points={`${bx + barW},${topY} ${bx + barW + capDx},${topY + capDy} ${bx + barW + capDx},${258 + capDy} ${bx + barW},258`}
                        fill={sideColor}
                        stroke={strokeColor}
                        strokeWidth="0.8"
                      />

                      {/* 3D FRONT MAIN FACE WITH SMOOTH ROUNDED CORNERS & SOFT BORDER */}
                      <rect
                        x={bx}
                        y={topY}
                        width={barW}
                        height={heightPx}
                        fill={frontColor}
                        stroke={strokeColor}
                        strokeWidth="0.8"
                        rx="1.5"
                      />

                      {/* Value Number Centered on Front Main Face */}
                      <text
                        x={bx + barW / 2}
                        y={topY + heightPx / 2 + 4}
                        fill="#ffffff"
                        fontSize={cubeFontSize}
                        fontWeight="900"
                        fontFamily="monospace"
                        textAnchor="middle"
                        className="drop-shadow-md"
                      >
                        {val}
                      </text>

                      {/* NUMERIC LABEL 100% GEOMETRICALLY CENTERED INSIDE THE PROPORTIONAL 3D SQUARE TOP CAP */}
                      <text
                        x={topCapCenterX}
                        y={topCapCenterY}
                        fill={topTextColor}
                        fontSize={Math.max(8, Math.min(10, cubeFontSize - 1))}
                        fontWeight="900"
                        fontFamily="monospace"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* 5. HEAVY INDUSTRIAL GANTRY CRANE ASSEMBLY (EXPANDED SPACIOUS ROBOTIC CLAW ARMS CAGE) */}
                <g
                  transform={`translate(${craneTargetX}, 0)`}
                  style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  {/* Top Slider Cart on Rail */}
                  <rect
                    x="-20"
                    y="10"
                    width="40"
                    height="14"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="1.5"
                    rx="3"
                  />
                  {/* Yellow Center Indicator Dot */}
                  <circle
                    cx="0"
                    cy="17"
                    r="3.5"
                    fill="#eab308"
                    className="animate-pulse"
                  />

                  {/* STURDY OUTER PISTON HOUSING */}
                  <rect
                    x="-7"
                    y="24"
                    width="14"
                    height="24"
                    fill="#1e293b"
                    stroke="#475569"
                    strokeWidth="1.5"
                    rx="2"
                  />

                  {/* INNER STEEL PISTON ROD */}
                  <rect
                    x="-3.5"
                    y="24"
                    width="7"
                    height={24 + craneOffsetY}
                    fill="#cbd5e1"
                    stroke="#0284c7"
                    strokeWidth="0.5"
                    style={{ transition: "height 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  />

                  {/* 6. CROSSBAR & SPACIOUS ROBOTIC CLAW ARMS GROUP (MOVES VERTICALLY WITH PERFECT SYNC) */}
                  <g 
                    transform={`translate(0, ${craneOffsetY})`} 
                    style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    {/* Heavy Overhead Industrial Crossbar (EXPANDED TO MINIMUM 68PX FOR AMPLE SPACE!) */}
                    <rect
                      x={-crossbarW / 2}
                      y="48"
                      width={crossbarW}
                      height="10"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1.5"
                      rx="3"
                    />

                    {/* --- ROBOTIC CLAW ARMS (SLIDES INWARDS DYNAMICALLY TO ENCLOSE THE 3D CUBE 100% LỌT LÒNG!) --- */}
                    
                    {/* LEFT ROBOTIC CLAW ARM ASSEMBLY (EXPANDED SIZE & HEIGHT = 48PX) */}
                    <g 
                      transform={`translate(${-currentArmOffset}, 56)`}
                      style={{ transition: "transform 0.5s cubic-bezier(0.34, 1.3, 0.64, 1)" }}
                    >
                      {/* Arm Joint Hinge Circle */}
                      <circle cx="0" cy="0" r="5" fill="#0284c7" stroke="#0f172a" strokeWidth="1" />
                      {/* Upper Arm Segment (Height = 28px) */}
                      <rect x="-4" y="0" width="8" height="28" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                      {/* Lower Arm Segment (Heavy Industrial Gripper Tip, Height = 22px) */}
                      <rect x="-7" y="24" width="14" height="22" rx="3" fill="#475569" stroke="#0f172a" strokeWidth="1.5" />
                      
                      {/* LEFT TARGETED SPOTLIGHT BEAM: SHINES ONLY DOWN TO THE TOP NUMBER CAP LEVEL (barTopY0) */}
                      {isSpotlightActive && (
                        <polygon
                          points={`0,40 ${-barW / 2 - 2},${Math.max(45, barTopY0 - 56)} ${barW / 2 + 2},${Math.max(45, barTopY0 - 56)}`}
                          fill="url(#spotlightBlue)"
                          opacity="0.85"
                          filter="url(#spotlightGlow)"
                        />
                      )}
                    </g>

                    {/* RIGHT ROBOTIC CLAW ARM ASSEMBLY (EXPANDED SIZE & HEIGHT = 48PX) */}
                    <g 
                      transform={`translate(${currentArmOffset}, 56)`}
                      style={{ transition: "transform 0.5s cubic-bezier(0.34, 1.3, 0.64, 1)" }}
                    >
                      {/* Arm Joint Hinge Circle */}
                      <circle cx="0" cy="0" r="5" fill="#0284c7" stroke="#0f172a" strokeWidth="1" />
                      {/* Upper Arm Segment (Height = 28px) */}
                      <rect x="-4" y="0" width="8" height="28" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                      {/* Lower Arm Segment (Heavy Industrial Gripper Tip, Height = 22px) */}
                      <rect x="-7" y="24" width="14" height="22" rx="3" fill="#475569" stroke="#0f172a" strokeWidth="1.5" />

                      {/* RIGHT TARGETED SPOTLIGHT BEAM: SHINES ONLY DOWN TO THE TOP NUMBER CAP LEVEL (barTopY1) */}
                      {isSpotlightActive && (
                        <polygon
                          points={`0,40 ${-barW / 2 - 2},${Math.max(45, barTopY1 - 56)} ${barW / 2 + 2},${Math.max(45, barTopY1 - 56)}`}
                          fill="url(#spotlightBlue)"
                          opacity="0.85"
                          filter="url(#spotlightGlow)"
                        />
                      )}
                    </g>

                    {/* --- MID-AIR PROPORTIONAL 3D ORANGE SQUARE CUBE (100% LỌT LÒNG NEATLY INSIDE THE ROBOTIC CLAW CAGE) --- */}
                    {isMidAir && (
                      <g>
                        {/* 3D Isometric Orange Square Cuboid in Mid-Air */}
                        {/* Top Cap */}
                        <polygon
                          points={`${-cubeHalf},68 ${-cubeHalf + 6},58 ${cubeHalf + 6},58 ${cubeHalf},68`}
                          fill="#fde047"
                          stroke="rgba(194, 65, 12, 0.4)"
                          strokeWidth="0.8"
                        />
                        {/* Right Side Face */}
                        <polygon
                          points={`${cubeHalf},68 ${cubeHalf + 6},58 ${cubeHalf + 6},${58 + cubeSize} ${cubeHalf},${68 + cubeSize}`}
                          fill="#c2410c"
                          stroke="rgba(194, 65, 12, 0.4)"
                          strokeWidth="0.8"
                        />
                        {/* Front Face */}
                        <rect
                          x={-cubeHalf}
                          y="68"
                          width={cubeSize}
                          height={cubeSize}
                          fill="#f97316"
                          stroke="rgba(194, 65, 12, 0.4)"
                          strokeWidth="0.8"
                          rx="2"
                          filter="url(#cyanNeonGlow)"
                        />
                        {/* Front Numeric Label Centered in Cube */}
                        <text
                          x="0"
                          y={68 + cubeSize / 2 + cubeFontSize / 3}
                          fill="#ffffff"
                          fontSize={cubeFontSize}
                          fontWeight="900"
                          fontFamily="monospace"
                          textAnchor="middle"
                        >
                          {valJ0}
                        </text>
                        {/* Top Cap Numeric Label Centered 100% Inside 3D Top Surface */}
                        <text
                          x="3"
                          y="63"
                          fill="#78350f"
                          fontSize={Math.max(7, cubeFontSize - 1)}
                          fontWeight="900"
                          fontFamily="monospace"
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          {valJ0}
                        </text>
                      </g>
                    )}
                  </g>
                </g>
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
                <span>Độ phức tạp Bubble Sort:</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between">
                  <span className="text-slate-400 text-[9px] uppercase font-semibold">Tốt nhất (Best)</span>
                  <span className="font-mono font-bold text-emerald-400">O(n)</span>
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
                Mã Giả Full & Trình Đọc Mã Nguồn Thuật Toán [BUBBLE SORT]
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

              {/* BOTTOM CODE READER AUTO-PLAY BUTTON: STOPS AT END, RESETS WHEN CLICKED AFTER FINISHING */}
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
          <span>Bảng Đánh Giá Độ Phức Tạp Thuật Toán & Phân Tích Chuyên Sâu Bubble Sort</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-emerald-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp tốt nhất (Best)</span>
            <span className="font-mono font-black text-emerald-400 text-lg block">O(n)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Khi mảng đã sắp xếp và có cờ hiệu tối ưu swapped = false.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-amber-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp trung bình (Avg)</span>
            <span className="font-mono font-black text-amber-400 text-lg block">O(n²)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Trung bình cần thực hiện khoảng n(n-1)/4 phép so sánh.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-rose-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Độ phức tạp xấu nhất (Worst)</span>
            <span className="font-mono font-black text-rose-400 text-lg block">O(n²)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Khi mảng đầu vào bị sắp xếp ngược hoàn toàn.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1117] border border-[#30363d] hover:border-cyan-500/40 transition-all hover:-translate-y-1 space-y-1 shadow-md">
            <span className="text-slate-400 font-semibold block text-[11px]">Bộ nhớ sử dụng (Space)</span>
            <span className="font-mono font-black text-cyan-400 text-lg block">O(1)</span>
            <p className="text-[11px] text-slate-400 leading-snug">Sắp xếp tại chỗ (In-place sort), không tốn bộ nhớ phụ.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
