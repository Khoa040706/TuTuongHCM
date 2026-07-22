"use client";
import React, { useState } from "react";
import { HelpCircle, RefreshCw, BookOpen, Search, Sparkles, Award, ArrowRight, CheckCircle2, Bookmark } from "lucide-react";

export default function LsdGotchasAndExamFlashcards() {
  const [activeTab, setActiveTab] = useState("flashcards"); // 'flashcards' or 'keywords'
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      tag: "Văn kiện dễ nhầm",
      question: "So sánh: Chỉ thị 'Kháng chiến kiến quốc' (25-11-1945) vs Chỉ thị 'Toàn dân kháng chiến' (12-12-1946)?",
      frontHint: "💡 Mẹo nhớ: Một bên ra đời khi vừa giành độc lập (1945), một bên ra đời ngay trước khi chiến tranh toàn quốc bùng nổ (1946).",
      answer: "• Chỉ thị Kháng chiến kiến quốc (25-11-1945): Xác định kẻ thù chính là thực dân Pháp; Khẩu hiệu 'Dân tộc trên hết, Tổ quốc trên hết'.\n• Chỉ thị Toàn dân kháng chiến (12-12-1946): Khẳng định phương châm kháng chiến toàn dân, toàn diện, lâu dài và dựa vào sức mình là chính."
    },
    {
      tag: "Ngoại giao dễ bẫy",
      question: "So sánh: Hiệp định Sơ bộ (06-03-1946) vs Tạm ước 14-9 (14-09-1946)?",
      frontHint: "💡 Mẹo nhớ: Hiệp định Sơ bộ công nhận quốc gia tự do & đuổi Tưởng; Tạm ước 14-9 nhân nhượng thêm kinh tế kéo dài hòa bình.",
      answer: "• Hiệp định Sơ bộ (06-03-1946): Pháp công nhận VN là 'Quốc gia tự do', đồng ý 15.000 quân Pháp ra Bắc thay 20 vạn quân Tưởng (rút dần trong 5 năm).\n• Tạm ước 14-9 (14-09-1946): Ký tại Marseille, nhân nhượng thêm cho Pháp một số quyền lợi kinh tế, văn hóa để mua thêm thời gian chuẩn bị kháng chiến."
    },
    {
      tag: "Chiến dịch quân sự",
      question: "So sánh: Chiến dịch Việt Bắc Thu Đông 1947 vs Chiến dịch Biên giới Thu Đông 1950?",
      frontHint: "💡 Mẹo nhớ: Việt Bắc 1947 là chiến dịch PHẢN CÔNG; Biên giới 1950 là chiến dịch TIẾN CÔNG ta CHỦ ĐỘNG MỞ.",
      answer: "• Việt Bắc 1947: Chiến dịch PHẢN CÔNG đầu tiên ta đánh bại kế hoạch 'Đánh nhanh thắng nhanh' của Pháp, bảo vệ an toàn ATK Việt Bắc.\n• Biên giới 1950: Chiến dịch TIẾN CÔNG lớn đầu tiên ta CHỦ ĐỘNG MỞ, khai thông biên giới Việt - Trung, Bác Hồ trực tiếp ra mặt trận thị sát chỉ đạo."
    },
    {
      tag: "Sách lược ngoại giao",
      question: "Sách lược ngoại giao với Tưởng vs với Pháp giai đoạn 1945 - 1946?",
      frontHint: "💡 Mẹo nhớ: Phân biệt rõ thời điểm trước và sau mốc ngày 06-03-1946.",
      answer: "• Với Tưởng (trước 6-3-1946): Hòa Tưởng để đánh Pháp ở Nam Bộ (Khẩu hiệu 'Hoa - Việt thân thiện').\n• Với Pháp (sau 6-3-1946): Hòa Pháp để đuổi 20 vạn quân Tưởng về nước (Phương châm 'Dĩ bất biến, ứng vạn biến')."
    }
  ];

  const keywordsList = [
    { title: "Ngàn cân treo sợi tóc", desc: "Tình thế vận mệnh dân tộc nguy hiểm cực kỳ sau Cách mạng Tháng Tám 1945", category: "thoi-gian" },
    { title: "Diệt giặc đói, giặc dốt, giặc ngoại xâm", desc: "3 nhiệm vụ lớn cấp bách được Bác Hồ đề ra phiên họp 03-9-1945", category: "khau-hieu" },
    { title: "Dân tộc trên hết, Tổ quốc trên hết", desc: "Khẩu hiệu chiến lược trong Chỉ thị Kháng chiến kiến quốc (25-11-1945)", category: "van-kien" },
    { title: "Dĩ bất biến, ứng vạn biến", desc: "Phương châm ngoại giao nhân nhượng có nguyên tắc của Bác Hồ", category: "khau-hieu" },
    { title: "Thà hy sinh tất cả chứ nhất định không chịu mất nước", desc: "Tinh thần quyết tử trong Lời kêu gọi Toàn quốc kháng chiến (19-12-1946)", category: "van-kien" },
    { title: "Toàn dân, toàn diện, lâu dài, tự lực cánh sinh", desc: "4 trụ cột cốt lõi của đường lối kháng chiến chống Pháp", category: "chu-truong" },
    { title: "Phá tan kế hoạch Đánh nhanh thắng nhanh", desc: "Kết quả chiến lược nổi bật của Chiến dịch Việt Bắc Thu Đông 1947", category: "su-kien" },
    { title: "Chủ động tiến công quy mô lớn", desc: "Bước ngoặt chiến lược của Chiến dịch Biên giới Thu Đông 1950", category: "su-kien" }
  ];

  const filteredKeywords = keywordsList.filter((kw) => {
    const matchCat = activeCategory === "all" || kw.category === activeCategory;
    const matchSearch =
      kw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kw.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="my-8 rounded-2xl border border-amber-300/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles size={14} /> Bí kíp ôn tập & Phân biệt bẫy trắc nghiệm
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Thẻ Bài 3D Flip Deck & Bảng Từ Khóa Trọng Tâm
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Chạm vào thẻ 3D để lật mặt xem giải thích phân biệt bẫy trắc nghiệm dễ nhầm lẫn nhất.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === "flashcards"
              ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 ring-2 ring-amber-400/40"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <HelpCircle size={16} /> Thẻ Bài 3D Flip Deck (Bẫy trắc nghiệm)
        </button>
        <button
          onClick={() => setActiveTab("keywords")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === "keywords"
              ? "bg-rose-700 text-white shadow-lg shadow-rose-700/30 ring-2 ring-rose-400/40"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <BookOpen size={16} /> Bảng Từ Khóa Phân Loại Tra Cứu
        </button>
      </div>

      {/* Mode 1: 3D Flip Flashcards Deck */}
      {activeTab === "flashcards" && (
        <div className="max-w-2xl mx-auto">
          {/* Card Wrapper with 3D Perspective */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="perspective-1000 cursor-pointer min-h-[260px]"
          >
            <div
              className={`w-full min-h-[260px] rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-500 transform-gpu flex flex-col justify-between border-2 ${
                !isFlipped
                  ? "bg-white dark:bg-slate-900 border-amber-400 dark:border-amber-600 hover:border-amber-500"
                  : "bg-amber-950 text-white border-amber-500"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-amber-200 dark:border-slate-800 pb-3 mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${!isFlipped ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300" : "bg-amber-900 text-amber-200"}`}>
                  Thẻ {currentCardIndex + 1} / {flashcards.length} • {flashcards[currentCardIndex].tag}
                </span>
                <span className={`text-xs font-semibold flex items-center gap-1.5 ${!isFlipped ? "text-amber-700 dark:text-amber-400" : "text-amber-300"}`}>
                  <RefreshCw size={13} className="animate-spin-slow" /> {isFlipped ? "Mặt sau: Đáp án & Phân tích" : "Mặt trước: Câu hỏi"}
                </span>
              </div>

              {/* Body */}
              {!isFlipped ? (
                <div className="my-auto text-center">
                  <h4 className="text-lg md:text-xl font-bold font-serif text-slate-900 dark:text-white leading-relaxed">
                    {flashcards[currentCardIndex].question}
                  </h4>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-4 font-medium bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200/80 inline-block">
                    {flashcards[currentCardIndex].frontHint}
                  </p>
                </div>
              ) : (
                <div className="my-auto text-left">
                  <div className="text-xs md:text-sm text-slate-100 leading-relaxed font-sans whitespace-pre-line bg-amber-900/60 p-4 rounded-xl border border-amber-700/60">
                    {flashcards[currentCardIndex].answer}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-amber-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{isFlipped ? "Chạm để lật về mặt câu hỏi" : "Chạm thẻ để xem phân tích đáp án"}</span>
                <span className="text-amber-600 font-bold">Chạm thẻ để xoay 3D 🔄</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
              }}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 text-slate-800 text-xs font-bold transition-all shadow-sm"
            >
              ← Thẻ trước
            </button>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-md"
            >
              {isFlipped ? "Xem lại câu hỏi" : "Lật mặt sau 3D 🔄"}
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 text-slate-800 text-xs font-bold transition-all shadow-sm"
            >
              Thẻ tiếp theo →
            </button>
          </div>
        </div>
      )}

      {/* Mode 2: Interactive Keyword Tags Matrix */}
      {activeTab === "keywords" && (
        <div>
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border border-slate-200"}`}
              >
                Tất cả từ khóa
              </button>
              <button
                onClick={() => setActiveCategory("van-kien")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "van-kien" ? "bg-amber-600 text-white" : "bg-white text-slate-700 border border-slate-200"}`}
              >
                Văn kiện
              </button>
              <button
                onClick={() => setActiveCategory("su-kien")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "su-kien" ? "bg-rose-600 text-white" : "bg-white text-slate-700 border border-slate-200"}`}
              >
                Sự kiện & Chiến dịch
              </button>
              <button
                onClick={() => setActiveCategory("khau-hieu")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "khau-hieu" ? "bg-emerald-600 text-white" : "bg-white text-slate-700 border border-slate-200"}`}
              >
                Khẩu hiệu & Sách lược
              </button>
            </div>

            <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Tra cứu từ khóa nhanh..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Keywords Tag Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredKeywords.map((kw, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {kw.category}
                </span>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white mt-2 font-serif">{kw.title}</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-sans">{kw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
