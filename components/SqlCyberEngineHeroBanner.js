"use client";

import React, { useState } from "react";
import {
  Terminal,
  Database,
  Cpu,
  Layers,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Search,
  KeyRound,
  ShieldCheck,
  Server,
  Zap
} from "lucide-react";

export default function SqlCyberEngineHeroBanner() {
  const [activePillar, setActivePillar] = useState("DQL"); // 'DQL' | 'DDL' | 'DML' | 'DCL'
  const [activePipelineStep, setActivePipelineStep] = useState(1);

  const pillars = {
    DQL: {
      name: "DQL — Data Query Language",
      badge: "Truy Vấn Dữ Liệu",
      color: "from-cyan-500 to-blue-600",
      border: "border-cyan-500/40",
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
      keywords: "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
      code: `-- [DQL] Truy vấn sinh viên giỏi khoa CNTT có điểm TB >= 8.0
SELECT 
    sv.MaSV,
    sv.Hoten,
    COUNT(kq.MaMH) AS SoMonHoc,
    AVG(kq.Diem) AS DiemTB
FROM SINHVIEN sv
JOIN KHOA kh ON sv.MaKhoa = kh.MaKhoa
JOIN KETQUA kq ON sv.MaSV = kq.MaSV
WHERE kh.TenKhoa = N'Công nghệ Thông tin'
GROUP BY sv.MaSV, sv.Hoten
HAVING AVG(kq.Diem) >= 8.0
ORDER BY DiemTB DESC;`,
      resultHeaders: ["MaSV", "Hoten", "SoMonHoc", "DiemTB"],
      resultRows: [
        ["SV001", "Lê Ngọc Phúc", "6", "9.15"],
        ["SV004", "Nguyễn Mỹ Truyền", "6", "8.75"],
        ["SV012", "Phạm Thu Hoa", "5", "8.40"]
      ],
      desc: "Phân hệ cốt lõi mạnh mẽ nhất của SQL, cho phép truy xuất và tổng hợp dữ liệu đa bảng theo tư duy tập hợp phi thủ tục (Non-procedural / Declarative)."
    },
    DDL: {
      name: "DDL — Data Definition Language",
      badge: "Định Nghĩa Dữ Liệu",
      color: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/40",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-500/10",
      keywords: "CREATE, ALTER, DROP, TRUNCATE, RENAME",
      code: `-- [DDL] Khởi tạo bảng SINHVIEN kèm các ràng buộc toàn vẹn
CREATE TABLE SINHVIEN (
    MaSV VARCHAR(10) PRIMARY KEY,
    Hoten NVARCHAR(50) NOT NULL,
    NgaySinh DATE NULL,
    DiemTB FLOAT CHECK (DiemTB >= 0.0 AND DiemTB <= 10.0),
    MaKhoa VARCHAR(10),
    CONSTRAINT FK_SV_Khoa FOREIGN KEY (MaKhoa) 
        REFERENCES KHOA(MaKhoa)
        ON DELETE SET NULL
);`,
      resultHeaders: ["Status", "Operation", "Target Object", "Execution Time"],
      resultRows: [
        ["SUCCESS", "CREATE TABLE", "dbo.SINHVIEN", "12 ms"],
        ["SUCCESS", "ADD CONSTRAINT", "FK_SV_Khoa", "4 ms"]
      ],
      desc: "Xác lập và cấu trúc hóa toàn bộ lược đồ CSDL (Schema), kiểu dữ liệu cột, chỉ mục (Index) và các ràng buộc toàn vẹn khóa chính, khóa ngoại, miền giá trị."
    },
    DML: {
      name: "DML — Data Manipulation Language",
      badge: "Thao Tác Dữ Liệu",
      color: "from-amber-500 to-orange-600",
      border: "border-amber-500/40",
      accent: "text-amber-400",
      bgAccent: "bg-amber-500/10",
      keywords: "INSERT, UPDATE, DELETE, MERGE",
      code: `-- [DML] Thêm mới và cập nhật học bổng cho sinh viên xuất sắc
INSERT INTO SINHVIEN (MaSV, Hoten, NgaySinh, DiemTB, MaKhoa)
VALUES ('SV025', N'Trần Đức Thịnh', '2004-05-18', 8.9, 'CNTT');

UPDATE SINHVIEN 
SET DiemTB = DiemTB + 0.2
WHERE MaKhoa = 'CNTT' AND DiemTB >= 8.5;`,
      resultHeaders: ["Statement", "Rows Affected", "Duration", "Trigger Fired"],
      resultRows: [
        ["INSERT INTO SINHVIEN", "1 row affected", "8 ms", "trg_AuditInsert"],
        ["UPDATE SINHVIEN", "4 rows affected", "15 ms", "trg_AuditUpdate"]
      ],
      desc: "Thay đổi trạng thái thực thể của CSDL thông qua các thao tác thêm mới bản ghi, cập nhật giá trị thuộc tính hoặc xóa các bộ dữ liệu."
    },
    DCL: {
      name: "DCL & TCL — Data Control & Transaction",
      badge: "Kiểm Soát & Giao Dịch",
      color: "from-purple-500 to-indigo-600",
      border: "border-purple-500/40",
      accent: "text-purple-400",
      bgAccent: "bg-purple-500/10",
      keywords: "GRANT, REVOKE, COMMIT, ROLLBACK, SAVEPOINT",
      code: `-- [DCL/TCL] Phân quyền bảo mật & Quản lý giao dịch ACID
GRANT SELECT, INSERT ON SINHVIEN TO User_GiangVien;

BEGIN TRANSACTION;
    UPDATE TAIKHOAN SET SoDu = SoDu - 500000 WHERE MaTK = 'TK_A';
    UPDATE TAIKHOAN SET SoDu = SoDu + 500000 WHERE MaTK = 'TK_B';
    -- Nếu không có lỗi xảy ra thì ghi nhận vĩnh viễn
COMMIT;`,
      resultHeaders: ["Transaction ID", "ACID State", "Isolation Level", "Security Log"],
      resultRows: [
        ["TXN_88492", "COMMITTED", "READ COMMITTED", "User_GiangVien AUTHORIZED"]
      ],
      desc: "Đảm bảo tính bảo mật phân quyền người dùng (DCL) và duy trì trọn vẹn 4 đặc tính ACID của giao dịch phân tán (TCL)."
    }
  };

  const pipelineSteps = [
    {
      step: 1,
      title: "1. Lexical & Syntax Parser",
      badge: "Từ Vựng & Cú Pháp",
      desc: "Phân rã chuỗi ký tự SQL thành các Token từ khóa, kiểm tra tính đúng đắn ngữ pháp ANSI-SQL và sinh Cây cú pháp trừu tượng (AST)."
    },
    {
      step: 2,
      title: "2. Semantic Catalog Check",
      badge: "Ngữ Nghĩa & Danh Mục",
      desc: "Đối chiếu tên Bảng, Cột, Quyền truy cập và Kiểu dữ liệu tương thích với Từ điển dữ liệu hệ thống (System Data Catalog)."
    },
    {
      step: 3,
      title: "3. Logical Query Plan",
      badge: "Cây Đại Số Quan Hệ",
      desc: "Chuyển dịch câu lệnh SQL trừu tượng thành Cây biểu thức Đại số quan hệ ban đầu (Relational Algebra Tree gồm σ, π, ⋈)."
    },
    {
      step: 4,
      title: "4. Cost-Based Optimizer (CBO)",
      badge: "Cỗ Máy Tối Ưu",
      desc: "Áp dụng các quy tắc toán học tương đương: đẩy phép chọn σ xuống sâu nhất, lựa chọn giải thuật Join (Hash Join vs Nested Loop, Index Scan)."
    },
    {
      step: 5,
      title: "5. Execution Engine & Results",
      badge: "Thực Thi & Xuất Bộ",
      desc: "Thực thi kế hoạch vật lý tối ưu (Physical Plan), truy cập trang đĩa/Buffer Pool và trả về tập các dòng kết quả (Result Tuples)."
    }
  ];

  const executionOrder = [
    { order: "1", clause: "FROM & JOIN", desc: "Xác định các bảng nguồn và thực hiện tích/kết nối các bảng" },
    { order: "2", clause: "WHERE", desc: "Lọc các dòng đơn lẻ trước khi gom nhóm (phép chọn σ ban đầu)" },
    { order: "3", clause: "GROUP BY", desc: "Chia nhỏ tập dữ liệu thành các nhóm theo thuộc tính gom nhóm" },
    { order: "4", clause: "HAVING", desc: "Lọc các nhóm thỏa mãn điều kiện hàm tổng hợp (COUNT, SUM, AVG)" },
    { order: "5", clause: "SELECT", desc: "Tính toán biểu thức và cắt các cột cần hiển thị (phép chiếu π)" },
    { order: "6", clause: "DISTINCT", desc: "Khử bỏ tất cả các dòng dữ liệu trùng lặp trong kết quả" },
    { order: "7", clause: "ORDER BY", desc: "Sắp xếp tập kết quả cuối cùng theo thứ tự ASC hoặc DESC" },
    { order: "8", clause: "TOP / LIMIT", desc: "Cắt lấy N dòng đầu tiên của tập kết quả đã được sắp xếp" }
  ];

  const currentPillar = pillars[activePillar];

  return (
    <div className="my-8 rounded-3xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-sky-50/20 p-6 sm:p-8 text-slate-800 shadow-xl relative overflow-hidden font-sans">
      {/* Glow Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber Hero Title Bar */}
      <div className="relative z-10 border-b border-cyan-200/80 pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-900 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Database className="w-4 h-4 text-cyan-600 animate-pulse" />
            CHƯƠNG III: NGÔN NGỮ SQL (STRUCTURED QUERY LANGUAGE)
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-emerald-700 font-semibold">
              ANSI / ISO SQL:2023
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-cyan-700 font-semibold">
              Declarative Set Engine
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Cỗ Máy Truy Vấn Có Cấu Trúc & Ngôn Ngữ Khai Báo Dữ Liệu
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          Ngôn ngữ SQL là cây cầu thực thi hiện đại kết nối trực tiếp lý thuyết <strong>Đại số quan hệ</strong> với các hệ quản trị CSDL quan hệ (RDBMS). Khám phá 4 phân hệ ngôn ngữ chuẩn mực, kiến trúc bộ tối ưu hóa truy vấn (Query Optimizer) và thứ tự thực thi logic cốt lõi.
        </p>
      </div>

      {/* SECTION 1: THE 4 PILLARS OF SQL (INTERACTIVE PLAYGROUND) */}
      <div className="relative z-10 mb-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 font-mono">
            <Terminal className="w-5 h-5 text-cyan-600" />
            1. Bốn Phân Hệ Ngôn Ngữ SQL Chuẩn Mực (The 4 Pillars)
          </h3>
          <span className="text-[11px] font-mono text-slate-500">
            Nhấp chọn phân hệ để mô phỏng cú pháp & kết quả thực thi
          </span>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {Object.keys(pillars).map((key) => {
            const item = pillars[key];
            const isActive = activePillar === key;
            return (
              <button
                key={key}
                onClick={() => setActivePillar(key)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isActive
                    ? "bg-white border-cyan-400 ring-2 ring-cyan-400/40 shadow-md"
                    : "bg-slate-50/80 border-slate-200 hover:bg-white text-slate-600 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-cyan-800" : "text-slate-700"}`}>
                    {key}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
                    {item.badge}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1 font-mono">
                  {item.keywords}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Interactive Screen */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-800">
                {currentPillar.name}
              </span>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                {currentPillar.desc}
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-semibold">
              Cú pháp: {currentPillar.keywords}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Code Box (7 Cols - Dark Terminal) */}
            <div className="lg:col-span-7 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span className="flex items-center gap-1.5 text-cyan-700 font-bold">
                  <Code2 className="w-3.5 h-3.5" /> SQL Code Snippet:
                </span>
                <span className="text-slate-400">ANSI-SQL 92/99</span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 overflow-x-auto whitespace-pre leading-relaxed shadow-md">
                {currentPillar.code}
              </pre>
            </div>

            {/* Simulated Result Table (5 Cols - Light Data Grid) */}
            <div className="lg:col-span-5 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Result Set Preview:
                </span>
                <span className="text-emerald-700 font-mono font-semibold">Query OK</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-[11px] text-left border-collapse font-sans">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-cyan-900 font-mono">
                      {currentPillar.resultHeaders.map((h, idx) => (
                        <th key={idx} className="p-2.5 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {currentPillar.resultRows.map((row, rIdx) => (
                      <tr key={rIdx} className="bg-white hover:bg-slate-50/80">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 text-slate-700 whitespace-nowrap">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: QUERY OPTIMIZER PIPELINE SIMULATOR */}
      <div className="relative z-10 mb-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 font-mono">
            <Cpu className="w-5 h-5 text-emerald-600" />
            2. Cỗ Máy Xử Lý & Tối Ưu Hóa Truy Vấn (Query Optimizer Pipeline)
          </h3>
          <span className="text-[11px] font-mono text-slate-500">
            Bấm chọn từng pha để xem cơ chế vận hành bên trong RDBMS
          </span>
        </div>

        {/* 5 Steps Linear Flow Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {pipelineSteps.map((p) => {
            const isSelected = activePipelineStep === p.step;
            return (
              <button
                key={p.step}
                onClick={() => setActivePipelineStep(p.step)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm ring-1 ring-emerald-400/30"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-700">
                    Pha {p.step}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">
                    {p.badge}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-800 line-clamp-1">
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 border border-emerald-200 shadow-sm">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
              {pipelineSteps[activePipelineStep - 1].title} — {pipelineSteps[activePipelineStep - 1].badge}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              {pipelineSteps[activePipelineStep - 1].desc}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: SYNTAX ORDER VS LOGICAL EXECUTION ORDER MATRIX */}
      <div className="relative z-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 font-mono">
            <Workflow className="w-5 h-5 text-purple-600" />
            3. Ma Trận Thứ Tự Viết Cú Pháp vs Thứ Tự Thực Thi Logic Thực Tế
          </h3>
          <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">
            ⚠️ Chú ý: SQL viết SELECT đầu tiên nhưng nhân RDBMS thực thi FROM đầu tiên!
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {executionOrder.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 transition-all space-y-1.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-mono font-bold text-xs flex items-center justify-center border border-purple-200">
                  {item.order}
                </span>
                <span className="text-xs font-mono font-extrabold text-cyan-800">
                  {item.clause}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
