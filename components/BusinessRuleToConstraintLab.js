"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Cpu,
  KeyRound,
  Lock,
  AlertCircle,
  Layers,
  Table,
  Check
} from "lucide-react";

export default function BusinessRuleToConstraintLab() {
  const [selectedRule, setSelectedRule] = useState("c1"); // 'c1' | 'c2' | 'c3' | 'c4'

  const rules = {
    c1: {
      id: "C1",
      name: "Ràng Buộc Khóa Chính (C1)",
      bizRule:
        "Mỗi sinh viên khi hoàn tất thủ tục nhập học bắt buộc phải được cấp một mã số sinh viên duy nhất, phân biệt và không bao giờ được phép trùng lặp trong toàn trường.",
      invariant:
        "Không bao giờ tồn tại hai bộ (dòng) dữ liệu khác nhau trong bảng SINH_VIEN có cùng giá trị thuộc tính maSV, và maSV không bao giờ được nhận giá trị NULL.",
      formalLogic: "∀ t1, t2 ∈ SINH_VIEN : (t1.maSV = t2.maSV ⇒ t1 = t2) ∧ (t1.maSV ≠ NULL)",
      sqlSyntax: "ALTER TABLE SINH_VIEN\nADD CONSTRAINT PK_SinhVien PRIMARY KEY (maSV);",
      type: "Ràng buộc Thực thể (Entity Integrity)",
      context: "Quan hệ SINH_VIEN(maSV, hotenSV, nam, ngSinh, maKhoa)",
      enforcement: "B-Tree Unique Clustered Index (Tự động từ chối trùng lặp)"
    },
    c2: {
      id: "C2",
      name: "Ràng Buộc Giới Hạn Thi Lại (C2)",
      bizRule:
        "Quy chế đào tạo tín chỉ: Mỗi sinh viên chỉ được phép thi tối đa 2 lần cho cùng một môn học (Lần 1 là thi chính thức và Lần 2 là thi lại nếu không đạt).",
      invariant:
        "Giá trị của thuộc tính lanThi trong bảng KET_QUA chỉ được phép nhận các số nguyên thuộc tập hợp {1, 2}.",
      formalLogic: "∀ t ∈ KET_QUA : t.lanThi ∈ {1, 2} ∧ (1 ≤ t.lanThi ≤ 2)",
      sqlSyntax: "ALTER TABLE KET_QUA\nADD CONSTRAINT CK_LanThi CHECK (lanThi IN (1, 2));",
      type: "Ràng buộc Miền giá trị (Domain Constraint)",
      context: "Quan hệ KET_QUA(maSV, maMH, lanThi, diem)",
      enforcement: "Check Constraint ở cấp độ cột (Column-level Check)"
    },
    c3: {
      id: "C3",
      name: "Ràng Buộc Khoa Đào Tạo (C3)",
      bizRule:
        "Mọi sinh viên theo học tại trường bắt buộc phải trực thuộc một khoa quản lý cụ thể đã được thành lập và có mã khoa tồn tại trong danh mục.",
      invariant:
        "Mã khoa (maKhoa) của bất kỳ sinh viên nào trong bảng SINH_VIEN đều phải xuất hiện trước trong danh mục makhoa của bảng KHOA.",
      formalLogic: "∀ t ∈ SINH_VIEN : ∃ k ∈ KHOA : (t.maKhoa = k.makhoa)",
      sqlSyntax: "ALTER TABLE SINH_VIEN\nADD CONSTRAINT FK_SV_Khoa FOREIGN KEY (maKhoa)\n    REFERENCES KHOA(makhoa)\n    ON DELETE NO ACTION ON UPDATE CASCADE;",
      type: "Ràng buộc Tham chiếu (Referential Integrity)",
      context: "Quan hệ SINH_VIEN (Con) và KHOA (Cha)",
      enforcement: "Foreign Key Constraint liên bảng (Tham chiếu bảng cha KHOA)"
    },
    c4: {
      id: "C4",
      name: "Ràng Buộc Lương Quản Lý (C4)",
      bizRule:
        "Chính sách nhân sự: Tiền lương của bất kỳ nhân viên nào trong công ty không bao giờ được phép cao hơn tiền lương của người quản lý trực tiếp của họ.",
      invariant:
        "Với mọi nhân viên có người quản lý, giá trị thuộc tính luong của nhân viên đó phải nhỏ hơn hoặc bằng luong của người quản lý tương ứng.",
      formalLogic: "∀ nv ∈ NHANVIEN : (nv.maNQL ≠ NULL ⇒ nv.luong ≤ Luong(nv.maNQL))",
      sqlSyntax: "CREATE TRIGGER trg_CheckLuongNQL ON NHANVIEN\nAFTER INSERT, UPDATE AS\nBEGIN\n    IF EXISTS (\n        SELECT 1 FROM inserted i\n        JOIN NHANVIEN nql ON i.maNQL = nql.maNV\n        WHERE i.luong > nql.luong\n    )\n    BEGIN\n        RAISERROR(N'Lương nhân viên vượt quá lương quản lý!', 16, 1);\n        ROLLBACK TRANSACTION;\n    END\nEND;",
      type: "Ràng buộc Liên bộ trong 1 quan hệ (Inter-Tuple)",
      context: "Quan hệ NHANVIEN(maNV, hoten, luong, maNQL)",
      enforcement: "AFTER TRIGGER (Do CHECK constraint không so sánh đa dòng)"
    }
  };

  const curr = rules[selectedRule];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/20 p-5 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900">BusinessRuleToConstraintLab</h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200">
                Quy Trình 3 Bước Chuẩn Hóa
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Phòng thí nghiệm chuyển đổi từ Quy tắc nghiệp vụ đời thực &rarr; Mệnh đề bất biến &rarr; Cài đặt SQL Engine
            </p>
          </div>
        </div>

        {/* Rule Selector Buttons */}
        <div className="flex flex-wrap rounded-2xl bg-emerald-100/80 p-1.5 border border-emerald-200 gap-1">
          {Object.keys(rules).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedRule(key)}
              className={`rounded-xl px-3.5 py-1.5 font-mono text-xs font-bold transition-all ${
                selectedRule === key
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-emerald-950 hover:bg-emerald-200/60"
              }`}
            >
              {rules[key].id}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Step Transformation Pipeline Grid: Vertical on laptop (cols-1), 3-cols on lg */}
      <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-3">
        {/* Step 1: Real-world Business Rule */}
        <div className="flex flex-col justify-between rounded-2xl border border-amber-200 bg-white p-5 shadow-sm space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-amber-100 pb-2.5">
              <span className="flex items-center gap-1.5 text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                <FileText className="h-4 w-4 text-amber-600" />
                Bước 1: Quy Tắc Thực Tế
              </span>
              <span className="rounded-md bg-amber-50 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-700 border border-amber-200">
                MANAGERIAL RULE
              </span>
            </div>

            <h4 className="mt-3 text-sm font-extrabold text-slate-900">{curr.name}</h4>

            <div className="mt-2.5 rounded-xl border border-amber-100 bg-amber-50/60 p-3.5 text-xs text-amber-950 leading-relaxed font-medium italic">
              &ldquo;{curr.bizRule}&rdquo;
            </div>
          </div>

          <div className="rounded-lg bg-slate-50 p-2.5 text-[11px] text-slate-600 border border-slate-100 font-medium">
            <strong>Nguồn gốc: </strong>Quy chế vận hành thực tiễn của cơ quan, doanh nghiệp hoặc nhà trường.
          </div>
        </div>

        {/* Step 2: Mathematical Predicate Invariant */}
        <div className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 p-5 shadow-sm space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-emerald-100 pb-2.5">
              <span className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                <Cpu className="h-4 w-4 text-emerald-600" />
                Bước 2: Mệnh Đề Bất Biến
              </span>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800 border border-emerald-200">
                INVARIANT LOGIC
              </span>
            </div>

            <h4 className="mt-3 text-sm font-extrabold text-emerald-950">Điều Kiện Toán Học Bất Biến</h4>

            <div className="mt-2.5 rounded-xl border border-emerald-200 bg-white p-3.5 text-xs text-emerald-950 leading-relaxed font-medium shadow-sm">
              {curr.invariant}
            </div>

            <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 p-3 text-slate-100">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                Công thức logic vị từ (Formal Predicate):
              </span>
              <div className="font-mono text-xs text-emerald-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {curr.formalLogic}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white/80 p-2.5 font-mono text-[11px] text-emerald-900 border border-emerald-200 truncate">
            Bối cảnh: {curr.context}
          </div>
        </div>

        {/* Step 3: SQL Engine DDL & Enforcement */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 text-slate-100 shadow-md space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="flex items-center gap-1.5 text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
                <Lock className="h-4 w-4 text-cyan-400" />
                Bước 3: Cài Đặt SQL & Trigger
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-slate-800">
                DBMS DDL
              </span>
            </div>

            <h4 className="mt-3 text-sm font-extrabold text-white">Mã Lệnh Cài Đặt Trong DBMS</h4>

            <pre className="mt-2.5 rounded-xl border border-slate-800 bg-slate-900 p-3 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre-wrap shadow-inner">
              {curr.sqlSyntax}
            </pre>

            <div className="mt-3 text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Cơ chế thực thi: </strong>
              {curr.enforcement}
            </div>
          </div>

          <div className="rounded-lg bg-slate-900 p-2.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider border border-slate-800">
            Phân loại: {curr.type}
          </div>
        </div>
      </div>
    </div>
  );
}
