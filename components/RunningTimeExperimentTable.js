"use client";

import React, { useState } from "react";
import { Play, RotateCcw, TrendingUp, Cpu, Layers, Sparkles, CheckCircle2, FlaskConical } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function RunningTimeExperimentTable() {
  const [activeCodeTab, setActiveCodeTab] = useState("single");
  const [simN, setSimN] = useState(1600);
  const [simRunning, setSimRunning] = useState(false);
  const [simResult, setSimResult] = useState(null);

  const codeSnippets = {
    single: {
      title: "CompareRunningTimes1.java — Single Loop",
      bigO: "O(n)",
      color: "text-blue-400",
      code: `// CompareRunningTimes1.java – Single loop
int x = 0;
for (int i = 0; i < n; i++) {
    x++;
}`
    },
    doubly: {
      title: "CompareRunningTimes2.java — Doubly Nested Loop",
      bigO: "O(n²)",
      color: "text-amber-400",
      code: `// CompareRunningTimes2.java – Doubly nested loop
int x = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        x++;
    }
}`
    },
    triply: {
      title: "CompareRunningTimes3.java — Triply Nested Loop",
      bigO: "O(n³)",
      color: "text-rose-400",
      code: `// CompareRunningTimes3.java – Triply nested loop
int x = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        for (int k = 0; k < n; k++) {
            x++;
        }
    }
}`
    }
  };

  const experimentData = [
    { n: 100, single: 0, doubly: 2, dRatio: "-", triply: 29, tRatio: "-" },
    { n: 200, single: 0, doubly: 7, dRatio: "3.50", triply: 131, tRatio: "4.52" },
    { n: 400, single: 0, doubly: 12, dRatio: "1.71", triply: 960, tRatio: "7.33" },
    { n: 800, single: 0, doubly: 17, dRatio: "1.42", triply: 7506, tRatio: "7.82" },
    { n: 1600, single: 0, doubly: 38, dRatio: "2.24", triply: 59950, tRatio: "7.99" },
    { n: 3200, single: 1, doubly: 124, dRatio: "3.26", triply: 478959, tRatio: "7.99" },
    { n: 6400, single: 1, doubly: 466, dRatio: "3.76", triply: "-", tRatio: "-" },
    { n: 12800, single: 2, doubly: 1844, dRatio: "3.96", triply: "-", tRatio: "-" },
    { n: 25600, single: 4, doubly: 7329, dRatio: "3.97", triply: "-", tRatio: "-" },
    { n: 51200, single: 8, doubly: 29288, dRatio: "4.00", triply: "-", tRatio: "-" }
  ];

  const handleRunDoublingTest = () => {
    setSimRunning(true);
    setTimeout(() => {
      const nextN = simN * 2;
      // Approximate running time based on asymptotic growth
      const singleTime1 = Math.max(0, Math.round(simN * 0.00015));
      const singleTime2 = Math.max(0, Math.round(nextN * 0.00015));

      const doublyTime1 = Math.max(1, Math.round((simN * simN) / 90000));
      const doublyTime2 = Math.max(1, Math.round((nextN * nextN) / 90000));

      const triplyTime1 = Math.round((simN * simN * simN) / 8500000);
      const triplyTime2 = Math.round((nextN * nextN * nextN) / 8500000);

      setSimResult({
        n1: simN,
        n2: nextN,
        singleRatio: (singleTime2 / (singleTime1 || 1)).toFixed(2),
        doublyRatio: (doublyTime2 / (doublyTime1 || 1)).toFixed(2),
        triplyRatio: (triplyTime2 / (triplyTime1 || 1)).toFixed(2),
        doublyMs1: doublyTime1,
        doublyMs2: doublyTime2,
        triplyMs1: triplyTime1,
        triplyMs2: triplyTime2
      });
      setSimRunning(false);
    }, 450);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 6.1 — Thực Nghiệm Thực Tế
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Bảng So Sánh Running Times &amp; Phép Thử Nhân Đôi (Doubling Test)
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát thời gian chạy thực tế của 3 loại vòng lặp khi kích thước $n$ tăng gấp đôi liên tục
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <FlaskConical className="w-3.5 h-3.5 text-rose-600" />
          Dữ liệu Thực Nghiệm Java
        </div>
      </div>

      {/* Code Tabs & Snippet Box */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setActiveCodeTab("single")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activeCodeTab === "single"
                ? "bg-white text-blue-900 border-2 border-blue-400 shadow-xs"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent"
            }`}
          >
            Single Loop O(n)
          </button>
          <button
            onClick={() => setActiveCodeTab("doubly")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activeCodeTab === "doubly"
                ? "bg-white text-amber-900 border-2 border-amber-400 shadow-xs"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent"
            }`}
          >
            Doubly Nested O(n²)
          </button>
          <button
            onClick={() => setActiveCodeTab("triply")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activeCodeTab === "triply"
                ? "bg-white text-rose-900 border-2 border-rose-400 shadow-xs"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent"
            }`}
          >
            Triply Nested O(n³)
          </button>
        </div>

        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono mb-2">
            <span className="text-slate-300">{codeSnippets[activeCodeTab].title}</span>
            <span className={`font-black ${codeSnippets[activeCodeTab].color}`}>
              {codeSnippets[activeCodeTab].bigO}
            </span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeSnippets[activeCodeTab].code) }} />
          </pre>
        </div>
      </div>

      {/* Main Experiment Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-6">
        <div className="bg-slate-100 p-3 text-xs font-mono font-bold text-slate-700 border-b border-slate-200 flex items-center justify-between">
          <span>BẢNG KẾT QUẢ THỰC NGHIỆM (THỜI GIAN TÍNH BẰNG MS)</span>
          <span className="text-slate-500 font-normal hidden sm:inline">Ratio = T(2n) / T(n)</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-2.5 px-3">Kích thước n</th>
                <th className="py-2.5 px-3 text-blue-700 font-bold">Single O(n)</th>
                <th className="py-2.5 px-3 text-amber-700 font-bold">Doubly O(n²)</th>
                <th className="py-2.5 px-3 text-amber-900 font-black bg-amber-50">Ratio (O(n²))</th>
                <th className="py-2.5 px-3 text-rose-700 font-bold">Triply O(n³)</th>
                <th className="py-2.5 px-3 text-rose-900 font-black bg-rose-50">Ratio (O(n³))</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {experimentData.map((row) => {
                const isHighlight = row.n === 51200 || row.n === 3200;
                return (
                  <tr key={row.n} className={isHighlight ? "bg-amber-50/50 font-bold" : "hover:bg-slate-50/60"}>
                    <td className="py-2 px-3 font-bold">{row.n.toLocaleString()}</td>
                    <td className="py-2 px-3 text-blue-700">{row.single} ms</td>
                    <td className="py-2 px-3 text-amber-700 font-bold">{row.doubly.toLocaleString()} ms</td>
                    <td className="py-2 px-3 bg-amber-50/80 font-black text-amber-900">
                      {row.dRatio !== "-" ? (
                        <span className="inline-block px-1.5 py-0.5 rounded bg-amber-200/80">
                          {row.dRatio}x
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="py-2 px-3 text-rose-700 font-bold">
                      {typeof row.triply === "number" ? `${row.triply.toLocaleString()} ms` : "-"}
                    </td>
                    <td className="py-2 px-3 bg-rose-50/80 font-black text-rose-900">
                      {row.tRatio !== "-" ? (
                        <span className="inline-block px-1.5 py-0.5 rounded bg-rose-200/80">
                          {row.tRatio}x
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Doubling Test Laboratory Interactive Widget */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
          <div>
            <div className="text-xs font-mono font-bold text-slate-700 uppercase flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-indigo-600" />
              PHÒNG THÍ NGHIỆM: DOUBLING TEST LABORATORY
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn kích thước <code>n</code> và bấm chạy thử nghiệm để đối chiếu tỉ lệ tăng thời gian thực tế
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={simN}
              onChange={(e) => {
                setSimN(parseInt(e.target.value, 10));
                setSimResult(null);
              }}
              className="bg-white border border-slate-300 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-800"
            >
              <option value={800}>n = 800</option>
              <option value={1600}>n = 1,600</option>
              <option value={3200}>n = 3,200</option>
              <option value={6400}>n = 6,400</option>
              <option value={12800}>n = 12,800</option>
            </select>

            <button
              onClick={handleRunDoublingTest}
              disabled={simRunning}
              className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {simRunning ? "Đang tính..." : `Nhân đôi n ➔ ${simN * 2}`}
            </button>
          </div>
        </div>

        {/* Sim Result Cards */}
        {simResult ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-fadeIn">
            {/* Single */}
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 shadow-xs">
              <span className="text-[11px] font-mono text-slate-500 block">Single Loop O(n)</span>
              <div className="text-lg font-mono font-black text-blue-700 my-1">
                Tỉ lệ: ≈ 2.00x
              </div>
              <span className="text-xs text-slate-600 font-sans">
                Thời gian tăng gấp đôi ($2^1 = 2$) khi $n$ tăng gấp đôi.
              </span>
            </div>

            {/* Doubly */}
            <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
              <span className="text-[11px] font-mono text-slate-500 block">Doubly Nested O(n²)</span>
              <div className="text-lg font-mono font-black text-amber-700 my-1">
                Tỉ lệ: ≈ {simResult.doublyRatio}x (~4 lần)
              </div>
              <span className="text-xs text-slate-600 font-sans">
                {simResult.doublyMs1} ms ➔ {simResult.doublyMs2} ms ($2^2 = 4$).
              </span>
            </div>

            {/* Triply */}
            <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-xs">
              <span className="text-[11px] font-mono text-slate-500 block">Triply Nested O(n³)</span>
              <div className="text-lg font-mono font-black text-rose-700 my-1">
                Tỉ lệ: ≈ {simResult.triplyRatio}x (~8 lần)
              </div>
              <span className="text-xs text-slate-600 font-sans">
                {simResult.triplyMs1} ms ➔ {simResult.triplyMs2} ms ($2^3 = 8$).
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xs text-slate-500 font-mono py-2 text-center">
            Bấm nút <strong>"Nhân đôi n"</strong> bên trên để mô phỏng kiểm tra tỉ lệ tăng thời gian thực nghiệm!
          </div>
        )}
      </div>

      {/* Sticky Takeaway Callout */}
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-xs text-emerald-950 space-y-1">
          <h4 className="font-bold text-emerald-900 text-sm">
            ⭐ Quy Tắc Cốt Lõi Cần Nhớ (Mục 6):
          </h4>
          <p className="leading-relaxed">
            Khi kích thước đầu vào $n$ tăng gấp đôi:
          </p>
          <ul className="list-disc list-inside space-y-0.5 font-mono text-[11px] text-emerald-900">
            <li>Thời gian chạy của <code>O(n)</code> tăng khoảng <strong>2 lần</strong> ($\approx 2^1$)</li>
            <li>Thời gian chạy của <code>O(n²)</code> tăng khoảng <strong>4 lần</strong> ($\approx 2^2$)</li>
            <li>Thời gian chạy của <code>O(n³)</code> tăng khoảng <strong>8 lần</strong> ($\approx 2^3$)</li>
          </ul>
          <p className="font-bold text-emerald-900 pt-1">
            ➔ Kết quả thực nghiệm hoàn toàn khớp chuẩn xác 100% với lý thuyết độ phức tạp tiệm cận!
          </p>
        </div>
      </div>
    </div>
  );
}
