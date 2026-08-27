"use client";

import React from "react";
import {
  Layers,
} from "lucide-react";

export default function SsspMasterSummaryMatrix() {
  const matrixData = [
    {
      caseName: "1. Đồ thị Tổng Quát (General Weighted)",
      condition: "Trọng số bất kỳ, có thể có cạnh âm & chu trình âm",
      algo: "Bellman-Ford",
      complexity: "O(V · E)",
      badge: "bg-amber-100 border-amber-300 text-amber-950",
      note: "Đa năng nhất, an toàn nhất, phát hiện được Negative Cycle.",
    },
    {
      caseName: "2. Special Case 1: Đồ thị Cây (Tree)",
      condition: "Đồ thị liên thông không chu trình (E = V - 1)",
      algo: "DFS hoặc BFS",
      complexity: "O(V)",
      badge: "bg-emerald-100 border-emerald-300 text-emerald-950",
      note: "Mọi đường đi đều là duy nhất và chính là shortest path!",
    },
    {
      caseName: "3. Special Case 2: Đồ thị Không Trọng Số (Unweighted)",
      condition: "Mọi cạnh có trọng số = 1 (hoặc hằng số)",
      algo: "CHỈ DÙNG BFS",
      complexity: "O(V + E)",
      badge: "bg-sky-100 border-sky-300 text-sky-950",
      note: "BFS Spanning Tree = Shortest Paths Tree (DFS thất bại!).",
    },
    {
      caseName: "4. Special Case 3: Đồ thị DAG (Acyclic)",
      condition: "Đồ thị có hướng và không chứa chu trình",
      algo: "Toposort + 1 Pass Relax",
      complexity: "O(V + E)",
      badge: "bg-purple-100 border-purple-300 text-purple-950",
      note: "Đúng 1 pass theo Thứ tự Tô-pô (Tiền đề cho Dynamic Programming).",
    },
    {
      caseName: "5. Special Case 4a: Trọng Số Không Âm",
      condition: "Mọi cạnh w(u, v) >= 0",
      algo: "Original Dijkstra (Min-Heap)",
      complexity: "O((V + E) log V)",
      badge: "bg-emerald-100 border-emerald-400 text-emerald-950 ring-1 ring-emerald-300 font-bold",
      note: "Greedy Strategy + Min-Heap, ứng dụng Google Maps / GPS.",
    },
    {
      caseName: "6. Special Case 4b: Cạnh Âm An Toàn",
      condition: "Có cạnh âm nhưng KHÔNG CÓ negative cycle",
      algo: "Modified Dijkstra (Lazy DS)",
      complexity: "O((V + E) log V)",
      badge: "bg-sky-100 border-sky-300 text-sky-950",
      note: "Lazy Deletion if (d > dist[u]) continue, re-enqueue khi giảm.",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 15: Ma Trận Tổng Kết Toàn Diện Các Thuật Toán SSSP (Summary Matrix)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Bảng Tra Cứu Toàn Cảnh SSSP &amp; 8 Quy Tắc Vàng Cốt Tử
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Bản đồ đối chiếu đầy đủ 6 kịch bản đồ thị, thuật toán tương ứng và độ phức tạp tối ưu giúp học sinh tự tin 100% trong phòng thi.
          </p>
        </div>

        {/* Action Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Master SSSP Matrix
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white mb-6 shadow-sm">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-slate-50 text-slate-600 font-mono uppercase text-[10px] border-b border-slate-200">
            <tr>
              <th className="p-3.5">Kịch Bản Đồ Thị</th>
              <th className="p-3.5">Điều Kiện Cấu Trúc</th>
              <th className="p-3.5">Thuật Toán Tối Ưu</th>
              <th className="p-3.5">Độ Phức Tạp</th>
              <th className="p-3.5">Ghi Chú Kỹ Thuật</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {matrixData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-bold text-slate-900">{row.caseName}</td>
                <td className="p-3.5 text-slate-600">{row.condition}</td>
                <td className="p-3.5 font-mono font-bold text-emerald-950">{row.algo}</td>
                <td className="p-3.5 font-mono">
                  <span className={`px-2.5 py-0.5 rounded-lg border font-bold text-[11px] shadow-sm ${row.badge}`}>
                    {row.complexity}
                  </span>
                </td>
                <td className="p-3.5 text-slate-600 text-[11px]">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 8 Golden Rules Memo Box */}
      <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs font-sans text-emerald-950 space-y-3 shadow-sm">
        <span className="font-bold font-mono text-xs text-amber-950 block uppercase">
          📌 Cần Nhớ (Tổng Hợp Toàn Bài 15 — 8 Quy Tắc Vàng):
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 leading-relaxed">
          <p>• <strong>Tree</strong> ➔ <code>O(V)</code> DFS/BFS (vì <code>E = V - 1</code>, đường đi duy nhất).</p>
          <p>• <strong>Unweighted</strong> ➔ <code>O(V + E)</code> BFS (chỉ dùng BFS, không dùng DFS).</p>
          <p>• <strong>DAG</strong> ➔ <code>O(V + E)</code> 1 pass relax theo topological order (tiền đề DP).</p>
          <p>• <strong>Không có cạnh âm</strong> ➔ Dijkstra gốc <code>O((V + E) log V)</code> dùng Min-Heap &amp; Greedy.</p>
          <p>• <strong>Có cạnh âm an toàn</strong> ➔ Modified Dijkstra <code>O((V + E) log V)</code> với Lazy DS.</p>
          <p>• <strong>Có nguy cơ chu trình âm</strong> ➔ Dùng <strong>Bellman-Ford O(V · E)</strong> để tránh loop vô hạn.</p>
          <p>• <strong>Nền tảng chứng minh</strong>: <strong>Loop Invariant</strong> + <strong>Định lý Subpath</strong>.</p>
          <p>• <strong>Khái niệm cốt tử</strong>: <code>D[v]</code> lưu ước lượng, <code>p[v]</code> để truy vết ngược đường đi.</p>
        </div>
      </div>
    </div>
  );
}
