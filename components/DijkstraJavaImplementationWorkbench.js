"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  FileCode,
  Copy,
  Check,
} from "lucide-react";

export default function DijkstraJavaImplementationWorkbench() {
  const [activeCase, setActiveCase] = useState("case1"); // "case1" | "case2" | "case3"
  const [copied, setCopied] = useState(false);

  const javaCode = `import java.util.*;

public class ModifiedDijkstraDemo {
    static class Edge {
        int to, weight;
        Edge(int to, int weight) { this.to = to; this.weight = weight; }
    }

    static class IntegerPair implements Comparable<IntegerPair> {
        int dist, u;
        IntegerPair(int dist, int u) { this.dist = dist; this.u = u; }
        @Override
        public int compareTo(IntegerPair o) {
            return Integer.compare(this.dist, o.dist); // Min-Heap
        }
    }

    public static int[] modifiedDijkstra(int V, int source, List<List<Edge>> adj) {
        int[] dist = new int[V];
        Arrays.fill(dist, 1000000000); // 10^9 (INF)
        dist[source] = 0;

        PriorityQueue<IntegerPair> pq = new PriorityQueue<>();
        pq.offer(new IntegerPair(0, source));

        while (!pq.isEmpty()) {
            IntegerPair top = pq.poll();
            int d = top.dist;
            int u = top.u;

            // Kỹ thuật LAZY DATA STRUCTURE cốt tử:
            if (d > dist[u]) continue; // Bỏ qua bản sao lỗi thời

            for (Edge edge : adj.get(u)) {
                int v = edge.to;
                int w = edge.weight;
                if (dist[v] > dist[u] + w) {
                    dist[v] = dist[u] + w; // Relax
                    pq.offer(new IntegerPair(dist[v], v)); // Re-enqueue
                }
            }
        }
        return dist;
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(javaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <FileCode className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 14: Cài Đặt Java — PS5 Subtask B Workbench</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Mã Nguồn Java Modified Dijkstra &amp; Bộ Thử Nghiệm 3 Kịch Bản
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Trình duyệt mã nguồn Java sử dụng <code>PriorityQueue&lt;IntegerPair&gt;</code> và thử nghiệm 3 kịch bản thực tế của slide.
          </p>
        </div>

        <button
          onClick={copyCode}
          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-all self-start md:self-auto shadow-sm"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Đã chép code" : "Copy Java Code"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Java Code Browser (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-4 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>ModifiedDijkstraDemo.java (PS5 Subtask B)</span>
            <span className="text-emerald-950 font-bold">Java 17 / 21</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-sm overflow-hidden">
            <div className="flex items-center gap-1.5 pb-2.5 border-b border-slate-800 text-[10px] text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 font-mono text-slate-400">ModifiedDijkstraDemo.java</span>
            </div>
            <pre className="pt-3 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-[360px] leading-relaxed select-text">
              <code>{javaCode}</code>
            </pre>
          </div>
        </div>

        {/* Right: Interactive 3-Case Tester (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bộ Thử Nghiệm 3 Kịch Bản Thực Tế</span>
            <span className="text-amber-950 font-bold">3 Test Cases</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <button
              onClick={() => setActiveCase("case1")}
              className={`w-full p-3 rounded-xl border text-left font-bold transition-all flex items-center justify-between shadow-sm ${
                activeCase === "case1"
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>1. Đồ thị nhỏ, KHÔNG CÓ cạnh âm</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={() => setActiveCase("case2")}
              className={`w-full p-3 rounded-xl border text-left font-bold transition-all flex items-center justify-between shadow-sm ${
                activeCase === "case2"
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>2. Đồ thị có 1 số cạnh âm (Không cycle âm)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={() => setActiveCase("case3")}
              className={`w-full p-3 rounded-xl border text-left font-bold transition-all flex items-center justify-between shadow-sm ${
                activeCase === "case3"
                  ? "bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>3. Đồ thị CÓ Negative Weight Cycle</span>
              <XCircle className="w-4 h-4 text-rose-600" />
            </button>
          </div>

          {/* Test Case Feedback Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans space-y-2 leading-relaxed text-slate-700 shadow-sm">
            {activeCase === "case1" && (
              <>
                <span className="text-emerald-950 font-mono font-bold block text-[11px] uppercase">
                  ✅ KẾT QUẢ TEST CASE 1: HOÀN HẢO!
                </span>
                <p>
                  Thuật toán Modified Dijkstra hoàn tất chuẩn xác trong <code>O((V + E) log V)</code>. Mỗi đỉnh chỉ xử lý đúng 1 lần từ PQ.
                </p>
              </>
            )}

            {activeCase === "case2" && (
              <>
                <span className="text-emerald-950 font-mono font-bold block text-[11px] uppercase">
                  ✅ KẾT QUẢ TEST CASE 2: VẪN OK!
                </span>
                <p>
                  Nhờ cơ chế <code>(re)enqueue</code> và điều kiện lọc <code>if (d &gt; dist[u]) continue;</code>, thuật toán tự nới lỏng lại các đỉnh qua cạnh âm và tìm ra đúng nghiệm tối ưu toàn cục!
                </p>
              </>
            )}

            {activeCase === "case3" && (
              <>
                <span className="text-rose-950 font-mono font-bold block text-[11px] uppercase">
                  🚨 KẾT QUẢ TEST CASE 3: ILL UNDEFINED &amp; LOOP VÔ HẠN!
                </span>
                <p>
                  Khi có cycle âm, bài toán SSSP là không xác định (-&infin;). Modified Dijkstra sẽ liên tục re-enqueue và <strong>bị kẹt trong vòng lặp vô hạn</strong>! Bắt buộc phải dùng Bellman-Ford!
                </p>
              </>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 14):
            </span>
            <p>
              • Không có cạnh âm hoặc có cạnh âm an toàn ➔ Modified Dijkstra&apos;s <strong>OK</strong>.
            </p>
            <p>
              • Có negative cycle ➔ SSSP vô nghĩa, Modified Dijkstra&apos;s <strong>loop vô hạn</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
