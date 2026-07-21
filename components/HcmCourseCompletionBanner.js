"use client";
import React from "react";
import { Trophy, Award, Sparkles, CheckCircle2, Star, Flag, Heart } from "lucide-react";

export default function HcmCourseCompletionBanner() {
  const chapters = [
    { num: "01", title: "Khái Niệm, Đối Tượng & Phương Pháp Nghiên Cứu" },
    { num: "02", title: "Vấn Đề Dân Tộc & Chủ Nghĩa Xã Hội" },
    { num: "03", title: "Đảng Cộng Sản & Nhà Nước Của Dân, Do Dân, Vì Dân" },
    { num: "04", title: "Đại Đoàn Kết Toàn Dân Tộc & Đoàn Kết Quốc Tế" },
    { num: "05", title: "Văn Hóa, Đạo Đức & Con Người Hồ Chí Minh" },
    { num: "06", title: "Xây Dựng Văn Hóa, Đạo Đức, Con Người Hiện Nay" }
  ];

  return (
    <div className="my-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-amber-100/80 via-white to-emerald-100/80 border-2 border-amber-300 text-stone-900 shadow-2xl shadow-amber-200/60 overflow-hidden relative font-sans text-center">
      {/* Background Glow Effects */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Trophy Badge */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-lg shadow-amber-500/30 mb-4 animate-bounce">
        <Trophy className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
        <Sparkles className="w-4 h-4 text-emerald-600" /> HOÀN THÀNH TRỌN VẸN MÔN HỌC
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-stone-900 tracking-tight mb-3">
        CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH MÔN HỌC TƯ TƯỞNG HỒ CHÍ MINH!
      </h2>

      <blockquote className="max-w-2xl mx-auto p-4 rounded-2xl bg-white/90 border border-amber-200 shadow-sm text-stone-800 text-sm md:text-base italic font-serif leading-relaxed mb-8">
        "Sinh viên Việt Nam quyết tâm học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh, thi đua học tập, rèn luyện, lập nghiệp, xây dựng đất nước giàu mạnh, văn minh, <strong className="text-red-700 not-italic">sánh vai với các cường quốc năm châu</strong>."
      </blockquote>

      {/* 6 Chapters Completed Matrix */}
      <div className="max-w-4xl mx-auto text-left mb-8">
        <h4 className="text-xs font-black uppercase tracking-widest text-stone-500 mb-4 text-center">
          HÀNH TRÌNH CHINH PHỤC 6 CHƯƠNG LÝ LUẬN & THỰC TIỄN
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {chapters.map((c) => (
            <div key={c.num} className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                ✓ {c.num}
              </div>
              <span className="text-xs font-bold text-stone-800 line-clamp-2">
                {c.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Celebration Footer Banner */}
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-sm shadow-xl shadow-red-500/20">
        <Star className="w-4 h-4 fill-white" /> XUẤT SẮC HOÀN THÀNH TOÀN BỘ GIÁO TRÌNH
      </div>
    </div>
  );
}
