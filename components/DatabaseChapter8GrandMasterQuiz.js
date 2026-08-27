"use client";
import React, { useState } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";

export default function DatabaseChapter8GrandMasterQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Theo giáo trình, Trigger trong SQL Server được phân chia thành bao nhiêu kiểu (loại) chính?",
      options: [
        "3 kiểu: DDL, DML và Logon Trigger.",
        "5 kiểu: Insert, Delete, Update, Instead of, và After.",
        "2 kiểu: Synchronous Trigger và Asynchronous Trigger.",
        "4 kiểu: Before, After, Instead of và While."
      ],
      correct: 1,
      explanation: "Theo giáo trình, có 5 kiểu trigger bao gồm: Insert (kích hoạt khi INSERT), Delete (kích hoạt khi DELETE), Update (kích hoạt khi UPDATE), Instead of (thay thế hoàn toàn hành động gốc) và After (xảy ra sau khi hành động gốc hoàn tất)."
    },
    {
      id: 2,
      question: "Khi phát sinh câu lệnh UPDATE trên bảng có Trigger, dữ liệu trong 2 bảng logic ảo (inserted & deleted) trong bộ nhớ RAM được quản lý như thế nào?",
      options: [
        "Cả 2 bảng inserted và deleted đều hoàn toàn trống rỗng.",
        "Bảng deleted chứa giá trị cũ trước khi sửa; Bảng inserted chứa giá trị mới sau khi sửa.",
        "Bảng inserted chứa giá trị cũ; Bảng deleted chứa giá trị mới.",
        "Chỉ có bảng inserted được tạo ra, bảng deleted chỉ tồn tại khi chạy lệnh DELETE."
      ],
      correct: 1,
      explanation: "Lệnh UPDATE là thao tác kép: SQL Server tự động đưa bản sao dữ liệu dòng cũ (trước khi cập nhật) vào bảng 'deleted' và đưa bản sao dữ liệu dòng mới (sau khi cập nhật) vào bảng 'inserted'."
    },
    {
      id: 3,
      question: "Đặc điểm nổi bật và ưu thế vượt trội nhất của 'INSTEAD OF Trigger' so với 'AFTER Trigger' là gì?",
      options: [
        "Chạy nhanh hơn gấp 10 lần và không tiêu tốn RAM.",
        "Có thể thao tác cập nhật dữ liệu trên VIEW (kể cả View phức tạp kết hợp nhiều bảng).",
        "Có thể gọi thực thi trực tiếp bằng lệnh EXEC từ ứng dụng Client.",
        "Tự động mã hóa mã nguồn mà không cần từ khóa WITH ENCRYPTION."
      ],
      correct: 1,
      explanation: "INSTEAD OF Trigger thay thế hoàn toàn thao tác DML ban đầu, cho phép lập trình viên bóc tách dữ liệu từ bảng inserted để định tuyến chèn/sửa vào các bảng vật lý tương ứng, giải quyết triệt để hạn chế không thể cập nhật trực tiếp trên các View phức tạp."
    },
    {
      id: 4,
      question: "Cú pháp DDL nào sau đây dùng để tạm thời vô hiệu hóa (tắt) Trigger 'kiemtra_siso' trên bảng 'lop' mà KHÔNG xóa nó khỏi CSDL?",
      options: [
        "DROP TRIGGER kiemtra_siso ON lop;",
        "ALTER TABLE lop DISABLE TRIGGER kiemtra_siso;",
        "STOP TRIGGER kiemtra_siso;",
        "ALTER TRIGGER kiemtra_siso SET OFFLINE;"
      ],
      correct: 1,
      explanation: "Cú pháp chuẩn để tắt tạm thời một trigger là 'ALTER TABLE <tên bảng> DISABLE TRIGGER <tên trigger>;'. Khi muốn bật lại, ta sử dụng lệnh 'ALTER TABLE <tên bảng> ENABLE TRIGGER <tên trigger>;'."
    },
    {
      id: 5,
      question: "Xét về mặt tham số và cách kích hoạt, phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa Stored Procedure và Trigger?",
      options: [
        "SP được gọi chủ động qua EXEC và hỗ trợ tham số INPUT/OUTPUT; Trigger tự động kích hoạt và không có tham số truyền vào mà dùng 2 bảng ảo inserted/deleted.",
        "SP chỉ chạy tự động khi có lỗi, còn Trigger phải được gọi thủ công bằng lệnh EXEC.",
        "Cả SP và Trigger đều bắt buộc phải có ít nhất 1 tham số OUTPUT để trả kết quả.",
        "Trigger có thể trả về giá trị trực tiếp qua lệnh RETURN còn SP thì không thể."
      ],
      correct: 0,
      explanation: "Stored Procedure được gọi chủ động bằng lệnh EXEC và hỗ trợ truyền tham số (Input, Output). Ngược lại, Trigger tự động chạy ngầm khi có thao tác INSERT/UPDATE/DELETE và không nhận tham số truyền vào mà sử dụng 2 bảng logic ảo 'inserted' và 'deleted' trong RAM."
    }
  ];

  const handleSelect = (qId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase mb-1">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Grand Checkpoint Quiz (Chương VIII)</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Bài Kiểm Tra Tổng Lực 5 Câu: Bẫy Sự Kiện Trigger & So Sánh Toàn Diện SP
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {showResults && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-xs font-mono font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kết quả: {score}/{questions.length} câu đúng ({Math.round((score / questions.length) * 100)}%)</span>
            </div>
          )}
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6 mb-6">
        {questions.map((q, idx) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isCorrect = selectedAnswers[q.id] === q.correct;

          return (
            <div
              key={q.id}
              className={`p-4 md:p-5 rounded-xl border transition-all ${
                showResults
                  ? isCorrect
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : "bg-rose-950/20 border-rose-500/40"
                  : "bg-slate-950/70 border-slate-800"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  {idx + 1}
                </span>
                <p className="text-xs md:text-sm font-semibold text-slate-200 leading-relaxed">
                  {q.question}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2 pl-9">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[q.id] === optIdx;
                  let optStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850";

                  if (showResults) {
                    if (optIdx === q.correct) {
                      optStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold";
                    } else if (isSelected && !isCorrect) {
                      optStyle = "bg-rose-950/60 border-rose-500 text-rose-300";
                    } else {
                      optStyle = "bg-slate-900/40 border-slate-850 text-slate-500 opacity-60";
                    }
                  } else if (isSelected) {
                    optStyle = "bg-amber-950/60 border-amber-500 text-amber-200 font-semibold shadow-md shadow-amber-500/20";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={showResults}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full p-3 rounded-lg border text-left text-xs font-sans transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] font-bold text-slate-400">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span>{opt}</span>
                      </div>
                      {showResults && optIdx === q.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {showResults && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResults && (
                <div className="mt-3 pl-9 pt-3 border-t border-slate-800/60 text-xs text-slate-400 leading-relaxed font-sans">
                  <span className="font-bold text-amber-300 font-mono">Giải thích: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-400 font-mono">
          Đã chọn: {Object.keys(selectedAnswers).length}/{questions.length} câu
        </span>

        <div className="flex items-center gap-2">
          {showResults ? (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Làm lại</span>
            </button>
          ) : (
            <button
              disabled={Object.keys(selectedAnswers).length === 0}
              onClick={() => setShowResults(true)}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-lg shadow-amber-600/30 transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Nộp bài & Xem giải thích</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
