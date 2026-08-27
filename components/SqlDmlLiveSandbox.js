"use client";
import React, { useState } from "react";
import { Terminal, Play, Plus, RefreshCw, Trash2, Edit3, CheckCircle, Database, Sparkles, Layers } from "lucide-react";

export default function SqlDmlLiveSandbox() {
  const initialData = [
    { mamh: "TH101", tenmh: "Tin học đại cương", dvht: 3, state: "normal" },
    { mamh: "TH202", tenmh: "Cấu trúc dữ liệu", dvht: 4, state: "normal" },
    { mamh: "TH303", tenmh: "Lập trình Web cơ bản", dvht: 1, state: "normal" }
  ];

  const [tableData, setTableData] = useState(initialData);
  const [activeAction, setActiveAction] = useState("insert");
  const [message, setMessage] = useState("Sẵn sàng thực thi câu lệnh DML mô phỏng.");

  const handleRunInsert = () => {
    if (tableData.some((row) => row.mamh === "TH345")) {
      setMessage("⚠️ Lỗi: Môn học 'TH345' đã tồn tại trong bảng!");
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
  };

  const handleRunUpdate = () => {
    const exists = tableData.some((row) => row.mamh === "TH345");
    if (!exists) {
      setMessage("⚠️ Hãy chạy INSERT môn 'TH345' trước để quan sát hiệu ứng UPDATE!");
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
  };

  const handleRunDelete = () => {
    const toDeleteCount = tableData.filter((row) => row.dvht < 2).length;
    if (toDeleteCount === 0) {
      setMessage("ℹ️ Không có môn học nào có DVHT < 2 để xóa.");
      return;
    }
    setTableData(tableData.filter((row) => row.dvht >= 2));
    setMessage(`✅ DELETE FROM MON WHERE DVHT < 2 -> Đã xóa thành công ${toDeleteCount} môn học có DVHT < 2!`);
  };

  const handleReset = () => {
    setTableData(initialData);
    setMessage("Đã đặt lại dữ liệu bảng MON về trạng thái ban đầu.");
  };

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlDmlLiveSandbox</h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
                Interactive DML Grid
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cỗ máy mô phỏng trực tiếp 3 thao tác DML cốt lõi: INSERT, UPDATE và DELETE trên bảng dữ liệu sống
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 rounded-xl bg-gray-100 px-3.5 py-2 text-xs font-bold text-gray-700 hover:bg-gray-200 transition-all border border-gray-300"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Đặt Lại Dữ Liệu
        </button>
      </div>

      {/* Action Selector Bar */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => setActiveAction("insert")}
          className={`flex items-center gap-2.5 rounded-xl p-3.5 text-left transition-all border ${
            activeAction === "insert"
              ? "border-emerald-500 bg-emerald-100/70 shadow-sm"
              : "border-gray-200 bg-white hover:bg-emerald-50/40"
          }`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0">
            <Plus className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-950">1. Lệnh INSERT</div>
            <div className="text-[11px] text-gray-600">Thêm môn mới &apos;TH345&apos;</div>
          </div>
        </button>

        <button
          onClick={() => setActiveAction("update")}
          className={`flex items-center gap-2.5 rounded-xl p-3.5 text-left transition-all border ${
            activeAction === "update"
              ? "border-amber-500 bg-amber-100/70 shadow-sm"
              : "border-gray-200 bg-white hover:bg-amber-50/40"
          }`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 text-white shrink-0">
            <Edit3 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-950">2. Lệnh UPDATE</div>
            <div className="text-[11px] text-gray-600">Tăng DVHT = DVHT + 1</div>
          </div>
        </button>

        <button
          onClick={() => setActiveAction("delete")}
          className={`flex items-center gap-2.5 rounded-xl p-3.5 text-left transition-all border ${
            activeAction === "delete"
              ? "border-red-500 bg-red-100/70 shadow-sm"
              : "border-gray-200 bg-white hover:bg-red-50/40"
          }`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white shrink-0">
            <Trash2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-red-950">3. Lệnh DELETE</div>
            <div className="text-[11px] text-gray-600">Xóa môn có DVHT &lt; 2</div>
          </div>
        </button>
      </div>

      {/* Code Terminal & Execution */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span className="font-mono text-xs font-bold text-gray-300">T-SQL Execution Console</span>
          </div>
          <span className="font-mono text-[11px] text-emerald-400">TABLE: dbo.MON</span>
        </div>

        <div className="mt-3 font-mono text-xs text-amber-300">
          {activeAction === "insert" && (
            <div>
              <span className="text-emerald-400">INSERT INTO</span> MON (MaMH, TenMH, DVHT){" "}
              <span className="text-emerald-400">VALUES</span> (&apos;TH345&apos;, <span className="text-cyan-300">N&apos;Cơ sở dữ liệu&apos;</span>, 5);
            </div>
          )}
          {activeAction === "update" && (
            <div>
              <span className="text-amber-400">UPDATE</span> MON{" "}
              <span className="text-amber-400">SET</span> DVHT = DVHT + 1{" "}
              <span className="text-amber-400">WHERE</span> MaMH = &apos;TH345&apos;;
            </div>
          )}
          {activeAction === "delete" && (
            <div>
              <span className="text-red-400">DELETE FROM</span> MON{" "}
              <span className="text-red-400">WHERE</span> DVHT &lt; 2;
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-gray-800 pt-3">
          <span className="text-[11px] text-gray-400 italic">{message}</span>
          <button
            onClick={() => {
              if (activeAction === "insert") handleRunInsert();
              if (activeAction === "update") handleRunUpdate();
              if (activeAction === "delete") handleRunDelete();
            }}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-emerald-700 transition-all"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Thực Thi Câu Lệnh
          </button>
        </div>
      </div>

      {/* Live Data Table Grid */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-gray-700">Dữ liệu Bảng MON (Hiện có: {tableData.length} bản ghi)</span>
          <span className="text-gray-500">Lược đồ: MON (MaMH PK, TenMH, DVHT)</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-gray-100/70 border-b border-gray-200 font-mono text-gray-600">
            <tr>
              <th className="p-3">MaMH (char(5))</th>
              <th className="p-3">TenMH (nvarchar(30))</th>
              <th className="p-3 text-center">DVHT (int)</th>
              <th className="p-3 text-center">Trạng Thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-mono">
            {tableData.map((row) => (
              <tr
                key={row.mamh}
                className={`transition-all duration-300 ${
                  row.state === "inserted"
                    ? "bg-emerald-50 text-emerald-950 font-bold"
                    : row.state === "updated"
                    ? "bg-amber-50 text-amber-950 font-bold"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className="p-3 text-emerald-700 font-bold">{row.mamh}</td>
                <td className="p-3 text-gray-900">{row.tenmh}</td>
                <td className="p-3 text-center">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold ${
                    row.state === "updated" ? "bg-amber-200 text-amber-900" : "bg-gray-100 text-gray-800"
                  }`}>
                    {row.dvht}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className={`text-[11px] px-2 py-0.5 rounded font-sans font-semibold ${
                    row.state === "inserted"
                      ? "bg-emerald-100 text-emerald-800"
                      : row.state === "updated"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {row.state === "inserted" ? "Mới Chèn" : row.state === "updated" ? "Vừa Cập Nhật" : "Ổn Định"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
