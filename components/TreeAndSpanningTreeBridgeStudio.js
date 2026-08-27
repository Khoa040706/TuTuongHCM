"use client";

import React, { useState } from "react";
import {
  TreeDeciduous,
  Sparkles,
} from "lucide-react";

export default function TreeAndSpanningTreeBridgeStudio() {
  const [activeTab, setActiveTab] = useState("geometry"); // "geometry" | "toolkit"
  const [selectedModel, setSelectedModel] = useState("tree"); // "general" | "tree" | "spanning"

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <TreeDeciduous className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 1: Ôn Tập Các Khái Niệm Nền Tảng (Mục 1.1 – 1.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Cầu Nối Cây Tự Do (Tree) &amp; Cây Khung (Spanning Tree)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Định nghĩa hình học cốt lõi của Cây ($V - 1$ cạnh, đường đi duy nhất), Cây khung bao phủ và bộ đôi vũ khí Sorting + UFDS.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("geometry")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "geometry"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Cây vs Cây Khung
          </button>
          <button
            onClick={() => setActiveTab("toolkit")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "toolkit"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Vũ Khí Sorting + UFDS
          </button>
        </div>
      </div>

      {/* Tab 1: Geometry Bridge */}
      {activeTab === "geometry" && (
        <div className="space-y-6">
          {/* Model Switcher Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "general", label: "A. Đồ Thị Gốc G (Có Chu Trình)", badge: "V = 5, E = 7" },
              { id: "tree", label: "B. Cây Tự Do T (Free Tree)", badge: "V = 5, E = 4 (V - 1)" },
              { id: "spanning", label: "C. Cây Khung ST (Spanning Tree)", badge: "Bao Phủ 100% Đỉnh" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(m.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-1 shadow-sm ${
                  selectedModel === m.id
                    ? "bg-emerald-100 border-emerald-400 ring-2 ring-emerald-400/30 text-emerald-950 font-bold"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="text-xs font-mono font-bold">{m.label}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 self-start font-semibold">
                  {m.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Model Detail Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* SVG Visual (6 cols) */}
            <div className="md:col-span-6 p-5 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center min-h-[220px] shadow-sm">
              <svg viewBox="0 0 280 180" className="w-full max-w-[260px] h-auto select-none">
                {/* General Graph Edges */}
                {selectedModel === "general" && (
                  <>
                    <line x1="140" y1="30" x2="60" y2="90" stroke="#059669" strokeWidth="2" />
                    <line x1="140" y1="30" x2="220" y2="90" stroke="#059669" strokeWidth="2" />
                    <line x1="60" y1="90" x2="90" y2="155" stroke="#059669" strokeWidth="2" />
                    <line x1="220" y1="90" x2="190" y2="155" stroke="#059669" strokeWidth="2" />
                    <line x1="90" y1="155" x2="190" y2="155" stroke="#059669" strokeWidth="2" />
                    {/* Cross cycle edges */}
                    <line x1="60" y1="90" x2="220" y2="90" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3" />
                    <line x1="140" y1="30" x2="140" y2="155" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3" />
                  </>
                )}

                {/* Free Tree T Edges */}
                {selectedModel === "tree" && (
                  <>
                    <line x1="140" y1="30" x2="60" y2="90" stroke="#d97706" strokeWidth="3" />
                    <line x1="140" y1="30" x2="220" y2="90" stroke="#d97706" strokeWidth="3" />
                    <line x1="60" y1="90" x2="90" y2="155" stroke="#d97706" strokeWidth="3" />
                    <line x1="220" y1="90" x2="190" y2="155" stroke="#d97706" strokeWidth="3" />
                  </>
                )}

                {/* Spanning Tree ST Edges */}
                {selectedModel === "spanning" && (
                  <>
                    <line x1="140" y1="30" x2="60" y2="90" stroke="#059669" strokeWidth="3" />
                    <line x1="60" y1="90" x2="90" y2="155" stroke="#059669" strokeWidth="3" />
                    <line x1="90" y1="155" x2="190" y2="155" stroke="#059669" strokeWidth="3" />
                    <line x1="190" y1="155" x2="220" y2="90" stroke="#059669" strokeWidth="3" />
                  </>
                )}

                {/* 5 Nodes */}
                <circle cx="140" cy="30" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                <text x="140" y="34" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">0</text>

                <circle cx="60" cy="90" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                <text x="60" y="94" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>

                <circle cx="220" cy="90" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                <text x="220" y="94" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">2</text>

                <circle cx="90" cy="155" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                <text x="90" y="159" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">3</text>

                <circle cx="190" cy="155" r="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                <text x="190" y="159" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>
              </svg>
            </div>

            {/* Explanation Specs (6 cols) */}
            <div className="md:col-span-6 space-y-3 text-xs font-sans">
              {selectedModel === "general" && (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <h4 className="text-xs font-bold font-mono text-emerald-950">
                    Đồ Thị Vô Hướng Tổng Quát G
                  </h4>
                  <ul className="space-y-1.5 text-slate-600 list-disc pl-4 leading-relaxed">
                    <li>Có thể chứa <strong>nhiều chu trình (cycles)</strong>.</li>
                    <li>Giữa 2 đỉnh có thể có <strong>nhiều đường đi khác nhau</strong>.</li>
                    <li>Số cạnh $E$ có thể lên tới $O(V^2)$.</li>
                  </ul>
                </div>
              )}

              {selectedModel === "tree" && (
                <div className="p-5 rounded-2xl bg-white border border-amber-200 space-y-2 shadow-sm">
                  <h4 className="text-xs font-bold font-mono text-amber-950">
                    Khái Niệm Cây Tự Do (Free Tree T)
                  </h4>
                  <ul className="space-y-1.5 text-slate-700 list-disc pl-4 leading-relaxed">
                    <li>$T$ là một <strong>đồ thị liên thông</strong> có đúng <strong>V đỉnh</strong> và đúng <strong>V - 1 cạnh</strong>.</li>
                    <li>⭐ <strong>Tính chất cốt tử:</strong> Giữa bất kỳ 2 đỉnh nào trong $T$ luôn có <strong>duy nhất một đường đi (one unique path)</strong>!</li>
                    <li>Không chứa bất kỳ chu trình nào (Acyclic).</li>
                  </ul>
                </div>
              )}

              {selectedModel === "spanning" && (
                <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2 shadow-sm">
                  <h4 className="text-xs font-bold font-mono text-emerald-950">
                    Cây Khung (Spanning Tree ST) Của Đồ Thị G
                  </h4>
                  <ul className="space-y-1.5 text-slate-700 list-disc pl-4 leading-relaxed">
                    <li>$ST$ là một cây <strong>bao phủ (spans/covers) tất cả các đỉnh</strong> của đồ thị liên thông $G$.</li>
                    <li>Nhắc lại: <strong>BFS Spanning Tree</strong> và <strong>DFS Spanning Tree</strong> (đã học ở Bài 12) chính là các cây khung sinh ra từ duyệt đồ thị!</li>
                    <li>Một đồ thị có thể có <strong>rất nhiều cây khung khác nhau</strong>.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Toolkit Review (Sorting + UFDS) */}
      {activeTab === "toolkit" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Toolkit 1: Sorting */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-mono font-bold text-sky-950">1. Sorting Problem (Bài 06)</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 border border-sky-300 text-[10px] font-mono text-sky-950 font-bold">
                  O(E log E)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Sắp xếp lại 1 tập hợp đối tượng sao cho với mọi cặp đối tượng $(a, b)$ mà $a &lt; b$, thì trong kết quả cuối cùng $a$ luôn đứng trước $b$.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
                Ứng dụng cho MST: Sắp xếp toàn bộ $E$ cạnh theo trọng số tăng dần $w_1 \le w_2 \le \dots \le w_E$.
              </div>
            </div>

            {/* Toolkit 2: UFDS */}
            <div className="p-6 rounded-2xl bg-white border border-purple-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-mono font-bold text-purple-950">2. Union-Find Disjoint Sets (Bài 11)</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-purple-100 border border-purple-300 text-[10px] font-mono text-purple-950 font-bold">
                  O(α(V)) ≈ O(1)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Cấu trúc dữ liệu quản lý các tập hợp rời nhau với 2 thao tác siêu tốc: <code>isSameSet(u, v)</code> kiểm tra 2 đỉnh đã cùng tập chưa, và <code>unionSet(u, v)</code> gộp 2 tập.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
                Ứng dụng cho MST: Kiểm tra chu trình tức thì khi nạp cạnh mới trong thuật toán Kruskal!
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-950 flex items-center gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              💡 <strong>Sự hội tụ hoàn hảo:</strong> Để giải bài toán Cây khung nhỏ nhất (MST) với thuật toán Kruskal, chúng ta sẽ kết hợp trọn vẹn 2 kiến thức nền tảng: <strong>Sorting</strong> (Bài 06) + <strong>UFDS</strong> (Bài 11)!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
