"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export default function DijkstraNegativeEdgeTrapSandbox() {
  const [activeStep, setActiveStep] = useState(0);

  const failSteps = [
    {
      stepNum: 0,
      title: "Khởi tạo từ nguồn s = 0",
      desc: "Solved = {0}, dist[0] = 0. Nới lỏng (0, 1, w=5) ➔ D[1]=5; nới lỏng (0, 3, w=2) ➔ D[3]=2.",
      solved: [0],
      dijkstraD: [0, 5, "∞", 2, "∞"],
      trueD: [0, 5, "∞", 2, 1],
      highlight: "Nguồn 0",
    },
    {
      stepNum: 1,
      title: "Dijkstra chọn Tham lam Đỉnh 3 (D[3]=2 < D[1]=5)",
      desc: "Dijkstra trích xuất đỉnh 3 và chốt vào Solved = {0, 3}. Nới lỏng (3, 4, w=5) ➔ D[4] = 2 + 5 = 7.",
      solved: [0, 3],
      dijkstraD: [0, 5, "∞", 2, 7],
      trueD: [0, 5, "∞", 2, 1],
      highlight: "Chốt đỉnh 3 sớm!",
    },
    {
      stepNum: 2,
      title: "Chốt Đỉnh 4 (D[4]=7) & Đỉnh 1 (D[1]=5) ➔ SAI KẾT QUẢ!",
      desc: "Dijkstra chốt đỉnh 4 với D[4]=7. Nhưng thực tế đường đi 0 ➔ 1 ➔ 4 có cạnh âm -4: D[4] = 5 + (-4) = 1 < 7!",
      solved: [0, 3, 4, 1],
      dijkstraD: [0, 5, "∞", 2, 7],
      trueD: [0, 5, "∞", 2, 1],
      highlight: "Lỗi sai tại Đỉnh 4!",
    },
  ];

  const curData = failSteps[activeStep];

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>Phần 10: Vấn Đề — Dijkstra Gốc Thất Bại Khi Có Cạnh Âm</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-amber-950 bg-clip-text text-transparent">
            Thực Nghiệm CP3 4.18: Vì Sao Chiến Lược Tham Lam Bị Đánh Lừa?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Sự xuất hiện của cạnh âm khiến đỉnh được chọn tham lam đầu tiên cuối cùng không phải là đỉnh gần nhất thực sự &mdash; Dẫn tới việc báo sai khoảng cách tại đỉnh 4!
          </p>
        </div>

        {/* Global Action Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Phản Chứng CP3 Figure 4.18
        </div>
      </div>

      {/* Stepper Banner */}
      <div className="p-4 rounded-2xl bg-white border border-rose-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
        <div>
          <span className="text-[10px] font-mono text-rose-950 uppercase font-bold tracking-wider block">
            {curData.title}
          </span>
          <p className="text-xs text-slate-700 font-sans mt-0.5 leading-relaxed">{curData.desc}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-30 text-slate-700 font-bold transition-all shadow-sm"
          >
            Trước
          </button>
          <span className="text-xs font-bold text-amber-950 px-1">
            Bước {activeStep} / 2
          </span>
          <button
            onClick={() => setActiveStep(Math.min(2, activeStep + 1))}
            disabled={activeStep === 2}
            className="px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 disabled:opacity-30 text-white font-extrabold transition-all shadow-sm"
          >
            Sau
            <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
          </button>
          <button
            onClick={() => setActiveStep(0)}
            className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
            title="Khởi tạo lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Graph Representation (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Đồ Thị Phản Chứng CP3 4.18 (Nguồn S = 0)</span>
            <span className="text-rose-950 font-bold">{curData.highlight}</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 340 180" className="w-full max-w-[320px] h-auto select-none">
              <defs>
                <marker id="ar-dim3" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                </marker>
                <marker id="ar-rose" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
                </marker>
              </defs>

              {/* 0 -> 1 (w=5) */}
              <line x1="50" y1="90" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim3)" />
              <text x="95" y="55" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">w=5</text>

              {/* 0 -> 3 (w=2) */}
              <line x1="50" y1="90" x2="160" y2="140" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim3)" />
              <text x="95" y="130" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">w=2</text>

              {/* 3 -> 4 (w=5) */}
              <line x1="160" y1="140" x2="280" y2="90" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim3)" />
              <text x="210" y="130" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">w=5</text>

              {/* 1 -> 4 (w=-4) Cạnh Âm Nguy Hiểm */}
              <line x1="160" y1="40" x2="280" y2="90" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4" markerEnd="url(#ar-rose)" />
              <text x="210" y="55" fill="#f43f5e" fontSize="11" fontWeight="bold" fontFamily="monospace">w=-4 (ÂM!)</text>

              {/* Nodes */}
              <circle cx="50" cy="90" r="14" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="50" y="94" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">0</text>

              <circle cx="160" cy="40" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
              <text x="160" y="44" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>

              <circle cx="160" cy="140" r="14" fill={curData.solved.includes(3) ? "#fed7aa" : "#ffffff"} stroke={curData.solved.includes(3) ? "#ea580c" : "#94a3b8"} strokeWidth="2.5" />
              <text x="160" y="144" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">3</text>

              <circle cx="280" cy="90" r="14" fill={curData.solved.includes(4) ? "#ffe4e6" : "#ffffff"} stroke={curData.solved.includes(4) ? "#f43f5e" : "#94a3b8"} strokeWidth="2.5" />
              <text x="280" y="94" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 space-y-1 text-rose-950 shadow-sm">
              <span className="font-bold block text-[11px]">❌ Dijkstra Báo:</span>
              <span className="text-sm font-extrabold text-rose-700">D[4] = 7 (SAI!)</span>
              <p className="text-[10px] text-slate-600 font-sans">Đi qua đỉnh 3 (0➔3➔4: 2+5=7)</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-emerald-950 shadow-sm">
              <span className="font-bold block text-[11px]">✅ Đáp Án Thật Sự:</span>
              <span className="text-sm font-extrabold text-emerald-700">&delta;(0, 4) = 1</span>
              <p className="text-[10px] text-slate-600 font-sans">Đi qua đỉnh 1 (0➔1➔4: 5-4=1)</p>
            </div>
          </div>
        </div>

        {/* Right: Detailed Flaw Analysis & Memo (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-sm text-xs font-sans text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bản Chất Vấn Đề (The Issue is here...)</span>
            <span className="text-rose-950 font-bold">Greedy Flaw</span>
          </div>

          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p>
              • Khi chọn tham lam tại bước 1, Dijkstra thấy <code>D[3] = 2 &lt; D[1] = 5</code> nên chốt ngay đỉnh 3 vào <code>Solved</code> và tưởng rằng con đường tới 4 qua 3 có chi phí 7 là tốt nhất.
            </p>
            <p>
              • Nhưng cạnh âm <code>(1, 4, w = -4)</code> đã &quot;bẻ cong&quot; chi phí đường đi, làm cho nhánh qua đỉnh 1 (vốn ban đầu đắt hơn) lại trở thành đường đi rẻ hơn nhiều!
            </p>
            <p>
              • Vì Dijkstra không bao giờ quay lại nới lỏng đỉnh đã chốt ➔ <strong>Thuật toán thất bại hoàn toàn!</strong>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 10):
            </span>
            <p>
              • Dijkstra bản gốc <strong>chỉ đúng khi mọi cạnh w(u, v) &ge; 0</strong>.
            </p>
            <p>
              • Nếu có cạnh âm: Đỉnh được chọn tham lam trước có thể không phải là đỉnh gần nhất thật sự ➔ Bắt buộc phải dùng <strong>Bellman-Ford O(V · E)</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
