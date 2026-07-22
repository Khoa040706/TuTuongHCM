"use client";
import React from "react";
import { ShieldCheck, Globe, CheckCircle2, AlertTriangle } from "lucide-react";

export default function LsdTW6AndTW8Conferences() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <ShieldCheck size={14} /> Định hướng tư tưởng 1989 - 1990
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hội Nghị TW 6 (3-1989) & Hội Nghị TW 8 (3-1990)
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          Khẳng định 6 nguyên tắc Đổi mới và chủ trương đối ngoại "Thêm bạn, bớt thù"
        </p>
      </div>

      {/* Grid 2 Conferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conference 1: TW 6 (3-1989) */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <ShieldCheck size={22} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Hội Nghị TW 6 (tháng 3-1989)
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ **Khái niệm mới**: Lần đầu tiên dùng khái niệm **"Hệ thống chính trị"** (thay cho "chuyên chính vô sản").
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ **6 Nguyên tắc Đổi mới**: Giữ vững mục tiêu CNXH; lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng; sự lãnh đạo của Đảng là điều kiện quyết định thắng lợi.
            </p>
          </div>
        </div>

        {/* Conference 2: TW 8 (3-1990) */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-4">
            <Globe size={22} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Hội Nghị TW 8 (tháng 3-1990)
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              ✔ **Cảnh giác chiến lược**: Phân tích sự sụp đổ của Liên Xô & Đông Âu; kiên quyết chống âm mưu **"Diễn biến hòa bình"**.
            </p>
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              ✔ **Đối ngoại đa phương**: Đề ra đường lối đối ngoại **"Thêm bạn, bớt thù"**; tháng 9-1989 rút toàn bộ quân tình nguyện Việt Nam ở Campuchia về nước.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
