"use client";
import React, { useState } from "react";
import { ShieldCheck, ShieldAlert, ArrowRight, CheckCircle2, XCircle, Layers, Database, Eye, Server } from "lucide-react";

export default function InsteadOfVsAfterTriggerStudio() {
  const [selectedType, setSelectedType] = useState("insteadof"); // "insteadof" | "after"

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-1">
            <ShieldAlert className="w-4 h-4" />
            <span>Interactive View Interception Engine</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            So Sánh Chuyên Sâu: INSTEAD OF Trigger vs AFTER (FOR) Trigger
          </h3>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono font-bold">
          <button
            onClick={() => setSelectedType("insteadof")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedType === "insteadof" ? "bg-rose-600 text-white shadow-md shadow-rose-600/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. INSTEAD OF Trigger
          </button>
          <button
            onClick={() => setSelectedType("after")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedType === "after" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. AFTER (FOR) Trigger
          </button>
        </div>
      </div>

      {/* Visual Execution Flow Card */}
      {selectedType === "insteadof" ? (
        <div className="space-y-4 mb-6">
          <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold mb-2">
              <Eye className="w-4 h-4" />
              <span>CƠ CHẾ ĐÁNH CHẶN TRÊN KHUNG NHÌN (VIEW)</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-3 leading-relaxed">
              <strong>INSTEAD OF Trigger</strong> đánh chặn hoàn toàn câu lệnh DML gốc (thao tác gốc <strong>KHÔNG</strong> thực hiện trên bảng/view). Thay vào đó, Trigger sẽ tự bóc tách dữ liệu từ bảng <code>inserted</code> để định tuyến chèn/sửa vào các bảng vật lý tương ứng.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 my-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-center">
              <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                <span>INSERT INTO V_SinhVien</span>
                <span className="block text-[10px] text-rose-400 font-bold">(Bị chặn lại 100%)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-rose-400 animate-pulse" />
              <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500 text-rose-200">
                <span className="font-bold">INSTEAD OF TRIGGER</span>
                <span className="block text-[10px] text-slate-300">Đọc bảng inserted</span>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500 text-emerald-200">
                <span>INSERT INTO sinhvien</span>
                <span className="block text-[10px] text-emerald-300">Nạp vào bảng vật lý</span>
              </div>
            </div>

            <pre className="font-mono text-xs text-rose-200 bg-slate-900/80 p-3 rounded-lg overflow-x-auto border border-slate-800">
              <code>{`-- Tạo INSTEAD OF Trigger trên View đa bảng:
CREATE TRIGGER trg_View_Insert ON V_SinhVien
INSTEAD OF insert, update, delete
AS
BEGIN
    -- Thao tác gốc bị thay thế hoàn toàn bởi các lệnh trong khối này
    INSERT INTO sinhvien (masv, tensv, malop)
    SELECT masv, tensv, malop FROM inserted;
END;`}</code>
            </pre>
          </div>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold mb-2">
              <Server className="w-4 h-4" />
              <span>CƠ CHẾ THỰC THI SAU KHI THAO TÁC HOÀN TẤT (AFTER / FOR)</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-3 leading-relaxed">
              <strong>AFTER Trigger</strong> (mặc định tương đương <code>FOR</code>) chỉ thực thi <strong>SAU KHI</strong> câu lệnh DML gốc đã tác động xong vào bảng dữ liệu. Được dùng phổ biến nhất để kiểm tra ràng buộc toàn vẹn phức tạp, ghi nhật ký (Audit Log) hoặc tự động đồng bộ dữ liệu liên bảng.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 my-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-center">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500 text-emerald-200">
                <span>INSERT INTO sinhvien</span>
                <span className="block text-[10px] text-emerald-300">(Đã nạp xong vào bảng)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
              <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-500 text-indigo-200">
                <span className="font-bold">AFTER / FOR TRIGGER</span>
                <span className="block text-[10px] text-slate-300">Kiểm tra ràng buộc / Rollback nếu lỗi</span>
              </div>
            </div>

            <pre className="font-mono text-xs text-indigo-200 bg-slate-900/80 p-3 rounded-lg overflow-x-auto border border-slate-800">
              <code>{`-- Tạo AFTER Trigger kiểm tra và ghi log:
CREATE TRIGGER trg_After_Insert ON sinhvien
FOR insert, update, delete
AS
BEGIN
    -- Thực thi sau khi thao tác gốc đã xong
    PRINT N'Đã đồng bộ dữ liệu sinh viên thành công!';
END;`}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Comparison Table Box */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="text-xs font-mono font-bold text-slate-300 mb-3 uppercase tracking-wider">
          Bảng Đối Chiếu Nhanh (Theo Đúng Giáo Trình):
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
                <th className="py-2.5 px-3">Đặc điểm</th>
                <th className="py-2.5 px-3 text-rose-400">Instead of Trigger</th>
                <th className="py-2.5 px-3 text-indigo-400">After (For) Trigger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-200">Thời điểm chạy</td>
                <td className="py-2.5 px-3 text-rose-300 font-bold">Thay thế thao tác gốc</td>
                <td className="py-2.5 px-3 text-indigo-300">Sau khi thao tác gốc hoàn tất</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-200">Thao tác gốc có thực hiện không</td>
                <td className="py-2.5 px-3 text-rose-300 font-bold">Không (bị thay thế)</td>
                <td className="py-2.5 px-3 text-emerald-300 font-bold">Có (đã thực hiện xong)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-200">Áp dụng trên View</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">Có (Rất phổ biến & hiệu quả)</td>
                <td className="py-2.5 px-3 text-slate-400">Hạn chế</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
