"use client";
import React, { useState, useRef } from "react";
import { 
  BookOpen, 
  Heart, 
  Award, 
  Target, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Compass
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmChapter4GoalsExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Về kiến thức", icon: BookOpen },
    { title: "Về kỹ năng", icon: Award },
    { title: "Về tư tưởng", icon: ShieldCheck }
  ];

  // GSAP Animation when activeTab changes
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".goal-panel-node-hcm4") : document.querySelectorAll(".goal-panel-node-hcm4");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, [activeTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Decorative Header Block - Light Glassmorphism Synchronized Accent Gradient */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(var(--accent-rgb), 0.1) 0%, rgba(var(--accent-rgb), 0.03) 50%, rgba(255, 255, 255, 0.95) 100%)`,
          borderColor: `rgba(var(--accent-rgb), 0.18)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 mb-8 border shadow-[0_10px_30px_rgba(var(--accent-rgb),0.03)]"
      >
        {/* Subtle Decorative Star Dust / Spark particles (Amber theme) */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-amber-400/20 rounded-full animate-pulse blur-[0.5px]"></div>
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-orange-400/15 rounded-full blur-[1.5px]"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-yellow-300/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-500/15 rounded-full blur-[1px]"></div>
        
        {/* Glow ambient background overlay */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[rgba(var(--accent-rgb),0.06)] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-[rgba(var(--accent-rgb),0.03)] rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Mục tiêu chương học</span>
          </div>
          <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-stone-850">
            MỤC TIÊU CHƯƠNG IV
          </h4>
          <p className="text-xs md:text-sm text-stone-600/95 max-w-2xl font-medium leading-relaxed">
            Thiết lập nền tảng nhận thức lý luận vững vàng và rèn luyện kỹ năng thực tiễn về xây dựng Đảng cầm quyền cùng mô hình Nhà nước pháp quyền xã hội chủ nghĩa thực sự của nhân dân.
          </p>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex border-b border-stone-200/80 pb-3 mb-6 gap-2">
        {tabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive 
                  ? "bg-amber-700 text-white shadow-md shadow-amber-700/10" 
                  : "bg-stone-100 hover:bg-stone-200/60 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className={`w-4 h-4 ${isActive ? "text-yellow-300" : "text-stone-500"}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="goal-panel-node-hcm4 min-h-[250px]">
        
        {/* PANEL 0: KIẾN THỨC */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {/* Callout Box */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-600/70 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Trang bị cho sinh viên kiến thức cơ bản của tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và về Nhà nước Việt Nam Dân chủ Cộng hòa - Nhà nước của nhân dân, do nhân dân, vì nhân dân.&rdquo;
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-amber-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Về Đảng Cộng sản</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Vai trò & Quy luật xây dựng Đảng
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Nắm vững các luận điểm của Bác về sự ra đời tất yếu, bản chất giai cấp công nhân, vai trò lãnh đạo và các nguyên tắc cốt lõi để xây dựng Đảng cầm quyền trong sạch, vững mạnh.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-amber-700 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Lý luận chính trị nền tảng</span>
                </div>
              </div>

              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-orange-500 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">Về Nhà nước mới</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Nhà nước của dân, do dân, vì dân
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Hiểu sâu sắc bản chất dân chủ của Nhà nước Việt Nam Dân chủ Cộng hòa, mối quan hệ hữu cơ giữa chính quyền với nhân dân và phương thức quản trị bằng pháp luật của Bác.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-orange-700 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Bản chất dân chủ nhân dân</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PANEL 1: KỸ NĂNG */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-orange-500/5 border-l-4 border-orange-600 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Góp phần bồi dưỡng cho sinh viên kỹ năng phân tích khoa học những vấn đề về xây dựng Đảng Cộng sản Việt Nam và xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân trong thời kỳ đổi mới đất nước.&rdquo;
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-l-4 border-l-orange-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">Phân tích Lý luận</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Nhìn nhận biện chứng và khoa học
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Rèn luyện kỹ năng phân tích các sự kiện, vấn đề thực tiễn liên quan đến công tác chỉnh đốn Đảng và bộ máy nhà nước dưới lăng kính biện chứng của tư tưởng Hồ Chí Minh.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-orange-700 font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Kỹ năng tư duy độc lập</span>
                </div>
              </div>

              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-l-4 border-l-amber-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Vận dụng thực tiễn</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Đóng góp xây dựng xã hội
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Phát triển năng lực tham gia các hoạt động chính trị - xã hội tại địa phương và nhà trường, góp phần phát huy quyền làm chủ và xây dựng nhà nước pháp quyền vững mạnh.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-amber-700 font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Hành động tích cực</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PANEL 2: TƯ TƯỞNG */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-600 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Góp phần làm cho sinh viên tin tưởng vào sự lãnh đạo của Đảng Cộng sản Việt Nam và sự quản lý của Nhà nước trong giai đoạn phát triển kinh tế thị trường, hội nhập, toàn cầu hóa.&rdquo;
              </div>
            </div>

            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 hover:shadow-md transition-all duration-350 border-l-4 border-l-amber-700">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 mt-1">
                  <ShieldCheck className="w-6 h-6 text-amber-750" />
                </div>
                <div className="space-y-2">
                  <h6 className="text-sm font-bold text-stone-900 font-playfair">
                    Bản lĩnh chính trị & Niềm tin cách mạng vững chắc
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Nuôi dưỡng tình cảm kính yêu đối với Bác Hồ, củng cố lòng yêu nước nồng nàn và niềm tin sắt son vào vai trò chèo lái cách mạng của Đảng Cộng sản Việt Nam. Bồi đắp ý chí tự lực tự cường và tinh thần chủ động đóng góp tích cực cho đất nước trong xu thế hội nhập toàn cầu.
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-[10px] text-amber-800 font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Lý tưởng & Sứ mệnh thanh niên</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
