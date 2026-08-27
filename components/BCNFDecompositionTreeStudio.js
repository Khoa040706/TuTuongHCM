"use client";

import React, { useState } from "react";
import { GitBranch, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Layers, Split } from "lucide-react";

export default function BCNFDecompositionTreeStudio() {
  const [activeBranch, setActiveBranch] = useState("all");

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">BCNFDecompositionTreeStudio</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Cây Phân Rã BCNF (Mục 8.4 - 8.5)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng cây phân rã nhị phân đệ quy theo Định lý Delobel bảo toàn thông tin 100%
            </p>
          </div>
        </div>
      </div>

      {/* Problem Context */}
      <div className="mt-5 rounded-xl bg-purple-50/70 border border-purple-200 p-4 font-mono text-xs text-purple-950 space-y-1">
        <div><strong>Bài toán TKB (Thời khóa biểu):</strong> U = {"{ C (lớp), T (giảng viên), R (phòng), S (sinh viên), H (giờ), G (điểm) }"}</div>
        <div><strong>Tập F:</strong> {"{ C → T, HR → C, HT → R, CS → G, HS → R }"} &bull; <strong>Khóa:</strong> K = HS</div>
      </div>

      {/* Visual Tree Breakdown */}
      <div className="mt-4 space-y-3 font-mono text-xs">
        {/* Node 0: Root */}
        <div className="rounded-xl border border-purple-300 bg-purple-100/60 p-3.5 space-y-1">
          <div className="flex items-center justify-between">
            <strong className="text-purple-950 font-sans text-xs">GỐC: R(C, T, H, R, S, G) &bull; Khóa: HS</strong>
            <span className="text-red-700 font-bold bg-white px-2 py-0.5 rounded border border-red-200 text-[10px]">
              VI PHẠM BCNF TẠI C &rarr; T
            </span>
          </div>
          <p className="text-gray-700 font-sans text-xs">
            C không phải là siêu khóa của R &rarr; Áp dụng Delobel tách thành 2 nhánh: <code>R₁(C, T)</code> và <code>Z₁(C, H, R, S, G)</code>.
          </p>
        </div>

        {/* Level 1 Split */}
        <div className="grid gap-3 sm:grid-cols-2 pl-4 border-l-2 border-purple-300">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-950 font-bold">LÁ 1: R₁(C, T)</strong>
              <span className="text-emerald-800 font-bold bg-white px-2 py-0.5 rounded border border-emerald-300 text-[10px]">
                ĐẠT BCNF ✓
              </span>
            </div>
            <p className="text-gray-600 font-sans text-[11px]">Khóa: C &bull; C &rarr; T có vế trái là siêu khóa.</p>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50/70 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-amber-950 font-bold">NHÁNH: Z₁(C, H, R, S, G)</strong>
              <span className="text-red-700 font-bold bg-white px-2 py-0.5 rounded border border-red-200 text-[10px]">
                VI PHẠM TẠI CS &rarr; G
              </span>
            </div>
            <p className="text-gray-600 font-sans text-[11px]">CS không là siêu khóa của Z₁ &rarr; Tách tiếp thành <code>R₂(C, S, G)</code> và <code>Z₂(C, H, R, S)</code>.</p>
          </div>
        </div>

        {/* Level 2 Split */}
        <div className="grid gap-3 sm:grid-cols-2 pl-8 border-l-2 border-amber-300">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-950 font-bold">LÁ 2: R₂(C, S, G)</strong>
              <span className="text-emerald-800 font-bold bg-white px-2 py-0.5 rounded border border-emerald-300 text-[10px]">
                ĐẠT BCNF ✓
              </span>
            </div>
            <p className="text-gray-600 font-sans text-[11px]">Khóa: CS &bull; CS &rarr; G có vế trái là siêu khóa.</p>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50/70 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-amber-950 font-bold">NHÁNH: Z₂(C, H, R, S)</strong>
              <span className="text-red-700 font-bold bg-white px-2 py-0.5 rounded border border-red-200 text-[10px]">
                VI PHẠM TẠI HS &rarr; R
              </span>
            </div>
            <p className="text-gray-600 font-sans text-[11px]">Tách thành <code>R₃(H, S, R)</code> và <code>R₄(C, H, S)</code>.</p>
          </div>
        </div>

        {/* Level 3 Final Leaves */}
        <div className="grid gap-3 sm:grid-cols-2 pl-12 border-l-2 border-emerald-300">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-950 font-bold">LÁ 3: R₃(H, S, R)</strong>
              <span className="text-emerald-800 font-bold bg-white px-2 py-0.5 rounded border border-emerald-300 text-[10px]">
                ĐẠT BCNF ✓
              </span>
            </div>
            <p className="text-gray-600 font-sans text-[11px]">Khóa: HS &bull; Đạt BCNF.</p>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-3 space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-950 font-bold">LÁ 4: R₄(C, H, S)</strong>
              <span className="text-emerald-800 font-bold bg-white px-2 py-0.5 rounded border border-emerald-300 text-[10px]">
                ĐẠT BCNF ✓
              </span>
            </div>
            <p className="text-gray-600 font-sans text-[11px]">Khóa: CHS &bull; Không còn FD vi phạm &bull; Đạt BCNF.</p>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-4 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 p-4 text-white font-mono text-xs flex items-center justify-between">
        <div>
          <span className="text-[11px] text-purple-200 font-sans block">Tập các lược đồ con BCNF kết quả:</span>
          <strong className="text-sm font-bold text-amber-300 font-sans">
            &rho; = {"{ R₁(CT), R₂(CSG), R₃(HSR), R₄(CHS) }"}
          </strong>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400 font-bold font-sans text-xs">
          LOSSLESS JOIN 100%
        </span>
      </div>
    </div>
  );
}
