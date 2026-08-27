"use client";

import React, { useState } from "react";
import { Zap, Database, ArrowRight, CheckCircle2, RotateCcw, Activity, Layers, Scale, Sparkles } from "lucide-react";

export default function QueryOptimizationMotivationStudio() {
  const [activeStep, setActiveStep] = useState(0);

  // Simulation numbers:
  // Let R(AB) have 1,000 tuples, S(CD) have 10,000 tuples.
  // Condition D = 100 filters S down to 10 tuples (0.1%).
  // Unoptimized: R x S produces 1,000 x 10,000 = 10,000,000 intermediate tuples!
  // Step 1: Push D=100 into S -> S has 10 tuples. R x S' produces 1,000 x 10 = 10,000 intermediate tuples (1,000x reduction!).
  // Step 2: Equi-join R |><| S' -> only ~10 output tuples directly via hash/index join!

  const stepsData = [
    {
      stepNumber: "0",
      badge: "TRƯỚC TỐI ƯU (UNOPTIMIZED CANONICAL)",
      title: "Biểu thức sơ khai chứa Tích Đề-các khổng lồ",
      formula: "π_A( σ_{(B=C) ∧ (D=100)} ( R(AB) × S(CD) ) )",
      intermediateTuples: 10000000, // 10,000,000
      diskIoPercent: 100,
      description: "Thực hiện tích Đề-các R × S trước. Nếu R có 1.000 bộ và S có 10.000 bộ, kết quả trung gian sinh ra 10.000.000 bộ dữ liệu! Toàn bộ 10 triệu bộ này phải ghi ra đĩa rồi đọc lại để lọc điều kiện B = C và D = 100 ➔ Chi phí I/O cực lớn!",
      highlight: "danger"
    },
    {
      stepNumber: "1",
      badge: "BƯỚC 1: ĐẨY PHÉP CHỌN (D = 100) VÀO TRONG",
      title: "Lọc sớm trên quan hệ S(CD) trước khi nhân",
      formula: "π_A( σ_{B=C} ( R(AB) × σ_{D=100}(S(CD)) ) )",
      intermediateTuples: 10000, // 10,000
      diskIoPercent: 0.1,
      description: "Đưa phép chọn D = 100 vào trong quan hệ S(CD). Giả sử chỉ có 10 bộ thỏa mãn D = 100 (tỷ lệ 0.1%), lúc này tích Đề-các R × σ(S) chỉ sinh ra 1.000 × 10 = 10.000 bộ trung gian. Kích thước trung gian GIẢM 1.000 LẦN!",
      highlight: "warning"
    },
    {
      stepNumber: "2",
      badge: "BƯỚC 2: CHUYỂN THÀNH PHÉP KẾT NỐI BẰNG (EQUI-JOIN)",
      title: "Tổ hợp phép chọn B = C với tích Đề-các thành phép nối ⋈",
      formula: "π_A( R(AB) ⋈_{B=C} σ_{D=100}(S(CD)) )",
      intermediateTuples: 10, // ~10 output tuples
      diskIoPercent: 0.001,
      description: "Chuyển phép chọn σ_{B=C} trên tích Đề-các thành phép kết nối bằng R ⋈_{B=C} S'. Hệ thống sử dụng Index Join hoặc Hash Join để chỉ so khớp trực tiếp trên 10 bộ đã lọc, không sinh bất kỳ bộ trung gian dư thừa nào ➔ Tốc độ tăng hàng vạn lần!",
      highlight: "success"
    }
  ];

  const curr = stepsData[activeStep];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">QueryOptimizationMotivationStudio</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Ví Dụ Minh Họa Ý Tưởng Tối Ưu (Mục 1.2 - 1.4)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              So sánh trực quan sự suy giảm số lượng bộ dữ liệu trung gian &amp; Chi phí truy nhập đĩa I/O
            </p>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="rounded-lg border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold text-teal-900 hover:bg-teal-50 disabled:opacity-40 transition-all"
          >
            &larr; Bước Trước
          </button>
          <span className="font-mono text-xs font-bold text-teal-950 px-2">
            Bước {activeStep} / 2
          </span>
          <button
            onClick={() => setActiveStep(Math.min(stepsData.length - 1, activeStep + 1))}
            disabled={activeStep === stepsData.length - 1}
            className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-40 shadow-sm transition-all"
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

      {/* Problem Specification */}
      <div className="mt-5 rounded-xl bg-teal-50/70 border border-teal-200 p-4 font-mono text-xs text-teal-950 space-y-1">
        <div><strong>Bài toán:</strong> Cho 2 quan hệ R(A, B) có 1.000 bộ và S(C, D) có 10.000 bộ.</div>
        <div><strong>Yêu cầu:</strong> Đưa ra thuộc tính A của các bộ thỏa mãn điều kiện <code>B = C</code> và <code>D = 100</code>.</div>
      </div>

      {/* Interactive Step Switcher */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {stepsData.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStep === idx
                ? "border-teal-600 bg-teal-50 shadow-sm ring-1 ring-teal-400"
                : "border-gray-200 bg-white hover:bg-gray-50 opacity-70"
            }`}
          >
            <span className="text-[10px] font-bold text-teal-800 block">{s.badge}</span>
            <span className="font-bold text-xs text-gray-900 font-sans block mt-0.5">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Step Formula & Analysis */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
          <span className="text-xs font-bold text-gray-500 font-sans">BIỂU THỨC ĐẠI SỐ QUAN HỆ:</span>
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
            curr.highlight === "danger"
              ? "bg-red-100 text-red-900 border border-red-200"
              : curr.highlight === "warning"
              ? "bg-amber-100 text-amber-900 border border-amber-200"
              : "bg-emerald-100 text-emerald-900 border border-emerald-200"
          }`}>
            {curr.badge}
          </span>
        </div>

        <div className="rounded-xl bg-slate-900 p-4 text-emerald-400 font-mono text-sm sm:text-base text-center shadow-inner">
          {curr.formula}
        </div>

        {/* Dynamic Metric Comparison */}
        <div className="grid gap-3 sm:grid-cols-2 font-sans text-xs">
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5 space-y-1">
            <span className="text-gray-600 font-bold block">Số lượng bộ dữ liệu trung gian sinh ra:</span>
            <div className="flex items-baseline gap-2">
              <span className={`font-mono text-xl font-extrabold ${
                curr.intermediateTuples > 100000
                  ? "text-red-600"
                  : curr.intermediateTuples > 100
                  ? "text-amber-600"
                  : "text-emerald-600"
              }`}>
                {curr.intermediateTuples.toLocaleString("vi-VN")}
              </span>
              <span className="text-xs text-gray-500">tuples</span>
            </div>
            <p className="text-[11px] text-gray-600">
              {activeStep === 0 && "Sinh ra 10 triệu bộ trung gian do tích Đề-các 1.000 × 10.000!"}
              {activeStep === 1 && "Giảm 1.000 lần xuống chỉ còn 10.000 bộ sau khi lọc D = 100 trước!"}
              {activeStep === 2 && "Triệt tiêu hoàn toàn tích Đề-các, kết nối trực tiếp chỉ ra ~10 bộ!"}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 space-y-1">
            <span className="text-gray-600 font-bold block">Chi phí truy nhập bộ nhớ thứ cấp (Disk I/O):</span>
            <div className="flex items-baseline gap-2">
              <span className={`font-mono text-xl font-extrabold ${
                activeStep === 0 ? "text-red-600" : activeStep === 1 ? "text-amber-600" : "text-emerald-600"
              }`}>
                {activeStep === 0 ? "100% (Rất Lớn)" : activeStep === 1 ? "0.1% (Giảm 1.000x)" : "0.001% (Tối Ưu Cực Đại)"}
              </span>
            </div>
            <p className="text-[11px] text-gray-600">
              {activeStep === 0 && "Phải đọc/ghi 10 triệu bản ghi ra ổ đĩa thứ cấp."}
              {activeStep === 1 && "Chỉ đọc/ghi 10.000 bản ghi, giảm tải đĩa vượt trội."}
              {activeStep === 2 && "Thực thi hoàn toàn trong RAM nhờ kích thước nhỏ gọn!"}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-teal-50/80 p-4 border border-teal-200 text-teal-950 font-sans text-xs leading-relaxed">
          <strong className="text-teal-900 block font-bold mb-1">🔍 GIẢI THÍCH CHI TIẾT CƠ CHẾ:</strong>
          {curr.description}
        </div>
      </div>
    </div>
  );
}
