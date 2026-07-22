"use client";
import React from "react";
import { Globe, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export default function LsdDiplomacy1991To1996() {
  return (
    <div className="my-8 rounded-2xl border border-blue-300 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/70 via-white to-amber-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Globe size={14} /> Mở cửa hội nhập 1991 - 1996
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Thành Tựu Đối Ngoại & Hội Nhập Quốc Tế Bứt Phá
        </h3>
        <p className="text-sm font-serif text-blue-900 dark:text-blue-300 font-bold mt-2 italic">
          "Việt Nam muốn là bạn với tất cả các nước trong cộng đồng quốc tế"
        </p>
      </div>

      {/* Grid 3 Key Diplomacy Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Viet-China Normalization */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-red-200 dark:border-red-900/50 pb-3 mb-3">
            <Globe size={20} className="text-red-600" />
            <h4 className="font-bold text-base font-serif text-red-700 dark:text-red-400">
              Việt Nam - Trung Quốc
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-red-100 text-red-800 block w-fit mb-2">
            Tháng 11-1991
          </span>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Bình thường hóa hoàn toàn quan hệ hai nước Việt Nam - Trung Quốc, mở lại đường biên giới hòa bình, hữu nghị.
          </p>
        </div>

        {/* ASEAN Member 7 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-3">
            <Award size={20} className="text-emerald-600" />
            <h4 className="font-bold text-base font-serif text-emerald-800 dark:text-emerald-300">
              Gia Nhập ASEAN
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 block w-fit mb-2">
            Ngày 28-7-1995
          </span>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Việt Nam chính thức trở thành **thành viên thứ 7 của ASEAN**, đánh dấu bước ngoặt hội nhập khu vực Đông Nam Á.
          </p>
        </div>

        {/* Viet-US Normalization */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-400 shadow-md">
          <div className="flex items-center gap-2 border-b border-blue-200 dark:border-blue-900/50 pb-3 mb-3">
            <Globe size={20} className="text-blue-600" />
            <h4 className="font-bold text-base font-serif text-blue-900 dark:text-blue-300">
              Việt Nam - Hoa Kỳ
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 block w-fit mb-2">
            Ngày 11-7-1995
          </span>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Tổng thống Mỹ Bill Clinton chính thức tuyên bố **bình thường hóa quan hệ ngoại giao với Việt Nam**, gỡ bỏ hoàn toàn cấm vận.
          </p>
        </div>
      </div>
    </div>
  );
}
