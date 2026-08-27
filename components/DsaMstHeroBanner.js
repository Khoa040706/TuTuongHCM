"use client";

import React, { useState } from "react";
import {
  Zap,
  ArrowRight,
  RotateCcw,
  Swords,
  TreeDeciduous,
  TreePine,
} from "lucide-react";

export default function DsaMstHeroBanner() {
  const [activeTab, setActiveTab] = useState("kruskal"); // "kruskal" | "prim" | "duel"

  // ----------------------------------------------------
  // Kruskal Simulation State
  // ----------------------------------------------------
  const [kruskalStep, setKruskalStep] = useState(0);

  const kruskalSteps = [
    {
      title: "Bước 0: Sắp xếp danh sách cạnh theo trọng số tăng dần",
      desc: "Toàn bộ 9 cạnh được sắp xếp theo trọng số: (1-2: 1), (0-2: 2), (3-4: 2), (4-5: 3), (0-1: 4), (1-3: 5), (3-5: 6), (2-3: 8), (2-4: 10). Khởi tạo UFDS gồm 6 tập rời nhau.",
      acceptedEdges: [],
      rejectedEdges: [],
      currentEdge: null,
      totalWeight: 0,
      ufdsSets: ["{0}", "{1}", "{2}", "{3}", "{4}", "{5}"],
      action: "INIT UFDS & SORT EDGES",
    },
    {
      title: "Bước 1: Xét cạnh (1, 2) với trọng số w = 1",
      desc: "UFDS kiểm tra: isSameSet(1, 2) == false ⟹ Nạp cạnh (1, 2) vào MST! Gộp tập {1} và {2}.",
      acceptedEdges: ["1-2"],
      rejectedEdges: [],
      currentEdge: "1-2",
      totalWeight: 1,
      ufdsSets: ["{0}", "{1, 2}", "{3}", "{4}", "{5}"],
      action: "ACCEPT (1, 2) • w = 1",
    },
    {
      title: "Bước 2: Xét cạnh (0, 2) với trọng số w = 2",
      desc: "UFDS kiểm tra: isSameSet(0, 2) == false ⟹ Nạp cạnh (0, 2) vào MST! Gộp tập {0} và {1, 2}.",
      acceptedEdges: ["1-2", "0-2"],
      rejectedEdges: [],
      currentEdge: "0-2",
      totalWeight: 3,
      ufdsSets: ["{0, 1, 2}", "{3}", "{4}", "{5}"],
      action: "ACCEPT (0, 2) • w = 2",
    },
    {
      title: "Bước 3: Xét cạnh (3, 4) với trọng số w = 2",
      desc: "UFDS kiểm tra: isSameSet(3, 4) == false ⟹ Nạp cạnh (3, 4) vào MST! Gộp tập {3} và {4}.",
      acceptedEdges: ["1-2", "0-2", "3-4"],
      rejectedEdges: [],
      currentEdge: "3-4",
      totalWeight: 5,
      ufdsSets: ["{0, 1, 2}", "{3, 4}", "{5}"],
      action: "ACCEPT (3, 4) • w = 2",
    },
    {
      title: "Bước 4: Xét cạnh (4, 5) với trọng số w = 3",
      desc: "UFDS kiểm tra: isSameSet(4, 5) == false ⟹ Nạp cạnh (4, 5) vào MST! Gộp tập {3, 4} và {5}.",
      acceptedEdges: ["1-2", "0-2", "3-4", "4-5"],
      rejectedEdges: [],
      currentEdge: "4-5",
      totalWeight: 8,
      ufdsSets: ["{0, 1, 2}", "{3, 4, 5}"],
      action: "ACCEPT (4, 5) • w = 3",
    },
    {
      title: "Bước 5: Xét cạnh (0, 1) với trọng số w = 4 (TẠO CHU TRÌNH!)",
      desc: "UFDS kiểm tra: isSameSet(0, 1) == true (vì 0, 1, 2 đã cùng tập {0, 1, 2}) ⟹ TỪ CHỐI CẠNH để ngăn chu trình 0-1-2-0!",
      acceptedEdges: ["1-2", "0-2", "3-4", "4-5"],
      rejectedEdges: ["0-1"],
      currentEdge: "0-1",
      totalWeight: 8,
      ufdsSets: ["{0, 1, 2}", "{3, 4, 5}"],
      action: "REJECT (0, 1) • CHU TRÌNH!",
    },
    {
      title: "Bước 6: Xét cạnh (1, 3) với trọng số w = 5 ⟹ HOÀN TẤT MST!",
      desc: "isSameSet(1, 3) == false ⟹ Nạp cạnh (1, 3). Đã đủ đúng E = V - 1 = 5 cạnh! Dừng thuật toán. Tổng trọng số MST = 13.",
      acceptedEdges: ["1-2", "0-2", "3-4", "4-5", "1-3"],
      rejectedEdges: ["0-1"],
      currentEdge: "1-3",
      totalWeight: 13,
      ufdsSets: ["{0, 1, 2, 3, 4, 5}"],
      action: "ACCEPT (1, 3) • ĐỦ 5 CẠNH ⟹ MST XONG!",
    },
  ];

  // ----------------------------------------------------
  // Prim Simulation State
  // ----------------------------------------------------
  const [primStep, setPrimStep] = useState(0);

  const primSteps = [
    {
      title: "Bước 0: Khởi tạo tập cây S = {0} từ đỉnh nguồn",
      desc: "Đưa các cạnh kề từ đỉnh 0 vào Min-Heap: (0-2: 2), (0-1: 4). Tập cây S = {0}, chưa thuộc cây V \\ S = {1, 2, 3, 4, 5}.",
      visitedNodes: [0],
      treeEdges: [],
      pq: ["(0-2, w=2)", "(0-1, w=4)"],
      totalWeight: 0,
      action: "START AT 0",
    },
    {
      title: "Bước 1: Rút cạnh nhỏ nhất (0, 2) có w = 2 từ Min-Heap",
      desc: "Đỉnh 2 được thêm vào cây S. Nạp các cạnh kề từ 2 sang đỉnh chưa thăm vào Min-Heap: (1-2: 1), (2-3: 8), (2-4: 10).",
      visitedNodes: [0, 2],
      treeEdges: ["0-2"],
      pq: ["(1-2, w=1)", "(0-1, w=4)", "(1-3, w=5)", "(2-3, w=8)", "(2-4, w=10)"],
      totalWeight: 2,
      action: "POP (0, 2) ⟹ VISIT 2",
    },
    {
      title: "Bước 2: Rút cạnh nhỏ nhất (1, 2) có w = 1 từ Min-Heap",
      desc: "Đỉnh 1 được thêm vào cây S. Nạp các cạnh kề từ 1 sang đỉnh chưa thăm vào Min-Heap: (1-3: 5). Cạnh (0-1: 4) bị bỏ qua vì cả 0 và 1 đã thuộc S.",
      visitedNodes: [0, 2, 1],
      treeEdges: ["0-2", "1-2"],
      pq: ["(1-3, w=5)", "(2-3, w=8)", "(2-4, w=10)"],
      totalWeight: 3,
      action: "POP (1, 2) ⟹ VISIT 1",
    },
    {
      title: "Bước 3: Rút cạnh nhỏ nhất (1, 3) có w = 5 từ Min-Heap",
      desc: "Đỉnh 3 được thêm vào cây S. Nạp các cạnh kề từ 3 vào Min-Heap: (3-4: 2), (3-5: 6).",
      visitedNodes: [0, 2, 1, 3],
      treeEdges: ["0-2", "1-2", "1-3"],
      pq: ["(3-4, w=2)", "(3-5, w=6)", "(2-3, w=8)", "(2-4, w=10)"],
      totalWeight: 8,
      action: "POP (1, 3) ⟹ VISIT 3",
    },
    {
      title: "Bước 4: Rút cạnh nhỏ nhất (3, 4) có w = 2 từ Min-Heap",
      desc: "Đỉnh 4 được thêm vào cây S. Nạp các cạnh kề từ 4 vào Min-Heap: (4-5: 3).",
      visitedNodes: [0, 2, 1, 3, 4],
      treeEdges: ["0-2", "1-2", "1-3", "3-4"],
      pq: ["(4-5, w=3)", "(3-5, w=6)", "(2-4, w=10)"],
      totalWeight: 10,
      action: "POP (3, 4) ⟹ VISIT 4",
    },
    {
      title: "Bước 5: Rút cạnh nhỏ nhất (4, 5) có w = 3 ⟹ HOÀN TẤT MST!",
      desc: "Đỉnh 5 được thêm vào cây S. Toàn bộ 6 đỉnh đã được phủ kín! Tổng trọng số MST = 13.",
      visitedNodes: [0, 2, 1, 3, 4, 5],
      treeEdges: ["0-2", "1-2", "1-3", "3-4", "4-5"],
      pq: [],
      totalWeight: 13,
      action: "POP (4, 5) ⟹ ALL NODES COVERED!",
    },
  ];

  // ----------------------------------------------------
  // Duel Scenarios State
  // ----------------------------------------------------
  const [selectedDuelScenario, setSelectedDuelScenario] = useState("sparse");

  const duelScenarios = {
    sparse: {
      question: "Đồ thị thưa (Sparse Graph có E ≈ V) như mạng lưới đường dây điện nối các tòa nhà?",
      winner: "Kruskal",
      badge: "KRUSKAL CHIẾM ƯU THẾ 🌲",
      color: "emerald",
      reason: "Kruskal sắp xếp E cạnh trong O(E log E) ≈ O(V log V) cực nhanh, thuật toán đơn giản với Edge List + UFDS!",
    },
    dense: {
      question: "Đồ thị dày đặc (Dense Graph có E ≈ V²) nối mọi cặp cụm máy chủ trung tâm?",
      winner: "Prim",
      badge: "PRIM CHIẾM ƯU THẾ 🌿",
      color: "amber",
      reason: "Prim cài đặt với mảng ma trận kề không cần Heap đạt O(V²), nhanh hơn Kruskal phải sắp xếp tới V² log(V²) cạnh!",
    },
    disconnected: {
      question: "Đồ thị bị phân rã thành nhiều thành phần liên thông rời rạc?",
      winner: "Kruskal",
      badge: "KRUSKAL TỰ ĐỘNG TẠO RỪNG KHUNG (MSF) 🌲",
      color: "emerald",
      reason: "Kruskal tự động xây dựng Rừng cây khung nhỏ nhất (Minimum Spanning Forest) trên toàn bộ đồ thị mà không cần can thiệp vòng lặp ngoài!",
    },
  };

  const curKruskal = kruskalSteps[kruskalStep];
  const curPrim = primSteps[primStep];
  const curDuel = duelScenarios[selectedDuelScenario];

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm font-sans">
      {/* Glow Effects */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      {/* Main Header Banner */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-indigo-200/80 pb-6 mb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 via-teal-100 to-amber-100 border border-emerald-300 text-emerald-950 text-xs font-mono font-bold tracking-wide">
            <TreeDeciduous className="w-4 h-4 text-emerald-700" />
            <span>CẤU TRÚC CÂY KHUNG NHỎ NHẤT CS2010 • CHƯƠNG 13</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
              Bài 13: Cây Khung Nhỏ Nhất (MST)
            </span>
            <br />
            <span className="text-xl sm:text-2xl text-slate-700 font-bold">
              Minimum Spanning Tree — Thuật Toán Kruskal &amp; Thuật Toán Prim
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hai thuật toán tham lam (Greedy) kinh điển kết nối toàn bộ $V$ đỉnh với đúng $E = V - 1$ cạnh và tổng trọng số nhỏ nhất: <strong>Kruskal</strong> hướng cạnh sắp xếp danh sách và dùng <strong>UFDS</strong> $O(E \log E)$, đối đầu trực diện với <strong>Prim</strong> hướng đỉnh mở rộng cây qua <strong>Priority Queue (Min-Heap)</strong> $O(E \log V)$.
          </p>
        </div>

        {/* 3 Quick Badges */}
        <div className="flex flex-row lg:flex-col gap-2.5 self-start lg:self-auto font-mono text-xs">
          <div className="px-3.5 py-2 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold flex items-center gap-2 shadow-sm">
            <TreePine className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kruskal: Edge List + UFDS</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-bold flex items-center gap-2 shadow-sm">
            <TreeDeciduous className="w-3.5 h-3.5 text-amber-700" />
            <span>Prim: AdjList + Min-Heap</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-bold flex items-center gap-2 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-teal-700" />
            <span>Mục tiêu: Min Σ weight, E = V-1</span>
          </div>
        </div>
      </div>

      {/* 3-Playground Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6">
        <button
          onClick={() => setActiveTab("kruskal")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm ${
            activeTab === "kruskal"
              ? "bg-emerald-600 text-white ring-2 ring-emerald-400/40"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <TreePine className="w-3.5 h-3.5 text-emerald-200" />
          <span>1. Kruskal Edge-Sorted UFDS Studio</span>
        </button>

        <button
          onClick={() => setActiveTab("prim")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm ${
            activeTab === "prim"
              ? "bg-amber-500 text-slate-950 ring-2 ring-amber-400/40 font-extrabold"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <TreeDeciduous className="w-3.5 h-3.5 text-amber-700" />
          <span>2. Prim Min-Heap Growing Tree Studio</span>
        </button>

        <button
          onClick={() => setActiveTab("duel")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm ${
            activeTab === "duel"
              ? "bg-teal-600 text-white ring-2 ring-teal-400/40"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Swords className="w-3.5 h-3.5 text-teal-200" />
          <span>3. Kruskal vs Prim Showdown Arena</span>
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* TAB 1: KRUSKAL STUDIO */}
      {/* ---------------------------------------------------- */}
      {activeTab === "kruskal" && (
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-800 uppercase font-bold tracking-wider">
                Mô Phỏng Thuật Toán Kruskal Với Cấu Trúc UFDS
              </span>
              <h4 className="text-sm font-bold text-slate-800 font-mono">
                {curKruskal.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{curKruskal.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setKruskalStep(Math.max(0, kruskalStep - 1))}
                disabled={kruskalStep === 0}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-mono font-bold text-emerald-950 px-1">
                {kruskalStep + 1} / {kruskalSteps.length}
              </span>
              <button
                onClick={() => setKruskalStep(Math.min(kruskalSteps.length - 1, kruskalStep + 1))}
                disabled={kruskalStep === kruskalSteps.length - 1}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-sm"
              >
                Tiếp theo
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setKruskalStep(0)}
                className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graph Visualizer + UFDS & Weight Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Đồ Thị 6 Đỉnh [0..5] (9 Cạnh Có Trọng Số)</span>
                <span className="text-amber-950 font-bold">Tổng Trọng Số MST: W = {curKruskal.totalWeight}</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Edges */}
                  {/* 0-1 (wt:4) */}
                  <line x1="60" y1="50" x2="160" y2="40" stroke={curKruskal.rejectedEdges.includes("0-1") ? "#f43f5e" : "#cbd5e1"} strokeWidth={curKruskal.rejectedEdges.includes("0-1") ? "2" : "1.5"} strokeDasharray={curKruskal.rejectedEdges.includes("0-1") ? "4" : "0"} />
                  <text x="110" y="38" textAnchor="middle" fill={curKruskal.rejectedEdges.includes("0-1") ? "#e11d48" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">4</text>

                  {/* 0-2 (wt:2) */}
                  <line x1="60" y1="50" x2="110" y2="150" stroke={curKruskal.acceptedEdges.includes("0-2") ? "#d97706" : "#cbd5e1"} strokeWidth={curKruskal.acceptedEdges.includes("0-2") ? "3.5" : "1.5"} />
                  <text x="75" y="110" textAnchor="middle" fill={curKruskal.acceptedEdges.includes("0-2") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  {/* 1-2 (wt:1) */}
                  <line x1="160" y1="40" x2="110" y2="150" stroke={curKruskal.acceptedEdges.includes("1-2") ? "#d97706" : "#cbd5e1"} strokeWidth={curKruskal.acceptedEdges.includes("1-2") ? "3.5" : "1.5"} />
                  <text x="142" y="105" textAnchor="middle" fill={curKruskal.acceptedEdges.includes("1-2") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">1</text>

                  {/* 1-3 (wt:5) */}
                  <line x1="160" y1="40" x2="260" y2="50" stroke={curKruskal.acceptedEdges.includes("1-3") ? "#d97706" : "#cbd5e1"} strokeWidth={curKruskal.acceptedEdges.includes("1-3") ? "3.5" : "1.5"} />
                  <text x="210" y="38" textAnchor="middle" fill={curKruskal.acceptedEdges.includes("1-3") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">5</text>

                  {/* 2-3 (wt:8) */}
                  <line x1="110" y1="150" x2="260" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="195" y="115" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">8</text>

                  {/* 3-4 (wt:2) */}
                  <line x1="260" y1="50" x2="260" y2="150" stroke={curKruskal.acceptedEdges.includes("3-4") ? "#d97706" : "#cbd5e1"} strokeWidth={curKruskal.acceptedEdges.includes("3-4") ? "3.5" : "1.5"} />
                  <text x="272" y="105" textAnchor="start" fill={curKruskal.acceptedEdges.includes("3-4") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  {/* 4-5 (wt:3) */}
                  <line x1="260" y1="150" x2="340" y2="100" stroke={curKruskal.acceptedEdges.includes("4-5") ? "#d97706" : "#cbd5e1"} strokeWidth={curKruskal.acceptedEdges.includes("4-5") ? "3.5" : "1.5"} />
                  <text x="310" y="140" textAnchor="middle" fill={curKruskal.acceptedEdges.includes("4-5") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">3</text>

                  {/* 3-5 (wt:6) */}
                  <line x1="260" y1="50" x2="340" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="310" y="70" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">6</text>

                  {/* Nodes */}
                  <circle cx="60" cy="50" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="60" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

                  <circle cx="160" cy="40" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="160" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  <circle cx="110" cy="150" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="110" y="154" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  <circle cx="260" cy="50" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="260" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  <circle cx="260" cy="150" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="260" y="154" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>

                  <circle cx="340" cy="100" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="340" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
                </svg>
              </div>
            </div>

            {/* Right: UFDS State & Edge Queue (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Trạng Thái UFDS Rừng Cây</span>
                <span className="text-emerald-950 font-bold">{curKruskal.action}</span>
              </div>

              {/* UFDS Sets Visualizer */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 shadow-sm">
                <span className="text-[11px] text-slate-600 font-mono block font-semibold">Các Tập Rời Nhau Hiện Tại:</span>
                <div className="flex flex-wrap gap-1.5">
                  {curKruskal.ufdsSets.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-950 font-mono font-bold text-xs shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accepted Edges List */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-600 font-semibold">Cạnh MST ({curKruskal.acceptedEdges.length} / 5):</span>
                  <span className="text-amber-950 font-bold">W = {curKruskal.totalWeight}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {curKruskal.acceptedEdges.length > 0 ? (
                    curKruskal.acceptedEdges.map((e, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-white border border-amber-300 text-amber-950 font-mono font-bold text-xs shadow-sm"
                      >
                        ({e})
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 font-mono italic">Chưa chọn cạnh nào</span>
                  )}
                </div>
              </div>

              <div className="text-[11px] text-slate-600 font-sans leading-relaxed">
                💡 <strong>Kruskal:</strong> Dùng Edge List sắp xếp $O(E \log E)$, mỗi bước gọi <code>isSameSet</code> $O(\alpha(V)) \approx O(1)$ kiểm tra chu trình và <code>unionSet</code> gộp đỉnh.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 2: PRIM STUDIO */}
      {/* ---------------------------------------------------- */}
      {activeTab === "prim" && (
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-amber-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-amber-800 uppercase font-bold tracking-wider">
                Mô Phỏng Thuật Toán Prim Với Hàng Đợi Ưu Tiên Min-Heap
              </span>
              <h4 className="text-sm font-bold text-slate-800 font-mono">
                {curPrim.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{curPrim.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setPrimStep(Math.max(0, primStep - 1))}
                disabled={primStep === 0}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold transition-all shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-mono font-bold text-amber-950 px-1">
                {primStep + 1} / {primSteps.length}
              </span>
              <button
                onClick={() => setPrimStep(Math.min(primSteps.length - 1, primStep + 1))}
                disabled={primStep === primSteps.length - 1}
                className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs transition-all shadow-sm"
              >
                Tiếp theo
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setPrimStep(0)}
                className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graph Visualizer + Min-Heap Inspector Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Cây Lớn Dần Từ Nguồn S = 0</span>
                <span className="text-amber-950 font-bold">Tổng Trọng Số: W = {curPrim.totalWeight}</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Edges */}
                  <line x1="60" y1="50" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                  <text x="110" y="38" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="monospace">4</text>

                  <line x1="60" y1="50" x2="110" y2="150" stroke={curPrim.treeEdges.includes("0-2") ? "#059669" : "#cbd5e1"} strokeWidth={curPrim.treeEdges.includes("0-2") ? "3.5" : "1.5"} />
                  <text x="75" y="110" textAnchor="middle" fill={curPrim.treeEdges.includes("0-2") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  <line x1="160" y1="40" x2="110" y2="150" stroke={curPrim.treeEdges.includes("1-2") ? "#059669" : "#cbd5e1"} strokeWidth={curPrim.treeEdges.includes("1-2") ? "3.5" : "1.5"} />
                  <text x="142" y="105" textAnchor="middle" fill={curPrim.treeEdges.includes("1-2") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">1</text>

                  <line x1="160" y1="40" x2="260" y2="50" stroke={curPrim.treeEdges.includes("1-3") ? "#059669" : "#cbd5e1"} strokeWidth={curPrim.treeEdges.includes("1-3") ? "3.5" : "1.5"} />
                  <text x="210" y="38" textAnchor="middle" fill={curPrim.treeEdges.includes("1-3") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">5</text>

                  <line x1="260" y1="50" x2="260" y2="150" stroke={curPrim.treeEdges.includes("3-4") ? "#059669" : "#cbd5e1"} strokeWidth={curPrim.treeEdges.includes("3-4") ? "3.5" : "1.5"} />
                  <text x="272" y="105" textAnchor="start" fill={curPrim.treeEdges.includes("3-4") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  <line x1="260" y1="150" x2="340" y2="100" stroke={curPrim.treeEdges.includes("4-5") ? "#059669" : "#cbd5e1"} strokeWidth={curPrim.treeEdges.includes("4-5") ? "3.5" : "1.5"} />
                  <text x="310" y="140" textAnchor="middle" fill={curPrim.treeEdges.includes("4-5") ? "#059669" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">3</text>

                  {/* Nodes */}
                  <circle cx="60" cy="50" r="15" fill={curPrim.visitedNodes.includes(0) ? "#d1fae5" : "#ffffff"} stroke={curPrim.visitedNodes.includes(0) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="60" y="54" textAnchor="middle" fill={curPrim.visitedNodes.includes(0) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

                  <circle cx="160" cy="40" r="15" fill={curPrim.visitedNodes.includes(1) ? "#d1fae5" : "#ffffff"} stroke={curPrim.visitedNodes.includes(1) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="160" y="44" textAnchor="middle" fill={curPrim.visitedNodes.includes(1) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  <circle cx="110" cy="150" r="15" fill={curPrim.visitedNodes.includes(2) ? "#d1fae5" : "#ffffff"} stroke={curPrim.visitedNodes.includes(2) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="110" y="154" textAnchor="middle" fill={curPrim.visitedNodes.includes(2) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  <circle cx="260" cy="50" r="15" fill={curPrim.visitedNodes.includes(3) ? "#d1fae5" : "#ffffff"} stroke={curPrim.visitedNodes.includes(3) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="260" y="54" textAnchor="middle" fill={curPrim.visitedNodes.includes(3) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  <circle cx="260" cy="150" r="15" fill={curPrim.visitedNodes.includes(4) ? "#d1fae5" : "#ffffff"} stroke={curPrim.visitedNodes.includes(4) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="260" y="154" textAnchor="middle" fill={curPrim.visitedNodes.includes(4) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>

                  <circle cx="340" cy="100" r="15" fill={curPrim.visitedNodes.includes(5) ? "#d1fae5" : "#ffffff"} stroke={curPrim.visitedNodes.includes(5) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="340" y="104" textAnchor="middle" fill={curPrim.visitedNodes.includes(5) ? "#064e3b" : "#0f172a"} fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
                </svg>
              </div>
            </div>

            {/* Right: Min-Heap Inspector (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Hàng Đợi Ưu Tiên: PriorityQueue (Min-Heap)</span>
                <span className="text-amber-950 font-bold">{curPrim.action}</span>
              </div>

              {/* Min-Heap visual box */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5 shadow-sm">
                <span className="text-[11px] text-slate-600 font-mono block font-semibold">Cạnh Chờ Trong Min-Heap:</span>
                <div className="flex flex-wrap gap-1.5">
                  {curPrim.pq.length > 0 ? (
                    curPrim.pq.map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg border font-mono font-bold text-xs shadow-sm ${
                          idx === 0
                            ? "bg-amber-100 border-amber-400 text-amber-950 ring-1 ring-amber-400/50"
                            : "bg-white border-slate-200 text-slate-700"
                        }`}
                      >
                        {idx === 0 ? "👑 TOP: " : ""}{item}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 font-mono italic">Min-Heap Rỗng (Hoàn tất)</span>
                  )}
                </div>
              </div>

              {/* Visited Nodes */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-mono shadow-sm">
                <span className="text-slate-600 block font-semibold">Tập Đỉnh Đã Thuộc Cây S ({curPrim.visitedNodes.length} / 6):</span>
                <div className="flex gap-1.5">
                  {curPrim.visitedNodes.map((n) => (
                    <span key={n} className="w-7 h-7 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 flex items-center justify-center font-bold shadow-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-slate-600 font-sans leading-relaxed">
                💡 <strong>Prim:</strong> Dùng Adjacency List + Min-Heap $O(E \log V)$, luôn rút ra cạnh nhỏ nhất nối giữa tập $S$ và phần còn lại $V \setminus S$.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: "sparse", label: "1. Đồ Thị Thưa (Sparse E ≈ V)" },
              { id: "dense", label: "2. Đồ Thị Dày (Dense E ≈ V²)" },
              { id: "disconnected", label: "3. Đồ Thị Rời Rạc (Rừng Khung MSF)" },
            ].map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedDuelScenario(sc.id)}
                className={`p-3.5 rounded-2xl border text-xs font-mono font-bold transition-all text-left shadow-sm ${
                  selectedDuelScenario === sc.id
                    ? "bg-teal-100 border-teal-400 text-teal-950 ring-2 ring-teal-500/40"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>

          {/* Duel Outcome Card */}
          <div className="p-5 rounded-2xl bg-white border border-teal-200 space-y-3 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-xs text-slate-600 font-sans">
                Tình huống thực tế: <strong>{curDuel.question}</strong>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-teal-100 border border-teal-300 text-teal-950 shadow-sm">
                {curDuel.badge}
              </span>
            </div>

            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              {curDuel.reason}
            </p>
          </div>

          {/* Master 5-Criteria Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-50 text-slate-700 font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="p-3">Tiêu Chí So Sánh</th>
                  <th className="p-3 text-emerald-950 font-bold">Thuật Toán Kruskal</th>
                  <th className="p-3 text-amber-950 font-bold">Thuật Toán Prim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">1. Triết Lý Tham Lam</td>
                  <td className="p-3 text-emerald-900 font-mono font-bold">Hướng Cạnh (Edge-centric)</td>
                  <td className="p-3 text-amber-900 font-mono font-bold">Hướng Đỉnh (Vertex-centric)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">2. Cấu Trúc Nền Tảng</td>
                  <td className="p-3 font-mono">Edge List + UFDS (Disjoint Sets)</td>
                  <td className="p-3 font-mono">Adjacency List + Priority Queue (Min-Heap)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">3. Hành Vi Trung Gian</td>
                  <td className="p-3">Rừng cây rời rạc kết nối và gộp dần lại</td>
                  <td className="p-3">Một cây đơn lẻ phát triển lớn dần từ đỉnh gốc</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">4. Môi Trường Tối Ưu</td>
                  <td className="p-3 text-emerald-900 font-mono font-semibold">Đồ thị thưa (Sparse Graph) O(E log E)</td>
                  <td className="p-3 text-amber-900 font-mono font-semibold">Đồ thị dày (Dense Graph) O(V²) hoặc O(E log V)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800 font-mono">5. Độ Phức Tạp Tổng Quát</td>
                  <td className="p-3 text-teal-900 font-mono font-bold">O(E log V)</td>
                  <td className="p-3 text-teal-900 font-mono font-bold">O(E log V)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
