"use client";
import React, { useState } from "react";
import { Gem, RefreshCw, AlertTriangle, Sparkles, Award } from "lucide-react";

export default function HcmTuDuongDaoDucVisualizer() {
  const [activeTab, setActiveTab] = useState("tu-duong");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-purple-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Gem className="w-3.5 h-3.5" /> Rèn Luyện Suốt Đời
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Tu Dưỡng Đạo Đức Suốt Đời & Tự Cải Tạo Bản Thân
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Ngọc càng mài càng sáng, vàng càng luyện càng trong"
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("tu-duong")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "tu-duong"
              ? "bg-purple-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Gem className="w-4 h-4" /> 1. Tiến Trình Tu Dưỡng Bền Bỉ
        </button>

        <button
          onClick={() => setActiveTab("canh-bao")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "canh-bao"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <AlertTriangle className="w-4 h-4" /> 2. Cảnh Báo Sa Vào Chủ Nghĩa Cá Nhân
        </button>
      </div>

      {/* Tab 1: Tu dưỡng bền bỉ */}
      {activeTab === "tu-duong" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-purple-200 shadow-md">
            <h4 className="font-extrabold text-purple-900 text-base mb-2">
              CUỘC CÁCH MẠNG TRƯỜNG KỲ TRONG BẢN THÂN
            </h4>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed mb-3">
              HCM vận dụng sáng tạo luận điểm Khổng Tử: <i>"Chính tâm, tu thân"</i>. Tự cải tạo bản thân là tiền đề để cải tạo xã hội.
            </p>
            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200">
              <span className="font-bold text-purple-900 text-xs block mb-1">Mộc mạc & Thấu đáo:</span>
              <p className="text-stone-800 text-xs md:text-sm italic font-serif">
                "Đạo đức cách mạng không phải trên Trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Cảnh báo */}
      {activeTab === "canh-bao" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-md">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>CẢNH BÁO SỚM SÂU SẮC CỦA CHỦ TỊCH HỒ CHÍ MINH:</span>
            </div>
            <blockquote className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-stone-900 text-xs md:text-sm italic font-serif leading-relaxed">
              "Một dân tộc, một Đảng và một con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi, nếu lòng dạ không trong sáng nữa, nếu sa vào chủ nghĩa cá nhân."
            </blockquote>
          </div>
        </div>
      )}
    </div>
  );
}
