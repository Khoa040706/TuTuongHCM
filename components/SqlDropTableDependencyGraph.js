"use client";
import React, { useState } from "react";
import { Trash2, AlertTriangle, CheckCircle2, ShieldAlert, ArrowDown, RefreshCw, Terminal, Lock, Unlock } from "lucide-react";

export default function SqlDropTableDependencyGraph() {
  const [dropState, setDropState] = useState("idle"); // "idle", "blocked", "safe_dropped", "nocheck_dropped"

  return (
    <div className="my-8 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/40 via-white to-red-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md shadow-rose-600/20">
            <Trash2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlDropTableDependencyGraph</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200">
                Cascade & Dependency Studio
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Trực quan hóa cây quan hệ phụ thuộc và xử lý xung đột khóa ngoại khi thực hiện lệnh DROP TABLE
            </p>
          </div>
        </div>

        <button
          onClick={() => setDropState("idle")}
          className="flex items-center gap-1.5 rounded-xl bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-200 transition-all border border-gray-300"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Reset Trạng Thái
        </button>
      </div>

      {/* Dependency Tree Diagram */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">
          Sơ Đồ Quan Hệ Phụ Thuộc Khóa Ngoại (Foreign Key Dependency Tree)
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          {/* Parent Table */}
          <div className={`w-64 rounded-xl border-2 p-3 text-center transition-all ${
            dropState === "safe_dropped" || dropState === "nocheck_dropped"
              ? "border-dashed border-gray-300 bg-gray-100 opacity-40 line-through"
              : "border-rose-500 bg-rose-50/80 shadow-md"
          }`}>
            <span className="font-mono text-xs font-bold text-rose-950">BẢNG CHA: PhongBan</span>
            <div className="text-[11px] text-gray-600 mt-0.5">Khóa chính: <code>maphong (PK)</code></div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center text-rose-600">
            <span className="text-[10px] font-mono font-bold bg-rose-100 px-2 py-0.5 rounded border border-rose-200">
              FOREIGN KEY (phong) REFERENCES PhongBan(maphong)
            </span>
            <ArrowDown className="h-5 w-5 mt-1 animate-bounce" />
          </div>

          {/* Child Table */}
          <div className="w-64 rounded-xl border-2 border-indigo-400 bg-indigo-50/80 p-3 text-center shadow-md">
            <span className="font-mono text-xs font-bold text-indigo-950">BẢNG CON: NhanVien</span>
            <div className="text-[11px] text-gray-600 mt-0.5">Cột tham chiếu: <code>phong (FK)</code></div>
          </div>
        </div>
      </div>

      {/* Action Buttons Studio */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => setDropState("blocked")}
          className="flex flex-col justify-between rounded-xl border border-rose-300 bg-rose-50/70 p-3.5 text-left hover:bg-rose-100/70 transition-all shadow-sm"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900">
              <AlertTriangle className="h-4 w-4 text-rose-600" />
              Thử Xóa Bảng Cha Trước
            </div>
            <div className="font-mono text-[11px] text-rose-700 mt-1">DROP TABLE PhongBan;</div>
          </div>
          <div className="text-[10px] text-gray-600 mt-2 font-medium">Bị chặn bởi FK (Mô phỏng lỗi Msg 3726)</div>
        </button>

        <button
          onClick={() => setDropState("safe_dropped")}
          className="flex flex-col justify-between rounded-xl border border-emerald-300 bg-emerald-50/70 p-3.5 text-left hover:bg-emerald-100/70 transition-all shadow-sm"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Quy Trình Xóa An Toàn
            </div>
            <div className="font-mono text-[11px] text-emerald-700 mt-1">DROP TABLE NhanVien;<br/>DROP TABLE PhongBan;</div>
          </div>
          <div className="text-[10px] text-gray-600 mt-2 font-medium">Xóa bảng con trước, bảng cha sau</div>
        </button>

        <button
          onClick={() => setDropState("nocheck_dropped")}
          className="flex flex-col justify-between rounded-xl border border-purple-300 bg-purple-50/70 p-3.5 text-left hover:bg-purple-100/70 transition-all shadow-sm"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900">
              <Unlock className="h-4 w-4 text-purple-600" />
              Vô Hiệu Hóa Ràng Buộc
            </div>
            <div className="font-mono text-[11px] text-purple-700 mt-1">ALTER TABLE NhanVien<br/>NOCHECK CONSTRAINT ALL;</div>
          </div>
          <div className="text-[10px] text-gray-600 mt-2 font-medium">Gỡ bỏ kiểm tra FK tạm thời</div>
        </button>
      </div>

      {/* Engine Console Output */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-rose-400" />
            <span className="font-mono text-xs font-bold text-gray-300">SQL Server Engine Log</span>
          </div>
          <span className="font-mono text-[10px] text-gray-400">STATUS: {dropState.toUpperCase()}</span>
        </div>

        <div className="mt-3 font-mono text-xs leading-relaxed">
          {dropState === "idle" && (
            <div className="text-gray-500 py-3 text-center">
              Chọn 1 trong 3 hành động phía trên để quan sát phản ứng của hệ quản trị CSDL.
            </div>
          )}
          {dropState === "blocked" && (
            <div className="text-red-400 whitespace-pre-wrap bg-red-950/60 p-3 rounded border border-red-800">
              Msg 3726, Level 16, State 1, Line 1
Could not drop object &apos;PhongBan&apos; because it is referenced by a FOREIGN KEY constraint.
The statement has been terminated.
            </div>
          )}
          {dropState === "safe_dropped" && (
            <div className="text-emerald-400 whitespace-pre-wrap bg-emerald-950/60 p-3 rounded border border-emerald-800">
              Command(s) completed successfully.
              {"\n"}→ Bảng NhanVien (con) đã được xóa trước.
              {"\n"}→ Bảng PhongBan (cha) đã được xóa thành công không còn bị ràng buộc!
            </div>
          )}
          {dropState === "nocheck_dropped" && (
            <div className="text-purple-300 whitespace-pre-wrap bg-purple-950/60 p-3 rounded border border-purple-800">
              Command(s) completed successfully.
              {"\n"}→ Đã vô hiệu hóa toàn bộ ràng buộc trên bảng NhanVien bằng NOCHECK CONSTRAINT ALL.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
