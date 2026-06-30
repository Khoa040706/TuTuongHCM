"use client";
import React, { useState, useRef } from "react";
import { 
  Globe, 
  AlertTriangle, 
  MapPin, 
  Flag, 
  CheckCircle, 
  ShieldAlert, 
  Flame, 
  Anchor, 
  Compass, 
  ArrowRight,
  TrendingUp,
  Cpu,
  BookOpen
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdNationalLiberationStrategy() {
  const [activeTab, setActiveTab] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Bối cảnh lịch sử (1939-1941)", icon: Globe },
    { title: "Chuyển hướng chiến lược của Đảng", icon: Flag }
  ];

  const pillars = [
    {
      num: "Thứ nhất",
      title: "Mâu thuẫn chủ yếu",
      desc: "Xác định mâu thuẫn gay gắt nhất, cần giải quyết cấp bách là mâu thuẫn giữa toàn thể dân tộc Việt Nam với phát xít Pháp - Nhật.",
      icon: AlertTriangle
    },
    {
      num: "Thứ hai",
      title: "Nhiệm vụ chiến lược",
      desc: "Khẳng định đây là cuộc cách mạng 'dân tộc giải phóng'. Đặt quyền lợi quốc gia, sự sinh tử của dân tộc lên trên hết, tiếp tục tạm gác khẩu hiệu cách mạng ruộng đất.",
      icon: ShieldAlert
    },
    {
      num: "Thứ ba",
      title: "Giải quyết vấn đề dân tộc",
      desc: "Thực hiện chính sách 'dân tộc tự quyết'. Thành lập ở mỗi nước Đông Dương một mặt trận riêng. Tại Việt Nam, thành lập Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh).",
      icon: MapPin
    },
    {
      num: "Thứ tư",
      title: "Tập hợp lực lượng rộng rãi",
      desc: "Đoàn kết mọi người dân có lòng yêu nước, không phân biệt giàu nghèo, tôn giáo, giai cấp. Các tổ chức quần chúng trong Việt Minh đều mang tên 'Cứu quốc'.",
      icon: TrendingUp
    },
    {
      num: "Thứ năm",
      title: "Chính quyền tương lai",
      desc: "Sau khi cách mạng thành công sẽ thành lập nước Việt Nam Dân chủ Cộng hòa — một hình thức nhà nước của chung toàn thể dân tộc, thay vì mô hình chính quyền Xô viết công nông.",
      icon: Cpu
    },
    {
      num: "Thứ sáu",
      title: "Phương pháp cách mạng",
      desc: "Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm. Hình thái cách mạng là đi từ khởi nghĩa từng phần trong từng địa phương tiến lên tổng khởi nghĩa.",
      icon: Flame
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".strategy-panel-box",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, [activeTab]);

  useGSAP(() => {
    gsap.fromTo(".pillar-desc-box",
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [activePillar]);

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

      {/* Main Panels */}
      <div className="strategy-panel-box min-h-[350px]">
        
        {/* TAB 0: BỐI CẢNH LỊCH SỬ */}
        {activeTab === 0 && (
          <div className="space-y-6">
            
            {/* World vs Indochina */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Thế giới */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
                <div className="flex items-center gap-2 mb-3.5">
                  <Globe className="w-5 h-5 text-red-850 flex-shrink-0" />
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                    Tình hình thế giới (1939 - 1941)
                  </h6>
                </div>
                <ul className="space-y-3 pl-4 list-disc text-xs text-stone-655 leading-relaxed text-justify">
                  <li>
                    <strong>Tháng 9/1939</strong>: Chiến tranh thế giới thứ hai bùng nổ. Pháp đầu hàng Đức (6/1940), tăng cường đàn áp lực lượng dân chủ ở các thuộc địa.
                  </li>
                  <li>
                    <strong>Tháng 6/1941</strong>: Phát xít Đức tấn công Liên Xô.
                  </li>
                  <li>
                    <strong>Tháng 12/1941</strong>: Chiến tranh Thái Bình Dương bùng nổ, phát xít Nhật mở rộng xâm lược sang các nước Đông Nam Á.
                  </li>
                </ul>
              </div>

              {/* Đông Dương */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
                <div className="flex items-center gap-2 mb-3.5">
                  <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0" />
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                    Tình hình Đông Dương (&ldquo;Một cổ hai tròng&rdquo;)
                  </h6>
                </div>
                <ul className="space-y-3 pl-4 list-disc text-xs text-stone-655 leading-relaxed text-justify">
                  <li>
                    <strong>Kinh tế chỉ huy</strong>: Thực dân Pháp ra sức vơ vét sức người, sức của phục vụ chiến tranh đế quốc và thẳng tay đàn áp phong trào cách mạng.
                  </li>
                  <li>
                    <strong>Nhật xâm lược (9/1940)</strong>: Phát xít Nhật vào Đông Dương. Thực dân Pháp nhanh chóng đầu hàng và cấu kết với Nhật để cùng bóc lột nhân dân ta rơi vào cảnh ngộ cực khổ **&ldquo;một cổ hai tròng&rdquo;**.
                  </li>
                </ul>
              </div>

            </div>

            {/* Phản ứng của Đảng */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                <span>🛡️</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
                  Phản ứng nhanh chóng của Đảng ta
                </span>
                <p className="text-xs md:text-sm text-stone-800 leading-relaxed text-justify font-semibold">
                  Đảng kịp thời rút vào hoạt động bí mật, chuyển trọng tâm công tác về địa bàn nông thôn rộng lớn để xây dựng căn cứ địa lâu dài, đồng thời vẫn chú trọng chỉ đạo phong trào ở khu vực đô thị.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 1: CHUYỂN HƯỚNG CHIẾN LƯỢC */}
        {activeTab === 1 && (
          <div className="space-y-6">
            
            {/* Hai mốc chuyển hướng */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-l-4 border-l-stone-400">
                <span className="text-[10px] font-bold text-stone-450 uppercase tracking-wider block mb-1">
                  Bước đầu chuyển hướng (11/1939)
                </span>
                <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase mb-2">
                  Hội nghị BCH Trung ương tháng 11/1939
                </h6>
                <p className="text-xs text-stone-600 leading-relaxed text-justify">
                  Xác định đánh đổ đế quốc Pháp, giành độc lập là <strong>mục tiêu tối cao</strong>. Tạm gác cách mạng ruộng đất, thay bằng tịch thu ruộng đất của đế quốc, phản động chia cho dân nghèo. Lập Mặt trận dân tộc thống nhất phản đế Đông Dương.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-900 to-red-950 text-white rounded-2xl p-5 shadow-sm border border-red-850 relative overflow-hidden">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                  Hoàn chỉnh chuyển hướng (5/1941)
                </span>
                <h6 className="text-xs md:text-sm font-bold font-playfair uppercase mb-2">
                  Hội nghị Trung ương 8 (Tháng 5/1941)
                </h6>
                <p className="text-xs text-red-100 leading-relaxed text-justify">
                  Do đồng chí <strong>Nguyễn Ái Quốc</strong> chủ trì tại Cao Bằng sau 30 năm bôn ba hải ngoại. Hội nghị đã hoàn chỉnh trọn vẹn đường lối chuyển hướng chiến lược, đặt giải phóng dân tộc lên trên hết.
                </p>
              </div>

            </div>

            {/* 6 Trụ cột Hội nghị TW 8 */}
            <div>
              <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider block mb-4">
                🎯 6 Trụ cột Quyết sách cốt lõi của Hội nghị Trung ương 8
              </span>

              {/* Grid Selector */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-4">
                {pillars.map((p, idx) => {
                  const PilIcon = p.icon;
                  const isActive = idx === activePillar;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePillar(idx)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? "bg-white border-amber-500 shadow-sm ring-1 ring-amber-500/25 text-amber-800" 
                          : "bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-500"
                      }`}
                    >
                      <PilIcon className="w-5 h-5 mb-1.5 flex-shrink-0" />
                      <span className="text-[9px] font-bold uppercase tracking-wider block mb-0.5">{p.num}</span>
                      <span className="text-[10px] font-black leading-tight line-clamp-1">{p.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Expanded details */}
              <div className="pillar-desc-box bg-white border border-amber-300 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-amber-850 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {pillars[activePillar].num}
                  </span>
                  <h6 className="text-xs md:text-sm font-black text-stone-900 uppercase">
                    {pillars[activePillar].title}
                  </h6>
                </div>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed text-justify p-3 rounded-xl bg-amber-50/20 border border-amber-100/50">
                  {pillars[activePillar].desc}
                </p>
              </div>

            </div>

            {/* Ý nghĩa lịch sử - Glowing Card */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <BookOpen className="w-24 h-24 text-amber-950" />
              </div>
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200 flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-850 uppercase tracking-wider block mb-1">
                    🛡️ Ý nghĩa lịch sử cốt lõi
                  </span>
                  <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-2.5">
                    Khắc phục triệt để hạn chế - Đưa cách mạng đi đúng hướng
                  </h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-650 leading-relaxed text-justify">
                    <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                      <strong>Hoàn chỉnh đường lối</strong>: Hoàn chỉnh trọn vẹn chủ trương chiến lược giải phóng dân tộc từ Hội nghị tháng 11/1939.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                      <strong>Khắc phục hạn chế</strong>: Khắc phục triệt để những điểm hạn chế của Luận cương Trần Phú (10/1930), đưa cách mạng trở về đúng trục tư tưởng của Cương lĩnh Nguyễn Ái Quốc (2/1930).
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                      <strong>Kim chỉ nam cách mạng</strong>: Là ngọn cờ dẫn đường để toàn dân đoàn kết tập hợp lực lượng vũ trang tiến tới Tổng khởi nghĩa tháng Tám thành công.
                    </div>
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
