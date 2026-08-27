"use client";

import React, { useState, useEffect } from "react";
import { Award, CheckCircle2, XCircle, RefreshCw, Timer, ArrowRight, HelpCircle } from "lucide-react";

export default function DatabaseChapter7GrandMasterQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const questions = [
    {
      id: "q1",
      question: "Trong tối ưu hóa câu truy vấn CSDL, mục tiêu về mặt không gian (space) tập trung vào:",
      options: [
        "Tối ưu việc sử dụng bộ nhớ đệm RAM và giảm thiểu số lần truy xuất tới các thiết bị ngoại vi.",
        "Mở rộng thêm nhiều vùng nhớ ảo trên đĩa cứng để lưu trữ toàn bộ các bảng trung gian khổng lồ.",
        "Tự động nén tất cả các tệp tin dữ liệu gốc của cơ sở dữ liệu trước khi thực thi câu truy vấn.",
        "Tăng dung lượng lưu trữ của máy chủ bằng cách gắn thêm các ổ đĩa cứng vật lý vào hệ thống."
      ],
      correctAnswer: 0,
      explanation: "Mục tiêu không gian: Tối ưu bộ nhớ sử dụng cho câu hỏi và tối ưu việc sử dụng thiết bị ngoại vi (đĩa từ, I/O) phục vụ cho việc khai thác dữ liệu."
    },
    {
      id: "q2",
      question: "Khi tối ưu biểu thức π_A(σ_{(B=C) ∧ (D=100)}(R × S)), bước đẩy σ_{D=100} vào S có tác dụng:",
      options: [
        "Giảm số lượng bộ dữ liệu của quan hệ S ngay từ đầu để hạn chế kích thước bảng tích Đề-các.",
        "Loại bỏ hoàn toàn cột D ra khỏi bảng S để không cần phải kiểm tra điều kiện lọc ở các bước.",
        "Tăng tốc độ ghi dữ liệu trực tiếp vào bộ nhớ thứ cấp mà không cần thông qua bộ đệm tạm thời.",
        "Biến đổi câu truy vấn từ ngôn ngữ đại số quan hệ sang ngôn ngữ SQL trực tiếp trên máy chủ."
      ],
      correctAnswer: 0,
      explanation: "Đẩy σ_{D=100} vào S giúp lọc bớt các dòng không thỏa ngay từ đầu, giảm kích thước tích Đề-các trung gian từ hàng triệu bộ xuống chỉ còn vài nghìn bộ."
    },
    {
      id: "q3",
      question: "Nguyên tắc vàng hàng đầu trong tối ưu hóa Heuristic câu truy vấn đại số quan hệ là:",
      options: [
        "Thực hiện phép chọn (selection) sớm nhất có thể bằng cách đẩy phép chọn xuống sát các nút lá.",
        "Luôn luôn thực hiện toàn bộ các phép tích Đề-các trước rồi mới áp dụng các phép chọn lọc sau.",
        "Thực hiện phép chiếu sau cùng để tránh làm mất đi các thuộc tính phụ trợ trong quá trình nối.",
        "Giữ nguyên cây cú pháp ban đầu và chỉ thay đổi thứ tự quét các dòng dữ liệu trong bảng gốc."
      ],
      correctAnswer: 0,
      explanation: "Chiến lược 1 (Quy tắc vàng): Thực hiện phép chọn (selection) sớm nhất có thể – đẩy phép chọn xuống sâu trong cây biểu thức để giảm số bộ dữ liệu ở các bước sau."
    },
    {
      id: "q4",
      question: "Phép kết nối bằng (Equi-Join) và tích Đề-các trong đại số quan hệ có các tính chất:",
      options: [
        "Đều có tính chất giao hoán (L1) và tính chất kết hợp (L2) khi thực thi các biểu thức quan hệ.",
        "Chỉ có tính chất giao hoán chứ không có tính chất kết hợp khi kết nối từ ba quan hệ trở lên.",
        "Không có tính chất giao hoán nhưng luôn luôn thỏa mãn tính chất kết hợp trên mọi bảng dữ liệu.",
        "Chỉ thỏa mãn tính chất kết hợp khi tất cả các bảng dữ liệu đều có chung số lượng thuộc tính."
      ],
      correctAnswer: 0,
      explanation: "Theo Luật L1 & L2: Cả phép kết nối (Join) và tích Đề-các đều có tính chất giao hoán và tính chất kết hợp."
    },
    {
      id: "q5",
      question: "Khi có một dãy các phép chiếu lồng nhau π_{A}(π_{B}(E)) với A ⊆ B, ta có thể:",
      options: [
        "Rút gọn toàn bộ dãy phép chiếu thành một phép chiếu duy nhất với tập thuộc tính ngoài cùng A.",
        "Nhân đôi số lượng các phép chiếu để đảm bảo không bị mất mát các thuộc tính trung gian của B.",
        "Chuyển đổi toàn bộ các phép chiếu thành các phép chọn tương ứng trước khi tiến hành quét bảng.",
        "Giữ nguyên toàn bộ các phép chiếu lồng nhau để máy chủ cơ sở dữ liệu tự động tối ưu hóa sau."
      ],
      correctAnswer: 0,
      explanation: "Theo Luật L3: Dãy các phép chiếu lồng nhau π_A(π_B(E)) ≡ π_A(E) (với A ⊆ B) rút gọn thành 1 phép chiếu ngoài cùng."
    },
    {
      id: "q6",
      question: "Cho F = F₁ ∧ F₂ với F₁ chỉ trên E₁ và F₂ chỉ trên E₂. Biểu thức σ_F(E₁ × E₂) tương đương:",
      options: [
        "σ_{F₁}(E₁) × σ_{F₂}(E₂) (Đẩy phép chọn F₁ xuống lá E₁ và phép chọn F₂ xuống lá E₂ trước khi nhân).",
        "σ_{F₁}(E₁ × E₂) ∪ σ_{F₂}(E₁ × E₂) (Thực hiện phép hợp giữa hai phép tích Đề-các độc lập trên bảng).",
        "π_{F₁}(E₁) ⋈ π_{F₂}(E₂) (Chuyển đổi toàn bộ các phép chọn thành các phép chiếu tương ứng của bảng).",
        "σ_{F₁ ∨ F₂}(E₁ × E₂) (Biến đổi điều kiện giao hội AND thành điều kiện tuyển hợp OR ở trên đỉnh ngọn)."
      ],
      correctAnswer: 0,
      explanation: "Theo Luật L6 (Hệ quả 1): Khi F = F₁ ∧ F₂ với F₁ chỉ trên E₁ và F₂ chỉ trên E₂, ta có σ_F(E₁ × E₂) ≡ σ_{F₁}(E₁) × σ_{F₂}(E₂)."
    },
    {
      id: "q7",
      question: "Vì sao không có quy tắc tổng quát cho việc đẩy phép chiếu (π) xuống trước phép hiệu (\\)?",
      options: [
        "Vì phép chiếu có thể làm trùng lặp các bộ và làm sai lệch tập kết quả của phép hiệu ban đầu.",
        "Vì phép hiệu hai tập hợp không cho phép thực hiện trên các quan hệ có ít hơn hai thuộc tính.",
        "Vì phép chiếu luôn luôn đòi hỏi phải thực hiện sắp xếp lại toàn bộ các dòng dữ liệu trên đĩa.",
        "Vì hệ quản trị cơ sở dữ liệu quan hệ tự động từ chối mọi biểu thức có chứa toán tử phép hiệu."
      ],
      correctAnswer: 0,
      explanation: "Lưu ý quan trọng từ giáo trình: Không có quy tắc tổng quát cho việc đẩy phép chiếu xuống trước phép hiệu các tập hợp (\\) vì π(E₁ \\ E₂) ≠ π(E₁) \\ π(E₂)."
    },
    {
      id: "q8",
      question: "Trong câu truy vấn Thư viện tìm sách mượn trước 12/01/2009, thuộc tính `ngay` nên được:",
      options: [
        "Lọc trực tiếp bằng phép chọn σ_{ngay < '12/01/2009'} ngay trên lá Muon trước khi mang đi kết nối.",
        "Lọc sau cùng ở trên đỉnh ngọn cây sau khi đã thực hiện xong toàn bộ các phép tích Đề-các 3 bảng.",
        "Chiếu lấy giá trị ra ngoài kết quả cuối cùng cùng với tên sách để người dùng tiện việc theo dõi.",
        "Xóa bỏ khỏi lược đồ cơ sở dữ liệu để giảm bớt dung lượng của bảng Muon trong quá trình truy vấn."
      ],
      correctAnswer: 0,
      explanation: "Đẩy phép chọn σ_{ngay < '12/01/2009'} xuống trực tiếp trên quan hệ Muon để thu nhỏ số lượt mượn trước khi kết nối với DocGia và Sach."
    },
    {
      id: "q9",
      question: "Khi kết nối nhiều quan hệ, việc thay đổi thứ tự thực hiện phép nối (Join Order) nhằm:",
      options: [
        "Giảm thiểu kích thước của các quan hệ trung gian sinh ra ở các bước kết nối đầu tiên trong cây.",
        "Đảm bảo các bảng dữ liệu luôn luôn được kết nối theo đúng thứ tự khai báo trong mệnh đề FROM.",
        "Tăng số lượng các phép tích Đề-các để tận dụng tối đa dung lượng bộ nhớ đệm RAM của hệ thống.",
        "Loại bỏ hoàn toàn sự cần thiết của việc sử dụng các cấu trúc chỉ mục B-Tree trong cơ sở dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "Tối ưu thứ tự phép nối (Join Ordering): Lựa chọn thứ tự sao cho các bảng có điều kiện lọc mạnh được kết nối trước, giảm thiểu kích thước dữ liệu trung gian."
    },
    {
      id: "q10",
      question: "Việc tổ hợp các phép toán một ngôi (Unary: σ, π) liền kề nhau có lợi ích lớn nhất là:",
      options: [
        "Cho phép thực hiện đồng thời cả lọc và chiếu trong một lần quét dữ liệu (Pipelining Single Scan).",
        "Làm tăng thêm số lượng các nút trung gian trên cây đại số quan hệ để dễ dàng gỡ lỗi truy vấn hơn.",
        "Tự động chuyển đổi các bảng dữ liệu trên đĩa cứng thành các bảng dữ liệu tạm thời trong bộ nhớ đệm.",
        "Giúp hệ thống không cần phải kiểm tra tính hợp lệ của các thuộc tính trong danh mục từ điển dữ liệu."
      ],
      correctAnswer: 0,
      explanation: "Tổ hợp các phép tính 1 ngôi: Thực hiện đồng thời cả phép chọn và phép chiếu trong cùng 1 lần duyệt dữ liệu (Single Scan / Pipelining), giảm số lần đọc dữ liệu."
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
              <h3 className="text-xl font-bold text-gray-900">Grand Master Exam: Tối Ưu Hóa Câu Hỏi</h3>
              <span className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-2.5 py-0.5 text-xs font-extrabold text-white shadow-sm">
                10 CÂU &bull; CHƯƠNG VII
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bài thi tổng lực toàn bộ Chương VII: Mục tiêu tối ưu, 6 Chiến lược, 11 Quy tắc L1-L11 và Cây đại số quan hệ
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
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:from-teal-700 hover:to-indigo-700 transition-all disabled:opacity-50"
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
