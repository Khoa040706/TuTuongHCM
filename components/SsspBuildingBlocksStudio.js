"use client";

import React, { useState } from "react";
import {
  Boxes,
  Zap,
  RotateCcw,
} from "lucide-react";

export default function SsspBuildingBlocksStudio() {
  const [activeTab, setActiveTab] = useState("init"); // "init" | "relax"

  // Interactive Relax Sandbox State
  const [du, setDu] = useState(4);
  const [w, setW] = useState(4);
  const [dv, setDv] = useState(9);
  const [isRelaxed, setIsRelaxed] = useState(false);

  const canRelax = du + w < dv;
  const newDv = canRelax ? du + w : dv;

  const handleRelax = () => {
    setIsRelaxed(true);
  };

  const handleReset = () => {
    setDu(4);
    setW(4);
    setDv(9);
    setIsRelaxed(false);
  };

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Boxes className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phần 3: Các Khối Xây Dựng Cốt Tử (Building Blocks of SSSP)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-sky-950 to-amber-950 bg-clip-text text-transparent">
            Bộ Đôi Vũ Khí: initSSSP(s) &amp; Phép Toán Nới Lỏng Relax(u, v, w)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá 2 khối xây dựng dùng chung cho mọi thuật toán giải bài toán đường đi ngắn nhất (Bellman-Ford, Dijkstra, BFS).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("init")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "init"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Khởi Tạo initSSSP(s)
          </button>
          <button
            onClick={() => setActiveTab("relax")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "relax"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Sandbox Nới Lỏng Relax
          </button>
        </div>
      </div>

      {/* Tab 1: initSSSP */}
      {activeTab === "init" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Code Box (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Mã Giả Khởi Tạo Chuẩn (CS2010)</span>
              <span className="text-indigo-950 font-bold">Khối 1: initSSSP(s)</span>
            </div>

            {/* Dark macOS Terminal */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
              <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">initSSSP.java</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`void initSSSP(int s, int V) {
  for (int v = 0; v < V; v++) { // initialization phase
    D[v] = 1000000000;         // dùng 1B (1 Tỷ) để đại diện cho INF
    p[v] = -1;                 // dùng -1 để đại diện cho NULL
  }
  D[s] = 0;                    // đây là điều ta biết chắc từ đầu
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Right: Technical Explanation (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm text-xs font-sans">
            <span className="text-[10px] font-mono text-amber-950 font-bold uppercase block">
              Tại Sao Dùng 1 Tỷ (10⁹) Đại Diện Cho INF?
            </span>
            <p className="text-slate-700 leading-relaxed">
              • Trong Java và C++, kiểu <code>int</code> 32-bit có giới hạn cực đại là $\approx 2 \times 10^9$ (<code>2^31 - 1</code>).
            </p>
            <p className="text-slate-700 leading-relaxed">
              • Nếu dùng <code>Integer.MAX_VALUE</code>, khi thực hiện phép cộng <code>D[u] + w</code> sẽ bị <strong>tràn số nguyên (Integer Overflow)</strong> thành số âm cực lớn, làm hỏng toàn bộ thuật toán!
            </p>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 font-mono text-[11px] shadow-sm">
              ✅ <code>1B = 1000000000</code> vừa đủ lớn hơn mọi đường đi thực tế, vừa an toàn khi cộng thêm trọng số cạnh $w \le 10^8$.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Relax Sandbox */}
      {activeTab === "relax" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Interactive Sliders & Equation (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Ví Dụ Trực Quan Trong Slide: D[u]=4, D[v]=9, w(u,v)=4</span>
                <span className="text-amber-950 font-bold">Relaxation Sandbox</span>
              </div>

              {/* Sliders */}
              <div className="space-y-3 text-xs font-mono">
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-700">
                    <span>Khoảng cách hiện tại tới u: D[u] = {du}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={du}
                    onChange={(e) => { setDu(Number(e.target.value)); setIsRelaxed(false); }}
                    className="w-full accent-amber-600"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-700">
                    <span>Trọng số cạnh nối: w(u, v) = {w}</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="15"
                    value={w}
                    onChange={(e) => { setW(Number(e.target.value)); setIsRelaxed(false); }}
                    className="w-full accent-rose-600"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-slate-700">
                    <span>Khoảng cách đi thẳng hiện có tới v: D[v] = {dv}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={dv}
                    onChange={(e) => { setDv(Number(e.target.value)); setIsRelaxed(false); }}
                    className="w-full accent-sky-600"
                  />
                </div>
              </div>

              {/* Comparison Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center shadow-sm">
                <div className="text-xs font-mono text-slate-600 font-semibold">So Sánh Điều Kiện:</div>
                <div className="text-sm sm:text-base font-mono font-bold">
                  <span className="text-amber-950">D[u] + w = {du} + ({w}) = {du + w}</span>
                  <span className="mx-2 text-slate-400">{canRelax ? "<" : "≥"}</span>
                  <span className="text-sky-950">D[v] = {dv}</span>
                </div>

                <div className="pt-2 flex justify-center gap-2">
                  <button
                    onClick={handleRelax}
                    disabled={isRelaxed}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-slate-950 font-mono font-extrabold text-xs shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{isRelaxed ? "Đã Nới Lỏng Xong" : "Thực Hiện Phép Toán Relax() ➔"}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 transition-all border border-slate-200 shadow-sm"
                    title="Đặt lại ví dụ slide"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Code & Outcome Box (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Kết Quả Cập Nhật Biến</span>
                <span className="text-emerald-950 font-bold">Trạng Thái</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center shadow-sm">
                  <span className="text-slate-600">D[v] sau Relax:</span>
                  <span className="text-sm font-extrabold text-sky-950">
                    {isRelaxed ? newDv : dv}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center shadow-sm">
                  <span className="text-slate-600">Đỉnh cha p[v]:</span>
                  <span className="text-sm font-extrabold text-amber-950">
                    {isRelaxed && canRelax ? "u" : "giữ nguyên"}
                  </span>
                </div>

                <div className={`p-3.5 rounded-xl border space-y-1 text-xs font-sans leading-relaxed shadow-sm ${
                  canRelax
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-slate-50 border-slate-200 text-slate-600"
                }`}>
                  <span className="font-bold block">
                    {canRelax
                      ? "🎉 Nới lỏng THÀNH CÔNG!"
                      : "⏳ Không cần nới lỏng:"}
                  </span>
                  <p>
                    {canRelax
                      ? `Đi đường vòng qua u (chi phí ${du + w}) ngắn hơn đi thẳng D[v]=${dv}. Thuật toán cập nhật D[v] = ${du + w} và ghi nhận p[v] = u.`
                      : `Đi đường vòng qua u (chi phí ${du + w}) không ngắn hơn đi thẳng D[v]=${dv}. Giữ nguyên giá trị cũ.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
