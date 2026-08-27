"use client";

import React, { useState } from "react";
import {
  GitMerge,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Table,
  Cpu,
  Split,
  Eye
} from "lucide-react";

export default function RelationalJoinLabVisualizer() {
  const [joinMode, setJoinMode] = useState("theta"); // 'theta' | 'equi' | 'cartesian' | 'natural'

  const rData = [
    { A: "a1", B: "b1", C: 1 },
    { A: "a2", B: "b2", C: 3 },
    { A: "a3", B: "b", C: 2 }
  ];

  const sData = [
    { D: 2, F: "f1" },
    { D: 3, F: "f2" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <GitMerge className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Interactive Join Studio • Mục 2.4 & 2.5
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Phòng Thí Nghiệm Kết Nối (Join Lab): θ-Join, Equijoin & Natural Join
            </h3>
          </div>
        </div>

        {/* Join Modes */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
          <button
            onClick={() => setJoinMode("theta")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              joinMode === "theta" ? "bg-orange-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            θ-Join (C ≥ D)
          </button>
          <button
            onClick={() => setJoinMode("equi")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              joinMode === "equi" ? "bg-blue-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Kết Nối Bằng (C = D)
          </button>
          <button
            onClick={() => setJoinMode("cartesian")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              joinMode === "cartesian" ? "bg-purple-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Tích Descartes (r × s)
          </button>
          <button
            onClick={() => setJoinMode("natural")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              joinMode === "natural" ? "bg-emerald-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Kết Nối Tự Nhiên (*)
          </button>
        </div>
      </div>

      {/* Input Relations Showcase */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Relation r */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="text-xs font-bold text-orange-800 font-mono flex items-center justify-between">
              <span>Quan hệ r (3 bộ, 3 thuộc tính: A, B, C)</span>
              <span className="text-slate-500 text-[10px]">Lược đồ R(A, B, C)</span>
            </div>
            <table className="w-full text-xs text-left border-collapse font-mono bg-white rounded-lg overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  <th className="p-2">A</th>
                  <th className="p-2">B</th>
                  <th className="p-2 text-orange-900 font-bold bg-orange-100">C</th>
                </tr>
              </thead>
              <tbody>
                {rData.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100">
                    <td className="p-2 text-slate-700">{row.A}</td>
                    <td className="p-2 text-slate-700">{row.B}</td>
                    <td className="p-2 font-bold text-orange-800 bg-orange-50/60">{row.C}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Relation s */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="text-xs font-bold text-blue-800 font-mono flex items-center justify-between">
              <span>Quan hệ s (2 bộ, 2 thuộc tính: D, F)</span>
              <span className="text-slate-500 text-[10px]">Lược đồ S(D, F)</span>
            </div>
            <table className="w-full text-xs text-left border-collapse font-mono bg-white rounded-lg overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  <th className="p-2 text-blue-900 font-bold bg-blue-100">D</th>
                  <th className="p-2">F</th>
                </tr>
              </thead>
              <tbody>
                {sData.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100">
                    <td className="p-2 font-bold text-blue-800 bg-blue-50/60">{row.D}</td>
                    <td className="p-2 text-slate-700">{row.F}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Result Showcase */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="text-xs font-bold font-mono text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600" />
              {joinMode === "theta" && "Biểu thức: r ⋈_(C ≥ D) s (Kết nối theo điều kiện C ≥ D)"}
              {joinMode === "equi" && "Biểu thức: r ⋈_(C = D) s (Kết nối bằng Equijoin)"}
              {joinMode === "cartesian" && "Biểu thức: r × s (Tích Descartes toàn bộ cặp)"}
              {joinMode === "natural" && "Biểu thức: r * s (Kết nối tự nhiên trên thuộc tính trùng tên)"}
            </div>
            <span className="text-xs font-mono text-orange-900 px-2.5 py-0.5 rounded bg-orange-100 border border-orange-200 font-semibold">
              {joinMode === "theta" && "3 bộ kết quả"}
              {joinMode === "equi" && "2 bộ kết quả"}
              {joinMode === "cartesian" && "6 bộ kết quả (3 × 2)"}
              {joinMode === "natural" && "Khử cột trùng lặp"}
            </span>
          </div>

          {/* Table Result */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs text-left border-collapse font-mono">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                  <th className="p-3 text-center w-10 text-slate-400">#</th>
                  <th className="p-3">A</th>
                  <th className="p-3">B</th>
                  <th className="p-3 bg-orange-100 text-orange-900">C</th>
                  <th className="p-3 bg-blue-100 text-blue-900">D</th>
                  <th className="p-3">F</th>
                  <th className="p-3 text-slate-600 font-sans text-center">Ghi Chú Ghép Cặp</th>
                </tr>
              </thead>
              <tbody>
                {joinMode === "theta" && (
                  <>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 text-center text-slate-400">1</td>
                      <td className="p-3 text-slate-700">a2</td>
                      <td className="p-3 text-slate-700">b2</td>
                      <td className="p-3 font-bold text-orange-800 bg-orange-50/60">3</td>
                      <td className="p-3 font-bold text-blue-800 bg-blue-50/60">2</td>
                      <td className="p-3 text-slate-700">f1</td>
                      <td className="p-3 font-sans text-center text-emerald-800 font-semibold">Thỏa mãn 3 ≥ 2</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 text-center text-slate-400">2</td>
                      <td className="p-3 text-slate-700">a2</td>
                      <td className="p-3 text-slate-700">b2</td>
                      <td className="p-3 font-bold text-orange-800 bg-orange-50/60">3</td>
                      <td className="p-3 font-bold text-blue-800 bg-blue-50/60">3</td>
                      <td className="p-3 text-slate-700">f2</td>
                      <td className="p-3 font-sans text-center text-emerald-800 font-semibold">Thỏa mãn 3 ≥ 3</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 text-center text-slate-400">3</td>
                      <td className="p-3 text-slate-700">a3</td>
                      <td className="p-3 text-slate-700">b</td>
                      <td className="p-3 font-bold text-orange-800 bg-orange-50/60">2</td>
                      <td className="p-3 font-bold text-blue-800 bg-blue-50/60">2</td>
                      <td className="p-3 text-slate-700">f1</td>
                      <td className="p-3 font-sans text-center text-emerald-800 font-semibold">Thỏa mãn 2 ≥ 2</td>
                    </tr>
                  </>
                )}

                {joinMode === "equi" && (
                  <>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 text-center text-slate-400">1</td>
                      <td className="p-3 text-slate-700">a2</td>
                      <td className="p-3 text-slate-700">b2</td>
                      <td className="p-3 font-bold text-orange-800 bg-orange-50/60">3</td>
                      <td className="p-3 font-bold text-blue-800 bg-blue-50/60">3</td>
                      <td className="p-3 text-slate-700">f2</td>
                      <td className="p-3 font-sans text-center text-emerald-800 font-semibold">C = D = 3</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 text-center text-slate-400">2</td>
                      <td className="p-3 text-slate-700">a3</td>
                      <td className="p-3 text-slate-700">b</td>
                      <td className="p-3 font-bold text-orange-800 bg-orange-50/60">2</td>
                      <td className="p-3 font-bold text-blue-800 bg-blue-50/60">2</td>
                      <td className="p-3 text-slate-700">f1</td>
                      <td className="p-3 font-sans text-center text-emerald-800 font-semibold">C = D = 2</td>
                    </tr>
                  </>
                )}

                {joinMode === "cartesian" && (
                  <>
                    <tr className="border-b border-slate-100"><td className="p-2 text-center text-slate-400">1</td><td className="p-2">a1</td><td className="p-2">b1</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">f1</td><td className="p-2 font-sans text-center text-slate-500">Cặp (r1, s1)</td></tr>
                    <tr className="border-b border-slate-100"><td className="p-2 text-center text-slate-400">2</td><td className="p-2">a1</td><td className="p-2">b1</td><td className="p-2">1</td><td className="p-2">3</td><td className="p-2">f2</td><td className="p-2 font-sans text-center text-slate-500">Cặp (r1, s2)</td></tr>
                    <tr className="border-b border-slate-100"><td className="p-2 text-center text-slate-400">3</td><td className="p-2">a2</td><td className="p-2">b2</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">f1</td><td className="p-2 font-sans text-center text-slate-500">Cặp (r2, s1)</td></tr>
                    <tr className="border-b border-slate-100"><td className="p-2 text-center text-slate-400">4</td><td className="p-2">a2</td><td className="p-2">b2</td><td className="p-2">3</td><td className="p-2">3</td><td className="p-2">f2</td><td className="p-2 font-sans text-center text-slate-500">Cặp (r2, s2)</td></tr>
                    <tr className="border-b border-slate-100"><td className="p-2 text-center text-slate-400">5</td><td className="p-2">a3</td><td className="p-2">b</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">f1</td><td className="p-2 font-sans text-center text-slate-500">Cặp (r3, s1)</td></tr>
                    <tr className="border-b border-slate-100"><td className="p-2 text-center text-slate-400">6</td><td className="p-2">a3</td><td className="p-2">b</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">f2</td><td className="p-2 font-sans text-center text-slate-500">Cặp (r3, s2)</td></tr>
                  </>
                )}

                {joinMode === "natural" && (
                  <tr className="border-b border-slate-100">
                    <td className="p-3 text-center text-slate-400">★</td>
                    <td colSpan={6} className="p-3 text-slate-700 font-sans leading-relaxed">
                      Khi hai quan hệ có cùng tên thuộc tính (VD: `MaSV`), phép kết nối tự nhiên $r * s$ sẽ tự động ghép nối bằng trên thuộc tính đó và <strong>loại bỏ 1 thuộc tính trùng lặp</strong> khỏi bảng kết quả.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
