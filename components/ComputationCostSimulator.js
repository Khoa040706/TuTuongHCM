"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Layers, Sliders, TrendingUp, BarChart2 } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function ComputationCostSimulator() {
  const [nVal, setNVal] = useState(50);

  // Calculations
  const partA = 100 * nVal;
  const partB = 2 * nVal * nVal;
  const totalOps = partA + partB;
  const percentB = Math.round((partB / totalOps) * 100);

  // Algorithm A vs B
  const algoA = nVal * nVal; // n^2
  const algoB = nVal; // n

  const codeExample = `for (int i = 1; i <= n; i++) {
    perform 100 operations; // Phần A: chạy n lần -> 100 * n
    for (int j = 1; j <= n; j++) {
        perform 2 operations; // Phần B: chạy n * n lần -> 2 * n²
    }
}
// Tổng số phép tính = 100n + 2n²`;

  const comparisonRows = [
    { n: 10, a: 100, b: 10, diff: "Gấp 10 lần" },
    { n: 50, a: 2500, b: 50, diff: "Gấp 50 lần" },
    { n: 100, a: 10000, b: 100, diff: "Gấp 100 lần" },
    { n: 1000, a: 1000000, b: 1000, diff: "Gấp 1,000 lần (1 triệu vs 1 ngàn)" },
    { n: 10000, a: 100000000, b: 10000, diff: "Gấp 10,000 lần (100 triệu vs 10 ngàn)" }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Mục 3.2 – 3.3 — Phân Tích Vòng Lặp Lồng Nhau
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tính Chi Phí Tính Toán (Computation Cost: 100n + 2n²)
          </h3>
          <p className="text-xs text-slate-500">
            Kéo thanh trượt để thấy số hạng bậc cao <code>2n²</code> nhanh chóng áp đảo hoàn toàn số hạng <code>100n</code> khi n tăng
          </p>
        </div>

        {/* N Slider */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl self-start sm:self-auto">
          <Sliders className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-mono font-bold text-slate-600">n =</span>
          <input
            type="range"
            min={1}
            max={200}
            value={nVal}
            onChange={(e) => setNVal(parseInt(e.target.value, 10))}
            className="w-24 accent-amber-600 cursor-pointer"
          />
          <span className="font-mono font-black text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
            {nVal}
          </span>
        </div>
      </div>

      {/* Code & Live Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Java Code */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>Nested Loop Cost Analysis</span>
            <span className="text-amber-400">Total: 100n + 2n²</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeExample) }} />
          </pre>
          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Đếm số lần thực thi của từng câu lệnh (statement)
          </div>
        </div>

        {/* Live Calculation Stats */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 pb-2 border-b border-slate-200">
            <span>CHI TIẾT SỐ PHÉP TÍNH VỚI N = {nVal}</span>
            <span className="text-amber-700">Tổng: {totalOps.toLocaleString()} ops</span>
          </div>

          {/* Part A vs Part B Bars */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-slate-600">Phần A (Vòng ngoài: 100 × {nVal}):</span>
                <strong className="text-slate-900 font-bold">{partA.toLocaleString()} ops ({100 - percentB}%)</strong>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div style={{ width: `${100 - percentB}%` }} className="h-full bg-blue-500 rounded-full transition-all" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-amber-800 font-bold">Phần B (Vòng trong: 2 × {nVal}²):</span>
                <strong className="text-amber-700 font-bold">{partB.toLocaleString()} ops ({percentB}%)</strong>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div style={{ width: `${percentB}%` }} className="h-full bg-amber-500 rounded-full transition-all" />
              </div>
            </div>
          </div>

          <div className="bg-amber-100/70 border border-amber-300 rounded-xl p-2.5 text-xs text-amber-950 font-mono">
            💡 Khi <code>n = {nVal}</code>, số hạng bậc hai <code>2n²</code> chiếm tới <strong>{percentB}%</strong> toàn bộ chi phí tính toán! Số hạng <code>100n</code> dần trở nên không đáng kể.
          </div>
        </div>
      </div>

      {/* Comparison Table Algorithm A (n²) vs Algorithm B (n) */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="bg-slate-100 p-3 text-xs font-mono font-bold text-slate-700 border-b border-slate-200 flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-amber-600" />
          SO SÁNH TỐC ĐỘ TĂNG TRƯỞNG: ALGORITHM A (n²) VS ALGORITHM B (n)
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600 bg-slate-50">
                <th className="py-2 px-3">Kích thước n</th>
                <th className="py-2 px-3 text-rose-700 font-bold">Algorithm A (n²)</th>
                <th className="py-2 px-3 text-emerald-700 font-bold">Algorithm B (n)</th>
                <th className="py-2 px-3">Mức độ chênh lệch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {comparisonRows.map((row) => (
                <tr key={row.n} className={row.n === 1000 ? "bg-amber-50/60 font-bold" : ""}>
                  <td className="py-2 px-3 font-bold">{row.n.toLocaleString()}</td>
                  <td className="py-2 px-3 text-rose-700 font-bold">{row.a.toLocaleString()}</td>
                  <td className="py-2 px-3 text-emerald-700 font-bold">{row.b.toLocaleString()}</td>
                  <td className="py-2 px-3 text-slate-600">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
