"use client";

import React, { useState } from "react";
import { Filter, ArrowRight, CheckCircle2, Split, Sparkles, Layers, ArrowDown } from "lucide-react";

export default function PushdownSelectionSimulator() {
  const [selectedCase, setSelectedCase] = useState("hq1");

  const casesData = {
    l6_basic: {
      title: "Luật L6 Cơ Bản: Điều kiện F chỉ liên quan đến E₁",
      ruleBadge: "L6 BASIC",
      before: "σ_{A > 100} ( E₁(A, B) × E₂(C, D) )",
      after: "σ_{A > 100}(E₁(A, B)) × E₂(C, D)",
      explanation: "Điều kiện lọc A > 100 chỉ cần kiểm tra trên bảng E₁. Do đó, ta đẩy thẳng phép chọn σ_{A > 100} xuống lá E₁ trước khi thực hiện tích Đề-các.",
      benefit: "Bảng E₁ sau khi lọc chỉ còn rất ít dòng ➔ Tích Đề-các giảm dung lượng tuyến tính theo hệ số lọc của A > 100."
    },
    hq1: {
      title: "Hệ Quả 1: Điều kiện F = F₁ ∧ F₂ (F₁ trên E₁, F₂ trên E₂)",
      ruleBadge: "L6 HỆ QUẢ 1",
      before: "σ_{(A > 100) ∧ (D = 'HCM')} ( E₁(A, B) × E₂(C, D) )",
      after: "σ_{A > 100}(E₁(A, B)) × σ_{D = 'HCM'}(E₂(C, D))",
      explanation: "Tách điều kiện logic AND (∧) thành 2 phép chọn độc lập: đẩy σ_{A > 100} xuống lá E₁ và đẩy σ_{D = 'HCM'} xuống lá E₂.",
      benefit: "CẢ HAI bảng E₁ và E₂ đều được thu nhỏ trước khi nhân ➔ Dung lượng tích Đề-các giảm theo cấp số nhân (tỷ lệ lọc E₁ × tỷ lệ lọc E₂)!"
    },
    hq2: {
      title: "Hệ Quả 2: F₁ trên E₁, F₂ liên quan cả E₁ và E₂",
      ruleBadge: "L6 HỆ QUẢ 2",
      before: "σ_{(A > 100) ∧ (B = C)} ( E₁(A, B) × E₂(C, D) )",
      after: "σ_{B = C} ( σ_{A > 100}(E₁(A, B)) × E₂(C, D) )",
      explanation: "F₁ (A > 100) chỉ thuộc E₁ nên đẩy xuống lá E₁. F₂ (B = C) là điều kiện nối liên quan cả 2 bảng nên giữ lại ở mức trên (sau này chuyển thành phép kết nối ⋈).",
      benefit: "Giảm kích thước của E₁ trước khi thực hiện phép so khớp B = C."
    },
    l9_join: {
      title: "Luật L9: Hoán vị phép chọn với Nối tự nhiên (Natural Join)",
      ruleBadge: "L9 NATURAL JOIN",
      before: "σ_{MaKhoa = 'CNTT'} ( SinhVien ⋈ Khoa )",
      after: "σ_{MaKhoa = 'CNTT'}(SinhVien) ⋈ σ_{MaKhoa = 'CNTT'}(Khoa)",
      explanation: "Vì MaKhoa là thuộc tính chung giữa SinhVien và Khoa, điều kiện lọc có thể áp dụng đồng thời cho cả 2 bảng trước khi nối tự nhiên.",
      benefit: "Cả 2 bảng SinhVien và Khoa đều chỉ giữ lại các dòng của khoa CNTT trước khi kết nối ➔ Thời gian thực thi gần như tức thì!"
    }
  };

  const curr = casesData[selectedCase];

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <Filter className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">PushdownSelectionSimulator</h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
                Mô Phỏng Đẩy Phép Chọn (σ) Xuống Sâu (Mục 3.3)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cơ chế biến đổi toán học đưa các vị từ lọc dữ liệu xuống sát các quan hệ cơ sở (Nút lá)
            </p>
          </div>
        </div>

        {/* Case Switcher */}
        <div className="flex flex-wrap rounded-xl bg-emerald-100/80 p-1 border border-emerald-200 gap-1">
          {Object.keys(casesData).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedCase(k)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedCase === k ? "bg-emerald-600 text-white shadow-sm" : "text-emerald-900 hover:text-emerald-700"
              }`}
            >
              {casesData[k].ruleBadge}
            </button>
          ))}
        </div>
      </div>

      {/* Case Details */}
      <div className="mt-5 space-y-4 font-mono text-xs">
        <div className="rounded-xl border border-emerald-200 bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <h4 className="text-sm font-bold text-emerald-950 font-sans">{curr.title}</h4>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              {curr.ruleBadge}
            </span>
          </div>

          {/* Transformation Visual Comparison */}
          <div className="grid gap-3 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 space-y-2">
              <span className="text-[10px] font-bold text-red-700 font-sans block uppercase">
                1. Biểu thức chưa tối ưu (Phép chọn ở ngọn):
              </span>
              <div className="rounded-lg bg-slate-900 p-3 text-red-400 font-mono text-xs text-center shadow-inner">
                {curr.before}
              </div>
              <p className="text-[11px] text-gray-600 font-sans">
                Thực hiện phép nhân trước khi lọc ➔ Sinh bảng trung gian lớn.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-300 bg-emerald-50/60 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-800 font-sans block uppercase">
                  2. Biểu thức sau khi đẩy σ xuống sâu:
                </span>
                <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">
                  TỐI ƯU ✓
                </span>
              </div>
              <div className="rounded-lg bg-slate-900 p-3 text-emerald-300 font-mono text-xs text-center shadow-inner font-bold">
                {curr.after}
              </div>
              <p className="text-[11px] text-gray-700 font-sans">
                Lọc trên từng quan hệ trước ➔ Bảng nhân đã được thu nhỏ tối đa!
              </p>
            </div>
          </div>

          {/* Explanation & Benefit */}
          <div className="space-y-2 font-sans text-xs">
            <div className="rounded-lg bg-teal-50/70 p-3 border border-teal-200 text-teal-950">
              <strong className="text-teal-900 block font-bold mb-0.5">🔍 CƠ CHẾ BIẾN ĐỔI:</strong>
              {curr.explanation}
            </div>

            <div className="rounded-lg bg-emerald-50/70 p-3 border border-emerald-200 text-emerald-950">
              <strong className="text-emerald-900 block font-bold mb-0.5">⚡ LỢI ÍCH HIỆU NĂNG:</strong>
              {curr.benefit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
