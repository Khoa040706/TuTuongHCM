"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  RotateCcw,
  Scan,
} from "lucide-react";

export default function NegativeCycleDetectionStudio() {
  const [graphType, setGraphType] = useState("cycle"); // "cycle" | "clean"
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null); // null | "detected" | "clean"

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(graphType === "cycle" ? "detected" : "clean");
    }, 400);
  };

  const handleReset = (type) => {
    setGraphType(type);
    setScanResult(null);
  };

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>Phần 7: Side Effect — Phát Hiện Chu Trình Âm (Pass Thứ |V|)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-amber-950 bg-clip-text text-transparent">
            Kỹ Thuật Quét Thêm Vòng Thứ |V| Để Bắt Chu Trình Âm
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá vũ khí phụ (bonus/side-effect) cực mạnh của Bellman-Ford: vừa tính khoảng cách ngắn nhất, vừa phát hiện chu trình âm có thể đến được từ nguồn.
          </p>
        </div>

        {/* Graph Mode Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => handleReset("cycle")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              graphType === "cycle"
                ? "bg-rose-500 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Đồ Thị Có Chu Trình Âm
          </button>
          <button
            onClick={() => handleReset("clean")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              graphType === "clean"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Đồ Thị Sạch (Không Chu Trình Âm)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Code Snippet & Scan Trigger (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Mã Giả Kiểm Tra Pass Thứ |V|</span>
            <span className="text-rose-950 font-bold">Lần Quét Thứ |V|</span>
          </div>

          {/* Dark macOS Terminal */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md">
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-400">detectNegativeCycle.pseudo</span>
            </div>
            <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`// Sau khi chạy xong V-1 vòng:
for each edge(u, v) in E:
  if D[v] > D[u] + w(u, v):
    report "Negative weight cycle exists in G!"`}
              </code>
            </pre>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white font-mono font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Scan className={`w-4 h-4 ${isScanning ? "animate-spin" : ""}`} />
              <span>{isScanning ? "Đang Quét Pass Thứ |V|..." : "Kích Hoạt Quét Pass Thứ |V| ➔"}</span>
            </button>

            <button
              onClick={() => handleReset(graphType)}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 transition-all shadow-sm"
              title="Đặt lại trạng thái"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Scan Results & Corollary Analysis (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Kết Quả Kiểm Định Trạng Thái</span>
            <span className="text-amber-950 font-bold">Trạng Thái Hệ Thống</span>
          </div>

          {scanResult === null ? (
            <div className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-xs font-mono text-slate-500 space-y-2 bg-slate-50">
              <Scan className="w-8 h-8 mx-auto text-slate-400 animate-pulse" />
              <p>Chưa thực hiện quét Pass thứ |V|. Hãy bấm nút &ldquo;Kích Hoạt Quét&rdquo; để kiểm tra!</p>
            </div>
          ) : scanResult === "detected" ? (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 space-y-2 text-xs font-sans text-rose-950 shadow-sm">
              <div className="flex items-center gap-2 text-rose-950 font-mono font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-600 animate-bounce" />
                <span>🚨 PHÁT HIỆN CHU TRÌNH ÂM (NEGATIVE CYCLE)!</span>
              </div>
              <p className="leading-relaxed">
                Ở vòng quét thứ |V|, cạnh <code>(1, 2, w=-3)</code> vẫn tiếp tục nới lỏng được khoảng cách ($D[2] = 1 &gt; D[1] + (-3) = 4 - 3 = 1$... lặp tiếp). Thuật toán lập tức báo lỗi và dừng an toàn!
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2 text-xs font-sans text-emerald-950 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-950 font-mono font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>✅ ĐỒ THỊ AN TOÀN — HỘI TỤ 100%!</span>
              </div>
              <p className="leading-relaxed">
                Sau $|V|-1$ vòng quét, ở pass thứ $|V|$ không có bất kỳ cạnh nào thỏa mãn điều kiện nới lỏng $D[v] &gt; D[u] + w$. Mảng $D$ đã đạt nghiệm tối ưu tuyệt đối!
              </p>
            </div>
          )}

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 space-y-1.5 text-xs font-sans text-amber-950 leading-relaxed shadow-sm">
            <span className="text-amber-950 font-bold block font-mono text-[11px]">
              📌 Lưu Ý Cốt Tử Về Tính Đến Được (Reachability):
            </span>
            <p>
              • Chu trình âm <strong>chỉ được phát hiện</strong> nếu nó có thể đi tới được (reachable) từ đỉnh nguồn <em>s</em>.
            </p>
            <p>
              • Nếu chu trình âm nằm ở một nhánh hoàn toàn biệt lập (unreachable từ <em>s</em>), Bellman-Ford xuất phát từ <em>s</em> sẽ giữ khoảng cách $\infty$ và bỏ qua nhánh đó.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
