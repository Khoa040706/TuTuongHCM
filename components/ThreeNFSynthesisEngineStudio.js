"use client";

import React, { useState } from "react";
import { Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowRight, Database, Play, RotateCcw } from "lucide-react";

export default function ThreeNFSynthesisEngineStudio() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Bước 1: Chuẩn bị Phủ Tối Thiểu (Minimal Cover)",
      badge: "INPUT VALIDATION",
      desc: "Đảm bảo tập F đã là phủ tối thiểu (Vế phải đơn thuộc tính, không thừa thuộc tính vế trái, không thừa FD).",
      content: "F = { C → T, HR → C, HT → R, CS → G, HS → R } trên lược đồ R(C, T, H, R, S, G)"
    },
    {
      title: "Bước 2: Gom nhóm theo vế trái & Tạo Lược đồ con",
      badge: "SUBRELATIONS GENERATION",
      desc: "Với mỗi phụ thuộc hàm X → A (hoặc nhóm các FD có cùng vế trái X), tạo lược đồ con R_i = XA.",
      content: "• R₁(C, T) từ FD: C → T\n• R₂(H, R, C) từ FD: HR → C\n• R₃(H, T, R) từ FD: HT → R\n• R₄(C, S, G) từ FD: CS → G\n• R₅(H, S, R) từ FD: HS → R"
    },
    {
      title: "Bước 3: Kiểm tra Khóa & Kết luận",
      badge: "LOSSLESS & PRESERVATION VERIFICATION",
      desc: "Kiểm tra xem đã có lược đồ con nào chứa ít nhất 1 khóa dự tuyển của R chưa. Nếu chưa có thì bổ sung 1 lược đồ con chứa khóa.",
      content: "• Khóa của R là K = { H, S }.\n• Ta thấy R₅(H, S, R) đã chứa trọn vẹn khóa K = HS!\n• Do đó không cần tạo thêm bảng khóa con.\n⟹ KẾT QUẢ ĐẠT 3NF: ρ = { CT, HRC, HTR, CSG, HSR } (Vừa bảo toàn nội dung 100%, vừa bảo toàn trọn vẹn tập F!)."
    }
  ];

  const curr = steps[activeStep];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ThreeNFSynthesisEngineStudio</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Thuật Toán Tổng Hợp 3NF (Mục 8.3)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cỗ máy phân rã 3NF: Đảm bảo 100% Bảo toàn thông tin (Lossless Join) và 100% Bảo toàn phụ thuộc hàm
            </p>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-50 disabled:opacity-40 transition-all"
          >
            &larr; Trước
          </button>
          <span className="font-mono text-xs font-bold text-amber-950 px-2">
            {activeStep + 1} / {steps.length}
          </span>
          <button
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-700 disabled:opacity-40 shadow-sm transition-all"
          >
            Sau &rarr;
          </button>
          <button
            onClick={() => setActiveStep(0)}
            className="p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3 Step Badges */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStep === idx
                ? "border-amber-600 bg-amber-50 shadow-sm ring-1 ring-amber-400"
                : "border-gray-200 bg-white hover:bg-gray-50 opacity-70"
            }`}
          >
            <span className="text-[10px] font-bold text-amber-800 block">BƯỚC {idx + 1}</span>
            <span className="font-bold text-gray-900 font-sans block mt-0.5">{s.title.split(": ")[1]}</span>
          </button>
        ))}
      </div>

      {/* Step Deep Dive */}
      <div className="mt-4 rounded-xl border border-amber-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-amber-950 font-sans">{curr.title}</h4>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
            {curr.badge}
          </span>
        </div>

        <p className="text-xs text-gray-700 font-sans leading-relaxed">
          {curr.desc}
        </p>

        <div className="rounded-xl bg-amber-50/80 p-4 border border-amber-200 text-amber-950 space-y-1">
          <strong className="block text-amber-900 font-bold font-sans text-xs mb-1">CHI TIẾT THỰC THI:</strong>
          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.content}</pre>
        </div>
      </div>
    </div>
  );
}
