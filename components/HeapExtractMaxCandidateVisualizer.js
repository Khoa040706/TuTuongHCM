"use client";

import React, { useState } from "react";
import { Scissors, CheckCircle2, XCircle, AlertTriangle, Layers } from "lucide-react";

export default function HeapExtractMaxCandidateVisualizer() {
  const [selectedCandidate, setSelectedCandidate] = useState("lastLeaf"); // "lastLeaf" | "middleNode"

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <Scissors className="w-3.5 h-3.5 text-rose-700" />
            <span>Ý Tưởng ExtractMax (Mục 7.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-slate-900 bg-clip-text text-transparent">
            Tại Sao Chọn Lá Cuối Cùng A[heapsize] Thay Thế Root?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lấy phần tử lớn nhất ở Root sẽ làm cây bị đứt gãy (disconnected). Tìm kiếm <strong>ứng viên duy nhất</strong> giúp bảo toàn cấu trúc cây hoàn chỉnh.
          </p>
        </div>

        {/* Candidate Selector */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedCandidate("lastLeaf")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedCandidate === "lastLeaf"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Lá cuối A[heapsize] (Hợp lệ)
          </button>
          <button
            onClick={() => setSelectedCandidate("middleNode")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedCandidate === "middleNode"
                ? "bg-rose-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Nút con ở giữa
          </button>
        </div>
      </div>

      {/* Main Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Visual Dilemma Box (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-white border border-rose-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Vấn Đề Đứt Gãy Khi Rút Root</span>
            <span className="text-amber-800 font-bold">Disconnect Dilemma</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-sans text-slate-700">
            <div className="flex items-center gap-2 text-rose-950 font-mono font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>1. Nhấc Max Root (90) ra khỏi cây:</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Nếu chỉ đơn giản lấy Root ra, cây sẽ lập tức bị <strong>đứt thành 2 cây con độc lập</strong> (cây con gốc 19 và cây con gốc 36) mà không còn một cấu trúc cây duy nhất.
            </p>
          </div>

          {selectedCandidate === "lastLeaf" ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 font-sans shadow-sm">
              <div className="flex items-center gap-2 font-bold font-mono text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ỨNG VIÊN TUYỆT VỜI NHẤT: LÁ CUỐI CÙNG A[9] = 7
              </div>
              <p className="leading-relaxed">
                Lá cuối cùng là phần tử <strong>duy nhất có thể loại bỏ khỏi mảng</strong> mà không tạo ra bất kỳ lỗ hổng nào và không phá vỡ quy tắc Complete Binary Tree.
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-950 space-y-1 font-sans shadow-sm">
              <div className="flex items-center gap-2 font-bold font-mono text-rose-950">
                <XCircle className="w-4 h-4 text-rose-600" />
                VI PHẠM NẾU BỐC NÚT CON Ở GIỮA:
              </div>
              <p className="leading-relaxed">
                Nếu bốc nút con ở giữa (ví dụ node 2 hoặc node 5), vị trí đó sẽ bị trống &rarr; Tạo lỗ hổng ở giữa cây &rarr; Phá vỡ tính chất Complete Tree!
              </p>
            </div>
          )}
        </div>

        {/* 2-Phase Strategy Card (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-white border border-rose-100 p-5 space-y-4 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-950 font-mono flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-rose-700" />
            Quy Trình 2 Pha Chuẩn Của ExtractMax():
          </span>

          <div className="space-y-3">
            {/* Phase 1 */}
            <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 flex items-start gap-3 shadow-sm">
              <div className="w-6 h-6 rounded-lg bg-rose-600 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                1
              </div>
              <div className="text-xs font-sans text-slate-700">
                <strong className="text-rose-950 block font-mono">Bảo Toàn Complete Tree (O(1)):</strong>
                Lưu <code>maxV = A[1]</code>, đưa lá cuối cùng lên đỉnh <code>A[1] = A[heapsize]</code> và giảm <code>heapsize--</code>.
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 shadow-sm">
              <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                2
              </div>
              <div className="text-xs font-sans text-slate-700">
                <strong className="text-amber-950 block font-mono">Phục Hồi Max-Heap Property (O(log N)):</strong>
                Giá trị lá vừa đưa lên root có thể rất nhỏ &rarr; gọi <code>ShiftDown(1)</code> để chìm dần xuống vị trí hợp lệ.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
