"use client";

import React, { useState } from "react";
import {
  Divide,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Cpu,
  ChevronRight,
  RotateCcw
} from "lucide-react";

export default function RelationalDivisionStepByStepVisualizer() {
  const [currentStep, setCurrentStep] = useState(1);

  const studentCourses = [
    { sv: "SV01", mh: "CSDL" },
    { sv: "SV01", mh: "CCT" },
    { sv: "SV02", mh: "CSDL" },
    { sv: "SV03", mh: "CSDL" },
    { sv: "SV03", mh: "CCT" },
    { sv: "SV03", mh: "MMT" }
  ];

  const requiredCourses = ["CSDL", "CCT"];

  const steps = [
    {
      step: 1,
      title: "1. Xác Định Quan Hệ Bị Chia r và Quan Hệ Chia s",
      desc: "Quan hệ r(MaSV, MaMH) lưu lịch sử đăng ký môn học của SV. Quan hệ s(MaMH) lưu 2 môn bắt buộc: {CSDL, CCT}.",
      activeFocus: "inputs"
    },
    {
      step: 2,
      title: "2. Chiếu Lấy Toàn Bộ Ứng Viên Sinh Viên: T₁ = π_(MaSV)(r)",
      desc: "Trích xuất danh sách duy nhất các sinh viên đang có trong hệ thống: T₁ = {SV01, SV02, SV03}.",
      activeFocus: "candidates"
    },
    {
      step: 3,
      title: "3. Kiểm Thử Lượng Từ Với Mọi (∀): Đối Chiếu Từng Ứng Viên",
      desc: "• SV01: Đã học {CSDL, CCT} ➔ Đạt 100% môn trong s.\n• SV02: Chỉ học {CSDL}, thiếu {CCT} ➔ Không đạt!\n• SV03: Đã học {CSDL, CCT, MMT} ➔ Đạt (chứa đủ tập s).",
      activeFocus: "evaluation"
    },
    {
      step: 4,
      title: "4. Xuất Bảng Kết Quả Phép Chia: r ÷ s",
      desc: "Kết quả cuối cùng gồm các sinh viên thỏa mãn TẤT CẢ các môn học trong s: {SV01, SV03}.",
      activeFocus: "result"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Divide className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Universal Quantifier Engine • Mục 2.10
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Trực Quan Hóa Từng Bước Phép Chia Đại Số Quan Hệ (r ÷ s)
            </h3>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-mono disabled:opacity-40 hover:bg-slate-50 shadow-sm transition-all"
          >
            ◀ Lùi lại
          </button>
          <span className="text-xs font-mono text-orange-800 font-bold px-2">
            Bước {currentStep} / {steps.length}
          </span>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(steps.length, prev + 1))}
            disabled={currentStep === steps.length}
            className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-mono font-bold disabled:opacity-40 hover:bg-orange-700 shadow-sm transition-all"
          >
            Tiếp theo ▶
          </button>
        </div>
      </div>

      {/* Step Info Banner */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-200 space-y-1">
        <div className="text-xs font-bold text-orange-800 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-orange-600" /> {steps[currentStep - 1].title}
        </div>
        <p className="text-slate-700 text-xs font-sans whitespace-pre-line leading-relaxed">
          {steps[currentStep - 1].desc}
        </p>
      </div>

      {/* Interactive Visualizer Canvas */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Table r */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="text-xs font-bold text-orange-800 font-mono flex items-center justify-between">
              <span>Quan hệ bị chia r(MaSV, MaMH)</span>
              <span className="text-slate-500 text-[10px]">6 bộ</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse font-mono bg-white rounded-lg overflow-hidden border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                    <th className="p-2">MaSV</th>
                    <th className="p-2">MaMH</th>
                    <th className="p-2 text-center">Đánh Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {studentCourses.map((row, idx) => {
                    const isRequired = requiredCourses.includes(row.mh);
                    return (
                      <tr
                        key={idx}
                        className={`border-b border-slate-100 transition-all ${
                          isRequired ? "bg-orange-50/70 text-slate-900" : "bg-white text-slate-500"
                        }`}
                      >
                        <td className="p-2 font-bold">{row.sv}</td>
                        <td className="p-2 text-orange-800 font-semibold">{row.mh}</td>
                        <td className="p-2 text-center text-[10px]">
                          {isRequired ? (
                            <span className="text-orange-800 font-semibold">Thuộc tập s</span>
                          ) : (
                            <span className="text-slate-400">Môn ngoài</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table s */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="text-xs font-bold text-blue-800 font-mono flex items-center justify-between">
              <span>Quan hệ chia s(MaMH)</span>
              <span className="text-slate-500 text-[10px]">Tập điều kiện</span>
            </div>
            <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm">
              <div className="text-xs text-slate-700 font-sans">
                Yêu cầu: Sinh viên phải học <strong>TẤT CẢ</strong> các môn sau:
              </div>
              <div className="flex gap-2 font-mono text-xs">
                <span className="px-3 py-1 rounded bg-blue-100 border border-blue-300 text-blue-900 font-bold shadow-sm">
                  CSDL
                </span>
                <span className="px-3 py-1 rounded bg-blue-100 border border-blue-300 text-blue-900 font-bold shadow-sm">
                  CCT
                </span>
              </div>
            </div>

            {/* Candidate evaluation on Step >= 3 */}
            {currentStep >= 3 && (
              <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-2 text-xs shadow-sm">
                <div className="font-bold text-slate-900">Kết quả kiểm thử từng SV:</div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
                    <span>• SV01: Đủ {`{CSDL, CCT}`}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-rose-50 text-rose-900 border border-rose-200 font-semibold">
                    <span>• SV02: Thiếu CCT</span>
                    <XCircle className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
                    <span>• SV03: Đủ {`{CSDL, CCT}`}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Final Result Card */}
        {currentStep === 4 && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 flex flex-wrap items-center justify-between gap-3 shadow-sm animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                  Quan hệ thương (r ÷ s):
                </div>
                <div className="text-sm font-bold text-emerald-950 font-mono">
                  r ÷ s = {"{ (SV01), (SV03) }"}
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-700 font-sans">
              💡 Phép chia đại số quan hệ là công cụ toán học tối thượng để xử lý các câu truy vấn mang ý nghĩa <strong>"Toàn thể" (Universal)</strong>.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
