"use client";

import React, { useState } from "react";
import {
  GitFork,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

export default function ModifiedBfsVsGeneralSsspDuel() {
  const [activeTab, setActiveTab] = useState("modified"); // "modified" | "pseudo" | "detour"

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-rose-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <GitFork className="w-3.5 h-3.5 text-sky-700" />
            <span>Phần 4: Ôn Lại BFS &amp; Vì Sao BFS Thất Bại Trước Đồ Thị Có Trọng Số</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-rose-950 to-indigo-950 bg-clip-text text-transparent">
            Modified BFS vs SSSP Tổng Quát: Cạm Bẫy Đường Vòng (Detour)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá 3 điểm cải tiến từ BFS truyền thống sang Modified BFS và mổ xẻ ví dụ phản chứng tại sao BFS báo sai đường đi ngắn nhất.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("modified")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "modified"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. 3 Điểm Sửa Đổi BFS
          </button>
          <button
            onClick={() => setActiveTab("pseudo")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "pseudo"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Mã Giả Đầy Đủ &amp; Relax
          </button>
          <button
            onClick={() => setActiveTab("detour")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "detour"
                ? "bg-rose-500 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Phản Chứng Detour (8 vs 9)
          </button>
        </div>
      </div>

      {/* Tab 1: 3 Modifications */}
      {activeTab === "modified" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs font-sans text-slate-700 leading-relaxed shadow-sm">
            <span className="text-sky-950 font-bold font-mono block text-[11px] mb-1">
              • Bản chất trên đồ thị không trọng số (Unweighted Graph):
            </span>
            Khi mọi cạnh có trọng số bằng 1 hoặc hằng số như nhau, SSSP chính là bài toán tìm <strong>số cạnh ít nhất</strong> từ nguồn $s$ đến các đỉnh khác. Thuật toán $O(V+E)$ BFS đo chính xác điều này ⟹ <strong>BFS Spanning Tree = Shortest Paths Spanning Tree!</strong>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-amber-950 font-bold uppercase">Sửa Đổi 1: Đổi Tên Biến</span>
              <p className="text-slate-700 leading-relaxed">
                Đổi tên mảng <code className="text-rose-600 font-bold font-mono bg-rose-50 px-1 py-0.5 rounded border border-rose-200">visited</code> thành <code className="text-emerald-700 font-bold font-mono bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">D</code> (Distance).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-sky-950 font-bold uppercase">Sửa Đổi 2: Khởi Tạo Ban Đầu</span>
              <p className="text-slate-700 leading-relaxed">
                Đặt D[v] = INF (1 Tỷ) cho tất cả $v \in G$, trừ đỉnh nguồn <code className="text-amber-950 font-bold font-mono bg-amber-50 px-1 py-0.5 rounded border border-amber-200">D[s] = 0</code>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase">Sửa Đổi 3: Gán Bước Nhảy</span>
              <p className="text-slate-700 leading-relaxed">
                Thay <code>visited[v] = 1</code> thành <code className="text-emerald-700 font-bold font-mono bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">D[v] = D[u] + 1</code> (v cách u đúng 1 bước).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Pseudo Code Comparison */}
      {activeTab === "pseudo" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Bản Đầy Đủ (Full Pseudo Code)</span>
              <span className="text-sky-950 font-bold">Mục 4.3</span>
            </div>

            {/* Dark macOS Terminal */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-slate-400">bfs_full.pseudo</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`for all v in V:
  D[v] <- INF; p[v] <- -1
Q <- {s}; D[s] <- 0

while Q is not empty:
  u <- Q.dequeue()
  for all v adjacent to u:
    if D[v] == INF:
      D[v] <- D[u] + 1
      p[v] <- u
      Q.enqueue(v)`}
                </code>
              </pre>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Bản Dùng Phép Toán Relax()</span>
              <span className="text-amber-950 font-bold">Mục 4.4</span>
            </div>

            {/* Dark macOS Terminal */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-slate-400">bfs_relax.pseudo</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`initSSSP(s)
Q <- {s}

while Q is not empty:
  u <- Q.dequeue()
  for all v adjacent to u:
    relax(u, v, 1); // w luôn là 1`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Detour Counterexample */}
      {activeTab === "detour" && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Ví Dụ Phản Chứng Trong Slide: Tại Sao BFS Thất Bại?</span>
              <span className="text-rose-950 font-bold">Detour Trap</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-1.5 text-rose-950 font-mono font-bold text-[11px]">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>KẾT QUẢ SAI CỦA BFS (CHỈ ĐẾM SỐ CẠNH):</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  • BFS thấy cạnh trực tiếp <code>0 ➔ 2</code> chỉ tốn <strong>1 bước (1 cạnh)</strong> ⟹ BFS vội vàng kết luận đây là đường đi ngắn nhất và chốt khoảng cách = <strong>9</strong>!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-950 font-mono font-bold text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ĐƯỜNG ĐI THỰC TẾ NGẮN HƠN (ĐƯỜNG VÒNG DETOUR):</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  • Đường vòng: <code>0 ➔ 1 ➔ 3 ➔ 4 ➔ 2</code> có tới 4 cạnh nhưng tổng trọng số chỉ là:
                  <code className="block my-1 font-mono text-amber-950 font-bold text-xs bg-amber-50 p-1.5 rounded-lg border border-amber-200">2 + 3 + 2 + 1 = 8 &lt; 9!</code>
                  • BFS hoàn toàn bị mù trước đường đi này vì chỉ quan tâm số lượng cạnh mà bỏ qua trọng số.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs font-sans text-amber-950 flex items-center gap-2.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                📌 <strong>Rule of Thumb:</strong> Chỉ dùng BFS cho đồ thị <strong>không trọng số</strong> $O(V+E)$. Đối với đồ thị có trọng số bất kỳ, bắt buộc phải dùng thuật toán tổng quát như <strong>Bellman-Ford $O(V \cdot E)$</strong>!
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
