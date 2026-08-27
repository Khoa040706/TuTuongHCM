"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, ArrowRight, BookOpen, Terminal, Sparkles } from "lucide-react";

export default function DatabaseChapter4MasterExamQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "q1",
      question: "Khái niệm nào sau đây phản ánh chính xác nhất về bản chất của Ràng buộc toàn vẹn?",
      options: [
        "Là những điều kiện bất biến mà các đối tượng của CSDL phải thỏa mãn ở bất kỳ thời điểm nào.",
        "Là các câu lệnh lưu trữ tạm thời dùng để sao lưu dữ liệu máy chủ định kỳ vào mỗi cuối tuần.",
        "Là danh sách các chỉ mục Index được tự động tạo ra để tăng tốc độ truy vấn cho người dùng.",
        "Là các tập tin văn bản bên ngoài chứa toàn bộ mã nguồn của các câu lệnh truy vấn dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "RBTV là những điều kiện bất biến (invariants) mà các đối tượng của CSDL (thuộc tính, bộ, quan hệ) phải thỏa mãn ở mọi thời điểm để phản ánh trung thực các quy tắc quản lý thế giới thực."
    },
    {
      id: "q2",
      question: "Một ràng buộc toàn vẹn hoàn chỉnh được cấu thành từ 3 yếu tố cơ bản nào?",
      options: [
        "Điều kiện (Condition), Bối cảnh (Context), Tầm ảnh hưởng (Affected operations).",
        "Khóa chính (Primary Key), Khóa ngoại (Foreign Key), Kiểu dữ liệu (Data Type).",
        "Tên bảng (Table Name), Tên cột (Column Name), Dung lượng ổ đĩa (Disk Storage).",
        "Ngôn ngữ DDL (Definition), Ngôn ngữ DML (Manipulation), Phân quyền bảo mật (DCL)."
      ],
      correctAnswer: 0,
      explanation: "3 yếu tố bắt buộc của một RBTV: 1) Điều kiện (Condition - nội dung quy tắc); 2) Bối cảnh (Context - các bảng có hiệu lực); 3) Tầm ảnh hưởng (Affected operations - thời điểm kiểm tra qua bảng Thêm/Xóa/Sửa)."
    },
    {
      id: "q3",
      question: "Trong bảng tầm ảnh hưởng, ký hiệu dấu trừ (-) tại cột thao tác XÓA có ý nghĩa là gì?",
      options: [
        "Thao tác xóa bản ghi là an toàn tuyệt đối, hệ quản trị không cần kiểm tra lại RBTV.",
        "Hệ quản trị cơ sở dữ liệu bắt buộc phải quét toàn bộ các bảng để tìm lỗi phát sinh.",
        "Thao tác xóa bản ghi đã bị khóa quyền truy cập và người dùng không thể thực hiện.",
        "Thao tác xóa chỉ được thực hiện vào ban đêm khi toàn bộ hệ thống tạm ngưng hoạt động."
      ],
      correctAnswer: 0,
      explanation: "Dấu trừ (-) thể hiện thao tác cập nhật đó không có nguy cơ vi phạm ràng buộc (an toàn 100%), giúp DBMS tiết kiệm tài nguyên CPU/I/O khi không cần kích hoạt mã kiểm tra."
    },
    {
      id: "q4",
      question: "Điều kiện tamUng <= luong trong bảng NHANVIEN thực chất là loại RBTV nào?",
      options: [
        "RBTV liên thuộc tính (vì có sự so sánh giá trị giữa hai cột trong cùng một bảng).",
        "RBTV miền giá trị (vì nó giới hạn số tiền mà nhân viên có thể nhận mỗi một tháng).",
        "RBTV phụ thuộc tồn tại (vì số tiền tạm ứng phụ thuộc vào sự tồn tại của nhân viên).",
        "RBTV liên bộ (vì nó kiểm tra sự chênh lệch lương giữa các nhân viên trong công ty)."
      ],
      correctAnswer: 0,
      explanation: "Giáo trình nhấn mạnh đây là ví dụ SAI của miền giá trị. Do nó so sánh giữa 2 thuộc tính tamUng và luong với nhau nên đây là RBTV liên thuộc tính."
    },
    {
      id: "q5",
      question: "Ràng buộc khóa chính đảm bảo mỗi sinh viên có một mã số duy nhất thuộc loại nào?",
      options: [
        "Ràng buộc toàn vẹn liên bộ (vì so sánh thuộc tính giữa các dòng khác nhau trong bảng).",
        "Ràng buộc toàn vẹn miền giá trị (vì chỉ áp đặt giới hạn trên từng ô dữ liệu riêng lẻ).",
        "Ràng buộc toàn vẹn phụ thuộc tồn tại (vì cần tham chiếu đến một bảng dữ liệu cha khác).",
        "Ràng buộc toàn vẹn liên thuộc tính (vì có sự so sánh giữa hai cột trong cùng một dòng)."
      ],
      correctAnswer: 0,
      explanation: "Khóa chính so sánh giá trị mã sinh viên giữa các dòng khác nhau trong cùng bảng (t1.maSV = t2.maSV => t1 = t2) -> Đây là RBTV liên bộ (Inter-tuple constraint)."
    },
    {
      id: "q6",
      question: "Khi khóa chính K1 của R1 là tập con trong khóa chính phức hợp K2 của R2, ta có:",
      options: [
        "Quan hệ R2 có quan hệ phụ thuộc tồn tại vào quan hệ R1 (ví dụ: KET_QUA vào SINH_VIEN).",
        "Quan hệ R1 có quan hệ phụ thuộc tồn tại vào quan hệ R2 (ví dụ: SINH_VIEN vào KET_QUA).",
        "Hai quan hệ R1 và R2 hoàn toàn độc lập và không có bất kỳ ràng buộc nào với nhau.",
        "Cả hai bảng R1 và R2 đều không cần tạo khóa chính mà chỉ sử dụng thuộc tính đơn."
      ],
      correctAnswer: 0,
      explanation: "Dấu hiệu (1) của phụ thuộc tồn tại: K1 ⊆ K2 (khóa chính R1 là tập con của khóa chính phức hợp R2) thể hiện sự tồn tại của một bộ trong R2 phụ thuộc vào sự tồn tại của bộ trong R1."
    },
    {
      id: "q7",
      question: "Khi khóa chính K1 của R1 xuất hiện như thuộc tính thông thường trong R2, ta gọi K1 là:",
      options: [
        "Khóa ngoại (Foreign Key) của quan hệ R2 tham chiếu tới khóa chính của quan hệ R1.",
        "Khóa chính phức hợp (Composite Primary Key) kết hợp các thuộc tính của cả hai bảng.",
        "Thuộc tính suy dẫn (Derived Attribute) được tính toán tự động từ các bảng dữ liệu khác.",
        "Chỉ mục phân cụm (Clustered Index) dùng để sắp xếp vật lý các dòng dữ liệu trên đĩa."
      ],
      correctAnswer: 0,
      explanation: "Dấu hiệu (2) của phụ thuộc tồn tại: K1 ⊆ R2 (khóa K1 xuất hiện trong tập thuộc tính của R2) thì K1 chính là Khóa ngoại (Foreign Key) của R2."
    },
    {
      id: "q8",
      question: "Thuộc tính công nợ congNo của khách hàng trong CSDL QLHANGHOA là ví dụ của:",
      options: [
        "Ràng buộc toàn vẹn về thuộc tính tổng hợp (tính từ hiệu số giữa tổng hóa đơn và tổng thu).",
        "Ràng buộc toàn vẹn miền giá trị (áp đặt giới hạn số tiền từ 0 đến 100 triệu đồng trên đĩa).",
        "Ràng buộc toàn vẹn liên thuộc tính (so sánh giữa cột mã khách hàng và cột số điện thoại).",
        "Ràng buộc toàn vẹn khóa chính (đảm bảo mỗi khách hàng chỉ có duy nhất một khoản công nợ)."
      ],
      correctAnswer: 0,
      explanation: "congNo là thuộc tính tổng hợp (Derived/Aggregate attribute) vì giá trị của nó được tính toán từ các bảng khác: Tổng trị giá các hóa đơn bán trừ đi tổng số tiền đã thu từ các phiếu thu."
    },
    {
      id: "q9",
      question: "Trong CSDL QLHANGHOA, chính sách giao hàng chuẩn của chu trình 3 bảng là:",
      options: [
        "Hóa đơn chỉ giao mặt hàng đã đặt, có thể giao thiếu nhưng không bao giờ giao vượt đặt.",
        "Hóa đơn bắt buộc phải giao đầy đủ 100% tất cả mặt hàng có trong đơn đặt hàng của khách.",
        "Hóa đơn được tự do giao bất kỳ mặt hàng nào dù khách có đặt mua hay không đặt trước.",
        "Hóa đơn không được phép xuất bất kỳ mặt hàng nào cho đến khi khách đã thanh toán đủ."
      ],
      correctAnswer: 0,
      explanation: "Chính sách của CSDL QLHANGHOA: Công ty có thể không giao đầy đủ các mặt hàng/số lượng theo đơn đặt hàng, nhưng không bao giờ giao vượt yêu cầu đặt hàng."
    },
    {
      id: "q10",
      question: "Trong CSDL Nghiên cứu Đề tài Sinh viên, bảng SV_DT(MaSV, MaDT, NoiAD, KQ) có khóa chính là:",
      options: [
        "Khóa chính phức hợp gồm hai thuộc tính (MaSV, MaDT) kết hợp lại với nhau trong bảng.",
        "Khóa chính đơn lẻ chỉ gồm duy nhất một thuộc tính MaSV để định danh cho sinh viên.",
        "Khóa chính đơn lẻ chỉ gồm duy nhất một thuộc tính MaDT để định danh cho từng đề tài.",
        "Bảng SV_DT không có khóa chính mà chỉ sử dụng thuộc tính kết quả KQ để phân biệt."
      ],
      correctAnswer: 0,
      explanation: "Bảng liên kết SV_DT có khóa chính phức hợp là cặp (MaSV, MaDT) để đảm bảo mỗi sinh viên chỉ tham gia 1 đề tài cụ thể đúng 1 lần."
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
                Grand Master Exam: Đề Kiểm Tra Toàn Diện Toàn Bộ Chương IV (Ràng Buộc Toàn Vẹn)
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800 border border-indigo-300">
                10 Câu Trắc Nghiệm Toàn Diện
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Đề thi tổng hợp bao quát trọn vẹn: Khái niệm bất biến, Bảng tầm ảnh hưởng, 8 loại RBTV (1 quan hệ & đa quan hệ), Chu trình đồ thị & Bài tập CSDL
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
