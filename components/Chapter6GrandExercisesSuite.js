"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Layers, Award, FileText, Check, HelpCircle } from "lucide-react";

export default function Chapter6GrandExercisesSuite() {
  const [activeTab, setActiveTab] = useState("bai1");
  const [subTabBai1, setSubTabBai1] = useState("a");

  const bai1Solutions = {
    a: {
      schema: "Q(A, B, C, D, E, G)",
      fds: "F = { A → BC, C → DE, E → G }",
      key: "Khóa duy nhất: K = { A } (|K| = 1)",
      prime: "{ A }",
      nonPrime: "{ B, C, D, E, G }",
      result: "DẠNG CHUẨN 2 (2NF)",
      explanation: "• Vì |K| = 1 nên Q tự động đạt 2NF.\n• Xét phụ thuộc bắc cầu: A → C và C → DE (C không là siêu khóa và D, E không là thuộc tính khóa) ⟹ Vi phạm 3NF.\n⟹ Kết luận: Q đạt 2NF."
    },
    b: {
      schema: "Q(A, B, C, D, E, G, H)",
      fds: "F = { C → AB, D → E, B → G }",
      key: "Khóa duy nhất: K = { C, D, H }",
      prime: "{ C, D, H }",
      nonPrime: "{ A, B, E, G }",
      result: "DẠNG CHUẨN 1 (1NF)",
      explanation: "• Xét FD C → AB: Vế trái C ⊂ K = CDH (tập con của khóa), vế phải A, B là thuộc tính không khóa.\n• Do đó A, B phụ thuộc bộ phận vào khóa ⟹ Vi phạm 2NF.\n⟹ Kết luận: Q chỉ đạt 1NF."
    },
    c: {
      schema: "Q(A, B, C, D, E, G, H)",
      fds: "F = { A → BC, D → E, H → G }",
      key: "Khóa duy nhất: K = { A, D, H }",
      prime: "{ A, D, H }",
      nonPrime: "{ B, C, E, G }",
      result: "DẠNG CHUẨN 1 (1NF)",
      explanation: "• Xét FD A → BC: Vế trái A ⊂ K = ADH, vế phải B, C không khóa ⟹ Phụ thuộc bộ phận.\n• Xét D → E và H → G cũng đều là phụ thuộc bộ phận ⟹ Vi phạm 2NF.\n⟹ Kết luận: Q chỉ đạt 1NF."
    },
    d: {
      schema: "Q(A, B, C, D, E, G)",
      fds: "F = { AB → C, C → B, ABD → E, G → A }",
      key: "Các khóa: K₁ = ABD, K₂ = CBD, K₃ = GBD",
      prime: "{ A, B, C, D, G }",
      nonPrime: "{ E }",
      result: "DẠNG CHUẨN 3 (3NF)",
      explanation: "• Tập thuộc tính không khóa chỉ có {E}.\n• E chỉ xuất hiện ở ABD → E (với ABD là siêu khóa).\n• Các FD khác: AB → C (C là thuộc tính khóa), C → B (B là thuộc tính khóa), G → A (A là thuộc tính khóa) ⟹ Thỏa mãn 3NF 100%!\n• Tuy nhiên C → B và G → A có vế trái không là siêu khóa ⟹ Không đạt BCNF.\n⟹ Kết luận: Q đạt 3NF."
    },
    e: {
      schema: "Q(A, B, C, D, E, G, H, I)",
      fds: "F = { AC → B, BI → ACD, ABC → D, H → I, ACE → BCG, CG → A } (Phủ tối thiểu)",
      key: "Các khóa: K₁ = ACEH, K₂ = BIEH, K₃ = CGEH",
      prime: "{ A, B, C, E, G, H, I }",
      nonPrime: "{ D }",
      result: "DẠNG CHUẨN 2 (2NF)",
      explanation: "• Non-prime chỉ có {D}. D xuất hiện ở BI → ACD và ABC → D.\n• Vế trái BI và ABC đều không phải là tập con của bất kỳ khóa nào ⟹ Q đạt 2NF.\n• Xét ABC → D: ABC không là siêu khóa ((ABC)⁺ = ABCD ≠ U) và D không là thuộc tính khóa ⟹ Vi phạm 3NF.\n⟹ Kết luận: Q đạt 2NF."
    }
  };

  const currB1 = bai1Solutions[subTabBai1];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Chapter6GrandExercisesSuite</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Bài Tập Lớn Chương VI (Mục 10)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Giải chi tiết từng bước trọn bộ Bài 1 (5 câu a, b, c, d, e) và Bài 2 (Chứng minh, Tìm khóa, Chuẩn hóa BCNF/3NF)
            </p>
          </div>
        </div>

        {/* Main Tab Switcher */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setActiveTab("bai1")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "bai1" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bài 1: Xác Định Dạng Chuẩn
          </button>
          <button
            onClick={() => setActiveTab("bai2")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "bai2" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bài 2: Chứng Minh &amp; Phân Rã
          </button>
        </div>
      </div>

      {/* Bài 1 Tab Content */}
      {activeTab === "bai1" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          {/* Sub-tabs a, b, c, d, e */}
          <div className="flex gap-2">
            {["a", "b", "c", "d", "e"].map((c) => (
              <button
                key={c}
                onClick={() => setSubTabBai1(c)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  subTabBai1 === c ? "bg-purple-600 text-white shadow-sm" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Câu {c})
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <strong className="text-purple-950 font-sans text-sm">{currB1.schema}</strong>
              <span className="font-bold text-xs bg-purple-100 text-purple-900 px-3 py-1 rounded-full border border-purple-300">
                {currB1.result}
              </span>
            </div>

            <div className="space-y-1 text-gray-700 font-sans text-xs">
              <p>• <strong>Tập F:</strong> <code>{currB1.fds}</code></p>
              <p>• <strong>Khóa:</strong> <code className="text-indigo-800 font-bold">{currB1.key}</code></p>
              <p>• <strong>Prime:</strong> <code>{currB1.prime}</code> &bull; <strong>Non-prime:</strong> <code>{currB1.nonPrime}</code></p>
            </div>

            <div className="rounded-xl bg-purple-50/70 p-4 border border-purple-200 text-purple-950 space-y-1 font-sans text-xs">
              <strong className="block text-purple-900 font-bold mb-1">🔍 LỜI GIẢI CHI TIẾT:</strong>
              <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-purple-950">{currB1.explanation}</pre>
            </div>
          </div>
        </div>
      )}

      {/* Bài 2 Tab Content */}
      {activeTab === "bai2" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3">
            <div className="border-b border-gray-100 pb-2">
              <strong className="text-indigo-950 font-sans text-sm block">Đề bài: Q(C, D, E, G, H, K)</strong>
              <span className="text-xs text-gray-600 font-mono">F = {"{ CK → H, C → D, E → C, E → G, CK → E }"}</span>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="bg-blue-50/70 p-3.5 rounded-lg border border-blue-200 space-y-1">
                <strong className="text-blue-950 block font-bold">a) Chứng minh EK &rarr; DH:</strong>
                <p className="font-mono text-xs text-blue-900">
                  Tính (EK)⁺ theo F:
                  <br />• Bước 0: (EK)⁺ = {"{ E, K }"}
                  <br />• E &rarr; C ⟹ (EK)⁺ = {"{ E, K, C }"}
                  <br />• E &rarr; G ⟹ (EK)⁺ = {"{ E, K, C, G }"}
                  <br />• C &rarr; D ⟹ (EK)⁺ = {"{ E, K, C, G, D }"}
                  <br />• CK &rarr; H ⟹ (EK)⁺ = {"{ E, K, C, G, D, H }"} = U
                  <br />Vì DH &sube; (EK)⁺ ⟹ <strong>EK &rarr; DH là đúng (ĐPCM)!</strong>
                </p>
              </div>

              <div className="bg-emerald-50/70 p-3.5 rounded-lg border border-emerald-200 space-y-1">
                <strong className="text-emerald-950 block font-bold">b) Tìm tất cả các khóa của Q:</strong>
                <p className="font-mono text-xs text-emerald-900">
                  • N = {"{ K }"} (K không xuất hiện ở vế phải).
                  <br />• Tính (K)⁺ = K &#8800; U.
                  <br />• Thử kết hợp với E: (EK)⁺ = U và không có tập con thực sự nào của EK có bao đóng bằng U.
                  <br />⟹ <strong>Khóa duy nhất của Q là: K = {"{ E, K }"}</strong>.
                </p>
              </div>

              <div className="bg-amber-50/70 p-3.5 rounded-lg border border-amber-200 space-y-1">
                <strong className="text-amber-950 block font-bold">c) Xác định dạng chuẩn cao nhất của Q:</strong>
                <p className="font-mono text-xs text-amber-900">
                  • Khóa K = EK ⟹ Prime = {"{ E, K }"}, Non-prime = {"{ C, D, G, H }"}.
                  <br />• Xét FD E &rarr; C: Vế trái E &sub; EK (tập con của khóa), vế phải C không khóa ⟹ Phụ thuộc bộ phận!
                  <br />⟹ <strong>Dạng chuẩn cao nhất của Q là 1NF (Không đạt 2NF, 3NF, BCNF)</strong>.
                </p>
              </div>

              <div className="bg-purple-50/70 p-3.5 rounded-lg border border-purple-200 space-y-1">
                <strong className="text-purple-950 block font-bold">d) Phân rã Q thành các LĐQH con đạt BCNF / 3NF:</strong>
                <pre className="font-mono text-xs text-purple-900 whitespace-pre-wrap leading-relaxed">
Phân rã BCNF (áp dụng Delobel):
• R₁(E, C, G) với F₁ = {"{ E → C, E → G }"}, Khóa: E (Đạt BCNF)
• R₂(C, D) với F₂ = {"{ C → D }"}, Khóa: C (Đạt BCNF)
• R₃(C, K, H) với F₃ = {"{ CK → H }"}, Khóa: CK (Đạt BCNF)
• R₄(E, K) với Khóa: EK (Chứa khóa của Q)
⟹ Phép tách đạt BCNF và bảo toàn nội dung 100%!
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
