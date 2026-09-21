"use client";
import React, { useState } from "react";
import { 
  Zap, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2,
  BookOpen
} from "lucide-react";

const SPRINT_ITEMS = [
  {
    num: "01",
    term: "Baseline (Mốc cơ sở)",
    definition: "Mốc scope, vision và initial requirements đã được các bên thống nhất và đóng băng để làm chuẩn kiểm soát thay đổi (Change Control).",
    tag: "Section I",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    num: "02",
    term: "Discovery Phase (Khám phá)",
    definition: "Giai đoạn tìm kiếm và cấu trúc hóa các yêu cầu, tập trung trả lời câu hỏi 'Hệ thống phải làm gì?' (WHAT) trước khi quyết định thiết kế thế nào (HOW).",
    tag: "Section II",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    num: "03",
    term: "Behavioral Analysis",
    definition: "Phân tích hành vi chức năng và phản hồi của hệ thống trước các kích thích từ Actor bên ngoài, đối lập với Phân tích cấu trúc dữ liệu tĩnh.",
    tag: "Section III",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    num: "04",
    term: "Use-Case Diagram (Mục lục)",
    definition: "Bao gồm 4 thành phần: Actors + Use Cases + System Boundary + Associations. Đóng vai trò như Mục lục cuốn sách (chỉ ra WHAT tồn tại).",
    tag: "Section III",
    badgeColor: "bg-purple-100 text-purple-800"
  },
  {
    num: "05",
    term: "Use-Case Description (Nội dung)",
    definition: "Tài liệu văn bản đặc tả chi tiết cách thức ca sử dụng diễn ra (HOW). Gồm 3 cấp độ: Brief (tóm tắt), Casual (thường thức), Fully Dressed (chuẩn tắc).",
    tag: "Section IV",
    badgeColor: "bg-rose-100 text-rose-800"
  },
  {
    num: "06",
    term: "Fully-Dressed 9 Fields",
    definition: "ID & Name + Primary/Secondary Actors + Brief + Trigger + Preconditions + Postconditions + Normal Flow + Alternate/Exception + Business Rules/NFRs.",
    tag: "Section IV",
    badgeColor: "bg-orange-100 text-orange-800"
  },
  {
    num: "07",
    term: "<<include>> Relationship",
    definition: "Tái sử dụng bắt buộc (Mandatory reuse). Base use case luôn gọi Included use case. Mũi tên nét đứt từ Base trỏ đến Included.",
    tag: "Section VI",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    num: "08",
    term: "<<extend>> Relationship",
    definition: "Biến thể tùy chọn/có điều kiện. Base use case tự hoàn chỉnh. Mũi tên nét đứt từ Extension trỏ NGƯỢC VỀ Base tại Named Extension Point.",
    tag: "Section VI",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    num: "09",
    term: "Generalization (Kế thừa)",
    definition: "Quan hệ chuyên biệt hóa cha-con. Child use case kế thừa hành vi của Parent use case. Ký hiệu đường nét liền với mũi tên tam giác rỗng từ Child lên Parent.",
    tag: "Section VI",
    badgeColor: "bg-emerald-100 text-emerald-800"
  }
];

export default function OneMinuteChapterSprintCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = SPRINT_ITEMS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SPRINT_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SPRINT_ITEMS.length) % SPRINT_ITEMS.length);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-stone-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Zap className="h-3.5 w-3.5 fill-current" /> Tóm Tắt 1 Phút Cuối Chương: Flashcards Siêu Tốc
          </div>
          <h3 className="mt-2 text-2xl font-bold text-stone-900">
            9 Thuật Ngữ Cốt Tử Của Chapter 4 Cần Nhớ Trước Giờ Vào Phòng Thi
          </h3>
          <p className="text-sm text-stone-600">
            Lướt nhanh 60 giây để ôn trọn vẹn tinh hoa kiến thức của toàn bộ Chapter 4: Discovery Phase I.
          </p>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-stone-600">
            {currentIndex + 1} / {SPRINT_ITEMS.length}
          </span>
          <div className="flex gap-1">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Flashcard Box */}
      <div className="mt-6 rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 p-8 shadow-sm text-center relative overflow-hidden">
        {/* Background watermark */}
        <span className="absolute -bottom-4 -right-2 text-8xl font-black text-stone-200/50 select-none font-mono">
          {currentItem.num}
        </span>

        <span className={`inline-block px-3 py-0.5 text-xs font-bold rounded-full ${currentItem.badgeColor} mb-3 border border-current/20`}>
          {currentItem.tag}
        </span>

        <h4 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 tracking-tight">
          {currentItem.term}
        </h4>

        <p className="text-base md:text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
          {currentItem.definition}
        </p>

        {/* Progress dots */}
        <div className="mt-8 flex justify-center gap-1.5">
          {SPRINT_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-amber-600" : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
