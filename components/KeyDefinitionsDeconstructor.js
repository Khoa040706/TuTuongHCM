"use client";

import React, { useState } from "react";
import { KeyRound, ShieldCheck, CheckCircle2, ArrowRight, Layers, Sparkles, HelpCircle } from "lucide-react";

export default function KeyDefinitionsDeconstructor() {
  const [selectedConcept, setSelectedConcept] = useState("superkey"); // 'superkey' | 'minimal' | 'primary' | 'candidate'

  const concepts = {
    superkey: {
      id: "superkey",
      name: "1. Siêu Khóa (Super Key)",
      badge: "X⁺ = U (XÁC ĐỊNH DUY NHẤT)",
      definition: "Siêu khóa là tập con X khác rỗng các thuộc tính của R sao cho với hai bộ t1, t2 bất kỳ trong quan hệ r: t1[X] ≠ t2[X].",
      condition: "X là siêu khóa của R ⟺ X → U ⟺ X⁺ = U (X xác định hàm toàn bộ tập thuộc tính của lược đồ R).",
      example: "Nếu K là khóa thì mọi tập cha K ∪ {A} đều là Siêu khóa (nhưng có thể bị dư thừa thuộc tính A).",
      color: "from-amber-600 to-orange-600"
    },
    minimal: {
      id: "minimal",
      name: "2. Khóa Tối Tiểu (Minimal Key / Key)",
      badge: "SIÊU KHÓA NHỎ NHẤT (KHÔNG DƯ THỪA)",
      definition: "Khóa tối tiểu K là một siêu khóa (K⁺ = U) mà nếu loại bỏ bất kỳ thuộc tính nào khỏi K thì K không còn là siêu khóa nữa.",
      condition: "1) K⁺ = U (tức K → U ∈ F⁺)\n2) (K \\ {A})⁺ ≠ U, ∀A ∈ K (bớt bất kỳ phần tử nào thì bao đóng không còn bằng U).",
      example: "Trong một quan hệ có thể có nhiều khóa tối tiểu, và luôn tồn tại ít nhất một khóa.",
      color: "from-emerald-600 to-teal-600"
    },
    primary: {
      id: "primary",
      name: "3. Khóa Chính (Primary Key - PK)",
      badge: "ĐƯỢC CHỌN ĐỂ CÀI ĐẶT",
      definition: "Khóa chính là MỘT khóa tối tiểu được người thiết kế / phân tích CSDL CHỌN làm định danh chính thức để cài đặt trong Hệ Quản Trị CSDL.",
      condition: "Không được phép chứa giá trị rỗng (NOT NULL) và không trùng lặp (UNIQUE) trên toàn bảng.",
      example: "Ví dụ: Bảng SINH_VIEN có 2 khóa tối tiểu là {maSV} và {soCCCD}, người thiết kế chọn maSV làm Khóa chính.",
      color: "from-indigo-600 to-blue-600"
    },
    candidate: {
      id: "candidate",
      name: "4. Khóa Dự Tuyển (Candidate Key)",
      badge: "CÁC KHÓA TỐI TIỂU CÒN LẠI",
      definition: "Khóa dự tuyển là tập hợp TẤT CẢ các khóa tối tiểu CÒN LẠI của quan hệ mà không được chọn làm khóa chính.",
      condition: "Đầy đủ tư cách và tính chất như khóa chính, có thể được cài đặt bằng ràng buộc UNIQUE trong SQL.",
      example: "Trong ví dụ trên, {soCCCD} là Khóa dự tuyển (Candidate Key).",
      color: "from-purple-600 to-pink-600"
    }
  };

  const curr = concepts[selectedConcept];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <KeyRound className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">KeyDefinitionsDeconstructor</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Định Nghĩa Khóa (Mục 3.1)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Giải phẫu 4 khái niệm nền tảng: Siêu khóa, Khóa tối tiểu, Khóa chính (PK) và Khóa dự tuyển (Candidate Key)
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          {Object.keys(concepts).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedConcept(key)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                selectedConcept === key ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
              }`}
            >
              {concepts[key].name.split(". ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Concept Card */}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-indigo-950">{curr.name}</h4>
          <span className="font-mono text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
            {curr.badge}
          </span>
        </div>

        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Định nghĩa chuẩn xác:</span>
          <p className="mt-1 text-xs text-gray-800 font-medium leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-200">
            {curr.definition}
          </p>
        </div>

        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Điều kiện toán học &amp; Logic:</span>
          <pre className="mt-1 font-mono text-xs text-amber-900 bg-amber-50/70 p-3 rounded-lg border border-amber-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {curr.condition}
          </pre>
        </div>

        <div className="rounded-lg bg-indigo-50/70 p-3 text-xs text-indigo-950 font-mono border border-indigo-100 leading-relaxed">
          <strong>💡 Minh họa &amp; Nhận xét: </strong>{curr.example}
        </div>
      </div>
    </div>
  );
}
