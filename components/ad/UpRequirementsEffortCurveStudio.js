"use client";
import React, { useState } from "react";
import { 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  FileText, 
  BookOpen, 
  Sparkles, 
  Workflow, 
  Box, 
  Cpu, 
  CheckSquare, 
  ShieldCheck,
  Info
} from "lucide-react";

const DELIVERABLES = [
  {
    id: "deliv-1",
    title: "Use-Case Diagram(s)",
    role: "Bản đồ trực quan của actors và system functions.",
    detail: "Đóng vai trò 'mục lục trực quan' thể hiện ranh giới hệ thống (System Boundary), các tác nhân ngoài và danh sách chức năng hệ thống cung cấp.",
    practicalTip: "Cung cấp cái nhìn toàn cảnh (Bird's-eye view) cho cả lãnh đạo và đội ngũ phát triển."
  },
  {
    id: "deliv-2",
    title: "Use-Case Descriptions",
    role: "Mô tả hành vi ở mức Brief, Casual hoặc Fully-Dressed.",
    detail: "Chi tiết hóa kịch bản tương tác từng bước (Happy Path và Alternate/Exception Flows), tiền điều kiện (Preconditions) và cam kết sau cùng (Postconditions).",
    practicalTip: "Là tài liệu 'sống' làm nền tảng cho lập trình viên code logic và tester viết kịch bản test case."
  },
  {
    id: "deliv-3",
    title: "Actor Catalog",
    role: "Danh mục các role và goals của chúng.",
    detail: "Liệt kê đầy đủ mọi vai trò tương tác với hệ thống (Human Users, External Systems, Hardware Devices), kèm mục tiêu (Goals) và quyền hạn của từng tác nhân.",
    practicalTip: "Tránh bỏ sót các vai trò gián tiếp hoặc các hệ thống bên thứ ba cần tích hợp API."
  },
  {
    id: "deliv-4",
    title: "Business Rules Glossary",
    role: "Danh mục business rules có mã, có thể trace từ use case.",
    detail: "Quy chuẩn hóa các quy tắc chính sách nghiệp vụ (VD: BR-01: 'Chỉ sinh viên nộp đủ học phí mới được đăng ký môn học'), đánh mã định danh để dễ dàng truy vết (Traceability).",
    practicalTip: "Tách bạch logic nghiệp vụ khỏi use case giúp bảo trì và cập nhật chính sách dễ dàng khi doanh nghiệp thay đổi luật."
  },
  {
    id: "deliv-5",
    title: "Validated Baseline Scope",
    role: "Scope ban đầu đã được xác nhận/điều chỉnh sau discovery.",
    detail: "Sau quá trình khám phá sâu, mốc phạm vi ban đầu (Baseline) được cập nhật lại chuẩn xác, loại bỏ các giả định sai lầm và được các bên ký duyệt lại (Re-baselining).",
    practicalTip: "Là chốt chặn an toàn bảo vệ dự án trước nguy cơ phình to phạm vi ngoài tầm kiểm soát."
  }
];

// Effort Distribution across 4 Unified Process Phases (%)
const UP_PHASES = [
  {
    phase: "Inception",
    name: "Khởi đầu",
    description: "Định hình tầm nhìn, thiết lập baseline và làm rõ phạm vi sơ bộ",
    requirementsEffort: 75,
    analysisDesignEffort: 20,
    implementationEffort: 5,
    testEffort: 5,
    isDiscoveryPeak: true
  },
  {
    phase: "Elaboration",
    name: "Tinh chế",
    description: "Làm rõ kiến trúc cốt lõi, chi tiết hóa use cases trọng yếu và xử lý rủi ro cao",
    requirementsEffort: 90, // Discovery Peak
    analysisDesignEffort: 70,
    implementationEffort: 30,
    testEffort: 25,
    isDiscoveryPeak: true
  },
  {
    phase: "Construction",
    name: "Xây dựng",
    description: "Lập trình, hiện thực hóa toàn bộ các tính năng còn lại và tích hợp hệ thống",
    requirementsEffort: 20,
    analysisDesignEffort: 35,
    implementationEffort: 90,
    testEffort: 75,
    isDiscoveryPeak: false
  },
  {
    phase: "Transition",
    name: "Chuyển giao",
    description: "Triển khai thực tế, đào tạo người dùng, sửa lỗi beta và nghiệm thu sản phẩm",
    requirementsEffort: 5,
    analysisDesignEffort: 5,
    implementationEffort: 20,
    testEffort: 80,
    isDiscoveryPeak: false
  }
];

export default function UpRequirementsEffortCurveStudio() {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(1); // Default to Elaboration (Discovery peak)
  const [selectedDeliverableId, setSelectedDeliverableId] = useState("deliv-1");

  const currentPhase = UP_PHASES[selectedPhaseIndex];
  const currentDeliverable = DELIVERABLES.find(d => d.id === selectedDeliverableId) || DELIVERABLES[0];

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-emerald-50/30 p-6 md:p-8 shadow-xl shadow-emerald-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-950 border border-emerald-300/60 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            Mục 2.4 & 2.5 — Unified Process & Deliverables Matrix
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Vị trí Discovery trong Unified Process & 5 Sản phẩm Bàn giao
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Trong Unified Process, nỗ lực cho <strong>Requirements (Discovery Phase)</strong> đạt đỉnh cao trào ở pha <strong>Inception và Early Elaboration</strong>, trong khi các công việc lập trình và kiểm thử lúc này còn rất nhẹ.
          </p>
        </div>

        {/* Phase Pill Selector */}
        <div className="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          {UP_PHASES.map((p, idx) => (
            <button
              key={p.phase}
              onClick={() => setSelectedPhaseIndex(idx)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedPhaseIndex === idx
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {p.phase}
            </button>
          ))}
        </div>
      </div>

      {/* Part 1: Effort Curve Simulator across 4 UP Phases */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500">
            1. Phân bổ Nỗ lực các Luồng Công việc (Workflows Effort) tại Pha: <strong className="text-stone-900">{currentPhase.phase} ({currentPhase.name})</strong>
          </span>
          {currentPhase.isDiscoveryPeak && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 animate-pulse">
              ⚡ ĐỈNH CAO TRÀO CỦA DISCOVERY (REQUIREMENTS)
            </span>
          )}
        </div>

        <p className="text-xs text-stone-600">
          {currentPhase.description}.
        </p>

        {/* Bar charts for 4 workflows */}
        <div className="space-y-3 bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
          {/* Requirements Bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-emerald-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Requirements (Yêu cầu / Discovery Phase)
              </span>
              <span className="font-mono text-emerald-700">{currentPhase.requirementsEffort}%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-300"
                style={{ width: `${currentPhase.requirementsEffort}%` }}
              />
            </div>
          </div>

          {/* Analysis & Design Bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-blue-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Analysis & Design (Phân tích & Thiết kế)
              </span>
              <span className="font-mono text-blue-700">{currentPhase.analysisDesignEffort}%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${currentPhase.analysisDesignEffort}%` }}
              />
            </div>
          </div>

          {/* Implementation Bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-amber-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                Implementation (Lập trình / Viết mã)
              </span>
              <span className="font-mono text-amber-700">{currentPhase.implementationEffort}%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-300"
                style={{ width: `${currentPhase.implementationEffort}%` }}
              />
            </div>
          </div>

          {/* Testing Bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-purple-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                Testing & Quality Assurance (Kiểm thử)
              </span>
              <span className="font-mono text-purple-700">{currentPhase.testEffort}%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-300"
                style={{ width: `${currentPhase.testEffort}%` }}
              />
            </div>
          </div>
        </div>

        {/* Exam Tip Callout */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900">Mẹo đề thi trắc nghiệm:</strong> Khi đề thi hỏi: <em>"Trong Unified Process, nỗ lực thu thập và phân tích yêu cầu (Requirements Effort) tập trung mạnh nhất ở giai đoạn nào?"</em> ➔ Câu trả lời chính xác luôn là <strong>Inception và Early Elaboration</strong>!
          </div>
        </div>
      </div>

      {/* Part 2: 5 Deliverables Matrix */}
      <div className="mt-8 pt-6 border-t border-emerald-200/60 space-y-4">
        <h4 className="text-xs font-black uppercase tracking-wider text-stone-500">
          2. Ma trận 5 Sản phẩm Bàn giao Cốt lõi (Deliverables of Discovery Phase)
        </h4>

        {/* Deliverables Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {DELIVERABLES.map(d => {
            const isSelected = selectedDeliverableId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDeliverableId(d.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-md"
                    : "bg-white/70 hover:bg-white border-stone-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                    Deliverable #{d.id.split("-")[1]}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
                <h5 className="font-bold text-xs text-stone-900">{d.title}</h5>
                <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                  {d.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Deliverable Deep Dive */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="font-black text-sm text-stone-900">{currentDeliverable.title}</span>
            <span className="text-xs text-emerald-800 font-semibold">— {currentDeliverable.role}</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {currentDeliverable.detail}
          </p>
          <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
            <strong>💡 Giá trị thực chiến:</strong> {currentDeliverable.practicalTip}
          </div>
        </div>
      </div>
    </div>
  );
}
