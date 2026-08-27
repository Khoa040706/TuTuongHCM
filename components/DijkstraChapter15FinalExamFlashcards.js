"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export default function DijkstraChapter15FinalExamFlashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "OQ2: Phạm Vi Ôn Tập",
      front: "Online Quiz 2 (OQ2) bao trùm những chủ đề thuật toán trọng tâm nào?",
      back: "Gồm 4 chủ đề cốt lõi: 1) Graph DS, 2) Graph Traversal (DFS/BFS), 3) MST (Prim's/Kruskal's), và 4) SSSP (Bellman-Ford & Dijkstra bản gốc + modified).",
    },
    {
      id: 2,
      tag: "Special Case 1: Tree",
      front: "Tại sao trên đồ thị Cây (Tree), thuật toán SSSP luôn đạt O(V) bằng cả DFS và BFS?",
      back: "Vì cây có E = V - 1 và không chứa chu trình, giữa 2 đỉnh chỉ có DUY NHẤT 1 đường đi (unique path) ⟹ Mọi đường đi đều là shortest path, O(V+E) = O(V).",
    },
    {
      id: 3,
      tag: "Special Case 2: Unweighted",
      front: "Tại sao trên đồ thị Unweighted tổng quát, ta CHỈ CÓ THỂ DÙNG BFS mà không dùng được DFS?",
      back: "Vì BFS duyệt theo từng lớp khoảng cách số bước (hops) tăng dần, đảm bảo tìm thấy đường ngắn nhất trước. DFS có thể đi sâu vào đường vòng nhiều cạnh gây sai kết quả.",
    },
    {
      id: 4,
      tag: "Special Case 3: DAG",
      front: "Tại sao trên đồ thị DAG ta chỉ cần 1 Pass Relax theo Thứ tự Tô-pô (Topological Sort)?",
      back: "Vì DAG không có chu trình, các đỉnh được nới lỏng tuần tự theo quan hệ phụ thuộc tô-pô. Khi xét tới đỉnh u, mọi đường đi tới u đều đã tối ưu xong. Đây là tiền đề cho Dynamic Programming.",
    },
    {
      id: 5,
      tag: "Dijkstra Bản Gốc",
      front: "Giả định tiên đề và độ phức tạp thời gian của thuật toán Dijkstra bản gốc là gì?",
      back: "Giả định: Mọi cạnh phải có trọng số không âm (w >= 0). Độ phức tạp: O((V + E) log V) nhờ sử dụng Min-Heap Priority Queue kết hợp chiến lược Greedy.",
    },
    {
      id: 6,
      tag: "Loop Invariant & Subpath",
      front: "Nền tảng toán học nào bảo đảm tính đúng đắn tuyệt đối của thuật toán Dijkstra?",
      back: "1) Loop Invariant: Mọi đỉnh trong tập Solved luôn có dist[v] = delta(s, v).\n2) Theorem: Mọi đoạn con (subpath) của một shortest path cũng bắt buộc là shortest path (chứng minh phản chứng Cut & Paste).",
    },
    {
      id: 7,
      tag: "Modified Dijkstra: Lazy DS",
      front: "Cơ chế Lazy Data Structure trong Modified Dijkstra hoạt động như thế nào?",
      back: "Khi dequeue (d, u), kiểm tra: if (d > dist[u]) continue; để bỏ qua bản sao lỗi thời. Khi dist[v] giảm, re-enqueue (dist[v], v) mới vào PQ mà không cần DecreaseKey.",
    },
    {
      id: 8,
      tag: "Độ Phức Tạp Modified Dijkstra",
      front: "Tại sao Modified Dijkstra có thể chứa O(E) bản sao trong PQ mà vẫn đạt O((V + E) log V)?",
      back: "Vì kích thước PQ tối đa là E <= V^2. Theo tính chất logarit: O(log E) = O(log V^2) = 2 O(log V) = O(log V). Mỗi thao tác trong PQ vẫn giữ nguyên O(log V).",
    },
    {
      id: 9,
      tag: "Giới Hạn Của Modified Dijkstra",
      front: "Modified Dijkstra gặp nguy cơ gì khi đồ thị có Negative Weight Cycle?",
      back: "Thuật toán sẽ bị kẹt vĩnh viễn trong vòng lặp vô hạn (Infinite Loop) vì liên tục re-enqueue các giá trị khoảng cách ngày càng âm hơn. Bắt buộc phải dùng Bellman-Ford O(VE).",
    },
    {
      id: 10,
      tag: "Cây Quyết Định SSSP",
      front: "Tóm tắt quy tắc chọn thuật toán SSSP nhanh nhất cho 4 trường hợp đồ thị?",
      back: "• Cây ➔ DFS/BFS O(V)\n• Không trọng số ➔ BFS O(V+E)\n• DAG ➔ Toposort 1-pass O(V+E)\n• w >= 0 ➔ Dijkstra O((V+E)log V)\n• Có nguy cơ cycle âm ➔ Bellman-Ford O(VE).",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const curCard = cards[currentIdx];
  const isCurFlipped = !!flippedCards[curCard.id];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 16 &amp; 📌 Cần Nhớ Toàn Bài: 10 Flashcards 3D Master Final Exam</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Bộ 10 Flashcards 3D Master: Chinh Phục 100% Kiến Thức Bài 15 &amp; Sẵn Sàng OQ2
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng hợp toàn diện 16 phần học thuật của Bài 15 &mdash; Chuẩn bị vững vàng cho kỳ thi Online Quiz 2 (OQ2).
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="p-2 rounded-xl bg-white border border-slate-200 disabled:opacity-30 text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-amber-950 font-bold px-2">
            {currentIdx + 1} / {cards.length}
          </span>
          <button
            onClick={() => setCurrentIdx(Math.min(cards.length - 1, currentIdx + 1))}
            disabled={currentIdx === cards.length - 1}
            className="p-2 rounded-xl bg-white border border-slate-200 disabled:opacity-30 text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Flashcard Display */}
      <div className="flex justify-center">
        <div
          onClick={() => toggleFlip(curCard.id)}
          className={`w-full max-w-xl min-h-[200px] p-6 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between select-none ${
            isCurFlipped
              ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-300/30 text-emerald-950"
              : "bg-white border-slate-200 hover:border-emerald-300 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-lg font-bold ${
              isCurFlipped
                ? "bg-emerald-100 border border-emerald-300 text-emerald-950"
                : "bg-amber-100 border border-amber-300 text-amber-950"
            }`}>
              {curCard.tag}
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <RotateCw className="w-3 h-3" />
              {isCurFlipped ? "Mặt sau (Đáp án)" : "Bấm để lật thẻ"}
            </span>
          </div>

          <div className="py-3">
            {isCurFlipped ? (
              <p className="text-sm font-sans font-semibold text-emerald-950 whitespace-pre-line leading-relaxed">
                {curCard.back}
              </p>
            ) : (
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">CÂU HỎI TRỌNG TÂM:</span>
                <p className="text-base sm:text-lg font-bold font-sans text-slate-900 leading-relaxed">
                  {curCard.front}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
            <span>Thẻ #{curCard.id} / 10</span>
            <span>{isCurFlipped ? "Đã lật xem ✅" : "Chưa lật ⏳"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
