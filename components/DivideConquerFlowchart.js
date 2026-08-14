"use client";

import React, { useState } from "react";
import { GitFork, Repeat, Layers, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";

export default function DivideConquerFlowchart() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "divide",
      number: "1",
      title: "DIVIDE (Chia)",
      subtitle: "Top-Down Decomposition",
      icon: GitFork,
      color: "blue",
      badgeClass: "bg-blue-100 text-blue-700 border-blue-300",
      cardClass: "hover:border-blue-400 bg-blue-50/40",
      activeBorder: "border-blue-500 ring-2 ring-blue-200",
      details: [
        "Phân tích bài toán lớn ban đầu theo hướng thiết kế Top-down.",
        "Chia nhỏ thành các bài toán con (sub-problems) CÙNG LOẠI với bài toán gốc.",
        "Kích thước của mỗi bài toán con giảm dần (ví dụ: từ n xuống n-1 hoặc n/2)."
      ]
    },
    {
      id: "conquer",
      number: "2",
      title: "CONQUER (Trị / Chinh phục)",
      subtitle: "Recursive Execution",
      icon: Repeat,
      color: "violet",
      badgeClass: "bg-violet-100 text-violet-700 border-violet-300",
      cardClass: "hover:border-violet-400 bg-violet-50/40",
      activeBorder: "border-violet-500 ring-2 ring-violet-200",
      details: [
        "Giải từng sub-problem bằng một hàm tự gọi lại chính nó (calls itself).",
        "Nếu sub-problem đủ nhỏ (chạm Base Case): giải trực tiếp ngay lập tức mà không gọi hàm thêm nữa.",
        "Đảm bảo mọi sub-problem đều hội tụ dần về Base Case."
      ]
    },
    {
      id: "combine",
      number: "3",
      title: "COMBINE (Kết hợp)",
      subtitle: "Unwinding & Aggregate",
      icon: Layers,
      color: "emerald",
      badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-300",
      cardClass: "hover:border-emerald-400 bg-emerald-50/40",
      activeBorder: "border-emerald-500 ring-2 ring-emerald-200",
      details: [
        "Sau khi các bài toán con có kết quả, hệ thống Call Stack thu hồi (unwind).",
        "Kết hợp các kết quả của sub-problems lại thành lời giải của bài toán lớn ban đầu.",
        "Ví dụ Factorial: kết hợp n * fact(n-1) thành fact(n)."
      ]
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Chiến lược Thuật toán
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Mô hình Chia Để Trị (Divide-and-Conquer Paradigm)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Quy trình 3 bước cốt lõi đằng sau mọi giải thuật đệ quy
          </p>
        </div>
      </div>

      {/* 3 Step Interactive Flowchart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStep === idx;
          return (
            <div
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 md:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${s.cardClass} ${
                isActive ? s.activeBorder + " shadow-md" : "border-slate-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-black border ${s.badgeClass}`}>
                    {s.number}
                  </span>
                  <Icon className={`w-5 h-5 ${
                    s.color === "blue" ? "text-blue-600" : s.color === "violet" ? "text-violet-600" : "text-emerald-600"
                  }`} />
                </div>
                <h4 className="text-base font-bold text-slate-900">{s.title}</h4>
                <span className="text-[11px] font-mono text-slate-500 font-medium block mt-0.5">
                  {s.subtitle}
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs text-slate-600 flex items-center justify-between">
                <span>{isActive ? "Đang chọn" : "Nhấp xem chi tiết"}</span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-400 hidden md:block" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Explanation Panel for Active Step */}
      <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
          <h4 className="text-xs md:text-sm font-bold text-slate-900 uppercase font-mono">
            Chi tiết bước {steps[activeStep].number}: {steps[activeStep].title}
          </h4>
        </div>
        <ul className="space-y-2">
          {steps[activeStep].details.map((point, pIdx) => (
            <li key={pIdx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Paradigm Summary Banner */}
      <div className="mt-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="text-xs md:text-sm text-indigo-950">
          <strong className="font-semibold text-indigo-900">Mô hình (Paradigm) cốt lõi: </strong>
          Lời giải của một bài toán phụ thuộc trực tiếp vào lời giải của <em>các instance nhỏ hơn của chính bài toán đó</em>.
        </div>
      </div>
    </div>
  );
}
