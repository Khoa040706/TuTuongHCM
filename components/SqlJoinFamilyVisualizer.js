"use client";
import React, { useState } from "react";
import { GitMerge, Layers, ArrowRight, CheckCircle2, HelpCircle, Terminal } from "lucide-react";

export default function SqlJoinFamilyVisualizer() {
  const [activeJoin, setActiveJoin] = useState("inner");

  const joinDetails = {
    inner: {
      name: "INNER JOIN (Kết Nối Bằng)",
      desc: "Chỉ giữ lại các dòng có giá trị khóa ngoại khớp chính xác giữa cả hai bảng. Các dòng không khớp ở cả 2 bên đều bị loại bỏ.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong\nFROM NhanVien nv\nINNER JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" }
      ],
      venn: "Chỉ sáng phần giao nhau ở giữa 2 hình tròn."
    },
    left: {
      name: "LEFT [OUTER] JOIN (Kết Nối Ngoài Trái)",
      desc: "Giữ lại TOÀN BỘ các dòng của bảng bên trái (NhanVien). Nếu bảng bên phải (PhongBan) không có mã tương ứng, các cột bên phải sẽ được điền giá trị NULL.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong\nFROM NhanVien nv\nLEFT JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" },
        { manv: "NV99", tennv: "Thực tập", phong: 99, maphong: "NULL", tenphong: "NULL", status: "unmatched_left" }
      ],
      venn: "Sáng toàn bộ hình tròn Trái (gồm cả phần giao và phần riêng của Trái)."
    },
    right: {
      name: "RIGHT [OUTER] JOIN (Kết Nối Ngoài Phải)",
      desc: "Giữ lại TOÀN BỘ các dòng của bảng bên phải (PhongBan). Nếu bảng bên trái không có nhân viên thuộc phòng này, các cột bên trái sẽ nhận giá trị NULL.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong\nFROM NhanVien nv\nRIGHT JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" },
        { manv: "NULL", tennv: "NULL", phong: "NULL", maphong: 3, tenphong: "Kinh doanh (Trống NV)", status: "unmatched_right" }
      ],
      venn: "Sáng toàn bộ hình tròn Phải (gồm cả phần giao và phần riêng của Phải)."
    },
    full: {
      name: "FULL [OUTER] JOIN (Kết Nối Ngoài Đầy Đủ)",
      desc: "Giữ lại TOÀN BỘ các dòng của CẢ HAI BẢNG. Dòng nào không có đối tác ghép nối bên kia thì toàn bộ thông tin bên đó sẽ được điền NULL.",
      sql: `SELECT nv.manv, nv.tennv, pb.tenphong\nFROM NhanVien nv\nFULL JOIN PhongBan pb ON nv.phong = pb.maphong;`,
      result: [
        { manv: "NV01", tennv: "Trường", phong: 1, maphong: 1, tenphong: "Nghiên cứu", status: "matched" },
        { manv: "NV02", tennv: "Hương", phong: 2, maphong: 2, tenphong: "Điều hành", status: "matched" },
        { manv: "NV99", tennv: "Thực tập", phong: 99, maphong: "NULL", tenphong: "NULL", status: "unmatched_left" },
        { manv: "NULL", tennv: "NULL", phong: "NULL", maphong: 3, tenphong: "Kinh doanh (Trống NV)", status: "unmatched_right" }
      ],
      venn: "Sáng toàn bộ cả hai hình tròn Trái, Phải và phần Giao."
    }
  };

  const curr = joinDetails[activeJoin];

  return (
    <div className="my-8 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <GitMerge className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlJoinFamilyVisualizer</h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200">
                Visual Join Studio
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              So sánh trực quan 4 phép kết nối bảng: INNER, LEFT, RIGHT và FULL OUTER JOIN theo chuẩn SQL-92
            </p>
          </div>
        </div>

        {/* Join Tabs */}
        <div className="flex rounded-xl bg-cyan-100/80 p-1 border border-cyan-200">
          <button
            onClick={() => setActiveJoin("inner")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeJoin === "inner" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            INNER JOIN
          </button>
          <button
            onClick={() => setActiveJoin("left")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeJoin === "left" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            LEFT JOIN
          </button>
          <button
            onClick={() => setActiveJoin("right")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeJoin === "right" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            RIGHT JOIN
          </button>
          <button
            onClick={() => setActiveJoin("full")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeJoin === "full" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            FULL JOIN
          </button>
        </div>
      </div>

      {/* Description & Code Box */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-xl border border-cyan-100 bg-cyan-50/50 p-4">
          <div>
            <h4 className="text-sm font-bold text-cyan-950">{curr.name}</h4>
            <p className="mt-2 text-xs text-cyan-900/80 leading-relaxed">{curr.desc}</p>
          </div>
          <div className="mt-4 rounded-lg bg-white p-3 border border-cyan-200 text-xs text-cyan-950">
            <strong>Biểu đồ Venn:</strong> {curr.venn}
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-xs font-bold text-gray-300">T-SQL ON Clause</span>
            </div>
            <span className="font-mono text-[10px] text-cyan-300">SQL-92 STANDARD</span>
          </div>
          <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {curr.sql}
          </pre>
        </div>
      </div>

      {/* Live Result Matrix */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-gray-700">Dữ liệu sau khi kết nối ({curr.result.length} dòng kết quả)</span>
          <span className="text-gray-500">NhanVien (Trái) ⨝ PhongBan (Phải)</span>
        </div>

        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-gray-100/80 border-b border-gray-200 text-gray-700">
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
                    ? "bg-emerald-50/50 hover:bg-emerald-50"
                    : row.status === "unmatched_left"
                    ? "bg-amber-50/50 hover:bg-amber-50"
                    : "bg-purple-50/50 hover:bg-purple-50"
                }`}
              >
                <td className="p-3 text-indigo-700 font-bold">{row.manv}</td>
                <td className="p-3 text-gray-900 font-semibold">{row.tennv}</td>
                <td className="p-3 text-gray-600">{row.phong}</td>
                <td className="p-3 text-gray-600">{row.maphong}</td>
                <td className="p-3 text-gray-900">{row.tenphong}</td>
                <td className="p-3 text-center">
                  <span className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded-full ${
                    row.status === "matched"
                      ? "bg-emerald-100 text-emerald-800"
                      : row.status === "unmatched_left"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-purple-100 text-purple-800"
                  }`}>
                    {row.status === "matched" ? "Khớp Cả Hai" : row.status === "unmatched_left" ? "Trái Có (Phải NULL)" : "Phải Có (Trái NULL)"}
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
