"use client";
import React, { useRef } from "react";
import {
  Shield,
  Scale,
  Globe,
  Home,
  Earth,
  Link2,
  Star,
  Building2,
  Sunrise,
  Zap,
  Flame,
  BookOpen,
  Target,
  Users,
  Swords,
  Award,
  CheckCircle,
  Flag
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdRevolutionSignificance() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".nature-card",
      { opacity: 0, y: 25, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.12 }
    );
    gsap.fromTo(".sig-domestic",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: 0.3 }
    );
    gsap.fromTo(".sig-intl",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(".lesson-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1, delay: 0.5 }
    );
    gsap.fromTo(".chapter-banner",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );
  }, { scope: containerRef });

  /* ─── DỮ LIỆU TÍNH CHẤT ─── */
  const natures = [
    {
      title: "Cách mạng giải phóng dân tộc điển hình",
      icon: Shield,
      gradient: "from-red-900 to-red-700",
      borderColor: "border-t-red-700",
      iconBg: "bg-red-100",
      iconColor: "text-red-800",
      points: [
        "Tập trung giải quyết mâu thuẫn chủ yếu giữa toàn thể dân tộc Việt Nam với đế quốc xâm lược và tay sai.",
        "Lực lượng cách mạng bao gồm toàn dân tộc, đoàn kết chặt chẽ trong Mặt trận Việt Minh với các tổ chức \"Cứu quốc\"."
      ]
    },
    {
      title: "Mang tính chất dân chủ mới",
      icon: Scale,
      gradient: "from-amber-700 to-amber-500",
      borderColor: "border-t-amber-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      points: [
        "Xóa bỏ chế độ quân chủ phong kiến, thành lập chính quyền nhà nước \"của chung toàn dân tộc\" theo hình thức cộng hòa dân chủ.",
        "Giải quyết một số quyền lợi ruộng đất cho nông dân: tịch thu ruộng đất của đế quốc/Việt gian, giảm tô 25%, xóa nợ lưu cữu.",
        "Tuy nhiên, tính chất dân chủ này chưa đầy đủ và sâu sắc vì chưa thực hiện khẩu hiệu \"người cày có ruộng\"."
      ]
    },
    {
      title: "Tính quốc tế và nhân văn sâu sắc",
      icon: Globe,
      gradient: "from-blue-800 to-cyan-600",
      borderColor: "border-t-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      points: [
        "Là một bộ phận của phe dân chủ chống phát xít trên thế giới.",
        "Mang đậm tính nhân văn khi giải phóng con người khỏi ách áp bức dân tộc, bóc lột giai cấp và nô dịch tinh thần."
      ]
    }
  ];

  /* ─── DỮ LIỆU Ý NGHĨA ─── */
  const domesticSignificance = [
    {
      icon: Link2,
      label: "Đập tan xiềng xích",
      text: "Đập tan xiềng xích nô lệ của đế quốc (gần một thế kỷ) và phong kiến (ngót nghìn năm)."
    },
    {
      icon: Building2,
      label: "Lập nước VNDCCH",
      text: "Lập nên nước Việt Nam Dân chủ Cộng hòa — nhà nước công nông đầu tiên ở Đông Nam Á, đưa nhân dân từ thân phận nô lệ thành người làm chủ đất nước."
    },
    {
      icon: Star,
      label: "Đảng cầm quyền",
      text: "Đảng Cộng sản Đông Dương từ hoạt động bí mật trở thành một Đảng cầm quyền."
    },
    {
      icon: Sunrise,
      label: "Kỷ nguyên mới",
      text: "Mở ra kỷ nguyên mới: kỷ nguyên độc lập tự do và hướng tới chủ nghĩa xã hội."
    }
  ];

  const intlSignificance = [
    {
      icon: Zap,
      label: "Đột phá hệ thống thuộc địa",
      text: "Là cuộc cách mạng giải phóng dân tộc lần đầu tiên giành thắng lợi ở một nước thuộc địa, đột phá khâu quan trọng trong hệ thống thuộc địa của chủ nghĩa đế quốc."
    },
    {
      icon: Flame,
      label: "Cổ vũ phong trào thế giới",
      text: "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới."
    },
    {
      icon: BookOpen,
      label: "Chứng minh đường lối đúng đắn",
      text: "Chứng minh tính đúng đắn của đường lối cách mạng giải phóng dân tộc của Đảng và Hồ Chí Minh, làm phong phú thêm kho tàng lý luận Mác-Lênin."
    }
  ];

  /* ─── DỮ LIỆU BÀI HỌC ─── */
  const lessons = [
    {
      title: "Về chỉ đạo chiến lược",
      icon: Target,
      accentColor: "border-l-red-700",
      iconColor: "text-red-700",
      iconBg: "bg-red-50",
      text: "Phải giương cao ngọn cờ giải phóng dân tộc, đặt nhiệm vụ này lên hàng đầu. Các nhiệm vụ cách mạng ruộng đất cần tạm gác lại hoặc rải ra thực hiện từng bước nhằm phục vụ nhiệm vụ chống đế quốc."
    },
    {
      title: "Về xây dựng lực lượng",
      icon: Users,
      accentColor: "border-l-amber-600",
      iconColor: "text-amber-700",
      iconBg: "bg-amber-50",
      text: "Trên cơ sở khối liên minh công nông, khơi dậy tinh thần dân tộc để tập hợp mọi tầng lớp nhân dân trong một mặt trận dân tộc thống nhất rộng rãi (Mặt trận Việt Minh)."
    },
    {
      title: "Về phương pháp cách mạng",
      icon: Swords,
      accentColor: "border-l-emerald-700",
      iconColor: "text-emerald-700",
      iconBg: "bg-emerald-50",
      text: "Nắm vững quan điểm bạo lực cách mạng của quần chúng; kết hợp lực lượng chính trị với lực lượng vũ trang, đấu tranh chính trị với đấu tranh quân sự; đi từ khởi nghĩa từng phần ở nông thôn tiến lên tổng khởi nghĩa ở cả nông thôn và thành thị khi thời cơ đến."
    },
    {
      title: "Về xây dựng Đảng",
      icon: Award,
      accentColor: "border-l-blue-700",
      iconColor: "text-blue-700",
      iconBg: "bg-blue-50",
      text: "Xây dựng một Đảng cách mạng tiên phong vững mạnh về tư tưởng, chính trị và tổ chức; vận dụng sáng tạo chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh; chú trọng vai trò lãnh đạo chiến lược của Trung ương Đảng kết hợp với tính chủ động, sáng tạo của các địa phương."
    }
  ];

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-8">

      {/* ═══════════════════════════════════════════════════════
          KHỐI 1: TÍNH CHẤT — "BA MẶT KIM CƯƠNG"
          ═══════════════════════════════════════════════════════ */}
      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-800 to-red-600 flex items-center justify-center shadow-sm">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <h5 className="text-sm md:text-base font-black text-stone-900 font-playfair uppercase tracking-wide">
            Tính chất của Cách mạng Tháng Tám
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {natures.map((n, idx) => {
            const Icon = n.icon;
            return (
              <div
                key={idx}
                className={`nature-card bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden border-t-4 ${n.borderColor}`}
              >
                {/* Header */}
                <div className="p-4 pb-3">
                  <div className={`w-10 h-10 rounded-xl ${n.iconBg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${n.iconColor}`} />
                  </div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 leading-snug">
                    {n.title}
                  </h6>
                </div>

                {/* Content */}
                <div className="px-4 pb-4 space-y-2">
                  {n.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 ${n.iconColor} flex-shrink-0 mt-0.5`} />
                      <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          KHỐI 2: Ý NGHĨA LỊCH SỬ — "SÓNG LAN TỎA ĐỘC LẬP"
          ═══════════════════════════════════════════════════════ */}
      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center shadow-sm">
            <Flag className="w-4 h-4 text-white" />
          </div>
          <h5 className="text-sm md:text-base font-black text-stone-900 font-playfair uppercase tracking-wide">
            Ý nghĩa lịch sử
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Panel trái — TRONG NƯỚC */}
          <div className="sig-domestic bg-gradient-to-br from-red-50 via-amber-50/50 to-orange-50/30 border border-red-200/60 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Home className="w-4 h-4 text-red-700" />
              <span className="text-xs font-black text-red-800 uppercase tracking-wider">
                🏠 Đối với trong nước
              </span>
            </div>

            {domesticSignificance.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm border border-red-100/80 rounded-xl p-3 hover:bg-white/90 transition-colors duration-200">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-red-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-red-700/80 uppercase tracking-wider block mb-0.5">{item.label}</span>
                    <p className="text-[11px] md:text-xs text-stone-700 leading-relaxed text-justify">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Panel phải — QUỐC TẾ */}
          <div className="sig-intl bg-gradient-to-br from-blue-50 via-cyan-50/50 to-indigo-50/30 border border-blue-200/60 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Earth className="w-4 h-4 text-blue-700" />
              <span className="text-xs font-black text-blue-800 uppercase tracking-wider">
                🌍 Đối với quốc tế
              </span>
            </div>

            {intlSignificance.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm border border-blue-100/80 rounded-xl p-3 hover:bg-white/90 transition-colors duration-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-blue-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-blue-700/80 uppercase tracking-wider block mb-0.5">{item.label}</span>
                    <p className="text-[11px] md:text-xs text-stone-700 leading-relaxed text-justify">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          KHỐI 3: BÀI HỌC KINH NGHIỆM — "BỐN TRỤ CỘT"
          ═══════════════════════════════════════════════════════ */}
      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-700 to-emerald-500 flex items-center justify-center shadow-sm">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <h5 className="text-sm md:text-base font-black text-stone-900 font-playfair uppercase tracking-wide">
            Bài học kinh nghiệm
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson, idx) => {
            const Icon = lesson.icon;
            return (
              <div
                key={idx}
                className={`lesson-card bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${lesson.accentColor}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${lesson.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${lesson.iconColor}`} />
                  </div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-900">
                    {lesson.title}
                  </h6>
                </div>
                <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify">
                  {lesson.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BANNER KẾT THÚC CHƯƠNG I
          ═══════════════════════════════════════════════════════ */}
      <div className="chapter-banner relative mt-4">
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-amber-800 rounded-2xl p-6 md:p-8 text-center shadow-lg overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Top ornamental line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-400/60" />
              <Star className="w-4 h-4 text-amber-400" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>

            <p className="text-amber-300/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Hoàn thành
            </p>
            <h4 className="text-lg md:text-xl font-black text-white font-playfair tracking-wide">
              KẾT THÚC CHƯƠNG I
            </h4>
            <p className="text-amber-200/70 text-xs md:text-sm mt-2 max-w-lg mx-auto leading-relaxed">
              Đảng Cộng sản Việt Nam ra đời và lãnh đạo đấu tranh giành chính quyền (1930 — 1945)
            </p>

            {/* Bottom ornamental line */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-400/60" />
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
