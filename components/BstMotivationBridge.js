"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Plus,
  Zap,
  Split,
  Trees,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Scale,
  Compass,
  Cpu,
} from "lucide-react";

export default function BstMotivationBridge() {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 text-slate-800 rounded-3xl p-6 md:p-8 my-6 font-sans shadow-sm border border-emerald-200/80 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-7">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          CẦU NỐI TƯ DUY • THE MOTIVATION BEHIND BST
        </div>
        <h3 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent tracking-tight">
          Tại Sao Chúng Ta Cần Cây Nhị Phân Tìm Kiếm (BST)?
        </h3>
        <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
          Không có cấu trúc mảng nào thắng tuyệt đối trên toàn bộ 8 thao tác. BST ra đời như một sự kết hợp hoàn hảo giữa{" "}
          <strong className="text-emerald-700">Tốc độ tìm kiếm kiểu Sorted Array</strong> và{" "}
          <strong className="text-teal-700">Tính linh hoạt khi Chèn/Xóa kiểu Linked Structure</strong>.
        </p>
      </div>

      {/* 3-Column Bridge Infographic */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center relative z-10 my-6">
        {/* Column 1: Sorted Array */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-emerald-100 p-5 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider font-mono">
                [ CẤU TRÚC 1 ]
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold">
                Tuyến tính (Linear)
              </span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mb-2">Sorted Array</h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Ưu điểm:</strong> Tìm kiếm, lấy Min/Max, lấy Median cực nhanh qua Binary Search{" "}
                  <strong className="font-mono text-emerald-700">O(log n) / O(1)</strong>.
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Nhược điểm:</strong> Chèn (Insert) và Xóa (Remove) rất chậm{" "}
                  <strong className="font-mono text-rose-700">O(n)</strong> do phải dời mảng (shifting).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Plus Operator */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
          <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-extrabold text-lg shadow-sm">
            +
          </div>
        </div>

        {/* Column 2: Linked Structure */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-teal-100 p-4 flex flex-col justify-between hover:border-teal-300 hover:shadow-md transition-all text-center shadow-sm">
          <div>
            <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-wider font-mono">
              [ CƠ CHẾ CON TRỎ ]
            </span>
            <h4 className="text-sm font-extrabold text-slate-900 mt-1 mb-2">Linked Nodes</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Các nút liên kết động qua tham chiếu con trỏ (<code className="font-mono text-teal-700 font-bold">left/right</code>).
            </p>
            <div className="mt-2.5 p-2 rounded-lg bg-teal-50 border border-teal-200 text-[11px] text-teal-900 font-semibold">
              Chèn / Xóa chỉ cần đổi con trỏ, không dời mảng!
            </div>
          </div>
        </div>

        {/* Equal Arrow */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-extrabold text-base shadow-md">
            &rarr;
          </div>
        </div>

        {/* Column 3: Binary Search Tree (BST) */}
        <div className="lg:col-span-3 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 rounded-2xl border-2 border-emerald-500 p-5 shadow-lg relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 px-3 py-1 bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase rounded-bl-xl tracking-wider shadow-sm">
            GIẢI PHÁP TỐI ƯU
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Trees className="w-6 h-6 text-emerald-200" />
            <h4 className="text-lg font-black text-white">Binary Search Tree</h4>
          </div>
          <p className="text-xs text-emerald-100 mb-3 leading-relaxed">
            Cấu trúc phân cấp 2 nhánh: <strong className="text-amber-200 font-mono">Left &lt; Root &lt; Right</strong>.
          </p>
          <div className="space-y-1.5 text-xs text-slate-100">
            <div className="flex items-center justify-between bg-emerald-900/60 p-2 rounded-lg border border-emerald-400/30 font-mono">
              <span>Search:</span>
              <span className="font-bold text-amber-300">O(log n)</span>
            </div>
            <div className="flex items-center justify-between bg-emerald-900/60 p-2 rounded-lg border border-emerald-400/30 font-mono">
              <span>Insert:</span>
              <span className="font-bold text-amber-300">O(log n) (Không shift!)</span>
            </div>
            <div className="flex items-center justify-between bg-emerald-900/60 p-2 rounded-lg border border-emerald-400/30 font-mono">
              <span>Remove:</span>
              <span className="font-bold text-amber-300">O(log n)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-xs text-slate-700 leading-relaxed text-center mt-4">
        💡 <strong className="text-slate-900 font-bold">Quy luật cốt lõi cần nhớ:</strong> Khi hệ thống cần thực hiện cả{" "}
        <span className="text-emerald-800 font-bold">Tìm kiếm thường xuyên</span> lẫn{" "}
        <span className="text-amber-800 font-bold">Chèn/Xóa liên tục</span> (như bài toán Census), Cây nhị phân tìm kiếm (BST) là cấu trúc vượt trội giúp dung hòa cả 2 bài toán với chi phí trung bình lý tưởng{" "}
        <strong className="text-emerald-800 font-mono font-bold">O(log n)</strong>.
      </div>
    </div>
  );
}
