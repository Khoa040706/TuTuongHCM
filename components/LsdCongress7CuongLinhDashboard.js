"use client";
import React, { useState } from "react";
import { BookOpen, ShieldCheck, Target, Award, Compass, Globe, UserCheck, Sparkles } from "lucide-react";

export default function LsdCongress7CuongLinhDashboard() {
  const [activeTab, setActiveTab] = useState("platform");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen size={14} className="text-pink-400" />
            <span>Đại hội Thông qua Cương Lĩnh 1991 (6/1991)</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Đại hội VII (6/1991) — Ngọn Cờ Kiên Định Đổi Mới
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            "Trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết" ⭐️
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("platform")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "platform"
                ? "bg-pink-600 text-white shadow-md shadow-pink-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            📜 Cương lĩnh 1991
          </button>
          <button
            onClick={() => setActiveTab("strategy")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "strategy"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🎯 Chiến lược KT-XH 2000
          </button>
          <button
            onClick={() => setActiveTab("context")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "context"
                ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🌍 Bản lĩnh thời đại
          </button>
        </div>
      </div>

      {/* Dynamic Content Views */}
      <div className="relative z-10">
        {/* VIEW 1: PLATFORM 1991 */}
        {activeTab === "platform" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-pink-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xl">
                  📜
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Lần Đầu Tiên Trong Lịch Sử Đảng ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Cương Lĩnh Xây Dựng Đất Nước Thời Kỳ Quá Độ Lên CNXH (Cương lĩnh 1991)</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold text-[10px]">Tầm vóc văn kiện</span>
                <h5 className="font-bold text-white text-sm">Cương lĩnh chính thức, toàn diện đầu tiên</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Xác định rõ các đặc trưng cơ bản của xã hội XHCN mà nhân dân ta xây dựng và các phương hướng chỉ đạo cơ bản.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-500/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-black text-[10px] uppercase">Kim chỉ nam ⭐️</span>
                <h5 className="font-bold text-pink-200 text-sm">Văn kiện nền tảng xuyên suốt</h5>
                <p className="text-stone-200 text-[11px] leading-relaxed font-medium">
                  Trở thành kim chỉ nam cho các Đại hội sau tiếp tục bổ sung và phát triển (đặc biệt Đại hội XI năm 2011 bổ sung phát triển Cương lĩnh này).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: STRATEGY 2000 */}
        {activeTab === "strategy" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-amber-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  🎯
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Quy hoạch Phát triển Dài hạn</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Chiến Lược Ổn Định Và Phát Triển KT - XH Đến Năm 2000</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase">Tầm nhìn 10 năm:</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Xác định mục tiêu, phương hướng phát triển kinh tế - xã hội dài hạn 10 năm đầu tiên trong thời kỳ Đổi mới.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-2">
                <span className="text-[10px] font-bold text-amber-200 uppercase">Tiếp nối nhiệm kỳ sau:</span>
                <p className="text-amber-100 text-[11px] leading-relaxed font-medium">
                  Các mục tiêu dài hạn tiếp tục được cụ thể hóa, phát triển tại Đại hội VIII (1996) và Đại hội IX (2001).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: GLOBAL CONTEXT CRISIS */}
        {activeTab === "context" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-red-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xl">
                  🌍
                </div>
                <div>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block">Bản lĩnh Đảng Trong Thử thách</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Bối Cảnh Liên Xô & Đông Âu Sụp Đổ</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase">Thách thức quốc tế:</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Liên Xô và các nước XHCN Đông Âu sụp đổ; Chủ nghĩa Mác - Lênin bị tấn công công kích nhiều phía; một bộ phận cán bộ hoang mang dao động.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 space-y-2">
                <span className="text-[10px] font-bold text-red-300 uppercase">Khẳng định con đường:</span>
                <p className="text-red-100 text-[11px] leading-relaxed font-semibold">
                  Đảng ta thể hiện bản lĩnh chính trị vững vàng, khẳng định con đường đi lên Chủ nghĩa Xã hội ở Việt Nam là hoàn toàn đúng đắn.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quote Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-950/70 via-stone-850 to-amber-950/70 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <Award size={22} className="text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-pink-300 uppercase text-[10px] tracking-wider block">Khẩu hiệu Đánh giá Đại hội VII</span>
            <p className="text-stone-100 font-extrabold text-sm md:text-base italic font-playfair tracking-tight">
              "Trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết" ⭐️
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-pink-200 font-extrabold shrink-0">
          <UserCheck size={14} />
          <span>Tổng Bí thư: Đỗ Mười</span>
        </div>
      </div>
    </div>
  );
}
