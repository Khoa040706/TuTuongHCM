"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Flag, 
  MapPin, 
  Award, 
  Swords, 
  Sparkles, 
  Heart,
  Quote, 
  ArrowRight,
  Calendar,
  BookOpen
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmIndependenceFreedom() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const milestones = [
    {
      id: 0,
      year: "Trước 1919",
      title: "Khát khao độc lập tự nhiên",
      shortDesc: "Truyền thống yêu nước chống ngoại xâm & khát vọng độc lập dân tộc.",
      icon: Heart,
      color: "from-amber-600 to-amber-700",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed">
            Lịch sử dựng nước và giữ nước của dân tộc Việt Nam gắn liền với <strong>truyền thống yêu nước, đấu tranh chống giặc ngoại xâm</strong>.
          </p>
          <div className="flex items-start gap-2.5 bg-amber-500/5 p-3.5 rounded-xl border border-amber-500/10">
            <span className="text-amber-700 mt-0.5 font-bold">→</span>
            <p className="text-stone-850 font-medium text-sm">
              Khát khao lớn: có nền <strong>độc lập cho dân tộc, tự do cho nhân dân</strong>.
            </p>
          </div>
          
          {/* Quote 1 */}
          <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/10 border-l-4 border-amber-600 shadow-sm hover:shadow transition-all duration-300">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
            <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
              &quot;Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, Tổ quốc tôi được độc lập.&quot;
            </p>
            <div className="mt-2.5 text-right">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">— Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      year: "1919 - 1920",
      title: "Yêu sách 8 điểm & Căn cứ pháp lý",
      shortDesc: "Gửi Yêu sách tại Hội nghị Vécxây & Xác lập quyền bình đẳng dân tộc.",
      icon: Compass,
      color: "from-amber-700 to-orange-700",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed">
            <strong>Năm 1919</strong>: nhân dịp Hội nghị Vécxây, thay mặt những người Việt Nam yêu nước, Nguyễn Ái Quốc gửi tới Hội nghị <strong>Yêu sách của nhân dân An Nam</strong> (8 điểm), đòi quyền bình đẳng pháp lý, tự do, dân chủ cho người dân Đông Dương.
          </p>
          <div className="flex items-start gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200/50">
            <span className="text-amber-700 font-bold">→</span>
            <p className="text-stone-700 text-sm italic">
              Yêu sách không được chấp nhận nhưng cho thấy: tư tưởng Hồ Chí Minh về quyền dân tộc thuộc địa – quyền bình đẳng, tự do đã hình thành.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500 block">Căn cứ lý luận quốc tế:</span>
            <p className="text-stone-750 text-sm">
              Người đã trích dẫn trực tiếp <strong>Tuyên ngôn độc lập của Mỹ (1776)</strong> và <strong>Tuyên ngôn nhân quyền và dân quyền của Cách mạng Pháp (1791)</strong>.
            </p>
          </div>

          {/* Quote 2 */}
          <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-600/10 border-l-4 border-amber-600 shadow-sm hover:shadow transition-all duration-300">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-600/10 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
            <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
              &quot;Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do... Đó là những lẽ phải không ai chối cãi được.&quot;
            </p>
            <div className="mt-2.5 text-right">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">— Hồ Chí Minh khẳng định giá trị thiêng liêng, bất biến</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      year: "1930",
      title: "Chánh cương vắn tắt",
      shortDesc: "Xác định mục tiêu cốt lõi của Đảng: Giải phóng dân tộc làm đầu.",
      icon: BookOpen,
      color: "from-amber-600 to-yellow-600",
      content: (
        <div className="space-y-4">
          <p className="text-stone-755 leading-relaxed">
            Trong <strong>Chánh cương vắn tắt của Đảng (1930)</strong>, Hồ Chí Minh xác định mục tiêu chính trị rõ ràng của Đảng Cộng sản Việt Nam ngay từ khi thành lập:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
            <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl flex gap-3">
              <span className="text-2xl font-black text-amber-600 font-playfair">1</span>
              <div>
                <h5 className="font-bold text-stone-850 text-sm mb-1">Đánh đổ phong kiến & đế quốc</h5>
                <p className="text-stone-600 text-xs leading-relaxed">Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến tay sai.</p>
              </div>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl flex gap-3">
              <span className="text-2xl font-black text-amber-600 font-playfair">2</span>
              <div>
                <h5 className="font-bold text-stone-850 text-sm mb-1">Giành độc lập hoàn toàn</h5>
                <p className="text-stone-600 text-xs leading-relaxed">Làm cho nước Nam được hoàn toàn độc lập, tự chủ.</p>
              </div>
            </div>
          </div>
          <p className="text-stone-600 text-xs leading-relaxed italic bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
            Việc đặt nhiệm vụ giải phóng dân tộc lên hàng đầu phản ánh tư duy độc lập, tự chủ của Người, kết hợp hài hòa giữa vấn đề dân tộc và vấn đề giai cấp.
          </p>
        </div>
      )
    },
    {
      id: 3,
      year: "1945",
      title: "Tuyên ngôn độc lập",
      shortDesc: "Tuyên bố nền độc lập chính thức của nước Việt Nam Dân chủ Cộng hòa.",
      icon: Award,
      color: "from-orange-600 to-amber-700",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed">
            Trong bản <strong>Tuyên ngôn độc lập (1945)</strong>, thay mặt Chính phủ lâm thời, Chủ tịch Hồ Chí Minh long trọng tuyên bố trước quốc dân đồng bào và toàn thế giới nền độc lập của dân tộc:
          </p>

          {/* Quote 3 */}
          <div className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-700/10 border-l-4 border-amber-700 shadow-sm hover:shadow transition-all duration-300">
            <Quote className="absolute top-2 left-2 w-12 h-12 text-amber-700/10 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
            <p className="relative z-10 font-serif italic text-stone-850 text-sm md:text-base leading-relaxed pl-4">
              &quot;Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy.&quot;
            </p>
            <div className="mt-2.5 text-right">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">— Tuyên ngôn độc lập, ngày 2-9-1945</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      year: "1946 - 1973",
      title: "Ý chí sắt đá bảo vệ độc lập",
      shortDesc: "Hai cuộc kháng chiến anh dũng chống Pháp, chống Mỹ và Hiệp định Paris.",
      icon: Swords,
      color: "from-amber-800 to-red-800",
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 leading-relaxed">
            Ý chí, quyết tâm giữ vững nền tự do, độc lập được thể hiện xuyên suốt qua <strong>2 cuộc kháng chiến chống Pháp và chống Mỹ</strong>:
          </p>

          <div className="space-y-4 my-2">
            {/* Lời kêu gọi Liên hợp quốc */}
            <div className="border-l-2 border-stone-250 pl-4 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-stone-100 text-[10px] font-bold text-stone-600 uppercase">
                Cuối năm 1946 / Gửi Liên hợp quốc
              </span>
              <p className="text-stone-700 text-xs md:text-sm">
                Người khẳng định nguyện vọng của dân tộc Việt Nam:
              </p>
              
              {/* Quote 4 */}
              <div className="relative group overflow-hidden p-4.5 rounded-xl bg-stone-50 border-l-3 border-amber-600/70 shadow-sm">
                <Quote className="absolute top-1.5 left-1.5 w-10 h-10 text-amber-600/5 -rotate-12 pointer-events-none" />
                <p className="relative z-10 font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed pl-3">
                  &quot;Nhân dân chúng tôi thành thật mong muốn hòa bình... kiên quyết chiến đấu... bảo vệ những quyền thiêng liêng nhất: toàn vẹn lãnh thổ cho Tổ quốc và độc lập cho đất nước.&quot;
                </p>
              </div>
            </div>

            {/* Toàn quốc kháng chiến */}
            <div className="border-l-2 border-stone-250 pl-4 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-[10px] font-bold text-amber-700 uppercase">
                Lời kêu gọi Toàn quốc kháng chiến (19-12-1946)
              </span>
              <p className="text-stone-700 text-xs md:text-sm">
                Ý chí chiến đấu sắt đá thà hy sinh tất cả để giữ vững độc lập chủ quyền:
              </p>

              {/* Quote 5 */}
              <div className="relative group overflow-hidden p-4.5 rounded-xl bg-gradient-to-br from-amber-50/5 to-amber-700/5 border-l-3 border-amber-600 shadow-sm">
                <Quote className="absolute top-1.5 left-1.5 w-10 h-10 text-amber-600/5 -rotate-12 pointer-events-none" />
                <p className="relative z-10 font-serif italic text-stone-850 text-xs md:text-sm leading-relaxed pl-3">
                  &quot;Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.&quot;
                </p>
              </div>
            </div>

            {/* Chân lý thời đại - 1965 */}
            <div className="border-l-2 border-stone-250 pl-4 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-50 text-[10px] font-bold text-orange-700 uppercase">
                Kháng chiến chống Mỹ / Năm 1965
              </span>
              <p className="text-stone-700 text-xs md:text-sm">
                Khi đế quốc Mỹ mở rộng chiến tranh (chiến lược "Chiến tranh cục bộ", phá hoại miền Bắc), Hồ Chí Minh nêu bật chân lý thời đại:
              </p>

              {/* Quote 6 */}
              <div className="relative group overflow-hidden p-4.5 rounded-xl bg-gradient-to-br from-amber-50/5 to-orange-600/5 border-l-3 border-amber-600 shadow-sm">
                <Quote className="absolute top-1.5 left-1.5 w-10 h-10 text-amber-600/5 -rotate-12 pointer-events-none" />
                <p className="relative z-10 font-serif italic text-stone-850 text-sm leading-relaxed pl-3">
                  &quot;Không có gì quý hơn độc lập, tự do.&quot;
                </p>
              </div>
            </div>
            
            {/* Hiệp định Paris */}
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 mt-3 flex items-start gap-2.5">
              <span className="text-amber-600 font-bold mt-0.5">→</span>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Nhân dân Việt Nam anh dũng đánh thắng đế quốc Mỹ, buộc Mỹ phải ký kết <strong>Hiệp định Paris (1973)</strong>, cam kết tôn trọng các quyền dân tộc cơ bản của nhân dân Việt Nam và rút hết quân Mỹ về nước.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];


  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-white">
      
      {/* SECTION 1: INTERACTIVE MIND MAP */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Sparkles className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Sơ đồ tiến trình tư tưởng độc lập, tự do
          </h4>
        </div>
        
        {/* Mind Map Container */}
        <div className="bg-stone-50 rounded-2xl p-4 md:p-6 border border-stone-200/80 shadow-sm relative overflow-hidden">
          
          {/* Horizontal Connection Line for desktop */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-600/40 to-amber-700/20 z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 md:gap-2">
            {milestones.map((ms, idx) => {
              const Icon = ms.icon;
              const isActive = activeMilestone === ms.id;
              
              return (
                <div 
                  key={ms.id} 
                  onClick={() => handleTimelineClick(ms.id)}
                  className={`flex-1 flex flex-row md:flex-col items-center gap-3 p-3 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                    isActive 
                      ? "bg-accent border-accent text-white shadow-md shadow-accent/15 scale-[1.02]" 
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-amber-400/40"
                  }`}
                >
                  {/* Icon Node */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                    isActive ? "bg-white text-accent" : "bg-accent/10 text-accent"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Info Node */}
                  <div className="text-left md:text-center space-y-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? "text-amber-100" : "text-accent"
                    }`}>
                      {ms.year}
                    </span>
                    <h5 className="text-xs md:text-sm font-bold leading-tight font-sans line-clamp-1">
                      {ms.title}
                    </h5>
                    <p className={`text-[10.5px] leading-relaxed line-clamp-2 md:line-clamp-3 hidden md:block ${
                      isActive ? "text-amber-50/80" : "text-stone-500"
                    }`}>
                      {ms.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: TIMELINE & DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Timeline Navigation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
              <Calendar className="w-4 h-4" />
            </span>
            <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
              Dòng thời sự lịch sử
            </h4>
          </div>

          <div ref={timelineRef} className="relative border-l-2 border-stone-200 pl-6 ml-3 space-y-6 py-2">
            {milestones.map((ms) => {
              const isActive = activeMilestone === ms.id;
              return (
                <div 
                  key={ms.id} 
                  id={`milestone-card-${ms.id}`}
                  onClick={() => setActiveMilestone(ms.id)}
                  className={`group relative p-4 rounded-xl border transition-all duration-350 cursor-pointer select-none ${
                    isActive 
                      ? "bg-amber-50/75 border-amber-600 shadow-sm" 
                      : "bg-white border-stone-200/80 hover:border-amber-400/50 hover:bg-stone-50/30"
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className={`absolute -left-[33px] top-[26px] w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-amber-600 border-amber-600 scale-125 shadow-[0_0_8px_rgba(217,119,6,0.5)]" 
                      : "bg-stone-200 border-white group-hover:bg-amber-500 group-hover:border-amber-100"
                  }`} />

                  {/* Year Tag */}
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-black uppercase tracking-widest ${
                      isActive ? "text-amber-700" : "text-stone-500"
                    }`}>
                      {ms.year}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-extrabold text-amber-605 bg-amber-500/10 px-2 py-0.5 rounded">
                        Đang xem
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h5 className="font-bold text-stone-850 text-sm md:text-base leading-snug group-hover:text-amber-700 transition-colors">
                    {ms.title}
                  </h5>
                  
                  {/* Short Desc */}
                  <p className="text-xs text-stone-550 leading-relaxed mt-1 line-clamp-2">
                    {ms.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Node Detail Panel */}
        <div className="lg:col-span-7 timeline-detail-box">
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm min-h-[380px] flex flex-col justify-between">
            <div>
              {/* Header inside Detail */}
              <div className="flex items-center justify-between border-b border-stone-150 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className={`p-2.5 rounded-xl bg-gradient-to-br ${milestones[activeMilestone].color} text-white shadow-sm`}>
                    {React.createElement(milestones[activeMilestone].icon, { className: "w-5 h-5" })}
                  </span>
                  <div>
                    <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest leading-none">
                      {milestones[activeMilestone].year}
                    </span>
                    <h4 className="text-base md:text-lg font-bold text-stone-850 font-sans tracking-tight">
                      {milestones[activeMilestone].title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="text-sm text-stone-700 space-y-4">
                {milestones[activeMilestone].content}
              </div>
            </div>

            {/* Navigation Button inside detail panel */}
            <div className="mt-8 pt-4 border-t border-stone-150 flex justify-between items-center text-xs">
              <span className="text-stone-400 font-medium">
                Mục {activeMilestone + 1} trên {milestones.length}
              </span>
              
              <div className="flex gap-2">
                <button
                  disabled={activeMilestone === 0}
                  onClick={() => setActiveMilestone(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-250 font-bold hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-white cursor-pointer select-none bg-white text-stone-700"
                >
                  Trước
                </button>
                {activeMilestone < milestones.length - 1 && (
                  <button
                    onClick={() => setActiveMilestone(prev => Math.min(milestones.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-accent text-white font-bold hover:bg-accent/90 cursor-pointer select-none flex items-center gap-1 border-none shadow-sm"
                  >
                    Tiếp theo <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
