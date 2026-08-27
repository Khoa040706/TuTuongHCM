"use client";

import React, { useState } from "react";
import { Table, Play, RotateCcw, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function ChaseAlgorithmLosslessSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  // Example from textbook: R(B, O, I, S, Q, D)
  // F = { S -> D, I -> B, IS -> Q, B -> O }
  // rho = (SD, IB, ISQ, BO) -> 4 subrelations: R1(SD), R2(IB), R3(ISQ), R4(BO)
  // Columns: B, O, I, S, Q, D (indices 0 to 5)

  const stepsData = [
    {
      title: "Bước 0: Khởi tạo Ma trận Bảng Đuổi ban đầu",
      fdApplied: "Khởi tạo bảng kích thước 4 hàng × 6 cột",
      matrix: [
        ["b₁₁", "b₁₂", "b₁₃", "a₄", "b₁₅", "a₆"], // R1(SD)
        ["a₁", "b₂₂", "a₃", "b₂₄", "b₂₅", "b₂₆"], // R2(IB)
        ["b₃₁", "b₃₂", "a₃", "a₄", "a₅", "b₃₆"], // R3(ISQ)
        ["a₁", "a₂", "b₄₃", "b₄₄", "b₄₅", "b₄₆"]  // R4(BO)
      ],
      desc: "Hàng 1 là R₁(SD) có a₄, a₆; Hàng 2 là R₂(IB) có a₁, a₃; Hàng 3 là R₃(ISQ) có a₃, a₄, a₅; Hàng 4 là R₄(BO) có a₁, a₂. Các ô còn lại điền b_ij."
    },
    {
      title: "Bước 1: Áp dụng FD (S → D)",
      fdApplied: "Xét FD: S → D",
      matrix: [
        ["b₁₁", "b₁₂", "b₁₃", "a₄", "b₁₅", "a₆"],
        ["a₁", "b₂₂", "a₃", "b₂₄", "b₂₅", "b₂₆"],
        ["b₃₁", "b₃₂", "a₃", "a₄", "a₅", "a₆"], // updated b36 -> a6 because H1 & H3 match on S (a4), so D becomes a6
        ["a₁", "a₂", "b₄₃", "b₄₄", "b₄₅", "b₄₆"]
      ],
      desc: "Hàng 1 và Hàng 3 cùng có thuộc tính S = a₄. Vế phải D ở Hàng 1 là a₆ nên Hàng 3 được cập nhật từ b₃₆ thành a₆!"
    },
    {
      title: "Bước 2: Áp dụng FD (I → B)",
      fdApplied: "Xét FD: I → B",
      matrix: [
        ["b₁₁", "b₁₂", "b₁₃", "a₄", "b₁₅", "a₆"],
        ["a₁", "b₂₂", "a₃", "b₂₄", "b₂₅", "b₂₆"],
        ["a₁", "b₃₂", "a₃", "a₄", "a₅", "a₆"], // updated b31 -> a1 because H2 & H3 match on I (a3), so B becomes a1
        ["a₁", "a₂", "b₄₃", "b₄₄", "b₄₅", "b₄₆"]
      ],
      desc: "Hàng 2 và Hàng 3 cùng có thuộc tính I = a₃. Vế phải B ở Hàng 2 là a₁ nên Hàng 3 được cập nhật từ b₃₁ thành a₁!"
    },
    {
      title: "Bước 3: Áp dụng FD (B → O)",
      fdApplied: "Xét FD: B → O",
      matrix: [
        ["b₁₁", "b₁₂", "b₁₃", "a₄", "b₁₅", "a₆"],
        ["a₁", "a₂", "a₃", "b₂₄", "b₂₅", "b₂₆"], // updated b22 -> a2
        ["a₁", "a₂", "a₃", "a₄", "a₅", "a₆"], // updated b32 -> a2 -> FULL ROW OF a!
        ["a₁", "a₂", "b₄₃", "b₄₄", "b₄₅", "b₄₆"]
      ],
      desc: "Hàng 2, Hàng 3 và Hàng 4 cùng có B = a₁. Vế phải O ở Hàng 4 là a₂ nên Hàng 2 và Hàng 3 được cập nhật O thành a₂. Lúc này HÀNG 3 ĐÃ ĐẠT TOÀN KÝ HIỆU a (a₁, a₂, a₃, a₄, a₅, a₆)!"
    }
  ];

  const cols = ["B", "O", "I", "S", "Q", "D"];
  const rows = ["R₁(SD)", "R₂(IB)", "R₃(ISQ)", "R₄(BO)"];
  const curr = stepsData[activeStep];

  return (
    <div className="my-8 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <Table className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ChaseAlgorithmLosslessSimulator</h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200">
                Thuật Toán Bảng Đuổi (Chase Test)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng từng bước kiểm tra Phép tách Không mất thông tin (Lossless Join Decomposition)
            </p>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="rounded-lg border border-cyan-200 bg-white px-3 py-1.5 text-xs font-bold text-cyan-900 hover:bg-cyan-50 disabled:opacity-40 transition-all"
          >
            &larr; Bước Trước
          </button>
          <span className="font-mono text-xs font-bold text-cyan-950 px-2">
            {activeStep + 1} / {stepsData.length}
          </span>
          <button
            onClick={() => setActiveStep(Math.min(stepsData.length - 1, activeStep + 1))}
            disabled={activeStep === stepsData.length - 1}
            className="rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-cyan-700 disabled:opacity-40 shadow-sm transition-all"
          >
            Bước Kế &rarr;
          </button>
          <button
            onClick={() => setActiveStep(0)}
            className="p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            title="Khởi tạo lại"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Schema & FD Details */}
      <div className="mt-5 rounded-xl bg-cyan-50/70 border border-cyan-200 p-4 font-mono text-xs text-cyan-950 space-y-1">
        <div><strong>Lược đồ:</strong> R(B, O, I, S, Q, D) &bull; <strong>Tập F:</strong> {"{ S → D, I → B, IS → Q, B → O }"}</div>
        <div><strong>Phân rã:</strong> &rho; = (SD, IB, ISQ, BO) gồm 4 lược đồ con: R₁(SD), R₂(IB), R₃(ISQ), R₄(BO)</div>
      </div>

      {/* Current Step Status */}
      <div className="mt-4 flex items-center justify-between bg-white p-3.5 rounded-xl border border-cyan-200 shadow-sm font-sans text-xs">
        <div>
          <strong className="text-cyan-950 block font-bold">{curr.title}</strong>
          <span className="text-gray-600 mt-0.5 block">{curr.desc}</span>
        </div>
        <span className="font-mono text-xs font-bold bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full border border-cyan-300 shrink-0 ml-2">
          {curr.fdApplied}
        </span>
      </div>

      {/* Chase Matrix Grid */}
      <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-200 bg-white shadow-sm font-mono text-xs">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-cyan-50/80 text-cyan-950 border-b border-cyan-200">
              <th className="p-3 text-left font-sans w-28">Lược đồ con</th>
              {cols.map((col, idx) => (
                <th key={idx} className="p-3 border-l border-cyan-200">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {curr.matrix.map((row, rIdx) => {
              const isFullRowA = row.every((cell) => cell.startsWith("a"));
              return (
                <tr
                  key={rIdx}
                  className={`transition-colors ${
                    isFullRowA
                      ? "bg-emerald-100/80 font-extrabold text-emerald-950"
                      : "hover:bg-cyan-50/30 text-gray-700"
                  }`}
                >
                  <td className="p-3 text-left font-bold font-sans text-xs text-gray-900">
                    {rows[rIdx]}
                  </td>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3 border-l border-gray-100">
                      <span className={`px-2.5 py-1 rounded text-xs inline-block ${
                        cell.startsWith("a")
                          ? "bg-emerald-200 text-emerald-900 font-bold border border-emerald-300 shadow-sm"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {cell}
                      </span>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Result Callout */}
      {activeStep === 3 && (
        <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-300 p-4 font-sans text-xs text-emerald-950 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <span>KẾT LUẬN: PHÂN RÃ BẢO TOÀN NỘI DUNG 100% (LOSSLESS JOIN)!</span>
          </div>
          <span className="font-mono text-xs bg-white px-3 py-1 rounded border border-emerald-300 text-emerald-800">
            R₃(ISQ) đạt (a₁, a₂, a₃, a₄, a₅, a₆)
          </span>
        </div>
      )}
    </div>
  );
}
