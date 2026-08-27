"use client";
import React from "react";
import { Terminal, HardDrive, Database, ShieldCheck, Layers, Eye, BookOpen, Sparkles } from "lucide-react";

export default function DatabaseChapter3CompleteSummaryDashboard() {
  const pillars = [
    {
      id: 1,
      title: "1. RDBMS & T-SQL",
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
      desc: "Hệ quản trị CSDL quan hệ bảo mật cao, sao lưu vượt trội. Phân định DDL (Định nghĩa) vs DML (Thao tác)."
    },
    {
      id: 2,
      title: "2. Hệ Thống Kiểu Dữ Liệu",
      icon: HardDrive,
      color: "from-amber-600 to-orange-600",
      desc: "Số nguyên (tinyint->bigint), chuỗi ASCII (char, varchar) vs chuỗi Unicode UTF-16 (nchar, nvarchar) cần tiền tố N'...'."
    },
    {
      id: 3,
      title: "3. DDL & 4 Ràng Buộc Toàn Vẹn",
      icon: Database,
      color: "from-purple-600 to-fuchsia-600",
      desc: "CREATE/ALTER/DROP TABLE. Thuộc tính NULL, DEFAULT, IDENTITY. 4 ràng buộc: PRIMARY KEY, UNIQUE, FOREIGN KEY, CHECK."
    },
    {
      id: 4,
      title: "4. Cập Nhật DML & Thứ Tự Khóa Ngoại",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-600",
      desc: "INSERT/UPDATE/DELETE. Thứ tự chèn: Bảng cha trước, tham chiếu vòng gán NULL trước, tự tham chiếu chèn từ sếp cao nhất."
    },
    {
      id: 5,
      title: "5. Truy Vấn DQL Chuyên Sâu",
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
      desc: "SELECT-FROM-WHERE. 4 phép JOIN (INNER, LEFT, RIGHT, FULL). Truy vấn lồng IN vs EXISTS. GROUP BY & HAVING."
    },
    {
      id: 6,
      title: "6. Khung Nhìn (View) & Bảng Ảo",
      icon: Eye,
      color: "from-violet-600 to-purple-600",
      desc: "Bảng ảo không tốn bộ nhớ đĩa. CREATE/DROP VIEW. Bảo mật và đơn giản hóa truy vấn. Mệnh đề WITH CHECK OPTION."
    },
    {
      id: 7,
      title: "7. CSDL Đồ Án Thực Tế",
      icon: BookOpen,
      color: "from-rose-600 to-pink-600",
      desc: "CSDL QLDT (Khóa chính phức hợp & 2 FK) và CSDL QLBanHang (8 bài tập truy vấn, Anti-Join, Self-Join)."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-gray-50 p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Grand Summary Dashboard: Toàn Diện 7 Trọng Điểm Cốt Lõi Chương III (SQL)
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            Bản đồ tri thức trọn vẹn từ DDL, DML, DQL (SELECT/JOIN/Subquery/GROUP BY) đến Khung nhìn View & Bài tập CSDL
          </p>
        </div>
      </div>

      {/* 7 Pillars Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

                <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cheat Banner */}
      <div className="mt-6 rounded-xl border border-purple-300 bg-gradient-to-r from-purple-500/10 via-purple-50 to-indigo-50/20 p-4">
        <div className="flex items-center gap-2 text-purple-950 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="h-4 w-4 text-purple-600" />
          Bí Quyết Vàng Đạt Điểm Tuyệt Đối Môn Hệ Cơ Sở Dữ Liệu:
        </div>
        <div className="grid gap-2 sm:grid-cols-3 text-xs text-purple-950 font-medium">
          <div className="rounded-lg bg-white/80 p-2.5 border border-purple-200">
            <strong>1. Thứ tự 5 bước SELECT:</strong> FROM/WHERE &rarr; GROUP BY &rarr; Aggregates &rarr; HAVING &rarr; SELECT.
          </div>
          <div className="rounded-lg bg-white/80 p-2.5 border border-purple-200">
            <strong>2. Bản chất View:</strong> Bảng ảo không chiếm đĩa, bảo vệ bằng <code>WITH CHECK OPTION</code>.
          </div>
          <div className="rounded-lg bg-white/80 p-2.5 border border-purple-200">
            <strong>3. Self-Join:</strong> Luôn dùng <code>kh1.makh &lt; kh2.makh</code> để khử trùng lặp và loại trừ tự ghép.
          </div>
        </div>
      </div>
    </div>
  );
}
