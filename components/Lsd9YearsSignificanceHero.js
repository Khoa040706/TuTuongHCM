"use client";
import React from "react";
import { Star, Globe, Home, CheckCircle2, Award, ShieldCheck } from "lucide-react";

export default function Lsd9YearsSignificanceHero() {
  const domesticPoints = [
    "Bảo vệ, phát triển tốt nhất thành quả Cách mạng Tháng Tám năm 1945.",
    "Củng cố, phát triển chế độ dân chủ nhân dân trên các lĩnh vực chính trị, kinh tế, văn hóa, xã hội.",
    "Giải phóng hoàn toàn miền Bắc + Tạo tiền đề chính trị - xã hội đưa miền Bắc quá độ lên CNXH.",
    "Xây dựng miền Bắc thành **hậu phương lớn** chi viện cho **tiền tuyến lớn miền Nam**."
  ];

  const internationalPoints = [
    "Có ý nghĩa lịch sử quan trọng với sự nghiệp giải phóng dân tộc, thống nhất, toàn vẹn lãnh thổ Việt Nam.",
    "Có tính lan tỏa rộng lớn trong khu vực, mang tầm vóc thời đại sâu sắc.",
    "Đánh bại cuộc chiến tranh xâm lược quy mô lớn của đế quốc có tiềm lực quân sự - kinh tế mạnh (Pháp - Mỹ).",
    "**Lần đầu tiên trong lịch sử phong trào giải phóng dân tộc, một nước thuộc địa nhỏ bé đã đánh thắng một cường quốc thực dân**.",
    "Cổ vũ mạnh mẽ phong trào đấu tranh vì hòa bình, dân chủ, tiến bộ ở châu Á, châu Phi, Mỹ Latinh."
  ];

  return (
    <div className="my-8 rounded-2xl border border-red-300 dark:border-red-900/60 bg-gradient-to-br from-amber-50/60 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl relative overflow-hidden">
      {/* Background Decorative Icon */}
      <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-amber-500">
        <Star size={320} />
      </div>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-red-200 dark:border-red-900/60 pb-5 mb-8 relative z-10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Star size={14} className="text-amber-600 fill-amber-500" /> Tầm vóc lịch sử thời đại
          </span>
          <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white tracking-wide">
            Ý Nghĩa Thắng Lợi Của Cuộc Kháng Chiến Chống Pháp (1945 - 1954)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            "Lần đầu tiên một nước thuộc địa nhỏ bé đã đánh thắng một cường quốc thực dân phát triển"
          </p>
        </div>
        <div className="px-4 py-3 bg-red-800 text-white shadow-md rounded-xl text-center shrink-0">
          <span className="text-xs text-amber-200 font-semibold uppercase tracking-widest block">Trường kỳ kháng chiến</span>
          <span className="text-base md:text-lg font-extrabold font-serif">1945 - 1954 (9 Năm)</span>
        </div>
      </div>

      {/* Split Grid: Domestic vs International */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Trong nước */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800 shadow-md">
          <div className="flex items-center gap-3 border-b border-amber-200 dark:border-amber-900/40 pb-3 mb-4">
            <div className="p-3 rounded-xl bg-amber-600 text-white shadow-md">
              <Home size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-amber-900 dark:text-amber-300">1. Ý Nghĩa Trong Nước</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Bảo vệ vững chắc nền độc lập & xây dựng hậu phương miền Bắc</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            {domesticPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 bg-amber-50/50 dark:bg-slate-800/80 p-3 rounded-xl border border-amber-200/80 dark:border-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-amber-900 dark:text-amber-300">$1</strong>') }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Quốc tế */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-red-300 dark:border-red-900/60 shadow-md">
          <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/40 pb-3 mb-4">
            <div className="p-3 rounded-xl bg-red-600 text-white shadow-md">
              <Globe size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-red-700 dark:text-red-400">2. Ý Nghĩa Quốc Tế</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Cổ vũ phong trào giải phóng dân tộc trên toàn cầu</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            {internationalPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 bg-red-50/40 dark:bg-slate-800/80 p-3 rounded-xl border border-red-200/80 dark:border-slate-700">
                <CheckCircle2 size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-red-700 dark:text-amber-300 font-extrabold">$1</strong>') }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
