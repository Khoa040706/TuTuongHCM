"use client";
import React, { useState } from "react";
import { Heart, BookOpen, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

export default function HcmVuaHongVuaChuyenVisualizer() {
  const [activeSide, setActiveSide] = useState("hong");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-blue-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <UserCheck className="w-3.5 h-3.5" /> Hình Mẫu Con Người
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Nội Dung Xây Dựng Con Người: Vừa "HỒNG" Vừa "CHUYÊN"
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Tư tưởng: Mình vì mọi người, mọi người vì mình & Ý thức làm chủ xã hội"
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 my-6 relative z-10">
        <button
          onClick={() => setActiveSide("hong")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeSide === "hong"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
          }`}
        >
          <Heart className="w-4 h-4" /> 1. Đức Tính "HỒNG" (Đạo Đức)
        </button>

        <button
          onClick={() => setActiveSide("chuyen")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeSide === "chuyen"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
          }`}
        >
          <BookOpen className="w-4 h-4" /> 2. Năng Lực "CHUYÊN" (Trí Tuệ)
        </button>
      </div>

      {/* Content Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 animate-fadeIn">
        {/* HỒNG */}
        <div className={`p-5 rounded-2xl border transition-all ${
          activeSide === "hong"
            ? "bg-red-50/90 border-red-300 shadow-md ring-2 ring-red-400/20"
            : "bg-white border-stone-200 opacity-70"
        }`}>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-100 text-red-800">
            Mặt Đạo Đức ("HỒNG")
          </span>
          <h4 className="text-base font-black text-red-900 mt-2 mb-2">
            ĐẠO ĐỨC CÁCH MẠNG & TƯ TƯỞNG
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-800 font-medium">
            <li>• Bản lĩnh chính trị vững vàng, mục đích lối sống cao đẹp.</li>
            <li>• Ý thức làm chủ, tư tưởng <strong>"Mình vì mọi người, mọi người vì mình"</strong>.</li>
            <li>• Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân.</li>
          </ul>
        </div>

        {/* CHUYÊN */}
        <div className={`p-5 rounded-2xl border transition-all ${
          activeSide === "chuyen"
            ? "bg-blue-50/90 border-blue-300 shadow-md ring-2 ring-blue-400/20"
            : "bg-white border-stone-200 opacity-70"
        }`}>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-800">
            Mặt Năng Lực ("CHUYÊN")
          </span>
          <h4 className="text-base font-black text-blue-900 mt-2 mb-2">
            TRÍ TUỆ & CHUYÊN MÔN
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-800 font-medium">
            <li>• Trình độ lý luận chính trị, văn hóa, khoa học - kỹ thuật.</li>
            <li>• Năng lực chuyên môn nghiệp vụ, trình độ ngoại ngữ.</li>
            <li>• Phương pháp làm việc khoa học, phong cách dân chủ, rèn luyện sức khỏe dẻo dai.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
