"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh6Part2ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Lược đồ quan hệ R đạt Dạng chuẩn 3 (3NF) khi và chỉ khi thỏa mãn điều kiện nào sau đây?",
      options: [
        "R đạt dạng chuẩn 2NF và mọi thuộc tính không khóa đều không phụ thuộc bắc cầu vào khóa chính.",
        "R đạt dạng chuẩn 1NF và tất cả các khóa ngoại đều phải liên kết trực tiếp đến một khóa chính.",
        "R không chứa bất kỳ một phụ thuộc hàm nào có vế trái gồm nhiều hơn hai thuộc tính kết hợp.",
        "R có số lượng thuộc tính khóa bằng đúng với tổng số lượng các thuộc tính không khóa trong bảng."
      ],
      correctAnswer: 0,
      explanation: "3NF = 2NF + Không tồn tại phụ thuộc bắc cầu từ khóa chính đến các thuộc tính không khóa."
    },
    {
      id: "q2",
      question: "Theo định nghĩa tương đương, với mọi FD X → A (A ∉ X), R đạt 3NF nếu:",
      options: [
        "Vế trái X là một siêu khóa của quan hệ R HOẶC vế phải A là một thuộc tính khóa trong quan hệ.",
        "Vế trái X bắt buộc phải là một khóa tối tiểu và vế phải A không được phép là một thuộc tính.",
        "Vế trái X chỉ chứa đúng một thuộc tính đơn lẻ và vế phải A phải là khóa ngoại tham chiếu đến.",
        "Vế trái X và vế phải A đều bắt buộc phải là các thuộc tính không khóa nằm trong quan hệ chính."
      ],
      correctAnswer: 0,
      explanation: "Định nghĩa tương đương 3NF: Với mọi FD X → A, hoặc X là siêu khóa (X⁺ = U), hoặc A là thuộc tính khóa."
    },
    {
      id: "q3",
      question: "Điều kiện hình thức nghiêm ngặt nhất để một quan hệ R đạt Dạng chuẩn Boyce-Codd (BCNF) là:",
      options: [
        "Vế trái X của mọi phụ thuộc hàm không tầm thường X → A đều bắt buộc phải là một siêu khóa.",
        "Vế phải A của mọi phụ thuộc hàm không tầm thường X → A đều bắt buộc phải là một khóa chính.",
        "Mọi khóa dự tuyển của quan hệ R đều chỉ được phép chứa tối đa duy nhất một thuộc tính đơn.",
        "Quan hệ R không được phép tồn tại bất kỳ hai thuộc tính nào có cùng kiểu dữ liệu nguyên thủy."
      ],
      correctAnswer: 0,
      explanation: "BCNF yêu cầu vế trái của MỌI phụ thuộc hàm không tầm thường đều phải là Siêu khóa (X⁺ = U)."
    },
    {
      id: "q4",
      question: "Cho lược đồ R(CSZ), F = {CS → Z, Z → C}. Khẳng định nào sau đây là hoàn toàn chính xác?",
      options: [
        "Lược đồ quan hệ R đạt chuẩn 3NF nhưng vi phạm chuẩn BCNF vì thuộc tính Z không là siêu khóa.",
        "Lược đồ quan hệ R vi phạm dạng chuẩn 2NF do xuất hiện hiện tượng phụ thuộc hàm riêng phần.",
        "Lược đồ quan hệ R đạt chuẩn BCNF vì vế phải C của phụ thuộc hàm Z → C là một thuộc tính khóa.",
        "Lược đồ quan hệ R không đạt chuẩn 1NF do các thuộc tính C, S, Z chứa miền giá trị phức hợp."
      ],
      correctAnswer: 0,
      explanation: "R(CSZ) có khóa CS và SZ. Tập thuộc tính khóa = {C, S, Z} ➔ Đạt 3NF. Nhưng Z → C có Z⁺ = ZC ≠ CSZ ➔ Z không là siêu khóa ➔ Rớt BCNF!"
    },
    {
      id: "q5",
      question: "Khẳng định nào sau đây là một quy tắc chuẩn hóa đúng đắn trong lý thuyết CSDL?",
      options: [
        "Mọi lược đồ quan hệ chỉ gồm đúng hai thuộc tính đơn lẻ bất kỳ (|U|=2) đều luôn luôn đạt BCNF.",
        "Mọi lược đồ quan hệ đạt dạng chuẩn 3NF thì chắc chắn sẽ tự động thỏa mãn dạng chuẩn BCNF.",
        "Chuẩn hóa từ 3NF lên BCNF luôn luôn bảo toàn được 100% tất cả các phụ thuộc hàm ban đầu.",
        "Một quan hệ đạt 2NF thì chắc chắn không còn chứa bất kỳ sự dư thừa dữ liệu nào trong bảng."
      ],
      correctAnswer: 0,
      explanation: "Mệnh đề 1: Mọi quan hệ gồm đúng 2 thuộc tính (|U| = 2) đều luôn luôn đạt BCNF!"
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
    <div className="my-8 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 2: Dạng Chuẩn 3NF, Boyce-Codd BCNF &amp; Luồng Chuẩn Hóa</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra Phụ thuộc bắc cầu, Điều kiện 3NF/BCNF, Case R(CSZ) và 3 Mệnh đề vàng</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-purple-100 px-3.5 py-1.5 border border-purple-300">
            <Award className="h-5 w-5 text-purple-700" />
            <span className="text-xs font-bold text-purple-900 font-mono">
              Kết quả: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
            </span>
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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 font-mono text-xs font-bold text-purple-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-purple-50/50 hover:border-purple-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-purple-500 bg-purple-100/70 font-semibold text-purple-950";
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
                  <span className="font-bold text-purple-900">Giải thích chi tiết: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-indigo-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50"
          >
            <span>Nộp bài &amp; Xem giải thích</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white shadow hover:bg-gray-900 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại bài Quiz</span>
          </button>
        )}
      </div>
    </div>
  );
}
