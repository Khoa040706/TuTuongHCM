"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Layers,
  HelpCircle
} from "lucide-react";

export default function NonStableCounterexamples() {
  const [activeTab, setActiveTab] = useState("quicksort"); // "quicksort" or "selectionsort"

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 7.3 — Phân Tích Phản Ví Dụ
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Minh Họa Chi Tiết: Tại Sao Quick Sort &amp; Selection Sort KHÔNG Stable?
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát 2 trường hợp cụ thể trong giáo trình trên dãy số chứa 2 phần tử cùng giá trị <code>5_A</code> và <code>5_B</code>
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
          Unstable Counterexamples
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("quicksort")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "quicksort"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          1. Phản Ví Dụ Quick Sort
        </button>
        <button
          onClick={() => setActiveTab("selectionsort")}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "selectionsort"
              ? "bg-white text-indigo-900 border-2 border-indigo-400 shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
          }`}
        >
          2. Phản Ví Dụ Selection Sort
        </button>
      </div>

      {/* Tab 1: Quick Sort Counterexample */}
      {activeTab === "quicksort" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 rounded-3xl p-5 md:p-6 border border-indigo-200 text-slate-800 shadow-sm">
            <span className="text-xs font-mono text-indigo-950 block mb-3 font-bold uppercase">
              Trực quan hóa Quick Sort trên dãy giáo trình: [1285, 5_A, 150, 4746, 602, 5_B, 8356]
            </span>

            <div className="space-y-3 font-mono text-xs">
              {/* Step 1 */}
              <div className="bg-white p-3.5 rounded-2xl border border-indigo-100 flex flex-col md:flex-row md:items-center justify-between gap-2 shadow-xs">
                <div>
                  <span className="text-purple-900 font-bold block mb-1">Bước 1: Chọn Pivot p = a[0] = 1285</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 bg-purple-600 text-white rounded-xl font-bold shadow-2xs">1285 (p)</span>
                    <span className="px-2.5 py-1 bg-blue-600 text-white rounded-xl font-bold shadow-2xs">5_A</span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-xl border border-slate-200">150</span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-xl border border-slate-200">4746</span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-xl border border-slate-200">602</span>
                    <span className="px-2.5 py-1 bg-rose-600 text-white rounded-xl font-bold shadow-2xs">5_B</span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-xl border border-slate-200">8356</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-sans font-semibold">Ban đầu: 5_A đứng trước 5_B</span>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-3.5 rounded-2xl border border-indigo-100 flex flex-col md:flex-row md:items-center justify-between gap-2 shadow-xs">
                <div>
                  <span className="text-amber-900 font-bold block mb-1">Bước 2: Phân chia 2 vùng S₁ (&lt; p) và S₂ (≥ p)</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 bg-purple-600 text-white rounded-xl font-bold">1285</span>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-950 border border-emerald-300 rounded-xl font-bold">
                      (5_A, 150, 602, 5_B)
                    </span>
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-950 border border-amber-300 rounded-xl font-bold">
                      (4746, 8356)
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-sans font-semibold">Vùng S₁ kết thúc tại phần tử 5_B</span>
              </div>

              {/* Step 3 */}
              <div className="bg-rose-50 p-4 rounded-2xl border-2 border-rose-300 shadow-xs">
                <span className="text-rose-950 font-bold block mb-1.5">
                  Bước 3: Swap Pivot 1285 với phần tử cuối vùng S₁ (chính là 5_B!)
                </span>
                <div className="flex items-center gap-1.5 flex-wrap my-2">
                  <span className="px-2.5 py-1 bg-rose-600 text-white rounded-xl font-black ring-4 ring-rose-200 shadow-xs">5_B</span>
                  <span className="px-2.5 py-1 bg-blue-600 text-white rounded-xl font-bold shadow-2xs">5_A</span>
                  <span className="px-2.5 py-1 bg-white text-slate-700 rounded-xl border border-slate-200">150</span>
                  <span className="px-2.5 py-1 bg-white text-slate-700 rounded-xl border border-slate-200">602</span>
                  <span className="px-2.5 py-1 bg-purple-600 text-white rounded-xl font-bold">1285</span>
                  <span className="px-2.5 py-1 bg-white text-slate-700 rounded-xl border border-slate-200">4746</span>
                  <span className="px-2.5 py-1 bg-white text-slate-700 rounded-xl border border-slate-200">8356</span>
                </div>
                <p className="text-xs text-rose-950 font-sans pt-2 border-t border-rose-200 mt-2 font-medium">
                  ⚠️ <strong>KẾT QUẢ:</strong> <code>5_B</code> bị nhảy vọt lên vị trí đầu tiên trước <code>5_A</code> ➔ <strong>Thứ tự tương đối bị đảo lộn &rarr; Quick Sort là Unstable!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Selection Sort Counterexample */}
      {activeTab === "selectionsort" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 rounded-3xl p-5 md:p-6 border border-indigo-200 text-slate-800 shadow-sm">
            <span className="text-xs font-mono text-indigo-950 block mb-3 font-bold uppercase">
              Trực quan hóa Selection Sort trên dãy giáo trình: [1285, 5_A, 4746, 602, 5_B, 8356]
            </span>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="bg-white p-3 rounded-2xl border border-indigo-100 shadow-xs">
                <span className="text-slate-500 block text-[11px] font-semibold mb-1">Dãy ban đầu: 5_A đứng trước 5_B</span>
                <code className="text-slate-800 font-bold">1285 &nbsp; 5_A &nbsp; 4746 &nbsp; 602 &nbsp; 5_B &nbsp; [8356]</code>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-indigo-100 shadow-xs">
                <span className="text-slate-500 block text-[11px] font-semibold mb-1">Pass 2: Max là 4746, swap với phần tử cuối hiện tại (5_B)</span>
                <code className="text-slate-800 font-bold">1285 &nbsp; 5_A &nbsp; <strong className="text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">5_B</strong> &nbsp; 602 &nbsp; [4746 &nbsp; 8356]</code>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-indigo-100 shadow-xs">
                <span className="text-slate-500 block text-[11px] font-semibold mb-1">Pass 3: Max là 1285, swap với phần tử cuối hiện tại (602)</span>
                <code className="text-slate-800 font-bold">602 &nbsp; 5_A &nbsp; 5_B &nbsp; [1285 &nbsp; 4746 &nbsp; 8356]</code>
              </div>

              <div className="bg-rose-50 p-4 rounded-2xl border-2 border-rose-300 shadow-xs">
                <span className="text-rose-950 font-bold block mb-1">
                  Pass 4: Max là 602, swap với phần tử cuối hiện tại (5_B!)
                </span>
                <code className="text-slate-800 font-bold text-sm block my-1"><strong className="text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded border border-rose-300">5_B</strong> &nbsp; 5_A &nbsp; [602 &nbsp; 1285 &nbsp; 4746 &nbsp; 8356]</code>
                <p className="text-xs text-rose-950 font-sans pt-2 border-t border-rose-200 mt-2 font-medium">
                  ⚠️ <strong>KẾT QUẢ:</strong> <code>5_B</code> bị đổi chỗ lên trước <code>5_A</code> ➔ <strong>Selection Sort là Unstable!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
