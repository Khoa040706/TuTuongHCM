"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles } from "lucide-react";

export default function DatabaseCh2Part3ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Khi chuyển đổi một thuộc tính đa trị của một thực thể sang mô hình quan hệ, quy tắc chuẩn là gì?",
      options: [
        "Tách thành một quan hệ riêng có chứa khóa ngoại",
        "Giữ nguyên thuộc tính đó trong cùng quan hệ gốc",
        "Bắt buộc phải xóa bỏ hoàn toàn thuộc tính đa trị",
        "Gộp tất cả các giá trị vào trong một cột duy nhất"
      ],
      correctAnswer: 0,
      explanation: "Theo Bước 1 của quy trình chuẩn: Thuộc tính đa trị (multivalued attribute, VD: Skill*) bắt buộc phải tách thành một quan hệ riêng (EMPLOYEE_SKILL), trong đó có khóa ngoại tham chiếu về khóa chính của thực thể ban đầu."
    },
    {
      id: 2,
      question: "2. Khóa chính của một quan hệ sinh ra từ thực thể yếu (Weak Entity) được cấu thành từ các thành phần nào?",
      options: [
        "Khóa riêng phần cộng với khóa ngoại của thực thể mạnh",
        "Chỉ bao gồm khóa riêng phần của chính thực thể yếu đó",
        "Toàn bộ tất cả các thuộc tính mô tả của thực thể yếu",
        "Một mã số định danh hoàn toàn mới do hệ thống tự sinh"
      ],
      correctAnswer: 0,
      explanation: "Theo Bước 2: Thực thể yếu không tự đứng độc lập nên Khóa chính của nó là tổ hợp gồm: Khóa riêng phần (Partial Key, VD: First_Name) + Khóa ngoại của thực thể mạnh (VD: Employee_ID). Khóa ngoại này bắt buộc NOT NULL."
    },
    {
      id: 3,
      question: "3. Trong mối quan hệ hai ngôi một - nhiều (1:N), khóa ngoại được đặt ở phía nào của quan hệ?",
      options: [
        "Đặt ở phía nhiều tham chiếu về khóa chính phía một",
        "Đặt ở phía một tham chiếu về khóa chính phía nhiều",
        "Bắt buộc phải tạo một quan hệ kết hợp độc lập mới",
        "Đặt đồng thời ở cả hai quan hệ tham gia liên kết"
      ],
      correctAnswer: 0,
      explanation: "Theo Bước 3: Trong mối quan hệ 1:N (VD: CUSTOMER 'Submits' ORDER), Khóa chính ở phía 'Một' (Customer_ID) sẽ được đưa sang làm Khóa ngoại ở phía 'Nhiều' (bảng ORDER)."
    },
    {
      id: 4,
      question: "4. Khi chuyển đổi mối quan hệ cha/con (Supertype/Subtype), khóa chính của các quan hệ con có đặc điểm gì?",
      options: [
        "Vừa là khóa chính đồng thời là khóa ngoại về cha",
        "Là một khóa hoàn toàn độc lập không liên quan cha",
        "Bắt buộc phải là tổ hợp của tất cả thuộc tính con",
        "Tự động lấy thuộc tính phân loại kiểu làm khóa con"
      ],
      correctAnswer: 0,
      explanation: "Theo Bước 7: Trong mô hình kế thừa cha/con, khóa chính của các bảng con vừa đóng vai trò là Khóa chính (PK) định danh cho bảng con, vừa là Khóa ngoại (FK) tham chiếu ngược về Khóa chính của bảng cha (EMPLOYEE) theo quan hệ 1:1."
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
              Kiểm Tra Nhanh Kiến Thức • Phần III (Chương II)
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Củng Cố: 7 Bước Chuyển Đổi ERD Sang Lược Đồ Quan Hệ
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
            {calculateScore() === questions.length ? "Xuất sắc! Nắm trọn 100% 7 bước chuyển đổi ERD sang Relations" : "Hãy ôn lại các câu trả lời chưa đúng nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
