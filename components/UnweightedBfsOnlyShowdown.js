"use client";

import React from "react";
import {
  GitCommit,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function UnweightedBfsOnlyShowdown() {
  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <GitCommit className="w-3.5 h-3.5 text-sky-700" />
            <span>Phần 4: Special Case 2 — Đồ Thị Không Trọng Số (Unweighted)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-teal-950 to-emerald-950 bg-clip-text text-transparent">
            Đồ Thị Unweighted: Vì Sao Chỉ Dùng Được BFS Mà DFS Thất Bại?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Phân tích ranh giới cốt tử giữa Đồ thị Cây (dùng cả DFS/BFS) và Đồ thị Không Trọng Số tổng quát (bắt buộc chỉ dùng BFS).
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Thời Gian: O(V + E) • CHỈ DÙNG BFS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
        {/* Left: Tree vs Unweighted Duel */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
          <span className="text-[10px] font-mono text-sky-950 font-bold uppercase block">
            ⚖️ SO SÁNH ĐỐI CHIẾU SỐNG CÒN (TREE VS UNWEIGHTED GRAPH):
          </span>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1.5 text-emerald-950 shadow-sm">
            <div className="flex items-center gap-1.5 font-mono font-bold text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1. SSSP Trên Đồ Thị Cây (Tree):</span>
            </div>
            <p className="leading-relaxed text-slate-700">
              • Dùng được <strong>CẢ DFS VÀ BFS</strong> (vì giữa 2 đỉnh chỉ có đúng 1 đường đi duy nhất, DFS hay BFS đi kiểu gì cũng tới đích qua đúng con đường đó).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 space-y-1.5 text-rose-950 shadow-sm">
            <div className="flex items-center gap-1.5 font-mono font-bold text-rose-950">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>2. SSSP Trên Đồ Thị Unweighted Tổng Quát:</span>
            </div>
            <p className="leading-relaxed text-slate-700">
              • <strong>CHỈ CÓ THỂ DÙNG BFS!</strong> DFS sẽ thất bại vì cơ chế đi sâu (Depth-First) có thể dẫn thuật toán đi vào một con đường vòng ngoằn ngoèo có tới 5-6 cạnh trước khi tìm thấy đích, trong khi cạnh trực tiếp chỉ tốn đúng 1 bước nhảy!
            </p>
          </div>
        </div>

        {/* Right: BFS Spanning Tree & Core Memo */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
          <span className="text-[10px] font-mono text-amber-950 font-bold uppercase block">
            🌟 NGUYÊN LÝ HOẠT ĐỘNG CỦA BFS TRÊN UNWEIGHTED GRAPH:
          </span>

          <p className="text-slate-700 leading-relaxed">
            • Khi mọi cạnh có trọng số bằng 1 (hoặc hằng số như nhau), SSSP tương đương với bài toán tìm <strong>số cạnh ít nhất (minimum hops)</strong> từ nguồn <em>s</em>.
          </p>

          <p className="text-slate-700 leading-relaxed">
            • Cấu trúc hàng đợi FIFO Queue của BFS duyệt đỉnh theo từng lớp khoảng cách (lớp 1 hop, lớp 2 hops, lớp 3 hops...). Vì vậy lần đầu tiên một đỉnh được thăm chắc chắn là qua đường đi ngắn nhất ⟹ <strong>BFS Spanning Tree chính là Shortest Paths Spanning Tree!</strong>
          </p>

          <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-300 text-xs text-sky-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 4):
            </span>
            <p>
              • Unweighted graph ➔ <strong>CHỈ DÙNG ĐƯỢC BFS</strong> (không dùng DFS được, khác với trường hợp Tree).
            </p>
            <p>
              • Độ phức tạp: <strong>O(V + E)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
