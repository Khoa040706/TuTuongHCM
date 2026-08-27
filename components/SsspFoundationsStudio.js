"use client";

import React, { useState } from "react";
import {
  Compass,
} from "lucide-react";

export default function SsspFoundationsStudio() {
  const [activeTab, setActiveTab] = useState("graph"); // "graph" | "path" | "sssp"

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-sky-700" />
            <span>Mục 1.1 – 1.4: Nền Tảng Lý Thuyết Đồ Thị &amp; Bài Toán SSSP</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-amber-950 to-emerald-950 bg-clip-text text-transparent">
            Đồ Thị Có Hướng, Trọng Số &amp; Định Nghĩa Bài Toán SSSP
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Ôn lại các định nghĩa cơ bản, đường đi đơn giản (Simple Path), công thức trọng số $PW(p)$ và khoảng cách ngắn nhất $\delta(s, v)$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("graph")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "graph"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Đồ Thị &amp; MST vs SSSP
          </button>
          <button
            onClick={() => setActiveTab("path")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "path"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Simple Path &amp; &delta;(a, b)
          </button>
          <button
            onClick={() => setActiveTab("sssp")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "sssp"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Định Nghĩa Bài Toán SSSP
          </button>
        </div>
      </div>

      {/* Tab 1: Graph Definitions */}
      {activeTab === "graph" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
              <span className="text-[10px] font-mono text-sky-950 font-bold uppercase">Các Yếu Tố Cơ Bản Của Đồ Thị</span>
              <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                <li>• <strong>Tập đỉnh V (Vertex set)</strong>: Giao lộ, thành phố, máy chủ, địa điểm...</li>
                <li>• <strong>Tập cạnh E (Edge set)</strong>: Tuyến đường, kết nối mạng, cầu đường...</li>
                <li>• <strong>Directed (Có hướng)</strong>: Đường 1 chiều. Có thể dùng 2 cạnh 2 chiều để mô hình hóa cạnh vô hướng (undirected).</li>
                <li>• <strong>Weighted (Có trọng số)</strong>: Hàm w(a, b): E &rarr; R gán độ dài, thời gian di chuyển, phí cầu đường...</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-200 space-y-2.5 shadow-sm">
              <span className="text-[10px] font-mono text-amber-950 font-bold uppercase">So Sánh Trọng Tâm: MST vs SSSP</span>
              <div className="space-y-2 text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <span className="text-amber-950 font-bold font-mono text-[11px] block">MST (Bài 13 Đã Học):</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Làm việc trên đồ thị <strong>Vô hướng (Undirected), Liên thông (Connected)</strong>. Mục tiêu: Tìm 1 cây bao phủ 100% đỉnh với tổng trọng số cực tiểu.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <span className="text-sky-950 font-bold font-mono text-[11px] block">SSSP (Bài 14 &amp; 15):</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Làm việc trên đồ thị <strong>Có hướng (Directed), Có trọng số</strong>. Mục tiêu: Tìm đường đi ngắn nhất từ <strong>1 nguồn duy nhất S</strong> đến <strong>tất cả các đỉnh còn lại</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Simple Path & Shortest Path Weight */}
      {activeTab === "path" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <span className="text-[10px] font-mono text-amber-950 font-bold uppercase">1. Đường Đi Đơn Giản (Simple Path) &amp; Trọng Số PW(p)</span>
            <div className="space-y-2 text-slate-700 leading-relaxed">
              <p>
                • Đường đi $p = (v_0, v_1, v_2, ..., v_k)$ với $(v_i, v_{i+1}) \in E$.
              </p>
              <p>
                • <strong>Simple (Đơn giản)</strong>: Không có đỉnh nào bị lặp lại!
              </p>
              <p>
                • <strong>Trọng số đường đi (Path Weight)</strong>:
              </p>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 font-mono text-amber-950 font-bold text-center text-xs shadow-sm">
                PW(p) = &Sigma; w(v_i, v_&#123;i+1&#125;)
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <span className="text-[10px] font-mono text-sky-950 font-bold uppercase">2. Khoảng Cách Ngắn Nhất &delta;(a, b) (Shortest Path Weight)</span>
            <div className="space-y-2 text-slate-700 leading-relaxed">
              <p>
                • Đọc là <strong>"delta(a, b)"</strong>: Là trọng số đường đi ngắn nhất từ đỉnh $a$ đến đỉnh $b$.
              </p>
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 font-mono text-sky-950 font-bold text-center text-xs shadow-sm">
                &delta;(a, b) = min &#123; PW(p) &#125; (với mọi đường đi p: a &rarr; b)
              </div>
              <p className="text-slate-600">
                • Nếu đỉnh $b$ không thể đến được từ $a$ (unreachable) ⟹ <code className="text-rose-600 font-bold font-mono bg-rose-50 px-1 py-0.5 rounded border border-rose-200">&delta;(a, b) = &infin;</code>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: SSSP Definition */}
      {activeTab === "sssp" && (
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Chuẩn Hóa Bài Toán Single-Source Shortest Paths (SSSP)</span>
            <span className="text-emerald-950 font-bold">1 Nguồn &rarr; Tất Cả Đích</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
              <span className="text-sky-950 font-mono font-bold text-[11px] block">Đầu Vào (Input):</span>
              <p className="text-slate-700 leading-relaxed">
                Đồ thị có hướng có trọng số $G(V, E)$, $w(a, b): E \to \mathbb{R}$ và 1 đỉnh nguồn cố định $s \in V$.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
              <span className="text-amber-950 font-mono font-bold text-[11px] block">Mục Tiêu (Output):</span>
              <p className="text-slate-700 leading-relaxed">
                Tìm khoảng cách ngắn nhất $\delta(s, b)$ và tái dựng đường đi tối ưu từ $s$ đến <strong>tất cả</strong> mọi đỉnh $b \in V$.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-emerald-950 shadow-sm">
              <span className="text-emerald-950 font-mono font-bold text-[11px] block font-sans">Triết Lý Cốt Tử:</span>
              <p className="leading-relaxed">
                Từ <strong>1 nguồn duy nhất</strong> &rarr; giải quyết trọn gói đường đi ngắn nhất đến <strong>tất cả các đỉnh còn lại</strong>!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
