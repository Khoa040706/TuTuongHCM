"use client";

import React, { useState } from "react";
import { RefreshCw, ArrowRight, ArrowLeft, ShieldCheck, Zap } from "lucide-react";

export default function AvlRotationMechanismSandbox() {
  const [currentMode, setCurrentMode] = useState("right"); // "right" | "left"

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cơ Chế Phép Xoay Cây (Tree Rotations - Mục 4.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Tree Rotations: Đổi Vai Trò Cha-Con Giữa P &amp; Q
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Xoay quanh 2 đỉnh liền kề để điều chỉnh chiều cao nhưng <strong>bảo toàn 100% tính chất BST Property</strong>.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setCurrentMode("right")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
              currentMode === "right"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Right Rotation (Quay Phải)
          </button>
          <button
            onClick={() => setCurrentMode("left")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
              currentMode === "left"
                ? "bg-teal-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ArrowRight className="w-3.5 h-3.5" />
            Left Rotation (Quay Trái)
          </button>
        </div>
      </div>

      {/* Main SVG Visualization Canvas */}
      <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-center relative min-h-[320px] mb-6">
        <svg viewBox="0 0 600 240" className="w-full h-auto select-none max-w-[600px]">
          {/* Left Tree State (Before or After depending on mode) */}
          <g transform="translate(0, 0)">
            <text x="140" y="25" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
              {currentMode === "right" ? "Trạng Thái 1 (Trước khi Quay Phải)" : "Trạng Thái 1 (Sau khi Quay Trái)"}
            </text>

            {/* Edges */}
            <line x1="140" y1="50" x2="80" y2="105" stroke="#94a3b8" strokeWidth="2" />
            <line x1="140" y1="50" x2="200" y2="105" stroke="#94a3b8" strokeWidth="2" />
            <line x1="80" y1="105" x2="40" y2="160" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="80" y1="105" x2="120" y2="160" stroke="#059669" strokeWidth="2" />

            {/* Nodes */}
            {/* Q Node (Root) */}
            <circle cx="140" cy="50" r="18" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <text x="140" y="55" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="bold" fontFamily="monospace">Q</text>

            {/* P Node (Left Child) */}
            <circle cx="80" cy="105" r="18" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
            <text x="80" y="110" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold" fontFamily="monospace">P</text>

            {/* Subtree C */}
            <polygon points="200,90 175,150 225,150" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="200" y="130" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">C</text>

            {/* Subtree A */}
            <polygon points="40,145 15,205 65,205" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="40" y="185" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">A</text>

            {/* Subtree B (Pivot Subtree) */}
            <polygon points="120,145 95,205 145,205" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
            <text x="120" y="185" textAnchor="middle" fill="#0f766e" fontSize="11" fontWeight="bold">B</text>
          </g>

          {/* Center Rotation Indicator Arrow */}
          <g transform="translate(265, 95)">
            <rect x="-35" y="-15" width="70" height="30" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold" fontFamily="monospace">
              {currentMode === "right" ? "====>" : "<===="}
            </text>
            <text x="0" y="28" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">
              {currentMode === "right" ? "Right Rotate" : "Left Rotate"}
            </text>
          </g>

          {/* Right Tree State */}
          <g transform="translate(320, 0)">
            <text x="140" y="25" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
              {currentMode === "right" ? "Trạng Thái 2 (Sau khi Quay Phải)" : "Trạng Thái 2 (Trước khi Quay Trái)"}
            </text>

            {/* Edges */}
            <line x1="140" y1="50" x2="80" y2="105" stroke="#94a3b8" strokeWidth="2" />
            <line x1="140" y1="50" x2="200" y2="105" stroke="#94a3b8" strokeWidth="2" />
            <line x1="200" y1="105" x2="160" y2="160" stroke="#059669" strokeWidth="2" />
            <line x1="200" y1="105" x2="240" y2="160" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Nodes */}
            {/* P Node (Root now) */}
            <circle cx="140" cy="50" r="18" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
            <text x="140" y="55" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold" fontFamily="monospace">P</text>

            {/* Q Node (Right Child now) */}
            <circle cx="200" cy="105" r="18" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <text x="200" y="110" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="bold" fontFamily="monospace">Q</text>

            {/* Subtree A */}
            <polygon points="80,90 55,150 105,150" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="80" y="130" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">A</text>

            {/* Subtree B (Pivot Subtree - Moved to Q's left!) */}
            <polygon points="160,145 135,205 185,205" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
            <text x="160" y="185" textAnchor="middle" fill="#0f766e" fontSize="11" fontWeight="bold">B</text>

            {/* Subtree C */}
            <polygon points="240,145 215,205 265,205" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="240" y="185" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">C</text>
          </g>
        </svg>
      </div>

      {/* Invariant & Rebinding Guarantee Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Bất Biến Thứ Tự Khóa (BST Property Invariant):
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-center text-xs text-emerald-950 font-extrabold">
            A &le; P &le; B &le; Q &le; C
          </div>
          <p className="text-[11px] text-slate-700 leading-relaxed font-sans">
            Cây con <strong>B</strong> (nằm giữa P và Q): Lúc đầu là con phải của P (B &ge; P), sau khi xoay trở thành con trái của Q (B &le; Q). Thứ tự khóa vẫn giữ nguyên P &le; B &le; Q!
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2">
          <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-600" />
            Điều Kiện Tiên Quyết (Pre-requisites):
          </div>
          <div className="text-xs text-slate-700 space-y-1 font-mono">
            <div>• <code>rotateRight(Q)</code>: Yêu cầu Q bắt buộc phải có <strong>Left Child (P != null)</strong>.</div>
            <div>• <code>rotateLeft(P)</code>: Yêu cầu P bắt buộc phải có <strong>Right Child (Q != null)</strong>.</div>
            <div>• Chi phí: <strong className="text-emerald-800">O(1)</strong> (chỉ trỏ lại vài con trỏ và tính lại height).</div>
          </div>
        </div>
      </div>
    </div>
  );
}
