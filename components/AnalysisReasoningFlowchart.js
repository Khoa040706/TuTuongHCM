"use client";

import React, { useState } from "react";
import { HelpCircle, XCircle, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, Shield, Layers } from "lucide-react";

export default function AnalysisReasoningFlowchart() {
  const [activeStep, setActiveStep] = useState(2); // default step 3 (independence)

  const steps = [
    {
      id: 0,
      title: "1. Đo bằng Runtime thực tế?",
      subtitle: "Đo giây / mili-giây qua System.currentTimeMillis()",
      status: "question",
      icon: HelpCircle,
      badge: "Cách nghĩ thông thường",
      badgeColor: "bg-slate-100 text-slate-700",
      content: "Nhiều người nghĩ chỉ cần chạy thử 2 chương trình và xem cái nào chạy nhanh hơn (ít mili-giây hơn). Nhưng cách này có thực sự khách quan và khoa học?"
    },
    {
      id: 1,
      title: "2. Exact Runtime Không Đáng Tin Cậy!",
      subtitle: "Bị nhiễu bởi quá nhiều yếu tố môi trường",
      status: "error",
      icon: XCircle,
      badge: "Lý do thất bại",
      badgeColor: "bg-rose-100 text-rose-800",
      content: "Chạy cùng 1 code trên máy cũ vs máy mới ra số ms khác nhau. Viết bằng Python vs C++ ra số ms khác nhau. Bộ nhớ cache và các ứng dụng chạy ngầm của hệ điều hành làm lệch thời gian đo lường."
    },
    {
      id: 2,
      title: "3. Yêu cầu: Phân tích phải ĐỘC LẬP",
      subtitle: "Algorithm Analysis phải độc lập khỏi 4 yếu tố bên ngoài",
      status: "shield",
      icon: ShieldCheck,
      badge: "Nguyên tắc khoa học",
      badgeColor: "bg-amber-100 text-amber-800",
      content: "Phân tích thuật toán cung cấp công cụ so sánh **hiệu quả giữa các phương pháp giải quyết (methods of solution)**, chứ KHÔNG PHẢI so sánh chương trình cụ thể (programs)."
    },
    {
      id: 3,
      title: "4. Giải pháp: Đếm Primitive Operations!",
      subtitle: "Đếm số phép gán, so sánh, cộng, trừ, nhân, chia...",
      status: "success",
      icon: CheckCircle2,
      badge: "Cách đo chuẩn mực",
      badgeColor: "bg-emerald-100 text-emerald-800",
      content: "Execution time của thuật toán tỉ lệ trực tiếp với số lượng phép toán cơ bản (primitive operations) cần thực thi theo hàm số $f(n)$ của kích thước đầu vào $n$."
    }
  ];

  const independentDimensions = [
    { name: "Cách cài đặt cụ thể (Specific implementations)", desc: "Không phụ thuộc vào mẹo code hay phong cách viết" },
    { name: "Compiler & Bộ tối ưu hóa (Optimizers)", desc: "Không phụ thuộc vào trình biên dịch tối ưu đến mức nào" },
    { name: "Máy tính phần cứng (Computers)", desc: "Không phụ thuộc vào xung nhịp CPU, RAM, hay kiến trúc phần cứng" },
    { name: "Dữ liệu cụ thể (Data sets)", desc: "Đo lường hàm tăng trưởng tổng quát cho mọi bộ dữ liệu" }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 2.4 – 2.6 — Luận Điểm Cốt Lõi
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Flowchart Lập Luận: Vì Sao Đếm Operations Thay Vì Đo Runtime?
          </h3>
          <p className="text-xs text-slate-500">
            Hành trình chuyển đổi từ tư duy "đo thời gian chạy" sang "đếm số phép tính toán học"
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Layers className="w-3.5 h-3.5 text-indigo-600" />
          4 Bước logic
        </div>
      </div>

      {/* 4 Steps Stepper Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {steps.map((step) => {
          const IconComp = step.icon;
          const isActive = activeStep === step.id;

          let cardStyle = "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300";
          if (isActive) {
            if (step.status === "question") cardStyle = "bg-white border-2 border-slate-700 ring-2 ring-slate-200 text-slate-900 shadow-md";
            if (step.status === "error") cardStyle = "bg-rose-50/90 border-2 border-rose-400 ring-2 ring-rose-200 text-rose-950 shadow-md";
            if (step.status === "shield") cardStyle = "bg-amber-50/90 border-2 border-amber-400 ring-2 ring-amber-200 text-amber-950 shadow-md";
            if (step.status === "success") cardStyle = "bg-emerald-50/90 border-2 border-emerald-400 ring-2 ring-emerald-200 text-emerald-950 shadow-md";
          }

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-4 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between hover:scale-[1.02] ${cardStyle}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <IconComp className={`w-5 h-5 ${
                    isActive
                      ? step.status === "question"
                        ? "text-slate-800"
                        : step.status === "error"
                        ? "text-rose-600"
                        : step.status === "shield"
                        ? "text-amber-600"
                        : "text-emerald-600"
                      : "text-slate-500"
                  }`} />
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>
                <h4 className="text-xs md:text-sm font-bold text-slate-900">
                  {step.title}
                </h4>
              </div>
              <span className={`text-[11px] font-mono mt-2 block ${isActive ? "text-slate-700 font-semibold" : "text-slate-500"}`}>
                {step.subtitle}
              </span>
            </div>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-slate-500 uppercase">
          <span>Chi tiết luận điểm:</span>
          <span className="text-indigo-600">{steps[activeStep].title}</span>
        </div>
        <p className="text-xs md:text-sm text-slate-800 leading-relaxed mb-4">
          {steps[activeStep].content}
        </p>

        {/* If Step 3 (Independence) is active -> show 4 Independence pillars */}
        {activeStep === 2 && (
          <div className="pt-3 border-t border-slate-200">
            <h5 className="text-xs font-mono font-bold text-amber-900 mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-amber-600" />
              4 YẾU TỐ PHÂN TÍCH THUẬT TOÁN PHẢI HOÀN TOÀN ĐỘC LẬP (INDEPENDENT):
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {independentDimensions.map((dim, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-amber-200 flex items-start gap-2 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-slate-900 block">{dim.name}</strong>
                    <span className="text-[11px] text-slate-600">{dim.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Summary */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-emerald-950 font-sans">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
        <div>
          <strong>📌 Cần nhớ:</strong> So sánh algorithm dựa trên <strong>phương pháp giải (method)</strong>, không dựa trên <strong>chương trình (program)</strong> cụ thể. Đánh giá hiệu quả bằng cách <strong>đếm số primitive operations</strong>, không dùng run time thực tế!
        </div>
      </div>
    </div>
  );
}
