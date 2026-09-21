"use client";
import React, { useState } from "react";
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Sparkles, 
  AlertTriangle, 
  FileSpreadsheet, 
  Users2, 
  Search, 
  Layers, 
  Target,
  FileCheck
} from "lucide-react";

const STEPS = [
  {
    step: 1,
    id: "step1",
    title: "1. Study Business Process & Scope",
    vietnameseTitle: "Nghiên cứu quy trình nghiệp vụ & Biên phạm vi",
    icon: Search,
    color: "emerald",
    checklist: [
      "Đọc kỹ tài liệu nghiệp vụ hiện tại (SOP, sổ tay vận hành, biểu mẫu giấy).",
      "Xác định ranh giới hệ thống (System Boundary) — cái gì nằm trong, cái gì nằm ngoài.",
      "Phỏng vấn Subject Matter Experts (SMEs) để nắm bức tranh tổng thể."
    ],
    pitfall: "Sa đà vào vẽ sơ đồ giao diện hoặc nghĩ giải pháp công nghệ (database, framework) quá sớm trước khi hiểu quy trình cốt lõi.",
    output: "System Scope Statement & Danh mục quy trình nghiệp vụ sơ bộ."
  },
  {
    step: 2,
    id: "step2",
    title: "2. Brainstorm & List All Events",
    vietnameseTitle: "Liệt kê toàn diện 3 nhóm Business Events",
    icon: Layers,
    color: "blue",
    checklist: [
      "Quét External Events: Mọi hành động kích hoạt từ khách hàng, nhân viên, đối tác.",
      "Quét Temporal Events: Mọi hạn chót (deadlines), chu kỳ (hàng ngày, cuối tháng, hết kỳ).",
      "Quét State Events: Mọi ngưỡng (thresholds) cạn kho, âm tiền, đầy sĩ số lớp học."
    ],
    pitfall: "Bỏ sót các Temporal và State Events vì chúng không có người đứng trước máy tính bấm nút thao tác.",
    output: "Raw Event List phân loại rõ: External vs Temporal vs State."
  },
  {
    step: 3,
    id: "step3",
    title: "3. Identify Triggering Sources",
    vietnameseTitle: "Xác định nguồn kích hoạt (Trigger & Source)",
    icon: Target,
    color: "amber",
    checklist: [
      "Đối với mỗi event, đặt câu hỏi: Tác nhân hoặc điều kiện nào châm ngòi?",
      "Ghi rõ Trigger: Dấu hiệu thực tế để hệ thống nhận biết event đã bắt đầu.",
      "Ghi rõ Source: Role của người dùng, hoặc Time Clock, hoặc State condition."
    ],
    pitfall: "Ghi tên cá nhân cụ thể (ví dụ: 'Anh Nam phòng kế toán') thay vì chuẩn hóa về Role (ví dụ: 'Accountant').",
    output: "Mapping ma trận Event ➔ Trigger ➔ Source."
  },
  {
    step: 4,
    id: "step4",
    title: "4. Determine Required Responses",
    vietnameseTitle: "Xác định phản hồi bắt buộc của hệ thống",
    icon: Sparkles,
    color: "purple",
    checklist: [
      "Xác định System Response: Hệ thống phải làm gì có thể quan sát được (Observable)?",
      "Xác định Destination: Ai hoặc hệ thống đối tác nào sẽ tiếp nhận kết quả phản hồi đó?",
      "Đảm bảo phản hồi mang lại giá trị hoàn chỉnh (Measurable Value) cho người thụ hưởng."
    ],
    pitfall: "Mô tả phản hồi quá sơ sài hoặc liệt kê những tác vụ ngầm của database không mang lại giá trị nghiệp vụ trực tiếp.",
    output: "Mapping ma trận Use Case ➔ Response ➔ Destination."
  },
  {
    step: 5,
    id: "step5",
    title: "5. Assemble the Standard Event Table",
    vietnameseTitle: "Tổng hợp Bảng phân tích sự kiện 6 cột",
    icon: FileSpreadsheet,
    color: "rose",
    checklist: [
      "Điền đầy đủ vào 6 cột chuẩn: Event | Trigger | Source | Use Case | Response | Destination.",
      "Chuẩn hóa tên Use Case theo quy tắc động từ + danh từ (Verb + Noun).",
      "Kiểm tra ánh xạ 1:1 giữa mỗi Business Event và đúng 1 System Use Case."
    ],
    pitfall: "Đặt tên Use Case mơ hồ như 'Quản lý' (Manage...) thay vì hành vi dứt khoát như 'Register for Course', 'Submit Grades'.",
    output: "Hoàn thiện Master Event Table sẵn sàng làm khung xương cho Use Case Model."
  },
  {
    step: 6,
    id: "step6",
    title: "6. Review & Validate with Stakeholders",
    vietnameseTitle: "Thẩm định tính đầy đủ cùng Stakeholders",
    icon: FileCheck,
    color: "teal",
    checklist: [
      "Tổ chức workshop đi qua từng dòng trong Event Table với khách hàng và người dùng cuối.",
      "Kiểm tra tính hoàn chỉnh (Completeness): Còn sự kiện ngoại lệ (exceptions) nào chưa được tính đến?",
      "Chính thức chốt baseline Event Table để làm đầu vào cho giai đoạn đặc tả Use Case chi tiết."
    ],
    pitfall: "Tự BA giả định là đã đủ hết sự kiện mà không đối chiếu với người trực tiếp vận hành nghiệp vụ hàng ngày.",
    output: "Validated Event Table được ký duyệt và biên bản họp nghiệm thu phạm vi."
  }
];

export default function EventDecompositionPipelineStepper() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const activeStep = STEPS[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / STEPS.length) * 100);

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Layers className="w-3.5 h-3.5" />
            Mục 3.6 • BA Execution Roadmap
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Quy Trình 6 Bước Kỹ Thuật Event Decomposition
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Tiến trình bài bản giúp Business Analyst bao quát 100% nghiệp vụ và chuyển hóa thành Use Case Model.
          </p>
        </div>

        {/* Progress Display */}
        <div className="text-right">
          <div className="text-xs font-bold text-emerald-800">
            Tiến độ: {currentStepIndex + 1} / {STEPS.length} bước
          </div>
          <div className="w-32 sm:w-44 h-2 bg-stone-100 rounded-full mt-1.5 overflow-hidden border border-stone-200">
            <div 
              className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Steps Quick Selector Navigation */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {STEPS.map((s, idx) => {
          const isSelected = idx === currentStepIndex;
          const isCompleted = idx < currentStepIndex;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isSelected 
                  ? "bg-emerald-600 text-white border-emerald-700 shadow-sm font-bold scale-[1.02]" 
                  : isCompleted 
                    ? "bg-emerald-50 border-emerald-300 text-emerald-900" 
                    : "bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold">Bước {s.step}</span>
                {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
              </div>
              <div className={`text-[11px] line-clamp-1 ${isSelected ? "text-emerald-100" : "text-stone-500"}`}>
                {s.vietnameseTitle.split("&")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Step Detail Card */}
      <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/50 p-5 sm:p-6 shadow-xs">
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 mb-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              {activeStep.title}
            </span>
            <h5 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
              {activeStep.vietnameseTitle}
            </h5>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-stone-200 text-stone-800 font-semibold">
            Stage 0{activeStep.step}
          </span>
        </div>

        {/* 3 Main Pillars of each Step */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Checklist */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs md:col-span-2">
            <h6 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Nhiệm vụ cốt lõi của BA (Core Checklist):
            </h6>
            <ul className="space-y-2 text-xs text-stone-700">
              {activeStep.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output Artifact */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <h6 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-stone-600" />
                Sản phẩm bàn giao (Output):
              </h6>
              <p className="text-xs text-stone-800 font-medium leading-relaxed bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                {activeStep.output}
              </p>
            </div>
            
            <div className="mt-3 text-[11px] text-stone-500 italic">
              Đảm bảo đầu ra được tài liệu hóa rõ ràng trước khi chuyển bước.
            </div>
          </div>
        </div>

        {/* Pitfall Box */}
        <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Cạm bẫy thực tế (Pitfall cần tránh): </span>
            {activeStep.pitfall}
          </div>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-stone-200">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1.5 transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Bước trước
          </button>

          {currentStepIndex < STEPS.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 shadow-sm transition-all"
            >
              Bước tiếp theo <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentStepIndex(0)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 hover:bg-black text-white flex items-center gap-1.5 shadow-sm transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Xem lại từ bước 1
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
