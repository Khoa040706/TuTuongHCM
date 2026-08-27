"use client";

import React, { useState } from "react";
import { Grid, ShieldAlert } from "lucide-react";

export default function GraphAdjMatrixVisualizer() {
  const [isWeighted, setIsWeighted] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null); // { r, c }

  // 5 vertices: 0, 1, 2, 3, 4 based on slide example:
  // Edges: (1,2: 2), (0,1: 4), (0,2: 4), (0,3: 6), (0,4: 6), (2,3: 8), (3,4: 9)
  const matrixUnweighted = [
    [0, 1, 1, 1, 1], // 0 is connected to 1, 2, 3, 4
    [1, 0, 1, 0, 0], // 1 is connected to 0, 2
    [1, 1, 0, 1, 0], // 2 is connected to 0, 1, 3
    [1, 0, 1, 0, 1], // 3 is connected to 0, 2, 4
    [1, 0, 0, 1, 0], // 4 is connected to 0, 3
  ];

  const matrixWeighted = [
    [0, 4, 4, 6, 6],
    [4, 0, 2, 0, 0],
    [4, 2, 0, 8, 0],
    [6, 0, 8, 0, 9],
    [6, 0, 0, 9, 0],
  ];

  const matrix = isWeighted ? matrixWeighted : matrixUnweighted;

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Grid className="w-3.5 h-3.5 text-sky-700" />
            <span>Ma Trận Kề — Adjacency Matrix (Mục 4.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-cyan-950 to-slate-900 bg-clip-text text-transparent">
            Cấu Trúc Adjacency Matrix &bull; Độ Phức Tạp Không Gian O(V²)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Mảng 2 chiều <code>AdjMatrix[V][V]</code> lưu kết nối trực tiếp giữa mọi cặp đỉnh.
          </p>
        </div>

        {/* Weighted / Unweighted Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setIsWeighted(false)}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              !isWeighted
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Unweighted (0 / 1)
          </button>
          <button
            onClick={() => setIsWeighted(true)}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              isWeighted
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Weighted (Trọng số w)
          </button>
        </div>
      </div>

      {/* Grid Layout: Matrix View & Complexity Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive 2D Grid (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-sky-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bảng Ma Trận AdjMatrix[5][5]</span>
            <span className="text-sky-950 font-bold">V = 5 Đỉnh</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center font-mono text-xs">
              <thead>
                <tr className="text-slate-500 text-[10px] border-b border-slate-200">
                  <th className="p-2 text-slate-600 text-left font-semibold">u \ v</th>
                  {[0, 1, 2, 3, 4].map((v) => (
                    <th key={v} className="p-2 text-sky-950 font-bold">[{v}]</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {matrix.map((row, r) => (
                  <tr key={r}>
                    <td className="p-2 text-left font-bold text-sky-950 border-r border-slate-200">
                      [{r}]
                    </td>
                    {row.map((val, c) => {
                      const isHovered = hoveredCell && hoveredCell.r === r && hoveredCell.c === c;
                      const hasEdge = val > 0;

                      return (
                        <td
                          key={c}
                          onMouseEnter={() => setHoveredCell({ r, c })}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`p-2 transition-all cursor-pointer select-none font-bold ${
                            isHovered
                              ? "bg-sky-600 text-white scale-110 shadow-md rounded-lg"
                              : hasEdge
                              ? "bg-sky-50 text-sky-950 border border-sky-200 font-extrabold"
                              : "text-slate-300 hover:text-slate-600"
                          }`}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {hoveredCell ? (
            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-sans text-sky-950 shadow-sm">
              📌 Ô <code>AdjMatrix[{hoveredCell.r}][{hoveredCell.c}] = {matrix[hoveredCell.r][hoveredCell.c]}</code> &rarr;{" "}
              {matrix[hoveredCell.r][hoveredCell.c] > 0 ? (
                <span>Tồn tại cạnh nối giữa đỉnh <strong>[{hoveredCell.r}]</strong> và <strong>[{hoveredCell.c}]</strong> {isWeighted && `với trọng số w = ${matrix[hoveredCell.r][hoveredCell.c]}`}.</span>
              ) : (
                <span>Không có cạnh nối trực tiếp giữa hai đỉnh này.</span>
              )}
            </div>
          ) : (
            <div className="text-[11px] text-slate-500 font-sans text-center">
              💡 Rê chuột vào từng ô ma trận để xem chi tiết kết nối giữa cặp đỉnh (u, v).
            </div>
          )}
        </div>

        {/* Right: Code & Space Complexity (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-sky-100 p-5 space-y-4 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-sky-400 font-bold">AdjMatrix.java</span>
              </div>
              <span className="text-amber-400 font-bold">Space: O(V²)</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`int i, V = NUM_V; // NUM_V đỉnh
int[][] AdjMatrix = new int[V][V];`}
              </code>
            </pre>
          </div>

          {/* Pitfall & Trade-off */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs font-sans text-slate-700 space-y-1.5 shadow-sm">
            <strong className="text-rose-950 font-mono flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Lãng Phí Bộ Nhớ Trên Đồ Thị Thưa:
            </strong>
            <p className="text-[11px] leading-relaxed">
              Nếu đồ thị có $V = 100,000$ đỉnh nhưng chỉ có $100,000$ cạnh (Sparse Graph), ma trận kề bắt buộc cấp phát $100,000 \times 100,000 = 10^{10}$ số nguyên (&approx; 40 GB RAM!) &mdash; trong đó 99.999% các ô là số 0 lãng phí!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
