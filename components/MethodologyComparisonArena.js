"use client";
import React, { useState } from "react";
import { 
  Workflow, 
  RotateCw, 
  Zap, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Clock, 
  FileCode, 
  ShieldCheck 
} from "lucide-react";

export default function MethodologyComparisonArena() {
  const [selectedMethod, setSelectedMethod] = useState("waterfall"); // "waterfall" | "up" | "agile"

  const methodologies = {
    waterfall: {
      id: "waterfall",
      name: "Structured / Waterfall",
      tag: "Tuần tự (Sequential, One-Pass)",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/40",
      accentBg: "from-blue-600 to-indigo-700",
      icon: Workflow,
      philosophy: "Tiếp cận tuyến tính, chặt chẽ từng bước. Giai đoạn sau chỉ bắt đầu khi giai đoạn trước đã được nghiệm thu và đóng băng hoàn toàn (Sign-off & Freeze).",
      flowSteps: [
        "1. Requirements (Thu thập & Đóng băng yêu cầu)",
        "2. System Design (Thiết kế kiến trúc toàn diện)",
        "3. Implementation (Lập trình toàn bộ hệ thống)",
        "4. Testing & Verification (Kiểm thử hệ thống)",
        "5. Deployment & Maintenance (Bàn giao & Vận hành)"
      ],
      pros: [
        "Cấu trúc rõ ràng, dễ quản lý tiến độ và ngân sách cố định.",
        "Tài liệu hóa (Documentation) vô cùng chi tiết và chuẩn mực.",
        "Khách hàng biết chính xác chi phí và sản phẩm bàn giao từ đầu."
      ],
      cons: [
        "Rất khó và tốn kém khi cần thay đổi yêu cầu ở giai đoạn muộn.",
        "Khách hàng chỉ thấy phần mềm chạy được ở giai đoạn cuối dự án.",
        "Rủi ro thất bại cao nếu khâu phân tích ban đầu có sai sót."
      ],
      bestFor: "Dự án có **Requirements đã hiểu rất rõ, ổn định, phạm vi cố định**, các hệ thống chính phủ, quốc phòng, y tế đòi hỏi tài liệu tuân thủ nghiêm ngặt."
    },
    up: {
      id: "up",
      name: "Object-Oriented (Unified Process – UP)",
      tag: "Lặp & Tăng dần (Iterative & Incremental)",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
      accentBg: "from-purple-600 to-violet-700",
      icon: RotateCw,
      philosophy: "Tổ chức xoay quanh mô hình hướng đối tượng (OO), Use Cases và kiến trúc phần mềm. Chia dự án thành các chu kỳ lặp tăng dần và mô hình hóa chặt chẽ bằng UML.",
      flowSteps: [
        "1. Inception (Khởi tạo: Định hình phạm vi & Use Cases cốt lõi)",
        "2. Elaboration (Chi tiết hóa: Thiết kế kiến trúc & Giảm thiểu rủi ro)",
        "3. Construction (Xây dựng: Lập trình tăng dần các tính năng)",
        "4. Transition (Chuyển giao: Kiểm thử beta, đào tạo & Go-live)"
      ],
      pros: [
        "Giảm thiểu rủi ro kiến trúc sớm ngay từ giai đoạn Elaboration.",
        "Tận dụng tối đa sức mạnh của lập trình hướng đối tượng và UML.",
        "Khách hàng có thể trải nghiệm các bản phát hành tăng dần."
      ],
      cons: [
        "Quy trình khá phức tạp, đòi hỏi đội ngũ thành thạo UML sâu sắc.",
        "Chi phí quản lý và duy trì tài liệu mô hình hóa tương đối cao."
      ],
      bestFor: "Hệ thống quy mô **vừa và lớn, có cấu trúc hướng đối tượng phức tạp**, yêu cầu kiểm soát rủi ro kiến trúc nghiêm ngặt."
    },
    agile: {
      id: "agile",
      name: "Agile / Scrum",
      tag: "Linh hoạt & Thích ứng (Adaptive Sprints)",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      accentBg: "from-emerald-600 to-teal-700",
      icon: Zap,
      philosophy: "Chu kỳ lặp ngắn (Sprints 1-4 tuần). Đặt con người và sự tương tác lên trên quy trình; sẵn sàng chào đón thay đổi yêu cầu để tạo ra giá trị nhanh nhất.",
      flowSteps: [
        "1. Product Backlog (Danh sách User Stories ưu tiên)",
        "2. Sprint Planning (Lập kế hoạch Sprint 2 tuần)",
        "3. Daily Scrum & Development (Phát triển & Họp hàng ngày)",
        "4. Sprint Review & Demo (Trình diễn phần mềm chạy được)",
        "5. Retrospective (Rút kinh nghiệm & Lặp lại chu kỳ mới)"
      ],
      pros: [
        "Cực kỳ linh hoạt, đón nhận thay đổi yêu cầu bất kỳ lúc nào.",
        "Đưa phần mềm chạy được đến tay người dùng cực nhanh (Fast MVP).",
        "Khách hàng tham gia liên tục, đảm bảo sản phẩm đúng nhu cầu."
      ],
      cons: [
        "Khó ước tính tổng chi phí và thời hạn bàn giao cuối cùng từ đầu.",
        "Đòi hỏi khách hàng phải dành nhiều thời gian tương tác liên tục.",
        "Ít chú trọng tài liệu chi tiết, dễ mất dấu kiến trúc nếu không kỷ luật."
      ],
      bestFor: "Dự án **Startup, E-commerce, Ứng dụng di động** có **Requirements biến động liên tục**, cần ra mắt nhanh để thăm dò thị trường."
    }
  };

  const current = methodologies[selectedMethod];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Workflow className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Methodology Comparison Arena (Đấu Trường 3 Phương Pháp Luận)
            </h2>
            <p className="text-xs text-slate-400">
              Đối chiếu trực quan bản chất, quy trình các bước, ưu nhược điểm và tiêu chí chọn lựa giữa Waterfall, Unified Process và Agile.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Methodology Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {Object.entries(methodologies).map(([key, item]) => {
          const isSelected = selectedMethod === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedMethod(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? `bg-slate-800 border-white/40 ring-2 ring-emerald-400/50 shadow-xl scale-[1.02]`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-400 hover:text-slate-200`
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.accentBg} text-white shadow`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                  {key.toUpperCase()}
                </span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">{item.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{item.tag}</p>
            </button>
          );
        })}
      </div>

      {/* Deep-dive Method Details Arena */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
        {/* Philosophy */}
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold uppercase text-amber-400">Triết lý vận hành cốt lõi:</span>
            <p className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed font-medium">
              {current.philosophy}
            </p>
          </div>
        </div>

        {/* Pipeline Steps Flow */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
            Lộ trình các bước thực thi (Roadmap & Phases):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {current.flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex flex-col justify-between font-medium"
              >
                <span>{step}</span>
                <span className="text-[10px] text-slate-500 font-mono mt-2 self-end">Chặng {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Pros */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <span className="text-xs font-extrabold uppercase text-emerald-400 flex items-center gap-1.5 mb-2.5">
              <CheckCircle className="w-4 h-4" /> Ưu điểm vượt trội (Advantages)
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {current.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30">
            <span className="text-xs font-extrabold uppercase text-rose-400 flex items-center gap-1.5 mb-2.5">
              <XCircle className="w-4 h-4" /> Hạn chế & Thách thức (Disadvantages)
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {current.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best For Scenario */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-950 border border-blue-500/30 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-cyan-400 font-bold uppercase text-xs block mb-0.5">
              Khi nào nên chọn {current.name}?
            </span>
            <p className="text-slate-300 text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: current.bestFor }} />
          </div>
        </div>
      </div>
    </div>
  );
}
