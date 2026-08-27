"use client";

import React, { useState } from "react";
import {
  Database,
  Table,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Layers,
  Key,
  KeyRound,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter,
  Columns,
  GitMerge,
  Grid
} from "lucide-react";

export default function RelationalModelHeroBanner() {
  const [activeTab, setActiveTab] = useState("anatomy"); // 'anatomy' | 'integrity' | 'algebra'
  const [selectedElement, setSelectedElement] = useState("pk"); // 'pk' | 'fk' | 'domain' | 'tuple' | 'degree' | 'cardinality'
  const [violationScenario, setViolationScenario] = useState("none"); // 'none' | 'pk_null' | 'fk_invalid' | 'domain_error' | 'valid'
  const [algebraOp, setAlgebraOp] = useState("select"); // 'select' | 'project' | 'join' | 'cartesian'

  const sampleStudents = [
    { id: 1, maSV: "SV001", hoTen: "Nguyễn Văn An", ngaySinh: "2004-03-15", maKhoa: "CNTT", diemTB: 8.5 },
    { id: 2, maSV: "SV002", hoTen: "Trần Thị Bích", ngaySinh: "2004-07-22", maKhoa: "HTTT", diemTB: 9.2 },
    { id: 3, maSV: "SV003", hoTen: "Lê Hoàng Cường", ngaySinh: "2003-11-09", maKhoa: "CNTT", diemTB: 6.8 },
    { id: 4, maSV: "SV004", hoTen: "Phạm Minh Đức", ngaySinh: "2004-01-30", maKhoa: "KTPM", diemTB: 7.5 }
  ];

  const sampleDepartments = [
    { maKhoa: "CNTT", tenKhoa: "Công Nghệ Thông Tin", vanPhong: "Nhà A1" },
    { maKhoa: "HTTT", tenKhoa: "Hệ Thống Thông Tin", vanPhong: "Nhà B2" },
    { maKhoa: "KTPM", tenKhoa: "Kỹ Thuật Phần Mềm", vanPhong: "Nhà C3" }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30 text-slate-800 shadow-sm my-8">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Header */}
      <div className="relative p-6 sm:p-8 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 text-orange-800 text-xs font-bold font-mono tracking-wide shadow-sm">
            <Database className="w-4 h-4 text-orange-600" />
            CHƯƠNG II: MÔ HÌNH DỮ LIỆU QUAN HỆ
          </div>
          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
            Relational Data Model • E.F. Codd (1970)
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Nền Tảng Toán Học & Cấu Trúc Bảng Quan Hệ RDBMS
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed font-sans">
          Khám phá thế giới cơ sở dữ liệu quan hệ: Lý thuyết tập hợp của các <strong className="text-orange-700 font-mono">k-bộ</strong>, giải phẫu bảng dữ liệu, 3 tam trụ ràng buộc toàn vẹn và cỗ máy đại số quan hệ.
        </p>

        {/* 4 Technology Pillar Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6">
          <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-900">E.F. Codd 1970</div>
              <div className="text-[10px] text-slate-500 font-mono">Set Theory Core</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-900">Tuples & Domains</div>
              <div className="text-[10px] text-slate-500 font-mono">Tập các k-bộ</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-900">3 Integrity Pillars</div>
              <div className="text-[10px] text-slate-500 font-mono">Domain, Entity, Ref</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-mono font-bold text-xs">
              04
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-900">Relational Algebra</div>
              <div className="text-[10px] text-slate-500 font-mono">σ, π, ⋈, ×, ∪, −</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Studio Navigation Tabs */}
      <div className="px-6 pt-4 border-b border-slate-200 bg-slate-50/60 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab("anatomy")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === "anatomy"
              ? "bg-orange-600 text-white shadow-md shadow-orange-950/20"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <Table className="w-4 h-4" /> 1. Giải Phẫu Bảng Quan Hệ (Anatomy)
        </button>

        <button
          onClick={() => setActiveTab("integrity")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === "integrity"
              ? "bg-blue-600 text-white shadow-md shadow-blue-950/20"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <ShieldAlert className="w-4 h-4" /> 2. Thử Nghiệm Vi Phạm 3 Ràng Buộc (Sandbox)
        </button>

        <button
          onClick={() => setActiveTab("algebra")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === "algebra"
              ? "bg-purple-600 text-white shadow-md shadow-purple-950/20"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <Zap className="w-4 h-4" /> 3. Cỗ Máy Đại Số Quan Hệ Live (Algebra Engine)
        </button>
      </div>

      {/* Tab 1: Relational Matrix Anatomy */}
      {activeTab === "anatomy" && (
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-orange-600 uppercase tracking-wider font-bold">
                Interactive Relational Table
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Quan Hệ: <span className="text-orange-600 font-mono">SINH_VIEN</span> (<span className="underline text-amber-700">MaSV</span>, HoTen, NgaySinh, MaKhoa, DiemTB)
              </h3>
            </div>

            {/* Element Selectors */}
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              <button
                onClick={() => setSelectedElement("pk")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedElement === "pk" ? "bg-amber-100 border-amber-400 text-amber-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                🔑 Khóa chính (PK)
              </button>
              <button
                onClick={() => setSelectedElement("fk")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedElement === "fk" ? "bg-blue-100 border-blue-400 text-blue-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                🔗 Khóa ngoại (FK)
              </button>
              <button
                onClick={() => setSelectedElement("domain")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedElement === "domain" ? "bg-purple-100 border-purple-400 text-purple-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                🌐 Miền giá trị (Domain)
              </button>
              <button
                onClick={() => setSelectedElement("tuple")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedElement === "tuple" ? "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                📄 Bộ giá trị (Tuple)
              </button>
              <button
                onClick={() => setSelectedElement("degree")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedElement === "degree" ? "bg-orange-100 border-orange-400 text-orange-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                📐 Bậc (Degree = 5)
              </button>
              <button
                onClick={() => setSelectedElement("cardinality")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${selectedElement === "cardinality" ? "bg-cyan-100 border-cyan-400 text-cyan-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                🔢 Lực lượng (|R| = 4)
              </button>
            </div>
          </div>

          {/* Interactive Table Display */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs text-left border-collapse font-sans">
              <thead>
                <tr className={`border-b border-slate-200 ${selectedElement === "degree" ? "bg-orange-50 ring-2 ring-orange-400" : "bg-slate-100"}`}>
                  <th className="p-3.5 text-slate-500 font-mono text-center w-12">#</th>
                  <th className={`p-3.5 font-bold font-mono ${selectedElement === "pk" ? "bg-amber-100 text-amber-900 ring-2 ring-amber-400" : "text-slate-800"}`}>
                    <u>MaSV</u> (PK)
                  </th>
                  <th className="p-3.5 font-bold text-slate-800 font-mono">HoTen</th>
                  <th className="p-3.5 font-bold text-slate-800 font-mono">NgaySinh</th>
                  <th className={`p-3.5 font-bold font-mono ${selectedElement === "fk" ? "bg-blue-100 text-blue-900 ring-2 ring-blue-400" : "text-slate-800"}`}>
                    MaKhoa (FK)
                  </th>
                  <th className={`p-3.5 font-bold font-mono ${selectedElement === "domain" ? "bg-purple-100 text-purple-900 ring-2 ring-purple-400" : "text-slate-800"}`}>
                    DiemTB [0.0..10.0]
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleStudents.map((st, idx) => {
                  const isTupleActive = selectedElement === "tuple" && idx === 1;
                  const isCardinalityActive = selectedElement === "cardinality";

                  return (
                    <tr
                      key={st.id}
                      className={`border-b border-slate-100 transition-all ${
                        isTupleActive
                          ? "bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400 font-semibold"
                          : isCardinalityActive
                          ? "bg-cyan-50 text-cyan-900"
                          : idx % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50/60"
                      }`}
                    >
                      <td className="p-3 text-center text-slate-400 font-mono text-[11px]">{idx + 1}</td>
                      <td className={`p-3 font-mono font-bold ${selectedElement === "pk" ? "text-amber-800 bg-amber-50" : "text-slate-800"}`}>
                        {st.maSV}
                      </td>
                      <td className="p-3 text-slate-700">{st.hoTen}</td>
                      <td className="p-3 font-mono text-slate-500">{st.ngaySinh}</td>
                      <td className={`p-3 font-mono ${selectedElement === "fk" ? "text-blue-800 bg-blue-50 font-bold" : "text-slate-700"}`}>
                        {st.maKhoa}
                      </td>
                      <td className={`p-3 font-mono ${selectedElement === "domain" ? "text-purple-800 bg-purple-50 font-bold" : "text-slate-700"}`}>
                        {st.diemTB.toFixed(1)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Academic Annotation Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 shadow-sm">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600" />
              {selectedElement === "pk" && "1. Khóa Chính (Primary Key — PK):"}
              {selectedElement === "fk" && "2. Khóa Ngoại (Foreign Key — FK):"}
              {selectedElement === "domain" && "3. Miền Giá Trị (Domain — dom(A)): "}
              {selectedElement === "tuple" && "4. Bộ Giá Trị (Tuple / k-bộ):"}
              {selectedElement === "degree" && "5. Bậc Của Quan Hệ (Degree — n):"}
              {selectedElement === "cardinality" && "6. Lực Lượng Quan Hệ (Cardinality — |R|):"}
            </div>
            <p className="text-slate-600 leading-relaxed font-sans">
              {selectedElement === "pk" && "Thuộc tính MaSV là khóa chính. Đặc điểm: Giá trị không bao giờ được NULL (Entity Integrity) và định danh duy nhất từng bản ghi sinh viên trong toàn bộ trường đại học."}
              {selectedElement === "fk" && "Thuộc tính MaKhoa là khóa ngoại tham chiếu đến bảng KHOA. Giá trị của MaKhoa bắt buộc phải tồn tại trong bảng KHOA hoặc mang giá trị NULL (Referential Integrity)."}
              {selectedElement === "domain" && "Miền giá trị dom(DiemTB) là tập số thực trong khoảng [0.0 .. 10.0]. Mọi phép gán ngoài miền này (như 15 hay chuỗi ký tự) đều bị DBMS từ chối (Domain Integrity)."}
              {selectedElement === "tuple" && "Mỗi dòng là một phần tử t = ('SV002', 'Trần Thị Bích', '2004-07-22', 'HTTT', 9.2) thuộc tích Descartes D1 × D2 × ... × D5."}
              {selectedElement === "degree" && "Bậc của quan hệ n = 5 (tương ứng với 5 cột/thuộc tính trong lược đồ)."}
              {selectedElement === "cardinality" && "Lực lượng |R| = 4 (tương ứng với 4 bộ giá trị / 4 sinh viên hiện đang có trong bảng tại thời điểm khảo sát)."}
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Integrity Violations Sandbox */}
      {activeTab === "integrity" && (
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-blue-600 uppercase tracking-wider font-bold">
                DBMS Security Engine • Tam Trụ Ràng Buộc Toàn Vẹn
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Thử Nghiệm Vi Phạm Các Ràng Buộc Toàn Vẹn Của RDBMS
              </h3>
            </div>
          </div>

          {/* Test Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <button
              onClick={() => setViolationScenario("pk_null")}
              className={`p-3.5 rounded-xl border text-left transition-all space-y-1 shadow-sm ${
                violationScenario === "pk_null"
                  ? "bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 text-rose-600">
                <XCircle className="w-4 h-4" /> 1. Chèn PK = NULL
              </div>
              <p className="text-[11px] text-slate-500">Vi phạm Toàn vẹn Thực thể (Entity Integrity)</p>
            </button>

            <button
              onClick={() => setViolationScenario("fk_invalid")}
              className={`p-3.5 rounded-xl border text-left transition-all space-y-1 shadow-sm ${
                violationScenario === "fk_invalid"
                  ? "bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 text-rose-600">
                <XCircle className="w-4 h-4" /> 2. Chèn FK Lạ ('AI_X')
              </div>
              <p className="text-[11px] text-slate-500">Vi phạm Toàn vẹn Tham chiếu (Referential)</p>
            </button>

            <button
              onClick={() => setViolationScenario("domain_error")}
              className={`p-3.5 rounded-xl border text-left transition-all space-y-1 shadow-sm ${
                violationScenario === "domain_error"
                  ? "bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 text-rose-600">
                <XCircle className="w-4 h-4" /> 3. Nhập Điểm = 15.0
              </div>
              <p className="text-[11px] text-slate-500">Vi phạm Toàn vẹn Miền giá trị (Domain)</p>
            </button>

            <button
              onClick={() => setViolationScenario("valid")}
              className={`p-3.5 rounded-xl border text-left transition-all space-y-1 shadow-sm ${
                violationScenario === "valid"
                  ? "bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" /> 4. Chèn Hợp Lệ 100%
              </div>
              <p className="text-[11px] text-slate-500">Thỏa mãn cả 3 ràng buộc toàn vẹn</p>
            </button>
          </div>

          {/* Terminal Feedback Display (Dark Terminal) */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
              <span>SQL Execution & Constraint Validation Output:</span>
              <span className="text-orange-400 font-bold">RDBMS Engine: PostgreSQL / Oracle</span>
            </div>

            {violationScenario === "none" && (
              <div className="text-slate-400 py-6 text-center italic">
                👉 Nhấn vào một trong 4 tình huống thử nghiệm bên trên để quan sát phản hồi từ Hệ Quản Trị CSDL.
              </div>
            )}

            {violationScenario === "pk_null" && (
              <div className="space-y-2 text-red-300">
                <div className="text-slate-300">
                  <span className="text-blue-400 font-bold">SQL&gt;</span> INSERT INTO SINH_VIEN VALUES (<span className="bg-red-950 px-1 text-red-300 font-bold">NULL</span>, 'Lê Văn Lỗi', '2004-05-10', 'CNTT', 8.0);
                </div>
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 space-y-1">
                  <div className="font-bold text-red-400">[ERROR ORA-01400] cannot insert NULL into ("SINH_VIEN"."MASV")</div>
                  <div className="text-[11px] text-red-300 font-sans leading-relaxed">
                    <strong>Giải thích học thuật:</strong> Toàn vẹn thực thể (Entity Integrity) quy định mọi thành phần của khóa chính (Primary Key) phải mang giá trị xác định và <strong>tuyệt đối không được phép là NULL</strong> để đảm bảo khả năng định danh duy nhất từng thực thể.
                  </div>
                </div>
              </div>
            )}

            {violationScenario === "fk_invalid" && (
              <div className="space-y-2 text-red-300">
                <div className="text-slate-300">
                  <span className="text-blue-400 font-bold">SQL&gt;</span> INSERT INTO SINH_VIEN VALUES ('SV005', 'Phạm Văn Bẫy', '2004-08-12', <span className="bg-red-950 px-1 text-red-300 font-bold">'AI_UNKNOWN'</span>, 7.5);
                </div>
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 space-y-1">
                  <div className="font-bold text-red-400">[ERROR ORA-02291] integrity constraint (FK_KHOA) violated - parent key not found</div>
                  <div className="text-[11px] text-red-300 font-sans leading-relaxed">
                    <strong>Giải thích học thuật:</strong> Toàn vẹn tham chiếu (Referential Integrity) quy định giá trị của khóa ngoại <code>MaKhoa = 'AI_UNKNOWN'</code> bắt buộc phải tồn tại trong cột khóa chính của bảng cha <code>KHOA</code>, hoặc phải là giá trị NULL.
                  </div>
                </div>
              </div>
            )}

            {violationScenario === "domain_error" && (
              <div className="space-y-2 text-red-300">
                <div className="text-slate-300">
                  <span className="text-blue-400 font-bold">SQL&gt;</span> INSERT INTO SINH_VIEN VALUES ('SV005', 'Hoàng Văn Sai', '2004-09-18', 'CNTT', <span className="bg-red-950 px-1 text-red-300 font-bold">15.5</span>);
                </div>
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 space-y-1">
                  <div className="font-bold text-red-400">[ERROR ORA-02290] check constraint (CK_DIEMTB_0_10) violated</div>
                  <div className="text-[11px] text-red-300 font-sans leading-relaxed">
                    <strong>Giải thích học thuật:</strong> Toàn vẹn miền giá trị (Domain Integrity) quy định mọi giá trị gán cho thuộc tính <code>DiemTB</code> phải thuộc tập hợp hợp lệ <code>dom(DiemTB) = [0.0 .. 10.0]</code>. Giá trị 15.5 vượt quá ngưỡng cho phép nên bị từ chối!
                  </div>
                </div>
              </div>
            )}

            {violationScenario === "valid" && (
              <div className="space-y-2 text-emerald-300">
                <div className="text-slate-300">
                  <span className="text-blue-400 font-bold">SQL&gt;</span> INSERT INTO SINH_VIEN VALUES ('SV005', 'Lê Quỳnh Nga', '2004-12-05', 'CNTT', 8.8);
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 space-y-1">
                  <div className="font-bold text-emerald-400">[SUCCESS COMMIT] 1 row inserted. Transaction committed successfully.</div>
                  <div className="text-[11px] text-emerald-300 font-sans leading-relaxed">
                    <strong>Tuyệt vời!</strong> Thao tác thỏa mãn đồng thời: Khóa chính không NULL (SV005), Khóa ngoại hợp lệ ('CNTT' có trong bảng KHOA), và ĐiểmTB (8.8) nằm đúng trong miền [0.0 .. 10.0].
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Live Relational Algebra Engine */}
      {activeTab === "algebra" && (
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-purple-600 uppercase tracking-wider font-bold">
                Relational Algebra Sandbox
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Mô Phỏng Trực Quan Các Phép Toán Đại Số Quan Hệ
              </h3>
            </div>

            {/* Operator Buttons */}
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              <button
                onClick={() => setAlgebraOp("select")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                  algebraOp === "select"
                    ? "bg-purple-600 text-white border-purple-500 font-bold shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Filter className="w-3.5 h-3.5" /> Phép Chọn (σ)
              </button>
              <button
                onClick={() => setAlgebraOp("project")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                  algebraOp === "project"
                    ? "bg-purple-600 text-white border-purple-500 font-bold shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Columns className="w-3.5 h-3.5" /> Phép Chiếu (π)
              </button>
              <button
                onClick={() => setAlgebraOp("join")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                  algebraOp === "join"
                    ? "bg-purple-600 text-white border-purple-500 font-bold shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <GitMerge className="w-3.5 h-3.5" /> Phép Kết Nối (⋈)
              </button>
              <button
                onClick={() => setAlgebraOp("cartesian")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                  algebraOp === "cartesian"
                    ? "bg-purple-600 text-white border-purple-500 font-bold shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Grid className="w-3.5 h-3.5" /> Tích Descartes (×)
              </button>
            </div>
          </div>

          {/* Algebra Operation Showcase (Dark Terminal for formulas & result) */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="text-xs font-mono font-bold text-amber-300">
                {algebraOp === "select" && "Cú pháp toán học: σ (DiemTB >= 8.0) (SINH_VIEN)"}
                {algebraOp === "project" && "Cú pháp toán học: π (MaSV, HoTen, DiemTB) (SINH_VIEN)"}
                {algebraOp === "join" && "Cú pháp toán học: SINH_VIEN ⋈ (SINH_VIEN.MaKhoa = KHOA.MaKhoa) KHOA"}
                {algebraOp === "cartesian" && "Cú pháp toán học: SINH_VIEN × KHOA (Cardinality = 4 × 3 = 12)"}
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">
                Result Relation
              </span>
            </div>

            {/* Dynamic Results Table */}
            <div className="overflow-x-auto text-xs font-mono">
              {algebraOp === "select" && (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <th className="p-2.5">MaSV</th>
                      <th className="p-2.5">HoTen</th>
                      <th className="p-2.5">NgaySinh</th>
                      <th className="p-2.5">MaKhoa</th>
                      <th className="p-2.5 text-purple-300">DiemTB (&gt;= 8.0)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800 bg-purple-950/30 text-purple-200">
                      <td className="p-2.5 font-bold">SV001</td>
                      <td className="p-2.5">Nguyễn Văn An</td>
                      <td className="p-2.5">2004-03-15</td>
                      <td className="p-2.5">CNTT</td>
                      <td className="p-2.5 font-bold text-amber-300">8.5</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-purple-950/30 text-purple-200">
                      <td className="p-2.5 font-bold">SV002</td>
                      <td className="p-2.5">Trần Thị Bích</td>
                      <td className="p-2.5">2004-07-22</td>
                      <td className="p-2.5">HTTT</td>
                      <td className="p-2.5 font-bold text-amber-300">9.2</td>
                    </tr>
                  </tbody>
                </table>
              )}

              {algebraOp === "project" && (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <th className="p-2.5 text-purple-300">MaSV</th>
                      <th className="p-2.5 text-purple-300">HoTen</th>
                      <th className="p-2.5 text-purple-300">DiemTB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleStudents.map((st) => (
                      <tr key={st.id} className="border-b border-slate-800 text-slate-300">
                        <td className="p-2.5 font-bold text-purple-400">{st.maSV}</td>
                        <td className="p-2.5">{st.hoTen}</td>
                        <td className="p-2.5 text-amber-300 font-bold">{st.diemTB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {algebraOp === "join" && (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <th className="p-2.5">MaSV</th>
                      <th className="p-2.5">HoTen</th>
                      <th className="p-2.5 text-purple-300">MaKhoa</th>
                      <th className="p-2.5 text-blue-300">TenKhoa (KHOA)</th>
                      <th className="p-2.5">VanPhong</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800 text-slate-300">
                      <td className="p-2.5 font-bold">SV001</td>
                      <td className="p-2.5">Nguyễn Văn An</td>
                      <td className="p-2.5 font-bold text-purple-400">CNTT</td>
                      <td className="p-2.5 text-blue-300">Công Nghệ Thông Tin</td>
                      <td className="p-2.5">Nhà A1</td>
                    </tr>
                    <tr className="border-b border-slate-800 text-slate-300">
                      <td className="p-2.5 font-bold">SV002</td>
                      <td className="p-2.5">Trần Thị Bích</td>
                      <td className="p-2.5 font-bold text-purple-400">HTTT</td>
                      <td className="p-2.5 text-blue-300">Hệ Thống Thông Tin</td>
                      <td className="p-2.5">Nhà B2</td>
                    </tr>
                    <tr className="border-b border-slate-800 text-slate-300">
                      <td className="p-2.5 font-bold">SV003</td>
                      <td className="p-2.5">Lê Hoàng Cường</td>
                      <td className="p-2.5 font-bold text-purple-400">CNTT</td>
                      <td className="p-2.5 text-blue-300">Công Nghệ Thông Tin</td>
                      <td className="p-2.5">Nhà A1</td>
                    </tr>
                  </tbody>
                </table>
              )}

              {algebraOp === "cartesian" && (
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-sans space-y-1">
                  <div><strong>Tích Descartes (Cartesian Product):</strong> Kết hợp từng hàng của bảng <code>SINH_VIEN</code> (4 hàng) với mọi hàng của bảng <code>KHOA</code> (3 hàng).</div>
                  <div className="text-amber-300 font-mono text-[11px]">• Bậc kết quả: Degree = 5 + 3 = 8 thuộc tính.</div>
                  <div className="text-amber-300 font-mono text-[11px]">• Lực lượng kết quả: Cardinality = 4 × 3 = 12 bộ giá trị.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
