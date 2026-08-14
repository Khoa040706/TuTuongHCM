"use client";

import React, { useState } from "react";
import { Sliders, CheckCircle2, AlertCircle, ArrowUpRight, Sparkles, Layers, ShieldCheck } from "lucide-react";

export default function BigODefinitionVisualizer() {
  const [cVal, setCVal] = useState(3);
  const [n0Val, setN0Val] = useState(100);
  const [selectedBound, setSelectedBound] = useState("n2");

  // Sample points for graphing (n from 0 to 180)
  const maxN = 180;
  const stepN = 10;
  const points = [];

  for (let n = 0; n <= maxN; n += stepN) {
    const fn = 2 * n * n + 100 * n;
    const gn = cVal * n * n;
    points.push({ n, fn, gn, isValid: n >= n0Val && fn <= gn });
  }

  // Max value for SVG scale
  const maxVal = Math.max(
    ...points.map((p) => Math.max(p.fn, p.gn)),
    2 * maxN * maxN + 100 * maxN
  );

  const svgWidth = 560;
  const svgHeight = 240;
  const padLeft = 45;
  const padBottom = 30;
  const padTop = 15;
  const padRight = 15;

  const graphW = svgWidth - padLeft - padRight;
  const graphH = svgHeight - padTop - padBottom;

  const getX = (n) => padLeft + (n / maxN) * graphW;
  const getY = (val) => padTop + graphH - (val / (maxVal || 1)) * graphH;

  // Path data
  const fnPath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${getX(p.n).toFixed(1)} ${getY(p.fn).toFixed(1)}`)
    .join(" ");

  const gnPath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${getX(p.n).toFixed(1)} ${getY(p.gn).toFixed(1)}`)
    .join(" ");

  // Is proven valid condition: for n >= n0, fn <= c*gn
  const isSatisfied = points
    .filter((p) => p.n >= n0Val)
    .every((p) => p.fn <= p.gn);

  const bounds = [
    {
      id: "n2",
      title: "f(n) = O(n²)",
      label: "Tightest Bound (Cận chặt nhất)",
      isTight: true,
      color: "emerald",
      badge: "KHUYÊN DÙNG — ĐÚNG & CHẶT NHẤT",
      desc: "Chặn trên sát nhất với hàm tăng trưởng thực tế. Trong khoa học máy tính, chúng ta luôn ưu tiên tìm và sử dụng Tightest Bound này."
    },
    {
      id: "n3",
      title: "f(n) = O(n³)",
      label: "Loose Upper Bound (Cận lỏng)",
      isTight: false,
      color: "amber",
      badge: "ĐÚNG VỀ MẶT TOÁN HỌC NHƯNG LỎNG",
      desc: "Toán học đúng vì f(n) ≤ c·n³ với n đủ lớn, nhưng n³ quá rộng, không phản ánh chính xác hiệu năng thực tế của thuật toán."
    },
    {
      id: "n4",
      title: "f(n) = O(n⁴)",
      label: "Very Loose Bound (Cận rất lỏng)",
      isTight: false,
      color: "slate",
      badge: "ĐÚNG NHƯNG KHÔNG CÓ Ý NGHĨA THỰC TIỄN",
      desc: "Cũng đúng theo định nghĩa chặn trên, nhưng giống như nói 'con rùa bò chậm hơn vận tốc ánh sáng' — đúng nhưng vô ích."
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 4.1 – 4.4 — Định Nghĩa Toán Học &amp; Chứng Minh
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Big O Notation: Trực Quan Hóa Cận Trên Tiệm Cận (Asymptotic Upper Bound)
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát định nghĩa <code>f(n) = O(g(n))</code> khi tồn tại hằng số <code>c &gt; 0</code> và <code>n₀</code> sao cho <code>f(n) ≤ c·g(n)</code> với mọi <code>n ≥ n₀</code>
          </p>
        </div>

        {/* Preset quick button */}
        <button
          onClick={() => {
            setCVal(3);
            setN0Val(100);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-mono text-xs font-bold transition cursor-pointer self-start sm:self-auto shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Đáp án: c = 3, n₀ = 100
        </button>
      </div>

      {/* Controls & Interactive SVG Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
        {/* Controls Column */}
        <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-mono font-bold text-slate-700 uppercase pb-2 border-b border-slate-200 mb-3 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-rose-600" />
              ĐIỀU CHỈNH HẰNG SỐ CHỨNG MINH:
            </div>

            {/* Slider c */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-600">Hằng số c:</span>
                <span className="font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">c = {cVal}</span>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                step={0.5}
                value={cVal}
                onChange={(e) => setCVal(parseFloat(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Đường chặn trên: g(n) = {cVal}·n²</span>
            </div>

            {/* Slider n0 */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-600">Ngưỡng bắt đầu n₀:</span>
                <span className="font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">n₀ = {n0Val}</span>
              </div>
              <input
                type="range"
                min={10}
                max={150}
                step={10}
                value={n0Val}
                onChange={(e) => setN0Val(parseInt(e.target.value, 10))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Vùng khảo sát: n ≥ {n0Val}</span>
            </div>
          </div>

          {/* Validation Status Box */}
          <div
            className={`p-3 rounded-xl border text-xs font-mono flex items-start gap-2 ${
              isSatisfied
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-rose-50 border-rose-300 text-rose-950"
            }`}
          >
            {isSatisfied ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div>
              <strong>{isSatisfied ? "CHỨNG MINH THÀNH CÔNG!" : "CHƯA THỎA MÃN!"}</strong>
              <p className="text-[11px] mt-0.5">
                {isSatisfied
                  ? `Với c = ${cVal} và n₀ = ${n0Val}, ta có f(n) ≤ ${cVal}n² với mọi n ≥ ${n0Val}.`
                  : `Tại một số n ≥ ${n0Val}, f(n) vẫn lớn hơn c·n². Hãy tăng c hoặc tăng n₀.`}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Graph Column */}
        <div className="lg:col-span-8 bg-slate-50/90 rounded-2xl p-4 border border-slate-200 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                <span className="w-3 h-1 bg-blue-600 rounded inline-block" /> f(n) = 2n² + 100n
              </span>
              <span className="flex items-center gap-1.5 text-rose-700 font-bold">
                <span className="w-3 h-1 bg-rose-600 rounded inline-block border-b border-dashed border-rose-600" /> c·g(n) = {cVal}n²
              </span>
            </div>
            <span className="text-indigo-700 font-black bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              Vạch n₀ = {n0Val}
            </span>
          </div>

          {/* SVG Canvas */}
          <div className="relative w-full aspect-[28/12] py-2 overflow-hidden">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
              {/* Grid lines */}
              {[0.25, 0.5, 0.75, 1].map((pct, i) => (
                <line
                  key={i}
                  x1={padLeft}
                  y1={padTop + graphH * (1 - pct)}
                  x2={svgWidth - padRight}
                  y2={padTop + graphH * (1 - pct)}
                  stroke="#e2e8f0"
                  strokeDasharray="3,3"
                  strokeWidth="1"
                />
              ))}

              {/* Shaded Valid Region for n >= n0 */}
              <rect
                x={getX(n0Val)}
                y={padTop}
                width={svgWidth - padRight - getX(n0Val)}
                height={graphH}
                fill="#10b981"
                fillOpacity="0.12"
              />

              {/* Threshold n0 vertical line */}
              <line
                x1={getX(n0Val)}
                y1={padTop}
                x2={getX(n0Val)}
                y2={padTop + graphH}
                stroke="#6366f1"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <text
                x={getX(n0Val) + 4}
                y={padTop + 14}
                fill="#4f46e5"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
              >
                n₀ = {n0Val}
              </text>

              {/* f(n) Path */}
              <path d={fnPath} fill="none" stroke="#2563eb" strokeWidth="2.5" />

              {/* g(n) Path */}
              <path d={gnPath} fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5,3" />

              {/* Axes */}
              <line
                x1={padLeft}
                y1={padTop + graphH}
                x2={svgWidth - padRight}
                y2={padTop + graphH}
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
              <line
                x1={padLeft}
                y1={padTop}
                x2={padLeft}
                y2={padTop + graphH}
                stroke="#94a3b8"
                strokeWidth="1.5"
              />

              {/* Axis Labels */}
              <text x={svgWidth - padRight - 15} y={padTop + graphH + 18} fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                n ➔
              </text>
              <text x={padLeft - 35} y={padTop + 12} fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Ops ⬆
              </text>
            </svg>
          </div>

          <div className="text-[11px] font-mono text-slate-600 pt-2 border-t border-slate-200 flex justify-between items-center">
            <span>Vùng xanh: Vùng n ≥ n₀ mà đường đỏ c·g(n) nằm trên đường xanh f(n)</span>
            <span className="text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
              f(n) = O(n²)
            </span>
          </div>
        </div>
      </div>

      {/* Mục 4.4 — Tightest Bound Concept Card Stack */}
      <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
        <div className="flex items-center gap-2 mb-3">
          <Layers className="w-4 h-4 text-emerald-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">
            Mục 4.4 — Khái niệm "Bound có chặt (tight) không?" &amp; Tightest Bound
          </h4>
        </div>
        <p className="text-xs text-slate-600 mb-3">
          Một hàm <code>f(n) = 2n² + 100n</code> có thể bị chặn trên bởi vô số hàm khác như <code>O(n²)</code>, <code>O(n³)</code>, <code>O(n⁴)</code>... Tất cả đều đúng theo định nghĩa, nhưng chúng ta chỉ quan tâm <strong>Tightest Bound (Cận chặt nhất)</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {bounds.map((b) => (
            <div
              key={b.id}
              onClick={() => setSelectedBound(b.id)}
              className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                b.isTight
                  ? "bg-emerald-50/80 border-emerald-300 shadow-xs"
                  : "bg-white border-slate-200"
              } ${selectedBound === b.id ? "ring-2 ring-slate-900" : ""}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-sm font-black text-slate-900">{b.title}</span>
                {b.isTight && (
                  <span className="text-[10px] font-mono font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full">
                    CHẶT NHẤT ✓
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold text-slate-700 block mb-1">{b.label}</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
