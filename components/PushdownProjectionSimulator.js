"use client";

import React, { useState } from "react";
import { Split, ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Layers, ShieldAlert } from "lucide-react";

export default function PushdownProjectionSimulator() {
  const [selectedCase, setSelectedCase] = useState("l10_cartesian");

  const casesData = {
    l10_cartesian: {
      title: "Luật L10: Hoán Vị Phép Chiếu với Tích Đề-các (Cartesian Product)",
      ruleBadge: "L10 PROJECTION × CARTESIAN",
      before: "π_{A, D} ( E₁(A, B, C) × E₂(D, E, G) )",
      after: "π_A(E₁(A, B, C)) × π_D(E₂(D, E, G))",
      details: "Danh sách chiếu chỉ cần {A, D}. Thuộc tính A thuộc E₁, thuộc tính D thuộc E₂. Các cột {B, C} của E₁ và {E, G} của E₂ hoàn toàn không cần thiết cho kết quả cuối cùng.",
      benefit: "Loại bỏ 4 cột thừa (B, C, E, G) trước khi thực hiện tích Đề-các. Dung lượng mỗi dòng trong bộ nhớ RAM giảm từ 6 cột xuống chỉ còn 2 cột ➔ Tiết kiệm bộ đệm đĩa (Buffer memory) gấp 3 lần!"
    },
    l11_union: {
      title: "Luật L11: Giao Hoán Phép Chiếu với Phép Hợp (Union)",
      ruleBadge: "L11 PROJECTION ∪ UNION",
      before: "π_{MaSV, HoTen} ( SV_HaNoi ∪ SV_TPHCM )",
      after: "π_{MaSV, HoTen}(SV_HaNoi) ∪ π_{MaSV, HoTen}(SV_TPHCM)",
      details: "Thực hiện chiếu lấy (MaSV, HoTen) trên từng quan hệ con trước khi đưa vào toán tử Hợp (Union).",
      benefit: "Giảm kích thước tập dữ liệu của từng nhánh trước khi thực hiện thao tác khử trùng lặp (Duplicate Elimination) của phép Hợp ➔ Tăng tốc độ sắp xếp/Hash bảng."
    },
    difference_warning: {
      title: "Cảnh Báo: Phép Chiếu với Phép Hiệu (Set Difference \\)",
      ruleBadge: "EXCEPTION: KHÔNG CÓ QUY TẮC TỔNG QUÁT",
      before: "π_A ( E₁ \\ E₂ ) ≠ π_A(E₁) \\ π_A(E₂)",
      after: "KHÔNG ĐƯỢC TỰ Ý ĐẨY PHÉP CHIẾU XUỐNG DƯỚI PHÉP HIỆU!",
      details: "Xét ví dụ: E₁ = {(1, 'x'), (1, 'y')}, E₂ = {(1, 'x')}.\n• Vế trái: E₁ \\ E₂ = {(1, 'y')} ➔ π_A(E₁ \\ E₂) = {(1)}.\n• Vế phải: π_A(E₁) = {(1)}, π_A(E₂) = {(1)} ➔ π_A(E₁) \\ π_A(E₂) = ∅ (Rỗng!).\nHai kết quả HOÀN TOÀN KHÁC NHAU!",
      benefit: "Quy tắc cấm kỵ: KHÔNG ĐƯỢC ĐẨY PHÉP CHIẾU XUỐNG TRƯỚC PHÉP HIỆU vì sẽ làm sai lệch ngữ nghĩa toán học."
    }
  };

  const curr = casesData[selectedCase];

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-cyan-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <Split className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">PushdownProjectionSimulator</h3>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                Mô Phỏng Đẩy Phép Chiếu (π) Xuống Sâu (Mục 3.3)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cơ chế loại bỏ sớm các thuộc tính dư thừa nhằm thu hẹp độ rộng bản ghi trong bộ nhớ
            </p>
          </div>
        </div>

        {/* Case Switcher */}
        <div className="flex flex-wrap rounded-xl bg-blue-100/80 p-1 border border-blue-200 gap-1">
          {Object.keys(casesData).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedCase(k)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedCase === k ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:text-blue-700"
              }`}
            >
              {casesData[k].ruleBadge}
            </button>
          ))}
        </div>
      </div>

      {/* Case Inspector */}
      <div className="mt-5 space-y-4 font-mono text-xs">
        <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <h4 className="text-sm font-bold text-blue-950 font-sans">{curr.title}</h4>
            <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {curr.ruleBadge}
            </span>
          </div>

          {/* Transformation Formula Comparison */}
          <div className="grid gap-3 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-4 space-y-2">
              <span className="text-[10px] font-bold text-gray-600 font-sans block uppercase">
                1. Biểu thức ban đầu:
              </span>
              <div className="rounded-lg bg-slate-900 p-3 text-cyan-300 font-mono text-xs text-center shadow-inner">
                {curr.before}
              </div>
            </div>

            <div className={`rounded-xl border p-4 space-y-2 ${
              selectedCase === "difference_warning"
                ? "border-red-300 bg-red-50/70"
                : "border-emerald-300 bg-emerald-50/70"
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold font-sans block uppercase ${
                  selectedCase === "difference_warning" ? "text-red-800" : "text-emerald-800"
                }`}>
                  2. Biến đổi sau tối ưu:
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  selectedCase === "difference_warning"
                    ? "bg-red-200 text-red-900"
                    : "bg-emerald-200 text-emerald-900"
                }`}>
                  {selectedCase === "difference_warning" ? "CẤM ÁP DỤNG ✗" : "HỢP LỆ ✓"}
                </span>
              </div>
              <div className={`rounded-lg bg-slate-900 p-3 font-mono text-xs text-center shadow-inner font-bold ${
                selectedCase === "difference_warning" ? "text-red-400" : "text-emerald-300"
              }`}>
                {curr.after}
              </div>
            </div>
          </div>

          {/* Explanations */}
          <div className="space-y-2 font-sans text-xs">
            <div className="rounded-lg bg-blue-50/70 p-3 border border-blue-200 text-blue-950">
              <strong className="text-blue-900 block font-bold mb-0.5">🔍 PHÂN TÍCH CHI TIẾT:</strong>
              <pre className="whitespace-pre-wrap font-sans text-xs text-blue-950 leading-relaxed">{curr.details}</pre>
            </div>

            <div className={`rounded-lg p-3 border leading-relaxed ${
              selectedCase === "difference_warning"
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}>
              <strong className="block font-bold mb-0.5">
                {selectedCase === "difference_warning" ? "⚠️ LƯU Ý SỐNG CÒN:" : "⚡ LỢI ÍCH TIẾT KIỆM BỘ ĐỆM:"}
              </strong>
              {curr.benefit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
