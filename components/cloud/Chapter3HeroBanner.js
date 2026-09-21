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
  Users
} from "lucide-react";

/* ============================================================
   DATA STRUCTURES & CONSTANTS FOR CHAPTER 3 HERO BANNER
   ============================================================ */

const TELEMETRY_METRICS = [
  { label: "Độ Sẵn Sàng (SLA Uptime)", value: "99.9%", note: "Google & Salesforce", color: "text-emerald-400" },
  { label: "Mô Hình Chi Phí Vận Hành", value: "100% OPEX", note: "Zero Hardware CAPEX", color: "text-amber-400" },
  { label: "Cơ Chế Phân Tách CSDL", value: "Tenant_ID", note: "Logical Isolation", color: "text-sky-400" },
  { label: "Thời Gian Triển Khai Ứng Dụng", value: "Tức thì 0s", note: "Zero Local Install", color: "text-purple-400" }
];

const QUICK_KEYTERMS = [
  {
    id: "tenant-id",
    term: "Khóa Định Danh Tenant_ID",
    sectionId: "cloud-ch3-s3-2-comparison-matrix",
    sectionLabel: "Mục 3.2",
    summary: "Trường dữ liệu dùng trong câu lệnh SQL (WHERE Tenant_ID = ...) để phân tách an toàn dữ liệu giữa các khách hàng dùng chung CSDL Multi-tenant.",
    badge: "Kiến trúc",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "multi-tenant",
    term: "Kiến Trúc Multi-tenant",
    sectionId: "cloud-ch3-s3-1-architectures",
    sectionLabel: "Mục 3.1",
    summary: "Mô hình 'Chung cư cao tầng': Nhiều khách hàng dùng chung một phiên bản ứng dụng và CSDL, chi phí cực rẻ, nâng cấp tập trung tức thì.",
    badge: "Kiến trúc",
    badgeColor: "bg-cyan-900/60 text-cyan-300 border-cyan-500/40"
  },
  {
    id: "single-tenant",
    term: "Kiến Trúc Single-tenant",
    sectionId: "cloud-ch3-s3-1-architectures",
    sectionLabel: "Mục 3.1",
    summary: "Mô hình 'Biệt thự riêng': Mỗi khách hàng sở hữu App và Database riêng biệt 1-1, bảo mật và cô lập tuyệt đối nhưng chi phí rất cao.",
    badge: "Kiến trúc",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "open-saas",
    term: "Giải Pháp OpenSaaS",
    sectionId: "cloud-ch3-s4-1-concept-stack",
    sectionLabel: "Mục 4.1",
    summary: "SaaS chạy trên 3 tầng công nghệ mở (Ngôn ngữ mở + Linux OS + CSDL mở). Điển hình: WordPress.com, Magento, Moodle LMS.",
    badge: "Mã nguồn mở",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "mashup",
    term: "Công Nghệ Mashup",
    sectionId: "cloud-ch3-s5-1-definition-methods",
    sectionLabel: "Mục 5.1",
    summary: "Quá trình tích hợp nhiều API/dịch vụ từ nhiều nguồn thành 1 ứng dụng mới (GoRide). 2 Kiểu: Web-based (trình duyệt) vs Server-based (máy chủ).",
    badge: "Tích hợp",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/40"
  },
  {
    id: "emml",
    term: "Ngôn Ngữ Đặc Tả EMML",
    sectionId: "cloud-ch3-s5-2-benefits-tools",
    sectionLabel: "Mục 5.2",
    summary: "Enterprise Mashup Markup Language: Ngôn ngữ mở dựa trên XML dùng để định nghĩa luồng gộp, lọc và chuyển đổi dữ liệu Web Services cho doanh nghiệp.",
    badge: "Công cụ",
    badgeColor: "bg-rose-900/60 text-rose-300 border-rose-500/40"
  },
  {
    id: "soa",
    term: "Kiến Trúc SOA",
    sectionId: "cloud-ch3-s6-1-definition-characteristics",
    sectionLabel: "Mục 6.1",
    summary: "Service-Oriented Architecture: Phát triển ứng dụng thành các service tái sử dụng (reusable), giao tiếp qua mạng; 3 đặc tính: Modularity, Network, Integration.",
    badge: "Kiến trúc",
    badgeColor: "bg-indigo-900/60 text-indigo-300 border-indigo-500/40"
  },
  {
    id: "soa-triangle",
    term: "Tam Giác Tương Tác SOA",
    sectionId: "cloud-ch3-s6-2-components-examples",
    sectionLabel: "Mục 6.2",
    summary: "3 Thành phần: Provider (Publish) ➔ Broker (Find) ➔ Consumer (Bind). Minh họa thực tiễn qua Amazon Web Services (AWS) và Azure.",
    badge: "SOA Core",
    badgeColor: "bg-sky-900/60 text-sky-300 border-sky-500/40"
  },
  {
    id: "salesforce",
    term: "Salesforce CRM Pioneer",
    sectionId: "cloud-ch3-s7-1-reality-titans",
    sectionLabel: "Mục 7.1",
    summary: "Kẻ tiên phong khai sinh ngành công nghiệp SaaS thế giới với khẩu quyết 'The End of Software'; gồm Sales Cloud, Service Cloud, Marketing Cloud, Chatter.",
    badge: "Thực tế",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40"
  },
  {
    id: "mfa",
    term: "Xác Thực Đa Yếu Tố (MFA)",
    sectionId: "cloud-ch3-s7-2-security-measures",
    sectionLabel: "Mục 7.2",
    summary: "Yêu cầu cung cấp mật khẩu kết hợp mã OTP Authenticator hoặc sinh trắc học FaceID, ngăn chặn 99.9% nguy cơ bị chiếm đoạt tài khoản đám mây.",
    badge: "Bảo mật",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "smart-contract",
    term: "SaaS + Smart Contract",
    sectionId: "cloud-ch3-s7-3-future-tech",
    sectionLabel: "Mục 7.3",
    summary: "Kết hợp SaaS với Blockchain sổ cái phân tán để đảm bảo minh bạch, bảo mật, chống làm giả (Tamper resistance) trong Supply Chain và Healthcare.",
    badge: "Tương lai",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40"
  },
  {
    id: "big-data",
    term: "SaaS + Big Data (Data-Driven)",
    sectionId: "cloud-ch3-s7-3-future-tech",
    sectionLabel: "Mục 7.3",
    summary: "Phân tích dữ liệu lớn chuyên sâu (In-depth analysis) giúp doanh nghiệp ra quyết định dựa trên dữ liệu (Data-driven) trong Bán lẻ, Tài chính và Y tế.",
    badge: "Tương lai",
    badgeColor: "bg-violet-900/60 text-violet-300 border-violet-500/40"
  }
];

const SAAS_XRAY_STACK = [
  {
    tier: 4,
    title: "TẦNG 4: LỚP TRÌNH DIỄN ỨNG DỤNG SAAS (Presentation & Client)",
    subtitle: "Web Browser Client • Zero Local Installation • Multi-Platform Access",
    color: "border-purple-500/60 bg-purple-950/20 text-purple-300",
    badge: "Tầng Ứng Dụng",
    keySpecs: [
      "Truy cập 100% qua giao thức Web HTTP/HTTPS trên trình duyệt (Chrome, Safari, Firefox)",
      "Zero dependency: Không yêu cầu cài đặt phần mềm thực thi (.exe, .msi) trên máy trạm",
      "Đồng bộ hóa đa thiết bị thời gian thực giữa PC văn phòng, Laptop cá nhân và Smartphone",
      "Điển hình: Google Docs đồng chỉnh sửa tài liệu, Salesforce Chatter trao đổi dự án"
    ]
  },
  {
    tier: 3,
    title: "TẦNG 3: TÍCH HỢP MASHUP & ENTERPRISE SERVICE BUS (Integration & SOA)",
    subtitle: "API Mashup Mixer • SOA Triangle (Provider-Broker-Consumer) • Loosely Coupled",
    color: "border-sky-500/60 bg-sky-950/20 text-sky-300",
    badge: "Tầng Tích Hợp",
    keySpecs: [
      "Công nghệ Mashup: Ghép nối Google Maps + Driver Fleet + Cổng thanh toán tạo GoRide",
      "2 Phương pháp: Web-based (trình duyệt ghép nối) vs Server-based (máy chủ backend gộp)",
      "Kiến trúc SOA: Lắp ghép các dịch vụ tái sử dụng (Reusable services) tương tác qua mạng",
      "Công cụ hỗ trợ: Ngôn ngữ đặc tả EMML (Enterprise Mashup) và chuẩn mở OpenMashup"
    ]
  },
  {
    tier: 2,
    title: "TẦNG 2: CƠ SỞ DỮ LIỆU ĐA NGƯỜI THUÊ & PHÂN TÁCH TENANT_ID (Data Isolation)",
    subtitle: "Single-tenant vs Multi-tenant • Logical Isolation • RBAC Access Control",
    color: "border-amber-500/60 bg-amber-950/20 text-amber-300",
    badge: "Tầng Dữ Liệu",
    keySpecs: [
      "Multi-tenant: Dùng chung 1 phiên bản CSDL và App, phân tách dữ liệu an toàn bằng Tenant_ID",
      "Single-tenant: Cấp phát CSDL và cá thể App riêng biệt 1-1 cho tổ chức tài chính/ngân hàng",
      "Bảo mật 4 lớp: Mã hóa (TLS & AES-256), Xác thực đa yếu tố MFA, Phân quyền RBAC, Backup",
      "OpenSaaS: Chạy trên 3 tầng công nghệ mở (PHP/Python + Linux OS + MySQL/PostgreSQL)"
    ]
  },
  {
    tier: 1,
    title: "TẦNG 1: HẠ TẦNG ĐÁM MÂY & MÔ HÌNH TÀI CHÍNH (Cloud IaaS & Economics)",
    subtitle: "100% OPEX Subscription • Hyperscale Datacenters • High Availability SLA",
    color: "border-emerald-500/60 bg-emerald-950/20 text-emerald-300",
    badge: "Tầng Hạ Tầng",
    keySpecs: [
      "Chuyển dịch tài chính: Chuyển toàn bộ chi phí mua phần cứng CAPEX sang chi phí vận hành OPEX",
      "Nhà cung cấp chịu trách nhiệm 100% về bảo trì máy chủ, tản nhiệt, điện năng và vá lỗi bảo mật",
      "Tự động co giãn (Scalability) theo nhu cầu: Tăng/giảm số lượng tài khoản người dùng tức thì",
      "Điểm đánh đổi cốt lõi (Trade-off): Phụ thuộc tuyệt đối vào đường truyền mạng Internet"
    ]
  }
];

const ROADMAP_STAGES = [
  {
    stage: "Chặng 1",
    title: "Khái Niệm Cốt Lõi & Cán Cân Đánh Đổi",
    sections: "Mục I & Mục II",
    sectionId: "cloud-ch3-s1",
    desc: "Nắm vững khẩu quyết 'Thuê phần mềm qua mạng', 4 đặc tính vận hành kỹ thuật và phân tích cán cân giữa 4 lợi ích kinh tế đối đầu 3 thách thức sống còn.",
    highlights: ["SaaS = Thuê phần mềm qua mạng", "4 Đặc tính: Internet, No local, Provider, Pay-as-you-go", "Gót chân Achilles: Phụ thuộc mạng Internet"]
  },
  {
    stage: "Chặng 2",
    title: "Kiến Trúc Multi-tenant & Giải Pháp OpenSaaS",
    sections: "Mục III & Mục IV",
    sectionId: "cloud-ch3-s3",
    desc: "Làm chủ sự khác biệt giữa 'Biệt thự riêng' (Single-tenant) và 'Chung cư' (Multi-tenant) qua khóa Tenant_ID, cùng 3 tầng công nghệ mở của OpenSaaS.",
    highlights: ["Mô hình 1-1 vs 1-Nhiều", "Khóa định danh Tenant_ID trong CSDL", "OpenSaaS: WordPress, Magento, Moodle LMS"]
  },
  {
    stage: "Chặng 3",
    title: "Tích Hợp Hệ Thống: Mashup & Kiến Trúc SOA",
    sections: "Mục V & Mục VI",
    sectionId: "cloud-ch3-s5",
    desc: "Khám phá công nghệ trộn API Mashup (Web-based vs Server-based, ứng dụng GoRide, EMML) và tam giác tương tác kinh điển SOA (Provider - Broker - Consumer).",
    highlights: ["Mashup: Trộn API thành app mới", "Web-based (Client) vs Server-based (Server)", "Tam giác SOA: Publish ➔ Find ➔ Bind"]
  },
  {
    stage: "Chặng 4",
    title: "Thực Tế, Phòng Thủ An Ninh & Xu Hướng Đột Phá",
    sections: "Mục VII & Mục VIII",
    sectionId: "cloud-ch3-s7",
    desc: "Khảo sát Google Workspace & Salesforce CRM Pioneer, vận hành 4 lớp lá chắn an ninh, đón đầu làn sóng hội tụ AI, IoT, Blockchain Smart Contract và Big Data.",
    highlights: ["Google Workspace & Salesforce CRM", "4 Lớp bảo vệ: Encrypt, MFA, RBAC, Backup", "Tương lai: Blockchain & Big Data ra quyết định"]
  }
];

const EXAM_BENTO = [
  {
    id: "bento-core",
    title: "Khái Niệm Cốt Lõi & 4 Đặc Tính",
    weight: "20%",
    focus: "Mục I (1.1, 1.2)",
    gotcha: "Đề thi hay bẫy về việc ai chịu trách nhiệm bảo trì, cập nhật. Đáp án: Nhà cung cấp (Service Provider) đảm nhiệm 100%.",
    quickFormula: "SaaS = Thuê qua mạng • Không cài cục bộ • Trả theo nhu cầu"
  },
  {
    id: "bento-tradeoff",
    title: "Cán Cân Đánh Đổi Lợi Ích / Rủi Ro",
    weight: "15%",
    focus: "Mục II (2.1, 2.2)",
    gotcha: "Điểm yếu chí tử lớn nhất của SaaS là gì? Luôn chọn: Phụ thuộc vào kết nối mạng Internet (Depends on Internet).",
    quickFormula: "Lợi: Rẻ, Tự động, Co giãn • Hại: Mất mạng, Bảo mật, Ít tùy biến"
  },
  {
    id: "bento-architecture",
    title: "Single-tenant vs Multi-tenant",
    weight: "25%",
    focus: "Mục III (3.1, 3.2)",
    gotcha: "Câu hỏi kinh điển: Làm thế nào CSDL Multi-tenant phân tách an toàn dữ liệu? Đáp án: Sử dụng khóa định danh Tenant_ID.",
    quickFormula: "Single = Biệt thự riêng (đắt, an toàn) • Multi = Chung cư (rẻ, Tenant_ID)"
  },
  {
    id: "bento-opensaas",
    title: "Giải Pháp Mã Nguồn Mở OpenSaaS",
    weight: "10%",
    focus: "Mục IV (4.1, 4.2)",
    gotcha: "Hai hạn chế lớn nhất của OpenSaaS là: Hỗ trợ kỹ thuật bị hạn chế (Limited support) & Rủi ro an ninh.",
    quickFormula: "OpenSaaS = Ngôn ngữ mở + Linux + CSDL mở • WordPress, Magento, Moodle"
  },
  {
    id: "bento-mashup-soa",
    title: "Tích Hợp Mashup & Kiến Trúc SOA",
    weight: "15%",
    focus: "Mục V & Mục VI",
    gotcha: "Phân biệt Web-based Mashup (chạy trên trình duyệt client qua JS) và Server-based Mashup (chạy trên server backend).",
    quickFormula: "Mashup = Trộn API (GoRide) • SOA = Provider ➔ Broker ➔ Consumer"
  },
  {
    id: "bento-security-future",
    title: "Bảo Mật & Công Nghệ Tương Lai",
    weight: "15%",
    focus: "Mục VII & Mục VIII",
    gotcha: "Salesforce là kẻ tiên phong trong lĩnh vực nào? Đáp án: CRM (Customer Relationship Management).",
    quickFormula: "Bảo mật = Mã hóa + MFA + RBAC + Backup • Tương lai = AI, Blockchain, Big Data"
  }
];

const INTERACTIVE_LABS_HUB = [
  {
    id: "lab-duel",
    title: "Vòng Đời Phần Mềm & Máy Tính CAPEX/OPEX",
    section: "Mục I (1.1)",
    targetId: "content-cloud-ch3-s1-1-definition",
    desc: "Đối đầu trực tiếp 6 giai đoạn On-Premise vs SaaS, tính toán dòng tiền tiết kiệm theo quy mô nhân viên.",
    icon: "⚔️"
  },
  {
    id: "lab-balance",
    title: "Cán Cân Đánh Đổi & Giả Lập Đứt Mạng",
    section: "Mục II (2.1)",
    targetId: "content-cloud-ch3-s2-1-advantages",
    desc: "Mô phỏng cân bằng 4 lợi ích đối kháng 3 thách thức, kích hoạt công tắc ngắt kết nối Internet.",
    icon: "⚖️"
  },
  {
    id: "lab-tenant",
    title: "Biệt Thự Riêng vs Chung Cư (Tenant_ID)",
    section: "Mục III (3.1)",
    targetId: "content-cloud-ch3-s3-1-architectures",
    desc: "Khám phá cấu trúc cô lập dữ liệu CSDL SQL với trường Tenant_ID và ma trận 4 tiêu chí so sánh.",
    icon: "🏢"
  },
  {
    id: "lab-opensaas",
    title: "3 Tầng Công Nghệ Mở & 3 Điển Hình",
    section: "Mục IV (4.1)",
    targetId: "content-cloud-ch3-s4-1-concept-stack",
    desc: "Mở hộp 3 tầng công nghệ mở (PHP/Python + Linux + MySQL) và khám phá WordPress, Magento, Moodle.",
    icon: "🌐"
  },
  {
    id: "lab-mashup",
    title: "Bộ Trộn API GoRide & Luồng Dữ Liệu",
    section: "Mục V (5.1)",
    targetId: "content-cloud-ch3-s5-1-definition-methods",
    desc: "Bật/tắt các nguồn API Map, Fleet, Payment để hoàn thiện GoRide và đo latency Web vs Server Based.",
    icon: "🎛️"
  },
  {
    id: "lab-soa",
    title: "Tam Giác Tương Tác SOA & Service Bus",
    section: "Mục VI (6.2)",
    targetId: "content-cloud-ch3-s6-2-components-examples",
    desc: "Mô phỏng 3 bước Publish ➔ Find ➔ Bind giữa Provider, Broker, Consumer trên AWS và Azure.",
    icon: "🔺"
  },
  {
    id: "lab-titans",
    title: "Bản Đồ Hệ Sinh Thái Google & Salesforce",
    section: "Mục VII (7.1)",
    targetId: "content-cloud-ch3-s7-1-reality-titans",
    desc: "Đối sánh 7 dịch vụ Google Workspace với 5 phân hệ Salesforce CRM Pioneer toàn cầu.",
    icon: "☁️"
  },
  {
    id: "lab-shield",
    title: "Hộp Cát 4 Lớp Bảo Vệ & Thử Tấn Công",
    section: "Mục VII (7.2)",
    targetId: "content-cloud-ch3-s7-2-security-measures",
    desc: "Bật/tắt 4 lớp Encryption, MFA, RBAC, Backup và bấm nút giả lập hacker tấn công cơ sở dữ liệu.",
    icon: "🛡️"
  },
  {
    id: "lab-future",
    title: "Bàn Điều Khiển 4 Công Nghệ Đột Phá",
    section: "Mục VII (7.3)",
    targetId: "content-cloud-ch3-s7-3-future-tech",
    desc: "Khám phá AI/IoT tự động hóa, Blockchain Smart Contract và Big Data phân tích ra quyết định.",
    icon: "🚀"
  },
  {
    id: "lab-matrix",
    title: "Bảng Tổng Kết 8 Trụ Cột Toàn Chương",
    section: "Mục VIII (8.1)",
    targetId: "content-cloud-ch3-s8-1-summary-matrix",
    desc: "Tra cứu nhanh toàn diện 8 trụ cột tri thức, mẹo thi cử độc quyền và cẩm nang phản xạ.",
    icon: "🏆"
  }
];

/* ============================================================
   MAIN COMPONENT: CHAPTER 3 HERO BANNER
   ============================================================ */

export default function Chapter3HeroBanner() {
  const [activeTab, setActiveTab] = useState("blueprint"); // 'blueprint' | 'roadmap' | 'bento' | 'command'
  const [searchQuery, setSearchQuery] = useState("");
  const [showXRayDetails, setShowXRayDetails] = useState(true);
  const [copiedFormula, setCopiedFormula] = useState(null);

  // Filter keyterms
  const filteredKeyterms = useMemo(() => {
    if (!searchQuery.trim()) return QUICK_KEYTERMS;
    const q = searchQuery.toLowerCase();
    return QUICK_KEYTERMS.filter(
      (k) => k.term.toLowerCase().includes(q) || k.summary.toLowerCase().includes(q) || k.badge.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Smooth scroll handler
  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-amber-400", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-amber-400");
      }, 2500);
    }
  };

  const handleCopy = (formula, id) => {
    navigator.clipboard?.writeText(formula);
    setCopiedFormula(id);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#181614] via-[#201c18] to-[#141210] p-6 md:p-10 text-neutral-100 shadow-2xl my-6">
      {/* Background Cyber Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(#d97706 1px, transparent 1px), linear-gradient(to right, #d97706 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      {/* 1. TELEMETRY STATUS BAR */}
      <div className="relative z-10 border-b border-neutral-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
              SaaS Command Center • Live Telemetry
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neutral-900/90 px-3 py-1 font-mono text-[11px] text-neutral-400 border border-neutral-800">
              Cloud Architecture • Chapter III
            </span>
          </div>
        </div>

        {/* 4 Telemetry Metrics Grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TELEMETRY_METRICS.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-800/80 bg-black/40 p-3.5 backdrop-blur-sm transition-all hover:border-amber-500/40"
            >
              <div className="text-[11px] text-neutral-400 truncate">{m.label}</div>
              <div className={`mt-1 font-mono text-lg md:text-xl font-black ${m.color}`}>{m.value}</div>
              <div className="mt-0.5 text-[10px] text-neutral-500 font-mono">{m.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. HERO BANNER TITLE & ACTION HEADER */}
      <div className="relative z-10 mt-6 md:mt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Tổng Quan Toàn Diện Chương 3 • Master Overview</span>
        </div>

        <h1 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Software as a Service (SaaS)
        </h1>
        <p className="mt-2 max-w-4xl text-sm md:text-base text-neutral-300 leading-relaxed">
          Khám phá toàn cảnh mô hình <strong className="text-amber-400">&quot;Thuê phần mềm qua mạng&quot;</strong>: Bản chất phân phối đám mây, 4 đặc tính vận hành, cán cân đánh đổi kinh tế &amp; kỹ thuật, đối đầu hai kiến trúc Single vs Multi-tenant, giải pháp OpenSaaS, công nghệ tích hợp Mashup, kiến trúc hướng dịch vụ SOA, hai tượng đài Google Workspace &amp; Salesforce cùng 4 tầng lá chắn an ninh mạng.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => handleScrollTo("content-cloud-ch3-s1-1-definition")}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 px-5 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-amber-900/30 transition-all hover:brightness-110 active:scale-98"
          >
            <Play className="h-4 w-4" />
            <span>Bắt Đầu Học Ngay (Mục I)</span>
          </button>
          <button
            onClick={() => handleScrollTo("content-cloud-ch3-s8-1-summary-matrix")}
            className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/80 px-4 py-2.5 text-xs md:text-sm font-bold text-neutral-200 transition-all hover:border-amber-500/50 hover:bg-neutral-800 active:scale-98"
          >
            <Award className="h-4 w-4 text-amber-400" />
            <span>8 Trụ Cột Tri Thức (Mục VIII)</span>
          </button>
        </div>
      </div>

      {/* 3. QUICK KEYTERMS SNIFFER SEARCH */}
      <div className="relative z-10 mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Search className="h-4 w-4" />
            <span>Thanh Tra Cứu Nhanh Thuật Ngữ &amp; Bẫy Thi Cử (Keyterms Sniffer)</span>
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Gõ từ khóa: Tenant_ID, Mashup, SOA, MFA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-black/60 py-2 pl-3.5 pr-8 text-xs text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-xs text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Search Results Preview */}
        <div className="mt-3.5 flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1">
          {filteredKeyterms.slice(0, 8).map((term) => (
            <div
              key={term.id}
              onClick={() => handleScrollTo(`content-${term.sectionId}`)}
              className="group flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-800 bg-black/40 px-3 py-1.5 transition-all hover:border-amber-500/50 hover:bg-neutral-900"
            >
              <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold border ${term.badgeColor}`}>
                {term.badge}
              </span>
              <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-300">
                {term.term}
              </span>
              <ChevronRight className="h-3.5 w-3.5 text-neutral-500 group-hover:translate-x-0.5 group-hover:text-amber-400 transition-all" />
            </div>
          ))}
          {filteredKeyterms.length === 0 && (
            <div className="py-2 text-xs text-neutral-500">
              Không tìm thấy thuật ngữ phù hợp với &quot;{searchQuery}&quot;. Hãy thử tìm: Tenant, SOA, Mashup, Google...
            </div>
          )}
        </div>
      </div>

      {/* 4. DYNAMIC PERSPECTIVE SWITCHER TABS */}
      <div className="relative z-10 mt-8">
        <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-3">
          <button
            onClick={() => setActiveTab("blueprint")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-bold transition-all ${
              activeTab === "blueprint"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-900/40"
                : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>🏢 Mặt Cắt 4 Tầng Kiến Trúc (X-Ray Stack)</span>
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-bold transition-all ${
              activeTab === "roadmap"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-900/40"
                : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <Compass className="h-4 w-4" />
            <span>🗺️ Lộ Trình 4 Chặng Tri Thức</span>
          </button>
          <button
            onClick={() => setActiveTab("bento")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-bold transition-all ${
              activeTab === "bento"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-900/40"
                : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <Target className="h-4 w-4" />
            <span>🎯 Bento Grid Trọng Số Đề Thi</span>
          </button>
          <button
            onClick={() => setActiveTab("command")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-bold transition-all ${
              activeTab === "command"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-900/40"
                : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <Sliders className="h-4 w-4" />
            <span>🕹️ Trung Tâm Chỉ Huy 10 Lab Hub</span>
          </button>
        </div>

        {/* TAB 1: BLUEPRINT / X-RAY STACK */}
        {activeTab === "blueprint" && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">
                Sơ đồ phân cấp 4 tầng kỹ thuật nền tảng vận hành mọi dịch vụ SaaS hiện đại
              </span>
              <button
                onClick={() => setShowXRayDetails(!showXRayDetails)}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-900/80 px-3 py-1 text-xs font-semibold text-amber-400 hover:border-amber-500"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>{showXRayDetails ? "Thu Gọn Chi Tiết" : "Bật Chế Độ X-Ray Chi Tiết"}</span>
              </button>
            </div>

            <div className="space-y-3">
              {SAAS_XRAY_STACK.map((tier) => (
                <div
                  key={tier.tier}
                  className={`rounded-2xl border p-4 md:p-5 transition-all ${tier.color}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-black/50 px-2 py-0.5 text-xs font-mono font-bold">
                          {tier.badge}
                        </span>
                        <h4 className="text-sm md:text-base font-bold text-white">{tier.title}</h4>
                      </div>
                      <div className="mt-1 text-xs text-neutral-400 font-mono">{tier.subtitle}</div>
                    </div>
                  </div>

                  {showXRayDetails && (
                    <div className="mt-4 pt-3 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {tier.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 4-STAGE ROADMAP */}
        {activeTab === "roadmap" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROADMAP_STAGES.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 md:p-5 transition-all hover:border-amber-500/40 hover:bg-neutral-900/80"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                    <span className="font-mono text-xs font-bold text-amber-400">{s.stage}</span>
                    <span className="rounded bg-black/50 px-2 py-0.5 text-[10px] text-neutral-400">
                      {s.sections}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-white">{s.title}</h4>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{s.desc}</p>

                  <div className="mt-3 space-y-1.5 pt-2 border-t border-neutral-800/60 text-[11px] text-neutral-300">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleScrollTo(`content-${s.sectionId}`)}
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-neutral-700 bg-black/40 py-2 text-xs font-bold text-amber-300 transition-all hover:border-amber-500/60 hover:bg-amber-950/20"
                >
                  <span>Học Phần Này</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: EXAM BENTO GRID */}
        {activeTab === "bento" && (
          <div className="mt-6 space-y-4">
            <div className="text-xs text-neutral-400">
              Ma trận trọng số câu hỏi thi trắc nghiệm &amp; các bẫy đề thi hay gặp trong ngân hàng câu hỏi
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXAM_BENTO.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 md:p-5 transition-all hover:border-amber-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                      <span className="font-mono text-xs font-black text-amber-400">Trọng số: {b.weight}</span>
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/20">
                        {b.focus}
                      </span>
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-white">{b.title}</h4>

                    <div className="mt-3 rounded-xl border border-red-500/20 bg-red-950/20 p-2.5 text-xs text-red-200">
                      <strong className="text-red-400">⚠️ Bẫy Đề Thi:</strong> {b.gotcha}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono text-neutral-400">Mẹo nhớ nhanh:</span>
                      <button
                        onClick={() => handleCopy(b.quickFormula, b.id)}
                        className="text-amber-400 hover:text-amber-300 font-bold"
                      >
                        {copiedFormula === b.id ? "✓ Đã chép" : "Sao chép"}
                      </button>
                    </div>
                    <div className="mt-1 rounded-lg bg-black/60 p-2 font-mono text-[11px] text-amber-300 border border-neutral-800 truncate">
                      {b.quickFormula}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: 10 INTERACTIVE LABS HUB */}
        {activeTab === "command" && (
          <div className="mt-6 space-y-4">
            <div className="text-xs text-neutral-400">
              Nhấp vào nút &quot;Mở &amp; Cuộn Đến Lab&quot; để trang tự động cuộn mượt mà đến đúng bộ mô phỏng trong giáo trình
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {INTERACTIVE_LABS_HUB.map((lab) => (
                <div
                  key={lab.id}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-black/40 p-3.5 transition-all hover:border-amber-500/50 hover:bg-neutral-900/60"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{lab.icon}</span>
                      <span className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-800">
                        {lab.section}
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-bold text-white line-clamp-2">{lab.title}</div>
                    <p className="mt-1.5 text-[11px] text-neutral-400 line-clamp-3 leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleScrollTo(lab.targetId)}
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 py-1.5 text-xs font-bold text-amber-300 transition-all hover:bg-amber-600 hover:text-white"
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

      {/* FOOTER QUICK PROGRESS STATUS */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800/80 pt-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>8 Mục Học Thuật • 10 Lab Mô Phỏng • 8 Micro-Quizzes • 24 Thuật Ngữ Glossary</span>
        </div>
        <div className="font-mono text-[11px] text-amber-400">
          StudyMaster Cloud Curriculum Standard v3.0
        </div>
      </div>
    </div>
  );
}
