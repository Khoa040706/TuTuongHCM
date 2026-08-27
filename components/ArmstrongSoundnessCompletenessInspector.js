"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Zap, Scale, ArrowRight, Layers, Award } from "lucide-react";

export default function ArmstrongSoundnessCompletenessInspector() {
  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ArmstrongSoundnessCompletenessInspector</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Tính Đúng Đắn &amp; Đầy Đủ
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bộ giải phẫu tính Sound &amp; Complete của hệ tiên đề Armstrong và sức mạnh của Bổ Đề 3
            </p>
          </div>
        </div>
      </div>

      {/* 2 Core Properties Grid */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {/* Property 1: Soundness */}
        <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            1. TÍNH ĐÚNG ĐẮN (SOUNDNESS - BỔ ĐỀ 1)
          </div>
          <div className="font-mono text-xs text-emerald-950 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 font-bold">
            F ⊢ f ⇒ F ⊨ f (F⁺ ⊆ F^⊨)
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Mọi phụ thuộc hàm f suy diễn ra được từ F bằng hệ tiên đề Armstrong đều là <strong>hệ quả logic thực sự</strong> thỏa mãn trên mọi thể hiện quan hệ r. Không bao giờ suy diễn ra phụ thuộc hàm sai.
          </p>
        </div>

        {/* Property 2: Completeness */}
        <div className="rounded-xl border border-cyan-200 bg-white p-4 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase">
            <Award className="h-4 w-4 text-cyan-600" />
            2. TÍNH ĐẦY ĐỦ (COMPLETENESS)
          </div>
          <div className="font-mono text-xs text-cyan-950 bg-cyan-50 p-2.5 rounded-lg border border-cyan-100 font-bold">
            F ⊨ f ⇒ F ⊢ f (F^⊨ ⊆ F⁺)
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Tất cả các phụ thuộc hàm f là hệ quả logic của F đều có thể <strong>chứng minh và tìm thấy được</strong> thông qua hệ tiên đề Armstrong. Không có phụ thuộc hàm đúng nào bị bỏ sót!
          </p>
        </div>
      </div>

      {/* Lemma 3 Magic Bridge */}
      <div className="mt-5 rounded-xl border border-teal-300 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-950 uppercase tracking-wider">
          <Zap className="h-4 w-4 text-amber-500" />
          BỔ ĐỀ 3: CÂY CẦU NỐI ĐẠI SỐ VÀ THUẬT TOÁN ĐA THỨC
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm border border-teal-200 font-mono text-sm font-bold text-indigo-900 text-center">
          {"F ⊢ (X → Y) ⟺ Y ⊆ X⁺"}
        </div>

        <p className="text-xs text-gray-700 leading-relaxed font-medium">
          <strong>💡 Ý nghĩa đột phá: </strong>Để kiểm tra xem một phụ thuộc hàm <code>X &rarr; Y</code> có đúng trong CSDL hay không, ta <strong>không cần phải mày mò suy diễn thủ công</strong> bằng 6 luật Armstrong (vốn rất khó và tốn thời gian). Thay vào đó, ta chỉ cần <strong>chạy thuật toán tính bao đóng X⁺</strong> rồi kiểm tra xem <code>Y ⊆ X⁺</code> hay không. Nếu có thì <code>X &rarr; Y</code> đúng 100%!
        </p>
      </div>
    </div>
  );
}
