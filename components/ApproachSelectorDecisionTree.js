"use client";
import React, { useState } from "react";
import { 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Workflow, 
  RotateCw, 
  HelpCircle,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function ApproachSelectorDecisionTree() {
  const [clarity, setClarity] = useState(3); // 1 (Mơ hồ/Đổi liên tục) -> 5 (Rõ ràng/Cố định)
  const [risk, setRisk] = useState(3); // 1 (Nhỏ/Startup) -> 5 (Khổng lồ/Quy định ngặt)
  const [culture, setCulture] = useState(3); // 1 (Tự chủ/Agile) -> 5 (Hợp đồng cố định/Waterfall)

  // Total Predictive Score (out of 15)
  const totalScore = clarity + risk + culture;
  const isPredictive = totalScore >= 9;

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Trình Mô Phỏng Đánh Giá Lựa Chọn Approach
            </h2>
            <p className="text-xs text-slate-400">
              Kéo 3 thanh trượt tiêu chí để hệ thống tính toán và đưa ra đề xuất phương pháp tiếp cận tối ưu cho dự án của bạn.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Sliders Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Slider 1: Requirement Clarity */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase text-cyan-400">
              1. Requirement Clarity
            </span>
            <span className="text-xs font-mono font-bold bg-slate-900 px-2 py-0.5 rounded text-white border border-slate-800">
              {clarity}/5
            </span>
          </div>
          <p className="text-xs text-slate-300">
            {clarity <= 2 && "Yêu cầu rất mơ hồ, đổi liên tục"}
            {clarity === 3 && "Yêu cầu ở mức độ trung bình"}
            {clarity >= 4 && "Yêu cầu cực kỳ rõ ràng, cố định"}
          </p>
          <input
            type="range"
            min="1"
            max="5"
            value={clarity}
            onChange={(e) => setClarity(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>Mơ hồ (1)</span>
            <span>Rõ ràng (5)</span>
          </div>
        </div>

        {/* Slider 2: Project Size & Risk */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase text-purple-400">
              2. Size & Risk / Regulation
            </span>
            <span className="text-xs font-mono font-bold bg-slate-900 px-2 py-0.5 rounded text-white border border-slate-800">
              {risk}/5
            </span>
          </div>
          <p className="text-xs text-slate-300">
            {risk <= 2 && "Dự án nhỏ, rủi ro thấp"}
            {risk === 3 && "Quy mô vừa, rủi ro trung bình"}
            {risk >= 4 && "Dự án lớn, kiểm toán ngặt (Ngân hàng/Y tế)"}
          </p>
          <input
            type="range"
            min="1"
            max="5"
            value={risk}
            onChange={(e) => setRisk(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>Nhỏ/Linh hoạt (1)</span>
            <span>Lớn/Ngặt nghèo (5)</span>
          </div>
        </div>

        {/* Slider 3: Team & Culture */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase text-amber-400">
              3. Team & Culture
            </span>
            <span className="text-xs font-mono font-bold bg-slate-900 px-2 py-0.5 rounded text-white border border-slate-800">
              {culture}/5
            </span>
          </div>
          <p className="text-xs text-slate-300">
            {culture <= 2 && "Văn hóa Agile, khách hàng họp thường xuyên"}
            {culture === 3 && "Văn hóa hỗn hợp Hybrid"}
            {culture >= 4 && "Hợp đồng trọn gói, khách bận chỉ nghiệm thu cuối"}
          </p>
          <input
            type="range"
            min="1"
            max="5"
            value={culture}
            onChange={(e) => setCulture(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>Agile/Collab (1)</span>
            <span>Formal/Contract (5)</span>
          </div>
        </div>
      </div>

      {/* Dynamic Recommendation Outcome Card */}
      <div
        className={`p-5 rounded-2xl border transition-all duration-300 ${
          isPredictive
            ? "bg-blue-950/40 border-blue-500/60 ring-2 ring-blue-500/30"
            : "bg-emerald-950/40 border-emerald-500/60 ring-2 ring-emerald-500/30"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3 mb-3">
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-xl text-white shadow ${
                isPredictive ? "bg-blue-600" : "bg-emerald-600"
              }`}
            >
              {isPredictive ? <Workflow className="w-6 h-6" /> : <RotateCw className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400">
                Đề xuất tiếp cận tối ưu (Điểm số: {totalScore}/15):
              </span>
              <h3 className="text-base sm:text-lg font-black text-white">
                👉 Khuyến nghị chọn: {isPredictive ? "Predictive Approach (Waterfall / Quy trình tuần tự)" : "Adaptive Approach (Agile / Scrum / UP Iterative)"}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
          {isPredictive
            ? "Dự án của bạn có độ ổn định yêu cầu cao, quy mô lớn hoặc chịu sự ràng buộc chặt chẽ về quy chuẩn hợp đồng. Cách tiếp cận Predictive (Lập kế hoạch up-front, kiểm soát phạm vi và tài liệu đầy đủ) sẽ giúp giảm thiểu tối đa tranh chấp và kiểm soát rủi ro hiệu quả."
            : "Dự án của bạn có mức độ biến động yêu cầu cao hoặc cần đưa sản phẩm ra thị trường sớm để thăm dò phản hồi. Cách tiếp cận Adaptive (Chia nhỏ thành các Sprint 1-4 tuần, xuất bản Working Increments liên tục) sẽ mang lại tính linh hoạt cao nhất."}
        </p>
      </div>
    </div>
  );
}
