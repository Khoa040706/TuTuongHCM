"use client";
import React, { useState, useRef } from "react";
import { 
  Globe, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle, 
  Calendar, 
  Bookmark, 
  Users2, 
  Flame, 
  Trophy, 
  TrendingUp,
  MapPin
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdMovement19301931() {
  const [activeTab, setActiveTab] = useState(0);
  const [timelineStep, setTimelineStep] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Bối cảnh lịch sử", icon: Globe },
    { title: "Diễn biến & Đỉnh cao Nghệ Tĩnh", icon: Calendar },
    { title: "Tổn thất & Bài học kinh nghiệm", icon: Trophy }
  ];

  const contextCards = [
    {
      title: "Khủng hoảng kinh tế thế giới (1929-1933)",
      icon: Globe,
      desc: "Hệ thống tư bản chủ nghĩa lâm vào suy thoái trầm trọng làm mâu thuẫn xã hội tăng cao; trong khi đó Liên Xô đạt nhiều thành tựu lớn trong xây dựng đất nước."
    },
    {
      title: "Chính sách tàn bạo của thực dân Pháp",
      icon: ShieldAlert,
      desc: "Pháp tăng cường vơ vét, bóc lột Đông Dương để bù đắp tổn thất chính quốc, đồng thời thực hiện \"khủng bố trắng\" tàn khốc sau khởi nghĩa Yên Bái (2-1930). Mâu thuẫn giữa dân tộc Việt Nam với đế quốc và tay sai phát triển cực kỳ gay gắt."
    },
    {
      title: "Nhân tố lãnh đạo quyết định",
      icon: TrendingUp,
      desc: "Đảng Cộng sản Việt Nam ra đời với hệ thống tổ chức thống nhất và Cương lĩnh chính trị đúng đắn, nhanh chóng nắm quyền lãnh đạo duy nhất đối với cách mạng Việt Nam."
    }
  ];

  const timelineSteps = [
    {
      period: "Tháng 1 - 4/1930",
      title: "Giai đoạn đầu đấu tranh bùng nổ",
      desc: "Các cuộc bãi công của công nhân liên tiếp nổ ra tại các nhà máy lớn (xi măng Hải Phòng, dầu Nhà Bè, đồn điền Phú Riềng...); nông dân nhiều địa phương (Hà Nam, Thái Bình, Nghệ An...) cũng xuống đường biểu tình.",
      badge: "Công nông liên kết bước đầu"
    },
    {
      period: "Tháng 5 - 8/1930",
      title: "Cao trào đấu tranh bùng nổ mạnh mẽ",
      desc: "Phong trào bùng lên mạnh mẽ nhân ngày Quốc tế Lao động (1-5) với nhiều hình thức đấu tranh phong phú. Điển hình là cuộc tổng bãi công của công nhân khu công nghiệp Bến Thủy - Vinh (8-1930) đánh dấu bước ngoặt kịch liệt mới.",
      badge: "Bước ngoặt kịch liệt mới"
    },
    {
      period: "Tháng 9/1930",
      title: "Đỉnh cao phong trào tại Nghệ - Tĩnh",
      desc: "Phong trào đạt đỉnh điểm ở nông thôn hai tỉnh Nghệ An và Hà Tĩnh. Dù bị thực dân Pháp ném bom tàn sát đẫm máu (như vụ Hưng Nguyên giết chết 171 người), quần chúng vẫn kiên cường đấu tranh, làm tan rã bộ máy chính quyền đế quốc và tay sai ở nhiều nơi.",
      badge: "Đỉnh điểm đấu tranh kiên cường"
    },
    {
      period: "Cuối năm 1930",
      title: "Chính quyền Xô viết Nghệ Tĩnh ra đời",
      desc: "Các tổ chức Đảng lãnh đạo Ban chấp hành Nông hội đứng ra quản lý mọi mặt đời sống xã hội ở nông thôn, thực hiện chức năng của một chính quyền cách mạng dưới hình thức các Ủy ban tự quản theo kiểu Xô viết.",
      badge: "Hình thức chính quyền cách mạng kiểu mới"
    }
  ];
  useGSAP(() => {
    if (!containerRef.current) return;
    const panels = containerRef.current.querySelectorAll(".movement-panel-box");
    if (panels.length > 0) {
      gsap.fromTo(panels,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
      );
    }
  }, { dependencies: [activeTab], scope: containerRef });

  useGSAP(() => {
    if (!containerRef.current) return;
    const box = containerRef.current.querySelector(".timeline-desc-box");
    if (box) {
      gsap.fromTo(box,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, { dependencies: [timelineStep], scope: containerRef });

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

      {/* Main panels */}
      <div className="movement-panel-box min-h-[350px]">
        
        {/* TAB 0: BỐI CẢNH LỊCH SỬ */}
        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contextCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-850 flex items-center justify-center border border-red-100 flex-shrink-0">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                      {card.title}
                    </h6>
                  </div>
                  <p className="text-xs text-stone-655 leading-relaxed text-justify">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 1: DIỄN BIẾN & ĐỈNH CAO */}
        {activeTab === 1 && (
          <div className="space-y-6">
            {/* Step selector */}
            <div className="flex flex-col sm:flex-row gap-3">
              {timelineSteps.map((step, idx) => {
                const isActive = idx === timelineStep;
                return (
                  <button
                    key={idx}
                    onClick={() => setTimelineStep(idx)}
                    className={`flex-1 flex items-center gap-3 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? "bg-white border-red-800 shadow-sm ring-1 ring-red-800/25" 
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border text-xs font-black ${
                      isActive ? "bg-red-50 text-red-800 border-red-200" : "bg-stone-200/50 text-stone-500 border-stone-200"
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                        Thời gian
                      </div>
                      <div className="text-xs font-bold text-stone-850">
                        {step.period}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step description */}
            <div className="timeline-desc-box bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-red-800 bg-red-50 px-2.5 py-1 rounded-full border border-red-100 uppercase tracking-wide">
                  {timelineSteps[timelineStep].period}
                </span>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  {timelineSteps[timelineStep].badge}
                </span>
              </div>
              
              <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-3 leading-snug">
                {timelineSteps[timelineStep].title}
              </h5>
              
              <p className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-xs md:text-sm text-stone-700 text-justify">
                {timelineSteps[timelineStep].desc}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: TỔN THẤT & BÀI HỌC */}
        {activeTab === 2 && (
          <div className="space-y-6">
            
            {/* Repression & Loss Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-l-4 border-l-red-800">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0" />
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                    Thủ đoạn đàn áp khốc liệt của kẻ thù
                  </h6>
                </div>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Từ cuối năm 1930, thực dân Pháp tập trung toàn bộ lực lượng quân sự tiến hành khủng bố dã man, kết hợp với các thủ đoạn chính trị nguy hiểm như cưỡng bức đầu thú, phát thẻ quy thuận nhằm triệt hạ tổ chức.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm border-l-4 border-l-red-800">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <ShieldAlert className="w-5 h-5 text-red-850 flex-shrink-0" />
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                    Tổn thất lớn của cách mạng
                  </h6>
                </div>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Đầu năm 1931, hàng vạn người yêu nước và chiến sĩ bị bắt, giết hoặc đày ải. Đến tháng 4/1931, toàn bộ Ban Chấp hành Trung ương Đảng bị bắt, các tổ chức cơ sở Đảng hầu hết bị tan rã.
                </p>
              </div>

            </div>

            {/* Significance & Lessons */}
            <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50">
              <h6 className="text-xs md:text-sm font-bold text-stone-800 mb-4 font-playfair uppercase tracking-wide">
                Ý nghĩa lịch sử & Bài học kinh nghiệm vô giá
              </h6>

              <div className="space-y-4">
                
                {/* Ý nghĩa 1 */}
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-stone-850">Khẳng định năng lực lãnh đạo cách mạng của giai cấp vô sản</h6>
                    <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                      Minh chứng trong thực tiễn quyền lãnh đạo duy nhất và năng lực cách mạng vĩ đại của giai cấp vô sản thông qua chính đảng tiên phong của mình.
                    </p>
                  </div>
                </div>

                {/* Ý nghĩa 2 */}
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-stone-850">Xây dựng niềm tin & rèn luyện quần chúng</h6>
                    <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                      Đem lại cho nông dân niềm tin vững chắc vào giai cấp công nhân, đồng thời rèn luyện tinh thần anh dũng của quần chúng nhân dân cho các cuộc đấu tranh giành độc lập về sau.
                    </p>
                  </div>
                </div>

                {/* Bài học kinh nghiệm */}
                <div className="pt-3 border-t border-stone-200/80">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-3">
                    Bài học kinh nghiệm vô giá
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div className="bg-white border border-stone-200/60 rounded-xl p-3 shadow-xs">
                      <span className="text-[10px] font-bold text-red-850 block mb-1">Nhiệm vụ chiến lược</span>
                      <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                        Bài học về việc kết hợp nhuần nhuyễn hai nhiệm vụ chiến lược cốt lõi: <strong>phản đế</strong> và <strong>phản phong</strong>.
                      </p>
                    </div>

                    <div className="bg-white border border-stone-200/60 rounded-xl p-3 shadow-xs">
                      <span className="text-[10px] font-bold text-amber-700 block mb-1">Liên minh công nông</span>
                      <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                        Bài học xây dựng khối <strong>liên minh công nông</strong> vững chắc dưới sự lãnh đạo duy nhất của giai cấp công nhân.
                      </p>
                    </div>

                    <div className="bg-white border border-stone-200/60 rounded-xl p-3 shadow-xs">
                      <span className="text-[10px] font-bold text-emerald-700 block mb-1">Phương pháp đấu tranh</span>
                      <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                        Kết hợp phong trào nông thôn với thành thị, kết hợp đấu tranh chính trị hòa bình với đấu tranh vũ trang cách mạng.
                      </p>
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
