"use client";
import React, { useState, useRef } from "react";
import { 
  ShieldAlert, 
  Users, 
  Compass, 
  Skull, 
  Building, 
  Coins, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdColonialVietnam() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Chính sách cai trị của Pháp", icon: ShieldAlert },
    { title: "Phân hóa giai cấp & Mâu thuẫn", icon: Users },
    { title: "Luồng tư tưởng quốc tế", icon: Compass }
  ];

  useGSAP(() => {
    gsap.fromTo(".sub-tab-panel-node",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, [activeTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Sub-tabs */}
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
      <div className="sub-tab-panel-node min-h-[300px]">
        
        {/* TAB 0: CHÍNH SÁCH CAI TRỊ CỦA PHÁP */}
        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Xâm lược */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-l-4 border-l-red-800 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Skull className="w-4.5 h-4.5 text-red-800" />
                <h6 className="text-sm font-bold text-stone-900 font-playfair uppercase">Xâm lược</h6>
              </div>
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Ngày 1-9-1858, Pháp nổ súng tấn công Đà Nẵng. Nhà Nguyễn từng bước thỏa hiệp và đầu hàng hoàn toàn bằng Hiệp ước Patơnốt (1884), biến Việt Nam thành đất thuộc địa.
              </p>
            </div>

            {/* Chính trị */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-l-4 border-l-stone-600 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Building className="w-4.5 h-4.5 text-stone-600" />
                <h6 className="text-sm font-bold text-stone-900 font-playfair uppercase">Chính trị</h6>
              </div>
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Thực hiện chính sách &ldquo;chia để trị&rdquo;, chia Việt Nam thành Bắc Kỳ, Trung Kỳ, Nam Kỳ thuộc Liên bang Đông Dương. Pháp duy trì phong kiến làm tay sai và thiết lập chế độ độc tài, xây nhà tù (như Côn Đảo) để giam cầm người yêu nước.
              </p>
            </div>

            {/* Kinh tế */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-l-4 border-l-amber-600 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Coins className="w-4.5 h-4.5 text-amber-600" />
                <h6 className="text-sm font-bold text-stone-900 font-playfair uppercase">Kinh tế</h6>
              </div>
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Tiến hành hai cuộc khai thác thuộc địa lớn (1897-1914 và 1919-1929) nhằm vơ vét tài nguyên, bóc lột sức lao động rẻ mạt và đánh thuế nặng nề.
              </p>
            </div>

            {/* Văn hóa */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-l-4 border-l-emerald-650 hover:shadow-md transition-all">
              <div className="flex items-center gap-2.5 mb-2.5">
                <BookOpen className="w-4.5 h-4.5 text-emerald-650" />
                <h6 className="text-sm font-bold text-stone-900 font-playfair uppercase">Văn hóa</h6>
              </div>
              <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                Thực hiện chính sách &ldquo;ngu dân&rdquo;, lập nhiều nhà tù hơn trường học, dùng rượu cồn và thuốc phiện để làm suy nhược nòi giống và đầu độc ý chí phản kháng.
              </p>
            </div>

          </div>
        )}

        {/* TAB 1: PHÂN HÓA GIA CẤP & MÂU THUẪN XÃ HỘI */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Nông dân */}
              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-t-2 border-t-amber-600">
                <h6 className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md w-fit mb-2">🌾 Giai cấp Nông dân</h6>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Chiếm hơn 90% dân số, bị áp bức nặng nề nhất, có tinh thần cách mạng kiên cường, khao khát giành độc lập và ruộng đất.
                </p>
              </div>

              {/* Công nhân */}
              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-t-2 border-t-red-650">
                <h6 className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md w-fit mb-2">🏭 Giai cấp Công nhân</h6>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Ra đời gắn liền với các cuộc khai thác thuộc địa, phần lớn xuất thân từ nông dân, sớm tiếp thu tư tưởng tiên tiến và nhanh chóng chuyển từ đấu tranh &ldquo;tự phát&rdquo; sang &ldquo;tự giác&rdquo;.
                </p>
              </div>

              {/* Khác */}
              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm border-t-2 border-t-stone-500">
                <h6 className="text-xs font-bold text-stone-600 bg-stone-50 px-2 py-0.5 rounded-md w-fit mb-2">⬜ Các giai cấp khác</h6>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Địa chủ và sĩ phu phong kiến bị phân hóa sâu sắc; Tư sản và Tiểu tư sản xuất hiện nhưng địa vị kinh tế bấp bênh, thái độ chính trị dao động nên không thể lãnh đạo cách mạng.
                </p>
              </div>

            </div>

            {/* Mâu thuẫn cơ bản Callout */}
            <div className="p-5 rounded-2xl bg-red-500/5 border border-red-800/20 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                <ShieldAlert className="w-16 h-16 text-red-950" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-700/15 border border-red-700/25 text-red-800 text-[10px] font-black uppercase tracking-wider mb-2.5">
                  <span>🩸</span>
                  <span>Mâu thuẫn cơ bản</span>
                </div>
                <p className="text-stone-900 text-sm md:text-base font-bold leading-relaxed text-justify">
                  Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược trở thành mâu thuẫn chủ yếu nhất và ngày càng gay gắt.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TÁC ĐỘNG CỦA CÁC LUỒNG TƯ TƯỞNG QUỐC TẾ */}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Các trào lưu bên ngoài */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-amber-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Trào lưu tư tưởng</span>
                </div>
                <h6 className="text-sm md:text-base font-bold text-stone-900 mb-3 font-playfair">
                  Các trào lưu bên ngoài
                </h6>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Các cuộc cách mạng, cải cách từ Pháp, Nhật Bản, Trung Quốc và đặc biệt là Cách mạng Tháng Mười Nga (1917) đã ảnh hưởng mạnh mẽ đến phong trào yêu nước.
                </p>
              </div>
            </div>

            {/* Sự truyền bá tư tưởng vô sản */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-red-650 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Truyền bá chủ nghĩa vô sản</span>
                </div>
                <h6 className="text-sm md:text-base font-bold text-stone-900 mb-3 font-playfair">
                  Sự truyền bá tư tưởng vô sản
                </h6>
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
                  Sự kiện Tôn Đức Thắng tham gia đấu tranh tại Hắc Hải (1919) và việc Phan Văn Trường công bố Tuyên ngôn của Đảng Cộng sản (1926) tại Sài Gòn đã góp phần truyền bá tư tưởng vô sản vào Việt Nam.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
