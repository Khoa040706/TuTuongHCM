"use client";
import React, { useState } from "react";
import { BookOpen, Sparkles, HeartHandshake, ShieldCheck, Star } from "lucide-react";

export default function HcmFiveMoralityLessonsVisualizer() {
  const [activeLesson, setActiveLesson] = useState(1);

  const lessons = [
    {
      id: 1,
      title: "1. Trung với nước, hiếu với dân",
      quote: "\"Một ngày mà Tổ quốc chưa thống nhất, đồng bào còn chịu khổ, là một ngày tôi ăn không ngon, ngủ không yên.\"",
      detail: "Hiến dâng trọn đời cho cách mạng. Bác trả lời báo Gramma (Cuba, 7/1969): 'Tôi hiến cả đời tôi cho dân tộc tôi... mỗi người, mỗi gia đình đều có một nỗi đau khổ riêng và gộp cả những nỗi đau khổ riêng ấy lại thì thành nỗi đau khổ của tôi.'"
    },
    {
      id: 2,
      title: "2. Cần kiệm liêm chính, khiêm tốn",
      quote: "\"Khiêm tốn là một đạo đức mà mọi người cách mạng phải luôn luôn trau dồi.\"",
      detail: "Cần kiệm liêm chính, chí công vô tư, ít lòng ham muốn vật chất. Thứ tự ưu tiên trách nhiệm: Tổ quốc ➔ Đảng ➔ Nhân dân ➔ Bản thân ➔ Gia đình."
    },
    {
      id: 3,
      title: "3. Đức tin vào sức mạnh nhân dân",
      quote: "\"Việc gì có lợi cho dân dù nhỏ cũng phải hết sức làm, việc gì có hại cho dân dù nhỏ cũng phải hết sức tránh.\"",
      detail: "Tự xem là 'công bộc của nhân dân'. Minh chứng thực tiễn: Chủ trương nhịn ăn ba bữa góp gạo cứu đói (1945); Nhường áo khoác cho tên quan ba thầy thuốc Pháp bị rét trong Chiến dịch Biên giới."
    },
    {
      id: 4,
      title: "4. Ý chí, nghị lực vượt qua thử thách",
      quote: "\"Muốn nên sự nghiệp lớn / Tinh thần phải cao\"",
      detail: "Bình tĩnh, kiên cường, chủ động vượt qua thử thách gian nguy, kiên trì mục đích cuộc sống, bảo vệ chân lý và quan điểm cách mạng."
    },
    {
      id: 5,
      title: "5. Yêu nước kết hợp quốc tế vô sản",
      quote: "\"Làm chủ đất nước, đoàn kết nhất trí, làm tròn nghĩa vụ vì độc lập tự do của Tổ quốc và hạnh phúc nhân dân.\"",
      detail: "Kết hợp chủ nghĩa yêu nước chân chính với tinh thần quốc tế trong sáng, góp phần vào sự nghiệp cách mạng chung của nhân dân thế giới."
    }
  ];

  const activeObj = lessons.find((l) => l.id === activeLesson);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <BookOpen className="w-3.5 h-3.5" /> 5 Nội Dung Học Tập
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            5 Nội Dung Học Tập Đạo Đức Cách Mạng Hồ Chí Minh
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Trau dồi đạo đức cách mạng & Các câu chuyện tư liệu lịch sử sâu sắc
          </p>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-6 relative z-10">
        {lessons.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveLesson(l.id)}
            className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer flex flex-col gap-1 ${
              activeLesson === l.id
                ? "bg-amber-600 text-white border-amber-600 shadow-md scale-102"
                : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            <span className="text-[10px] opacity-80 uppercase font-black">Nội dung {l.id}</span>
            <span className="line-clamp-1">{l.title.replace(`${l.id}. `, "")}</span>
          </button>
        ))}
      </div>

      {/* Active Lesson Card */}
      {activeObj && (
        <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-md relative z-10 animate-fadeIn">
          <h4 className="text-base font-black text-amber-900 mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> {activeObj.title}
          </h4>
          <blockquote className="p-3.5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-stone-900 text-xs md:text-sm italic font-serif leading-relaxed mb-3">
            {activeObj.quote}
          </blockquote>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
            {activeObj.detail}
          </p>
        </div>
      )}
    </div>
  );
}
