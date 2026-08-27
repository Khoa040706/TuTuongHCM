"use client";

import React, { useState } from "react";
import { Table, ShieldCheck, CheckCircle2, XCircle, Sparkles, Award, Quote } from "lucide-react";

export default function NormalFormsComparisonMatrixStudio() {
  const [highlightRow, setHighlightRow] = useState(null);

  const matrixData = [
    {
      id: 1,
      rule: "Thuộc tính không khóa phụ thuộc vào tập con thực sự của khóa (Phụ thuộc bộ phận)",
      nf2: "CẤM (✗)",
      nf3: "CẤM (✗)",
      bcnf: "CẤM (✗)",
      note: "Cả 3 dạng chuẩn đều cấm triệt để phụ thuộc bộ phận."
    },
    {
      id: 2,
      rule: "Thuộc tính không khóa phụ thuộc vào tập khác tập con của khóa (Phụ thuộc bắc cầu)",
      nf2: "CHO PHÉP (✓)",
      nf3: "CẤM (✗)",
      bcnf: "CẤM (✗)",
      note: "2NF chưa khử được bắc cầu; 3NF và BCNF cấm hoàn toàn."
    },
    {
      id: 3,
      rule: "Thuộc tính khóa phụ thuộc vào tập không phải siêu khóa (Khóa chồng lấn / Overlapping Keys)",
      nf2: "CHO PHÉP (✓)",
      nf3: "CHO PHÉP (✓)",
      bcnf: "CẤM (✗)",
      note: "Điểm khác biệt cốt lõi nhất giữa 3NF và BCNF! 3NF nới lỏng cho thuộc tính khóa, BCNF cấm tuyệt đối."
    },
    {
      id: 4,
      rule: "Thuộc tính khóa và không khóa phụ thuộc trực tiếp đầy đủ vào khóa chính",
      nf2: "CHO PHÉP (✓)",
      nf3: "CHO PHÉP (✓)",
      bcnf: "CHO PHÉP (✓)",
      note: "Trạng thái lý tưởng nhất mà mọi dạng chuẩn đều hướng tới."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Table className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">NormalFormsComparisonMatrixStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Ma Trận So Sánh 2NF vs 3NF vs BCNF
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bảng ma trận đối sánh quyền phụ thuộc hàm và châm ngôn vàng của E.F. Codd
            </p>
          </div>
        </div>
      </div>

      {/* Codd's Famous Mnemonic Box */}
      <div className="mt-5 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-4 text-white shadow-md space-y-2">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
          <Quote className="h-4 w-4" />
          <span>CÂU GHI NHỚ KINH ĐIỂN CỦA EDGAR F. CODD &amp; BILL KENT:</span>
        </div>
        <p className="font-mono text-xs sm:text-sm font-extrabold italic text-amber-100 pl-4 border-l-2 border-amber-400">
          &ldquo;Every non-key attribute must provide a fact about The Key, the Whole Key, and Nothing but the Key, so help me Codd!&rdquo;
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <strong className="text-cyan-300 block">1. The Key &rarr; 1NF</strong>
            <span className="text-gray-200 text-[10px] font-sans">Mọi bản ghi phải có khóa định danh duy nhất.</span>
          </div>
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <strong className="text-emerald-300 block">2. The Whole Key &rarr; 2NF</strong>
            <span className="text-gray-200 text-[10px] font-sans">Phụ thuộc toàn bộ khóa, không phụ thuộc một phần.</span>
          </div>
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <strong className="text-amber-300 block">3. Nothing but the Key &rarr; 3NF / BCNF</strong>
            <span className="text-gray-200 text-[10px] font-sans">Chỉ phụ thuộc khóa, không phụ thuộc thuộc tính khác.</span>
          </div>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="mt-5 overflow-x-auto rounded-xl border border-indigo-200 bg-white shadow-sm font-mono text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-50/80 text-indigo-950 font-sans border-b border-indigo-200">
              <th className="p-3">Quy Tắc Phụ Thuộc Hàm</th>
              <th className="p-3 text-center border-l border-indigo-200 w-24">2NF</th>
              <th className="p-3 text-center border-l border-indigo-200 w-24">3NF</th>
              <th className="p-3 text-center border-l border-indigo-200 w-24">BCNF</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {matrixData.map((row) => (
              <tr
                key={row.id}
                onMouseEnter={() => setHighlightRow(row.id)}
                onMouseLeave={() => setHighlightRow(null)}
                className={`transition-colors ${
                  highlightRow === row.id ? "bg-indigo-50/50" : "hover:bg-gray-50/60"
                }`}
              >
                <td className="p-3 font-sans text-gray-800">
                  <div className="font-semibold text-xs text-gray-900">{row.rule}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{row.note}</div>
                </td>
                <td className="p-3 text-center font-bold border-l border-gray-100">
                  <span className={`px-2 py-0.5 rounded text-[11px] ${
                    row.nf2.includes("CẤM") ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {row.nf2}
                  </span>
                </td>
                <td className="p-3 text-center font-bold border-l border-gray-100">
                  <span className={`px-2 py-0.5 rounded text-[11px] ${
                    row.nf3.includes("CẤM") ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {row.nf3}
                  </span>
                </td>
                <td className="p-3 text-center font-bold border-l border-gray-100">
                  <span className={`px-2 py-0.5 rounded text-[11px] ${
                    row.bcnf.includes("CẤM") ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {row.bcnf}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
