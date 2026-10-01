"use client";

import React, { useState, useMemo } from "react";
import {
  GitBranch,
  Table,
  Layers,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Search,
  KeyRound,
  ShieldCheck,
  Link2,
  Database,
  Calculator,
  RotateCw,
  Info
} from "lucide-react";

export default function IntegrityTaxonomyMasterMap() {
  const [selectedType, setSelectedType] = useState("domain");
  const [searchQuery, setSearchQuery] = useState("");

  const taxonomy = {
    domain: {
      id: "domain",
      group: "single",
      category: "Bối Cảnh 1 Quan Hệ",
      groupTitle: "Nhóm 1: Một Quan Hệ (Single-Relation)",
      name: "1. Ràng Buộc Về Miền Giá Trị (Domain Constraint)",
      shortName: "Miền Giá Trị (Domain)",
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      accentBg: "bg-blue-50 text-blue-800 border-blue-200",
      context: "KetQua(maSV, maMH, lanThi, Diem)",
      formalLogic: "∀ t ∈ KetQua : 0.0 ≤ t.Diem ≤ 10.0 ∧ t.Diem mod 0.5 = 0",
      example: "Điểm thi KetQua.Diem ∈ [0, 10] và có độ chính xác từng 0.5 điểm (0, 0.5, 1.0, ... 10.0).",
      sqlCheck: "ALTER TABLE KetQua\nADD CONSTRAINT CK_Diem CHECK (Diem >= 0.0 AND Diem <= 10.0);",
      notes: "Chỉ kiểm soát trên 1 cột đơn lẻ của 1 dòng, không so sánh với bất kỳ cột nào khác trong bảng."
    },
    inter_attr: {
      id: "inter_attr",
      group: "single",
      category: "Bối Cảnh 1 Quan Hệ",
      groupTitle: "Nhóm 1: Một Quan Hệ (Single-Relation)",
      name: "2. Ràng Buộc Liên Thuộc Tính (Inter-Attribute)",
      shortName: "Liên Thuộc Tính (Inter-Attribute)",
      icon: Table,
      color: "from-teal-600 to-emerald-600",
      accentBg: "bg-teal-50 text-teal-800 border-teal-200",
      context: "HoaDon(soHD, ngayHD, ngayXuat, triGia)",
      formalLogic: "∀ t ∈ HoaDon : t.ngayHD ≤ t.ngayXuat",
      example: "Trong bảng HoaDon: Ngày phát hành hóa đơn (ngayHD) phải trước hoặc bằng ngày xuất kho (ngayXuat).",
      sqlCheck: "ALTER TABLE HoaDon\nADD CONSTRAINT CK_NgayHD_Xuat CHECK (ngayHD <= ngayXuat);",
      notes: "So sánh logic tương quan giữa 2 hoặc nhiều cột trong cùng 1 dòng của bảng."
    },
    inter_tuple: {
      id: "inter_tuple",
      group: "single",
      category: "Bối Cảnh 1 Quan Hệ",
      groupTitle: "Nhóm 1: Một Quan Hệ (Single-Relation)",
      name: "3. Ràng Buộc Liên Bộ (Inter-Tuple Constraint)",
      shortName: "Liên Bộ (Inter-Tuple)",
      icon: KeyRound,
      color: "from-indigo-600 to-violet-600",
      accentBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
      context: "SinhVien(maSV, hotenSV, ngSinh, maKhoa)",
      formalLogic: "∀ t1, t2 ∈ SinhVien : (t1.maSV = t2.maSV ⇒ t1 = t2)",
      example: "Ràng buộc khóa chính C1: Không có hai sinh viên nào trùng mã số sinh viên (maSV duy nhất).",
      sqlCheck: "ALTER TABLE SinhVien\nADD CONSTRAINT PK_SinhVien PRIMARY KEY (maSV);",
      notes: "Ràng buộc kiểm tra tương quan giữa các dòng (bộ) khác nhau trong cùng 1 bảng."
    },
    existence: {
      id: "existence",
      group: "multi",
      category: "Bối Cảnh Nhiều Quan Hệ",
      groupTitle: "Nhóm 2: Nhiều Quan Hệ (Multi-Relation)",
      name: "4. Phụ Thuộc Tồn Tại (Existence Dependency / Foreign Key)",
      shortName: "Phụ Thuộc Tồn Tại (Khóa Ngoại)",
      icon: Link2,
      color: "from-purple-600 to-pink-600",
      accentBg: "bg-purple-50 text-purple-800 border-purple-200",
      context: "SinhVien (Bảng Con) và Khoa (Bảng Cha)",
      formalLogic: "∀ t ∈ SinhVien : ∃ k ∈ Khoa : (t.maKhoa = k.makhoa)",
      example: "Mã khoa (maKhoa) của sinh viên trong bảng SinhVien phải tồn tại trước trong bảng Khoa.",
      sqlCheck: "ALTER TABLE SinhVien\nADD CONSTRAINT FK_SV_Khoa FOREIGN KEY (maKhoa) REFERENCES Khoa(makhoa);",
      notes: "Nhận diện qua 2 dấu hiệu toán học: K1 ⊆ K2 (Khóa phức hợp) hoặc K1 ⊆ R2 (Khóa ngoại đơn)."
    },
    inter_tuple_rel: {
      id: "inter_tuple_rel",
      group: "multi",
      category: "Bối Cảnh Nhiều Quan Hệ",
      groupTitle: "Nhóm 2: Nhiều Quan Hệ (Multi-Relation)",
      name: "5. Ràng Buộc Liên Bộ, Liên Quan Hệ",
      shortName: "Liên Bộ, Liên Quan Hệ",
      icon: Layers,
      color: "from-fuchsia-600 to-rose-600",
      accentBg: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200",
      context: "HoaDon và CtietHD",
      formalLogic: "∀ hd ∈ HoaDon : ∃ ct ∈ CtietHD : (ct.soHD = hd.soHD)",
      example: "Mỗi hóa đơn phát hành trong HoaDon phải có ít nhất một mặt hàng được lập trong CtietHD.",
      sqlCheck: "-- Cài đặt bằng TRIGGER kiểm soát giao dịch:\nCREATE TRIGGER trg_HoaDon_MustHaveItem ON HoaDon\nAFTER INSERT AS ...",
      notes: "Tác dụng đối với từng nhóm các dòng phân bổ ở nhiều bảng khác nhau trong cơ sở dữ liệu."
    },
    inter_attr_rel: {
      id: "inter_attr_rel",
      group: "multi",
      category: "Bối Cảnh Nhiều Quan Hệ",
      groupTitle: "Nhóm 2: Nhiều Quan Hệ (Multi-Relation)",
      name: "6. Ràng Buộc Liên Thuộc Tính, Liên Quan Hệ",
      shortName: "Liên Thuộc Tính, Liên Quan Hệ",
      icon: Table,
      color: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-50 text-amber-800 border-amber-200",
      context: "DatHang và HoaDon",
      formalLogic: "∀ hd ∈ HoaDon, dh ∈ DatHang : (hd.soDH = dh.soDH ⇒ hd.ngayHD ≥ dh.ngayDH)",
      example: "Ngày lập hóa đơn trong HoaDon phải sau hoặc trùng ngày đặt hàng trong DatHang (ngayHD >= ngayDH).",
      sqlCheck: "-- Cài đặt bằng TRIGGER kiểm tra liên bảng:\nCREATE TRIGGER trg_CheckNgayHD_NgayDH ON HoaDon\nAFTER INSERT, UPDATE AS ...",
      notes: "So sánh giá trị của thuộc tính ở bảng này với thuộc tính ở bảng khác thông qua khóa liên kết."
    },
    aggregate: {
      id: "aggregate",
      group: "multi",
      category: "Bối Cảnh Nhiều Quan Hệ",
      groupTitle: "Nhóm 2: Nhiều Quan Hệ (Multi-Relation)",
      name: "7. Ràng Buộc Thuộc Tính Tổng Hợp (Aggregate)",
      shortName: "Thuộc Tính Tổng Hợp (Aggregate)",
      icon: Calculator,
      color: "from-emerald-600 to-cyan-700",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      context: "Khach, HoaDon và PhieuThu",
      formalLogic: "∀ k ∈ Khach : k.soTienNo = ∑(HoaDon.triGia) - ∑(PhieuThu.soTienThu)",
      example: "Số tiền nợ của khách hàng = Tổng trị giá các hóa đơn mua - Tổng số tiền các phiếu đã thanh toán.",
      sqlCheck: "-- Cài đặt bằng TRIGGER đồng bộ thuộc tính dẫn xuất:\nCREATE TRIGGER trg_SyncCongNo ON PhieuThu ...",
      notes: "Giá trị của cột là kết quả hàm tổng hợp (SUM, COUNT, AVG) được tính toán từ các bảng liên quan."
    },
    cycle: {
      id: "cycle",
      group: "multi",
      category: "Bối Cảnh Nhiều Quan Hệ",
      groupTitle: "Nhóm 2: Nhiều Quan Hệ (Multi-Relation)",
      name: "8. Ràng Buộc Do Chu Trình Lược Đồ CSDL",
      shortName: "Chu Trình Lược Đồ (Cycle)",
      icon: RotateCw,
      color: "from-rose-600 to-red-600",
      accentBg: "bg-rose-50 text-rose-800 border-rose-200",
      context: "DatHang, HoaDon, CtietHD",
      formalLogic: "π_{soHD, maHH}(CtietHD) ⊆ π_{soHD, maHH}(HoaDon ⋈ DatHang) ∧ (CtietHD.soLuongBan ≤ DatHang.soLuongDat)",
      example: "Chu trình DatHang - HoaDon - CtietHD (Chính sách không bao giờ giao vượt số lượng đã đặt).",
      sqlCheck: "-- Cài đặt TRIGGER kiểm tra khép kín chu trình\n-- Ngăn chặn giao vượt hoặc giao sai mặt hàng.",
      notes: "Xuất hiện khi đồ thị liên kết khóa ngoại giữa các lược đồ quan hệ tạo thành một chu trình khép kín."
    }
  };

  const filteredKeys = useMemo(() => {
    return Object.keys(taxonomy).filter((k) => {
      const item = taxonomy[k];
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q) ||
        item.context.toLowerCase().includes(q) ||
        item.notes.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const curr = taxonomy[selectedType] || taxonomy.domain;

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/20 p-5 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900">IntegrityTaxonomyMasterMap</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-bold text-teal-800 border border-teal-200">
                Bản Đồ 8 Phân Nhánh RBTV
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Phân loại khoa học và chi tiết 8 loại Ràng buộc toàn vẹn theo không gian ngữ cảnh (1 Bảng vs Nhiều Bảng)
            </p>
          </div>
        </div>

        {/* Live Filter Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm theo tên, ví dụ, SQL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Responsive Bento Layout: Left Selection Grid & Right Detail Panel */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Left Column (5 cols on lg, full on laptop) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Group 1: 1 Relation */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-3.5 shadow-sm">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-extrabold text-sky-950 uppercase tracking-wider">
                Nhóm 1: Bối Cảnh 1 Quan Hệ (3 Loại)
              </span>
              <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                Single-Table
              </span>
            </div>

            <div className="space-y-1.5">
              {["domain", "inter_attr", "inter_tuple"]
                .filter((k) => filteredKeys.includes(k))
                .map((k) => {
                  const item = taxonomy[k];
                  const Icon = item.icon;
                  const isSelected = selectedType === k;
                  return (
                    <button
                      key={k}
                      onClick={() => setSelectedType(k)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? "bg-white border-sky-500 shadow-md ring-2 ring-sky-400/40 text-sky-950"
                          : "bg-white/80 border-slate-200/80 text-slate-700 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white shadow-sm shrink-0`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs font-bold leading-tight truncate">
                            {item.name}
                          </span>
                          <span className="block text-[10px] text-slate-500 mt-0.5 font-mono truncate">
                            {item.context}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isSelected ? "text-sky-600 translate-x-0.5" : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Group 2: Multi Relations */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-3.5 shadow-sm">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-extrabold text-purple-950 uppercase tracking-wider">
                Nhóm 2: Bối Cảnh Nhiều Quan Hệ (5 Loại)
              </span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                Cross-Table
              </span>
            </div>

            <div className="space-y-1.5">
              {["existence", "inter_tuple_rel", "inter_attr_rel", "aggregate", "cycle"]
                .filter((k) => filteredKeys.includes(k))
                .map((k) => {
                  const item = taxonomy[k];
                  const Icon = item.icon;
                  const isSelected = selectedType === k;
                  return (
                    <button
                      key={k}
                      onClick={() => setSelectedType(k)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? "bg-white border-purple-500 shadow-md ring-2 ring-purple-400/40 text-purple-950"
                          : "bg-white/80 border-slate-200/80 text-slate-700 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white shadow-sm shrink-0`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs font-bold leading-tight truncate">
                            {item.name}
                          </span>
                          <span className="block text-[10px] text-slate-500 mt-0.5 font-mono truncate">
                            {item.context}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isSelected ? "text-purple-600 translate-x-0.5" : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Right Details Bento Panel (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-4">
          <div>
            {/* Top Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${curr.accentBg}`}>
                {curr.category}
              </span>
              <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                Bối cảnh: {curr.context}
              </span>
            </div>

            {/* Title & Icon */}
            <div className="mt-3 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${curr.color} text-white shadow-sm shrink-0`}
              >
                <curr.icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900 leading-snug">{curr.name}</h4>
            </div>

            {/* Real-world Academic Example */}
            <div className="mt-4">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Ví Dụ Điển Hình Trong Giáo Trình:
              </span>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3.5 text-xs text-indigo-950 font-medium leading-relaxed">
                {curr.example}
              </div>
            </div>

            {/* Formal Logic Predicate Notation */}
            <div className="mt-4">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Biểu Diễn Hình Thức Toán Học (Logic Vị Từ Bậc 1):
              </span>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-slate-100 shadow-md">
                <div className="font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {curr.formalLogic}
                </div>
              </div>
            </div>

            {/* DBMS SQL DDL / Trigger Implementation */}
            <div className="mt-4">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Cài Đặt Trong Hệ Quản Trị CSDL (SQL DDL / Trigger):
              </span>
              <pre className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 font-mono text-xs text-emerald-900 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {curr.sqlCheck}
              </pre>
            </div>
          </div>

          {/* Core Takeaway Note */}
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950 leading-relaxed font-medium">
            <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>💡 Ghi chú thi cử cốt lõi: </strong>
              {curr.notes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
