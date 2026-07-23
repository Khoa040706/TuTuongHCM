"use client";
import React, { useState } from "react";
import {
  Calendar, Shield, Award, Crown, Sparkles, CheckCircle2,
  Table, Flag, BookOpen, Star, AlertTriangle, Lightbulb,
  Heart, Building2, Users, Scale, Globe, ShieldCheck, Zap
} from "lucide-react";

export default function LsdCongress12ConferencesAndSummaryVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedConference, setSelectedConference] = useState(null);

  // Dòng thời gian các Hội nghị TW khóa XII
  const conferencesXII = [
    {
      id: "tw4-xii",
      time: "Hội nghị TW 4 (10-2016)",
      title: "Chỉ Rõ 27 Biểu Hiện 'Tự Diễn Biến', 'Tự Chuyển Hóa'",
      color: "border-red-500 bg-red-50/80 dark:bg-red-950/40 text-red-900 dark:text-red-200",
      content: [
        "Đổi mới mô hình tăng trưởng, nâng cao chất lượng tăng trưởng, năng suất lao động, sức cạnh tranh của nền kinh tế.",
        "Thực hiện hiệu quả tiến trình hội nhập kinh tế quốc tế, giữ vững ổn định chính trị-xã hội.",
        "Nghị quyết về tăng cường xây dựng, chỉnh đốn Đảng - chỉ rõ 27 biểu hiện 'tự diễn biến', 'tự chuyển hóa' trong nội bộ; quyết tâm chính trị cao, người đứng đầu làm gương."
      ]
    },
    {
      id: "ct05",
      time: "Chỉ thị 05-CT/TW (5-2016)",
      title: "Học Tập Tư Tưởng, Đạo Đức, Phong Cách Hồ Chí Minh",
      color: "border-amber-500 bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200",
      content: [
        "Bộ Chính trị ban hành Chỉ thị 05-CT/TW tiếp tục đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
        "Kế thừa Chỉ thị 03-CT/TW khóa XI - nội dung quan trọng công tác xây dựng, chỉnh đốn Đảng, xây dựng đội ngũ cán bộ các cấp."
      ]
    },
    {
      id: "tw5-xii",
      time: "Hội nghị TW 5 (5-2017)",
      title: "Kinh Tế Tư Nhân Trở Thành Động Lực Quan Trọng",
      color: "border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200",
      content: [
        "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN (nhiệm vụ chiến lược, khâu đột phá quan trọng).",
        "Tiếp tục sắp xếp, đổi mới DNNN (nắm 100% vốn điều lệ hoặc cổ phần chi phối ở lĩnh vực then chốt, quốc phòng an ninh).",
        "Chủ trương phát triển: 'Kinh tế tư nhân trở thành một động lực quan trọng của nền kinh tế thị trường định hướng XHCN' - xóa bỏ rào cản, định kiến, khuyến khích tập đoàn kinh tế tư nhân đa sở hữu."
      ]
    },
    {
      id: "tw6-xii",
      time: "Hội nghị TW 6 (10-2017)",
      title: "Chăm Sóc Sức Khỏe Nhân Dân & Công Tác Dân Số",
      color: "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200",
      content: [
        "Nghị quyết về tăng cường công tác bảo vệ, chăm sóc, nâng cao sức khỏe nhân dân trong tình hình mới (khẳng định: Đầu tư cho sức khỏe nhân dân là đầu tư cho phát triển).",
        "Nghị quyết về công tác dân số trong tình hình mới."
      ]
    },
    {
      id: "tw7-xii",
      time: "Hội nghị TW 7 (5-2018)",
      title: "Xây Dựng Cán Bộ, Cải Cách Tiền Lương & BHXH",
      color: "border-purple-500 bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200",
      content: [
        "Nghị quyết tập trung xây dựng đội ngũ cán bộ các cấp, nhất là cấp chiến lược, đủ phẩm chất, năng lực và uy tín, ngang tầm nhiệm vụ.",
        "Cải cách chính sách tiền lương đối với cán bộ, công chức, viên chức, lực lượng vũ trang và lao động doanh nghiệp.",
        "Cải cách chính sách bảo hiểm xã hội - khẳng định: 'Bảo hiểm xã hội là một trụ cột chính của hệ thống an sinh xã hội'."
      ]
    },
    {
      id: "tw8-xii",
      time: "Hội nghị TW 8 (10-2018)",
      title: "Chiến Lược Biển 2045 & Quy Định Nêu Gương",
      color: "border-cyan-500 bg-cyan-50/80 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200",
      content: [
        "Ban hành 'Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045' - Việt Nam phải trở thành 'quốc gia mạnh về biển, giàu từ biển, phát triển bền vững, thịnh vượng, an ninh, an toàn'.",
        "Quy định trách nhiệm nêu gương của cán bộ, đảng viên, trước hết là Ủy viên Bộ Chính trị, Ủy viên Ban Bí thư, Ủy viên Ban Chấp hành Trung ương Đảng."
      ]
    }
  ];

  // Bảng so sánh bổ sung Đại hội XI vs XII
  const comparisonData = [
    {
      criteria: "Thời gian tổ chức",
      congress11: "12 - 19/1/2011",
      congress12: "20 - 28/1/2016"
    },
    {
      criteria: "Tổng Bí thư",
      congress11: "Nguyễn Phú Trọng",
      congress12: "Nguyễn Phú Trọng (bầu lại)"
    },
    {
      criteria: "Số đại biểu / Đảng viên",
      congress11: "1.377 đại biểu / 3,6 triệu đảng viên",
      congress12: "1.510 đại biểu / 4,6 triệu đảng viên"
    },
    {
      criteria: "Văn kiện & Chủ đề nổi bật",
      congress11: "Cương lĩnh năm 2011; Chiến lược KT-XH 2011-2020; 3 đột phá chiến lược",
      congress12: "Chủ đề 'Đoàn kết - Dân chủ - Kỷ cương - Đổi mới'; Tổng kết 30 năm Đổi mới; 6 nhiệm vụ trọng tâm"
    }
  ];

  const tabs = [
    { id: 0, title: "1. Dòng Thời Gian TW Khóa XII", icon: Calendar },
    { id: 1, title: "2. So Sánh Đại Hội XI vs XII", icon: Table },
    { id: 2, title: "3. Đánh Giá Thành Tựu Đổi Mới", icon: Award },
    { id: 3, title: "4. Ôn Thi Trắc Nghiệm Trọn Bộ", icon: Star }
  ];

  return (
    <div className="my-8 rounded-3xl border border-red-300/80 dark:border-red-900/60 bg-gradient-to-b from-red-50/40 via-white to-amber-100/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-red-950/20 p-5 md:p-8 shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/90 text-red-900 dark:text-red-200 text-xs font-bold uppercase tracking-wider mb-3 border border-red-300 dark:border-red-800 shadow-sm">
          <Flag size={14} className="text-red-600 dark:text-red-400" />
          Sau Đại Hội XII – Kết Thúc Chương III
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
          Các Hội Nghị Trung Ương Khóa XII, So Sánh Hai Kỳ Đại Hội & Tổng Kết Đổi Mới
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 font-medium">
          Dòng thời gian TW4 ➔ TW8 khóa XII, Mốc Tổng Bí thư kiêm Chủ tịch nước (23/10/2018) & Tổng kết thành tựu Đổi mới.
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

      {/* TAB 1: DÒNG THỜI GIAN TW KHÓA XII */}
      {activeTab === 0 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Mốc lịch sử 23-10-2018 Special Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 text-white shadow-xl flex items-start gap-4">
            <Crown size={32} className="shrink-0 text-amber-200 mt-1" />
            <div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-xs font-bold mb-1">
                Mốc Lịch Sử: Ngày 23 - 10 - 2018
              </span>
              <h3 className="text-lg md:text-xl font-bold">
                Tổng Bí Thư Nguyễn Phú Trọng Được Bầu Giữ Chức Chủ Tịch Nước
              </h3>
              <p className="text-xs md:text-sm leading-relaxed mt-1 opacity-95">
                Tại kỳ họp thứ 6, Quốc hội khóa XIV đã bầu Tổng Bí thư <strong>"Nguyễn Phú Trọng"</strong> giữ chức vụ <strong>"Chủ tịch nước Cộng hòa XHCN Việt Nam"</strong> nhiệm kỳ 2016-2021 (thực hiện mô hình Tổng Bí thư kiêm Chủ tịch nước).
              </p>
            </div>
          </div>

          {/* Sơ đồ Timeline các Hội nghị TW khóa XII */}
          <div className="space-y-4">
            {conferencesXII.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelectedConference(selectedConference === c.id ? null : c.id)}
                className={`cursor-pointer p-5 rounded-2xl border-2 shadow-sm transition-all duration-300 ${c.color}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 text-xs font-bold shadow-sm border border-current">
                    {c.time}
                  </span>
                  <h4 className="text-base font-extrabold flex-1 min-w-[200px]">{c.title}</h4>
                </div>
                <div className="space-y-1.5 text-xs md:text-sm leading-relaxed mt-2">
                  {c.content.map((p, pIdx) => (
                    <p key={pIdx} className="opacity-95">• {p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: SO SÁNH ĐẠI HỘI XI VS XII */}
      {activeTab === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 text-amber-900 dark:text-amber-200 text-sm font-medium">
            📊 <strong>BẢNG SO SÁNH BỔ SUNG: ĐẠI HỘI XI VÀ ĐẠI HỘI XII</strong>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-amber-300 dark:border-amber-800 shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-red-700 to-amber-600 text-white text-xs md:text-sm font-bold">
                  <th className="p-3 md:p-4 border-b border-amber-500">Tiêu Chí Đối Chiếu</th>
                  <th className="p-3 md:p-4 border-b border-amber-500">Đại Hội XI (2011)</th>
                  <th className="p-3 md:p-4 border-b border-amber-500">Đại Hội XII (2016)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200 dark:divide-amber-900/50 bg-white dark:bg-slate-800 text-xs md:text-sm text-slate-800 dark:text-slate-200">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-amber-50/30 dark:bg-slate-800/50" : ""}>
                    <td className="p-3 md:p-4 font-bold text-red-900 dark:text-red-300">{row.criteria}</td>
                    <td className="p-3 md:p-4">{row.congress11}</td>
                    <td className="p-3 md:p-4 font-semibold text-amber-800 dark:text-amber-300">{row.congress12}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: ĐÁNH GIÁ THÀNH TỰU ĐỔI MỚI */}
      {activeTab === 2 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Milestone Banner: Ra khỏi nhóm chậm phát triển */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-400 dark:border-amber-700 shadow-lg space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase">
              🏆 Tầm Vóc Lịch Sử Của Công Cuộc Đổi Mới
            </span>
            <h3 className="text-lg md:text-xl font-bold font-serif text-slate-900 dark:text-white">
              Đất Nước Ra Khỏi Tình Trạng Chậm Phát Triển, Đạt Mức Thu Nhập Trung Bình
            </h3>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              • Kinh tế tăng trưởng khá, thực lực nền kinh tế tăng lên; <strong>kinh tế vĩ mô cơ bản ổn định</strong>; <strong>lạm phát được kiểm soát</strong>; tăng trưởng kinh tế duy trì hợp lý, thuộc <strong>nhóm nước có mức tăng trưởng khá cao trên thế giới</strong>.
              <br />
              • Đất nước đã <strong>"ra khỏi tình trạng chậm phát triển"</strong>, bước vào nhóm <strong>"nước đang phát triển có thu nhập trung bình"</strong>.
            </p>
          </div>

          {/* Ghi nhớ tổng quát */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 text-white shadow-xl space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Sparkles size={20} className="text-amber-200" />
              📌 GHI NHỚ TỔNG QUÁT PHẦN NÀY (Part 02):
            </h4>
            <ul className="space-y-2 text-xs md:text-sm leading-relaxed opacity-95">
              <li>• <strong>Cương lĩnh năm 2011:</strong> Văn kiện quan trọng nhất của Đại hội XI, bổ sung phát triển Cương lĩnh 1991 với 8 đặc trưng, 8 phương hướng, 8 mối quan hệ lớn của thời kỳ quá độ lên CNXH.</li>
              <li>• <strong>Giai đoạn 2011-2016 (Khóa XI):</strong> Nổi bật là Nghị quyết TW4 "Một số vấn đề cấp bách về xây dựng Đảng" (1-2012), thành lập Ban Chỉ đạo TW phòng chống tham nhũng, ban hành <strong>Hiến pháp 2013</strong>.</li>
              <li>• <strong>Giai đoạn 2016-2021 (Khóa XII):</strong> Nổi bật là chống <strong>"tự diễn biến"</strong>, <strong>"tự chuyển hóa"</strong> (Nghị quyết TW4, 10-2016), xác định kinh tế tư nhân là động lực quan trọng (Nghị quyết TW5, 5-2017), Chiến lược biển đến 2045 (Nghị quyết TW8, 10-2018), và sự kiện Tổng Bí thư kiêm Chủ tịch nước (23-10-2018).</li>
              <li>• <strong>Xuyên suốt cả 2 kỳ đại hội:</strong> Mục tiêu <strong>"dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong>, đẩy mạnh CNH-HĐH, hoàn thiện kinh tế thị trường định hướng XHCN, chủ động hội nhập quốc tế.</li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 4: ÔN THI TRẮC NGHIỆM TRỌN BỘ */}
      {activeTab === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-red-300 dark:border-red-800 shadow-xl space-y-3">
            <h3 className="text-lg font-extrabold text-red-900 dark:text-red-300 flex items-center gap-2">
              <Star size={20} className="text-amber-500" />
              TỪ KHÓA ÔN THI TRẮC NGHIỆM ĐẠI HỘI XII & CÁC NGHỊ QUYẾT TW KHÓA XII:
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              <li>• <strong>Đại hội XII:</strong> 21-28/1/2016, TBT <strong>Nguyễn Phú Trọng</strong> (bầu lại), khẩu hiệu <strong>"Đoàn kết - Dân chủ - Kỷ cương - Đổi mới"</strong>.</li>
              <li>• <strong>1.510 đại biểu / 4,6 triệu đảng viên</strong>; BCH TW 180 chính thức + 20 dự khuyết; BCT 19 người.</li>
              <li>• Tổng kết <strong>30 năm Đổi mới</strong> (1986-2016).</li>
              <li>• 5 bài học và 6 nhiệm vụ trọng tâm nhiệm kỳ XII.</li>
              <li>• <strong>Nghị quyết TW4 khóa XII (10-2016):</strong> Chỉ rõ <strong>27 biểu hiện "tự diễn biến", "tự chuyển hóa"</strong>.</li>
              <li>• <strong>Chỉ thị 05-CT/TW (5-2016):</strong> Học tập tư tưởng, đạo đức, phong cách Hồ Chí Minh.</li>
              <li>• <strong>Nghị quyết TW5 khóa XII (5-2017):</strong> Kinh tế tư nhân là động lực quan trọng của nền kinh tế.</li>
              <li>• <strong>Nghị quyết TW8 khóa XII (10-2018):</strong> Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn 2045.</li>
              <li>• <strong>23-10-2018:</strong> Tổng Bí thư Nguyễn Phú Trọng kiêm Chủ tịch nước.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
