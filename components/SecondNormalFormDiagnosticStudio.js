"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Zap, Award, Layers, Sparkles } from "lucide-react";

export default function SecondNormalFormDiagnosticStudio() {
  const [activeTheorem, setActiveTheorem] = useState(1);

  const theorems = [
    {
      id: 1,
      title: "Định Lý 1: Khóa Đơn Duy Nhất (|K| = 1)",
      statement: "Nếu R chỉ có duy nhất 1 khóa K và |K| = 1 (khóa chỉ có đúng 1 thuộc tính) ⟹ R LUÔN ĐẠT 2NF!",
      reason: "Vì khóa chỉ có 1 thuộc tính, nên không tồn tại bất kỳ tập con thực sự nào khác rỗng của khóa. Do đó không thể xảy ra hiện tượng phụ thuộc hàm bộ phận.",
      example: "Cho R(ABCD), F = { A→BC, B→D } có khóa duy nhất K = {A}. Vì |K| = 1 nên R chắc chắn đạt 2NF mà không cần xét từng FD!",
      badge: "QUY TẮC VÀNG 1",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 2,
      title: "Định Lý 2: Toàn Bộ Là Thuộc Tính Khóa",
      statement: "Nếu TẤT CẢ các thuộc tính của R đều là thuộc tính khóa (tập không khóa = ∅) ⟹ R LUÔN ĐẠT 2NF!",
      reason: "Định nghĩa 2NF chỉ cấm thuộc tính KHÔNG KHÓA phụ thuộc vào bộ phận của khóa. Nếu không có thuộc tính không khóa nào thì không có đối tượng nào để vi phạm.",
      example: "Cho R(CSZ), F = { CS→Z, Z→C } có 2 khóa K₁ = CS, K₂ = SZ. Tập thuộc tính khóa = {C, S, Z} = U ⟹ R luôn đạt 2NF!",
      badge: "QUY TẮC VÀNG 2",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 3,
      title: "Định Lý 3: Tất Cả Các Khóa Đều Là Khóa Đơn",
      statement: "Nếu MỌI khóa dự tuyển của R đều chỉ gồm đúng 1 thuộc tính ⟹ R LUÔN ĐẠT 2NF!",
      reason: "Khi mọi khóa đều có kích thước bằng 1, không có khóa nào có tập con thực sự khác rỗng để sinh ra phụ thuộc bộ phận.",
      example: "Cho R(ABC), K₁ = {A}, K₂ = {B}. Cả 2 khóa đều có 1 thuộc tính ⟹ R đạt 2NF.",
      badge: "QUY TẮC VÀNG 3",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Định Lý 4: Giới Hạn Của 2NF (Vẫn Còn Dư Thừa)",
      statement: "Một lược đồ quan hệ đạt 2NF VẪN CÓ THỂ CÒN CHỨA SỰ TRÙNG LẶP DỮ LIỆU!",
      reason: "2NF chỉ mới triệt tiêu phụ thuộc hàm bộ phận vào khóa, nhưng CHƯA triệt tiêu được phụ thuộc hàm bắc cầu (Transitive Dependency) giữa các thuộc tính không khóa với nhau.",
      example: "R(maNV, tenNV, maPB, tenPB) với maNV→maPB và maPB→tenPB. R đạt 2NF nhưng tenPB bị lặp lại theo maPB ⟹ Cần 3NF!",
      badge: "ĐỘNG LỰC LÊN 3NF",
      color: "from-amber-600 to-orange-600"
    }
  ];

  const curr = theorems[activeTheorem - 1];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SecondNormalFormDiagnosticStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                4 Nhận Xét Thần Tốc 2NF
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cỗ máy chẩn đoán 2NF hình thức &amp; 4 quy tắc vàng nhận diện nhanh dạng chuẩn 2 không cần kiểm tra từng FD
            </p>
          </div>
        </div>

        {/* Theorem Selector */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          {[1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveTheorem(idx)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                activeTheorem === idx ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
              }`}
            >
              Quy Tắc {idx}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="mt-5 grid gap-2 sm:grid-cols-4">
        {theorems.map((t) => (
          <div
            key={t.id}
            onClick={() => setActiveTheorem(t.id)}
            className={`cursor-pointer rounded-xl border p-3 transition-all ${
              activeTheorem === t.id
                ? "border-indigo-500 bg-indigo-50 shadow-sm"
                : "border-gray-200 bg-white hover:bg-gray-50 opacity-70"
            }`}
          >
            <span className="font-mono text-[10px] font-bold text-indigo-700 block">{t.badge}</span>
            <span className="text-xs font-bold text-gray-900 font-sans block mt-0.5 truncate">{t.title.split(": ")[1]}</span>
          </div>
        ))}
      </div>

      {/* Selected Theorem Deep Dive */}
      <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-indigo-950 font-sans">{curr.title}</h4>
          <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
            {curr.badge}
          </span>
        </div>

        <div className="rounded-lg bg-indigo-50 p-3 text-indigo-950 font-bold border border-indigo-200 font-sans text-xs">
          {curr.statement}
        </div>

        <p className="text-xs text-gray-700 font-sans font-medium leading-relaxed">
          <strong>Lý giải toán học: </strong>{curr.reason}
        </p>

        <div className="rounded-lg bg-emerald-50 p-3 text-emerald-950 font-sans border border-emerald-200 leading-relaxed text-xs">
          <strong className="block text-emerald-900 font-bold mb-0.5">💡 Ví dụ thực chứng:</strong>
          {curr.example}
        </div>
      </div>
    </div>
  );
}
