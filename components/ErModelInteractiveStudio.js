"use client";

import React, { useState } from "react";
import {
  Diamond,
  Square,
  Circle,
  KeyRound,
  Layers,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Shapes,
  ArrowRight,
  GitBranch,
  Split
} from "lucide-react";

export default function ErModelInteractiveStudio() {
  const [activeElement, setActiveElement] = useState("entity"); // 'entity' | 'weak-entity' | 'attribute' | 'key' | 'relationship' | 'cardinality'

  const elements = [
    {
      id: "entity",
      title: "Thực Thể Mạnh (Strong Entity)",
      shape: "Hình Chữ Nhật (Viền Đơn)",
      symbol: "┌─────────┐\n│ SinhVien│\n└─────────┘",
      desc: "Là đối tượng/khái niệm trong thế giới thực có thể nhận biết một cách độc lập và duy nhất. Có một hoặc nhiều thực thể yếu phụ thuộc vào nó.",
      example: "SinhVien (MaSV), NhanVien (MaNV), Khoa (MaKhoa)..."
    },
    {
      id: "weak-entity",
      title: "Thực Thể Yếu (Weak Entity)",
      shape: "Hình Chữ Nhật (Viền Kẻ Đôi)",
      symbol: "╔═════════╗\n║ ThanNhan║\n╚═════════╝",
      desc: "Thực thể mà sự tồn tại của nó bắt buộc phải phụ thuộc vào một thực thể mạnh khác. Nếu thực thể mạnh bị xóa, thực thể yếu cũng mất đi.",
      example: "ThanNhan phụ thuộc vào NhanVien; NguoiPhuThuoc phụ thuộc KhachHang."
    },
    {
      id: "attribute",
      title: "Thuộc Tính (Attribute)",
      shape: "Hình Bầu Dục / Oval",
      symbol: "  ( HoTen )  \n     │       ",
      desc: "Các đặc tính, tính chất riêng biệt dùng để mô tả thông tin chi tiết của loại thực thể hoặc mối kết hợp.",
      example: "HoTen, NgaySinh, QueQuan, SoDienThoai..."
    },
    {
      id: "key",
      title: "Khóa Của Thực Thể (Key Attribute)",
      shape: "Bầu Dục Có Chữ Gạch Chân",
      symbol: "  ( <u>MaSV</u> )  \n     │       ",
      desc: "Thuộc tính hoặc tập thuộc tính dùng để định danh duy nhất từng thể hiện của loại thực thể trong toàn hệ thống.",
      example: "<u>MaSV</u>, <u>MaKhoa</u>, <u>SoCMND/CCCD</u>..."
    },
    {
      id: "relationship",
      title: "Loại Mối Kết Hợp (Relationship)",
      shape: "Hình Thoi (Diamond)",
      symbol: "   /\\   \n  /hoc\\ \n  \\   / \n   \\/   ",
      desc: "Sự liên kết có ngữ nghĩa giữa 2 hay nhiều loại thực thể. Giữa 2 thực thể có thể có nhiều mối kết hợp khác nhau và mối kết hợp cũng có thể có thuộc tính riêng.",
      example: "SinhVien -- <hoc> -- HocPhan (có thuộc tính DiemThi, LanThi)"
    },
    {
      id: "cardinality",
      title: "Bậc Số Lượng & Số Ngôi (Degree)",
      shape: "Nhãn Tỷ Lệ (1,1) - (1,n) - (0,n)",
      symbol: "(1,1) ─── <hoc> ─── (0,n)",
      desc: "Số ngôi (Degree): Tổng số loại thực thể tham gia vào mối kết hợp. Bậc số lượng (Cardinality): Giới hạn số lượng thể hiện thực thể này có thể liên kết với thực thể kia.",
      example: "(1,1) Bắt buộc 1; (0,n) Tùy chọn nhiều; (1,n) Bắt buộc ít nhất 1."
    }
  ];

  const current = elements.find(e => e.id === activeElement) || elements[0];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Shapes className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              ERD Interactive Studio • Mục 3.4
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Mô Hình Thực Thể Kết Hợp (Entity-Relationship Model - ER)
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-700 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-bold">
          Peter Chen ERD Notation
        </span>
      </div>

      {/* 6 ERD Symbols Navigation */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-50/50 border-b border-slate-200">
        {elements.map((el) => {
          const isActive = activeElement === el.id;
          return (
            <button
              key={el.id}
              onClick={() => setActiveElement(el.id)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-xs font-bold truncate">{el.title}</div>
              <div className="text-[10px] text-orange-600 font-mono mt-0.5 font-semibold">{el.shape}</div>
            </button>
          );
        })}
      </div>

      {/* Active Element Showcase */}
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Symbol ASCII Preview (4 cols - Dark Terminal) */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center space-y-2 shadow-md">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">
              Ký Hiệu Chuẩn Sơ Đồ ERD:
            </span>
            <pre className="text-amber-300 font-mono text-xs font-bold leading-tight py-3">
              {current.symbol}
            </pre>
            <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded bg-orange-950/60 text-amber-300 border border-orange-500/30">
              {current.shape}
            </span>
          </div>

          {/* Details & Academic Explanation (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            <h4 className="text-base font-extrabold text-slate-900">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {current.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 shadow-sm">
              <div className="font-bold text-orange-700">Ví dụ thực tế trong giáo trình:</div>
              <p className="text-slate-700 font-mono text-[11px]">{current.example}</p>
            </div>
          </div>
        </div>

        {/* Complete ER Diagram Example Map (Dark Terminal) */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono shadow-md">
          <div className="text-amber-400 font-bold uppercase tracking-wider mb-2 text-[11px] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Sơ Đồ Minh Họa Mối Quan Hệ ER Hoàn Chỉnh (SinhVien - HocPhan - MonHoc):
          </div>
          <pre className="text-amber-300 overflow-x-auto whitespace-pre leading-relaxed font-mono">
{`┌──────────────┐         (1,n) ┌──────────────┐ (0,n)         ┌──────────────┐
│   SINH_VIEN  ├───────────────┤   < hoc >    ├───────────────┤   HOC_PHAN   │
│  (<u>MaSV</u>, Ten) │               │ [Diem, Lan]  │               │ (<u>MaHP</u>, SLuong│
└──────────────┘               └──────────────┘               └──────┬───────┘
                                                                     │ (1,1)
                                                              ┌──────┴───────┐
                                                              │   < mo >     │
                                                              └──────┬───────┘
                                                                     │ (0,n)
                                                              ┌──────┴───────┐
                                                              │   MON_HOC    │
                                                              │ (<u>MaMH</u>, TenMH)│
                                                              └──────────────┘`}
          </pre>
        </div>
      </div>
    </div>
  );
}
