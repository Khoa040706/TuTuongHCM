"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";

const steps = [
  {
    array: [5, 1, 4, 2, 8],
    comparing: [],
    swapping: [],
    locked: [],
    status: "Bắt đầu sắp xếp mảng [5, 1, 4, 2, 8].",
    stepLabel: "Khởi tạo"
  },
  // Lượt 1
  {
    array: [5, 1, 4, 2, 8],
    comparing: [0, 1],
    swapping: [],
    locked: [],
    status: "So sánh 5 và 1. Vì 5 > 1, cần hoán đổi vị trí.",
    stepLabel: "Lượt 1 - So sánh"
  },
  {
    array: [1, 5, 4, 2, 8],
    comparing: [0, 1],
    swapping: [0, 1],
    locked: [],
    status: "Hoán đổi 5 và 1 thành công.",
    stepLabel: "Lượt 1 - Hoán đổi"
  },
  {
    array: [1, 5, 4, 2, 8],
    comparing: [1, 2],
    swapping: [],
    locked: [],
    status: "So sánh 5 và 4. Vì 5 > 4, cần hoán đổi vị trí.",
    stepLabel: "Lượt 1 - So sánh"
  },
  {
    array: [1, 4, 5, 2, 8],
    comparing: [1, 2],
    swapping: [1, 2],
    locked: [],
    status: "Hoán đổi 5 và 4 thành công.",
    stepLabel: "Lượt 1 - Hoán đổi"
  },
  {
    array: [1, 4, 5, 2, 8],
    comparing: [2, 3],
    swapping: [],
    locked: [],
    status: "So sánh 5 và 2. Vì 5 > 2, cần hoán đổi vị trí.",
    stepLabel: "Lượt 1 - So sánh"
  },
  {
    array: [1, 4, 2, 5, 8],
    comparing: [2, 3],
    swapping: [2, 3],
    locked: [],
    status: "Hoán đổi 5 và 2 thành công.",
    stepLabel: "Lượt 1 - Hoán đổi"
  },
  {
    array: [1, 4, 2, 5, 8],
    comparing: [3, 4],
    swapping: [],
    locked: [],
    status: "So sánh 5 và 8. Vì 5 < 8, giữ nguyên vị trí.",
    stepLabel: "Lượt 1 - So sánh"
  },
  {
    array: [1, 4, 2, 5, 8],
    comparing: [],
    swapping: [],
    locked: [4],
    status: "Kết thúc Lượt duyệt 1: Số 8 (phần tử lớn nhất) đã được cố định ở vị trí cuối cùng.",
    stepLabel: "Lượt 1 - Cố định"
  },
  // Lượt 2
  {
    array: [1, 4, 2, 5, 8],
    comparing: [0, 1],
    swapping: [],
    locked: [4],
    status: "Lượt duyệt 2: So sánh 1 và 4. Vì 1 < 4, giữ nguyên vị trí.",
    stepLabel: "Lượt 2 - So sánh"
  },
  {
    array: [1, 4, 2, 5, 8],
    comparing: [1, 2],
    swapping: [],
    locked: [4],
    status: "So sánh 4 và 2. Vì 4 > 2, cần hoán đổi vị trí.",
    stepLabel: "Lượt 2 - So sánh"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [1, 2],
    swapping: [1, 2],
    locked: [4],
    status: "Hoán đổi 4 và 2 thành công.",
    stepLabel: "Lượt 2 - Hoán đổi"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [2, 3],
    swapping: [],
    locked: [4],
    status: "So sánh 4 và 5. Vì 4 < 5, giữ nguyên vị trí.",
    stepLabel: "Lượt 2 - So sánh"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [],
    swapping: [],
    locked: [3, 4],
    status: "Kết thúc Lượt duyệt 2: Số 5 đã được cố định ở vị trí kế cuối.",
    stepLabel: "Lượt 2 - Cố định"
  },
  // Lượt 3
  {
    array: [1, 2, 4, 5, 8],
    comparing: [0, 1],
    swapping: [],
    locked: [3, 4],
    status: "Lượt duyệt 3: So sánh 1 và 2. Vì 1 < 2, giữ nguyên vị trí.",
    stepLabel: "Lượt 3 - So sánh"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [1, 2],
    swapping: [],
    locked: [3, 4],
    status: "So sánh 2 và 4. Vì 2 < 4, giữ nguyên vị trí.",
    stepLabel: "Lượt 3 - So sánh"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [],
    swapping: [],
    locked: [2, 3, 4],
    status: "Kết thúc Lượt duyệt 3: Mảng đã được sắp xếp nhưng cần thêm Lượt duyệt 4 để xác nhận không còn hoán đổi.",
    stepLabel: "Lượt 3 - Cố định"
  },
  // Lượt 4
  {
    array: [1, 2, 4, 5, 8],
    comparing: [0, 1],
    swapping: [],
    locked: [2, 3, 4],
    status: "Lượt duyệt 4: So sánh 1 và 2. Giữ nguyên vị trí.",
    stepLabel: "Lượt 4 - So sánh"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [1, 2],
    swapping: [],
    locked: [2, 3, 4],
    status: "So sánh 2 và 4. Giữ nguyên vị trí.",
    stepLabel: "Lượt 4 - So sánh"
  },
  {
    array: [1, 2, 4, 5, 8],
    comparing: [],
    swapping: [],
    locked: [0, 1, 2, 3, 4],
    status: "Hoàn thành! Toàn bộ lượt duyệt không phát sinh hoán đổi. Thuật toán kết thúc.",
    stepLabel: "Hoàn thành"
  }
];

export default function BubbleSortVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

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
      }, 1500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setIsPlaying(false);
    if (currentStep < steps.length - 1) {
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

  const stepData = steps[currentStep];

  return (
    <div className="w-full premium-study-card p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col items-center my-6 relative overflow-hidden select-none">
      <div className="w-full flex justify-between items-center mb-6 z-10">
        <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
          {stepData.stepLabel}
        </span>
        <span className="text-xs text-stone-500 font-semibold">
          Bước {currentStep + 1} / {steps.length}
        </span>
      </div>

      {/* Visual Bars / Circles representation */}
      <div className="flex gap-3 md:gap-5 items-end justify-center h-44 mb-6 w-full max-w-md z-10">
        {stepData.array.map((val, idx) => {
          const isComparing = stepData.comparing.includes(idx);
          const isSwapping = stepData.swapping.includes(idx);
          const isLocked = stepData.locked.includes(idx);

          let bgClass = "bg-stone-100 border-stone-200 text-stone-700";
          let scaleClass = "scale-100";
          let borderEffect = "";

          if (isLocked) {
            bgClass = "bg-green-500/15 border-green-500 text-green-700 font-extrabold";
          } else if (isSwapping) {
            bgClass = "bg-red-500/15 border-red-500 text-red-700 font-extrabold animate-pulse";
            scaleClass = "scale-105";
          } else if (isComparing) {
            bgClass = "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--accent)] font-extrabold";
            scaleClass = "scale-105";
            borderEffect = "ring-2 ring-[var(--accent)]/20";
          }

          return (
            <div
              key={idx}
              className="flex flex-col items-center transition-all duration-300 w-12"
            >
              {/* Vertical Bar */}
              <div 
                style={{ height: `calc(${val} * 15px + 40px)` }}
                className={`w-full rounded-t-xl border flex items-center justify-center text-lg font-black transition-all duration-300 shadow-sm ${bgClass} ${scaleClass} ${borderEffect}`}
              >
                {val}
              </div>
              <span className="text-[10px] font-mono text-stone-400 mt-2 font-semibold">idx {idx}</span>
            </div>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="w-full bg-stone-50 border border-stone-150 rounded-xl p-4 text-center min-h-[68px] flex items-center justify-center mb-6 z-10">
        <p className="text-sm font-semibold text-stone-700 leading-relaxed font-sans">
          {stepData.status}
        </p>
      </div>

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
          disabled={currentStep === steps.length - 1}
          className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          title="Bước tiếp theo"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
