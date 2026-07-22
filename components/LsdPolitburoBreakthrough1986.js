"use client";
import React from "react";
import { Zap, Sprout, Layers, Settings, CheckCircle2 } from "lucide-react";

export default function LsdPolitburoBreakthrough1986() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Zap size={14} /> Tháng 8-1986 (Bộ Chính trị khóa V)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đột Phá Thứ Ba: Kết Luận Bộ Chính Trị Về Đổi Mới Quan Điểm Kinh Tế
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          Bản lề lý luận quan trọng nhất dọn đường cho đường lối Đổi mới tại Đại hội VI (12-1986)
        </p>
      </div>

      {/* Bento Grid 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: 3 Economic Programs */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <Sprout size={20} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              1. 3 Chương Trình Kinh Tế Lớn
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Tập trung vốn và vật tư cho 3 chương trình mục tiêu: **Lương thực - thực phẩm**, **Hàng tiêu dùng** và **Hàng xuất khẩu**.
          </p>
        </div>

        {/* Pillar 2: Multi-Sector Economy */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Layers size={20} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              2. Nền Kinh Tế Nhiều Thành Phần
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Thừa nhận thời kỳ quá độ ở nước ta có **cơ cấu kinh tế nhiều thành phần**, không xoá bỏ ồ ạt các thành phần kinh tế phi xã hội chủ nghĩa.
          </p>
        </div>

        {/* Pillar 3: Mechanism Innovation */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-3">
            <Settings size={20} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              3. Đổi Mới Cơ Chế Quản Lý
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Bãi bỏ cơ chế quan liêu bao cấp, chuyển sang hạch toán kinh tế XHCN, phân biệt quản lý hành chính nhà nước với quản lý sản xuất kinh doanh.
          </p>
        </div>
      </div>
    </div>
  );
}
