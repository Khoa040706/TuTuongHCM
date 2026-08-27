"use client";

import React, { useState } from "react";
import { BookOpen, Terminal, CheckCircle2, Layers, KeyRound, Activity, Sparkles, Copy, Check } from "lucide-react";

export default function StudentResearchProjectWorkbench() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copied, setCopied] = useState(false);

  const constraintsList = [
    {
      id: "RB1",
      name: "RB1 (Khóa chính SINHVIEN): Mã sinh viên là duy nhất",
      type: "RBTV Liên Bộ (Khóa chính)",
      context: "SINHVIEN",
      logic: "∀ t1, t2 ∈ SINHVIEN : (t1.MaSV = t2.MaSV ⇒ t1 = t2)",
      impact: [
        { table: "SINHVIEN", insert: "+", update: "+(MaSV)", delete: "-" }
      ],
      desc: "Mỗi sinh viên tham gia nghiên cứu có một mã số duy nhất phân biệt."
    },
    {
      id: "RB2",
      name: "RB2 (Khóa chính DETAI): Mã đề tài là duy nhất",
      type: "RBTV Liên Bộ (Khóa chính)",
      context: "DETAI",
      logic: "∀ t1, t2 ∈ DETAI : (t1.MaDT = t2.MaDT ⇒ t1 = t2)",
      impact: [
        { table: "DETAI", insert: "+", update: "+(MaDT)", delete: "-" }
      ],
      desc: "Mỗi đề tài nghiên cứu khoa học có một mã số duy nhất quản lý."
    },
    {
      id: "RB3",
      name: "RB3 (Khóa chính phức hợp SV_DT): Cặp (MaSV, MaDT) là duy nhất",
      type: "RBTV Liên Bộ (Khóa chính phức hợp)",
      context: "SV_DT",
      logic: "∀ t1, t2 ∈ SV_DT : (t1.MaSV = t2.MaSV ∧ t1.MaDT = t2.MaDT ⇒ t1 = t2)",
      impact: [
        { table: "SV_DT", insert: "+", update: "+(MaSV, MaDT)", delete: "-" }
      ],
      desc: "Một sinh viên chỉ tham gia thực hiện một đề tài cụ thể đúng 1 lần."
    },
    {
      id: "RB4",
      name: "RB4 (Khóa ngoại MaSV): Sinh viên trong SV_DT phải tồn tại trong SINHVIEN",
      type: "RBTV Phụ Thuộc Tồn Tại (Khóa ngoại)",
      context: "SV_DT (Con) và SINHVIEN (Cha)",
      logic: "∀ t ∈ SV_DT : ∃ s ∈ SINHVIEN : (t.MaSV = s.MaSV)",
      impact: [
        { table: "SV_DT (Con)", insert: "+", update: "+(MaSV)", delete: "-" },
        { table: "SINHVIEN (Cha)", insert: "-", update: "+(MaSV)", delete: "+" }
      ],
      desc: "Chỉ những sinh viên đã có hồ sơ trong SINHVIEN mới được phân công làm đề tài."
    },
    {
      id: "RB5",
      name: "RB5 (Khóa ngoại MaDT): Đề tài trong SV_DT phải tồn tại trong DETAI",
      type: "RBTV Phụ Thuộc Tồn Tại (Khóa ngoại)",
      context: "SV_DT (Con) và DETAI (Cha)",
      logic: "∀ t ∈ SV_DT : ∃ d ∈ DETAI : (t.MaDT = d.MaDT)",
      impact: [
        { table: "SV_DT (Con)", insert: "+", update: "+(MaDT)", delete: "-" },
        { table: "DETAI (Cha)", insert: "-", update: "+(MaDT)", delete: "+" }
      ],
      desc: "Sinh viên chỉ được nhận thực hiện các đề tài đã được phê duyệt trong danh mục DETAI."
    },
    {
      id: "RB6",
      name: "RB6 (Miền giá trị Kinh phí): Kinh phí thực hiện đề tài phải lớn hơn 0",
      type: "RBTV Miền Giá Trị",
      context: "DETAI",
      logic: "∀ t ∈ DETAI : t.Kinhphi > 0",
      impact: [
        { table: "DETAI", insert: "+", update: "+(Kinhphi)", delete: "-" }
      ],
      desc: "Kinh phí nghiên cứu phải là số dương hợp lệ (đơn vị: triệu đồng)."
    },
    {
      id: "RB7",
      name: "RB7 (Miền giá trị Học lực): Học lực thuộc tập giá trị chuẩn",
      type: "RBTV Miền Giá Trị",
      context: "SINHVIEN",
      logic: "∀ t ∈ SINHVIEN : t.Hocluc ∈ {N'Xuất sắc', N'Giỏi', N'Khá', N'Trung bình'}",
      impact: [
        { table: "SINHVIEN", insert: "+", update: "+(Hocluc)", delete: "-" }
      ],
      desc: "Xếp loại học lực của sinh viên phải tuân thủ đúng quy chế đào tạo."
    }
  ];

  const fullSqlScript = `-- T-SQL Cài đặt đầy đủ các ràng buộc cho CSDL Nghiên cứu Đề tài Sinh viên
CREATE TABLE SINHVIEN (
    MaSV VARCHAR(10) PRIMARY KEY,
    Hoten NVARCHAR(50) NOT NULL,
    Namsinh INT CHECK (Namsinh >= 1970 AND Namsinh <= YEAR(GETDATE())),
    QQ NVARCHAR(50),
    Hocluc NVARCHAR(20) CHECK (Hocluc IN (N'Xuất sắc', N'Giỏi', N'Khá', N'Trung bình'))
);

CREATE TABLE DETAI (
    MaDT VARCHAR(10) PRIMARY KEY,
    TenDT NVARCHAR(100) NOT NULL,
    Chunhiem NVARCHAR(50),
    Kinhphi FLOAT CHECK (Kinhphi > 0)
);

CREATE TABLE SV_DT (
    MaSV VARCHAR(10) FOREIGN KEY REFERENCES SINHVIEN(MaSV) ON DELETE CASCADE,
    MaDT VARCHAR(10) FOREIGN KEY REFERENCES DETAI(MaDT) ON DELETE CASCADE,
    NoiAD NVARCHAR(100),
    KQ NVARCHAR(30),
    CONSTRAINT PK_SV_DT PRIMARY KEY (MaSV, MaDT)
);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullSqlScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">StudentResearchProjectWorkbench</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Bài Tập Mục 8 (Giáo Trình)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio giải trọn bộ danh mục RBTV, Logic vị từ và Bảng Tầm Ảnh Hưởng cho CSDL Nghiên cứu Đề tài Sinh viên
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Đã Sao Chép DDL!" : "Copy T-SQL Script"}
        </button>
      </div>

      {/* Schema Context */}
      <div className="mt-5 rounded-xl bg-indigo-50/70 border border-indigo-200 p-4 text-xs text-indigo-950 font-mono space-y-1">
        <div>&bull; SINHVIEN(MaSV, Hoten, Namsinh, QQ, Hocluc)</div>
        <div>&bull; DETAI(MaDT, TenDT, Chunhiem, Kinhphi)</div>
        <div>&bull; SV_DT(MaSV, MaDT, NoiAD, KQ)</div>
      </div>

      {/* Constraints Cards List */}
      <div className="mt-5 space-y-4">
        {constraintsList.map((c) => (
          <div key={c.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2">
              <span className="font-bold text-xs text-indigo-950">{c.name}</span>
              <span className="font-mono text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                Phân loại: {c.type}
              </span>
            </div>

            <div className="text-xs text-gray-600">{c.desc}</div>

            <div className="font-mono text-xs text-amber-900 bg-amber-50/70 p-2.5 rounded border border-amber-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              <strong>Logic vị từ: </strong>{c.logic}
            </div>

            {/* Impact Table */}
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left font-mono text-[11px]">
                <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                  <tr>
                    <th className="p-2">Quan Hệ</th>
                    <th className="p-2">Thêm (+)</th>
                    <th className="p-2">Sửa (*)</th>
                    <th className="p-2">Xóa (-)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {c.impact.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-2 font-bold text-indigo-700">{row.table}</td>
                      <td className="p-2 text-amber-700 font-semibold">{row.insert}</td>
                      <td className="p-2 text-cyan-700 font-semibold">{row.update}</td>
                      <td className="p-2 text-gray-500 font-medium">{row.delete}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
