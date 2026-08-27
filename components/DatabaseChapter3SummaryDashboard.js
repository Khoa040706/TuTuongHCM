"use client";
import React from "react";
import { Database, ShieldCheck, HardDrive, Terminal, Sliders, Trash2, Key, Link2, Sparkles, BookOpen, CheckCircle } from "lucide-react";

export default function DatabaseChapter3SummaryDashboard() {
  const pillars = [
    {
      id: 1,
      title: "1. RDBMS & Ngôn Ngữ T-SQL",
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
      points: [
        "SQL Server là RDBMS mạnh mẽ, bảo mật cao, sao lưu dự phòng vượt trội.",
        "T-SQL mở rộng từ ANSI SQL, chia thành 2 phân nhóm: DDL (Định nghĩa) & DML (Thao tác)."
      ]
    },
    {
      id: 2,
      title: "2. Hệ Thống Kiểu Dữ Liệu",
      icon: HardDrive,
      color: "from-amber-600 to-orange-600",
      points: [
        "Số nguyên: tinyint (1B), smallint (2B), int (4B), bigint (8B).",
        "Số chính xác: numeric(p,d) & money (8B tiền tệ).",
        "Chuỗi: char (cố định), varchar (động), nchar/nvarchar (chuẩn Unicode UTF-16 cần N'...')."
      ]
    },
    {
      id: 3,
      title: "3. DDL & Thuộc Tính Cột",
      icon: Database,
      color: "from-purple-600 to-fuchsia-600",
      points: [
        "CREATE DATABASE & CREATE TABLE tạo cấu trúc lưu trữ đối tượng.",
        "NULL cho phép rỗng, NOT NULL bắt buộc có dữ liệu.",
        "DEFAULT gán giá trị tự động, IDENTITY(s, i) tự tăng ID duy nhất."
      ]
    },
    {
      id: 4,
      title: "4. Bốn Ràng Buộc Toàn Vẹn",
      icon: Key,
      color: "from-rose-600 to-red-600",
      points: [
        "PRIMARY KEY: Duy nhất + NOT NULL (Toàn vẹn thực thể).",
        "UNIQUE: Duy nhất, cho phép nhận 1 giá trị NULL.",
        "FOREIGN KEY: Toàn vẹn tham chiếu tới PK bảng cha.",
        "CHECK: Kiểm tra biểu thức logic miền giá trị hợp lệ."
      ]
    },
    {
      id: 5,
      title: "5. Thao Tác DML & Thứ Tự Khóa Ngoại",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-600",
      points: [
        "INSERT chèn dữ liệu, UPDATE sửa dữ liệu, DELETE xóa dữ liệu (giữ cấu trúc bảng).",
        "Thứ tự chèn FK: Nhập bảng cha trước hoặc gán NULL ở bảng con rồi UPDATE sau.",
        "Tự tham chiếu (manql): Chèn từ sếp cao nhất (NULL) xuống cấp dưới."
      ]
    },
    {
      id: 6,
      title: "6. ALTER TABLE & DROP TABLE",
      icon: Sliders,
      color: "from-cyan-600 to-blue-600",
      points: [
        "ALTER TABLE: ADD (thêm cột/RB), ALTER COLUMN (sửa cột), DROP COLUMN / CONSTRAINT.",
        "DROP TABLE: Xóa vĩnh viễn cả cấu trúc và dữ liệu bảng.",
        "Xóa an toàn: Xóa bảng con trước, hoặc dùng NOCHECK CONSTRAINT ALL."
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-gray-50 p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white shadow-md">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Dashboard Tóm Tắt Trọng Tâm Kiến Thức Ôn Thi Chương III (SQL)
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            Tổng hợp 6 trụ cột lý thuyết cốt lõi, cú pháp T-SQL chuẩn mực & bẫy trắc nghiệm cần nhớ
          </p>
        </div>
      </div>

      {/* 6 Pillars Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${p.color} text-white shadow-sm shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">{p.title}</h4>
                </div>

                <ul className="mt-3.5 space-y-2 text-xs text-gray-600 leading-relaxed">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Cheat Sheet Callout */}
      <div className="mt-6 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50/20 p-4">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="h-4 w-4 text-amber-600" />
          Quy Tắc Vàng Khi Đi Thi & Phỏng Vấn:
        </div>
        <div className="grid gap-2 sm:grid-cols-3 text-xs text-amber-950 font-medium">
          <div className="rounded-lg bg-white/80 p-2.5 border border-amber-200">
            <strong>1. Unicode Tiếng Việt:</strong> Bắt buộc dùng <code>N'...'</code> kèm <code>nvarchar</code> / <code>nchar</code>.
          </div>
          <div className="rounded-lg bg-white/80 p-2.5 border border-amber-200">
            <strong>2. Đặt tên Constraint:</strong> Luôn dùng tiền tố <code>pk_</code>, <code>fk_</code>, <code>ck_</code>, <code>df_</code>.
          </div>
          <div className="rounded-lg bg-white/80 p-2.5 border border-amber-200">
            <strong>3. Xóa Bảng có Khóa Ngoại:</strong> Xóa bảng con trước hoặc gỡ bỏ bằng <code>NOCHECK</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
