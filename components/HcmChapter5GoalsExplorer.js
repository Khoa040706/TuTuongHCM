"use client";
import React, { useState, useRef } from "react";
import { 
  BookOpen, 
  Award, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Globe,
  TrendingUp,
  Compass
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmChapter5GoalsExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "1. Về kiến thức", icon: BookOpen, accentColor: "amber" },
    { title: "2. Về kỹ năng", icon: Award, accentColor: "orange" },
    { title: "3. Về tư tưởng", icon: ShieldCheck, accentColor: "emerald" }
  ];

  // GSAP Animation when activeTab changes
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".goal-panel-node-hcm5") : document.querySelectorAll(".goal-panel-node-hcm5");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* Decorative Header Block */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(245, 158, 11, 0.03) 50%, rgba(255, 255, 255, 0.95) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.18)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.03)]"
      >
        {/* Subtle Decorative Ambient Glow Overlay */}
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10.5px] font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Mục tiêu chương học</span>
          </div>

          <h4 className="text-xl md:text-2xl lg:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            MỤC TIÊU CHƯƠNG V
          </h4>

          <p className="text-xs md:text-sm font-bold text-amber-800 uppercase tracking-wide">
            TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC VÀ ĐOÀN KẾT QUỐC TẾ
          </p>

          <p className="text-xs md:text-sm text-stone-600 font-medium leading-relaxed max-w-3xl text-justify">
            Trang bị nhận thức lý luận toàn diện, rèn luyện kỹ năng thực tiễn và củng cố niềm tin vững chắc của sinh viên vào khối Đại đoàn kết toàn dân tộc cùng tinh thần Đoàn kết quốc tế chân chính trong thời kỳ Đổi mới.
          </p>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap border-b border-stone-200/80 pb-3 gap-2.5 select-none">
        {tabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive 
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-[1.02]" 
                  : "bg-white hover:bg-stone-100/80 text-stone-600 hover:text-stone-900 border border-stone-200/80"
              }`}
            >
              <TabIcon className={`w-4 h-4 ${isActive ? "text-yellow-300" : "text-amber-600"}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels Content */}
      <div className="goal-panel-node-hcm5 min-h-[250px]">
        
        {/* PANEL 0: VỀ KIẾN THỨC */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {/* Primary Callout Box - Official Textbook Quotation */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border-l-4 border-amber-600 shadow-sm space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Nội dung Giáo trình chính thức
              </span>
              <p className="text-stone-800 text-sm md:text-base leading-relaxed font-bold italic text-justify pt-1">
                &ldquo;1. Về kiến thức: Trang bị cho sinh viên những quan điểm cơ bản của tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc, đoàn kết quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại và sự vận dụng của Đảng Cộng sản Việt Nam vào sự nghiệp đổi mới đất nước.&rdquo;
              </p>
            </div>

            {/* Core Knowledge Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-amber-700">
                  <Users className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Đại đoàn kết toàn dân tộc</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Nắm vững vai trò, lực lượng (nòng cốt là liên minh công - nông - trí thức) và hình thức tổ chức Mặt trận dân tộc thống nhất.
                </p>
              </div>

              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-amber-700">
                  <Globe className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Đoàn kết quốc tế</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Hiểu rõ tính tất yếu, lực lượng đoàn kết, hình thức liên minh và các nguyên tắc đoàn kết quốc tế chân chính có lý có tình.
                </p>
              </div>

              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-amber-700">
                  <TrendingUp className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Sức mạnh thời đại & Đổi mới</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Lý giải cơ sở kết hợp sức mạnh dân tộc với sức mạnh thời đại và sự vận dụng sáng tạo của Đảng trong sự nghiệp Đổi mới.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 1: VỀ KỸ NĂNG */}
        {activeTab === 1 && (
          <div className="space-y-6">
            {/* Primary Callout Box - Official Textbook Quotation */}
            <div className="p-6 rounded-2xl bg-orange-50/70 border-l-4 border-orange-500 shadow-sm space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-800 bg-orange-100 px-2 py-0.5 rounded">
                Nội dung Giáo trình chính thức
              </span>
              <p className="text-stone-800 text-sm md:text-base leading-relaxed font-bold italic text-justify pt-1">
                &ldquo;2. Về kỹ năng: Góp phần làm cho sinh viên rèn luyện kỹ năng vận dụng tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế vào trong cuộc sống giai đoạn hiện nay.&rdquo;
              </p>
            </div>

            {/* Practical Skill Application Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-orange-700">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Kỹ năng xây dựng khối đoàn kết tập thể</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Biết tạo dựng sự đồng thuận, tinh thần hỗ trợ giúp đỡ lẫn nhau trong học tập, sinh hoạt chi đoàn, cộng đồng dân cư và tổ chức xã hội.
                </p>
              </div>

              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-orange-700">
                  <Compass className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Kỹ năng hội nhập quốc tế</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Chủ động mở rộng giao lưu văn hóa, học hỏi tri thức khoa học tiên tiến, quảng bá hình ảnh đất nước và giữ vững bản sắc dân tộc.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 2: VỀ TƯ TƯỞNG */}
        {activeTab === 2 && (
          <div className="space-y-6">
            {/* Primary Callout Box - Official Textbook Quotation */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-600 shadow-sm space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Nội dung Giáo trình chính thức
              </span>
              <p className="text-stone-800 text-sm md:text-base leading-relaxed font-bold italic text-justify pt-1">
                &ldquo;3. Về tư tưởng: Củng cố niềm tin của sinh viên vào khối đại đoàn kết toàn dân tộc đoàn kết quốc tế và sự kết hợp sức mạnh dân tộc Việt Nam với sức mạnh thời đại trong sự nghiệp đổi mới theo tư tưởng Hồ Chí Minh.&rdquo;
              </p>
            </div>

            {/* Ideological Awareness Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-700">
                  <ShieldCheck className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Củng cố niềm tin chiến lược</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Tuyệt đối tin tưởng vào đường lối đại đoàn kết của Đảng và Nhà nước; coi đoàn kết là chiến lược lâu dài, là sinh mệnh của dân tộc.
                </p>
              </div>

              <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="w-4.5 h-4.5" />
                  <h6 className="font-bold text-xs md:text-sm text-stone-900">Đấu tranh chống tư tưởng chia rẽ</h6>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed text-justify">
                  Tăng cường cảnh giác, kiên quyết phê phán các âm mưu chia rẽ dân tộc, tôn giáo, kì thị phân biệt hoặc cục bộ hẹp hòi.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
