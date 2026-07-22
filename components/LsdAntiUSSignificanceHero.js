"use client";
import React from "react";
import { Flag, Award, Globe, Home, Star, Quote } from "lucide-react";

export default function LsdAntiUSSignificanceHero() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tầm vóc thời đại của cuộc kháng chiến chống Mỹ (1954 - 1975)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Ý Nghĩa Lịch Sử Của Thắng Lợi Chống Mỹ Cứu Nước
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Một chiến công vĩ đại của thế kỷ XX, một sự kiện có tầm quan trọng quốc tế lớn lao"
        </p>
      </div>

      {/* Quote Box (Đại hội IV - 1976) */}
      <div className="p-5 rounded-2xl bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-xs md:text-sm font-serif italic text-amber-900 dark:text-amber-200 mb-8 shadow-sm flex items-start gap-3">
        <Quote size={24} className="text-amber-600 shrink-0 mt-1" />
        <div>
          <strong className="block not-italic font-bold font-serif mb-1 text-slate-900 dark:text-white">Nhận định của Đại hội IV của Đảng (Tháng 12-1976):</strong>
          "Năm tháng sẽ trôi qua, nhưng thắng lợi của nhân dân ta trong sự nghiệp kháng chiến chống Mỹ, cứu nước mãi mãi được ghi vào lịch sử dân tộc ta như một trong những trang chói lọi nhất, một biểu tượng sáng ngời về sự toàn thắng của chủ nghĩa anh hùng cách mạng và trí tuệ con người, và đi vào lịch sử thế giới như một chiến công vĩ đại của thế kỷ XX."
        </div>
      </div>

      {/* 2-Tier Grid: Domestic vs International Significance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Domestic */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-700 shadow-md">
          <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Home size={20} className="text-emerald-600" />
              <h4 className="text-base font-bold font-serif text-emerald-800 dark:text-emerald-300">
                Đối Với Dân Tộc Việt Nam
              </h4>
            </div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-serif">Toàn Vẹn Lãnh Thổ</span>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100">
              • Kết thúc **21 năm** chiến đấu chống đế quốc Mỹ, **30 năm** chiến tranh giải phóng dân tộc, **117 năm** chống đế quốc xâm lược.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100">
              • Quét sạch quân xâm lược khỏi bờ cõi, giành lại độc lập, thống nhất, toàn vẹn lãnh thổ cho Tổ quốc.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100">
              • Mở ra **kỷ nguyên mới** cho dân tộc: Cả nước hòa bình, thống nhất, cùng đi lên Chủ nghĩa Xã hội.
            </p>
          </div>
        </div>

        {/* International */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 dark:border-rose-700 shadow-md">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-rose-600" />
              <h4 className="text-base font-bold font-serif text-rose-800 dark:text-rose-300">
                Đối Với Thế Giới
              </h4>
            </div>
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 font-serif">Tầm Vóc Quốc Tế</span>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100">
              • Đập tan cuộc chiến tranh xâm lược có quy mô lớn nhất, dài ngày nhất của đế quốc Mỹ sau Chiến tranh thế giới thứ hai.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100">
              • Làm thất bại các chiến lược chiến tranh thực dân kiểu mới của Mỹ; làm suy yếu vị thế của chủ nghĩa đế quốc.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100">
              • Cổ vũ mạnh mẽ phong trào giải phóng dân tộc, hòa bình và tiến bộ xã hội trên toàn thế giới.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
