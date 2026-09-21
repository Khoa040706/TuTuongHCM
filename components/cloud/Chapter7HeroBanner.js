"use client";
import React, { useState, useMemo } from "react";
import {
  HardDrive,
  Database,
  Server,
  Cloud,
  ShieldCheck,
  Layers,
  Lock,
  Cpu,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Activity,
  Sliders,
  BarChart3,
  Search,
  RotateCcw,
  Check,
  AlertTriangle,
  Eye,
  RefreshCw,
  Copy,
  ChevronRight,
  Globe,
  FolderTree,
  Boxes,
  FileText
} from "lucide-react";

/* ============================================================
   DATA STRUCTURES FOR CHAPTER 7 HERO BANNER (CLOUD STORAGE)
   ============================================================ */

const TELEMETRY_METRICS = [
  {
    label: "4 Hình Thái Lưu Trữ",
    value: "Centralized • NAS • SAN • Cloud",
    note: "Tiến hóa File ➔ Block ➔ Object",
    color: "text-sky-400",
    icon: Layers
  },
  {
    label: "Quy Trình Sao Lưu 3 Bước",
    value: "Select ➔ Transfer ➔ Store",
    note: "Cloud-based Backup Pipeline",
    color: "text-emerald-400",
    icon: RefreshCw
  },
  {
    label: "Tam Hùng Cloud Database",
    value: "AWS • Azure • GCP",
    note: "Chiến lược Regular Backups",
    color: "text-amber-400",
    icon: Database
  },
  {
    label: "Bản Chất Block Storage",
    value: "Block + Unique ID",
    note: "Tối ưu Database & Virtual Machine",
    color: "text-purple-400",
    icon: HardDrive
  }
];

const QUICK_KEYTERMS = [
  {
    id: "term-nas",
    term: "Network Attached Storage (NAS)",
    sectionId: "cloud-ch7-s2-2-nas-san",
    sectionLabel: "Mục II (2.2)",
    summary: "Lưu trữ gắn mạng truy cập ở cấp độ tệp tin (File-level) qua mạng LAN thông thường (NFS/SMB), chi phí thấp, chia sẻ văn phòng.",
    badge: "File-level",
    badgeColor: "bg-sky-900/60 text-sky-300 border-sky-500/40"
  },
  {
    id: "term-san",
    term: "Storage Area Network (SAN)",
    sectionId: "cloud-ch7-s2-2-nas-san",
    sectionLabel: "Mục II (2.2)",
    summary: "Mạng lưu trữ chuyên dụng tốc độ cao riêng biệt (Fiber Channel/iSCSI) truy cập ở cấp độ khối (Block-level) cho CSDL và máy ảo.",
    badge: "Block-level",
    badgeColor: "bg-indigo-900/60 text-indigo-300 border-indigo-500/40"
  },
  {
    id: "term-csa",
    term: "Cloud Storage Architecture (CSA)",
    sectionId: "cloud-ch7-s3-1-cloud-storage-core",
    sectionLabel: "Mục III.1",
    summary: "Khung kiến trúc 4 lớp xếp chồng (Client ➔ Access ➔ Service ➔ Infrastructure) với 3 thành phần cốt lõi: Servers, Network, Management.",
    badge: "Kiến trúc",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "term-object-storage",
    term: "Object Storage",
    sectionId: "cloud-ch7-s3-2-mechanisms-trends",
    sectionLabel: "Mục III.2",
    summary: "Mô hình lưu trữ dữ liệu phi cấu trúc thành các đối tượng độc lập gồm đúng 3 thành phần: Data Payload + Metadata + Unique ID.",
    badge: "Data+Meta+ID",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "term-sds",
    term: "Software-Defined Storage (SDS)",
    sectionId: "cloud-ch7-s3-2-mechanisms-trends",
    sectionLabel: "Mục III.2",
    summary: "Tách rời hoàn toàn phần mềm quản lý lưu trữ ra khỏi phần cứng vật lý bên dưới, giúp chạy trên máy chủ x86 phổ thông.",
    badge: "Software-Defined",
    badgeColor: "bg-teal-900/60 text-teal-300 border-teal-500/40"
  },
  {
    id: "term-security-threats",
    term: "3 Mối Đe Dọa ↔ 3 Biện Pháp",
    sectionId: "cloud-ch7-s4-1-threats-protection",
    sectionLabel: "Mục IV",
    summary: "Cyber attack, Data leak, Lost data đối ứng với Data Encryption, Access Control, Backup and Recovery.",
    badge: "An ninh",
    badgeColor: "bg-red-900/60 text-red-300 border-red-500/40"
  },
  {
    id: "term-backup-3step",
    term: "Quy Trình Sao Lưu 3 Bước",
    sectionId: "cloud-ch7-s5-2-process",
    sectionLabel: "Mục V (5.2)",
    summary: "Bước 1: Select backup data ➔ Bước 2: Transfer data to the cloud ➔ Bước 3: Store and manage backup data.",
    badge: "Select-Transfer-Store",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "term-cloud-db-trio",
    term: "Tam Hùng Cloud Database",
    sectionId: "cloud-ch7-s6-2-database",
    sectionLabel: "Mục VI (6.2)",
    summary: "3 nhà cung cấp CSDL đám mây lớn nhất thế giới: Amazon Web Services (AWS) — Microsoft Azure — Google Cloud Platform (GCP).",
    badge: "AWS-Azure-GCP",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "term-block-storage",
    term: "Block Storage & Unique ID",
    sectionId: "cloud-ch7-s7-1-definition",
    sectionLabel: "Mục VII (7.1)",
    summary: "Dữ liệu chia thành các block riêng lẻ kèm Unique ID. Truy cập nhanh, linh hoạt, hiệu suất cao cho Database và Virtual Machine.",
    badge: "Block+ID",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/40"
  },
  {
    id: "term-ebs-pd-azure",
    term: "EBS • Persistent Disk • Managed Disks",
    sectionId: "cloud-ch7-s7-2-popular-types",
    sectionLabel: "Mục VII (7.2)",
    summary: "3 loại dịch vụ Block Storage tiêu biểu từ AWS, Google Cloud và Microsoft Azure gắn liền với máy tính ảo EC2/GCE/Azure VM.",
    badge: "Đĩa khối Cloud",
    badgeColor: "bg-violet-900/60 text-violet-300 border-violet-500/40"
  }
];

const LAB_STATIONS = [
  {
    id: "lab-1",
    title: "Võ Đài Đối Đầu NAS vs SAN",
    targetId: "cloud-ch7-s2-2-nas-san",
    sectionLabel: "Mục II (2.2)",
    icon: "⚔️",
    color: "from-sky-500 to-blue-600",
    desc: "Đối kháng trực tiếp giữa File-level (LAN thông thường) và Block-level (Mạng cáp quang Fiber Channel riêng biệt)."
  },
  {
    id: "lab-2",
    title: "Giải Phẫu Kiến Trúc Cloud Storage X-Ray",
    targetId: "cloud-ch7-s3-1-cloud-storage-core",
    sectionLabel: "Mục III.1",
    icon: "🔬",
    color: "from-blue-600 to-indigo-600",
    desc: "Cắt lớp 4 tầng xếp chồng Client ➔ Access ➔ Service ➔ Infrastructure và 3 thành phần cốt lõi của CSA."
  },
  {
    id: "lab-3",
    title: "Mô Phỏng Luồng Dữ Liệu Object Storage",
    targetId: "cloud-ch7-s3-2-mechanisms-trends",
    sectionLabel: "Mục III.2",
    icon: "📦",
    color: "from-emerald-500 to-teal-600",
    desc: "Khám phá cấu trúc đối tượng độc lập gồm Data Payload + Metadata phong phú + Mã định danh Unique ID."
  },
  {
    id: "lab-4",
    title: "Lá Chắn An Ninh Dữ Liệu Đám Mây",
    targetId: "cloud-ch7-s4-1-threats-protection",
    sectionLabel: "Mục IV",
    icon: "🛡️",
    color: "from-red-500 to-rose-600",
    desc: "Phòng tuyến đối kháng 3 Mối đe dọa lớn với 3 Biện pháp bảo vệ trọng yếu, giám sát IDS và tuân thủ GDPR/HIPAA."
  },
  {
    id: "lab-5",
    title: "Quy Trình Sao Lưu Cloud 3 Bước & Restore Drill",
    targetId: "cloud-ch7-s5-4-challenges-solutions",
    sectionLabel: "Mục V (5.4)",
    icon: "🔄",
    color: "from-amber-500 to-orange-600",
    desc: "Vận hành tuần tự Select ➔ Transfer ➔ Store/Manage, khử trùng lặp Deduplication và diễn tập khôi phục tức thì."
  },
  {
    id: "lab-6",
    title: "Sa Bàn Công Nghiệp 4.0 & Tam Hùng Database",
    targetId: "cloud-ch7-s6-2-database",
    sectionLabel: "Mục VI (6.2)",
    icon: "🏭",
    color: "from-indigo-500 to-purple-600",
    desc: "4 Ứng dụng thực tế công nghiệp và võ đài so sánh Tam Hùng AWS vs Azure vs GCP cùng chiến lược Regular Backups."
  },
  {
    id: "lab-7",
    title: "Giải Phẫu Đĩa Khối Block Storage & Mount Sandbox",
    targetId: "cloud-ch7-s7-5-challenges-solutions",
    sectionLabel: "Mục VII (7.5)",
    icon: "💽",
    color: "from-purple-500 to-pink-600",
    desc: "Phân rã block 4KB kèm Unique ID, gạt thanh trượt điều chỉnh 64,000 IOPS và gắn đĩa vào máy ảo/CSDL."
  },
  {
    id: "lab-8",
    title: "Ma Trận 8 Trụ Cột Tri Thức & Radar Bẫy Thi",
    targetId: "cloud-ch7-s8-1-summary",
    sectionLabel: "Mục VIII",
    icon: "🎓",
    color: "from-amber-600 to-yellow-600",
    desc: "Bản đồ tiến hóa lưu trữ, hệ thống hóa toàn bộ kiến thức Chương 7 và radar cảnh báo các bẫy điểm liệt thi trắc nghiệm."
  }
];

export default function Chapter7HeroBanner() {
  const [activeTab, setActiveTab] = useState("triad_matrix"); // 'triad_matrix' | 'data_pipeline' | 'big_three' | 'exam_radar'
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [pipelineStage, setPipelineStage] = useState(1);
  const [isSimulatingPipeline, setIsSimulatingPipeline] = useState(false);
  const [selectedTriadModel, setSelectedTriadModel] = useState("block"); // 'file' | 'block' | 'object'
  const [selectedCloudProvider, setSelectedCloudProvider] = useState("aws"); // 'aws' | 'azure' | 'gcp'

  // Smooth scroll with highlight pulse
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-4", "ring-sky-400", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-sky-400");
      }, 2500);
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredKeyterms = useMemo(() => {
    if (!searchQuery.trim()) return QUICK_KEYTERMS;
    const q = searchQuery.toLowerCase();
    return QUICK_KEYTERMS.filter(
      (k) =>
        k.term.toLowerCase().includes(q) ||
        k.summary.toLowerCase().includes(q) ||
        k.badge.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleTriggerPipeline = () => {
    if (isSimulatingPipeline) return;
    setIsSimulatingPipeline(true);
    setPipelineStage(1);

    setTimeout(() => {
      setPipelineStage(2);
      setTimeout(() => {
        setPipelineStage(3);
        setTimeout(() => {
          setPipelineStage(4);
          setIsSimulatingPipeline(false);
        }, 1100);
      }, 1100);
    }, 1100);
  };

  return (
    <div className="relative mb-12 overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 p-6 shadow-2xl backdrop-blur-2xl sm:p-9 text-slate-100">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between border-b border-sky-500/20 pb-8">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 shadow-sm shadow-sky-500/20">
            <Sparkles className="h-4 w-4 text-sky-400 animate-pulse" />
            <span>Chương 7 • Cloud Data Storage Fabric</span>
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="text-emerald-300">Tổng Quan Toàn Diện Mục ★</span>
          </div>

          <h1 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Lưu Trữ Dữ Liệu Trên Nền Tảng Đám Mây
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base max-w-3xl leading-relaxed">
            Từ mạng lưu trữ truyền thống (Centralized, NAS, SAN) đến kiến trúc Cloud Storage 4 lớp, Object Storage (Data + Metadata + ID), phòng tuyến an ninh, quy trình sao lưu 3 bước, ứng dụng công nghiệp, Tam Hùng Cloud Database (AWS, Azure, GCP) và Block Storage hiệu năng cao.
          </p>
        </div>

        {/* Action Button: Quick Jump to Overview Matrix */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollToSection("cloud-ch7-s8-1-summary")}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-102 hover:shadow-sky-500/40 active:scale-98 cursor-pointer"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Ma Trận 8 Trụ Cột (Mục VIII)</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* TELEMETRY METRICS BAR */}
      <div className="relative z-10 mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TELEMETRY_METRICS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-md backdrop-blur-md transition-all hover:border-sky-500/30 hover:bg-slate-900/80"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {item.label}
                </span>
                <IconComponent className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className={`mt-2 font-mono text-sm sm:text-base font-extrabold ${item.color}`}>
                {item.value}
              </div>
              <div className="mt-1 text-[11px] text-slate-400">{item.note}</div>
            </div>
          );
        })}
      </div>

      {/* INTERACTIVE COCKPIT SECTION */}
      <div className="relative z-10 mt-8 rounded-3xl border border-sky-500/30 bg-slate-950/80 p-5 sm:p-7 shadow-xl">
        {/* Cockpit Tabs Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              BUỒNG LÁI ĐIỀU PHỐI KIẾN THỨC TOÀN CHƯƠNG (INTERACTIVE COCKPIT)
            </span>
            <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
              Chuyển đổi góc nhìn trực quan hóa toàn cảnh Chương 7
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-900/90 p-1">
            <button
              onClick={() => setActiveTab("triad_matrix")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "triad_matrix"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Boxes className="h-3.5 w-3.5" />
              <span>1. Ma Trận 3 Mô Hình Lưu Trữ</span>
            </button>
            <button
              onClick={() => setActiveTab("data_pipeline")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "data_pipeline"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
              <span>2. Đường Ống Dữ Liệu Khép Kín</span>
            </button>
            <button
              onClick={() => setActiveTab("big_three")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "big_three"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Database className="h-3.5 w-3.5" />
              <span>3. Tam Hùng AWS • Azure • GCP</span>
            </button>
            <button
              onClick={() => setActiveTab("exam_radar")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "exam_radar"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
              <span>4. Radar Bẫy Thi &amp; Điểm Liệt</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STORAGE TRIAD MATRIX (FILE VS BLOCK VS OBJECT) */}
        {activeTab === "triad_matrix" && (
          <div className="mt-6 space-y-6">
            {/* 3 Model Selector */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  id: "file",
                  name: "File Storage (NAS)",
                  tag: "Mạng LAN • NFS/SMB",
                  icon: "📁",
                  color: "border-sky-500/40 bg-sky-500/10 text-sky-300",
                  highlight: "Truy cập cấp độ Tệp tin (File-level)"
                },
                {
                  id: "block",
                  name: "Block Storage (SAN / EBS)",
                  tag: "I/O Khối Thô • Unique ID",
                  icon: "🧱",
                  color: "border-purple-500/40 bg-purple-500/10 text-purple-300",
                  highlight: "Tối ưu Database & Virtual Machine"
                },
                {
                  id: "object",
                  name: "Object Storage (S3 / Blob)",
                  tag: "Data + Metadata + ID",
                  icon: "📦",
                  color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
                  highlight: "Không gian phẳng, mở rộng vô hạn"
                }
              ].map((m) => {
                const isSelected = selectedTriadModel === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedTriadModel(m.id)}
                    className={`rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-sky-400 bg-sky-500/20 ring-2 ring-sky-400/40 shadow-lg shadow-sky-500/20"
                        : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{m.icon}</span>
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${m.color}`}>
                        {m.tag}
                      </span>
                    </div>
                    <h4 className="mt-2 text-base font-bold text-white">{m.name}</h4>
                    <div className="mt-1 text-xs text-slate-300">{m.highlight}</div>
                  </button>
                );
              })}
            </div>

            {/* Comparison Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-800 bg-slate-950/80 font-bold uppercase tracking-wider text-slate-400">
                  <tr>
                    <th className="p-3.5">Tiêu Chí So Sánh</th>
                    <th className="p-3.5 text-sky-400">File Storage (NAS)</th>
                    <th className="p-3.5 text-purple-400">Block Storage (SAN / Cloud EBS)</th>
                    <th className="p-3.5 text-emerald-400">Object Storage (Cloud S3/GCS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3.5 font-semibold text-white">Đơn vị dữ liệu</td>
                    <td className="p-3.5">Tệp tin hoàn chỉnh (File)</td>
                    <td className="p-3.5 font-bold text-purple-300">Khối riêng lẻ (Block + Unique ID)</td>
                    <td className="p-3.5 font-bold text-emerald-300">Đối tượng (Data + Metadata + ID)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3.5 font-semibold text-white">Cấu trúc tổ chức</td>
                    <td className="p-3.5">Cây thư mục phân cấp (Hierarchy)</td>
                    <td className="p-3.5">Không có cấu trúc tệp (Raw Block Device)</td>
                    <td className="p-3.5">Không gian phẳng (Flat Namespace)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3.5 font-semibold text-white">Giao thức truy xuất</td>
                    <td className="p-3.5">NFS, SMB / CIFS qua mạng LAN</td>
                    <td className="p-3.5">Fiber Channel, iSCSI, NVMe-oF</td>
                    <td className="p-3.5">RESTful API qua HTTP / HTTPS (S3 API)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3.5 font-semibold text-white">Hiệu năng &amp; Độ trễ</td>
                    <td className="p-3.5">Trung bình (Vài ms đến chục ms)</td>
                    <td className="p-3.5 font-bold text-purple-300">Cực cao, độ trễ mili-giây (&lt;1ms)</td>
                    <td className="p-3.5">Độ trễ cao hơn (10 - 100ms), thông lượng lớn</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3.5 font-semibold text-white">Ứng dụng tối ưu nhất</td>
                    <td className="p-3.5">Chia sẻ tệp văn phòng, lưu trữ home directory</td>
                    <td className="p-3.5 font-bold text-purple-300">Database quan hệ &amp; Boot Volume máy ảo</td>
                    <td className="p-3.5 font-bold text-emerald-300">Data Lake, Sao lưu thảm họa, Video, Ảnh tĩnh</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Golden Rule Callout */}
            <div className="rounded-xl border border-sky-400/30 bg-sky-950/20 p-4 text-xs text-slate-300 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <strong className="text-sky-300">Công thức khắc cốt ghi tâm:</strong> Muốn chia sẻ tệp nội bộ chọn <strong>NAS (File)</strong>; muốn chạy Cơ sở dữ liệu và Máy ảo đòi hỏi IOPS cao chọn <strong>Block Storage</strong>; muốn lưu trữ hàng tỷ tệp tin phi cấu trúc vô hạn chọn <strong>Object Storage</strong>.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: END-TO-END DATA PIPELINE */}
        {activeTab === "data_pipeline" && (
          <div className="mt-6 space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase">
                HÀNH TRÌNH VÒNG ĐỜI DỮ LIỆU ĐÁM MÂY (END-TO-END DATA LIFECYCLE)
              </span>
              <button
                onClick={handleTriggerPipeline}
                disabled={isSimulatingPipeline}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-md cursor-pointer ${
                  isSimulatingPipeline
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/25 active:scale-95"
                }`}
              >
                {isSimulatingPipeline ? "⏳ Đang truyền gói tin..." : "▶ Chạy Mô Phỏng Luồng Dữ Liệu"}
              </button>
            </div>

            {/* 4 Pipeline Stages */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Stage 1 */}
              <div
                className={`rounded-2xl border p-4 transition-all duration-500 ${
                  pipelineStage === 1
                    ? "border-sky-400 bg-sky-500/15 ring-2 ring-sky-400/40 shadow-lg"
                    : pipelineStage > 1
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-300">CHẶNG 1</span>
                  {pipelineStage > 1 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <span className="text-slate-400">Ingestion</span>
                  )}
                </div>
                <h4 className="mt-2 font-bold text-white text-sm">Thu Thập Dữ Liệu Gốc</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Dữ liệu phát sinh từ nhà máy IoT, máy ảo VMware, CSDL Oracle và hồ sơ doanh nghiệp.
                </p>
                <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  • 250 GB dữ liệu thô<br />
                  • Giao thức MQTT / REST / POSIX
                </div>
              </div>

              {/* Stage 2 */}
              <div
                className={`rounded-2xl border p-4 transition-all duration-500 ${
                  pipelineStage === 2
                    ? "border-purple-400 bg-purple-500/15 ring-2 ring-purple-400/40 shadow-lg"
                    : pipelineStage > 2
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="rounded bg-purple-500/20 px-2 py-0.5 text-purple-300">CHẶNG 2</span>
                  {pipelineStage > 2 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <span className="text-slate-400">Processing</span>
                  )}
                </div>
                <h4 className="mt-2 font-bold text-white text-sm">Phân Rã Khối &amp; Khử Trùng Lặp</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Xé nhỏ thành các Block 4KB kèm Unique ID; nén dữ liệu và khử trùng lặp (Deduplication).
                </p>
                <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  • Giảm 60% dung lượng băng thông<br />
                  • Gắn thẻ Metadata mô tả ngữ cảnh
                </div>
              </div>

              {/* Stage 3 */}
              <div
                className={`rounded-2xl border p-4 transition-all duration-500 ${
                  pipelineStage === 3
                    ? "border-blue-400 bg-blue-500/15 ring-2 ring-blue-400/40 shadow-lg"
                    : pipelineStage > 3
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="rounded bg-blue-500/20 px-2 py-0.5 text-blue-300">CHẶNG 3</span>
                  {pipelineStage > 3 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <span className="text-slate-400">Transfer</span>
                  )}
                </div>
                <h4 className="mt-2 font-bold text-white text-sm">Đường Hầm Mã Hóa In-Transit</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Truyền qua đường truyền bảo mật TLS 1.3 với Transport Optimization đa luồng song song.
                </p>
                <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  • Mã hóa đầu cuối AES-256<br />
                  • Băng thông đẩy lên 850 Mbps
                </div>
              </div>

              {/* Stage 4 */}
              <div
                className={`rounded-2xl border p-4 transition-all duration-500 ${
                  pipelineStage === 4
                    ? "border-emerald-400 bg-emerald-500/20 ring-2 ring-emerald-400/50 shadow-lg"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300">CHẶNG 4</span>
                  {pipelineStage === 4 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <span className="text-slate-400">Store &amp; Protect</span>
                  )}
                </div>
                <h4 className="mt-2 font-bold text-white text-sm">Lưu Đa Vùng &amp; Diễn Tập Khôi Phục</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Lưu trữ trên kho Cloud Vault bất biến (WORM), sao lưu định kỳ và sẵn sàng RTO &lt; 5 phút.
                </p>
                <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-700/40 pt-2">
                  • Multi-Region Replication<br />
                  • Tuân thủ tiêu chuẩn ISO / GDPR
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TAM HÙNG AWS VS AZURE VS GCP BATTLEFIELD */}
        {activeTab === "big_three" && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  id: "aws",
                  name: "Amazon Web Services (AWS)",
                  icon: "🟠",
                  badge: "Tiên Phong Số 1",
                  objectSvc: "Amazon S3 (Simple Storage Service)",
                  blockSvc: "Amazon EBS (Elastic Block Store)",
                  dbSvc: "Amazon RDS, Aurora, DynamoDB"
                },
                {
                  id: "azure",
                  name: "Microsoft Azure",
                  icon: "🔵",
                  badge: "Tối Ưu Doanh Nghiệp",
                  objectSvc: "Azure Blob Storage",
                  blockSvc: "Azure Managed Disks (Ultra, Premium)",
                  dbSvc: "Azure SQL Database, Cosmos DB"
                },
                {
                  id: "gcp",
                  name: "Google Cloud Platform (GCP)",
                  icon: "🔴",
                  badge: "Đỉnh Cao Big Data & AI",
                  objectSvc: "Google Cloud Storage (GCS)",
                  blockSvc: "Google Persistent Disk (PD)",
                  dbSvc: "Cloud SQL, Cloud Spanner, BigQuery"
                }
              ].map((p) => {
                const isSelected = selectedCloudProvider === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedCloudProvider(p.id)}
                    className={`rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-amber-400 bg-amber-500/15 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/20"
                        : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{p.icon}</span>
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 font-semibold">
                        {p.badge}
                      </span>
                    </div>
                    <h4 className="mt-2 text-base font-bold text-white">{p.name}</h4>
                    <div className="mt-2 space-y-1 text-xs text-slate-300">
                      <div>• Object: <strong className="text-emerald-300">{p.objectSvc}</strong></div>
                      <div>• Block: <strong className="text-purple-300">{p.blockSvc}</strong></div>
                      <div>• Database: <strong className="text-amber-300">{p.dbSvc}</strong></div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                🔑 KHẨU QUYẾT TRỌNG TÂM MỤC VI.2
              </span>
              <div className="mt-1 text-base font-extrabold text-white">
                3 &quot;Ông lớn&quot; Cung Cấp Dịch Vụ Cloud Database: <span className="text-amber-400">AWS — Azure — GCP</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Chiến lược bảo vệ dữ liệu cốt lõi: Kết hợp công cụ quản trị chuyên biệt và chạy <strong>sao lưu định kỳ (Regular Backups)</strong> tự động.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: EXAM TRAPS RADAR */}
        {activeTab === "exam_radar" && (
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-red-500/30 bg-red-950/20 p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                  RADAR CẢNH BÁO BẪY ĐIỂM LIỆT THI TRẮC NGHIỆM CHƯƠNG 7
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Tổng hợp 4 bẫy tư duy thường gặp nhất trong các đề thi môn Điện toán đám mây liên quan đến Lưu trữ dữ liệu
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  trapNo: "BẪY 1",
                  title: "Nhầm lẫn cấp độ truy xuất giữa NAS và SAN",
                  trap: "Đề thi gài: 'NAS cho phép truy xuất dữ liệu ở cấp độ khối (Block-level)' hoặc 'SAN chạy trên mạng LAN thông thường'.",
                  truth: "ĐÚNG LÀ: NAS là File-level (LAN thông thường, NFS/SMB). SAN là Block-level (mạng riêng cáp quang Fiber Channel tốc độ cao)."
                },
                {
                  trapNo: "BẪY 2",
                  title: "Cấu trúc 3 thành phần của Object Storage",
                  trap: "Đề thi hỏi đối tượng trong Object Storage gồm những gì và đưa vào 'Thư mục mẹ' hoặc 'Đường dẫn tệp tin (File Path)'.",
                  truth: "ĐÚNG LÀ: Object Storage chỉ gồm đúng 3 thành phần không thể tách rời: Data Payload + Metadata + Unique ID."
                },
                {
                  trapNo: "BẪY 3",
                  title: "Thứ tự 3 bước quy trình sao lưu Cloud",
                  trap: "Đề thi đảo thứ tự: 'Transfer data ➔ Select data ➔ Store data'.",
                  truth: "ĐÚNG LÀ: Bước 1: Select backup data ➔ Bước 2: Transfer data to the cloud ➔ Bước 3: Store and manage backup data."
                },
                {
                  trapNo: "BẪY 4",
                  title: "Lựa chọn loại lưu trữ cho Database & Máy ảo",
                  trap: "Đề thi đề xuất dùng Object Storage làm Boot Volume máy ảo và chạy hệ cơ sở dữ liệu quan hệ vì giá rẻ.",
                  truth: "ĐÚNG LÀ: Cả Database Storage và Virtual Machine bắt buộc dùng Block Storage (EBS/Persistent Disk/Azure Disks) vì cần IOPS cao và độ trễ mili-giây."
                }
              ].map((t, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
                      {t.trapNo}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Trắc nghiệm</span>
                  </div>
                  <h5 className="mt-2 text-sm font-bold text-white">{t.title}</h5>
                  <div className="mt-2 rounded-lg bg-red-950/30 p-2.5 text-[11px] text-red-200 border border-red-500/20">
                    <strong>Bẫy gài:</strong> {t.trap}
                  </div>
                  <div className="mt-2 rounded-lg bg-emerald-950/30 p-2.5 text-[11px] text-emerald-200 border border-emerald-500/20">
                    <strong>Khắc cốt ghi tâm:</strong> {t.truth}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* LAB STATIONS JUMP-LINKS SECTION */}
      <div className="relative z-10 mt-10">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              BỆ PHÓNG TRẠM THỰC HÀNH TƯƠNG TÁC (VISUALIZER LAB LAUNCHPAD)
            </span>
            <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
              8 Trạm visualizer thực hành chuyên sâu theo từng mục bài học
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            Nhấp thẻ để nhảy trực tiếp tới Visualizer
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {LAB_STATIONS.map((lab) => (
            <button
              key={lab.id}
              onClick={() => scrollToSection(lab.targetId)}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-4 text-left transition-all hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-sky-500/10 cursor-pointer active:scale-98"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{lab.icon}</span>
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-sky-300">
                    {lab.sectionLabel}
                  </span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {lab.title}
                </h4>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {lab.desc}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                <span>Vào trạm thực hành</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* QUICK KEYTERMS SEARCH SECTION */}
      <div className="relative z-10 mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-sky-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              TRA CỨU NHANH THUẬT NGỮ CHƯƠNG 7 (QUICK TERMINOLOGY LOOKUP)
            </span>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="🔍 Tìm thuật ngữ (NAS, SAN, EBS, Object...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-1.5 text-xs text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 max-h-60 overflow-y-auto pr-1">
          {filteredKeyterms.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-300 truncate">{item.term}</span>
                <button
                  onClick={() => copyToClipboard(item.term, item.id)}
                  title="Copy thuật ngữ"
                  className="text-slate-500 hover:text-slate-300 transition-colors p-1"
                >
                  {copiedId === item.id ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px]">
                <span className={`rounded px-1.5 py-0.2 font-semibold border ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-sky-400 hover:underline cursor-pointer"
                >
                  {item.sectionLabel} ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
