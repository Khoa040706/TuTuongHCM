"use client";

import React, { useState } from "react";
import { Sliders } from "lucide-react";

export default function GraphSparseDenseDegreeWorkbench() {
  const [numVertices, setNumVertices] = useState(7); // default 7 for 7C2 = 21

  const maxEdges = (numVertices * (numVertices - 1)) / 2;

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Sliders className="w-3.5 h-3.5 text-teal-700" />
            <span>Mật Độ Đồ Thị &amp; Bậc (Mục 3.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-cyan-950 to-slate-900 bg-clip-text text-transparent">
            Sparse vs Dense &bull; Complete Graph &bull; In/Out Degree
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đo lường mật độ cạnh của đồ thị và phân tích bậc vào/ra của từng đỉnh.
          </p>
        </div>

        {/* Complete Graph Formula Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          E_max = N(N - 1) / 2
        </div>
      </div>

      {/* 3 Main Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* 1. Sparse vs Dense */}
        <div className="p-5 rounded-2xl bg-white border border-sky-200 space-y-2 shadow-sm">
          <span className="font-mono text-xs font-bold text-sky-950 block border-b border-slate-100 pb-1.5">
            1. Sparse vs Dense
          </span>
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            • <strong>Sparse (Đồ thị thưa):</strong> Không có nhiều cạnh ($E \ll V^2$).<br />
            • <strong>Dense (Đồ thị dày đặc):</strong> Có rất nhiều cạnh ($E \approx V^2$).<br />
            • <em>Lưu ý:</em> Không có quy định chính xác "bao nhiêu cạnh thì là nhiều".
          </p>
        </div>

        {/* 2. Complete Graph */}
        <div className="p-5 rounded-2xl bg-white border border-teal-200 space-y-2 shadow-sm">
          <span className="font-mono text-xs font-bold text-teal-950 block border-b border-slate-100 pb-1.5">
            2. Complete Graph (KN)
          </span>
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            Đồ thị đơn mà <strong>mọi cặp đỉnh đều có cạnh nối</strong>.<br />
            Số cạnh đạt cực đại: <strong>NC2 = N(N-1)/2</strong>.<br />
            • <strong>Ví dụ slide:</strong> N = 7 &rArr; 7C2 = <strong>21 cạnh</strong>!
          </p>
        </div>

        {/* 3. In/Out Degree */}
        <div className="p-5 rounded-2xl bg-white border border-purple-200 space-y-2 shadow-sm">
          <span className="font-mono text-xs font-bold text-purple-950 block border-b border-slate-100 pb-1.5">
            3. In/Out Degree
          </span>
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            • <strong>In-Degree:</strong> Số cạnh đi vào đỉnh.<br />
            • <strong>Out-Degree:</strong> Số cạnh đi ra khỏi đỉnh.<br />
            • <strong>Ví dụ slide:</strong> Đỉnh 5 có in/out degree = 3.
          </p>
        </div>
      </div>

      {/* Interactive Complete Graph Calculator */}
      <div className="p-6 rounded-2xl bg-white border border-teal-100 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-semibold">Số lượng đỉnh N = </span>
            <span className="text-teal-950 font-extrabold text-base">{numVertices}</span>
          </div>

          <div className="text-emerald-800 font-bold">
            Số cạnh của Complete Graph K_{numVertices}: {maxEdges} cạnh
          </div>
        </div>

        <input
          type="range"
          min="3"
          max="20"
          value={numVertices}
          onChange={(e) => setNumVertices(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
        />

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span className="text-slate-500 font-semibold">Mốc mẫu:</span>
          {[4, 5, 7, 10, 15, 20].map((preset) => (
            <button
              key={preset}
              onClick={() => setNumVertices(preset)}
              className={`px-3 py-1 rounded-xl border transition-all shadow-sm ${
                numVertices === preset
                  ? "bg-teal-600 text-white border-teal-700 font-bold"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              N = {preset} ({preset * (preset - 1) / 2} cạnh)
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
