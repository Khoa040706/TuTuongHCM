"use client";

import React, { useState } from "react";
import {
  Zap,
  BatteryCharging,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export default function ModifiedDijkstraExecutionStudio() {
  const [step, setStep] = useState(0);

  const stepsData = [
    {
      stepNum: 0,
      title: "Khởi Tạo Ban Đầu: initSSSP(s = 0)",
      desc: "Đặt dist[0] = 0, các đỉnh còn lại = ∞. Đẩy cặp (dist = 0, u = 0) vào Priority Queue.",
      pq: ["(0, đỉnh 0)"],
      distances: [0, "∞", "∞", "∞", "∞"],
      actionLog: "Khởi tạo nguồn s = 0",
      activeNode: 0,
    },
    {
      stepNum: 1,
      title: "Bước 1: Dequeue (0, đỉnh 0) & Nới lỏng",
      desc: "d = 0 == dist[0] (Khớp!). Nới lỏng (0, 1, w=5) ➔ dist[1]=5, đẩy (5, 1) vào PQ; nới lỏng (0, 3, w=2) ➔ dist[3]=2, đẩy (2, 3) vào PQ.",
      pq: ["(2, đỉnh 3)", "(5, đỉnh 1)"],
      distances: [0, 5, "∞", 2, "∞"],
      actionLog: "Nới lỏng đỉnh 1 và đỉnh 3",
      activeNode: 0,
    },
    {
      stepNum: 2,
      title: "Bước 2: Dequeue (2, đỉnh 3) & Nới lỏng",
      desc: "d = 2 == dist[3] (Khớp!). Nới lỏng (3, 4, w=5) ➔ dist[4] = 2 + 5 = 7, đẩy (7, 4) vào PQ.",
      pq: ["(5, đỉnh 1)", "(7, đỉnh 4)"],
      distances: [0, 5, "∞", 2, 7],
      actionLog: "Nới lỏng đỉnh 4 tạm thời (dist[4] = 7)",
      activeNode: 3,
    },
    {
      stepNum: 3,
      title: "Bước 3: Dequeue (5, đỉnh 1) & Nới lỏng qua CẠNH ÂM (1, 4, w=-4)",
      desc: "d = 5 == dist[1] (Khớp!). Nới lỏng cạnh âm (1, 4, w=-4) ➔ dist[4] = min(7, 5 + (-4)) = 1! Đẩy cặp mới (1, 4) vào PQ.",
      pq: ["(1, đỉnh 4)", "(7, đỉnh 4)"],
      distances: [0, 5, "∞", 2, 1],
      actionLog: "Nới lỏng thành công qua cạnh âm: dist[4] giảm từ 7 xuống 1!",
      activeNode: 1,
    },
    {
      stepNum: 4,
      title: "Bước 4: Dequeue (1, đỉnh 4) & Chốt Giá Trị Tối Ưu",
      desc: "d = 1 == dist[4] (Khớp!). Đỉnh 4 không có cạnh đi ra. Kết thúc nhánh tối ưu cho đỉnh 4.",
      pq: ["(7, đỉnh 4)"],
      distances: [0, 5, "∞", 2, 1],
      actionLog: "Xử lý cặp tốt hơn (1, 4)",
      activeNode: 4,
    },
    {
      stepNum: 5,
      title: "Bước 5: Dequeue (7, đỉnh 4) ➔ KỸ THUẬT LAZY DS PHÁT HUY TÁC DỤNG!",
      desc: "d = 7 > dist[4] = 1 ➔ ĐIỀU KIỆN LAZY PHÁT HIỆN CẶP LỖI THỜI! Thuật toán bỏ qua (continue) mà không xử lý lại. PQ rỗng. Hoàn tất!",
      pq: ["Rỗng (Hoàn tất)"],
      distances: [0, 5, "∞", 2, 1],
      actionLog: "Lazy Check: d (7) > dist[4] (1) ➔ Bỏ qua cặp lỗi thời!",
      activeNode: 4,
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
            <span>Phần 11: Special Case 4b — Thuật Toán Modified Dijkstra &amp; Lazy Data Structure</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-sky-950 bg-clip-text text-transparent">
            Modified Dijkstra: Xử Lý Cạnh Âm Bằng Kỹ Thuật Lazy Deletion
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Không cần hàm <code>DecreaseKey()</code> phức tạp, chỉ cần đẩy cặp mới <code>(new_dist, v)</code> vào PriorityQueue và lọc bỏ các bản sao lỗi thời bằng điều kiện cốt tử <code>if (d &gt; dist[u]) continue;</code>.
          </p>
        </div>

        {/* Global Action Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          CP3 4.18: ĐÚNG Delta(0,4) = 1!
        </div>
      </div>

      {/* Real-world Analogy Banner */}
      <div className="p-4 rounded-2xl bg-sky-50 border border-sky-300 mb-6 flex items-start gap-3 text-xs font-sans text-sky-950 shadow-sm">
        <BatteryCharging className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
        <div className="space-y-1 leading-relaxed">
          <span className="text-sky-950 font-mono font-bold block text-[11px] uppercase">
            🚗 Bối Cảnh Thực Tế — Hành Trình Xe Điện Sạc Pin (Electric Car):
          </span>
          <p>
            • Khi leo dốc hoặc chạy đường phẳng: Tiêu tốn (+) năng lượng từ pin.
          </p>
          <p>
            • Khi xuống dốc: Xe điện phanh tái sinh (regenerative braking) để <strong>sạc lại (-) năng lượng</strong> vào pin ➔ Trọng số cạnh là số âm!
          </p>
          <p>
            • Nhưng tổng hành trình không thể sạc pin vô hạn vì mất mát động năng do ma sát ➔ <strong>Đồ thị có cạnh âm nhưng không bao giờ có Negative Cycle!</strong>
          </p>
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
        {/* Left: Pseudo-code & PQ Viewer (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mã Giả Modified Dijkstra (CP3 Section 4.4.3)</span>
            <span className="text-emerald-950 font-bold">Lazy Data Structure</span>
          </div>

          {/* Dark macOS Terminal for Code */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 overflow-x-auto shadow-sm">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-[10px] text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 font-mono text-slate-400">ModifiedDijkstra.pseudo</span>
            </div>
            <div className="pt-2"><span className="text-purple-400">initSSSP</span>(s)</div>
            <div>PQ.<span className="text-cyan-400">enqueue</span>((0, s)) <span className="text-slate-500">{"// (dist[u], u)"}</span></div>
            <div className="pt-1"><span className="text-amber-400">while</span> (!PQ.isEmpty()) &#123;</div>
            <div className="pl-4">(d, u) = PQ.<span className="text-cyan-400">dequeue</span>();</div>
            <div className={`pl-4 py-0.5 rounded ${step === 5 ? "bg-amber-950/80 border border-amber-500 text-amber-200 font-bold" : ""}`}>
              <span className="text-amber-400">if</span> (d &gt; dist[u]) <span className="text-amber-400">continue</span>; <span className="text-slate-500">{"// &larr; LAZY CHECK CỐT TỬ"}</span>
            </div>
            <div className="pl-4"><span className="text-amber-400">for each</span> (u, v, w) in Adj[u] &#123;</div>
            <div className="pl-8"><span className="text-amber-400">if</span> (dist[v] &gt; dist[u] + w) &#123;</div>
            <div className="pl-12">dist[v] = dist[u] + w;</div>
            <div className="pl-12">PQ.<span className="text-cyan-400">enqueue</span>((dist[v], v)); <span className="text-slate-500">{"// re-enqueue bản sao mới"}</span></div>
            <div className="pl-8">&#125;</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </div>

          {/* Distance Table */}
          <div className="space-y-1.5 font-mono text-xs">
            <span className="text-[10px] text-slate-500 block uppercase font-bold">Mảng Khoảng Cách dist[v] Sau Bước {step}:</span>
            <div className="grid grid-cols-5 gap-1.5 text-center">
              {curData.distances.map((d, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border shadow-sm ${
                    idx === 4 && d === 1
                      ? "bg-emerald-100 border-emerald-400 text-emerald-950 ring-2 ring-emerald-400/40 font-bold"
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

        {/* Right: PQ State & Core Memo (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-sm text-xs font-sans text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Trạng Thái Priority Queue Hiện Tại</span>
            <span className="text-sky-950 font-bold">PQ Buffer</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1.5 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">Các Cặp Trong PQ (Tự Động Sắp Xếp Tăng Dần):</span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {curData.pq.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-bold shadow-sm ${
                    item.includes("Rỗng")
                      ? "bg-emerald-100 border-emerald-400 text-emerald-950"
                      : idx === 0
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
            <span className="text-amber-950 font-mono font-bold text-[11px] block">
              💡 Vì Sao Dùng Cách Tiếp Cận Lazy Này?
            </span>
            <p>
              • Thư viện <code>PriorityQueue</code> tiêu chuẩn trong Java và C++ <strong>không hỗ trợ tìm kiếm</strong> các phần tử nằm sâu trong Heap để xóa hay cập nhật <code>DecreaseKey</code>.
            </p>
            <p>
              • Bằng cách cứ để mặc cặp cũ trong PQ và chỉ kiểm tra <code>if (d &gt; dist[u]) continue;</code> khi lấy ra, ta đạt hiệu năng tương đương mà mã nguồn cực kỳ ngắn gọn!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 11):
            </span>
            <p>
              • Modified Dijkstra chấp nhận <strong>cạnh âm</strong> (miễn không có negative cycle).
            </p>
            <p>
              • Dùng <strong>Lazy Data Structure</strong>: Kiểm tra <code>d == dist[u]</code> mỗi khi dequeue &mdash; nếu không khớp thì bỏ qua.
            </p>
            <p>
              • Khi <code>dist[v]</code> giảm ➔ <strong>enqueue lại</strong> <code>(dist[v], v)</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
