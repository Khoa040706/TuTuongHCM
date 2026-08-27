"use client";

import React, { useState } from "react";
import { Link2, KeyRound, CheckCircle2, ArrowRight, ShieldCheck, Layers, Sparkles } from "lucide-react";

export default function ExistenceDependencyInspector() {
  const [selectedSign, setSelectedSign] = useState("sign1"); // 'sign1' | 'sign2'

  return (
    <div className="my-8 rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-violet-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-600/20">
            <Link2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ExistenceDependencyInspector</h3>
              <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-800 border border-violet-200">
                Phụ Thuộc Tồn Tại & Khóa Ngoại
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bộ giải phẫu 2 dấu hiệu toán học nhận biết Phụ thuộc tồn tại (Khóa ngoại) giữa hai lược đồ quan hệ
            </p>
          </div>
        </div>

        {/* Sign Switcher Tabs */}
        <div className="flex rounded-xl bg-violet-100/80 p-1 border border-violet-200">
          <button
            onClick={() => setSelectedSign("sign1")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              selectedSign === "sign1" ? "bg-violet-600 text-white shadow-sm" : "text-violet-900 hover:text-violet-700"
            }`}
          >
            Dấu Hiệu (1): K1 ⊆ K2 (Khóa Phức Hợp)
          </button>
          <button
            onClick={() => setSelectedSign("sign2")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              selectedSign === "sign2" ? "bg-violet-600 text-white shadow-sm" : "text-violet-900 hover:text-violet-700"
            }`}
          >
            Dấu Hiệu (2): K1 ⊆ R2 (Khóa Ngoại Đơn)
          </button>
        </div>
      </div>

      {/* Main Content by Sign */}
      {selectedSign === "sign1" ? (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
            <h4 className="text-sm font-bold text-emerald-950">
              Dấu Hiệu (1): Khóa K1 Của R1 Nằm Bên Trong Khóa Chính Phức Hợp K2 Của R2
            </h4>
            <div className="mt-2 font-mono text-xs text-emerald-900 bg-white p-3 rounded-lg border border-emerald-200 leading-relaxed font-bold">
              Công thức: Nếu K1 ⊆ K2 &rarr; Có phụ thuộc tồn tại của R2 vào R1.
            </div>
          </div>

          {/* Example 7a */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <span className="font-mono text-xs font-bold text-indigo-700">VÍ DỤ MINH HỌA 7.a (Giáo trình)</span>
            <p className="text-xs text-gray-700 mt-2 leading-relaxed">
              Xét hai lược đồ quan hệ <code>R1 = SINH_VIEN(maSV)</code> với khóa <code>K1 = {"{maSV}"}</code> và <code>R2 = KET_QUA(maSV, maMH, lanThi, diem)</code> với khóa phức hợp <code>K2 = {"{maSV, maMH, lanThi}"}</code>:
            </p>
            <div className="mt-3 flex items-center gap-2 font-mono text-xs text-indigo-950 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
              <KeyRound className="h-4 w-4 text-amber-600" />
              <span>Ta có: K1 ({"{maSV}"}) ⊆ K2 ({"{maSV, maMH, lanThi}"}) &rarr; KET_QUA phụ thuộc tồn tại vào SINH_VIEN!</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Sự tồn tại của một kết quả thi trong <code>KET_QUA</code> hoàn toàn phụ thuộc vào sự tồn tại trước đó của sinh viên đó trong <code>SINH_VIEN</code>.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4">
            <h4 className="text-sm font-bold text-purple-950">
              Dấu Hiệu (2): Khóa K1 Của R1 Xuất Hiện Như Một Thuộc Tính Thông Thường Trong R2
            </h4>
            <div className="mt-2 font-mono text-xs text-purple-900 bg-white p-3 rounded-lg border border-purple-200 leading-relaxed font-bold">
              Công thức: Nếu K1 ⊆ R2 (với K1 không thuộc K2) &rarr; K1 chính là Khóa Ngoại (Foreign Key) của R2.
            </div>
          </div>

          {/* Example 7b */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <span className="font-mono text-xs font-bold text-indigo-700">VÍ DỤ MINH HỌA 7.b (Giáo trình)</span>
            <p className="text-xs text-gray-700 mt-2 leading-relaxed">
              Xét hai lược đồ quan hệ <code>R1 = KHOA(makhoa)</code> với khóa <code>K1 = {"{makhoa}"}</code> và <code>R2 = SINH_VIEN(maSV, hotenSV, nam, ngSinh, maKhoa)</code>:
            </p>
            <div className="mt-3 flex items-center gap-2 font-mono text-xs text-purple-950 bg-purple-50 p-3 rounded-lg border border-purple-100">
              <Link2 className="h-4 w-4 text-purple-600" />
              <span>Ta có: makhoa thuộc tập thuộc tính của SINH_VIEN &rarr; maKhoa là Khóa Ngoại trỏ về KHOA!</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Sinh viên <code>(&apos;To012&apos;, &apos;Phan Anh Hoang&apos;, &apos;true&apos;, &apos;12/06/81&apos;, &apos;To&apos;)</code> chỉ tồn tại hợp lệ nếu khoa <code>(&apos;To&apos;, &apos;Toan&apos;, 30)</code> đã tồn tại trong bảng <code>KHOA</code>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
