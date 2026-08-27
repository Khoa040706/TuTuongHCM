"use client";

import React, { useState } from "react";
import { GitBranch, Table, Layers, CheckCircle2, ChevronRight, Sparkles, Search } from "lucide-react";

export default function IntegrityTaxonomyMasterMap() {
  const [selectedType, setSelectedType] = useState("domain");

  const taxonomy = {
    domain: {
      category: "Bối Cảnh 1 Quan Hệ",
      name: "1. RBTV Về Miền Giá Trị (Domain Constraint)",
      example: "Điểm thi KetQua.Diem ∈ [0, 10] và có độ chính xác 0.5 điểm.",
      context: "KetQua",
      sqlCheck: "CHECK (Diem >= 0.0 AND Diem <= 10.0)",
      notes: "Chỉ kiểm tra trên 1 cột đơn lẻ của 1 dòng, không so sánh với cột khác."
    },
    inter_attr: {
      category: "Bối Cảnh 1 Quan Hệ",
      name: "2. RBTV Liên Thuộc Tính (Inter-Attribute Constraint)",
      example: "Trong HoaDon: Ngày phát hành hóa đơn phải trước hoặc bằng ngày xuất kho (ngayHD <= ngayXuat).",
      context: "HoaDon",
      sqlCheck: "CHECK (ngayHD <= ngayXuat)",
      notes: "So sánh logic giữa 2 hoặc nhiều cột trong cùng 1 bảng."
    },
    inter_tuple: {
      category: "Bối Cảnh 1 Quan Hệ",
      name: "3. RBTV Liên Bộ (Inter-Tuple Constraint)",
      example: "Ràng buộc khóa chính C1: Không có hai sinh viên nào trùng mã số sinh viên.",
      context: "SinhVien",
      sqlCheck: "PRIMARY KEY (maSV) hoặc UNIQUE (maSV)",
      notes: "Ràng buộc so sánh giữa các dòng khác nhau trong cùng 1 bảng."
    },
    existence: {
      category: "Bối Cảnh Nhiều Quan Hệ",
      name: "4. RBTV Phụ Thuộc Tồn Tại (Existence Dependency / Foreign Key)",
      example: "Mã khoa (maKhoa) của sinh viên trong bảng SinhVien phải tồn tại trong bảng Khoa.",
      context: "SinhVien (Con) và Khoa (Cha)",
      sqlCheck: "FOREIGN KEY (maKhoa) REFERENCES KHOA(makhoa)",
      notes: "Nhận diện qua 2 dấu hiệu: K1 ⊆ K2 (Khóa phức hợp) hoặc K1 ⊆ R2 (Khóa ngoại đơn)."
    },
    inter_tuple_rel: {
      category: "Bối Cảnh Nhiều Quan Hệ",
      name: "5. RBTV Liên Bộ, Liên Quan Hệ",
      example: "Mỗi hóa đơn bán hàng trong HoaDon phải có ít nhất một mặt hàng trong CtietHD.",
      context: "HoaDon và CtietHD",
      sqlCheck: "Cài đặt bằng TRIGGER AFTER INSERT trên HoaDon/CtietHD",
      notes: "Tác dụng đối với từng nhóm các bộ của nhiều bảng khác nhau."
    },
    inter_attr_rel: {
      category: "Bối Cảnh Nhiều Quan Hệ",
      name: "6. RBTV Liên Thuộc Tính, Liên Quan Hệ",
      example: "Ngày lập hóa đơn trong HoaDon phải sau ngày đặt hàng trong DatHang (ngayHD >= ngayDH).",
      context: "DatHang và HoaDon",
      sqlCheck: "Cài đặt bằng TRIGGER kiểm tra liên bảng",
      notes: "So sánh thuộc tính ở 2 bảng khác nhau."
    },
    aggregate: {
      category: "Bối Cảnh Nhiều Quan Hệ",
      name: "7. RBTV Thuộc Tính Tổng Hợp (Aggregate Attribute)",
      example: "Số tiền công nợ của khách hàng = Tổng trị giá các hóa đơn bán - Tổng số tiền đã thu.",
      context: "Khach, HoaDon và PhieuThu",
      sqlCheck: "Cài đặt bằng TRIGGER đồng bộ công nợ tự động",
      notes: "Giá trị của cột được tính toán tổng hợp từ các bảng khác."
    },
    cycle: {
      category: "Bối Cảnh Nhiều Quan Hệ",
      name: "8. RBTV Do Chu Trình Trong Đồ Thị Lược Đồ CSDL",
      example: "Chu trình khép kín giữa DatHang - HoaDon - CtietHD (Chính sách không giao vượt số lượng đặt).",
      context: "DatHang, HoaDon, CtietHD",
      sqlCheck: "Cài đặt bằng TRIGGER kiểm tra số lượng giao <= số lượng đặt",
      notes: "Xuất hiện khi đồ thị biểu diễn CSDL tạo thành một chu trình khép kín."
    }
  };

  const curr = taxonomy[selectedType];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">IntegrityTaxonomyMasterMap</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Sơ Đồ Phân Loại 8 Loại RBTV
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bản đồ tư duy toàn diện phân loại 8 loại Ràng buộc toàn vẹn trong hệ thống cơ sở dữ liệu quan hệ
            </p>
          </div>
        </div>
      </div>

      {/* 2-Column Master Layout */}
      <div className="mt-5 grid gap-5 lg:grid-cols-12">
        {/* Left 8-Item Tree Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Danh Mục 8 Phân Nhánh RBTV:
          </div>

          {/* Group 1: 1 Relation */}
          <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-2 space-y-1">
            <span className="text-[10px] font-bold text-sky-900 uppercase px-2 block">
              Nhóm 1: Bối Cảnh 1 Quan Hệ (3 Loại)
            </span>
            {["domain", "inter_attr", "inter_tuple"].map((k) => (
              <button
                key={k}
                onClick={() => setSelectedType(k)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs font-mono font-bold transition-all ${
                  selectedType === k
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-sky-100/70"
                }`}
              >
                <span className="truncate">{taxonomy[k].name.split(". ")[1]}</span>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
              </button>
            ))}
          </div>

          {/* Group 2: Multi Relations */}
          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-2 space-y-1 mt-3">
            <span className="text-[10px] font-bold text-purple-900 uppercase px-2 block">
              Nhóm 2: Bối Cảnh Nhiều Quan Hệ (5 Loại)
            </span>
            {["existence", "inter_tuple_rel", "inter_attr_rel", "aggregate", "cycle"].map((k) => (
              <button
                key={k}
                onClick={() => setSelectedType(k)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs font-mono font-bold transition-all ${
                  selectedType === k
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-purple-100/70"
                }`}
              >
                <span className="truncate">{taxonomy[k].name.split(". ")[1]}</span>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Details Card (7 cols) */}
        <div className="lg:col-span-7 rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">{curr.category}</span>
              <span className="font-mono text-[10px] text-gray-500 font-bold">Bối cảnh: {curr.context}</span>
            </div>

            <h4 className="text-sm font-bold text-gray-900 mt-2">{curr.name}</h4>

            <div className="mt-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ví dụ điển hình trong giáo trình:</span>
              <p className="mt-1 text-xs text-indigo-950 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 font-semibold leading-relaxed">
                {curr.example}
              </p>
            </div>

            <div className="mt-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cách cài đặt trong Hệ Quản Trị CSDL:</span>
              <pre className="mt-1 font-mono text-xs text-emerald-800 bg-emerald-50/60 p-2.5 rounded border border-emerald-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {curr.sqlCheck}
              </pre>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-700 border border-gray-200 leading-relaxed font-medium">
            <strong>💡 Ghi chú cốt lõi: </strong>{curr.notes}
          </div>
        </div>
      </div>
    </div>
  );
}
