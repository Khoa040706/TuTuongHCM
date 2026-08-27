"use client";
import React, { useState } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, ArrowRight, BookOpen, Terminal, Sparkles } from "lucide-react";

export default function DatabaseChapter3GrandMasterExamQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Trong hệ thống T-SQL, nhóm lệnh nào chuyên dùng để thao tác và cập nhật dữ liệu?",
      options: [
        "Nhóm ngôn ngữ DML (bao gồm các câu lệnh SELECT, INSERT, UPDATE và DELETE).",
        "Nhóm ngôn ngữ DDL (bao gồm các câu lệnh CREATE, ALTER, DROP và TRUNCATE).",
        "Nhóm ngôn ngữ DCL (bao gồm các câu lệnh GRANT, REVOKE và DENY bảo mật).",
        "Nhóm ngôn ngữ TCL (bao gồm các câu lệnh COMMIT, ROLLBACK và SAVEPOINT)."
      ],
      correctAnswer: 0,
      explanation: "DML (Data Manipulation Language) là nhóm ngôn ngữ thao tác dữ liệu, phục vụ việc truy vấn và thay đổi dữ liệu bên trong các bảng."
    },
    {
      id: "q2",
      question: "Để lưu trữ văn bản tiếng Việt có dấu với độ dài thay đổi, kiểu dữ liệu tối ưu nhất là:",
      options: [
        "nvarchar(n) (hỗ trợ bảng mã quốc tế Unicode UTF-16, độ dài động tiết kiệm).",
        "varchar(n) (chỉ hỗ trợ bảng mã chuẩn ASCII đơn, độ dài động tiết kiệm đĩa).",
        "nchar(n) (hỗ trợ bảng mã quốc tế Unicode UTF-16, cấp phát cố định ô nhớ).",
        "char(n) (chỉ hỗ trợ bảng mã chuẩn ASCII đơn, cấp phát cố định các ô nhớ)."
      ],
      correctAnswer: 0,
      explanation: "nvarchar(n) là kiểu chuỗi ký tự Unicode có độ dài biến đổi linh hoạt theo số ký tự thực tế nhập vào, vừa hỗ trợ tiếng Việt có dấu hoàn hảo vừa tiết kiệm dung lượng đĩa."
    },
    {
      id: "q3",
      question: "Khóa chính (PRIMARY KEY) và Khóa duy nhất (UNIQUE) khác nhau căn bản ở điểm nào?",
      options: [
        "Khóa chính tuyệt đối cấm NULL, còn khóa duy nhất cho phép nhận một giá trị NULL.",
        "Khóa chính cho phép nhận nhiều giá trị NULL, còn khóa duy nhất tuyệt đối cấm.",
        "Khóa chính chỉ áp dụng cho kiểu số, còn khóa duy nhất chỉ áp dụng cho kiểu chữ.",
        "Khóa chính không tạo chỉ mục Index, còn khóa duy nhất luôn tự động tạo Index."
      ],
      correctAnswer: 0,
      explanation: "PRIMARY KEY bắt buộc không được chứa NULL (NOT NULL + UNIQUE). Trong khi đó, ràng buộc UNIQUE cho phép chứa 1 giá trị NULL trong SQL Server."
    },
    {
      id: "q4",
      question: "Khi hai bảng có quan hệ tham chiếu chéo 2 chiều (NHANVIEN <-> PHONGBAN), giải pháp là:",
      options: [
        "Chèn bảng NHANVIEN với phong = NULL trước, sau đó chèn PHONGBAN rồi UPDATE lại.",
        "Bắt buộc xóa cả hai bảng trước rồi dùng câu lệnh CREATE TABLE chèn lại từ đầu.",
        "Chèn đồng thời cả hai bảng trong cùng một câu lệnh INSERT VALUES duy nhất được.",
        "Tắt hoàn toàn máy chủ SQL Server và chèn thủ công trực tiếp vào file MDF đĩa."
      ],
      correctAnswer: 0,
      explanation: "Gán giá trị NULL cho một trong hai khóa ngoại khi chèn dòng đầu tiên, sau khi bảng kia có dữ liệu thì dùng lệnh UPDATE cập nhật lại khóa ngoại đó."
    },
    {
      id: "q5",
      question: "Điều kiện WHERE tenhang LIKE 'Áo %' sẽ chọn ra những mặt hàng nào trong bảng?",
      options: [
        "Các mặt hàng có tên bắt đầu bằng từ 'Áo ' theo sau bởi chuỗi ký tự bất kỳ nào.",
        "Các mặt hàng có tên kết thúc bằng từ 'Áo ' và phía trước là chuỗi ký tự bất kỳ.",
        "Các mặt hàng có tên chứa đúng 3 ký tự và chữ cái đầu tiên bắt buộc phải là 'Á'.",
        "Các mặt hàng có tên chứa từ 'Áo ' xuất hiện tại vị trí chính giữa của chuỗi."
      ],
      correctAnswer: 0,
      explanation: "Ký tự đại diện '%' đứng sau từ 'Áo ' đại diện cho bất kỳ chuỗi ký tự nào tiếp nối sau đó, tức là chọn các mặt hàng có tên bắt đầu bằng 'Áo '."
    },
    {
      id: "q6",
      question: "Phép kết nối LEFT JOIN giữa bảng A (bên trái) và bảng B (bên phải) sẽ làm gì?",
      options: [
        "Giữ toàn bộ các dòng của bảng A, điền NULL cho các cột của B nếu không có khớp.",
        "Giữ toàn bộ các dòng của bảng B, điền NULL cho các cột của A nếu không có khớp.",
        "Chỉ giữ lại các dòng có giá trị khóa ngoại trùng khớp chính xác giữa cả A và B.",
        "Nhân toàn bộ số lượng dòng của bảng A với toàn bộ số lượng dòng của bảng B đĩa."
      ],
      correctAnswer: 0,
      explanation: "LEFT JOIN bảo toàn 100% các dòng của bảng nguồn bên trái (A). Nếu dòng của A không tìm thấy bản ghi tương ứng ở B thì các trường của B sẽ nhận giá trị NULL."
    },
    {
      id: "q7",
      question: "Trong truy vấn lồng tương quan, câu truy vấn con bên dưới sẽ được thực thi:",
      options: [
        "Lặp lại nhiều lần, mỗi lần tương ứng với một dòng dữ liệu của truy vấn cha.",
        "Chỉ một lần duy nhất trước khi câu truy vấn cha bên trên bắt đầu thực hiện.",
        "Đúng hai lần cho dòng đầu tiên và dòng cuối cùng của bảng dữ liệu cha ngoài.",
        "Khi máy chủ cơ sở dữ liệu khởi động lại và lưu tạm vào bộ nhớ đệm Buffer."
      ],
      correctAnswer: 0,
      explanation: "Truy vấn lồng tương quan (Correlated Subquery) có mệnh đề WHERE phụ thuộc vào từng bộ của truy vấn cha, do đó nó phải thực thi lặp lại một lần cho mỗi hàng của cha."
    },
    {
      id: "q8",
      question: "Để lọc ra các phòng ban có tổng tiền lương của nhân viên lớn hơn 50.000, ta dùng:",
      options: [
        "Mệnh đề HAVING SUM(luong) > 50000 (được thực hiện sau khi đã gom nhóm lại).",
        "Mệnh đề WHERE SUM(luong) > 50000 (được thực hiện trước khi gom nhóm lại).",
        "Mệnh đề ORDER BY SUM(luong) > 50000 (được thực hiện khi sắp xếp dữ liệu).",
        "Mệnh đề DISTINCT SUM(luong) > 50000 (được thực hiện khi khử các dòng lặp)."
      ],
      correctAnswer: 0,
      explanation: "Hàm kết hợp (SUM, AVG, COUNT...) không được phép đứng trong mệnh đề WHERE mà phải sử dụng mệnh đề HAVING để lọc trên nhóm sau khi GROUP BY."
    },
    {
      id: "q9",
      question: "Khẳng định nào sau đây là hoàn toàn ĐÚNG về bản chất của Khung nhìn (View)?",
      options: [
        "View là bảng ảo không chiếm bộ nhớ đĩa, dữ liệu được sinh động từ câu lệnh SELECT.",
        "View là bảng vật lý lưu trữ dữ liệu riêng biệt và tự đồng bộ mỗi ngày một lần.",
        "Mọi khung nhìn View trong SQL Server đều cho phép thực hiện lệnh INSERT tùy ý.",
        "View tự động thay thế hoàn toàn nhu cầu sử dụng các câu lệnh truy vấn SELECT."
      ],
      correctAnswer: 0,
      explanation: "Khung nhìn (View) là một bảng ảo (Virtual Table), không chiếm dụng không gian lưu trữ dữ liệu trên đĩa và luôn phản ánh dữ liệu mới nhất từ bảng gốc qua câu lệnh SELECT định nghĩa nó."
    },
    {
      id: "q10",
      question: "Khi thực hiện Self-Join trên bảng KHACHHANG để tìm cặp khách hàng cùng ngày sinh, ta nên dùng:",
      options: [
        "Điều kiện kh1.makh < kh2.makh để loại trừ cặp trùng lặp đảo vị trí (A,B) và (B,A).",
        "Điều kiện kh1.makh = kh2.makh để hệ thống tự động ghép khách hàng với chính họ.",
        "Điều kiện kh1.makh > kh2.makh kết hợp kh1.makh < kh2.makh bằng toán tử AND.",
        "Không cần điều kiện mã khách hàng vì hệ thống tự nhận biết các cặp trùng nhau."
      ],
      correctAnswer: 0,
      explanation: "Dùng toán tử '<' trong Self-Join vừa loại bỏ việc tự ghép cặp (A với A), vừa loại bỏ việc in lặp lại hai lần cặp đảo chiều (A,B) và (B,A)."
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
    <div className="my-8 rounded-2xl border border-indigo-400 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 p-6 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">
                Grand Master Exam: Đề Kiểm Tra Toàn Diện Toàn Bộ Chương III (T-SQL)
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800 border border-indigo-300">
                10 Câu Trắc Nghiệm Tổng Hợp
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Đề thi tổng hợp bao quát trọn vẹn: Kiểu dữ liệu, DDL, DML, DQL (JOIN, Subquery, GROUP BY), Khung nhìn View & Bài tập QLBanHang
            </p>
          </div>
        </div>

        {showResults && (
          <div className="flex items-center gap-2 rounded-xl bg-indigo-100 px-4 py-2 border border-indigo-300">
            <Award className="h-5 w-5 text-indigo-700" />
            <span className="text-sm font-bold text-indigo-950">
              Điểm số: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
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

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-indigo-200 pt-4">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50"
          >
            <span>Nộp Bài Thi Grand Master Exam & Xem Kết Quả</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 shadow-sm transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại Grand Master Exam</span>
          </button>
        )}
      </div>
    </div>
  );
}
