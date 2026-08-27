"use client";

import React, { useState } from "react";
import { ListFilter, ArrowRight, CheckCircle2 } from "lucide-react";

export default function GraphAdjListStudio() {
  const [selectedVertex, setSelectedVertex] = useState(0);

  // 5 vertices from slide:
  // 0: -> (1, 4), (2, 4), (3, 6), (4, 6)
  // 1: -> (0, 4), (2, 2)
  // 2: -> (0, 4), (1, 2), (3, 8)
  // 3: -> (0, 6), (2, 8), (4, 9)
  // 4: -> (0, 6), (3, 9)
  const adjListData = [
    [ { v: 1, w: 4 }, { v: 2, w: 4 }, { v: 3, w: 6 }, { v: 4, w: 6 } ],
    [ { v: 0, w: 4 }, { v: 2, w: 2 } ],
    [ { v: 0, w: 4 }, { v: 1, w: 2 }, { v: 3, w: 8 } ],
    [ { v: 0, w: 6 }, { v: 2, w: 8 }, { v: 4, w: 9 } ],
    [ { v: 0, w: 6 }, { v: 3, w: 9 } ],
  ];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <ListFilter className="w-3.5 h-3.5 text-emerald-700" />
            <span>Danh Sách Kề — Adjacency List (Mục 4.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 bg-clip-text text-transparent">
            Cấu Trúc Adjacency List &bull; Không Gian Tối Ưu O(V + E)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Lựa chọn chuẩn mực số 1 cho hầu hết bài toán đồ thị CS2010.
          </p>
        </div>

        {/* Space Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Space: O(V + E)
        </div>
      </div>

      {/* Main Studio View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Vector of Vectors (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Cấu Trúc Vector&lt;Vector&lt;IntegerPair&gt;&gt;</span>
            <span className="text-emerald-950 font-bold">5 Danh Sách Đỉnh</span>
          </div>

          <div className="space-y-2.5">
            {adjListData.map((neighbors, u) => {
              const isSelected = selectedVertex === u;

              return (
                <div
                  key={u}
                  onClick={() => setSelectedVertex(u)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none flex flex-wrap items-center gap-2 shadow-sm ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-500/40"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {/* Vertex Head */}
                  <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-mono font-extrabold text-xs text-amber-950 flex items-center gap-1 shadow-sm">
                    <span>AdjList[{u}]</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </div>

                  {/* Neighbors Pairs */}
                  {neighbors.map((pair, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-950 font-mono text-xs flex items-center gap-1 shadow-sm font-bold"
                    >
                      <span>v:{pair.v}</span>
                      <span className="text-[10px] text-slate-400">|</span>
                      <span className="text-amber-800 font-extrabold">w:{pair.w}</span>
                    </div>
                  ))}

                  <div className="text-[10px] font-mono text-slate-500 ml-auto font-semibold">
                    deg({u}) = {neighbors.length}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-slate-700 shadow-sm">
            📌 Đang chọn <strong>Đỉnh [{selectedVertex}]</strong> &rarr; Lệnh <code>AdjList.get({selectedVertex})</code> trả về danh sách {adjListData[selectedVertex].length} hàng xóm trong thời gian O(deg({selectedVertex})).
          </div>
        </div>

        {/* Right: Java Syntax & Why O(V+E) (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-emerald-400 font-bold">AdjList.java</span>
              </div>
              <span className="text-emerald-400 font-bold">Slide 4.2</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`Vector<Vector<IntegerPair>> AdjList = 
  new Vector<Vector<IntegerPair>>();`}
              </code>
            </pre>
          </div>

          {/* Advantages */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-slate-700 space-y-2 shadow-sm">
            <strong className="text-emerald-950 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Tại Sao Tối Ưu Không Gian O(V + E)?
            </strong>
            <p className="text-[11px] leading-relaxed">
              • Cấp phát đúng $V$ vector con cho $V$ đỉnh.<br />
              • Tổng số lượng phần tử IntegerPair nằm rải rác trong tất cả các vector con đúng bằng số cạnh (vô hướng $2E$, có hướng $E$).<br />
              • <strong>Không lãng phí bất kỳ ô trống 0 nào</strong> &rarr; Cực kỳ tối ưu cho đồ thị thực tế!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
