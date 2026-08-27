"use client";

import React, { useState } from "react";
import { HelpCircle, Sparkles } from "lucide-react";

export default function AvlOrderStatisticsBridgeCard() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="my-8 rounded-3xl border border-amber-300 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Giải Mã Ô Dấu Hỏi Trong Slide (Mục 8)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-amber-950 bg-clip-text text-transparent">
            Tại Sao NumYounger(age) Trong bBST Lại Mang Dấu &quot;?&quot;
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá lý do học thuật đằng sau và cầu nối sang cấu trúc <strong>Order-Statistics Tree</strong>.
          </p>
        </div>

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm self-start md:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {showSolution ? "Thu gọn phân tích" : "Xem lời giải thích chi tiết"}
        </button>
      </div>

      {/* Grid: The Problem vs The Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: The Problem with Plain AVL */}
        <div className="p-5 rounded-2xl bg-white border border-rose-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-rose-900 uppercase font-mono flex items-center gap-1.5">
            1. Vấn Đề Với Cây AVL Cơ Bản (Chỉ Lưu Height):
          </span>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            Cây AVL chuẩn chỉ lưu thuộc tính <code>x.height</code> (số cạnh đến lá sâu nhất). Thuộc tính này chỉ cho biết <strong>độ sâu hình học</strong>, nhưng <strong>KHÔNG cho biết có bao nhiêu phần tử nằm trong cây con trái</strong>!
          </p>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono font-semibold">
            Ví dụ: Một cây con có height = 3 có thể chứa từ 7 đỉnh đến 15 đỉnh! Không thể đếm nhanh số phần tử nhỏ hơn trong O(log n).
          </div>
        </div>

        {/* Right: The Solution (Order-Statistics Tree) */}
        <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-amber-900 uppercase font-mono flex items-center gap-1.5">
            2. Giải Pháp: Augment Thêm Thuộc Tính x.size:
          </span>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            Để tính <code>NumYounger(age)</code> và <code>Select(k)</code> trong <strong>O(log n)</strong>, ta cần Augment thêm thuộc tính <code>x.size = x.left.size + x.right.size + 1</code> vào mỗi nút.
          </p>
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-950 font-mono font-bold">
            Cấu trúc này được gọi là <strong>Order-Statistics Tree (OST)</strong> — kiến thức mở rộng sẽ học ở bài nâng cao!
          </div>
        </div>
      </div>
    </div>
  );
}
