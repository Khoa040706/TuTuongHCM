"use client";
import React, { useState } from "react";
import { Calculator, AlertTriangle, CheckCircle2, HelpCircle, Sparkles, Terminal } from "lucide-react";

export default function SqlAggregateNullInspector() {
  const [rows, setRows] = useState([
    { id: 1, name: "An", bonus: 1000 },
    { id: 2, name: "Bình", bonus: 2000 },
    { id: 3, name: "Cường", bonus: null },
    { id: 4, name: "Dũng", bonus: 2000 },
    { id: 5, name: "Hạnh", bonus: null }
  ]);

  const countStar = rows.length;
  const nonNullBonuses = rows.filter((r) => r.bonus !== null).map((r) => r.bonus);
  const countBonus = nonNullBonuses.length;
  const distinctBonuses = Array.from(new Set(nonNullBonuses));
  const countDistinctBonus = distinctBonuses.length;
  const sumBonus = nonNullBonuses.reduce((a, b) => a + b, 0);
  const avgBonus = countBonus > 0 ? (sumBonus / countBonus).toFixed(1) : 0;
  const wrongAvgIfDividedByStar = (sumBonus / countStar).toFixed(1);

  return (
    <div className="my-8 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md shadow-rose-600/20">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlAggregateNullInspector</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200">
                NULL Trap Analyzer
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phòng thí nghiệm phân tích hành vi của COUNT(*), COUNT(cột), COUNT(DISTINCT) và AVG khi có giá trị NULL
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Data Table vs Aggregate Results */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {/* Sample Data Table */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="font-mono text-xs font-bold text-gray-700">Bảng Dữ Liệu Thử Nghiệm (5 Nhân viên)</span>
            <span className="text-[11px] text-rose-600 font-bold">Có 2 dòng nhận NULL</span>
          </div>

          <table className="w-full text-left font-mono text-xs mt-3">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <tr>
                <th className="p-2.5">ID</th>
                <th className="p-2.5">Tên</th>
                <th className="p-2.5">Thưởng (Bonus)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((r) => (
                <tr key={r.id} className={r.bonus === null ? "bg-rose-50/70" : "hover:bg-gray-50"}>
                  <td className="p-2.5 text-gray-500">{r.id}</td>
                  <td className="p-2.5 font-bold text-gray-800">{r.name}</td>
                  <td className="p-2.5">
                    {r.bonus !== null ? (
                      <span className="text-emerald-700 font-bold">{r.bonus.toLocaleString()}</span>
                    ) : (
                      <span className="text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded text-[11px]">NULL</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Aggregate Comparison Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* COUNT(*) */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-3.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-blue-950">COUNT(*)</div>
              <div className="text-[11px] text-gray-600 mt-1">Đếm TẤT CẢ các dòng trong bảng (kể cả dòng có NULL).</div>
            </div>
            <div className="mt-3 font-mono text-xl font-black text-blue-700">{countStar} dòng</div>
          </div>

          {/* COUNT(bonus) */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-emerald-950">COUNT(bonus)</div>
              <div className="text-[11px] text-gray-600 mt-1">Tự động BỎ QUA các dòng có giá trị NULL.</div>
            </div>
            <div className="mt-3 font-mono text-xl font-black text-emerald-700">{countBonus} dòng</div>
          </div>

          {/* COUNT(DISTINCT bonus) */}
          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-purple-950">COUNT(DISTINCT bonus)</div>
              <div className="text-[11px] text-gray-600 mt-1">Loại bỏ trùng lặp (1000, 2000) và bỏ qua NULL.</div>
            </div>
            <div className="mt-3 font-mono text-xl font-black text-purple-700">{countDistinctBonus} giá trị</div>
          </div>

          {/* AVG(bonus) */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3.5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-amber-950">AVG(bonus)</div>
              <div className="text-[11px] text-gray-600 mt-1">Tổng 5000 / 3 dòng khác NULL = <strong>1666.7</strong> (KHÔNG chia 5!).</div>
            </div>
            <div className="mt-3 font-mono text-xl font-black text-amber-700">{avgBonus}</div>
          </div>
        </div>
      </div>

      {/* Caution Callout */}
      <div className="mt-5 rounded-xl border border-rose-300 bg-rose-50/70 p-4 text-xs text-rose-950 leading-relaxed">
        <strong>⚠️ Bẫy Đề Thi Cần Nhớ:</strong> Hàm <code>AVG(cột)</code> trong SQL Server không chia cho tổng số dòng của bảng mà chỉ chia cho <strong>số dòng có giá trị khác NULL</strong>. Nếu muốn tính trung bình trên toàn bộ cả nhân viên không có thưởng, bắt buộc phải dùng hàm xử lý NULL: <code>AVG(ISNULL(bonus, 0))</code> = 5000 / 5 = 1000!
      </div>
    </div>
  );
}
