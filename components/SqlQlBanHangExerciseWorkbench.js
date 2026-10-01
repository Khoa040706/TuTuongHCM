"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Terminal,
  CheckCircle2,
  Code,
  Database,
  Sparkles,
  Copy,
  Check,
  Table,
  Layers,
  Info,
  ChevronDown,
  ChevronUp,
  Tag
} from "lucide-react";

export default function SqlQlBanHangExerciseWorkbench() {
  const [selectedEx, setSelectedEx] = useState(1);
  const [copied, setCopied] = useState(false);
  const [showSchema, setShowSchema] = useState(false);

  const schemaTables = [
    {
      name: "KHACHHANG",
      pk: "makh",
      fks: [],
      cols: ["makh (PK, int)", "tenkh (nvarchar)", "diachi (nvarchar)", "ngaysinh (datetime)"]
    },
    {
      name: "MATHANG",
      pk: "mahang",
      fks: [],
      cols: ["mahang (PK, int)", "tenhang (nvarchar)", "gia (float)", "soluong (int)"]
    },
    {
      name: "NHANVIEN",
      pk: "manv",
      fks: [],
      cols: ["manv (PK, int)", "hoten (nvarchar)", "ngaysinh (datetime)", "diachi (nvarchar)"]
    },
    {
      name: "DONDATHANG",
      pk: "sohoadon",
      fks: ["makh -> KHACHHANG", "manv -> NHANVIEN"],
      cols: ["sohoadon (PK, int)", "makh (FK)", "manv (FK)", "ngaydathang", "ngaygiaohang", "ngaychuyenhang"]
    },
    {
      name: "CHITIETDATHANG",
      pk: "(sohoadon, mahang) - Khóa kép",
      fks: ["sohoadon -> DONDATHANG", "mahang -> MATHANG"],
      cols: ["sohoadon (PK, FK)", "mahang (PK, FK)", "soluong (int)", "giaban (float)"]
    }
  ];

  const exercises = [
    {
      id: 1,
      shortTag: "Tạo Bảng DDL",
      level: "Cơ bản",
      levelColor: "bg-blue-100 text-blue-800",
      activeTables: ["KHACHHANG", "MATHANG", "NHANVIEN", "DONDATHANG", "CHITIETDATHANG"],
      title: "Bài 1: Tạo CSDL QLBanHang, các Bảng & Ràng buộc toàn vẹn",
      question: "1. Tạo CSDL và tạo các bảng, nhập dữ liệu cho các bảng trong CSDL.",
      sql: `-- 1. Tạo CSDL
CREATE DATABASE QLBanHang;
GO
USE QLBanHang;
GO

-- 2. Tạo bảng KHACHHANG
CREATE TABLE KHACHHANG (
    makh int PRIMARY KEY,
    tenkh nvarchar(30),
    diachi nvarchar(50),
    ngaysinh datetime
);

-- 3. Tạo bảng MATHANG
CREATE TABLE MATHANG (
    mahang int PRIMARY KEY,
    tenhang nvarchar(30),
    gia float,
    soluong int
);

-- 4. Tạo bảng NHANVIEN
CREATE TABLE NHANVIEN (
    manv int PRIMARY KEY,
    hoten nvarchar(30),
    ngaysinh datetime,
    diachi nvarchar(50)
);

-- 5. Tạo bảng DONDATHANG
CREATE TABLE DONDATHANG (
    sohoadon int PRIMARY KEY,
    makh int FOREIGN KEY REFERENCES KHACHHANG(makh),
    manv int FOREIGN KEY REFERENCES NHANVIEN(manv),
    ngaydathang datetime,
    ngaygiaohang datetime,
    ngaychuyenhang datetime
);

-- 6. Tạo bảng CHITIETDATHANG (Khóa chính phức hợp)
CREATE TABLE CHITIETDATHANG (
    sohoadon int FOREIGN KEY REFERENCES DONDATHANG(sohoadon),
    mahang int FOREIGN KEY REFERENCES MATHANG(mahang),
    soluong int,
    giaban float,
    CONSTRAINT pk_ctdh PRIMARY KEY (sohoadon, mahang)
);`,
      explanation: "Tạo 5 bảng chuẩn hóa theo mô hình quan hệ bán hàng với đầy đủ Khóa chính, Khóa ngoại và Khóa chính phức hợp (Composite PK) trên bảng liên kết CHITIETDATHANG."
    },
    {
      id: 2,
      shortTag: "WHERE & AND",
      level: "Cơ bản",
      levelColor: "bg-blue-100 text-blue-800",
      activeTables: ["MATHANG"],
      title: "Bài 2: Mặt hàng có giá > 10 và số lượng < 20",
      question: "2. Cho biết mã và tên của các mặt hàng có giá lớn hơn 10 và số lượng hiện có ít hơn 20.",
      sql: `SELECT mahang, tenhang
FROM MATHANG
WHERE gia > 10 AND soluong < 20;`,
      explanation: "Sử dụng phép chiếu SELECT trích xuất 2 thuộc tính mahang, tenhang kết hợp phép chọn WHERE với toán tử logic AND để kiểm tra đồng thời cả 2 điều kiện giá và số lượng."
    },
    {
      id: 3,
      shortTag: "4-Table JOIN",
      level: "Trung bình",
      levelColor: "bg-amber-100 text-amber-800",
      activeTables: ["KHACHHANG", "DONDATHANG", "CHITIETDATHANG", "MATHANG"],
      title: "Bài 3: Khách hàng đã mua mặt hàng Áo Việt Tiến",
      question: "3. Cho biết thông tin những khách hàng nào đã mua mặt hàng áo Việt Tiến.",
      sql: `-- Cách 1: Sử dụng kết nối bảng INNER JOIN (Khuyên dùng)
SELECT DISTINCT kh.makh, kh.tenkh, kh.diachi
FROM KHACHHANG kh
INNER JOIN DONDATHANG dd ON kh.makh = dd.makh
INNER JOIN CHITIETDATHANG ct ON dd.sohoadon = ct.sohoadon
INNER JOIN MATHANG mh ON ct.mahang = mh.mahang
WHERE mh.tenhang = N'Áo Việt Tiến';

-- Cách 2: Sử dụng truy vấn lồng IN
SELECT * FROM KHACHHANG
WHERE makh IN (
    SELECT makh FROM DONDATHANG WHERE sohoadon IN (
        SELECT sohoadon FROM CHITIETDATHANG WHERE mahang IN (
            SELECT mahang FROM MATHANG WHERE tenhang = N'Áo Việt Tiến'
        )
    )
);`,
      explanation: "Kết nối 4 bảng qua khóa ngoại để truy vết từ bảng mặt hàng ngược về bảng khách hàng. Cần thêm DISTINCT để tránh in trùng lặp tên nếu khách hàng đó đã mua nhiều lần."
    },
    {
      id: 4,
      shortTag: "Anti-Join / NULL",
      level: "Bẫy thi",
      levelColor: "bg-rose-100 text-rose-800",
      activeTables: ["MATHANG", "CHITIETDATHANG"],
      title: "Bài 4: Mặt hàng chưa từng được đặt mua (Anti-Join)",
      question: "4. Cho biết thông tin những mặt hàng nào chưa từng được khách hàng đặt mua.",
      sql: `-- Cách 1: Sử dụng LEFT JOIN (Tối ưu hiệu năng nhất)
SELECT mh.*
FROM MATHANG mh
LEFT JOIN CHITIETDATHANG ct ON mh.mahang = ct.mahang
WHERE ct.mahang IS NULL;

-- Cách 2: Sử dụng NOT EXISTS
SELECT mh.*
FROM MATHANG mh
WHERE NOT EXISTS (
    SELECT *
    FROM CHITIETDATHANG ct
    WHERE ct.mahang = mh.mahang
);

-- Cách 3: Sử dụng NOT IN
SELECT *
FROM MATHANG
WHERE mahang NOT IN (
    SELECT DISTINCT mahang
    FROM CHITIETDATHANG
    WHERE mahang IS NOT NULL
);`,
      explanation: "Kỹ thuật Anti-Join kinh điển: Lấy tất cả mặt hàng qua LEFT JOIN, những mặt hàng chưa từng xuất hiện trong bảng chi tiết đặt hàng sẽ sinh ra giá trị NULL ở cột bên phải."
    },
    {
      id: 5,
      shortTag: "GROUP BY & SUM",
      level: "Trung bình",
      levelColor: "bg-amber-100 text-amber-800",
      activeTables: ["MATHANG", "CHITIETDATHANG"],
      title: "Bài 5: Tổng số lượng bán được của mỗi mặt hàng",
      question: "5. Cho biết tổng số lượng bán được của mỗi mặt hàng.",
      sql: `SELECT mh.mahang, mh.tenhang, SUM(ct.soluong) AS TongSoLuongBan
FROM MATHANG mh
INNER JOIN CHITIETDATHANG ct ON mh.mahang = ct.mahang
GROUP BY mh.mahang, mh.tenhang;`,
      explanation: "Gom nhóm theo mã và tên mặt hàng bằng GROUP BY, sau đó áp dụng hàm kết hợp SUM(soluong) để tính tổng số sản phẩm đã bán của từng mặt hàng."
    },
    {
      id: 6,
      shortTag: "ALTER CHECK",
      level: "Cơ bản",
      levelColor: "bg-blue-100 text-blue-800",
      activeTables: ["DONDATHANG"],
      title: "Bài 6: Ràng buộc kiểm tra ngày giao & chuyển hàng",
      question: "6. Bổ sung ràng buộc cho bảng DONDATHANG: kiểm tra ngày giao hàng và ngày chuyển hàng phải sau hoặc bằng với ngày đặt hàng.",
      sql: `ALTER TABLE DONDATHANG
ADD CONSTRAINT ck_ngay_dathang
CHECK (ngaygiaohang >= ngaydathang AND ngaychuyenhang >= ngaydathang);`,
      explanation: "Sử dụng câu lệnh ALTER TABLE ... ADD CONSTRAINT ... CHECK để bổ sung ràng buộc kiểm tra tính hợp lý của dòng thời gian nghiệp vụ bán hàng."
    },
    {
      id: 7,
      shortTag: "Self-Join",
      level: "Bẫy thi",
      levelColor: "bg-rose-100 text-rose-800",
      activeTables: ["KHACHHANG"],
      title: "Bài 7: Khách hàng có cùng ngày sinh (Tự kết nối Self-Join)",
      question: "7. Cho biết thông tin những khách hàng có cùng ngày sinh.",
      sql: `SELECT 
    kh1.makh AS MaKH_1, kh1.tenkh AS TenKH_1,
    kh2.makh AS MaKH_2, kh2.tenkh AS TenKH_2,
    kh1.ngaysinh AS NgaySinhChung
FROM KHACHHANG kh1
INNER JOIN KHACHHANG kh2 
    ON kh1.ngaysinh = kh2.ngaysinh 
    AND kh1.makh < kh2.makh;`,
      explanation: "Kỹ thuật Tự kết nối (Self-Join) trên cùng bảng KHACHHANG. Điều kiện kh1.makh < kh2.makh giúp: 1) Loại trừ việc khách tự ghép với chính mình; 2) Loại trừ cặp trùng lặp đảo vị trí (A,B) và (B,A)."
    },
    {
      id: 8,
      shortTag: "LEFT JOIN COUNT",
      level: "Nâng cao",
      levelColor: "bg-emerald-100 text-emerald-800",
      activeTables: ["NHANVIEN", "DONDATHANG"],
      title: "Bài 8: Thống kê số lượng hóa đơn của mỗi nhân viên",
      question: "8. Thống kê số lượng hóa đơn đã lập của mỗi nhân viên.",
      sql: `SELECT nv.manv, nv.hoten, COUNT(dd.sohoadon) AS SoLuongHoaDon
FROM NHANVIEN nv
LEFT JOIN DONDATHANG dd ON nv.manv = dd.manv
GROUP BY nv.manv, nv.hoten;`,
      explanation: "Sử dụng LEFT JOIN kết hợp COUNT(dd.sohoadon) để thống kê chính xác: Nhân viên nào chưa lập hóa đơn nào vẫn hiển thị với kết quả là 0 thay vì bị biến mất như khi dùng INNER JOIN!"
    }
  ];

  const curr = exercises[selectedEx - 1];

  const handleCopy = () => {
    navigator.clipboard.writeText(curr.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25 shrink-0">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                QLBanHang Solutions Studio
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200 font-mono">
                8 Bài Tập Trọng Tâm
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio giải trọn bộ 8 bài tập CSDL QLBanHang: T-SQL chuẩn mực, đối chiếu lược đồ và phân tích bẫy thi
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSchema(!showSchema)}
            className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-white px-3.5 py-2 text-xs font-bold text-indigo-800 hover:bg-indigo-50 transition-all shadow-xs"
          >
            <Database className="h-3.5 w-3.5 text-indigo-600" />
            <span>Lược đồ QLBanHang</span>
            {showSchema ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm active:scale-95"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Đã Sao Chép!" : "Copy SQL"}
          </button>
        </div>
      </div>

      {/* Collapsible Live Schema Inspector */}
      {showSchema && (
        <div className="mt-4 p-4 rounded-2xl bg-white border border-indigo-200 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-950">
              <Layers className="h-4 w-4 text-indigo-600" />
              LƯỢC ĐỒ 5 BẢNG CSDL QUAN HỆ QLBANHANG:
            </div>
            <span className="text-[11px] text-gray-500 font-mono">Bảng màu tím nhạt là bảng tham gia bài hiện tại</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2.5 text-xs font-mono">
            {schemaTables.map((tbl) => {
              const isActiveInEx = curr.activeTables.includes(tbl.name);
              return (
                <div
                  key={tbl.name}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isActiveInEx
                      ? "bg-indigo-50/90 border-indigo-400 ring-1 ring-indigo-400/40 text-indigo-950 shadow-xs"
                      : "bg-gray-50 border-gray-200 text-gray-600"
                  }`}
                >
                  <div className="font-bold text-[11px] flex items-center justify-between mb-1">
                    <span>{tbl.name}</span>
                    {isActiveInEx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
                    )}
                  </div>
                  <div className="space-y-0.5 text-[10px] text-gray-500">
                    <div>PK: <span className="text-amber-700 font-semibold">{tbl.pk}</span></div>
                    {tbl.fks.length > 0 && (
                      <div className="text-blue-700 truncate" title={tbl.fks.join(", ")}>
                        FK: {tbl.fks[0]}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8 Exercise Navigation Tabs: Balanced 2 Rows x 4 Cols (Never Cramped on Laptop) */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
        {exercises.map((ex) => {
          const isSelected = selectedEx === ex.id;
          return (
            <button
              key={ex.id}
              onClick={() => setSelectedEx(ex.id)}
              className={`rounded-2xl p-2.5 sm:p-3 text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-700 shadow-md ring-2 ring-indigo-400/30"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50/70 hover:border-indigo-300"
              }`}
            >
              <div className="flex items-center justify-between gap-1 w-full mb-1">
                <span className={`font-mono text-xs font-bold ${isSelected ? "text-indigo-100" : "text-indigo-900"}`}>
                  Bài {ex.id}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-sans font-semibold ${
                  isSelected ? "bg-indigo-500 text-white" : ex.levelColor
                }`}>
                  {ex.level}
                </span>
              </div>
              <div className={`text-[11px] font-mono truncate w-full ${
                isSelected ? "text-indigo-100" : "text-gray-500"
              }`}>
                {ex.shortTag}
              </div>
            </button>
          );
        })}
      </div>

      {/* Exercise Question Box */}
      <div className="mt-5 rounded-2xl border border-indigo-200/80 bg-white p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <Tag className="h-4 w-4 text-indigo-600" />
          <h4 className="text-sm font-bold text-indigo-950">{curr.title}</h4>
        </div>
        <p className="text-xs text-gray-700 font-medium leading-relaxed pl-6">
          {curr.question}
        </p>
      </div>

      {/* SQL Script Viewer Terminal */}
      <div className="mt-4 rounded-2xl border border-gray-800 bg-gray-950 p-4 sm:p-5 text-white shadow-lg overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-xs font-bold text-gray-300">Lời Giải T-SQL Chuẩn Mực</span>
          </div>
          <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
            BÀI {selectedEx} / 8 • T-SQL 2000/2023
          </span>
        </div>
        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre max-w-full thin-scrollbar py-1">
          {curr.sql}
        </pre>
      </div>

      {/* Explanation Box */}
      <div className="mt-4 rounded-2xl bg-white p-4 sm:p-5 border border-indigo-200/90 shadow-xs text-xs text-gray-700 leading-relaxed flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <strong className="text-indigo-950 font-semibold">Phân tích giải thuật & Kỹ thuật lập trình: </strong>
          <span className="text-gray-700">{curr.explanation}</span>
        </div>
      </div>
    </div>
  );
}
