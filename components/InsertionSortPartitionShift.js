"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Zap,
  HardDrive,
  Cpu,
  RotateCcw
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function InsertionSortPartitionShift() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 0,
      i: 0,
      s1: [40],
      s2: [13, 20, 8],
      next: null,
      desc: "Bắt đầu với 1 lá bài đầu tiên a[0]=40 trên tay ➔ Phân vùng S1 đã sắp xếp gồm [40].",
      shifts: 0
    },
    {
      step: 1,
      i: 1,
      s1: [13, 40],
      s2: [20, 8],
      next: 13,
      desc: "Xét i=1 (next=13): 40 > 13 ➔ Dịch 40 sang phải, chèn 13 vào vị trí đầu ➔ S1 = [13, 40].",
      shifts: 1
    },
    {
      step: 2,
      i: 2,
      s1: [13, 20, 40],
      s2: [8],
      next: 20,
      desc: "Xét i=2 (next=20): 40 > 20 ➔ Dịch 40 sang phải, chèn 20 vào giữa ➔ S1 = [13, 20, 40].",
      shifts: 1
    },
    {
      step: 3,
      i: 3,
      s1: [8, 13, 20, 40],
      s2: [],
      next: 8,
      desc: "Xét i=3 (next=8): 40 > 8, 20 > 8, 13 > 8 ➔ Dịch cả 40, 20, 13 sang phải, chèn 8 vào đầu ➔ S1 = [8, 13, 20, 40] (Hoàn thành!).",
      shifts: 3
    }
  ];

  const current = steps[activeStep];

  const insertionCode = `public static void insertionSort(int[] a) {
    for (int i = 1; i < a.length; i++) {
        int next = a[i]; // a[i] là phần tử tiếp theo cần chèn
        int j;
        
        // Quét ngược về đầu để tìm vị trí chèn và dịch các phần tử lớn hơn
        for (j = i - 1; j >= 0 && a[j] > next; j--) {
            a[j+1] = a[j]; // Dịch phần tử sang phải 1 vị trí
        }
        
        // Chèn giá trị next vào đúng khoảng trống sau vị trí j
        a[j+1] = next;
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 3 — Phân Tích Chuyên Sâu
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Insertion Sort: Ẩn Dụ Xếp Bài Poker, Phân Vùng S₁/S₂ &amp; Cơ Chế Dịch Shift
          </h3>
          <p className="text-xs text-slate-500">
            Tìm hiểu cơ chế dịch chuyển mảng (Shift) thay vì hoán đổi (Swap), giúp tối ưu hóa số phép ghi bộ nhớ
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          Stable &amp; Adaptive O(n)
        </div>
      </div>

      {/* Poker Cards Metaphor & Step Simulation */}
      <div className="bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/50 text-slate-800 rounded-3xl p-5 md:p-6 border border-teal-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-teal-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-950 uppercase block">Ẩn dụ xếp bài trên tay (Giáo trình: 40 13 20 8):</span>
            <span className="text-xs text-emerald-800 font-mono font-semibold">
              Vùng S₁ (Đã xếp) vs Vùng S₂ (Chưa xử lý)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Bước trước
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(3, prev + 1))}
              disabled={activeStep === 3}
              className="px-3.5 py-1.5 rounded-xl bg-teal-600 text-xs font-mono font-bold text-white hover:bg-teal-700 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Bước tiếp ({activeStep + 1}/4)
            </button>
            <button
              onClick={() => setActiveStep(0)}
              className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer shadow-xs"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Playing Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-3">
          {/* S1: Sorted Cards on Hand */}
          <div className="md:col-span-7 bg-emerald-50/90 border-2 border-emerald-300 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200 text-xs font-mono mb-3">
              <span className="text-emerald-950 font-bold uppercase">Vùng S₁: Bài trên tay (Đã sắp xếp)</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                Kích thước: {current.s1.length} lá
              </span>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap min-h-[70px]">
              {current.s1.map((card, idx) => (
                <div
                  key={idx}
                  className="w-14 h-18 sm:w-16 sm:h-22 bg-white text-emerald-950 rounded-2xl border-2 border-emerald-400 shadow-sm flex flex-col items-center justify-center font-mono font-black text-lg sm:text-xl animate-fadeIn"
                >
                  <span>{card}</span>
                  <span className="text-[9px] text-emerald-700 font-bold">♠ S₁[{idx}]</span>
                </div>
              ))}
            </div>
          </div>

          {/* S2: Unsorted Remaining Cards */}
          <div className="md:col-span-5 bg-amber-50/80 border-2 border-amber-300 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-amber-200 text-xs font-mono mb-3">
              <span className="text-amber-950 font-bold uppercase">Vùng S₂: Cọc bài chưa rút</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-300">
                Còn lại: {current.s2.length} lá
              </span>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap min-h-[70px]">
              {current.s2.length > 0 ? (
                current.s2.map((card, idx) => (
                  <div
                    key={idx}
                    className={`w-14 h-18 sm:w-16 sm:h-22 rounded-2xl border flex flex-col items-center justify-center font-mono font-bold text-lg sm:text-xl transition-all ${
                      idx === 0
                        ? "bg-amber-400 text-slate-950 border-2 border-amber-500 ring-2 ring-amber-300 font-black shadow-md scale-105"
                        : "bg-white text-slate-700 border-slate-200 shadow-xs"
                    }`}
                  >
                    <span>{card}</span>
                    <span className="text-[9px] opacity-75 font-semibold">{idx === 0 ? "Next" : `S₂[${idx}]`}</span>
                  </div>
                ))
              ) : (
                <span className="text-xs font-mono text-emerald-800 font-bold italic py-2">
                  ✓ Đã rút và chèn hết toàn bộ mảng!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Step Explanation */}
        <div className="pt-3 border-t border-teal-100 mt-3 text-xs text-slate-700 font-sans leading-relaxed flex items-center justify-between">
          <span>{current.desc}</span>
          {current.next !== null && (
            <span className="text-[11px] font-mono bg-teal-100 text-teal-900 font-bold px-2.5 py-1 rounded-xl border border-teal-300 shrink-0 ml-2">
              Dịch shift: {current.shifts} lần
            </span>
          )}
        </div>
      </div>

      {/* Code & Shift vs Swap Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Java Code */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>insertionSort(int[] a)</span>
            <span className="text-teal-400">Shift a[j+1] = a[j]</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(insertionCode) }} />
          </pre>
          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Dịch chuyển phần tử thay vì swap liên tục
          </div>
        </div>

        {/* Shift vs Swap Performance Analysis */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-4 text-xs font-sans text-teal-950 space-y-2">
            <h4 className="font-bold text-teal-900 text-sm flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-teal-600" />
              Tại Sao Shift Hiệu Quả Hơn Swap?
            </h4>
            <div className="space-y-1.5 text-xs">
              <p>
                • <strong>Phép Swap (Bubble/Selection):</strong> Mỗi lần hoán đổi tốn <strong>3 phép gán bộ nhớ</strong> (<code>temp = a; a = b; b = temp;</code>).
              </p>
              <p>
                • <strong>Phép Shift (Insertion Sort):</strong> Lưu <code>next = a[i]</code> ra biến tạm 1 lần, mỗi bước dịch chỉ tốn <strong>1 phép gán duy nhất</strong> (<code>a[j+1] = a[j]</code>), cuối cùng chèn <code>a[j+1] = next</code>.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-teal-200 font-mono text-[11px] text-teal-900">
              ➔ Giảm ~60% chi phí ghi bộ nhớ so với việc swap liên tục!
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-sans text-slate-700 space-y-1.5">
            <strong className="text-slate-900 block font-bold">Phân tích Trường Hợp Tốt Nhất vs Xấu Nhất:</strong>
            <p>
              • <strong>Best Case (O(n)):</strong> Khi mảng đã được sắp xếp sẵn ➔ Điều kiện <code>a[j] &gt; next</code> luôn sai ngay lần kiểm tra đầu tiên ➔ <strong>0 lần shift, vòng trong không chạy</strong>.
            </p>
            <p>
              • <strong>Worst Case (O(n²)):</strong> Khi mảng bị sắp xếp ngược hoàn toàn (giảm dần) ➔ Mỗi bước <code>i</code> phải shift toàn bộ <code>i</code> phần tử sang phải ➔ Cần <code>n(n - 1) / 2</code> lần shift.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-teal-50/80 border-2 border-teal-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-teal-950">
        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Insertion Sort (Mục 3):</strong><br/>
          • <strong>Ý tưởng:</strong> Duy trì phân vùng đã sắp xếp $S_1$, lấy từng phần tử từ $S_2$ chèn vào đúng vị trí trong $S_1$.<br/>
          • <strong>Độ phức tạp:</strong> Best Case = <code>O(n)</code> (mảng đã có thứ tự sẵn), Worst Case = <code>O(n²)</code> (mảng đảo ngược).<br/>
          • <strong>Bộ nhớ &amp; Tính chất:</strong> Là thuật toán <strong>In-Place (O(1) memory)</strong> và <strong>STABLE (Ổn định)</strong>. Rất tối ưu cho mảng kích thước nhỏ hoặc mảng gần như đã có thứ tự sẵn.
        </div>
      </div>
    </div>
  );
}
