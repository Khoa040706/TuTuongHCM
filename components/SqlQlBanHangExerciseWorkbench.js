"use client";
import React, { useState } from "react";
import { BookOpen, Terminal, CheckCircle2, Code, Database, Sparkles, Copy, Check } from "lucide-react";

export default function SqlQlBanHangExerciseWorkbench() {
  const [selectedEx, setSelectedEx] = useState(1);
  const [copied, setCopied] = useState(false);

  const exercises = [
    {
      id: 1,
      title: "Bài 1: Tạo CSDL QLBanHang, các Bảng & Nhập liệu mẫu",
      question: "1. Tạo CSDL và tạo các bảng, nhập dữ liệu cho các bảng trong CSDL.",
      sql: `-- 1. Tạo CSDL\nCREATE DATABASE QLBanHang;\nGO\nUSE QLBanHang;\nGO\n\n-- 2. Tạo bảng KHACHHANG\nCREATE TABLE KHACHHANG (\n    makh int PRIMARY KEY,\n    tenkh nvarchar(30),\n    diachi nvarchar(50),\n    ngaysinh datetime\n);\n\n-- 3. Tạo bảng MATHANG\nCREATE TABLE MATHANG (\n    mahang int PRIMARY KEY,\n    tenhang nvarchar(30),\n    gia float,\n    soluong int\n);\n\n-- 4. Tạo bảng NHANVIEN\nCREATE TABLE NHANVIEN (\n    manv int PRIMARY KEY,\n    hoten nvarchar(30),\n    ngaysinh datetime,\n    diachi nvarchar(50)\n);\n\n-- 5. Tạo bảng DONDATHANG\nCREATE TABLE DONDATHANG (\n    sohoadon int PRIMARY KEY,\n    makh int FOREIGN KEY REFERENCES KHACHHANG(makh),\n    manv int FOREIGN KEY REFERENCES NHANVIEN(manv),\n    ngaydathang datetime,\n    ngaygiaohang datetime,\n    ngaychuyenhang datetime\n);\n\n-- 6. Tạo bảng CHITIETDATHANG\nCREATE TABLE CHITIETDATHANG (\n    sohoadon int FOREIGN KEY REFERENCES DONDATHANG(sohoadon),\n    mahang int FOREIGN KEY REFERENCES MATHANG(mahang),\n    soluong int,\n    giaban float,\n    CONSTRAINT pk_ctdh PRIMARY KEY (sohoadon, mahang)\n);`,
      explanation: "Tạo 5 bảng chuẩn hóa theo mô hình quan hệ bán hàng với đầy đủ Khóa chính, Khóa ngoại và Khóa chính phức hợp (Composite PK) trên bảng liên kết CHITIETDATHANG."
    },
    {
      id: 2,
      title: "Bài 2: Mặt hàng có giá > 10 và số lượng < 20",
      question: "2. Cho biết mã và tên của các mặt hàng có giá lớn hơn 10 và số lượng hiện có ít hơn 20.",
      sql: `SELECT mahang, tenhang\nFROM MATHANG\nWHERE gia > 10 AND soluong < 20;`,
      explanation: "Sử dụng phép chiếu SELECT trích xuất 2 thuộc tính mahang, tenhang kết hợp phép chọn WHERE với toán tử logic AND để kiểm tra đồng thời cả 2 điều kiện giá và số lượng."
    },
    {
      id: 3,
      title: "Bài 3: Khách hàng đã mua mặt hàng Áo Việt Tiến",
      question: "3. Cho biết thông tin những khách hàng nào đã mua mặt hàng áo Việt Tiến.",
      sql: `-- Cách 1: Sử dụng kết nối bảng INNER JOIN (Khuyên dùng)\nSELECT DISTINCT kh.makh, kh.tenkh, kh.diachi\nFROM KHACHHANG kh\nINNER JOIN DONDATHANG dd ON kh.makh = dd.makh\nINNER JOIN CHITIETDATHANG ct ON dd.sohoadon = ct.sohoadon\nINNER JOIN MATHANG mh ON ct.mahang = mh.mahang\nWHERE mh.tenhang = N'Áo Việt Tiến';\n\n-- Cách 2: Sử dụng truy vấn lồng IN\nSELECT * FROM KHACHHANG\nWHERE makh IN (\n    SELECT makh FROM DONDATHANG WHERE sohoadon IN (\n        SELECT sohoadon FROM CHITIETDATHANG WHERE mahang IN (\n            SELECT mahang FROM MATHANG WHERE tenhang = N'Áo Việt Tiến'\n        )\n    )\n);`,
      explanation: "Kết nối 4 bảng qua khóa ngoại để truy vết từ bảng mặt hàng ngược về bảng khách hàng. Cần thêm DISTINCT để tránh in trùng lặp tên nếu khách hàng đó đã mua nhiều lần."
    },
    {
      id: 4,
      title: "Bài 4: Mặt hàng chưa từng được đặt mua (Anti-Join)",
      question: "4. Cho biết thông tin những mặt hàng nào chưa từng được khách hàng đặt mua.",
      sql: `-- Cách 1: Sử dụng LEFT JOIN (Tối ưu hiệu năng nhất)\nSELECT mh.*\nFROM MATHANG mh\nLEFT JOIN CHITIETDATHANG ct ON mh.mahang = ct.mahang\nWHERE ct.mahang IS NULL;\n\n-- Cách 2: Sử dụng NOT EXISTS\nSELECT mh.*\nFROM MATHANG mh\nWHERE NOT EXISTS (\n    SELECT *\n    FROM CHITIETDATHANG ct\n    WHERE ct.mahang = mh.mahang\n);\n\n-- Cách 3: Sử dụng NOT IN\nSELECT *\nFROM MATHANG\nWHERE mahang NOT IN (\n    SELECT DISTINCT mahang\n    FROM CHITIETDATHANG\n    WHERE mahang IS NOT NULL\n);`,
      explanation: "Kỹ thuật Anti-Join kinh điển: Lấy tất cả mặt hàng qua LEFT JOIN, những mặt hàng chưa từng xuất hiện trong bảng chi tiết đặt hàng sẽ sinh ra giá trị NULL ở cột bên phải."
    },
    {
      id: 5,
      title: "Bài 5: Tổng số lượng bán được của mỗi mặt hàng",
      question: "5. Cho biết tổng số lượng bán được của mỗi mặt hàng.",
      sql: `SELECT mh.mahang, mh.tenhang, SUM(ct.soluong) AS TongSoLuongBan\nFROM MATHANG mh\nINNER JOIN CHITIETDATHANG ct ON mh.mahang = ct.mahang\nGROUP BY mh.mahang, mh.tenhang;`,
      explanation: "Gom nhóm theo mã và tên mặt hàng bằng GROUP BY, sau đó áp dụng hàm kết hợp SUM(soluong) để tính tổng số sản phẩm đã bán của từng mặt hàng."
    },
    {
      id: 6,
      title: "Bài 6: Ràng buộc kiểm tra ngày giao & chuyển hàng",
      question: "6. Bổ sung ràng buộc cho bảng DONDATHANG: ràng buộc kiểm tra ngày giao hàng và ngày chuyển hàng phải sau hoặc bằng với ngày đặt hàng.",
      sql: `ALTER TABLE DONDATHANG\nADD CONSTRAINT ck_ngay_dathang\nCHECK (ngaygiaohang >= ngaydathang AND ngaychuyenhang >= ngaydathang);`,
      explanation: "Sử dụng câu lệnh ALTER TABLE ... ADD CONSTRAINT ... CHECK để bổ sung ràng buộc kiểm tra tính hợp lý của dòng thời gian nghiệp vụ bán hàng."
    },
    {
      id: 7,
      title: "Bài 7: Khách hàng có cùng ngày sinh (Self-Join)",
      question: "7. Cho biết thông tin những khách hàng có cùng ngày sinh.",
      sql: `SELECT \n    kh1.makh AS MaKH_1, kh1.tenkh AS TenKH_1,\n    kh2.makh AS MaKH_2, kh2.tenkh AS TenKH_2,\n    kh1.ngaysinh AS NgaySinhChung\nFROM KHACHHANG kh1\nINNER JOIN KHACHHANG kh2 \n    ON kh1.ngaysinh = kh2.ngaysinh \n    AND kh1.makh < kh2.makh;`,
      explanation: "Kỹ thuật Tự kết nối (Self-Join) trên cùng bảng KHACHHANG. Điều kiện kh1.makh < kh2.makh giúp: 1) Loại trừ việc khách tự ghép với chính mình; 2) Loại trừ cặp trùng lặp đảo vị trí (A,B) và (B,A)."
    },
    {
      id: 8,
      title: "Bài 8: Thống kê số lượng hóa đơn của mỗi nhân viên",
      question: "8. Thống kê số lượng hóa đơn đã lập của mỗi nhân viên.",
      sql: `SELECT nv.manv, nv.hoten, COUNT(dd.sohoadon) AS SoLuongHoaDon\nFROM NHANVIEN nv\nLEFT JOIN DONDATHANG dd ON nv.manv = dd.manv\nGROUP BY nv.manv, nv.hoten;`,
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
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlQlBanHangExerciseWorkbench</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                QLBanHang Solutions Studio
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio giải 8 bài tập thực hành CSDL QLBanHang: Lời giải T-SQL tối ưu, phân tích thuật toán & mẹo tối ưu hóa
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Đã Sao Chép SQL!" : "Copy Lời Giải"}
        </button>
      </div>

      {/* 8 Exercise Navigation Tabs */}
      <div className="mt-5 grid grid-cols-4 sm:grid-cols-8 gap-1.5">
        {exercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedEx(ex.id)}
            className={`rounded-xl py-2 px-1 text-center font-mono text-xs font-bold transition-all border ${
              selectedEx === ex.id
                ? "bg-indigo-600 text-white border-indigo-700 shadow-md"
                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50"
            }`}
          >
            Bài {ex.id}
          </button>
        ))}
      </div>

      {/* Exercise Content Box */}
      <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
        <h4 className="text-sm font-bold text-indigo-950">{curr.title}</h4>
        <p className="mt-1 text-xs text-indigo-900 font-medium">{curr.question}</p>
      </div>

      {/* SQL Script Viewer */}
      <div className="mt-4 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-xs font-bold text-gray-300">Lời Giải T-SQL Chuẩn Mực</span>
          </div>
          <span className="font-mono text-[10px] text-emerald-400">EXERCISE {selectedEx} / 8</span>
        </div>
        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {curr.sql}
        </pre>
      </div>

      {/* Explanation Box */}
      <div className="mt-4 rounded-xl bg-white p-4 border border-indigo-200 shadow-sm text-xs text-gray-700 leading-relaxed">
        <strong className="text-indigo-950">💡 Phân tích giải thuật & Kỹ thuật lập trình: </strong>
        {curr.explanation}
      </div>
    </div>
  );
}
