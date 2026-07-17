"use client";
import React, { useState } from "react";
import { AlertTriangle, BookOpen, ChevronLeft, ChevronRight, HelpCircle, RefreshCw, ShieldAlert } from "lucide-react";

export default function InterfaceExamTrapFlashcards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = [
    {
      q: "Cú pháp 'FractionI f = new FractionI();' có hợp lệ không?",
      a: "KHÔNG HỢP LỆ! Lỗi biên dịch lập tức. Interface chỉ chứa các đặc tả trừu tượng, không có thân hàm nên không thể dùng toán tử 'new' để tạo đối tượng trực tiếp. Bạn chỉ có thể dùng để khai báo biến tham chiếu, gán bằng lớp con cụ thể: 'FractionI f = new Fraction(1,2);'.",
      tip: "Bẫy trắc nghiệm cực kỳ phổ biến! Đề bài hay gài bẫy hỏi xem dòng lệnh khởi tạo trực tiếp Interface này biên dịch có lỗi không."
    },
    {
      q: "Quy ước trả về chuẩn của phương thức 'compareTo(T other)' là gì?",
      a: "Phương thức compareTo quy định trả về kiểu số nguyên 'int':\n• Trả về 0: Nếu hai đối tượng bằng nhau.\n• Trả về số dương (> 0, thường là 1): Nếu đối tượng hiện tại (this) lớn hơn đối tượng so sánh (other).\n• Trả về số âm (< 0, thường là -1): Nếu đối tượng hiện tại nhỏ hơn đối tượng so sánh.",
      tip: "Nhớ kỹ quy ước dấu âm/dương để viết hàm compareTo đúng chuẩn học thuật."
    },
    {
      q: "Tại sao không được phép so sánh bằng số thực 'double' dùng toán tử '=='?",
      a: "Vì máy tính lưu trữ số thực bằng hệ nhị phân (IEEE 754) dẫn đến sai số làm tròn vô hạn tuần hoàn (VD: 0.1 + 0.2 trong bộ nhớ thực tế là 0.30000000000000004). Dùng '==' sẽ trả về FALSE. Giải pháp chuẩn là sử dụng hiệu trị tuyệt đối và khoảng sai số rất nhỏ: 'Math.abs(val - 0.3) < EPSILON'.",
      tip: "Đây là lỗi logic kinh điển trong bài tập so sánh diện tích hình học hoặc tọa độ vector."
    },
    {
      q: "Từ khóa 'this(1,1)' và 'super(1,1)' trong constructor khác nhau thế nào?",
      a: "• 'this(1,1)' dùng để gọi constructor khác trong CÙNG lớp (Constructor Chaining) để tái sử dụng code thiết lập.\n• 'super(1,1)' dùng để gọi constructor của LỚP CHA (Inheritance) để khởi tạo các thuộc tính thừa kế từ lớp cha.",
      tip: "Xem kỹ dấu ngoặc tròn. Nếu gọi constructor chaining, lệnh 'this(...)' hoặc 'super(...)' phải đặt ở ngay dòng đầu tiên của constructor con."
    },
    {
      q: "Nếu một lớp cụ thể 'implements' một Interface nhưng viết thiếu một phương thức thì sao?",
      a: "Sẽ bị lỗi biên dịch lập tức! Lớp cụ thể bắt buộc phải override và cài đặt đầy đủ tất cả các phương thức mà Interface đã khai báo. Điều này chỉ được miễn trừ khi lớp đó được khai báo là một lớp trừu tượng 'abstract class'.",
      tip: "Đọc kỹ danh sách phương thức của Interface trong đề bài để không viết thiếu khi cài đặt."
    }
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const activeCard = cards[currentCard];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Thử Thách Flashcard: Cạm Bẫy Ôn Thi</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Lật thẻ bài trắc nghiệm nhanh để ôn tập các cạm bẫy lý thuyết cực kỳ hay gặp trong phòng thi
          </p>
        </div>
        
        <span className="font-mono text-xs text-slate-500">
          Thẻ {currentCard + 1} / {cards.length}
        </span>
      </div>

      {/* Flashcard container */}
      <div className="w-full flex justify-center py-6">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full max-w-md h-72 cursor-pointer relative preserve-3d transition-transform duration-500 select-none"
          style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 bg-slate-950 rounded-2xl border-2 border-slate-800 p-6 flex flex-col justify-between backface-hidden shadow-lg hover:border-slate-700 transition-colors">
            <div className="flex gap-2.5 items-start">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">CÂU HỎI BẪY</span>
                <p className="text-sm font-semibold leading-relaxed text-slate-200">
                  {activeCard.q}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-slate-550 font-mono border-t border-slate-900 pt-3">
              <span>Mẹo thi cử: Nhớ kỹ!</span>
              <span className="text-amber-400 font-semibold animate-pulse">CLICK ĐỂ LẬT THẺ ĐÁP ÁN ➔</span>
            </div>
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 bg-slate-950 rounded-2xl border-2 border-emerald-800/80 p-6 flex flex-col justify-between backface-hidden shadow-lg hover:border-emerald-700/80 transition-colors"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="flex gap-2.5 items-start">
              <ShieldAlert className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-2 font-mono">ĐÁP ÁN & PHÂN TÍCH</span>
                <p className="text-xs leading-relaxed text-slate-300 whitespace-pre-line font-mono">
                  {activeCard.a}
                </p>
              </div>
            </div>

            <div className="p-2 bg-emerald-950/20 border border-emerald-900/30 rounded text-[9px] text-slate-400 font-mono italic">
              * Tips: {activeCard.tip}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-slate-950 hover:bg-slate-850 rounded-lg border border-slate-800 text-slate-350 transition-all select-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-slate-850 text-xs font-bold font-mono rounded-lg border border-slate-800 text-slate-350 transition-all select-none"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>LẬT THẺ</span>
        </button>

        <button
          onClick={handleNext}
          className="p-2 bg-slate-950 hover:bg-slate-850 rounded-lg border border-slate-800 text-slate-350 transition-all select-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
