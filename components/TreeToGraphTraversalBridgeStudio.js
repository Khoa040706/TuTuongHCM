"use client";

import React, { useState } from "react";
import {
  GitFork,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export default function TreeToGraphTraversalBridgeStudio() {
  const [traversalMode, setTraversalMode] = useState("pre"); // "pre" | "in" | "post" | "level"

  const traversals = {
    pre: {
      title: "Preorder Traversal (Nút - Trái - Phải)",
      code: "visit(u); pre(u->left); pre(u->right);",
      order: [0, 1, 2, 3, 4],
      desc: "Thăm nút gốc trước, sau đó lần lượt duyệt đệ quy cây con bên trái và cây con bên phải.",
      type: "DFS Variant (Tiền Thứ Tự)",
    },
    in: {
      title: "Inorder Traversal (Trái - Nút - Phải)",
      code: "in(u->left); visit(u); in(u->right);",
      order: [1, 0, 3, 2, 4],
      desc: "Duyệt cây con trái trước, sau đó thăm nút hiện tại, rồi duyệt tiếp cây con phải (tạo thứ tự tăng dần trên BST).",
      type: "DFS Variant (Trung Thứ Tự)",
    },
    post: {
      title: "Postorder Traversal (Trái - Phải - Nút)",
      code: "post(u->left); post(u->right); visit(u);",
      order: [1, 3, 4, 2, 0],
      desc: "Duyệt xong toàn bộ cây con trái và phải rồi mới thăm nút gốc (cực kỳ quan trọng cho thuật toán giải phóng bộ nhớ & Topological Sort).",
      type: "DFS Variant (Hậu Thứ Tự)",
    },
    level: {
      title: "Level-order Traversal (Duyệt Theo Từng Tầng)",
      code: "queue.add(root); while(!q.empty()) { ... }",
      order: [0, 1, 2, 3, 4],
      desc: "⭐ ĐÂY CHÍNH LÀ TIỀN THÂN CỦA BFS! Duyệt quét hết toàn bộ các đỉnh ở tầng d trước khi bước sang tầng d + 1.",
      type: "BFS Prototype (Theo Tầng)",
      isBfs: true,
    },
  };

  const cur = traversals[traversalMode];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <GitFork className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 2.1 &amp; 2.2: Ôn Lại Cây &amp; Bước Sang Đồ Thị</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-sky-950 bg-clip-text text-transparent">
            Cầu Nối Duyệt Cây Nhị Phân &rarr; Đồ Thị Tổng Quát
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Ôn tập 3 phép duyệt cây nhị phân (Pre, In, Post) và giải quyết 2 thách thức lớn khi duyệt đồ thị.
          </p>
        </div>

        {/* Level order callout badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-sky-100 border border-sky-300 text-sky-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Level-Order ⟹ BFS
        </div>
      </div>

      {/* Main Grid: Tree Traversal Visualizer (Left) + 2 Traversal Challenges (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Tree Visualizer (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-mono text-slate-600">Cây Mẫu Slide (Root = 0)</span>
            <span className="text-xs font-mono text-emerald-950 font-bold">{cur.type}</span>
          </div>

          {/* Traversal Mode Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
            {[
              { id: "pre", label: "Preorder" },
              { id: "in", label: "Inorder" },
              { id: "post", label: "Postorder" },
              { id: "level", label: "Level-order (BFS)" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTraversalMode(t.id)}
                className={`py-2 px-2.5 rounded-xl font-bold transition-all text-center shadow-sm ${
                  traversalMode === t.id
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* SVG Binary Tree Display */}
          <div className="flex justify-center py-2">
            <svg viewBox="0 0 280 180" className="w-full max-w-[280px] h-auto select-none">
              {/* Edges */}
              <line x1="140" y1="30" x2="80" y2="80" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="140" y1="30" x2="200" y2="80" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="200" y1="80" x2="165" y2="140" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="200" y1="80" x2="235" y2="140" stroke="#cbd5e1" strokeWidth="2" />

              {/* Node 0 (Root) */}
              <circle cx="140" cy="30" r="16" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
              <text x="140" y="34.5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="monospace">0</text>
              <text x="140" y="10" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">Root (0)</text>

              {/* Node 1 (Left of 0) */}
              <circle cx="80" cy="80" r="15" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              <text x="80" y="84" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

              {/* Node 2 (Right of 0) */}
              <circle cx="200" cy="80" r="15" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              <text x="200" y="84" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

              {/* Node 3 (Left of 2) */}
              <circle cx="165" cy="140" r="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
              <text x="165" y="144" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

              {/* Node 4 (Right of 2) */}
              <circle cx="235" cy="140" r="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
              <text x="235" y="144" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>

          {/* Traversal Result Sequence */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600 font-semibold">Thứ Tự Xuất Phát:</span>
              <span className="text-emerald-950 font-bold">{cur.title}</span>
            </div>

            <div className="flex items-center gap-2">
              {cur.order.map((nodeId, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono font-extrabold text-xs flex items-center justify-center shadow-sm">
                    {nodeId}
                  </div>
                  {idx < cur.order.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Code block kept in dark theme bg-slate-950 */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-2.5 shadow-md">
              <pre className="font-mono text-[11px] text-emerald-300 overflow-x-auto">
                <code>{cur.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Right: 2 Fundamental Traversal Challenges (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
          <div className="border-b border-slate-100 pb-2">
            <h4 className="text-xs font-bold text-slate-800 font-mono uppercase tracking-wider">
              2 Thách Thức Khi Duyệt Đồ Thị Tổng Quát (Mục 2.2)
            </h4>
          </div>

          {/* Challenge 1 */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-2 text-amber-950 font-mono text-xs font-bold">
              <span>1. ĐIỂM BẮT ĐẦU (THE START)</span>
            </div>
            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              • <strong>Trong Cây:</strong> Luôn bắt đầu từ đỉnh gốc cố định (Root).
              <br />
              • <strong>Trong Đồ Thị:</strong> Không có khái niệm Root! Ta phải tự chỉ định một đỉnh khởi đầu đặc biệt gọi là <strong>Source s</strong>.
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-2 text-rose-950 font-mono text-xs font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>2. CÁCH DI CHUYỂN &amp; CẠM BẪY CHU TRÌNH</span>
            </div>
            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              • <strong>Trong Cây:</strong> Chỉ đi xuống nhánh con và tuyệt đối không có chu trình.
              <br />
              • <strong>Trong Đồ Thị:</strong> Có thể có chu trình (Cycles), dẫn đến nguy cơ lặp vô hạn <code>u &rarr; v &rarr; u &rarr; v...</code>
              <br />
              • <strong>Giải pháp sống còn:</strong> Phải dùng mảng cờ <code>visited</code> để đánh dấu đỉnh đã thăm!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
