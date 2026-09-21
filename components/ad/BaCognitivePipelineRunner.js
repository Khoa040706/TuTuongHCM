"use client";
import React, { useState } from "react";
import { 
  Workflow, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  RotateCcw, 
  Play, 
  ArrowDown, 
  Target, 
  FileText, 
  Layers, 
  Search,
  Check
} from "lucide-react";

const STAGES = [
  {
    step: 1,
    title: "1. Business Process",
    subtitle: "Khảo sát quy trình nghiệp vụ thực tế",
    input: "Hiện trạng vận hành doanh nghiệp, sổ tay quy trình SOP.",
    action: "Nghiên cứu cách con người và các phòng ban phối hợp làm việc hàng ngày.",
    output: "Business Process Understanding & Scope Statement.",
    examTip: "Luôn bắt đầu từ quy trình thế giới thực, không bắt đầu từ giao diện hay CSDL."
  },
  {
    step: 2,
    title: "2. Discover Business Events",
    subtitle: "Khám phá các sự kiện nghiệp vụ",
    input: "Quy trình nghiệp vụ đã hiểu rõ.",
    action: "Đặt câu hỏi lăng kính BA: 'Chuyện gì xảy ra ngoài đời mà hệ thống phải phản hồi?'",
    output: "Raw Events List (Danh mục sự kiện thô chưa phân loại).",
    examTip: "Áp dụng Event-Driven Thinking thay vì hỏi 'Phần mềm làm được những gì?'."
  },
  {
    step: 3,
    title: "3. Classify Events",
    subtitle: "Phân loại 3 nhóm: External, Temporal, State",
    input: "Danh mục sự kiện thô.",
    action: "Gán nhãn từng sự kiện vào: External (Actor bấm), Temporal (Đến giờ), State (Chạm ngưỡng).",
    output: "Categorized Events List.",
    examTip: "Bắt buộc kiểm tra đủ cả 3 loại để không sót Temporal và State Events."
  },
  {
    step: 4,
    title: "4. Build Event Table",
    subtitle: "Lập Bảng phân tích sự kiện 6 cột chuẩn",
    input: "Categorized Events List.",
    action: "Điền đủ 6 cột: Event | Trigger | Source | Use Case | Response | Destination.",
    output: "Completed Master Event Table.",
    examTip: "Mạch tư duy: Event ➔ Trigger ➔ Source ➔ Use Case ➔ Response ➔ Destination."
  },
  {
    step: 5,
    title: "5. Identify Sources / Actors",
    subtitle: "Nhận diện tác nhân & nguồn khởi phát",
    input: "Cột Source và Destination trong Event Table.",
    action: "Phân loại 4 nhóm Actor: Primary Business, Primary System, External Server, External Receiver.",
    output: "Actor Catalog (Bản danh mục tác nhân và vai trò).",
    examTip: "Actor là Role, không phải người cụ thể. Tuân thủ quy tắc Avoid Over-splitting!"
  },
  {
    step: 6,
    title: "6. 1 Event ➔ 1 System Use Case",
    subtitle: "Ánh xạ tỷ lệ vàng một-đối-một",
    input: "Danh mục Business Events trong Event Table.",
    action: "Mỗi sự kiện ánh xạ sang đúng một System Use Case tương ứng.",
    output: "Draft System Use Case List.",
    examTip: "Định luật 1:1 bảo đảm danh mục Use Case đầy đủ, không trùng lặp và bám sát nghiệp vụ."
  },
  {
    step: 7,
    title: "7. Name Use Cases",
    subtitle: "Đặt tên chuẩn Verb + Noun Phrase",
    input: "Draft System Use Case List.",
    action: "Áp dụng 4 quy tắc: Verb + Noun, Hướng mục tiêu (Goal-driven), Ngắn gọn 2-4 từ, Độc lập công nghệ.",
    output: "Standardized Use Case Names.",
    examTip: "Nên: 'Pay Invoice'; Không nên: 'Click Submit Button' hoặc 'Payment Screen'."
  },
  {
    step: 8,
    title: "8. Link Actors ⟷ Use Cases",
    subtitle: "Xác lập System Boundary & Association Lines",
    input: "Actors và Standardized Use Cases.",
    action: "Vẽ System Boundary. Đặt Actor bên ngoài, Use Case bên trong, nối bằng đường nét liền.",
    output: "Initial Use Case Diagram Baseline.",
    examTip: "Khung System Boundary là công cụ kiểm soát Scope, chống Scope Creep."
  },
  {
    step: 9,
    title: "9. Organize with Relationships",
    subtitle: "Tổ chức quan hệ <<include>>, <<extend>>, Generalization",
    input: "Use Case Diagram Baseline.",
    action: "Trích xuất hành vi dùng chung qua <<include>>, mở rộng tùy chọn qua <<extend>>, kế thừa qua Generalization.",
    output: "Organized System Use Case Diagram.",
    examTip: "Nhớ hướng mũi tên: <<include>> trỏ sang Included UC; <<extend>> trỏ ngược về Base UC!"
  },
  {
    step: 10,
    title: "10. Write Use Case Descriptions",
    subtitle: "Soạn thảo kịch bản Brief / Fully Dressed",
    input: "Organized Use Case Diagram.",
    action: "Viết kịch bản Main Success Scenario và các Alternate/Exception Flows (ví dụ: luồng lỗi 3a).",
    output: "Use Case Specifications (Đặc tả Use Case chi tiết).",
    examTip: "Brief dùng trong Inception; Fully Dressed chuẩn bị cho các Use Case rủi ro cao trong Elaboration."
  },
  {
    step: 11,
    title: "11. Validate with Stakeholders",
    subtitle: "Họp thẩm định nghiệm thu cùng Stakeholders",
    input: "Use Case Diagram + Use Case Descriptions.",
    action: "Review từng kịch bản cùng khách hàng và người dùng cuối để kiểm tra tính đầy đủ (Completeness).",
    output: "VALIDATED SYSTEM USE CASE MODEL (Sản phẩm bàn giao chốt hạ!).",
    examTip: "Đây là Milestone Lifecycle Objectives (LCO) chính thức để chuyển sang Elaboration Phase."
  }
];

export default function BaCognitivePipelineRunner() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const activeStage = STAGES[currentStageIndex];
  const progressPercent = Math.round(((currentStageIndex + 1) / STAGES.length) * 100);

  const handleNext = () => {
    if (currentStageIndex < STAGES.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex(prev => prev - 1);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Workflow className="w-3.5 h-3.5" />
            Mục 7.3 • Master Cognitive Pipeline
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Chuỗi Tư Duy 11 Chặng Bất Biến Để Làm Bài Của Senior BA
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Từ quy trình kinh doanh sơ khai đến mô hình Use Case hoàn chỉnh được phê duyệt (Validated Model).
          </p>
        </div>

        {/* Progress Display */}
        <div className="text-right">
          <div className="text-xs font-bold text-emerald-800 font-mono">
            Chặng {currentStageIndex + 1} / {STAGES.length} ({progressPercent}%)
          </div>
          <div className="w-32 sm:w-44 h-2 bg-stone-100 rounded-full mt-1.5 overflow-hidden border border-stone-200">
            <div 
              className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 11 Stages Mini Pills Bar */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {STAGES.map((s, idx) => {
          const isSelected = idx === currentStageIndex;
          const isCompleted = idx < currentStageIndex;
          return (
            <button
              key={s.step}
              onClick={() => setCurrentStageIndex(idx)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                isSelected 
                  ? "bg-emerald-600 text-white shadow-sm scale-105" 
                  : isCompleted 
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-300" 
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              #{s.step}
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Workbench */}
      <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50/60 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 mb-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
              Chặng {activeStage.step}: Cognitive Stage Flow
            </span>
            <h5 className="text-base sm:text-lg font-extrabold text-stone-900 mt-0.5">
              {activeStage.title} — {activeStage.subtitle}
            </h5>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-stone-200 text-stone-800 font-bold">
            Step {activeStage.step} of 11
          </span>
        </div>

        {/* 3 Pillars of Stage: Input -> Action -> Output */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs mb-4">
          <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
            <div className="font-bold text-stone-500 uppercase tracking-wider text-[10px] mb-1">
              Đầu vào (Input Artifact):
            </div>
            <p className="text-stone-800 leading-relaxed font-medium">
              {activeStage.input}
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border-2 border-emerald-400 shadow-xs">
            <div className="font-bold text-emerald-800 uppercase tracking-wider text-[10px] mb-1">
              Hành động trọng tâm của BA (Core Action):
            </div>
            <p className="text-emerald-950 leading-relaxed font-bold">
              {activeStage.action}
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
            <div className="font-bold text-stone-500 uppercase tracking-wider text-[10px] mb-1">
              Đầu ra bàn giao (Output Deliverable):
            </div>
            <p className="text-stone-800 leading-relaxed font-medium">
              {activeStage.output}
            </p>
          </div>
        </div>

        {/* Exam Tip Callout */}
        <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 mb-4">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Mẹo tư duy giải đề: </span>
            {activeStage.examTip}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-200">
          <button
            onClick={handlePrev}
            disabled={currentStageIndex === 0}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 disabled:opacity-40 flex items-center gap-1.5 transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Chặng trước
          </button>

          {currentStageIndex < STAGES.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 shadow-sm transition-all"
            >
              Chặng tiếp theo ({currentStageIndex + 2}/11) <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentStageIndex(0)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white flex items-center gap-1.5 shadow-sm transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Xem lại từ chặng 1
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
