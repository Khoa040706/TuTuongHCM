"use client";
import React, { useState } from "react";
import { 
  Layers, 
  Clock, 
  Search, 
  PenTool, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Sparkles,
  Award
} from "lucide-react";

export default function SdlcPhasesDeepDiveExplorer() {
  const [selectedPhase, setSelectedPhase] = useState("planning");

  const phasesData = {
    planning: {
      id: "planning",
      name: "Phase 1: Planning (Lập kế hoạch)",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-400",
      purpose: "Xác định rõ lý do cần xây dựng hệ thống, khảo sát khả thi và lập phương án nguồn lực dự án.",
      activities: [
        "Identify system problem or opportunity (Nhận diện vấn đề/cơ hội)",
        "Confirm project feasibility (Thẩm định 3 chiều: Kỹ thuật, Kinh tế, Tổ chức)",
        "Produce project charter & baseline schedule (Lập hiến chương dự án & tiến độ)",
        "Staff the project and acquire funding (Bố trí nhân sự và phê duyệt ngân sách)"
      ],
      deliverables: [
        "Project Charter (Hiến chương dự án được ký duyệt)",
        "Feasibility Study Report (Báo cáo nghiên cứu khả thi)",
        "Preliminary Project Workplan & Budget (Kế hoạch làm việc & Ngân sách ban đầu)"
      ]
    },
    analysis: {
      id: "analysis",
      name: "Phase 2: Analysis (Phân tích yêu cầu)",
      icon: Search,
      color: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-400",
      purpose: "Thu thập chi tiết yêu cầu, mô hình hóa quy trình hiện tại (AS-IS) và tương lai (TO-BE).",
      activities: [
        "Gather detailed information (Phỏng vấn, khảo sát, JAD, quan sát)",
        "Define system requirements (Đặc tả Functional & Non-functional requirements)",
        "Build business models & UML diagrams (Activity Diagram, Use Case Diagram)",
        "Prioritize requirements & review with stakeholders (Xác định mức ưu tiên)"
      ],
      deliverables: [
        "System Requirements Specification - SRS (Tài liệu đặc tả yêu cầu hệ thống)",
        "Business Process Models (Sơ đồ quy trình AS-IS và TO-BE)",
        "Use Case Models & Domain Class Diagrams (Mô hình ca sử dụng & lớp khái niệm)"
      ]
    },
    design: {
      id: "design",
      name: "Phase 3: Design (Thiết kế hệ thống)",
      icon: PenTool,
      color: "from-cyan-500 to-blue-600",
      accentBorder: "border-cyan-400",
      purpose: "Đặc tả chi tiết giải pháp kỹ thuật: phần cứng, mạng, CSDL, kiến trúc và giao diện người dùng.",
      activities: [
        "Design application architecture (Client-Server, Cloud, Microservices)",
        "Design database & data structures (ERD, Relational Schema chuẩn hóa)",
        "Design system interfaces & UI/UX (Wireframes, Mockups, APIs)",
        "Design system security and system controls (Bảo mật, phân quyền, kiểm toán)"
      ],
      deliverables: [
        "System Architecture Blueprint (Bản vẽ kiến trúc kỹ thuật hệ thống)",
        "Database Schema Specification (Lược đồ cơ sở dữ liệu vật lý)",
        "UI/UX Prototypes & API Specifications (Bản mẫu giao diện & hợp đồng API)"
      ]
    },
    implementation: {
      id: "implementation",
      name: "Phase 4: Implementation (Xây dựng & Triển khai)",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-400",
      purpose: "Hiện thực hóa thiết kế thành phần mềm chạy được, kiểm thử nghiêm ngặt và đưa vào vận hành.",
      activities: [
        "Construct software components (Lập trình mã nguồn Frontend, Backend)",
        "Verify and test (Unit test, Integration test, System test, UAT)",
        "Convert data & train users (Chuyển đổi dữ liệu cũ, đào tạo người dùng)",
        "Install and deploy (Đưa hệ thống lên môi trường Production Go-Live)"
      ],
      deliverables: [
        "Working, tested software (Phần mềm hoàn chỉnh đã qua kiểm thử)",
        "Test scripts, test results & bug reports (Kịch bản và báo cáo nghiệm thu)",
        "User manuals & training materials (Tài liệu hướng dẫn sử dụng & đào tạo)"
      ]
    },
    support: {
      id: "support",
      name: "Phase 5: Support (Hỗ trợ & Bảo trì)",
      icon: Wrench,
      color: "from-rose-500 to-red-600",
      accentBorder: "border-rose-400",
      purpose: "Duy trì hệ thống hoạt động tin cậy, hỗ trợ vận hành và liên tục cải tiến theo nhu cầu thực tế.",
      activities: [
        "Provide user support & help-desk (Hỗ trợ người dùng và xử lý sự cố)",
        "Monitor performance, fix defects (Giám sát tải và sửa lỗi phát sinh)",
        "Implement enhancement requests (Thực hiện các yêu cầu nâng cấp tính năng)",
        "Plan for eventual replacement (Lên kế hoạch thay thế hệ thống khi già cỗi)"
      ],
      deliverables: [
        "Change requests / Maintenance logs (Yêu cầu thay đổi & Nhật ký bảo trì)",
        "Updated documentation (Tài liệu hệ thống cập nhật mới nhất)",
        "System enhancements and patches (Các bản vá lỗi và bản phát hành mới)"
      ]
    }
  };

  const current = phasesData[selectedPhase];

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
              Studio: Bảng Tra Cứu Toàn Diện 5 Pha SDLC (Activities & Deliverables)
            </h2>
            <p className="text-xs text-slate-400">
              Tra cứu nhanh mục tiêu, hoạt động chính và bộ sản phẩm chuyển giao chuẩn mực của từng giai đoạn.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Phase Selector Buttons (Responsive: 3 cols on Laptop, 5 on XL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
        {Object.entries(phasesData).map(([key, item]) => {
          const isSelected = selectedPhase === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedPhase(key)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-purple-400/50 shadow-xl scale-[1.02]`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow mb-2.5 w-fit`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-white">{item.name.split(" (")[0]}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.name.split(" (")[1]?.replace(")", "")}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detailed Card */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{current.purpose}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Key Activities Bento */}
            <div className="md:col-span-7 p-4.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
              <span className="text-xs font-extrabold uppercase text-cyan-400 block tracking-wider">
                Các Hoạt Động Chính (Key Activities):
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Deliverables Bento */}
            <div className="md:col-span-5 p-4.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase text-amber-400 block mb-2.5 tracking-wider">
                  Sản Phẩm Chuyển Giao (Key Deliverables):
                </span>
                <ul className="space-y-2 text-xs text-slate-200">
                  {current.deliverables.map((del, idx) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-amber-300/90 font-medium flex items-start gap-2 leading-relaxed">
                      <span className="shrink-0">📄</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
