"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function DatabaseCh4Part1ConceptQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Ràng buộc toàn vẹn (RBTV) trong hệ cơ sở dữ liệu quan hệ được định nghĩa là gì?",
      options: [
        "Là những điều kiện bất biến mà các đối tượng của CSDL phải thỏa mãn ở bất kỳ thời điểm nào.",
        "Là các câu lệnh lưu trữ tạm thời dùng để sao lưu dữ liệu máy chủ định kỳ vào mỗi cuối tuần.",
        "Là danh sách các chỉ mục Index được tự động tạo ra để tăng tốc độ truy vấn cho người dùng.",
        "Là các tập tin văn bản bên ngoài chứa toàn bộ mã nguồn của các câu lệnh truy vấn dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "Theo định nghĩa giáo trình: RBTV là những điều kiện bất biến mà tất cả các đối tượng của CSDL (thuộc tính, bộ, quan hệ) đều phải thỏa mãn ở bất kỳ thời điểm nào để phản ánh đúng quy tắc quản lý thực tế."
    },
    {
      id: "q2",
      question: "Một Ràng buộc toàn vẹn hoàn chỉnh bắt buộc phải bao gồm 3 yếu tố cơ bản nào?",
      options: [
        "Điều kiện (Condition), Bối cảnh (Context), Tầm ảnh hưởng (Affected operations).",
        "Khóa chính (Primary Key), Khóa ngoại (Foreign Key), Kiểu dữ liệu (Data Type).",
        "Tên bảng (Table Name), Tên cột (Column Name), Dung lượng ổ đĩa (Disk Storage).",
        "Ngôn ngữ DDL (Definition), Ngôn ngữ DML (Manipulation), Phân quyền bảo mật (DCL)."
      ],
      correctAnswer: 0,
      explanation: "Một RBTV cấu thành từ 3 yếu tố: 1) Điều kiện (Condition - nội dung quy tắc); 2) Bối cảnh (Context - quan hệ có hiệu lực); 3) Tầm ảnh hưởng (Affected operations - thời điểm kiểm tra Thêm/Xóa/Sửa)."
    },
    {
      id: "q3",
      question: "Hệ quản trị CSDL quan hệ cần kích hoạt kiểm tra RBTV tại thời điểm cốt lõi nào?",
      options: [
        "Ngay khi người dùng thực hiện một thao tác cập nhật dữ liệu (Thêm, Sửa hoặc Xóa bản ghi).",
        "Chỉ khi người dùng thực hiện câu lệnh SELECT đọc dữ liệu mà không có sửa đổi nội dung.",
        "Khi máy chủ cơ sở dữ liệu bị mất kết nối mạng Internet và chuyển sang chế độ dự phòng.",
        "Chỉ vào đúng 00:00 giờ đêm mỗi ngày khi toàn bộ hệ thống tạm ngưng hoạt động dịch vụ."
      ],
      correctAnswer: 0,
      explanation: "RBTV phải được kiểm tra ngay khi thực hiện thao tác cập nhật CSDL (Thêm, Sửa, Xóa) để ngăn chặn tức thì trạng thái không nhất quán, ngoài ra có thể kiểm tra định kỳ hoặc đột xuất."
    },
    {
      id: "q4",
      question: "Trong Bảng Tầm Ảnh Hưởng của ràng buộc khóa chính C1, vì sao cột Xóa mang dấu (-) ?",
      options: [
        "Vì xóa bớt một sinh viên không bao giờ làm phát sinh lỗi trùng mã số giữa các sinh viên.",
        "Vì thao tác xóa dữ liệu luôn tự động bị máy chủ cơ sở dữ liệu khóa quyền truy cập lại.",
        "Vì thao tác xóa chỉ áp dụng cho các cột kiểu số nguyên chứ không áp dụng cho kiểu chữ.",
        "Vì câu lệnh xóa DELETE không thể can thiệp vào các bảng đã được gán khóa chính hợp lệ."
      ],
      correctAnswer: 0,
      explanation: "Ràng buộc C1 là cấm trùng mã sinh viên. Việc xóa bớt một dòng chỉ làm giảm số lượng bản ghi, không thể làm cho hai sinh viên còn lại trong bảng bị trùng mã với nhau, do đó an toàn tuyệt đối và mang dấu (-) không cần kiểm tra."
    },
    {
      id: "q5",
      question: "Ràng buộc toàn vẹn nào sau đây có bối cảnh là NHIỀU QUAN HỆ (nhiều bảng)?",
      options: [
        "Ràng buộc khóa ngoại đảm bảo mỗi sinh viên phải thuộc về một khoa đào tạo hợp lệ có sẵn.",
        "Ràng buộc miền giá trị kiểm tra điểm số của sinh viên phải nằm trong đoạn từ 0 đến 10 điểm.",
        "Ràng buộc kiểm tra số lần thi của sinh viên không được vượt quá 2 lần trong bảng kết quả.",
        "Ràng buộc khóa chính đảm bảo mã số của từng sinh viên là duy nhất trong bảng sinh viên đó."
      ],
      correctAnswer: 0,
      explanation: "Ràng buộc 'Sinh viên phải thuộc về một khoa' (C3) liên quan đến 2 bảng: SINH_VIEN (bảng con) và KHOA (bảng cha) -> Đây là ràng buộc có bối cảnh nhiều quan hệ (Multi-relation constraint)."
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
            <h3 className="text-lg font-bold text-gray-900">Quiz 1: Khái Niệm RBTV, 3 Yếu Tố & Bảng Tầm Ảnh Hưởng</h3>
            <p className="text-xs text-gray-600">5 câu hỏi kiểm tra khái niệm bất biến, bối cảnh và nguyên lý đánh dấu (+, -, *)</p>
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
