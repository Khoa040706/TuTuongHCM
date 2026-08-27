"use client";

import React, { useState } from "react";
import { Zap, Database, Sparkles, Gauge, ArrowRight, CheckCircle2, Split, Code, Cpu, Search, Terminal, Network } from "lucide-react";

export default function QueryOptimizationCyberHeroBanner() {
  const [activeStage, setActiveStage] = useState("heuristic");

  const stages = {
    parsing: {
      name: "Chặng 1: SQL Parsing & Semantic Analysis",
      tier: "CHẶNG 1: PHÂN TÍCH CÚ PHÁP",
      badge: "SYNTAX & SCHEMA VALIDATION",
      summary: "Biên dịch câu lệnh SQL khai báo thành cấu trúc cây cú pháp nội bộ, kiểm tra tính hợp lệ của tên bảng, tên cột và quyền truy cập từ Catalog.",
      tech: "Lexer & Parser ➔ AST (Abstract Syntax Tree) ➔ Semantic Type Checking.",
      gain: "Phát hiện lỗi cú pháp và lỗi ngữ nghĩa ngay ở tầng biên dịch trước khi chạm đĩa.",
      color: "from-blue-600 to-cyan-600",
      accent: "border-blue-400 text-blue-800 bg-blue-50"
    },
    querytree: {
      name: "Chặng 2: Relational Algebra Query Tree",
      tier: "CHẶNG 2: CÂY ĐẠI SỐ QUAN HỆ",
      badge: "CANONICAL QUERY TREE",
      summary: "Chuyển đổi câu truy vấn thành Cây đại số quan hệ chuẩn tắc sơ khai (chưa tối ưu): Lá là các quan hệ, nút trung gian là các phép toán (σ, π, ⋈, ×).",
      tech: "Biểu thức ban đầu thường chứa Tích Descartes (×) khổng lồ và phép chọn (σ) nằm ở ngọn.",
      gain: "Cung cấp cấu trúc dữ liệu hình cây để bộ tối ưu hóa có thể hoán vị các nút một cách hình thức.",
      color: "from-indigo-600 to-purple-600",
      accent: "border-indigo-400 text-indigo-800 bg-indigo-50"
    },
    heuristic: {
      name: "Chặng 3: Heuristic & Rule-based Optimization",
      tier: "CHẶNG 3: TỐI ƯU HÓA HEURISTIC",
      badge: "EQUIVALENCE RESTRUCTURING",
      summary: "Áp dụng các quy tắc biến đổi tương đương: Đẩy phép chọn (σ) và phép chiếu (π) xuống sát các nút lá; Kết hợp phép chọn với tích Descartes thành phép nối (⋈).",
      tech: "Quy tắc vàng: Đẩy σ sớm ➔ Giảm số dòng; Đẩy π sớm ➔ Giảm số cột ➔ Triệt tiêu bảng trung gian.",
      gain: "Giảm kích thước tập dữ liệu trung gian hàng nghìn lần trước khi thực hiện các phép kết nối tốn kém.",
      color: "from-emerald-600 to-teal-600",
      accent: "border-emerald-400 text-emerald-800 bg-emerald-50"
    },
    execution: {
      name: "Chặng 4: Cost Estimation & Physical Execution",
      tier: "CHẶNG 4: KẾ HOẠCH THỰC THI VẬT LÝ",
      badge: "COST-BASED ENGINE",
      summary: "Ước lượng chi phí đọc khối đĩa (Disk I/O Cost) và chọn giải thuật vật lý tối ưu nhất: Nested-Loop Join, Block Nested-Loop, Sort-Merge Join hoặc Hash Join.",
      tech: "Chi phí I/O = f(B_R, B_S, Buffer size, B-Tree Index Height, Hash Buckets).",
      gain: "Chọn đường dẫn truy xuất (Access Path) có thời gian phản hồi (Query Latency) nhỏ nhất.",
      color: "from-amber-600 to-orange-600",
      accent: "border-amber-400 text-amber-800 bg-amber-50"
    }
  };

  const curr = stages[activeStage];

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 p-6 sm:p-8 text-white shadow-2xl">
      {/* Background Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Top Banner Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-teal-500/30 pb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
              <Zap className="h-7 w-7 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-[11px] font-bold tracking-wider text-emerald-300 border border-emerald-500/40">
                CHƯƠNG VII &bull; MÔN HỆ CƠ SỞ DỮ LIỆU
              </span>
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>QUERY OPTIMIZATION</span>
              </span>
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Tối Ưu Hóa Câu Hỏi Truy Vấn
            </h1>
            <p className="text-xs sm:text-sm text-teal-200/80 mt-1 max-w-2xl">
              Nghệ thuật &amp; Kỹ thuật biến đổi câu lệnh SQL khai báo thành kế hoạch thực thi vật lý tối ưu: Cây đại số quan hệ, Quy tắc Heuristic đẩy phép toán sát lá và Ước lượng chi phí I/O.
            </p>
          </div>
        </div>

        {/* 2 Strategic Pillars */}
        <div className="flex flex-wrap gap-2">
          <div className="rounded-xl border border-teal-500/30 bg-teal-900/40 px-3.5 py-2 text-left backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
              <Network className="h-3.5 w-3.5 text-cyan-400" />
              <span>Tối Ưu Hóa Heuristic</span>
            </div>
            <span className="font-mono text-[10px] text-teal-200">Đẩy σ và π sớm ➔ Khử tích Descartes</span>
          </div>

          <div className="rounded-xl border border-teal-500/30 bg-teal-900/40 px-3.5 py-2 text-left backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
              <Gauge className="h-3.5 w-3.5 text-amber-400" />
              <span>Tối Ưu Dựa Trên Chi Phí</span>
            </div>
            <span className="font-mono text-[10px] text-teal-200">Cost-based: Giảm thiểu Block I/O</span>
          </div>
        </div>
      </div>

      {/* Interactive Pipeline Stage Selector */}
      <div className="relative z-10 mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <span>Luồng Xử Lý Truy Vấn Siêu Tốc 4 Chặng:</span>
          </span>
          <span className="text-[11px] text-teal-300 font-mono">Bấm chọn từng chặng để phân tích</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {Object.keys(stages).map((k) => (
            <button
              key={k}
              onClick={() => setActiveStage(k)}
              className={`group relative overflow-hidden rounded-xl border p-3 text-left transition-all ${
                activeStage === k
                  ? "border-emerald-400 bg-emerald-600/30 shadow-lg shadow-emerald-600/20 ring-1 ring-emerald-400"
                  : "border-teal-500/20 bg-slate-900/60 hover:bg-slate-900/90 hover:border-teal-500/40"
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-emerald-400 block">{stages[k].tier}</span>
              <span className="font-bold text-xs text-white block mt-0.5 group-hover:text-teal-200 transition-colors truncate">
                {stages[k].badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="relative z-10 mt-5 rounded-2xl border border-teal-500/30 bg-slate-950/80 p-5 backdrop-blur-md space-y-3 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between border-b border-teal-500/20 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h4 className="text-sm font-bold text-white font-sans">{curr.name}</h4>
          </div>
          <span className="rounded-full bg-teal-500/20 px-3 py-0.5 text-[11px] font-bold text-teal-300 border border-teal-500/30">
            {curr.badge}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block mb-0.5">
            Bản chất xử lý:
          </span>
          <p className="text-xs text-teal-100 font-sans leading-relaxed">
            {curr.summary}
          </p>
        </div>

        <div className="rounded-xl bg-teal-950/60 border border-teal-500/30 p-3 text-teal-200">
          <strong className="text-amber-300 block text-[11px] mb-1 font-bold">⚙️ CƠ CHẾ KỸ THUẬT:</strong>
          {curr.tech}
        </div>

        <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-3 text-emerald-200 font-sans text-xs">
          <strong className="text-emerald-300 font-bold block mb-1">🚀 Lợi ích hiệu năng vượt trội:</strong>
          {curr.gain}
        </div>
      </div>
    </div>
  );
}
