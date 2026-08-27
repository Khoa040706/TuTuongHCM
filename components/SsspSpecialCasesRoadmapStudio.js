"use client";

import React, { useState } from "react";
import {
  Map,
  CheckCircle2,
  TreePine,
  GitCommit,
  GitPullRequest,
  Zap,
} from "lucide-react";

export default function SsspSpecialCasesRoadmapStudio() {
  const [activeCase, setActiveCase] = useState(1);

  const specialCases = [
    {
      id: 1,
      name: "Special Case 1: Đồ Thị Là Cây (Tree)",
      complexity: "O(V)",
      algo: "DFS hoặc BFS",
      icon: TreePine,
      color: "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400",
      accentBadge: "bg-emerald-100 border-emerald-300 text-emerald-950",
      summary: "Vì E = V - 1 và không có chu trình, giữa 2 đỉnh chỉ có DUY NHẤT 1 đường đi ==> Mọi đường đi đều là đường đi ngắn nhất!",
      details: [
        "Không có chu trình ==> Không bao giờ tồn tại Negative Weight Cycle.",
        "Cạnh âm hoàn toàn không ảnh hưởng đến kết quả.",
        "Độ phức tạp O(V + E) = O(V + V - 1) = O(V).",
      ],
    },
    {
      id: 2,
      name: "Special Case 2: Đồ Thị Không Trọng Số (Unweighted)",
      complexity: "O(V + E)",
      algo: "Chỉ Dùng BFS",
      icon: GitCommit,
      color: "bg-sky-50 border-sky-400 text-sky-950 ring-1 ring-sky-400",
      accentBadge: "bg-sky-100 border-sky-300 text-sky-950",
      summary: "Mọi cạnh có trọng số bằng 1 (hoặc hằng số) ==> SSSP chính là bài toán tìm số cạnh ít nhất từ nguồn s.",
      details: [
        "BFS đo chính xác khoảng cách theo số bước nhảy (hops).",
        "Lưu ý: KHÔNG THỂ DÙNG DFS (khác với trường hợp Tree).",
        "BFS Spanning Tree = Shortest Paths Spanning Tree.",
      ],
    },
    {
      id: 3,
      name: "Special Case 3: Đồ Thị DAG (Directed Acyclic Graph)",
      complexity: "O(V + E)",
      algo: "Toposort + 1 Pass Relax",
      icon: GitPullRequest,
      color: "bg-purple-50 border-purple-400 text-purple-950 ring-1 ring-purple-400",
      accentBadge: "bg-purple-100 border-purple-300 text-purple-950",
      summary: "Đồ thị có hướng và không có chu trình ==> Chỉ cần nới lỏng các cạnh đúng 1 LƯỢT DUY NHẤT theo Thứ tự Tô-pô!",
      details: [
        "Sắp xếp Topological Sort trong O(V + E).",
        "Chỉ cần 1 Pass nới lỏng các cạnh đi ra (outgoing edges), không cần lặp V-1 lần.",
        "Đây là tiền đề trực tiếp cho Quy hoạch động (Dynamic Programming).",
      ],
    },
    {
      id: 4,
      name: "Special Case 4ab: Đồ Thị Trọng Số Không Âm",
      complexity: "O((V + E) log V)",
      algo: "Dijkstra (Min-Heap)",
      icon: Zap,
      color: "bg-amber-50 border-amber-400 text-amber-950 ring-1 ring-amber-400",
      accentBadge: "bg-amber-100 border-amber-300 text-amber-950",
      summary: "Đồ thị có trọng số tổng quát nhưng không có cạnh âm (w >= 0) ==> Dùng thuật toán Dijkstra với Min-Heap.",
      details: [
        "Chiến lược Tham lam (Greedy): Luôn chốt đỉnh có D[u] nhỏ nhất trước.",
        "Trích xuất cực nhanh Extract-Min trong O(log V) bằng PriorityQueue.",
        "Nhanh hơn vượt trội so với Bellman-Ford O(V · E).",
      ],
    },
  ];

  const curCase = specialCases[activeCase - 1];
  const IconComp = curCase.icon;

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Map className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 1 &amp; 2: Dàn Bài &amp; Triết Lý Thêm Giả Định Để Tối Ưu Hóa</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-sky-950 to-amber-950 bg-clip-text text-transparent">
            Bản Đồ 4 Trường Hợp Đặc Biệt Của Bài Toán SSSP
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá triết lý: Thêm một số ràng buộc/giả định về đồ thị sẽ giúp ta thiết kế các thuật toán SSSP chạy nhanh hơn rất nhiều so với $O(V \cdot E)$ của Bellman-Ford.
          </p>
        </div>

        {/* Global Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Triết Lý: Thêm Ràng Buộc ➔ Tăng Tốc
        </div>
      </div>

      {/* 4 Cards Grid Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {specialCases.map((c) => {
          const ItemIcon = c.icon;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between shadow-sm ${
                activeCase === c.id
                  ? `${c.color} shadow-md scale-[1.02]`
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Case {c.id}</span>
                  <ItemIcon className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-xs font-bold font-sans text-slate-900 block line-clamp-2">{c.name.split(":")[1]}</span>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-600 font-bold">{c.algo.split(" ")[0]}</span>
                <span className="text-amber-950 font-extrabold">{c.complexity}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Case Deep Dive */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <IconComp className="w-5 h-5 text-emerald-700" />
            <span className="font-bold text-sm text-slate-900 font-sans">{curCase.name}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-600">Giải thuật: <strong className="text-slate-900">{curCase.algo}</strong></span>
            <span className={`px-2.5 py-0.5 rounded-lg border font-bold shadow-sm ${curCase.accentBadge}`}>{curCase.complexity}</span>
          </div>
        </div>

        <p className="text-xs font-sans text-slate-700 leading-relaxed font-medium">
          {curCase.summary}
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
          <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase block">Đặc Điểm &amp; Tiêu Chí Kỹ Thuật:</span>
          <ul className="space-y-1.5 text-xs text-slate-700 font-sans leading-relaxed">
            {curCase.details.map((d, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
