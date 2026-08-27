"use client";

import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
} from "lucide-react";

export default function PrimJavaCodeComplexityWorkbench() {
  const [copied, setCopied] = useState(false);

  const javaCode = `int primMST(int s, List<List<int[]>> adjList, int V) {
  // adjList.get(u) chứa các phần tử {đỉnh kề v, trọng số w}
  boolean[] taken = new boolean[V];
  PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]); // {weight, vertex}

  int mstCost = 0;
  pq.add(new int[]{0, s});

  while (!pq.isEmpty()) {
    int[] top = pq.poll();
    int w = top[0], u = top[1];

    if (taken[u]) continue;        // Đỉnh này đã lấy rồi, bỏ qua
    taken[u] = true;
    mstCost += w;

    for (int[] edge : adjList.get(u)) {
      int v = edge[0], weight = edge[1];
      if (!taken[v]) {
        pq.add(new int[]{weight, v});
      }
    }
  }
  return mstCost;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(javaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Code2 className="w-3.5 h-3.5 text-teal-700" />
            <span>Phần 4.2: Cài Đặt Java &amp; Phân Tích Độ Phức Tạp O(E log V)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-amber-950 bg-clip-text text-transparent">
            Bàn Làm Việc Java &amp; Chứng Minh Toán Học O(E log V)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cài đặt gọn gàng với 2 cấu trúc quen thuộc <code>PriorityQueue</code> và <code>boolean[] taken</code> cùng chứng minh $O(\log E) = O(\log V)$.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Thời Gian: O(E log V) • Bộ Nhớ: O(V + E)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Java Code Box (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-teal-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>primMST.java (Chuẩn CS2010)</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-all text-[11px] font-semibold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Đã sao chép" : "Sao chép code"}</span>
            </button>
          </div>

          {/* Dark macOS Terminal */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
            <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">PrimMST.java</span>
            </div>
            <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>{javaCode}</code>
            </pre>
          </div>
        </div>

        {/* Right: Complexity Proof & Mathematical Derivation (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-teal-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Chứng Minh Toán Học O(E log V)</span>
            <span className="text-amber-950 font-bold">Mục 4.2</span>
          </div>

          <div className="space-y-3 text-xs font-sans text-slate-700">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
              <span className="text-teal-950 font-mono font-bold text-[11px] block">1. Số Lần Xử Lý Cạnh</span>
              <p className="leading-relaxed">
                Mỗi cạnh trong đồ thị được duyệt và đưa vào PQ tối đa 2 lần (mỗi đầu mút 1 lần) ⟹ Tốn tổng cộng <strong>O(E)</strong>.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
              <span className="text-amber-950 font-mono font-bold text-[11px] block">2. Chi Phí Trên PriorityQueue</span>
              <p className="leading-relaxed">
                Mỗi thao tác <code>poll()</code> hoặc <code>add()</code> trên PQ chứa tối đa $E$ cạnh tốn <strong>O(log E)</strong>.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-emerald-950 font-mono shadow-sm">
              <span className="text-emerald-950 font-bold text-[11px] block font-sans">3. Rút Gọn Toán Học Vàng:</span>
              <p className="text-xs leading-relaxed font-mono">
                Vì $E \le V^2$, ta có:<br />
                $O(\log E) = O(\log V^2) = 2 \cdot O(\log V) = O(\log V)$
              </p>
              <p className="text-xs text-amber-950 font-bold pt-1 font-sans">
                ⟹ Tổng độ phức tạp thời gian: O(E log V)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
