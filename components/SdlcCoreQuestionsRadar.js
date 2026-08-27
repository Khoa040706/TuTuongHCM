"use client";
import React, { useState } from "react";
import { 
  HelpCircle, 
  Workflow, 
  RotateCw, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Search, 
  PenTool, 
  Cpu, 
  Wrench,
  ArrowRight
} from "lucide-react";

export default function SdlcCoreQuestionsRadar() {
  const [selectedPhase, setSelectedPhase] = useState("planning");
  const [mode, setMode] = useState("predictive"); // "predictive" | "adaptive"

  const phases = {
    planning: {
      id: "planning",
      num: "1",
      name: "Planning",
      question: "Why build it? (Tại sao xây dựng?)",
      purpose: "Xác định giá trị kinh doanh của hệ thống & đánh giá tính khả thi để ra quyết định đầu tư.",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-400"
    },
    analysis: {
      id: "analysis",
      num: "2",
      name: "Analysis",
      question: "What is needed? (Cần những gì?)",
      purpose: "Tìm hiểu, phân tích chi tiết và tài liệu hóa những gì nghiệp vụ kinh doanh cần ở hệ thống mới.",
      icon: Search,
      color: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-400"
    },
    design: {
      id: "design",
      num: "3",
      name: "Design",
      question: "How will it work? (Chạy ra sao?)",
      purpose: "Quyết định chi tiết cách thức xây dựng hệ thống phần mềm (kiến trúc, CSDL, giao diện) để thỏa mãn yêu cầu.",
      icon: PenTool,
      color: "from-cyan-500 to-blue-600",
      accentBorder: "border-cyan-400"
    },
    implementation: {
      id: "implementation",
      num: "4",
      name: "Implementation",
      question: "Build & deploy (Xây dựng & Bàn giao)",
      purpose: "Lập trình mã nguồn, kiểm thử đa tầng và triển khai bàn giao hệ thống hoạt động thực tế cho người dùng.",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-400"
    },
    support: {
      id: "support",
      num: "5",
      name: "Support",
      question: "Keep it running (Duy trì & Phát triển)",
      purpose: "Duy trì hệ thống hoạt động ổn định, sửa lỗi phát sinh và nâng cấp bổ sung khi nghiệp vụ thay đổi.",
      icon: Wrench,
      color: "from-rose-500 to-red-600",
      accentBorder: "border-rose-400"
    }
  };

  const current = phases[selectedPhase];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Radar 5 Câu Hỏi Cốt Lõi Của Vòng Đời SDLC
            </h2>
            <p className="text-xs text-slate-400">
              Mỗi giai đoạn giải quyết một câu hỏi định hướng sống còn của dự án phần mềm.
            </p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => setMode("predictive")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === "predictive" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Predictive (1 Lần Tuần Tự)
          </button>
          <button
            onClick={() => setMode("adaptive")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === "adaptive" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Adaptive (Lặp Trong Mỗi Iteration)
          </button>
        </div>
      </div>

      {/* 5 Phase Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-6">
        {Object.entries(phases).map(([key, item]) => {
          const isSelected = selectedPhase === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedPhase(key)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-blue-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-300">
                    Phase {item.num}
                  </span>
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-white">{item.name}</h3>
                <p className="text-[11px] text-cyan-400 mt-1 font-semibold truncate">{item.question}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Showcase */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 mb-4">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-400">Phase {current.num}:</span>
                <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
              </div>
              <span className="text-xs sm:text-sm text-cyan-300 font-bold">👉 Câu hỏi trọng tâm: {current.question}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
            <span className="text-amber-400 font-bold block mb-1 uppercase text-xs">Mục đích tối thượng:</span>
            <p className="font-medium">{current.purpose}</p>
          </div>
        </div>
      )}

      {/* Mode Explanation Footer */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-cyan-400 font-bold uppercase text-xs block mb-0.5">
            Cơ chế thực thi trong mô hình {mode === "predictive" ? "Predictive" : "Adaptive"}:
          </span>
          <span>
            {mode === "predictive"
              ? "Trong dự án Predictive (Waterfall), 5 phase này chạy đúng 1 lần duy nhất theo trình tự nghiêm ngặt; mỗi phase phải nghiệm thu xong 100% mới chuyển tiếp."
              : "Trong dự án Adaptive (Agile/UP), cùng bộ 5 phase này được thu nhỏ và lặp lại trọn vẹn trong mỗi vòng lặp ngắn (Iteration 1-4 tuần) để xuất bản Working Increment."}
          </span>
        </div>
      </div>
    </div>
  );
}
