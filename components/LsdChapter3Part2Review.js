"use client";
import React, { useState } from "react";
import { Award, RefreshCw, Search, Star } from "lucide-react";

export default function LsdChapter3Part2Review() {
  const [activeTab, setActiveTab] = useState("flashcards"); // 'flashcards', 'keywords'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Đại hội V của Đảng (3-1982) đề ra chủ trương thay đổi bước ngoặt gì về ưu tiên kinh tế?",
      a: "Coi 'Nông nghiệp là mặt trận hàng đầu', đẩy mạnh công nghiệp hàng tiêu dùng và xuất khẩu."
    },
    {
      q: "Nghị quyết Hội nghị Trung ương 8 khóa V (6-1985) được coi là bước đột phá thứ mấy trong đổi mới kinh tế?",
      a: "Là bước đột phá thứ hai (về Giá - Lương - Tiền), chủ trương dứt khoát xóa bỏ cơ chế bao cấp."
    },
    {
      q: "Kết luận của Bộ Chính trị khóa V (tháng 8-1986) đề ra 3 chương trình kinh tế lớn nào?",
      a: "Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu."
    },
    {
      q: "Khái niệm lý luận quan trọng nào về thời kỳ quá độ được Đại hội V (1982) bổ sung?",
      a: "Nước ta đang ở 'Chặng đường đầu tiên của thời kỳ quá độ lên CNXH'."
    }
  ];

  const keywords = [
    { title: "Nông nghiệp hàng đầu", desc: "Ưu tiên kinh tế hàng đầu được Đại hội V (3-1982) khẳng định", cat: "Đại hội V" },
    { title: "Chặng đường đầu tiên", desc: "Khái niệm Đại hội V bổ sung về thời kỳ quá độ lên CNXH", cat: "Lý luận" },
    { title: "Hội nghị TW 8 (6-1985)", desc: "Bước đột phá thứ hai về Giá - Lương - Tiền, xóa bỏ cơ chế bao cấp", cat: "Đột phá 2" },
    { title: "Kết luận Bộ Chính trị (8-1986)", desc: "Bước đột phá thứ ba về 3 quan điểm kinh tế lớn (dọn đường cho Đại hội VI)", cat: "Đột phá 3" },
    { title: "3 chương trình kinh tế", desc: "Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu", cat: "Kinh tế" },
    { title: "Kinh tế nhiều thành phần", desc: "Lần đầu tiên được thừa nhận chính thức tại Kết luận Bộ Chính trị 8-1986", cat: "Quan điểm" }
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
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tổng ôn trọn bộ Mục I.2 (1982-1986)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hub Ôn Tập Trắc Nghiệm Toàn Phần 2 (1982 - 1986)
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
              placeholder="Tra từ khóa 1982-1986..."
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
