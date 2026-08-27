"use client";

import React, { useState } from "react";
import {
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function DijkstraComplexityBreakdownStudio() {
  const [activeDs, setActiveDs] = useState("heap"); // "heap" | "treeset"

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 9: Phân Tích Độ Phức Tạp (Original Dijkstra Analysis)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-sky-950 bg-clip-text text-transparent">
            Bóc Tách Độ Phức Tạp: O(V log V) + O(E log V) = O((V + E) log V)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Phân tích 2 thành phần độc lập: Chi phí trích xuất đỉnh <code>ExtractMin()</code> và chi phí nới lỏng cạnh <code>DecreaseKey()</code>.
          </p>
        </div>

        {/* Global Big-O Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Tổng: O((V + E) log V)
        </div>
      </div>

      {/* 2 Main Halves Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left: Extract Min */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono">
            <span className="text-emerald-950 font-bold uppercase">1. Phần 1: Extract-Min (Trích Xuất Đỉnh)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold">O(V log V)</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Trong bản gốc, mỗi đỉnh chỉ được <strong>extract (lấy ra)</strong> khỏi Priority Queue đúng <strong>1 lần duy nhất</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Vì có <code>|V|</code> đỉnh, ta thực hiện thao tác này tối đa <strong>O(V) lần</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mỗi lần <code>ExtractMin()</code> tốn <strong>O(log V)</strong> ➔ Tổng: <strong>O(V log V)</strong>.</span>
            </li>
          </ul>
        </div>

        {/* Right: Relax & Decrease Key */}
        <div className="p-5 rounded-2xl bg-white border border-sky-200 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono">
            <span className="text-sky-950 font-bold uppercase">2. Phần 2: Relax + Decrease-Key</span>
            <span className="px-2 py-0.5 rounded bg-sky-100 border border-sky-300 text-sky-950 font-bold">O(E log V)</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Mỗi lần xử lý một đỉnh, ta <strong>relax tất cả các đỉnh kề</strong> của nó. Tổng cộng có <strong>O(E)</strong> cạnh được duyệt.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Nếu nới lỏng thành công làm giảm <code>dist[v]</code>, ta gọi <code>DecreaseKey()</code> để cập nhật lại vị trí trong PQ.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Mỗi lần Decrease-Key tốn <strong>O(log V)</strong> ➔ Tổng: <strong>O(E log V)</strong>.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Data Structure Options: Binary Min Heap vs Balanced BST (Java TreeSet) */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
          <span>Lựa Chọn Cấu Trúc Dữ Liệu Cho Priority Queue</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveDs("heap")}
              className={`px-3 py-1 rounded-xl font-bold transition-all shadow-sm ${
                activeDs === "heap"
                  ? "bg-emerald-600 text-white font-extrabold"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Binary Min-Heap
            </button>
            <button
              onClick={() => setActiveDs("treeset")}
              className={`px-3 py-1 rounded-xl font-bold transition-all shadow-sm ${
                activeDs === "treeset"
                  ? "bg-sky-600 text-white font-extrabold"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Balanced BST (Java TreeSet)
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans space-y-2 leading-relaxed text-slate-700 shadow-sm">
          {activeDs === "heap" ? (
            <>
              <span className="text-emerald-950 font-mono font-bold block text-[11px] uppercase">
                📦 1. Binary Min-Heap (Cấu Trúc Chuẩn Trong Giáo Trình):
              </span>
              <p>
                • <code>ExtractMin()</code> chạy trong <code>O(log V)</code> cực nhanh bằng cách hoán đổi phần tử gốc với phần tử cuối rồi sift-down.
              </p>
              <p>
                • <strong>Điểm trừ:</strong> Thao tác <code>DecreaseKey(u)</code> trong binary heap tiêu chuẩn đòi hỏi phải lưu vị trí index của đỉnh trong heap, khá phức tạp khi lập trình.
              </p>
            </>
          ) : (
            <>
              <span className="text-sky-950 font-mono font-bold block text-[11px] uppercase">
                🌲 2. Balanced BST (Java TreeSet - Dễ Cài Đặt Nhất):
              </span>
              <p>
                • Dùng <code>TreeSet</code> lưu các cặp <code>(dist, u)</code>. <code>ExtractMin()</code> chỉ là <code>treeSet.pollFirst()</code> trong <code>O(log V)</code>.
              </p>
              <p>
                • <strong>Thao tác Decrease-Key:</strong> Cực kỳ đơn giản! Chỉ cần <strong>xóa entry cũ <code>treeSet.remove((old_dist, u))</code></strong> rồi <strong>chèn entry mới <code>treeSet.add((new_dist, u))</code></strong>, cả hai đều chạy trong <code>O(log V)</code>!
              </p>
            </>
          )}
        </div>

        {/* Memo Callout */}
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
          <span className="font-bold font-mono text-[11px] text-amber-950 block">
            📌 Cần Nhớ (Phần 9):
          </span>
          <p>
            • Extract-Min: <strong>O(V log V)</strong> (Mỗi đỉnh 1 lần, mỗi lần O(log V)).
          </p>
          <p>
            • Relax + Decrease-Key: <strong>O(E log V)</strong> (Mỗi cạnh 1 lần, mỗi lần O(log V)).
          </p>
          <p>
            • Tổng thời gian chạy: <strong>O((V + E) log V)</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
