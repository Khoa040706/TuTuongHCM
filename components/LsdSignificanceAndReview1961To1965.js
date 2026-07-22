"use client";
import React, { useState } from "react";
import { Award, BookOpen, RefreshCw, Search, CheckCircle2, Star } from "lucide-react";

export default function LsdSignificanceAndReview1961To1965() {
  const [activeTab, setActiveTab] = useState("significance"); // 'significance', 'flashcards', 'keywords'
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const flashcards = [
    {
      q: "Đại hội III của Đảng (9-1960) xác định vị trí của cách mạng miền Bắc và cách mạng miền Nam như thế nào?",
      a: "Cách mạng miền Bắc giữ vai trò 'quyết định nhất'; Cách mạng miền Nam giữ vai trò 'quyết định trực tiếp'."
    },
    {
      q: "Chiến thắng quân sự nào ngày 2-1-1963 đã chứng minh quân dân miền Nam có khả năng đánh bại Chiến tranh đặc biệt?",
      a: "Chiến thắng Ấp Bắc (Mỹ Tho)."
    },
    {
      q: "'Xương sống' của chiến lược Chiến tranh đặc biệt do Mỹ - Diệm triển khai là gì?",
      a: "Quốc sách 'Ấp chiến lược' (dự định lập 17.000 ấp chiến lược để gom dân)."
    },
    {
      q: "Phong trào thi đua tiêu biểu nhất trong lĩnh vực Nông nghiệp ở miền Bắc giai đoạn 1961-1965 tên là gì?",
      a: "Phong trào thi đua 'Hợp tác xã Đại Phong' (Quảng Bình)."
    }
  ];

  const keywords = [
    { title: "Quyết định nhất", desc: "Vị trí cách mạng miền Bắc đối với sự phát triển cách mạng cả nước", cat: "Đường lối" },
    { title: "Quyết định trực tiếp", desc: "Vị trí cách mạng miền Nam đối với sự nghiệp giải phóng miền Nam", cat: "Đường lối" },
    { title: "Special War", desc: "Chiến tranh đặc biệt (Công thức: Quân đội Sài Gòn + Cố vấn Mỹ + Vũ khí Mỹ)", cat: "Chiến lược" },
    { title: "Ấp Bắc (2-1-1963)", desc: "Trận thắng mở đầu đánh bại chiến thuật Trực thăng vận & Thiết xa vận", cat: "Chiến thắng" },
    { title: "3 mũi giáp công", desc: "Phương châm tác chiến: Đấu tranh Quân sự + Chính trị + Binh vận", cat: "Phương châm" },
    { title: "Hợp tác xã Đại Phong", desc: "Lá cờ đầu phong trào thi đua nông nghiệp miền Bắc", cat: "Thi đua" }
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
          <Star size={14} className="fill-amber-300 text-amber-300" /> Tổng kết 5 năm 1961 - 1965
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Ý Nghĩa Lịch Sử & Hub Ôn Tập Trắc Nghiệm (1961 - 1965)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Miền Bắc trở thành căn cứ địa vững chắc cả nước; Miền Nam đánh bại Chiến tranh đặc biệt.
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
          Ý nghĩa lịch sử 1961-1965
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
                Ý Nghĩa Lịch Sử Giai Đoạn 1961 - 1965
              </h4>
              <span className="text-xs text-red-700 dark:text-red-400 font-bold">Thắng lợi to lớn trên cả hai miền Nam - Bắc</span>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <p className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200">
              • **Miền Bắc**: Xây dựng bước đầu cơ sở vật chất - kỹ thuật của CNXH; kinh tế, văn hóa, giáo dục phát triển mạnh; trở thành **căn cứ địa vững chắc cho cách mạng cả nước**.
            </p>
            <p className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200">
              • **Miền Nam**: Đánh bại chiến lược **"Chiến tranh đặc biệt"** của đế quốc Mỹ — làm sụp đổ quốc sách Ấp chiến lược và chính quyền độc tài Ngô Đình Diệm.
            </p>
            <p className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200">
              • **Đường lối của Đảng**: Thể hiện tinh thần độc lập, tự chủ, sáng tạo trong việc đề ra đồng thời **hai chiến lược cách mạng** phù hợp với hoàn cảnh lịch sử.
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
              placeholder="Tra từ khóa 1961-1965..."
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
