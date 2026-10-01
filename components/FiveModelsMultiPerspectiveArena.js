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
  ArrowLeft,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function FiveModelsMultiPerspectiveArena() {
  const [selectedModel, setSelectedModel] = useState("relational");

  const models = [
    {
      id: "network",
      name: "1. Mô Hình Mạng",
      shortName: "Mô Hình Mạng",
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
      shortName: "Mô Hình Phân Cấp",
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
      shortName: "Mô Hình ERD",
      en: "Entity-Relationship Model",
      icon: Shapes,
      tag: "Thực Thể & Liên Kết",
      representation: `[ SINH_VIEN ] ────(1,n)──── < hoc > ────(0,n)──── [ HOC_PHAN ]
      │                                                │
  ( MaSV, Ten )                                ( MaHP, SLuong )`,
      verdict: "Chuẩn mực vàng để phân tích và thiết kế mô hình khái niệm trong thực tế."
    },
    {
      id: "relational",
      name: "4. Mô Hình Quan Hệ",
      shortName: "Mô Hình Quan Hệ",
      en: "Relational Model",
      icon: Table,
      tag: "Bảng Dữ Liệu k-bộ",
      representation: `• SVien (MaSV, Ten, Lop, Nganh)
• Hoc (MaSV, MaHP, DiemLT, DiemTH)
• HPhan (MaHP, SLuong, MaMH)
• MHoc (MaMH, TenMH, Khoa, TinChi)`,
      verdict: "Mô hình phổ biến và thống trị nhất hiện nay (Oracle, SQL Server, MySQL, PostgreSQL)."
    },
    {
      id: "oop",
      name: "5. Hướng Đối Tượng",
      shortName: "Hướng Đối Tượng",
      en: "Object-Oriented Model",
      icon: Braces,
      tag: "Lớp & Phương Thức",
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

  const currentIndex = models.findIndex((m) => m.id === selectedModel);
  const current = models[currentIndex >= 0 ? currentIndex : 3];
  const IconComponent = current.icon;

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + models.length) % models.length;
    setSelectedModel(models[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % models.length;
    setSelectedModel(models[nextIdx].id);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              5-Model Multi-Perspective Arena • Đấu Trường So Sánh
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Quan Sát 1 Bài Toán Qua Lăng Kính 5 Mô Hình Dữ Liệu
            </h3>
          </div>
        </div>
      </div>

      {/* Pill Strip Navigation with Controls & Indicator */}
      <div className="p-3 sm:p-4 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center justify-between sm:justify-start gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors shadow-xs"
              title="Mô hình trước"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors shadow-xs"
              title="Mô hình tiếp theo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs font-bold text-slate-700 font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-200">
            Mô hình <span className="text-orange-600">{currentIndex + 1}</span> / {models.length}
          </span>
        </div>

        {/* Scrollable Pill Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scroll-smooth min-w-0 w-full sm:w-auto">
          {models.map((m) => {
            const ItemIcon = m.icon;
            const isActive = selectedModel === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedModel(m.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-sm ring-2 ring-orange-500/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <ItemIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{m.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Model Representation View */}
      <div className="p-4 sm:p-6 space-y-4 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <IconComponent className="w-5 h-5 text-orange-600 flex-shrink-0" />
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              {current.name}
            </h4>
            <span className="text-xs text-slate-500 font-mono truncate">({current.en})</span>
          </div>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-orange-100 text-orange-800 border border-orange-200 self-start sm:self-auto flex-shrink-0">
            {current.tag}
          </span>
        </div>

        {/* Representation Box (Dark Terminal) */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-amber-300 space-y-2 shadow-md min-w-0">
          <div className="text-[10px] uppercase font-bold text-slate-400">
            Cách biểu diễn dữ liệu của mô hình:
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto min-w-0 break-words font-mono">
            {current.representation}
          </pre>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2 shadow-sm min-w-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span className="font-sans leading-relaxed">
            <strong>Đánh giá học thuật:</strong> {current.verdict}
          </span>
        </div>
      </div>
    </div>
  );
}
