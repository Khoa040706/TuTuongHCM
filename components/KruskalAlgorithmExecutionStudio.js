"use client";

import React, { useState } from "react";
import {
  TreePine,
  RotateCcw,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function KruskalAlgorithmExecutionStudio() {
  const [activeTab, setActiveTab] = useState("pseudo"); // "pseudo" | "simulation"
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Bước 0: Sắp xếp danh sách E cạnh & Khởi tạo T = {}",
      desc: "Toàn bộ cạnh được sắp xếp tăng dần theo trọng số: (1-2: 1), (0-2: 2), (3-4: 2), (4-5: 3), (0-1: 4), (1-3: 5)... Khởi tạo UFDS cho 6 đỉnh.",
      accepted: [],
      rejected: [],
      current: null,
      totalWeight: 0,
      ufdsSets: ["{0}", "{1}", "{2}", "{3}", "{4}", "{5}"],
    },
    {
      title: "Bước 1: Xét cạnh (1, 2) có w = 1",
      desc: "UFDS kiểm tra: findSet(1) != findSet(2) ⟹ Không tạo chu trình! Nạp (1, 2) vào T. Gộp {1} và {2}.",
      accepted: ["1-2"],
      rejected: [],
      current: "1-2",
      totalWeight: 1,
      ufdsSets: ["{0}", "{1, 2}", "{3}", "{4}", "{5}"],
    },
    {
      title: "Bước 2: Xét cạnh (0, 2) có w = 2",
      desc: "UFDS kiểm tra: findSet(0) != findSet(2) ⟹ Không tạo chu trình! Nạp (0, 2) vào T. Gộp {0} và {1, 2}.",
      accepted: ["1-2", "0-2"],
      rejected: [],
      current: "0-2",
      totalWeight: 3,
      ufdsSets: ["{0, 1, 2}", "{3}", "{4}", "{5}"],
    },
    {
      title: "Bước 3: Xét cạnh (3, 4) có w = 2",
      desc: "UFDS kiểm tra: findSet(3) != findSet(4) ⟹ Không tạo chu trình! Nạp (3, 4) vào T. Gộp {3} và {4}.",
      accepted: ["1-2", "0-2", "3-4"],
      rejected: [],
      current: "3-4",
      totalWeight: 5,
      ufdsSets: ["{0, 1, 2}", "{3, 4}", "{5}"],
    },
    {
      title: "Bước 4: Xét cạnh (4, 5) có w = 3",
      desc: "UFDS kiểm tra: findSet(4) != findSet(5) ⟹ Không tạo chu trình! Nạp (4, 5) vào T. Gộp {3, 4} và {5}.",
      accepted: ["1-2", "0-2", "3-4", "4-5"],
      rejected: [],
      current: "4-5",
      totalWeight: 8,
      ufdsSets: ["{0, 1, 2}", "{3, 4, 5}"],
    },
    {
      title: "Bước 5: Xét cạnh (0, 1) có w = 4 (TẠO CHU TRÌNH!)",
      desc: "UFDS kiểm tra: findSet(0) == findSet(1) (đều thuộc {0, 1, 2}) ⟹ TỪ CHỐI CẠNH để ngăn tạo chu trình 0-1-2-0!",
      accepted: ["1-2", "0-2", "3-4", "4-5"],
      rejected: ["0-1"],
      current: "0-1",
      totalWeight: 8,
      ufdsSets: ["{0, 1, 2}", "{3, 4, 5}"],
    },
    {
      title: "Bước 6: Xét cạnh (1, 3) có w = 5 ⟹ HOÀN TẤT MST!",
      desc: "findSet(1) != findSet(3) ⟹ Nạp (1, 3) vào T. Đã đủ đúng E = V - 1 = 5 cạnh! Dừng thuật toán. Tổng trọng số MST = 13.",
      accepted: ["1-2", "0-2", "3-4", "4-5", "1-3"],
      rejected: ["0-1"],
      current: "1-3",
      totalWeight: 13,
      ufdsSets: ["{0, 1, 2, 3, 4, 5}"],
    },
  ];

  const cur = steps[step];

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <TreePine className="w-3.5 h-3.5 text-amber-700" />
            <span>Phần 5.1: Khái Niệm &amp; Cách Hoạt Động Thuật Toán Kruskal's</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-emerald-950 to-teal-950 bg-clip-text text-transparent">
            Cơ Chế Duyệt Cạnh Sắp Xếp &amp; Kiểm Tra Chu Trình UFDS
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Kruskal không xuất phát từ 1 đỉnh cụ thể như Prim, mà xét toàn bộ tập cạnh theo trọng số tăng dần và nạp vào $T$ nếu không tạo chu trình.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("pseudo")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "pseudo"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Giả (Pseudo Code)
          </button>
          <button
            onClick={() => setActiveTab("simulation")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "simulation"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mô Phỏng Từng Bước
          </button>
        </div>
      </div>

      {/* Tab 1: Pseudo Code */}
      {activeTab === "pseudo" && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Mã Giả Thuật Toán Kruskal's (Chuẩn Giáo Trình CS2010)</span>
              <span className="text-emerald-950 font-bold">Rất Đơn Giản</span>
            </div>

            {/* Dark macOS Terminal */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
              <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">kruskal_pseudocode.txt</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>
{`sort tập E cạnh theo trọng số tăng dần
T <- {}

while còn cạnh chưa xử lý:
  chọn 1 cạnh e chưa xử lý có chi phí nhỏ nhất (min cost)
  if thêm e vào T không tạo thành chu trình (cycle):
    thêm e vào T

T là một MST`}
                </code>
              </pre>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-950 flex items-center gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>
              💡 <strong>Quy tắc ghi nhớ:</strong> Kruskal's là thuật toán <strong>hướng cạnh (edge-centric)</strong>. Toàn bộ trọng tâm nằm ở việc <strong>sắp xếp danh sách cạnh</strong> và dùng <strong>UFDS</strong> để kiểm tra chu trình trong thời gian gần như tức thời $O(\alpha(V)) \approx O(1)$.
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Simulation */}
      {activeTab === "simulation" && (
        <div className="space-y-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-800 uppercase font-bold tracking-wider">
                Mô Phỏng Từng Bước Thuật Toán Kruskal
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-mono">
                {cur.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{cur.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold transition-all shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-bold text-emerald-950 px-1">
                {step + 1} / {steps.length}
              </span>
              <button
                onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                disabled={step === steps.length - 1}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold transition-all shadow-sm"
              >
                Tiếp theo
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setStep(0)}
                className="p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graph Visualizer + UFDS Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Rừng Cây Đang Gộp Dần ({cur.accepted.length} / 5 Cạnh)</span>
                <span className="text-amber-950 font-bold">Tổng Trọng Số: W = {cur.totalWeight}</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Edges */}
                  <line x1="60" y1="50" x2="160" y2="40" stroke={cur.rejected.includes("0-1") ? "#f43f5e" : "#cbd5e1"} strokeWidth={cur.rejected.includes("0-1") ? "2" : "1.5"} strokeDasharray={cur.rejected.includes("0-1") ? "4" : "0"} />
                  <text x="110" y="38" textAnchor="middle" fill={cur.rejected.includes("0-1") ? "#e11d48" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">4</text>

                  <line x1="60" y1="50" x2="110" y2="150" stroke={cur.accepted.includes("0-2") ? "#d97706" : "#cbd5e1"} strokeWidth={cur.accepted.includes("0-2") ? "3.5" : "1.5"} />
                  <text x="75" y="110" textAnchor="middle" fill={cur.accepted.includes("0-2") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  <line x1="160" y1="40" x2="110" y2="150" stroke={cur.accepted.includes("1-2") ? "#d97706" : "#cbd5e1"} strokeWidth={cur.accepted.includes("1-2") ? "3.5" : "1.5"} />
                  <text x="142" y="105" textAnchor="middle" fill={cur.accepted.includes("1-2") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">1</text>

                  <line x1="160" y1="40" x2="260" y2="50" stroke={cur.accepted.includes("1-3") ? "#d97706" : "#cbd5e1"} strokeWidth={cur.accepted.includes("1-3") ? "3.5" : "1.5"} />
                  <text x="210" y="38" textAnchor="middle" fill={cur.accepted.includes("1-3") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">5</text>

                  <line x1="260" y1="50" x2="260" y2="150" stroke={cur.accepted.includes("3-4") ? "#d97706" : "#cbd5e1"} strokeWidth={cur.accepted.includes("3-4") ? "3.5" : "1.5"} />
                  <text x="272" y="105" textAnchor="start" fill={cur.accepted.includes("3-4") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">2</text>

                  <line x1="260" y1="150" x2="340" y2="100" stroke={cur.accepted.includes("4-5") ? "#d97706" : "#cbd5e1"} strokeWidth={cur.accepted.includes("4-5") ? "3.5" : "1.5"} />
                  <text x="310" y="140" textAnchor="middle" fill={cur.accepted.includes("4-5") ? "#b45309" : "#64748b"} fontSize="9" fontWeight="bold" fontFamily="monospace">3</text>

                  {/* Nodes */}
                  <circle cx="60" cy="50" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="60" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

                  <circle cx="160" cy="40" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="160" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  <circle cx="110" cy="150" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="110" y="154" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  <circle cx="260" cy="50" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="260" y="54" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  <circle cx="260" cy="150" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="260" y="154" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>

                  <circle cx="340" cy="100" r="15" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="340" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">5</text>
                </svg>
              </div>
            </div>

            {/* Right: UFDS Sets State (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Trạng Thái UFDS Rừng Cây</span>
                <span className="text-emerald-950 font-bold">findSet &amp; unionSet</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 shadow-sm">
                <span className="text-[11px] text-slate-600 font-mono block font-semibold">Các Tập Rời Nhau Hiện Tại:</span>
                <div className="flex flex-wrap gap-1.5">
                  {cur.ufdsSets.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-950 font-mono font-bold text-xs shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5 text-xs font-mono shadow-sm">
                <span className="text-slate-600 block font-semibold">Cạnh Đã Nạp Vào Cây T ({cur.accepted.length} / 5):</span>
                <div className="flex flex-wrap gap-1.5">
                  {cur.accepted.map((e, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-lg bg-white border border-amber-300 text-amber-950 font-bold shadow-sm">
                      ({e})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
