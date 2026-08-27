"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Zap, Sparkles, KeyRound, Layers } from "lucide-react";

export default function BoyceCoddNormalFormStudio() {
  const [activeTab, setActiveTab] = useState("csz"); // 'csz' | 'theorems'

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">BoyceCoddNormalFormStudio</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Dạng Chuẩn Boyce-Codd (BCNF)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Dạng chuẩn nghiêm ngặt nhất: Vế trái của MỌI phụ thuộc hàm bắt buộc phải là Siêu khóa (X⁺ = U)
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-purple-100/80 p-1 border border-purple-200">
          <button
            onClick={() => setActiveTab("csz")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "csz" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            1. Case Kinh Điển R(CSZ)
          </button>
          <button
            onClick={() => setActiveTab("theorems")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "theorems" ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
            }`}
          >
            2. 3 Mệnh Đề Nhận Diện BCNF
          </button>
        </div>
      </div>

      {/* Formal Definition Banner */}
      <div className="mt-5 rounded-xl bg-purple-50 border border-purple-200 p-4 font-mono text-xs text-purple-950 space-y-1">
        <div><strong>ĐỊNH NGHĨA BCNF:</strong> Quan hệ R đạt BCNF nếu với mọi FD <code>X &rarr; A</code> (A &#8713; X), thì <u>X BẮT BUỘC PHẢI LÀ SIÊU KHÓA</u> (X⁺ = U).</div>
        <div className="text-gray-600 font-sans text-xs">BCNF loại bỏ hoàn toàn đặc quyền của thuộc tính khóa trong 3NF &rarr; Vế trái luôn phải chứa toàn bộ thông tin định danh toàn bảng.</div>
      </div>

      {/* Tab 1: Classic CSZ Case */}
      {activeTab === "csz" && (
        <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <strong className="text-purple-950 font-sans text-sm">CASE STUDY KINH ĐIỂN: R(C, S, Z) với F = {"{ CS → Z, Z → C }"}</strong>
            <span className="text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 text-[11px] font-bold">
              ĐẠT 3NF NHƯNG RỚT BCNF
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 pt-1 font-sans text-xs">
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-emerald-950 space-y-1">
              <strong className="text-emerald-900 block font-bold">✓ TẠI SAO ĐẠT 3NF?</strong>
              <p className="leading-relaxed text-[11px]">
                • Khóa dự tuyển: <code>K₁ = CS, K₂ = SZ</code>.
                <br />• Tập thuộc tính khóa = <code>{"{ C, S, Z }"} = U</code>.
                <br />• Trong FD <code>Z &rarr; C</code>: C là thuộc tính khóa &rarr; Thỏa mãn điều kiện thứ 2 của 3NF &rarr; <strong>ĐẠT 3NF!</strong>
              </p>
            </div>

            <div className="bg-rose-50 p-3 rounded-lg border border-rose-200 text-rose-950 space-y-1">
              <strong className="text-red-900 block font-bold">✗ TẠI SAO RỚT BCNF?</strong>
              <p className="leading-relaxed text-[11px]">
                • Xét FD <code>Z &rarr; C</code>: Vế trái là <code>Z</code>.
                <br />• Tính bao đóng: <code>Z⁺ = ZC &#8800; CSZ</code> &rarr; <code>Z</code> <strong>không phải là siêu khóa</strong>!
                <br />• BCNF không cho phép miễn trừ cho thuộc tính khóa &rarr; <strong>VI PHẠM BCNF!</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 3 BCNF Theorems */}
      {activeTab === "theorems" && (
        <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <h4 className="text-purple-950 font-bold font-sans text-sm border-b border-gray-100 pb-2">
            3 MỆNH ĐỀ NHẬN DIỆN NHANH DẠNG CHUẨN BOYCE-CODD (BCNF)
          </h4>

          <div className="space-y-2.5 font-sans text-xs text-gray-800">
            <div className="bg-purple-50/70 p-3 rounded-lg border border-purple-200">
              <strong className="text-purple-900 block font-bold mb-0.5">🌟 Mệnh Đề 1 (Quan Hệ 2 Thuộc Tính):</strong>
              Mọi lược đồ quan hệ gồm đúng 2 thuộc tính (<code>|U| = 2</code>, ví dụ: <code>R(A, B)</code>) thì <strong>LUÔN LUÔN ĐẠT BCNF</strong>!
            </div>

            <div className="bg-indigo-50/70 p-3 rounded-lg border border-indigo-200">
              <strong className="text-indigo-900 block font-bold mb-0.5">🌟 Mệnh Đề 2 (Tập F Chỉ Có 1 Phụ Thuộc Hàm):</strong>
              Lược đồ quan hệ <code>R(U, F)</code> mà tập F chỉ gồm đúng <strong>1 phụ thuộc hàm duy nhất</strong> thì <strong>LUÔN ĐẠT BCNF</strong>!
            </div>

            <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block font-bold mb-0.5">🌟 Mệnh Đề 3 (Điều Kiện Không Đạt BCNF):</strong>
              Nếu <code>R(U, F)</code> không đạt BCNF thì bắt buộc tồn tại 2 thuộc tính <code>A, B</code> sao cho: <code>R \ (A ∪ B) &rarr; A</code>.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
