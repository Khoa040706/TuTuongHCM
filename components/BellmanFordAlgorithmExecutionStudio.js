"use client";

import React from "react";
import {
  RotateCw,
} from "lucide-react";

export default function BellmanFordAlgorithmExecutionStudio() {
  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <RotateCw className="w-3.5 h-3.5 text-amber-700" />
            <span>Phần 5.1 &amp; 5.2: Khái Niệm &amp; Mã Giả Bellman-Ford SSSP</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-sky-950 to-emerald-950 bg-clip-text text-transparent">
            Thuật Toán Bellman-Ford &amp; Cấu Trúc 2 Vòng Lặp Lồng Nhau O(V · E)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải quyết triệt để SSSP cho đồ thị có trọng số tổng quát (kể cả có cạnh âm) bằng cách nới lỏng toàn bộ $E$ cạnh lặp lại $|V| - 1$ lần.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Thời Gian: O(V · E) • Bộ Nhớ: O(V)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Pseudo Code (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mã Giả Thuật Toán Bellman-Ford (Chuẩn CP3 / CS2010)</span>
            <span className="text-amber-950 font-bold">Mục 5.2</span>
          </div>

          {/* Dark macOS Terminal */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-400">BellmanFord_SSSP.pseudo</span>
            </div>
            <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`BellmanFord-SSSP(s)
  initSSSP(s)                // O(V) ở đây
  for i = 1 to |V| - 1       // Vòng ngoài: O(V)
    for each edge (u, v) in E // Vòng trong: O(E)
      relax(u, v, w_u_v)     // Nới lỏng: O(1)

// Ở cuối thuật toán: D[v] = delta(s, v)
// (nếu không có negative weight cycle)`}
              </code>
            </pre>
          </div>
        </div>

        {/* Right: Complexity Derivation & Core Question (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Phân Tích Độ Phức Tạp Toán Học</span>
            <span className="text-amber-950 font-bold">O(V · E)</span>
          </div>

          <div className="space-y-3 text-xs font-sans text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
              <span className="text-sky-950 font-mono font-bold text-[11px] block">1. Khởi Tạo initSSSP(s)</span>
              <p>Chạy 1 vòng lặp qua $|V|$ đỉnh ⟹ Tốn <strong>O(V)</strong>.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
              <span className="text-amber-950 font-mono font-bold text-[11px] block">2. 2 Vòng Lặp Lồng Nhau</span>
              <p>Vòng ngoài lặp $|V| - 1$ lần, mỗi lần vòng trong duyệt qua toàn bộ $|E|$ cạnh ⟹ Tốn <strong>O(V) &times; O(E) = O(V · E)</strong>.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-emerald-950 shadow-sm">
              <span className="text-emerald-950 font-mono font-bold text-[11px] block font-sans">
                ❓ Câu Hỏi Cốt Tử Của Môn Học:
              </span>
              <p className="leading-relaxed">
                Tại sao chỉ cần <strong>relax tất cả các cạnh đúng V - 1 lần</strong> là chắc chắn mảng $D[v]$ hội tụ về khoảng cách ngắn nhất $\delta(s, v)$?
              </p>
              <span className="text-[11px] text-amber-950 font-bold block pt-1 font-mono">
                ➔ Xem chi tiết 2 Định Lý &amp; Chứng Minh Toán Học ở Phần 6!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
