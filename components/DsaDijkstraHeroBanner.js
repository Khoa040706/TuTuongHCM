"use client";

import React, { useState } from "react";
import {
  Compass,
  Zap,
  ShieldAlert,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Play,
  RotateCw,
} from "lucide-react";

export default function DsaDijkstraHeroBanner() {
  const [activeTab, setActiveTab] = useState("arena"); // "arena" | "showdown" | "trap" | "flashcards"

  // Tab 1: Live Pathfinder Stepper
  const [step, setStep] = useState(0);

  const dijkstraSteps = [
    {
      stepNum: 0,
      title: "Khởi Tạo Ban Đầu: initSSSP(s = 0)",
      desc: "Đặt D[0] = 0, tất cả đỉnh còn lại D[v] = ∞. Đẩy cặp (dist = 0, u = 0) vào Min-Heap Priority Queue.",
      pq: ["(0, đỉnh 0)"],
      settled: [],
      distances: [0, "∞", "∞", "∞", "∞"],
      activeEdge: null,
    },
    {
      stepNum: 1,
      title: "Bước 1: Extract-Min Đỉnh 0 (D[0] = 0) & Chốt Nhãn",
      desc: "Lấy đỉnh 0 ra khỏi PQ, đánh dấu đỉnh 0 đã chốt (Settled). Nới lỏng các cạnh kề: (0, 1, w=4) ➔ D[1]=4; (0, 2, w=2) ➔ D[2]=2. Đẩy vào PQ.",
      pq: ["(2, đỉnh 2)", "(4, đỉnh 1)"],
      settled: [0],
      distances: [0, 4, 2, "∞", "∞"],
      activeEdge: "0->1, 0->2",
    },
    {
      stepNum: 2,
      title: "Bước 2: Extract-Min Đỉnh 2 (D[2] = 2) & Chốt Nhãn",
      desc: "Lấy đỉnh 2 ra khỏi PQ vì D[2]=2 nhỏ nhất. Chốt đỉnh 2. Nới lỏng cạnh (2, 1, w=1) ➔ D[1] = min(4, 2+1) = 3 (Giảm tiếp!). Nới lỏng (2, 3, w=4) ➔ D[3]=6; (2, 4, w=5) ➔ D[4]=7.",
      pq: ["(3, đỉnh 1)", "(6, đỉnh 3)", "(7, đỉnh 4)"],
      settled: [0, 2],
      distances: [0, 3, 2, 6, 7],
      activeEdge: "2->1, 2->3, 2->4",
    },
    {
      stepNum: 3,
      title: "Bước 3: Extract-Min Đỉnh 1 (D[1] = 3) & Chốt Nhãn",
      desc: "Lấy đỉnh 1 (D[1]=3). Chốt đỉnh 1. Nới lỏng cạnh (1, 3, w=2) ➔ D[3] = min(6, 3+2) = 5 (Giảm từ 6 xuống 5!). Đẩy vào PQ.",
      pq: ["(5, đỉnh 3)", "(7, đỉnh 4)"],
      settled: [0, 2, 1],
      distances: [0, 3, 2, 5, 7],
      activeEdge: "1->3",
    },
    {
      stepNum: 4,
      title: "Bước 4: Extract-Min Đỉnh 3 (D[3] = 5) & Chốt Nhãn",
      desc: "Lấy đỉnh 3 (D[3]=5). Chốt đỉnh 3. Nới lỏng cạnh (3, 4, w=1) ➔ D[4] = min(7, 5+1) = 6 (Giảm từ 7 xuống 6!). Đẩy vào PQ.",
      pq: ["(6, đỉnh 4)"],
      settled: [0, 2, 1, 3],
      distances: [0, 3, 2, 5, 6],
      activeEdge: "3->4",
    },
    {
      stepNum: 5,
      title: "Bước 5: Extract-Min Đỉnh 4 (D[4] = 6) & Hoàn Tất SSSP!",
      desc: "Lấy đỉnh 4 (D[4]=6). Chốt đỉnh 4. Hàng đợi Priority Queue rỗng. Toàn bộ đồ thị đã đạt khoảng cách ngắn nhất tối ưu tuyệt đối!",
      pq: ["Rỗng (Hoàn tất)"],
      settled: [0, 2, 1, 3, 4],
      distances: [0, 3, 2, 5, 6],
      activeEdge: null,
    },
  ];

  const curDijkstra = dijkstraSteps[step];

  // Tab 2: Showdown Slider
  const [nodesV, setNodesV] = useState(1000);
  const [edgesE, setEdgesE] = useState(5000);

  const bfsOps = nodesV + edgesE;
  const dijkstraOps = Math.round((nodesV + edgesE) * Math.log2(nodesV));
  const bellmanFordOps = nodesV * edgesE;

  // Tab 4: Flashcards
  const [fcIdx, setFcIdx] = useState(0);
  const [fcFlipped, setFcFlipped] = useState({});

  const flashcards = [
    {
      id: 1,
      tag: "Bản Chất Tham Lam",
      front: "Chiến lược Tham lam (Greedy Strategy) trong thuật toán Dijkstra hoạt động như thế nào?",
      back: "Ở mỗi bước, Dijkstra luôn chọn trích xuất đỉnh u có khoảng cách ước lượng D[u] nhỏ nhất chưa được chốt và chốt cố định nhãn tối ưu cho đỉnh đó.",
    },
    {
      id: 2,
      tag: "Trái Tim Min-Heap",
      front: "Tại sao thuật toán Dijkstra cần sử dụng hàng đợi ưu tiên Min-Heap Priority Queue?",
      back: "Min-Heap cho phép trích xuất phần tử nhỏ nhất Extract-Min trong O(log V), giúp toàn bộ thuật toán đạt độ phức tạp siêu tốc O((V + E) log V).",
    },
    {
      id: 3,
      tag: "Tiên Đề Trọng Số Không Âm",
      front: "Tại sao thuật toán Dijkstra bắt buộc mọi cạnh phải có trọng số không âm (w >= 0)?",
      back: "Vì nếu có cạnh âm, một đỉnh đã được chốt (settled) có thể được nới lỏng thêm qua đường vòng cạnh âm, phá vỡ tính đúng đắn của chiến lược tham lam.",
    },
    {
      id: 4,
      tag: "Modified Dijkstra",
      front: "Modified Dijkstra xử lý việc giảm khóa (Decrease-Key) trong Java PriorityQueue như thế nào?",
      back: "Java PriorityQueue không hỗ trợ decreaseKey(u) trong O(log V), nên ta đẩy cặp mới (new_dist, u) vào PQ và bỏ qua các cặp lỗi thời bằng kỹ thuật Lazy Deletion: if (d > D[u]) continue.",
    },
  ];

  const curFc = flashcards[fcIdx];
  const isFlipped = !!fcFlipped[curFc.id];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Bài 15: Single-Source Shortest Paths (SSSP) • Greedy Strategy</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-950 via-teal-950 to-sky-950 bg-clip-text text-transparent">
            Thuật Toán Dijkstra: Chiến Thần Tìm Đường Siêu Tốc O((V + E) log V)
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Kết hợp hoàn hảo giữa <strong>Chiến lược Tham lam (Greedy Choice)</strong> và <strong>Min-Heap Priority Queue</strong> &mdash; Trái tim thuật toán định vị toàn cầu của Google Maps, GPS Navigation và định tuyến mạng Internet OSPF.
          </p>
        </div>

        {/* Global Action Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs shadow-sm">
            Min-Heap O((V+E)logV)
          </div>
        </div>
      </div>

      {/* 4 Quick Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase block">1. Độ Phức Tạp Thời Gian</span>
          <span className="text-sm md:text-base font-extrabold font-mono text-emerald-950">O((V + E) log V)</span>
          <span className="text-[11px] text-slate-500 block font-medium">Dùng Min-Heap PriorityQueue</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-sky-200 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono text-sky-950 font-bold uppercase block">2. Bản Chất Thuật Toán</span>
          <span className="text-sm md:text-base font-extrabold font-sans text-sky-950">Greedy (Tham Lam)</span>
          <span className="text-[11px] text-slate-500 block font-medium">Chọn đỉnh D[u] nhỏ nhất trước</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-amber-200 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono text-amber-950 font-bold uppercase block">3. Điều Kiện Áp Dụng</span>
          <span className="text-sm md:text-base font-extrabold font-mono text-amber-950">w(u, v) &ge; 0</span>
          <span className="text-[11px] text-slate-500 block font-medium">Trọng số cạnh KHÔNG ÂM</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-indigo-200 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono text-indigo-950 font-bold uppercase block">4. Ứng Dụng Thực Tiễn</span>
          <span className="text-sm md:text-base font-extrabold font-sans text-indigo-950">Google Maps / GPS</span>
          <span className="text-[11px] text-slate-500 block font-medium">Định tuyến mạng OSPF / IS-IS</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-emerald-200/80 pb-3 text-xs font-mono">
        <button
          onClick={() => setActiveTab("arena")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeTab === "arena"
              ? "bg-emerald-600 text-white font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>1. Live Greedy Pathfinder Arena</span>
        </button>

        <button
          onClick={() => setActiveTab("showdown")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeTab === "showdown"
              ? "bg-sky-600 text-white font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>2. BFS vs Dijkstra vs Bellman-Ford Duel</span>
        </button>

        <button
          onClick={() => setActiveTab("trap")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeTab === "trap"
              ? "bg-rose-500 text-white font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>3. Cạm Bẫy Cạnh Âm (Greedy Trap)</span>
        </button>

        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeTab === "flashcards"
              ? "bg-amber-500 text-slate-950 font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>4. 4 Kickstart Flashcards</span>
        </button>
      </div>

      {/* Tab 1: Live Pathfinder Arena */}
      {activeTab === "arena" && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-white border border-emerald-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
            <div>
              <span className="text-[10px] font-mono text-emerald-950 uppercase font-bold tracking-wider block">
                {curDijkstra.title}
              </span>
              <p className="text-xs text-slate-700 font-sans mt-0.5 leading-relaxed">{curDijkstra.desc}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-30 text-slate-700 font-bold transition-all shadow-sm"
              >
                Bước Trước
              </button>
              <span className="text-xs font-bold text-amber-950 px-1">
                {step} / 5
              </span>
              <button
                onClick={() => setStep(Math.min(5, step + 1))}
                disabled={step === 5}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-30 text-white font-extrabold transition-all shadow-sm"
              >
                Bước Sau
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
            {/* Left: SVG Graph (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Đồ Thị Có Trọng Số Không Âm (Nguồn S = 0)</span>
                <span className="text-emerald-950 font-bold">Đã Chốt: {curDijkstra.settled.length} / 5 Đỉnh</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  <defs>
                    <marker id="ar-em" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
                    </marker>
                    <marker id="ar-dim2" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                    </marker>
                  </defs>

                  {/* 0 -> 1 (w=4) */}
                  <line x1="50" y1="100" x2="140" y2="40" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="85" y="60" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>

                  {/* 0 -> 2 (w=2) */}
                  <line x1="50" y1="100" x2="140" y2="160" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="85" y="145" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">2</text>

                  {/* 2 -> 1 (w=1) */}
                  <line x1="140" y1="160" x2="140" y2="40" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="148" y="100" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>

                  {/* 1 -> 3 (w=2) */}
                  <line x1="140" y1="40" x2="250" y2="40" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="195" y="32" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">2</text>

                  {/* 2 -> 3 (w=4) */}
                  <line x1="140" y1="160" x2="250" y2="40" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="190" y="115" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">4</text>

                  {/* 2 -> 4 (w=5) */}
                  <line x1="140" y1="160" x2="330" y2="100" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="240" y="150" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">5</text>

                  {/* 3 -> 4 (w=1) */}
                  <line x1="250" y1="40" x2="330" y2="100" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#ar-dim2)" />
                  <text x="295" y="60" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="monospace">1</text>

                  {/* Nodes */}
                  <circle cx="50" cy="100" r="16" fill={curDijkstra.settled.includes(0) ? "#d1fae5" : "#fef3c7"} stroke={curDijkstra.settled.includes(0) ? "#059669" : "#d97706"} strokeWidth="2.5" />
                  <text x="50" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

                  <circle cx="140" cy="40" r="16" fill={curDijkstra.settled.includes(1) ? "#d1fae5" : "#ffffff"} stroke={curDijkstra.settled.includes(1) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="140" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  <circle cx="140" cy="160" r="16" fill={curDijkstra.settled.includes(2) ? "#d1fae5" : "#ffffff"} stroke={curDijkstra.settled.includes(2) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="140" y="164" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  <circle cx="250" cy="40" r="16" fill={curDijkstra.settled.includes(3) ? "#d1fae5" : "#ffffff"} stroke={curDijkstra.settled.includes(3) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="250" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  <circle cx="330" cy="100" r="16" fill={curDijkstra.settled.includes(4) ? "#d1fae5" : "#ffffff"} stroke={curDijkstra.settled.includes(4) ? "#059669" : "#94a3b8"} strokeWidth="2.5" />
                  <text x="330" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
                </svg>
              </div>
            </div>

            {/* Right: PQ State & Distance Array (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Hàng Đợi Min-Heap (Priority Queue)</span>
                <span className="text-sky-950 font-bold">Extract-Min</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Các cặp (Khoảng cách, Đỉnh) trong PQ:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {curDijkstra.pq.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                        idx === 0
                          ? "bg-amber-100 border-amber-400 text-amber-950 shadow-sm"
                          : "bg-white border-slate-200 text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Mảng Khoảng Cách D[v]:</span>
                <div className="grid grid-cols-5 gap-1 text-center">
                  {curDijkstra.distances.map((d, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-xl border shadow-sm ${
                        curDijkstra.settled.includes(idx)
                          ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      <span className="text-[9px] text-slate-500 block font-bold">Đỉnh {idx}</span>
                      <span className="text-xs font-extrabold text-sky-950 block">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: SSSP Showdown Slider */}
      {activeTab === "showdown" && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
              <span>Thử Nghiệm Kích Thước Đồ Thị (|V| Đỉnh, |E| Cạnh)</span>
              <span className="text-sky-950 font-bold">Công Thức Tăng Trưởng</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1">
                <div className="flex justify-between text-slate-700 font-semibold">
                  <span>Số lượng đỉnh |V|: {nodesV}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={nodesV}
                  onChange={(e) => setNodesV(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-700 font-semibold">
                  <span>Số lượng cạnh |E|: {edgesE}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={edgesE}
                  onChange={(e) => setEdgesE(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <span className="font-mono text-sky-950 font-bold text-xs block uppercase">1. BFS O(V + E)</span>
                <div className="text-base font-extrabold font-mono text-sky-950">
                  {bfsOps.toLocaleString()} Phép tính
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Siêu tốc độ nhưng chỉ chạy trên đồ thị <strong>không trọng số</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2 shadow-sm ring-1 ring-emerald-300">
                <span className="font-mono text-emerald-950 font-bold text-xs block uppercase">2. Dijkstra O((V+E)logV)</span>
                <div className="text-base font-extrabold font-mono text-emerald-950">
                  {dijkstraOps.toLocaleString()} Phép tính
                </div>
                <p className="text-[11px] text-emerald-950 leading-relaxed font-medium">
                  Tối ưu vượt bậc cho đồ thị có trọng số <strong>không âm (w &ge; 0)</strong>!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <span className="font-mono text-amber-950 font-bold text-xs block uppercase">3. Bellman-Ford O(V · E)</span>
                <div className="text-base font-extrabold font-mono text-amber-950">
                  {bellmanFordOps.toLocaleString()} Phép tính
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Số phép tính lớn hơn nhiều, nhưng là cứu tinh duy nhất khi có <strong>cạnh âm</strong>!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Negative Weight Trap */}
      {activeTab === "trap" && (
        <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-4 text-xs font-sans shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Ví Dụ Phản Chứng: Tại Sao Dijkstra Thất Bại Trước Cạnh Âm?</span>
            <span className="text-rose-950 font-bold">Greedy Trap</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 space-y-2 text-rose-950 shadow-sm">
              <span className="text-rose-950 font-mono font-bold text-xs block">🚨 SAI LẦM CỦA DIJKSTRA KHI CÓ CẠNH ÂM:</span>
              <p className="leading-relaxed">
                • Dijkstra chọn chốt đỉnh <code>u</code> vì tại thời điểm đó <code>D[u]</code> nhỏ nhất ⟹ gắn nhãn <code>settled = true</code> và không bao giờ xem xét lại.
              </p>
              <p className="leading-relaxed">
                • Nhưng ở phía sau xuất hiện cạnh âm <code>(x, y, w = -10)</code> làm cho một đường vòng qua <code>x</code> có tổng chi phí nhỏ hơn nhiều ⟹ <strong>Dijkstra báo sai kết quả!</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2 text-emerald-950 shadow-sm">
              <span className="text-emerald-950 font-mono font-bold text-xs block">✅ KẾT LUẬN QUAN TRỌNG:</span>
              <p className="leading-relaxed">
                • Tiên đề sống còn của Dijkstra: <strong>Tất cả trọng số cạnh phải không âm (w &ge; 0)</strong> để đảm bảo rằng khi một đỉnh được lấy ra từ Min-Heap, khoảng cách của nó đã là tối ưu toàn cục.
              </p>
              <p className="leading-relaxed">
                • Nếu đồ thị có bất kỳ cạnh âm nào ⟹ Bắt buộc phải dùng <strong>Bellman-Ford O(V · E)</strong>!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Kickstart Flashcards */}
      {activeTab === "flashcards" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-600 font-semibold">Lật thẻ ôn tập nhanh 4 khái niệm then chốt:</span>
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setFcIdx(Math.max(0, fcIdx - 1))}
                disabled={fcIdx === 0}
                className="p-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-30 text-slate-700 hover:bg-slate-50 shadow-sm"
              >
                Trước
              </button>
              <span className="text-amber-950 font-bold px-1">{fcIdx + 1} / 4</span>
              <button
                onClick={() => setFcIdx(Math.min(3, fcIdx + 1))}
                disabled={fcIdx === 3}
                className="p-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-30 text-slate-700 hover:bg-slate-50 shadow-sm"
              >
                Sau
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              onClick={() => setFcFlipped({ ...fcFlipped, [curFc.id]: !isFlipped })}
              className={`w-full max-w-xl min-h-[180px] p-6 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between select-none ${
                isFlipped
                  ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-300/30 text-emerald-950"
                  : "bg-white border-slate-200 hover:border-emerald-300 text-slate-800"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-lg font-bold ${
                  isFlipped
                    ? "bg-emerald-100 border border-emerald-300 text-emerald-950"
                    : "bg-amber-100 border border-amber-300 text-amber-950"
                }`}>
                  {curFc.tag}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <RotateCw className="w-3 h-3" />
                  {isFlipped ? "Đáp án" : "Bấm để lật"}
                </span>
              </div>

              <div className="py-2">
                {isFlipped ? (
                  <p className="text-sm font-sans font-semibold text-emerald-950 leading-relaxed">
                    {curFc.back}
                  </p>
                ) : (
                  <p className="text-base font-bold font-sans text-slate-900 leading-relaxed">
                    {curFc.front}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                <span>Thẻ #{curFc.id}</span>
                <span>{isFlipped ? "Đã lật xem ✅" : "Chưa lật ⏳"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
