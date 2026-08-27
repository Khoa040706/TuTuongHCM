"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  GitCommit,
  Shuffle,
} from "lucide-react";

export default function GraphTopologicalSortStudio() {
  const [activeTab, setActiveTab] = useState("concept"); // "concept" | "stepVisual" | "code"
  const [isReversed, setIsReversed] = useState(false);

  // Slide Example Data
  const postOrderList = [4, 3, 5, 2, 1, 0, 6, 7];
  const topoSortedList = [7, 6, 0, 1, 2, 5, 3, 4];

  return (
    <div className="my-8 rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-bold mb-2">
            <GitCommit className="w-3.5 h-3.5 text-purple-700" />
            <span>Phần 3.3: Sắp Xếp Tô-Pô (Topological Sort)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-pink-950 to-amber-950 bg-clip-text text-transparent">
            Thuật Toán Topological Sort Trên DAG (Post-Order + Reverse)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Xác định thứ tự tuyến tính ưu tiên công việc trên Đồ thị có hướng không chu trình (DAG) bằng thuật toán DFS.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("concept")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "concept"
                ? "bg-purple-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Khái Niệm &amp; DAG
          </button>
          <button
            onClick={() => setActiveTab("stepVisual")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "stepVisual"
                ? "bg-pink-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mô Phỏng Ví Dụ Slide
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "code"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn Java
          </button>
        </div>
      </div>

      {/* Tab 1: Concept & DAG Requirements */}
      {activeTab === "concept" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-purple-950 font-bold uppercase">1. Điều Kiện Áp Dụng</span>
              <h4 className="text-xs font-bold text-slate-800 font-mono">Chỉ Dành Cho DAG</h4>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Chỉ áp dụng cho <strong>Directed Acyclic Graph</strong> (đồ thị có hướng và KHÔNG CÓ CHU TRÌNH). Nếu có chu trình, không tồn tại thứ tự topo hợp lệ!
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-pink-950 font-bold uppercase">2. Tính Tuyến Tính</span>
              <h4 className="text-xs font-bold text-slate-800 font-mono">Linear Ordering</h4>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Mỗi đỉnh $u$ luôn xuất hiện <strong>trước</strong> mọi đỉnh $v$ mà nó có cạnh trỏ tới ($u \to v$). Một DAG có thể có <strong>nhiều thứ tự topo hợp lệ</strong> khác nhau.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-amber-950 font-bold uppercase">3. Ứng Dụng Tối Thượng</span>
              <h4 className="text-xs font-bold text-slate-800 font-mono">Bệ Phóng Cho DP Trên DAG</h4>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Là tiền đề bắt buộc để giải các bài toán <strong>Quy hoạch động (Dynamic Programming) trên DAG</strong> như Tìm đường đi dài nhất / ngắn nhất có thứ tự phụ thuộc.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-sans text-purple-950 flex items-center gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-purple-600 shrink-0" />
            <span>
              ⭐ <strong>Nguyên tắc vàng 2 bước:</strong> 1. Chạy <strong>DFS</strong> ghi nhận đỉnh theo thứ tự <strong>Post-order</strong> (khi mọi con của đỉnh đã thăm xong). &rarr; 2. <strong>Đảo ngược (Reverse)</strong> danh sách kết quả!
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Slide Example Visualizer */}
      {activeTab === "stepVisual" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-purple-100 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-slate-600">Ví Dụ Minh Họa Slide Chuẩn (8 Đỉnh [0..7]):</span>
                <h4 className="text-sm font-bold font-mono text-slate-800 mt-0.5">
                  {isReversed
                    ? "✅ BƯỚC 2: SAU KHI ĐẢO NGƯỢC (TOPOLOGICAL ORDER CHUẨN XÁC)"
                    : "⏳ BƯỚC 1: DANH SÁCH POST-ORDER GỐC CỦA DFS"}
                </h4>
              </div>

              <button
                onClick={() => setIsReversed(!isReversed)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 self-start sm:self-auto shadow-sm ${
                  isReversed
                    ? "bg-emerald-600 text-white"
                    : "bg-purple-600 text-white"
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{isReversed ? "Xem Lại Danh Sách Post-Order" : "Thực Hiện Đảo Ngược (Reverse) ➔"}</span>
              </button>
            </div>

            {/* Sequence Render */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 overflow-x-auto min-h-[65px] shadow-sm">
              {(isReversed ? topoSortedList : postOrderList).map((nodeId, idx) => (
                <React.Fragment key={idx}>
                  <div className={`w-9 h-9 rounded-xl border font-mono font-extrabold text-xs flex items-center justify-center shadow-sm shrink-0 ${
                    isReversed
                      ? "bg-emerald-100 border-emerald-300 text-emerald-950"
                      : "bg-purple-100 border-purple-300 text-purple-950"
                  }`}>
                    {nodeId}
                  </div>
                  {idx < 7 && (
                    <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isReversed ? "text-emerald-600" : "text-purple-600"}`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="text-xs font-sans text-slate-600 leading-relaxed">
              {isReversed ? (
                <span>
                  🎉 <strong>Kết quả:</strong> <code>[7, 6, 0, 1, 2, 5, 3, 4]</code> là một thứ tự Tô-pô hoàn toàn hợp lệ! Mọi mũi tên phụ thuộc đều hướng từ trái sang phải!
                </span>
              ) : (
                <span>
                  💡 <strong>Ghi chú:</strong> Danh sách <code>[4, 3, 5, 2, 1, 0, 6, 7]</code> được tạo ra bằng cách nhét đỉnh vào cuối mảng <code>toposort.add(u)</code> mỗi khi hàm <code>dfsTopo(u)</code> kết thúc.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Java Code */}
      {activeTab === "code" && (
        <div className="p-6 rounded-2xl bg-white border border-purple-100 space-y-3 shadow-sm">
          {/* Code block in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-purple-400 font-bold">topologicalSort.java (Mục 3.3)</span>
              </div>
              <span className="text-purple-400 font-bold">Post-Order + Reverse</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`List<Integer> toposort = new ArrayList<>();
boolean[] visited;

void dfsTopo(int u, List<List<Integer>> adjList) {
  visited[u] = true;
  for (int v : adjList.get(u)) {
    if (!visited[v]) {
      dfsTopo(v, adjList);
    }
  }
  toposort.add(u);                   // Ghi nhận theo thứ tự "Post-order"
}

void topologicalSort(List<List<Integer>> adjList, int V) {
  visited = new boolean[V];
  toposort.clear();

  for (int v = 0; v < V; v++) {
    if (!visited[v]) {
      dfsTopo(v, adjList);
    }
  }
  Collections.reverse(toposort);     // ĐẢO NGƯỢC để có thứ tự topo đúng!
}`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
