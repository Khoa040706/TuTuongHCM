"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Play,
  ArrowRight,
  ShieldAlert,
  HardDrive,
  Cpu,
  Calculator
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function SelectionSortDeepDive() {
  // State for Unstable Counterexample Simulator
  const [unstableStep, setUnstableStep] = useState(0);

  const unstableSteps = [
    {
      step: 0,
      title: "Trạng thái ban đầu",
      array: [
        { val: 5, tag: "A", color: "bg-blue-600 text-white", label: "5_Xanh (đầu)" },
        { val: 5, tag: "B", color: "bg-rose-600 text-white", label: "5_Đỏ (giữa)" },
        { val: 3, tag: "", color: "bg-slate-700 text-white", label: "3 (cuối)" }
      ],
      desc: "Ta có 2 phần tử cùng giá trị 5: 5_Xanh đứng trước 5_Đỏ. Ta muốn sắp xếp tăng dần.",
      highlightIdx: null
    },
    {
      step: 1,
      title: "Bước 1: Tìm phần tử lớn nhất trong mảng [0..2]",
      array: [
        { val: 5, tag: "A", color: "bg-blue-600 text-white ring-4 ring-amber-400", label: "Max = 5_Xanh (index 0)" },
        { val: 5, tag: "B", color: "bg-rose-600 text-white", label: "5_Đỏ (bằng max nhưng duyệt sau)" },
        { val: 3, tag: "", color: "bg-slate-700 text-white", label: "3 (vị trí cuối index 2)" }
      ],
      desc: "Thuật toán tìm thấy Max đầu tiên là 5_Xanh tại vị trí 0 (5_Đỏ không lớn hơn 5_Xanh nên index max không đổi).",
      highlightIdx: 0
    },
    {
      step: 2,
      title: "Bước 2: Hoán đổi (Swap) Max với phần tử ở cuối mảng (index 2)",
      array: [
        { val: 3, tag: "", color: "bg-slate-700 text-white", label: "3 (về đầu)" },
        { val: 5, tag: "B", color: "bg-rose-600 text-white", label: "5_Đỏ (ở giữa)" },
        { val: 5, tag: "A", color: "bg-blue-600 text-white ring-4 ring-rose-500", label: "5_Xanh (bị văng ra sau 5_Đỏ!)" }
      ],
      desc: "Thực hiện swap a[0] và a[2]! Kết quả: 5_Xanh bị nhảy ra sau 5_Đỏ ➔ Thứ tự tương đối ban đầu bị đảo lộn!",
      highlightIdx: 2
    }
  ];

  const selectionJavaCode = `public static void selectionSort(int[] a) {
    // Vòng ngoài: chạy ngược từ cuối mảng về 1
    for (int i = a.length - 1; i >= 1; i--) {
        int index = i; // i là vị trí cuối mảng con hiện tại
        
        // Vòng trong: tìm phần tử lớn nhất trong đoạn [0 .. i]
        for (int j = 0; j < i; j++) {
            if (a[j] > a[index]) {
                index = j; // lưu vị trí phần tử lớn nhất
            }
        }
        
        // Swap phần tử lớn nhất a[index] với phần tử cuối a[i]
        int temp = a[index];
        a[index] = a[i];
        a[i] = temp;
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            Mục 1 — Phân Tích Chuyên Sâu
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Selection Sort: Cơ Chế Tìm Max Về Cuối &amp; Phân Tích Tính Không Ổn Định
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá quy tắc đếm số phép so sánh, số lần swap cố định và lý do Selection Sort là <strong>Unstable</strong>
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Calculator className="w-3.5 h-3.5 text-blue-600" />
          O(n²) Compares • O(n) Swaps
        </div>
      </div>

      {/* Code & Math Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
        {/* Java Code Block */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>selectionSort(int[] a)</span>
            <span className="text-blue-400">Tìm Max đưa về cuối</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(selectionJavaCode) }} />
          </pre>
          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Giáo trình: Vòng ngoài chạy từ <code>a.length - 1</code> giảm dần về <code>1</code>
          </div>
        </div>

        {/* Math & Cost Breakdown */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 text-xs font-sans text-blue-950 space-y-2">
            <h4 className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-600" />
              Phân Rã Chi Phí Tính Toán (Cost Breakdown):
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-blue-800 shrink-0">• Vòng ngoài:</span>
                <span>Chạy đúng <code>n - 1</code> lần.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-blue-800 shrink-0">• Vòng trong (tìm max):</span>
                <span>Số phép so sánh = <code>(n-1) + (n-2) + ... + 1 = n(n-1)/2</code> phép so sánh.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-blue-800 shrink-0">• Phép hoán đổi (Swap):</span>
                <span>Chạy đúng <code>n - 1</code> lần (vòng trong xong mới swap 1 lần).</span>
              </li>
            </ul>
            <div className="p-2.5 rounded-xl bg-white border border-blue-200 font-mono text-[11px] text-blue-900">
              ➔ <strong>Tổng chi phí:</strong> <code>t1(n-1) + t2·n(n-1)/2 = O(n²)</code>
            </div>
          </div>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs font-sans text-amber-950 space-y-1">
            <h4 className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-amber-600" />
              Điểm Sáng Về Bộ Nhớ &amp; Phép Ghi (Minimum Memory Writes):
            </h4>
            <p className="leading-relaxed text-xs">
              Trong khi Bubble Sort có thể tốn tới <code>n(n - 1) / 2</code> lần swap, Selection Sort <strong>chỉ thực hiện đúng <code>n - 1</code> lần swap trong mọi trường hợp</strong>! Điều này cực kỳ có lợi khi ghi vào các bộ nhớ có chi phí ghi đắt đỏ (như Flash memory / EEPROM).
            </p>
          </div>
        </div>
      </div>

      {/* Unstable Demonstration Interactive Widget */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">
                PHẢN VÍ DỤ MINH HỌA: TẠI SAO SELECTION SORT KHÔNG ỔN ĐỊNH (UNSTABLE)?
              </h4>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Khảo sát mảng <code>[5_Xanh, 5_Đỏ, 3]</code> để thấy thứ tự của hai số 5 bị đảo ngược sau khi swap
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setUnstableStep((prev) => Math.max(0, prev - 1))}
              disabled={unstableStep === 0}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
            >
              Lùi bước
            </button>
            <button
              onClick={() => setUnstableStep((prev) => Math.min(2, prev + 1))}
              disabled={unstableStep === 2}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 text-xs font-mono font-bold text-white hover:bg-blue-700 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Bước tiếp ({unstableStep + 1}/3)
            </button>
            <button
              onClick={() => setUnstableStep(0)}
              className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Blocks */}
        <div className="bg-gradient-to-br from-blue-50/70 via-white to-slate-50 rounded-3xl p-5 border border-blue-200 text-slate-800 shadow-sm mb-3">
          <span className="text-xs font-mono text-blue-950 block mb-3 font-bold uppercase">
            {unstableSteps[unstableStep].title}
          </span>

          <div className="flex items-center justify-center gap-4 py-3">
            {unstableSteps[unstableStep].array.map((item, idx) => (
              <div
                key={idx}
                className={`w-28 sm:w-36 p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-sm transition-all duration-300 ${item.color}`}
              >
                <span className="text-2xl sm:text-3xl font-black font-mono">{item.val}</span>
                <span className="text-[10px] font-mono opacity-90 font-bold">{item.label}</span>
                <span className="text-[9px] opacity-75 font-mono">Index [{idx}]</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-700 pt-3 border-t border-blue-100 mt-3 font-sans leading-relaxed">
            {unstableSteps[unstableStep].desc}
          </p>
        </div>

        {unstableStep === 2 && (
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-950 font-sans flex items-center gap-2 animate-fadeIn">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>
              <strong>KẾT LUẬN:</strong> <code>5_Xanh</code> ban đầu đứng trước <code>5_Đỏ</code>, nhưng sau bước swap thì <code>5_Xanh</code> đứng sau <code>5_Đỏ</code>. Do đó, <strong>Selection Sort là thuật toán KHÔNG ỔN ĐỊNH (Unstable)</strong>.
            </span>
          </div>
        )}
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-950">
        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Selection Sort (Mục 1):</strong><br/>
          • <strong>Ý tưởng:</strong> Chọn phần tử lớn nhất, đưa về cuối, thu hẹp phạm vi.<br/>
          • <strong>Độ phức tạp:</strong> Luôn luôn là <code>O(n²)</code> trong mọi trường hợp (dù mảng đã sắp xếp hay chưa, vì luôn phải quét tìm max).<br/>
          • <strong>Bộ nhớ &amp; Tính chất:</strong> Là thuật toán <strong>In-Place (O(1) memory)</strong> nhưng <strong>KHÔNG STABLE</strong>.
        </div>
      </div>
    </div>
  );
}
