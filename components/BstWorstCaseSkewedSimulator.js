"use client";

import React, { useState } from "react";
import { AlertTriangle, Sparkles, Zap, Flame } from "lucide-react";

export default function BstWorstCaseSkewedSimulator() {
  const [scenario, setScenario] = useState("asc"); // "asc" | "desc" | "balanced"

  const scenarios = {
    asc: {
      title: "Chèn Dãy Tăng Dần: [4, 5, 6, 7, 15, 23, 50, 71]",
      desc: "Mỗi giá trị mới luôn LỚN HƠN giá trị trước đó → Luôn bị chèn làm CON PHẢI của đỉnh cuối cùng.",
      height: "h = n - 1 = 7 (O(n))",
      isWorst: true,
      direction: "Lệch hoàn toàn về bên PHẢI (Right-Skewed)",
      nodes: [
        { key: 4, x: 50, y: 30 },
        { key: 5, x: 90, y: 70 },
        { key: 6, x: 130, y: 110 },
        { key: 7, x: 170, y: 150 },
        { key: 15, x: 210, y: 190 },
        { key: 23, x: 250, y: 230 },
        { key: 50, x: 290, y: 270 },
        { key: 71, x: 330, y: 310 },
      ],
      edges: [
        { from: 4, to: 5 },
        { from: 5, to: 6 },
        { from: 6, to: 7 },
        { from: 7, to: 15 },
        { from: 15, to: 23 },
        { from: 23, to: 50 },
        { from: 50, to: 71 },
      ],
    },
    desc: {
      title: "Chèn Dãy Giảm Dần: [71, 50, 23, 15, 7, 6, 5, 4]",
      desc: "Mỗi giá trị mới luôn NHỎ HƠN giá trị trước đó → Luôn bị chèn làm CON TRÁI của đỉnh cuối cùng (Câu hỏi mở trong slide).",
      height: "h = n - 1 = 7 (O(n))",
      isWorst: true,
      direction: "Lệch hoàn toàn về bên TRÁI (Left-Skewed)",
      nodes: [
        { key: 71, x: 330, y: 30 },
        { key: 50, x: 290, y: 70 },
        { key: 23, x: 250, y: 110 },
        { key: 15, x: 210, y: 150 },
        { key: 7, x: 170, y: 190 },
        { key: 6, x: 130, y: 230 },
        { key: 5, x: 90, y: 270 },
        { key: 4, x: 50, y: 310 },
      ],
      edges: [
        { from: 71, to: 50 },
        { from: 50, to: 23 },
        { from: 23, to: 15 },
        { from: 15, to: 7 },
        { from: 7, to: 6 },
        { from: 6, to: 5 },
        { from: 5, to: 4 },
      ],
    },
    balanced: {
      title: "Chèn Thứ Tự Cân Bằng: [15, 6, 23, 4, 7, 71, 5, 50]",
      desc: "Giá trị root được chèn trước (15), các giá trị tiếp theo phân bố đều 2 bên nhánh → Cây cân bằng hoàn hảo.",
      height: "h = 3 (O(log n))",
      isWorst: false,
      direction: "Cây phát triển đều 2 nhánh (Balanced BST)",
      nodes: [
        { key: 15, x: 190, y: 40 },
        { key: 6, x: 100, y: 110 },
        { key: 23, x: 280, y: 110 },
        { key: 4, x: 60, y: 180 },
        { key: 7, x: 140, y: 180 },
        { key: 71, x: 320, y: 180 },
        { key: 5, x: 90, y: 260 },
        { key: 50, x: 280, y: 260 },
      ],
      edges: [
        { from: 15, to: 6 },
        { from: 15, to: 23 },
        { from: 6, to: 4 },
        { from: 6, to: 7 },
        { from: 4, to: 5 },
        { from: 23, to: 71 },
        { from: 71, to: 50 },
      ],
    },
  };

  const current = scenarios[scenario];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-semibold mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>Hiện Tượng Suy Biến Chiều Cao (Degenerate Tree)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-900 via-amber-800 to-rose-900 bg-clip-text text-transparent">
            Worst-Case Height: Khi BST Biến Thành Danh Sách Liên Kết
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Plain BST <strong>không tự cân bằng (not self-balancing)</strong>. Nếu dữ liệu đầu vào đã có thứ tự sẵn, cây sẽ suy biến thành đường thẳng với h = O(n).
          </p>
        </div>

        {/* Height Stat Badge */}
        <div
          className={`px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm ${
            current.isWorst
              ? "bg-rose-50 border-rose-300 text-rose-900 animate-pulse"
              : "bg-emerald-50 border-emerald-300 text-emerald-900"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${current.isWorst ? "bg-rose-500" : "bg-emerald-500"}`} />
          {current.height}
        </div>
      </div>

      {/* Scenario Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
        <button
          onClick={() => setScenario("asc")}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            scenario === "asc"
              ? "bg-rose-50 border-rose-400 text-rose-950 shadow-sm"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <div className="text-[10px] uppercase font-bold text-rose-700 font-mono">Worst Case 1 (Slide)</div>
          <div className="text-xs font-bold font-mono mt-0.5">Chèn Tăng Dần (4&rarr;71)</div>
        </button>

        <button
          onClick={() => setScenario("desc")}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            scenario === "desc"
              ? "bg-rose-50 border-rose-400 text-rose-950 shadow-sm"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <div className="text-[10px] uppercase font-bold text-rose-700 font-mono">Worst Case 2 (Câu hỏi mở)</div>
          <div className="text-xs font-bold font-mono mt-0.5">Chèn Giảm Dần (71&rarr;4)</div>
        </button>

        <button
          onClick={() => setScenario("balanced")}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            scenario === "balanced"
              ? "bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <div className="text-[10px] uppercase font-bold text-emerald-700 font-mono">Best / Average Case</div>
          <div className="text-xs font-bold font-mono mt-0.5">Cây Cân Bằng (Balanced)</div>
        </button>
      </div>

      {/* Main Grid: SVG Tree Visualization + Threat Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Tree Canvas (7 cols) */}
        <div className="lg:col-span-7 p-4 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[380px] shadow-sm">
          <svg viewBox="0 0 400 350" className="w-full h-auto select-none max-w-[400px]">
            {/* Draw Edges */}
            {current.edges.map((edge, idx) => {
              const f = current.nodes.find((n) => n.key === edge.from);
              const t = current.nodes.find((n) => n.key === edge.to);
              return (
                <line
                  key={idx}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={current.isWorst ? "#f43f5e" : "#10b981"}
                  strokeWidth="2.5"
                />
              );
            })}

            {/* Draw Nodes */}
            {current.nodes.map((node) => (
              <g key={node.key} className="transition-all duration-500">
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="17"
                  fill={current.isWorst ? "#ffe4e6" : "#d1fae5"}
                  stroke={current.isWorst ? "#e11d48" : "#059669"}
                  strokeWidth="2"
                />
                <text
                  x={node.x}
                  y={node.y + 4.5}
                  textAnchor="middle"
                  fill={current.isWorst ? "#9f1239" : "#065f46"}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {node.key}
                </text>
              </g>
            ))}
          </svg>

          <div className="w-full mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono text-center font-bold">
            {current.direction}
          </div>
        </div>

        {/* Threat Analysis & Motivation for Balanced Trees (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 flex flex-col justify-between self-stretch">
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900">{current.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{current.desc}</p>

            {current.isWorst ? (
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-300 text-xs text-rose-950 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-rose-800">
                  <Flame className="w-4 h-4 text-rose-600" />
                  MẤT SẠCH LỢI THẾ CỦA CÂY BST!
                </div>
                <p className="leading-relaxed text-[11px]">
                  Khi h = n - 1 = O(n), mọi thao tác O(h) (Search, Insert, Remove, Min, Max, Successor) đều bị <strong>thoái hóa thành O(n)</strong>, chậm chạp y hệt một danh sách liên kết đơn (Linked List)!
                </p>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  HIỆU NĂNG TỐI ƯU O(log n)
                </div>
                <p className="leading-relaxed text-[11px]">
                  Khi cây có hình dạng cân đối, chiều cao cây chỉ là h &approx; log&#8322;n = 3. Mọi thao tác đều cực kỳ nhanh chóng.
                </p>
              </div>
            )}
          </div>

          {/* Bridge Callout */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 space-y-1.5">
            <div className="font-bold text-amber-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-700" />
              Động lực học Balanced BST (Bài kế tiếp):
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600">
              Vì plain BST không đảm bảo O(log n) trong trường hợp xấu nhất, ta cần các cấu trúc <strong>cây tự cân bằng (AVL Tree, Red-Black Tree)</strong> để luôn tự xoay và giữ h = O(log n) trong mọi tình huống!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
