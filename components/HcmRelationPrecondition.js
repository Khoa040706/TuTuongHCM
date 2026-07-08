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
  TrendingUp,
  Scale,
  Users,
  Activity,
  Award,
  Layers
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmRelationPrecondition() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-content",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.08 }
    );
  }, { scope: containerRef, dependencies: [activeStep] });

  // Dữ liệu lộ trình cách mạng
  const steps = [
    {
      title: "1. Giải phóng dân tộc",
      desc: "Lật đổ ách thống trị của đế quốc và phong kiến tay sai, giành lại chủ quyền.",
      subText: "Là nhiệm vụ đầu tiên, mở đường cho mọi bước phát triển tiếp theo."
    },
    {
      title: "2. Độc lập dân tộc",
      desc: "Thiết lập nền độc lập thực sự, hoàn toàn và gắn liền với thống nhất lãnh thổ.",
      subText: "Là cơ sở vững chắc, là tiền đề trực tiếp để tiến lên chủ nghĩa xã hội."
    },
    {
      title: "3. Cách mạng XHCN",
      desc: "Xây dựng chế độ mới trên mọi lĩnh vực chính trị, kinh tế, văn hóa, xã hội.",
      subText: "Cuộc cách mạng sâu sắc, toàn diện và triệt để nhất."
    },
    {
      title: "4. Xã hội Cộng sản",
      desc: "Mục tiêu cuối cùng: giải phóng hoàn toàn con người khỏi mọi ách áp bức, bóc lột.",
      subText: "Đời sống ấm no, hạnh phúc, tự do và phát triển toàn diện."
    }
  ];

  // 3 Nội dung cốt lõi của độc lập dân tộc
  const coreContents = [
    {
      id: "national-democratic",
      title: "Dân tộc & Dân chủ",
      short: "Bao gồm cả nội dung dân tộc và dân chủ.",
      detail: "Độc lập dân tộc không tách rời việc thực hiện các quyền dân chủ cơ bản của nhân dân lao động, giải quyết yêu cầu ruộng đất cho nông dân và các quyền tự do chính trị."
    },
    {
      id: "sovereignty",
      title: "Thống nhất & Toàn vẹn",
      short: "Gắn liền với thống nhất, chủ quyền và toàn vẹn lãnh thổ.",
      detail: "Nền độc lập phải trọn vẹn, không chấp nhận sự chia cắt lãnh thổ hay nhượng bộ chủ quyền quốc gia cho bất kỳ thế lực ngoại bang nào."
    },
    {
      id: "welfare",
      title: "Tự do & Hạnh phúc",
      short: "Gắn liền với tự do, cơm no, áo ấm, hạnh phúc cho dân.",
      detail: "Độc lập dân tộc chỉ có ý nghĩa thực sự khi nhân dân được hưởng cuộc sống tự do, hạnh phúc ấm no, được học hành, chữa bệnh và phát triển toàn diện."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
          Mục III.1
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
          Độc lập dân tộc là cơ sở, tiền đề để tiến lên CNXH
        </h3>
        <p className="text-stone-500 text-xs md:text-sm mt-1">
          Tìm hiểu lý luận cách mạng không ngừng của Hồ Chí Minh về vị thế tiền đề của Độc lập dân tộc đối với Chủ nghĩa Xã hội.
        </p>
      </div>

      {/* Chánh cương vắn tắt 1930 Block */}
      <div className="relative overflow-hidden p-6 rounded-3xl bg-stone-900 text-white shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">
            Cương lĩnh chính trị đầu tiên (1930)
          </span>
          <Award className="w-5 h-5 text-amber-500" />
        </div>
        <h4 className="font-serif font-black text-sm md:text-base text-stone-105">
          Định hướng chiến lược &quot;Cách mạng không ngừng&quot;
        </h4>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 relative italic text-stone-200 text-xs md:text-sm leading-relaxed font-serif">
          <Quote className="w-8 h-8 text-amber-500/10 absolute -top-3 -left-2" />
          <span className="relative z-10">
            &quot;Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.&quot;
          </span>
        </div>
        <p className="text-stone-300 text-xs leading-relaxed">
          Ngay từ khi thành lập Đảng, Hồ Chí Minh đã khẳng định giải phóng dân tộc chỉ là **chặng đường đầu tiên**, tạo tiền đề và sức mạnh mở đường cho chặng đường tiếp theo tiến thẳng lên chủ nghĩa xã hội và cộng sản chủ nghĩa.
        </p>
      </div>

      {/* Interactive Flow Timeline */}
      <div className="space-y-4">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Activity className="w-4.5 h-4.5 text-[var(--accent)]" />
          Tiến trình cách mạng không ngừng (Click từng bước)
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                activeStep === idx
                  ? "bg-white border-[var(--accent)] ring-2 ring-[rgba(var(--accent-rgb),0.15)] shadow-sm"
                  : "bg-stone-50 border-stone-200/80 hover:bg-stone-100/60"
              }`}
            >
              <div>
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  activeStep === idx 
                    ? "bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]"
                    : "bg-stone-200 text-stone-500"
                }`}>
                  Bước {idx + 1}
                </span>
                <h6 className="font-serif font-black text-stone-850 text-xs md:text-sm mt-2.5">
                  {step.title}
                </h6>
              </div>
              <span className="text-[10px] text-stone-400 font-bold mt-4">
                {activeStep === idx ? "Đang chọn ●" : "Xem chi tiết →"}
              </span>
            </button>
          ))}
        </div>

        {/* Step details box */}
        <div className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm animate-content space-y-2">
          <h6 className="font-serif font-black text-stone-900 text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></span>
            {steps[activeStep].title}
          </h6>
          <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
            {steps[activeStep].desc}
          </p>
          <p className="text-[var(--accent)] text-xs font-bold italic pt-1 border-t border-stone-100">
            → Ý nghĩa: {steps[activeStep].subText}
          </p>
        </div>
      </div>

      {/* 3 Core Contents of Independence (Interactive Flip/Hover cards) */}
      <div className="space-y-4">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4.5 h-4.5 text-[var(--accent)]" />
          Nội hàm Độc lập Dân tộc (Hover hoặc Chạm để lật/xem)
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coreContents.map((item, idx) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setHoveredCard(hoveredCard === item.id ? null : item.id)}
              className="relative min-h-[160px] p-5 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden bg-white shadow-sm flex flex-col justify-between"
              style={{
                borderColor: hoveredCard === item.id ? 'var(--accent)' : '#e7e5e4',
                boxShadow: hoveredCard === item.id ? '0 10px 15px -3px rgba(var(--accent-rgb), 0.1)' : ''
              }}
            >
              <div className="space-y-2">
                <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 text-xs font-black flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h6 className="font-serif font-black text-stone-900 text-xs md:text-sm">
                  {item.title}
                </h6>
              </div>

              {/* Toggle Content based on hover state */}
              <div className="mt-3 min-h-[60px] relative">
                <p className={`text-stone-500 text-xs leading-relaxed transition-all duration-300 ${
                  hoveredCard === item.id ? "opacity-0 invisible absolute" : "opacity-100 visible"
                }`}>
                  {item.short}
                </p>
                <p className={`text-stone-750 text-[11px] md:text-xs leading-normal transition-all duration-350 ${
                  hoveredCard === item.id ? "opacity-100 visible" : "opacity-0 invisible absolute"
                }`}>
                  {item.detail}
                </p>
              </div>

              <div className="text-right text-[9px] font-bold text-stone-400 uppercase tracking-widest pt-2 border-t border-stone-50">
                {hoveredCard === item.id ? "Đã lật card" : "Di chuột để xem kỹ"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why it is correct and creative */}
      <div className="bg-stone-100/50 p-6 rounded-3xl border border-stone-200 space-y-4">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4.5 h-4.5 text-[var(--accent)]" />
          Tính đúng đắn và sáng tạo của tư tưởng
        </h5>
        
        <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
          Quan điểm xem độc lập dân tộc là tiền đề cách mạng xã hội chủ nghĩa thể hiện tư duy cách mạng triệt để, sáng tạo của Hồ Chí Minh bởi vì:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white border border-stone-200 rounded-2xl space-y-2">
            <span className="w-6 h-6 rounded bg-stone-100 text-stone-800 text-[10px] font-black flex items-center justify-center">1</span>
            <h6 className="font-bold text-stone-900 text-xs uppercase pt-1">Đáp ứng yêu cầu khách quan cách mạng Việt Nam</h6>
            <p className="text-stone-600 text-xs leading-relaxed">
              Giải quyết triệt để mâu thuẫn chủ yếu là mâu thuẫn dân tộc (giữa nhân dân Việt Nam với đế quốc xâm lược) để tập hợp lực lượng cách mạng đông đảo nhất.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-2xl space-y-2">
            <span className="w-6 h-6 rounded bg-stone-100 text-stone-800 text-[10px] font-black flex items-center justify-center">2</span>
            <h6 className="font-bold text-stone-900 text-xs uppercase pt-1">Phù hợp với quy luật phát triển của thời đại</h6>
            <p className="text-stone-600 text-xs leading-relaxed">
              Gắn liền giải phóng dân tộc với giải phóng giai cấp và giải phóng con người, đặt cách mạng Việt Nam đi đúng quỹ đạo tiến bộ của thế giới thời kỳ quá độ lên chủ nghĩa xã hội.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
