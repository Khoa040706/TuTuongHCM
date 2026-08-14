"use client";

import React, { useState } from "react";
import { Server, Laptop, Flame, AlertOctagon, CheckCircle2, Zap, ArrowRight } from "lucide-react";

export default function ExponentialVsQuadraticCompare() {
  const [selectedSize, setSelectedSize] = useState(80);

  const data = [
    {
      size: 15,
      expTime: "164 microseconds",
      quadTime: "2 ms",
      verdict: "Cả 2 đều tức thì ở n nhỏ"
    },
    {
      size: 30,
      expTime: "5.36 giây",
      quadTime: "8 ms",
      verdict: "Exponential bắt đầu chậm lại"
    },
    {
      size: 50,
      expTime: "hơn 2 tháng (!)",
      quadTime: "22 ms",
      verdict: "Exponential trở nên bất khả thi"
    },
    {
      size: 80,
      expTime: "191 TRIỆU NĂM (!!!)",
      quadTime: "58 ms (chớp mắt)",
      verdict: "Chênh lệch 191 triệu năm vs 0.058 giây!"
    }
  ];

  const current = data.find((d) => d.size === selectedSize) || data[3];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 4.7 &amp; 4.8 — Thử Nghiệm Kinh Điển
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Siêu Máy Tính (2ⁿ) vs Máy Tính Cổ 33MHz (300n²)
          </h3>
          <p className="text-xs text-slate-500">
            Minh chứng hùng hồn nhất cho thấy: <strong>Thuật toán tốt đè bẹp phần cứng mạnh</strong>
          </p>
        </div>

        {/* Input Size Selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto">
          {[15, 30, 50, 80].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                selectedSize === size
                  ? "bg-white text-slate-900 border border-slate-200 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              n = {size}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Comparison Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Left: Exponential Supercomputer */}
        <div className="bg-gradient-to-br from-rose-50 via-white to-rose-100/60 text-slate-800 rounded-3xl p-5 border-2 border-rose-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-rose-200 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-2xl bg-rose-100 text-rose-700 shadow-xs border border-rose-200">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-rose-950">Thuật toán Exponential (2ⁿ)</h4>
                  <span className="text-[11px] font-mono text-rose-700">Siêu máy tính: 200 triệu phép tính/giây</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 font-mono text-xs font-black shadow-xs">
                O(2ⁿ)
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs mb-4">
              {data.map((row) => (
                <div
                  key={row.size}
                  className={`p-2.5 rounded-xl flex items-center justify-between transition ${
                    selectedSize === row.size
                      ? "bg-rose-100/90 border-2 border-rose-400 font-black text-rose-950 shadow-xs scale-101"
                      : "bg-white/80 border border-rose-100 text-slate-700"
                  }`}
                >
                  <span className="font-bold">n = {row.size} items:</span>
                  <span className={row.size >= 50 ? "text-rose-700 font-black bg-rose-200/80 px-2 py-0.5 rounded" : "font-semibold"}>
                    {row.expTime}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-rose-200 text-xs text-rose-950 bg-rose-100/50 p-2.5 rounded-xl font-medium">
            ⚠️ Khi <code>n = 80</code>, siêu máy tính cần tới <strong className="text-rose-700 font-black">191 TRIỆU NĂM</strong> mới hoàn thành xong bài toán!
          </div>
        </div>

        {/* Right: Quadratic Old PC */}
        <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 text-slate-800 rounded-3xl p-5 border-2 border-emerald-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-emerald-200 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-2xl bg-emerald-100 text-emerald-700 shadow-xs border border-emerald-200">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">Thuật toán Quadratic (300n²)</h4>
                  <span className="text-[11px] font-mono text-emerald-700">Máy PC cổ 80386 (33 MHz, cực chậm)</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-xs font-black shadow-xs">
                O(n²)
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs mb-4">
              {data.map((row) => (
                <div
                  key={row.size}
                  className={`p-2.5 rounded-xl flex items-center justify-between transition ${
                    selectedSize === row.size
                      ? "bg-emerald-100/90 border-2 border-emerald-400 font-black text-emerald-950 shadow-xs scale-101"
                      : "bg-white/80 border border-emerald-100 text-slate-700"
                  }`}
                >
                  <span className="font-bold">n = {row.size} items:</span>
                  <span className="text-emerald-800 font-black bg-emerald-200/80 px-2 py-0.5 rounded">
                    {row.quadTime}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-200 text-xs text-emerald-950 bg-emerald-100/50 p-2.5 rounded-xl font-medium">
            ✓ Khi <code>n = 80</code>, máy tính cổ chỉ mất vẻn vẹn <strong className="text-emerald-800 font-black">58 mili-giây</strong> (0.058 giây)!
          </div>
        </div>
      </div>

      {/* Dramatic Takeaway Callout */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex items-start gap-3">
        <AlertOctagon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 space-y-1">
          <h4 className="font-bold text-amber-900 text-sm">
            💡 Nhận xét sống còn trong Khoa Học Máy Tính:
          </h4>
          <p className="leading-relaxed">
            Dù siêu máy tính nhanh hơn máy PC cổ 80386 hàng triệu lần, nhưng với <code>n</code> lớn, <strong>thuật toán bậc hai (Quadratic) vẫn đè bẹp thuật toán cấp số nhân (Exponential)</strong>. Thậm chí ngay cả khi nâng cấp tốc độ siêu máy tính lên <strong>1,000 lần</strong> nữa, thuật toán exponential vẫn thua xa!
          </p>
          <p className="font-bold text-amber-900">
            ➔ Việc lựa chọn thuật toán hiệu quả (efficient algorithm) quan trọng hơn nhiều so với việc mua sắm phần cứng đắt tiền.
          </p>
        </div>
      </div>
    </div>
  );
}
