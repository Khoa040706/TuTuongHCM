"use client";

import React, { useState } from "react";
import { Terminal, CheckCircle2, XCircle, ArrowRight, Sparkles, Award, Layers, Copy, Check } from "lucide-react";

export default function SlideMasterExerciseSolver() {
  const [activeTab, setActiveTab] = useState("partA"); // 'partA' | 'partB' | 'partC'
  const [copied, setCopied] = useState(false);

  const fullSolutionText = `LỜI GIẢI CHI TIẾT BÀI TẬP SLIDE CHƯƠNG V (MỤC IV):
Lược đồ: R(A, B, C, D, E, G, H, I, J, L, M)
Tập F = { M→ABC, AB→CH, ABC→EH, MB→CDG, DG→HL }

a) Tính bao đóng X = M⁺:
- X₀ = M
- Do M→ABC ⇒ X₁ = MABC
- Do ABC→EH ⇒ X₂ = MABCEH
- Do AB→CH ⇒ X₃ = MABCEH (dừng)
⇒ M⁺ = { A, B, C, E, H, M }

b) M→DG có được suy dẫn từ F không?
- Theo Bổ đề 3: F ⊢ M→DG ⇔ DG ⊆ M⁺
- Vì DG ⊄ M⁺ = {A, B, C, E, H, M} (thiếu D và G)
⇒ M→DG KHÔNG ĐƯỢC SUY DẪN TỪ F.

c) Tìm tất cả các khóa của lược đồ quan hệ:
- UR = { A, B, C, D, E, G, H, L }
- UL = { M, A, B, C, D, G }
- N = U \\ UR = { I, J, M }
- D = UR \\ UL = { E, H, L }
- L = U \\ (N ∪ D) = { A, B, C, D, G }

1) (IJM)⁺ = { A, B, C, E, H, I, J, M } ≠ U ⇒ Cần kết hợp với L.
2) Thử kết hợp với tập con Li ⊆ L:
• Xét X = IJM ∪ {B} = IJMB:
  (IJMB)⁺ = ABCDEGHIJLM = U ⇒ K₁ = { B, I, J, M } là khóa thứ nhất!
• Xét X = IJM ∪ {D, G} = IJMDG:
  (IJMDG)⁺ = ABCDEGHIJLM = U ⇒ K₂ = { D, G, I, J, M } là khóa thứ hai!

KẾT LUẬN: Quan hệ có đúng 2 khóa tối tiểu:
K₁ = { B, I, J, M }
K₂ = { D, G, I, J, M }`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullSolutionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Terminal className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SlideMasterExerciseSolver</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Bài Tập Lớn Trong Slide (Mục 4)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio giải trọn vẹn 3 câu: Tính M⁺, Kiểm chứng M &rarr; DG bằng Bổ đề 3 và Tìm toàn bộ các khóa
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Đã Sao Chép Lời Giải!" : "Copy Trọn Bộ Lời Giải"}
        </button>
      </div>

      {/* Schema Context */}
      <div className="mt-5 rounded-xl bg-indigo-50/70 border border-indigo-200 p-4 font-mono text-xs text-indigo-950 space-y-1">
        <div><strong>Lược đồ (11 thuộc tính):</strong> U = ABCDEGHIJLM</div>
        <div><strong>Tập F:</strong> {"{ M→ABC, AB→CH, ABC→EH, MB→CDG, DG→HL }"}</div>
      </div>

      {/* Tab Selector */}
      <div className="mt-4 flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
        <button
          onClick={() => setActiveTab("partA")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
            activeTab === "partA" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
          }`}
        >
          Câu a: Tính Bao Đóng M⁺
        </button>
        <button
          onClick={() => setActiveTab("partB")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
            activeTab === "partB" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
          }`}
        >
          Câu b: Kiểm Tra M → DG
        </button>
        <button
          onClick={() => setActiveTab("partC")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
            activeTab === "partC" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
          }`}
        >
          Câu c: Tìm Tất Cả Các Khóa
        </button>
      </div>

      {/* Tab 1: Part A */}
      {activeTab === "partA" && (
        <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <div className="font-bold text-indigo-950 text-sm border-b border-gray-100 pb-2">
            CÂU A: TÍNH BAO ĐÓNG CỦA TẬP THUỘC TÍNH X = M⁺
          </div>
          <div className="space-y-1.5 text-gray-700 leading-relaxed font-sans">
            <div>&bull; <strong>Bước 0:</strong> Khởi tạo X₀ = {"{M}"}.</div>
            <div>&bull; <strong>Bước 1:</strong> Xét M &rarr; ABC &isin; F (có M &sube; X₀) &rarr; X₁ = X₀ &cup; {"{A, B, C}"} = {"{M, A, B, C}"}.</div>
            <div>&bull; <strong>Bước 2:</strong> Xét ABC &rarr; EH &isin; F (có ABC &sube; X₁) &rarr; X₂ = X₁ &cup; {"{E, H}"} = {"{M, A, B, C, E, H}"}.</div>
            <div>&bull; <strong>Bước 3:</strong> Xét AB &rarr; CH &isin; F (đã có C, H &isin; X₂) &rarr; X₃ = X₂ = {"{M, A, B, C, E, H}"} (Dừng thuật toán).</div>
          </div>
          <div className="rounded-lg bg-emerald-50 border border-emerald-300 p-3 font-bold text-emerald-900">
            &rArr; KẾT QUẢ: M⁺ = {"{ A, B, C, E, H, M }"}
          </div>
        </div>
      )}

      {/* Tab 2: Part B */}
      {activeTab === "partB" && (
        <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <div className="font-bold text-indigo-950 text-sm border-b border-gray-100 pb-2">
            CÂU B: KIỂM TRA PHỤ THUỘC HÀM M → DG CÓ ĐƯỢC SUY DẪN TỪ F HAY KHÔNG?
          </div>
          <div className="space-y-2 text-gray-700 leading-relaxed font-sans">
            <p>
              &bull; <strong>Áp dụng Bổ đề 3:</strong> F &vdash; (M &rarr; DG) &hArr; DG &sube; M⁺.
            </p>
            <p>
              &bull; Từ kết quả câu a, ta có: M⁺ = {"{A, B, C, E, H, M}"}.
            </p>
            <p>
              &bull; Ta thấy tập thuộc tính vế phải DG gồm 2 phần tử D và G. Cả hai đều <strong>không nằm trong M⁺</strong> (DG &nsube; M⁺).
            </p>
          </div>
          <div className="rounded-lg bg-rose-50 border border-rose-300 p-3 font-bold text-rose-900">
            &rArr; KẾT LUẬN: Phụ thuộc hàm M → DG KHÔNG ĐƯỢC SUY DẪN TỪ F!
          </div>
        </div>
      )}

      {/* Tab 3: Part C */}
      {activeTab === "partC" && (
        <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <div className="font-bold text-indigo-950 text-sm border-b border-gray-100 pb-2">
            CÂU C: TÌM TẤT CẢ CÁC KHÓA CỦA LƯỢC ĐỒ QUAN HỆ R(U, F)
          </div>
          <div className="space-y-2 text-gray-700 leading-relaxed font-sans">
            <div>
              <strong>1. Phân loại 3 tập thuộc tính:</strong>
              <div className="mt-1 pl-3 space-y-0.5 font-mono text-[11px]">
                <div>&bull; UR = {"{A, B, C, D, E, G, H, L}"} (Các thuộc tính ở vế phải)</div>
                <div>&bull; UL = {"{M, A, B, C, D, G}"} (Các thuộc tính ở vế trái)</div>
                <div>&bull; <strong className="text-emerald-700">Tập N = U \ UR = {"{I, J, M}"}</strong> (Gồm thuộc tính cô lập I, J và nguồn M &rarr; Bắt buộc có trong mọi khóa)</div>
                <div>&bull; <strong className="text-rose-700">Tập D = UR \ UL = {"{E, H, L}"}</strong> (Chỉ ở vế phải &rarr; Loại bỏ hoàn toàn khỏi khóa)</div>
                <div>&bull; <strong className="text-amber-700">Tập L = U \ (N ∪ D) = {"{A, B, C, D, G}"}</strong> (Thuộc tính trung gian)</div>
              </div>
            </div>

            <div>
              <strong>2. Kiểm tra tập N = {"{I, J, M}"}:</strong>
              <div className="mt-1 pl-3 font-mono text-[11px]">
                (IJM)⁺ = {"{A, B, C, E, H, I, J, M}"} &ne; U (thiếu D, G, L) &rarr; Cần kết hợp N với các tập con của L.
              </div>
            </div>

            <div>
              <strong>3. Thử nghiệm tổ hợp các tập con Li &sube; L:</strong>
              <div className="mt-1 pl-3 space-y-1 font-mono text-[11px]">
                <div className="bg-emerald-50 p-2 rounded border border-emerald-200 text-emerald-950">
                  &bull; Xét X = N &cup; {"{B}"} = {"{I, J, M, B}"}:
                  <br />
                  (IJMB)⁺ = IJMB &cup; {"{A, C}"} &cup; {"{E, H}"} &cup; {"{D, G}"} &cup; {"{L}"} = ABCDEGHIJLM = U!
                  <br />
                  &rarr; <strong>Khóa tối tiểu thứ nhất: K₁ = {"{ B, I, J, M }"}</strong>.
                </div>

                <div className="bg-emerald-50 p-2 rounded border border-emerald-200 text-emerald-950 mt-1">
                  &bull; Xét X = N &cup; {"{D, G}"} = {"{I, J, M, D, G}"} (không chứa B):
                  <br />
                  (IJMDG)⁺ = IJMDG &cup; {"{A, B, C}"} &cup; {"{E, H}"} &cup; {"{L}"} = ABCDEGHIJLM = U!
                  <br />
                  &rarr; <strong>Khóa tối tiểu thứ hai: K₂ = {"{ D, G, I, J, M }"}</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-indigo-50 border border-indigo-300 p-3 font-bold text-indigo-950 flex items-center justify-between">
            <span>KẾT LUẬN CUỐI CÙNG:</span>
            <span>Quan hệ có 2 khóa tối tiểu: K₁ = {"{ B, I, J, M }"} và K₂ = {"{ D, G, I, J, M }"}</span>
          </div>
        </div>
      )}
    </div>
  );
}
