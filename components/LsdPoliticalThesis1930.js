"use client";
import React, { useState, useRef } from "react";
import { 
  Award, 
  MapPin, 
  User, 
  CheckCircle, 
  AlertTriangle, 
  Shuffle, 
  Scale, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdPoliticalThesis1930() {
  const [activeSubTab, setActiveSubTab] = useState(0);
  const containerRef = useRef(null);

  const subTabs = [
    { title: "Nội dung & So sánh Cương lĩnh", icon: Scale },
    { title: "Hạn chế & Nguyên nhân", icon: AlertTriangle }
  ];

  const compareData = [
    {
      criteria: "Tên Đảng",
      platform: "Đảng Cộng sản Việt Nam",
      thesis: "Đảng Cộng sản Đông Dương"
    },
    {
      criteria: "Nhiệm vụ hàng đầu",
      platform: "Giải phóng dân tộc (Đánh đuổi đế quốc Pháp xâm lược)",
      thesis: "Nặng về đấu tranh giai cấp & ruộng đất (Đánh đổ di tích phong kiến, thực hành thổ địa cách mạng triệt để)"
    },
    {
      criteria: "Lực lượng cách mạng",
      platform: "Công nhân và Nông dân làm gốc; đồng thời tập hợp tiểu tư sản, trí thức, địa chủ nhỏ, tư sản dân tộc yêu nước...",
      thesis: "Chỉ xác định Công nhân và Nông dân là hai động lực chính; không đề ra được chiến lược liên minh dân tộc và giai cấp rộng rãi"
    },
    {
      criteria: "Mâu thuẫn chủ yếu",
      platform: "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược",
      thesis: "Chưa nêu rõ mâu thuẫn chủ yếu của xã hội thuộc địa; đề cao mâu thuẫn giai cấp"
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".thesis-content-node",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, [activeSubTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-6">
      
      {/* Conference & Leader Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-950 text-white rounded-2xl p-5 md:p-6 shadow-md border border-red-800/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <BookOpen className="w-24 h-24" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
              Hội nghị BCH Trung ương lần thứ nhất (10/1930)
            </span>
            <h5 className="text-base md:text-lg font-bold font-playfair mb-2">
              Luận cương chính trị của Đảng Cộng sản Đông Dương
            </h5>
            <p className="text-xs text-red-100 max-w-2xl leading-relaxed text-justify">
              Họp từ ngày 14 đến 31-10-1930 tại Hương Cảng (Hồng Kông, Trung Quốc). Hội nghị quyết định đổi tên Đảng Cộng sản Việt Nam thành <strong>Đảng Cộng sản Đông Dương</strong> và bầu đồng chí <strong>Trần Phú</strong> làm Tổng Bí thư đầu tiên.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-red-950/60 border border-red-800/50 p-3 rounded-xl">
            <div className="w-9 h-9 rounded-lg bg-red-800 text-white flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[9px] text-red-300 font-bold uppercase tracking-wider">Tổng Bí thư đầu tiên</div>
              <div className="text-xs font-black">Đồng chí Trần Phú</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub tabs */}
      <div className="flex gap-2 border-b border-stone-250 pb-2">
        {subTabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeSubTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveSubTab(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive 
                  ? "bg-red-800 text-white shadow-sm" 
                  : "bg-stone-100 hover:bg-stone-200/60 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Panel Render */}
      <div className="thesis-content-node min-h-[300px]">
        
        {/* TAB 0: NỘI DUNG & SO SÁNH */}
        {activeSubTab === 0 && (
          <div className="space-y-6">
            
            {/* Comparison Matrix */}
            <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-white shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Shuffle className="w-4.5 h-4.5 text-red-800" />
                <h6 className="text-xs md:text-sm font-bold text-stone-800 font-playfair uppercase">
                  Ma trận so sánh: Cương lĩnh đầu tiên vs Luận cương chính trị
                </h6>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-2 px-3">Tiêu chí</th>
                      <th className="py-2 px-3 text-red-800 bg-red-50/40 rounded-t-lg">Cương lĩnh chính trị đầu tiên (02/1930)</th>
                      <th className="py-2 px-3 text-amber-700 bg-amber-50/40 rounded-t-lg">Luận cương chính trị (10/1930)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareData.map((row, idx) => (
                      <tr key={idx} className="border-b border-stone-150/80 hover:bg-stone-50/50 transition-colors">
                        <td className="py-3 px-3 font-bold text-stone-800 align-top max-w-[120px]">
                          {row.criteria}
                        </td>
                        <td className="py-3 px-3 text-stone-650 bg-red-50/20 leading-relaxed text-justify align-top">
                          {row.platform}
                        </td>
                        <td className="py-3 px-3 text-stone-650 bg-amber-50/20 leading-relaxed text-justify align-top">
                          {row.thesis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Core Thesis Points */}
            <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50 space-y-4">
              <h6 className="text-xs md:text-sm font-bold text-stone-800 font-playfair uppercase tracking-wide">
                Các nội dung cốt lõi của Luận cương tháng 10-1930
              </h6>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Mâu thuẫn giai cấp */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">⚖️ Mâu thuẫn giai cấp</span>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Xác định mâu thuẫn giai cấp diễn ra ngày càng gay gắt ở Đông Dương (Việt Nam, Lào, Cao Miên) giữa một bên là thợ thuyền, dân cày, lao khổ với một bên là địa chủ, phong kiến, tư bản và đế quốc.
                  </p>
                </div>

                {/* 2. Phương hướng chiến lược */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">🧭 Phương hướng chiến lược</span>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Lúc đầu tiến hành cuộc &ldquo;cách mạng tư sản dân quyền&rdquo; (thổ địa và phản đế), sau đó phát triển thẳng lên con đường xã hội chủ nghĩa, bỏ qua thời kỳ tư bản chủ nghĩa.
                  </p>
                </div>

                {/* 3. Nhiệm vụ cốt yếu */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">⚔️ Nhiệm vụ cốt yếu</span>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Đánh đổ các di tích phong kiến, thực hành thổ địa cách mạng triệt để và đánh đổ đế quốc Pháp. Hai nhiệm vụ có quan hệ khăng khít, trong đó &ldquo;vấn đề thổ địa là cái cốt&rdquo;.
                  </p>
                </div>

                {/* 4. Động lực & Lãnh đạo */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">👑 Động lực & Lãnh đạo</span>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Công nhân và Nông dân là hai động lực chính. Điều kiện lãnh đạo cốt yếu là phải có một Đảng Cộng sản có đường lối đúng, kỷ luật tập trung mật thiết liên lạc với quần chúng.
                  </p>
                </div>

                {/* 5. Phương pháp cách mạng */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">💥 Phương pháp cách mạng</span>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Phải ra sức chuẩn bị cho quần chúng về con đường &ldquo;võ trang bạo động&rdquo; theo khuôn phép nhà binh khi có tình thế cách mạng xuất hiện.
                  </p>
                </div>

                {/* 6. Quan hệ quốc tế */}
                <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">🌎 Quan hệ quốc tế</span>
                  <p className="text-xs text-stone-650 leading-relaxed text-justify">
                    Cách mạng Đông Dương là một bộ phận của cách mạng vô sản thế giới, phải đoàn kết gắn bó chặt chẽ với giai cấp vô sản thế giới (nhất là vô sản Pháp).
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 1: HẠN CHẾ & NGUYÊN NHÂN */}
        {activeSubTab === 1 && (
          <div className="space-y-6">
            
            {/* Hạn chế & Nguyên nhân Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0" />
                <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
                  Hạn chế lịch sử của Luận cương tháng 10-1930
                </h6>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Hạn chế */}
                <div className="p-4 rounded-xl bg-red-50/30 border border-red-200">
                  <span className="text-[10px] font-bold text-red-850 uppercase tracking-wider block mb-1.5">⚠️ Biểu hiện hạn chế</span>
                  <p className="text-xs text-stone-700 leading-relaxed text-justify">
                    Chưa nêu rõ mâu thuẫn chủ yếu của xã hội thuộc địa Đông Dương. Không đặt nhiệm vụ giải phóng dân tộc lên hàng đầu mà nặng về đấu tranh giai cấp và cách mạng ruộng đất. Đồng thời, không đề ra được chiến lược liên minh dân tộc và giai cấp rộng rãi.
                  </p>
                </div>

                {/* Nguyên nhân */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-150">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1.5">⚙️ Nguyên nhân cốt lõi</span>
                  <p className="text-xs text-stone-700 leading-relaxed text-justify">
                    Do nhận thức chưa đầy đủ về thực tiễn cách mạng ở các nước thuộc địa, nửa thuộc địa và chịu ảnh hưởng trực tiếp của tư tưởng &ldquo;tả khuynh&rdquo; đang tồn tại phổ biến trong Quốc tế Cộng sản cùng một số Đảng Cộng sản thời bấy giờ.
                  </p>
                </div>

              </div>
            </div>

            {/* Hội phản đế Đồng minh Callout */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200 flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-850 uppercase tracking-wider block mb-0.5">
                  🛡️ Chủ trương sửa đổi sau Hội nghị
                </span>
                <p className="text-xs md:text-sm text-stone-850 leading-relaxed text-justify">
                  Ngày 18-11-1930, Thường vụ Trung ương Đảng ban hành Chỉ thị thành lập <strong>&ldquo;Hội phản đế Đồng minh&rdquo;</strong> - tổ chức mặt trận đầu tiên nhằm đoàn kết các giai cấp, tầng lớp dân tộc, khẳng định vai trò của nhân dân trong giải phóng dân tộc.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
