"use client";
import React from "react";
import { Compass, CheckCircle2, ShieldCheck, Users, Flame, Zap } from "lucide-react";

export default function LsdLessons1945To1946Visualizer() {
  const lessons = [
    {
      num: "01",
      title: "Nêu cao ý chí 'Tự lực, tự cường'",
      desc: "Phát huy quyết tâm cao nhất bảo vệ nền tự do, độc lập của Dân chủ Cộng hòa non trẻ.",
      icon: <Flame size={20} className="text-red-600" />,
      color: "border-red-200 bg-red-50/60 dark:bg-red-950/20"
    },
    {
      num: "02",
      title: "Triệt để lợi dụng mâu thuẫn hàng ngũ địch",
      desc: "Thực hành nhân nhượng có nguyên tắc với phương châm sáng suốt: 'Dĩ bất biến, ứng vạn biến'.",
      icon: <Zap size={20} className="text-amber-600" />,
      color: "border-amber-200 bg-amber-50/60 dark:bg-amber-950/20"
    },
    {
      num: "03",
      title: "Tăng cường Đại đoàn kết toàn dân tộc",
      desc: "Dựa vào sức mạnh vật chất, chính trị, tinh thần to lớn của toàn thể nhân dân Việt Nam.",
      icon: <Users size={20} className="text-emerald-600" />,
      color: "border-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/20"
    },
    {
      num: "04",
      title: "Khẩn trương phát triển lực lượng cách mạng toàn diện",
      desc: "Vừa xây dựng chính quyền, phát triển quân đội, vừa diệt giặc đói, giặc dốt để củng cố hậu phương.",
      icon: <ShieldCheck size={20} className="text-blue-600" />,
      color: "border-blue-200 bg-blue-50/60 dark:bg-blue-950/20"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-6 md:p-8 shadow-xl">
      {/* Title */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-amber-200 dark:border-amber-900/60 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Compass size={14} className="text-amber-600" /> Bài học lịch sử quý báu
          </span>
          <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
            Bài Học Kinh Nghiệm Giai Đoạn 1945 - 1946
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            4 bài học chiến lược giúp Đảng bảo vệ chính quyền cách mạng trong tình thế "ngàn cân treo sợi tóc".
          </p>
        </div>
      </div>

      {/* 4 Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {lessons.map((ls, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border ${ls.color} bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex items-start gap-4`}
          >
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-slate-800 shrink-0">
              {ls.icon}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold text-amber-800 dark:text-amber-300 font-serif">
                  BÀI HỌC {ls.num}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white font-serif leading-snug">
                {ls.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {ls.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
