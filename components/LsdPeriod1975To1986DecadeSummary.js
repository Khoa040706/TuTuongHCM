"use client";
import React from "react";
import { Award, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export default function LsdPeriod1975To1986DecadeSummary() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-6 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Award size={14} /> Chặng đường 10 năm (1975 - 1986)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Tổng Kết 10 Năm Xây Dựng CNXH & Bảo Vệ Tổ Quốc (1975 - 1986)
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          Thắng lợi vĩ đại gắn liền với những khó khăn, khủng hoảng và bài học kinh nghiệm sâu sắc
        </p>
      </div>

      {/* Split-Screen: 3 Achievements vs Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Card 3 Thành tựu */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <ShieldCheck size={22} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              3 Thành Tựu Nổi Bật Vĩ Đại
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              1. **Hoàn thành thống nhất đất nước về mặt nhà nước**: Tạo sức mạnh tổng hợp cho cả nước đi lên CNXH.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              2. **Đạt thành tựu quan trọng trong xây dựng CNXH**: Khôi phục kinh tế, bước đầu cơ sở vật chất - kỹ thuật.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              3. **Bảo vệ vững chắc Tổ quốc & nghĩa vụ quốc tế**: Thắng lợi ở biên giới Tây Nam, phía Bắc & giúp dân Campuchia.
            </p>
          </div>
        </div>

        {/* Card Sai lầm & Yếu kém */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <AlertTriangle size={22} className="text-rose-600" />
            <h4 className="font-bold text-base font-serif text-rose-800 dark:text-rose-300">
              Sai Lầm Khuyết Điểm & Khủng Hoảng
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ Không hoàn thành các mục tiêu kinh tế - xã hội do Đại hội IV và V đề ra.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ Đất nước lâm vào khủng hoảng kinh tế - xã hội trầm trọng, lạm phát phi mã kéo dài.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ Bị đế quốc Mỹ và các lực lượng thù địch bao vây cấm vận, cô lập.
            </p>
          </div>
        </div>
      </div>

      {/* Causes Box */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 shadow-md">
        <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
          <HelpCircle size={20} className="text-amber-600" />
          <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
            Nguyên Nhân Của Tình Trạng Khủng Hoảng
          </h4>
        </div>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          • **Khách quan**: Nền kinh tế nghèo nàn, sản xuất nhỏ phổ biến, chịu hậu quả nặng nề của 30 năm chiến tranh và bị bao vây cấm vận. <br />
          • **Chủ quan**: Sai lầm của Đảng trong đánh giá tình hình, xác định mục tiêu; sai lầm về bố trí cơ cấu kinh tế, cải tạo XHCN và duy trì quá lâu cơ chế tập trung quan liêu bao cấp.
        </p>
      </div>
    </div>
  );
}
