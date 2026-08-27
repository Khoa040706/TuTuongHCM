"use client";

import React, { useState } from "react";
import { CheckCircle2, BookOpen, AlertOctagon, Sparkles } from "lucide-react";

export default function BstSuccessorProofVisualizer() {
  const [activeStep, setActiveStep] = useState(1);

  const proofSteps = [
    {
      step: 1,
      title: "Bước 1: Đỉnh x có 2 con ⇒ Chắc chắn có Cây con Phải",
      claim: "Đỉnh x có 2 con (Both Left and Right children exist)",
      desc: "Vì giả thiết là xóa đỉnh có 2 con (Case 3), nên nhánh con bên phải (right child) của x bắt buộc phải tồn tại.",
      visualType: "step1",
    },
    {
      step: 2,
      title: "Bước 2: Successor của x chính là Phần tử Nhỏ nhất (Min) của Cây con Phải",
      claim: "Successor(x) = FindMin(x.right)",
      desc: "Theo định nghĩa của Successor khi đỉnh có con phải, phần tử kế tiếp lớn hơn x chính là phần tử nhỏ nhất nằm trong toàn bộ nhánh cây con bên phải.",
      visualType: "step2",
    },
    {
      step: 3,
      title: "Bước 3: Chứng minh Phản chứng — Phần tử Min KHÔNG BAO GIỜ có Con Trái",
      claim: "Min(Subtree) không thể có con trái!",
      desc: "Giả sử ngược lại: Nếu Successor có con trái, thì con trái đó sẽ có giá trị BÉ HƠN Successor. Điều này MÂU THUẪN HOÀN TOÀN với giả thiết Successor là phần tử nhỏ nhất của cây con!",
      visualType: "step3",
    },
    {
      step: 4,
      title: "Bước 4: Kết luận — Successor của x có TỐI ĐA 1 CON (Q.E.D)",
      claim: "Successor(x) có tối đa 1 con (hoặc 0 con hoặc 1 con phải)",
      desc: "Vì không thể có con trái, Successor chỉ có thể là lá (0 con) hoặc có đúng 1 con phải. Do đó, việc xóa Successor cũ luôn quy về Case 1 hoặc Case 2 — cực kỳ đơn giản và tốn O(1)!",
      visualType: "step4",
    },
  ];

  const currentStepObj = proofSteps.find((s) => s.step === activeStep) || proofSteps[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trọng Tâm Lý Thuyết &amp; Câu Hỏi Thi Tự Luận</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Chứng Minh 4 Bước: &quot;Successor Của x Luôn Có Tối Đa 1 Con&quot;
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải thích nguyên nhân toán học vì sao thay thế đỉnh 2 con bằng Successor luôn đảm bảo bài toán xóa giải được trong O(1) mà không vi phạm BST Property.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono font-bold text-xs shadow-sm">
            Chứng minh 4 bước (Q.E.D)
          </span>
        </div>
      </div>

      {/* 4 Step Progress Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {proofSteps.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
              activeStep === s.step
                ? "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.02]"
                : activeStep > s.step
                ? "bg-emerald-50/70 border-emerald-200 text-emerald-900 hover:bg-emerald-100"
                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 font-mono">
                Bước {s.step}
              </span>
              {activeStep > s.step ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              )}
            </div>
            <div className="text-xs font-bold mt-1 line-clamp-1">
              {s.step === 1 ? "Có con phải" : s.step === 2 ? "Succ = Min" : s.step === 3 ? "Phản chứng Min" : "Tối đa 1 con"}
            </div>
          </button>
        ))}
      </div>

      {/* Main Step Canvas + Detailed Proof Argument */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Proof Schematic Box (6 cols) */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-emerald-100 flex flex-col items-center justify-center relative min-h-[320px] shadow-sm">
          {/* Visual Step 1: Node x with 2 children */}
          {activeStep === 1 && (
            <div className="flex flex-col items-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-600 border-2 border-emerald-400 text-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
                x (2 con)
              </div>
              <div className="w-48 h-10 flex justify-between px-6 relative mt-1">
                <div className="w-1/2 border-r-2 border-slate-300 rotate-[35deg] origin-top-right transform -translate-x-4" />
                <div className="w-1/2 border-l-2 border-emerald-500 -rotate-[35deg] origin-top-left transform translate-x-4" />
              </div>
              <div className="w-56 flex justify-between items-center text-xs font-mono font-bold">
                <span className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                  x.left (có)
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 animate-pulse">
                  x.right (CHẮC CHẮN CÓ)
                </span>
              </div>
            </div>
          )}

          {/* Visual Step 2: Min of right subtree */}
          {activeStep === 2 && (
            <div className="flex flex-col items-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-300 text-slate-700 font-mono font-bold flex items-center justify-center">
                x
              </div>
              <div className="w-32 border-l-2 border-slate-300 -rotate-[35deg] origin-top-left ml-24 h-8" />
              <div className="w-24 h-24 rounded-2xl bg-emerald-50/80 border-2 border-dashed border-emerald-400 flex flex-col items-center justify-center p-2 text-center">
                <span className="text-[10px] text-emerald-800 font-bold">Cây con phải</span>
                <div className="w-10 h-10 rounded-full bg-emerald-600 border border-emerald-300 text-white font-mono font-bold text-xs flex items-center justify-center mt-1 shadow-sm">
                  Min
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-800 font-bold mt-2">
                Successor(x) = Min(x.right)
              </span>
            </div>
          )}

          {/* Visual Step 3: Proof by Contradiction */}
          {activeStep === 3 && (
            <div className="flex flex-col items-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-600 border-2 border-emerald-400 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm text-center px-1">
                Successor (Min)
              </div>
              <div className="w-32 h-8 flex justify-between px-4 relative mt-1">
                <div className="w-1/2 border-r-2 border-rose-500 rotate-[35deg] origin-top-right transform -translate-x-3" />
                <div className="w-1/2 border-l-2 border-slate-300 -rotate-[35deg] origin-top-left transform translate-x-3" />
              </div>
              <div className="w-56 flex justify-between items-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 flex flex-col items-center">
                  <span className="font-bold">Giả sử có Left?</span>
                  <span className="text-[10px] text-rose-700">Left &lt; Min (VÔ LÝ!)</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                  Right (Có thể có)
                </div>
              </div>
              <div className="mt-3 px-3 py-1 rounded-xl bg-rose-100 border border-rose-300 text-rose-900 text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
                MÂU THUẪN VỚI GIẢ THIẾT MIN
              </div>
            </div>
          )}

          {/* Visual Step 4: Q.E.D Result */}
          {activeStep === 4 && (
            <div className="flex flex-col items-center text-center animate-fadeIn space-y-3">
              <div className="p-3 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 shadow-sm">
                <Sparkles className="w-8 h-8 animate-bounce" />
              </div>
              <h4 className="text-base font-bold text-emerald-900 font-mono">
                SUCCESSOR LUÔN CÓ &le; 1 CON
              </h4>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div>• Nếu 0 con &rarr; Xóa bằng <strong>Case 1</strong> (gỡ thẳng O(1))</div>
                <div>• Nếu 1 con (con phải) &rarr; Xóa bằng <strong>Case 2</strong> (nối con lên O(1))</div>
              </div>
              <span className="text-[11px] text-emerald-800 font-bold tracking-wider uppercase">
                Q.E.D — ĐIỀU PHẢI CHỨNG MINH
              </span>
            </div>
          )}
        </div>

        {/* Detailed Argument Explanation (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">
              Chi tiết lập luận
            </span>
            <h4 className="text-base font-bold text-slate-900 mt-0.5">
              {currentStepObj.title}
            </h4>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <div className="text-xs text-slate-600 font-semibold mb-1">Khẳng định:</div>
            <div className="text-sm font-bold font-mono text-emerald-950">
              {currentStepObj.claim}
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            {currentStepObj.desc}
          </p>

          <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
            <button
              onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 1))}
              disabled={activeStep === 1}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700 transition-all"
            >
              &larr; Bước trước
            </button>

            <span className="text-xs font-mono text-slate-500 font-bold">
              Bước {activeStep} / 4
            </span>

            <button
              onClick={() => setActiveStep((prev) => (prev < 4 ? prev + 1 : 4))}
              disabled={activeStep === 4}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-xs font-bold text-white shadow-sm transition-all"
            >
              Bước tiếp theo &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
