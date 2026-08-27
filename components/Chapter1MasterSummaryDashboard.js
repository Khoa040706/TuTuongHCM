"use client";
import React, { useState } from "react";
import { 
  Compass, 
  Layers, 
  Cpu, 
  Users, 
  Workflow, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  BarChart3,
  Flame
} from "lucide-react";

export default function Chapter1MasterSummaryDashboard() {
  const [activeTab, setActiveTab] = useState("all");

  const pillars = [
    {
      id: "is",
      title: "Trụ Cột 1: Information Systems",
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      border: "border-blue-400",
      accentBg: "bg-blue-950/40",
      coreIdea: "Sự cộng hưởng giữa 5 thành phần (Hardware, Software, Data, People, Procedures) biến Dữ liệu thô (Data) thành Tri thức (Knowledge).",
      highlights: [
        "Mô hình xử lý cơ bản: Input ➔ Process ➔ Output cùng Feedback Loop phản hồi.",
        "Chuỗi giá trị DIKW: Data ➔ Information ➔ Knowledge ➔ Wisdom.",
        "Phân tầng quản trị 3 cấp: ESS (Chiến lược cấp cao) ➔ MIS/DSS (Chiến thuật trung cấp) ➔ TPS (Tác nghiệp cơ sở)."
      ]
    },
    {
      id: "ba",
      title: "Trụ Cột 2: Role of the (IT) BA",
      icon: Users,
      color: "from-purple-600 to-pink-600",
      border: "border-purple-400",
      accentBg: "bg-purple-950/40",
      coreIdea: "BA là Cầu nối chiến lược (The Bridge: Business ➔ BA ➔ IT) chuyển đổi nhu cầu kinh doanh thành đặc tả phần mềm chuẩn mực.",
      highlights: [
        "5 Trách nhiệm cốt lõi: Elicit ➔ Analyze ➔ Document ➔ Communicate ➔ Validate.",
        "Bộ công cụ 4 thành phần: Methodology (Khung) + Models (Vẽ) + Techniques (Kỹ thuật) + Tools (CASE tools).",
        "Tham gia sâu rộng vào toàn bộ SDLC với mật độ cao nhất tại Planning & Analysis (100%)."
      ]
    },
    {
      id: "sdlc",
      title: "Trụ Cột 3: Building Systems (SDLC & UP)",
      icon: Workflow,
      color: "from-emerald-600 to-teal-600",
      border: "border-emerald-400",
      accentBg: "bg-emerald-950/40",
      coreIdea: "Xây dựng hệ thống qua vòng đời 5 giai đoạn SDLC và phương pháp luận lặp tăng dần Unified Process (UP) hướng Use Case.",
      highlights: [
        "SDLC 5 giai đoạn: Planning (Feasibility Study) ➔ Analysis ➔ Design ➔ Implementation ➔ Support (Feedback Loop).",
        "Unified Process (UP) 4 pha: Inception ➔ Elaboration (Baseline kiến trúc) ➔ Construction ➔ Transition.",
        "Nguyên lý Iterative & Incremental: Giảm thiểu rủi ro sớm và xuất bản Working Increments sau mỗi vòng lặp."
      ]
    }
  ];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Master Dashboard: 3 Trụ Cột Tri Thức Chapter 1
            </h2>
            <p className="text-xs text-slate-400">
              Tổng kết toàn diện kiến thức nền tảng: Hệ thống thông tin, Vai trò Business Analyst và Quy trình xây dựng phần mềm SDLC/UP.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className={`p-5 rounded-2xl border ${p.border} ${p.accentBg} flex flex-col justify-between space-y-4 shadow-lg`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${p.color} text-white shadow`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300">
                    {p.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-3">
                  {p.coreIdea}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {p.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Flame className="w-4 h-4 text-amber-400" />
          <span><b>Công thức thành công:</b> IS (Hệ thống) + BA (Cầu nối) + SDLC/UP (Quy trình chuẩn) = Dự án phần mềm thành công vượt trội.</span>
        </div>
        <span className="font-mono text-cyan-400 font-bold bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
          Chapter 1: 100% Complete
        </span>
      </div>
    </div>
  );
}
