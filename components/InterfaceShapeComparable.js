"use client";
import React, { useState } from "react";
import { Play, HelpCircle, Layers, CheckCircle2, ChevronRight, Info } from "lucide-react";

export default function InterfaceShapeComparable() {
  const [circleRadius, setCircleRadius] = useState(3.0);
  const [rectWidth, setRectWidth] = useState(4.0);
  const [rectHeight, setRectHeight] = useState(3.0);
  const [comparisonResult, setComparisonResult] = useState(null); // null, 0, 1, -1
  const [simState, setSimState] = useState("idle"); // "idle" | "running" | "done"
  const [log, setLog] = useState("Thiết lập kích thước và nhấn 'Chạy so sánh compareTo()'.");

  const areaCircle = (3.14 * circleRadius * circleRadius).toFixed(2);
  const areaRect = (rectWidth * rectHeight).toFixed(2);

  const runComparison = () => {
    setSimState("running");
    setComparisonResult(null);
    setLog("Đang gọi phương thức: circle.compareTo(rectangle)...");

    setTimeout(() => {
      const aC = parseFloat(areaCircle);
      const aR = parseFloat(areaRect);
      let res = 0;

      if (aC > aR) {
        res = 1;
        setLog(`KẾT QUẢ: compareTo() trả về 1. Diện tích Hình tròn (${areaCircle}) LỚN HƠN diện tích Hình chữ nhật (${areaRect}).`);
      } else if (aC < aR) {
        res = -1;
        setLog(`KẾT QUẢ: compareTo() trả về -1. Diện tích Hình tròn (${areaCircle}) BÉ HƠN diện tích Hình chữ nhật (${areaRect}).`);
      } else {
        res = 0;
        setLog(`KẾT QUẢ: compareTo() trả về 0. Diện tích hai hình BẰNG NHAU (${areaCircle}).`);
      }

      setComparisonResult(res);
      setSimState("done");
    }, 1000);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Mô Phỏng Đa Hình: Comparable & compareTo
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            So sánh diện tích động của các loại hình học khác nhau thông qua Interface Comparable
          </p>
        </div>

        <button
          onClick={runComparison}
          disabled={simState === "running"}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-md shadow-emerald-500/10 transition-all disabled:opacity-50 select-none"
        >
          <Play className="w-4 h-4 text-white" />
          <span>CHẠY SO SÁNH compareTo()</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 items-stretch">
        {/* Circle Control & Canvas */}
        <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs font-bold text-indigo-400">Hình tròn (Circle A)</span>
              <span className="text-[10px] text-slate-500 font-mono">r = {circleRadius.toFixed(1)}</span>
            </div>
            
            <input
              type="range"
              min="1.5"
              max="4.5"
              step="0.5"
              value={circleRadius}
              onChange={(e) => {
                setCircleRadius(parseFloat(e.target.value));
                setSimState("idle");
                setComparisonResult(null);
                setLog("Thiết lập kích thước và nhấn 'Chạy so sánh compareTo()'.");
              }}
              className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-indigo-500 mb-6"
            />

            {/* Circle Drawing */}
            <div className="w-full h-36 flex items-center justify-center bg-slate-900/40 rounded-lg border border-slate-900 relative">
              <div
                className={`rounded-full transition-all duration-300 border-2 ${
                  comparisonResult === 1
                    ? "bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/30 scale-105"
                    : "bg-slate-800/40 border-slate-700"
                }`}
                style={{
                  width: `${circleRadius * 25}px`,
                  height: `${circleRadius * 25}px`
                }}
              ></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400">
                Diện tích: <span className="text-indigo-400 font-bold">{areaCircle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rectangle Control & Canvas */}
        <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs font-bold text-cyan-400">Hình chữ nhật (Rect B)</span>
              <span className="text-[10px] text-slate-500 font-mono">w={rectWidth.toFixed(1)}, h={rectHeight.toFixed(1)}</span>
            </div>
            
            <div className="space-y-2 mb-4">
              <input
                type="range"
                min="2.0"
                max="6.0"
                step="0.5"
                value={rectWidth}
                onChange={(e) => {
                  setRectWidth(parseFloat(e.target.value));
                  setSimState("idle");
                  setComparisonResult(null);
                  setLog("Thiết lập kích thước và nhấn 'Chạy so sánh compareTo()'.");
                }}
                className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-cyan-500"
              />
              <input
                type="range"
                min="1.5"
                max="4.0"
                step="0.5"
                value={rectHeight}
                onChange={(e) => {
                  setRectHeight(parseFloat(e.target.value));
                  setSimState("idle");
                  setComparisonResult(null);
                  setLog("Thiết lập kích thước và nhấn 'Chạy so sánh compareTo()'.");
                }}
                className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Rectangle Drawing */}
            <div className="w-full h-36 flex items-center justify-center bg-slate-900/40 rounded-lg border border-slate-900 relative">
              <div
                className={`transition-all duration-300 border-2 rounded ${
                  comparisonResult === -1
                    ? "bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-slate-800/40 border-slate-700"
                }`}
                style={{
                  width: `${rectWidth * 25}px`,
                  height: `${rectHeight * 25}px`
                }}
              ></div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400">
                Diện tích: <span className="text-cyan-400 font-bold">{areaRect}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code comparison & execution display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
        {/* Code representation */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
            Mã nguồn cài đặt Comparable
          </span>
          
          <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
{`public int compareTo(Shape x) {
    if (this.area() == x.area()) return 0;
    else if (this.area() > x.area()) return 1;
    else return -1;
}`}
          </pre>
        </div>

        {/* Console and logic flow */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
            Luồng logic chạy compareTo()
          </span>

          <div className="space-y-2 text-xs font-mono">
            <div className={`p-2.5 rounded border ${
              simState === "running" ? "bg-amber-950/40 border-amber-500 text-amber-300 animate-pulse" : "bg-slate-900 border-slate-850 text-slate-450"
            }`}>
              1. Khởi chạy compareTo(rectangle)
            </div>

            <div className={`p-2.5 rounded border ${
              simState === "done" && comparisonResult !== null
                ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                : "bg-slate-900 border-slate-850 text-slate-450"
            }`}>
              2. So sánh diện tích: {areaCircle} vs {areaRect}
            </div>

            <div className={`p-2.5 rounded border flex justify-between items-center ${
              simState === "done" && comparisonResult !== null
                ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold"
                : "bg-slate-900 border-slate-850 text-slate-450"
            }`}>
              <span>3. Kết quả trả về: {comparisonResult !== null ? comparisonResult : "Chờ..."}</span>
              {simState === "done" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>
          </div>
        </div>
      </div>

      {/* Simulator logs */}
      <div className={`p-4 rounded-xl border flex gap-3 items-center ${
        simState === "done"
          ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300"
          : "bg-slate-950 border-slate-850 text-slate-400"
      }`}>
        <Info className={`w-5 h-5 flex-shrink-0 ${simState === "done" ? "text-emerald-400" : "text-slate-500"}`} />
        <p className="text-xs leading-relaxed font-mono">{log}</p>
      </div>
    </div>
  );
}
