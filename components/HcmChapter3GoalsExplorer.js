"use client";
import React, { useState, useRef } from "react";
import { 
  BookOpen, 
  Heart, 
  Award, 
  Target, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert,
  HelpCircle
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmChapter3GoalsExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Về kiến thức", icon: BookOpen, accent: "from-amber-500 to-orange-650" },
    { title: "Về kỹ năng", icon: Award, accent: "from-orange-500 to-red-600" },
    { title: "Về tư tưởng", icon: Heart, accent: "from-amber-600 to-yellow-600" }
  ];

  // GSAP Animation when activeTab changes
  useGSAP(() => {
    gsap.fromTo(".goal-panel-node-hcm",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, [activeTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Decorative Header Block */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-800 via-orange-800 to-amber-700 p-6 text-white mb-8 border border-amber-800/30 shadow-md">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Target className="w-24 h-24" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Mục tiêu chương học</span>
          </div>
          <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2">
            MỤC TIÊU CHƯƠNG III
          </h4>
          <p className="text-xs md:text-sm text-amber-100/85 max-w-2xl font-medium leading-relaxed">
            Nắm vững mục tiêu học tập giúp người học củng cố nền tảng lý luận, phát triển các kỹ năng thực tiễn và xây dựng niềm tin cách mạng vững chắc đối với sự nghiệp xây dựng xã hội chủ nghĩa.
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
      <div className="goal-panel-node-hcm min-h-[250px]">
        
        {/* PANEL 0: KIẾN THỨC */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {/* Callout Box */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-600/70 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Trang bị cho sinh viên nhận thức khoa học sâu sắc về độc lập dân tộc và chủ nghĩa xã hội – hai trục cốt lõi xuyên suốt di sản lý luận Hồ Chí Minh.&rdquo;
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-amber-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Yêu cầu 1</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Bản chất Khoa học & Cách mạng
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    Giúp cho sinh viên nhận thức được bản chất khoa học, cách mạng và những sáng tạo độc đáo trong tư tưởng Hồ Chí Minh về độc lập dân tộc và cách mạng giải phóng dân tộc.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-amber-700 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã tối ưu hóa bài giảng</span>
                </div>
              </div>

              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-orange-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">Yêu cầu 2</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Tính quy luật của Cách mạng Việt Nam
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    Giúp cho sinh viên nắm chắc tính quy luật tất yếu của sự nghiệp cách mạng nước nhà: Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-orange-700 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tính quy luật biện chứng</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PANEL 1: KỸ NĂNG */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-orange-500/5 border-l-4 border-orange-650 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Rèn luyện tư duy phê phán lý luận khoa học, củng cố năng lực phản bác các luận điệu xuyên tạc lịch sử cách mạng.&rdquo;
              </div>
            </div>

            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 hover:shadow-md transition-all duration-350 border-l-4 border-l-orange-600">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h6 className="text-sm font-bold text-stone-900 font-playfair">
                    Nhận diện và Phản bác luận điểm xuyên tạc
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Giúp cho sinh viên có khả năng tự nhận diện một cách nhanh chóng và có cơ sở lý luận vững vàng để phản bác được những luận điểm xuyên tạc tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 2: TƯ TƯỞNG */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-amber-600/5 border-l-4 border-amber-600 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Bồi đắp lòng yêu nước và ý chí cống hiến cách mạng cho thế hệ trẻ trong kỷ nguyên mới.&rdquo;
              </div>
            </div>

            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 hover:shadow-md transition-all duration-350 border-l-4 border-l-amber-600">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h6 className="text-sm font-bold text-stone-900 font-playfair">
                    Lòng tự hào và Niềm tin cách mạng
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                    Giúp cho sinh viên thêm tự hào sâu sắc về sức mạnh vĩ đại của khối đại đoàn kết dân tộc, đồng thời tin tưởng tuyệt đối vào sự nghiệp cách mạng xã hội chủ nghĩa ở Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
