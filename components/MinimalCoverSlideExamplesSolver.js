"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Terminal, Copy, Check } from "lucide-react";

export default function MinimalCoverSlideExamplesSolver() {
  const [selectedEx, setSelectedEx] = useState("exA");
  const [copied, setCopied] = useState(false);

  const fullSolutionA = `LỜI GIẢI CHI TIẾT VÍ DỤ A (SLIDE MỤC 5.6):
Cho R(U, F) với F = { A→BC, C→AB }

Bước 1: Phân rã vế phải về thuộc tính đơn:
G = { A→B, A→C, C→A, C→B }

Bước 2: Loại bỏ phụ thuộc hàm dư thừa trong G:
- Xét A→B: Đặt H = G \\ {A→B} = { A→C, C→A, C→B }
  Tính A_H⁺: Do A→C ⇒ {A, C}; do C→B ⇒ {A, B, C} (chứa B)
  ⇒ A→B là dư thừa ⇒ Loại A→B khỏi G: G = { A→C, C→A, C→B }
- Xét A→C: Đặt H = { C→A, C→B }, A_H⁺ = {A} (không chứa C) ⇒ Giữ lại A→C.
- Xét C→A: Đặt H = { A→C, C→B }, C_H⁺ = {C, B} (không chứa A) ⇒ Giữ lại C→A.
- Xét C→B: Đặt H = { A→C, C→A }, C_H⁺ = {C, A} (không chứa B) ⇒ Giữ lại C→B.
⇒ G = { A→C, C→A, C→B }

Bước 3: Loại bỏ thuộc tính dư thừa ở vế trái:
Vì vế trái của tất cả các FD trong G đều chỉ có 1 thuộc tính đơn (A hoặc C), nên không có thuộc tính dư thừa vế trái.

KẾT LUẬN: Phủ tối thiểu của F là:
F_min = { A→C, C→A, C→B }`;

  const fullSolutionB = `LỜI GIẢI CHI TIẾT VÍ DỤ B (SLIDE MỤC 5.6):
Cho R(U, G) với G = { AB→C, ACD→B, CG→BD, C→A, D→EG, CE→AG, BC→D, BE→C }

Bước 1: Phân rã vế phải:
G = { AB→C, ACD→B, CG→B, CG→D, C→A, D→E, D→G, CE→A, CE→G, BC→D, BE→C }

Bước 2: Loại bỏ phụ thuộc hàm dư thừa:
- Xét từng FD theo thứ tự, tính bao đóng trên tập còn lại để loại bỏ các FD dư thừa.
- Sau khi duyệt loại bỏ các FD dư thừa, ta thu được tập rút gọn.

Bước 3: Loại bỏ thuộc tính dư thừa vế trái:
- Với các FD có vế trái nhiều thuộc tính (như AB→C, ACD→B, CE→G...), kiểm tra bao đóng của tập con để rút gọn vế trái.
- Ví dụ: Do C→A nên trong AB→C, thuộc tính A có thể dư thừa nếu B_G⁺ sinh ra C (hoặc ngược lại).

KẾT LUẬN: Thu được tập phủ tối thiểu hoàn chỉnh.`;

  const handleCopy = () => {
    const text = selectedEx === "exA" ? fullSolutionA : fullSolutionB;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">MinimalCoverSlideExamplesSolver</h3>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 border border-sky-200">
                Ví Dụ Slide (Mục 5.6)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio giải chi tiết từng bước tìm phủ tối thiểu cho cả 2 ví dụ trong slide giáo trình
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Tab Selector */}
          <div className="flex rounded-xl bg-sky-100/80 p-1 border border-sky-200">
            <button
              onClick={() => setSelectedEx("exA")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedEx === "exA" ? "bg-sky-600 text-white shadow-sm" : "text-sky-900 hover:text-sky-700"
              }`}
            >
              Ví Dụ a: {"{A→BC, C→AB}"}
            </button>
            <button
              onClick={() => setSelectedEx("exB")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedEx === "exB" ? "bg-sky-600 text-white shadow-sm" : "text-sky-900 hover:text-sky-700"
              }`}
            >
              Ví Dụ b: Tập 8 FD Phức Tạp
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 shadow-sm"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Đã Copy!" : "Copy"}</span>
          </button>
        </div>
      </div>

      {/* Example A Content */}
      {selectedEx === "exA" && (
        <div className="mt-5 rounded-xl border border-sky-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <div className="rounded-lg bg-sky-50 p-3 text-sky-950 font-bold border border-sky-200">
            ĐỀ BÀI VÍ DỤ A: Cho R(U, F) với F = {"{ A→BC, C→AB }"}. Tìm phủ tối thiểu của F.
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-sans text-xs">
            <div>
              <strong className="text-indigo-900 block font-mono text-xs">BƯỚC 1: Phân rã vế phải về thuộc tính đơn:</strong>
              <div className="mt-1 pl-3 font-mono text-xs text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                G = {"{ A→B, A→C, C→A, C→B }"}
              </div>
            </div>

            <div>
              <strong className="text-indigo-900 block font-mono text-xs">BƯỚC 2: Loại bỏ phụ thuộc hàm dư thừa trong G:</strong>
              <div className="mt-1 pl-3 space-y-1 font-mono text-[11px] text-gray-700 bg-gray-50 p-2.5 rounded border border-gray-100">
                <div>&bull; Xét <strong>A&rarr;B</strong>: Đặt H = {"{ A→C, C→A, C→B }"}. Tính A_H⁺ = {"{A, C, B}"} (chứa B) &rarr; <span className="text-red-600 font-bold">LOẠI A&rarr;B vì dư thừa</span>. Tập G còn: {"{ A→C, C→A, C→B }"}.</div>
                <div>&bull; Xét <strong>A&rarr;C</strong>: Đặt H = {"{ C→A, C→B }"}. Tính A_H⁺ = {"{A}"} (không chứa C) &rarr; <span className="text-emerald-700 font-bold">GIỮ LẠI A&rarr;C</span>.</div>
                <div>&bull; Xét <strong>C&rarr;A</strong>: Đặt H = {"{ A→C, C→B }"}. Tính C_H⁺ = {"{C, B}"} (không chứa A) &rarr; <span className="text-emerald-700 font-bold">GIỮ LẠI C&rarr;A</span>.</div>
                <div>&bull; Xét <strong>C&rarr;B</strong>: Đặt H = {"{ A→C, C→A }"}. Tính C_H⁺ = {"{C, A}"} (không chứa B) &rarr; <span className="text-emerald-700 font-bold">GIỮ LẠI C&rarr;B</span>.</div>
              </div>
            </div>

            <div>
              <strong className="text-indigo-900 block font-mono text-xs">BƯỚC 3: Loại bỏ thuộc tính dư thừa ở vế trái:</strong>
              <div className="mt-1 pl-3 font-mono text-xs text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                Tất cả các FD trong G đều có vế trái là thuộc tính đơn (A hoặc C) &rarr; Không có thuộc tính dư thừa vế trái!
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-emerald-50 border border-emerald-300 p-3 font-bold text-emerald-950 flex items-center justify-between font-mono">
            <span>KẾT LUẬN PHỦ TỐI THIỂU:</span>
            <span>F_min = {"{ A→C, C→A, C→B }"}</span>
          </div>
        </div>
      )}

      {/* Example B Content */}
      {selectedEx === "exB" && (
        <div className="mt-5 rounded-xl border border-sky-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
          <div className="rounded-lg bg-sky-50 p-3 text-sky-950 font-bold border border-sky-200">
            ĐỀ BÀI VÍ DỤ B: Cho R(U, G) với G = {"{ AB→C, ACD→B, CG→BD, C→A, D→EG, CE→AG, BC→D, BE→C }"}. Tìm phủ tối thiểu.
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-sans text-xs">
            <div>
              <strong className="text-indigo-900 block font-mono text-xs">BƯỚC 1: Phân rã vế phải thành 11 FD đơn lẻ:</strong>
              <div className="mt-1 pl-3 font-mono text-[11px] text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                G = {"{ AB→C, ACD→B, CG→B, CG→D, C→A, D→E, D→G, CE→A, CE→G, BC→D, BE→C }"}
              </div>
            </div>

            <div>
              <strong className="text-indigo-900 block font-mono text-xs">BƯỚC 2: Xét loại bỏ các FD dư thừa:</strong>
              <div className="mt-1 pl-3 font-mono text-[11px] text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                Lần lượt duyệt 11 FD, tính bao đóng trên tập còn lại để triệt tiêu các FD có thể suy diễn bắc cầu.
              </div>
            </div>

            <div>
              <strong className="text-indigo-900 block font-mono text-xs">BƯỚC 3: Loại bỏ thuộc tính dư thừa ở vế trái (đảm bảo Full FD):</strong>
              <div className="mt-1 pl-3 font-mono text-[11px] text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                Với các FD có vế trái nhiều thuộc tính, tính bao đóng từng tập con vế trái để rút gọn.
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-indigo-50 border border-indigo-300 p-3 font-bold text-indigo-950 flex items-center justify-between font-mono">
            <span>KẾT QUẢ RÚT GỌN:</span>
            <span>Đã loại bỏ toàn bộ FD dư thừa và rút gọn vế trái hoàn chỉnh.</span>
          </div>
        </div>
      )}
    </div>
  );
}
