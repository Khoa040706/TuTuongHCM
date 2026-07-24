"use client";
import React, { useState } from "react";
import { Flag, Sparkles, Cpu, RefreshCw, Layers, ShieldCheck, CheckCircle, Lightbulb } from "lucide-react";

export default function LsdCongress4Dashboard() {
  const [activeTab, setActiveTab] = useState("rename");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-950 via-stone-900 to-stone-950 text-white shadow-2xl border border-red-500/30 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span>Đại hội Thống nhất Đất nước 1976</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-200 to-white">
            Đại hội IV (12/1976) — Mốc Son Lịch Sử Của Cả Nước
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Đại hội đầu tiên của Đảng trên phạm vi cả nước sau ngày đất nước hoàn toàn hòa bình, thống nhất
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("rename")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "rename"
                ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🇻🇳 Đổi tên Đảng
          </button>
          <button
            onClick={() => setActiveTab("revolutions")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "revolutions"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            ⚙️ Ba cuộc Cách mạng
          </button>
          <button
            onClick={() => setActiveTab("personnel")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "personnel"
                ? "bg-pink-600 text-white shadow-md shadow-pink-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            👤 Khôi phục Tổng Bí thư
          </button>
        </div>
      </div>

      {/* Dynamic Content Views */}
      <div className="relative z-10">
        {/* VIEW 1: RENAME PARTY */}
        {activeTab === "rename" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-red-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xl">
                  🚩
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Quyết định Đột phá ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Đổi tên thành "Đảng Cộng sản Việt Nam"</h4>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-200 text-xs font-bold">
                1976 ➔ Nay
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="font-bold text-stone-400 uppercase text-[10px] tracking-wider flex items-center gap-1">
                  <RefreshCw size={12} className="text-stone-400" />
                  <span>Tên cũ (1951 - 1976):</span>
                </div>
                <div className="text-stone-300 font-bold text-base line-through opacity-70">
                  Đảng Lao động Việt Nam
                </div>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Tên gọi được sử dụng trong suốt thời kỳ kháng chiến chống Pháp và chống Mỹ (từ Đại hội II đến trước Đại hội IV).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-red-950/60 to-amber-950/40 border border-amber-500/30 space-y-2">
                <div className="font-bold text-amber-300 uppercase text-[10px] tracking-wider flex items-center gap-1">
                  <CheckCircle size={12} className="text-amber-400" />
                  <span>Tên mới được quyết định tại ĐH IV:</span>
                </div>
                <div className="text-amber-200 font-black text-lg font-playfair tracking-tight">
                  ĐẢNG CỘNG SẢN VIỆT NAM ⭐️
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Phản ánh đúng bản chất giai cấp công nhân và sứ mệnh lịch sử khi cả nước hòa bình, thống nhất tiến lên CNXH. Được giữ nguyên từ năm 1976 đến nay.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: 3 REVOLUTIONS */}
        {activeTab === "revolutions" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-amber-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  ⚙️
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Đường lối Xây dựng CNXH</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Đường lối "Ba Cuộc Cách Mạng"</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-stone-700 text-stone-300 text-[10px] font-bold">Cuộc CM 1</span>
                <h5 className="font-bold text-white text-sm">Cách mạng Quan hệ Sản xuất</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Xóa bỏ chế độ bóc lột, thiết lập chế độ công hữu về tư liệu sản xuất XHCN trên phạm vi cả nước.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/60 to-red-950/50 border border-amber-500/40 space-y-2 relative overflow-hidden">
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider">
                  THEN CHỐT ⭐️
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Cuộc CM 2</span>
                <h5 className="font-bold text-amber-200 text-sm flex items-center gap-1.5">
                  <Cpu size={14} className="text-amber-400" />
                  <span>CM Khoa học - Kỹ thuật</span>
                </h5>
                <p className="text-stone-200 text-[11px] leading-relaxed font-medium">
                  Giữ vai trò <strong>THEN CHỐT</strong> nhằm đưa nền kinh tế từ sản xuất nhỏ lên sản xuất lớn XHCN.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-stone-700 text-stone-300 text-[10px] font-bold">Cuộc CM 3</span>
                <h5 className="font-bold text-white text-sm">CM Tư tưởng và Văn hóa</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Xây dựng con người mới XHCN, phát triển nền văn hóa mới mang bản chất giai cấp công nhân.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: PERSONNEL */}
        {activeTab === "personnel" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-pink-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xl">
                  👤
                </div>
                <div>
                  <span className="text-[10px] font-black text-pink-400 uppercase tracking-widest block">Quyết định Nhân sự khóa IV</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Khôi phục Chức danh "Tổng Bí thư" ⭐️</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="font-bold text-stone-400 uppercase text-[10px]">Đại hội III (1960):</div>
                <div className="text-stone-300 font-semibold">
                  Chức danh đứng đầu Đảng: <span className="text-amber-300 font-bold">"Bí thư thứ nhất"</span> (Đồng chí Lê Duẩn đảm nhiệm).
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-pink-950/60 to-stone-800/80 border border-pink-500/30 space-y-2">
                <div className="font-bold text-pink-300 uppercase text-[10px]">Đại hội IV (12/1976):</div>
                <div className="text-white font-semibold">
                  Quyết định khôi phục lại chức danh <span className="text-pink-300 font-black">"TỔNG BÍ THƯ"</span>. Đồng chí <span className="text-amber-300 font-bold">Lê Duẩn</span> được bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Key Takeaway Callout */}
      <div className="mt-6 p-4 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-between gap-4 text-xs text-red-200 relative z-10">
        <div className="flex items-center gap-2">
          <Lightbulb size={18} className="text-amber-400 shrink-0" />
          <span><strong>Đại hội IV (12/1976):</strong> Đại hội toàn thắng của sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc, đưa cả nước đi lên Chủ nghĩa Xã hội!</span>
        </div>
      </div>
    </div>
  );
}
