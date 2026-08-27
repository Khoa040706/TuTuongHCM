"use client";

import React, { useState } from "react";
import { GitMerge, ArrowRight, Sparkles, Scale, Layers, Gauge, CheckCircle2 } from "lucide-react";

export default function JoinOrderCostOptimizerStudio() {
  const [selectedFilter, setSelectedFilter] = useState("filter_docgia");

  // Scenarios:
  // 1. Filter DocGia (diachi = 'TP.HCM' -> only 5% of readers)
  //    Best Order: (DocGia' |><| Muon) |><| Sach
  // 2. Filter Sach (tennxb = 'NXB Tre' -> only 2% of books)
  //    Best Order: (Sach' |><| Muon) |><| DocGia

  const scenarios = {
    filter_docgia: {
      title: "Kịch bản 1: Có điều kiện lọc trên Độc Giả (diachi = 'TP.HCM')",
      filterDesc: "Độc giả ở TP.HCM chỉ chiếm 5% tổng số độc giả trong hệ thống.",
      planA: {
        name: "Kế hoạch A: (DocGia' ⋈ Muon) ⋈ Sach",
        intermediateRows: 500,
        costScore: "Chi phí: 1.200 I/O (TỐI ƯU NHẤT)",
        isBest: true,
        reason: "Lọc DocGia trước (chỉ còn 5% dữ liệu) ➔ Kết nối với Muon chỉ sinh ra 500 dòng trung gian trước khi nối với Sach."
      },
      planB: {
        name: "Kế hoạch B: (Sach ⋈ Muon) ⋈ DocGia'",
        intermediateRows: 50000,
        costScore: "Chi phí: 45.000 I/O (KÉM HIỆU QUẢ)",
        isBest: false,
        reason: "Nối toàn bộ bảng Sach với toàn bộ bảng Muon trước ➔ Sinh ra 50.000 dòng trung gian rồi mới đem lọc theo DocGia!"
      }
    },
    filter_sach: {
      title: "Kịch bản 2: Có điều kiện lọc trên Sách (tensach = 'Thế giới phẳng')",
      filterDesc: "Chỉ có 1 đầu sách duy nhất thỏa mãn tên sách này.",
      planA: {
        name: "Kế hoạch A: (Sach' ⋈ Muon) ⋈ DocGia",
        intermediateRows: 20,
        costScore: "Chi phí: 80 I/O (TỐI ƯU NHẤT)",
        isBest: true,
        reason: "Lọc Sach trước (chỉ còn đúng 1 quyển) ➔ Nối với Muon chỉ sinh ra ~20 lượt mượn của cuốn sách này ➔ Nối với DocGia tức thì!"
      },
      planB: {
        name: "Kế hoạch B: (DocGia ⋈ Muon) ⋈ Sach'",
        intermediateRows: 50000,
        costScore: "Chi phí: 42.000 I/O (KÉM HIỆU QUẢ)",
        isBest: false,
        reason: "Nối toàn bộ độc giả với toàn bộ lượt mượn trước ➔ Sinh ra 50.000 dòng trung gian khổng lồ."
      }
    }
  };

  const curr = scenarios[selectedFilter];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <GitMerge className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">JoinOrderCostOptimizerStudio</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Tối Ưu Thứ Tự Phép Nối (Join Ordering)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng sự khác biệt chi phí I/O khi hoán đổi thứ tự thực hiện các phép kết nối theo Luật L2
            </p>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="flex rounded-xl bg-amber-100/80 p-1 border border-amber-200">
          <button
            onClick={() => setSelectedFilter("filter_docgia")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedFilter === "filter_docgia" ? "bg-amber-600 text-white shadow-sm" : "text-amber-900 hover:text-amber-700"
            }`}
          >
            Lọc Độc Giả TP.HCM
          </button>
          <button
            onClick={() => setSelectedFilter("filter_sach")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedFilter === "filter_sach" ? "bg-amber-600 text-white shadow-sm" : "text-amber-900 hover:text-amber-700"
            }`}
          >
            Lọc Sách &quot;Thế Giới Phẳng&quot;
          </button>
        </div>
      </div>

      {/* Scenario Title */}
      <div className="mt-5 rounded-xl bg-amber-50/70 border border-amber-200 p-4 font-mono text-xs text-amber-950 space-y-1">
        <div><strong>{curr.title}</strong></div>
        <div className="text-gray-700 font-sans">{curr.filterDesc}</div>
      </div>

      {/* Plans Comparison Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        {/* Plan A */}
        <div className={`rounded-2xl border p-5 shadow-sm space-y-3 ${
          curr.planA.isBest ? "border-emerald-300 bg-emerald-50/40" : "border-gray-200 bg-white"
        }`}>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="font-bold text-xs text-gray-900 font-sans">{curr.planA.name}</span>
            {curr.planA.isBest && (
              <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">
                TỐI ƯU NHẤT ✓
              </span>
            )}
          </div>

          <div className="space-y-1 text-gray-700 font-sans text-xs">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-bold text-emerald-700">
                {curr.planA.intermediateRows.toLocaleString()}
              </span>
              <span className="text-gray-500 text-[11px]">dòng trung gian</span>
            </div>
            <p className="font-mono text-xs font-bold text-emerald-900">{curr.planA.costScore}</p>
          </div>

          <p className="text-gray-600 font-sans text-xs leading-relaxed border-t border-gray-100 pt-2">
            {curr.planA.reason}
          </p>
        </div>

        {/* Plan B */}
        <div className={`rounded-2xl border p-5 shadow-sm space-y-3 ${
          !curr.planB.isBest ? "border-red-200 bg-red-50/30" : "border-gray-200 bg-white"
        }`}>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="font-bold text-xs text-gray-900 font-sans">{curr.planB.name}</span>
            <span className="text-[10px] font-bold bg-red-100 text-red-900 px-2 py-0.5 rounded border border-red-200">
              LÃNG PHÍ I/O ✗
            </span>
          </div>

          <div className="space-y-1 text-gray-700 font-sans text-xs">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-bold text-red-700">
                {curr.planB.intermediateRows.toLocaleString()}
              </span>
              <span className="text-gray-500 text-[11px]">dòng trung gian</span>
            </div>
            <p className="font-mono text-xs font-bold text-red-900">{curr.planB.costScore}</p>
          </div>

          <p className="text-gray-600 font-sans text-xs leading-relaxed border-t border-gray-100 pt-2">
            {curr.planB.reason}
          </p>
        </div>
      </div>
    </div>
  );
}
