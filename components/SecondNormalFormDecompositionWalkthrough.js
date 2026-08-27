"use client";

import React, { useState } from "react";
import { Split, CheckCircle2, XCircle, ArrowRight, Sparkles, BookOpen, Layers, Copy, Check } from "lucide-react";

export default function SecondNormalFormDecompositionWalkthrough() {
  const [selectedEx, setSelectedEx] = useState("ex1");
  const [copied, setCopied] = useState(false);

  const examples = {
    ex1: {
      title: "Ví Dụ 1: R(ABCD)",
      schema: "R(A, B, C, D)",
      fds: "F = { AB → C, A → D, BD → C }",
      keys: "Khóa K = { A, B, D }",
      prime: "{ A, B, D }",
      nonPrime: "{ C }",
      diagnosis: "KHÔNG ĐẠT 2NF (Vi phạm tại AB → C)",
      reason: "Xét phụ thuộc hàm AB → C: Vế trái AB là tập con thực sự của khóa K = ABD (AB ⊂ K), mà vế phải C là thuộc tính không khóa. Do đó C phụ thuộc bộ phận vào khóa.",
      decomp: "Phân rã thành 2 lược đồ con đạt 2NF:\n• R₁(A, B, C) với F₁ = { AB → C }, Khóa: AB\n• R₂(A, B, D) với F₂ = { A → D }, Khóa: ABD"
    },
    ex2: {
      title: "Ví Dụ 2: R(CSZ)",
      schema: "R(C, S, Z)",
      fds: "F = { CS → Z, Z → C }",
      keys: "K₁ = CS, K₂ = SZ",
      prime: "{ C, S, Z } = U",
      nonPrime: "∅ (Không có)",
      diagnosis: "ĐẠT 2NF (Áp dụng Định lý 2)",
      reason: "Tất cả các thuộc tính của quan hệ đều là thuộc tính khóa (thuộc K₁ hoặc K₂). Do không có bất kỳ thuộc tính không khóa nào nên quan hệ tự động đạt 2NF!",
      decomp: "Không cần phân rã vì lược đồ ban đầu đã đạt chuẩn 2NF."
    },
    ex3: {
      title: "Ví Dụ 3: R(ABCD) Khóa Đơn",
      schema: "R(A, B, C, D)",
      fds: "F = { A → BC, B → D }",
      keys: "Khóa duy nhất K = { A }",
      prime: "{ A }",
      nonPrime: "{ B, C, D }",
      diagnosis: "ĐẠT 2NF (Áp dụng Định lý 1)",
      reason: "Quan hệ có khóa duy nhất K = {A} chỉ gồm 1 thuộc tính đơn (|K| = 1). Không tồn tại tập con thực sự khác rỗng nào của khóa để gây ra phụ thuộc bộ phận.",
      decomp: "Lược đồ đã đạt 2NF (nhưng còn vi phạm 3NF do phụ thuộc bắc cầu A → B và B → D)."
    },
    ex4: {
      title: "Ví Dụ 4: CungCap Thực Tế",
      schema: "CungCap(maNCC, sanPham, tenNCC, diaChi, gia)",
      fds: "F = { maNCC → tenNCC, diaChi; {maNCC, sanPham} → gia }",
      keys: "Khóa K = { maNCC, sanPham }",
      prime: "{ maNCC, sanPham }",
      nonPrime: "{ tenNCC, diaChi, gia }",
      diagnosis: "KHÔNG ĐẠT 2NF (Vi phạm tại maNCC → tenNCC, diaChi)",
      reason: "maNCC là tập con của khóa {maNCC, sanPham}, nhưng lại xác định hàm các thuộc tính không khóa tenNCC, diaChi ⇒ Phụ thuộc bộ phận!",
      decomp: "Thuật toán phân rã về 2NF:\n• NhaCungCap(maNCC, tenNCC, diaChi) — Khóa: maNCC (Đạt 2NF)\n• CungCap(maNCC, sanPham, gia) — Khóa: {maNCC, sanPham} (Đạt 2NF)"
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
              <h3 className="text-xl font-bold text-gray-900">SecondNormalFormDecompositionWalkthrough</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Giải Chi Tiết 4 Ví Dụ Giáo Trình
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phân tích từng bước: Tìm khóa &rarr; Phân loại Prime &rarr; Chẩn đoán 2NF &rarr; Thuật toán phân rã tách bảng
            </p>
          </div>
        </div>

        {/* Example Switcher */}
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
        <div><strong>Lược đồ:</strong> {curr.schema} &bull; <strong>Tập F:</strong> {curr.fds}</div>
        <div className="text-indigo-800"><strong>Khóa:</strong> {curr.keys} | <strong>Prime:</strong> {curr.prime} | <strong>Non-prime:</strong> {curr.nonPrime}</div>
      </div>

      {/* Diagnosis Card */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="font-bold text-gray-700 font-sans">KẾT QUẢ CHẨN ĐOÁN DẠNG CHUẨN 2:</span>
          <span className={`font-bold px-2.5 py-0.5 rounded border text-[11px] ${
            curr.diagnosis.includes("KHÔNG")
              ? "bg-rose-100 text-rose-900 border-rose-300"
              : "bg-emerald-100 text-emerald-900 border-emerald-300"
          }`}>
            {curr.diagnosis}
          </span>
        </div>

        <div className="space-y-1 text-gray-700 font-sans text-xs leading-relaxed">
          <strong className="text-gray-900 block font-bold">🔍 Phân tích chi tiết vi phạm / đạt chuẩn:</strong>
          <p>{curr.reason}</p>
        </div>

        <div className="rounded-lg bg-indigo-50/80 p-3.5 border border-indigo-200 space-y-1">
          <strong className="text-indigo-950 block font-bold font-sans text-xs">⚙️ THUẬT TOÁN PHÂN RÃ CHUẨN HÓA VỀ 2NF:</strong>
          <pre className="text-indigo-900 whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.decomp}</pre>
        </div>
      </div>
    </div>
  );
}
