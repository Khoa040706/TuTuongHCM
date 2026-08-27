"use client";

import React, { useState } from "react";
import {
  Swords,
} from "lucide-react";

export default function PrimVsKruskalDecisionMatrixDuel() {
  const [selectedCase, setSelectedCase] = useState("sparse");

  const cases = {
    sparse: {
      title: "1. Đồ Thị Thưa (Sparse Graph: E ≈ V)",
      recommendation: "Kruskal's Algorithm 🌲",
      why: "Kruskal sắp xếp E cạnh trong O(E log E) ≈ O(V log V) cực kỳ nhanh chóng. Cấu trúc Edge List đơn giản, ít phụ thuộc vào bộ nhớ danh sách kề.",
      winner: "kruskal",
    },
    dense: {
      title: "2. Đồ Thị Dày Đặc (Dense Graph: E ≈ V²)",
      recommendation: "Prim's Algorithm (với Ma Trận Kề) 🌿",
      why: "Prim cài đặt với mảng đơn giản (không dùng Heap) chỉ tốn O(V²), trong khi Kruskal phải sắp xếp tới V² log(V²) cạnh!",
      winner: "prim",
    },
    disconnected: {
      title: "3. Đồ Thị Rời Rạc (Nhiều Thành Phần Liên Thông)",
      recommendation: "Kruskal's Algorithm (Tự Động Tạo MSF) 🌲",
      why: "Kruskal tự động tạo Rừng cây khung nhỏ nhất (Minimum Spanning Forest) trên toàn bộ đồ thị mà không cần can thiệp vòng lặp phụ.",
      winner: "kruskal",
    },
  };

  const cur = cases[selectedCase];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Swords className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phần 6.1: Nên Chọn Thuật Toán Nào? (Decision Matrix)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-sky-950 to-emerald-950 bg-clip-text text-transparent">
            Ma Trận Ra Quyết Định Thực Chiến: Prim's vs Kruskal's
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cả 2 thuật toán đều đúng và đều chạy trong thời gian đa thức gần tương đương $O(E \log V)$ &mdash; Lựa chọn tối ưu phụ thuộc vào cấu trúc đồ thị.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Đều O(E log V)
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          { id: "sparse", label: "Đồ Thị Thưa (E ≈ V)" },
          { id: "dense", label: "Đồ Thị Dày (E ≈ V²)" },
          { id: "disconnected", label: "Đồ Thị Rời Rạc (MSF)" },
        ].map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCase(c.id)}
            className={`p-3.5 rounded-2xl border text-xs font-mono font-bold transition-all text-left shadow-sm ${
              selectedCase === c.id
                ? "bg-indigo-100 border-indigo-400 text-indigo-950 ring-2 ring-indigo-400/30"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Recommendation Card */}
      <div className="p-5 rounded-2xl bg-white border border-indigo-100 space-y-3 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <span className="text-xs font-mono text-slate-600 font-semibold">{cur.title}</span>
          <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-extrabold border shadow-sm ${
            cur.winner === "kruskal"
              ? "bg-emerald-100 border-emerald-300 text-emerald-950"
              : "bg-amber-100 border-amber-300 text-amber-950"
          }`}>
            Khuyến Nghị: {cur.recommendation}
          </span>
        </div>

        <p className="text-xs text-slate-700 font-sans leading-relaxed">
          {cur.why}
        </p>
      </div>

      {/* Side-by-side Criteria Matrix */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-slate-50 text-slate-700 font-mono text-[11px] border-b border-slate-200">
            <tr>
              <th className="p-3">Đặc Tính Kỹ Thuật</th>
              <th className="p-3 text-amber-950 font-bold">Prim's Algorithm</th>
              <th className="p-3 text-emerald-950 font-bold">Kruskal's Algorithm</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="p-3 font-bold text-slate-800 font-mono">Triết lý mở rộng</td>
              <td className="p-3 text-amber-900 font-mono font-bold">Hướng đỉnh (Vertex-centric)</td>
              <td className="p-3 text-emerald-900 font-mono font-bold">Hướng cạnh (Edge-centric)</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800 font-mono">Cấu trúc dữ liệu</td>
              <td className="p-3 font-mono">PriorityQueue (Min-Heap) + taken[]</td>
              <td className="p-3 font-mono">EdgeList + Union-Find (UFDS)</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800 font-mono">Trạng thái trung gian</td>
              <td className="p-3">Duy nhất 1 cây lớn dần từ nguồn s</td>
              <td className="p-3">Rừng cây rời rạc kết nối gộp dần</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-800 font-mono">Chứng minh tính đúng</td>
              <td className="p-3 font-mono">Exchange Argument (Thay thế cạnh)</td>
              <td className="p-3 font-mono">Loop Invariant (Bất biến vòng lặp)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
