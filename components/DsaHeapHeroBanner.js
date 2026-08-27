"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  RotateCcw,
  Plus,
  ShieldCheck,
  Cpu,
  Shuffle,
  Crown,
  HeartPulse
} from "lucide-react";

export default function DsaHeapHeroBanner() {
  // Initial Max Heap (1-based logical values)
  const initialHeap = [90, 85, 70, 60, 55, 65, 50, 20, 30];
  const [heap, setHeap] = useState([...initialHeap]);
  const [inputVal, setInputVal] = useState(75);
  const [indexingMode, setIndexingMode] = useState("1-based"); // "1-based" | "0-based"
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [animatingIndices, setAnimatingIndices] = useState([]);
  const [actionLog, setActionLog] = useState("Sẵn sàng! Hãy thử Insert giá trị mới hoặc ExtractMax.");
  const [activeTab, setActiveTab] = useState(1);
  const [isTriageMode, setIsTriageMode] = useState(false);

  // Helper delay
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Shift Up (Bubble Up) for Insert
  const handleInsert = async () => {
    if (heap.length >= 15) {
      setActionLog("Đống đã đầy (tối đa 15 phần tử để hiển thị cây 4 tầng).");
      return;
    }
    const val = Number(inputVal) || Math.floor(Math.random() * 80) + 15;
    let newHeap = [...heap, val];
    let currIdx = newHeap.length - 1; // 0-based internal index

    setHeap([...newHeap]);
    setAnimatingIndices([currIdx]);
    setActionLog(`1. Đặt ${val} vào vị trí lá cuối cùng (Index ${indexingMode === "1-based" ? currIdx + 1 : currIdx}). Bắt đầu Shift-Up...`);
    await delay(700);

    // Shift Up loop
    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1) / 2);
      if (newHeap[currIdx] > newHeap[parentIdx]) {
        setActionLog(`Shift-Up: ${newHeap[currIdx]} > ${newHeap[parentIdx]} (Cha) ⟹ Tráo đổi vị trí!`);
        setAnimatingIndices([currIdx, parentIdx]);
        await delay(600);

        // Swap
        let temp = newHeap[currIdx];
        newHeap[currIdx] = newHeap[parentIdx];
        newHeap[parentIdx] = temp;
        setHeap([...newHeap]);
        currIdx = parentIdx;
        await delay(600);
      } else {
        break;
      }
    }

    setAnimatingIndices([]);
    setActionLog(`Đã hoàn tất Insert(${val})! Tính chất Max-Heap được phục hồi thành công.`);
  };

  // Shift Down (Bubble Down / Heapify) for ExtractMax
  const handleExtractMax = async () => {
    if (heap.length <= 1) {
      if (heap.length === 1) {
        const rootVal = heap[0];
        setHeap([]);
        setActionLog(`Đã trích xuất gốc ${rootVal}. Đống hiện tại rỗng.`);
      } else {
        setActionLog("Đống đang rỗng!");
      }
      return;
    }

    let newHeap = [...heap];
    const maxVal = newHeap[0];
    const lastVal = newHeap.pop();
    newHeap[0] = lastVal;

    setActionLog(`1. Rút phần tử lớn nhất Max = ${maxVal} khỏi Root. Đưa lá cuối (${lastVal}) lên Root. Bắt đầu Shift-Down...`);
    setHeap([...newHeap]);
    setAnimatingIndices([0]);
    await delay(800);

    let currIdx = 0;
    while (true) {
      let leftIdx = 2 * currIdx + 1;
      let rightIdx = 2 * currIdx + 2;
      let largestIdx = currIdx;

      if (leftIdx < newHeap.length && newHeap[leftIdx] > newHeap[largestIdx]) {
        largestIdx = leftIdx;
      }
      if (rightIdx < newHeap.length && newHeap[rightIdx] > newHeap[largestIdx]) {
        largestIdx = rightIdx;
      }

      if (largestIdx !== currIdx) {
        setActionLog(`Shift-Down: ${newHeap[currIdx]} < ${newHeap[largestIdx]} (Con lớn hơn) ⟹ Tráo đổi với con!`);
        setAnimatingIndices([currIdx, largestIdx]);
        await delay(600);

        let temp = newHeap[currIdx];
        newHeap[currIdx] = newHeap[largestIdx];
        newHeap[largestIdx] = temp;

        setHeap([...newHeap]);
        currIdx = largestIdx;
        await delay(600);
      } else {
        break;
      }
    }

    setAnimatingIndices([]);
    setActionLog(`Đã hoàn tất ExtractMax() ⟹ Kết quả trả về: ${maxVal}. Max-Heap đạt trạng thái tối ưu!`);
  };

  // Reset to default
  const handleReset = () => {
    setHeap([...initialHeap]);
    setAnimatingIndices([]);
    setHoveredIdx(null);
    setActionLog("Đã khôi phục đống mặc định gồm 9 phần tử.");
  };

  // Random generate
  const handleRandomHeap = () => {
    const count = 7 + Math.floor(Math.random() * 4);
    let arr = [];
    while (arr.length < count) {
      let r = Math.floor(Math.random() * 90) + 10;
      if (!arr.includes(r)) arr.push(r);
    }
    // Build max heap bottom-up
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      let k = i;
      while (true) {
        let left = 2 * k + 1;
        let right = 2 * k + 2;
        let largest = k;
        if (left < arr.length && arr[left] > arr[largest]) largest = left;
        if (right < arr.length && arr[right] > arr[largest]) largest = right;
        if (largest !== k) {
          let tmp = arr[k];
          arr[k] = arr[largest];
          arr[largest] = tmp;
          k = largest;
        } else {
          break;
        }
      }
    }
    setHeap(arr);
    setAnimatingIndices([]);
    setHoveredIdx(null);
    setActionLog(`Đã sinh ngẫu nhiên một Max-Heap hợp lệ gồm ${arr.length} phần tử.`);
  };

  // Pre-calculated fixed coordinate grid for up to 15 nodes (4 levels)
  const nodeCoords = [
    { x: 300, y: 35 },   // Level 0: Root (0)
    { x: 160, y: 95 },   // Level 1: 1
    { x: 440, y: 95 },   // Level 1: 2
    { x: 90, y: 155 },   // Level 2: 3
    { x: 230, y: 155 },  // Level 2: 4
    { x: 370, y: 155 },  // Level 2: 5
    { x: 510, y: 155 },  // Level 2: 6
    { x: 55, y: 215 },   // Level 3: 7
    { x: 125, y: 215 },  // Level 3: 8
    { x: 195, y: 215 },  // Level 3: 9
    { x: 265, y: 215 },  // Level 3: 10
    { x: 335, y: 215 },  // Level 3: 11
    { x: 405, y: 215 },  // Level 3: 12
    { x: 475, y: 215 },  // Level 3: 13
    { x: 545, y: 215 },  // Level 3: 14
  ];

  // Helper for displaying index label based on mode
  const getDisplayIndex = (internalIdx) => {
    return indexingMode === "1-based" ? internalIdx + 1 : internalIdx;
  };

  // Formula Helper
  const getFormulaText = (internalIdx) => {
    if (internalIdx === null || internalIdx < 0 || internalIdx >= heap.length) {
      return indexingMode === "1-based"
        ? "Hover vào bất kỳ nút nào để xem công thức: Parent = ⌊i/2⌋, Left = 2i, Right = 2i+1"
        : "Hover vào bất kỳ nút nào để xem công thức: Parent = ⌊(i-1)/2⌋, Left = 2i+1, Right = 2i+2";
    }
    const dispI = getDisplayIndex(internalIdx);
    if (indexingMode === "1-based") {
      const p = internalIdx > 0 ? Math.floor(dispI / 2) : "None (Root)";
      const l = 2 * dispI <= heap.length ? 2 * dispI : "None";
      const r = 2 * dispI + 1 <= heap.length ? 2 * dispI + 1 : "None";
      return `Node i=${dispI} (Giá trị: ${heap[internalIdx]}) ⟹ Parent: ⌊${dispI}/2⌋ = ${p} | Left: 2×${dispI} = ${l} | Right: 2×${dispI}+1 = ${r}`;
    } else {
      const p = internalIdx > 0 ? Math.floor((dispI - 1) / 2) : "None (Root)";
      const l = 2 * dispI + 1 < heap.length ? 2 * dispI + 1 : "None";
      const r = 2 * dispI + 2 < heap.length ? 2 * dispI + 2 : "None";
      return `Node i=${dispI} (Giá trị: ${heap[internalIdx]}) ⟹ Parent: ⌊(${dispI}-1)/2⌋ = ${p} | Left: 2×${dispI}+1 = ${l} | Right: 2×${dispI}+2 = ${r}`;
    }
  };

  const tabsData = [
    {
      id: 1,
      title: "1. ADT Priority Queue",
      icon: Zap,
      badge: "Mô Hình ADT",
      color: "amber",
      desc: "Hàng đợi ưu tiên là kiểu dữ liệu trừu tượng quản lý tập hợp các phần tử có độ ưu tiên. Ba thao tác cốt lõi: Insert(v, p) chèn phần tử, FindMax() lấy phần tử ưu tiên cao nhất, và ExtractMax() gỡ bỏ phần tử ưu tiên cao nhất.",
    },
    {
      id: 2,
      title: "2. Binary Max-Heap",
      icon: Crown,
      badge: "Tính Chất Đống",
      color: "emerald",
      desc: "Binary Max-Heap là một Cây Nhị Phân Hoàn Chỉnh (Complete Binary Tree) thỏa mãn tính chất Max-Heap Property: Giá trị của mọi đỉnh cha luôn LỚN HƠN HOẶC BẰNG các đỉnh con (Parent ≥ Children). Đỉnh gốc luôn chứa giá trị lớn nhất!",
    },
    {
      id: 3,
      title: "3. Implicit Data Structure",
      icon: Cpu,
      badge: "Không Cần Con Trỏ",
      color: "sky",
      desc: "Kỳ quan kỹ thuật: Binary Heap được lưu trữ trực tiếp trên Mảng 1 Chiều liền kề. Không cần tốn 1 byte nào cho con trỏ left/right! Mối quan hệ cha-con được tính bằng các phép nhân/chia chỉ số index siêu tốc O(1).",
    },
    {
      id: 4,
      title: "4. Ma Trận Độ Phức Tạp Vàng",
      icon: ShieldCheck,
      badge: "Hiệu Năng O(log n)",
      color: "indigo",
      desc: "Nhờ chiều cao cây luôn ngắn nhất h = ⌊log₂ n⌋: FindMax() đạt O(1) tức thì, Insert() và ExtractMax() chỉ tốn O(log n). Đặc biệt, thuật toán BuildHeap() từ mảng n phần tử chỉ tốn O(n) tuyến tính!",
    },
  ];

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 border border-amber-200/80 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden mb-10 font-sans">
      {/* Header Section */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-200/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
            <Crown className="w-4 h-4 text-amber-700" />
            <span>Chương 10 • Cấu Trúc Dữ Liệu Tối Ưu Ưu Tiên</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-950 via-yellow-900 to-emerald-950 bg-clip-text text-transparent">
            Bài 10: Priority Queue &amp; Binary Max Heap
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Khám phá <strong>Binary Max Heap</strong> — cấu trúc dữ liệu cây nhị phân hoàn chỉnh lưu trên mảng 1 chiều, không dùng con trỏ, cho phép tìm phần tử lớn nhất trong <strong className="text-emerald-800 font-mono font-bold">O(1)</strong> và chèn/xóa trong <strong className="text-amber-800 font-mono font-bold">O(log n)</strong>.
          </p>
        </div>

        {/* Indexing Switcher & Triage Demo Toggle */}
        <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
          {/* 1-based vs 0-based Switcher */}
          <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 text-xs">
            <button
              onClick={() => setIndexingMode("1-based")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                indexingMode === "1-based"
                  ? "bg-amber-500 text-slate-950 shadow-sm font-mono"
                  : "text-slate-600 hover:text-slate-900 font-mono"
              }`}
            >
              1-Based (Slide)
            </button>
            <button
              onClick={() => setIndexingMode("0-based")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                indexingMode === "0-based"
                  ? "bg-emerald-600 text-white shadow-sm font-mono"
                  : "text-slate-600 hover:text-slate-900 font-mono"
              }`}
            >
              0-Based (Code)
            </button>
          </div>

          {/* Triage Metaphor Toggle */}
          <button
            onClick={() => setIsTriageMode(!isTriageMode)}
            className={`px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              isTriageMode
                ? "bg-rose-600 border-rose-500 text-white"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            {isTriageMode ? "Đóng Ẩn Dụ Cấp Cứu" : "Ẩn Dụ Cấp Cứu (ER)"}
          </button>
        </div>
      </div>

      {/* Hospital ER Triage Metaphor Card (Conditional) */}
      {isTriageMode && (
        <div className="relative z-10 my-6 p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-3 animate-fadeIn shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-rose-600" />
              <h3 className="text-sm md:text-base font-bold text-rose-950">
                Ẩn Dụ Thực Tế: Phòng Cấp Cứu Bệnh Viện (Hospital ER Triage)
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono bg-rose-100 text-rose-900 border border-rose-300">
              FIFO vs Priority Queue
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-sm">
              <span className="font-bold text-slate-800 uppercase font-mono">1. Hàng đợi thường (FIFO Queue):</span>
              <p className="text-slate-600 leading-relaxed">
                Ai đến trước được khám trước. Nếu một bệnh nhân đau tim nguy kịch (Priority 100) đến sau 10 người cảm nhẹ (Priority 10), họ phải chờ đến lượt &rArr; <strong className="text-rose-700">Rất nguy hiểm!</strong>
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-rose-300 space-y-1.5 shadow-sm">
              <span className="font-bold text-rose-900 uppercase font-mono">2. Hàng đợi ưu tiên (Priority Queue / Heap):</span>
              <p className="text-slate-700 leading-relaxed">
                Bác sĩ luôn rút phần tử có <strong>Độ nguy kịch lớn nhất</strong> (<code>ExtractMax</code>) ra điều trị trước. Bệnh nhân nguy kịch vừa đến lập tức được <strong>Shift-Up</strong> lên đầu hàng đợi!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Dual-View Engine: Complete Binary Tree SVG + Array Memory Strip */}
      <div className="relative z-10 my-6 p-5 rounded-2xl bg-white border border-amber-100 space-y-5 shadow-sm">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-800">
              Live Max-Heap Canvas (Kích thước: {heap.length} nút | Chiều cao: h = {heap.length > 0 ? Math.floor(Math.log2(heap.length)) : 0})
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-xl border border-slate-200">
              <span className="text-slate-500 font-mono text-[11px] font-semibold">Val:</span>
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-12 bg-white border border-slate-300 text-amber-900 font-bold font-mono text-center rounded-lg px-1 py-0.5 text-xs focus:outline-none focus:border-amber-500 shadow-inner"
              />
              <button
                onClick={handleInsert}
                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition-all flex items-center gap-1 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                Insert
              </button>
            </div>

            <button
              onClick={handleExtractMax}
              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all flex items-center gap-1 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              ExtractMax()
            </button>

            <button
              onClick={handleRandomHeap}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all flex items-center gap-1"
              title="Sinh ngẫu nhiên Max Heap"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleReset}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all flex items-center gap-1"
              title="Đặt lại mặc định"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tree SVG View */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <svg viewBox="0 0 600 255" className="w-full max-w-[600px] h-auto select-none">
            {/* Draw Edges */}
            {heap.map((val, idx) => {
              if (idx === 0) return null;
              const parentIdx = Math.floor((idx - 1) / 2);
              const parentCoord = nodeCoords[parentIdx];
              const currCoord = nodeCoords[idx];

              const isHighlighted =
                hoveredIdx === idx ||
                hoveredIdx === parentIdx ||
                animatingIndices.includes(idx) ||
                animatingIndices.includes(parentIdx);

              return (
                <line
                  key={`edge-${idx}`}
                  x1={parentCoord.x}
                  y1={parentCoord.y}
                  x2={currCoord.x}
                  y2={currCoord.y}
                  stroke={isHighlighted ? "#d97706" : "#cbd5e1"}
                  strokeWidth={isHighlighted ? "3" : "2"}
                />
              );
            })}

            {/* Draw Nodes */}
            {heap.map((val, idx) => {
              const coord = nodeCoords[idx];
              if (!coord) return null;

              const isHovered = hoveredIdx === idx;
              const isAnimating = animatingIndices.includes(idx);
              const isRoot = idx === 0;

              return (
                <g
                  key={`node-${idx}`}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Outer Glow for Root or Animating */}
                  {(isRoot || isAnimating || isHovered) && (
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r="22"
                      fill="none"
                      stroke={isAnimating ? "#059669" : isRoot ? "#d97706" : "#0284c7"}
                      strokeWidth="2"
                      className={isAnimating ? "animate-ping" : ""}
                      opacity="0.6"
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r="16"
                    fill={
                      isAnimating
                        ? "#d1fae5"
                        : isHovered
                        ? "#e0f2fe"
                        : isRoot
                        ? "#fef3c7"
                        : "#ffffff"
                    }
                    stroke={
                      isAnimating
                        ? "#059669"
                        : isHovered
                        ? "#0284c7"
                        : isRoot
                        ? "#d97706"
                        : "#94a3b8"
                    }
                    strokeWidth={isRoot ? "2.5" : "2"}
                  />

                  {/* Key Value */}
                  <text
                    x={coord.x}
                    y={coord.y + 4.5}
                    textAnchor="middle"
                    fill={isRoot ? "#92400e" : isAnimating ? "#065f46" : "#0f172a"}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {val}
                  </text>

                  {/* Index Badge */}
                  <g transform={`translate(${coord.x + 12}, ${coord.y - 10})`}>
                    <rect
                      x="-8"
                      y="-7"
                      width="16"
                      height="13"
                      rx="3"
                      fill="#f8fafc"
                      stroke={isRoot ? "#d97706" : "#cbd5e1"}
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="2.5"
                      textAnchor="middle"
                      fill={isRoot ? "#b45309" : "#64748b"}
                      fontSize="8"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {getDisplayIndex(idx)}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom Array Memory Strip View */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600">
            <span>Thanh Mảng Bộ Nhớ 1D: Array A[{indexingMode === "1-based" ? `1..${heap.length}` : `0..${heap.length - 1}`}]</span>
            <span className="text-amber-800 font-bold">Max Gốc: A[{getDisplayIndex(0)}] = {heap[0]}</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-2">
            {heap.map((val, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnimating = animatingIndices.includes(idx);
              const isRoot = idx === 0;

              return (
                <div
                  key={`cell-${idx}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`flex-1 min-w-[42px] max-w-[55px] p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border shadow-sm ${
                    isAnimating
                      ? "bg-emerald-100 border-emerald-500 text-emerald-950 scale-105"
                      : isHovered
                      ? "bg-sky-100 border-sky-400 text-sky-950 scale-105"
                      : isRoot
                      ? "bg-amber-100 border-amber-400 text-amber-950 font-bold"
                      : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                  }`}
                >
                  <span className="font-mono font-extrabold text-sm">{val}</span>
                  <span className="text-[10px] font-mono text-slate-500 mt-1">
                    [{getDisplayIndex(idx)}]
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Formula Callout & Action Log (Terminal Dark Box) */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono shadow-md">
          <div className="text-amber-300 font-semibold truncate">
            {getFormulaText(hoveredIdx)}
          </div>
          <div className="text-emerald-400 text-[11px] text-right flex-shrink-0 font-medium">
            &gt; {actionLog}
          </div>
        </div>
      </div>

      {/* 4 Golden Metric Badges */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm text-center space-y-1">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Lấy Max Tức Thì</span>
          <div className="text-lg font-extrabold text-amber-900 font-mono">FindMax: O(1)</div>
          <span className="text-[10px] text-slate-500">Nằm ngay tại A[1] / A[0]</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm text-center space-y-1">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Bộ Nhớ Con Trỏ</span>
          <div className="text-lg font-extrabold text-emerald-800 font-mono">0 Bytes Extra</div>
          <span className="text-[10px] text-slate-500">Lưu trên mảng phẳng</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-sky-200 shadow-sm text-center space-y-1">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Chèn &amp; Xóa</span>
          <div className="text-lg font-extrabold text-sky-800 font-mono">O(log n)</div>
          <span className="text-[10px] text-slate-500">h = ⌊log₂ n⌋ ngắn nhất</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-indigo-200 shadow-sm text-center space-y-1">
          <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Xây Dựng Đống</span>
          <div className="text-lg font-extrabold text-indigo-900 font-mono">BuildHeap: O(n)</div>
          <span className="text-[10px] text-slate-500">Bottom-up siêu tốc</span>
        </div>
      </div>

      {/* 4 Pillars Quick-Overview Tabs */}
      <div className="relative z-10 mt-6 space-y-4">
        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {tabsData.map((t) => {
            const isSel = activeTab === t.id;
            const Icon = t.icon;

            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSel
                    ? "bg-amber-500 border-amber-600 text-slate-950 shadow-sm scale-[1.02]"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isSel ? "text-amber-950" : "text-amber-700"}`}>
                    {t.badge}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isSel ? "text-slate-950" : "text-slate-400"}`} />
                </div>
                <div className={`text-xs font-bold font-sans line-clamp-1 ${isSel ? "text-slate-950 font-extrabold" : "text-slate-900"}`}>{t.title}</div>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Card */}
        <div className="p-5 rounded-2xl bg-white border border-amber-100 shadow-sm space-y-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h4 className="text-sm font-bold text-amber-950 font-sans">
              {tabsData[activeTab - 1].title}
            </h4>
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono bg-amber-50 text-amber-900 border border-amber-200">
              Trụ Cột {activeTab} / 4
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
            {tabsData[activeTab - 1].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
