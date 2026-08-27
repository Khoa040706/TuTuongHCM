"use client";

import React, { useState } from "react";
import {
  GitFork,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Table,
  Key,
  ShieldCheck,
  UserCheck
} from "lucide-react";

export default function SupertypeSubtypeHierarchyVisualizer() {
  const [selectedSubtype, setSelectedSubtype] = useState("hourly"); // 'hourly' | 'salaried' | 'consultant'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Inheritance Mapping Studio • Bước 7
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Chuyển Đổi Quan Hệ Kế Thừa Cha / Con (Supertype ➔ Subtype)
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-800 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-semibold">
          PK = FK Constraint
        </span>
      </div>

      {/* Main Hierarchy Showcase */}
      <div className="p-6 space-y-6">
        {/* Supertype Table (Cha) */}
        <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-3 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-orange-200/80 pb-2">
            <div className="text-xs font-bold font-mono text-orange-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" />
              1. Quan Hệ Cha (Supertype — Bảng Chính): EMPLOYEE
            </div>
            <span className="text-[11px] font-mono text-orange-800 px-2 py-0.5 rounded bg-orange-100 border border-orange-200 font-semibold">
              Chứa thuộc tính chung + Phân loại kiểu
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 font-mono text-xs text-slate-200 shadow-md">
            EMPLOYEE(<u>Employee_Number</u>, Employee_Name, Address, <span className="text-amber-300 font-bold">Employee_Type</span>, Date_Hired)
          </div>
          <p className="text-xs text-slate-700 font-sans leading-relaxed">
            Thuộc tính <code>Employee_Type</code> nhận các giá trị phân loại như <strong>"H"</strong> (Hourly), <strong>"S"</strong> (Salaried), <strong>"C"</strong> (Consultant).
          </p>
        </div>

        {/* Subtype Selectors */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
            2. Chọn một Thực thể con (Subtype) để xem cơ chế khóa:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => setSelectedSubtype("hourly")}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedSubtype === "hourly"
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30 font-semibold"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-xs font-bold">HOURLY_EMPLOYEE</div>
              <div className="text-[10px] text-orange-700 font-mono mt-0.5">Nhân viên tính theo giờ</div>
            </button>

            <button
              onClick={() => setSelectedSubtype("salaried")}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedSubtype === "salaried"
                  ? "bg-blue-50 border-blue-500 text-blue-950 shadow-sm ring-1 ring-blue-400/30 font-semibold"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-xs font-bold">SALARIED_EMPLOYEE</div>
              <div className="text-[10px] text-blue-700 font-mono mt-0.5">Nhân viên hưởng lương cố định</div>
            </button>

            <button
              onClick={() => setSelectedSubtype("consultant")}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedSubtype === "consultant"
                  ? "bg-purple-50 border-purple-500 text-purple-950 shadow-sm ring-1 ring-purple-400/30 font-semibold"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-xs font-bold">CONSULTANT</div>
              <div className="text-[10px] text-purple-700 font-mono mt-0.5">Chuyên gia tư vấn hợp đồng</div>
            </button>
          </div>
        </div>

        {/* Selected Subtype Schema */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs shadow-sm">
          <div className="text-slate-900 font-bold flex items-center gap-2">
            <Key className="w-4 h-4 text-orange-600" />
            Lược đồ quan hệ con tương ứng:
          </div>

          {selectedSubtype === "hourly" && (
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-200 leading-relaxed shadow-md">
              HOURLY_EMPLOYEE(<u>H_Employee_Number</u>, Hourly_Rate)
            </div>
          )}

          {selectedSubtype === "salaried" && (
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-200 leading-relaxed shadow-md">
              SALARIED_EMPLOYEE(<u>S_Employee_Number</u>, Annual_Salary, Stock_Options)
            </div>
          )}

          {selectedSubtype === "consultant" && (
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-purple-200 leading-relaxed shadow-md">
              CONSULTANT(<u>C_Employee_Number</u>, Contract_Number, Billing_Rate)
            </div>
          )}

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-sans leading-relaxed flex items-start gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Quy tắc bất biến:</strong> Khóa chính của các bảng con (<code>H_Employee_Number</code>, <code>S_Employee_Number</code>, <code>C_Employee_Number</code>) <strong>VỪA LÀ KHÓA CHÍNH VỪA LÀ KHÓA NGOẠI</strong> tham chiếu trực tiếp về <code>Employee_Number</code> của bảng cha <code>EMPLOYEE</code>. Giữa bảng cha và mỗi bảng con hình thành <strong>mối quan hệ 1:1</strong>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
