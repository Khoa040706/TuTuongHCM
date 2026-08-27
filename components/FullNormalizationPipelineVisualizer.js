"use client";

import React, { useState } from "react";
import { Layers, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Database, Split, Zap } from "lucide-react";

export default function FullNormalizationPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Lược Đồ Quan Hệ Ban Đầu",
      action: "Khởi Đầu",
      desc: "Lược đồ thu thập từ thế giới thực, có thể chứa thuộc tính phức hợp, đa trị, phụ thuộc bộ phận và phụ thuộc bắc cầu.",
      badge: "UNNORMALIZED (PHI CHUẨN)",
      elimination: "Chưa xử lý.",
      color: "border-gray-300 bg-gray-50 text-gray-800"
    },
    {
      title: "Dạng Chuẩn 1 (1NF)",
      action: "Tách Thuộc Tính Kép (Dọc / Ngang)",
      desc: "Chuyển đổi mọi thuộc tính đa trị, phức hợp thành các thuộc tính đơn nguyên tử (Atomic Domains).",
      badge: "ATOMICITY ACHIEVED",
      elimination: "Khử các cột danh sách và nhóm thuộc tính lặp lại.",
      color: "border-blue-400 bg-blue-50 text-blue-900"
    },
    {
      title: "Dạng Chuẩn 2 (2NF)",
      action: "Tách Phụ Thuộc Hàm Riêng Phần",
      desc: "Tách các thuộc tính không khóa phụ thuộc vào một phần của khóa thành các bảng con độc lập.",
      badge: "FULL FD ACHIEVED",
      elimination: "Khử phụ thuộc bộ phận vào khóa.",
      color: "border-teal-400 bg-teal-50 text-teal-900"
    },
    {
      title: "Dạng Chuẩn 3 (3NF)",
      action: "Tách Phụ Thuộc Hàm Bắc Cầu",
      desc: "Tách các thuộc tính không khóa phụ thuộc vào một thuộc tính không khóa khác thành bảng con mới.",
      badge: "GOLD STANDARD (TIÊU CHUẨN VÀNG)",
      elimination: "Khử phụ thuộc bắc cầu giữa các thuộc tính không khóa.",
      color: "border-amber-400 bg-amber-50 text-amber-900"
    },
    {
      title: "Dạng Chuẩn Boyce-Codd (BCNF)",
      action: "Tách FD Có Vế Trái Không Là Siêu Khóa",
      desc: "Đảm bảo vế trái của mọi phụ thuộc hàm không tầm thường bắt buộc phải là Siêu khóa (X⁺ = U).",
      badge: "STRICTEST NORMAL FORM",
      elimination: "Khử hoàn toàn các dị thường phụ thuộc hàm khi có nhiều khóa chồng lấn.",
      color: "border-purple-400 bg-purple-50 text-purple-900"
    }
  ];

  const curr = steps[activeStep];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">FullNormalizationPipelineVisualizer</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Sơ Đồ Luồng Chuẩn Hóa 4 Chặng (Mục 7)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Quy trình chuẩn hóa tuần tự từng bước: Ban đầu &rarr; 1NF &rarr; 2NF &rarr; 3NF &rarr; BCNF
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
              activeStep === idx
                ? "border-indigo-600 bg-indigo-50 shadow-md ring-2 ring-indigo-400/50"
                : "border-gray-200 bg-white hover:bg-gray-50 opacity-80"
            }`}
          >
            <span className="text-[10px] font-bold text-indigo-700 block">CHẶNG {idx}</span>
            <span className="font-bold text-gray-900 font-sans block mt-0.5">{s.title.split(" (")[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Step Details */}
      <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-indigo-950 font-sans">{curr.title}</h4>
          <span className="text-[11px] font-bold bg-indigo-50 text-indigo-800 px-2.5 py-0.5 rounded border border-indigo-200">
            {curr.badge}
          </span>
        </div>

        <div className="rounded-lg bg-indigo-50/70 p-3 text-indigo-950 font-sans text-xs border border-indigo-200">
          <strong className="block font-bold mb-0.5">Hành động chuyển đổi:</strong>
          {curr.action}
        </div>

        <p className="text-xs text-gray-700 font-sans leading-relaxed">
          <strong>Ý nghĩa thiết kế: </strong>{curr.desc}
        </p>

        <div className="rounded-lg bg-emerald-50 p-3 text-emerald-950 font-sans text-xs border border-emerald-200">
          <strong className="text-emerald-900 font-bold block mb-0.5">🛡️ Mục tiêu triệt tiêu:</strong>
          {curr.elimination}
        </div>
      </div>
    </div>
  );
}
