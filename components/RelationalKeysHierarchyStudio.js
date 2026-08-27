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
      name: "1. Siêu Khóa (Super Key - SK)",
      tag: "SK ⊆ U (Xác định duy nhất)",
      math: "t_i(SK) ≠ t_j(SK), ∀ t_i ≠ t_j ∈ r",
      desc: "Là một tập hợp gồm một hay nhiều thuộc tính của R có tính chất xác định duy nhất một bộ trong mỗi thể hiện của R. Nếu SK là siêu khóa thì mọi tập cha chứa SK cũng là siêu khóa.",
      example: "Trong SV(MaSV, CCCD, HoTen, NgaySinh, Lop): Các tập {MaSV}, {CCCD}, {MaSV, HoTen}, {CCCD, Lop}, {MaSV, CCCD, HoTen, NgaySinh, Lop} đều là SIÊU KHÓA."
    },
    {
      id: "candidate",
      name: "2. Khóa / Khóa Dự Tuyển (Candidate Key)",
      tag: "Siêu khóa Tối Tiểu",
      math: "SK là khóa ⇔ SK là siêu khóa & ∀ X ⊂ SK, X không là siêu khóa",
      desc: "Là một siêu khóa sao cho mọi tập con thực sự của nó không còn là siêu khóa nữa. Khóa là siêu khóa tối thiểu (không chứa thuộc tính thừa).",
      example: "Trong SV ở trên: Có 2 khóa tối thiểu là K₁ = {MaSV} và K₂ = {CCCD}. Cả hai đều là Khóa dự tuyển."
    },
    {
      id: "primary",
      name: "3. Khóa Chính (Primary Key - PK)",
      tag: "Được chọn để cài đặt",
      math: "PK ∈ {Các khóa dự tuyển}, PK ≠ NULL",
      desc: "Là một khóa tối thiểu được người phân tích - thiết kế lựa chọn để định danh duy nhất các bộ khi cài đặt CSDL thực tế trên hệ thống RDBMS.",
      example: "Chọn K₁ = {MaSV} làm Khóa chính (Primary Key). K₂ = {CCCD} đóng vai trò Khóa dự tuyển thay thế (Alternate Key)."
    },
    {
      id: "foreign",
      name: "4. Khóa Ngoại / Khóa Ngoài (Foreign Key - FK)",
      tag: "Liên kết giữa 2 quan hệ",
      math: "FK trong R₁ là PK/Candidate Key trong R₂",
      desc: "Là một tập hợp gồm một hay nhiều thuộc tính trong lược đồ này nhưng lại đóng vai trò là Khóa của một lược đồ quan hệ khác.",
      example: "Thuộc tính MaKhoa trong SINH_VIEN(MaSV, HoTen, MaKhoa) là Khóa ngoại tham chiếu đến Khóa chính MaKhoa của KHOA(MaKhoa, TenKhoa)."
    },
    {
      id: "prime-attributes",
      name: "5. Thuộc Tính Khóa vs Không Khóa",
      tag: "Prime vs Non-Prime",
      math: "A ∈ Prime ⇔ ∃ Key K: A ∈ K",
      desc: "• Thuộc tính khóa (Prime Attribute): Thuộc tính tham gia vào ít nhất MỘT khóa bất kỳ (khóa chính hoặc dự tuyển).\n• Thuộc tính không khóa (Non-Prime Attribute): Thuộc tính không tham gia vào bất kỳ khóa nào.",
      example: "Trong SV: MaSV và CCCD là thuộc tính khóa. HoTen, NgaySinh, Lop là thuộc tính không khóa."
    }
  ];

  const current = keyTypes.find(k => k.id === selectedKeyType) || keyTypes[0];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Keys Hierarchy Studio • Mục 1.6
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Họ Nhà Khóa Trong Lược Đồ Quan Hệ (Superkey ➔ Candidate ➔ PK ➔ FK)
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-800 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200">
          Relational Keys Suite
        </span>
      </div>

      {/* Venn Diagram Funnel Visual Banner */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-200">
        <div className="text-xs font-mono text-slate-500 text-center mb-2">
          Mối quan hệ bao hàm giữa các tập thuộc tính:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold shadow-sm">
            Tập Thuộc Tính Toàn Thể (U)
          </span>
          <span className="text-orange-600 font-bold">⊇</span>
          <span className="px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 font-bold shadow-sm">
            Siêu Khóa (Super Key - SK)
          </span>
          <span className="text-orange-600 font-bold">⊇</span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 font-bold shadow-sm">
            Khóa Tối Tiểu (Candidate Key)
          </span>
          <span className="text-orange-600 font-bold">⊇</span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 font-bold ring-1 ring-amber-400 shadow-sm">
            Khóa Chính Được Chọn (PK)
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-slate-50/50 border-b border-slate-200">
        {keyTypes.map((k) => {
          const isActive = selectedKeyType === k.id;
          return (
            <button
              key={k.id}
              onClick={() => setSelectedKeyType(k.id)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-xs font-bold truncate">{k.name}</div>
              <div className="text-[10px] text-orange-700 font-mono mt-0.5">{k.tag}</div>
            </button>
          );
        })}
      </div>

      {/* Active Key Details Card */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Key className="w-5 h-5 text-orange-600" />
            {current.name}
          </h4>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
            {current.tag}
          </span>
        </div>

        {/* Mathematical Definition Box (Dark Terminal) */}
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-amber-300 space-y-1 shadow-md">
          <div className="text-[10px] text-slate-400 font-bold uppercase">Công thức & Ràng buộc toán học:</div>
          <div className="text-xs font-bold text-amber-300">{current.math}</div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line">
          {current.desc}
        </p>

        {/* Example in Textbook */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-sans shadow-sm">
          <div className="font-bold text-orange-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Ví dụ phân tích thực tế:
          </div>
          <p className="text-slate-600 font-mono text-[11px] leading-relaxed">{current.example}</p>
        </div>
      </div>
    </div>
  );
}
