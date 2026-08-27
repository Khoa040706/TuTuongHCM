"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles } from "lucide-react";

export default function DatabasePart1ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Giai đoạn hệ thống xử lý tập tin (File Processing System) được ứng dụng rộng rãi nhất trong lịch sử tin học vào khoảng thời gian nào?",
      options: [
        "Khoảng những năm 1940s - 1950s",
        "Suốt những năm từ 1960s - 1980s",
        "Bắt đầu từ những năm 1990s trở đi",
        "Giai đoạn từ những năm 2000s - nay"
      ],
      correctAnswer: 1,
      explanation: "Theo giáo trình, các hệ thống dùng phương pháp xử lý tập tin (File Processing System) được sử dụng rộng rãi trong suốt những năm 60s - 80s."
    },
    {
      id: 2,
      question: "2. Hiện tượng tại cùng một thời điểm, thông tin về cùng một đối tượng có sự khác biệt giữa các tập tin khác nhau gọi là gì?",
      options: [
        "Tính dư thừa dữ liệu (Data Redundancy)",
        "Tính không nhất quán (Inconsistency)",
        "Dị thường tương tranh (Concurrency Bug)",
        "Mất tính nguyên tử (Atomicity Failure)"
      ],
      correctAnswer: 1,
      explanation: "Tính dị thường / không nhất quán (Data Inconsistency) là tình trạng tại một thời điểm, thông tin về cùng một đối tượng bị khác nhau trên các tập tin khác nhau trong cùng hệ thống."
    },
    {
      id: 3,
      question: "3. Đâu là đặc trưng cốt lõi của tính nguyên tố (Atomicity of Transactions) trong các giao tác hệ thống?",
      options: [
        "Dữ liệu được sao lưu định kỳ liên tục",
        "Hoặc thực hiện hoàn toàn, hoặc không gì",
        "Phân quyền chi tiết cho từng người dùng",
        "Cho phép nhiều ứng dụng truy cập cùng lúc"
      ],
      correctAnswer: 1,
      explanation: "Tính nguyên tố (Atomicity) yêu cầu một giao dịch hoặc phải được thực hiện hoàn toàn 100%, hoặc không thực hiện bất kỳ thao tác nào (All-or-Nothing)."
    },
    {
      id: 4,
      question: "4. Nhược điểm lớn nhất khi bổ sung một ràng buộc toàn vẹn mới trong hệ thống xử lý tập tin truyền thống là gì?",
      options: [
        "Toàn bộ thiết bị đĩa cứng phải thay mới",
        "Phải sửa lại mã nguồn của các chương trình",
        "Mất toàn bộ quyền hạn truy cập của users",
        "Tốc độ mạng nội bộ bị suy giảm đáng kể"
      ],
      correctAnswer: 1,
      explanation: "Trong hệ thống tệp, logic ràng buộc nằm lẫn trong mã lệnh ứng dụng. Khi thêm ràng buộc mới -> rất khó thay đổi chương trình ứng dụng để tuân thủ."
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
              Kiểm Tra Nhanh Kiến Thức • Phần I
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Củng Cố: Hệ Thống Tập Tin & Nhu Cầu Chuyển Đổi Sang CSDL
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
            {calculateScore() === questions.length ? "Xuất sắc! Nắm vững 100% Phần I" : "Hãy ôn lại các câu trả lời chưa đúng nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
