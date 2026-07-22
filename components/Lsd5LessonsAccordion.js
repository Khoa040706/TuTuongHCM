"use client";
import React, { useState } from "react";
import { ChevronDown, BookOpen, CheckCircle2, AlertTriangle, ShieldCheck, Flame, Compass } from "lucide-react";

export default function Lsd5LessonsAccordion() {
  const [expandedLesson, setExpandedLesson] = useState("lesson-1");

  const lessons = [
    {
      id: "lesson-1",
      number: "Bài học 1",
      title: "Đề ra đường lối đúng đắn, sáng tạo, phù hợp thực tiễn lịch sử",
      badge: "Đường lối chiến lược",
      details: [
        "Đường lối cơ bản: Kháng chiến và kiến quốc; kháng chiến toàn dân, toàn diện, tự lực cánh sinh là chính.",
        "Khơi dậy sức mạnh đại đoàn kết toàn dân tộc; kết hợp sức mạnh nội lực với tranh thủ sự ủng hộ quốc tế.",
        "Nêu cao ý chí độc lập tự chủ là nhân tố hàng đầu quyết định mọi chiến thắng."
      ]
    },
    {
      id: "lesson-2",
      number: "Bài học 2",
      title: "Kết hợp chặt chẽ, giải quyết đúng đắn mối quan hệ giữa 2 nhiệm vụ cơ bản",
      badge: "Vừa Kháng chiến vừa Kiến quốc",
      details: [
        "Vừa kháng chiến vừa kiến quốc, chống đế quốc đi đôi với chống phong kiến.",
        "Kháng chiến toàn diện (quân sự, chính trị, kinh tế, văn hóa, ngoại giao), đồng thời ưu tiên quân sự giữ vai trò mũi nhọn.",
        "Lấy dân làm gốc: xây dựng hậu phương vững chắc đi đôi với bồi dưỡng sức dân."
      ]
    },
    {
      id: "lesson-3",
      number: "Bài học 3",
      title: "Ngày càng hoàn thiện phương thức lãnh đạo, tổ chức điều hành phù hợp",
      badge: "Phương thức lãnh đạo",
      details: [
        "Loại hình chiến tranh: Chiến tranh nhân dân, toàn dân, toàn diện.",
        "Kết hợp chiến tranh chính quy của bộ đội chủ lực với chiến tranh du kích ở vùng sau lưng địch.",
        "Chỉ đạo chiến thuật linh hoạt, cơ động: 'Đánh chắc, tiến chắc, chắc thắng'."
      ]
    },
    {
      id: "lesson-4",
      number: "Bài học 4",
      title: "Xây dựng, phát triển lực lượng vũ trang 'ba thứ quân'",
      badge: "Lực lượng vũ trang",
      details: [
        "Xây dựng lực lượng vũ trang 3 thứ quân: Bộ đội chủ lực, Bộ đội địa phương, Dân quân du kích.",
        "Xây dựng thành công biểu tượng danh dự 'Bộ đội Cụ Hồ'.",
        "Xây dựng Công an nhân dân mang bản chất giai cấp công nhân, tính nhân dân sâu sắc — 'Công an là bạn dân' theo tư tưởng thân dân Hồ Chí Minh."
      ]
    },
    {
      id: "lesson-5",
      number: "Bài học 5",
      title: "Xem trọng công tác xây dựng, chỉnh đốn Đảng, nâng cao uy tín nêu gương",
      badge: "Xây dựng & Chỉnh đốn Đảng",
      details: [
        "Cán bộ, đảng viên tiên phong nêu gương, gây dựng niềm tin tuyệt đối trong quần chúng nhân dân.",
        "Khắc phục các khuynh hướng giáo điều 'tả' khuynh, hữu khuynh, chủ quan duy ý chí.",
        "Nghiêm túc tự phê bình và sửa sai (như đợt sửa sai Cải cách ruộng đất 10-1956) để củng cố uy tín với nhân dân."
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/40 via-white to-red-50/30 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Compass size={14} /> Bài học kinh nghiệm lịch sử quý báu
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          5 Bài Học Kinh Nghiệm Lãnh Đạo Kháng Chiến Của Đảng (1945 - 1954)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Nhấp vào từng bài học bên dưới để mở rộng xem phân tích chi tiết và bài học tự phê bình.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {lessons.map((ls) => {
          const isOpen = expandedLesson === ls.id;
          return (
            <div
              key={ls.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                isOpen
                  ? "border-amber-400 dark:border-amber-700 bg-white dark:bg-slate-900 shadow-md"
                  : "border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setExpandedLesson(isOpen ? "" : ls.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-amber-600 text-white font-bold text-xs font-serif shrink-0">
                    {ls.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white font-serif">
                      {ls.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                      {ls.badge}
                    </span>
                  </div>
                </div>

                <div className={`p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-transform ${isOpen ? "rotate-180 bg-amber-100 text-amber-800" : ""}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                  {ls.details.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-amber-50/50 dark:bg-amber-950/20 p-3 rounded-xl border border-amber-100 dark:border-amber-900/40">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
