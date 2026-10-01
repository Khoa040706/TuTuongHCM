"use client";

import React, { useState } from "react";
import {
  Key,
  KeyRound,
  ShieldCheck,
  Link,
  Layers,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Filter,
  CircleDot
} from "lucide-react";

export default function RelationalKeysHierarchyStudio() {
  const [selectedKeyType, setSelectedKeyType] = useState("superkey"); // 'superkey' | 'candidate' | 'primary' | 'foreign' | 'prime-attributes'

  const keyTypes = [
    {
      id: "superkey",
      code: "SK",
      name: "Siêu Khóa",
      english: "Super Key",
      tag: "SK ⊆ U (Xác định duy nhất)",
      math: "t_i(SK) ≠ t_j(SK), ∀ t_i ≠ t_j ∈ r",
      desc: "Là một tập hợp gồm một hay nhiều thuộc tính của R có tính chất xác định duy nhất một bộ trong mỗi thể hiện của R. Nếu SK là siêu khóa thì mọi tập cha chứa SK cũng là siêu khóa.",
      example: "Trong SV(MaSV, CCCD, HoTen, NgaySinh, Lop): Các tập {MaSV}, {CCCD}, {MaSV, HoTen}, {CCCD, Lop}, {MaSV, CCCD, HoTen, NgaySinh, Lop} đều là SIÊU KHÓA."
    },
    {
      id: "candidate",
      code: "CK",
      name: "Khóa Dự Tuyển",
      english: "Candidate Key",
      tag: "Siêu khóa Tối Tiểu",
      math: "SK là khóa ⇔ SK là siêu khóa & ∀ X ⊂ SK, X không là siêu khóa",
      desc: "Là một siêu khóa sao cho mọi tập con thực sự của nó không còn là siêu khóa nữa. Khóa là siêu khóa tối thiểu (không chứa bất kỳ thuộc tính dư thừa nào).",
      example: "Trong SV ở trên: Có 2 khóa tối thiểu là K₁ = {MaSV} và K₂ = {CCCD}. Cả hai đều là Khóa dự tuyển."
    },
    {
      id: "primary",
      code: "PK",
      name: "Khóa Chính",
      english: "Primary Key",
      tag: "Được chọn để định danh",
      math: "PK ∈ {Các khóa dự tuyển}, PK ≠ NULL",
      desc: "Là một khóa tối thiểu được người phân tích - thiết kế lựa chọn để định danh duy nhất các bộ khi cài đặt CSDL thực tế trên hệ thống RDBMS. Giá trị khóa chính bắt buộc không được mang giá trị NULL.",
      example: "Chọn K₁ = {MaSV} làm Khóa chính (Primary Key). K₂ = {CCCD} đóng vai trò Khóa dự tuyển thay thế (Alternate Key)."
    },
    {
      id: "foreign",
      code: "FK",
      name: "Khóa Ngoại",
      english: "Foreign Key",
      tag: "Liên kết giữa 2 quan hệ",
      math: "FK trong R₁ là PK/Candidate Key trong R₂",
      desc: "Là một tập hợp gồm một hay nhiều thuộc tính trong lược đồ này nhưng lại đóng vai trò là Khóa của một lược đồ quan hệ khác. Đảm bảo toàn vẹn tham chiếu.",
      example: "Thuộc tính MaKhoa trong SINH_VIEN(MaSV, HoTen, MaKhoa) là Khóa ngoại tham chiếu đến Khóa chính MaKhoa của KHOA(MaKhoa, TenKhoa)."
    },
    {
      id: "prime-attributes",
      code: "ATTR",
      name: "Thuộc Tính Khóa",
      english: "Prime vs Non-Prime",
      tag: "Prime vs Non-Prime",
      math: "A ∈ Prime ⇔ ∃ Key K: A ∈ K",
      desc: "• Thuộc tính khóa (Prime Attribute): Thuộc tính tham gia vào ít nhất MỘT khóa bất kỳ (khóa chính hoặc dự tuyển).\n• Thuộc tính không khóa (Non-Prime Attribute): Thuộc tính không tham gia vào bất kỳ khóa nào.",
      example: "Trong SV: MaSV và CCCD là thuộc tính khóa. HoTen, NgaySinh, Lop là thuộc tính không khóa."
    }
  ];

  const current = keyTypes.find((k) => k.id === selectedKeyType) || keyTypes[0];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 w-full min-w-0">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <KeyRound className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Keys Hierarchy Studio • Mục 1.6
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Họ Nhà Khóa Trong Mô Hình Quan Hệ (SK ➔ CK ➔ PK ➔ FK)
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-800 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 flex-shrink-0">
          Relational Keys Suite
        </span>
      </div>

      {/* Funnel Visual Banner: Sơ đồ bao hàm */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-200">
        <div className="text-xs font-mono text-slate-500 text-center mb-2.5">
          Mối quan hệ bao hàm giữa các tập thuộc tính:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-mono">
          <span className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold shadow-sm">
            Tập Thuộc Tính (U)
          </span>
          <span className="text-orange-600 font-bold">⊇</span>
          <span
            className={`px-2.5 py-1.5 rounded-lg border transition-all font-bold shadow-sm ${
              selectedKeyType === "superkey"
                ? "bg-orange-500 text-white border-orange-600 ring-2 ring-orange-300"
                : "bg-orange-50 border-orange-200 text-orange-800"
            }`}
          >
            Siêu Khóa (SK)
          </span>
          <span className="text-orange-600 font-bold">⊇</span>
          <span
            className={`px-2.5 py-1.5 rounded-lg border transition-all font-bold shadow-sm ${
              selectedKeyType === "candidate"
                ? "bg-blue-600 text-white border-blue-700 ring-2 ring-blue-300"
                : "bg-blue-50 border-blue-200 text-blue-800"
            }`}
          >
            Khóa Tối Tiểu (CK)
          </span>
          <span className="text-orange-600 font-bold">⊇</span>
          <span
            className={`px-2.5 py-1.5 rounded-lg border transition-all font-bold shadow-sm ${
              selectedKeyType === "primary"
                ? "bg-amber-500 text-white border-amber-600 ring-2 ring-amber-300"
                : "bg-amber-100 border-amber-300 text-amber-900"
            }`}
          >
            Khóa Chính (PK)
          </span>
        </div>
      </div>

      {/* Adaptive Grid Navigation Tabs */}
      <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 bg-slate-50/50 border-b border-slate-200">
        {keyTypes.map((k) => {
          const isActive = selectedKeyType === k.id;
          return (
            <button
              key={k.id}
              onClick={() => setSelectedKeyType(k.id)}
              className={`p-2.5 rounded-xl border text-left transition-all min-w-0 ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-2 ring-orange-400/40"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                    isActive ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {k.code}
                </span>
                <span className="text-[10px] text-slate-400 font-mono truncate">{k.english}</span>
              </div>
              <div className="text-xs font-bold truncate text-slate-900">{k.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Key Details Card */}
      <div className="p-5 sm:p-6 space-y-4 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2 min-w-0">
            <Key className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <span className="truncate">
              {current.name} ({current.english})
            </span>
          </h4>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono flex-shrink-0">
            {current.tag}
          </span>
        </div>

        {/* Mathematical Definition Box (Dark Terminal) */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-amber-300 space-y-1 shadow-md overflow-x-auto min-w-0">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Công thức & Ràng buộc toán học:
          </div>
          <div className="text-xs font-bold text-amber-300 whitespace-nowrap sm:whitespace-normal break-words pt-0.5">
            {current.math}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line break-words">
          {current.desc}
        </p>

        {/* Example in Textbook */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 font-sans shadow-sm min-w-0">
          <div className="font-bold text-orange-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" /> Ví dụ phân tích thực tế:
          </div>
          <p className="text-slate-600 font-mono text-[11px] leading-relaxed break-words">
            {current.example}
          </p>
        </div>
      </div>
    </div>
  );
}
