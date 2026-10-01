"use client";

import React, { useState } from "react";
import {
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Table,
  Cpu,
  Layers,
  Terminal,
  Database,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function RelationalAlgebraQueryBuilder() {
  const [activeStep, setActiveStep] = useState(1);

  const querySteps = [
    {
      step: 1,
      title: "Bước 1: Kết Nối Bảng Sinh Viên & Bảng Đề Tài SV (T₁ ← SINHVIEN * SV_DT)",
      op: "Natural Join (*)",
      shortOp: "Kết nối tự nhiên",
      formula: "T₁ ← SINHVIEN * SV_DT",
      desc: "Kết nối tự nhiên trên thuộc tính chung MaSV để gán mỗi sinh viên với mã đề tài họ đang thực hiện.",
      outputCols: ["MaSV", "Hoten", "Namsinh", "QQ", "Hocluc", "MaDT", "NoiAD", "KQ"],
      sampleRow: ["SV003", "Trần Đức Thịnh", "1983", "Đồng Tháp", "8.1", "DT001", "Đồng Tháp", "Giỏi"]
    },
    {
      step: 2,
      title: "Bước 2: Kết Nối Thêm Bảng Thông Tin Đề Tài (T₂ ← T₁ * DETAI)",
      op: "Natural Join (*)",
      shortOp: "Kết nối đề tài",
      formula: "T₂ ← T₁ * DETAI",
      desc: "Kết nối tự nhiên trên thuộc tính chung MaDT để lấy đầy đủ Tên đề tài, Chủ nhiệm và Kinh phí.",
      outputCols: ["MaSV", "Hoten", "MaDT", "NoiAD", "TenDT", "Chunhiem", "Kinhphi"],
      sampleRow: ["SV003", "Trần Đức Thịnh", "DT001", "Đồng Tháp", "AI Nông nghiệp", "Lê Đức Phúc", "15tr"]
    },
    {
      step: 3,
      title: "Bước 3: Lọc Điều Kiện Nơi Áp Dụng (T₃ ← σ_(NoiAD='Đồng Tháp')(T₂))",
      op: "Selection (σ)",
      shortOp: "Lọc điều kiện",
      formula: "T₃ ← σ_(NoiAD = 'Đồng Tháp')(T₂)",
      desc: "Áp dụng phép chọn để lọc chính xác những bản ghi có NoiAD bằng 'Đồng Tháp'.",
      outputCols: ["MaSV", "Hoten", "MaDT", "NoiAD", "TenDT", "Chunhiem"],
      sampleRow: ["SV003", "Trần Đức Thịnh", "DT001", "Đồng Tháp", "AI Nông nghiệp", "Lê Đức Phúc"]
    },
    {
      step: 4,
      title: "Bước 4: Chiếu Thuộc Tính Kết Quả Cuối Cùng (KetQua ← π_(TenDT, Hoten)(T₃))",
      op: "Projection (π)",
      shortOp: "Chiếu thuộc tính",
      formula: "KetQua ← π_(TenDT, Hoten)(T₃)",
      desc: "Chỉ giữ lại 2 thuộc tính cần thiết theo yêu cầu nghiệp vụ: Tên đề tài và Họ tên sinh viên.",
      outputCols: ["TenDT", "Hoten"],
      sampleRow: ["AI trong Nông nghiệp", "Trần Đức Thịnh"]
    }
  ];

  const current = querySteps[activeStep - 1];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 w-full min-w-0">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Workflow className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Multi-Step Query Pipeline • Mục 2.9
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Studio Lắp Ghép & Thực Thi Truy Vấn Đa Bước
            </h3>
          </div>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Trước</span>
          </button>
          <span className="text-xs font-mono text-orange-800 font-bold px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
            {activeStep} / 4
          </span>
          <button
            onClick={() => setActiveStep((prev) => Math.min(querySteps.length, prev + 1))}
            disabled={activeStep === querySteps.length}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-orange-500 bg-orange-600 text-xs font-mono text-white hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
          >
            <span className="hidden sm:inline">Tiếp</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Step Pipeline Tabs */}
      <div className="p-3 sm:p-4 bg-slate-50/80 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {querySteps.map((q) => {
          const isActive = activeStep === q.step;
          return (
            <button
              key={q.step}
              onClick={() => setActiveStep(q.step)}
              className={`p-3 rounded-xl border text-left transition-all min-w-0 ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-2 ring-orange-400/40"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                    isActive ? "bg-orange-600 text-white" : "bg-orange-100 text-orange-800"
                  }`}
                >
                  Bước {q.step}
                </span>
                <span className="text-[10px] text-slate-500 font-mono truncate">{q.op}</span>
              </div>
              <div className="text-xs font-mono font-bold truncate text-slate-900">{q.formula}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details */}
      <div className="p-5 sm:p-6 space-y-5 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2 font-mono min-w-0">
            <Terminal className="w-4 h-4 text-orange-600 flex-shrink-0" />
            <span className="break-words">{current.title}</span>
          </h4>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono flex-shrink-0">
            {current.op}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans break-words">
          {current.desc}
        </p>

        {/* Live Table Schema Output */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-bold text-orange-800 font-mono flex items-center gap-2">
              <Database className="w-4 h-4 text-orange-600 flex-shrink-0" />
              <span>Lược đồ quan hệ trung gian sinh ra:</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              {current.outputCols.length} thuộc tính
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs text-left border-collapse font-mono min-w-[500px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  {current.outputCols.map((c, i) => (
                    <th key={i} className="p-2.5 whitespace-nowrap">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 bg-white">
                  {current.sampleRow.map((val, i) => (
                    <td key={i} className="p-2.5 text-slate-700 font-sans whitespace-nowrap">
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
