"use client";

import React, { useState } from "react";
import {
  Layers,
  Route,
} from "lucide-react";

export default function SsspDistancePredecessorWorkbench() {
  const [phase, setPhase] = useState("init"); // "init" | "finished"
  const [selectedTarget, setSelectedTarget] = useState(4); // For backtrack demo

  const initData = {
    dist: [0, "∞", "∞", "∞", "∞"],
    p: [-1, -1, -1, -1, -1],
    activeEdges: [],
    nodeStatus: ["source", "unvisited", "unvisited", "unvisited", "unvisited"],
  };

  const finishedData = {
    dist: [0, 6, 7, 11, 7],
    p: [-1, 0, 0, 1, 3], // 0->1->3->4 (6+5-4=7) or 0->2 (7)
    activeEdges: ["0-1", "0-2", "1-3", "3-4"],
    nodeStatus: ["source", "optimized", "optimized", "optimized", "optimized"],
  };

  const curData = phase === "init" ? initData : finishedData;

  // Backtrack calculation from selectedTarget to 0
  const getBacktrackPath = (target) => {
    if (phase === "init") return [target];
    const path = [];
    let curr = target;
    while (curr !== -1) {
      path.unshift(curr);
      curr = finishedData.p[curr];
    }
    return path;
  };

  const backtrackPath = getBacktrackPath(selectedTarget);

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Mục 1.5 &amp; 1.6: Cấu Trúc Dữ Liệu Phụ Trợ D[] &amp; p[] &amp; Ví Dụ Slide</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-amber-950 to-emerald-950 bg-clip-text text-transparent">
            Mảng Khoảng Cách D[v] &amp; Mảng Đỉnh Cha p[v] Truy Vết
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Theo dõi sự chuyển đổi trạng thái từ Khởi tạo (D = &infin;, p = -1) đến Kết thúc (D = &delta;, p = đỉnh cha) và cơ chế Backtrack đường đi.
          </p>
        </div>

        {/* Phase Toggle */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setPhase("init")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              phase === "init"
                ? "bg-rose-500 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Trạng Thái Khởi Tạo
          </button>
          <button
            onClick={() => setPhase("finished")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              phase === "finished"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Trạng Thái Kết Thúc ✅
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Graph (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>
              {phase === "init"
                ? "Ban Đầu: Các Đỉnh Chưa Tối Ưu (Màu Hồng, D = ∞)"
                : "Kết Thúc: Cạnh Cam Tối Ưu & Đường Đi Ngắn Nhất"}
            </span>
            <span className={phase === "init" ? "text-rose-950 font-bold" : "text-emerald-950 font-bold"}>
              {phase === "init" ? "Chưa có cạnh cam" : "Cây SSSP Hoàn Tất"}
            </span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
              <defs>
                <marker id="arr-gray" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                </marker>
                <marker id="arr-orange" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
                </marker>
              </defs>

              {/* 0 -> 1 (w=6) */}
              <line x1="50" y1="100" x2="140" y2="40" stroke={curData.activeEdges.includes("0-1") ? "#f59e0b" : "#cbd5e1"} strokeWidth={curData.activeEdges.includes("0-1") ? "3" : "1.5"} markerEnd={curData.activeEdges.includes("0-1") ? "url(#arr-orange)" : "url(#arr-gray)"} />
              <text x="85" y="60" fill={curData.activeEdges.includes("0-1") ? "#b45309" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">6</text>

              {/* 0 -> 2 (w=7) */}
              <line x1="50" y1="100" x2="140" y2="160" stroke={curData.activeEdges.includes("0-2") ? "#f59e0b" : "#cbd5e1"} strokeWidth={curData.activeEdges.includes("0-2") ? "3" : "1.5"} markerEnd={curData.activeEdges.includes("0-2") ? "url(#arr-orange)" : "url(#arr-gray)"} />
              <text x="85" y="145" fill={curData.activeEdges.includes("0-2") ? "#b45309" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">7</text>

              {/* 1 -> 3 (w=5) */}
              <line x1="140" y1="40" x2="250" y2="40" stroke={curData.activeEdges.includes("1-3") ? "#f59e0b" : "#cbd5e1"} strokeWidth={curData.activeEdges.includes("1-3") ? "3" : "1.5"} markerEnd={curData.activeEdges.includes("1-3") ? "url(#arr-orange)" : "url(#arr-gray)"} />
              <text x="195" y="32" fill={curData.activeEdges.includes("1-3") ? "#b45309" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">5</text>

              {/* 1 -> 2 (w=8) */}
              <line x1="140" y1="40" x2="140" y2="160" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-gray)" />
              <text x="148" y="100" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">8</text>

              {/* 2 -> 4 (w=9) */}
              <line x1="140" y1="160" x2="330" y2="100" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-gray)" />
              <text x="235" y="150" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">9</text>

              {/* 3 -> 4 (w=-4) */}
              <line x1="250" y1="40" x2="330" y2="100" stroke={curData.activeEdges.includes("3-4") ? "#f59e0b" : "#cbd5e1"} strokeWidth={curData.activeEdges.includes("3-4") ? "3" : "1.5"} markerEnd={curData.activeEdges.includes("3-4") ? "url(#arr-orange)" : "url(#arr-gray)"} />
              <text x="300" y="60" fill={curData.activeEdges.includes("3-4") ? "#b45309" : "#64748b"} fontSize="11" fontWeight="extrabold" fontFamily="monospace">-4</text>

              {/* Nodes */}
              <circle cx="50" cy="100" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="50" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

              <circle cx="140" cy="40" r="16" fill={phase === "init" ? "#ffe4e6" : "#d1fae5"} stroke={phase === "init" ? "#e11d48" : "#059669"} strokeWidth="2.5" />
              <text x="140" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

              <circle cx="140" cy="160" r="16" fill={phase === "init" ? "#ffe4e6" : "#d1fae5"} stroke={phase === "init" ? "#e11d48" : "#059669"} strokeWidth="2.5" />
              <text x="140" y="164" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

              <circle cx="250" cy="40" r="16" fill={phase === "init" ? "#ffe4e6" : "#d1fae5"} stroke={phase === "init" ? "#e11d48" : "#059669"} strokeWidth="2.5" />
              <text x="250" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

              <circle cx="330" cy="100" r="16" fill={phase === "init" ? "#ffe4e6" : "#d1fae5"} stroke={phase === "init" ? "#e11d48" : "#059669"} strokeWidth="2.5" />
              <text x="330" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>
        </div>

        {/* Right: Data Tables & Backtrack Tool (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bảng Tra Cứu D[v] &amp; p[v]</span>
            <span className="text-amber-950 font-bold">5 Đỉnh</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 font-mono text-center text-xs">
            {curData.dist.map((d, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-500 block font-bold">Đỉnh {idx}</span>
                <span className="text-xs font-extrabold text-sky-950 block">D = {d}</span>
                <span className="text-[10px] text-amber-950 block font-bold">p = {curData.p[idx]}</span>
              </div>
            ))}
          </div>

          {/* Backtrack Simulator */}
          {phase === "finished" && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-semibold">Chọn đỉnh đích để Truy Vết (Backtrack):</span>
                <select
                  value={selectedTarget}
                  onChange={(e) => setSelectedTarget(Number(e.target.value))}
                  className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-amber-950 font-bold text-xs shadow-sm"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>Đỉnh {n}</option>
                  ))}
                </select>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center gap-1.5 flex-wrap shadow-sm">
                <Route className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-bold">Đường đi ngắn nhất:</span>
                <span className="font-bold">{backtrackPath.join(" ➔ ")}</span>
                <span className="text-slate-500 text-[11px] font-semibold">(Tổng: {finishedData.dist[selectedTarget]})</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
