"use client";

import React, { useState } from "react";
import {
  Compass,
  Zap,
  ArrowRight,
  RotateCcw,
  Layers,
  Swords,
  Radio,
} from "lucide-react";

export default function DsaGraphTraversalHeroBanner() {
  const [activeTab, setActiveTab] = useState("bfs"); // "bfs" | "dfs" | "duel"

  // ----------------------------------------------------
  // BFS Simulation State
  // ----------------------------------------------------
  const [bfsStep, setBfsStep] = useState(0);

  const bfsSteps = [
    {
      title: "Bước 0: Khởi tạo nguồn S = 0",
      desc: "Đỉnh 0 được đánh dấu đã thăm (Visited), khoảng cách d[0] = 0, đẩy 0 vào Hàng đợi Queue.",
      queue: [0],
      visited: [0],
      distances: { 0: 0 },
      activeNode: 0,
      activeEdges: [],
      currentLevel: 0,
    },
    {
      title: "Bước 1: Dequeue 0 ⟹ Thăm láng giềng Tầng 1 (Đỉnh 1 & Đỉnh 2)",
      desc: "Rút 0 ra khỏi Queue. Đỉnh 0 có 2 hàng xóm chưa thăm là 1 và 2 ⟹ Đẩy 1 và 2 vào Queue. Gán d[1]=1, d[2]=1.",
      queue: [1, 2],
      visited: [0, 1, 2],
      distances: { 0: 0, 1: 1, 2: 1 },
      activeNode: 0,
      activeEdges: ["0-1", "0-2"],
      currentLevel: 1,
    },
    {
      title: "Bước 2: Dequeue 1 ⟹ Thăm láng giềng Tầng 2 (Đỉnh 3)",
      desc: "Rút 1 ra khỏi Queue. Đỉnh 1 nối với đỉnh 3 chưa thăm ⟹ Đẩy 3 vào Queue. Gán d[3]=2.",
      queue: [2, 3],
      visited: [0, 1, 2, 3],
      distances: { 0: 0, 1: 1, 2: 1, 3: 2 },
      activeNode: 1,
      activeEdges: ["1-3"],
      currentLevel: 2,
    },
    {
      title: "Bước 3: Dequeue 2 ⟹ Thăm láng giềng Tầng 2 (Đỉnh 4 & Đỉnh 5)",
      desc: "Rút 2 ra khỏi Queue. Đỉnh 2 nối với 4 và 5 chưa thăm ⟹ Đẩy 4 và 5 vào Queue. Gán d[4]=2, d[5]=2.",
      queue: [3, 4, 5],
      visited: [0, 1, 2, 3, 4, 5],
      distances: { 0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      activeNode: 2,
      activeEdges: ["2-4", "2-5"],
      currentLevel: 2,
    },
    {
      title: "Bước 4: Hoàn tất quét sóng BFS — Khám phá toàn bộ đồ thị!",
      desc: "Rút lần lượt 3, 4, 5 ra khỏi Queue. Không còn đỉnh mới nào ⟹ Hoàn tất cây đường đi ngắn nhất (BFS Spanning Tree)!",
      queue: [],
      visited: [0, 1, 2, 3, 4, 5],
      distances: { 0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      activeNode: null,
      activeEdges: ["0-1", "0-2", "1-3", "2-4", "2-5"],
      currentLevel: 2,
    },
  ];

  // ----------------------------------------------------
  // DFS Simulation State
  // ----------------------------------------------------
  const [dfsStep, setDfsStep] = useState(0);

  const dfsSteps = [
    {
      title: "Bước 0: Bắt đầu tại Đỉnh 0",
      desc: "Thăm đỉnh 0, đẩy 0 vào Call Stack. Chuẩn bị đâm sâu vào nhánh đầu tiên.",
      stack: [0],
      visited: [0],
      activeNode: 0,
      activeEdge: null,
      action: "CALL dfs(0)",
    },
    {
      title: "Bước 1: Đâm sâu vào Đỉnh 1",
      desc: "Từ đỉnh 0 đi sâu sang láng giềng 1 ⟹ Đẩy 1 vào Call Stack.",
      stack: [0, 1],
      visited: [0, 1],
      activeNode: 1,
      activeEdge: "0-1",
      action: "CALL dfs(1)",
    },
    {
      title: "Bước 2: Đâm sâu vào Đỉnh 3",
      desc: "Từ đỉnh 1 tiếp tục đi sâu sang đỉnh 3 ⟹ Đẩy 3 vào Call Stack.",
      stack: [0, 1, 3],
      visited: [0, 1, 3],
      activeNode: 3,
      activeEdge: "1-3",
      action: "CALL dfs(3)",
    },
    {
      title: "Bước 3: Đâm sâu vào Đỉnh 4 (Chạm đáy / Ngõ cụt!)",
      desc: "Từ đỉnh 3 đi sâu sang đỉnh 4. Tại 4 không còn láng giềng nào chưa thăm ⟹ Bắt đầu quay lui (Backtracking)!",
      stack: [0, 1, 3, 4],
      visited: [0, 1, 3, 4],
      activeNode: 4,
      activeEdge: "3-4",
      action: "CALL dfs(4) ⟹ NGÕ CỤT",
    },
    {
      title: "Bước 4: Quay lui về 3 ⟹ Rẽ sang Đỉnh 5",
      desc: "Rút 4 ra khỏi Stack (POP). Quay lại đỉnh 3, phát hiện láng giềng 5 chưa thăm ⟹ Đi sâu sang 5!",
      stack: [0, 1, 3, 5],
      visited: [0, 1, 3, 4, 5],
      activeNode: 5,
      activeEdge: "3-5",
      action: "POP 4 ⟹ CALL dfs(5)",
    },
    {
      title: "Bước 5: Quay lui về 0 ⟹ Khám phá Đỉnh 2 cuối cùng",
      desc: "Rút 5, 3, 1 ra khỏi Stack. Quay lại đỉnh 0, đi nốt sang nhánh đỉnh 2 ⟹ Hoàn tất duyệt toàn bộ đồ thị!",
      stack: [0, 2],
      visited: [0, 1, 2, 3, 4, 5],
      activeNode: 2,
      activeEdge: "0-2",
      action: "CALL dfs(2) ⟹ HOÀN TẤT!",
    },
  ];

  // ----------------------------------------------------
  // Duel Arena Scenarios
  // ----------------------------------------------------
  const [selectedScenario, setSelectedScenario] = useState("shortestPath");

  const scenarios = {
    shortestPath: {
      question: "Tìm đường đi ngắn nhất (ít cạnh nhất) trên mạng lưới tàu điện không trọng số?",
      winner: "BFS",
      badge: "BFS VÔ ĐỊCH 👑",
      color: "sky",
      reason: "BFS duyệt theo từng tầng khoảng cách d=0, d=1, d=2... đảm bảo đỉnh nào được thăm trước thì khoảng cách tới đó là ngắn nhất tuyệt đối O(V + E)!",
    },
    cycleDetect: {
      question: "Kiểm tra đồ thị phụ thuộc công việc có bị lỗi vòng lặp (Chu trình / Deadlock) hay không?",
      winner: "DFS",
      badge: "DFS VÔ ĐỊCH 👑",
      color: "purple",
      reason: "DFS sử dụng cơ chế Backtracking và phân loại cạnh Back-Edge (cạnh ngược trỏ về tổ tiên đang nằm trong Call Stack) để phát hiện chu trình trong O(V + E)!",
    },
    topoSort: {
      question: "Sắp xếp thứ tự đăng ký các môn học tiên quyết (Topological Sort trên DAG)?",
      winner: "DFS",
      badge: "DFS VÔ ĐỊCH 👑",
      color: "purple",
      reason: "DFS ghi nhận thời điểm hoàn tất (Post-order Finish Time) của từng đỉnh. Đảo ngược danh sách thứ tự hoàn tất chính là Thứ tự Tô-pô hợp lệ!",
    },
    socialDistance: {
      question: "Đo lường bậc quen biết trên mạng xã hội Facebook ('Bạn bè của bạn bè' trong bán kính k bước)?",
      winner: "BFS",
      badge: "BFS VÔ ĐỊCH 👑",
      color: "sky",
      reason: "BFS quét sóng đa hướng theo bán kính vòng tròn, cực kỳ phù hợp để lấy tất cả người dùng trong phạm vi k hops!",
    },
  };

  const curBfs = bfsSteps[bfsStep];
  const curDfs = dfsSteps[dfsStep];
  const curScenario = scenarios[selectedScenario];

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 p-6 md:p-8 text-slate-800 shadow-sm font-sans">
      {/* Background Decorative Glow */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />

      {/* Main Header Banner */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-indigo-200/80 pb-6 mb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100 border border-sky-300 text-sky-950 text-xs font-mono font-bold tracking-wide">
            <Compass className="w-4 h-4 text-sky-700" />
            <span>KIẾN TRÚC THUẬT TOÁN ĐỒ THỊ CS2010 • CHƯƠNG 12</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-sky-950 via-indigo-950 to-purple-950 bg-clip-text text-transparent">
              Bài 12: Duyệt Đồ Thị (Graph Traversal)
            </span>
            <br />
            <span className="text-xl sm:text-2xl text-slate-700 font-bold">
              Breadth-First Search (BFS) &amp; Depth-First Search (DFS)
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hai trụ cột thuật toán khám phá không gian trạng thái: <strong>BFS</strong> quét sóng hàng đợi <code>Queue (FIFO)</code> tìm đường đi ngắn nhất $O(V+E)$, đối đầu trực diện với <strong>DFS</strong> đâm sâu ngăn xếp <code>Call Stack (LIFO)</code> phát hiện chu trình &amp; Topological Sort $O(V+E)$.
          </p>
        </div>

        {/* 3 Quick Badges */}
        <div className="flex flex-row lg:flex-col gap-2.5 self-start lg:self-auto font-mono text-xs">
          <div className="px-3.5 py-2 rounded-xl bg-sky-100 border border-sky-300 text-sky-950 font-bold flex items-center gap-2 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-sky-700" />
            <span>BFS: Queue (FIFO) • Sóng Tầng</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-purple-100 border border-purple-300 text-purple-950 font-bold flex items-center gap-2 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-purple-700" />
            <span>DFS: Stack (LIFO) • Đâm Sâu</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold flex items-center gap-2 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Time: O(V + E) với AdjList</span>
          </div>
        </div>
      </div>

      {/* 3-Playground Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6">
        <button
          onClick={() => setActiveTab("bfs")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm ${
            activeTab === "bfs"
              ? "bg-sky-600 text-white ring-2 ring-sky-400/40"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Radio className="w-3.5 h-3.5 text-sky-200" />
          <span>1. BFS Ripple Wavefront Studio</span>
        </button>

        <button
          onClick={() => setActiveTab("dfs")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm ${
            activeTab === "dfs"
              ? "bg-purple-600 text-white ring-2 ring-purple-400/40"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-purple-200" />
          <span>2. DFS Deep Probe &amp; Backtrack Studio</span>
        </button>

        <button
          onClick={() => setActiveTab("duel")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm ${
            activeTab === "duel"
              ? "bg-emerald-600 text-white ring-2 ring-emerald-400/40"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Swords className="w-3.5 h-3.5 text-emerald-200" />
          <span>3. BFS vs DFS Showdown Arena</span>
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* TAB 1: BFS STUDIO */}
      {/* ---------------------------------------------------- */}
      {activeTab === "bfs" && (
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-sky-800 uppercase font-bold tracking-wider">
                Mô Phỏng Lan Tỏa Sóng BFS Theo Tầng Khoảng Cách
              </span>
              <h4 className="text-sm font-bold text-slate-800 font-mono">
                {curBfs.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{curBfs.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setBfsStep(Math.max(0, bfsStep - 1))}
                disabled={bfsStep === 0}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-mono font-bold text-sky-950 px-1">
                {bfsStep + 1} / {bfsSteps.length}
              </span>
              <button
                onClick={() => setBfsStep(Math.min(bfsSteps.length - 1, bfsStep + 1))}
                disabled={bfsStep === bfsSteps.length - 1}
                className="px-4 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-sm"
              >
                Tiếp theo
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setBfsStep(0)}
                className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graph Visualizer + Queue Inspector Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-sky-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Đồ Thị 6 Đỉnh [0..5] (Nguồn S = 0)</span>
                <span className="text-sky-950 font-bold">Tầng Khoảng Cách Hiện Tại: d = {curBfs.currentLevel}</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Edges */}
                  <line x1="60" y1="100" x2="160" y2="50" stroke={curBfs.activeEdges.includes("0-1") ? "#0284c7" : "#cbd5e1"} strokeWidth={curBfs.activeEdges.includes("0-1") ? "3" : "1.5"} />
                  <line x1="60" y1="100" x2="160" y2="150" stroke={curBfs.activeEdges.includes("0-2") ? "#0284c7" : "#cbd5e1"} strokeWidth={curBfs.activeEdges.includes("0-2") ? "3" : "1.5"} />
                  <line x1="160" y1="50" x2="260" y2="40" stroke={curBfs.activeEdges.includes("1-3") ? "#0284c7" : "#cbd5e1"} strokeWidth={curBfs.activeEdges.includes("1-3") ? "3" : "1.5"} />
                  <line x1="160" y1="150" x2="260" y2="120" stroke={curBfs.activeEdges.includes("2-4") ? "#0284c7" : "#cbd5e1"} strokeWidth={curBfs.activeEdges.includes("2-4") ? "3" : "1.5"} />
                  <line x1="160" y1="150" x2="260" y2="170" stroke={curBfs.activeEdges.includes("2-5") ? "#0284c7" : "#cbd5e1"} strokeWidth={curBfs.activeEdges.includes("2-5") ? "3" : "1.5"} />

                  {/* Node 0 (Source) */}
                  <circle cx="60" cy="100" r="18" fill={curBfs.activeNode === 0 ? "#fef3c7" : curBfs.visited.includes(0) ? "#d1fae5" : "#ffffff"} stroke={curBfs.activeNode === 0 ? "#d97706" : "#0284c7"} strokeWidth="2.5" />
                  <text x="60" y="104.5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="monospace">0</text>
                  <text x="60" y="76" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">d=0 (S)</text>

                  {/* Node 1 (Level 1) */}
                  <circle cx="160" cy="50" r="16" fill={curBfs.activeNode === 1 ? "#fef3c7" : curBfs.visited.includes(1) ? "#d1fae5" : "#ffffff"} stroke={curBfs.activeNode === 1 ? "#d97706" : curBfs.visited.includes(1) ? "#059669" : "#94a3b8"} strokeWidth="2" />
                  <text x="160" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>
                  {curBfs.distances[1] !== undefined && (
                    <text x="160" y="28" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold" fontFamily="monospace">d=1</text>
                  )}

                  {/* Node 2 (Level 1) */}
                  <circle cx="160" cy="150" r="16" fill={curBfs.activeNode === 2 ? "#fef3c7" : curBfs.visited.includes(2) ? "#d1fae5" : "#ffffff"} stroke={curBfs.activeNode === 2 ? "#d97706" : curBfs.visited.includes(2) ? "#059669" : "#94a3b8"} strokeWidth="2" />
                  <text x="160" y="154" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>
                  {curBfs.distances[2] !== undefined && (
                    <text x="160" y="178" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold" fontFamily="monospace">d=1</text>
                  )}

                  {/* Node 3 (Level 2) */}
                  <circle cx="260" cy="40" r="15" fill={curBfs.activeNode === 3 ? "#fef3c7" : curBfs.visited.includes(3) ? "#d1fae5" : "#ffffff"} stroke={curBfs.activeNode === 3 ? "#d97706" : curBfs.visited.includes(3) ? "#059669" : "#94a3b8"} strokeWidth="2" />
                  <text x="260" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>
                  {curBfs.distances[3] !== undefined && (
                    <text x="260" y="18" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="bold" fontFamily="monospace">d=2</text>
                  )}

                  {/* Node 4 (Level 2) */}
                  <circle cx="260" cy="120" r="15" fill={curBfs.activeNode === 4 ? "#fef3c7" : curBfs.visited.includes(4) ? "#d1fae5" : "#ffffff"} stroke={curBfs.activeNode === 4 ? "#d97706" : curBfs.visited.includes(4) ? "#059669" : "#94a3b8"} strokeWidth="2" />
                  <text x="260" y="124" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
                  {curBfs.distances[4] !== undefined && (
                    <text x="295" y="124" textAnchor="start" fill="#0891b2" fontSize="9" fontWeight="bold" fontFamily="monospace">d=2</text>
                  )}

                  {/* Node 5 (Level 2) */}
                  <circle cx="260" cy="170" r="15" fill={curBfs.activeNode === 5 ? "#fef3c7" : curBfs.visited.includes(5) ? "#d1fae5" : "#ffffff"} stroke={curBfs.activeNode === 5 ? "#d97706" : curBfs.visited.includes(5) ? "#059669" : "#94a3b8"} strokeWidth="2" />
                  <text x="260" y="174" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
                  {curBfs.distances[5] !== undefined && (
                    <text x="295" y="174" textAnchor="start" fill="#0891b2" fontSize="9" fontWeight="bold" fontFamily="monospace">d=2</text>
                  )}
                </svg>
              </div>
            </div>

            {/* Right: Queue FIFO Inspector (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-sky-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Hàng Đợi FIFO: Queue</span>
                <span className="text-sky-950 font-bold">Vào sau &bull; Ra trước</span>
              </div>

              {/* Queue Visual Box */}
              <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 flex items-center gap-2 overflow-x-auto min-h-[50px]">
                <span className="text-[10px] text-slate-500 font-mono">Đầu (FRONT) &rarr;</span>
                {curBfs.queue.length > 0 ? (
                  curBfs.queue.map((nodeId, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white border border-sky-300 text-sky-950 font-mono font-extrabold text-xs shadow-sm"
                    >
                      Đỉnh [{nodeId}]
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 font-mono italic">Hàng đợi rỗng (Queue Empty)</span>
                )}
                <span className="text-[10px] text-slate-500 font-mono ml-auto">&larr; Đuôi (BACK)</span>
              </div>

              {/* Distance Array Tracker */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1.5">
                <span className="text-slate-600 block text-[11px] font-semibold">Mảng Khoảng Cách d[0..5]:</span>
                <div className="grid grid-cols-6 gap-1 text-center text-xs">
                  {[0, 1, 2, 3, 4, 5].map((id) => (
                    <div key={id} className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <span className="text-[10px] text-slate-500 block">d[{id}]</span>
                      <strong className={curBfs.distances[id] !== undefined ? "text-sky-950" : "text-slate-400"}>
                        {curBfs.distances[id] !== undefined ? curBfs.distances[id] : "∞"}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 2: DFS STUDIO */}
      {/* ---------------------------------------------------- */}
      {activeTab === "dfs" && (
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-purple-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-purple-800 uppercase font-bold tracking-wider">
                Mô Phỏng Đâm Sâu &amp; Quay Lui (Backtracking) DFS
              </span>
              <h4 className="text-sm font-bold text-slate-800 font-mono">
                {curDfs.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{curDfs.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setDfsStep(Math.max(0, dfsStep - 1))}
                disabled={dfsStep === 0}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-mono font-bold text-purple-950 px-1">
                {dfsStep + 1} / {dfsSteps.length}
              </span>
              <button
                onClick={() => setDfsStep(Math.min(dfsSteps.length - 1, dfsStep + 1))}
                disabled={dfsStep === dfsSteps.length - 1}
                className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-sm"
              >
                Tiếp theo
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setDfsStep(0)}
                className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graph Visualizer + Stack Inspector Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-purple-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Quỹ Đạo Đi Sâu &amp; Quay Lui (Backtrack)</span>
                <span className="text-purple-950 font-bold">Lệnh: {curDfs.action}</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Edges */}
                  <line x1="60" y1="100" x2="160" y2="50" stroke={curDfs.visited.includes(1) ? "#7c3aed" : "#cbd5e1"} strokeWidth={curDfs.visited.includes(1) ? "3" : "1.5"} />
                  <line x1="60" y1="100" x2="160" y2="150" stroke={curDfs.visited.includes(2) ? "#7c3aed" : "#cbd5e1"} strokeWidth={curDfs.visited.includes(2) ? "3" : "1.5"} />
                  <line x1="160" y1="50" x2="260" y2="40" stroke={curDfs.visited.includes(3) ? "#7c3aed" : "#cbd5e1"} strokeWidth={curDfs.visited.includes(3) ? "3" : "1.5"} />
                  <line x1="260" y1="40" x2="260" y2="120" stroke={curDfs.visited.includes(4) ? "#7c3aed" : "#cbd5e1"} strokeWidth={curDfs.visited.includes(4) ? "3" : "1.5"} />
                  <line x1="260" y1="40" x2="260" y2="170" stroke={curDfs.visited.includes(5) ? "#7c3aed" : "#cbd5e1"} strokeWidth={curDfs.visited.includes(5) ? "3" : "1.5"} />

                  {/* Node 0 */}
                  <circle cx="60" cy="100" r="18" fill={curDfs.activeNode === 0 ? "#fef3c7" : curDfs.visited.includes(0) ? "#f3e8ff" : "#ffffff"} stroke={curDfs.activeNode === 0 ? "#d97706" : "#7c3aed"} strokeWidth="2.5" />
                  <text x="60" y="104.5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="monospace">0</text>

                  {/* Node 1 */}
                  <circle cx="160" cy="50" r="16" fill={curDfs.activeNode === 1 ? "#fef3c7" : curDfs.visited.includes(1) ? "#f3e8ff" : "#ffffff"} stroke={curDfs.activeNode === 1 ? "#d97706" : curDfs.visited.includes(1) ? "#7c3aed" : "#94a3b8"} strokeWidth="2" />
                  <text x="160" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  {/* Node 2 */}
                  <circle cx="160" cy="150" r="16" fill={curDfs.activeNode === 2 ? "#fef3c7" : curDfs.visited.includes(2) ? "#f3e8ff" : "#ffffff"} stroke={curDfs.activeNode === 2 ? "#d97706" : curDfs.visited.includes(2) ? "#7c3aed" : "#94a3b8"} strokeWidth="2" />
                  <text x="160" y="154" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  {/* Node 3 */}
                  <circle cx="260" cy="40" r="15" fill={curDfs.activeNode === 3 ? "#fef3c7" : curDfs.visited.includes(3) ? "#f3e8ff" : "#ffffff"} stroke={curDfs.activeNode === 3 ? "#d97706" : curDfs.visited.includes(3) ? "#7c3aed" : "#94a3b8"} strokeWidth="2" />
                  <text x="260" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  {/* Node 4 */}
                  <circle cx="260" cy="120" r="15" fill={curDfs.activeNode === 4 ? "#fef3c7" : curDfs.visited.includes(4) ? "#f3e8ff" : "#ffffff"} stroke={curDfs.activeNode === 4 ? "#d97706" : curDfs.visited.includes(4) ? "#7c3aed" : "#94a3b8"} strokeWidth="2" />
                  <text x="260" y="124" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>

                  {/* Node 5 */}
                  <circle cx="260" cy="170" r="15" fill={curDfs.activeNode === 5 ? "#fef3c7" : curDfs.visited.includes(5) ? "#f3e8ff" : "#ffffff"} stroke={curDfs.activeNode === 5 ? "#d97706" : curDfs.visited.includes(5) ? "#7c3aed" : "#94a3b8"} strokeWidth="2" />
                  <text x="260" y="174" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
                </svg>
              </div>
            </div>

            {/* Right: Call Stack Inspector (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-purple-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Ngăn Xếp LIFO: Call Stack</span>
                <span className="text-purple-950 font-bold">Vào sau &bull; Ra trước</span>
              </div>

              {/* Stack Visual Box (Vertical) */}
              <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1.5 min-h-[140px] flex flex-col-reverse justify-start">
                <span className="text-[10px] text-slate-500 font-mono block text-center border-t border-purple-200 pt-1">
                  ĐÁY STACK (BOTTOM)
                </span>
                {curDfs.stack.map((nodeId, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-xl bg-white border border-purple-300 text-purple-950 font-mono font-bold text-xs flex items-center justify-between shadow-sm"
                  >
                    <span>dfs({nodeId})</span>
                    {idx === curDfs.stack.length - 1 && (
                      <span className="px-1.5 py-0.5 rounded bg-purple-600 text-white text-[9px] uppercase font-bold">
                        Đỉnh (TOP)
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-600 font-sans leading-relaxed">
                💡 Khi đâm sâu vào một đỉnh, ta gọi đệ quy <code>dfs(u)</code> (PUSH vào Stack). Khi gặp ngõ cụt, hàm return (POP khỏi Stack) để quay lui về đỉnh cha!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 3: SHOWDOWN DUEL ARENA */}
      {/* ---------------------------------------------------- */}
      {activeTab === "duel" && (
        <div className="space-y-6">
          {/* Scenario Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
            {[
              { id: "shortestPath", label: "1. Đường Đi Ngắn Nhất" },
              { id: "cycleDetect", label: "2. Phát Hiện Chu Trình" },
              { id: "topoSort", label: "3. Topological Sort" },
              { id: "socialDistance", label: "4. Bán Kính Mạng Xã Hội" },
            ].map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedScenario(sc.id)}
                className={`p-3.5 rounded-2xl border text-xs font-mono font-bold transition-all text-left shadow-sm ${
                  selectedScenario === sc.id
                    ? "bg-emerald-100 border-emerald-400 text-emerald-950 ring-2 ring-emerald-500/40"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>

          {/* Scenario Duel Outcome Card */}
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-3 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-xs text-slate-600 font-sans">
                Tình huống thực tế: <strong>{curScenario.question}</strong>
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold ${
                curScenario.winner === "BFS"
                  ? "bg-sky-100 border border-sky-300 text-sky-950 shadow-sm"
                  : "bg-purple-100 border border-purple-300 text-purple-950 shadow-sm"
              }`}>
                {curScenario.badge}
              </span>
            </div>

            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              {curScenario.reason}
            </p>
          </div>

          {/* Master 5-Criteria Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-50 text-slate-700 font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="p-3">Tiêu Chí So Sánh</th>
                  <th className="p-3 text-sky-950 font-bold">Breadth-First Search (BFS)</th>
                  <th className="p-3 text-purple-950 font-bold">Depth-First Search (DFS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">1. Cấu Trúc Dữ Liệu</td>
                  <td className="p-3 text-sky-950 font-mono font-bold">Queue (Hàng đợi FIFO)</td>
                  <td className="p-3 text-purple-950 font-mono font-bold">Stack / Call Stack Đệ Quy (LIFO)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">2. Quỹ Đạo Khám Phá</td>
                  <td className="p-3">Quét sóng tròn lan tỏa đều theo từng tầng khoảng cách</td>
                  <td className="p-3">Đâm sâu hết cỡ một nhánh rồi quay lui (Backtracking)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">3. Bộ Nhớ Phụ Thuật Toán</td>
                  <td className="p-3 font-mono">O(Width) — Bề rộng tối đa của cây BFS</td>
                  <td className="p-3 font-mono">O(Depth) — Chiều sâu tối đa của ngăn xếp đệ quy</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">4. Vũ Khí Độc Quyền</td>
                  <td className="p-3 text-sky-900 font-semibold">Tìm đường đi ngắn nhất (Shortest Path) unweighted</td>
                  <td className="p-3 text-purple-900 font-semibold">Topological Sort, Phát hiện chu trình, Thành phần liên thông mạnh (SCC)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">5. Độ Phức Tạp Thời Gian</td>
                  <td className="p-3 text-emerald-900 font-mono font-bold">O(V + E) với Adjacency List</td>
                  <td className="p-3 text-emerald-900 font-mono font-bold">O(V + E) với Adjacency List</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
