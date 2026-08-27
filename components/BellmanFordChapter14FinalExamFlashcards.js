"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export default function BellmanFordChapter14FinalExamFlashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "Định Nghĩa SSSP",
      front: "Bài toán Single-Source Shortest Paths (SSSP) yêu cầu tìm điều gì?",
      back: "Tìm trọng số đường đi ngắn nhất delta(s, v) và đường đi tối ưu từ 1 đỉnh nguồn duy nhất s đến tất cả mọi đỉnh v còn lại trong đồ thị.",
    },
    {
      id: 2,
      tag: "Mảng Phụ Trợ",
      front: "Mảng D[v] và mảng p[v] có ý nghĩa gì trong bài toán SSSP?",
      back: "D[v] lưu khoảng cách ngắn nhất ước lượng hiện tại (luôn >= delta, giảm dần về delta khi xong).\np[v] lưu đỉnh liền trước (predecessor) để truy vết ngược đường đi (backtrack).",
    },
    {
      id: 3,
      tag: "Chu Trình Âm",
      front: "Tại sao tồn tại negative cycle lại khiến bài toán SSSP bị Undefined (-vô cực)?",
      back: "Vì ta có thể đi lặp vòng tròn vô hạn lần qua chu trình âm để giảm tổng chi phí đường đi về -vô cực, khiến không tồn tại đường đi ngắn nhất cụ thể.",
    },
    {
      id: 4,
      tag: "Khối Xây Dựng",
      front: "Hai khối xây dựng cốt tử dùng chung cho mọi thuật toán giải SSSP là gì?",
      back: "1. initSSSP(s): Khởi tạo D[s] = 0, D[v] = 10^9 (INF), p[v] = -1.\n2. relax(u, v, w): Cập nhật D[v] = D[u] + w và p[v] = u nếu D[u] + w < D[v].",
    },
    {
      id: 5,
      tag: "Modified BFS",
      front: "Tại sao Modified BFS chỉ đúng trên đồ thị unweighted mà thất bại trên weighted?",
      back: "Vì BFS chỉ đếm số lượng cạnh chứ không quan tâm trọng số, nên sẽ bị mắc bẫy chọn đường trực tiếp ít cạnh (VD: w=9) thay vì đường vòng detour nhiều cạnh hơn nhưng tổng trọng số nhỏ hơn (VD: w=8).",
    },
    {
      id: 6,
      tag: "Bellman-Ford O(VE)",
      front: "Cấu trúc vòng lặp và độ phức tạp của thuật toán Bellman-Ford là gì?",
      back: "Vòng ngoài lặp V - 1 lần (O(V)), vòng trong duyệt qua toàn bộ E cạnh (O(E)) để nới lỏng relax() trong O(1) ==> Tổng độ phức tạp là O(V · E).",
    },
    {
      id: 7,
      tag: "Định Lý 1 (Theorem 1)",
      front: "Định lý 1 chứng minh điều gì về số lượng cạnh của đường đi ngắn nhất?",
      back: "Khi không có chu trình âm, đường đi ngắn nhất luôn là một Simple Path (không lặp đỉnh), và do đó có tối đa đúng |V| - 1 cạnh.",
    },
    {
      id: 8,
      tag: "Định Lý 2 (Theorem 2)",
      front: "Định lý 2 chứng minh điều gì về tính hội tụ của Bellman-Ford sau V - 1 vòng?",
      back: "Theo quy nạp, mỗi pass qua E mở rộng đường đi tối ưu thêm ít nhất 1 cạnh (1 hop). Do đó sau đúng V - 1 vòng quét, mảng D chắc chắn hội tụ về delta, bất kể thứ tự duyệt cạnh xui xẻo nhất.",
    },
    {
      id: 9,
      tag: "Dò Chu Trình Âm (Pass |V|)",
      front: "Làm thế nào Bellman-Ford phát hiện được chu trình âm có thể đến được từ s?",
      back: "Chạy thêm 1 vòng quét thứ |V| qua toàn bộ E cạnh. Nếu vẫn còn bất kỳ cạnh nào thỏa mãn D[v] > D[u] + w thì kết luận tồn tại chu trình âm!",
    },
    {
      id: 10,
      tag: "Tính Dừng & Lựa Chọn",
      front: "Khi nào nên dùng BFS và khi nào bắt buộc dùng Bellman-Ford?",
      back: "• Đồ thị không trọng số ==> Dùng BFS O(V + E) cho nhanh nhất.\n• Đồ thị có trọng số tổng quát (kể cả có cạnh âm) ==> Dùng Bellman-Ford O(V · E). Thuật toán luôn đảm bảo dừng an toàn sau |V| pass!",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const curCard = cards[currentIdx];
  const isCurFlipped = !!flippedCards[curCard.id];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-700" />
            <span>📌 Cần Nhớ Toàn Bài: 10 Flashcards 3D Master (Bài 14: Bellman-Ford)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-sky-950 to-amber-950 bg-clip-text text-transparent">
            Bộ Thẻ Ôn Luyện Toàn Diện: Từ Nền Tảng SSSP Đến Bellman-Ford &amp; Định Lý
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lật thẻ ôn tập nhanh toàn bộ 10 khái niệm và kỹ thuật then chốt của Bài 14 trước khi làm bài kiểm tra.
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
              : "bg-white border-slate-200 hover:border-indigo-300 text-slate-800"
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
            <span>Thẻ #{curCard.id} / 10</span>
            <span>{isCurFlipped ? "Đã lật xem ✅" : "Chưa lật ⏳"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
