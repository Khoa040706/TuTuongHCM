"use client";
import React, { useRef } from "react";
import { 
  Briefcase, 
  FileCheck, 
  Network, 
  Sparkles, 
  Award,
  Target
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdConferenceResolutions() {
  const containerRef = useRef(null);

  const decisions = [
    {
      title: "Hợp nhất tổ chức",
      icon: Briefcase,
      desc: "Các đại biểu đồng ý xóa bỏ mọi thành kiến xung đột cũ, hợp nhất thành một chính đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam.",
      badge: "Xóa bỏ biệt lập, quy về một mối"
    },
    {
      title: "Cương lĩnh đầu tiên",
      icon: FileCheck,
      desc: "Hội nghị thông qua các văn kiện vắn tắt do Nguyễn Ái Quốc soạn thảo (Chánh cương, Sách lược, Chương trình, Điều lệ vắn tắt). Đảng xác định mục tiêu đánh đổ tư bản, đế quốc, phong kiến để thực hiện xã hội cộng sản.",
      badge: "Thông qua Cương lĩnh chính trị đầu tiên"
    },
    {
      title: "Hệ thống tổ chức",
      icon: Network,
      desc: "Quyết định cử một Ban Trung ương lâm thời, xây dựng hệ thống tổ chức chặt chẽ từ chi bộ đến Trung ương, đồng thời thành lập các đoàn thể quần chúng (công hội, nông hội...) và các cơ quan báo chí cách mạng.",
      badge: "Xây dựng hệ thống tổ chức chặt chẽ"
    },
    {
      title: "Hoàn thành trọn vẹn",
      icon: Sparkles,
      desc: "Đến ngày 24-2-1930, Đông Dương Cộng sản Liên đoàn cũng chính thức được kết nạp vào Đảng Cộng sản Việt Nam.",
      badge: "Hợp nhất trọn vẹn cả 3 tổ chức"
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".res-node",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-8">
      
      {/* Decisions Grid */}
      <div className="res-node">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            📝 Quyết sách & Văn kiện thông qua
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decisions.map((dec, idx) => {
            const IconComp = dec.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                      {dec.title}
                    </h6>
                  </div>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify mb-4">
                    {dec.desc}
                  </p>
                </div>
                
                <div className="text-[10px] font-bold text-red-850 bg-red-50 border border-red-100/60 px-2.5 py-1 rounded-lg w-fit">
                  🔑 {dec.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Historical Significance Callout */}
      <div className="res-node">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            🏆 Ý nghĩa lịch sử
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Award className="w-24 h-24 text-amber-950" />
          </div>
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-2.5">
                <span>Tầm vóc Đại hội thành lập Đảng</span>
              </div>
              
              <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-2">
                Chấm dứt sự phân tán cách mạng
              </h5>
              
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Hội nghị có giá trị như một Đại hội thành lập Đảng, hoàn thành xuất sắc sứ mệnh chấm dứt tình trạng phân tán về tổ chức và thống nhất các lực lượng cách mạng Việt Nam dưới một triết lý đúng đắn và một tổ chức tiên phong duy nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
