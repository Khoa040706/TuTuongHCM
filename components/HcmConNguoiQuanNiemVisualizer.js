"use client";
import React, { useState } from "react";
import { Users, Building2, Trees, Sparkles, UserCheck } from "lucide-react";

export default function HcmConNguoiQuanNiemVisualizer() {
  const [activeTab, setActiveTab] = useState("3-chieu");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <UserCheck className="w-3.5 h-3.5" /> Bản Chất Con Người
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Quan Niệm Về Con Người: 3 Chiều Quan Hệ & Con Người Lịch Sử - Cụ Thể
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Xa lạ với con người trừu tượng - Đặt con người trong từng hoàn cảnh lịch sử cụ thể"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("3-chieu")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "3-chieu"
              ? "bg-blue-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Users className="w-4 h-4" /> 1. 3 Chiều Quan Hệ Trong Thực Tiễn
        </button>

        <button
          onClick={() => setActiveTab("lich-su-cu-the")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "lich-su-cu-the"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Sparkles className="w-4 h-4" /> 2. Con Người Lịch Sử - Cụ Thể
        </button>
      </div>

      {/* Tab 1: 3 Chiều quan hệ */}
      {activeTab === "3-chieu" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 animate-fadeIn">
          {/* Quan hệ 1 */}
          <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">Chiều 1</span>
            <h4 className="font-extrabold text-stone-900 text-sm mt-2 mb-1">CỘNG ĐỒNG XÃ HỘI</h4>
            <p className="text-stone-600 text-xs">Con người là một thành viên trong gia đình, họ hàng, làng xã, dân tộc và toàn nhân loại.</p>
          </div>

          {/* Quan hệ 2 */}
          <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded-full">Chiều 2</span>
            <h4 className="font-extrabold text-stone-900 text-sm mt-2 mb-1">CHẾ ĐỘ XÃ HỘI</h4>
            <p className="text-stone-600 text-xs">Vị thế làm chủ hay chịu cảnh áp bức, bóc lột dưới từng chế độ kinh tế - chính trị cụ thể.</p>
          </div>

          {/* Quan hệ 3 */}
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Trees className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Chiều 3</span>
            <h4 className="font-extrabold text-stone-900 text-sm mt-2 mb-1">MÔI TRƯỜNG TỰ NHIÊN</h4>
            <p className="text-stone-600 text-xs">Con người là một bộ phận không thể tách rời của tự nhiên, sống hài hòa và làm chủ tự nhiên.</p>
          </div>
        </div>
      )}

      {/* Tab 2: Con người lịch sử - cụ thể */}
      {activeTab === "lich-su-cu-the" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-base mb-2">
              TƯ TƯỞNG CON NGƯỜI LỊCH SỬ - CỤ THỂ
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
              <li>• <strong>Xa lạ với con người trừu tượng, phi nguồn gốc lịch sử:</strong> Bác nhìn con người bằng hoàn cảnh sống có thực.</li>
              <li>• <strong>Nhìn nhận con người đa dạng:</strong> Theo giới tính, lứa tuổi, nghề nghiệp, chức vụ, vị trí, công dân, đảng viên... trong từng thời kỳ.</li>
              <li>• <strong>Sáng tạo đặc sắc:</strong> Giải quyết mối quan hệ <i>Dân tộc & Giai cấp</i> xuất phát từ tình hình thực tiễn con người Việt Nam.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
