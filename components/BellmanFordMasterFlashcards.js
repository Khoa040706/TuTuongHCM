"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function BellmanFordMasterFlashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "Modified BFS vs SSSP",
      front: "Tại sao BFS truyền thống lại thất bại trong việc tìm đường đi ngắn nhất trên đồ thị có trọng số?",
      back: "Vì BFS chỉ đếm số lượng cạnh chứ không quan tâm đến tổng trọng số, dẫn đến việc chọn nhầm đường đi ít cạnh nhưng có chi phí lớn hơn đường vòng (detour).",
    },
    {
      id: 2,
      tag: "Độ Phức Tạp Bellman-Ford",
      front: "Độ phức tạp thời gian của thuật toán Bellman-Ford là bao nhiêu và do đâu?",
      back: "O(V · E) — Do vòng ngoài lặp đúng V - 1 lần (O(V)), mỗi vòng quét qua toàn bộ E cạnh để thực hiện phép toán nới lỏng relax() trong O(1).",
    },
    {
      id: 3,
      tag: "Trọng Số Âm",
      front: "Thuật toán Bellman-Ford có thể chạy đúng trên đồ thị có cạnh trọng số âm không?",
      back: "Có! Bellman-Ford xử lý hoàn hảo các cạnh có trọng số âm, miễn là đồ thị không chứa chu trình âm (negative weight cycle) ảnh hưởng đến đường đi cần tính.",
    },
    {
      id: 4,
      tag: "Định Lý 1 (Theorem 1)",
      front: "Định lý 1 phát biểu điều gì về đường đi ngắn nhất khi không có chu trình âm?",
      back: "Đường đi ngắn nhất luôn là một Đường đi đơn giản (Simple Path) không có đỉnh lặp lại, và do đó có tối đa đúng |V| - 1 cạnh.",
    },
    {
      id: 5,
      tag: "Cắt Chu Trình (Proof 1)",
      front: "Trong chứng minh Định lý 1, tại sao việc loại bỏ chu trình dương khỏi đường đi lại tạo ra mâu thuẫn?",
      back: "Vì nếu chu trình có trọng số dương c > 0, cắt bỏ c đi sẽ tạo ra một đường đi mới có chi phí nhỏ hơn, mâu thuẫn với giả thiết đường đi ban đầu là ngắn nhất.",
    },
    {
      id: 6,
      tag: "Định Lý 2 (Theorem 2)",
      front: "Theo Định lý 2, tại sao sau |V| - 1 vòng lặp thì mảng D[v] chắc chắn đạt tối ưu δ(s, v)?",
      back: "Vì theo quy nạp toán học, mỗi pass qua E mở rộng đường đi tối ưu thêm ít nhất 1 hop (1 cạnh). Vì đường đi đơn giản tối đa có V - 1 cạnh nên sau V - 1 pass chắc chắn hội tụ.",
    },
    {
      id: 7,
      tag: "Worst-Case Edge Ordering",
      front: "Nếu danh sách cạnh E được sắp xếp theo thứ tự tệ nhất có thể, Bellman-Ford cần bao nhiêu vòng?",
      back: "Vẫn cần đúng tối đa |V| - 1 vòng! Định lý 2 chứng minh Bellman-Ford luôn hội tụ sau V - 1 vòng bất chấp thứ tự duyệt cạnh trong danh sách E.",
    },
    {
      id: 8,
      tag: "Rule of Thumb",
      front: "Quy tắc vàng khi lựa chọn giữa BFS và Bellman-Ford là gì?",
      back: "Đồ thị không trọng số (hoặc trọng số bằng nhau) ⟹ Dùng BFS O(V + E) cho nhanh.\nĐồ thị có trọng số bất kỳ ⟹ Bắt buộc dùng Bellman-Ford O(V · E) hoặc Dijkstra.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const curCard = cards[currentIdx];
  const isCurFlipped = !!flippedCards[curCard.id];

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>📌 Cần Nhớ: Flashcards Thuật Toán Bellman-Ford &amp; Định Lý (8 Thẻ 3D)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-sky-950 to-emerald-950 bg-clip-text text-transparent">
            Khắc Sâu Thuật Toán Bellman-Ford, O(V · E) &amp; 2 Định Lý Cốt Tử
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lật thẻ ôn tập nhanh toàn bộ cơ chế hoạt động, độ phức tạp và chứng minh toán học của thuật toán Bellman-Ford.
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
              : "bg-white border-slate-200 hover:border-amber-400 text-slate-800"
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
              <p className="text-sm sm:text-base font-sans font-semibold text-emerald-950 whitespace-pre-line leading-relaxed">
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
            <span>Thẻ #{curCard.id}</span>
            <span>{isCurFlipped ? "Đã lật xem ✅" : "Chưa lật ⏳"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
