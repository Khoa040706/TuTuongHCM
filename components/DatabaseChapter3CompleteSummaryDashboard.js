"use client";

import React, { useState } from "react";
import {
  Terminal,
  HardDrive,
  Database,
  ShieldCheck,
  Layers,
  Eye,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Search,
  Filter
} from "lucide-react";

export default function DatabaseChapter3CompleteSummaryDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const pillars = [
    {
      id: 1,
      tag: "Trọng tâm 1",
      title: "1. RDBMS & Chuẩn T-SQL",
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
      border: "border-blue-200",
      bgBadge: "bg-blue-100 text-blue-800",
      desc: "Hệ quản trị CSDL quan hệ bảo mật cao, sao lưu vượt trội. Phân định rõ ràng 4 phân hệ DDL (Định nghĩa), DML (Thao tác), DQL (Truy vấn) và DCL/TCL (Kiểm soát giao dịch)."
    },
    {
      id: 2,
      tag: "Trọng tâm 2",
      title: "2. Hệ Thống Kiểu Dữ Liệu",
      icon: HardDrive,
      color: "from-amber-600 to-orange-600",
      border: "border-amber-200",
      bgBadge: "bg-amber-100 text-amber-800",
      desc: "Phân biệt số nguyên (tinyint->bigint), chuỗi ASCII (char, varchar) vs chuỗi Unicode UTF-16 (nchar, nvarchar) bắt buộc tiền tố N'...', cùng các kiểu datetime và money."
    },
    {
      id: 3,
      tag: "Trọng tâm 3",
      title: "3. DDL & 4 Ràng Buộc Toàn Vẹn",
      icon: Database,
      color: "from-purple-600 to-fuchsia-600",
      border: "border-purple-200",
      bgBadge: "bg-purple-100 text-purple-800",
      desc: "Cú pháp CREATE / ALTER / DROP TABLE. Thuộc tính NULL, DEFAULT, IDENTITY. 4 ràng buộc cốt lõi: PRIMARY KEY, UNIQUE, FOREIGN KEY (REFERENCES), CHECK (miền giá trị)."
    },
    {
      id: 4,
      tag: "Trọng tâm 4",
      title: "4. DML & Thứ Tự Khóa Ngoại",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-600",
      border: "border-emerald-200",
      bgBadge: "bg-emerald-100 text-emerald-800",
      desc: "INSERT / UPDATE / DELETE. Quy tắc chèn an toàn: Bảng cha trước, tham chiếu vòng gán NULL tạm thời, bảng tự tham chiếu (manql) chèn từ sếp cao nhất xuống nhân viên."
    },
    {
      id: 5,
      tag: "Trọng tâm 5",
      title: "5. Truy Vấn DQL Chuyên Sâu",
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
      border: "border-cyan-200",
      bgBadge: "bg-cyan-100 text-cyan-800",
      desc: "Cú pháp SELECT-FROM-WHERE. 4 phép JOIN (INNER, LEFT, RIGHT, FULL OUTER). Kỹ thuật truy vấn lồng IN / EXISTS. Phân biệt WHERE (lọc hàng) vs GROUP BY & HAVING (lọc nhóm)."
    },
    {
      id: 6,
      tag: "Trọng tâm 6",
      title: "6. Khung Nhìn (View) & Bảng Ảo",
      icon: Eye,
      color: "from-violet-600 to-purple-600",
      border: "border-violet-200",
      bgBadge: "bg-violet-100 text-violet-800",
      desc: "Bảng ảo lưu câu lệnh truy vấn, không tốn bộ nhớ đĩa cứng. Đơn giản hóa các truy vấn phức tạp, bảo mật che chắn cột dữ liệu nhạy cảm. Ràng buộc WITH CHECK OPTION."
    },
    {
      id: 7,
      tag: "Trọng tâm 7",
      title: "7. CSDL Đồ Án & 8 Bài Tập Thực Hành",
      icon: BookOpen,
      color: "from-rose-600 to-pink-600",
      border: "border-rose-200",
      bgBadge: "bg-rose-100 text-rose-800",
      desc: "Đồ án CSDL QLDT (Khóa chính phức hợp & 2 FK) cùng CSDL QLBanHang (8 bài tập: DDL, điều kiện kết hợp, kết nối đa bảng, Anti-Join IS NULL, Self-Join và thống kê LEFT JOIN COUNT)."
    }
  ];

  const filteredPillars = pillars.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-slate-50/60 via-white to-indigo-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/70 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25 shrink-0">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Grand Summary Dashboard: Toàn Diện 7 Trọng Điểm SQL
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200 font-mono">
                Chương III Recap
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bản đồ tri thức trọn vẹn từ DDL, DML, DQL (SELECT/JOIN/Subquery/GROUP BY) đến Khung nhìn View & Đồ án CSDL
            </p>
          </div>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm chủ đề SQL..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-9 pr-3 text-xs placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* 7 Pillars Bento Grid: Responsive 1 col mobile, 2 cols tablet/laptop, 3 cols desktop */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredPillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className={`flex flex-col justify-between rounded-2xl border ${p.border} bg-white p-4 sm:p-5 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-xs shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${p.bgBadge}`}>
                    {p.tag}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  {p.title}
                </h4>

                <p className="mt-2.5 text-xs text-gray-600 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cheat Banner: Responsive Stack */}
      <div className="mt-6 rounded-2xl border border-purple-300/90 bg-gradient-to-r from-purple-500/10 via-purple-50/70 to-indigo-50/40 p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-purple-950 font-bold text-xs uppercase tracking-wider mb-3">
          <Sparkles className="h-4 w-4 text-purple-600" />
          3 Bí Quyết Vàng Đạt Điểm Tuyệt Đối Phần SQL:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-purple-950 font-medium">
          <div className="rounded-xl bg-white/90 p-3 border border-purple-200 shadow-2xs">
            <strong className="text-purple-900 block mb-1">1. Thứ tự 5 bước SELECT:</strong>
            FROM/WHERE &rarr; GROUP BY &rarr; Hàm kết hợp &rarr; HAVING &rarr; SELECT &rarr; ORDER BY.
          </div>
          <div className="rounded-xl bg-white/90 p-3 border border-purple-200 shadow-2xs">
            <strong className="text-purple-900 block mb-1">2. Bản chất Khung nhìn (View):</strong>
            Bảng ảo không tốn dung lượng đĩa, bảo vệ cập nhật bằng <code>WITH CHECK OPTION</code>.
          </div>
          <div className="rounded-xl bg-white/90 p-3 border border-purple-200 shadow-2xs">
            <strong className="text-purple-900 block mb-1">3. Tự kết nối Self-Join:</strong>
            Luôn dùng <code>kh1.makh &lt; kh2.makh</code> để khử trùng lặp và loại trừ tự ghép với chính mình.
          </div>
        </div>
      </div>
    </div>
  );
}
