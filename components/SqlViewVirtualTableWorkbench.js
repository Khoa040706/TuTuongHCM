"use client";

import React, { useState } from "react";
import {
  Eye,
  Terminal,
  Layers,
  ArrowRight,
  Play,
  Trash2,
  CheckCircle2,
  ShieldCheck,
  Database,
  Sparkles,
  Lock,
  ArrowDown
} from "lucide-react";

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
    <div className="my-8 rounded-3xl border border-sky-200/90 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md shadow-sky-600/25 shrink-0">
            <Eye className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                SqlViewVirtualTableWorkbench
              </h3>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 border border-sky-200 font-mono">
                Khung Nhìn Ảo (View)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá bản chất Bảng ảo của Khung nhìn: Cơ chế bảo mật che giấu dữ liệu và viết lại truy vấn ngầm (Query Rewriting)
            </p>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2">
          {viewCreated ? (
            <button
              onClick={() => setViewCreated(false)}
              className="flex items-center gap-1.5 rounded-xl bg-rose-50 px-3.5 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition-all border border-rose-200 shadow-xs active:scale-95"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>DROP VIEW NVP5</span>
            </button>
          ) : (
            <button
              onClick={() => setViewCreated(true)}
              className="flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-sky-700 transition-all shadow-md active:scale-95"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>CREATE VIEW NVP5</span>
            </button>
          )}
        </div>
      </div>

      {/* Architecture Flow Diagram: Responsive Grid */}
      <div className="mt-5 rounded-2xl border border-sky-100 bg-white p-4 sm:p-5 shadow-xs">
        <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 text-center font-mono">
          Cơ Chế Viết Lại Truy Vấn (Query Rewriting Engine) Trong RDBMS
        </div>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-3 items-center text-center">
          <div className="rounded-xl bg-gray-900 text-white p-3.5 font-mono text-xs border border-gray-800 shadow-xs">
            <span className="text-sky-400 font-bold block mb-1">1. LỆNH CLIENT GỌI VIEW</span>
            <div className="text-gray-300 text-[11px] leading-relaxed">
              SELECT TENNV, luong FROM NVP5 WHERE luong &gt; 2000;
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-sky-600 py-1">
            <span className="text-[10px] font-mono font-bold bg-sky-100 text-sky-900 px-2.5 py-1 rounded-full border border-sky-200 shadow-xs">
              Query Rewriting Engine
            </span>
            <ArrowRight className="h-5 w-5 mt-1.5 hidden md:block animate-pulse" />
            <ArrowDown className="h-5 w-5 mt-1.5 md:hidden animate-pulse" />
          </div>

          <div className="rounded-xl bg-blue-50/80 border border-blue-200 p-3.5 font-mono text-xs text-blue-950 shadow-xs">
            <span className="text-blue-700 font-bold block mb-1">2. TRUY VẤN VẬT LÝ THẬT</span>
            <div className="text-gray-600 text-[11px] leading-relaxed">
              Quét bảng dbo.NHANVIEN với điều kiện PHG=5 AND luong &gt; 2000
            </div>
          </div>
        </div>
      </div>

      {/* Query Selector on View */}
      {viewCreated && (
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveQuery("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold font-mono transition-all border ${
              activeQuery === "all"
                ? "bg-sky-600 text-white border-sky-700 shadow-sm ring-1 ring-sky-400/30"
                : "bg-white text-gray-700 border-gray-200 hover:bg-sky-50"
            }`}
          >
            1. SELECT * FROM NVP5; (Toàn bộ phòng 5)
          </button>
          <button
            onClick={() => setActiveQuery("filtered")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold font-mono transition-all border ${
              activeQuery === "filtered"
                ? "bg-sky-600 text-white border-sky-700 shadow-sm ring-1 ring-sky-400/30"
                : "bg-white text-gray-700 border-gray-200 hover:bg-sky-50"
            }`}
          >
            2. SELECT * FROM NVP5 WHERE luong &gt; 2000; (Lọc thêm trên View)
          </button>
        </div>
      )}

      {/* View Data Grid Display: BỌC OVERFLOW-X-AUTO CHỐNG TRÀN */}
      <div className="mt-5 rounded-2xl border border-gray-200/90 bg-white shadow-xs overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="font-bold text-gray-800">
            {viewCreated
              ? `Dữ liệu hiển thị qua Khung nhìn NVP5 (${filteredViewData.length} nhân viên)`
              : "Khung nhìn NVP5 chưa được tạo hoặc đã bị xóa!"}
          </span>
          <span className="text-gray-500 font-sans text-[11px]">
            {viewCreated ? "Trạng thái: VIRTUAL RELATION READY" : "Trạng thái: OBJECT NOT FOUND"}
          </span>
        </div>

        {viewCreated ? (
          <div className="overflow-x-auto max-w-full thin-scrollbar">
            <table className="w-full text-left text-xs font-mono min-w-[520px]">
              <thead className="bg-sky-50/90 border-b border-sky-200 text-sky-950">
                <tr>
                  <th className="p-3">MANV (PK Ảo)</th>
                  <th className="p-3">Họ và Tên Lót</th>
                  <th className="p-3">TENNV</th>
                  <th className="p-3">Lương (USD)</th>
                  <th className="p-3 text-center">Bảo Mật Cột Phg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredViewData.map((row) => (
                  <tr key={row.manv} className="hover:bg-sky-50/40 transition-colors">
                    <td className="p-3 font-bold text-sky-700">{row.manv}</td>
                    <td className="p-3 text-gray-700">{row.honv} {row.tenlot}</td>
                    <td className="p-3 font-bold text-gray-900">{row.tennv}</td>
                    <td className="p-3 font-bold text-emerald-700">${row.luong.toLocaleString()}</td>
                    <td className="p-3 text-center">
                      <span className="text-[10px] font-sans font-semibold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> Ẩn cột PHG=5
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-rose-500 font-mono bg-rose-50/30">
            Msg 208, Level 16, State 1, Line 1: Invalid object name &apos;NVP5&apos;.
            <br />
            <span className="text-gray-500 font-sans mt-1 inline-block">
              Bấm &apos;CREATE VIEW NVP5&apos; ở góc trên bên phải để tái sinh khung nhìn ảo.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
