"use client";
import React from "react";
import { Shield, Flame, Quote, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function LsdNationalResistanceQuote() {
  const locations = [
    "Bắc Bộ phủ",
    "Bưu điện Bờ Hồ",
    "Chợ Đồng Xuân",
    "Ga Hàng Cỏ",
    "Sân bay Bạch Mai",
    "Ô Cầu Dền"
  ];

  return (
    <div className="my-8 rounded-2xl border border-red-300 dark:border-red-900/60 bg-gradient-to-br from-amber-50/60 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl overflow-hidden relative">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-red-200 dark:border-red-900/60 pb-5 mb-6 relative z-10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-2 border border-red-200">
            <Flame size={14} className="text-red-600 animate-pulse" /> Đêm 19-12-1946: Toàn Quốc Kháng Chiến Bùng Nổ
          </span>
          <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white tracking-wide">
            "Lời Kêu Gọi Toàn Quốc Kháng Chiến"
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            Chủ tịch Hồ Chí Minh phát động cuộc kháng chiến thần thánh bảo vệ nền độc lập tự do dân tộc.
          </p>
        </div>
        <div className="px-4 py-2.5 rounded-xl bg-red-800 text-white shadow-md text-center shrink-0">
          <span className="text-[11px] text-amber-200 font-semibold uppercase tracking-wider block">Tinh thần quyết tử</span>
          <span className="text-base md:text-lg font-bold font-serif">"Quyết tử cho Tổ quốc quyết sinh"</span>
        </div>
      </div>

      {/* Quote Card */}
      <div className="relative bg-white dark:bg-slate-900 border-2 border-red-400 dark:border-red-800 rounded-2xl p-6 md:p-8 shadow-md mb-8 relative z-10">
        <Quote size={48} className="text-red-200 dark:text-red-950 absolute top-4 left-4 pointer-events-none" />
        <div className="relative z-10 space-y-4 font-serif text-base md:text-lg text-slate-800 dark:text-slate-100 italic leading-relaxed">
          <p className="border-l-4 border-red-600 pl-4">
            "Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới, vì chúng quyết tâm giật nước ta một lần nữa!"
          </p>
          <p className="border-l-4 border-amber-500 pl-4 font-extrabold text-red-700 dark:text-amber-300 not-italic">
            "Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ. Hỡi đồng bào! Chúng ta phải đứng lên!..."
          </p>
        </div>
        <div className="mt-4 text-right text-xs md:text-sm font-sans font-bold text-amber-800 dark:text-amber-400">
          — Chủ tịch Hồ Chí Minh (Đài Tiếng nói Việt Nam phát sáng 20-12-1946)
        </div>
      </div>

      {/* 60 Days Battle of Hanoi Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-2">
              <Shield size={18} /> Thời gian giam chân địch
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-serif">60 Ngày Đêm</div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Giam chân hàng vạn quân Pháp tinh nhuệ tại Hà Nội, làm thất bại hoàn toàn kế hoạch "đánh nhanh thắng nhanh" của địch.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-2">
            <MapPin size={18} /> Các chiến địa tiêu biểu ở Hà Nội
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {locations.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 bg-amber-50/70 dark:bg-slate-800/80 p-2 rounded-lg border border-amber-200/60 dark:border-slate-700">
                <CheckCircle2 size={13} className="text-amber-600 shrink-0" />
                <span className="truncate">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-2">
              <Award size={18} /> Kết quả lịch sử
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <li>• Bảo vệ an toàn cơ quan đầu não Trung ương Đảng & Chính phủ.</li>
              <li>• Thành lập **Trung đoàn Thủ đô** anh hùng.</li>
              <li>• Ngày 17-2-1947: Rút lui an toàn lên chiến khu ATK Việt Bắc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
