"use client";

import React, { useState } from "react";
import { Trophy, CheckCircle2, RotateCcw } from "lucide-react";

export default function HeapChapterFinalMasterMatrix() {
  const [activeTab, setActiveTab] = useState("matrix"); // "matrix" | "quiz"

  const matrixData = [
    { op: "Height của complete binary tree (n phần tử)", complexity: "O(log n)", note: "Nền tảng cho mọi phép toán trên Heap", isFast: false },
    { op: "Insert(v)", complexity: "O(log n)", note: "Chèn vào cuối mảng + ShiftUp lên", isFast: false },
    { op: "ShiftUp(i)", complexity: "O(log n)", note: "Leo tối đa chiều cao cây h = ⌊log₂ n⌋", isFast: false },
    { op: "ExtractMax()", complexity: "O(log n)", note: "Lấy Root, đưa lá cuối lên + ShiftDown", isFast: false },
    { op: "ShiftDown(i)", complexity: "O(log n)", note: "Chìm tối đa chiều cao cây h = ⌊log₂ n⌋", isFast: false },
    { op: "BuildHeapSlow (Insert n lần)", complexity: "O(n log n)", note: "Cách tiếp cận ngây thơ (Naive)", isFast: false },
    { op: "BuildHeap (ShiftDown chiến lược)", complexity: "O(n)", note: "⭐ Bắt đầu từ ⌊n/2⌋ về 1 (Tổng chuỗi hội tụ < 2)", isFast: true },
    { op: "HeapSort (BuildHeap + n * ExtractMax)", complexity: "O(n log n)", note: "Sắp xếp tối ưu tại chỗ (In-Place)", isFast: false },
  ];

  // 6 Mini-Quiz questions
  const quizQuestions = [
    {
      q: "1. Vị trí phần tử lớn nhất trong Binary Max-Heap luôn nằm ở đâu?",
      options: ["A. Một trong các nút lá", "B. Đỉnh Root A[1]", "C. Nút con trái của Root", "D. Bất kỳ đâu trong mảng"],
      correct: 1,
      exp: "Do tính chất A[parent(i)] >= A[i], mọi đường đi từ root xuống lá đều giảm dần => Root luôn là Max.",
    },
    {
      q: "2. Thuật toán BuildHeap nhanh (Bottom-Up) duyệt các nút theo thứ tự nào?",
      options: ["A. Từ 1 đến n", "B. Từ n về 1", "C. Từ ⌊n/2⌋ lùi về 1", "D. Chỉ duyệt các nút lá"],
      correct: 2,
      exp: "Bắt đầu từ nút cha không phải lá cuối cùng i = parent(heapsize) = ⌊n/2⌋ về 1 và gọi ShiftDown.",
    },
    {
      q: "3. Độ phức tạp thời gian của BuildHeap phiên bản nhanh là bao nhiêu?",
      options: ["A. O(n log n)", "B. O(n)", "C. O(log n)", "D. O(n²)"],
      correct: 1,
      exp: "Tổng chi phí ∑ (n/2^(h+1)) * O(h) = O(n * 2) = O(n) do chuỗi vô hạn hội tụ về 2.",
    },
    {
      q: "4. Công thức tìm cha của nút i trong mảng 1-based (trừ root) là:",
      options: ["A. parent(i) = 2*i", "B. parent(i) = i - 1", "C. parent(i) = ⌊i / 2⌋", "D. parent(i) = 2*i + 1"],
      correct: 2,
      exp: "Trong mảng 1-based, parent(i) = ⌊i/2⌋; con trái left(i) = 2i; con phải right(i) = 2i+1.",
    },
    {
      q: "5. Ưu điểm nổi bật nhất của HeapSort so với MergeSort là gì?",
      options: ["A. Chạy nhanh hơn O(n)", "B. Sắp xếp tại chỗ In-Place O(1) RAM", "C. Cache-friendly hơn", "D. Ổn định (Stable)"],
      correct: 1,
      exp: "HeapSort là in-place (không tốn thêm mảng phụ), trong khi MergeSort cần thêm mảng phụ O(n).",
    },
    {
      q: "6. Trong ExtractMax(), nút nào được chọn để tạm thời thay thế Root?",
      options: ["A. Con lớn hơn của Root", "B. Lá cuối cùng A[heapsize]", "C. Nút lá đầu tiên A[⌊n/2⌋+1]", "D. Bất kỳ nút nào"],
      correct: 1,
      exp: "Lá cuối cùng A[heapsize] là phần tử duy nhất có thể bốc đi mà không làm đứt gãy tính chất Complete Tree.",
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectQuiz = (qIdx, optIdx) => {
    if (submitted) return;
    setUserAnswers({ ...userAnswers, [qIdx]: optIdx });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Tổng Kết Toàn Bộ Chương (Summary)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Bảng Vàng Độ Phức Tạp &amp; Mini-Quiz Tốt Nghiệp Bài 10
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng hợp toàn bộ Time Complexity cần ghi nhớ và bài kiểm tra tốt nghiệp 6 câu trắc nghiệm.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "matrix"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Bảng Vàng Time Complexity
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "quiz"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mini-Quiz Tốt Nghiệp (6 Câu)
          </button>
        </div>
      </div>

      {/* Tab 1: Master Complexity Matrix */}
      {activeTab === "matrix" && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px] uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4">Phép Toán / Thao Tác</th>
                  <th className="py-3.5 px-4 text-center">Time Complexity</th>
                  <th className="py-3.5 px-4">Ghi Chú Trọng Tâm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {matrixData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-all ${
                      row.isFast
                        ? "bg-emerald-50/90 border-l-4 border-l-emerald-500 font-bold"
                        : "hover:bg-slate-50/60"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {row.op}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-2.5 py-1 rounded-lg font-extrabold shadow-sm ${
                        row.isFast
                          ? "bg-emerald-100 border border-emerald-400 text-emerald-950"
                          : "bg-amber-50 border border-amber-300 text-amber-950"
                      }`}>
                        {row.complexity}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-sans text-xs text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 6 Key Takeaways */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2 text-xs font-sans shadow-sm">
            <span className="font-bold text-amber-950 font-mono block">📌 Tóm Tắt Toàn Chương (Slide Summary):</span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 text-[11px] leading-relaxed">
              <li>• Heap DS và ứng dụng làm <strong>PriorityQueue</strong> cực kỳ hiệu quả.</li>
              <li>• Lưu heap dưới dạng <strong>compact array</strong> với các công thức O(1).</li>
              <li>• Luôn duy trì <strong>complete binary tree</strong> và <strong>heap property</strong>!</li>
              <li>• Xây dựng heap từ tập số cho trước chỉ trong <strong>O(n)</strong>.</li>
              <li>• Ứng dụng sắp xếp HeapSort đạt <strong>O(n log n)</strong> tại chỗ (In-Place).</li>
              <li>• PriorityQueue sẽ tiếp tục được sử dụng trong các bài toán đồ thị của CS2010.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 2: Graduation Mini-Quiz */}
      {activeTab === "quiz" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 font-mono">Hoàn thành 6 câu hỏi để kiểm tra độ hiểu bài:</span>
            {submitted && (
              <button
                onClick={handleResetQuiz}
                className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-mono border border-slate-200 shadow-sm transition-all flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Làm lại quiz
              </button>
            )}
          </div>

          <div className="space-y-3">
            {quizQuestions.map((q, qIdx) => {
              const userAns = userAnswers[qIdx];

              return (
                <div key={qIdx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                  <div className="text-xs font-bold text-slate-900 font-sans">{q.q}</div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = userAns === optIdx;

                      let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm";
                      if (submitted) {
                        if (optIdx === q.correct) btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold shadow-sm";
                        else if (isSelected) btnStyle = "bg-rose-100 border-rose-400 text-rose-950";
                        else btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                      } else if (isSelected) {
                        btnStyle = "bg-sky-100 border-sky-400 text-sky-950 font-bold shadow-sm";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectQuiz(qIdx, optIdx)}
                          className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {submitted && optIdx === q.correct && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] font-sans text-slate-700 shadow-sm">
                      <strong className="text-emerald-950 block font-mono">Giải thích:</strong>
                      {q.exp}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(userAnswers).length < quizQuestions.length}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs transition-all shadow-md"
            >
              Nộp Bài &amp; Xem Điểm Tốt Nghiệp Bài 10
            </button>
          ) : (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-amber-600" />
                <div>
                  <div className="text-sm font-bold text-emerald-950 font-mono">
                    Kết Quả: {calculateScore()} / {quizQuestions.length} Câu Đúng!
                  </div>
                  <div className="text-xs text-slate-600 font-sans mt-0.5">
                    {calculateScore() === quizQuestions.length
                      ? "Xuất sắc! Bạn đã làm chủ 100% kiến thức Priority Queue & Binary Max Heap."
                      : "Hãy xem lại các câu giải thích bên trên để củng cố điểm chưa nhớ nhé!"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
