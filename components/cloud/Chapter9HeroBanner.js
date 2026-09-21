"use client";
import React, { useState } from "react";
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Box, 
  Activity, 
  Compass,
  Leaf,
  AlertTriangle,
  RefreshCw,
  Gauge,
  TrendingDown,
  TrendingUp,
  Sliders
} from "lucide-react";

const ARCH_TIERS = {
  hardware: {
    title: "1. Phần Cứng Vật Lý (Physical Hardware)",
    icon: Server,
    badge: "Tầng Vật Lý",
    color: "bg-stone-800 text-white",
    elements: [
      "Multi-core CPUs (Intel Xeon / AMD EPYC)",
      "Physical RAM (ECC DDR4 / DDR5)",
      "Shared SAN Storage (Fibre Channel / iSCSI)",
      "10GbE / 25GbE Redundant Network NICs"
    ],
    desc: "Nguồn tài nguyên thô tập trung; được chia sẻ và cấp phát linh hoạt cho các máy ảo thông qua lớp phần mềm ảo hóa.",
    keyMetric: "Mức sử dụng tăng từ 15% lên 75% nhờ Server Consolidation."
  },
  hypervisor: {
    title: "2. Phần Mềm Giám Sát (Hypervisor Layer)",
    icon: Layers,
    badge: "Bộ Não Điều Phối",
    color: "bg-emerald-700 text-white",
    elements: [
      "VMware ESXi (Type 1 Bare-Metal)",
      "Microsoft Hyper-V (Microkernelized)",
      "vMotion Live Migration Engine (Zero-Downtime)",
      "Distributed Resource Scheduler (DRS Cluster)"
    ],
    desc: "Cài trực tiếp lên phần cứng (Bare-Metal), loại bỏ độ trễ của HĐH chủ, quản lý và cấp phát vCPU/vRAM cô lập cho từng VM.",
    keyMetric: "Độ trễ < 1ms, độ tin cậy chuẩn doanh nghiệp viễn thông 99.999%."
  },
  vms: {
    title: "3. Máy Ảo & Ứng Dụng Khách (Virtual Machines & Guest OS)",
    icon: Cpu,
    badge: "Tầng Thực Thi",
    color: "bg-sky-700 text-white",
    elements: [
      "Windows Server / Linux VMs",
      "Microsoft VDI Virtual Desktops",
      "Microsoft App-V Sandboxed Containers",
      "Isolated Virtual Network Adapters"
    ],
    desc: "Mỗi máy ảo là một môi trường điện toán độc lập hoàn toàn, sở hữu BIOS ảo, hệ điều hành và ứng dụng riêng biệt.",
    keyMetric: "Có thể tạo mới, nhân bản (Clone) hoặc Snapshot chỉ trong vài giây."
  }
};

const PIPELINE_STEPS = [
  {
    step: "01",
    label: "Ảo Hóa Cơ Bản",
    subtitle: "Server, Desktop & Storage",
    desc: "Tách rời tài nguyên logic khỏi phần cứng vật lý, tạo nền tảng cho điện toán đám mây hiện đại.",
    tag: "Mục I"
  },
  {
    step: "02",
    label: "Bộ Nhớ Ảo & Swapping",
    subtitle: "Memory Pages & Pagefile.sys",
    desc: "Bù đắp dung lượng RAM thiếu hụt bằng cách hoán đổi trang nhớ ra ổ đĩa SSD; quản trị hiện tượng Thrashing.",
    tag: "Mục II"
  },
  {
    step: "03",
    label: "Ảo Hóa Máy Chủ Doanh Nghiệp",
    subtitle: "Hyper-V & VMware ESXi (Type 1)",
    desc: "Gom cụm máy chủ vật lý, di chuyển máy ảo không gián đoạn vMotion và điện toán xanh tiết kiệm 80% điện.",
    tag: "Mục III - V"
  },
  {
    step: "04",
    label: "Ảo Hóa Desktop & Mạng VPN",
    subtitle: "VDI, App-V & 4 Giao Thức Tunnel",
    desc: "Làm việc từ xa an toàn qua máy ảo desktop trung tâm, chống xung đột phần mềm và mã hóa đường truyền.",
    tag: "Mục VI & VII"
  }
];

const EXAM_WEIGHTS = [
  { subject: "VMware ESXi, vMotion & Type 1 Hypervisor (Mục V)", weight: "30%", barColor: "from-emerald-500 to-teal-600" },
  { subject: "Virtual Memory, Paging & Swapping (Mục II)", weight: "25%", barColor: "from-sky-500 to-blue-600" },
  { subject: "Desktop & App Virtualization: VDI vs App-V (Mục VI)", weight: "25%", barColor: "from-purple-500 to-pink-600" },
  { subject: "VPN on Windows & Green Computing (Mục III & VII)", weight: "20%", barColor: "from-amber-500 to-orange-600" }
];

const PITFALL_CARDS = [
  {
    title: "1. Type 1 Bare-Metal vs Type 2 Hosted",
    badge: "Mục V (ESXi)",
    color: "border-emerald-200 bg-emerald-50/60 text-emerald-950",
    trap: "Đề thi hay gài VMware ESXi là Type 2 chạy trên Windows/Linux.",
    truth: "VMware ESXi và Microsoft Hyper-V là Type 1 Bare-Metal (cài thẳng lên phần cứng), cho hiệu năng vượt trội và độ trễ < 1ms."
  },
  {
    title: "2. Paging (Phân Trang) vs Swapping (Tráo Đổi)",
    badge: "Mục II (Virtual Memory)",
    color: "border-sky-200 bg-sky-50/60 text-sky-950",
    trap: "Nhầm lẫn giữa hành động chia nhỏ bộ nhớ và hành động hoán đổi ra đĩa.",
    truth: "Paging là kỹ thuật chia bộ nhớ thành các trang cố định (4KB); Swapping là quá trình di chuyển trang nhớ qua lại giữa RAM và Pagefile.sys."
  },
  {
    title: "3. Microsoft VDI vs Microsoft App-V",
    badge: "Mục VI (Desktop Virt)",
    color: "border-purple-200 bg-purple-50/60 text-purple-950",
    trap: "Nhầm lẫn nơi thực thi mã lệnh của ứng dụng và hệ điều hành.",
    truth: "VDI chạy 100% hệ điều hành trên Data Center rồi stream hình ảnh về; App-V đóng gói ứng dụng Sandbox chạy trực tiếp trên CPU/RAM máy trạm."
  },
  {
    title: "4. SSTP Port 443 Xuyên Tường Lửa",
    badge: "Mục VII (Windows VPN)",
    color: "border-amber-200 bg-amber-50/60 text-amber-950",
    trap: "Cho rằng mọi giao thức VPN đều bị chặn bởi tường lửa văn phòng.",
    truth: "SSTP sử dụng kênh mã hóa SSL/TLS qua cổng TCP 443 (HTTPS chuẩn), cho phép xuyên qua hầu hết mọi tường lửa và Web Proxy."
  }
];

export default function Chapter9HeroBanner() {
  const [activeView, setActiveView] = useState("topology"); // 'topology' | 'consolidation' | 'pipeline' | 'exam'
  const [selectedTier, setSelectedTier] = useState("hypervisor");
  const [consolidationMode, setConsolidationMode] = useState("after"); // 'before' | 'after'

  const scrollToSection = (subId) => {
    const el = document.getElementById(`content-${subId}`) || document.getElementById(subId) || document.getElementById(`part-${subId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentTier = ARCH_TIERS[selectedTier];

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden border border-stone-200/90 bg-linear-to-br from-white via-[#faf9f6] to-[#f0fdf4] shadow-xl font-sans text-stone-850">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-emerald-500/15 via-teal-400/10 to-transparent blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-sky-400/10 via-emerald-400/5 to-transparent blur-2xl rounded-full pointer-events-none -ml-20 -mb-20" />

      {/* Top Banner Header */}
      <div className="relative p-6 sm:p-8 border-b border-stone-200/70">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-stone-900 text-emerald-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
            <span>Mục ★ Overview Toàn Bộ Chương 9</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/80">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>Virtualization & Green Computing</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 tracking-tight leading-snug">
          Chương 9: Virtualization (Công Nghệ Ảo Hóa & Điện Toán Xanh)
        </h2>
        <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-3xl leading-relaxed font-medium">
          Trung tâm điều phối tri thức toàn chương: Khám phá kiến trúc trừu tượng hóa đa tầng, thước đo hiệu quả hợp nhất máy chủ Green IT, lộ trình 4 bước và radar phân bổ điểm thi trắc nghiệm.
        </p>

        {/* 4 Quick Stats Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-stone-200/60">
          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Quy mô Giáo trình</span>
            <div className="text-lg sm:text-xl font-black text-emerald-700 mt-0.5">38 Tiểu mục</div>
            <span className="text-[11px] text-stone-500 font-medium">Bảo toàn 100% chuẩn thi</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Công nghệ Ảo hóa</span>
            <div className="text-lg sm:text-xl font-black text-sky-700 mt-0.5">8 Công nghệ</div>
            <span className="text-[11px] text-stone-500 font-medium">ESXi, Hyper-V, VDI, App-V...</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Bộ Mô phỏng Đỉnh</span>
            <div className="text-lg sm:text-xl font-black text-amber-700 mt-0.5">4 Visualizers</div>
            <span className="text-[11px] text-stone-500 font-medium">Swapping, vMotion, VDI, VPN</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Hệ Thống Ôn Tập</span>
            <div className="text-lg sm:text-xl font-black text-purple-700 mt-0.5">12 Cards SM-2</div>
            <span className="text-[11px] text-stone-500 font-medium">16 Thuật ngữ đối chiếu</span>
          </div>
        </div>

        {/* 4-Perspective View Tabs & Action Shortcuts */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveView("topology")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === "topology"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>1. Kiến Trúc Ảo Hóa</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView("consolidation")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === "consolidation"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-500" />
              <span>2. Thước Đo Green IT</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView("pipeline")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === "pipeline"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>3. Lộ Trình 4 Bước</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView("exam")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === "exam"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>4. Radar & Bẫy Đề Thi</span>
            </button>
          </div>

          {/* Quick Action Shortcuts */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToSection("cloud-ch9-s2-3-components")}
              className="text-[11px] font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-xl border border-sky-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Zap className="w-3 h-3 text-sky-600" />
              <span>⚡ Thử Swapping RAM</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("cloud-ch9-s5-3-features")}
              className="text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Server className="w-3 h-3 text-emerald-600" />
              <span>🔄 Trải nghiệm vMotion</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("cloud-ch9-s7-6-chapter-summary")}
              className="text-[11px] font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-xl border border-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Sliders className="w-3 h-3 text-stone-600" />
              <span>📊 Ma trận 8 Công nghệ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Viewport Content */}
      <div className="relative p-6 sm:p-8">
        {/* VIEW 1: MULTI-TIER ARCHITECTURE */}
        {activeView === "topology" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                3 Tầng Kiến Trúc Trừu Tượng Hóa Ảo Hóa:
              </span>
              <span className="text-[11px] text-stone-500 italic">
                Bấm vào từng tầng để kiểm tra luồng phân bổ tài nguyên vCPU/vRAM
              </span>
            </div>

            {/* 3 Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(ARCH_TIERS).map(([key, item]) => {
                const Icon = item.icon;
                const isSelected = selectedTier === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedTier(key)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-400/30 scale-[1.02]"
                        : "bg-white/80 border-stone-200 hover:bg-white text-stone-700 hover:border-stone-300 shadow-2xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                          isSelected ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-100 text-stone-800"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                          key === "hypervisor" ? "bg-emerald-100 text-emerald-800" : "bg-stone-100 text-stone-700"
                        }`}>
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-sm text-stone-900 leading-snug mb-1">{item.title}</h4>
                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-emerald-600 flex items-center justify-between">
                      <span>{isSelected ? "Đang chọn xem" : "Bấm để kiểm tra"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Tier Details Box */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h4 className="font-extrabold text-sm text-stone-900">{currentTier.title}</h4>
                </div>
                <span className="text-xs font-semibold text-emerald-700">{currentTier.keyMetric}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Các thành phần công nghệ tiêu biểu:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentTier.elements.map((el, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{el}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: CONSOLIDATION & GREEN IT GAUGE */}
        {activeView === "consolidation" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header & Mode Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
                  Thước Đo Hiệu Quả Hợp Nhất Máy Chủ (Server Consolidation)
                </span>
                <p className="text-xs text-stone-600 mt-0.5">
                  Gạt công tắc để quan sát sự thay đổi vượt bậc về tài nguyên và bảo vệ môi trường
                </p>
              </div>

              <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200/80">
                <button
                  type="button"
                  onClick={() => setConsolidationMode("before")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    consolidationMode === "before"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Trước Ảo Hóa (Truyền Thống)
                </button>
                <button
                  type="button"
                  onClick={() => setConsolidationMode("after")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    consolidationMode === "after"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Sau Ảo Hóa (Hyper-V / ESXi)
                </button>
              </div>
            </div>

            {/* 4 Metric Cards based on mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-4 rounded-2xl border transition-all ${
                consolidationMode === "before"
                  ? "bg-amber-50/60 border-amber-200 text-amber-950"
                  : "bg-emerald-50/60 border-emerald-200 text-emerald-950"
              }`}>
                <div className="flex items-center justify-between text-xs font-bold mb-1 opacity-75">
                  <span>Số Lượng Server Vật Lý</span>
                  <Server className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black">
                  {consolidationMode === "before" ? "10 Máy Chủ" : "2 Máy Chủ Cụm"}
                </div>
                <div className="text-[11px] mt-1 font-medium flex items-center gap-1">
                  {consolidationMode === "before" ? (
                    <span>⚠️ 1 Server chỉ chạy 1 ứng dụng (Sprawl)</span>
                  ) : (
                    <span className="text-emerald-700 font-bold">✨ Giảm 80% thiết bị vật lý</span>
                  )}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                consolidationMode === "before"
                  ? "bg-rose-50/60 border-rose-200 text-rose-950"
                  : "bg-sky-50/60 border-sky-200 text-sky-950"
              }`}>
                <div className="flex items-center justify-between text-xs font-bold mb-1 opacity-75">
                  <span>Tỷ Lệ Tải CPU Trung Bình</span>
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black">
                  {consolidationMode === "before" ? "10% - 15%" : "75% - 80%"}
                </div>
                <div className="text-[11px] mt-1 font-medium flex items-center gap-1">
                  {consolidationMode === "before" ? (
                    <span>📉 Lãng phí 85% năng lực vi xử lý</span>
                  ) : (
                    <span className="text-sky-700 font-bold">🚀 Khai thác tối đa vi xử lý đa nhân</span>
                  )}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                consolidationMode === "before"
                  ? "bg-stone-100 border-stone-200 text-stone-850"
                  : "bg-emerald-50/60 border-emerald-200 text-emerald-950"
              }`}>
                <div className="flex items-center justify-between text-xs font-bold mb-1 opacity-75">
                  <span>Công Suất Tiêu Thụ Điện</span>
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black">
                  {consolidationMode === "before" ? "12.000 Watts" : "2.400 Watts"}
                </div>
                <div className="text-[11px] mt-1 font-medium flex items-center gap-1">
                  {consolidationMode === "before" ? (
                    <span>🔥 Tốn kém chi phí điều hòa làm mát</span>
                  ) : (
                    <span className="text-emerald-700 font-bold">🌱 Cắt giảm 80% tiền điện</span>
                  )}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                consolidationMode === "before"
                  ? "bg-stone-100 border-stone-200 text-stone-850"
                  : "bg-emerald-50/60 border-emerald-200 text-emerald-950"
              }`}>
                <div className="flex items-center justify-between text-xs font-bold mb-1 opacity-75">
                  <span>Chỉ Số Xanh PUE & Khí Thải</span>
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black">
                  {consolidationMode === "before" ? "PUE 2.2 (Kém)" : "PUE 1.2 (Chuẩn Xanh)"}
                </div>
                <div className="text-[11px] mt-1 font-medium flex items-center gap-1">
                  {consolidationMode === "before" ? (
                    <span>🏭 Phát thải khí nhà kính lớn</span>
                  ) : (
                    <span className="text-emerald-700 font-bold">🌿 Đạt chuẩn Green Computing</span>
                  )}
                </div>
              </div>
            </div>

            {/* Eco Impact Callout */}
            <div className="p-4 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-700 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-200">
                  <Sparkles className="w-4 h-4" />
                  <span>Ý Nghĩa Môi Trường Thực Tiễn (Đòn Bẩy Xanh):</span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed max-w-3xl">
                  Gom 10 máy chủ vật lý tải thấp về 2 máy chủ chạy ảo hóa giúp tiết kiệm xấp xỉ <strong>84.000 kWh điện/năm</strong>, tương đương cắt giảm <strong>60 tấn khí thải CO2</strong> và giảm 8 cỗ máy thải ra môi trường thành rác điện tử (e-waste).
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("cloud-ch9-s3-4-virtualization-link")}
                className="px-4 py-2 rounded-xl bg-white text-emerald-900 font-extrabold text-xs shrink-0 hover:bg-emerald-50 transition-colors cursor-pointer shadow-xs"
              >
                Xem Mục Green IT
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: PIPELINE ROADMAP */}
        {activeView === "pipeline" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-stone-500 mb-2">
              <span>Lộ Trình Tiến Trình 4 Bước Khám Phá Công Nghệ Ảo Hóa:</span>
              <span className="text-emerald-600 font-bold">Xuyên suốt Chương 9</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PIPELINE_STEPS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors text-stone-850 font-black text-xs flex items-center justify-center font-mono">
                        {item.step}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-stone-900 text-sm mb-1">{item.label}</h4>
                    <span className="text-xs font-semibold text-emerald-600 block mb-2">{item.subtitle}</span>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-400 group-hover:text-emerald-600 transition-colors">
                    <span>Bước tiến trình</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: EXAM RADAR & 4 PITFALL ALERTS */}
        {activeView === "exam" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Exam Weights Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <h4 className="font-extrabold text-sm text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Ma Trận Phân Bổ Tỷ Trọng Điểm Thi Trắc Nghiệm Chương 9</span>
                </h4>
                <span className="text-xs font-bold text-stone-500">Khảo sát trên ngân hàng đề thi chính khóa</span>
              </div>

              <div className="space-y-4">
                {EXAM_WEIGHTS.map((ew, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-stone-800">
                      <span>{ew.subject}</span>
                      <span className="font-mono font-black text-emerald-700">{ew.weight}</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-stone-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-linear-to-r ${ew.barColor} transition-all duration-700`}
                        style={{ width: ew.weight }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Pitfalls Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>4 Bẫy Trắc Nghiệm Kinh Điển Cần Tuyệt Đối Tránh:</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PITFALL_CARDS.map((p, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border ${p.color} space-y-2 shadow-2xs`}>
                    <div className="flex items-center justify-between">
                      <h5 className="font-black text-xs">{p.title}</h5>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 border border-stone-200">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-red-700 font-semibold leading-relaxed">
                      ⚠️ <span className="underline">Bẫy đề thi:</span> {p.trap}
                    </p>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      ✅ <span className="font-bold text-emerald-700">Điểm đúng:</span> {p.truth}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
