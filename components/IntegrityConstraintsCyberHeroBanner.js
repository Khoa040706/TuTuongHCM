"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  KeyRound,
  Link2,
  TableProperties,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Database,
  Terminal,
  Activity,
  Layers,
  Lock,
  RefreshCw
} from "lucide-react";

export default function IntegrityConstraintsCyberHeroBanner() {
  const [activeTier, setActiveTier] = useState("domain"); // 'domain' | 'entity' | 'referential' | 'inter_relation'
  const [testScenario, setTestScenario] = useState("valid"); // 'valid' | 'invalid'
  const [simulatedLog, setSimulatedLog] = useState(null);

  const tiers = {
    domain: {
      id: "domain",
      title: "1. Ràng Buộc Miền Giá Trị",
      subtitle: "Domain & Attribute Integrity",
      color: "from-blue-500 to-cyan-600",
      accentBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      icon: TableProperties,
      formalDef: "∀t ∈ SINHVIEN: 0.0 ≤ t.DiemTB ≤ 10.0 ∧ t.Phai ∈ {'Nam', 'Nu'}",
      sqlCode: `ALTER TABLE SINHVIEN\nADD CONSTRAINT CK_DiemTB CHECK (DiemTB >= 0.0 AND DiemTB <= 10.0),\n    CONSTRAINT CK_Phai CHECK (Phai IN (N'Nam', N'Nữ'));`,
      description:
        "Kiểm soát từng ô dữ liệu riêng lẻ của thuộc tính, đảm bảo tuân thủ kiểu dữ liệu, giới hạn khoảng số, độ dài chuỗi và tập giá trị hợp lệ.",
      impactTable: [
        { table: "SINHVIEN", insert: "+ (Cần KT)", delete: "- (Không KT)", update: "+ (Cột DiemTB, Phai)" }
      ]
    },
    entity: {
      id: "entity",
      title: "2. Ràng Buộc Thực Thể (Khóa Chính)",
      subtitle: "Entity Integrity & Uniqueness",
      color: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      icon: KeyRound,
      formalDef: "∀t1, t2 ∈ SINHVIEN: (t1.MaSV = t2.MaSV ⇒ t1 = t2) ∧ (∀t: t.MaSV ≠ NULL)",
      sqlCode: `ALTER TABLE SINHVIEN\nADD CONSTRAINT PK_SinhVien PRIMARY KEY (MaSV);`,
      description:
        "Đảm bảo mỗi bộ (dòng) trong bảng đại diện cho một thực thể phân biệt duy nhất trong thế giới thực. Khóa chính tuyệt đối cấm giá trị NULL và cấm trùng lặp.",
      impactTable: [
        { table: "SINHVIEN", insert: "+ (Kiểm tra trùng PK)", delete: "- (Không KT)", update: "+ (Nếu sửa cột MaSV)" }
      ]
    },
    referential: {
      id: "referential",
      title: "3. Ràng Buộc Tham Chiếu (Khóa Ngoại)",
      subtitle: "Referential Integrity",
      color: "from-violet-500 to-purple-600",
      accentBg: "bg-violet-500/10 text-violet-400 border-violet-500/30",
      icon: Link2,
      formalDef: "∀t ∈ SINHVIEN: (t.MaKhoa ≠ NULL ⇒ ∃k ∈ KHOA: k.MaKhoa = t.MaKhoa)",
      sqlCode: `ALTER TABLE SINHVIEN\nADD CONSTRAINT FK_SV_Khoa FOREIGN KEY (MaKhoa)\n    REFERENCES KHOA(MaKhoa)\n    ON DELETE NO ACTION ON UPDATE CASCADE;`,
      description:
        "Đảm bảo tính nhất quán liên kết giữa 2 bảng. Mọi giá trị khóa ngoại xuất hiện ở bảng con bắt buộc phải tồn tại trong tập khóa chính của bảng cha.",
      impactTable: [
        { table: "SINHVIEN (Bảng Con)", insert: "+ (Kiểm tra có MaKhoa cha)", delete: "- (Không KT)", update: "+ (Nếu sửa MaKhoa)" },
        { table: "KHOA (Bảng Cha)", insert: "- (Không KT)", delete: "+ (Kiểm tra có SV mồ côi)", update: "+ (Nếu sửa MaKhoa)" }
      ]
    },
    inter_relation: {
      id: "inter_relation",
      title: "4. Ràng Buộc Liên Bộ & Liên Quan Hệ",
      subtitle: "Complex Business Rules & Trigger",
      color: "from-amber-500 to-rose-600",
      accentBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      icon: ShieldAlert,
      formalDef: "∀nv ∈ NHANVIEN: (nv.MaNQL ≠ NULL ⇒ nv.Luong ≤ (SELECT Luong FROM NHANVIEN WHERE MaNV = nv.MaNQL))",
      sqlCode: `CREATE TRIGGER trg_CheckLuongNQL ON NHANVIEN\nAFTER INSERT, UPDATE AS\nBEGIN\n    IF EXISTS (\n        SELECT 1 FROM inserted i\n        JOIN NHANVIEN nql ON i.MaNQL = nql.MaNV\n        WHERE i.Luong > nql.Luong\n    )\n    BEGIN\n        RAISERROR(N'Lương nhân viên không được vượt quá lương người quản lý!', 16, 1);\n        ROLLBACK TRANSACTION;\n    END\nEND;`,
      description:
        "Các quy tắc nghiệp vụ phức tạp liên quan đến sự so sánh giữa nhiều dòng trong cùng một bảng hoặc nhiều bảng khác nhau, đòi hỏi sử dụng Trigger hoặc Assertion.",
      impactTable: [
        { table: "NHANVIEN", insert: "+ (Kiểm tra Luong ≤ Luong NQL)", delete: "- (Không KT)", update: "+ (Sửa Luong hoặc MaNQL)" }
      ]
    }
  };

  const currentTier = tiers[activeTier];

  const handleSimulate = (scenario) => {
    setTestScenario(scenario);
    if (scenario === "valid") {
      setSimulatedLog({
        status: "SUCCESS",
        message: "Giao dịch hợp lệ! Dữ liệu vượt qua 4 lớp khiên bảo vệ toàn vẹn (Integrity Verified 100%).",
        color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40"
      });
    } else {
      setSimulatedLog({
        status: "CONSTRAINT_VIOLATION",
        message:
          "Msg 547, Level 16, State 0: The INSERT statement conflicted with the CHECK/FOREIGN KEY constraint. The statement has been terminated & Transaction ROLLED BACK.",
        color: "text-rose-400 border-rose-500/40 bg-rose-950/40"
      });
    }
  };

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 p-6 sm:p-8 text-slate-800 shadow-xl relative overflow-hidden font-sans">
      {/* Background Glow Decorative Orbs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-purple-200/20 blur-[100px]" />

      {/* Top Header Badge & Title */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800 border border-indigo-200 uppercase tracking-wider">
                Chapter IV Interactive Architecture
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                Live Cyber Shield
              </span>
            </div>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Chương IV: RÀNG BUỘC TOÀN VẸN (Integrity Constraints)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-indigo-900 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm">
          <Lock className="h-3.5 w-3.5 text-indigo-600" />
          <span>DATA INTEGRITY LEVEL: MAXIMUM (ACID)</span>
        </div>
      </div>

      {/* Subtitle / Philosophy */}
      <div className="relative z-10 mt-4 text-xs md:text-sm text-slate-600 leading-relaxed max-w-4xl">
        <strong>Ràng buộc toàn vẹn (RBTV)</strong> là các quy tắc ngữ nghĩa logic được áp đặt lên cơ sở dữ liệu nhằm ngăn ngừa các trạng thái dữ liệu sai lệch, phi logic hoặc mâu thuẫn, đảm bảo thông tin luôn chính xác và phản ánh trung thực thế giới thực.
      </div>

      {/* 4 Pillars Tier Selector */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Object.values(tiers).map((tier) => {
          const Icon = tier.icon;
          const isActive = activeTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => {
                setActiveTier(tier.id);
                setSimulatedLog(null);
              }}
              className={`flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all ${
                isActive
                  ? "border-indigo-500 bg-white shadow-md ring-2 ring-indigo-400/40"
                  : "border-slate-200 bg-slate-50/80 hover:bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <Icon className={`h-5 w-5 ${isActive ? "text-indigo-600" : "text-slate-500"}`} />
                {isActive && <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />}
              </div>
              <span className={`mt-2 text-xs font-bold ${isActive ? "text-indigo-950" : "text-slate-800"}`}>
                {tier.title}
              </span>
              <span className="text-[10px] text-slate-500">{tier.subtitle}</span>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Panel of Active Tier */}
      <div className="relative z-10 mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">{currentTier.title}</h3>
              <span className="rounded-md px-2 py-0.5 font-mono text-[10px] font-bold border bg-indigo-50 text-indigo-800 border-indigo-200">
                {currentTier.subtitle}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-600">{currentTier.description}</p>
          </div>

          {/* Quick Simulation Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSimulate("valid")}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 text-xs font-bold text-white transition-all shadow-sm"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Thử Chèn Hợp Lệ
            </button>
            <button
              onClick={() => handleSimulate("invalid")}
              className="flex items-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 px-3.5 py-2 text-xs font-bold text-white transition-all shadow-sm"
            >
              <XCircle className="h-3.5 w-3.5" />
              Thử Chèn Vi Phạm
            </button>
          </div>
        </div>

        {/* 2-Column Details: Formal Logic & SQL Code */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {/* Formal Predicate Logic */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-slate-200 pb-2">
              <span>Biểu Diễn Hình Thức (Logic Vị Từ Bậc 1)</span>
              <span className="font-mono text-[10px] text-indigo-600">FORMAL LOGIC</span>
            </div>
            <div className="mt-3 font-mono text-xs text-amber-300 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed overflow-x-auto shadow-md">
              {currentTier.formalDef}
            </div>
            <div className="mt-3 text-[11px] text-slate-600 leading-relaxed">
              Biểu diễn điều kiện toàn vẹn một cách toán học chính xác bằng các lượng từ với mọi (∀), tồn tại (∃) và phép kéo theo (⇒).
            </div>
          </div>

          {/* SQL Implementation & Trigger */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-slate-200 pb-2">
              <span>Cài Đặt CSDL (T-SQL Constraint / Trigger)</span>
              <span className="font-mono text-[10px] text-emerald-700">ENGINE DDL</span>
            </div>
            <pre className="mt-3 font-mono text-xs text-cyan-300 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap shadow-md">
              {currentTier.sqlCode}
            </pre>
          </div>
        </div>

        {/* Impact Matrix (Bảng Tầm Ảnh Hưởng) */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-amber-600" />
              <span>Bảng Tầm Ảnh Hưởng (Impact Matrix: Thêm +, Xóa -, Sửa *)</span>
            </div>
            <span className="font-mono text-[10px] text-amber-800 font-semibold">EFFICIENCY OPTIMIZATION</span>
          </div>

          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-100 text-indigo-950 border-b border-slate-200">
                <tr>
                  <th className="p-2.5">Bảng Dữ Liệu</th>
                  <th className="p-2.5">Thao tác Thêm (+)</th>
                  <th className="p-2.5">Thao tác Xóa (-)</th>
                  <th className="p-2.5">Thao tác Sửa (*)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {currentTier.impactTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-indigo-900">{row.table}</td>
                    <td className="p-2.5 text-amber-700 font-semibold">{row.insert}</td>
                    <td className="p-2.5 text-slate-500">{row.delete}</td>
                    <td className="p-2.5 text-cyan-800">{row.update}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Simulation Output Terminal Log */}
        {simulatedLog && (
          <div className={`mt-4 rounded-xl border p-3.5 font-mono text-xs transition-all shadow-sm ${simulatedLog.color}`}>
            <div className="flex items-center gap-2 font-bold mb-1">
              <Terminal className="h-4 w-4" />
              <span>DBMS ENGINE RESPONSE: [{simulatedLog.status}]</span>
            </div>
            <p className="leading-relaxed">{simulatedLog.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
