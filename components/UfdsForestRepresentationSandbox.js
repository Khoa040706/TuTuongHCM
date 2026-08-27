"use client";

import React, { useState } from "react";
import { Trees, Crown } from "lucide-react";

export default function UfdsForestRepresentationSandbox() {
  // Slide example 3 disjoint sets:
  // Set 1: {0, 1, 2, 3, 4} with root 3. p[0]=2, p[1]=3, p[2]=3, p[3]=3, p[4]=3.
  // Set 2: {5, 6, 7} with root 6. p[5]=6, p[6]=6, p[7]=6.
  // Set 3: {8} with root 8. p[8]=8.
  // Full array: p = [2, 3, 3, 3, 3, 6, 6, 6, 8]
  const pArray = [2, 3, 3, 3, 3, 6, 6, 6, 8];
  const [selectedNode, setSelectedNode] = useState(0);

  const getSetInfo = (node) => {
    if ([0, 1, 2, 3, 4].includes(node)) {
      return {
        setName: "Tập 1: {0, 1, 2, 3, 4}",
        root: 3,
        color: "emerald",
        badgeStyle: "bg-emerald-100 border-emerald-300 text-emerald-950",
      };
    }
    if ([5, 6, 7].includes(node)) {
      return {
        setName: "Tập 2: {5, 6, 7}",
        root: 6,
        color: "teal",
        badgeStyle: "bg-teal-100 border-teal-300 text-teal-950",
      };
    }
    return {
      setName: "Tập 3: {8}",
      root: 8,
      color: "cyan",
      badgeStyle: "bg-cyan-100 border-cyan-300 text-cyan-950",
    };
  };

  const currentSet = getSetInfo(selectedNode);

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Trees className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mô Hình Rừng Cây &amp; Mảng Parent (Mục 1.1, 1.2, 1.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
            Mô Hình Hóa Disjoint Sets Thành Rừng Cây (Forest of Trees)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Mỗi tập hợp rời rạc là một cây. Đại diện tập hợp (Representative item) là <strong>Gốc (Root)</strong> của cây, được nhận diện qua điều kiện <code>p[i] == i</code>.
          </p>
        </div>

        {/* Root Rule Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          p[i] == i &rArr; i là Root
        </div>
      </div>

      {/* 3 Disjoint Sets Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {/* Set 1 */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between font-mono text-xs text-emerald-950 font-bold border-b border-slate-100 pb-1.5">
            <span>TẬP 1 (5 phần tử)</span>
            <span className="flex items-center gap-1 text-amber-900">
              <Crown className="w-3 h-3 text-amber-600" /> Root = 3
            </span>
          </div>
          <p className="text-xs text-slate-600 font-sans">
            Gồm các đỉnh: <code>&#123;0, 1, 2, 3, 4&#125;</code>. Đại diện là <strong>Vertex 3</strong>.
          </p>
          <div className="text-[11px] font-mono text-slate-500">
            p[0]=2, p[1]=3, p[2]=3, p[3]=3, p[4]=3
          </div>
        </div>

        {/* Set 2 */}
        <div className="p-5 rounded-2xl bg-white border border-teal-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between font-mono text-xs text-teal-950 font-bold border-b border-slate-100 pb-1.5">
            <span>TẬP 2 (3 phần tử)</span>
            <span className="flex items-center gap-1 text-amber-900">
              <Crown className="w-3 h-3 text-amber-600" /> Root = 6
            </span>
          </div>
          <p className="text-xs text-slate-600 font-sans">
            Gồm các đỉnh: <code>&#123;5, 6, 7&#125;</code>. Đại diện là <strong>Vertex 6</strong>.
          </p>
          <div className="text-[11px] font-mono text-slate-500">
            p[5]=6, p[6]=6, p[7]=6
          </div>
        </div>

        {/* Set 3 */}
        <div className="p-5 rounded-2xl bg-white border border-cyan-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between font-mono text-xs text-cyan-950 font-bold border-b border-slate-100 pb-1.5">
            <span>TẬP 3 (1 phần tử)</span>
            <span className="flex items-center gap-1 text-amber-900">
              <Crown className="w-3 h-3 text-amber-600" /> Root = 8
            </span>
          </div>
          <p className="text-xs text-slate-600 font-sans">
            Gồm duy nhất: <code>&#123;8&#125;</code>. Đại diện là <strong>Vertex 8</strong>.
          </p>
          <div className="text-[11px] font-mono text-slate-500">
            p[8]=8 (Tự trỏ chính nó)
          </div>
        </div>
      </div>

      {/* Interactive Array & Tree Sync */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Forest (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Đồ Thị Rừng Cây SVG (Slide 1.2)</span>
            <span className="text-emerald-800 font-bold">3 Cây Tách Biệt</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 450 200" className="w-full max-w-[420px] h-auto select-none">
              {/* TREE 1: Root 3 */}
              {/* Edges */}
              <line x1="100" y1="40" x2="40" y2="100" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="100" y1="40" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="100" y1="40" x2="160" y2="100" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="100" y1="100" x2="100" y2="160" stroke="#cbd5e1" strokeWidth="2" />

              {/* Tree 1 Nodes */}
              {/* Root 3 */}
              <circle cx="100" cy="40" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="100" y="44" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold" fontFamily="monospace">3</text>
              <text x="100" y="18" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">ROOT</text>

              {/* Node 1 */}
              <circle cx="40" cy="100" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2" />
              <text x="40" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

              {/* Node 2 */}
              <circle cx="100" cy="100" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2" />
              <text x="100" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

              {/* Node 4 */}
              <circle cx="160" cy="100" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2" />
              <text x="160" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>

              {/* Node 0 (child of 2) */}
              <circle cx="100" cy="160" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2" />
              <text x="100" y="164" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

              {/* TREE 2: Root 6 */}
              <line x1="280" y1="50" x2="240" y2="120" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="280" y1="50" x2="320" y2="120" stroke="#cbd5e1" strokeWidth="2" />

              <circle cx="280" cy="50" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="280" y="54" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold" fontFamily="monospace">6</text>
              <text x="280" y="28" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">ROOT</text>

              <circle cx="240" cy="120" r="14" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
              <text x="240" y="124" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>

              <circle cx="320" cy="120" r="14" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
              <text x="320" y="124" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">7</text>

              {/* TREE 3: Root 8 */}
              <circle cx="400" cy="80" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="400" y="84" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold" fontFamily="monospace">8</text>
              <text x="400" y="58" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold" fontFamily="monospace">ROOT</text>
            </svg>
          </div>
        </div>

        {/* Right: Interactive Array Mapper (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mảng Parent: p[0..8]</span>
            <span className="text-amber-800 font-bold">Click vào ô để soi</span>
          </div>

          {/* Table of Parent Array */}
          <div className="grid grid-cols-9 gap-1 text-center font-mono text-xs">
            {pArray.map((p, idx) => {
              const isRoot = p === idx;
              const isSelected = selectedNode === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedNode(idx)}
                  className={`p-2 rounded-xl border transition-all cursor-pointer select-none shadow-sm ${
                    isSelected
                      ? "bg-emerald-600 text-white border-emerald-700 scale-105 shadow-sm font-bold"
                      : isRoot
                      ? "bg-amber-100 border-amber-300 text-amber-950 font-bold"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span className="text-[10px] text-slate-500 block">[{idx}]</span>
                  <strong className="text-sm">{p}</strong>
                </div>
              );
            })}
          </div>

          {/* Node Inspector Result */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans space-y-1.5 shadow-sm">
            <div className="flex items-center justify-between font-mono">
              <span className="text-slate-800 font-semibold">Đang soi nút: <strong>Node [{selectedNode}]</strong></span>
              <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold ${currentSet.badgeStyle}`}>
                {currentSet.setName}
              </span>
            </div>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              • Giá trị parent: <code>p[{selectedNode}] = {pArray[selectedNode]}</code>.<br />
              • {pArray[selectedNode] === selectedNode ? (
                <span className="text-amber-900 font-bold">⭐ Nút này là ROOT (p[i] == i) &mdash; Đại diện cho cả tập hợp!</span>
              ) : (
                <span>Trỏ lên cha là nút <code>[{pArray[selectedNode]}]</code> &rarr; Root cuối cùng là nút <strong>[{currentSet.root}]</strong>.</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
