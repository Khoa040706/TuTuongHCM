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
  Sparkles, 
  ArrowRight, 
  Boxes 
} from "lucide-react";

export default function SdlcPhasesDeepDiveExplorer() {
  const [selectedPhase, setSelectedPhase] = useState("planning");

  const phasesData = {
    planning: {
      name: "Phase 1: Planning (Lập kế hoạch)",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-400",
      purpose: "Xác định giá trị kinh doanh của hệ thống & đánh giá tính khả thi để ra quyết định đầu tư.",
      activities: [
        "Investigate business need/opportunity (Điều tra bài toán hoặc cơ hội mới)",
        "Define initial scope of the system (Xác định phạm vi ranh giới ban đầu)",
        "Develop schedule & staffing plan (Lập kế hoạch tiến độ và nhân sự)",
        "Perform feasibility study (Thẩm định khả thi Kỹ thuật, Kinh tế, Vận hành)"
      ],
      deliverables: [
        "System request (Phiếu yêu cầu hệ thống)",
        "Feasibility study (Báo cáo nghiên cứu tính khả thi)",
        "Project schedule / Project charter (Kế hoạch tiến độ & Điều lệ dự án)"
      ]
    },
    analysis: {
      name: "Phase 2: Analysis (Phân tích yêu cầu)",
      icon: Search,
      color: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-400",
      purpose: "Hiểu & tài liệu hóa những gì nghiệp vụ kinh doanh cần ở hệ thống mới.",
      activities: [
        "Gather & analyze business requirements (Thu thập và phân tích yêu cầu)",
        "Model current/required business processes (Mô hình hóa quy trình AS-IS & TO-BE)",
        "Build use case model and domain model (Xây dựng Use Case & Domain Model)",
        "Verify requirements with users (Xác thực yêu cầu với người dùng)"
      ],
      deliverables: [
        "Business requirements document (BRD / SRS)",
        "Use case model (Sơ đồ & Kịch bản Use Case)",
        "Business process / Activity models (Mô hình quy trình nghiệp vụ)"
      ]
    },
    design: {
      name: "Phase 3: Design (Thiết kế hệ thống)",
      icon: PenTool,
      color: "from-cyan-500 to-blue-600",
      accentBorder: "border-cyan-400",
      purpose: "Quyết định cách hệ thống sẽ được xây dựng để thỏa mãn đầy đủ các yêu cầu đã phân tích.",
      activities: [
        "Design system architecture (Thiết kế kiến trúc hệ thống tổng thể)",
        "Design database & user interface (Thiết kế CSDL ERD & Giao diện UI/UX)",
        "Design classes & program logic (Thiết kế Class Diagram & Giải thuật logic)",
        "Refine models with technology details (Bổ sung chi tiết công nghệ vào mô hình)"
      ],
      deliverables: [
        "System design specification (Hồ sơ đặc tả thiết kế hệ thống)",
        "Architecture & database design (Bản vẽ kiến trúc & Lược đồ CSDL)",
        "Interface & class design documents (Hồ sơ thiết kế giao diện & Lớp đối tượng)"
      ]
    },
    implementation: {
      name: "Phase 4: Implementation (Xây dựng & Triển khai)",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-400",
      purpose: "Xây dựng, kiểm thử, bàn giao hệ thống hoạt động thực tế cho doanh nghiệp.",
      activities: [
        "Program/configure hệ thống (Lập trình mã nguồn và cấu hình môi trường)",
        "Unit, integration, system testing (Kiểm thử đơn vị, tích hợp và hệ thống)",
        "Convert data & train users (Chuyển đổi dữ liệu và đào tạo người dùng)",
        "Deploy hệ thống into production (Triển khai chính thức lên Production)"
      ],
      deliverables: [
        "Working, tested system (Phần mềm hoàn chỉnh đã qua kiểm thử)",
        "Test plans and results (Kế hoạch và biên bản kiểm thử)",
        "User documentation and training materials (Sổ tay hướng dẫn & Tài liệu đào tạo)"
      ]
    },
    support: {
      name: "Phase 5: Support (Hỗ trợ & Bảo trì)",
      icon: Wrench,
      color: "from-rose-500 to-red-600",
      accentBorder: "border-rose-400",
      purpose: "Duy trì hệ thống hoạt động hiệu quả & phát triển thêm theo nhu cầu business thay đổi.",
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

      {/* 5 Phase Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {Object.entries(phasesData).map(([key, item]) => {
          const isSelected = selectedPhase === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedPhase(key)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-purple-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow mb-2 w-fit`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-white">{item.name.split(" (")[0]}</h3>
                <p className="text-[10px] text-slate-400 mt-0.5">{item.name.split(" (")[1]?.replace(")", "")}</p>
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
              <p className="text-xs text-slate-300 mt-0.5">{current.purpose}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Key Activities */}
            <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase text-cyan-400 block">
                Các Hoạt Động Chính (Key Activities):
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase text-amber-400 block mb-2">
                  Sản Phẩm Chuyển Giao (Key Deliverables):
                </span>
                <ul className="space-y-2 text-xs text-slate-200 font-mono">
                  {current.deliverables.map((del, idx) => (
                    <li key={idx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-amber-300">
                      📄 {del}
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
