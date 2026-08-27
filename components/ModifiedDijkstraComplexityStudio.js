"use client";

import React from "react";
import {
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function ModifiedDijkstraComplexityStudio() {
  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 12: Phân Tích Độ Phức Tạp (Modified Dijkstra Analysis)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-sky-950 bg-clip-text text-transparent">
            Tại Sao Có Bản Sao (Duplicate) Mà Vẫn Đạt O((V + E) log V)?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã toán học: Số lượng phần tử trong PriorityQueue tối đa là $E \le V^2$, do đó $\log E = \log(V^2) = 2\log V = O(\log V)$.
          </p>
        </div>

        {/* Global Big-O Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          O((V + E) log V)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left: Extract Min Analysis */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono">
            <span className="text-emerald-950 font-bold uppercase">1. Phần 1: Extract-Min &amp; Lọc Lazy</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold">O(V log V)</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Điều kiện <code>if (d &gt; dist[u]) continue;</code> ngăn các đỉnh đã xử lý bị tính toán lại.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Nếu không có cạnh âm, mỗi đỉnh được xử lý từ PriorityQueue đúng <strong>1 lần duy nhất</strong> (tổng O(V) lần).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mỗi lần trích xuất min tốn <strong>O(log V)</strong> trong binary heap ➔ Tổng: <strong>O(V log V)</strong>.</span>
            </li>
          </ul>
        </div>

        {/* Right: Relax & Duplicate Log Proof */}
        <div className="p-5 rounded-2xl bg-white border border-sky-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono">
            <span className="text-sky-950 font-bold uppercase">2. Phần 2: Re-enqueue &amp; Bản Sao Duplicate</span>
            <span className="px-2 py-0.5 rounded bg-sky-100 border border-sky-300 text-sky-950 font-bold">O(E log V)</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Mỗi lần nới lỏng thành công làm giảm <code>dist[v]</code>, ta re-enqueue cặp mới ➔ Có tối đa <strong>O(E) bản sao</strong> trong PQ.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Kích thước PQ tối đa là <code>E &le; V^2</code>. Khi đó:</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-emerald-950 text-center font-bold text-xs shadow-sm">
            O(log E) = O(log V^2) = 2 · O(log V) = O(log V)!
          </div>

          <p className="text-xs text-slate-700 font-sans leading-relaxed">
            Vì vậy, chi phí mỗi lần insert vào PQ vẫn luôn là <strong>O(log V)</strong> ➔ Tổng: <strong>O(E log V)</strong>.
          </p>
        </div>
      </div>

      {/* Memo Callout */}
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
        <span className="font-bold font-mono text-[11px] text-amber-950 block">
          📌 Cần Nhớ (Phần 12):
        </span>
        <p>
          • Modified Dijkstra vẫn đạt <strong>O((V + E) log V)</strong> dù có thể có duplicate trong PQ (vì <code>O(log E) = O(log V)</code> khi <code>E = O(V^2)</code>).
        </p>
        <p>
          • Độ phức tạp giống hệt bản gốc, nhưng modified có thể xử lý được cạnh âm (miễn không có negative cycle).
        </p>
      </div>
    </div>
  );
}
