"use client";

import React, { useState } from "react";
import {
  Sparkles,
  RotateCcw,
} from "lucide-react";

export default function GraphTraversalMasterFlashcards() {
  const [flippedCard, setFlippedCard] = useState(null);

  const flashcards = [
    {
      id: 1,
      front: "Sức mạnh & Điểm yếu của Adjacency Matrix?",
      back: "Mạnh về kiểm tra cạnh O(1). Yếu về duyệt láng giềng O(V) và tốn không gian O(V²).",
      category: "Phần 1: Trade-off",
      color: "sky",
    },
    {
      id: 2,
      front: "Vì sao Adjacency List là lựa chọn số 1 cho BFS / DFS?",
      back: "Duyệt k đỉnh kề trong O(k) (Output-sensitive) và bộ nhớ tối ưu O(V + E) không lãng phí ô nhớ.",
      category: "Phần 1: Cấu trúc",
      color: "emerald",
    },
    {
      id: 3,
      front: "2 khác biệt lớn khi duyệt Cây vs duyệt Đồ thị tổng quát?",
      back: "1. Đồ thị không có Root ⟹ Phải chọn Source s. 2. Đồ thị có chu trình ⟹ Bắt buộc dùng cờ visited[] chống lặp vô hạn.",
      category: "Phần 2.1-2.2: Khái niệm",
      color: "purple",
    },
    {
      id: 4,
      front: "3 thành phần cấu tạo nên thuật toán BFS?",
      back: "1. Hàng đợi Queue Q (FIFO). 2. Mảng visited[V] chống chu trình. 3. Mảng cha p[V] lưu đường đi.",
      category: "Phần 2.3-2.5: BFS",
      color: "cyan",
    },
    {
      id: 5,
      front: "Độ phức tạp thời gian của BFS và DFS khi dùng AdjList?",
      back: "Đều đạt O(V + E) tối ưu: Mỗi đỉnh vào queue/stack đúng 1 lần (O(V)), mỗi cạnh duyệt 1 lần (O(E)).",
      category: "Phần 2.5 & 2.8: Độ phức tạp",
      color: "amber",
    },
    {
      id: 6,
      front: "3 thành phần cấu tạo nên thuật toán DFS?",
      back: "1. Ngăn xếp Call Stack (LIFO / Đệ quy). 2. Mảng visited[V]. 3. Mảng cha p[V].",
      category: "Phần 2.6-2.8: DFS",
      color: "pink",
    },
    {
      id: 7,
      front: "Cả BFS và DFS đều sinh ra cấu trúc cây gì?",
      back: "Cây khung (Spanning Tree) bao phủ toàn bộ các đỉnh liên thông với đúng E = V - 1 cạnh.",
      category: "Phần 2.8: Spanning Tree",
      color: "indigo",
    },
    {
      id: 8,
      front: "Vì sao hàm backtrack(u, p) đệ quy in ra đường đi đúng thứ tự s ⟶ t?",
      back: "Nhờ gọi backtrack(p[u], p) trước rồi mới in u (tương tự post-order), Call Stack LIFO tự đảo ngược output!",
      category: "Phần 2.9: Path Reconstruction",
      color: "teal",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
            <span>Tổng Kết Phần 1 &amp; Phần 2</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950 bg-clip-text text-transparent">
            8 Flashcards Kiến Thức Cốt Lõi Cần Nhớ
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Nhấp vào từng thẻ để lật xem lời giải và ghi nhớ các quy luật vàng trước khi làm bài tập thực hành.
          </p>
        </div>

        <button
          onClick={() => setFlippedCard(null)}
          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-bold self-start md:self-auto flex items-center gap-1.5 shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Úp Tất Cả Thẻ
        </button>
      </div>

      {/* 8 Flashcards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {flashcards.map((fc) => {
          const isFlipped = flippedCard === fc.id;

          return (
            <div
              key={fc.id}
              onClick={() => setFlippedCard(isFlipped ? null : fc.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer min-h-[165px] flex flex-col justify-between select-none shadow-sm ${
                isFlipped
                  ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/40 text-emerald-950"
                  : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-[10px] font-mono text-amber-950 font-bold">
                    {fc.category}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-700 font-bold">
                    {isFlipped ? "ĐÁP ÁN ✅" : "CÂU HỎI ❓"}
                  </span>
                </div>

                <p className="text-xs font-sans font-bold leading-relaxed">
                  {isFlipped ? fc.back : fc.front}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Thẻ #{fc.id}</span>
                <span className="text-indigo-600 font-bold">
                  {isFlipped ? "Nhấp để đóng" : "Nhấp để lật ↻"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
