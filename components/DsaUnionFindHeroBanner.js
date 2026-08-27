"use client";

import React, { useState } from "react";
import {
  Sparkles,
  RotateCcw,
  Share2,
  Binary,
  Network,
  ArrowRight,
  Database,
  Crown
} from "lucide-react";

export default function DsaUnionFindHeroBanner() {
  const [activeTab, setActiveTab] = useState(1); // 1: DSU, 2: Bitmask, 3: Graph

  // ==========================================
  // TAB 1: DSU / UNION-FIND STATE & LOGIC
  // ==========================================
  const initialParents = [0, 1, 2, 3, 4, 5, 6, 7];
  const initialRanks = [0, 0, 0, 0, 0, 0, 0, 0];
  const [parent, setParent] = useState([...initialParents]);
  const [rank, setRank] = useState([...initialRanks]);
  const [nodeU, setNodeU] = useState(0);
  const [nodeV, setNodeV] = useState(1);
  const [enableCompression, setEnableCompression] = useState(true);
  const [enableRank, setEnableRank] = useState(true);
  const [dsuLog, setDsuLog] = useState("Sẵn sàng! Chọn 2 nút và thực hiện Union(u, v) hoặc Find(u).");
  const [highlightNodes, setHighlightNodes] = useState([]);

  // DSU Helper: Find Root
  const findRoot = (pArr, i, compress) => {
    let curr = i;
    const path = [];
    while (pArr[curr] !== curr) {
      path.push(curr);
      curr = pArr[curr];
    }
    if (compress) {
      path.forEach((node) => {
        pArr[node] = curr;
      });
    }
    return curr;
  };

  const handleUnion = () => {
    const pCopy = [...parent];
    const rCopy = [...rank];
    const rootU = findRoot(pCopy, nodeU, enableCompression);
    const rootV = findRoot(pCopy, nodeV, enableCompression);

    if (rootU === rootV) {
      setHighlightNodes([rootU]);
      setDsuLog(`⚠️ Nút ${nodeU} và ${nodeV} đã CÙNG THUỘC một tập hợp (Root = ${rootU}). Không cần gộp!`);
      return;
    }

    if (enableRank) {
      if (rCopy[rootU] > rCopy[rootV]) {
        pCopy[rootV] = rootU;
      } else {
        pCopy[rootU] = rootV;
        if (rCopy[rootU] === rCopy[rootV]) {
          rCopy[rootV]++;
        }
      }
    } else {
      // Without rank: simply attach rootU to rootV
      pCopy[rootU] = rootV;
    }

    setParent(pCopy);
    setRank(rCopy);
    setHighlightNodes([rootU, rootV]);
    setDsuLog(`✅ Đã thực hiện unionSet(${nodeU}, ${nodeV})! Root mới: ${pCopy[rootU] === rootU ? rootU : rootV}.`);
  };

  const handleFind = (target) => {
    const pCopy = [...parent];
    const root = findRoot(pCopy, target, enableCompression);
    setParent(pCopy);
    setHighlightNodes([target, root]);
    setDsuLog(`🔍 findSet(${target}) ⟹ Đại diện tập hợp (Root) là nút [${root}].${enableCompression ? " (Đã nén đường đi!)" : ""}`);
  };

  const handleResetDsu = () => {
    setParent([...initialParents]);
    setRank([...initialRanks]);
    setHighlightNodes([]);
    setDsuLog("Đã đặt lại 8 tập hợp rời rạc ban đầu.");
  };

  // ==========================================
  // TAB 2: BITMASK STATE & LOGIC
  // ==========================================
  const [mask, setMask] = useState(42); // 0b00101010
  const [bitJ, setBitJ] = useState(2);
  const elementLabels = ["A", "B", "C", "D", "E", "F", "G", "H"]; // Bit 0..7

  const toggleBit = (idx) => {
    setMask((prev) => prev ^ (1 << idx));
  };

  const handleSetBit = (j) => setMask((prev) => prev | (1 << j));
  const handleClearBit = (j) => setMask((prev) => prev & ~(1 << j));
  const handleToggleBit = (j) => setMask((prev) => prev ^ (1 << j));
  const handleGetLsb = () => setMask((prev) => prev & -prev);
  const handleAllBitsOn = () => setMask(255);
  const handleClearAll = () => setMask(0);

  // Active subset items
  const activeSubset = elementLabels.filter((_, idx) => (mask & (1 << idx)) !== 0);

  // ==========================================
  // TAB 3: GRAPH REPRESENTATIONS STATE
  // ==========================================
  const [graphView, setGraphView] = useState("matrix"); // "matrix" | "list" | "edgeList"
  const [queryU, setQueryU] = useState(0);
  const [queryV, setQueryV] = useState(1);

  // 5 vertices (0..4), 6 edges with weights
  const graphEdges = [
    { u: 0, v: 1, w: 4 },
    { u: 0, v: 2, w: 2 },
    { u: 1, v: 2, w: 1 },
    { u: 1, v: 3, w: 5 },
    { u: 2, v: 4, w: 3 },
    { u: 3, v: 4, w: 7 },
  ];

  // Adjacency Matrix
  const adjMatrix = Array(5)
    .fill(0)
    .map(() => Array(5).fill(0));
  graphEdges.forEach(({ u, v, w }) => {
    adjMatrix[u][v] = w;
    adjMatrix[v][u] = w;
  });

  // Adjacency List
  const adjList = { 0: [], 1: [], 2: [], 3: [], 4: [] };
  graphEdges.forEach(({ u, v, w }) => {
    adjList[u].push({ to: v, w });
    adjList[v].push({ to: u, w });
  });

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm font-sans">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <div className="relative z-10 space-y-4 border-b border-indigo-200/80 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-950">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>DSA ADVANCED FOUNDATIONS TRIAD &bull; CS2010</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className="rounded-lg bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-emerald-950 font-bold">
              DSU: O(&alpha;(N)) &approx; O(1)
            </span>
            <span className="rounded-lg bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-amber-950 font-bold">
              Bitmask: O(1)
            </span>
            <span className="rounded-lg bg-sky-100 border border-sky-300 px-2.5 py-0.5 text-sky-950 font-bold">
              Graph: O(V + E)
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
              Bài 11: The Foundations
            </span>{" "}
            <span className="text-slate-800 block text-lg md:text-2xl font-bold mt-1">
              Union-Find Disjoint Sets, Bitmasking &amp; Graph Basics
            </span>
          </h1>
          <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed max-w-4xl">
            Bộ ba cấu trúc dữ liệu và kỹ thuật nền tảng tối thượng mở ra thế giới thuật toán nâng cao: Quản lý tập hợp rời rạc gần như $O(1)$, nén trạng thái bitmask siêu tốc, và các mô hình biểu diễn đồ thị kinh điển.
          </p>
        </div>

        {/* 3 Interactive Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab(1)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              activeTab === 1
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold scale-105"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>1. Union-Find (DSU) Live Forest</span>
          </button>

          <button
            onClick={() => setActiveTab(2)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              activeTab === 2
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold scale-105"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Binary className="w-3.5 h-3.5" />
            <span>2. Bitmask 8-Bit Studio</span>
          </button>

          <button
            onClick={() => setActiveTab(3)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              activeTab === 3
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold scale-105"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>3. Graph Representations Tri-Duel</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: UNION-FIND (DSU) PLAYGROUND */}
      {/* ========================================================================= */}
      {activeTab === 1 && (
        <div className="relative z-10 pt-6 space-y-6">
          {/* Controls Bar */}
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-600 font-semibold">Nút u:</span>
                <select
                  value={nodeU}
                  onChange={(e) => setNodeU(Number(e.target.value))}
                  className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1 text-emerald-950 font-bold focus:outline-none shadow-sm"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <option key={n} value={n}>Node [{n}]</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-600 font-semibold">Nút v:</span>
                <select
                  value={nodeV}
                  onChange={(e) => setNodeV(Number(e.target.value))}
                  className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1 text-teal-950 font-bold focus:outline-none shadow-sm"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <option key={n} value={n}>Node [{n}]</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleUnion}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm flex items-center gap-1 font-sans"
              >
                <Share2 className="w-3.5 h-3.5" />
                Union(u, v)
              </button>

              <button
                onClick={() => handleFind(nodeU)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-all border border-slate-200 flex items-center gap-1 font-sans shadow-sm"
              >
                Find(u)
              </button>

              <button
                onClick={() => handleFind(nodeV)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-all border border-slate-200 flex items-center gap-1 font-sans shadow-sm"
              >
                Find(v)
              </button>

              <button
                onClick={handleResetDsu}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-all shadow-sm"
                title="Đặt lại DSU"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Optimization Toggles */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
              <label className="flex items-center gap-1.5 cursor-pointer select-none text-emerald-950">
                <input
                  type="checkbox"
                  checked={enableCompression}
                  onChange={(e) => setEnableCompression(e.target.checked)}
                  className="rounded border-slate-300 text-emerald-600 focus:ring-0"
                />
                <span className="font-bold">⚡ Path Compression</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none text-teal-950">
                <input
                  type="checkbox"
                  checked={enableRank}
                  onChange={(e) => setEnableRank(e.target.checked)}
                  className="rounded border-slate-300 text-teal-600 focus:ring-0"
                />
                <span className="font-bold">🛡️ Union by Rank</span>
              </label>
            </div>
          </div>

          {/* Action Log Banner */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-950 flex items-center gap-2 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>{dsuLog}</span>
          </div>

          {/* Dual Forest & Arrays View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Forest Grid (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Rừng Tập Hợp Rời Rạc (Disjoint Sets Forest)</span>
                <span className="text-emerald-800 font-bold">8 Nút [0..7]</span>
              </div>

              {/* Grid of 8 Nodes */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 py-4">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((node) => {
                  const p = parent[node];
                  const isRoot = p === node;
                  const isHighlighted = highlightNodes.includes(node);

                  return (
                    <div
                      key={node}
                      onClick={() => handleFind(node)}
                      className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center cursor-pointer select-none shadow-sm ${
                        isHighlighted
                          ? "bg-emerald-100 border-emerald-400 text-emerald-950 scale-105 ring-2 ring-emerald-500/40 font-bold"
                          : isRoot
                          ? "bg-amber-50 border-amber-300 text-amber-950 font-bold"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {isRoot ? (
                        <Crown className="w-3.5 h-3.5 text-amber-600 mb-1" />
                      ) : (
                        <ArrowRight className="w-3 h-3 text-slate-400 mb-1 rotate-[-90deg]" />
                      )}
                      <span className="font-mono font-extrabold text-sm">
                        [{node}]
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 mt-1">
                        p={p}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="text-[11px] text-slate-600 font-sans text-center">
                💡 Bấm vào bất kỳ ô nút nào để gọi <code>Find(u)</code> và xem đường đi lên Root!
              </div>
            </div>

            {/* Array Inspector (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Bảng Mảng Dữ Liệu DSU</span>
                <span className="text-teal-800 font-bold">Space: O(N)</span>
              </div>

              {/* Table of Arrays */}
              <div className="overflow-x-auto">
                <table className="w-full text-center font-mono text-xs">
                  <thead>
                    <tr className="text-slate-500 text-[10px] border-b border-slate-200">
                      <th className="pb-1.5 text-left text-slate-600">Index</th>
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <th key={i} className="pb-1.5">[{i}]</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                    <tr>
                      <td className="py-2 text-left font-bold text-emerald-800">parent</td>
                      {parent.map((p, idx) => (
                        <td
                          key={idx}
                          className={`py-2 font-bold ${
                            p === idx ? "text-amber-900 font-extrabold" : "text-slate-700"
                          }`}
                        >
                          {p}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 text-left font-bold text-teal-800">rank</td>
                      {rank.map((r, idx) => (
                        <td key={idx} className="py-2 text-slate-500">
                          {r}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-slate-700 space-y-1 shadow-sm">
                <strong className="text-emerald-950 block font-mono">Định Lý Tarjan (1975):</strong>
                <p className="leading-relaxed text-[11px]">
                  Kết hợp cả <strong>Path Compression</strong> và <strong>Union by Rank</strong> đưa độ phức tạp của $M$ thao tác trên $N$ phần tử về $O(M \cdot \alpha(N)) \approx$ <strong>O(1)</strong> trên thực tế!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: BITMASK 8-BIT STUDIO */}
      {/* ========================================================================= */}
      {activeTab === 2 && (
        <div className="relative z-10 pt-6 space-y-6">
          {/* 8-Bit Interactive Switchboard */}
          <div className="p-6 rounded-2xl bg-white border border-amber-100 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
              <span>Bảng Điều Khiển 8-Bit (0b7..0)</span>
              <span className="text-amber-800 font-bold">Click để Toggle Bit</span>
            </div>

            {/* 8 Bits Array */}
            <div className="grid grid-cols-8 gap-2">
              {[7, 6, 5, 4, 3, 2, 1, 0].map((bitIdx) => {
                const isSet = (mask & (1 << bitIdx)) !== 0;
                const letter = elementLabels[bitIdx];

                return (
                  <button
                    key={bitIdx}
                    onClick={() => toggleBit(bitIdx)}
                    className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center font-mono shadow-sm ${
                      isSet
                        ? "bg-amber-100 border-amber-400 text-amber-950 scale-105 ring-2 ring-amber-500/40 font-bold"
                        : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-[10px] text-slate-500">Bit {bitIdx}</span>
                    <span className="text-lg font-extrabold my-0.5">{isSet ? "1" : "0"}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${isSet ? "bg-amber-200 text-amber-950" : "bg-slate-100 text-slate-400"}`}>
                      {letter}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Conversion Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="text-slate-500 text-[10px] block font-semibold">Thập phân (Decimal S):</span>
                <span className="text-amber-950 font-extrabold text-base">{mask}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="text-slate-500 text-[10px] block font-semibold">Nhị phân (Binary):</span>
                <span className="text-purple-950 font-extrabold text-base">
                  0b{mask.toString(2).padStart(8, "0")}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="text-slate-500 text-[10px] block font-semibold">Tập hợp con (Subset):</span>
                <span className="text-emerald-950 font-extrabold text-base">
                  {activeSubset.length > 0 ? `{ ${activeSubset.join(", ")} }` : "∅ (Rỗng)"}
                </span>
              </div>
            </div>
          </div>

          {/* Bitwise Operations Shortcuts */}
          <div className="p-6 rounded-2xl bg-white border border-amber-100 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
              <span className="text-amber-950 font-bold">C++/Java Bitwise Formulas &bull; Thao tác nhanh với Bit j:</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">Chọn j = </span>
                <select
                  value={bitJ}
                  onChange={(e) => setBitJ(Number(e.target.value))}
                  className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-0.5 text-amber-950 font-bold focus:outline-none shadow-sm"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-mono">
              <button
                onClick={() => handleSetBit(bitJ)}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-amber-950 font-bold transition-all text-left space-y-0.5 shadow-sm"
              >
                <div className="text-[10px] text-slate-500">1. Set Bit {bitJ}</div>
                <div className="text-[11px] font-bold">S |= (1 &lt;&lt; {bitJ})</div>
              </button>

              <button
                onClick={() => handleClearBit(bitJ)}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-rose-950 font-bold transition-all text-left space-y-0.5 shadow-sm"
              >
                <div className="text-[10px] text-slate-500">2. Clear Bit {bitJ}</div>
                <div className="text-[11px] font-bold">S &amp;= ~(1 &lt;&lt; {bitJ})</div>
              </button>

              <button
                onClick={() => handleToggleBit(bitJ)}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-purple-950 font-bold transition-all text-left space-y-0.5 shadow-sm"
              >
                <div className="text-[10px] text-slate-500">3. Toggle Bit {bitJ}</div>
                <div className="text-[11px] font-bold">S ^= (1 &lt;&lt; {bitJ})</div>
              </button>

              <button
                onClick={handleGetLsb}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-amber-950 font-bold transition-all text-left space-y-0.5 shadow-sm"
              >
                <div className="text-[10px] text-slate-500">4. Get LSB</div>
                <div className="text-[11px] font-bold">S &amp; (-S)</div>
              </button>

              <button
                onClick={handleAllBitsOn}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-emerald-950 font-bold transition-all text-left space-y-0.5 shadow-sm"
              >
                <div className="text-[10px] text-slate-500">5. All Bits ON</div>
                <div className="text-[11px] font-bold">(1 &lt;&lt; 8) - 1</div>
              </button>

              <button
                onClick={handleClearAll}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold transition-all text-left space-y-0.5 shadow-sm"
              >
                <div className="text-[10px] text-slate-500">6. Clear All</div>
                <div className="text-[11px] font-bold">S = 0</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: GRAPH REPRESENTATIONS TRI-DUEL */}
      {/* ========================================================================= */}
      {activeTab === 3 && (
        <div className="relative z-10 pt-6 space-y-6">
          {/* Switcher & Query Bar */}
          <div className="p-5 rounded-2xl bg-white border border-indigo-100 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 text-xs font-mono">
              <button
                onClick={() => setGraphView("matrix")}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
                  graphView === "matrix"
                    ? "bg-sky-600 text-white font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                1. Adjacency Matrix (V²)
              </button>
              <button
                onClick={() => setGraphView("list")}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
                  graphView === "list"
                    ? "bg-blue-600 text-white font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                2. Adjacency List (V + E)
              </button>
              <button
                onClick={() => setGraphView("edgeList")}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
                  graphView === "edgeList"
                    ? "bg-indigo-600 text-white font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                3. Edge List (E)
              </button>
            </div>

            {/* Edge Query Simulator */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-600 font-semibold">Kiểm tra cạnh (u, v):</span>
              <select
                value={queryU}
                onChange={(e) => setQueryU(Number(e.target.value))}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-sky-950 font-bold focus:outline-none shadow-sm"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <span>&rarr;</span>
              <select
                value={queryV}
                onChange={(e) => setQueryV(Number(e.target.value))}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-sky-950 font-bold focus:outline-none shadow-sm"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>

              <span className={`px-2.5 py-1 rounded-lg font-bold shadow-sm ${
                adjMatrix[queryU][queryV] > 0
                  ? "bg-emerald-100 border border-emerald-300 text-emerald-950"
                  : "bg-slate-100 border border-slate-200 text-slate-500"
              }`}>
                {adjMatrix[queryU][queryV] > 0 ? `Cạnh có trọng số w = ${adjMatrix[queryU][queryV]}` : "Không có cạnh nối"}
              </span>
            </div>
          </div>

          {/* Graph Representation Tri-View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Interactive Data Structure View (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-sm">
              {graphView === "matrix" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
                    <span>Adjacency Matrix M[5][5]</span>
                    <span className="text-sky-800 font-bold">Space: O(V²) = 25 ô</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-center font-mono text-xs">
                      <thead>
                        <tr className="text-slate-500 text-[10px] border-b border-slate-200 font-semibold">
                          <th className="pb-2 text-slate-600">u \ v</th>
                          {[0, 1, 2, 3, 4].map((v) => (
                            <th key={v} className="pb-2">[{v}]</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {adjMatrix.map((row, u) => (
                          <tr key={u}>
                            <td className="py-2 text-sky-900 font-bold">[{u}]</td>
                            {row.map((w, v) => {
                              const isQueried = (u === queryU && v === queryV) || (u === queryV && v === queryU);

                              return (
                                <td
                                  key={v}
                                  className={`py-2 transition-all ${
                                    isQueried
                                      ? "bg-sky-100 text-sky-950 font-bold ring-2 ring-sky-400 rounded-lg"
                                      : w > 0
                                      ? "text-amber-900 font-extrabold bg-amber-50/50"
                                      : "text-slate-400"
                                  }`}
                                >
                                  {w}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {graphView === "list" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
                    <span>Adjacency List: vector&lt;vector&lt;pair&lt;int,int&gt;&gt;&gt;</span>
                    <span className="text-blue-800 font-bold">Space: O(V + E)</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    {[0, 1, 2, 3, 4].map((u) => (
                      <div key={u} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 shadow-sm">
                        <span className="text-blue-900 font-bold w-14">Adj[{u}]:</span>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {adjList[u].map((neighbor, nIdx) => (
                            <span
                              key={nIdx}
                              className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm"
                            >
                              (v={neighbor.to}, w={neighbor.w})
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {graphView === "edgeList" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
                    <span>Edge List: vector&lt;tuple&lt;int, int, int&gt;&gt; (Sorted for Kruskal)</span>
                    <span className="text-indigo-800 font-bold">Space: O(E) = 6 cạnh</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                    {graphEdges
                      .sort((a, b) => a.w - b.w)
                      .map((edge, eIdx) => (
                        <div
                          key={eIdx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm"
                        >
                          <span className="text-slate-800">({edge.u} &harr; {edge.v})</span>
                          <span className="px-2.5 py-0.5 rounded-lg bg-indigo-100 border border-indigo-300 text-indigo-950 font-bold">
                            w = {edge.w}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Tradeoff Analysis Card (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 text-xs font-sans shadow-sm">
              <span className="font-bold uppercase tracking-wider text-sky-950 font-mono flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <Database className="w-4 h-4 text-sky-700" />
                Bảng So Sánh Trade-off (CS2010):
              </span>

              <div className="space-y-2 text-[11px] leading-relaxed">
                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 space-y-1 shadow-sm">
                  <strong className="text-sky-950 block font-mono">1. Adjacency Matrix:</strong>
                  <p className="text-slate-700">
                    Tra cứu cạnh $O(1)$ cực nhanh, nhưng tốn $O(V^2)$ bộ nhớ. Chỉ phù hợp khi đồ thị dày đặc ($E \approx V^2$) hoặc $V \le 1000$.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 space-y-1 shadow-sm">
                  <strong className="text-blue-950 block font-mono">2. Adjacency List:</strong>
                  <p className="text-slate-700">
                    Lựa chọn mặc định tốt nhất cho đồ thị thưa ($E \ll V^2$). Tiết kiệm RAM $O(V + E)$, duyệt láng giềng $O(deg(u))$ tối ưu cho BFS/DFS/Dijkstra.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 space-y-1 shadow-sm">
                  <strong className="text-indigo-950 block font-mono">3. Edge List:</strong>
                  <p className="text-slate-700">
                    Cực kỳ nhỏ gọn $O(E)$. Không tối ưu cho BFS/DFS nhưng là cấu trúc hoàn hảo nhất cho **Thuật toán Kruskal MST** &bull; kết hợp với **Union-Find**!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
