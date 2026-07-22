"use client";
import React, { useState, useRef } from "react";
import { Clock, Calendar, ChevronDown, ChevronUp, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdVerticalTimeline1945To1946() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const containerRef = useRef(null);

  const events = [
    {
      date: "02-9-1945",
      title: "Pháp nổ súng tại Sài Gòn - Chợ Lớn",
      category: "Nam Bộ Kháng Chiến",
      summary: "Quân Pháp bắn vào cuộc mít tinh mừng Ngày Độc lập tại Sài Gòn - Chợ Lớn.",
      desc: "Quân Pháp nổ súng tàn sát đồng bào ta trong cuộc mít tinh mừng Ngày Độc lập tại Sài Gòn - Chợ Lớn, bộc lộ rõ âm mưu dã man quyết tâm quay lại xâm lược nước ta một lần nữa.",
      tagColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-200 border-rose-200"
    },
    {
      date: "03-9-1945",
      title: "Phiên họp đầu tiên của Chính phủ Lâm thời",
      category: "Xây Dựng Chính Quyền",
      summary: "Chủ tịch Hồ Chí Minh đề ra 6 nhiệm vụ cấp bách: Diệt giặc đói, diệt giặc dốt, diệt giặc ngoại xâm.",
      desc: "Chủ tịch Hồ Chí Minh chủ trì phiên họp đầu tiên của Chính phủ lâm thời, xác định 3 kẻ thù lớn (Giặc đói, Giặc dốt, Giặc ngoại xâm) và đề ra 6 nhiệm vụ cấp bách xây dựng đất nước.",
      tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-200 border-amber-200"
    },
    {
      date: "23-9-1945",
      title: "Thực dân Pháp nổ súng đánh chiếm Sài Gòn",
      category: "Nam Bộ Kháng Chiến",
      summary: "Kháng chiến chống Pháp lần thứ 2 của nhân dân Nam Bộ chính thức bắt đầu.",
      desc: "Rạng sáng 23-9-1945, quân Pháp được quân Anh bảo trợ đã nổ súng đánh chiếm Trụ sở Ủy ban Nhân dân Nam Bộ. Xứ ủy và UBKC Nam Bộ họp tại Thiên Hộ phát động toàn dân đứng lên kháng chiến.",
      tagColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-200 border-rose-200"
    },
    {
      date: "25-11-1945",
      title: "Ban Chấp hành TW Đảng ra Chỉ thị 'Kháng chiến kiến quốc'",
      category: "Cương Lĩnh Lãnh Đạo",
      summary: "Khẩu hiệu: 'Dân tộc trên hết, Tổ quốc trên hết'; Vừa kháng chiến vừa kiến quốc.",
      desc: "Xác định kẻ thù chính là thực dân Pháp xâm lược; Khẩu hiệu: 'Dân tộc trên hết, Tổ quốc trên hết'. Nhiệm vụ: Củng cố chính quyền, chống Pháp xâm lược ở Nam Bộ, bài trừ nội phản, cải thiện đời sống nhân dân.",
      tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-200 border-emerald-200"
    },
    {
      date: "06-01-1946",
      title: "Tổng tuyển cử bầu Quốc hội khóa I toàn quốc",
      category: "Củng Cố Chính Quyền",
      summary: "Hơn 89% cử tri cả nước đi bỏ phiếu bầu ra 333 đại biểu Quốc hội.",
      desc: "Hơn 89% cử tri cả nước bất chấp bom đạn và hăm dọa của kẻ thù hăng hái đi bầu cử, chọn ra 333 đại biểu Quốc hội khóa I. Đây là mốc lịch sử khẳng định tính hợp pháp của Nhà nước VNDCCH.",
      tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-200 border-blue-200"
    },
    {
      date: "28-02-1946",
      title: "Ký Hiệp ước Trùng Khánh (Hoa - Pháp)",
      category: "Ngoại Giao Phức Tạp",
      summary: "Pháp nhượng quyền lợi cho Tưởng Giới Thạch để đổi lấy quyền đưa 15.000 quân ra Bắc thay Tưởng.",
      desc: "Pháp thỏa thuận nhượng lại các quyền lợi kinh tế - thương mại ở Trung Quốc cho Tưởng Giới Thạch để được ra Bắc Việt Nam thay 20 vạn quân Tưởng giải giáp quân Nhật. Việt Nam đứng trước nguy cơ bị 2 kẻ thù bắt tay tiêu diệt.",
      tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-200 border-purple-200"
    },
    {
      date: "06-03-1946",
      title: "Chủ tịch Hồ Chí Minh ký Hiệp định Sơ bộ",
      category: "Ngoại Giao Đỉnh Cao",
      summary: "Pháp công nhận Việt Nam là 'quốc gia tự do'; Đuổi 20 vạn quân Tưởng về nước.",
      desc: "Chủ tịch Hồ Chí Minh ký Hiệp định Sơ bộ với Jean Sainteny tại Hà Nội. Pháp công nhận Việt Nam là 'Quốc gia tự do' có chính phủ, nghị viện, quân đội riêng. Ta chấp nhận 15.000 quân Pháp ra Bắc thay Tưởng và rút dần trong 5 năm. Mục đích cốt lõi: Tránh cùng lúc đánh 2 thù, đuổi 20 vạn quân Tưởng về nước.",
      tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-200 border-amber-200"
    },
    {
      date: "09-03-1946",
      title: "Chỉ thị 'Hòa để tiến' của Thường vụ TW Đảng",
      category: "Chỉ Đạo Sách Lược",
      summary: "Xem việc ký Hiệp định Sơ bộ là bước lùi chiến lược để chuẩn bị kháng chiến lâu dài.",
      desc: "Thường vụ TW Đảng giải thích rõ cho toàn Đảng, toàn dân hiểu việc ký Hiệp định Sơ bộ là một sách lược nhân nhượng có nguyên tắc, nhằm tranh thủ thời gian hòa bình củng cố lực lượng chuẩn bị cho cuộc kháng chiến toàn quốc tất yếu xảy ra.",
      tagColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-200 border-indigo-200"
    },
    {
      date: "12-07-1946",
      title: "Phá vụ án số 7 phố Ôn Như Hầu (Hà Nội)",
      category: "Bảo Vệ Chính Quyền",
      summary: "Công an đập tan âm mưu đảo chính của Đại Việt - Việt Nam Quốc dân Đảng.",
      desc: "Lực lượng Công an tấn công sào huyệt số 7 phố Ôn Như Hầu (Hà Nội), đập tan âm mưu đảo chính lật đổ Chính phủ do Đại Việt và Việt Quốc cấu kết với quân Pháp tiến hành.",
      tagColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-200 border-rose-200"
    },
    {
      date: "14-09-1946",
      title: "Chủ tịch Hồ Chí Minh ký Tạm ước 14-9",
      category: "Ngoại Giao Đỉnh Cao",
      summary: "Ký tại Marseille, kéo dài thời gian hòa hoãn thêm vài tháng quý báu.",
      desc: "Trước khi rời Pháp về nước, Chủ tịch Hồ Chí Minh ký Tạm ước 14-9 với Marius Moutet tại Marseille, nhân nhượng thêm cho Pháp một số quyền lợi kinh tế, văn hóa để tranh thủ thêm thời gian hòa bình chuẩn bị lực lượng.",
      tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-200 border-amber-200"
    },
    {
      date: "09-11-1946",
      title: "Quốc hội thông qua Hiến pháp năm 1946",
      category: "Xây Dựng Pháp Luật",
      summary: "Bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
      desc: "Quốc hội khóa I (kỳ họp thứ 2) thông qua Hiến pháp năm 1946 - bản Hiến pháp dân chủ đầu tiên của Nhà nước ta, khẳng định độc lập dân tộc và quyền tự do dân chủ của mọi công dân.",
      tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-200 border-emerald-200"
    }
  ];

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
      });
    }
  }, { scope: containerRef });

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl"
    >
      {/* Light Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-amber-200 dark:border-amber-900/60 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300/80">
            <Clock size={14} className="text-amber-600" /> Dòng thời gian lịch sử 1945 - 1946
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
            Tiến Trình Sự Kiện Bản Lề (1945 - 1946)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Nhấp vào từng mốc thời gian bên dưới để mở rộng chi tiết bài học ngay tại chỗ.
          </p>
        </div>
        <div className="text-xs text-amber-900 dark:text-amber-200 bg-amber-100/80 dark:bg-amber-950/60 px-3.5 py-2 rounded-xl border border-amber-300 dark:border-amber-800 shrink-0 font-medium">
          💡 Nhấp vào thẻ để mở rộng nội dung
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-amber-400/80 dark:border-amber-600/60 space-y-6 my-6">
        {events.map((ev, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="timeline-item relative">
              {/* Timeline Dot */}
              <div
                onClick={() => toggleExpand(index)}
                className={`absolute -left-[31px] md:-left-[39px] top-4 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-md cursor-pointer transition-all duration-300 ${
                  isExpanded ? "bg-amber-600 scale-125 ring-4 ring-amber-200 dark:ring-amber-900" : "bg-amber-500 hover:bg-amber-600 hover:scale-110"
                }`}
              />

              {/* Event Light Card */}
              <div
                onClick={() => toggleExpand(index)}
                className={`rounded-2xl border transition-all duration-300 cursor-pointer p-4 md:p-5 shadow-sm hover:shadow-md ${
                  isExpanded
                    ? "bg-white dark:bg-slate-900 border-amber-400 dark:border-amber-600 ring-2 ring-amber-400/30"
                    : "bg-white/90 dark:bg-slate-900/90 border-amber-200/80 dark:border-slate-800 hover:border-amber-300"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-300/60">
                    <Calendar size={13} className="text-amber-600" /> {ev.date}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${ev.tagColor}`}>
                    {ev.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white font-serif leading-snug">
                    {ev.title}
                  </h4>
                  <div className="text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {ev.summary}
                </p>

                {/* Inline Expansion Area (No Jump, No Modal!) */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-amber-100 dark:border-slate-800 space-y-3 animate-fadeIn">
                    <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      <strong className="text-amber-900 dark:text-amber-300 font-serif block mb-1">Bối cảnh & Ý nghĩa chi tiết:</strong>
                      {ev.desc}
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(null);
                        }}
                        className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 font-semibold px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 transition-colors"
                      >
                        Thu gọn ▲
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
