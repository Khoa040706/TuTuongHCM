"use client";
import React, { useState } from "react";
import { AlertCircle, CheckCircle2, TrendingUp, AlertTriangle, ShieldAlert } from "lucide-react";

export default function HcmVanHoaContextVisualizer() {
  const [activeTab, setActiveTab] = useState("han-che");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <AlertCircle className="w-3.5 h-3.5" /> Thực Tiến Đổi Mới
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Bối Cảnh & Đánh Giá Văn Hóa Theo Văn Kiện Đại Hội XIII
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Nhìn thẳng sự thật sau 35 năm đổi mới để phát triển nhanh và bền vững
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("han-che")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "han-che"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <AlertTriangle className="w-4 h-4" /> 1. Hạn Chế Cần Khắc Phục (ĐH XIII)
        </button>

        <button
          onClick={() => setActiveTab("thanh-tuu")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "thanh-tuu"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" /> 2. Thành Tựu Sau 35 Năm Đổi Mới
        </button>
      </div>

      {/* Tab 1: Hạn chế */}
      {activeTab === "han-che" && (
        <div className="space-y-3 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-medium text-stone-700">
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Văn hóa chưa được quan tâm tương xứng với kinh tế và chính trị.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Chưa thật sự trở thành nguồn lực, động lực nội sinh của phát triển bền vững.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Còn thiên về chức năng <strong>giải trí đơn thuần</strong>.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Môi trường văn hóa, xã hội bị ô nhiễm bởi tệ nạn, tham nhũng, tiêu cực.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Chênh lệch hưởng thụ văn hóa giữa các vùng miền còn lớn (vùng sâu, vùng xa).</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Suy thoái về tư tưởng chính trị, đạo đức, lối sống có chiều hướng gia tăng.</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Thành tựu */}
      {activeTab === "thanh-tuu" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
            <h4 className="font-extrabold text-emerald-900 text-sm mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" /> KẾT QUẢ ĐẠT ĐƯỢC SAU 35 NĂM ĐỔI MỚI:
            </h4>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
              Đạt được những kết quả nhất định trong xây dựng văn hóa, đạo đức, con người, tạo tiền đề nâng cao đời sống tinh thần cho nhân dân và hội nhập quốc tế rộng mở.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
