"use client";
import React, { useState } from "react";
import { Eye, Terminal, Layers, ArrowRight, Play, Trash2, CheckCircle2, ShieldCheck, Database } from "lucide-react";

export default function SqlViewVirtualTableWorkbench() {
  const [viewCreated, setViewCreated] = useState(true);
  const [activeQuery, setActiveQuery] = useState("all");

  const nhanVienBaseTable = [
    { manv: "NV01", honv: "Nguyễn", tenlot: "Văn", tennv: "Trường", phg: 5, luong: 2500 },
    { manv: "NV02", honv: "Trần", tenlot: "Thị", tennv: "Hương", phg: 2, luong: 3200 },
    { manv: "NV03", honv: "Lê", tenlot: "Hoàng", tennv: "Nam", phg: 5, luong: 1800 },
    { manv: "NV04", honv: "Phạm", tenlot: "Quốc", tennv: "Bảo", phg: 2, luong: 4500 },
    { manv: "NV05", honv: "Võ", tenlot: "Thị", tennv: "Thảo", phg: 5, luong: 2800 }
  ];

  // View NVP5 virtual data
  const viewData = nhanVienBaseTable
    .filter((nv) => nv.phg === 5)
    .map((nv) => ({
      manv: nv.manv,
      honv: nv.honv,
      tenlot: nv.tenlot,
      tennv: nv.tennv,
      luong: nv.luong
    }));

  const filteredViewData =
    activeQuery === "filtered"
      ? viewData.filter((nv) => nv.luong > 2000)
      : viewData;

  return (
    <div className="my-8 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
            <Eye className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlViewVirtualTableWorkbench</h3>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 border border-sky-200">
                Virtual Table Architecture
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá bản chất Bảng ảo của Khung nhìn (View): Không tốn dung lượng đĩa và chuyển tiếp truy vấn thời gian thực
            </p>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2">
          {viewCreated ? (
            <button
              onClick={() => setViewCreated(false)}
              className="flex items-center gap-1.5 rounded-xl bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-100 transition-all border border-rose-200"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Thử Lệnh DROP VIEW NVP5
            </button>
          ) : (
            <button
              onClick={() => setViewCreated(true)}
              className="flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-sky-700 transition-all shadow-sm"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Chạy CREATE VIEW NVP5
            </button>
          )}
        </div>
      </div>

      {/* Architecture Flow Diagram */}
      <div className="mt-5 rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">
          Cơ Chế Biên Dịch Ngầm & Rút Trích Dữ Liệu Thời Gian Thực
        </div>

        <div className="grid gap-3 md:grid-cols-3 items-center text-center">
          <div className="rounded-xl bg-gray-900 text-white p-3 font-mono text-xs border border-gray-800">
            <span className="text-sky-400 font-bold">1. CLIENT TRUY VẤN</span>
            <div className="text-gray-300 mt-1">SELECT TENNV FROM NVP5 WHERE luong &gt; 2000;</div>
          </div>

          <div className="flex flex-col items-center justify-center text-sky-600">
            <span className="text-[10px] font-mono font-bold bg-sky-100 px-2 py-0.5 rounded border border-sky-200">
              Query Rewriting Engine
            </span>
            <ArrowRight className="h-5 w-5 mt-1 animate-pulse hidden md:block" />
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 font-mono text-xs text-blue-950">
            <span className="text-blue-700 font-bold">2. BẢNG GỐC VẬT LÝ</span>
            <div className="text-gray-600 mt-1">Quét bảng dbo.NHANVIEN với điều kiện PHG=5 AND luong&gt;2000</div>
          </div>
        </div>
      </div>

      {/* Query Selector on View */}
      {viewCreated && (
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveQuery("all")}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all border ${
              activeQuery === "all"
                ? "bg-sky-600 text-white border-sky-700 shadow-sm"
                : "bg-white text-gray-700 border-gray-200 hover:bg-sky-50"
            }`}
          >
            1. SELECT * FROM NVP5; (Xem toàn bộ phòng 5)
          </button>
          <button
            onClick={() => setActiveQuery("filtered")}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all border ${
              activeQuery === "filtered"
                ? "bg-sky-600 text-white border-sky-700 shadow-sm"
                : "bg-white text-gray-700 border-gray-200 hover:bg-sky-50"
            }`}
          >
            2. SELECT TENNV FROM NVP5 WHERE luong &gt; 2000; (Lọc thêm trên View)
          </button>
        </div>
      )}

      {/* View Data Grid Display */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-gray-700">
            {viewCreated
              ? `Dữ liệu hiển thị qua Khung nhìn NVP5 (${filteredViewData.length} nhân viên)`
              : "Khung nhìn NVP5 chưa được tạo hoặc đã bị xóa!"}
          </span>
          <span className="text-gray-500">
            {viewCreated ? "Trạng thái: VIRTUAL DATA AVAILABLE" : "Trạng thái: VIEW DROPPED"}
          </span>
        </div>

        {viewCreated ? (
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-sky-50 border-b border-sky-200 text-sky-950">
              <tr>
                <th className="p-3">MANV</th>
                <th className="p-3">Họ và Tên Lót</th>
                <th className="p-3">TENNV</th>
                <th className="p-3">Lương (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredViewData.map((row) => (
                <tr key={row.manv} className="hover:bg-sky-50/40 transition-colors">
                  <td className="p-3 text-sky-700 font-bold">{row.manv}</td>
                  <td className="p-3 text-gray-700">{row.honv} {row.tenlot}</td>
                  <td className="p-3 font-bold text-gray-900">{row.tennv}</td>
                  <td className="p-3 text-emerald-700 font-bold">${row.luong.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-xs text-gray-400 font-mono">
            Msg 208, Level 16, State 1: Invalid object name &apos;NVP5&apos;.
            <br />
            Bấm &apos;Chạy CREATE VIEW NVP5&apos; ở phía trên để tái tạo khung nhìn ảo.
          </div>
        )}
      </div>
    </div>
  );
}
