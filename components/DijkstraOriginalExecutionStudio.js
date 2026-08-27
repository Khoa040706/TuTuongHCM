"use client";

import React, { useState } from "react";
import {
  Zap,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export default function DijkstraOriginalExecutionStudio() {
  const [step, setStep] = useState(0);

  const stepsData = [
    {
      stepNum: 0,
      title: "Khởi Tạo Ban Đầu: initSSSP(s = 0)",
      desc: "Đặt Solved = {0} và dist[0] = 0. Các đỉnh còn lại trong {V - Solved} có dist[v] = ∞. Đẩy (0, đỉnh 0) vào Priority Queue.",
      solved: [0],
      unsolved: [1, 2, 3, 4],
      activeNode: 0,
      pq: ["(0, đỉnh 0)"],
      distances: [0, "∞", "∞", "∞", "∞"],
    },
    {
      stepNum: 1,
      title: "Bước 1: Nới lỏng các cạnh đi ra từ Đỉnh 0",
      desc: "Đỉnh 0 ở trong Solved. Nới lỏng cạnh (0, 1, w=4) ➔ dist[1]=4; nới lỏng (0, 2, w=2) ➔ dist[2]=2. Đẩy các cặp vào PQ.",
      solved: [0],
      unsolved: [1, 2, 3, 4],
      activeNode: 0,
      pq: ["(2, đỉnh 2)", "(4, đỉnh 1)"],
      distances: [0, 4, 2, "∞", "∞"],
    },
    {
      stepNum: 2,
      title: "Bước 2: Chọn Tham Lam Đỉnh 2 (dist[2]=2) Đưa Vào Solved",
      desc: "Trích xuất đỉnh 2 từ PQ vì có dist nhỏ nhất. Thêm 2 vào Solved = {0, 2}. Nới lỏng (2, 1, w=1) ➔ dist[1]=3; (2, 3, w=4) ➔ dist[3]=6; (2, 4, w=5) ➔ dist[4]=7.",
      solved: [0, 2],
      unsolved: [1, 3, 4],
      activeNode: 2,
      pq: ["(3, đỉnh 1)", "(6, đỉnh 3)", "(7, đỉnh 4)"],
      distances: [0, 3, 2, 6, 7],
    },
    {
      stepNum: 3,
      title: "Bước 3: Chọn Tham Lam Đỉnh 1 (dist[1]=3) Đưa Vào Solved",
      desc: "Trích xuất đỉnh 1 (dist[1]=3). Thêm 1 vào Solved = {0, 2, 1}. Nới lỏng (1, 3, w=2) ➔ dist[3] = min(6, 3+2) = 5. Cập nhật PQ.",
      solved: [0, 2, 1],
      unsolved: [3, 4],
      activeNode: 1,
      pq: ["(5, đỉnh 3)", "(7, đỉnh 4)"],
      distances: [0, 3, 2, 5, 7],
    },
    {
      stepNum: 4,
      title: "Bước 4: Chọn Tham Lam Đỉnh 3 (dist[3]=5) Đưa Vào Solved",
      desc: "Trích xuất đỉnh 3 (dist[3]=5). Thêm 3 vào Solved = {0, 2, 1, 3}. Nới lỏng (3, 4, w=1) ➔ dist[4] = min(7, 5+1) = 6. Cập nhật PQ.",
      solved: [0, 2, 1, 3],
      unsolved: [4],
      activeNode: 3,
      pq: ["(6, đỉnh 4)"],
      distances: [0, 3, 2, 5, 6],
    },
    {
      stepNum: 5,
      title: "Bước 5: Chọn Đỉnh 4 (dist[4]=6) & Hoàn Tất Dijkstra!",
      desc: "Trích xuất đỉnh 4. Solved = {0, 2, 1, 3, 4} chứa toàn bộ đỉnh V. Thuật toán kết thúc thành công!",
      solved: [0, 2, 1, 3, 4],
      unsolved: [],
      activeNode: 4,
      pq: ["Rỗng (Hoàn tất)"],
      distances: [0, 3, 2, 5, 6],
    },
  ];

  const curData = stepsData[step];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 7: Thuật Toán Dijkstra — Phiên Bản Gốc (The Original Version)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Cơ Chế Hoạt Động: Tập Solved &amp; Chiến Lược Tham Lam Min-Heap
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Duy trì tập <code>Solved</code>, ở mỗi bước luôn chọn đỉnh <code>u</code> trong <code>&#123;V - Solved&#125;</code> có ước lượng <code>dist[u]</code> nhỏ nhất bằng Priority Queue, nới lỏng các cạnh kề và chốt nhãn vĩnh viễn.
          </p>
        </div>

        {/* Global Action Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Đồ Thị Mẫu CP3 4.17
        </div>
      </div>

      {/* Stepper Banner */}
      <div className="p-4 rounded-2xl bg-white border border-emerald-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
        <div>
          <span className="text-[10px] font-mono text-emerald-950 uppercase font-bold tracking-wider block">
            {curData.title}
          </span>
          <p className="text-xs text-slate-700 font-sans mt-0.5 leading-relaxed">{curData.desc}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-30 text-slate-700 font-bold transition-all shadow-sm"
          >
            Trước
          </button>
          <span className="text-xs font-bold text-amber-950 px-1">
            Bước {step} / 5
          </span>
          <button
            onClick={() => setStep(Math.min(5, step + 1))}
            disabled={step === 5}
            className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-30 text-white font-extrabold transition-all shadow-sm"
          >
            Sau
            <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
          </button>
          <button
            onClick={() => setStep(0)}
            className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
            title="Khởi tạo lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Solved Set vs Unsolved Set Tracking (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Trạng Thái Phân Vùng Đỉnh: Tập Solved vs Unsolved</span>
            <span className="text-emerald-950 font-bold">Solved: {curData.solved.length} / 5</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {/* Solved Box */}
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1.5 shadow-sm">
              <span className="text-emerald-950 font-bold text-[11px] block uppercase">
                ✅ Tập Solved (Đã Chốt Nhãn):
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {curData.solved.map((node) => (
                  <span key={node} className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs shadow-sm">
                    Đỉnh {node} (D={curData.distances[node]})
                  </span>
                ))}
              </div>
            </div>

            {/* Unsolved Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-sm">
              <span className="text-amber-950 font-bold text-[11px] block uppercase">
                ⏳ Tập V - Solved (Chưa Chốt):
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {curData.unsolved.length === 0 ? (
                  <span className="text-slate-500 italic text-[11px]">Rỗng (Đã xong toàn bộ)</span>
                ) : (
                  curData.unsolved.map((node) => (
                    <span key={node} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs shadow-sm">
                      Đỉnh {node} (D={curData.distances[node]})
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Distance Table */}
          <div className="space-y-1.5 font-mono text-xs">
            <span className="text-[10px] text-slate-500 block uppercase font-bold">Mảng Khoảng Cách dist[v]:</span>
            <div className="grid grid-cols-5 gap-1.5 text-center">
              {curData.distances.map((d, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border shadow-sm ${
                    curData.solved.includes(idx)
                      ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-600"
                  }`}
                >
                  <span className="text-[9px] text-slate-500 block font-bold">Đỉnh {idx}</span>
                  <span className="text-sm font-extrabold text-sky-950 block mt-0.5">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Why Priority Queue & Memo (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-sm text-xs font-sans text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Hàng Đợi Priority Queue</span>
            <span className="text-sky-950 font-bold">Min-Heap</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">Các Cặp (Khoảng Cách, Đỉnh) Trong PQ:</span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {curData.pq.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-0.5 rounded border text-[11px] font-bold shadow-sm ${
                    idx === 0
                      ? "bg-amber-100 border-amber-400 text-amber-950"
                      : "bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-slate-700 leading-relaxed shadow-sm">
            <span className="text-sky-950 font-mono font-bold text-[11px] block">
              ❓ Q: Vì Sao Bắt Buộc Phải Dùng Priority Queue?
            </span>
            <p>
              • Để luôn lấy ra đỉnh có <code>dist</code> nhỏ nhất trong thời gian cực nhanh <strong>O(log V)</strong> thay vì phải duyệt tuyến tính qua toàn bộ mảng mất <strong>O(V)</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 7):
            </span>
            <p>
              • Giả định bắt buộc: <strong>mọi w(u, v) &ge; 0</strong>.
            </p>
            <p>
              • Cấu trúc dữ liệu chính: <strong>Priority Queue</strong>.
            </p>
            <p>
              • Chiến lược: <strong>Greedy</strong> &mdash; Luôn chọn đỉnh có dist nhỏ nhất chưa Solved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
