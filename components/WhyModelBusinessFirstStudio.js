"use client";
import React, { useState } from "react";
import { 
  Building2, 
  HelpCircle, 
  Search, 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap
} from "lucide-react";

export default function WhyModelBusinessFirstStudio() {
  const [selectedReason, setSelectedReason] = useState("context");

  const reasons = {
    context: {
      id: "context",
      title: "1. Understand Context Before Automating",
      vnTitle: "Hiểu ngữ cảnh trước khi tự động hóa",
      icon: Search,
      color: "from-blue-600 to-indigo-600",
      accentBorder: "border-blue-400",
      desc: "Đảm bảo phần mềm giải quyết đúng 'nỗi đau' thực sự của nghiệp vụ kinh doanh, thay vì chỉ là một danh sách mong muốn kỹ thuật (technical wish list) viển vông.",
      caseBad: "❌ Viết phần mềm tự động hóa một quy trình thủ công đang bị sai logic, dẫn đến việc 'tự động tạo ra lỗi sai với tốc độ ánh sáng'.",
      caseGood: "✅ Phân tích luồng nghiệp vụ trước, chuẩn hóa logic bán hàng rồi mới lập trình tính năng tự động tính thuế và chiết khấu."
    },
    bottleneck: {
      id: "bottleneck",
      title: "2. Reveal Improvement Opportunities",
      vnTitle: "Phát hiện điểm nghẽn & Cơ hội cải tiến",
      icon: Zap,
      color: "from-amber-600 to-orange-600",
      accentBorder: "border-amber-400",
      desc: "Khi vẽ sơ đồ luồng quy trình (AS-IS), các bước lãng phí, sự chậm trễ duyệt giấy tờ và điểm nghẽn (bottlenecks) sẽ lộ diện rõ ràng để tái cấu trúc (BPR).",
      caseBad: "❌ Giữ nguyên quy trình duyệt đơn hàng qua 5 cấp lãnh đạo giấy tờ và đưa nguyên xi lên phần mềm, gây ức chế cho nhân viên.",
      caseGood: "✅ Rút gọn quy trình từ 5 cấp xuống tự động duyệt nếu đơn dưới 10 triệu, giúp rút ngắn 90% thời gian xử lý đơn hàng."
    },
    communication: {
      id: "communication",
      title: "3. Communicate with Stakeholders",
      vnTitle: "Cầu nối giao tiếp với người dùng nghiệp vụ",
      icon: Users,
      color: "from-purple-600 to-pink-600",
      accentBorder: "border-purple-400",
      desc: "Business model dùng ngôn ngữ nghiệp vụ trực quan (hình vẽ quy trình, luồng công việc) để người dùng kinh doanh đọc hiểu và xác nhận (validate) trực tiếp.",
      caseBad: "❌ Đưa tài liệu đặc tả mã nguồn database phức tạp cho Giám đốc kinh doanh đọc khiến họ không hiểu và ký duyệt bừa.",
      caseGood: "✅ Trình bày sơ đồ quy trình nghiệp vụ rõ ràng, Giám đốc kinh doanh nhìn vào phát hiện ngay trường hợp thiếu kiểm tra tồn kho."
    },
    scope: {
      id: "scope",
      title: "4. Establish Scope Boundaries",
      vnTitle: "Xác lập ranh giới Inside vs Outside",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-600",
      accentBorder: "border-emerald-400",
      desc: "Phân định ranh giới rõ ràng cái gì thuộc trách nhiệm hệ thống sẽ xây (Inside) và cái gì vẫn xử lý ngoài đời thực (Outside), chặn đứng Scope Creep.",
      caseBad: "❌ Không xác định ranh giới khiến khách hàng đòi phần mềm phải làm luôn khâu in tem dán thủ công của đối tác vận chuyển thứ 3.",
      caseGood: "✅ Vạch rõ ranh giới: Phần mềm chỉ xuất file mã vận đơn (Inside); việc dán nhãn lên kiện hàng do nhân viên kho thực hiện ngoài đời (Outside)."
    }
  };

  const current = reasons[selectedReason];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: 4 Giá Trị Sống Còn Của Business Modeling
            </h2>
            <p className="text-xs text-slate-400">
              Khám phá vì sao phải mô hình hóa doanh nghiệp trước khi thiết kế và lập trình phần mềm.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Reasons Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {Object.entries(reasons).map(([key, item]) => {
          const isSelected = selectedReason === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedReason(key)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-blue-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow mb-2 w-fit`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-white">{item.title.split(". ")[1]}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.vnTitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Reason Showcase Details */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">{current.title}</h3>
              <p className="text-xs text-cyan-400 font-semibold">{current.vnTitle}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {current.desc}
          </p>

          {/* Real-world Contrast Case Study */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/40 text-xs text-rose-200 space-y-1">
              <span className="font-extrabold text-rose-400 block uppercase">Nếu bỏ qua Business Modeling:</span>
              <p>{current.caseBad}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs text-emerald-200 space-y-1">
              <span className="font-extrabold text-emerald-400 block uppercase">Khi làm Business Modeling chuẩn mực:</span>
              <p>{current.caseGood}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
