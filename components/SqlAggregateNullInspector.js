"use client";

import React, { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Terminal,
  Percent,
  Plus,
  RotateCcw
} from "lucide-react";

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
    <div className="my-8 rounded-3xl border border-rose-200/90 bg-gradient-to-br from-rose-50/50 via-white to-orange-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-md shadow-rose-600/25 shrink-0">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                SqlAggregateNullInspector
              </h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200 font-mono">
                Bẫy Giá Trị NULL
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phòng thí nghiệm phân tích hành vi của COUNT(*), COUNT(cột), COUNT(DISTINCT) và AVG khi gặp giá trị NULL
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-xl font-bold border border-rose-200">
            {countBonus}/{countStar} Dòng Hợp Lệ ({(countBonus/countStar*100).toFixed(0)}%)
          </span>
        </div>
      </div>

      {/* Grid: Data Table vs Aggregate Results */}
      <div className="mt-6 grid gap-5 grid-cols-1 xl:grid-cols-12">
        {/* Sample Data Table (5 Cols on XL, full on Laptop) */}
        <div className="xl:col-span-5 rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <span className="font-mono text-xs font-bold text-gray-800">
                Bảng Thử Nghiệm ({rows.length} Nhân viên)
              </span>
              <span className="text-[11px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                2 Dòng NULL
              </span>
            </div>

            <div className="overflow-x-auto max-w-full thin-scrollbar mt-3">
              <table className="w-full text-left font-mono text-xs min-w-[280px]">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                  <tr>
                    <th className="p-2.5">ID</th>
                    <th className="p-2.5">Tên</th>
                    <th className="p-2.5 text-right">Thưởng (Bonus)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rows.map((r) => (
                    <tr key={r.id} className={r.bonus === null ? "bg-rose-50/70" : "hover:bg-gray-50/60"}>
                      <td className="p-2.5 text-gray-500 font-bold">{r.id}</td>
                      <td className="p-2.5 font-bold text-gray-800">{r.name}</td>
                      <td className="p-2.5 text-right">
                        {r.bonus !== null ? (
                          <span className="text-emerald-700 font-bold">{r.bonus.toLocaleString()} VNĐ</span>
                        ) : (
                          <span className="text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded text-[10px]">
                            NULL
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between font-mono">
            <span>Tổng thưởng thô:</span>
            <strong className="text-emerald-700">{sumBonus.toLocaleString()} VNĐ</strong>
          </div>
        </div>

        {/* Aggregate Comparison Bento Cards (7 Cols on XL) */}
        <div className="xl:col-span-7 grid gap-3 grid-cols-1 sm:grid-cols-2">
          {/* COUNT(*) */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-950">COUNT(*)</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-semibold font-mono">Đếm Toàn Bộ</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                Đếm TẤT CẢ các dòng trong bảng (kể cả dòng có NULL).
              </p>
            </div>
            <div className="mt-3 font-mono text-2xl font-black text-blue-700">
              {countStar} <span className="text-xs font-normal text-gray-500">dòng</span>
            </div>
          </div>

          {/* COUNT(bonus) */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-950">COUNT(bonus)</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-semibold font-mono">Bỏ Qua NULL</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                Chỉ đếm các ô có giá trị, tự động BỎ QUA 2 ô NULL.
              </p>
            </div>
            <div className="mt-3 font-mono text-2xl font-black text-emerald-700">
              {countBonus} <span className="text-xs font-normal text-gray-500">dòng</span>
            </div>
          </div>

          {/* COUNT(DISTINCT bonus) */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-950">COUNT(DISTINCT bonus)</span>
                <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded font-semibold font-mono">Khử Trùng</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                Loại bỏ trùng lặp (1000, 2000) và hoàn toàn bỏ qua NULL.
              </p>
            </div>
            <div className="mt-3 font-mono text-2xl font-black text-purple-700">
              {countDistinctBonus} <span className="text-xs font-normal text-gray-500">giá trị</span>
            </div>
          </div>

          {/* AVG(bonus) */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-950">AVG(bonus)</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-semibold font-mono">Chia 3 (Không chia 5!)</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                Tổng 5000 / 3 dòng khác NULL = <strong>1666.7</strong> (KHÔNG chia cho 5!).
              </p>
            </div>
            <div className="mt-3 font-mono text-2xl font-black text-amber-700">
              {avgBonus} <span className="text-xs font-normal text-gray-500">VNĐ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Caution Callout */}
      <div className="mt-5 rounded-2xl border border-rose-300 bg-rose-50/80 p-4 sm:p-5 text-xs text-rose-950 leading-relaxed flex items-start gap-3 shadow-xs">
        <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div>
          <strong className="text-rose-900 font-bold block mb-0.5">Bẫy Đề Thi Cần Nhớ Về Giá Trị NULL:</strong>
          <span>
            Hàm <code>AVG(cột)</code> trong SQL Server không chia cho tổng số dòng của bảng mà chỉ chia cho <strong>số dòng có giá trị khác NULL</strong>. Nếu muốn tính trung bình trên toàn bộ cả nhân viên không có thưởng, bắt buộc phải dùng hàm thay thế NULL: <code>AVG(ISNULL(bonus, 0))</code> = 5000 / 5 = 1000!
          </span>
        </div>
      </div>
    </div>
  );
}
