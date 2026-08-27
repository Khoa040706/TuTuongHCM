"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, 
  Workflow, 
  RotateCw, 
  GitBranch, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Boxes, 
  Database, 
  FileCode, 
  ExternalLink,
  Target,
  Building2,
  Scale,
  FileCheck2,
  DoorOpen,
  Users
} from "lucide-react";

export default function Chapter2HeroBanner() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "sdlc-stream" | "modeling-nexus" | "feasibility-gate"
  const canvasRef = useRef(null);

  // Background Cyber Matrix Canvas Effect with Cyan Neon & Sapphire Theme
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

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(6, 182, 212, 0.5)" : "rgba(59, 130, 246, 0.4)"
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Cyber Grid
      ctx.strokeStyle = "rgba(6, 182, 212, 0.04)";
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

      // Nodes & Connecting Lines
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
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.14 * (1 - dist / 95)})`;
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

  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sectionsOverview = [
    {
      id: "sec-1",
      roman: "Mục I",
      targetId: "ad2-section-1",
      title: "Predictive vs Adaptive SDLC",
      desc: "Umbrella Concept SDLC vs Methodology & Đấu trường 6 chiều kích đối chiếu chuyên sâu.",
      icon: RotateCw,
      color: "from-cyan-600 to-blue-600",
      border: "border-cyan-500/40"
    },
    {
      id: "sec-2",
      roman: "Mục II",
      targetId: "ad2-section-2",
      title: "SDLC Phases (5 Giai đoạn)",
      desc: "5 Câu hỏi định hướng sống còn (Why, What, How, Build, Keep) & Bóc tách chi tiết Activities / Deliverables.",
      icon: Workflow,
      color: "from-blue-600 to-indigo-600",
      border: "border-blue-500/40"
    },
    {
      id: "sec-3",
      roman: "Mục III",
      targetId: "ad2-section-3",
      title: "Business Modeling (Mô hình hóa doanh nghiệp)",
      desc: "Hiểu ngữ cảnh trước khi viết code, 4 khái niệm Actor [A], Worker [W], Event [E], Process [P] & Phân định Inside/Outside.",
      icon: Building2,
      color: "from-purple-600 to-pink-600",
      border: "border-purple-500/40"
    },
    {
      id: "sec-4",
      roman: "Mục IV",
      targetId: "ad2-section-4",
      title: "Initiation Phase (Khởi động dự án)",
      desc: "Cổng kiểm soát Gatekeeper (Approve/Reject), System Request và Thẩm định Khả thi 3 chiều (Technical, Economic ROI, Organizational).",
      icon: DoorOpen,
      color: "from-amber-600 to-orange-600",
      border: "border-amber-500/40"
    },
    {
      id: "sec-5",
      roman: "Mục V",
      targetId: "ad2-section-5",
      title: "Business Use Cases & Activity Diagrams",
      desc: "Mô hình hóa Black-box (ký hiệu /), Sơ đồ 3 Swimlanes (Customer, Sales, Warehouse) & Grand Master Exam 10 câu.",
      icon: FileCheck2,
      color: "from-emerald-600 to-teal-600",
      border: "border-emerald-500/40"
    }
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-cyan-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/90 text-slate-100 shadow-2xl p-5 sm:p-8 mb-10 transition-all duration-300">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="relative z-10 space-y-6">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white font-bold text-xl">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Chapter 2 Master Blueprint • Section 0
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> SDLC & Business Modeling Overview
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white mt-1">
                Systems Development Life Cycle & Business Modeling
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Tổng quan hóa toàn bộ vòng đời phát triển phần mềm, 2 trường phái tổ chức, 5 giai đoạn cốt lõi và phương pháp mô hình hóa quy trình doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Perspective Switcher 4 Tabs */}
          <div className="flex flex-wrap bg-slate-900/90 backdrop-blur border border-slate-700/80 p-1 rounded-2xl text-xs font-bold gap-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Boxes className="w-3.5 h-3.5" /> 1. Toàn Cảnh
            </button>
            <button
              onClick={() => setActiveTab("sdlc-stream")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "sdlc-stream"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" /> 2. 5 Pha SDLC
            </button>
            <button
              onClick={() => setActiveTab("modeling-nexus")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "modeling-nexus"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" /> 3. Business Modeling
            </button>
            <button
              onClick={() => setActiveTab("feasibility-gate")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "feasibility-gate"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Scale className="w-3.5 h-3.5" /> 4. Feasibility Gate
            </button>
          </div>
        </div>

        {/* Quick Metrics Bar 5 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <RotateCw className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">2 Approaches</div>
              <div className="text-[10px] text-slate-400">Predictive vs Adaptive</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Workflow className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">5 SDLC Phases</div>
              <div className="text-[10px] text-slate-400">Planning ➔ Support</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">4 Key Concepts</div>
              <div className="text-[10px] text-slate-400">Actor, Worker, Event, Process</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">3 Feasibility Dims</div>
              <div className="text-[10px] text-slate-400">Technical, ROI, Organization</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 col-span-2 sm:col-span-1">
            <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-extrabold text-xs sm:text-sm text-white">2 UML Models</div>
              <div className="text-[10px] text-slate-400">Use Case & Activity Diagram</div>
            </div>
          </div>
        </div>

        {/* Tab 1: Overview - 5 Section Cards Grid */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-1.5">
                <Boxes className="w-4 h-4" /> Bản đồ 5 chuyên đề kiến thức cốt lõi Chapter 2:
              </span>
              <span className="text-[11px] text-slate-400">Bấm nút để cuộn nhanh đến bài học tương ứng</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {sectionsOverview.map((sec) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.id}
                    className={`p-4 sm:p-5 rounded-2xl border ${sec.border} bg-slate-950/80 flex flex-col justify-between space-y-3 shadow-lg hover:bg-slate-900/70 transition-all`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${sec.color} text-white shadow`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                          {sec.roman}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white">{sec.title}</h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{sec.desc}</p>
                    </div>

                    <button
                      onClick={() => scrollToSection(sec.targetId)}
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-cyan-600 border border-slate-700 hover:border-cyan-400 text-cyan-300 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Học ngay {sec.roman}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: 5 SDLC Phases Stream */}
        {activeTab === "sdlc-stream" && (
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-blue-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-blue-400 flex items-center gap-2">
                <Workflow className="w-4 h-4" /> Dòng chảy 5 giai đoạn SDLC & 5 câu hỏi định hướng sự sống còn:
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                Core SDLC Pipeline
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { p: "Phase 1: Planning", q: "Why build it?", d: "Business Value & Feasibility Study", color: "from-amber-500 to-orange-600" },
                { p: "Phase 2: Analysis", q: "What is needed?", d: "Gather Requirements & AS-IS/TO-BE Models", color: "from-emerald-500 to-teal-600" },
                { p: "Phase 3: Design", q: "How will it work?", d: "System Architecture, Database & UI/UX", color: "from-cyan-500 to-blue-600" },
                { p: "Phase 4: Implementation", q: "Build & deploy", d: "Construct Code, Test & Go-Live", color: "from-purple-500 to-pink-600" },
                { p: "Phase 5: Support", q: "Keep it running", d: "Maintenance, Enhancements & Help-desk", color: "from-rose-500 to-red-600" }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400">Step {idx + 1}</span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    </div>
                    <div className="font-extrabold text-xs sm:text-sm text-white">{item.p}</div>
                    <div className="text-cyan-300 font-bold text-xs mt-1">👉 {item.q}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>📌 <strong>Quy tắc thực thi:</strong> Trong <em>Predictive</em> (Thác nước) chạy 1 lần tuần tự; trong <em>Adaptive</em> (Agile/UP) lặp lại cả 5 phase trong mỗi Iteration ngắn.</span>
              <button 
                onClick={() => scrollToSection("ad2-section-2")}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 ml-2"
              >
                Xem chi tiết Mục II
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Business Modeling Nexus */}
        {activeTab === "modeling-nexus" && (
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-purple-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Lăng kính Business Modeling & Ranh giới Enterprise:
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Context Before Automating
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { code: "A", name: "Business Actor", def: "Tác nhân bên NGOÀI (Khách hàng, Nhà cung cấp)", note: "Khởi tạo / Nhận giá trị" },
                { code: "W", name: "Business Worker", def: "Nhân sự bên TRONG (Sales clerk, Kế toán, Kho)", note: "Thực thi các bước trong quy trình" },
                { code: "E", name: "Business Event", def: "Sự kiện KÍCH HOẠT (Đơn hàng đến, Cập cảng)", note: "Điểm bắt đầu Trigger" },
                { code: "P", name: "Business Process", def: "Chuỗi hoạt động END-TO-END tạo ra giá trị", note: "Mô hình bằng Activity Diagram" }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                        [{item.code}]
                      </span>
                    </div>
                    <div className="font-extrabold text-xs sm:text-sm text-white">{item.name}</div>
                    <div className="text-xs text-slate-300 mt-1">{item.def}</div>
                  </div>
                  <div className="text-[10px] text-amber-300 font-mono mt-2 pt-2 border-t border-slate-800">
                    💡 {item.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>🎯 <strong>Mục tiêu:</strong> Model business trước khi model hệ thống giúp hiểu ngữ cảnh thực, phát hiện điểm nghẽn và xác định ranh giới Inside/Outside.</span>
              <button 
                onClick={() => scrollToSection("ad2-section-3")}
                className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shrink-0 ml-2"
              >
                Xem chi tiết Mục III
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Feasibility Gate */}
        {activeTab === "feasibility-gate" && (
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                <Scale className="w-4 h-4" /> Cổng Thẩm Định Khả Thi (Initiation Gatekeeper & Feasibility 3D):
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Go / No-Go Decision Gate
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="font-extrabold text-sm text-cyan-300 mb-1">1. Technical Feasibility</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hệ thống có thể xây dựng được với công nghệ hiện tại và kỹ năng của đội ngũ không? Rủi ro tích hợp hệ thống cũ.
                  </p>
                </div>
                <div className="text-[11px] text-cyan-400 font-mono mt-3">👉 Can we build it?</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="font-extrabold text-sm text-emerald-300 mb-1">2. Economic Feasibility</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lợi ích kỳ vọng có vượt tổng chi phí đầu tư không? Phân tích tỷ suất hoàn vốn ROI, NPV và thời gian hoàn vốn Payback.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-3">👉 Will it pay for itself?</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="font-extrabold text-sm text-amber-300 mb-1">3. Organizational Feasibility</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hệ thống có được chấp nhận sử dụng không? Có phù hợp với chiến lược, văn hóa và sự ủng hộ của ban lãnh đạo không?
                  </p>
                </div>
                <div className="text-[11px] text-amber-400 font-mono mt-3">👉 Will they use it?</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>🚪 <strong>Đầu ra:</strong> Nếu đạt ➔ Phê duyệt <em>Project Charter</em>; nếu không đạt ➔ Dừng dự án ngay tại cổng để tránh lãng phí.</span>
              <button 
                onClick={() => scrollToSection("ad2-section-4")}
                className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 ml-2"
              >
                Xem chi tiết Mục IV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
