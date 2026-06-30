"use client";
import React, { useState, useRef } from "react";
import { Compass, Ship, Flame, FileText, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdSearchForWay() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const steps = [
    {
      year: "1911",
      title: "Rời Tổ quốc đi tìm đường cứu nước",
      icon: Ship,
      content: "Nguyễn Tất Thành rời Tổ quốc đi tìm đường cứu nước do yêu cầu cấp thiết của giải phóng dân tộc. Qua thực tiễn nhiều nước, Người nhận thức rõ thế giới chỉ có hai giống người: \"bóc lột\" và \"bị bóc lột\", từ đó xác định rõ bạn và thù.",
      badge: "Nhận thức bản chất xã hội thực dân"
    },
    {
      year: "1917",
      title: "Tác động của Cách mạng Tháng Mười Nga",
      icon: Flame,
      content: "Thắng lợi của Cách mạng Tháng Mười Nga tác động mạnh mẽ, hướng Người tìm hiểu con đường cách mạng này và Lênin.",
      badge: "Định hướng tìm hiểu lý luận vô sản"
    },
    {
      year: "06/1919",
      title: "Gửi Bản Yêu sách của nhân dân An Nam",
      icon: FileText,
      content: "Người gia nhập Đảng Xã hội Pháp, lấy tên Nguyễn Ái Quốc và gửi Bản Yêu sách của nhân dân An Nam (8 điểm) tới Hội nghị Versailles. Dù không được đáp ứng, sự kiện này giúp Người nhận rõ bản chất của chủ nghĩa đế quốc, thực dân.",
      badge: "Nhận rõ bản chất giả tạo của đế quốc"
    },
    {
      year: "07/1920",
      title: "Đọc Luận cương của V.I.Lênin",
      icon: Compass,
      content: "Người đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I.Lênin, từ đó tìm thấy con đường giải phóng dân tộc đúng đắn.",
      badge: "Tìm ra con đường cứu nước đúng đắn"
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".search-way-content-box",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [activeStep]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Horizontal Steps */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = idx === activeStep;
          
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 flex items-center gap-3 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                isActive 
                  ? "bg-white border-red-800 shadow-md shadow-red-700/5 ring-1 ring-red-800/30" 
                  : "bg-stone-50 border-stone-200 hover:bg-stone-100 hover:border-stone-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                isActive 
                  ? "bg-red-50 text-red-800 border-red-200" 
                  : "bg-stone-250/30 text-stone-500 border-stone-200"
              }`}>
                <StepIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                  Mốc thời gian
                </div>
                <div className="text-xs md:text-sm font-bold text-stone-850">
                  {step.year}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div className="search-way-content-box bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold text-red-800 bg-red-50 px-2.5 py-1 rounded-full border border-red-100 uppercase tracking-wide">
            {steps[activeStep].year}
          </span>
        </div>
        
        <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-3 leading-snug">
          {steps[activeStep].title}
        </h5>
        
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-sm text-stone-700 text-justify mb-4">
          {steps[activeStep].content}
        </div>
        
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 bg-stone-100/50 p-3 rounded-lg border border-stone-150">
          <CheckCircle className="w-4 h-4 text-red-800 flex-shrink-0" />
          <span>Ý nghĩa: {steps[activeStep].badge}</span>
        </div>
      </div>

    </div>
  );
}
