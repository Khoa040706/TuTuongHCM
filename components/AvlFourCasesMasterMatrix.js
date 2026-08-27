"use client";

import React, { useState } from "react";
import { Zap, Sparkles } from "lucide-react";

export default function AvlFourCasesMasterMatrix() {
  const [selectedCase, setSelectedCase] = useState("LL"); // "LL" | "RR" | "LR" | "RL"

  const cases = {
    LL: {
      name: "Left-Left Case (LL)",
      group: "Lệch cùng phía (Single Rotation)",
      cond1: "bf(x) = +2",
      cond2: "bf(x.left) = +1 (hoặc 0)",
      action: "rightRotate(x)",
      desc: "Nút mới được chèn vào cây con TRÁI của con TRÁI của x. Cây bị phình dài về nhánh ngoài bên trái.",
      strategy: "Chỉ cần thực hiện đúng 1 lần Quay Phải (Right Rotation) quanh đỉnh cha x.",
      color: "emerald",
      sample: "30 (+2) → 20 (+1) → 10 (chèn 10)",
    },
    RR: {
      name: "Right-Right Case (RR)",
      group: "Lệch cùng phía (Single Rotation)",
      cond1: "bf(x) = -2",
      cond2: "bf(x.right) = -1 (hoặc 0)",
      action: "leftRotate(x)",
      desc: "Nút mới được chèn vào cây con PHẢI của con PHẢI của x. Cây bị phình dài về nhánh ngoài bên phải.",
      strategy: "Chỉ cần thực hiện đúng 1 lần Quay Trái (Left Rotation) quanh đỉnh cha x.",
      color: "teal",
      sample: "10 (-2) → 20 (-1) → 30 (chèn 30)",
    },
    LR: {
      name: "Left-Right Case (LR)",
      group: "Lệch khác phía (Double Rotation)",
      cond1: "bf(x) = +2",
      cond2: "bf(x.left) = -1",
      action: "leftRotate(x.left) rồi rightRotate(x)",
      desc: "Nút mới được chèn vào cây con PHẢI của con TRÁI của x. Cây bị bẻ gập hình chữ Z (zig-zag).",
      strategy: "Bước 1: Quay Trái con (x.left) để duỗi thẳng về dạng LL → Bước 2: Quay Phải cha (x).",
      color: "purple",
      sample: "30 (+2) → 10 (-1) → 20 (chèn 20)",
    },
    RL: {
      name: "Right-Left Case (RL)",
      group: "Lệch khác phía (Double Rotation)",
      cond1: "bf(x) = -2",
      cond2: "bf(x.right) = +1",
      action: "rightRotate(x.right) rồi leftRotate(x)",
      desc: "Nút mới được chèn vào cây con TRÁI của con PHẢI của x. Cây bị bẻ gập hình chữ Z ngược.",
      strategy: "Bước 1: Quay Phải con (x.right) để duỗi thẳng về dạng RR → Bước 2: Quay Trái cha (x).",
      color: "pink",
      sample: "10 (-2) → 30 (+1) → 20 (chèn 20)",
    },
  };

  const current = cases[selectedCase];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>4 Trường Hợp Cần Rebalance (Mục 4.4 &amp; 4.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Ma Trận Phân Loại 4 Trường Hợp: LL, RR, LR, RL
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Kiểm tra <strong>Balance Factor của đỉnh cha (x)</strong> và <strong>đỉnh con</strong> để áp dụng chính xác phép quay.
          </p>
        </div>

        {/* Golden Rule Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Cùng phía: 1 xoay • Khác phía: 2 xoay</span>
        </div>
      </div>

      {/* 4 Case Selector Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {Object.entries(cases).map(([key, item]) => {
          const isSel = selectedCase === key;
          const isDouble = key === "LR" || key === "RL";

          return (
            <button
              key={key}
              onClick={() => setSelectedCase(key)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                isSel
                  ? isDouble
                    ? "bg-purple-600 border-purple-500 text-white shadow-sm scale-[1.02]"
                    : "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold uppercase ${isSel ? "text-white" : isDouble ? "text-purple-700" : "text-emerald-700"}`}>
                  {key} CASE
                </span>
                <span className={`text-[10px] font-mono font-semibold ${isSel ? "text-purple-100" : "text-slate-500"}`}>
                  {isDouble ? "2 Xoay" : "1 Xoay"}
                </span>
              </div>
              <div className={`text-xs font-bold font-sans line-clamp-1 ${isSel ? "text-white" : "text-slate-900"}`}>{item.name}</div>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive Case Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Math & Rule Details (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold font-mono bg-emerald-50 text-emerald-900 border border-emerald-200">
              {current.group}
            </span>
          </div>

          {/* Condition Box */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 text-[10px] block font-sans font-semibold">1. Điều kiện đỉnh cha x:</span>
              <strong className="text-rose-700 text-sm font-bold">{current.cond1}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 text-[10px] block font-sans font-semibold">2. Điều kiện đỉnh con:</span>
              <strong className="text-amber-800 text-sm font-bold">{current.cond2}</strong>
            </div>
          </div>

          {/* Action Box */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 font-mono">
              Hành Động Khắc Phục (Action):
            </span>
            <div className="font-mono text-sm font-extrabold text-emerald-950">
              {current.action}
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-sans">{current.desc}</p>
        </div>

        {/* Strategy & Exam Flashcard (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
              Chiến Lược Xử Lý:
            </span>
            <p className="text-xs text-slate-800 leading-relaxed font-sans bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-200 font-semibold">
              {current.strategy}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
              <div className="text-[11px] text-slate-500 uppercase font-bold font-sans">Ví dụ thực tế:</div>
              <div className="text-emerald-900 font-bold">{current.sample}</div>
            </div>
          </div>

          {/* Exam Rule of Thumb */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-slate-700 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Mẹo Nhớ Nhanh (RẤT HAY RA THI):
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600">
              • Cùng dấu (LL: ++, RR: --) &rarr; <strong>1 rotation</strong>.<br />
              • Khác dấu (LR: +-, RL: -+) &rarr; <strong>2 rotations</strong> (quay con trước, quay cha sau).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
