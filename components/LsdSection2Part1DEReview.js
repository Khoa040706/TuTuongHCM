"use client";
import React, { useState } from "react";
import { Award, RefreshCw, Search, Star } from "lucide-react";

export default function LsdSection2Part1DEReview() {
  const [activeTab, setActiveTab] = useState("flashcards"); // 'flashcards', 'keywords'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (Cương lĩnh 1991) được thông qua tại Đại hội nào?",
      a: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng (tháng 6-1991)."
    },
    {
      q: "Hiến pháp năm 1992 được Quốc hội thông qua vào tháng nào?",
      a: "Tháng 4-1992 (tại Kỳ họp thứ 11 Quốc hội khóa VIII)."
    },
    {
      q: "Việt Nam chính thức gia nhập ASEAN làm thành viên thứ 7 vào thời gian nào?",
      a: "Ngày 28-7-1995."
    },
    {
      q: "Hoa Kỳ chính thức tuyên bố bình thường hóa quan hệ ngoại giao với Việt Nam vào thời gian nào?",
      a: "Ngày 11-7-1995 (dưới thời Tổng thống Bill Clinton)."
    }
  ];

  const keywords = [
    { title: "Đại hội VII (6-1991)", desc: "Thông qua Cương lĩnh 1991, bầu Đỗ Mười làm Tổng Bí thư", cat: "Đại hội" },
    { title: "Cương lĩnh 1991", desc: "5 bài học lớn, 6 đặc trưng CNXH, 7 phương hướng xây dựng đất nước", cat: "Văn kiện" },
    { title: "Hiến pháp 1992", desc: "Hiến pháp Đổi mới, thể chế hóa Nhà nước pháp quyền XHCN", cat: "Hiến pháp" },
    { title: "28-7-1995", desc: "Việt Nam chính thức gia nhập ASEAN (thành viên thứ 7)", cat: "Đối ngoại" },
    { title: "11-7-1995", desc: "Bình thường hóa quan hệ ngoại giao Việt Nam - Hoa Kỳ", cat: "Đối ngoại" },
    { title: "Hội nghị giữa khóa 1-1994", desc: "Xác định 4 nguy cơ thách thức (tụt hậu, chệch hướng, tham nhũng, diễn biến hòa bình)", cat: "Hội nghị" }
  ];

  const filteredKeywords = keywords.filter(
    (k) =>
      k.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-6 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tổng ôn trọn bộ Mục II.1 d/e (1991-1996)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hub Ôn Tập Trắc Nghiệm Toàn Phần II.1 d/e (1991 - 1996)
        </h3>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "flashcards" ? "bg-amber-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Thẻ lật 3D Flashcard
        </button>
        <button
          onClick={() => setActiveTab("keywords")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "keywords" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Bảng từ khóa bẫy thi
        </button>
      </div>

      {/* Tab 1: Flashcards */}
      {activeTab === "flashcards" && (
        <div className="max-w-xl mx-auto">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[200px] cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 p-6 shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-bold">
              <span>Thẻ {cardIndex + 1} / {flashcards.length}</span>
              <span className="flex items-center gap-1"><RefreshCw size={13} /> Chạm lật mặt 3D</span>
            </div>

            <div className="my-auto text-center py-4">
              {!isFlipped ? (
                <h4 className="text-base md:text-lg font-bold font-serif text-slate-900 dark:text-white">{flashcards[cardIndex].q}</h4>
              ) : (
                <p className="text-sm md:text-base font-semibold text-emerald-800 dark:text-emerald-300 font-sans">{flashcards[cardIndex].a}</p>
              )}
            </div>

            <div className="text-center text-xs text-slate-400">
              {isFlipped ? "Đang đáp án" : "Đang câu hỏi"}
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => { setIsFlipped(false); setCardIndex((p) => (p > 0 ? p - 1 : flashcards.length - 1)); }}
              className="px-4 py-2 rounded-xl bg-slate-200 text-xs font-bold"
            >
              ← Thẻ trước
            </button>
            <button
              onClick={() => { setIsFlipped(false); setCardIndex((p) => (p < flashcards.length - 1 ? p + 1 : 0)); }}
              className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold"
            >
              Thẻ tiếp theo →
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Keywords */}
      {activeTab === "keywords" && (
        <div>
          <div className="max-w-xs mx-auto mb-6 relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Tra từ khóa 1991-1996..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKeywords.map((kw, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  {kw.cat}
                </span>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white mt-1 font-serif">{kw.title}</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{kw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
