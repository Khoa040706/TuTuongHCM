"use client";
import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Heart,
  Quote, 
  Map, 
  Split,
  Calendar,
  Layers,
  ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmIndependenceUnity() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const splitSteps = [
    {
      id: 0,
      period: "Thực dân Pháp xâm lược",
      title: "Chia rẽ đất nước thành Ba Kỳ",
      icon: Split,
      color: "from-amber-600 to-amber-700",
      desc: "Để dễ bề cai trị, thực dân Pháp đã chia cắt đất nước ta ra làm ba kỳ (Bắc Kỳ, Trung Kỳ, Nam Kỳ), thiết lập các chế độ cai trị, luật pháp riêng rẽ hòng phá vỡ sự thống nhất lâu đời của dân tộc Việt Nam."
    },
    {
      id: 1,
      period: "Sau Cách mạng Tháng Tám (1945)",
      title: "Nạn Thù trong Giặc ngoài",
      icon: Layers,
      color: "from-orange-600 to-amber-800",
      desc: "Ngay sau độc lập, miền Bắc bị hơn 20 vạn quân Tưởng Giới Thạch chiếm đóng, trong khi miền Nam bị thực dân Pháp quay trở lại xâm lược. Sau đó, Pháp lại lập ra chính quyền 'Nam Kỳ tự trị' lâm thời hòng chia cắt đất nước một lần nữa."
    },
    {
      id: 2,
      period: "Sau Hiệp định Giơnevơ (1954)",
      title: "Đất nước tạm thời chia làm hai miền",
      icon: Map,
      color: "from-amber-700 to-yellow-600",
      desc: "Sau chiến thắng Điện Biên Phủ, Hiệp định Giơnevơ được ký kết, lấy vĩ tuyến 17 làm ranh giới quân sự tạm thời, đất nước bị chia cắt làm hai miền Bắc - Nam. Bác Hồ và Đảng tiếp tục kiên trì lãnh đạo đấu tranh thống nhất Tổ quốc."
    }
  ];

  const declarations = [
    {
      year: "Năm 1946",
      source: "Thư gửi đồng bào Nam Bộ",
      quote: "&quot;Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.&quot;"
    },
    {
      year: "Tháng 2/1958",
      source: "Lời khẳng định đanh thép",
      quote: "&quot;Nước Việt Nam là một, dân tộc Việt Nam là một.&quot;"
    },
    {
      year: "Năm 1969",
      source: "Trích Di chúc lịch sử",
      quote: "&quot;Dù khó khăn gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ nhất định phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam, Bắc nhất định sẽ sum họp một nhà.&quot;"
    }
  ];

  useGSAP(() => {
    // GSAP Step panel animations
    gsap.fromTo(".unity-step-panel", 
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { dependencies: [activeStep], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-2 select-text font-sans bg-white space-y-10">
      
      {/* SECTION 1: ÂM MƯU CHIA CẮT ĐẤT NƯỚC CỦA KẺ THÙ */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Split className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            Âm mưu chia cắt bờ cõi của kẻ thù
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Trong lịch sử, dân tộc Việt Nam luôn phải đương đầu với các âm mưu xâm lược hiểm ác hòng <strong>chia cắt đất nước, phá vỡ khối đại đoàn kết</strong> của kẻ thù:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Step buttons (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {splitSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer select-none flex items-center gap-3.5 ${
                    isActive 
                      ? "bg-amber-50 border-amber-600 shadow-sm" 
                      : "bg-white border-stone-200 hover:border-amber-400/40 hover:bg-stone-50/50 text-stone-600"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    isActive ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-700"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">
                      {step.period}
                    </span>
                    <h5 className="font-extrabold text-stone-850 text-xs md:text-sm leading-tight font-sans">
                      {step.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Detail Panel (Right 7 cols) */}
          <div className="lg:col-span-7 unity-step-panel">
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 md:p-6 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                {React.createElement(splitSteps[activeStep].icon, { className: "w-24 h-24" })}
              </div>
              
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block">
                  Bối cảnh chia cắt:
                </span>
                <h4 className="text-sm md:text-base font-extrabold text-stone-850">
                  {splitSteps[activeStep].title}
                </h4>
                <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                  {splitSteps[activeStep].desc}
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center text-xs border-t border-stone-200/60 pt-4">
                <span className="text-stone-400 font-medium">Chi tiết giai đoạn</span>
                {activeStep < splitSteps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 cursor-pointer select-none flex items-center gap-1 border-none shadow-sm"
                  >
                    Tiếp theo <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: 3 TUYÊN NGÔN THỐNG NHẤT BẤT HỦ */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Quote className="w-4 h-4" />
          </span>
          <h4 className="text-sm font-extrabold text-stone-850 uppercase tracking-wider">
            3 Tuyên bố khẳng định thống nhất nước nhà
          </h4>
        </div>

        <p className="text-stone-750 text-xs md:text-sm leading-relaxed">
          Đối phó với dã tâm chia rẽ lãnh thổ của địch, Chủ tịch Hồ Chí Minh đã nhiều lần tuyên bố đanh thép trước nhân dân thế giới và quốc dân đồng bào, khẳng định chân lý độc lập luôn gắn liền với thống nhất đất nước:
        </p>

        {/* Quotes Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {declarations.map((d, idx) => (
            <div 
              key={idx}
              className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:border-amber-400/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-500/5 -rotate-12 pointer-events-none" />
              
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-stone-150 pb-2">
                  <span className="text-xs font-black text-amber-700 uppercase tracking-wider">
                    {d.year}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold">
                    {d.source}
                  </span>
                </div>
                
                <p 
                  className="font-serif italic text-stone-800 text-xs md:text-sm leading-relaxed pl-2 border-l-2 border-amber-600/40"
                  dangerouslySetInnerHTML={{ __html: d.quote }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: KẾT LUẬN TƯ TƯỞNG XUYÊN SUỐT */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1d1a] to-[#141312] border border-[#2a2926] p-6 text-white shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.08),transparent_60%)] pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Tư tưởng xuyên suốt cuộc đời</span>
            </div>
            <h4 className="font-playfair font-black text-lg md:text-xl text-amber-100 tracking-tight">
              Độc lập dân tộc gắn liền với Thống nhất Tổ quốc
            </h4>
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed max-w-3xl">
              Tư tưởng độc lập dân tộc gắn liền với thống nhất Tổ quốc, toàn vẹn lãnh thổ không chỉ là nguyên tắc chính trị bất di bất dịch, mà còn là <strong>sợi chỉ đỏ xuyên suốt trọn vẹn cuộc đời hoạt động cách mạng</strong> của Hồ Chí Minh, là mục tiêu phấn đấu không ngừng nghỉ của cả dân tộc Việt Nam.
            </p>
          </div>
          
          <div className="shrink-0 flex items-center justify-center bg-amber-600/10 border border-amber-600/25 p-4 rounded-full text-amber-400">
            <Heart className="w-10 h-10 animate-pulse text-amber-500" />
          </div>
        </div>
      </div>

    </div>
  );
}
