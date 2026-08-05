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
  Plus,
  Trash2,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap,
  Award,
  Gamepad2,
  TrendingDown,
  Info,
  Trophy,
  ArrowUpRight,
  Code2,
  BookOpen
} from "lucide-react";

// ==========================================
// 1. PSEUDOCODE DEFINITIONS
// ==========================================

const PROBLEM_PSEUDOCODES = {
  hanoi: [
    { line: 1, text: "procedure HANOI(n, from_peg, to_peg, aux_peg)" },
    { line: 2, text: "  if n == 1 then // Điều kiện dừng (Base Case)" },
    { line: 3, text: "    MOVE_DISK(from_peg -> to_peg)" },
    { line: 4, text: "    return" },
    { line: 5, text: "  HANOI(n-1, from_peg, aux_peg, to_peg)" },
    { line: 6, text: "  MOVE_DISK(from_peg -> to_peg)" },
    { line: 7, text: "  HANOI(n-1, aux_peg, to_peg, from_peg)" },
    { line: 8, text: "end procedure" },
  ],
  fibonacci: [
    { line: 1, text: "function FIB(n)" },
    { line: 2, text: "  if n <= 1 then // Base Case" },
    { line: 3, text: "    return n" },
    { line: 4, text: "  val1 = FIB(n - 1)" },
    { line: 5, text: "  val2 = FIB(n - 2)" },
    { line: 6, text: "  return val1 + val2" },
    { line: 7, text: "end function" },
  ],
  factorial: [
    { line: 1, text: "function FACTORIAL(n)" },
    { line: 2, text: "  if n <= 1 then // Base Case" },
    { line: 3, text: "    return 1" },
    { line: 4, text: "  subResult = FACTORIAL(n - 1)" },
    { line: 5, text: "  return n * subResult" },
    { line: 6, text: "end function" },
  ],
  pascal: [
    { line: 1, text: "function PASCAL(n, k)" },
    { line: 2, text: "  if k == 0 or k == n then // Base Case" },
    { line: 3, text: "    return 1" },
    { line: 4, text: "  val1 = PASCAL(n - 1, k - 1)" },
    { line: 5, text: "  val2 = PASCAL(n - 1, k)" },
    { line: 6, text: "  return val1 + val2" },
    { line: 7, text: "end function" },
  ],
  memo: [
    { line: 1, text: "function FIB_MEMO(n, memo = {})" },
    { line: 2, text: "  if n in memo then return memo[n] // Memoized Hit O(1)!" },
    { line: 3, text: "  if n <= 1 then return n" },
    { line: 4, text: "  memo[n] = FIB_MEMO(n-1, memo) + FIB_MEMO(n-2, memo)" },
    { line: 5, text: "  return memo[n]" },
    { line: 6, text: "end function" },
  ],
};

// ==========================================
// 2. STEP GENERATORS
// ==========================================

// --- Tower of Hanoi Step Generator ---
function generateHanoiSteps(numDisks) {
  const steps = [];
  const stackFrames = [];
  const pegs = {
    A: Array.from({ length: numDisks }, (_, i) => numDisks - i), // [3, 2, 1] (bottom to top)
    B: [],
    C: [],
  };

  steps.push({
    activeLine: 1,
    status: `Khởi tạo bài toán Tháp Hà Nội với ${numDisks} đĩa trên Cọc A. Cần tổng cộng 2^${numDisks} - 1 = ${
      Math.pow(2, numDisks) - 1
    } bước di chuyển.`,
    pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
    stackFrames: [],
    moveCount: 0,
  });

  let moveCount = 0;

  function hanoi(n, from, to, aux) {
    const frameId = `hanoi(${n}, ${from}, ${to}, ${aux})`;
    stackFrames.push({ id: frameId, name: `HANOI(n=${n}, ${from}➔${to})`, n, from, to, aux });

    steps.push({
      activeLine: 1,
      status: `[PUSH Stack] Gọi đệ quy HANOI(n=${n}, ${from}➔${to}). Khung hàm được nạp vào bộ nhớ Call Stack.`,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
      stackFrames: [...stackFrames],
      moveCount,
      activeFrameId: frameId,
    });

    if (n === 1) {
      steps.push({
        activeLine: 2,
        status: `[Base Case!] n = 1. Đạt điều kiện dừng đệ quy. Chuẩn bị di chuyển 1 đĩa trực tiếp từ ${from} sang ${to}.`,
        pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
        stackFrames: [...stackFrames],
        moveCount,
        activeFrameId: frameId,
        isBaseCase: true,
      });

      const disk = pegs[from].pop();
      pegs[to].push(disk);
      moveCount++;

      steps.push({
        activeLine: 3,
        status: `Bước #${moveCount}: Di chuyển Đĩa ${disk} từ Cọc ${from} ➔ Cọc ${to}.`,
        pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
        stackFrames: [...stackFrames],
        moveCount,
        activeFrameId: frameId,
        movedDisk: { disk, from, to },
      });

      stackFrames.pop();
      steps.push({
        activeLine: 4,
        status: `[POP Stack] Hoàn tất HANOI(1). Giải phóng khung hàm khỏi Call Stack.`,
        pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
        stackFrames: [...stackFrames],
        moveCount,
      });

      return;
    }

    // Step 1: Move n-1 disks from -> aux
    steps.push({
      activeLine: 5,
      status: `Bước 1: Gọi đệ quy chuyển ${n - 1} đĩa trên từ Cọc ${from} sang Cọc trung gian ${aux}.`,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
      stackFrames: [...stackFrames],
      moveCount,
      activeFrameId: frameId,
    });
    hanoi(n - 1, from, aux, to);

    // Step 2: Move remaining largest disk from -> to
    steps.push({
      activeLine: 6,
      status: `Bước 2: Di chuyển Đĩa lớn nhất (${n}) từ Cọc ${from} sang Cọc đích ${to}.`,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
      stackFrames: [...stackFrames],
      moveCount,
      activeFrameId: frameId,
    });
    const disk = pegs[from].pop();
    pegs[to].push(disk);
    moveCount++;

    steps.push({
      activeLine: 6,
      status: `Bước #${moveCount}: Đã di chuyển Đĩa ${disk} từ Cọc ${from} ➔ Cọc ${to}.`,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
      stackFrames: [...stackFrames],
      moveCount,
      activeFrameId: frameId,
      movedDisk: { disk, from, to },
    });

    // Step 3: Move n-1 disks aux -> to
    steps.push({
      activeLine: 7,
      status: `Bước 3: Gọi đệ quy chuyển ${n - 1} đĩa từ Cọc trung gian ${aux} sang Cọc đích ${to}.`,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
      stackFrames: [...stackFrames],
      moveCount,
      activeFrameId: frameId,
    });
    hanoi(n - 1, aux, to, from);

    stackFrames.pop();
    steps.push({
      activeLine: 8,
      status: `[POP Stack] Hoàn tất toàn bộ sub-problem HANOI(n=${n}). Trở về khung hàm cha.`,
      pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
      stackFrames: [...stackFrames],
      moveCount,
    });
  }

  hanoi(numDisks, "A", "C", "B");

  steps.push({
    activeLine: 8,
    status: `🎉 HOÀN THÀNH BÀI TOÁN THÁP HÀ NỘI! Tất cả ${numDisks} đĩa đã được chuyển sang Cọc C sau đúng ${moveCount} bước tối ưu!`,
    pegs: { A: [...pegs.A], B: [...pegs.B], C: [...pegs.C] },
    stackFrames: [],
    moveCount,
    isCompleted: true,
  });

  return steps;
}

// --- Fibonacci Step Generator ---
function generateFibonacciSteps(n) {
  const steps = [];
  const stackFrames = [];

  function fib(k) {
    const frameId = `FIB(${k})`;
    stackFrames.push({ id: frameId, name: `FIB(n=${k})`, k });

    steps.push({
      activeLine: 1,
      status: `[PUSH Stack] Gọi đệ quy FIB(${k}). Thêm khung hàm vào Call Stack.`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
    });

    if (k <= 1) {
      steps.push({
        activeLine: 2,
        status: `[Base Case!] FIB(${k}) với k <= 1. Trả về giá trị trực tiếp = ${k}.`,
        stackFrames: [...stackFrames],
        activeFrameId: frameId,
        returnValue: k,
        isBaseCase: true,
      });
      stackFrames.pop();
      steps.push({
        activeLine: 3,
        status: `[POP Stack & RETURN] FIB(${k}) trả về ${k}. Giải phóng khỏi Stack.`,
        stackFrames: [...stackFrames],
        returnValue: k,
      });
      return k;
    }

    steps.push({
      activeLine: 4,
      status: `Tính nhánh trái: FIB(${k - 1})...`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
    });
    const val1 = fib(k - 1);

    steps.push({
      activeLine: 5,
      status: `Tính nhánh phải: FIB(${k - 2})... (Đã có val1 = ${val1})`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
    });
    const val2 = fib(k - 2);

    const total = val1 + val2;
    steps.push({
      activeLine: 6,
      status: `Tổng hợp FIB(${k}) = FIB(${k - 1}) + FIB(${k - 2}) = ${val1} + ${val2} = ${total}.`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
      returnValue: total,
    });

    stackFrames.pop();
    steps.push({
      activeLine: 6,
      status: `[POP Stack & RETURN] FIB(${k}) trả về kết quả ${total}.`,
      stackFrames: [...stackFrames],
      returnValue: total,
    });
    return total;
  }

  const finalRes = fib(n);

  steps.push({
    activeLine: 7,
    status: `🎉 Kết quả Fibonacci thứ ${n} là: FIB(${n}) = ${finalRes}.`,
    stackFrames: [],
    returnValue: finalRes,
    isCompleted: true,
  });

  return steps;
}

// --- Factorial Step Generator ---
function generateFactorialSteps(n) {
  const steps = [];
  const stackFrames = [];

  function fact(k) {
    const frameId = `FACT(${k})`;
    stackFrames.push({ id: frameId, name: `FACTORIAL(n=${k})`, k });

    steps.push({
      activeLine: 1,
      status: `[PUSH Stack] Gọi FACTORIAL(${k}). Thêm khung hàm vào Call Stack.`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
    });

    if (k <= 1) {
      steps.push({
        activeLine: 2,
        status: `[Base Case!] k <= 1. Trả về giá trị 1.`,
        stackFrames: [...stackFrames],
        activeFrameId: frameId,
        returnValue: 1,
        isBaseCase: true,
      });
      stackFrames.pop();
      steps.push({
        activeLine: 3,
        status: `[POP Stack & RETURN] FACTORIAL(${k}) trả về 1.`,
        stackFrames: [...stackFrames],
        returnValue: 1,
      });
      return 1;
    }

    steps.push({
      activeLine: 4,
      status: `Gọi đệ quy con FACTORIAL(${k - 1})...`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
    });

    const sub = fact(k - 1);
    const total = k * sub;

    steps.push({
      activeLine: 5,
      status: `Tính FACTORIAL(${k}) = ${k} * FACTORIAL(${k - 1}) = ${k} * ${sub} = ${total}.`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
      returnValue: total,
    });

    stackFrames.pop();
    steps.push({
      activeLine: 5,
      status: `[POP Stack & RETURN] FACTORIAL(${k}) trả về ${total}.`,
      stackFrames: [...stackFrames],
      returnValue: total,
    });
    return total;
  }

  const finalRes = fact(n);

  steps.push({
    activeLine: 6,
    status: `🎉 Giai thừa của ${n}! là: ${finalRes}.`,
    stackFrames: [],
    returnValue: finalRes,
    isCompleted: true,
  });

  return steps;
}

// --- Pascal Triangle Step Generator ---
function generatePascalSteps(n, k) {
  const steps = [];
  const stackFrames = [];

  function pascal(nVal, kVal) {
    const frameId = `PASCAL(${nVal},${kVal})`;
    stackFrames.push({ id: frameId, name: `PASCAL(n=${nVal}, k=${kVal})`, nVal, kVal });

    steps.push({
      activeLine: 1,
      status: `[PUSH Stack] Gọi PASCAL(n=${nVal}, k=${kVal}).`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
    });

    if (kVal === 0 || kVal === nVal) {
      steps.push({
        activeLine: 2,
        status: `[Base Case!] k=${kVal} (bằng 0 hoặc bằng n=${nVal}). Trả về giá trị 1.`,
        stackFrames: [...stackFrames],
        activeFrameId: frameId,
        returnValue: 1,
        isBaseCase: true,
      });
      stackFrames.pop();
      steps.push({
        activeLine: 3,
        status: `[POP Stack & RETURN] PASCAL(${nVal}, ${kVal}) trả về 1.`,
        stackFrames: [...stackFrames],
        returnValue: 1,
      });
      return 1;
    }

    const v1 = pascal(nVal - 1, kVal - 1);
    const v2 = pascal(nVal - 1, kVal);
    const total = v1 + v2;

    steps.push({
      activeLine: 6,
      status: `PASCAL(${nVal}, ${kVal}) = ${v1} + ${v2} = ${total}.`,
      stackFrames: [...stackFrames],
      activeFrameId: frameId,
      returnValue: total,
    });

    stackFrames.pop();
    steps.push({
      activeLine: 6,
      status: `[POP Stack & RETURN] PASCAL(${nVal}, ${kVal}) trả về ${total}.`,
      stackFrames: [...stackFrames],
      returnValue: total,
    });
    return total;
  }

  const finalRes = pascal(n, Math.min(k, n));

  steps.push({
    activeLine: 7,
    status: `🎉 Tổ hợp C(${n}, ${k}) là: ${finalRes}.`,
    stackFrames: [],
    returnValue: finalRes,
    isCompleted: true,
  });

  return steps;
}

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

export default function RecursionLab({ onBack }) {
  // Mode Selection
  const [problem, setProblem] = useState("hanoi"); // 'hanoi' | 'fibonacci' | 'factorial' | 'pascal' | 'game' | 'memo'

  // Config Inputs
  const [diskCount, setDiskCount] = useState(3);
  const [nValue, setNValue] = useState(5);
  const [kValue, setKValue] = useState(2);

  // Mini Game State (Tháp Hà Nội Tự Giải)
  const [gamePegs, setGamePegs] = useState({ A: [3, 2, 1], B: [], C: [] });
  const [selectedPeg, setSelectedPeg] = useState(null);
  const [gameMoveCount, setGameMoveCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Animation Engine State
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);

  const timerRef = useRef(null);

  // Reset & Re-generate steps when inputs change
  useEffect(() => {
    let generated = [];
    if (problem === "hanoi") {
      generated = generateHanoiSteps(diskCount);
    } else if (problem === "fibonacci") {
      generated = generateFibonacciSteps(nValue);
    } else if (problem === "factorial") {
      generated = generateFactorialSteps(nValue);
    } else if (problem === "pascal") {
      generated = generatePascalSteps(nValue, Math.min(kValue, nValue));
    } else if (problem === "game") {
      // Init Game
      setGamePegs({
        A: Array.from({ length: diskCount }, (_, i) => diskCount - i),
        B: [],
        C: [],
      });
      setSelectedPeg(null);
      setGameMoveCount(0);
      setGameWon(false);
      return;
    }

    setSteps(generated);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [problem, diskCount, nValue, kValue]);

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

  // Mini Game Interactive Move Handler
  const handleGamePegClick = (pegName) => {
    if (gameWon) return;

    if (!selectedPeg) {
      // Select source peg
      if (gamePegs[pegName].length > 0) {
        setSelectedPeg(pegName);
      }
    } else {
      if (selectedPeg === pegName) {
        // Deselect
        setSelectedPeg(null);
        return;
      }

      const sourceTop = gamePegs[selectedPeg][gamePegs[selectedPeg].length - 1];
      const targetTop =
        gamePegs[pegName].length > 0
          ? gamePegs[pegName][gamePegs[pegName].length - 1]
          : Infinity;

      // Validate move (Can only place smaller disk on larger disk)
      if (sourceTop < targetTop) {
        const nextPegs = {
          A: [...gamePegs.A],
          B: [...gamePegs.B],
          C: [...gamePegs.C],
        };

        const disk = nextPegs[selectedPeg].pop();
        nextPegs[pegName].push(disk);

        const newMoves = gameMoveCount + 1;
        setGamePegs(nextPegs);
        setGameMoveCount(newMoves);
        setSelectedPeg(null);

        // Check victory
        if (nextPegs.C.length === diskCount) {
          setGameWon(true);
        }
      } else {
        // Invalid move
        setSelectedPeg(null);
      }
    }
  };

  const activeCodeRef = useRef(null);

  useEffect(() => {
    if (activeCodeRef.current) {
      activeCodeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentStep, problem]);

  const currentStepData = steps[currentStep] || {};
  const currentPseudocode = PROBLEM_PSEUDOCODES[problem] || PROBLEM_PSEUDOCODES.hanoi;

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300 pb-12">
      <style>{`
        @keyframes hanoiLiftY {
          0% {
            transform: translateY(0px) scale(1);
            animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          }
          30% {
            transform: translateY(-225px) scale(1.06);
            animation-timing-function: linear;
          }
          70% {
            transform: translateY(-225px) scale(1.06);
            animation-timing-function: cubic-bezier(0.4, 0, 0.8, 1);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes hanoiSlideX {
          0% {
            transform: translateX(var(--arc-start-x));
            animation-timing-function: linear;
          }
          30% {
            transform: translateX(var(--arc-start-x));
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          70% {
            transform: translateX(0px);
            animation-timing-function: linear;
          }
          100% {
            transform: translateX(0px);
          }
        }
      `}</style>
      {/* TIER 1: HEADER & PROBLEM SELECTION BAR */}
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
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                <RotateCcw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Mô Phỏng Thuật Toán Đệ Quy & Tháp Hà Nội
                </h1>
                <p className="text-xs text-slate-500 font-mono">
                  Call Stack Memory • Điều kiện dừng Base Case • Push/Pop Frames
                </p>
              </div>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            {[
              { id: "hanoi", label: "🗼 Tháp Hà Nội", icon: Layers },
              { id: "fibonacci", label: "🌀 Fibonacci", icon: Sparkles },
              { id: "factorial", label: "✖️ Giai thừa", icon: Zap },
              { id: "pascal", label: "📐 Pascal", icon: Award },
              { id: "game", label: "🎮 Game Tự Giải", icon: Gamepad2 },
            ].map((item) => {
              const isActive = problem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setProblem(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Controls based on Problem */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          {problem === "hanoi" || problem === "game" ? (
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-700">Số đĩa Tháp Hà Nội:</span>
              <input
                type="range"
                min="3"
                max="6"
                value={diskCount}
                onChange={(e) => setDiskCount(Number(e.target.value))}
                className="w-32 accent-indigo-600 cursor-pointer"
              />
              <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg border border-indigo-100">
                {diskCount} đĩa ({Math.pow(2, diskCount) - 1} bước)
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-700">Tham số N (1 - 7):</span>
              <input
                type="range"
                min="1"
                max="7"
                value={nValue}
                onChange={(e) => setNValue(Number(e.target.value))}
                className="w-32 accent-indigo-600 cursor-pointer"
              />
              <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg border border-indigo-100">
                N = {nValue}
              </span>

              {problem === "pascal" && (
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-xs font-semibold text-slate-700">Chỉ số K:</span>
                  <input
                    type="number"
                    min="0"
                    max={nValue}
                    value={kValue}
                    onChange={(e) => setKValue(Number(e.target.value))}
                    className="w-16 px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-slate-800"
                  />
                </div>
              )}
            </div>
          )}

          {problem === "game" && (
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span>Đã di chuyển:</span>
              <span className="font-mono text-indigo-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                {gameMoveCount} / {Math.pow(2, diskCount) - 1} bước tối ưu
              </span>
            </div>
          )}
        </div>
      </div>

        {/* TIER 2: MAIN SIDE-BY-SIDE 3-PANEL NO-SCROLL LAYOUT */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col">
        {/* Playback Controls & Status Toolbar */}
        <div className="px-5 py-3 bg-slate-100/90 text-slate-800 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-wider text-purple-600 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Bảng Mô Phỏng Ngang Hàng (Side-by-Side Grid)</span>
            </span>

            {problem !== "game" && (
              <span className="text-xs font-mono font-bold bg-white text-indigo-700 px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-2xs">
                Bước {currentStep + 1} / {steps.length || 1}
              </span>
            )}
          </div>

          {/* Active Controls Toolbar */}
          {problem !== "game" && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                title="Khởi tạo lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleStepBack}
                disabled={currentStep === 0}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                title="Lùi lại 1 bước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleTogglePlay}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-white" />
                    <span>Tạm dừng</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Chạy tự động</span>
                  </>
                )}
              </button>
              <button
                onClick={handleStepForward}
                disabled={currentStep >= steps.length - 1}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                title="Bước tiếp theo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleSkipToEnd}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
                title="Nhảy đến kết thúc"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>

              <div className="h-4 w-px bg-slate-300 mx-1" />

              <span className="text-[11px] font-semibold text-slate-600">Tốc độ:</span>
              <input
                type="range"
                min="200"
                max="1500"
                step="100"
                value={1700 - speed}
                onChange={(e) => setSpeed(1700 - Number(e.target.value))}
                className="w-24 accent-purple-600 cursor-pointer"
              />
              <span className="text-[11px] font-mono font-bold text-purple-600 w-10 text-right">
                {speed}ms
              </span>
            </div>
          )}
        </div>

        {/* Visual Workspace Canvas (SIDE-BY-SIDE 3-PANEL GRID) */}
        <div className="relative w-full h-[460px] grid grid-cols-12 select-none overflow-hidden">
          
          {/* PANEL 1 (LEFT - 3.5 COLS): PSEUDOCODE INSPECTOR */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 bg-slate-900 text-slate-100 p-4 border-r border-slate-800 flex flex-col justify-between overflow-hidden shadow-inner">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-100">
                    Mã Giả [{problem.toUpperCase()}]
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/80 font-bold">
                  Pseudocode
                </span>
              </div>

              {/* Code Lines Container */}
              <div className="space-y-1 font-mono text-xs max-h-[250px] overflow-y-auto pr-1">
                {currentPseudocode.map((item) => {
                  const isActive = currentStepData.activeLine === item.line;
                  return (
                    <div
                      key={item.line}
                      ref={isActive ? activeCodeRef : null}
                      className={`p-1.5 rounded-lg flex items-center gap-2.5 transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-purple-900/90 to-indigo-900/90 text-amber-300 border-l-4 border-amber-400 pl-2 font-bold shadow-md scale-[1.01]"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span className="text-[10px] opacity-50 w-5 text-right font-mono">{item.line}</span>
                      <span className="truncate">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Explanation & Mini Variables Inspector */}
            <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
              <div className="p-2.5 bg-slate-800/90 rounded-xl border border-slate-700 text-xs font-sans text-slate-200 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px]">{currentStepData.status || "Sẵn sàng chạy đệ quy."}</span>
              </div>

              {/* Mini Variables Inspector */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-1.5 bg-slate-950/80 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">Số bước</span>
                  <span className="font-bold text-indigo-400">{currentStepData.moveCount ?? currentStep + 1}</span>
                </div>
                <div className="p-1.5 bg-slate-950/80 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">Max Stack</span>
                  <span className="font-bold text-purple-400">{currentStepData.stackFrames?.length || 0}</span>
                </div>
                <div className="p-1.5 bg-slate-950/80 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">Trả về</span>
                  <span className="font-bold text-emerald-400">{currentStepData.returnValue ?? "—"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* PANEL 2 (CENTER - 5.5 COLS): GRAPHICAL STAGE CANVAS */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-6 p-5 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-100/80 flex flex-col items-center justify-between relative border-r border-slate-200/80 overflow-hidden">
            {/* Subtle Soft Dot Grid Background */}
            <div
              className="absolute inset-0 opacity-35 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
                backgroundSize: "24px 24px",
              }}
            />

            {problem === "hanoi" || problem === "game" ? (
              /* TOWER OF HANOI STAGE */
              <div className="w-full h-full flex flex-col items-center justify-between relative z-10">
                <div className="w-full flex items-center justify-between px-2 mb-1">
                  <span className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                    <span>{problem === "game" ? "🎮 Chế độ Tự Giải: Click cọc nguồn ➔ Click cọc đích" : "🗼 Trực quan hóa Di chuyển 3D trên 3 Cọc A, B, C"}</span>
                  </span>
                  {currentStepData?.movedDisk && (
                    <span className="text-[11px] font-mono font-black bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-0.5 rounded-full animate-pulse flex items-center gap-1 shadow-xs">
                      <span>⚡ Đĩa {currentStepData.movedDisk.disk}: Cọc {currentStepData.movedDisk.from} ➔ Cọc {currentStepData.movedDisk.to}</span>
                    </span>
                  )}
                </div>

                {/* 3 Pegs Container */}
                <div className="w-full flex-1 grid grid-cols-3 gap-6 items-end pb-2 px-2">
                  {["A", "B", "C"].map((pegName) => {
                    const currentPegDisks =
                      problem === "game"
                        ? gamePegs[pegName]
                        : currentStepData.pegs
                        ? currentStepData.pegs[pegName]
                        : [];

                    const isSelected = selectedPeg === pegName;

                    return (
                      <div
                        key={pegName}
                        onClick={() => problem === "game" && handleGamePegClick(pegName)}
                        className={`flex flex-col items-center justify-end h-full relative cursor-pointer group p-2 rounded-2xl transition-all ${
                          isSelected
                            ? "bg-indigo-50/90 ring-2 ring-indigo-500 shadow-md"
                            : "hover:bg-slate-200/40"
                        }`}
                      >
                        {/* 1. Metallic Peg Tracing Stage */}
                        <div className="relative w-full h-[230px] flex flex-col items-center justify-end">
                          {/* Silver-White Chrome Rod Stand */}
                          <div className="absolute bottom-0 w-4 h-[210px] bg-gradient-to-r from-slate-300 via-white to-slate-400 rounded-t-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-0 flex flex-col justify-start items-center pt-1.5 border border-slate-300/80">
                            {/* Glowing Gem at Peg Top */}
                            <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-indigo-600 shadow-[0_0_10px_#6366f1] animate-ping" : "bg-indigo-500 shadow-[0_0_6px_#6366f1]"}`} />
                          </div>

                          {/* 2. Stacked 3D Disks (Centered on Peg Container) */}
                          <div className="w-full flex flex-col-reverse items-center gap-1.5 mb-1 relative z-10">
                            {currentPegDisks.map((diskVal) => {
                              // Disk Width ratio in pixels
                              const widthPx = 45 + (diskVal / diskCount) * 120;
                              
                              // Vibrant Light 3D Color Palette
                              const diskPalettes = [
                                { bg: "from-rose-500 via-rose-400 to-pink-500", shadow: "shadow-[0_4px_14px_rgba(244,63,94,0.35)]", border: "border-white/60" },
                                { bg: "from-sky-500 via-blue-500 to-indigo-600", shadow: "shadow-[0_4px_14px_rgba(14,165,233,0.35)]", border: "border-white/60" },
                                { bg: "from-emerald-500 via-teal-500 to-emerald-600", shadow: "shadow-[0_4px_14px_rgba(16,185,129,0.35)]", border: "border-white/60" },
                                { bg: "from-amber-500 via-orange-400 to-amber-600", shadow: "shadow-[0_4px_14px_rgba(245,158,11,0.35)]", border: "border-white/60" },
                                { bg: "from-purple-500 via-violet-500 to-purple-600", shadow: "shadow-[0_4px_14px_rgba(168,85,247,0.35)]", border: "border-white/60" },
                                { bg: "from-indigo-500 via-blue-600 to-cyan-600", shadow: "shadow-[0_4px_14px_rgba(99,102,241,0.35)]", border: "border-white/60" },
                              ];
                              const style = diskPalettes[(diskVal - 1) % diskPalettes.length];

                              const isMoved = currentStepData?.movedDisk?.disk === diskVal;
                              let startDeltaX = 0;
                              if (isMoved && currentStepData?.movedDisk) {
                                const pegMap = { A: 0, B: 1, C: 2 };
                                const fromI = pegMap[currentStepData.movedDisk.from] ?? 0;
                                const toI = pegMap[currentStepData.movedDisk.to] ?? 0;
                                startDeltaX = (fromI - toI) * 180; // calculate offset in pixels
                              }

                              // Calculate smooth animation duration scaled to speed (e.g. 1.1s)
                              const animDurationSec = Math.max(0.75, Math.min(1.35, (speed * 0.82) / 1000)).toFixed(2);

                              return (
                                <div
                                  key={diskVal}
                                  style={{
                                    width: `${widthPx}px`,
                                    "--arc-start-x": `${startDeltaX}px`,
                                    animation: isMoved ? `hanoiSlideX ${animDurationSec}s linear forwards` : undefined,
                                    willChange: "transform"
                                  }}
                                  className="relative z-10 select-none"
                                >
                                  <div
                                    style={{
                                      animation: isMoved ? `hanoiLiftY ${animDurationSec}s linear forwards` : undefined,
                                      willChange: "transform"
                                    }}
                                    className={`w-full h-7 rounded-xl bg-gradient-to-r ${style.bg} ${style.shadow} ${style.border} border text-white font-mono font-black text-xs flex items-center justify-between px-2.5 relative transition-all duration-300 transform hover:scale-105 ${
                                      isMoved ? "ring-2 ring-amber-400 shadow-[0_0_20px_#f59e0b] z-30" : ""
                                    }`}
                                  >
                                    {/* Left Bevel Indicator */}
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-inner" />
                                    
                                    {/* Center Disk Label */}
                                    <span className="drop-shadow-sm tracking-wider text-[11px] font-black">
                                      ĐĨA {diskVal}
                                    </span>

                                    {/* Right Bevel Indicator */}
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-inner" />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* 3. Sleek Glassmorphic Light Base Platform */}
                        <div className="w-full h-8 bg-white/95 border border-slate-200/90 rounded-xl shadow-md backdrop-blur-md mt-1 flex items-center justify-center relative overflow-hidden group-hover:border-indigo-400 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-pink-50/50" />
                          <span className="text-xs font-mono font-black text-slate-800 uppercase tracking-widest relative z-10 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse shadow-[0_0_6px_#6366f1]" />
                            CỌC {pegName}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Victory Banner for Game Mode */}
                {problem === "game" && gameWon && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 z-30 animate-in zoom-in-95 border border-indigo-100 shadow-2xl">
                    <Trophy className="w-16 h-16 text-amber-500 animate-bounce mb-3 shadow-sm" />
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wider">
                      CHIẾN THẮNG RỰC RỠ!
                    </h2>
                    <p className="text-xs text-slate-600 mt-2 font-mono">
                      Bạn đã hoàn thành Tháp Hà Nội {diskCount} đĩa trong {gameMoveCount} bước!
                    </p>
                    <button
                      onClick={() => {
                        setGamePegs({
                          A: Array.from({ length: diskCount }, (_, i) => diskCount - i),
                          B: [],
                          C: [],
                        });
                        setGameMoveCount(0);
                        setGameWon(false);
                      }}
                      className="mt-5 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xs font-black shadow-lg hover:brightness-110 transition-all cursor-pointer"
                    >
                      Chơi lại ngay
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* RECURSION TREE & STATS STAGE (For Fibonacci, Factorial, Pascal) */
              <div className="w-full h-full flex flex-col items-center justify-center p-4 relative z-10">
                <div className="p-6 bg-white/95 rounded-2xl border border-slate-200/90 shadow-md text-center max-w-md w-full backdrop-blur-md">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl inline-block mb-3 border border-indigo-100">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
                    {problem.toUpperCase()} (N = {nValue})
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Đang theo dõi bộ nhớ Call Stack và tiến trình truyền giá trị trả về ở cột bên phải.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-around">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        Số lượng khung Stack
                      </span>
                      <span className="text-sm font-mono font-bold text-indigo-600">
                        {currentStepData.stackFrames?.length || 0} khung
                      </span>
                    </div>
                    <div className="h-6 w-px bg-slate-200" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        Giá trị trả về gần nhất
                      </span>
                      <span className="text-sm font-mono font-bold text-emerald-600">
                        {currentStepData.returnValue !== undefined
                          ? currentStepData.returnValue
                          : "—"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PANEL 3 (RIGHT - 3.0 COLS): CALL STACK RAM VISUALIZER */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-3 p-4 bg-slate-100/80 border-l border-slate-200 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-600 animate-pulse" />
                  <span>Call Stack RAM</span>
                </span>
                <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-100 font-bold">
                  BỘ NHỚ LƯU TRỮ
                </span>
              </div>

              {/* Stack Frames Container (Bottom-to-Top Stack) */}
              <div className="w-full flex flex-col-reverse gap-2 max-h-[350px] overflow-y-auto pr-1">
                {currentStepData.stackFrames?.length > 0 ? (
                  currentStepData.stackFrames.map((frame, idx) => {
                    const isTop = idx === currentStepData.stackFrames.length - 1;
                    return (
                      <div
                        key={frame.id + idx}
                        className={`p-2.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-between transition-all duration-300 shadow-xs ${
                          isTop
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-700 shadow-md scale-[1.02] ring-2 ring-indigo-300"
                            : "bg-white text-slate-700 border-slate-200/90 opacity-95"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] opacity-70">[{idx}]</span>
                          <span className="tracking-tight">{frame.name}</span>
                        </div>
                        {isTop && (
                          <span className="text-[9px] bg-cyan-400 text-slate-950 px-1.5 py-0.5 rounded font-black uppercase tracking-wider animate-pulse shadow-xs">
                            TOP
                          </span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-14 text-slate-400 italic text-xs font-mono border border-dashed border-slate-300/80 rounded-xl bg-white/50">
                    (Bộ nhớ Call Stack rỗng — sẵn sàng thực thi)
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                ⬇️ Đáy Stack (Main) ➔ Đỉnh Stack (Top) ⬆️
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: FULL PSEUDOCODE BLOCK & LINE-BY-LINE EXPLANATION (MIDDLE SECTION) */}
      <div className="w-full bg-slate-900 text-slate-100 p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col gap-4 mt-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Bộ Mã Giả Full & Giải Thích Chi Tiết [{problem.toUpperCase()}]
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Bản mã giả chuẩn giáo trình kèm lời dịch nghĩa từng câu lệnh
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800 font-bold">
            Full Pseudocode & Explanation
          </span>
        </div>

        {/* AUTHENTIC VS CODE CODE EDITOR WITH INLINE GREEN COMMENTS */}
        <div className="bg-[#0d1117] rounded-3xl border border-slate-800/90 overflow-hidden font-mono text-xs flex flex-col shadow-2xl">
          {/* VS Code Window Header Bar */}
          <div className="bg-[#161b22] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-300 font-mono ml-3 flex items-center gap-2 bg-[#0d1117] px-4 py-1.5 rounded-t-xl border-t border-x border-slate-800 font-bold">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>{problem}.js — Code & Comment Chuẩn VS Code</span>
              </span>
            </div>
            <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80 font-bold">
              VS Code Comment Mode
            </span>
          </div>

          {/* Code Lines with Green Inline Comments */}
          <div className="p-6 space-y-2.5 leading-relaxed overflow-x-auto">
            {currentPseudocode.map((item) => {
              // Strip out any existing "// ..." from item.text if present to prevent duplication
              const cleanText = item.text.split("//")[0].trimEnd();
              
              const commentText = 
                item.line === 1
                  ? "// Khai báo hàm đệ quy với N đĩa và 3 cọc vai trò (Nguồn, Phụ, Đích)"
                  : item.line === 2
                  ? "// Điều kiện dừng (Base Case): Khi chỉ còn 1 đĩa duy nhất"
                  : item.line === 3
                  ? "// Thực thi bước cơ sở: Chuyển trực tiếp 1 đĩa từ Nguồn sang Đích"
                  : item.line === 4
                  ? "// Thoát khỏi nhánh đệ quy hiện tại"
                  : item.line === 5
                  ? "// Gọi đệ quy 1 (Bước 1): Chuyển N-1 đĩa trên cùng từ Nguồn sang Phụ"
                  : item.line === 6
                  ? "// Bước 2 (Chốt đáy): Di chuyển đĩa lớn nhất còn lại (đĩa thứ N) từ Nguồn sang Đích"
                  : item.line === 7
                  ? "// Gọi đệ quy 2 (Bước 3): Chuyển N-1 đĩa từ Phụ về Đích"
                  : "// Kết thúc giải thuật";

              return (
                <div key={item.line} className="flex items-baseline gap-4 hover:bg-slate-800/40 px-2 py-1 rounded transition-colors group">
                  {/* Line Number */}
                  <span className="text-xs text-slate-500 w-6 text-right font-mono select-none shrink-0 group-hover:text-slate-300">
                    {item.line}
                  </span>

                  {/* Code Line Text */}
                  <span className="text-amber-300 font-bold whitespace-pre font-mono shrink-0">
                    {cleanText}
                  </span>

                  {/* Green Comment Text like VS Code */}
                  <span className="text-emerald-400 font-semibold italic text-xs font-mono">
                    {commentText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* TIER 3: ALGORITHM METRICS & THEORETICAL ANALYSIS (BOTTOM SECTION BENTO CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* CARD 1: REALTIME METRICS */}
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Thống Kê Tiến Trình Realtime</h3>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <span className="text-[10px] text-slate-500 block">Số bước</span>
              <span className="text-sm font-bold text-indigo-600">
                {currentStepData.moveCount !== undefined ? currentStepData.moveCount : currentStep + 1}
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <span className="text-[10px] text-slate-500 block">Max Stack</span>
              <span className="text-sm font-bold text-purple-600">
                {currentStepData.stackFrames?.length || 0}
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <span className="text-[10px] text-slate-500 block">Trả về</span>
              <span className="text-sm font-bold text-emerald-600">
                {currentStepData.returnValue !== undefined ? currentStepData.returnValue : "—"}
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2: THEORETICAL COMPLEXITY */}
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
            <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-100">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Độ Phức Tạp Lý Thuyết</h3>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <div className="p-2.5 bg-purple-50/80 border border-purple-100 rounded-xl">
              <span className="text-[10px] text-slate-500 block font-bold">Thời gian (Time)</span>
              <span className="font-bold text-purple-700">T(n) = 2ⁿ - 1 ➔ O(2ⁿ)</span>
            </div>
            <div className="p-2.5 bg-indigo-50/80 border border-indigo-100 rounded-xl">
              <span className="text-[10px] text-slate-500 block font-bold">Không gian (Space)</span>
              <span className="font-bold text-indigo-700">Stack Depth ➔ O(n)</span>
            </div>
          </div>
        </div>

        {/* CARD 3: DIVIDE & CONQUER STRATEGY */}
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Tư Duy Chia Để Trị</h3>
          </div>

          <p className="text-[11px] font-sans text-slate-600 leading-relaxed">
            Hạ bậc bài toán kích thước N xuống N-1 đĩa. Khi đụng Base Case (N=1), đĩa được chuyển trực tiếp và thu hồi bộ nhớ Stack.
          </p>
        </div>
      </div>
    </div>
  );
}
