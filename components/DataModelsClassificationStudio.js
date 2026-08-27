"use client";

import React, { useState } from "react";
import {
  Boxes,
  Layers,
  Database,
  HardDrive,
  Shapes,
  Table,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
  FileCode,
  Cpu
} from "lucide-react";

export default function DataModelsClassificationStudio() {
  const [activeGroup, setActiveGroup] = useState("object-based"); // 'object-based' | 'record-based' | 'physical'

  const groups = [
    {
      id: "object-based",
      code: "a",
      name: "Mô Hình Logic Trên Cơ Sở Đối Tượng",
      en: "Object-based Logical Model",
      icon: Shapes,
      color: "from-orange-500 to-amber-600",
      badge: "Trực quan & Linh hoạt",
      description: "Dùng để mô tả dữ liệu ở mức khái niệm và mức ngoài. Cung cấp khả năng cấu trúc hóa linh hoạt, cho phép định nghĩa các mối quan hệ ngữ nghĩa phong phú giữa các đối tượng trong thế giới thực.",
      models: [
        { name: "Mô hình thực thể mối quan hệ (ER Model)", desc: "Mô tả thực thể, thuộc tính và mối quan hệ thực tế (chuẩn mực thiết kế CSDL)." },
        { name: "Mô hình hướng đối tượng (Object-Oriented Model)", desc: "Đóng gói dữ liệu (thuộc tính) và hành vi (phương thức) vào các Class/Object." },
        { name: "Mô hình dữ liệu ngữ nghĩa (Semantic Data Model)", desc: "Bổ sung ngữ nghĩa sâu sắc và các mối liên kết tri thức giữa các đối tượng." },
        { name: "Mô hình dữ liệu chức năng (Functional Data Model)", desc: "Mô tả dữ liệu dưới dạng các hàm toán học ánh xạ giữa các tập dữ liệu." }
      ]
    },
    {
      id: "record-based",
      code: "b",
      name: "Mô Hình Logic Trên Cơ Sở Bản Ghi",
      en: "Record-based Logical Model",
      icon: Table,
      color: "from-blue-600 to-cyan-600",
      badge: "Cấu trúc & Bản ghi Cố định",
      description: "Dùng để mô tả dữ liệu ở mức khái niệm và mức ngoài. Khác với mô hình đối tượng, mô hình này sử dụng các bản ghi có khuôn dạng cố định (fixed-format records) thuộc nhiều loại bản ghi khác nhau.",
      models: [
        { name: "Mô hình quan hệ (Relational Model)", desc: "Tổ chức dữ liệu thành các bảng (Table / Relation) gồm các hàng (bộ giá trị) và cột (thuộc tính)." },
        { name: "Mô hình mạng (Network Model)", desc: "Biểu diễn dữ liệu dưới dạng Đồ thị có hướng (mẫu tin hình chữ nhật, loại liên hệ hình bầu dục)." },
        { name: "Mô hình phân cấp (Hierarchical Model)", desc: "Biểu diễn dữ liệu dưới dạng Cây (Tree) với quan hệ cha - con một-nhiều nghiêm ngặt." }
      ]
    },
    {
      id: "physical",
      code: "c",
      name: "Mô Hình Dữ Liệu Vật Lý",
      en: "Physical Data Model",
      icon: HardDrive,
      color: "from-amber-600 to-yellow-600",
      badge: "Mức Thấp Nhất (Lưu trữ Đĩa)",
      description: "Mô tả dữ liệu ở mức thấp nhất - dữ liệu được lưu trữ thế nào trong bộ nhớ máy tính (cấu trúc byte, con trỏ, khối đĩa, nén và giải nén).",
      models: [
        { name: "Mô hình hợp nhất (Unifying Model)", desc: "Mô hình hóa các cấu trúc lưu trữ và phương pháp truy cập đĩa cứng cơ bản." },
        { name: "Mô hình bộ nhớ khung (Frame Memory Model)", desc: "Cấu trúc quản lý các trang bộ nhớ đệm (Frame) và khối dữ liệu nhị phân." }
      ]
    }
  ];

  const current = groups.find(g => g.id === activeGroup) || groups[0];
  const IconComponent = current.icon;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Data Model Classification • Mục 3.1 & 3.2
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Phân Loại 3 Nhóm Mô Hình Dữ Liệu Lớn Trong Khoa Học CSDL
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-700 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-bold">
          3 Model Families
        </span>
      </div>

      {/* 3 Components of Data Model Banner */}
      <div className="p-4 bg-orange-50/40 border-b border-slate-200 space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-orange-700 flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-orange-600" /> 3 Thành Phần Cấu Thành Mọi Mô Hình Dữ Liệu:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-mono font-bold">1</span>
              Mô tả Cấu trúc
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Định nghĩa các kiểu dữ liệu, thực thể, bảng, mối quan hệ và cấu trúc tổ chức của CSDL.</p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-mono font-bold">2</span>
              Mô tả Thao tác
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Định nghĩa các phép toán được phép thực hiện trên dữ liệu (Thêm, Xóa, Sửa, Truy vấn, Phép toán đại số quan hệ).</p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-mono font-bold">3</span>
              Ràng buộc Toàn vẹn
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Định nghĩa các quy tắc kiểm soát tính chính xác, nhất quán và hợp lệ của dữ liệu trước khi lưu trữ.</p>
          </div>
        </div>
      </div>

      {/* 3 Categories Switcher Tabs */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-50/50 border-b border-slate-200">
        {groups.map((g) => {
          const ItemIcon = g.icon;
          const isActive = activeGroup === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? "bg-orange-100 text-orange-600" : "bg-slate-100 text-slate-500"}`}>
                  <ItemIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">{g.code.toUpperCase()}. {g.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{g.en}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Group Details */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
              Nhóm {current.code.toUpperCase()}
            </span>
            <h4 className="text-base font-extrabold text-slate-900">{current.name}</h4>
          </div>
          <span className="text-xs text-amber-800 font-semibold">{current.badge}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          {current.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {current.models.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover:border-orange-300 hover:bg-orange-50/20 transition-all shadow-sm">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                {m.name}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-sans pl-5">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
