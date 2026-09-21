"use client";
import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Server, 
  Check,
  ShieldAlert,
  Database
} from "lucide-react";

export default function CourseRegistrationScenarioRunner() {
  const [hasPrerequisiteError, setHasPrerequisiteError] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0 = idle, 1..5 = steps, 3.5 = 3a
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setCurrentStep(1);
    setIsRunning(true);
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (hasPrerequisiteError) {
        setCurrentStep(3.5); // Branch to Alternate Flow 3a
        setIsRunning(false);
      } else {
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsRunning(false);
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7 shadow-lg shadow-stone-200/50 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
              Live Scenario Simulation
            </span>
          </div>
          <h3 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            Mô Phỏng Kịch Bản Use Case: "Register for Course"
          </h3>
        </div>

        {/* Condition Toggle Switch */}
        <div className="flex items-center gap-2.5 bg-stone-50 px-3.5 py-1.5 rounded-2xl border border-stone-200 text-xs">
          <span className="font-semibold text-stone-700">Kịch bản ngoại lệ:</span>
          <button
            onClick={() => {
              setHasPrerequisiteError(!hasPrerequisiteError);
              handleReset();
            }}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              hasPrerequisiteError ? "bg-rose-500" : "bg-stone-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hasPrerequisiteError ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-bold ${hasPrerequisiteError ? "text-rose-600" : "text-stone-400"}`}>
            {hasPrerequisiteError ? "3a. Rớt Môn Tiên Quyết" : "Bình Thường (Happy Path)"}
          </span>
        </div>
      </div>

      {/* Precondition & Trigger Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 text-xs">
        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
          <span className="font-mono font-bold text-stone-500 uppercase text-[10px] block">
            Preconditions (Tiền điều kiện bắt buộc):
          </span>
          <div className="flex items-center gap-2 mt-1 text-stone-800 font-medium">
            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
            <span>Student đã đăng nhập (authenticated) & chưa vượt credit limit.</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
          <span className="font-mono font-bold text-stone-500 uppercase text-[10px] block">
            Trigger (Sự kiện kích hoạt):
          </span>
          <div className="flex items-center gap-2 mt-1 text-stone-800 font-medium">
            <Sparkles size={14} className="text-emerald-600 shrink-0" />
            <span>Student gửi yêu cầu thêm học phần CS101 - Lớp 02.</span>
          </div>
        </div>
      </div>

      {/* 5-Step Pipeline Flow View */}
      <div className="space-y-3 my-6">
        {/* Step 1 */}
        <div className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
          currentStep >= 1 ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-xs" : "border-stone-200 bg-stone-50/40 text-stone-400"
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs ${
              currentStep >= 1 ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-200 text-stone-500"
            }`}>
              1
            </div>
            <div>
              <div className="font-bold text-xs md:text-sm">Student chọn một course section</div>
              <div className="text-[11px] opacity-80">Sinh viên chọn học phần và nhấn nút "Đăng Ký".</div>
            </div>
          </div>
          {currentStep >= 1 && <Check size={16} className="text-emerald-700 shrink-0" />}
        </div>

        {/* Step 2 */}
        <div className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
          currentStep >= 2 ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-xs" : "border-stone-200 bg-stone-50/40 text-stone-400"
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs ${
              currentStep >= 2 ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-200 text-stone-500"
            }`}>
              2
            </div>
            <div>
              <div className="font-bold text-xs md:text-sm">System kiểm tra seat availability (chỗ trống)</div>
              <div className="text-[11px] opacity-80">Truy vấn CSDL: Sĩ số lớp 38/40 ➔ Còn 2 chỗ trống hợp lệ.</div>
            </div>
          </div>
          {currentStep >= 2 && <Check size={16} className="text-emerald-700 shrink-0" />}
        </div>

        {/* Step 3 or Alternate Flow 3a */}
        {currentStep === 3.5 ? (
          <div className="p-4 rounded-2xl border-2 border-rose-500 bg-rose-50/90 text-rose-950 shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-rose-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                3a
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm flex items-center gap-2 text-rose-900">
                  <AlertTriangle size={16} className="text-rose-600" />
                  <span>Alternate Flow 3a: Prerequisite Not Met (Môn tiên quyết chưa đạt)!</span>
                </div>
                <div className="text-xs mt-1.5 space-y-1 text-rose-800">
                  <p>• <strong>System từ chối request:</strong> Sinh viên chưa hoàn thành môn CS100 (Nhập môn lập trình).</p>
                  <p>• <strong>System thông báo lỗi:</strong> "Đăng ký không thành công: Bạn cần qua môn CS100 trước khi học CS101."</p>
                  <p>• <strong>Kết quả:</strong> Luồng kết thúc tại đây, KHÔNG ghi danh và KHÔNG cập nhật danh sách lớp.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
            currentStep >= 3 ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-xs" : "border-stone-200 bg-stone-50/40 text-stone-400"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs ${
                currentStep >= 3 ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-200 text-stone-500"
              }`}>
                3
              </div>
              <div>
                <div className="font-bold text-xs md:text-sm">System kiểm tra prerequisites (môn tiên quyết)</div>
                <div className="text-[11px] opacity-80">Xác nhận sinh viên đã qua môn CS100 đạt điểm C trở lên.</div>
              </div>
            </div>
            {currentStep >= 3 && <Check size={16} className="text-emerald-700 shrink-0" />}
          </div>
        )}

        {/* Step 4 */}
        <div className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
          currentStep >= 4 ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-xs" : "border-stone-200 bg-stone-50/40 text-stone-400"
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs ${
              currentStep >= 4 ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-200 text-stone-500"
            }`}>
              4
            </div>
            <div>
              <div className="font-bold text-xs md:text-sm">System enroll student (Ghi danh vào CSDL)</div>
              <div className="text-[11px] opacity-80">Ghi nhận bản ghi Enrollment, sĩ số lớp tăng lên 39/40.</div>
            </div>
          </div>
          {currentStep >= 4 && <Check size={16} className="text-emerald-700 shrink-0" />}
        </div>

        {/* Step 5 */}
        <div className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
          currentStep >= 5 ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-xs" : "border-stone-200 bg-stone-50/40 text-stone-400"
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs ${
              currentStep >= 5 ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-200 text-stone-500"
            }`}>
              5
            </div>
            <div>
              <div className="font-bold text-xs md:text-sm">System xác nhận enrollment thành công</div>
              <div className="text-[11px] opacity-80">Hiển thị thông báo màu xanh và gửi email biên nhận tới sinh viên.</div>
            </div>
          </div>
          {currentStep >= 5 && <Check size={16} className="text-emerald-700 shrink-0" />}
        </div>
      </div>

      {/* Execution Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-100">
        <div className="text-xs text-stone-500">
          {currentStep === 0 && "Nhấn 'Bắt Đầu Chạy' để theo dõi từng bước."}
          {currentStep >= 1 && currentStep < 5 && currentStep !== 3.5 && "Nhấn 'Bước Tiếp Theo' để hệ thống xử lý tiếp."}
          {currentStep === 5 && (
            <span className="font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 size={14} /> Hoàn tất Main Success Scenario! Hậu điều kiện (Postcondition) đã đạt.
            </span>
          )}
          {currentStep === 3.5 && (
            <span className="font-bold text-rose-700 flex items-center gap-1.5">
              <XCircle size={14} /> Bị chặn tại Alternate Flow 3a! Use Case kết thúc không đạt mục tiêu.
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {currentStep > 0 && (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-600 hover:bg-stone-50 cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw size={13} />
              <span>Chạy lại</span>
            </button>
          )}

          {currentStep === 0 ? (
            <button
              onClick={handleStart}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-2"
            >
              <Play size={14} />
              <span>Bắt Đầu Chạy Kịch Bản</span>
            </button>
          ) : currentStep < 5 && currentStep !== 3.5 ? (
            <button
              onClick={handleNextStep}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-2"
            >
              <span>Bước Tiếp Theo</span>
              <ArrowRight size={14} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
