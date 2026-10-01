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
  RefreshCw,
  Compass,
  Cpu,
  BookOpen
} from "lucide-react";

export default function IntegrityConstraintsCyberHeroBanner() {
  const [activeTier, setActiveTier] = useState("domain"); // 'domain' | 'entity' | 'referential' | 'inter_relation'
  const [testScenario, setTestScenario] = useState("valid"); // 'valid' | 'invalid'
  const [simulatedLog, setSimulatedLog] = useState(null);

  const pillars = {
    domain: {
      id: "domain",
      title: "1. RBTV Miền Giá Trị",
      subtitle: "Domain & Column Check",
      color: "from-blue-600 to-cyan-600",
      accentBg: "bg-blue-50 text-blue-800 border-blue-200",
      icon: TableProperties,
      formalDef: "∀ t ∈ SINHVIEN : (0.0 ≤ t.DiemTB ≤ 10.0) ∧ (t.Phai ∈ {'Nam', 'Nu'})",
      formalBreakdown: [
        { sym: "∀ t ∈ SINHVIEN", desc: "Với mọi bộ (dòng) sinh viên t trong quan hệ SINHVIEN" },
        { sym: "0.0 ≤ t.DiemTB ≤ 10.0", desc: "Cột điểm trung bình bị khống chế chặt chẽ trong miền [0.0, 10.0]" },
        { sym: "t.Phai ∈ {'Nam', 'Nu'}", desc: "Cột giới tính chỉ nhận các giá trị thuộc tập hợp cho phép" }
      ],
      sqlCode: `ALTER TABLE SINHVIEN\nADD CONSTRAINT CK_DiemTB CHECK (DiemTB >= 0.0 AND DiemTB <= 10.0),\n    CONSTRAINT CK_Phai CHECK (Phai IN (N'Nam', N'Nữ'));`,
      description:
        "Kiểm soát từng ô dữ liệu riêng lẻ của thuộc tính, đảm bảo tuân thủ kiểu dữ liệu, giới hạn khoảng số, độ dài chuỗi và tập giá trị hợp lệ.",
      impactTable: [
        { table: "SINHVIEN", insert: "+ (Bắt buộc kiểm tra)", delete: "- (An toàn, bỏ qua)", update: "+ (Nếu sửa DiemTB, Phai)" }
      ]
    },
    entity: {
      id: "entity",
      title: "2. RBTV Thực Thể (Khóa Chính)",
      subtitle: "Entity Integrity & Primary Key",
      color: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      icon: KeyRound,
      formalDef: "∀ t1, t2 ∈ SINHVIEN : (t1.MaSV = t2.MaSV ⇒ t1 = t2) ∧ (∀ t : t.MaSV ≠ NULL)",
      formalBreakdown: [
        { sym: "∀ t1, t2 ∈ SINHVIEN", desc: "Với mọi cặp bộ t1, t2 bất kỳ trong bảng SINHVIEN" },
        { sym: "t1.MaSV = t2.MaSV ⇒ t1 = t2", desc: "Nếu trùng mã sinh viên thì bắt buộc phải là cùng 1 dòng duy nhất" },
        { sym: "t.MaSV ≠ NULL", desc: "Thuộc tính khóa chính tuyệt đối cấm mang giá trị rỗng (NOT NULL)" }
      ],
      sqlCode: `ALTER TABLE SINHVIEN\nADD CONSTRAINT PK_SinhVien PRIMARY KEY (MaSV);`,
      description:
        "Đảm bảo mỗi dòng trong bảng đại diện cho một thực thể duy nhất trong thế giới thực. Khóa chính tuyệt đối cấm trùng lặp và cấm giá trị NULL.",
      impactTable: [
        { table: "SINHVIEN", insert: "+ (Kiểm tra trùng PK)", delete: "- (An toàn, bỏ qua)", update: "+ (Nếu sửa cột MaSV)" }
      ]
    },
    referential: {
      id: "referential",
      title: "3. RBTV Tham Chiếu (Khóa Ngoại)",
      subtitle: "Referential Integrity & Foreign Key",
      color: "from-purple-600 to-indigo-600",
      accentBg: "bg-purple-50 text-purple-800 border-purple-200",
      icon: Link2,
      formalDef: "∀ t ∈ SINHVIEN : (t.MaKhoa ≠ NULL ⇒ ∃ k ∈ KHOA : k.MaKhoa = t.MaKhoa)",
      formalBreakdown: [
        { sym: "∀ t ∈ SINHVIEN", desc: "Với mọi sinh viên t trong bảng con SINHVIEN" },
        { sym: "∃ k ∈ KHOA", desc: "Bắt buộc phải tồn tại một dòng tương ứng k trong bảng cha KHOA" },
        { sym: "k.MaKhoa = t.MaKhoa", desc: "Khóa ngoại của sinh viên phải khớp chính xác với khóa chính của khoa" }
      ],
      sqlCode: `ALTER TABLE SINHVIEN\nADD CONSTRAINT FK_SV_Khoa FOREIGN KEY (MaKhoa)\n    REFERENCES KHOA(MaKhoa)\n    ON DELETE NO ACTION ON UPDATE CASCADE;`,
      description:
        "Bảo đảm tính nhất quán liên kết giữa 2 bảng. Mọi giá trị khóa ngoại xuất hiện ở bảng con bắt buộc phải tồn tại trong tập khóa chính của bảng cha.",
      impactTable: [
        { table: "SINHVIEN (Bảng Con)", insert: "+ (Kiểm tra có MaKhoa cha)", delete: "- (An toàn, bỏ qua)", update: "+ (Nếu sửa MaKhoa)" },
        { table: "KHOA (Bảng Cha)", insert: "- (An toàn, bỏ qua)", delete: "+ (Kiểm tra sinh viên mồ côi)", update: "+ (Nếu sửa MaKhoa)" }
      ]
    },
    inter_relation: {
      id: "inter_relation",
      title: "4. RBTV Liên Bộ & Liên Quan Hệ",
      subtitle: "Complex Business Rules & Trigger",
      color: "from-rose-600 to-amber-600",
      accentBg: "bg-rose-50 text-rose-800 border-rose-200",
      icon: ShieldAlert,
      formalDef: "∀ nv ∈ NHANVIEN : (nv.MaNQL ≠ NULL ⇒ nv.Luong ≤ (SELECT Luong FROM NHANVIEN WHERE MaNV = nv.MaNQL))",
      formalBreakdown: [
        { sym: "∀ nv ∈ NHANVIEN", desc: "Với mọi nhân viên nv có người quản lý trực tiếp" },
        { sym: "nv.Luong ≤ Luong(nv.MaNQL)", desc: "Mức lương của nhân viên không bao giờ được vượt lương người quản lý" }
      ],
      sqlCode: `CREATE TRIGGER trg_CheckLuongNQL ON NHANVIEN\nAFTER INSERT, UPDATE AS\nBEGIN\n    IF EXISTS (\n        SELECT 1 FROM inserted i\n        JOIN NHANVIEN nql ON i.MaNQL = nql.MaNV\n        WHERE i.Luong > nql.Luong\n    )\n    BEGIN\n        RAISERROR(N'Lương nhân viên không được vượt quá lương người quản lý!', 16, 1);\n        ROLLBACK TRANSACTION;\n    END\nEND;`,
      description:
        "Quy tắc nghiệp vụ phức tạp liên quan đến sự so sánh giữa nhiều dòng trong cùng một bảng hoặc nhiều bảng khác nhau, đòi hỏi sử dụng Trigger hoặc Assertion.",
      impactTable: [
        { table: "NHANVIEN", insert: "+ (Kiểm tra Luong ≤ Luong NQL)", delete: "- (An toàn, bỏ qua)", update: "+ (Nếu sửa Luong hoặc MaNQL)" }
      ]
    }
  };

  const curr = pillars[activeTier];

  const handleSimulate = (scenario) => {
    setTestScenario(scenario);
    if (scenario === "valid") {
      setSimulatedLog({
        status: "ACID_CONSISTENCY_PASS",
        message: "Giao dịch hợp lệ 100%! Dữ liệu thỏa mãn toàn bộ các điều kiện bất biến (Integrity Verified 100%). Commit thành công.",
        color: "text-emerald-300 border-emerald-500/40 bg-emerald-950/70"
      });
    } else {
      setSimulatedLog({
        status: "INTEGRITY_CONSTRAINT_VIOLATION",
        message:
          "Msg 547, Level 16, State 0: Lệnh INSERT/UPDATE xung đột với Ràng buộc toàn vẹn của bảng. Toàn bộ thao tác bị hủy và giao dịch đã ROLLBACK.",
        color: "text-rose-300 border-rose-500/40 bg-rose-950/70"
      });
    }
  };

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 p-5 sm:p-8 text-slate-800 shadow-xl relative overflow-hidden font-sans">
      {/* Background Decorative Blur Orbs */}
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
                Chương IV: Tổng Quan Kiến Trúc
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                Live Cyber Shield
              </span>
            </div>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              RÀNG BUỘC TOÀN VẸN (Integrity Constraints)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-indigo-950 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
          <Lock className="h-4 w-4 text-indigo-600" />
          <span>DATA INTEGRITY: ACID VERIFIED</span>
        </div>
      </div>

      {/* Philosophy Callout */}
      <div className="relative z-10 mt-4 text-xs md:text-sm text-slate-600 leading-relaxed max-w-4xl">
        <strong>Ràng buộc toàn vẹn (RBTV)</strong> là các <em>điều kiện bất biến</em> mà mọi trạng thái của CSDL bắt buộc phải thỏa mãn tại mọi thời điểm, phản ánh chính xác các quy tắc quản lý nghiệp vụ và bảo vệ CSDL khỏi các giao dịch sai lệch.
      </div>

      {/* 5 Core Pillars Mini Roadmap Navigator */}
      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs">
        <span className="font-bold text-indigo-950 flex items-center gap-1.5 mr-1">
          <Compass className="h-4 w-4 text-indigo-600" />
          Lộ Trình Cốt Lõi:
        </span>
        <span className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-700">
          1. Khái Niệm Bất Biến
        </span>
        <span className="text-indigo-400">&rarr;</span>
        <span className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-700">
          2. Ba Yếu Tố Cấu Thành
        </span>
        <span className="text-indigo-400">&rarr;</span>
        <span className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-700">
          3. Bảng Tầm Ảnh Hưởng (+, -, *)
        </span>
        <span className="text-indigo-400">&rarr;</span>
        <span className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-700">
          4. Phân Loại 8 Nhánh RBTV
        </span>
        <span className="text-indigo-400">&rarr;</span>
        <span className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-700">
          5. Chu Trình Lược Đồ
        </span>
      </div>

      {/* 4 Pillars Tier Selector: 2x2 on laptop, 4-cols on wide screen */}
      <div className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {Object.values(pillars).map((tier) => {
          const Icon = tier.icon;
          const isActive = activeTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => {
                setActiveTier(tier.id);
                setSimulatedLog(null);
              }}
              className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                isActive
                  ? "border-indigo-500 bg-white shadow-md ring-2 ring-indigo-400/40"
                  : "border-slate-200 bg-slate-50/70 hover:bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${tier.color} text-white shadow-sm`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                {isActive && <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />}
              </div>
              <span className={`mt-3 text-xs font-bold ${isActive ? "text-indigo-950" : "text-slate-800"}`}>
                {tier.title}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">{tier.subtitle}</span>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Panel of Active Tier */}
      <div className="relative z-10 mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-extrabold text-slate-900">{curr.title}</h3>
              <span className="rounded-md px-2 py-0.5 font-mono text-[10px] font-bold border bg-indigo-50 text-indigo-800 border-indigo-200">
                {curr.subtitle}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-600 max-w-2xl">{curr.description}</p>
          </div>

          {/* Quick Simulation Trigger Buttons */}
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

        {/* 2-Column Details: Formal Logic & SQL Engine Code */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Formal Predicate Logic Card with Breakdown */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-100 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-amber-400 border-b border-slate-800 pb-2">
                <span>Biểu Diễn Hình Thức (Logic Vị Từ Bậc 1):</span>
                <span className="font-mono text-[10px] text-slate-400">FORMAL NOTATION</span>
              </div>
              <div className="mt-3 font-mono text-xs text-emerald-300 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed overflow-x-auto shadow-inner">
                {curr.formalDef}
              </div>

              {/* Symbol Breakdown */}
              <div className="mt-3 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Giải nghĩa từng thành phần logic:
                </span>
                {curr.formalBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                    <span className="font-mono text-cyan-300 font-bold shrink-0">{item.sym}:</span>
                    <span className="text-slate-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SQL Implementation & Trigger */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-slate-200 pb-2">
                <span>Cài Đặt CSDL (T-SQL Constraint / Trigger)</span>
                <span className="font-mono text-[10px] text-emerald-700">ENGINE DDL</span>
              </div>
              <pre className="mt-3 font-mono text-xs text-cyan-900 bg-white p-3 rounded-lg border border-slate-200 leading-relaxed overflow-x-auto whitespace-pre-wrap shadow-sm">
                {curr.sqlCode}
              </pre>
            </div>
            <div className="mt-3 text-[11px] text-slate-500">
              Được tự động thẩm định và thực thi trên SQL Server, PostgreSQL, MySQL hoặc Oracle.
            </div>
          </div>
        </div>

        {/* Impact Matrix (Bảng Tầm Ảnh Hưởng) */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-amber-600" />
              <span>Bảng Tầm Ảnh Hưởng (Impact Matrix: Thêm +, Xóa -, Sửa *)</span>
            </div>
            <span className="font-mono text-[10px] text-amber-800 font-semibold">TỐI ƯU HÓA HIỆU NĂNG DBMS</span>
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
                {curr.impactTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-indigo-900">{row.table}</td>
                    <td className="p-2.5 text-amber-700 font-semibold">{row.insert}</td>
                    <td className="p-2.5 text-emerald-700 font-semibold">{row.delete}</td>
                    <td className="p-2.5 text-cyan-800 font-semibold">{row.update}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Simulated Log Output Terminal */}
        {simulatedLog && (
          <div className={`rounded-xl border p-3.5 font-mono text-xs transition-all shadow-md ${simulatedLog.color}`}>
            <div className="flex items-center gap-2 font-bold mb-1">
              <Terminal className="h-4 w-4" />
              <span>DBMS ENGINE RESPONSE: [{simulatedLog.status}]</span>
            </div>
            <p className="leading-relaxed font-sans">{simulatedLog.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
