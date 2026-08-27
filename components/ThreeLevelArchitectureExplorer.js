"use client";

import React, { useState } from "react";
import {
  Layers,
  Eye,
  HardDrive,
  Table,
  ArrowRight,
  Sparkles,
  ArrowDownUp,
  Cpu,
  Database,
  FileCode,
  Lock,
  Compass,
  CheckCircle2
} from "lucide-react";

export default function ThreeLevelArchitectureExplorer() {
  const [activeLevel, setActiveLevel] = useState("conceptual"); // 'view' | 'conceptual' | 'physical'

  const levels = [
    {
      id: "view",
      levelNum: "1",
      name: "Mức Khung Nhìn (Mức Ngoài)",
      en: "View Level / External Level",
      icon: Eye,
      color: "from-blue-600 to-cyan-600",
      border: "border-blue-500/40",
      badge: "Gần gũi với Người Dùng Nhất",
      concept: "Là cách nhìn, quan điểm của từng người sử dụng đối với CSDL mức khái niệm. Mỗi khung nhìn (View) là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm.",
      details: [
        "Mỗi người dùng (User 1, User 2... User n) có một Khung nhìn (View 1, View 2... View n) riêng biệt.",
        "Ẩn đi các chi tiết bảo mật hoặc không liên quan (ví dụ: Sinh viên chỉ xem được Điểm của mình, không thấy Điểm người khác hay Lương giáo viên).",
        "Có thể tồn tại vô số Khung nhìn khác nhau trên cùng một lược đồ quan niệm."
      ]
    },
    {
      id: "conceptual",
      levelNum: "2",
      name: "Mức Khái Niệm (Mức Quan Niệm)",
      en: "Conceptual Level / Logical Schema",
      icon: Table,
      color: "from-orange-500 to-amber-600",
      border: "border-orange-500/50",
      badge: "Trung Tâm Trừu Tượng Hóa",
      concept: "Sự trừu tượng hóa thế giới thực gần với người dùng CSDL. HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL / mô hình ER). Mức vật lý là sự cài đặt cụ thể của mức khái niệm.",
      details: [
        "Mô tả toàn bộ cấu trúc CSDL của toàn cơ quan/tổ chức (tất cả các thực thể, thuộc tính, mối liên kết ER).",
        "Định nghĩa các quy tắc và ràng buộc toàn vẹn dữ liệu (Primary Key, Foreign Key, Ràng buộc Check).",
        "Độc lập hoàn toàn với cấu trúc đĩa cứng vật lý bên dưới."
      ]
    },
    {
      id: "physical",
      levelNum: "3",
      name: "Mức Vật Lý (Mức Trong)",
      en: "Physical Level / Internal Level",
      icon: HardDrive,
      color: "from-amber-600 to-yellow-600",
      border: "border-amber-500/40",
      badge: "Cài Đặt Cụ Thể Trên Ổ Đĩa",
      concept: "Các loại tệp dữ liệu, tệp giao dịch, tệp chỉ dẫn... theo cấu trúc nào đó, lưu trữ trên thiết bị lưu trữ tin.",
      details: [
        "Mô tả chi tiết nhị phân: Kích thước khối (Block size), địa chỉ bản ghi (Record offset), nén và mã hóa.",
        "Cấu trúc chỉ mục (B+ Tree, B-Tree, Hashing, Clustered Index) để tăng tốc độ truy xuất.",
        "Là sự cài đặt vật lý thực tế của Lược đồ Khái niệm trên thiết bị lưu trữ (SSD, HDD, NAS/SAN)."
      ]
    }
  ];

  const current = levels.find(l => l.id === activeLevel) || levels[1];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Three-Level Architecture • Mục 2.4
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Kiến Trúc 3 Mức Biểu Diễn Của Hệ Cơ Sở Dữ Liệu
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-700 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-bold">
          ANSI-SPARC Framework
        </span>
      </div>

      {/* Concept Definition Bar */}
      <div className="p-4 bg-orange-50/50 border-b border-slate-200 text-xs text-slate-700 space-y-1">
        <div className="text-orange-700 font-bold flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-orange-600" /> Mô Hình Dữ Liệu (Data Model) Là Gì?
        </div>
        <p className="text-slate-600 leading-relaxed font-sans">
          Là <strong>sự hình thức hóa toán học</strong>, gồm 2 phần: <strong>1) Ký hiệu mô tả dữ liệu</strong>; và <strong>2) Tập hợp các phép toán</strong> diễn tả ràng buộc trong dữ liệu và các phép xử lý trên dữ liệu.
        </p>
      </div>

      {/* Sơ Đồ Minh Họa Luồng Ánh Xạ */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levels.map((lvl) => {
            const LevelIcon = lvl.icon;
            const isSelected = activeLevel === lvl.id;
            const levelCardBg =
              lvl.id === "view"
                ? "bg-blue-50/70 border-blue-200"
                : lvl.id === "conceptual"
                ? "bg-amber-50/70 border-amber-200"
                : "bg-emerald-50/70 border-emerald-200";

            return (
              <div
                key={lvl.id}
                onClick={() => setActiveLevel(lvl.id)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all relative overflow-hidden shadow-sm ${
                  isSelected
                    ? `${levelCardBg} ring-2 ring-orange-500/40 shadow-md`
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 font-mono font-extrabold text-xs flex items-center justify-center">
                    {lvl.levelNum}
                  </span>
                  <LevelIcon className={`w-5 h-5 ${isSelected ? "text-orange-600" : "text-slate-400"}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-0.5">{lvl.name}</h4>
                <div className="text-[11px] text-slate-500 font-mono mb-2">{lvl.en}</div>
                <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">{lvl.concept}</p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card of Selected Level */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
                Mức {current.levelNum}
              </span>
              <h4 className="text-base font-extrabold text-slate-900">{current.name}</h4>
            </div>
            <span className="text-xs text-amber-800 font-semibold">{current.badge}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans shadow-sm">
            <strong>Bản chất học thuật:</strong> {current.concept}
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Đặc điểm chi tiết cần ghi nhớ:
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {current.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sơ đồ trực quan ASCII Tree (Dark Terminal) */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-md">
          <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Sơ Đồ Minh Họa Luồng Tương Tác Giữa Các Mức:
          </div>
          <pre className="text-amber-300 overflow-x-auto whitespace-pre leading-relaxed font-mono">
{`User 1 ──► [ View 1 ] ──┐
User 2 ──► [ View 2 ] ──┼──► [ CSDL Mức Khái Niệm ] ──► [ CSDL Mức Vật Lý ]
User n ──► [ View n ] ──┘     (Conceptual / ER Model)       (Physical Storage Files)`}
          </pre>
        </div>
      </div>
    </div>
  );
}
