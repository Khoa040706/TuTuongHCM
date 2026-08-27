"use client";
import React, { useState } from "react";
import { GitBranch, ArrowDown, Play, CheckCircle2, Terminal, RefreshCw, Layers } from "lucide-react";

export default function SqlNestedQueryTracer() {
  const [subqueryType, setSubqueryType] = useState("uncorrelated"); // "uncorrelated" vs "correlated"
  const [stepIndex, setStepIndex] = useState(0);

  const subqueryData = {
    uncorrelated: {
      title: "1. Truy Vấn Lồng Phân Cấp (Uncorrelated Subquery with IN)",
      desc: "Mệnh đề WHERE của con KHÔNG tham chiếu tới cha -> Con được thực thi 1 LẦN DUY NHẤT trước.",
      sql: `SELECT manv, tennv\nFROM NhanVien\nWHERE phong IN (\n    SELECT maphong\n    FROM DDPhong\n    WHERE diadiem = 'TP HCM'\n);`,
      steps: [
        {
          phase: "Bước 1: Thực thi Truy Vấn Con (Chạy 1 lần)",
          code: `SELECT maphong FROM DDPhong WHERE diadiem = 'TP HCM'`,
          detail: "Hệ quản trị CSDL quét bảng DDPhong và trả về danh sách tập hợp các mã phòng tại TP HCM: [1, 2].",
          state: "Tập hợp trả về: { 1, 2 }"
        },
        {
          phase: "Bước 2: Thay thế tập hợp vào Truy Vấn Cha",
          code: `SELECT manv, tennv FROM NhanVien WHERE phong IN (1, 2)`,
          detail: "Truy vấn cha quét bảng NhanVien và chỉ giữ lại các nhân viên có thuộc tính 'phong' nằm trong tập hợp {1, 2}.",
          state: "Kết quả trả về: NV01 (Phòng 1), NV02 (Phòng 2), NV03 (Phòng 1), NV04 (Phòng 2)."
        }
      ]
    },
    correlated: {
      title: "2. Truy Vấn Lồng Tương Quan (Correlated Subquery with EXISTS)",
      desc: "Mệnh đề WHERE của con CÓ tham chiếu thuộc tính của cha (phong = maphong) -> Con được thực thi LẶP LẠI nhiều lần, mỗi lần ứng với 1 bộ của cha.",
      sql: `SELECT manv, tennv\nFROM NhanVien\nWHERE EXISTS (\n    SELECT *\n    FROM PhongBan\n    WHERE tenphong = 'Nghien cuu' AND phong = maphong\n);`,
      steps: [
        {
          phase: "Bước 1: Lấy dòng đầu tiên của Cha (NV01 - phong: 1)",
          code: `EXISTS (SELECT * FROM PhongBan WHERE tenphong = 'Nghien cuu' AND 1 = maphong)`,
          detail: "Kiểm tra phòng 1 có tên là 'Nghien cuu' -> Tìm thấy! -> Trả về TRUE -> Giữ lại NV01.",
          state: "Dòng NV01: TRUE (Được chọn)"
        },
        {
          phase: "Bước 2: Lấy dòng thứ hai của Cha (NV02 - phong: 2)",
          code: `EXISTS (SELECT * FROM PhongBan WHERE tenphong = 'Nghien cuu' AND 2 = maphong)`,
          detail: "Kiểm tra phòng 2 có tên là 'Điều hành' != 'Nghien cuu' -> Không tìm thấy -> Trả về FALSE -> Loại bỏ NV02.",
          state: "Dòng NV02: FALSE (Bị loại)"
        },
        {
          phase: "Bước 3: Tiếp tục lặp cho toàn bộ các dòng còn lại của Cha",
          code: `Lặp lại quá trình trên cho NV03, NV04, NV05...`,
          detail: "Mỗi dòng của bảng NhanVien đều kích hoạt một lần thực thi truy vấn con để kiểm tra điều kiện tồn tại.",
          state: "Kết quả cuối cùng: Chỉ giữ lại các nhân viên thuộc phòng Nghiên cứu (NV01, NV03)."
        }
      ]
    }
  };

  const curr = subqueryData[subqueryType];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlNestedQueryTracer</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Subquery Execution Tracer
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bộ giải mã từng bước phân biệt Truy vấn lồng phân cấp (IN) vs Truy vấn lồng tương quan (EXISTS)
            </p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex rounded-xl bg-purple-100/80 p-1 border border-purple-200">
          <button
            onClick={() => {
              setSubqueryType("uncorrelated");
              setStepIndex(0);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              subqueryType === "uncorrelated" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            Lồng Phân Cấp (IN)
          </button>
          <button
            onClick={() => {
              setSubqueryType("correlated");
              setStepIndex(0);
            }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              subqueryType === "correlated" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            Lồng Tương Quan (EXISTS)
          </button>
        </div>
      </div>

      {/* Overview Box */}
      <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/50 p-4">
        <h4 className="text-sm font-bold text-purple-950">{curr.title}</h4>
        <p className="mt-1 text-xs text-purple-900/80 leading-relaxed">{curr.desc}</p>
      </div>

      {/* SQL Script Display */}
      <div className="mt-4 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-purple-400" />
            <span className="font-mono text-xs font-bold text-gray-300">T-SQL Nested Subquery</span>
          </div>
          <span className="font-mono text-[10px] text-purple-300">PARSER VIEW</span>
        </div>
        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {curr.sql}
        </pre>
      </div>

      {/* Step Navigator */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {curr.steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStepIndex(idx)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
              stepIndex === idx
                ? "bg-purple-600 text-white border-purple-700 shadow-md"
                : "bg-white text-gray-700 border-gray-200 hover:bg-purple-50"
            }`}
          >
            <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-mono ${
              stepIndex === idx ? "bg-white text-purple-700" : "bg-purple-100 text-purple-800"
            }`}>
              {idx + 1}
            </span>
            <span>{s.phase.split(":")[0]}</span>
          </button>
        ))}
      </div>

      {/* Step Execution Details */}
      <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5 shadow-sm">
        <div className="text-xs font-bold text-purple-950 uppercase tracking-wider border-b border-gray-100 pb-2">
          {curr.steps[stepIndex].phase}
        </div>

        <div className="mt-3 rounded-lg bg-gray-900 p-3 font-mono text-xs text-emerald-400 border border-gray-800 overflow-x-auto">
          {curr.steps[stepIndex].code}
        </div>

        <p className="mt-3 text-xs text-gray-700 leading-relaxed">
          {curr.steps[stepIndex].detail}
        </p>

        <div className="mt-3 rounded-lg bg-purple-50 p-3 border border-purple-200 text-xs font-mono font-bold text-purple-900">
          {curr.steps[stepIndex].state}
        </div>
      </div>
    </div>
  );
}
