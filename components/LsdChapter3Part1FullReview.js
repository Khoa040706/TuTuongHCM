"use client";
import React, { useState } from "react";
import { Award, RefreshCw, Search, Star } from "lucide-react";

export default function LsdChapter3Part1FullReview() {
  const [activeTab, setActiveTab] = useState("flashcards"); // 'flashcards', 'keywords'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Nghị quyết Trung ương nào (tháng 8-1979) được coi là 'bước đột phá đầu tiên' đổi mới kinh tế của Đảng?",
      a: "Hội nghị Trung ương 6 (khóa IV) tháng 8-1979 với chủ trương 'làm cho sản xuất bung ra'."
    },
    {
      q: "Chỉ thị 100-CT/TW (tháng 1-1981) của Ban Bí thư áp dụng cơ chế gì trong nông nghiệp?",
      a: "Khoán sản phẩm đến nhóm và người lao động ('Khoán 100') trong hợp tác xã nông nghiệp."
    },
    {
      q: "Ngày 17-2-1979 gắn liền với sự kiện lịch sử nào?",
      a: "Cuộc chiến đấu bảo vệ biên giới Phía Bắc chống 60 vạn quân xâm lược."
    },
    {
      q: "Ngày 7-1-1979 gắn liền với chiến công lịch sử nào?",
      a: "Quân tình nguyện Việt Nam phối hợp lực lượng Campuchia giải phóng Phnôm Pênh, đánh đổ chế độ diệt chủng Pol Pot."
    }
  ];

  const keywords = [
    { title: "Hội nghị TW 6 (8-1979)", desc: "Bước đột phá đầu tiên đổi mới kinh tế ('làm cho sản xuất bung ra')", cat: "Đổi mới" },
    { title: "Chỉ thị 100-CT/TW", desc: "Khoán sản phẩm đến nhóm và người lao động trong nông nghiệp", cat: "Nông nghiệp" },
    { title: "7-1-1979", desc: "Giải phóng Phnôm Pênh, cứu nhân dân Campuchia khỏi họa diệt chủng Pol Pot", cat: "Chiến công" },
    { title: "17-2-1979", desc: "Cuộc chiến đấu bảo vệ toàn tuyến biên giới Phía Bắc", cat: "Chiến đấu" },
    { title: "Lệnh Tổng động viên", desc: "Chủ tịch Tôn Đức Thắng ban hành ngày 5-3-1979", cat: "Sự kiện" },
    { title: "Quyết định 25-CP & 26-CP", desc: "Mở rộng quyền tự chủ sản xuất kinh doanh cho xí nghiệp quốc doanh", cat: "Công nghiệp" }
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
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tổng ôn trọn bộ Mục I.1 (1975-1981)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hub Ôn Tập Trắc Nghiệm Toàn Phần 1 (1975 - 1981)
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
              placeholder="Tra từ khóa 1975-1981..."
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
