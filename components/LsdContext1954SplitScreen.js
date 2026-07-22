"use client";
import React from "react";
import { Split, Globe, Home, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function LsdContext1954SplitScreen() {
  const intlFavorable = [
    "Hệ thống XHCN lớn mạnh vượt bậc (đặc biệt là Liên Xô) về kinh tế, quân sự, khoa học kỹ thuật.",
    "Phong trào giải phóng dân tộc, hòa bình, dân chủ dâng cao trên thế giới."
  ];

  const intlUnfavorable = [
    "Đế quốc Mỹ mưu đồ bá chủ thế giới, triển khai chiến lược toàn cầu phản cách mạng.",
    "Thế giới đi vào **thời kỳ Chiến tranh lạnh** gay gắt.",
    "Xuất hiện bất đồng, chia rẽ trong hệ thống XHCN (đặc biệt là giữa Liên Xô và Trung Quốc)."
  ];

  const domesticFavorable = [
    "Miền Bắc hoàn toàn giải phóng làm căn cứ địa - hậu phương lớn cho cả nước.",
    "Thế và lực cách mạng lớn mạnh hơn hẳn sau 9 năm kháng chiến chống Pháp.",
    "Ý chí độc lập, thống nhất đất nước sục sôi của nhân dân hai miền Bắc - Nam."
  ];

  const domesticUnfavorable = [
    "Đất nước chia cắt hai miền: Miền Nam bị đế quốc Mỹ và tay sai chiếm đóng.",
    "Địch cự tuyệt hiệp thương tổng tuyển cử thống nhất theo Hiệp định Geneve.",
    "Kinh tế miền Bắc nghèo nàn, lạc hậu, bị chiến tranh tàn phá nặng nề.",
    "**Đế quốc Mỹ trở thành kẻ thù trực tiếp của nhân dân Việt Nam**."
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <Split size={14} className="text-amber-600" /> Bối cảnh lịch sử sau Hiệp định Geneve (7-1954)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đặc Điểm Chưa Từng Có: Đất Nước Bị Chia Làm Hai Miền
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Hai miền tồn tại hai chế độ chính trị - xã hội hoàn toàn khác nhau dưới sự lãnh đạo duy nhất của Đảng.
        </p>
      </div>

      {/* 1. Split-Screen North vs South */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Miền Bắc */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-700 shadow-md">
          <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/50 pb-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs font-serif uppercase tracking-wider">
              MIỀN BẮC (1954)
            </span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Hậu phương XHCN</span>
          </div>

          <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-2">
            Hoàn toàn giải phóng & Quá độ lên Chủ nghĩa Xã hội
          </h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Xây dựng miền Bắc thành **hậu phương lớn vững mạnh**, khôi phục kinh tế, cải tạo xã hội, sẵn sàng làm chỗ dựa vững chắc chi viện cho cuộc đấu tranh thống nhất đất nước.
          </p>

          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-300 font-medium">
            ✔ Nhiệm vụ: Hàn gắn vết thương chiến tranh, phục hồi kinh tế, tiến hành Hợp tác hóa và Cải tạo XHCN.
          </div>
        </div>

        {/* Miền Nam */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 dark:border-rose-700 shadow-md">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-rose-700 text-white font-bold text-xs font-serif uppercase tracking-wider">
              MIỀN NAM (1954)
            </span>
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400">Thuộc địa kiểu mới Mỹ</span>
          </div>

          <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-2">
            Đế quốc Mỹ hất cẳng Pháp, lập chính quyền tay sai
          </h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Mỹ biến miền Nam thành **thuộc địa kiểu mới** và căn cứ quân sự tiến công miền Bắc. Chính quyền Ngô Đình Diệm khủng bố, cự tuyệt tổng tuyển cử Hiệp thương.
          </p>

          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-xs text-rose-900 dark:text-rose-300 font-medium">
            ⚠ Nhiệm vụ: Đấu tranh chống Mỹ - Diệm, bảo toàn lực lượng, chuyển từ đấu tranh chính trị sang **Bạo lực cách mạng**.
          </div>
        </div>
      </div>

      {/* 2. Matrix: Favorable vs Unfavorable */}
      <div className="border-t border-amber-200 dark:border-slate-800 pt-8">
        <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white text-center mb-6">
          Ma Trận Đánh Giá Thuận Lợi & Khó Khăn Của Cách Mạng Việt Nam
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Thuận Lợi */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 shadow-sm">
            <h5 className="font-bold text-base text-emerald-800 dark:text-emerald-300 font-serif mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} /> Các Yếu Tố Thuận Lợi
            </h5>
            
            <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100">
                <strong className="text-emerald-900 dark:text-emerald-300 block mb-1 font-serif">Quốc tế:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {intlFavorable.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100">
                <strong className="text-emerald-900 dark:text-emerald-300 block mb-1 font-serif">Trong nước:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {domesticFavorable.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Khó Khăn */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-800 shadow-sm">
            <h5 className="font-bold text-base text-rose-800 dark:text-rose-300 font-serif mb-3 flex items-center gap-2">
              <AlertTriangle size={18} /> Các Yếu Tố Khó Khăn
            </h5>

            <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100">
                <strong className="text-rose-900 dark:text-rose-300 block mb-1 font-serif">Quốc tế:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {intlUnfavorable.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong className="text-amber-700">$1</strong>') }} />
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100">
                <strong className="text-rose-900 dark:text-rose-300 block mb-1 font-serif">Trong nước:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {domesticUnfavorable.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong className="text-rose-700 font-bold">$1</strong>') }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
