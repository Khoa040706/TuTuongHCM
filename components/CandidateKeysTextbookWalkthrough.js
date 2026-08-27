"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Terminal, Layers } from "lucide-react";

export default function CandidateKeysTextbookWalkthrough() {
  const [selectedEx, setSelectedEx] = useState("ex1");

  const examples = {
    ex1: {
      id: "ex1",
      title: "Ví Dụ 1 (Giáo Trình)",
      schema: "U = ABCDEG",
      fds: "F = { A → BC, B → D, AD → E, CD → A }",
      partition: {
        ur: "UR = { A, B, C, D, E }",
        ul: "UL = { A, B, C, D }",
        n: "N = U \\ UR = { G }",
        d: "D = UR \\ UL = { E }",
        l: "L = U \\ (N ∪ D) = { A, B, C, D }"
      },
      solution: [
        "1) Kiểm tra N = {G}: (G)⁺ = {G} ≠ U ➔ G không phải là khóa duy nhất, cần kết hợp với các thuộc tính trong L.",
        "2) Thử các tập con Li ⊆ L có 1 phần tử (kết hợp với G):",
        "• Xét X = N ∪ {A} = GA: (GA)⁺ = {G, A, B, C, D, E} = U ➔ K₁ = AG là một khóa tối tiểu!",
        "• Xét X = N ∪ {B} = GB: (GB)⁺ = {G, B, D} ≠ U.",
        "• Xét X = N ∪ {C} = GC: (GC)⁺ = {G, C} ≠ U.",
        "• Xét X = N ∪ {D} = GD: (GD)⁺ = {G, D} ≠ U.",
        "3) Thử các tập con Li ⊆ L có 2 phần tử (không chứa A vì nhánh chứa A đã là khóa K₁ = AG):",
        "• Xét X = G ∪ {B, C} = GBC: (GBC)⁺ = ABCDEG = U ➔ K₂ = BCG là khóa thứ hai!",
        "• Xét X = G ∪ {C, D} = GCD: (GCD)⁺ = ABCDEG = U ➔ K₃ = CDG là khóa thứ ba!",
        "• Xét X = G ∪ {B, D} = GBD: (GBD)⁺ = {G, B, D} ≠ U."
      ],
      result: "Quan hệ có đúng 3 khóa tối tiểu: K₁ = AG, K₂ = BCG, K₃ = CDG"
    },
    ex2: {
      id: "ex2",
      title: "Ví Dụ 2 (Khóa Đơn Duy Nhất)",
      schema: "U = ABCD",
      fds: "F = { A → B, AB → C, A → CD }",
      partition: {
        ur: "UR = { B, C, D }",
        ul: "UL = { A, B }",
        n: "N = U \\ UR = { A }",
        d: "D = UR \\ UL = { C, D }",
        l: "L = U \\ (N ∪ D) = { B }"
      },
      solution: [
        "1) Tính tập N = U \\ UR = {A}.",
        "2) Tính bao đóng của N: (A)⁺ = {A, B, C, D} = U.",
        "3) Vì N⁺ = U ngay từ đầu, N = {A} chính là KHÓA DUY NHẤT của quan hệ R! Thuật toán dừng lại ngay tại bước 1 mà không cần xét tập L."
      ],
      result: "Quan hệ có duy nhất 1 khóa tối tiểu: K = A"
    },
    ex3: {
      id: "ex3",
      title: "Ví Dụ 3 (Bài Tập Tự Làm Trong Slide)",
      schema: "U = ABCDEG",
      fds: "F = { AE → C, CG → A, BD → G, GA → E }",
      partition: {
        ur: "UR = { A, C, E, G }",
        ul: "UL = { A, B, C, D, E, G }",
        n: "N = U \\ UR = { B, D }",
        d: "D = UR \\ UL = ∅",
        l: "L = U \\ (N ∪ D) = { A, C, E, G }"
      },
      solution: [
        "1) Tính N = U \\ UR = {B, D}. Tính (BD)⁺ = {B, D, G} ≠ U ➔ BD bắt buộc có trong mọi khóa, cần kết hợp thêm với tập L = {A, C, E, G}.",
        "2) Thử các tập con Li ⊆ L có 1 phần tử (kết hợp với BD):",
        "• Xét X = BD ∪ {A} = BDA: (BDA)⁺ = BDA ∪ {G, E, C} = ABCDEG = U ➔ K₁ = ABD là một khóa!",
        "• Xét X = BD ∪ {C} = BDC: (BDC)⁺ = BDC ∪ {G, A, E} = ABCDEG = U ➔ K₂ = BCD là khóa thứ hai!",
        "• Xét X = BD ∪ {E} = BDE: (BDE)⁺ = BDE ∪ {G} ≠ U (không suy ra được A, C).",
        "• Xét X = BD ∪ {G} = BDG: (BDG)⁺ = {B, D, G} ≠ U.",
        "3) Thử các tập con Li ⊆ L có 2 phần tử (không chứa A, C):",
        "• Xét X = BD ∪ {E, G} = BDEG: (BDEG)⁺ = BDEG ∪ {A (từ GA), C (từ AE)} = ABCDEG = U ➔ K₃ = BDEG là khóa thứ ba!"
      ],
      result: "Quan hệ có 3 khóa tối tiểu: K₁ = ABD, K₂ = BCD, K₃ = BDEG"
    }
  };

  const curr = examples[selectedEx];

  return (
    <div className="my-8 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">CandidateKeysTextbookWalkthrough</h3>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 border border-sky-200">
                Giải Chi Tiết 3 Ví Dụ Giáo Trình
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Lời giải chi tiết từng bước tìm tất cả các khóa cho Ví dụ 1, Ví dụ 2 và Ví dụ 3 tự làm
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-sky-100/80 p-1 border border-sky-200">
          {Object.keys(examples).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedEx(k)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedEx === k ? "bg-sky-600 text-white shadow-sm" : "text-sky-900 hover:text-sky-700"
              }`}
            >
              {examples[k].title.split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Input Info Box */}
      <div className="mt-5 rounded-xl bg-sky-50/70 border border-sky-200 p-4 font-mono text-xs text-sky-950 space-y-1">
        <div><strong>Lược đồ:</strong> {curr.schema} &bull; <strong>Tập phụ thuộc hàm:</strong> {curr.fds}</div>
        <div className="text-indigo-800 pt-1">
          <strong>Phân loại: </strong>
          {curr.partition.ur} | {curr.partition.ul} | <strong className="text-emerald-700">{curr.partition.n}</strong> | <strong className="text-rose-700">{curr.partition.d}</strong> | <strong className="text-amber-700">{curr.partition.l}</strong>
        </div>
      </div>

      {/* Solution Walkthrough Steps */}
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          TIẾN TRÌNH THUẬT TOÁN TỪNG BƯỚC:
        </h4>
        <div className="space-y-2 font-mono text-xs text-gray-800">
          {curr.solution.map((line, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-gray-50/80 border border-gray-100 leading-relaxed font-sans text-xs">
              {line}
            </div>
          ))}
        </div>

        {/* Final Result Card */}
        <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-300 p-3.5 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-emerald-950 uppercase">KẾT LUẬN CUỐI CÙNG:</span>
          <span className="font-bold text-emerald-800 bg-emerald-200/60 px-3 py-1 rounded border border-emerald-300">
            {curr.result}
          </span>
        </div>
      </div>
    </div>
  );
}
