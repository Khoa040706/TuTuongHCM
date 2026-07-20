"use client";
import React, { useState, useRef } from "react";
import { 
  History, 
  BookOpen, 
  Newspaper, 
  Network, 
  MapPin, 
  CheckCircle, 
  AlertTriangle,
  Award,
  Users2,
  Bookmark
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdRecoveryAndCongress1935() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Đấu tranh & Khôi phục phong trào (1931-1934)", icon: History },
    { title: "Đại hội lần thứ nhất (03/1935)", icon: Award }
  ];

  const artifacts = [
    {
      title: "Biến nhà tù thành trường học",
      icon: BookOpen,
      desc: "Trong các nhà tù đế quốc (Hỏa Lò, Khám Lớn, Côn Đảo...), các đảng viên giữ vững khí tiết, lập ra các chi bộ bí mật để lãnh đạo đấu tranh đòi cải thiện sinh hoạt. Họ tổ chức huấn luyện lý luận Mác-Lênin, dịch sách kinh điển."
    },
    {
      title: "Báo chí bí mật",
      icon: Newspaper,
      desc: "Đảng viên trong tù xuất bản các tờ báo bí mật như Đuốc đưa đường, Người tù đỏ làm vũ khí tư tưởng, tuyên truyền và giữ vững niềm tin cách mạng trong hàng ngũ chiến sĩ."
    },
    {
      title: "Chương trình hành động 1932",
      icon: Bookmark,
      desc: "Tháng 6/1932, đồng chí Lê Hồng Phong cùng các đồng chí khác công bố Chương trình hành động của Đảng Cộng sản Đông Dương cùng các đoàn thể bí mật, vạch rõ nhiệm vụ khôi phục tổ chức."
    },
    {
      title: "Ban Chỉ huy ở ngoài (1934)",
      icon: Network,
      desc: "Thành lập đầu năm 1934 dưới sự chỉ đạo của Quốc tế Cộng sản để thực hiện chức năng của Ban Chấp hành Trung ương, lãnh đạo chỉ đạo phục hồi phong trào cách mạng trong nước."
    }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".recovery-panel-node") : document.querySelectorAll(".recovery-panel-node");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, [activeTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-6">
      
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

      {/* Main Panel render */}
      <div className="recovery-panel-node min-h-[350px]">
        
        {/* TAB 0: KHÔI PHỤC PHONG TRÀO */}
        {activeTab === 0 && (
          <div className="space-y-6">
            
            {/* Timeline bối cảnh & Tổn thất */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
              <span className="text-[10px] font-bold text-red-850 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider block w-fit mb-3">
                Bối cảnh khủng bố trắng & Tổn thất nặng nề (1931)
              </span>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed text-justify mb-4">
                Sau cao trào 1930-1931, thực dân Pháp tiến hành đàn áp dã man khiến cách mạng lâm vào giai đoạn cực kỳ gian khổ. Tổng Bí thư Trần Phú hy sinh ngày 6-9-1931. Lãnh tụ Nguyễn Ái Quốc cũng bị chính quyền Anh bắt giam tại Hồng Kông (6-6-1931). Xứ ủy Trung Kỳ phạm sai lầm tả khuynh cực đoan (&ldquo;thanh trừ trí, phú, địa, hào, đào tận gốc trốc tận rễ&rdquo;), sau đó được Ban Thường vụ Trung ương phê phán nghiêm khắc và hướng dẫn bôn-sê-vích hóa.
              </p>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 bg-stone-50 p-3 rounded-lg border border-stone-150">
                <CheckCircle className="w-4 h-4 text-emerald-650 flex-shrink-0" />
                <span>Nghị quyết của Quốc tế Cộng sản (11-4-1931): Công nhận Đảng Cộng sản Đông Dương là chi bộ độc lập.</span>
              </div>
            </div>

            {/* Revolutionary Artifacts Dashboard */}
            <div>
              <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider block mb-4">
                🏺 Bảng tin Kỷ vật & Phương thức Khôi phục phong trào
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {artifacts.map((art, idx) => {
                  const ArtIcon = art.icon;
                  return (
                    <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100 flex-shrink-0">
                          <ArtIcon className="w-4.5 h-4.5" />
                        </div>
                        <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                          {art.title}
                        </h6>
                      </div>
                      <p className="text-xs text-stone-650 leading-relaxed text-justify">
                        {art.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vụ án đại hình Sài Gòn */}
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-200 text-xs md:text-sm text-stone-750 text-justify">
              🛡️ <strong>Vụ án Đại hình Sài Gòn (5-1933)</strong>: Thực dân Pháp mở phiên tòa xét xử 120 chiến sĩ cộng sản (Ngô Gia Tự, Nguyễn Chí Diểu, Lê Văn Lương, Phạm Hùng...) và đày họ ra Côn Đảo hòng dập tắt ngọn lửa cách mạng. Dẫu vậy, phong trào đấu tranh vẫn kiên cường hồi sinh, đến đầu năm 1935 hệ thống tổ chức Đảng cơ bản được phục hồi.
            </div>

          </div>
        )}

        {/* TAB 1: ĐẠI HỘI LẦN THỨ NHẤT */}
        {activeTab === 1 && (
          <div className="space-y-6">
            
            {/* Congress Header Summary */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-red-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                  Đại hội đại biểu lần thứ nhất của Đảng (3-1935)
                </span>
                <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-2">
                  Đại hội khôi phục hệ thống tổ chức Đảng
                </h5>
                <p className="text-xs text-stone-650 max-w-xl text-justify leading-relaxed">
                  Đại hội họp vào tháng 3-1935 tại Ma Cao (Trung Quốc). Đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức của Đảng và phong trào cách mạng của quần chúng sau thời kỳ bị đàn áp khốc liệt.
                </p>
              </div>
              <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 p-3 rounded-xl flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-800" />
                <div>
                  <div className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Địa điểm họp</div>
                  <div className="text-xs font-black text-stone-800">Ma Cao, Trung Quốc</div>
                </div>
              </div>
            </div>

            {/* Three key tasks & Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Key Tasks */}
              <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-white shadow-xs">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-3">
                  🎯 Ba nhiệm vụ trước mắt
                </span>

                <div className="space-y-3">
                  {[
                    "Củng cố và phát triển Đảng làm hạt nhân lãnh đạo.",
                    "Thâu phục và đẩy mạnh tập hợp lực lượng quần chúng rộng rãi.",
                    "Mở rộng tuyên truyền chống đế quốc, chống chiến tranh xâm lược, ủng hộ Liên Xô và cách mạng Trung Quốc."
                  ].map((task, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-850 flex items-center justify-center border border-red-100 flex-shrink-0 text-[10px] font-black mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed text-justify">{task}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Bầu cử */}
              <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-3">
                    👥 Công tác nhân sự Ban Chấp hành
                  </span>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <Users2 className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-xs font-bold text-stone-850">Bầu Ban Chấp hành Trung ương mới</h6>
                        <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                          Đồng chí <strong>Lê Hồng Phong</strong> được bầu làm Tổng Bí thư của Đảng.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start border-t border-stone-150 pt-3">
                      <Users2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-xs font-bold text-stone-850">Đại diện tại Quốc tế Cộng sản</h6>
                        <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                          Đồng chí <strong>Nguyễn Ái Quốc</strong> được cử làm đại diện của Đảng bên cạnh Quốc tế Cộng sản.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Limitations & Historical Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Hạn chế */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-l-4 border-l-red-850">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-850 flex-shrink-0" />
                  <h6 className="text-xs font-bold text-stone-900 font-playfair uppercase">
                    Hạn chế của Đại hội
                  </h6>
                </div>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Đại hội chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu mà vẫn nặng về đấu tranh giai cấp và cách mạng ruộng đất. Các chính sách vạch ra chưa thật sự sát với phong trào thế giới và thực tiễn cách mạng trong nước.
                </p>
              </div>

              {/* Ý nghĩa */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-l-4 border-l-emerald-650">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-650 flex-shrink-0" />
                  <h6 className="text-xs font-bold text-stone-900 font-playfair uppercase">
                    Ý nghĩa của Đại hội
                  </h6>
                </div>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức của Đảng và phong trào cách mạng của quần chúng nhân dân, tạo điều kiện thuận lợi để cách mạng Việt Nam bước vào một cao trào đấu tranh mới.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
