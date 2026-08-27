"use client";

import React, { useState } from "react";
import { GitFork, Trees, Split, Trophy } from "lucide-react";

export default function GraphSpecialTopologiesMasterCard() {
  const [activeTab, setActiveTab] = useState("topologies"); // "topologies" | "flashcards"
  const [selectedTopo, setSelectedTopo] = useState("dag"); // "dag" | "tree" | "bipartite"

  const flashcards = [
    {
      q: "1. Số nguyên 32-bit trong C++/Java có thể biểu diễn tối đa bao nhiêu đối tượng Boolean?",
      a: "Tối đa 32 đối tượng Boolean (mỗi bit 0/1 đại diện cho trạng thái của 1 đối tượng).",
      tag: "Bitmask",
    },
    {
      q: "2. Công thức kiểm tra bit thứ i đang bật (1) hay tắt (0) là gì?",
      a: "x & (1 << i) (khác 0 ⟹ Bật; bằng 0 ⟹ Tắt).",
      tag: "Bitwise",
    },
    {
      q: "3. Công thức bật tất cả n bit của một số nguyên là gì?",
      a: "x = (1 << n) - 1 (Ví dụ n=4 ⟹ (1<<4)-1 = 15 = 1111₂).",
      tag: "Bitwise",
    },
    {
      q: "4. Đồ thị đầy đủ (Complete Graph) KN có bao nhiêu cạnh?",
      a: "E = NC2 = N(N - 1) / 2 cạnh (Ví dụ K₇ có 7*6/2 = 21 cạnh).",
      tag: "Graph",
    },
    {
      q: "5. Điểm khác biệt lớn nhất giữa Graph tổng quát và Binary Tree là gì?",
      a: "Graph KHÔNG CÓ Root (gốc), KHÔNG CÓ quan hệ Parent/Child/Ancestor.",
      tag: "Graph",
    },
    {
      q: "6. Định nghĩa của một Tree (Cây) trong lý thuyết đồ thị?",
      a: "Là đồ thị LIÊN THÔNG (Connected), có đúng E = V - 1 cạnh, và duy nhất 1 đường đi giữa mọi cặp đỉnh.",
      tag: "Topology",
    },
    {
      q: "7. Directed Acyclic Graph (DAG) là đồ thị gì?",
      a: "Là đồ thị CÓ HƯỚNG và HOÀN TOÀN KHÔNG CÓ CHU TRÌNH (No cycle).",
      tag: "Topology",
    },
    {
      q: "8. Đồ thị hai phía (Bipartite Graph) là đồ thị như thế nào?",
      a: "Có thể phân hoạch các đỉnh thành 2 tập sao cho KHÔNG CÓ CẠNH NÀO nối 2 đỉnh cùng nằm trong 1 tập.",
      tag: "Topology",
    },
  ];

  const [flipped, setFlipped] = useState({});
  const toggleFlip = (id) => setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5 text-indigo-700" />
            <span>Đồ Thị Đặc Biệt &amp; Tổng Kết (Mục 3.7)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            DAG &bull; Tree &bull; Bipartite Graph &amp; Flashcards Cốt Lõi
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Bộ 3 cấu trúc đồ thị then chốt và 8 điểm cốt lõi ôn thi của Bitmask &amp; Graph Basics.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("topologies")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "topologies"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Bộ 3 Đồ Thị Đặc Biệt
          </button>
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "flashcards"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            8 Flashcards Ôn Thi
          </button>
        </div>
      </div>

      {activeTab === "topologies" ? (
        <div className="space-y-4">
          {/* Topo Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
            <button
              onClick={() => setSelectedTopo("dag")}
              className={`p-3.5 rounded-2xl border text-left transition-all shadow-sm ${
                selectedTopo === "dag"
                  ? "bg-indigo-100 border-indigo-400 text-indigo-950 font-bold ring-2 ring-indigo-500/40"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              1. DAG (Directed Acyclic)
            </button>
            <button
              onClick={() => setSelectedTopo("tree")}
              className={`p-3.5 rounded-2xl border text-left transition-all shadow-sm ${
                selectedTopo === "tree"
                  ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-500/40"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              2. Tree (E = V - 1)
            </button>
            <button
              onClick={() => setSelectedTopo("bipartite")}
              className={`p-3.5 rounded-2xl border text-left transition-all shadow-sm ${
                selectedTopo === "bipartite"
                  ? "bg-pink-100 border-pink-400 text-pink-950 font-bold ring-2 ring-pink-500/40"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              3. Bipartite (2 Phía)
            </button>
          </div>

          {/* Topo Content Showcase */}
          <div className="p-6 rounded-2xl bg-white border border-indigo-100 space-y-3 shadow-sm">
            {selectedTopo === "dag" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-indigo-950 border-b border-slate-100 pb-2">
                  <GitFork className="w-4 h-4 text-indigo-700" />
                  <span>Directed Acyclic Graph (DAG)</span>
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed">
                  • <strong>Định nghĩa:</strong> Đồ thị <strong>CÓ HƯỚNG</strong> và <strong>HOÀN TOÀN KHÔNG CÓ CHU TRÌNH</strong> (No cycle).<br />
                  • <strong>Ứng dụng:</strong> Mô hình hóa phụ thuộc công việc (Task Scheduling), thuật toán Sắp xếp tô-pô (Topological Sort), và Quy hoạch động trên DAG (DP on DAG).
                </p>
              </div>
            )}

            {selectedTopo === "tree" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-emerald-950 border-b border-slate-100 pb-2">
                  <Trees className="w-4 h-4 text-emerald-700" />
                  <span>Tree (Cây Trong Lý Thuyết Đồ Thị)</span>
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed">
                  • <strong>Định nghĩa:</strong> Đồ thị <strong>LIÊN THÔNG</strong> (Connected), có đúng <strong>E = V - 1 cạnh</strong>.<br />
                  • <strong>Tính chất cốt lõi:</strong> Giữa bất kỳ cặp đỉnh nào cũng có <strong>duy nhất đúng một đường đi đơn</strong>.<br />
                  • <strong>Mối liên hệ:</strong> Cây khung nhỏ nhất (MST) chính là một đồ thị con dạng Tree!
                </p>
              </div>
            )}

            {selectedTopo === "bipartite" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-pink-950 border-b border-slate-100 pb-2">
                  <Split className="w-4 h-4 text-pink-700" />
                  <span>Bipartite Graph (Đồ Thị Hai Phía)</span>
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed">
                  • <strong>Định nghĩa:</strong> Tập đỉnh có thể phân hoạch (partition) thành <strong>2 tập con độc lập</strong> sao cho <strong>không có cạnh nào nối 2 đỉnh cùng một tập</strong>.<br />
                  • <strong>Định lý:</strong> Đồ thị là Bipartite khi và chỉ khi nó <strong>không chứa chu trình có độ dài lẻ (No odd cycle)</strong> và có thể tô bằng 2 màu (2-Colorable).<br />
                  • <strong>Ứng dụng:</strong> Bài toán ghép cặp cực đại (Max Bipartite Matching).
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {flashcards.map((f, idx) => {
            const isFlipped = !!flipped[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleFlip(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer select-none min-h-[115px] flex flex-col justify-between shadow-sm ${
                  isFlipped
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-500/40 font-bold"
                    : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="px-2 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-bold">
                      #{idx + 1} &bull; {f.tag}
                    </span>
                    <span className="font-semibold text-slate-600">{isFlipped ? "ĐÁP ÁN ✅" : "CÂU HỎI ❓"}</span>
                  </div>

                  <p className="text-xs font-bold leading-relaxed font-sans">
                    {isFlipped ? f.a : f.q}
                  </p>
                </div>

                <div className="text-[10px] font-mono text-right text-slate-500 mt-2">
                  {isFlipped ? "Bấm để xem lại câu hỏi" : "Bấm để lật xem đáp án"}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
