"use client";
import React from "react";
import { Star, Award, UserCheck, Calendar, ArrowRight } from "lucide-react";

export default function LsdJuly1986LeadershipShift() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Calendar size={14} /> Tháng 7-1986
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Bước Ngoặt Chuyển Giao Lãnh Đạo Tháng 7-1986
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật" — Tổng Bí thư Trường Chinh
        </p>
      </div>

      {/* Events Timeline Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Event 1 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-800 shadow-md">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-3">
            <Calendar size={20} className="text-slate-600" />
            <h4 className="font-bold text-base font-serif text-slate-900 dark:text-white">
              Ngày 10-7-1986
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Tổng Bí thư **Lê Duẩn** qua đời sau hơn 26 năm liên tục gánh vác trọng trách Bí thư Thứ nhất và Tổng Bí thư Ban Chấp hành Trung ương Đảng (1960 - 1986).
          </p>
        </div>

        {/* Event 2 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md">
          <div className="flex items-center gap-2 border-b border-red-200 dark:border-red-900/50 pb-3 mb-3">
            <UserCheck size={20} className="text-red-600" />
            <h4 className="font-bold text-base font-serif text-red-700 dark:text-red-400">
              Ngày 14-7-1986
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Ban Chấp hành Trung ương họp Hội nghị bất thường, bầu đồng chí **Trường Chinh** làm Tổng Bí thư của Đảng, chuẩn bị mọi mặt cho Đại hội VI.
          </p>
        </div>
      </div>

      {/* Historical Role Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-xl text-center">
        <Award size={32} className="mx-auto mb-2 text-amber-300" />
        <h4 className="text-lg font-bold font-serif mb-2">Vai Trò Lịch Sử Của Tổng Bí Thư Trường Chinh</h4>
        <p className="text-xs md:text-sm text-amber-100 max-w-2xl mx-auto leading-relaxed font-sans">
          Đồng chí Trường Chinh đã dũng cảm tổng kết thực tiễn, lắng nghe kiến nghị của nhân dân, chỉ đạo sửa đổi căn bản dự thảo Báo cáo chính trị, đặt nền móng lý luận dứt khoát hình thành **Đường lối Đổi mới** toàn diện tại Đại hội VI (12-1986).
        </p>
      </div>
    </div>
  );
}
