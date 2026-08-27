"use client";

import React from "react";
import { Swords, PlusCircle, MinusCircle, Sparkles } from "lucide-react";

export default function AvlInsertVsDeleteArena() {
  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Swords className="w-3.5 h-3.5 text-emerald-700" />
            <span>Đối Đầu Trọng Tâm Thi Cử (Mục 6)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Đối Đầu: Insertion (Tối Đa 1 Lần) vs Deletion (Tối Đa log n Lần)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            So sánh sự khác biệt bản chất nhất giữa thao tác Chèn và Xóa trong Cây AVL.
          </p>
        </div>

        {/* Big Contrast Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Insert: 1 lần • Delete: &le; log n lần</span>
        </div>
      </div>

      {/* Main Comparison Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Insertion Column */}
        <div className="p-6 rounded-2xl bg-white border border-emerald-300 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-xl text-xs font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1.5 font-mono">
              <PlusCircle className="w-3.5 h-3.5 text-emerald-700" />
              Insertion vào AVL
            </span>
            <span className="font-mono text-sm font-extrabold text-emerald-800">Tối đa 1 Lần</span>
          </div>

          <div className="space-y-2 text-xs text-slate-700 leading-relaxed font-sans">
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 font-mono text-slate-800">
              <strong className="text-emerald-950">Cơ chế:</strong> Sau khi xoay rebalance tại đỉnh mất cân bằng đầu tiên, <strong>chiều cao của cây con đó được phục hồi về như cũ</strong> (bằng chiều cao trước khi chèn).
            </div>
            <p className="text-slate-600">
              &rArr; Do chiều cao không đổi so với trước biến động, tất cả các đỉnh tổ tiên phía trên <strong>không hề bị ảnh hưởng</strong> &rarr; Quá trình kiểm tra dừng lại ngay lập tức!
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-900 font-bold">
            Số lần xoay: 1 lần (LL, RR) hoặc 2 lần (LR, RL) nhưng chỉ tại <strong>1 đỉnh duy nhất</strong>!
          </div>
        </div>

        {/* Deletion Column */}
        <div className="p-6 rounded-2xl bg-white border border-rose-300 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-xl text-xs font-bold uppercase bg-rose-100 text-rose-900 border border-rose-200 flex items-center gap-1.5 font-mono">
              <MinusCircle className="w-3.5 h-3.5 text-rose-700" />
              Deletion khỏi AVL
            </span>
            <span className="font-mono text-sm font-extrabold text-rose-800">Lên tới O(log n) Lần</span>
          </div>

          <div className="space-y-2 text-xs text-slate-700 leading-relaxed font-sans">
            <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 font-mono text-slate-800">
              <strong className="text-rose-950">Cơ chế:</strong> Sau khi xoay rebalance tại một đỉnh, <strong>chiều cao của cây con đó bị giảm đi 1</strong>.
            </div>
            <p className="text-slate-600">
              &rArr; Việc giảm chiều cao có thể làm đỉnh cha phía trên bị lệch tiếp &rArr; Kích hoạt chuỗi xoay liên hoàn (Cascade Rebalancing) lan truyền dọc lên đến tận Root!
            </p>
          </div>

          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-900 font-bold">
            Số lần xoay: Có thể phải xoay ở <strong>nhiều tầng tổ tiên</strong>, tối đa bằng chiều cao h = O(log n).
          </div>
        </div>
      </div>

      {/* Summary Exam Flashcard */}
      <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-950 font-bold">
          <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Tổng kết độ phức tạp: Cả Insertion và Deletion đều chạy trong O(log n).</span>
        </div>
        <div className="font-mono text-slate-600 text-[11px] font-semibold">
          (Vì mỗi lần xoay tốn O(1) &times; tối đa O(log n) đỉnh = O(log n))
        </div>
      </div>
    </div>
  );
}
