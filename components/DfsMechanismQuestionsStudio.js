"use client";

import React, { useState } from "react";
import {
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function DfsMechanismQuestionsStudio() {
  const [activeTab, setActiveTab] = useState("questions"); // "questions" | "code" | "analysis"

  const goldenQuestions = [
    {
      q: "1. Duy trì thứ tự duyệt bằng cách nào?",
      ans: "Dùng Stack S / Đệ Quy (Implicit Call Stack)",
      desc: "Ngăn xếp LIFO: Đỉnh nào thăm sau cùng sẽ được xử lý tiếp ⟹ Cho phép thuật toán đào sâu hết cỡ theo một nhánh cho đến ngõ cụt rồi tự động quay lui (Backtracking).",
      color: "purple",
      badge: "Call Stack (LIFO)",
    },
    {
      q: "2. Phân biệt đỉnh đã thăm / chưa thăm?",
      ans: "Mảng Boolean visited[V]",
      desc: "Đánh dấu visited[u] = true ngay khi bước vào đầu hàm dfs(u) để ngăn không cho các đỉnh láng giềng gọi đệ quy ngược lại gây tràn ngăn xếp (Stack Overflow).",
      color: "pink",
      badge: "visited[V]",
    },
    {
      q: "3. Ghi nhớ đường đi (Path) bằng cách nào?",
      ans: "Mảng Đỉnh Cha (Predecessor / Parent) p[V]",
      desc: "Trước khi gọi đệ quy dfs(v, ...), ta gán p[v] = u để ghi nhận rằng đỉnh u đã trực tiếp đánh thức và dẫn lối tới đỉnh v.",
      color: "amber",
      badge: "p[V]",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-pink-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-purple-700" />
            <span>Phần 2.6 – 2.8: Depth-First Search (DFS)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-pink-950 to-rose-950 bg-clip-text text-transparent">
            Thuật Toán DFS — Ngăn Xếp Đệ Quy, Code Java &amp; Cây Khung (Spanning Tree)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cơ chế đâm sâu và quay lui (Backtracking), mã nguồn đệ quy chuẩn mực và độ phức tạp $O(V + E)$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "questions"
                ? "bg-purple-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3 Câu Hỏi Vàng
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "code"
                ? "bg-pink-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn Java
          </button>
          <button
            onClick={() => setActiveTab("analysis")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "analysis"
                ? "bg-rose-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phân Tích &amp; Cây Khung
          </button>
        </div>
      </div>

      {/* Tab 1: 3 Golden Questions */}
      {activeTab === "questions" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goldenQuestions.map((g, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-purple-100 space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  CÂU HỎI {idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-800 font-sans">{g.q}</h4>
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 font-mono font-extrabold text-xs shadow-sm">
                  {g.ans}
                </div>
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-purple-800 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Thành phần bắt buộc của DFS</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Java Code */}
      {activeTab === "code" && (
        <div className="p-6 rounded-2xl bg-white border border-purple-100 space-y-3 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-purple-400 font-bold">dfs.java (Mục 2.7)</span>
              </div>
              <span className="text-purple-400 font-bold">Recursive Stack</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`void dfs(int u, List<List<Integer>> adjList, boolean[] visited, int[] p) {
  visited[u] = true;                 // đánh dấu để tránh chu trình
  for (int v : adjList.get(u)) {     // duyệt các đỉnh kề của u
    if (!visited[v]) {
      p[v] = u;                      // lưu đỉnh cha trước khi đi sâu
      dfs(v, adjList, visited, p);   // gọi đệ quy (implicit stack)
    }
  }
}

// Trong hàm main:
boolean[] visited = new boolean[V];
int[] p = new int[V];
Arrays.fill(p, -1);
dfs(s, adjList, visited, p);         // bắt đầu từ đỉnh nguồn s`}
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* Tab 3: Time Complexity & Spanning Tree */}
      {activeTab === "analysis" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-800">Độ Phức Tạp Thời Gian</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-purple-100 border border-purple-300 text-purple-950 font-mono text-xs font-bold">
                  O(V + E)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Mỗi đỉnh được thăm đúng 1 lần ($O(V)$) và mỗi cạnh được duyệt qua đúng 1 lần ($O(E)$ khi dùng Adjacency List).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-800">Cây Khung (Spanning Tree)</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-pink-100 border border-pink-300 text-pink-950 font-mono text-xs font-bold">
                  E = V - 1
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Tập hợp các cạnh nối đỉnh cha sang con <code>p[v] = u</code> tạo thành một <strong>Cây khung (Spanning Tree)</strong> bao phủ toàn bộ các đỉnh liên thông trong đồ thị!
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs font-sans text-rose-950 shadow-sm leading-relaxed">
            💡 <strong>Quy luật chung:</strong> Cả BFS và DFS đều dùng kỹ thuật "cờ đánh dấu" (flag) để ngăn chặn chu trình và đều sinh ra một Cây khung (BFS Tree vs DFS Tree).
          </div>
        </div>
      )}
    </div>
  );
}
