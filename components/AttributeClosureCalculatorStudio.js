"use client";

import React, { useState } from "react";
import { Calculator, Play, RotateCcw, CheckCircle2, ArrowRight, Sparkles, Terminal, Layers } from "lucide-react";

export default function AttributeClosureCalculatorStudio() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      step: 0,
      title: "Khởi tạo ban đầu (Bước 0)",
      state: "X₀ = BD",
      firedFd: "Không có (Khởi tạo tập thuộc tính ban đầu X)",
      newAttrs: "B, D",
      desc: "Đặt X₀ = X = BD. Chuẩn bị quét danh sách các phụ thuộc hàm trong tập F."
    },
    {
      step: 1,
      title: "Vòng lặp 1: Quét tập F với X₀ = BD",
      state: "X₁ = BDEG",
      firedFd: "D → EG (vì D ⊆ BD)",
      newAttrs: "E, G",
      desc: "Tìm thấy phụ thuộc hàm D → EG có vế trái D ⊆ X₀. Nạp thêm các thuộc tính E, G vào tập bao đóng: X₁ = X₀ ∪ {E, G} = BDEG."
    },
    {
      step: 2,
      title: "Vòng lặp 2: Quét tập F với X₁ = BDEG",
      state: "X₂ = BDEGC (hay BCDEG)",
      firedFd: "BE → C (vì BE ⊆ BDEG)",
      newAttrs: "C",
      desc: "Tìm thấy phụ thuộc hàm BE → C có vế trái BE ⊆ X₁. Nạp thêm thuộc tính C vào tập bao đóng: X₂ = X₁ ∪ {C} = BDEGC."
    },
    {
      step: 3,
      title: "Vòng lặp 3: Quét tập F với X₂ = BCDEG",
      state: "X₃ = ABCDEG (Bằng tập U ban đầu)",
      firedFd: "C → A (vì C ⊆ BCDEG)",
      newAttrs: "A",
      desc: "Tìm thấy phụ thuộc hàm C → A có vế trái C ⊆ X₂. Nạp thêm thuộc tính A vào tập bao đóng: X₃ = X₂ ∪ {A} = ABCDEG."
    },
    {
      step: 4,
      title: "Điều kiện dừng & Kết luận",
      state: "(BD)⁺ = ABCDEG = R",
      firedFd: "X₄ = X₃ = ABCDEG (Không còn thuộc tính mới được nạp)",
      newAttrs: "Đã đủ toàn bộ thuộc tính của quan hệ R!",
      desc: "Thuật toán dừng lại vì X₃ đã chứa toàn bộ tập thuộc tính của lược đồ R. Do (BD)⁺ = R, BD chính là một SIÊU KHÓA (Superkey) của quan hệ R!"
    }
  ];

  const curr = steps[currentStep];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-sky-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">AttributeClosureCalculatorStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Thuật Toán Bao Đóng X⁺
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng từng bước lặp thuật toán tính bao đóng (BD)⁺ trên lược đồ R = ABCDEG (Ví dụ giáo trình Mục 2.8)
            </p>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
          >
            Bước Trước
          </button>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-1 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-40 shadow-sm"
          >
            <span>Bước Kế Tiếp</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="rounded-lg border border-gray-200 bg-white p-1.5 text-gray-600 hover:bg-gray-50"
            title="Làm lại từ đầu"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Input Data Banner */}
      <div className="mt-5 rounded-xl bg-indigo-50/70 border border-indigo-200 p-4 font-mono text-xs text-indigo-950 space-y-1">
        <div><strong>Lược đồ:</strong> R(A, B, C, D, E, G) &bull; <strong>Tập ban đầu:</strong> X = BD</div>
        <div><strong>Tập F:</strong> {"{ AB→C, C→A, BC→D, ACD→B, D→EG, BE→C, CG→BD, CE→AG }"}</div>
      </div>

      {/* Step Visualizer */}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="font-bold text-xs text-indigo-900">{curr.title}</span>
          <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {curr.state}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-amber-50/70 p-3 text-xs font-mono text-amber-950 border border-amber-200">
            <strong className="text-amber-900 block text-[11px] mb-1 uppercase">Phụ thuộc hàm được kích hoạt:</strong>
            {curr.firedFd}
          </div>
          <div className="rounded-lg bg-teal-50/70 p-3 text-xs font-mono text-teal-950 border border-teal-200">
            <strong className="text-teal-900 block text-[11px] mb-1 uppercase">Thuộc tính mới nạp vào:</strong>
            {curr.newAttrs}
          </div>
        </div>

        <p className="text-xs text-gray-700 leading-relaxed font-medium bg-gray-50 p-3 rounded-lg border border-gray-200">
          <strong>Giải thích chi tiết: </strong>{curr.desc}
        </p>
      </div>
    </div>
  );
}
