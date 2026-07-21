"use client";
import React, { useState } from "react";
import { Award, GraduationCap, Heart, Sparkles, UserCheck } from "lucide-react";

export default function HcmBacHoMoralityVisualizer() {
  const [activeTab, setActiveTab] = useState("bac-ho");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Award className="w-3.5 h-3.5" /> Tấm Gương Đạo Đức
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Đặc Điểm Đạo Đức Hồ Chí Minh & Sứ Mệnh Thế Hệ Trẻ
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Thanh niên là người chủ tương lai của nước nhà — Thanh niên phải có đức, có tài"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("bac-ho")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "bac-ho"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Award className="w-4 h-4" /> 1. Bản Chất Đạo Đức Bác Hồ
        </button>

        <button
          onClick={() => setActiveTab("the-he-tre")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "the-he-tre"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <GraduationCap className="w-4 h-4" /> 2. Sứ Mệnh Thanh Niên Sinh Viên
        </button>
      </div>

      {/* Tab 1: Bản chất Bác Hồ */}
      {activeTab === "bac-ho" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-md">
            <h4 className="font-extrabold text-amber-900 text-base mb-2">
              BẢN CHẤT "ĐẠI NHÂN, ĐẠI TRÍ, ĐẠI DŨNG"
            </h4>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed mb-3">
              Là đạo đức của vĩ nhân, lãnh tụ cách mạng, đồng thời lại là một con người chân chính, bình thường, gần gũi — ai cũng có thể học tập và làm theo.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
              💡 Bác nhấn mạnh: <strong>"Đạo đức là yếu tố cơ bản của nhân cách, tạo nền giá trị con người."</strong> — Thanh niên phải có đức, có tài.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Thế hệ trẻ */}
      {activeTab === "the-he-tre" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-md">
            <h4 className="font-extrabold text-red-900 text-base mb-2">
              CÂU HỎI KINH ĐIỂN DÀNH CHO THANH NIÊN TRÍ THỨC
            </h4>
            <blockquote className="p-4 rounded-xl bg-red-50 border-l-4 border-red-500 text-stone-900 text-sm italic font-serif leading-relaxed mb-3">
              "Học để làm gì? Học để phục vụ ai?"
            </blockquote>
            <p className="text-stone-700 text-xs md:text-sm font-medium">
              Thanh niên là người tiếp sức cách mạng, là <strong>"người chủ tương lai của nước nhà"</strong>. Học tập đạo đức Hồ Chí Minh giúp mỗi người trở thành "công dân tốt hơn", biết trọng danh dự, lương tâm và trách nhiệm.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
