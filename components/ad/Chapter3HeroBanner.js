"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, 
  Workflow, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Layers, 
  BookOpen, 
  Activity, 
  Eye, 
  Cpu, 
  Zap, 
  Clock, 
  GitBranch, 
  Users, 
  Box, 
  FileText,
  ChevronRight,
  ExternalLink
} from "lucide-react";

// 6 Core Pillars of Chapter 3
const PILLARS = [
  {
    id: "p1",
    num: "01",
    title: "UP Phases & Initiation",
    subtitle: "Pha Khởi đầu (Inception)",
    icon: Compass,
    color: "amber",
    gradient: "from-amber-500/20 to-amber-600/10 border-amber-300/80 text-amber-900",
    badge: "Section I",
    keyConcepts: ["Unified Process 4 pha", "Initiation Objectives", "Scope Statement", "Feasibility Gates"],
    takeaway: "Initiation trả lời câu hỏi cốt tử: 'Hệ thống này có đáng làm không và phạm vi tới đâu?' trước khi thiết kế kiến trúc."
  },
  {
    id: "p2",
    num: "02",
    title: "Use Case Model Foundations",
    subtitle: "Nền tảng Biểu đồ & Đặc tả",
    icon: FileText,
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/10 border-blue-300/80 text-blue-900",
    badge: "Section II",
    keyConcepts: ["Use Case Diagram", "Brief Description", "Fully-Developed Spec", "Happy Path vs Alternate"],
    takeaway: "Use Case là hợp đồng hành vi giữa người dùng và hệ thống, mang lại giá trị đo lường được cho Actor."
  },
  {
    id: "p3",
    num: "03",
    title: "Event Decomposition",
    subtitle: "Phân rã Sự kiện & Event Table",
    icon: Zap,
    color: "emerald",
    gradient: "from-emerald-500/20 to-emerald-600/10 border-emerald-300/80 text-emerald-900",
    badge: "Section III",
    keyConcepts: ["External Events", "Temporal Events", "State Events", "Master Event Table 6 cột"],
    takeaway: "Event-Driven Thinking: Phần mềm chỉ tồn tại để phản hồi sự kiện thực tế trong đời sống nghiệp vụ."
  },
  {
    id: "p4",
    num: "04",
    title: "Actor Identification",
    subtitle: "Nhận diện Tác nhân & Vai trò",
    icon: Users,
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/10 border-purple-300/80 text-purple-900",
    badge: "Section IV",
    keyConcepts: ["Role-based Definition", "4 Actor Categories", "Primary vs Secondary", "External Entities"],
    takeaway: "Actor là VAI TRÒ bên ngoài tương tác trực tiếp với ranh giới hệ thống, không phải con người cụ thể."
  },
  {
    id: "p5",
    num: "05",
    title: "Formulating System Use Cases",
    subtitle: "Quy tắc Chuyển hóa 1:1 & Ranh giới",
    icon: Box,
    color: "rose",
    gradient: "from-rose-500/20 to-rose-600/10 border-rose-300/80 text-rose-900",
    badge: "Section V",
    keyConcepts: ["Quy tắc 1 Event : 1 Use Case", "Verb + Noun Naming", "System Boundary", "Communication Link"],
    takeaway: "Tách bạch rõ ranh giới trong/ngoài; loại bỏ triệt để thói quen đặt tên use case theo màn hình giao diện (UI)."
  },
  {
    id: "p6",
    num: "06",
    title: "Organizing UML Relationships",
    subtitle: "Cấu trúc hóa & Tối ưu mô hình",
    icon: GitBranch,
    color: "indigo",
    gradient: "from-indigo-500/20 to-indigo-600/10 border-indigo-300/80 text-indigo-900",
    badge: "Section VI",
    keyConcepts: ["<<include>> (Bắt buộc)", "<<extend>> (Có điều kiện)", "Generalization (Kế thừa)", "Extension Points"],
    takeaway: "Quy tắc 3 câu hỏi vàng phân biệt chuẩn xác hướng mũi tên và bản chất thực thi giữa các quan hệ UML."
  }
];

export default function Chapter3HeroBanner() {
  const [activePillarId, setActivePillarId] = useState("p1");
  const [perspective, setPerspective] = useState("ba"); // "ba" | "sa"
  const canvasRef = useRef(null);

  const activePillar = PILLARS.find(p => p.id === activePillarId) || PILLARS[0];

  // Particle & Architectural Grid Background (Normalized canvas)
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

    // Particle nodes representing business events and use case vertices
    const particles = Array.from({ length: 28 }, () => ({
      xNorm: Math.random(),
      yNorm: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      radius: Math.random() * 2 + 1.2,
      color: Math.random() > 0.5 ? "rgba(217, 119, 6, 0.4)" : "rgba(5, 150, 105, 0.3)"
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Delicate architectural grid
      ctx.strokeStyle = "rgba(44, 42, 38, 0.035)";
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & render particles
      particles.forEach((p, i) => {
        p.xNorm += p.vx;
        p.yNorm += p.vy;

        if (p.xNorm < 0 || p.xNorm > 1) p.vx *= -1;
        if (p.yNorm < 0 || p.yNorm > 1) p.vy *= -1;

        const px = p.xNorm * width;
        const py = p.yNorm * height;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2x = p2.xNorm * width;
          const p2y = p2.yNorm * height;
          const dist = Math.hypot(px - p2x, py - p2y);

          if (dist < 90) {
            ctx.strokeStyle = `rgba(217, 119, 6, ${0.15 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
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

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-[#faf8f4] via-[#fdfbf7] to-amber-50/50 p-6 md:p-10 shadow-2xl shadow-amber-900/10 text-[#2c2a26] mb-12">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
      />

      {/* Hero Header Content */}
      <div className="relative z-10 space-y-6">
        {/* Top Tag & Cultural Accent */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100/90 text-amber-950 border border-amber-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-spin-slow" />
            Mục ★ — Chapter 3 Executive Overview
          </div>

          {/* Perspective Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100/90 backdrop-blur-xs rounded-xl border border-stone-200/80 text-xs">
            <span className="text-[11px] font-bold text-stone-500 px-2 flex items-center gap-1">
              <Eye className="w-3 h-3 text-stone-400" />
              Lăng kính:
            </span>
            <button
              onClick={() => setPerspective("ba")}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                perspective === "ba"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              💼 Business Analyst (Nghiệp vụ)
            </button>
            <button
              onClick={() => setPerspective("sa")}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                perspective === "sa"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              🏛️ Systems Architect (Mô hình hóa)
            </button>
          </div>
        </div>

        {/* Title & Core Manifesto */}
        <div className="max-w-4xl space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-stone-900 leading-tight">
            Initiation Phase:{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-emerald-700 bg-clip-text text-transparent">
              From Business Events to a System Use Case Model
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed font-normal">
            {perspective === "ba" ? (
              <span>
                <strong className="text-amber-900 font-bold">Góc nhìn BA:</strong> Khảo sát quy trình nghiệp vụ thực tế, phát hiện mọi biến cố kích hoạt (External, Temporal, State), định vị chính xác vai trò tác nhân và chuyển hóa nguyên vẹn nhu cầu người dùng thành các ca sử dụng đem lại giá trị đo lường được.
              </span>
            ) : (
              <span>
                <strong className="text-stone-900 font-bold">Góc nhìn SA:</strong> Thiết lập ranh giới hệ thống kiên cố, chuẩn hóa biểu đồ UML Use Case chuẩn công nghiệp, trừu tượng hóa các hành vi dùng chung qua <code className="text-purple-700 font-mono text-xs bg-purple-50 px-1 rounded">&lt;&lt;include&gt;&gt;</code>, bóc tách luồng ngoại lệ bằng <code className="text-emerald-700 font-mono text-xs bg-emerald-50 px-1 rounded">&lt;&lt;extend&gt;&gt;</code> và kế thừa qua <code className="text-blue-700 font-mono text-xs bg-blue-50 px-1 rounded">Generalization</code>.
              </span>
            )}
          </p>
        </div>

        {/* Executive Vital Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-amber-200/80 shadow-xs text-center">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-700 block">Quy trình chuẩn</span>
            <div className="text-xl font-black text-stone-900 mt-0.5">11 Chặng</div>
            <span className="text-[11px] text-stone-500">Tư duy BA Pipeline</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-emerald-200/80 shadow-xs text-center">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-700 block">Sự kiện kích hoạt</span>
            <div className="text-xl font-black text-stone-900 mt-0.5">3 Phân loại</div>
            <span className="text-[11px] text-stone-500">External • Temporal • State</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-purple-200/80 shadow-xs text-center">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-purple-700 block">Tác nhân hệ thống</span>
            <div className="text-xl font-black text-stone-900 mt-0.5">4 Nhóm Role</div>
            <span className="text-[11px] text-stone-500">User • System • Device • Clock</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-blue-200/80 shadow-xs text-center">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-blue-700 block">Quan hệ cấu trúc</span>
            <div className="text-xl font-black text-stone-900 mt-0.5">3 Kiểu UML</div>
            <span className="text-[11px] text-stone-500">&lt;&lt;include&gt;&gt; • &lt;&lt;extend&gt;&gt; • Gen</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-rose-200/80 shadow-xs text-center col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-rose-700 block">Nguyên tắc vàng</span>
            <div className="text-xl font-black text-stone-900 mt-0.5">1 Event = 1 UC</div>
            <span className="text-[11px] text-stone-500">Quy tắc 1:1 & Verb+Noun</span>
          </div>
        </div>

        {/* 6-Pillars Knowledge Radar / Pipeline Switcher */}
        <div className="pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600" />
              6 Trụ cột tri thức cốt lõi (Khám phá nhanh toàn chương)
            </h3>
            <span className="text-[11px] text-stone-400 italic hidden sm:inline">
              Click từng trụ cột để xem trọng tâm kiến thức
            </span>
          </div>

          {/* Pillars Strip */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {PILLARS.map(p => {
              const isActive = activePillarId === p.id;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillarId(p.id)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? "bg-white border-amber-500 shadow-md ring-2 ring-amber-500/20 translate-y-[-2px]"
                      : "bg-white/60 hover:bg-white border-stone-200/80 hover:border-amber-300 shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-black font-mono text-stone-400">{p.num}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border ${
                        isActive ? "bg-amber-100 text-amber-900 border-amber-300" : "bg-stone-100 text-stone-500 border-stone-200"
                      }`}>
                        {p.badge}
                      </span>
                    </div>
                    <Icon className={`w-4 h-4 mb-1.5 ${isActive ? "text-amber-600" : "text-stone-500"}`} />
                    <div className="font-extrabold text-xs text-stone-900 leading-snug">
                      {p.title}
                    </div>
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1 line-clamp-1">
                    {p.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Spotlight Card */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-300/60 flex items-center justify-center text-amber-700 flex-shrink-0">
                  <activePillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      Trụ cột {activePillar.num} — {activePillar.badge}
                    </span>
                    <h4 className="text-base font-black text-stone-900">
                      {activePillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {activePillar.subtitle}
                  </p>
                </div>
              </div>

              <div className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/70 self-start sm:self-auto">
                💡 {activePillar.takeaway}
              </div>
            </div>

            {/* Key Concepts Badges */}
            <div>
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                Trọng tâm kiến thức bắt buộc nắm vững:
              </span>
              <div className="flex flex-wrap gap-2">
                {activePillar.keyConcepts.map((kc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-stone-50 text-stone-800 border border-stone-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {kc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Chapter Navigation Ribbon */}
        <div className="pt-2 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
          <span className="font-bold text-stone-700 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Lộ trình học tập Chapter 3:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-medium">
            <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">I. Unified Process</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">II. Use Case Models</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">III. Events & Table</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">IV. Actors</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">V. System Use Cases</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">VI. Organizing</span>
            <span>➔</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-amber-950 font-bold">VII. Key Takeaways</span>
          </div>
        </div>
      </div>
    </div>
  );
}
