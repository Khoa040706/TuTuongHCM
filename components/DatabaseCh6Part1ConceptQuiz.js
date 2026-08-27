"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh6Part1ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Dị thường khi thêm (Insertion Anomaly) xảy ra trong trường hợp nào sau đây?",
      options: [
        "Không thể thêm một đối tượng mới nếu nó chưa có đầy đủ các giá trị của khóa chính quan hệ.",
        "Không thể thêm một bản ghi mới khi bộ nhớ đệm của hệ quản trị cơ sở dữ liệu bị tràn cục bộ.",
        "Thêm một dòng mới làm thay đổi cấu trúc định dạng của tất cả các cột đã có sẵn trong bảng.",
        "Hệ thống bắt buộc phải tự động xóa bỏ một dòng dữ liệu cũ trước khi chèn thêm một dòng mới."
      ],
      correctAnswer: 0,
      explanation: "Dị thường thêm: Vì thuộc tính khóa không được phép chứa NULL, nên nếu thực thể mới chưa có thông tin về một phần của khóa thì không thể thêm vào CSDL."
    },
    {
      id: "q2",
      question: "Một lược đồ quan hệ R được gọi là đạt Dạng chuẩn 1 (1NF) khi và chỉ khi:",
      options: [
        "Tất cả các thuộc tính của quan hệ R đều chỉ chứa các miền giá trị đơn nguyên tử không lặp.",
        "Tất cả các thuộc tính của quan hệ R đều là các khóa ngoại tham chiếu đến một bảng dữ liệu.",
        "Quan hệ R không được phép chứa bất kỳ một ràng buộc phụ thuộc hàm nào giữa các thuộc tính.",
        "Quan hệ R chỉ chứa tối đa duy nhất một thuộc tính khóa chính và không có thuộc tính không."
      ],
      correctAnswer: 0,
      explanation: "1NF yêu cầu mọi thuộc tính đều là thuộc tính đơn (nguyên tố), không chứa tập hợp hay danh sách lặp."
    },
    {
      id: "q3",
      question: "Phụ thuộc hàm riêng phần (Partial Dependency) là hiện tượng:",
      options: [
        "Một thuộc tính không khóa phụ thuộc vào một tập con thực sự của một khóa dự tuyển nào đó.",
        "Một thuộc tính khóa chính phụ thuộc vào toàn bộ tất cả các thuộc tính của lược đồ quan hệ.",
        "Hai thuộc tính không khóa tự xác định hàm lẫn nhau mà không thông qua bất kỳ một khóa nào.",
        "Khóa chính của quan hệ bị phân rã thành nhiều khóa nhỏ hơn trong quá trình truy vấn dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "Phụ thuộc bộ phận là khi tồn tại FD X → A với X ⊂ Khóa và A là thuộc tính không khóa."
    },
    {
      id: "q4",
      question: "Trường hợp nào sau đây đảm bảo chắc chắn lược đồ quan hệ R luôn đạt 2NF?",
      options: [
        "Khi quan hệ R đạt 1NF và có duy nhất một khóa chính chỉ gồm đúng một thuộc tính đơn lẻ (|K|=1).",
        "Khi quan hệ R có tổng số lượng thuộc tính trong bảng lớn hơn tổng số phụ thuộc hàm khai báo.",
        "Khi tập thuộc tính không khóa chứa ít nhất hai thuộc tính cùng phụ thuộc hàm vào một cột đơn.",
        "Khi quan hệ R không có bất kỳ một khóa ngoại nào tham chiếu đến các bảng dữ liệu khác trong CSDL."
      ],
      correctAnswer: 0,
      explanation: "Định lý 1: Nếu khóa chỉ gồm 1 thuộc tính (|K| = 1) thì không có tập con thực sự nào của khóa ➔ Luôn đạt 2NF."
    },
    {
      id: "q5",
      question: "Để chuẩn hóa một lược đồ quan hệ vi phạm 2NF về dạng chuẩn 2, ta thực hiện:",
      options: [
        "Tách các thuộc tính trong phụ thuộc hàm vi phạm cùng với vế trái của nó thành một lược đồ con.",
        "Xóa bỏ trực tiếp các phụ thuộc hàm vi phạm khỏi tập F mà không cần tạo thêm bất kỳ một bảng nào.",
        "Gộp tất cả các thuộc tính không khóa vào một cột duy nhất để tạo thành một thuộc tính phức hợp.",
        "Bổ sung thêm các khóa ngoại mới vào bảng chính để ép buộc dữ liệu phải thỏa mãn dạng chuẩn 2."
      ],
      correctAnswer: 0,
      explanation: "Thuật toán phân rã 2NF: Tách FD vi phạm X → Y thành lược đồ con R₁(X, Y) với khóa là X, phần còn lại giữ trong lược đồ khác."
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
            <h3 className="text-lg font-bold text-gray-900">Quiz 1: Động Lực Chuẩn Hóa, 1NF &amp; Dạng Chuẩn 2NF</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra 3 dị thường, thuộc tính nguyên tố, phụ thuộc bộ phận và thuật toán phân rã 2NF</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-indigo-100 px-3.5 py-1.5 border border-indigo-300">
            <Award className="h-5 w-5 text-indigo-700" />
            <span className="text-xs font-bold text-indigo-900 font-mono">
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
                  <span className="font-bold text-indigo-900">Giải thích chi tiết: </span>
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
