"use client";
import React, { useState } from "react";
import { Flag, Building, ShieldAlert, User, ArrowRight, Sparkles } from "lucide-react";

export default function HcmBonGiaiPhongVisualizer() {
  const [activeStep, setActiveStep] = useState("dan-toc");

  const steps = [
    {
      id: "dan-toc",
      num: "1",
      title: "GIẢI PHÓNG DÂN TỘC",
      subtitle: "Xóa bỏ ách độc tài đế quốc",
      icon: Flag,
      color: "from-red-500 to-rose-600",
      borderColor: "border-red-300",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
      desc: "Giành lại độc lập cho Tổ quốc. Đối tượng giải phóng là cả cộng đồng dân tộc Việt Nam và các dân tộc bị áp bức trên thế giới. Đây là bước MỞ ĐƯỜNG."
    },
    {
      id: "xa-hoi",
      num: "2",
      title: "GIẢI PHÓNG XÃ HỘI",
      subtitle: "Xây dựng xã hội tiến bộ",
      icon: Building,
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-300",
      bgColor: "bg-amber-50",
      textColor: "text-amber-900",
      desc: "Xây dựng xã hội không có người bóc lột người, văn minh, tiên bộ, kinh tế phát triển cao, tiến dần lên CNXH và chủ nghĩa cộng sản."
    },
    {
      id: "giai-cap",
      num: "3",
      title: "GIẢI PHÓNG GIAI CẤP",
      subtitle: "Xóa bỏ bất công áp bức",
      icon: ShieldAlert,
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-300",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      desc: "Xóa bỏ sự áp bức của giai cấp này với giai cấp khác, giải phóng giai cấp công nhân và nông dân lao động, tiến tới xã hội không có giai cấp."
    },
    {
      id: "con-nguoi",
      num: "4",
      title: "GIẢI PHÓNG CON NGƯỜI",
      subtitle: "Tự do, hạnh phúc toàn diện",
      icon: User,
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-300",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-900",
      desc: "Xóa bỏ mọi điều kiện làm tha hóa con người; làm cho mỗi cá nhân được làm chủ xã hội, làm chủ tự nhiên và làm chủ bản thân mình."
    }
  ];

  const activeStepObj = steps.find((s) => s.id === activeStep);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-emerald-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Flag className="w-3.5 h-3.5" /> Con Người Là Mục Tiêu
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Tiến Trình 4 Nấc Thang "GIẢI PHÓNG"
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Kết hợp chặt chẽ và nối tiếp nhau: Giải phóng dân tộc mở đường cho giải phóng xã hội, giai cấp và con người"
          </p>
        </div>
      </div>

      {/* Steps Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 my-6 relative z-10">
        {steps.map((s) => {
          const Icon = s.icon;
          const isSelected = activeStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? `bg-white ${s.borderColor} shadow-md ring-2 ring-red-400/20 scale-102`
                  : "bg-white/80 border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`w-6 h-6 rounded-full bg-stone-100 ${s.textColor} font-black text-xs flex items-center justify-center`}>
                  {s.num}
                </span>
                <Icon className={`w-4 h-4 ${s.textColor}`} />
              </div>
              <span className={`text-xs font-black ${s.textColor}`}>
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      {activeStepObj && (
        <div className={`p-5 md:p-6 rounded-2xl bg-white border ${activeStepObj.borderColor} shadow-md relative z-10 animate-fadeIn mb-4`}>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${activeStepObj.bgColor} ${activeStepObj.textColor} border ${activeStepObj.borderColor} mb-2 inline-block`}>
            {activeStepObj.subtitle}
          </span>
          <h4 className={`text-base md:text-lg font-black ${activeStepObj.textColor} mb-2`}>
            Nội dung cốt lõi: {activeStepObj.title}
          </h4>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
            {activeStepObj.desc}
          </p>
        </div>
      )}

      {/* Relationship Note */}
      <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm relative z-10">
        <h5 className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-600" /> Mối quan hệ giữa các nấc thang giải phóng:
        </h5>
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
          Giải phóng dân tộc đã chứa đựng một phần giải phóng xã hội & con người. Giải phóng dân tộc <strong>mở đường</strong> cho giải phóng xã hội, giai cấp và con người phát triển toàn diện.
        </p>
      </div>
    </div>
  );
}
