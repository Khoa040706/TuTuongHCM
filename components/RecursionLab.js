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
  ArrowUpRight
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

  const currentStepData = steps[currentStep] || {};
  const currentPseudocode = PROBLEM_PSEUDOCODES[problem] || PROBLEM_PSEUDOCODES.hanoi;

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300 pb-12">
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

      {/* TIER 2: DUAL CANVAS (GRAPHIC STAGE & CALL STACK MEMORY) */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
        {/* Canvas Header */}
        <div className="px-6 py-4 bg-slate-100/90 text-slate-800 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider uppercase text-purple-600 flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4" />
              <span>Canvas Mô Phỏng Đệ Quy Kép</span>
            </span>

            {problem !== "game" && (
              <span className="text-xs text-slate-500 font-mono">
                Bước {currentStep + 1} / {steps.length || 1}
              </span>
            )}
          </div>

          {/* Active Pseudocode Line Badge */}
          {problem !== "game" && (
            <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 max-w-xl overflow-hidden shadow-sm">
              <span className="text-[11px] font-mono text-slate-400 shrink-0">💻 Code:</span>
              <span className="text-xs font-mono font-semibold text-cyan-300 truncate">
                {currentPseudocode.find((p) => p.line === currentStepData.activeLine)?.text ||
                  "Sẵn sàng..."}
              </span>
            </div>
          )}
        </div>

        {/* Visual Workspace Canvas */}
        <div className="relative w-full h-[460px] bg-slate-50 overflow-hidden grid grid-cols-12 select-none border-b border-slate-200/60">
          {/* Subtle Grid Dot Background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* LEFT STAGE (7 Cols): GRAPHICAL STAGE (Pegs & Disks or Recursive Call Graph) */}
          <div className="col-span-8 p-6 flex flex-col items-center justify-center relative border-r border-slate-200/80">
            {problem === "hanoi" || problem === "game" ? (
              /* TOWER OF HANOI STAGE */
              <div className="w-full h-full flex flex-col items-center justify-between">
                <div className="w-full text-center mb-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {problem === "game"
                      ? "Click chọn cọc nguồn rồi click cọc đích để di chuyển đĩa"
                      : "Trực quan hóa di chuyển đĩa giữa 3 cọc A, B, C"}
                  </span>
                </div>

                {/* 3 Pegs Container */}
                <div className="w-full flex-1 grid grid-cols-3 gap-6 items-end pb-6 px-4">
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
                            ? "bg-indigo-50/80 ring-2 ring-indigo-500 shadow-md"
                            : "hover:bg-slate-100/60"
                        }`}
                      >
                        {/* Vertical Wood Peg Stand */}
                        <div className="w-3.5 h-[200px] bg-slate-300 rounded-t-full shadow-inner relative z-0 flex flex-col justify-end items-center">
                          {/* Render Stacked Disks on Peg */}
                          <div className="w-full flex flex-col-reverse items-center gap-1 mb-1 relative z-10">
                            {currentPegDisks.map((diskVal) => {
                              // Disk Width ratio
                              const widthPercent = 30 + (diskVal / diskCount) * 65;
                              // Colorful disk gradients
                              const colors = [
                                "from-pink-500 to-rose-600",
                                "from-cyan-400 to-blue-600",
                                "from-emerald-400 to-teal-600",
                                "from-amber-400 to-orange-500",
                                "from-purple-500 to-indigo-600",
                                "from-fuchsia-500 to-pink-600",
                              ];
                              const diskBg = colors[(diskVal - 1) % colors.length];

                              return (
                                <div
                                  key={diskVal}
                                  style={{ width: `${widthPercent}%` }}
                                  className={`h-7 rounded-xl bg-gradient-to-r ${diskBg} text-white font-mono font-extrabold text-xs flex items-center justify-center shadow-md border border-white/40 transition-all duration-300 animate-in fade-in zoom-in-75`}
                                >
                                  <span>{diskVal}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Base Wooden Base */}
                        <div className="w-full h-4 bg-slate-700 rounded-xl shadow-md mt-1 flex items-center justify-center">
                          <span className="text-[10px] font-mono font-bold text-white uppercase">
                            CỌC {pegName}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Victory Banner for Game Mode */}
                {problem === "game" && gameWon && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-6 z-30 animate-in zoom-in-95">
                    <Trophy className="w-16 h-16 text-amber-500 animate-bounce mb-3" />
                    <h2 className="text-xl font-extrabold text-slate-900">
                      CHIẾN THẮNG RỰC RỠ!
                    </h2>
                    <p className="text-xs text-slate-600 mt-1 font-mono">
                      Bạn đã hoàn thành Tháp Hà Nội {diskCount} đĩa sau {gameMoveCount} bước!
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
                      className="mt-4 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-indigo-700 transition-colors"
                    >
                      Chơi lại
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* RECURSION TREE & STATS STAGE (For Fibonacci, Factorial, Pascal) */
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-md text-center max-w-md w-full">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl inline-block mb-3 border border-purple-100">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                    {problem.toUpperCase()} (N = {nValue})
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Đang theo dõi bộ nhớ Call Stack và tiến trình truyền giá trị trả về bên cột
                    bên phải.
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

          {/* RIGHT STAGE (4 Cols): CALL STACK MEMORY VISUALIZER */}
          <div className="col-span-4 p-5 bg-slate-100/60 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Call Stack Memory</span>
                </span>
                <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-100">
                  RAM
                </span>
              </div>

              {/* Stack Frames Container (Bottom-to-Top Stack) */}
              <div className="w-full flex flex-col-reverse gap-2 max-h-[340px] overflow-y-auto pr-1">
                {currentStepData.stackFrames?.length > 0 ? (
                  currentStepData.stackFrames.map((frame, idx) => {
                    const isTop = idx === currentStepData.stackFrames.length - 1;
                    return (
                      <div
                        key={frame.id + idx}
                        className={`p-3 rounded-xl border text-xs font-mono font-bold flex items-center justify-between transition-all duration-300 shadow-xs ${
                          isTop
                            ? "bg-indigo-600 text-white border-indigo-700 scale-[1.02] shadow-md ring-2 ring-indigo-300"
                            : "bg-white text-slate-700 border-slate-200 opacity-80"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] opacity-70">[{idx}]</span>
                          <span>{frame.name}</span>
                        </div>
                        {isTop && (
                          <span className="text-[9px] bg-cyan-400 text-slate-950 px-1.5 py-0.5 rounded font-bold uppercase animate-pulse">
                            TOP
                          </span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 text-slate-400 italic text-xs font-mono">
                    (Bộ nhớ Call Stack rỗng)
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                ⬇️ Đáy Stack (Main) ➔ Đỉnh Stack (Top) ⬆️
              </span>
            </div>
          </div>
        </div>

        {/* Step Explanation Status Banner */}
        {problem !== "game" && (
          <div className="px-6 py-3 bg-purple-50/70 border-t border-purple-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-purple-600 text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs font-medium text-purple-950">
                {currentStepData.status || "Sẵn sàng chạy đệ quy."}
              </p>
            </div>

            {currentStepData.isCompleted && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Hoàn tất Đệ Quy!
              </span>
            )}
          </div>
        )}

        {/* Playback Controls Toolbar */}
        {problem !== "game" && (
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
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
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
                className="w-32 accent-purple-600 cursor-pointer"
              />
              <span className="text-xs font-mono font-bold text-purple-600 w-12 text-right">
                {speed}ms
              </span>
            </div>
          </div>
        )}
      </div>

      {/* TIER 3: BOTTOM SPLIT GRID (VARIABLES & LOG VS PSEUDOCODE PANEL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN (6 Cols): METRICS & LOG */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Thống kê Bộ nhớ & Tiến trình</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <span className="text-[10px] font-mono text-slate-500 block">Số bước di chuyển</span>
                <span className="text-sm font-mono font-bold text-indigo-600">
                  {currentStepData.moveCount !== undefined
                    ? currentStepData.moveCount
                    : currentStep + 1}
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <span className="text-[10px] font-mono text-slate-500 block">Độ sâu Stack max</span>
                <span className="text-sm font-mono font-bold text-purple-600">
                  {currentStepData.stackFrames?.length || 0}
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <span className="text-[10px] font-mono text-slate-500 block">
                  Giá trị trả về
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

        {/* RIGHT COLUMN (6 Cols): PSEUDOCODE PANEL (DARK MODE ONLY) */}
        <div className="lg:col-span-6 bg-slate-900 text-slate-100 p-5 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Mã Giả Đệ Quy [{problem.toUpperCase()}]
                </h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                Pseudocode
              </span>
            </div>

            {/* Line-by-Line Pseudocode Rendering */}
            <div className="flex flex-col gap-1 font-mono text-xs">
              {currentPseudocode.map((item) => {
                const isActive = item.line === currentStepData.activeLine;
                return (
                  <div
                    key={item.line}
                    className={`px-3 py-1.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-purple-600/90 text-white font-extrabold border-l-4 border-cyan-400 scale-[1.02] shadow-md"
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
              <span className="text-cyan-400 font-bold">
                {problem === "hanoi" || problem === "fibonacci" ? "O(2ⁿ)" : "O(n)"}
              </span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Độ phức tạp không gian (Stack):</span>
              <span className="text-purple-400 font-bold">O(n)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
