"use client";
import React, { useState } from "react";
import { Sliders, Plus, Edit2, Trash2, Key, Link, ShieldCheck, Terminal, CheckCircle2, RotateCcw } from "lucide-react";

export default function SqlAlterTableWorkbench() {
  const [activeTab, setActiveTab] = useState("add_col");

  const operations = {
    add_col: {
      label: "1. Thêm Cột (ADD)",
      title: "Thêm cột ngaysinh vào bảng NhanVien",
      sql: `ALTER TABLE NhanVien\nADD ngaysinh datetime;`,
      tableBefore: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "tennv", type: "nvarchar(30)", badge: "" },
        { name: "phong", type: "int", badge: "FK" }
      ],
      tableAfter: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "tennv", type: "nvarchar(30)", badge: "" },
        { name: "phong", type: "int", badge: "FK" },
        { name: "ngaysinh", type: "datetime", badge: "MỚI THÊM", isNew: true }
      ],
      explanation: "Mệnh đề ADD cho phép bổ sung một hoặc nhiều cột mới vào bảng đã tồn tại mà không làm mất các dữ liệu hiện có trong bảng."
    },
    alter_col: {
      label: "2. Sửa Cột (ALTER COLUMN)",
      title: "Sửa cột tennv trong bảng NhanVien thành nvarchar(20)",
      sql: `ALTER TABLE NhanVien\nALTER COLUMN tennv nvarchar(20);`,
      tableBefore: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "tennv", type: "nvarchar(30)", badge: "Cũ: 30 ký tự" },
        { name: "phong", type: "int", badge: "FK" }
      ],
      tableAfter: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "tennv", type: "nvarchar(20)", badge: "ĐÃ ĐỔI: 20 ký tự", isModified: true },
        { name: "phong", type: "int", badge: "FK" }
      ],
      explanation: "Mệnh đề ALTER COLUMN dùng để điều chỉnh kiểu dữ liệu, kích thước độ dài hoặc thuộc tính NULL/NOT NULL của cột đã có."
    },
    drop_col: {
      label: "3. Xóa Cột (DROP COLUMN)",
      title: "Xóa cột diadiem trong bảng PhongBan",
      sql: `ALTER TABLE PhongBan\nDROP COLUMN diadiem;`,
      tableBefore: [
        { name: "maphong", type: "int", badge: "PK" },
        { name: "tenphong", type: "nvarchar(20)", badge: "" },
        { name: "diadiem", type: "nvarchar(20)", badge: "SẼ XÓA" }
      ],
      tableAfter: [
        { name: "maphong", type: "int", badge: "PK" },
        { name: "tenphong", type: "nvarchar(20)", badge: "" }
      ],
      explanation: "Mệnh đề DROP COLUMN xóa vĩnh viễn cột và toàn bộ dữ liệu lưu trong cột đó khỏi bảng."
    },
    add_pk: {
      label: "4. Thêm Khóa Chính (ADD PK)",
      title: "Thêm ràng buộc khóa chính phức hợp vào bảng KetQua",
      sql: `ALTER TABLE KetQua\nADD CONSTRAINT pk_kq PRIMARY KEY (masv, mamh);`,
      tableBefore: [
        { name: "masv", type: "int", badge: "" },
        { name: "mamh", type: "char(4)", badge: "" },
        { name: "diem", type: "float", badge: "" }
      ],
      tableAfter: [
        { name: "masv", type: "int", badge: "PK (Composite)", isPk: true },
        { name: "mamh", type: "char(4)", badge: "PK (Composite)", isPk: true },
        { name: "diem", type: "float", badge: "" }
      ],
      explanation: "Bổ sung ràng buộc PRIMARY KEY với tên 'pk_kq' bao gồm 2 cột (masv, mamh) làm khóa chính phức hợp."
    },
    add_fk: {
      label: "5. Thêm Khóa Ngoại (ADD FK)",
      title: "Thêm khóa ngoại liên kết KetQua tới SinhVien",
      sql: `ALTER TABLE KetQua\nADD CONSTRAINT fk_kq_sv FOREIGN KEY (masv)\nREFERENCES SinhVien(masv);`,
      tableBefore: [
        { name: "masv", type: "int", badge: "PK" },
        { name: "mamh", type: "char(4)", badge: "PK" },
        { name: "diem", type: "float", badge: "" }
      ],
      tableAfter: [
        { name: "masv", type: "int", badge: "PK & FK (-> SinhVien)", isFk: true },
        { name: "mamh", type: "char(4)", badge: "PK" },
        { name: "diem", type: "float", badge: "" }
      ],
      explanation: "Tạo liên kết toàn vẹn tham chiếu fk_kq_sv để đảm bảo sinh viên trong bảng kết quả phải tồn tại trong bảng SinhVien."
    },
    add_check: {
      label: "6. Thêm CHECK (ADD CHECK)",
      title: "Ràng buộc cột phai chỉ nhận 'nam' hoặc 'nu'",
      sql: `ALTER TABLE NhanVien\nADD CONSTRAINT ck_phai\nCHECK (phai in ('nam', 'nu'));`,
      tableBefore: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "phai", type: "nvarchar(5)", badge: "Chưa kiểm tra" }
      ],
      tableAfter: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "phai", type: "nvarchar(5)", badge: "CHECK ('nam','nu')", isCheck: true }
      ],
      explanation: "Ràng buộc miền giá trị ck_phai đảm bảo hệ thống tự động từ chối các giá trị giới tính không hợp lệ."
    },
    drop_constraint: {
      label: "7. Xóa Ràng Buộc (DROP CONSTRAINT)",
      title: "Xóa bỏ ràng buộc ck_phai khỏi bảng NhanVien",
      sql: `ALTER TABLE NhanVien\nDROP CONSTRAINT ck_phai;`,
      tableBefore: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "phai", type: "nvarchar(5)", badge: "CHECK ('nam','nu')" }
      ],
      tableAfter: [
        { name: "manv", type: "char(5)", badge: "PK" },
        { name: "phai", type: "nvarchar(5)", badge: "Đã gỡ bỏ ràng buộc" }
      ],
      explanation: "Xóa bỏ ràng buộc toàn vẹn mà không ảnh hưởng tới cột dữ liệu. Đây là lý do vì sao bắt buộc phải đặt tên Constraint khi tạo!"
    }
  };

  const curr = operations[activeTab];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <Sliders className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlAlterTableWorkbench</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Schema Evolution Studio
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng 7 thao tác tiến hóa cấu trúc bảng: Thêm/Sửa/Xóa Cột & Thêm/Xóa Ràng Buộc Toàn Vẹn
            </p>
          </div>
        </div>
      </div>

      {/* Operation Tabs */}
      <div className="mt-5 flex flex-wrap gap-2">
        {Object.entries(operations).map(([k, op]) => (
          <button
            key={k}
            onClick={() => setActiveTab(k)}
            className={`rounded-xl px-3 py-2 text-xs font-bold transition-all border ${
              activeTab === k
                ? "bg-purple-600 text-white border-purple-700 shadow-sm"
                : "bg-white text-gray-700 border-gray-200 hover:bg-purple-50"
            }`}
          >
            {op.label}
          </button>
        ))}
      </div>

      {/* Code Snippet Box */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-purple-400" />
            <span className="font-mono text-xs font-bold text-gray-300">{curr.title}</span>
          </div>
          <span className="font-mono text-[10px] text-purple-300">T-SQL ALTER TABLE</span>
        </div>
        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {curr.sql}
        </pre>
      </div>

      {/* Schema Comparison Grid: Before vs After */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {/* Before */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 pb-2">
            Cấu Trúc Bảng Ban Đầu (BEFORE):
          </div>
          <div className="mt-3 space-y-2">
            {curr.tableBefore.map((col, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 p-2.5 border border-gray-200 font-mono text-xs">
                <span className="font-bold text-gray-800">{col.name} <span className="text-gray-500 font-normal">({col.type})</span></span>
                {col.badge && (
                  <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] font-sans font-bold text-gray-700">
                    {col.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div className="rounded-xl border border-purple-200 bg-purple-50/40 p-4 shadow-sm">
          <div className="text-xs font-bold text-purple-900 uppercase tracking-wider border-b border-purple-200 pb-2">
            Cấu Trúc Bảng Sau Khi Chạy Lệnh (AFTER):
          </div>
          <div className="mt-3 space-y-2">
            {curr.tableAfter.map((col, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-lg p-2.5 border font-mono text-xs transition-all ${
                  col.isNew
                    ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold"
                    : col.isModified
                    ? "bg-amber-100 border-amber-300 text-amber-950 font-bold"
                    : col.isPk || col.isFk || col.isCheck
                    ? "bg-purple-100 border-purple-300 text-purple-950 font-bold"
                    : "bg-white border-gray-200 text-gray-800"
                }`}
              >
                <span>{col.name} <span className="text-gray-600 font-normal">({col.type})</span></span>
                {col.badge && (
                  <span className={`rounded px-2 py-0.5 text-[10px] font-sans font-bold ${
                    col.isNew ? "bg-emerald-600 text-white" : col.isModified ? "bg-amber-600 text-white" : "bg-purple-600 text-white"
                  }`}>
                    {col.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-purple-100/70 p-3.5 border border-purple-200 text-xs text-purple-950 leading-relaxed">
        <strong>💡 Ý nghĩa học thuật:</strong> {curr.explanation}
      </div>
    </div>
  );
}
