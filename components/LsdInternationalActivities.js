"use client";
import React, { useRef } from "react";
import { Vote, Globe2, BookOpen, Landmark } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdInternationalActivities() {
  const containerRef = useRef(null);

  const activities = [
    {
      date: "Tháng 12/1920",
      title: "Đại hội Tua & Sáng lập ĐCS Pháp",
      icon: Vote,
      desc: "Tại Đại hội lần thứ XVIII của Đảng Xã hội Pháp (Tua), Người bỏ phiếu tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp và trở thành người cộng sản đầu tiên của Việt Nam.",
      highlight: "Người cộng sản đầu tiên của Việt Nam"
    },
    {
      date: "Tháng 6/1923",
      title: "Hoạt động tại Liên Xô",
      icon: Globe2,
      desc: "Người sang Liên Xô làm việc tại Quốc tế Cộng sản, tham dự Đại hội V Quốc tế Cộng sản (1924) và hoạt động tại Ban Phương Đông.",
      highlight: "Tích lũy thực tiễn cách mạng vô sản"
    },
    {
      date: "Khảo sát & Chuẩn bị",
      title: "Hoàn thiện lý luận giải phóng",
      icon: BookOpen,
      desc: "Sau khi xác định được con đường đúng đắn, Người tiếp tục khảo sát để hoàn thiện nhận thức về cách mạng vô sản, đồng thời tích cực truyền bá chủ nghĩa Mác-Lênin về Việt Nam.",
      highlight: "Truyền bá chủ nghĩa Mác-Lênin"
    }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".activity-card") : document.querySelectorAll(".activity-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {activities.map((act, idx) => {
          const IconComp = act.icon;
          return (
            <div 
              key={idx}
              className="activity-card bg-white border border-stone-200 rounded-2xl p-6 shadow-sm border-t-4 border-t-red-800 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group overflow-hidden"
            >
              {/* Background watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <Landmark className="w-20 h-20 text-red-950" />
              </div>
              
              <div>
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-red-850 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {act.date}
                  </span>
                </div>

                {/* Title */}
                <h6 className="text-sm md:text-base font-bold text-stone-900 mb-3 font-playfair group-hover:text-red-800 transition-colors duration-300">
                  {act.title}
                </h6>

                {/* Text content */}
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify mb-4">
                  {act.desc}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="text-[10px] font-bold text-stone-400 bg-stone-50 border border-stone-150/60 px-2.5 py-1 rounded-lg w-fit mt-auto relative z-10">
                🗝️ {act.highlight}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
