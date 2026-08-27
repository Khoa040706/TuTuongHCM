"use client";

import React, { useState, useEffect } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, Timer, ArrowRight, HelpCircle } from "lucide-react";

export default function DatabaseChapter6GrandMasterQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const questions = [
    {
      id: "q1",
      question: "Dị thường khi xóa (Deletion Anomaly) xảy ra trong cơ sở dữ liệu quan hệ khi nào?",
      options: [
        "Xóa một dòng dữ liệu làm vô tình làm biến mất toàn bộ thông tin quan trọng của một thực thể khác.",
        "Xóa một dòng dữ liệu khiến dung lượng của bảng bị thu hẹp đột ngột vượt quá mức cho phép trước đó.",
        "Thao tác xóa bản ghi làm thay đổi thứ tự sắp xếp vật lý của các khóa chính được lưu trữ trên ổ đĩa.",
        "Hệ thống cơ sở dữ liệu tự động từ chối mọi câu lệnh xóa khi người dùng chưa đăng nhập quản trị viên."
      ],
      correctAnswer: 0,
      explanation: "Dị thường xóa: Xóa một dòng có thể làm mất thông tin của thực thể khác (ví dụ: xóa nhân viên duy nhất tham gia lớp Luật thuế làm mất luôn thông tin về lớp Luật thuế)."
    },
    {
      id: "q2",
      question: "Trong quá trình chuẩn hóa về Dạng chuẩn 1 (1NF), phương pháp tách dọc áp dụng khi:",
      options: [
        "Thuộc tính chứa nhiều thông tin phức hợp cần được phân chia thành các cột độc lập riêng biệt.",
        "Thuộc tính chứa một tập hợp danh sách các giá trị lặp cần được phân rã thành nhiều dòng con.",
        "Bảng dữ liệu có quá nhiều khóa ngoại cần phải gom nhóm lại thành một cột kiểu cấu trúc mảng.",
        "Người dùng muốn xóa bỏ các thuộc tính không khóa để giảm bớt dung lượng của cơ sở dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "Tách dọc (Split Columns): Tách một cột phức hợp chứa nhiều thuộc tính (như tenVT gồm tên và quy cách) thành các cột riêng biệt."
    },
    {
      id: "q3",
      question: "Một quan hệ R có khóa chính K gồm hai thuộc tính. Hiện tượng nào làm cho R vi phạm 2NF?",
      options: [
        "Tồn tại ít nhất một thuộc tính không khóa chỉ phụ thuộc hàm vào một thuộc tính đơn lẻ trong K.",
        "Tồn tại hai thuộc tính không khóa tự xác định hàm lẫn nhau mà không đi qua bất kỳ khóa nào.",
        "Khóa chính K của quan hệ có thể suy dẫn ra toàn bộ tất cả các thuộc tính còn lại của bảng.",
        "Tập các thuộc tính khóa của quan hệ R chứa ít nhất một thuộc tính có kiểu dữ liệu là chuỗi."
      ],
      correctAnswer: 0,
      explanation: "Vi phạm 2NF xảy ra khi có thuộc tính không khóa phụ thuộc vào một phần của khóa (phụ thuộc bộ phận / riêng phần)."
    },
    {
      id: "q4",
      question: "Điều kiện nào sau đây đảm bảo chắc chắn quan hệ R đạt Dạng chuẩn 2 (2NF) mà không cần xét FD?",
      options: [
        "Quan hệ R đạt chuẩn 1NF và tất cả các thuộc tính của R đều là các thuộc tính khóa của bảng.",
        "Quan hệ R có số lượng thuộc tính trong bảng luôn luôn lớn hơn tổng số phụ thuộc hàm khai báo.",
        "Mọi phụ thuộc hàm trong tập F đều có vế trái chứa ít nhất hai thuộc tính nguyên tố kết hợp.",
        "Quan hệ R không chứa bất kỳ một khóa ngoại nào tham chiếu đến các bảng dữ liệu khác trong CSDL."
      ],
      correctAnswer: 0,
      explanation: "Định lý 2: Nếu tất cả các thuộc tính của R đều là thuộc tính khóa (tập không khóa rỗng) thì R tự động đạt 2NF."
    },
    {
      id: "q5",
      question: "Phụ thuộc hàm bắc cầu X → Y → A làm quan hệ R vi phạm 3NF khi thỏa mãn điều kiện nào?",
      options: [
        "X là một siêu khóa của bảng, Y không xác định lại X và A là một thuộc tính không khóa của R.",
        "X và Y đều là các thuộc tính khóa chính, trong khi thuộc tính A là một khóa ngoại tham chiếu.",
        "Y là siêu khóa của quan hệ R và A là thuộc tính khóa thuộc về một khóa dự tuyển khác của R.",
        "Vế trái X chỉ chứa đúng một thuộc tính duy nhất và vế phải A không có mặt trong bất kỳ một FD."
      ],
      correctAnswer: 0,
      explanation: "Phụ thuộc bắc cầu: X → Y và Y → A (với Y không suy ra X và A không khóa) làm quan hệ vi phạm 3NF."
    },
    {
      id: "q6",
      question: "Điểm khác biệt mấu chốt giữa Dạng chuẩn 3 (3NF) và Dạng chuẩn Boyce-Codd (BCNF) là:",
      options: [
        "3NF cho phép vế phải là thuộc tính khóa khi vế trái không là siêu khóa, còn BCNF thì cấm.",
        "BCNF chỉ áp dụng cho bảng có 2 thuộc tính, còn 3NF áp dụng cho mọi bảng dữ liệu nhiều cột.",
        "3NF luôn luôn loại bỏ được nhiều dư thừa dữ liệu hơn so với dạng chuẩn nghiêm ngặt BCNF.",
        "BCNF không yêu cầu quan hệ phải đạt chuẩn 1NF trước khi tiến hành kiểm tra các điều kiện."
      ],
      correctAnswer: 0,
      explanation: "3NF nới lỏng: FD X → A chấp nhận nếu A là thuộc tính khóa; BCNF nghiêm ngặt: X bắt buộc phải là Siêu khóa."
    },
    {
      id: "q7",
      question: "Lược đồ quan hệ R(A, B) chỉ gồm đúng hai thuộc tính đơn lẻ thì luôn luôn:",
      options: [
        "Tự động đạt dạng chuẩn Boyce-Codd (BCNF) bất kể tập phụ thuộc hàm F được khai báo thế nào.",
        "Vi phạm dạng chuẩn 2NF nếu cả hai thuộc tính A và B đều không thể tạo thành một khóa chính.",
        "Bắt buộc phải phân rã thành hai bảng con độc lập để đảm bảo không bị mất mát dữ liệu gốc.",
        "Đạt dạng chuẩn 3NF nhưng không thể đạt dạng chuẩn BCNF do thiếu thuộc tính bắc cầu trung gian."
      ],
      correctAnswer: 0,
      explanation: "Mệnh đề 1: Mọi quan hệ chỉ có 2 thuộc tính (|U| = 2) đều luôn luôn đạt BCNF!"
    },
    {
      id: "q8",
      question: "Trong thuật toán Bảng Đuổi (Chase Test), phân rã được kết luận là Lossless Join khi nào?",
      options: [
        "Khi trong quá trình biến đổi ma trận xuất hiện ít nhất một hàng chứa toàn bộ ký hiệu a.",
        "Khi tất cả các phần tử trong ma trận đều được thay thế hoàn toàn bằng các ký hiệu biến b.",
        "Khi số lượng hàng trong bảng Chase tăng lên gấp đôi so với số lượng quan hệ con ban đầu.",
        "Khi không còn bất kỳ một phụ thuộc hàm nào trong tập F có thể áp dụng lên trên bảng Chase."
      ],
      correctAnswer: 0,
      explanation: "Thuật toán Chase: Nếu có ít nhất 1 hàng đạt toàn ký hiệu a (a₁, a₂, ..., an) thì phân rã là không mất thông tin (Lossless Join)."
    },
    {
      id: "q9",
      question: "Theo định lý Delobel, phép phân rã ρ = (R₁, R₂) là kết nối không mất thông tin khi và chỉ khi:",
      options: [
        "Giao của hai quan hệ (R₁ ∩ R₂) phải xác định hàm phần bù (R₁ \\ R₂) hoặc xác định hàm (R₂ \\ R₁).",
        "Hợp của hai quan hệ (R₁ ∪ R₂) phải chứa đầy đủ tất cả các khóa ngoại tham chiếu của bảng gốc.",
        "Giao của hai quan hệ (R₁ ∩ R₂) bắt buộc phải là một tập rỗng không chứa bất kỳ thuộc tính nào.",
        "Số lượng thuộc tính của quan hệ R₁ phải bằng đúng với số lượng các thuộc tính của quan hệ R₂."
      ],
      correctAnswer: 0,
      explanation: "Định lý Delobel: ρ = (R₁, R₂) là lossless ⇔ (R₁ ∩ R₂) → (R₁ \\ R₂) HOẶC (R₁ ∩ R₂) → (R₂ \\ R₁)."
    },
    {
      id: "q10",
      question: "Khẳng định nào sau đây là hoàn toàn chính xác về định lý đánh đổi giữa 3NF và BCNF?",
      options: [
        "Phân rã 3NF luôn vừa Lossless vừa bảo toàn FD, còn phân rã BCNF có thể không bảo toàn được FD.",
        "Phân rã BCNF luôn bảo toàn được tập phụ thuộc hàm FD, trong khi phân rã 3NF luôn làm mất FD.",
        "Cả 3NF và BCNF đều không thể đảm bảo được tính chất kết nối không mất thông tin khi phân rã.",
        "Không thể phân rã bất kỳ một lược đồ quan hệ nào về dạng chuẩn 3NF nếu tập F có chứa bắc cầu."
      ],
      correctAnswer: 0,
      explanation: "Định lý Đánh đổi Vàng: 3NF luôn vừa Lossless vừa Preserve FD; BCNF luôn Lossless nhưng có thể mất phụ thuộc hàm."
    }
  ];

  useEffect(() => {
    if (!isTimerRunning || showResults) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, showResults]);

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
    setTimeLeft(600);
    setIsTimerRunning(true);
  };

  const score = calculateScore();
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Grand Master Exam: Chuẩn Hóa Cơ Sở Dữ Liệu</h3>
              <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-xs font-extrabold text-white shadow-sm">
                10 CÂU &bull; CHƯƠNG VI
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bài thi tổng lực kiểm tra toàn bộ 1NF, 2NF, 3NF, BCNF, Thuật toán Chase và Phân rã bảo toàn
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-xl bg-indigo-100/80 px-3.5 py-2 font-mono text-xs font-bold text-indigo-900 border border-indigo-200 shadow-sm">
            <Timer className="h-4 w-4 text-indigo-600 animate-pulse" />
            <span>Thời gian: {formatTime(timeLeft)}</span>
          </div>

          {showResults && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3.5 py-2 border border-emerald-300 font-mono text-xs font-bold text-emerald-900 shadow-sm">
              <Award className="h-4 w-4 text-emerald-700" />
              <span>Điểm: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)</span>
            </div>
          )}
        </div>
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
                  <span className="font-bold text-indigo-900">Giải thích chi tiết: </span>
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
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50"
          >
            <span>Nộp Bài Grand Master Exam</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white shadow hover:bg-gray-900 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại đề thi</span>
          </button>
        )}
      </div>
    </div>
  );
}
