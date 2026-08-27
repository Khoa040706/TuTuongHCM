"use client";
import React, { useState } from "react";
import { 
  RotateCw, 
  Clock, 
  Search, 
  PenTool, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  CheckCircle2, 
  Layers,
  Wrench,
  HelpCircle
} from "lucide-react";

export default function SdlcFivePhasesInteractiveStudio() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeFeasibilityTab, setActiveFeasibilityTab] = useState("technical");

  const phases = [
    {
      id: "planning",
      title: "1. Planning (Lập kế hoạch)",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
      border: "border-amber-400",
      summary: "Nhận diện vấn đề/cơ hội kinh doanh, đánh giá 3 trụ cột Feasibility Study và xác định phạm vi dự án.",
      activities: [
        "**Identify Need or Opportunity:** Xác định bài toán kinh doanh cần hệ thống mới giải quyết.",
        "**Feasibility Study:** Khảo sát tính khả thi Kỹ thuật (Technical), Kinh tế (Economic/ROI) và Vận hành (Operational).",
        "**Define Scope & Schedule:** Lập ngân sách ban đầu, timeline các mốc bàn giao và kế hoạch nguồn lực."
      ],
      output: "Project Charter, Business Case, Feasibility Study Report, High-level Scope"
    },
    {
      id: "analysis",
      title: "2. Analysis (Phân tích yêu cầu)",
      icon: Search,
      color: "from-emerald-500 to-teal-600",
      border: "border-emerald-400",
      summary: "Khai phá nhu cầu, mô hình hóa quy trình nghiệp vụ và soạn thảo đặc tả yêu cầu hệ thống SRS.",
      activities: [
        "**Gather Requirements:** Thu thập yêu cầu qua phỏng vấn 1-1, workshop JAD, quan sát thực địa.",
        "**Model the Business:** Vẽ sơ đồ Use Case, Activity, Class diagram biểu diễn quy trình và dữ liệu.",
        "**Define System Requirements:** Soạn thảo tài liệu đặc tả SRS rõ ràng, có thể kiểm thử được."
      ],
      output: "Software Requirements Specification (SRS), Use Case Models, Process Flows"
    },
    {
      id: "design",
      title: "3. Design (Thiết kế hệ thống)",
      icon: PenTool,
      color: "from-cyan-500 to-blue-600",
      border: "border-cyan-400",
      summary: "Xác định kiến trúc kỹ thuật tổng thể, thiết kế giao diện UI/UX và lược đồ cơ sở dữ liệu.",
      activities: [
        "**Design Architecture:** Thiết kế kiến trúc phần mềm, bảo mật và kết nối API/Microservices.",
        "**Design UI & Database:** Tạo wireframe màn hình, thiết kế ERD và cấu trúc bảng CSDL quan hệ.",
        "**Produce Technical Specifications:** Chuẩn bị hồ sơ kỹ thuật chi tiết cho đội lập trình."
      ],
      output: "System Architecture Design, UI Wireframes / Mockups, Database Schema ERD"
    },
    {
      id: "implementation",
      title: "4. Implementation (Xây dựng & Triển khai)",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      border: "border-purple-400",
      summary: "Lập trình mã nguồn, kiểm thử đa tầng, đào tạo người dùng và chính thức đưa vào Production.",
      activities: [
        "**Construct the System:** Lập trình mã nguồn, tích hợp các module và cấu hình hệ thống.",
        "**Test:** Kiểm thử chức năng, tích hợp và kiểm thử chấp nhận người dùng (UAT).",
        "**Convert & Deploy:** Đào tạo người dùng, chuyển đổi dữ liệu (Data migration) và Go-Live."
      ],
      output: "Production Source Code, Test Cases & Reports, Deployed System, User Guides"
    },
    {
      id: "support",
      title: "5. Support / Maintenance (Bảo trì & Nâng cấp)",
      icon: Wrench,
      color: "from-rose-500 to-red-600",
      border: "border-rose-400",
      summary: "Theo dõi vận hành, sửa lỗi phát sinh, bổ sung cải tiến và quay ngược lại Planning khi có nhu cầu mới.",
      activities: [
        "**Monitor Performance:** Giám sát hiệu năng và độ ổn định khi người dùng tải thực tế.",
        "**Correct & Enhance:** Sửa chữa lỗi (Bug fixes) và cập nhật tính năng mới khi luật/nghiệp vụ thay đổi.",
        "**Plan for Renewal:** Nhận diện thời điểm hệ thống cần đại tu hoặc thay thế thế hệ mới."
      ],
      output: "Incident Logs, Change Request Approvals, Patch Updates, System Renewal Plan"
    }
  ];

  const feasibilityAspects = {
    technical: {
      title: "1. Technical Feasibility (Khả thi Kỹ thuật)",
      question: "Chúng ta có đủ năng lực công nghệ và phần cứng để làm không?",
      checks: [
        "Công nghệ dự kiến (AI, Blockchain, Cloud) đã đủ trưởng thành và ổn định chưa?",
        "Đội ngũ kỹ sư trong công ty có thành thạo ngôn ngữ / framework này không, hay cần đào tạo?",
        "Hạ tầng mạng, server máy chủ hiện tại có đáp ứng được tải lượng yêu cầu không?"
      ],
      color: "text-blue-400 border-blue-500/40 bg-blue-950/20"
    },
    economic: {
      title: "2. Economic Feasibility (Khả thi Kinh tế / ROI)",
      question: "Dự án có mang lại lợi ích tài chính lớn hơn chi phí đầu tư không?",
      checks: [
        "Phân tích Chi phí vs Lợi ích (Cost-Benefit Analysis: Chi phí phát triển, bảo trì vs Lợi nhuận tăng thêm).",
        "Thời gian hoàn vốn (Payback Period) và tỷ suất hoàn vốn nội bộ (ROI / NPV) có đạt kỳ vọng không?",
        "Ngân sách tài chính của doanh nghiệp có đủ trang trải nếu dự án bị đội vốn 15-20% không?"
      ],
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/20"
    },
    operational: {
      title: "3. Operational Feasibility (Khả thi Vận hành)",
      question: "Nếu hệ thống xây xong, con người và tổ chức có chịu dùng hiệu quả không?",
      checks: [
        "Quy trình mới có gây xáo trộn quá lớn đến thói quen làm việc của nhân viên không?",
        "Lãnh đạo và các trưởng phòng có ủng hộ mạnh mẽ dự án không (Management Support)?",
        "Hệ thống có đáp ứng các quy định pháp luật hiện hành và chuẩn bảo mật dữ liệu ngành không?"
      ],
      color: "text-amber-400 border-amber-500/40 bg-amber-950/20"
    }
  };

  const current = phases[activePhase];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <RotateCw className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Chu Trình 5 Giai Đoạn SDLC & Khảo Sát Tính Khả Thi
            </h2>
            <p className="text-xs text-slate-400">
              Trực quan hóa vòng đời khép kín của hệ thống từ Lập kế hoạch đến Bảo trì và cơ chế Feedback Loop.
            </p>
          </div>
        </div>
      </div>

      {/* 5 SDLC Phases Horizontal Interactive Stepper */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
            Vòng đời SDLC 5 giai đoạn (Bấm chọn từng pha để xem chi tiết):
          </span>
          <span className="text-xs text-rose-400 font-bold flex items-center gap-1">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow" /> Support ➔ Quay lại Planning
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePhase === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhase(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? `bg-slate-800 ${p.border} ring-2 ring-amber-400/50 shadow-xl scale-105`
                    : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${p.color} text-white shadow`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-300">
                      Pha {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-white truncate">{p.title.split("(")[0]}</h3>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{p.title.split("(")[1]?.replace(")", "") || ""}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Phase Details Card */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">{current.title}</h3>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">{current.summary}</p>
            </div>
          </div>
        </div>

        {/* Activities & Output */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs font-bold uppercase text-emerald-400 block mb-2">
              Các hoạt động trọng tâm:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {current.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: act }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-amber-400 block mb-2">
                Sản phẩm chuyển giao (Deliverables):
              </span>
              <p className="text-xs text-slate-200 font-mono leading-relaxed">
                {current.output}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Feasibility Study Deep Dive */}
      <div className="border-t border-slate-800 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
            Điểm mấu chốt trong Planning: Khảo sát 3 khía cạnh Feasibility Study
          </span>
          <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveFeasibilityTab("technical")}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                activeFeasibilityTab === "technical" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              1. Kỹ thuật
            </button>
            <button
              onClick={() => setActiveFeasibilityTab("economic")}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                activeFeasibilityTab === "economic" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              2. Kinh tế
            </button>
            <button
              onClick={() => setActiveFeasibilityTab("operational")}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                activeFeasibilityTab === "operational" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              3. Vận hành
            </button>
          </div>
        </div>

        {/* Selected Feasibility Card */}
        {feasibilityAspects[activeFeasibilityTab] && (
          <div className={`p-4 rounded-xl border ${feasibilityAspects[activeFeasibilityTab].color}`}>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="font-extrabold text-sm text-white">
                {feasibilityAspects[activeFeasibilityTab].title}
              </h4>
              <span className="text-xs text-slate-300 font-semibold italic">
                👉 {feasibilityAspects[activeFeasibilityTab].question}
              </span>
            </div>

            <ul className="space-y-1 mt-2 text-xs text-slate-300">
              {feasibilityAspects[activeFeasibilityTab].checks.map((chk, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <span>{chk}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
