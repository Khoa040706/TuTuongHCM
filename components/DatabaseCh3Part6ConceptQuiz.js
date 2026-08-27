"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh3Part6ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Khung nhìn (View) trong hệ quản trị CSDL quan hệ SQL Server có đặc điểm cốt lõi nào?",
      options: [
        "Là một bảng ảo được định nghĩa qua câu lệnh SELECT và không lưu dữ liệu thực trên đĩa.",
        "Là một bảng vật lý độc lập chiếm dung lượng bộ nhớ đĩa gấp hai lần so với bảng gốc.",
        "Tự động sao lưu toàn bộ dữ liệu của bảng gốc sang một tập tin văn bản phụ trợ khác.",
        "Chỉ có thể được tạo ra bằng ngôn ngữ DML và không cho phép thực hiện câu lệnh SELECT."
      ],
      correctAnswer: 0,
      explanation: "Khung nhìn (View) là một bảng ảo, không được lưu trữ vật lý trên đĩa cứng và không tự chứa dữ liệu thực mà được định nghĩa từ các bảng cơ sở thông qua một câu lệnh SELECT."
    },
    {
      id: "q2",
      question: "Để xóa bỏ vĩnh viễn định nghĩa của một khung nhìn có tên là NVP5, ta dùng câu lệnh nào?",
      options: [
        "DROP VIEW NVP5;",
        "DELETE VIEW NVP5;",
        "REMOVE VIEW NVP5;",
        "ALTER VIEW NVP5;"
      ],
      correctAnswer: 0,
      explanation: "Cú pháp chuẩn trong SQL để xóa một khung nhìn là: DROP VIEW <tên_khung_nhìn>."
    },
    {
      id: "q3",
      question: "Một khung nhìn (View) KHÔNG THỂ thực hiện thao tác INSERT/UPDATE khi nào?",
      options: [
        "Khi câu lệnh định nghĩa khung nhìn có chứa mệnh đề DISTINCT, GROUP BY hoặc hàm kết hợp.",
        "Khi khung nhìn được xây dựng chỉ dựa trên duy nhất một bảng cơ sở đơn lẻ trong CSDL.",
        "Khi người dùng thực hiện truy vấn bằng câu lệnh SELECT thông thường trên khung nhìn đó.",
        "Khi bảng cơ sở ban đầu có chứa các ràng buộc khóa chính và khóa ngoại toàn vẹn hợp lệ."
      ],
      correctAnswer: 0,
      explanation: "View không thể cập nhật (Not Updatable) nếu câu lệnh SELECT định nghĩa view có chứa: DISTINCT, GROUP BY, HAVING, các hàm kết hợp (SUM, COUNT, AVG...), hoặc các cột tính toán/biểu thức."
    },
    {
      id: "q4",
      question: "Mệnh đề WITH CHECK OPTION khi khai báo trong lệnh CREATE VIEW có tác dụng gì?",
      options: [
        "Đảm bảo mọi thao tác INSERT/UPDATE qua View bắt buộc phải thỏa mãn điều kiện WHERE của View.",
        "Tự động khóa toàn bộ quyền truy cập dữ liệu của tất cả người dùng khác trên bảng cơ sở.",
        "Tự động chuyển đổi các ký tự viết thường thành ký tự viết hoa trước khi ghi vào bảng đĩa.",
        "Cho phép người dùng được tự do chèn bất kỳ dòng dữ liệu nào mà không cần qua kiểm tra."
      ],
      correctAnswer: 0,
      explanation: "Mệnh đề WITH CHECK OPTION đảm bảo tính toàn vẹn: Tất cả các câu lệnh INSERT hoặc UPDATE được thực hiện thông qua view bắt buộc phải thỏa mãn điều kiện lọc trong mệnh đề WHERE của view đó (nếu vi phạm sẽ bị lỗi Msg 550)."
    },
    {
      id: "q5",
      question: "Lợi ích lớn nhất của việc sử dụng Khung nhìn (View) trong thiết kế hệ thống là:",
      options: [
        "Tăng cường tính bảo mật dữ liệu và đơn giản hóa các câu truy vấn phức tạp cho người dùng.",
        "Tăng gấp đôi tốc độ ghi dữ liệu của ổ đĩa cứng khi thực hiện câu lệnh chèn INSERT mới.",
        "Tự động loại bỏ hoàn toàn nhu cầu sử dụng các ràng buộc toàn vẹn khóa chính và khóa ngoại.",
        "Giảm dung lượng chiếm dụng bộ nhớ RAM của máy chủ cơ sở dữ liệu xuống mức bằng không (0)."
      ],
      correctAnswer: 0,
      explanation: "View giúp: 1) Bảo mật (chỉ cho phép người dùng thấy các cột/dòng được cấp quyền mà không để lộ toàn bộ bảng gốc); 2) Đơn giản hóa cấu trúc dữ liệu cho người lập trình."
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
    <div className="my-8 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/40 via-white to-blue-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 6: Trắc Nghiệm Khung Nhìn (View) & Cập Nhật Dữ Liệu</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra bản chất bảng ảo, cơ chế bảo mật và quy tắc WITH CHECK OPTION</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-sky-100 px-3.5 py-1.5 border border-sky-300">
            <Award className="h-5 w-5 text-sky-700" />
            <span className="text-xs font-bold text-sky-900">
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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 font-mono text-xs font-bold text-sky-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-sky-50/50 hover:border-sky-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-sky-500 bg-sky-100/70 font-semibold text-sky-950";
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
                  <span className="font-bold text-sky-900">Giải thích: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-sky-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-sky-700 transition-all disabled:opacity-50"
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
