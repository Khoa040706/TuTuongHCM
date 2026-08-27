"use client";
import React, { useState } from "react";
import { Terminal, Play, Database, Layers, Sparkles, RefreshCw, Table, FileText, CheckCircle2 } from "lucide-react";

export default function SqlQueryConsoleLiveWorkbench() {
  // Sample Company Database Tables
  const nhanVienData = [
    { manv: "NV01", honv: "Nguyễn", tenlot: "Văn", tennv: "Trường", ngaysinh: "1985-05-12", diachi: "123 Lê Lợi, TP HCM", phai: "Nam", luong: 25000, manql: "NV04", phong: 1 },
    { manv: "NV02", honv: "Trần", tenlot: "Thị", tennv: "Hương", ngaysinh: "1990-08-20", diachi: "456 Nguyễn Huệ, Hà Nội", phai: "Nữ", luong: 32000, manql: "NV04", phong: 2 },
    { manv: "NV03", honv: "Lê", tenlot: "Hoàng", tennv: "Nam", ngaysinh: "1988-11-15", diachi: "789 Điện Biên Phủ, TP HCM", phai: "Nam", luong: 18000, manql: "NV01", phong: 1 },
    { manv: "NV04", honv: "Phạm", tenlot: "Quốc", tennv: "Bảo", ngaysinh: "1978-02-10", diachi: "101 Pasteur, Đà Nẵng", phai: "Nam", luong: 45000, manql: null, phong: 2 },
    { manv: "NV05", honv: "Võ", tenlot: "Thị", tennv: "Thảo", ngaysinh: "1992-09-05", diachi: "202 CMT8, TP HCM", phai: "Nữ", luong: 28000, manql: "NV04", phong: 3 }
  ];

  const phongBanData = [
    { maphong: 1, tenphong: "Nghiên cứu", trphong: "NV01", ngnhanchuc: "2015-01-01" },
    { maphong: 2, tenphong: "Điều hành", trphong: "NV04", ngnhanchuc: "2012-06-01" },
    { maphong: 3, tenphong: "Kinh doanh", trphong: "NV05", ngnhanchuc: "2018-03-15" }
  ];

  const presetQueries = [
    {
      id: "q1",
      title: "1. Lọc Lương trong khoảng [20.000 - 30.000] (BETWEEN)",
      sql: `SELECT manv, honv, tennv, luong\nFROM NhanVien\nWHERE luong BETWEEN 20000 AND 30000;`,
      execute: () =>
        nhanVienData
          .filter((nv) => nv.luong >= 20000 && nv.luong <= 30000)
          .map((nv) => ({
            "Mã NV": nv.manv,
            "Họ Tên": `${nv.honv} ${nv.tenlot} ${nv.tennv}`,
            "Lương (VNĐ)": nv.luong.toLocaleString("vi-VN")
          }))
    },
    {
      id: "q2",
      title: "2. Tìm nhân viên có tên 3 ký tự bắt đầu bằng 'N' (LIKE 'N__')",
      sql: `SELECT manv, honv, tennv, phai, diachi\nFROM NhanVien\nWHERE tennv LIKE 'N__';`,
      execute: () =>
        nhanVienData
          .filter((nv) => /^N.{2}$/i.test(nv.tennv))
          .map((nv) => ({
            "Mã NV": nv.manv,
            "Tên": nv.tennv,
            "Giới Tính": nv.phai,
            "Địa Chỉ": nv.diachi
          }))
    },
    {
      id: "q3",
      title: "3. Thống kê Lương toàn công ty (Aggregate Functions)",
      sql: `SELECT \n    SUM(luong) AS 'Tổng Lương',\n    MIN(luong) AS 'Lương Thấp Nhất',\n    MAX(luong) AS 'Lương Cao Nhất',\n    AVG(luong) AS 'Lương TB'\nFROM NhanVien;`,
      execute: () => {
        const sum = nhanVienData.reduce((acc, nv) => acc + nv.luong, 0);
        const min = Math.min(...nhanVienData.map((nv) => nv.luong));
        const max = Math.max(...nhanVienData.map((nv) => nv.luong));
        const avg = Math.round(sum / nhanVienData.length);
        return [
          {
            "Tổng Lương": sum.toLocaleString("vi-VN"),
            "Lương Thấp Nhất": min.toLocaleString("vi-VN"),
            "Lương Cao Nhất": max.toLocaleString("vi-VN"),
            "Lương Trung Bình": avg.toLocaleString("vi-VN")
          }
        ];
      }
    },
    {
      id: "q4",
      title: "4. Kết nối Nhân viên với Phòng ban (INNER JOIN)",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong\nFROM NhanVien nv\nINNER JOIN PhongBan pb ON nv.phong = pb.maphong\nORDER BY pb.tenphong, nv.tennv;`,
      execute: () =>
        nhanVienData.map((nv) => {
          const pb = phongBanData.find((p) => p.maphong === nv.phong);
          return {
            "Mã NV": nv.manv,
            "Tên Nhân Viên": nv.tennv,
            "Phòng Ban": pb ? pb.tenphong : "Chưa phân"
          };
        })
    }
  ];

  const [selectedPreset, setSelectedPreset] = useState(presetQueries[0]);
  const [activeSchemaTab, setActiveSchemaTab] = useState("nhanvien");
  const [queryResult, setQueryResult] = useState(presetQueries[0].execute());

  const handleRunQuery = () => {
    setQueryResult(selectedPreset.execute());
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Terminal className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlQueryConsoleLiveWorkbench</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Company DB Live Query Engine
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cỗ máy thực thi câu truy vấn DQL thời gian thực trên CSDL Công Ty mẫu (NhanVien, PhongBan, DeAn)
            </p>
          </div>
        </div>

        {/* Schema Explorer Tabs */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setActiveSchemaTab("nhanvien")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeSchemaTab === "nhanvien" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bảng NhanVien ({nhanVienData.length})
          </button>
          <button
            onClick={() => setActiveSchemaTab("phongban")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeSchemaTab === "phongban" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bảng PhongBan ({phongBanData.length})
          </button>
        </div>
      </div>

      {/* Preset Query Selector */}
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {presetQueries.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedPreset(item);
              setQueryResult(item.execute());
            }}
            className={`flex flex-col justify-between rounded-xl p-3 text-left transition-all border ${
              selectedPreset.id === item.id
                ? "border-indigo-500 bg-indigo-100/80 shadow-sm"
                : "border-gray-200 bg-white hover:bg-indigo-50/50"
            }`}
          >
            <div className="text-xs font-bold text-indigo-950">{item.title}</div>
            <div className="text-[10px] text-gray-500 mt-1 font-mono">1-Click Run &rarr;</div>
          </button>
        ))}
      </div>

      {/* SQL Editor Terminal */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-xs font-bold text-gray-300">T-SQL Query Console</span>
          </div>
          <button
            onClick={handleRunQuery}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-indigo-700 transition-all"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Chạy Truy Vấn (F5)
          </button>
        </div>

        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {selectedPreset.sql}
        </pre>
      </div>

      {/* Query Result Data Table */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-gray-700">
            Kết quả Truy vấn ({queryResult.length} dòng được trả về)
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <CheckCircle2 className="h-3 w-3" /> Query Executed Successfully
          </span>
        </div>

        {queryResult.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-gray-100 border-b border-gray-200 text-gray-700">
                <tr>
                  {Object.keys(queryResult[0]).map((header, idx) => (
                    <th key={idx} className="p-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {queryResult.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-indigo-50/40 transition-colors">
                    {Object.values(row).map((val, colIdx) => (
                      <td key={colIdx} className="p-3 text-gray-800">
                        {String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-gray-500">Không có kết quả nào thỏa mãn điều kiện.</div>
        )}
      </div>
    </div>
  );
}
