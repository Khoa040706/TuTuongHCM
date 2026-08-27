"use client";

import React, { useState } from "react";
import { LayoutDashboard, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen, KeyRound, Filter, Cpu } from "lucide-react";

export default function DatabaseChapter5SummaryDashboard() {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const coreConcepts = [
    {
      name: "Functional Dependency (X → Y)",
      meaning: "Giá trị của X quyết định duy nhất giá trị của Y (∀t1, t2: t1.X = t2.X ⇒ t1.Y = t2.Y).",
      badge: "RÀNG BUỘC NGỮ NGHĨA",
      icon: "🔗"
    },
    {
      name: "F⁺ (Bao đóng của F)",
      meaning: "Tập hợp TẤT CẢ các phụ thuộc hàm có thể suy dẫn logic được từ F.",
      badge: "TẬP SUY DẪN TOÀN THỂ",
      icon: "🌐"
    },
    {
      name: "Hệ tiên đề Armstrong",
      meaning: "3 tiên đề cơ bản (Phản xạ, Tăng trưởng, Bắc cầu) — Đúng đắn và Đầy đủ (Sound & Complete).",
      badge: "NỀN TẢNG SUY DIỄN TOÁN HỌC",
      icon: "📐"
    },
    {
      name: "X⁺ (Bao đóng tập thuộc tính)",
      meaning: "Tập tất cả các thuộc tính phụ thuộc hàm vào X (Bổ đề 3: F ⊢ X→Y ⇔ Y ⊆ X⁺).",
      badge: "CÔNG CỤ TÍNH TOÁN CỐT LÕI",
      icon: "⚡"
    },
    {
      name: "Super key (Siêu khóa)",
      meaning: "Tập thuộc tính xác định hàm toàn bộ tập U (X⁺ = U), định danh duy nhất từng hàng.",
      badge: "XÁC ĐỊNH DUY NHẤT HÀNG",
      icon: "🗝️"
    },
    {
      name: "Minimal key (Khóa tối tiểu)",
      meaning: "Siêu khóa nhỏ nhất (K⁺ = U và ∀A ∈ K: (K \\ {A})⁺ ≠ U, không thể bớt bất kỳ phần tử nào).",
      badge: "KHÓA ĐỊNH DANH TỐI ƯU",
      icon: "🔑"
    },
    {
      name: "Primary / Candidate key",
      meaning: "Khóa chính được người phân tích chọn cài đặt; Khóa dự tuyển là các khóa tối tiểu còn lại.",
      badge: "CÀI ĐẶT THỰC TẾ TRONG RDBMS",
      icon: "🛡️"
    },
    {
      name: "Minimal Cover (Phủ tối thiểu)",
      meaning: "Tập FD tối giản: Vế phải 1 thuộc tính, không dư thừa FD, không dư thừa thuộc tính vế trái.",
      badge: "CHUẨN HÓA RÀNG BUỘC",
      icon: "⚙️"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <LayoutDashboard className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">DatabaseChapter5SummaryDashboard</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Grand Summary Matrix
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bảng ma trận tổng hợp 8 khái niệm cốt lõi &amp; Quy trình chuẩn hóa toàn diện của Chương V
            </p>
          </div>
        </div>
      </div>

      {/* 8 Core Concepts Matrix */}
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {coreConcepts.map((c, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedConcept(idx)}
            className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
              selectedConcept === idx
                ? "border-indigo-500 bg-indigo-50/90 shadow-sm ring-1 ring-indigo-500"
                : "border-gray-200 bg-white hover:bg-gray-50/80"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg">{c.icon}</span>
              <span className="font-mono text-[10px] font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded">
                #{idx + 1}
              </span>
            </div>
            <h4 className="mt-2 text-xs font-bold text-gray-900 leading-snug font-sans truncate">{c.name}</h4>
            <span className="text-[10px] text-gray-500 font-semibold block mt-0.5">{c.badge}</span>
          </div>
        ))}
      </div>

      {/* Selected Concept Deep Dive Box */}
      <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-4 shadow-sm font-mono text-xs space-y-2">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="font-bold text-indigo-950 text-sm font-sans">
            {coreConcepts[selectedConcept].icon} {coreConcepts[selectedConcept].name}
          </span>
          <span className="font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200 text-[11px]">
            {coreConcepts[selectedConcept].badge}
          </span>
        </div>
        <p className="text-xs text-gray-700 leading-relaxed font-sans font-medium">
          <strong>Bản chất cốt lõi: </strong>{coreConcepts[selectedConcept].meaning}
        </p>
      </div>

      {/* Standard Process Flowchart Banner */}
      <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 p-4 text-white font-mono text-xs shadow-md">
        <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
          <Cpu className="h-4 w-4" />
          <span>QUY TRÌNH TOÁN HỌC CHUẨN HÓA CSDL QUAN HỆ (CHƯƠNG V):</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-4 text-[11px] text-indigo-100">
          <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
            <strong>1. Xác định FD:</strong> Xây dựng tập phụ thuộc hàm F phản ánh thực tế nghiệp vụ.
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
            <strong>2. Tính Bao Đóng X⁺:</strong> Sử dụng thuật toán lặp và Bổ đề 3 để kiểm tra suy dẫn.
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
            <strong>3. Tìm Khóa Tối Tiểu:</strong> Phân nhóm N/D/L và cắt tỉa nhánh để tìm mọi khóa.
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
            <strong>4. Rút Gọn F_min:</strong> Thực thi 3 bước chuẩn hóa để đạt tập ràng buộc tối tiểu.
          </div>
        </div>
      </div>
    </div>
  );
}
