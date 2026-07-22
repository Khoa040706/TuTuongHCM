"use client";
import React, { useState } from "react";
import { Award, BookOpen, RefreshCw, Search, Star } from "lucide-react";

export default function LsdSignificanceAndReview1965To1975() {
  const [activeTab, setActiveTab] = useState("significance"); // 'significance', 'flashcards', 'keywords'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Ai là Tư lệnh và Chính ủy của Chiến dịch Hồ Chí Minh lịch sử (tháng 4-1975)?",
      a: "Tư lệnh: Đại tướng Văn Tiến Dũng; Chính ủy: Đồng chí Phạm Hùng (Cố vấn: Đồng chí Lê Đức Thọ)."
    },
    {
      q: "Thời điểm 11 giờ 30 phút ngày 30-4-1975 gắn liền với sự kiện lịch sử trọng đại nào?",
      a: "Lá cờ chiến thắng tung bay trên nóc Dinh Độc Lập, Tổng thống Dương Văn Minh đầu hàng không điều kiện."
    },
    {
      q: "Hai chiến thắng mở đầu đánh bại 2 cuộc phản công mùa khô của Mỹ (1965-1967) ở miền Nam tên là gì?",
      a: "Chiến thắng Núi Thành (Quảng Nam) và Chiến thắng Vạn Tường (Quảng Ngãi)."
    },
    {
      q: "Chiến dịch nào mở đầu cho Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975?",
      a: "Chiến dịch Tây Nguyên (bắt đầu bằng trận đột phá chiến lược tại Buôn Ma Thuột 10-3-1975)."
    }
  ];

  const keywords = [
    { title: "Chiến tranh cục bộ", desc: "Chiến lược Mỹ ồ ạt đưa quân xâm lược Mỹ trực tiếp tác chiến (1965-1968)", cat: "Chiến lược" },
    { title: "Mậu Thân 1968", desc: "Tổng tiến công đột kích 37 tỉnh + 4 đô thị, buộc Mỹ xuống thang ngừng ném bom", cat: "Chiến dịch" },
    { title: "Điện Biên Phủ trên không", desc: "12 ngày đêm đánh bại tập kích B-52 của Nixon ở Hà Nội (12-1972)", cat: "Chiến công" },
    { title: "Hiệp định Paris 1973", desc: "Ký ngày 27-1-1973, Mỹ cam kết rút toàn bộ quân Mỹ khỏi Việt Nam", cat: "Ngoại giao" },
    { title: "Buôn Ma Thuột", desc: "Trận đột phá mở đầu Chiến dịch Tây Nguyên (10-3-1975)", cat: "Trận đánh" },
    { title: "30-4-1975", desc: "Giải phóng hoàn toàn miền Nam, thống nhất Tổ quốc", cat: "Mốc lịch sử" }
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
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tổng kết trọn bộ 1965 - 1975
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Ý Nghĩa Lịch Sử Vĩ Đại & Hub Ôn Tập Trắc Nghiệm (1965 - 1975)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Kết thúc 21 năm kháng chiến chống Mỹ, mở ra kỷ nguyên độc lập, thống nhất cả nước đi lên CNXH.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("significance")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "significance" ? "bg-red-700 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Ý nghĩa lịch sử vĩ đại
        </button>
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "flashcards" ? "bg-amber-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Thẻ bài 3D Flashcard
        </button>
        <button
          onClick={() => setActiveTab("keywords")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "keywords" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Bảng từ khóa ôn thi
        </button>
      </div>

      {/* Tab 1: Significance */}
      {activeTab === "significance" && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-400 shadow-md">
          <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
            <div className="p-3 rounded-xl bg-red-700 text-white shadow-md">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                Ý Nghĩa Lịch Sử Vĩ Đại Toàn Dân & Quốc Tế
              </h4>
              <span className="text-xs text-red-700 dark:text-red-400 font-bold">Trang sử chói lọi nhất của dân tộc Việt Nam thế kỷ XX</span>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **Đối với dân tộc**: Kết thúc 21 năm kháng chiến chống Mỹ và 30 năm chiến tranh giải phóng dân tộc; chấm dứt vĩnh viễn ách thống trị của chủ nghĩa thực dân, đế quốc; **bảo vệ độc lập và thống nhất đất nước**.
            </p>
            <p className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Đối với quốc tế**: Đập tan cuộc chiến tranh xâm lược lớn nhất của Mỹ sau Chiến tranh thế giới II; làm phá sản các chiến lược chiến tranh toàn cầu của đế quốc Mỹ; cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Flashcards */}
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

      {/* Tab 3: Keywords */}
      {activeTab === "keywords" && (
        <div>
          <div className="max-w-xs mx-auto mb-6 relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Tra từ khóa 1965-1975..."
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
