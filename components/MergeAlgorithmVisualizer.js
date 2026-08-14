"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HardDrive,
  Cpu,
  RotateCcw,
  ShieldCheck,
  Zap,
  Calculator
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function MergeAlgorithmVisualizer() {
  const [stepIdx, setStepIdx] = useState(0);

  const steps = [
    {
      step: 0,
      leftIdx: 0,
      rightIdx: 0,
      temp: [],
      comparing: "Bắt đầu: left trỏ a[0]=2, right trỏ a[4]=4",
      action: "Chuẩn bị so sánh a[left] với a[right]",
      isDone: false
    },
    {
      step: 1,
      leftIdx: 1,
      rightIdx: 0,
      temp: [2],
      comparing: "2 <= 4 ➔ Đưa 2 vào temp, tăng left sang 3",
      action: "temp = [2]",
      isDone: false
    },
    {
      step: 2,
      leftIdx: 2,
      rightIdx: 0,
      temp: [2, 3],
      comparing: "3 <= 4 ➔ Đưa 3 vào temp, tăng left sang 6",
      action: "temp = [2, 3]",
      isDone: false
    },
    {
      step: 3,
      leftIdx: 2,
      rightIdx: 1,
      temp: [2, 3, 4],
      comparing: "6 > 4 ➔ Đưa 4 vào temp, tăng right sang 5",
      action: "temp = [2, 3, 4]",
      isDone: false
    },
    {
      step: 4,
      leftIdx: 2,
      rightIdx: 2,
      temp: [2, 3, 4, 5],
      comparing: "6 > 5 ➔ Đưa 5 vào temp, tăng right sang 8",
      action: "temp = [2, 3, 4, 5]",
      isDone: false
    },
    {
      step: 5,
      leftIdx: 3,
      rightIdx: 2,
      temp: [2, 3, 4, 5, 6],
      comparing: "6 <= 8 ➔ Đưa 6 vào temp, tăng left sang 7",
      action: "temp = [2, 3, 4, 5, 6]",
      isDone: false
    },
    {
      step: 6,
      leftIdx: 4,
      rightIdx: 2,
      temp: [2, 3, 4, 5, 6, 7],
      comparing: "7 <= 8 ➔ Đưa 7 vào temp. Mảng trái đã cạn kiệt!",
      action: "temp = [2, 3, 4, 5, 6, 7]",
      isDone: false
    },
    {
      step: 7,
      leftIdx: 4,
      rightIdx: 3,
      temp: [2, 3, 4, 5, 6, 7, 8],
      comparing: "Copy phần tử 8 còn lại của mảng phải vào temp",
      action: "temp = [2, 3, 4, 5, 6, 7, 8]",
      isDone: false
    },
    {
      step: 8,
      leftIdx: 4,
      rightIdx: 3,
      temp: [2, 3, 4, 5, 6, 7, 8],
      comparing: "Copy toàn bộ temp[] ngược về mảng gốc a[i..j]",
      action: "Hoàn tất merge: [2, 3, 4, 5, 6, 7, 8] đã sắp xếp!",
      isDone: true
    }
  ];

  const leftSub = [2, 3, 6, 7];
  const rightSub = [4, 5, 8];

  const current = steps[stepIdx];

  const mergeJavaCode = `// Merge 2 mảng con đã sorted a[i..mid] và a[mid+1..j]
void merge(int[] a, int i, int mid, int j) {
    int[] temp = new int[j - i + 1]; // Cần thêm mảng tạm -> O(n) space!
    int left = i, right = mid + 1, it = 0;
    
    // Đưa phần tử nhỏ hơn vào temp
    while (left <= mid && right <= j) {
        if (a[left] <= a[right]) { // Dấu <= đảm bảo tính STABLE
            temp[it++] = a[left++];
        } else {
            temp[it++] = a[right++];
        }
    }
    
    // Copy các phần tử còn lại
    while (left <= mid)  temp[it++] = a[left++];
    while (right <= j) temp[it++] = a[right++];
    
    // Copy kết quả từ temp về lại mảng gốc a
    for (int k = 0; k < temp.length; k++) {
        a[i + k] = temp[k];
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Mục 4.4 — Trái Tim Của Merge Sort
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Thuật Toán Trộn (Merge) 2 Con Trỏ: Two-Pointers Mechanism
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát cơ chế so sánh 2 con trỏ <code>left</code> &amp; <code>right</code>, mảng tạm <code>temp[]</code> và đánh giá chi phí bộ nhớ phụ
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <HardDrive className="w-3.5 h-3.5 text-rose-600" />
          Space: O(n) Auxiliary RAM
        </div>
      </div>

      {/* Two-Pointers Merge Simulator */}
      <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-indigo-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-indigo-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-950 uppercase block">
              Mô phỏng trộn 2 mảng: [2, 3, 6, 7] và [4, 5, 8]
            </span>
            <span className="text-xs text-emerald-800 font-mono font-semibold">
              Bước {stepIdx + 1} / {steps.length}: {current.comparing}
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
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-xs font-mono font-bold text-white hover:bg-emerald-700 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Bước tiếp
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

        {/* 2 Subarrays & Pointers Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Left Subarray */}
          <div className="bg-blue-50/90 p-4 rounded-2xl border-2 border-blue-300 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-blue-950 pb-2 border-b border-blue-200 mb-2.5 font-bold">
              <span>MẢNG CON TRÁI a[i..mid]</span>
              <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">con trỏ left</span>
            </div>
            <div className="flex items-center gap-2">
              {leftSub.map((val, idx) => {
                const isCurrentLeft = current.leftIdx === idx;
                const isPassed = current.leftIdx > idx;

                return (
                  <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={`w-full py-2 rounded-xl text-center font-mono font-bold text-sm transition-all shadow-xs ${
                        isCurrentLeft
                          ? "bg-blue-600 text-white ring-4 ring-blue-200 scale-105 shadow-md"
                          : isPassed
                          ? "bg-slate-100 text-slate-400 opacity-60 border border-slate-200"
                          : "bg-white text-slate-800 border border-blue-200"
                      }`}
                    >
                      {val}
                    </div>
                    <span className={`text-[9px] font-mono font-semibold ${isCurrentLeft ? "text-blue-700 font-bold" : "text-slate-500"}`}>
                      {isCurrentLeft ? "⬆ left" : `[${idx}]`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Subarray */}
          <div className="bg-amber-50/90 p-4 rounded-2xl border-2 border-amber-300 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-amber-950 pb-2 border-b border-amber-200 mb-2.5 font-bold">
              <span>MẢNG CON PHẢI a[mid+1..j]</span>
              <span className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">con trỏ right</span>
            </div>
            <div className="flex items-center gap-2">
              {rightSub.map((val, idx) => {
                const isCurrentRight = current.rightIdx === idx;
                const isPassed = current.rightIdx > idx;

                return (
                  <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={`w-full py-2 rounded-xl text-center font-mono font-bold text-sm transition-all shadow-xs ${
                        isCurrentRight
                          ? "bg-amber-500 text-white font-black ring-4 ring-amber-200 scale-105 shadow-md"
                          : isPassed
                          ? "bg-slate-100 text-slate-400 opacity-60 border border-slate-200"
                          : "bg-white text-slate-800 border border-amber-200"
                      }`}
                    >
                      {val}
                    </div>
                    <span className={`text-[9px] font-mono font-semibold ${isCurrentRight ? "text-amber-800 font-bold" : "text-slate-500"}`}>
                      {isCurrentRight ? "⬆ right" : `[${idx + 4}]`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Temporary Array (temp) Result */}
        <div className="bg-emerald-50/90 p-4 rounded-2xl border-2 border-emerald-300 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-950 pb-2 border-b border-emerald-200 mb-2.5 font-bold">
            <span>MẢNG TẠM TEMP[] (KẾT QUẢ GỘP ĐÃ CÓ THỨ TỰ)</span>
            <span className="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">{current.temp.length} / 7 phần tử</span>
          </div>

          <div className="flex items-center gap-2 min-h-[42px] flex-wrap">
            {current.temp.length > 0 ? (
              current.temp.map((val, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-mono font-black text-sm shadow-xs animate-fadeIn"
                >
                  {val}
                </div>
              ))
            ) : (
              <span className="text-xs font-mono text-slate-500 italic">Mảng temp đang rỗng...</span>
            )}
          </div>
        </div>
      </div>

      {/* Code & Operations Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Code */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>void merge(int[] a, int i, int mid, int j)</span>
            <span className="text-emerald-400">2 con trỏ Two-Pointers</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(mergeJavaCode) }} />
          </pre>
        </div>

        {/* Math Operations Breakdown */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-sans text-slate-800 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-emerald-600" />
              Đếm Số Thao Tác Trong 1 Lần Gọi <code>merge()</code>:
            </h4>
            <p className="text-slate-600">
              Xét mảng con có kích thước $k = j - i + 1$ phần tử:
            </p>
            <ul className="space-y-1 font-mono text-[11px] text-slate-700">
              <li>• Số phép so sánh $\le k - 1$.</li>
              <li>• Số phép di chuyển từ mảng gốc sang temp: $k$.</li>
              <li>• Số phép di chuyển từ temp về mảng gốc: $k$.</li>
            </ul>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-[11px] text-emerald-900 font-bold">
              ➔ Tổng số thao tác &le; 3k - 1 = <strong>O(k)</strong> (tuyến tính theo kích thước mảng con).
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs font-sans text-rose-950 space-y-1">
            <h4 className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              Nhược Điểm Của Merge Sort (Space Complexity):
            </h4>
            <p className="leading-relaxed text-xs">
              Bắt buộc phải cấp phát mảng tạm <code>temp[]</code> và copy ngược dữ liệu ➔ <strong>Tốn thêm $O(n)$ bộ nhớ phụ (Không phải In-Place)</strong>. Tuy nhiên, điều kiện <code>a[left] &lt;= a[right]</code> giúp Merge Sort giữ trọn vẹn <strong>Tính Ổn Định (STABLE)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
