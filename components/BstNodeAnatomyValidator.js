"use client";

import React, { useState } from "react";
import { CheckCircle, XCircle, Trophy, Flame, RotateCcw, Layers, ShieldCheck, AlertTriangle } from "lucide-react";

export default function BstNodeAnatomyValidator() {
  // Left panel: hover state on node regions
  const [hoveredRegion, setHoveredRegion] = useState("key"); // "parent" | "left" | "right" | "key"

  // Right panel: 10 quiz questions for BST Property
  const questions = [
    {
      id: 1,
      parent: 15,
      left: 6,
      right: 23,
      isValid: true,
      explanation: "Chính xác! Con trái (6) < Gốc (15) < Con phải (23). Cả hai nhánh đều thỏa mãn tính chất BST chặt chẽ.",
    },
    {
      id: 2,
      parent: 12,
      left: 8,
      right: 6,
      isValid: false,
      explanation: "Vi phạm! Con phải (6) bé hơn Gốc (12). Quy tắc BST yêu cầu toàn bộ cây con bên phải PHẢI lớn hơn gốc (right > root).",
    },
    {
      id: 3,
      parent: 20,
      left: 25,
      right: 30,
      isValid: false,
      explanation: "Vi phạm! Con trái (25) lớn hơn Gốc (20). Toàn bộ cây con bên trái PHẢI nhỏ hơn gốc (left < root).",
    },
    {
      id: 4,
      parent: 4,
      left: null,
      right: 5,
      isValid: true,
      explanation: "Chính xác! Đỉnh không có con trái, con phải là 5 > 4. Hoàn toàn thỏa mãn BST Property.",
    },
    {
      id: 5,
      parent: 71,
      left: 50,
      right: null,
      isValid: true,
      explanation: "Chính xác! Con trái (50) < Gốc (71), không có con phải. Hoàn toàn đúng chuẩn BST.",
    },
    {
      id: 6,
      parent: 10,
      left: 10,
      right: 15,
      isValid: false,
      explanation: "Vi phạm! Với giả định các khóa là duy nhất (distinct keys), không được phép có giá trị trùng nhau x.left.key == x.key (10 == 10).",
    },
    {
      id: 7,
      parent: 18,
      left: null,
      right: null,
      isValid: true,
      explanation: "Chính xác! Đỉnh lá không có con trái lẫn con phải luôn luôn thỏa mãn tính chất BST hiển nhiên.",
    },
    {
      id: 8,
      parent: 40,
      left: 35,
      right: 38,
      isValid: false,
      explanation: "Vi phạm! Con phải (38) lại bé hơn Gốc (40). Nhánh phải bắt buộc phải chứa các giá trị lớn hơn gốc.",
    },
    {
      id: 9,
      parent: 55,
      left: 30,
      right: 90,
      isValid: true,
      explanation: "Chính xác! 30 < 55 < 90. Cả hai nhánh đều thỏa mãn tính chất phân nhánh của cây BST.",
    },
    {
      id: 10,
      parent: 60,
      left: 50,
      right: 60,
      isValid: false,
      explanation: "Vi phạm! Khóa bên phải bằng gốc (60 == 60). Với giả định khóa duy nhất, nhánh phải bắt buộc phải lớn hơn nghiêm ngặt (>).",
    },
  ];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // true | false | null
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = questions[currentQIndex];

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentQ.isValid) {
      setScore((prev) => prev + 1);
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
      });
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kiến Trúc Đỉnh &amp; Luật Bất Biến</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Giải Phẫu Vertex &amp; Phòng Luyện Tính Chất BST
          </h3>
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Chương 4.1 &amp; 4.2 • Tính chất cốt lõi
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT PANEL: Interactive Node Anatomy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Cấu Trúc 1 Vertex (x)
              </h4>
              <span className="text-[11px] text-slate-500 italic">Rê chuột vào các vùng để xem</span>
            </div>

            {/* SVG Interactive Node Drawing */}
            <div className="relative w-full max-w-[280px] mx-auto my-2 aspect-square flex items-center justify-center bg-emerald-50/30 rounded-2xl border border-emerald-100/60 p-2">
              <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-sm select-none">
                {/* Pointer to Parent */}
                <g
                  onMouseEnter={() => setHoveredRegion("parent")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <line
                    x1="150"
                    y1="110"
                    x2="150"
                    y2="35"
                    stroke={hoveredRegion === "parent" ? "#0284c7" : "#94a3b8"}
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                  <rect
                    x="95"
                    y="10"
                    width="110"
                    height="32"
                    rx="8"
                    fill={hoveredRegion === "parent" ? "#e0f2fe" : "#f8fafc"}
                    stroke={hoveredRegion === "parent" ? "#0284c7" : "#cbd5e1"}
                    strokeWidth="2"
                  />
                  <text
                    x="150"
                    y="31"
                    textAnchor="middle"
                    fill={hoveredRegion === "parent" ? "#0369a1" : "#475569"}
                    fontSize="13"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    x.parent &uarr;
                  </text>
                </g>

                {/* Left Child Branch */}
                <g
                  onMouseEnter={() => setHoveredRegion("left")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <line
                    x1="115"
                    y1="165"
                    x2="55"
                    y2="235"
                    stroke={hoveredRegion === "left" ? "#e11d48" : "#94a3b8"}
                    strokeWidth="3"
                  />
                  <circle
                    cx="45"
                    cy="250"
                    r="28"
                    fill={hoveredRegion === "left" ? "#ffe4e6" : "#f8fafc"}
                    stroke={hoveredRegion === "left" ? "#e11d48" : "#cbd5e1"}
                    strokeWidth="2"
                  />
                  <text
                    x="45"
                    y="254"
                    textAnchor="middle"
                    fill={hoveredRegion === "left" ? "#be123c" : "#475569"}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    x.left
                  </text>
                  <text
                    x="45"
                    y="266"
                    textAnchor="middle"
                    fill="#e11d48"
                    fontSize="9"
                    fontWeight="bold"
                  >
                    &lt; x.key
                  </text>
                </g>

                {/* Right Child Branch */}
                <g
                  onMouseEnter={() => setHoveredRegion("right")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <line
                    x1="185"
                    y1="165"
                    x2="245"
                    y2="235"
                    stroke={hoveredRegion === "right" ? "#7e22ce" : "#94a3b8"}
                    strokeWidth="3"
                  />
                  <circle
                    cx="255"
                    cy="250"
                    r="28"
                    fill={hoveredRegion === "right" ? "#f3e8ff" : "#f8fafc"}
                    stroke={hoveredRegion === "right" ? "#7e22ce" : "#cbd5e1"}
                    strokeWidth="2"
                  />
                  <text
                    x="255"
                    y="254"
                    textAnchor="middle"
                    fill={hoveredRegion === "right" ? "#6b21a8" : "#475569"}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    x.right
                  </text>
                  <text
                    x="255"
                    y="266"
                    textAnchor="middle"
                    fill="#7e22ce"
                    fontSize="9"
                    fontWeight="bold"
                  >
                    &gt; x.key
                  </text>
                </g>

                {/* Center Node (x.key) */}
                <g
                  onMouseEnter={() => setHoveredRegion("key")}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="40"
                    fill={hoveredRegion === "key" ? "#047857" : "#059669"}
                    stroke={hoveredRegion === "key" ? "#10b981" : "#34d399"}
                    strokeWidth="3"
                  />
                  <text
                    x="150"
                    y="145"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="18"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    15
                  </text>
                  <text
                    x="150"
                    y="163"
                    textAnchor="middle"
                    fill="#d1fae5"
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    x.key (value)
                  </text>
                </g>
              </svg>
            </div>

            {/* Dynamic Region Inspector Info Box */}
            <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              {hoveredRegion === "parent" && (
                <div>
                  <span className="font-mono text-sky-700 font-bold text-sm">x.parent</span>: Con trỏ trỏ ngược về nút cha của nút <span className="font-mono font-bold">x</span> (hoặc <span className="font-mono text-amber-700 font-bold">NULL</span> nếu <span className="font-mono">x</span> là Root).
                </div>
              )}
              {hoveredRegion === "left" && (
                <div>
                  <span className="font-mono text-rose-700 font-bold text-sm">x.left</span>: Con trỏ trỏ tới con trái. Mọi phần tử trong cây con trái bắt buộc phải có <span className="font-mono font-bold text-rose-700">khóa &lt; x.key</span>.
                </div>
              )}
              {hoveredRegion === "right" && (
                <div>
                  <span className="font-mono text-purple-700 font-bold text-sm">x.right</span>: Con trỏ trỏ tới con phải. Mọi phần tử trong cây con phải bắt buộc phải có <span className="font-mono font-bold text-purple-700">khóa &gt; x.key</span>.
                </div>
              )}
              {hoveredRegion === "key" && (
                <div>
                  <span className="font-mono text-emerald-800 font-bold text-sm">x.key (hoặc x.value / x.data)</span>: Dữ liệu thực tế được lưu tại đỉnh (trong bài toán Census, đây chính là <strong>Tuổi - Age</strong>).
                </div>
              )}
            </div>
          </div>

          {/* Mathematical BST Property Banner */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Bất Đẳng Thức BST Property (Khóa Duy Nhất):
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-mono text-xs flex items-center justify-center gap-2">
              <span className="text-rose-700 font-bold px-2 py-0.5 rounded bg-rose-100 border border-rose-200">
                x.left.key
              </span>
              <span className="text-amber-800 font-bold">&lt;</span>
              <span className="text-emerald-800 font-bold px-2.5 py-0.5 rounded bg-emerald-100 border border-emerald-300">
                x.key
              </span>
              <span className="text-amber-800 font-bold">&lt;</span>
              <span className="text-purple-700 font-bold px-2 py-0.5 rounded bg-purple-100 border border-purple-200">
                x.right.key
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: 10-Question Mini-Game BST Property Checker (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm">
          <div>
            {/* Quiz Top Bar */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-300">
                  <Trophy className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">BST Property Validator Mini-Quiz</h4>
                  <div className="text-[11px] text-slate-500">Kiểm tra tính hợp lệ của cây</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold font-mono">
                  <Flame className="w-3.5 h-3.5 text-orange-600" />
                  <span>Streak: {streak}</span>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
                  Điểm: {score}/{questions.length}
                </div>
              </div>
            </div>

            {/* Question Card Content */}
            {!quizFinished ? (
              <div>
                <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                  <span>Câu hỏi {currentQIndex + 1} / {questions.length}</span>
                  <span className="italic">Xét bộ 3 đỉnh cục bộ:</span>
                </div>

                {/* Subtree Visualizer Box */}
                <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 flex flex-col items-center justify-center my-3 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Parent Node */}
                    <div className="w-14 h-14 rounded-full bg-emerald-600 border-2 border-emerald-400 text-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
                      {currentQ.parent}
                    </div>

                    {/* Branches */}
                    <div className="w-40 h-8 flex justify-between px-6 relative">
                      <div className="w-1/2 border-r-2 border-slate-300 rotate-[35deg] origin-top-right transform -translate-x-3" />
                      <div className="w-1/2 border-l-2 border-slate-300 -rotate-[35deg] origin-top-left transform translate-x-3" />
                    </div>

                    {/* Children Nodes */}
                    <div className="w-48 flex justify-between items-center">
                      {/* Left Child */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full border-2 font-mono font-bold text-sm flex items-center justify-center shadow-sm ${
                            currentQ.left !== null
                              ? "bg-rose-50 border-rose-400 text-rose-800"
                              : "bg-white border-slate-300 text-slate-400 border-dashed"
                          }`}
                        >
                          {currentQ.left !== null ? currentQ.left : "NULL"}
                        </div>
                        <span className="text-[10px] text-rose-700 font-mono mt-1 font-bold">x.left</span>
                      </div>

                      {/* Right Child */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full border-2 font-mono font-bold text-sm flex items-center justify-center shadow-sm ${
                            currentQ.right !== null
                              ? "bg-purple-50 border-purple-400 text-purple-800"
                              : "bg-white border-slate-300 text-slate-400 border-dashed"
                          }`}
                        >
                          {currentQ.right !== null ? currentQ.right : "NULL"}
                        </div>
                        <span className="text-[10px] text-purple-700 font-mono mt-1 font-bold">x.right</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prompt */}
                <div className="text-center my-3 text-sm font-bold text-slate-800">
                  Bộ đỉnh trên có thỏa mãn tính chất <span className="text-emerald-700 font-mono">BST Property</span> không?
                </div>

                {/* Answer Buttons */}
                {!isAnswered ? (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-900 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>HỢP LỆ (VALID)</span>
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="py-3 px-4 rounded-xl bg-rose-50 border border-rose-300 hover:bg-rose-100 text-rose-900 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span>VI PHẠM (INVALID)</span>
                    </button>
                  </div>
                ) : (
                  /* Feedback & Explanation Box */
                  <div className="mt-4 space-y-3">
                    <div
                      className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                        selectedAnswer === currentQ.isValid
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      {selectedAnswer === currentQ.isValid ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold text-sm">
                          {selectedAnswer === currentQ.isValid ? "Tuyệt vời! Bạn trả lời đúng." : "Chưa chính xác!"}
                        </div>
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                          {currentQ.explanation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleNextQuestion}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <span>{currentQIndex < questions.length - 1 ? "Câu hỏi kế tiếp &rarr;" : "Xem kết quả tổng kết"}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Finished Result Screen */
              <div className="text-center py-6 space-y-4">
                <div className="inline-flex p-4 rounded-full bg-amber-100 border border-amber-300 text-amber-700 mb-2">
                  <Trophy className="w-10 h-10 animate-bounce" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Hoàn Thành Bài Luyện BST Property!
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Bạn đã đạt <span className="font-mono text-emerald-700 font-bold text-base">{score}/{questions.length}</span> điểm với chuỗi đúng liên tiếp dài nhất là <span className="font-mono text-orange-600 font-bold">{maxStreak}</span> câu.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs transition-all shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4 text-emerald-600" />
                    <span>Luyện Tập Lại Từ Đầu</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Luật kiểm tra: <span className="font-mono text-emerald-700 font-bold">left &lt; parent &lt; right</span></span>
            <span className="text-emerald-800 font-bold">Áp dụng cho MỌI đỉnh trong cây</span>
          </div>
        </div>
      </div>
    </div>
  );
}
