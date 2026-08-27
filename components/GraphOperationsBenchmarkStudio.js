"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Scale,
} from "lucide-react";

export default function GraphOperationsBenchmarkStudio() {
  const [activeTab, setActiveTab] = useState("ops"); // "ops" | "tradeoff"
  const [selectedOp, setSelectedOp] = useState("neighbors"); // "countV" | "neighbors" | "countE" | "checkEdge"

  const operations = {
    countV: {
      title: "1.1. Đếm số đỉnh V (Counting V)",
      desc: "Số đỉnh V chính là số dòng (rows) của cấu trúc dữ liệu.",
      matrixCost: "O(1)",
      listCost: "O(1)",
      matrixExpl: "Truy cập thuộc tính độ dài hàng của mảng 2 chiều AdjMatrix.length.",
      listExpl: "Truy cập kích thước mảng danh sách AdjList.size().",
      note: "Đôi khi giá trị này được lưu sẵn trong một biến riêng V để không phải tính lại mỗi lần ⟹ Đạt O(1) tuyệt đối.",
    },
    neighbors: {
      title: "1.2. Liệt kê các đỉnh kề của đỉnh v (Enumerating neighbors)",
      desc: "Quét tìm tất cả các láng giềng kề trực tiếp với đỉnh v.",
      matrixCost: "O(V)",
      listCost: "O(k)",
      matrixExpl: "Phải duyệt qua toàn bộ một hàng AdjMatrix[v][j] với j từ 0 đến V-1 để tìm các ô khác 0 ⟹ Tốn O(V) dù đỉnh chỉ có 1 láng giềng!",
      listExpl: "Chỉ cần duyệt đúng qua k phần tử trong AdjList[v] ⟹ Thuật toán Output-Sensitive chỉ tốn thời gian tỷ lệ thuận với số láng giềng thực tế!",
      note: "⭐ ĐÂY LÀ KHÁC BIỆT SỐNG CÒN giữa AdjMatrix và AdjList, ảnh hưởng quyết định đến hiệu năng của DFS, BFS và Dijkstra!",
      isCrucial: true,
    },
    countE: {
      title: "1.3. Đếm số cạnh E (Counting E)",
      desc: "Đếm tổng số cạnh hiện diện trong toàn bộ đồ thị.",
      matrixCost: "O(V²)",
      listCost: "O(V + E)",
      matrixExpl: "Phải quét toàn bộ ma trận V × V để đếm các ô khác 0 ⟹ Tốn O(V²).",
      listExpl: "Cộng dồn kích thước của tất cả V danh sách kề ⟹ Tốn O(V + E).",
      note: "Có thể lưu sẵn tổng số cạnh E vào một biến riêng để truy xuất trong O(1) nếu đồ thị tĩnh.",
    },
    checkEdge: {
      title: "1.4. Kiểm tra sự tồn tại của cạnh (u, v)",
      desc: "Kiểm tra xem giữa 2 đỉnh u và v có nối với nhau bằng một cạnh hay không.",
      matrixCost: "O(1)",
      listCost: "O(k)",
      matrixExpl: "Truy cập trực tiếp chỉ số ô nhớ AdjMatrix[u][v] xem có khác 0 hay không ⟹ Cực nhanh trong O(1)!",
      listExpl: "Phải quét tuần tự trong danh sách AdjList[u] xem có chứa đỉnh v hay không ⟹ Tốn O(k) với k là bậc của đỉnh u.",
      note: "Nếu đồ thị rất dày (Dense Graph) và cần kiểm tra cạnh liên tục (như Floyd-Warshall), AdjMatrix chiếm ưu thế lớn.",
    },
  };

  const cur = operations[selectedOp];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Scale className="w-3.5 h-3.5 text-sky-700" />
            <span>Phần 1: Ứng Dụng &amp; Trade-Off Cấu Trúc Đồ Thị</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-indigo-950 to-purple-950 bg-clip-text text-transparent">
            4 Thao Tác Đồ Thị Cơ Bản &amp; Đấu Trường Trade-Off
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            So sánh chi tiết hiệu năng giữa Ma trận kề (Adjacency Matrix) và Danh sách kề (Adjacency List).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("ops")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "ops"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            4 Thao Tác Cơ Bản
          </button>
          <button
            onClick={() => setActiveTab("tradeoff")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "tradeoff"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Bảng Trade-Off Toàn Diện
          </button>
        </div>
      </div>

      {/* Tab 1: 4 Operations */}
      {activeTab === "ops" && (
        <div className="space-y-6">
          {/* 4 Operation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: "countV", label: "1. Đếm Số Đỉnh V", badge: "O(1) vs O(1)" },
              { id: "neighbors", label: "2. Liệt Kê Đỉnh Kề", badge: "O(V) vs O(k) ⭐" },
              { id: "countE", label: "3. Đếm Số Cạnh E", badge: "O(V²) vs O(V+E)" },
              { id: "checkEdge", label: "4. Kiểm Tra Cạnh", badge: "O(1) vs O(k)" },
            ].map((op) => (
              <button
                key={op.id}
                onClick={() => setSelectedOp(op.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between shadow-sm ${
                  selectedOp === op.id
                    ? "bg-sky-100 border-sky-400 text-sky-950 ring-2 ring-sky-500/30 font-bold"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="text-xs font-mono font-bold">{op.label}</span>
                <span className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">{op.badge}</span>
              </button>
            ))}
          </div>

          {/* Operation Detail Benchmark Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-sm md:text-base font-bold text-slate-800 font-mono">{cur.title}</h4>
                <p className="text-xs text-slate-600 font-sans mt-0.5">{cur.desc}</p>
              </div>
              {cur.isCrucial && (
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 font-mono text-[10px] font-bold self-start sm:self-auto shadow-sm">
                  KHÁC BIỆT QUAN TRỌNG NHẤT
                </span>
              )}
            </div>

            {/* Side-by-side Speed Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* AdjMatrix */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-700">Adjacency Matrix</span>
                  <span className={`px-2.5 py-0.5 rounded-lg font-mono text-xs font-extrabold shadow-sm ${
                    cur.matrixCost === "O(1)" ? "bg-emerald-100 border border-emerald-300 text-emerald-950" : "bg-rose-100 border border-rose-300 text-rose-950"
                  }`}>
                    {cur.matrixCost}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {cur.matrixExpl}
                </p>
              </div>

              {/* AdjList */}
              <div className="p-4 rounded-xl bg-sky-50/80 border border-sky-200 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-950">Adjacency List</span>
                  <span className={`px-2.5 py-0.5 rounded-lg font-mono text-xs font-extrabold shadow-sm ${
                    cur.listCost === "O(1)" || cur.listCost === "O(k)" ? "bg-emerald-100 border border-emerald-300 text-emerald-950" : "bg-amber-100 border border-amber-300 text-amber-950"
                  }`}>
                    {cur.listCost}
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed">
                  {cur.listExpl}
                </p>
              </div>
            </div>

            {/* Note banner */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-sans text-amber-950 shadow-sm leading-relaxed">
              💡 {cur.note}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Trade-Off Matrix */}
      {activeTab === "tradeoff" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AdjMatrix Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="text-sm font-bold text-slate-800 font-mono">Adjacency Matrix (Ma trận kề)</h4>
                <span className="text-xs font-mono text-slate-500 font-semibold">int[V][V]</span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-mono font-bold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ƯU ĐIỂM (PROS)</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 pl-4 list-disc leading-relaxed">
                    <li>Kiểm tra tồn tại cạnh $i-j$ cực nhanh trong <strong>O(1)</strong>.</li>
                    <li>Rất phù hợp với đồ thị dày (Dense graph) và thuật toán Floyd-Warshall tìm đường đi ngắn nhất mọi cặp đỉnh.</li>
                  </ul>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-rose-800 font-mono font-bold text-[11px]">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>NHƯỢC ĐIỂM (CONS)</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 pl-4 list-disc leading-relaxed">
                    <li>Liệt kê đỉnh kề tốn thời gian <strong>O(V)</strong> (phải duyệt hết một hàng).</li>
                    <li>Không gian lưu trữ cố định <strong>O(V²)</strong> gây lãng phí bộ nhớ trên đồ thị thưa.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AdjList Card */}
            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-300 space-y-4 shadow-sm ring-2 ring-sky-500/20">
              <div className="flex items-center justify-between border-b border-sky-200 pb-2">
                <h4 className="text-sm font-bold text-sky-950 font-mono">Adjacency List (Danh sách kề) ⭐</h4>
                <span className="text-xs font-mono text-sky-800 font-semibold">Vector&lt;Vector&lt;Pair&gt;&gt;</span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-mono font-bold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ƯU ĐIỂM (PROS)</span>
                  </div>
                  <ul className="space-y-1 text-slate-700 pl-4 list-disc leading-relaxed">
                    <li>Liệt kê $k$ đỉnh kề cực nhanh trong <strong>O(k)</strong> (Output-sensitive).</li>
                    <li>Không gian lưu trữ tối ưu <strong>O(V + E)</strong> không chiếm ô trống thừa.</li>
                    <li><strong>Lựa chọn hàng đầu cho DFS, BFS, Dijkstra</strong> vì các thuật toán này liên tục duyệt đỉnh kề.</li>
                  </ul>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-sky-200">
                  <div className="flex items-center gap-1.5 text-rose-800 font-mono font-bold text-[11px]">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>NHƯỢC ĐIỂM (CONS)</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 pl-4 list-disc leading-relaxed">
                    <li>Kiểm tra tồn tại cạnh $i-j$ tốn <strong>O(k)</strong> (phải duyệt danh sách).</li>
                    <li>Có overhead nhỏ khi khởi tạo và quản lý con trỏ danh sách.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
