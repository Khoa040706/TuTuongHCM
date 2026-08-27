"use client";
import React from "react";
import { Landmark, Award, Star } from "lucide-react";

export default function LsdCongresses4And5Compare() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/40 p-6 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Landmark size={14} /> Bảng ma trận so sánh
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          So Sánh Đại Hội IV (1976) vs Đại Hội V (1982)
        </h3>
      </div>

      {/* Grid 2 Congresses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Congress IV */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md">
          <div className="flex items-center justify-between border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
            <h4 className="font-bold text-lg font-serif text-red-700 dark:text-red-400">
              Đại Hội IV (14 - 20/12/1976)
            </h4>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">1.008 Đại biểu</span>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p>• <strong>Tổng Bí thư</strong>: Đồng chí <strong>Lê Duẩn</strong>.</p>
            <p>• <strong>Sự kiện trọng đại</strong>: Đổi tên Đảng Lao động Việt Nam thành <strong>Đảng Cộng sản Việt Nam</strong>.</p>
            <p>• <strong>Đường lối cốt lõi</strong>: Xác định đường lối CNH XHCN + Tiến hành đồng thời <strong>3 cuộc cách mạng</strong> (Cách mạng Khoa học - Kỹ thuật giữ vai trò <strong>THEN CHỐT</strong>).</p>
            <p>• <strong>Kế hoạch</strong>: Kế hoạch 5 năm (1976-1980).</p>
          </div>
        </div>

        {/* Congress V */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-500 shadow-md">
          <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-4">
            <h4 className="font-bold text-lg font-serif text-amber-900 dark:text-amber-300">
              Đại Hội V (27 - 31/3/1982)
            </h4>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">1.033 Đại biểu</span>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p>• <strong>Tổng Bí thư</strong>: Đồng chí <strong>Lê Duẩn</strong> (bầu lại).</p>
            <p>• <strong>Điểm mới lý luận</strong>: Khẳng định nước ta đang ở <strong>&quot;chặng đường đầu tiên của thời kỳ quá độ lên CNXH&quot;</strong>.</p>
            <p>• <strong>Thay đổi ưu tiên</strong>: Coi <strong>&quot;Nông nghiệp là mặt trận hàng đầu&quot;</strong>, thúc đẩy hàng tiêu dùng và xuất khẩu.</p>
            <p>• <strong>Kế hoạch</strong>: Kế hoạch 5 năm (1981-1985).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
