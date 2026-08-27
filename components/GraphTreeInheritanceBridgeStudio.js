"use client";

import React, { useState } from "react";
import { Network, CheckCircle2, XCircle } from "lucide-react";

export default function GraphTreeInheritanceBridgeStudio() {
  const [edgeType, setEdgeType] = useState("undirected"); // "undirected" | "directed" | "weighted"

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Network className="w-3.5 h-3.5 text-sky-700" />
            <span>Thuật Ngữ &amp; Mở Rộng Từ Cây (Mục 3.1 &amp; 3.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
            Graph Là Gì? &mdash; Cầu Nối Kế Thừa Từ Binary Tree
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đồ thị là cấu trúc tổng quát hóa của Cây: Kế thừa Đỉnh, Cạnh, Hướng, Trọng số &mdash; nhưng loại bỏ các ràng buộc thứ bậc (Root, Cha-Con).
          </p>
        </div>

        {/* Edge Selector */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setEdgeType("undirected")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              edgeType === "undirected"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cạnh Vô Hướng (Adjacent)
          </button>
          <button
            onClick={() => setEdgeType("directed")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              edgeType === "directed"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cạnh Có Hướng (Directed)
          </button>
          <button
            onClick={() => setEdgeType("weighted")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              edgeType === "weighted"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Có Trọng Số (Weighted)
          </button>
        </div>
      </div>

      {/* 2-Column Comparison: Retained vs Removed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Retained from Tree */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-950 font-mono text-xs font-bold border-b border-slate-100 pb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>CÁC KHÁI NIỆM KẾ THỪA TỪ TREE (SLIDE 3.1)</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 font-sans leading-relaxed">
            <li>• <strong>Vertex (Đỉnh)</strong>: Thường đánh nhãn từ <code>0</code> đến <code>V - 1</code>.</li>
            <li>• <strong>Edge (Cạnh)</strong>: Đường kết nối giữa các cặp đỉnh.</li>
            <li>• <strong>Direction of Edge</strong>: Cạnh có thể có hướng (một chiều) hoặc vô hướng (hai chiều).</li>
            <li>• <strong>Weight of Edge</strong>: Trọng số / chi phí trên mỗi cạnh.</li>
          </ul>
        </div>

        {/* Removed in General Graph */}
        <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-rose-950 font-mono text-xs font-bold border-b border-slate-100 pb-2">
            <XCircle className="w-4 h-4 text-rose-600" />
            <span>TRONG GRAPH TỔNG QUÁT KHÔNG CÒN (SLIDE 3.1)</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 font-sans leading-relaxed">
            <li>• ❌ <strong>Root (Gốc)</strong>: Không có đỉnh nào làm gốc mặc định.</li>
            <li>• ❌ <strong>Parent / Child (Cha / Con)</strong>: Không còn quan hệ phân cấp trên dưới.</li>
            <li>• ❌ <strong>Ancestor / Descendant (Tổ tiên / Hậu duệ)</strong>.</li>
            <li>• 👉 Thay vào đó: Hai đỉnh nối bởi cạnh được gọi là <strong>Adjacent (Kề nhau)</strong>!</li>
          </ul>
        </div>
      </div>

      {/* Visual Edge Type Display */}
      <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-3 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
          <span>Minh Họa 2 Đỉnh [0] và [3] Kề Nhau</span>
          <span className="text-sky-800 font-bold">Simple Graph (Bỏ qua Multi-graph)</span>
        </div>

        <div className="flex justify-center py-3">
          <svg viewBox="0 0 350 100" className="w-full max-w-[320px] h-auto select-none">
            {/* Edge */}
            {edgeType === "undirected" && (
              <line x1="80" y1="50" x2="270" y2="50" stroke="#0284c7" strokeWidth="3" />
            )}
            {edgeType === "directed" && (
              <>
                <line x1="80" y1="50" x2="270" y2="50" stroke="#4f46e5" strokeWidth="3" />
                <polygon points="260,45 270,50 260,55" fill="#4f46e5" />
              </>
            )}
            {edgeType === "weighted" && (
              <>
                <line x1="80" y1="50" x2="270" y2="50" stroke="#059669" strokeWidth="3" />
                <rect x="160" y="32" width="30" height="18" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                <text x="175" y="45" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold" fontFamily="monospace">w=7</text>
              </>
            )}

            {/* Vertex 0 */}
            <circle cx="80" cy="50" r="18" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <text x="80" y="54.5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="monospace">0</text>

            {/* Vertex 3 */}
            <circle cx="270" cy="50" r="18" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <text x="270" y="54.5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="monospace">3</text>
          </svg>
        </div>

        <p className="text-center text-xs text-slate-600 font-sans">
          {edgeType === "undirected" && "Cạnh vô hướng (Undirected Edge): Đỉnh 0 và Đỉnh 3 kề nhau (Adjacent). Đi lại được 2 chiều."}
          {edgeType === "directed" && "Cạnh có hướng (Directed Edge): 0 ⟹ 3 (Chỉ đi được một chiều từ 0 sang 3)."}
          {edgeType === "weighted" && "Cạnh có trọng số (Weighted Edge): Chi phí di chuyển giữa 0 và 3 là w = 7."}
        </p>
      </div>
    </div>
  );
}
