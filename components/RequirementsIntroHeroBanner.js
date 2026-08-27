"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, 
  Workflow, 
  Database, 
  Users, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Boxes, 
  GitBranch, 
  FileCode, 
  RotateCw,
  HelpCircle,
  Clock,
  Target,
  ExternalLink
} from "lucide-react";

export default function RequirementsIntroHeroBanner() {
  const [activeView, setActiveView] = useState("all-sections"); // "all-sections" | "sdlc-up" | "ba-bridge" | "is-dikw"
  const [selectedSectionCard, setSelectedSectionCard] = useState("sec-1");
  const [teaserAnswered, setTeaserAnswered] = useState(null);
  const canvasRef = useRef(null);

  // Background Cyber Matrix & Blueprint Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.6 
        ? "rgba(16, 185, 129, 0.4)" 
        : Math.random() > 0.3 
        ? "rgba(6, 182, 212, 0.4)" 
        : "rgba(168, 85, 247, 0.4)"
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint cyber grid
      ctx.strokeStyle = "rgba(16, 185, 129, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 28;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw animated nodes & connections
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 95) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.12 * (1 - dist / 95)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Smooth scroll helper to jump down to sections
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sectionCards = [
    {
      id: "sec-1",
      sectionNumber: "Mục I",
      targetId: "ad1-section-1",
      title: "Information System (Hệ thống thông tin)",
      subtitle: "5 Thành phần, IPO & Chuỗi giá trị DIKW",
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      border: "border-blue-400/50",
      accentBg: "bg-blue-950/40",
      points: [
        "Mô hình xử lý cơ bản: Input ➔ Process ➔ Output ➔ Feedback.",
        "5 Thành phần: Hardware, Software, Data, People, Procedures.",
        "Phân tầng quản trị 3 cấp: ESS (Cấp cao) ➔ MIS/DSS (Cấp trung) ➔ TPS (Tác nghiệp)."
      ]
    },
    {
      id: "sec-2",
      sectionNumber: "Mục II",
      targetId: "ad1-section-2",
      title: "Role of the (IT) Business Analyst",
      subtitle: "BA là Cầu nối (The Bridge: Business ➔ BA ➔ IT)",
      icon: Users,
      color: "from-purple-600 to-pink-600",
      border: "border-purple-400/50",
      accentBg: "bg-purple-950/40",
      points: [
        "5 Trách nhiệm vàng: Elicit ➔ Analyze ➔ Document ➔ Communicate ➔ Validate.",
        "Kỹ năng kép: Analytical/Technical vs Interpersonal/Soft Skills.",
        "Tham gia sâu rộng toàn bộ SDLC với mật độ 100% tại Planning & Analysis."
      ]
    },
    {
      id: "sec-3",
      sectionNumber: "Mục III",
      targetId: "ad1-section-3",
      title: "Bộ công cụ BA: Methodology – Model – Tool – Technique",
      subtitle: "Hệ sinh thái 4 trụ cột và Thư viện 6 Biểu đồ UML",
      icon: Boxes,
      color: "from-emerald-600 to-teal-600",
      border: "border-emerald-400/50",
      accentBg: "bg-emerald-950/40",
      points: [
        "Methodology (Khung quy trình) bao bọc Models, Techniques và Tools.",
        "Thư viện 6 Biểu đồ UML chuẩn: Structural (CL, CM) vs Behavioral (UC, SQ, AC, ST).",
        "5 Kỹ thuật khơi mở yêu cầu: Interviews, JAD, Observation, Document, Prototyping."
      ]
    },
    {
      id: "sec-4",
      sectionNumber: "Mục IV",
      targetId: "ad1-section-4",
      title: "Stages in Building IS (Các giai đoạn xây dựng)",
      subtitle: "SDLC 5 Giai Đoạn & Unified Process (UP) 4 Pha",
      icon: Workflow,
      color: "from-amber-600 to-orange-600",
      border: "border-amber-400/50",
      accentBg: "bg-amber-950/40",
      points: [
        "SDLC: Planning (Feasibility Study 3 khía cạnh) ➔ Analysis ➔ Design ➔ Implementation ➔ Support.",
        "Unified Process: Inception ➔ Elaboration (Kiến trúc) ➔ Construction ➔ Transition.",
        "Đối chiếu Waterfall (Tuyến tính 1 pass) vs UP (Lặp tăng dần Iterative Increments)."
      ]
    },
    {
      id: "sec-5",
      sectionNumber: "Mục V",
      targetId: "ad1-section-5",
      title: "Tổng kết Chapter 1 & Grand Master Exam",
      subtitle: "3 Trụ Cột Tri Thức, Flashcards Key Terms & Đề Thi 10 Câu",
      icon: ShieldCheck,
      color: "from-rose-600 to-red-600",
      border: "border-rose-400/50",
      accentBg: "bg-rose-950/40",
      points: [
        "Master Dashboard tóm lược 3 bài học cốt lõi toàn chương.",
        "Bộ thẻ Flashcards tương tác 8 thuật ngữ học thuật quan trọng.",
        "Lưu ý trọng tâm ôn thi & Đề thi thử Grand Master Exam 10 câu có tính giờ."
      ]
    }
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/80 text-slate-100 shadow-2xl p-5 sm:p-8 mb-10 transition-all duration-300">
      {/* Background Cyber Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="relative z-10 space-y-6">
        {/* Top Header Badge & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-500/20 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 text-white font-bold text-xl">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Chapter 1 Overview • Section 0
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Master Cyber-Blueprint
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white mt-1">
                Requirements Analysis & Design Nexus
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Bản đồ tổng quan tích hợp toàn diện 5 Mục tri thức cốt lõi của Chương 1: Từ Hệ thống thông tin đến Vai trò BA và Vòng đời SDLC / Unified Process.
              </p>
            </div>
          </div>

          {/* 4 Multi-Perspective Switcher Tabs */}
          <div className="flex flex-wrap gap-1 bg-slate-900/90 backdrop-blur border border-slate-700/80 p-1.5 rounded-2xl shadow-inner text-xs font-bold">
            <button
              onClick={() => setActiveView("all-sections")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === "all-sections"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Boxes className="w-4 h-4" /> ★ Toàn Cảnh 5 Mục
            </button>
            <button
              onClick={() => setActiveView("sdlc-up")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === "sdlc-up"
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <RotateCw className="w-4 h-4" /> 🔄 SDLC & UP Stream
            </button>
            <button
              onClick={() => setActiveView("ba-bridge")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === "ba-bridge"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Users className="w-4 h-4" /> 🌉 Cầu Nối BA & Toolbox
            </button>
            <button
              onClick={() => setActiveView("is-dikw")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === "is-dikw"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Database className="w-4 h-4" /> 🗂️ IS Structure & DIKW
            </button>
          </div>
        </div>

        {/* Top Quick Radar Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">5 Thành phần</div>
              <div className="text-[10px] text-slate-400">Hardware, Software, Data...</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">1 Cầu Nối BA</div>
              <div className="text-[10px] text-slate-400">Business ➔ BA ➔ IT</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Boxes className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">4 Trụ Cột Toolbox</div>
              <div className="text-[10px] text-slate-400">Methodology, Model, Tool, Tech</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white">5 SDLC & 4 UP</div>
              <div className="text-[10px] text-slate-400">Vòng đời phát triển lặp</div>
            </div>
          </div>
        </div>

        {/* ========================================================
            VIEW 1: FULL CHAPTER 5-SECTION OVERVIEW (RADAR)
           ======================================================== */}
        {activeView === "all-sections" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs sm:text-sm text-slate-300">
                Khám phá tổng quan <strong className="text-emerald-400">5 Mục La Mã</strong> của Chương 1. Bấm chọn từng thẻ để xem điểm nhấn hoặc bấm <strong className="text-cyan-400">&quot;Khám phá bài học&quot;</strong> để nhảy mượt xuống nội dung chi tiết:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {sectionCards.map((card) => {
                const Icon = card.icon;
                const isSelected = selectedSectionCard === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setSelectedSectionCard(card.id)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border backdrop-blur flex flex-col justify-between ${
                      isSelected
                        ? `bg-slate-800/90 ${card.border} ring-2 ring-emerald-400/50 shadow-xl scale-[1.02]`
                        : `bg-slate-950/70 border-slate-800/80 hover:bg-slate-800/50 text-slate-300`
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${card.color} text-white shadow`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300">
                          {card.sectionNumber}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-xs sm:text-sm text-white line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 font-bold">Xem chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Section Details Showcase */}
            {sectionCards.find((c) => c.id === selectedSectionCard) && (
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {(() => {
                  const curr = sectionCards.find((c) => c.id === selectedSectionCard);
                  const CurrIcon = curr.icon;
                  return (
                    <>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                            {curr.sectionNumber}
                          </span>
                          <h4 className="font-extrabold text-sm sm:text-base text-white">{curr.title}</h4>
                        </div>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {curr.points.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => scrollToSection(curr.targetId)}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg flex items-center gap-2 shrink-0 transition-all"
                      >
                        <span>Cuộn đến {curr.sectionNumber}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            VIEW 2: SDLC & UNIFIED PROCESS STREAM
           ======================================================== */}
        {activeView === "sdlc-up" && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-amber-400" />
                  Đối Chiếu 2 Mô Hình Vòng Đời: SDLC 5 Giai Đoạn vs Unified Process 4 Pha
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Khái quát toàn diện lộ trình phát triển từ ý tưởng kinh doanh đến triển khai và bảo trì.
                </p>
              </div>
            </div>

            {/* SDLC Stream */}
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-400 block mb-2">
                1. SDLC Vòng Đời Chu Kỳ 5 Pha:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {[
                  { n: "1. Planning", d: "Feasibility Study 3 khía cạnh" },
                  { n: "2. Analysis", d: "Gather & Model requirements" },
                  { n: "3. Design", d: "Architecture & UI/Database" },
                  { n: "4. Implementation", d: "Code, Test & Deploy" },
                  { n: "5. Support", d: "Maintenance & Feedback Loop" }
                ].map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <div className="font-bold text-white">{s.n}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* UP Stream */}
            <div>
              <span className="text-xs font-mono font-bold uppercase text-purple-400 block mb-2">
                2. Unified Process (UP) Lặp Tăng Dần 4 Pha:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {[
                  { n: "1. Inception", d: "Phạm vi & Business Case" },
                  { n: "2. Elaboration", d: "Baseline kiến trúc & Triệt tiêu rủi ro" },
                  { n: "3. Construction", d: "Lập trình tăng dần Working Increments" },
                  { n: "4. Transition", d: "Triển khai thực tế & Go-Live" }
                ].map((u, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 text-xs">
                    <div className="font-bold text-white">{u.n}</div>
                    <div className="text-[11px] text-purple-300/80 mt-0.5">{u.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 3: BA BRIDGE & 4-PILLAR TOOLBOX
           ======================================================== */}
        {activeView === "ba-bridge" && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  Mô Hình Cầu Nối (The BA as a Bridge) & 4 Trụ Cột BA Toolbox
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Vị trí trung gian điều phối và bộ công cụ phương pháp luận của Business Analyst.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30">
                <span className="text-[10px] font-mono uppercase text-blue-400 font-bold block mb-1">Bên trái</span>
                <h4 className="font-extrabold text-sm text-white">Business Stakeholders</h4>
                <p className="text-xs text-slate-300 mt-1">Khách hàng, Giám đốc, Nhân viên nghiệp vụ</p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-400 ring-2 ring-purple-400/40 shadow-lg">
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">Cầu nối trung tâm</span>
                <h4 className="font-extrabold text-sm text-white">Business Analyst (BA)</h4>
                <p className="text-xs text-purple-200 mt-1">Elicit ➔ Analyze ➔ Document ➔ Validate</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1">Bên phải</span>
                <h4 className="font-extrabold text-sm text-white">Technical Dev Team</h4>
                <p className="text-xs text-slate-300 mt-1">Architects, Developers, QA/Testers</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="text-cyan-400 font-bold block mb-1">4 Trụ Cột BA Toolbox:</span>
              <span className="font-mono text-slate-200">
                METHODOLOGY (Khung tổng thể) ➔ MODELS (Use Case, Class, Sequence) ➔ TECHNIQUES (Phỏng vấn, JAD, Prototyping) ➔ TOOLS (CASE tools, Jira, Figma).
              </span>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 4: IS STRUCTURE & DIKW PYRAMID
           ======================================================== */}
        {activeView === "is-dikw" && (
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Cấu Trúc Hệ Thống Thông Tin & Chuỗi Chuyển Hóa Giá Trị DIKW
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Bản chất vận hành biến đổi dữ liệu thô thành tri thức hỗ trợ ra quyết định kinh doanh.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs font-bold uppercase text-cyan-400 block mb-2">
                  5 Thành Phần Cốt Lõi (Core Components):
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>● <b>Hardware:</b> Thiết bị vật lý (Máy chủ Server, Máy trạm, Mạng LAN).</li>
                  <li>● <b>Software:</b> Phần mềm hệ thống & Ứng dụng nghiệp vụ (ERP, CRM).</li>
                  <li>● <b>Data:</b> Cơ sở dữ liệu và các bản ghi số liệu kinh doanh.</li>
                  <li>● <b>People:</b> Người dùng cuối, nhà quản lý và đội ngũ kỹ thuật IT.</li>
                  <li>● <b>Procedures:</b> Quy trình chuẩn vận hành và chính sách an ninh dữ liệu.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-amber-400 block mb-2">
                    Chuỗi Giá Trị DIKW:
                  </span>
                  <div className="space-y-1 text-xs text-slate-300 font-mono">
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">1. DATA: Dữ liệu thô chưa qua xử lý (Ví dụ: &quot;38.5&quot;)</div>
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">2. INFORMATION: Dữ liệu có ngữ cảnh (&quot;Nhiệt độ bệnh nhân 38.5°C&quot;)</div>
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">3. KNOWLEDGE: Tri thức thấu hiểu (&quot;Bệnh nhân bị sốt cao cần theo dõi&quot;)</div>
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">4. WISDOM / DECISION: Quyết định chính xác (&quot;Cấp thuốc hạ sốt ngay&quot;)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mini Interactive Knowledge Teaser */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="text-amber-300 font-bold block">Khởi động tư duy trước khi vào bài:</span>
              <span className="text-slate-300">
                Trong 4 trụ cột BA Toolbox, thành phần nào đóng vai trò là <b>Khung quy trình bao bọc toàn bộ dự án</b>?
              </span>
            </div>
          </div>

          <div className="flex gap-2 shrink-0">
            {teaserAnswered === null ? (
              <>
                <button
                  onClick={() => setTeaserAnswered("methodology")}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-emerald-600 border border-slate-700 text-slate-200 font-bold transition-all"
                >
                  Methodology
                </button>
                <button
                  onClick={() => setTeaserAnswered("tool")}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-rose-600 border border-slate-700 text-slate-200 font-bold transition-all"
                >
                  CASE Tool
                </button>
              </>
            ) : teaserAnswered === "methodology" ? (
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold">
                ✅ Chính xác! Methodology là Khung bao quanh Models, Techniques, Tools.
              </span>
            ) : (
              <span className="px-3 py-1.5 rounded-lg bg-rose-950 text-rose-300 border border-rose-500/40 font-bold">
                ❌ Chưa đúng! Tools chỉ là phần mềm hỗ trợ; Methodology mới là Khung tổng thể.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
