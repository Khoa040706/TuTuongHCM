"use client";

import React, { useState } from "react";
import { GitCommit, Play, RotateCcw, Sparkles } from "lucide-react";

export default function AvlCascadeDeletionSimulator() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Trạng thái trước khi xóa đỉnh 7",
      desc: "Cây AVL đang cân bằng hoàn hảo. Ta chuẩn bị thực hiện xóa đỉnh lá 7.",
      treeHighlight: "Cây ban đầu cân bằng",
      actionDesc: "Chuẩn bị xóa nút lá 7...",
    },
    {
      title: "Bước 1: Xóa nút lá 7",
      desc: "Gỡ bỏ nút 7 khỏi con phải của đỉnh 6. Chiều cao nhánh phải của 6 giảm từ 0 xuống -1 (null).",
      treeHighlight: "Đã gỡ bỏ 7",
      actionDesc: "6.right = null; chiều cao nhánh phải của 6 giảm.",
    },
    {
      title: "Bước 2: Rebalance Lần 1 (Tại đỉnh 6)",
      desc: "Đỉnh 6 bị mất cân bằng cục bộ: nhánh trái cao 1 (nút 4 và 5), nhánh phải cao -1 → BF(6) = +2. Thực hiện phép quay tại 6 để cân bằng lại.",
      treeHighlight: "Đã xoay tại 6 (Lần 1)",
      actionDesc: "Thực hiện phép quay tại đỉnh 6 → Đỉnh 6 cân bằng lại.",
    },
    {
      title: "Bước 3: Chiều cao cây con 6 bị tụt → Đỉnh 15 mất cân bằng!",
      desc: "Sau khi xoay đỉnh 6, chiều cao của cả cây con gốc 6 bị giảm đi 1 nấc (từ 2 xuống 1). Lần ngược lên đỉnh Gốc 15: nhánh trái cao 1, nhánh phải (nút 23 và 71) cao 3 → BF(15) = 1 - 3 = -2 (MẤT CÂN BẰNG TIẾP TỤC!).",
      treeHighlight: "Phát hiện mất cân bằng tại Root 15",
      actionDesc: "Mất cân bằng lan truyền lên Root 15 (BF = -2)!",
    },
    {
      title: "Bước 4: Rebalance Lần 2 (Tại Root 15) & Hoàn Tất",
      desc: "Thực hiện phép quay thứ hai tại Root 15. Toàn bộ cây trở lại trạng thái cân bằng. Quá trình xoay liên hoàn (Cascade Rebalance) kết thúc.",
      treeHighlight: "Đã xoay tại Root 15 (Lần 2) → Hoàn tất!",
      actionDesc: "Thực hiện phép quay tại Root 15 → Toàn bộ cây đạt chuẩn AVL.",
    },
  ];

  const current = steps[step];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <GitCommit className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mô Phỏng Xoay Liên Hoàn (Cascade Rebalance - Mục 6.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Mô Phỏng: Xóa Đỉnh 7 Gây Ra 2 Lần Rebalance Liên Tiếp
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Minh họa trích xuất từ slide 6.2: Vì sao thao tác Deletion có thể kích hoạt chuỗi xoay lan truyền lên tới Gốc.
          </p>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setStep(0)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setStep((prev) => (prev < 4 ? prev + 1 : 0))}
            className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            {step < 4 ? `Bước tiếp theo (${step + 1}/4)` : "Xem lại từ đầu"}
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Simulation Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Simulation Graphic Representation (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col items-center justify-between min-h-[300px] space-y-4">
          <div className="w-full flex items-center justify-between border-b border-slate-100 pb-2.5">
            <span className="text-xs font-mono font-bold text-slate-800">
              Trạng thái: <span className="text-rose-700">{current.treeHighlight}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 font-mono border border-slate-200">
              Bước {step} / 4
            </span>
          </div>

          {/* Graphical Pipeline Steps */}
          <div className="w-full space-y-2.5">
            <div
              className={`p-3.5 rounded-xl border transition-all ${
                step >= 1
                  ? "bg-rose-50 border-rose-200 text-rose-950"
                  : "bg-slate-50 border-slate-200 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span>1. Xóa đỉnh 7 tại lá</span>
                <span>{step >= 1 ? "Đã Xóa ✅" : "Chờ..."}</span>
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl border transition-all ${
                step >= 2
                  ? "bg-amber-50 border-amber-200 text-amber-950"
                  : "bg-slate-50 border-slate-200 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span>2. Rebalance Lần 1 (Tại đỉnh 6 - Tầng 1)</span>
                <span>{step >= 2 ? "Đã Xoay Lần 1 🔁" : "Chưa..."}</span>
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl border transition-all ${
                step >= 4
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                  : step === 3
                  ? "bg-rose-100 border-rose-300 text-rose-950 animate-pulse font-bold"
                  : "bg-slate-50 border-slate-200 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span>3. Rebalance Lần 2 (Tại Đỉnh Gốc 15 - Tầng 2)</span>
                <span>{step >= 4 ? "Đã Xoay Lần 2 🔁" : step === 3 ? "Phát hiện mất cân bằng! 🚨" : "Chưa..."}</span>
              </div>
            </div>
          </div>

          <div className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono text-center font-bold">
            {current.actionDesc}
          </div>
        </div>

        {/* Step Explanation Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                {current.title}
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                Step 0{step}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-sans">{current.desc}</p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-amber-900 uppercase font-mono">
                Nguyên Nhân Chuỗi Xoay (Cascade Effect):
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Khác với Insertion (xoay xong phục hồi chiều cao &rarr; dừng), Deletion sau khi xoay làm <strong>giảm chiều cao của cây con</strong> &rArr; chênh lệch chiều cao lan truyền lên tầng trên và kích hoạt thêm phép xoay ở cha/root!
              </p>
            </div>
          </div>

          {/* Reference Footnote */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Điểm Thi Trọng Tâm (Slide 6):
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              Số lần rebalance khi Deletion: <strong>Tối đa lên tới O(log n) lần</strong>, nhưng tổng thời gian vẫn là <strong>O(log n)</strong> vì mỗi phép xoay chỉ tốn O(1)!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
