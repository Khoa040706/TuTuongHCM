"use client";

import React, { useState } from "react";
import {
  TreePine,
  ArrowRight,
} from "lucide-react";

export default function TreeSsspUniquePathWorkbench() {
  const [selectedQ, setSelectedQ] = useState("q1"); // "q1" | "q2" | "q3"

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <TreePine className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 3: Special Case 1 — Đồ Thị Trọng Số Là 1 Tree (Cây)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Đồ Thị Cây: Đường Đi Duy Nhất &amp; Độ Phức Tạp Tuyệt Đối O(V)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã 3 câu hỏi cốt tử Q1, Q2, Q3 trong giáo trình và tại sao cả DFS lẫn BFS đều giải quyết hoàn hảo SSSP trên đồ thị cây.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Thời Gian: O(V) • DFS hoặc BFS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Q1, Q2, Q3 Selector (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Giải Mã 3 Câu Hỏi Cốt Tử Trong Slide</span>
            <span className="text-amber-950 font-bold">Q1 • Q2 • Q3</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <button
              onClick={() => setSelectedQ("q1")}
              className={`w-full p-3 rounded-xl border text-left font-bold transition-all flex items-center justify-between shadow-sm ${
                selectedQ === "q1"
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>Q1: Vì sao mọi path trong cây đều là Shortest Path?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setSelectedQ("q2")}
              className={`w-full p-3 rounded-xl border text-left font-bold transition-all flex items-center justify-between shadow-sm ${
                selectedQ === "q2"
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>Q2: Vì sao cây không bao giờ có Negative Cycle?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setSelectedQ("q3")}
              className={`w-full p-3 rounded-xl border text-left font-bold transition-all flex items-center justify-between shadow-sm ${
                selectedQ === "q3"
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>Q3: Vì sao độ phức tạp là O(V) thay vì O(V+E)?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans space-y-2 leading-relaxed text-slate-700 shadow-sm">
            {selectedQ === "q1" && (
              <>
                <span className="text-emerald-950 font-mono font-bold block text-[11px] uppercase">
                  💡 Trả Lời Q1 (Unique Path Property):
                </span>
                <p>
                  Theo định nghĩa hình học đồ thị, một cây có <code>E = V - 1</code> cạnh. Giữa 2 đỉnh bất kỳ trong cây chỉ tồn tại <strong>DUY NHẤT 1 đường đi đơn (unique path)</strong>. Vì không có con đường nào khác để so sánh, nên con đường duy nhất đó hiển nhiên chính là đường đi ngắn nhất!
                </p>
              </>
            )}

            {selectedQ === "q2" && (
              <>
                <span className="text-emerald-950 font-mono font-bold block text-[11px] uppercase">
                  💡 Trả Lời Q2 (Acyclic Immunity):
                </span>
                <p>
                  Cây là một đồ thị liên thông <strong>không chứa bất kỳ chu trình nào (Acyclic)</strong>. Vì không có chu trình, đồ thị cây hoàn toàn <strong>miễn nhiễm trước Negative Weight Cycle</strong>. Ngay cả khi ta gán trọng số âm cho một số cạnh trong cây, kết quả đường đi ngắn nhất vẫn không bị ảnh hưởng!
                </p>
              </>
            )}

            {selectedQ === "q3" && (
              <>
                <span className="text-emerald-950 font-mono font-bold block text-[11px] uppercase">
                  💡 Trả Lời Q3 (Complexity Reduction):
                </span>
                <p>
                  Một thuật toán duyệt đồ thị tiêu chuẩn (DFS hoặc BFS) tốn <code>O(V + E)</code>. Nhưng vì trên đồ thị cây luôn có <code>E = V - 1</code>, nên:
                  <code className="block my-1 font-mono text-emerald-950 font-bold text-xs">O(V + E) = O(V + V - 1) = O(2V - 1) = O(V)!</code>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Right: SVG Tree Graphic & Core Summary (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mô Hình Đồ Thị Cây (V = 5, E = 4)</span>
            <span className="text-emerald-950 font-bold">Tree Model</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 320 160" className="w-full max-w-[300px] h-auto select-none">
              {/* Edges */}
              <line x1="160" y1="30" x2="90" y2="85" stroke="#10b981" strokeWidth="2.5" />
              <text x="115" y="50" fill="#047857" fontSize="10" fontWeight="bold" fontFamily="monospace">w=3</text>

              <line x1="160" y1="30" x2="230" y2="85" stroke="#10b981" strokeWidth="2.5" />
              <text x="200" y="50" fill="#047857" fontSize="10" fontWeight="bold" fontFamily="monospace">w=-2</text>

              <line x1="90" y1="85" x2="50" y2="135" stroke="#10b981" strokeWidth="2.5" />
              <text x="60" y="115" fill="#047857" fontSize="10" fontWeight="bold" fontFamily="monospace">w=5</text>

              <line x1="90" y1="85" x2="130" y2="135" stroke="#10b981" strokeWidth="2.5" />
              <text x="120" y="115" fill="#047857" fontSize="10" fontWeight="bold" fontFamily="monospace">w=1</text>

              {/* Nodes */}
              <circle cx="160" cy="30" r="14" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
              <text x="160" y="34" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">0</text>

              <circle cx="90" cy="85" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
              <text x="90" y="89" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>

              <circle cx="230" cy="85" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
              <text x="230" y="89" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">2</text>

              <circle cx="50" cy="135" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
              <text x="50" y="139" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">3</text>

              <circle cx="130" cy="135" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
              <text x="130" y="139" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-sans text-emerald-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 3):
            </span>
            <p>
              • Tree: <code>E = V - 1</code> ➔ Mọi path là duy nhất và cũng là shortest path.
            </p>
            <p>
              • Cây không thể có chu trình ➔ Không bao giờ có negative weight cycle.
            </p>
            <p>
              • Dùng <strong>DFS hoặc BFS</strong>, độ phức tạp đạt tối ưu tuyệt đối <strong>O(V)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
