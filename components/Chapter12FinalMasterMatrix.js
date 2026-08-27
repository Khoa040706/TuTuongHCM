"use client";

import React, { useState } from "react";
import {
  Trophy,
  RotateCcw,
} from "lucide-react";

export default function Chapter12FinalMasterMatrix() {
  const [activeTab, setActiveTab] = useState("pillars"); // "pillars" | "quiz"
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pillars = [
    {
      title: "1. Ứng Dụng Cấu Trúc Đồ Thị",
      badge: "AdjList O(k) Output-Sensitive",
      points: [
        "Đếm V: O(1) bằng số hàng hoặc lưu biến riêng.",
        "Liệt kê đỉnh kề: AdjMatrix O(V) vs AdjList O(k) (khác biệt sống còn).",
        "Đếm E: AdjMatrix O(V²) vs AdjList O(V+E).",
        "Kiểm tra cạnh (u, v): AdjMatrix O(1) vs AdjList O(k).",
      ],
    },
    {
      title: "2. Cầu Nối Duyệt Cây ⟶ Đồ Thị",
      badge: "Source s + Cờ visited[]",
      points: [
        "Ôn lại cây nhị phân: Pre (0,1,2,3,4), In (1,0,3,2,4), Post (1,3,4,2,0).",
        "Level-order của cây chính là tiền thân của BFS!",
        "Đồ thị không có root ⟹ Tự chọn đỉnh xuất phát Source s.",
        "Đồ thị có thể có chu trình ⟹ Dùng cờ visited[] chống lặp vô hạn.",
      ],
    },
    {
      title: "3. Thuật Toán BFS (Chiều Rộng)",
      badge: "Queue FIFO • SSSP O(V+E)",
      points: [
        "Sử dụng hàng đợi Queue Q (FIFO) duyệt theo tầng khoảng cách.",
        "Cần 2 mảng phụ: visited[V] và mảng cha p[V].",
        "Độ phức tạp O(V + E) với Adjacency List.",
        "Vũ khí độc quyền: Giải bài toán SSSP trên đồ thị không trọng số.",
      ],
    },
    {
      title: "4. Thuật Toán DFS (Chiều Sâu)",
      badge: "Call Stack • Spanning Tree",
      points: [
        "Sử dụng ngăn xếp đệ quy (Implicit Call Stack LIFO).",
        "Đâm sâu hết cỡ một nhánh rồi tự động quay lui (Backtracking).",
        "Độ phức tạp O(V + E) với Adjacency List.",
        "Sinh ra Cây khung (Spanning Tree) gồm đúng E = V - 1 cạnh.",
      ],
    },
    {
      title: "5. Truy Vết Đường Đi (Path Reconstruction)",
      badge: "p[s] = -1 • Đệ Quy Xuôi",
      points: [
        "Dựa vào mảng cha p[] đã lưu sau BFS/DFS.",
        "Phiên bản lặp: từ t về s cho kết quả bị ĐẢO NGƯỢC (t ⟶ s).",
        "Phiên bản đệ quy backtrack(u, p): cho kết quả ĐÚNG THỨ TỰ (s ⟶ t).",
        "Điều kiện dừng: p[s] = -1.",
      ],
    },
    {
      title: "6. Ứng Dụng Thực Tế (Applications)",
      badge: "Reachability • CC • Toposort",
      points: [
        "Reachability: kiểm tra visited[v] sau BFS/DFS(u) trong O(V+E).",
        "Connected Components: đếm số lần gọi DFS mới trong O(V+E) (không nhân V).",
        "Topological Sort: DFS Post-order + Reverse trên DAG (bệ phóng cho DP trên DAG).",
      ],
    },
    {
      title: "7. Đấu Trường Trade-Off DFS vs BFS",
      badge: "Cả 2 đều O(V+E)",
      points: [
        "DFS: Dễ code, tốn ít RAM O(Depth), hỗ trợ Toposort & Chu trình, không giải được SSSP.",
        "BFS: Vô địch SSSP unweighted, tốn RAM Queue O(Width), dài code hơn.",
      ],
    },
  ];

  const quizQuestions = [
    {
      id: 1,
      q: "Thao tác liệt kê k đỉnh kề của đỉnh v trên Adjacency List có độ phức tạp thời gian là bao nhiêu?",
      options: ["O(V)", "O(k) — Output-sensitive", "O(1)", "O(V + E)"],
      correct: 1,
      explain: "AdjList chỉ lưu đúng k đỉnh kề nên chỉ mất O(k) để quét danh sách, trong khi AdjMatrix mất O(V) quét cả hàng.",
    },
    {
      id: 2,
      q: "Độ phức tạp thời gian của thuật toán đếm số thành phần liên thông (Connected Components) bằng DFS/BFS là bao nhiêu?",
      options: ["O(V · (V + E))", "O(V + E)", "O(V²)", "O(E · log V)"],
      correct: 1,
      explain: "Mặc dù có vòng lặp for V lần, nhưng nhờ mảng visited nên mỗi đỉnh và mỗi cạnh trên toàn đồ thị chỉ được duyệt đúng 1 lần duy nhất ⟹ O(V + E).",
    },
    {
      id: 3,
      q: "Thuật toán sắp xếp Tô-pô (Topological Sort) hoạt động dựa trên nguyên tắc nào của DFS?",
      options: [
        "Ghi nhận đỉnh theo Pre-order rồi in trực tiếp",
        "Ghi nhận đỉnh theo Post-order rồi đảo ngược (Reverse) danh sách kết quả",
        "Dùng hàng đợi Queue theo Level-order",
        "Duyệt ngẫu nhiên các đỉnh có bậc vào In-degree bằng 0"
      ],
      correct: 1,
      explain: "Chạy DFS trên DAG, ghi nhận đỉnh theo Post-order (khi duyệt xong mọi nhánh con), sau đó đảo ngược danh sách sẽ nhận được thứ tự Tô-pô hợp lệ.",
    },
    {
      id: 4,
      q: "Thuật toán nào sau đây có khả năng tìm đường đi ngắn nhất (ít cạnh nhất) trên đồ thị không trọng số trong O(V + E)?",
      options: ["Chỉ DFS", "Chỉ BFS", "Cả BFS và DFS", "Chỉ thuật toán sắp xếp Tô-pô"],
      correct: 1,
      explain: "BFS duyệt theo từng tầng khoảng cách d=0, 1, 2... nên đảm bảo tìm ra đường đi ngắn nhất (SSSP) trên đồ thị không trọng số; DFS không có tính chất này.",
    },
    {
      id: 5,
      q: "Trong thuật toán truy vết đường đi bằng đệ quy backtrack(u, p), tại sao kết quả in ra lại đúng thứ tự từ nguồn s đến đích t?",
      options: [
        "Vì hàm backtrack tự động sắp xếp mảng tăng dần",
        "Vì gọi đệ quy backtrack(p[u], p) trước rồi mới in u (cơ chế LIFO của Call Stack)",
        "Vì mảng p đã được lưu xuôi từ trước",
        "Vì hàm backtrack sử dụng hàng đợi Queue phụ"
      ],
      correct: 1,
      explain: "Khi gọi đệ quy lùi về cha trước rồi mới in đỉnh hiện tại sau, cơ chế LIFO của ngăn xếp đệ quy (tương tự post-order) sẽ tự động đảo ngược thứ tự in ấn thành s ⟶ t.",
    },
    {
      id: 6,
      q: "Điều kiện dừng khi truy vết đường đi lùi về đỉnh nguồn s trong mảng cha p[] là gì?",
      options: ["p[s] == 0", "p[s] == -1", "p[s] == V", "p[s] == s"],
      correct: 1,
      explain: "Đỉnh nguồn s không có đỉnh cha nào dẫn tới nó, do đó được khởi tạo và giữ nguyên giá trị quy ước p[s] = -1.",
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
            <span>Tổng Kết Toàn Bài &amp; Mini-Quiz Tốt Nghiệp (Mục 4.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-950 to-emerald-950 bg-clip-text text-transparent">
            Bảng Vàng 7 Trụ Cột &amp; Mini-Quiz Tốt Nghiệp Bài 12
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng kết toàn diện kiến thức cốt lõi và bài trắc nghiệm 6 câu hỏi thực chiến chuẩn đề thi CS2010.
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
            7 Trụ Cột Bài 12
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
                idx === 6 ? "md:col-span-2 lg:col-span-3 border-indigo-200 bg-indigo-50/30" : ""
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-xs font-bold text-slate-800 font-mono">{p.title}</h4>
                  <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-mono text-[10px] font-bold">
                    {p.badge}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-600 font-sans leading-relaxed">
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
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between shadow-sm">
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-slate-600 font-semibold">Kết quả tốt nghiệp của bạn:</span>
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
                        btnStyle = "bg-amber-100 text-amber-950 font-bold border-amber-400 ring-2 ring-amber-400/30 shadow-sm";
                      }

                      if (isSubmitted) {
                        if (oIdx === q.correct) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                        } else if (isThisSelected && !isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-bold";
                        } else {
                          btnStyle = "bg-slate-50/50 border-slate-100 text-slate-400";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelect(q.id, oIdx)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${btnStyle}`}
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
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 text-white text-xs font-mono font-bold shadow-sm transition-all"
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
