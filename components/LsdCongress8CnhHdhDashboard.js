"use client";
import React, { useState } from "react";
import { Factory, TrendingUp, Globe, Award, ShieldCheck, UserCheck, Zap, Sparkles } from "lucide-react";

export default function LsdCongress8CnhHdhDashboard() {
  const [activeTab, setActiveTab] = useState("cnh");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Factory size={14} className="text-amber-400" />
            <span>Đại hội Đẩy mạnh CNH — HĐH Đất Nước (6-7/1996)</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Đại hội VIII (6-7/1996) — Mở Đường Bước Vào Thế Kỷ XXI
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            "Cột mốc phát triển mới trong tiến trình cách mạng Việt Nam" ⭐️
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("cnh")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "cnh"
                ? "bg-pink-600 text-white shadow-md shadow-pink-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🏭 Đẩy mạnh CNH-HĐH
          </button>
          <button
            onClick={() => setActiveTab("target")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "target"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            📈 Mục tiêu 2020
          </button>
          <button
            onClick={() => setActiveTab("diplomacy")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "diplomacy"
                ? "bg-blue-600 text-white shadow-md shadow-blue-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🌐 Ngoại giao 1995
          </button>
        </div>
      </div>

      {/* Dynamic Content Views */}
      <div className="relative z-10">
        {/* VIEW 1: CNH - HDH SHIFT */}
        {activeTab === "cnh" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-pink-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xl">
                  🏭
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Bước Chuyển Chiến Lược 10 Năm Đổi Mới ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Chủ Trương Đẩy Mạnh Công Nghiệp Hóa, Hiện Đại Hóa</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold text-[10px]">Bối cảnh tạo tiền đề</span>
                <h5 className="font-bold text-white text-sm">Đất nước đã ra khỏi khủng hoảng KT-XH</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Sau 10 năm Đổi mới (1986-1996), nhiệm vụ chuẩn bị tiền đề cho công nghiệp hóa đã cơ bản hoàn thành, kinh tế tăng trưởng khá.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-500/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-black text-[10px] uppercase">Bước ngoặt lịch sử ⭐️</span>
                <h5 className="font-bold text-pink-200 text-sm">Đẩy mạnh CNH, HĐH đất nước</h5>
                <p className="text-stone-200 text-[11px] leading-relaxed font-medium">
                  Tập trung sức đẩy mạnh CNH, HĐH, mở ra thời kỳ phát triển kinh tế hoàn toàn mới hướng tới thế kỷ XXI.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: TARGET 2020 */}
        {activeTab === "target" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-amber-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  📈
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Chỉ Số Phát Triển Trọng Tâm</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Mục Tiêu Đưa Nước Ta Cơ Bản Thành Nước Công Nghiệp 2020</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="text-amber-400 font-black text-2xl font-mono">2020</div>
                <h5 className="font-bold text-white text-xs">Cơ bản thành nước Công nghiệp</h5>
                <p className="text-stone-400 text-[11px]">Mục tiêu chiến lược xuyên suốt chặng đường dài hạn.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="text-pink-400 font-black text-2xl font-mono">x 2</div>
                <h5 className="font-bold text-white text-xs">GDP Bình quân Đầu người</h5>
                <p className="text-stone-400 text-[11px]">Tăng gấp đôi so với năm 1990 trong kế hoạch 1996-2000.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-2">
                <div className="text-amber-200 font-black text-2xl font-mono">9 - 10%</div>
                <h5 className="font-bold text-amber-200 text-xs">Tăng trưởng GDP/năm</h5>
                <p className="text-stone-200 text-[11px] font-medium">Tốc độ tăng trưởng kinh tế bình quân kỷ lục giai đoạn 1996-2000.</p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: DIPLOMACY 1995 BREAKTHROUGH */}
        {activeTab === "diplomacy" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-blue-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xl">
                  🌐
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block">Mốc Đột Phá Đối Ngoại Lịch Sử</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Tháng 7/1995: Gia Nhập ASEAN & Bình Thường Hóa Quan Hệ Với Hoa Kỳ</h4>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-cyan-200 text-xs font-bold font-mono">
                7/1995 ⭐️
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-cyan-400 uppercase">1. Gia nhập ASEAN (7/1995):</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Việt Nam chính thức trở thành thành viên thứ 7 của Hiệp hội các quốc gia Đông Nam Á (ASEAN), mở đầu tiến trình hội nhập khu vực.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-2">
                <span className="text-[10px] font-bold text-blue-200 uppercase">2. Bình thường hóa với Hoa Kỳ (7/1995):</span>
                <p className="text-blue-100 text-[11px] leading-relaxed font-semibold">
                  Chính thức bình thường hóa quan hệ ngoại giao với Hoa Kỳ, khép lại quá khứ, phá thế bao vây cấm vận hoàn toàn.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Leadership Shift Warning Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-950/70 via-stone-850 to-amber-950/70 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <Award size={22} className="text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-amber-300 uppercase text-[10px] tracking-wider block">Lưu Ý Bẫy Thi Nhân Sự Giữa Nhiệm Kỳ ⚠️</span>
            <p className="text-stone-100 font-bold text-xs md:text-sm">
              Đại hội VIII bầu <strong className="text-pink-300">Đỗ Mười</strong> làm Tổng Bí thư ➔ Tháng 12/1997 (HNTW 4), đồng chí <strong className="text-amber-300">Lê Khả Phiêu</strong> được bầu làm Tổng Bí thư thay thế.
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-pink-200 font-extrabold shrink-0">
          <UserCheck size={14} />
          <span>Tổng Bí thư: Đỗ Mười ➔ Lê Khả Phiêu (12/1997)</span>
        </div>
      </div>
    </div>
  );
}
