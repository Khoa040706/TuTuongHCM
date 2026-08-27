"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  Database,
  Link2
} from "lucide-react";

export default function WeakAndAssociativeEntityStudio() {
  const [activeTab, setActiveTab] = useState("weak"); // 'weak' | 'assoc-id' | 'assoc-noid'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Composite Keys Studio • Bước 2 & Bước 4
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Studio Đối Chiếu: Thực Thể Yếu (Weak Entity) & Thực Thể Kết Hợp (Associative Entity)
            </h3>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
          <button
            onClick={() => setActiveTab("weak")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "weak" ? "bg-orange-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Thực Thể Yếu (DEPENDENT)
          </button>
          <button
            onClick={() => setActiveTab("assoc-id")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "assoc-id" ? "bg-blue-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Thực Thể Kết Hợp (Có ID Riêng)
          </button>
          <button
            onClick={() => setActiveTab("assoc-noid")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "assoc-noid" ? "bg-purple-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Thực Thể Kết Hợp (Không Có ID)
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="p-6 space-y-5">
        {/* CASE 1: WEAK ENTITY */}
        {activeTab === "weak" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs space-y-2 shadow-sm">
              <div className="font-bold text-orange-800 flex items-center gap-1.5 font-mono">
                <KeyRound className="w-4 h-4 text-orange-600" /> BẢN CHẤT KHÓA CHÍNH KÉP CỦA THỰC THỂ YẾU:
              </div>
              <p className="text-slate-700 leading-relaxed font-sans">
                Thực thể yếu không thể tự định danh độc lập. Vì vậy, Khóa chính của bảng sinh ra bắt buộc phải kết hợp giữa: <strong>Khóa riêng phần (Partial Key)</strong> của bản thân nó + <strong>Khóa chính của Thực thể mạnh (Chủ sở hữu)</strong>. Khóa ngoại tham chiếu về thực thể mạnh <strong>KHÔNG ĐƯỢC PHÉP NULL</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs shadow-md">
              <div className="text-slate-400">► Quan hệ Thực Thể Mạnh:</div>
              <div className="p-3 rounded-lg bg-slate-950 text-amber-200 border border-slate-800">
                EMPLOYEE(<u>Employee_ID</u>, Employee_Name)
              </div>

              <div className="text-slate-400 pt-2">► Quan hệ Thực Thể Yếu (Người phụ thuộc):</div>
              <div className="p-3 rounded-lg bg-slate-950 text-amber-200 border-l-4 border-orange-500 border border-slate-800">
                DEPENDENT(<u>First_Name</u>, <u>Employee_ID</u>, Middle_Initial, Last_Name, Date_of_Birth, Gender)
              </div>
              <div className="text-[11px] text-orange-300 font-sans">
                • <strong>Khóa chính:</strong> (First_Name, Employee_ID)<br/>
                • <strong>Khóa ngoại:</strong> Employee_ID tham chiếu về EMPLOYEE (NOT NULL).
              </div>
            </div>
          </div>
        )}

        {/* CASE 2: ASSOCIATIVE ENTITY WITH OWN ID */}
        {activeTab === "assoc-id" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-2 shadow-sm">
              <div className="font-bold text-blue-800 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-4 h-4 text-blue-600" /> THỰC THỂ KẾT HỢP CÓ DANH HIỆU TỰ NHIÊN RIÊNG:
              </div>
              <p className="text-slate-700 leading-relaxed font-sans">
                Khi thực thể kết hợp có sẵn một mã định danh tự nhiên (VD: Mã vận đơn <code>Shipment_No</code>), ta lấy trực tiếp mã này làm <strong>Khóa chính duy nhất</strong>. Khóa chính của các thực thể tham gia (Customer, Vendor) chỉ đóng vai trò là các <strong>Khóa ngoại thông thường</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs shadow-md">
              <div className="p-3 rounded-lg bg-slate-950 text-blue-200 border-l-4 border-blue-500 leading-relaxed border border-slate-800">
                SHIPMENT(<u>Shipment_No</u>, Customer_ID, Vendor_ID, Date, Amount)
              </div>
              <div className="text-[11px] text-blue-300 font-sans pt-1">
                • <strong>Khóa chính:</strong> Shipment_No (Đơn thuộc tính)<br/>
                • <strong>Khóa ngoại:</strong> Customer_ID (FK), Vendor_ID (FK).
              </div>
            </div>
          </div>
        )}

        {/* CASE 3: ASSOCIATIVE ENTITY WITHOUT OWN ID */}
        {activeTab === "assoc-noid" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs space-y-2 shadow-sm">
              <div className="font-bold text-purple-800 flex items-center gap-1.5 font-mono">
                <Link2 className="w-4 h-4 text-purple-600" /> THỰC THỂ KẾT HỢP KHÔNG CÓ DANH HIỆU RIÊNG:
              </div>
              <p className="text-slate-700 leading-relaxed font-sans">
                Khi thực thể kết hợp không có danh hiệu tự nhiên riêng (VD: Bảng báo giá <code>QUOTE</code> giữa Vật tư và Nhà cung cấp), ta xử lý <strong>giống hệt mối quan hệ nhiều-nhiều (M:N)</strong>: Khóa chính là <strong>tổ hợp của cả 2 khóa ngoại</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs shadow-md">
              <div className="p-3 rounded-lg bg-slate-950 text-purple-200 border-l-4 border-purple-500 leading-relaxed border border-slate-800">
                QUOTE(<u>Material_ID</u>, <u>Vendor_ID</u>, Unit_Price)
              </div>
              <div className="text-[11px] text-purple-300 font-sans pt-1">
                • <strong>Khóa chính:</strong> Tổ hợp (Material_ID, Vendor_ID)<br/>
                • <strong>Khóa ngoại:</strong> Material_ID (FK về RAW_MATERIALS), Vendor_ID (FK về VENDOR).
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
