"use client";

import React, { useState } from "react";
import { 
  GitCompare, 
  Workflow, 
  RotateCw, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  TrendingUp,
  Activity,
  Award
} from "lucide-react";

export default function MethodologyComparisonArena() {
  const [selectedMethod, setSelectedMethod] = useState("up"); // "waterfall" | "up" | "agile"

  const methodologies = {
    waterfall: {
      id: "waterfall",
      name: "Traditional SDLC (Waterfall)",
      tag: "Tuyến tính & Kế hoạch hóa",
      icon: Workflow,
      color: "from-blue-600 to-cyan-600",
      accentBg: "from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      accentBorder: "border-blue-400",
      philosophy: "Tiến trình tuyến tính, tuần tự nghiêm ngặt: Mỗi pha phải hoàn tất 100% và được ký duyệt (Sign-off) mới được chuyển sang pha kế tiếp.",
      flowSteps: [
        "1. Yêu cầu (Scope Locked)",
        "2. Thiết kế (Architecture SDD)",
        "3. Lập trình (Code Build)",
        "4. Kiểm thử (Testing QA)",
        "5. Triển khai (Go-Live)"
      ],
      pros: [
        "Quy trình cực kỳ rõ ràng, dễ quản lý tiến độ và chi phí cố định (Fixed-price contracts).",
        "Tài liệu đặc tả (Documentation) chi tiết, toàn diện và có tính pháp lý cao.",
        "Phù hợp với các dự án có yêu cầu ổn định ngay từ đầu, ít biến động."
      ],
      cons: [
        "Cực kỳ khó thích ứng khi khách hàng thay đổi yêu cầu giữa chừng.",
        "Khách hàng chỉ nhìn thấy sản phẩm ở cuối chu kỳ (Sau nhiều tháng hoặc hàng năm).",
        "Rủi ro phát hiện lỗi kiến trúc muộn ở pha Kiểm thử, dẫn đến chi phí sửa chữa khổng lồ."
      ],
      bestFor: "Dự án quân sự, y tế, xây dựng cầu đường, hệ thống kiểm soát bay — nơi <strong>sai số là cấm kỵ</strong> và <strong>yêu cầu đã được xác định chắc chắn 100%</strong> từ đầu."
    },
    up: {
      id: "up",
      name: "Unified Process (UP)",
      tag: "Lặp & Tăng dần theo Kiến trúc",
      icon: RotateCw,
      color: "from-purple-600 to-pink-600",
      accentBg: "from-purple-500 to-pink-600",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      accentBorder: "border-purple-400",
      philosophy: "Phương pháp luận hướng đối tượng (OO): Lấy kiến trúc làm trọng tâm (Architecture-centric), dẫn dắt bởi Use Cases và chia nhỏ dự án thành các vòng lặp lặp lại (Iterations).",
      flowSteps: [
        "1. Inception (Khởi tạo phạm vi)",
        "2. Elaboration (Khung kiến trúc)",
        "3. Construction (Code tăng dần)",
        "4. Transition (Chuyển giao)",
        "5. Release (Working Increment)"
      ],
      pros: [
        "Triệt tiêu rủi ro kiến trúc sớm ngay từ pha Elaboration.",
        "Khách hàng liên tục thấy phần mềm tiến triển qua từng bản tăng dần (Working Increments).",
        "Cân bằng hoàn hảo giữa tính linh hoạt thích ứng và tính kỷ luật kiến trúc vững chắc."
      ],
      cons: [
        "Quy trình tương đối phức tạp và đồ sộ đối với các dự án nhỏ hoặc startup.",
        "Đòi hỏi đội ngũ kiến trúc sư và BA có trình độ mô hình hóa hướng đối tượng vững vàng.",
        "Vẫn yêu cầu khối lượng tài liệu thiết kế nhất định so với Agile thuần túy."
      ],
      bestFor: "Dự án phần mềm doanh nghiệp quy mô vừa và lớn (Banking, ERP, E-commerce đa kênh) cần <strong>kiến trúc vững chãi</strong> nhưng <strong>yêu cầu vẫn có thể tinh chỉnh theo thời gian</strong>."
    },
    agile: {
      id: "agile",
      name: "Agile / Scrum",
      tag: "Thích ứng nhanh & Tinh gọn",
      icon: Zap,
      color: "from-emerald-600 to-teal-600",
      accentBg: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      accentBorder: "border-emerald-400",
      philosophy: "Ưu tiên con người và sự tương tác hơn quy trình và công cụ; ưu tiên phần mềm chạy tốt hơn tài liệu đồ sộ; thích ứng tức thì với sự thay đổi.",
      flowSteps: [
        "1. Product Backlog Refinement",
        "2. Sprint Planning (1-4w)",
        "3. Daily Scrum & Build",
        "4. Sprint Review & Demo",
        "5. Retrospective"
      ],
      pros: [
        "Tốc độ đưa tính năng ra thị trường (Time-to-Market) nhanh vượt trội.",
        "Khách hàng đóng vai trò Product Owner tham gia liên tục vào quá trình phát triển.",
        "Loại bỏ tối đa lãng phí tài liệu hình thức (Lean & Value-focused)."
      ],
      cons: [
        "Dễ bị phình to phạm vi (Scope Creep) nếu không kiểm soát tốt Product Backlog.",
        "Thiếu tài liệu tổng quan gây khó khăn khi bàn giao nhân sự mới.",
        "Đòi hỏi khách hàng và Product Owner phải túc trực liên tục cùng đội ngũ phát triển."
      ],
      bestFor: "Sản phẩm công nghệ mới, ứng dụng di động, giải pháp AI/Web3 hoặc thị trường cạnh tranh khốc liệt nơi <strong>tốc độ thử nghiệm và học hỏi nhanh là yếu tố quyết định sống còn</strong>."
    }
  };

  const current = methodologies[selectedMethod];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white font-bold text-xl">
            <GitCompare className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-wider">
                Methodology Duel Arena
              </span>
              <span className="text-xs text-slate-400">Đối Chiếu Phương Pháp Luận</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              Studio: Đấu Trường So Sánh Waterfall vs Unified Process vs Agile
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
          <Award className="w-4 h-4 text-purple-400" />
          <span className="text-slate-400">Tiêu điểm giáo trình: </span>
          <span className="font-bold text-purple-300">Unified Process (UP)</span>
        </div>
      </div>

      {/* 3 Methodology Selector Buttons: 3 cols */}
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
                  ? `bg-slate-800/90 border-white/40 ring-2 ring-emerald-400/50 shadow-xl scale-[1.02]`
                  : `bg-slate-950/80 border-slate-800 hover:bg-slate-800/40 text-slate-400 hover:text-slate-200`
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.accentBg} text-white shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                  {key.toUpperCase()}
                </span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">{item.name}</h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">{item.tag}</p>
            </button>
          );
        })}
      </div>

      {/* Deep-dive Method Details Arena */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
        {/* Philosophy */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold uppercase text-amber-400">Triết lý vận hành cốt lõi:</span>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed font-medium">
              {current.philosophy}
            </p>
          </div>
        </div>

        {/* Pipeline Steps Flow: 3 cols row 1 + 2 cols row 2 on laptop, 5 on xl */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
            Lộ trình các bước thực thi (Roadmap & Phases):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {current.flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex flex-col justify-between font-medium shadow-sm hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                    Chặng {idx + 1}
                  </span>
                  {idx < current.flowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </div>
                <span className="leading-snug font-bold text-white text-xs">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Pros */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <span className="text-xs font-extrabold uppercase text-emerald-400 flex items-center gap-1.5 mb-2">
              <CheckCircle className="w-4 h-4" /> Ưu điểm vượt trội (Advantages)
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {current.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
            <span className="text-xs font-extrabold uppercase text-rose-400 flex items-center gap-1.5 mb-2">
              <XCircle className="w-4 h-4" /> Hạn chế & Thách thức (Disadvantages)
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {current.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best For Scenario */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-950 border border-blue-500/30 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-cyan-400 font-bold uppercase text-xs block mb-1">
              Khi nào nên lựa chọn {current.name}?
            </span>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: current.bestFor }} />
          </div>
        </div>
      </div>
    </div>
  );
}
