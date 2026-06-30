"use client";
import React, { useState, useRef } from "react";
import { 
  Lightbulb, 
  Target, 
  Users2, 
  BookOpen, 
  Compass, 
  Shield, 
  Flame, 
  FileSpreadsheet, 
  GraduationCap, 
  Layers,
  Quote
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdRevolutionPreparations() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Chuẩn bị về Tư tưởng", icon: Lightbulb },
    { title: "Chuẩn bị về Chính trị", icon: Target },
    { title: "Chuẩn bị về Tổ chức", icon: Users2 }
  ];

  useGSAP(() => {
    gsap.fromTo(".prep-panel-node",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, [activeTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Tabs selector */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200/80 pb-3 mb-6">
        {tabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive 
                  ? "bg-red-800 text-white shadow-md shadow-red-700/10" 
                  : "bg-stone-100 hover:bg-stone-200/60 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Panels */}
      <div className="prep-panel-node min-h-[300px]">
        
        {/* TAB 0: TƯ TƯỞNG */}
        {activeTab === 0 && (
          <div className="space-y-6">
            
            {/* Truyền bá lý luận */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-red-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
                    Truyền bá lý luận vô sản
                  </h6>
                </div>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Từ giữa năm 1921, Nguyễn Ái Quốc tham gia thành lập Hội liên hiệp thuộc địa, sáng lập báo <em>Le Paria</em>, và viết bài cho nhiều báo lớn như <em>Nhân đạo</em>, <em>Đời sống công nhân</em>... nhằm tố cáo chủ nghĩa thực dân, thức tỉnh nhân dân thuộc địa và tuyên truyền con đường cách mạng vô sản.
                </p>
              </div>
            </div>

            {/* Golden Quote Card: Cốt lõi lý luận */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Quote className="w-20 h-20 text-amber-950" />
              </div>
              <div className="relative z-10">
                
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-3">
                  <span>✨</span>
                  <span>Cốt lõi lý luận cách mạng</span>
                </div>

                <div className="relative pl-6 border-l-2 border-amber-400 italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify mb-4">
                  &ldquo;Đảng muốn vững phải có chủ nghĩa làm cốt, trong Đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam.&rdquo;
                  <div className="text-right font-bold mt-2 not-italic text-[10px] text-amber-800 tracking-wide uppercase">
                    — Nguyễn Ái Quốc (Đường Kách mệnh, 1927)
                  </div>
                </div>

                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Khẳng định chủ nghĩa Mác - Lênin là cốt lõi lý luận. Tư tưởng vô sản được Người tích cực truyền bá vào phong trào công nhân và phong trào yêu nước Việt Nam.
                </p>

              </div>
            </div>

          </div>
        )}

        {/* TAB 1: CHÍNH TRỊ */}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Đường lối */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                  Xác định đường lối chiến lược
                </h6>
              </div>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Người vạch rõ cách mạng giải phóng dân tộc ở thuộc địa là một bộ phận của cách mạng vô sản thế giới, gắn giải phóng dân tộc với giải phóng giai cấp, hướng tới xây dựng nhà nước của nhân dân.
              </p>
            </div>

            {/* Tính chủ động */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-amber-600 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100 flex-shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                  Tính chủ động của cách mạng thuộc địa
                </h6>
              </div>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Người chỉ ra cách mạng thuộc địa không phụ thuộc vào cách mạng ở &ldquo;chính quốc&rdquo; mà có thể thành công trước, góp phần thúc đẩy cách mạng ở chính quốc.
              </p>
            </div>

            {/* Lực lượng */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-emerald-600 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0">
                  <Users2 className="w-4 h-4" />
                </div>
                <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                  Xác định lực lượng cách mạng
                </h6>
              </div>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Khẳng định công nông là &ldquo;gốc của cách mệnh&rdquo;, còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là &ldquo;bầu bạn cách mệnh&rdquo;. Cách mạng phải là việc chung của cả dân chúng.
              </p>
            </div>

            {/* Vô sản hóa */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-stone-600 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center border border-stone-200 flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                  Phong trào &ldquo;Vô sản hóa&rdquo;
                </h6>
              </div>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Phát động từ cuối năm 1928, giúp cán bộ tự rèn luyện trong thực tiễn, đồng thời truyền bá mạnh mẽ tư tưởng vô sản vào phong trào đấu tranh của giai cấp công nhân.
              </p>
            </div>

          </div>
        )}

        {/* TAB 2: TỔ CHỨC */}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Tổ chức tiền thân */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-t-2 border-t-red-800">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded bg-red-50 text-red-850 flex items-center justify-center border border-red-100 flex-shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Tổ chức tiền thân</span>
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 mb-2 font-playfair">Hội VN Cách mạng Thanh niên</h6>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Tháng 2/1925, Người lập nhóm <em>Cộng sản đoàn</em>. Đến tháng 6/1925, Người thành lập <em>Hội Việt Nam Cách mạng Thanh niên</em> tại Quảng Châu, xây dựng hệ thống tổ chức chặt chẽ 5 cấp. Đây là tổ chức tiền thân trực tiếp của Đảng.
              </p>
            </div>

            {/* Huấn luyện */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-t-2 border-t-amber-600">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100 flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Đào tạo nhân lực</span>
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 mb-2 font-playfair">Huấn luyện cán bộ tại Quảng Châu</h6>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Từ năm 1925 đến 1927, các lớp huấn luyện chính trị do Nguyễn Ái Quốc trực tiếp phụ trách tại Quảng Châu đã đào tạo lý luận cho nhiều thanh niên yêu nước tích cực, chuẩn bị hạt giống đỏ cho cách mạng.
              </p>
            </div>

            {/* Sách báo */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-t-2 border-t-emerald-600">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Truyền thông cách mạng</span>
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 mb-2 font-playfair">Báo Thanh niên & Đường Kách mệnh</h6>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Sáng lập tuần báo <em>Thanh niên</em> (6/1925) và xuất bản cuốn sách chính trị đầu tiên <em>Đường Kách mệnh</em> (1927) để vạch rõ con đường, mục tiêu, lực lượng và phương pháp đấu tranh cách mạng.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
