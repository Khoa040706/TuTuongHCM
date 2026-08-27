"use client";

import React, { useState } from "react";
import {
  Network,
  Sparkles,
  TreeDeciduous,
  TreePine,
  Cpu,
} from "lucide-react";

export default function MstAlgorithmsFamilyTreeStudio() {
  const [selectedAlgo, setSelectedAlgo] = useState("prim"); // "prim" | "kruskal" | "boruvka"

  const algos = {
    prim: {
      name: "Jarník / Prim's Algorithm (1930 / 1957)",
      author: "Vojtěch Jarník (1930) & Robert C. Prim (1957)",
      philosophy: "Hướng Đỉnh (Vertex-centric Growing Tree)",
      ds: "PriorityQueue (Min-Heap) + boolean[] taken",
      complexity: "O(E log V) với Adjacency List",
      desc: "Phát triển cây MST mọc dần từ 1 đỉnh nguồn duy nhất, mỗi bước rút cạnh nhỏ nhất nối cây hiện tại ra một đỉnh mới chưa thuộc cây.",
      badge: "Trọng Tâm Phần 4",
      badgeColor: "amber",
    },
    kruskal: {
      name: "Kruskal's Algorithm (1956)",
      author: "Joseph Kruskal (1956)",
      philosophy: "Hướng Cạnh (Edge-centric Forest Merging)",
      ds: "Edge List + Union-Find Disjoint Sets (UFDS)",
      complexity: "O(E log E) với sắp xếp cạnh",
      desc: "Sắp xếp toàn bộ cạnh theo trọng số tăng dần, duyệt từng cạnh và dùng UFDS kiểm tra chu trình để gộp các thành phần liên thông rời rạc thành 1 cây hoàn chỉnh.",
      badge: "Trọng Tâm Phần 5",
      badgeColor: "emerald",
    },
    boruvka: {
      name: "Borůvka's Algorithm (1926)",
      author: "Otakar Borůvka (1926)",
      philosophy: "Thu Nhỏ Cạnh Song Song (Parallel Component Contraction)",
      ds: "Connected Components Tracking Array",
      complexity: "O(E log V)",
      desc: "Thuật toán giải MST đầu tiên trong lịch sử Computer Science! Ở mỗi giai đoạn, mỗi thành phần liên thông đồng thời chọn cạnh nhẹ nhất nối ra ngoài, giảm số lượng thành phần đi ít nhất một nửa.",
      badge: "Mở Rộng Nâng Cao",
      badgeColor: "purple",
    },
  };

  const cur = algos[selectedAlgo];

  return (
    <div className="my-8 rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-bold mb-2">
            <Network className="w-3.5 h-3.5 text-purple-700" />
            <span>Phần 3: Các Thuật Toán Giải MST (MST Algorithms)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-indigo-950 to-amber-950 bg-clip-text text-transparent">
            Phả Hệ &amp; Toàn Cảnh Các Thuật Toán Giải Bài Toán MST
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng quan các giải thuật thời gian đa thức (Polynomial Time) kinh điển trong Computer Science và bản chất Chiến lược Tham lam (Greedy).
          </p>
        </div>

        {/* Greedy Universal Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Chiến Lược Tham Lam (Greedy)
        </div>
      </div>

      {/* 3 Family Branches Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          { id: "prim", label: "1. Jarník / Prim's", sub: "PriorityQueue • O(E log V)", icon: TreeDeciduous },
          { id: "kruskal", label: "2. Kruskal's", sub: "UFDS • O(E log E)", icon: TreePine },
          { id: "boruvka", label: "3. Borůvka's", sub: "Parallel • O(E log V)", icon: Cpu },
        ].map((item) => {
          const Icon = item.icon;
          const isSelected = selectedAlgo === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedAlgo(item.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 shadow-sm ${
                isSelected
                  ? "bg-purple-100 border-purple-400 ring-2 ring-purple-400/30 text-purple-950 font-bold"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? "bg-purple-200 text-purple-950 shadow-sm" : "bg-slate-100 text-slate-600"}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-mono font-bold">{item.label}</h4>
                <p className="text-[11px] text-slate-500 font-mono font-semibold">{item.sub}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Algorithm Detail Card */}
      <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">Tác giả &amp; Năm công bố:</span>
            <h4 className="text-sm font-bold text-slate-900 font-mono mt-0.5">{cur.name}</h4>
          </div>
          <span className="px-3 py-1 rounded-xl bg-purple-100 border border-purple-300 text-xs font-mono font-bold text-purple-950 shadow-sm">
            {cur.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
            <span className="text-purple-950 font-bold block text-[11px]">Triết Lý Thuật Toán:</span>
            <span className="text-slate-700 font-sans text-xs">{cur.philosophy}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
            <span className="text-amber-950 font-bold block text-[11px]">Cấu Trúc Dữ Liệu Nền Tảng:</span>
            <span className="text-slate-700 font-mono text-xs">{cur.ds}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
            <span className="text-emerald-950 font-bold block text-[11px]">Độ Phức Tạp Thời Gian:</span>
            <span className="text-emerald-900 font-mono font-bold text-xs">{cur.complexity}</span>
          </div>
        </div>

        <p className="text-xs text-slate-700 font-sans leading-relaxed pt-1">
          {cur.desc}
        </p>
      </div>

      {/* Core Principle Callout */}
      <div className="mt-4 p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-sans text-purple-950 flex items-center gap-3 shadow-sm">
        <Sparkles className="w-5 h-5 text-purple-700 shrink-0" />
        <span>
          ⭐ <strong>Khẳng định cốt lõi:</strong> Cả <strong>Prim's</strong> và <strong>Kruskal's</strong> đều là thuật toán <strong>tham lam (greedy)</strong>. Ở mỗi bước, thuật toán luôn đưa ra lựa chọn cục bộ tốt nhất (chọn cạnh trọng số nhỏ nhất hợp lệ) và vẫn đảm bảo đạt được cây khung tối ưu toàn cục!
        </span>
      </div>
    </div>
  );
}
