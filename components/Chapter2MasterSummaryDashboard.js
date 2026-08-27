"use client";
import React, { useState } from "react";
import { 
  Sparkles, 
  Workflow, 
  Layers, 
  Building2, 
  ShieldCheck, 
  DoorOpen, 
  CheckCircle2, 
  ArrowRight,
  Target,
  FileCheck2
} from "lucide-react";

export default function Chapter2MasterSummaryDashboard() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: "01",
      title: "SDLC — Umbrella Concept",
      subtitle: "Khái niệm bao trùm mọi quy trình",
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
      accentBorder: "border-blue-400",
      keyPoints: [
        "SDLC định nghĩa tất cả các giai đoạn (phases) và hoạt động cần thiết để phát triển hệ thống.",
        "Methodology (Phương pháp luận) là bản hướng dẫn cụ thể cách thức thực thi các phase của SDLC.",
        "Mọi Methodology (Waterfall, Agile, UP) đều phải đi qua các pha cốt lõi của SDLC."
      ]
    },
    {
      num: "02",
      title: "Predictive vs Adaptive SDLC",
      subtitle: "Hai trường phái tổ chức vòng đời",
      icon: Workflow,
      color: "from-cyan-600 to-blue-600",
      accentBorder: "border-cyan-400",
      keyPoints: [
        "Predictive (Thác nước): Lập kế hoạch Up-Front cố định, yêu cầu rõ ràng, kiểm soát thay đổi nghiêm ngặt.",
        "Adaptive (Agile/UP): Chào đón thay đổi, lặp lại qua các Iterations ngắn (1-4 tuần), bàn giao liên tục.",
        "Tiêu chí chọn: Dựa vào Độ rõ ràng yêu cầu (Clarity), Quy mô/Rủi ro dự án và Văn hóa đội ngũ."
      ]
    },
    {
      num: "03",
      title: "5 Giai Đoạn Vàng SDLC",
      subtitle: "5 Câu hỏi định hướng sự sống còn",
      icon: Target,
      color: "from-emerald-600 to-teal-600",
      accentBorder: "border-emerald-400",
      keyPoints: [
        "Phase 1 Planning: 'Why build it?' (Xác định giá trị và tính khả thi).",
        "Phase 2 Analysis: 'What is needed?' (Hiểu và mô hình hóa nhu cầu nghiệp vụ).",
        "Phase 3 Design: 'How will it work?' (Thiết kế kiến trúc, CSDL và giao diện UI/UX).",
        "Phase 4 Implementation: 'Build & Deploy' (Lập trình, kiểm thử và bàn giao Go-Live).",
        "Phase 5 Support: 'Keep it running' (Bảo trì, sửa lỗi và nâng cấp tính năng)."
      ]
    },
    {
      num: "04",
      title: "Business Modeling & Initiation",
      subtitle: "Hiểu doanh nghiệp & Cổng phê duyệt",
      icon: DoorOpen,
      color: "from-amber-600 to-orange-600",
      accentBorder: "border-amber-400",
      keyPoints: [
        "Model business TRƯỚC KHI model phần mềm để hiểu rõ ngữ cảnh, phát hiện điểm nghẽn và xác định ranh giới Scope.",
        "Khái niệm vàng: Business Actor [A] ngoài, Business Worker [W] trong, Event [E] kích hoạt, Process [P] chuỗi giá trị.",
        "Initiation Phase đóng vai trò Cổng Gatekeeper (Approve/Reject) thông qua Feasibility Analysis 3 chiều: Kỹ thuật, Kinh tế (ROI), Tổ chức."
      ]
    },
    {
      num: "05",
      title: "Business Use Cases & Activity Diagrams",
      subtitle: "2 Công cụ UML nắm bắt mô hình nghiệp vụ",
      icon: FileCheck2,
      color: "from-purple-600 to-pink-600",
      accentBorder: "border-purple-400",
      keyPoints: [
        "Business Use Case (Black-Box): Góc nhìn từ bên ngoài (Actor's-eye view) về dịch vụ nhận được từ doanh nghiệp (ký hiệu gạch chéo /).",
        "Activity Diagram (Swimlanes): Góc nhìn vận hành nội bộ (Internal view) chi tiết hóa trình tự các bước, điểm rẽ nhánh Decision và trách nhiệm phòng ban.",
        "Tài liệu hóa cả AS-IS (Hiện trạng) và TO-BE (Đề xuất) làm cơ sở thiết kế phần mềm."
      ]
    }
  ];

  const current = pillars[activePillar];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Dashboard: 5 Trụ Cột Tri Thức Cốt Lõi Của Chapter 2
            </h2>
            <p className="text-xs text-slate-400">
              Tổng kết toàn diện toàn bộ bức tranh kiến thức về Vòng đời phát triển hệ thống & Mô hình hóa nghiệp vụ.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Pillars Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-6">
        {pillars.map((item, idx) => {
          const isSelected = activePillar === idx;
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => setActivePillar(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-amber-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-black text-slate-400">#{item.num}</span>
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-white">{item.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{item.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Content Showcase */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">Trụ cột #{current.num}</span>
              <h3 className="text-base sm:text-lg font-black text-white">{current.title}</h3>
              <p className="text-xs text-slate-400">{current.subtitle}</p>
            </div>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-extrabold uppercase text-cyan-400 block">
              Các Điểm Ghi Nhớ Cốt Tử (Key Takeaways):
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {current.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
