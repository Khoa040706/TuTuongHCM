"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Plus,
  RotateCcw,
  Play,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
  ArrowDown
} from "lucide-react";

export default function CensusArrayShiftSimulator() {
  const initialSorted = [4, 5, 6, 7, 15, 23, 50, 71, null];
  const [array, setArray] = useState([...initialSorted]);
  const [insertVal, setInsertVal] = useState(20);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shiftedIndices, setShiftedIndices] = useState([]);
  const [targetSlot, setTargetSlot] = useState(null);
  const [explanation, setExplanation] = useState("Nhấn 'Chạy mô phỏng chèn tuổi 20' để quan sát từng bước dời mảng O(n).");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleReset = () => {
    setArray([...initialSorted]);
    setCurrentStep(0);
    setIsAnimating(false);
    setShiftedIndices([]);
    setTargetSlot(null);
    setExplanation("Đã đặt lại trạng thái ban đầu. Hãy chọn giá trị và bấm chạy mô phỏng.");
  };

  const runShiftSimulation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setArray([...initialSorted]);
    setShiftedIndices([]);

    const val = insertVal;
    // Step 1: Binary Search find insertion slot
    setCurrentStep(1);
    setExplanation(`Bước 1: Dùng Binary Search tìm vị trí chèn cho tuổi ${val}. Vị trí tìm được là Index 5 (giữa 15 và 23).`);
    setTargetSlot(5);
    await delay(1200);

    // Step 2: Shift 71 to index 8
    setCurrentStep(2);
    setExplanation("Bước 2: Bắt đầu dời mảng từ phải qua trái. Dời 71 từ Index 7 sang Index 8...");
    setShiftedIndices([7, 8]);
    let arr = [4, 5, 6, 7, 15, 23, 50, null, 71];
    setArray([...arr]);
    await delay(900);

    // Step 3: Shift 50 to index 7
    setCurrentStep(3);
    setExplanation("Bước 3: Dời 50 từ Index 6 sang Index 7...");
    setShiftedIndices([6, 7]);
    arr = [4, 5, 6, 7, 15, 23, null, 50, 71];
    setArray([...arr]);
    await delay(900);

    // Step 4: Shift 23 to index 6
    setCurrentStep(4);
    setExplanation("Bước 4: Dời 23 từ Index 5 sang Index 6 để giải phóng Index 5...");
    setShiftedIndices([5, 6]);
    arr = [4, 5, 6, 7, 15, null, 23, 50, 71];
    setArray([...arr]);
    await delay(900);

    // Step 5: Place 20 in slot 5
    setCurrentStep(5);
    setExplanation(`Bước 5: Vị trí Index 5 đã trống. Đặt giá trị ${val} vào Index 5. Mảng hoàn tất việc chèn và vẫn giữ nguyên tính thứ tự tăng dần!`);
    setShiftedIndices([]);
    arr = [4, 5, 6, 7, 15, val, 23, 50, 71];
    setArray([...arr]);
    await delay(1000);

    setIsAnimating(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-amber-50/70 via-white to-rose-50/50 rounded-2xl border border-amber-200/90 shadow-sm p-5 md:p-7 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            VẤN ĐỀ NGHẼN CỔ CHAI • ARRAY SHIFTING
          </div>
          <h3 className="text-lg md:text-xl font-extrabold text-slate-900">
            Mô Phỏng Chi Phí Dời Mảng (Shift) Khi Chèn Vào Sorted Array
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tại sao thao tác <code>Insert</code> trên Mảng đã sắp xếp lại chậm O(n)? Quan sát từng phần tử bị dời sang phải.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            disabled={isAnimating}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Đặt lại
          </button>
          <button
            onClick={runShiftSimulation}
            disabled={isAnimating}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
          >
            <Play className="w-4 h-4" />
            Chạy Mô Phỏng Chèn Tuổi 20
          </button>
        </div>
      </div>

      {/* Step Explanation Banner */}
      <div className="my-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-medium text-amber-950 flex items-start gap-2.5">
        <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <span className="leading-relaxed">{explanation}</span>
      </div>

      {/* Visual Animated Array */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-inner my-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
          <span>Sorted Array A (Kích thước n = 8, sức chứa 9)</span>
          <span>Target Slot: {targetSlot !== null ? `Index ${targetSlot}` : "Chưa chọn"}</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-3">
          {array.map((val, idx) => {
            const isTarget = targetSlot === idx && val === null;
            const isShifted = shiftedIndices.includes(idx);
            const isJustInserted = currentStep === 5 && idx === targetSlot;

            return (
              <div key={idx} className="flex-1 min-w-[48px] flex flex-col items-center">
                <div
                  className={`w-full h-14 rounded-xl flex flex-col items-center justify-center font-mono font-extrabold text-sm border transition-all duration-300 ${
                    isJustInserted
                      ? "bg-emerald-500 text-white border-emerald-600 scale-110 shadow-lg ring-4 ring-emerald-200"
                      : isTarget
                      ? "bg-amber-100 text-amber-800 border-dashed border-2 border-amber-400 animate-pulse"
                      : isShifted
                      ? "bg-rose-100 text-rose-800 border-rose-300 translate-x-1 shadow-sm"
                      : val !== null
                      ? "bg-slate-50 text-slate-800 border-slate-200"
                      : "bg-slate-100/50 text-slate-300 border-dashed border-slate-200"
                  }`}
                >
                  <span>{val !== null ? val : "Ø"}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 mt-1.5">[{idx}]</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Insight Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs">
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
          <strong className="text-rose-900 font-bold block mb-1">Hạn chế nghiêm trọng của Sorted Array:</strong>
          Mặc dù tìm vị trí chèn chỉ tốn O(log n), nhưng để chèn được phần tử mới, ta phải dịch chuyển trung bình n/2 phần tử (và tối đa n phần tử nếu chèn vào đầu) &rArr; Tổng thời gian là <strong className="text-rose-800 font-mono font-bold">O(n)</strong>.
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
          <strong className="text-emerald-900 font-bold block mb-1">So sánh với Unsorted Array:</strong>
          Trên Mảng chưa sắp xếp, phần tử mới được thêm trực tiếp vào đuôi mảng (<code className="font-mono text-emerald-800">A[n++] = age</code>) chỉ tốn đúng <strong className="text-emerald-800 font-mono font-bold">O(1)</strong> vì không cần dời bất kỳ phần tử nào.
        </div>
      </div>
    </div>
  );
}
