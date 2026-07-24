"use client";
import React, { useState } from "react";
import { GitCompare, Factory, BookOpen, Target, UserCheck, Globe, CheckCircle2 } from "lucide-react";

export default function LsdCongress7Vs8Compare() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisons = [
    {
      id: "contextEconomy",
      icon: Factory,
      title: "Bối cảnh KT - XH",
      dh7: "Còn ở trong tình trạng khủng hoảng kinh tế - xã hội",
      dh8: "ĐÃ RA KHỎI KHỦNG HOẢNG KINH TẾ - XÃ HỘI ⭐️",
      highlight: "Điểm khác biệt cốt lõi nhất: Đất nước cơ bản hoàn thành các tiền đề để chuyển giai đoạn."
    },
    {
      id: "priorityTask",
      icon: Target,
      title: "Nhiệm vụ trọng tâm",
      dh7: "Thông qua Cương lĩnh 1991, ổn định kinh tế - xã hội",
      dh8: "Chuyển sang ĐẨY MẠNH CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA (CNH, HĐH) ĐẤT NƯỚC ⭐️",
      highlight: "Chủ trương chiến lược mở đường bước sang thế kỷ XXI."
    },
    {
      id: "platformDoc",
      icon: BookOpen,
      title: "Văn kiện nền tảng",
      dh7: "Lần đầu tiên thông qua Cương lĩnh 1991",
      dh8: "Không ra Cương lĩnh mới, tập trung Báo cáo Chính trị + Kế hoạch 5 năm (1996-2000)",
      highlight: "Cụ thể hóa Cương lĩnh 1991 thành kế hoạch hành động 5 năm."
    },
    {
      id: "longTermGoal",
      icon: Target,
      title: "Mục tiêu dài hạn",
      dh7: "Chiến lược ổn định và phát triển KT-XH đến năm 2000",
      dh8: "Mục tiêu đến NĂM 2020: Cơ bản trở thành nước công nghiệp ⭐️",
      highlight: "Xác định mốc son công nghiệp hóa Việt Nam vào năm 2020."
    },
    {
      id: "generalSecretary",
      icon: UserCheck,
      title: "Tổng Bí thư",
      dh7: "Đỗ Mười (Bầu mới tại ĐH VII)",
      dh8: "ĐỖ MƯỜI ⭐️ (Tái đắc cử tại ĐH VIII; đến 12/1997 Lê Khả Phiêu bầu thay thế)",
      highlight: "ĐH VIII tái bầu Đỗ Mười; giữa nhiệm kỳ tháng 12/1997 đồng chí Lê Khả Phiêu kế nhiệm."
    },
    {
      id: "diplomacy",
      icon: Globe,
      title: "Cột mốc đối ngoại",
      dh7: "Đang từng bước phá thế bao vây, cấm vận",
      dh8: "Đã GIA NHẬP ASEAN & BÌNH THƯỜNG HÓA QUAN HỆ VỚI HOA KỲ (7/1995) ⭐️",
      highlight: "Bước ngoặt hội nhập quốc tế toàn diện, mở rộng đối ngoại."
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
            <span>Bảng So sánh Bước ngoặt CNH - HĐH</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-playfair tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-white">
            Bảng So sánh Điểm mới: Đại hội VII (1991) vs Đại hội VIII (1996)
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Bấm vào từng tiêu chí bên dưới để xem sự phát triển từ "Thoát khủng hoảng" ➔ "Đẩy mạnh CNH, HĐH bước vào thế kỷ XXI"
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
            Đại hội VII (1991)
          </div>
          <div className="col-span-4 md:col-span-5 font-extrabold text-pink-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block" />
            Đại hội VIII (1996) ⭐️
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

              {/* DH VII */}
              <div className="col-span-4 text-xs text-stone-300 flex items-center leading-relaxed">
                {item.dh7}
              </div>

              {/* DH VIII */}
              <div className="col-span-4 md:col-span-5 text-xs text-amber-200 font-semibold flex items-center leading-relaxed">
                {item.dh8}
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
          <span><strong>Ghi nhớ nhanh:</strong> ĐH VII = <strong>"Thoát khủng hoảng, định hình lý luận"</strong> bằng Cương lĩnh 1991 | ĐH VIII = <strong>"Đẩy mạnh CNH, HĐH"</strong>, bước sang giai đoạn phát triển mới.</span>
        </div>
      </div>
    </div>
  );
}
