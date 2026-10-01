"use client";

import React, { useState } from "react";
import {
  RotateCcw,
  Network,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  HelpCircle
} from "lucide-react";

export default function RecursiveAndTernaryJoinStudio() {
  const [viewMode, setViewMode] = useState("recursive"); // 'recursive' | 'ternary' | 'patient'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 w-full min-w-0">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Network className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Advanced Relations Studio • Bước 5 & Bước 6
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Quan Hệ Đệ Quy (Unary) & Quan Hệ Ba Ngôi (Ternary N-ary)
            </h3>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
          <button
            onClick={() => setViewMode("recursive")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "recursive" ? "bg-orange-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Đệ Quy 1:N (Manager)
          </button>
          <button
            onClick={() => setViewMode("ternary")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "ternary" ? "bg-blue-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Ba Ngôi (Supplies n+1)
          </button>
          <button
            onClick={() => setViewMode("patient")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "patient" ? "bg-purple-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Ba Ngôi Định Danh Riêng
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-5 sm:p-6 space-y-5 min-w-0">
        {/* VIEW 1: RECURSIVE (UNARY) */}
        {viewMode === "recursive" && (
          <div className="space-y-4 min-w-0">
            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs space-y-2 shadow-sm min-w-0">
              <div className="font-bold text-orange-800 font-mono flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>QUAN HỆ MỘT NGÔI ĐỆ QUY (RECURSIVE FOREIGN KEY):</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-sans break-words">
                Trong quan hệ 1:N giữa các nhân viên trong cùng một công ty (Nhân viên quản lý nhân viên khác), ta chỉ cần <strong>tạo một cột khóa ngoại đệ quy <code>Manager_ID</code></strong> nằm ngay trong chính bảng <code>EMPLOYEE</code> tham chiếu ngược về <code>Employee_ID</code>.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs shadow-md min-w-0 overflow-hidden">
              <div className="p-3 rounded-lg bg-slate-950 text-amber-200 border-l-4 border-orange-500 leading-relaxed border border-slate-800 overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                EMPLOYEE(<u>Employee_ID</u>, Name, Birthdate, Manager_ID)
              </div>
              <div className="text-[11px] text-orange-300 font-sans pt-1 leading-relaxed">
                • <strong>Khóa chính:</strong> Employee_ID<br/>
                • <strong>Khóa ngoại đệ quy:</strong> Manager_ID tham chiếu ngược về Employee_ID của cùng quan hệ EMPLOYEE.
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: TERNARY (n+1 RELATIONS) */}
        {viewMode === "ternary" && (
          <div className="space-y-4 min-w-0">
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-2 shadow-sm min-w-0">
              <div className="font-bold text-blue-800 font-mono flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>QUY TẮC SINH N + 1 QUAN HỆ TRONG MỐI QUAN HỆ N-NGÔI:</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-sans break-words">
                Khi có <strong>n thực thể tham gia mối quan hệ liên kết</strong> (VD: Nhà cung cấp <code>VENDOR</code>, Phụ tùng <code>PART</code>, Kho hàng <code>WAREHOUSE</code>), quy tắc chuyển đổi chuẩn là sinh ra đúng <strong>n + 1 quan hệ</strong>: n quan hệ cho n thực thể + 1 quan hệ kết hợp chứa tổ hợp các khóa ngoại.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs shadow-md min-w-0 overflow-hidden">
              <div className="text-slate-400 font-bold">► 3 Quan hệ Thực thể cơ sở:</div>
              <div className="space-y-1.5 text-slate-300">
                <div className="p-2 rounded bg-slate-950 border border-slate-800 overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                  VENDOR(<u>Vendor_ID</u>, Vendor_Name, ...)
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                  PART(<u>Part_ID</u>, Part_Name, ...)
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                  WAREHOUSE(<u>Warehouse_ID</u>, Warehouse_Name, ...)
                </div>
              </div>

              <div className="text-slate-400 pt-2 font-bold">► 1 Quan hệ Kết hợp trung gian:</div>
              <div className="p-3 rounded-lg bg-slate-950 text-blue-200 border-l-4 border-blue-500 border border-slate-800 overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                SUPPLIES(<u>Vendor_ID</u>, <u>Part_ID</u>, <u>Warehouse_ID</u>, Shipping_mode, Unit_cost)
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: TERNARY WITH OWN IDENTIFIER */}
        {viewMode === "patient" && (
          <div className="space-y-4 min-w-0">
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs space-y-2 shadow-sm min-w-0">
              <div className="font-bold text-purple-800 font-mono flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>QUAN HỆ BA NGÔI CÓ DANH ĐỊNH NGHIỆP VỤ RIÊNG:</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-sans break-words">
                Ví dụ mối quan hệ giữa Bệnh nhân (PATIENT), Bác sĩ (PHYSICIAN) và Phác đồ điều trị (TREATMENT) được đặt tên là <code>PATIENT_TREATMENT</code>. Người thiết kế cần chọn khóa chính đảm bảo tính duy nhất tuyệt đối theo nghiệp vụ thực tế.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs shadow-md min-w-0 overflow-hidden">
              <div className="p-3 rounded-lg bg-slate-950 text-purple-200 border-l-4 border-purple-500 leading-relaxed border border-slate-800 overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                PATIENT_TREATMENT(<u>Patient_ID</u>, <u>Physician_ID</u>, <u>Treatment_Code</u>, <u>Date</u>, <u>Time</u>, Results)
              </div>
              <div className="text-[11px] text-purple-300 font-sans pt-1 leading-relaxed">
                • <strong>Nguyên tắc vàng:</strong> Khóa chính bắt buộc phải đảm bảo tính duy nhất (Unique).
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
