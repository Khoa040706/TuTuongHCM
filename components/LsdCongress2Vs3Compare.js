"use client";
import React, { useState } from "react";
import { GitCompare, MapPin, Calendar, Compass, Bookmark, UserCheck, TrendingUp, CheckCircle2 } from "lucide-react";

export default function LsdCongress2Vs3Compare() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisons = [
    {
      id: "location",
      icon: MapPin,
      title: "Địa điểm tổ chức",
      dh2: "Chiêm Hóa, Tuyên Quang (Họp bí mật)",
      dh3: "Thủ đô Hà Nội (Họp công khai lần đầu)",
      highlight: "Lần đầu tiên họp công khai tại Thủ đô Hà Nội sau 30 năm hoạt động bí mật/chiến tranh."
    },
    {
      id: "context",
      icon: Calendar,
      title: "Bối cảnh đất nước",
      dh2: "Toàn quốc đang kháng chiến chống thực dân Pháp",
      dh3: "Đất nước tạm thời bị chia cắt 2 miền (sau Hiệp định Giơ-ne-vơ 1954)",
      highlight: "Miền Bắc hoàn thành khôi phục kinh tế & cải tạo XHCN; Miền Nam thắng lợi phong trào Đồng khởi."
    },
    {
      id: "strategy",
      icon: Compass,
      title: "Đường lối chiến lược",
      dh2: "1 nhiệm vụ chiến lược: Kháng chiến chống Pháp",
      dh3: "2 nhiệm vụ chiến lược song song (CNXH ở Bắc + CM DTDCND ở Nam)",
      highlight: "Sáng tạo lý luận độc đáo của Đảng: Miền Bắc là Hậu phương lớn (quyết định nhất), Miền Nam là Tiền tuyến lớn (quyết định trực tiếp)."
    },
    {
      id: "partyName",
      icon: Bookmark,
      title: "Tên gọi của Đảng",
      dh2: "Đổi tên thành 'Đảng Lao động Việt Nam'",
      dh3: "Giữ nguyên tên 'Đảng Lao động Việt Nam'",
      highlight: "Tên Đảng Lao động Việt Nam được giữ vững cho đến Đại hội IV (1976) mới đổi lại thành Đảng Cộng sản Việt Nam."
    },
    {
      id: "leaderTitle",
      icon: UserCheck,
      title: "Chức danh người đứng đầu",
      dh2: "Tổng Bí thư (Đồng chí Trường Chinh)",
      dh3: "Bí thư thứ nhất (Đồng chí Lê Duẩn)",
      highlight: "Lần đầu tiên danh xưng đứng đầu Đảng gọi là 'Bí thư thứ nhất'. Bác Hồ tiếp tục làm Chủ tịch Đảng."
    },
    {
      id: "econPlan",
      icon: TrendingUp,
      title: "Kế hoạch phát triển kinh tế",
      dh2: "Chưa có kế hoạch dài hạn cụ thể",
      dh3: "Thông qua Kế hoạch 5 năm lần thứ nhất (1961 - 1965)",
      highlight: "Trọng tâm đẩy mạnh công nghiệp hóa XHCN, xây dựng cơ sở vật chất - kỹ thuật cho miền Bắc."
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-amber-500/20 relative overflow-hidden select-none">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <GitCompare size={14} />
            <span>Bảng Phân tích Bằng chứng Lịch sử</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Bảng So sánh Điểm mới: Đại hội II (1951) vs Đại hội III (1960)
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Bấm vào từng tiêu chí bên dưới để xem phân tích chi tiết & bẫy thi thường gặp
          </p>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="space-y-3 relative z-10">
        {/* Table Header Row */}
        <div className="grid grid-cols-12 gap-3 px-4 py-3 bg-stone-800/90 rounded-2xl border border-white/10 font-bold text-xs text-stone-300 tracking-wider uppercase">
          <div className="col-span-4 md:col-span-3">Nội dung so sánh</div>
          <div className="col-span-4 font-extrabold text-amber-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            Đại hội II (1951)
          </div>
          <div className="col-span-4 md:col-span-5 font-extrabold text-pink-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
            Đại hội III (1960) ⭐️
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
                  ? "bg-gradient-to-r from-stone-800 via-stone-800/90 to-amber-950/40 border-amber-500/50 shadow-lg shadow-amber-950/30"
                  : "bg-stone-900/60 border-white/5 hover:bg-stone-800/60 hover:border-white/10"
              }`}
            >
              {/* Title */}
              <div className="col-span-4 md:col-span-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <IconComp size={16} />
                </div>
                <span className="font-bold text-xs md:text-sm text-stone-200 font-playfair">{item.title}</span>
              </div>

              {/* DH II */}
              <div className="col-span-4 text-xs text-stone-300 flex items-center leading-relaxed">
                {item.dh2}
              </div>

              {/* DH III */}
              <div className="col-span-4 md:col-span-5 text-xs text-pink-200 font-semibold flex items-center leading-relaxed">
                {item.dh3}
              </div>

              {/* Expandable Detail Box */}
              {isSelected && (
                <div className="col-span-12 mt-3 pt-3 border-t border-amber-500/20 text-xs text-amber-200/90 bg-amber-950/30 p-3 rounded-xl flex items-start gap-2 animate-in">
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
      <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-4 text-xs text-amber-200 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-lg">💡</span>
          <span><strong>Mẹo nhớ nhanh:</strong> ĐH II: Bí mật, 1 nhiệm vụ chống Pháp | ĐH III: Công khai tại Hà Nội, 2 nhiệm vụ chiến lược song song, Kế hoạch 5 năm lần 1.</span>
        </div>
      </div>
    </div>
  );
}
