"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh3Part5ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Khi thực hiện phép LEFT JOIN giữa bảng NhanVien (trái) và PhongBan (phải), các dòng nhân viên chưa được phân phòng sẽ:",
      options: [
        "Vẫn xuất hiện trong kết quả và các cột của bảng PhongBan sẽ nhận giá trị NULL.",
        "Bị hệ thống tự động loại bỏ hoàn toàn khỏi bảng kết quả trả về của câu truy vấn.",
        "Tự động gán vào phòng ban đầu tiên có mã nhỏ nhất trong bảng PhongBan của CSDL.",
        "Báo lỗi vi phạm toàn vẹn tham chiếu khóa ngoại Msg 547 và dừng câu truy vấn lại."
      ],
      correctAnswer: 0,
      explanation: "LEFT JOIN giữ lại toàn bộ các hàng của bảng bên trái (NhanVien). Nếu không có hàng khớp tương ứng ở bảng bên phải, các cột của bảng bên phải sẽ được điền giá trị NULL."
    },
    {
      id: "q2",
      question: "Đặc điểm cốt lõi của phép kết nối ngoài đầy đủ (FULL OUTER JOIN) là gì?",
      options: [
        "Giữ lại toàn bộ các dòng của cả hai bảng, điền giá trị NULL cho các trường không khớp.",
        "Chỉ giữ lại các dòng có giá trị khóa ngoại khớp chính xác giữa cả hai bảng dữ liệu.",
        "Bắt buộc loại bỏ toàn bộ các dòng chứa giá trị NULL xuất hiện ở bảng bên tay trái.",
        "Tự động nhân đôi toàn bộ số lượng dòng của bảng bên trái với số dòng bảng bên phải."
      ],
      correctAnswer: 0,
      explanation: "FULL OUTER JOIN kết hợp kết quả của cả LEFT JOIN và RIGHT JOIN: giữ lại toàn bộ dòng của cả 2 bảng và điền NULL vào các cột không tìm thấy đối tác ghép nối tương ứng."
    },
    {
      id: "q3",
      question: "Truy vấn lồng phân cấp (Uncorrelated Subquery) khác với truy vấn lồng tương quan ở điểm nào?",
      options: [
        "Truy vấn con độc lập và chỉ thực thi 1 lần duy nhất trước khi truy vấn cha chạy.",
        "Truy vấn con phải thực thi lặp lại nhiều lần cho từng dòng dữ liệu của truy vấn cha.",
        "Truy vấn con bắt buộc phải luôn đi kèm với toán tử kiểm tra sự tồn tại EXISTS.",
        "Truy vấn con chỉ được phép trả về kết quả là một giá trị đơn lẻ kiểu số nguyên."
      ],
      correctAnswer: 0,
      explanation: "Trong truy vấn lồng phân cấp, mệnh đề WHERE của con KHÔNG tham chiếu tới cột của cha, do đó con được thực hiện độc lập duy nhất 1 lần trước để sinh ra tập giá trị cho cha."
    },
    {
      id: "q4",
      question: "Toán tử EXISTS trong câu truy vấn lồng tương quan trả về giá trị gì?",
      options: [
        "Trả về giá trị logic TRUE nếu truy vấn con tìm thấy ít nhất một dòng dữ liệu thỏa mãn.",
        "Trả về tổng số lượng dòng dữ liệu tìm thấy được bên trong câu truy vấn con bên dưới.",
        "Trả về giá trị trung bình cộng của tất cả các cột kiểu số nguyên ở trong bảng con.",
        "Trả về danh sách chuỗi ký tự chứa tên các thuộc tính xuất hiện trong mệnh đề SELECT."
      ],
      correctAnswer: 0,
      explanation: "Toán tử EXISTS chỉ kiểm tra sự tồn tại của dữ liệu (trả về TRUE nếu có ít nhất 1 dòng kết quả, ngược lại trả về FALSE). Không yêu cầu trả về giá trị cụ thể của các cột."
    },
    {
      id: "q5",
      question: "Trong câu truy vấn có gom nhóm GROUP BY, các cột xuất hiện ở mệnh đề SELECT phải thỏa mãn điều kiện gì?",
      options: [
        "Bắt buộc phải có mặt trong mệnh đề GROUP BY (trừ các cột được đặt trong hàm kết hợp).",
        "Bắt buộc phải là các cột khóa chính của bảng dữ liệu tham gia vào câu lệnh truy vấn.",
        "Tuyệt đối không được trùng tên với bất kỳ cột nào xuất hiện trong mệnh đề GROUP BY.",
        "Phải có kiểu dữ liệu là số nguyên và không được phép chứa các giá trị mang mã NULL."
      ],
      correctAnswer: 0,
      explanation: "Quy tắc ngữ nghĩa SQL bắt buộc: Mọi cột xuất hiện trong mệnh đề SELECT (nếu không nằm trong các hàm kết hợp như SUM, COUNT, AVG...) bắt buộc phải được khai báo trong mệnh đề GROUP BY."
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
    <div className="my-8 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 5: Trắc Nghiệm Phép JOIN & Truy Vấn Lồng (IN/EXISTS)</h3>
            <p className="text-xs text-gray-600">5 câu hỏi phân biệt kết nối bảng và cơ chế hoạt động của truy vấn con</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-cyan-100 px-3.5 py-1.5 border border-cyan-300">
            <Award className="h-5 w-5 text-cyan-700" />
            <span className="text-xs font-bold text-cyan-900">
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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-mono text-xs font-bold text-cyan-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-cyan-50/50 hover:border-cyan-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-cyan-500 bg-cyan-100/70 font-semibold text-cyan-950";
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
                  <span className="font-bold text-cyan-900">Giải thích: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-cyan-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cyan-700 transition-all disabled:opacity-50"
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
