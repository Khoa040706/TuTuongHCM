"use client";

import React, { useState } from "react";
import { Award, RotateCcw } from "lucide-react";

export default function AvlTop10ExamFlashcardsHub() {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const flashcards = [
    {
      id: 1,
      tag: "Định Nghĩa Height",
      q: "1. Chiều cao (height) của một đỉnh và của cây rỗng được quy ước tính như thế nào?",
      a: "Chiều cao tính bằng SỐ CẠNH (edges) trên đường đi dài nhất đến lá sâu nhất. Cây rỗng (null) quy ước có height = -1. Đỉnh lá có height = 0.",
    },
    {
      id: 2,
      tag: "AVL Invariant",
      q: "2. Điều kiện Invariant của cây AVL là gì và áp dụng cho những đỉnh nào?",
      a: "|x.left.height - x.right.height| ≤ 1. Bắt buộc phải thỏa mãn tại MỌI ĐỈNH trong cây, không chỉ riêng đỉnh gốc.",
    },
    {
      id: 3,
      tag: "Balance Factor",
      q: "3. Công thức tính Balance Factor bf(x) và khi nào một đỉnh bị xem là mất cân bằng?",
      a: "bf(x) = x.left.height - x.right.height. Một đỉnh bị mất cân bằng và cần rebalance khi bf(x) = +2 hoặc bf(x) = -2.",
    },
    {
      id: 4,
      tag: "4 Case Rebalance",
      q: "4. Nêu tên 4 trường hợp mất cân bằng và quy tắc số lần xoay tương ứng?",
      a: "• Lệch cùng phía (1 rotation): LL (+2, +1) → rightRotate; RR (-2, -1) → leftRotate.\n• Lệch khác phía (2 rotations): LR (+2, -1) → leftRotate(con) rồi rightRotate(cha); RL (-2, +1) → rightRotate(con) rồi leftRotate(cha).",
    },
    {
      id: 5,
      tag: "Điều Kiện Rotation",
      q: "5. Điều kiện tiên quyết để rotateLeft và rotateRight có thể thực hiện được là gì?",
      a: "rotateLeft(T) yêu cầu T.right != null (phải có con phải). rotateRight(T) yêu cầu T.left != null (phải có con trái). Mỗi phép quay tốn O(1).",
    },
    {
      id: 6,
      tag: "BST Property",
      q: "6. Phép quay cây (Tree Rotation) có làm thay đổi thứ tự các khóa (keys) hay không?",
      a: "KHÔNG. Phép xoay cây bảo toàn 100% tính chất BST Property: A ≤ P ≤ B ≤ Q ≤ C luôn được giữ nguyên trước và sau khi xoay.",
    },
    {
      id: 7,
      tag: "Insertion Trigger",
      q: "7. Trong 1 lần thao tác INSERT vào cây AVL, ta có thể phải rebalance tối đa bao nhiêu lần?",
      a: "TỐI ĐA 1 LẦN. Vì sau khi xoay xong tại đỉnh mất cân bằng đầu tiên, chiều cao cây con phục hồi về như cũ, không làm mất cân bằng các tổ tiên phía trên.",
    },
    {
      id: 8,
      tag: "Deletion Trigger",
      q: "8. Trong 1 lần thao tác DELETION khỏi cây AVL, ta có thể phải rebalance tối đa bao nhiêu lần?",
      a: "LÊN TỚI O(log n) LẦN (nhiều lần). Vì việc xoay làm giảm chiều cao cây con, gây hiệu ứng dây chuyền (cascade) lan truyền lên các tổ tiên phía trên đến tận Root.",
    },
    {
      id: 9,
      tag: "Chặn Trên Chiều Cao",
      q: "9. Chiều cao của cây Height-balanced có n đỉnh bị chặn trên bởi công thức nào?",
      a: "h < 2·log₂(n) (chính xác hơn h ≤ 1.44·log₂(n)) ⟹ Chiều cao luôn là O(log n) trong trường hợp xấu nhất (Worst-case guarantee).",
    },
    {
      id: 10,
      tag: "Độ Phức Tạp Inorder",
      q: "10. Thao tác nào trên cây AVL không chạy trong O(h) mà chạy trong O(n)?",
      a: "INORDER TRAVERSAL. Vì thao tác này bắt buộc phải duyệt qua toàn bộ n đỉnh (mỗi đỉnh bị chạm đúng 3 lần) ⟹ O(3n) = O(n).",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trung Tâm Ôn Luyện Trọng Tâm (Mục 9 - Tổng Hợp Nhanh)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Top 10 Điểm Cốt Lõi Dễ Ra Thi Nhất (Flashcards)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Nhấp vào từng thẻ bài để lật xem đáp án chuẩn slide giáo trình môn DSA.
          </p>
        </div>

        <button
          onClick={() => setFlippedCardId(null)}
          className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Úp tất cả thẻ
        </button>
      </div>

      {/* Grid of 10 Flashcards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {flashcards.map((card) => {
          const isFlipped = flippedCardId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setFlippedCardId(isFlipped ? null : card.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 min-h-[190px] flex flex-col justify-between select-none shadow-sm ${
                isFlipped
                  ? "bg-emerald-50/90 border-emerald-400 ring-2 ring-emerald-500/20"
                  : "bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono">
                    {card.tag}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono font-semibold">
                    {isFlipped ? "Đáp án ✅" : "Lật 🔄"}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-800">
                  {isFlipped ? (
                    <p className="text-emerald-950 font-mono text-[11px] leading-relaxed whitespace-pre-line font-bold">
                      {card.a}
                    </p>
                  ) : (
                    <p className="leading-relaxed font-sans text-slate-700">{card.q}</p>
                  )}
                </div>
              </div>

              <div className="mt-2 text-[9px] text-slate-400 italic">
                {isFlipped ? "* Bấm để xem lại câu hỏi" : "* Bấm để xem đáp án"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
