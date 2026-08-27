"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh3Part3ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Ý nghĩa của mệnh đề WHERE trong hai câu lệnh cập nhật dữ liệu UPDATE và DELETE là gì?",
      options: [
        "Giới hạn phạm vi các bản ghi bị cập nhật hoặc bị xóa theo điều kiện logic xác định.",
        "Bắt buộc hệ thống phải xóa toàn bộ cấu trúc bảng và hoàn trả lại không gian đĩa.",
        "Tự động khôi phục lại các bản ghi dữ liệu đã bị xóa trước đó trong hệ quản trị.",
        "Sắp xếp lại thứ tự hiển thị của các cột trong bảng sau khi thực thi thao tác."
      ],
      correctAnswer: 0,
      explanation: "Mệnh đề WHERE chỉ định điều kiện lọc các dòng dữ liệu cần thao tác. Nếu quên viết mệnh đề WHERE trong câu lệnh UPDATE hoặc DELETE, toàn bộ mọi dòng dữ liệu trong bảng sẽ bị sửa hoặc bị xóa sạch!"
    },
    {
      id: "q2",
      question: "Thứ tự nhập dữ liệu chuẩn khi hai bảng có mối quan hệ khóa ngoại 1 chiều (PHONGBAN -> DEAN) là gì?",
      options: [
        "Bắt buộc nhập bảng cha PHONGBAN trước, sau đó mới nhập dữ liệu vào bảng con DEAN.",
        "Bắt buộc nhập bảng con DEAN trước, sau đó mới nhập dữ liệu vào bảng cha PHONGBAN.",
        "Có thể nhập bảng nào trước cũng được mà không cần quan tâm đến ràng buộc khóa.",
        "Bắt buộc phải xóa bảng cha trước rồi mới tiến hành nhập dữ liệu vào cả hai bảng."
      ],
      correctAnswer: 0,
      explanation: "Để đảm bảo toàn vẹn tham chiếu, giá trị ở cột khóa ngoại của bảng con (DEAN) bắt buộc phải tồn tại trước ở cột khóa chính của bảng cha (PHONGBAN). Do đó, phải nhập bảng cha trước hoặc nhập bảng con với giá trị khóa ngoại là NULL rồi cập nhật sau."
    },
    {
      id: "q3",
      question: "Để thay đổi độ dài cột tennv trong bảng NhanVien thành nvarchar(20), ta dùng câu lệnh nào?",
      options: [
        "ALTER TABLE NhanVien ALTER COLUMN tennv nvarchar(20);",
        "ALTER TABLE NhanVien CHANGE COLUMN tennv nvarchar(20);",
        "ALTER TABLE NhanVien MODIFY COLUMN tennv nvarchar(20);",
        "ALTER TABLE NhanVien UPDATE COLUMN tennv nvarchar(20);"
      ],
      correctAnswer: 0,
      explanation: "Trong chuẩn T-SQL của Microsoft SQL Server, cú pháp sửa đổi thuộc tính hoặc kiểu dữ liệu của một cột là: ALTER TABLE <tên_bảng> ALTER COLUMN <tên_cột> <kiểu_mới>."
    },
    {
      id: "q4",
      question: "Sự khác biệt mấu chốt giữa câu lệnh DELETE FROM MON và câu lệnh DROP TABLE MON là gì?",
      options: [
        "DELETE chỉ xóa toàn bộ dữ liệu bên trong, còn DROP TABLE xóa vĩnh viễn cả cấu trúc bảng.",
        "DELETE xóa vĩnh viễn cả cấu trúc bảng, còn DROP TABLE chỉ xóa các hàng dữ liệu bên trong.",
        "DELETE dùng cho bảng cha có khóa chính, còn DROP TABLE chỉ áp dụng cho bảng con khóa ngoại.",
        "DELETE không làm thay đổi dữ liệu bảng, còn DROP TABLE xóa tạm thời và có thể hoàn tác lại."
      ],
      correctAnswer: 0,
      explanation: "DELETE là câu lệnh DML chỉ xóa dữ liệu của các dòng trong bảng, khung cấu trúc bảng tạo bởi CREATE TABLE vẫn tồn tại nguyên vẹn. Trong khi DROP TABLE là câu lệnh DDL xóa vĩnh viễn toàn bộ định nghĩa bảng và giải phóng không gian bộ nhớ."
    },
    {
      id: "q5",
      question: "Để vô hiệu hóa tạm thời toàn bộ các ràng buộc trên một bảng trước khi thực hiện xóa, ta dùng lệnh gì?",
      options: [
        "ALTER TABLE <tên_bảng> NOCHECK CONSTRAINT ALL;",
        "ALTER TABLE <tên_bảng> DISABLE CONSTRAINT ALL;",
        "ALTER TABLE <tên_bảng> REMOVE CONSTRAINT ALL;",
        "ALTER TABLE <tên_bảng> DELETE CONSTRAINT ALL;"
      ],
      correctAnswer: 0,
      explanation: "Lệnh ALTER TABLE <tên_bảng> NOCHECK CONSTRAINT ALL vô hiệu hóa toàn bộ việc kiểm tra các ràng buộc (khóa ngoại, CHECK) trên bảng, giúp dễ dàng thao tác bảo trì dữ liệu hoặc xóa bảng mà không bị chặn bởi lỗi xung đột tham chiếu."
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
    <div className="my-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 3: Trắc Nghiệm DML, ALTER TABLE & DROP TABLE</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra nhanh kỹ năng cập nhật dữ liệu và quản trị cấu trúc bảng</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3.5 py-1.5 border border-emerald-300">
            <Award className="h-5 w-5 text-emerald-700" />
            <span className="text-xs font-bold text-emerald-900">
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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-xs font-bold text-emerald-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-emerald-50/50 hover:border-emerald-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-emerald-500 bg-emerald-100/70 font-semibold text-emerald-950";
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
                  <span className="font-bold text-emerald-900">Giải thích: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all disabled:opacity-50"
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
