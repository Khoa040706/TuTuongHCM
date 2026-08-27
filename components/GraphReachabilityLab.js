"use client";

import React, { useState } from "react";
import {
  Network,
  CheckCircle2,
  XCircle,
  ShieldAlert,
} from "lucide-react";

export default function GraphReachabilityLab() {
  const [activeTab, setActiveTab] = useState("reachability"); // "reachability" | "components"
  const [sourceNode, setSourceNode] = useState(0);
  const [targetNode, setTargetNode] = useState(4);

  // Graph components definition:
  // CC 1: {0, 1, 2, 3, 4}
  // CC 2: {5, 6}
  // CC 3: {7}
  const componentMap = {
    0: 1, 1: 1, 2: 1, 3: 1, 4: 1,
    5: 2, 6: 2,
    7: 3,
  };

  const isReachable = componentMap[sourceNode] === componentMap[targetNode];

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Network className="w-3.5 h-3.5 text-sky-700" />
            <span>Phần 3.1 &amp; 3.2: Ứng Dụng Duyệt Đồ Thị (Mục 3.1 &amp; 3.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-teal-950 to-indigo-950 bg-clip-text text-transparent">
            Kiểm Tra Tính Liên Thông (Reachability) &amp; Đếm Thành Phần Liên Thông (CC)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Ứng dụng cờ <code>visited[]</code> để xác định đường đi giữa 2 đỉnh và phân rã đồ thị thành các cụm độc lập trong $O(V + E)$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("reachability")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "reachability"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Reachability Test
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "components"
                ? "bg-teal-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Đếm Thành Phần (CC)
          </button>
        </div>
      </div>

      {/* Tab 1: Reachability Test */}
      {activeTab === "reachability" && (
        <div className="space-y-6">
          {/* Controls: Select u and v */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white border border-sky-100 shadow-sm">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-600 font-semibold">Chọn Đỉnh Nguồn (Source u):</label>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => (
                  <button
                    key={id}
                    onClick={() => setSourceNode(id)}
                    className={`w-8 h-8 rounded-xl font-mono text-xs font-bold transition-all shadow-sm ${
                      sourceNode === id
                        ? "bg-sky-600 text-white ring-2 ring-sky-400/40"
                        : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-600 font-semibold">Chọn Đỉnh Đích (Target v):</label>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => (
                  <button
                    key={id}
                    onClick={() => setTargetNode(id)}
                    className={`w-8 h-8 rounded-xl font-mono text-xs font-bold transition-all shadow-sm ${
                      targetNode === id
                        ? "bg-purple-600 text-white ring-2 ring-purple-400/40"
                        : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome Banner */}
          <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all shadow-sm ${
            isReachable
              ? "bg-emerald-50 border-emerald-300 text-emerald-950"
              : "bg-rose-50 border-rose-300 text-rose-950"
          }`}>
            <div className="flex items-center gap-3">
              {isReachable ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
              )}
              <div>
                <strong className="text-sm font-mono block">
                  {isReachable
                    ? `KẾT QUẢ: YES — Đỉnh [${targetNode}] CÓ THỂ ĐẾN ĐƯỢC từ Đỉnh [${sourceNode}]`
                    : `KẾT QUẢ: NO — Đỉnh [${targetNode}] KHÔNG THỂ ĐẾN ĐƯỢC từ Đỉnh [${sourceNode}]`}
                </strong>
                <span className="text-xs text-slate-600 font-sans">
                  {isReachable
                    ? `Sau khi chạy BFS/DFS(u = ${sourceNode}), cờ visited[${targetNode}] == true vì cả 2 cùng nằm trong Thành phần liên thông CC #${componentMap[sourceNode]}.`
                    : `Sau khi chạy BFS/DFS(u = ${sourceNode}), cờ visited[${targetNode}] == false vì đỉnh ${sourceNode} nằm ở CC #${componentMap[sourceNode]} còn đỉnh ${targetNode} nằm ở CC #${componentMap[targetNode]} riêng biệt!`}
                </span>
              </div>
            </div>

            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-sm">
              O(V + E)
            </span>
          </div>

          {/* Java Code isReachable */}
          <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-3 shadow-sm">
            {/* Code block in dark theme bg-slate-950 */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 text-sky-400 font-bold">isReachable.java (Mục 3.1)</span>
                </div>
                <span className="text-sky-400 font-bold">Reachability Check</span>
              </div>

              <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`boolean isReachable(int u, int v, List<List<Integer>> adjList, int V) {
  boolean[] visited = new boolean[V];
  int[] p = new int[V];
  Arrays.fill(p, -1);

  bfs(u, adjList, V);        // hoặc dfs(u, adjList, visited, p);
  return visited[v];         // true nếu v đến được từ u, ngược lại false
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Connected Components */}
      {activeTab === "components" && (
        <div className="space-y-6">
          {/* 3 Components Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* CC 1 */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                <span className="text-xs font-mono font-bold text-emerald-950">CC #1 (5 đỉnh)</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 border border-emerald-300 text-[10px] font-mono text-emerald-950 font-bold">
                  Lần gọi DFS 1
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((id) => (
                  <div
                    key={id}
                    className="w-7 h-7 rounded-lg bg-white border border-emerald-300 text-emerald-950 font-mono font-bold text-xs flex items-center justify-center shadow-sm"
                  >
                    {id}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Đỉnh 0 khởi động DFS ⟹ Tô màu và đánh dấu <code>visited = true</code> cho cả 5 đỉnh {`{0, 1, 2, 3, 4}`}.
              </p>
            </div>

            {/* CC 2 */}
            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-300 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between border-b border-sky-200 pb-2">
                <span className="text-xs font-mono font-bold text-sky-950">CC #2 (2 đỉnh)</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 border border-sky-300 text-[10px] font-mono text-sky-950 font-bold">
                  Lần gọi DFS 2
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[5, 6].map((id) => (
                  <div
                    key={id}
                    className="w-7 h-7 rounded-lg bg-white border border-sky-300 text-sky-950 font-mono font-bold text-xs flex items-center justify-center shadow-sm"
                  >
                    {id}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Vòng lặp chạy tới $v = 5$ (chưa thăm) ⟹ Tăng <code>cc++</code> và gọi DFS tô màu {`{5, 6}`}.
              </p>
            </div>

            {/* CC 3 */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-300 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                <span className="text-xs font-mono font-bold text-amber-950">CC #3 (1 đỉnh cô lập)</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-[10px] font-mono text-amber-950 font-bold">
                  Lần gọi DFS 3
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-white border border-amber-300 text-amber-950 font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                  7
                </div>
              </div>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Vòng lặp chạy tới $v = 7$ (đỉnh cô lập) ⟹ Tăng <code>cc++</code>. Tổng số thành phần = 3!
              </p>
            </div>
          </div>

          {/* Crucial Complexity Trap Alert */}
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-rose-950 font-mono font-bold text-xs">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>CẠM BẪY THI CỬ: ĐỘ PHỨC TẠP CỦA BÀI TOÁN ĐẾM THÀNH PHẦN LIÊN THÔNG</span>
            </div>
            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              Mặc dù có vòng lặp <code>for (int v = 0; v &lt; V; v++)</code> gọi DFS/BFS, nhưng <strong>TỔNG ĐỘ PHỨC TẠP VẪN CHỈ LÀ O(V + E)</strong>, tuyệt đối <strong>KHÔNG PHẢI O(V · (V + E))</strong>! Lý do: Nhờ mảng <code>visited</code>, mỗi đỉnh và mỗi cạnh trong toàn bộ đồ thị chỉ được duyệt đúng 1 lần duy nhất!
            </p>
          </div>

          {/* Java Code countConnectedComponents */}
          <div className="p-6 rounded-2xl bg-white border border-teal-100 space-y-3 shadow-sm">
            {/* Code block in dark theme bg-slate-950 */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 text-teal-400 font-bold">countCC.java (Mục 3.2)</span>
                </div>
                <span className="text-teal-400 font-bold">Connected Components</span>
              </div>

              <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`int countConnectedComponents(List<List<Integer>> adjList, int V) {
  boolean[] visited = new boolean[V];
  int[] p = new int[V];
  Arrays.fill(p, -1);
  int cc = 0;

  for (int v = 0; v < V; v++) {      // Duyệt qua tất cả đỉnh trong O(V)
    if (!visited[v]) {
      cc++;                          // Phát hiện 1 thành phần liên thông mới
      dfs(v, adjList, visited, p);   // Chỉ duyệt các đỉnh chưa thăm O(V + E)
    }
  }
  return cc;                         // Tổng thời gian: đúng O(V + E)!
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
