"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowDownUp,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Shuffle,
  Zap,
  Clock,
  ShieldCheck,
  HardDrive,
  Layers,
  CheckCircle2,
  Sliders,
  Flame,
  BarChart3,
  Award
} from "lucide-react";

export default function DsaSortingHeroBanner() {
  const defaultArray = [48, 15, 86, 24, 67, 32, 95, 12, 73, 54, 39, 61];
  const [array, setArray] = useState([...defaultArray]);
  const [activeIndices, setActiveIndices] = useState([]); // indices being compared / swapped
  const [sortedIndices, setSortedIndices] = useState([]);
  const [pivotIndex, setPivotIndex] = useState(null);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState("bubble");
  const [stats, setStats] = useState({ comparisons: 0, swaps: 0 });
  const [speed, setSpeed] = useState(120);

  const isSortingRef = useRef(false);
  isSortingRef.current = isSorting;

  const algorithms = {
    bubble: {
      name: "Bubble Sort",
      time: "O(n²)",
      space: "O(1)",
      stable: "Có (Stable)",
      inPlace: "Có (In-Place)",
      color: "text-amber-600 bg-amber-50 border-amber-300",
      desc: "So sánh cặp kề nhau và hoán đổi, đẩy phần tử lớn nhất nổi bọt về cuối mảng."
    },
    selection: {
      name: "Selection Sort",
      time: "O(n²)",
      space: "O(1)",
      stable: "Không (Unstable)",
      inPlace: "Có (In-Place)",
      color: "text-blue-600 bg-blue-50 border-blue-300",
      desc: "Tìm phần tử nhỏ nhất trong phần chưa sắp xếp và đổi chỗ về vị trí đầu tiên."
    },
    insertion: {
      name: "Insertion Sort",
      time: "O(n²) / O(n)",
      space: "O(1)",
      stable: "Có (Stable)",
      inPlace: "Có (In-Place)",
      color: "text-teal-600 bg-teal-50 border-teal-300",
      desc: "Lấy từng phần tử chèn vào đúng vị trí trong dãy con đã có thứ tự bên trái."
    },
    quick: {
      name: "Quick Sort",
      time: "O(n log n)",
      space: "O(log n)",
      stable: "Không (Unstable)",
      inPlace: "Có (In-Place)",
      color: "text-emerald-600 bg-emerald-50 border-emerald-300",
      desc: "Chọn Pivot, phân hoạch 2 bên (nhỏ hơn bên trái, lớn hơn bên phải), đệ quy 2 nửa."
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Shuffle
  const handleShuffle = () => {
    if (isSorting) return;
    const shuffled = [...defaultArray].sort(() => Math.random() - 0.5);
    setArray(shuffled);
    setActiveIndices([]);
    setSortedIndices([]);
    setPivotIndex(null);
    setStats({ comparisons: 0, swaps: 0 });
  };

  // Reset
  const handleReset = () => {
    setIsSorting(false);
    setArray([...defaultArray]);
    setActiveIndices([]);
    setSortedIndices([]);
    setPivotIndex(null);
    setStats({ comparisons: 0, swaps: 0 });
  };

  // Bubble Sort Simulator
  const runBubbleSort = async () => {
    let arr = [...array];
    let n = arr.length;
    let comps = 0;
    let swaps = 0;
    let sorted = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSortingRef.current) return;
        setActiveIndices([j, j + 1]);
        comps++;
        setStats({ comparisons: comps, swaps });
        await delay(speed);

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swaps++;
          setStats({ comparisons: comps, swaps });
          setArray([...arr]);
          await delay(speed);
        }
      }
      sorted.push(n - i - 1);
      setSortedIndices([...sorted]);
    }
    sorted.push(0);
    setSortedIndices([...sorted]);
    setActiveIndices([]);
    setIsSorting(false);
  };

  // Selection Sort Simulator
  const runSelectionSort = async () => {
    let arr = [...array];
    let n = arr.length;
    let comps = 0;
    let swaps = 0;
    let sorted = [];

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      setPivotIndex(minIdx);

      for (let j = i + 1; j < n; j++) {
        if (!isSortingRef.current) return;
        setActiveIndices([minIdx, j]);
        comps++;
        setStats({ comparisons: comps, swaps });
        await delay(speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
          setPivotIndex(minIdx);
        }
      }

      if (minIdx !== i) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        swaps++;
        setStats({ comparisons: comps, swaps });
        setArray([...arr]);
        await delay(speed);
      }
      sorted.push(i);
      setSortedIndices([...sorted]);
    }
    setPivotIndex(null);
    setActiveIndices([]);
    setIsSorting(false);
  };

  // Insertion Sort Simulator
  const runInsertionSort = async () => {
    let arr = [...array];
    let n = arr.length;
    let comps = 0;
    let swaps = 0;
    let sorted = [0];
    setSortedIndices([...sorted]);

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      setPivotIndex(i);

      while (j >= 0 && arr[j] > key) {
        if (!isSortingRef.current) return;
        setActiveIndices([j, j + 1]);
        comps++;
        swaps++;
        setStats({ comparisons: comps, swaps });
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await delay(speed);
        j = j - 1;
      }
      comps++;
      arr[j + 1] = key;
      setArray([...arr]);
      sorted.push(i);
      setSortedIndices([...sorted]);
      await delay(speed);
    }
    setPivotIndex(null);
    setActiveIndices([]);
    setIsSorting(false);
  };

  const handleStartSort = () => {
    setIsSorting(true);
    isSortingRef.current = true;
    setStats({ comparisons: 0, swaps: 0 });
    setSortedIndices([]);

    if (selectedAlgo === "bubble") runBubbleSort();
    else if (selectedAlgo === "selection") runSelectionSort();
    else if (selectedAlgo === "insertion") runInsertionSort();
    else runBubbleSort();
  };

  const handleStopSort = () => {
    setIsSorting(false);
    isSortingRef.current = false;
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm my-6 font-sans overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/40 via-emerald-100/30 to-indigo-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header Badge & Title */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
              CHƯƠNG VI • CẤU TRÚC DỮ LIỆU &amp; GIẢI THUẬT
            </span>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              BÀI 6: SORTING
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <ArrowDownUp className="w-7 h-7 md:w-9 md:h-9 text-indigo-600" />
            Sorting (Các Thuật Toán Sắp Xếp)
          </h2>

          <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Khảo sát toàn diện các thuật toán sắp xếp từ kinh điển <code>O(n²)</code> (Selection, Bubble, Insertion) đến tối ưu <code>O(n log n)</code> (Quick Sort, Merge Sort, Heap Sort) và các giải thuật không so sánh (Radix Sort).
          </p>
        </div>

        {/* 4 Pillars Mini Badges */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono self-start lg:self-auto">
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Time: <strong>O(n²) ➔ O(n log n)</strong></span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <HardDrive className="w-3.5 h-3.5 text-blue-600" />
            <span>Space: <strong>In-Place O(1)</strong></span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tính ổn định: <strong>Stable</strong></span>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            <span>Thích nghi: <strong>Adaptive</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive Sorting Sandbox */}
      <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-indigo-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-indigo-100 mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-mono font-bold text-slate-800 uppercase">
              Phòng thí nghiệm trực quan hóa sắp xếp (Live Sorting Sandbox)
            </span>
          </div>

          {/* Algorithm Selector Buttons */}
          <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200 flex-wrap">
            {Object.keys(algorithms).map((key) => (
              <button
                key={key}
                disabled={isSorting}
                onClick={() => {
                  setSelectedAlgo(key);
                  handleReset();
                }}
                className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer disabled:opacity-50 ${
                  selectedAlgo === key
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {algorithms[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Live Array Bars Visualization */}
        <div className="min-h-[170px] flex items-end justify-center gap-2 sm:gap-3 px-2 py-4 bg-slate-100/80 rounded-2xl border border-slate-200 shadow-inner mb-4">
          {array.map((val, idx) => {
            const isComparing = activeIndices.includes(idx);
            const isSorted = sortedIndices.includes(idx);
            const isPivot = pivotIndex === idx;

            let barColor = "bg-slate-400";
            if (isSorted) barColor = "bg-emerald-500 shadow-emerald-500/30 ring-2 ring-emerald-300";
            else if (isPivot) barColor = "bg-purple-600 shadow-purple-600/30 ring-2 ring-purple-300";
            else if (isComparing) barColor = "bg-amber-400 shadow-amber-400/30 ring-2 ring-amber-300 animate-pulse";

            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 flex-1 max-w-[42px]">
                <span className="text-[10px] font-mono font-bold text-slate-700">{val}</span>
                <div
                  style={{ height: `${val * 1.3}px` }}
                  className={`w-full rounded-t-lg transition-all duration-150 ${barColor} shadow-md`}
                />
                <span className="text-[9px] font-mono text-slate-500 font-semibold">[{idx}]</span>
              </div>
            );
          })}
        </div>

        {/* Controls & Realtime Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {!isSorting ? (
              <button
                onClick={handleStartSort}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Bắt đầu Sắp xếp
              </button>
            ) : (
              <button
                onClick={handleStopSort}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Pause className="w-3.5 h-3.5 fill-current" /> Tạm dừng
              </button>
            )}

            <button
              onClick={handleShuffle}
              disabled={isSorting}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-50 text-slate-700 font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Shuffle className="w-3.5 h-3.5" /> Trộn mảng
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer shadow-xs"
              title="Đặt lại ban đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-600">
            <div className="bg-white px-3 py-1.5 rounded-xl border border-indigo-100 shadow-xs">
              So sánh: <strong className="text-amber-800 font-bold">{stats.comparisons}</strong>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-xl border border-indigo-100 shadow-xs">
              Hoán đổi: <strong className="text-emerald-800 font-bold">{stats.swaps}</strong>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-xl border border-indigo-100 shadow-xs hidden sm:block">
              Độ phức tạp: <strong className="text-indigo-700 font-bold">{algorithms[selectedAlgo].time}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards: The 4 Core Themes of Lesson 6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
              NHÓM O(n²)
            </span>
            <span className="text-xs font-mono font-bold text-amber-700">Cơ bản</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">Quadratic Sorts</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Selection Sort, Bubble Sort, Insertion Sort — dễ hiểu, dễ cài đặt, tối ưu cho tập dữ liệu nhỏ.
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded">
              NHÓM O(n log n)
            </span>
            <span className="text-xs font-mono font-bold text-emerald-700">Tối ưu</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">Divide &amp; Conquer</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Merge Sort, Quick Sort, Heap Sort — kỹ thuật chia để trị đạt ngưỡng tối ưu lý thuyết cho sắp xếp so sánh.
          </p>
        </div>

        <div className="bg-purple-50/70 border border-purple-200 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded">
              NHÓM O(n)
            </span>
            <span className="text-xs font-mono font-bold text-purple-700">Không so sánh</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">Non-Comparison</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Radix Sort, Counting Sort, Bucket Sort — vượt qua giới hạn $O(n \log n)$ bằng cách xử lý theo từng chữ số.
          </p>
        </div>

        <div className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold bg-indigo-200/80 text-indigo-900 px-2 py-0.5 rounded">
              TIÊU CHÍ
            </span>
            <span className="text-xs font-mono font-bold text-indigo-700">Đánh giá</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">Stability &amp; Space</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Đánh giá tính ổn định (Stable) bảo toàn thứ tự ban đầu và bộ nhớ phụ (In-Place vs Out-of-Place).
          </p>
        </div>
      </div>
    </div>
  );
}
