"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh3Part1ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Sự khác biệt cốt lõi về mặt dung lượng lưu trữ giữa char(20) và varchar(20) trong CSDL là gì?",
      options: [
        "char(20) luôn cấp phát đủ 20 bytes, varchar(20) co giãn theo số ký tự nhập thực tế.",
        "char(20) co giãn theo chuỗi ký tự, varchar(20) luôn cấp phát cố định đúng 20 bytes.",
        "char(20) hỗ trợ tiếng Việt Unicode, varchar(20) chỉ lưu các ký tự chuẩn ASCII đơn.",
        "char(20) lưu chuỗi độ dài biến thiên, varchar(20) lưu chuỗi có độ dài hoàn toàn cố định."
      ],
      correctAnswer: 0,
      explanation: "char(n) là chuỗi ký tự kích thước cố định (Fixed-length), luôn chiếm n bytes (phần thừa bù bằng khoảng trắng). Trong khi varchar(n) là chuỗi ký tự có độ dài thay đổi (Variable-length), chỉ chiếm số bytes bằng đúng độ dài chuỗi nhập + 2 bytes overhead quản lý."
    },
    {
      id: "q2",
      question: "Khi cần lưu trữ số điện thoại di động tại Việt Nam (10 chữ số, bắt đầu bằng 0), kiểu dữ liệu nào tối ưu nhất?",
      options: [
        "char(10) vì số điện thoại có độ dài cố định 10 chữ số và bảo toàn số 0 ở đầu tiên.",
        "int vì số điện thoại là tập hợp các chữ số nên cần lưu dưới dạng số nguyên 4 byte.",
        "varchar(50) vì cần dành nhiều dung lượng dự phòng khi số điện thoại thay đổi cấu trúc.",
        "float vì hỗ trợ lưu trữ số có giá trị cực lớn và tránh được lỗi tràn số trong bảng."
      ],
      correctAnswer: 0,
      explanation: "Số điện thoại có độ dài cố định đúng 10 ký tự và không dùng để tính toán cộng trừ. Nếu dùng kiểu số (int, float), số 0 ở đầu (ví dụ 0901234567) sẽ bị mất thành 901234567. Dùng char(10) là tối ưu nhất cả về hiệu năng lẫn bảo toàn định dạng."
    },
    {
      id: "q3",
      question: "Kiểu dữ liệu tinyint trong hệ quản trị CSDL SQL Server có thể lưu trữ được giá trị nào sau đây?",
      options: [
        "Giá trị số nguyên dương 250 (nằm trọn vẹn trong khoảng cho phép từ 0 đến 255).",
        "Giá trị số nguyên âm -15 (nằm trọn vẹn trong khoảng cho phép từ 0 đến 255).",
        "Giá trị số nguyên dương 300 (nằm trọn vẹn trong khoảng cho phép từ 0 đến 255).",
        "Giá trị số nguyên âm -128 (nằm trọn vẹn trong khoảng cho phép từ 0 đến 255)."
      ],
      correctAnswer: 0,
      explanation: "Kiểu tinyint chiếm 1 byte (8 bits không dấu) trong SQL Server, có dải giá trị giới hạn chính xác từ 0 đến 255. Bất kỳ giá trị âm nào (< 0) hoặc lớn hơn 255 đều gây ra lỗi tràn số (Arithmetic overflow error)."
    },
    {
      id: "q4",
      question: "Để lưu trữ cột họ và tên tiếng Việt có dấu đúng chuẩn Unicode, lập trình viên bắt buộc phải dùng kiểu gì?",
      options: [
        "Kiểu nvarchar(50) kết hợp chèn dữ liệu với tiền tố chuẩn N'...'.",
        "Kiểu varchar(50) kết hợp chèn dữ liệu với tiền tố chuẩn N'...'.",
        "Kiểu char(50) kết hợp chèn dữ liệu trực tiếp không cần tiền tố N'.",
        "Kiểu text kết hợp chèn dữ liệu trực tiếp không cần tiền tố N'...'."
      ],
      correctAnswer: 0,
      explanation: "Các kiểu dữ liệu có tiền tố 'n' (nchar, nvarchar, ntext) sử dụng bảng mã Unicode UTF-16 (2 bytes cho mỗi ký tự). Để SQL Server hiểu chuỗi truyền vào là Unicode, cần dùng kiểu nvarchar kết hợp tiền tố N'...' trong câu lệnh INSERT/UPDATE."
    },
    {
      id: "q5",
      question: "Đặc điểm kỹ thuật nào sau đây mô tả chính xác nhất về bản chất của kiểu dữ liệu smalldatetime?",
      options: [
        "Chiếm dụng 4 bytes bộ nhớ và lưu trữ ngày giờ với độ chính xác đến phút.",
        "Chiếm dụng 8 bytes bộ nhớ và lưu trữ ngày giờ với độ chính xác đến phút.",
        "Chiếm dụng 4 bytes bộ nhớ và lưu trữ ngày giờ chính xác đến mili-giây.",
        "Chiếm dụng 8 bytes bộ nhớ và lưu trữ ngày giờ chính xác đến mili-giây."
      ],
      correctAnswer: 0,
      explanation: "smalldatetime chiếm 4 bytes (gồm 2 số nguyên 2-byte), phạm vi từ 01/01/1900 đến 06/06/2079 với độ chính xác đến phút (giây luôn làm tròn về 00). Kiểu datetime chiếm 8 bytes và chính xác đến 3.33 mili-giây."
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
    <div className="my-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quiz 1: Trắc Nghiệm Chuyên Sâu Kiểu Dữ Liệu SQL</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra nhanh kiến thức về bộ nhớ và dải giá trị T-SQL</p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-amber-100 px-3.5 py-1.5 border border-amber-300">
            <Award className="h-5 w-5 text-amber-700" />
            <span className="text-xs font-bold text-amber-900">
              Kết quả: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = selectedAnswers[q.id];
          const isAnswered = userAnswer !== undefined;

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
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 font-mono text-xs font-bold text-amber-800">
                  {qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
              </div>

              <div className="mt-3.5 grid gap-2">
                {q.options.map((opt, optIdx) => {
                  let btnStyle = "border-gray-200 bg-gray-50/60 hover:bg-amber-50/50 hover:border-amber-300 text-gray-700";

                  if (userAnswer === optIdx) {
                    btnStyle = "border-amber-500 bg-amber-100/70 font-semibold text-amber-950";
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
                  <span className="font-bold text-amber-900">Giải thích: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-amber-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-amber-700 transition-all disabled:opacity-50"
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
