"use client";
import React, { useState } from "react";
import { GitCompare, TrendingUp, UserCheck, Cpu, Target, BookOpen, CheckCircle2 } from "lucide-react";

export default function LsdCongress8Vs9Compare() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisons = [
    {
      id: "economicModel",
      icon: TrendingUp,
      title: "Tên gọi Mô hình Kinh tế",
      dh8: "'Kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước theo định hướng XHCN'",
      dh9: "Chính thức gọi tên: 'KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN', xác định là MÔ HÌNH KINH TẾ TỔNG QUÁT ⭐️",
      highlight: "Đột phá lớn nhất về nhận thức lý luận kinh tế trong thời kỳ quá độ lên CNXH."
    },
    {
      id: "generalSecretary",
      icon: UserCheck,
      title: "Tổng Bí thư",
      dh8: "Lê Khả Phiêu (Từ 12/1997 tại HNTW 4 thay đồng chí Đỗ Mười)",
      dh9: "NÔNG ĐỨC MẠNH ⭐️ (Lần đầu bầu làm Tổng Bí thư tại Đại hội IX)",
      highlight: "Chuyển giao thế hệ lãnh đạo cao nhất của Đảng."
    },
    {
      id: "cnhPriority",
      icon: Cpu,
      title: "Trọng tâm CNH - HĐH",
      dh8: "Đẩy mạnh Công nghiệp hóa, Hiện đại hóa đất nước",
      dh9: "CNH - HĐH gắn với PHÁT TRIỂN KINH TẾ TRÍ THỨC ⭐️",
      highlight: "Đón đầu xu thế cách mạng khoa học - công nghệ và toàn cầu hóa kinh tế."
    },
    {
      id: "strategicVision",
      icon: Target,
      title: "Tầm nhìn chiến lược",
      dh8: "Chiến lược ổn định và phát triển KT-XH 10 năm (1991 - 2000)",
      dh9: "CHIẾN LƯỢC PHÁT TRIỂN KT-XH 2001 - 2010, tầm nhìn đến NĂM 2020 ⭐️",
      highlight: "Định hướng phát triển 10 năm đầu thế kỷ XXI."
    },
    {
      id: "hcmThought",
      icon: BookOpen,
      title: "Tư tưởng Hồ Chí Minh",
      dh8: "Khẳng định tư tưởng HCM là nền tảng tư tưởng và kim chỉ nam (từ ĐH VII)",
      dh9: "XÁC ĐỊNH RÕ NỘI DUNG CƠ BẢN của tư tưởng Hồ Chí Minh trong toàn Đảng ⭐️",
      highlight: "Nâng tầm hệ thống lý luận quan điểm toàn diện về cách mạng Việt Nam."
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <GitCompare size={14} />
            <span>Bảng So sánh Điểm mới Đột phá Lý luận</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Bảng So sánh Điểm mới: Đại hội VIII (1996) vs Đại hội IX (2001)
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Bấm vào từng tiêu chí bên dưới để xem sự phát triển từ "Mô tả dài dòng" ➔ "Khai sinh Kinh tế thị trường ĐHXHCN"
          </p>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="space-y-3 relative z-10">
        {/* Table Header Row */}
        <div className="grid grid-cols-12 gap-3 px-4 py-3 bg-stone-900/90 rounded-2xl border border-white/10 font-bold text-xs text-stone-300 tracking-wider uppercase">
          <div className="col-span-4 md:col-span-3">Nội dung so sánh</div>
          <div className="col-span-4 font-extrabold text-stone-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-stone-400 inline-block" />
            Đại hội VIII (1996)
          </div>
          <div className="col-span-4 md:col-span-5 font-extrabold text-pink-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
            Đại hội IX (2001) ⭐️
          </div>
        </div>

        {/* Rows */}
        {comparisons.map((item) => {
          const IconComp = item.icon;
          const isSelected = selectedRow === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedRow(isSelected ? null : item.id)}
              className={`grid grid-cols-12 gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-r from-stone-900 via-stone-850 to-pink-950/40 border-pink-500/50 shadow-lg shadow-pink-950/30"
                  : "bg-stone-900/60 border-white/5 hover:bg-stone-800/60 hover:border-white/10"
              }`}
            >
              {/* Title */}
              <div className="col-span-4 md:col-span-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400">
                  <IconComp size={16} />
                </div>
                <span className="font-bold text-xs md:text-sm text-stone-200 font-playfair">{item.title}</span>
              </div>

              {/* DH VIII */}
              <div className="col-span-4 text-xs text-stone-300 flex items-center leading-relaxed">
                {item.dh8}
              </div>

              {/* DH IX */}
              <div className="col-span-4 md:col-span-5 text-xs text-amber-200 font-semibold flex items-center leading-relaxed">
                {item.dh9}
              </div>

              {/* Expandable Detail Box */}
              {isSelected && (
                <div className="col-span-12 mt-3 pt-3 border-t border-pink-500/20 text-xs text-pink-200/90 bg-pink-950/30 p-3 rounded-xl flex items-start gap-2 animate-in">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 uppercase tracking-wider block text-[10px] mb-0.5">Điểm mấu chốt:</span>
                    <p className="leading-relaxed">{item.highlight}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="mt-6 p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-between gap-4 text-xs text-pink-200 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-lg">💡</span>
          <span><strong>Ghi nhớ nhanh:</strong> Điểm mới lớn nhất của ĐH IX = Gọi tên chính thức <strong>"Kinh tế thị trường định hướng XHCN"</strong> (mô hình kinh tế tổng quát) + Đổi Tổng Bí thư sang đồng chí <strong>Nông Đức Mạnh</strong>.</span>
        </div>
      </div>
    </div>
  );
}
