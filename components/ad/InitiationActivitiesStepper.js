"use client";
import React, { useState } from "react";
import {
  ListFilter,
  Users,
  Box,
  Network,
  FileEdit,
  UserCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers
} from "lucide-react";

const STEPS = [
  {
    stepNumber: 1,
    title: "Phân Rã Sự Kiện Nghiệp Vụ",
    subtitle: "Decompose Business Events",
    icon: ListFilter,
    summary: "Rà soát toàn bộ quy trình nghiệp vụ (Business Processes) để liệt kê triệt để mọi sự kiện mà hệ thống bắt buộc phải phản hồi.",
    input: "Tài liệu nghiệp vụ, sơ đồ quy trình hiện tại (Activity Diagram, Swimlane), biên bản phỏng vấn.",
    actions: [
      "Tìm kiếm các sự kiện kích hoạt từ tác nhân bên ngoài (External Events).",
      "Xác định các sự kiện phát sinh theo mốc thời gian định kỳ (Temporal Events).",
      "Nhận diện các sự kiện thay đổi trạng thái hoặc vượt ngưỡng nội bộ (State Events)."
    ],
    output: "Danh sách sự kiện sơ bộ (Event List) & Bảng phân tích sự kiện (Event Table).",
    pitfall: "Bẫy thường gặp: Nhầm lẫn giữa 'Hành động nội bộ của hệ thống' (ví dụ: Lưu bản ghi vào CSDL) với 'Sự kiện nghiệp vụ thực tế' (ví dụ: Khách hàng xác nhận đặt mua)."
  },
  {
    stepNumber: 2,
    title: "Nhận Diện Tác Nhân Tương Tác",
    subtitle: "Identify Actors",
    icon: Users,
    summary: "Xác định rõ ràng ai hoặc cái gì là chủ thể kích hoạt sự kiện, và ai/cái gì là đối tượng tiếp nhận kết quả phản hồi từ hệ thống.",
    input: "Bảng danh sách sự kiện (Event Table), cơ cấu tổ chức và danh sách hệ thống ngoại vi.",
    actions: [
      "Xác định Primary Business Actor (Người thụ hưởng giá trị thực tế ngoài đời).",
      "Xác định Primary System Actor (Người trực tiếp bấm máy tương tác với màn hình UI).",
      "Xác định External Server Actor (Hệ thống cung cấp dịch vụ như Payment Gateway, SMS API).",
      "Xác định External Receiver Actor (Hệ thống hoặc đối tượng chỉ nhận thụ động báo cáo/thông báo)."
    ],
    output: "Danh sách tác nhân chuẩn hóa (Actor Catalog) kèm vai trò cụ thể.",
    pitfall: "Bẫy thường gặp: Coi 'Người quản lý' là một Actor nếu họ không trực tiếp dùng hệ thống, hoặc đặt tên Actor theo chức danh cá nhân thay vì vai trò (Role)."
  },
  {
    stepNumber: 3,
    title: "Xác Định System Use Cases",
    subtitle: "Identify System Use Cases (Quy tắc 1:1)",
    icon: Box,
    summary: "Áp dụng quy tắc vàng One-Event-to-One-Use-Case (1:1): Mỗi sự kiện nghiệp vụ được ánh xạ tới đúng một System Use Case đại diện cho phản hồi của hệ thống.",
    input: "Cặp tương quan giữa Event và Actor từ Bước 1 và 2.",
    actions: [
      "Đặt tên Use Case theo chuẩn nghiêm ngặt: Động từ + Cụm danh từ (Verb + Noun phrase).",
      "Đảm bảo Use Case phản ánh trọn vẹn một mục tiêu đo lường được (Measurable Goal).",
      "Loại bỏ các hành động vụn vặt kỹ thuật (như 'Bấm nút Lưu', 'Mở menu')."
    ],
    output: "Danh sách System Use Cases hoàn chỉnh (Use Case List).",
    pitfall: "Quy tắc thi cử cốt lõi: 1 Business Event ➔ Đúng 1 System Use Case (Quy tắc 1:1). Nếu chia quá nhỏ (Functional Decomposition) sẽ làm vỡ mô hình hướng đối tượng!"
  },
  {
    stepNumber: 4,
    title: "Tổ Chức Mô Hình Use Case Bằng UML",
    subtitle: "Organize the Use Case Model",
    icon: Network,
    summary: "Gom nhóm các Use Case có liên quan vào các gói chức năng (Packages) và xác lập các mối quan hệ cấu trúc chuẩn UML.",
    input: "Danh sách Use Cases phẳng và ranh giới hệ thống (System Boundary).",
    actions: [
      "Sử dụng <<include>> để tái sử dụng logic dùng chung bắt buộc (ví dụ: Xác thực đăng nhập).",
      "Sử dụng <<extend>> để gắn các hành vi tùy chọn/rẽ nhánh có điều kiện (ví dụ: Áp mã giảm giá đặc biệt).",
      "Áp dụng Kế thừa (Generalization) cho các Actor hoặc Use Case có tính chất chuyên biệt hóa."
    ],
    output: "Sơ đồ ca sử dụng hệ thống (UML System Use Case Diagram).",
    pitfall: "Cực kỳ chú ý: <<include>> mũi tên hướng VỀ phía use case được dùng chung; <<extend>> mũi tên hướng TỪ phía use case mở rộng VỀ use case gốc!"
  },
  {
    stepNumber: 5,
    title: "Soạn Thảo Đặc Tả Use Case",
    subtitle: "Write Use Case Descriptions",
    icon: FileEdit,
    summary: "Mô tả chi tiết kịch bản tương tác theo 2 cấp độ: Tóm lược (Brief) trong Inception và Đầy đủ (Fully Dressed) làm đầu vào cho thiết kế.",
    input: "Use Case Diagram và các yêu cầu nghiệp vụ chi tiết từ người dùng.",
    actions: [
      "Soạn Brief Description: 1 đoạn văn ngắn mô tả luồng chính (Main Flow) để thống nhất nhanh Scope.",
      "Soạn Fully Dressed Description: Biểu mẫu có cấu trúc gồm Precondition, Trigger, Main Scenario 5-7 bước, Alternate Flows và Postcondition.",
      "Ghi nhận các quy tắc nghiệp vụ (Business Rules) và ràng buộc phi chức năng liên đới."
    ],
    output: "Bộ tài liệu đặc tả ca sử dụng (Use Case Specifications Document).",
    pitfall: "Trong Inception Phase, ưu tiên viết Brief Description cho hầu hết Use Case, chỉ viết Fully Dressed cho 10-20% Use Case cốt lõi/rủi ro cao nhất."
  },
  {
    stepNumber: 6,
    title: "Thẩm Định Với Stakeholders",
    subtitle: "Validate with Stakeholders",
    icon: UserCheck,
    summary: "Họp rà soát và phê duyệt chính thức phạm vi hệ thống với người dùng (Users) và nhà tài trợ dự án (Sponsors) trước khi chuyển sang Elaboration.",
    input: "Bản vẽ Use Case Diagram và tập đặc tả Use Case Descriptions hoàn chỉnh.",
    actions: [
      "Xác nhận Scope: Hệ thống làm gì và dứt khoát KHÔNG làm gì (Out of Scope).",
      "Thẩm định tính đúng đắn (Correctness): Phản ánh chính xác nghiệp vụ thực tế.",
      "Thẩm định tính đầy đủ (Completeness): Không bỏ sót sự kiện nghiệp vụ quan trọng nào."
    ],
    output: "Validated System Use Case Model & Biên bản chốt Scope giai đoạn Inception (Sign-off).",
    pitfall: "Tuyệt đối không bước sang giai đoạn Elaboration khi chưa có sự xác nhận của Sponsor về ranh giới Scope của Validated System Use Case Model!"
  }
];

export default function InitiationActivitiesStepper() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const activeStep = STEPS[currentStepIdx];

  const handleNext = () => {
    if (currentStepIdx < STEPS.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
    }
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7 shadow-lg shadow-stone-200/50 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
              6-Step Core Roadmap
            </span>
          </div>
          <h3 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            6 Hoạt Động Cốt Lõi Của Giai Đoạn Initiation Phase
          </h3>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentStepIdx === 0}
            className="p-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer text-stone-700"
            title="Bước trước"
          >
            <ArrowLeft size={16} />
          </button>
          <span className="text-xs font-mono font-bold text-stone-500 px-2">
            {currentStepIdx + 1} / {STEPS.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentStepIdx === STEPS.length - 1}
            className="p-2 rounded-xl border border-stone-200 bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
            title="Bước kế tiếp"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* 6 Step Progress Indicators */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 my-5">
        {STEPS.map((step, idx) => {
          const isActive = idx === currentStepIdx;
          const isDone = idx < currentStepIdx;

          return (
            <button
              key={step.stepNumber}
              onClick={() => setCurrentStepIdx(idx)}
              className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                isActive
                  ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-400/30 shadow-xs font-bold"
                  : isDone
                  ? "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                  : "border-stone-200 bg-white text-stone-400 hover:text-stone-600"
              }`}
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                Bước 0{step.stepNumber}
              </div>
              <div className="text-xs truncate font-medium">
                {step.title.split(" ")[0]} {step.title.split(" ")[1] || ""}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Step Detail Card */}
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/40 via-white to-stone-50/30 p-5 md:p-6 transition-all duration-300">
        {/* Step Title Header */}
        <div className="flex items-start gap-3.5 pb-4 border-b border-emerald-100">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
            {React.createElement(activeStep.icon, { size: 24 })}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 font-mono">
                Hoạt Động {activeStep.stepNumber}
              </span>
              <span className="text-xs font-mono text-stone-400 font-semibold">{activeStep.subtitle}</span>
            </div>
            <h4 className="text-base md:text-lg font-black text-stone-900 mt-1">
              {activeStep.title}
            </h4>
            <p className="text-xs md:text-sm text-stone-700 mt-1.5 leading-relaxed font-medium">
              {activeStep.summary}
            </p>
          </div>
        </div>

        {/* Input - Action - Output Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          {/* Input */}
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs flex flex-col">
            <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-stone-400" />
              <span>1. Đầu Vào (Inputs)</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed flex-1">
              {activeStep.input}
            </p>
          </div>

          {/* Actions */}
          <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs md:col-span-1 flex flex-col ring-1 ring-emerald-500/10">
            <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>2. Thao Tác Cốt Lõi (Actions)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-800 leading-relaxed flex-1">
              {activeStep.actions.map((act, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output */}
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs flex flex-col">
            <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>3. Đầu Ra (Deliverables)</span>
            </div>
            <p className="text-xs font-semibold text-emerald-950 leading-relaxed flex-1">
              {activeStep.output}
            </p>
          </div>
        </div>

        {/* Exam Trap & Pitfall Callout */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-950 leading-relaxed">
          <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900">Điểm Chốt Thi Cử & Bẫy Cần Tránh: </strong>
            <span>{activeStep.pitfall}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
