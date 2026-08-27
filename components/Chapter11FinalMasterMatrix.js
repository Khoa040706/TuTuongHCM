"use client";

import React, { useState } from "react";
import { Trophy, RotateCcw } from "lucide-react";

export default function Chapter11FinalMasterMatrix() {
  const [activeTab, setActiveTab] = useState("dashboard"); // "dashboard" | "quiz"
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pillars = [
    {
      title: "1. Union-Find Disjoint Sets (UFDS)",
      color: "emerald",
      badge: "O(α(V)) ≈ O(1)",
      points: [
        "Mỗi tập là một cây; Representative item = Root (p[i] == i).",
        "FindSet đệ quy kết hợp Path Compression làm phẳng cây.",
        "UnionSet gộp cây thấp vào cây cao (Union-by-Rank).",
        "Java Vector.set() trả về phần tử cũ ⟹ phải viết 2 dòng riêng biệt.",
      ],
    },
    {
      title: "2. Bitmask Data Structure",
      color: "purple",
      badge: "32 Booleans / Integer",
      points: [
        "Biểu diễn tập Boolean nhỏ nhẹ bằng số nguyên nhị phân.",
        "Check bit i: x & (1 << i) (khác 0 là ON, = 0 là OFF).",
        "Turn ON bit i: x = x | (1 << i).",
        "Turn ON tất cả n bits: x = (1 << n) - 1.",
      ],
    },
    {
      title: "3. Graph Terminologies",
      color: "sky",
      badge: "No Root / Cha-Con",
      points: [
        "Kế thừa Vertex, Edge, Direction, Weight từ Tree nhưng không có Root.",
        "Complete Graph KN có NC2 = N(N-1)/2 cạnh.",
        "Simple Path không lặp đỉnh; Simple Cycle khép kín đầu-cuối.",
        "DAG: Có hướng, không chu trình; Tree: Connected + E = V - 1.",
      ],
    },
    {
      title: "4. Ba Cấu Trúc Biểu Diễn Đồ Thị",
      color: "amber",
      badge: "AdjList là Lựa Chọn Số 1",
      points: [
        "Adjacency Matrix: int[V][V] ⟹ Space O(V²), check kề O(1).",
        "Adjacency List: Vector<Vector<Pair>> ⟹ Space O(V+E), chuẩn CS2010.",
        "Edge List: Vector<Triple> ⟹ Space O(E), nền tảng Kruskal MST.",
        "So sánh Integer trong Java bắt buộc dùng .equals() thay vì !=.",
      ],
    },
  ];

  const quizQuestions = [
    {
      id: 1,
      q: "Trong cấu trúc UFDS có đồng thời Union-by-Rank và Path Compression, độ phức tạp trung bình của thao tác FindSet/UnionSet là bao nhiêu?",
      options: ["O(log V)", "O(α(V)) ≈ O(1)", "O(V)", "O(E)"],
      correct: 1,
      explain: "Khi kết hợp cả 2 heuristic, thời gian chạy là O(α(V)) với α là hàm ngược Ackermann, luôn ≤ 4 trong thực tế ≈ O(1).",
    },
    {
      id: 2,
      q: "Công thức kiểm tra bit thứ i của số nguyên x đang bật (1) hay tắt (0) là gì?",
      options: ["x | (1 << i)", "x ^ (1 << i)", "x & (1 << i)", "(1 << i) - 1"],
      correct: 2,
      explain: "x & (1 << i) tạo mặt nạ chỉ giữ lại bit i; nếu khác 0 tức bit đang bật, nếu bằng 0 tức bit đang tắt.",
    },
    {
      id: 3,
      q: "Một đồ thị đầy đủ (Complete Graph) gồm 8 đỉnh sẽ có chính xác bao nhiêu cạnh?",
      options: ["8 cạnh", "16 cạnh", "28 cạnh", "64 cạnh"],
      correct: 2,
      explain: "Số cạnh của Complete Graph K_N là NC2 = N(N - 1) / 2 = 8 * 7 / 2 = 28 cạnh.",
    },
    {
      id: 4,
      q: "Đặc điểm nào sau đây KHÔNG THUỘC VỀ cấu trúc đồ thị tổng quát (Graph)?",
      options: ["Có hướng hoặc vô hướng", "Đỉnh gốc (Root) duy nhất quản lý toàn bộ đồ thị", "Có thể có trọng số trên cạnh", "Có thể có nhiều thành phần liên thông"],
      correct: 1,
      explain: "Graph tổng quát không có khái niệm Root, Parent/Child hay Ancestor/Descendant như Tree.",
    },
    {
      id: 5,
      q: "Vì sao Adjacency List (Vector<Vector<IntegerPair>>) là lựa chọn tối ưu hàng đầu trong CS2010?",
      options: [
        "Kiểm tra 2 đỉnh kề nhau trong O(1)",
        "Bộ nhớ chỉ tốn O(V + E) không lãng phí ô trống và duyệt hàng xóm trong O(deg(u))",
        "Có thể sắp xếp cạnh tự động không cần hàm so sánh",
        "Luôn tốn ít bộ nhớ hơn Edge List trong mọi trường hợp"
      ],
      correct: 1,
      explain: "AdjList chỉ cấp phát đúng số phần tử thực tế (O(V+E)), hỗ trợ duyệt hàng xóm cực nhanh cho DFS/BFS.",
    },
    {
      id: 6,
      q: "Trong Java khi viết phương thức compareTo() cho lớp IntegerPair, tại sao bắt buộc phải dùng !this.first().equals(o.first()) thay vì != ?",
      options: [
        "Vì Java không hỗ trợ toán tử != cho số",
        "Vì Integer là Object Wrapper, toán tử != sẽ so sánh địa chỉ vùng nhớ (reference) thay vì giá trị",
        "Vì .equals() chạy nhanh hơn toán tử !=",
        "Vì compareTo() bắt buộc chỉ được dùng phương thức chuỗi"
      ],
      correct: 1,
      explain: "Toán tử != trên Object so sánh tham chiếu ô nhớ. Hai đối tượng Integer cùng giá trị 1000 nhưng khác ô nhớ sẽ bị coi là khác nhau nếu dùng !=.",
    },
  ];

  const handleSelect = (qId, optionIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Tổng Kết &amp; Tốt Nghiệp Bài 11 (Mục 5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-950 to-slate-900 bg-clip-text text-transparent">
            Bảng Vàng Toàn Diện &amp; Mini-Quiz Tốt Nghiệp Bài 11
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng kết 4 trụ cột kiến thức cốt lõi và bài trắc nghiệm 6 câu chuẩn CS2010.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "dashboard"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            4 Trụ Cột Bài 11
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "quiz"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mini-Quiz Tốt Nghiệp ({Object.keys(selectedAnswers).length}/6)
          </button>
        </div>
      </div>

      {activeTab === "dashboard" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-xs font-bold text-slate-800 font-mono">{p.title}</h4>
                  <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-mono text-[10px] font-bold">
                    {p.badge}
                  </span>
                </div>

                <ul className="space-y-1 text-xs text-slate-600 font-sans leading-relaxed">
                  {p.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Quiz Header & Result */}
          {isSubmitted && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between shadow-sm">
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-slate-600 font-semibold">Kết quả của bạn:</span>
                <div className="text-lg font-extrabold font-mono text-amber-950">
                  {score} / 6 CÂU ĐÚNG ({Math.round((score / 6) * 100)}%)
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setIsSubmitted(false);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Làm Lại
              </button>
            </div>
          )}

          {/* 6 Questions */}
          <div className="space-y-4">
            {quizQuestions.map((q) => {
              const selected = selectedAnswers[q.id];
              const isCorrect = selected === q.correct;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm"
                >
                  <div className="flex items-start gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-mono font-bold text-xs">
                      Câu {q.id}
                    </span>
                    <h5 className="text-xs font-bold text-slate-800 font-sans leading-relaxed">
                      {q.q}
                    </h5>
                  </div>

                  {/* 4 Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {q.options.map((opt, oIdx) => {
                      const isThisSelected = selected === oIdx;
                      let btnStyle = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";

                      if (isThisSelected) {
                        btnStyle = "bg-amber-100 text-amber-950 font-bold border-amber-400 shadow-sm";
                      }

                      if (isSubmitted) {
                        if (oIdx === q.correct) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                        } else if (isThisSelected && !isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-bold";
                        } else {
                          btnStyle = "bg-slate-50 border-slate-200 text-slate-400";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelect(q.id, oIdx)}
                          className={`p-3 rounded-xl border text-left transition-all shadow-sm ${btnStyle}`}
                        >
                          <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submit */}
                  {isSubmitted && (
                    <div className={`p-3.5 rounded-xl text-xs font-sans shadow-sm ${
                      isCorrect ? "bg-emerald-50 border border-emerald-200 text-emerald-950" : "bg-rose-50 border border-rose-200 text-rose-950"
                    }`}>
                      <strong>{isCorrect ? "Chính xác! " : "Chưa chính xác! "}</strong>
                      {q.explain}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="flex justify-end pt-2">
              <button
                disabled={Object.keys(selectedAnswers).length < 6}
                onClick={() => setIsSubmitted(true)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-40 text-white text-xs font-mono font-bold shadow-md transition-all"
              >
                Nộp Bài Trắc Nghiệm ({Object.keys(selectedAnswers).length}/6)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
