"use client";
import React, { useState } from "react";
import {
  Network,
  ArrowDownUp,
  ArrowLeftRight,
  Globe,
  Server,
  Zap,
  Cpu,
  Sparkles,
  CheckCircle2,
  Sliders,
  Radio,
  ArrowRight,
  HelpCircle
} from "lucide-react";

export default function DataCenterTrafficFlowVisualizer() {
  const [activeFlow, setActiveFlow] = useState("north-south"); // 'north-south' | 'east-west' | 'both'
  const [portCount, setPortCount] = useState(2); // K = 1, 2, 4, 8 ports

  const bandwidth = portCount * 10; // 10 Gbps per port

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Mô Phỏng Mạng Data Center
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục III.1 & III.2: Luồng Lưu Lượng North-South & East-West
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Phân biệt luồng vào/ra Internet (North-South) và giao tiếp nội bộ (East-West), cùng nguyên lý nhân băng thông gấp <strong className="text-stone-900">K lần</strong> nhờ Multi-port NIC nối ToR Switch.
          </p>
        </div>

        {/* Traffic Flow Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveFlow("north-south")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeFlow === "north-south"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <ArrowDownUp className="w-3.5 h-3.5" />
            North-South (Vào/Ra DC)
          </button>
          <button
            onClick={() => setActiveFlow("east-west")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeFlow === "east-west"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            East-West (Nội Bộ DC)
          </button>
        </div>
      </div>

      {/* Multi-Port NIC Interactive Sandbox */}
      <div className="mt-5 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
            Card mạng đa cổng (Multi-port NIC):
          </span>
          <div className="font-extrabold text-sm text-stone-900 mt-0.5">
            Mỗi server trang bị card mạng đa cổng kết nối song song vào ToR Switch
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {[1, 2, 4, 8].map((k) => (
              <button
                key={k}
                onClick={() => setPortCount(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black transition-all ${
                  portCount === k
                    ? "bg-indigo-600 text-white shadow-xs scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                K = {k} Cổng
              </button>
            ))}
          </div>

          <div className="p-2 px-3 rounded-xl bg-indigo-50 border border-indigo-200 text-right">
            <div className="text-[10px] text-stone-500 font-bold uppercase">Băng thông đạt được</div>
            <div className="text-base font-black text-indigo-600 font-mono">
              {bandwidth} Gbps ({portCount}x)
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Flow Visualization Diagram */}
      <div className="mt-5 p-6 rounded-3xl bg-stone-950 text-white border-2 border-stone-800 shadow-2xl relative overflow-hidden">
        {/* Top: Internet & Border Balancer */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-3 px-6 rounded-2xl bg-stone-900 border border-stone-700 flex items-center gap-2.5 shadow-md">
            <Globe className="w-5 h-5 text-sky-400" />
            <div>
              <div className="text-xs font-black text-stone-200">Mạng Internet Toàn Cầu</div>
              <div className="text-[10px] text-stone-400">Khách hàng & Thiết bị đầu cuối</div>
            </div>
          </div>

          {/* North-South Packet Pipe */}
          <div className="h-10 w-1 bg-stone-800 relative my-1">
            {activeFlow === "north-south" && (
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 absolute left-1/2 -translate-x-1/2 animate-bounce" />
            )}
          </div>

          {/* Central Load Balancer */}
          <div className="p-2.5 px-5 rounded-xl bg-indigo-950 border border-indigo-500/60 flex items-center gap-2">
            <Radio className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-indigo-200">
              Data Center Outer Load Balancer (Bộ Cân Bằng Tải Cổng Vào)
            </span>
          </div>
        </div>

        {/* Middle: 2 PoD Clusters */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connecting East-West Line Between Pods */}
          {activeFlow === "east-west" && (
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-linear-to-r from-emerald-500 via-teal-400 to-emerald-500 shadow-md shadow-emerald-400/50 z-20">
              <div className="w-3 h-3 rounded-full bg-emerald-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-ping" />
            </div>
          )}

          {/* POD 1 */}
          <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 relative">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800 mb-3">
              <span className="text-xs font-bold text-amber-400">PoD Cluster 1</span>
              <span className="text-[10px] text-stone-500">Pod Load Balancer</span>
            </div>

            {/* Top-of-Rack Switch */}
            <div className="p-2 rounded-xl bg-sky-950 border border-sky-500/50 mb-3 text-center">
              <div className="text-[11px] font-mono font-bold text-sky-200">Top-of-Rack (ToR) Switch</div>
              <div className="text-[9px] text-sky-400">Kết nối toàn bộ Server trong Rack</div>
            </div>

            {/* Servers */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-stone-800 text-[10px] font-mono text-stone-300 flex items-center justify-between">
                <span>Web Server 1A</span>
                <Cpu className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="p-2 rounded-lg bg-stone-800 text-[10px] font-mono text-stone-300 flex items-center justify-between">
                <span>App Server 1B</span>
                <Cpu className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* POD 2 */}
          <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 relative">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800 mb-3">
              <span className="text-xs font-bold text-emerald-400">PoD Cluster 2</span>
              <span className="text-[10px] text-stone-500">Pod Load Balancer</span>
            </div>

            {/* Top-of-Rack Switch */}
            <div className="p-2 rounded-xl bg-sky-950 border border-sky-500/50 mb-3 text-center">
              <div className="text-[11px] font-mono font-bold text-sky-200">Top-of-Rack (ToR) Switch</div>
              <div className="text-[9px] text-sky-400">Kết nối toàn bộ Server trong Rack</div>
            </div>

            {/* Servers */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-stone-800 text-[10px] font-mono text-stone-300 flex items-center justify-between">
                <span>Database Node 2A</span>
                <Server className="w-3 h-3 text-amber-400" />
              </div>
              <div className="p-2 rounded-lg bg-stone-800 text-[10px] font-mono text-stone-300 flex items-center justify-between">
                <span>Storage Shard 2B</span>
                <Server className="w-3 h-3 text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Flow Legend Strip */}
        <div className="mt-6 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
            <span className="text-stone-300">
              <strong>North-South:</strong> Lưu lượng Internet ↔ Balancer ↔ Pods/Racks (Vào và ra khỏi DC).
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-stone-300">
              <strong>East-West:</strong> Lưu lượng giữa các Rack/Pod với nhau (Giao tiếp nội bộ Data Center).
            </span>
          </div>
        </div>
      </div>

      {/* Exam Takeaway Note */}
      <div className="mt-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs space-y-1.5">
        <div className="font-extrabold text-amber-900 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-amber-600" />
          Trọng tâm đề thi:
        </div>
        <p className="text-stone-700 leading-relaxed">
          • Đường đi của lưu lượng North-South tuân thủ mô hình: <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-sm font-mono font-bold">Internet ➔ Balancer ➔ Balancer (mỗi pod) ➔ Racks</code>.<br />
          • Trong kiến trúc Cloud hiện đại, lưu lượng <strong>East-West</strong> (nội bộ giữa các máy chủ microservices, Big Data) chiếm tỷ trọng áp đảo lên tới hơn <strong>75%</strong> tổng lưu lượng Data Center.
        </p>
      </div>
    </div>
  );
}
