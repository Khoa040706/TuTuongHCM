"use client";

import React, { useState } from "react";
import {
  Trophy,
  RotateCcw,
} from "lucide-react";

export default function Chapter13FinalMasterMatrix() {
  const [activeTab, setActiveTab] = useState("pillars"); // "pillars" | "quiz"
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pillars = [
    {
      title: "1. Cây Tự Do (Free Tree T)",
      badge: "V đỉnh • V - 1 cạnh",
      points: [
        "T là đồ thị liên thông có V đỉnh và V - 1 cạnh.",
        "Tính chất cốt tử: Giữa bất kỳ 2 đỉnh nào trong T luôn có DUY NHẤT một đường đi (one unique path).",
        "Không chứa bất kỳ chu trình nào.",
      ],
    },
    {
      title: "2. Cây Khung (Spanning Tree ST)",
      badge: "Bao Phủ 100% Đỉnh",
      points: [
        "ST là cây bao phủ tất cả các đỉnh của đồ thị liên thông G.",
        "BFS / DFS Spanning Tree (Bài 12) chính là các cây khung thực thụ.",
        "Một đồ thị có thể có rất nhiều cây khung khác nhau.",
      ],
    },
    {
      title: "3. Định Nghĩa Bài Toán MST",
      badge: "Min w(ST) = Σ w(a, b)",
      points: [
        "Đồ thị phải là Vô hướng, Liên thông, Có trọng số G(V, E), w(a,b).",
        "MST là cây khung ST có tổng trọng số w(ST) nhỏ nhất có thể.",
        "Giá trị tổng trọng số cực tiểu là duy nhất.",
      ],
    },
    {
      title: "4. Thuật Toán Prim's (1957)",
      badge: "PriorityQueue • O(E log V)",
      points: [
        "Hướng đỉnh: Mọc duy nhất 1 cây lớn dần từ nguồn s.",
        "Dùng PriorityQueue (Min-Heap) lấy cạnh nhỏ nhất nối ra ngoài.",
        "Dùng mảng boolean taken[] chống chu trình.",
        "Chứng minh tính đúng bằng Exchange Argument (thay thế cạnh).",
      ],
    },
    {
      title: "5. Thuật Toán Kruskal's (1956)",
      badge: "EdgeList + UFDS • O(E log V)",
      points: [
        "Hướng cạnh: Sắp xếp toàn bộ E cạnh tăng dần O(E log E).",
        "Dùng EdgeList (không dùng AdjMatrix/AdjList) để sort trong 1 dòng.",
        "Dùng UFDS (findSet/unionSet) kiểm tra chu trình O(alpha(V)) ≈ O(1).",
        "Chứng minh tính đúng bằng Bất biến vòng lặp (Loop Invariant).",
      ],
    },
    {
      title: "6. Độ Phức Tạp Toán Học",
      badge: "O(log E) = O(log V)",
      points: [
        "Vì E ≤ V² nên O(log E) = O(log V²) = 2·O(log V) = O(log V).",
        "Kruskal: O(E log E + E·alpha(V)) ⟹ E log E chiếm ưu thế ⟹ O(E log V).",
        "Prim: O(E) lần xử lý cạnh × O(log E) trên PQ ⟹ O(E log V).",
      ],
    },
    {
      title: "7. Ra Quyết Định Thực Chiến",
      badge: "Sparse vs Dense Graph",
      points: [
        "Đồ thị thưa (E ≈ V) ⟹ Ưu tiên Kruskal O(E log E).",
        "Đồ thị dày (E ≈ V²) ⟹ Ưu tiên Prim với ma trận kề O(V²).",
        "Đồ thị rời rạc ⟹ Kruskal tự động tạo Rừng cây khung MSF.",
      ],
    },
  ];

  const quizQuestions = [
    {
      id: 1,
      q: "Cây tự do (Tree T) có V đỉnh thì có đúng bao nhiêu cạnh và có bao nhiêu đường đi giữa 2 đỉnh bất kỳ?",
      options: [
        "V cạnh và có nhiều đường đi",
        "V - 1 cạnh và có duy nhất 1 đường đi",
        "V + 1 cạnh và có 2 đường đi",
        "V - 1 cạnh và có thể có nhiều đường đi"
      ],
      correct: 1,
      explain: "Theo định nghĩa lý thuyết đồ thị, một cây có V đỉnh luôn có đúng V - 1 cạnh, và giữa bất kỳ 2 đỉnh nào luôn có duy nhất một đường đi (one unique path).",
    },
    {
      id: 2,
      q: "Tại sao thuật toán Kruskal's bắt buộc phải sử dụng cấu trúc dữ liệu EdgeList mà không dùng Adjacency Matrix hay Adjacency List?",
      options: [
        "Vì EdgeList tiết kiệm RAM hơn",
        "Vì EdgeList lưu danh sách phẳng các cạnh, cho phép gọi Collections.sort() sắp xếp toàn bộ cạnh theo trọng số chỉ trong 1 dòng lệnh",
        "Vì EdgeList hỗ trợ đệ quy nhanh hơn",
        "Vì Adjacency List không thể biểu diễn được trọng số cạnh"
      ],
      correct: 1,
      explain: "Kruskal cần sắp xếp toàn bộ E cạnh theo trọng số tăng dần; EdgeList lưu danh sách các đối tượng Edge(u, v, w) nên dễ dàng sort bằng Collections.sort().",
    },
    {
      id: 3,
      q: "Trong thuật toán Prim's, mảng boolean taken[] có vai trò gì?",
      options: [
        "Để đếm số đỉnh của đồ thị",
        "Để xác định đỉnh đã thuộc cây T hay chưa, giúp bỏ qua các cạnh tạo chu trình khi rút từ PriorityQueue",
        "Để lưu đường đi ngắn nhất từ nguồn s",
        "Để sắp xếp các cạnh theo thứ tự tăng dần"
      ],
      correct: 1,
      explain: "Khi rút cạnh (w, u) từ PQ, nếu taken[u] == true tức đỉnh u đã thuộc cây T từ trước, thuật toán sẽ bỏ qua (continue) để tránh tạo chu trình.",
    },
    {
      id: 4,
      q: "Tại sao độ phức tạp của thuật toán Kruskal là O(E log V) mặc dù bước sắp xếp tốn O(E log E) và bước UFDS tốn O(E · α(V))?",
      options: [
        "Vì α(V) chiếm ưu thế áp đảo",
        "Vì E ≤ V² nên O(log E) = O(log V²) = O(2 log V) = O(log V), và thành phần E log E chiếm ưu thế trước E · α(V)",
        "Vì UFDS chạy trong O(V)",
        "Vì đồ thị luôn có E = V"
      ],
      correct: 1,
      explain: "Trong đồ thị đơn E ≤ V², hàm log E biến đổi thành 2·log V = O(log V). Chi phí sắp xếp O(E log E) chiếm ưu thế áp đảo so với O(E · α(V)) ≈ O(E).",
    },
    {
      id: 5,
      q: "Tính đúng đắn của thuật toán Prim's được chứng minh toán học dựa trên kỹ thuật nào?",
      options: [
        "Kỹ thuật Bất biến vòng lặp (Loop Invariant)",
        "Kỹ thuật Thay thế cạnh (Exchange Argument)",
        "Quy hoạch động (Dynamic Programming)",
        "Chia để trị (Divide and Conquer)"
      ],
      correct: 1,
      explain: "Prim's được chứng minh bằng kỹ thuật Exchange Argument (thay thế cạnh e* trong cây tối ưu T* bằng cạnh e_k do Prim chọn mà không làm tăng tổng chi phí).",
    },
    {
      id: 6,
      q: "Trường hợp nào sau đây nên ưu tiên sử dụng thuật toán Prim hơn thuật toán Kruskal?",
      options: [
        "Đồ thị thưa có E ≈ V",
        "Đồ thị dày đặc (Dense Graph có E ≈ V²) kết hợp biểu diễn ma trận kề",
        "Đồ thị phân rã thành nhiều thành phần liên thông",
        "Đồ thị đã có sẵn danh sách EdgeList được sắp xếp"
      ],
      correct: 1,
      explain: "Trên đồ thị dày đặc E ≈ V², Prim cài đặt với mảng ma trận kề không dùng Heap chỉ tốn O(V²), nhanh hơn Kruskal phải sắp xếp tới V² log(V²) cạnh.",
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
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Tổng Kết Toàn Bài &amp; Mini-Quiz Tốt Nghiệp (Mục 6.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-teal-950 to-emerald-950 bg-clip-text text-transparent">
            Bảng Vàng 7 Trụ Cột &amp; Mini-Quiz Tốt Nghiệp Bài 13
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng kết toàn diện kiến thức Cây khung nhỏ nhất (MST) và bài trắc nghiệm 6 câu hỏi thực chiến chuẩn đề thi CS2010.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "pillars"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            7 Trụ Cột Bài 13
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

      {activeTab === "pillars" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 flex flex-col justify-between shadow-sm ${
                idx === 6 ? "md:col-span-2 lg:col-span-3 border-indigo-200" : ""
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-xs font-bold text-slate-900 font-mono">{p.title}</h4>
                  <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-mono text-[10px] font-bold">
                    {p.badge}
                  </span>
                </div>

                <ul className="space-y-1 text-xs text-slate-700 font-sans leading-relaxed">
                  {p.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 mt-0.5 font-bold">•</span>
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
          {/* Result Banner */}
          {isSubmitted && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between shadow-sm">
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-slate-600">Kết quả tốt nghiệp của bạn:</span>
                <div className="text-lg font-extrabold font-mono text-amber-950">
                  {score} / 6 CÂU ĐÚNG ({Math.round((score / 6) * 100)}%)
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setIsSubmitted(false);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm"
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
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-mono font-bold text-xs shadow-sm">
                      Câu {q.id}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 font-sans leading-relaxed">
                      {q.q}
                    </h5>
                  </div>

                  {/* 4 Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {q.options.map((opt, oIdx) => {
                      const isThisSelected = selected === oIdx;
                      let btnStyle = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";

                      if (isThisSelected) {
                        btnStyle = "bg-amber-100 text-amber-950 font-bold border-amber-400 shadow-sm ring-1 ring-amber-400/50";
                      }

                      if (isSubmitted) {
                        if (oIdx === q.correct) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold shadow-sm";
                        } else if (isThisSelected && !isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-bold shadow-sm";
                        } else {
                          btnStyle = "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelect(q.id, oIdx)}
                          className={`p-3 rounded-xl border text-left transition-all ${btnStyle}`}
                        >
                          <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
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
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 text-white text-xs font-mono font-bold shadow-md transition-all"
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
