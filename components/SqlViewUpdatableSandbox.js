"use client";
import React, { useState } from "react";
import { ShieldCheck, AlertOctagon, CheckCircle2, Terminal, Edit3, Plus, XCircle, RotateCcw } from "lucide-react";

export default function SqlViewUpdatableSandbox() {
  const [withCheckOption, setWithCheckOption] = useState(true);
  const [insertStatus, setInsertStatus] = useState("idle"); // "idle", "success", "blocked"

  const handleTryInsertWrongDept = () => {
    if (withCheckOption) {
      setInsertStatus("blocked");
    } else {
      setInsertStatus("success_silent");
    }
  };

  const handleTryInsertValidDept = () => {
    setInsertStatus("success");
  };

  return (
    <div className="my-8 rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-violet-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-600/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlViewUpdatableSandbox</h3>
              <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-800 border border-violet-200">
                WITH CHECK OPTION Lab
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phòng thí nghiệm thử nghiệm quy tắc cập nhật dữ liệu qua View và cơ chế bảo vệ của mệnh đề WITH CHECK OPTION
            </p>
          </div>
        </div>

        {/* Toggle WITH CHECK OPTION */}
        <div className="flex items-center gap-2 rounded-xl bg-violet-100/70 p-1.5 border border-violet-200">
          <span className="text-xs font-bold text-violet-950 px-2">WITH CHECK OPTION:</span>
          <button
            onClick={() => {
              setWithCheckOption(!withCheckOption);
              setInsertStatus("idle");
            }}
            className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
              withCheckOption ? "bg-violet-600 text-white shadow-sm" : "bg-gray-200 text-gray-700"
            }`}
          >
            {withCheckOption ? "ĐANG BẬT (ON)" : "ĐANG TẮT (OFF)"}
          </button>
        </div>
      </div>

      {/* View DDL Definition */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-violet-400" />
            <span className="font-mono text-xs font-bold text-gray-300">View Definition with Integrity Guard</span>
          </div>
          <span className="font-mono text-[10px] text-violet-300">T-SQL DDL</span>
        </div>
        <pre className="mt-2 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`CREATE VIEW NVP5 AS
SELECT MANV, HONV, TENNV, PHG
FROM NHANVIEN
WHERE PHG = 5${withCheckOption ? "\nWITH CHECK OPTION;" : ";"}`}
        </pre>
      </div>

      {/* Test Scenarios Grid */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {/* Scenario 1 */}
        <button
          onClick={handleTryInsertValidDept}
          className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-left hover:bg-emerald-100/50 transition-all shadow-sm"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
              <Plus className="h-4 w-4 text-emerald-600" />
              Kịch bản 1: Chèn nhân viên thuộc đúng Phòng 5 (PHG = 5)
            </div>
            <div className="font-mono text-[11px] text-emerald-800 mt-2">
              INSERT INTO NVP5 VALUES (&apos;NV90&apos;, N&apos;Lê&apos;, N&apos;Đức&apos;, 5);
            </div>
          </div>
          <div className="text-[11px] text-gray-600 mt-3 font-medium">
            &rarr; Thỏa mãn điều kiện WHERE PHG = 5 &rarr; Chèn thành công.
          </div>
        </button>

        {/* Scenario 2 */}
        <button
          onClick={handleTryInsertWrongDept}
          className="flex flex-col justify-between rounded-xl border border-rose-200 bg-rose-50/50 p-4 text-left hover:bg-rose-100/50 transition-all shadow-sm"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-950">
              <AlertOctagon className="h-4 w-4 text-rose-600" />
              Kịch bản 2: Thử chèn nhân viên thuộc Phòng 2 (PHG = 2) qua View NVP5
            </div>
            <div className="font-mono text-[11px] text-rose-800 mt-2">
              INSERT INTO NVP5 VALUES (&apos;NV91&apos;, N&apos;Vũ&apos;, N&apos;Hải&apos;, 2);
            </div>
          </div>
          <div className="text-[11px] text-gray-600 mt-3 font-medium">
            &rarr; Khác điều kiện PHG = 5 {withCheckOption ? "(Sẽ bị WITH CHECK OPTION chặn)" : "(Chèn được nhưng biến mất khỏi View!)"}
          </div>
        </button>
      </div>

      {/* SQL Engine Output Console */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <span className="font-mono text-xs text-gray-400">Database Engine Feedback</span>
          <span className="font-mono text-[10px] text-violet-400">STATUS: {insertStatus.toUpperCase()}</span>
        </div>

        <div className="mt-3 font-mono text-xs">
          {insertStatus === "idle" && (
            <div className="text-gray-500 py-2">Chọn 1 trong 2 kịch bản ở trên để quan sát phản hồi của SQL Server.</div>
          )}
          {insertStatus === "success" && (
            <div className="text-emerald-400 bg-emerald-950/60 p-3 rounded border border-emerald-800">
              (1 row(s) affected)
              <br />
              &rarr; Thao tác INSERT thành công! Dữ liệu đã được ghi vào bảng gốc NHANVIEN và xuất hiện trong khung nhìn NVP5.
            </div>
          )}
          {insertStatus === "blocked" && (
            <div className="text-rose-400 bg-rose-950/60 p-3 rounded border border-rose-800">
              Msg 550, Level 16, State 1, Line 1
              <br />
              The attempted insert or update failed because the target view either specifies WITH CHECK OPTION or spans a view that specifies WITH CHECK OPTION and one or more rows resulting from the operation did not qualify under the CHECK OPTION constraint.
              <br />
              The statement has been terminated.
            </div>
          )}
          {insertStatus === "success_silent" && (
            <div className="text-amber-300 bg-amber-950/60 p-3 rounded border border-amber-800">
              (1 row(s) affected)
              <br />
              ⚠️ CẢNH BÁO (BẪY DỮ LIỆU): Do KHÔNG CÓ WITH CHECK OPTION, dòng nhân viên phòng 2 đã được chèn vào bảng gốc NHANVIEN, nhưng khi truy vấn lại `SELECT * FROM NVP5` thì nhân viên này BIẾN MẤT HOÀN TOÀN vì PHG=2 không thỏa mãn View!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
