"use client";

import React, { useState } from "react";
import {
  Scale,
} from "lucide-react";

export default function SpanningTreeVsMstDuelStudio() {
  const [selectedTree, setSelectedTree] = useState("mst"); // "suboptimal" | "mst"

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            <span>Phần 2.2 &amp; 2.4: Định Nghĩa Toán Học &amp; Ví Dụ Minh Họa Slide</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-teal-950 to-emerald-950 bg-clip-text text-transparent">
            So Sánh Cây Khung Thường (20) vs Cây Khung Nhỏ Nhất MST (18)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải phẫu công thức toán học $w(ST) = \sum w(a, b)$ và tái hiện chính xác ví dụ slide đối chiếu 2 cây khung trên cùng một đồ thị.
          </p>
        </div>

        {/* Tree Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedTree("suboptimal")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTree === "suboptimal"
                ? "bg-rose-500 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cây Khung Thường (W = 20)
          </button>
          <button
            onClick={() => setSelectedTree("mst")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTree === "mst"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            MST Tối Ưu (W = 18) ⭐
          </button>
        </div>
      </div>

      {/* Top: Formal Mathematical Definitions Box */}
      <div className="p-5 rounded-2xl bg-white border border-amber-200/80 space-y-3 mb-6 shadow-sm">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
          <span>Khung Định Nghĩa Toán Học (Mathematical Foundations)</span>
          <span className="text-amber-950 font-bold">Mục 2.2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1 shadow-sm">
            <span className="text-amber-950 font-mono font-bold text-[11px] block">1. Đồ Thị Có Trọng Số</span>
            <p className="text-slate-700 leading-relaxed">
              Ký hiệu $G(V, E)$, với hàm trọng số $w(a, b): E \to \mathbb{R}$ gán trọng số cho cạnh từ $a$ đến $b$ (khoảng cách, chi phí, thời gian).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1 shadow-sm">
            <span className="text-amber-950 font-mono font-bold text-[11px] block">2. Trọng Số Cây Khung</span>
            <p className="text-slate-700 leading-relaxed">
              Cho $ST$ là cây khung của $G$. Tổng trọng số $w(ST)$ được tính bằng tổng các cạnh trong $ST$:
              <code className="block mt-1 font-mono text-emerald-950 font-bold text-[11px]">w(ST) = Σ w(a, b)</code>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1 shadow-sm">
            <span className="text-amber-950 font-mono font-bold text-[11px] block">3. Định Nghĩa MST</span>
            <p className="text-slate-700 leading-relaxed">
              MST của $G$ là một Spanning Tree của $G$ sao cho $w(ST)$ đạt <strong>giá trị nhỏ nhất có thể</strong> trong toàn bộ các cây khung.
            </p>
          </div>
        </div>
      </div>

      {/* Main Visualizer: Side-by-side or Toggle for Example 20 vs 18 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: SVG Graph (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Đồ Thị 5 Đỉnh [0..4] (Chuẩn Ví Dụ Slide)</span>
            <span className={selectedTree === "mst" ? "text-emerald-950 font-bold" : "text-rose-950 font-bold"}>
              {selectedTree === "mst" ? "w(MST) = 4 + 6 + 6 + 2 = 18" : "w(ST) = 4 + 4 + 6 + 6 = 20"}
            </span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 320 200" className="w-full max-w-[300px] h-auto select-none">
              {/* Edges */}
              {/* 0-1 (wt:4) */}
              <line x1="60" y1="50" x2="160" y2="30" stroke="#d97706" strokeWidth="3.5" />
              <text x="110" y="28" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">4</text>

              {/* 0-2 (wt:4) - Chosen in suboptimal, skipped in MST */}
              <line x1="60" y1="50" x2="60" y2="150" stroke={selectedTree === "suboptimal" ? "#d97706" : "#cbd5e1"} strokeWidth={selectedTree === "suboptimal" ? "3.5" : "1"} />
              <text x="45" y="105" textAnchor="middle" fill={selectedTree === "suboptimal" ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">4</text>

              {/* 1-2 (wt:2) - Chosen in MST, skipped in suboptimal */}
              <line x1="160" y1="30" x2="60" y2="150" stroke={selectedTree === "mst" ? "#059669" : "#cbd5e1"} strokeWidth={selectedTree === "mst" ? "3.5" : "1"} />
              <text x="120" y="105" textAnchor="middle" fill={selectedTree === "mst" ? "#064e3b" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

              {/* 1-3 (wt:6) */}
              <line x1="160" y1="30" x2="260" y2="60" stroke={selectedTree === "mst" ? "#059669" : "#d97706"} strokeWidth="3.5" />
              <text x="215" y="40" textAnchor="middle" fill={selectedTree === "mst" ? "#064e3b" : "#b45309"} fontSize="9" fontWeight="bold" fontFamily="monospace">6</text>

              {/* 2-4 (wt:6) */}
              <line x1="60" y1="150" x2="160" y2="170" stroke={selectedTree === "mst" ? "#059669" : "#d97706"} strokeWidth="3.5" />
              <text x="110" y="175" textAnchor="middle" fill={selectedTree === "mst" ? "#064e3b" : "#b45309"} fontSize="9" fontWeight="bold" fontFamily="monospace">6</text>

              {/* 3-4 (wt:8) - Not chosen */}
              <line x1="260" y1="60" x2="160" y2="170" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3" />
              <text x="220" y="130" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">8</text>

              {/* Nodes */}
              <circle cx="60" cy="50" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
              <text x="60" y="54" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">0</text>

              <circle cx="160" cy="30" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
              <text x="160" y="34" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>

              <circle cx="60" cy="150" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
              <text x="60" y="154" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">2</text>

              <circle cx="260" cy="60" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
              <text x="260" y="64" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">3</text>

              <circle cx="160" cy="170" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
              <text x="160" y="174" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>
        </div>

        {/* Right: Calculations & Conclusion (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Chi Tiết Phép Tính Tổng Trọng Số</span>
            <span className="text-amber-950 font-bold">Ví Dụ Mục 2.4</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600 font-semibold">Các cạnh được chọn:</span>
              <span className="text-amber-950 font-bold">
                {selectedTree === "mst" ? "4 cạnh: (4, 6, 6, 2)" : "4 cạnh: (4, 4, 6, 6)"}
              </span>
            </div>
            <div className="text-sm font-extrabold font-mono text-emerald-950 border-t border-slate-200 pt-2 flex items-center justify-between">
              <span>Tổng chi phí:</span>
              <span className={selectedTree === "mst" ? "text-emerald-900 text-base font-extrabold" : "text-rose-900 text-base font-extrabold"}>
                {selectedTree === "mst" ? "w(MST) = 18" : "w(ST) = 20"}
              </span>
            </div>
          </div>

          <div className="text-xs font-sans text-slate-700 leading-relaxed space-y-1.5">
            <p>
              🌟 <strong>Kết luận từ giáo trình:</strong> Cả 2 cây trên đều là <strong>Spanning Tree hợp lệ</strong> (đều bao phủ hết 5 đỉnh, có đúng 4 cạnh, không chứa chu trình), nhưng <strong>MST (chi phí 18)</strong> có tổng trọng số nhỏ nhất!
            </p>
            <p className="text-slate-500 text-[11px]">
              Đồ thị có thể có <strong>nhiều cây khung</strong> nhưng MST là cây có trọng số cực tiểu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
