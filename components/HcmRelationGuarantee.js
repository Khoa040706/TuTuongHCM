"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  Quote, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight,
  Cpu,
  Heart,
  Scale,
  Users,
  Globe,
  AlertTriangle,
  FileText,
  Bookmark,
  HeartHandshake
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmRelationGuarantee() {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".animate-card") : document.querySelectorAll(".animate-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)", stagger: 0.05 }
    );
      }
    }
  }, { scope: containerRef });

  // 6 Đặc trưng của CNXH theo HCM
  const features = [
    {
      id: 1,
      title: "Bình đẳng & Công bằng",
      icon: Scale,
      color: "from-amber-500/10 to-orange-500/10",
      desc: "Làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng. Đảm bảo bình đẳng trong phân phối lao động."
    },
    {
      id: 2,
      title: "Bảo đảm phúc lợi xã hội",
      icon: HeartHandshake,
      color: "from-red-500/10 to-pink-500/10",
      desc: "Chăm sóc và bảo đảm phúc lợi xã hội cho người già, trẻ em và những người có hoàn cảnh khó khăn trong cuộc sống."
    },
    {
      id: 3,
      title: "Cơ hội phát triển bình đẳng",
      icon: Users,
      color: "from-blue-500/10 to-indigo-500/10",
      desc: "Mọi công dân đều được tạo điều kiện học tập, làm việc và cống hiến để phát triển năng lực cá nhân như nhau."
    },
    {
      id: 4,
      title: "Kinh tế & Khoa học phát triển",
      icon: Cpu,
      color: "from-emerald-500/10 to-teal-500/10",
      desc: "Là một xã hội có nền kinh tế hiện đại, phát triển cao gắn liền với sự ứng dụng tiến bộ khoa học kỹ thuật."
    },
    {
      id: 5,
      title: "Phát triển Đạo đức & Văn hóa",
      icon: Sparkles,
      color: "from-purple-500/10 to-violet-500/10",
      desc: "Bảo đảm cả đời sống vật chất và tinh thần của nhân dân, nâng cao trình độ văn hóa, đạo đức xã hội tốt đẹp."
    },
    {
      id: 6,
      title: "Hòa bình & Hữu nghị quốc tế",
      icon: Globe,
      color: "from-cyan-500/10 to-sky-500/10",
      desc: "Chủ trương chung sống hòa bình, xây dựng tình hữu nghị và làm bạn với tất cả các nước tiến bộ trên thế giới."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
          Mục III.2
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
          CNXH là điều kiện để bảo đảm độc lập dân tộc vững chắc
        </h3>
        <p className="text-stone-500 text-xs md:text-sm mt-1">
          Lý giải tại sao chỉ có tiến lên chủ nghĩa xã hội mới giữ vững độc lập dân tộc trường tồn và mang lại tự do thực sự cho đất nước.
        </p>
      </div>

      {/* Hero Quote 1960 */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white p-6 rounded-3xl border border-stone-800 shadow-md relative overflow-hidden">
        <Quote className="w-20 h-20 text-amber-500/5 absolute -top-5 -left-5" />
        <div className="relative z-10 space-y-3">
          <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">
            Khẳng định của Hồ Chí Minh (1960)
          </span>
          <p className="font-serif font-bold text-sm md:text-base leading-relaxed italic text-stone-150">
            &quot;Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được các dân tộc bị áp bức và những người lao động trên thế giới khỏi ách nô lệ.&quot;
          </p>
        </div>
      </div>

      {/* Chế độ Dân chủ & Pháp luật */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4 justify-between flex flex-col">
          <div className="space-y-3">
            <h4 className="font-serif font-black text-stone-900 text-sm md:text-base flex items-center gap-2">
              <ShieldAlert className="w-4.5 h-4.5 text-[var(--accent)]" />
              Bản chất Chế độ Dân chủ là bức tường thành bảo vệ Tổ quốc
            </h4>
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Theo Hồ Chí Minh, CNXH trước hết là một chế độ dân chủ do nhân dân làm chủ dưới sự lãnh đạo của Đảng. Chế độ dân chủ này phải được thể chế hóa bằng pháp luật.
            </p>
          </div>
          <div className="bg-white p-4.5 rounded-2xl border border-stone-200 shadow-sm space-y-2 text-xs leading-normal">
            <div className="font-bold text-stone-800">Ý thức xã hội bảo vệ chủ quyền:</div>
            <p className="text-stone-600">
              Chính quyền của dân, do dân, vì dân tạo ra động lực và nền tảng ý thức xã hội mạnh mẽ nhất để nhân dân kiên quyết đấu tranh chống lại mọi âm mưu xâm lược, thôn tính hay đe dọa độc lập của các thế lực bên ngoài.
            </p>
          </div>
        </div>

        <div className="p-5.5 rounded-3xl bg-[rgba(var(--accent-rgb),0.03)] border border-stone-200 flex flex-col justify-center space-y-3.5">
          <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
            <Bookmark className="w-4.5 h-4.5 text-[var(--accent)]" />
            Nhận thức tổng quan
          </h5>
          <ul className="space-y-2.5 text-stone-700 text-xs md:text-sm pl-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>Cách mạng giải phóng dân tộc phải đi theo định hướng XHCN thì mới giành được thắng lợi triệt để.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>Xây dựng CNXH là xây dựng cơ sở phát triển đất nước vững bền trên tất cả các lĩnh vực kinh tế, chính trị, quốc phòng.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 6 Đặc trưng của xã hội XHCN tốt đẹp (Interactive Bento Grid) */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4.5 h-4.5 text-[var(--accent)]" />
            6 Đặc trưng của một xã hội XHCN tốt đẹp (Click xem mô tả)
          </h5>
          <span className="text-[10px] text-stone-400 font-bold">
            Không còn chế độ áp bức bóc lột
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feat) => {
            const IconComponent = feat.icon;
            const isOpen = activeCard === feat.id;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveCard(isOpen ? null : feat.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[140px] animate-card ${
                  isOpen 
                    ? "bg-white border-[var(--accent)] ring-2 ring-[rgba(var(--accent-rgb),0.1)] shadow-sm"
                    : "bg-stone-50 border-stone-200/85 hover:bg-white hover:border-stone-300"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`p-1.5 rounded-lg bg-gradient-to-br ${feat.color} text-stone-800`}>
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-stone-400 font-black">0{feat.id}</span>
                  </div>
                  <h6 className="font-serif font-black text-stone-900 text-xs md:text-sm">
                    {feat.title}
                  </h6>
                </div>

                <div className="mt-3 relative min-h-[40px]">
                  {isOpen ? (
                    <p className="text-stone-750 text-[11px] md:text-xs leading-normal animate-card">
                      {feat.desc}
                    </p>
                  ) : (
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider font-bold pt-2 border-t border-stone-100/50">
                      Bấm để mở rộng
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tầm vóc và giá trị quốc tế */}
      <div className="bg-stone-900 text-stone-200 p-6 rounded-3xl border border-stone-850 space-y-4">
        <h5 className="font-serif font-black text-amber-500 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4.5 h-4.5" />
          Giá trị hiện thực và tầm vóc quốc tế
        </h5>
        
        <p className="text-stone-350 text-xs leading-relaxed">
          Xây dựng thành công chủ nghĩa xã hội ở Việt Nam không chỉ đem lại cuộc sống phồn vinh cho nhân dân Việt Nam mà còn mang giá trị thời đại to lớn:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
            <h6 className="font-bold text-amber-400 uppercase text-[10px] tracking-wider">Tấm gương giải phóng dân tộc</h6>
            <p className="text-stone-300 leading-relaxed text-[11px] md:text-xs">
              Là tấm gương thực tiễn định hướng con đường phát triển đi lên cho các quốc gia vừa giành lại độc lập dân tộc trên thế giới.
            </p>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
            <h6 className="font-bold text-amber-400 uppercase text-[10px] tracking-wider">Bảo vệ hòa bình thế giới</h6>
            <p className="text-stone-300 leading-relaxed text-[11px] md:text-xs">
              Sự lớn mạnh của chủ nghĩa xã hội Việt Nam góp phần hạn chế các cuộc chiến tranh phi nghĩa, củng cố nền hòa bình bền vững toàn cầu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
