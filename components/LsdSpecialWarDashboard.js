"use client";
import React from "react";
import { ShieldAlert, Crosshair, Skull, Award, Layers } from "lucide-react";

export default function LsdSpecialWarDashboard() {
  const steps = [
    {
      phase: "Giai đoạn 1 (1961 - 1962)",
      desc: "Mỹ công bố kế hoạch Staley-Taylor, tăng cường cố vấn Mỹ, lập **17.000 Ấp chiến lược** dồn dân nhằm 'bình định' miền Nam trong 18 tháng."
    },
    {
      phase: "Giai đoạn 2 (1962 - 1963)",
      desc: "Áp dụng chiến thuật **'Trực thăng vận'**, **'Thiết xa vận'**; rải chất độc hóa học (Dioxin); bị giáng đòn đau tại trận **Ấp Bắc (2-1-1963)**; Diệm - Nhu bị đảo chính sát hại (11-1963)."
    },
    {
      phase: "Giai đoạn 3 (1964 - 1965)",
      desc: "Kế hoạch Johnson-McNamara; chính quyền Sài Gòn hoảng loạn qua 10 cuộc đảo chính quân sự. Chiến tranh đặc biệt phá sản hoàn toàn sau các chiến thắng **Bình Giã, Ba Gia, Đồng Xoài**."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldAlert size={14} /> Chiến lược chiến tranh toàn cầu Mỹ
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đánh Bại Chiến Lược "Chiến Tranh Đặc Biệt" Của Mỹ (1961 - 1965)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Âm mưu "Dùng người Việt đánh người Việt" của Tổng thống Mỹ John F. Kennedy.
        </p>
      </div>

      {/* Layer 1: Formula & Core Nature */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-500 shadow-md mb-8">
        <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
          <Crosshair size={24} className="text-rose-600" />
          <h4 className="text-lg font-bold font-serif text-rose-700 dark:text-rose-400">
            Công Thức & Xương Sống Của Chiến Tranh Đặc Biệt
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-800 dark:text-slate-200">
          <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            <strong className="text-rose-900 dark:text-rose-300 font-serif block mb-1">Công thức thực hiện:</strong>
            <p className="font-semibold text-rose-800 dark:text-rose-300">
              Quân đội chính quyền Sài Gòn + Vũ khí, trang bị, phương tiện chiến tranh Mỹ + Do **Cố vấn Mỹ** chỉ huy trực tiếp.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200">
            <strong className="text-amber-900 dark:text-amber-300 font-serif block mb-1">"Xương sống" chiến lược:</strong>
            <p className="font-semibold text-amber-800 dark:text-amber-300">
              Quốc sách **"Ấp chiến lược"** nhằm tách nhân dân ra khỏi lực lượng cách mạng, gom dân vào các trại tập trung khổng lồ.
            </p>
          </div>
        </div>
      </div>

      {/* Layer 2: 3 Escalation Phases */}
      <div className="space-y-4 mb-8">
        <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif flex items-center gap-2">
          <Layers size={18} className="text-amber-600" /> Tiến Trình 3 Giai Đoạn Leo Thang & Sụp Đổ Của Địch
        </h4>

        {steps.map((st, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-slate-800 shadow-sm">
            <span className="font-bold text-xs text-rose-700 dark:text-rose-400 font-serif uppercase tracking-wider block mb-1">
              {st.phase}
            </span>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: st.desc.replace(/\*\*(.*?)\*\*/g, '<strong className="text-slate-900 dark:text-white font-bold">$1</strong>') }} />
          </div>
        ))}
      </div>
    </div>
  );
}
