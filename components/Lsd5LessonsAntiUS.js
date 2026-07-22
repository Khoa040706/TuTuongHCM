"use client";
import React, { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, AlertTriangle, ShieldCheck, Star } from "lucide-react";

export default function Lsd5LessonsAntiUS() {
  const [openIndex, setOpenIndex] = useState(0);

  const lessons = [
    {
      num: "Bài học 1",
      title: "Gương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội",
      desc: "Nắm vững hai ngọn cờ độc lập dân tộc và CNXH nhằm huy động sức mạnh toàn dân đánh Mỹ, cả nước đánh Mỹ.",
      badge: "Ngọn cờ chiến lược"
    },
    {
      num: "Bài học 2",
      title: "Tìm ra phương pháp đấu tranh đúng đắn, sáng tạo",
      desc: "Thực hiện khởi nghĩa toàn dân và chiến tranh nhân dân, sử dụng **phương pháp cách mạng tổng hợp** (kết hợp quân sự, chính trị, binh vận trên cả 3 vùng chiến lược).",
      badge: "Phương pháp tổng hợp"
    },
    {
      num: "Bài học 3",
      title: "Coi trọng công tác tổ chức chiến đấu và chỉ đạo chiến lược",
      desc: "Thường xuyên đánh giá đúng tương quan lực lượng giữa ta và địch, thực hiện **giành thắng lợi từng bước** tiến lên giành thắng lợi hoàn toàn.",
      badge: "Thắng lợi từng bước"
    },
    {
      num: "Bài học 4",
      title: "Hết sức coi trọng công tác xây dựng Đảng & Hậu phương",
      desc: "Xây dựng lực lượng cách mạng ở miền Nam, tổ chức xây dựng lực lượng chiến đấu trong cả nước, xây dựng miền Bắc thành hậu phương vững chắc.",
      badge: "Xây dựng lực lượng"
    },
    {
      num: "Bài học 5",
      title: "Mở rộng đoàn kết quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại",
      desc: "Tranh thủ tối đa sự đồng tình, ủng hộ của các nước XHCN anh em (nhất là Liên Xô, Trung Quốc), của nhân dân tiến bộ thế giới và nhân dân Mỹ.",
      badge: "Đoàn kết quốc tế"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-100/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
          <BookOpen size={14} className="text-amber-600" /> Bài học lịch sử 1954 - 1975
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          5 Bài Học Kinh Nghiệm Lãnh Đạo & Hạn Chế Của Đảng
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Những bài học đúc kết từ 21 năm lãnh đạo cuộc kháng chiến chống Mỹ cứu nước.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 mb-8">
        {lessons.map((ls, idx) => (
          <div key={idx} className="rounded-xl border border-amber-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full p-4 text-left flex items-center justify-between font-bold text-sm md:text-base text-slate-900 dark:text-white font-serif hover:bg-amber-50/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-600 text-white font-serif text-xs">
                  {ls.num}
                </span>
                <span>{ls.title}</span>
              </div>
              {openIndex === idx ? <ChevronUp size={18} className="text-amber-600" /> : <ChevronDown size={18} className="text-slate-400" />}
            </button>

            {openIndex === idx && (
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-amber-50/30 dark:bg-slate-900/50 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                <p dangerouslySetInnerHTML={{ __html: ls.desc.replace(/\*\*(.*?)\*\*/g, '<strong className="text-amber-800 dark:text-amber-300 font-bold">$1</strong>') }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Limitation Card */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-900/60 shadow-md">
        <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/40 pb-3 mb-3">
          <AlertTriangle size={20} className="text-rose-600" />
          <h4 className="font-bold text-sm md:text-base text-rose-700 dark:text-rose-400 font-serif">
            Hạn Chế Trong Chỉ Đạo Giai Đoạn 1954 - 1975
          </h4>
        </div>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          • Có thời điểm đánh giá so sánh lực lượng giữa ta và địch **"chưa thật đầy đủ"** (ví dụ trong đợt 2 & 3 Tết Mậu Thân 1968). <br />
          • Còn có biểu hiện **"nóng vội, chủ quan, duy ý chí"** trong việc xây dựng CNXH ở miền Bắc.
        </p>
      </div>
    </div>
  );
}
