"use client";
import React from "react";
import { Zap, Sprout, Factory, TrendingUp, CheckCircle2 } from "lucide-react";

export default function LsdEconomicBreakthroughs1979() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-amber-100/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Zap size={14} /> Giai đoạn 1979 - 1981
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Các Bước Đột Phá Đầu Tiên Đổi Mới Kinh Tế
        </h3>
        <p className="text-sm font-serif text-amber-900 dark:text-amber-300 font-bold mt-2 italic">
          "Làm cho sản xuất bung ra" — Khai mở cho tư duy Đổi mới toàn diện của Đảng
        </p>
      </div>

      {/* Grid 3 Main Breakthroughs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Breakthrough 1: TW 6 (8-1979) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Zap size={20} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Hội Nghị TW 6 (tháng 8-1979)
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 block w-fit mb-2">
            Bước đột phá đầu tiên
          </span>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Chủ trương phá bỏ rào cản để **"làm cho sản xuất bung ra"**. Tận dụng đất đai nông nghiệp khai hoang, xóa bỏ các trạm kiểm soát để người dân tự do lưu thông hàng hóa.
          </p>
        </div>

        {/* Breakthrough 2: Chỉ thị 100-CT/TW */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <Sprout size={20} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Chỉ Thị 100-CT/TW (1-1981)
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 block w-fit mb-2">
            Khoán 100 trong nông nghiệp
          </span>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            **Khoán sản phẩm đến nhóm và người lao động** trong hợp tác xã nông nghiệp. Sản lượng lương thực bình quân tăng từ 13,4 triệu tấn/năm lên **17 triệu tấn/năm** (1981-1985).
          </p>
        </div>

        {/* Breakthrough 3: Xé rào công nghiệp */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-3">
            <Factory size={20} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              "Xé Rào" Công Nghiệp & 25-CP
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 block w-fit mb-2">
            Quyết định 25-CP & 26-CP
          </span>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Phong trào **"Xé rào"** bù giá vào lương ở TP.HCM & Long An. Quyết định 25-CP trao quyền tự chủ sản xuất kinh doanh và tự chủ tài chính cho xí nghiệp quốc doanh.
          </p>
        </div>
      </div>
    </div>
  );
}
