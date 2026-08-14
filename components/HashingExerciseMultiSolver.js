"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Play,
  Check,
  Search,
  BookOpen,
  Cpu,
  TrendingUp,
  Binary
} from "lucide-react";

export default function HashingExerciseMultiSolver() {
  const [tech, setTech] = useState("linear"); // "chaining", "linear", "quadratic", "double"
  const [stepIdx, setStepIdx] = useState(7); // Show all 7 keys inserted by default

  const rawKeys = [9, 1, 20, 5, 101, 66, 15];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục Bài Tập (Exercise) — Bộ Giải Đa Thuật Toán
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Bài Tập Thực Hành: Chèn Dãy [9, 1, 20, 5, 101, 66, 15] Vào Bảng Băm m = 7
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá và so sánh từng bước tính toán chi tiết của 4 kỹ thuật giải quyết va chạm trên cùng 1 bộ dữ liệu giáo trình
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <BookOpen className="w-3.5 h-3.5 text-rose-600" />
          Final Exercise
        </div>
      </div>

      {/* Problem Statement Card */}
      <div className="bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 text-slate-800 rounded-2xl p-4 border-2 border-rose-200 mb-5 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="space-y-1">
          <span className="text-rose-950 font-bold block uppercase">ĐỀ BÀI GIÁO TRÌNH:</span>
          <p className="text-slate-700 font-sans">
            Cho dãy số: <span className="font-mono text-rose-800 font-bold">9 &nbsp; 1 &nbsp; 20 &nbsp; 5 &nbsp; 101 &nbsp; 66 &nbsp; 15</span>. Thực hành chèn vào hash table với các kỹ thuật giải quyết collision đã học ($m = 7, h(k) = k \bmod 7$).
          </p>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {rawKeys.map((k, i) => (
            <span
              key={i}
              className="w-7 h-7 rounded-lg bg-white border-2 border-rose-300 flex items-center justify-center font-bold text-rose-950 text-xs shadow-2xs"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Technique Switcher Tabs */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setTech("chaining")}
          className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
            tech === "chaining"
              ? "bg-rose-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          1. Separate Chaining
        </button>
        <button
          onClick={() => setTech("linear")}
          className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
            tech === "linear"
              ? "bg-rose-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          2. Linear Probing
        </button>
        <button
          onClick={() => setTech("quadratic")}
          className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
            tech === "quadratic"
              ? "bg-rose-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          3. Quadratic Probing
        </button>
        <button
          onClick={() => setTech("double")}
          className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
            tech === "double"
              ? "bg-rose-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          4. Double Hashing
        </button>
      </div>

      {/* Visual Table & Trace Display */}
      <div className="bg-gradient-to-br from-rose-50/60 via-white to-slate-50 text-slate-800 rounded-2xl p-5 border-2 border-rose-200 shadow-sm mb-5 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-rose-100">
          <span className="text-rose-950 font-bold uppercase">
            TRẠNG THÁI BẢNG BĂM (m = 7, hash(k) = k mod 7)
          </span>
          <span className="text-rose-800 font-semibold bg-rose-100/80 px-2 py-0.5 rounded-full border border-rose-200">
            {tech === "chaining"
              ? "Linked Lists"
              : tech === "linear"
              ? "Linear: (h(k)+i) mod 7"
              : tech === "quadratic"
              ? "Quadratic: (h(k)+i²) mod 7"
              : "Double: (h₁(k) + i·h₂(k)) mod 7"}
          </span>
        </div>

        {/* 1. Separate Chaining Display */}
        {tech === "chaining" && (
          <div className="space-y-2 animate-fadeIn">
            {[
              { slot: 0, items: [] },
              { slot: 1, items: [1, 15] },
              { slot: 2, items: [9] },
              { slot: 3, items: [101, 66] },
              { slot: 4, items: [] },
              { slot: 5, items: [5] },
              { slot: 6, items: [20] }
            ].map((row) => (
              <div
                key={row.slot}
                className="p-2 bg-white rounded-xl border border-rose-200 flex items-center justify-between gap-2 shadow-2xs"
              >
                <span className="w-8 h-7 rounded bg-rose-50 text-rose-950 flex items-center justify-center font-bold border border-rose-200">
                  [{row.slot}]
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {row.items.length > 0 ? (
                    row.items.map((it, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-0.5 rounded bg-rose-50 text-rose-950 font-bold border border-rose-300 shadow-2xs">
                          {it}
                        </span>
                        {idx < row.items.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-amber-600 shrink-0 font-bold" />
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <span className="text-slate-400 italic">null (trống)</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Linear Probing Display */}
        {tech === "linear" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
              {[
                { slot: 0, val: 15, note: "15 (wrap around!)" },
                { slot: 1, val: 1, note: "1 mod 7 = 1" },
                { slot: 2, val: 9, note: "9 mod 7 = 2" },
                { slot: 3, val: 101, note: "101 mod 7 = 3" },
                { slot: 4, val: 66, note: "66 (nhảy sang 4)" },
                { slot: 5, val: 5, note: "5 mod 7 = 5" },
                { slot: 6, val: 20, note: "20 mod 7 = 6" }
              ].map((c) => (
                <div
                  key={c.slot}
                  className="p-2.5 bg-white border-2 border-blue-300 rounded-xl flex flex-col items-center justify-center gap-1 text-center shadow-xs"
                >
                  <span className="text-[10px] text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded font-bold border border-blue-200">
                    Slot [{c.slot}]
                  </span>
                  <span className="text-base font-black text-slate-900">{c.val}</span>
                  <span className="text-[9px] text-slate-500 font-sans font-semibold">{c.note}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-blue-950 font-sans text-xs shadow-2xs">
              • Khóa <strong>15</strong> ($15 \bmod 7 = 1$) va chạm tại 1, quét qua 2, 3, 4, 5, 6 (đều bận) rồi <strong>wrap around quay lại slot 0</strong> để lấp đầy 100% bảng băm!
            </div>
          </div>
        )}

        {/* 3. Quadratic Probing Display */}
        {tech === "quadratic" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
              {[
                { slot: 0, val: null, note: "Empty" },
                { slot: 1, val: 1, note: "1 mod 7 = 1" },
                { slot: 2, val: 9, note: "9 mod 7 = 2" },
                { slot: 3, val: 101, note: "101 mod 7 = 3" },
                { slot: 4, val: 66, note: "66 (Probe 1: 3+1²=4)" },
                { slot: 5, val: 5, note: "5 mod 7 = 5" },
                { slot: 6, val: 20, note: "20 mod 7 = 6" }
              ].map((c) => (
                <div
                  key={c.slot}
                  className={`p-2.5 rounded-xl border-2 flex flex-col items-center justify-center gap-1 text-center shadow-xs ${
                    c.val !== null
                      ? "bg-white border-purple-300 text-slate-900"
                      : "bg-slate-50/80 border-slate-200 text-slate-400"
                  }`}
                >
                  <span className="text-[10px] text-purple-900 bg-purple-50 px-1.5 py-0.5 rounded font-bold border border-purple-200">
                    Slot [{c.slot}]
                  </span>
                  <span className="text-base font-black text-slate-900">{c.val !== null ? c.val : "null"}</span>
                  <span className="text-[9px] text-slate-500 font-sans font-semibold">{c.note}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-purple-950 font-sans text-xs shadow-2xs">
              ⚠️ <strong>Minh họa định lý &alpha; &lt; 0.5:</strong> Đến khi chèn 15, bảng đã chứa 6/7 phần tử (&alpha; &approx; 0.86 &gt; 0.5). Chuỗi bước nhảy của 15: (1+1&sup2;)%7=2, (1+2&sup2;)%7=5, (1+3&sup2;)%7=3, (1+4&sup2;)%7=3... bị lặp lại các ô đã chiếm giữ. Điều này chứng minh định lý Quadratic Probing chỉ đảm bảo 100% tìm được ô trống khi &alpha; &lt; 0.5!
            </div>
          </div>
        )}

        {/* 4. Double Hashing Display */}
        {tech === "double" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
              {[
                { slot: 0, val: 66, note: "66: (3 + 1×4) % 7 = 0" },
                { slot: 1, val: 1, note: "1 mod 7 = 1" },
                { slot: 2, val: 9, note: "9 mod 7 = 2" },
                { slot: 3, val: 101, note: "101 mod 7 = 3" },
                { slot: 4, val: 15, note: "15: (1 + 2×5) % 7 = 4" },
                { slot: 5, val: 5, note: "5 mod 7 = 5" },
                { slot: 6, val: 20, note: "20 mod 7 = 6" }
              ].map((c) => (
                <div
                  key={c.slot}
                  className="p-2.5 bg-white border-2 border-emerald-300 rounded-xl flex flex-col items-center justify-center gap-1 text-center shadow-xs text-slate-900"
                >
                  <span className="text-[10px] text-emerald-900 bg-emerald-50 px-1.5 py-0.5 rounded font-bold border border-emerald-200">
                    Slot [{c.slot}]
                  </span>
                  <span className="text-base font-black text-slate-900">{c.val}</span>
                  <span className="text-[9px] text-slate-500 font-sans font-semibold">{c.note}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 font-sans text-xs shadow-2xs">
              ✓ Với <code>h₂(k) = 5 - (k % 5)</code>: 66 nhảy bước 4 &rarr; vào slot 0; 15 nhảy bước 5 &rarr; qua 2 lần nhảy $(1+2\times 5)\%7 = 4$ &rarr; vào slot 4 thành công!
            </div>
          </div>
        )}
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-rose-50/80 border-2 border-rose-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-rose-950">
        <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Đúc kết bài tập (Exercise):</strong><br/>
          • Cùng một tập khóa <code>[9, 1, 20, 5, 101, 66, 15]</code>, 4 kỹ thuật tạo ra 4 hình thái phân bổ ô nhớ hoàn toàn khác nhau.<br/>
          • <strong>Separate Chaining</strong> không lo đầy bảng, trong khi các kỹ thuật <strong>Open Addressing</strong> phải xử lý triệt để bài toán va chạm và kiểm soát hệ số tải $\alpha$.
        </div>
      </div>
    </div>
  );
}
