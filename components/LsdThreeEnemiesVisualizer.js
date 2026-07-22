"use client";
import React, { useState } from "react";
import { Utensils, BookOpen, Shield, Award, Users, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

export default function LsdThreeEnemiesVisualizer() {
  const [activeEnemy, setActiveEnemy] = useState("all");

  const pillars = [
    {
      id: "doi",
      title: "Chống Giặc Đói",
      subtitle: "Giải quyết nhu cầu cấp bách cứu sống nhân dân",
      icon: Utensils,
      color: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
      phongTrao: [
        "Tăng gia sản xuất ngay! Tăng gia sản xuất nữa!",
        "Phong trào 'Hũ gạo tiết kiệm', 'Tuần lễ vàng', 'Quỹ độc lập'.",
        "Chính phủ bãi bỏ thuế thân, thực hiện giảm tô 25%."
      ],
      ketQua: "Đầu năm 1946, nạn đói cơ bản được đẩy lùi, đời sống nhân dân dần ổn định."
    },
    {
      id: "dot",
      title: "Chống Giặc Dốt",
      subtitle: "Nâng cao dân trí, phát triển nền giáo dục mới",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200",
      phongTrao: [
        "Phát động phong trào 'Bình dân học vụ' toàn dân học chữ Quốc ngữ.",
        "Thành lập Trường Đại học Văn khoa Hà Nội.",
        "Tổ chức Hội nghị văn hóa toàn quốc lần thứ nhất."
      ],
      ketQua: "Đến cuối năm 1946, có hơn 2.5 triệu người dân thoát mù chữ."
    },
    {
      id: "ngoai-xam",
      title: "Chống Giặc Ngoại Xâm & Củng Cố Chính Quyền",
      subtitle: "Bảo vệ nền độc lập tự do vừa giành được",
      icon: Shield,
      color: "from-red-500 to-rose-700",
      lightBg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50",
      badgeColor: "bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200",
      phongTrao: [
        "06/01/1946: Tổ chức Tổng tuyển cử đầu tiên bầu Quốc hội khóa I.",
        "25/11/1945: Ban hành Chỉ thị 'Kháng chiến kiến quốc'.",
        "Thông qua Hiến pháp năm 1946 (bản Hiến pháp đầu tiên của VNDCCH).",
        "Thành lập Hội Liên hiệp Quốc dân Việt Nam (Liên Việt)."
      ],
      ketQua: "Xây dựng nền móng chính quyền dân chủ nhân dân vững chắc từ Trung ương tới địa phương."
    }
  ];

  const statCards = [
    { label: "Số cử tri tham gia bầu cử", value: "89%+", desc: "Ngày 06-01-1946 bầu 333 đại biểu Quốc hội", icon: Users, color: "text-emerald-600" },
    { label: "Dân số biết chữ Quốc ngữ", value: "2.5 triệu+", desc: "Qua phong trào Bình dân học vụ cuối 1946", icon: BookOpen, color: "text-blue-600" },
    { label: "Lực lượng vũ trang", value: "8 vạn+", desc: "Bộ đội chính quy và công an tổ chức đến cấp huyện", icon: Shield, color: "text-rose-600" },
    { label: "Hiến pháp đầu tiên", value: "09/11/1946", desc: "Được Quốc hội thông qua tại kỳ họp thứ 2", icon: Award, color: "text-amber-600" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={14} /> Nhiệm vụ chiến lược cấp bách (03-9-1945)
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Sơ Đồ 3 Trụ Cột: "Diệt Giặc Đói, Giặc Dốt, Giặc Ngoại Xâm"
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Nhấp vào từng trụ cột bên dưới để xem chi tiết biện pháp và kết quả thực tiễn của Chính phủ lâm thời.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveEnemy("all")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            activeEnemy === "all"
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Hiển thị tất cả 3 Trụ cột
        </button>
        {pillars.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveEnemy(item.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeEnemy === item.id
                ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300"
            }`}
          >
            <item.icon size={16} /> {item.title}
          </button>
        ))}
      </div>

      {/* Pillars Grid (Centered when single item selected) */}
      <div className={activeEnemy === "all" ? "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" : "max-w-2xl mx-auto mb-10"}>
        {pillars
          .filter((p) => activeEnemy === "all" || activeEnemy === p.id)
          .map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border ${pillar.lightBg} p-6 shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-md`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white font-serif">{pillar.title}</h4>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${pillar.badgeColor}`}>
                      Nhiệm vụ cấp bách
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 italic">{pillar.subtitle}</p>

                <div className="space-y-3 mb-5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Biện pháp triển khai:</h5>
                  {pillar.phongTrao.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                      <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mb-1">Kết quả đạt được:</span>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{pillar.ketQua}</p>
                </div>
              </div>
            );
          })}
      </div>

      {/* Achievement Stats Grid */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <h4 className="text-center font-bold text-lg text-slate-900 dark:text-white font-serif mb-6 flex items-center justify-center gap-2">
          <TrendingUp className="text-amber-600" size={20} /> Các Thẻ Chỉ Số Thành Tựu Lịch Sử (1945 - 1946)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
                <div className={`p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 ${stat.color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{stat.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{stat.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
