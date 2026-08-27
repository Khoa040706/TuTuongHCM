"use client";

import React, { useState } from "react";
import { KeyRound, ArrowRight, ShieldCheck, Cpu, Database, Sparkles, CheckCircle2, ChevronRight, Terminal, RefreshCw, Layers } from "lucide-react";

export default function FunctionalDependenciesCyberHeroBanner() {
  const [activePillar, setActivePillar] = useState("fd_concept"); // 'fd_concept' | 'armstrong' | 'closure' | 'keys'

  const pillars = {
    fd_concept: {
      id: "fd_concept",
      name: "1. Bản Chất Phụ Thuộc Hàm (X → Y)",
      badge: "ĐỊNH NGHĨA HÌNH THỨC",
      subtitle: "Quan hệ ánh xạ logic xác định giá trị giữa các tập thuộc tính",
      formula: "∀ t1, t2 ∈ r : (t1[X] = t2[X] ⇒ t1[Y] = t2[Y])",
      explanation: "Nếu hai dòng (tuples) bất kỳ trong quan hệ r có cùng giá trị trên tập thuộc tính X, thì chúng BẮT BUỘC PHẢI có cùng giá trị trên tập thuộc tính Y.",
      example: "Ví dụ: maSV → {hotenSV, ngSinh, maKhoa} (Mỗi mã sinh viên xác định duy nhất 1 họ tên, ngày sinh và khoa)."
    },
    armstrong: {
      id: "armstrong",
      name: "2. Hệ Tiên Đề Armstrong (Armstrong's Axioms)",
      badge: "6 QUY TẮC TOÁN HỌC",
      subtitle: "Bộ quy tắc suy diễn logic chuẩn xác và hoàn chỉnh cho phụ thuộc hàm",
      formula: "• Phản xạ: Y ⊆ X ⇒ X → Y\n• Tăng trưởng: X → Y ⇒ XZ → YZ\n• Bắc cầu: X → Y ∧ Y → Z ⇒ X → Z\n• Hợp: X → Y ∧ X → Z ⇒ X → YZ\n• Tách: X → YZ ⇒ X → Y ∧ X → Z\n• Tựa bắc cầu: X → Y ∧ WY → Z ⇒ WX → Z",
      explanation: "Hệ tiên đề Armstrong gồm 3 luật cơ bản (Sound & Complete) và 3 luật dẫn xuất, cho phép suy diễn tất cả các phụ thuộc hàm logic được thỏa mãn trong CSDL.",
      example: "Ứng dụng: Dùng để chứng minh một phụ thuộc hàm mới được suy dẫn từ tập F ban đầu."
    },
    closure: {
      id: "closure",
      name: "3. Cỗ Máy Tính Bao Đóng (X⁺ Closure Engine)",
      badge: "THUẬT TOÁN ĐA THỨC O(N²)",
      subtitle: "Tìm tập hợp tất cả các thuộc tính được xác định hàm bởi tập X dưới tập F",
      formula: "X⁽⁰⁾ = X\nLặp: X⁽ⁱ⁺¹⁾ = X⁽ⁱ⁾ ∪ Z (với mỗi W → Z ∈ F sao cho W ⊆ X⁽ⁱ⁾)\nDừng khi: X⁽ⁱ⁺¹⁾ = X⁽ⁱ⁾ ⇒ X⁺ = X⁽ⁱ⁾",
      explanation: "Bao đóng X⁺ là nền tảng cốt lõi để: 1) Kiểm tra xem X → Y có thuộc F⁺ hay không; 2) Xác định xem X có phải là Siêu khóa (Superkey) hay không (nếu X⁺ = U).",
      example: "Ví dụ: Cho U = {A, B, C, D}, F = {A → B, B → C}. Khi đó: A⁺ = {A, B, C}."
    },
    keys: {
      id: "keys",
      name: "4. Thuật Toán Tìm Khóa Tối Tiểu (Candidate Keys)",
      badge: "PHÂN LOẠI L / R / M / D",
      subtitle: "Xác định tập mọi Khóa chính & Khóa dự viên tối tiểu của lược đồ",
      formula: "• L (Chỉ ở Trái): Luôn nằm trong MỌI khóa\n• R (Chỉ ở Phải): KHÔNG BAO GIỜ có trong khóa\n• M (Ở Cả Hai Vế): Cần thử nghiệm tổ hợp\n• D (Độc Lập): Luôn nằm trong MỌI khóa",
      explanation: "Khóa dự viên (Candidate Key) là một siêu khóa tối tiểu K sao cho K⁺ = U và không tồn tại tập con thực sự K' ⊂ K thỏa K'⁺ = U.",
      example: "Bước 1: Tính K_gốc = L ∪ D. Nếu K_gốc⁺ = U ⇒ K_gốc là khóa duy nhất!"
    }
  };

  const curr = pillars[activePillar];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-2xl">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      <div className="relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
              <KeyRound className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-400">
                  HỆ CƠ SỞ DỮ LIỆU • CHƯƠNG V
                </span>
                <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-300 border border-indigo-400/30">
                  LÝ THUYẾT CHUẨN HÓA CSDL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-0.5">
                Phụ Thuộc Hàm & Khóa (Functional Dependencies & Keys)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-indigo-900/40 px-3.5 py-1.5 border border-indigo-500/30 font-mono text-xs text-indigo-200">
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span>Armstrong Axioms & Closure Engine</span>
          </div>
        </div>

        {/* Subtitle Description */}
        <p className="mt-4 text-xs sm:text-sm text-indigo-200/90 leading-relaxed max-w-4xl">
          Nền tảng toán học và lý thuyết chuẩn hóa cơ sở dữ liệu quan hệ: Định nghĩa Phụ thuộc hàm (FD: X &rarr; Y), Hệ tiên đề Armstrong, Thuật toán tính Bao đóng tập thuộc tính (X⁺), Thuật toán xác định Khóa chính &amp; Siêu khóa tối tiểu (Candidate Keys) và Phủ tối thiểu (Minimal Cover).
        </p>

        {/* 4 Interactive Pillar Tabs */}
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {Object.keys(pillars).map((key) => {
            const p = pillars[key];
            const isSelected = activePillar === key;

            return (
              <button
                key={key}
                onClick={() => setActivePillar(key)}
                className={`flex flex-col justify-between rounded-2xl p-4 text-left font-mono transition-all border ${
                  isSelected
                    ? "bg-gradient-to-br from-indigo-600/90 to-purple-600/90 border-cyan-400 shadow-lg shadow-indigo-500/25 ring-2 ring-cyan-400/40"
                    : "bg-slate-900/60 border-indigo-500/20 hover:bg-indigo-950/40 hover:border-indigo-400/40"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? "text-cyan-200" : "text-indigo-400"}`}>
                    {p.badge}
                  </span>
                  <span className="mt-1 text-xs font-bold text-white block">{p.name}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] opacity-80">
                  <span className="truncate">{p.subtitle}</span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 ml-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Panel */}
        <div className="mt-5 rounded-2xl border border-indigo-500/30 bg-slate-900/80 p-5 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-500/20 pb-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                {curr.name}
              </h3>
              <p className="text-xs text-indigo-300 mt-0.5">{curr.subtitle}</p>
            </div>
            <span className="rounded-lg bg-indigo-500/20 px-3 py-1 font-mono text-xs font-bold text-cyan-300 border border-indigo-400/30">
              {curr.badge}
            </span>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {/* Left: Formula / Logic */}
            <div className="rounded-xl border border-indigo-500/30 bg-black/40 p-4">
              <span className="font-mono text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-1.5">
                CÔNG THỨC TOÁN HỌC / NGUYÊN LÝ:
              </span>
              <pre className="font-mono text-xs text-cyan-300 whitespace-pre-wrap leading-relaxed">
                {curr.formula}
              </pre>
            </div>

            {/* Right: Explanation & Practical Application */}
            <div className="flex flex-col justify-between rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-4 space-y-2">
              <div>
                <span className="font-mono text-[11px] font-bold text-purple-300 uppercase tracking-wider block mb-1">
                  Ý NGHĨA HỌC THUẬT &amp; BẢN CHẤT:
                </span>
                <p className="text-xs text-indigo-100 leading-relaxed">
                  {curr.explanation}
                </p>
              </div>

              <div className="rounded-lg bg-indigo-900/40 p-2.5 border border-indigo-500/30 text-xs text-cyan-200 font-mono">
                💡 {curr.example}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
