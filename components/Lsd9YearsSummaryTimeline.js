"use client";
import React, { useState } from "react";
import { Calendar, Award, CheckCircle2, BookOpen, Star, Sparkles } from "lucide-react";

export default function Lsd9YearsSummaryTimeline() {
  const milestones = [
    { year: "1945", title: "Cách mạng Tháng Tám thành lập nước VNDCCH; Tình thế 'Ngàn cân treo sợi tóc'", tag: "Khởi đầu" },
    { year: "1946", title: "Tổng tuyển cử bầu Quốc hội khóa I; Lời kêu gọi Toàn quốc kháng chiến bùng nổ (19/12)", tag: "Kháng chiến toàn quốc" },
    { year: "1947", title: "Chiến dịch Việt Bắc Thu Đông 1947 đánh bại 'Đánh nhanh thắng nhanh' của Pháp", tag: "Phản công ATK" },
    { year: "1950", title: "Chiến dịch Biên giới Thu Đông 1950 khai thông biên giới Việt - Trung", tag: "Chủ động tiến công" },
    { year: "1951", title: "Đại hội II tại Tuyên Quang; Đảng Lao động Việt Nam ra hoạt động công khai", tag: "Đại hội Đảng" },
    { year: "1953", title: "Thông qua Luật Cải cách ruộng đất & Kế hoạch chiến lược Đông Xuân 1953-1954", tag: "Cải cách & Đông Xuân" },
    { year: "1954", title: "Chiến thắng Điện Biên Phủ 56 ngày đêm (7-5); Ký Hiệp định Geneve (21-7) lập lại hòa bình", tag: "Thắng lợi hoàn toàn" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-400 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-white to-red-50 p-6 md:p-8 shadow-2xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Star size={14} className="text-amber-500 fill-amber-500" /> Tổng kết toàn chương I (1945 - 1954)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Trục Thời Gian 9 Năm Kháng Chiến Chống Thực Dân Pháp (1945 - 1954)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Chặng đường 9 năm gian khổ nhưng trường kỳ và vô cùng oanh liệt dưới sự lãnh đạo tài tình của Trung ương Đảng và Chủ tịch Hồ Chí Minh.
        </p>
      </div>

      {/* Vertical Summary Timeline */}
      <div className="relative pl-6 md:pl-8 border-l-4 border-amber-500 space-y-6 max-w-3xl mx-auto mb-8">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-red-600 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform" />

            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500 transition-all">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-extrabold text-red-600 dark:text-red-400 font-serif">
                  Năm {m.year}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {m.tag}
                </span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                {m.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Lessons Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-800 text-white shadow-xl flex items-start gap-3">
        <Sparkles size={24} className="text-amber-300 shrink-0 mt-0.5" />
        <div className="text-xs md:text-sm leading-relaxed">
          <strong>Bài học lịch sử vô giá:</strong> Thắng lợi của cuộc kháng chiến chống Pháp khẳng định đường lối <em>kháng chiến toàn dân, toàn diện, lâu dài và dựa vào sức mình là chính</em> là hoàn toàn đúng đắn. Đây là ngọn cờ dẫn đường cho toàn Đảng, toàn quân và toàn dân tiếp tục hoàn thành sự nghiệp giải phóng dân tộc trong giai đoạn tiếp theo.
        </div>
      </div>
    </div>
  );
}
