"use client";
import React from "react";
import { Award, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export default function LsdPeriod1975To1981Summary() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-6 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Award size={14} /> Chặng đường 5 năm 1975 - 1981
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Tổng Kết 5 Năm Thực Hiện NQ Đại Hội IV (1975 - 1981)
        </h3>
      </div>

      {/* Split-Screen: Achievements vs Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Achievements */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <ShieldCheck size={22} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Thành Tựu Nổi Bật
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ Hoàn thành thống nhất đất nước về mặt nhà nước (Quốc hội khóa VI).
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ Bảo vệ vững chắc chủ quyền biên giới Tây Nam và biên giới Phía Bắc.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ Bước đầu tìm tòi đổi mới kinh tế (NQ TW 6, Khoán 100, Xé rào).
            </p>
          </div>
        </div>

        {/* Limitations */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <AlertTriangle size={22} className="text-rose-600" />
            <h4 className="font-bold text-base font-serif text-rose-800 dark:text-rose-300">
              Hạn Chế & Yếu Kém
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ Không đạt các chỉ tiêu kinh tế quan trọng do Đại hội IV đề ra.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ Đất nước lâm vào khủng hoảng kinh tế - xã hội nghiêm trọng, lạm phát cao.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ Đời sống cán bộ, chiến sĩ và nhân dân vô cùng khó khăn.
            </p>
          </div>
        </div>
      </div>

      {/* Causes Card */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 shadow-md">
        <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
          <HelpCircle size={20} className="text-amber-600" />
          <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
            Nguyên Nhân Của Khó Khăn & Hạn Chế
          </h4>
        </div>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          • **Khách quan**: Nền kinh tế xuất phát điểm thấp, bị tàn phá bởi chiến tranh khốc liệt kéo dài và bị đế quốc Mỹ bao vây cấm vận. <br />
          • **Chủ quan**: Tư tưởng **nóng vội, duy ý chí, duy trì quá lâu cơ chế bao cấp**; Ban Chấp hành Trung ương Đảng nghiêm túc **tự phê bình** về những khuyết điểm trong chỉ đạo quản lý kinh tế - xã hội.
        </p>
      </div>
    </div>
  );
}
