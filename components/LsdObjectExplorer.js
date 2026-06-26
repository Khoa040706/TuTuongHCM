"use client";
import React, { useRef } from "react";
import { CalendarRange, ScrollText, PlayCircle, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdObjectExplorer() {
  const containerRef = useRef(null);

  const pillars = [
    {
      id: "events",
      title: "1. Các sự kiện lịch sử Đảng",
      icon: CalendarRange,
      iconColor: "text-red-600 bg-red-50 border-red-100",
      accentBorder: "group-hover:border-red-400",
      bullets: [
        "<strong>Hệ thống sự kiện:</strong> Nghiên cứu sâu sắc, toàn diện các sự kiện gắn liền với quá trình Đảng ra đời, lãnh đạo sự nghiệp giải phóng dân tộc, kháng chiến và xây dựng đất nước trên mọi lĩnh vực.",
        "<strong>Sự phân biệt cần thiết:</strong> Cần phân biệt rõ sự kiện lịch sử Đảng (gắn trực tiếp với sự lãnh đạo của Đảng) với các sự kiện lịch sử dân tộc và lịch sử quân sự trong cùng thời kỳ.",
        "<strong>Tính chân thực & khách quan:</strong> Tái hiện sinh động những thắng lợi oanh liệt, thành tựu lớn lao lẫn những khó khăn, thách thức, tổn thất và hy sinh dựa trên tư liệu lịch sử chính xác."
      ]
    },
    {
      id: "documents",
      title: "2. Cương lĩnh, đường lối, chủ trương",
      icon: ScrollText,
      iconColor: "text-amber-600 bg-amber-50 border-amber-100",
      accentBorder: "group-hover:border-amber-400",
      bullets: [
        "<strong>Hệ thống văn kiện gốc:</strong> Nghiên cứu các văn kiện mang tính bước ngoặt như Cương lĩnh chính trị đầu tiên (2-1930), Luận cương (10-1930), Chính cương (2-1951), Cương lĩnh 1991 (bổ sung 2011).",
        "<strong>Cơ sở lý luận & thực tiễn:</strong> Làm sáng tỏ nội dung, giá trị thực tiễn của đường lối cách mạng; khẳng định đường lối đúng đắn là điều kiện tiên quyết quyết định mọi thắng lợi.",
        "<strong>Bổ sung & phát triển:</strong> Đường lối phải liên tục được cập nhật, phát triển sáng tạo theo yêu cầu thực tiễn cuộc sống nhằm chống nguy cơ sai lầm gây đổ vỡ."
      ]
    },
    {
      id: "action",
      title: "3. Chỉ đạo và tổ chức thực tiễn",
      icon: PlayCircle,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      accentBorder: "group-hover:border-emerald-400",
      bullets: [
        "<strong>Hiện thực hóa đường lối:</strong> Làm rõ quá trình đưa đường lối vào cuộc sống qua các mốc son chói lọi như Cách mạng Tháng Tám (1945), hai cuộc kháng chiến bảo vệ Tổ quốc và công cuộc đổi mới.",
        "<strong>Bài học kinh nghiệm:</strong> Thẳng thắn nhìn nhận những khuyết điểm, hạn chế để rút ra bài học thực tiễn, từ đó tìm ra quy luật riêng của cách mạng Việt Nam nhằm nâng cao trí tuệ.",
        "<strong>Giáo dục truyền thống:</strong> Thể hiện việc vận dụng sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh và giáo dục các truyền thống tốt đẹp (kiên cường, đoàn kết, gắn bó mật thiết với dân)."
      ]
    },
    {
      id: "organization",
      title: "4. Hệ thống tổ chức & xây dựng Đảng",
      icon: ShieldCheck,
      iconColor: "text-blue-600 bg-blue-50 border-blue-100",
      accentBorder: "group-hover:border-blue-400",
      bullets: [
        "<strong>Chính trị & tư tưởng:</strong> Bảo đảm tính đúng đắn của đường lối, nâng cao bản lĩnh chính trị nội bộ; lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tinh thần.",
        "<strong>Xây dựng về tổ chức:</strong> Phát triển toàn diện hệ thống tổ chức, kiện toàn đội ngũ cán bộ, đảng viên và nghiêm túc tuân thủ các nguyên tắc tổ chức cơ bản.",
        "<strong>Xây dựng về đạo đức:</strong> Rèn luyện chuẩn mực đạo đức cách mạng, chủ động ngăn chặn và đẩy lùi sự suy thoái về tư tưởng, đạo đức, lối sống của một bộ phận cán bộ, đảng viên."
      ]
    }
  ];

  // GSAP Entrance Animation
  useGSAP(() => {
    gsap.fromTo(".pillar-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", stagger: 0.08 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p) => {
          const IconComp = p.icon;
          return (
            <div
              key={p.id}
              className={`pillar-card group bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-stone-250 ${p.accentBorder}`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.iconColor}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h5 className="text-sm md:text-base font-bold text-stone-900 group-hover:text-red-700 transition-colors">
                  {p.title}
                </h5>
              </div>

              {/* Card Bullets */}
              <ul className="space-y-3 pl-1 font-sans">
                {p.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-xs md:text-sm text-stone-650 leading-relaxed list-none relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-stone-400 before:font-bold"
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
