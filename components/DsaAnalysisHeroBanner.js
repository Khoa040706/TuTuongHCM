"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Gauge,
  Sparkles,
  Zap,
  Clock,
  HardDrive,
  BarChart3,
  Flame,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";

export default function DsaAnalysisHeroBanner() {
  const [inputN, setInputN] = useState(64);

  // Big O calculations
  const o1 = 1;
  const oLogN = Math.round(Math.log2(inputN) * 10) / 10;
  const oN = inputN;
  const oNLogN = Math.round(inputN * Math.log2(inputN));
  const oN2 = inputN * inputN;
  const o2N = inputN <= 32 ? Math.pow(2, inputN).toLocaleString("en-US") : "Vượt giới hạn (> 10¹⁸)";

  const complexityRanks = [
    {
      notation: "O(1)",
      name: "Constant (Hằng số)",
      val: `${o1} bước`,
      grade: "Tuyệt vời",
      color: "bg-emerald-50 text-emerald-700 border-emerald-300",
      barColor: "bg-emerald-500",
      barWidth: "4%"
    },
    {
      notation: "O(log n)",
      name: "Logarithmic (Logarit)",
      val: `${oLogN} bước`,
      grade: "Rất tốt",
      color: "bg-teal-50 text-teal-700 border-teal-300",
      barColor: "bg-teal-500",
      barWidth: "12%"
    },
    {
      notation: "O(n)",
      name: "Linear (Tuyến tính)",
      val: `${oN.toLocaleString()} bước`,
      grade: "Khá / Chuẩn",
      color: "bg-blue-50 text-blue-700 border-blue-300",
      barColor: "bg-blue-500",
      barWidth: "28%"
    },
    {
      notation: "O(n log n)",
      name: "Linearithmic (Sắp xếp tối ưu)",
      val: `${oNLogN.toLocaleString()} bước`,
      grade: "Chấp nhận được",
      color: "bg-amber-50 text-amber-700 border-amber-300",
      barColor: "bg-amber-500",
      barWidth: "50%"
    },
    {
      notation: "O(n²)",
      name: "Quadratic (Bậc 2)",
      val: `${oN2.toLocaleString()} bước`,
      grade: "Kém với n lớn",
      color: "bg-orange-50 text-orange-700 border-orange-300",
      barColor: "bg-orange-500",
      barWidth: "75%"
    },
    {
      notation: "O(2ⁿ)",
      name: "Exponential (Cấp số nhân)",
      val: `${o2N} bước`,
      grade: "Không khả thi (Bùng nổ)",
      color: "bg-rose-50 text-rose-700 border-rose-300",
      barColor: "bg-rose-600",
      barWidth: "100%"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-white to-orange-50/60 border border-amber-200/80 rounded-3xl shadow-xl p-6 md:p-8 text-slate-800 relative overflow-hidden font-sans my-6">
      {/* Background Soft Glow Shapes */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-amber-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 uppercase shadow-xs">
              <Gauge className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              DSA BÀI 5 — HIỆU NĂNG &amp; ĐỘ PHỨC TẠP
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold hidden sm:inline">
              Big-O Asymptotic Analysis
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            ANALYSIS OF ALGORITHMS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              (PHÂN TÍCH THUẬT TOÁN)
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Khoa học đo lường <strong>Độ phức tạp thời gian (Time Complexity)</strong> và <strong>Bộ nhớ (Space Complexity)</strong> độc lập với phần cứng bằng ký pháp tiệm cận <strong>Big-O Notation</strong>.
          </p>
        </div>

        {/* Metric Highlight Card */}
        <div className="bg-white/80 backdrop-blur-md border border-amber-200/80 rounded-2xl p-4 md:w-80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 mb-1">
            <TrendingUp className="w-4 h-4 text-amber-600" /> Tốc độ tăng trưởng tiệm cận
          </div>
          <p className="text-xs text-slate-700 italic leading-relaxed">
            “Đo lường không phải bằng giây hay mili-giây, mà bằng số lượng phép toán cơ bản khi quy mô dữ liệu n tiến tới vô cùng.”
          </p>
          <span className="text-[11px] font-mono text-amber-600 mt-2 block text-right font-bold">
            f(n) = O(g(n))
          </span>
        </div>
      </div>

      {/* 3 Pillar Concept Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 relative z-10">
        <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm hover:border-amber-300 transition-all">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase mb-1">
            <Clock className="w-4 h-4 text-amber-600" /> 1. Time Complexity (Thời gian)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Số lượng phép tính cơ bản (so sánh, gán, toán học) tỉ lệ thuận với kích thước đầu vào <code>n</code>.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm hover:border-orange-300 transition-all">
          <div className="flex items-center gap-2 text-orange-800 font-bold text-xs uppercase mb-1">
            <HardDrive className="w-4 h-4 text-orange-600" /> 2. Space Complexity (Bộ nhớ)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dung lượng RAM tối đa cần dùng (mảng phụ, biến cục bộ, Stack frames đệ quy) trong suốt thời gian chạy.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm hover:border-rose-300 transition-all">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase mb-1">
            <Zap className="w-4 h-4 text-rose-600" /> 3. Big-O, Big-Ω, Big-Θ
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Trường hợp xấu nhất (Worst-case <b>O</b>), tốt nhất (Best-case <b>Ω</b>), và trung bình (Average-case <b>Θ</b>).
          </p>
        </div>
      </div>

      {/* Interactive Big-O Growth Explorer */}
      <div className="bg-white rounded-2xl border border-amber-200/90 shadow-md p-5 md:p-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-5">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-amber-600" />
            <h3 className="text-base md:text-lg font-bold text-slate-900">
              Trực Quan Hóa Tốc Độ Tăng Trưởng Big-O (Growth Rate Explorer)
            </h3>
          </div>

          {/* Slider for N */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl">
            <span className="text-xs font-mono text-slate-600 font-bold">Kích thước n:</span>
            <input
              type="range"
              min={8}
              max={1024}
              step={8}
              value={inputN}
              onChange={(e) => setInputN(parseInt(e.target.value, 10))}
              className="w-28 accent-amber-600 cursor-pointer"
            />
            <span className="text-xs font-mono font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
              n = {inputN}
            </span>
          </div>
        </div>

        {/* Complexity Growth Ranks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {complexityRanks.map((item, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md ${item.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono font-black text-sm tracking-wide">{item.notation}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/80 font-bold border border-current">
                    {item.grade}
                  </span>
                </div>
                <span className="text-[11px] font-sans text-slate-600 block">{item.name}</span>
              </div>

              <div className="mt-3 pt-2 border-t border-current/20 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">Số phép tính:</span>
                <strong className="font-mono font-bold text-xs">{item.val}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tip */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>▲ Kéo slider để quan sát khoảng cách phép tính giữa O(log n) và O(2ⁿ) nới rộng khủng khiếp</span>
          <span className="text-amber-700 font-bold hidden sm:inline">O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ)</span>
        </div>
      </div>
    </div>
  );
}
