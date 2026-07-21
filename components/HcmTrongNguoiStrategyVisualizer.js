"use client";
import React, { useState } from "react";
import { TreeDeciduous, Users, Sparkles, Target, ArrowRight } from "lucide-react";

export default function HcmTrongNguoiStrategyVisualizer() {
  const [activeTab, setActiveTab] = useState("trong-nguoi");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <TreeDeciduous className="w-3.5 h-3.5" /> Chiến Lược Phát Triển
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Ý Nghĩa Việc Xây Dựng Con Người & Chiến Lược "TRỒNG NGƯỜI"
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("trong-nguoi")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "trong-nguoi"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <TreeDeciduous className="w-4 h-4" /> 1. "Vì Lợi Ích Trăm Năm Phải Trồng Người"
        </button>

        <button
          onClick={() => setActiveTab("con-nguoi-xhcn")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "con-nguoi-xhcn"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Target className="w-4 h-4" /> 2. "Con Người XHCN Đi Trước"
        </button>
      </div>

      {/* Tab 1: Trồng người */}
      {activeTab === "trong-nguoi" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-base mb-2">
              CHIẾN LƯỢC DÀI HẠN & THƯỜNG XUYÊN
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>Trồng người là công việc lâu dài, gian khổ của sự nghiệp văn hóa giáo dục.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>Phải tiến hành song song với nhiệm vụ phát triển lực lượng sản xuất & quan hệ sản xuất.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>Vừa là quyền lợi vừa là trách nhiệm của mỗi cá nhân suốt cả cuộc đời.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 2: Con người XHCN */}
      {activeTab === "con-nguoi-xhcn" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-base mb-2">
              XÂY DỰNG CON NGƯỜI ĐẶT RA NGAY TỪ ĐẦU
            </h4>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed mb-3">
              Không phải chờ kinh tế văn hóa phát triển cao mới xây dựng con người, mà phải tạo ra lớp người tiên tiến làm gương lôi cuốn số đông.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
              💡 Bác chỉ rõ: "Trong bất cứ phong trào cách mạng nào, tiên tiến là số ít và số đông là trung gian, muốn củng cố và mở rộng phong trào cần nâng cao trình độ giác ngộ của trung gian để kéo chậm tiến."
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
