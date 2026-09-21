"use client";
import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  GitBranch, 
  Layers, 
  Sparkles, 
  ToggleLeft, 
  ToggleRight,
  ShieldAlert,
  HelpCircle,
  Clock
} from "lucide-react";

export default function ExtensionPointExecutionSimulator() {
  const [triggerAid, setTriggerAid] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: not started, 1: Step 1, 2: Step 2, 3: Extension Pt, 3.1, 3.2, 3.3, 4: Step 4, 5: Done
  const [activeSubStep, setActiveSubStep] = useState(0); // For extension flow

  const BASE_STEPS = [
    {
      num: 1,
      actor: "Student",
      action: "Sinh viên lựa chọn các học phần mong muốn từ danh mục môn mở.",
      type: "normal"
    },
    {
      num: 2,
      actor: "System",
      action: "Hệ thống kiểm tra điều kiện tiên quyết và lịch biểu, xác nhận các môn hợp lệ.",
      type: "normal"
    },
    {
      num: 3,
      actor: "Base Flow",
      name: "Extension point: financing",
      action: "Điểm neo mở rộng định danh (Named Extension Point). Hệ thống kiểm tra xem sinh viên có yêu cầu hỗ trợ tài chính hay không.",
      type: "extension-point"
    },
    {
      num: 4,
      actor: "System",
      action: "Hệ thống ghi nhận danh sách lớp chính thức và gửi email xác nhận đăng ký thành công.",
      type: "normal"
    }
  ];

  const EXTENSION_STEPS = [
    {
      subNum: "3a.1",
      actor: "Student",
      action: "Sinh viên điền biểu mẫu xin miễn giảm học phí / học bổng vượt khó và đính kèm minh chứng."
    },
    {
      subNum: "3a.2",
      actor: "System",
      action: "Hệ thống đối soát điều kiện trợ cấp (BR-04) và tạm khóa số dư học phí cần nộp."
    },
    {
      subNum: "3a.3",
      actor: "System",
      action: "Hệ thống cấp mã phiếu hỗ trợ tài chính tạm thời và chuyển tiếp trở lại luồng chính (Base Flow)."
    }
  ];

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
      setActiveSubStep(0);
    } else if (currentStep === 3) {
      if (triggerAid) {
        if (activeSubStep === 0) setActiveSubStep(1);
        else if (activeSubStep === 1) setActiveSubStep(2);
        else if (activeSubStep === 2) setActiveSubStep(3);
        else {
          setCurrentStep(4);
          setActiveSubStep(0);
        }
      } else {
        setCurrentStep(4);
      }
    } else if (currentStep === 4) {
      setCurrentStep(5);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setActiveSubStep(0);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-stone-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
            <GitBranch className="h-3.5 w-3.5" /> Mục 6.5: Extension Points Architecture
          </div>
          <h3 className="mt-2 text-2xl font-bold text-stone-900">
            Mô Phỏng Thực Thi Điểm Mở Rộng: Extension Point &quot;financing&quot;
          </h3>
          <p className="text-sm text-stone-600">
            Khám phá cách Named Extension Point neo giữ vị trí chính xác để chèn luồng &lt;&lt;extend&gt;&gt; mà không làm biến dạng luồng chính (Base Flow).
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-stone-100 p-4 border border-stone-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
            Kịch bản người dùng:
          </span>
          <button
            onClick={() => {
              setTriggerAid(!triggerAid);
              handleReset();
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
              triggerAid
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
            }`}
          >
            {triggerAid ? (
              <>
                <ToggleRight className="w-4 h-4" /> Có yêu cầu Hỗ trợ tài chính (Kích hoạt Extend)
              </>
            ) : (
              <>
                <ToggleLeft className="w-4 h-4 text-stone-400" /> Không xin hỗ trợ (Luồng thường Happy Path)
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-white rounded-lg border border-stone-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Khởi động lại
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === 5}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-all disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {currentStep === 0 ? "Bắt đầu chạy luồng" : currentStep === 5 ? "Đã hoàn thành" : "Bước tiếp theo"}
          </button>
        </div>
      </div>

      {/* Simulator Flow Visualization */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Base Use Case Column (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Base Use Case: Register for Course
            </h4>
            <span className="text-[11px] font-mono text-stone-500">ID: UC-01</span>
          </div>

          <div className="space-y-2.5">
            {BASE_STEPS.map((step) => {
              const isCurrent = currentStep === step.num;
              const isPassed = currentStep > step.num;
              const isExtensionPt = step.type === "extension-point";

              return (
                <div
                  key={step.num}
                  className={`rounded-xl border p-3.5 transition-all ${
                    isCurrent
                      ? "border-amber-400 bg-amber-50/70 shadow-md ring-2 ring-amber-200"
                      : isPassed
                      ? "border-emerald-200 bg-emerald-50/40 opacity-80"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isPassed
                            ? "bg-emerald-600 text-white"
                            : isCurrent
                            ? "bg-amber-600 text-white animate-pulse"
                            : "bg-stone-200 text-stone-700"
                        }`}
                      >
                        {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : step.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-stone-800">
                            Bước {step.num}: {step.actor}
                          </span>
                          {isExtensionPt && (
                            <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800 border border-blue-200">
                              {step.name}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                          {step.action}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {currentStep === 5 && (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-xs text-emerald-900 flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              Đăng ký hoàn tất thành công! Hậu điều kiện (Postconditions) của ca sử dụng đã được bảo đảm.
            </div>
          )}
        </div>

        {/* Extending Use Case Column (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              Extending Use Case: Apply Financial Aid
            </h4>
            <span className="text-[11px] font-mono text-blue-600">ID: UC-05</span>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 space-y-3">
            <div className="text-xs text-blue-950 leading-relaxed font-medium">
              🎯 <strong>Điểm neo dẫn chiếu:</strong> Neo vào <code className="bg-white px-1.5 py-0.5 rounded text-blue-800 border border-blue-200">Extension point: financing</code> tại Bước 3 của Base Use Case.
            </div>

            <div className="space-y-2">
              {EXTENSION_STEPS.map((sub, sIdx) => {
                const isSubActive = currentStep === 3 && triggerAid && activeSubStep >= sIdx + 1;
                const isSubCurrent = currentStep === 3 && triggerAid && activeSubStep === sIdx + 1;

                return (
                  <div
                    key={sIdx}
                    className={`rounded-lg border p-3 text-xs transition-all ${
                      isSubCurrent
                        ? "border-blue-400 bg-white shadow-md ring-2 ring-blue-300"
                        : isSubActive
                        ? "border-emerald-200 bg-white/90"
                        : "border-blue-100 bg-white/50 opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-mono font-bold text-blue-700 min-w-[36px]">
                        {sub.subNum}
                      </span>
                      <div>
                        <span className="font-bold text-stone-800">{sub.actor}: </span>
                        <span className="text-stone-700">{sub.action}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!triggerAid ? (
              <div className="rounded-lg bg-white/80 p-3 text-xs text-stone-500 border border-stone-200 text-center">
                ℹ️ Kịch bản hiện tại: <em>Không kích hoạt</em> luồng mở rộng này vì sinh viên không yêu cầu hỗ trợ tài chính.
              </div>
            ) : currentStep === 3 && activeSubStep > 0 ? (
              <div className="rounded-lg bg-blue-100/80 p-3 text-xs text-blue-900 border border-blue-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 animate-spin" />
                Đang chèn hành vi tại Extension Point. Khi hoàn tất sẽ trả quyền kiểm soát lại Bước 4 cho Base Flow!
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* 2 Core Benefits Box (Slide 6.5) */}
      <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
          💡 2 Lợi ích kiến trúc của việc định nghĩa rõ Named Extension Point (Slide 6.5):
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg bg-white p-3 border border-stone-200">
            <span className="font-bold text-stone-900">1. Giữ Base Use Case ổn định (Keep base stable):</span>
            <p className="mt-1 text-stone-600">
              Base use case không bị sửa đổi hay phình to văn bản mỗi khi có tính năng mới. Luồng chính vẫn trong trẻo và dễ bảo trì.
            </p>
          </div>
          <div className="rounded-lg bg-white p-3 border border-stone-200">
            <span className="font-bold text-stone-900">2. Dễ dàng cắm thêm Extension mới về sau (Extensibility):</span>
            <p className="mt-1 text-stone-600">
              Về sau nếu có thêm <em>UC-09: Register with Employer Sponsorship</em>, ta chỉ cần trỏ vào cùng điểm neo <code>financing</code> mà không phải viết lại code hay tài liệu của Base use case.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
