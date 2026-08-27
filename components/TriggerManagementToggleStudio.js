"use client";
import React, { useState } from "react";
import { ToggleLeft, ToggleRight, Play, ShieldAlert, CheckCircle2, XCircle, Trash2, Edit3, Eye, Database } from "lucide-react";

export default function TriggerManagementToggleStudio() {
  const [isTriggerEnabled, setIsTriggerEnabled] = useState(true);
  const [testResult, setTestResult] = useState(null);

  const handleTestInsert = () => {
    if (isTriggerEnabled) {
      setTestResult({
        status: "blocked",
        msg: "Trigger ĐANG BẬT (ENABLED): Phát hiện sĩ số = -10 vi phạm ràng buộc ➔ Kích hoạt ROLLBACK TRANSACTION. Dữ liệu bị từ chối chèn!"
      });
    } else {
      setTestResult({
        status: "inserted",
        msg: "Trigger ĐÃ TẮT (DISABLED): Trigger không chạy ngầm ➔ Dòng dữ liệu sĩ số = -10 được chèn thẳng vào bảng 'lop' mà không bị kiểm tra!"
      });
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-1">
            <ToggleRight className="w-4 h-4" />
            <span>Interactive Trigger State Switcher</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Quản Lý & Bật / Tắt Trigger (DISABLE / ENABLE TRIGGER)
          </h3>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <span className="text-xs font-mono text-slate-400 pl-2">Trạng thái Trigger:</span>
          <button
            onClick={() => {
              setIsTriggerEnabled(!isTriggerEnabled);
              setTestResult(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              isTriggerEnabled
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "bg-rose-600 text-white shadow-md shadow-rose-600/30"
            }`}
          >
            {isTriggerEnabled ? (
              <>
                <ToggleRight className="w-4 h-4" />
                <span>ENABLE TRIGGER (BẬT)</span>
              </>
            ) : (
              <>
                <ToggleLeft className="w-4 h-4" />
                <span>DISABLE TRIGGER (TẮT)</span>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="text-xs md:text-sm text-slate-300 mb-5 leading-relaxed">
        <strong>Đặc thù riêng của Trigger (SP không có):</strong> Bạn có thể tạm thời vô hiệu hóa một trigger bằng lệnh <code>DISABLE TRIGGER</code> để nạp nhanh khối dữ liệu lớn (Bulk Insert) hoặc bỏ qua kiểm tra nghiệp vụ tạm thời, sau đó bật lại bằng <code>ENABLE TRIGGER</code>.
      </p>

      {/* DDL Command Preview */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-5 font-mono text-xs text-indigo-300 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-slate-500">Cú pháp DDL đang thực thi: </span>
          <code className="text-amber-300 font-bold">
            {isTriggerEnabled
              ? "ALTER TABLE lop ENABLE TRIGGER kiemtra_siso;"
              : "ALTER TABLE lop DISABLE TRIGGER kiemtra_siso;"}
          </code>
        </div>
        <span className="text-[11px] text-slate-400">
          {isTriggerEnabled ? "(Trigger đang giám sát bảng)" : "(Trigger đã ngủ đông)"}
        </span>
      </div>

      {/* Test Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-xs font-mono font-bold text-indigo-400 block mb-2">1. Thử nghiệm chèn dữ liệu không hợp lệ:</span>
          <div className="font-mono text-xs bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-200 mb-3">
            <code>INSERT INTO lop (malop, siso) VALUES ('CD99', -10);</code>
          </div>

          <button
            onClick={handleTestInsert}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Thực thi lệnh INSERT dữ liệu sai</span>
          </button>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">2. Kết quả trên SQL Server:</span>
            {!testResult ? (
              <div className="p-6 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
                Nhấn 'Thực thi lệnh INSERT' để kiểm tra phản ứng của Server...
              </div>
            ) : testResult.status === "blocked" ? (
              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>BẢO VỆ DỮ LIỆU THÀNH CÔNG</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {testResult.msg}
                </p>
              </div>
            ) : (
              <div className="p-3.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 font-mono text-xs">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>TRIGGER BỊ TẮT — DỮ LIỆU LỖI ĐƯỢC NẠP</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {testResult.msg}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3 Commands DDL Guide */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-xs font-mono font-bold text-slate-200 mb-1 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-purple-400" />
            <span>Xem nội dung Trigger:</span>
          </div>
          <code className="text-[11px] font-mono text-purple-300 block">EXEC sp_helptext 'dtb';</code>
          <span className="text-[10px] text-slate-500 font-sans">Hoặc chuột phải trong SSMS Manage trigger</span>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-xs font-mono font-bold text-slate-200 mb-1 flex items-center gap-1">
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Xóa nhiều Trigger cùng lúc:</span>
          </div>
          <code className="text-[11px] font-mono text-rose-300 block">DROP TRIGGER trg1, trg2;</code>
          <span className="text-[10px] text-slate-500 font-sans">Phân cách các trigger bằng dấu phẩy</span>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-xs font-mono font-bold text-slate-200 mb-1 flex items-center gap-1">
            <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Sửa đổi nội dung Trigger:</span>
          </div>
          <code className="text-[11px] font-mono text-indigo-300 block">ALTER TRIGGER trg ON bang ...</code>
          <span className="text-[10px] text-slate-500 font-sans">Sửa trực tiếp không cần xóa tạo lại</span>
        </div>
      </div>
    </div>
  );
}
