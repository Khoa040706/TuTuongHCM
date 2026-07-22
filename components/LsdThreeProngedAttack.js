"use client";
import React from "react";
import { Shield, Target, Users, Award, Zap, CheckCircle2 } from "lucide-react";

export default function LsdThreeProngedAttack() {
  const prongs = [
    {
      name: "Mũi Đấu Tranh Quân Sự",
      icon: Target,
      color: "bg-red-600 text-white",
      desc: "Tiến công tiêu diệt lực lượng quân sự địch, tiêu hao sinh lực địch, đánh bại chiến thuật 'Trực thăng vận' và 'Thiết xa vận'."
    },
    {
      name: "Mũi Đấu Tranh Chính Trị",
      icon: Users,
      color: "bg-amber-600 text-white",
      desc: "Hàng triệu quần chúng nông thôn và đô thị xuống đường biểu tình chống gom dân, phá 'Ấp chiến lược', đòi dân chủ và hòa bình."
    },
    {
      name: "Mũi Đấu Tranh Binh Vận",
      icon: Shield,
      color: "bg-emerald-600 text-white",
      desc: "Vận động, làm tan rã hàng ngũ binh lính chính quyền Sài Gòn, kêu gọi binh lính trở về với nhân dân."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-6 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <Zap size={14} /> Nghệ thuật quân sự độc đáo của Đảng
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Phương Châm Đấu Tranh "3 Mũi Giáp Công" & Chiến Thắng Ấp Bắc
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Kết hợp đấu tranh **Quân sự + Chính trị + Binh vận** trên cả **3 vùng chiến lược** (rừng núi, nông thôn đồng bằng, đô thị).
        </p>
      </div>

      {/* 3 Prongs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {prongs.map((pr, idx) => {
          const Icon = pr.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl ${pr.color} shadow-md`}>
                    <Icon size={22} />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif">{pr.name}</h4>
                </div>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">{pr.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ap Bac Victory Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-xl">
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <Award size={28} className="text-amber-300" />
            <div>
              <h4 className="text-xl font-bold font-serif">Chiến Thắng Ấp Bắc (Ngày 2-1-1963 tại Mỹ Tho)</h4>
              <span className="text-xs text-amber-200">Đòn giáng ngàn cân vào chiến thuật Trực thăng vận & Thiết xa vận</span>
            </div>
          </div>
          <span className="hidden sm:inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 uppercase tracking-wider">
            Mốc Son Lịch Sử
          </span>
        </div>

        <p className="text-xs md:text-sm leading-relaxed text-amber-100 font-sans mb-3">
          Quân và dân Mỹ Tho đánh bại cuộc càn quét lớn của 2.000 quân chính quyền Sài Gòn có cố vấn Mỹ chỉ huy, bắn rơi nhiều máy bay trực thăng và xe bọc thép M113.
        </p>

        <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-xs font-bold text-white flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-400" /> Ý nghĩa ghi nhớ: Gợi mở khả năng quân dân miền Nam hoàn toàn có thể đánh bại chiến lược "Chiến tranh đặc biệt" của đế quốc Mỹ.
        </div>
      </div>
    </div>
  );
}
