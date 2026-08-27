"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function SsspBasicsFlashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "Định Nghĩa SSSP",
      front: "Mục tiêu cốt lõi của bài toán Single-Source Shortest Paths (SSSP) là gì?",
      back: "Tìm trọng số đường đi ngắn nhất δ(s, v) và dựng lại đường đi tối ưu từ một đỉnh nguồn cố định S đến TẤT CẢ các đỉnh còn lại trong đồ thị.",
    },
    {
      id: 2,
      tag: "Ký Hiệu δ(a, b)",
      front: "Ký hiệu δ(a, b) có ý nghĩa gì và bằng bao nhiêu nếu đỉnh b không đến được từ a?",
      back: "δ(a, b) là trọng số đường đi ngắn nhất từ a đến b. Nếu không thể đến được (unreachable), δ(a, b) = ∞.",
    },
    {
      id: 3,
      tag: "Simple Path",
      front: "Một đường đi như thế nào thì được gọi là Đường đi đơn giản (Simple Path)?",
      back: "Là đường đi không chứa bất kỳ đỉnh nào bị lặp lại (mỗi đỉnh chỉ xuất hiện tối đa 1 lần trên hành trình).",
    },
    {
      id: 4,
      tag: "Mảng D[v] (Distance)",
      front: "Mảng D[v] lưu trữ giá trị gì và có đặc điểm biến thiên như thế nào trong lúc chạy?",
      back: "D[v] là khoảng cách ngắn nhất ước lượng hiện có. D[v] luôn ≥ δ(s, v), chỉ giảm dần (không bao giờ tăng) và hội tụ đúng bằng δ(s, v) khi thuật toán kết thúc.",
    },
    {
      id: 5,
      tag: "Mảng p[v] (Predecessor)",
      front: "Mảng p[v] (đỉnh cha) dùng để làm gì trong thuật toán SSSP?",
      back: "p[v] lưu đỉnh liền trước v trên đường đi tốt nhất từ s đến v. Dùng để truy vết ngược (backtrack) tìm lại toàn bộ chuỗi đỉnh trên đường đi ngắn nhất.",
    },
    {
      id: 6,
      tag: "SSSP vs MST",
      front: "Sự khác nhau cơ bản giữa bài toán MST (Bài 13) và SSSP (Bài 14) là gì?",
      back: "MST: Đồ thị vô hướng liên thông, tìm cây bao phủ toàn bộ đỉnh với tổng trọng số cực tiểu.\nSSSP: Đồ thị có hướng, tìm đường đi ngắn nhất từ 1 nguồn đến từng đỉnh riêng lẻ.",
    },
    {
      id: 7,
      tag: "Khởi Tạo D[s] & D[v]",
      front: "Tại sao ban đầu D[s] = 0 nhưng D[v ≠ s] lại được gán bằng ∞?",
      back: "Vì khoảng cách từ nguồn s đến chính nó luôn bằng 0, còn các đỉnh khác ta chưa biết đường đi nên tạm gán bằng vô cùng (∞) để sẵn sàng nới lỏng.",
    },
    {
      id: 8,
      tag: "Backtrack Path",
      front: "Làm thế nào để in ra đường đi từ s đến đích v bằng mảng p[]?",
      back: "Bắt đầu từ đỉnh đích v, liên tục lùi về đỉnh cha p[v], p[p[v]]... cho đến khi chạm tới nguồn s (nơi có p[s] = -1), sau đó đảo ngược chuỗi đỉnh.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const curCard = cards[currentIdx];
  const isCurFlipped = !!flippedCards[curCard.id];

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-sky-700" />
            <span>📌 Cần Nhớ Phần 1: Flashcards Nền Tảng SSSP (8 Thẻ 3D)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-amber-950 to-emerald-950 bg-clip-text text-transparent">
            Khắc Sâu Khái Niệm SSSP, &delta;(s, v), D[v] &amp; p[v]
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lật thẻ ôn tập nhanh các nền tảng toán học và cấu trúc dữ liệu cơ bản trước khi bước vào các thuật toán giải.
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
          <span className="text-sky-950 font-bold px-2">
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
              : "bg-white border-slate-200 hover:border-sky-300 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-lg font-bold ${
              isCurFlipped
                ? "bg-emerald-100 border border-emerald-300 text-emerald-950"
                : "bg-sky-100 border border-sky-300 text-sky-950"
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
