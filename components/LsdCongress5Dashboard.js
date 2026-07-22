"use client";
import React from "react";
import { Award, Star, Sprout, ShieldCheck, Landmark } from "lucide-react";

export default function LsdCongress5Dashboard() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Ngày 27 đến 31-3-1982 tại Hà Nội
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đại Hội Đại Biểu Toàn Quốc Lần Thứ V Của Đảng
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          Xác định "Chặng đường đầu tiên của thời kỳ quá độ" và coi "Nông nghiệp là mặt trận hàng đầu"
        </p>
      </div>

      {/* Leadership Box */}
      <div className="p-4 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-xs md:text-sm font-medium text-amber-900 dark:text-amber-200 mb-8 flex flex-col md:flex-row items-center justify-around gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600 text-white shrink-0">
            <Landmark size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Đại biểu tham dự:</span>
            <span>**1.033 đại biểu** đại diện cho hơn 1,7 triệu đảng viên cả nước</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-600 text-white shrink-0">
            <Award size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Tổng Bí thư:</span>
            <span>Đồng chí **Lê Duẩn** tiếp tục được bầu làm Tổng Bí thư</span>
          </div>
        </div>
      </div>

      {/* 2 Strategic Tasks & Agriculture Priority */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 2 Nhiệm vụ chiến lược */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <ShieldCheck size={22} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Hai Nhiệm Vụ Chiến Lược Song Song
            </h4>
          </div>
          <div className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p>1. **Xây dựng thành công CNXH**: Phát triển kinh tế, nâng cao đời sống nhân dân.</p>
            <p>2. **Bảo vệ vững chắc Tổ quốc XHCN**: Củng cố quốc phòng, an ninh, sẵn sàng chiến đấu.</p>
          </div>
        </div>

        {/* Card Nông nghiệp hàng đầu */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Sprout size={22} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Thay Đổi Bước Ngoặt Ưu Tiên Phát Triển
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Đại hội V quyết định: Coi **"Nông nghiệp là mặt trận hàng đầu"**, thúc đẩy phát triển công nghiệp nhẹ, hàng tiêu dùng và xuất khẩu, tạo tiền đề để công nghiệp hóa XHCN.
          </p>
        </div>
      </div>
    </div>
  );
}
