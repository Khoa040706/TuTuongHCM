"use client";
import React from "react";
import { Globe, AlertTriangle, TrendingDown, ShieldAlert } from "lucide-react";

export default function LsdPostCongress6Context() {
  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <Globe size={14} /> Giai đoạn 1986 - 1991
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Bối Cảnh Quốc Tế & Trong Nước Sau Đại Hội VI
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Bão táp biến động chính trị thế giới & Thách thức khủng hoảng kinh tế đỉnh điểm
        </p>
      </div>

      {/* Grid 2 Columns: International vs Domestic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* International Context */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <Globe size={22} className="text-rose-600" />
            <h4 className="font-bold text-base font-serif text-rose-800 dark:text-rose-300">
              Biến Động Quốc Tế Phức Tạp
            </h4>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              • **Sụp đổ CNXH ở Liên Xô & Đông Âu**: Cuộc cải tổ thất bại dẫn đến sụp đổ Liên Xô (12-1991), mất nguồn viện trợ quan trọng.
            </p>
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Bao vây cấm vận & Xung đột**: Mỹ siết chặt cấm vận; Sự kiện Hải chiến Trường Sa (14-3-1988 chống Trung Quốc chiếm Gạc Ma); Các thế lực thù địch tăng cường chống phá "Diễn biến hòa bình".
            </p>
          </div>
        </div>

        {/* Domestic Context */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md">
          <div className="flex items-center gap-2 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
            <TrendingDown size={22} className="text-red-600" />
            <h4 className="font-bold text-base font-serif text-red-700 dark:text-red-400">
              Thách Thức Khủng Hoảng Trong Nước
            </h4>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-red-50/60 dark:bg-red-950/30 border border-red-200">
              • **Lạm phát phi mã**: Chỉ số giá tiêu dùng tăng tới **774,7% (năm 1986)**, nền kinh tế mất cân đối nghiêm trọng.
            </p>
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Quyết sách chỉ đạo**: Hội nghị TW 2 (4-1987) về cấp bách phân phối lưu thông; Tổng Bí thư Nguyễn Văn Linh khởi xướng bài viết *"Những việc cần làm ngay"* trên báo Nhân Dân chống tiêu cực.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
