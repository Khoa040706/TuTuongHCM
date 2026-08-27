"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh3Part2ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Để bổ sung một giá trị mặc định cho cột Luong của bảng đã tồn tại từ trước, ta dùng cú pháp nào?",
      options: [
        "ALTER TABLE NhanVien ADD CONSTRAINT df_nv_luong DEFAULT 1000 FOR Luong;",
        "CREATE TABLE NhanVien ADD CONSTRAINT df_nv_luong DEFAULT 1000 FOR Luong;",
        "UPDATE TABLE NhanVien ADD CONSTRAINT df_nv_luong DEFAULT 1000 FOR Luong;",
        "INSERT TABLE NhanVien ADD CONSTRAINT df_nv_luong DEFAULT 1000 FOR Luong;"
      ],
      correctAnswer: 0,
      explanation: "Khi bảng đã được tạo trước đó trong CSDL, muốn sửa đổi cấu trúc (thêm/xóa cột, thêm ràng buộc DEFAULT, CHECK, FK) bắt buộc phải sử dụng câu lệnh ALTER TABLE kết hợp mệnh đề ADD CONSTRAINT ... FOR <tên_cột>."
    },
    {
      id: "q2",
      question: "Thuộc tính IDENTITY(100, 5) khi áp dụng cho một cột số nguyên trong bảng sẽ có quy luật tăng như thế nào?",
      options: [
        "Bắt đầu từ 100 và tự động tăng thêm 5 đơn vị cho mỗi bản ghi mới được chèn.",
        "Bắt đầu từ 5 và tự động tăng thêm 100 đơn vị cho mỗi bản ghi mới được chèn.",
        "Bắt đầu từ 1 và tự động tăng theo cấp số nhân 5 cho đến khi đạt mức 100 dòng.",
        "Tự động phát sinh ngẫu nhiên một số nguyên trong khoảng từ 5 đến 100 đơn vị."
      ],
      correctAnswer: 0,
      explanation: "Cú pháp IDENTITY(seed_value, increment_value) quy định: seed_value là giá trị khởi đầu (ở đây là 100), còn increment_value là bước nhảy/giá trị tăng cho mỗi dòng tiếp theo (ở đây là 5: 100, 105, 110, 115,...)."
    },
    {
      id: "q3",
      question: "Điểm khác biệt mấu chốt giữa ràng buộc PRIMARY KEY và ràng buộc UNIQUE trong SQL Server là gì?",
      options: [
        "PRIMARY KEY tuyệt đối không nhận NULL, trong khi UNIQUE cho phép nhận giá trị NULL.",
        "PRIMARY KEY chỉ áp dụng cho số nguyên, trong khi UNIQUE chỉ áp dụng cho kiểu chuỗi.",
        "PRIMARY KEY cho phép trùng lặp dữ liệu, trong khi UNIQUE bắt buộc duy nhất 100%.",
        "PRIMARY KEY có thể tạo nhiều lần trên bảng, trong khi UNIQUE chỉ tạo đúng một lần."
      ],
      correctAnswer: 0,
      explanation: "Khóa chính (PRIMARY KEY) bắt buộc phải thỏa mãn tính DUY NHẤT và KHÔNG ĐƯỢC NULL (NOT NULL). Ràng buộc UNIQUE cũng đảm bảo tính duy nhất nhưng CHO PHÉP giá trị NULL (trong SQL Server chấp nhận 1 giá trị NULL). Một bảng chỉ có 1 PRIMARY KEY nhưng có thể có nhiều UNIQUE."
    },
    {
      id: "q4",
      question: "Khi tạo ràng buộc khóa ngoại (FOREIGN KEY) tham chiếu, điều kiện tiên quyết đối với bảng cha là gì?",
      options: [
        "Cột được tham chiếu ở bảng cha bắt buộc phải là PRIMARY KEY hoặc UNIQUE.",
        "Bảng cha bắt buộc phải có ít nhất 100 bản ghi dữ liệu hợp lệ từ trước đó.",
        "Tên cột ở bảng con bắt buộc phải giống hoàn toàn 100% với tên cột bảng cha.",
        "Cột ở bảng cha bắt buộc phải được khai báo thuộc tính tự tăng IDENTITY."
      ],
      correctAnswer: 0,
      explanation: "Để đảm bảo toàn vẹn tham chiếu, cột được tham chiếu ở bảng cha (bảng 1) bắt buộc phải là Khóa chính (PRIMARY KEY) hoặc Khóa duy nhất (UNIQUE) để đảm bảo mỗi giá trị khóa ngoại ở bảng con trỏ tới duy nhất một bản ghi xác định ở bảng cha."
    },
    {
      id: "q5",
      question: "Với định nghĩa ràng buộc lanthi INT CHECK (lanthi < 3), câu lệnh nào dưới đây sẽ bị hệ thống từ chối?",
      options: [
        "Chèn giá trị lanthi = 3 hoặc 4 vì vi phạm biểu thức điều kiện logic nhỏ hơn 3.",
        "Chèn giá trị lanthi = 1 hoặc 2 vì vi phạm biểu thức điều kiện logic nhỏ hơn 3.",
        "Chèn giá trị lanthi = 0 hoặc 1 vì vi phạm biểu thức điều kiện logic nhỏ hơn 3.",
        "Chèn giá trị lanthi = 2 hoặc 1 vì vi phạm biểu thức điều kiện logic nhỏ hơn 3."
      ],
      correctAnswer: 0,
      explanation: "Biểu thức CHECK (lanthi < 3) chỉ chấp nhận các giá trị số nguyên thỏa mãn điều kiện logic nhỏ hơn 3 (như 1, 2 hoặc 0). Giá trị 3 (không thỏa mãn < 3) và 4 sẽ bị SQL Server phát hiện vi phạm và chặn chèn bản ghi ngay lập tức."
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
    <div className="my-8 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 2: Trắc Nghiệm DDL, IDENTITY & 4 Ràng Buộc</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra nhanh kỹ năng khai báo bảng và thiết lập ràng buộc T-SQL</p>
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
            <span>Nộp bài & Xem giải thích</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 shadow-sm transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại bài Quiz</span>
          </button>
        )}
      </div>
    </div>
  );
}
