"use client";
import React from "react";
import { Star, Award, Landmark, RefreshCw, Sprout, ShieldCheck, Users } from "lucide-react";

export default function LsdCongress6DoiMoiDashboard() {
  return (
    <div className="my-8 rounded-2xl border border-red-300 dark:border-red-900/60 bg-gradient-to-br from-red-50/70 via-white to-amber-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Từ 15 đến 18-12-1986 tại Hà Nội
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đại Hội VI (12-1986) — Đại Hội Đổi Mới Mở Ra Kỷ Nguyên Mới
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật"
        </p>
      </div>

      {/* Leadership Box */}
      <div className="p-4 rounded-xl bg-red-100/80 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-xs md:text-sm font-medium text-red-900 dark:text-red-200 mb-8 flex flex-col md:flex-row items-center justify-around gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600 text-white shrink-0">
            <Landmark size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Đại biểu tham dự:</span>
            <span>**1.129 đại biểu** đại diện cho gần 2 triệu đảng viên cả nước</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-600 text-white shrink-0">
            <Award size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Tổng Bí thư mới:</span>
            <span>Đồng chí **Nguyễn Văn Linh** được bầu làm Tổng Bí thư</span>
          </div>
        </div>
      </div>

      {/* 5 Main Pillars of Innovation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Pillar 1: Economic Innovation */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <Sprout size={20} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              1. Đổi Mới Cơ Cấu Kinh Tế
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Tập trung thực hiện **3 chương trình kinh tế lớn**: *Lương thực - thực phẩm*, *Hàng tiêu dùng* và *Hàng xuất khẩu*. Thừa nhận kinh tế nhiều thành phần.
          </p>
        </div>

        {/* Pillar 2: Social Policy */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-3">
            <Users size={20} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              2. Chính Sách Xã Hội
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Gắn chính sách kinh tế với chính sách xã hội; tạo việc làm, thực hiện công bằng xã hội, đảm bảo an sinh và nâng cao đời sống nhân dân.
          </p>
        </div>

        {/* Pillar 3: Party Leadership */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <RefreshCw size={20} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              3. Đổi Mới Lãnh Đạo Của Đảng
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Đổi mới tư duy (trước hết là tư duy kinh tế), đổi mới phong cách làm việc, phát huy quyền làm chủ của nhân dân: **"Dân biết, dân bàn, dân làm, dân kiểm tra"**.
          </p>
        </div>
      </div>
    </div>
  );
}
