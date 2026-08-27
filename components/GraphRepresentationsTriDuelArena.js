"use client";

import React, { useState } from "react";
import { Swords } from "lucide-react";

export default function GraphRepresentationsTriDuelArena() {
  const [selectedTask, setSelectedTask] = useState("space"); // "space" | "isAdjacent" | "enumerateNeighbors"

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Swords className="w-3.5 h-3.5 text-indigo-700" />
            <span>Đấu Trường So Tài (Mục 4.4)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            Ma Trận So Sánh 3 Cấu Trúc Dữ Liệu Đồ Thị
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đánh giá toàn diện Không gian bộ nhớ (Space) và Thời gian thực thi (Time) của 3 cấu trúc.
          </p>
        </div>

        {/* Task Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedTask("space")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTask === "space"
                ? "bg-purple-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Bộ Nhớ (Space)
          </button>
          <button
            onClick={() => setSelectedTask("isAdjacent")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTask === "isAdjacent"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Check Cạnh (u, v)
          </button>
          <button
            onClick={() => setSelectedTask("enumerateNeighbors")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTask === "enumerateNeighbors"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Duyệt Hàng Xóm
          </button>
        </div>
      </div>

      {/* 3-Way Duel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* 1. Adjacency Matrix */}
        <div className="p-5 rounded-2xl bg-white border border-sky-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-mono font-bold text-xs text-sky-950">1. ADJACENCY MATRIX</span>
            <span className="text-[10px] px-2 py-0.5 rounded-lg bg-sky-100 text-sky-950 font-mono font-bold">int[V][V]</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-700">
              <span>Space:</span>
              <span className="text-rose-800 font-extrabold">O(V²)</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Check kề (u, v):</span>
              <span className="text-emerald-800 font-extrabold">O(1) ⚡</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Duyệt hàng xóm:</span>
              <span className="text-amber-800 font-extrabold">O(V)</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 font-sans border-t border-slate-100 pt-2">
            Phù hợp nhất khi đồ thị rất dày đặc ($E \approx V^2$) hoặc đồ thị nhỏ ($V \le 1,000$).
          </p>
        </div>

        {/* 2. Adjacency List */}
        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-3 relative ring-2 ring-emerald-500/30 shadow-sm">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <span className="font-mono font-bold text-xs text-emerald-950">2. ADJACENCY LIST (⭐ CHÍNH)</span>
            <span className="text-[10px] px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-950 font-mono font-bold">Vector&lt;Vector&gt;</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-700">
              <span>Space:</span>
              <span className="text-emerald-900 font-extrabold">O(V + E) ⚡</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Check kề (u, v):</span>
              <span className="text-amber-900 font-extrabold">O(deg(u))</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Duyệt hàng xóm:</span>
              <span className="text-emerald-900 font-extrabold">O(deg(u)) ⚡</span>
            </div>
          </div>

          <p className="text-[11px] text-emerald-950 font-sans border-t border-emerald-200 pt-2 font-medium">
            👑 <strong>Lựa chọn số 1:</strong> Chuẩn mực cho hầu hết các bài toán DFS, BFS, Dijkstra, Max Flow trong CS2010.
          </p>
        </div>

        {/* 3. Edge List */}
        <div className="p-5 rounded-2xl bg-white border border-indigo-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-mono font-bold text-xs text-indigo-950">3. EDGE LIST</span>
            <span className="text-[10px] px-2 py-0.5 rounded-lg bg-indigo-100 text-indigo-950 font-mono font-bold">Vector&lt;Triple&gt;</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-700">
              <span>Space:</span>
              <span className="text-emerald-800 font-extrabold">O(E) ⚡</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Check kề (u, v):</span>
              <span className="text-rose-800 font-extrabold">O(E) 🐢</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>Duyệt hàng xóm:</span>
              <span className="text-rose-800 font-extrabold">O(E) 🐢</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 font-sans border-t border-slate-100 pt-2">
            Vũ khí chuyên biệt dành riêng cho thuật toán Kruskal (MST) và Bellman-Ford duyệt toàn bộ cạnh.
          </p>
        </div>
      </div>

      {/* Instructor Note */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-sans text-amber-950 shadow-sm">
        💡 <strong>Ghi chú của giảng viên (PS trong slide):</strong> Đây là cách cài đặt chuẩn của tác giả trong khóa học CS2010, bạn hoàn toàn có thể có những biến thể cài đặt khác tùy theo ngôn ngữ (ví dụ dùng `ArrayList` trong Java hoặc `std::vector` trong C++).
      </div>
    </div>
  );
}
