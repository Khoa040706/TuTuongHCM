"use client";

import React, { useState } from "react";
import { Binary } from "lucide-react";

export default function BitmaskOperationsLiveSandbox() {
  const [valX, setValX] = useState(25); // 25 = 11001_2
  const [bitI, setBitI] = useState(2);
  const [activeTab, setActiveTab] = useState("check"); // "check" | "turnOn" | "allOn"

  // Binary strings (5-bit display)
  const to5Bit = (n) => n.toString(2).padStart(5, "0");

  // Calculations for valX and bitI
  const maskI = 1 << bitI;
  const isBitSet = (valX & maskI) !== 0;
  const turnedOnVal = valX | maskI;

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-yellow-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Binary className="w-3.5 h-3.5 text-amber-700" />
            <span>Thao Tác Bitmask Cơ Bản (Mục 2.1 &amp; 2.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-950 to-slate-900 bg-clip-text text-transparent">
            Bitmask Data Structure &amp; 3 Phép Toán Bit Cốt Lõi
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Biểu diễn tập Boolean nhỏ bằng số nguyên nhị phân. Thực hiện thao tác kiểm tra và bật bit với độ phức tạp <strong>O(1)</strong> siêu tốc.
          </p>
        </div>

        {/* Integer Representation Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          32-bit Integer &le; 32 Booleans
        </div>
      </div>

      {/* Intro Examples: 7, 12, 83 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-white border border-amber-100 space-y-1 shadow-sm">
          <span className="text-slate-500 text-[10px] block font-semibold">Ví dụ 1: int x = 7</span>
          <span className="text-amber-950 font-extrabold text-sm">7₁₀ = 111₂</span>
          <span className="text-slate-600 text-[11px] block font-sans">Tập &#123;0, 1, 2&#125; đều bật</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-purple-100 space-y-1 shadow-sm">
          <span className="text-slate-500 text-[10px] block font-semibold">Ví dụ 2: int y = 12</span>
          <span className="text-purple-950 font-extrabold text-sm">12₁₀ = 1100₂</span>
          <span className="text-slate-600 text-[11px] block font-sans">Tập &#123;2, 3&#125; bật; &#123;0, 1&#125; tắt</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-emerald-100 space-y-1 shadow-sm">
          <span className="text-slate-500 text-[10px] block font-semibold">Ví dụ 3: int z = 83</span>
          <span className="text-emerald-950 font-extrabold text-sm">83₁₀ = 1010011₂</span>
          <span className="text-slate-600 text-[11px] block font-sans">Tập &#123;0, 1, 4, 6&#125; bật</span>
        </div>
      </div>

      {/* Operation Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => setActiveTab("check")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all shadow-sm ${
            activeTab === "check"
              ? "bg-amber-500 text-slate-950 font-extrabold scale-105"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          a) Kiểm tra bit i: x &amp; (1 &lt;&lt; i)
        </button>

        <button
          onClick={() => setActiveTab("turnOn")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all shadow-sm ${
            activeTab === "turnOn"
              ? "bg-purple-600 text-white font-extrabold scale-105"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          b) Bật bit i: x | (1 &lt;&lt; i)
        </button>

        <button
          onClick={() => setActiveTab("allOn")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all shadow-sm ${
            activeTab === "allOn"
              ? "bg-emerald-600 text-white font-extrabold scale-105"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          c) Bật tất cả n bit: (1 &lt;&lt; n) - 1
        </button>
      </div>

      {/* Interactive Arena for Section 2.2 */}
      {activeTab === "check" && (
        <div className="p-6 rounded-2xl bg-white border border-amber-100 space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-600 font-semibold">Giá trị x = 25₁₀ (11001₂):</span>
              <span className="text-amber-950 font-bold">Chọn bit i = </span>
              <select
                value={bitI}
                onChange={(e) => setBitI(Number(e.target.value))}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-amber-950 font-bold focus:outline-none shadow-sm"
              >
                {[0, 1, 2, 3, 4].map((b) => (
                  <option key={b} value={b}>Bit i = {b}</option>
                ))}
              </select>
            </div>

            <div className="text-slate-500 text-[11px] font-sans">
              Đánh số từ phải sang trái (bắt đầu từ 0)
            </div>
          </div>

          {/* Vertical Bitwise Column Math */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1.5 shadow-sm">
              <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-200 font-semibold">
                Đặt tính phép tính AND bitwise theo slide:
              </div>
              <div className="flex justify-between text-slate-800">
                <span>x = 25₁₀</span>
                <span className="font-bold tracking-widest">{to5Bit(25)}₂</span>
              </div>
              <div className="flex justify-between text-amber-800">
                <span>(1 &lt;&lt; {bitI}) = {maskI}₁₀</span>
                <span className="font-bold tracking-widest">&amp; {to5Bit(maskI)}₂</span>
              </div>
              <div className="border-t border-slate-300 pt-1.5 flex justify-between font-extrabold text-sm">
                <span className="text-slate-700">Kết quả:</span>
                <span className={isBitSet ? "text-emerald-800 tracking-widest" : "text-slate-400 tracking-widest"}>
                  {to5Bit(25 & maskI)}₂ = {25 & maskI}₁₀
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2 text-xs font-sans shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-800">Kết luận:</span>
                <span className={`px-2.5 py-0.5 rounded-lg font-mono font-bold text-xs shadow-sm ${
                  isBitSet ? "bg-emerald-100 border border-emerald-300 text-emerald-950" : "bg-rose-100 border border-rose-300 text-rose-950"
                }`}>
                  {isBitSet ? `Bit i=${bitI} ĐANG BẬT (ON)` : `Bit i=${bitI} ĐANG TẮT (OFF)`}
                </span>
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                • <strong>Ví dụ 1 trong slide:</strong> Với <code>i = 2</code>: $25_{10} \& 4_{10} = 0 \implies$ Bit 2 <strong>TẮT (off)</strong>.<br />
                • <strong>Ví dụ 2 trong slide:</strong> Với <code>i = 3</code>: $25_{10} \& 8_{10} = 8 \implies$ Bit 3 <strong>BẬT (on)</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "turnOn" && (
        <div className="p-6 rounded-2xl bg-white border border-purple-100 space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-600 font-semibold">Giá trị x = 25₁₀ (11001₂):</span>
              <span className="text-purple-950 font-bold">Bật bit i = </span>
              <select
                value={bitI}
                onChange={(e) => setBitI(Number(e.target.value))}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-purple-950 font-bold focus:outline-none shadow-sm"
              >
                {[0, 1, 2, 3, 4].map((b) => (
                  <option key={b} value={b}>Bit i = {b}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1.5 shadow-sm">
              <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-200 font-semibold">
                Đặt tính phép tính OR bitwise theo slide:
              </div>
              <div className="flex justify-between text-slate-800">
                <span>x = 25₁₀</span>
                <span className="font-bold tracking-widest">{to5Bit(25)}₂</span>
              </div>
              <div className="flex justify-between text-purple-800">
                <span>(1 &lt;&lt; {bitI}) = {maskI}₁₀</span>
                <span className="font-bold tracking-widest">| {to5Bit(maskI)}₂</span>
              </div>
              <div className="border-t border-slate-300 pt-1.5 flex justify-between font-extrabold text-sm">
                <span className="text-slate-700">Kết quả mới:</span>
                <span className="text-emerald-800 tracking-widest font-extrabold">
                  {to5Bit(turnedOnVal)}₂ = {turnedOnVal}₁₀
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-2 text-xs font-sans shadow-sm">
              <div className="font-mono font-bold text-slate-800">
                Giá trị sau khi bật: <span className="text-purple-950 text-sm font-extrabold">x = {turnedOnVal}₁₀</span>
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                • <strong>Ví dụ 1 slide:</strong> Với <code>i = 2</code>: $25_{10} \mid 4_{10} = 29_{10} (11101_2) \implies$ bit 2 giờ đã <strong>bật</strong>.<br />
                • <strong>Ví dụ 2 slide:</strong> Với <code>i = 3</code>: $25_{10} \mid 8_{10} = 25_{10} (11001_2) \implies$ <strong>không đổi</strong> vì bit 3 đã bật sẵn!
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "allOn" && (
        <div className="p-6 rounded-2xl bg-white border border-emerald-100 space-y-4 shadow-sm">
          <div className="border-b border-slate-100 pb-2 text-xs font-mono text-emerald-950 font-bold">
            Công Thức: x = (1 &lt;&lt; n) - 1 &bull; Bật tất cả n bit
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2 shadow-sm">
              <div className="text-slate-800 font-semibold">Ví dụ với <strong>n = 4 bit</strong>:</div>
              <div className="text-slate-600">• 1 &lt;&lt; 4 = 16₁₀ (10000₂)</div>
              <div className="text-emerald-950 font-extrabold">• x = (1 &lt;&lt; 4) - 1 = 15₁₀ (1111₂)</div>
              <div className="text-[11px] text-slate-500 font-sans pt-1">
                &rArr; Toàn bộ 4 bit đều được bật ON!
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-950 space-y-1.5 shadow-sm">
              <strong className="text-emerald-950 font-mono block">Ứng dụng cực kỳ quan trọng:</strong>
              <p className="text-[11px] leading-relaxed text-slate-700">
                Trong quy hoạch động nén trạng thái (Bitmask DP), <code>(1 &lt;&lt; n) - 1</code> đại diện cho trạng thái <strong>đã thăm tất cả n thành phố / chọn tất cả n đối tượng</strong>!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
