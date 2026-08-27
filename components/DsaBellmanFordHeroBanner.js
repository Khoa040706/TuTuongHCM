"use client";

import React, { useState } from "react";
import {
  Compass,
  Activity,
  Radio,
  ArrowRight,
  RotateCcw,
  ShieldAlert,
  Clock,
  HardDrive,
} from "lucide-react";

export default function DsaBellmanFordHeroBanner() {
  const [activeTab, setActiveTab] = useState("relax"); // "relax" | "radar" | "duel" | "flashcards"
  const [relaxStep, setRelaxStep] = useState(0);
  const [hasCycle, setHasCycle] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  // 4 steps of Relaxation for 5 nodes (0 to 4)
  const relaxationSteps = [
    {
      round: 0,
      title: "Khởi tạo ban đầu: dist[0] = 0, tất cả đỉnh khác = ∞",
      desc: "Nguồn S = 0. Chưa có cạnh nào được nới lỏng (Relaxation).",
      dist: [0, "∞", "∞", "∞", "∞"],
      activeEdge: null,
      updatedNodes: [0],
    },
    {
      round: 1,
      title: "Vòng 1 (k = 1): Nới lỏng các cạnh xuất phát từ nguồn 0",
      desc: "Relax(0, 1, 6) ⟹ dist[1] = 6. Relax(0, 2, 7) ⟹ dist[2] = 7.",
      dist: [0, 6, 7, "∞", "∞"],
      activeEdge: "0-1",
      updatedNodes: [1, 2],
    },
    {
      round: 2,
      title: "Vòng 2 (k = 2): Lan truyền qua các cạnh kề tiếp theo",
      desc: "Relax(1, 3, 5) ⟹ dist[3] = 6 + 5 = 11. Relax(1, 2, 8) không đổi (7 < 14). Relax(2, 4, 9) ⟹ dist[4] = 7 + 9 = 16.",
      dist: [0, 6, 7, 11, 16],
      activeEdge: "1-3",
      updatedNodes: [3, 4],
    },
    {
      round: 3,
      title: "Vòng 3 (k = 3): Tối ưu hóa mạnh mẽ bằng cạnh trọng số âm",
      desc: "Relax(3, 4, -4) ⟹ dist[4] = min(16, 11 - 4) = 7! Khoảng cách tới đỉnh 4 giảm sốc từ 16 xuống 7.",
      dist: [0, 6, 7, 11, 7],
      activeEdge: "3-4",
      updatedNodes: [4],
    },
    {
      round: 4,
      title: "Vòng 4 (k = 4 = V - 1): Hội tụ tối ưu toàn cục!",
      desc: "Tất cả các khoảng cách đã đạt cực tiểu tuyệt đối. Không có giá trị dist nào có thể giảm thêm.",
      dist: [0, 6, 7, 11, 7],
      activeEdge: null,
      updatedNodes: [],
    },
  ];

  const curRelax = relaxationSteps[relaxStep];

  const flashcards = [
    {
      id: 1,
      tag: "SSSP Nền Tảng",
      front: "Bài toán Đường đi ngắn nhất nguồn đơn (SSSP) là gì?",
      back: "Tìm đường đi có tổng trọng số nhỏ nhất từ một đỉnh nguồn cố định S đến tất cả các đỉnh còn lại trong đồ thị có trọng số.",
    },
    {
      id: 2,
      tag: "Cơ Chế Relaxation",
      front: "Thao tác Nới lỏng cạnh (Relaxation) hoạt động như thế nào?",
      back: "Nếu dist[u] + w(u, v) < dist[v] thì cập nhật dist[v] = dist[u] + w(u, v). Đây là hạt nhân của mọi thuật toán tìm đường đi ngắn nhất.",
    },
    {
      id: 3,
      tag: "Giới Hạn V - 1 Vòng",
      front: "Tại sao Bellman-Ford chỉ cần lặp đúng V - 1 vòng để hội tụ?",
      back: "Vì trong đồ thị V đỉnh không có chu trình âm, một đường đi đơn giản (simple path) có tối đa V - 1 cạnh. Mỗi vòng quét đảm bảo mở rộng đường đi tối ưu thêm ít nhất 1 cạnh.",
    },
    {
      id: 4,
      tag: "Dò Tìm Chu Trình Âm",
      front: "Làm thế nào để phát hiện Chu trình âm ở vòng lặp thứ V?",
      back: "Nếu sau V - 1 vòng, ở vòng thứ V vẫn còn ít nhất một cạnh thỏa mãn dist[u] + w(u, v) < dist[v], đồ thị chắc chắn chứa chu trình âm (-∞).",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-rose-50/60 p-6 md:p-8 text-slate-800 shadow-sm mb-8 font-sans">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-sky-200/80 pb-6 mb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-sky-700" />
            <span>Bài 14: Thuật Toán Bellman-Ford (SSSP &amp; Negative Cycles)</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-sky-950 via-rose-950 to-indigo-950 bg-clip-text text-transparent">
            Vũ Khí Trọng Số Âm &amp; Dò Tìm Chu Trình Âm
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Giải quyết triệt để bài toán Đường đi ngắn nhất nguồn đơn (SSSP) trên đồ thị có trọng số âm, khắc phục điểm mù chí mạng của Dijkstra và kích hoạt radar phát hiện hố đen chu trình âm $-\infty$.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap rounded-2xl bg-slate-100 p-1.5 border border-slate-200 self-start lg:self-auto text-xs font-mono gap-1 shadow-sm">
          <button
            onClick={() => setActiveTab("relax")}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "relax"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. SSSP Relaxation (V-1 Vòng)
          </button>
          <button
            onClick={() => setActiveTab("radar")}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "radar"
                ? "bg-rose-500 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Radar Chu Trình Âm (-∞)
          </button>
          <button
            onClick={() => setActiveTab("duel")}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "duel"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Dijkstra vs Bellman-Ford
          </button>
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "flashcards"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            4. Flashcards (4 Thẻ)
          </button>
        </div>
      </div>

      {/* 4 Quick Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Thời Gian:</span>
          </div>
          <div className="text-amber-950 font-extrabold text-sm">O(V · E)</div>
          <span className="text-[10px] text-slate-500 font-sans block">(V - 1) vòng quét qua E cạnh</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
            <HardDrive className="w-3.5 h-3.5 text-sky-600" />
            <span>Bộ Nhớ:</span>
          </div>
          <div className="text-sky-950 font-extrabold text-sm">O(V)</div>
          <span className="text-[10px] text-slate-500 font-sans block">Mảng dist[] và parent[]</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>Vòng Nới Lỏng:</span>
          </div>
          <div className="text-emerald-950 font-extrabold text-sm">V - 1 Vòng</div>
          <span className="text-[10px] text-slate-500 font-sans block">Đường đi đơn tối đa V - 1 cạnh</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1 shadow-sm">
          <div className="flex items-center gap-1.5 text-rose-950 text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Vũ Khí Độc Quyền:</span>
          </div>
          <div className="text-rose-950 font-extrabold text-sm">Chu Trình Âm</div>
          <span className="text-[10px] text-rose-800 font-sans block">Phát hiện ở vòng quét thứ V</span>
        </div>
      </div>

      {/* TAB 1: SSSP RELAXATION ARENA */}
      {activeTab === "relax" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-amber-200 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-amber-950 uppercase font-bold tracking-wider">
                Vòng Lặp Nới Lỏng: {relaxStep} / 4 (V = 5 Đỉnh)
              </span>
              <h4 className="text-sm font-bold text-slate-900 font-mono">
                {curRelax.title}
              </h4>
              <p className="text-xs text-slate-600 font-sans">{curRelax.desc}</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
              <button
                onClick={() => setRelaxStep(Math.max(0, relaxStep - 1))}
                disabled={relaxStep === 0}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold transition-all border border-slate-200 shadow-sm"
              >
                Trước
              </button>
              <span className="text-xs font-bold text-amber-950 px-1">
                Vòng {relaxStep}
              </span>
              <button
                onClick={() => setRelaxStep(Math.min(relaxationSteps.length - 1, relaxStep + 1))}
                disabled={relaxStep === relaxationSteps.length - 1}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-slate-950 font-extrabold transition-all shadow-sm"
              >
                Vòng Sau
                <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
              <button
                onClick={() => setRelaxStep(0)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all border border-slate-200 shadow-sm"
                title="Đặt lại"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* SVG Graph */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Đồ Thị 5 Đỉnh Có Cạnh Âm (-4)</span>
                <span className="text-amber-950 font-bold">Nguồn S = 0</span>
              </div>

              <div className="flex justify-center py-2">
                <svg viewBox="0 0 380 200" className="w-full max-w-[360px] h-auto select-none">
                  {/* Directed Edges */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                    </marker>
                    <marker id="arrow-amber" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
                    </marker>
                    <marker id="arrow-rose" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
                    </marker>
                  </defs>

                  {/* 0 -> 1 (w = 6) */}
                  <line x1="50" y1="100" x2="140" y2="40" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="85" y="60" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">6</text>

                  {/* 0 -> 2 (w = 7) */}
                  <line x1="50" y1="100" x2="140" y2="160" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="85" y="145" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">7</text>

                  {/* 1 -> 3 (w = 5) */}
                  <line x1="140" y1="40" x2="250" y2="40" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="195" y="32" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">5</text>

                  {/* 1 -> 2 (w = 8) */}
                  <line x1="140" y1="40" x2="140" y2="160" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="148" y="100" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">8</text>

                  {/* 2 -> 4 (w = 9) */}
                  <line x1="140" y1="160" x2="330" y2="100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="235" y="150" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="monospace">9</text>

                  {/* 3 -> 4 (w = -4: CẠNH ÂM!) */}
                  <line x1="250" y1="40" x2="330" y2="100" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow-rose)" />
                  <text x="300" y="60" fill="#f43f5e" fontSize="11" fontWeight="extrabold" fontFamily="monospace">-4</text>

                  {/* Nodes */}
                  <circle cx="50" cy="100" r="16" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
                  <text x="50" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">0</text>

                  <circle cx="140" cy="40" r="16" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
                  <text x="140" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">1</text>

                  <circle cx="140" cy="160" r="16" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
                  <text x="140" y="164" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">2</text>

                  <circle cx="250" cy="40" r="16" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
                  <text x="250" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">3</text>

                  <circle cx="330" cy="100" r="16" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  <text x="330" y="104" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="monospace">4</text>
                </svg>
              </div>
            </div>

            {/* Mảng dist[] Table */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
                <span>Mảng Khoảng Cách dist[]</span>
                <span className="text-sky-950 font-bold">Vòng {relaxStep}</span>
              </div>

              <div className="grid grid-cols-5 gap-1.5 font-mono text-center">
                {curRelax.dist.map((d, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border space-y-1 transition-all shadow-sm ${
                      curRelax.updatedNodes.includes(idx)
                        ? "bg-amber-100 border-amber-400 text-amber-950 ring-1 ring-amber-400 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <span className="text-[10px] text-slate-500 block font-bold">Đỉnh {idx}</span>
                    <span className="text-sm font-extrabold block text-sky-950">{d}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs font-sans text-slate-700 leading-relaxed shadow-sm">
                <span className="text-amber-950 font-bold block font-mono text-[11px]">
                  Công Thức Relaxation Vàng:
                </span>
                <code className="font-mono text-slate-800 font-bold text-[11px] block bg-white p-1.5 rounded-lg border border-slate-200">if (dist[u] + w &lt; dist[v]) dist[v] = dist[u] + w;</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: NEGATIVE CYCLE RADAR */}
      {activeTab === "radar" && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-slate-500 font-semibold">Vòng Quét Thứ V (Phát Hiện Chu Trình Âm):</span>
                <h4 className="text-sm font-bold font-mono text-slate-900 mt-0.5">
                  {hasCycle ? "🚨 BÁO ĐỘNG ĐỎ: PHÁT HIỆN CHU TRÌNH ÂM (TỔNG = -4)!" : "✅ ĐỒ THỊ AN TOÀN: KHÔNG CÓ CHU TRÌNH ÂM"}
                </h4>
              </div>

              <button
                onClick={() => setHasCycle(!hasCycle)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 self-start sm:self-auto shadow-sm ${
                  hasCycle
                    ? "bg-rose-500 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>{hasCycle ? "Tắt Chu Trình Âm" : "Bật Chu Trình Âm Để Test Radar ➔"}</span>
              </button>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 text-xs font-sans leading-relaxed transition-all shadow-sm ${
              hasCycle
                ? "bg-rose-50 border-rose-300 text-rose-950"
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}>
              <p>
                • <strong>Nguyên lý:</strong> Nếu sau $V - 1$ vòng mà khoảng cách tới một đỉnh $v$ vẫn tiếp tục giảm ở vòng thứ $V$, điều đó đồng nghĩa tồn tại một đường đi khép kín có tổng trọng số âm.
              </p>
              <p className={hasCycle ? "font-bold text-rose-950" : "text-amber-950 font-semibold"}>
                {hasCycle
                  ? "⚠️ Hố đen vô tận: Mỗi lần đi qua chu trình này, tổng chi phí giảm thêm -4. Khoảng cách ngắn nhất hội tụ về -∞ (âm vô cực), khiến bài toán SSSP không thể xác định!"
                  : "💡 Bấm nút 'Bật Chu Trình Âm' ở trên để xem cách thuật toán Bellman-Ford kích hoạt điều kiện báo động."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DIJKSTRA VS BELLMAN-FORD DUEL */}
      {activeTab === "duel" && (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-slate-50 text-slate-700 font-mono text-[11px] border-b border-slate-200">
              <tr>
                <th className="p-3.5">Tiêu Chí So Sánh</th>
                <th className="p-3.5 text-sky-950 font-bold">Dijkstra's Algorithm</th>
                <th className="p-3.5 text-rose-950 font-bold">Bellman-Ford Algorithm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3.5 font-bold font-mono text-slate-800">Trọng số âm</td>
                <td className="p-3.5 text-rose-700 font-mono font-bold">❌ Bó tay (Kết quả sai)</td>
                <td className="p-3.5 text-emerald-700 font-mono font-bold">✅ Xử lý hoàn hảo</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold font-mono text-slate-800">Chu trình âm</td>
                <td className="p-3.5 text-rose-700 font-mono font-bold">❌ Lặp vô tận hoặc sai</td>
                <td className="p-3.5 text-emerald-700 font-mono font-bold">✅ Phát hiện chính xác</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold font-mono text-slate-800">Độ phức tạp</td>
                <td className="p-3.5 font-mono text-sky-950 font-semibold">O((V + E) log V) &mdash; Nhanh</td>
                <td className="p-3.5 font-mono text-amber-950 font-semibold">O(V · E) &mdash; Chậm hơn</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold font-mono text-slate-800">Triết lý thiết kế</td>
                <td className="p-3.5 font-mono">Tham lam (Greedy)</td>
                <td className="p-3.5 font-mono">Quy hoạch động (Dynamic Programming)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 4: KICKSTART FLASHCARDS */}
      {activeTab === "flashcards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {flashcards.map((c) => {
            const isFlipped = !!flippedCards[c.id];
            return (
              <div
                key={c.id}
                onClick={() => toggleFlip(c.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between select-none min-h-[160px] ${
                  isFlipped
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950 ring-1 ring-emerald-300/40"
                    : "bg-white border-slate-200 hover:border-sky-300 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-sky-100 border border-sky-300 text-sky-950 font-bold">
                    {c.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" />
                    {isFlipped ? "Đáp án" : "Lật thẻ"}
                  </span>
                </div>

                <div className="py-2">
                  {isFlipped ? (
                    <p className="text-xs font-sans font-semibold text-emerald-950 leading-relaxed">
                      {c.back}
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm font-bold font-sans text-slate-900 leading-relaxed">
                      {c.front}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  <span>Thẻ #{c.id}</span>
                  <span>{isFlipped ? "Đã xem ✅" : "Bấm để xem ⏳"}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
