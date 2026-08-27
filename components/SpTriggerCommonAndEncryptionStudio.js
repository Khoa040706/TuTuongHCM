"use client";
import React, { useState } from "react";
import { Lock, Unlock, Terminal, Play, ShieldAlert, CheckCircle2, ArrowRight, RefreshCw, Zap, Database } from "lucide-react";

export default function SpTriggerCommonAndEncryptionStudio() {
  const [encrypted, setEncrypted] = useState(false);
  const [executed, setExecuted] = useState(false);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase mb-1">
            <Lock className="w-4 h-4" />
            <span>Interactive Security & Mechanism Studio</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Khám Phá Mã Hóa WITH ENCRYPTION & Lệnh Hệ Thống sp_helptext
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setEncrypted(false);
              setExecuted(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !encrypted ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Không mã hóa (Mặc định)</span>
          </button>
          <button
            onClick={() => {
              setEncrypted(true);
              setExecuted(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              encrypted ? "bg-purple-600 text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>WITH ENCRYPTION</span>
          </button>
        </div>
      </div>

      <p className="text-xs md:text-sm text-slate-300 mb-6 leading-relaxed">
        Cả <strong>Stored Procedure</strong> và <strong>Trigger</strong> đều hỗ trợ mệnh đề <code>WITH ENCRYPTION</code> để bảo vệ bản quyền mã nguồn T-SQL trên Server, ngăn người dùng trái phép xem cấu trúc câu lệnh bằng thủ tục hệ thống <code>sp_helptext</code>.
      </p>

      {/* Code Definition Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono mb-2 text-slate-400">
            <span className="font-bold text-indigo-400">1. Câu lệnh DDL Khởi tạo đối tượng:</span>
            {encrypted ? (
              <span className="text-purple-400 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Đã bật mã hóa
              </span>
            ) : (
              <span className="text-slate-500">Mã nguồn mở</span>
            )}
          </div>
          <pre className="font-mono text-xs text-indigo-200 bg-slate-900/90 p-3 rounded-lg overflow-x-auto leading-relaxed border border-slate-800/80">
            <code>
              {encrypted
                ? `CREATE PROCEDURE ds_sv\nWITH ENCRYPTION\nAS\nBEGIN\n    SELECT * FROM sinhvien WHERE malop = 'CD10';\nEND;`
                : `CREATE PROCEDURE ds_sv\nAS\nBEGIN\n    SELECT * FROM sinhvien WHERE malop = 'CD10';\nEND;`}
            </code>
          </pre>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">Thao tác kiểm tra:</span>
            <button
              onClick={() => setExecuted(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Chạy: EXEC sp_helptext 'ds_sv'</span>
            </button>
          </div>
        </div>

        {/* Output Console Box */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-2 text-slate-400">
              <span className="font-bold text-emerald-400">2. Kết quả trả về của sp_helptext:</span>
              <Terminal className="w-3.5 h-3.5 text-slate-500" />
            </div>

            {!executed ? (
              <div className="p-8 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
                Nhấn 'Chạy: EXEC sp_helptext' để xem phản hồi từ SQL Server...
              </div>
            ) : encrypted ? (
              <div className="p-4 rounded-lg bg-rose-950/30 border border-rose-500/40 text-rose-300 font-mono text-xs">
                <div className="flex items-center gap-2 font-bold mb-1 text-rose-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Msg 15153, Level 16, State 1:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  The text for object 'ds_sv' is encrypted.<br />
                  (Nội dung mã nguồn T-SQL đã bị mã hóa, không thể giải mã để xem lại văn bản thô).
                </p>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
                <div className="text-[11px] text-slate-400 mb-1 font-bold">Text:</div>
                <pre className="text-slate-200">
                  {`CREATE PROCEDURE ds_sv\nAS\nBEGIN\n    SELECT * FROM sinhvien WHERE malop = 'CD10';\nEND;`}
                </pre>
              </div>
            )}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
            <strong className="text-slate-300">Ý nghĩa thực tế: </strong>
            Dùng <code>WITH ENCRYPTION</code> khi bạn là bên thứ ba triển khai phần mềm cho khách hàng và muốn bảo vệ bản quyền thuật toán/quy tắc nghiệp vụ.
          </div>
        </div>
      </div>

      {/* Difference Core Card */}
      <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-indigo-500/20">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-bold text-slate-100 text-xs md:text-sm mb-1">Stored Procedure — Gọi Chủ Động</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Phải được gọi thực thi một cách chủ động bởi lập trình viên hoặc ứng dụng thông qua lệnh <code>EXEC sp_TenThuTuc</code>.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-amber-500/20">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-bold text-slate-100 text-xs md:text-sm mb-1">Trigger — Kích Hoạt Tự Động</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tự động chạy ngầm (Auto-fired) khi có sự kiện <code>INSERT / UPDATE / DELETE</code> xảy ra trên bảng đích. Không thể gọi bằng <code>EXEC</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
