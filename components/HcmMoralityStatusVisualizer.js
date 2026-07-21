"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, ShieldAlert, Sparkles } from "lucide-react";

export default function HcmMoralityStatusVisualizer() {
  const [activeSide, setActiveSide] = useState("tich-cuc");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5" /> Nhìn Thẳng Thực Tế
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Thực Trạng Đạo Đức & Lối Sống Hiện Nay
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Nhận diện 2 mặt Tích Cực ⇄ Tiêu Cực trong thời kỳ kinh tế số & CMCN 4.0
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 my-6 relative z-10">
        <button
          onClick={() => setActiveSide("tich-cuc")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeSide === "tich-cuc"
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" /> 1. Mặt Tích Cực (Nguồn Động Lực)
        </button>

        <button
          onClick={() => setActiveSide("tieu-cuc")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeSide === "tieu-cuc"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
          }`}
        >
          <XCircle className="w-4 h-4" /> 2. Mặt Tiêu Cực (Cần Đổi Mới)
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 animate-fadeIn">
        {/* TÍCH CỰC */}
        <div className={`p-5 rounded-2xl border transition-all ${
          activeSide === "tich-cuc"
            ? "bg-emerald-50/90 border-emerald-300 shadow-md ring-2 ring-emerald-400/20"
            : "bg-white border-stone-200 opacity-70"
        }`}>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
            Mặt Tích Cực
          </span>
          <h4 className="text-base font-black text-emerald-900 mt-2 mb-2">
            NỀN ĐẠO ĐỨC MỚI ĐANG HÌNH THÀNH
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-800 font-medium">
            <li>• Giữ được lối sống nhân hậu, tình nghĩa, trong sạch, lành mạnh.</li>
            <li>• Khiêm tốn, cần cù, sáng tạo; có chí lập thân, lập nghiệp, năng động nhạy bén.</li>
            <li>• Dám đối mặt khó khăn thử thách, dám chịu trách nhiệm, sống có bản lĩnh.</li>
          </ul>
        </div>

        {/* TIÊU CỰC */}
        <div className={`p-5 rounded-2xl border transition-all ${
          activeSide === "tieu-cuc"
            ? "bg-red-50/90 border-red-300 shadow-md ring-2 ring-red-400/20"
            : "bg-white border-stone-200 opacity-70"
        }`}>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-100 text-red-800">
            Mặt Tiêu Cực
          </span>
          <h4 className="text-base font-black text-red-900 mt-2 mb-2">
            HẠN CHẾ & NGUY CƠ SUY THOÁI
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-800 font-medium">
            <li>• Suy thoái tư tưởng chính trị, đạo đức lối sống, bệnh cơ hội, chủ nghĩa cá nhân, tham nhũng.</li>
            <li>• Giáo dục "làm người", đạo đức lối sống còn bị xem nhẹ.</li>
            <li>• Một bộ phận sinh viên phai nhạt lý tưởng, chạy theo lối sống thực dụng, thiếu trách nhiệm.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
