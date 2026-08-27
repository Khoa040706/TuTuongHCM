"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh5Part1ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Khi xóa một mặt hàng mà vô tình làm mất luôn thông tin về nhà cung cấp duy nhất, đây là dị thường gì?",
      options: [
        "Dị thường khi xóa bộ (Deletion anomaly làm mất mát thông tin quan trọng của CSDL).",
        "Dị thường khi thêm bộ (Insertion anomaly ngăn cản việc nhập dữ liệu mới vào bảng).",
        "Dị thường không nhất quán (Inconsistency do dữ liệu bị cập nhật sai lệch ở các dòng).",
        "Dị thường dư thừa dữ liệu (Redundancy làm lãng phí dung lượng lưu trữ trên ổ đĩa)."
      ],
      correctAnswer: 0,
      explanation: "Dị thường khi xóa bộ (Deletion anomaly) xảy ra khi ta xóa một dữ liệu con (mặt hàng) nhưng do thiết kế gộp chung bảng nên vô tình làm mất luôn thông tin của thực thể cha (nhà cung cấp)."
    },
    {
      id: "q2",
      question: "Khẳng định nào sau đây diễn tả chính xác định nghĩa hình thức của phụ thuộc hàm X → Y?",
      options: [
        "Với hai bộ bất kỳ t1, t2 nếu trùng nhau trên tập X thì bắt buộc phải trùng trên Y.",
        "Với hai bộ bất kỳ t1, t2 nếu trùng nhau trên tập X thì bắt buộc phải khác nhau ở Y.",
        "Với mọi bộ dữ liệu trong bảng, số lượng thuộc tính của X luôn luôn bằng thuộc tính Y.",
        "Với mọi dòng dữ liệu trên bảng, tập thuộc tính X bắt buộc phải là một khóa ngoại của Y."
      ],
      correctAnswer: 0,
      explanation: "Định nghĩa hình thức: ∀ t1, t2 ∈ r : ( t1.X = t2.X ⇒ t1.Y = t2.Y ). Hai bộ bằng nhau ở X thì bắt buộc phải bằng nhau ở Y."
    },
    {
      id: "q3",
      question: "Tiên đề nào trong hệ Armstrong khẳng định: 'Nếu Y ⊆ X thì X → Y'?",
      options: [
        "Luật Phản xạ (Reflexivity - thể hiện các phụ thuộc hàm tầm thường trong quan hệ CSDL).",
        "Luật Tăng trưởng (Augmentation - cho phép bổ sung thêm thuộc tính vào hai vế của FD).",
        "Luật Bắc cầu (Transitivity - cho phép kết nối chuỗi các phụ thuộc hàm liên tiếp nhau).",
        "Luật Giả bắc cầu (Pseudotransitivity - cho phép thay thế vế trái của các phụ thuộc hàm)."
      ],
      correctAnswer: 0,
      explanation: "Luật Phản xạ (A1 - Reflexivity): Nếu Y là tập con của X (Y ⊆ X) thì hiển nhiên X → Y luôn đúng (đây là các phụ thuộc hàm tầm thường Trivial FD)."
    },
    {
      id: "q4",
      question: "Theo Bổ đề 3, điều kiện cần và đủ để phụ thuộc hàm X → Y được suy dẫn từ tập F là gì?",
      options: [
        "Tập thuộc tính Y phải là một tập con của bao đóng thuộc tính X đối với tập F (Y ⊆ X⁺).",
        "Tập thuộc tính X phải là một tập con của bao đóng thuộc tính Y đối với tập F (X ⊆ Y⁺).",
        "Tập thuộc tính X và tập thuộc tính Y bắt buộc phải không có bất kỳ phần tử chung nào.",
        "Bao đóng của tập X bắt buộc phải chứa toàn bộ tất cả các thuộc tính của lược đồ quan hệ."
      ],
      correctAnswer: 0,
      explanation: "Bổ đề 3: F ⊢ (X → Y) ⟺ Y ⊆ X⁺. Để kiểm tra X → Y có đúng không, ta chỉ cần kiểm tra xem toàn bộ các thuộc tính trong Y có nằm trong bao đóng X⁺ hay không."
    },
    {
      id: "q5",
      question: "Cho R = ABCDEG và F = {AB → C, C → A, D → EG, BE → C}. Bao đóng của tập BD là:",
      options: [
        "Bao đóng (BD)⁺ chứa đầy đủ tất cả các thuộc tính của lược đồ R = {A, B, C, D, E, G}.",
        "Bao đóng (BD)⁺ chỉ chứa duy nhất ba thuộc tính cơ bản ban đầu là {B, D, E, G} trên bảng.",
        "Bao đóng (BD)⁺ chỉ chứa duy nhất bốn thuộc tính ban đầu là {B, D, E, C} trong quan hệ.",
        "Bao đóng (BD)⁺ không thể nạp thêm bất kỳ thuộc tính nào ngoài tập thuộc tính {B, D}."
      ],
      correctAnswer: 0,
      explanation: "Tính (BD)⁺: BD -> BDEG (do D->EG) -> BDEGC (do BE->C) -> ABCDEG (do C->A). Vậy (BD)⁺ = ABCDEG."
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
    <div className="my-8 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 1: Lý Thuyết Thiết Kế, Phụ Thuộc Hàm &amp; Bao Đóng X⁺</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra 4 dị thường, định nghĩa FD, hệ tiên đề Armstrong và thuật toán tính bao đóng</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-indigo-100 px-3.5 py-1.5 border border-indigo-300">
            <Award className="h-5 w-5 text-indigo-700" />
            <span className="text-xs font-bold text-indigo-900">
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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-mono text-xs font-bold text-indigo-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-indigo-50/50 hover:border-indigo-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-indigo-500 bg-indigo-100/70 font-semibold text-indigo-950";
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
                  <span className="font-bold text-indigo-900">Giải thích: </span>
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
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition-all disabled:opacity-50"
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
