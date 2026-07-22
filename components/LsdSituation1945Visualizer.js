"use client";
import React, { useState } from "react";
import { ShieldAlert, Globe, Home, AlertTriangle, CheckCircle2, Flame, Users, BookOpen, AlertOctagon } from "lucide-react";

export default function LsdSituation1945Visualizer() {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'favorable', 'difficulties'

  const favorableInternational = [
    "Sau Chiến tranh thế giới thứ II, cục diện thế giới thay đổi có lợi cho cách mạng Việt Nam.",
    "Liên Xô trở thành thành trì vững chắc của chủ nghĩa xã hội.",
    "Nhiều nước Đông Trung Âu lựa chọn con đường XHCN với sự ủng hộ của Liên Xô.",
    "Phong trào giải phóng dân tộc ở châu Á, châu Phi, Mỹ Latinh dâng cao mạnh mẽ."
  ];

  const favorableDomestic = [
    "Việt Nam trở thành quốc gia độc lập, tự do.",
    "Nhân dân từ thân phận nô lệ trở thành chủ nhân chế độ dân chủ mới.",
    "Đảng Cộng sản trở thành Đảng cầm quyền lãnh đạo cách mạng cả nước.",
    "Hình thành hệ thống chính quyền cách mạng thống nhất từ Trung ương đến cơ sở.",
    "Chủ tịch Hồ Chí Minh trở thành biểu tượng độc lập, quy tụ khối đại đoàn kết dân tộc.",
    "Quân đội quốc gia, lực lượng Công an được khẩn trương xây dựng."
  ];

  const difficultiesInternational = [
    "Phe đế quốc chủ nghĩa âm mưu chia lại hệ thống thuộc địa thế giới.",
    "Không nước lớn nào công nhận địa vị pháp lý của Nhà nước Việt Nam Dân chủ Cộng hòa.",
    "Việt Nam bị bao vây, cách biệt hoàn toàn với thế giới bên ngoài."
  ];

  const difficultiesDomestic = [
    "Chính quyền cách mạng còn non trẻ, thiếu thốn, yếu kém nhiều mặt.",
    "Hậu quả chế độ cũ nặng nề: kinh tế xơ xác, công nghiệp đình đốn, 50% ruộng đất bỏ hoang.",
    "Tài chính, ngân khố kiệt quệ, kho bạc nhà nước trống rỗng.",
    "95% dân số thất học, mù chữ.",
    "Nạn đói cuối 1944 - đầu 1945 làm 2 triệu người chết đói.",
    "Thách thức lớn nhất: âm mưu quay lại xâm lược của thực dân Pháp."
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-gradient-to-br from-amber-50/40 via-white to-red-50/30 p-5 md:p-8 shadow-xl">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-700 via-rose-700 to-amber-700 p-6 text-white shadow-lg mb-6">
        <div className="absolute -right-6 -bottom-6 opacity-15 pointer-events-none">
          <AlertOctagon size={180} />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-2">
              <ShieldAlert size={14} className="text-amber-300" /> Bối cảnh lịch sử 1945
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-serif leading-tight">
              Tình Hình Việt Nam Sau Cách Mạng Tháng Tám
            </h3>
            <p className="text-amber-100 text-sm mt-1 max-w-2xl">
              Vừa ra đời, Nhà nước Việt Nam Dân chủ Cộng hòa lập tức đứng trước những cơ hội to lớn song song với vô vàn thách thức cực kỳ hiểm nghèo.
            </p>
          </div>
          <div className="px-4 py-3 bg-red-950/60 border border-amber-400/40 rounded-xl backdrop-blur-md text-center min-w-[200px]">
            <span className="text-xs text-amber-300 uppercase tracking-widest font-semibold block">Tình thế đất nước</span>
            <span className="text-lg md:text-xl font-extrabold text-white tracking-wide font-serif">"Ngàn cân treo sợi tóc"</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === "all"
              ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Xem tất cả
        </button>
        <button
          onClick={() => setActiveTab("favorable")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === "favorable"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300"
          }`}
        >
          <CheckCircle2 size={16} /> Thuận lợi
        </button>
        <button
          onClick={() => setActiveTab("difficulties")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === "difficulties"
              ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
              : "bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-300"
          }`}
        >
          <AlertTriangle size={16} /> Khó khăn
        </button>
      </div>

      {/* Split-Card Grid (Centered when single tab selected) */}
      <div className={activeTab === "all" ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "max-w-2xl mx-auto w-full"}>
        {/* Thuận Lợi (Green) */}
        {(activeTab === "all" || activeTab === "favorable") && (
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 shadow-sm">
            <div className="flex items-center gap-3 border-b border-emerald-200 dark:border-emerald-800/60 pb-3 mb-4">
              <div className="p-2.5 rounded-lg bg-emerald-600 text-white">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">1. Thuận Lợi Cốt Lõi</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">Thời cơ lịch sử và sức mạnh toàn dân</p>
              </div>
            </div>

            {/* Về Quốc tế */}
            <div className="mb-4">
              <h5 className="flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                <Globe size={15} /> Về Quốc tế:
              </h5>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {favorableInternational.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Về Trong nước */}
            <div>
              <h5 className="flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                <Home size={15} /> Về Trong nước:
              </h5>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {favorableDomestic.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Khó Khăn (Red) */}
        {(activeTab === "all" || activeTab === "difficulties") && (
          <div className="rounded-xl border border-rose-200 dark:border-rose-800/60 bg-rose-50/50 dark:bg-rose-950/20 p-5 shadow-sm">
            <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-800/60 pb-3 mb-4">
              <div className="p-2.5 rounded-lg bg-rose-600 text-white">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-rose-900 dark:text-rose-200">2. Khó Khăn & Thách Thức</h4>
                <p className="text-xs text-rose-700 dark:text-rose-400">Tình thế ngàn cân treo sợi tóc</p>
              </div>
            </div>

            {/* Về Quốc tế */}
            <div className="mb-4">
              <h5 className="flex items-center gap-2 text-sm font-semibold text-rose-800 dark:text-rose-300 mb-2">
                <Globe size={15} /> Về Quốc tế:
              </h5>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {difficultiesInternational.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Về Trong nước */}
            <div>
              <h5 className="flex items-center gap-2 text-sm font-semibold text-rose-800 dark:text-rose-300 mb-2">
                <Home size={15} /> Về Trong nước:
              </h5>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {difficultiesDomestic.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 rounded-xl bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/50 flex items-start gap-3">
        <Flame className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={20} />
        <div className="text-xs md:text-sm text-amber-900 dark:text-amber-200">
          <strong>Ghi nhớ trọng tâm:</strong> Đất nước lúc này vừa đối phó với <strong>nạn đói, nạn dốt</strong>, vừa phải đương đầu với <strong>thù trong, giặc ngoài</strong> (20 vạn quân Tưởng ở Bắc vĩ tuyến 16, thực dân Pháp nổ súng ở Nam Bộ và 6 vạn quân Nhật chưa giải giáp).
        </div>
      </div>
    </div>
  );
}
