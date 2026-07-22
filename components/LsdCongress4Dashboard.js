"use client";
import React from "react";
import { Award, Star, Compass, Zap, Layers, CheckCircle2 } from "lucide-react";

export default function LsdCongress4Dashboard() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Ngày 14 đến 20-12-1976 tại Hà Nội
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đại Hội Đại Biểu Toàn Quốc Lần Thứ IV Của Đảng
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Đại hội toàn thắng của sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc"
        </p>
      </div>

      {/* Decision 1: Rename Party & Elect General Secretary */}
      <div className="p-4 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-xs md:text-sm font-medium text-amber-900 dark:text-amber-200 mb-8 flex flex-col md:flex-row items-center justify-around gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600 text-white shrink-0">
            <Award size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Đổi tên Đảng:</span>
            <span>Quyết định đổi tên Đảng Lao động Việt Nam thành **Đảng Cộng sản Việt Nam**</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-600 text-white shrink-0">
            <Star size={20} />
          </div>
          <div>
            <span className="block font-bold font-serif text-sm">Tổng Bí thư:</span>
            <span>Bầu đồng chí **Lê Duẩn** làm Tổng Bí thư Ban Chấp hành Trung ương Đảng</span>
          </div>
        </div>
      </div>

      {/* 3 Revolutions Framework */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 shadow-sm">
          <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase block mb-1 font-serif">Cuộc cách mạng 1</span>
          <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif mb-2">Cách Mạng Quan Hệ Sản Xuất</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">Xóa bỏ chế độ bóc lột, xây dựng chế độ làm chủ tập thể xã hội chủ nghĩa.</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md">
          <span className="text-xs font-bold text-red-600 uppercase block mb-1 font-serif">Cuộc cách mạng 2 (THEN CHỐT)</span>
          <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif mb-2">Cách Mạng Khoa Học - Kỹ Thuật</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">Giữ vai trò **then chốt**, đẩy mạnh công nghiệp hóa XHCN, hiện đại hóa sản xuất.</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 shadow-sm">
          <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase block mb-1 font-serif">Cuộc cách mạng 3</span>
          <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif mb-2">Cách Mạng Tư Tưởng & Văn Hóa</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">Xây dựng nền văn hóa mới, con người mới XHCN thiết tha yêu nước.</p>
        </div>
      </div>
    </div>
  );
}
