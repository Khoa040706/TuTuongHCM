"use client";
import React, { useRef } from "react";
import { 
  Zap, 
  Share2, 
  FileHeart, 
  Compass, 
  Trophy, 
  Bookmark
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdHistorySignificance() {
  const containerRef = useRef(null);

  const points = [
    {
      title: "Tạo bước ngoặt lịch sử vĩ đại",
      icon: Zap,
      themeColor: "border-t-red-800 bg-red-500/5",
      badgeColor: "bg-red-50 text-red-800 border-red-100",
      desc: "Sự ra đời của Đảng đã chấm dứt hoàn toàn thời kỳ khủng hoảng, bế tắc về đường lối cứu nước và giai cấp lãnh đạo. Sự kiện này đưa cách mạng Việt Nam bước sang kỷ nguyên mới, trở thành một bộ phận khăng khít của phong trào cách mạng vô sản thế giới."
    },
    {
      title: "Sản phẩm của sự kết hợp quy luật",
      icon: Share2,
      themeColor: "border-t-amber-600 bg-amber-500/5",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-100",
      desc: "Đảng là sự kết hợp nhuần nhuyễn giữa chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh với phong trào công nhân và phong trào yêu nước Việt Nam. Sự kiện này là minh chứng cho thấy giai cấp vô sản Việt Nam đã trưởng thành và đủ năng lực lãnh đạo cách mạng."
    },
    {
      title: "Giá trị độc đáo của Cương lĩnh đầu tiên",
      icon: FileHeart,
      themeColor: "border-t-emerald-600 bg-emerald-500/5",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100",
      desc: "Cương lĩnh chính trị đầu tiên được thông qua đã phản ánh đúng quy luật khách quan, đáp ứng trúng những nhu cầu cơ bản, cấp bách của xã hội và phù hợp với xu thế thời đại. Đây là kết quả của việc vận dụng sáng tạo chủ nghĩa Mác-Lênin vào thực tiễn Việt Nam."
    },
    {
      title: "Sự lựa chọn dứt khoát của lịch sử",
      icon: Compass,
      themeColor: "border-t-blue-600 bg-blue-500/5",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-100",
      desc: "Đảng ra đời khẳng định dân tộc Việt Nam dứt khoát lựa chọn con đường cách mạng vô sản. Đây là con đường duy nhất đúng đắn để giải phóng dân tộc, giải phóng giai cấp và giải phóng con người, phù hợp với xu thế thời đại mới mở ra sau Cách mạng Tháng Mười Nga."
    },
    {
      title: "Nhân tố quyết định mọi thắng lợi",
      icon: Trophy,
      themeColor: "border-t-purple-600 bg-purple-500/5",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-100",
      desc: "Kể từ năm 1930, Đảng Cộng sản Việt Nam chính thức trở thành nhân tố hàng đầu quyết định, dẫn dắt cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác."
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".significance-card",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {points.map((pt, idx) => {
          const IconComp = pt.icon;
          return (
            <div 
              key={idx}
              className={`significance-card bg-white border border-stone-200 rounded-2xl p-6 shadow-sm border-t-4 ${pt.themeColor} flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group overflow-hidden ${
                idx >= 3 ? "md:col-span-1" : ""
              }`}
            >
              {/* Background Watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <Bookmark className="w-20 h-20 text-stone-900" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 duration-300 ${pt.badgeColor}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase leading-snug">
                    {pt.title}
                  </h6>
                </div>

                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify mb-4">
                  {pt.desc}
                </p>
              </div>

              <div className="text-[10px] font-black text-stone-400 bg-stone-50 border border-stone-150/60 px-2.5 py-1 rounded-lg w-fit">
                📌 Mốc ý nghĩa {idx + 1}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
