"use client";
import React, { useState } from "react";
import {
  Users, Award, Flag, Calendar, Sparkles, CheckCircle2,
  Target, Shield, RotateCcw, Building2, Crown, Lightbulb,
  BookOpen, Star, AlertTriangle, ShieldCheck, Flame, Zap
} from "lucide-react";

export default function LsdCongress12FullVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [flippedLessons, setFlippedLessons] = useState({});

  const toggleLessonFlip = (idx) => {
    setFlippedLessons(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // 5 Kinh nghiệm rút ra sau 30 năm Đổi mới
  const lessons5 = [
    {
      id: 1,
      title: "1. Chú trọng xây dựng Đảng trong sạch, vững mạnh",
      summary: "Đặc biệt chú trọng công tác xây dựng Đảng trong sạch, vững mạnh, nâng cao năng lực lãnh đạo và sức chiến đấu.",
      detail: "Trước khó khăn, thách thức, phải kiên định mục tiêu, nâng cao bản lĩnh chính trị; xây dựng hệ thống chính trị vững mạnh, phát huy dân chủ, đại đoàn kết toàn dân."
    },
    {
      id: 2,
      title: "2. Nhìn thẳng vào sự thật, đánh giá đúng sự thật",
      summary: "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật.",
      detail: "Bám sát thực tiễn đất nước và thế giới; nắm bắt, dự báo kịp thời các điều kiện mới để điều chỉnh đường lối, chính sách phù hợp."
    },
    {
      id: 3,
      title: "3. Gắn kết chặt chẽ, triển khai đồng bộ nhiệm vụ",
      summary: "Phát triển kinh tế-xã hội là trung tâm; xây dựng Đảng là then chốt; phát triển văn hóa - nền tảng tinh thần; quốc phòng an ninh trọng yếu.",
      detail: "Triển khai đồng bộ, toàn diện các mặt công tác, không coi nhẹ bất kỳ lĩnh vực nào trong sự nghiệp xây dựng và bảo vệ Tổ quốc."
    },
    {
      id: 4,
      title: "4. Kiên trì mục tiêu lâu dài & Giải quyết cấp bách",
      summary: "Kiên trì mục tiêu lâu dài, tập trung nguồn lực giải quyết nhiều vụ cấp bách, trước mắt, tạo đột phá.",
      detail: "Kết hợp giữa tầm nhìn chiến lược lâu dài và năng lực chỉ đạo điều hành nhạy bén, kiên quyết xử lý dứt điểm các vướng mắc phát sinh."
    },
    {
      id: 5,
      title: "5. Chủ động, tích cực hội nhập quốc tế",
      summary: "Chủ động, tích cực hội nhập quốc tế trên cơ sở giữ vững độc lập, tự chủ.",
      detail: "Lấy lợi ích quốc gia dân tộc làm mục tiêu cao nhất; kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    }
  ];

  // 10 Mục tiêu nhiệm vụ tổng quát 2016-2020
  const tasks10 = [
    "1. Đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế, đẩy mạnh CNH-HĐH.",
    "2. Hoàn thiện thể chế, phát triển kinh tế thị trường định hướng XHCN.",
    "3. Đổi mới căn bản, toàn diện giáo dục, đào tạo, phát triển nguồn nhân lực.",
    "4. Phát triển, ứng dụng khoa học, công nghệ.",
    "5. Xây dựng, phát triển văn hóa, con người.",
    "6. Quản lý phát triển xã hội; thực hiện tiến bộ, công bằng xã hội.",
    "7. Quản lý tài nguyên; bảo vệ môi trường; ứng phó biến đổi khí hậu.",
    "8. Tăng cường quốc phòng, an ninh, bảo vệ vững chắc Tổ quốc.",
    "9. Nâng cao hiệu quả đối ngoại, chủ động, tích cực hội nhập quốc tế.",
    "10. Phát huy sức mạnh đại đoàn kết toàn dân tộc, dân chủ XHCN, xây dựng Nhà nước pháp quyền XHCN & Đảng trong sạch vững mạnh."
  ];

  // 6 Nhiệm vụ trọng tâm nhiệm kỳ XII
  const coreTasks6 = [
    {
      id: 1,
      title: "1. Xây Dựng, Chỉnh Đốn Đảng & Chống 'Tự Diễn Biến'",
      desc: "Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái tư tưởng chính trị, đạo đức, lối sống, biểu hiện 'tự diễn biến', 'tự chuyển hóa' trong nội bộ. Xây dựng đội ngũ cán bộ, nhất là cán bộ cấp chiến lược.",
      highlight: "Chống 'tự diễn biến', 'tự chuyển hóa'",
      color: "border-red-500 bg-red-50/80 dark:bg-red-950/40 text-red-900 dark:text-red-200"
    },
    {
      id: 2,
      title: "2. Tinh Gọn Bộ Máy & Chống Tham Nhũng",
      desc: "Xây dựng tổ chức bộ máy hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả; đẩy mạnh phòng, chống tham nhũng, lãng phí, quan liêu.",
      highlight: "Bộ máy tinh gọn, hiệu lực",
      color: "border-amber-500 bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200"
    },
    {
      id: 3,
      title: "3. Tăng Trưởng Kinh Tế & 3 Đột Phá Chiến Lược",
      desc: "Nâng cao chất lượng tăng trưởng, năng suất lao động, sức cạnh tranh; thực hiện 3 đột phá chiến lược; đẩy mạnh CNH-HĐH nông nghiệp, nông thôn; cơ cấu lại DNNN, ngân sách, xử lý nợ xấu.",
      highlight: "3 Đột phá chiến lược",
      color: "border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200"
    },
    {
      id: 4,
      title: "4. Bảo Vệ Chủ Quyền & Môi Trường Hòa Bình",
      desc: "Kiên quyết, kiên trì đấu tranh bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ; giữ vững môi trường hòa bình; mở rộng quan hệ đối ngoại, hội nhập quốc tế hiệu quả.",
      highlight: "Bảo vệ vững chắc độc lập chủ quyền",
      color: "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200"
    },
    {
      id: 5,
      title: "5. Nguồn Lực Nhân Dân & An Sinh Xã Hội",
      desc: "Thu hút, phát huy nguồn lực và sức sáng tạo của nhân dân; chăm lo đời sống, an sinh xã hội, giảm nghèo bền vững.",
      highlight: "Chăm lo an sinh xã hội",
      color: "border-purple-500 bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200"
    },
    {
      id: 6,
      title: "6. Phát Huy Nhân Tố Con Người & Văn Hóa",
      desc: "Phát huy nhân tố con người trong mọi lĩnh vực; xây dựng con người về đạo đức, nhân cách, lối sống, trí tuệ, năng lực; xây dựng môi trường văn hóa lành mạnh.",
      highlight: "Phát huy nhân tố con người",
      color: "border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200"
    }
  ];

  const tabs = [
    { id: 0, title: "1. Dashboard Đại Hội XII", icon: Crown },
    { id: 1, title: "2. 5 Kinh Nghiệm 30 Năm Đổi Mới", icon: Award },
    { id: 2, title: "3. 10 Mục Tiêu 2016-2020", icon: Target },
    { id: 3, title: "4. Ma Trận 6 Nhiệm Vụ Trọng Tâm", icon: ShieldCheck }
  ];

  return (
    <div className="my-8 rounded-3xl border border-red-300/80 dark:border-red-900/60 bg-gradient-to-b from-red-50/40 via-white to-amber-100/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-red-950/20 p-5 md:p-8 shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/90 text-red-900 dark:text-red-200 text-xs font-bold uppercase tracking-wider mb-3 border border-red-300 dark:border-red-800 shadow-sm">
          <Flag size={14} className="text-red-600 dark:text-red-400" />
          Đại Hội XII Của Đảng (20 - 28/1/2016)
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
          Tiếp Tục Đẩy Mạnh Toàn Diện, Đồng Bộ Công Cuộc Đổi Mới & Hội Nhập Quốc Tế
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 font-medium">
          Tổng kết 30 năm Đổi mới (1986 - 2016), 5 Bài học kinh nghiệm & Ma trận 6 Nhiệm vụ trọng tâm nhiệm kỳ XII.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-red-200 dark:border-red-900/50 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-red-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              <Icon size={16} />
              {tab.title}
            </button>
          );
        })}
      </div>

      {/* TAB 1: DASHBOARD ĐẠI HỘI XII */}
      {activeTab === 0 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Banner Chủ đề Đại hội XII */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 text-white shadow-xl">
            <h3 className="text-base font-extrabold mb-2 flex items-center gap-2">
              <Crown size={20} className="text-amber-200" />
              CHỦ ĐỀ ĐẠI HỘI XII CỦA ĐẢNG:
            </h3>
            <p className="text-sm md:text-base font-serif italic leading-relaxed opacity-95">
              "Tăng cường xây dựng Đảng trong sạch, vững mạnh; phát huy sức mạnh toàn dân tộc, dân chủ xã hội chủ nghĩa; đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; bảo vệ vững chắc Tổ quốc, giữ vững môi trường hòa bình, ổn định; phấn đấu sớm đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại".
            </p>
          </div>

          {/* Thành phần & Kết quả */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 shadow-md space-y-3">
              <h4 className="text-base font-bold text-red-900 dark:text-red-300 flex items-center gap-2">
                <Users size={18} className="text-red-600" />
                Thành Phần Đại Hội XII
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <li>• <strong>Thời gian:</strong> Hợp từ 20 đến 28-1-2016 tại Hà Nội.</li>
                <li>• <strong>Đại biểu:</strong> Mời <strong>1.510 đại biểu</strong>, thay mặt hơn <strong>4,5 triệu đảng viên</strong> toàn quốc.</li>
                <li>• <strong>Bối cảnh:</strong> Tổng kết <strong>"30 năm Đổi mới"</strong> (1986 - 2016). Thế và lực đất nước tăng rõ rệt; thời cơ và thách thức đan xen.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 shadow-md space-y-3">
              <h4 className="text-base font-bold text-red-900 dark:text-red-300 flex items-center gap-2">
                <Award size={18} className="text-red-600" />
                Kết Quả Bầu Cử & Chuyển Giao
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <li>• <strong>BCH Trung ương:</strong> Bầu <strong>180 ủy viên chính thức</strong>, <strong>20 ủy viên dự khuyết</strong>.</li>
                <li>• <strong>Bộ Chính trị:</strong> Bầu <strong>19 đồng chí</strong>.</li>
                <li>• <strong>Tổng Bí thư:</strong> Đồng chí <strong className="text-red-600 dark:text-red-400">Nguyễn Phú Trọng</strong> tiếp tục được tái bầu làm <strong>Tổng Bí thư</strong>.</li>
                <li>• <strong>Khẩu hiệu:</strong> Đưa thời kỳ phát triển "Toàn diện - Đẩy mạnh công cuộc Đổi mới".</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 5 KINH NGHIỆM 30 NĂM ĐỔI MỚI */}
      {activeTab === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 text-amber-900 dark:text-amber-200 text-sm font-medium">
            💡 <strong>5 Bài học kinh nghiệm rút ra sau 30 năm Đổi mới (1986 - 2016):</strong> Bấm vào thẻ để lật xem góc nhìn chỉ đạo sâu sắc.
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons5.map((l, idx) => {
              const isFlipped = flippedLessons[idx];
              return (
                <div
                  key={l.id}
                  onClick={() => toggleLessonFlip(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
                    isFlipped
                      ? "bg-red-600 text-white border-red-700"
                      : "bg-white dark:bg-slate-800 border-red-200 dark:border-red-900/50 hover:border-red-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isFlipped ? "bg-red-700 text-white" : "bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-300"}`}>
                      Bài học #{l.id}
                    </span>
                    <RotateCcw size={14} className={isFlipped ? "text-amber-200" : "text-red-500"} />
                  </div>
                  <h4 className={`text-sm font-bold mb-2 ${isFlipped ? "text-white" : "text-slate-900 dark:text-white"}`}>
                    {l.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isFlipped ? "text-red-100" : "text-slate-600 dark:text-slate-300"}`}>
                    {isFlipped ? l.detail : l.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: 10 MỤC TIÊU 2016-2020 */}
      {activeTab === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/50 shadow-md">
            <h3 className="text-base font-bold font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Target className="text-red-600" size={20} />
              10 Mục Tiêu, Nhiệm Vụ Tổng Quát Phát Triển Đất Nước (2016 - 2020):
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              {tasks10.map((task, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 font-medium">
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MA TRẬN 6 NHIỆM VỤ TRỌNG TÂM */}
      {activeTab === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <ShieldCheck className="text-red-600" size={18} />
            6 Nhiệm Vụ Trọng Tâm Nhiệm Kỳ XII:
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {coreTasks6.map((ct) => (
              <div key={ct.id} className={`p-5 rounded-2xl border-2 shadow-sm transition-all duration-300 ${ct.color}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-extrabold">{ct.title}</h4>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 border border-current">
                    ★ {ct.highlight}
                  </span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed opacity-95">{ct.desc}</p>
              </div>
            ))}
          </div>

          {/* Hộp từ khóa ôn thi trắc nghiệm Đại hội XII */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 text-white shadow-xl space-y-3">
            <h3 className="text-lg font-extrabold flex items-center gap-2">
              <Star size={20} className="text-amber-200" />
              TỪ KHÓA ÔN THI TRẮC NGHIỆM ĐẠI HỘI XII (MỤC e):
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm leading-relaxed opacity-95">
              <li>• <strong>Thời gian họp:</strong> 20 đến 28-1-2016 tại Hà Nội. Mời 1.510 đại biểu thay mặt hơn 4,5 triệu đảng viên.</li>
              <li>• <strong>Tổng kết mốc lịch sử:</strong> Tổng kết <strong>"30 năm Đổi mới"</strong> (1986 - 2016).</li>
              <li>• <strong>Tái bầu Tổng Bí thư:</strong> Đồng chí <strong>Nguyễn Phú Trọng</strong> được bầu lại làm Tổng Bí thư.</li>
              <li>• <strong>Nhiệm vụ trọng tâm #1:</strong> Ngăn chặn, đẩy lùi suy thoái tư tưởng chính trị, đạo đức, biểu hiện <strong>"tự diễn biến"</strong>, <strong>"tự chuyển hóa"</strong> trong nội bộ.</li>
              <li>• <strong>Nhiệm vụ trọng tâm #2:</strong> Tinh gọn tổ chức bộ máy hệ thống chính trị; phòng chống tham nhũng.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
