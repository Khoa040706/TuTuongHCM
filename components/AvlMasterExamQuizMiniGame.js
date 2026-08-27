"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from "lucide-react";

export default function AvlMasterExamQuizMiniGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quizData = [
    {
      q: "Câu 1: Chiều cao (height) của cây nhị phân rỗng được quy ước bằng bao nhiêu?",
      options: [
        "A. Bằng -1 theo số cạnh",
        "B. Bằng 0 theo số đỉnh",
        "C. Bằng 1 theo quy ước",
        "D. Không xác định được",
      ],
      correct: 0,
      explain: "Quy ước trong slide DSA: Height tính bằng số cạnh đến lá sâu nhất. Cây rỗng có height = -1, đỉnh lá có height = 0.",
    },
    {
      q: "Câu 2: Điều kiện Invariant của cây AVL đòi hỏi điều gì tại mỗi đỉnh x?",
      options: [
        "A. |x.left.h - x.right.h| ≤ 1",
        "B. |x.left.h - x.right.h| = 0",
        "C. x.left.h < x.right.h luôn",
        "D. x.size = x.left.size + 1",
      ],
      correct: 0,
      explain: "Cây AVL đòi hỏi chênh lệch chiều cao giữa hai cây con |x.left.height - x.right.height| ≤ 1 tại MỌI đỉnh.",
    },
    {
      q: "Câu 3: Đỉnh x có bf(x) = +2 và con trái có bf(x.left) = +1 thuộc trường hợp nào?",
      options: [
        "A. Left-Left Case (LL)",
        "B. Left-Right Case (LR)",
        "C. Right-Right Case(RR)",
        "D. Right-Left Case (RL)",
      ],
      correct: 0,
      explain: "bf(x) = +2 và bf(x.left) = +1 là trường hợp lệch cùng phía bên trái: Left-Left (LL) Case.",
    },
    {
      q: "Câu 4: Để xử lý mất cân bằng Left-Left (LL) Case, ta thực hiện phép quay nào?",
      options: [
        "A. Phép quay Right Rotate",
        "B. Phép quay Left Rotate",
        "C. Phép quay Left-Right",
        "D. Phép quay Right-Left",
      ],
      correct: 0,
      explain: "LL Case chỉ cần đúng 1 phép quay đơn Right Rotation quanh đỉnh x.",
    },
    {
      q: "Câu 5: Để xử lý mất cân bằng Left-Right (LR) Case, ta thực hiện phép quay nào?",
      options: [
        "A. leftRotate con rồi rightRotate cha",
        "B. rightRotate con rồi leftRotate cha",
        "C. rightRotate cha rồi leftRotate con",
        "D. Chỉ thực hiện rightRotate tại cha",
      ],
      correct: 0,
      explain: "LR Case là lệch khác phía (zíc-zắc): Bước 1 quay trái con (x.left), Bước 2 quay phải cha (x).",
    },
    {
      q: "Câu 6: Phép quay rotateLeft(T) yêu cầu điều kiện tiên quyết nào đối với đỉnh T?",
      options: [
        "A. T.right != null (có con phải)",
        "B. T.left != null (có con trái)",
        "C. T.parent != null (phải có cha)",
        "D. T phải là đỉnh lá của cây",
      ],
      correct: 0,
      explain: "rotateLeft(T) đưa con phải lên làm cha mới nên bắt buộc T phải có con phải (T.right != null).",
    },
    {
      q: "Câu 7: Trong 1 lần thao tác INSERT vào cây AVL, số lần rebalance tối đa là bao nhiêu?",
      options: [
        "A. Tối đa đúng 1 lần duy nhất",
        "B. Lên tới O(log n) lần liên",
        "C. Tối đa 2 lần xoay liên tiếp",
        "D. Luôn luôn xoay tại mọi tầng",
      ],
      correct: 0,
      explain: "Sau khi xoay rebalance tại đỉnh mất cân bằng đầu tiên, chiều cao cây con phục hồi về ban đầu nên dừng lại ngay (tối đa 1 lần).",
    },
    {
      q: "Câu 8: Trong 1 lần thao tác DELETION khỏi cây AVL, số lần rebalance tối đa là bao nhiêu?",
      options: [
        "A. Lên tới O(log n) lần xoay",
        "B. Tối đa đúng 1 lần duy nhất",
        "C. Không bao giờ cần phải xoay",
        "D. Luôn luôn bằng 2 lần xoay",
      ],
      correct: 0,
      explain: "Khi xóa, phép xoay làm giảm chiều cao cây con, có thể gây mất cân bằng dây chuyền lên các tổ tiên phía trên đến tận Root (tối đa O(log n) lần).",
    },
    {
      q: "Câu 9: Thao tác nào sau đây trên cây AVL chạy trong thời gian O(n) thay vì O(h)?",
      options: [
        "A. Inorder Traversal toàn cây",
        "B. Tìm phần tử nhỏ nhất Min",
        "C. Tìm phần tử kế tiếp Succ",
        "D. Xóa một đỉnh khỏi cây AVL",
      ],
      correct: 0,
      explain: "Inorder Traversal bắt buộc phải duyệt qua toàn bộ n đỉnh của cây nên tốn O(n). Các thao tác khác chỉ đi theo 1 đường nên tốn O(h).",
    },
    {
      q: "Câu 10: Nhờ cấu trúc Height-balanced, chiều cao h của cây AVL có n đỉnh thỏa mãn gì?",
      options: [
        "A. h < 2·log₂(n) = O(log n)",
        "B. h = n - 1 = O(n) tuyến tính",
        "C. h = sqrt(n) căn bậc hai",
        "D. h = log₂(n) cân bằng tuyệt",
      ],
      correct: 0,
      explain: "Chứng minh toán học (Fibonacci Tree) khẳng định h < 2·log₂(n) ⟹ h = O(log n) trong mọi tình huống!",
    },
  ];

  const current = quizData[currentQuestion];

  const handleSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === current.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mini-Quiz Ôn Tập Toàn Diện Bài 9 (10 Câu)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Thử Thách: AVL Tree Master Quiz
          </h3>
        </div>

        {/* Score & Progress */}
        <div className="flex items-center gap-3 text-xs font-mono self-start md:self-auto">
          <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm">
            Câu: {currentQuestion + 1} / {quizData.length}
          </span>
          <span className="px-3 py-1 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold shadow-sm">
            Điểm: {score}
          </span>
        </div>
      </div>

      {/* Quiz Body */}
      {!showResult ? (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 leading-relaxed font-sans">
              {current.q}
            </h4>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-2.5">
            {current.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === current.correct;

              let btnClass = "bg-white border-slate-200 hover:bg-slate-50 text-slate-800 shadow-sm";
              if (isAnswered) {
                if (isCorrect) btnClass = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500";
                else if (isSelected) btnClass = "bg-rose-50 border-rose-400 text-rose-900";
                else btnClass = "bg-slate-50 border-slate-200 text-slate-400";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border text-left text-xs transition-all flex items-center justify-between font-mono ${btnClass}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout */}
          {isAnswered && (
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2 shadow-sm animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-950 uppercase font-mono">Giải thích học thuật:</span>
                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm font-sans"
                >
                  {currentQuestion < quizData.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">{current.explain}</p>
            </div>
          )}
        </div>
      ) : (
        /* Result Screen */
        <div className="p-8 rounded-3xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8 text-emerald-700" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Hoàn Thành Thử Thách!</h4>
          <p className="text-sm text-slate-700 font-mono">
            Kết quả của bạn: <strong className="text-emerald-800 text-lg">{score} / {quizData.length}</strong> điểm ({((score / quizData.length) * 100).toFixed(0)}%)
          </p>
          <div className="text-xs text-slate-600 max-w-md mx-auto">
            {score === 10
              ? "Xuất sắc! Bạn đã nắm vững 100% các kiến thức cốt lõi và bẫy thi của Bài 9 AVL Tree."
              : "Bạn đã làm rất tốt! Hãy xem lại các thẻ Flashcards để nắm vững các điểm dễ nhầm lẫn nhé."}
          </div>
          <button
            onClick={handleRestart}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 transition-all shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Làm lại bài thi
          </button>
        </div>
      )}
    </div>
  );
}
