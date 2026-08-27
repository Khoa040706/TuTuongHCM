"use client";
import React, { useState } from "react";
import { ArrowRight, Play, Database, CheckCircle2, User, BookOpen, Award, Terminal, RefreshCw } from "lucide-react";

export default function StoredProcedureParameterFlowStudio() {
  const [selectedStudent, setSelectedStudent] = useState("01");
  const [selectedSubject, setSelectedSubject] = useState("CSDL");
  const [step, setStep] = useState(0); // 0: Idle, 1: Passed Input, 2: Querying, 3: Returned Output

  // Mock Database Table: ketqua
  const dbData = [
    { masv: "01", mamh: "CSDL", diem: 9 },
    { masv: "01", mamh: "CTDL", diem: 8 },
    { masv: "02", mamh: "CSDL", diem: 7 },
    { masv: "02", mamh: "CTDL", diem: 5 },
    { masv: "03", mamh: "CSDL", diem: 10 },
    { masv: "03", mamh: "CTDL", diem: 8 }
  ];

  const foundRecord = dbData.find(
    (item) => item.masv === selectedStudent && item.mamh === selectedSubject
  );
  const foundScore = foundRecord ? foundRecord.diem : "NULL (Không tìm thấy)";

  const handleRun = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        setStep(3);
      }, 700);
    }, 700);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase mb-1">
            <RefreshCw className="w-4 h-4" />
            <span>Interactive Parameter Flow Engine</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Mô Phỏng Luồng Truyền Tham Số: INPUT Parameter ➔ SP ➔ OUTPUT Parameter
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Chạy EXEC xem_diem</span>
          </button>
        </div>
      </div>

      {/* Selector bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">
            1. Chọn Tham số Input (@masv):
          </label>
          <select
            value={selectedStudent}
            onChange={(e) => {
              setSelectedStudent(e.target.value);
              setStep(0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="01">Sinh viên 01 (Nguyễn Văn A)</option>
            <option value="02">Sinh viên 02 (Trần Thị B)</option>
            <option value="03">Sinh viên 03 (Lê Văn C)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">
            2. Chọn Tham số Input (@mamh):
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setStep(0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="CSDL">Cơ sở dữ liệu (CSDL)</option>
            <option value="CTDL">Cấu trúc dữ liệu (CTDL)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">
            3. Biến hứng OUTPUT (@diem_sv):
          </label>
          <div className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-amber-400 flex items-center justify-between">
            <span>DECLARE @diem_sv int;</span>
            <span className="text-[10px] text-slate-500">Khởi tạo RAM</span>
          </div>
        </div>
      </div>

      {/* Visual Flow Animation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 relative">
        {/* Step 1: Input Parameters */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            step >= 1
              ? "bg-indigo-950/40 border-indigo-500/60 shadow-lg shadow-indigo-500/20"
              : "bg-slate-950 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 mb-2">
            <span className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px]">1</span>
            <span>ỨNG DỤNG GỌI EXEC</span>
          </div>
          <div className="font-mono text-xs bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-indigo-200">
            <code>EXEC xem_diem '{selectedStudent}', '{selectedSubject}', @diem_sv OUTPUT;</code>
          </div>
          <div className="mt-2 text-[11px] text-slate-400">
            Truyền giá trị <code>'{selectedStudent}'</code> và <code>'{selectedSubject}'</code> vào 2 tham số đầu vào.
          </div>
        </div>

        {/* Step 2: Inside Stored Procedure */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            step >= 2
              ? "bg-purple-950/40 border-purple-500/60 shadow-lg shadow-purple-500/20"
              : "bg-slate-950 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px]">2</span>
            <span>XỬ LÝ TRONG SP</span>
          </div>
          <div className="font-mono text-xs bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-purple-200">
            <code>SELECT @diem = diem<br />FROM ketqua<br />WHERE masv='{selectedStudent}' AND mamh='{selectedSubject}';</code>
          </div>
          <div className="mt-2 text-[11px] text-slate-400">
            Gán giá trị từ cột <code>diem</code> vào tham số <code>@diem int OUTPUT</code>.
          </div>
        </div>

        {/* Step 3: Result in Output Variable */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            step >= 3
              ? "bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-500/20"
              : "bg-slate-950 border-slate-800 opacity-60"
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-2">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">3</span>
            <span>BIẾN NHẬN @diem_sv</span>
          </div>
          <div className="font-mono text-xs bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-emerald-300">
            <code>PRINT @diem_sv;<br />➔ Kết quả: {step >= 3 ? foundScore : "?"}</code>
          </div>
          <div className="mt-2 text-[11px] text-slate-400">
            Giá trị được ghi ngược trở lại vào biến <code>@diem_sv</code> tại môi trường gọi.
          </div>
        </div>
      </div>

      {/* Code Full Preview Box */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between text-xs font-mono mb-2 text-slate-400">
          <span className="font-bold text-slate-300">Đoạn mã T-SQL hoàn chỉnh theo chuẩn giáo trình:</span>
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
        </div>
        <pre className="font-mono text-xs text-indigo-200 bg-slate-900/80 p-3 rounded-lg overflow-x-auto leading-relaxed border border-slate-800">
          <code>{`-- 1. Định nghĩa thủ tục với tham số OUTPUT
CREATE PROCEDURE xem_diem 
    @masv varchar(10),
    @mamh varchar(10),
    @diem int OUTPUT
AS
BEGIN
    SELECT @diem = diem
    FROM ketqua
    WHERE masv = @masv AND mamh = @mamh;
END;
GO

-- 2. Khối lệnh gọi và hứng kết quả (Bắt buộc DECLARE trước và kèm OUTPUT)
DECLARE @diem_sv int;
EXEC xem_diem '${selectedStudent}', '${selectedSubject}', @diem_sv OUTPUT;
PRINT @diem_sv;`}</code>
        </pre>
        <div className="mt-2 text-[11px] text-amber-300 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5" />
          <span><strong>Lưu ý cốt lõi:</strong> Nếu quên từ khóa <code>OUTPUT</code> khi gọi <code>EXEC</code>, biến <code>@diem_sv</code> sẽ giữ giá trị <code>NULL</code>!</span>
        </div>
      </div>
    </div>
  );
}
