"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles } from "lucide-react";

export default function DatabaseCh2Part2ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Hai quan hệ r₁ và r₂ được gọi là tương thích với nhau khi nào?",
      options: [
        "Khi chúng có cùng số lượng các bộ giá trị",
        "Khi chúng có cùng tập các thuộc tính U giống",
        "Khi chúng không có bất kỳ thuộc tính chung nào",
        "Khi cả hai quan hệ đều là các quan hệ khác rỗng"
      ],
      correctAnswer: 1,
      explanation: "Hai quan hệ r₁ và r₂ được gọi là tương thích với nhau khi và chỉ khi chúng có cùng chung tập thuộc tính U (tức U₁ = U₂). Đây là điều kiện bắt buộc để thực hiện các phép hợp (∪), giao (∩), hiệu (−)."
    },
    {
      id: 2,
      question: "2. Khi thực hiện phép chiếu π_X(r) trên quan hệ r, kết quả nhận được có đặc điểm gì?",
      options: [
        "Giữ lại các cột trong X và loại bỏ bộ trùng",
        "Giữ lại tất cả các cột ban đầu của quan hệ r",
        "Số lượng dòng luôn tăng gấp đôi so với ban đầu",
        "Tự động thêm một cột khóa chính mới vào quan hệ"
      ],
      correctAnswer: 0,
      explanation: "Phép chiếu π gồm 2 thao tác cốt lõi: 1) Giữ lại các thuộc tính thuộc tập X; 2) Tự động loại bỏ các bộ trùng lặp (chỉ chọn một bộ đại diện duy nhất) theo lý thuyết tập hợp."
    },
    {
      id: 3,
      question: "3. Phép kết nối tự nhiên (Natural Join *) giữa hai quan hệ r và s khác gì so với phép kết nối bằng (Equijoin)?",
      options: [
        "Tự động loại bỏ một trong hai cột thuộc tính trùng",
        "Chỉ thực hiện được khi hai quan hệ có cùng số dòng",
        "Nhân đôi toàn bộ số lượng thuộc tính trong kết quả",
        "Bắt buộc phải có điều kiện so sánh lớn hơn hoặc bằng"
      ],
      correctAnswer: 0,
      explanation: "Phép kết nối tự nhiên (r * s) là phép kết nối bằng trên các thuộc tính trùng tên, và tự động loại bỏ một trong hai thuộc tính trùng tên khỏi bảng kết quả để tránh dư thừa dữ liệu."
    },
    {
      id: 4,
      question: "4. Phép toán nào trong đại số quan hệ thường dùng để giải quyết các bài toán có chứa từ khóa 'TẤT CẢ' hoặc 'MỌI'?",
      options: [
        "Phép chọn theo điều kiện logic (Selection)",
        "Phép chia đại số quan hệ (Division Operator)",
        "Phép tích Descartes giữa hai quan hệ rời nhau",
        "Phép hiệu giữa hai quan hệ tương thích với nhau"
      ],
      correctAnswer: 1,
      explanation: "Phép chia đại số quan hệ (r ÷ s) tương ứng với lượng từ phổ quát với mọi (∀), chuyên dùng cho các câu hỏi yêu cầu một thực thể phải thỏa mãn toàn bộ các điều kiện của quan hệ s (VD: học tất cả các môn của khoa)."
    }
  ];

  const handleSelect = (qIdx, optIdx) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Kiểm Tra Nhanh Kiến Thức • Phần II (Chương II)
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Củng Cố: 10 Phép Toán Đại Số Quan Hệ (Relational Algebra)
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {showResults ? (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Làm lại
            </button>
          ) : (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 hover:brightness-105 disabled:opacity-50 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" /> Kiểm tra đáp án
            </button>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = selectedAnswers[qIdx];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = isAnswered && userAnswer === q.correctAnswer;

          return (
            <div key={q.id} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 space-y-3 shadow-sm">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                {q.question}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  let optStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300";

                  if (showResults) {
                    if (optIdx === q.correctAnswer) {
                      optStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold";
                    } else if (userAnswer === optIdx) {
                      optStyle = "bg-rose-50 border-rose-500 text-rose-900 font-semibold";
                    }
                  } else if (userAnswer === optIdx) {
                    optStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold ring-1 ring-orange-400/30";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={`p-3 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {showResults && optIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 ml-2" />
                      )}
                      {showResults && userAnswer === optIdx && optIdx !== q.correctAnswer && (
                        <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className={`p-3 rounded-xl text-xs leading-relaxed ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-rose-50 text-rose-900 border border-rose-200"}`}>
                  <strong>{isCorrect ? "✔ Chính xác!" : "✖ Chưa chính xác!"}</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showResults && (
        <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Award className="w-5 h-5 text-orange-600" />
            Kết quả của bạn: <span className="text-orange-700 font-mono text-base">{calculateScore()} / {questions.length}</span> câu đúng
          </div>
          <span className="text-xs text-amber-800 font-semibold font-mono">
            {calculateScore() === questions.length ? "Xuất sắc! Bạn đã nắm vững 100% 10 phép toán Đại số quan hệ" : "Hãy ôn lại các câu trả lời chưa đúng nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
