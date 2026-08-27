"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh5Part2ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Khẳng định nào sau đây diễn tả chính xác sự khác biệt giữa Siêu khóa và Khóa tối tiểu?",
      options: [
        "Khóa tối tiểu là một siêu khóa mà nếu bớt bất kỳ thuộc tính nào thì không còn là siêu khóa.",
        "Khóa tối tiểu là tập hợp chứa toàn bộ tất cả các thuộc tính của lược đồ quan hệ trong bảng.",
        "Siêu khóa là tập thuộc tính nhỏ nhất có thể định danh duy nhất cho từng dòng trong quan hệ.",
        "Siêu khóa bắt buộc chỉ được chứa duy nhất một thuộc tính đơn lẻ và không được phép chứa NULL."
      ],
      correctAnswer: 0,
      explanation: "Khóa tối tiểu là siêu khóa nhỏ nhất không chứa thuộc tính dư thừa: K⁺ = U và ∀A ∈ K : (K \\ {A})⁺ ≠ U."
    },
    {
      id: "q2",
      question: "Trong thuật toán tìm khóa theo phân loại N, D, L, tập N = U \\ UR có đặc điểm gì?",
      options: [
        "Tập N gồm các thuộc tính không xuất hiện ở vế phải nên bắt buộc phải có trong mọi khóa.",
        "Tập N gồm các thuộc tính chỉ xuất hiện ở vế phải nên không bao giờ xuất hiện trong khóa.",
        "Tập N gồm các thuộc tính trung gian và có thể xuất hiện hoặc không xuất hiện trong khóa.",
        "Tập N là tập hợp các thuộc tính dư thừa cần được loại bỏ ngay từ vòng lặp đầu tiên của F."
      ],
      correctAnswer: 0,
      explanation: "Vì các thuộc tính trong N (cô lập hoặc chỉ ở vế trái) không được sinh ra từ bất kỳ thuộc tính nào, nên để đạt được bao đóng U, MỌI KHÓA bắt buộc phải chứa N."
    },
    {
      id: "q3",
      question: "Khi nào một lược đồ quan hệ R(U, F) có thể kết luận chắc chắn có duy nhất một khóa tối tiểu?",
      options: [
        "Khi tập N = U \\ UR có bao đóng bằng toàn bộ tập thuộc tính ban đầu của lược đồ (N⁺ = U).",
        "Khi tập D = UR \\ UL chứa toàn bộ tất cả các thuộc tính của lược đồ quan hệ trên cơ sở.",
        "Khi tập L = U \\ (N ∪ D) có số lượng phần tử lớn hơn tổng số phần tử của hai tập N và D.",
        "Khi tập phụ thuộc hàm F ban đầu chỉ chứa duy nhất một phụ thuộc hàm đơn giữa hai cột bảng."
      ],
      correctAnswer: 0,
      explanation: "Nếu N⁺ = U thì N đã là một siêu khóa, mà N bắt buộc nằm trong mọi khóa nên không thể có khóa nào nhỏ hơn hoặc khác N ➔ N chính là khóa duy nhất!"
    },
    {
      id: "q4",
      question: "Trong quá trình thử nghiệm tổ hợp X = N ∪ Li, nếu X đã là một khóa thì:",
      options: [
        "Ta không cần thử nghiệm với bất kỳ tập cha Lj ⊃ Li nào nữa vì chúng chắc chắn bị dư thừa.",
        "Ta bắt buộc phải tiếp tục kiểm tra tất cả các tập con nhỏ hơn của Li để tìm khóa nhỏ hơn.",
        "Ta phải dừng toàn bộ thuật toán lại và không được xét thêm bất kỳ nhánh nào khác trên cây.",
        "Ta phải xóa bỏ tập X khỏi danh sách khóa vì nó không đảm bảo tính độc lập tối tiểu của F."
      ],
      correctAnswer: 0,
      explanation: "Quy tắc cắt tỉa nhánh (Pruning): Nếu X = N ∪ Li đã là khóa thì mọi tập mở rộng N ∪ Lj (với Lj ⊃ Li) chắc chắn chỉ là siêu khóa bị dư thừa thuộc tính."
    },
    {
      id: "q5",
      question: "Cho U = ABCDEGHIJLM và F trong slide, các khóa tối tiểu của lược đồ quan hệ là:",
      options: [
        "Có đúng hai khóa tối tiểu là K1 = {B, I, J, M} và K2 = {D, G, I, J, M} trong lược đồ quan hệ.",
        "Có duy nhất một khóa tối tiểu là K = {M, I, J} xác định toàn bộ các thuộc tính trong bảng.",
        "Có ba khóa tối tiểu là K1 = {A, I, J, M}, K2 = {B, I, J, M} và K3 = {C, I, J, M} trên bảng.",
        "Toàn bộ tập thuộc tính U chính là khóa tối tiểu duy nhất do tập F không thể sinh ra khóa."
      ],
      correctAnswer: 0,
      explanation: "Lời giải Mục IV: Với N = {I, J, M}, L = {A, B, C, D, G}, ta tìm được đúng 2 khóa tối tiểu là K1 = {B, I, J, M} và K2 = {D, G, I, J, M}."
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
            <h3 className="text-lg font-bold text-gray-900">Quiz 2: Siêu Khóa, Khóa Tối Tiểu &amp; Thuật Toán Tìm Khóa N/D/L</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra phân loại siêu khóa, thuật toán loại trừ, phân nhóm N/D/L và bài tập tìm khóa</p>
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
