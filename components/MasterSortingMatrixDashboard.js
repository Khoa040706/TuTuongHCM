"use client";

import React, { useState } from "react";
import {
  Scale,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  HardDrive,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Info,
  Filter
} from "lucide-react";

export default function MasterSortingMatrixDashboard() {
  const [filterMode, setFilterMode] = useState("all"); // "all", "inplace", "stable", "fast"

  const algorithms = [
    {
      id: "selection",
      name: "Selection Sort",
      category: "Comparison",
      worst: "O(n²)",
      best: "O(n²)",
      inplace: true,
      stable: false,
      note: "Luôn đúng (n-1) swaps. Tối ưu khi phép ghi bộ nhớ đắt."
    },
    {
      id: "insertion",
      name: "Insertion Sort",
      category: "Comparison",
      worst: "O(n²)",
      best: "O(n)",
      inplace: true,
      stable: true,
      note: "Rất nhanh với mảng nhỏ hoặc gần như đã có thứ tự sẵn."
    },
    {
      id: "bubble",
      name: "Bubble Sort (Gốc)",
      category: "Comparison",
      worst: "O(n²)",
      best: "O(n²)",
      inplace: true,
      stable: true,
      note: "Nhiều phép swap, ít dùng trong thực tế, chủ yếu giảng dạy."
    },
    {
      id: "bubble2",
      name: "Bubble Sort (Cải tiến)",
      category: "Comparison",
      worst: "O(n²)",
      best: "O(n)",
      inplace: true,
      stable: true,
      note: "Dùng cờ isSorted dừng sớm sau 1 pass khi mảng đã sorted."
    },
    {
      id: "merge",
      name: "Merge Sort",
      category: "Comparison",
      worst: "O(n log n)",
      best: "O(n log n)",
      inplace: false,
      spaceText: "O(n) RAM",
      stable: true,
      note: "Luôn đảm bảo O(n log n) trong mọi case. Rất phù hợp dữ liệu lớn."
    },
    {
      id: "radix",
      name: "Radix Sort",
      category: "Non-Comparison",
      worst: "O(d × n) ≈ O(n)",
      best: "O(n)",
      inplace: false,
      spaceText: "O(n) RAM",
      stable: true,
      note: "Không so sánh từng cặp! Phá vỡ rào cản Ω(n log n) cho số/chuỗi."
    },
    {
      id: "quick",
      name: "Quick Sort",
      category: "Comparison",
      worst: "O(n²)",
      best: "O(n log n)",
      avg: "O(n log n)",
      inplace: true,
      spaceText: "O(log n) stack",
      stable: false,
      note: "Thực tế chạy nhanh nhất (cache-friendly). In-place."
    }
  ];

  const filteredAlgos = algorithms.filter((algo) => {
    if (filterMode === "inplace") return algo.inplace;
    if (filterMode === "stable") return algo.stable;
    if (filterMode === "fast") return algo.best.includes("log n") || algo.best === "O(n)";
    return true;
  });

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Mục 7.4 — Ma Trận Tổng Kết
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Bảng Tổng Kết Toàn Diện 7 Thuật Toán Sắp Xếp (Master Comparison Matrix)
          </h3>
          <p className="text-xs text-slate-500">
            Tổng hợp độ phức tạp Worst Case, Best Case, tính chất In-Place và Stability của cả 7 giải thuật
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl flex-wrap self-start sm:self-auto">
          <button
            onClick={() => setFilterMode("all")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              filterMode === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
            }`}
          >
            Tất Cả (7)
          </button>
          <button
            onClick={() => setFilterMode("inplace")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              filterMode === "inplace" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-600"
            }`}
          >
            Chỉ In-Place
          </button>
          <button
            onClick={() => setFilterMode("stable")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              filterMode === "stable" ? "bg-blue-600 text-white shadow-xs" : "text-slate-600"
            }`}
          >
            Chỉ Stable
          </button>
          <button
            onClick={() => setFilterMode("fast")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              filterMode === "fast" ? "bg-purple-600 text-white shadow-xs" : "text-slate-600"
            }`}
          >
            Nhanh O(n log n) / O(n)
          </button>
        </div>
      </div>

      {/* Main Master Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="py-3 px-3.5 font-bold">Thuật toán</th>
                <th className="py-3 px-2.5 font-bold">Phân loại</th>
                <th className="py-3 px-2.5 font-bold">Worst Case</th>
                <th className="py-3 px-2.5 font-bold">Best Case</th>
                <th className="py-3 px-2.5 font-bold text-center">In-Place?</th>
                <th className="py-3 px-2.5 font-bold text-center">Stable?</th>
                <th className="py-3 px-3 font-bold">Đặc điểm / Ghi chú</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {filteredAlgos.map((algo) => (
                <tr key={algo.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3 px-3.5 font-bold text-slate-900 flex items-center gap-1.5">
                    {algo.name}
                  </td>
                  <td className="py-3 px-2.5">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        algo.category === "Non-Comparison"
                          ? "bg-pink-100 text-pink-900 border border-pink-300"
                          : "bg-slate-100 text-slate-700 border border-slate-300"
                      }`}
                    >
                      {algo.category}
                    </span>
                  </td>
                  <td className="py-3 px-2.5 font-black text-rose-700">{algo.worst}</td>
                  <td className="py-3 px-2.5 font-black text-emerald-700">{algo.best}</td>
                  <td className="py-3 px-2.5 text-center">
                    {algo.inplace ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold text-[10px]">
                        Yes (O(1))
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-bold text-[10px]">
                        No ({algo.spaceText})
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    {algo.stable ? (
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px]">
                        Yes ✓
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">
                        No ❌
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-[11px] font-sans text-slate-600">
                    {algo.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2 Critical Notes From Textbook */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div className="bg-pink-50/80 border border-pink-200 rounded-2xl p-4 text-xs font-sans text-pink-950 space-y-1.5">
          <h4 className="font-bold text-pink-900 text-sm flex items-center gap-1.5">
            <Info className="w-4 h-4 text-pink-600" />
            Ghi Chú 1: Bí Mật Tốc Độ Tuyến Tính Của Radix Sort
          </h4>
          <p className="leading-relaxed text-xs">
            Độ phức tạp <strong>$O(n)$</strong> của Radix Sort có được là vì đây là thuật toán <strong>non-comparison based sort</strong> (không so sánh từng cặp, mà phân phối vào các thùng cơ số).
          </p>
        </div>

        <div className="bg-indigo-50/80 border border-indigo-200 rounded-2xl p-4 text-xs font-sans text-indigo-950 space-y-1.5">
          <h4 className="font-bold text-indigo-900 text-sm flex items-center gap-1.5">
            <Info className="w-4 h-4 text-indigo-600" />
            Ghi Chú 2: Chặn Dưới Của Comparison-Based Sort
          </h4>
          <p className="leading-relaxed text-xs">
            <strong>$O(n \log n)$</strong> là độ phức tạp trường hợp xấu nhất tốt nhất có thể đạt được đối với bất kỳ thuật toán <strong>comparison based sort</strong> nào (đã được chứng minh toán học qua cây quyết định $\Omega(n \log n)$).
          </p>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-purple-50/80 border-2 border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-950">
        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 7):</strong><br/>
          • <strong>In-Place:</strong> Chỉ cần $O(1)$ bộ nhớ phụ. Merge Sort và Radix Sort <strong>không in-place</strong>.<br/>
          • <strong>Stable:</strong> Giữ nguyên thứ tự tương đối của các phần tử bằng key. Selection Sort và Quick Sort <strong>không stable</strong>.<br/>
          • <strong>Ranh giới độ phức tạp:</strong> <code>O(n log n)</code> là chặn dưới tốt nhất cho comparison sort; Radix Sort đạt <code>O(n)</code> vì không dựa vào so sánh.
        </div>
      </div>
    </div>
  );
}
