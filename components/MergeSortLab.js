/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
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
  Sparkles,
  Zap,
  BarChart2,
  ArrowDown,
  Code2,
  Info,
  Compass,
  Box,
  Volume2,
  VolumeX,
  Maximize2,
  Layers,
  Flame,
  CheckCircle2,
  Activity,
  Trophy
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

// WEB AUDIO SYNTHESIZER SOUND FX (AUTOPLAY RESUME & FUTURISTIC AUDIO CHORDS)
let sharedAudioCtx = null;
const getAudioContext = () => {
  if (typeof window === "undefined") return null;
  if (!sharedAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) sharedAudioCtx = new AudioCtx();
  }
  if (sharedAudioCtx && sharedAudioCtx.state === "suspended") {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
};

const playSoundFX = (type, soundEnabled = true) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === "crack") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.23);
    } else if (type === "whoosh" || type === "descend") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.31);
    } else if (type === "zap") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(700, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === "chime" || type === "ascend") {
      // Emerald Fusion Chord (C5 - E5 - G5 - C6)
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.04 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + idx * 0.04 + 0.36);
      });
    } else if (type === "victory") {
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.06, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.06 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.52);
      });
    }
  } catch (err) {
    // Autoplay restrictions
  }
};

// Master Step Generator - 7 Phụ Pha Kịch Bản Cô Đọng & Chuẩn Xác 100%
function generateSkyBlocksSteps(initialArr) {
  const steps = [];
  let comparisons = 0;
  let mergeWrites = 0;
  const n = initialArr.length;

  let cubes = initialArr.map((val, idx) => ({
    id: `cube-${idx}-${typeof val === "object" ? val.value : val}`,
    val: typeof val === "object" ? val.value : val,
    tag: `${typeof val === "object" ? val.value : val}`,
    originalIdx: idx,
    depth: 0,
    slotIdx: idx,
    sideOffset: 0,
    state: "idle", // idle | scanning | flying | sorted
  }));

  const treeNodes = [];
  let nodeCounter = 0;

  const cloneCubes = (cList) => cList.map((c) => ({ ...c }));

  // 1. PHA 1: INIT_FLOAT (Khởi tạo mảng Cubes lơ lửng tại Tầng 0)
  steps.push({
    activeLine: 1,
    phase: "INIT_FLOAT",
    status: `🎬 Khởi tạo mảng gồm ${n} khối Cube 3D Pha Lê tại Tầng 0. Chuẩn bị phân tầng đệ quy!`,
    cubes: cloneCubes(cubes),
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
      const c = cubes.find((cube) => cube.slotIdx === i && cube.depth <= depth);
      if (c) c.depth = depth;
    }

    if (left >= right) {
      // 4. PHA 4: ATOM_PULSE (Base case 1 phần tử)
      steps.push({
        activeLine: 2,
        phase: "ATOM_PULSE",
        status: `⚡ [BASE CASE] Khối [${left}..${right}] chỉ có 1 phần tử tại Tầng ${depth} — Đã đạt kích thước tối thiểu!`,
        cubes: cloneCubes(cubes),
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

    // 2. PHA 2: SUBARRAY_SPLIT (Trượt mượt 2 mảng con xuống Tầng depth + 1 trong 1 chuyển động duy nhất)
    for (let idx = left; idx <= mid; idx++) {
      const c = cubes.find((cube) => cube.slotIdx === idx && cube.depth === depth);
      if (c) {
        c.depth = depth + 1;
        c.sideOffset = -28;
      }
    }
    for (let idx = mid + 1; idx <= right; idx++) {
      const c = cubes.find((cube) => cube.slotIdx === idx && cube.depth === depth);
      if (c) {
        c.depth = depth + 1;
        c.sideOffset = 28;
      }
    }

    steps.push({
      activeLine: 3,
      phase: "SUBARRAY_SPLIT",
      status: `🌌 [TÁCH MẢNG] Phân tách mảng [${left}..${right}] thành 2 mảng con [${left}..${mid}] và [${mid + 1}..${right}] tại Tầng ${depth + 1}.`,
      cubes: cloneCubes(cubes),
      left,
      right,
      mid,
      depth: depth + 1,
      activeTreeNodeId: nodeId,
      treeNodes: JSON.parse(JSON.stringify(treeNodes)),
      comparisons,
      mergeWrites,
    });

    // Gọi đệ quy Left & Right
    mergeSortHelper(left, mid, depth + 1, nodeId);
    mergeSortHelper(mid + 1, right, depth + 1, nodeId);

    // TRỘN 2 NỬA ĐÃ SẮP XẾP
    const leftSub = [];
    for (let idx = left; idx <= mid; idx++) {
      const c = cubes.find((cube) => cube.slotIdx === idx && cube.depth === depth + 1);
      if (c) leftSub.push(c);
    }

    const rightSub = [];
    for (let idx = mid + 1; idx <= right; idx++) {
      const c = cubes.find((cube) => cube.slotIdx === idx && cube.depth === depth + 1);
      if (c) rightSub.push(c);
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftSub.length && j < rightSub.length) {
      comparisons++;
      const isLessEqual = leftSub[i].val <= rightSub[j].val;
      const winningCube = isLessEqual ? leftSub[i] : rightSub[j];
      const winningSide = isLessEqual ? "Trái" : "Phải";
      const compareOp = isLessEqual ? "≤" : ">";

      // 5. PHA 5: LASER_SCAN (Trạm Comparator chiếu laser scan 2 Cube đang so sánh)
      steps.push({
        activeLine: 9,
        phase: "LASER_SCAN",
        status: `⚡ [TRẠM COMPARATOR SCAN] Laser scan 2 Khối Cube (${leftSub[i].tag} ${compareOp} ${rightSub[j].tag}) ➔ Khối ${winningCube.tag} bên ${winningSide} THẮNG!`,
        cubes: cloneCubes(cubes),
        left,
        mid,
        right,
        depth: depth + 1,
        pointerI: leftSub[i].slotIdx,
        pointerJ: rightSub[j].slotIdx,
        pointerK: k,
        winnerSide: winningSide,
        compareOp,
        comparingIds: [leftSub[i].id, rightSub[j].id],
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      // 6. PHA 6: CUBE_ASCEND (Cube thắng bay sao chổi về bệ Tầng Cha)
      winningCube.depth = depth;
      winningCube.slotIdx = k;
      winningCube.sideOffset = 0;
      winningCube.state = "flying";
      mergeWrites++;

      steps.push({
        activeLine: isLessEqual ? 10 : 11,
        phase: "CUBE_ASCEND",
        status: `☄️ [BAY VÚT LÊN TẦNG CHA] Khối Cube ${winningCube.tag} được kéo vút về ô k = ${k} tại Tầng ${depth}!`,
        cubes: cloneCubes(cubes),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        flyingCubeId: winningCube.id,
        targetK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      if (isLessEqual) i++;
      else j++;
      k++;
    }

    // Phần tử dư bên Trái
    while (i < leftSub.length) {
      const selected = leftSub[i];
      selected.depth = depth;
      selected.slotIdx = k;
      selected.sideOffset = 0;
      selected.state = "flying";
      mergeWrites++;

      steps.push({
        activeLine: 12,
        phase: "CUBE_ASCEND",
        status: `💫 [CUBE DƯ TRÁI] Khối dư ${selected.tag} tự động bay về ô k = ${k} tại Tầng ${depth}!`,
        cubes: cloneCubes(cubes),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        flyingCubeId: selected.id,
        targetK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      i++;
      k++;
    }

    // Phần tử dư bên Phải
    while (j < rightSub.length) {
      const selected = rightSub[j];
      selected.depth = depth;
      selected.slotIdx = k;
      selected.sideOffset = 0;
      selected.state = "flying";
      mergeWrites++;

      steps.push({
        activeLine: 12,
        phase: "CUBE_ASCEND",
        status: `💫 [CUBE DƯ PHẢI] Khối dư ${selected.tag} tự động bay về ô k = ${k} tại Tầng ${depth}!`,
        cubes: cloneCubes(cubes),
        left,
        mid,
        right,
        depth,
        pointerK: k,
        flyingCubeId: selected.id,
        targetK: k,
        activeTreeNodeId: nodeId,
        treeNodes: JSON.parse(JSON.stringify(treeNodes)),
        comparisons,
        mergeWrites,
      });

      j++;
      k++;
    }

    // CHỈ ĐỔI MÀU XANH LÁ EMERALD KHI KHỐI CUBE ĐÃ MERGE XONG HOÀN CHỈNH LÊN TỚI TẦNG 0 (DEPTH === 0)
    for (let idx = left; idx <= right; idx++) {
      let mergedCube = cubes.find((c) => c.slotIdx === idx && c.depth === depth);
      if (mergedCube) {
        mergedCube.state = depth === 0 ? "sorted" : "idle";
      }
    }

    currentNode.status = "merged";
  }

  mergeSortHelper(0, n - 1, 0, null);

  // 7. PHA 7: EMERALD_SEAL (Hoàn thành mảng & bùng nổ sóng Emerald)
  for (let c of cubes) {
    c.depth = 0;
    c.sideOffset = 0;
    c.state = "sorted";
  }

  steps.push({
    activeLine: 7,
    phase: "EMERALD_SEAL",
    status: `🎉 [FINALE BÙNG NỔ] Sóng Emerald Xanh Lá Vĩnh Viễn quét qua mảng ➔ Hoàn thành Merge Sort!`,
    cubes: cloneCubes(cubes),
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

// =========================================================================================
// COMPONENT KHỐI CUBE PHA LÊ 3D CHÂN THỰC (TRUE 3D CUBE WITH TOP, SIDE SHADING & GLOW)
// =========================================================================================
const GlassCube3D = ({ val, state, isFlying, isComparing, cubeWidth = 56 }) => {
  const halfSize = Math.round(cubeWidth / 2);
  const fontSizeClass = cubeWidth < 38 ? "text-xs font-black" : cubeWidth < 45 ? "text-sm font-black" : "text-base font-black";

  // 3D Volumetric Chiaroscuro Shading (Top = Bright Highlight, Front = Medium, Right = Dark Shadow)
  let frontBg = "linear-gradient(135deg, rgba(14, 116, 144, 0.95), rgba(15, 23, 42, 0.98))";
  let topBg = "linear-gradient(135deg, rgba(186, 230, 253, 0.98), rgba(56, 189, 248, 0.75))";
  let sideBg = "linear-gradient(135deg, rgba(3, 105, 161, 0.95), rgba(12, 74, 110, 0.98))";
  let borderColor = "rgba(125, 211, 252, 0.95)";
  let textColor = "#ffffff";
  let floorGlow = "shadow-[0_0_20px_rgba(56,189,248,0.6)]";
  let transformScale = "scale-100";

  if (state === "sorted") {
    // GREEN SORTED 3D CRYSTAL
    frontBg = "linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(6, 78, 59, 0.98))";
    topBg = "linear-gradient(135deg, rgba(167, 243, 208, 0.98), rgba(52, 211, 153, 0.8))";
    sideBg = "linear-gradient(135deg, rgba(5, 150, 105, 0.95), rgba(4, 120, 87, 0.98))";
    borderColor = "rgba(110, 231, 183, 1)";
    textColor = "#ffffff";
    floorGlow = "shadow-[0_0_30px_rgba(52,211,153,0.9)]";
  } else if (isFlying) {
    // TEAL FLYING 3D CRYSTAL
    frontBg = "linear-gradient(135deg, rgba(20, 184, 166, 0.95), rgba(15, 23, 42, 0.98))";
    topBg = "linear-gradient(135deg, rgba(153, 246, 228, 0.98), rgba(45, 212, 191, 0.8))";
    sideBg = "linear-gradient(135deg, rgba(13, 148, 136, 0.95), rgba(17, 94, 89, 0.98))";
    borderColor = "rgba(153, 246, 228, 1)";
    textColor = "#ffffff";
    floorGlow = "shadow-[0_0_35px_rgba(45,212,191,0.95)]";
    transformScale = "scale-105";
  } else if (isComparing) {
    // AMBER GOLD COMPARING 3D CRYSTAL
    frontBg = "linear-gradient(135deg, rgba(217, 119, 6, 0.95), rgba(120, 53, 15, 0.98))";
    topBg = "linear-gradient(135deg, rgba(254, 240, 138, 0.98), rgba(251, 191, 36, 0.88))";
    sideBg = "linear-gradient(135deg, rgba(180, 83, 9, 0.95), rgba(69, 26, 3, 0.98))";
    borderColor = "rgba(254, 240, 138, 1)";
    textColor = "#ffffff";
    floorGlow = "shadow-[0_0_45px_rgba(251,191,36,0.98)]";
    transformScale = "scale-110";
  }

  return (
    <div 
      className={`relative transition-transform duration-500 cursor-pointer will-change-transform ${transformScale}`}
      style={{ 
        width: `${cubeWidth}px`,
        height: `${cubeWidth}px`,
        transformStyle: "preserve-3d",
        transform: "rotateX(-24deg) rotateY(-34deg)"
      }}
    >
      {/* 1. TOP FACE (WITH TOP HOLOGRAM NUMBER) */}
      <div 
        className={`absolute inset-0 rounded-md flex items-center justify-center border-2 ${fontSizeClass} transition-all duration-300`}
        style={{
          background: topBg,
          borderColor: borderColor,
          color: textColor,
          transform: `rotateX(90deg) translateZ(${halfSize}px)`,
          textShadow: "0 0 10px currentColor, 0 2px 4px rgba(0,0,0,0.85)",
          boxShadow: "inset 0 0 8px rgba(255,255,255,0.5)"
        }}
      >
        {val}
      </div>

      {/* 2. RIGHT SIDE FACE (WITH RIGHT HOLOGRAM NUMBER) */}
      <div 
        className={`absolute inset-0 rounded-md flex items-center justify-center border-2 opacity-95 ${fontSizeClass} transition-all duration-300`}
        style={{
          background: sideBg,
          borderColor: borderColor,
          color: textColor,
          transform: `rotateY(90deg) translateZ(${halfSize}px)`,
          textShadow: "0 0 10px currentColor, 0 2px 4px rgba(0,0,0,0.85)"
        }}
      >
        {val}
      </div>

      {/* 3. LEFT SIDE FACE */}
      <div 
        className="absolute inset-0 rounded-md border-2 opacity-75 transition-all duration-300"
        style={{
          background: sideBg,
          borderColor: borderColor,
          transform: `rotateY(-90deg) translateZ(${halfSize}px)`
        }}
      />

      {/* 4. FRONT FACE (WITH FRONT HOLOGRAM NUMBER) */}
      <div 
        className={`absolute inset-0 rounded-md flex items-center justify-center border-2 ${fontSizeClass} transition-all duration-300 shadow-md`}
        style={{
          background: frontBg,
          borderColor: borderColor,
          color: textColor,
          transform: `translateZ(${halfSize}px)`,
          textShadow: "0 0 10px currentColor, 0 2px 4px rgba(0,0,0,0.9)"
        }}
      >
        {val}
      </div>

      {/* 5. BACK FACE */}
      <div 
        className="absolute inset-0 rounded-md border-2 opacity-60"
        style={{
          background: frontBg,
          borderColor: borderColor,
          transform: `rotateY(180deg) translateZ(${halfSize}px)`
        }}
      />

      {/* 6. BOTTOM FACE SHADOW CAST ON GLASS FLOOR SURFACE */}
      <div 
        className={`absolute inset-0 rounded-md bg-cyan-950/90 blur-xs border border-cyan-400/40 ${floorGlow}`}
        style={{
          transform: `rotateX(90deg) translateZ(-${halfSize}px) scale(1.05)`
        }}
      />
    </div>
  );
};

// =========================================================================================
// THREE.JS WEBGL 3D CANVAS ENGINE COMPONENT (SKILL: threejs-skills, genjutsu, motion-design)
// =========================================================================================
// =========================================================================================
// THREE.JS WEBGL 3D CANVAS ENGINE COMPONENT (CLEAN, ELEGANT & ULTRA-READABLE 3D)
// =========================================================================================
// =========================================================================================
// THREE.JS WEBGL 3D CANVAS ENGINE COMPONENT (SMOOTH 60FPS LERP INTERPOLATION)
// =========================================================================================
function ThreeMergeSortCanvas({ step, array, stepCubes, slotWidth }) {
  const mountRef = useRef(null);
  const [hoveredCube, setHoveredCube] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const pedestalsGroupRef = useRef(null);
  const cubeMeshesRef = useRef(new Map());
  const targetPositionsRef = useRef(new Map());
  const activeDepthRef = useRef(0);

  // 1. Initial Scene Setup (Runs Once)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 780;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 2000);
    camera.position.set(0, 0, 520);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight.position.set(100, 200, 200);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 3, 500);
    cyanLight.position.set(-100, 100, 150);
    scene.add(cyanLight);

    const pedestalsGroup = new THREE.Group();
    scene.add(pedestalsGroup);
    pedestalsGroupRef.current = pedestalsGroup;

    // Raycaster for Hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(Array.from(cubeMeshesRef.current.values()));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        setHoveredCube(hit.userData);
      } else {
        setHoveredCube(null);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    // 60fps Smooth Lerp Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth Camera Pan
      const targetCamY = 115 - activeDepthRef.current * 115 - 20;
      camera.position.y += (targetCamY - camera.position.y) * 0.08;

      // Smooth Mesh Position Lerp (Zero Stutter!)
      cubeMeshesRef.current.forEach((mesh, id) => {
        const target = targetPositionsRef.current.get(id);
        if (target) {
          mesh.position.x += (target.x - mesh.position.x) * 0.12;
          mesh.position.y += (target.y - mesh.position.y) * 0.12;
          mesh.position.z += (target.z - mesh.position.z) * 0.12;

          const s = target.scale || 1.0;
          mesh.scale.x += (s - mesh.scale.x) * 0.15;
          mesh.scale.y += (s - mesh.scale.y) * 0.15;
          mesh.scale.z += (s - mesh.scale.z) * 0.15;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  // 2. Smooth State & Target Update (No Component Re-creation)
  useEffect(() => {
    const scene = sceneRef.current;
    const pedestalsGroup = pedestalsGroupRef.current;
    if (!scene || !pedestalsGroup) return;

    activeDepthRef.current = step.depth || 0;

    // Helper: Create Texture
    const createNumberTexture = (val, state, isComparing, isWinner) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");

      let bgColor = "#071326";
      let borderColor = "#38bdf8";
      let textColor = "#7dd3fc";

      if (state === "sorted") {
        bgColor = "#064e3b";
        borderColor = "#34d399";
        textColor = "#6ee7b7";
      } else if (isWinner) {
        bgColor = "#047857";
        borderColor = "#10b981";
        textColor = "#a7f3d0";
      } else if (isComparing) {
        bgColor = "#0284c7";
        borderColor = "#fde047";
        textColor = "#ffffff";
      }

      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.roundRect(12, 12, 232, 232, 28);
      ctx.fill();

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 12;
      ctx.shadowColor = borderColor;
      ctx.shadowBlur = 20;
      ctx.stroke();

      ctx.font = "900 115px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = textColor;
      ctx.shadowColor = borderColor;
      ctx.shadowBlur = 25;
      ctx.fillText(String(val), 128, 128);

      return new THREE.CanvasTexture(canvas);
    };

    // Rebuild Pedestals
    while (pedestalsGroup.children.length > 0) {
      const child = pedestalsGroup.children.pop();
      if (child.geometry) child.geometry.dispose();
    }

    [0, 1, 2, 3].forEach((dTier) => {
      const tierY = 115 - dTier * 115;
      const tierCubes = stepCubes.filter((c) => c.depth === dTier);
      tierCubes.sort((a, b) => a.slotIdx - b.slotIdx);

      const subArrayGroups = [];
      let currentGroup = [];

      tierCubes.forEach((c) => {
        if (currentGroup.length === 0) {
          currentGroup.push(c);
        } else {
          const prevSlot = currentGroup[currentGroup.length - 1].slotIdx;
          if (c.slotIdx === prevSlot + 1 && c.sideOffset === currentGroup[currentGroup.length - 1].sideOffset) {
            currentGroup.push(c);
          } else {
            subArrayGroups.push(currentGroup);
            currentGroup = [c];
          }
        }
      });
      if (currentGroup.length > 0) subArrayGroups.push(currentGroup);

      subArrayGroups.forEach((group) => {
        const startSlot = group[0].slotIdx;
        const endSlot = group[group.length - 1].slotIdx;
        const count = endSlot - startSlot + 1;
        const pedestalWidth = count * slotWidth + 24;
        const sideOffset = group[0].sideOffset || 0;
        const centerX = (startSlot + (count - 1) / 2 - (array.length - 1) / 2) * slotWidth + sideOffset;

        const pedGeo = new THREE.BoxGeometry(pedestalWidth, 6, 50);
        const pedMat = new THREE.MeshPhysicalMaterial({
          color: (step.depth || 0) === dTier ? 0x0284c7 : 0x0f2744,
          metalness: 0.1,
          roughness: 0.2,
          transmission: 0.8,
          transparent: true,
          opacity: 0.7,
          emissive: (step.depth || 0) === dTier ? 0x0284c7 : 0x03284c,
          emissiveIntensity: (step.depth || 0) === dTier ? 0.4 : 0.1,
        });

        const pedMesh = new THREE.Mesh(pedGeo, pedMat);
        pedMesh.position.set(centerX, tierY - 32, 0);
        pedestalsGroup.add(pedMesh);
      });
    });

    // Update Cubes Targets & Meshes (Smooth Persistent Update)
    const cubeGeo = new THREE.BoxGeometry(50, 50, 40);

    stepCubes.forEach((c) => {
      const isComparing = step.phase === "LASER_SCAN" && step.comparingIds?.includes(c.id);
      const isWinner = step.phase === "CUBE_ASCEND" && step.flyingCubeId === c.id;

      const targetX = (c.slotIdx - (array.length - 1) / 2) * slotWidth + (c.sideOffset || 0);
      const targetY = 115 - c.depth * 115 + (isComparing ? 18 : 0);
      const targetZ = 15 + (isComparing ? 25 : 0);
      const scale = isWinner ? 1.15 : isComparing ? 1.08 : 1.0;

      targetPositionsRef.current.set(c.id, { x: targetX, y: targetY, z: targetZ, scale });

      let mesh = cubeMeshesRef.current.get(c.id);
      if (!mesh) {
        const numTexture = createNumberTexture(c.tag, c.state, isComparing, isWinner);
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x0b2545, roughness: 0.2, metalness: 0.1 });
        const frontFaceMat = new THREE.MeshStandardMaterial({ map: numTexture, transparent: true });
        const materials = [glassMat, glassMat, glassMat, glassMat, frontFaceMat, glassMat];

        mesh = new THREE.Mesh(cubeGeo, materials);
        mesh.position.set(targetX, targetY, targetZ);
        mesh.userData = { id: c.id, val: c.tag, slotIdx: c.slotIdx, depth: c.depth, state: c.state };

        scene.add(mesh);
        cubeMeshesRef.current.set(c.id, mesh);
      } else {
        // Update texture if state changed
        const numTexture = createNumberTexture(c.tag, c.state, isComparing, isWinner);
        mesh.material[4].map = numTexture;
        mesh.material[4].needsUpdate = true;
        mesh.userData = { id: c.id, val: c.tag, slotIdx: c.slotIdx, depth: c.depth, state: c.state };
      }
    });
  }, [step, array, stepCubes, slotWidth]);

  return (
    <div className="relative w-full h-[460px] rounded-3xl overflow-hidden bg-[#040711] border border-[#1e293b]">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D HOVER TOOLTIP OVERLAY */}
      {hoveredCube && (
        <div
          className="absolute z-50 pointer-events-none px-4 py-2.5 rounded-2xl bg-cyan-950/95 border border-cyan-400 text-cyan-100 font-mono text-xs shadow-xl backdrop-blur-md flex flex-col gap-1 transition-all duration-150"
          style={{
            left: `${Math.min(mousePos.x + 15, 600)}px`,
            top: `${Math.min(mousePos.y - 60, 360)}px`,
          }}
        >
          <div className="flex items-center gap-2 font-black text-cyan-300 border-b border-cyan-500/40 pb-1">
            <Box className="w-3.5 h-3.5 text-cyan-400" />
            <span>KHỐI CUBE #{hoveredCube.val}</span>
          </div>
          <div className="text-[10px] text-slate-300 flex justify-between gap-4">
            <span>Vị Trí Mảng: <b className="text-white">[{hoveredCube.slotIdx}]</b></span>
            <span>Tầng Đệ Quy: <b className="text-cyan-300">Tầng {hoveredCube.depth}</b></span>
          </div>
        </div>
      )}

      {/* HUD OVERLAY BADGE */}
      <div className="absolute top-4 left-4 z-40 px-3.5 py-1.5 rounded-full bg-[#091122]/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold flex items-center gap-2 backdrop-blur-md shadow-md">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>THREE.JS WEBGL 3D (SMOOTH 60FPS LERP INTERPOLATION)</span>
      </div>
    </div>
  );
}

export default function MergeSortLab({ onBack }) {
  const [arraySize, setArraySize] = useState(8);
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10, 19]);
  const [customInput, setCustomInput] = useState("");
  const [customInputError, setCustomInputError] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [viewMode, setViewMode] = useState("3d-iso"); // "3d-iso" | "3d-webgl" | "2d-front"

  // Tầng 1 Playback State
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);

  // Tầng 2 Code Reader State (Độc lập 100%)
  const [codeStep, setCodeStep] = useState(0);
  const [lang, setLang] = useState("pseudocode");
  const [isCodePlaying, setIsCodePlaying] = useState(false);
  const [codeSpeed, setCodeSpeed] = useState(800);

  const timerRef = useRef(null);
  const codeTimerRef = useRef(null);

  // Auto-scroll refs
  const codeBoxRef = useRef(null);
  const fullCodeBoxRef = useRef(null);
  const activeCodeLineRef = useRef(null);
  const activeFullCodeLineRef = useRef(null);

  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;

  useEffect(() => {
    const text = array.map((v) => (typeof v === "object" ? v.value : v)).join(", ");
    setCustomInput(text);
  }, [array]);

  const steps = useMemo(() => {
    return generateSkyBlocksSteps(array);
  }, [array]);

  const step = steps[currentStep] || steps[0] || {};
  const isFinished = currentStep === steps.length - 1;
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);
  const activeLine = step.activeLine || 1;

  const codeStepObj = steps[codeStep] || steps[0] || {};
  const codeActiveLine = codeStepObj.activeLine || 1;

  // Max recursion depth for dynamic camera panning
  const maxDepth = useMemo(() => {
    return Math.ceil(Math.log2(array.length || 1));
  }, [array.length]);

  // Stage Stage Calculations
  const stageWidth = 840;
  const slotWidth = Math.min(75, (stageWidth - 40) / (array.length || 1));

  // Dynamic 3D Camera Tracking Engine (Zoom & Pan follow action)
  const cameraTransform = useMemo(() => {
    const activeDepth = step.depth || 0;
    const tierGap = (array.length || 8) > 8 ? 125 : 155;
    const activeTierY = -170 + activeDepth * tierGap;
    
    // Midpoint X calculation
    const midX = step.mid !== undefined ? (step.mid - (array.length - 1) / 2) * slotWidth : 0;
    
    // Dynamic Zoom & Y Pan for Deep Tiers (Tier 3 & 4)
    const zoom = activeDepth >= 4 ? 0.85 : activeDepth >= 3 ? 0.92 : step.phase === "LASER_SCAN" ? 1.08 : 1.0;

    return {
      x: -midX * 0.35,
      y: -activeTierY * 0.82,
      zoom
    };
  }, [step.depth, step.mid, step.phase, array.length, slotWidth]);

  // Sound FX Triggers on Step Changes
  useEffect(() => {
    if (step.phase === "GLASS_CRACK") {
      playSoundFX("crack", soundEnabled);
    } else if (step.phase === "RIFT_DESCEND") {
      playSoundFX("whoosh", soundEnabled);
    } else if (step.phase === "LASER_SCAN") {
      playSoundFX("zap", soundEnabled);
    } else if (step.phase === "CUBE_ASCEND") {
      playSoundFX("chime", soundEnabled);
    } else if (step.phase === "EMERALD_SEAL") {
      playSoundFX("victory", soundEnabled);
    }
  }, [currentStep, step.phase, soundEnabled]);

  // AUTO SCROLL CODE SNIPPETS
  useEffect(() => {
    if (activeCodeLineRef.current) {
      activeCodeLineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentStep, activeLine]);

  useEffect(() => {
    if (activeFullCodeLineRef.current) {
      activeFullCodeLineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [codeStep, codeActiveLine, lang]);

  // Algorithmic Operations Math
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

  // Main Playback Loop (Tầng 1)
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

  // Code Reader Playback Loop (Tầng 2 Độc lập)
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

  // Confetti on completion
  useEffect(() => {
    if (isFinished && steps.length > 1) {
      try {
        confetti({
          particleCount: 150,
          spread: 120,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#10b981"],
        });
      } catch (e) {}
    }
  }, [isFinished, steps.length]);

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

  const handleCustomInputSubmit = (e) => {
    e.preventDefault();
    setCustomInputError("");
    if (!customInput.trim()) return;

    if (/[^0-9,\s]/.test(customInput)) {
      setCustomInputError("Mảng chứa ký tự không hợp lệ! Vui lòng chỉ nhập số không âm (0 - 999), phân cách bằng dấu phẩy.");
      return;
    }

    const tokens = customInput.split(/[, \s]+/).filter(Boolean);
    const parsed = tokens.map(Number);

    const hasInvalidNumber = parsed.some((v) => isNaN(v) || v < 0 || v > 999);
    if (hasInvalidNumber) {
      setCustomInputError("Số không hợp lệ! Mỗi phần tử phải có giá trị từ 0 đến 999.");
      return;
    }

    if (parsed.length < 4 || parsed.length > 16) {
      setCustomInputError(`Số lượng phần tử phải từ 4 đến 16 (hiện tại có ${parsed.length} phần tử).`);
      return;
    }

    setCustomInputError("");
    setArray(parsed);
    setArraySize(parsed.length);
    setCurrentStep(0);
    setCodeStep(0);
    setIsPlaying(false);
    setIsCodePlaying(false);
  };

  const currentCodeLines =
    lang === "python"
      ? PYTHON_CODE
      : lang === "java"
      ? JAVA_CODE
      : PSEUDOCODE;

  const stepCubes = step.cubes || [];

  // Group Cubes by Depth Tier for Dynamic Multi-tier Glass Shelves Render!
  const depthGroupedCubes = useMemo(() => {
    const groups = {};
    stepCubes.forEach((c) => {
      const d = c.depth || 0;
      if (!groups[d]) groups[d] = [];
      groups[d].push(c);
    });
    return groups;
  }, [stepCubes]);

  const getCubeX = (slotIdx, sideOffset = 0) => {
    return (slotIdx - (array.length - 1) / 2) * slotWidth + sideOffset;
  };

  const getTierYPos = (depth) => {
    return -170 + depth * 165;
  };

  return (
    <div className="w-full min-h-screen bg-[#040711] text-slate-100 p-3 sm:p-5 md:p-6 font-sans space-y-6 select-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b1426] via-[#040711] to-[#020308]">
      
      {/* HEADER TOOLBAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#091122]/90 backdrop-blur-md p-5 rounded-3xl border border-[#1e293b] shadow-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="px-3.5 py-1.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-200 hover:text-white transition-all flex items-center gap-2 text-xs font-bold cursor-pointer shadow-md border border-[#334155] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>← Quay về Kho Mô Phỏng</span>
          </button>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-extrabold text-sky-400 uppercase tracking-widest bg-[#1e293b] border border-[#334155] px-3.5 py-1 rounded-full shadow-inner flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sky Blocks 3D Hybrid</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 font-mono uppercase">
              MERGE SORT 3D — BẢN SỬA LỖI TRỰC QUAN & KHỐI 3D CHUẨN
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
              Khối 3D Đa Chiều Chân Thực | Pha Nứt & Tách Bệ Sân Khấu Hiển Thị Rõ Ràng | Góc Nhìn Cố Định
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2.5 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 ${
              soundEnabled ? "bg-[#1e293b] border-cyan-500/50 text-cyan-300" : "bg-[#1e293b]/50 border-[#334155] text-slate-500"
            }`}
            title="Bật/Tắt âm thanh SFX"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
        </div>
      </div>

      {/* CONFIGURATION TOOLBAR */}
      <div className="bg-[#091122]/90 backdrop-blur-md p-5 rounded-3xl border border-[#1e293b] shadow-xl space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Array Size Slider */}
          <div className="md:col-span-6 flex items-center gap-3 bg-[#040711] px-4 py-2.5 rounded-2xl border border-[#1e293b]">
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
            <span className="text-xs font-mono font-extrabold text-cyan-400 shrink-0 bg-[#1e293b] px-2.5 py-0.5 rounded-lg border border-[#334155]">
              {arraySize}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-6 flex items-center gap-2">
            <button
              onClick={handleRandomArray}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mảng Ngẫu Nhiên</span>
            </button>
            <button
              onClick={handleReverseArray}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            >
              <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
              <span>Mảng Ngược</span>
            </button>
          </div>
        </div>

        {/* Custom Input Form */}
        <div className="pt-2 border-t border-[#1e293b] space-y-1.5">
          <form onSubmit={handleCustomInputSubmit} className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300 shrink-0">Mảng tùy chỉnh:</span>
            <input
              type="text"
              value={customInput}
              onChange={(e) => {
                setCustomInput(e.target.value);
                if (customInputError) setCustomInputError("");
              }}
              placeholder="Ví dụ: 38, 27, 43, 3, 9, 82..."
              className={`flex-1 px-4 py-2 rounded-2xl bg-[#040711] border text-xs font-mono font-semibold text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                customInputError ? "border-rose-500/80 focus:border-rose-400" : "border-[#1e293b] focus:border-cyan-400"
              }`}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-all cursor-pointer shadow-md active:scale-95"
            >
              Áp Dụng
            </button>
          </form>
          {customInputError && (
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-rose-400 pl-24 animate-fadeIn">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>{customInputError}</span>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 1: BỘ MÔ PHỎNG SÂN KHẤU TRỰC QUAN 3D PERSPECTIVE (CỐ ĐỊNH GÓC NHÌN XUẤT SẮC) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#091122]/90 backdrop-blur-md rounded-3xl border border-[#1e293b] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
        
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
          <div className="flex items-center gap-2 text-sm font-black uppercase text-sky-400 font-mono tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>SÂN KHẤU 3D STAGE THEATER (GÓC NHÌN CỐ ĐỊNH PHỐI CẢNH 3D CHÂN THỰC)</span>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-[#040711] px-3 py-1 rounded-xl border border-[#1e293b]">
            Bước {currentStep + 1} / {steps.length}
          </span>
        </div>

        {/* Playback Controls Toolbar */}
        <div className="bg-[#040711] p-3.5 rounded-2xl border border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStep(0)}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#334155] shadow-xs"
              title="Về bước đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-300 disabled:opacity-30 transition-colors cursor-pointer border border-[#334155] shadow-xs"
              title="Bước trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

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
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 text-white font-extrabold text-xs shadow-lg shadow-sky-950/60 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
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
              className="p-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] disabled:opacity-30 text-slate-300 transition-colors cursor-pointer border border-[#334155] shadow-xs"
              title="Bước tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentStep(steps.length - 1)}
              disabled={currentStep === steps.length - 1}
              className="p-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] disabled:opacity-30 text-slate-300 transition-colors cursor-pointer border border-[#334155] shadow-xs"
              title="Xem kết quả cuối cùng"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-[#1e293b] px-3 py-1.5 rounded-xl border border-[#334155]">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Góc nhìn 3D Iso cố định chuẩn xác — Tự động căn giữa theo tầng đệ quy</span>
          </div>

          {/* Speed Slider */}
          <div className="flex items-center gap-3 w-full sm:w-auto bg-[#1e293b] px-4 py-2 rounded-xl border border-[#334155] shadow-xs">
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

        {/* STATUS BANNER */}
        <div className="w-full flex items-center justify-between px-4 py-2 bg-[#040711] rounded-2xl border border-[#1e293b]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate font-semibold text-slate-100">{step.status}</span>
          </div>
          <span className="text-[10px] font-bold text-sky-400 bg-[#1e293b] px-2.5 py-0.5 rounded-lg border border-[#334155] shrink-0">
            Pha: {step.phase}
          </span>
        </div>

        {/* 3D PERSPECTIVE STAGE VIEWPORT (3D ISOMETRIC MASTERPIECE DỰA TRÊN IMAGE 2) */}
        <div className="relative w-full h-[580px] bg-gradient-to-b from-[#091326] via-[#040711] to-[#020308] rounded-2xl border border-[#1e293b] overflow-hidden flex items-center justify-center shadow-inner">
          <div 
            style={{
              perspective: "1100px",
              perspectiveOrigin: "50% 35%",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* DYNAMIC 3D CAMERA TRACKING STAGE CONTAINER */}
            <div
              style={{
                transformStyle: "preserve-3d",
                transform: `translate3d(${cameraTransform.x}px, ${cameraTransform.y}px, 0px) scale(${cameraTransform.zoom}) rotateX(-12deg) rotateY(0deg)`,
                transition: "transform 0.75s cubic-bezier(0.34, 1.25, 0.64, 1)",
                width: "780px",
                height: "450px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >

              {/* RENDER DYNAMIC MULTI-TIER SUB-ARRAY 3D GLASS PEDESTALS */}
              {Array.from({ length: Math.min(6, maxDepth + 1) }, (_, i) => i).map((dTier) => {
                const isCurrentActiveTier = (step.depth || 0) === dTier;
                const tierGap = (array.length || 8) > 8 ? 125 : 155;
                const tierY = -170 + dTier * tierGap;
                const tierCubes = stepCubes.filter((c) => c.depth === dTier);

                // Group contiguous cubes into individual sub-array pedestals
                tierCubes.sort((a, b) => a.slotIdx - b.slotIdx);
                const subArrayGroups = [];
                let currentGroup = [];

                tierCubes.forEach((c) => {
                  if (currentGroup.length === 0) {
                    currentGroup.push(c);
                  } else {
                    const prevSlot = currentGroup[currentGroup.length - 1].slotIdx;
                    if (c.slotIdx === prevSlot + 1 && c.sideOffset === currentGroup[currentGroup.length - 1].sideOffset) {
                      currentGroup.push(c);
                    } else {
                      subArrayGroups.push(currentGroup);
                      currentGroup = [c];
                    }
                  }
                });
                if (currentGroup.length > 0) subArrayGroups.push(currentGroup);

                // Option A3: Hide empty tiers completely when no cubes exist
                if (subArrayGroups.length === 0) return null;

                // Render physical sub-array glass pedestals for each group
                return (
                  <React.Fragment key={`tier-pedestals-${dTier}`}>
                    {subArrayGroups.map((group, grpIdx) => {
                      const startSlot = group[0].slotIdx;
                      const endSlot = group[group.length - 1].slotIdx;
                      const count = endSlot - startSlot + 1;
                      const pedestalWidth = count * slotWidth + 24;
                      const sideOffset = group[0].sideOffset || 0;
                      const centerX = (startSlot + (count - 1) / 2 - (array.length - 1) / 2) * slotWidth + sideOffset;

                      return (
                        <div
                          key={`sub-pedestal-${dTier}-${grpIdx}`}
                          className={`absolute h-16 rounded-2xl transition-all duration-500 flex items-center justify-between px-4 font-mono text-xs will-change-transform ${
                            isCurrentActiveTier ? "opacity-100 scale-[1.01] z-20" : "opacity-90 scale-100 z-10"
                          }`}
                          style={{
                            transformStyle: "preserve-3d",
                            width: `${pedestalWidth}px`,
                            transform: `translate3d(${centerX}px, ${tierY}px, ${dTier * -25}px)`
                          }}
                        >
                          {/* 3D TOP SURFACE GLASS PLANE */}
                          <div
                            className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${
                              isCurrentActiveTier
                                ? "bg-gradient-to-r from-sky-600/45 via-cyan-500/50 to-emerald-600/45 border-cyan-300 shadow-[0_0_35px_rgba(56,189,248,0.45)] ring-2 ring-cyan-400/60"
                                : "bg-gradient-to-r from-[#071120] via-[#0a172e] to-[#071120] border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.15)]"
                            }`}
                            style={{
                              transform: "rotateX(55deg) translateZ(12px)",
                              backgroundImage: "linear-gradient(rgba(56, 189, 248, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.25) 1px, transparent 1px)",
                              backgroundSize: "18px 18px"
                            }}
                          />

                          {/* 3D FRONT EDGE BEVEL THICKNESS */}
                          <div
                            className={`absolute inset-x-0 bottom-0 h-6 rounded-b-2xl border-x border-b flex items-center justify-between px-3 transition-all duration-500 ${
                              isCurrentActiveTier
                                ? "bg-sky-700/80 border-cyan-300 text-cyan-100 shadow-md font-black"
                                : "bg-[#040711] border-sky-500/40 text-slate-300 font-bold"
                            }`}
                            style={{
                              transform: "translateZ(24px)",
                              textShadow: isCurrentActiveTier ? "0 0 12px #38bdf8" : "0 0 5px rgba(56,189,248,0.5)"
                            }}
                          >
                            <div className="flex items-center gap-1.5 truncate">
                              <div className={`w-2 h-2 rounded-full shrink-0 ${isCurrentActiveTier ? "bg-cyan-400 animate-ping shadow-[0_0_10px_#22d3ee]" : "bg-cyan-500/70"}`} />
                              <span className="font-extrabold tracking-wider text-[11px] truncate">
                                BỆ TẦNG {dTier} [{startSlot}..{endSlot}]
                              </span>
                            </div>

                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${
                              isCurrentActiveTier ? "bg-black/60 text-cyan-300 border-cyan-400" : "bg-black/40 text-slate-400 border-slate-700"
                            }`}>
                              {dTier === 0 ? "Gốc" : `Mảng Con (${count})`}
                            </span>
                          </div>

                          {/* 3D LEFT SIDE BEVEL CAP */}
                          <div
                            className="absolute left-0 top-0 bottom-0 w-6 rounded-l-2xl border-l border-y bg-sky-900/60"
                            style={{ transform: "rotateY(-90deg) translateZ(12px)" }}
                          />

                          {/* 3D RIGHT SIDE BEVEL CAP */}
                          <div
                            className="absolute right-0 top-0 bottom-0 w-6 rounded-r-2xl border-r border-y bg-sky-900/60"
                            style={{ transform: "rotateY(90deg) translateZ(12px)" }}
                          />

                          {/* 3D BOTTOM DROP SHADOW */}
                          <div
                            className="absolute inset-x-2 -bottom-4 h-6 rounded-full bg-black/80 blur-lg"
                            style={{ transform: "translateZ(-20px) scale(0.95)" }}
                          />

                          {/* GLASS CRACK RIFT EFFECT */}
                          {step.phase === "GLASS_CRACK" && step.depth === dTier && step.mid !== undefined && step.mid >= startSlot && step.mid < endSlot && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                              <div className="w-1.5 h-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-pulse rounded-full" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              })}

              {/* RENDER KHỐI CUBE 3D NẰM CHÍNH XÁC TRONG TRỌNG TÂM LÒNG MẶT LƯỚI BỆ KÍNH */}
              {stepCubes.map((c) => {
                const isComparing = step.phase === "LASER_SCAN" && step.comparingIds?.includes(c.id);
                const isFlying = (step.phase === "CUBE_ASCEND") && step.flyingCubeId === c.id;

                const tierGap = (array.length || 8) > 8 ? 125 : 155;
                const posX = getCubeX(c.slotIdx, c.sideOffset);
                const posY = (-170 + c.depth * tierGap) - 48 - (isComparing ? 12 : 0);
                const posZ = c.depth * -25 + (isFlying ? 85 : isComparing ? 65 : 45);
                const cubeWidth = Math.max(28, Math.min(52, Math.round(slotWidth - 8)));

                return (
                  <div
                    key={c.id}
                    className="absolute"
                    style={{
                      transform: `translate3d(${posX}px, ${posY}px, ${posZ}px)`,
                      transition: "transform 0.55s cubic-bezier(0.34, 1.25, 0.64, 1)",
                      zIndex: isFlying ? 60 : isComparing ? 50 : 40
                    }}
                  >
                    <GlassCube3D
                      val={c.tag}
                      state={c.depth === 0 ? "sorted" : c.state}
                      isFlying={isFlying}
                      isComparing={isComparing}
                      cubeWidth={cubeWidth}
                    />
                  </div>
                );
              })}

              {/* RENDER 3D FLOATING COMPARISON POP-UP BADGE WHEN IN LASER_SCAN PHASE */}
              {step.phase === "LASER_SCAN" && step.comparingIds && step.comparingIds.length >= 2 && (() => {
                const compCubes = stepCubes.filter((c) => step.comparingIds.includes(c.id));
                if (compCubes.length < 2) return null;

                const cubeA = compCubes[0];
                const cubeB = compCubes[1];
                const valA = cubeA.tag;
                const valB = cubeB.tag;
                const operator = valA < valB ? "<" : valA > valB ? ">" : "=";
                const winnerVal = valA <= valB ? valA : valB;

                const tierGap = (array.length || 8) > 8 ? 125 : 155;
                const posXA = getCubeX(cubeA.slotIdx, cubeA.sideOffset);
                const posXB = getCubeX(cubeB.slotIdx, cubeB.sideOffset);
                const midX = (posXA + posXB) / 2;
                const posY = (-170 + cubeA.depth * tierGap) - 105;
                const posZ = cubeA.depth * -25 + 95;

                return (
                  <div
                    key="comparison-popup"
                    className="absolute pointer-events-none z-50 transition-all duration-300"
                    style={{
                      transform: `translate3d(${midX}px, ${posY}px, ${posZ}px)`,
                    }}
                  >
                    <div className="relative -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#040914]/95 border-2 border-amber-400 text-amber-100 shadow-[0_0_35px_rgba(251,191,36,0.85)] animate-bounce font-mono text-xs font-black backdrop-blur-md">
                      <span className="px-2 py-0.5 rounded-lg bg-amber-950/90 text-amber-300 border border-amber-500/60 font-black">
                        {valA}
                      </span>
                      <span className="text-amber-300 font-extrabold text-sm px-0.5">
                        {operator}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-amber-950/90 text-amber-300 border border-amber-500/60 font-black">
                        {valB}
                      </span>
                      <span className="ml-1 text-[10px] text-emerald-300 bg-emerald-950/90 px-2 py-0.5 rounded-md border border-emerald-500/60 flex items-center gap-1 font-bold">
                        ✓ Chọn {winnerVal}
                      </span>

                      {/* POPUP DOWN ARROW INDICATOR */}
                      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-400" />
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 2: MÃ GIẢ FULL & TRÌNH ĐỌC MÃ NGUỒN THUẬT TOÁN (CARD FULL-WIDTH ĐỘC LẬP) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#091122] p-6 rounded-3xl border border-[#1e293b] shadow-2xl space-y-4 text-slate-100">
        
        {/* Header & Language Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1e293b] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#040711] border border-[#1e293b]">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 leading-tight font-mono uppercase tracking-wider flex items-center gap-2">
                <Code2 className="w-4 h-4 text-sky-400" />
                <span>TẦNG 2: VS CODE IDE TERMINAL — TRÌNH ĐỌC MÃ NGUỒN (CHẠY ĐỘC LẬP)</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Đọc từng dòng mã độc lập hoàn toàn với Sân khấu Tầng 1 | Tự động cuộn theo dòng active
              </p>
            </div>
          </div>

          {/* Language Switcher Tabs */}
          <div className="flex bg-[#040711] p-1 rounded-xl border border-[#1e293b]">
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

        {/* DEDICATED TẦNG 2 PLAYBACK CONTROL TOOLBAR */}
        <div className="bg-[#040711] p-3 rounded-2xl border border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsCodePlaying(false);
                setCodeStep(0);
              }}
              className="p-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-300 transition-colors border border-[#334155] cursor-pointer"
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
              className="p-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-300 disabled:opacity-30 transition-colors border border-[#334155] cursor-pointer"
              title="Dòng mã trước"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                if (isCodePlaying) {
                  setIsCodePlaying(false);
                } else {
                  if (codeStep >= steps.length - 1) setCodeStep(0);
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
                  <span>Tự động đọc mã</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setIsCodePlaying(false);
                setCodeStep((p) => Math.min(steps.length - 1, p + 1));
              }}
              disabled={codeStep === steps.length - 1}
              className="p-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-300 disabled:opacity-30 transition-colors border border-[#334155] cursor-pointer"
              title="Dòng mã tiếp"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono font-bold text-cyan-400 bg-[#1e293b] px-4 py-1.5 rounded-xl border border-[#334155]">
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
              className="w-28 accent-sky-400 cursor-pointer"
            />
            <span className="text-cyan-400 font-bold w-12 text-right">{codeSpeed}ms</span>
          </div>
        </div>

        {/* Code Display Container */}
        <div ref={fullCodeBoxRef} className="font-mono text-xs space-y-1 py-1 max-h-72 overflow-y-auto scroll-smooth bg-[#040711] p-4 rounded-2xl border border-[#1e293b]">
          {currentCodeLines.map((item) => {
            const isActive = item.line === codeActiveLine;
            return (
              <div
                key={item.line}
                ref={isActive ? activeFullCodeLineRef : null}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#1e293b] text-sky-300 font-extrabold border-l-4 border-sky-400 shadow-lg scale-[1.005]"
                    : "text-slate-300 hover:text-white hover:bg-[#161b22]/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 text-[11px] text-slate-500 shrink-0 font-bold">
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
                      : "text-[#22d3ee] font-semibold bg-[#091122] border-[#1e293b]"
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
      {/* TẦNG 3: BẢNG THÔNG SỐ THỰC THI & SO SÁNH HIỆU NĂNG THUẬT TOÁN (CARD FULL-WIDTH ĐỘC LẬP) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#091122] p-6 rounded-3xl border border-[#1e293b] shadow-2xl space-y-5 text-slate-100">
        
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 leading-tight uppercase font-mono tracking-wider">
                TẦNG 3: BẢNG THÔNG SỐ THỰC THI & SO SÁNH HIỆU NĂNG THUẬT TOÁN
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Phân tích toán học độ phức tạp thuật toán và So sánh số phép toán chuẩn xác với Bubble Sort $O(N^2)$
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold bg-[#040711] px-3 py-1 rounded-xl border border-[#1e293b]">
            Mảng N = {array.length} phần tử
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* CỘT TRÁI (6 COLS): THÔNG SỐ THỰC THI & PHÂN TÍCH CHIA ĐỂ TRỊ */}
          <div className="lg:col-span-6 bg-[#040711] p-5 rounded-2xl border border-[#1e293b] space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-2.5">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Thông Số Thực Thi Thời Gian Thực</span>
              </span>
              <span className="text-xs font-mono text-emerald-400 font-extrabold bg-[#091122] px-2.5 py-0.5 rounded border border-[#1e293b]">
                Stable Sort
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#091122] border border-sky-500/30 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Số phép so sánh</span>
                <span className="text-xl font-black text-sky-400 font-mono">{step.comparisons || 0}</span>
                <span className="text-[9px] text-slate-500 block">Số lần so sánh $L[i] \le R[j]$</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#091122] border border-teal-500/30 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Số lần gán/trộn</span>
                <span className="text-xl font-black text-teal-400 font-mono">{step.mergeWrites || 0}</span>
                <span className="text-[9px] text-slate-500 block">Số lần gán Cube thắng về $arr[k]$</span>
              </div>
            </div>

            {/* DIVIDE & CONQUER PRINCIPLE EXPLANATION */}
            <div className="p-3.5 rounded-2xl bg-[#091122] border border-[#1e293b] space-y-1.5 text-xs">
              <span className="font-bold text-cyan-300 block text-xs uppercase font-mono">
                🧩 Nguyên Lý 3 Bước Chia Để Trị:
              </span>
              <div className="text-[11px] text-slate-300 space-y-1 font-sans">
                <div>• <strong className="text-sky-400 font-mono">Chia (Divide):</strong> Cắt mảng thành 2 nửa tại $mid = (l+r)/2$.</div>
                <div>• <strong className="text-teal-400 font-mono">Trị (Conquer):</strong> Đệ quy sắp xếp 2 nửa tới khi còn 1 phần tử.</div>
                <div>• <strong className="text-emerald-400 font-mono">Kết hợp (Combine):</strong> Trộn 2 nửa đã sắp xếp bằng Trạm Scan Laser.</div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (6 COLS): SO SÁNH HIỆU NĂNG VỚI BUBBLE SORT */}
          <div className="lg:col-span-6 bg-[#040711] p-5 rounded-2xl border border-sky-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-2.5">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>So Sánh Hiệu Năng: Merge Sort vs Bubble Sort</span>
              </span>
              <span className="text-[10px] font-mono text-amber-400 font-bold bg-[#091122] px-2 py-0.5 rounded border border-[#1e293b]">
                N = {array.length}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#091122] border border-sky-500/50 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-400 text-xs uppercase font-mono">Merge Sort 3D</span>
                  <span className="text-[9px] font-mono bg-sky-950 text-sky-300 px-1.5 py-0.5 rounded">O(N log N)</span>
                </div>
                <div className="text-xl font-black text-sky-300 font-mono">
                  {mergeSortAlgorithmicOps} <span className="text-[10px] text-slate-400 font-normal">phép toán</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#091122] border border-rose-500/50 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-400 text-xs uppercase font-mono">Bubble Sort</span>
                  <span className="text-[9px] font-mono bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded">O(N²)</span>
                </div>
                <div className="text-xl font-black text-rose-400 font-mono">
                  {bubbleSortStats.totalOps} <span className="text-[10px] text-slate-400 font-normal">phép toán</span>
                </div>
              </div>
            </div>

            {/* BUBBLE SORT COMPARISON HIGHLIGHT */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/70 via-cyan-950/70 to-emerald-950/70 border border-cyan-500/40 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-200 block">Tốc độ so với Bubble Sort $O(N^2)$:</span>
                <span className="text-[10px] text-slate-400 block font-mono">Merge Sort luôn ổn định $O(N \log N)$</span>
              </div>
              <span className="text-sm font-mono font-black text-amber-300 bg-[#040711] px-3.5 py-1.5 rounded-xl border border-amber-500/40 shadow-md">
                Nhanh hơn ~{speedRatio}x lần!
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
