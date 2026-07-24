"use client";
import React, { useState } from "react";
import { GitCompare, Compass, Layers, Sprout, MessageSquare, UserCheck, CheckCircle2 } from "lucide-react";

export default function LsdCongress5Vs6Compare() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisons = [
    {
      id: "nature",
      icon: Compass,
      title: "Tính chất đổi mới",
      dh5: "Mới 'bắt đầu tìm tòi', mò mẫm một số điều chỉnh nhỏ (Khoán 100, thừa nhận bước đầu)",
      dh6: "CHÍNH THỨC KHỞI XƯỚNG ĐƯỜNG LỐI ĐỔI MỚI TOÀN DIỆN ⭐️",
      highlight: "Khác biệt cốt lõi: Đại hội V = Dò đường; Đại hội VI = Chính thức mở đường Đổi mới toàn diện."
    },
    {
      id: "multiComponent",
      icon: Layers,
      title: "Kinh tế nhiều thành phần",
      dh5: "Thừa nhận 'tạm thời', chủ yếu ở miền Nam trong một thời gian nhất định",
      dh6: "Thực hiện NHẤT QUÁN, LÂU DÀI chính sách kinh tế nhiều thành phần trên cả nước ⭐️",
      highlight: "Bước phát triển vượt bậc về tư duy kinh tế, giải phóng mọi năng lực sản xuất."
    },
    {
      id: "mechanism",
      icon: Compass,
      title: "Cơ chế quản lý kinh tế",
      dh5: "Vẫn duy trì cơ bản cơ chế tập trung quan liêu, bao cấp",
      dh6: "Chủ trương XÓA BỎ tập trung quan liêu bao cấp, chuyển sang hạch toán kinh doanh XHCN",
      highlight: "Chuyển hẳn sang cơ chế kinh doanh hạch toán kinh tế XHCN."
    },
    {
      id: "priority",
      icon: Sprout,
      title: "Trọng tâm kinh tế",
      dh5: "Nông nghiệp là mặt trận hàng đầu (chưa có chương trình cụ thể)",
      dh6: "Đề ra BA CHƯƠNG TRÌNH KINH TẾ LỚN cụ thể: Lương thực-thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu ⭐️",
      highlight: "Cụ thể hóa đường lối đổi mới kinh tế thành các chương trình hành động đầu tư ưu tiên."
    },
    {
      id: "spirit",
      icon: MessageSquare,
      title: "Tinh thần văn kiện",
      dh5: "Tự phê bình bước đầu trong lãnh đạo kinh tế",
      dh6: "'NHÌN THẲNG VÀO SỰ THẬT, ĐÁNH GIÁ ĐÚNG SỰ THẬT, NÓI RÕ SỰ THẬT' ⭐️",
      highlight: "Tự phê bình triệt để, toàn diện, chỉ rõ sai lầm bệnh chủ quan duy ý chí."
    },
    {
      id: "personnel",
      icon: UserCheck,
      title: "Tổng Bí thư & Chế định mới",
      dh5: "Lê Duẩn (Đến 7/1986: Trường Chinh kế nhiệm)",
      dh6: "NGUYỄN VĂN LINH ⭐️ (Đồng thời lần đầu lập chế định Cố vấn BCHTW: Trường Chinh, Phạm Văn Đồng, Lê Đức Thọ)",
      highlight: "Đánh dấu sự chuyển giao thế hệ lãnh đạo từ kháng chiến sang công cuộc Đổi mới."
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
            <span>Bảng Phân tích Bằng chứng Lịch sử</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Bảng So sánh Điểm mới: Đại hội V (1982) vs Đại hội VI (1986)
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Bấm vào từng tiêu chí bên dưới để xem bước ngoặt lịch sử từ "Dò đường" ➔ "Mở đường Đổi mới toàn diện"
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
            Đại hội V (1982)
          </div>
          <div className="col-span-4 md:col-span-5 font-extrabold text-pink-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
            Đại hội VI (1986) ⭐️
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

              {/* DH V */}
              <div className="col-span-4 text-xs text-stone-300 flex items-center leading-relaxed">
                {item.dh5}
              </div>

              {/* DH VI */}
              <div className="col-span-4 md:col-span-5 text-xs text-amber-200 font-semibold flex items-center leading-relaxed">
                {item.dh6}
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
          <span><strong>Mẹo nhớ nhanh:</strong> ĐH V = Mới "dò đường mò mẫm" | ĐH VI = <strong>Chính thức khởi xướng đường lối Đổi mới toàn diện</strong> với 3 nội dung cốt lõi: Xóa bao cấp - Kinh tế nhiều thành phần - 3 Chương trình kinh tế lớn.</span>
        </div>
      </div>
    </div>
  );
}
