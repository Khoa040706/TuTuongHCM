"use client";

import React, { useState } from "react";
import { Scale, ShieldCheck, Sparkles, Info } from "lucide-react";

export default function UfdsUnionByRankWorkbench() {
  const [caseType, setCaseType] = useState("diff"); // "diff" (rankX > rankY) | "equal" (rankX == rankY)

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Scale className="w-3.5 h-3.5 text-indigo-700" />
            <span>Chiến Lược Gộp Theo Rank (Mục 1.5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            Heuristic "Union-by-Rank" &amp; Ý Nghĩa Cận Trên (Upper Bound)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Gắn Root của cây <strong>thấp hơn</strong> vào Root của cây <strong>cao hơn</strong> để cây kết quả luôn ngắn nhất có thể.
          </p>
        </div>

        {/* Case Selector */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setCaseType("diff")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              caseType === "diff"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Trường hợp: rank(x) &gt; rank(y)
          </button>
          <button
            onClick={() => setCaseType("equal")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              caseType === "equal"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Trường hợp: rank(x) == rank(y)
          </button>
        </div>
      </div>

      {/* Dynamic Visual Demonstration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Visual Scenario (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-indigo-100 p-5 space-y-4 shadow-sm">
          {caseType === "diff" ? (
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <ShieldCheck className="w-4 h-4 text-indigo-700" />
                Cây Cũ Cao Hơn Giữ Nguyên Chiều Cao (rank không đổi)
              </span>

              <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-2 text-xs font-sans text-slate-700 shadow-sm">
                <p className="leading-relaxed">
                  • Giả sử Root <code>x</code> có <code>rank[x] = 2</code> và Root <code>y</code> có <code>rank[y] = 1</code>.<br />
                  • <strong>Quy tắc:</strong> Gắn <code>p[y] = x</code> (Cây <code>y</code> biến thành một nhánh con của <code>x</code>).<br />
                  • <strong>Kết quả:</strong> Chiều cao của cây gốc <code>x</code> vẫn là 2. <strong>rank[x] KHÔNG CẦN TĂNG!</strong>
                </p>
                <div className="p-2.5 rounded-lg bg-white border border-indigo-200 text-indigo-950 font-mono text-xs font-bold shadow-sm">
                  if (rank.get(x) &gt; rank.get(y)) p.set(y, x);
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                Hai Cây Cùng Chiều Cao: Bắt Buộc Rank Tăng Thêm 1
              </span>

              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2 text-xs font-sans text-slate-700 shadow-sm">
                <p className="leading-relaxed">
                  • Giả sử Root <code>x</code> và Root <code>y</code> đều có <code>rank = 1</code>.<br />
                  • <strong>Quy tắc:</strong> Gắn cây nào vào cây nào cũng được (ví dụ <code>p[x] = y</code>).<br />
                  • <strong>Hệ quả:</strong> Cây mới sẽ cao hơn cây cũ đúng 1 tầng &rarr; <strong>rank[y] tăng lên 2</strong>!
                </p>
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 text-emerald-950 font-mono text-xs font-bold shadow-sm">
                  p.set(x, y);<br />
                  if (rank.get(x) == rank.get(y)) rank.set(y, rank.get(y) + 1);
                </div>
              </div>
            </div>
          )}

          {/* Java unionSet Code Box in Dark Theme */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-indigo-400 font-bold">unionSet.java</span>
              </div>
              <span className="text-emerald-400 font-bold">Union-by-Rank</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`public void unionSet(int i, int j) {
  if (!isSameSet(i, j)) {
    int x = findSet(i), y = findSet(j);
    // Dùng rank để giữ cây luôn ngắn nhất
    if (rank.get(x) > rank.get(y))
      p.set(y, x);
    else {
      p.set(x, y);
      if (rank.get(x) == rank.get(y))
        rank.set(y, rank.get(y) + 1);
    }
  }
}`}
              </code>
            </pre>
          </div>
        </div>

        {/* Right: Why Rank is Upper Bound (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 text-xs font-sans shadow-sm">
          <span className="font-bold uppercase tracking-wider text-amber-950 font-mono flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <Info className="w-4 h-4 text-amber-700" />
            Tại Sao Rank Chỉ Là Cận Trên? (Slide 1.5.c)
          </span>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5 shadow-sm">
            <strong className="text-amber-950 block font-mono">1. Cận trên (Upper Bound):</strong>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              <code>rank[i]</code> biểu thị chiều cao tối đa có thể có của cây con gốc tại <code>i</code>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 shadow-sm">
            <strong className="text-emerald-950 block font-mono">2. Tác động của Path Compression:</strong>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              Khi gọi <code>findSet()</code>, thao tác nén đường đi (Path Compression) sẽ kéo các nút con gắn thẳng vào Root, làm chiều cao thực tế của cây bị giảm đi đáng kể.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1.5 shadow-sm">
            <strong className="text-teal-950 block font-mono">3. Tiết kiệm chi phí:</strong>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              Ta <strong>không muốn tốn công</strong> duyệt lại toàn bộ cây để cập nhật lại chiều cao chính xác. Giữ nguyên <code>rank</code> làm cận trên là hoàn toàn đủ để thuật toán đạt hiệu năng tối ưu $O(\alpha(V))$!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
