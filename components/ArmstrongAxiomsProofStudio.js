"use client";

import React, { useState } from "react";
import { BookOpen, GitBranch, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function ArmstrongAxiomsProofStudio() {
  const [selectedRule, setSelectedRule] = useState("a1");

  const rules = {
    a1: {
      category: "Tiên Đề Cơ Bản (Primary Axiom)",
      name: "(A1) Luật Phản Xạ (Reflexivity)",
      formula: "Nếu Y ⊆ X thì X → Y",
      meaning: "Một tập thuộc tính luôn luôn xác định hàm bất kỳ tập con nào của chính nó (Phụ thuộc hàm tầm thường - Trivial FD).",
      proof: "Giả sử t1[X] = t2[X]. Vì Y ⊆ X, nên hiển nhiên các thành phần thuộc tính trong Y cũng bằng nhau: t1[Y] = t2[Y]. Do đó X → Y luôn đúng."
    },
    a2: {
      category: "Tiên Đề Cơ Bản (Primary Axiom)",
      name: "(A2) Luật Tăng Trưởng (Augmentation)",
      formula: "Nếu X → Y và Z ⊆ U thì XZ → YZ (hoặc ZX → ZY)",
      meaning: "Ta có thể bổ sung cùng một tập thuộc tính Z vào cả 2 vế của một phụ thuộc hàm mà vẫn giữ nguyên tính đúng đắn.",
      proof: "Giả sử t1[XZ] = t2[XZ] ⇒ t1[X] = t2[X] và t1[Z] = t2[Z]. Vì X → Y ⇒ t1[Y] = t2[Y]. Kết hợp lại ta có t1[YZ] = t2[YZ]. Vậy XZ → YZ."
    },
    a3: {
      category: "Tiên Đề Cơ Bản (Primary Axiom)",
      name: "(A3) Luật Bắc Cầu (Transitivity)",
      formula: "Nếu X → Y và Y → Z thì X → Z",
      meaning: "Bắc cầu logic chuỗi xác định hàm từ X qua Y đến Z.",
      proof: "Giả sử t1[X] = t2[X]. Vì X → Y ⇒ t1[Y] = t2[Y]. Tiếp tục vì Y → Z ⇒ t1[Z] = t2[Z]. Kết luận: t1[X] = t2[X] ⇒ t1[Z] = t2[Z] ⇒ X → Z."
    },
    union: {
      category: "Quy Tắc Dẫn Xuất (Derived Rule)",
      name: "Quy Tắc Hợp (Union Rule)",
      formula: "Nếu X → Y và X → Z thì X → YZ",
      meaning: "Gộp chung các vế phải có cùng vế trái.",
      proof: "1) X → Y ⇒ XX → XY ⇒ X → XY (Tăng trưởng với X).\n2) X → Z ⇒ XY → YZ (Tăng trưởng với Y).\n3) Từ X → XY và XY → YZ ⇒ X → YZ (Bắc cầu)."
    },
    decomp: {
      category: "Quy Tắc Dẫn Xuất (Derived Rule)",
      name: "Quy Tắc Tách (Decomposition Rule)",
      formula: "Nếu X → YZ thì X → Y và X → Z",
      meaning: "Tách một phụ thuộc hàm có vế phải phức hợp thành nhiều phụ thuộc hàm đơn.",
      proof: "1) Vì Y ⊆ YZ ⇒ YZ → Y (Phản xạ).\n2) Kết hợp X → YZ và YZ → Y ⇒ X → Y (Bắc cầu).\n3) Tương tự Z ⊆ YZ ⇒ YZ → Z ⇒ X → Z."
    },
    pseudotrans: {
      category: "Quy Tắc Dẫn Xuất (Derived Rule)",
      name: "Quy Tắc Giả Bắc Cầu (Pseudotransitivity)",
      formula: "Nếu X → Y và WY → Z thì WX → Z (với W ⊆ U)",
      meaning: "Thay thế Y bằng X khi đứng kèm với tập W ở vế trái.",
      proof: "1) X → Y ⇒ WX → WY (Tăng trưởng với W).\n2) Kết hợp WX → WY và WY → Z ⇒ WX → Z (Bắc cầu)."
    }
  };

  const sampleProofs = [
    {
      id: 1,
      given: "F = {A → B, B → C}",
      query: "Chứng minh A → C",
      steps: "A → B và B → C ⇒ A → C (Áp dụng trực tiếp Luật Bắc Cầu A3)."
    },
    {
      id: 2,
      given: "F = {A → BC}",
      query: "Chứng minh A → B và A → C",
      steps: "A → BC và BC → B (Phản xạ) ⇒ A → B (Bắc cầu). Tương tự ta có A → C."
    },
    {
      id: 3,
      given: "F = {A → B, B → C}",
      query: "Chứng minh A → BC",
      steps: "A → B và B → C ⇒ A → C (Bắc cầu). Kết hợp A → B và A → C ⇒ A → BC (Luật Hợp)."
    },
    {
      id: 4,
      given: "F = {A → B}",
      query: "Chứng minh AC → B",
      steps: "Vì A ⊆ AC ⇒ AC → A (Phản xạ). Kết hợp AC → A và A → B ⇒ AC → B (Bắc cầu)."
    }
  ];

  const curr = rules[selectedRule];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ArmstrongAxiomsProofStudio</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Hệ Tiên Đề Armstrong &amp; 6 Quy Tắc
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá 3 tiên đề cơ bản, 3 quy tắc dẫn xuất và các bài toán chứng minh phụ thuộc hàm mẫu
            </p>
          </div>
        </div>

        {/* Switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-purple-100/80 p-1 border border-purple-200">
          {Object.keys(rules).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedRule(key)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                selectedRule === key ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
              }`}
            >
              {rules[key].name.split(" ")[1] || rules[key].name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Rule Details */}
      <div className="mt-5 rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="font-mono text-xs font-bold text-purple-800">{curr.name}</span>
          <span className="font-mono text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            {curr.category}
          </span>
        </div>

        <div className="rounded-lg bg-purple-50/70 p-3 font-mono text-xs font-bold text-purple-950 border border-purple-100">
          CÔNG THỨC: {curr.formula}
        </div>

        <div className="text-xs text-gray-700 leading-relaxed font-medium">
          <strong>Ý nghĩa: </strong>{curr.meaning}
        </div>

        <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-800 font-mono border border-gray-200 leading-relaxed whitespace-pre-wrap">
          <strong className="text-purple-900 font-sans">Chứng minh hình thức:</strong>
          <br />
          {curr.proof}
        </div>
      </div>

      {/* 4 Sample Exercises Grid */}
      <div className="mt-6">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          4 BÀI TOÁN DẪN XUẤT CHỨNG MINH MẪU TRONG GIÁO TRÌNH (MỤC 2.7):
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {sampleProofs.map((ex) => (
            <div key={ex.id} className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-indigo-700 font-bold border-b border-gray-100 pb-1">
                <span>Ví dụ {ex.id}: Cho {ex.given}</span>
                <span className="text-emerald-700 font-semibold">{ex.query}?</span>
              </div>
              <p className="text-gray-700 font-sans text-xs pt-1 leading-relaxed">
                &rarr; <strong>Lời giải: </strong>{ex.steps}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
