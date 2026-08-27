"use client";

import React, { useState } from "react";
import {
  GitPullRequest,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export default function DagTopologicalOnePassStudio() {
  const [currentStep, setCurrentStep] = useState(0);

  const toposortOrder = [0, 2, 1, 3, 4, 5];

  const stepsData = [
    {
      step: 0,
      activeNode: null,
      title: "Khởi Tạo Ban Đầu: initSSSP(s = 0)",
      desc: "Topological Sort của DAG: [0, 2, 1, 3, 4, 5]. Đặt D[0] = 0, tất cả đỉnh còn lại D[v] = ∞. Chuẩn bị duyệt 1 Pass duy nhất!",
      distances: [0, "∞", "∞", "∞", "∞", "∞"],
      relaxedEdges: [],
    },
    {
      step: 1,
      activeNode: 0,
      title: "Bước 1: Nới lỏng các cạnh đi ra từ Đỉnh 0 (Đỉnh đầu tiên trong Toposort)",
      desc: "Đỉnh 0 có D[0]=0. Nới lỏng cạnh (0, 2, w=2) ➔ D[2]=2; nới lỏng (0, 1, w=1) ➔ D[1]=1.",
      distances: [0, 1, 2, "∞", "∞", "∞"],
      relaxedEdges: ["0->2", "0->1"],
    },
    {
      step: 2,
      activeNode: 2,
      title: "Bước 2: Nới lỏng các cạnh đi ra từ Đỉnh 2",
      desc: "Đỉnh 2 có D[2]=2. Nới lỏng cạnh (2, 3, w=3) ➔ D[3]=5; nới lỏng (2, 4, w=6) ➔ D[4]=8.",
      distances: [0, 1, 2, 5, 8, "∞"],
      relaxedEdges: ["2->3", "2->4"],
    },
    {
      step: 3,
      activeNode: 1,
      title: "Bước 3: Nới lỏng các cạnh đi ra từ Đỉnh 1",
      desc: "Đỉnh 1 có D[1]=1. Nới lỏng cạnh (1, 3, w=2) ➔ D[3] = min(5, 1+2) = 3 (Giảm tiếp từ 5 xuống 3!).",
      distances: [0, 1, 2, 3, 8, "∞"],
      relaxedEdges: ["1->3"],
    },
    {
      step: 4,
      activeNode: 3,
      title: "Bước 4: Nới lỏng các cạnh đi ra từ Đỉnh 3",
      desc: "Đỉnh 3 có D[3]=3. Nới lỏng cạnh (3, 4, w=1) ➔ D[4] = min(8, 3+1) = 4; nới lỏng (3, 5, w=5) ➔ D[5]=8.",
      distances: [0, 1, 2, 3, 4, 8],
      relaxedEdges: ["3->4", "3->5"],
    },
    {
      step: 5,
      activeNode: 4,
      title: "Bước 5: Nới lỏng các cạnh đi ra từ Đỉnh 4",
      desc: "Đỉnh 4 có D[4]=4. Nới lỏng cạnh (4, 5, w=2) ➔ D[5] = min(8, 4+2) = 6 (Giảm tiếp từ 8 xuống 6!).",
      distances: [0, 1, 2, 3, 4, 6],
      relaxedEdges: ["4->5"],
    },
    {
      step: 6,
      activeNode: 5,
      title: "Bước 6: Đỉnh 5 (Đỉnh cuối cùng) & Hoàn Tất 1 Pass SSSP!",
      desc: "Đỉnh 5 không có cạnh đi ra. Kết thúc 1 Pass duy nhất theo Topological Order. Toàn bộ mảng D đã đạt nghiệm tối ưu toàn cục!",
      distances: [0, 1, 2, 3, 4, 6],
      relaxedEdges: [],
    },
  ];

  const curStepData = stepsData[currentStep];

  return (
    <div className="my-8 rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-bold mb-2">
            <GitPullRequest className="w-3.5 h-3.5 text-purple-700" />
            <span>Phần 5: Special Case 3 — Đồ Thị DAG &amp; 1 Pass Relax Theo Toposort</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-sky-950 to-amber-950 bg-clip-text text-transparent">
            Đột Phá Trên Đồ Thị DAG: Giải SSSP Trong O(V + E) Chỉ Với 1 Pass Duy Nhất
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Loại bỏ chu trình giúp ta duyệt theo Thứ tự Tô-pô (Topological Sort), nới lỏng các cạnh đi ra đúng 1 lượt mà không cần lặp lại $|V| - 1$ lần như Bellman-Ford.
          </p>
        </div>

        {/* Complexity Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Thời Gian: O(V + E) • Đúng 1 Pass!
        </div>
      </div>

      {/* Stepper Banner */}
      <div className="p-4 rounded-2xl bg-white border border-purple-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
        <div>
          <span className="text-[10px] font-mono text-purple-950 uppercase font-bold tracking-wider block">
            {curStepData.title}
          </span>
          <p className="text-xs text-slate-700 font-sans mt-0.5 leading-relaxed">{curStepData.desc}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-30 text-slate-700 font-bold transition-all shadow-sm"
          >
            Bước Trước
          </button>
          <span className="text-xs font-bold text-amber-950 px-1">
            Bước {currentStep} / 6
          </span>
          <button
            onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
            disabled={currentStep === 6}
            className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-30 text-white font-extrabold transition-all shadow-sm"
          >
            Bước Sau
            <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
            title="Khởi tạo lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Toposort Visual Ribbon & Distance Array (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Dãy Đỉnh Theo Thứ Tự Topological Sort (Lecture 06)</span>
            <span className="text-purple-950 font-bold">Toposort Order</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs overflow-x-auto pb-2">
            {toposortOrder.map((node, idx) => {
              const isCurrent = curStepData.activeNode === node;
              const isProcessed = currentStep > idx + 1;
              return (
                <React.Fragment key={node}>
                  <div
                    className={`px-3 py-2 rounded-xl border text-center font-bold shrink-0 transition-all shadow-sm ${
                      isCurrent
                        ? "bg-purple-100 border-purple-400 text-purple-950 ring-2 ring-purple-400/50 scale-105"
                        : isProcessed
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    <span className="text-[9px] text-slate-500 block">#{idx + 1}</span>
                    <span className="text-xs">Đỉnh {node}</span>
                  </div>
                  {idx < toposortOrder.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="space-y-1.5 font-mono text-xs pt-2">
            <span className="text-[10px] text-slate-500 block uppercase font-bold">Mảng Khoảng Cách D[v] Sau Bước {currentStep}:</span>
            <div className="grid grid-cols-6 gap-1.5 text-center">
              {curStepData.distances.map((d, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border shadow-sm ${
                    curStepData.activeNode === idx
                      ? "bg-purple-100 border-purple-400 text-purple-950 font-bold ring-1 ring-purple-400"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <span className="text-[9px] text-slate-500 block font-bold">Đỉnh {idx}</span>
                  <span className="text-sm font-extrabold text-sky-950 block mt-0.5">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Dynamic Programming Connection & Core Memo (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-sm text-xs font-sans">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Cầu Nối Sang Quy Hoạch Động</span>
            <span className="text-purple-950 font-bold">DP Precursor</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-slate-700 leading-relaxed shadow-sm">
            <span className="text-purple-950 font-mono font-bold text-[11px] block">
              💡 Vì Sao 1 Pass Theo Toposort Lại Chắc Chắn Đúng?
            </span>
            <p>
              • Trong DAG, mọi cạnh chỉ đi từ đỉnh đứng trước tới đỉnh đứng sau trong Topological Sort.
            </p>
            <p>
              • Khi ta xét tới đỉnh <em>u</em>, tất cả các đường đi tới <em>u</em> đều đã được xét trọn vẹn từ các đỉnh đứng trước nó ⟹ <code>D[u]</code> đã là tối ưu toàn cục!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-300 text-purple-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 5):
            </span>
            <p>
              • DAG ➔ Chỉ cần <strong>1 pass relax</strong> theo đúng <strong>topological order</strong>, không cần lặp V-1 lần như Bellman-Ford.
            </p>
            <p>
              • Đây là tiền đề (precursor) trực tiếp cho bài học <strong>Quy hoạch động (Dynamic Programming - Week 10)</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
