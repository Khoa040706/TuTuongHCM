"use client";
import React from "react";
import { TrendingUp, Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function LsdCongressVIIImplementation() {
  return (
    <div className="my-8 rounded-2xl border border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <TrendingUp size={14} /> Giai đoạn 1991 - 1996
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Triển Khai NQ Đại Hội VII (1991-1996) & Hiến Pháp 1992
        </h3>
        <p className="text-sm font-serif text-emerald-800 dark:text-emerald-300 font-bold mt-2 italic">
          Đất nước bắt đầu ra khỏi khủng hoảng kinh tế - xã hội, tạo thế và lực vững chắc
        </p>
      </div>

      {/* Grid 2 Main Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Economic Growth */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <TrendingUp size={22} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Tăng Trưởng Kinh Tế Vượt Mức
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **Tăng trưởng GDP**: Tăng bình quân **8,2%/năm** (vượt xa chỉ tiêu kế hoạch đề ra là 5,5% - 6,5%).
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **Đẩy lùi lạm phát**: Lạm phát giảm từ **67,1% (1991)** xuống còn **12,7% (1995)**.
            </p>
          </div>
        </div>

        {/* Constitution 1992 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-4">
            <Landmark size={22} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              Hiến Pháp Năm 1992
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200">
              • **Thông qua**: Kỳ họp thứ 11 Quốc hội khóa VIII thông qua tháng 4-1992.
            </p>
            <p className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200">
              • **Thể chế hóa Đổi mới**: Thể chế hóa kinh tế thị trường định hướng XHCN & Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
