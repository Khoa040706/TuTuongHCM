"use client";
import React from "react";
import { ShieldAlert, Sprout, Factory, Landmark, AlertTriangle } from "lucide-react";

export default function LsdTWConferencesSession7() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <ShieldAlert size={14} /> Khóa VII (1991 - 1996)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Các Hội Nghị TW & Đại Hội Giữa Nhiệm Kỳ Khóa VII
        </h3>
      </div>

      {/* Grid 4 Conference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Mid-term Conference 1-1994 (4 Risks) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-500 shadow-md col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-3">
            <AlertTriangle size={22} className="text-rose-600" />
            <h4 className="font-bold text-base font-serif text-rose-800 dark:text-rose-300">
              Hội Nghị Đột Phá Giữa Nhiệm Kỳ (1-1994): Xác Định 4 Nguy Cơ Thách Thức
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
              1. Nguy cơ **tụt hậu xa hơn về kinh tế**.
            </div>
            <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
              2. Nguy cơ **chệch hướng XHCN**.
            </div>
            <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
              3. Nguy cơ **nạn tham nhũng & quan liêu**.
            </div>
            <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
              4. Nguy cơ **"Diễn biến hòa bình"**.
            </div>
          </div>
        </div>

        {/* TW 5 (6-1993) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <Sprout size={20} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Hội Nghị TW 5 (tháng 6-1993)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Đột phá phát triển **nông nghiệp và kinh tế nông thôn**; nâng cao đời sống nông dân, xây dựng nông thôn mới.
          </p>
        </div>

        {/* TW 7 (7-1994) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-3">
            <Factory size={20} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              Hội Nghị TW 7 (tháng 7-1994)
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Phát triển **công nghiệp, công nghệ** và xây dựng giai cấp công nhân trong thời kỳ Công nghiệp hóa, Hiện đại hóa đất nước.
          </p>
        </div>
      </div>
    </div>
  );
}
