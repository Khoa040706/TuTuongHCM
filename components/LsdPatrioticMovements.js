"use client";
import React, { useState, useRef } from "react";
import { 
  History, 
  Flame, 
  Zap, 
  BookOpen, 
  Skull, 
  AlertTriangle, 
  TrendingUp, 
  Swords 
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdPatrioticMovements() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Khuynh hướng phong kiến & nông dân", icon: Flame },
    { title: "Khuynh hướng dân chủ tư sản", icon: Swords },
    { title: "Nguyên nhân & Ý nghĩa lịch sử", icon: AlertTriangle }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".movements-panel-node") : document.querySelectorAll(".movements-panel-node");
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
      
      {/* Tabs */}
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
      <div className="movements-panel-node min-h-[300px]">
        
        {/* TAB 0: KHUYNH HƯỚNG PHONG KIẾN & NÔNG DÂN */}
        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cần Vương */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800 hover:shadow-md transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <History className="w-16 h-16 text-red-950" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-red-800 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">1885 - 1896</span>
              </div>
              <h6 className="text-sm md:text-base font-bold text-stone-900 mb-3 font-playfair">
                Phong trào Cần Vương (1885-1896)
              </h6>
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Do vua Hàm Nghi và Tôn Thất Thuyết khởi xướng, tiêu biểu với các cuộc khởi nghĩa Ba Đình, Bãi Sậy, Hương Khê. Sự thất bại của phong trào (cột mốc là khởi nghĩa Phan Đình Phùng năm 1896) đánh dấu sự chấm dứt vai trò lãnh đạo của giai cấp phong kiến đối với phong trào yêu nước chống Pháp.
              </p>
            </div>

            {/* Yên Thế */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-amber-600 hover:shadow-md transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Flame className="w-16 h-16 text-amber-950" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Khởi nghĩa nông dân</span>
              </div>
              <h6 className="text-sm md:text-base font-bold text-stone-900 mb-3 font-playfair">
                Phong trào nông dân Yên Thế
              </h6>
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Do thủ lĩnh Hoàng Hoa Thám lãnh đạo, nghĩa quân đã lập căn cứ và chiến đấu kiên cường ở vùng núi phía Bắc. Tuy nhiên, phong trào vẫn mang nặng &ldquo;cốt cách phong kiến&rdquo;, thiếu khả năng thống nhất thành một cuộc cách mạng giải phóng dân tộc nên cuối cùng bị đàn áp.
              </p>
            </div>

          </div>
        )}

        {/* TAB 1: KHUYNH HƯỚNG DÂN CHỦ TƯ SẢN VÀ TIỂU TƯ SẢN */}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Phan Bội Châu */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-t-2 border-t-red-650">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-red-650" />
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Xu hướng bạo động</span>
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 mb-2 font-playfair">Phan Bội Châu</h6>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Chủ trương vũ trang đánh đuổi thực dân Pháp, tiêu biểu với phong trào &ldquo;Đông Du&rdquo; (đưa thanh niên sang Nhật học tập) và sự thành lập tổ chức Việt Nam Quang phục hội (1912). Do thiếu chương trình, kế hoạch rõ ràng, phong trào dần chấm dứt sau khi cụ Phan Bội Châu bị bắt giam.
              </p>
            </div>

            {/* Phan Châu Trinh */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-t-2 border-t-emerald-650">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-emerald-650" />
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Xu hướng cải cách</span>
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 mb-2 font-playfair">Phan Châu Trinh</h6>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Chủ trương &ldquo;bất bạo động&rdquo;, tập trung &ldquo;khai dân trí, chấn dân khí, hậu dân sinh&rdquo; và đề nghị chính quyền Pháp tiến hành cải cách. Việc đặt hy vọng vào Pháp cho thấy sự hạn chế do &ldquo;không rõ bản chất của đế quốc thực dân&rdquo;; phong trào (đỉnh cao là vụ chống thuế ở Trung Kỳ 1908) cuối cùng bị đàn áp đẫm máu.
              </p>
            </div>

            {/* Việt Nam Quốc dân đảng */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-t-2 border-t-stone-600">
              <div className="flex items-center gap-2 mb-2">
                <Skull className="w-4 h-4 text-stone-650" />
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Khởi nghĩa vũ trang</span>
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 mb-2 font-playfair">VN Quốc dân đảng</h6>
              <p className="text-xs text-stone-650 leading-relaxed text-justify">
                Tổ chức của tầng lớp tiểu tư sản trí thức do Nguyễn Thái Học lãnh đạo, hướng tới xây dựng chế độ cộng hòa tư sản bằng đấu tranh vũ trang, ám sát cá nhân. Khởi nghĩa Yên Bái (2-1930) thất bại nhanh chóng, bộc lộ tính chất hấp tấp, non yếu và không vững chắc của phong sản tư sản.
              </p>
            </div>

          </div>
        )}

        {/* TAB 2: NGUYÊN NHÂN THẤT BẠI & Ý NGHĨA LỊCH SỬ */}
        {activeTab === 2 && (
          <div className="space-y-6">
            
            {/* Nguyên nhân thất bại */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-red-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
                    Nguyên nhân thất bại cốt lõi
                  </h6>
                </div>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Các phong trào thất bại do thiếu đường lối chính trị đúng đắn để giải quyết mâu thuẫn xã hội, chưa có tổ chức vững mạnh để tập hợp và lãnh đạo toàn dân, và chưa xác định được phương pháp đấu tranh thích hợp.
                </p>
              </div>
            </div>

            {/* Ý nghĩa lịch sử */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-emerald-650 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
                    Nhiệm vụ lịch sử & Ý nghĩa
                  </h6>
                </div>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Dù thất bại, các phong trào này đã bồi đắp chủ nghĩa yêu nước, thúc đẩy tầng lớp thanh niên trí thức tiên tiến đi tìm con đường mới. Từ đó, thực tiễn đặt ra yêu cầu cấp thiết: cần phải có một tổ chức cách mạng tiên phong, có đường lối cứu nước đúng đắn.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
