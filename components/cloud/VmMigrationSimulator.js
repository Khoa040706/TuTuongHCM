"use client";
import React, { useState, useEffect } from "react";
import {
  Server,
  ArrowRight,
  Play,
  RotateCcw,
  Cpu,
  Database,
  Sparkles,
  Activity,
  CheckCircle2,
  Clock,
  Zap,
  HardDrive,
  Network
} from "lucide-react";

export default function VmMigrationSimulator() {
  const [phase, setPhase] = useState(0); // 0: idle, 1: pre-copy, 2: stop-and-copy, 3: post-copy, 4: complete
  const [ramProgress, setRamProgress] = useState(0); // 0 to 100
  const [dirtyPages, setDirtyPages] = useState(0); // count of dirty pages
  const [isRunning, setIsRunning] = useState(false);

  // Auto-run timeline animation
  useEffect(() => {
    let timer;
    if (isRunning) {
      if (phase === 1) {
        timer = setInterval(() => {
          setRamProgress((prev) => {
            if (prev >= 90) {
              clearInterval(timer);
              setDirtyPages(15);
              setPhase(2);
              return 90;
            }
            return prev + 15;
          });
        }, 400);
      } else if (phase === 2) {
        timer = setTimeout(() => {
          setRamProgress(100);
          setDirtyPages(0);
          setPhase(3);
        }, 1200);
      } else if (phase === 3) {
        timer = setTimeout(() => {
          setPhase(4);
          setIsRunning(false);
        }, 800);
      }
    }
    return () => {
      clearInterval(timer);
      clearTimeout(timer);
    };
  }, [isRunning, phase]);

  const handleStartAuto = () => {
    setPhase(1);
    setRamProgress(10);
    setDirtyPages(30);
    setIsRunning(true);
  };

  const handleStep = (targetPhase) => {
    setIsRunning(false);
    setPhase(targetPhase);
    if (targetPhase === 0) {
      setRamProgress(0);
      setDirtyPages(0);
    } else if (targetPhase === 1) {
      setRamProgress(65);
      setDirtyPages(22);
    } else if (targetPhase === 2) {
      setRamProgress(92);
      setDirtyPages(8);
    } else if (targetPhase === 3) {
      setRamProgress(100);
      setDirtyPages(0);
    } else if (targetPhase === 4) {
      setRamProgress(100);
      setDirtyPages(0);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setPhase(0);
    setRamProgress(0);
    setDirtyPages(0);
  };

  const PHASES_INFO = [
    {
      step: 0,
      title: "Trạng thái ban đầu (Sẵn sàng)",
      desc: "VM Đang vận hành bình thường trên Source Host (Máy chủ A). Toàn bộ bộ nhớ và tiến trình CPU do Host A đảm nhận.",
      vmState: "Hoạt động (Running on Host A)",
      downtime: "0 ms"
    },
    {
      step: 1,
      title: "Giai đoạn 1: Pre-copy Phase",
      desc: "Sao chép các khối bộ nhớ (Memory Pages) từ Host A sang Host B qua mạng tốc độ cao. VM vẫn tiếp tục chạy và phục vụ người dùng. Các trang nhớ bị thay đổi (dirty pages) tiếp tục được sao chép bổ sung.",
      vmState: "Đang phục vụ liên tục (Zero downtime)",
      downtime: "0 ms (Người dùng không cảm nhận)"
    },
    {
      step: 2,
      title: "Giai đoạn 2: Stop-and-copy Phase (Cực kỳ then chốt)",
      desc: "Tạm ngưng VM trong khoảnh khắc cực ngắn (vài trăm mili-giây). Trong tích tắc này, hệ thống truyền nốt các trang nhớ bẩn (dirty pages) cuối cùng và trạng thái thanh ghi CPU registers sang Host B.",
      vmState: "Tạm ngưng chớp nhoáng (Suspended)",
      downtime: "280 ms (< 0.5 giây)"
    },
    {
      step: 3,
      title: "Giai đoạn 3: Post-copy Phase",
      desc: "Host B gửi gói tin xác nhận hoàn tất, khôi phục lại trạng thái VM (Unsuspend) và định tuyến lại lưu lượng mạng (ARP update) về Host B. Host A giải phóng toàn bộ tài nguyên RAM.",
      vmState: "Khôi phục và kích hoạt trên Host B",
      downtime: "Đã phục hồi hoàn tất"
    },
    {
      step: 4,
      title: "Hoàn tất di chuyển (Live Migration Complete)",
      desc: "VM đã hoàn toàn chuyển quyền kiểm soát sang Host B mà không làm gián đoạn phiên người dùng. Dữ liệu đĩa ảo vẫn giữ nguyên trên DC Storage tập trung.",
      vmState: "Hoạt động ổn định (Running on Host B)",
      downtime: "Tổng thời gian ngừng: 0.28s"
    }
  ];

  const currentInfo = PHASES_INFO[phase];

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Mô Phỏng Tương Tác 3 Giai Đoạn
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục VI.5: Di Chuyển Máy Ảo Trực Tiếp (Live VM Migration)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Quan sát trực tiếp cơ chế <strong>Pre-copy ➔ Stop-and-copy ➔ Post-copy</strong> giúp di chuyển máy ảo sang máy chủ mới mà thời gian gián đoạn (downtime) chưa tới 0.5 giây!
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleStartAuto}
            disabled={isRunning || phase === 4}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Tự Động Chạy (Auto)
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-600 text-xs font-bold transition-all cursor-pointer"
            title="Đặt lại mô phỏng"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stepper Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
        {[
          { step: 1, label: "1. Pre-copy", sub: "Copy RAM khi VM chạy" },
          { step: 2, label: "2. Stop-and-copy", sub: "Dừng tạm & copy dirty" },
          { step: 3, label: "3. Post-copy", sub: "Khôi phục trên Host mới" },
          { step: 4, label: "Hoàn tất", sub: "Chuyển giao 100%" }
        ].map((item) => (
          <button
            key={item.step}
            onClick={() => handleStep(item.step)}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              phase === item.step
                ? "bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-200"
                : phase > item.step
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-xs">{item.label}</span>
              {phase >= item.step && (
                <CheckCircle2 className={`w-3.5 h-3.5 ${phase === item.step ? "text-white" : "text-emerald-600"}`} />
              )}
            </div>
            <p className={`text-[11px] mt-1 ${phase === item.step ? "text-emerald-100" : "text-stone-500"}`}>
              {item.sub}
            </p>
          </button>
        ))}
      </div>

      {/* Visual Simulation Canvas */}
      <div className="bg-stone-900 text-white rounded-3xl p-5 sm:p-7 border border-stone-800 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Source Host (A) */}
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              phase < 3
                ? "border-emerald-500/80 bg-stone-800/90 ring-1 ring-emerald-400/40"
                : "border-stone-700 bg-stone-800/40 opacity-70"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Server className="w-4 h-4 text-emerald-400" />
                Source Host (Máy chủ A)
              </span>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  phase < 3 ? "bg-emerald-500/20 text-emerald-300" : "bg-stone-700 text-stone-400"
                }`}
              >
                {phase < 2 ? "VM RUNNING" : phase === 2 ? "VM SUSPENDED" : "IDLE"}
              </span>
            </div>

            {/* Virtual Machine Box on Host A */}
            <div
              className={`p-3.5 rounded-xl border mb-3 transition-all ${
                phase < 3
                  ? phase === 2
                    ? "border-amber-400 bg-amber-950/40"
                    : "border-emerald-500 bg-emerald-950/30"
                  : "border-dashed border-stone-700 bg-stone-900/30"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  App VM #104
                </span>
                <span className="text-[11px] text-stone-300">vCPU: 4 | RAM: 16GB</span>
              </div>
              <div className="mt-2 text-[11px] text-stone-400">
                {phase === 0 && "Máy ảo đang tiếp nhận 100% request người dùng."}
                {phase === 1 && "Đang chạy + gửi memory pages qua mạng..."}
                {phase === 2 && "Tạm ngưng 280ms để copy nốt 15 dirty pages!"}
                {phase >= 3 && "Đã giải phóng tài nguyên CPU & RAM."}
              </div>
            </div>

            {/* RAM Block Indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-bold text-stone-300">
                <span>Bộ nhớ RAM Host A:</span>
                <span className="text-emerald-400">{phase >= 3 ? "0 GB (Đã xả)" : "16 GB (Đầy đủ)"}</span>
              </div>
              <div className="grid grid-cols-8 gap-1 p-2 bg-stone-900 rounded-lg border border-stone-800">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-3.5 rounded-xs transition-all duration-300 ${
                      phase >= 3
                        ? "bg-stone-800"
                        : phase === 2 && idx >= 12
                        ? "bg-rose-500 animate-pulse"
                        : phase === 1 && idx >= 10
                        ? "bg-amber-400 animate-pulse"
                        : "bg-emerald-500"
                    }`}
                    title={`RAM Block #${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 text-[10px] text-stone-400 pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Sạch
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Đang chép
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Dirty Page
                </span>
              </div>
            </div>
          </div>

          {/* Network Transfer Channel */}
          <div className="flex flex-col items-center justify-center p-3 text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-sky-300 uppercase tracking-wider">
              <Network className="w-4 h-4 text-sky-400" />
              100Gbps Migration Network
            </div>

            {/* Data flow animated beam */}
            <div className="w-full relative py-2">
              <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                <div
                  className="h-full bg-linear-to-r from-emerald-400 via-sky-400 to-indigo-500 transition-all duration-500"
                  style={{ width: `${ramProgress}%` }}
                />
              </div>
              {phase >= 1 && phase <= 3 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-950 border border-sky-400/50 text-[10px] font-extrabold text-sky-300 shadow-lg">
                  <Zap className="w-3 h-3 text-amber-400 animate-bounce" />
                  <span>{phase === 2 ? "Copying Dirty Pages" : "Streaming RAM"}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between w-full text-xs text-stone-300 px-2">
              <span>Tiến độ RAM:</span>
              <span className="font-extrabold text-emerald-400">{ramProgress}%</span>
            </div>

            {/* Downtime Badge */}
            <div className="w-full p-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-left">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" /> Thời gian ngưng trệ (Downtime):
                </span>
                <span className="font-extrabold text-amber-400">{currentInfo.downtime}</span>
              </div>
            </div>
          </div>

          {/* Destination Host (B) */}
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              phase >= 3
                ? "border-emerald-500/80 bg-stone-800/90 ring-1 ring-emerald-400/40"
                : phase > 0
                ? "border-sky-500/60 bg-stone-800/60"
                : "border-stone-700 bg-stone-800/30 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Server className="w-4 h-4 text-sky-400" />
                Destination Host (Máy chủ B)
              </span>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  phase >= 3
                    ? "bg-emerald-500/20 text-emerald-300"
                    : phase > 0
                    ? "bg-sky-500/20 text-sky-300"
                    : "bg-stone-700 text-stone-400"
                }`}
              >
                {phase === 0 ? "STANDBY" : phase < 3 ? "RECEIVING RAM" : "VM ACTIVE"}
              </span>
            </div>

            {/* Virtual Machine Box on Host B */}
            <div
              className={`p-3.5 rounded-xl border mb-3 transition-all ${
                phase >= 3
                  ? "border-emerald-500 bg-emerald-950/30"
                  : phase > 0
                  ? "border-dashed border-sky-400/60 bg-sky-950/20"
                  : "border-dashed border-stone-700 bg-stone-900/20"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  App VM #104
                </span>
                <span className="text-[11px] text-stone-300">vCPU: 4 | RAM: 16GB</span>
              </div>
              <div className="mt-2 text-[11px] text-stone-400">
                {phase === 0 && "Máy chủ B đang ở chế độ chờ (Standby sẵn sàng)."}
                {phase === 1 && "Đang nạp các khối RAM từ Host A..."}
                {phase === 2 && "Đã nhận thanh ghi CPU + Dirty pages cuối."}
                {phase >= 3 && "Đã kích hoạt VM! Nhận 100% traffic mạng mới."}
              </div>
            </div>

            {/* RAM Block Indicator for Host B */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-bold text-stone-300">
                <span>Bộ nhớ RAM Host B:</span>
                <span className="text-sky-400">{(ramProgress * 0.16).toFixed(1)} / 16 GB</span>
              </div>
              <div className="grid grid-cols-8 gap-1 p-2 bg-stone-900 rounded-lg border border-stone-800">
                {Array.from({ length: 16 }).map((_, idx) => {
                  const isFilled = idx < Math.floor(ramProgress / 6.25);
                  return (
                    <div
                      key={idx}
                      className={`h-3.5 rounded-xs transition-all duration-300 ${
                        isFilled
                          ? phase >= 3
                            ? "bg-emerald-500"
                            : "bg-sky-400"
                          : "bg-stone-800"
                      }`}
                      title={`Host B RAM Block #${idx + 1}`}
                    />
                  );
                })}
              </div>
              <div className="text-[10px] text-stone-400 pt-1 text-right">
                {phase >= 3 ? "✓ Đồng bộ 100% không mất gói tin" : "Đang tái cấu trúc RAM..."}
              </div>
            </div>
          </div>
        </div>

        {/* Central Data Center Shared Storage Bar */}
        <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-stone-950/60 p-4 rounded-2xl">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-indigo-300 uppercase tracking-wider">
                Trung tâm Lưu trữ Tập trung (Shared DC Storage - SAN/NAS)
              </div>
              <div className="text-[11px] text-stone-400">
                Đĩa ảo Virtual Disk (<code className="text-amber-300">disk.vmdk</code>) nằm cố định trên SAN/NAS. <strong>Chỉ RAM và CPU Registers được truyền qua mạng!</strong>
              </div>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold whitespace-nowrap">
            Zero Storage Move
          </div>
        </div>
      </div>

      {/* Explanation Banner */}
      <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-stone-900 text-amber-400 mt-0.5 shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black text-stone-900 uppercase tracking-wider">
                {currentInfo.title}
              </span>
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                Trạng thái VM: {currentInfo.vmState}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              {currentInfo.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Academic Note Card */}
      <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs leading-relaxed">
        <strong>💡 Trọng tâm thi cử:</strong> Quá trình Live Migration gồm 3 giai đoạn:{" "}
        <strong>(1) Pre-copy</strong> (vừa chạy vừa chép RAM), <strong>(2) Stop-and-copy</strong> (ngưng chớp nhoáng truyền dirty pages & CPU registers),{" "}
        <strong>(3) Post-copy</strong> (khôi phục VM trên máy mới). VM là một <em>Digital Object</em> (đối tượng kỹ thuật số được quản lý 100% bằng phần mềm) nên có thể clone, đóng gói và di chuyển dễ dàng mà không phụ thuộc vào một phần cứng cố định.
      </div>
    </div>
  );
}
