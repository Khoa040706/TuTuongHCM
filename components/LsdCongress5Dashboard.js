"use client";
import React, { useState } from "react";
import { ShieldCheck, Sprout, Lightbulb, Compass, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LsdCongress5Dashboard() {
  const [activeTab, setActiveTab] = useState("tasks");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass size={14} className="text-pink-400" />
            <span>Giai đoạn Bắt đầu Tìm tòi Đổi mới (1981 - 1985)</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Đại hội V (3/1982) — Chuyển Biến Tư Duy Cốt Lõi
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Đại hội xác định 2 nhiệm vụ chiến lược & điều chỉnh Nông nghiệp là mặt trận hàng đầu
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("tasks")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "tasks"
                ? "bg-pink-600 text-white shadow-md shadow-pink-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🛡️ Hai Nhiệm vụ Chiến lược
          </button>
          <button
            onClick={() => setActiveTab("agriculture")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "agriculture"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            🌱 Nông nghiệp là Hàng đầu
          </button>
          <button
            onClick={() => setActiveTab("seeds")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "seeds"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "text-stone-400 hover:text-white"
            }`}
          >
            💡 Mầm mống Đổi mới
          </button>
        </div>
      </div>

      {/* Dynamic Content Panels */}
      <div className="relative z-10">
        {/* PANEL 1: 2 STRATEGIC TASKS */}
        {activeTab === "tasks" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-pink-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xl">
                  🛡️
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Lần đầu tiên nêu chính thức trong Văn kiện ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Hai Nhiệm Vụ Chiến Lược Của Cách Mạng Việt Nam</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-pink-500/20 text-pink-300 font-extrabold text-[10px]">Nhiệm vụ 1</span>
                  <span className="text-[10px] text-stone-400 font-mono">Xây dựng</span>
                </div>
                <h5 className="font-bold text-white text-sm">Xây dựng thành công Chủ nghĩa Xã hội</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Tập trung phát triển sản xuất, hàn gắn vết thương chiến tranh, giải quyết nhu cầu lương thực và hàng tiêu dùng cho nhân dân.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold text-[10px]">Nhiệm vụ 2</span>
                  <span className="text-[10px] text-stone-400 font-mono">Bảo vệ</span>
                </div>
                <h5 className="font-bold text-white text-sm">Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc XHCN</h5>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Củng cố quốc phòng, bảo vệ chủ quyền biên giới Tây Nam và phía Bắc, chống bao vây cấm vận của các thế lực thù địch.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 2: AGRICULTURE TOP PRIORITY */}
        {activeTab === "agriculture" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-emerald-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  🌾
                </div>
                <div>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">Điều chỉnh Ưu tiên Kinh tế ⭐️</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Coi Nông Nghiệp Là Mặt Trận Hàng Đầu</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase">So sánh với ĐH IV:</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  ĐH IV nhấn mạnh ưu tiên phát triển công nghiệp nặng ➔ ĐH V điều chỉnh lại tư duy, đưa <strong>NÔNG NGHIỆP LÀM MẶT TRẬN HÀNG ĐẦU</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                <span className="text-[10px] font-bold text-emerald-300 uppercase">Mục tiêu trọng tâm:</span>
                <p className="text-emerald-100 text-[11px] leading-relaxed font-medium">
                  Đẩy mạnh sản xuất hàng tiêu dùng; kết hợp Nông nghiệp - Công nghiệp hàng tiêu dùng - Công nghiệp nặng hợp lý.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-800/60 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase">Lý do thực tiễn:</span>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  Nền kinh tế lâm vào khủng hoảng, mất cân đối nghiêm trọng, cần giải quyết cấp bách nạn thiếu lương thực và hàng tiêu dùng thiết yếu.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 3: SEEDS OF DOI MOI */}
        {activeTab === "seeds" && (
          <div className="p-6 rounded-2xl bg-stone-900/70 border border-amber-500/30 space-y-4 animate-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  💡
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">Bước Chuẩn bị Tiền Đổi mới</span>
                  <h4 className="text-lg font-bold text-white font-playfair">Mầm Mống Tư Duy Đổi Mới Từ Đại Hội V</h4>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-800/60 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 font-bold">Thừa nhận nền kinh tế nhiều thành phần ở miền Nam:</strong>
                  <p className="text-stone-300 text-[11px] mt-0.5">Khẳng định thực tế miền Nam sau giải phóng tồn tại nhiều thành phần kinh tế, chưa thể cải tạo triệt để ngay.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-800/60 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 font-bold">Khoán sản phẩm nông nghiệp (Chỉ thị 100):</strong>
                  <p className="text-stone-300 text-[11px] mt-0.5">Tạo động lực giải phóng sức sản xuất trong nông nghiệp ở nông thôn.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-200 font-bold">Hội nghị Trung ương 8 khóa V (6/1985):</strong>
                  <p className="text-stone-200 text-[11px] mt-0.5">Nêu rõ bước đột phá: <em>"Xóa bỏ tập trung quan liêu bao cấp, thực hiện hạch toán kinh doanh XHCN"</em> ➔ Đẩy mạnh chuẩn bị cho Đổi mới toàn diện tại Đại hội VI (12/1986).</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slogan Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-950/70 via-stone-850 to-amber-950/70 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <Heart size={20} className="text-pink-400 shrink-0 fill-pink-500/30" />
          <div>
            <span className="font-bold text-pink-300 uppercase text-[10px] tracking-wider block">Khẩu hiệu Trung tâm Đại hội V</span>
            <p className="text-stone-200 font-extrabold text-sm italic font-playfair">
              "Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của nhân dân" ⭐️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
