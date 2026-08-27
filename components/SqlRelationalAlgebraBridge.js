"use client";
import React, { useState } from "react";
import { ArrowRightLeft, BookOpen, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export default function SqlRelationalAlgebraBridge() {
  const [activeMapping, setActiveMapping] = useState("select_where");

  const mappings = {
    select_where: {
      title: "1. Phép Chiếu & Phép Chọn (Projection & Selection)",
      math: `\\pi_{masv, hoten} (\\sigma_{malop = 'Ti01'} (SinhVien))`,
      sql: `SELECT masv, hoten\nFROM SinhVien\nWHERE malop = 'Ti01';`,
      detail: "Phép chiếu π tương ứng mệnh đề SELECT, quan hệ SinhVien tương ứng mệnh đề FROM, và phép chọn σ với điều kiện logic tương ứng mệnh đề WHERE."
    },
    theta_join: {
      title: "2. Phép Kết Nối Có Điều Kiện (Theta Join)",
      math: `\\pi_{hoten, tenlop} (SinhVien \\bowtie_{SinhVien.malop = LopHoc.malop} LopHoc)`,
      sql: `SELECT sv.hoten, lh.tenlop\nFROM SinhVien sv\nINNER JOIN LopHoc lh ON sv.malop = lh.malop;`,
      detail: "Phép kết nối ⨝ với điều kiện kết tương ứng với mệnh đề INNER JOIN ... ON trong chuẩn SQL-92."
    },
    cartesian_product: {
      title: "3. Phép Tích Đề-các (Cartesian Product)",
      math: `SinhVien \\times MonHoc`,
      sql: `SELECT *\nFROM SinhVien, MonHoc;\n-- hoặc:\nSELECT *\nFROM SinhVien CROSS JOIN MonHoc;`,
      detail: "Tạo ra tổ hợp tất cả các cặp dòng giữa hai quan hệ, tương ứng cú pháp liệt kê nhiều bảng ở mệnh đề FROM hoặc CROSS JOIN."
    }
  };

  const curr = mappings[activeMapping];

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-sky-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <ArrowRightLeft className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlRelationalAlgebraBridge</h3>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                Math &rarr; SQL Mapping Bridge
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cầu nối đối chiếu 1-1 giữa biểu thức Đại số quan hệ (Toán học) và câu lệnh T-SQL (Lập trình)
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex rounded-xl bg-blue-100/80 p-1 border border-blue-200">
          <button
            onClick={() => setActiveMapping("select_where")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeMapping === "select_where" ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:text-blue-700"
            }`}
          >
            Chiếu & Chọn (π, σ)
          </button>
          <button
            onClick={() => setActiveMapping("theta_join")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeMapping === "theta_join" ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:text-blue-700"
            }`}
          >
            Kết Nối (⨝)
          </button>
          <button
            onClick={() => setActiveMapping("cartesian_product")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeMapping === "cartesian_product" ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:text-blue-700"
            }`}
          >
            Tích Đề-các (&times;)
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {/* Math Box */}
        <div className="flex flex-col justify-between rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <span className="font-mono text-xs font-bold text-gray-700 uppercase">
                1. Biểu Thức Đại Số Quan Hệ (Toán Học):
              </span>
              <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                CHƯƠNG II
              </span>
            </div>

            <div className="mt-4 rounded-xl bg-blue-50/70 p-4 border border-blue-200 text-center font-mono text-sm font-bold text-blue-950">
              {curr.math}
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-600 leading-relaxed">
            {curr.detail}
          </div>
        </div>

        {/* SQL Box */}
        <div className="rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-blue-400" />
                <span className="font-mono text-xs font-bold text-gray-300">2. Câu Lệnh T-SQL Tương Đương</span>
              </div>
              <span className="rounded bg-blue-950 px-2 py-0.5 font-mono text-[10px] text-blue-400 border border-blue-800">
                CHƯƠNG III
              </span>
            </div>

            <pre className="mt-4 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {curr.sql}
            </pre>
          </div>

          <div className="mt-4 rounded-lg bg-gray-900 p-2.5 border border-gray-800 text-[11px] text-gray-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Đảm bảo 100% tương đương về mặt ngữ nghĩa logic dữ liệu.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
