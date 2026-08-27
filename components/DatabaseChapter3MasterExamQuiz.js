"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, BookOpen, Clock, AlertTriangle } from "lucide-react";

export default function DatabaseChapter3MasterExamQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Trong hệ quản trị CSDL SQL Server, nhóm ngôn ngữ DDL bao gồm tập hợp các câu lệnh nào?",
      options: [
        "Các câu lệnh CREATE, ALTER, DROP dùng để định nghĩa cấu trúc đối tượng trong CSDL.",
        "Các câu lệnh SELECT, INSERT, UPDATE dùng để thao tác và cập nhật dữ liệu bên trong.",
        "Các câu lệnh GRANT, REVOKE, DENY dùng để phân quyền bảo mật cho người dùng hệ thống.",
        "Các câu lệnh COMMIT, ROLLBACK, SAVEPOINT dùng để kiểm soát giao dịch trong ứng dụng."
      ],
      correctAnswer: 0,
      explanation: "DDL (Data Definition Language) bao gồm các câu lệnh định nghĩa cấu trúc cơ sở dữ liệu như CREATE (tạo mới), ALTER (chỉnh sửa cấu trúc) và DROP (xóa đối tượng)."
    },
    {
      id: "q2",
      question: "Kiểu dữ liệu nào dưới đây chiếm dụng 1 byte bộ nhớ và chỉ nhận giá trị từ 0 đến 255?",
      options: [
        "Kiểu tinyint trong SQL Server (chuyên dùng cho mã trạng thái hoặc số nguyên cực nhỏ).",
        "Kiểu smallint trong SQL Server (chuyên dùng cho mã trạng thái hoặc số nguyên cực nhỏ).",
        "Kiểu bigint trong SQL Server (chuyên dùng cho mã trạng thái hoặc số nguyên cực nhỏ).",
        "Kiểu numeric trong SQL Server (chuyên dùng cho mã trạng thái hoặc số nguyên cực nhỏ)."
      ],
      correctAnswer: 0,
      explanation: "tinyint là kiểu số nguyên 1 byte (8-bit không dấu) với dải giá trị từ 0 đến 255. smallint chiếm 2 bytes, int chiếm 4 bytes và bigint chiếm 8 bytes."
    },
    {
      id: "q3",
      question: "Điểm khác biệt cơ bản giữa kiểu dữ liệu varchar(50) và nvarchar(50) là gì?",
      options: [
        "nvarchar(50) hỗ trợ bảng mã Unicode UTF-16, varchar(50) chỉ hỗ trợ chuẩn ASCII.",
        "nvarchar(50) luôn cấp phát cố định 50 bytes, varchar(50) co giãn theo số ký tự.",
        "nvarchar(50) chỉ lưu các ký tự số nguyên, varchar(50) lưu trữ các chuỗi văn bản.",
        "nvarchar(50) chiếm ít dung lượng đĩa hơn, varchar(50) chiếm dung lượng gấp 2 lần."
      ],
      correctAnswer: 0,
      explanation: "Kiểu có tiền tố 'n' (nchar, nvarchar, ntext) hỗ trợ bảng mã chuẩn quốc tế Unicode UTF-16 (2 bytes/ký tự), giúp lưu tiếng Việt có dấu trọn vẹn khi có tiền tố N'...'. varchar chỉ lưu chuỗi Non-Unicode (1 byte/ký tự)."
    },
    {
      id: "q4",
      question: "Khi khai báo cột MaNV INT IDENTITY(10, 2), giá trị của 2 nhân viên được chèn đầu tiên là:",
      options: [
        "Nhân viên thứ nhất có MaNV = 10, nhân viên thứ hai tiếp theo sẽ có MaNV = 12.",
        "Nhân viên thứ nhất có MaNV = 2, nhân viên thứ hai tiếp theo sẽ có MaNV = 12.",
        "Nhân viên thứ nhất có MaNV = 10, nhân viên thứ hai tiếp theo sẽ có MaNV = 20.",
        "Nhân viên thứ nhất có MaNV = 1, nhân viên thứ hai tiếp theo sẽ có MaNV = 2."
      ],
      correctAnswer: 0,
      explanation: "Cú pháp IDENTITY(seed, increment): seed = 10 (giá trị khởi đầu cho dòng đầu tiên), increment = 2 (bước tăng thêm 2 đơn vị cho mỗi dòng tiếp theo: 10, 12, 14, 16,...)."
    },
    {
      id: "q5",
      question: "Khẳng định nào sau đây là hoàn toàn ĐÚNG về ràng buộc Khóa chính (PRIMARY KEY)?",
      options: [
        "Bắt buộc giá trị trong cột phải duy nhất và tuyệt đối không được phép chứa giá trị NULL.",
        "Cho phép các giá trị bị trùng lặp thoải mái và có thể nhận tối đa 5 giá trị mang mã NULL.",
        "Một bảng cơ sở dữ liệu có thể chứa đồng thời nhiều khóa chính khác nhau trên các cột đơn.",
        "Khóa chính chỉ có thể áp dụng cho các kiểu dữ liệu số nguyên, không hỗ trợ kiểu chuỗi ký tự."
      ],
      correctAnswer: 0,
      explanation: "Khóa chính (PRIMARY KEY) đảm bảo toàn vẹn thực thể, bắt buộc giá trị của mỗi hàng phải là DUY NHẤT và KHÔNG ĐƯỢC PHÉP NULL. Một bảng chỉ có duy nhất 1 PRIMARY KEY (có thể là khóa đơn hoặc khóa phức hợp)."
    },
    {
      id: "q6",
      question: "Ràng buộc lanthi INT CHECK (lanthi < 3) sẽ từ chối giá trị nào khi chèn vào bảng?",
      options: [
        "Từ chối chèn các giá trị số nguyên lớn hơn hoặc bằng 3 (chẳng hạn như 3 hoặc 4).",
        "Từ chối chèn các giá trị số nguyên nhỏ hơn 3 (chẳng hạn như giá trị 1 hoặc 2).",
        "Từ chối chèn toàn bộ các giá trị số nguyên dương khi thực hiện lệnh INSERT mới.",
        "Từ chối chèn các giá trị là số chẵn và chỉ chấp nhận các giá trị là số lẻ đơn."
      ],
      correctAnswer: 0,
      explanation: "Điều kiện CHECK (lanthi < 3) chỉ chấp nhận các số nhỏ hơn 3. Giá trị 3 (không thỏa mãn < 3) và 4 sẽ bị SQL Server kích hoạt cơ chế chặn và trả về lỗi Msg 547."
    },
    {
      id: "q7",
      question: "Khi hai bảng có quan hệ 1 chiều (PHONGBAN -> DEAN), thứ tự nhập chuẩn là:",
      options: [
        "Nhập dữ liệu cho bảng PHONGBAN trước, sau đó mới nhập dữ liệu vào bảng con DEAN.",
        "Nhập dữ liệu cho bảng DEAN trước, sau đó mới nhập dữ liệu vào bảng cha PHONGBAN.",
        "Bắt buộc phải nhập đồng thời cả hai bảng trong cùng một câu lệnh INSERT duy nhất.",
        "Xóa toàn bộ dữ liệu ở bảng con DEAN trước rồi mới bắt đầu chèn dữ liệu vào bảng."
      ],
      correctAnswer: 0,
      explanation: "Cột khóa ngoại ở bảng con trỏ tới khóa chính của bảng cha, do đó bảng cha PHONGBAN phải có dữ liệu trước thì bảng con DEAN mới có giá trị hợp lệ để tham chiếu."
    },
    {
      id: "q8",
      question: "Câu lệnh UPDATE MON SET DVHT = DVHT + 1 WHERE MaMH = 'TH345' sẽ thực hiện việc gì?",
      options: [
        "Tăng số đơn vị học trình của môn học có mã 'TH345' lên thêm 1 đơn vị xác định.",
        "Xóa vĩnh viễn môn học có mã 'TH345' khỏi bảng cơ sở dữ liệu khi chạy câu lệnh.",
        "Tăng số đơn vị học trình của tất cả mọi môn học trong bảng lên thêm 1 đơn vị.",
        "Đổi tên mã môn học từ 'TH345' thành mã môn học mới có giá trị là 'DVHT + 1'."
      ],
      correctAnswer: 0,
      explanation: "Mệnh đề SET DVHT = DVHT + 1 kết hợp với điều kiện WHERE MaMH = 'TH345' sẽ chỉ cập nhật tăng số DVHT thêm 1 cho đúng dòng dữ liệu thỏa mãn mã môn là 'TH345'."
    },
    {
      id: "q9",
      question: "Cú pháp chuẩn để thêm một cột ngaysinh datetime vào bảng NhanVien đã có là gì?",
      options: [
        "ALTER TABLE NhanVien ADD ngaysinh datetime;",
        "ALTER TABLE NhanVien INSERT ngaysinh datetime;",
        "ALTER TABLE NhanVien CREATE ngaysinh datetime;",
        "ALTER TABLE NhanVien UPDATE ngaysinh datetime;"
      ],
      correctAnswer: 0,
      explanation: "Cú pháp chuẩn của SQL Server để thêm cột mới vào bảng đã có là: ALTER TABLE <tên_bảng> ADD <tên_cột> <kiểu_dữ_liệu>."
    },
    {
      id: "q10",
      question: "Khi bảng cha đang được tham chiếu bởi khóa ngoại của bảng con, lệnh DROP TABLE bảng cha sẽ:",
      options: [
        "Bị hệ thống từ chối và báo lỗi xung đột khóa ngoại Msg 3726 để bảo vệ toàn vẹn.",
        "Tự động xóa sạch toàn bộ các bảng con liên quan mà không cần hiển thị cảnh báo.",
        "Tự động chuyển toàn bộ dữ liệu của bảng cha sang một bảng sao lưu tạm thời khác.",
        "Chỉ xóa cấu trúc của bảng cha và giữ lại toàn bộ dữ liệu bên trong bộ nhớ đệm."
      ],
      correctAnswer: 0,
      explanation: "SQL Server ngăn chặn việc xóa bảng cha khi bảng con vẫn đang tham chiếu tới (Lỗi Msg 3726). Muốn xóa, cần xóa bảng con trước hoặc xóa ràng buộc khóa ngoại trước."
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
    <div className="my-8 rounded-2xl border border-indigo-300 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 p-6 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">
                Master Exam: Đề Kiểm Tra Tổng Hợp Toàn Diện Chương III (SQL)
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800 border border-indigo-300">
                10 Câu Trắc Nghiệm
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Đề thi tổng hợp bao quát: RDBMS, Kiểu dữ liệu, DDL, DML, Khóa ngoại, ALTER & DROP TABLE
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
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition-all disabled:opacity-50"
          >
            <span>Nộp Bài Thi Master Exam & Xem Kết Quả</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white shadow hover:bg-gray-900 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại Đề thi Master Exam</span>
          </button>
        )}
      </div>
    </div>
  );
}
