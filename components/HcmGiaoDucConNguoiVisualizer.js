"use client";
import React, { useState } from "react";
import { GraduationCap, FileText, Sparkles, HeartHandshake, UserCheck } from "lucide-react";

export default function HcmGiaoDucConNguoiVisualizer() {
  const [activeTab, setActiveTab] = useState("giao-duc");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" /> Biện Pháp Quyết Định
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Phương Pháp Xây Dựng Con Người & Sức Mạnh Giáo Dục
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Hiền, dữ phải đâu là tính sẵn - Phần nhiều do giáo dục mà nên"
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("giao-duc")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "giao-duc"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <GraduationCap className="w-4 h-4" /> 1. Vai Trò Của Giáo Dục
        </button>

        <button
          onClick={() => setActiveTab("phuong-phap")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "phuong-phap"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <HeartHandshake className="w-4 h-4" /> 2. Nêu Gương & Dựa Vào Quần Chúng
        </button>
      </div>

      {/* Tab 1: Giáo dục */}
      {activeTab === "giao-duc" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-md">
            <h4 className="font-extrabold text-amber-900 text-base mb-2">
              VỊ TRÍ TỐI QUAN TRỌNG CỦA GIÁO DỤC
            </h4>
            <blockquote className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-stone-900 text-xs md:text-sm italic font-serif leading-relaxed mb-3">
              "Hiền, dữ phải đâu là tính sẵn. Phần nhiều do giáo dục mà nên."
            </blockquote>
            <p className="text-stone-700 text-xs md:text-sm font-medium">
              📄 Bác ví trẻ em như <strong>"Tờ giấy trắng"</strong> — vẽ xanh thì xanh, vẽ đỏ thì đỏ. Giáo dục quyết định phẩm chất con người.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Phương pháp */}
      {activeTab === "phuong-phap" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-base mb-2">
              KẾT HỢP TỰ RÈN LUYỆN & QUAN ĐIỂM QUẦN CHÚNG
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
              <li>• Nêu gương người đứng đầu: <i>"Tu thân, chính tâm ➔ Trị quốc, bình thiên hạ"</i>.</li>
              <li>• Thông qua các phong trào cách mạng: <i>"Thi đua yêu nước"</i>, <i>"Người tốt việc tốt"</i>.</li>
              <li>• Đặc biệt: <strong>"Dựa vào ý kiến của dân chúng mà sửa chữa cán bộ và tổ chức của ta."</strong></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
