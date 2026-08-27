"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Trophy } from "lucide-react";

export default function DatabaseChapter1MasterExamQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Nguyên nhân chủ yếu dẫn đến sự không nhất quán dữ liệu (Data Inconsistency) trong hệ thống tập tin là gì?",
      options: [
        "Do thiết bị đĩa cứng lưu trữ bị hỏng vật lý",
        "Do sự dư thừa dữ liệu giữa các tập tin khác",
        "Do mạng máy tính truyền dữ liệu bị gián đoạn",
        "Do người quản trị CSDL quên cấp quyền sử dụng"
      ],
      correctAnswer: 1,
      explanation: "Sự dư thừa dữ liệu (Data Redundancy) khi được lưu trữ lặp lại ở nhiều file là nguyên nhân gốc rễ gây ra sự không nhất quán khi cập nhật."
    },
    {
      id: 2,
      question: "2. Trong kiến trúc 3 mức ANSI-SPARC, mức biểu diễn trừu tượng hóa thế giới thực gần với người dùng là mức nào?",
      options: [
        "Mức vật lý của hệ thống (Physical Storage)",
        "Mức khái niệm toàn thể (Conceptual Schema)",
        "Mức khung nhìn cá nhân (User Views Level)",
        "Mức hệ điều hành phần cứng (Hardware Host)"
      ],
      correctAnswer: 1,
      explanation: "Mức khái niệm (Conceptual Level - mô hình ER) là sự trừu tượng hóa thế giới thực gần với người dùng CSDL, thể hiện toàn bộ thực thể và mối quan hệ logic."
    },
    {
      id: 3,
      question: "3. Đâu là khẳng định đúng đắn nhất về mối quan hệ giữa Cơ sở dữ liệu và Hệ quản trị CSDL?",
      options: [
        "HQTCSDL là phần mềm, CSDL là một thành phần",
        "CSDL là phần mềm, HQTCSDL là một thành phần",
        "CSDL và HQTCSDL là hai phần mềm chạy độc lập",
        "HQTCSDL và CSDL là hai tên gọi của một thiết"
      ],
      correctAnswer: 0,
      explanation: "HQTCSDL (DBMS) là phần mềm dùng để tạo lập và xử lý dữ liệu. CSDL là MỘT THÀNH PHẦN bên trong HQTCSDL."
    },
    {
      id: 4,
      question: "4. Nhóm mô hình nào sau đây thuộc nhóm Mô hình dữ liệu logic trên cơ sở đối tượng (Object-based)?",
      options: [
        "Mô hình quan hệ và mô hình phân cấp dạng cây",
        "Mô hình thực thể kết hợp và hướng đối tượng",
        "Mô hình mạng và mô hình bộ nhớ khung nhị phân",
        "Mô hình hợp nhất và mô hình quan hệ bảng k-bộ"
      ],
      correctAnswer: 1,
      explanation: "Mô hình logic trên cơ sở đối tượng gồm: Mô hình ER, Mô hình hướng đối tượng (OO), Mô hình dữ liệu ngữ nghĩa và Mô hình dữ liệu chức năng."
    },
    {
      id: 5,
      question: "5. Trong mô hình hướng đối tượng (OODM), ba đặc trưng cơ bản cốt lõi nhất của phương pháp tiếp cận này là gì?",
      options: [
        "Tính đơn giản, tính dễ dùng và tính tuần tự",
        "Tính đóng gói, tính đa hình và tính tái dùng",
        "Tính toàn vẹn, tính nguyên tử và tính phân tán",
        "Tính lưu trữ, tính phân cấp và tính phân mảnh"
      ],
      correctAnswer: 1,
      explanation: "Ba đặc trưng cơ bản của mô hình hướng đối tượng là: 1) Tính đóng gói (Encapsulation); 2) Tính đa hình (Polymorphism); 3) Tính tái sử dụng (Reusability)."
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
              Final Chapter 1 Master Exam • Kiểm Tra Tổng Hợp Toàn Chương I
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Đánh Giá Năng Lực Cốt Lõi: Tổng Quan Hệ Cơ Sở Dữ Liệu
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
        <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Award className="w-5 h-5 text-orange-600" />
            Điểm số của bạn: <span className="text-orange-700 font-mono text-base">{calculateScore()} / {questions.length}</span> câu đúng
          </div>
          <span className="text-xs text-amber-800 font-semibold font-mono">
            {calculateScore() === questions.length ? "Tuyệt vời! Bạn đã làm chủ 100% kiến thức Chương I" : "Hãy xem lại giải thích và ôn tập kỹ các câu sai nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
