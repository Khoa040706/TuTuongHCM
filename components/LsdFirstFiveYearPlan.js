"use client";
import React from "react";
import { TrendingUp, Factory, Sprout, GraduationCap, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function LsdFirstFiveYearPlan() {
  const achievements = [
    {
      icon: Sprout,
      color: "bg-emerald-600 text-white",
      title: "Nông Nghiệp",
      desc: "Xây dựng các phong trào thi đua điển hình như **'Hợp tác xã Đại Phong'** (Quảng Bình), mở rộng diện tích canh tác.",
      badge: "Đại Phong"
    },
    {
      icon: Factory,
      color: "bg-blue-600 text-white",
      title: "Công Nghiệp",
      desc: "Phong trào **'Nhà máy cơ khí Duyên Hải'** (Hải Phòng), **'Tiểu thủ công nghiệp Thành Công'** (Thanh Hóa).",
      badge: "Duyên Hải"
    },
    {
      icon: GraduationCap,
      color: "bg-purple-600 text-white",
      title: "Văn Hóa - Giáo Dục",
      desc: "Phong trào thi đua **'Trường cấp II Bắc Lý'** (Hà Nam), xóa nạn mù chữ, đào tạo cán bộ kỹ thuật cho cả nước.",
      badge: "Bắc Lý"
    },
    {
      icon: TrendingUp,
      color: "bg-amber-600 text-white",
      title: "Quân Đội Chi Viện",
      desc: "Phong trào **'Ba nhất'** trong quân đội. Chi viện hàng vạn cán bộ, chiến sĩ và vũ khí cho tiền tuyến miền Nam.",
      badge: "Ba nhất"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <TrendingUp size={14} className="text-amber-600" /> Kế hoạch 5 năm lần thứ nhất (1961 - 1965)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Thành Tựu Xây Dựng Cơ Sở Vật Chất XHCN Ở Miền Bắc
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          "Mỗi người làm việc bằng hai vì đồng bào miền Nam ruột thịt" — Lời kêu gọi của Bác Hồ (3-1964).
        </p>
      </div>

      {/* Bento Grid 4 Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className={`p-3 rounded-xl ${item.color} shadow-md shrink-0`}>
                <Icon size={24} />
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif">{item.title}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc.replace(/\*\*(.*?)\*\*/g, '<strong className="text-amber-800 dark:text-amber-300 font-serif">$1</strong>') }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Limitation / Hạn chế Box */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-900/60 shadow-md">
        <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/40 pb-3 mb-3">
          <AlertTriangle size={20} className="text-rose-600" />
          <h4 className="font-bold text-sm md:text-base text-rose-700 dark:text-rose-400 font-serif">
            Hạn Chế Của Kế Hoạch 5 Năm Lần Thứ Nhất (1961 - 1965)
          </h4>
        </div>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          Do nhận thức về con đường đi lên CNXH còn đơn giản, chủ quan, chưa thấy hết độ dài của thời kỳ quá độ, việc chỉ đạo thực hiện có lúc còn mang tính **"chủ quan nóng vội"**, công nghiệp hóa chưa chú ý đúng mức đến hiệu quả kinh tế.
        </p>
      </div>
    </div>
  );
}
