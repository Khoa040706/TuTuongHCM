"use client";
import React, { useState } from "react";
import { 
  Scale, 
  Cpu, 
  DollarSign, 
  Building, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  HelpCircle, 
  BarChart3,
  ShieldCheck
} from "lucide-react";

export default function FeasibilityThreeDimensionsStudio() {
  const [selectedDimension, setSelectedDimension] = useState("technical");

  const dimensions = {
    technical: {
      name: "1. Technical Feasibility",
      vnName: "Khả thi Kỹ thuật & Công nghệ",
      question: "Hệ thống có thể xây dựng được với công nghệ và kỹ năng hiện tại không?",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      accentBorder: "border-blue-400",
      checklist: [
        "Đội ngũ kỹ sư nội bộ có thành thạo ngôn ngữ lập trình, kiến trúc và cơ sở dữ liệu dự kiến không?",
        "Hệ thống có yêu cầu tích hợp với các phần mềm cũ (Legacy Systems) phức tạp không?",
        "Quy mô dữ liệu và tải lượng người dùng đồng thời có vượt quá năng lực hạ tầng phần cứng hiện tại không?"
      ],
      riskMitigation: "Nếu thiếu kỹ năng: Thuê chuyên gia tư vấn (Consultants) hoặc tổ chức đào tạo chuyên sâu trước khi bắt đầu."
    },
    economic: {
      name: "2. Economic Feasibility",
      vnName: "Khả thi Kinh tế & Lợi nhuận Đầu tư",
      question: "Lợi ích tài chính kỳ vọng có vượt trội hơn tổng chi phí đầu tư không?",
      icon: DollarSign,
      color: "from-emerald-600 to-teal-600",
      accentBorder: "border-emerald-400",
      checklist: [
        "Phân tích Chi phí vs Lợi ích (Cost-Benefit Analysis: Chi phí phát triển, bản quyền phần mềm, bảo trì hàng năm).",
        "Tính toán tỷ suất hoàn vốn ROI (Return on Investment) và giá trị hiện tại ròng NPV (Net Present Value).",
        "Thời gian hoàn vốn (Payback Period) có nằm trong ngưỡng chấp nhận được của ban giám đốc không?"
      ],
      riskMitigation: "Nếu ROI không đủ cao: Cắt giảm các tính năng thứ yếu hoặc phân kỳ đầu tư thành nhiều giai đoạn nhỏ."
    },
    organizational: {
      name: "3. Organizational Feasibility",
      vnName: "Khả thi Tổ chức & Văn hóa Doanh nghiệp",
      question: "Hệ thống có được người dùng chấp nhận sử dụng và phù hợp với chiến lược không?",
      icon: Building,
      color: "from-amber-600 to-orange-600",
      accentBorder: "border-amber-400",
      checklist: [
        "Dự án có nhận được sự hậu thuẫn và bảo trợ mạnh mẽ từ ban lãnh đạo cấp cao (Management Sponsorship) không?",
        "Người dùng cuối (End-users) có sẵn sàng thay đổi thói quen làm việc để tiếp nhận phần mềm mới không?",
        "Quy trình mới có tuân thủ đúng các chính sách bảo mật nội bộ và luật pháp hiện hành không?"
      ],
      riskMitigation: "Nếu người dùng ngại thay đổi: Lập kế hoạch quản trị sự thay đổi (Change Management Plan) và đào tạo kỹ lưỡng."
    }
  };

  const current = dimensions[selectedDimension];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Thẩm Định Khả Thi 3 Chiều (Feasibility Matrix)
            </h2>
            <p className="text-xs text-slate-400">
              Khảo sát toàn diện 3 trụ cột Kỹ thuật (Technical), Kinh tế (Economic) và Tổ chức (Organizational).
            </p>
          </div>
        </div>
      </div>

      {/* 3 Dimensions Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {Object.entries(dimensions).map(([key, item]) => {
          const isSelected = selectedDimension === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedDimension(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-emerald-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow mb-2 w-fit`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-white">{item.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{item.vnName}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Dimension Showcase Card */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
              <span className="text-xs text-emerald-400 font-bold">👉 Câu hỏi trọng tâm: {current.question}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-extrabold uppercase text-cyan-400 block">
              Các Tiêu Chí Thẩm Định Cốt Lõi (Evaluation Checklist):
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {current.checklist.map((chk, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{chk}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200">
            <span className="font-bold text-amber-400 block mb-0.5 uppercase">Biện pháp giảm thiểu rủi ro (Risk Mitigation):</span>
            <span>{current.riskMitigation}</span>
          </div>
        </div>
      )}
    </div>
  );
}
