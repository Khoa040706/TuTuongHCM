"use client";

import React, { useState } from "react";
import {
  Compass,
} from "lucide-react";

export default function DijkstraMotivationBridgeStudio() {
  const [nodesV, setNodesV] = useState(1000);
  const [edgesE, setEdgesE] = useState(100000);

  const bellmanOps = nodesV * edgesE;
  const dijkstraOps = Math.round((nodesV + edgesE) * Math.log2(nodesV));
  const speedupRatio = Math.round(bellmanOps / dijkstraOps);

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 6: Special Case 4a — Đồ Thị Không Có Trọng Số Âm (No Negative Weight)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Vì Sao Cần Thuật Toán Dijkstra Khi Bellman-Ford Đã Chạy Đúng?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Trong thực tế, khoảng cách và thời gian di chuyển trên bản đồ GPS luôn là số không âm ($w(u, v) \ge 0$). Thuật toán Dijkstra khai thác tính chất này để tăng tốc độ lên gấp hàng trăm lần!
          </p>
        </div>

        {/* Speedup Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Nhanh Hơn Gấp ~{speedupRatio} Lần!
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Real-world GPS Context & Sliders (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mô Phỏng Thử Nghiệm Kích Thước Bản Đồ Giao Thông</span>
            <span className="text-emerald-950 font-bold">GPS Benchmark</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex justify-between text-slate-700 font-semibold">
                <span>Số đỉnh (Giao lộ |V|): {nodesV.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={nodesV}
                onChange={(e) => setNodesV(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-slate-700 font-semibold">
                <span>Số cạnh (Đoạn đường |E|): {edgesE.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="5000"
                value={edgesE}
                onChange={(e) => setEdgesE(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
              <span className="text-amber-950 font-bold text-xs block uppercase">1. Bellman-Ford O(V · E)</span>
              <div className="text-base font-extrabold text-amber-950">
                {bellmanOps.toLocaleString()} Phép tính
              </div>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                Quá chậm với đồ thị dày đặc! Lặp toàn bộ <code>E</code> cạnh đúng <code>V - 1</code> lần.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2 text-emerald-950 ring-1 ring-emerald-300 shadow-sm">
              <span className="text-emerald-950 font-bold text-xs block uppercase">2. Dijkstra O((V+E)logV)</span>
              <div className="text-base font-extrabold text-emerald-950">
                {dijkstraOps.toLocaleString()} Phép tính
              </div>
              <p className="text-[11px] text-emerald-950 font-sans leading-relaxed font-medium">
                Tốc độ siêu việt! Tiết kiệm tới <strong>{speedupRatio}x</strong> số phép tính trên CPU.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Core Insights & Memo (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-5 space-y-3.5 shadow-sm text-xs font-sans text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bản Chất Thực Tế Của Bài Toán</span>
            <span className="text-sky-950 font-bold">Real-world Insight</span>
          </div>

          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p>
              • <strong>Bellman-Ford:</strong> Đa năng cho mọi đồ thị có trọng số tổng quát, nhưng phải trả giá bằng độ phức tạp lớn <code>O(V · E)</code>.
            </p>
            <p>
              • <strong>Bản đồ thực tế:</strong> Khoảng cách địa lý giữa 2 thành phố hoặc thời gian xe chạy giữa 2 nút giao luôn là <strong>số dương</strong> (không bao giờ có thời gian âm).
            </p>
            <p>
              • Khi biết chắc đồ thị không có cạnh âm ➔ <strong>Thuật toán Dijkstra</strong> là sự lựa chọn số 1 tuyệt đối!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 6):
            </span>
            <p>
              • Bellman-Ford: Dùng cho mọi trường hợp nhưng <code>O(VE)</code>, chậm với đồ thị lớn.
            </p>
            <p>
              • Khi biết chắc đồ thị <strong>không có cạnh âm</strong> ➔ Dùng <strong>Dijkstra</strong> để đạt tốc độ tối đa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
