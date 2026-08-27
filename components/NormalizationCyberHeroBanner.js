"use client";

import React, { useState } from "react";
import { Layers, Database, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, Split, KeyRound, Cpu, Gauge, Zap } from "lucide-react";

export default function NormalizationCyberHeroBanner() {
  const [selectedLevel, setSelectedLevel] = useState("3nf");

  const levels = {
    "1nf": {
      name: "1NF (First Normal Form)",
      tier: "TẦNG 1: NGUYÊN TỐ",
      badge: "ATOMIC DOMAINS",
      summary: "Mọi thuộc tính đều chứa giá trị nguyên tố (Atomic Values), không chứa đa trị hay tập hợp lặp.",
      rule: "∀A ∈ U: Miền giá trị của A là đơn nguyên tử (không chia nhỏ được nữa).",
      eliminated: "Khử các cột đa trị (Multi-valued) và các nhóm thuộc tính lặp lại (Repeating groups).",
      color: "from-blue-600 to-cyan-600",
      accent: "border-blue-400 text-blue-800 bg-blue-50"
    },
    "2nf": {
      name: "2NF (Second Normal Form)",
      tier: "TẦNG 2: PHỤ THUỘC ĐẦY ĐỦ",
      badge: "NO PARTIAL DEPENDENCIES",
      summary: "Đạt 1NF + Mọi thuộc tính không khóa đều phụ thuộc hàm ĐẦY ĐỦ vào khóa chính.",
      rule: "∀A ∉ Khóa: A không phụ thuộc vào bất kỳ tập con thực sự nào của bất kỳ khóa nào.",
      eliminated: "Khử phụ thuộc bộ phận (Partial Dependency) — ngăn ngừa dị thường khi khóa chính gồm nhiều thuộc tính.",
      color: "from-emerald-600 to-teal-600",
      accent: "border-emerald-400 text-emerald-800 bg-emerald-50"
    },
    "3nf": {
      name: "3NF (Third Normal Form)",
      tier: "TẦNG 3: KHỬ BẮC CẦU",
      badge: "GOLD STANDARD (TIÊU CHUẨN VÀNG)",
      summary: "Đạt 2NF + Mọi thuộc tính không khóa KHÔNG phụ thuộc bắc cầu vào khóa chính.",
      rule: "∀(X → A) ∈ F: X là siêu khóa HOẶC A là thuộc tính khóa (thuộc ít nhất một khóa tối tiểu).",
      eliminated: "Khử phụ thuộc bắc cầu (Transitive Dependency) — dạng chuẩn phổ biến và tối ưu nhất trong công nghiệp.",
      color: "from-amber-600 to-orange-600",
      accent: "border-amber-400 text-amber-800 bg-amber-50"
    },
    "bcnf": {
      name: "BCNF (Boyce-Codd Normal Form)",
      tier: "TẦNG 4: SIÊU KHÓA VẾ TRÁI",
      badge: "STRICTEST FUNCTIONAL STANDARD",
      summary: "Dạng chuẩn 3NF mở rộng nghiêm ngặt: Vế trái của MỌI phụ thuộc hàm bắt buộc phải là Siêu khóa.",
      rule: "∀(X → A) ∈ F (với A ∉ X): X BẮT BUỘC PHẢI LÀ SIÊU KHÓA (X⁺ = U).",
      eliminated: "Khử hoàn toàn các dị thường phụ thuộc hàm còn sót lại mà 3NF chưa giải quyết được khi có nhiều khóa chồng lấn.",
      color: "from-purple-600 to-indigo-600",
      accent: "border-purple-400 text-purple-800 bg-purple-50"
    },
    "4nf": {
      name: "4NF / 5NF (Advanced Normal Forms)",
      tier: "TẦNG 5: ĐA TRỊ & PHÉP NỐI",
      badge: "MULTI-VALUED & JOIN DEPENDENCIES",
      summary: "Khử phụ thuộc đa trị (MVD: X ↠ Y) và phụ thuộc phép nối (Join Dependency) phức tạp.",
      rule: "∀(X ↠ Y): X là siêu khóa (4NF); Mọi phép nối bảo toàn thông tin đều xuất phát từ siêu khóa (5NF / PJNF).",
      eliminated: "Khử triệt để dư thừa dữ liệu trong các mô hình quan hệ nhiều-nhiều độc lập (n-way relationships).",
      color: "from-rose-600 to-pink-600",
      accent: "border-rose-400 text-rose-800 bg-rose-50"
    }
  };

  const curr = levels[selectedLevel];

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-2xl">
      {/* Background Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Top Banner Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-indigo-500/30 pb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
              <Database className="h-7 w-7 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-indigo-500/20 px-3 py-0.5 text-[11px] font-bold tracking-wider text-indigo-300 border border-indigo-500/40">
                CHƯƠNG VI &bull; MÔN HỆ CƠ SỞ DỮ LIỆU
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>DATABASE NORMALIZATION</span>
              </span>
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Chuẩn Hóa Cơ Sở Dữ Liệu
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200/80 mt-1 max-w-2xl">
              Nghệ thuật &amp; Kỹ thuật phân rã lược đồ quan hệ: Triệt tiêu 4 thảm họa dị thường, bảo toàn thông tin (Lossless Join) và bảo toàn trọn vẹn phụ thuộc hàm (Dependency Preservation).
            </p>
          </div>
        </div>

        {/* 2 Golden Criteria Highlights */}
        <div className="flex flex-wrap gap-2">
          <div className="rounded-xl border border-indigo-500/30 bg-indigo-900/40 px-3.5 py-2 text-left backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
              <Split className="h-3.5 w-3.5 text-cyan-400" />
              <span>Phép Tách Không Mất Thông Tin</span>
            </div>
            <span className="font-mono text-[10px] text-indigo-200">Lossless Join: R₁ ⋈ R₂ = R</span>
          </div>

          <div className="rounded-xl border border-indigo-500/30 bg-indigo-900/40 px-3.5 py-2 text-left backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Bảo Toàn Phụ Thuộc Hàm</span>
            </div>
            <span className="font-mono text-[10px] text-indigo-200">Dependency Preservation: (F₁ ∪ F₂)⁺ = F⁺</span>
          </div>
        </div>
      </div>

      {/* Interactive Pyramid Normal Form Navigation Bar */}
      <div className="relative z-10 mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-pink-400" />
            <span>Tháp Kim Tự Tháp 5 Tầng Chuẩn Hóa:</span>
          </span>
          <span className="text-[11px] text-indigo-300 font-mono">Bấm chọn từng tầng để khám phá</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {Object.keys(levels).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedLevel(k)}
              className={`group relative overflow-hidden rounded-xl border p-3 text-left transition-all ${
                selectedLevel === k
                  ? "border-indigo-400 bg-indigo-600/30 shadow-lg shadow-indigo-600/20 ring-1 ring-indigo-400"
                  : "border-indigo-500/20 bg-slate-900/60 hover:bg-slate-900/90 hover:border-indigo-500/40"
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-indigo-400 block">{levels[k].tier}</span>
              <span className="font-bold text-xs text-white block mt-0.5 group-hover:text-indigo-200 transition-colors">
                {k.toUpperCase()}
              </span>
              <span className="text-[9px] text-indigo-300/70 block truncate mt-0.5">{levels[k].badge}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Normal Form Deep-Dive Card */}
      <div className="relative z-10 mt-5 rounded-2xl border border-indigo-500/30 bg-slate-950/80 p-5 backdrop-blur-md space-y-3 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between border-b border-indigo-500/20 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h4 className="text-sm font-bold text-white font-sans">{curr.name}</h4>
          </div>
          <span className="rounded-full bg-indigo-500/20 px-3 py-0.5 text-[11px] font-bold text-indigo-300 border border-indigo-500/30">
            {curr.badge}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-0.5">
            Bản chất định nghĩa:
          </span>
          <p className="text-xs text-indigo-100 font-sans leading-relaxed">
            {curr.summary}
          </p>
        </div>

        <div className="rounded-xl bg-indigo-950/60 border border-indigo-500/30 p-3 text-indigo-200">
          <strong className="text-amber-300 block text-[11px] mb-1 font-bold">📐 ĐIỀU KIỆN TOÁN HỌC CHUẨN XÁC:</strong>
          {curr.rule}
        </div>

        <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-3 text-emerald-200 font-sans text-xs">
          <strong className="text-emerald-300 font-bold block mb-1">🛡️ Dị thường được khử triệt để:</strong>
          {curr.eliminated}
        </div>
      </div>
    </div>
  );
}
