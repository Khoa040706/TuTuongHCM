"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function DijkstraCoreMechanismsFlashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "Dijkstra vs Bellman-Ford",
      front: "Khi nào ta nên chọn dùng thuật toán Dijkstra thay vì Bellman-Ford?",
      back: "Khi biết chắc đồ thị không có cạnh âm (w >= 0). Dijkstra chạy trong O((V + E) log V), nhanh hơn gấp hàng trăm lần so với Bellman-Ford O(V · E) trên đồ thị lớn.",
    },
    {
      id: 2,
      tag: "Tiên Đề Bắt Buộc",
      front: "Giả định tiên đề bắt buộc (Formal Assumption) của thuật toán Dijkstra bản gốc là gì?",
      back: "Mọi cạnh (u, v) trong đồ thị đều phải có trọng số không âm: w(u, v) >= 0.",
    },
    {
      id: 3,
      tag: "Tập Solved & Priority Queue",
      front: "Tập Solved trong thuật toán Dijkstra đại diện cho điều gì và vì sao cần Priority Queue?",
      back: "Tập Solved chứa các đỉnh đã xác định chính xác khoảng cách tối ưu. Priority Queue (Min-Heap) giúp trích xuất đỉnh u có ước lượng dist[u] nhỏ nhất trong O(log V).",
    },
    {
      id: 4,
      tag: "Bất Biến Vòng Lặp",
      front: "Bất biến vòng lặp (Loop Invariant) của thuật toán Dijkstra phát biểu như thế nào?",
      back: "Tại mọi thời điểm, mọi đỉnh v nằm trong tập Solved đều đã có giá trị dist[v] đúng bằng khoảng cách ngắn nhất thực sự delta(s, v) từ nguồn.",
    },
    {
      id: 5,
      tag: "Định Lý Subpath",
      front: "Định lý Subpath của Shortest Path phát biểu gì và được chứng minh bằng phương pháp nào?",
      back: "Mọi đoạn con (subpath) của một shortest path cũng bắt buộc phải là shortest path. Được chứng minh bằng phản chứng: Cắt bỏ đoạn con cũ và dán đoạn con ngắn hơn (Cut & Paste).",
    },
    {
      id: 6,
      tag: "Chi Phí Extract-Min",
      front: "Tại sao tổng chi phí thao tác Extract-Min trong Dijkstra gốc là O(V log V)?",
      back: "Vì mỗi đỉnh chỉ được lấy ra khỏi Priority Queue đúng 1 lần duy nhất (tối đa |V| lần). Mỗi lần trích xuất min trong heap tốn O(log V) ==> O(V log V).",
    },
    {
      id: 7,
      tag: "Chi Phí Relax & DecreaseKey",
      front: "Tại sao tổng chi phí nới lỏng cạnh và Decrease-Key là O(E log V)?",
      back: "Vì mỗi cạnh được duyệt đúng 1 lần khi xử lý đỉnh kề (tổng |E| cạnh). Mỗi lần giảm khóa cập nhật trong heap tốn O(log V) ==> O(E log V).",
    },
    {
      id: 8,
      tag: "Cạm Bẫy Cạnh Âm",
      front: "Tại sao sự xuất hiện của cạnh âm khiến chiến lược tham lam của Dijkstra bản gốc sụp đổ?",
      back: "Cạnh âm có thể làm một nhánh đường vòng phía sau trở nên rẻ hơn nhiều, khiến đỉnh được chọn tham lam ban đầu không phải là đỉnh gần nhất thực sự. Kết quả báo sai hoàn toàn.",
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
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>📌 Cần Nhớ: 8 Flashcards 3D Cơ Chế Cốt Tử Của Dijkstra (Phần 6 - 10)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Khắc Sâu Cơ Chế Dijkstra Gốc: Loop Invariant, O((V+E)logV) &amp; Cạnh Âm
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lật thẻ ôn tập chuyên sâu các định lý toán học, cấu trúc dữ liệu và điều kiện áp dụng của thuật toán Dijkstra.
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
          className={`w-full max-w-xl min-h-[190px] p-6 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between select-none ${
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
            <span>Thẻ #{curCard.id} / 8</span>
            <span>{isCurFlipped ? "Đã lật xem ✅" : "Chưa lật ⏳"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
