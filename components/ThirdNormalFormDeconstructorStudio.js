"use client";

import React, { useState } from "react";
import { Layers, ShieldCheck, CheckCircle2, XCircle, ArrowRight, Sparkles, Split, BookOpen, KeyRound } from "lucide-react";

export default function ThirdNormalFormDeconstructorStudio() {
  const [activeTab, setActiveTab] = useState("definition"); // 'definition' | 'sales' | 'kehoach'

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ThirdNormalFormDeconstructorStudio</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Dạng Chuẩn 3 (3NF) &bull; Tiêu Chuẩn Vàng
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Giải phẫu Phụ thuộc bắc cầu (Transitive FD) &amp; 2 Định nghĩa tương đương của 3NF
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-amber-100/80 p-1 border border-amber-200">
          <button
            onClick={() => setActiveTab("definition")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "definition" ? "bg-amber-600 text-white shadow-sm" : "text-amber-900 hover:text-amber-700"
            }`}
          >
            1. Định Nghĩa 3NF
          </button>
          <button
            onClick={() => setActiveTab("sales")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "sales" ? "bg-amber-600 text-white shadow-sm" : "text-amber-900 hover:text-amber-700"
            }`}
          >
            2. Case SALES
          </button>
          <button
            onClick={() => setActiveTab("kehoach")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "kehoach" ? "bg-amber-600 text-white shadow-sm" : "text-amber-900 hover:text-amber-700"
            }`}
          >
            3. Case Kế Hoạch Thi
          </button>
        </div>
      </div>

      {/* Tab 1: 3NF Formal Definitions */}
      {activeTab === "definition" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-2">
            <strong className="text-amber-950 block font-sans text-xs">📐 BẢN CHẤT PHỤ THUỘC HÀM BẮC CẦU (TRANSITIVE FD):</strong>
            <p className="text-gray-700 font-sans leading-relaxed text-xs">
              Cho R(U, F), thuộc tính A phụ thuộc bắc cầu vào X nếu tồn tại tập thuộc tính Y sao cho:
              <br />
              <span className="font-mono text-amber-900 font-bold bg-white px-2 py-0.5 rounded border border-amber-300 inline-block mt-1">
                X &rarr; Y, Y &rarr; A (nhưng Y &#8802; X và A &#8713; X &#8746; Y)
              </span>
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm space-y-1.5">
              <span className="font-bold text-blue-900 font-sans block text-xs">ĐỊNH NGHĨA TRUYỀN THỐNG 3NF</span>
              <p className="text-gray-700 font-sans text-xs leading-relaxed">
                Lược đồ quan hệ R đạt 3NF nếu:
                <br />1. R đạt <strong>2NF</strong>.
                <br />2. Mọi thuộc tính không khóa của R đều <strong>không phụ thuộc bắc cầu</strong> vào khóa chính.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm space-y-1.5">
              <span className="font-bold text-emerald-900 font-sans block text-xs">ĐỊNH NGHĨA TƯƠNG ĐƯƠNG (CỰC HAY)</span>
              <p className="text-gray-700 font-sans text-xs leading-relaxed">
                Với mọi FD <code>X &rarr; A</code> trong F (A &#8713; X), thì:
                <br />• <strong>X là siêu khóa</strong> (X⁺ = U), HOẶC
                <br />• <strong>A là thuộc tính khóa</strong> (thuộc ít nhất 1 candidate key).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: SALES Example */}
      {activeTab === "sales" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-amber-200 bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <strong className="text-amber-950 font-sans text-sm">Lược đồ SALES(Cust_ID, Name, Salesperson, Region)</strong>
              <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded text-[10px] font-bold border border-red-200">
                VI PHẠM 3NF
              </span>
            </div>
            <div className="text-gray-700 font-sans text-xs leading-relaxed space-y-1">
              <p>• <strong>Tập F:</strong> <code>{"{ Cust_ID → Name, Salesperson, Region; Salesperson → Region }"}</code></p>
              <p>• <strong>Khóa:</strong> <code>K = Cust_ID</code> (Khóa đơn 1 thuộc tính &rarr; Đạt 2NF).</p>
              <p>• <strong>Phát hiện vi phạm:</strong> Tồn tại phụ thuộc bắc cầu <code>Cust_ID &rarr; Salesperson &rarr; Region</code> (thuộc tính không khóa <code>Region</code> phụ thuộc vào <code>Salesperson</code> không phải là siêu khóa!).</p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 font-sans text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-950 font-bold">
              <Split className="h-4 w-4 text-emerald-700" />
              <span>THUẬT TOÁN PHÂN RÃ CHUẨN HÓA VỀ 3NF:</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 font-mono text-xs">
              <div className="bg-white p-3 rounded-lg border border-emerald-200 text-emerald-950">
                <strong className="block text-emerald-800 mb-0.5">1. SALES1(Cust_ID, Name, Salesperson)</strong>
                <span className="text-[11px] text-gray-600 font-sans">Khóa: Cust_ID &bull; Đạt 3NF (không còn bắc cầu).</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-200 text-emerald-950">
                <strong className="block text-emerald-800 mb-0.5">2. SPERSON(Salesperson, Region)</strong>
                <span className="text-[11px] text-gray-600 font-sans">Khóa: Salesperson &bull; Đạt 3NF (Salesperson là khóa).</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: KeHoachThi Example */}
      {activeTab === "kehoach" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-amber-200 bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <strong className="text-amber-950 font-sans text-sm">Lược đồ Thi(ngThi, gioThi, phThi, maMH, gvDay)</strong>
              <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded text-[10px] font-bold border border-red-200">
                VI PHẠM 3NF
              </span>
            </div>
            <div className="text-gray-700 font-sans text-xs leading-relaxed space-y-1">
              <p>• <strong>Khóa:</strong> <code>K = {"{ ngThi, gioThi, phThi }"}</code></p>
              <p>• <strong>Tập F:</strong> <code>{"{ {ngThi, gioThi, phThi} → maMH; maMH → gvDay }"}</code></p>
              <p>• <strong>Phát hiện vi phạm:</strong> <code>{"{ngThi, gioThi, phThi} → maMH → gvDay"}</code> là phụ thuộc bắc cầu &rarr; <code>gvDay</code> phụ thuộc vào <code>maMH</code> không phải là siêu khóa &rarr; Vi phạm 3NF!</p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 font-sans text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-blue-950 font-bold">
              <ShieldCheck className="h-4 w-4 text-blue-700" />
              <span>SO SÁNH VỚI QUAN HỆ ĐẠT 3NF:</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-blue-200 font-mono text-xs text-blue-950">
              <strong>CoiThi(giamThi, ngThi, gioThi, phThi)</strong>
              <p className="text-gray-700 font-sans mt-1 text-xs">
                FD: <code>giamThi &rarr; ngThi, gioThi, phThi</code> &bull; Khóa: <code>giamThi</code> &rarr; Tất cả thuộc tính đều phụ thuộc trực tiếp vào khóa &rarr; <strong>ĐẠT 3NF!</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
