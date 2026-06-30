"use client";
import React, { useRef } from "react";
import { FileText, History, TrendingUp, Users } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdTasksExplorer() {
  const containerRef = useRef(null);

  const tasks = [
    {
      id: "policy",
      num: "01",
      title: "1. Trình bày có hệ thống Cương lĩnh, đường lối của Đảng",
      icon: FileText,
      iconColor: "text-red-650 bg-red-50 border-red-100",
      accentBorder: "hover:border-red-500",
      bullets: [
        "Khẳng định và chứng minh giá trị khoa học, giá trị hiện thực của các mục tiêu chiến lược và sách lược cách mạng mà Đảng đề ra từ khi ra đời.",
        "Làm rõ sự kết hợp thống nhất giữa thực tiễn lịch sử với nền tảng lý luận để thúc đẩy tiến trình cách mạng, nhận thức và cải biến đất nước.",
        "Khẳng định tính đúng đắn của sự lựa chọn mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội phù hợp với quy luật tiến hóa."
      ]
    },
    {
      id: "timeline",
      num: "02",
      title: "2. Tái hiện tiến trình lịch sử lãnh đạo, đấu tranh của Đảng",
      icon: History,
      iconColor: "text-amber-600 bg-amber-50 border-amber-100",
      accentBorder: "hover:border-amber-500",
      bullets: [
        "Sử dụng các nguồn tư liệu thành văn và không thành văn để làm rõ sự kiện, làm nổi bật các thời kỳ, giai đoạn và mốc phát triển căn bản.",
        "Làm sáng tỏ vai trò lãnh đạo của Đảng, vai trò và sức mạnh của nhân dân, cùng khối đại đoàn kết toàn dân tộc được khơi dậy từ giai cấp công nhân, nhân dân lao động."
      ]
    },
    {
      id: "summary",
      num: "03",
      title: "3. Tổng kết lịch sử của Đảng",
      icon: TrendingUp,
      iconColor: "text-emerald-650 bg-emerald-50 border-emerald-100",
      accentBorder: "hover:border-emerald-500",
      bullets: [
        "Không dừng lại ở mô tả mà tổng kết từng chặng đường để làm rõ kinh nghiệm (gắn với sự kiện/giai đoạn nhất định) và bài học lịch sử (khái quát cao hơn, gắn với thời kỳ dài hoặc chiến lược).",
        "Làm rõ các quy luật riêng và vấn đề lý luận của cách mạng Việt Nam dựa trên thực tiễn lịch sử theo quan điểm của Chủ tịch Hồ Chí Minh (lý luận chân chính là đem thực tế tổng kết thành kết luận rồi đem chứng minh lại với thực tế).",
        "Khẳng định con đường đi lên chủ nghĩa xã hội ở nước ta ngày càng xác định rõ hơn, phù hợp thực tiễn và xu thế phát triển lịch sử."
      ]
    },
    {
      id: "organization",
      num: "04",
      title: "4. Làm rõ vai trò, sức chiến đấu của hệ thống tổ chức Đảng",
      icon: Users,
      iconColor: "text-blue-650 bg-blue-50 border-blue-100",
      accentBorder: "hover:border-blue-500",
      bullets: [
        "Làm rõ năng lực lãnh đạo và tổ chức thực tiễn của hệ thống tổ chức đảng từ Trung ương đến cơ sở.",
        "Làm nổi bật trí tuệ, tính tiên phong, gương mẫu, bản lĩnh của cán bộ, đảng viên, cùng tấm gương của Chủ tịch Hồ Chí Minh và các nhà lãnh đạo.",
        "Đúc kết giá trị truyền thống, đức hy sinh để làm động lực phát triển và khẳng định niềm tự hào về bản chất tốt đẹp, truyền thống anh hùng của Đảng."
      ]
    }
  ];

  // GSAP Entrance Animation
  useGSAP(() => {
    gsap.fromTo(".task-card",
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((t) => {
          const IconComp = t.icon;
          return (
            <div
              key={t.id}
              className={`task-card group relative bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-stone-300 hover:border-t-red-800 overflow-hidden ${t.accentBorder}`}
            >
              {/* Watermark Number */}
              <span className="absolute top-2 right-4 text-4xl md:text-5xl font-black text-red-500/5 select-none transition-colors group-hover:text-red-800/10">
                {t.num}
              </span>

              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${t.iconColor} transition-transform group-hover:scale-105 duration-300`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h5 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide group-hover:text-red-700 transition-colors pr-6">
                  {t.title}
                </h5>
              </div>

              {/* Card Bullets */}
              <ul className="space-y-3 pl-1 font-sans relative z-10">
                {t.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-xs md:text-sm text-stone-600 leading-relaxed list-none relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-stone-400 before:font-bold"
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
