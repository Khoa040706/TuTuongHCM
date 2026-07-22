"use client";
import React from "react";
import { Shield, Award, Heart } from "lucide-react";

export default function LsdThreeArmedForcesVisualizer() {
  const forces = [
    {
      title: "Bộ Đội Chủ Lực",
      desc: "Đoàn quân chủ lực cơ động quy mô đại đoàn, trung đoàn tấn công tiêu diệt sinh lực lớn của địch trên các chiến dịch.",
      color: "border-red-300 bg-red-50/60 dark:bg-red-950/20",
      badgeColor: "bg-red-600 text-white"
    },
    {
      title: "Bộ Đội Địa Phương",
      desc: "Lực lượng vũ trang tại các tỉnh, huyện tác chiến linh hoạt bảo vệ địa bàn và hỗ trợ phong trào chiến tranh du kích.",
      color: "border-amber-300 bg-amber-50/60 dark:bg-amber-950/20",
      badgeColor: "bg-amber-600 text-white"
    },
    {
      title: "Dân Quân Du Kích",
      desc: "Lực lượng rộng khắp tại các làng xóm, đường phố (đạt 1.5 triệu người năm 1950) biến mỗi làng xóm thành một pháo đài.",
      color: "border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/20",
      badgeColor: "bg-emerald-600 text-white"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <Shield size={14} className="text-amber-600" /> Mô hình quốc phòng toàn dân
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
          Mô Hình Lực Lượng Vũ Trang "Ba Thứ Quân"
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Xây dựng lực lượng nòng cốt cho cuộc chiến tranh nhân dân rộng khắp toàn quốc.
        </p>
      </div>

      {/* 3 Forces Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {forces.map((f, idx) => (
          <div key={idx} className={`p-5 rounded-2xl border ${f.color} shadow-sm bg-white dark:bg-slate-900`}>
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${f.badgeColor} mb-3 inline-block font-serif`}>
              {f.title}
            </span>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-2">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Iconic Values Box: Bộ đội Cụ Hồ & Công an là bạn dân */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-amber-200 dark:border-slate-800">
        <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
          <Award className="text-amber-600 dark:text-amber-400 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-base text-amber-900 dark:text-amber-300 font-serif">Hình Ảnh "Bộ Đội Cụ Hồ"</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
              Tuyệt đối trung thành với Tổ quốc, hết lòng phục vụ nhân dân, kỷ luật tự giác, trở thành danh hiệu cao quý và tự hào của Quân đội nhân dân Việt Nam.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
          <Heart className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-base text-blue-900 dark:text-blue-300 font-serif">Tư Tưởng "Công An Là Bạn Dân"</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
              Xây dựng lực lượng Công an nhân dân mang bản chất giai cấp công nhân và tính nhân dân sâu sắc theo đúng 6 lời dạy của Chủ tịch Hồ Chí Minh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
