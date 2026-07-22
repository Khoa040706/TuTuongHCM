"use client";
import React from "react";
import { Zap, AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

export default function LsdPriceWageMoney1985() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Zap size={14} /> Tháng 6-1985 (Hội nghị Trung ương 8)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đột Phá Thứ Hai: Hội Nghị TW 8 Về Giá - Lương - Tiền
        </h3>
        <p className="text-sm font-serif text-amber-900 dark:text-amber-300 font-bold mt-2 italic">
          Chủ trương dũng cảm dứt khoát xóa bỏ cơ chế tập trung bao cấp
        </p>
      </div>

      {/* Breakthrough Content & Consequences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Chủ trương dũng cảm */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Zap size={22} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Quyết Định Đột Phá Của TW 8 (6-1985)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Dứt khoát **xóa bỏ cơ chế tập trung bao cấp, chuyển sang hạch toán kinh tế XHCN**. Xóa bỏ bù giá vào lương, đưa giá nông sản về sát giá thị trường thực tế.
          </p>
        </div>

        {/* Card Hệ quả Lạm phát phi mã */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-500 shadow-md">
          <div className="flex items-center gap-2 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-3">
            <AlertTriangle size={22} className="text-rose-600" />
            <h4 className="font-bold text-base font-serif text-rose-700 dark:text-rose-400">
              Hệ Quả Cuộc Tổng Điều Chỉnh Cuối 1985
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Do chuẩn bị thiếu đồng bộ và vội vàng, cuộc đổi tiền và điều chỉnh Giá - Lương - Tiền năm 1985 làm bùng phát **lạm phát phi mã** (tốc độ tăng giá lên tới hàng trăm %), gây rối loạn thị trường.
          </p>
        </div>
      </div>
    </div>
  );
}
