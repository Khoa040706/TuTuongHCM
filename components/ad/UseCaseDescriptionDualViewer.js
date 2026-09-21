"use client";
import React, { useState } from "react";
import { 
  Columns, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  AlertCircle,
  Eye,
  SlidersHorizontal
} from "lucide-react";

export default function UseCaseDescriptionDualViewer() {
  const [highlightField, setHighlightField] = useState("all");

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7 shadow-lg shadow-stone-200/50 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
              Dual-Viewer Comparison
            </span>
          </div>
          <h3 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            Đối Chiếu 2 Mức Độ Đặc Tả: Brief vs Fully Dressed Description
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">
          <SlidersHorizontal size={13} className="text-emerald-700" />
          <span>Bật/tắt trường để soi sự tiến hóa</span>
        </div>
      </div>

      {/* Field Filter Highlights */}
      <div className="flex flex-wrap items-center gap-2 my-5 text-xs">
        <span className="font-bold text-stone-500 text-[11px] uppercase font-mono mr-1">
          Soi trường dữ liệu:
        </span>
        {[
          { id: "all", label: "Tất cả (All)" },
          { id: "trigger", label: "Trigger (Kích hoạt)" },
          { id: "precondition", label: "Precondition (Tiền điều kiện)" },
          { id: "flow", label: "Main Flow (Luồng chính)" },
          { id: "alternate", label: "Alternate Flow (Luồng rẽ nhánh)" },
          { id: "postcondition", label: "Postcondition (Hậu điều kiện)" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setHighlightField(btn.id)}
            className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer border ${
              highlightField === btn.id
                ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Split-Screen 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        {/* Left Column: Brief Description */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-400" />
                <h4 className="text-xs md:text-sm font-bold text-stone-800 uppercase font-mono tracking-wider">
                  A. Brief Description (Inception Phase)
                </h4>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-700">
                Gọn nhẹ • Ít overhead
              </span>
            </div>

            {/* When to use */}
            <div className="my-4 text-xs text-stone-600 space-y-1 bg-white p-3 rounded-xl border border-stone-200">
              <strong className="font-semibold text-stone-800 block text-[11px] uppercase font-mono">
                Mục đích sử dụng:
              </strong>
              <p>• Dùng rất sớm trong Inception để thống nhất phạm vi (Scope).</p>
              <p>• Trình bày nhanh với Stakeholders để xác nhận hiểu đúng ý.</p>
              <p>• Tốc độ viết nhanh, không tốn thời gian phân tích chi tiết.</p>
            </div>

            {/* Example Box */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest mb-1.5">
                Ví dụ thực tế: Use Case "Register for Course"
              </div>
              <blockquote className={`text-xs md:text-sm font-medium leading-relaxed italic font-playfair p-3 rounded-lg border-l-4 transition-all ${
                highlightField === "flow" || highlightField === "all"
                  ? "bg-emerald-50 border-emerald-500 text-emerald-950"
                  : "bg-stone-50 border-stone-300 text-stone-700"
              }`}>
                “Student chọn một course section và hệ thống xác nhận enrollment nếu còn chỗ.”
              </blockquote>

              <div className="mt-4 text-xs text-stone-500 space-y-1.5 pt-3 border-t border-stone-100">
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Chưa có:</strong> Tiền điều kiện (Sinh viên đã đăng nhập chưa? Có bị nợ học phí không?).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Chưa có:</strong> Luồng ngoại lệ (Hết chỗ thì sao? Chưa học môn tiên quyết thì sao?).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Chưa có:</strong> Hậu điều kiện (Class roster được cập nhật như thế nào?).</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-stone-100 text-[11px] text-stone-600 font-medium">
            💡 <strong>Quy tắc BA:</strong> Trong Inception, hãy viết Brief Description cho 100% Use Case để khóa ranh giới Scope trước.
          </div>
        </div>

        {/* Right Column: Fully Dressed Description */}
        <div className="rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50/50 via-white to-stone-50/30 p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-emerald-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <h4 className="text-xs md:text-sm font-bold text-emerald-950 uppercase font-mono tracking-wider">
                  B. Fully Dressed Description (Elaboration)
                </h4>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Chi tiết • Cấu trúc chuẩn
              </span>
            </div>

            {/* When to use */}
            <div className="my-4 text-xs text-stone-600 space-y-1 bg-white p-3 rounded-xl border border-emerald-100">
              <strong className="font-semibold text-emerald-900 block text-[11px] uppercase font-mono">
                Mục đích sử dụng:
              </strong>
              <p>• Làm đầu vào trực tiếp cho Đội thiết kế kiến trúc (Architecture & Design).</p>
              <p>• Cung cấp cơ sở viết kịch bản kiểm thử (Test Cases & Test Scenarios).</p>
              <p>• Bàn giao lập trình viên (Developer Hand-off) không còn mơ hồ.</p>
            </div>

            {/* Template Fields Breakdown */}
            <div className="space-y-2.5 text-xs">
              {/* Precondition */}
              <div className={`p-2.5 rounded-xl border transition-all ${
                highlightField === "precondition" || highlightField === "all"
                  ? "bg-amber-50/80 border-amber-300 text-amber-950"
                  : "bg-white border-stone-200 text-stone-600"
              }`}>
                <div className="font-bold font-mono text-[11px] uppercase">
                  Precondition (Tiền điều kiện):
                </div>
                <div className="font-medium mt-0.5">• Student đã authenticated • Chưa vượt credit limit</div>
              </div>

              {/* Trigger */}
              <div className={`p-2.5 rounded-xl border transition-all ${
                highlightField === "trigger" || highlightField === "all"
                  ? "bg-blue-50/80 border-blue-300 text-blue-950"
                  : "bg-white border-stone-200 text-stone-600"
              }`}>
                <div className="font-bold font-mono text-[11px] uppercase">
                  Trigger (Sự kiện kích hoạt):
                </div>
                <div className="font-medium mt-0.5">• Student gửi yêu cầu thêm một course section vào thời khóa biểu</div>
              </div>

              {/* Main Success Scenario */}
              <div className={`p-3 rounded-xl border transition-all ${
                highlightField === "flow" || highlightField === "all"
                  ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                  : "bg-white border-stone-200 text-stone-600"
              }`}>
                <div className="font-bold font-mono text-[11px] uppercase text-emerald-900 mb-1">
                  Main Success Scenario (Normal Flow 5 bước):
                </div>
                <ol className="list-decimal list-inside space-y-1 font-medium text-[11px]">
                  <li>Student chọn một course section.</li>
                  <li>System kiểm tra seat availability (chỗ trống).</li>
                  <li>System kiểm tra prerequisites (môn tiên quyết).</li>
                  <li>System enroll student vào danh sách.</li>
                  <li>System xác nhận enrollment thành công.</li>
                </ol>
              </div>

              {/* Alternate Flow */}
              <div className={`p-2.5 rounded-xl border transition-all ${
                highlightField === "alternate" || highlightField === "all"
                  ? "bg-rose-50/80 border-rose-300 text-rose-950"
                  : "bg-white border-stone-200 text-stone-600"
              }`}>
                <div className="font-bold font-mono text-[11px] uppercase text-rose-900">
                  Alternate Flow 3a (Nhánh rẽ lỗi):
                </div>
                <div className="font-medium mt-0.5">• 3a. Prerequisite not met ➔ System từ chối & báo lỗi cho Student</div>
              </div>

              {/* Postcondition */}
              <div className={`p-2.5 rounded-xl border transition-all ${
                highlightField === "postcondition" || highlightField === "all"
                  ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                  : "bg-white border-stone-200 text-stone-600"
              }`}>
                <div className="font-bold font-mono text-[11px] uppercase">
                  Postcondition (Hậu điều kiện):
                </div>
                <div className="font-medium mt-0.5">• Student đã được enrolled • Class roster được cập nhật</div>
              </div>
            </div>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-emerald-100/60 text-[11px] text-emerald-950 font-medium">
            🎯 <strong>Chuyển giao:</strong> Từ Brief (Inception) sang Fully Dressed (Elaboration) là bước nhảy vọt về độ chính xác của kỹ nghệ phần mềm.
          </div>
        </div>
      </div>
    </div>
  );
}
