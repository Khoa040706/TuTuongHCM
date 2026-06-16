"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";

// Mode 1: Lomuto Partition step-by-step from textbook
const partitionSteps = [
  {
    array: [7, 2, 1, 6, 8, 5, 3, 4],
    i: -1,
    j: -1,
    comparing: [],
    swapping: [],
    pivotIdx: 7,
    status: "Khởi tạo phân hoạch Lomuto cho mảng [7, 2, 1, 6, 8, 5, 3, 4]. Chốt ở vị trí cuối cùng A[7] = 4. Thiết lập biến chỉ số i = -1.",
    stepLabel: "Khởi tạo",
    ajText: "-",
    condText: "-",
    iText: "i = -1",
    actionText: "Không thực hiện hoán đổi"
  },
  {
    array: [7, 2, 1, 6, 8, 5, 3, 4],
    i: -1,
    j: 0,
    comparing: [0, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 0: A[0] = 7. Kiểm tra điều kiện (7 ≤ 4). Kết quả: Sai (7 > 4). Chỉ số i giữ nguyên là -1.",
    stepLabel: "Quét j = 0",
    ajText: "7",
    condText: "Sai (7 > 4)",
    iText: "i = -1",
    actionText: "Không có biến đổi"
  },
  {
    array: [7, 2, 1, 6, 8, 5, 3, 4],
    i: 0,
    j: 1,
    comparing: [1, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 1: A[1] = 2. Kiểm tra điều kiện (2 ≤ 4). Kết quả: Đúng. Tăng i lên 0 (i = 0), chuẩn bị hoán đổi A[0] và A[1].",
    stepLabel: "Quét j = 1",
    ajText: "2",
    condText: "Đúng (2 ≤ 4)",
    iText: "i = 0",
    actionText: "Tăng i, chuẩn bị hoán đổi A[0] ↔ A[1]"
  },
  {
    array: [2, 7, 1, 6, 8, 5, 3, 4],
    i: 0,
    j: 1,
    comparing: [],
    swapping: [0, 1],
    pivotIdx: 7,
    status: "Hoán đổi phần tử A[0] (7) và A[1] (2) thành công. Phần tử nhỏ hơn chốt được gom về bên trái.",
    stepLabel: "Hoán đổi j = 1",
    ajText: "2",
    condText: "Đúng (2 ≤ 4)",
    iText: "i = 0",
    actionText: "Đã hoán đổi A[0] ↔ A[1]"
  },
  {
    array: [2, 7, 1, 6, 8, 5, 3, 4],
    i: 1,
    j: 2,
    comparing: [2, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 2: A[2] = 1. Kiểm tra điều kiện (1 ≤ 4). Kết quả: Đúng. Tăng i lên 1 (i = 1), chuẩn bị hoán đổi A[1] và A[2].",
    stepLabel: "Quét j = 2",
    ajText: "1",
    condText: "Đúng (1 ≤ 4)",
    iText: "i = 1",
    actionText: "Tăng i, chuẩn bị hoán đổi A[1] ↔ A[2]"
  },
  {
    array: [2, 1, 7, 6, 8, 5, 3, 4],
    i: 1,
    j: 2,
    comparing: [],
    swapping: [1, 2],
    pivotIdx: 7,
    status: "Hoán đổi phần tử A[1] (7) và A[2] (1) thành công. Các phần tử ≤ chốt tiếp tục dịch chuyển về phía đầu mảng.",
    stepLabel: "Hoán đổi j = 2",
    ajText: "1",
    condText: "Đúng (1 ≤ 4)",
    iText: "i = 1",
    actionText: "Đã hoán đổi A[1] ↔ A[2]"
  },
  {
    array: [2, 1, 7, 6, 8, 5, 3, 4],
    i: 1,
    j: 3,
    comparing: [3, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 3: A[3] = 6. Kiểm tra điều kiện (6 ≤ 4). Kết quả: Sai (6 > 4). Chỉ số i giữ nguyên là 1.",
    stepLabel: "Quét j = 3",
    ajText: "6",
    condText: "Sai (6 > 4)",
    iText: "i = 1",
    actionText: "Không có biến đổi"
  },
  {
    array: [2, 1, 7, 6, 8, 5, 3, 4],
    i: 1,
    j: 4,
    comparing: [4, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 4: A[4] = 8. Kiểm tra điều kiện (8 ≤ 4). Kết quả: Sai (8 > 4). Chỉ số i giữ nguyên là 1.",
    stepLabel: "Quét j = 4",
    ajText: "8",
    condText: "Sai (8 > 4)",
    iText: "i = 1",
    actionText: "Không có biến đổi"
  },
  {
    array: [2, 1, 7, 6, 8, 5, 3, 4],
    i: 1,
    j: 5,
    comparing: [5, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 5: A[5] = 5. Kiểm tra điều kiện (5 ≤ 4). Kết quả: Sai (5 > 4). Chỉ số i giữ nguyên là 1.",
    stepLabel: "Quét j = 5",
    ajText: "5",
    condText: "Sai (5 > 4)",
    iText: "i = 1",
    actionText: "Không có biến đổi"
  },
  {
    array: [2, 1, 7, 6, 8, 5, 3, 4],
    i: 2,
    j: 6,
    comparing: [6, 7],
    swapping: [],
    pivotIdx: 7,
    status: "Xét j = 6: A[6] = 3. Kiểm tra điều kiện (3 ≤ 4). Kết quả: Đúng. Tăng i lên 2 (i = 2), chuẩn bị hoán đổi A[2] và A[6].",
    stepLabel: "Quét j = 6",
    ajText: "3",
    condText: "Đúng (3 ≤ 4)",
    iText: "i = 2",
    actionText: "Tăng i, chuẩn bị hoán đổi A[2] ↔ A[6]"
  },
  {
    array: [2, 1, 3, 6, 8, 5, 7, 4],
    i: 2,
    j: 6,
    comparing: [],
    swapping: [2, 6],
    pivotIdx: 7,
    status: "Hoán đổi phần tử A[2] (7) và A[6] (3) thành công. Phần tử 3 đã được đưa về bên trái phân đoạn lớn hơn chốt.",
    stepLabel: "Hoán đổi j = 6",
    ajText: "3",
    condText: "Đúng (3 ≤ 4)",
    iText: "i = 2",
    actionText: "Đã hoán đổi A[2] ↔ A[6]"
  },
  {
    array: [2, 1, 3, 6, 8, 5, 7, 4],
    i: 2,
    j: -1,
    comparing: [],
    swapping: [3, 7],
    pivotIdx: 7,
    status: "Đã duyệt hết mảng con (từ j = 0 đến hi - 1). Lúc này cần đưa phần tử chốt về đúng vị trí bằng cách hoán đổi A[i + 1] (ở đây là A[3]) với A[hi] (A[7]).",
    stepLabel: "Định vị chốt",
    ajText: "-",
    condText: "Đặt chốt về vị trí",
    iText: "i = 2",
    actionText: "Hoán đổi A[i + 1] ↔ A[hi]"
  },
  {
    array: [2, 1, 3, 4, 8, 5, 7, 6],
    i: 2,
    j: -1,
    comparing: [],
    swapping: [],
    pivotIdx: 3,
    status: "Hoán đổi A[3] (6) và A[7] (4) thành công. Phần tử chốt (4) đã nằm ở đúng vị trí chỉ số i + 1 = 3. Phân hoạch Lomuto hoàn tất! Mảng đã phân rã thành hai nửa xung quanh chốt 4.",
    stepLabel: "Hoàn tất",
    ajText: "-",
    condText: "Đặt chốt về vị trí",
    iText: "i = 2",
    actionText: "Đã hoán đổi A[3] ↔ A[7]"
  }
];

// Mode 2: Full Quick Sort process (complete recursive sorting)
const fullSortSteps = [
  {
    array: [7, 2, 1, 6, 8, 5, 3, 4],
    activeRange: [0, 7],
    pivotIdx: 7,
    locked: [],
    status: "Bắt đầu Quick Sort trên toàn bộ mảng [7, 2, 1, 6, 8, 5, 3, 4] (chỉ số 0 đến 7). Chọn chốt cuối cùng A[7] = 4.",
    stepLabel: "Khởi tạo"
  },
  {
    array: [2, 1, 3, 4, 8, 5, 7, 6],
    activeRange: [0, 7],
    pivotIdx: 3,
    locked: [3],
    status: "Hoàn tất phân hoạch lần 1. Chốt 4 được định vị chính xác ở index 3 và được Cố định (Sorted). Bây giờ đệ quy hai bên.",
    stepLabel: "Cố định chốt 4"
  },
  {
    array: [2, 1, 3, 4, 8, 5, 7, 6],
    activeRange: [0, 2],
    pivotIdx: 2,
    locked: [3],
    status: "Gọi đệ quy quickSort đoạn bên trái [2, 1, 3] (index 0 đến 2). Chọn chốt cuối cùng A[2] = 3.",
    stepLabel: "Đệ quy đoạn Trái"
  },
  {
    array: [2, 1, 3, 4, 8, 5, 7, 6],
    activeRange: [0, 2],
    pivotIdx: 2,
    locked: [2, 3],
    status: "Phân hoạch đoạn [2, 1, 3] quanh chốt 3 hoàn tất. Số 3 nằm đúng vị trí index 2 và được cố định.",
    stepLabel: "Cố định chốt 3"
  },
  {
    array: [2, 1, 3, 4, 8, 5, 7, 6],
    activeRange: [0, 1],
    pivotIdx: 1,
    locked: [2, 3],
    status: "Đệ quy tiếp tục đoạn bên trái [2, 1] (index 0 đến 1). Chọn chốt cuối cùng A[1] = 1.",
    stepLabel: "Đệ quy đoạn Trái"
  },
  {
    array: [1, 2, 3, 4, 8, 5, 7, 6],
    activeRange: [0, 1],
    pivotIdx: 0,
    locked: [0, 2, 3],
    status: "Phân hoạch đoạn [2, 1] quanh chốt 1. Hoán đổi 2 và 1. Số 1 được định vị đúng ở index 0 và cố định.",
    stepLabel: "Cố định chốt 1"
  },
  {
    array: [1, 2, 3, 4, 8, 5, 7, 6],
    activeRange: [1, 1],
    pivotIdx: 1,
    locked: [0, 1, 2, 3],
    status: "Đoạn bên phải chốt 1 chỉ còn 1 phần tử [2] (index 1). Mặc định đã sắp xếp và được cố định. Phân nửa trái mảng ban đầu đã được sắp xếp hoàn toàn!",
    stepLabel: "Hoàn tất nửa Trái"
  },
  {
    array: [1, 2, 3, 4, 8, 5, 7, 6],
    activeRange: [4, 7],
    pivotIdx: 7,
    locked: [0, 1, 2, 3],
    status: "Quay về phân đoạn bên phải chốt 4 ban đầu là [8, 5, 7, 6] (index 4 đến 7). Gọi đệ quy, chọn chốt cuối cùng A[7] = 6.",
    stepLabel: "Đệ quy đoạn Phải"
  },
  {
    array: [1, 2, 3, 4, 5, 8, 7, 6],
    activeRange: [4, 7],
    pivotIdx: 7,
    locked: [0, 1, 2, 3],
    status: "Phân hoạch [8, 5, 7, 6] quanh chốt 6: Quét và hoán đổi 8 và 5 vì 5 <= 6. Mảng tạm thời thành [1, 2, 3, 4, 5, 8, 7, 6].",
    stepLabel: "Quét phân đoạn"
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8],
    activeRange: [4, 7],
    pivotIdx: 5,
    locked: [0, 1, 2, 3, 5],
    status: "Hoán đổi chốt 6 với 8. Chốt 6 nằm đúng vị trí chỉ số 5 của nó và được cố định.",
    stepLabel: "Cố định chốt 6"
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8],
    activeRange: [4, 4],
    pivotIdx: 4,
    locked: [0, 1, 2, 3, 4, 5],
    status: "Đoạn bên trái chốt 6 chỉ có 1 phần tử [5] (chỉ số 4). Mặc định đã sắp xếp xong và cố định.",
    stepLabel: "Cố định số 5"
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8],
    activeRange: [6, 7],
    pivotIdx: 7,
    locked: [0, 1, 2, 3, 4, 5],
    status: "Gọi đệ quy đoạn bên phải chốt 6 là [7, 8] (chỉ số 6 đến 7). Chọn chốt cuối cùng A[7] = 8.",
    stepLabel: "Đệ quy đoạn cuối"
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8],
    activeRange: [6, 7],
    pivotIdx: 7,
    locked: [0, 1, 2, 3, 4, 5, 7],
    status: "Phân hoạch đoạn [7, 8] quanh chốt 8. Số 7 nhỏ hơn 8 nên giữ nguyên. Số 8 cố định ở chỉ số 7.",
    stepLabel: "Cố định chốt 8"
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8],
    activeRange: [6, 6],
    pivotIdx: 6,
    locked: [0, 1, 2, 3, 4, 5, 6, 7],
    status: "Đoạn bên trái chốt 8 chỉ còn 1 phần tử [7] (chỉ số 6). Cố định nốt phần tử cuối cùng. Hoàn tất toàn bộ giải thuật sắp xếp Quick Sort!",
    stepLabel: "Hoàn tất sắp xếp"
  }
];

export default function QuickSortVisualizer({ mode: initialMode = "partition" }) {
  const [mode, setMode] = useState(initialMode); // "partition" or "full"
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [initialMode]);
  const timerRef = useRef(null);

  const stepsList = mode === "partition" ? partitionSteps : fullSortSteps;

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= stepsList.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, stepsList]);

  const handleNext = () => {
    setIsPlaying(false);
    if (currentStep < stepsList.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setIsPlaying(false);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const stepData = stepsList[currentStep];

  return (
    <div className="w-full premium-study-card p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col items-center my-6 relative overflow-hidden select-none">
      {/* Header & Mode Label */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 z-10 border-b border-stone-150 pb-4">
        <div className="flex gap-2 items-center w-full sm:w-auto">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500 border-l-3 border-[var(--accent)] pl-2">
            {mode === "partition" ? "Mô phỏng Phân hoạch Lomuto" : "Mô phỏng Sắp xếp Toàn bộ (Quick Sort)"}
          </span>
        </div>
        
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
            {stepData.stepLabel}
          </span>
          <span className="text-xs text-stone-500 font-semibold">
            Bước {currentStep + 1} / {stepsList.length}
          </span>
        </div>
      </div>

      {/* Visual Bars & Pointers */}
      <div className="w-full max-w-lg mb-8 z-10 flex flex-col items-center">
        {/* Pointers Row (Only in Partition Mode) */}
        <div className="flex gap-2.5 md:gap-4 justify-center w-full mb-2 h-8 relative select-none">
          {mode === "partition" && stepData.array.map((val, idx) => {
            const isJ = stepData.j === idx;
            const isI = stepData.i === idx;

            return (
              <div key={idx} className="w-10 md:w-12 flex flex-col items-center relative justify-end">
                {isJ && (
                  <span className="absolute bottom-0 text-[11px] font-black text-blue-600 bg-blue-100/80 px-1.5 py-0.5 rounded border border-blue-300 animate-bounce">
                    j
                  </span>
                )}
                {isI && (
                  <span className="absolute bottom-4 text-[11px] font-black text-emerald-600 bg-emerald-100/80 px-1.5 py-0.5 rounded border border-emerald-300">
                    i
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Array Bars */}
        <div className="flex gap-2.5 md:gap-4 items-end justify-center h-44 w-full">
          {stepData.array.map((val, idx) => {
            let isComparing = false;
            let isSwapping = false;
            let isPivot = false;
            let isSortedLeft = false;
            let isSortedRight = false;
            let isActive = true;

            if (mode === "partition") {
              isComparing = stepData.comparing.includes(idx);
              isSwapping = stepData.swapping.includes(idx);
              isPivot = idx === stepData.pivotIdx;
              isSortedLeft = currentStep === 12 && idx < 3;
              isSortedRight = currentStep === 12 && idx > 3;
            } else {
              // Full mode highlights
              isPivot = idx === stepData.pivotIdx;
              isSwapping = stepData.locked.includes(idx);
              
              // Dim elements outside activeRange
              const [lo, hi] = stepData.activeRange;
              isActive = idx >= lo && idx <= hi;
            }

            let bgClass = "bg-stone-100 border-stone-250 text-stone-700";
            let scaleClass = "scale-100";
            let borderEffect = "";
            let tagText = "";

            if (!isActive) {
              bgClass = "bg-stone-50 border-stone-150 text-stone-400 opacity-35";
            } else if (isPivot && !isSwapping) {
              bgClass = "bg-amber-500/15 border-amber-500 text-amber-800 font-black";
              borderEffect = "ring-2 ring-amber-500/20";
              tagText = "Pivot";
            } else if (isSwapping) {
              bgClass = "bg-emerald-500/15 border-emerald-500 text-emerald-800 font-black";
              borderEffect = "ring-2 ring-emerald-500/20 animate-pulse";
              tagText = "Sorted";
            } else if (isComparing) {
              bgClass = "bg-blue-500/15 border-blue-500 text-blue-700 font-extrabold";
              scaleClass = "scale-105";
              borderEffect = "ring-2 ring-blue-500/20";
            } else if (isSortedLeft) {
              bgClass = "bg-emerald-500/10 border-emerald-400 text-emerald-800 font-medium";
            } else if (isSortedRight) {
              bgClass = "bg-indigo-500/10 border-indigo-400 text-indigo-800 font-medium";
            }

            return (
              <div
                key={idx}
                className="flex flex-col items-center transition-all duration-300 w-10 md:w-12"
              >
                {/* Bar */}
                <div
                  style={{ height: `calc(${val} * 15px + 40px)` }}
                  className={`w-full rounded-t-xl border flex flex-col items-center justify-center text-base md:text-lg font-black transition-all duration-300 shadow-sm relative ${bgClass} ${scaleClass} ${borderEffect}`}
                >
                  {tagText && (
                    <span className={`absolute -top-5 text-[8px] md:text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded shadow-sm border ${
                      tagText === "Pivot" 
                        ? "text-amber-700 bg-amber-50 border-amber-300/55" 
                        : "text-emerald-700 bg-emerald-50 border-emerald-300/55"
                    }`}>
                      {tagText}
                    </span>
                  )}
                  {val}
                </div>
                <span className="text-[10px] font-mono text-stone-400 mt-2 font-semibold">
                  A[{idx}]
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Textbook dry-run row / Full status panel */}
      {mode === "partition" ? (
        <div className="w-full max-w-lg bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6 z-10 font-sans shadow-inner">
          <h4 className="text-xs font-bold text-stone-500 uppercase mb-3 tracking-wider">
            Trạng thái biến & Điều kiện
          </h4>
          <div className="grid grid-cols-4 gap-3 text-xs text-stone-700 border-b border-stone-200/60 pb-3 mb-3">
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Cột A[j]</span>
              <span className="font-mono font-bold text-stone-800 text-sm">{stepData.ajText}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Điều kiện (A[j] ≤ 4)</span>
              <span
                className={`font-semibold text-sm ${
                  stepData.condText.startsWith("Đúng")
                    ? "text-emerald-600"
                    : stepData.condText.startsWith("Sai")
                    ? "text-red-500"
                    : "text-stone-800"
                }`}
              >
                {stepData.condText}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Chỉ số nhớ (i)</span>
              <span className="font-mono font-bold text-stone-850 text-sm">{stepData.iText}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Hành động</span>
              <span className="font-semibold text-stone-800 leading-snug">{stepData.actionText}</span>
            </div>
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block mb-1">Diễn giải</span>
            <p className="text-xs md:text-sm font-semibold text-stone-600 leading-relaxed">
              {stepData.status}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6 z-10 font-sans shadow-inner">
          <h4 className="text-xs font-bold text-stone-500 uppercase mb-3 tracking-wider">
            Phạm vi đệ quy & Cố định chốt
          </h4>
          <div className="grid grid-cols-3 gap-3 text-xs text-stone-700 border-b border-stone-200/60 pb-3 mb-3">
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Đoạn đang xét (lo ↔ hi)</span>
              <span className="font-semibold text-stone-800 text-sm">
                A[{stepData.activeRange[0]} ... {stepData.activeRange[1]}]
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Chốt hiện tại</span>
              <span className="font-bold text-amber-700 text-sm">
                A[{stepData.pivotIdx}] = {stepData.array[stepData.pivotIdx]}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-semibold mb-1">Đã cố định (Sorted)</span>
              <span className="font-bold text-emerald-700 text-sm">
                {stepData.locked.length > 0 
                  ? stepData.locked.map(idx => stepData.array[idx]).join(", ") 
                  : "Chưa có"}
              </span>
            </div>
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block mb-1">Trạng thái giải thuật</span>
            <p className="text-xs md:text-sm font-semibold text-stone-600 leading-relaxed">
              {stepData.status}
            </p>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex items-center gap-3 z-10">
        <button
          onClick={handleReset}
          className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors cursor-pointer"
          title="Đặt lại từ đầu"
        >
          <RotateCcw size={16} />
        </button>

        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          title="Bước trước đó"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[var(--accent)]/15 cursor-pointer flex items-center gap-2 font-bold text-sm"
        >
          {isPlaying ? (
            <>
              <Pause size={16} fill="white" /> Tạm dừng
            </>
          ) : (
            <>
              <Play size={16} fill="white" /> Tự động chạy
            </>
          )}
        </button>

        <button
          onClick={handleNext}
          disabled={currentStep === stepsList.length - 1}
          className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          title="Bước tiếp theo"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
