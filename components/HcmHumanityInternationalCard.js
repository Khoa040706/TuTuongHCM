"use client";
import React, { useState } from "react";
import { Heart, Globe, Sparkles, CheckCircle2, BookmarkCheck } from "lucide-react";

export default function HcmHumanityInternationalCard() {
  const [activeTab, setActiveTab] = useState("thuong-yeu");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Heart className="w-3.5 h-3.5" /> Chuẩn Mực Đạo Đức Nhân Văn
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Thương Yêu Con Người & Tinh Thần Quốc Tế Trong Sáng
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Sống có tình có nghĩa" & "Đối thoại thay cho đối đầu"
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("thuong-yeu")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "thuong-yeu"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Heart className="w-4 h-4" /> 1. Thương Yêu Con Người, Có Tình Có Nghĩa
        </button>

        <button
          onClick={() => setActiveTab("quoc-te")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "quoc-te"
              ? "bg-blue-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Globe className="w-4 h-4" /> 2. Tinh Thần Quốc Tế Trong Sáng
        </button>
      </div>

      {/* Tab 1: Thương yêu con người */}
      {activeTab === "thuong-yeu" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-sm md:text-base mb-2">
              Yếu Tố Cốt Lõi Đầu Tiên Trong Đạo Đức Bác Hồ
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dành cho người nghèo khổ, bị áp bức, bị bóc lột không phân biệt màu da, dân tộc.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Nghiêm khắc với chính mình — Rộng rãi, độ lượng với người khác.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Nâng con người lên, kể cả người nhất thời mắc sai lầm, chứ không vùi dập con người.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-xs">
            <h5 className="font-bold text-emerald-900 text-xs mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" /> Trích dẫn kinh điển:
            </h5>
            <p className="text-stone-800 text-xs md:text-sm italic font-serif">
              "Hiểu chủ nghĩa Mác - Lênin là phải sống với nhau có tình có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là hiểu chủ nghĩa Mác - Lênin được."
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Tinh thần quốc tế trong sáng */}
      {activeTab === "quoc-te" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-sm md:text-base mb-2">
              Chủ Nghĩa Yêu Nước Chân Chính Kết Hợp Quốc Tế Vô Sản
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
              <li className="flex items-start gap-2">
                <BookmarkCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Đoàn kết với giai cấp vô sản và nhân dân tiến bộ toàn thế giới.</span>
              </li>
              <li className="flex items-start gap-2">
                <BookmarkCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Kiên quyết chống chủ nghĩa dân tộc hẹp hòi, sô vanh, biệt lập và bá quyền.</span>
              </li>
              <li className="flex items-start gap-2">
                <BookmarkCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Đóng góp di sản quan hệ quốc tế kiểu mới: <strong>"ĐỐI THOẠI THAY CHO ĐỐI ĐẦU"</strong>, kiến tạo văn hóa hòa bình.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 shadow-xs">
            <h5 className="font-bold text-blue-900 text-xs mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" /> Câu thơ tượng trưng:
            </h5>
            <p className="text-stone-800 text-xs md:text-sm italic font-serif">
              "Quan sơn muôn dặm một nhà / Bốn phương vô sản đều là anh em!"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
