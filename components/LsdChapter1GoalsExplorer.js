"use client";
import React, { useState, useRef } from "react";
import { 
  BookOpen, 
  Heart, 
  Award, 
  Target, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdChapter1GoalsExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Về kiến thức", icon: BookOpen, accent: "from-red-500 to-amber-600" },
    { title: "Về tư tưởng", icon: Heart, accent: "from-rose-500 to-red-700" },
    { title: "Về kỹ năng", icon: Award, accent: "from-amber-500 to-orange-600" }
  ];

  // GSAP Animation when activeTab changes
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".goal-panel-node") : document.querySelectorAll(".goal-panel-node");
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
      
      {/* Decorative Header Block */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900 to-amber-800 p-6 text-white mb-8 border border-red-800/30 shadow-md">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Target className="w-24 h-24" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Mục tiêu chương học</span>
          </div>
          <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2">
            MỤC TIÊU CHƯƠNG I
          </h4>
          <p className="text-xs md:text-sm text-amber-100/85 max-w-2xl font-medium leading-relaxed">
            Học tập Chương I hướng tới việc trang bị hệ thống tri thức khoa học về sự ra đời của Đảng, bồi đắp niềm tin cách mạng và phát triển tư duy biện chứng lịch sử.
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
                  ? "bg-red-800 text-white shadow-md shadow-red-700/10" 
                  : "bg-stone-100 hover:bg-stone-200/60 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-stone-500"}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="goal-panel-node min-h-[250px]">
        
        {/* PANEL 0: KIẾN THỨC */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {/* Academic Text Callout */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-600/70 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Cung cấp cho sinh viên những tri thức có tính hệ thống quá trình ra đời của Đảng Cộng sản Việt Nam (1920-1930), nội dung cơ bản, giá trị lịch sử của Cương lĩnh chính trị đầu tiên của Đảng và quá trình Đảng lãnh đạo cuộc đấu tranh giải phóng dân tộc, giành chính quyền (1930-1945).&rdquo;
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-red-650 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">Trọng tâm 1</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Sự ra đời của Đảng (1920-1930)
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    Nghiên cứu có hệ thống các điều kiện lịch sử khách quan và nhân tố chủ quan thúc đẩy sự thành lập Đảng Cộng sản Việt Nam.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-amber-500 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Trọng tâm 2</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Cương lĩnh chính trị đầu tiên
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    Phân tích sâu sắc nội dung cơ bản và khẳng định giá trị lịch sử thời đại bền vững của cương lĩnh chính trị đầu tiên.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-md transition-all duration-350 border-t-4 border-t-slate-600 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md">Trọng tâm 3</span>
                  </div>
                  <h6 className="text-sm font-bold text-stone-900 mb-2 font-playfair">
                    Giành chính quyền (1930-1945)
                  </h6>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    Khảo sát tiến trình đấu tranh cách mạng kiên cường dưới sự lãnh đạo của Đảng để tiến tới thắng lợi của CMT8 năm 1945.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PANEL 1: TƯ TƯỞNG */}
        {activeTab === 1 && (
          <div className="space-y-6">
            {/* Academic Text Callout */}
            <div className="p-5 rounded-2xl bg-rose-500/5 border-l-4 border-rose-600/70 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Cung cấp cơ sở lịch sử, góp phần củng cố niềm tin của thế hệ trẻ vào con đường cách mạng giải phóng dân tộc và phát triển đất nước-sự lựa chọn đúng đắn, tất yếu, khách quan của lãnh tụ Nguyễn Ái Quốc và Đảng Cộng sản Việt Nam thời kỳ đầu dựng Đảng.&rdquo;
              </div>
            </div>

            {/* Visual Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="flex gap-3 bg-white p-4 rounded-xl border border-stone-150 hover:shadow-sm transition-all">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-850 mb-1">Củng cố niềm tin cách mạng</h6>
                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                    Xây dựng niềm tin vững chắc cho thế hệ trẻ vào con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội mà Đảng đã vạch ra.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl border border-stone-150 hover:shadow-sm transition-all">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-850 mb-1">Tính tất yếu lịch sử</h6>
                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                    Khẳng định lựa chọn cứu nước của lãnh tụ Nguyễn Ái Quốc và sự ra đời của Đảng là một sự tất yếu, khách quan trong lịch sử dân tộc.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PANEL 2: KỸ NĂNG */}
        {activeTab === 2 && (
          <div className="space-y-6">
            {/* Academic Text Callout */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-500 shadow-sm">
              <div className="text-stone-850 text-xs md:text-sm leading-relaxed font-semibold italic text-justify">
                &ldquo;Từ việc nhận thức lịch sử thời kỳ đầu dựng Đảng, góp phần trang bị cho sinh viên phương pháp nhận thức biện chứng, khách quan về quá trình Đảng ra đời và vai trò lãnh đạo của Đảng trong cuộc đấu tranh giải phóng dân tộc, xác lập chính quyền cách mạng.&rdquo;
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-5 md:p-6 shadow-sm">
              <h6 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">Các kỹ năng cần rèn luyện:</h6>
              <ul className="space-y-4 pl-0">
                <li className="list-none flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-xs md:text-sm text-stone-900 block">Phương pháp luận biện chứng</strong>
                    <span className="text-xs md:text-sm text-stone-600 leading-relaxed">
                      Phát triển khả năng phân tích sự kiện lịch sử dưới góc nhìn biện chứng, sâu sắc, gắn kết nguyên nhân và kết quả.
                    </span>
                  </div>
                </li>
                <li className="list-none flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-xs md:text-sm text-stone-900 block">Nhận thức lịch sử khách quan</strong>
                    <span className="text-xs md:text-sm text-stone-600 leading-relaxed">
                      Đánh giá trung thực, khoa học về vai trò lãnh đạo quyết định của Đảng Cộng sản Việt Nam trong tiến trình giải phóng dân tộc.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
