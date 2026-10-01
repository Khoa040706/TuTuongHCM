"use client";

import React, { useState } from "react";
import {
  GitMerge,
  Layers,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Terminal,
  Database,
  Sparkles,
  Info
} from "lucide-react";

export default function SqlJoinFamilyVisualizer() {
  const [activeJoin, setActiveJoin] = useState("inner");

  const joinDetails = {
    inner: {
      key: "inner",
      name: "INNER JOIN (Kết Nối Bằng Khóa)",
      shortBadge: "Khớp 100%",
      desc: "Chỉ giữ lại các dòng có giá trị khóa liên kết khớp chính xác giữa cả hai bảng. Mọi dòng không tìm thấy đối tác ở một trong hai bên đều bị loại bỏ hoàn toàn.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong
FROM NhanVien nv
INNER JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" }
      ],
      vennLeft: false,
      vennCenter: true,
      vennRight: false,
      vennDesc: "Chỉ sáng phần giao nhau (Intersection) ở giữa 2 bảng."
    },
    left: {
      key: "left",
      name: "LEFT [OUTER] JOIN (Kết Nối Ngoài Trái)",
      shortBadge: "Ưu Tiên Trái",
      desc: "Giữ lại TOÀN BỘ các dòng của bảng bên trái (NhanVien). Nếu bảng bên phải (PhongBan) không có mã phòng tương ứng, các thuộc tính của bảng phải sẽ được tự động điền giá trị NULL.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong
FROM NhanVien nv
LEFT JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" },
        { manv: "NV99", tennv: "Thực tập", phong: 99, maphong: "NULL", tenphong: "NULL", status: "unmatched_left" }
      ],
      vennLeft: true,
      vennCenter: true,
      vennRight: false,
      vennDesc: "Sáng toàn bộ hình tròn Trái (gồm cả phần giao và phần riêng biệt của NhanVien)."
    },
    right: {
      key: "right",
      name: "RIGHT [OUTER] JOIN (Kết Nối Ngoài Phải)",
      shortBadge: "Ưu Tiên Phải",
      desc: "Giữ lại TOÀN BỘ các dòng của bảng bên phải (PhongBan). Nếu bảng bên trái không có nhân viên nào thuộc phòng này, các cột nhân viên sẽ nhận giá trị NULL.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong
FROM NhanVien nv
RIGHT JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" },
        { manv: "NULL", tennv: "NULL", phong: "NULL", maphong: 3, tenphong: "Kinh doanh (Trống NV)", status: "unmatched_right" }
      ],
      vennLeft: false,
      vennCenter: true,
      vennRight: true,
      vennDesc: "Sáng toàn bộ hình tròn Phải (gồm cả phần giao và phần phòng ban chưa có nhân viên)."
    },
    full: {
      key: "full",
      name: "FULL [OUTER] JOIN (Kết Nối Toàn Bộ Ngoài)",
      shortBadge: "Hợp Nhất Đầy Đủ",
      desc: "Giữ lại TOÀN BỘ các dòng của CẢ HAI BẢNG. Bất kỳ dòng nào không có đối tác ghép nối bên kia thì toàn bộ thông tin đối tác tương ứng sẽ được điền NULL.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong
FROM NhanVien nv
FULL JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" },
        { manv: "NV99", tennv: "Thực tập", phong: 99, maphong: "NULL", tenphong: "NULL", status: "unmatched_left" },
        { manv: "NULL", tennv: "NULL", phong: "NULL", maphong: 3, tenphong: "Kinh doanh (Trống NV)", status: "unmatched_right" }
      ],
      vennLeft: true,
      vennCenter: true,
      vennRight: true,
      vennDesc: "Sáng toàn bộ cả hai hình tròn Trái, Phải và vùng giao thoa ở giữa."
    }
  };

  const curr = joinDetails[activeJoin];

  return (
    <div className="my-8 rounded-3xl border border-cyan-200/90 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-md shadow-cyan-600/25 shrink-0">
            <GitMerge className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Visual Join Studio & Interactive Venn
              </h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200 font-mono">
                SQL-92 Standard
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              So sánh trực quan 4 phép kết nối bảng qua Biểu đồ Venn động và ma trận xử lý giá trị NULL
            </p>
          </div>
        </div>

        {/* 4 Join Tabs: Responsive 2x2 or 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-cyan-100/80 border border-cyan-200 w-full sm:w-auto">
          {Object.keys(joinDetails).map((key) => {
            const item = joinDetails[key];
            const isSelected = activeJoin === key;
            return (
              <button
                key={key}
                onClick={() => setActiveJoin(key)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all text-center ${
                  isSelected
                    ? "bg-cyan-600 text-white shadow-sm ring-1 ring-cyan-500/30"
                    : "text-cyan-950 hover:bg-white/60"
                }`}
              >
                {key.toUpperCase()} JOIN
              </button>
            );
          })}
        </div>
      </div>

      {/* Description & Interactive Venn Diagram: 1 col on mobile/laptop, 2 cols on wide desktop */}
      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        {/* Venn Diagram Visualizer (5 Cols on XL) */}
        <div className="xl:col-span-5 rounded-2xl border border-cyan-200/90 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
            <span className="text-xs font-bold font-mono text-cyan-950">
              Interactive Venn Diagram
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 font-semibold border border-cyan-200">
              {curr.shortBadge}
            </span>
          </div>

          {/* SVG Venn Diagram */}
          <div className="my-4 flex items-center justify-center">
            <svg viewBox="0 0 300 160" className="w-full max-w-[280px] h-auto drop-shadow-sm">
              <defs>
                <clipPath id="leftCircleClip">
                  <circle cx="105" cy="80" r="65" />
                </clipPath>
              </defs>

              {/* Circle Left: NhanVien */}
              <circle
                cx="105"
                cy="80"
                r="65"
                className={`transition-all duration-300 cursor-pointer ${
                  curr.vennLeft ? "fill-cyan-500/30 stroke-cyan-600 stroke-2" : "fill-slate-100/80 stroke-slate-300 stroke-1"
                }`}
                onClick={() => setActiveJoin("left")}
              />

              {/* Circle Right: PhongBan */}
              <circle
                cx="195"
                cy="80"
                r="65"
                className={`transition-all duration-300 cursor-pointer ${
                  curr.vennRight ? "fill-blue-500/30 stroke-blue-600 stroke-2" : "fill-slate-100/80 stroke-slate-300 stroke-1"
                }`}
                onClick={() => setActiveJoin("right")}
              />

              {/* Intersection Area */}
              <g clipPath="url(#leftCircleClip)">
                <circle
                  cx="195"
                  cy="80"
                  r="65"
                  className={`transition-all duration-300 cursor-pointer ${
                    curr.vennCenter ? "fill-emerald-500/60 stroke-emerald-600 stroke-2" : "fill-transparent"
                  }`}
                  onClick={() => setActiveJoin("inner")}
                />
              </g>

              {/* Text Labels */}
              <text x="65" y="85" textAnchor="middle" className="text-[11px] font-mono font-bold fill-slate-700">
                NhanVien
              </text>
              <text x="235" y="85" textAnchor="middle" className="text-[11px] font-mono font-bold fill-slate-700">
                PhongBan
              </text>
              <text x="150" y="85" textAnchor="middle" className="text-[10px] font-mono font-black fill-slate-900">
                ⨝
              </text>
            </svg>
          </div>

          <div className="rounded-xl bg-cyan-50/70 p-2.5 border border-cyan-200 text-xs text-cyan-950 font-sans">
            <strong>Vùng được chiếu:</strong> {curr.vennDesc}
          </div>
        </div>

        {/* Code & Theory Details (7 Cols on XL) */}
        <div className="xl:col-span-7 flex flex-col justify-between gap-3">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-4 sm:p-5 shadow-xs">
            <h4 className="text-sm font-bold text-cyan-950 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-600" />
              {curr.name}
            </h4>
            <p className="mt-2 text-xs text-cyan-900/90 leading-relaxed font-sans">{curr.desc}</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-4 sm:p-5 text-white shadow-lg overflow-hidden">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-gray-300">T-SQL ON Clause</span>
              </div>
              <span className="font-mono text-[10px] text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 font-semibold">
                ANSI/ISO SQL-92
              </span>
            </div>
            <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre max-w-full thin-scrollbar py-1">
              {curr.sql}
            </pre>
          </div>
        </div>
      </div>

      {/* Live Result Matrix: BỌC OVERFLOW-X-AUTO CHỐNG TRÀN */}
      <div className="mt-6 rounded-2xl border border-gray-200/90 bg-white shadow-xs overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="font-bold text-gray-800">
            Dữ liệu sau khi kết nối ({curr.result.length} dòng kết quả trả về)
          </span>
          <span className="text-gray-500 font-sans text-[11px]">
            NhanVien (Bảng Trái) ⨝ PhongBan (Bảng Phải)
          </span>
        </div>

        <div className="overflow-x-auto max-w-full thin-scrollbar">
          <table className="w-full text-left text-xs font-mono min-w-[500px]">
            <thead className="bg-gray-100/90 border-b border-gray-200 text-gray-700">
              <tr>
                <th className="p-3">nv.manv</th>
                <th className="p-3">nv.tennv</th>
                <th className="p-3">nv.phong (FK)</th>
                <th className="p-3">pb.maphong (PK)</th>
                <th className="p-3">pb.tenphong</th>
                <th className="p-3 text-center">Trạng Thái Ghép</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {curr.result.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.status === "matched"
                      ? "bg-emerald-50/40 hover:bg-emerald-50/70"
                      : row.status === "unmatched_left"
                      ? "bg-amber-50/40 hover:bg-amber-50/70"
                      : "bg-purple-50/40 hover:bg-purple-50/70"
                  }`}
                >
                  <td className="p-3 font-bold text-indigo-700">
                    {row.manv === "NULL" ? (
                      <span className="text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded text-[11px]">NULL</span>
                    ) : (
                      row.manv
                    )}
                  </td>
                  <td className="p-3 text-gray-900 font-semibold">
                    {row.tennv === "NULL" ? (
                      <span className="text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded text-[11px]">NULL</span>
                    ) : (
                      row.tennv
                    )}
                  </td>
                  <td className="p-3 text-gray-600">
                    {row.phong === "NULL" ? (
                      <span className="text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded text-[11px]">NULL</span>
                    ) : (
                      row.phong
                    )}
                  </td>
                  <td className="p-3 text-gray-600">
                    {row.maphong === "NULL" ? (
                      <span className="text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded text-[11px]">NULL</span>
                    ) : (
                      row.maphong
                    )}
                  </td>
                  <td className="p-3 text-gray-900">
                    {row.tenphong === "NULL" ? (
                      <span className="text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded text-[11px]">NULL</span>
                    ) : (
                      row.tenphong
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <span className={`text-[10px] font-sans font-bold px-2.5 py-1 rounded-full ${
                      row.status === "matched"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : row.status === "unmatched_left"
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-purple-100 text-purple-800 border border-purple-200"
                    }`}>
                      {row.status === "matched" ? "✓ Khớp Cả Hai" : row.status === "unmatched_left" ? "⚠ Trái Có (Phải NULL)" : "⚠ Phải Có (Trái NULL)"}
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
