"use client";
import React, { useState } from "react";
import { 
  Boxes, 
  Workflow, 
  FileCode, 
  Wrench, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Compass,
  Cpu
} from "lucide-react";

export default function BaToolboxNexusVisualizer() {
  const [selectedPillar, setSelectedPillar] = useState("methodology");

  const pillars = {
    methodology: {
      id: "methodology",
      name: "METHODOLOGY (Phương pháp luận)",
      role: "Khung bao quát tổng thể (Overall Framework)",
      question: "QUY TRÌNH THỰC HIỆN DỰ ÁN RA SAO?",
      color: "from-blue-600 to-indigo-600",
      accentText: "text-blue-400",
      border: "border-blue-400",
      icon: Compass,
      desc: "Là kim chỉ nam định hình toàn bộ lộ trình dự án (Phases, Activities, Deliverables). Quy định khi nào cần áp dụng kỹ thuật nào, tạo ra mô hình nào và dùng công cụ gì hỗ trợ.",
      examples: "Structured / Waterfall, Unified Process (UP), Agile / Scrum, Kanban."
    },
    models: {
      id: "models",
      name: "MODELS (Mô hình trừu tượng)",
      role: "Sản phẩm chuyển giao trừu tượng (Deliverables)",
      question: "SẢN XUẤT CÁI GÌ? (What to produce)",
      color: "from-purple-600 to-pink-600",
      accentText: "text-purple-400",
      border: "border-purple-400",
      icon: FileCode,
      desc: "Bản vẽ thiết kế trực quan đơn giản hóa hệ thống thực tế, giúp các bên cùng hiểu đúng về cấu trúc tĩnh (Structural) và hành vi động (Behavioral) của phần mềm trước khi viết code.",
      examples: "Use Case Diagram, Class Diagram, Sequence Diagram, Activity Diagram, ERD."
    },
    techniques: {
      id: "techniques",
      name: "TECHNIQUES (Kỹ thuật thực thi)",
      role: "Phương thức hành động cụ thể (Action Methods)",
      question: "THU THẬP THÔNG TIN NHƯ THẾ NÀO? (How to gather)",
      color: "from-emerald-600 to-teal-600",
      accentText: "text-emerald-400",
      border: "border-emerald-400",
      icon: Wrench,
      desc: "Các kỹ năng nghiệp vụ thực tế mà BA áp dụng trực tiếp để khai phá, thu thập, đào sâu và xác nhận yêu cầu từ các bên liên quan.",
      examples: "Interviews (1-1), JAD Workshop Sessions, Observation thực địa, Document Analysis, Prototyping."
    },
    tools: {
      id: "tools",
      name: "TOOLS (Công cụ CASE hỗ trợ)",
      role: "Phương tiện phần mềm hỗ trợ (Software Support)",
      question: "DÙNG PHẦN MỀM GÌ HỖ TRỢ? (Software support)",
      color: "from-amber-600 to-orange-600",
      accentText: "text-amber-400",
      border: "border-amber-400",
      icon: Cpu,
      desc: "Phần mềm CASE tools giúp BA vẽ, lưu trữ, cập nhật, chia sẻ sơ đồ và quản lý yêu cầu nhanh chóng. Tuyệt đối không thay thế được năng lực tư duy phân tích của con người.",
      examples: "Visual Paradigm, Enterprise Architect, Draw.io, Jira, Confluence, Figma."
    }
  };

  const current = pillars[selectedPillar];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Boxes className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Sơ Đồ Mối Liên Kết 4 Trụ Cột BA Toolbox
            </h2>
            <p className="text-xs text-slate-400">
              Trực quan hóa hệ sinh thái Methodology bao bọc và điều phối Models, Techniques và Tools.
            </p>
          </div>
        </div>
      </div>

      {/* Ecosystem Visual Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
        <div className="text-center mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Kiến trúc phân tầng: Methodology là Khung bao quanh 3 thành tố cốt lõi
          </span>
        </div>

        <div className="relative p-6 rounded-2xl border-2 border-dashed border-blue-500/50 bg-blue-950/20">
          <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-xs shadow">
            1. METHODOLOGY (Khung quy trình dự án tổng thể)
          </div>

          <p className="text-xs text-slate-300 text-center mb-6 max-w-xl mx-auto italic">
            &quot;Methodology định hướng toàn bộ lộ trình: Khi nào dùng Technique gì để thu thập, tạo ra Model nào và dùng Tool nào hỗ trợ.&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Models Box */}
            <div
              onClick={() => setSelectedPillar("models")}
              className={`cursor-pointer p-4 rounded-xl border text-center transition-all duration-300 ${
                selectedPillar === "models"
                  ? "bg-purple-950/80 border-purple-400 ring-2 ring-purple-400/50 scale-105 shadow-lg"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <FileCode className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <h4 className="font-extrabold text-sm text-white">2. MODELS</h4>
              <p className="text-[11px] text-purple-300 font-medium mt-1">Sản xuất cái gì? (What to produce)</p>
              <span className="text-[10px] text-slate-400 block mt-2">Use Case, Class, DFD</span>
            </div>

            {/* Techniques Box */}
            <div
              onClick={() => setSelectedPillar("techniques")}
              className={`cursor-pointer p-4 rounded-xl border text-center transition-all duration-300 ${
                selectedPillar === "techniques"
                  ? "bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-400/50 scale-105 shadow-lg"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <Wrench className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <h4 className="font-extrabold text-sm text-white">3. TECHNIQUES</h4>
              <p className="text-[11px] text-emerald-300 font-medium mt-1">Thu thập thế nào? (How to gather)</p>
              <span className="text-[10px] text-slate-400 block mt-2">Interviews, JAD, Prototype</span>
            </div>

            {/* Tools Box */}
            <div
              onClick={() => setSelectedPillar("tools")}
              className={`cursor-pointer p-4 rounded-xl border text-center transition-all duration-300 ${
                selectedPillar === "tools"
                  ? "bg-amber-950/80 border-amber-400 ring-2 ring-amber-400/50 scale-105 shadow-lg"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <Cpu className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <h4 className="font-extrabold text-sm text-white">4. TOOLS (CASE)</h4>
              <p className="text-[11px] text-amber-300 font-medium mt-1">Hỗ trợ phần mềm? (Software tools)</p>
              <span className="text-[10px] text-slate-400 block mt-2">Jira, Enterprise Architect, Figma</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Pillar Deep Dive Card */}
      {current && (
        <div className={`p-5 rounded-2xl bg-slate-950 border ${current.border} space-y-3`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
                <current.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">{current.name}</h3>
                <span className={`text-xs font-bold ${current.accentText}`}>{current.role}</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-800">
              👉 {current.question}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {current.desc}
          </p>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
            <span className="text-slate-400 font-bold uppercase block mb-1">Ví dụ thực tế:</span>
            <span className="text-slate-200 font-mono">{current.examples}</span>
          </div>
        </div>
      )}
    </div>
  );
}
