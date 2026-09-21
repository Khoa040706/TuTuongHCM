"use client";
import React, { useState } from "react";
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
  Flame,
  GitFork,
  FolderGit2
} from "lucide-react";

const CHAPTER4_PILLARS = [
  {
    id: "p1",
    num: "01",
    title: "Set Baseline & Scope Control",
    subtitle: "Mốc cơ sở & Kiểm soát biến động",
    icon: Compass,
    color: "amber",
    gradient: "from-amber-500/20 to-amber-600/10 border-amber-300/80 text-amber-900",
    badge: "Section I",
    keyConcepts: ["Baseline Snapshot", "Scope In/Out", "Change Control", "Requirements Evolution"],
    takeaway: "Baseline không phải là yêu cầu bất biến, mà là điểm neo đã thỏa thuận để quản lý và kiểm soát mọi phát sinh Change Request."
  },
  {
    id: "p2",
    num: "02",
    title: "Discovery Phase & Iteration",
    subtitle: "Khám phá xoắn ốc & Đường cong UP",
    icon: Activity,
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/10 border-blue-300/80 text-blue-900",
    badge: "Section II",
    keyConcepts: ["Elicit-Explore-Structure", "5 Chặng lặp", "UP Requirements Effort", "5 Deliverables"],
    takeaway: "Discovery Phase đạt đỉnh cao trào nỗ lực ở cuối Inception và suốt Elaboration, tập trung giải quyết triệt để 'WHAT before HOW'."
  },
  {
    id: "p3",
    num: "03",
    title: "Behavioral Analysis & Diagram",
    subtitle: "Phân tích hành vi & Biểu đồ Use Case",
    icon: Eye,
    color: "emerald",
    gradient: "from-emerald-500/20 to-emerald-600/10 border-emerald-300/80 text-emerald-900",
    badge: "Section III",
    keyConcepts: ["Behavioral vs Structural", "System Boundary", "Actor Types", "Ẩn dụ Mục lục sách (WHAT)"],
    takeaway: "Use-Case Diagram đóng vai trò như Mục lục cuốn sách (chỉ ra các chức năng tồn tại và ai tương tác), không đi sâu vào chi tiết thuật toán."
  },
  {
    id: "p4",
    num: "04",
    title: "Use-Case Descriptions & Rules",
    subtitle: "Đặc tả chi tiết & Tách rời Quy tắc",
    icon: FileText,
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/10 border-purple-300/80 text-purple-900",
    badge: "Section IV",
    keyConcepts: ["Brief vs Casual vs Fully Dressed", "9 Trường chuẩn mực", "Alternating Steps", "Business Rules Decoupling"],
    takeaway: "Fully Dressed Description là cơ sở cốt tử để Lập trình và Viết kịch bản kiểm thử. Business Rules phải tách riêng vào Glossary và dẫn chiếu qua Rule ID."
  },
  {
    id: "p5",
    num: "05",
    title: "Hands-on Library Case & Pitfalls",
    subtitle: "Thực hành Hệ thống Thư viện & Bẫy lỗi",
    icon: BookOpen,
    color: "rose",
    gradient: "from-rose-500/20 to-rose-600/10 border-rose-300/80 text-rose-900",
    badge: "Section V",
    keyConcepts: ["Library Reservation System", "2 Quy tắc vàng UML", "Reserve Book 3 câu", "4 Common Pitfalls"],
    takeaway: "Tuyệt đối không đưa chi tiết giao diện đồ họa (UI) vào đặc tả logic, luôn duy trì luồng luân phiên hai chiều giữa Actor và System."
  },
  {
    id: "p6",
    num: "06",
    title: "Advanced Relationships & Packages",
    subtitle: "Quan hệ nâng cao & Đóng gói hệ thống",
    icon: GitFork,
    color: "indigo",
    gradient: "from-indigo-500/20 to-indigo-600/10 border-indigo-300/80 text-indigo-900",
    badge: "Section VI",
    keyConcepts: ["<<include>> (Mandatory)", "<<extend>> (Conditional)", "Generalization (Specialization)", "Cross-Package Boundaries"],
    takeaway: "Include có mũi tên Base ➔ Included, trong khi Extend có mũi tên Extension ➔ Base tại Named Extension Point. Các quan hệ có quyền xuyên thủng biên giới gói."
  }
];

const PIPELINE_STAGES = [
  {
    step: "01",
    title: "Set Baseline",
    sub: "Scope Snapshot",
    color: "border-amber-400 bg-amber-50 text-amber-900",
    arrow: "text-amber-500"
  },
  {
    step: "02",
    title: "Discovery Phase",
    sub: "Iterative Spiral",
    color: "border-blue-400 bg-blue-50 text-blue-900",
    arrow: "text-blue-500"
  },
  {
    step: "03",
    title: "Behavioral / Diagram",
    sub: "Table of Contents (WHAT)",
    color: "border-emerald-400 bg-emerald-50 text-emerald-900",
    arrow: "text-emerald-500"
  },
  {
    step: "04",
    title: "Use-Case Descriptions",
    sub: "Detailed Chapters (HOW)",
    color: "border-purple-400 bg-purple-50 text-purple-900",
    arrow: "text-purple-500"
  },
  {
    step: "05",
    title: "Advanced & Packages",
    sub: "Reuse & Scalability",
    color: "border-indigo-400 bg-indigo-50 text-indigo-900",
    arrow: "text-indigo-500"
  }
];

export default function Chapter4HeroBanner() {
  const [activePillar, setActivePillar] = useState(CHAPTER4_PILLARS[0].id);
  const currentPillar = CHAPTER4_PILLARS.find((p) => p.id === activePillar) || CHAPTER4_PILLARS[0];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-b from-[#faf8f4] via-white to-amber-50/20 p-6 md:p-10 shadow-2xl transition-all my-8">
      {/* Subtle Cultural Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#2c2a26 1px, transparent 1px), radial-gradient(#d97706 1px, #faf8f4 1px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px"
        }}
      />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/20 via-orange-300/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400/15 via-emerald-300/10 to-transparent blur-3xl" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg shadow-amber-500/20 ring-4 ring-amber-100">
            <Compass className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-amber-300 bg-amber-100/90 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 shadow-xs">
                Mục ★ Chapter 4 Hero Banner Overview
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold text-stone-500">
                Phân tích thiết kế yêu cầu
              </span>
            </div>
            <h1 className="mt-1 text-2xl md:text-4xl font-extrabold tracking-tight text-stone-900">
              Chapter 4: Discovery Phase I
            </h1>
            <p className="text-xs md:text-sm text-stone-600 font-medium mt-0.5">
              Từ Thiết lập Baseline, Khám phá Yêu cầu xoắn ốc đến Mô hình hóa Ca sử dụng &amp; Đóng gói Hệ thống
            </p>
          </div>
        </div>

        {/* Quick Stats Meta */}
        <div className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white/80 p-2 shadow-sm backdrop-blur-md">
          <div className="px-3 py-1 text-center border-r border-stone-200">
            <div className="text-[10px] uppercase font-bold text-stone-400">Quy mô</div>
            <div className="text-sm font-black text-amber-800">7 Mục</div>
          </div>
          <div className="px-3 py-1 text-center border-r border-stone-200">
            <div className="text-[10px] uppercase font-bold text-stone-400">Visualizers</div>
            <div className="text-sm font-black text-amber-800">12 Studios</div>
          </div>
          <div className="px-3 py-1 text-center">
            <div className="text-[10px] uppercase font-bold text-stone-400">Micro-Quiz</div>
            <div className="text-sm font-black text-emerald-700">7 Đề thi</div>
          </div>
        </div>
      </div>

      {/* 5-Stage Interactive Knowledge Pipeline */}
      <div className="relative z-10 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-amber-600" />
            Hành trình 5 Chặng Tiến hóa của Chapter 4 (Core Knowledge Pipeline)
          </h3>
          <span className="text-[11px] font-medium text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-full">
            WHAT before HOW
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {PIPELINE_STAGES.map((st, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border-2 ${st.color} p-3.5 shadow-xs transition-all hover:scale-[1.02] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold opacity-70">CHẶNG {st.step}</span>
                  {idx < PIPELINE_STAGES.length - 1 && (
                    <ArrowRight className={`w-3.5 h-3.5 ${st.arrow} hidden md:inline`} />
                  )}
                </div>
                <div className="mt-1 text-sm font-black leading-tight">{st.title}</div>
              </div>
              <div className="mt-2 text-[11px] font-medium opacity-85">{st.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Core Pillars Deep Dive Tabs */}
      <div className="relative z-10 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            6 Trụ Cột Năng Lực Cốt Lõi Của Kỹ Sư Phân Tích Yêu Cầu (Chapter 4 Pillars)
          </h3>
        </div>

        {/* Pillars selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {CHAPTER4_PILLARS.map((pil) => {
            const isSelected = activePillar === pil.id;
            const IconComponent = pil.icon;
            return (
              <button
                key={pil.id}
                onClick={() => setActivePillar(pil.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? "bg-white border-amber-500 shadow-md ring-2 ring-amber-300/80 -translate-y-0.5"
                    : "bg-white/60 border-stone-200 hover:bg-white hover:border-stone-300 text-stone-600"
                }`}
              >
                <div className={`p-2 rounded-xl mb-1.5 ${isSelected ? "bg-amber-100 text-amber-800" : "bg-stone-100 text-stone-500"}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-stone-400">{pil.badge}</span>
                <span className="text-xs font-bold text-stone-800 mt-0.5 line-clamp-1">{pil.title.split(" ")[0]} {pil.title.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Card Detail */}
        <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-md transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {currentPillar.badge} • Trụ Cột #{currentPillar.num}
                </span>
                <h4 className="text-xl font-bold text-stone-900">{currentPillar.title}</h4>
              </div>
              <p className="mt-1 text-sm text-stone-600 font-medium">
                {currentPillar.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {currentPillar.keyConcepts.map((kc, i) => (
                <span key={i} className="text-[10px] font-semibold bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200">
                  {kc}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl bg-amber-50/60 border border-amber-200/80 p-4 text-xs md:text-sm text-amber-950">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-amber-900">Thông điệp cốt tử: </strong>
              {currentPillar.takeaway}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Footer */}
      <div className="relative z-10 mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Giáo trình chuẩn hóa Học kỳ chuyên sâu — Phân tích thiết kế yêu cầu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium text-stone-400">Điều hướng nhanh:</span>
          <a href="#ad4-section-1" className="hover:text-amber-700 font-bold">Mục I</a>
          <span>•</span>
          <a href="#ad4-section-2" className="hover:text-amber-700 font-bold">Mục II</a>
          <span>•</span>
          <a href="#ad4-section-3" className="hover:text-amber-700 font-bold">Mục III</a>
          <span>•</span>
          <a href="#ad4-section-4" className="hover:text-amber-700 font-bold">Mục IV</a>
          <span>•</span>
          <a href="#ad4-section-5" className="hover:text-amber-700 font-bold">Mục V</a>
          <span>•</span>
          <a href="#ad4-section-6" className="hover:text-amber-700 font-bold">Mục VI</a>
          <span>•</span>
          <a href="#ad4-section-7" className="hover:text-amber-700 font-bold">Mục VII</a>
        </div>
      </div>
    </div>
  );
}
