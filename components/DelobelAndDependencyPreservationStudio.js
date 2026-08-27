"use client";

import React, { useState } from "react";
import { Split, ShieldCheck, CheckCircle2, XCircle, ArrowRight, Sparkles, Scale, BookOpen } from "lucide-react";

export default function DelobelAndDependencyPreservationStudio() {
  const [activeTab, setActiveTab] = useState("delobel"); // 'delobel' | 'preservation' | 'independence'

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">DelobelAndDependencyPreservationStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Định Lý Delobel &amp; Bảo Toàn FD (Mục 8.1 - 8.2)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Kiểm tra tính kết nối không mất thông tin cho 2 quan hệ &amp; Tính độc lập giữa 2 tiêu chuẩn vàng
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setActiveTab("delobel")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "delobel" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            1. Định Lý Delobel
          </button>
          <button
            onClick={() => setActiveTab("preservation")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "preservation" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            2. Kiểm Tra Bảo Toàn FD
          </button>
          <button
            onClick={() => setActiveTab("independence")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "independence" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            3. Tính Độc Lập Giữa 2 Tiêu Chí
          </button>
        </div>
      </div>

      {/* Tab 1: Delobel */}
      {activeTab === "delobel" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-2">
            <strong className="text-indigo-950 block font-sans text-xs">📐 ĐỊNH LÝ DELOBEL (PHÉP TÁCH 2 LƯỢC ĐỒ CON):</strong>
            <p className="text-gray-700 font-sans leading-relaxed text-xs">
              Phân rã &rho; = (R₁, R₂) là phép tách <strong>kết nối không tổn thất (Lossless Join)</strong> khi và chỉ khi:
              <br />
              <span className="font-mono text-indigo-900 font-bold bg-white px-2.5 py-1 rounded border border-indigo-300 inline-block mt-1">
                (R₁ ∩ R₂) &rarr; (R₁ \ R₂) &nbsp;HOẶC&nbsp; (R₁ ∩ R₂) &rarr; (R₂ \ R₁) &isin; F⁺
              </span>
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm space-y-2">
            <span className="font-bold text-emerald-900 font-sans block text-xs">HỆ QUẢ TRỰC GIÁC CỦA DELOBEL</span>
            <p className="text-gray-700 font-sans text-xs leading-relaxed">
              Với mọi phụ thuộc hàm <code>X &rarr; Y &isin; F⁺</code>, phép tách:
              <br />
              <span className="font-mono text-emerald-950 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 inline-block mt-1">
                &rho; = (XY, X(U \ Y))
              </span>
              <br />luôn luôn là một phép tách <strong>kết nối không mất thông tin</strong>!
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Dependency Preservation */}
      {activeTab === "preservation" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 space-y-2">
            <strong className="text-blue-950 block font-sans text-xs">⚙️ THUẬT TOÁN KIỂM TRA BẢO TOÀN PHỤ THUỘC HÀM:</strong>
            <div className="text-gray-700 font-sans text-xs leading-relaxed space-y-1">
              <p>1. Đặt <code>G = ∪ &pi;_{"R_i"}(F)</code> (hợp của các hình chiếu của F trên từng lược đồ con R_i).</p>
              <p>2. Với mỗi <code>X &rarr; Y &isin; F</code>, kiểm tra xem <code>X⁺</code> (tính theo G) có chứa Y hay không.</p>
              <p>3. Nếu mọi FD trong F đều được suy dẫn từ G ⟹ <strong>Bảo toàn phụ thuộc hàm</strong>.</p>
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-white p-4 shadow-sm space-y-2">
            <span className="font-bold text-purple-950 font-sans block text-xs">VÍ DỤ THỰC CHỨNG TỪ SLIDE:</span>
            <div className="text-gray-700 font-sans text-xs leading-relaxed space-y-1">
              <p>• <code>R(ABCDE), F = {"{ L → AC, A → B, CD → A, AB → C, E → B }"}</code>, Phân rã <code>&rho; = (ACE, ABCD)</code>.</p>
              <p>• Hình chiếu <code>F₁ = {"{ A → C }"}</code>, <code>F₂ = {"{ A → B, CD → A, AB → C }"}</code>.</p>
              <p>• Xét <code>E &rarr; B &isin; F</code>: <code>(E)_G⁺ = E &#8815; B</code> ⟹ G không suy dẫn được <code>E &rarr; B</code> ⟹ <strong>KHÔNG BẢO TOÀN PHỤ THUỘC HÀM!</strong></p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Independence of 2 criteria */}
      {activeTab === "independence" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-2">
            <strong className="text-amber-950 block font-sans text-xs">💡 LƯU Ý QUAN TRỌNG NHẤT VỀ 2 TIÊU CHÍ VÀNG:</strong>
            <p className="text-gray-800 font-sans text-xs leading-relaxed">
              Tính chất <strong>Kết nối không mất thông tin (Lossless Join)</strong> và <strong>Bảo toàn phụ thuộc hàm (Dependency Preservation)</strong> là <u>HOÀN TOÀN ĐỘC LẬP</u> với nhau!
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm space-y-1.5">
              <strong className="text-emerald-900 block font-sans text-xs">1. Lossless Join NHƯNG Mất FD:</strong>
              <p className="text-gray-700 font-sans text-[11px] leading-relaxed">
                <code>R(CSZ), F = {"{ CS → Z, Z → C }"}</code>, phân rã <code>&rho; = (SZ, CZ)</code>.
                <br />• <code>(SZ ∩ CZ)⁺ = Z⁺ = ZC &#8839; CZ \ SZ</code> ⟹ <strong>Lossless Join ✓</strong>
                <br />• Mất phụ thuộc hàm <code>CS &rarr; Z</code> ⟹ <strong>Mất FD ✗</strong>
              </p>
            </div>

            <div className="rounded-xl border border-rose-200 bg-white p-4 shadow-sm space-y-1.5">
              <strong className="text-red-900 block font-sans text-xs">2. Bảo Toàn FD NHƯNG Mất Thông Tin:</strong>
              <p className="text-gray-700 font-sans text-[11px] leading-relaxed">
                <code>U = ABCD, F = {"{ A → B, C → D }"}</code>, phân rã <code>&rho; = (AB, CD)</code>.
                <br />• Giữ trọn vẹn cả 2 FD ⟹ <strong>Bảo toàn FD ✓</strong>
                <br />• <code>AB ∩ CD = ∅</code> ⟹ Tích Descartes sinh bộ giả mạo ⟹ <strong>Mất thông tin (Lossy) ✗</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
