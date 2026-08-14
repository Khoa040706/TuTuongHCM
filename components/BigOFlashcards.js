"use client";

import React, { useState } from "react";
import { Sparkles, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, HelpCircle, Flame, Zap } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function BigOFlashcards() {
  const cards = [
    {
      id: 1,
      title: "Mẫu 1: Vòng lặp nhân đôi i *= 2",
      badge: "Vòng lặp cơ bản",
      code: `for (int i = 1; i < n; i *= 2) {
    sum++;
}`,
      question: "Độ phức tạp thời gian Big-O của đoạn code trên là gì?",
      bigO: "O(log n)",
      explanation: "Biến i nhận các giá trị 1, 2, 4, 8, ..., 2ᵏ với 2ᵏ < n ➔ Số vòng lặp k = log₂ n. Mỗi vòng lặp tốn O(1) ➔ Tổng chi phí là O(log n)."
    },
    {
      id: 2,
      title: "Mẫu 2: Duyệt mảng 2 chiều (Nested Loops)",
      badge: "Vòng lặp lồng",
      code: `for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        matrix[i][j] = 0;
    }
}`,
      question: "Độ phức tạp Big-O khi duyệt qua toàn bộ ma trận n hàng, m cột?",
      bigO: "O(n · m)",
      explanation: "Vòng ngoài lặp n lần, với mỗi lần đó vòng trong lặp m lần ➔ Tổng số phép gán là n × m. Nếu n = m thì là O(n²)."
    },
    {
      id: 3,
      title: "Mẫu 3: Sequential Search (Worst Case)",
      badge: "Tìm kiếm",
      code: `for (int i = 0; i < len; i++) {
    if (a[i] == x) return i;
}
return -1;`,
      question: "Trường hợp xấu nhất (Worst-Case) của tìm kiếm tuần tự?",
      bigO: "O(n)",
      explanation: "Khi phần tử x nằm ở cuối mảng hoặc không tồn tại, thuật toán phải duyệt qua toàn bộ n phần tử ➔ Cần n phép so sánh."
    },
    {
      id: 4,
      title: "Mẫu 4: Binary Search trên mảng đã sắp xếp",
      badge: "Chia để trị",
      code: `while (low <= high) {
    mid = (low + high) / 2;
    if (x == a[mid]) return mid;
    else if (x > a[mid]) low = mid + 1;
    else high = mid - 1;
}`,
      question: "Độ phức tạp Worst-Case của tìm kiếm nhị phân?",
      bigO: "O(log n)",
      explanation: "Mỗi bước lặp loại bỏ 1/2 số phần tử còn lại: n ➔ n/2 ➔ n/4 ➔ ... ➔ 1. Số lần lặp tối đa là log₂ n."
    },
    {
      id: 5,
      title: "Mẫu 5: Bài toán Tháp Hà Nội (Tower of Hanoi)",
      badge: "Đệ quy phân nhánh",
      code: `void hanoi(int n, char from, char to, char aux) {
    if (n == 1) { move(1, from, to); return; }
    hanoi(n - 1, from, aux, to);
    move(n, from, to);
    hanoi(n - 1, aux, to, from);
}`,
      question: "Độ phức tạp thời gian khi giải Tháp Hà Nội với n đĩa?",
      bigO: "O(2ⁿ)",
      explanation: "Số lần di chuyển đĩa là 2ⁿ - 1. Thời gian tăng theo cấp số nhân (exponential). Với n = 80 đĩa, siêu máy tính cần 191 triệu năm!"
    },
    {
      id: 6,
      title: "Mẫu 6: Vòng lặp lồng chuỗi hình học (i *= 3)",
      badge: "Chuỗi hình học",
      code: `for (int i = 1; i < n; i *= 3) {
    for (int j = 1; j <= i; j++) {
        sum++;
    }
}`,
      question: "Độ phức tạp của vòng lặp lồng có bước tăng i *= 3?",
      bigO: "O(n)",
      explanation: "Tổng số phép toán: n + n/3 + n/9 + ... = n × (1 + 1/3 + 1/9 + ...) = n × 1.5 = 1.5n ➔ Rút gọn hệ số thành O(n)."
    },
    {
      id: 7,
      title: "Mẫu 7: Đệ quy tính Giai thừa (Factorial)",
      badge: "Đệ quy tuyến tính",
      code: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
      question: "Độ phức tạp thời gian của hàm đệ quy tính n! ?",
      bigO: "O(n)",
      explanation: "Có đúng n lời gọi hàm đệ quy nối tiếp nhau (chiều sâu cây đệ quy là n), mỗi lời gọi tốn O(1) ➔ O(n)."
    },
    {
      id: 8,
      title: "Mẫu 8: Hoán vị hai biến (Swap variables)",
      badge: "Lệnh đơn hằng số",
      code: `int temp = a;
a = b;
b = temp;`,
      question: "Độ phức tạp thời gian của phép hoán vị 2 biến?",
      bigO: "O(1)",
      explanation: "Chỉ gồm 3 phép gán cơ bản độc lập hoàn toàn với kích thước dữ liệu n ➔ Thời gian thực thi là hằng số O(1)."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastered, setMastered] = useState([]);

  const currentCard = cards[currentIndex];
  const isMastered = mastered.includes(currentCard.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const toggleMastered = () => {
    if (isMastered) {
      setMastered(mastered.filter((id) => id !== currentCard.id));
    } else {
      setMastered([...mastered, currentCard.id]);
    }
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Mục 8.1 — Luyện Phản Xạ Nhanh
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Big-O Quick Reflex: Flashcards Trắc Nghiệm Nhận Diện Độ Phức Tạp
          </h3>
          <p className="text-xs text-slate-500">
            Bấm vào thẻ để lật xem đáp án Big-O và lời giải thích chi tiết
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-mono text-slate-500">
            Đã thuộc: <strong>{mastered.length} / {cards.length}</strong>
          </span>
          <button
            onClick={() => {
              setMastered([]);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
            title="Làm lại từ đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Flashcard Container */}
      <div className="max-w-2xl mx-auto mb-6">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`min-h-[290px] rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-between select-none ${
            isFlipped
              ? "bg-gradient-to-br from-purple-50 via-white to-emerald-50/50 text-slate-800 border-purple-300 ring-4 ring-purple-100/80 shadow-lg"
              : "bg-gradient-to-br from-slate-50 via-white to-slate-100/80 border-slate-200 hover:border-purple-300 text-slate-800"
          }`}
        >
          {/* Card Top */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100/80 border border-purple-200 px-2.5 py-0.5 rounded-full shadow-xs">
              {currentCard.badge}
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold">
              Thẻ {currentIndex + 1} / {cards.length} • {isFlipped ? "MẶT SAU (ĐÁP ÁN)" : "MẶT TRƯỚC (BÀI TOÁN)"}
            </span>
          </div>

          {/* Card Body */}
          <div className="py-3">
            {!isFlipped ? (
              <div className="space-y-3 animate-fadeIn">
                <h4 className="text-base font-bold text-slate-900">{currentCard.title}</h4>
                <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-sm">
                  <pre className="text-xs font-mono overflow-x-auto">
                    <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(currentCard.code) }} />
                  </pre>
                </div>
                <p className="text-xs font-bold text-purple-950 font-sans flex items-center gap-1.5 bg-purple-50/80 p-2 rounded-xl border border-purple-200">
                  <HelpCircle className="w-4 h-4 text-purple-600 shrink-0" />
                  {currentCard.question}
                </p>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-600">ĐÁP ÁN CHÍNH XÁC:</span>
                  <span className="text-3xl font-mono font-black text-emerald-900 bg-emerald-100 px-5 py-1.5 rounded-2xl border-2 border-emerald-400 shadow-sm">
                    {currentCard.bigO}
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-purple-200/80 text-xs text-slate-700 leading-relaxed font-sans shadow-xs">
                  <strong className="text-purple-950 block font-bold mb-1">Giải thích chi tiết:</strong>
                  {currentCard.explanation}
                </div>
              </div>
            )}
          </div>

          {/* Card Bottom Hint */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>👆 Bấm vào thẻ để {isFlipped ? "xem lại đề bài" : "lật xem đáp án"}</span>
            <span className="text-purple-700 font-bold">{isMastered ? "✓ Đã đánh dấu nhớ" : ""}</span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-4 px-2">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Thẻ trước
          </button>

          <button
            onClick={toggleMastered}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs ${
              isMastered
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isMastered ? "Đã thuộc ✓" : "Đánh dấu đã thuộc"}
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold transition cursor-pointer"
          >
            Thẻ tiếp <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
