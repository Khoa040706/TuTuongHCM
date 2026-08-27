"use client";

import React from "react";
import { Compass, CheckCircle2 } from "lucide-react";

export default function GraphCs2010CurriculumRoadmap() {
  const milestones = [
    {
      week: "Week 06–13",
      title: "Graph Terminologies & 3 Representations",
      tag: "Xuyên suốt nửa sau học kỳ",
      desc: "Nền tảng biểu diễn Adjacency List/Matrix/Edge List phục vụ toàn bộ các thuật toán BFS, DFS, Dijkstra, Bellman-Ford, và Max Flow.",
      badgeStyle: "bg-emerald-100 border-emerald-300 text-emerald-950",
    },
    {
      week: "Week 07",
      title: "Union-Find Disjoint Sets (UFDS)",
      tag: "Cây Khung Nhỏ Nhất (MST)",
      desc: "Ứng dụng trực tiếp UFDS trong Thuật toán Kruskal để kiểm tra và ngăn ngừa chu trình trong O(α(V)) ≈ O(1) siêu tốc.",
      badgeStyle: "bg-sky-100 border-sky-300 text-sky-950",
    },
    {
      week: "Week 11",
      title: "Bitmask Data Structure",
      tag: "Quy Hoạch Động TSP",
      desc: "Nén tập hợp các thành phố đã đi qua thành số nguyên nhị phân để giải bài toán Người Du Lịch (Traveling Salesperson Problem).",
      badgeStyle: "bg-purple-100 border-purple-300 text-purple-950",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-indigo-700" />
            <span>Bản Đồ Học Phần — Roadmap (Mục 5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
            Bản Đồ Kết Nối Kiến Thức Tới Nửa Sau Học Kỳ CS2010
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Bộ ba vũ khí nền tảng của Bài 11 sẽ là chìa khóa mở đường cho toàn bộ các bài toán nâng cao tiếp theo.
          </p>
        </div>

        {/* Milestone Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-indigo-100 border border-indigo-300 text-indigo-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Week 06 &rarr; Week 13
        </div>
      </div>

      {/* 3 Milestone Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${m.badgeStyle}`}>
                  {m.week}
                </span>
                <span className="text-[10px] text-slate-500 font-mono font-bold">
                  {m.tag}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-800 font-mono">{m.title}</h4>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                {m.desc}
              </p>
            </div>

            <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-emerald-800 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sẵn sàng cho các tuần tiếp theo</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
