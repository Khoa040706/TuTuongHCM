"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh4Part2ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Trong quan hệ NHANVIEN(maNV, luong, tamUng), điều kiện tamUng <= luong thuộc loại RBTV nào?",
      options: [
        "RBTV liên thuộc tính (vì có sự so sánh giá trị giữa hai cột trong cùng một bảng).",
        "RBTV miền giá trị (vì nó giới hạn số tiền mà nhân viên có thể nhận mỗi một tháng).",
        "RBTV phụ thuộc tồn tại (vì số tiền tạm ứng phụ thuộc vào sự tồn tại của nhân viên).",
        "RBTV liên bộ (vì nó kiểm tra sự chênh lệch lương giữa các nhân viên trong công ty)."
      ],
      correctAnswer: 0,
      explanation: "Giáo trình nhấn mạnh: 'tamUng <= luong' là ví dụ SAI của miền giá trị, thực chất đây là RBTV LIÊN THUỘC TÍNH vì nó ràng buộc mối liên hệ so sánh giữa 2 thuộc tính tamUng và luong trong cùng bảng NHANVIEN."
    },
    {
      id: "q2",
      question: "Khẳng định nào sau đây là chính xác về dấu hiệu K1 ⊆ K2 giữa hai quan hệ R1 và R2?",
      options: [
        "Khóa chính K1 của bảng cha R1 là tập con trong khóa chính phức hợp K2 của R2.",
        "Khóa chính K1 của bảng cha R1 hoàn toàn độc lập và không liên quan gì đến R2.",
        "Toàn bộ các dòng dữ liệu của bảng R1 bắt buộc phải được sao chép sang bảng con R2.",
        "Bảng con R2 không cần có khóa chính mà chỉ cần sử dụng khóa ngoại tham chiếu K1."
      ],
      correctAnswer: 0,
      explanation: "Dấu hiệu (1) chỉ ra rằng: Nếu khóa K1 của R1 là tập con của khóa chính phức hợp K2 của R2 (ví dụ maSV trong KET_QUA(maSV, maMH, lanThi)) thì R2 phụ thuộc tồn tại vào R1."
    },
    {
      id: "q3",
      question: "Ràng buộc về thuộc tính tổng hợp (Derived / Aggregate attribute) xuất hiện khi nào?",
      options: [
        "Khi một thuộc tính được tính toán từ các thuộc tính của các quan hệ khác trong CSDL.",
        "Khi một thuộc tính chỉ nhận giá trị số nguyên và không cho phép chứa giá trị rỗng NULL.",
        "Khi một thuộc tính được người dùng tự do nhập liệu mà không cần thông qua hệ thống kiểm tra.",
        "Khi một thuộc tính đóng vai trò là khóa chính duy nhất của một bảng cơ sở vật lý dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "RBTV về thuộc tính tổng hợp được xác định khi một thuộc tính A của một LĐQH được tính toán giá trị tổng hợp (SUM, COUNT, hiệu số...) từ các thuộc tính của các LĐQH khác (ví dụ congNo = Tổng trị giá hóa đơn - Tổng thu)."
    },
    {
      id: "q4",
      question: "Khi đồ thị CSDL xuất hiện chu trình giữa DAT_HANG, HOA_DON, CTIET_HD, quy tắc của CSDL QLHANGHOA là:",
      options: [
        "Hóa đơn chỉ giao mặt hàng đã đặt, có thể giao thiếu nhưng không bao giờ giao vượt đặt.",
        "Hóa đơn bắt buộc phải giao đầy đủ 100% tất cả mặt hàng có trong đơn đặt hàng của khách.",
        "Hóa đơn được tự do giao bất kỳ mặt hàng nào dù khách có đặt mua hay không đặt trước.",
        "Hóa đơn không được phép xuất bất kỳ mặt hàng nào cho đến khi khách đã thanh toán đủ."
      ],
      correctAnswer: 0,
      explanation: "Trong CSDL QLHANGHOA: Công ty áp dụng trường hợp 2 - Một hóa đơn thực hiện cho một đơn đặt hàng chỉ giao những mặt hàng khách đã yêu cầu, có thể không giao đầy đủ nhưng không bao giờ giao vượt yêu cầu đặt."
    },
    {
      id: "q5",
      question: "Ràng buộc 'Mỗi hóa đơn bán hàng phải có ít nhất một mặt hàng' thuộc phân loại nào?",
      options: [
        "Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa hai bảng HOA_DON và CTIET_HD).",
        "Ràng buộc toàn vẹn miền giá trị (áp đặt riêng trên cột soHD của bảng HOA_DON).",
        "Ràng buộc toàn vẹn liên thuộc tính (so sánh giữa cột ngayHD và cột trigiaHD).",
        "Ràng buộc toàn vẹn phụ thuộc hàm (xác định khóa chính đơn lẻ cho bảng CTIET_HD)."
      ],
      correctAnswer: 0,
      explanation: "Ràng buộc này tác động lên từng nhóm các bộ giữa 2 bảng khác nhau (mỗi dòng trong HOA_DON phải có ít nhất một dòng tương ứng trong CTIET_HD) -> Đây là RBTV liên bộ, liên quan hệ."
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
            <h3 className="text-lg font-bold text-gray-900">Quiz 2: RBTV 1 Quan Hệ, Đa Quan Hệ & Chu Trình Đồ Thị</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra phân loại RBTV, bẫy liên thuộc tính, phụ thuộc tồn tại và chính sách chu trình</p>
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
