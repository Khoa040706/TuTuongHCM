"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  HardDrive,
  Users,
  Layers
} from "lucide-react";

export default function SortingStabilityDemo() {
  const [activeSortType, setActiveSortType] = useState("initial"); // "initial", "stable", "unstable"

  const initialStudents = [
    { id: 1, name: "Alice", group: 2, color: "bg-blue-100 text-blue-900 border-blue-300" },
    { id: 2, name: "Bob", group: 1, color: "bg-emerald-100 text-emerald-900 border-emerald-300" },
    { id: 3, name: "Charlie", group: 2, color: "bg-blue-100 text-blue-900 border-blue-300" },
    { id: 4, name: "David", group: 1, color: "bg-emerald-100 text-emerald-900 border-emerald-300" }
  ];

  const stableStudents = [
    { id: 2, name: "Bob", group: 1, color: "bg-emerald-100 text-emerald-900 border-emerald-300", note: "Bob đứng trước David (giữ Alphabet B &rarr; D)" },
    { id: 4, name: "David", group: 1, color: "bg-emerald-100 text-emerald-900 border-emerald-300", note: "David đứng sau Bob" },
    { id: 1, name: "Alice", group: 2, color: "bg-blue-100 text-blue-900 border-blue-300", note: "Alice đứng trước Charlie (giữ Alphabet A &rarr; C)" },
    { id: 3, name: "Charlie", group: 2, color: "bg-blue-100 text-blue-900 border-blue-300", note: "Charlie đứng sau Alice" }
  ];

  const unstableStudents = [
    { id: 4, name: "David", group: 1, color: "bg-emerald-100 text-emerald-900 border-emerald-300", note: "⚠️ David bị nhảy lên trước Bob (Hỏng Alphabet!)" },
    { id: 2, name: "Bob", group: 1, color: "bg-emerald-100 text-emerald-900 border-emerald-300", note: "Bob bị đẩy ra sau" },
    { id: 3, name: "Charlie", group: 2, color: "bg-blue-100 text-blue-900 border-blue-300", note: "⚠️ Charlie bị nhảy lên trước Alice (Hỏng Alphabet!)" },
    { id: 1, name: "Alice", group: 2, color: "bg-blue-100 text-blue-900 border-blue-300", note: "Alice bị đẩy ra sau" }
  ];

  const getDisplayedList = () => {
    if (activeSortType === "stable") return stableStudents;
    if (activeSortType === "unstable") return unstableStudents;
    return initialStudents;
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 7.1 – 7.2 — Tính Chất Cốt Lõi
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            In-Place Sort &amp; Ứng Dụng Thực Tế Của Tính Ổn Định (Stability)
          </h3>
          <p className="text-xs text-slate-500">
            Trực quan hóa sự khác biệt giữa thuật toán In-Place $O(1)$ và vai trò của Stable Sort trong sắp xếp đa tiêu chí
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold">
            In-Place: O(1)
          </span>
          <span className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold">
            Stable: Giữ Key
          </span>
        </div>
      </div>

      {/* 2 Core Definitions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* In-Place Definition */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
              <HardDrive className="w-4 h-4 text-indigo-600" />
              1. Khái niệm In-Place Sort:
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              Là thuật toán <strong>chỉ cần thêm $O(1)$ bộ nhớ phụ</strong> trong quá trình sắp xếp (hoán đổi trực tiếp trên mảng gốc).
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-200 text-xs font-mono text-slate-800">
            • <strong>In-Place:</strong> Selection, Insertion, Bubble, Quick Sort.<br/>
            • <strong>KHÔNG In-Place:</strong> Merge Sort ($O(n)$) và Radix Sort ($O(n)$).
          </div>
        </div>

        {/* Stable Definition */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              2. Khái niệm Stable Sort:
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              Là thuật toán mà <strong>thứ tự tương đối</strong> giữa các phần tử có cùng giá trị khóa (key) được <strong>giữ nguyên</strong> sau khi sắp xếp.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-200 text-xs font-mono text-slate-800">
            • <strong>STABLE:</strong> Insertion, Bubble, Merge, Radix Sort.<br/>
            • <strong>KHÔNG STABLE:</strong> Selection Sort và Quick Sort.
          </div>
        </div>
      </div>

      {/* Multi-Key Sorting Interactive Simulation */}
      <div className="bg-gradient-to-br from-teal-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-teal-200 shadow-sm mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-teal-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-950 uppercase block">
              Ví dụ ứng dụng thực tế (Giáo trình): Sắp xếp danh sách sinh viên
            </span>
            <span className="text-xs text-teal-800 font-mono font-semibold">
              Bước 1: Danh sách đã xếp theo Alphabet (Alice &rarr; Bob &rarr; Charlie &rarr; David) &rarr; Bước 2: Sort theo Nhóm Tutorial
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 flex-wrap">
            <button
              onClick={() => setActiveSortType("initial")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activeSortType === "initial"
                  ? "bg-white text-slate-900 border border-slate-300 shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Ban Đầu (Alphabet)
            </button>
            <button
              onClick={() => setActiveSortType("stable")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activeSortType === "stable"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-emerald-800 hover:bg-emerald-100/80"
              }`}
            >
              Sort Nhóm (STABLE ✓)
            </button>
            <button
              onClick={() => setActiveSortType("unstable")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activeSortType === "unstable"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "text-rose-800 hover:bg-rose-100/80"
              }`}
            >
              Sort Nhóm (UNSTABLE ⚠️)
            </button>
          </div>
        </div>

        {/* Student Cards Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 py-2 mb-3">
          {getDisplayedList().map((st, idx) => (
            <div
              key={st.id}
              className={`p-3.5 rounded-2xl border-2 flex flex-col justify-between transition-all duration-300 shadow-xs ${st.color}`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="font-black text-sm">{st.name}</span>
                  <span className="font-bold px-2 py-0.5 rounded-full bg-white border border-current/20 shadow-2xs">
                    Nhóm {st.group}
                  </span>
                </div>
                <span className="text-[10px] font-mono opacity-75 font-semibold">Vị trí hiện tại [{idx}]</span>
              </div>

              {st.note && (
                <div className="text-[10px] font-sans pt-2 border-t border-current/20 mt-2 font-bold">
                  {st.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result Commentary */}
        <div className="pt-3 border-t border-teal-100 text-xs font-sans">
          {activeSortType === "initial" && (
            <div className="bg-white p-3 rounded-2xl border border-slate-200 text-slate-700 shadow-xs">
              Danh sách ban đầu đã được sắp xếp theo bảng chữ cái: <strong>Alice (A) &rarr; Bob (B) &rarr; Charlie (C) &rarr; David (D)</strong>.
            </div>
          )}
          {activeSortType === "stable" && (
            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-300 text-emerald-950 flex items-start gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Thuật toán STABLE (Merge / Insertion / Bubble / Radix):</strong> Giữ nguyên thứ tự alphabet của các sinh viên trong cùng nhóm! Nhóm 1 có <code>Bob (B) &rarr; David (D)</code>; Nhóm 2 có <code>Alice (A) &rarr; Charlie (C)</code>.
              </span>
            </div>
          )}
          {activeSortType === "unstable" && (
            <div className="bg-rose-50 p-3 rounded-2xl border border-rose-300 text-rose-950 flex items-start gap-2 shadow-xs">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>
                <strong>Thuật toán UNSTABLE (Quick / Selection):</strong> Xáo trộn thứ tự tương đối trước đó! Nhóm 1 bị đảo thành <code>David &rarr; Bob</code>; Nhóm 2 bị đảo thành <code>Charlie &rarr; Alice</code>, làm mất công sắp xếp alphabet trước đó!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
