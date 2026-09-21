"use client";
import React, { useState, useMemo } from "react";
import {
  Cloud,
  Layers,
  Database,
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
  Eye,
  Boxes,
  Lock,
  Globe,
  Users,
  Server,
  Terminal,
  Cpu,
  RefreshCw,
  GitBranch,
  Copy
} from "lucide-react";

/* ============================================================
   DATA STRUCTURES FOR CHAPTER 4 HERO BANNER
   ============================================================ */

const TELEMETRY_METRICS = [
  { label: "Ranh Giới Quản Lý", value: "2 / 9 Tầng", note: "Dev: Apps & Data", color: "text-emerald-400" },
  { label: "Tốc Độ Ra Mắt (TTM)", value: "Giảm 70%", note: "Từ 8 Tuần ➔ 5 Phút", color: "text-teal-400" },
  { label: "Quy Mô Co Giãn (FaaS)", value: "0 ➔ 10K+ Req", note: "Scale to Zero", color: "text-amber-400" },
  { label: "Độ Sẵn Sàng (SLA)", value: "99.9% - 99.99%", note: "Zero-Downtime Deploy", color: "text-purple-400" }
];

const QUICK_KEYTERMS = [
  {
    id: "paas-def",
    term: "Platform as a Service (PaaS)",
    sectionId: "cloud-ch4-s1-1-definition",
    sectionLabel: "Mục 1.1",
    summary: "Mô hình cung cấp nền tảng hoàn chỉnh để lập trình, chạy và quản lý ứng dụng mà không cần quản trị máy chủ vật lý.",
    badge: "Khái niệm",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "four-components",
    term: "4 Thành Phần Cốt Lõi PaaS",
    sectionId: "cloud-ch4-s1-1-definition",
    sectionLabel: "Mục 1.1",
    summary: "4 Thành phần bắt buộc: Hệ điều hành (OS), Môi trường phát triển (Dev env), CSDL (DBMS) và Máy chủ Web (Web server).",
    badge: "Kiến trúc",
    badgeColor: "bg-teal-900/60 text-teal-300 border-teal-500/40"
  },
  {
    id: "shared-responsibility",
    term: "Ranh Giới Trách Nhiệm PaaS",
    sectionId: "cloud-ch4-s1-1-definition",
    sectionLabel: "Mục 1.1",
    summary: "Quy tắc vàng thi cử: Developer CHỈ quản lý đúng 2 tầng là Applications (Ứng dụng) và Data (Dữ liệu).",
    badge: "Trách nhiệm",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "history-pioneers",
    term: "Heroku & GAE (Giai Đoạn 1)",
    sectionId: "cloud-ch4-s1-2-history",
    sectionLabel: "Mục 1.2",
    summary: "Hai nền tảng tiên phong đầu 2000s: Heroku (2007, Ruby) và Google App Engine (2008, Python), đặt nền móng cho PaaS.",
    badge: "Lịch sử",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "auto-scaling",
    term: "Tự Động Co Giãn (Auto-scaling)",
    sectionId: "cloud-ch4-s2-1-core-benefits",
    sectionLabel: "Mục 2.1",
    summary: "Cơ chế tự động tăng/giảm container theo tải thực tế mà không cần kỹ sư cấu hình thủ công.",
    badge: "Lợi ích",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "one-click-deploy",
    term: "One-Click Deployment & CI/CD",
    sectionId: "cloud-ch4-s2-1-core-benefits",
    sectionLabel: "Mục 2.1",
    summary: "Triển khai một chạm: Đóng gói mã nguồn qua Buildpacks, tự động chạy kiểm thử và cập nhật live zero-downtime.",
    badge: "Lợi ích",
    badgeColor: "bg-teal-900/60 text-teal-300 border-teal-500/40"
  },
  {
    id: "vendor-lockin",
    term: "Khóa Nhà Cung Cấp (Vendor Lock-in)",
    sectionId: "cloud-ch4-s3-1-challenges",
    sectionLabel: "Mục 3.1",
    summary: "Rủi ro bị phụ thuộc vào API và CSDL độc quyền của hãng đám mây, khiến chi phí di dời (refactoring) cực kỳ đắt đỏ.",
    badge: "Rủi ro",
    badgeColor: "bg-rose-900/60 text-rose-300 border-rose-500/40"
  },
  {
    id: "gae",
    term: "Google App Engine (GAE)",
    sectionId: "cloud-ch4-s4-1-real-world-titans",
    sectionLabel: "Mục 4.1",
    summary: "PaaS của Google Cloud, nổi bật với co giãn siêu tốc và tính năng phân chia lưu lượng (Traffic Splitting) cho A/B testing.",
    badge: "Thực tế",
    badgeColor: "bg-red-900/60 text-red-300 border-red-500/40"
  },
  {
    id: "azure-app-service",
    term: "Microsoft Azure App Service",
    sectionId: "cloud-ch4-s4-1-real-world-titans",
    sectionLabel: "Mục 4.1",
    summary: "PaaS toàn diện của Microsoft hỗ trợ sâu .NET, tích hợp chặt với GitHub Actions và Active Directory doanh nghiệp.",
    badge: "Thực tế",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "openshift-k8s",
    term: "Red Hat OpenShift (Kubernetes)",
    sectionId: "cloud-ch4-s4-1-real-world-titans",
    sectionLabel: "Mục 4.1",
    summary: "PaaS mã nguồn mở cấp doanh nghiệp xây dựng trực tiếp trên nền tảng KUBERNETES, hỗ trợ Multi-cloud và Hybrid cloud.",
    badge: "Thực tế",
    badgeColor: "bg-rose-900/60 text-rose-300 border-rose-500/40"
  },
  {
    id: "ibm-watson",
    term: "IBM Cloud Foundry (Watson AI)",
    sectionId: "cloud-ch4-s4-1-real-world-titans",
    sectionLabel: "Mục 4.1",
    summary: "PaaS mã nguồn mở của IBM quản lý trọn vòng đời ứng dụng, tích hợp độc quyền trí tuệ nhân tạo IBM Watson AI.",
    badge: "Thực tế",
    badgeColor: "bg-cyan-900/60 text-cyan-300 border-cyan-500/40"
  },
  {
    id: "enterprise-six-values",
    term: "6 Chiều Giá Trị Doanh Nghiệp",
    sectionId: "cloud-ch4-s5-1-business-values",
    sectionLabel: "Mục 5.1",
    summary: "Khẩu quyết vàng: Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn.",
    badge: "Doanh nghiệp",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "serverless-faas",
    term: "Serverless & FaaS (Scale-to-Zero)",
    sectionId: "cloud-ch4-s6-1-future-trends",
    sectionLabel: "Mục 6.1",
    summary: "Kiến trúc thực thi theo sự kiện (Event-driven), tự động co giãn về 0 khi không có tải và tính phí theo mili-giây.",
    badge: "Tương lai",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/40"
  },
  {
    id: "paas-ux",
    term: "6 Tiêu Chí Trải Nghiệm PaaS UX",
    sectionId: "cloud-ch4-s7-1-ux-and-summary",
    sectionLabel: "Mục 7.1",
    summary: "Hiệu năng, Tính khả dụng (SLA 99.9%+), Tích hợp công cụ, Giao diện Dashboard/CLI, Hỗ trợ 24/7 và Bảo mật tuân thủ.",
    badge: "Tổng kết",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  }
];

const LAB_HUBS = [
  {
    id: "lab-1",
    title: "4 Thành Phần PaaS & Ranh Giới Trách Nhiệm",
    targetId: "cloud-ch4-s1-1-definition",
    sectionLabel: "Mục I.1 & I.4",
    icon: "🧱",
    color: "from-emerald-500 to-teal-500",
    desc: "Mô phỏng 4 tầng OS, Dev env, Database, Web server và công tắc đối soát trách nhiệm On-premise vs IaaS vs PaaS vs SaaS."
  },
  {
    id: "lab-2",
    title: "Lịch Sử Tiến Hóa 4 Giai Đoạn & 4 Động Lực",
    targetId: "cloud-ch4-s1-2-history",
    sectionLabel: "Mục I.2 & I.3",
    icon: "⏳",
    color: "from-teal-500 to-cyan-500",
    desc: "Dòng thời gian tương tác từ Heroku/GAE đầu 2000s đến kỷ nguyên điều phối Kubernetes và Hybrid Cloud hiện đại."
  },
  {
    id: "lab-3",
    title: "Bàn Đo Lợi Ích PaaS: One-Click CI/CD & Đa Ngôn Ngữ",
    targetId: "cloud-ch4-s2-1-core-benefits",
    sectionLabel: "Mục II",
    icon: "⚡",
    color: "from-emerald-500 to-green-500",
    desc: "Giả lập quy trình triển khai tự động 4 bước trong 3 giây, bộ chọn 6 ngôn ngữ lập trình và ma trận đối soát ROI."
  },
  {
    id: "lab-4",
    title: "Cảnh Báo Nhược Điểm & Giả Lập Vendor Lock-in",
    targetId: "cloud-ch4-s3-1-challenges",
    sectionLabel: "Mục III",
    icon: "⚠️",
    color: "from-rose-500 to-amber-500",
    desc: "Hộp cát đo lường % code bị kẹt thư viện độc quyền, thời gian tái cấu trúc và 4 chiến lược phòng vệ chuẩn mở."
  },
  {
    id: "lab-5",
    title: "Võ Đài Đối Sánh: 4 Nền Tảng PaaS Tiêu Biểu",
    targetId: "cloud-ch4-s4-1-real-world-titans",
    sectionLabel: "Mục IV",
    icon: "🏛️",
    color: "from-blue-500 to-indigo-500",
    desc: "Đối đầu trực tiếp Google App Engine vs Azure App Service vs Red Hat OpenShift (Kubernetes) vs IBM Cloud Foundry (Watson AI)."
  },
  {
    id: "lab-6",
    title: "Bảng Điều Khiển: 6 Chiều Giá Trị Doanh Nghiệp",
    targetId: "cloud-ch4-s5-1-business-values",
    sectionLabel: "Mục V",
    icon: "🏢",
    color: "from-amber-500 to-orange-500",
    desc: "Khẩu quyết Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn qua 2 lăng kính Startup & Enterprise."
  },
  {
    id: "lab-7",
    title: "Tương Lai PaaS: Serverless FaaS Sandbox",
    targetId: "cloud-ch4-s6-1-future-trends",
    sectionLabel: "Mục VI",
    icon: "🔮",
    color: "from-purple-500 to-pink-500",
    desc: "Giả lập thực thi Event-driven, cơ chế Cold/Warm start, tự động co giãn về 0 (Scale to Zero) và radar 7 xu hướng công nghệ."
  },
  {
    id: "lab-8",
    title: "Ma Trận Tổng Kết 8 Trụ Cột Tri Thức & 6 Tiêu Chí UX",
    targetId: "cloud-ch4-s7-1-ux-and-summary",
    sectionLabel: "Mục VII",
    icon: "🎓",
    color: "from-emerald-500 to-teal-500",
    desc: "Tra cứu nhanh toàn diện các công thức cốt lõi, 6 tiêu chuẩn PaaS UX và các bẫy điểm số bắt buộc phải thuộc khi đi thi."
  }
];

export default function Chapter4HeroBanner() {
  const [activeTab, setActiveTab] = useState("xray"); // 'xray' | 'roadmap' | 'exam' | 'labs'
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [xrayModel, setXrayModel] = useState("paas"); // 'onprem' | 'iaas' | 'paas' | 'saas'

  // Smooth scroll with highlight pulse
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-4", "ring-emerald-400", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-emerald-400");
      }, 2500);
    }
  };

  // Copy formula
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered terms
  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return QUICK_KEYTERMS.slice(0, 6);
    return QUICK_KEYTERMS.filter(
      (item) =>
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#121815] via-[#151e1a] to-[#0e1411] p-6 md:p-8 text-neutral-200 shadow-2xl">
      {/* Background Decorative Radial Glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      {/* ============================================================
          1. HEADER & LIVE TELEMETRY STATUS BAR
          ============================================================ */}
      <div className="relative z-10 space-y-5">
        {/* Title Badges & Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800/80 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>CHƯƠNG 4 • PLATFORM AS A SERVICE (PaaS)</span>
            </div>
            <h2 className="mt-2.5 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Trung Tâm Chỉ Huy Nền Tảng Điện Toán Đám Mây
            </h2>
            <p className="mt-1 text-xs md:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              Tổng quan toàn diện kiến trúc PaaS: Ranh giới trách nhiệm chia sẻ, One-Click CI/CD, 4 nền tảng thực tế GAE, Azure, OpenShift (Kubernetes), IBM Watson AI và tương lai Serverless FaaS.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 self-start lg:self-auto">
            <button
              onClick={() => scrollToSection("cloud-ch4-s1-1-definition")}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-emerald-950/50 hover:from-emerald-500 hover:to-teal-500 transition-all cursor-pointer active:scale-95"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Vào Học Ngay</span>
            </button>
            <button
              onClick={() => scrollToSection("cloud-ch4-s7-1-ux-and-summary")}
              className="flex items-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-900/80 px-3 py-2.5 text-xs font-bold text-neutral-300 hover:border-neutral-600 hover:text-white transition-all cursor-pointer"
            >
              <Target className="h-3.5 w-3.5 text-amber-400" />
              <span>Ma Trận Thi Cử</span>
            </button>
          </div>
        </div>

        {/* 4 LIVE TELEMETRY METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {TELEMETRY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3.5 backdrop-blur-sm transition-all hover:border-emerald-500/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-400">{metric.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className={`mt-1.5 text-xl md:text-2xl font-black ${metric.color}`}>
                {metric.value}
              </div>
              <span className="text-[10px] text-neutral-400 block mt-0.5">{metric.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          2. QUICK KEYTERMS SNIFFER (TÌM KIẾM NHANH THUẬT NGỮ)
          ============================================================ */}
      <div className="relative z-10 mt-6 rounded-2xl border border-neutral-800 bg-black/40 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Tra Cứu Nhanh Thuật Ngữ Cốt Lõi (Keyterms Sniffer):
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Gõ từ khóa (K8s, FaaS, Lock-in, GAE...)"
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900/90 px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filtered Term Cards */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filteredTerms.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-xl border border-neutral-800/80 bg-neutral-900/50 p-3 transition-all hover:border-emerald-500/40 hover:bg-neutral-900/80"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {item.term}
                  </h4>
                  <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-neutral-800/60 pt-2 text-[10px]">
                <span className="text-neutral-500 font-semibold">{item.sectionLabel}</span>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <span>Xem bài giảng</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          3. 4 DYNAMIC PERSPECTIVES SWITCHER (4 GÓC NHÌN ĐỘNG)
          ============================================================ */}
      <div className="relative z-10 mt-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
          <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
            <button
              onClick={() => setActiveTab("xray")}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "xray"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>🏢 X-Ray Mặt Cắt PaaS</span>
            </button>
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "roadmap"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-950/40"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>🗺️ Lộ Trình 4 Chặng</span>
            </button>
            <button
              onClick={() => setActiveTab("exam")}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "exam"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              <span>🎯 Trọng Số Đề Thi</span>
            </button>
            <button
              onClick={() => setActiveTab("labs")}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "labs"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-950/40"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Boxes className="h-3.5 w-3.5" />
              <span>🕹️ Trung Tâm 8 Lab Hub</span>
            </button>
          </div>
        </div>

        {/* ----------------------------------------------------
            TAB 1: X-RAY MẶT CẮT KIẾN TRÚC & SHARED RESPONSIBILITY
            ---------------------------------------------------- */}
        {activeTab === "xray" && (
          <div className="mt-5 space-y-5 rounded-2xl border border-emerald-500/20 bg-neutral-900/70 p-5 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Mặt Cắt 4 Tầng Kỹ Thuật Của PaaS &amp; So Sánh Trách Nhiệm
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  Ranh Giới Trách Nhiệm Chia Sẻ (Shared Responsibility Matrix)
                </h3>
              </div>

              {/* Model Switcher */}
              <div className="flex rounded-lg bg-black/60 p-1 border border-neutral-800">
                {[
                  { id: "onprem", label: "On-Premise" },
                  { id: "iaas", label: "IaaS" },
                  { id: "paas", label: "PaaS (Hiện Tại)" },
                  { id: "saas", label: "SaaS" }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setXrayModel(m.id)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded transition-all ${
                      xrayModel === m.id
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 PaaS Essential Layers Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-3.5">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
                  <span>🌐</span> TẦNG 4: WEB SERVER
                </div>
                <h4 className="text-xs font-bold text-white mt-1">Cổng Ingress &amp; Cân Bằng Tải</h4>
                <p className="text-[11px] text-neutral-300 mt-1">Nginx, Reverse Proxy, Auto-SSL TLS, phân phối lưu lượng.</p>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <span>🗄️</span> TẦNG 3: DATABASE
                </div>
                <h4 className="text-xs font-bold text-white mt-1">Hệ Quản Trị CSDL Sẵn Có</h4>
                <p className="text-[11px] text-neutral-300 mt-1">PostgreSQL, MySQL, Redis, tự động sao lưu và nhân bản HA.</p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <span>⚙️</span> TẦNG 2: DEV ENVIRONMENT
                </div>
                <h4 className="text-xs font-bold text-white mt-1">Bộ Runtimes &amp; Buildpacks</h4>
                <p className="text-[11px] text-neutral-300 mt-1">Node.js, Python, Java, Go, .NET, tự nhận diện mã nguồn.</p>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-3.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                  <span>🖥️</span> TẦNG 1: OPERATING SYSTEM
                </div>
                <h4 className="text-xs font-bold text-white mt-1">Hệ Điều Hành Container Hóa</h4>
                <p className="text-[11px] text-neutral-300 mt-1">Linux/Windows tối ưu, nhà cung cấp tự động vá lỗi hạt nhân.</p>
              </div>
            </div>

            {/* Model Insight Alert */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Quy Chuẩn Phân Phối Trách Nhiệm Trong {xrayModel.toUpperCase()}:
                  </span>
                  <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                    {xrayModel === "onprem" && "Bạn tự chịu trách nhiệm 100% cho toàn bộ 9 tầng: Mua máy chủ vật lý, kéo cáp mạng, cài OS, vá lỗi, cài CSDL và viết code."}
                    {xrayModel === "iaas" && "Cloud chỉ quản lý phần cứng ảo hóa và mạng. Bạn phải tự cài đặt OS, cấu hình Web server, vá lỗi và tự vận hành môi trường chạy."}
                    {xrayModel === "paas" && "Cloud quản lý toàn bộ 7 tầng hạ tầng, OS, CSDL, Web server. BẠN CHỈ QUẢN LÝ 2 TẦNG: Applications (Ứng dụng) và Data (Dữ liệu)!"}
                    {xrayModel === "saas" && "Nhà cung cấp quản lý 100% từ phần cứng đến ứng dụng. Người dùng chỉ truy cập qua trình duyệt Web, zero kỹ thuật."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 2: LỘ TRÌNH 4 CHẶNG TRI THỨC
            ---------------------------------------------------- */}
        {activeTab === "roadmap" && (
          <div className="mt-5 space-y-4 rounded-2xl border border-teal-500/20 bg-neutral-900/70 p-5 backdrop-blur-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Hành Trình Khám Phá Tri Thức Toàn Bộ Chương 4
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                4 Chặng Học Tập Tối Ưu Cho Kỳ Thi
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                {
                  step: "Chặng 1",
                  title: "Khái Niệm Cốt Lõi, 4 Thành Phần & Lịch Sử",
                  sections: "Mục I (I.1, I.2)",
                  target: "cloud-ch4-s1-1-definition",
                  summary: "Nắm vững định nghĩa PaaS, 4 thành phần OS, Dev env, Database, Web server, mô hình trách nhiệm và 4 giai đoạn tiến hóa từ Heroku/GAE."
                },
                {
                  step: "Chặng 2",
                  title: "Cán Cân 4 Lợi Ích & 3 Thách Thức Vendor Lock-in",
                  sections: "Mục II & III",
                  target: "cloud-ch4-s2-1-core-benefits",
                  summary: "Phân tích 4 lợi ích lớn (One-click deploy, Auto-scaling, Zero-infra) đối trọng với rủi ro bảo mật, khóa nhà cung cấp và tương thích hệ thống cũ."
                },
                {
                  step: "Chặng 3",
                  title: "4 Nền Tảng Thực Tế & 6 Chiều Giá Trị Doanh Nghiệp",
                  sections: "Mục IV & V",
                  target: "cloud-ch4-s4-1-real-world-titans",
                  summary: "Khảo sát GAE (Traffic Splitting), Azure (.NET), OpenShift (Kubernetes), IBM (Watson AI) cùng khẩu quyết 6 chữ Hơn của doanh nghiệp."
                },
                {
                  step: "Chặng 4",
                  title: "Kỷ Nguyên Serverless FaaS & 6 Tiêu Chí PaaS UX",
                  sections: "Mục VI & VII",
                  target: "cloud-ch4-s6-1-future-trends",
                  summary: "Kiến trúc Event-driven, Scale-to-Zero, tính phí mili-giây, 7 làn sóng công nghệ tương lai và 6 tiêu chí trải nghiệm người dùng chuẩn quốc tế."
                }
              ].map((stage, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-black/40 p-4 hover:border-teal-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        {stage.step}
                      </span>
                      <span className="text-[11px] text-neutral-400 font-semibold">{stage.sections}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white mt-2">{stage.title}</h4>
                    <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">{stage.summary}</p>
                  </div>

                  <button
                    onClick={() => scrollToSection(stage.target)}
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 py-1.5 text-xs font-bold text-neutral-200 hover:border-teal-500 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Học Chặng Này</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 3: MA TRẬN TRỌNG SỐ ĐỀ THI & BẪY ĐIỂM SỐ
            ---------------------------------------------------- */}
        {activeTab === "exam" && (
          <div className="mt-5 space-y-4 rounded-2xl border border-amber-500/20 bg-neutral-900/70 p-5 backdrop-blur-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Phân Tích Cấu Trúc Câu Hỏi Thi Trắc Nghiệm Toàn Chương 4
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                Bento Grid Ma Trận Trọng Số &amp; Cảnh Báo Bẫy Điểm Số
              </h3>
            </div>

            {/* 5 Bento Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  id: "bento-1",
                  weight: "25% Đề Thi",
                  title: "Kiến Trúc & 4 Thành Phần PaaS",
                  gotcha: "Bẫy: Dev chỉ quản lý Applications và Data. OS do Cloud quản lý.",
                  formula: "PaaS = OS + Dev Env + DB + Web Server",
                  color: "text-emerald-400"
                },
                {
                  id: "bento-2",
                  weight: "20% Đề Thi",
                  title: "Lợi Ích Cốt Lõi & Chuyển Đổi CAPEX",
                  gotcha: "Bẫy: PaaS giúp chuyển đổi CAPEX thành OPEX, thanh toán Pay-as-you-go.",
                  formula: "OPEX + Auto-scaling + Zero-Infra",
                  color: "text-teal-400"
                },
                {
                  id: "bento-3",
                  weight: "20% Đề Thi",
                  title: "4 Nền Tảng Thực Tế (GAE, Azure, OpenShift, IBM)",
                  gotcha: "Bẫy: OpenShift gắn liền Kubernetes; IBM gắn liền Watson AI.",
                  formula: "OpenShift = K8s | IBM = Watson AI",
                  color: "text-blue-400"
                },
                {
                  id: "bento-4",
                  weight: "15% Đề Thi",
                  title: "Rủi Ro Vendor Lock-in & Phòng Vệ",
                  gotcha: "Bẫy: Dùng Docker chuẩn OCI và Adapter Pattern để chống Lock-in.",
                  formula: "Lock-in Risk ⚔️ OCI Docker Shield",
                  color: "text-rose-400"
                },
                {
                  id: "bento-5",
                  weight: "20% Đề Thi",
                  title: "Tương Lai: Serverless FaaS (Scale-to-Zero)",
                  gotcha: "Bẫy: FaaS kích hoạt theo sự kiện (Event-driven), co về 0 là 0 đồng.",
                  formula: "FaaS = Event-driven + Scale-to-Zero",
                  color: "text-purple-400"
                }
              ].map((block) => (
                <div
                  key={block.id}
                  className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-black/40 p-3.5 space-y-2.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black ${block.color}`}>{block.weight}</span>
                      <span className="text-[10px] text-neutral-500 uppercase">Trọng Tâm</span>
                    </div>
                    <h4 className="text-xs font-bold text-white mt-1">{block.title}</h4>
                    <div className="mt-2 rounded bg-neutral-900 p-2 text-[11px] text-amber-200/90 border border-amber-500/20">
                      <strong>⚠️ Bẫy Điểm Số:</strong> {block.gotcha}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-800/80 pt-2 text-[10px]">
                    <code className="text-neutral-400 font-mono line-clamp-1">{block.formula}</code>
                    <button
                      onClick={() => copyToClipboard(block.formula, block.id)}
                      className="shrink-0 text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === block.id ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === block.id ? "Đã chép" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 4: TRUNG TÂM CHỈ HUY 8 LAB MÔ PHỎNG (LABS HUB)
            ---------------------------------------------------- */}
        {activeTab === "labs" && (
          <div className="mt-5 space-y-4 rounded-2xl border border-purple-500/20 bg-neutral-900/70 p-5 backdrop-blur-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Trực Quan Hóa Tương Tác Cấp Cao (8 Visualizer Hub)
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                Trung Tâm Chỉ Huy 8 Phòng Thí Nghiệm Đám Mây Ảo
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {LAB_HUBS.map((lab) => (
                <div
                  key={lab.id}
                  className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-black/40 p-3.5 hover:border-purple-500/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{lab.icon}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                        {lab.sectionLabel}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white mt-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {lab.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-1 line-clamp-3 leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => scrollToSection(lab.targetId)}
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 py-1.5 text-xs font-bold text-purple-300 hover:bg-purple-900/50 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Mở &amp; Cuộn Đến Lab</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
