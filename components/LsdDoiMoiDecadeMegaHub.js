"use client";
import React, { useState } from "react";
import { Star, Award, RefreshCw, Search, Bookmark, CheckCircle2, TrendingUp, Globe, Sparkles } from "lucide-react";

export default function LsdDoiMoiDecadeMegaHub() {
  const [activeTab, setActiveTab] = useState("summary"); // 'summary', 'keywords', 'flashcards'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const summaryPoints = [
    {
      title: "Đại Hội VI (12-1986)",
      desc: "Khởi xướng đường lối ĐỔI MỚI TOÀN DIỆN — mốc son quan trọng nhất mở ra kỷ nguyên mới của cách mạng Việt Nam.",
      highlight: "Mốc son Đổi mới",
      color: "border-red-500 bg-red-50/60 dark:bg-red-950/30"
    },
    {
      title: "Đại Hội VII (6-1991)",
      desc: "Thông qua Cương lĩnh 1991 & Chiến lược 2000 — lần đầu tiên chính thức khẳng định giương cao ngọn cờ Tư tưởng Hồ Chí Minh cùng với chủ nghĩa Mác - Lênin.",
      highlight: "Tư tưởng Hồ Chí Minh",
      color: "border-amber-500 bg-amber-50/60 dark:bg-amber-950/30"
    },
    {
      title: "Kỳ Tích Đẩy Lùi Lạm Phát",
      desc: "Chỉ số lạm phát giảm thần kỳ qua các mốc: 774,7% (1986) ➔ 67,1% (1991) ➔ 12,7% (1995) — thước đo hiệu quả thực tiễn đổi mới kinh tế.",
      highlight: "774,7% → 12,7%",
      color: "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30"
    },
    {
      title: "Bứt Phá Đối Ngoại Quốc Tế",
      desc: "Phá hoàn toàn thế bị bao vây cấm vận: Bình thường hóa Việt - Trung (11-1991), gia nhập ASEAN (28-7-1995) & Bình thường hóa Việt - Mỹ (11-7-1995).",
      highlight: "Bình thường hóa & ASEAN",
      color: "border-blue-500 bg-blue-50/60 dark:bg-blue-950/30"
    }
  ];

  const keywords = [
    // Mốc thời gian
    { title: "10-7-1986", desc: "Tổng Bí thư Lê Duẩn qua đời", cat: "Thời gian" },
    { title: "14-7-1986", desc: "Hội nghị TW bầu đồng chí Trường Chinh làm Tổng Bí thư", cat: "Thời gian" },
    { title: "15-18/12/1986", desc: "Đại hội VI của Đảng (Đại hội Đổi Mới)", cat: "Thời gian" },
    { title: "14-11-1987", desc: "Quyết định 217-HĐBT mở rộng tự chủ doanh nghiệp", cat: "Thời gian" },
    { title: "4-1988", desc: "Nghị quyết 10 của Bộ Chính trị (Khoán 10 trong nông nghiệp)", cat: "Thời gian" },
    { title: "1-1-1988", desc: "Luật Đầu tư nước ngoài có hiệu lực", cat: "Thời gian" },
    { title: "14-3-1988", desc: "Trung Quốc dùng vũ lực chiếm đảo Gạc Ma (Trường Sa)", cat: "Thời gian" },
    { title: "9-1989", desc: "Rút hết quân tình nguyện Việt Nam khỏi Campuchia", cat: "Thời gian" },
    { title: "11-1991", desc: "Bình thường hóa quan hệ Việt Nam - Trung Quốc", cat: "Thời gian" },
    { title: "24-27/6/1991", desc: "Đại hội VII của Đảng", cat: "Thời gian" },
    { title: "12-1991", desc: "Liên Xô và các nước XHCN Đông Âu sụp đổ hoàn toàn", cat: "Thời gian" },
    { title: "4-1992", desc: "Kỳ họp 11 Quốc hội khóa VIII thông qua Hiến pháp 1992", cat: "Thời gian" },
    { title: "1-1994", desc: "Hội nghị đại biểu toàn quốc giữa nhiệm kỳ (4 nguy cơ)", cat: "Thời gian" },
    { title: "28-7-1995", desc: "Việt Nam chính thức gia nhập ASEAN (thành viên thứ 7)", cat: "Thời gian" },
    { title: "11-7-1995", desc: "Bình thường hóa quan hệ ngoại giao Việt Nam - Hoa Kỳ", cat: "Thời gian" },

    // Văn kiện
    { title: "Cương lĩnh 1991", desc: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH", cat: "Văn kiện" },
    { title: "Chiến lược 2000", desc: "Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000 (GDP gấp đôi)", cat: "Văn kiện" },
    { title: "Hiến pháp 1992", desc: "Hiến pháp Đổi mới, thể chế hóa Nhà nước pháp quyền XHCN", cat: "Văn kiện" },
    { title: "Nghị quyết Khoán 10", desc: "Nghị quyết 10 BCT (4-1988) giao quyền tự chủ ruộng đất cho hộ nông dân", cat: "Văn kiện" },
    { title: "Nghị quyết 07 BCT", desc: "Nghị quyết về đại đoàn kết dân tộc (17-11-1993)", cat: "Văn kiện" },

    // Nhân vật / Tổ chức
    { title: "Trường Chinh", desc: "Tổng Bí thư (7-1986), nhìn thẳng sự thật, mở đường cho Đổi mới", cat: "Nhân vật" },
    { title: "Nguyễn Văn Linh", desc: "Tổng Bí thư (Đại hội VI), tác giả 'Những việc cần làm ngay'", cat: "Nhân vật" },
    { title: "Đỗ Mười", desc: "Tổng Bí thư (Đại hội VII - 6/1991)", cat: "Nhân vật" },
    { title: "ASEAN", desc: "Hiệp hội các quốc gia Đông Nam Á, Việt Nam gia nhập ngày 28-7-1995", cat: "Tổ chức" },

    // Chủ trương đường lối
    { title: "Lấy dân làm gốc", desc: "Bài học kinh nghiệm số 1 rút ra từ Đại hội VI", cat: "Chủ trương" },
    { title: "Dân biết, dân bàn, dân làm, dân kiểm tra", desc: "Phương châm phát huy quyền làm chủ của nhân dân", cat: "Chủ trương" },
    { title: "Thêm bạn, bớt thù", desc: "Phương châm đối ngoại mở rộng, đa phương hóa, đa dạng hóa", cat: "Chủ trương" },
    { title: "6 nguyên tắc Đổi mới", desc: "Được Hội nghị TW 6 (3-1989) đề ra để định hướng Đổi mới không chệch hướng", cat: "Chủ trương" },
    { title: "Bốn nguy cơ lớn", desc: "Tụt hậu kinh tế, chệch hướng XHCN, tham nhũng, diễn biến hòa bình (Hội nghị giữa khóa 1994)", cat: "Chủ trương" },
    { title: "6 đặc trưng CNXH", desc: "Các đặc trưng cốt lõi được ghi nhận trong Cương lĩnh 1991", cat: "Chủ trương" }
  ];

  const flashcards = [
    {
      q: "Mức lạm phát năm 1986 là bao nhiêu và đến năm 1995 đã giảm xuống còn bao nhiêu?",
      a: "Năm 1986 đạt đỉnh 774,7%, đến năm 1991 giảm còn 67,1% và năm 1995 giảm còn 12,7%."
    },
    {
      q: "Năm nào Việt Nam chính thức chuyển từ nước nhập khẩu gạo sang xuất khẩu 1,4 triệu tấn gạo?",
      a: "Năm 1989 (sau 1 năm thực hiện Nghị quyết Khoán 10 năm 1988)."
    },
    {
      q: "Tư tưởng Hồ Chí Minh lần đầu tiên được chính thức ghi nhận làm nền tảng tư tưởng cùng với chủ nghĩa Mác - Lênin tại văn kiện nào?",
      a: "Cương lĩnh năm 1991 (thông qua tại Đại hội VII tháng 6-1991)."
    },
    {
      q: "Bốn nguy cơ thách thức lớn được Đảng chỉ ra tại Hội nghị giữa nhiệm kỳ (tháng 1-1994) là gì?",
      a: "1) Tụt hậu xa hơn về kinh tế; 2) Chệch hướng XHCN; 3) Nạn tham nhũng & quan liêu; 4) 'Diễn biến hòa bình'."
    }
  ];

  const filteredKeywords = keywords.filter((k) => {
    const matchCat = selectedCat === "all" || k.cat === selectedCat;
    const matchSearch =
      k.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/60 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-2xl">
      {/* Mega Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Sparkles size={14} className="fill-amber-300 text-amber-300" /> Trọn bộ 10 năm Đổi Mới (1986 - 1996)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Mega Hub Ôn Tập & Ghi Nhớ Tổng Quát (1986 - 1996)
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          Kho từ khóa thi trắc nghiệm & Thẻ ghi nhớ 3D phục vụ ôn thi đạt điểm tối đa
        </p>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("summary")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "summary" ? "bg-red-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          📌 4 Ghi nhớ tổng quát
        </button>
        <button
          onClick={() => setActiveTab("keywords")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "keywords" ? "bg-amber-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          🔍 Ma trận từ khóa ôn thi
        </button>
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "flashcards" ? "bg-slate-900 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200"
          }`}
        >
          🎴 Thẻ 3D Flashcard bẫy thi
        </button>
      </div>

      {/* Tab 1: 4 Summary Points */}
      {activeTab === "summary" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {summaryPoints.map((item, idx) => (
            <div key={idx} className={`p-5 rounded-2xl border-2 shadow-md ${item.color}`}>
              <div className="flex items-center justify-between border-b pb-2 mb-3 border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-base font-serif text-slate-900 dark:text-white">{item.title}</h4>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 text-red-600 border border-red-200">
                  {item.highlight}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Keywords Search & Filter */}
      {activeTab === "keywords" && (
        <div>
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Tra từ khóa ôn thi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1">
              {["all", "Thời gian", "Văn kiện", "Nhân vật", "Chủ trương"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedCat === cat ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {cat === "all" ? "Tất cả" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Keywords Cards */}
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

      {/* Tab 3: Flashcards */}
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
    </div>
  );
}
