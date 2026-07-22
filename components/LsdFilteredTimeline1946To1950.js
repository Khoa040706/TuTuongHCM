"use client";
import React, { useState } from "react";
import { Calendar, Filter, Shield, Globe, Landmark, Clock, ChevronRight, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function LsdFilteredTimeline1946To1950() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const years = [
    { id: "all", label: "Tất cả mốc năm" },
    { id: "1946", label: "Năm 1946" },
    { id: "1947", label: "Năm 1947" },
    { id: "1948", label: "Năm 1948" },
    { id: "1949", label: "Năm 1949" },
    { id: "1950", label: "Năm 1950" }
  ];

  const timelineEvents = [
    {
      year: "1946",
      date: "12-12-1946",
      title: "Chỉ thị 'Toàn dân kháng chiến' của Trung ương Đảng",
      category: "party",
      categoryLabel: "Xây dựng Đảng & Cương lĩnh",
      summary: "Dự đoán chiến tranh toàn quốc bùng nổ, định hướng phương châm kháng chiến toàn dân, toàn diện, lâu dài.",
      details: "Chỉ thị nhận định khả năng hòa hoãn giữa ta và Pháp không còn. Đảng đề ra đường lối kháng chiến toàn dân (mỗi người dân là một chiến sĩ), toàn diện (quân sự, chính trị, kinh tế, văn hóa), lâu dài và dựa vào sức mình là chính.",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-200 border-blue-200"
    },
    {
      year: "1946",
      date: "19-12-1946",
      title: "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh",
      category: "party",
      categoryLabel: "Xây dựng Đảng & Cương lĩnh",
      summary: "'Thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ'. Bắt đầu 60 ngày đêm chiến đấu tại Hà Nội.",
      details: "Đêm 19-12-1946, Chủ tịch Hồ Chí Minh phát động Lời kêu gọi Toàn quốc kháng chiến. Quân và dân Hà Nội giam chân Pháp 60 ngày đêm, bảo vệ an toàn cơ quan đầu não Trung ương rút lên chiến khu Việt Bắc.",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-200 border-blue-200"
    },
    {
      year: "1947",
      date: "06-4-1947",
      title: "Hội nghị cán bộ Trung ương Đảng (mở rộng)",
      category: "party",
      categoryLabel: "Xây dựng Đảng & Cương lĩnh",
      summary: "Mở rộng mặt trận dân tộc thống nhất, phát động chiến tranh du kích, phát triển đợt đảng viên 'Lớp tháng Tám'.",
      details: "Hội nghị mở rộng Mặt trận Việt Minh và Hội Liên Việt, đẩy mạnh chiến tranh du kích sau lưng địch, chú trọng công tác xây dựng Đảng và củng cố lực lượng vũ trang nhân dân.",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-200 border-blue-200"
    },
    {
      year: "1947",
      date: "Thu Đông 1947",
      title: "Chiến dịch phản công Việt Bắc Thu Đông (75 ngày đêm)",
      category: "military",
      categoryLabel: "Quân sự & Chiến dịch",
      summary: "Đánh bại 15.000 quân Pháp tấn công lên Việt Bắc, bẻ gãy 3 mũi tấn công, bảo vệ an toàn cơ quan đầu não ATK.",
      details: "Pháp huy động 15.000 quân với chiến lược 'Đánh nhanh thắng nhanh'. Quân và dân ta anh dũng chiến đấu tiêu diệt hơn 6.000 tên địch, bẻ gãy 3 mũi tấn công (Dù, Bộ, Thủy), bảo vệ vững chắc căn cứ địa ATK.",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-200 border-rose-200"
    },
    {
      year: "1948",
      date: "11-6-1948",
      title: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi Thi đua ái quốc",
      category: "party",
      categoryLabel: "Xây dựng Đảng & Cương lĩnh",
      summary: "Phát động phong trào thi đua lao động, tăng gia sản xuất và giết giặc lập công trên toàn quốc.",
      details: "Lời kêu gọi Thi đua ái quốc biến tinh thần yêu nước thành sức mạnh vật chất và tinh thần to lớn, dấy lên phong trào thi đua diệt giặc đói, diệt giặc dốt, diệt giặc ngoại xâm khắp Bắc - Trung - Nam.",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-200 border-blue-200"
    },
    {
      year: "1949",
      date: "01-10-1949",
      title: "Nước Cộng hòa Nhân dân Trung Hoa ra đời",
      category: "diplomacy",
      categoryLabel: "Ngoại giao & Quốc tế",
      summary: "Biến chuyển cách mạng thế giới vô cùng có lợi, nối liền Việt Nam với hậu phương XHCN rộng lớn.",
      details: "Thắng lợi của Cách mạng Trung Quốc làm thay đổi cục diện địa - chính trị khu vực. Việt Nam không còn bị bao vây cô lập, nối liền hành lang viện trợ quốc tế với Liên Xô và các nước XHCN.",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-200 border-amber-200"
    },
    {
      year: "1950",
      date: "Đầu 1950",
      title: "Các nước XHCN công nhận & đặt quan hệ ngoại giao với VNDCCH",
      category: "diplomacy",
      categoryLabel: "Ngoại giao & Quốc tế",
      summary: "Trung Quốc (18-1), Liên Xô (30-1), các nước Đông Âu, Triều Tiên (2-1950) công nhận vị thế pháp lý của Việt Nam.",
      details: "Lần đầu tiên nước Việt Nam Dân chủ Cộng hòa thiết lập quan hệ ngoại giao chính thức với các cường quốc và các nước XHCN, nâng cao uy tín quốc tế của Chính phủ Hồ Chí Minh.",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-200 border-amber-200"
    },
    {
      year: "1950",
      date: "09-1-1950",
      title: "Phong trào sinh viên Sài Gòn & Anh hùng Trần Văn Ơn",
      category: "military",
      categoryLabel: "Quân sự & Đấu tranh đô thị",
      summary: "3.000 học sinh, sinh viên Sài Gòn biểu tình; anh hùng Trần Văn Ơn hy sinh (Ngày Truyền thống HSSV).",
      details: "Phong trào đấu tranh bùng nổ mạnh mẽ tại vùng địch tạm chiếm. Ngày 09/01 hàng năm chính thức trở thành Ngày Truyền thống Học sinh, Sinh viên Việt Nam.",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-200 border-rose-200"
    },
    {
      year: "1950",
      date: "Thu Đông 1950",
      title: "Chiến dịch Biên giới Thu Đông 1950 (30 ngày đêm)",
      category: "military",
      categoryLabel: "Quân sự & Chiến dịch",
      summary: "Chiến dịch tiến công lớn đầu tiên ta chủ động mở. Bác Hồ trực tiếp ra mặt trận thị sát chỉ đạo.",
      details: "Giải phóng dải biên giới Việt - Trung dài 750km với 35 vạn dân, khai thông con đường liên lạc quốc tế. Cuộc kháng chiến chính thức chuyển từ thế phòng ngự sang thế chủ động tiến công.",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-200 border-rose-200"
    }
  ];

  const filteredEvents = timelineEvents.filter((ev) => {
    const matchYear = selectedYear === "all" || ev.year === selectedYear;
    const matchCategory = activeFilter === "all" || ev.category === activeFilter;
    return matchYear && matchCategory;
  });

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-amber-200 dark:border-amber-900/60 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Sparkles size={14} className="text-amber-600" /> Thanh tiến trình mốc năm tương tác
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
            Tiến Trình Sự Kiện Lịch Sử (1946 - 1950)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Chọn mốc năm trên thanh ngang bên dưới để xem ngay sự kiện trọng tâm mà không cần cuộn trang dài.
          </p>
        </div>
      </div>

      {/* 1. Horizontal Year Stepper Bar */}
      <div className="mb-6 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-amber-200 dark:border-slate-800 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between min-w-[500px] gap-2">
          {years.map((y) => {
            const isSelected = selectedYear === y.id;
            return (
              <button
                key={y.id}
                onClick={() => {
                  setSelectedYear(y.id);
                  setExpandedIndex(null);
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  isSelected
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 ring-2 ring-amber-400/50"
                    : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800"
                }`}
              >
                <Clock size={14} className={isSelected ? "text-amber-200" : "text-amber-600"} />
                {y.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5 mr-1">
          <Filter size={13} /> Chủ đề:
        </span>
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
            activeFilter === "all" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Tất cả chủ đề
        </button>
        <button
          onClick={() => setActiveFilter("military")}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
            activeFilter === "military" ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300"
          }`}
        >
          <Shield size={12} /> Quân sự & Chiến dịch
        </button>
        <button
          onClick={() => setActiveFilter("diplomacy")}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
            activeFilter === "diplomacy" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300"
          }`}
        >
          <Globe size={12} /> Ngoại giao & Quốc tế
        </button>
        <button
          onClick={() => setActiveFilter("party")}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
            activeFilter === "party" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300"
          }`}
        >
          <Landmark size={12} /> Xây dựng Đảng & Cương lĩnh
        </button>
      </div>

      {/* 3. Event Cards Grid Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredEvents.map((ev, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md bg-white dark:bg-slate-900 ${
                isExpanded
                  ? "border-amber-500 ring-2 ring-amber-400/30"
                  : "border-amber-200/80 dark:border-slate-800 hover:border-amber-300"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-300/60">
                  <Calendar size={12} className="inline mr-1 text-amber-600" /> {ev.date}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${ev.badgeColor}`}>
                  {ev.categoryLabel}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-serif leading-snug">
                  {ev.title}
                </h4>
                <div className="text-amber-600 shrink-0 mt-1">
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {ev.summary}
              </p>

              {/* Expanded details */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800 space-y-2 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/70 text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                    <strong className="text-amber-900 dark:text-amber-300 font-serif block mb-1">Chi tiết sự kiện & Ý nghĩa lịch sử:</strong>
                    {ev.details}
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(null);
                      }}
                      className="text-xs text-slate-500 font-semibold hover:text-slate-800 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800"
                    >
                      Thu gọn ▲
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
