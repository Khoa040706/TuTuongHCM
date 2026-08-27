"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function SsspSpecialCasesFlashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "Triết Lý Tối Ưu",
      front: "Triết lý chủ đạo khi nghiên cứu các biến thể (Special Cases) của bài toán SSSP là gì?",
      back: "Thêm các giả định / ràng buộc về cấu trúc đồ thị (như Tree, Unweighted, DAG) để xây dựng các thuật toán SSSP chạy nhanh hơn rất nhiều so với Bellman-Ford O(V · E).",
    },
    {
      id: 2,
      tag: "Special Case 1: Tree",
      front: "Tại sao trên đồ thị Cây (Tree), mọi đường đi (path) đều là đường đi ngắn nhất?",
      back: "Vì cây có E = V - 1 và không có chu trình, giữa 2 đỉnh bất kỳ chỉ tồn tại duy nhất 1 đường đi đơn (unique path), không có con đường nào khác để so sánh.",
    },
    {
      id: 3,
      tag: "Tree: Độ Phức Tạp O(V)",
      front: "Tại sao SSSP trên đồ thị cây đạt độ phức tạp O(V) thay vì O(V + E) tiêu chuẩn?",
      back: "Vì trên cây luôn có E = V - 1, nên O(V + E) = O(V + V - 1) = O(2V - 1) = O(V). Bất kỳ thuật toán duyệt DFS hay BFS nào cũng giải quyết được.",
    },
    {
      id: 4,
      tag: "Tree & Chu Trình Âm",
      front: "Đồ thị cây có thể chứa Negative Weight Cycle không nếu ta thêm cạnh có trọng số âm?",
      back: "Tuyệt đối không! Cây theo định nghĩa là đồ thị không có chu trình (acyclic), nên không bao giờ xuất hiện chu trình âm. Cạnh âm không ảnh hưởng gì tới tính đúng đắn.",
    },
    {
      id: 5,
      tag: "Tree vs Unweighted Duel",
      front: "Sự khác biệt lớn nhất giữa SSSP trên Tree và SSSP trên Unweighted Graph là gì?",
      back: "• Trên Tree: Dùng được CẢ DFS VÀ BFS (vì đường đi là duy nhất).\n• Trên Unweighted Graph: BẮT BUỘC CHỈ DÙNG BFS (DFS sẽ thất bại vì đi sâu lạc hướng vào đường vòng).",
    },
    {
      id: 6,
      tag: "Special Case 2: BFS O(V+E)",
      front: "Tại sao BFS giải quyết hoàn hảo SSSP trên đồ thị không trọng số (Unweighted)?",
      back: "Vì BFS duyệt theo từng lớp khoảng cách số bước (hops) tăng dần, nên đỉnh được duyệt lần đầu tiên chắc chắn là qua đường đi ngắn nhất. BFS Spanning Tree = Shortest Paths Tree.",
    },
    {
      id: 7,
      tag: "Special Case 3: DAG",
      front: "Tại sao trên đồ thị DAG ta chỉ cần 1 Pass Relax thay vì V - 1 lần như Bellman-Ford?",
      back: "Vì DAG không có chu trình, khi nới lỏng các cạnh theo Thứ tự Tô-pô (Topological Sort), mỗi đỉnh khi được duyệt thì tất cả các đỉnh phía trước đã tối ưu xong hoàn toàn.",
    },
    {
      id: 8,
      tag: "DAG & Dynamic Programming",
      front: "Thuật toán SSSP trên DAG theo thứ tự Topological Sort là tiền đề cho chủ đề nào?",
      back: "Là tiền đề (precursor) trực tiếp cho Quy hoạch động (Dynamic Programming - Week 10), trong đó các bài toán con được giải quyết tuần tự theo thứ tự phụ thuộc tô-pô.",
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
            <span>📌 Cần Nhớ: 8 Flashcards 3D 4 Biến Thể SSSP Đặc Biệt (Phần 1 - 5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Khắc Sâu 4 Biến Thể SSSP: Tree, Unweighted, DAG &amp; Tiền Đề DP
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lật thẻ ôn tập nhanh các tính chất đặc thù và độ phức tạp tối ưu của từng cấu trúc đồ thị.
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
