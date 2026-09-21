"use client";
import React, { useState, useMemo } from "react";
import {
  Server,
  Wind,
  Network,
  HardDrive,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Activity,
  Compass,
  Sliders,
  Award,
  BarChart3,
  Clock,
  HelpCircle,
  TrendingUp,
  Target,
  FileCheck,
  Laptop,
  ChevronRight,
  Play,
  Search,
  ExternalLink,
  Info,
  Flame,
  Power,
  RotateCcw,
  Check,
  AlertTriangle,
  Eye
} from "lucide-react";

/* ============================================================
   DATA STRUCTURES & CONSTANTS FOR CHAPTER 2 HERO BANNER
   ============================================================ */

const TELEMETRY_METRICS = [
  { label: "Chuẩn Hiệu Suất Năng Lượng (PUE)", value: "1.12", note: "Hyperscale Green DC", color: "text-emerald-400" },
  { label: "Độ Sẵn Sàng Vận Hành (SLA)", value: "99.999%", note: "Tier IV Fault Tolerant", color: "text-sky-400" },
  { label: "Băng Thông Mạng Nội Bộ (East-West)", value: "100 Gbps", note: ">70% Lưu Lượng DC", color: "text-amber-400" },
  { label: "Độ Trễ Di Chuyển Máy Ảo (Live Migration)", value: "< 0.3s", note: "Downtime Vô Cảm", color: "text-purple-400" }
];

const QUICK_KEYTERMS = [
  {
    id: "pod",
    term: "Cụm PoD (Point of Delivery)",
    sectionId: "cloud-ch2-s1-2-pod",
    sectionLabel: "Mục 1.2",
    summary: "Module khép kín gồm nhiều Rack kết hợp 5 hệ thống hỗ trợ: PDS, Modular UPS, DCIM, RowCool, Aisle Containment.",
    badge: "Hạ tầng",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "raised-floor",
    term: "Sàn nâng (Raised Floor 1-4 ft)",
    sectionId: "cloud-ch2-s2-2-cooling-solutions",
    sectionLabel: "Mục 2.2",
    summary: "Sàn nâng cao 1-4 feet dẫn cáp điện và thổi khí lạnh áp suất cao từ điều hòa vào Lối đi lạnh (Cold Aisle).",
    badge: "Làm mát",
    badgeColor: "bg-cyan-900/60 text-cyan-300 border-cyan-500/40"
  },
  {
    id: "lights-out",
    term: "Lights-Out Data Center",
    sectionId: "cloud-ch2-s2-3-lights-out",
    sectionLabel: "Mục 2.3",
    summary: "Trung tâm dữ liệu tắt đèn hoàn toàn, quản trị từ xa: Giảm nhân sự, giảm lỗi cấu hình và giảm tấn công vật lý.",
    badge: "Vận hành",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "leaf-spine",
    term: "Tô-pô mạng Leaf-Spine",
    sectionId: "cloud-ch2-s3-2-topologies",
    sectionLabel: "Mục 3.2",
    summary: "Kiến trúc mạng phẳng 2 tầng, mọi Leaf nối mọi Spine, loại bỏ Single Point of Failure của Fat Tree.",
    badge: "Mạng DC",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "storage-virt",
    term: "Ảo hóa lưu trữ (Storage Pool)",
    sectionId: "cloud-ch2-s4-1-local-vs-virtualized",
    sectionLabel: "Mục 4.1",
    summary: "Tách rời lưu trữ vật lý khỏi vị trí rack cụ thể, gom thành Centralized Pool để cấp phát quota động.",
    badge: "Lưu trữ",
    badgeColor: "bg-indigo-900/60 text-indigo-300 border-indigo-500/40"
  },
  {
    id: "full-virt",
    term: "Full Virtualization (Ảo hóa toàn phần)",
    sectionId: "cloud-ch2-s5-1-types",
    sectionLabel: "Mục 5.1",
    summary: "Không cần sửa mã nguồn OS, tránh chi phí mô phỏng, là chuẩn mực nền tảng cho Cloud Data Center.",
    badge: "Ảo hóa",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/40"
  },
  {
    id: "hypervisor-mode",
    term: "Hypervisor Mode (Root Ring 0)",
    sectionId: "cloud-ch2-s6-1-privilege-levels",
    sectionLabel: "Mục 6.1",
    summary: "Mức đặc quyền cao nhất, chỉ Hypervisor mới được tạo VM và cấp phát RAM vật lý; bẫy ngắt Trap-and-Emulate.",
    badge: "Đặc quyền",
    badgeColor: "bg-rose-900/60 text-rose-300 border-rose-500/40"
  },
  {
    id: "virtual-io",
    term: "Virtual I/O Pipeline",
    sectionId: "cloud-ch2-s6-2-virtual-io",
    sectionLabel: "Mục 6.2",
    summary: "Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ DC Storage. VM là Digital Object 100% phần mềm.",
    badge: "Nhập/Xuất",
    badgeColor: "bg-teal-900/60 text-teal-300 border-teal-500/40"
  },
  {
    id: "live-migration",
    term: "Live VM Migration (3 Bước)",
    sectionId: "cloud-ch2-s6-3-vm-migration",
    sectionLabel: "Mục 6.3",
    summary: "Pre-copy (chép RAM khi VM chạy) ➔ Stop-and-copy (tạm ngưng <0.5s chép dirty pages) ➔ Post-copy (khôi phục).",
    badge: "Di chuyển",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "hosted-vs-multiboot",
    term: "Hosted Hypervisor vs Multiboot",
    sectionId: "cloud-ch2-s7-2-hosted-vs-multiboot",
    sectionLabel: "Mục 7.2",
    summary: "Hosted chạy nhiều OS đồng thời (chuyển trong 0.1s); Multiboot chỉ chạy 1 OS/lần và bắt buộc phải Reboot máy.",
    badge: "So sánh",
    badgeColor: "bg-orange-900/60 text-orange-300 border-orange-500/40"
  }
];

const PIPELINE_STEPS = [
  {
    step: "01",
    label: "Cấu Trúc Phần Cứng Data Center",
    subtitle: "Server Rack ➔ Cụm PoD ➔ Siêu Trung Tâm Dữ Liệu",
    badge: "Mục I: Tổng Quan & Cấu Trúc",
    sectionId: "cloud-ch2-s1-1-definition-structure",
    desc: "Mô hình phân cấp module hóa công nghiệp. Khám phá cấu trúc tủ Rack 42U, cụm PoD tích hợp khép kín 5 hệ thống hỗ trợ (PDS, Modular UPS, DCIM, RowCool, Aisle Containment).",
    highlights: [
      "Server ➔ Rack ➔ PoD ➔ Data Center (từ nhỏ đến lớn)",
      "5 Hệ thống hỗ trợ khép kín trong 1 PoD",
      "Module hóa giúp mở rộng quy mô (Scale-out) thần tốc"
    ]
  },
  {
    step: "02",
    label: "Nhiệt Động Học & Tản Nhiệt",
    subtitle: "Sàn Nâng Áp Suất, Lối Đi Nóng/Lạnh & Lights-Out DC",
    badge: "Mục II: Điện Năng & Làm Mát",
    sectionId: "cloud-ch2-s2-2-cooling-solutions",
    desc: "Khống chế dòng nhiệt khổng lồ từ hàng vạn máy chủ. Sàn nâng 1-4 feet dẫn khí lạnh 18-21°C, tách biệt Lối đi lạnh (mặt trước) và Lối đi nóng (mặt sau) có ống khói Chimney, kết hợp vận hành Lights-Out tự động.",
    highlights: [
      "Sàn nâng cao 1-4 feet dẫn khí lạnh áp suất cao",
      "Cold Aisle (18-21°C) đối mặt trước vs Hot Aisle (30-35°C) thoát ống Chimney",
      "Lights-Out DC: Tắt đèn hoàn toàn, giảm nhân sự, giảm lỗi con người"
    ]
  },
  {
    step: "03",
    label: "Mạng Kết Nối & Lưu Trữ Đám Mây",
    subtitle: "Lưu Lượng East-West, Tô-pô Leaf-Spine & Storage Pool",
    badge: "Mục III & IV: Mạng & Lưu Trữ",
    sectionId: "cloud-ch2-s3-2-topologies",
    desc: "Đột phá kiến trúc mạng phẳng chịu lỗi cao. Thay thế mạng Fat Tree dễ nghẽn cổ chai bằng mô hình Leaf-Spine không điểm chết. Gom cụm ổ cứng rải rác thành Storage Pool ảo hóa tập trung.",
    highlights: [
      "Lưu lượng East-West nội bộ chiếm >70% băng thông DC",
      "Mạng Leaf-Spine: Mọi Leaf nối mọi Spine (Fault Tolerance cao)",
      "Storage Virtualization: Tách rời vật lý, cấp quota động"
    ]
  },
  {
    step: "04",
    label: "Ảo Hóa Toàn Phần & Di Chuyển Máy Ảo",
    subtitle: "Full Virtualization, 3 Mức Đặc Quyền & Live VM Migration",
    badge: "Mục V, VI, VII: Công Nghệ Ảo Hóa",
    sectionId: "cloud-ch2-s6-3-vm-migration",
    desc: "Đỉnh cao phần mềm điều khiển hạ tầng. So sánh 3 công nghệ ảo hóa (Emulation vs Para vs Full Virt), phân tầng 3 mức đặc quyền (Hypervisor > Kernel > User), và quy trình di chuyển máy ảo Live Migration 3 giai đoạn không gián đoạn.",
    highlights: [
      "Full Virtualization: Chuẩn Cloud DC, không cần sửa OS",
      "Hypervisor Mode tin cậy tuyệt đối với Trap-and-Emulate",
      "Live VM Migration: Pre-copy ➔ Stop-and-copy ➔ Post-copy",
      "Hosted Hypervisor chạy nhiều OS đồng thời vs Multiboot reboot"
    ]
  }
];

const ARCH_STACK = [
  {
    tierNum: "4",
    tier: "Tầng 4: Ứng Dụng & Ảo Hóa Hosted (Application & Hosted Layer)",
    role: "User Applications, Guest OS, Hosted Hypervisor (Type 2)",
    icon: Laptop,
    badgeColor: "bg-purple-500 text-white",
    borderColor: "border-purple-500/40 hover:border-purple-400",
    glowColor: "from-purple-500/10 to-indigo-500/10",
    desc: "Chạy các phần mềm máy ảo cá nhân (VMware Workstation, VirtualBox) trên Host OS. Chuyển đổi giữa các hệ điều hành trong 0.1s không làm gián đoạn công việc.",
    xrayData: {
      protocols: ["Bridged Networking", "NAT Virtual Router", "Host-Only Isolation"],
      storageMap: "Ổ đĩa ảo ánh xạ thành 1 tệp tin (.vmdk / .vdi / .vhdx) trên Host OS",
      keyFeature: "Chia sẻ thư mục (Shared Folders) và Clipboard hai chiều (Bidirectional)",
      targetAudience: "Nhà phát triển, kiểm thử phần mềm, phòng thí nghiệm học tập cá nhân"
    }
  },
  {
    tierNum: "3",
    tier: "Tầng 3: Lõi Ảo Hóa & Quản Trị Máy Ảo (Compute & Storage Engine)",
    role: "Type 1 Bare-Metal Hypervisor, 3 Privilege Modes & Central Storage Pool",
    icon: Cpu,
    badgeColor: "bg-indigo-500 text-white",
    borderColor: "border-indigo-500/40 hover:border-indigo-400",
    glowColor: "from-indigo-500/10 to-blue-500/10",
    desc: "Hạt nhân Hypervisor (ESXi, KVM, Xen) chạy trực tiếp trên phần cứng máy chủ với Hypervisor Mode (Root Ring 0). Quản lý Virtual I/O Pipeline, Storage Pool (SAN/NAS) và Live VM Migration.",
    xrayData: {
      protocols: ["Intel VT-x / AMD-V Hardware Assist", "Trap-and-Emulate Privileged Engine"],
      storageMap: "Storage Pool tách rời vật lý, cấp phát quota động cho hàng ngàn VM",
      keyFeature: "Live VM Migration 3 bước (Pre-copy ➔ Stop-and-copy ➔ Post-copy) downtime < 0.3s",
      targetAudience: "Chuẩn mực cơ sở hạ tầng đám mây công nghiệp (AWS EC2, Google CE, Azure VM)"
    }
  },
  {
    tierNum: "2",
    tier: "Tầng 2: Mạng Kết Nối Tốc Độ Cao (High-Speed Network Fabric)",
    role: "Leaf-Spine Switches, Super-Spine, ToR Switches & Multi-port NICs",
    icon: Network,
    badgeColor: "bg-emerald-500 text-white",
    borderColor: "border-emerald-500/40 hover:border-emerald-400",
    glowColor: "from-emerald-500/10 to-teal-500/10",
    desc: "Kiến trúc mạng phẳng chịu lỗi cao. Thay thế Fat Tree bằng Leaf-Spine (mọi Leaf nối mọi Spine), card mạng đa cổng nhân K lần băng thông, phục vụ luồng East-West (>70% DC).",
    xrayData: {
      protocols: ["100G/400G RoCE (RDMA over Converged Ethernet)", "Link Aggregation (10x10G=100G)"],
      storageMap: "Băng thông East-West nội bộ đạt 100–400 Gbps giữa các tủ rack trong PoD",
      keyFeature: "Không có Single Point of Failure: 1 Spine hỏng, traffic tự động chuyển Spine khác",
      targetAudience: "Hạ tầng mạng liên PoD và siêu trung tâm dữ liệu Hyperscale"
    }
  },
  {
    tierNum: "1",
    tier: "Tầng 1: Hạ Tầng Vật Lý & Tản Nhiệt (Physical Facility & Thermal Containment)",
    role: "42U Server Racks, PoD Module, Raised Floor (1-4 ft) & Lights-Out DC",
    icon: Server,
    badgeColor: "bg-amber-500 text-stone-950 font-black",
    borderColor: "border-amber-500/40 hover:border-amber-400",
    glowColor: "from-amber-500/10 to-orange-500/10",
    desc: "Nền móng vật lý của toàn bộ trung tâm dữ liệu: Sàn nâng cao 1-4 ft dẫn khí lạnh áp suất cao, Lối đi lạnh (Cold Aisle 18-21°C), Lối đi nóng có ống Chimney, vận hành không đèn Lights-Out.",
    xrayData: {
      protocols: ["DCIM (Data Center Infrastructure Management)", "InfraSuite Central Control"],
      storageMap: "PoD tích hợp 5 hệ thống: PDS, Modular UPS, DCIM, RowCool, Aisle Containment",
      keyFeature: "Lights-Out DC: Tắt đèn 100%, giảm chi phí nhân sự, giảm lỗi cấu hình và tấn công vật lý",
      targetAudience: "Hệ thống điện và làm mát công nghiệp phục vụ hàng triệu máy chủ"
    }
  }
];

const EXAM_BENTO = [
  {
    id: "bento-1",
    title: "1. Cấu Trúc Phân Cấp & 5 Hệ Thống PoD",
    weight: "20%",
    weightVal: 20,
    importance: "Rất Cao",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/30",
    color: "from-blue-500 to-indigo-600",
    trapAlert: "Thứ tự phân cấp từ nhỏ đến lớn: Rack ➔ PoD ➔ Data Center. Đề thi hay bẫy đổi thứ tự hoặc hỏi thiếu 1 trong 5 thành phần PoD.",
    quickFormula: "PoD = Racks + (PDS + Modular UPS + DCIM + RowCool + Aisle Containment)"
  },
  {
    id: "bento-2",
    title: "2. Sàn Nâng, Lối Đi Nóng/Lạnh & Lights-Out DC",
    weight: "25%",
    weightVal: 25,
    importance: "Trọng Tâm Số 1",
    badgeColor: "bg-cyan-900/60 text-cyan-300 border-cyan-500/30",
    color: "from-cyan-500 to-blue-600",
    trapAlert: "Chiều cao sàn nâng chuẩn: 1 đến 4 feet (30-120 cm). Mặt trước rack đối diện = Cold Aisle (18-21°C). Mặt sau = Hot Aisle + ống Chimney. 3 lợi ích Lights-out DC.",
    quickFormula: "Mặt trước = Lạnh (Cold) | Mặt sau = Nóng (Hot + Chimney) | Sàn nâng = 1-4 ft"
  },
  {
    id: "bento-3",
    title: "3. Lưu Lượng East-West & Tô-pô Leaf-Spine",
    weight: "20%",
    weightVal: 20,
    importance: "Trọng Tâm Kỹ Thuật",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/30",
    color: "from-emerald-500 to-teal-600",
    trapAlert: "East-West chiếm >70% lưu lượng DC (nội bộ giữa server). Fat Tree dễ bị bottleneck ở gốc. Leaf-Spine chịu lỗi (Fault Tolerance): hỏng 1 switch không sập mạng.",
    quickFormula: "East-West > 70% DC Traffic | Leaf-Spine = Mọi Leaf nối mọi Spine (Zero Single Failure)"
  },
  {
    id: "bento-4",
    title: "4. 3 Công Nghệ Ảo Hóa & Chuẩn Cloud DC",
    weight: "15%",
    weightVal: 15,
    importance: "Kinh Điển Thi Cử",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/30",
    color: "from-purple-500 to-pink-600",
    trapAlert: "Para-virtualization BẮT BUỘC PHẢI SỬA MÃ NGUỒN OS. Full Virtualization KHÔNG CẦN SỬA OS, tránh chi phí mô phỏng và là chuẩn mực cho Cloud Data Center.",
    quickFormula: "Emulation: đọc từng lệnh | Para: sửa OS | Full: không sửa OS (Chuẩn Cloud DC)"
  },
  {
    id: "bento-5",
    title: "5. 3 Giai Đoạn Live Migration & Hosted vs Multiboot",
    weight: "20%",
    weightVal: 20,
    importance: "Vận Dụng Cao",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/30",
    color: "from-amber-500 to-orange-600",
    trapAlert: "Live Migration: Stop-and-copy tạm ngưng VM (<0.5s) để gửi dirty pages cuối cùng. Multiboot chỉ chạy 1 OS tại 1 thời điểm và bắt buộc phải Reboot lại máy.",
    quickFormula: "Pre-copy (chạy) ➔ Stop-and-copy (dừng <0.5s) ➔ Post-copy | Multiboot = Reboot"
  }
];

const SIMULATORS_LAUNCHPAD = [
  {
    id: "sim-1",
    title: "1. Data Center Hierarchy Explorer",
    sectionId: "cloud-ch2-s1-1-definition-structure",
    badge: "Mục I",
    desc: "Khám phá cấu trúc phân cấp Rack ➔ PoD ➔ Data Center và 5 thành phần PoD.",
    icon: Server,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30"
  },
  {
    id: "sim-2",
    title: "2. Thermal Containment Simulator",
    sectionId: "cloud-ch2-s2-2-cooling-solutions",
    badge: "Mục II",
    desc: "Mô phỏng mặt cắt sàn nâng 1-4 ft, Lối đi Lạnh vs Nóng, ống Chimney và công tắc Lights-Out.",
    icon: Wind,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
  },
  {
    id: "sim-3",
    title: "3. Data Center Traffic Flow Visualizer",
    sectionId: "cloud-ch2-s3-1-basics-traffic-flow",
    badge: "Mục III.1",
    desc: "Kiểm tra ToR Switch, Multi-port NIC x K và dòng lưu lượng North-South vs East-West (>70%).",
    icon: Activity,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
  },
  {
    id: "sim-4",
    title: "4. Network Topology Battlefield",
    sectionId: "cloud-ch2-s3-2-topologies",
    badge: "Mục III.2",
    desc: "Đánh sập switch kiểm tra khả năng chịu lỗi (Fault Tolerance) Leaf-Spine vs Fat Tree.",
    icon: Network,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30"
  },
  {
    id: "sim-5",
    title: "5. Storage Virtualization Sandbox",
    sectionId: "cloud-ch2-s4-1-local-vs-virtualized",
    badge: "Mục IV",
    desc: "Thực nghiệm gom ổ cứng rải rác thành Central Storage Pool cấp phát quota động.",
    icon: HardDrive,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30"
  },
  {
    id: "sim-6",
    title: "6. Virtualization Types Comparison",
    sectionId: "cloud-ch2-s5-1-types",
    badge: "Mục V",
    desc: "Đối kháng 3 loại ảo hóa: Software Emulation vs Para-virtualization vs Full Virtualization.",
    icon: Layers,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30"
  },
  {
    id: "sim-7",
    title: "7. Privilege Levels Hierarchy",
    sectionId: "cloud-ch2-s6-1-privilege-levels",
    badge: "Mục VI.1",
    desc: "Mô phỏng 3 mức đặc quyền và kích hoạt ngắt phần cứng Trap-and-Emulate khi VM gửi lệnh cấm.",
    icon: ShieldCheck,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/30"
  },
  {
    id: "sim-8",
    title: "8. Live VM Migration Simulator",
    sectionId: "cloud-ch2-s6-3-vm-migration",
    badge: "Mục VI.3",
    desc: "Quan sát Live Migration 3 bước: Pre-copy ➔ Stop-and-copy ➔ Post-copy với downtime < 0.3s.",
    icon: Zap,
    color: "text-teal-400 bg-teal-500/10 border-teal-500/30"
  }
];

/* ============================================================
   MAIN COMPONENT: CHAPTER 2 MASTERPIECE HERO BANNER
   ============================================================ */

export default function Chapter2HeroBanner() {
  const [activeTab, setActiveTab] = useState("blueprint"); // 'blueprint' | 'pipeline' | 'bento' | 'launchpad'
  const [selectedStep, setSelectedStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedXray, setExpandedXray] = useState("3"); // tierNum expanded by default
  const [expandedBentoTip, setExpandedBentoTip] = useState(null);

  // Smooth scroll helper
  const handleScrollToSubsection = (subId) => {
    if (typeof window === "undefined") return;
    const target = document.getElementById(`content-${subId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filtered keyterms for the sniffer
  const filteredKeyterms = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return QUICK_KEYTERMS.filter(
      (k) =>
        k.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        k.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden border border-stone-800 bg-[#121110] text-stone-100 shadow-2xl font-sans">
      {/* Decorative Cyber Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1e1d15_1px,transparent_1px),linear-gradient(to_bottom,#1f1e1d15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Cyber Neon Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-cyan-500/12 via-indigo-600/10 to-transparent blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-amber-500/10 via-emerald-500/8 to-transparent blur-3xl rounded-full pointer-events-none -ml-20 -mb-20" />

      {/* ============================================================
          TOP BANNER: BRANDING & LIVE TELEMETRY
          ============================================================ */}
      <div className="relative p-6 sm:p-8 border-b border-stone-800/80 bg-stone-950/60 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-stone-900 border border-amber-400/40 text-amber-400 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Mục ★ Trung Tâm Chỉ Huy Kiến Trúc Toàn Chương 2</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>DC Systems Online</span>
            </div>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/40 text-indigo-300">
              8 Interactive Hubs
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
          Chương 2: Hạ Tầng Siêu Trung Tâm Dữ Liệu & Bộ Giám Sát Máy Ảo
        </h1>
        <p className="mt-2 text-stone-400 text-xs sm:text-sm max-w-4xl leading-relaxed font-medium">
          Khám phá toàn bộ nền móng vật lý của điện toán đám mây: Từ cấu trúc tủ Rack 42U, PoD module hóa, sàn nâng 1–4 ft, lối đi tản nhiệt Hot/Cold Aisle đến kiến trúc mạng phẳng Leaf-Spine chịu lỗi, 3 mức đặc quyền CPU và bí quyết Live VM Migration không ngắt quãng dịch vụ.
        </p>

        {/* Live Datacenter Telemetry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-5 border-t border-stone-800/70">
          {TELEMETRY_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col justify-between"
            >
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider line-clamp-1">
                {item.label}
              </span>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className={`text-xl font-black font-mono tracking-tight ${item.color}`}>
                  {item.value}
                </span>
                <span className="text-[10px] text-stone-500 font-bold">{item.note}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            QUICK KEYTERMS SNIFFER (SEARCH BAR)
            ============================================================ */}
        <div className="mt-6 relative">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="🔍 Tra cứu nhanh 10 từ khóa cốt lõi (ví dụ: 'PoD', 'Leaf-Spine', 'Live Migration', 'Stop-and-copy', 'Multiboot')..."
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-stone-900/90 border border-stone-700/80 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sniffer Dropdown Results Popover */}
          {searchTerm.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-stone-900 border border-amber-400/40 shadow-2xl p-3 max-h-72 overflow-y-auto space-y-2">
              {filteredKeyterms.length === 0 ? (
                <div className="p-3 text-center text-xs text-stone-400">
                  Không tìm thấy từ khóa phù hợp với &quot;{searchTerm}&quot;.
                </div>
              ) : (
                filteredKeyterms.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 hover:border-amber-400/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <h4 className="text-xs font-black text-white">{item.term}</h4>
                        <span className="text-[11px] text-amber-400 font-bold font-mono">({item.sectionLabel})</span>
                      </div>
                      <p className="text-xs text-stone-400 leading-relaxed font-normal">{item.summary}</p>
                    </div>

                    <button
                      onClick={() => {
                        handleScrollToSubsection(item.sectionId);
                        setSearchTerm("");
                      }}
                      className="self-end sm:self-center px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
                    >
                      <span>Nhảy Đến Mục Học</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* ============================================================
            4 DYNAMIC PERSPECTIVES TAB SWITCHER
            ============================================================ */}
        <div className="flex flex-wrap gap-2 mt-6 pt-2">
          {[
            { id: "blueprint", label: "🏢 Mặt Cắt 4 Tầng Blueprint (X-Ray)", icon: Layers },
            { id: "pipeline", label: "🗺️ Lộ Trình Tiến Trình (4 Chặng)", icon: Compass },
            { id: "bento", label: "🎯 Bento Grid Ma Trận Trọng Số Đề Thi", icon: Target },
            { id: "launchpad", label: "🕹️ Command Center Launchpad (8 Hubs)", icon: Play }
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-400 text-stone-950 shadow-lg shadow-amber-400/20 ring-2 ring-amber-300"
                    : "bg-stone-900/90 hover:bg-stone-850 text-stone-300 border border-stone-800"
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? "text-stone-950" : "text-amber-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          TAB CONTENT AREA
          ============================================================ */}
      <div className="relative p-6 sm:p-8">
        {/* PERSPECTIVE 1: 4-TIER DATACENTER BLUEPRINT WITH X-RAY INSPECT */}
        {activeTab === "blueprint" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Mặt Cắt Kiến Trúc 4 Tầng Siêu Trung Tâm Dữ Liệu (X-Ray Interactive)
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Bấm vào từng tầng để mở rộng chế độ <strong>X-Ray Inspect</strong> xem các thông số kỹ thuật cốt lõi và giao thức vận hành.
                </p>
              </div>
              <span className="text-xs font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 self-start sm:self-auto">
                Bấm để mở X-Ray
              </span>
            </div>

            <div className="space-y-3">
              {ARCH_STACK.map((tier) => {
                const IconComponent = tier.icon;
                const isXray = expandedXray === tier.tierNum;
                return (
                  <div
                    key={tier.tierNum}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isXray
                        ? `bg-linear-to-r ${tier.glowColor} bg-stone-900/90 border-amber-400/80 shadow-xl ring-1 ring-amber-400/30`
                        : "bg-stone-900/60 border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    {/* Main Bar */}
                    <div
                      onClick={() => setExpandedXray(isXray ? null : tier.tierNum)}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-2xl ${tier.badgeColor} shadow-md shrink-0 mt-0.5`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono font-black text-amber-400">
                              LEVEL 0{tier.tierNum}
                            </span>
                            <h4 className="text-sm sm:text-base font-black text-white">{tier.tier}</h4>
                          </div>
                          <p className="text-xs text-stone-400 mt-1 leading-relaxed">{tier.desc}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <span
                          className={`text-[11px] font-black px-2.5 py-1 rounded-xl transition-all ${
                            isXray
                              ? "bg-amber-400 text-stone-950"
                              : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                          }`}
                        >
                          {isXray ? "Đang X-Ray Inspect" : "Bật X-Ray"}
                        </span>
                      </div>
                    </div>

                    {/* X-Ray Expanded Specs Drawer */}
                    {isXray && (
                      <div className="p-4 sm:p-5 pt-2 border-t border-stone-800/80 bg-stone-950/70 space-y-3 animate-in fade-in duration-300 text-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1">
                            <div className="text-[11px] font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5" />
                              Giao thức & Chuẩn kỹ thuật
                            </div>
                            <ul className="list-disc list-inside text-stone-300 space-y-1 pt-1">
                              {tier.xrayData.protocols.map((p, i) => (
                                <li key={i}>{p}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1">
                            <div className="text-[11px] font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                              <HardDrive className="w-3.5 h-3.5" />
                              Cơ chế Lưu trữ & Định tuyến
                            </div>
                            <p className="text-stone-300 leading-relaxed pt-1">{tier.xrayData.storageMap}</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>
                            <strong>Điểm cốt lõi:</strong> {tier.xrayData.keyFeature}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PERSPECTIVE 2: PIPELINE JOURNEY (4 CHẶNG) */}
        {activeTab === "pipeline" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PIPELINE_STEPS.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedStep === idx
                      ? "bg-amber-400 text-stone-950 border-amber-400 shadow-xl shadow-amber-400/20 ring-2 ring-amber-300"
                      : "bg-stone-900/80 border-stone-800 text-stone-200 hover:bg-stone-850 hover:border-stone-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-black font-mono px-2 py-0.5 rounded-md ${
                        selectedStep === idx ? "bg-stone-950 text-amber-400" : "bg-stone-800 text-stone-400"
                      }`}
                    >
                      Chặng {step.step}
                    </span>
                    {selectedStep === idx && <Sparkles className="w-3.5 h-3.5 text-stone-950 fill-current" />}
                  </div>
                  <h4 className="text-xs font-black line-clamp-2">{step.label}</h4>
                </button>
              ))}
            </div>

            {/* Active Step Showcase Card */}
            {(() => {
              const cur = PIPELINE_STEPS[selectedStep];
              return (
                <div className="rounded-3xl border border-stone-800 bg-stone-900/90 p-6 sm:p-7 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                    <div>
                      <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {cur.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white mt-2">
                        {cur.label}: {cur.subtitle}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleScrollToSubsection(cur.sectionId)}
                      className="self-start sm:self-center px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>Nhảy Đến Phần Này</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">{cur.desc}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-extrabold text-stone-200 uppercase tracking-wider">
                      Điểm nhấn kỹ thuật cần nắm vững:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {cur.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 text-xs font-bold text-stone-200 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* PERSPECTIVE 3: BENTO GRID MA TRẬN TRỌNG SỐ ĐỀ THI & RADAR BẪY */}
        {activeTab === "bento" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Target className="w-4 h-4 text-rose-400" />
                  Bento Grid: Ma Trận Trọng Số Đề Thi & Cảnh Báo Bẫy (Exam Traps)
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  5 Chuyên đề quyết định 100% điểm số bài thi Hạ tầng & Công nghệ Đám mây. Bấm để xem mẹo nhớ nhanh.
                </p>
              </div>
              <span className="text-xs font-black text-amber-400 px-3 py-1 rounded-full bg-stone-900 border border-amber-400/40 self-start sm:self-auto">
                Tổng 100% Điểm Số
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXAM_BENTO.map((item, idx) => {
                const isTipOpen = expandedBentoTip === item.id;
                return (
                  <div
                    key={item.id}
                    className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                      idx === 1
                        ? "md:col-span-2 lg:col-span-2 bg-linear-to-br from-stone-900 to-stone-950 border-cyan-500/50 shadow-lg"
                        : "bg-stone-900/80 border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.importance}
                        </span>
                        <span className="text-lg font-black font-mono text-amber-400">{item.weight}</span>
                      </div>

                      <h4 className="text-sm sm:text-base font-black text-white">{item.title}</h4>

                      {/* Weight progress bar */}
                      <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
                        <div className={`h-full bg-linear-to-r ${item.color} rounded-full`} style={{ width: item.weight }} />
                      </div>

                      <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 leading-relaxed">
                        <strong className="text-amber-400">⚠️ Bẫy đề thi:</strong> {item.trapAlert}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-800 space-y-2">
                      <button
                        onClick={() => setExpandedBentoTip(isTipOpen ? null : item.id)}
                        className="text-[11px] font-extrabold text-stone-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>{isTipOpen ? "Ẩn mẹo nhớ" : "Hiện mẹo nhớ thần tốc (Quick Formula)"}</span>
                      </button>

                      {isTipOpen && (
                        <div className="p-2.5 rounded-xl bg-stone-950 border border-amber-400/40 text-[11px] font-mono text-amber-300 animate-in fade-in duration-200">
                          {item.quickFormula}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PERSPECTIVE 4: COMMAND CENTER LAUNCHPAD (8 HUBS) */}
        {activeTab === "launchpad" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-400" />
                  Command Center: Bệ Phóng 8 Phòng Thí Nghiệm Trực Quan Chương 2
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Bấm vào bất kỳ phòng lab nào dưới đây để <strong>tự động cuộn mượt (Smooth Scroll)</strong> đến vị trí thực hành trong bài!
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 self-start sm:self-auto">
                1-Click Quick Jump
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SIMULATORS_LAUNCHPAD.map((sim) => {
                const IconComponent = sim.icon;
                return (
                  <div
                    key={sim.id}
                    className="p-5 rounded-3xl border border-stone-800 bg-stone-900/80 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/10 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${sim.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-stone-800 text-stone-400 border border-stone-700">
                          {sim.badge}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {sim.title}
                      </h4>
                      <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">{sim.desc}</p>
                    </div>

                    <button
                      onClick={() => handleScrollToSubsection(sim.sectionId)}
                      className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] font-extrabold text-amber-400 hover:text-amber-300 cursor-pointer group-hover:translate-x-1 transition-all"
                    >
                      <span>Mở & Cuộn Đến Lab</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================
          BOTTOM STATUS & SUMMARY BAR
          ============================================================ */}
      <div className="p-4 sm:p-5 border-t border-stone-800/80 bg-stone-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-bold text-stone-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Trang Bị Toàn Diện:
          </span>
          <span>8 Visualizers</span>
          <span>•</span>
          <span>8 Micro-Quizzes</span>
          <span>•</span>
          <span>33 Thuật Ngữ</span>
          <span>•</span>
          <span>16 Flashcards SM-2</span>
        </div>

        <div className="text-[11px] text-stone-500 font-mono">
          StudyMaster Cloud Infrastructure • Certified Academic Curriculum
        </div>
      </div>
    </div>
  );
}
