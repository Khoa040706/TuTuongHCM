"use client";

import React, { useState } from "react";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function MstBasicsFlashcards() {
  const [flippedCards, setFlippedCards] = useState({});
  const [currentIdx, setCurrentIdx] = useState(0);

  const cards = [
    {
      id: 1,
      tag: "Định Nghĩa Cây",
      front: "Cây tự do (Tree T) là gì và có tính chất gì quan trọng nhất?",
      back: "T là đồ thị liên thông có đúng V đỉnh và V - 1 cạnh. Tính chất cốt tử: Giữa bất kỳ 2 đỉnh nào trong T luôn có DUY NHẤT một đường đi (one unique path).",
    },
    {
      id: 2,
      tag: "Cây Khung (Spanning Tree)",
      front: "Cây khung (Spanning Tree ST) của đồ thị liên thông G là gì?",
      back: "ST là một cây bao phủ (spans/covers) tất cả các đỉnh của đồ thị G. Số cạnh của ST luôn bằng V - 1 và không chứa chu trình.",
    },
    {
      id: 3,
      tag: "Liên Hệ Bài 12",
      front: "Mối liên hệ giữa BFS/DFS ở bài trước với Cây khung là gì?",
      back: "BFS Spanning Tree và DFS Spanning Tree sinh ra khi duyệt đồ thị chính là các cây khung thực thụ bao phủ đồ thị.",
    },
    {
      id: 4,
      tag: "Vũ Khí Nền Tảng",
      front: "Hai cấu trúc/thuật toán nào sẽ được dùng lại để giải bài toán MST?",
      back: "1. Sorting Problem (Bài 06) để sắp xếp các cạnh O(E log E).\n2. Union-Find Disjoint Sets - UFDS (Bài 11) để kiểm tra chu trình và gộp tập hợp trong O(α(V)) ≈ O(1).",
    },
    {
      id: 5,
      tag: "Điều Kiện Đồ Thị",
      front: "Cây khung nhỏ nhất (MST) chỉ được định nghĩa trên loại đồ thị nào?",
      back: "MST chỉ định nghĩa trên đồ thị VÔ HƯỚNG, LIÊN THÔNG và CÓ TRỌNG SỐ (Connected, Undirected, Weighted Graph).",
    },
    {
      id: 6,
      tag: "Công Thức Trọng Số",
      front: "Tổng trọng số của một Cây khung w(ST) được tính theo công thức nào?",
      back: "w(ST) = Σ_{(a, b) ∈ ST} w(a, b) — Bằng tổng tất cả trọng số của các cạnh nằm trong cây khung ST.",
    },
    {
      id: 7,
      tag: "Định Nghĩa MST",
      front: "Khái niệm Minimum Spanning Tree (MST) được phát biểu chuẩn xác ra sao?",
      back: "Trong tất cả các Spanning Tree có thể có của đồ thị G, MST là cây khung có tổng trọng số w(ST) NHỎ NHẤT CÓ THỂ.",
    },
    {
      id: 8,
      tag: "Tính Duy Nhất",
      front: "Một đồ thị có thể có bao nhiêu cây khung và bao nhiêu MST?",
      back: "Một đồ thị có thể có RẤT NHIỀU Spanning Tree khác nhau và có thể có nhiều hình dạng MST khác nhau (nếu các cạnh trùng trọng số), nhưng GIÁ TRỊ TỔNG TRỌNG SỐ CỰC TIỂU luôn là một con số duy nhất!",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cur = cards[currentIdx];
  const isCurFlipped = !!flippedCards[cur.id];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>📌 Cần Nhớ (Phần 1 &amp; 2): Flashcards Ôn Tập Cốt Lõi</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            8 Flashcards Nền Tảng Cây Khung Nhỏ Nhất (MST)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lật thẻ để kiểm tra độ hiểu sâu về các định nghĩa toán học và tính chất cây khung.
          </p>
        </div>

        {/* Card Counter */}
        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 disabled:opacity-30 hover:bg-slate-200 transition-all text-slate-700 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-3.5 py-1.5 rounded-xl bg-white border border-emerald-300 font-bold text-emerald-950 shadow-sm">
            {currentIdx + 1} / {cards.length}
          </span>
          <button
            onClick={() => setCurrentIdx(Math.min(cards.length - 1, currentIdx + 1))}
            disabled={currentIdx === cards.length - 1}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 disabled:opacity-30 hover:bg-slate-200 transition-all text-slate-700 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Single Flashcard Viewer */}
      <div className="flex justify-center mb-6">
        <div
          onClick={() => toggleFlip(cur.id)}
          className={`w-full max-w-xl min-h-[220px] p-6 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between select-none ${
            isCurFlipped
              ? "bg-emerald-50/90 border-emerald-300 ring-2 ring-emerald-400/30 text-emerald-950"
              : "bg-white border-slate-200 hover:border-emerald-400 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold">
              {cur.tag}
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <RotateCw className="w-3 h-3 text-slate-400" />
              {isCurFlipped ? "Mặt sau (Đáp án)" : "Bấm để lật thẻ"}
            </span>
          </div>

          <div className="py-4">
            {isCurFlipped ? (
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-sans font-medium text-emerald-950 whitespace-pre-line leading-relaxed">
                  {cur.back}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-semibold">CÂU HỎI TRỌNG TÂM:</span>
                <p className="text-base sm:text-lg font-bold font-sans text-slate-900 leading-relaxed">
                  {cur.front}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
            <span>Thẻ #{cur.id}</span>
            <span>{isCurFlipped ? "Đã lật xem ✅" : "Chưa lật ⏳"}</span>
          </div>
        </div>
      </div>

      {/* Mini 8-Card Quick Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {cards.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => {
              setCurrentIdx(idx);
              toggleFlip(c.id);
            }}
            className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all shadow-sm ${
              currentIdx === idx
                ? "bg-emerald-600 text-white font-bold ring-2 ring-emerald-400/40"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold"
            }`}
          >
            Thẻ {c.id}
          </button>
        ))}
      </div>
    </div>
  );
}
