"use client";
import React from "react";
import { ShieldAlert, Crosshair, Flame, Factory, CheckCircle2 } from "lucide-react";

export default function LsdLocalWarDashboard() {
  const counterAttacks = [
    {
      season: "Mùa khô thứ nhất (1965 - 1966)",
      detail: "Mỹ huy động **20 vạn quân Mỹ** mở đợt phản công chiến lược vào 3 hướng (Tây Nguyên, Đồng bằng Khu V, Đông Nam Bộ). Ta đánh bại cuộc phản công và thắng lớn tại Núi Thành, Vạn Tường, Plơime."
    },
    {
      season: "Mùa khô thứ hai (1966 - 1967)",
      detail: "Mỹ huy động **40 vạn quân Mỹ**, 54 vạn quân Sài Gòn, mở cuộc phản công quy mô lớn (điển hình là cuộc hành quân Gian-xơn Xi-ti). Ta bẻ gãy mọi mũi tiến công, bảo vệ vững chắc căn cứ Trung ương Cục."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Flame size={14} /> Quy mô chiến tranh lớn nhất của Mỹ ở Việt Nam
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đánh Bại Chiến Lược "Chiến Tranh Cục Bộ" Của Mỹ (1965 - 1968)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Tổng thống Mỹ Lyndon B. Johnson ồ ạt đưa **quân xâm lược Mỹ vào trực tiếp tác chiến** ở miền Nam.
        </p>
      </div>

      {/* Layer 1: Local War Formula */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-500 shadow-md mb-8">
        <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
          <Crosshair size={24} className="text-rose-600" />
          <h4 className="text-lg font-bold font-serif text-rose-700 dark:text-rose-400">
            Bản Chất & Công Thức Chiến Lược "Chiến Tranh Cục Bộ"
          </h4>
        </div>

        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans mb-3">
          • **Công thức tác chiến**: **Bộ binh Mỹ làm lực lượng chủ yếu trực tiếp tác chiến** + Quân đội Sài Gòn đóng vai trò hỗ trợ và "bình định". <br />
          • **Âm mưu leo thang**: Đồng thời Mỹ mở cuộc **Chiến tranh phá hoại bằng không quân, hải quân ra miền Bắc** (bắt đầu từ sự kiện Vịnh Bắc Bộ 8-1964) nhằm ngăn chặn sự chi viện của hậu phương lớn cho tiền tuyến miền Nam.
        </div>
      </div>

      {/* Layer 2: 2 Dry Season Counter-Offensives */}
      <div className="space-y-4 mb-8">
        <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif flex items-center gap-2">
          <ShieldAlert size={18} className="text-amber-600" /> Đánh Bại 2 Cuộc Phản Công Mùa Khô Lớn Của Quân Mỹ
        </h4>

        {counterAttacks.map((ca, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 shadow-sm">
            <span className="font-bold text-xs text-amber-800 dark:text-amber-300 font-serif uppercase tracking-wider block mb-1">
              {ca.season}
            </span>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: ca.detail.replace(/\*\*(.*?)\*\*/g, '<strong className="text-slate-900 dark:text-white font-bold">$1</strong>') }} />
          </div>
        ))}
      </div>

      {/* Layer 3: North Rear Guard */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white shadow-md">
        <div className="flex items-center gap-3 border-b border-white/20 pb-3 mb-3">
          <Factory size={22} className="text-emerald-300" />
          <h4 className="font-bold text-base font-serif">Miền Bắc Vừa Chiến Đấu Vừa Sản Xuất Chi Viện Miền Nam</h4>
        </div>
        <p className="text-xs md:text-sm text-emerald-100 leading-relaxed font-sans">
          Năm 1968, miền Bắc đưa **hơn 14 vạn cán bộ, chiến sĩ** vào chiến trường miền Nam (tăng gấp nhiều lần so với 1965). Khẩu hiệu hành động: **"Thóc không thiếu một cân, quân không thiếu một cân"**, **"Tất cả vì miền Nam ruột thịt"**.
        </p>
      </div>
    </div>
  );
}
