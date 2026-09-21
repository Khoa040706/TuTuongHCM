"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Cloud,
  Layers,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Server,
  Activity,
  Compass,
  Cpu,
  RefreshCw,
  Globe,
  Sliders,
  ExternalLink,
  BookOpen,
  Award,
  BarChart3,
  Clock,
  HelpCircle,
  Network,
  ChevronRight,
  TrendingUp,
  Target,
  FileCheck,
  Laptop
} from "lucide-react";

/* ============================================================
   METADATA & DATA STRUCTURES
   ============================================================ */

const PIPELINE_STEPS = [
  {
    step: "01",
    label: "Cội Nguồn Tiền Thân (1960 - 1970s)",
    subtitle: "Timesharing & Máy ảo Mainframe",
    period: "1960s – 1970s",
    desc: "Khởi xướng ý tưởng 'Điện toán như một tiện ích công cộng' (John McCarthy). IBM tiên phong phát triển Timesharing và chiếc Máy ảo (Virtual Machine) đầu tiên trên thế giới.",
    highlights: ["1960s: Timesharing trên Mainframe", "1972: IBM VM trên System/370", "1977: Biểu tượng hình đám mây ARPANET"],
    sectionId: "cloud-ch1-s1",
    tag: "Mục I: Lịch Sử"
  },
  {
    step: "02",
    label: "Internet & Web 2.0 Bùng Nổ (1990 - 2000s)",
    subtitle: "Khai sinh Thuật ngữ & Bệ phóng SaaS",
    period: "1990s – Đầu 2000s",
    desc: "Mạng World Wide Web kết nối toàn cầu. Giáo sư Ramesh Chellappa chính thức đặt tên thuật ngữ 'Cloud Computing' (1997). Cuộc cách mạng Web 2.0 đưa tương tác 2 chiều trở thành nền móng của SaaS.",
    highlights: ["1991: Mạng World Wide Web (WWW)", "1997: Ramesh Chellappa đặt tên Cloud", "1999: Salesforce tiên phong CRM qua Web", "Web 2.0: Tương tác 2 chiều & UGC"],
    sectionId: "cloud-ch1-s6",
    tag: "Mục I & VI"
  },
  {
    step: "03",
    label: "Tiêu Chuẩn Hóa NIST & Dịch Vụ SPI (2006 - 2011)",
    subtitle: "5-4-3 Framework & Trách Nhiệm Chung",
    period: "2006 – 2011",
    desc: "AWS thương mại hóa EC2 và S3. Viện Tiêu chuẩn và Kỹ thuật Quốc gia Hoa Kỳ (NIST) chính thức ban hành định nghĩa chuẩn mực: 5 đặc tính cốt lõi, 4 mô hình triển khai và tam giác dịch vụ SPI.",
    highlights: ["2006: Amazon EC2 & S3 ra mắt", "5 Đặc tính thiết yếu chuẩn NIST", "Kim tự tháp SPI: IaaS ➔ PaaS ➔ SaaS", "Mô hình Trách nhiệm chung (Shared Responsibility)"],
    sectionId: "cloud-ch1-s2",
    tag: "Mục II, III, IV"
  },
  {
    step: "04",
    label: "Kỷ Nguyên Đám Mây Hiện Đại (2012 - Nay)",
    subtitle: "Độ Tin Cậy Doanh Nghiệp, Multi-AZ & Thách Thức",
    period: "2012 – Nay",
    desc: "Hạ tầng Multi-AZ sao chép dữ liệu chống sập (Fault Tolerance), tự động co giãn theo giây (Auto Scaling). Doanh nghiệp đối mặt với bài toán an ninh dữ liệu và quản trị đa đám mây (Multi-Cloud).",
    highlights: ["AWS Multi-AZ Data Replication & Redundancy", "SLA Sẵn sàng cao 99.999% (Five Nines)", "5 Thách thức: Security, Governance, Multi-Cloud", "Hệ sinh thái Google Cloud & AWS"],
    sectionId: "cloud-ch1-s7",
    tag: "Mục V & VII"
  }
];

const NIST_BLUEPRINT = {
  features: [
    { name: "On-demand self-service", vi: "Tự phục vụ theo nhu cầu", icon: Zap, desc: "Tự cấp phát tài nguyên tự động qua Web/API không cần con người can thiệp." },
    { name: "Broad network access", vi: "Truy cập mạng diện rộng", icon: Globe, desc: "Sử dụng từ mọi thiết bị (Laptop, Mobile, Tablet) qua giao thức chuẩn." },
    { name: "Resource pooling", vi: "Gom tài nguyên dùng chung", icon: Server, desc: "Đa khách thuê (Multi-tenancy), phân bổ động không phụ thuộc vị trí vật lý." },
    { name: "Rapid elasticity", vi: "Khả năng co giãn nhanh", icon: RefreshCw, desc: "Tự động co giãn theo tải thực tế, mở rộng không giới hạn trong mắt khách hàng." },
    { name: "Measured service", vi: "Dịch vụ đo lường được", icon: Sliders, desc: "Đo đếm tài nguyên minh bạch, thanh toán linh hoạt Pay-as-you-go theo giây/giờ." }
  ],
  deployments: [
    { name: "Public Cloud", vi: "Đám mây công cộng", desc: "Đa khách thuê qua Internet (AWS, Azure, GCP), chi phí rẻ, co giãn vô hạn.", color: "bg-sky-50 border-sky-300 text-sky-800" },
    { name: "Private Cloud", vi: "Đám mây riêng", desc: "Độc quyền 1 tổ chức (Ngân hàng, Quốc phòng), bảo mật tối đa, kiểm soát 100%.", color: "bg-amber-50 border-amber-300 text-amber-800" },
    { name: "Community Cloud", vi: "Đám mây cộng đồng", desc: "Nhiều tổ chức chung mục đích/sứ mệnh cùng đầu tư chia sẻ hạ tầng.", color: "bg-purple-50 border-purple-300 text-purple-800" },
    { name: "Hybrid Cloud", vi: "Đám mây lai", desc: "Kết hợp ≥ 2 mô hình (Private + Public), cân bằng tối ưu giữa bảo mật và linh hoạt.", color: "bg-emerald-50 border-emerald-300 text-emerald-800" }
  ],
  services: [
    { name: "SaaS", slogan: "CONSUME IT", vi: "Phần mềm Dịch vụ", desc: "Người dùng chỉ sử dụng ứng dụng hoàn chỉnh qua trình duyệt (Gmail, M365, Salesforce).", color: "from-purple-500 to-indigo-600" },
    { name: "PaaS", slogan: "BUILD ON IT", vi: "Nền tảng Dịch vụ", desc: "Lập trình viên tập trung viết mã và dữ liệu, nền tảng tự quản lý OS và Runtime (GAE, Heroku).", color: "from-blue-500 to-teal-600" },
    { name: "IaaS", slogan: "MIGRATE TO IT", vi: "Hạ tầng Dịch vụ", desc: "Khách hàng thuê máy chủ ảo, ổ đĩa, mạng và tự quản lý từ tầng HĐH trở lên (AWS EC2, S3).", color: "from-amber-500 to-orange-600" }
  ]
};

const EXAM_PILLARS = [
  {
    subject: "Tam giác Mô hình Dịch vụ SPI & Trách nhiệm chung",
    scope: "IaaS ('Migrate to it') vs PaaS ('Build on it') vs SaaS ('Consume it')",
    weight: "30%",
    color: "from-purple-500 to-indigo-600",
    tip: "Ghi nhớ kim tự tháp quản trị: Tầng càng cao (SaaS) thì NCC chịu trách nhiệm càng nhiều, khách hàng quản lý càng ít. Nhớ đại diện: EC2/S3 (IaaS), GAE (PaaS), Docs/Gmail (SaaS)."
  },
  {
    subject: "5 Đặc tính thiết yếu theo Chuẩn NIST",
    scope: "On-demand, Broad access, Resource pooling, Rapid elasticity, Measured service",
    weight: "25%",
    color: "from-amber-500 to-orange-600",
    tip: "Phân biệt kỹ 'Rapid Elasticity' (tự động co giãn theo tải) và 'Measured Service' (đo đếm tính cước Pay-as-you-go). Đề thi hay hỏi tình huống nhận biết từng đặc tính."
  },
  {
    subject: "4 Mô hình Triển khai & Chiến lược Multi-Cloud",
    scope: "Public, Private, Community, Hybrid & Đa đám mây tránh Vendor Lock-in",
    weight: "20%",
    color: "from-emerald-500 to-teal-600",
    tip: "Ngân hàng/Chính phủ ưu tiên Private Cloud; Startup ưu tiên Public Cloud; Doanh nghiệp có dữ liệu nhạy cảm nhưng cần co giãn mùa cao điểm chọn Hybrid Cloud."
  },
  {
    subject: "Độ tin cậy AWS, Sao chép dữ liệu & Tự động co giãn",
    scope: "Replication, Redundancy ➔ Fault Tolerance & High Availability, Auto Scaling",
    weight: "15%",
    color: "from-sky-500 to-blue-600",
    tip: "Fault Tolerance (Chịu lỗi - Zero Downtime) khác với High Availability (Sẵn sàng cao - có thể rớt vài giây để failover). Cả 2 đạt được nhờ Replication đa vùng AZ."
  },
  {
    subject: "Lịch sử tiến hóa, Tiền đề Web 2.0 & 5 Thách thức Đám mây",
    scope: "Timesharing 1960s, Ramesh Chellappa 1997, UGC, An ninh bảo mật dữ liệu",
    weight: "10%",
    color: "from-rose-500 to-pink-600",
    tip: "Bảo mật (Security) luôn là thách thức và mối lo số 1 (Top Concern). Web 2.0 là tiền đề trực tiếp dọn đường cho sự bùng nổ của SaaS."
  }
];

const SIMULATORS_LIST = [
  {
    id: "sim-1",
    title: "1. Trục Thời Gian Tiến Hóa & Ứng Dụng Đám Mây",
    sectionId: "cloud-ch1-s1",
    desc: "Khám phá 3 cột mốc lịch sử (1960s, 1990s, 2000s) và 6 lĩnh vực ứng dụng thực tiễn.",
    badge: "Mục I",
    badgeColor: "bg-sky-100 text-sky-800"
  },
  {
    id: "sim-2",
    title: "2. Bộ Radar & Luồng Gói Tin 5 Đặc Tính NIST",
    sectionId: "cloud-ch1-s2",
    desc: "Mô phỏng mạng đa thiết bị và thanh trượt đo lường 5 đặc tính cốt lõi theo lưu lượng người dùng.",
    badge: "Mục II",
    badgeColor: "bg-teal-100 text-teal-800"
  },
  {
    id: "sim-3",
    title: "3. Hộp Cát Ra Quyết Định Triển Khai Đám Mây",
    sectionId: "cloud-ch1-s3",
    desc: "Giải bài toán kịch bản cho Doanh nghiệp: Public vs Private vs Community vs Hybrid.",
    badge: "Mục III.1",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    id: "sim-4",
    title: "4. Kim Tự Tháp Trách Nhiệm Chung (IaaS - PaaS - SaaS)",
    sectionId: "cloud-ch1-s3",
    desc: "Bản đồ 9 tầng trách nhiệm Khách hàng vs Nhà cung cấp và 9 dịch vụ XaaS hiện đại.",
    badge: "Mục III.2",
    badgeColor: "bg-purple-100 text-purple-800"
  },
  {
    id: "sim-5",
    title: "5. Bản Đồ 3 Tầng Kiến Trúc Đám Mây (Platform Layers)",
    sectionId: "cloud-ch1-s4",
    desc: "Foundation/Ảo hóa ➔ Infrastructure ➔ Application & Đối chiếu Open-Source vs Thương mại.",
    badge: "Mục IV",
    badgeColor: "bg-indigo-100 text-indigo-800"
  },
  {
    id: "sim-6",
    title: "6. Radar Đánh Giá 5 Thách Thức Lớn",
    sectionId: "cloud-ch1-s5",
    desc: "Phân tích bảo mật (Top Concern), thiếu nhân lực, quản trị FinOps, tuân thủ pháp lý & đa đám mây.",
    badge: "Mục V",
    badgeColor: "bg-rose-100 text-rose-800"
  },
  {
    id: "sim-7",
    title: "7. Kính So Sánh Web 1.0 (Tĩnh) vs Web 2.0 (Tương Tác)",
    sectionId: "cloud-ch1-s6",
    desc: "Trực quan hóa bước nhảy từ Web tĩnh một chiều sang Web tương tác hai chiều bệ phóng cho SaaS.",
    badge: "Mục VI",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    id: "sim-8",
    title: "8. Bộ Mô Phỏng Chịu Lỗi AWS & Tự Động Co Giãn",
    sectionId: "cloud-ch1-s7",
    desc: "Thực nghiệm đánh sập Data Center, kích hoạt sao chép Replication đa AZ và thử nghiệm tăng vọt CPU.",
    badge: "Mục VII.1",
    badgeColor: "bg-blue-100 text-blue-800"
  }
];

const CHAPTER_SECTIONS = [
  { id: "cloud-ch1-s1", roman: "Mục I", title: "Tổng quan & Lịch sử Cloud", time: "5 phút", desc: "6 Ứng dụng thực tiễn & 3 Giai đoạn tiến hóa lịch sử" },
  { id: "cloud-ch1-s2", roman: "Mục II", title: "Định nghĩa & 5 Đặc tính NIST", time: "7 phút", desc: "Kiến trúc Front/Back-end & 5 Đặc tính vàng chuẩn NIST" },
  { id: "cloud-ch1-s3", roman: "Mục III", title: "Mô hình Triển khai & Dịch vụ", time: "8 phút", desc: "4 Mô hình triển khai & Tam giác dịch vụ SPI (IaaS/PaaS/SaaS)" },
  { id: "cloud-ch1-s4", roman: "Mục IV", title: "Công cụ & 3 Lớp Kiến trúc", time: "6 phút", desc: "Open-Source vs Commercial & Foundation/Infra/App layers" },
  { id: "cloud-ch1-s5", roman: "Mục V", title: "5 Thách thức lớn của Cloud", time: "5 phút", desc: "Bảo mật (Top Concern), nhân lực, quản trị, tuân thủ pháp lý" },
  { id: "cloud-ch1-s6", roman: "Mục VI", title: "Web 2.0 - Tiền đề của Cloud", time: "5 phút", desc: "Tương tác 2 chiều, UGC & bệ phóng trực tiếp cho mô hình SaaS" },
  { id: "cloud-ch1-s7", roman: "Mục VII", title: "Case Studies & 10 Từ khóa cốt lõi", time: "8 phút", desc: "Google/AWS High Reliability, Ma trận 10 từ khóa & 7 điểm chốt thi" }
];

const READINESS_TOPICS = [
  { id: "nist", label: "5 Đặc tính thiết yếu theo chuẩn NIST", weight: 25 },
  { id: "spi", label: "3 Mô hình dịch vụ SPI & Ma trận Trách nhiệm chung", weight: 30 },
  { id: "deployment", label: "4 Mô hình Triển khai (Public/Private/Community/Hybrid)", weight: 20 },
  { id: "reliability", label: "Độ tin cậy AWS (Replication, Redundancy, Fault Tolerance)", weight: 15 },
  { id: "security", label: "5 Thách thức lớn & Tiền đề Web 2.0", weight: 10 }
];

/* ============================================================
   MAIN COMPONENT: Chapter1HeroBanner
   ============================================================ */

export default function Chapter1HeroBanner() {
  const [activeView, setActiveView] = useState("pipeline"); // 'pipeline' | 'blueprint' | 'exam' | 'simulators'
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [selectedBlueprintTab, setSelectedBlueprintTab] = useState("features"); // 'features' | 'deployments' | 'services'
  const [readinessLevels, setReadinessLevels] = useState({
    nist: 3,
    spi: 3,
    deployment: 3,
    reliability: 3,
    security: 3
  });
  const [showReadinessResult, setShowReadinessResult] = useState(false);

  const canvasRef = useRef(null);

  // Background Ambient Particle Cloud Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.35 + 0.15
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.parentElement.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(217, 119, 6, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gentle repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          const force = (90 - dist) / 90;
          p.x += (dx / dist) * force * 0.6;
          p.y += (dy / dist) * force * 0.6;
        }

        ctx.fillStyle = `rgba(14, 165, 233, ${p.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate readiness score
  const readinessScore = useMemo(() => {
    let total = 0;
    READINESS_TOPICS.forEach((t) => {
      const val = readinessLevels[t.id] || 3;
      total += (val / 5) * t.weight;
    });
    return Math.round(total);
  }, [readinessLevels]);

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden border border-stone-200/90 bg-[#faf8f4] text-[#2c2a26] shadow-2xl font-sans">
      {/* Background Interactive Ambient Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Subtle Warm Gradient Backdrops */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-linear-to-bl from-amber-400/10 via-sky-400/10 to-transparent blur-3xl rounded-full pointer-events-none -mr-28 -mt-28" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-linear-to-tr from-emerald-400/10 via-teal-400/5 to-transparent blur-3xl rounded-full pointer-events-none -ml-28 -mb-28" />

      {/* ============================================================
          TOP HERO HEADER & CORE BADGES
          ============================================================ */}
      <div className="relative z-10 p-6 sm:p-10 border-b border-stone-200/80 bg-white/60 backdrop-blur-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-stone-900 text-amber-400 shadow-md">
            <Sparkles className="w-4 h-4" />
            Học Phần 1: Tổng Quan Nền Tảng
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 bg-stone-200/60 px-3 py-1.5 rounded-full">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            Chuẩn giáo trình NIST SP 800-145 & AWS Well-Architected
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
          Chương 1: Giới Thiệu Về Điện Toán Đám Mây
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-3 max-w-4xl leading-relaxed font-serif">
          Khởi hành từ cội nguồn <strong className="text-stone-900 font-sans">Timesharing 1960s</strong>, làm chủ bộ khung tiêu chuẩn <strong className="text-stone-900 font-sans">NIST 5-4-3</strong>, thấu hiểu ranh giới ma trận <strong className="text-stone-900 font-sans">Trách nhiệm chung (Shared Responsibility)</strong> và thiết kế hạ tầng đạt độ tin cậy chuẩn doanh nghiệp.
        </p>

        {/* ============================================================
            BENTO GRID 4 CHỈ SỐ VÀNG TƯƠNG TÁC
            ============================================================ */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {/* Bento 1: 5 NIST Features */}
          <div
            onClick={() => {
              setActiveView("blueprint");
              setSelectedBlueprintTab("features");
            }}
            className="group p-4 rounded-2xl bg-white/90 border border-stone-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">
                <span>Đặc tính cốt lõi</span>
                <Zap className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-sky-600">5 NIST</div>
              <div className="text-[11px] text-stone-600 font-medium mt-1">On-demand, Elasticity, Pooling...</div>
            </div>
            <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-sky-700 group-hover:translate-x-0.5 transition-transform">
              <span>Xem cấu trúc</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bento 2: 4 Deployment Models */}
          <div
            onClick={() => {
              setActiveView("blueprint");
              setSelectedBlueprintTab("deployments");
            }}
            className="group p-4 rounded-2xl bg-white/90 border border-stone-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">
                <span>Mô hình triển khai</span>
                <Globe className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">4 Mô Hình</div>
              <div className="text-[11px] text-stone-600 font-medium mt-1">Public, Private, Community, Hybrid</div>
            </div>
            <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
              <span>Xem đối chiếu</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bento 3: 3 SPI Service Models */}
          <div
            onClick={() => {
              setActiveView("blueprint");
              setSelectedBlueprintTab("services");
            }}
            className="group p-4 rounded-2xl bg-white/90 border border-stone-200 hover:border-purple-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">
                <span>Mô hình dịch vụ</span>
                <Layers className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-purple-600">3 Tầng SPI</div>
              <div className="text-[11px] text-stone-600 font-medium mt-1">IaaS ➔ PaaS ➔ SaaS</div>
            </div>
            <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-purple-700 group-hover:translate-x-0.5 transition-transform">
              <span>Xem kim tự tháp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bento 4: 10 Key Terms */}
          <div
            onClick={() => scrollToSection("cloud-ch1-s7")}
            className="group p-4 rounded-2xl bg-white/90 border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">
                <span>Bộ từ khóa cốt lõi</span>
                <Target className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-600">10 Thuật Ngữ</div>
              <div className="text-[11px] text-stone-600 font-medium mt-1">Auto Scaling, Chịu lỗi, Uptime...</div>
            </div>
            <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-amber-700 group-hover:translate-x-0.5 transition-transform">
              <span>Mở ma trận</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* ============================================================
            NAVIGATION TABS (4-PERSPECTIVE MASTER CONSOLE)
            ============================================================ */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-stone-200">
          <button
            onClick={() => setActiveView("pipeline")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === "pipeline"
                ? "bg-stone-900 text-amber-400 shadow-md ring-2 ring-stone-900"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <Compass className="w-4 h-4" />
            1. Lộ Trình Tiến Hóa (4 Chặng)
          </button>

          <button
            onClick={() => setActiveView("blueprint")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === "blueprint"
                ? "bg-stone-900 text-amber-400 shadow-md ring-2 ring-stone-900"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <Network className="w-4 h-4" />
            2. Kiến Trúc NIST (Sơ Đồ 5-4-3)
          </button>

          <button
            onClick={() => setActiveView("exam")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === "exam"
                ? "bg-stone-900 text-amber-400 shadow-md ring-2 ring-stone-900"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            3. Ma Trận Trọng Tâm Đề Thi
          </button>

          <button
            onClick={() => setActiveView("simulators")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === "simulators"
                ? "bg-stone-900 text-amber-400 shadow-md ring-2 ring-stone-900"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <Zap className="w-4 h-4" />
            4. Bệ Phóng 8 Simulators
          </button>
        </div>
      </div>

      {/* ============================================================
          MAIN TAB CONTENT AREA
          ============================================================ */}
      <div className="relative z-10 p-6 sm:p-10">
        {/* VIEW 1: PIPELINE EVOLUTION */}
        {activeView === "pipeline" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-stone-900">
                  Lộ Trình Tiến Hóa 4 Chặng Của Điện Toán Đám Mây
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Chọn từng chặng lịch sử để xem chi tiết các đột phá công nghệ và điều hướng đến mục học thuật.
                </p>
              </div>
            </div>

            {/* Stepper Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {PIPELINE_STEPS.map((step, idx) => {
                const isSelected = selectedStepIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedStepIndex(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                      isSelected
                        ? "bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400"
                        : "bg-white text-stone-800 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xl font-black font-mono ${isSelected ? "text-amber-400" : "text-amber-600"}`}>
                        {step.step}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                        isSelected ? "bg-stone-800 text-amber-300" : "bg-stone-100 text-stone-600"
                      }`}>
                        {step.period}
                      </span>
                    </div>
                    <div className="font-extrabold text-xs leading-snug line-clamp-2">
                      {step.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Step Deep-Dive Card */}
            {PIPELINE_STEPS[selectedStepIndex] && (
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-900 font-black flex items-center justify-center text-sm font-mono">
                      {PIPELINE_STEPS[selectedStepIndex].step}
                    </span>
                    <div>
                      <h4 className="font-black text-base text-stone-900">
                        {PIPELINE_STEPS[selectedStepIndex].label}
                      </h4>
                      <span className="text-xs font-semibold text-stone-500">
                        {PIPELINE_STEPS[selectedStepIndex].subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {PIPELINE_STEPS[selectedStepIndex].tag}
                  </span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-150 mb-4">
                  {PIPELINE_STEPS[selectedStepIndex].desc}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <span className="text-xs font-extrabold text-stone-900 uppercase tracking-wider block mb-2">
                    💡 Các cột mốc then chốt trong chặng:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PIPELINE_STEPS[selectedStepIndex].highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-stone-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => scrollToSection(PIPELINE_STEPS[selectedStepIndex].sectionId)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-amber-400 font-extrabold text-xs hover:bg-stone-800 transition-colors shadow-sm"
                  >
                    Cuộn đến bài học tương ứng
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: NIST ARCHITECTURE BLUEPRINT (5-4-3) */}
        {activeView === "blueprint" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-stone-900">
                  Sơ Đồ Khung Kiến Trúc Chuẩn NIST 5-4-3
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Khám phá mối quan hệ tương hỗ giữa 5 Đặc tính thiết yếu, 4 Mô hình Triển khai và 3 Tầng Dịch vụ SPI.
                </p>
              </div>

              {/* Sub-tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-100 border border-stone-200">
                <button
                  onClick={() => setSelectedBlueprintTab("features")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedBlueprintTab === "features"
                      ? "bg-white text-stone-900 shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  5 Đặc Tính NIST
                </button>
                <button
                  onClick={() => setSelectedBlueprintTab("deployments")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedBlueprintTab === "deployments"
                      ? "bg-white text-stone-900 shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  4 Mô Hình Triển Khai
                </button>
                <button
                  onClick={() => setSelectedBlueprintTab("services")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedBlueprintTab === "services"
                      ? "bg-white text-stone-900 shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  3 Tầng Dịch Vụ SPI
                </button>
              </div>
            </div>

            {/* Sub-tab 1: Features */}
            {selectedBlueprintTab === "features" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {NIST_BLUEPRINT.features.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-sky-300 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-sky-100 text-sky-800">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-xs text-stone-900">{feat.name}</h4>
                          <span className="text-[11px] font-semibold text-stone-500">({feat.vi})</span>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-2">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Sub-tab 2: Deployments */}
            {selectedBlueprintTab === "deployments" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NIST_BLUEPRINT.deployments.map((dep, i) => (
                  <div key={i} className={`p-4 rounded-2xl border shadow-xs ${dep.color}`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-black text-sm">{dep.name}</h4>
                      <span className="text-xs font-bold opacity-80">({dep.vi})</span>
                    </div>
                    <p className="text-xs leading-relaxed mt-1 opacity-90">{dep.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-tab 3: Services */}
            {selectedBlueprintTab === "services" && (
              <div className="space-y-3">
                {NIST_BLUEPRINT.services.map((srv, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${srv.color} text-white font-black flex flex-col items-center justify-center shrink-0 shadow-sm`}>
                        <span className="text-base leading-none">{srv.name}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-black text-sm text-stone-900">{srv.vi}</h4>
                          <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-mono">
                            {srv.slogan}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed max-w-2xl">{srv.desc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => scrollToSection("cloud-ch1-s3")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 self-end sm:self-center shrink-0"
                    >
                      Chi tiết Mục III
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: EXAM BLUEPRINT */}
        {activeView === "exam" && (
          <div className="space-y-4 animate-in fade-in duration-300 max-w-4xl">
            <div>
              <h3 className="text-lg font-black text-stone-900">
                Ma Trận Phân Bổ Tỷ Trọng Điểm Số Đề Thi (Exam Blueprint)
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Nắm chắc tỷ trọng điểm số và các mẹo giải đề chuẩn để tối ưu hóa thời gian ôn luyện.
              </p>
            </div>

            <div className="space-y-3.5">
              {EXAM_PILLARS.map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div>
                      <h4 className="font-extrabold text-sm text-stone-900">{p.subject}</h4>
                      <span className="text-[11px] text-stone-500 font-medium">{p.scope}</span>
                    </div>
                    <span className="text-lg font-black text-amber-600 font-mono shrink-0">
                      {p.weight}
                    </span>
                  </div>

                  <div className="w-full h-2.5 rounded-full bg-stone-100 overflow-hidden my-2">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${p.color} transition-all duration-700`}
                      style={{ width: p.weight }}
                    />
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-stone-800 leading-relaxed">
                    💡 <strong className="text-amber-900">Chiến thuật giải đề:</strong> {p.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: SIMULATORS LAUNCHPAD */}
        {activeView === "simulators" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div>
              <h3 className="text-lg font-black text-stone-900">
                Bệ Phóng 8 Phòng Thí Nghiệm Trực Quan (Interactive Labs Hub)
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Các bộ mô phỏng tương tác cao giúp trực quan hóa 100% các khái niệm trừu tượng của toàn chương.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SIMULATORS_LIST.map((sim, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToSection(sim.sectionId)}
                  className="group p-3.5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${sim.badgeColor}`}>
                        {sim.badge}
                      </span>
                      <Zap className="w-3.5 h-3.5 text-amber-500 opacity-60 group-hover:opacity-100" />
                    </div>
                    <h4 className="font-extrabold text-xs text-stone-900 group-hover:text-amber-700 leading-snug">
                      {sim.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-1.5 leading-relaxed">
                      {sim.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-amber-600">
                    <span>Mở phòng lab</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================
            MINI READINESS SCANNER (SELF-ASSESSMENT WIDGET)
            ============================================================ */}
        <div className="mt-10 p-6 rounded-3xl bg-linear-to-r from-stone-900 via-stone-850 to-stone-900 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <TrendingUp className="w-4 h-4" />
                Đo Lường Độ Sẵn Sàng
              </div>
              <h3 className="text-base sm:text-lg font-black">
                Mini Readiness Scanner — Tự Đánh Giá Năng Lực Trước Kỳ Thi
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Kéo chỉnh mức độ hiểu biết (1 đến 5 sao) của bạn cho 5 chủ đề để nhận dự báo mức độ sẵn sàng và gợi ý lộ trình ôn tập.
              </p>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-3 bg-stone-800/80 px-4 py-2.5 rounded-2xl border border-stone-700 shrink-0">
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-stone-400">Chỉ số sẵn sàng</div>
                <div className="text-xl font-black text-amber-400 font-mono">{readinessScore}%</div>
              </div>
              <button
                onClick={() => setShowReadinessResult(!showReadinessResult)}
                className="px-3 py-1.5 rounded-xl bg-amber-500 text-stone-900 font-extrabold text-xs hover:bg-amber-400 transition-colors"
              >
                {showReadinessResult ? "Đóng gợi ý" : "Xem gợi ý"}
              </button>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {READINESS_TOPICS.map((topic) => (
              <div key={topic.id} className="p-3 rounded-xl bg-stone-800/50 border border-stone-750">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-stone-300">{topic.label}</span>
                  <span className="font-mono font-bold text-amber-400">{readinessLevels[topic.id]}/5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={readinessLevels[topic.id]}
                  onChange={(e) =>
                    setReadinessLevels({
                      ...readinessLevels,
                      [topic.id]: parseInt(e.target.value)
                    })
                  }
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Advice Box */}
          {showReadinessResult && (
            <div className="mt-4 p-4 rounded-2xl bg-stone-800 border border-amber-500/40 text-xs animate-in fade-in duration-200">
              <div className="font-extrabold text-amber-300 flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4" />
                {readinessScore >= 80
                  ? "Xuất sắc! Bạn đã có nền tảng rất vững vàng để đạt điểm tuyệt đối Chương 1."
                  : readinessScore >= 60
                  ? "Khá tốt! Bạn nên dành thêm thời gian luyện sâu Mục III (Mô hình SPI) và Mục VII (Độ tin cậy AWS)."
                  : "Cần chú ý! Hãy đi tuần tự từ Mục I đến VII và làm toàn bộ 7 câu Micro-Quiz để củng cố kiến thức."}
              </div>
              <p className="text-stone-300 leading-relaxed">
                Khuyến nghị: Dành <strong>35 - 45 phút</strong> trải nghiệm tuần tự 8 bộ mô phỏng trực quan và đọc kỹ hộp <em>7 Điểm vàng ghi nhớ nhanh</em> tại Mục VII.2 để nắm trọn vẹn điểm số.
              </p>
            </div>
          )}
        </div>

        {/* ============================================================
            SMART CHAPTER QUICK-JUMPER (NAVIGATION ANCHORS)
            ============================================================ */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-black uppercase tracking-wider text-stone-900">
                Điều Hướng Nhanh Toàn Chương (Smart Quick-Jumper)
              </span>
            </div>
            <span className="text-xs text-stone-500 font-medium">Tổng thời lượng học: ~44 phút</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {CHAPTER_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group p-3 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition-all text-left flex items-start gap-2.5"
              >
                <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-black text-[10px] shrink-0 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                  {sec.roman}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-xs text-stone-900 truncate group-hover:text-amber-700 transition-colors">
                    {sec.title}
                  </div>
                  <div className="text-[10px] text-stone-500 truncate mt-0.5">
                    {sec.desc}
                  </div>
                </div>
                <span className="text-[10px] text-stone-400 font-mono shrink-0">
                  {sec.time}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM FOOTER ACTION BAR
          ============================================================ */}
      <div className="px-6 sm:px-10 py-4 bg-stone-900 text-stone-300 text-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Mục tiêu đầu ra: Nắm chắc 100% câu hỏi trắc nghiệm & phỏng vấn về nền tảng Cloud Computing.</span>
        </div>
        <button
          onClick={() => scrollToSection("cloud-ch1-s1")}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-stone-900 font-extrabold text-xs hover:bg-amber-400 transition-colors shadow-sm"
        >
          Bắt đầu học Mục I
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
