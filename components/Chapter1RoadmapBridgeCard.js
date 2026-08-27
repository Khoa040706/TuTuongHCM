"use client";
import React from "react";
import { 
  AlertTriangle, 
  Map, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  ShieldAlert 
} from "lucide-react";

export default function Chapter1RoadmapBridgeCard() {
  const upcomingChapters = [
    {
      num: "Chapter 2",
      title: "Requirements Engineering & Elicitation",
      desc: "Đào sâu phân loại yêu cầu (Functional vs Non-Functional Requirements), kỹ thuật viết User Stories và quy trình thẩm định yêu cầu."
    },
    {
      num: "Chapter 3",
      title: "Use Case Modeling Deep-Dive",
      desc: "Chi tiết hóa Use Case: Actor, System Boundary, quan hệ `«include»`, `«extend»`, Generalization và viết kịch bản Use Case Specification."
    },
    {
      num: "Chapter 4",
      title: "Structural & Behavioral Modeling",
      desc: "Xây dựng Class Diagram (Association, Aggregation, Composition, Multiplicity) và Sequence Diagram tương tác theo thời gian."
    }
  ];

  return (
    <div className="w-full my-6 space-y-4 text-slate-100">
      {/* 1. Exam Gotchas Warning Box */}
      <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-amber-300">
              ⚠️ Lưu Ý Chiến Lược Khi Ôn Thi Trắc Nghiệm Chapter 1
            </h3>
            <p className="text-xs text-slate-300">
              Phân biệt rõ ranh giới kiến thức giữa Chapter 1 (Khái niệm nền tảng) và các chương kỹ thuật chuyên sâu kế tiếp.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 space-y-2">
          <p className="font-medium leading-relaxed">
            📌 <strong>Chapter 1 là chương Giới thiệu tổng quan (Introduction):</strong> Tập trung vào việc nắm vững các khái niệm nền móng cốt lõi (<strong>IS, BA, SDLC 5 pha, UP 4 pha, Methodology vs Model vs Tool vs Technique</strong>).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              ❌ Chưa đi sâu vào cú pháp chi tiết `include`/`extend` Use Case (Sẽ học ở Ch3).
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              ❌ Chưa đi sâu vào quan hệ Lớp Aggregation/Composition (Sẽ học ở Ch4).
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              ✅ Cần nhớ chính xác: UP có 4 phase, SDLC có 5 phase, BA là cầu nối Business - IT.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Roadmap Bridge Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Bản Đồ Cầu Nối: Lộ Trình Các Chương Tiếp Theo
              </h3>
              <p className="text-xs text-slate-400">
                Những kiến thức chuyên sâu bạn sẽ được khám phá ở các chương sau của môn học.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {upcomingChapters.map((ch, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  {ch.num}
                </span>
                <h4 className="font-extrabold text-xs sm:text-sm text-white mb-1.5">{ch.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ch.desc}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center text-[10px] text-cyan-400 font-bold gap-1">
                <span>Khám phá ở slide kế tiếp</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
