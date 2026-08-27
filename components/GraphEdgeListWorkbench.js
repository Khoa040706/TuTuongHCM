"use client";

import React, { useState } from "react";
import { GitCommit, Trophy } from "lucide-react";

export default function GraphEdgeListWorkbench() {
  const [selectedEdge, setSelectedEdge] = useState(0);

  // 7 edges exactly from slide 4.3:
  const edgeTable = [
    { i: 0, w: 2, u: 1, v: 2 },
    { i: 1, w: 4, u: 0, v: 1 },
    { i: 2, w: 4, u: 0, v: 2 },
    { i: 3, w: 6, u: 0, v: 3 },
    { i: 4, w: 6, u: 0, v: 4 },
    { i: 5, w: 8, u: 2, v: 3 },
    { i: 6, w: 9, u: 3, v: 4 },
  ];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <GitCommit className="w-3.5 h-3.5 text-indigo-700" />
            <span>Danh Sách Cạnh — Edge List (Mục 4.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            Cấu Trúc Edge List &bull; Bộ 3 Số Nguyên &#123;w, u, v&#125;
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lưu danh sách $E$ cạnh được sắp xếp theo trọng số &mdash; Vũ khí tối thượng của thuật toán <strong>Kruskal MST</strong>.
          </p>
        </div>

        {/* Space Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-indigo-100 border border-indigo-300 text-indigo-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Space: O(E)
        </div>
      </div>

      {/* Main Studio View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 7-Row Table from Slide (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bảng 7 Cạnh Trong Slide (Đã Sắp Xếp Theo Trọng Số w)</span>
            <span className="text-indigo-950 font-bold">E = 7 Cạnh</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center font-mono text-xs">
              <thead>
                <tr className="text-slate-500 text-[10px] border-b border-slate-200 font-semibold">
                  <th className="p-2 text-slate-600">i</th>
                  <th className="p-2 text-amber-800">Trọng số (w)</th>
                  <th className="p-2 text-indigo-900">Đỉnh u</th>
                  <th className="p-2 text-indigo-900">Đỉnh v</th>
                  <th className="p-2 text-right text-slate-500">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {edgeTable.map((edge) => {
                  const isSelected = selectedEdge === edge.i;

                  return (
                    <tr
                      key={edge.i}
                      onClick={() => setSelectedEdge(edge.i)}
                      className={`cursor-pointer transition-all ${
                        isSelected
                          ? "bg-indigo-50 text-indigo-950 font-bold"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <td className="p-2 text-slate-600">[{edge.i}]</td>
                      <td className="p-2 text-amber-900 font-extrabold">{edge.w}</td>
                      <td className="p-2 text-indigo-900 font-semibold">{edge.u}</td>
                      <td className="p-2 text-indigo-900 font-semibold">{edge.v}</td>
                      <td className="p-2 text-right">
                        <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold shadow-sm ${
                          isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {isSelected ? "Đang chọn" : "Xem"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-sans text-slate-700 shadow-sm">
            📌 Cạnh <strong>[{selectedEdge}]</strong>: Nối giữa đỉnh <code>[{edgeTable[selectedEdge].u}]</code> và <code>[{edgeTable[selectedEdge].v}]</code> với trọng số <code>w = {edgeTable[selectedEdge].w}</code>.
          </div>
        </div>

        {/* Right: Java Code & Kruskal Role (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-indigo-100 p-5 space-y-4 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-indigo-400 font-bold">EdgeList.java</span>
              </div>
              <span className="text-indigo-400 font-bold">Slide 4.3</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`Vector<IntegerTriple> EdgeList = 
  new Vector<IntegerTriple>();`}
              </code>
            </pre>
          </div>

          {/* Kruskal Synergy */}
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-sans text-slate-700 space-y-2 shadow-sm">
            <strong className="text-indigo-950 font-mono flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-600" />
              Tại Sao EdgeList Rất Quan Trọng?
            </strong>
            <p className="text-[11px] leading-relaxed">
              • Khi giải bài toán <strong>Cây Khung Nhỏ Nhất (Minimum Spanning Tree &mdash; MST)</strong> bằng thuật toán Kruskal (Week 07), bước đầu tiên là <strong>sắp xếp toàn bộ các cạnh theo thứ tự trọng số tăng dần</strong>.<br />
              • Cấu trúc <code>EdgeList</code> cho phép gọi hàm sắp xếp <code>Collections.sort(EdgeList)</code> trong $O(E \log E)$ cực kỳ thuận tiện và tự nhiên!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
