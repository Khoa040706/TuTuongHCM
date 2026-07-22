"use client";
import React, { useState } from "react";
import { Search, Sparkles, HelpCircle, RefreshCw, CheckCircle2, Award, BookOpen, Layers } from "lucide-react";

export default function LsdPart1ComprehensiveReviewDashboard() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const keywords = [
    { title: "Tình thế sau Cách mạng Tháng 8", desc: "'Ngàn cân treo sợi tóc'", cat: "thoi-gian" },
    { title: "Ba nhiệm vụ cấp bách (03-9-1945)", desc: "Diệt giặc đói, diệt giặc dốt, diệt giặc ngoại xâm", cat: "khau-hieu" },
    { title: "Chỉ thị Kháng chiến kiến quốc (25-11-1945)", desc: "Xác định kẻ thù chính là Pháp; Khẩu hiệu 'Dân tộc trên hết, Tổ quốc trên hết'", cat: "van-kien" },
    { title: "Phương châm ngoại giao", desc: "Dĩ bất biến, ứng vạn biến", cat: "khau-hieu" },
    { title: "Lời kêu gọi TQKC (19-12-1946)", desc: "'Thà hy sinh tất cả chứ nhất định không chịu mất nước, không chịu làm nô lệ'", cat: "van-kien" },
    { title: "4 Trụ cột đường lối kháng chiến", desc: "Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính", cat: "chu-truong" },
    { title: "Chiến dịch Việt Bắc Thu Đông 1947", desc: "Đánh bại kế hoạch 'Đánh nhanh thắng nhanh' của Pháp, bảo vệ ATK", cat: "su-kien" },
    { title: "Chiến dịch Biên giới Thu Đông 1950", desc: "Chiến dịch tiến công lớn đầu tiên ta chủ động mở, Bác Hồ trực tiếp chỉ đạo", cat: "su-kien" },
    { title: "Đại hội II (2-1951)", desc: "Đảng Lao động Việt Nam ra hoạt động công khai (tại Kim Bình, Tuyên Quang)", cat: "hoi-nghi" },
    { title: "Cương lĩnh ruộng đất (11-1953)", desc: "23 điều; Khẩu hiệu 'Người cày có ruộng'", cat: "van-kien" },
    { title: "Chiến dịch Điện Biên Phủ (7-5-1954)", desc: "Trải qua 56 ngày đêm; Phương châm 'Đánh chắc, tiến chắc'", cat: "su-kien" },
    { title: "Hiệp định Geneve (21-7-1954)", desc: "Văn bản pháp lý quốc tế đầu tiên công nhận quyền dân tộc cơ bản của 3 nước Đông Dương", cat: "van-kien" }
  ];

  const reviewFlashcards = [
    {
      q: "Chiến dịch tiến công lớn đầu tiên do ta chủ động mở trong kháng chiến chống Pháp là chiến dịch nào?",
      a: "Chiến dịch Biên giới Thu Đông 1950 (từ 16-9 đến 17-10-1950, Bác Hồ trực tiếp ra mặt trận thị sát chỉ đạo)."
    },
    {
      q: "Đại hội đại biểu toàn quốc lần thứ II (2-1951) quyết định đổi tên Đảng thành gì?",
      a: "Đảng Lao động Việt Nam (và ra hoạt động công khai tại Việt Nam)."
    },
    {
      q: "Phương châm tác chiến trong Chiến dịch Điện Biên Phủ đã được chuyển từ gì sang gì?",
      a: "Chuyển từ 'Đánh nhanh, giải quyết nhanh' sang 'Đánh chắc, tiến chắc'."
    },
    {
      q: "Văn bản pháp lý quốc tế đầu tiên công nhận các quyền dân tộc cơ bản của 3 nước Đông Dương là gì?",
      a: "Hiệp định Geneve về lập lại hòa bình ở Đông Dương (ký ngày 21-7-1954 tại Thụy Sĩ)."
    }
  ];

  const filteredKeywords = keywords.filter((k) => {
    const matchesCat = activeCategory === "all" || k.cat === activeCategory;
    const matchesSearch =
      k.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="my-8 rounded-2xl border border-amber-400 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-white to-red-50 p-6 md:p-8 shadow-2xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles size={14} /> Ôn tập toàn diện trọn bộ Phần I (1945 - 1954)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Dashboard Tổng Ôn Từ Khóa & Flashcards Kiểm Tra
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Tra cứu nhanh toàn bộ kiến thức trọng tâm và tự kiểm tra khả năng ghi nhớ bẫy ôn thi trắc nghiệm.
        </p>
      </div>

      {/* Section 1: Flashcards */}
      <div className="max-w-2xl mx-auto mb-10">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="min-h-[180px] cursor-pointer rounded-2xl bg-slate-900 text-white p-6 shadow-xl border-2 border-amber-400 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
            <span>Thẻ Ôn Tập {cardIndex + 1} / {reviewFlashcards.length}</span>
            <span className="flex items-center gap-1"><RefreshCw size={13} /> Chạm để lật</span>
          </div>

          <div className="my-auto text-center py-4">
            {!isFlipped ? (
              <h4 className="text-lg md:text-xl font-bold font-serif">{reviewFlashcards[cardIndex].q}</h4>
            ) : (
              <p className="text-sm md:text-base font-semibold text-emerald-300 font-sans">{reviewFlashcards[cardIndex].a}</p>
            )}
          </div>

          <div className="text-center text-xs text-slate-400">
            {isFlipped ? "Đang hiển thị đáp án" : "Đang hiển thị câu hỏi"}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => { setIsFlipped(false); setCardIndex((p) => (p > 0 ? p - 1 : reviewFlashcards.length - 1)); }}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
          >
            ← Thẻ trước
          </button>
          <button
            onClick={() => { setIsFlipped(false); setCardIndex((p) => (p < reviewFlashcards.length - 1 ? p + 1 : 0)); }}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold"
          >
            Thẻ tiếp theo →
          </button>
        </div>
      </div>

      {/* Section 2: Keywords Filter & Search */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "all" ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-700"}`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveCategory("van-kien")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "van-kien" ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-700"}`}
            >
              Văn kiện
            </button>
            <button
              onClick={() => setActiveCategory("su-kien")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "su-kien" ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700"}`}
            >
              Sự kiện & Chiến dịch
            </button>
            <button
              onClick={() => setActiveCategory("khau-hieu")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeCategory === "khau-hieu" ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"}`}
            >
              Khẩu hiệu / Sách lược
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredKeywords.map((kw, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-bold text-sm text-slate-900 dark:text-white font-serif">{kw.title}</h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-sans">{kw.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
