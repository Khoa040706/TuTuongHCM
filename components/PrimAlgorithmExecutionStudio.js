"use client";

import React, { useState } from "react";
import {
  TreeDeciduous,
  RotateCcw,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PrimAlgorithmExecutionStudio() {
  const [activeTab, setActiveTab] = useState("pseudo"); // "pseudo" | "simulation"
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Bước 0: Khởi tạo T = {0} & Nạp cạnh kề vào PQ",
      desc: "Tập cây ban đầu T = {0}. Nạp các cạnh kề với đỉnh 0 vào hàng đợi ưu tiên: (0-2: w=2) và (0-1: w=4).",
      visited: [0],
      treeEdges: [],
      pq: ["(0-2, w=2)", "(0-1, w=4)"],
      totalWeight: 0,
      codeLine: 1,
    },
    {
      title: "Bước 1: Rút cạnh nhỏ nhất (0, 2) có w = 2",
      desc: "Đỉnh 2 chưa được lấy (chưa taken) ⟹ T = {0, 2}, thêm cạnh (0, 2). Nạp các cạnh kề từ 2: (1-2: 1), (2-3: 8), (2-4: 10) vào PQ.",
      visited: [0, 2],
      treeEdges: ["0-2"],
      pq: ["(1-2, w=1)", "(0-1, w=4)", "(2-3, w=8)", "(2-4, w=10)"],
      totalWeight: 2,
      codeLine: 6,
    },
    {
      title: "Bước 2: Rút cạnh nhỏ nhất (1, 2) có w = 1",
      desc: "Đỉnh 1 chưa taken ⟹ T = {0, 1, 2}, thêm cạnh (1, 2). Nạp cạnh kề từ 1: (1-3: 5) vào PQ. Cạnh (0-1: 4) sau này sẽ bị bỏ qua vì 0 và 1 đều đã taken.",
      visited: [0, 2, 1],
      treeEdges: ["0-2", "1-2"],
      pq: ["(0-1, w=4)", "(1-3, w=5)", "(2-3, w=8)", "(2-4, w=10)"],
      totalWeight: 3,
      codeLine: 6,
    },
    {
      title: "Bước 3: Bỏ qua (0, 1) & Rút cạnh (1, 3) có w = 5",
      desc: "Cạnh (0, 1) có đỉnh 0 và 1 đều đã taken ⟹ continue. Rút cạnh tiếp theo (1, 3) có w = 5: Đỉnh 3 chưa taken ⟹ T = {0, 1, 2, 3}. Nạp (3-4: 2), (3-5: 6) vào PQ.",
      visited: [0, 2, 1, 3],
      treeEdges: ["0-2", "1-2", "1-3"],
      pq: ["(3-4, w=2)", "(3-5, w=6)", "(2-3, w=8)", "(2-4, w=10)"],
      totalWeight: 8,
      codeLine: 6,
    },
    {
      title: "Bước 4: Rút cạnh nhỏ nhất (3, 4) có w = 2",
      desc: "Đỉnh 4 chưa taken ⟹ T = {0, 1, 2, 3, 4}, thêm cạnh (3, 4). Nạp cạnh kề từ 4: (4-5: 3) vào PQ.",
      visited: [0, 2, 1, 3, 4],
      treeEdges: ["0-2", "1-2", "1-3", "3-4"],
      pq: ["(4-5, w=3)", "(3-5, w=6)", "(2-4, w=10)"],
      totalWeight: 10,
      codeLine: 6,
    },
    {
      title: "Bước 5: Rút cạnh nhỏ nhất (4, 5) có w = 3 ⟹ HOÀN TẤT!",
      desc: "Đỉnh 5 chưa taken ⟹ T = {0, 1, 2, 3, 4, 5}. Cây T đã bao phủ trọn vẹn tất cả 6 đỉnh! Tổng trọng số MST = 13.",
      visited: [0, 2, 1, 3, 4, 5],
      treeEdges: ["0-2", "1-2", "1-3", "3-4", "4-5"],
      pq: [],
      totalWeight: 13,
      codeLine: 10,
    },
  ];

  const cur = steps[step];

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <TreeDeciduous className="w-3.5 h-3.5 text-sky-700" />
            <span>Phần 4.1: Khái Niệm &amp; Cách Hoạt Động Thuật Toán Prim's</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-teal-950 to-emerald-950 bg-clip-text text-transparent">
            Cơ Chế Cây Mọc Từng Bước Của Thuật Toán Prim's
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Phát triển cây MST từ 1 đỉnh nguồn $s$ duy nhất, mỗi bước "mọc" thêm 1 cạnh có trọng số nhỏ nhất nối từ cây hiện tại $T$ ra 1 đỉnh mới chưa thuộc $T$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("pseudo")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "pseudo"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Giả (Pseudo Code)
          </button>
          <button
            onClick={() => setActiveTab("simulation")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "simulation"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mô Phỏng Từng Bước
          </button>
        </div>
      </div>

      {/* Tab 1: Pseudo Code */}
      {activeTab === "pseudo" && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-sky-100 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Mã Giả Thuật Toán Prim's (Chuẩn Giáo Trình CS2010)</span>
              <span className="text-sky-950 font-bold">Rất Đơn Giản &amp; Trong Sáng</span>
            </div>

            {/* Code Block: Dark macOS Terminal */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
              <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">prim_pseudocode.txt</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`T <- {s}, một đỉnh bắt đầu s (thường là đỉnh 0)
enqueue các cạnh nối với s (chỉ lưu đỉnh đầu kia và trọng số cạnh,
  không lưu đầu còn lại) vào priority queue PQ
  -- PQ sắp xếp phần tử theo trọng số tăng dần

while còn cạnh chưa xử lý trong PQ
  lấy ra cạnh e nhỏ nhất ở đầu PQ (front most edge e)
  if đỉnh v nối với cạnh e này chưa được lấy (chưa taken)
    T <- T U v (bao gồm cả cạnh e này)
    enqueue các cạnh nối với v (như trên)

T là một MST`}
                </code>
              </pre>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs font-sans text-sky-950 flex items-center gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-sky-700 shrink-0" />
            <span>
              💡 <strong>Quy tắc ghi nhớ:</strong> Prim's là thuật toán <strong>hướng đỉnh (vertex-centric)</strong>. Khác với Kruskal chọn cạnh rời rạc khắp đồ thị, Prim luôn duy trì <strong>duy nhất MỘT cây liên thông $T$</strong> và mở rộng dần biên giới ra ngoài cho đến khi bao phủ trọn vẹn $V$ đỉnh.
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Simulation */}
      {activeTab === "simulation" && (
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-sky-800 uppercase font-bold tracking-wider">
                Mô Phỏng Cây Mọc Từng Bước (Growing Tree)
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-mono">
                {cur.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{cur.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold transition-all shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-bold text-sky-950 px-1">
                {step + 1} / {steps.length}
              </span>
              <button
                onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                disabled={step === steps.length - 1}
                className="px-4 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white font-bold transition-all shadow-sm"
              >
                Tiếp theo
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setStep(0)}
                className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graph Visualizer + PQ Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-sky-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Cây T Hiện Tại ({cur.visited.length} / 6 Đỉnh)</span>
                <span className="text-amber-950 font-bold">Tổng Trọng Số: W = {cur.totalWeight}</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Edges */}
                  <line x1="60" y1="50" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                  <text x="110" y="38" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="monospace">4</text>

                  <line x1="60" y1="50" x2="110" y2="150" stroke={cur.treeEdges.includes("0-2") ? "#059669" : "#cbd5e1"} strokeWidth={cur.treeEdges.includes("0-2") ? "3.5" : "1.5"} />
                  <text x="75" y="110" textAnchor="middle" fill={cur.treeEdges.includes("0-2") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  <line x1="160" y1="40" x2="110" y2="150" stroke={cur.treeEdges.includes("1-2") ? "#059669" : "#cbd5e1"} strokeWidth={cur.treeEdges.includes("1-2") ? "3.5" : "1.5"} />
                  <text x="142" y="105" textAnchor="middle" fill={cur.treeEdges.includes("1-2") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">1</text>

                  <line x1="160" y1="40" x2="260" y2="50" stroke={cur.treeEdges.includes("1-3") ? "#059669" : "#cbd5e1"} strokeWidth={cur.treeEdges.includes("1-3") ? "3.5" : "1.5"} />
                  <text x="210" y="38" textAnchor="middle" fill={cur.treeEdges.includes("1-3") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">5</text>

                  <line x1="260" y1="50" x2="260" y2="150" stroke={cur.treeEdges.includes("3-4") ? "#059669" : "#cbd5e1"} strokeWidth={cur.treeEdges.includes("3-4") ? "3.5" : "1.5"} />
                  <text x="272" y="105" textAnchor="start" fill={cur.treeEdges.includes("3-4") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  <line x1="260" y1="150" x2="340" y2="100" stroke={cur.treeEdges.includes("4-5") ? "#059669" : "#cbd5e1"} strokeWidth={cur.treeEdges.includes("4-5") ? "3.5" : "1.5"} />
                  <text x="310" y="140" textAnchor="middle" fill={cur.treeEdges.includes("4-5") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">3</text>

                  {/* Nodes */}
                  <circle cx="60" cy="50" r="15" fill={cur.visited.includes(0) ? "#d1fae5" : "#ffffff"} stroke={cur.visited.includes(0) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="60" y="54" textAnchor="middle" fill={cur.visited.includes(0) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

                  <circle cx="160" cy="40" r="15" fill={cur.visited.includes(1) ? "#d1fae5" : "#ffffff"} stroke={cur.visited.includes(1) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="160" y="44" textAnchor="middle" fill={cur.visited.includes(1) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  <circle cx="110" cy="150" r="15" fill={cur.visited.includes(2) ? "#d1fae5" : "#ffffff"} stroke={cur.visited.includes(2) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="110" y="154" textAnchor="middle" fill={cur.visited.includes(2) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  <circle cx="260" cy="50" r="15" fill={cur.visited.includes(3) ? "#d1fae5" : "#ffffff"} stroke={cur.visited.includes(3) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="260" y="54" textAnchor="middle" fill={cur.visited.includes(3) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  <circle cx="260" cy="150" r="15" fill={cur.visited.includes(4) ? "#d1fae5" : "#ffffff"} stroke={cur.visited.includes(4) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="260" y="154" textAnchor="middle" fill={cur.visited.includes(4) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>

                  <circle cx="340" cy="100" r="15" fill={cur.visited.includes(5) ? "#d1fae5" : "#ffffff"} stroke={cur.visited.includes(5) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="340" y="104" textAnchor="middle" fill={cur.visited.includes(5) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
                </svg>
              </div>
            </div>

            {/* Right: PQ State (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-sky-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Hàng Đợi Ưu Tiên PriorityQueue</span>
                <span className="text-amber-950 font-bold">Min-Heap</span>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5 shadow-sm">
                <span className="text-[11px] text-slate-600 font-mono block font-semibold">Cạnh Đang Chờ Trong PQ:</span>
                <div className="flex flex-wrap gap-1.5">
                  {cur.pq.length > 0 ? (
                    cur.pq.map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg border font-mono font-bold text-xs shadow-sm ${
                          idx === 0
                            ? "bg-amber-100 border-amber-400 text-amber-950 ring-1 ring-amber-400/50"
                            : "bg-white border-slate-200 text-slate-700"
                        }`}
                      >
                        {idx === 0 ? "👑 " : ""}{item}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 font-mono italic">PQ Rỗng (Cây Đã Hoàn Tất)</span>
                  )}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-mono shadow-sm">
                <span className="text-slate-600 block font-semibold">Tập Đỉnh Đã Thuộc Cây T:</span>
                <div className="flex gap-1.5">
                  {cur.visited.map((n) => (
                    <span key={n} className="w-7 h-7 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 flex items-center justify-center font-bold shadow-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
