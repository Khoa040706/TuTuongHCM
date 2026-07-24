"use client";
import React, { useState } from "react";
import { GitCompare, Compass, BookOpen, Target, UserCheck, Globe, CheckCircle2 } from "lucide-react";

export default function LsdCongress6Vs7Compare() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisons = [
    {
      id: "role",
      icon: Compass,
      title: "Vai trò lịch sử",
      dh6: "KHỞI XƯỚNG đường lối Đổi mới toàn diện ⭐️",
      dh7: "TỔNG KẾT 5 năm đổi mới, tiếp tục cụ thể hóa và khẳng định bản lĩnh ⭐️",
      highlight: "ĐH VI = Mở đường Đổi mới; ĐH VII = Định hình lý luận bằng Cương lĩnh 1991."
    },
    {
      id: "platform",
      icon: BookOpen,
      title: "Văn kiện nền tảng",
      dh6: "Chưa có Cương lĩnh riêng trong thời kỳ mới",
      dh7: "LẦN ĐẦU THÔNG QUA CƯƠNG LĨNH xây dựng đất nước thời kỳ quá độ lên CNXH (Cương lĩnh 1991) ⭐️",
      highlight: "Bước ngoặt tư duy lý luận nền tảng, thành văn kiện kim chỉ nam cho nhiều kỳ Đại hội sau."
    },
    {
      id: "strategy",
      icon: Target,
      title: "Chiến lược dài hạn",
      dh6: "Chưa có chiến lược phát triển KT-XH 10 năm",
      dh7: "Thông qua CHIẾN LƯỢC ỔN ĐỊNH VÀ PHÁT TRIỂN KT-XH ĐẾN NĂM 2000 (10 năm) ⭐️",
      highlight: "Quy hoạch con đường phát triển kinh tế - xã hội lâu dài."
    },
    {
      id: "personnel",
      icon: UserCheck,
      title: "Tổng Bí thư",
      dh6: "Nguyễn Văn Linh (Tổng Bí thư Đại hội VI)",
      dh7: "ĐỖ MƯỜI ⭐️ (Được bầu làm Tổng Bí thư tại Đại hội VII)",
      highlight: "Chuyển giao vị trí Tổng Bí thư lãnh đạo công cuộc Đổi mới."
    },
    {
      id: "context",
      icon: Globe,
      title: "Bối cảnh quốc tế",
      dh6: "CNXH thế giới vẫn còn tồn tại",
      dh7: "LIÊN XÔ VÀ ĐÔNG ÂU SỤP ĐỔ ⭐️ (Cuối 1980 - đầu 1990)",
      highlight: "Thách thức cực kỳ gay gắt nhưng Đảng vẫn kiên định con đường đi lên CNXH."
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-pink-500/30 relative overflow-hidden select-none">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <GitCompare size={14} />
            <span>Bảng So sánh Bước ngoặt Lý luận</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Bảng So sánh Điểm mới: Đại hội VI (1986) vs Đại hội VII (1991)
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Bấm vào từng tiêu chí bên dưới để xem sự phát triển từ "Mở đường" ➔ "Định hình lý luận bằng Cương lĩnh 1991"
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
            Đại hội VI (1986)
          </div>
          <div className="col-span-4 md:col-span-5 font-extrabold text-pink-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
            Đại hội VII (1991) ⭐️
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

              {/* DH VI */}
              <div className="col-span-4 text-xs text-stone-300 flex items-center leading-relaxed">
                {item.dh6}
              </div>

              {/* DH VII */}
              <div className="col-span-4 md:col-span-5 text-xs text-amber-200 font-semibold flex items-center leading-relaxed">
                {item.dh7}
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
          <span><strong>Ghi nhớ nhanh:</strong> ĐH VI = <strong>"Mở đường"</strong> Đổi mới toàn diện | ĐH VII = <strong>"Định hình lý luận"</strong> bằng Cương lĩnh 1991 & Chiến lược 2000.</span>
        </div>
      </div>
    </div>
  );
}
