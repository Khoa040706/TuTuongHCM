"use client";
import React, { useState } from "react";
import { Award, Calendar, BookmarkCheck, History } from "lucide-react";

export default function HcmCultureHistoryTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      year: "8/1943",
      title: "Định Nghĩa Văn Hóa Duy Nhất Theo Nghĩa Rộng",
      context: "Trong nhà tù Tưởng Giới Thạch (Quảng Tây, Trung Quốc)",
      badge: "Mốc Lịch Sử 1943",
      color: "from-amber-500 to-red-600",
      borderColor: "border-amber-500",
      quote: "Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật... Toàn bộ những sáng tạo và phát minh đó tức là văn hóa.",
      highlights: [
        "Đưa ra khi UNESCO còn chưa thành lập.",
        "Toàn quốc đang ưu tiên số 1 cho nhiệm vụ giải phóng dân tộc.",
        "Quan niệm văn hóa theo nghĩa rộng nhất: tổng hợp mọi phương thức sinh hoạt của loài người."
      ]
    },
    {
      year: "Sau 1945",
      title: "Văn Hóa Là Kiến Trúc Thượng Tầng (Nghĩa Hẹp)",
      context: "Sau khi Cách mạng Tháng Tám thành công",
      badge: "Thời Kỳ Xây Dựng Đất Nước",
      color: "from-red-600 to-rose-700",
      borderColor: "border-red-500",
      quote: "Văn hóa là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng, đi sâu vào tâm lý quốc dân và sửa đổi lười biếng, tham nhũng, phù hoa, xa xỉ.",
      highlights: [
        "Tập trung vào 3 cống hiến: Sáng tạo văn nghệ, xác lập hệ thống quan điểm văn hóa, xây dựng nền văn hóa mới.",
        "Chống giặc dốt, phát triển văn hóa, nâng cao dân trí."
      ]
    },
    {
      year: "1987",
      title: "Nghị Quyết UNESCO 24C/18.6.5 Vinh Danh Bác",
      context: "Khóa họp 24 Đại hội đồng UNESCO (20/10 - 20/11/1987)",
      badge: "Vinh Danh Quốc Tế",
      color: "from-yellow-400 to-amber-600",
      borderColor: "border-yellow-400",
      quote: "Tôn vinh Hồ Chí Minh là: Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất Việt Nam.",
      highlights: [
        "Khẳng định dấu ấn của Bác vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.",
        "Tư tưởng của Bác là sự kết tinh truyền thống văn hóa hàng ngàn năm của dân tộc Việt Nam."
      ]
    }
  ];

  const current = milestones[selectedMilestone];

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <History className="w-3.5 h-3.5" /> Dấu Mốc Lịch Sử & Định Nghĩa
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Hành Trình Quan Điểm Văn Hóa & Vinh Danh UNESCO
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            So sánh mốc định nghĩa 8/1943 và Nghị quyết UNESCO 1987
          </p>
        </div>
      </div>

      {/* Timeline Steps Selector */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 my-6 relative z-10">
        {milestones.map((m, idx) => {
          const isSelected = selectedMilestone === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedMilestone(idx)}
              className={`p-3 md:p-4 rounded-2xl border text-left transition-all cursor-pointer relative group ${
                isSelected
                  ? `bg-white border-amber-500 shadow-md scale-102 ring-2 ring-amber-400/20`
                  : "bg-white/80 border-stone-200 hover:border-stone-300 text-stone-600 hover:bg-stone-50 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-black text-amber-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {m.year}
                </span>
                {isSelected && <Award className="w-4 h-4 text-amber-600" />}
              </div>
              <h5 className="font-extrabold text-xs md:text-sm text-stone-900 truncate">
                {m.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Milestone Details Card */}
      <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-md relative z-10 animate-fadeIn">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 border border-amber-200">
            {current.badge}
          </span>
          <span className="text-stone-500 text-xs italic font-serif">
            {current.context}
          </span>
        </div>

        <h4 className="text-lg md:text-xl font-black text-stone-900 mb-3">
          {current.title}
        </h4>

        <div className="p-4 rounded-xl bg-amber-50/80 border-l-4 border-amber-500 italic text-amber-950 text-xs md:text-sm font-serif mb-4 leading-relaxed shadow-xs">
          "{current.quote}"
        </div>

        <div className="space-y-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Điểm Trọng Tâm Ôn Thi:
          </h5>
          <ul className="space-y-1.5 text-xs md:text-sm text-stone-700 font-medium">
            {current.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <BookmarkCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
