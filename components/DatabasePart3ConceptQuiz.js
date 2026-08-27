"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles } from "lucide-react";

export default function DatabasePart3ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Khái niệm nào sau đây KHÔNG PHẢI là một trong 3 thành phần cấu thành mô hình dữ liệu?",
      options: [
        "Mô tả cấu trúc dữ liệu của hệ CSDL",
        "Mô tả các thao tác xử lý trên dữ liệu",
        "Mô tả các ràng buộc toàn vẹn dữ liệu",
        "Mô tả cấu hình chi tiết phần cứng máy"
      ],
      correctAnswer: 3,
      explanation: "Mô hình dữ liệu gồm 3 thành phần: 1) Mô tả cấu trúc; 2) Mô tả thao tác/phép toán; 3) Mô tả ràng buộc toàn vẹn để đảm bảo tính chính xác của dữ liệu."
    },
    {
      id: 2,
      question: "2. Trong các mô hình sau, mô hình nào thuộc nhóm Mô hình logic trên cơ sở bản ghi (Record-based)?",
      options: [
        "Mô hình thực thể kết hợp (ER Model)",
        "Mô hình quan hệ (Relational Model)",
        "Mô hình hướng đối tượng (OO Model)",
        "Mô hình dữ liệu ngữ nghĩa (Semantic)"
      ],
      correctAnswer: 1,
      explanation: "Mô hình logic trên cơ sở bản ghi gồm 3 mô hình: Mô hình quan hệ (Relational), Mô hình mạng (Network) và Mô hình phân cấp (Hierarchical)."
    },
    {
      id: 3,
      question: "3. Trong mô hình thực thể kết hợp (ER), ký hiệu hình chữ nhật với đường viền kẻ đôi biểu diễn điều gì?",
      options: [
        "Thực thể mạnh có thể tồn tại độc lập",
        "Thực thể yếu phụ thuộc thực thể khác",
        "Thuộc tính khóa chính của một thực thể",
        "Mối kết hợp nhiều - nhiều giữa các bên"
      ],
      correctAnswer: 1,
      explanation: "Thực thể yếu (Weak Entity) có sự tồn tại phụ thuộc vào thực thể khác (VD: ThanNhan phụ thuộc NhanVien) và được ký hiệu bằng đường viền kẻ đôi."
    },
    {
      id: 4,
      question: "4. Mô hình dữ liệu biểu diễn dưới dạng cây (Tree) với quan hệ cha - con một-nhiều là mô hình nào?",
      options: [
        "Mô hình mạng (Network Data Model)",
        "Mô hình phân cấp (Hierarchical Model)",
        "Mô hình quan hệ (Relational Model)",
        "Mô hình hướng đối tượng (OOP Model)"
      ],
      correctAnswer: 1,
      explanation: "Mô hình phân cấp (Hierarchical Model) biểu diễn dữ liệu dưới dạng cấu trúc Cây (Tree), trong đó các nút cha và nút con liên hệ theo quan hệ 1-Nhiều."
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
              Kiểm Tra Nhanh Kiến Thức • Phần III
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Củng Cố: Các Mô Hình Dữ Liệu & Phân Loại Mô Hình
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
            {calculateScore() === questions.length ? "Xuất sắc! Nắm vững 100% Phần III" : "Hãy ôn lại các câu trả lời chưa đúng nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
