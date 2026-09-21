"use client";
import React, { useState, useMemo } from "react";
import {
  Shield,
  ShieldCheck,
  Lock,
  Key,
  UserCheck,
  Users,
  Smartphone,
  Server,
  Globe,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Activity,
  Sliders,
  Award,
  BarChart3,
  Search,
  ExternalLink,
  Info,
  RotateCcw,
  Check,
  AlertTriangle,
  Eye,
  Terminal,
  RefreshCw,
  Copy,
  ChevronRight,
  Database,
  Layers,
  Cpu,
  Target
} from "lucide-react";

/* ============================================================
   DATA STRUCTURES FOR CHAPTER 6 HERO BANNER (IDAAS)
   ============================================================ */

const TELEMETRY_METRICS = [
  {
    label: "Bộ Ba Nền Tảng",
    value: "3 Trụ Cột AAA",
    note: "AuthN • AuthZ • Account Mgmt",
    color: "text-blue-400",
    icon: ShieldCheck
  },
  {
    label: "Cán Cân Chiến Lược",
    value: "6 Lợi Ích / 5 Thách Thức",
    note: "Đánh đổi bảo mật & phụ thuộc",
    color: "text-emerald-400",
    icon: Sliders
  },
  {
    label: "Hiệu Năng Vận Hành",
    value: "Giảm 90% Thời Gian",
    note: "Cấp phát tự động chuẩn SCIM",
    color: "text-purple-400",
    icon: Zap
  },
  {
    label: "Tự Chủ Đám Mây",
    value: "Zero Vendor Lock-in",
    note: "Chuẩn mở OpenID & OpenSaaS",
    color: "text-amber-400",
    icon: Globe
  }
];

const QUICK_KEYTERMS = [
  {
    id: "term-idaas",
    term: "Identity as a Service (IDaaS)",
    sectionId: "cloud-ch6-s2-1-definition",
    sectionLabel: "Mục 2.1",
    summary: "Dịch vụ quản lý danh tính và quyền truy cập (IAM) được lưu trữ và vận hành hoàn toàn trên nền tảng điện toán đám mây.",
    badge: "Khái niệm",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "term-authn",
    term: "Authentication (AuthN)",
    sectionId: "cloud-ch6-s2-1-definition",
    sectionLabel: "Mục 2.1",
    summary: "Xác thực danh tính: Kiểm tra và chứng minh 'Bạn là ai?' qua mật khẩu, mã OTP, sinh trắc học hoặc thông báo đẩy.",
    badge: "Trụ cột AAA",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "term-authz",
    term: "Authorization (AuthZ)",
    sectionId: "cloud-ch6-s2-1-definition",
    sectionLabel: "Mục 2.1",
    summary: "Phân quyền truy cập: Xác định 'Bạn được phép làm gì?' trên tài nguyên dựa trên vai trò (RBAC) hoặc ngữ cảnh (ABAC).",
    badge: "Trụ cột AAA",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "term-acct",
    term: "Account Management",
    sectionId: "cloud-ch6-s2-1-definition",
    sectionLabel: "Mục 2.1",
    summary: "Quản trị trọn vòng đời tài khoản người dùng: tạo mới (Provisioning), cập nhật quyền và thu hồi tức thì (Deprovisioning).",
    badge: "Trụ cột AAA",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/40"
  },
  {
    id: "term-fidm",
    term: "Federated Identity (FIDM)",
    sectionId: "cloud-ch6-s4-1-fidm-core",
    sectionLabel: "Mục 4.1",
    summary: "Liên minh danh tính: Cho phép người dùng dùng 1 tài khoản duy nhất truy cập an toàn xuyên tổ chức qua bộ ba IdP, SP và Token.",
    badge: "Liên minh",
    badgeColor: "bg-indigo-900/60 text-indigo-300 border-indigo-500/40"
  },
  {
    id: "term-idp-sp",
    term: "Cặp Đôi IdP & SP",
    sectionId: "cloud-ch6-s4-1-fidm-core",
    sectionLabel: "Mục 4.1",
    summary: "IdP (Identity Provider) giữ mật khẩu & cấp Token; SP (Service Provider) cung cấp dịch vụ & chỉ xác minh Token, không giữ mật khẩu.",
    badge: "Kiến trúc",
    badgeColor: "bg-indigo-900/60 text-indigo-300 border-indigo-500/40"
  },
  {
    id: "term-sso",
    term: "Single Sign-On (SSO)",
    sectionId: "cloud-ch6-s5-1-sso-core",
    sectionLabel: "Mục 5.1",
    summary: "Đăng nhập 1 lần duy nhất tại IdP để truy cập đa ứng dụng. Điểm yếu chí tử: Rủi ro lỗi đơn lẻ (Single Point of Failure).",
    badge: "Giao thức",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "term-spof",
    term: "Single Point of Failure (SPOF)",
    sectionId: "cloud-ch6-s5-1-sso-core",
    sectionLabel: "Mục 5.1",
    summary: "Điểm lỗi đơn lẻ: Nếu tài khoản SSO bị lộ, tin tặc có chìa khóa vào tất cả hệ thống liên kết. Bắt buộc kích hoạt Adaptive MFA.",
    badge: "Bảo mật",
    badgeColor: "bg-red-900/60 text-red-300 border-red-500/40"
  },
  {
    id: "term-provisioning",
    term: "User Provisioning & SCIM",
    sectionId: "cloud-ch6-s6-1-provisioning-openid",
    sectionLabel: "Mục 6.1",
    summary: "Tự động cấp phát tài khoản từ hệ thống HR sang các ứng dụng đám mây qua giao thức chuẩn SCIM, loại bỏ thao tác thủ công.",
    badge: "Vòng đời",
    badgeColor: "bg-teal-900/60 text-teal-300 border-teal-500/40"
  },
  {
    id: "term-openid",
    term: "Chuẩn Mở OpenID (OP & RP)",
    sectionId: "cloud-ch6-s6-1-provisioning-openid",
    sectionLabel: "Mục 6.1",
    summary: "Giao thức mở cho phép đăng nhập nhiều web bằng 1 tài khoản: OP (OpenID Provider thay IdP) và RP (Relying Party thay SP).",
    badge: "Chuẩn mở",
    badgeColor: "bg-sky-900/60 text-sky-300 border-sky-500/40"
  },
  {
    id: "term-mdm-mam",
    term: "Phân Định MDM vs MAM",
    sectionId: "cloud-ch6-s7-1-mobile-id",
    sectionLabel: "Mục 7.1",
    summary: "MDM quản lý phần cứng toàn thiết bị (khóa máy, mã hóa ổ); MAM chỉ cô lập và quản lý dữ liệu ứng dụng công ty (rất hợp BYOD).",
    badge: "Di động",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "term-opensaas",
    term: "OpenSaaS (Mã Nguồn Mở)",
    sectionId: "cloud-ch6-s7-2-idaas-vendors",
    sectionLabel: "Mục 7.2",
    summary: "Giải pháp IDaaS duy nhất có tính chất mã nguồn mở trong giáo trình, giúp doanh nghiệp tự chủ mã nguồn và miễn phí bản quyền.",
    badge: "Nhà cung cấp",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  }
];

const LAB_HUBS = [
  {
    id: "lab-1",
    title: "Buồng Lái Bộ Ba Chức Năng AAA",
    targetId: "cloud-ch6-s2-1-definition",
    sectionLabel: "Mục II (2.1)",
    icon: "🪪",
    color: "from-blue-500 to-indigo-500",
    desc: "Khám phá bản chất Authentication, Authorization và Account Management qua hộp cát tương tác phân quyền RBAC/ABAC."
  },
  {
    id: "lab-2",
    title: "Cán Cân 6 Lợi Ích & 5 Thách Thức",
    targetId: "cloud-ch6-s3-1-benefits-challenges",
    sectionLabel: "Mục III (3.1)",
    icon: "⚖️",
    color: "from-emerald-500 to-teal-500",
    desc: "Cân đo chiến lược giữa tiết kiệm chi phí, mở rộng linh hoạt với rủi ro bảo mật tập trung và phụ thuộc nhà cung cấp."
  },
  {
    id: "lab-3",
    title: "Mô Phỏng Luồng Token Liên Minh (FIDM)",
    targetId: "cloud-ch6-s4-1-fidm-core",
    sectionLabel: "Mục IV (4.1)",
    icon: "🌐",
    color: "from-indigo-500 to-violet-500",
    desc: "Trực quan hóa luồng xác thực 4 bước giữa Người dùng, Identity Provider (IdP) và Service Provider (SP)."
  },
  {
    id: "lab-4",
    title: "Single Sign-On & Rủi Ro Domino Sandbox",
    targetId: "cloud-ch6-s5-1-sso-core",
    sectionLabel: "Mục V (5.1)",
    icon: "🔑",
    color: "from-amber-500 to-orange-500",
    desc: "Giả lập quy trình 4 bước SSO, rủi ro sụp đổ dây chuyền Single Point of Failure và lá chắn phòng thủ Adaptive MFA."
  },
  {
    id: "lab-5",
    title: "Vòng Đời Cấp Phát & Chuẩn Mở OpenID",
    targetId: "cloud-ch6-s6-1-provisioning-openid",
    sectionLabel: "Mục VI (6.1)",
    icon: "🔄",
    color: "from-teal-500 to-cyan-500",
    desc: "Băng chuyền 4 bước cấp phát tài khoản (SCIM) và luồng xác thực OpenID 5 bước đối soát cặp thuật ngữ OP vs RP."
  },
  {
    id: "lab-6",
    title: "Quản Lý Danh Tính Di Động (Mobile ID)",
    targetId: "cloud-ch6-s7-1-mobile-id",
    sectionLabel: "Mục VII.1",
    icon: "📱",
    color: "from-emerald-500 to-green-500",
    desc: "So sánh đối đầu MDM (quản lý phần cứng máy) vs MAM (cô lập ứng dụng công ty) và hộp cát giả lập Remote Wipe xóa dữ liệu từ xa."
  },
  {
    id: "lab-7",
    title: "Võ Đài 4 Giải Pháp & Bóc Tách Ping Identity",
    targetId: "cloud-ch6-s7-2-idaas-vendors",
    sectionLabel: "Mục VII.2",
    icon: "⚔️",
    color: "from-purple-500 to-pink-500",
    desc: "So sánh Ping Identity, SinglePoint, Symplified, OpenSaaS theo khung SSO + MFA + Access + Audit và quy trình 5 bước triển khai."
  },
  {
    id: "lab-8",
    title: "Ma Trận 8 Trụ Cột Tri Thức & Radar Bẫy Thi",
    targetId: "cloud-ch6-s8-1-summary",
    sectionLabel: "Mục VIII",
    icon: "🎓",
    color: "from-blue-600 to-purple-600",
    desc: "Hệ thống hóa toàn bộ kiến thức Chương 6, công thức ghi nhớ 1 dòng và radar cảnh báo các bẫy điểm liệt trắc nghiệm."
  }
];

export default function Chapter6HeroBanner() {
  const [activeTab, setActiveTab] = useState("tri_shield"); // 'tri_shield' | 'pipeline' | 'vendors' | 'radar'
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [activePipelineStep, setActivePipelineStep] = useState(1);
  const [showExamTraps, setShowExamTraps] = useState(false);

  // Smooth scroll with highlight pulse
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-4", "ring-indigo-400", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-indigo-400");
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

  const pipelineStages = [
    {
      step: 1,
      name: "Chặng 1: HR Onboarding & Provisioning",
      actor: "HR System ➔ Identity Cloud Directory (SCIM)",
      icon: "👤",
      badge: "Khởi Tạo Danh Tính",
      color: "border-blue-500 bg-blue-950/40 text-blue-300",
      desc: "Nhân viên mới gia nhập công ty. IDaaS tự động đồng bộ hồ sơ nhân sự qua giao thức SCIM, khởi tạo tài khoản trên danh bạ đám mây và gán quyền ban đầu theo vai trò (RBAC)."
    },
    {
      step: 2,
      name: "Chặng 2: Mobile MFA & Zero-Trust Enrollment",
      actor: "User Smartphone ➔ Authenticator Service",
      icon: "📱",
      badge: "Xác Thực Đa Yếu Tố",
      color: "border-emerald-500 bg-emerald-950/40 text-emerald-300",
      desc: "Người dùng đăng ký thiết bị tin cậy. Kích hoạt xác thực sinh trắc học (FaceID, vân tay FIDO2) và cài đặt ứng dụng công ty được bảo vệ qua MAM (Containerization)."
    },
    {
      step: 3,
      name: "Chặng 3: FIDM & SSO 1-Click Access",
      actor: "IdP (Token Issuer) ➔ SPs (SaaS Apps)",
      icon: "🔑",
      badge: "Truy Cập Tập Trung",
      color: "border-purple-500 bg-purple-950/40 text-purple-300",
      desc: "Người dùng đăng nhập 1 lần duy nhất tại IdP. IdP phát hành Token có chữ ký số để người dùng truy cập tức thì vào hàng chục ứng dụng (Slack, Salesforce, Jira) mà không cần nhập lại mật khẩu."
    },
    {
      step: 4,
      name: "Chặng 4: Deprovisioning & Real-Time Audit",
      actor: "IDaaS Controller ➔ Security Operations (SOC)",
      icon: "🛡️",
      badge: "Thu Hồi & Kiểm Toán",
      color: "border-amber-500 bg-amber-950/40 text-amber-300",
      desc: "Khi nhân viên thôi việc, hệ thống tự động thu hồi ngay lập tức mọi quyền truy cập (Deprovisioning), kích hoạt Remote Wipe nếu cần và ghi nhận toàn bộ log kiểm toán thời gian thực."
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#0e1428] via-[#0d111e] to-[#0a0d17] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl mb-12">
      {/* Background Cyber Glow & Grid Accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-600/5 blur-[150px]" />

      {/* Header Banner Content */}
      <div className="relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-300 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            Chương 6: Giáo Trình Điện Toán Đám Mây
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            Zero-Trust &amp; Cloud IAM Architecture
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-300">
            <Layers className="h-3.5 w-3.5 text-purple-400" />
            8 Trụ Cột Tri Thức Cốt Tử
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Identity as a Service{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-emerald-400 bg-clip-text text-transparent">
              (IDaaS)
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Tổng quan kiến trúc dịch vụ quản lý danh tính và quyền truy cập đám mây: Bộ ba trụ cột chức năng cốt lõi <strong className="text-indigo-300">AAA (Authentication - Authorization - Account Management)</strong>, cán cân chiến lược giữa 6 Lợi ích và 5 Thách thức, cơ chế <strong className="text-emerald-300">Federated Identity (FIDM)</strong>, giải pháp <strong className="text-amber-300">Single Sign-On (SSO)</strong> và bộ tứ giải pháp hàng đầu thế giới.
          </p>
        </div>

        {/* Telemetry Metrics Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {TELEMETRY_METRICS.map((m, idx) => {
            const IconComponent = m.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 shadow-inner backdrop-blur-md transition-all hover:border-indigo-500/40 hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                  <span>{m.label}</span>
                  <IconComponent className="h-4 w-4 text-slate-400" />
                </div>
                <div className={`mt-2 text-lg sm:text-xl font-black ${m.color}`}>
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] text-slate-400 font-medium truncate">
                  {m.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Interactive Cockpit Section */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6 shadow-xl">
          {/* Mode Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" /> Buồng Điều Khiển Danh Tính Đám Mây (Identity Cockpit)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                Khám Phá Toàn Diện 4 Lăng Kính Cốt Tử Của IDaaS
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-900 p-1 border border-slate-800">
              <button
                onClick={() => setActiveTab("tri_shield")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "tri_shield"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Shield className="h-3.5 w-3.5" />
                <span>Bộ Ba AAA</span>
              </button>
              <button
                onClick={() => setActiveTab("pipeline")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "pipeline"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Activity className="h-3.5 w-3.5" />
                <span>Vòng Đời Pipeline</span>
              </button>
              <button
                onClick={() => setActiveTab("vendors")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "vendors"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Server className="h-3.5 w-3.5" />
                <span>4 Nhà Cung Cấp</span>
              </button>
              <button
                onClick={() => setActiveTab("radar")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "radar"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Target className="h-3.5 w-3.5" />
                <span>Radar Bẫy Thi</span>
              </button>
            </div>
          </div>

          {/* TAB 1: TRI-SHIELD COCKPIT (AAA TRIPLETS) */}
          {activeTab === "tri_shield" && (
            <div className="mt-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Shield 1: Authentication */}
                <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-5 transition-all hover:border-blue-500/60 hover:bg-blue-950/30">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 font-bold border border-blue-500/40">
                      <Key className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40">
                      Who Are You?
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-blue-200">1. Authentication (AuthN)</h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Xác minh tính xác thực của danh tính người dùng qua mật khẩu, mã OTP, xác thực sinh trắc học hoặc thông báo đẩy Push Notification.
                  </p>
                  <div className="mt-3 rounded-lg bg-blue-950/50 p-2.5 border border-blue-500/20 text-[11px] text-blue-300">
                    <strong>Từ khóa thi:</strong> "Kiểm tra danh tính" ➔ AuthN.
                  </div>
                </div>

                {/* Shield 2: Authorization */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 transition-all hover:border-emerald-500/60 hover:bg-emerald-950/30">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40">
                      <UserCheck className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      What Can You Do?
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-emerald-200">2. Authorization (AuthZ)</h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Cấp quyền truy cập tài nguyên dựa trên vai trò (RBAC), thuộc tính ngữ cảnh (ABAC) hoặc danh sách điều khiển truy cập (ACL).
                  </p>
                  <div className="mt-3 rounded-lg bg-emerald-950/50 p-2.5 border border-emerald-500/20 text-[11px] text-emerald-300">
                    <strong>Từ khóa thi:</strong> "Cấp quyền tài nguyên" ➔ AuthZ.
                  </div>
                </div>

                {/* Shield 3: Account Management */}
                <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-5 transition-all hover:border-purple-500/60 hover:bg-purple-950/30">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 font-bold border border-purple-500/40">
                      <Users className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      Lifecycle Control
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-purple-200">3. Account Management</h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Quản trị toàn bộ vòng đời tài khoản: Cấp phát tự động (Provisioning), tự phục vụ đặt lại mật khẩu và thu hồi tức thì (Deprovisioning).
                  </p>
                  <div className="mt-3 rounded-lg bg-purple-950/50 p-2.5 border border-purple-500/20 text-[11px] text-purple-300">
                    <strong>Từ khóa thi:</strong> "Vòng đời tạo/xóa tài khoản" ➔ Acct Mgmt.
                  </div>
                </div>
              </div>

              {/* Formula & Rule Summary Callout */}
              <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-slate-200">
                  <span className="text-base text-indigo-400">💡</span>
                  <span>
                    <strong>Khẩu quyết vàng thi cử:</strong> IDaaS = <strong>AuthN</strong> (Ai?) + <strong>AuthZ</strong> (Quyền gì?) + <strong>Account Management</strong> (Vòng đời).
                  </span>
                </div>
                <button
                  onClick={() => scrollToSection("cloud-ch6-s2-1-definition")}
                  className="flex items-center gap-1.5 text-indigo-400 font-bold hover:text-indigo-300 transition-colors shrink-0"
                >
                  <span>Xem chi tiết Mục 2.1</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: IDENTITY LIFECYCLE PIPELINE */}
          {activeTab === "pipeline" && (
            <div className="mt-6 space-y-5">
              {/* Stepper Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {pipelineStages.map((stage) => {
                  const isCurrent = activePipelineStep === stage.step;
                  return (
                    <button
                      key={stage.step}
                      onClick={() => setActivePipelineStep(stage.step)}
                      className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                        isCurrent
                          ? "border-indigo-500 bg-indigo-950/60 ring-2 ring-indigo-500/50 shadow-lg"
                          : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl">{stage.icon}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${stage.color}`}>
                          Chặng {stage.step}
                        </span>
                      </div>
                      <span className="mt-2 text-xs font-bold text-slate-200 truncate w-full">
                        {stage.name.split(":")[1] || stage.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Details Card */}
              {(() => {
                const cur = pipelineStages[activePipelineStep - 1];
                return (
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                          Chi Tiết Tiến Trình Kỹ Thuật
                        </span>
                        <h4 className="text-base font-bold text-slate-100 flex items-center gap-2 mt-0.5">
                          <span>{cur.icon}</span>
                          <span>{cur.name}</span>
                        </h4>
                      </div>
                      <span className="text-xs text-slate-400 font-mono bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                        {cur.actor}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cur.desc}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-400">
                        Chặng {cur.step} / 4 trong vòng đời Zero-Trust Identity
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={activePipelineStep === 1}
                          onClick={() => setActivePipelineStep((p) => Math.max(1, p - 1))}
                          className="px-3 py-1 text-xs rounded-lg border border-slate-700 bg-slate-800 text-slate-300 disabled:opacity-40"
                        >
                          ← Chặng Trước
                        </button>
                        <button
                          disabled={activePipelineStep === 4}
                          onClick={() => setActivePipelineStep((p) => Math.min(4, p + 1))}
                          className="px-3 py-1 text-xs rounded-lg border border-indigo-600 bg-indigo-600 text-white disabled:opacity-40"
                        >
                          Chặng Kế →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 3: QUAD VENDORS ARENA */}
          {activeTab === "vendors" && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Vendor 1 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🛡️</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Enterprise Leader
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">Ping Identity</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ông lớn thương mại, chuẩn mở FIDM toàn cầu (SAML/OIDC), tích hợp PingID MFA và Dynamic Authorization.
                  </p>
                  <div className="text-[11px] text-blue-400 font-semibold pt-1">
                    Chuẩn mẫu IDaaS đầy đủ 4 trụ cột
                  </div>
                </div>

                {/* Vendor 2 */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🎯</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Fast Onboarding
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">SinglePoint</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Đơn giản hóa truy cập, giao diện Web trực quan, tối ưu chi phí và triển khai nhanh cho doanh nghiệp vừa và nhỏ.
                  </p>
                  <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                    Gọn nhẹ &amp; Quản lý tập trung
                  </div>
                </div>

                {/* Vendor 3 */}
                <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">⚡</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Cloud Pioneer
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">Symplified</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tiên phong IDaaS trên nền Reverse Proxy độc đáo, bảo vệ hiệu quả cả ứng dụng Web cũ (Legacy Web Apps).
                  </p>
                  <div className="text-[11px] text-purple-400 font-semibold pt-1">
                    Kiến trúc Identity Bridge
                  </div>
                </div>

                {/* Vendor 4 */}
                <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🔓</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Open-Source Only
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">OpenSaaS</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Nền tảng mã nguồn mở duy nhất trong giáo trình, miễn phí bản quyền, tự chủ mã nguồn và chống Vendor Lock-in.
                  </p>
                  <div className="text-[11px] text-amber-400 font-semibold pt-1">
                    100% Mã nguồn mở miễn phí
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-amber-400 font-bold">⚡ Quy chuẩn chung:</span>
                  <span>Mọi giải pháp IDaaS đều xoay quanh bộ khung: <strong>SSO + MFA + Access Management + Audit</strong>.</span>
                </div>
                <button
                  onClick={() => scrollToSection("cloud-ch6-s7-2-idaas-vendors")}
                  className="flex items-center gap-1.5 text-indigo-400 font-bold hover:text-indigo-300 transition-colors shrink-0"
                >
                  <span>Xem võ đài chi tiết Mục 7.2</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: EXAM TRAPS RADAR */}
          {activeTab === "radar" && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <Target className="h-4 w-4 text-red-400" />
                    Radar Quét 4 Cặp Bẫy Điểm Liệt Trong Đề Thi Trắc Nghiệm
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Các cặp khái niệm cực kỳ dễ gây nhầm lẫn nếu không đọc kỹ đề bài thi.
                  </p>
                </div>
                <button
                  onClick={() => setShowExamTraps(!showExamTraps)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    showExamTraps
                      ? "bg-red-500/20 text-red-300 border-red-500/40"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
                  }`}
                >
                  {showExamTraps ? "Đang Bật Radar Đỏ" : "Kích Hoạt Radar Soi Bẫy"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* Trap 1 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300">Bẫy 1: Authentication vs Authorization</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      Tần suất bẫy: 95%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-blue-300">AuthN:</strong> "Bạn là ai?" (kiểm tra mật khẩu, vân tay). <br />
                    <strong className="text-emerald-300">AuthZ:</strong> "Bạn được làm gì?" (cấp quyền đọc/ghi tài nguyên). Diễn ra SAU khi đã AuthN thành công.
                  </p>
                </div>

                {/* Trap 2 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300">Bẫy 2: IdP / SP (FIDM) vs OP / RP (OpenID)</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      Tần suất bẫy: 90%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-amber-300">OP (OpenID Provider)</strong> tương đương với IdP (nơi xác thực và cấp token). <br />
                    <strong className="text-sky-300">RP (Relying Party)</strong> tương đương với SP (nơi cung cấp dịch vụ người dùng muốn vào).
                  </p>
                </div>

                {/* Trap 3 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300">Bẫy 3: Phân Biệt MDM vs MAM Trong Mobile ID</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      Tần suất bẫy: 85%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-emerald-300">MDM (Device):</strong> Quản lý toàn bộ máy phần cứng (can thiệp sâu, khóa máy). <br />
                    <strong className="text-purple-300">MAM (Application):</strong> Chỉ cô lập dữ liệu app công ty (Containerization), không xâm phạm ảnh cá nhân.
                  </p>
                </div>

                {/* Trap 4 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300">Bẫy 4: SP Có Lưu Mật Khẩu Người Dùng Không?</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      Tần suất bẫy: 92%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Trong mô hình FIDM và OpenID, <strong>Service Provider (SP) hoặc RP KHÔNG BAO GIỜ LƯU HAY NHÌN THẤY MẬT KHẨU</strong> của người dùng. SP chỉ xác minh Token do IdP ký số.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Lab Hubs Navigator */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Trạm Thực Hành Tương Tác Nhanh (8 Lab Hubs)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                Chuyển Hướng 1-Click Tới Toàn Bộ 8 Visualizers Của Chương 6
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Nhấp vào trạm bất kỳ để cuộn mượt và làm sáng vị trí học
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {LAB_HUBS.map((lab) => (
              <button
                key={lab.id}
                onClick={() => scrollToSection(lab.targetId)}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-left transition-all hover:border-indigo-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl transition-transform group-hover:scale-110">
                      {lab.icon}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 group-hover:text-indigo-300 border border-slate-700">
                      {lab.sectionLabel}
                    </span>
                  </div>
                  <h4 className="mt-2.5 text-xs sm:text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                    {lab.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {lab.desc}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-indigo-400 group-hover:text-indigo-300 pt-2 border-t border-slate-800/60">
                  <span>Mở visualizer</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Keyterms Search & Dictionary Strip */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-indigo-400" />
              <h4 className="text-sm font-bold text-slate-100">
                Tra Cứu Nhanh Thuật Ngữ Cốt Lõi (Fast Keyterms Dictionary)
              </h4>
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm thuật ngữ (AAA, SSO, SCIM, OpenID...)"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-1">
            {filteredKeyterms.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-200 truncate">
                      {item.term}
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${item.badgeColor} shrink-0`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px]">
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    Xem tại {item.sectionLabel} →
                  </button>
                  <button
                    onClick={() => copyToClipboard(item.term, item.id)}
                    className="text-slate-500 hover:text-slate-300"
                    title="Sao chép tên thuật ngữ"
                  >
                    {copiedId === item.id ? (
                      <Check className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Quick Action Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-bold text-indigo-300">
                Sẵn sàng làm chủ 100% kiến thức Quản lý Danh tính Đám mây?
              </div>
              <div className="text-[11px] text-slate-400">
                Bắt đầu từ bài học Mục I hoặc nhảy nhanh đến bất kỳ trạm thực hành nào ở trên.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("cloud-ch6-s1-1-intro")}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
            >
              <span>Bắt Đầu Học Mục I</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
