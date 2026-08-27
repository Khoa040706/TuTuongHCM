"use client";
import React, { useState } from "react";
import { ShieldAlert, Play, CheckCircle, RefreshCw, Terminal, AlertTriangle, Key, Link2, CheckSquare, Sparkles } from "lucide-react";

export default function SqlConstraintViolationSandbox() {
  const [activeTab, setActiveTab] = useState("pk");
  const [executionState, setExecutionState] = useState("idle"); // "idle", "error", "fixed"

  const labs = {
    pk: {
      name: "PRIMARY KEY (Khóa chính)",
      icon: Key,
      table: "PhongBan (maphong INT PRIMARY KEY, tenphong NVARCHAR(30))",
      existingData: [
        { maphong: 1, tenphong: "Phòng Kế toán" },
        { maphong: 2, tenphong: "Phòng Nhân sự" }
      ],
      violationQuery: "INSERT INTO PhongBan (maphong, tenphong)\nVALUES (1, N'Phòng Kỹ thuật');",
      fixedQuery: "INSERT INTO PhongBan (maphong, tenphong)\nVALUES (3, N'Phòng Kỹ thuật');",
      errorOutput: `Msg 2627, Level 14, State 1, Line 1
Violation of PRIMARY KEY constraint 'pk_phongban'.
Cannot insert duplicate key in object 'dbo.PhongBan'. The duplicate key value is (1).
The statement has been terminated.`,
      successOutput: `(1 row affected)
Command(s) completed successfully.
-> Bản ghi đã được chèn vào bảng PhongBan với maphong = 3.`,
      explanation: "Khóa chính (PRIMARY KEY) bắt buộc phải thỏa mãn tính DUY NHẤT (Uniqueness) và KHÔNG ĐƯỢC PHÉP NULL. Do maphong = 1 đã tồn tại trong CSDL, hệ quản trị SQL Server lập tức kích hoạt cơ chế chặn để bảo vệ toàn vẹn thực thể."
    },
    unique: {
      name: "UNIQUE (Khóa duy nhất)",
      icon: CheckSquare,
      table: "KhachHang (makh INT PK, tenkh NVARCHAR(30), sodt CHAR(10) UNIQUE)",
      existingData: [
        { makh: 101, tenkh: "Nguyễn Văn A", sodt: "0901234567" },
        { makh: 102, tenkh: "Trần Thị B", sodt: "0918889999" }
      ],
      violationQuery: "INSERT INTO KhachHang (makh, tenkh, sodt)\nVALUES (103, N'Lê Văn C', '0901234567');",
      fixedQuery: "INSERT INTO KhachHang (makh, tenkh, sodt)\nVALUES (103, N'Lê Văn C', '0987654321');",
      errorOutput: `Msg 2627, Level 14, State 2, Line 1
Violation of UNIQUE KEY constraint 'uq_khachhang_sodt'.
Cannot insert duplicate key in object 'dbo.KhachHang'. The duplicate key value is (0901234567).
The statement has been terminated.`,
      successOutput: `(1 row affected)
Command(s) completed successfully.
-> Khách hàng mới được thêm thành công với số điện thoại duy nhất 0987654321.`,
      explanation: "Ràng buộc UNIQUE đảm bảo không có 2 hàng nào có cùng giá trị trong cột sodt. Tuy nhiên khác với PRIMARY KEY, UNIQUE cho phép giá trị NULL (trong SQL Server chấp nhận tối đa 1 giá trị NULL đối với ràng buộc UNIQUE)."
    },
    fk: {
      name: "FOREIGN KEY (Khóa ngoại)",
      icon: Link2,
      table: "NhanVien (manv CHAR(5) PK, tennv NVARCHAR(30), phong INT REFERENCES PhongBan(maphong))",
      existingData: [
        { manv: "NV01", tennv: "Nguyễn Thị Mai", phong: 1 },
        { manv: "NV02", tennv: "Phạm Quốc Dũng", phong: 2 }
      ],
      violationQuery: "INSERT INTO NhanVien (manv, tennv, phong)\nVALUES ('NV03', N'Hoàng Minh Trí', 99);",
      fixedQuery: "INSERT INTO NhanVien (manv, tennv, phong)\nVALUES ('NV03', N'Hoàng Minh Trí', 2);",
      errorOutput: `Msg 547, Level 16, State 0, Line 1
The INSERT statement conflicted with the FOREIGN KEY constraint "fk_nhanvien_phongban".
The conflict occurred in database "QLNV", table "dbo.PhongBan", column 'maphong'.
The statement has been terminated.`,
      successOutput: `(1 row affected)
Command(s) completed successfully.
-> Nhân viên NV03 được xếp vào Phòng Ban hợp lệ (Phòng số 2 - Phòng Nhân sự).`,
      explanation: "Khóa ngoại (FOREIGN KEY) đảm bảo tính TOÀN VẸN THAM CHIẾU. Một giá trị ở cột khóa ngoại bắt buộc phải TỒN TẠI ở cột khóa chính của bảng cha (hoặc là NULL). Vì trong bảng PhongBan chỉ có phòng 1 và 2, việc chèn phòng 99 bị chặn ngay lập tức."
    },
    check: {
      name: "CHECK (Kiểm tra miền giá trị)",
      icon: ShieldAlert,
      table: "KetQua (masv INT, mamh CHAR(4), diem FLOAT, lanthi INT CHECK (lanthi < 3))",
      existingData: [
        { masv: 201, mamh: "CSDL", diem: 4.5, lanthi: 1 },
        { masv: 201, mamh: "CSDL", diem: 8.0, lanthi: 2 }
      ],
      violationQuery: "INSERT INTO KetQua (masv, mamh, diem, lanthi)\nVALUES (202, 'CSDL', 7.5, 4);",
      fixedQuery: "INSERT INTO KetQua (masv, mamh, diem, lanthi)\nVALUES (202, 'CSDL', 7.5, 2);",
      errorOutput: `Msg 547, Level 16, State 0, Line 1
The INSERT statement conflicted with the CHECK constraint "ck_ketqua_lanthi".
The conflict occurred in database "QLDiem", table "dbo.KetQua", column 'lanthi'.
The statement has been terminated.`,
      successOutput: `(1 row affected)
Command(s) completed successfully.
-> Kết quả thi lần 2 hợp lệ với quy chế đào tạo (lanthi < 3).`,
      explanation: "Ràng buộc CHECK định nghĩa điều kiện logic để hạn chế miền giá trị được phép nhập vào một cột. Ở đây quy chế chỉ cho phép thi tối đa 2 lần (lanthi < 3), nên việc nhập lanthi = 4 bị vi phạm điều kiện biểu thức logic."
    }
  };

  const currentLab = labs[activeTab];

  const handleTabChange = (key) => {
    setActiveTab(key);
    setExecutionState("idle");
  };

  return (
    <div className="my-8 rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/30 via-white to-amber-50/20 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-red-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-md shadow-red-600/20">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlConstraintViolationSandbox</h3>
              <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 border border-red-200">
                Live Violation Engine
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phòng thí nghiệm phá vỡ và phục hồi 4 ràng buộc toàn vẹn cốt lõi (PK, UNIQUE, FK, CHECK)
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap rounded-xl bg-red-100/70 p-1 border border-red-200">
          {Object.entries(labs).map(([key, item]) => {
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === key
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-red-950 hover:text-red-700"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {key.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Schema & Existing Data Bar */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2.5">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cấu trúc bảng hiện tại:</span>
          <span className="font-mono text-xs font-bold text-red-700">{currentLab.table}</span>
        </div>
        <div className="mt-3">
          <span className="text-xs font-medium text-gray-600">Dữ liệu sẵn có trong CSDL:</span>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {currentLab.existingData.map((row, i) => (
              <div key={i} className="rounded-lg bg-gray-50 px-3 py-1.5 font-mono text-xs border border-gray-200 text-gray-800">
                {JSON.stringify(row).replace(/{|}|"/g, "").replace(/:/g, ": ")}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Query Studio */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {/* Left: Code Editor */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-red-400" />
                <span className="font-mono text-xs font-bold text-gray-300">
                  SQL Query Console ({executionState === "fixed" ? "Câu lệnh đã sửa" : "Câu lệnh thử nghiệm vi phạm"})
                </span>
              </div>
              <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                executionState === "fixed" ? "bg-emerald-900 text-emerald-300" : "bg-red-950 text-red-400 border border-red-800"
              }`}>
                {executionState === "fixed" ? "VALID SYNTAX" : "INTENTIONAL VIOLATION"}
              </span>
            </div>

            <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {executionState === "fixed" ? currentLab.fixedQuery : currentLab.violationQuery}
            </pre>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-800 pt-3">
            <button
              onClick={() => setExecutionState("error")}
              className="flex items-center gap-1.5 rounded-lg bg-red-600 px-3.5 py-2 text-xs font-bold text-white shadow hover:bg-red-700 transition-all"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Thực thi câu lệnh vi phạm
            </button>
            <button
              onClick={() => setExecutionState("fixed")}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow hover:bg-emerald-700 transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Tự động sửa đúng & Chạy lại
            </button>
          </div>
        </div>

        {/* Right: Engine Output */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-300 bg-gray-900 p-4 text-white shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
              <span className="font-mono text-xs font-bold text-gray-400">SQL Server Engine Output:</span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                Status: {executionState === "idle" ? "Sẵn sàng" : executionState === "error" ? "Bị chặn (Error 500/547/2627)" : "Thành công (200 OK)"}
              </span>
            </div>

            <div className="mt-3">
              {executionState === "idle" && (
                <div className="flex flex-col items-center justify-center py-8 text-center text-gray-500">
                  <Terminal className="h-8 w-8 mb-2 opacity-50" />
                  <p className="text-xs font-mono">Bấm nút &quot;Thực thi câu lệnh vi phạm&quot; để quan sát cơ chế bảo vệ của SQL Server.</p>
                </div>
              )}

              {executionState === "error" && (
                <div className="rounded-lg bg-red-950/80 p-3 border border-red-800 font-mono text-xs text-red-300 whitespace-pre-wrap leading-relaxed animate-pulse">
                  {currentLab.errorOutput}
                </div>
              )}

              {executionState === "fixed" && (
                <div className="rounded-lg bg-emerald-950/80 p-3 border border-emerald-800 font-mono text-xs text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {currentLab.successOutput}
                </div>
              )}
            </div>
          </div>

          {/* Academic explanation */}
          <div className="mt-4 rounded-lg bg-gray-800/90 p-3 text-xs text-gray-300 border border-gray-700">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              Căn nguyên học thuật:
            </div>
            <p className="leading-relaxed">{currentLab.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
