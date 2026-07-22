"use client";
import React from "react";
import { Sun, AlertTriangle, ShieldCheck, TrendingDown, Globe, Award } from "lucide-react";

export default function LsdPostWarContext1975() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Sun size={14} className="fill-amber-300 text-amber-300" /> Thời kỳ mới 1975 - 1981
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Bối Cảnh Lịch Sử Việt Nam Sau Mùa Xuân 1975
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Đất nước hòa bình, độc lập, thống nhất, cả nước quá độ đi lên chủ nghĩa xã hội"
        </p>
      </div>

      {/* Split Screen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card Thuận Lợi */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-700 shadow-md">
          <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={22} className="text-emerald-600" />
              <h4 className="text-base font-bold font-serif text-emerald-800 dark:text-emerald-300">
                Thuận Lợi & Thời Cơ
              </h4>
            </div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-serif">Sức Mạnh Tổng Hợp</span>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ **Thắng lợi hoàn toàn**: Tổ quốc được độc lập, hòa bình, thống nhất sau 30 năm chiến tranh chia cắt.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ **Khí thế cách mạng dâng cao**: Nhân dân tin tưởng tuyệt đối vào sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              ✔ **Uy tín quốc tế lớn**: Hệ thống các nước XHCN và nhân dân tiến bộ thế giới ủng hộ, giúp đỡ.
            </p>
          </div>
        </div>

        {/* Card Khó Khăn */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 dark:border-rose-700 shadow-md">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle size={22} className="text-rose-600" />
              <h4 className="text-base font-bold font-serif text-rose-800 dark:text-rose-300">
                Khó Khăn & Thách Thức
              </h4>
            </div>
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 font-serif">Hậu Quả Chiến Tranh</span>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ **Hậu quả chiến tranh nặng nề**: Hàng triệu người chết và bị thương, làng mạc, hạ tầng bị tàn phá nặng nề.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ **Kinh tế nghèo nàn, lạc hậu**: Nền sản xuất nhỏ là phổ biến, lực lượng sản xuất yếu kém, lạm phát tăng cao.
            </p>
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              ⚠ **Bao vây cấm vận**: Đế quốc Mỹ thực hiện chính sách cấm vận kinh tế + Các lực lượng thù địch chống phá.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
