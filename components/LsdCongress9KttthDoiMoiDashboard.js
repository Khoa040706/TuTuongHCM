"use client";
import React, { useState } from "react";
import { TrendingUp, Cpu, BookOpen, Award, UserCheck, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function LsdCongress9KttthDoiMoiDashboard() {
  const [activeTab, setActiveTab] = useState("kttt");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp size={14} className="text-amber-400" />
            <span>Đại hội Đột phá Mô hình Kinh tế (4/2001)</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Đại hội IX (4/2001) — Khai Sinh Mô Hình Kinh Tế Thị Trường ĐHXHCN
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            "Mô hình kinh tế tổng quát trong suốt thời kỳ quá độ lên CNXH" ⭐️
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("kttt")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "kttt"
                ? "bg-pink-600 text-white shadow-md shadow-pink-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            📊 Kinh tế thị trường ĐHXHCN
          </button>
          <button
            onClick={() => setActiveTab("knowledge")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "knowledge"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            💡 CNH gắn với Kinh tế trí thức
          </button>
          <button
            onClick={() => setActiveTab("hcm")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "hcm"
                ? "bg-purple-600 text-white shadow-md shadow-purple-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            📖 Tư tưởng Hồ Chí Minh
          </button>
        </div>
      </div>

      {/* Dynamic Content Views */}
      <div className="relative z-10">
        {/* VIEW 1: KINHTE THI TRUONG DHXHCN */}
        {activeTab === "kttt" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-pink-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xl">
                  📊
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Đột Phá Tư Duy Lý Luận Lịch Sử ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Khai Sinh Khái Niệm Kinh Tế Thị Trường Định Hướng XHCN</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold text-[10px]">Lần đầu tiên dùng thuật ngữ</span>
                <h5 className="font-bold text-white text-sm">Chính thức khẳng định thuật ngữ</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Lần đầu tiên Đảng dùng thuật ngữ "Kinh tế thị trường định hướng xã hội chủ nghĩa" sau 15 năm tổng kết thực tiễn Đổi mới.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-500/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-black text-[10px] uppercase">Mô hình kinh tế tổng quát ⭐️</span>
                <h5 className="font-bold text-pink-200 text-sm">Nền tảng xuyên suốt chặng đường dài</h5>
                <p className="text-stone-200 text-[11px] leading-relaxed font-medium">
                  Khẳng định đây là MÔ HÌNH KINH TẾ TỔNG QUÁT của Việt Nam trong suốt thời kỳ quá độ lên CNXH, làm nền tảng cho các Đại hội X, XI, XII, XIII.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: KINH TE TRI THUC */}
        {activeTab === "knowledge" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-amber-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  💡
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Xu Thế Đầu Thế Kỷ XXI</span>
                  <h4 className="text-lg font-bold text-white font-playfair">CNH, HĐH Gắn Với Phát Triển Kinh Tế Trí Thức</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase">Tầm nhìn kinh tế mới:</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Con đường công nghiệp hóa, hiện đại hóa đất nước phải gắn liền với việc tranh thủ phát triển kinh tế trí thức và công nghệ thông tin.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-2">
                <span className="text-[10px] font-bold text-amber-200 uppercase">Mục tiêu 2020:</span>
                <p className="text-amber-100 text-[11px] leading-relaxed font-medium">
                  Đưa nước ta ra khỏi tình trạng kém phát triển, tạo tiền đề để đến năm 2020 cơ bản trở thành nước công nghiệp theo hướng hiện đại.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: HCM THOUGHT */}
        {activeTab === "hcm" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-purple-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xl">
                  📖
                </div>
                <div>
                  <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest block">Nền Tảng Tư Tưởng Đổi Mới</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Xác Định Rõ Nội Dung Cơ Bản Của Tư Tưởng Hồ Chí Minh</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-purple-300 uppercase">Hệ thống quan điểm toàn diện:</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Đại hội IX đã xác định rõ hệ thống quan điểm toàn diện của tư tưởng Hồ Chí Minh về con đường cách mạng Việt Nam.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <span className="text-[10px] font-bold text-purple-200 uppercase">Kim chỉ nam hành động:</span>
                <p className="text-purple-100 text-[11px] leading-relaxed font-semibold">
                  Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho mọi hành động của Đảng.
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
            <span className="font-bold text-pink-300 uppercase text-[10px] tracking-wider block">Chủ đề Khẩu hiệu Đại hội IX</span>
            <p className="text-stone-100 font-extrabold text-xs md:text-sm italic font-playfair tracking-tight">
              "Phát huy sức mạnh toàn dân tộc, tiếp tục đổi mới, đẩy mạnh CNH-HĐH, xây dựng và bảo vệ Tổ quốc VNXHCN" ⭐️
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-pink-200 font-extrabold shrink-0">
          <UserCheck size={14} />
          <span>Tổng Bí thư: Nông Đức Mạnh</span>
        </div>
      </div>
    </div>
  );
}
