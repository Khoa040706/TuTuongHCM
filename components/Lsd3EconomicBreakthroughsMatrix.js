"use client";
import React from "react";
import { Zap, CheckCircle2, Award } from "lucide-react";

export default function Lsd3EconomicBreakthroughsMatrix() {
  const breakthroughs = [
    {
      num: "Đột phá thứ nhất",
      time: "Tháng 8-1979",
      event: "Hội nghị Trung ương 6 (khóa IV)",
      core: "Chủ trương **'Sản xuất bung ra'**, cho phép khai hoang miễn thuế, xóa trạm kiểm soát lưu thông.",
      significance: "Bước đột phá đầu tiên cởi trói rào cản sản xuất."
    },
    {
      num: "Đột phá thứ hai",
      time: "Tháng 6-1985",
      event: "Hội nghị Trung ương 8 (khóa V)",
      core: "Coi **Giá - Lương - Tiền** là khâu đột phá, dứt khoát **xóa bỏ cơ chế tập trung bao cấp**, chuyển sang hạch toán kinh tế XHCN.",
      significance: "Bắt đầu xóa bỏ bao cấp trực diện."
    },
    {
      num: "Đột phá thứ ba",
      time: "Tháng 8-1986",
      event: "Bộ Chính trị khóa V Kết luận",
      core: "3 quan điểm kinh tế: **3 chương trình kinh tế lớn**, **Nền kinh tế nhiều thành phần**, **Đổi mới cơ chế quản lý**.",
      significance: "Quyết định cho sự ra đời đường lối Đổi mới tại Đại hội VI."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-amber-100/50 p-6 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Zap size={14} /> Ma trận 3 bước đột phá
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          3 Bước Đột Phá Đổi Mới Kinh Tế Trước Đại Hội VI
        </h3>
      </div>

      {/* Grid 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {breakthroughs.map((bt, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/50 pb-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-serif">
                  {bt.num}
                </span>
                <span className="text-xs font-bold text-amber-600">{bt.time}</span>
              </div>
              <h4 className="font-bold text-base font-serif text-slate-900 dark:text-white mb-2">{bt.event}</h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans mb-3" dangerouslySetInnerHTML={{ __html: bt.core.replace(/\*\*(.*?)\*\*/g, '<strong className="text-amber-800 dark:text-amber-300 font-bold">$1</strong>') }} />
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> {bt.significance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
