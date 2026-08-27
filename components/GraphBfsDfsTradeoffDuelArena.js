"use client";

import React from "react";
import {
  Swords,
  CheckCircle2,
  XCircle,
  Layers,
  Radio,
} from "lucide-react";

export default function GraphBfsDfsTradeoffDuelArena() {
  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Swords className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phần 4.1: Đấu Trường So Tài Trade-Off Thuật Toán</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-sky-950 to-emerald-950 bg-clip-text text-transparent">
            Đấu Trường Trade-Off Toàn Diện Giữa DFS &amp; BFS
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            So sánh chi tiết ưu &amp; nhược điểm, mức tiêu thụ bộ nhớ RAM và vũ khí độc quyền của từng thuật toán.
          </p>
        </div>

        {/* Both O(V+E) Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Cả 2 đều O(V + E) với AdjList
        </div>
      </div>

      {/* Side-by-Side Trade-off Duel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: DFS Card */}
        <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4 shadow-sm ring-2 ring-purple-400/20">
          <div className="flex items-center justify-between border-b border-purple-200 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-700" />
              <h4 className="text-base font-bold text-purple-950 font-mono">Depth-First Search (DFS)</h4>
            </div>
            <span className="text-xs font-mono text-purple-900 font-bold">Stack / Đệ Quy</span>
          </div>

          <div className="space-y-3.5 text-xs font-sans">
            {/* Pros */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-800 font-mono font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ƯU ĐIỂM (PROS - THEO SLIDE)</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc leading-relaxed">
                <li><strong>Dễ code hơn</strong> (khi triển khai bằng hàm đệ quy ngắn gọn).</li>
                <li><strong>Dùng ít bộ nhớ hơn</strong>: Chỉ tốn ngăn xếp đệ quy O(Depth) theo chiều sâu nhánh thay vì toàn bộ bề rộng đồ thị.</li>
                <li><strong>Nhiều tính năng mở rộng hữu ích</strong>: Sắp xếp Tô-pô (Topological Sort), Phát hiện chu trình, Thành phần liên thông mạnh (Tarjan / Kosaraju SCC), Đỉnh khớp &amp; Cầu.</li>
              </ul>
            </div>

            {/* Cons */}
            <div className="space-y-1.5 pt-2 border-t border-purple-200">
              <div className="flex items-center gap-1.5 text-rose-800 font-mono font-bold text-[11px]">
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>NHƯỢC ĐIỂM (CONS - THEO SLIDE)</span>
              </div>
              <ul className="space-y-1 text-slate-600 pl-4 list-disc leading-relaxed">
                <li><strong>KHÔNG THỂ GIẢI</strong> bài toán tìm đường đi ngắn nhất (SSSP) trên đồ thị không trọng số!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: BFS Card */}
        <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-4 shadow-sm ring-2 ring-sky-400/20">
          <div className="flex items-center justify-between border-b border-sky-200 pb-3">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-sky-700" />
              <h4 className="text-base font-bold text-sky-950 font-mono">Breadth-First Search (BFS)</h4>
            </div>
            <span className="text-xs font-mono text-sky-900 font-bold">Queue (FIFO)</span>
          </div>

          <div className="space-y-3.5 text-xs font-sans">
            {/* Pros */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-800 font-mono font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ƯU ĐIỂM (PROS - THEO SLIDE)</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc leading-relaxed">
                <li>
                  ⭐ <strong>VŨ KHÍ ĐỘC QUYỀN VÔ ĐỊCH:</strong> Giải quyết bài toán <strong>Single-Source Shortest Path (SSSP)</strong> trên đồ thị không trọng số (Unweighted Graph) trong đúng $O(V + E)$!
                </li>
                <li>Duyệt quét đều theo từng tầng bán kính khoảng cách $d = 0, 1, 2...$</li>
              </ul>
            </div>

            {/* Cons */}
            <div className="space-y-1.5 pt-2 border-t border-sky-200">
              <div className="flex items-center gap-1.5 text-rose-800 font-mono font-bold text-[11px]">
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>NHƯỢC ĐIỂM (CONS - THEO SLIDE)</span>
              </div>
              <ul className="space-y-1 text-slate-600 pl-4 list-disc leading-relaxed">
                <li>Có thể <strong>dài code hơn</strong> (phải khởi tạo và quản lý cấu trúc hàng đợi <code>Queue</code>).</li>
                <li><strong>Dùng nhiều bộ nhớ hơn</strong>: Phải lưu trữ toàn bộ các đỉnh cùng tầng trong Queue (bộ nhớ O(Width) có thể lên tới O(V) với đồ thị dạng sao hoặc đồ thị đầy đủ).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
