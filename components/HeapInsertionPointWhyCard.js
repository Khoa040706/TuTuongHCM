"use client";

import React, { useState } from "react";
import { PlusCircle, CheckCircle2, XCircle, Layers } from "lucide-react";

export default function HeapInsertionPointWhyCard() {
  const [selectedSlot, setSelectedSlot] = useState("valid"); // "valid" | "gap"

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <PlusCircle className="w-3.5 h-3.5 text-indigo-700" />
            <span>Ý Tưởng Thao Tác Chèn (Mục 6.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            Tại Sao Luôn Chèn Vào Vị Trí A[heapsize + 1]?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã câu hỏi trọng tâm trong slide: Bảo toàn cấu trúc <strong>Complete Binary Tree</strong> trước khi phục hồi tính chất Heap.
          </p>
        </div>

        {/* Slot Tester Selector */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedSlot("valid")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedSlot === "valid"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Vị trí A[10] (Cuối mảng)
          </button>
          <button
            onClick={() => setSelectedSlot("gap")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedSlot === "gap"
                ? "bg-rose-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Chèn tạo lỗ hổng
          </button>
        </div>
      </div>

      {/* Main Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Visual Slot Demonstration (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mô Phỏng Cây Sau Khi Chèn Nút Mới</span>
            <span className={selectedSlot === "valid" ? "text-emerald-800 font-bold" : "text-rose-800 font-bold"}>
              {selectedSlot === "valid" ? "✅ Giữ tính Complete" : "❌ Vi phạm Complete Tree"}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Mảng ban đầu (9 items):</span>
              <span className="text-amber-950 font-bold">[90, 19, 36, 17, 3, 25, 1, 2, 7]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Vị trí chèn phần tử mới:</span>
              <strong className={selectedSlot === "valid" ? "text-emerald-950 font-bold" : "text-rose-950 font-bold"}>
                {selectedSlot === "valid" ? "A[10] = right child của node 5 (giá trị 3)" : "A[12] (Bỏ trống A[10], A[11])"}
              </strong>
            </div>
          </div>

          {selectedSlot === "valid" ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 font-sans shadow-sm">
              <div className="flex items-center gap-2 font-bold font-mono text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                VỊ TRÍ DUY NHẤT HỢP LỆ:
              </div>
              <p className="leading-relaxed">
                Chèn ngay sau phần tử cuối cùng (<code>A[heapsize+1]</code>) giúp cây <strong>không tạo lỗ hổng</strong> và bảo đảm <strong>lấp đầy liên tục từ trái sang phải</strong>.
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-950 space-y-1 font-sans shadow-sm">
              <div className="flex items-center gap-2 font-bold font-mono text-rose-950">
                <XCircle className="w-4 h-4 text-rose-600" />
                CẢNH BÁO VI PHẠM CẤU TRÚC:
              </div>
              <p className="leading-relaxed">
                Nếu chèn ở bất kỳ vị trí nào khác, cây sẽ xuất hiện khoảng trống hoặc khuyết nhánh trái &rarr; <strong>Không còn là Complete Binary Tree</strong>!
              </p>
            </div>
          )}
        </div>

        {/* 2-Phase Concept Pipeline (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-white border border-indigo-100 p-5 space-y-4 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-950 font-mono flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-700" />
            Chiến Lược 2 Bước Của Phép Chèn:
          </span>

          <div className="space-y-3">
            {/* Step 1 */}
            <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200 flex items-start gap-3 shadow-sm">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                1
              </div>
              <div className="text-xs font-sans text-slate-700">
                <strong className="text-indigo-950 block font-mono">Bảo Toàn Complete Binary Tree (O(1)):</strong>
                Tăng <code>heapsize++</code> và gán <code>A[heapsize] = v</code> vào cuối mảng.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 shadow-sm">
              <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                2
              </div>
              <div className="text-xs font-sans text-slate-700">
                <strong className="text-amber-950 block font-mono">Phục Hồi Max-Heap Property (O(log N)):</strong>
                Giá trị mới có thể lớn hơn cha của nó &rarr; gọi <code>ShiftUp(heapsize)</code> để leo dần lên vị trí hợp lệ.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
