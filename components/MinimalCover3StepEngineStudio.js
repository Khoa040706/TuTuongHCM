"use client";

import React, { useState } from "react";
import { GitCommit, ArrowRight, CheckCircle2, XCircle, ShieldCheck, Sparkles, Filter } from "lucide-react";

export default function MinimalCover3StepEngineStudio() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "Bước 1: Phân Rã Vế Phải Về Thuộc Tính Đơn (RHS Decomposition)",
      subtitle: "Áp dụng luật tách (Decomposition Rule) của Armstrong",
      rule: "X → A₁A₂...Aₖ ⟹ Tách thành k phụ thuộc hàm: X → A₁, X → A₂, ..., X → Aₖ",
      action: "Đưa toàn bộ các FD trong tập F về dạng vế phải chỉ chứa ĐÚNG 1 THUỘC TÍNH ĐƠN.",
      reason: "Giúp cô lập từng quan hệ phụ thuộc để kiểm tra độc lập tính dư thừa ở các bước sau.",
      badge: "VẾ PHẢI ĐƠN LẺ",
      color: "from-blue-600 to-indigo-600"
    },
    {
      step: 2,
      title: "Bước 2: Loại Bỏ Các Phụ Thuộc Hàm Dư Thừa (Remove Redundant FDs)",
      subtitle: "Kiểm tra từng FD bằng bao đóng trên tập còn lại",
      rule: "Với mỗi FD (X → A) ∈ G: Đặt H = G \\ {X → A}. Nếu A ∈ X_H⁺ ⟹ LOẠI BỎ (X → A) khỏi G",
      action: "Nếu không có FD (X → A) mà tập các FD còn lại H vẫn suy ra được A từ X, thì (X → A) là dư thừa (không đóng góp thêm thông tin mới).",
      reason: "Triệt tiêu các phụ thuộc hàm có thể suy dẫn bắc cầu từ các phụ thuộc hàm khác trong tập.",
      badge: "TRIỆT TIÊU FD DƯ",
      color: "from-amber-600 to-orange-600"
    },
    {
      step: 3,
      title: "Bước 3: Loại Bỏ Thuộc Tính Dư Thừa Ở Vế Trái (Remove Extraneous LHS Attributes)",
      subtitle: "Đảm bảo tính phụ thuộc đầy đủ (Full Functional Dependency)",
      rule: "Với mỗi (X → A) ∈ G, với mỗi B ∈ X: Xét X' = X \\ {B}. Nếu A ∈ (X')_G⁺ ⟹ Rút gọn (X → A) thành (X' → A)",
      action: "Nếu bỏ bớt thuộc tính B khỏi vế trái X mà tập con còn lại X' vẫn tự xác định được A, thì B là thuộc tính dư thừa vô ích ở vế trái.",
      reason: "Tối giản vế trái để đạt được phụ thuộc hàm đầy đủ và tìm ra các khóa tối tiểu chính xác nhất.",
      badge: "TỐI GIẢN VẾ TRÁI",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const curr = steps[activeStep - 1];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Filter className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">MinimalCover3StepEngineStudio</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Thuật Toán 3 Bước Tìm Phủ Tối Thiểu
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Quy trình chuẩn hóa 3 bước: Phân rã vế phải &rarr; Loại bỏ FD dư thừa &rarr; Loại bỏ thuộc tính dư thừa vế trái
            </p>
          </div>
        </div>

        {/* Step Selector */}
        <div className="flex rounded-xl bg-teal-100/80 p-1 border border-teal-200">
          {[1, 2, 3].map((s) => (
            <button
              key={s}
              onClick={() => setActiveStep(s)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                activeStep === s ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
              }`}
            >
              Bước {s}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`cursor-pointer rounded-xl border p-3 text-center transition-all ${
              activeStep === s.step
                ? "border-teal-500 bg-teal-50 shadow-sm"
                : "border-gray-200 bg-white/70 hover:bg-gray-50 opacity-70"
            }`}
          >
            <span className="font-mono text-xs font-bold text-teal-900 block">BƯỚC {s.step}</span>
            <span className="text-[11px] text-gray-700 font-semibold block mt-0.5 truncate">{s.badge}</span>
          </div>
        ))}
      </div>

      {/* Active Step Details */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-teal-950 font-sans">{curr.title}</h4>
          <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
            {curr.badge}
          </span>
        </div>

        <div className="rounded-lg bg-teal-50 p-2.5 text-teal-950 font-bold border border-teal-200">
          QUY TẮC THỰC THI: {curr.rule}
        </div>

        <div className="space-y-1 text-xs text-gray-700 leading-relaxed font-sans font-medium">
          <p><strong>• Thao tác: </strong>{curr.action}</p>
          <p><strong>• Lý do &amp; Ý nghĩa: </strong>{curr.reason}</p>
        </div>
      </div>
    </div>
  );
}
