"use client";

import React, { useState } from "react";
import { Trophy } from "lucide-react";

export default function HeapMasterSummaryFlashcards() {
  const [flippedCards, setFlippedCards] = useState({});
  const [currentTab, setCurrentTab] = useState("dashboard"); // "dashboard" | "flashcards"

  const flashcards = [
    {
      id: 1,
      q: "Complete Binary Tree có N nút thì chiều cao h là bao nhiêu?",
      a: "Height = O(log N) (chính xác là h = ⌊log₂ N⌋). Vì mỗi tầng tăng gấp đôi số node.",
      tag: "Chiều Cao",
    },
    {
      id: 2,
      q: "Phần tử lớn nhất trong Binary Max-Heap được lưu trữ ở đâu?",
      a: "Luôn luôn ở Root (A[1]). Vì mọi đường đi từ root xuống lá đều có giá trị giảm dần (không tăng).",
      tag: "Max-Heap",
    },
    {
      id: 3,
      q: "Công thức tìm cha của nút i trong mảng 1-based là gì?",
      a: "parent(i) = ⌊i / 2⌋ (với mọi i > 1, root i = 1 không có parent).",
      tag: "Điều Hướng",
    },
    {
      id: 4,
      q: "Công thức tìm con trái và con phải của nút i là gì?",
      a: "left(i) = 2*i và right(i) = 2*i + 1.",
      tag: "Điều Hướng",
    },
    {
      id: 5,
      q: "Điều kiện kiểm tra nút i không có con trái là gì?",
      a: "left(i) = 2*i > heapsize (vượt quá số phần tử đang dùng của heap).",
      tag: "Biên Heap",
    },
    {
      id: 6,
      q: "Tại sao thao tác Insert luôn chèn vào vị trí A[heapsize + 1]?",
      a: "Đây là vị trí duy nhất giúp thêm 1 phần tử mà cây vẫn giữ 100% tính chất Complete Binary Tree.",
      tag: "Insert",
    },
    {
      id: 7,
      q: "Độ phức tạp thời gian của Insert(v) và ShiftUp(i) là bao nhiêu?",
      a: "O(log N) vì số bước hoán đổi (swap) tối đa bằng chiều cao cây h = ⌊log₂ N⌋.",
      tag: "Độ Phức Tạp",
    },
    {
      id: 8,
      q: "Trong ExtractMax(), phần tử nào được đưa lên thay thế Root?",
      a: "Lá cuối cùng A[heapsize] — vì là phần tử duy nhất có thể bốc đi mà không làm đứt gãy cây.",
      tag: "ExtractMax",
    },
    {
      id: 9,
      q: "Trong ShiftDown(i), nếu vi phạm thì cha sẽ swap với con nào?",
      a: "Bắt buộc phải swap với con LỚN HƠN trong 2 con để bảo toàn Max-Heap property.",
      tag: "ShiftDown",
    },
    {
      id: 10,
      q: "Tại sao Binary Heap tốt hơn Circular Sorted Array và Unsorted Array?",
      a: "Binary Heap cân bằng cả 2 thao tác (Insert và ExtractMax) trong O(log n), không bị kẹt thao tác O(n).",
      tag: "So Sánh",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFlipAll = () => {
    const nextState = {};
    const allFlipped = Object.values(flippedCards).filter(Boolean).length === flashcards.length;
    flashcards.forEach((f) => {
      nextState[f.id] = !allFlipped;
    });
    setFlippedCards(nextState);
  };

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Tổng Kết Bài 10 &amp; Ôn Thi Cốt Lõi</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Trung Tâm Tri Thức &amp; Top 10 Flashcards Ôn Thi
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng kết 4 trụ cột tri thức Bài 10 và 10 câu hỏi cốt lõi dễ xuất hiện trong các đề thi trắc nghiệm.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setCurrentTab("dashboard")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              currentTab === "dashboard"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            4 Trụ Cột Tri Thức
          </button>
          <button
            onClick={() => setCurrentTab("flashcards")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              currentTab === "flashcards"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            10 Flashcards Ôn Thi
          </button>
        </div>
      </div>

      {/* Tab 1: 4 Pillars Dashboard */}
      {currentTab === "dashboard" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-sky-950 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              1. ADT Priority Queue &amp; FIFO Tie-Breaking
            </span>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Hai phép toán: <code>Enqueue(x)</code> và <code>Dequeue()</code> rút phần tử ưu tiên cao nhất. Nếu cùng priority &rarr; áp dụng <strong>FIFO (First-In-First-Out)</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-teal-200 shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-teal-950 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              2. 1-Based Implicit Array Mapping
            </span>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Lưu trên mảng <code>A[1..N]</code> (ô 0 bỏ trống). Không cần con trỏ: <code>parent = i/2</code>, <code>left = 2i</code>, <code>right = 2i+1</code> tính trong O(1).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-amber-950 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              3. Max-Heap Invariant &amp; Max at Root
            </span>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Tính chất <code>A[parent(i)] &ge; A[i]</code>. Mọi đường đi từ Root xuống lá đều giảm dần &rarr; <strong>Phần tử lớn nhất luôn luôn nằm ở Root</strong>!
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-950 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              4. Insert &amp; ExtractMax in O(log N)
            </span>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              <code>Insert</code> chèn cuối + ShiftUp; <code>ExtractMax</code> lấy Root, đưa lá cuối lên + ShiftDown. Cả hai đều đạt <strong>O(log N)</strong> nhờ chiều cao cây hoàn chỉnh!
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: 10 Flashcards */}
      {currentTab === "flashcards" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 font-mono">Bấm vào thẻ để lật xem đáp án giải thích</span>
            <button
              onClick={handleFlipAll}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-mono border border-slate-200 shadow-sm transition-all font-bold"
            >
              Lật tất cả thẻ
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {flashcards.map((f) => {
              const isFlipped = !!flippedCards[f.id];

              return (
                <div
                  key={f.id}
                  onClick={() => toggleFlip(f.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none min-h-[120px] flex flex-col justify-between shadow-sm ${
                    isFlipped
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-500/30 scale-[1.01]"
                      : "bg-white border-slate-200 text-slate-800 hover:border-amber-400"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-bold">
                        #{f.id} • {f.tag}
                      </span>
                      <span className="font-semibold">{isFlipped ? "ĐÁP ÁN ✅" : "CÂU HỎI ❓"}</span>
                    </div>

                    <p className="text-xs font-bold leading-relaxed font-sans mt-1">
                      {isFlipped ? f.a : f.q}
                    </p>
                  </div>

                  <div className="text-[10px] font-mono text-right text-slate-500 mt-2">
                    {isFlipped ? "Bấm để xem lại câu hỏi" : "Bấm để lật xem đáp án"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
