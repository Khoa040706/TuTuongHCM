"use client";
import React, { useState } from "react";
import { Users, Flame, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export default function HcmConNguoiDongLucCard() {
  const [activeQuote, setActiveQuote] = useState("y-dan");

  const quotes = [
    {
      id: "y-dan",
      title: "Ý DÂN LÀ Ý TRỜI",
      author: "Hồ Chí Minh",
      content: "Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng sức mạnh đoàn kết của nhân dân.",
      detail: "Sức mạnh nhân dân là lực lượng vô địch, là gốc rễ quyết định mọi thắng lợi của cách mạng."
    },
    {
      id: "de-tram-lan",
      title: "DỄ TRĂM LẦN KHÔNG DÂN CŨNG CHỊU",
      author: "Hồ Chí Minh (Truyền tụng nhân dân)",
      content: "Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.",
      detail: "Khẳng định bài học lấy dân làm gốc, mọi công việc dù gian khó đến đâu khi có lòng dân hưởng ứng thì nhất định hoàn thành."
    },
    {
      id: "sang-tao-lich-su",
      title: "NHÂN DÂN SÁNG TẠO RA LỊCH SỬ",
      author: "Hồ Chí Minh",
      content: "Mọi việc đều do người làm ra. Cách mạng là sự nghiệp của quần chúng.",
      detail: "Nhân dân sáng tạo ra lịch sử thông qua lao động sản xuất, đấu tranh chính trị - xã hội và sáng tạo ra các giá trị văn hóa."
    }
  ];

  const activeQuoteObj = quotes.find((q) => q.id === activeQuote);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Flame className="w-3.5 h-3.5" /> Động Lực Quyết Định
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Con Người Là ĐỘNG LỰC CỦA CÁCH MẠNG
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Trong bầu trời không gì quý bằng nhân dân - Cách mạng là sự nghiệp của quần chúng"
          </p>
        </div>
      </div>

      {/* Buttons Bar */}
      <div className="flex flex-wrap gap-2 my-6 relative z-10">
        {quotes.map((q) => (
          <button
            key={q.id}
            onClick={() => setActiveQuote(q.id)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeQuote === q.id
                ? "bg-amber-600 text-white shadow-md"
                : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            {q.title}
          </button>
        ))}
      </div>

      {/* Quote Card Display */}
      {activeQuoteObj && (
        <div className="p-6 rounded-2xl bg-white border border-amber-300 shadow-md relative z-10 animate-fadeIn mb-4">
          <h4 className="text-sm font-black text-amber-900 uppercase tracking-wider mb-2">
            {activeQuoteObj.title}
          </h4>
          <blockquote className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-stone-900 text-sm md:text-base italic font-serif leading-relaxed mb-3">
            "{activeQuoteObj.content}"
          </blockquote>
          <p className="text-stone-700 text-xs md:text-sm font-medium">
            💡 <strong>Phân tích tư tưởng:</strong> {activeQuoteObj.detail}
          </p>
        </div>
      )}
    </div>
  );
}
