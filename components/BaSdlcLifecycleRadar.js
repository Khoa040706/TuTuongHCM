"use client";

import React, { useState } from "react";
import {
  GitBranch,
  Clock,
  CheckCircle,
  Activity,
  Flame,
  Layers,
  Sparkles,
  Code,
  FileCheck,
  Rocket,
  Cpu,
  Users,
  Target,
  ArrowRight,
  TrendingUp,
  BarChart2
} from "lucide-react";

export default function BaSdlcLifecycleRadar() {
  const [activeStage, setActiveStage] = useState("analysis"); // "planning" | "analysis" | "design" | "construction" | "testing" | "implementation"

  const sdlcStages = [
    {
      id: "planning",
      step: 1,
      name: "1. Planning",
      vnName: "Lập kế hoạch dự án",
      involvement: 85,
      involvementLabel: "Rất cao (Very High)",
      icon: Clock,
      color: "from-amber-500 to-orange-500",
      border: "border-amber-400",
      textColor: "text-amber-400",
      accentBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      baRole:
        "Nghiên cứu tính khả thi (Feasibility Study), xác định phạm vi ban đầu (Project Scope), nhận diện các bên liên quan và phân tích chi phí - lợi ích (Cost-Benefit Analysis).",
      keyDeliverables: "Business Case, Project Charter, Initial Scope Statement",
      examPoint: "BA tham gia ngay từ bước đầu để định hình bài toán kinh doanh trước khi viết dòng code nào."
    },
    {
      id: "analysis",
      step: 2,
      name: "2. Analysis",
      vnName: "Phân tích yêu cầu",
      involvement: 100,
      involvementLabel: "Đỉnh cao (Peak: 100%)",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-400",
      textColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      baRole:
        "Giai đoạn hoàng kim của BA: Tổ chức phỏng vấn, workshop khơi mở nhu cầu (Elicitation), mô hình hóa quy trình (UML, Use Cases, DFD) và soạn thảo tài liệu đặc tả yêu cầu phần mềm (SRS / User Stories).",
      keyDeliverables: "Software Requirements Specification (SRS), Use Case Model, Process Maps",
      examPoint: "Mức độ tham gia đạt 100% — BA là chủ trì cốt lõi định nghĩa sản phẩm."
    },
    {
      id: "design",
      step: 3,
      name: "3. Design",
      vnName: "Thiết kế hệ thống & UI",
      involvement: 60,
      involvementLabel: "Trung bình khá (Medium-High)",
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      border: "border-cyan-400",
      textColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      baRole:
        "Phối hợp với UI/UX Designer và Solution Architect để rà soát wireframe, prototype và kiến trúc dữ liệu, đảm bảo thiết kế phản ánh chính xác các quy tắc nghiệp vụ.",
      keyDeliverables: "UI Wireframes Review, Database Schema Alignment, Traceability Matrix",
      examPoint: "BA đóng vai trò thẩm định thiết kế xem có đáp ứng đúng yêu cầu nghiệp vụ hay không."
    },
    {
      id: "construction",
      step: 4,
      name: "4. Construction",
      vnName: "Lập trình & Phát triển",
      involvement: 40,
      involvementLabel: "Duy trì hỗ trợ (Support)",
      icon: Code,
      color: "from-indigo-500 to-violet-500",
      border: "border-indigo-400",
      textColor: "text-indigo-400",
      accentBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      baRole:
        "Giải đáp thắc mắc của lập trình viên về các trường hợp ngoại lệ (Edge Cases), xử lý các yêu cầu thay đổi (Change Requests) và cập nhật tài liệu SRS kịp thời.",
      keyDeliverables: "Clarification Logs, Change Request Approvals, Sprint Backlog Support",
      examPoint: "BA không lập trình nhưng túc trực để làm rõ logic nghiệp vụ cho lập trình viên."
    },
    {
      id: "testing",
      step: 5,
      name: "5. Testing",
      vnName: "Kiểm thử phần mềm",
      involvement: 70,
      involvementLabel: "Cao (High: UAT Support)",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500",
      border: "border-purple-400",
      textColor: "text-purple-400",
      accentBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      baRole:
        "Hỗ trợ đội QA/QC xây dựng kịch bản kiểm thử, trực tiếp hướng dẫn và đồng hành cùng khách hàng trong quá trình kiểm thử chấp nhận người dùng (User Acceptance Testing - UAT).",
      keyDeliverables: "UAT Test Scenarios, Defect Triaging, Acceptance Sign-off",
      examPoint: "BA bảo đảm sản phẩm hoàn thành thỏa mãn đúng kỳ vọng và tiêu chí nghiệm thu của khách hàng."
    },
    {
      id: "implementation",
      step: 6,
      name: "6. Implementation",
      vnName: "Triển khai & Chuyển giao",
      involvement: 50,
      involvementLabel: "Trung bình (Medium)",
      icon: Rocket,
      color: "from-rose-500 to-red-500",
      border: "border-rose-400",
      textColor: "text-rose-400",
      accentBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      baRole:
        "Soạn thảo tài liệu hướng dẫn sử dụng (User Manual), đào tạo người dùng cuối (End-user Training) và đánh giá mức độ đạt được mục tiêu kinh doanh sau khi Go-Live.",
      keyDeliverables: "User Guide, Training Sessions, Post-Implementation Review",
      examPoint: "Đo lường giá trị thực tế mang lại cho doanh nghiệp sau khi hệ thống đi vào vận hành."
    }
  ];

  const currentStage = sdlcStages.find((s) => s.id === activeStage) || sdlcStages[1];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 via-emerald-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/20 text-white font-bold text-xl">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase tracking-wider">
                SDLC Heatmap Matrix
              </span>
              <span className="text-xs text-slate-400">6 Giai Đoạn Vòng Đời</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              Studio: SDLC Timeline & Heatmap Mức Độ Tham Gia Của BA
            </h2>
          </div>
        </div>

        {/* Global Progress Indicator */}
        <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300 font-medium">Đỉnh cao: </span>
          <span className="font-bold text-emerald-400">Analysis (100%)</span>
        </div>
      </div>

      {/* 6-Stage Timeline Grid: 3 columns x 2 rows on laptop (lg), 6 columns on xl desktop */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block">
            Trục thời gian 6 giai đoạn SDLC (Nhấp chọn từng giai đoạn):
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Bố cục 2 hàng cân đối trên màn hình laptop
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {sdlcStages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? `bg-slate-800/90 ${stage.border} ring-2 ring-emerald-400/50 shadow-xl scale-[1.02]`
                    : "bg-slate-950/80 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${stage.color} text-white shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-black px-2 py-0.5 rounded-md bg-slate-900 text-slate-200 border border-slate-800">
                      {stage.involvement}%
                    </span>
                  </div>

                  {/* Fully visible names without truncate */}
                  <h3 className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                    {stage.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{stage.vnName}</p>
                </div>

                {/* Heatmap Progress Bar */}
                <div className="mt-3.5 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-1">
                    <span>Mức độ tham gia</span>
                    <span className={stage.textColor}>{stage.involvementLabel.split(" ")[0]}</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full bg-gradient-to-r ${stage.color} transition-all duration-500`}
                      style={{ width: `${stage.involvement}%` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Selected Stage Details Panel */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${currentStage.color} text-white shadow-md`}>
              <currentStage.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white">{currentStage.name}</h3>
                <span className="text-xs text-slate-400">({currentStage.vnName})</span>
              </div>
              <span className={`text-xs font-bold ${currentStage.textColor}`}>
                Mức độ tham gia của BA: {currentStage.involvementLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-800">
              Pha {currentStage.step} / 6
            </span>
          </div>
        </div>

        {/* 2-Column Details: Role & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs sm:text-sm">
          {/* Left Column: BA Responsibilities */}
          <div className="lg:col-span-7 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase text-emerald-400 flex items-center gap-1.5">
              <Users className="w-4 h-4" /> Trách nhiệm và vai trò của BA:
            </span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {currentStage.baRole}
            </p>
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed">
              💡 <strong>Trọng tâm thi cử: </strong>
              {currentStage.examPoint}
            </div>
          </div>

          {/* Right Column: Key Deliverables */}
          <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5 mb-2">
                <FileCheck className="w-4 h-4" /> Sản phẩm bàn giao cốt lõi:
              </span>
              <p className="font-mono text-xs text-amber-200/90 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800">
                {currentStage.keyDeliverables}
              </p>
            </div>
            <div className="text-[11px] text-slate-400">
              BA chịu trách nhiệm soạn thảo hoặc rà soát đồng thẩm định các tài liệu này.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
