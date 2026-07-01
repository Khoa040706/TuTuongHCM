"use client";
import React, { useState, useRef } from "react";
import { 
  Globe, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle, 
  Flag, 
  Compass, 
  Flame, 
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdDemocracyContext() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Điều kiện lịch sử (Bối cảnh)", icon: Globe },
    { title: "Chủ trương mới của Đảng", icon: Flag }
  ];

  useGSAP(() => {
    gsap.fromTo(".context-panel-box",
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

      {/* Panel container */}
      <div className="context-panel-box min-h-[350px]">
        
        {/* TAB 0: ĐIỀU KIỆN LỊCH SỬ */}
        {activeTab === 0 && (
          <div className="space-y-6">
            
            {/* Tình hình quốc tế */}
            <div>
              <span className="text-stone-400 font-black text-[10px] md:text-xs uppercase tracking-wider block mb-3">
                🌐 Tình hình quốc tế
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Nguy cơ phát xít */}
                <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                      <AlertTriangle className="w-4.5 h-4.5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase">
                      Nguy cơ phát xít
                    </h6>
                  </div>
                  <p className="text-xs text-stone-655 leading-relaxed text-justify">
                    Hậu quả cuộc khủng hoảng kinh tế 1929-1933 làm xuất hiện chủ nghĩa phát xít (Đức, Italia, Tây Ban Nha), đe dọa nghiêm trọng nền hòa bình thế giới.
                  </p>
                </div>

                {/* 2. Quốc tế Cộng sản */}
                <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                      <Globe className="w-4.5 h-4.5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase">
                      Đại hội VII QTCS (7/1935)
                    </h6>
                  </div>
                  <p className="text-xs text-stone-655 leading-relaxed text-justify">
                    Xác định kẻ thù nguy hiểm trước mắt là chủ nghĩa phát xít; nhiệm vụ trước mắt là chống phát xít, bảo vệ dân chủ và hòa bình; chủ trương lập Mặt trận nhân dân rộng rãi.
                  </p>
                </div>

                {/* 3. Chính phủ Pháp */}
                <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                      <CheckCircle className="w-4.5 h-4.5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase">
                      Mặt trận Nhân dân Pháp (1936)
                    </h6>
                  </div>
                  <p className="text-xs text-stone-655 leading-relaxed text-justify">
                    Lên nắm quyền ở Pháp, ban bố nhiều quyền tự do dân chủ cho thuộc địa, tạo không khí chính trị thuận lợi và thả nhiều tù chính trị cộng sản ở Đông Dương.
                  </p>
                </div>

              </div>
            </div>

            {/* Tình hình trong nước */}
            <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50">
              <span className="text-stone-400 font-black text-[10px] md:text-xs uppercase tracking-wider block mb-3">
                🇻🇳 Tình hình trong nước
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Đời sống ngột ngạt */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <h6 className="text-xs font-bold text-stone-850 mb-2">⛓️ Đời sống nhân dân ngột ngạt</h6>
                  <p className="text-xs text-stone-600 leading-relaxed text-justify">
                    Mọi tầng lớp xã hội đều mong muốn có cải cách dân chủ sau khủng hoảng kinh tế và chính sách khủng bố trắng kéo dài của thực dân Pháp đối với cách mạng Việt Nam.
                  </p>
                </div>

                {/* 2. Hệ thống Đảng phục hồi */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <h6 className="text-xs font-bold text-stone-850 mb-2">⭐ Hệ thống tổ chức Đảng phục hồi</h6>
                  <p className="text-xs text-stone-600 leading-relaxed text-justify">
                    Đảng Cộng sản Đông Dương đã phục hồi hoàn toàn hệ thống tổ chức sau thời kỳ gian khổ (đầu năm 1935) và tích cực tranh thủ cơ hội thuận lợi để xây dựng lực lượng quần chúng rộng rãi.
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 1: CHỦ TRƯƠNG CỦA ĐẢNG */}
        {activeTab === 1 && (
          <div className="space-y-6">
            
            {/* Chủ trương Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nhiệm vụ & Mặt trận */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-5 h-5 text-red-800 flex-shrink-0" />
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                    Nhiệm vụ & Mặt trận
                  </h6>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-650 leading-relaxed text-justify pl-4 list-disc">
                  <li>
                    <strong>Nhiệm vụ chiến lược</strong>: Chống phát xít, chống phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.
                  </li>
                  <li>
                    <strong>Thành lập Mặt trận</strong>: Lập <em>Mặt trận nhân dân phản đế</em> (Hội nghị Tựu Hải 7/1936), sau đó đổi tên và nhấn mạnh nhiệm vụ trung tâm là lập <em>Mặt trận dân chủ thống nhất</em> (Hội nghị 3/1938) để tập hợp quần chúng.
                  </li>
                </ul>
              </div>

              {/* Hình thức đấu tranh */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-red-800 flex-shrink-0" />
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                    Hình thức tổ chức & Đấu tranh
                  </h6>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-650 leading-relaxed text-justify pl-4 list-disc">
                  <li>
                    <strong>Chuyển hướng linh hoạt</strong>: Chuyển từ hình thức tổ chức bí mật, bất hợp pháp sang kết hợp giữa bí mật với công khai, nửa công khai, hợp pháp và nửa hợp pháp.
                  </li>
                  <li>
                    <strong>Mục tiêu</strong>: Tận dụng tối đa các quyền tự do báo chí, lập hội, biểu tình hợp pháp do chính phủ Mặt trận Nhân dân Pháp ban bố để đưa Đảng ra hoạt động công khai trước quần chúng.
                  </li>
                </ul>
              </div>

            </div>

            {/* Theoretical Breakthrough Card: Nhận thức mới */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Cpu className="w-20 h-20 text-amber-950" />
              </div>
              <div className="relative z-10">
                
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-3">
                  <span>💡</span>
                  <span>Tư duy lý luận đột phá mới</span>
                </div>

                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-amber-400 italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify">
                    &ldquo;Không nhất thiết phải kết hợp khăng khít hai nhiệm vụ Phản đế và Điền địa cùng lúc. Nếu muốn đánh đổ đế quốc thì phải lựa chọn vấn đề quan trọng hơn để giải quyết trước (tập trung đánh địch nhân chính, nguy hiểm nhất).&rdquo;
                    <div className="text-right font-bold mt-2 not-italic text-[10px] text-amber-850 uppercase tracking-wide">
                      — Chỉ thị 7/1936 & Văn kiện &ldquo;Chung quanh vấn đề chiến sách mới&rdquo; (10/1936)
                    </div>
                  </div>

                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Sự chuyển hướng này đã <strong>bước đầu khắc phục được những hạn chế tả khuynh</strong> của Luận cương chính trị (10/1930), quay trở lại với nhận thức đúng đắn, phù hợp với Cương lĩnh chính trị đầu tiên (2/1930) do Nguyễn Ái Quốc soạn thảo.
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
