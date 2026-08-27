"use client";

import React, { useState } from "react";
import {
  Radio,
  CheckCircle2,
} from "lucide-react";

export default function BfsMechanismQuestionsStudio() {
  const [activeTab, setActiveTab] = useState("questions"); // "questions" | "code" | "analysis"

  const goldenQuestions = [
    {
      q: "1. Duy trì thứ tự duyệt bằng cách nào?",
      ans: "Dùng Hàng Đợi (Queue) Q (FIFO)",
      desc: "Đỉnh nào phát hiện trước được cho vào Queue trước và sẽ được lấy ra duyệt trước ⟹ Đảm bảo quét hết các đỉnh ở tầng khoảng cách d trước khi bước sang tầng d + 1.",
      color: "sky",
      badge: "Queue (FIFO)",
    },
    {
      q: "2. Phân biệt đỉnh đã thăm / chưa thăm (tránh chu trình)?",
      ans: "Mảng Boolean visited[V]",
      desc: "Khởi tạo visited[v] = false. Khi đỉnh v được đẩy vào Queue, ngay lập tức bật visited[v] = true để không bao giờ duyệt lại hay rơi vào vòng lặp vô hạn.",
      color: "emerald",
      badge: "visited[V]",
    },
    {
      q: "3. Ghi nhớ đường đi (Path) bằng cách nào?",
      ans: "Mảng Đỉnh Cha (Predecessor / Parent) p[V]",
      desc: "Mảng p kích thước V: p[v] = u (lưu đỉnh cha u đã dẫn tới v). Khởi tạo toàn bộ p[v] = -1. Đỉnh nguồn s có cha là p[s] = -1.",
      color: "amber",
      badge: "p[V]",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Radio className="w-3.5 h-3.5 text-sky-700" />
            <span>Phần 2.3 – 2.5: Breadth-First Search (BFS)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-cyan-950 to-teal-950 bg-clip-text text-transparent">
            Thuật Toán BFS — 3 Câu Hỏi Cốt Lõi, Code Java &amp; Độ Phức Tạp
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã cơ chế hàng đợi Queue (FIFO), cấu trúc 2 mảng phụ và phân tích thời gian chạy $O(V + E)$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "questions"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3 Câu Hỏi Vàng
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "code"
                ? "bg-cyan-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn Java
          </button>
          <button
            onClick={() => setActiveTab("analysis")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "analysis"
                ? "bg-teal-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phân Tích O(V + E)
          </button>
        </div>
      </div>

      {/* Tab 1: 3 Golden Questions */}
      {activeTab === "questions" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goldenQuestions.map((g, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-sky-100 space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  CÂU HỎI {idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-800 font-sans">{g.q}</h4>
                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950 font-mono font-extrabold text-xs shadow-sm">
                  {g.ans}
                </div>
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-sky-800 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Thành phần bắt buộc của BFS</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Java Code */}
      {activeTab === "code" && (
        <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-3 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-sky-400 font-bold">bfs.java (Mục 2.4)</span>
              </div>
              <span className="text-sky-400 font-bold">Queue &bull; visited &bull; p</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`void bfs(int s, List<List<Integer>> adjList, int V) {
  boolean[] visited = new boolean[V];
  int[] p = new int[V];
  Arrays.fill(p, -1);

  Queue<Integer> q = new LinkedList<>();
  q.add(s);
  visited[s] = true;

  while (!q.isEmpty()) {
    int u = q.poll();
    for (int v : adjList.get(u)) {   // duyệt các đỉnh kề của u
      if (!visited[v]) {
        visited[v] = true;
        p[v] = u;
        q.add(v);
      }
    }
  }
  // Sau khi BFS kết thúc, ta dùng thông tin lưu trong visited / p
}`}
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* Tab 3: Time Complexity Analysis */}
      {activeTab === "analysis" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-sky-100 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-800">1. Số lần đỉnh vào Queue</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 border border-sky-300 text-sky-950 font-mono text-xs font-bold">
                  O(V)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Nhờ mảng cờ <code>visited[v]</code>, mỗi đỉnh $v \in V$ chỉ được đưa vào hàng đợi <strong>đúng 1 lần duy nhất</strong> trong suốt quá trình chạy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-sky-100 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-800">2. Số lần quét danh sách cạnh</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 border border-sky-300 text-sky-950 font-mono text-xs font-bold">
                  O(E)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Mỗi lần dequeue 1 đỉnh $u$, ta quét qua $k$ đỉnh kề của $u$. Tổng số lần duyệt qua vòng lặp <code>for (int v : adjList.get(u))</code> trên toàn bộ đồ thị bằng đúng $E$ cạnh (với Adjacency List).
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-between shadow-sm">
            <div className="space-y-0.5">
              <span className="text-xs font-mono text-teal-950 font-bold uppercase">Tổng Độ Phức Tạp Thời Gian BFS</span>
              <p className="text-xs text-slate-700 font-sans">
                Đạt <strong>O(V + E)</strong> tối ưu khi và chỉ khi sử dụng <strong>Adjacency List</strong>! (Nếu dùng AdjMatrix sẽ tốn $O(V^2)$).
              </p>
            </div>
            <span className="text-xl font-extrabold font-mono text-teal-950 px-3.5 py-1.5 rounded-xl bg-white border border-teal-300 shadow-sm">
              O(V + E)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
