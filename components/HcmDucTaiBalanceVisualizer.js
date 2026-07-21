"use client";
import React, { useState } from "react";
import { Heart, Award, Sparkles, TreeDeciduous, CheckCircle2, ShieldCheck } from "lucide-react";

export default function HcmDucTaiBalanceVisualizer() {
  const [activeTab, setActiveTab] = useState("duc-tai");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <TreeDeciduous className="w-3.5 h-3.5" /> Mô Phỏng Tương Tác
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Đạo Đức Là Gốc & Mối Quan Hệ Giữa ĐỨC và TÀI
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Như gốc của cây, nguồn của sông suối - Đạo đức là nguồn nuôi dưỡng và phát triển con người"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("duc-tai")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "duc-tai"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Heart className="w-4 h-4" /> 1. Mối Quan Hệ Giữa ĐỨC & TÀI
        </button>

        <button
          onClick={() => setActiveTab("toan-dien")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "toan-dien"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Award className="w-4 h-4" /> 2. Giáo Dục Toàn Diện "Đức - Trí - Thể - Mỹ"
        </button>
      </div>

      {/* Tab 1: Mối quan hệ Đức & Tài */}
      {activeTab === "duc-tai" && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ĐỨC (Gốc) */}
            <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-red-100 text-red-700">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-stone-900 text-base">ĐẠO ĐỨC (GỐC / NỀN TẢNG)</h4>
                  <span className="text-[10px] uppercase font-bold text-red-600">Tiêu chuẩn hàng đầu</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>Là tiêu chuẩn cho <strong>mục đích hành động</strong> cách mạng.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>Là chỗ dựa giúp con người vững vàng trong mọi thử thách, gian khổ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>Cán bộ lấy đạo đức làm cốt cán: <i>"Cũng như sông thì có nguồn mới có nước."</i></span>
                </li>
              </ul>
            </div>

            {/* TÀI (Phương tiện) */}
            <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-stone-900 text-base">TÀI NĂNG (PHƯƠNG TIỆN)</h4>
                  <span className="text-[10px] uppercase font-bold text-amber-700">Công cụ thực hiện</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>Là <strong>phương tiện thực hiện</strong> mục đích cách mạng.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>Tài là cực kỳ quan trọng — không có tài thì không xây dựng được đất nước.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>Tài năng phải được đặt vững chắc trên nền tảng đạo đức.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Famous Quote Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 via-white to-amber-50 border border-red-200 shadow-sm">
            <h5 className="font-bold text-red-800 text-sm mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" /> Câu nói kinh điển của Chủ tịch Hồ Chí Minh:
            </h5>
            <p className="text-stone-900 text-xs md:text-sm leading-relaxed italic font-serif bg-white/80 p-3.5 rounded-xl border-l-4 border-red-500 shadow-xs">
              "Có tài mà không có đức là người vô dụng, có đức mà không có tài thì làm việc gì cũng khó."
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Giáo dục Toàn diện */}
      {activeTab === "toan-dien" && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm text-center">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 inline-flex items-center justify-center font-black text-sm mb-2">
                ĐỨC
              </span>
              <h5 className="font-extrabold text-stone-900 text-sm mb-1">ĐẠO ĐỨC</h5>
              <p className="text-stone-600 text-[11px]">Là gốc, là trước hết của con người cách mạng</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm text-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 inline-flex items-center justify-center font-black text-sm mb-2">
                TRÍ
              </span>
              <h5 className="font-extrabold text-stone-900 text-sm mb-1">TRÍ TUỆ</h5>
              <p className="text-stone-600 text-[11px]">Năng lực tư duy, tri thức khoa học hiện đại</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm text-center">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center font-black text-sm mb-2">
                THỂ
              </span>
              <h5 className="font-extrabold text-stone-900 text-sm mb-1">THỂ LỰC</h5>
              <p className="text-stone-600 text-[11px]">Sức khỏe dẻo dai, bền bỉ phụng sự Tổ quốc</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-sm text-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center font-black text-sm mb-2">
                MỸ
              </span>
              <h5 className="font-extrabold text-stone-900 text-sm mb-1">THẨM MỸ</h5>
              <p className="text-stone-600 text-[11px]">Cảm thụ cái đẹp Chân - Thiện - Mỹ trong cuộc sống</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-md">
            <h5 className="font-extrabold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Tư tưởng "Vừa Hồng Vừa Chuyên" trong Di chúc:
            </h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
              Bằng cần kiệm lo giáo dục đạo đức cách mạng cho đoàn viên, thanh niên — đào tạo thế hệ thừa kế xây dựng chủ nghĩa xã hội vừa có phẩm chất đạo đức cách mạng ("Hồng"), vừa có năng lực trình độ tài năng ("Chuyên").
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
