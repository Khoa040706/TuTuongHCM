"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  Quote, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight,
  Bookmark,
  Calendar,
  Layers,
  Scale,
  Brain,
  History,
  TrendingUp
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmAppSteadfast() {
  const [selectedMilestone, setSelectedMilestone] = useState("1991"); // 1991 | 2011
  const [selectedPairing, setSelectedPairing] = useState(null); // null | kiendinh | khoa-hoc | tritue | hientai
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".animate-timeline-content") : document.querySelectorAll(".animate-timeline-content");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
      }
    }
  }, { scope: containerRef, dependencies: [selectedMilestone] });

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".animate-pairing-content") : document.querySelectorAll(".animate-pairing-content");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
      }
    }
  }, { scope: containerRef, dependencies: [selectedPairing] });

  // 4 Cặp phạm trù thống nhất trong Cương lĩnh
  const pairings = [
    {
      id: "kiendinh",
      title: "Kiên định & Đổi mới",
      desc: "Kiên định mục tiêu độc lập dân tộc và CNXH trên nền tảng chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh; đồng thời đổi mới tư duy, sáng tạo mô hình kinh tế, xã hội linh hoạt phù hợp với thực tiễn đất nước."
    },
    {
      id: "khoahoc",
      title: "Khoa học & Cách mạng",
      desc: "Vận dụng những quy luật khách quan khoa học của thời đại để dẫn đường, kết hợp với tinh thần cách mạng tiến công, triệt để và khát vọng sáng tạo không ngừng của quần chúng nhân dân."
    },
    {
      id: "tritue",
      title: "Trí tuệ & Tình cảm",
      desc: "Kết tinh từ đỉnh cao tri thức lý luận chính trị và khoa học thực tiễn của Đảng; kết hợp với lòng yêu nước thương dân nồng nàn, lòng tự tôn dân tộc sâu sắc của mỗi người dân Việt Nam."
    },
    {
      id: "hientai",
      title: "Hiện tại & Tương lai",
      desc: "Giải quyết hài hòa, hiệu quả những nhiệm vụ kinh tế - xã hội cụ thể, cấp bách trước mắt; đồng thời luôn hướng tới và bảo đảm cho mục tiêu chiến lược lâu dài là xây dựng xã hội cộng sản văn minh."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
          Mục IV.1
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
          Kiên định mục tiêu và con đường cách mạng Bác Hồ đã chọn
        </h3>
        <p className="text-stone-500 text-xs md:text-sm mt-1">
          Khẳng định lý luận và thực tiễn kiên định ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội trong giai đoạn hiện nay.
        </p>
      </div>

      {/* Intro block */}
      <div className="p-4.5 bg-stone-100/60 border border-stone-200 rounded-2xl text-stone-700 text-xs md:text-sm leading-relaxed">
        Tiến lên chủ nghĩa xã hội và chủ nghĩa cộng sản là quá trình hợp quy luật khách quan, hoàn toàn phù hợp với nguyện vọng thiết tha của nhân dân Việt Nam. Đây là sự lựa chọn lịch sử đúng đắn của chủ tịch Hồ Chí Minh và sự khẳng định nhất quán của Đảng Cộng sản Việt Nam.
      </div>

      {/* Cương lĩnh Timeline section */}
      <div className="space-y-4">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <History className="w-4.5 h-4.5 text-[var(--accent)]" />
          Tiến trình Cương lĩnh xây dựng đất nước (Click từng mốc)
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Milestone Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectedMilestone("1991")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
                selectedMilestone === "1991"
                  ? "bg-white border-[var(--accent)] ring-2 ring-[rgba(var(--accent-rgb),0.1)] shadow-sm"
                  : "bg-stone-50 border-stone-200/80 hover:bg-stone-100/60"
              }`}
            >
              <span className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center shrink-0 ${
                selectedMilestone === "1991"
                  ? "bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]"
                  : "bg-stone-200 text-stone-600"
              }`}>
                1991
              </span>
              <div>
                <h6 className="font-bold text-stone-850 text-xs md:text-sm">Đại hội VII của Đảng</h6>
                <p className="text-stone-500 text-[11px] mt-0.5">Thông qua Cương lĩnh xây dựng đất nước thời kỳ quá độ.</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedMilestone("2011")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
                selectedMilestone === "2011"
                  ? "bg-white border-[var(--accent)] ring-2 ring-[rgba(var(--accent-rgb),0.1)] shadow-sm"
                  : "bg-stone-50 border-stone-200/80 hover:bg-stone-100/60"
              }`}
            >
              <span className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center shrink-0 ${
                selectedMilestone === "2011"
                  ? "bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]"
                  : "bg-stone-200 text-stone-600"
              }`}>
                2011
              </span>
              <div>
                <h6 className="font-bold text-stone-850 text-xs md:text-sm">Đại hội XI của Đảng</h6>
                <p className="text-stone-500 text-[11px] mt-0.5">Bổ sung và phát triển Cương lĩnh lên tầm cao mới.</p>
              </div>
            </button>
          </div>

          {/* Timeline detail content */}
          <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between min-h-[140px] animate-timeline-content">
            {selectedMilestone === "1991" ? (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-wider">Cương lĩnh 1991</span>
                <h6 className="font-serif font-black text-stone-900 text-xs md:text-sm">Xây dựng đất nước thời kỳ quá độ</h6>
                <p className="text-stone-650 text-xs leading-relaxed font-sans">
                  Xuất phát từ bối cảnh trong nước gặp nhiều khó khăn và sự biến động phức tạp của tình hình quốc tế (Liên Xô và Đông Âu sụp đổ), Đảng ta đã thông qua Cương lĩnh nhằm định hướng vững chắc con đường đi lên chủ nghĩa xã hội.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-wider">Cương lĩnh 2011</span>
                <h6 className="font-serif font-black text-stone-900 text-xs md:text-sm">Đặc trưng & Mối quan hệ cơ bản</h6>
                <p className="text-stone-650 text-xs leading-relaxed font-sans">
                  Cương lĩnh bổ sung phát triển xác định rõ <strong>8 đặc trưng cơ bản</strong> của xã hội XHCN mà nhân dân ta xây dựng và <strong>8 mối quan hệ lớn</strong> cần giải quyết trong giai đoạn hiện nay nhằm từng bước hiện thực hóa mục tiêu.
                </p>
              </div>
            )}
            <div className="text-[10px] font-bold text-stone-400 text-right uppercase tracking-wider pt-2 border-t border-stone-50">
              Đại hội Đảng Cộng sản Việt Nam
            </div>
          </div>
        </div>
      </div>

      {/* Glorious Flag Banner (Bài học thứ nhất) */}
      <div className="bg-gradient-to-br from-red-600/5 to-amber-600/5 border border-red-650/20 p-6 rounded-3xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-red-100 text-red-700 shrink-0">
            <Bookmark className="w-4 h-4" />
          </span>
          <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
            Bài học kinh nghiệm lịch sử đầu tiên
          </h5>
        </div>
        <p className="text-stone-650 text-xs leading-relaxed">
          Đại hội XI đúc kết bài học đầu tiên từ thực tiễn phong phú của cách mạng Việt Nam:
        </p>

        {/* Glorious Flag Display Box */}
        <div className="relative p-5 rounded-2xl bg-white border border-red-200 shadow-sm text-stone-850 font-serif font-bold italic text-xs md:text-sm leading-relaxed text-center">
          <Quote className="w-8 h-8 text-red-600/10 absolute top-2 left-2" />
          <p className="relative z-10 py-3">
            &quot;Phải nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội – ngọn cờ quang vinh mà Chủ tịch Hồ Chí Minh đã trao lại cho thế hệ hôm nay và các thế hệ mai sau.&quot;
          </p>
        </div>
      </div>

      {/* The Dialectical Balance of Cương lĩnh (Interactive grid of 4 pairings) */}
      <div className="space-y-4">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Scale className="w-4.5 h-4.5 text-[var(--accent)]" />
          Sự thống nhất biện chứng trong định hướng Cương lĩnh (Click xem)
        </h5>
        
        <p className="text-stone-500 text-[11px] leading-relaxed">
          Cương lĩnh là ngọn đuốc soi đường cho cách mạng Việt Nam nhờ sự kết hợp hài hòa biện chứng giữa các giá trị cốt lõi:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {pairings.map((pair) => (
            <button
              key={pair.id}
              onClick={() => setSelectedPairing(selectedPairing === pair.id ? null : pair.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                selectedPairing === pair.id
                  ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                  : "bg-white text-stone-750 border-stone-250/60 hover:bg-stone-100/50"
              }`}
            >
              <span className="text-[10px] font-bold uppercase opacity-75">
                Đặc tính
              </span>
              <h6 className="font-serif font-bold text-xs md:text-sm mt-1">
                {pair.title}
              </h6>
            </button>
          ))}
        </div>

        {/* Pairing detail display */}
        {selectedPairing && (
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm animate-pairing-content space-y-2">
            <h6 className="font-serif font-black text-stone-900 text-sm flex items-center gap-2">
              <Brain className="w-4.5 h-4.5 text-[var(--accent)]" />
              {pairings.find(p => p.id === selectedPairing).title}
            </h6>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
              {pairings.find(p => p.id === selectedPairing).desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
