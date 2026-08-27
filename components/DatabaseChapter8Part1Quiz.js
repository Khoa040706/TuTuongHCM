"use client";
import React, { useState } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, Sparkles, HelpCircle } from "lucide-react";

export default function DatabaseChapter8Part1Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Mệnh đề nào sau đây được dùng khi định nghĩa Stored Procedure hoặc Trigger để mã hóa bảo mật, ngăn không cho lệnh hệ thống 'sp_helptext' hiển thị nội dung mã nguồn T-SQL?",
      options: [
        "WITH READONLY",
        "WITH ENCRYPTION",
        "WITH SCHEMABINDING",
        "WITH RECOMPILE"
      ],
      correct: 1,
      explanation: "Mệnh đề WITH ENCRYPTION mã hóa toàn bộ văn bản câu lệnh T-SQL của Stored Procedure hoặc Trigger trong catalog hệ thống. Khi gọi lệnh 'sp_helptext', SQL Server sẽ trả về thông báo lỗi: 'The text for object ... is encrypted'."
    },
    {
      id: 2,
      question: "Sự khác biệt cốt lõi về cơ chế kích hoạt thực thi giữa Stored Procedure (SP) và Bẫy sự kiện (Trigger) là gì?",
      options: [
        "SP và Trigger đều phải được người dùng hoặc ứng dụng gọi thực thi bằng lệnh EXEC.",
        "SP được gọi chủ động bằng EXEC, còn Trigger tự động kích hoạt khi có sự kiện DML (INSERT/UPDATE/DELETE) trên bảng.",
        "SP chỉ chạy được trên Server cục bộ, còn Trigger chỉ chạy được từ ứng dụng Client bên ngoài.",
        "SP không hỗ trợ truyền tham số, còn Trigger bắt buộc phải có ít nhất 2 tham số đầu vào."
      ],
      correct: 1,
      explanation: "Stored Procedure là chương trình con độc lập được gọi chủ động qua lệnh EXEC/EXECUTE. Ngược lại, Trigger là bẫy sự kiện gắn liền với bảng, tự động chạy ngầm (Auto-fired) khi xảy ra sự kiện INSERT, UPDATE hoặc DELETE và không thể gọi trực tiếp bằng EXEC."
    },
    {
      id: 3,
      question: "Khi thực thi một Stored Procedure có chứa tham số đầu ra (OUTPUT Parameter), cú pháp nào sau đây là BẮT BUỘC để nhận được kết quả?",
      options: [
        "Chỉ cần gọi lệnh EXEC sp_TenThuTuc mà không cần khai báo biến trước.",
        "Phải khai báo biến trước (DECLARE) và kèm từ khóa OUTPUT ở cả định nghĩa SP lẫn khi gọi lệnh EXEC.",
        "Chỉ cần thêm từ khóa RETURN ở cuối câu lệnh EXEC.",
        "Phải sử dụng hàm PRINT kèm theo tên thủ tục trong mệnh đề SELECT."
      ],
      correct: 1,
      explanation: "Để nhận giá trị từ tham số OUTPUT, lập trình viên bắt buộc phải DECLARE biến hứng trước, đồng thời phải truyền kèm từ khóa OUTPUT trong câu lệnh EXEC (ví dụ: EXEC xem_diem '01', 'CSDL', @diem_sv OUTPUT). Nếu quên từ khóa OUTPUT, biến nhận sẽ mang giá trị NULL."
    },
    {
      id: 4,
      question: "Đặc điểm nào sau đây phân biệt chính xác nhất giữa mã lệnh RETURN và tham số OUTPUT trong Stored Procedure?",
      options: [
        "RETURN có thể trả về nhiều chuỗi văn bản varchar, trong khi OUTPUT chỉ trả về 1 số nguyên integer.",
        "RETURN chỉ trả về DUY NHẤT 1 số nguyên (integer), trong khi OUTPUT hỗ trợ đa dạng kiểu dữ liệu và nhiều giá trị.",
        "RETURN bắt buộc phải có từ khóa OUTPUT đi kèm, trong khi tham số OUTPUT thì không cần.",
        "RETURN chỉ dùng để in thông báo lỗi ra màn hình, không thể gán giá trị vào biến hứng."
      ],
      correct: 1,
      explanation: "RETURN chỉ hỗ trợ trả về duy nhất một giá trị số nguyên (integer) để biểu thị mã trạng thái thực thi (thành công/thất bại) hoặc dùng để thoát sớm khỏi thủ tục. Ngược lại, tham số OUTPUT hỗ trợ đa dạng kiểu dữ liệu (varchar, int, decimal, datetime...) và một SP có thể có nhiều tham số OUTPUT."
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
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase mb-1">
            <Award className="w-4 h-4 text-indigo-400" />
            <span>Checkpoint Mini-Quiz (Mục I & II)</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Bài Kiểm Tra Nhanh 4 Câu Củng Cố Kiến Thức Stored Procedure & Trigger
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {showResults && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-xs font-mono font-bold text-indigo-300">
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
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/30">
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
                    optStyle = "bg-indigo-950/60 border-indigo-500 text-indigo-200 font-semibold shadow-md shadow-indigo-500/20";
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
                  <span className="font-bold text-indigo-300 font-mono">Giải thích: </span>
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
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-lg shadow-indigo-600/30 transition-all"
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
