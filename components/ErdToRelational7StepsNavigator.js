"use client";

import React, { useState } from "react";
import {
  GitBranch,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Table,
  Cpu,
  Key,
  Link2,
  ChevronRight,
  ChevronLeft,
  Database,
  Eye
} from "lucide-react";

export default function ErdToRelational7StepsNavigator() {
  const [activeStep, setActiveStep] = useState(1);

  const stepsData = [
    {
      step: 1,
      name: "Bước 1: Thực Thể Thường",
      shortName: "Thực thể thường",
      tag: "Regular Entities",
      erdDesc: "Thực thể thông thường với các thuộc tính đơn, phức hợp và đa trị.",
      rule: "• Thuộc tính đơn: chuyển trực tiếp.\n• Thuộc tính phức hợp: chỉ lấy các thuộc tính con đơn thành phần (bỏ thuộc tính gộp cha).\n• Thuộc tính đa trị: tách thành một quan hệ riêng kèm khóa ngoại trỏ về quan hệ cha.",
      schema: [
        "CUSTOMER(<u>Customer_ID</u>, Customer_Name, Street, City, State, Zip)",
        "EMPLOYEE(<u>Employee_ID</u>, Employee_Name, Employee_Address)",
        "EMPLOYEE_SKILL(<u>Employee_ID</u>, <u>Skill</u>) -- [Employee_ID là FK]"
      ]
    },
    {
      step: 2,
      name: "Bước 2: Thực Thể Yếu",
      shortName: "Thực thể yếu",
      tag: "Weak Entities",
      erdDesc: "Thực thể yếu không tự đứng độc lập, phụ thuộc định danh vào thực thể mạnh.",
      rule: "• Chuyển thành một quan hệ riêng.\n• Khóa chính = Khóa riêng phần (Partial Key) + Khóa ngoại của thực thể mạnh (chủ sở hữu).\n• Khóa ngoại tham chiếu đến thực thể mạnh bắt buộc NOT NULL.",
      schema: [
        "EMPLOYEE(<u>Employee_ID</u>, Employee_Name)",
        "DEPENDENT(<u>First_Name</u>, <u>Employee_ID</u>, Middle_Initial, Last_Name, Date_of_Birth, Gender) -- [Employee_ID là FK]"
      ]
    },
    {
      step: 3,
      name: "Bước 3: Quan Hệ Hai Ngôi",
      shortName: "Quan hệ 2 ngôi",
      tag: "Binary 1:N, M:N, 1:1",
      erdDesc: "Mối quan hệ kết hợp giữa hai kiểu thực thể khác nhau trong mô hình.",
      rule: "• 1:N: Khóa chính phía '1' trở thành khóa ngoại ở phía 'Nhiều'.\n• M:N: Tạo một quan hệ mới, khóa chính là tổ hợp khóa chính của 2 thực thể tham gia.\n• 1:1: Khóa chính ở phía bắt buộc làm khóa ngoại ở phía tùy chọn (kèm thuộc tính quan hệ).",
      schema: [
        "ORDER(<u>Order_ID</u>, Order_Date, Customer_ID) -- [Customer_ID là FK]",
        "QUOTE(<u>Material_ID</u>, <u>Vendor_ID</u>, Unit_Price) -- [Khóa chính tổ hợp 2 FK]",
        "CARE_CENTER(<u>Center_Name</u>, Location, Nurse_In_Charge, Date_Assigned) -- [Nurse_In_Charge là FK]"
      ]
    },
    {
      step: 4,
      name: "Bước 4: Thực Thể Kết Hợp",
      shortName: "Thực thể kết hợp",
      tag: "Associative Entities",
      erdDesc: "Mối quan hệ M:N được nâng cấp thành thực thể có thuộc tính riêng hoặc danh hiệu riêng.",
      rule: "• Không có danh hiệu riêng: xử lý như mối quan hệ nhiều - nhiều M:N (khóa chính tổ hợp 2 FK).\n• Có danh hiệu riêng: lấy danh hiệu riêng làm khóa chính duy nhất; các FK đóng vai trò liên kết.",
      schema: [
        "SHIPMENT(<u>Shipment_No</u>, Customer_ID, Vendor_ID, Date, Amount) -- [Shipment_No là PK, Customer_ID/Vendor_ID là FK]"
      ]
    },
    {
      step: 5,
      name: "Bước 5: Quan Hệ Một Ngôi",
      shortName: "Quan hệ 1 ngôi (Đệ quy)",
      tag: "Unary / Recursive",
      erdDesc: "Mối quan hệ đệ quy giữa các thực thể trong cùng một tập thực thể (VD: Nhân viên quản lý nhân viên).",
      rule: "• 1:N đệ quy: Tạo khóa ngoại đệ quy (Recursive Foreign Key) tham chiếu đến PK trong cùng bảng.\n• M:N đệ quy: Tạo 2 quan hệ (1 quan hệ thực thể + 1 quan hệ kết hợp gồm 2 FK cùng trỏ về PK ban đầu).",
      schema: [
        "EMPLOYEE(<u>Employee_ID</u>, Name, Birthdate, Manager_ID) -- [Manager_ID là FK tham chiếu Employee_ID]"
      ]
    },
    {
      step: 6,
      name: "Bước 6: Quan Hệ Ba Ngôi / N-Ngôi",
      shortName: "Quan hệ 3 ngôi / N-ngôi",
      tag: "Ternary / N-ary",
      erdDesc: "Mối quan hệ liên kết đồng thời n kiểu thực thể (VD: Nhà cung cấp - Phụ tùng - Kho hàng).",
      rule: "• Tạo ra n + 1 quan hệ (n quan hệ cho n thực thể + 1 quan hệ kết hợp).\n• Quan hệ kết hợp chứa các FK trỏ về n thực thể; khóa chính đảm bảo tính duy nhất.",
      schema: [
        "SUPPLIES(<u>Vendor_ID</u>, <u>Part_ID</u>, <u>Warehouse_ID</u>, Shipping_mode, Unit_cost) -- [Tổ hợp 3 FK làm PK]"
      ]
    },
    {
      step: 7,
      name: "Bước 7: Mối Quan Hệ Cha / Con",
      shortName: "Quan hệ Cha / Con",
      tag: "Supertype / Subtype",
      erdDesc: "Mô hình quan hệ kế thừa giữa thực thể cha (tổng quát) và các thực thể con (chuyên biệt hóa).",
      rule: "• Tạo quan hệ cho cả cha và con.\n• Bảng cha chứa thuộc tính chung + thuộc tính phân loại kiểu.\n• Bảng con chứa thuộc tính riêng + Khóa chính con VỪA LÀ KHÓA CHÍNH VỪA LÀ KHÓA NGOẠI trỏ về cha.",
      schema: [
        "EMPLOYEE(<u>Employee_Number</u>, Employee_Name, Address, Employee_Type, Date_Hired)",
        "HOURLY_EMPLOYEE(<u>H_Employee_Number</u>, Hourly_Rate) -- [H_Employee_Number vừa là PK vừa là FK]",
        "SALARIED_EMPLOYEE(<u>S_Employee_Number</u>, Annual_Salary, Stock_Options) -- [S_Employee_Number vừa là PK vừa là FK]"
      ]
    }
  ];

  const current = stepsData[activeStep - 1];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 w-full min-w-0">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <GitBranch className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              7-Steps ERD Transformation Suite • Mục 3.1 - 3.7
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Quy Trình Chuẩn 7 Bước Chuyển Đổi ERD Sang Quan Hệ
            </h3>
          </div>
        </div>

        {/* Step Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
            title="Bước trước"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Trước</span>
          </button>
          <span className="text-xs font-mono text-orange-800 font-bold px-2 py-1 rounded bg-orange-50 border border-orange-200">
            {activeStep} / 7
          </span>
          <button
            onClick={() => setActiveStep((prev) => Math.min(stepsData.length, prev + 1))}
            disabled={activeStep === stepsData.length}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-orange-500 bg-orange-600 text-xs font-mono text-white hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
            title="Bước sau"
          >
            <span className="hidden sm:inline">Tiếp</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Segmented Scrollable Step Pills Navigation */}
      <div className="p-3 bg-slate-50/90 border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin">
          {stepsData.map((s) => {
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-left transition-all ${
                  isActive
                    ? "bg-orange-600 border-orange-600 text-white font-bold shadow-md shadow-orange-950/20"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                    isActive ? "bg-white text-orange-700" : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {s.step}
                </span>
                <span className="text-xs whitespace-nowrap">{s.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Details */}
      <div className="p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2 font-mono min-w-0">
            <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <span className="break-words">{current.name}</span>
          </h4>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
            {current.tag}
          </span>
        </div>

        {/* Description & Rule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 space-y-2 shadow-sm min-w-0">
            <div className="font-bold text-orange-800 font-mono uppercase text-[11px] flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-orange-600 flex-shrink-0" /> Bối cảnh thành phần trên sơ đồ ERD:
            </div>
            <p className="text-slate-700 leading-relaxed break-words">{current.erdDesc}</p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm min-w-0">
            <div className="font-bold text-blue-800 font-mono uppercase text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Quy tắc chuyển đổi chuẩn:
            </div>
            <p className="text-slate-700 whitespace-pre-line leading-relaxed break-words">{current.rule}</p>
          </div>
        </div>

        {/* Schema Generated Output (Dark Terminal) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-md min-w-0 overflow-hidden">
          <div className="text-xs font-bold text-amber-300 font-mono flex items-center gap-2">
            <Database className="w-4 h-4 text-orange-400 flex-shrink-0" />
            Lược đồ quan hệ đầu ra (Relational Schema Output):
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 space-y-2 overflow-x-auto">
            {current.schema.map((line, idx) => (
              <div
                key={idx}
                className="pl-2 border-l-2 border-orange-500/60 leading-relaxed text-amber-200 whitespace-nowrap sm:whitespace-normal break-words"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </div>
          <div className="text-[11px] text-slate-400 font-sans leading-relaxed">
            📌 <em>Ghi chú:</em> Các thuộc tính có <u>gạch chân</u> đại diện cho <strong>Khóa chính (Primary Key)</strong>; phần ghi chú đại diện cho <strong>Khóa ngoại (Foreign Key)</strong>.
          </div>
        </div>
      </div>
    </div>
  );
}
