"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

export default function HcmCreativeQuestionsCard() {
  const [activeQ, setActiveQ] = useState(0);

  const questions = [
    {
      q: "1. VIẾT CHO AI?",
      target: "Đối Tượng Phục Vụ",
      color: "border-red-400 bg-red-50 text-red-900",
      answer: "Viết cho đại đa số quần chúng nhân dân (công nhân, nông dân, chiến sĩ...). Sản phẩm văn hóa nghệ thuật phải hướng tới quần chúng và phục vụ nhân dân."
    },
    {
      q: "2. MỤC ĐÍCH VIẾT?",
      target: "Mục Tiêu Cách Mạng",
      color: "border-amber-400 bg-amber-50 text-amber-900",
      answer: "Để phục vụ nhiệm vụ cách mạng, nâng cao nhận thức, giáo dục phẩm chất đạo đức, 'phò chính trừ tà', ca tụng người tốt việc tốt và phê bình thói xấu."
    },
    {
      q: "3. LẤY TÀI LIỆU Ở ĐÂU VỀ VIẾT?",
      target: "Nguồn Cội Thực Tiễn",
      color: "border-emerald-400 bg-emerald-50 text-emerald-900",
      answer: "Lấy tài liệu từ chính cuộc sống thực tiễn phong phú của quần chúng nhân dân; trong lao động sản xuất, chiến đấu và sinh hoạt hàng ngày."
    },
    {
      q: "4. CÁCH VIẾT NHƯ THẾ NÀO?",
      target: "Phương Pháp & Văn Phong",
      color: "border-blue-400 bg-blue-50 text-blue-900",
      answer: "Viết thiết thực, miêu tả cho hay, cho thật, cho hùng hồn. Tránh lối viết 'rau muống' dài dòng. Nói ít nhưng nói cho thấm thía, cho chắc chắn thì quần chúng thích hơn."
    }
  ];

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" /> Thẻ Tương Tác
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            4 Câu Hỏi Lớn Về Sáng Tác Văn Nghệ Của Bác Hồ
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Từ trong quần chúng ra. Về sâu trong quần chúng"
          </p>
        </div>
      </div>

      {/* 4 Question Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 relative z-10">
        {questions.map((item, idx) => {
          const isSelected = activeQ === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveQ(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? `${item.color} shadow-md scale-102 ring-2 ring-red-400/20`
                  : "bg-white border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-xs md:text-sm text-stone-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-amber-700" /> {item.q}
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-red-600" />}
              </div>
              <span className="text-[10px] uppercase font-bold text-stone-500">{item.target}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Question Detail Card */}
      <div className="p-5 md:p-6 rounded-2xl bg-white border border-amber-200 shadow-md relative z-10 animate-fadeIn">
        <h4 className="text-sm md:text-base font-black text-amber-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" /> Lời Căn Dặn Của Bác Hồ Cho Câu Hỏi {questions[activeQ].q}:
        </h4>
        <p className="text-stone-800 text-xs md:text-sm leading-relaxed font-medium bg-amber-50/50 p-4 rounded-xl border-l-4 border-amber-500 font-sans">
          {questions[activeQ].answer}
        </p>
      </div>
    </div>
  );
}
