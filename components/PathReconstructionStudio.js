"use client";

import React, { useState } from "react";
import {
  Route,
  ArrowRight,
} from "lucide-react";

export default function PathReconstructionStudio() {
  const [activeVersion, setActiveVersion] = useState("recursive"); // "recursive" | "iterative"
  const [selectedTarget, setSelectedTarget] = useState(4); // 0 to 4

  // Sample parent array p from slide: p = [-1, 0, 1, 2, 3, -1, -1, -1]
  const parentArray = [-1, 0, 1, 2, 3, -1, -1, -1];

  // Reconstruct iterative (reversed)
  const getIterativePath = (s, t) => {
    if (t < 0 || t > 4) return [];
    const path = [];
    let curr = t;
    while (curr !== s && curr !== -1) {
      path.push(curr);
      curr = parentArray[curr];
    }
    if (curr === s) path.push(s);
    return path;
  };

  // Reconstruct recursive (normal)
  const getRecursivePath = (t) => {
    if (t < 0 || t > 4) return [];
    const path = [];
    const backtrack = (u) => {
      if (u === -1) return;
      backtrack(parentArray[u]);
      path.push(u);
    };
    backtrack(t);
    return path;
  };

  const normalPath = getRecursivePath(selectedTarget);
  const reversedPath = getIterativePath(0, selectedTarget);

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Route className="w-3.5 h-3.5 text-amber-700" />
            <span>Phần 2.9: Thuật Toán Truy Vết Đường Đi (Path Reconstruction)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-950 to-emerald-950 bg-clip-text text-transparent">
            Truy Vết Đường Đi — Đối Đầu Phiên Bản Lặp Ngược vs Đệ Quy Xuôi
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cách tái tạo đường đi từ nguồn $s$ đến đích $t$ dựa vào mảng cha <code>p[]</code> đã thu thập sau BFS/DFS.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveVersion("recursive")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeVersion === "recursive"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cách 2: Đệ Quy (Đúng Thứ Tự ⭐)
          </button>
          <button
            onClick={() => setActiveVersion("iterative")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeVersion === "iterative"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cách 1: Vòng Lặp (Đảo Ngược)
          </button>
        </div>
      </div>

      {/* Parent Array Display */}
      <div className="p-5 rounded-2xl bg-white border border-amber-100 space-y-2 mb-6 shadow-sm">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600">
          <span>Mảng Cha p[] Đã Lưu (Nguồn s = 0, Đích t = {selectedTarget})</span>
          <span className="text-amber-950 font-bold">p[s] = p[0] = -1 (Điều kiện dừng)</span>
        </div>

        <div className="grid grid-cols-8 gap-2 text-center font-mono text-xs">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => (
            <div
              key={id}
              onClick={() => id <= 4 && setSelectedTarget(id)}
              className={`p-2.5 rounded-xl border transition-all ${
                id <= 4 ? "cursor-pointer" : "opacity-40"
              } ${
                selectedTarget === id
                  ? "bg-amber-100 border-amber-400 text-amber-950 font-bold shadow-sm ring-2 ring-amber-400/30"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="text-[10px] text-slate-500 block">p[{id}]</span>
              <strong className="text-xs">{parentArray[id]}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Side-by-Side Trace Output & Code Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Path Visual Trace (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-amber-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono">
            <span className="text-slate-600 font-semibold">Kết Quả Truy Vết Đường Đi:</span>
            <span className={activeVersion === "recursive" ? "text-emerald-950 font-bold" : "text-amber-950 font-bold"}>
              {activeVersion === "recursive" ? "Xuôi từ 0 ⟹ " + selectedTarget : "Ngược từ " + selectedTarget + " ⟹ 0"}
            </span>
          </div>

          {/* Render Path Nodes */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 flex-wrap min-h-[60px] shadow-sm">
            {activeVersion === "recursive" ? (
              normalPath.map((nodeId, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono font-extrabold text-xs flex items-center justify-center shadow-sm">
                    {nodeId}
                  </div>
                  {idx < normalPath.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-emerald-600" />
                  )}
                </React.Fragment>
              ))
            ) : (
              reversedPath.map((nodeId, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-mono font-extrabold text-xs flex items-center justify-center shadow-sm">
                    {nodeId}
                  </div>
                  {idx < reversedPath.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-amber-600" />
                  )}
                </React.Fragment>
              ))
            )}
          </div>

          {/* Explanation */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans space-y-1 shadow-sm">
            <strong className="text-slate-800 block font-semibold">
              {activeVersion === "recursive" ? "✅ Phiên bản Đệ Quy (Recursive):" : "⚠️ Phiên bản Lặp (Iterative):"}
            </strong>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {activeVersion === "recursive"
                ? "Bằng cách gọi đệ quy backtrack(p[u], p) TRƯỚC RỒI MỚI IN RA u, cơ chế LIFO của Call Stack tự động đảo ngược thứ tự in ấn, giúp output xuất hiện chính xác từ nguồn s đến đích t!"
                : "Bắt đầu từ đỉnh đích t và lùi dần về đỉnh cha p[t] ⟹ Thứ tự in ấn bị ĐẢO NGƯỢC (t ⟶ ... ⟶ s). Nếu muốn in xuôi, cần dùng thêm một Stack phụ hoặc đảo chuỗi."}
            </p>
          </div>
        </div>

        {/* Right: Java Code (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-amber-100 p-5 space-y-3 shadow-sm">
          {/* Code block kept in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-amber-400 font-bold">
                  {activeVersion === "recursive" ? "backtrack.java (Đệ quy)" : "printPath.java (Lặp)"}
                </span>
              </div>
              <span className="text-amber-400 font-bold">Path Reconstruction</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{activeVersion === "recursive"
? `void backtrack(int u, int[] p) {
  if (u == -1) return;        // đỉnh cha của s là -1
  backtrack(p[u], p);         // lùi về đỉnh cha trước
  System.out.print(u + " ");  // in ra khi quay lui (đúng thứ tự)
}

// Trong hàm main:
System.out.print("Path: ");
backtrack(t, p);              // bắt đầu từ đỉnh cuối đường đi t`
: `void printPathIterative(int s, int t, int[] p) {
  StringBuilder sb = new StringBuilder("Reversed: ");
  int i = t;
  while (i != s) {
    sb.append(i).append(" ");
    i = p[i];                 // lùi về đỉnh cha
  }
  sb.append(s);
  System.out.println(sb);
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
