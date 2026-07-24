"use client";
import React, { useState } from "react";
import { GitCompare, MapPin, Calendar, Compass, Bookmark, UserCheck, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function LsdCongress3Vs4Compare() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisons = [
    {
      id: "context",
      icon: Calendar,
      title: "Bối cảnh đất nước",
      dh3: "Đất nước tạm thời bị chia cắt 2 miền (sau Hiệp định Giơ-ne-vơ 1954)",
      dh4: "Đất nước đã THỐNG NHẤT hoàn toàn (sau Đại thắng mùa Xuân 1975)",
      highlight: "Chuyển từ đất nước chia cắt 2 miền sang hòa bình, độc lập, thống nhất cả nước."
    },
    {
      id: "delegatesScope",
      icon: MapPin,
      title: "Phạm vi đại biểu",
      dh3: "Chủ yếu đại biểu miền Bắc (do đất nước còn bị chia cắt)",
      dh4: "Đại biểu đại diện cho CẢ NƯỚC (bao gồm cả đại biểu miền Nam)",
      highlight: "Đại hội đầu tiên bầu BCH Trung ương thống nhất cho cả nước."
    },
    {
      id: "strategy",
      icon: Compass,
      title: "Đường lối chiến lược",
      dh3: "2 nhiệm vụ chiến lược song song (CNXH ở Bắc + CM DTDCND ở Nam)",
      dh4: "1 nhiệm vụ chiến lược CHUNG: Cả nước đi lên Chủ nghĩa Xã hội ⭐️",
      highlight: "Chuyển bước ngoặt đường lối lãnh đạo của Đảng từ 2 chiến lược sang 1 chiến lược thống nhất cả nước."
    },
    {
      id: "partyName",
      icon: Bookmark,
      title: "Tên gọi của Đảng",
      dh3: "Đảng Lao động Việt Nam",
      dh4: "Đổi tên thành ĐẢNG CỘNG SẢN VIỆT NAM ⭐️",
      highlight: "Tên gọi Đảng Cộng sản Việt Nam được giữ nguyên và sử dụng liên tục từ 1976 đến nay."
    },
    {
      id: "leaderTitle",
      icon: UserCheck,
      title: "Chức danh đứng đầu",
      dh3: "Bí thư thứ nhất (Đồng chí Lê Duẩn)",
      dh4: "Khôi phục chức danh TỔNG BÍ THƯ (Đồng chí Lê Duẩn)",
      highlight: "Quyết định khôi phục lại chức danh Tổng Bí thư thay cho Bí thư thứ nhất."
    },
    {
      id: "numbers",
      icon: Users,
      title: "Số lượng đại biểu/đảng viên",
      dh3: "525 + 51 dự khuyết / ~50 vạn đảng viên",
      dh4: "1.008 đại biểu chính thức / ~1,55 triệu đảng viên",
      highlight: "Quy mô số lượng đảng viên và đại biểu phát triển mạnh mẽ gấp 3 lần sau 16 năm."
    },
    {
      id: "econPlan",
      icon: TrendingUp,
      title: "Kế hoạch kinh tế",
      dh3: "Kế hoạch 5 năm lần thứ nhất (1961 - 1965)",
      dh4: "Kế hoạch 5 năm lần thứ hai (1976 - 1980)",
      highlight: "Kế hoạch 5 năm lần 2 đặt ra mục tiêu bảo đảm đời sống nhân dân và tích lũy xây dựng cơ sở vật chất XHCN."
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-950 via-stone-900 to-stone-950 text-white shadow-2xl border border-red-500/30 relative overflow-hidden select-none">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <GitCompare size={14} />
            <span>Bảng Phân tích Bằng chứng Lịch sử</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-200 to-white">
            Bảng So sánh Điểm mới: Đại hội III (1960) vs Đại hội IV (1976)
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Bấm vào từng tiêu chí bên dưới để xem phân tích chi tiết & bẫy thi thường gặp
          </p>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="space-y-3 relative z-10">
        {/* Table Header Row */}
        <div className="grid grid-cols-12 gap-3 px-4 py-3 bg-stone-900/90 rounded-2xl border border-white/10 font-bold text-xs text-stone-300 tracking-wider uppercase">
          <div className="col-span-4 md:col-span-3">Nội dung so sánh</div>
          <div className="col-span-4 font-extrabold text-pink-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
            Đại hội III (1960)
          </div>
          <div className="col-span-4 md:col-span-5 font-extrabold text-red-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
            Đại hội IV (1976) ⭐️
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
                  ? "bg-gradient-to-r from-stone-900 via-stone-850 to-red-950/40 border-red-500/50 shadow-lg shadow-red-950/30"
                  : "bg-stone-900/60 border-white/5 hover:bg-stone-800/60 hover:border-white/10"
              }`}
            >
              {/* Title */}
              <div className="col-span-4 md:col-span-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                  <IconComp size={16} />
                </div>
                <span className="font-bold text-xs md:text-sm text-stone-200 font-playfair">{item.title}</span>
              </div>

              {/* DH III */}
              <div className="col-span-4 text-xs text-stone-300 flex items-center leading-relaxed">
                {item.dh3}
              </div>

              {/* DH IV */}
              <div className="col-span-4 md:col-span-5 text-xs text-amber-200 font-semibold flex items-center leading-relaxed">
                {item.dh4}
              </div>

              {/* Expandable Detail Box */}
              {isSelected && (
                <div className="col-span-12 mt-3 pt-3 border-t border-red-500/20 text-xs text-red-200/90 bg-red-950/30 p-3 rounded-xl flex items-start gap-2 animate-in">
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
      <div className="mt-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-between gap-4 text-xs text-red-200 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-lg">💡</span>
          <span><strong>Mẹo nhớ nhanh:</strong> ĐH III: Đất nước chia 2 miền, 2 nhiệm vụ chiến lược | ĐH IV: Đất nước thống nhất, 1 nhiệm vụ chung (cả nước lên CNXH), Đổi tên Đảng, Khôi phục Tổng Bí thư.</span>
        </div>
      </div>
    </div>
  );
}
