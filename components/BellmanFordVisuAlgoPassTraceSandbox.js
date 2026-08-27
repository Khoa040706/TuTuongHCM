"use client";

import React, { useState } from "react";
import {
  RotateCcw,
  ArrowRight,
  Eye,
} from "lucide-react";

export default function BellmanFordVisuAlgoPassTraceSandbox() {
  const [pass, setPass] = useState(1);

  // Trace steps based on CP3 Figure 4.17
  const passes = [
    {
      p: 1,
      title: "Pass 1 (Vòng Quét 1): Nới Lỏng Các Cạnh Xuất Phát Từ Nguồn s = 0",
      desc: "Quét toàn bộ danh sách E cạnh. Các cạnh xuất phát từ đỉnh 0 nới lỏng thành công: D[1]=6, D[2]=7. Các đỉnh 3, 4 chưa thể cập nhật vì D[1], D[2] trước đó là ∞.",
      dist: [0, 6, 7, "∞", "∞"],
      activePassEdges: ["0-1", "0-2"],
      updated: [1, 2],
    },
    {
      p: 2,
      title: "Pass 2 (Vòng Quét 2): Lan Truyền Sang Các Đỉnh Cách 2 Cạnh",
      desc: "Quét toàn bộ E cạnh lần thứ 2. D[1]=6 nới lỏng cạnh (1, 3, w=5) ⟹ D[3]=11. D[2]=7 nới lỏng cạnh (2, 4, w=9) ⟹ D[4]=16.",
      dist: [0, 6, 7, 11, 16],
      activePassEdges: ["1-3", "2-4"],
      updated: [3, 4],
    },
    {
      p: 3,
      title: "Pass 3 (Vòng Quét 3): Tối Ưu Hóa Nhờ Cạnh Âm (3, 4, w=-4)",
      desc: "Quét toàn bộ E cạnh lần thứ 3. Cạnh âm (3, 4, w=-4) được nới lỏng: D[4] = min(16, D[3] + (-4)) = min(16, 11 - 4) = 7!",
      dist: [0, 6, 7, 11, 7],
      activePassEdges: ["3-4"],
      updated: [4],
    },
    {
      p: 4,
      title: "Pass 4 (Vòng Quét 4 = |V| - 1): Toàn Bộ Đồ Thị Đã Hội Tụ Tối Ưu",
      desc: "Quét toàn bộ E cạnh lần cuối cùng. Không có bất kỳ khoảng cách D[v] nào giảm thêm. Mảng D đã đạt nghiệm tối ưu toàn cục!",
      dist: [0, 6, 7, 11, 7],
      activePassEdges: [],
      updated: [],
    },
  ];

  const curPass = passes[pass - 1];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Eye className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phần 5.3: Mô Phỏng VisuAlgo Chuẩn CP3 (Figure 4.17)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-sky-950 to-amber-950 bg-clip-text text-transparent">
            Mô Phỏng Từng Pass Nới Lỏng Toàn Bộ Danh Sách Cạnh E
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Theo dõi chi tiết sự biến thiên của các đỉnh và cung cấp cái nhìn trực quan sống động giống hệ thống VisuAlgo.net.
          </p>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
          <button
            onClick={() => setPass(Math.max(1, pass - 1))}
            disabled={pass === 1}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-40 text-slate-700 font-bold transition-all shadow-sm"
          >
            Pass Trước
          </button>
          <span className="text-xs font-bold text-amber-950 px-2">
            Pass {pass} / 4
          </span>
          <button
            onClick={() => setPass(Math.min(4, pass + 1))}
            disabled={pass === 4}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-extrabold transition-all shadow-sm"
          >
            Pass Sau
            <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
          </button>
          <button
            onClick={() => setPass(1)}
            className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
            title="Đặt lại Pass 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Stepper Banner */}
      <div className="p-4 rounded-2xl bg-white border border-indigo-200 mb-6 space-y-1 shadow-sm">
        <span className="text-[10px] font-mono text-indigo-950 uppercase font-bold tracking-wider">
          Chi Tiết Hoạt Động Của {curPass.title}
        </span>
        <p className="text-xs text-slate-700 font-sans leading-relaxed">{curPass.desc}</p>
      </div>

      {/* Visual Graph + Distance Array */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Graph (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Đồ Thị Mẫu CP3 4.17 (Nguồn S = 0)</span>
            <span className="text-amber-950 font-bold">Pass {pass} / 4</span>
          </div>

          <div className="flex justify-center py-2">
            <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
              <defs>
                <marker id="ar-dim" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                </marker>
                <marker id="ar-active" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" />
                </marker>
              </defs>

              {/* 0 -> 1 (w=6) */}
              <line x1="50" y1="100" x2="140" y2="40" stroke={curPass.activePassEdges.includes("0-1") ? "#4f46e5" : "#cbd5e1"} strokeWidth={curPass.activePassEdges.includes("0-1") ? "3" : "1.5"} markerEnd={curPass.activePassEdges.includes("0-1") ? "url(#ar-active)" : "url(#ar-dim)"} />
              <text x="85" y="60" fill={curPass.activePassEdges.includes("0-1") ? "#312e81" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">6</text>

              {/* 0 -> 2 (w=7) */}
              <line x1="50" y1="100" x2="140" y2="160" stroke={curPass.activePassEdges.includes("0-2") ? "#4f46e5" : "#cbd5e1"} strokeWidth={curPass.activePassEdges.includes("0-2") ? "3" : "1.5"} markerEnd={curPass.activePassEdges.includes("0-2") ? "url(#ar-active)" : "url(#ar-dim)"} />
              <text x="85" y="145" fill={curPass.activePassEdges.includes("0-2") ? "#312e81" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">7</text>

              {/* 1 -> 3 (w=5) */}
              <line x1="140" y1="40" x2="250" y2="40" stroke={curPass.activePassEdges.includes("1-3") ? "#4f46e5" : "#cbd5e1"} strokeWidth={curPass.activePassEdges.includes("1-3") ? "3" : "1.5"} markerEnd={curPass.activePassEdges.includes("1-3") ? "url(#ar-active)" : "url(#ar-dim)"} />
              <text x="195" y="32" fill={curPass.activePassEdges.includes("1-3") ? "#312e81" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">5</text>

              {/* 1 -> 2 (w=8) */}
              <line x1="140" y1="40" x2="140" y2="160" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim)" />
              <text x="148" y="100" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">8</text>

              {/* 2 -> 4 (w=9) */}
              <line x1="140" y1="160" x2="330" y2="100" stroke={curPass.activePassEdges.includes("2-4") ? "#4f46e5" : "#cbd5e1"} strokeWidth={curPass.activePassEdges.includes("2-4") ? "3" : "1.5"} markerEnd={curPass.activePassEdges.includes("2-4") ? "url(#ar-active)" : "url(#ar-dim)"} />
              <text x="235" y="150" fill={curPass.activePassEdges.includes("2-4") ? "#312e81" : "#64748b"} fontSize="10" fontWeight="bold" fontFamily="monospace">9</text>

              {/* 3 -> 4 (w=-4) */}
              <line x1="250" y1="40" x2="330" y2="100" stroke={curPass.activePassEdges.includes("3-4") ? "#f43f5e" : "#cbd5e1"} strokeWidth={curPass.activePassEdges.includes("3-4") ? "3" : "1.5"} markerEnd={curPass.activePassEdges.includes("3-4") ? "url(#ar-active)" : "url(#ar-dim)"} />
              <text x="300" y="60" fill={curPass.activePassEdges.includes("3-4") ? "#f43f5e" : "#64748b"} fontSize="11" fontWeight="extrabold" fontFamily="monospace">-4</text>

              {/* Nodes */}
              <circle cx="50" cy="100" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="50" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

              <circle cx="140" cy="40" r="16" fill={curPass.updated.includes(1) ? "#e0e7ff" : "#ffffff"} stroke={curPass.updated.includes(1) ? "#4f46e5" : "#94a3b8"} strokeWidth="2.5" />
              <text x="140" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

              <circle cx="140" cy="160" r="16" fill={curPass.updated.includes(2) ? "#e0e7ff" : "#ffffff"} stroke={curPass.updated.includes(2) ? "#4f46e5" : "#94a3b8"} strokeWidth="2.5" />
              <text x="140" y="164" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

              <circle cx="250" cy="40" r="16" fill={curPass.updated.includes(3) ? "#e0e7ff" : "#ffffff"} stroke={curPass.updated.includes(3) ? "#4f46e5" : "#94a3b8"} strokeWidth="2.5" />
              <text x="250" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

              <circle cx="330" cy="100" r="16" fill={curPass.updated.includes(4) ? "#e0e7ff" : "#ffffff"} stroke={curPass.updated.includes(4) ? "#4f46e5" : "#94a3b8"} strokeWidth="2.5" />
              <text x="330" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
            </svg>
          </div>
        </div>

        {/* Right: Distance Table (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mảng Khoảng Cách D[v]</span>
            <span className="text-amber-950 font-bold">Sau Pass {pass}</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 font-mono text-center text-xs">
            {curPass.dist.map((d, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl border space-y-1 transition-all shadow-sm ${
                  curPass.updated.includes(idx)
                    ? "bg-amber-100 border-amber-400 text-amber-950 ring-1 ring-amber-400 font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <span className="text-[10px] text-slate-500 block font-bold">Đỉnh {idx}</span>
                <span className="text-sm font-extrabold text-sky-950 block">{d}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-sans text-slate-700 leading-relaxed shadow-sm">
            <span className="text-amber-950 font-bold block font-mono text-[11px]">
              📌 Ghi Nhớ Cốt Lõi (Phần 5):
            </span>
            <p>
              • Bellman-Ford lặp đúng <strong>|V| - 1 vòng</strong>, mỗi vòng nới lỏng <strong>tất cả |E| cạnh</strong>.
            </p>
            <p>
              • Hoạt động hoàn toàn chính xác ngay cả khi có <strong>cạnh trọng số âm</strong> (miễn không có chu trình âm ảnh hưởng đến đường đi cần tính).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
