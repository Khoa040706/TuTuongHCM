"use client";

import React, { useState } from "react";
import {
  Table,
  Code2,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Boxes,
  ShieldCheck,
  RefreshCw,
  Braces
} from "lucide-react";

export default function RelationalVsOopStudio() {
  const [activeTab, setActiveTab] = useState("relational"); // 'relational' | 'oop'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Table className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Modern Paradigms • Mục 3.5 & 3.7
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Đối Chiếu: Mô Hình Quan Hệ (Bảng k-bộ) vs Mô Hình Hướng Đối Tượng (OODM)
            </h3>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setActiveTab("relational")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "relational"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Table className="w-3.5 h-3.5" /> Mô Hình Quan Hệ (3.5)
          </button>
          <button
            onClick={() => setActiveTab("oop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "oop"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Braces className="w-3.5 h-3.5" /> Mô Hình Hướng Đối Tượng (3.7)
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* PARADIGM 1: RELATIONAL MODEL */}
        {activeTab === "relational" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Table className="w-5 h-5 text-blue-600" />
                  Mô Hình Quan Hệ (Relational Model - E.F. Codd, 1970)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">
                  Dựa trên <strong>Lý thuyết tập hợp</strong> toán học của các quan hệ (tập các <strong>k-bộ</strong> với k cố định)
                </p>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800 border border-blue-200 font-mono">
                RDBMS Gold Standard
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm">
                <div className="text-blue-900 font-bold">Cột (Attributes / Thuộc tính):</div>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Mỗi cột đặc trưng cho một thuộc tính của đối tượng, có tên và miền giá trị (Domain) xác định.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm">
                <div className="text-blue-900 font-bold">Dòng (Tuples / Bộ giá trị):</div>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Mỗi dòng là một thể hiện cụ thể (k-bộ giá trị) biểu diễn một đối tượng duy nhất trong bảng.
                </p>
              </div>
            </div>

            {/* Relational Schema Table Demo (Dark Terminal) */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Các Lược Đồ Quan Hệ Minh Họa Trong Giáo Trình:
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 space-y-1.5 shadow-inner">
                <div>• <span className="text-blue-400 font-bold">SVien</span> (<span className="underline text-amber-300">MaSV</span>, Ten, Lop, Nganh)</div>
                <div>• <span className="text-blue-400 font-bold">Hoc</span> (<span className="underline text-amber-300">MaSV, MaHP</span>, DiemLT, DiemTH)</div>
                <div>• <span className="text-blue-400 font-bold">HPhan</span> (<span className="underline text-amber-300">MaHP</span>, SLuong, MaMH)</div>
                <div>• <span className="text-blue-400 font-bold">MHoc</span> (<span className="underline text-amber-300">MaMH</span>, TenMH, Khoa, TinChi)</div>
                <div>• <span className="text-blue-400 font-bold">DKien</span> (<span className="underline text-amber-300">MaMH, MaMHTruoc</span>)</div>
              </div>
            </div>
          </div>
        )}

        {/* PARADIGM 2: OBJECT-ORIENTED MODEL */}
        {activeTab === "oop" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Braces className="w-5 h-5 text-purple-600" />
                  Mô Hình Hướng Đối Tượng (Object-Oriented Data Model - OODM)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">
                  Đóng gói cả <strong>Dữ liệu (Thuộc tính)</strong> và <strong>Hành vi (Phương thức)</strong>
                </p>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-purple-100 text-purple-800 border border-purple-200 font-mono">
                Next-Gen Database
              </span>
            </div>

            {/* 3 Core Characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1 shadow-sm">
                <div className="text-purple-900 font-bold">1. Tính Đóng Gói (Encapsulation)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Gộp thuộc tính và các phương thức xử lý thành 1 thể thống nhất bên trong Class.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1 shadow-sm">
                <div className="text-purple-900 font-bold">2. Tính Đa Hình (Polymorphism)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Cùng một phương thức có thể được thực thi theo nhiều cách khác nhau tùy đối tượng.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1 shadow-sm">
                <div className="text-purple-900 font-bold">3. Tính Tái Sử Dụng (Reusability)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Sử dụng cơ chế Kế thừa (Inheritance) và Kế thừa bội để mở rộng cấu trúc dữ liệu.</p>
              </div>
            </div>

            {/* OOP Classes Visual (Dark Terminal) */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                Mô Tả Các Lớp & Phương Thức Minh Họa Trong Giáo Trình:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 shadow-inner">
                  <div className="text-purple-300 font-bold">Class SVien:</div>
                  <div className="text-slate-400 text-[11px]">• Thuộc tính: Ten, Lop, Nganh</div>
                  <div className="text-emerald-400 text-[11px]">• Phương thức: LapTKB(), InBangDiem()</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 shadow-inner">
                  <div className="text-purple-300 font-bold">Class MHoc:</div>
                  <div className="text-slate-400 text-[11px]">• Thuộc tính: Ten, Khoa, SoTinChi</div>
                  <div className="text-emerald-400 text-[11px]">• Phương thức: CapNhatSTC()</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
