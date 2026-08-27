"use client";
import React, { useState } from "react";
import { 
  RotateCw, 
  Layers, 
  Target, 
  ShieldCheck, 
  Code2, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Boxes,
  Cpu
} from "lucide-react";

export default function UnifiedProcessPhasesStudio() {
  const [selectedPhase, setSelectedPhase] = useState("elaboration");
  const [iterationStep, setIterationStep] = useState(2); // 1, 2, 3

  const upPhases = {
    inception: {
      name: "1. Inception (Khởi tạo)",
      tag: "Phạm vi & Business Case",
      icon: Target,
      color: "from-blue-600 to-cyan-600",
      accentBorder: "border-blue-400",
      goal: "Xác định mục tiêu kinh doanh, ước tính chi phí sơ bộ và định hình phạm vi tổng thể của dự án.",
      activities: [
        "Xây dựng Business Case và phân tích tính khả thi ban đầu.",
        "Xác định các Actor và liệt kê danh sách các Use Case cốt lõi (10-20% use case chính).",
        "Đạt được sự phê chuẩn từ ban lãnh đạo để bắt đầu đầu tư nguồn lực."
      ],
      deliverables: "Vision Document, Initial Use Case Model, Project Scope, Business Case"
    },
    elaboration: {
      name: "2. Elaboration (Chi tiết hóa)",
      tag: "Kiến trúc & Giảm rủi ro",
      icon: ShieldCheck,
      color: "from-purple-600 to-pink-600",
      accentBorder: "border-purple-400",
      goal: "Giai đoạn quan trọng nhất: Khảo sát chi tiết phần lớn requirements (khoảng 80%) và xây dựng Khung kiến trúc nền tảng (Executable Architecture Baseline) nhằm triệt tiêu sớm các rủi ro kỹ thuật nguy hiểm.",
      activities: [
        "Đặc tả chi tiết phần lớn Use Case phức tạp.",
        "Thiết kế kiến trúc hệ thống và lập trình bản mẫu kiến trúc chạy thử nghiệm.",
        "Lập kế hoạch chi tiết và dự toán chi phí chính xác cho giai đoạn Construction."
      ],
      deliverables: "Detailed Software Requirements Spec (SRS), Architecture Baseline, Risk Management Plan"
    },
    construction: {
      name: "3. Construction (Xây dựng)",
      tag: "Lập trình tăng dần (Incremental)",
      icon: Code2,
      color: "from-emerald-600 to-teal-600",
      accentBorder: "border-emerald-400",
      goal: "Lập trình, tích hợp và kiểm thử toàn bộ các tính năng còn lại của hệ thống qua từng vòng lặp (Iterations) theo phương thức tăng dần (Incremental).",
      activities: [
        "Lập trình mã nguồn chi tiết cho từng Use Case theo mức độ ưu tiên.",
        "Thực hiện Unit Test và Integration Test liên tục sau mỗi vòng lặp.",
        "Tạo ra các bản Working Increment hoạt động được để bàn giao dần."
      ],
      deliverables: "Working Software Increments, Integrated System, Test Suites & Results"
    },
    transition: {
      name: "4. Transition (Chuyển giao)",
      tag: "Triển khai & Go-Live",
      icon: Rocket,
      color: "from-amber-600 to-orange-600",
      accentBorder: "border-amber-400",
      goal: "Chuyển giao phần mềm hoàn chỉnh cho người dùng cuối, đảm bảo hệ thống vận hành trơn tru trong môi trường thực tế.",
      activities: [
        "Thực hiện kiểm thử chấp nhận người dùng (UAT) và kiểm thử hiệu năng/tải.",
        "Đào tạo người dùng cuối và đội ngũ hỗ trợ vận hành IT.",
        "Di chuyển dữ liệu cũ, khắc phục lỗi phát sinh và chính thức Go-Live sản phẩm."
      ],
      deliverables: "Final Production System, User Manuals, Training Sessions, Acceptance Sign-off"
    }
  };

  const current = upPhases[selectedPhase];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Unified Process (UP) 4 Giai Đoạn & Working Increments
            </h2>
            <p className="text-xs text-slate-400">
              Khám phá phương pháp luận phát triển hướng đối tượng (OO), hướng Use Case và kiến trúc qua các vòng lặp tăng dần.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Phases Horizontal Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {Object.entries(upPhases).map(([key, item]) => {
          const isSelected = selectedPhase === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedPhase(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-purple-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow mb-2.5 w-fit`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-white">{item.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{item.tag}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected UP Phase Detail Card */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                <current.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
                <span className="text-xs text-slate-400">Trọng tâm: {current.tag}</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold uppercase text-purple-400 block mb-1">Mục tiêu tối thượng:</span>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{current.goal}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-xs font-bold uppercase text-emerald-400 block mb-2">
                Các hoạt động then chốt:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400 block mb-2">
                  Sản phẩm chuyển giao (Deliverables):
                </span>
                <p className="text-xs text-slate-200 font-mono leading-relaxed">
                  {current.deliverables}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Part 2: Working Increment Simulation Box */}
      <div className="border-t border-slate-800 pt-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
            Cơ chế Iteration & Working Increment trong Unified Process
          </span>
          <span className="text-xs text-slate-400 font-mono">Bấm chọn vòng lặp:</span>
        </div>

        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setIterationStep(num)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                iterationStep === num
                  ? "bg-cyan-600 border-cyan-400 text-white shadow"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              Iteration {num}
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white flex items-center gap-2">
                <span>Vòng lặp Iteration {iterationStep}:</span>
                <span className="text-xs font-normal text-cyan-300 font-mono">[Plan ➔ Analyze ➔ Design ➔ Build ➔ Test]</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {iterationStep === 1 && "Xuất bản Working Increment 1: Module Đăng ký, Đăng nhập & Xác thực OTP (Hoàn thành 30% hệ thống)."}
                {iterationStep === 2 && "Xuất bản Working Increment 2: Tích hợp thêm Giỏ hàng & Tìm kiếm sản phẩm nâng cao (Hoàn thành 65% hệ thống)."}
                {iterationStep === 3 && "Xuất bản Working Increment 3: Tích hợp Cổng thanh toán ngân hàng & Xuất hóa đơn VAT (Hoàn thành 95% hệ thống)."}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
            Working Increment #{iterationStep}
          </span>
        </div>
      </div>
    </div>
  );
}
