"use client";
import React, { useState } from "react";
import { 
  Compass, 
  RotateCw, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  Search, 
  FileText, 
  Users, 
  Sparkles, 
  GitBranch, 
  RefreshCw, 
  MessageSquare,
  Play
} from "lucide-react";

const STEPS = [
  {
    step: 1,
    title: "1. Elicit Requirements",
    subtitle: "Khai thác & Thu thập yêu cầu",
    focus: "Tiếp xúc người dùng, phỏng vấn, khảo sát thực tế",
    action: "Chuyên viên BA sử dụng các kỹ thuật Fact-finding (phỏng vấn chuyên sâu, gửi bảng câu hỏi, quan sát quy trình thực tế) để nắm bắt mong muốn và nỗi đau của các bên liên quan.",
    deliverableSnippet: "Raw Interview Notes, Process Observations, Stakeholder Needs List.",
    questionTransition: "Hỏi: 'Người dùng gặp khó khăn gì và cần hệ thống hỗ trợ việc gì?'"
  },
  {
    step: 2,
    title: "2. Identify Actors & Use Cases",
    subtitle: "Nhận diện Tác nhân & Ca sử dụng",
    focus: "Ai tương tác và làm việc gì để sinh giá trị?",
    action: "Từ thông tin khai thác được, bóc tách các vai trò tương tác trực tiếp (Roles) thành Actors và các đơn vị chức năng mang lại giá trị hoàn chỉnh thành Candidate Use Cases.",
    deliverableSnippet: "Initial Actor Catalog, High-level Use Case Candidate List.",
    questionTransition: "Xác định: 'Hệ thống cần làm gì (WHAT) để phục vụ mục tiêu của từng Actor?'"
  },
  {
    step: 3,
    title: "3. Model the Use-Case Diagram",
    subtitle: "Xây dựng Biểu đồ Use Case UML",
    focus: "Mục lục trực quan về phạm vi ranh giới hệ thống",
    action: "Vẽ ranh giới hệ thống (System Boundary), đặt Actors ở bên ngoài và Use Cases (hình oval) ở bên trong, nối các liên kết giao tiếp (Associations) giữa Actor và Use Case.",
    deliverableSnippet: "UML Use-Case Diagrams (Context Map & Boundary Definitions).",
    questionTransition: "Tổng quan hóa: 'Tạo một mục lục (Table of Contents) rõ ràng cho toàn hệ thống.'"
  },
  {
    step: 4,
    title: "4. Write Use-Case Descriptions",
    subtitle: "Soạn thảo Đặc tả Ca sử dụng",
    focus: "Hệ thống sẽ hành xử từng bước như thế nào?",
    action: "Đi sâu vào chi tiết hành vi từng Use Case theo các định dạng Brief, Casual hoặc Fully-Dressed. Làm rõ luồng chính (Happy Path), các luồng rẽ nhánh ngoại lệ, Pre/Postconditions và Business Rules.",
    deliverableSnippet: "Fully-Dressed Use-Case Descriptions, Business Rules Catalog.",
    questionTransition: "Chi tiết hóa: 'Khi có biến cố, hệ thống phản hồi và xử lý từng bước như thế nào (HOW)?'"
  },
  {
    step: 5,
    title: "5. Review with Stakeholders",
    subtitle: "Kiểm tra & Thẩm định với Stakeholders",
    focus: "Đối soát và kích hoạt Vòng lặp phản hồi (Feedback Loop)",
    action: "Cùng người dùng doanh nghiệp và Sponsor rà soát lại toàn bộ sơ đồ và bản đặc tả. Nếu phát sinh câu hỏi hoặc lỗ hổng mới ➔ Kích hoạt vòng lặp quay lại bước 1 (Elicit) để làm rõ ngay lập tức.",
    deliverableSnippet: "Validated Baseline Scope, Signed-off Specifications, Change Log.",
    questionTransition: "Xác thực: 'Mô hình này đã phản ánh đúng và đủ mục tiêu ban đầu chưa?'"
  }
];

export default function DiscoveryIterativeEngineRunner() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [showFeedbackLoop, setShowFeedbackLoop] = useState(false);
  const [lensMode, setLensMode] = useState("what"); // "what" | "how"

  const currentStep = STEPS[activeStepIndex];

  const handleNext = () => {
    if (activeStepIndex < STEPS.length - 1) {
      setActiveStepIndex(prev => prev + 1);
      setShowFeedbackLoop(false);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
      setShowFeedbackLoop(false);
    }
  };

  const handleTriggerFeedbackLoop = () => {
    setShowFeedbackLoop(true);
    setTimeout(() => {
      setActiveStepIndex(0); // Loop back to step 1
    }, 1500);
  };

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-blue-50/30 p-6 md:p-8 shadow-xl shadow-blue-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-950 border border-blue-300/60 mb-2">
            <RotateCw className="w-3.5 h-3.5 text-blue-700" />
            Mục 2.1 – 2.3 — Discovery Iterative Engine
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Chu trình xoắn ốc 5 bước Khám phá Yêu cầu (Discovery Phase)
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Quy trình Discovery là một <strong>chu trình lặp (Iterative Cycle)</strong> nhằm trả lời triệt để câu hỏi <em>"What should the system do?"</em> trước khi quyết định <em>"How will it do it?"</em>.
          </p>
        </div>

        {/* Lens Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <span className="text-stone-400 font-bold px-1 text-[11px]">Trọng tâm:</span>
          <button
            onClick={() => setLensMode("what")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              lensMode === "what"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            What should system do?
          </button>
          <button
            onClick={() => setLensMode("how")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              lensMode === "how"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            How will it do it?
          </button>
        </div>
      </div>

      {/* Core Mission Banner */}
      <div className="mt-4 p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-extrabold text-[10px]">3 TRỤ CỘT DISCOVERY</span>
          <span className="font-bold text-stone-800">
            Elicits (Khai thác) ➔ Explores (Làm rõ) ➔ Structures (Cấu trúc hóa)
          </span>
        </div>
        <span className="text-stone-500 text-[11px] hidden sm:inline">
          Cầu nối giữa Business Vision và Detailed Functional Model
        </span>
      </div>

      {/* 5-Step Stepper Ribbon */}
      <div className="mt-6 grid grid-cols-5 gap-1.5 sm:gap-2">
        {STEPS.map((s, idx) => {
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;

          return (
            <button
              key={s.step}
              onClick={() => { setActiveStepIndex(idx); setShowFeedbackLoop(false); }}
              className={`p-2.5 rounded-xl border text-left transition-all relative ${
                isActive
                  ? "bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                  : isPassed
                  ? "bg-blue-50/50 border-blue-200 text-stone-700"
                  : "bg-white/60 hover:bg-white border-stone-200 text-stone-400"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-black font-mono ${isActive ? "text-blue-600" : "text-stone-400"}`}>
                  0{s.step}
                </span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
              </div>
              <div className={`text-[11px] font-bold line-clamp-1 ${isActive ? "text-stone-900" : "text-stone-600"}`}>
                {s.title.split(". ")[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Spotlight Card */}
      <div className="mt-6 p-6 rounded-2xl bg-white border border-stone-200 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900">
              Chặng {currentStep.step} / 5
            </span>
            <h4 className="text-lg font-black text-stone-900 mt-1">
              {currentStep.title} — <span className="text-blue-700">{currentStep.subtitle}</span>
            </h4>
          </div>

          <div className="text-xs font-semibold text-stone-500 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200 self-start sm:self-auto">
            🎯 {currentStep.focus}
          </div>
        </div>

        {/* Action & Logic */}
        <div className="space-y-3">
          <div>
            <span className="text-xs font-bold text-stone-700 block mb-1">Hành động của Chuyên viên BA:</span>
            <p className="text-xs text-stone-600 leading-relaxed bg-blue-50/30 p-3 rounded-xl border border-blue-100">
              {currentStep.action}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
              <span className="font-bold text-stone-800 block mb-0.5">📦 Sản phẩm đầu ra tại chặng này:</span>
              <span className="font-mono text-stone-600 text-[11px]">{currentStep.deliverableSnippet}</span>
            </div>
            <div className="p-3 rounded-lg bg-amber-50/50 border border-amber-200 text-xs text-amber-900">
              <span className="font-bold block mb-0.5 text-amber-950">💡 Câu hỏi tư duy chuyển dịch:</span>
              <span>{currentStep.questionTransition}</span>
            </div>
          </div>
        </div>

        {/* Feedback Loop Alert if Step 5 */}
        {activeStepIndex === 4 && (
          <div className="mt-4 p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-purple-900">
              <RefreshCw className={`w-4 h-4 text-purple-600 ${showFeedbackLoop ? "animate-spin" : ""}`} />
              Mô phỏng Vòng lặp phản hồi (Iterative Cycle Feedback Loop):
            </div>
            <p className="leading-relaxed text-purple-800">
              Khi họp thẩm định (Review), Stakeholders thường phát hiện thêm các nghiệp vụ phát sinh hoặc có cách hiểu khác. Quy trình Discovery chuẩn cho phép kích hoạt vòng lặp quay lại bước 1 để khai thác lại mà không làm vỡ kiến trúc!
            </p>
            <button
              onClick={handleTriggerFeedbackLoop}
              disabled={showFeedbackLoop}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
            >
              <RotateCw className="w-3.5 h-3.5" />
              {showFeedbackLoop ? "Đang quay ngược về Bước 1 (Elicit)..." : "Kích hoạt Feedback Loop (Quay về Bước 1)"}
            </button>
          </div>
        )}

        {/* Stepper Navigation Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <button
            onClick={handlePrev}
            disabled={activeStepIndex === 0}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Chặng trước
          </button>

          <span className="text-xs font-semibold text-stone-400">
            {activeStepIndex + 1} / {STEPS.length}
          </span>

          <button
            onClick={handleNext}
            disabled={activeStepIndex === STEPS.length - 1}
            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-all shadow-xs"
          >
            Chặng tiếp theo <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
