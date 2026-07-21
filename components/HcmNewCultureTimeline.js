"use client";
import React, { useState } from "react";
import { History, Calendar, CheckCircle2, BookmarkCheck, Award } from "lucide-react";

export default function HcmNewCultureTimeline() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const periods = [
    {
      year: "Trước 1945 (8/1943)",
      title: "5 Nội Dung Xây Dựng Văn Hóa Dân Tộc",
      context: "Trong nhà tù Tưởng Giới Thạch",
      badge: "Giai Đoạn Tiền Cách Mạng",
      quote: "Hồ Chí Minh quan tâm xây dựng nền văn hóa dân tộc với 5 nội dung cốt lõi.",
      items: [
        "1. Xây dựng tâm lý: Tinh thần độc lập tự cường.",
        "2. Xây dựng luân lý: Biết hy sinh mình, làm lợi cho quần chúng.",
        "3. Xây dựng xã hội: Mọi sự nghiệp liên quan đến phúc lợi của nhân dân.",
        "4. Xây dựng chính trị: Dân quyền.",
        "5. Xây dựng kinh tế."
      ]
    },
    {
      year: "Kháng Chiến Chống Pháp",
      title: "Phương Châm Nền Văn Hóa Mới (Đề Cương 1943)",
      context: "Đề cương văn hóa Việt Nam năm 1943",
      badge: "Dân Tộc - Khoa Học - Đại Chúng",
      quote: "Khẳng định nền văn hóa có 3 tính chất cốt lõi.",
      items: [
        "Tính Dân tộc: Đứng trên lập trường dân tộc, giữ gìn cốt cách truyền thống.",
        "Tính Khoa học: Chống mê tín dị đoan, hướng tới tri thức tiến bộ.",
        "Tính Đại chúng: Phục vụ quần chúng nhân dân rộng rãi."
      ]
    },
    {
      year: "Thời Kỳ Xây Dựng XHCN",
      title: "Nội Dung XHCN & Tính Chất Dân Tộc",
      context: "Miền Bắc quá độ lên Chủ nghĩa Xã hội",
      badge: "Thời Kỳ Xã Hội Chủ Nghĩa",
      quote: "Chủ trương xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
      items: [
        "Nội dung Xã hội chủ nghĩa: Thấm nhuần tư tưởng Mác-Lênin, vì hạnh phúc nhân dân.",
        "Tính chất Dân tộc: Kế thừa và phát huy giá trị truyền thống bền vững.",
        "Toàn diện - Tiến bộ - Nhân văn: Bảo đảm con người phát triển trọn vẹn."
      ]
    }
  ];

  const current = periods[selectedPeriod];

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <History className="w-3.5 h-3.5" /> Dynamic Timeline
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Tiến Trình Quan Điểm Xây Dựng Nền Văn Hóa Mới
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Từ 5 nội dung xây dựng năm 1943 đến nền văn hóa Dân tộc - Khoa học - Đại chúng
          </p>
        </div>
      </div>

      {/* Timeline Periods Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6 relative z-10">
        {periods.map((p, idx) => {
          const isSelected = selectedPeriod === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedPeriod(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? "bg-white border-emerald-500 shadow-md scale-102 ring-2 ring-emerald-400/20"
                  : "bg-white/80 border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-black text-emerald-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {p.year}
                </span>
                {isSelected && <Award className="w-4 h-4 text-emerald-600" />}
              </div>
              <h5 className="font-extrabold text-xs md:text-sm text-stone-900 truncate">
                {p.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Selected Period Details Card */}
      <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-md relative z-10 animate-fadeIn">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
            {current.badge}
          </span>
          <span className="text-stone-500 text-xs italic font-serif">
            {current.context}
          </span>
        </div>

        <h4 className="text-lg md:text-xl font-black text-stone-900 mb-2">
          {current.title}
        </h4>

        <div className="p-3.5 rounded-xl bg-emerald-50/70 border-l-4 border-emerald-500 italic text-emerald-950 text-xs md:text-sm font-serif mb-4">
          "{current.quote}"
        </div>

        <div className="space-y-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Nội dung chi tiết trọng tâm:
          </h5>
          <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
            {current.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
