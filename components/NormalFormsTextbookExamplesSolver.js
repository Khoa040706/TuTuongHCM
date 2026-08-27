"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, XCircle, ArrowRight, Sparkles, Layers, Split } from "lucide-react";

export default function NormalFormsTextbookExamplesSolver() {
  const [selectedEx, setSelectedEx] = useState("ex1");

  const examples = {
    ex1: {
      title: "Bài 1: SALES(Cust_ID...)",
      schema: "SALES(Cust_ID, Name, Salesperson, Region)",
      fds: "F = { Cust_ID → Name, Salesperson, Region; Salesperson → Region }",
      key: "Khóa K = { Cust_ID }",
      diagnosis2NF: "ĐẠT 2NF (Vì |K| = 1)",
      diagnosis3NF: "KHÔNG ĐẠT 3NF (Bắc cầu: Cust_ID → Salesperson → Region)",
      diagnosisBCNF: "KHÔNG ĐẠT BCNF (Salesperson không là siêu khóa)",
      decomp: "Phân rã chuẩn hóa về 3NF & BCNF:\n• SALES1(Cust_ID, Name, Salesperson) — Khóa: Cust_ID (Đạt BCNF)\n• SPERSON(Salesperson, Region) — Khóa: Salesperson (Đạt BCNF)"
    },
    ex2: {
      title: "Bài 2: KeHoachThi",
      schema: "Thi(ngThi, gioThi, phThi, maMH, gvDay)",
      fds: "F = { {ngThi, gioThi, phThi} → maMH; maMH → gvDay }",
      key: "Khóa K = { ngThi, gioThi, phThi }",
      diagnosis2NF: "ĐẠT 2NF (Tất cả vế trái không là tập con thực sự của khóa)",
      diagnosis3NF: "KHÔNG ĐẠT 3NF (Bắc cầu: Khóa → maMH → gvDay)",
      diagnosisBCNF: "KHÔNG ĐẠT BCNF (maMH không là siêu khóa)",
      decomp: "Phân rã chuẩn hóa về 3NF & BCNF:\n• LichThi(ngThi, gioThi, phThi, maMH) — Khóa: {ngThi, gioThi, phThi}\n• GiangVienMon(maMH, gvDay) — Khóa: maMH"
    },
    ex3: {
      title: "Bài 3: R(CSZ)",
      schema: "R(C, S, Z)",
      fds: "F = { CS → Z, Z → C }",
      key: "Khóa K₁ = CS, K₂ = SZ (Tập thuộc tính khóa = {C, S, Z})",
      diagnosis2NF: "ĐẠT 2NF (Tất cả là thuộc tính khóa)",
      diagnosis3NF: "ĐẠT 3NF (Trong Z → C, C là thuộc tính khóa)",
      diagnosisBCNF: "KHÔNG ĐẠT BCNF (Trong Z → C, Z⁺ = ZC ≠ CSZ ⟹ Z không là siêu khóa)",
      decomp: "Phân rã BCNF (sẽ làm mất phụ thuộc hàm CS → Z):\n• R₁(Z, C) — Khóa: Z (Đạt BCNF)\n• R₂(S, Z) — Khóa: SZ (Đạt BCNF)"
    },
    ex4: {
      title: "Bài 4: R(ASIP)",
      schema: "R(A, S, I, P)",
      fds: "F = { SI → P, S → A }",
      key: "Khóa duy nhất K = { S, I }",
      diagnosis2NF: "KHÔNG ĐẠT 2NF (S ⊂ SI và A là thuộc tính không khóa)",
      diagnosis3NF: "KHÔNG ĐẠT 3NF (Do không đạt 2NF)",
      diagnosisBCNF: "KHÔNG ĐẠT BCNF (Do không đạt 3NF)",
      decomp: "Phân rã chuẩn hóa:\n• R₁(S, A) — Khóa: S (Đạt BCNF)\n• R₂(S, I, P) — Khóa: SI (Đạt BCNF)"
    }
  };

  const curr = examples[selectedEx];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">NormalFormsTextbookExamplesSolver</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Giải Chi Tiết 4 Bài Tập 3NF &amp; BCNF
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Đánh giá toàn diện 2NF, 3NF, BCNF và quy trình phân rã lược đồ của từng ví dụ giáo trình
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-teal-100/80 p-1 border border-teal-200">
          {Object.keys(examples).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedEx(k)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedEx === k ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
              }`}
            >
              {examples[k].title.split(": ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Schema Context */}
      <div className="mt-5 rounded-xl bg-teal-50/70 border border-teal-200 p-4 font-mono text-xs text-teal-950 space-y-1">
        <div><strong>Lược đồ:</strong> {curr.schema}</div>
        <div><strong>Tập F:</strong> {curr.fds}</div>
        <div className="text-indigo-800 font-bold">{curr.key}</div>
      </div>

      {/* 3 Form Diagnoses */}
      <div className="mt-4 grid gap-2 sm:grid-cols-3 font-mono text-xs">
        <div className="p-3 rounded-lg border bg-white border-gray-200 space-y-0.5">
          <span className="text-gray-500 font-sans text-[11px] block">Dạng Chuẩn 2 (2NF):</span>
          <strong className={`font-sans text-xs ${curr.diagnosis2NF.includes("KHÔNG") ? "text-red-700" : "text-emerald-700"}`}>
            {curr.diagnosis2NF}
          </strong>
        </div>

        <div className="p-3 rounded-lg border bg-white border-gray-200 space-y-0.5">
          <span className="text-gray-500 font-sans text-[11px] block">Dạng Chuẩn 3 (3NF):</span>
          <strong className={`font-sans text-xs ${curr.diagnosis3NF.includes("KHÔNG") ? "text-red-700" : "text-emerald-700"}`}>
            {curr.diagnosis3NF}
          </strong>
        </div>

        <div className="p-3 rounded-lg border bg-white border-gray-200 space-y-0.5">
          <span className="text-gray-500 font-sans text-[11px] block">Dạng Chuẩn Boyce-Codd (BCNF):</span>
          <strong className={`font-sans text-xs ${curr.diagnosisBCNF.includes("KHÔNG") ? "text-red-700" : "text-emerald-700"}`}>
            {curr.diagnosisBCNF}
          </strong>
        </div>
      </div>

      {/* Decomposition Solution */}
      <div className="mt-4 rounded-xl bg-indigo-50/80 p-4 border border-indigo-200 space-y-1 font-mono text-xs">
        <strong className="text-indigo-950 block font-bold font-sans text-xs">⚙️ THUẬT TOÁN PHÂN RÃ CHUẨN HÓA VỀ 3NF / BCNF:</strong>
        <pre className="text-indigo-900 whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.decomp}</pre>
      </div>
    </div>
  );
}
