"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight,
  Users,
  Globe,
  CheckCircle2,
  Lock,
  Layers,
  Link2,
  Activity,
  Award
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmRelationConditions() {
  const [activePillar, setActivePillar] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-pillar",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", stagger: 0.1 }
    );
  }, { scope: containerRef });

  const pillars = [
    {
      id: "party",
      number: "Một là",
      title: "Vai trò lãnh đạo tuyệt đối của Đảng Cộng sản",
      icon: Lock,
      color: "border-red-500 bg-red-500/5 text-red-700",
      iconBg: "bg-red-100 text-red-700",
      points: [
        "Không có sự lãnh đạo của Đảng thì cách mạng Việt Nam không thể đi theo con đường cách mạng vô sản, không thể giành được độc lập thực sự.",
        "Theo Hồ Chí Minh: phải không ngừng củng cố, tăng cường vai trò lãnh đạo của Đảng trong suốt tiến trình cách mạng.",
        "Cảnh báo: Nếu buông lỏng hoặc đánh mất vai trò lãnh đạo của Đảng, chủ nghĩa xã hội sẽ đổ vỡ, tan rã."
      ]
    },
    {
      id: "unity",
      number: "Hai là",
      title: "Khối đại đoàn kết dân tộc (Liên minh Công - Nông)",
      icon: Users,
      color: "border-amber-500 bg-amber-500/5 text-amber-700",
      iconBg: "bg-amber-100 text-amber-700",
      points: [
        "Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược lâu dài, quyết định sự thành bại cuối cùng của cách mạng.",
        "Nền tảng vững chắc nhất của khối đại đoàn kết phải là liên minh công nhân - nông dân dưới sự lãnh đạo của Đảng.",
        "Đoàn kết rộng rãi các lực lượng yêu nước khác để nhân lên sức mạnh vĩ đại của toàn dân tộc."
      ]
    },
    {
      id: "international",
      number: "Ba là",
      title: "Đoàn kết, gắn bó chặt chẽ với cách mạng thế giới",
      icon: Globe,
      color: "border-blue-500 bg-blue-500/5 text-blue-700",
      iconBg: "bg-blue-100 text-blue-700",
      points: [
        "Đoàn kết quốc tế nhằm kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo ra sức mạnh tổng hợp to lớn.",
        "Góp phần chung cho cuộc đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và chủ nghĩa xã hội trên toàn cầu.",
        "Việt Nam luôn là một bộ phận khăng khít của các lực lượng tiến bộ thế giới."
      ]
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
          Mục III.3
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
          Điều kiện để bảo đảm độc lập dân tộc gắn liền với CNXH
        </h3>
        <p className="text-stone-500 text-xs md:text-sm mt-1">
          Hồ Chí Minh chỉ rõ ba điều kiện cốt lõi tạo thành thế chân kiềng vững chắc bảo vệ nền độc lập dân tộc và xây dựng thành công chủ nghĩa xã hội.
        </p>
      </div>

      {/* Interactive Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((p) => {
          const IconComponent = p.icon;
          const isSelected = activePillar === p.id;
          return (
            <div
              key={p.id}
              onClick={() => setActivePillar(isSelected ? null : p.id)}
              className={`p-6 rounded-3xl border transition-all duration-350 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[220px] animate-pillar ${
                isSelected 
                  ? `${p.color} ring-2 ring-offset-1 ring-stone-200 shadow-md`
                  : "bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${p.iconBg}`}>
                    {p.number}
                  </span>
                  <span className={`p-2 rounded-xl ${p.iconBg} shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </span>
                </div>
                <h4 className="font-serif font-black text-stone-900 text-sm md:text-base leading-snug">
                  {p.title}
                </h4>
              </div>

              <div className="mt-5 relative min-h-[40px]">
                {isSelected ? (
                  <ul className="space-y-2 text-stone-700 text-xs leading-relaxed animate-pillar">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-800 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest pt-2 border-t border-stone-100">
                    Bấm để xem phân tích chi tiết
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Connection / Interdependence Box */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white p-6 rounded-3xl border border-stone-850 shadow-md space-y-4 relative overflow-hidden">
        <Link2 className="w-24 h-24 text-amber-500/5 absolute -bottom-5 -right-5 rotate-45" />
        <div className="space-y-2 relative z-10">
          <h5 className="font-serif font-black text-amber-500 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-400" />
            Tính gắn kết hữu cơ, không thể tách rời
          </h5>
          <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
            Hồ Chí Minh đặc biệt nhấn mạnh: **Ba điều kiện trên phải được bảo đảm và gắn bó chặt chẽ với nhau**. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 relative z-10">
          <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 text-[11px] text-stone-300 leading-normal">
            <strong className="text-white block mb-0.5">Sự lãnh đạo của Đảng</strong> là hạt nhân dẫn dắt khối đại đoàn kết đi đúng hướng cách mạng vô sản.
          </div>
          <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 text-[11px] text-stone-300 leading-normal">
            <strong className="text-white block mb-0.5">Khối đại đoàn kết</strong> là lực lượng nòng cốt biến đường lối lãnh đạo của Đảng thành thực tiễn thắng lợi.
          </div>
          <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 text-[11px] text-stone-300 leading-normal">
            <strong className="text-white block mb-0.5">Đoàn kết quốc tế</strong> tạo hậu thuẫn vững chắc, nhân lên gấp bội sức mạnh nội sinh của dân tộc.
          </div>
        </div>
        <p className="text-amber-500 text-xs font-bold text-center pt-2 italic border-t border-white/10 relative z-10">
          → Kết hợp 3 yếu tố tạo thành &quot;Kiềng ba chân&quot; vững chắc để bảo vệ thành quả độc lập dân tộc & xây dựng thành công CNXH.
        </p>
      </div>
    </div>
  );
}
