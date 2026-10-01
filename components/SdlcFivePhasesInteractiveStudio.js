"use client";

import React, { useState } from "react";
import {
  Workflow,
  Clock,
  Target,
  Layers,
  Code,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  DollarSign,
  Users
} from "lucide-react";

export default function SdlcFivePhasesInteractiveStudio() {
  const [activePhase, setActivePhase] = useState(0); // 0 to 4
  const [activeFeasibilityTab, setActiveFeasibilityTab] = useState("technical"); // "technical" | "economic" | "operational"

  const phases = [
    {
      id: "planning",
      step: 1,
      title: "1. Planning (Lập kế hoạch)",
      vnTitle: "Khảo sát sơ bộ & Khởi tạo",
      icon: Clock,
      color: "from-amber-500 to-orange-500",
      border: "border-amber-400",
      textColor: "text-amber-400",
      accentBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      summary:
        "Xác định nguyên nhân vì sao hệ thống cần được xây dựng, phân tích tính khả thi và lập kế hoạch tổng thể cho dự án.",
      activities: [
        "Xác định cơ hội kinh doanh hoặc vấn đề nhức nhối cần giải quyết (Problem Statement).",
        "Tiến hành <strong>Khảo sát tính khả thi (Feasibility Study)</strong> trên 3 khía cạnh: Kỹ thuật, Kinh tế, Vận hành.",
        "Thiết lập nhóm dự án, phân bổ ngân sách ban đầu và soạn thảo <strong>Project Charter</strong>."
      ],
      output: "Project Charter, Feasibility Study Report, High-Level Project Plan"
    },
    {
      id: "analysis",
      step: 2,
      title: "2. Analysis (Phân tích yêu cầu)",
      vnTitle: "Định nghĩa ai, cái gì, ở đâu, khi nào",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-400",
      textColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      summary:
        "Trả lời các câu hỏi: Ai sẽ sử dụng hệ thống? Hệ thống sẽ làm gì? Ở đâu và khi nào sẽ vận hành? Đây là pha trọng tâm của BA.",
      activities: [
        "Thu thập yêu cầu từ Stakeholders qua 5 kỹ thuật Elicitation (Phỏng vấn, JAD, Quan sát...).",
        "Mô hình hóa yêu cầu: Viết Use Cases, vẽ Biểu đồ Hoạt động (Activity Diagram), xây dựng từ điển dữ liệu.",
        "Xác định và phân loại yêu cầu: Yêu cầu chức năng (FR) vs Yêu cầu phi chức năng (NFR)."
      ],
      output: "Software Requirements Specification (SRS), Use Case Specifications, Requirement Traceability Matrix"
    },
    {
      id: "design",
      step: 3,
      title: "3. Design (Thiết kế hệ thống)",
      vnTitle: "Hệ thống sẽ hoạt động như thế nào",
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      border: "border-cyan-400",
      textColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      summary:
        "Chuyển dịch các yêu cầu nghiệp vụ logic thành thiết kế kỹ thuật vật lý chi tiết để phục vụ lập trình.",
      activities: [
        "Thiết kế kiến trúc hệ thống tổng thể (System Architecture: Monolith, Microservices, Client-Server).",
        "Thiết kế giao diện người dùng (UI/UX Wireframes, Mockups, Interactive Prototypes).",
        "Thiết kế cơ sở dữ liệu vật lý (ERD, Relational Schema, Indexes, Normalization)."
      ],
      output: "System Design Document (SDD), Database Schema DDL, UI Prototypes, API Specifications"
    },
    {
      id: "implementation",
      step: 4,
      title: "4. Implementation (Cài đặt & Đưa vào hoạt động)",
      vnTitle: "Xây dựng, thử nghiệm và cài đặt",
      icon: Code,
      color: "from-indigo-500 to-violet-500",
      border: "border-indigo-400",
      textColor: "text-indigo-400",
      accentBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      summary:
        "Pha dài nhất và tốn kém chi phí nhất trong toàn bộ chu kỳ SDLC: Lập trình mã nguồn, kiểm thử đa tầng và triển khai.",
      activities: [
        "Lập trình mã nguồn phần mềm dựa trên tài liệu thiết kế (Frontend, Backend, Database).",
        "Kiểm thử toàn diện: Unit Test, Integration Test, System Test và User Acceptance Test (UAT).",
        "Chuyển đổi dữ liệu cũ (Data Migration), cài đặt phần mềm lên môi trường Production và đào tạo người dùng."
      ],
      output: "Production Software Build, Verified Test Reports, User Training Manuals, Data Migration Logs"
    },
    {
      id: "support",
      step: 5,
      title: "5. Support (Hỗ trợ & Bảo trì)",
      vnTitle: "Vận hành, vá lỗi và nâng cấp",
      icon: RotateCw,
      color: "from-rose-500 to-pink-500",
      border: "border-rose-400",
      textColor: "text-rose-400",
      accentBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      summary:
        "Duy trì hệ thống hoạt động ổn định sau Go-Live, xử lý sự cố phát sinh và thu thập phản hồi để khởi động chu kỳ Planning tiếp theo.",
      activities: [
        "Giám sát hiệu năng hệ thống (Monitoring) và sửa lỗi phát sinh trong thực tế (Bug Fixes).",
        "Cập nhật phần mềm thích ứng với môi trường mới (Hệ điều hành, trình duyệt, quy định luật pháp).",
        "Thu thập yêu cầu cải tiến (Change Requests) để chuyển giao sang chu kỳ nâng cấp kế tiếp (Feedback Loop)."
      ],
      output: "Maintenance Logs, Incident Reports, Change Request Tickets, Next-Gen Project Inception"
    }
  ];

  const current = phases[activePhase];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-100">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-amber-500/20 text-white font-bold text-xl">
            <Workflow className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wider">
                SDLC 5-Phase Model
              </span>
              <span className="text-xs text-slate-400">Vòng Đời Chu Kỳ Khép Kín</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              Studio: Chu Trình 5 Giai Đoạn SDLC & Khảo Sát Tính Khả Thi
            </h2>
          </div>
        </div>

        {/* Feedback Loop Indicator */}
        <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
          <RotateCw className="w-4 h-4 text-rose-400 animate-spin-slow" />
          <span className="text-slate-400">Feedback Loop: </span>
          <span className="font-bold text-rose-300">Support ➔ Planning</span>
        </div>
      </div>

      {/* 5 SDLC Phases Workflow Grid: 3 cols on laptop (lg), 5 on xl desktop */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block">
            Vòng đời SDLC 5 giai đoạn (Bấm chọn từng pha để xem chi tiết):
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Bố cục linh hoạt tự co giãn trên laptop
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePhase === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhase(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? `bg-slate-800/90 ${p.border} ring-2 ring-amber-400/50 shadow-xl scale-[1.02]`
                    : "bg-slate-950/80 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${p.color} text-white shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-black px-2 py-0.5 rounded-md bg-slate-900 text-slate-200 border border-slate-800">
                      Pha {p.step}
                    </span>
                  </div>

                  {/* Fully visible titles without truncate */}
                  <h3 className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{p.vnTitle}</p>
                </div>

                <div className="mt-3.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span>{isSelected ? "Đang chọn xem" : "Nhấn để xem"}</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Phase Details Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 mb-6">
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

          <span className="text-xs font-mono font-bold bg-slate-900 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-800">
            Giai đoạn {current.step} / 5
          </span>
        </div>

        {/* Activities & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase text-emerald-400 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4" /> Các hoạt động trọng tâm của pha:
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {current.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: act }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5 mb-2">
                <FileCheck className="w-4 h-4" /> Sản phẩm chuyển giao (Deliverables):
              </span>
              <p className="text-xs text-slate-200 font-mono leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800">
                {current.output}
              </p>
            </div>
            <div className="text-[11px] text-slate-400">
              Sản phẩm bàn giao của pha này là đầu vào bắt buộc của pha tiếp theo.
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Feasibility Study Deep Dive */}
      <div className="border-t border-slate-800 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block">
              Trọng Tâm Pha Planning: Khảo Sát Tính Khả Thi (Feasibility Study)
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              3 khía cạnh sống còn quyết định dự án có được cấp ngân sách phê duyệt (Go / No-Go) hay không:
            </p>
          </div>

          <div className="flex flex-wrap gap-1 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveFeasibilityTab("technical")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFeasibilityTab === "technical"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" /> 1. Kỹ Thuật (Technical)
            </button>
            <button
              onClick={() => setActiveFeasibilityTab("economic")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFeasibilityTab === "economic"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" /> 2. Kinh Tế (Economic)
            </button>
            <button
              onClick={() => setActiveFeasibilityTab("operational")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFeasibilityTab === "operational"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Users className="w-3.5 h-3.5" /> 3. Vận Hành (Operational)
            </button>
          </div>
        </div>

        {/* Feasibility Content Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm">
          {activeFeasibilityTab === "technical" && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-400">
                <Cpu className="w-4 h-4" /> Khả thi về mặt Kỹ thuật (Technical Feasibility):
              </div>
              <p className="text-slate-200 leading-relaxed">
                Đội ngũ kỹ sư có đủ năng lực chuyên môn và công nghệ hiện tại có đáp ứng được không? Rủi ro kỹ thuật liên quan đến quy mô hệ thống, độ mới của công nghệ và sự tích hợp với các hệ thống sẵn có (Legacy Systems).
              </p>
              <div className="text-[11px] text-blue-300 font-mono bg-blue-950/40 p-2.5 rounded-lg border border-blue-900/60">
                👉 Câu hỏi then chốt: &quot;Can we build it?&quot; (Chúng ta có thể xây dựng nó không?)
              </div>
            </div>
          )}

          {activeFeasibilityTab === "economic" && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <DollarSign className="w-4 h-4" /> Khả thi về mặt Kinh tế (Economic Feasibility / Cost-Benefit Analysis):
              </div>
              <p className="text-slate-200 leading-relaxed">
                Chi phí đầu tư (Development + Operational Costs) so với lợi ích thu lại (Tangible + Intangible Benefits). Phân tích điểm hoàn vốn (Break-even Point), tỷ suất hoàn vốn đầu tư (ROI) và giá trị hiện tại thuần (NPV).
              </p>
              <div className="text-[11px] text-emerald-300 font-mono bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/60">
                👉 Câu hỏi then chốt: &quot;Will it provide business value?&quot; (Nó có mang lại giá trị kinh tế đáng đầu tư không?)
              </div>
            </div>
          )}

          {activeFeasibilityTab === "operational" && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-purple-400">
                <Users className="w-4 h-4" /> Khả thi về mặt Vận hành (Operational Feasibility):
              </div>
              <p className="text-slate-200 leading-relaxed">
                Người dùng cuối có sẵn sàng sử dụng hệ thống mới không? Ban lãnh đạo có ủng hộ không? Hệ thống có phù hợp với văn hóa tổ chức và quy trình làm việc thực tế hay gây ra sự phản kháng thay đổi (Resistance to Change)?
              </p>
              <div className="text-[11px] text-purple-300 font-mono bg-purple-950/40 p-2.5 rounded-lg border border-purple-900/60">
                👉 Câu hỏi then chốt: &quot;If we build it, will they use it?&quot; (Nếu ta làm ra, người dùng có dùng không?)
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
