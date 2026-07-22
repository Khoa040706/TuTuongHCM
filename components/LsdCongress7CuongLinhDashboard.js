"use client";
import React from "react";
import { Star, Award, Landmark, BookOpen, Layers, ShieldCheck } from "lucide-react";

export default function LsdCongress7CuongLinhDashboard() {
  return (
    <div className="my-8 rounded-2xl border border-red-300 dark:border-red-900/60 bg-gradient-to-br from-red-50/70 via-white to-amber-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Từ 24 đến 27-6-1991 tại Hà Nội
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đại Hội VII (6-1991) & Cương Lĩnh Xây Dựng Đất Nước 1991
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Đảng Cộng sản Việt Nam lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng và kim chỉ nam cho hành động"
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
            <span>**1.176 đại biểu** đại diện hơn 2 triệu đảng viên cả nước</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-600 text-white shrink-0">
            <Award size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Tổng Bí thư mới:</span>
            <span>Đồng chí **Đỗ Mười** được bầu làm Tổng Bí thư</span>
          </div>
        </div>
      </div>

      {/* 2 Key Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Document 1: Cương lĩnh 1991 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <BookOpen size={22} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Cương Lĩnh 1991 (Văn kiện lịch sử)
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **5 bài học lớn**: Nắm vững ngọn cờ độc lập dân tộc & CNXH; sự nghiệp cách mạng là của dân; kết hợp sức mạnh dân tộc với sức mạnh thời đại...
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **6 đặc trưng cơ bản của xã hội XHCN**: Do nhân dân lao động làm chủ; có nền kinh tế phát triển cao; có văn hóa tiên tiến đậm đà bản sắc dân tộc...
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **7 phương hướng lớn**: Xây dựng Nhà nước XHCN của dân, do dân, vì dân; phát triển lực lượng sản xuất, CNH gắn với phát triển nông nghiệp...
            </p>
          </div>
        </div>

        {/* Document 2: Chiến lược KT-XH 2000 */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-4">
            <Layers size={22} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Chiến Lược KT-XH Đến Năm 2000
            </h4>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Mục tiêu tổng quát**: Ra khỏi khủng hoảng, ổn định kinh tế - xã hội, vượt qua tình trạng nước nghèo kém phát triển.
            </p>
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Chỉ tiêu GDP năm 2000**: Phấn đấu **GDP năm 2000 tăng gấp đôi so với năm 1990**.
            </p>
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Động lực phát triển**: Phát triển nền kinh tế nhiều thành phần; giải phóng mọi năng lực sản xuất; tự do kinh doanh theo pháp luật.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
