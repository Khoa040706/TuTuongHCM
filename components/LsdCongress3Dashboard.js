"use client";
import React from "react";
import { Award, Star, Compass, CheckCircle2, Shield, Landmark } from "lucide-react";

export default function LsdCongress3Dashboard() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tháng 9-1960 tại Thủ đô Hà Nội
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đại Hội Đại Biểu Toàn Quốc Lần Thứ III Của Đảng
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Đại hội xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà"
        </p>
      </div>

      {/* Leadership Election Box */}
      <div className="p-4 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-xs md:text-sm font-medium text-amber-900 dark:text-amber-200 mb-8 flex flex-col md:flex-row items-center justify-around gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-600 text-white shrink-0">
            <Landmark size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Chủ tịch Đảng:</span>
            <span>Chủ tịch **Hồ Chí Minh** tiếp tục làm Chủ tịch BCH TW</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600 text-white shrink-0">
            <Award size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Bí thư Thứ nhất:</span>
            <span>Đồng chí **Lê Duẩn** được bầu làm Bí thư Thứ nhất BCH TW</span>
          </div>
        </div>
      </div>

      {/* 2 Strategic Tasks (Split-Screen) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Task 1: Miền Bắc */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-700 shadow-md">
          <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs font-serif uppercase">
              NHIỆM VỤ MIỀN BẮC
            </span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-serif">Vị trí: VỊ TRÍ QUYẾT ĐỊNH NHẤT</span>
          </div>

          <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white mb-2">
            Cách mạng XHCN ở miền Bắc: Xây dựng căn cứ địa cả nước
          </h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Miền Bắc giữ vai trò **quyết định nhất** đối với sự phát triển của toàn bộ cách mạng Việt Nam và sự nghiệp thống nhất nước nhà.
          </p>

          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs text-emerald-900 dark:text-emerald-300 font-medium">
            ✔ Hậu phương chiến lược vững chắc chi viện cho tiền tuyến miền Nam.
          </div>
        </div>

        {/* Task 2: Miền Nam */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 dark:border-rose-700 shadow-md">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-xs font-serif uppercase">
              NHIỆM VỤ MIỀN NAM
            </span>
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 font-serif">Vị trí: VỊ TRÍ QUYẾT ĐỊNH TRỰC TIẾP</span>
          </div>

          <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white mb-2">
            Cách mạng Dân tộc Dân chủ Nhân dân ở miền Nam
          </h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Cách mạng miền Nam giữ vai trò **quyết định trực tiếp** đối với sự nghiệp giải phóng miền Nam khỏi ách thống trị của Mỹ - Diệm.
          </p>

          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-xs text-rose-900 dark:text-rose-300 font-medium">
            ⚠ Đánh đổ ách thống trị đế quốc Mỹ và tay sai, hoàn thành giải phóng dân tộc.
          </div>
        </div>
      </div>

      {/* Common Strategic Goal */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 text-center">
        <h4 className="font-bold text-base text-amber-900 dark:text-amber-300 font-serif mb-1 flex items-center justify-center gap-2">
          <Compass size={18} /> Mục Tiêu Chiến Lược Chung Cả Nước
        </h4>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
          Hai chiến lược cách mạng khác nhau nhưng cùng hướng vào mục tiêu chung: <strong className="text-red-700 dark:text-red-400 font-bold font-serif">"Giải phóng miền Nam, hòa bình, thống nhất đất nước"</strong>.
        </p>
      </div>
    </div>
  );
}
