"use client";
import React, { useState } from "react";
import { Users, ShieldAlert, Clock, Anchor, Compass, CheckCircle2 } from "lucide-react";

export default function LsdFourPillarsVisualizer() {
  const [activePillar, setActivePillar] = useState("all");

  const pillars = [
    {
      id: "toan-dan",
      title: "Kháng Chiến Toàn Dân",
      badge: "Lực lượng",
      icon: Users,
      color: "from-blue-600 to-indigo-700",
      lightBg: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/60",
      quote: "'Mỗi người dân là một chiến sĩ, mỗi làng xóm là một pháo đài, mỗi đường phố là một mặt trận'",
      content: [
        "Huy động toàn bộ sức dân, tài dân, lực dân tham gia đánh giặc.",
        "Quân đội nhân dân làm nòng cốt cho toàn dân đánh giặc.",
        "Phát huy khối đại đoàn kết toàn dân tộc không phân biệt giai cấp, tôn giáo."
      ]
    },
    {
      id: "toan-dien",
      title: "Kháng Chiến Toàn Diện",
      badge: "Mặt trận",
      icon: ShieldAlert,
      color: "from-amber-600 to-red-600",
      lightBg: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/60",
      quote: "'Đánh địch trên mọi mặt trận: Quân sự, chính trị, kinh tế, văn hóa, ngoại giao'",
      content: [
        "Mặt trận Quân sự giữ vai trò mũi nhọn, quyết định trực tiếp.",
        "Mặt trận Chính trị củng cố khối đoàn kết, đấu tranh dư luận.",
        "Kinh tế: Tăng gia sản xuất, tự cấp tự túc, đánh phá kinh tế địch.",
        "Văn hóa & Ngoại giao: Xây dựng nền văn hóa mới, tranh thủ sự ủng hộ quốc tế."
      ]
    },
    {
      id: "lau-dai",
      title: "Kháng Chiến Lâu Dài",
      badge: "Phương châm",
      icon: Clock,
      color: "from-emerald-600 to-teal-700",
      lightBg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60",
      quote: "'Vừa đánh vừa tiêu hao lực lượng địch, vừa phát triển lực lượng ta'",
      content: [
        "Lấy thời gian làm lực lượng vật chất chuyển hóa yếu thành mạnh.",
        "Đánh bại kế hoạch 'Đánh nhanh thắng nhanh' của thực dân Pháp.",
        "Không phải kéo dài vô thời hạn mà nhằm tích lũy lực lượng tranh thủ thời cơ lớn."
      ]
    },
    {
      id: "tu-luc",
      title: "Dựa Vào Sức Mình Là Chính",
      badge: "Nguồn lực",
      icon: Anchor,
      color: "from-purple-600 to-rose-700",
      lightBg: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/60",
      quote: "'Đem sức ta mà tự giải phóng cho ta - Lấy nội lực dân tộc làm chỗ dựa chủ yếu'",
      content: [
        "Độc lập, tự chủ về đường lối kháng chiến là yếu tố hàng đầu.",
        "Tự lực cánh sinh về quân trang, vũ khí, lương thực.",
        "Tranh thủ sự ủng hộ quốc tế (Liên Xô, Trung Quốc, các nước XHCN) khi có điều kiện."
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-amber-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Compass size={14} /> Kim chỉ nam dẫn đường thắng lợi
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Sơ Đồ Bento Grid 4 Trụ Cột Đường Lối Kháng Chiến
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Đường lối kháng chiến của Đảng hình thành hoàn chỉnh qua các chỉ thị từ 1945 đến tác phẩm "Kháng chiến nhất định thắng lợi" của Trường Chinh (8-1947).
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActivePillar("all")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
            activePillar === "all"
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Tất cả 4 Trụ cột
        </button>
        {pillars.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePillar(item.id)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activePillar === item.id
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300"
            }`}
          >
            <item.icon size={15} /> {item.title}
          </button>
        ))}
      </div>

      {/* Bento Grid (Centered when single item selected) */}
      <div className={activePillar === "all" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "max-w-2xl mx-auto w-full"}>
        {pillars
          .filter((p) => activePillar === "all" || activePillar === p.id)
          .map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border ${pillar.lightBg} p-6 shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-md`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white font-serif">{pillar.title}</h4>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                    {pillar.badge}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 mb-4 italic text-xs md:text-sm font-serif text-amber-900 dark:text-amber-300">
                  {pillar.quote}
                </div>

                <div className="space-y-2">
                  {pillar.content.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
