"use client";

import React, { useState } from "react";
import {
  Globe,
  Network,
  FolderTree,
  Shapes,
  Table,
  Braces,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function FiveModelsMultiPerspectiveArena() {
  const [selectedModel, setSelectedModel] = useState("relational");

  const models = [
    {
      id: "network",
      name: "1. Mô Hình Mạng",
      en: "Network Model",
      icon: Network,
      tag: "Đồ Thị Có Hướng",
      representation: `Loại Mẫu Tin (Chữ Nhật) ──► Loại Liên Hệ (Bầu Dục)
[ SVIEN ] ──► ( SVIEN_DIEM ) ──► [ KQUA ] ◄── ( KQUA_HPHAN ) ◄── [ HPHAN ]`,
      verdict: "Thích hợp bài toán vừa phải, hạn chế khi quy mô dữ liệu lớn."
    },
    {
      id: "hierarchical",
      name: "2. Mô Hình Phân Cấp",
      en: "Hierarchical Model",
      icon: FolderTree,
      tag: "Cấu Trúc Cây 1-N",
      representation: `Mức 1: SVien
 ├── Mức 2: HPhan ──► Mức 3: KQua
 └── Mức 2: MHoc`,
      verdict: "Truy xuất nhanh theo nhánh cây, nhưng khó biểu diễn quan hệ Nhiều - Nhiều (N-N)."
    },
    {
      id: "er",
      name: "3. Mô Hình ER",
      en: "Entity-Relationship Model",
      icon: Shapes,
      tag: "Thực Thể & Liên Kết",
      representation: `[ SINH_VIEN ] ────(1,n)──── < hoc > ────(0,n)──── [ HOC_PHAN ]
      │                                                │
  ( <u>MaSV</u>, Ten )                                ( <u>MaHP</u>, SLuong )`,
      verdict: "Chuẩn mực vàng để phân tích và thiết kế mô hình khái niệm trong thực tế."
    },
    {
      id: "relational",
      name: "4. Mô Hình Quan Hệ",
      en: "Relational Model",
      icon: Table,
      tag: "Bảng Dữ Liệu k-bộ",
      representation: `• SVien (<u>MaSV</u>, Ten, Lop, Nganh)
• Hoc (<u>MaSV, MaHP</u>, DiemLT, DiemTH)
• HPhan (<u>MaHP</u>, SLuong, MaMH)
• MHoc (<u>MaMH</u>, TenMH, Khoa, TinChi)`,
      verdict: "Mô hình phổ biến và thống trị nhất hiện nay (Oracle, SQL Server, MySQL, PostgreSQL)."
    },
    {
      id: "oop",
      name: "5. Hướng Đối Tượng",
      en: "Object-Oriented Model",
      icon: Braces,
      tag: "Lớp, Thuộc Tính & Phương Thức",
      representation: `Class SVien {
  attributes: Ten, Lop, Nganh;
  methods: LapTKB(), InBangDiem();
}
Class MHoc {
  attributes: Ten, Khoa, SoTinChi;
  methods: CapNhatSTC();
}`,
      verdict: "Hỗ trợ đóng gói, đa hình, kế thừa. Mô hình CSDL giàu tiềm năng trong tương lai."
    }
  ];

  const current = models.find(m => m.id === selectedModel) || models[3];
  const IconComponent = current.icon;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              5-Model Multi-Perspective Arena • Đấu Trường So Sánh
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Quan Sát 1 Bài Toán Thực Tế Qua Lăng Kính Của 5 Mô Hình Dữ Liệu
            </h3>
          </div>
        </div>
      </div>

      {/* 5 Models Tabs */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-slate-50/50 border-b border-slate-200">
        {models.map((m) => {
          const ItemIcon = m.icon;
          const isActive = selectedModel === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <ItemIcon className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-slate-400"}`} />
                <span className="text-[9px] font-mono uppercase text-orange-700 font-bold">{m.tag}</span>
              </div>
              <div className="text-xs font-bold truncate">{m.name}</div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Model Representation View */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <IconComponent className="w-5 h-5 text-orange-600" />
            <h4 className="text-base font-extrabold text-slate-900">{current.name}</h4>
            <span className="text-xs text-slate-500 font-mono">({current.en})</span>
          </div>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200">
            {current.tag}
          </span>
        </div>

        {/* Representation Box (Dark Terminal) */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-amber-300 space-y-2 shadow-md">
          <div className="text-[10px] uppercase font-bold text-slate-400">Cách biểu diễn dữ liệu của mô hình:</div>
          <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto">{current.representation}</pre>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-sans"><strong>Đánh giá học thuật:</strong> {current.verdict}</span>
        </div>
      </div>
    </div>
  );
}
