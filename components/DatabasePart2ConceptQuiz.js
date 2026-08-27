"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles } from "lucide-react";

export default function DatabasePart2ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Theo giáo trình, cơ sở dữ liệu (Database) được định nghĩa là gì?",
      options: [
        "Tập hợp các chương trình dùng để quản lý",
        "Tập hợp có cấu trúc của thông tin lưu trữ",
        "Thiết bị phần cứng chuyên dụng lưu trữ tin",
        "Giao diện trung gian giữa máy tính và người"
      ],
      correctAnswer: 1,
      explanation: "CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin nhằm thỏa mãn yêu cầu khai thác thông tin đồng thời cho nhiều người dùng hay nhiều chương trình ứng dụng."
    },
    {
      id: 2,
      question: "2. Trong kiến trúc 3 mức ANSI-SPARC, mức nào thể hiện cách nhìn, quan điểm của từng người sử dụng đối với CSDL?",
      options: [
        "Mức vật lý (Physical Level / Mức trong)",
        "Mức quan niệm (Conceptual Schema Level)",
        "Mức khung nhìn (View Level / Mức ngoài)",
        "Mức hệ điều hành (Operating System Level)"
      ],
      correctAnswer: 2,
      explanation: "Mức khung nhìn (View Level - mức ngoài) là cách nhìn, quan điểm của từng người sử dụng đối với CSDL mức khái niệm. Mỗi khung nhìn (View) là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm."
    },
    {
      id: 3,
      question: "3. Người có trách nhiệm cao nhất trong việc tổ chức CSDL, khai báo cấu trúc và cấp quyền hạn khai thác là ai?",
      options: [
        "Người sử dụng không chuyên (End-Users)",
        "Chuyên viên tin học (App Programmers)",
        "Người quản trị CSDL (DB Administrator)",
        "Kỹ sư bảo trì thiết bị phần cứng máy"
      ],
      correctAnswer: 2,
      explanation: "Người quản trị CSDL (Database Administrator - DBA) là người hiểu biết về tin học, về các hệ quản trị CSDL và hệ thống máy tính. DBA là người tổ chức CSDL (khai báo cấu trúc, ghi nhận yêu cầu bảo mật) và là người cấp quyền hạn khai thác CSDL."
    },
    {
      id: 4,
      question: "4. Khái niệm nào thể hiện sự hình thức hóa toán học gồm ký hiệu mô tả dữ liệu và tập hợp các phép toán ràng buộc?",
      options: [
        "Lược đồ vật lý (Physical Storage)",
        "Mô hình dữ liệu (Data Model Base)",
        "Hệ quản trị CSDL (Software DBMS)",
        "Khung nhìn người dùng (User Views)"
      ],
      correctAnswer: 1,
      explanation: "Mô hình dữ liệu (Data Model) là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; 2) Tập hợp các phép toán diễn tả ràng buộc trong dữ liệu và các phép xử lý trên dữ liệu."
    },
    {
      id: 5,
      question: "5. Trong mối quan hệ giữa Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (HQTCSDL), khẳng định nào sau đây là đúng?",
      options: [
        "CSDL là một thành phần trong HQTCSDL",
        "HQTCSDL là một thành phần trong CSDL",
        "CSDL và HQTCSDL là hai khái niệm là một",
        "CSDL là phần mềm điều khiển của HQTCSDL"
      ],
      correctAnswer: 0,
      explanation: "HQTCSDL (DBMS) là phần mềm dùng để tạo lập và xử lý dữ liệu. CSDL là MỘT THÀNH PHẦN trong HQTCSDL."
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
              Kiểm Tra Nhanh Kiến Thức • Phần II
            </span>
            <h3 className="text-lg font-extrabold text-slate-900">
              Củng Cố: CSDL, Kiến Trúc 3 Mức ANSI-SPARC & Hệ Quản Trị CSDL
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
            {calculateScore() === questions.length ? "Tuyệt vời! Bạn đã nắm chắc toàn bộ kiến thức Phần II" : "Hãy ôn lại các câu trả lời chưa đúng nhé!"}
          </span>
        </div>
      )}
    </div>
  );
}
