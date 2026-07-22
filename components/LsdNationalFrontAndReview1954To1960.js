"use client";
import React, { useState } from "react";
import { Flag, Award, Sparkles, HelpCircle, BookOpen, RefreshCw, Search } from "lucide-react";

export default function LsdNationalFrontAndReview1954To1960() {
  const [activeTab, setActiveTab] = useState("front"); // 'front', 'flashcards', 'keywords'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Ai là Chủ tịch đầu tiên của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam thành lập ngày 20-12-1960?",
      a: "Luật sư Nguyễn Hữu Thọ (Thành lập tại xã Tân Lập, huyện Châu Thành, tỉnh Tây Ninh)."
    },
    {
      q: "Đơn vị thời gian '10 tháng' (từ 7-1955 đến 5-1956) gắn liền với số liệu tội ác nào của Mỹ - Diệm?",
      a: "Địch đã bắt và giết 108.835 người ở miền Nam trong chiến dịch 'Tố cộng, diệt cộng'."
    },
    {
      q: "Đồng chí Lê Duẩn dự thảo 'Đề cương đường lối cách mạng miền Nam' vào thời gian và địa điểm nào?",
      a: "Tháng 8-1956 tại Bến Tre (khi đồng chí đang là Bí thư Xứ ủy Nam Bộ)."
    },
    {
      q: "Hội nghị Trung ương Đảng nào đã đề ra Nghị quyết chuyển cách mạng miền Nam sang dùng Bạo lực cách mạng?",
      a: "Hội nghị Trung ương lần thứ 15 (tháng 1-1959)."
    }
  ];

  const keywords = [
    { title: "Kẻ thù trực tiếp", desc: "Đế quốc Mỹ thay chân Pháp thống trị miền Nam", cat: "Chính trị" },
    { title: "Chương trình 10 điểm", desc: "Chương trình hành động của Mặt trận Dân tộc Giải phóng miền Nam (20-12-1960)", cat: "Văn kiện" },
    { title: "Luật 10/59", desc: "Đạo luật phát xít Mỹ - Diệm lê máy chém khắp miền Nam (3-1959)", cat: "Tội ác" },
    { title: "Nguyễn Thị Định", desc: "Nữ tướng lãnh đạo Phong trào 'Đồng khởi' Bến Tre (17-1-1960)", cat: "Nhân vật" },
    { title: "Nguyễn Hữu Thọ", desc: "Luật sư - Chủ tịch Mặt trận Dân tộc Giải phóng miền Nam", cat: "Nhân vật" },
    { title: "Tổ đổi công", desc: "Hình thức hợp tác hóa nông nghiệp cấp độ 1 ở miền Bắc", cat: "Kinh tế" }
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
          <Flag size={14} /> Sự kiện lịch sử ngày 20-12-1960
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Mặt Trận Dân Tộc Giải Phóng Miền Nam & Tổng Ôn 1954 - 1960
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Đoàn kết toàn dân miền Nam đánh đổ chế độ thuộc địa kiểu mới của đế quốc Mỹ.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("front")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "front" ? "bg-red-700 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          Mặt trận Giải phóng (20-12-1960)
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

      {/* Tab 1: Front */}
      {activeTab === "front" && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-400 shadow-md">
          <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
            <div className="p-3 rounded-xl bg-red-700 text-white shadow-md">
              <Flag size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                Mặt Trận Dân Tộc Giải Phóng Miền Nam Việt Nam
              </h4>
              <span className="text-xs text-red-700 dark:text-red-400 font-bold">Thành lập ngày 20-12-1960 tại Tân Lập (Tây Ninh)</span>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/30 border border-red-200">
              • **Chủ tịch**: Luật sư **Nguyễn Hữu Thọ** được bầu làm Chủ tịch Ủy ban Trung ương Mặt trận.
            </p>
            <p className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Chương trình hành động**: Hoạt động theo **"Chương trình 10 điểm"** đoàn kết mọi tầng lớp nhân dân, giai cấp, tôn giáo, dân tộc ở miền Nam.
            </p>
            <p className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **Mục tiêu tối cao**: Đánh đổ chế độ thuộc địa trá hình của Mỹ và chính quyền tay sai Ngô Đình Diệm; xây dựng miền Nam độc lập, dân chủ, hòa bình, trung lập, tiến tới hòa bình thống nhất Tổ quốc.
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
              placeholder="Tra từ khóa 1954-1960..."
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
