"use client";
import React from "react";
import { Layers, AlertTriangle, CheckCircle2, RefreshCw } from "lucide-react";

export default function LsdNorthAgricultureAndCorrection() {
  const steps = [
    {
      level: "Cấp độ 1",
      name: "Tổ Đổi Công",
      desc: "Hình thức hợp tác lao động đơn giản đầu tiên, giúp đỡ lẫn nhau về sức lao động và nông cụ sản xuất.",
      badge: "Sơ khai"
    },
    {
      level: "Cấp độ 2",
      name: "Hợp Tác Xã Bậc Thấp",
      desc: "Nông dân góp ruộng đất và tư liệu sản xuất vào hợp tác xã; hưởng hoa lợi theo ruộng và ngày công.",
      badge: "Trung gian"
    },
    {
      level: "Cấp độ 3",
      name: "Hợp Tác Xã Bậc Cao",
      desc: "Ruộng đất và tư liệu sản xuất thuộc sở hữu tập thể; phân phối hoàn toàn theo ngày công lao động.",
      badge: "Hoàn chỉnh"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <Layers size={14} className="text-amber-600" /> Tiến trình hợp tác hóa nông nghiệp miền Bắc
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          3 Cấp Độ Hợp Tác Hóa Nông Nghiệp & Bài Học Sửa Sai (1954 - 1960)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Theo Nghị quyết TW 16 (4-1959): Thực hiện theo 3 nguyên tắc **Tự nguyện, Cùng có lợi, Quản lý dân chủ**.
        </p>
      </div>

      {/* 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {steps.map((st, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-600 text-white font-bold text-xs font-serif">
                  {st.level}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {st.badge}
                </span>
              </div>
              <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white font-serif mb-2">{st.name}</h4>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{st.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <CheckCircle2 size={14} /> Hoàn thành 1958 - 1960
            </div>
          </div>
        ))}
      </div>

      {/* Land Reform Error & Correction Box */}
      <div className="rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-white dark:bg-slate-900 p-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/40 pb-4 mb-4">
          <div className="p-3 rounded-xl bg-rose-600 text-white shadow-md">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold font-serif text-rose-700 dark:text-rose-400">
              Công Tác Sửa Sai Cải Cách Ruộng Đất (Hội Nghị TW 10 - Tháng 9/1956)
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Nghiêm túc tự phê bình và sửa chữa sai lầm trước nhân dân
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-700 dark:text-slate-300">
          <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80">
            <strong className="text-rose-900 dark:text-rose-300 font-serif block mb-2 text-sm">⚠ Nguyên nhân sai lầm cốt lõi:</strong>
            <p className="leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
              Chịu ảnh hưởng của tư tưởng <strong className="text-rose-700 dark:text-rose-400">"chủ quan, giáo điều, không xuất phát từ tình hình thực tiễn"</strong>. Quy nhầm một số nông dân trung nông, quy nhầm địa chủ; dùng phương pháp quy chụp gây tổn hại cho tổ chức và quần chúng.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80">
            <strong className="text-emerald-900 dark:text-emerald-300 font-serif block mb-2 text-sm">✔ Quyết định sửa sai tại TW 10 (9-1956):</strong>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>Đồng chí Trường Chinh tự nguyện từ chức Tổng Bí thư.</li>
              <li>Thành khẩn tự phê bình trước toàn dân, khôi phục danh dự cho cán bộ, đảng viên bị quy nhầm.</li>
              <li>Tha miễn những người vô tội, trả lại tài sản và cấp đất ổn định đời sống.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
