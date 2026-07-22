"use client";
import React from "react";
import { Skull, BookOpen, AlertOctagon, ShieldAlert, Award } from "lucide-react";

export default function LsdSouthOppressionAndOutline1956() {
  const crimes = [
    { time: "7-1955 đến 5-1956", detail: "Địch bắt và giết **108.835 người** trong đợt chiến dịch 'Tố cộng, diệt cộng'." },
    { time: "15-5-1957", detail: "Ngô Đình Diệm tuyên bố trắng trợn: **'Biên giới Hoa Kỳ kéo dài đến vĩ tuyến 17'**." },
    { time: "3-1959", detail: "Ban hành **Luật 10/59** — Dùng tòa án quân sự đặc biệt xét xử, lê máy chém bắn giết chiến sĩ và nhân dân tại chỗ." }
  ];

  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200 text-xs font-bold uppercase tracking-wider mb-2 border border-rose-300">
          <Skull size={14} className="text-rose-600 animate-pulse" /> Đốm lửa cách mạng miền Nam 1954 - 1958
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Tội Ác Mỹ - Diệm & Đề Cương Cách Mạng Miền Nam (1956)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Dưới ách độc tài phát xít Luật 10/59, Đảng khẩn trương chuẩn bị con đường bạo lực cách mạng giải phóng miền Nam.
        </p>
      </div>

      {/* Grid: Mỹ-Diệm Oppression vs Lê Duẩn Outline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Oppression List */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 dark:border-rose-800 shadow-md">
          <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-4">
            <div className="p-3 rounded-xl bg-rose-700 text-white shadow-md">
              <AlertOctagon size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-rose-900 dark:text-rose-300">Tội Ác Phát Xít Mỹ - Diệm</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Luật 10/59 & Quốc sách Tố cộng diệt cộng</p>
            </div>
          </div>

          <div className="space-y-3">
            {crimes.map((c, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 text-xs md:text-sm text-slate-800 dark:text-slate-200">
                <span className="font-bold text-rose-800 dark:text-rose-300 font-serif block mb-1">{c.time}:</span>
                <span dangerouslySetInnerHTML={{ __html: c.detail.replace(/\*\*(.*?)\*\*/g, '<strong className="text-rose-700 font-bold">$1</strong>') }} />
              </div>
            ))}
          </div>
        </div>

        {/* Đồng chí Lê Duẩn Outline */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-700 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-4">
              <div className="p-3 rounded-xl bg-amber-600 text-white shadow-md">
                <BookOpen size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-serif text-amber-900 dark:text-amber-300">Đề Cương Đường Lối Cách Mạng Miền Nam</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Đồng chí Lê Duẩn dự thảo (Tháng 8-1956)</p>
              </div>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <p className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200">
                • Tháng 10-1954: **Xứ ủy Nam Bộ** được thành lập do đồng chí Lê Duẩn làm Bí thư.
              </p>
              <p className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200">
                • Tháng 8-1956: Đồng chí Lê Duẩn soạn thảo **"Đề cương đường lối cách mạng Việt Nam ở miền Nam"** tại Bến Tre.
              </p>
              <p className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200">
                • **Tư tưởng cốt lõi**: Khẳng định nhân dân miền Nam không có con đường nào khác ngoài con đường **Sử dụng Bạo lực cách mạng** để tiêu diệt chính quyền phát xít tay sai.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
            <Award size={16} /> Tiền đề chuẩn bị cho Nghị quyết TW 15 (1-1959)
          </div>
        </div>
      </div>
    </div>
  );
}
