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
  ArrowDown,
  Code2,
  Info,
  Sliders,
  Keyboard,
  Activity,
  HelpCircle,
  Trophy,
  Award,
  Layers,
  Flame,
  Scissors,
  Check
} from "lucide-react";

// Standardized English Pseudocode with Prominent Vietnamese Explanations
const PSEUDOCODE = [
  { line: 1, text: "procedure MERGE_SORT(arr, left, right):", explain: "Thủ tục chính sắp xếp trộn mảng arr từ left đến right" },
  { line: 2, text: "  if left >= right then return // Base case", explain: "Điểm dừng đệ quy: mảng con chỉ còn 0 hoặc 1 phần tử" },
  { line: 3, text: "  mid = (left + right) / 2", explain: "Tính chỉ số giữa mid để chia đôi mảng thành 2 nửa" },
  { line: 4, text: "  MERGE_SORT(arr, left, mid)", explain: "Gọi đệ quy sắp xếp nửa bên trái từ left đến mid" },
  { line: 5, text: "  MERGE_SORT(arr, mid + 1, right)", explain: "Gọi đệ quy sắp xếp nửa bên phải từ mid + 1 đến right" },
  { line: 6, text: "  MERGE(arr, left, mid, right)", explain: "Trộn 2 mảng con đã sắp xếp thành 1 mảng hoàn chỉnh" },
  { line: 7, text: "end procedure", explain: "Kết thúc thủ tục đệ quy MERGE_SORT" },
  { line: 8, text: "procedure MERGE(arr, left, mid, right):", explain: "Thủ tục con trộn 2 đoạn đã sắp xếp [left..mid] và [mid+1..right]" },
  { line: 9, text: "  while i <= mid and j <= right do:", explain: "Vòng lặp so sánh 2 con trỏ i (nửa trái) và j (nửa phải)" },
  { line: 10, text: "    if Left[i] <= Right[j] then arr[k] = Left[i++]", explain: "Nếu phần tử trái nhỏ hơn hoặc bằng, chép vào arr[k] và tăng i" },
  { line: 11, text: "    else arr[k] = Right[j++]", explain: "Ngược lại chép phần tử phải vào arr[k] và tăng j" },
  { line: 12, text: "  copy remaining elements to arr[k]", explain: "Sao chép tất cả phần tử dư còn lại vào mảng chính arr[k]" },
];

const PYTHON_CODE = [
  { line: 1, text: "def merge_sort(arr, left, right):", explain: "Hàm đệ quy Merge Sort bằng ngôn ngữ Python" },
  { line: 2, text: "    if left >= right: return", explain: "Kiểm tra điều kiện dừng đệ quy" },
  { line: 3, text: "    mid = (left + right) // 2", explain: "Phép chia lấy nguyên tìm chỉ số giữa mid" },
  { line: 4, text: "    merge_sort(arr, left, mid)", explain: "Gọi đệ quy sắp xếp nửa mảng trái" },
  { line: 5, text: "    merge_sort(arr, mid + 1, right)", explain: "Gọi đệ quy sắp xếp nửa mảng phải" },
  { line: 6, text: "    merge(arr, left, mid, right)", explain: "Trộn hai nửa đã sắp xếp" },
  { line: 7, text: "def merge(arr, left, mid, right):", explain: "Hàm phụ trách trộn 2 mảng con" },
  { line: 8, text: "    # Compare L[i] vs R[j] and put into arr[k]", explain: "So sánh và gán phần tử thắng vào mảng arr[k]" },
];

const JAVA_CODE = [
  { line: 1, text: "void mergeSort(int[] arr, int left, int right) {", explain: "Phương thức đệ quy Merge Sort trong Java" },
  { line: 2, text: "    if (left >= right) return;", explain: "Điều kiện cơ sở dừng đệ quy" },
  { line: 3, text: "    int mid = (left + right) / 2;", explain: "Tính vị trí giữa mid" },
  { line: 4, text: "    mergeSort(arr, left, mid);", explain: "Gọi đệ quy sắp xếp nửa trái" },
  { line: 5, text: "    mergeSort(arr, mid + 1, right);", explain: "Gọi đệ quy sắp xếp nửa phải" },
  { line: 6, text: "    merge(arr, left, mid, right);", explain: "Gọi thủ tục trộn 2 nửa mảng" },
  { line: 7, text: "}", explain: "Kết thúc phương thức mergeSort" },
];

// STAGE GEOMETRY (VIEWBOX 800 x 480)
const STAGE_W = 800;
const STAGE_H = 480;
const BALL_R = 18;

// Dynamic Tier Y spacing based on max recursion depth (Safely avoids top clipping)
function getTierY(depth, maxDepth = 3) {
  if (maxDepth >= 4) {
    const topMargin = 100;
    const tierGap = 70;
    return topMargin + depth * tierGap;
  }
  const topMargin = 110;
  const tierGap = 85;
  return topMargin + depth * tierGap;
}

// Master Step Generator
function generateDetailedMergeSortSteps(initialArr) {
  const steps = [];
  let comparisons = 0;
  let mergeWrites = 0;

  const n = initialArr.length;

  let balls = initialArr.map((val, idx) => ({
    id: `ball-${idx}-${typeof val === "object" ? val.value : val}`,
    val: typeof val === "object" ? val.value : val,
    tag: `${typeof val === "object" ? val.value : val}`,
    originalIdx: idx,
    depth: 0,
    slotIdx: idx,
    sideOffset: 0,
  }));

  const treeNodes = [];
  let nodeCounter = 0;

  const cloneBalls = (bList) => bList.map((b) => ({ ...b }));

  // 0. ENTRY_DROP
  steps.push({
    activeLine: 1,
    phase: "ENTRY_DROP",
    status: `🎬 Khởi tạo mảng gồm ${n} phần tử tại Tầng 0. Chuẩn bị chia để trị!`,
    balls: cloneBalls(balls),
    depth: 0,
    comparisons: 0,
    mergeWrites: 0,
    treeNodes: [],
    activeTreeNodeId: null,
  });

  function mergeSortHelper(left, right, depth = 0, parentNodeId = null) {
    const nodeId = `node-${nodeCounter++}`;
    const currentNode = { id: nodeId, left, right, depth, parentNodeId, status: "active" };
    treeNodes.push(currentNode);

    for (let i = left; i <= right; i++) {
      const b = balls.find((ball) => ball.slotIdx === i && ball.depth <= depth);
      if (b) b.depth = depth;
    }

    if (left >= right) {
      steps.push({
        activeLine: 2,
        phase: "ATOMIC_PULSE",
        status: `⚡ [CƠ SỞ] Mảng con [${left}..${right}] chỉ có 1 phần tử tại Tầng ${depth} — Đã đạt kích thước tối thiểu!`,
        balls: cloneBalls(balls),
        left,
        right,
        depth,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });
      return;
    }

    const mid = Math.floor((left + right) / 2);

    // 1. SPLIT_RUN_UP (Giương kiếm cao)
    steps.push({
      activeLine: 3,
      phase: "SPLIT_RUN_UP",
      status: `🏃 [THE SPLITTER] Splitter giương cao kiếm Laser Cyan tại ranh giới mid = ${mid}!`,
      balls: cloneBalls(balls),
      left,
      right,
      mid,
      depth,
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    // 2. LEAP_SOMERSAULT_SLASH (CHẶT XUỐNG CỰC MẠNH NGAY CHÍNH GIỮA)
    steps.push({
      activeLine: 3,
      phase: "LEAP_SOMERSAULT_SLASH",
      status: `⚔️ [NHÁT CHÉM CHẶT XUỐNG] Splitter vung kiếm chém thẳng xuống khoảng giữa bệ mặt đất!`,
      balls: cloneBalls(balls),
      left,
      right,
      mid,
      depth,
      laserSlash: { mid, depth },
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    // 2.5 RIFT_GROUND_CRACK (ĐẤT NỨT RẠN PHÁT SÁNG NGAY CHÍNH GIỮA)
    steps.push({
      activeLine: 3,
      phase: "RIFT_GROUND_CRACK",
      status: `💥 [MẶT ĐẤT NỨT TOÁC] Nhát chém làm bệ nứt rạn rạng đông ngay chính giữa trước khi tách làm đôi!`,
      balls: cloneBalls(balls),
      left,
      right,
      mid,
      depth,
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    // 3. RIFT_OPEN_HOP_BACK (TÁCH BỆ BẺ LÀM ĐÔI)
    for (let i = left; i <= mid; i++) {
      const b = balls.find((ball) => ball.slotIdx === i && ball.depth === depth);
      if (b) {
        b.depth = depth + 1;
        b.sideOffset = -24;
      }
    }
    for (let i = mid + 1; i <= right; i++) {
      const b = balls.find((ball) => ball.slotIdx === i && ball.depth === depth);
      if (b) {
        b.depth = depth + 1;
        b.sideOffset = 24;
      }
    }

    steps.push({
      activeLine: 3,
      phase: "RIFT_OPEN_HOP_BACK",
      status: `🌌 [TÁCH BỆ SÂN KHẤU] Vết nứt đứt đôi! Bệ Nửa trái [${left}..${mid}] và Bệ Nửa phải [${mid + 1}..${right}] tách rời ở Tầng ${depth + 1}.`,
      balls: cloneBalls(balls),
      left,
      right,
      mid,
      depth,
      riftAt: mid,
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    // Recursion Left & Right
    mergeSortHelper(left, mid, depth + 1, nodeId);
    mergeSortHelper(mid + 1, right, depth + 1, nodeId);

    // MERGE PREPARATION
    const leftSub = [];
    for (let idx = left; idx <= mid; idx++) {
      const b = balls.find((ball) => ball.slotIdx === idx && ball.depth === depth + 1);
      if (b) leftSub.push(b);
    }

    const rightSub = [];
    for (let idx = mid + 1; idx <= right; idx++) {
      const b = balls.find((ball) => ball.slotIdx === idx && ball.depth === depth + 1);
      if (b) rightSub.push(b);
    }

    // 4. MERGE_LANE_MARK
    steps.push({
      activeLine: 6,
      phase: "MERGE_LANE_MARK",
      status: `🎬 [BẮT ĐẦU TRỘN] Dựng bệ hợp nhất tại Tầng Cha ${depth} [${left}..${right}]. Cặp Runner phất cờ chuẩn bị so sánh!`,
      balls: cloneBalls(balls),
      left,
      mid,
      right,
      depth,
      targetRange: { left, right },
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftSub.length && j < rightSub.length) {
      comparisons++;
      const isLessEqual = leftSub[i].val <= rightSub[j].val;
      const winningBall = isLessEqual ? leftSub[i] : rightSub[j];
      const winningSide = isLessEqual ? "L" : "R";
      const compareOp = isLessEqual ? "≤" : ">";

      // 5. COMPARE_BEAM_LOCK
      steps.push({
        activeLine: 9,
        phase: "COMPARE_BEAM_LOCK",
        status: `👐 [2 NGƯỜI QUE NHẮC BÓNG LÊN TAY] L-Runner & R-Runner NHẮC BÓNG LÊN TAY so sánh trực tiếp! (${leftSub[i].tag} ${compareOp} ${rightSub[j].tag}) ➔ Bóng ${winningBall.tag} (${winningSide}) THẮNG!`,
        balls: cloneBalls(balls),
        left,
        mid,
        right,
        depth,
        pointerI: leftSub[i].slotIdx,
        pointerJ: rightSub[j].slotIdx,
        pointerK: k,
        winnerSide: winningSide,
        compareOp,
        comparingBallIds: [leftSub[i].id, rightSub[j].id],
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      // 6. TOSS_CATCH_SLAM
      winningBall.depth = depth;
      winningBall.slotIdx = k;
      winningBall.sideOffset = 0;
      mergeWrites++;

      steps.push({
        activeLine: isLessEqual ? 10 : 11,
        phase: "TOSS_CATCH_SLAM",
        status: `☄️ [QUĂNG BÓNG & CATCHER ÚP RỔ] Runner bên ${winningSide} quăng bóng ${winningBall.tag} bay cầu vồng lên Tầng ${depth} ➔ Catcher BẮT & ÚP BÓNG RỔ vào ô k=${k}!`,
        balls: cloneBalls(balls),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        flyingBallId: winningBall.id,
        targetK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      if (isLessEqual) i++;
      else j++;
      k++;

      // 7. POINTER_STEP_WALK
      steps.push({
        activeLine: 12,
        phase: "POINTER_STEP_WALK",
        status: `🚶 [RUNNER BƯỚC] Runner bên ${winningSide} bước tới 1 bước, phất cờ kiêu hãnh.`,
        balls: cloneBalls(balls),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });
    }

    // Remaining Left elements
    while (i < leftSub.length) {
      const selected = leftSub[i];
      selected.depth = depth;
      selected.slotIdx = k;
      selected.sideOffset = 0;
      mergeWrites++;

      steps.push({
        activeLine: 12,
        phase: "RUNWAY_CLEAR_CASCADE",
        status: `💫 [SAO CHỔI DƯ TRÁI] Nửa phải cạn bóng ➔ Bóng L[${i}] (${selected.tag}) tự bay sao chổi Teal về Tầng Cha ô k=${k}!`,
        balls: cloneBalls(balls),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        flyingBallId: selected.id,
        targetK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      i++;
      k++;
    }

    // Remaining Right elements
    while (j < rightSub.length) {
      const selected = rightSub[j];
      selected.depth = depth;
      selected.slotIdx = k;
      selected.sideOffset = 0;
      mergeWrites++;

      steps.push({
        activeLine: 12,
        phase: "RUNWAY_CLEAR_CASCADE",
        status: `💫 [SAO CHỔI DƯ PHẢI] Nửa trái cạn bóng ➔ Bóng R[${j}] (${selected.tag}) tự bay sao chổi Teal về Tầng Cha ô k=${k}!`,
        balls: cloneBalls(balls),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        flyingBallId: selected.id,
        targetK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      j++;
      k++;
    }

    // 9. LEVEL_SEAL_RETURN
    steps.push({
      activeLine: 7,
      phase: "LEVEL_SEAL_RETURN",
      status: `🔒 [KHÉP VẾT NỨT] Hoàn tất trộn đoạn [${left}..${right}] ➔ Vết nứt khép lại, nhận Run Glow Teal, chuyển góc nhìn lên Tầng Cha ${depth}!`,
      balls: cloneBalls(balls),
      left,
      right,
      depth,
      sealedRange: { left, right },
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    currentNode.status = "merged";
  }

  mergeSortHelper(0, n - 1, 0, null);

  // 10. EMERALD_FINALE
  for (let b of balls) {
    b.depth = 0;
    b.sideOffset = 0;
  }

  steps.push({
    activeLine: 7,
    phase: "EMERALD_FINALE",
    status: `🎉 [FINALE BÙNG NỔ] Sóng Emerald xanh lá vĩnh viễn quét mảng ➔ Tất cả Người Que xếp hàng cúi chào khán giả!`,
    balls: cloneBalls(balls),
    depth: 0,
    isCompleted: true,
    treeNodes: JSON.parse(JSON.stringify(treeNodes)),
    comparisons,
    mergeWrites,
  });

  return steps;
}

// Compute exact Bubble Sort Algorithmic Operations (Comparisons + Swaps)
function computeBubbleSortAlgorithmicOps(initialArr) {
  let arr = initialArr.map((v) => (typeof v === "object" ? v.value : v));
  let comparisons = 0;
  let swaps = 0;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaps++;
      }
    }
  }

  const totalOps = comparisons + swaps * 2;
  return { comparisons, swaps, totalOps };
}

export default function MergeSortLab({ onBack }) {
  const [arraySize, setArraySize] = useState(8);
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10, 19]);
  const [customInput, setCustomInput] = useState("");

  // Tầng 1 Simulator Playback State (Independent)
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);

  // Ref for currentStep to keep keydown useEffect dependency array constant []
  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;

  // Tầng 2 Full Code Reader State (100% INDEPENDENT State!)
  const [codeStep, setCodeStep] = useState(0);
  const [lang, setLang] = useState("pseudocode");
  const [isCodePlaying, setIsCodePlaying] = useState(false);
  const [codeSpeed, setCodeSpeed] = useState(800);

  // Easter Eggs State
  const [splitterSpin, setSplitterSpin] = useState(false);
  const [catcherJuggle, setCatcherJuggle] = useState(false);

  const timerRef = useRef(null);
  const codeTimerRef = useRef(null);

  // Refs for Auto-Scrolling Pseudocode & Recursion Tree
  const codeBoxRef = useRef(null);
  const treeBoxRef = useRef(null);
  const fullCodeBoxRef = useRef(null);

  const activeCodeLineRef = useRef(null);
  const activeTreeNodeRef = useRef(null);
  const activeFullCodeLineRef = useRef(null);

  useEffect(() => {
    const text = array.map((v) => (typeof v === "object" ? v.value : v)).join(", ");
    setCustomInput(text);
  }, [array]);

  const steps = useMemo(() => {
    return generateDetailedMergeSortSteps(array);
  }, [array]);

  // Tầng 1 Step Object
  const step = steps[currentStep] || steps[0] || {};
  const isFinished = currentStep === steps.length - 1;
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);
  const activeLine = step.activeLine || 1;

  // Tầng 2 Code Step Object (INDEPENDENT FROM TẦNG 1!)
  const codeStepObj = steps[codeStep] || steps[0] || {};
  const codeActiveLine = codeStepObj.activeLine || 1;

  // Algorithmic Operations for Merge Sort vs Bubble Sort
  const mergeSortAlgorithmicOps = useMemo(() => {
    const lastStep = steps[steps.length - 1] || {};
    const totalComparisons = lastStep.comparisons || 0;
    const totalWrites = lastStep.mergeWrites || 0;
    return totalComparisons + totalWrites;
  }, [steps]);

  const bubbleSortStats = useMemo(() => {
    return computeBubbleSortAlgorithmicOps(array);
  }, [array]);

  const speedRatio = useMemo(() => {
    if (!mergeSortAlgorithmicOps || mergeSortAlgorithmicOps === 0) return 1;
    const ratio = bubbleSortStats.totalOps / mergeSortAlgorithmicOps;
    return Math.max(1, Math.round(ratio * 10) / 10);
  }, [bubbleSortStats, mergeSortAlgorithmicOps]);

  // Max recursion depth for dynamic spacing and camera panning
  const maxDepth = useMemo(() => {
    return Math.ceil(Math.log2(array.length || 1));
  }, [array.length]);

  // Smooth SVG Camera Vertical Auto-Pan
  const cameraY = useMemo(() => {
    const currentDepth = step.depth || 0;
    if (maxDepth >= 4 && currentDepth >= 2) {
      return -(currentDepth - 1) * 65;
    } else if (currentDepth >= 2) {
      return -(currentDepth - 1) * 45;
    }
    return 0;
  }, [step.depth, maxDepth]);

  // AUTO SCROLL CODE SNIPPET (TẦNG 1) & TREE CONTAINER
  useEffect(() => {
    if (activeCodeLineRef.current) {
      activeCodeLineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentStep, activeLine]);

  useEffect(() => {
    if (activeTreeNodeRef.current) {
      activeTreeNodeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentStep, step.activeTreeNodeId]);

  // AUTO SCROLL FULL CODE READER (TẦNG 2) — USES INDEPENDENT codeStep & codeActiveLine!
  useEffect(() => {
    if (activeFullCodeLineRef.current) {
      activeFullCodeLineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [codeStep, codeActiveLine, lang]);

  const handleRandomArray = () => {
    const newArr = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 85) + 10
    );
    setArray(newArr);
    setCurrentStep(0);
    setCodeStep(0);
    setIsPlaying(false);
    setIsCodePlaying(false);
  };

  const handleReverseArray = () => {
    const sorted = [...array].sort((a, b) => (typeof a === "object" ? a.value - b.value : a - b));
    const reversed = sorted.reverse();
    setArray(reversed);
    setCurrentStep(0);
    setCodeStep(0);
    setIsPlaying(false);
    setIsCodePlaying(false);
  };

  // Tầng 1 Main Theater Auto-Play Loop (Updates currentStep)
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
  }, [isPlaying, speed, steps]);

  // Tầng 2 Dedicated Pseudocode Reader Auto-Play Loop (Updates codeStep INDEPENDENTLY!)
  useEffect(() => {
    if (isCodePlaying) {
      codeTimerRef.current = setInterval(() => {
        setCodeStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsCodePlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, codeSpeed);
    } else {
      if (codeTimerRef.current) clearInterval(codeTimerRef.current);
    }
    return () => {
      if (codeTimerRef.current) clearInterval(codeTimerRef.current);
    };
  }, [isCodePlaying, codeSpeed, steps]);

  useEffect(() => {
    if (isFinished && steps.length > 1) {
      try {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#f43f5e"]
        });
      } catch (e) {}
    }
  }, [isFinished, steps.length]);

  const stepsLengthRef = useRef(steps.length);
  stepsLengthRef.current = steps.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prev) => {
          if (!prev && currentStepRef.current >= stepsLengthRef.current - 1) {
            setCurrentStep(0);
          }
          return !prev;
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
        setIsCodePlaying(false);
        setCurrentStep(0);
        setCodeStep(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
      setCodeStep(0);
      setIsPlaying(false);
      setIsCodePlaying(false);
    }
  };

  const currentCodeLines =
    lang === "python"
      ? PYTHON_CODE
      : lang === "java"
      ? JAVA_CODE
      : PSEUDOCODE;

  const totalBars = array.length;
  const slotW = (STAGE_W - 140) / (totalBars || 1);
  
  const getXPos = (slotIdx, sideOffset = 0) => {
    return 70 + slotIdx * slotW + slotW / 2 + sideOffset;
  };

  const stepBalls = step.balls || [];

  // Calculate exact current active segment's sideOffset for Splitter centering!
  const currentSegmentSideOffset = useMemo(() => {
    if (step.left !== undefined) {
      const b = stepBalls.find((ball) => ball.slotIdx === step.left && ball.depth === step.depth);
      if (b) return b.sideOffset;
    }
    return 0;
  }, [stepBalls, step.left, step.depth]);

  // Exact Splitter X position (Centers perfectly on current segment split boundary at ANY depth)
  const splitterX = useMemo(() => {
    if (step.mid !== undefined) {
      const leftX = getXPos(step.mid, currentSegmentSideOffset);
      const rightX = getXPos(step.mid + 1, currentSegmentSideOffset);
      return (leftX + rightX) / 2;
    }
    if (step.left !== undefined && step.right !== undefined) {
      const leftX = getXPos(step.left, currentSegmentSideOffset);
      const rightX = getXPos(step.right, currentSegmentSideOffset);
      return (leftX + rightX) / 2;
    }
    return STAGE_W / 2;
  }, [step.mid, step.left, step.right, currentSegmentSideOffset]);

  const platformSegmentsByDepth = useMemo(() => {
    const depthMap = {};
    stepBalls.forEach((b) => {
      if (!depthMap[b.depth]) depthMap[b.depth] = [];
      depthMap[b.depth].push(b);
    });

    const segments = [];
    Object.keys(depthMap).forEach((dStr) => {
      const d = parseInt(dStr, 10);
      const ballsInDepth = depthMap[d];

      const offsetGroupMap = {};
      ballsInDepth.forEach((b) => {
        const offKey = `${b.sideOffset}`;
        if (!offsetGroupMap[offKey]) offsetGroupMap[offKey] = [];
        offsetGroupMap[offKey].push(b);
      });

      Object.keys(offsetGroupMap).forEach((offKey) => {
        const group = offsetGroupMap[offKey];
        if (group.length === 0) return;
        const minSlot = Math.min(...group.map((g) => g.slotIdx));
        const maxSlot = Math.max(...group.map((g) => g.slotIdx));
        const sideOffset = group[0].sideOffset;

        const startX = getXPos(minSlot, sideOffset) - BALL_R - 14;
        const endX = getXPos(maxSlot, sideOffset) + BALL_R + 14;
        const width = Math.max(65, endX - startX);

        segments.push({
          depth: d,
          startX,
          width,
          sideOffset,
          isActive: (step.depth || 0) === d,
        });
      });
    });

    return segments;
  }, [stepBalls, step.depth]);

  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-slate-100 p-3 sm:p-5 md:p-6 font-sans space-y-6 select-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#161b22] via-[#0d1117] to-[#0d1117]">
      
      {/* HEADER TOOLBAR */}
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
                <span>Merge Sort Theater</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 font-mono uppercase">
              MERGE SORT — KIẾN TRÚC 3 TẦNG CHUẨN DỰ ÁN
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
              Tầng 1: Bộ Mô Phỏng Sân Khấu 3D | Tầng 2: Trình Đọc Mã Độc Lập | Tầng 3: Bảng Thông Số
            </p>
          </div>
        </div>
      </div>

      {/* CONFIGURATION TOOLBAR */}
      <div className="bg-[#161b22]/90 backdrop-blur-md p-5 rounded-3xl border border-[#30363d] shadow-xl space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Array Size Slider */}
          <div className="md:col-span-6 flex items-center gap-3 bg-[#0d1117] px-4 py-2.5 rounded-2xl border border-[#30363d]">
            <span className="text-xs font-bold text-slate-300 shrink-0">Kích thước mảng:</span>
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
                setCodeStep(0);
                setIsPlaying(false);
                setIsCodePlaying(false);
              }}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono font-extrabold text-cyan-400 shrink-0 bg-[#21262d] px-2.5 py-0.5 rounded-lg border border-[#30363d]">
              {arraySize}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-6 flex items-center gap-2">
            <button
              onClick={handleRandomArray}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mảng Ngẫu Nhiên</span>
            </button>
            <button
              onClick={handleReverseArray}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            >
              <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
              <span>Mảng Ngược</span>
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

      {/* ========================================================================================= */}
      {/* TẦNG 1: BỘ MÔ PHỎNG SÂN KHẤU TRỰC QUAN 3D (3-COLUMN THEATER: 2.5 : 7 : 2.5) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#161124]/80 backdrop-blur-md rounded-3xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
        
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="flex items-center gap-2 text-sm font-black uppercase text-sky-400 font-mono tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>TẦNG 1: BỘ MÔ PHỎNG SÂN KHẤU TRỰC QUAN 3D (CẤU TRÚC 3 CỘT chuẩn)</span>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-[#0d1117] px-3 py-1 rounded-xl border border-[#30363d]">
            Bước {currentStep + 1} / {steps.length}
          </span>
        </div>

        {/* Playback Controls Toolbar (Tầng 1) */}
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

            {/* AUTO PLAY TẦNG 1: Auto resets to 0 if clicked at the end! */}
            <button
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                } else {
                  if (currentStep >= steps.length - 1) {
                    setCurrentStep(0);
                  }
                  setIsPlaying(true);
                }
              }}
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
            <span>[Space] Chạy/Dừng | [←] Lùi | [→] Tiến | [R] Reset</span>
          </div>

          {/* Speed Slider */}
          <div className="flex items-center gap-3 w-full sm:w-auto bg-[#21262d] px-4 py-2 rounded-xl border border-[#30363d] shadow-xs">
            <span className="text-xs font-bold text-slate-300 shrink-0">Tốc độ:</span>
            <input
              type="range"
              min="200"
              max="1800"
              step="50"
              value={2000 - speed}
              onChange={(e) => setSpeed(2000 - parseInt(e.target.value, 10))}
              className="w-28 sm:w-36 accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-cyan-400 shrink-0 w-14 text-right">
              {speed}ms
            </span>
          </div>
        </div>

        {/* WORKSPACE GRID: 3 COLUMNS (CỘT TRÁI 2.5 : CỘT GIỮA 7 : CỘT PHẢI 2.5) */}
        <div className="relative w-full min-h-[520px] grid grid-cols-12 select-none overflow-hidden rounded-2xl border border-[#30363d] shadow-2xl">
          
          {/* CỘT TRÁI (2.5 COLUMNS -> lg:col-span-3): PSEUDOCODE SNIPPET & RECURSION TREE MAP */}
          <div className="col-span-12 lg:col-span-3 bg-[#0d1117] text-slate-100 p-3.5 border-r border-[#30363d] flex flex-col justify-between overflow-hidden shadow-inner space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-[#30363d] pb-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-100">
                    Pseudocode (EN) & Đệ Quy
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-[#21262d] px-2 py-0.5 rounded border border-[#30363d] font-bold">
                  Depth {step.depth || 0}
                </span>
              </div>

              {/* Pseudocode Snippet Container */}
              <div ref={codeBoxRef} className="space-y-1 font-mono text-[11px] max-h-[220px] overflow-y-auto pr-1 scroll-smooth">
                {PSEUDOCODE.map((item) => {
                  const isActive = item.line === activeLine;
                  return (
                    <div
                      key={item.line}
                      ref={isActive ? activeCodeLineRef : null}
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

            {/* Recursion Map Mini-Panel */}
            <div className="pt-3 border-t border-[#30363d] space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 justify-between">
                <div className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cây Đệ Quy Mini Map:</span>
                </div>
                <span className="text-[9px] font-mono text-cyan-400">Click node để nhảy</span>
              </div>

              <div ref={treeBoxRef} className="p-2 bg-[#161b22] rounded-xl border border-[#30363d] max-h-36 overflow-y-auto space-y-1.5 font-mono text-[10px] scroll-smooth">
                {step.treeNodes && step.treeNodes.length > 0 ? (
                  step.treeNodes.map((node) => {
                    const isActive = node.id === step.activeTreeNodeId;
                    return (
                      <div
                        key={node.id}
                        ref={isActive ? activeTreeNodeRef : null}
                        onClick={() => {
                          const targetStepIdx = steps.findIndex((s) => s.activeTreeNodeId === node.id);
                          if (targetStepIdx !== -1) {
                            setIsPlaying(false);
                            setCurrentStep(targetStepIdx);
                          }
                        }}
                        className={`p-1.5 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
                          isActive
                            ? "bg-sky-950/80 border border-sky-400 text-cyan-300 font-bold shadow-md"
                            : "bg-[#0d1117] border border-[#30363d] text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span>[${node.left}..${node.right}] (d=${node.depth})</span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded ${node.status === 'merged' ? 'bg-emerald-950 text-emerald-400' : 'bg-cyan-950 text-cyan-400'}`}>
                          {node.status === 'merged' ? '✓ Trộn' : '▶ Active'}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <span className="text-slate-500 text-[10px] italic">Đang cập nhật cây đệ quy...</span>
                )}
              </div>
            </div>
          </div>

          {/* CỘT GIỮA (7 COLUMNS -> lg:col-span-6): PERFECT SVG STAGE THEATER (VIEWBOX 800x480) */}
          <div className="col-span-12 lg:col-span-6 bg-gradient-to-b from-[#0b1329] via-[#0d1117] to-[#0d1117] p-3 flex flex-col justify-between items-center relative overflow-hidden">
            
            {/* Status Explanatory Banner */}
            <div className="w-full flex items-center justify-between z-10 px-3 py-1.5 bg-[#161b22]/90 rounded-xl border border-[#30363d] backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate max-w-sm font-semibold">{step.status}</span>
              </div>
              <span className="text-[10px] font-bold text-sky-400 bg-[#21262d] px-2 py-0.5 rounded border border-[#30363d] shrink-0">
                Stage 3D
              </span>
            </div>

            {/* STAGE CANVAS VIEWBOX 800x480 */}
            <div className="relative w-full h-[420px] flex items-center justify-center overflow-visible my-auto">
              <svg className="w-full h-full select-none" viewBox="0 0 800 480">
                <defs>
                  <filter id="cyanLaserBeam" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="riftSparkGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <linearGradient id="platformGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>

                  <linearGradient id="activePlatformGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>

                  <linearGradient id="riftBladeGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>

                {/* DYNAMIC SVG CAMERA PAN GROUP */}
                <g transform={`translate(0, ${cameraY})`} style={{ transition: "transform 0.5s ease-out" }}>
                  
                  {/* RENDER DYNAMICALLY SPLIT PHYSICAL PLATFORM SHELVES */}
                  {platformSegmentsByDepth.map((seg, idx) => {
                    const tierY = getTierY(seg.depth, maxDepth);
                    return (
                      <g key={`plat-seg-${seg.depth}-${idx}`} opacity={seg.isActive ? 1 : 0.45} style={{ transition: "all 0.5s ease" }}>
                        <rect 
                          x={seg.startX} 
                          y={tierY} 
                          width={seg.width} 
                          height="14" 
                          fill={seg.isActive ? "url(#activePlatformGrad)" : "url(#platformGradient)"} 
                          stroke={seg.isActive ? "#38bdf8" : "#334155"} 
                          strokeWidth="1.5" 
                          rx="4" 
                        />
                        <line x1={seg.startX} y1={tierY} x2={seg.startX + seg.width} y2={tierY} stroke={seg.isActive ? "#7dd3fc" : "#475569"} strokeWidth="2" />
                        <text x={seg.startX + 6} y={tierY + 11} fill={seg.isActive ? "#38bdf8" : "#64748b"} fontSize="9" fontFamily="monospace" fontWeight="bold">
                          Tầng {seg.depth} {seg.isActive ? "★" : ""}
                        </text>
                      </g>
                    );
                  })}

                  {/* GROUND CRACK & IMPACT SPARK FLARING EFFECT UNDER EXACT CENTER SWORD IMPACT (x=0) */}
                  {(step.phase === "RIFT_GROUND_CRACK" || step.phase === "LEAP_SOMERSAULT_SLASH") && (
                    <g transform={`translate(${splitterX}, ${getTierY(step.depth || 0, maxDepth)})`}>
                      {/* Clean Jagged crack path right down the center */}
                      <path 
                        d="M 0 0 L -5 4 L 5 8 L 0 14"
                        stroke="#22d3ee" 
                        strokeWidth="3.5" 
                        fill="none"
                        filter="url(#riftSparkGlow)"
                      />
                      {/* Impact Spark Flare */}
                      <circle cx="0" cy="10" r="7" fill="#38bdf8" opacity="0.9" filter="url(#cyanLaserBeam)" />
                      <circle cx="-6" cy="5" r="2.5" fill="#ffffff" />
                      <circle cx="6" cy="5" r="2.5" fill="#ffffff" />
                    </g>
                  )}

                  {/* COMPARE BEAM & COMPARISON SYMBOL BADGE */}
                  {step.phase?.includes("BEAM") && step.comparingBallIds && step.comparingBallIds.length === 2 && (
                    (() => {
                      const b1 = stepBalls.find((b) => b.id === step.comparingBallIds[0]);
                      const b2 = stepBalls.find((b) => b.id === step.comparingBallIds[1]);
                      if (!b1 || !b2) return null;
                      const x1 = getXPos(b1.slotIdx, b1.sideOffset);
                      const y1 = getTierY(b1.depth, maxDepth) - BALL_R - 25;
                      const x2 = getXPos(b2.slotIdx, b2.sideOffset);
                      const y2 = getTierY(b2.depth, maxDepth) - BALL_R - 25;
                      return (
                        <g>
                          <line 
                            x1={x1} 
                            y1={y1} 
                            x2={x2} 
                            y2={y2} 
                            stroke="#0284c7" 
                            strokeWidth="4" 
                            filter="url(#cyanLaserBeam)" 
                            strokeDasharray="6-3"
                          />
                          <g transform={`translate(${(x1 + x2) / 2}, ${(y1 + y2) / 2 - 10})`}>
                            <rect x="-24" y="-12" width="48" height="24" fill="#0d1117" stroke="#38bdf8" strokeWidth="2" rx="12" filter="url(#cyanLaserBeam)" />
                            <text x="0" y="4" fill="#38bdf8" fontSize="14" fontWeight="900" fontFamily="monospace" textAnchor="middle">
                              {step.compareOp || "≤"}
                            </text>
                          </g>
                        </g>
                      );
                    })()
                  )}

                  {/* CHARACTERS */}
                  
                  {/* THE SPLITTER (PERFECT 100% CENTERED SLASH & SWORD POSES) */}
                  {(step.phase?.includes("SPLIT") || step.phase?.includes("SLASH") || step.phase?.includes("CRACK") || splitterSpin) && (
                    (() => {
                      const isSlashingDown = step.phase === "LEAP_SOMERSAULT_SLASH" || step.phase === "RIFT_GROUND_CRACK";
                      return (
                        <g 
                          transform={`translate(${splitterX}, ${getTierY(step.depth || 0, maxDepth)})`}
                          onClick={() => {
                            setSplitterSpin(true);
                            setTimeout(() => setSplitterSpin(false), 1000);
                          }}
                          className="cursor-pointer"
                        >
                          {/* Head */}
                          <circle cx="0" cy={isSlashingDown ? "-68" : "-75"} r="11" fill="none" stroke="#ffffff" strokeWidth="3.5" />
                          
                          {/* Torso */}
                          <line x1="0" y1={isSlashingDown ? "-57" : "-64"} x2="0" y2="-25" stroke="#ffffff" strokeWidth="3.5" />
                          
                          {/* Legs */}
                          {isSlashingDown ? (
                            <>
                              <line x1="0" y1="-25" x2="-18" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                              <line x1="0" y1="-25" x2="18" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                            </>
                          ) : (
                            <>
                              <line x1="0" y1="-25" x2="-16" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                              <line x1="0" y1="-25" x2="16" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                            </>
                          )}

                          {/* Sword & Arms Dynamic Poses */}
                          {isSlashingDown ? (
                            <>
                              {/* Arms holding hilt at center */}
                              <line x1="0" y1="-48" x2="-6" y2="-34" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                              <line x1="0" y1="-48" x2="6" y2="-34" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                              {/* SWORD BLADE SLASHING STRAIGHT DOWN INTO EXACT CENTER GAP (x=0) */}
                              <line x1="0" y1="-34" x2="0" y2="10" stroke="url(#riftBladeGradient)" strokeWidth="4.5" strokeLinecap="round" filter="url(#riftSparkGlow)" />
                            </>
                          ) : (
                            <>
                              {/* SWORD RAISED HIGH PREPARING TO SLASH */}
                              <line x1="0" y1="-50" x2="38" y2="-90" stroke="url(#riftBladeGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#riftSparkGlow)" />
                              <line x1="0" y1="-50" x2="26" y2="-72" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                              <line x1="0" y1="-50" x2="-14" y2="-32" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                            </>
                          )}
                        </g>
                      );
                    })()
                  )}

                  {/* L-RUNNER & R-RUNNER */}
                  {(step.phase?.includes("BEAM") || step.phase?.includes("STEP") || step.phase?.includes("MARK")) && step.pointerI !== undefined && step.pointerJ !== undefined && (
                    <>
                      {/* L-Runner */}
                      <g transform={`translate(${getXPos(step.pointerI, currentSegmentSideOffset ? -24 : 0) - 32}, ${getTierY(step.depth + 1, maxDepth)})`}>
                        <circle cx="0" cy="-65" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-56" x2="0" y2="-20" stroke="#ffffff" strokeWidth="3" />
                        <line x1="-8" y1="-95" x2="-8" y2="-20" stroke="#38bdf8" strokeWidth="2.5" />
                        <polygon points="-8,-95 10,-86 -8,-77" fill="#38bdf8" />
                        {step.phase?.includes("BEAM") ? (
                          <>
                            <line x1="0" y1="-45" x2="28" y2="-45" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                            <line x1="0" y1="-45" x2="28" y2="-38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                          </>
                        ) : (
                          <line x1="0" y1="-45" x2="12" y2="-40" stroke="#ffffff" strokeWidth="3" />
                        )}
                        <line x1="0" y1="-20" x2="-10" y2="0" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-20" x2="10" y2="0" stroke="#ffffff" strokeWidth="3" />
                      </g>

                      {/* R-Runner */}
                      <g transform={`translate(${getXPos(step.pointerJ, currentSegmentSideOffset ? 24 : 0) + 32}, ${getTierY(step.depth + 1, maxDepth)})`}>
                        <circle cx="0" cy="-65" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-56" x2="0" y2="-20" stroke="#ffffff" strokeWidth="3" />
                        <line x1="8" y1="-95" x2="8" y2="-20" stroke="#34d399" strokeWidth="2.5" />
                        <polygon points="8,-95 -10,-86 8,-77" fill="#34d399" />
                        {step.phase?.includes("BEAM") ? (
                          <>
                            <line x1="0" y1="-45" x2="-28" y2="-45" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                            <line x1="0" y1="-45" x2="-28" y2="-38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                          </>
                        ) : (
                          <line x1="0" y1="-45" x2="-12" y2="-40" stroke="#ffffff" strokeWidth="3" />
                        )}
                        <line x1="0" y1="-20" x2="-10" y2="0" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-20" x2="10" y2="0" stroke="#ffffff" strokeWidth="3" />
                      </g>
                    </>
                  )}

                  {/* THE CATCHER */}
                  {(step.phase?.includes("SLAM") || step.phase?.includes("CASCADE") || catcherJuggle) && (
                    <g 
                      transform={`translate(${step.targetK !== undefined ? getXPos(step.targetK, 0) : STAGE_W / 2}, ${getTierY(step.depth || 0, maxDepth)})`}
                      onClick={() => {
                        setCatcherJuggle(true);
                        setTimeout(() => setCatcherJuggle(false), 1200);
                      }}
                      className="cursor-pointer"
                    >
                      <circle cx="0" cy="-75" r="11" fill="none" stroke="#ffffff" strokeWidth="3.5" />
                      <line x1="0" y1="-64" x2="0" y2="-25" stroke="#ffffff" strokeWidth="3.5" />
                      <line x1="0" y1="-50" x2="-22" y2="-82" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="0" y1="-50" x2="22" y2="-82" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="0" y1="-25" x2="-15" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="0" y1="-25" x2="15" y2="0" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                    </g>
                  )}

                  {/* FINALE: STICKMEN BOWING */}
                  {step.phase === "EMERALD_FINALE" && (
                    <g transform={`translate(400, ${getTierY(0, maxDepth)})`}>
                      <g transform="translate(-120, 0)">
                        <circle cx="0" cy="-50" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-41" x2="-10" y2="-18" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="-10" y2="0" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="10" y2="0" stroke="#ffffff" strokeWidth="3" />
                      </g>

                      <g transform="translate(-40, 0)">
                        <circle cx="0" cy="-50" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-41" x2="-10" y2="-18" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="-10" y2="0" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="10" y2="0" stroke="#ffffff" strokeWidth="3" />
                      </g>

                      <g transform="translate(40, 0)">
                        <circle cx="0" cy="-50" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-41" x2="-10" y2="-18" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="-10" y2="0" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="10" y2="0" stroke="#ffffff" strokeWidth="3" />
                      </g>

                      <g transform="translate(120, 0)">
                        <circle cx="0" cy="-50" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-41" x2="-10" y2="-18" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="-10" y2="0" stroke="#ffffff" strokeWidth="3" />
                        <line x1="0" y1="-18" x2="10" y2="0" stroke="#ffffff" strokeWidth="3" />
                      </g>
                    </g>
                  )}

                  {/* RENDER N EXCLUSIVE DATA BALLS */}
                  {stepBalls.map((b) => {
                    const isCompleted = step.phase === "EMERALD_FINALE" || step.isCompleted;
                    const isFlying = (step.phase?.includes("SLAM") || step.phase?.includes("CASCADE")) && step.flyingBallId === b.id;
                    const isComparing = step.phase?.includes("BEAM") && step.comparingBallIds?.includes(b.id);

                    const tierY = getTierY(b.depth, maxDepth);
                    let bx = getXPos(b.slotIdx, b.sideOffset);
                    let by = tierY - BALL_R;

                    if (isComparing) {
                      by = tierY - BALL_R - 25;
                    } else if (isFlying) {
                      by = tierY - BALL_R - 85;
                    }

                    let ballFill = "#334155";
                    let ballStroke = "#475569";
                    let textColor = "#f1f5f9";
                    let glowFilter = undefined;

                    if (isCompleted) {
                      ballFill = "#166534";
                      ballStroke = "#4ade80";
                      textColor = "#f0fdf4";
                    } else if (isComparing) {
                      ballFill = "#0284c7";
                      ballStroke = "#7dd3fc";
                      textColor = "#ffffff";
                      glowFilter = "url(#cyanLaserBeam)";
                    } else if (isFlying) {
                      ballFill = "#0d9488";
                      ballStroke = "#5eead4";
                      textColor = "#ffffff";
                    } else if (step.sealedRange && b.slotIdx >= step.sealedRange.left && b.slotIdx <= step.sealedRange.right && b.depth === step.depth) {
                      ballFill = "#115e59";
                      ballStroke = "#2dd4bf";
                      textColor = "#ffffff";
                    }

                    return (
                      <g
                        key={b.id}
                        transform={`translate(${bx}, ${by})`}
                        style={{ transition: "transform 0.5s cubic-bezier(0.34, 1.25, 0.64, 1)" }}
                      >
                        <ellipse
                          cx="0"
                          cy={BALL_R + (by < tierY - BALL_R ? (tierY - BALL_R - by) : 1)}
                          rx={BALL_R * (by < tierY - BALL_R ? 0.35 : 0.85)}
                          ry="3"
                          fill="#000000"
                          opacity={by < tierY - BALL_R ? 0.2 : 0.6}
                        />

                        <circle
                          cx="0"
                          cy="0"
                          r={BALL_R}
                          fill={ballFill}
                          stroke={ballStroke}
                          strokeWidth="2.5"
                          filter={glowFilter}
                        />

                        <ellipse cx={-BALL_R * 0.3} cy={-BALL_R * 0.3} rx={BALL_R * 0.35} ry={BALL_R * 0.2} fill="#ffffff" opacity="0.35" />

                        <text
                          x="0"
                          y="5"
                          fill={textColor}
                          fontSize="13"
                          fontWeight="900"
                          fontFamily="monospace"
                          textAnchor="middle"
                          className="drop-shadow-md"
                        >
                          {b.tag}
                        </text>
                      </g>
                    );
                  })}

                </g>

              </svg>
            </div>

            {/* Bottom Platform Base */}
            <div className="w-full h-2.5 bg-[#21262d] rounded-full border border-[#30363d]" />
          </div>

          {/* CỘT PHẢI (2.5 COLUMNS -> lg:col-span-3): EXECUTION STATS & COMPLEXITY CARD AT TIER 1 */}
          <div className="col-span-12 lg:col-span-3 bg-[#0d1117] text-slate-100 p-3.5 border-l border-[#30363d] flex flex-col justify-between overflow-hidden shadow-inner space-y-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
                <div className="flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-100">
                    Thông Số Tầng 1
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-[#21262d] px-2 py-0.5 rounded border border-[#30363d] font-bold">
                  N = {array.length}
                </span>
              </div>

              {/* Realtime Stat Cards */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Số phép so sánh:</span>
                  <span className="text-base font-black text-sky-400 font-mono">{step.comparisons || 0}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Số lần gán/trộn:</span>
                  <span className="text-base font-black text-teal-400 font-mono">{step.mergeWrites || 0}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Độ sâu đệ quy:</span>
                  <span className="text-base font-black text-amber-400 font-mono">Tầng {step.depth || 0}</span>
                </div>
              </div>

              {/* Live Progress Bar */}
              <div className="space-y-1.5 pt-1 border-t border-[#30363d]">
                <div className="flex justify-between text-[11px] font-bold text-slate-300">
                  <span>Tiến trình (%)</span>
                  <span className="font-mono text-emerald-400 font-extrabold">{progressPercent}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#161b22] overflow-hidden border border-[#30363d]">
                  <div
                    style={{ width: `${progressPercent}%` }}
                    className="h-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-300"
                  />
                </div>
              </div>

              {/* Complexity Summary Cards */}
              <div className="space-y-1.5 pt-1">
                <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold">Thời gian:</span>
                  <span className="font-mono font-bold text-sky-400 text-[10px] bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                    O(N log N)
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold">Bộ nhớ phụ:</span>
                  <span className="font-mono font-bold text-amber-400 text-[10px] bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                    O(N)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Speed Comparison Hint Card */}
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-sky-950/60 via-[#161b22] to-[#0d1117] border border-cyan-500/30 text-center space-y-1">
              <span className="text-[10px] font-bold text-cyan-300 block uppercase">VS BUBBLE SORT O(N²)</span>
              <span className="text-xs font-mono font-black text-amber-300 block">
                Nhanh hơn ~{speedRatio}x
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 2: MÃ GIẢ FULL & TRÌNH ĐỌC CODE THUẬT TOÁN (100% INDEPENDENT CODE READER CONTROLS) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#0d1117] p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-4 text-slate-100">
        
        {/* Header & Language Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#30363d] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 leading-tight flex items-center gap-2">
                <span>TẦNG 2: MÃ GIẢ FULL & TRÌNH ĐỌC MÃ NGUỒN THUẬT TOÁN (CHẠY ĐỘC LẬP)</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Đọc từng dòng code độc lập hoàn toàn, không ảnh hưởng đến Sân khấu Tầng 1
              </p>
            </div>
          </div>

          {/* Language Switcher Tabs */}
          <div className="flex bg-[#161b22] p-1 rounded-xl border border-[#30363d]">
            <button
              onClick={() => setLang("pseudocode")}
              className={`px-3.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                lang === "pseudocode" ? "bg-sky-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Pseudocode
            </button>
            <button
              onClick={() => setLang("python")}
              className={`px-3.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                lang === "python" ? "bg-teal-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setLang("java")}
              className={`px-3.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                lang === "java" ? "bg-emerald-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Java
            </button>
          </div>
        </div>

        {/* DEDICATED TẦNG 2 PLAYBACK CONTROL TOOLBAR (MANAGES codeStep TOTALLY INDEPENDENTLY!) */}
        <div className="bg-[#161b22] p-3 rounded-2xl border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsCodePlaying(false);
                setCodeStep(0);
              }}
              className="p-2 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 transition-colors border border-[#30363d] cursor-pointer"
              title="Reset đọc mã giả Tầng 2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                setIsCodePlaying(false);
                setCodeStep((p) => Math.max(0, p - 1));
              }}
              disabled={codeStep === 0}
              className="p-2 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors border border-[#30363d] cursor-pointer"
              title="Dòng mã trước"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* AUTO PLAY TẦNG 2: Auto resets to 0 if clicked at the end! */}
            <button
              onClick={() => {
                if (isCodePlaying) {
                  setIsCodePlaying(false);
                } else {
                  if (codeStep >= steps.length - 1) {
                    setCodeStep(0);
                  }
                  setIsCodePlaying(true);
                }
              }}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
            >
              {isCodePlaying ? (
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
                setIsCodePlaying(false);
                setCodeStep((p) => Math.min(steps.length - 1, p + 1));
              }}
              disabled={codeStep === steps.length - 1}
              className="p-2 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-300 disabled:opacity-30 transition-colors border border-[#30363d] cursor-pointer"
              title="Dòng mã tiếp"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Active Line Status Badge for Tầng 2 */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 bg-[#0d1117] px-3.5 py-1.5 rounded-xl border border-[#30363d]">
            <span>Tầng 2 Đang Đọc Dòng #{codeActiveLine}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Bước Đọc {codeStep + 1}/{steps.length}</span>
          </div>

          {/* Speed Slider for Code Reader */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400 font-bold">Tốc độ:</span>
            <input
              type="range"
              min="200"
              max="1600"
              step="50"
              value={1800 - codeSpeed}
              onChange={(e) => setCodeSpeed(1800 - parseInt(e.target.value, 10))}
              className="w-24 accent-sky-400 cursor-pointer"
            />
            <span className="text-cyan-400 font-bold w-12 text-right">{codeSpeed}ms</span>
          </div>
        </div>

        {/* Code Display Container (Highlights based on INDEPENDENT codeActiveLine!) */}
        <div ref={fullCodeBoxRef} className="font-mono text-xs space-y-2 py-2 max-h-80 overflow-y-auto scroll-smooth">
          {currentCodeLines.map((item) => {
            const isActive = item.line === codeActiveLine;
            return (
              <div
                key={item.line}
                ref={isActive ? activeFullCodeLineRef : null}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#1f2937] text-sky-300 font-extrabold border-l-4 border-sky-400 shadow-lg scale-[1.005]"
                    : "text-slate-300 hover:text-white hover:bg-[#161b22]/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 text-[11px] text-slate-500 shrink-0 select-none font-bold">
                    #{item.line}
                  </span>
                  <span className="whitespace-pre flex items-center gap-2 text-slate-100 font-bold">
                    {isActive && <span className="text-sky-400 text-[10px] animate-pulse">▶</span>}
                    <span>{item.text}</span>
                  </span>
                </div>

                {item.explain && (
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-lg border transition-all shrink-0 ${
                    isActive
                      ? "text-amber-300 font-bold bg-amber-950/80 border-amber-500/50 shadow-md"
                      : "text-[#22d3ee] font-semibold bg-[#161b22] border-[#30363d]"
                  }`}>
                    // {item.explain}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 3: BẢNG THÔNG SỐ THỰC THI & SO SÁNH HIỆU NĂNG THUẬT TOÁN (ACCURATE MATH & DESIGN) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#161b22]/90 backdrop-blur-md p-6 rounded-3xl border border-[#30363d] shadow-2xl space-y-6 text-slate-100">
        
        <div className="flex items-center gap-3 border-b border-[#30363d] pb-3">
          <div className="p-2 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100 leading-tight uppercase font-mono tracking-wider">
              TẦNG 3: BẢNG THÔNG SỐ THỰC THI & SO SÁNH HIỆU NĂNG THUẬT TOÁN
            </h3>
            <p className="text-[11px] text-slate-400 font-mono">
              Phân tích toán học độ phức tạp thuật toán và So sánh số phép toán chuẩn xác với Bubble Sort O(N²)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* CỘT TRÁI (6 COLS): BẢNG PHÂN TÍCH HIỆU NĂNG & NGUYÊN LÝ CHIA ĐỂ TRỊ */}
          <div className="lg:col-span-6 bg-[#0d1117] p-5 rounded-2xl border border-[#30363d] space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#30363d] pb-2.5">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Phân Tích Lý Thuyết Thuật Toán Merge Sort</span>
              </span>
              <span className="text-xs font-mono text-emerald-400 font-extrabold bg-[#161b22] px-2.5 py-0.5 rounded border border-[#30363d]">
                Stable Sort (Ổn định)
              </span>
            </div>

            {/* Theoretical Complexity Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#161b22] border border-sky-500/30 space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase block">Độ phức tạp thời gian</span>
                <span className="text-xl font-black text-sky-400 font-mono block">O(N log N)</span>
                <span className="text-[10px] text-slate-500 block">Tốt nhất, Trung bình & Tệ nhất đều luôn là O(N log N)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161b22] border border-amber-500/30 space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase block">Bộ nhớ phụ bổ sung</span>
                <span className="text-xl font-black text-amber-400 font-mono block">O(N)</span>
                <span className="text-[10px] text-slate-500 block">Cần mảng phụ tạm thời để lưu trữ và trộn 2 nửa</span>
              </div>
            </div>

            {/* Divide & Conquer Principle Explanation */}
            <div className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d] space-y-2 text-xs">
              <span className="font-bold text-cyan-300 block text-xs uppercase tracking-wide">
                🧩 Nguyên Lý 3 Bước "Chia Để Trị" (Divide & Conquer):
              </span>
              <ul className="space-y-1 text-slate-300 text-[11px] pl-4 list-disc font-sans">
                <li><strong className="text-sky-400 font-mono">1. Chia (Divide):</strong> Tìm chỉ số giữa mid để cắt đôi mảng thành 2 nửa bằng nhau ($O(1)$).</li>
                <li><strong className="text-teal-400 font-mono">2. Trị (Conquer):</strong> Đệ quy gọi `MERGE_SORT` cho từng nửa tới khi còn 1 phần tử ($2 \cdot T(N/2)$).</li>
                <li><strong className="text-emerald-400 font-mono">3. Kết hợp (Combine):</strong> Trộn 2 mảng con đã sắp xếp thành 1 mảng hoàn chỉnh ($O(N)$).</li>
              </ul>
            </div>
          </div>

          {/* CỘT PHẢI (6 COLS): BẢNG SO SÁNH PHÉP TÍNH THUẬT TOÁN CHUẨN XÁC (VS BUBBLE SORT O(N²)) */}
          <div className="lg:col-span-6 bg-[#0d1117] p-5 rounded-2xl border border-sky-500/40 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#30363d] pb-2.5">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>So Sánh Phép Tính Thuật Toán: Merge Sort vs Bubble Sort</span>
              </span>
              <span className="text-[10px] font-mono text-amber-400 font-bold bg-[#161b22] px-2 py-0.5 rounded border border-[#30363d]">
                Mảng N = {array.length}
              </span>
            </div>

            {/* Accurate Algorithmic Operations Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#161b22] border border-sky-500/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-400 text-xs uppercase">Merge Sort (Chia Để Trị)</span>
                  <span className="text-[9px] font-mono bg-sky-950 text-sky-300 px-1.5 py-0.5 rounded">O(N log N)</span>
                </div>
                <div className="text-2xl font-black text-sky-300 font-mono">
                  {mergeSortAlgorithmicOps} <span className="text-xs text-slate-400 font-normal">phép toán</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-0.5 pt-1 border-t border-[#30363d]">
                  <div>• So sánh: {step.comparisons || 0} lần</div>
                  <div>• Gán/Trộn mảng: {step.mergeWrites || 0} lần</div>
                </div>
              </div>

              <div className="p-[#161b22] border border-rose-500/50 space-y-2 p-3.5 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-400 text-xs uppercase">Bubble Sort (Nổi Bọt)</span>
                  <span className="text-[9px] font-mono bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded">O(N²)</span>
                </div>
                <div className="text-2xl font-black text-rose-400 font-mono">
                  {bubbleSortStats.totalOps} <span className="text-xs text-slate-400 font-normal">phép toán</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-0.5 pt-1 border-t border-[#30363d]">
                  <div>• So sánh: {bubbleSortStats.comparisons} lần</div>
                  <div>• Đổi chỗ (Swap): {bubbleSortStats.swaps} lần ({bubbleSortStats.swaps * 2} gán)</div>
                </div>
              </div>
            </div>

            {/* Speed Ratio Highlight Badge */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/90 via-teal-950/90 to-emerald-950/90 border border-teal-500/40 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">
                🚀 Hiệu năng vượt trội Merge Sort ($N={array.length}$):
              </span>
              <span className="text-sm font-mono font-black text-amber-300 bg-[#0d1117] px-3.5 py-1 rounded-lg border border-amber-500/40 shadow-md">
                Nhanh hơn gấp {speedRatio}x lần!
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
