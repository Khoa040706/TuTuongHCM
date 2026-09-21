"use client";
import React, { useState } from "react";
import { 
  Compass, 
  Layers, 
  Hammer, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  FileText, 
  Users, 
  BarChart3,
  Clock
} from "lucide-react";

const PHASES = [
  {
    id: "inception",
    name: "1. Inception / Initiation",
    subtitle: "Khám phá & Xác định Scope",
    color: "emerald",
    accentBg: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-500",
    ringColor: "ring-emerald-400",
    textColor: "text-emerald-800",
    icon: Compass,
    effort: "5% - 10%",
    milestone: "LCO (Lifecycle Objectives)",
    isCurrentStudy: true,
    focusList: [
      "Khám phá các Business Events (sự kiện nghiệp vụ) kích hoạt hệ thống.",
      "Xác định đúng các vai trò tương tác (Actors: Primary, Secondary, System).",
      "Xây dựng Validated System Use Case Model (Sơ đồ + Đặc tả Use Case).",
      "Khóa chặt biên ranh giới hệ thống (System Boundary) để kiểm soát Scope."
    ],
    deliverables: [
      "Use Case Model (Diagrams & High-level Descriptions)",
      "Initial Scope Statement & Business Case",
      "Preliminary Risk List & Feasibility Assessment"
    ],
    quote: "“Inception không phải là giai đoạn thiết kế hay code; Inception là giai đoạn quyết định xem dự án CÓ NÊN LÀM HAY KHÔNG và ĐÂU LÀ RANH GIỚI BẮT BUỘC.”"
  },
  {
    id: "elaboration",
    name: "2. Elaboration",
    subtitle: "Thiết kế Kiến trúc & Chi tiết",
    color: "amber",
    accentBg: "bg-amber-500",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-500",
    ringColor: "ring-amber-400",
    textColor: "text-amber-800",
    icon: Layers,
    effort: "20% - 30%",
    milestone: "LCA (Lifecycle Architecture)",
    isCurrentStudy: false,
    focusList: [
      "Thiết kế kiến trúc hệ thống nền tảng (Executable Architectural Baseline).",
      "Chi tiết hóa 80%+ các Use Case quan trọng có rủi ro kỹ thuật cao.",
      "Lập kế hoạch phân bổ Sprint/Iteration cho giai đoạn Construction."
    ],
    deliverables: [
      "Detailed Fully Dressed Use Cases (Happy path + Exceptions)",
      "Architecture Baseline Prototype",
      "Domain Model & Database Initial Schema"
    ],
    quote: "“Kế thừa toàn bộ Use Case Model từ Inception để đập tan các rủi ro kiến trúc cốt lõi.”"
  },
  {
    id: "construction",
    name: "3. Construction",
    subtitle: "Lập trình & Xây dựng Hệ thống",
    color: "blue",
    accentBg: "bg-blue-500",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-500",
    ringColor: "ring-blue-400",
    textColor: "text-blue-800",
    icon: Hammer,
    effort: "50% - 65%",
    milestone: "IOC (Initial Operational Capability)",
    isCurrentStudy: false,
    focusList: [
      "Hiện thực hóa mã nguồn (Coding), cấu hình cơ sở dữ liệu và hạ tầng.",
      "Tích hợp các thành phần hệ thống theo từng vòng lặp (Iterations).",
      "Thực hiện kiểm thử đơn vị (Unit Test) và kiểm thử tích hợp liên tục."
    ],
    deliverables: [
      "Software Product Release (Beta version)",
      "User Manuals & Operational Documentation",
      "Test Suites & Quality Reports"
    ],
    quote: "“Tập trung tối đa nhân lực viết code và kiểm thử dựa trên bản vẽ chuẩn từ Elaboration.”"
  },
  {
    id: "transition",
    name: "4. Transition",
    subtitle: "Bàn giao, Chuyển đổi & Vận hành",
    color: "purple",
    accentBg: "bg-purple-500",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-500",
    ringColor: "ring-purple-400",
    textColor: "text-purple-800",
    icon: Rocket,
    effort: "10% - 15%",
    milestone: "PR (Product Release)",
    isCurrentStudy: false,
    focusList: [
      "Chạy thử nghiệm Beta / UAT (User Acceptance Testing) với người dùng thật.",
      "Đào tạo người dùng cuối, chuyển đổi dữ liệu từ hệ thống cũ sang mới.",
      "Triển khai Production và theo dõi phản hồi giai đoạn đầu vận hành."
    ],
    deliverables: [
      "Final Production Deployment",
      "Sign-off User Acceptance Agreement",
      "Post-Mortem Lessons Learned Report"
    ],
    quote: "“Chuyển giao phần mềm hoàn chỉnh vào tay khách hàng và đảm bảo vận hành ổn định.”"
  }
];

export default function UpPhasesPipelineVisualizer() {
  const [selectedPhaseId, setSelectedPhaseId] = useState("inception");
  const selectedPhase = PHASES.find((p) => p.id === selectedPhaseId) || PHASES[0];

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7 shadow-lg shadow-stone-200/50 transition-all">
      {/* Visualizer Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
              Interactive SDLC Pipeline
            </span>
          </div>
          <h3 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            Vị Trí Của Initiation Phase Trong 4 Giai Đoạn Unified Process
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">
          <Clock size={13} className="text-emerald-700" />
          <span>Bấm từng Phase để khám phá</span>
        </div>
      </div>

      {/* 4 Phases Interactive Stepper Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 my-6">
        {PHASES.map((phase, idx) => {
          const isSelected = phase.id === selectedPhaseId;
          const IconComponent = phase.icon;

          return (
            <button
              key={phase.id}
              onClick={() => setSelectedPhaseId(phase.id)}
              className={`relative p-3.5 md:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? `border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20 shadow-md`
                  : `border-stone-200 bg-stone-50/60 hover:bg-stone-100/80 hover:border-stone-300 text-stone-600`
              }`}
            >
              {phase.isCurrentStudy && (
                <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
                  ★ Trọng Tâm
                </span>
              )}

              <div className="flex items-center gap-2.5 mb-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                  isSelected ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-200/80 text-stone-600"
                }`}>
                  <IconComponent size={16} />
                </div>
                <span className="text-[11px] font-mono font-bold text-stone-400">0{idx + 1}</span>
              </div>

              <div className="text-xs md:text-sm font-bold text-stone-900 leading-snug">
                {phase.name.split(". ")[1] || phase.name}
              </div>
              <div className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                {phase.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Phase Spotlight Box */}
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/60 via-white to-stone-50/40 p-5 md:p-6 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
              {React.createElement(selectedPhase.icon, { size: 20 })}
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                Chi tiết Giai đoạn {selectedPhase.name}
              </div>
              <div className="text-sm md:text-base font-extrabold text-stone-900">
                {selectedPhase.subtitle}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 py-1 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-medium flex items-center gap-1.5 shadow-xs">
              <BarChart3 size={13} className="text-emerald-700" />
              <span>Effort: <strong>{selectedPhase.effort}</strong></span>
            </div>
            <div className="px-3 py-1 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-1.5 shadow-xs">
              <Target size={13} className="text-emerald-700" />
              <span>Milestone: <strong>{selectedPhase.milestone}</strong></span>
            </div>
          </div>
        </div>

        {/* 2-Column Content: Focus & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {/* Focus List */}
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs">
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Compass size={14} className="text-emerald-700" />
              <span>Nhiệm vụ trọng tâm (Core Focus)</span>
            </div>
            <ul className="space-y-2">
              {selectedPhase.focusList.map((item, i) => (
                <li key={i} className="text-xs md:text-sm text-stone-700 flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs">
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText size={14} className="text-emerald-700" />
              <span>Sản phẩm bàn giao (Key Deliverables)</span>
            </div>
            <ul className="space-y-2">
              {selectedPhase.deliverables.map((item, i) => (
                <li key={i} className="text-xs md:text-sm text-stone-700 flex items-start gap-2 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guiding Quote */}
        <div className="p-3.5 rounded-xl bg-emerald-100/40 border-l-4 border-emerald-600 text-stone-800 text-xs md:text-sm italic font-playfair leading-relaxed">
          {selectedPhase.quote}
        </div>
      </div>
    </div>
  );
}
