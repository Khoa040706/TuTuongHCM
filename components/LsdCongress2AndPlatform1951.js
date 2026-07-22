"use client";
import React, { useState } from "react";
import { Award, Users, BookOpen, Layers, CheckCircle2, ArrowRightLeft, Sparkles, Landmark } from "lucide-react";

export default function LsdCongress2AndPlatform1951() {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' or 'compare'

  const congressStats = [
    { label: "Thời gian & Địa điểm", value: "11 đến 19-2-1951", desc: "Xã Vinh Quang (Kim Bình), Chiêm Hóa, Tuyên Quang (ATK)", icon: Landmark },
    { label: "Số lượng Đại biểu", value: "158 chính thức, 53 dự khuyết", desc: "Đại diện cho hơn 766.000 đảng viên toàn quốc", icon: Users },
    { label: "Quyết định Tách Đảng", value: "Đảng Lao động Việt Nam", desc: "Việt Nam ra hoạt động công khai; Lào & Campuchia lập Đảng riêng", icon: Award },
    { label: "Lãnh đạo bầu ra", value: "Hồ Chí Minh & Trường Chinh", desc: "Bác Hồ làm Chủ tịch Đảng; Trường Chinh làm Tổng Bí thư", icon: Sparkles }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/40 via-white to-red-50/30 p-5 md:p-8 shadow-xl">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Award size={14} /> Đại hội Kháng chiến kiến quốc
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Đại Hội Đại Biểu Toàn Quốc Lần Thứ II (2-1951)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Đánh dấu bước phát triển mới về chất của Đảng: Đảng Lao động Việt Nam ra hoạt động công khai.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === "overview"
              ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <Landmark size={16} /> Thông Số & Nội Dung Đại Hội II
        </button>
        <button
          onClick={() => setActiveTab("compare")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === "compare"
              ? "bg-rose-700 text-white shadow-lg shadow-rose-700/30"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <ArrowRightLeft size={16} /> Card So Sánh Cương Lĩnh (1951 vs 1930)
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === "overview" && (
        <div>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {congressStats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 w-fit mb-3">
                    <Icon size={20} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{st.label}</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-serif mt-0.5">{st.value}</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">{st.desc}</div>
                </div>
              );
            })}
          </div>

          {/* 3 Core Points of Platform 1951 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-bold text-sm text-amber-800 dark:text-amber-400 font-serif mb-2">1. Tính Chất Xã Hội</h5>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Có 3 tính chất: **Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến**. Mâu thuẫn chính: Giữa dân chủ nhân dân với đế quốc xâm lược.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-bold text-sm text-amber-800 dark:text-amber-400 font-serif mb-2">2. Động Lực Cách Mạng</h5>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Gồm 4 giai cấp: **Công nhân, Nông dân, Tiểu tư sản, Tư sản dân tộc**. Nền tảng là liên minh Công - Nông và Lao động trí óc. Giai cấp Công nhân lãnh đạo.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-bold text-sm text-amber-800 dark:text-amber-400 font-serif mb-2">3. Nhiệm Vụ Cách Mạng</h5>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Đánh đuổi đế quốc xâm lược; Xóa bỏ tàn tích phong kiến thực hiện **"người cày có ruộng"**; Phát triển chế độ dân chủ nhân dân, gây cơ sở cho CNXH.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Comparison Card */}
      {activeTab === "compare" && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-amber-300 dark:border-amber-800 shadow-md">
          <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-4 text-center">
            Bảng So Sánh Sự Kế Thừa & Phát Triển Của Cương Lĩnh 1951
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-serif">
                  <th className="p-3 border border-amber-200 dark:border-amber-900">Nội dung</th>
                  <th className="p-3 border border-amber-200 dark:border-amber-900">Cương lĩnh đầu tiên (1-1930)</th>
                  <th className="p-3 border border-amber-200 dark:border-amber-900">Luận cương chính trị (10-1930)</th>
                  <th className="p-3 border border-amber-200 dark:border-amber-900">Chính cương 1951 (Đại hội II)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 font-bold border border-slate-200 dark:border-slate-800">Tên Đảng</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Đảng Cộng sản Việt Nam</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Đảng Cộng sản Đông Dương</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-amber-700 dark:text-amber-400">Đảng Lao động Việt Nam</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border border-slate-200 dark:border-slate-800">Nhiệm vụ hàng đầu</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Đánh đuổi đế quốc (Giải phóng dân tộc)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Đánh đổ phong kiến (Cách mạng thổ địa)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-amber-700 dark:text-amber-400">Tập trung diệt thực dân Pháp & can thiệp Mỹ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border border-slate-200 dark:border-slate-800">Động lực cách mạng</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Công, nông + Tranh thủ tiểu tư sản, tư sản dân tộc</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Chỉ có Công nhân và Nông dân</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-amber-700 dark:text-amber-400">4 giai cấp: Công, Nông, Tiểu tư sản, Tư sản dân tộc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
