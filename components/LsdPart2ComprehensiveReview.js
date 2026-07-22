"use client";
import React, { useState } from "react";
import { Award, BookOpen, RefreshCw, Search, Star, Layers } from "lucide-react";

export default function LsdPart2ComprehensiveReview() {
  const [activeTab, setActiveTab] = useState("flashcards"); // 'flashcards', 'keywords', 'conferences'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Trận Điện Biên Phủ trên không (12-1972) kéo dài bao nhiêu ngày đêm?",
      a: "Kéo dài 12 ngày đêm (từ 18 đến 30/12/1972), bắn rơi 81 máy bay (34 máy bay B-52)."
    },
    {
      q: "Thời điểm 11 giờ 30 phút ngày 30-4-1975 gắn liền với sự kiện gì?",
      a: "Lá cờ chiến thắng tung bay trên nóc Dinh Độc Lập, miền Nam giải phóng hoàn toàn."
    },
    {
      q: "Sự khác biệt cốt lõi về vị trí của cách mạng miền Bắc và miền Nam tại Đại hội III (9-1960)?",
      a: "Miền Bắc: Vị trí 'quyết định nhất'; Miền Nam: Vị trí 'quyết định trực tiếp'."
    },
    {
      q: "Chiến dịch nào mở đầu cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975?",
      a: "Chiến dịch Tây Nguyên (bắt đầu bằng trận đột phá Buôn Ma Thuột 10-3-1975)."
    }
  ];

  const keywords = [
    { title: "Bạo lực cách mạng", desc: "Nghị quyết TW 15 (1-1959) xác định con đường giải phóng miền Nam", cat: "Đường lối" },
    { title: "3 mũi giáp công", desc: "Đấu tranh Quân sự + Chính trị + Binh vận", cat: "Phương châm" },
    { title: "Ấp chiến lược", desc: "Xương sống chiến lược Chiến tranh đặc biệt của Mỹ - Diệm", cat: "Chiến lược" },
    { title: "Linebacker II", desc: "Tên chiến dịch tập kích B-52 của Nixon vào Hà Nội 12-1972", cat: "Chiến dịch" },
    { title: "Hiệp định Paris 1973", desc: "Ký ngày 27-1-1973, Mỹ cam kết rút toàn bộ quân Mỹ khỏi Việt Nam", cat: "Hiệp định" },
    { title: "30-4-1975", desc: "Toàn thắng cuộc kháng chiến chống Mỹ cứu nước", cat: "Mốc lịch sử" }
  ];

  const conferences = [
    { name: "Hội nghị TW 6 (7-1954)", detail: "Xác định đế quốc Mỹ là kẻ thù chính của nhân dân thế giới và nhân dân Việt Nam." },
    { name: "Hội nghị TW 15 (1-1959)", detail: "Xác định con đường Bạo lực cách mạng, sử dụng sức mạnh chính trị + quân sự." },
    { name: "Đại hội III (9-1960)", detail: "Đề ra 2 chiến lược cách mạng song song: XHCN ở miền Bắc & Dân tộc Dân chủ ở miền Nam." },
    { name: "Hội nghị TW 11 & 12 (1965)", detail: "Quyết tâm đánh thắng giặc Mỹ xâm lược trên phạm vi toàn quốc." },
    { name: "Hội nghị Bộ Chính trị (1-1975)", detail: "Thông qua Kế hoạch giải phóng hoàn toàn miền Nam trong 2 năm 1975-1976, nếu thời cơ đến giải phóng trong năm 1975." }
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
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tổng ôn trọn bộ Phần II (1954 - 1975)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Dashboard Tổng Ôn Tập Môn Lịch Sử Đảng (1954 - 1975)
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
        <button
          onClick={() => setActiveTab("conferences")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "conferences" ? "bg-red-700 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Ma trận Hội nghị TW
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
              placeholder="Tra từ khóa 1954-1975..."
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

      {/* Tab 3: Conferences */}
      {activeTab === "conferences" && (
        <div className="space-y-3">
          {conferences.map((cf, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 shadow-sm">
              <span className="font-bold text-sm text-amber-900 dark:text-amber-300 font-serif block mb-1">{cf.name}</span>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">{cf.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
