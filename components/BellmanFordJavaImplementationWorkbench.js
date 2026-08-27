"use client";

import React, { useState } from "react";
import {
  Coffee,
  Terminal,
} from "lucide-react";

export default function BellmanFordJavaImplementationWorkbench() {
  const [activeTab, setActiveTab] = useState("code"); // "code" | "cases"
  const [selectedStructure, setSelectedStructure] = useState("edgelist"); // "edgelist" | "adjlist"
  const [activeCase, setActiveCase] = useState(1); // 1 | 2 | 3

  const casesData = {
    1: {
      title: "Case 1: Đồ Thị Nhỏ, KHÔNG Có Negative Cycle",
      status: "Thành Công (OK)",
      badgeColor: "bg-emerald-100 border-emerald-300 text-emerald-950",
      desc: "Thuật toán quét V-1 vòng, sau đó kiểm tra pass thứ |V| không có cạnh nào nới lỏng thêm. Kết quả hội tụ chính xác tuyệt đối.",
      terminalOutput: `[INIT] Khởi tạo SSSP từ nguồn s = 0...
[PASS 1..V-1] Nới lỏng các cạnh E thành công.
[PASS V] Quét kiểm tra chu trình âm: KHÔNG CÓ CẠNH NÀO NỚI LỎNG THÊM.
==> KẾT QUẢ SSSP:
D[0]=0, D[1]=6, D[2]=7, D[3]=11, D[4]=7
p[0]=-1, p[1]=0, p[2]=0, p[3]=1, p[4]=3
==> Trạng thái: DỪNG AN TOÀN TRONG O(V*E) [OK]`,
    },
    2: {
      title: "Case 2: Đồ Thị Nhỏ, CÓ Negative Cycle",
      status: "Phát Hiện Chu Trình Âm (Dừng An Toàn)",
      badgeColor: "bg-rose-100 border-rose-300 text-rose-950",
      desc: "Thuật toán quét V-1 vòng, ở pass thứ |V| phát hiện cạnh (1, 2) vẫn nới lỏng được. Thuật toán dừng đúng lúc và báo lỗi, không chạy vô hạn!",
      terminalOutput: `[INIT] Khởi tạo SSSP từ nguồn s = 0...
[PASS 1..V-1] Thực hiện V-1 vòng quét danh sách E cạnh...
[PASS V] PHÁT HIỆN: Cạnh (1, 2, w=-3) vẫn thỏa mãn D[2] > D[1] + (-3)!
==> CẢNH BÁO: Tồn tại Negative Weight Cycle có thể đến được từ nguồn s!
==> Bài toán SSSP tại các đỉnh liên quan: UNDEFINED (-Infinity).
==> Trạng thái: DỪNG AN TOÀN SAU |V| PASS, BÁO LỖI CHÍNH XÁC [TERMINATED]`,
    },
    3: {
      title: "Case 3: Đồ Thị Nhỏ, CÓ CẠNH ÂM Nhưng KHÔNG CÓ Negative Cycle",
      status: "Thành Công (Xử Lý Cạnh Âm Chuẩn)",
      badgeColor: "bg-sky-100 border-sky-300 text-sky-950",
      desc: "Cạnh âm (3, 4, w=-4) được nới lỏng chính xác ở pass 3 giúp D[4] giảm từ 16 xuống 7 mà không tạo chu trình âm.",
      terminalOutput: `[INIT] Khởi tạo SSSP từ nguồn s = 0...
[PASS 1..3] Nới lỏng thành công cạnh âm (3, 4, w=-4) giúp D[4] tối ưu về 7.
[PASS V] Quét kiểm tra chu trình âm: KHÔNG CÓ CẠNH NÀO NỚI LỎNG THÊM.
==> KẾT QUẢ SSSP:
D[0]=0, D[1]=6, D[2]=7, D[3]=11, D[4]=7
==> Trạng thái: XỬ LÝ CẠNH ÂM TỐI ƯU TOÀN CỤC [OK]`,
    },
  };

  const curCaseData = casesData[activeCase];

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Coffee className="w-3.5 h-3.5 text-amber-700" />
            <span>Phần 8: Cài Đặt Java (BellmanFordDemo.java) &amp; 3 Test Cases</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-teal-950 to-emerald-950 bg-clip-text text-transparent">
            Mã Nguồn Java Chuẩn &amp; Cơ Chế Đảm Bảo Tính Dừng (Termination)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá 2 cách cài đặt AdjacencyList vs EdgeList và kiểm chứng 3 trường hợp thực tế đảm bảo thuật toán luôn dừng an toàn trong $O(V \cdot E)$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "code"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn Java Chuẩn
          </button>
          <button
            onClick={() => setActiveTab("cases")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "cases"
                ? "bg-teal-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Thử Nghiệm 3 Trường Hợp (Test Cases)
          </button>
        </div>
      </div>

      {/* Tab 1: Java Code */}
      {activeTab === "code" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-600 font-semibold">Chọn cấu trúc lưu trữ đồ thị:</span>
            <div className="flex gap-2 font-mono text-xs">
              <button
                onClick={() => setSelectedStructure("edgelist")}
                className={`px-3 py-1.5 rounded-xl border font-bold transition-all shadow-sm ${
                  selectedStructure === "edgelist"
                    ? "bg-amber-100 border-amber-400 text-amber-950"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                1. EdgeList (Gọn Gàng &amp; Phổ Biến Nhất)
              </button>
              <button
                onClick={() => setSelectedStructure("adjlist")}
                className={`px-3 py-1.5 rounded-xl border font-bold transition-all shadow-sm ${
                  selectedStructure === "adjlist"
                    ? "bg-amber-100 border-amber-400 text-amber-950"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                2. AdjacencyList
              </button>
            </div>
          </div>

          {/* Dark macOS Terminal */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-400">
                {selectedStructure === "edgelist" ? "BellmanFordEdgeList.java" : "BellmanFordAdjList.java"}
              </span>
            </div>
            <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{selectedStructure === "edgelist"
? `// Cài đặt Bellman-Ford bằng EdgeList - O(V * E)
public static boolean bellmanFord(int s, int V, List<Edge> edges, int[] D, int[] p) {
    // 1. Khởi tạo initSSSP
    Arrays.fill(D, 1_000_000_000); // 1B đại diện cho INF
    Arrays.fill(p, -1);
    D[s] = 0;

    // 2. Vòng lặp ngoài: V - 1 lần nới lỏng toàn bộ cạnh
    for (int i = 1; i <= V - 1; i++) {
        for (Edge e : edges) {
            if (D[e.u] < 1_000_000_000 && D[e.v] > D[e.u] + e.w) {
                D[e.v] = D[e.u] + e.w;
                p[e.v] = e.u;
            }
        }
    }

    // 3. Vòng quét thứ V: Phát hiện chu trình âm (Side Effect)
    for (Edge e : edges) {
        if (D[e.u] < 1_000_000_000 && D[e.v] > D[e.u] + e.w) {
            return false; // Tồn tại chu trình âm!
        }
    }
    return true; // Thành công, không có chu trình âm
}`
: `// Cài đặt Bellman-Ford bằng AdjacencyList - O(V * E)
public static boolean bellmanFordAdj(int s, int V, List<List<Edge>> adj, int[] D, int[] p) {
    Arrays.fill(D, 1_000_000_000);
    Arrays.fill(p, -1);
    D[s] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int u = 0; u < V; u++) {
            if (D[u] == 1_000_000_000) continue;
            for (Edge e : adj.get(u)) {
                if (D[e.v] > D[u] + e.w) {
                    D[e.v] = D[u] + e.w;
                    p[e.v] = u;
                }
            }
        }
    }

    // Kiểm tra pass thứ V
    for (int u = 0; u < V; u++) {
        if (D[u] == 1_000_000_000) continue;
        for (Edge e : adj.get(u)) {
            if (D[e.v] > D[u] + e.w) return false;
        }
    }
    return true;
}`}
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* Tab 2: 3 Cases Testing */}
      {activeTab === "cases" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 font-mono text-xs">
            {[1, 2, 3].map((c) => (
              <button
                key={c}
                onClick={() => setActiveCase(c)}
                className={`p-3 rounded-2xl border text-left font-bold transition-all shadow-sm ${
                  activeCase === c
                    ? "bg-teal-50 border-teal-400 text-teal-950 ring-1 ring-teal-400"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="block text-[10px] text-amber-950 font-extrabold">Trường Hợp {c}:</span>
                <span className="truncate block mt-0.5">{casesData[c].title.split(":")[1]}</span>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="font-bold text-sm text-slate-900 font-sans">{curCaseData.title}</span>
              <span className={`px-3 py-1 rounded-xl border text-xs font-mono font-bold self-start sm:self-auto shadow-sm ${curCaseData.badgeColor}`}>
                {curCaseData.status}
              </span>
            </div>

            <p className="text-xs font-sans text-slate-700 leading-relaxed">
              {curCaseData.desc}
            </p>

            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-semibold">
                <Terminal className="w-3.5 h-3.5 text-teal-700" />
                <span>Mô phỏng Console Output (java BellmanFordDemo):</span>
              </div>
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
                <pre className="text-slate-200 overflow-x-auto leading-relaxed text-[11px]">
                  <code>{curCaseData.terminalOutput}</code>
                </pre>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-sans text-emerald-950 shadow-sm">
              ✅ <strong>Quy Tắc Đảm Bảo Tính Dừng (Termination Guarantee):</strong> Trong cả 3 trường hợp, Bellman-Ford chỉ chạy tối đa đúng <code>|V| pass</code> rồi kết thúc. Thuật toán tuyệt đối không bao giờ bị rơi vào vòng lặp vô tận (Infinite Loop)!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
