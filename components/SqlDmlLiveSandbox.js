"use client";

import React, { useState } from "react";
import {
  Terminal,
  Play,
  Plus,
  RefreshCw,
  Trash2,
  Edit3,
  CheckCircle2,
  Database,
  Sparkles,
  Layers,
  AlertCircle
} from "lucide-react";

export default function SqlDmlLiveSandbox() {
  const initialData = [
    { mamh: "TH101", tenmh: "Tin học đại cương", dvht: 3, state: "normal" },
    { mamh: "TH202", tenmh: "Cấu trúc dữ liệu", dvht: 4, state: "normal" },
    { mamh: "TH303", tenmh: "Lập trình Web cơ bản", dvht: 1, state: "normal" }
  ];

  const [tableData, setTableData] = useState(initialData);
  const [activeAction, setActiveAction] = useState("insert");
  const [message, setMessage] = useState("Sẵn sàng thực thi câu lệnh DML mô phỏng.");
  const [msgType, setMsgType] = useState("info"); // 'info' | 'success' | 'warn'

  const handleRunInsert = () => {
    if (tableData.some((row) => row.mamh === "TH345")) {
      setMessage("⚠️ Vi phạm Khóa chính: Môn học 'TH345' đã tồn tại trong bảng MON!");
      setMsgType("warn");
      return;
    }
    const newRow = {
      mamh: "TH345",
      tenmh: "Cơ sở dữ liệu",
      dvht: 5,
      state: "inserted"
    };
    setTableData([...tableData, newRow]);
    setMessage("✅ INSERT INTO MON VALUES ('TH345', N'Cơ sở dữ liệu', 5) -> 1 hàng được thêm mới thành công!");
    setMsgType("success");
  };

  const handleRunUpdate = () => {
    const exists = tableData.some((row) => row.mamh === "TH345");
    if (!exists) {
      setMessage("⚠️ Hãy bấm chạy INSERT môn 'TH345' trước để quan sát hiệu ứng UPDATE tăng số DVHT!");
      setMsgType("warn");
      return;
    }
    setTableData(
      tableData.map((row) => {
        if (row.mamh === "TH345") {
          return { ...row, dvht: row.dvht + 1, state: "updated" };
        }
        return row;
      })
    );
    setMessage("✅ UPDATE MON SET DVHT = DVHT + 1 WHERE MaMH = 'TH345' -> Số DVHT của môn TH345 đã tăng thêm 1!");
    setMsgType("success");
  };

  const handleRunDelete = () => {
    const toDeleteCount = tableData.filter((row) => row.dvht < 2).length;
    if (toDeleteCount === 0) {
      setMessage("ℹ️ Không có môn học nào có DVHT < 2 để xóa trong bảng hiện tại.");
      setMsgType("info");
      return;
    }
    setTableData(tableData.filter((row) => row.dvht >= 2));
    setMessage(`✅ DELETE FROM MON WHERE DVHT < 2 -> Đã xóa thành công ${toDeleteCount} môn học có DVHT < 2!`);
    setMsgType("success");
  };

  const handleReset = () => {
    setTableData(initialData);
    setMessage("Đã đặt lại dữ liệu bảng MON về trạng thái 3 dòng ban đầu.");
    setMsgType("info");
  };

  const actionSnippets = {
    insert: `-- 1. INSERT: Thêm bản ghi mới vào quan hệ MON
INSERT INTO MON (MaMH, TenMH, DVHT)
VALUES ('TH345', N'Cơ sở dữ liệu', 5);`,
    update: `-- 2. UPDATE: Thay đổi giá trị thuộc tính số đơn vị học trình
UPDATE MON
SET DVHT = DVHT + 1
WHERE MaMH = 'TH345';`,
    delete: `-- 3. DELETE: Xóa bỏ các bộ dữ liệu thỏa mãn điều kiện
DELETE FROM MON
WHERE DVHT < 2;`
  };

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25 shrink-0">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Interactive DML Sandbox
              </h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200 font-mono">
                INSERT • UPDATE • DELETE
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cỗ máy mô phỏng trực tiếp 3 thao tác DML cốt lõi trên bảng dữ liệu sống kèm trạng thái biến đổi
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all border border-gray-300 shadow-xs active:scale-95"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Đặt Lại Bảng MON</span>
        </button>
      </div>

      {/* Action Selector Bar: Responsive 1 col mobile, 3 cols tablet/desktop */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        <button
          onClick={() => setActiveAction("insert")}
          className={`flex items-center gap-3 rounded-2xl p-3 sm:p-3.5 text-left transition-all border ${
            activeAction === "insert"
              ? "border-emerald-500 bg-emerald-50/90 shadow-sm ring-2 ring-emerald-400/30"
              : "border-gray-200 bg-white hover:bg-emerald-50/40 hover:border-emerald-300"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shrink-0 shadow-xs">
            <Plus className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-950 font-mono">1. INSERT LỆNH</div>
            <div className="text-[11px] text-gray-600">Thêm môn &apos;TH345&apos; (5 DVHT)</div>
          </div>
        </button>

        <button
          onClick={() => setActiveAction("update")}
          className={`flex items-center gap-3 rounded-2xl p-3 sm:p-3.5 text-left transition-all border ${
            activeAction === "update"
              ? "border-amber-500 bg-amber-50/90 shadow-sm ring-2 ring-amber-400/30"
              : "border-gray-200 bg-white hover:bg-amber-50/40 hover:border-amber-300"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600 text-white shrink-0 shadow-xs">
            <Edit3 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-950 font-mono">2. UPDATE LỆNH</div>
            <div className="text-[11px] text-gray-600">Tăng DVHT = DVHT + 1</div>
          </div>
        </button>

        <button
          onClick={() => setActiveAction("delete")}
          className={`flex items-center gap-3 rounded-2xl p-3 sm:p-3.5 text-left transition-all border ${
            activeAction === "delete"
              ? "border-rose-500 bg-rose-50/90 shadow-sm ring-2 ring-rose-400/30"
              : "border-gray-200 bg-white hover:bg-rose-50/40 hover:border-rose-300"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 text-white shrink-0 shadow-xs">
            <Trash2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-rose-950 font-mono">3. DELETE LỆNH</div>
            <div className="text-[11px] text-gray-600">Xóa môn có DVHT &lt; 2</div>
          </div>
        </button>
      </div>

      {/* Code Terminal & Execution */}
      <div className="mt-5 rounded-2xl border border-gray-800 bg-gray-950 p-4 sm:p-5 text-white shadow-lg overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span className="font-mono text-xs font-bold text-gray-300">T-SQL DML Interactive Console</span>
          </div>
          <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
            {activeAction.toUpperCase()} STATEMENT
          </span>
        </div>

        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre max-w-full thin-scrollbar py-1">
          {actionSnippets[activeAction]}
        </pre>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-800 pt-3">
          <div className="flex items-center gap-2 text-xs">
            {msgType === "success" && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
            {msgType === "warn" && <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />}
            {msgType === "info" && <Database className="h-4 w-4 text-cyan-400 shrink-0" />}
            <span className={`font-mono ${
              msgType === "success" ? "text-emerald-300" : msgType === "warn" ? "text-amber-300" : "text-gray-300"
            }`}>
              {message}
            </span>
          </div>

          <button
            onClick={() => {
              if (activeAction === "insert") handleRunInsert();
              else if (activeAction === "update") handleRunUpdate();
              else if (activeAction === "delete") handleRunDelete();
            }}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold font-mono text-white shadow-md hover:bg-emerald-500 transition-all active:scale-95"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>F5 Thực Thi Câu Lệnh</span>
          </button>
        </div>
      </div>

      {/* Live Data Table Grid: BỌC OVERFLOW-X-AUTO CHỐNG TRÀN */}
      <div className="mt-6 rounded-2xl border border-gray-200/90 bg-white shadow-xs overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="font-bold text-gray-800">
            Dữ liệu Bảng MON (Hiện có: {tableData.length} bản ghi)
          </span>
          <span className="text-gray-500 font-sans text-[11px]">
            Lược đồ: MON (MaMH PK, TenMH, DVHT)
          </span>
        </div>

        <div className="overflow-x-auto max-w-full thin-scrollbar">
          <table className="w-full text-left text-xs font-mono min-w-[520px]">
            <thead className="bg-gray-100/90 border-b border-gray-200 text-gray-700">
              <tr>
                <th className="p-3">MaMH (char(5) - PK)</th>
                <th className="p-3">TenMH (nvarchar(30))</th>
                <th className="p-3 text-center">DVHT (int)</th>
                <th className="p-3 text-center">Trạng Thái Dòng</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((row) => (
                <tr
                  key={row.mamh}
                  className={`transition-colors duration-300 ${
                    row.state === "inserted"
                      ? "bg-emerald-50/70 text-emerald-950 font-bold"
                      : row.state === "updated"
                      ? "bg-amber-50/70 text-amber-950 font-bold"
                      : "hover:bg-gray-50/60"
                  }`}
                >
                  <td className="p-3 font-bold text-emerald-700">{row.mamh}</td>
                  <td className="p-3 text-gray-900">{row.tenmh}</td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold ${
                      row.state === "updated" ? "bg-amber-200 text-amber-900" : "bg-gray-100 text-gray-800"
                    }`}>
                      {row.dvht}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-sans font-semibold ${
                      row.state === "inserted"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : row.state === "updated"
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}>
                      {row.state === "inserted" ? "★ Mới Chèn" : row.state === "updated" ? "▲ Vừa Cập Nhật" : "Ổn Định"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
