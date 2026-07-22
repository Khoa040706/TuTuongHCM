"use client";
import React from "react";
import { ShieldAlert, Swords, Flag, AlertTriangle } from "lucide-react";

export default function LsdBorderWarsDashboard() {
  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldAlert size={14} /> Bảo vệ chủ quyền thiêng liêng
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Chiến Tranh Bảo Vệ Tổ Quốc Ở Biên Giới Tây Nam & Phía Bắc
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Cuộc chiến đấu chính nghĩa bảo vệ toàn vẹn lãnh thổ và làm nghĩa vụ quốc tế cao cả.
        </p>
      </div>

      {/* 2-Tier Border Wars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Southwestern Border (Pol Pot) */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 shadow-md">
          <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <Swords size={22} className="text-rose-600" />
            <div>
              <h4 className="font-bold text-base font-serif text-rose-800 dark:text-rose-300">
                Biên Giới Tây Nam (1975 - 1979)
              </h4>
              <span className="text-xs text-slate-500 font-semibold">Chống tập đoàn phản động Pol Pot</span>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              • **Âm mưu kẻ thù**: Tập đoàn diệt chủng Pol Pot xua quân tàn sát nhân dân ta ở biên giới Tây Nam, xâm lược đảo Thổ Chu, Phú Quốc.
            </p>
            <p className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **Ngày 7-1-1979**: Quân tình nguyện Việt Nam phối hợp lực lượng cách mạng Campuchia giải phóng **Phnôm Pênh**, cứu nhân dân Campuchia khỏi họa diệt chủng.
            </p>
          </div>
        </div>

        {/* Northern Border (China) */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md">
          <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
            <Flag size={22} className="text-red-600" />
            <div>
              <h4 className="font-bold text-base font-serif text-red-700 dark:text-red-400">
                Biên Giới Phía Bắc (17-2-1979)
              </h4>
              <span className="text-xs text-slate-500 font-semibold">Cuộc chiến đấu bảo vệ 6 tỉnh biên giới phía Bắc</span>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3 rounded-xl bg-red-50/60 dark:bg-red-950/30 border border-red-200">
              • **Ngày 17-2-1979**: Trung Quốc bất ngờ huy động **60 vạn quân** tấn công trên toàn tuyến biên giới phía Bắc Việt Nam.
            </p>
            <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Ngày 5-3-1979**: Chủ tịch Tôn Đức Thắng ra Lệnh **Tổng động viên toàn quốc**. Quân dân ta kiên cường giáng trả, buộc đối phương tuyên bố rút quân.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
