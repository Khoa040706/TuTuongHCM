"use client";
import React, { useState } from "react";
import { ShieldAlert, Flower2, Scale, Sparkles, AlertTriangle } from "lucide-react";

export default function HcmXayDoiVoiChongVisualizer() {
  const [activeTab, setActiveTab] = useState("xay-chong");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Scale className="w-3.5 h-3.5" /> Phương Phương Luận
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Xây Đi Đôi Với Chống & Thức Tỉnh Mạch Thiện
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Lấy xây làm chính - Làm cho phần tốt nảy nở như hoa mùa Xuân"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("xay-chong")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "xay-chong"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Flower2 className="w-4 h-4" /> 1. Xây Đi Đôi Với Chống
        </button>

        <button
          onClick={() => setActiveTab("chu-nghia-ca-nhan")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "chu-nghia-ca-nhan"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <AlertTriangle className="w-4 h-4" /> 2. Quét Sạch Chủ Nghĩa Cá Nhân
        </button>
      </div>

      {/* Tab 1: Xây đi đôi với chống */}
      {activeTab === "xay-chong" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* XÂY */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                XÂY (LẤY XÂY LÀM CHÍNH)
              </span>
              <h4 className="text-base font-black text-stone-900 mt-2 mb-2">
                XÂY DỰNG GIÁ TRỊ ĐẠO ĐỨC MỚI
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                <li>• Thức tỉnh "mạch thiện ở mỗi người", để mỗi người tự giác.</li>
                <li>• Giáo dục đạo đức phối hợp giữa Gia đình — Nhà trường — Xã hội.</li>
                <li>• Kết hợp giáo dục đạo đức với tăng cường tính nghiêm minh của pháp luật.</li>
              </ul>
            </div>

            {/* CHỐNG */}
            <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-md">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-100 text-red-800">
                CHỐNG (TRỪ KHỬ CÁI XẤU)
              </span>
              <h4 className="text-base font-black text-stone-900 mt-2 mb-2">
                CHỐNG THÓI HƯ BỆNH TẬP LẠC HẬU
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                <li>• Chống suy thoái đạo đức, chống bệnh quan liêu, tham ô, lãng phí.</li>
                <li>• Nhận diện nguồn gốc mọi tệ nạn là "chủ nghĩa cá nhân".</li>
                <li>• Quét sạch cái xấu, cái vô đạo đức trong bộ máy cán bộ.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-xs">
            <h5 className="font-bold text-emerald-900 text-xs mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" /> Luận điểm nhân văn của Bác:
            </h5>
            <p className="text-stone-800 text-xs md:text-sm italic font-serif">
              "Mỗi con người đều có thiện và ác ở trong lòng. Ta phải biết làm cho phần tốt ở trong mỗi con người nảy nở như hoa mùa Xuân và phần xấu bị mất dần đi, đó là thái độ của người cách mạng."
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Chống chủ nghĩa cá nhân */}
      {activeTab === "chu-nghia-ca-nhan" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-sm mb-2 text-red-900">
              Chủ Nghĩa Cá Nhân Là Nguồn Gốc Của Mọi Tệ Nạn
            </h4>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium mb-3">
              Trong bài viết <i>"Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân"</i> (1969), Người chỉ rõ: Do cá nhân chủ nghĩa mà sinh ra quan liêu, tham ô, lãng phí, kéo bè kéo cánh... Phải kiên quyết quét sạch chủ nghĩa cá nhân.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
              ⚠️ Lưu ý đặc biệt của Bác: "Đấu tranh chống chủ nghĩa cá nhân không phải là giày xéo lên lợi ích cá nhân chính đáng."
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
