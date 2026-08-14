"use client";

import React, { useState } from "react";
import { TrendingUp, AlertTriangle, Zap, Flame, Sparkles, HelpCircle, Shield } from "lucide-react";

export default function GrowthRateComparisonTable() {
  const [hoveredCell, setHoveredCell] = useState(null);

  const orderChain = [
    { name: "O(1)", label: "Constant", color: "bg-emerald-100 text-emerald-800 border-emerald-300" },
    { name: "O(log n)", label: "Logarithmic", color: "bg-teal-100 text-teal-800 border-teal-300" },
    { name: "O(n)", label: "Linear", color: "bg-blue-100 text-blue-800 border-blue-300" },
    { name: "O(n log n)", label: "Linearithmic", color: "bg-indigo-100 text-indigo-800 border-indigo-300" },
    { name: "O(n²)", label: "Quadratic", color: "bg-amber-100 text-amber-800 border-amber-300" },
    { name: "O(n³)", label: "Cubic", color: "bg-orange-100 text-orange-800 border-orange-300" },
    { name: "O(2ⁿ)", label: "Exponential", color: "bg-rose-100 text-rose-800 border-rose-300" }
  ];

  const tableData = [
    {
      func: "1",
      name: "Constant (Hằng số)",
      values: ["1", "1", "1", "1", "1", "1"],
      badge: "Siêu nhanh",
      heat: ["emerald", "emerald", "emerald", "emerald", "emerald", "emerald"],
      tooltip: "Thời gian không đổi bất kể kích thước input n lớn bao nhiêu."
    },
    {
      func: "log₂ n",
      name: "Logarithmic (Logarit)",
      values: ["3", "6", "9", "13", "16", "19"],
      badge: "Rất nhanh",
      heat: ["emerald", "emerald", "emerald", "teal", "teal", "teal"],
      tooltip: "Với n = 1 triệu phần tử, chỉ cần tối đa khoảng 20 phép so sánh!"
    },
    {
      func: "n",
      name: "Linear (Tuyến tính)",
      values: ["10", "10² (100)", "10³ (1K)", "10⁴ (10K)", "10⁵ (100K)", "10⁶ (1M)"],
      badge: "Chuẩn mực",
      heat: ["teal", "teal", "blue", "blue", "blue", "blue"],
      tooltip: "Thời gian tăng tỷ lệ thuận 1:1 với kích thước dữ liệu đầu vào."
    },
    {
      func: "n · log₂ n",
      name: "Linearithmic",
      values: ["30", "664", "9,965", "10⁵", "10⁶", "10⁷"],
      badge: "Tối ưu sắp xếp",
      heat: ["blue", "indigo", "indigo", "indigo", "indigo", "indigo"],
      tooltip: "Chuẩn mực tối ưu cho các thuật toán sắp xếp so sánh (Merge Sort, Quick Sort)."
    },
    {
      func: "n²",
      name: "Quadratic (Bậc 2)",
      values: ["10²", "10⁴", "10⁶", "10⁸", "10¹⁰", "10¹²"],
      badge: "Bắt đầu chậm",
      heat: ["indigo", "amber", "amber", "orange", "orange", "rose"],
      tooltip: "Nested loop 2 cấp. Khi n = 1 triệu, cần 10¹² phép tính (bắt đầu nghẽn nặng)."
    },
    {
      func: "n³",
      name: "Cubic (Bậc 3)",
      values: ["10³", "10⁶", "10⁹", "10¹²", "10¹⁵", "10¹⁸"],
      badge: "Rất chậm",
      heat: ["amber", "orange", "rose", "rose", "purple", "purple"],
      tooltip: "Nested loop 3 cấp hoặc nhân ma trận cơ bản. Khi n = 1 triệu cần 10¹⁸ phép tính!"
    },
    {
      func: "2ⁿ",
      name: "Exponential (Cấp số nhân)",
      values: ["10³", "10³⁰", "10³⁰¹", "10³,⁰¹⁰", "10³⁰,¹⁰³", "10³⁰¹,⁰³⁰"],
      badge: "Bùng nổ thời gian",
      heat: ["orange", "rose", "purple", "purple", "purple", "purple"],
      tooltip: "Khi n = 1,000, 2ⁿ ≈ 10³⁰¹ — con số này vượt xa toàn bộ số nguyên tử trong vũ trụ!"
    }
  ];

  const getHeatClass = (heat) => {
    switch (heat) {
      case "emerald":
        return "bg-emerald-50 text-emerald-800 font-bold";
      case "teal":
        return "bg-teal-50 text-teal-800 font-bold";
      case "blue":
        return "bg-blue-50 text-blue-800 font-bold";
      case "indigo":
        return "bg-indigo-50 text-indigo-800 font-bold";
      case "amber":
        return "bg-amber-50 text-amber-900 font-bold";
      case "orange":
        return "bg-orange-50 text-orange-950 font-bold";
      case "rose":
        return "bg-rose-100 text-rose-950 font-black";
      case "purple":
        return "bg-rose-200 text-rose-950 font-black border border-rose-300";
      default:
        return "bg-slate-50 text-slate-800";
    }
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 4.5 &amp; 4.9 — Bảng Tra Cứu Tốc Độ Tăng Trưởng
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Thứ Tự Growth Terms &amp; Ma Trận So Sánh Tốc Độ (Order-of-Magnitude)
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát sự bùng nổ số lượng phép toán từ <code>n = 10</code> đến <code>n = 1,000,000</code>
          </p>
        </div>

        <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Zap className="w-3.5 h-3.5 text-teal-600" />
          Fastest ➔ Slowest
        </div>
      </div>

      {/* Order of Magnitude Chain */}
      <div className="mb-6 bg-slate-50/90 text-slate-800 rounded-3xl p-5 border border-slate-200 shadow-sm">
        <span className="text-xs font-mono text-slate-600 block mb-3 font-bold uppercase">
          Chuỗi thứ tự tăng trưởng phổ biến (Từ nhanh nhất đến chậm nhất):
        </span>
        <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
          {orderChain.map((item, idx) => (
            <React.Fragment key={item.name}>
              <div className={`flex flex-col items-center px-3.5 py-2 rounded-2xl border shadow-xs ${item.color}`}>
                <span className="font-mono font-black text-sm">{item.name}</span>
                <span className="text-[10px] font-sans font-semibold opacity-80">{item.label}</span>
              </div>
              {idx < orderChain.length - 1 && <span className="text-slate-400 font-black text-sm">&lt;</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-3.5 pt-3 border-t border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Lưu ý về Logarit:</strong> Trong Big O, <code>log n (cơ số 2) = log₁₀ n = ln n</code> — tất cả đều tương đương vì chỉ khác nhau một hằng số nhân <code>(log_a n = log_b n / log_b a)</code>.
          </span>
        </div>
      </div>

      {/* Comprehensive Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="py-3 px-3.5 font-bold">Hàm f(n)</th>
                <th className="py-3 px-3 text-center">n = 10</th>
                <th className="py-3 px-3 text-center">n = 100</th>
                <th className="py-3 px-3 text-center">n = 1,000</th>
                <th className="py-3 px-3 text-center">n = 10,000</th>
                <th className="py-3 px-3 text-center">n = 100,000</th>
                <th className="py-3 px-3 text-center">n = 1,000,000</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tableData.map((row, rIdx) => (
                <tr
                  key={row.func}
                  onMouseEnter={() => setHoveredCell(row)}
                  onMouseLeave={() => setHoveredCell(null)}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-2.5 px-3.5">
                    <div className="flex items-center gap-2">
                      <strong className="text-slate-900 font-mono text-sm">{row.func}</strong>
                      <span className="text-[10px] text-slate-500 font-sans hidden sm:inline">
                        ({row.name})
                      </span>
                    </div>
                  </td>
                  {row.values.map((val, cIdx) => (
                    <td key={cIdx} className="py-2.5 px-2 text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded-lg text-xs ${getHeatClass(
                          row.heat[cIdx]
                        )}`}
                      >
                        {val}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tooltip & Graphical Observation Note */}
      {hoveredCell ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-3.5 text-xs text-teal-950 font-sans animate-fadeIn flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
          <div>
            <strong>{hoveredCell.name} ({hoveredCell.func}):</strong> {hoveredCell.tooltip}
          </div>
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-600 font-sans flex items-center gap-2.5">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            <strong>Dạng đồ thị (Graphical form):</strong> Các đường <code>2ⁿ</code>, <code>n³</code>, <code>n²</code> tăng dốc đứng; đường <code>n·log₂ n</code> tăng gần tuyến tính; đường <code>n</code> và <code>log₂ n</code> tăng rất chậm và phẳng.
          </span>
        </div>
      )}
    </div>
  );
}
