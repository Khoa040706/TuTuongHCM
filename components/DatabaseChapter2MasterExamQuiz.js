"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles, Trophy } from "lucide-react";

export default function DatabaseChapter2MasterExamQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Trong mô hình dữ liệu quan hệ, một quan hệ r được định nghĩa chính xác theo lý thuyết tập hợp là gì?",
      options: [
        "Một tập con của tích Descartes các miền giá trị",
        "Một danh sách chứa các bảng dữ liệu vật lý riêng",
        "Một tập hợp các chương trình quản lý trong hệ thống",
        "Một cơ chế bảo mật kiểm soát quyền truy cập tệp tin"
      ],
      correctAnswer: 0,
      explanation: "Theo định nghĩa toán học: Một quan hệ r trên LĐQH R(A₁, ..., Aₙ) là một tập con của tích Descartes các miền giá trị D(A₁) × ... × D(Aₙ)."
    },
    {
      id: 2,
      question: "2. Khái niệm Khóa (Candidate Key) của một lược đồ quan hệ R được hiểu chính xác nhất là gì?",
      options: [
        "Là một siêu khóa tối thiểu của lược đồ quan hệ đó",
        "Là một tập hợp chứa tất cả mọi thuộc tính trong R",
        "Là một thuộc tính bất kỳ có kiểu dữ liệu là số nguyên",
        "Là một khóa ngoại tham chiếu đến bảng dữ liệu khác"
      ],
      correctAnswer: 0,
      explanation: "Khóa (Candidate Key / Khóa tối thiểu) là một siêu khóa sao cho mọi tập con thực sự của nó không còn là siêu khóa nữa (tối thiểu về số lượng thuộc tính)."
    },
    {
      id: 3,
      question: "3. Khẳng định nào sau đây là ĐÚNG về tính chất giao hoán của phép chọn (σ) trong đại số quan hệ?",
      options: [
        "Thứ tự thực hiện các điều kiện chọn không làm đổi kết quả",
        "Thứ tự thực hiện các điều kiện chọn luôn làm đổi kết quả",
        "Chỉ được phép thực hiện tối đa một điều kiện chọn duy nhất",
        "Phép chọn bắt buộc phải đứng trước phép tích Descartes đó"
      ],
      correctAnswer: 0,
      explanation: "Phép chọn có tính giao hoán: σ_C1(σ_C2(R)) = σ_C2(σ_C1(R)). Thứ tự áp dụng các điều kiện lọc không ảnh hưởng đến tập kết quả."
    },
    {
      id: 4,
      question: "4. Điều kiện bắt buộc để có thể thực hiện các phép toán Hợp (∪), Giao (∩) và Hiệu (−) là gì?",
      options: [
        "Hai quan hệ tham gia bắt buộc phải tương thích với nhau",
        "Hai quan hệ tham gia bắt buộc phải rời nhau về thuộc tính",
        "Hai quan hệ tham gia bắt buộc phải có cùng số lượng dòng",
        "Hai quan hệ tham gia bắt buộc phải có cùng một khóa chính"
      ],
      correctAnswer: 0,
      explanation: "Các phép toán tập hợp đại số quan hệ (Hợp, Giao, Hiệu) chỉ thực hiện được trên hai quan hệ tương thích với nhau (tức cùng chung tập thuộc tính U)."
    },
    {
      id: 5,
      question: "5. Trong các câu truy vấn đại số quan hệ, phép chia (÷) thường được sử dụng cho yêu cầu nghiệp vụ nào?",
      options: [
        "Tìm các thực thể thỏa mãn trọn vẹn toàn bộ điều kiện",
        "Tìm các thực thể chỉ thỏa mãn ít nhất một điều kiện",
        "Cắt bỏ các cột dữ liệu không cần thiết trong quan hệ",
        "Ghép nối hai bảng dữ liệu có cùng tên thuộc tính chung"
      ],
      correctAnswer: 0,
      explanation: "Phép chia đại số quan hệ (r ÷ s) tương ứng với lượng từ với mọi (∀), dùng để giải quyết các bài toán yêu cầu thỏa mãn TẤT CẢ / MỌI điều kiện trong bảng s."
    },
    {
      id: 6,
      question: "6. Khi chuyển đổi mối quan hệ cha/con (Supertype/Subtype) sang mô hình quan hệ, khóa chính của bảng con là gì?",
      options: [
        "Vừa là khóa chính đồng thời là khóa ngoại về cha",
        "Là một khóa độc lập không liên quan gì đến cha",
        "Bắt buộc phải là tổ hợp của tất cả thuộc tính con",
        "Tự động lấy thuộc tính phân loại kiểu làm khóa con"
      ],
      correctAnswer: 0,
      explanation: "Trong mô hình kế thừa cha/con (Bước 7), khóa chính của bảng con đồng thời là Khóa ngoại tham chiếu về khóa chính của bảng cha theo mối quan hệ 1:1."
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
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Master Comprehensive Exam • Kết Thúc Chương II
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Đề Kiểm Tra Tổng Hợp Toàn Diện Mô Hình Dữ Liệu Quan Hệ
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
              <CheckCircle2 className="w-4 h-4" /> Nộp bài & Xem điểm
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
        <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Award className="w-5 h-5 text-orange-600" />
            Điểm số Master Exam: <span className="text-orange-700 font-mono text-base">{calculateScore()} / {questions.length}</span> câu đúng
          </div>
          <span className="text-xs text-amber-800 font-semibold font-mono">
            {calculateScore() === questions.length ? "Xuất sắc! Bạn đã làm chủ 100% kiến thức Chương II" : "Hãy ôn lại các câu trả lời chưa đúng nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
