"use client";

import React, { useState } from "react";
import {
  Split,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ShieldAlert,
  HardDrive,
  Cpu,
  Layers
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function QuickSortPartitionVisualizer() {
  const [stepIdx, setStepIdx] = useState(0);

  const steps = [
    {
      step: 0,
      k: null,
      m: 0,
      pivot: 27,
      array: [
        { val: 27, region: "pivot", tag: "Pivot p" },
        { val: 38, region: "unknown", tag: "Unknown" },
        { val: 12, region: "unknown", tag: "Unknown" },
        { val: 39, region: "unknown", tag: "Unknown" },
        { val: 27, region: "unknown", tag: "Unknown" },
        { val: 16, region: "unknown", tag: "Unknown" }
      ],
      desc: "Khởi tạo: Chọn pivot p = a[0] = 27. Đặt m = 0 (S₁ và S₂ đang rỗng). Toàn bộ phần tử còn lại thuộc vùng Unknown."
    },
    {
      step: 1,
      k: 1,
      m: 0,
      pivot: 27,
      array: [
        { val: 27, region: "pivot", tag: "Pivot p" },
        { val: 38, region: "s2", tag: "S₂ (≥ p)" },
        { val: 12, region: "unknown", tag: "Unknown" },
        { val: 39, region: "unknown", tag: "Unknown" },
        { val: 27, region: "unknown", tag: "Unknown" },
        { val: 16, region: "unknown", tag: "Unknown" }
      ],
      desc: "Xét k=1 (a[1]=38): 38 ≥ 27 ➔ Đưa 38 vào vùng S₂. Không tăng m, không swap."
    },
    {
      step: 2,
      k: 2,
      m: 1,
      pivot: 27,
      array: [
        { val: 27, region: "pivot", tag: "Pivot p" },
        { val: 12, region: "s1", tag: "S₁ (< p)" },
        { val: 38, region: "s2", tag: "S₂ (≥ p)" },
        { val: 39, region: "unknown", tag: "Unknown" },
        { val: 27, region: "unknown", tag: "Unknown" },
        { val: 16, region: "unknown", tag: "Unknown" }
      ],
      desc: "Xét k=2 (a[2]=12): 12 < 27 ➔ Tăng m lên 1, swap a[2]=12 với a[1]=38 ➔ 12 vào vùng S₁!"
    },
    {
      step: 3,
      k: 3,
      m: 1,
      pivot: 27,
      array: [
        { val: 27, region: "pivot", tag: "Pivot p" },
        { val: 12, region: "s1", tag: "S₁ (< p)" },
        { val: 38, region: "s2", tag: "S₂ (≥ p)" },
        { val: 39, region: "s2", tag: "S₂ (≥ p)" },
        { val: 27, region: "unknown", tag: "Unknown" },
        { val: 16, region: "unknown", tag: "Unknown" }
      ],
      desc: "Xét k=3 (a[3]=39): 39 ≥ 27 ➔ Đưa 39 vào vùng S₂. Không tăng m."
    },
    {
      step: 4,
      k: 4,
      m: 1,
      pivot: 27,
      array: [
        { val: 27, region: "pivot", tag: "Pivot p" },
        { val: 12, region: "s1", tag: "S₁ (< p)" },
        { val: 38, region: "s2", tag: "S₂ (≥ p)" },
        { val: 39, region: "s2", tag: "S₂ (≥ p)" },
        { val: 27, region: "s2", tag: "S₂ (≥ p)" },
        { val: 16, region: "unknown", tag: "Unknown" }
      ],
      desc: "Xét k=4 (a[4]=27): 27 ≥ 27 ➔ Đưa 27 vào vùng S₂. Không tăng m."
    },
    {
      step: 5,
      k: 5,
      m: 2,
      pivot: 27,
      array: [
        { val: 27, region: "pivot", tag: "Pivot p" },
        { val: 12, region: "s1", tag: "S₁ (< p)" },
        { val: 16, region: "s1", tag: "S₁ (< p)" },
        { val: 39, region: "s2", tag: "S₂ (≥ p)" },
        { val: 27, region: "s2", tag: "S₂ (≥ p)" },
        { val: 38, region: "s2", tag: "S₂ (≥ p)" }
      ],
      desc: "Xét k=5 (a[5]=16): 16 < 27 ➔ Tăng m lên 2, swap a[5]=16 với a[2]=38 ➔ 16 vào vùng S₁!"
    },
    {
      step: 6,
      k: null,
      m: 2,
      pivot: 27,
      array: [
        { val: 16, region: "s1", tag: "S₁ (< p)" },
        { val: 12, region: "s1", tag: "S₁ (< p)" },
        { val: 27, region: "pivot-final", tag: "Pivot Cố Định ✓" },
        { val: 39, region: "s2", tag: "S₂ (≥ p)" },
        { val: 27, region: "s2", tag: "S₂ (≥ p)" },
        { val: 38, region: "s2", tag: "S₂ (≥ p)" }
      ],
      desc: "BƯỚC CUỐI: Swap pivot a[0]=27 với a[m]=a[2]=16! Pivot 27 đứng đúng vị trí cuối cùng (index 2). Trả về m = 2!"
    }
  ];

  const current = steps[stepIdx];

  const getRegionClass = (region) => {
    switch (region) {
      case "pivot":
        return "bg-purple-600 text-white ring-4 ring-purple-200 shadow-sm font-black";
      case "pivot-final":
        return "bg-emerald-600 text-white font-black ring-4 ring-emerald-200 scale-105 shadow-md";
      case "s1":
        return "bg-emerald-100 text-emerald-950 border-2 border-emerald-400 font-bold shadow-xs";
      case "s2":
        return "bg-amber-100 text-amber-950 border-2 border-amber-400 font-bold shadow-xs";
      case "unknown":
      default:
        return "bg-white text-slate-700 border-2 border-slate-200 shadow-xs";
    }
  };

  const partitionJavaCode = `// Thuật toán Partition chia 3 vùng (Lomuto Partition)
int partition(int[] a, int i, int j) {
    int p = a[i]; // Chọn a[i] làm pivot
    int m = i;    // m là biên phân cách của vùng S1
    
    // Vòng lặp duyệt vùng unknown từ i+1 đến j
    for (int k = i + 1; k <= j; k++) {
        if (a[k] < p) {
            m++;            // Mở rộng vùng S1
            swap(a, k, m);  // Đưa a[k] vào vùng S1
        }
        // else: a[k] >= p -> thuộc vùng S2, không cần làm gì!
    }
    
    // Đưa pivot về đúng vị trí chính giữa S1 và S2
    swap(a, i, m);
    return m; // m là vị trí cuối cùng của pivot
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Mục 5 — Trái Tim Của Quick Sort
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Thuật Toán Phân Hoạch 3 Vùng (Lomuto Partition Scheme)
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát 3 phân vùng: $S_1 = a[i+1..m]$ ($&lt; p$), $S_2 = a[m+1..k-1]$ ($\ge p$), và $Unknown = a[k..j]$
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Split className="w-3.5 h-3.5 text-purple-600" />
          In-Place O(1) Memory
        </div>
      </div>

      {/* Interactive Partition Simulator */}
      <div className="bg-gradient-to-br from-purple-50/60 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-purple-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-purple-950 uppercase block">
              Mô phỏng phân hoạch mảng giáo trình: [27, 38, 12, 39, 27, 16] (Pivot = 27)
            </span>
            <span className="text-xs text-purple-800 font-mono font-semibold">
              Bước {stepIdx + 1} / {steps.length} • Biên m = {current.m} {current.k !== null ? `• Đang xét k = ${current.k}` : ""}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setStepIdx((prev) => Math.max(0, prev - 1))}
              disabled={stepIdx === 0}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Bước trước
            </button>
            <button
              onClick={() => setStepIdx((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={stepIdx === steps.length - 1}
              className="px-3.5 py-1.5 rounded-xl bg-purple-600 text-xs font-mono font-bold text-white hover:bg-purple-700 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Bước tiếp ({stepIdx + 1}/{steps.length})
            </button>
            <button
              onClick={() => setStepIdx(0)}
              className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer shadow-xs"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Array Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 py-3 mb-3">
          {current.array.map((item, idx) => {
            const isK = current.k === idx;
            const isM = current.m === idx;

            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xs transition-all duration-200 ${getRegionClass(
                  item.region
                )}`}
              >
                <span className="text-2xl font-black font-mono">{item.val}</span>
                <span className="text-[10px] font-mono font-bold opacity-90">{item.tag}</span>
                <span className="text-[9px] opacity-75 font-mono font-semibold">
                  [{idx}] {isM ? "• m" : ""} {isK ? "• k" : ""}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 flex-wrap text-xs font-mono text-slate-600 pt-2.5 border-t border-purple-100">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-purple-600 inline-block shadow-xs" /> Pivot p
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500 inline-block shadow-xs" /> Vùng S₁ (&lt; p)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500 inline-block shadow-xs" /> Vùng S₂ (≥ p)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-white inline-block border-2 border-slate-300 shadow-xs" /> Unknown
          </span>
        </div>

        <p className="text-xs text-slate-700 pt-3 border-t border-purple-100 mt-3 font-sans leading-relaxed">
          {current.desc}
        </p>
      </div>

      {/* Code & In-Place Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Code */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>int partition(int[] a, int i, int j)</span>
            <span className="text-purple-400">O(n) Linear Partition</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(partitionJavaCode) }} />
          </pre>
        </div>

        {/* In-Place & Unstable Analysis */}
        <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs font-sans text-emerald-950 space-y-1.5">
            <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-emerald-600" />
              Tại Sao Quick Sort Là In-Place?
            </h4>
            <p className="leading-relaxed text-xs">
              Toàn bộ quá trình phân hoạch <code>partition()</code> chỉ thực hiện hoán đổi vị trí trực tiếp trong mảng gốc $a$ thông qua các biến chỉ số <code>m</code> và <code>k</code> ➔ <strong>Không cần mảng tạm phụ</strong> (chỉ tốn $O(\log n)$ bộ nhớ stack đệ quy).
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs font-sans text-rose-950 space-y-1.5">
            <h4 className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Tại Sao Quick Sort KHÔNG Stable?
            </h4>
            <p className="leading-relaxed text-xs">
              Phép hoán đổi <code>swap(a, i, m)</code> để đưa Pivot về đúng vị trí có thể làm Pivot nhảy vọt qua các phần tử có cùng giá trị trong vùng $S_2$ ➔ <strong>Làm mất thứ tự tương đối ban đầu</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
