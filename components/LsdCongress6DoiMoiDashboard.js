"use client";
import React, { useState } from "react";
import { Zap, Sparkles, TrendingUp, RefreshCw, ShoppingBag, Wheat, Globe, ShieldAlert, Award, UserCheck } from "lucide-react";

export default function LsdCongress6DoiMoiDashboard() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap size={14} className="text-amber-400 fill-amber-400" />
            <span>Đại hội Khởi xướng Đổi mới Toàn diện (12/1986)</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Đại hội VI (12/1986) — Dấu Mốc Lịch Sử Trọng Đại
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật" ⭐️
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("core")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "core"
                ? "bg-pink-600 text-white shadow-md shadow-pink-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            ⭐️ 3 Nội dung Cốt lõi
          </button>

          <button
            onClick={() => setActiveTab("programs")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "programs"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🌾 3 Chương trình Kinh tế
          </button>

          <button
            onClick={() => setActiveTab("crisis")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "crisis"
                ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            📉 Lạm phát 774%
          </button>
        </div>
      </div>

      {/* Dynamic Content Views */}
      <div className="relative z-10">
        {/* VIEW 1: 3 CORE CONTENT */}
        {activeTab === "core" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-pink-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xl">
                  🚀
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Bước Đột phá Lịch sử ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">3 Nội Dung Đổi Mới Cốt Lõi Cần Nhớ</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] font-extrabold">Nội dung 1</span>
                <h5 className="font-bold text-white text-sm">Xóa bỏ cơ chế Bao cấp</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Xóa bỏ cơ chế tập trung quan liêu bao cấp, chuyển sang hạch toán kinh doanh XHCN, giải phóng năng lực sản xuất.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] font-extrabold">Nội dung 2</span>
                <h5 className="font-bold text-white text-sm">Kinh tế Nhiều thành phần</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Thực hiện nhất quán chính sách phát triển kinh tế nhiều thành phần (quốc doanh, tập thể, tư nhân, cá thể, tư bản nhà nước...).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 text-[10px] font-black uppercase">Trọng tâm ⭐️</span>
                <h5 className="font-bold text-amber-200 text-sm">Ba Chương trình Kinh tế lớn</h5>
                <p className="text-stone-200 text-[11px] leading-relaxed font-medium">
                  Tập trung mọi nguồn lực vào 3 chương trình: Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: 3 ECONOMIC PROGRAMS */}
        {activeTab === "programs" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-amber-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  🌾
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Quyết định Kinh tế Trọng tâm ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Ba Chương Trình Kinh Tế Lớn (1986 - 1990)</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-1">
                  <Wheat size={18} />
                </div>
                <h5 className="font-bold text-amber-200 text-sm">1. Lương thực - Thực phẩm</h5>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Giải quyết bằng được nhu cầu ăn của nhân dân, đáp ứng dự trữ và có xuất khẩu.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-1">
                  <ShoppingBag size={18} />
                </div>
                <h5 className="font-bold text-pink-200 text-sm">2. Hàng Tiêu dùng</h5>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Đáp ứng nhu cầu thiết yếu của nhân dân về may mặc, đồ dùng gia đình và dịch vụ đời sống.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-1">
                  <Globe size={18} />
                </div>
                <h5 className="font-bold text-cyan-200 text-sm">3. Hàng Xuất khẩu</h5>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Tạo nguồn thu ngoại tệ chính để nhập khẩu vật tư, máy móc thiết bị cho công nghiệp hóa.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: INFLATION & CRISIS CONTEXT */}
        {activeTab === "crisis" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-red-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xl">
                  📉
                </div>
                <div>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block">Bối cảnh Ép buộc Đổi mới</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Khủng Hoảng Cực Điểm — Lạm Phát Phi Mã 774%</h4>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-200 text-xs font-bold font-mono">
                1985 ➔ 1986
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="text-stone-400 font-bold uppercase text-[10px]">Chỉ số Lạm phát năm 1985:</div>
                <div className="text-amber-400 font-black text-2xl font-mono">~ 300%</div>
                <p className="text-stone-400 text-[11px]">Hậu quả thất bại đợt cải cách Giá - Lương - Tiền năm 1985.</p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 space-y-2">
                <div className="text-red-300 font-bold uppercase text-[10px]">Chỉ số Lạm phát đỉnh điểm năm 1986:</div>
                <div className="text-red-400 font-black text-3xl font-mono animate-pulse">774% ⚠️</div>
                <p className="text-red-200 text-[11px] font-semibold">Tình trạng kinh tế cực kỳ nguy cấp, đe dọa trực tiếp đời sống nhân dân ➔ Ép buộc Đảng phải "Nhìn thẳng vào sự thật" và Đổi mới toàn diện.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quote Card */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-950/70 via-stone-850 to-amber-950/70 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <Award size={22} className="text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-amber-300 uppercase text-[10px] tracking-wider block">Khấu hiệu Phương châm Lịch sử ĐH VI</span>
            <p className="text-stone-100 font-black text-sm md:text-base italic font-playfair tracking-tight">
              "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật" ⭐️
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-pink-200 font-extrabold shrink-0">
          <UserCheck size={14} />
          <span>Tổng Bí thư: Nguyễn Văn Linh</span>
        </div>
      </div>
    </div>
  );
}
