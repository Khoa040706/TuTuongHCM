"use client";
import React, { useState, useEffect } from "react";
import { Server, Database, Play, RotateCcw, ArrowRight, ShieldCheck, Zap, Activity, CheckCircle2, HardDrive, Layers } from "lucide-react";

export default function VmotionZeroDowntimeSimulator() {
  const [vmLocation, setVmLocation] = useState("hostA"); // 'hostA' | 'hostB'
  const [isMigrating, setIsMigrating] = useState(false);
  const [pingCount, setPingCount] = useState(128);
  const [uptimeSeconds, setUptimeSeconds] = useState(4250);
  const [statusText, setStatusText] = useState("Máy ảo Web Server đang chạy ổn định trên Host A. Không có gián đoạn.");
  const [archMode, setArchMode] = useState("type1"); // 'type1' | 'type2'

  // Increment uptime and ping counter smoothly to show zero downtime
  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
      setPingCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMigrate = () => {
    setIsMigrating(true);
    setStatusText("Bắt đầu vMotion: Sao chép trang bộ nhớ RAM máy ảo từ Host A sang Host B qua mạng quang...");

    setTimeout(() => {
      setStatusText("Chuyển quyền điều khiển CPU sang Host B... Thời gian dừng chuyển mạch: 0.00 giây (Zero-Downtime)!");
      setVmLocation(prev => prev === "hostA" ? "hostB" : "hostA");
      
      setTimeout(() => {
        setStatusText("vMotion HOÀN TẤT: Máy ảo hiện đang chạy trên Host B an toàn! Ping 100% không rớt gói tin.");
        setIsMigrating(false);
      }, 700);
    }, 900);
  };

  const handleReset = () => {
    setVmLocation("hostA");
    setIsMigrating(false);
    setStatusText("Đã đưa máy ảo về Host A ban đầu.");
  };

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header with Architectural Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600">
              Signature Visualizer • Mục V
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Mô Phỏng VMware ESXi: Di Chuyển Máy Ảo Sống (vMotion Zero-Downtime)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Trực quan hóa cách VMware chuyển máy ảo đang phục vụ khách hàng giữa 2 máy chủ vật lý mà không làm rớt mạng.
          </p>
        </div>

        {/* Hypervisor Type Toggle */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setArchMode("type1")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              archMode === "type1" ? "bg-emerald-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Type 1 Bare-Metal (ESXi)
          </button>
          <button
            type="button"
            onClick={() => setArchMode("type2")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              archMode === "type2" ? "bg-stone-800 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Type 2 Hosted (Workstation)
          </button>
        </div>
      </div>

      {/* Architectural Stack Diagram (Type 1 vs Type 2) */}
      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6 text-xs">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 block mb-2">
          Cấu trúc ngăn xếp kiến trúc: {archMode === "type1" ? "Type 1 Bare-Metal (Cài trực tiếp lên phần cứng)" : "Type 2 Hosted (Chạy trên Hệ điều hành nền)"}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center font-bold">
          <div className="p-2.5 rounded-xl bg-stone-800 text-white">
            1. Phần Cứng Vật Lý (CPU / RAM / NIC)
          </div>
          <div className={`p-2.5 rounded-xl ${
            archMode === "type1" ? "bg-emerald-600 text-white shadow-xs" : "bg-amber-600 text-white"
          }`}>
            {archMode === "type1" ? "2. VMware ESXi Hypervisor" : "2. Host OS (Windows / Linux)"}
          </div>
          <div className={`p-2.5 rounded-xl ${
            archMode === "type1" ? "bg-sky-600 text-white" : "bg-purple-600 text-white"
          }`}>
            {archMode === "type1" ? "3. Virtual Machines (VMs)" : "3. Type 2 Hypervisor"}
          </div>
          <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
            {archMode === "type1" ? "4. Ứng Dụng Khách (Guest Apps)" : "4. Guest VMs & Apps"}
          </div>
        </div>
        <p className="text-[11px] text-stone-500 mt-2 font-medium italic">
          {archMode === "type1"
            ? "✓ Ưu điểm Type 1: Không có lớp Host OS trung gian, loại bỏ độ trễ, đạt hiệu năng gần tương đương máy vật lý."
            : "⚠️ Nhược điểm Type 2: Phụ thuộc vào độ ổn định của Host OS; nếu Windows bị màn hình xanh, toàn bộ VM bị sập theo."}
        </p>
      </div>

      {/* Live vMotion Cluster Simulation Canvas */}
      <div className="relative p-6 rounded-2xl bg-stone-900 text-white overflow-hidden mb-6 shadow-inner">
        {/* Background Network Grid pattern */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              VMware vCenter Cluster Monitor
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Uptime: <strong className="text-emerald-400">{uptimeSeconds}s</strong></span>
            <span>Ping ICMP: <strong className="text-emerald-400">Reply 64 bytes (0% packet loss)</strong></span>
          </div>
        </div>

        {/* 2 Physical Hosts side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Host A */}
          <div className={`p-5 rounded-2xl border transition-all ${
            vmLocation === "hostA" ? "bg-stone-800/90 border-emerald-500 ring-2 ring-emerald-500/30" : "bg-stone-800/40 border-stone-700 opacity-60"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>ESXi Host A (Dell PowerEdge)</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                vmLocation === "hostA" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "bg-stone-700 text-stone-400"
              }`}>
                {vmLocation === "hostA" ? "CPU: 75% | RAM: 64GB" : "CPU: 12% (Idle)"}
              </span>
            </div>

            {/* VM Inside Host A */}
            {vmLocation === "hostA" && (
              <div className="p-4 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 text-white shadow-md animate-in zoom-in-95 duration-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                    <span>VM-01: Web Ecommerce (Live)</span>
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">Port 443 HTTPS</span>
                </div>
                <p className="text-[11px] text-white/80">Đang phục vụ 2.500 khách hàng trực tuyến...</p>
              </div>
            )}
          </div>

          {/* Host B */}
          <div className={`p-5 rounded-2xl border transition-all ${
            vmLocation === "hostB" ? "bg-stone-800/90 border-emerald-500 ring-2 ring-emerald-500/30" : "bg-stone-800/40 border-stone-700 opacity-60"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>ESXi Host B (HPE ProLiant)</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                vmLocation === "hostB" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "bg-stone-700 text-stone-400"
              }`}>
                {vmLocation === "hostB" ? "CPU: 75% | RAM: 64GB" : "CPU: 10% (Idle)"}
              </span>
            </div>

            {/* VM Inside Host B */}
            {vmLocation === "hostB" && (
              <div className="p-4 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 text-white shadow-md animate-in zoom-in-95 duration-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                    <span>VM-01: Web Ecommerce (Live)</span>
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">Port 443 HTTPS</span>
                </div>
                <p className="text-[11px] text-white/80">Đang phục vụ 2.500 khách hàng trực tuyến...</p>
              </div>
            )}
          </div>
        </div>

        {/* Shared SAN Storage underneath */}
        <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-amber-400" />
            <span className="font-mono">Shared Storage SAN (Fiber Channel / iSCSI)</span>
          </div>
          <span className="text-[11px] italic text-stone-500">
            *Điều kiện tiên quyết: Cả 2 Host phải nhìn thấy cùng một ổ đĩa SAN để di chuyển không copy file ảo
          </span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={isMigrating}
            onClick={handleMigrate}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Kích Hoạt vMotion (Chuyển Sang {vmLocation === "hostA" ? "Host B" : "Host A"})</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại</span>
          </button>
        </div>

        <span className="text-xs text-stone-500 font-medium">
          Thời gian chuyển đổi: <strong className="text-stone-800 font-mono font-bold">~0.8 giây</strong>
        </span>
      </div>

      {/* Live Log */}
      <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        <span className="font-medium">{statusText}</span>
      </div>

      {/* Exam Keypoints */}
      <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs leading-relaxed text-emerald-950">
        <strong>💡 Điểm Chốt Thi Cử Về VMware ESXi & vMotion:</strong>
        <ul className="mt-1 space-y-1 list-disc list-inside">
          <li><strong>ESXi là Type 1 Hypervisor:</strong> Cài trực tiếp trên phần cứng máy chủ (Bare-Metal), không cần HĐH chủ.</li>
          <li><strong>vMotion:</strong> Di chuyển máy ảo VM đang chạy trực tiếp giữa các máy chủ ESXi mà không làm gián đoạn dịch vụ (Zero-Downtime).</li>
          <li><strong>DRS (Distributed Resource Scheduler):</strong> Tự động điều phối và cân bằng tải tài nguyên CPU/RAM trên toàn cụm cluster.</li>
          <li><strong>vCenter Server:</strong> Ứng dụng quản trị tập trung toàn bộ máy chủ ESXi, máy ảo VM, hệ thống lưu trữ và mạng.</li>
        </ul>
      </div>
    </div>
  );
}
