"use client";
import React, { useState } from "react";
import {
  Zap, Calendar, Globe, Award, BookOpen, Sparkles,
  CheckCircle2, Target, Shield, Clock, Landmark, Users,
  Building2, Lightbulb, Compass, RotateCcw, FileText, Star,
  TrendingUp, ShieldCheck, Flag, CheckSquare
} from "lucide-react";

export default function LsdCongress11StrategyAndConferencesVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedConference, setSelectedConference] = useState(null);

  // 3 Đột phá chiến lược 2011-2020
  const strategicBreakthroughs3 = [
    {
      id: 1,
      title: "1. Thể Chế Kinh Tế Thị Trường",
      desc: "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa, trọng tâm là tạo môi trường cạnh tranh bình đẳng và cải cách hành chính.",
      icon: ScaleIcon
    },
    {
      id: 2,
      title: "2. Nguồn Nhân Lực Chất Lượng Cao",
      desc: "Phát triển nhanh nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao; đổi mới căn bản, toàn diện giáo dục quốc dân; gắn với khoa học công nghệ.",
      icon: Users
    },
    {
      id: 3,
      title: "3. Kết Cấu Hạ Tầng Đồng Bộ",
      desc: "Xây dựng hệ thống kết cấu hạ tầng đồng bộ, với một số công trình hiện đại, tập trung giao thông và hạ tầng đô thị lớn.",
      icon: Building2
    }
  ];

  // 5 Kinh nghiệm mới
  const experiences5 = [
    "1. Trong bất kỳ điều kiện nào, phải kiên trì đường lối, mục tiêu đổi mới, kiên định vận dụng sáng tạo chủ nghĩa Mác-Lênin, Tư tưởng Hồ Chí Minh, kiên định độc lập dân tộc và CNXH.",
    "2. Thực sự coi trọng chất lượng, hiệu quả tăng trưởng và phát triển bền vững.",
    "3. Kết hợp chặt chẽ giữa tăng trưởng kinh tế với tiến bộ, công bằng xã hội.",
    "4. Chăm lo củng cố, xây dựng Đảng cả về chính trị, tư tưởng, tổ chức.",
    "5. Công tác lãnh đạo, chỉ đạo phải nhạy bén, kiên quyết, sáng tạo."
  ];

  // Dòng thời gian các Hội nghị Trung ương khóa XI
  const conferencesList = [
    {
      id: "tw4",
      time: "Hội nghị TW 4 (1-2012)",
      title: "Cấp Bách Xây Dựng Đảng & Chống Tham Nhũng",
      color: "border-red-500 bg-red-50/80 dark:bg-red-950/40 text-red-900 dark:text-red-200",
      content: [
        "Xây dựng hệ thống kết cấu hạ tầng đồng bộ (1 trong 3 đột phá chiến lược).",
        "Nghị quyết 'Một số vấn đề cấp bách về xây dựng Đảng hiện nay' - 3 vấn đề cấp bách (trọng tâm là đấu tranh ngăn chặn, đẩy lùi suy thoái tư tưởng chính trị, đạo đức, lối sống của một bộ phận không nhỏ cán bộ, đảng viên).",
        "Thành lập Ban Chỉ đạo Trung ương về phòng, chống tham nhũng trực thuộc Bộ Chính trị do Tổng Bí thư làm Trưởng ban; tái lập Ban Nội chính Trung ương."
      ]
    },
    {
      id: "tw5",
      time: "Hội nghị TW 5 (5-2012)",
      title: "Chính Sách Đất Đai & An Sinh Xã Hội",
      color: "border-amber-500 bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200",
      content: [
        "Khẳng định đất đai là 'tài nguyên quốc gia vô cùng quý giá, tư liệu sản xuất đặc biệt'; 'quyền sử dụng đất là hàng hóa đặc biệt'.",
        "Ban hành Kết luận và tổng kết Nghị quyết Trung ương 7 khóa IX về đất đai.",
        "Nghị quyết một số vấn đề về chính sách xã hội giai đoạn 2012-2020."
      ]
    },
    {
      id: "tw6",
      time: "Hội nghị TW 6 (10-2012)",
      title: "Đổi Mới DNNN, Tự Phê Bình & KH-CN",
      color: "border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200",
      content: [
        "Ban hành Kết luận về tiếp tục sắp xếp, đổi mới, nâng cao hiệu quả DNNN (nòng cốt của kinh tế nhà nước).",
        "Nghiêm túc tự phê bình, nhận lỗi trước BCH TW về việc chưa ngăn chặn được tham nhũng, lãng phí.",
        "Quyết định tái lập Ban Kinh tế Trung ương và Ban Nội chính Trung ương.",
        "Nghị quyết phát triển khoa học - công nghệ phục vụ CNH-HĐH."
      ]
    },
    {
      id: "tw7",
      time: "Hội nghị TW 7 (5-2013)",
      title: "Công Tác Dân Vận Trong Tình Hình Mới",
      color: "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200",
      content: [
        "Nghị quyết tăng cường, đổi mới lãnh đạo công tác dân vận trong tình hình mới.",
        "Khẳng định: Cách mạng là sự nghiệp của nhân dân, do nhân dân, vì nhân dân; thể chế hóa cơ chế 'Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ'.",
        "Chuẩn bị cho việc ban hành Hiến pháp năm 2013."
      ]
    },
    {
      id: "hien-phap-2013",
      time: "Năm 2013",
      title: "Ban Hành Hiến Pháp Năm 2013",
      color: "border-purple-500 bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200",
      content: [
        "Quốc hội khóa XIII thông qua Hiến pháp năm 2013 - Đạo luật cơ bản thể chế hóa Cương lĩnh 2011.",
        "Khẳng định bản chất Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo."
      ]
    },
    {
      id: "tw8",
      time: "Hội nghị TW 8 (10-2013 & 11-2013)",
      title: "Bảo Vệ Tổ Quốc & Đổi Mới Căn Bản GD-ĐT",
      color: "border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200",
      content: [
        "Chiến lược bảo vệ Tổ quốc trong tình hình mới (thay thế Nghị quyết TW8 khóa IX).",
        "Nghị quyết 'Về đổi mới căn bản, toàn diện giáo dục và đào tạo' - coi giáo dục-đào tạo là quốc sách hàng đầu, sự nghiệp của Đảng, Nhà nước và toàn dân."
      ]
    },
    {
      id: "tw9",
      time: "Hội nghị TW 9 (5-2014)",
      title: "Xây Dựng Văn Hóa & Con Người Việt Nam",
      color: "border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200",
      content: [
        "Nghị quyết về xây dựng, phát triển văn hóa, con người Việt Nam đáp ứng yêu cầu phát triển bền vững đất nước.",
        "Đặc biệt nhấn mạnh: Văn hóa là nền tảng tinh thần xã hội, 'phải đặt ngang hàng với kinh tế, chính trị, xã hội'."
      ]
    }
  ];

  // Thành tựu Đối ngoại
  const diplomacyData = {
    partners15: [
      "Nga", "Trung Quốc", "Nhật Bản", "Ấn Độ", "Hàn Quốc",
      "Tây Ban Nha", "Anh", "Đức", "Italia", "Indonesia",
      "Thái Lan", "Singapore", "Pháp", "Malaysia", "Philippines"
    ],
    partners10: [
      "Nam Phi", "Chile", "Brazil", "Venezuela", "Australia",
      "New Zealand", "Argentina", "Ukraine", "Mỹ", "Đan Mạch"
    ],
    unesco: [
      "Thành nhà Hồ (2011)",
      "Khu Dự trữ sinh quyển Đồng Nai (2011)",
      "Hát Xoan Phú Thọ (2011)",
      "Tín ngưỡng thờ cúng Hùng Vương (2012)",
      "Mộc bản kinh Phật chùa Vĩnh Nghiêm (2012)"
    ]
  };

  const tabs = [
    { id: 0, title: "1. Chiến Lược 2011-2020", icon: TrendingUp },
    { id: 1, title: "2. Dòng Thời Gian Hội Nghị TW XI", icon: Calendar },
    { id: 2, title: "3. Đối Ngoại & Di Sản UNESCO", icon: Globe },
    { id: 3, title: "4. Từ Khóa Ôn Thi Trắc Nghiệm", icon: Star }
  ];

  function ScaleIcon(props) {
    return <Landmark {...props} />;
  }

  return (
    <div className="my-8 rounded-3xl border border-red-300/80 dark:border-red-900/60 bg-gradient-to-b from-red-50/40 via-white to-amber-100/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-red-950/20 p-5 md:p-8 shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/90 text-red-900 dark:text-red-200 text-xs font-bold uppercase tracking-wider mb-3 border border-red-300 dark:border-red-800 shadow-sm">
          <Flag size={14} className="text-red-600 dark:text-red-400" />
          Nhiệm Kỳ Khóa XI (2011 - 2016)
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
          Chiến Lược Phát Triển 2011–2020 & Các Hội Nghị Trung Ương Trọng Tâm
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 font-medium">
          3 Đột phá chiến lược, Sơ đồ Dòng thời gian Hội nghị TW4 ➔ TW9, Hiến pháp 2013 & Đối ngoại nâng tầm quốc tế.
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

      {/* TAB 1: CHIẾN LƯỢC 2011-2020 */}
      {activeTab === 0 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Nhấn mạnh */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-400 dark:border-amber-700">
            <h3 className="text-base font-bold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
              <Lightbulb size={18} className="text-amber-600" />
              Tư Tưởng Xuyên Suốt Chiến Lược Phát Triển 2011-2020:
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm text-slate-800 dark:text-slate-200">
              <li>• <strong>Phát triển nhanh gắn liền với phát triển bền vững</strong> là yêu cầu xuyên suốt.</li>
              <li>• Đổi mới đồng bộ, phù hợp kinh tế và chính trị vì mục tiêu <strong className="text-red-600 dark:text-red-400">"dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong>.</li>
              <li>• Mở rộng dân chủ, phát huy tối đa nhân tố con người; phát triển LLSX đồng thời hoàn thiện QHSX với KTTT định hướng XHCN.</li>
            </ul>
          </div>

          {/* 3 Đột phá chiến lược */}
          <div>
            <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Zap className="text-red-600" size={20} />
              Ba Đột Phá Chiến Lược (Chiến Lược 2011 - 2020):
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {strategicBreakthroughs3.map((sb) => {
                const Icon = sb.icon;
                return (
                  <div key={sb.id} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-900/50 shadow-md hover:border-red-400 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{sb.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{sb.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5 Kinh nghiệm mới */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-red-200 dark:border-red-900/50 shadow-md">
            <h3 className="text-base font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Award className="text-red-600" size={18} />
              5 Kinh Nghiệm Mới Rút Ra (Nhiệm Kỳ Khóa XI):
            </h3>
            <div className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              {experiences5.map((exp, idx) => (
                <p key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  {exp}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DÒNG THỜI GIAN HỘI NGHỊ TW XI */}
      {activeTab === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-950/60 border border-red-300 text-red-900 dark:text-red-200 text-sm font-medium">
            📅 <strong>Dòng thời gian các Hội nghị Trung ương khóa XI (2011 - 2016):</strong> Bấm vào từng Hội nghị để xem chi tiết các quyết sách lịch sử.
          </div>

          <div className="space-y-4">
            {conferencesList.map((c) => (
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

          {/* Kết quả kinh tế & Chỉ thị 03 */}
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-800 shadow-md">
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300 mb-2">📊 Kết Quả Kinh Tế Khóa XI</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Tiềm lực kinh tế tăng, kinh tế vĩ mô cơ bản ổn định, lạm phát được kiểm soát. <strong>GDP tăng bình quân 5,9%/năm</strong>, bình quân thu nhập đạt <strong>2.109 USD</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-800 shadow-md">
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300 mb-2">🌟 Chỉ Thị 03-CT/TW của Bộ Chính Trị</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Tiếp tục đẩy mạnh học tập và làm theo tấm gương đạo đức Hồ Chí Minh (2011-2015) theo các chủ đề: Cần, Kiệm, Liêm, Chính, chí công vô tư; phong cách quần chúng, dân chủ, nêu gương...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ĐỐI NGOẠI & DI SẢN UNESCO */}
      {activeTab === 2 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Đối tác chiến lược & Đối tác toàn diện */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 shadow-md space-y-3">
              <h3 className="text-base font-bold font-serif text-red-900 dark:text-red-300 flex items-center gap-2">
                <Globe size={18} className="text-red-600" />
                15 Đối Tác Chiến Lược (Đến 2015)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {diplomacyData.partners15.map((country, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-200 text-xs font-bold border border-red-300 dark:border-red-800">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 shadow-md space-y-3">
              <h3 className="text-base font-bold font-serif text-red-900 dark:text-red-300 flex items-center gap-2">
                <Globe size={18} className="text-red-600" />
                10 Đối Tác Toàn Diện (Đến 2015)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {diplomacyData.partners10.map((country, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 text-xs font-bold border border-amber-300 dark:border-amber-800">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Di sản UNESCO & DOC Biển Đông */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/50 shadow-md">
            <h3 className="text-base font-bold font-serif text-slate-900 dark:text-white mb-3">
              🏛️ Di Sản UNESCO & Ngoại Giao Biển Đông (2011 - 2012):
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <div className="space-y-2 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
                <h5 className="font-bold text-amber-900 dark:text-amber-300">UNESCO vinh danh di sản Việt Nam:</h5>
                <ul className="space-y-1">
                  {diplomacyData.unesco.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
                <h5 className="font-bold text-amber-900 dark:text-amber-300">Ngoại giao Biển Đông & Quy chế KTTT:</h5>
                <p>• Năm 2012: ASEAN - Trung Quốc ra Tuyên bố chung kỷ niệm 10 năm <strong>DOC</strong>; ASEAN ra Tuyên bố 6 điểm về Biển Đông.</p>
                <p>• Đến năm 2012: <strong>36 nước công nhận quy chế kinh tế thị trường</strong> của Việt Nam. Cam kết tài trợ ODA (2011) đạt 7,39 tỷ USD.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TỪ KHÓA ÔN THI TRẮC NGHIỆM */}
      {activeTab === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 text-white shadow-xl space-y-3">
            <h3 className="text-lg font-extrabold flex items-center gap-2">
              <Star size={20} className="text-amber-200" />
              TỪ KHÓA ÔN THI TRẮC NGHIỆM TRỌN BỘ KHÓA XI (MỤC d):
            </h3>
            <ul className="space-y-2 text-xs md:text-sm leading-relaxed opacity-95">
              <li>• <strong>Cương lĩnh 2011:</strong> 8 đặc trưng XHCN, 8 phương hướng, 8 mối quan hệ lớn.</li>
              <li>• <strong>3 đột phá chiến lược:</strong> Thể chế KTTT, Nguồn nhân lực chất lượng cao, Kết cấu hạ tầng đồng bộ.</li>
              <li>• <strong>Nghị quyết TW4 khóa XI (1-2012):</strong> 3 vấn đề cấp bách về xây dựng Đảng. Thành lập Ban Chỉ đạo TW về Phòng chống tham nhũng do Tổng Bí thư làm Trưởng ban; tái lập Ban Nội chính TW, Ban Kinh tế TW.</li>
              <li>• <strong>Hiến pháp năm 2013:</strong> Thể chế hóa Cương lĩnh 2011 và bản chất Nhà nước pháp quyền XHCN.</li>
              <li>• <strong>Nghị quyết TW8 (10-2013):</strong> Chiến lược bảo vệ Tổ quốc trong tình hình mới.</li>
              <li>• <strong>Nghị quyết TW8 (11-2013):</strong> Đổi mới căn bản, toàn diện giáo dục và đào tạo.</li>
              <li>• <strong>Nghị quyết TW9 (5-2014):</strong> Xây dựng, phát triển văn hóa, con người Việt Nam (đặt ngang hàng với kinh tế, chính trị, xã hội).</li>
              <li>• <strong>Đối ngoại 2015:</strong> 15 đối tác chiến lược, 10 đối tác toàn diện.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
