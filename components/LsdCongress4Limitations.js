"use client";
import React from "react";
import { AlertTriangle, TrendingDown, ShieldAlert } from "lucide-react";

export default function LsdCongress4Limitations() {
  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <AlertTriangle size={14} /> Nhìn thẳng vào sự thật
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hạn Chế & Khuyết Điểm Của Đại Hội IV (12-1976)
        </h3>
      </div>

      {/* Main Limitations Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 dark:border-rose-700 shadow-md">
        <div className="space-y-4 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            ⚠ **Tư tưởng chủ quan, nóng vội**: Dự kiến thời gian hoàn thành đưa nền kinh tế từ sản xuất nhỏ lên sản xuất lớn XHCN trong khoảng 20 năm là quá ngắn so với thực tế.
          </div>
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            ⚠ **Chỉ tiêu vượt quá khả năng thực tế**: Ưu tiên phát triển công nghiệp nặng quy mô lớn; đề ra các chỉ tiêu nông nghiệp, công nghiệp quá cao không thực hiện được.
          </div>
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            ⚠ **Chưa nhận thức hết khuyết tật**: Chưa tổng kết đầy đủ kinh nghiệm 21 năm xây dựng CNXH ở miền Bắc và chưa thấy rõ những hạn chế của mô hình kinh tế tập trung bao cấp.
          </div>
        </div>
      </div>
    </div>
  );
}
