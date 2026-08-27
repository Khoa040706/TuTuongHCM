"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, ArrowRight, HelpCircle, Sparkles } from "lucide-react";

export default function DatabaseCh7Part1ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Mục tiêu chính của việc tối ưu hóa câu truy vấn về mặt không gian (space) là:",
      options: [
        "Tối ưu bộ nhớ sử dụng cho câu hỏi và tối ưu việc dùng thiết bị ngoại vi khai thác dữ liệu.",
        "Tăng dung lượng bộ nhớ đệm RAM để lưu trữ toàn bộ các bảng dữ liệu mà không cần lọc trước.",
        "Mở rộng thêm nhiều phân vùng ổ đĩa cứng mới để lưu trữ các bảng kết quả trung gian khổng lồ.",
        "Tự động xóa bớt các quan hệ gốc có kích thước quá lớn nhằm tiết kiệm không gian lưu trữ."
      ],
      correctAnswer: 0,
      explanation: "Mục tiêu không gian: Tối ưu bộ nhớ sử dụng cho câu hỏi và tối ưu việc sử dụng thiết bị ngoại vi (đĩa từ, I/O) phục vụ cho việc khai thác dữ liệu."
    },
    {
      id: "q2",
      question: "Trong ví dụ tối ưu π_A(σ_{(B=C) ∧ (D=100)}(R × S)), bước đẩy σ_{D=100} vào S giúp:",
      options: [
        "Giảm số lượng các bộ dữ liệu trung gian sinh ra từ tích Đề-các xuống nhiều lần trước khi nối.",
        "Loại bỏ hoàn toàn tất cả các thuộc tính không khóa ra khỏi quan hệ R trước khi thực hiện nối.",
        "Biến đổi phép chọn thành phép chiếu để không cần phải so khớp các giá trị trên cột B và cột C.",
        "Tăng tốc độ ghi dữ liệu trực tiếp vào bộ nhớ thứ cấp mà không cần thông qua bộ đệm tạm thời."
      ],
      correctAnswer: 0,
      explanation: "Đẩy σ_{D=100} vào S giúp lọc bớt các dòng không thỏa ngay từ đầu, giảm kích thước tích Đề-các trung gian từ hàng triệu bộ xuống chỉ còn vài nghìn bộ."
    },
    {
      id: "q3",
      question: "Chiến lược tối ưu hóa nào sau đây là chiến lược quan trọng hàng đầu trong tối ưu Heuristic?",
      options: [
        "Thực hiện phép chọn (selection) sớm nhất có thể để giảm số bộ dữ liệu cần phải xử lý sau này.",
        "Luôn luôn thực hiện toàn bộ các phép tích Đề-các trước rồi mới áp dụng các phép chọn lọc sau.",
        "Thực hiện phép chiếu sau cùng để tránh làm mất đi các thuộc tính phụ trợ trong quá trình nối.",
        "Chia nhỏ các bảng dữ liệu thành nhiều tập tin vật lý độc lập trước khi tiến hành quét dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "Chiến lược 1 (Quy tắc vàng): Thực hiện phép chọn (selection) sớm nhất có thể – đẩy phép chọn xuống sâu trong cây biểu thức để giảm số bộ dữ liệu ở các bước sau."
    },
    {
      id: "q4",
      question: "Biểu thức σ_{F₁ ∧ F₂}(E₁ × E₂) với F₁ chỉ trên E₁ và F₂ chỉ trên E₂ tương đương với:",
      options: [
        "σ_{F₁}(E₁) × σ_{F₂}(E₂) (Đẩy phép chọn F₁ xuống nhánh E₁ và F₂ xuống nhánh E₂ trước khi nhân).",
        "σ_{F₁}(E₁ × E₂) ∪ σ_{F₂}(E₁ × E₂) (Thực hiện phép hợp giữa hai phép nhân Đề-các độc lập nhau).",
        "π_{F₁}(E₁) ⋈ π_{F₂}(E₂) (Chuyển đổi toàn bộ các phép chọn thành các phép chiếu tương ứng bảng).",
        "σ_{F₁ ∨ F₂}(E₁ × E₂) (Biến đổi điều kiện giao hội AND thành điều kiện tuyển hợp OR ở trên đỉnh)."
      ],
      correctAnswer: 0,
      explanation: "Theo Luật L6 (Hệ quả 1): Khi F = F₁ ∧ F₂ với F₁ chỉ trên E₁ và F₂ chỉ trên E₂, ta có σ_F(E₁ × E₂) ≡ σ_{F₁}(E₁) × σ_{F₂}(E₂)."
    },
    {
      id: "q5",
      question: "Nhận định nào sau đây là hoàn toàn CHÍNH XÁC về các quy tắc hoán vị phép toán đại số?",
      options: [
        "Không có quy tắc tổng quát cho việc đẩy phép chiếu (π) xuống trước phép hiệu tập hợp (\\).",
        "Phép chiếu (π) luôn luôn giao hoán tự do với phép hiệu tập hợp (\\) trong mọi trường hợp bảng.",
        "Phép chọn (σ) không thể giao hoán với phép hợp (∪) vì sẽ làm thay đổi số lượng bản ghi ra.",
        "Phép tích Đề-các không có tính chất giao hoán và không có tính chất kết hợp trong biểu thức."
      ],
      correctAnswer: 0,
      explanation: "Lưu ý quan trọng từ giáo trình: Không có quy tắc tổng quát cho việc đẩy phép chiếu xuống trước phép hiệu các tập hợp (\\) vì π(E₁ \\ E₂) ≠ π(E₁) \\ π(E₂)."
    }
  ];

  const handleSelect = (qId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="my-8 rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/40 via-white to-indigo-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-white shadow-md shadow-teal-600/20">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Concept Quiz 1: Động Lực, Chiến Lược &amp; Biểu Thức Tương Đương</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                5 CÂU TRẮC NGHIỆM &bull; MỤC I - III
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Kiểm tra khả năng thấu hiểu mục tiêu tối ưu, 6 chiến lược tổng quát và 11 quy tắc biến đổi L1 - L11
            </p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3.5 py-2 border border-emerald-300 font-mono text-xs font-bold text-emerald-900 shadow-sm">
            <Award className="h-4 w-4 text-emerald-700" />
            <span>Điểm: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)</span>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = selectedAnswers[q.id];

          return (
            <div
              key={q.id}
              className={`rounded-xl border p-4 transition-all ${
                showResults
                  ? userAnswer === q.correctAnswer
                    ? "border-emerald-300 bg-emerald-50/30"
                    : "border-red-300 bg-red-50/30"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 font-mono text-xs font-bold text-teal-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-teal-50/50 hover:border-teal-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-teal-500 bg-teal-100/70 font-semibold text-teal-950";
                  }

                  if (showResults) {
                    if (optIdx === q.correctAnswer) {
                      btnStyle = "border-emerald-500 bg-emerald-100 font-bold text-emerald-950 shadow-sm";
                    } else if (userAnswer === optIdx && userAnswer !== q.correctAnswer) {
                      btnStyle = "border-red-500 bg-red-100 font-semibold text-red-950";
                    } else {
                      btnStyle = "border-gray-200 bg-gray-50 opacity-60 text-gray-500";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={showResults}
                      className={`flex items-center justify-between rounded-lg border p-3 text-left text-xs transition-all ${btnStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-[11px] text-gray-500">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span>{opt}</span>
                      </div>
                      {showResults && optIdx === q.correctAnswer && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 ml-2" />
                      )}
                      {showResults && userAnswer === optIdx && userAnswer !== q.correctAnswer && (
                        <XCircle className="h-4 w-4 shrink-0 text-red-600 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="mt-3 rounded-lg bg-white/80 p-3 text-xs text-gray-700 border border-gray-200 leading-relaxed">
                  <span className="font-bold text-teal-900">Giải thích chi tiết: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-teal-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:from-teal-700 hover:to-indigo-700 transition-all disabled:opacity-50"
          >
            <span>Nộp Bài Concept Quiz 1</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white shadow hover:bg-gray-900 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại câu hỏi</span>
          </button>
        )}
      </div>
    </div>
  );
}
