"use client";
import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, BookOpen, Terminal } from "lucide-react";

export default function DatabaseChapter3DqlMasterExamQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Câu lệnh SELECT L FROM R WHERE C tương ứng chính xác với biểu thức Đại số quan hệ nào?",
      options: [
        "Biểu thức phép chiếu kết hợp phép chọn: \\pi_L (\\sigma_C (R)) trong chuẩn toán học.",
        "Biểu thức phép chọn kết hợp phép chiếu: \\sigma_L (\\pi_C (R)) trong chuẩn toán học.",
        "Biểu thức phép kết nối tự nhiên kết hợp phép chiếu: \\pi_L (R \\bowtie C) trong đại số.",
        "Biểu thức phép tích Đề-các kết hợp phép hợp: \\sigma_C (R \\times L) trong toán học."
      ],
      correctAnswer: 0,
      explanation: "Trong toán học đại số quan hệ: mệnh đề WHERE C tương ứng phép chọn \\sigma_C(R), và mệnh đề SELECT L tương ứng phép chiếu \\pi_L ngoài cùng."
    },
    {
      id: "q2",
      question: "Câu lệnh SELECT * FROM NhanVien WHERE luong NOT BETWEEN 20000 AND 30000 sẽ lấy ra:",
      options: [
        "Các nhân viên có mức lương nhỏ hơn 20.000 hoặc có mức lương lớn hơn 30.000.",
        "Các nhân viên có mức lương nằm trong đoạn từ 20.000 đến 30.000 của công ty.",
        "Các nhân viên có mức lương chính xác bằng 20.000 hoặc bằng 30.000 của bảng.",
        "Các nhân viên có mức lương lớn hơn hoặc bằng 20.000 và nhỏ hơn hoặc bằng 30k."
      ],
      correctAnswer: 0,
      explanation: "Toán tử NOT BETWEEN 20000 AND 30000 phủ định đoạn [20000, 30000], tương đương logic với: luong < 20000 OR luong > 30000."
    },
    {
      id: "q3",
      question: "Để tìm tất cả nhân viên có họ 'Nguyễn' và phần tên phía sau dài đúng 4 ký tự, ta dùng:",
      options: [
        "SELECT * FROM NhanVien WHERE hoten LIKE 'Nguyen ____';",
        "SELECT * FROM NhanVien WHERE hoten LIKE 'Nguyen %%%%';",
        "SELECT * FROM NhanVien WHERE hoten LIKE 'Nguyen [4]';",
        "SELECT * FROM NhanVien WHERE hoten LIKE 'Nguyen *4*';"
      ],
      correctAnswer: 0,
      explanation: "Mỗi ký tự gạch dưới '_' đại diện cho đúng 1 ký tự. Để tên dài 4 ký tự, ta dùng 4 dấu gạch dưới '____'."
    },
    {
      id: "q4",
      question: "Để tìm chuỗi văn bản có chứa đúng ký tự phần trăm '%' (ví dụ 'ab%cd'), ta viết mẫu là:",
      options: [
        "WHERE chuoi LIKE 'ab\\%cd%' (kèm ký tự thoát escape dấu gạch chéo ngược).",
        "WHERE chuoi LIKE 'ab%%cd%' (viết lặp lại hai lần dấu ký tự phần trăm).",
        "WHERE chuoi LIKE 'ab*cd%' (thay thế ký tự phần trăm bằng dấu sao hoa thị).",
        "WHERE chuoi LIKE 'ab?cd%' (thay thế ký tự phần trăm bằng dấu hỏi chấm đơn)."
      ],
      correctAnswer: 0,
      explanation: "Do '%' là ký tự đại diện đặc biệt, ta phải sử dụng kỹ thuật thoát chuỗi (escape sequence) với dấu gạch chéo '\\%' để hệ thống hiểu là ký tự '%' thông thường."
    },
    {
      id: "q5",
      question: "Phép kết nối NhanVien RIGHT JOIN PhongBan ON NhanVien.phong = PhongBan.maphong sẽ:",
      options: [
        "Giữ toàn bộ phòng ban của bảng PhongBan, điền NULL cho các phòng chưa có nhân viên.",
        "Giữ toàn bộ nhân viên của bảng NhanVien, điền NULL cho nhân viên chưa có phòng ban.",
        "Chỉ giữ lại các nhân viên có mã phòng ban khớp chính xác với bảng PhongBan dữ liệu.",
        "Loại bỏ hoàn toàn tất cả các phòng ban không có nhân viên nào trực thuộc bên dưới."
      ],
      correctAnswer: 0,
      explanation: "RIGHT JOIN giữ lại 100% các dòng của bảng bên phải (PhongBan). Những phòng ban chưa có nhân viên nào thuộc về thì các cột của NhanVien sẽ nhận giá trị NULL."
    },
    {
      id: "q6",
      question: "Trong truy vấn lồng tương quan, điều gì xảy ra trong quá trình hệ thống thực thi?",
      options: [
        "Truy vấn con được thực thi lặp lại nhiều lần, mỗi lần ứng với 1 dòng của truy vấn cha.",
        "Truy vấn con chỉ thực thi duy nhất một lần độc lập trước khi truy vấn cha bắt đầu chạy.",
        "Truy vấn con tự động gộp dữ liệu của cả hai bảng lại với nhau mà không cần xét điều kiện.",
        "Truy vấn con luôn trả về một giá trị duy nhất mang kiểu dữ liệu số nguyên không đổi."
      ],
      correctAnswer: 0,
      explanation: "Truy vấn lồng tương quan có điều kiện ở con phụ thuộc vào giá trị của từng dòng ở cha, nên con bắt buộc phải thực thi lặp lại cho mỗi dòng của cha."
    },
    {
      id: "q7",
      question: "Điều kiện WHERE luong > ALL (SELECT luong FROM NhanVien WHERE phong = 1) có nghĩa là:",
      options: [
        "Lương phải lớn hơn mức lương cao nhất (Max) của tất cả nhân viên thuộc phòng ban số 1.",
        "Lương chỉ cần lớn hơn mức lương thấp nhất (Min) của các nhân viên thuộc phòng ban số 1.",
        "Lương phải bằng với mức lương trung bình cộng (Avg) của các nhân viên ở phòng ban số 1.",
        "Lương phải nằm trong khoảng giữa mức lương nhỏ nhất và lớn nhất của phòng ban số 1 đó."
      ],
      correctAnswer: 0,
      explanation: "Toán tử > ALL (Tập hợp) yêu cầu giá trị phải lớn hơn TẤT CẢ các phần tử trong tập hợp, đồng nghĩa với việc phải lớn hơn giá trị lớn nhất (MAX) của tập hợp đó."
    },
    {
      id: "q8",
      question: "Điểm khác nhau giữa COUNT(*) và COUNT(tennv) trên một bảng dữ liệu là gì?",
      options: [
        "COUNT(*) đếm tất cả các dòng, còn COUNT(tennv) bỏ qua các dòng có tennv là NULL.",
        "COUNT(*) chỉ đếm dòng có khóa chính, còn COUNT(tennv) đếm toàn bộ dòng trong bảng.",
        "COUNT(*) tự động loại bỏ các dòng trùng lặp, còn COUNT(tennv) giữ lại toàn bộ dòng.",
        "COUNT(*) chỉ áp dụng cho bảng số nguyên, còn COUNT(tennv) áp dụng cho bảng chuỗi."
      ],
      correctAnswer: 0,
      explanation: "COUNT(*) đếm tổng số bản ghi trong bảng bất kể giá trị các cột là gì, trong khi COUNT(tên_cột) tự động bỏ qua các bản ghi có giá trị của cột đó là NULL."
    },
    {
      id: "q9",
      question: "Khẳng định nào sau đây là hoàn toàn ĐÚNG khi phân biệt giữa WHERE và HAVING?",
      options: [
        "WHERE lọc từng dòng trước khi gom nhóm; HAVING lọc trên nhóm dữ liệu sau khi đã gom nhóm.",
        "WHERE lọc trên nhóm dữ liệu sau khi gom; HAVING lọc từng dòng trước khi tiến hành gom nhóm.",
        "Cả WHERE và HAVING đều có thể sử dụng các hàm kết hợp (như SUM, AVG, COUNT) như nhau.",
        "WHERE chỉ dùng cho câu lệnh UPDATE/DELETE, còn HAVING chỉ dùng cho câu lệnh INSERT mới."
      ],
      correctAnswer: 0,
      explanation: "WHERE kiểm tra điều kiện trên từng dòng dữ liệu đơn lẻ trước khi gom nhóm và không được chứa hàm kết hợp. HAVING kiểm tra điều kiện lọc trên nhóm sau khi GROUP BY đã gom nhóm xong."
    },
    {
      id: "q10",
      question: "Thứ tự thực thi logic chuẩn xác của một câu lệnh SQL có GROUP BY và HAVING là:",
      options: [
        "1. FROM/WHERE -> 2. GROUP BY -> 3. Hàm kết hợp -> 4. HAVING -> 5. SELECT.",
        "1. SELECT -> 2. FROM/WHERE -> 3. GROUP BY -> 4. HAVING -> 5. Hàm kết hợp.",
        "1. GROUP BY -> 2. HAVING -> 3. FROM/WHERE -> 4. Hàm kết hợp -> 5. SELECT.",
        "1. FROM/WHERE -> 2. HAVING -> 3. GROUP BY -> 4. SELECT -> 5. Hàm kết hợp."
      ],
      correctAnswer: 0,
      explanation: "Thứ tự xử lý logic của SQL Server: Quét nguồn & Lọc dòng (FROM/WHERE) -> Gom nhóm (GROUP BY) -> Tính hàm kết hợp (Aggregates) -> Lọc nhóm (HAVING) -> Trích xuất hiển thị (SELECT/ORDER BY)."
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
    <div className="my-8 rounded-2xl border border-indigo-300 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 p-6 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">
                Master Exam: Đề Kiểm Tra Chuyên Sâu Truy Vấn DQL (SELECT)
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800 border border-indigo-300">
                10 Câu Trắc Nghiệm
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Đề thi tổng hợp: ĐSQH, LIKE, JOIN, Subquery IN/EXISTS, GROUP BY, HAVING & Bẫy NULL
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
            <span>Nộp Bài Thi DQL Master Exam & Xem Kết Quả</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 shadow-sm transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm lại Đề thi DQL Master Exam</span>
          </button>
        )}
      </div>
    </div>
  );
}
