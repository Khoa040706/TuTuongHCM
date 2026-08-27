"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh3Part4ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Từ khóa DISTINCT đặt ngay sau mệnh đề SELECT có tác dụng gì trong câu truy vấn?",
      options: [
        "Tự động loại bỏ hoàn toàn các dòng có giá trị trùng lặp trong bảng kết quả trả về.",
        "Tự động sắp xếp lại thứ tự các dòng dữ liệu theo chiều tăng dần của cột khóa chính.",
        "Tự động xóa vĩnh viễn các bản ghi trùng lặp khỏi bảng cơ sở dữ liệu trên đĩa cứng.",
        "Tự động chuyển đổi các giá trị mang mã NULL thành giá trị số nguyên bằng không (0)."
      ],
      correctAnswer: 0,
      explanation: "Từ khóa DISTINCT chỉ định rằng hệ quản trị CSDL sẽ loại bỏ các hàng trùng lặp trong tập kết quả trả về của câu lệnh SELECT."
    },
    {
      id: "q2",
      question: "Điều kiện WHERE luong BETWEEN 20000 AND 30000 tương đương với biểu thức logic nào?",
      options: [
        "WHERE luong >= 20000 AND luong <= 30000",
        "WHERE luong > 20000 AND luong < 30000",
        "WHERE luong >= 20000 OR luong <= 30000",
        "WHERE luong = 20000 OR luong = 30000"
      ],
      correctAnswer: 0,
      explanation: "Toán tử BETWEEN ... AND ... trong SQL bao gồm cả 2 giá trị đầu mút (mang tính chất đoạn đóng [a, b]), tương đương với: luong >= 20000 AND luong <= 30000."
    },
    {
      id: "q3",
      question: "Trong câu lệnh LIKE, ký tự đại diện _ (dấu gạch dưới) mang ý nghĩa gì?",
      options: [
        "Đại diện cho đúng 1 ký tự đơn duy nhất tại vị trí được chỉ định trong chuỗi.",
        "Đại diện cho một chuỗi ký tự bất kỳ với độ dài tùy ý (kể cả độ dài rỗng).",
        "Đại diện cho một ký tự số nguyên bất kỳ nằm trong khoảng từ số 0 đến số 9.",
        "Đại diện cho một khoảng trắng dấu cách phân tách giữa hai từ trong văn bản."
      ],
      correctAnswer: 0,
      explanation: "Ký tự gạch dưới '_' đại diện cho chính xác 1 ký tự đơn bất kỳ, trong khi ký tự '%' đại diện cho chuỗi ký tự bất kỳ có độ dài từ 0 trở lên."
    },
    {
      id: "q4",
      question: "Điều kiện WHERE hoten LIKE '[^A-C]%' sẽ chọn ra những sinh viên nào?",
      options: [
        "Các sinh viên có chữ cái đầu tiên của họ KHÔNG nằm trong giới hạn từ A đến C.",
        "Các sinh viên có chữ cái đầu tiên của họ bắt buộc phải là một trong các chữ A, B, C.",
        "Các sinh viên có họ chứa đúng 3 ký tự và kết thúc bằng một trong các chữ A, B, C.",
        "Các sinh viên có chữ cái cuối cùng của họ KHÔNG nằm trong khoảng từ A đến C."
      ],
      correctAnswer: 0,
      explanation: "Cú pháp '[^...]' trong LIKE dùng để loại trừ: [^A-C]% có nghĩa là ký tự đầu tiên không được là A, B, hoặc C, theo sau bởi chuỗi ký tự bất kỳ (%)."
    },
    {
      id: "q5",
      question: "Khi viết ORDER BY manv DESC, soda, thứ tự sắp xếp của hai cột sẽ như thế nào?",
      options: [
        "Cột manv được sắp giảm dần (DESC), cột soda được sắp tăng dần (mặc định ASC).",
        "Cột manv được sắp tăng dần (ASC), cột soda được sắp giảm dần (mặc định DESC).",
        "Cả hai cột manv và soda đều được sắp xếp theo chiều giảm dần từ lớn đến bé.",
        "Cả hai cột manv và soda đều được sắp xếp theo chiều tăng dần từ bé đến lớn."
      ],
      correctAnswer: 0,
      explanation: "Mỗi cột trong ORDER BY có thể chỉ định quy tắc sắp xếp riêng. Khi không viết từ khóa sau tên cột 'soda', hệ thống sẽ áp dụng mặc định là sắp tăng dần (ASC)."
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
    <div className="my-8 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 4: Trắc Nghiệm SELECT Cơ Bản, LIKE & ORDER BY</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra độ hiểu sâu về các mệnh đề lọc và sắp xếp dữ liệu</p>
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
