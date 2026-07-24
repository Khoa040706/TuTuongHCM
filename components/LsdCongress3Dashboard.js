"use client";
import React, { useState } from "react";
import { ShieldCheck, Flag, ArrowRight, Zap, Target, BookOpen, Layers } from "lucide-react";

export default function LsdCongress3Dashboard() {
  const [activeStrategy, setActiveStrategy] = useState("both");

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/20 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Target size={14} />
            <span>Sáng tạo lý luận độc đáo của Đảng</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Đường lối Hai Chiến lược Cách mạng Song song
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Đại hội III (9/1960) — Vạch rõ vị trí, vai trò & mối quan hệ giữa Cách mạng hai miền Nam - Bắc
          </p>
        </div>

        {/* Strategy Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-800/80 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveStrategy("both")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeStrategy === "both"
                ? "bg-gradient-to-r from-pink-600 to-amber-600 text-white shadow-md"
                : "text-stone-400 hover:text-white"
            }`}
          >
            Tổng thể cả nước
          </button>
          <button
            onClick={() => setActiveStrategy("north")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeStrategy === "north"
                ? "bg-red-600 text-white shadow-md"
                : "text-stone-400 hover:text-white"
            }`}
          >
            Miền Bắc (XHCN)
          </button>
          <button
            onClick={() => setActiveStrategy("south")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeStrategy === "south"
                ? "bg-blue-600 text-white shadow-md"
                : "text-stone-400 hover:text-white"
            }`}
          >
            Miền Nam (DTDCND)
          </button>
        </div>
      </div>

      {/* Main Grid comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* NORTH CARD */}
        <div
          className={`p-6 rounded-2xl border transition-all duration-300 ${
            activeStrategy === "north" || activeStrategy === "both"
              ? "bg-stone-800/60 border-red-500/40 shadow-lg shadow-red-950/30 scale-[1.01]"
              : "bg-stone-900/40 border-stone-800 opacity-40"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                🏛️
              </div>
              <div>
                <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block">Chiến lược 1</span>
                <h4 className="text-lg font-bold text-white font-playfair">Cách mạng Xã hội Chủ nghĩa ở Miền Bắc</h4>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs text-stone-300">
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-between">
              <span className="font-bold text-red-200">Ví trí & Vai trò:</span>
              <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-extrabold text-[11px] shadow-xs">
                QUYẾT ĐỊNH NHẤT
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-900/60 border border-white/5 space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>Nhiệm vụ chiến lược:</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Xây dựng tiềm lực kinh tế, quốc phòng, củng cố hậu phương vững chắc; đưa miền Bắc tiến nhanh, tiến mạnh, tiến vững chắc lên CNXH.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-900/60 border border-white/5 space-y-1">
              <div className="font-bold text-pink-300 flex items-center gap-1.5">
                <Flag size={14} className="text-pink-400" />
                <span>Vai trò đối với Cách mạng:</span>
              </div>
              <p className="text-stone-300 leading-relaxed font-semibold">
                Miền Bắc là <span className="text-amber-300 font-bold">"HẬU PHƯƠNG LỚN"</span> chi viện sức người, sức của cho tiền tuyến miền Nam.
              </p>
            </div>
          </div>
        </div>

        {/* SOUTH CARD */}
        <div
          className={`p-6 rounded-2xl border transition-all duration-300 ${
            activeStrategy === "south" || activeStrategy === "both"
              ? "bg-stone-800/60 border-blue-500/40 shadow-lg shadow-blue-950/30 scale-[1.01]"
              : "bg-stone-900/40 border-stone-800 opacity-40"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                ⚔️
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block">Chiến lược 2</span>
                <h4 className="text-lg font-bold text-white font-playfair">Cách mạng Dân tộc Dân chủ Nhân dân ở Miền Nam</h4>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs text-stone-300">
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-between">
              <span className="font-bold text-blue-200">Vị trí & Vai trò:</span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-[11px] shadow-xs">
                QUYẾT ĐỊNH TRỰC TIẾP
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-900/60 border border-white/5 space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Target size={14} className="text-amber-400" />
                <span>Nhiệm vụ chiến lược:</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Đánh đổ ách sinh dịch của đế quốc Mỹ và tay sai, giải phóng miền Nam, hoàn thành cách mạng dân tộc dân chủ nhân dân.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-900/60 border border-white/5 space-y-1">
              <div className="font-bold text-pink-300 flex items-center gap-1.5">
                <Zap size={14} className="text-pink-400" />
                <span>Vai trò đối với Cách mạng:</span>
              </div>
              <p className="text-stone-300 leading-relaxed font-semibold">
                Miền Nam là <span className="text-cyan-300 font-bold">"TIỀN TUYẾN LỚN"</span> trực tiếp tiêu diệt địch, bảo vệ thành quả miền Bắc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Relationship Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-950/60 via-stone-800/80 to-amber-950/60 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center shrink-0 text-pink-300 font-black">
            ⚡
          </div>
          <div>
            <span className="font-bold text-pink-300 uppercase text-[10px] tracking-wider block">Khẩu hiệu trung tâm Đại hội III</span>
            <p className="text-stone-200 font-bold text-sm italic font-playfair">
              "Xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà"
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-amber-200 font-extrabold shrink-0">
          <Layers size={14} />
          <span>Mối quan hệ gắn bó khăng khít</span>
        </div>
      </div>
    </div>
  );
}
