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
  Target
} from "lucide-react";

export default function BaSdlcLifecycleRadar() {
  const [activeStage, setActiveStage] = useState("analysis"); // "planning" | "analysis" | "design" | "construction" | "testing" | "implementation"

  const sdlcStages = [
    {
      id: "planning",
      name: "1. Planning",
      vnName: "Lập kế hoạch dự án",
      involvement: 85,
      involvementLabel: "Rất cao (Very High)",
      icon: Clock,
      color: "from-amber-500 to-orange-500",
      border: "border-amber-400",
      textColor: "text-amber-400",
      baRole: "Nghiên cứu tính khả thi (Feasibility Study), xác định phạm vi ban đầu (Project Scope), xác định các bên liên quan và phân tích chi phí - lợi ích (Cost-Benefit Analysis).",
      keyDeliverables: "Business Case, Project Charter, Initial Scope Statement"
    },
    {
      id: "analysis",
      name: "2. Analysis",
      vnName: "Phân tích yêu cầu",
      involvement: 100,
      involvementLabel: "Cao nhất (Peak: 100%)",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-400",
      textColor: "text-emerald-400",
      baRole: "Giai đoạn hoàng kim của BA: Tổ chức phỏng vấn, workshop khơi mở nhu cầu (Elicitation), mô hình hóa quy trình (UML, Use Cases, DFD) và soạn thảo tài liệu đặc tả yêu cầu phần mềm (SRS / User Stories).",
      keyDeliverables: "Software Requirements Specification (SRS), Use Case Model, Process Maps"
    },
    {
      id: "design",
      name: "3. Design",
      vnName: "Thiết kế hệ thống & UI",
      involvement: 60,
      involvementLabel: "Trung bình khá (Medium-High)",
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      border: "border-cyan-400",
      textColor: "text-cyan-400",
      baRole: "Phối hợp với UI/UX Designer và Solution Architect để rà soát wireframe, prototype và kiến trúc dữ liệu, đảm bảo thiết kế phản ánh chính xác các quy tắc nghiệp vụ.",
      keyDeliverables: "UI Wireframes Review, Database Schema Alignment, Traceability Matrix"
    },
    {
      id: "construction",
      name: "4. Construction",
      vnName: "Lập trình & Phát triển",
      involvement: 40,
      involvementLabel: "Duy trì hỗ trợ (Support)",
      icon: Code,
      color: "from-indigo-500 to-violet-500",
      border: "border-indigo-400",
      textColor: "text-indigo-400",
      baRole: "Giải đáp thắc mắc của lập trình viên về các trường hợp ngoại lệ (Edge Cases), xử lý các yêu cầu thay đổi (Change Requests) và cập nhật tài liệu SRS kịp thời.",
      keyDeliverables: "Clarification Logs, Change Request Approvals, Sprint Backlog Support"
    },
    {
      id: "testing",
      name: "5. Testing",
      vnName: "Kiểm thử phần mềm",
      involvement: 70,
      involvementLabel: "Cao (High: UAT Support)",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500",
      border: "border-purple-400",
      textColor: "text-purple-400",
      baRole: "Hỗ trợ đội QA/QC xây dựng kịch bản kiểm thử, trực tiếp hướng dẫn và đồng hành cùng khách hàng trong quá trình kiểm thử chấp nhận người dùng (User Acceptance Testing - UAT).",
      keyDeliverables: "UAT Test Scenarios, Defect Triaging, Acceptance Sign-off"
    },
    {
      id: "implementation",
      name: "6. Implementation",
      vnName: "Triển khai & Chuyển giao",
      involvement: 50,
      involvementLabel: "Trung bình (Medium)",
      icon: Rocket,
      color: "from-rose-500 to-red-500",
      border: "border-rose-400",
      textColor: "text-rose-400",
      baRole: "Soạn thảo tài liệu hướng dẫn sử dụng (User Manual), đào tạo người dùng cuối (End-user Training) và đánh giá mức độ đạt được mục tiêu kinh doanh sau khi Go-Live.",
      keyDeliverables: "User Guide, Training Sessions, Post-Implementation Review"
    }
  ];

  const currentStage = sdlcStages.find((s) => s.id === activeStage) || sdlcStages[1];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: SDLC Timeline & Heatmap Mức Độ Tham Gia Của BA
            </h2>
            <p className="text-xs text-slate-400">
              Trực quan hóa mức độ đóng góp và vai trò của Business Analyst xuyên suốt 6 giai đoạn phát triển phần mềm.
            </p>
          </div>
        </div>
      </div>

      {/* 6-Stage Timeline Bar */}
      <div className="mb-6">
        <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3 block">
          Trục thời gian 6 giai đoạn SDLC (Nhấp chọn từng giai đoạn):
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {sdlcStages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? `bg-slate-800 ${stage.border} ring-2 ring-emerald-400/40 shadow-lg scale-105`
                    : "bg-slate-950/70 border-slate-800 hover:bg-slate-800/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <Icon className={`w-4 h-4 ${stage.textColor}`} />
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-300">
                      {stage.involvement}%
                    </span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-white truncate">{stage.name}</h3>
                  <p className="text-[11px] text-slate-400 truncate">{stage.vnName}</p>
                </div>

                {/* Mini Heatmap Progress Bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
                  <div
                    className={`h-full bg-gradient-to-r ${stage.color}`}
                    style={{ width: `${stage.involvement}%` }}
                  ></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Focused Stage Card */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${currentStage.color} text-white shadow-md`}>
              <currentStage.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-extrabold text-white">{currentStage.name}</span>
                <span className="text-xs text-slate-400">({currentStage.vnName})</span>
              </div>
              <span className={`text-xs font-semibold ${currentStage.textColor}`}>
                Mức độ tham gia của BA: {currentStage.involvementLabel} ({currentStage.involvement}%)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              Giai đoạn {currentStage.name.split(".")[0]} / 6
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-xs sm:text-sm">
          <div className="md:col-span-8 space-y-3">
            <div>
              <span className="text-slate-400 font-bold uppercase text-[11px]">Trọng tâm công việc của BA trong giai đoạn này:</span>
              <p className="text-slate-200 mt-1 leading-relaxed text-xs sm:text-sm font-medium">
                {currentStage.baRole}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-emerald-400 font-bold uppercase text-[11px] block mb-1">
                Sản phẩm chuyển giao (Deliverables):
              </span>
              <p className="text-slate-200 font-mono text-xs leading-relaxed">
                {currentStage.keyDeliverables}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap Takeaway Note */}
      <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-950 border border-emerald-500/30 text-xs text-slate-300 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Flame className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Quy tắc bất biến:</strong> BA tham gia với mật độ <strong>cao nhất (100%) tại Planning và Analysis</strong>, nhưng tuyệt đối không được rời bỏ dự án mà vẫn tiếp tục đồng hành hỗ trợ xuyên suốt Design, Construction, Testing và Go-Live.
          </span>
        </div>
      </div>
    </div>
  );
}
