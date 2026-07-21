"use client";
import React, { useState } from "react";
import { ShieldAlert, Users, Feather, Repeat, Sparkles, Award } from "lucide-react";

export default function HcmCultureFrontVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const peopleRoles = [
    {
      step: "01",
      title: "NGƯỜI SÁNG TÁC",
      role: "Nguồn Cội Sáng Tạo",
      icon: Feather,
      color: "border-amber-400 bg-amber-50 text-amber-900",
      desc: "Quần chúng là những người sáng tác rất hay, cung cấp cho các nhà hoạt động văn hóa những tư liệu thực tiễn quý giá."
    },
    {
      step: "02",
      title: "NGƯỜI THẨM ĐỊNH",
      role: "Trọng Tài Khách Quan",
      icon: Award,
      color: "border-emerald-400 bg-emerald-50 text-emerald-900",
      desc: "Chính nhân dân là những người thẩm định khách quan, trung thực, chính xác nhất các sản phẩm văn hóa nghệ thuật."
    },
    {
      step: "03",
      title: "NGƯỜI HƯỞNG THỤ",
      role: "Mục Tiêu Phục Vụ",
      icon: Users,
      color: "border-red-400 bg-red-50 text-red-900",
      desc: "Nhân dân là đối tượng thụ hưởng các giá trị văn hóa. Mọi hoạt động văn hóa nghệ thuật sinh ra là để phục vụ nhân dân."
    }
  ];

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Background Soft Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5" /> Mô Phỏng Tương Tác
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Mặt Trận Văn Hóa & 3 Vai Trò Của Nhân Dân
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Văn hóa nghệ thuật là một mặt trận. Anh chị em nghệ sĩ là chiến sĩ trên mặt trận ấy."
          </p>
        </div>
      </div>

      {/* Battlefront Quote Card */}
      <div className="my-6 p-5 rounded-2xl bg-white border border-red-200 shadow-md relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 rounded-xl bg-red-100 text-red-700">
            <Feather className="w-5 h-5" />
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm md:text-base">
            Nhiệm Vụ Chiến Sĩ Văn Nghệ "Phò Chính Trừ Tà"
          </h4>
        </div>
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed italic font-serif bg-red-50/60 p-3 rounded-xl border-l-4 border-red-500">
          "Ngòi bút là vũ khí sắc bén... Phê bình nghiêm khắc những thói xấu tham ô, lười biếng, lãng phí, quan liêu; ca tụng chân thật người tốt việc tốt... Đó chính là chất thép của văn nghệ theo tinh thần kháng chiến hóa văn hóa, văn hóa kháng chiến."
        </p>
      </div>

      {/* 3 Roles of the People Interactive Loop */}
      <div className="mt-8 pt-6 border-t border-stone-200 relative z-10">
        <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-800 mb-2 flex items-center gap-2">
          <Repeat className="w-4 h-4" /> Vòng Lặp Sáng Tác: "Từ trong quần chúng ra - Về sâu trong quần chúng"
        </h4>
        <p className="text-stone-600 text-xs mb-4">
          Bấm vào từng giai đoạn để xem 3 vai trò hòa quyện của Nhân dân trong văn hóa:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {peopleRoles.map((r, idx) => {
            const Icon = r.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? `${r.color} shadow-md scale-102 ring-2 ring-amber-400/20`
                    : "bg-white border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-black text-amber-700">{r.step}</span>
                  <Icon className="w-4 h-4 text-amber-700" />
                </div>
                <h5 className="font-extrabold text-sm text-stone-900">{r.title}</h5>
                <span className="text-[10px] uppercase font-bold text-stone-500">{r.role}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Box */}
        <div className="mt-4 p-5 rounded-2xl bg-white border border-amber-200 shadow-md animate-fadeIn">
          <h5 className="text-sm font-bold text-amber-900 mb-1 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" /> {peopleRoles[activeStep].title} - {peopleRoles[activeStep].role}
          </h5>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
            {peopleRoles[activeStep].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
