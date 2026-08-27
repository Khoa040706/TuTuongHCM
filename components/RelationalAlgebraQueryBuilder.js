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
  Database
} from "lucide-react";

export default function RelationalAlgebraQueryBuilder() {
  const [activeStep, setActiveStep] = useState(1);

  const querySteps = [
    {
      step: 1,
      title: "Bước 1: Kết Nối Bảng Sinh Viên & Bảng Đề Tài SV (T₁ ← SINHVIEN * SV_DT)",
      op: "Natural Join (*)",
      formula: "T₁ ← SINHVIEN * SV_DT",
      desc: "Kết nối tự nhiên trên thuộc tính chung MaSV để gán mỗi sinh viên với mã đề tài họ đang thực hiện.",
      outputCols: ["MaSV", "Hoten", "Namsinh", "QQ", "Hocluc", "MaDT", "NoiAD", "KQ"],
      sampleRow: ["SV003", "Trần Đức Thịnh", "1983", "Đồng Tháp", "8.1", "DT001", "Đồng Tháp", "Giỏi"]
    },
    {
      step: 2,
      title: "Bước 2: Kết Nối Thêm Bảng Thông Tin Đề Tài (T₂ ← T₁ * DETAI)",
      op: "Natural Join (*)",
      formula: "T₂ ← T₁ * DETAI",
      desc: "Kết nối tự nhiên trên thuộc tính chung MaDT để lấy đầy đủ Tên đề tài, Chủ nhiệm và Kinh phí.",
      outputCols: ["MaSV", "Hoten", "MaDT", "NoiAD", "TenDT", "Chunhiem", "Kinhphi"],
      sampleRow: ["SV003", "Trần Đức Thịnh", "DT001", "Đồng Tháp", "AI trong Nông nghiệp", "Lê Đức Phúc", "15tr"]
    },
    {
      step: 3,
      title: "Bước 3: Lọc Điều Kiện Nơi Áp Dụng (T₃ ← σ_(NoiAD='Đồng Tháp')(T₂))",
      op: "Selection (σ)",
      formula: "T₃ ← σ_(NoiAD = 'Đồng Tháp')(T₂)",
      desc: "Áp dụng phép chọn để lọc chính xác những bản ghi có NoiAD bằng 'Đồng Tháp'.",
      outputCols: ["MaSV", "Hoten", "MaDT", "NoiAD", "TenDT", "Chunhiem"],
      sampleRow: ["SV003", "Trần Đức Thịnh", "DT001", "Đồng Tháp", "AI trong Nông nghiệp", "Lê Đức Phúc"]
    },
    {
      step: 4,
      title: "Bước 4: Chiếu Thuộc Tính Kết Quả Cuối Cùng (KetQua ← π_(TenDT, Hoten)(T₃))",
      op: "Projection (π)",
      formula: "KetQua ← π_(TenDT, Hoten)(T₃)",
      desc: "Chỉ giữ lại 2 thuộc tính cần thiết theo yêu cầu nghiệp vụ: Tên đề tài và Họ tên sinh viên.",
      outputCols: ["TenDT", "Hoten"],
      sampleRow: ["AI trong Nông nghiệp", "Trần Đức Thịnh"]
    }
  ];

  const current = querySteps[activeStep - 1];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Workflow className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Multi-Step Query Pipeline • Mục 2.9
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Studio Lắp Ghép & Thực Thi Truy Vấn Đại Số Quan Hệ Đa Bước
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-800 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-semibold">
          Query Execution Engine
        </span>
      </div>

      {/* Pipeline Navigation Bar */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {querySteps.map((q) => {
          const isActive = activeStep === q.step;
          return (
            <button
              key={q.step}
              onClick={() => setActiveStep(q.step)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-[10px] font-mono text-orange-700 font-bold uppercase">
                {q.op}
              </div>
              <div className="text-xs font-bold truncate mt-0.5">{q.formula}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details */}
      <div className="p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2 font-mono">
            <Terminal className="w-4 h-4 text-orange-600" />
            {current.title}
          </h4>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
            Bước {activeStep} / 4
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          {current.desc}
        </p>

        {/* Live Table Schema Output */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
          <div className="text-xs font-bold text-orange-800 font-mono flex items-center gap-2">
            <Database className="w-4 h-4 text-orange-600" />
            Lược đồ quan hệ trung gian sinh ra:
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse font-mono bg-white rounded-lg overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  {current.outputCols.map((c, i) => (
                    <th key={i} className="p-2.5">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  {current.sampleRow.map((val, i) => (
                    <td key={i} className="p-2.5 text-slate-700 font-sans">{val}</td>
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
