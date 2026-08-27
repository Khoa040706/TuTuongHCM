"use client";

import React, { useState } from "react";
import {
  RotateCw,
  Shuffle,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PrimExchangeArgumentProofStudio() {
  const [activeTab, setActiveTab] = useState("proof"); // "proof" | "visualSwap" | "flashcards"
  const [isSwapped, setIsSwapped] = useState(false);

  // Flashcards state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      tag: "Bản Chất Tham Lam",
      front: "Thuật toán Prim's thuộc trường phái thiết kế thuật toán nào?",
      back: "Thuật toán Tham lam (Greedy Algorithm) — Ở mỗi bước luôn chọn cạnh hợp lệ có trọng số nhỏ nhất nối từ cây hiện tại ra ngoài.",
    },
    {
      id: 2,
      tag: "Đỉnh Nguồn s",
      front: "Thuật toán Prim bắt đầu từ đâu và kết thúc khi nào?",
      back: "Bắt đầu từ 1 đỉnh nguồn s duy nhất (thường là đỉnh 0) và kết thúc khi cây T đã bao phủ trọn vẹn tất cả V đỉnh (đạt đúng V - 1 cạnh).",
    },
    {
      id: 3,
      tag: "PriorityQueue",
      front: "Vai trò then chốt của hàng đợi ưu tiên PriorityQueue trong Prim là gì?",
      back: "Lưu trữ tất cả các cạnh ứng viên nối từ cây hiện tại ra ngoài, giúp lấy ra cạnh có trọng số nhỏ nhất ở đầu hàng đợi trong O(log E).",
    },
    {
      id: 4,
      tag: "Mảng Cờ taken[]",
      front: "Mảng boolean taken[] trong code Java của Prim dùng để làm gì?",
      back: "Để đánh dấu đỉnh nào đã thuộc cây T. Khi rút cạnh (w, u) từ PQ, nếu taken[u] == true thì bỏ qua (continue) để chống tạo chu trình.",
    },
    {
      id: 5,
      tag: "Rút Gọn O(log E)",
      front: "Tại sao O(log E) lại bằng O(log V) trong chứng minh độ phức tạp?",
      back: "Vì trong đồ thị đơn E ≤ V², nên O(log E) = O(log V²) = 2·O(log V) = O(log V).",
    },
    {
      id: 6,
      tag: "Độ Phức Tạp Prim",
      front: "Tổng độ phức tạp thời gian của thuật toán Prim với Adjacency List là bao nhiêu?",
      back: "O(E log V) — Với mỗi cạnh được xét tối đa 2 lần O(E), mỗi thao tác heap tốn O(log V).",
    },
    {
      id: 7,
      tag: "Exchange Argument",
      front: "Kỹ thuật chứng minh tính đúng đắn của Prim có tên là gì và nguyên lý ra sao?",
      back: "Exchange Argument (Kỹ thuật thay thế cạnh) — Chứng minh rằng mọi cạnh Prim chọn e_k luôn có trọng số ≤ cạnh bù trừ e* trong cây tối ưu T*, từ đó hoán đổi e* thành e_k mà không làm tăng tổng trọng số.",
    },
    {
      id: 8,
      tag: "Prim vs Kruskal",
      front: "Sự khác biệt cốt lõi nhất về cách phát triển cây giữa Prim và Kruskal là gì?",
      back: "Prim hướng đỉnh: Mọc duy nhất 1 cây lớn dần từ nguồn s (PriorityQueue).\nKruskal hướng cạnh: Gộp rừng các cây rời rạc lại với nhau (UFDS).",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const curCard = cards[currentIdx];
  const isCurFlipped = !!flippedCards[curCard.id];

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Phần 4.3: Chứng Minh Tính Đúng Đắn (Proof of Correctness)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-purple-950 to-amber-950 bg-clip-text text-transparent">
            Kỹ Thuật Chứng Minh Thay Thế Cạnh (Exchange Argument)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quy nạp toán học chứng minh tại sao thuật toán tham lam Prim luôn đảm bảo tìm ra cây khung có tổng trọng số cực tiểu toàn cục.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("proof")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "proof"
                ? "bg-teal-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Các Bước Chứng Minh
          </button>
          <button
            onClick={() => setActiveTab("visualSwap")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "visualSwap"
                ? "bg-pink-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Ví Dụ Slide (e₁ vs e*)
          </button>
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "flashcards"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Flashcards Prim (8 Thẻ)
          </button>
        </div>
      </div>

      {/* Tab 1: Proof Logic */}
      {activeTab === "proof" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-purple-950 font-bold uppercase">Bước 1 &amp; 2: Giả Định &amp; Điểm Khác Biệt Đầu Tiên</span>
              <p className="text-slate-700 leading-relaxed">
                Gọi $T$ là cây do Prim sinh ra, $T^*$ là một cây khung tối ưu tối thiểu. Nếu $T == T^* \implies$ Xong. Nếu $T \neq T^*$, gọi $e_k = (u, v)$ là <strong>cạnh đầu tiên</strong> Prim chọn ở vòng lặp thứ $k$ mà không thuộc $T^*$.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-pink-950 font-bold uppercase">Bước 3: Đường Đi Bù Trừ P &amp; Cạnh e*</span>
              <p className="text-slate-700 leading-relaxed">
                Trong $T^*$, tồn tại đường đi $P$ nối từ $u$ đến $v$. Trên đường đi $P$, chắc chắn có một cạnh $e^*$ có 1 đầu mút nằm trong cây đã tạo ở vòng $(k-1)$ và đầu còn lại nằm ngoài cây.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-amber-950 font-bold uppercase">Bước 4: Bất Đẳng Thức Trọng Số Cốt Tử</span>
              <p className="text-slate-700 leading-relaxed">
                Vì Prim chọn $e_k$ thay vì $e^*$ ở vòng lặp thứ $k$, theo tính tham lam của Prim ta chắc chắn có:
                <code className="block mt-1 font-mono text-amber-950 font-bold text-xs bg-amber-50 p-1.5 rounded-lg border border-amber-200">w(e*) ≥ w(e_k)</code>
                (Nếu $w(e^*) &lt; w(e_k)$, Prim đã phải chọn $e^*$ trước rồi ⟹ mâu thuẫn!).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase">Bước 5: Hoán Đổi Cạnh (Exchange Argument)</span>
              <p className="text-slate-700 leading-relaxed">
                Ta thay thế $e^*$ bằng $e_k$ trong $T^*$:
                <code className="block my-1 font-mono text-emerald-950 font-bold text-xs bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">T' = T* \ &#123;e*&#125; ∪ &#123;e_k&#125;</code>
                Vì $w(e_k) \le w(e^*)$, tổng trọng số $w(T') \le w(T^*)$. Vậy $T'$ vẫn là một MST và có thêm 1 cạnh chung với $T$! Lặp lại quy trình này ⟹ $T$ chính là một MST! (Q.E.D).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Visual Slide Example (e1 vs e*) */}
      {activeTab === "visualSwap" && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-slate-500">Ví Dụ Minh Họa Slide Chuẩn (Exchange Step):</span>
                <h4 className="text-sm font-bold font-mono text-slate-800 mt-0.5">
                  {isSwapped
                    ? "✅ SAU KHI HOÁN ĐỔI: T* ĐÃ ĐƯỢC BIẾN ĐỔI THÀNH T"
                    : "⏳ BAN ĐẦU: CÂY T (PRIM) VS CÂY TỐI ƯU GIẢ ĐỊNH T*"}
                </h4>
              </div>

              <button
                onClick={() => setIsSwapped(!isSwapped)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 self-start sm:self-auto shadow-sm ${
                  isSwapped
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-purple-600 text-white shadow-sm"
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{isSwapped ? "Xem Trạng Thái Ban Đầu" : "Thực Hiện Hoán Đổi Cạnh (Swap e* ➔ e₁) ➔"}</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-sans leading-relaxed shadow-sm">
              <p className="text-slate-700">
                • <strong>Tình huống:</strong> Cạnh $e_1 = (0, 1)$ được Prim chọn ở vòng lặp 1. Nhưng trong cây tối ưu giả định $T^*$, đường đi từ 0 đến 1 lại đi vòng qua <code>0-2-1</code> với cạnh $e^* = (0, 2)$.
              </p>
              <p className={isSwapped ? "text-emerald-950 font-bold" : "text-amber-950 font-semibold"}>
                {isSwapped
                  ? "🎉 Khi thay thế cạnh e* = (0, 2) bằng cạnh e₁ = (0, 1), ta thu được cây T mới mà tổng trọng số không hề tăng lên! Điều này chứng minh thuật toán Prim luôn tìm ra MST."
                  : "💡 Bấm nút hoán đổi ở trên để chứng kiến phép thay thế cạnh (Exchange) loại bỏ e* và nạp e₁ vào cây."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Flashcards */}
      {activeTab === "flashcards" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-600 font-semibold">Thẻ {currentIdx + 1} / {cards.length}</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
                disabled={currentIdx === 0}
                className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 disabled:opacity-30 text-slate-700 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIdx(Math.min(cards.length - 1, currentIdx + 1))}
                disabled={currentIdx === cards.length - 1}
                className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 disabled:opacity-30 text-slate-700 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              onClick={() => toggleFlip(curCard.id)}
              className={`w-full max-w-xl min-h-[200px] p-6 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between select-none ${
                isCurFlipped
                  ? "bg-emerald-50/90 border-emerald-300 ring-2 ring-emerald-400/30 text-emerald-950"
                  : "bg-white border-slate-200 hover:border-teal-400 text-slate-800"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-teal-100 border border-teal-300 text-teal-950 font-bold">
                  {curCard.tag}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <RotateCw className="w-3 h-3 text-slate-400" />
                  {isCurFlipped ? "Mặt sau (Đáp án)" : "Bấm để lật thẻ"}
                </span>
              </div>

              <div className="py-3">
                {isCurFlipped ? (
                  <p className="text-sm sm:text-base font-sans font-medium text-emerald-950 whitespace-pre-line leading-relaxed">
                    {curCard.back}
                  </p>
                ) : (
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-semibold">CÂU HỎI TRỌNG TÂM:</span>
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
      )}
    </div>
  );
}
