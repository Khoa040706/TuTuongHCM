"use client";

import React, { useState } from "react";
import { Share2 } from "lucide-react";

export default function GraphComponentsReachabilityLab() {
  const [sourceVertex, setSourceVertex] = useState(0);

  // 3 Disconnected components from slide:
  // Component 1: {0, 1, 2, 3, 4}
  // Component 2: {5, 6, 7}
  // Component 3: {8}
  const componentMap = {
    0: 1, 1: 1, 2: 1, 3: 1, 4: 1,
    5: 2, 6: 2, 7: 2,
    8: 3,
  };

  const getReachability = (source, target) => {
    return componentMap[source] === componentMap[target];
  };

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Share2 className="w-3.5 h-3.5 text-teal-700" />
            <span>Thành Phần Liên Thông &amp; Tính Đến Được (Mục 3.6)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
            Connected Components &bull; Reachability &bull; Sub Graph
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đồ thị có $&gt; 1$ thành phần liên thông là <strong>Disconnected Graph</strong>. Các đỉnh cùng Component mới có thể đến được nhau (Reachable).
          </p>
        </div>

        {/* Status Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          3 Components &rArr; Disconnected
        </div>
      </div>

      {/* 3 Components Preview Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-white border border-emerald-200 space-y-1 shadow-sm">
          <span className="text-emerald-950 font-bold block">COMPONENT 1</span>
          <span className="text-slate-800 font-bold">&#123;0, 1, 2, 3, 4&#125; (5 đỉnh)</span>
          <span className="text-[10px] text-slate-500 block font-sans">Các đỉnh đi được tới nhau</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-teal-200 space-y-1 shadow-sm">
          <span className="text-teal-950 font-bold block">COMPONENT 2</span>
          <span className="text-slate-800 font-bold">&#123;5, 6, 7&#125; (3 đỉnh)</span>
          <span className="text-[10px] text-slate-500 block font-sans">Tách biệt với Component 1</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-cyan-200 space-y-1 shadow-sm">
          <span className="text-cyan-950 font-bold block">COMPONENT 3</span>
          <span className="text-slate-800 font-bold">&#123;8&#125; (1 đỉnh cô lập)</span>
          <span className="text-[10px] text-slate-500 block font-sans">Đỉnh độc lập</span>
        </div>
      </div>

      {/* Interactive Reachability Inspector */}
      <div className="p-6 rounded-2xl bg-white border border-teal-100 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-semibold">Chọn đỉnh nguồn (Source Vertex):</span>
            <select
              value={sourceVertex}
              onChange={(e) => setSourceVertex(Number(e.target.value))}
              className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-teal-950 font-bold focus:outline-none shadow-sm"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                <option key={v} value={v}>Đỉnh [{v}] (Component {componentMap[v]})</option>
              ))}
            </select>
          </div>

          <div className="text-emerald-900 font-bold font-sans text-xs">
            Đang kiểm tra tính đến được (Reachable) từ Đỉnh [{sourceVertex}]
          </div>
        </div>

        {/* 9 Target Nodes Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 font-mono text-xs">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((target) => {
            const isReachable = getReachability(sourceVertex, target);
            const isSource = sourceVertex === target;

            return (
              <div
                key={target}
                className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 shadow-sm ${
                  isSource
                    ? "bg-teal-600 text-white border-teal-700 font-bold scale-105 shadow-sm"
                    : isReachable
                    ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-400"
                }`}
              >
                <span className="text-sm font-extrabold">[{target}]</span>
                <span className="text-[10px] font-sans">
                  {isSource ? "NGUỒN" : isReachable ? "Reachable ✅" : "Unreachable ❌"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs font-sans text-slate-700 space-y-1 shadow-sm">
          <strong className="text-teal-950 block font-mono">Giải thích slide 3.6:</strong>
          <p className="text-[11px] leading-relaxed">
            • Khi đứng ở <strong>Vertex 0</strong>: Các đỉnh <code>1, 2, 3, 4</code> là <strong>Reachable</strong> (cùng thuộc Component 1); còn các đỉnh <code>5, 6, 7, 8</code> là <strong>Unreachable</strong>.<br />
            • Khái niệm <strong>Sub Graph (Đồ thị con)</strong>: Ví dụ <code>&#123;7, 6, 8&#125;</code> là một đồ thị con của đồ thị gốc.
          </p>
        </div>
      </div>
    </div>
  );
}
