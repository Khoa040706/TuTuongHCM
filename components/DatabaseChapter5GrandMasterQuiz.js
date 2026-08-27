"use client";

import React, { useState, useEffect } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, Timer, ShieldCheck, Flame } from "lucide-react";

export default function DatabaseChapter5GrandMasterQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (timerActive && !showResults) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, showResults]);

  const questions = [
    {
      id: "q1",
      section: "Mục I: Lý thuyết thiết kế",
      question: "Một CSDL có thiết kế kém thường dẫn đến những thảm họa dị thường nào sau đây?",
      options: [
        "Dư thừa dữ liệu, không nhất quán khi cập nhật, dị thường khi thêm và dị thường khi xóa bộ.",
        "Mất mát toàn bộ chỉ mục chính, tràn bộ nhớ đệm và xung đột khóa ngoại trên toàn hệ thống.",
        "Tăng tốc độ truy vấn nhưng làm suy giảm dung lượng lưu trữ trên các ổ đĩa vật lý của máy.",
        "Không thể tạo thêm người dùng mới và làm giảm tốc độ thực thi của các thủ tục lưu trữ SQL."
      ],
      correctAnswer: 0,
      explanation: "4 thảm họa thiết kế kinh điển: 1) Dư thừa dữ liệu, 2) Không nhất quán khi Update, 3) Dị thường khi Insert, 4) Dị thường khi Delete."
    },
    {
      id: "q2",
      section: "Mục II: Phụ thuộc hàm",
      question: "Định nghĩa hình thức của phụ thuộc hàm X → Y trên lược đồ quan hệ R(U) là gì?",
      options: [
        "Với mọi cặp bộ t1, t2 bất kỳ trong quan hệ r, nếu t1[X] = t2[X] thì bắt buộc t1[Y] = t2[Y].",
        "Với mọi cặp bộ t1, t2 bất kỳ trong quan hệ r, nếu t1[X] ≠ t2[X] thì bắt buộc t1[Y] = t2[Y].",
        "Với mọi thuộc tính A thuộc X thì A cũng phải đồng thời là một phần tử thuộc về tập con Y.",
        "Với mọi giá trị của tập thuộc tính Y đều có thể được tính toán bằng một hàm số toán học X."
      ],
      correctAnswer: 0,
      explanation: "Định nghĩa chuẩn: ∀t1, t2 ∈ r : t1[X] = t2[X] ⟹ t1[Y] = t2[Y]."
    },
    {
      id: "q3",
      section: "Mục II: Hệ tiên đề Armstrong",
      question: "Tiên đề Tăng trưởng (Augmentation) trong hệ tiên đề Armstrong phát biểu rằng:",
      options: [
        "Nếu Z là tập con của U và có X → Y thì luôn suy ra được phụ thuộc hàm dạng ZX → ZY trên R.",
        "Nếu Y là tập con của X thì ta luôn suy ra được phụ thuộc hàm hiển nhiên dạng X → Y trên R.",
        "Nếu có X → Y và Y → Z thì ta luôn suy ra được phụ thuộc hàm bắc cầu dạng X → Z trong quan hệ.",
        "Nếu có X → Y và X → Z thì ta luôn suy ra được phụ thuộc hàm hợp nhất dạng X → YZ trong quan hệ."
      ],
      correctAnswer: 0,
      explanation: "Luật tăng trưởng: Z ⊆ U ∧ X → Y ⟹ ZX → ZY (hoặc XZ → YZ)."
    },
    {
      id: "q4",
      section: "Mục II: Bổ đề 3 & Bao đóng X+",
      question: "Điều kiện cần và đủ để phụ thuộc hàm X → Y được suy dẫn từ tập F (F ⊢ X → Y) là:",
      options: [
        "Toàn bộ tập thuộc tính ở vế phải Y phải là tập con của bao đóng X đối với F (tức Y ⊆ X⁺).",
        "Toàn bộ tập thuộc tính ở vế trái X phải là tập con của bao đóng Y đối với F (tức X ⊆ Y⁺).",
        "Giao của hai tập thuộc tính X và Y phải là tập rỗng và không chứa bất kỳ thuộc tính nào.",
        "Hợp của hai tập thuộc tính X và Y phải bằng đúng toàn bộ tập thuộc tính ban đầu của bảng."
      ],
      correctAnswer: 0,
      explanation: "Bổ đề 3: F ⊢ X → Y ⟺ Y ⊆ X_F⁺."
    },
    {
      id: "q5",
      section: "Mục III: Định nghĩa Khóa",
      question: "Tập thuộc tính K được gọi là một khóa tối tiểu của quan hệ R(U, F) khi:",
      options: [
        "K có bao đóng bằng U (K⁺ = U) và nếu bớt bất kỳ thuộc tính nào thì bao đóng không còn là U.",
        "K chứa toàn bộ tất cả các thuộc tính của lược đồ quan hệ ban đầu được khai báo trong bảng.",
        "K chỉ chứa duy nhất một thuộc tính đơn lẻ và không được phép chứa bất kỳ giá trị NULL nào.",
        "K là tập con của tập thuộc tính nguồn N và không bao giờ xuất hiện ở bất kỳ vế trái nào."
      ],
      correctAnswer: 0,
      explanation: "Khóa tối tiểu: K⁺ = U và ∀A ∈ K : (K \\ {A})⁺ ≠ U."
    },
    {
      id: "q6",
      section: "Mục III: Phân loại N/D/L",
      question: "Trong thuật toán tìm tất cả các khóa của lược đồ quan hệ, tập N = U \\ UR là:",
      options: [
        "Tập gồm các thuộc tính cô lập và chỉ ở vế trái nên bắt buộc phải nằm trong mọi khóa tối tiểu.",
        "Tập gồm các thuộc tính chỉ xuất hiện ở vế phải nên không bao giờ có mặt trong bất kỳ khóa nào.",
        "Tập gồm các thuộc tính trung gian và có thể được thêm vào khóa hoặc bị loại bỏ tùy từng bảng.",
        "Tập các thuộc tính dư thừa cần phải bị triệt tiêu ngay từ bước đầu tiên của thuật toán tìm."
      ],
      correctAnswer: 0,
      explanation: "Tập N gồm thuộc tính không ở vế phải nên không thể được suy ra từ đâu ➔ Bắt buộc phải có trong mọi khóa (N ⊆ Khóa)."
    },
    {
      id: "q7",
      section: "Mục III: Khóa duy nhất",
      question: "Một quan hệ R(U, F) chắc chắn có duy nhất một khóa tối tiểu khi và chỉ khi:",
      options: [
        "Bao đóng của tập thuộc tính nguồn N bằng toàn bộ tập thuộc tính ban đầu của lược đồ (N⁺ = U).",
        "Tập phụ thuộc hàm F ban đầu chỉ chứa đúng một phụ thuộc hàm duy nhất giữa hai thuộc tính đơn.",
        "Số lượng thuộc tính ở vế trái bằng chính xác số lượng thuộc tính ở vế phải trong toàn tập F.",
        "Tập thuộc tính trung gian L chứa tất cả các thuộc tính của quan hệ và không có tập nguồn N."
      ],
      correctAnswer: 0,
      explanation: "Nếu N⁺ = U thì N là khóa duy nhất, dừng thuật toán ngay."
    },
    {
      id: "q8",
      section: "Mục V: Phụ thuộc đầy đủ",
      question: "Ta nói phụ thuộc hàm X → Y là phụ thuộc hàm đầy đủ (Full FD) khi:",
      options: [
        "Không có bất kỳ một tập con thực sự nào của X có thể xác định hàm được thuộc tính vế phải Y.",
        "Vế phải Y bắt buộc phải chứa toàn bộ tất cả các thuộc tính của lược đồ quan hệ ban đầu của U.",
        "Vế trái X và vế phải Y có số lượng thuộc tính hoàn toàn bằng nhau và không có thuộc tính lặp.",
        "Phụ thuộc hàm này có thể được suy ra từ một phụ thuộc hàm khác thông qua luật tăng trưởng F."
      ],
      correctAnswer: 0,
      explanation: "Phụ thuộc đầy đủ: ∀X' ⊂ X ⟹ X' → Y ∉ F⁺."
    },
    {
      id: "q9",
      section: "Mục V: Định nghĩa Phủ tối thiểu",
      question: "Tập phụ thuộc hàm F được gọi là một phủ tối thiểu (Minimal Cover) khi thỏa:",
      options: [
        "Vế phải chỉ có 1 thuộc tính đơn, không có FD nào dư thừa và không có thuộc tính dư ở vế trái.",
        "Số lượng phụ thuộc hàm trong tập F phải nhỏ hơn tổng số thuộc tính của lược đồ quan hệ ban đầu.",
        "Mọi phụ thuộc hàm đều có vế trái là một khóa chính và vế phải không được chứa giá trị rỗng nào.",
        "Toàn bộ các thuộc tính trong quan hệ đều xuất hiện ở vế phải của ít nhất một phụ thuộc hàm F."
      ],
      correctAnswer: 0,
      explanation: "3 điều kiện của Phủ tối thiểu: 1) Vế phải đơn, 2) Không dư FD, 3) Không dư thuộc tính vế trái."
    },
    {
      id: "q10",
      section: "Mục V: Thuật toán 3 bước",
      question: "Bước 2 trong thuật toán 3 bước tìm phủ tối thiểu thực hiện việc gì?",
      options: [
        "Loại bỏ các phụ thuộc hàm dư thừa bằng cách kiểm tra bao đóng của vế trái trên tập FD còn lại.",
        "Phân rã tất cả các vế phải có nhiều thuộc tính thành các phụ thuộc hàm có vế phải đơn lẻ một.",
        "Loại bỏ các thuộc tính dư thừa ở vế trái để đảm bảo tất cả các phụ thuộc hàm đều là đầy đủ nhất.",
        "Gộp tất cả các phụ thuộc hàm có cùng vế trái lại với nhau bằng cách áp dụng quy tắc hợp của F."
      ],
      correctAnswer: 0,
      explanation: "Bước 2: Với mỗi X → A, nếu A ∈ X_{G \\ {X→A}}⁺ thì loại bỏ X → A."
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
    setSeconds(0);
    setTimerActive(true);
  };

  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const score = calculateScore();

  return (
    <div className="my-8 rounded-2xl border border-indigo-300/80 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/40 p-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30">
            <Flame className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Grand Master Exam: Toàn Bộ Chương V</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                10 Câu Trắc Nghiệm Tổng Lực
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bài thi tổng hợp kiểm tra toàn diện: Dị thường CSDL, Tiên đề Armstrong, Bao đóng X⁺, Khóa tối tiểu N/D/L và Phủ tối thiểu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-xl bg-gray-900 px-3.5 py-2 font-mono text-xs font-bold text-emerald-400 shadow-sm border border-gray-800">
            <Timer className="h-4 w-4" />
            <span>{formatTime(seconds)}</span>
          </div>

          {showResults && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3.5 py-2 border border-emerald-300">
              <Award className="h-5 w-5 text-emerald-700" />
              <span className="text-xs font-bold text-emerald-950 font-mono">
                {score}/10 Điểm ({score * 10}%)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Questions List */}
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
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-mono text-xs font-bold text-indigo-800">
                    {qIdx + 1}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-0.5">
                      {q.section}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">{q.question}</h4>
                  </div>
                </div>
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

      {/* Footer Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-indigo-200/60 pt-4">
        {!showResults ? (
          <button
            onClick={() => {
              setShowResults(true);
              setTimerActive(false);
            }}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50"
          >
            <span>Nộp Bài Thi &amp; Xem Báo Cáo</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-white shadow hover:bg-gray-900 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Làm Lại Bài Thi</span>
          </button>
        )}
      </div>
    </div>
  );
}
