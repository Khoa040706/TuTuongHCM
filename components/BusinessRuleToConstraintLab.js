"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, FileText, Cpu, KeyRound, Lock, AlertCircle } from "lucide-react";

export default function BusinessRuleToConstraintLab() {
  const [selectedRule, setSelectedRule] = useState("c1"); // 'c1' | 'c2' | 'c3'

  const rules = {
    c1: {
      id: "C1",
      name: "Ràng Buộc Khóa Chính (C1)",
      bizRule: "Mỗi sinh viên khi nhập học phải có một mã số riêng biệt, duy nhất và không được trùng với bất kỳ sinh viên nào khác.",
      invariant: "Không bao giờ tồn tại hai dòng dữ liệu khác nhau trong bảng SINH_VIEN có cùng giá trị thuộc tính maSV.",
      formalLogic: "∀ t1, t2 ∈ SINH_VIEN : (t1.maSV = t2.maSV ⇒ t1 = t2) ∧ (t1.maSV ≠ NULL)",
      sqlSyntax: "ALTER TABLE SINH_VIEN ADD CONSTRAINT PK_SinhVien PRIMARY KEY (maSV);",
      type: "Ràng buộc Thực thể (Entity Integrity)",
      context: "Quan hệ SINH_VIEN"
    },
    c2: {
      id: "C2",
      name: "Ràng Buộc Giới Hạn Thi Lại (C2)",
      bizRule: "Quy chế đào tạo: Mỗi sinh viên chỉ được phép thi tối đa 2 lần cho cùng một môn học (Lần 1 và Thi lại Lần 2).",
      invariant: "Giá trị của thuộc tính lanThi trong bảng KET_QUA chỉ được phép nhận các giá trị nguyên nằm trong đoạn [1, 2].",
      formalLogic: "∀ t ∈ KET_QUA : t.lanThi ∈ {1, 2} ∧ (t.lanThi ≤ 2)",
      sqlSyntax: "ALTER TABLE KET_QUA ADD CONSTRAINT CK_LanThi CHECK (lanThi IN (1, 2));",
      type: "Ràng buộc Miền giá trị (Domain Constraint)",
      context: "Quan hệ KET_QUA"
    },
    c3: {
      id: "C3",
      name: "Ràng Buộc Khoa Đào Tạo (C3)",
      bizRule: "Mọi sinh viên theo học tại trường bắt buộc phải trực thuộc một khoa quản lý cụ thể đã được thành lập.",
      invariant: "Mã khoa (maKhoa) của bất kỳ sinh viên nào đều phải tồn tại trước trong danh mục makhoa của bảng KHOA.",
      formalLogic: "∀ t ∈ SINH_VIEN : ∃ k ∈ KHOA : (t.maKhoa = k.makhoa)",
      sqlSyntax: "ALTER TABLE SINH_VIEN ADD CONSTRAINT FK_SV_Khoa FOREIGN KEY (maKhoa) REFERENCES KHOA(makhoa);",
      type: "Ràng buộc Tham chiếu (Referential Integrity)",
      context: "Quan hệ SINH_VIEN và KHOA"
    }
  };

  const curr = rules[selectedRule];

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">BusinessRuleToConstraintLab</h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
                Quy Tắc Quản Trị &rarr; RBTV
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá quy trình chuyển đổi từ Quy tắc nghiệp vụ đời thực sang Điều kiện bất biến và Cài đặt CSDL
            </p>
          </div>
        </div>

        {/* Constraint Selector */}
        <div className="flex rounded-xl bg-emerald-100/80 p-1 border border-emerald-200">
          {Object.keys(rules).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedRule(key)}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                selectedRule === key
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-emerald-900 hover:text-emerald-700"
              }`}
            >
              {rules[key].id} ({key.toUpperCase()})
            </button>
          ))}
        </div>
      </div>

      {/* 3-Step Transformation Pipeline */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {/* Step 1 */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <FileText className="h-4 w-4 text-amber-500" />
              Bước 1: Quy Tắc Đời Thực
            </div>
            <h4 className="mt-2 text-sm font-bold text-gray-900">{curr.name}</h4>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed italic bg-amber-50/60 p-3 rounded-lg border border-amber-100">
              &ldquo;{curr.bizRule}&rdquo;
            </p>
          </div>
          <div className="mt-3 text-[11px] text-gray-500">
            Nguồn gốc: Yêu cầu quản lý từ thực tế.
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-emerald-50/30 p-4 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <Cpu className="h-4 w-4 text-emerald-600" />
              Bước 2: Điều Kiện Bất Biến
            </div>
            <h4 className="mt-2 text-sm font-bold text-emerald-950">Mệnh Đề Logic Bất Biến</h4>
            <p className="mt-2 text-xs text-emerald-900 leading-relaxed bg-white p-3 rounded-lg border border-emerald-200 font-medium">
              {curr.invariant}
            </p>
          </div>
          <div className="mt-3 font-mono text-[11px] text-emerald-700">
            Bối cảnh: {curr.context}
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Lock className="h-4 w-4 text-cyan-400" />
              Bước 3: Cài Đặt SQL & Logic
            </div>
            <div className="mt-2 font-mono text-xs text-amber-300 bg-gray-900 p-2.5 rounded border border-gray-800 leading-relaxed overflow-x-auto">
              {curr.formalLogic}
            </div>
            <div className="mt-2 font-mono text-[11px] text-cyan-300 bg-gray-900 p-2.5 rounded border border-gray-800 overflow-x-auto">
              {curr.sqlSyntax}
            </div>
          </div>
          <div className="mt-3 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
            Phân loại: {curr.type}
          </div>
        </div>
      </div>
    </div>
  );
}
