"use client";
import React, { useState } from "react";
import { Database, PlusCircle, Trash2, Edit3, ArrowRight, CheckCircle2, Zap, Server, ShieldCheck } from "lucide-react";

export default function TriggerInsertedDeletedLifecycleStudio() {
  const [activeDml, setActiveDml] = useState("insert"); // "insert" | "delete" | "update"

  const states = {
    insert: {
      actionName: "INSERT INTO sinhvien VALUES ('04', 'Lê Văn D', 'CD10')",
      explanation: "Khi thực hiện lệnh INSERT, SQL Server tự động tạo bảng ảo 'inserted' chứa bản sao của dòng dữ liệu mới vừa thêm vào. Bảng ảo 'deleted' hoàn toàn trống rỗng.",
      insertedData: [{ masv: "04", tensv: "Lê Văn D", malop: "CD10" }],
      deletedData: [],
      insertedDesc: "Chứa 1 dòng mới vừa được thêm",
      deletedDesc: "Hoàn toàn trống rỗng (Empty)"
    },
    delete: {
      actionName: "DELETE FROM sinhvien WHERE masv = '01'",
      explanation: "Khi thực hiện lệnh DELETE, SQL Server chuyển toàn bộ các dòng vừa bị xóa vào bảng ảo 'deleted' để Trigger có thể đọc lại dữ liệu cũ trước khi xóa hẳn khỏi đĩa. Bảng 'inserted' hoàn toàn trống rỗng.",
      insertedData: [],
      deletedData: [{ masv: "01", tensv: "Nguyễn Văn A", malop: "CD10" }],
      insertedDesc: "Hoàn toàn trống rỗng (Empty)",
      deletedDesc: "Chứa dòng dữ liệu vừa bị xóa"
    },
    update: {
      actionName: "UPDATE sinhvien SET malop = 'CD12' WHERE masv = '02'",
      explanation: "Lệnh UPDATE là thao tác kép (Double-action): Dữ liệu cũ trước khi sửa được đưa vào bảng 'deleted', dữ liệu mới sau khi sửa được đưa vào bảng 'inserted'. Trigger có thể JOIN 2 bảng này để so sánh độ chênh lệch.",
      insertedData: [{ masv: "02", tensv: "Trần Thị B", malop: "CD12" }],
      deletedData: [{ masv: "02", tensv: "Trần Thị B", malop: "CD10" }],
      insertedDesc: "Chứa giá trị MỚI sau khi cập nhật (CD12)",
      deletedDesc: "Chứa giá trị CŨ trước khi cập nhật (CD10)"
    }
  };

  const curr = states[activeDml];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase mb-1">
            <Zap className="w-4 h-4" />
            <span>Interactive RAM Virtual Tables Anatomy</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Giải Phẫu 2 Bảng Logic Ảo Trong RAM: INSERTED & DELETED
          </h3>
        </div>

        {/* 3 DML Action Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono font-bold">
          <button
            onClick={() => setActiveDml("insert")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeDml === "insert" ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>1. INSERT</span>
          </button>

          <button
            onClick={() => setActiveDml("delete")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeDml === "delete" ? "bg-rose-600 text-white shadow-md shadow-rose-600/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>2. DELETE</span>
          </button>

          <button
            onClick={() => setActiveDml("update")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeDml === "update" ? "bg-amber-600 text-white shadow-md shadow-amber-600/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>3. UPDATE</span>
          </button>
        </div>
      </div>

      {/* Action Banner */}
      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
          <span className="text-slate-500">Câu lệnh DML phát ra:</span>
          <code className="bg-slate-900 px-2.5 py-1 rounded border border-slate-700 text-amber-300 font-bold">
            {curr.actionName}
          </code>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
          <Server className="w-3 h-3" /> Tự động nạp vào RAM
        </span>
      </div>

      <p className="text-xs md:text-sm text-slate-300 mb-5 leading-relaxed">
        {curr.explanation}
      </p>

      {/* 2 Tables Grid in RAM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Table INSERTED */}
        <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>BẢNG ẢO: INSERTED</span>
            </span>
            <span className="text-[11px] text-slate-400">({curr.insertedDesc})</span>
          </div>

          {curr.insertedData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="py-2 px-2">masv</th>
                    <th className="py-2 px-2">tensv</th>
                    <th className="py-2 px-2">malop</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-emerald-200">
                  {curr.insertedData.map((row, i) => (
                    <tr key={i} className="bg-emerald-950/20">
                      <td className="py-2 px-2 font-bold">{row.masv}</td>
                      <td className="py-2 px-2">{row.tensv}</td>
                      <td className="py-2 px-2 text-amber-300">{row.malop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-5 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
              (Empty — Không có dòng dữ liệu nào)
            </div>
          )}
        </div>

        {/* Table DELETED */}
        <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="font-bold text-rose-400 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-rose-400" />
              <span>BẢNG ẢO: DELETED</span>
            </span>
            <span className="text-[11px] text-slate-400">({curr.deletedDesc})</span>
          </div>

          {curr.deletedData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="py-2 px-2">masv</th>
                    <th className="py-2 px-2">tensv</th>
                    <th className="py-2 px-2">malop</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-rose-200">
                  {curr.deletedData.map((row, i) => (
                    <tr key={i} className="bg-rose-950/20">
                      <td className="py-2 px-2 font-bold">{row.masv}</td>
                      <td className="py-2 px-2">{row.tensv}</td>
                      <td className="py-2 px-2 text-rose-300">{row.malop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-5 text-center text-xs text-slate-600 italic border border-dashed border-slate-800 rounded-lg">
              (Empty — Không có dòng dữ liệu nào)
            </div>
          )}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-300 font-sans">
        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          <strong>Quy tắc ghi nhớ nhanh:</strong> INSERT nạp vào <code>inserted</code>, DELETE nạp vào <code>deleted</code>, UPDATE là thao tác kép nạp đồng thời cả 2 bảng (cũ vào <code>deleted</code>, mới vào <code>inserted</code>).
        </span>
      </div>
    </div>
  );
}
