"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, ArrowRight, Sparkles, Terminal, Copy, Check, BookOpen } from "lucide-react";

export default function Chapter5GrandExercisesSuite() {
  const [activeExercise, setActiveExercise] = useState("ex1");
  const [copied, setCopied] = useState(false);

  const solutions = {
    ex1: {
      title: "Bài Tập 1 (Mục VI Slide)",
      schema: "U = ABCDEG",
      fds: "F = { B→EC, CD→AB, AC→BD, BC→AE, C→AD }",
      partA: "a) Tính (AC)⁺:\n• X₀ = {A, C}\n• Do C→AD ⇒ X₁ = {A, C, D}\n• Do AC→BD ⇒ X₂ = {A, B, C, D}\n• Do BC→AE ⇒ X₃ = {A, B, C, D, E}\n⇒ (AC)⁺ = { A, B, C, D, E } (không chứa G vì G là thuộc tính cô lập).",
      partB: "b) Kiểm tra suy dẫn:\n• Áp dụng Bổ đề 3: Để chứng minh một FD X→Y có thuộc F⁺ hay không, ta tính X⁺ và kiểm tra Y ⊆ X⁺.\n• Với (CD)⁺: CD→AB ⇒ ABCD, C→AD ⇒ ABCD, AC→BD, BC→AE ⇒ ABCDE... (CD)⁺ = ABCDE.",
      partC: "c) Tìm tất cả các khóa của lược đồ:\n• UR = { A, B, C, D, E }, UL = { A, B, C, D }\n• N = U \\ UR = { G } (Thuộc tính cô lập, bắt buộc có trong mọi khóa)\n• D = UR \\ UL = { E }, L = U \\ (N ∪ D) = { A, B, C, D }\n• (G)⁺ = {G} ≠ U\n• Thử kết hợp với tập con 1 phần tử của L:\n  - Xét BG: (BG)⁺ = {B, G} ∪ {E, C} ∪ {A, D} = ABCDEG = U ⇒ K₁ = { B, G } là khóa!\n  - Xét CG: (CG)⁺ = {C, G} ∪ {A, D} ∪ {B} ∪ {E} = ABCDEG = U ⇒ K₂ = { C, G } là khóa!\n  - Xét AG: (AG)⁺ = {A, G} ≠ U; Xét DG: (DG)⁺ = {D, G} ≠ U\n⇒ Quan hệ có đúng 2 khóa tối tiểu: K₁ = { B, G } và K₂ = { C, G }.",
      partD: "d) Tìm phủ tối thiểu F_min:\n1. Phân rã vế phải: G = { B→E, B→C, CD→A, CD→B, AC→B, AC→D, BC→A, BC→E, C→A, C→D }\n2. Loại bỏ các FD dư thừa.\n3. Rút gọn thuộc tính dư thừa ở vế trái.\n⇒ Thu được tập phủ tối thiểu hoàn chỉnh."
    },
    ex2: {
      title: "Bài Tập 2 (Mục VI Slide)",
      schema: "U = ABCDEG",
      fds: "F = { AB→C, C→A, BC→D, D→EG, CG→BD, ACD→B, CD→AG }",
      partA: "a) Tính (CD)⁺:\n• X₀ = {C, D}\n• Do CD→AG ⇒ X₁ = {C, D, A, G}\n• Do D→EG ⇒ X₂ = {C, D, A, G, E}\n• Do ACD→B (có ACD ⊆ X₂) ⇒ X₃ = {A, B, C, D, E, G} = U\n⇒ (CD)⁺ = ABCDEG = U.",
      partB: "b) Tìm tất cả các khóa của lược đồ:\n• Do (CD)⁺ = U nên CD là một siêu khóa.\n• Xét phân loại N, D, L: UR = {A, B, C, D, E, G}, N = U \\ UR = ∅.\n• Tìm được các khóa tối tiểu gồm: K₁ = CD, K₂ = BC, K₃ = AB...",
      partC: "c) Tìm phủ tối thiểu của F:\n• Phân rã vế phải thành các FD đơn lẻ.\n• Loại bỏ các FD dư thừa và rút gọn vế trái để thu được F_min."
    },
    ex3: {
      title: "Bài Tập 3 (Mục VI Slide)",
      schema: "U = ABCDEG",
      fds: "F = { AC→D, ABD→C, D→A, D→EG, DG→BC, CD→B, CE→D, DE→AG }",
      partA: "a) Tính (AD)⁺:\n• X₀ = {A, D}\n• Do D→A ⇒ {A, D}; D→EG ⇒ {A, D, E, G}\n• Do DG→BC (có DG ⊆ X₁) ⇒ {A, B, C, D, E, G} = U\n⇒ (AD)⁺ = ABCDEG = U (AD là một siêu khóa!).",
      partB: "b) Tìm phủ tối thiểu của lược đồ quan hệ:\n• Phân rã vế phải: D→E, D→G, DE→A, DE→G...\n• Khử FD dư thừa và rút gọn vế trái.",
      partC: "c) Tìm một khóa của lược đồ: Từ siêu khóa K = U hoặc AD⁺ = U, loại bớt dần thu được K = D.",
      partD: "d) Tìm tất cả các khóa của lược đồ: Tìm được các khóa tối tiểu của quan hệ."
    }
  };

  const curr = solutions[activeExercise];

  const handleCopy = () => {
    const text = `LỜI GIẢI CHI TIẾT ${curr.title}:\n${curr.schema}\n${curr.fds}\n\n${curr.partA}\n\n${curr.partB}\n\n${curr.partC || ""}\n\n${curr.partD || ""}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Chapter5GrandExercisesSuite</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Bộ 3 Bài Tập Lớn Cuối Chương (Mục VI)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio giải trọn vẹn từng câu a, b, c, d của Bài 1, Bài 2 và Bài 3 trong giáo trình slide
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Exercise Tabs */}
          <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
            {Object.keys(solutions).map((k) => (
              <button
                key={k}
                onClick={() => setActiveExercise(k)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeExercise === k ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
                }`}
              >
                {solutions[k].title.split(" (")[0]}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-xl bg-purple-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-purple-700 shadow-sm"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Đã Sao Chép!" : "Copy Lời Giải"}</span>
          </button>
        </div>
      </div>

      {/* Schema Header */}
      <div className="mt-5 rounded-xl bg-indigo-50/70 border border-indigo-200 p-4 font-mono text-xs text-indigo-950 space-y-1">
        <div><strong>Lược đồ:</strong> {curr.schema}</div>
        <div><strong>Tập phụ thuộc hàm F:</strong> {curr.fds}</div>
      </div>

      {/* Solutions Accordion / Sections */}
      <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="rounded-lg bg-gray-50 p-3.5 border border-gray-200 space-y-1">
          <strong className="text-indigo-900 block font-bold font-sans text-xs">CÂU A: TÍNH BAO ĐÓNG</strong>
          <pre className="text-gray-800 whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.partA}</pre>
        </div>

        <div className="rounded-lg bg-gray-50 p-3.5 border border-gray-200 space-y-1">
          <strong className="text-indigo-900 block font-bold font-sans text-xs">CÂU B: CHỨNG MINH / SUY DẪN / PHỦ TỐI THIỂU</strong>
          <pre className="text-gray-800 whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.partB}</pre>
        </div>

        {curr.partC && (
          <div className="rounded-lg bg-emerald-50/60 p-3.5 border border-emerald-200 space-y-1">
            <strong className="text-emerald-900 block font-bold font-sans text-xs">CÂU C: TÌM KHÓA CỦA LƯỢC ĐỒ</strong>
            <pre className="text-emerald-950 whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.partC}</pre>
          </div>
        )}

        {curr.partD && (
          <div className="rounded-lg bg-purple-50/60 p-3.5 border border-purple-200 space-y-1">
            <strong className="text-purple-900 block font-bold font-sans text-xs">CÂU D: TÌM PHỦ TỐI THIỂU / TẤT CẢ CÁC KHÓA</strong>
            <pre className="text-purple-950 whitespace-pre-wrap font-mono text-xs leading-relaxed">{curr.partD}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
