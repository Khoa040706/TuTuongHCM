"use client";
import React from "react";
import { Award, ShieldCheck, Plane, FileText, CheckCircle2 } from "lucide-react";

export default function LsdParisAccordsDashboard() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <FileText size={14} /> Ngày 27-1-1973 tại Paris (Pháp)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Trận "Điện Biên Phủ Trên Không" & Hiệp Định Paris 1973
        </h3>
        <p className="text-sm font-serif text-amber-900 dark:text-amber-300 font-bold mt-2 italic">
          "Đánh cho Mỹ cút" — Mở đường cho trận quyết chiến chiến lược "Đánh cho Ngụy nhào"
        </p>
      </div>

      {/* Layer 1: Linebacker II (Điện Biên Phủ trên không) */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md mb-8">
        <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
          <Plane size={24} className="text-red-600" />
          <div>
            <h4 className="text-lg font-bold font-serif text-red-700 dark:text-red-400">
              Trận "Điện Biên Phủ Trên Không" (18 - 30/12/1972)
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">12 ngày đêm chiến đấu anh dũng của quân dân Hà Nội - Hải Phòng</span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans mb-3">
          Nixon mở cuộc tập kích chiến lược bằng B-52 nhằm "đưa Hà Nội trở về thời kỳ đá hố". Quân dân miền Bắc bắn rơi **81 máy bay Mỹ** (trong đó có **34 máy bay B-52**), đập tan ý đồ ép ta trên bàn đàm phán.
        </p>
      </div>

      {/* Layer 2: Paris Accords Core Clauses */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-md">
        <div className="flex items-center gap-3 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
          <ShieldCheck size={24} className="text-emerald-600" />
          <h4 className="text-lg font-bold font-serif text-emerald-800 dark:text-emerald-300">
            Nội Dung Cốt Lõi Của Hiệp Định Paris (Ký ngày 27-1-1973)
          </h4>
        </div>

        <div className="space-y-3 text-xs md:text-sm text-slate-800 dark:text-slate-200">
          <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200">
            ✔ **Mỹ cam kết độc lập, chủ quyền**: Hoa Kỳ và các nước tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200">
            ✔ **Mỹ rút quân hoàn toàn**: Hoa Kỳ rút toàn bộ quân Mỹ và quân đồng minh khỏi miền Nam Việt Nam, hủy bỏ các căn cứ quân sự Mỹ.
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200">
            ✔ **Ý nghĩa chiến lược**: Thực hiện hoàn thành lời dạy của Chủ tịch Hồ Chí Minh: <strong className="text-red-700 font-bold font-serif">"Đánh cho Mỹ cút"</strong>, tạo so sánh lực lượng có lợi vượt trội cho cách mạng.
          </div>
        </div>
      </div>
    </div>
  );
}
