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
  Cpu,
  Binary,
  GitFork
} from "lucide-react";

export default function DataModelsClassificationStudio() {
  const [activeGroup, setActiveGroup] = useState("object-based"); // 'object-based' | 'record-based' | 'physical'

  const groups = [
    {
      id: "object-based",
      code: "a",
      name: "Mô Hình Logic Trên Cơ Sở Đối Tượng",
      shortTitle: "Dựa Trên Đối Tượng",
      en: "Object-based Logical Model",
      icon: Shapes,
      color: "orange",
      activeBg: "bg-orange-50/90 border-orange-400 text-orange-950",
      activeRing: "ring-2 ring-orange-500/30",
      badge: "Trực quan & Ngữ nghĩa phong phú",
      scope: "Mức Khái Niệm & Mức Ngoài",
      description:
        "Dùng để mô tả dữ liệu ở mức khái niệm và mức ngoài. Cung cấp khả năng cấu trúc hóa dữ liệu linh hoạt, cho phép định nghĩa các mối quan hệ ngữ nghĩa sâu sắc giữa các thực thể và đối tượng trong thế giới thực.",
      keyStrengths: "Biểu diễn trực quan, phản ánh chính xác bài toán nghiệp vụ thực tế trước khi cài đặt.",
      models: [
        {
          name: "Mô hình thực thể mối quan hệ (ER Model)",
          tag: "Chuẩn thiết kế",
          desc: "Mô tả thực thể, thuộc tính và mối quan hệ thực tế (chuẩn mực thiết kế CSDL toàn cầu)."
        },
        {
          name: "Mô hình hướng đối tượng (Object-Oriented Model)",
          tag: "Class & Methods",
          desc: "Đóng gói dữ liệu (thuộc tính) và hành vi (phương thức) vào các Class/Object tương ứng."
        },
        {
          name: "Mô hình dữ liệu ngữ nghĩa (Semantic Data Model)",
          tag: "Ngữ nghĩa tri thức",
          desc: "Bổ sung ngữ nghĩa sâu sắc và các mối liên kết quan hệ tri thức phức tạp giữa các đối tượng."
        },
        {
          name: "Mô hình dữ liệu chức năng (Functional Data Model)",
          tag: "Hàm ánh xạ",
          desc: "Mô tả dữ liệu dưới dạng các hàm toán học ánh xạ giữa các tập dữ liệu với nhau."
        }
      ]
    },
    {
      id: "record-based",
      code: "b",
      name: "Mô Hình Logic Trên Cơ Sở Bản Ghi",
      shortTitle: "Dựa Trên Bản Ghi",
      en: "Record-based Logical Model",
      icon: Table,
      color: "blue",
      activeBg: "bg-blue-50/90 border-blue-400 text-blue-950",
      activeRing: "ring-2 ring-blue-500/30",
      badge: "Khuôn dạng Bản ghi Cố định",
      scope: "Mức Khái Niệm & Cài đặt DBMS",
      description:
        "Dùng để mô tả dữ liệu ở mức khái niệm và mức ngoài. Khác với mô hình đối tượng, mô hình này sử dụng các bản ghi có khuôn dạng cố định (fixed-format records) thuộc nhiều loại bản ghi khác nhau.",
      keyStrengths: "Cơ sở nền tảng của các Hệ Quản Trị CSDL thương mại (RDBMS: Oracle, SQL Server, MySQL...).",
      models: [
        {
          name: "Mô hình quan hệ (Relational Model)",
          tag: "Phổ biến nhất",
          desc: "Tổ chức dữ liệu thành các bảng (Table / Relation) gồm các hàng (bộ giá trị) và cột (thuộc tính)."
        },
        {
          name: "Mô hình mạng (Network Model)",
          tag: "Đồ thị có hướng",
          desc: "Biểu diễn dữ liệu dưới dạng Đồ thị có hướng (mẫu tin hình chữ nhật, loại liên hệ hình bầu dục)."
        },
        {
          name: "Mô hình phân cấp (Hierarchical Model)",
          tag: "Cây 1-Nhiều",
          desc: "Biểu diễn dữ liệu dưới dạng Cây (Tree) với quan hệ cha - con một-nhiều nghiêm ngặt."
        }
      ]
    },
    {
      id: "physical",
      code: "c",
      name: "Mô Hình Dữ Liệu Vật Lý",
      shortTitle: "Mô Hình Vật Lý",
      en: "Physical Data Model",
      icon: HardDrive,
      color: "emerald",
      activeBg: "bg-emerald-50/90 border-emerald-400 text-emerald-950",
      activeRing: "ring-2 ring-emerald-500/30",
      badge: "Mức Thấp Nhất (Lưu trữ Đĩa)",
      scope: "Mức Trong / Ổ cứng",
      description:
        "Mô tả dữ liệu ở mức thấp nhất - dữ liệu được lưu trữ thực sự như thế nào trong bộ nhớ máy tính (cấu trúc byte, con trỏ liên kết, khối đĩa, nén và giải nén dữ liệu).",
      keyStrengths: "Quyết định hiệu năng I/O, thời gian truy xuất và dung lượng lưu trữ trên thiết bị cứng.",
      models: [
        {
          name: "Mô hình hợp nhất (Unifying Model)",
          tag: "Truy cập cơ bản",
          desc: "Mô hình hóa các cấu trúc lưu trữ và phương pháp truy cập đĩa cứng cơ bản."
        },
        {
          name: "Mô hình bộ nhớ khung (Frame Memory Model)",
          tag: "Buffer & Pages",
          desc: "Cấu trúc quản lý các trang bộ nhớ đệm (Frame) và khối dữ liệu nhị phân trên đĩa."
        }
      ]
    }
  ];

  const current = groups.find((g) => g.id === activeGroup) || groups[0];
  const IconComponent = current.icon;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header - Tránh tràn viền trên laptop */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Boxes className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Data Model Classification • Mục 3.1 & 3.2
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Phân Loại 3 Nhóm Mô Hình Dữ Liệu Lớn
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
          <span className="text-xs font-mono text-orange-700 px-3 py-1 rounded-lg bg-orange-100/80 border border-orange-200 font-bold whitespace-nowrap">
            3 Model Families
          </span>
        </div>
      </div>

      {/* 3 Components of Data Model Banner - Tối ưu 3 cột co giãn */}
      <div className="p-4 sm:p-5 bg-orange-50/40 border-b border-slate-200 space-y-2.5 min-w-0">
        <div className="text-xs font-bold uppercase tracking-wider text-orange-700 flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-orange-600 flex-shrink-0" />
          <span>3 Thành Phần Cấu Thành Mọi Mô Hình Dữ Liệu:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs min-w-0">
          <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm min-w-0">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                1
              </span>
              <span className="truncate">Mô tả Cấu trúc</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              Định nghĩa các kiểu dữ liệu, thực thể, bảng, thuộc tính và liên kết ngữ nghĩa giữa các đối tượng.
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm min-w-0">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                2
              </span>
              <span className="truncate">Mô tả Thao tác</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              Định nghĩa các phép toán xử lý dữ liệu (Thêm, Xóa, Sửa, Truy vấn dữ liệu, Đại số quan hệ).
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm min-w-0">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                3
              </span>
              <span className="truncate">Ràng buộc Toàn vẹn</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              Định nghĩa các luật bảo đảm tính chính xác, nhất quán và hợp lệ trước khi cho phép ghi vào CSDL.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Categories Switcher Tabs - Tự động co giãn 100%, không bị cắt hộp C */}
      <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 bg-slate-50/60 border-b border-slate-200 min-w-0">
        {groups.map((g) => {
          const ItemIcon = g.icon;
          const isActive = activeGroup === g.id;

          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGroup(g.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 min-w-0 overflow-hidden ${
                isActive
                  ? `${g.activeBg} ${g.activeRing} shadow-sm font-semibold`
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isActive ? "bg-white/80 shadow-xs" : "bg-slate-100 text-slate-500"
                }`}
              >
                <ItemIcon className="w-5 h-5 flex-shrink-0" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-slate-900/10 uppercase">
                    Nhóm {g.code}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {g.shortTitle}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono truncate mt-0.5">
                  {g.en}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Group Details */}
      <div className="p-4 sm:p-6 space-y-4 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-orange-100 text-orange-800 border border-orange-200 font-mono flex-shrink-0">
              Nhóm {current.code.toUpperCase()}
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
              {current.name}
            </h4>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
            <span className="text-[11px] text-slate-500 font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
              Áp dụng: {current.scope}
            </span>
            <span className="text-xs text-amber-800 font-semibold bg-amber-100/60 px-2.5 py-0.5 rounded-full border border-amber-200/60">
              {current.badge}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          {current.description}
        </p>

        {/* Điểm mạnh học thuật */}
        <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/70 text-xs text-orange-950 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
          <div className="leading-relaxed">
            <strong className="font-bold text-orange-900">Ưu thế học thuật cốt lõi:</strong> {current.keyStrengths}
          </div>
        </div>

        {/* Danh sách các mô hình tiêu biểu trong nhóm */}
        <div className="space-y-2 pt-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Các mô hình tiêu biểu trong nhóm {current.code.toUpperCase()}:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
            {current.models.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1.5 hover:border-orange-300 hover:bg-orange-50/20 transition-all shadow-sm min-w-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                    <span className="truncate">{m.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 flex-shrink-0">
                    {m.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans pl-5">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
