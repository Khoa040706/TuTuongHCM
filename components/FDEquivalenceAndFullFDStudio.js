"use client";

import React, { useState } from "react";
import { Scale, CheckCircle2, ArrowRight, ShieldCheck, Layers, Sparkles, HelpCircle } from "lucide-react";

export default function FDEquivalenceAndFullFDStudio() {
  const [selectedTopic, setSelectedTopic] = useState("cover"); // 'cover' | 'equiv' | 'full_fd'

  const topics = {
    cover: {
      id: "cover",
      title: "1. Khái Niệm Phủ (Covering / F covers G)",
      badge: "F⁺ ⊇ G (MỌI FD TRONG G ĐỀU SUY ĐƯỢC TỪ F)",
      math: "F phủ G ⟺ F⁺ ⊇ G ⟺ F⁺ ⊇ G⁺",
      explanation: "Tập phụ thuộc hàm F được gọi là PHỦ tập phụ thuộc hàm G nếu mọi ràng buộc trong G đều có thể suy dẫn logic từ các ràng buộc trong F nhờ hệ tiên đề Armstrong.",
      checkMethod: "Cách kiểm tra: Với mọi FD X → Y ∈ G, ta tính bao đóng X⁺ trên tập F (ký hiệu X_F⁺). Nếu Y ⊆ X_F⁺ với mọi FD trong G thì F phủ G.",
      example: "Cho F = { A → B, B → C } và G = { A → C }. Ta có A_F⁺ = {A, B, C} chứa C ⇒ F phủ G.",
      color: "from-blue-600 to-indigo-600"
    },
    equiv: {
      id: "equiv",
      title: "2. Hai Tập Phụ Thuộc Tương Đương (Equivalent Sets)",
      badge: "F ≡ G ⟺ F⁺ = G⁺ (CÙNG NĂNG LỰC BIỂU DIỄN)",
      math: "F ≡ G ⟺ (F phủ G) ∧ (G phủ F) ⟺ F⁺ = G⁺",
      explanation: "Hai tập phụ thuộc hàm F và G được gọi là tương đương nhau nếu chúng có cùng bao đóng phụ thuộc hàm. Bất kỳ quan hệ nào thỏa mãn F thì cũng thỏa mãn G và ngược lại.",
      checkMethod: "Cách kiểm tra: Thực hiện 2 chiều: 1) Kiểm tra F phủ G (mọi FD trong G suy được từ F); 2) Kiểm tra G phủ F (mọi FD trong F suy được từ G).",
      example: "Cho F = { A → B, B → C, A → C } và G = { A → B, B → C }. Ta có F ≡ G vì A → C trong F là dư thừa (suy được qua bắc cầu từ G).",
      color: "from-emerald-600 to-teal-600"
    },
    full_fd: {
      id: "full_fd",
      title: "3. Phụ Thuộc Đầy Đủ (Full Functional Dependency)",
      badge: "KHÔNG CÓ TẬP CON NÀO CỦA VẾ TRÁI SUY ĐƯỢC VẾ PHẢI",
      math: "Y phụ thuộc đầy đủ vào X ⟺ ∀X' ⊂ X : X' → Y ∉ F⁺",
      explanation: "Y phụ thuộc đầy đủ vào tập thuộc tính X nếu Y phụ thuộc vào toàn bộ X mà không phụ thuộc vào bất kỳ một tập con thực sự nào của X.",
      checkMethod: "Cách kiểm tra: Với X → Y, lần lượt tính bao đóng (X \\ {B})⁺ với mọi thuộc tính B ∈ X. Nếu không có tập nào chứa Y thì X → Y là phụ thuộc đầy đủ.",
      example: "Xét quan hệ KET_QUA(maSV, maMH, diem). Ta có {maSV, maMH} → diem là phụ thuộc đầy đủ vì maSV ↛ diem và maMH ↛ diem.",
      color: "from-purple-600 to-pink-600"
    }
  };

  const curr = topics[selectedTopic];

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">FDEquivalenceAndFullFDStudio</h3>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                Phủ &amp; Phụ Thuộc Đầy Đủ
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Giải phẫu 3 khái niệm: Phủ (F covers G), Tương đương (F &equiv; G) và Phụ thuộc đầy đủ (Full FD)
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-blue-100/80 p-1 border border-blue-200">
          {Object.keys(topics).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedTopic(key)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedTopic === key ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:text-blue-700"
              }`}
            >
              {topics[key].title.split(". ")[1].split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Card */}
      <div className="mt-5 rounded-xl border border-blue-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-blue-950 font-sans">{curr.title}</h4>
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            {curr.badge}
          </span>
        </div>

        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-950 font-bold border border-blue-200">
          CÔNG THỨC HÌNH THỨC: {curr.math}
        </div>

        <p className="text-xs text-gray-700 leading-relaxed font-sans font-medium">
          <strong>Ý nghĩa bản chất: </strong>{curr.explanation}
        </p>

        <div className="rounded-lg bg-emerald-50/80 p-3 text-emerald-950 font-sans border border-emerald-200 leading-relaxed">
          <strong className="block text-emerald-900 font-bold text-xs mb-1">🔍 Phương pháp kiểm chứng thực nghiệm:</strong>
          {curr.checkMethod}
        </div>

        <div className="rounded-lg bg-purple-50/80 p-3 text-purple-950 font-sans border border-purple-200 leading-relaxed">
          <strong className="block text-purple-900 font-bold text-xs mb-1">💡 Ví dụ minh họa giáo trình:</strong>
          {curr.example}
        </div>
      </div>
    </div>
  );
}
