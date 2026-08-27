"use client";

import React, { useState } from "react";
import { Database, GraduationCap, ShoppingBag, Table, Layers, CheckCircle2, Info, ArrowRight } from "lucide-react";

export default function DatabaseCh4SampleDatabasesStudio() {
  const [activeDb, setActiveDb] = useState("hssv"); // 'hssv' | 'qlhh'

  const hssvTables = [
    {
      name: "SINH_VIEN",
      pk: "maSV",
      fk: "maKhoa -> KHOA(makhoa)",
      desc: "Lưu thông tin sinh viên",
      attrs: ["maSV (PK)", "hotenSV", "nam (boolean: True=Nam, False=Nữ)", "ngSinh", "maKhoa (FK)"],
      sample: [
        { c1: "SV01", c2: "Nguyễn Văn An", c3: "True (Nam)", c4: "2003-05-12", c5: "CNTT" },
        { c2: "Trần Thị Mai", c1: "SV02", c3: "False (Nữ)", c4: "2003-10-25", c5: "TOAN" }
      ]
    },
    {
      name: "KHOA",
      pk: "makhoa",
      fk: "Không có",
      desc: "Lưu thông tin các khoa đào tạo",
      attrs: ["makhoa (PK)", "tenkhoa", "soCB (Tổng số cán bộ giảng dạy)"],
      sample: [
        { c1: "CNTT", c2: "Công Nghệ Thông Tin", c3: "45", c4: "-", c5: "-" },
        { c1: "TOAN", c2: "Toán - Tin Học", c3: "30", c4: "-", c5: "-" }
      ]
    },
    {
      name: "MON_HOC",
      pk: "maMH",
      fk: "Không có",
      desc: "Lưu danh mục môn học",
      attrs: ["maMH (PK)", "tenMH", "soTietLT", "soTietTH"],
      sample: [
        { c1: "CSDL", c2: "Cơ Sở Dữ Liệu", c3: "30 tiết LT", c4: "30 tiết TH", c5: "-" },
        { c1: "CTDL", c2: "Cấu Trúc Dữ Liệu", c3: "45 tiết LT", c4: "0 tiết TH", c5: "-" }
      ]
    },
    {
      name: "KET_QUA",
      pk: "(maSV, maMH, lanThi)",
      fk: "maSV -> SINH_VIEN, maMH -> MON_HOC",
      desc: "Kết quả thi từng lần của sinh viên",
      attrs: ["maSV (FK)", "maMH (FK)", "lanThi (1 hoặc 2)", "diem (0.0 - 10.0)"],
      sample: [
        { c1: "SV01", c2: "CSDL", c3: "Lần 1", c4: "8.5 điểm", c5: "Đạt" },
        { c1: "SV02", c2: "CSDL", c3: "Lần 1", c4: "4.0 điểm", c5: "Thi lại lần 2" }
      ]
    }
  ];

  const qlhhTables = [
    {
      name: "KHACH",
      pk: "maKH",
      desc: "Thông tin khách hàng và công nợ tài chính",
      attrs: ["maKH (PK)", "tenKH", "diachiKH", "dienThoai", "congNo (>0: khách nợ, <0: công ty nợ)"],
      note: "Quy tắc: congNo > 0 nghĩa là khách hàng nợ công ty, ngược lại congNo < 0 là công ty nợ khách hàng."
    },
    {
      name: "HANG_HOA",
      pk: "maHH",
      desc: "Danh mục các mặt hàng kinh doanh",
      attrs: ["maHH (PK)", "tenHH", "dvTinh (Cái, Thùng, Kg...)"],
      note: "Quản lý mã hàng hóa chuẩn trong toàn công ty."
    },
    {
      name: "DAT_HANG",
      pk: "(soDH, maHH)",
      desc: "Chi tiết yêu cầu đặt hàng của khách",
      attrs: ["soDH (PK)", "maHH (PK, FK)", "soLuongDat", "ngayDH", "maKH (FK)"],
      note: "Một đơn đặt hàng có thể gồm nhiều mặt hàng khác nhau."
    },
    {
      name: "HOA_DON",
      pk: "soHD",
      desc: "Hóa đơn bán hàng phát hành cho khách",
      attrs: ["soHD (PK)", "ngayHD", "soDH (FK)", "trigiaHD", "ngayXuat"],
      note: "QUY TẮC VÀNG: Mỗi đơn đặt hàng (soDH) chỉ được giải quyết trong 1 hóa đơn duy nhất. Không bao giờ giao vượt số lượng đặt!"
    },
    {
      name: "CTIET_HD",
      pk: "(soHD, maHH)",
      desc: "Chi tiết mặt hàng và số lượng bán thực tế",
      attrs: ["soHD (PK, FK)", "maHH (PK, FK)", "giaBan", "soLuongBan"],
      note: "Ghi nhận số lượng thực tế giao (soLuongBan <= soLuongDat)."
    },
    {
      name: "PHIEU_THU",
      pk: "soPT",
      desc: "Phiếu thu tiền từ khách hàng",
      attrs: ["soPT (PK)", "ngayPT", "maKH (FK)", "soTien"],
      note: "Khách hàng có thể trả tiền không theo hóa đơn nào, hoặc trả trước khi nhận hàng (tiền đặt cọc)."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">DatabaseCh4SampleDatabasesStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Lược Đồ CSDL Mẫu Chuẩn
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá cấu trúc thực thể, khóa chính, khóa ngoại và các quy tắc nghiệp vụ của 2 CSDL mẫu kinh điển
            </p>
          </div>
        </div>

        {/* Database Switcher Tabs */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setActiveDb("hssv")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeDb === "hssv" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            CSDL HSSINHVIEN (4 Bảng)
          </button>
          <button
            onClick={() => setActiveDb("qlhh")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeDb === "qlhh" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            CSDL QLHANGHOA (6 Bảng)
          </button>
        </div>
      </div>

      {/* Database Details Content */}
      {activeDb === "hssv" ? (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-3.5 text-xs text-blue-950 font-medium leading-relaxed">
            <strong>Mục đích hệ thống:</strong> Quản lý hồ sơ đào tạo, danh mục khoa, môn học và lịch sử kết quả thi cử của sinh viên qua các lần thi.
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {hssvTables.map((t) => (
              <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-mono text-sm font-bold text-indigo-700">{t.name}</span>
                  <span className="font-mono text-[11px] text-gray-500 font-medium">PK: {t.pk}</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">{t.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t.attrs.map((attr, idx) => (
                    <span
                      key={idx}
                      className={`font-mono text-[11px] px-2 py-0.5 rounded border ${
                        attr.includes("PK")
                          ? "bg-amber-50 text-amber-900 border-amber-300 font-bold"
                          : attr.includes("FK")
                          ? "bg-purple-50 text-purple-900 border-purple-300"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-950 font-medium leading-relaxed">
            <strong>Mục đích hệ thống:</strong> Quản lý quy trình bán hàng, đơn đặt hàng, xuất hóa đơn giao hàng, thanh toán công nợ và phiếu thu tiền cọc của công ty thương mại.
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qlhhTables.map((t) => (
              <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-mono text-sm font-bold text-indigo-700">{t.name}</span>
                    <span className="font-mono text-[10px] text-gray-500 font-bold">PK: {t.pk}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{t.desc}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {t.attrs.map((attr, idx) => (
                      <span
                        key={idx}
                        className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${
                          attr.includes("PK")
                            ? "bg-amber-50 text-amber-900 border-amber-300 font-bold"
                            : attr.includes("FK")
                            ? "bg-purple-50 text-purple-900 border-purple-300"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                        }`}
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-indigo-50/60 p-2 text-[11px] text-indigo-950 border border-indigo-100">
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
