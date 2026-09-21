"use client";
import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Sparkles, 
  Lock, 
  Users, 
  AlertTriangle,
  ChevronRight,
  GitBranch
} from "lucide-react";

export default function IncludeExtendExecutionSimulator() {
  const [isClassFull, setIsClassFull] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: Init, 1: Running Base, 2: Forced Include, 3: Capacity Check, 4: Finished

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <GitBranch className="w-3.5 h-3.5" />
            Mục 6.2 & 6.3 • Live Execution Simulator
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Mô Phỏng Luồng Chạy: Bắt Buộc &lt;&lt;include&gt;&gt; vs Rẽ Nhánh &lt;&lt;extend&gt;&gt;
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Quan sát trực quan: Use Case bắt buộc gọi Authenticate User và rẽ nhánh sang Add to Waitlist khi lớp đầy chỗ.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3 h-3" /> Reset Simulator
        </button>
      </div>

      {/* Scenario Control Panel */}
      <div className="mt-5 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-0.5">
              Thiết Lập Tình Huống Sĩ Số Lớp Học Phần:
            </div>
            <p className="text-xs text-stone-600">
              Chuyển đổi trạng thái lớp để quan sát nhánh rẽ của &lt;&lt;extend&gt;&gt;:
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsClassFull(false);
                setCurrentStep(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !isClassFull 
                  ? "bg-emerald-600 text-white shadow-xs" 
                  : "bg-white text-stone-700 border border-stone-300"
              }`}
            >
              Lớp Còn Chỗ (45/60)
            </button>
            <button
              onClick={() => {
                setIsClassFull(true);
                setCurrentStep(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isClassFull 
                  ? "bg-amber-600 text-white shadow-xs" 
                  : "bg-white text-stone-700 border border-stone-300"
              }`}
            >
              Lớp Đã Đầy (60/60) [Kích Hoạt Extend]
            </button>
          </div>
        </div>
      </div>

      {/* Live Stepper Visualizer */}
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
          {/* Step 1: Base UC starts */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 1 
              ? "bg-emerald-50 border-emerald-500 shadow-xs" 
              : "bg-stone-50 border-stone-200 opacity-60"
          }`}>
            <div className="text-[10px] font-bold text-emerald-800 uppercase mb-1">Bước 1: Khởi Động</div>
            <div className="text-xs font-extrabold text-stone-900">Register for Course</div>
            <p className="text-[11px] text-stone-500 mt-1">Sinh viên nhấn gửi phiếu đăng ký môn học.</p>
          </div>

          {/* Step 2: Forced <<include>> */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 2 
              ? "bg-emerald-600 text-white border-emerald-700 shadow-md scale-[1.02]" 
              : "bg-stone-50 border-stone-200 opacity-60"
          }`}>
            <div className={`text-[10px] font-bold uppercase mb-1 ${currentStep >= 2 ? "text-emerald-200" : "text-stone-500"}`}>
              Bước 2: &lt;&lt;include&gt;&gt; (Bắt Buộc)
            </div>
            <div className="text-xs font-extrabold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 shrink-0" />
              Authenticate User
            </div>
            <p className={`text-[11px] mt-1 ${currentStep >= 2 ? "text-emerald-100" : "text-stone-500"}`}>
              100% bắt buộc phải đăng nhập thành công mới được đi tiếp.
            </p>
          </div>

          {/* Step 3: Capacity Check & Branching */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 3 
              ? isClassFull
                ? "bg-amber-500 text-white border-amber-600 shadow-md scale-[1.02]"
                : "bg-emerald-50 border-emerald-500 shadow-xs"
              : "bg-stone-50 border-stone-200 opacity-60"
          }`}>
            <div className={`text-[10px] font-bold uppercase mb-1 ${
              currentStep >= 3 && isClassFull ? "text-amber-100" : "text-stone-500"
            }`}>
              Bước 3: Kiểm Tra Ngưỡng Sĩ Số
            </div>
            <div className="text-xs font-extrabold">
              {isClassFull ? "Chạm Ngưỡng 60/60" : "Còn Chỗ (45/60)"}
            </div>
            <p className={`text-[11px] mt-1 ${
              currentStep >= 3 && isClassFull ? "text-amber-100" : "text-stone-500"
            }`}>
              {isClassFull ? "Kích hoạt Extension Point 'at capacity'." : "Không thỏa mãn điều kiện extend."}
            </p>
          </div>

          {/* Step 4: Outcome */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 4 
              ? "bg-stone-900 text-white border-stone-900 shadow-md" 
              : "bg-stone-50 border-stone-200 opacity-60"
          }`}>
            <div className="text-[10px] font-bold text-amber-300 uppercase mb-1">Bước 4: Kết Quả Cuối</div>
            <div className="text-xs font-extrabold">
              {isClassFull ? "Add to Waitlist (Extend)" : "Enrolled (Base Complete)"}
            </div>
            <p className={`text-[11px] mt-1 ${currentStep >= 4 ? "text-stone-300" : "text-stone-500"}`}>
              {isClassFull 
                ? "Đưa vào danh sách chờ nhờ use case mở rộng." 
                : "Base UC tự thân hoàn tất thành công!"}
            </p>
          </div>
        </div>

        {/* Step Explanation & Action Controller */}
        <div className="mt-5 rounded-xl border border-stone-200 bg-stone-50/70 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="text-xs font-bold text-stone-800">
              {currentStep === 0 && "Sẵn sàng chạy mô phỏng kịch bản."}
              {currentStep === 1 && "Đang kích hoạt Base Use Case 'Register for Course'."}
              {currentStep === 2 && "Kích hoạt quan hệ <<include>>: Luồng bị tạm dừng chờ Authenticate User xác thực xong!"}
              {currentStep === 3 && (isClassFull ? "Extension Point đạt điều kiện: Lớp đầy sĩ số 60/60!" : "Lớp còn chỗ: Nhánh <<extend>> không cần kích hoạt.")}
              {currentStep === 4 && "Quy trình hoàn tất mỹ mãn."}
            </div>

            <div>
              {currentStep < 4 ? (
                <button
                  onClick={handleNextStep}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 shadow-xs transition-all"
                >
                  <Play className="w-3.5 h-3.5" />
                  {currentStep === 0 ? "Bắt Đầu Mô Phỏng" : "Chuyển Bước Tiếp Theo"}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-stone-900 text-white flex items-center gap-1.5 shadow-xs transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Chạy lại từ đầu
                </button>
              )}
            </div>
          </div>

          {/* Deep Insight Box */}
          <div className="p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-700 leading-relaxed">
            <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Điểm mấu chốt cần ghi nhớ:
            </div>
            <div>
              1. <strong>&lt;&lt;include&gt;&gt; là bắt buộc (Mandatory):</strong> Dù trong bất kỳ tình huống nào, Use Case <code>Authenticate User</code> đều BẮT BUỘC phải thực thi.
              <br />
              2. <strong>&lt;&lt;extend&gt;&gt; là tùy chọn (Optional):</strong> Base Use Case <code>Register for Course</code> tự bản thân nó vẫn là một Use Case hoàn chỉnh khi lớp còn chỗ. Nó chỉ rẽ nhánh sang <code>Add to Waitlist</code> khi xảy ra điều kiện đặc biệt (lớp đầy)!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
