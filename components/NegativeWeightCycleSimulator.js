"use client";

import React, { useState } from "react";
import {
  Flame,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

export default function NegativeWeightCycleSimulator() {
  const [loops, setLoops] = useState(0);
  const [selectedNode, setSelectedNode] = useState(2); // 1, 2, 3 (undefined) or 4 (well-defined)

  // In the loop 1 -> 2 (w = -3), 2 -> 1 (w = 1) => cycle cost = -2 per loop!
  const baseCost = {
    1: 4,
    2: 1,
    3: 7,
    4: -99,
  };

  const calculatedCost = selectedNode === 4 ? -99 : baseCost[selectedNode] - loops * 2;

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <Flame className="w-3.5 h-3.5 text-rose-700" />
            <span>Phần 2: Cạnh Trọng Số Âm &amp; Chu Trình Âm (Negative Weight Cycles)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-amber-950 bg-clip-text text-transparent">
            Hố Đen Chu Trình Âm: Undefined vs Well-Defined SSSP
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá ứng dụng thực tế ("Đường hầm thời gian" Time tunnel), tại sao chu trình âm kéo chi phí về $-\infty$ và trường hợp nào vẫn tính được.
          </p>
        </div>

        {/* Status Badge */}
        <div className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold self-start md:self-auto shadow-sm ${
          selectedNode === 4
            ? "bg-emerald-100 border-emerald-300 text-emerald-950"
            : "bg-rose-100 border-rose-300 text-rose-950"
        }`}>
          {selectedNode === 4 ? "Đỉnh 4: Well-Defined (-99)" : `Đỉnh ${selectedNode}: Undefined (-∞)`}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Graph + Loop Generator (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Chu Trình Âm 1 &harr; 2 (Tổng = -2 Mỗi Vòng)</span>
            <span className="text-rose-950 font-bold">Lặp: {loops} Vòng</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 380 180" className="w-full max-w-[360px] h-auto select-none">
              <defs>
                <marker id="ar-rose" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
                </marker>
                <marker id="ar-slate" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                </marker>
              </defs>

              {/* 0 -> 1 (w=4) */}
              <line x1="50" y1="90" x2="130" y2="40" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ar-slate)" />
              <text x="80" y="55" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>

              {/* 1 -> 2 (w=-3: Cạnh âm) */}
              <path d="M 140 45 Q 185 10 230 45" fill="none" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#ar-rose)" />
              <text x="185" y="22" fill="#f43f5e" fontSize="11" fontWeight="extrabold" fontFamily="monospace" textAnchor="middle">-3</text>

              {/* 2 -> 1 (w=1) */}
              <path d="M 230 55 Q 185 90 140 55" fill="none" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#ar-rose)" />
              <text x="185" y="90" fill="#f43f5e" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">1</text>

              {/* 2 -> 3 (w=6) */}
              <line x1="240" y1="50" x2="310" y2="50" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ar-slate)" />
              <text x="275" y="42" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">6</text>

              {/* 0 -> 4 (w=-99: Nhánh độc lập không qua chu trình) */}
              <line x1="50" y1="100" x2="130" y2="140" stroke="#059669" strokeWidth="2" markerEnd="url(#ar-slate)" />
              <text x="80" y="135" fill="#047857" fontSize="11" fontWeight="bold" fontFamily="monospace">-99</text>

              {/* Nodes */}
              <circle cx="50" cy="90" r="15" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="50" y="94" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

              <circle cx="135" cy="50" r="15" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2.5" />
              <text x="135" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

              <circle cx="235" cy="50" r="15" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2.5" />
              <text x="235" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

              <circle cx="320" cy="50" r="15" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2.5" />
              <text x="320" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

              <circle cx="140" cy="145" r="15" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
              <text x="140" y="149" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>

          {/* Interactive Loop Generator */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono text-slate-500 block font-semibold">Thử nghiệm lặp vòng 1 ➔ 2 ➔ 1:</span>
              <span className="text-xs text-rose-950 font-bold font-mono">
                {loops === 0 ? "Chưa lặp (0 vòng)" : `Đã lặp ${loops} vòng (Giảm thêm -${loops * 2})`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLoops(loops + 1)}
                className="px-3.5 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-mono font-bold text-xs shadow-sm transition-all flex items-center gap-1"
              >
                <span>+1 Vòng Lặp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLoops(0)}
                className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Undefined vs Well-defined Analysis (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Kiểm Tra Khoảng Cách Tới Đỉnh Đích</span>
            <span className="text-amber-950 font-bold">&delta;(0, v)</span>
          </div>

          {/* Node Selector */}
          <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
            {[1, 2, 3, 4].map((node) => (
              <button
                key={node}
                onClick={() => setSelectedNode(node)}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all shadow-sm ${
                  selectedNode === node
                    ? node === 4
                      ? "bg-emerald-100 border-emerald-400 text-emerald-950"
                      : "bg-rose-100 border-rose-400 text-rose-950"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Đỉnh {node}
              </button>
            ))}
          </div>

          <div className={`p-4 rounded-xl border space-y-2 text-xs font-sans leading-relaxed shadow-sm ${
            selectedNode === 4
              ? "bg-emerald-50 border-emerald-200 text-emerald-950"
              : "bg-rose-50 border-rose-200 text-rose-950"
          }`}>
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2 font-mono">
              <span>Trọng số hiện tại:</span>
              <span className="text-sm font-extrabold text-amber-950">
                {selectedNode === 4 ? "-99" : `${calculatedCost} (➔ -∞)`}
              </span>
            </div>

            {selectedNode === 4 ? (
              <p>
                ✅ <strong>Well-Defined (Xác định):</strong> Đường đi $0 \to 4$ hoàn toàn độc lập, không đi qua chu trình âm $1 \leftrightarrow 2$. Vì vậy khoảng cách ngắn nhất $\delta(0, 4) = -99$ vẫn hoàn toàn hợp lệ và xác định!
              </p>
            ) : (
              <p>
                🚨 <strong>Undefined (Không xác định):</strong> Mọi đường đi tới đỉnh {selectedNode} đều phải đi qua hoặc kề cạnh chu trình âm $1 \leftrightarrow 2$. Ta có thể quay vòng liên tục để giảm chi phí vô hạn về $-\infty$. Bài toán SSSP tại đỉnh {selectedNode} bị vô nghiệm!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
