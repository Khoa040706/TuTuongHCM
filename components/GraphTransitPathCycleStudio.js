"use client";

import React, { useState } from "react";
import { Train, ArrowRight, MapPin } from "lucide-react";

export default function GraphTransitPathCycleStudio() {
  const [selectedTransit, setSelectedTransit] = useState("path"); // "path" (Clementi -> Outram Park) | "cycle" (Sengkang LRT)

  // Clementi to Outram Park MRT stations (7 hops, 8 stations):
  // Clementi -> Dover -> Buona Vista -> Commonwealth -> Queenstown -> Redhill -> Tiong Bahru -> Outram Park
  const mrtStations = [
    "Clementi",
    "Dover",
    "Buona Vista",
    "Commonwealth",
    "Queenstown",
    "Redhill",
    "Tiong Bahru",
    "Outram Park",
  ];

  // Sengkang LRT West Loop stations (Cycle)
  const lrtLoop = [
    "Sengkang (STC)",
    "Thanggam (SW4)",
    "Fernvale (SW5)",
    "Layar (SW6)",
    "Tongkang (SW7)",
    "Renjong (SW8)",
    "Sengkang (STC)",
  ];

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Train className="w-3.5 h-3.5 text-sky-700" />
            <span>Đường Đi Đơn &amp; Chu Trình (Mục 3.4)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-blue-950 to-slate-900 bg-clip-text text-transparent">
            Simple Path &bull; Simple Cycle &bull; Mạng Giao Thông MRT/LRT
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Đường đi đơn không lặp đỉnh; chu trình đơn là đường đi khép kín đầu-cuối.
          </p>
        </div>

        {/* View Selector */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedTransit("path")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTransit === "path"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Simple Path (MRT 7 Hops)
          </button>
          <button
            onClick={() => setSelectedTransit("cycle")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedTransit === "cycle"
                ? "bg-teal-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Simple Cycle (LRT West Loop)
          </button>
        </div>
      </div>

      {/* Definitions Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs font-sans">
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-1.5 shadow-sm">
          <strong className="text-emerald-950 font-mono block">1. (Simple) Path (Đường đi đơn):</strong>
          <p className="text-slate-600 leading-relaxed text-[11px]">
            Dãy các đỉnh kề nhau liên tiếp mà <strong>không lặp lại đỉnh nào</strong>. Độ dài đường đi (Path Length) bằng số cạnh (hops) nếu không trọng số, hoặc tổng trọng số cạnh nếu có trọng số.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-teal-200 space-y-1.5 shadow-sm">
          <strong className="text-teal-950 font-mono block">2. (Simple) Cycle (Chu trình đơn):</strong>
          <p className="text-slate-600 leading-relaxed text-[11px]">
            Đường đi bắt đầu và kết thúc tại <strong>cùng một đỉnh</strong> (khép kín), và không lặp lại bất kỳ đỉnh nào khác ở giữa.
          </p>
        </div>
      </div>

      {/* Singapore Transit Real-World Visualizer */}
      <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-4 shadow-sm">
        {selectedTransit === "path" ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
              <span className="text-emerald-950 font-bold">Tuyến MRT: Clementi &rarr; Outram Park</span>
              <span className="text-amber-900 font-bold">Length = 7 Hops (8 Trạm)</span>
            </div>

            {/* Stations Line */}
            <div className="flex items-center gap-2 overflow-x-auto py-3 text-xs font-mono">
              {mrtStations.map((st, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold whitespace-nowrap shadow-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{st}</span>
                  </div>
                  {idx < mrtStations.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xs text-slate-600 font-sans">
              📌 Tuyến đi thẳng không lặp lại bất kỳ ga tàu nào &rarr; Đạt định nghĩa <strong>Simple Path</strong> với độ dài đúng 7 cạnh (hops) theo ví dụ slide!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-100 pb-2">
              <span className="text-teal-950 font-bold">Vòng Lặp LRT: Sengkang LRT (West Loop)</span>
              <span className="text-cyan-950 font-bold">Chu Trình Khép Kín (Cycle)</span>
            </div>

            {/* Loop Stations */}
            <div className="flex items-center gap-2 overflow-x-auto py-3 text-xs font-mono">
              {lrtLoop.map((st, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-3 py-2 rounded-xl border font-bold whitespace-nowrap shadow-sm flex items-center gap-1.5 ${
                    idx === 0 || idx === lrtLoop.length - 1
                      ? "bg-amber-100 border-amber-300 text-amber-950 font-extrabold"
                      : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}>
                    <Train className="w-3.5 h-3.5 text-teal-600" />
                    <span>{st}</span>
                  </div>
                  {idx < lrtLoop.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xs text-slate-600 font-sans">
              📌 Bắt đầu tại ga <strong>Sengkang (STC)</strong> và kết thúc quay về đúng <strong>Sengkang (STC)</strong> &rarr; Đạt định nghĩa <strong>Simple Cycle</strong>!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
