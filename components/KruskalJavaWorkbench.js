"use client";

import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
} from "lucide-react";

export default function KruskalJavaWorkbench() {
  const [activeTab, setActiveTab] = useState("table"); // "table" | "code"
  const [copied, setCopied] = useState(false);

  const edgeListRows = [
    { i: 0, w: 2, u: 1, v: 2, status: "ACCEPT", reason: "isSameSet(1,2)==false" },
    { i: 1, w: 4, u: 0, v: 1, status: "ACCEPT", reason: "isSameSet(0,1)==false" },
    { i: 2, w: 4, u: 0, v: 2, status: "REJECT", reason: "isSameSet(0,2)==true (Chu trình!)" },
    { i: 3, w: 6, u: 0, v: 3, status: "ACCEPT", reason: "isSameSet(0,3)==false" },
    { i: 4, w: 6, u: 0, v: 4, status: "ACCEPT", reason: "isSameSet(0,4)==false" },
    { i: 5, w: 8, u: 2, v: 3, status: "REJECT", reason: "Đã liên thông qua 0" },
    { i: 6, w: 9, u: 3, v: 4, status: "REJECT", reason: "Đã liên thông qua 0" },
  ];

  const javaCode = `class Edge implements Comparable<Edge> {
  int u, v, w;
  Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }

  @Override
  public int compareTo(Edge other) {
    return this.w - other.w;       // Sắp xếp theo trọng số tăng dần
  }
}

int kruskalMST(List<Edge> edgeList, int V) {
  Collections.sort(edgeList);      // O(E log E)

  UnionFind uf = new UnionFind(V); // UFDS đã học ở bài 11
  int mstCost = 0;
  int edgesUsed = 0;

  for (Edge e : edgeList) {        // O(E)
    if (uf.findSet(e.u) != uf.findSet(e.v)) { // O(alpha(V)) ≈ O(1): kiểm tra chu trình
      uf.unionSet(e.u, e.v);                  // O(alpha(V)) ≈ O(1)
      mstCost += e.w;
      edgesUsed++;
    }
  }
  return mstCost; // sau vòng lặp, edgesUsed phải bằng V-1 nếu đồ thị liên thông
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(javaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Code2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Phần 5.3: Cài Đặt Thuật Toán Kruskal's (Implementation)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-teal-950 to-emerald-950 bg-clip-text text-transparent">
            Bảng Dữ Liệu EdgeList Chuẩn Slide &amp; Mã Nguồn Java Hoàn Chỉnh
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lý giải tại sao Kruskal bắt buộc dùng <code>EdgeList</code> và chứng minh độ phức tạp $O(E \log E + E \cdot \alpha(V)) = O(E \log V)$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("table")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "table"
                ? "bg-teal-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Bảng EdgeList Chuẩn
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "code"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Code Java &amp; O(E log V)
          </button>
        </div>
      </div>

      {/* Tab 1: EdgeList Table */}
      {activeTab === "table" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white border border-amber-200 space-y-1.5 shadow-sm">
            <span className="text-xs font-mono font-bold text-amber-950">
              💡 Tại sao Kruskal dùng EdgeList mà KHÔNG DÙNG AdjMatrix / AdjList?
            </span>
            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              Vì Kruskal cần <strong>sắp xếp toàn bộ các cạnh theo trọng số</strong>. <code>EdgeList</code> lưu trữ các cạnh dưới dạng một danh sách tuyến tính các đối tượng <code>Edge(u, v, w)</code>, cho phép gọi trực tiếp <code>Collections.sort(edgeList)</code> trong 1 dòng lệnh duy nhất!
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 text-[11px]">
                <tr>
                  <th className="p-3 text-center">Chỉ Số i</th>
                  <th className="p-3 text-amber-950 font-bold">Trọng Số w</th>
                  <th className="p-3 text-teal-950 font-bold">Đỉnh u</th>
                  <th className="p-3 text-teal-950 font-bold">Đỉnh v</th>
                  <th className="p-3">Hành Động UFDS</th>
                  <th className="p-3 font-sans">Lý Do / Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {edgeListRows.map((row) => (
                  <tr key={row.i} className={row.status === "ACCEPT" ? "bg-emerald-50/40" : "bg-rose-50/40"}>
                    <td className="p-3 text-center font-bold text-slate-600">{row.i}</td>
                    <td className="p-3 font-extrabold text-amber-950">{row.w}</td>
                    <td className="p-3 text-slate-800">{row.u}</td>
                    <td className="p-3 text-slate-800">{row.v}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold shadow-sm ${
                        row.status === "ACCEPT"
                          ? "bg-emerald-100 border border-emerald-300 text-emerald-950"
                          : "bg-rose-100 border border-rose-300 text-rose-950"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3 font-sans text-slate-600 text-xs">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Java Code & Complexity Analysis */}
      {activeTab === "code" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Code Box (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>kruskalMST.java (Chuẩn CS2010)</span>
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
                <span className="ml-2 text-xs font-mono text-slate-400">KruskalMST.java</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>{javaCode}</code>
              </pre>
            </div>
          </div>

          {/* Right: Mathematical Dominance Derivation (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Phân Tích Thành Phần Chiếm Ưu Thế</span>
              <span className="text-amber-950 font-bold">Dominance</span>
            </div>

            <div className="space-y-3 text-xs font-sans text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <span className="text-teal-950 font-mono font-bold text-[11px] block">1. Bước Sắp Xếp (Sorting)</span>
                <p className="leading-relaxed">
                  Sắp xếp $E$ cạnh bằng thuật toán so sánh tốn <strong>O(E log E)</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <span className="text-purple-950 font-mono font-bold text-[11px] block">2. Bước Kiểm Tra Chu Trình (UFDS)</span>
                <p className="leading-relaxed">
                  Duyệt $E$ cạnh, mỗi thao tác <code>findSet</code> và <code>unionSet</code> tốn $O(\alpha(V)) \approx O(1)$ ⟹ Tổng chi phí UFDS là <strong>O(E · α(V)) ≈ O(E)</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-emerald-950 font-mono shadow-sm">
                <span className="text-emerald-950 font-bold text-[11px] block font-sans">3. Tổng Chi Phí:</span>
                <p className="text-xs leading-relaxed font-mono">
                  $O(E \log E + E \cdot \alpha(V))$<br />
                  Thành phần <strong>E log E</strong> chiếm ưu thế áp đảo (dominates)!<br />
                  Vì $E \le V^2 \implies O(E \log E) = O(E \log V^2) =$ <strong>O(E log V)</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
