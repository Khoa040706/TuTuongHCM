"use client";
import React, { useState, useRef } from "react";
import { Sun, Users, FileText, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdOctoberRevolution() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const steps = [
    {
      title: "Cách mạng Tháng Mười (1917)",
      short: "Bước ngoặt vĩ đại",
      icon: Sun,
      color: "border-red-700 text-red-800 bg-red-50",
      content: "Thắng lợi của Cách mạng Tháng Mười Nga năm 1917 đã làm biến đổi sâu sắc tình hình thế giới. Sự kiện này không chỉ có ý nghĩa to lớn đối với cuộc đấu tranh của giai cấp vô sản ở các nước tư bản, mà còn có tác động sâu sắc đến phong trào giải phóng dân tộc ở các thuộc địa.",
      summary: "Biến đổi sâu sắc thế giới, mở ra con đường giải phóng mới."
    },
    {
      title: "Quốc tế Cộng sản (03/1919)",
      short: "Bộ tham mưu vô sản",
      icon: Users,
      color: "border-amber-600 text-amber-700 bg-amber-50",
      content: "Quốc tế Cộng sản, do V.I.Lênin đứng đầu, được thành lập và trở thành bộ tham mưu chiến đấu, tổ chức lãnh đạo phong trào cách mạng vô sản thế giới. Tổ chức này không những vạch đường hướng chiến lược cho cách mạng vô sản mà đối với cả các vấn đề dân tộc và thuộc địa, giúp đỡ, chỉ đạo phong trào giải phóng dân tộc.",
      summary: "Định hướng chiến lược & trực tiếp giúp đỡ các phong trào giải phóng."
    },
    {
      title: "Luận cương Lênin (1920)",
      short: "Thức tỉnh thuộc địa",
      icon: FileText,
      color: "border-emerald-600 text-emerald-700 bg-emerald-50",
      content: "Đại hội II của Quốc tế Cộng sản (1920) đã thông qua luận cương về vấn đề dân tộc và thuộc địa do V.I.Lênin khởi xướng. Luận cương này đã ảnh hưởng mạnh mẽ và thức tỉnh phong trào giải phóng dân tộc ở các nước thuộc địa, trong đó có Việt Nam và Đông Dương.",
      summary: "Kim chỉ nam lý luận thức tỉnh ý chí đấu tranh giải phóng dân tộc."
    }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".step-content-box") : document.querySelectorAll(".step-content-box");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, [activeStep]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Timeline Steps Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
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
                  : "bg-stone-200/50 text-stone-500 border-stone-200"
              }`}>
                <StepIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                  Bước {idx + 1}
                </div>
                <div className="text-xs md:text-sm font-bold text-stone-850">
                  {step.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* active content box */}
      <div className="step-content-box bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold text-red-800 bg-red-50 px-2.5 py-1 rounded-full border border-red-100 uppercase tracking-wide">
            {steps[activeStep].short}
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
          <span>{steps[activeStep].summary}</span>
        </div>
      </div>

    </div>
  );
}
