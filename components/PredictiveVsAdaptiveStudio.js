"use client";
import React, { useState } from "react";
import { 
  RotateCw, 
  Workflow, 
  Layers, 
  FileText, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Scale
} from "lucide-react";

export default function PredictiveVsAdaptiveStudio() {
  const [selectedDimension, setSelectedDimension] = useState("requirements");

  const dimensions = {
    requirements: {
      id: "requirements",
      name: "1. Requirements (Yêu cầu nghiệp vụ)",
      icon: FileText,
      predictive: "Xác định chi tiết, toàn diện và đóng băng (Sign-off & Freeze) ngay từ giai đoạn đầu trước khi lập trình.",
      adaptive: "Kỳ vọng và chủ động chào đón yêu cầu thay đổi liên tục theo phản hồi thực tế của người dùng và thị trường.",
      takeaway: "Predictive coi yêu cầu là cố định; Adaptive coi yêu cầu là danh sách ưu tiên liên tục tiến hóa (Product Backlog)."
    },
    planning: {
      id: "planning",
      name: "2. Planning (Lập kế hoạch dự án)",
      icon: Workflow,
      predictive: "Lập kế hoạch tổng thể (Up-front planning) cho toàn bộ dự án từ mốc đầu tiên đến ngày bàn giao cuối cùng.",
      adaptive: "Lên kế hoạch chi tiết theo từng chu kỳ lặp ngắn (Sprint Planning 1-4 tuần); chỉ lập kế hoạch vĩ mô cho các mốc xa.",
      takeaway: "Predictive quản lý theo Gantt chart cố định; Adaptive quản lý theo tốc độ phân phối thực tế (Team Velocity)."
    },
    delivery: {
      id: "delivery",
      name: "3. Delivery (Bàn giao sản phẩm)",
      icon: Layers,
      predictive: "Bàn giao toàn bộ hệ thống hoàn chỉnh một lần duy nhất ở cuối dự án (Big-bang release).",
      adaptive: "Bàn giao thường xuyên sau mỗi vòng lặp dưới dạng các phần tăng dần hoạt động được (Working Increments).",
      takeaway: "Predictive giao sản phẩm muộn; Adaptive đưa phần mềm hoạt động đến tay người dùng cực sớm (Fast Value Delivery)."
    },
    change: {
      id: "change",
      name: "4. Change Management (Quản trị thay đổi)",
      icon: RotateCw,
      predictive: "Kiểm soát nghiêm ngặt thông qua quy trình thay đổi trang trọng (Formal Change Control Board - CCB).",
      adaptive: "Chào đón thay đổi bất kỳ lúc nào, coi sự thay đổi là lợi thế cạnh tranh mang lại giá trị lớn nhất cho khách hàng.",
      takeaway: "Predictive chống lại sự thay đổi phát sinh; Adaptive thích ứng và coi thay đổi là tất yếu."
    },
    customer: {
      id: "customer",
      name: "5. Customer Involvement (Sự tham gia của khách hàng)",
      icon: Users,
      predictive: "Tập trung nhiều ở giai đoạn đầu (khảo sát yêu cầu) và giai đoạn cuối (nghiệm thu UAT).",
      adaptive: "Khách hàng (Product Owner/Users) tham gia liên tục, xuyên suốt hàng tuần và có mặt trong mọi buổi demo.",
      takeaway: "Predictive giao tiếp qua văn bản hợp đồng; Adaptive giao tiếp qua tương tác và đối thoại trực tiếp hàng ngày."
    },
    documentation: {
      id: "documentation",
      name: "6. Documentation (Tài liệu hóa)",
      icon: FileText,
      predictive: "Đầy đủ, trang trọng, chi tiết và có chữ ký phê duyệt nghiêm ngặt ở từng giai đoạn.",
      adaptive: "Tài liệu vừa đủ (Just enough), tập trung tối đa nguồn lực vào phần mềm chạy tốt (Working software over comprehensive documentation).",
      takeaway: "Predictive coi tài liệu là sản phẩm kiểm soát; Adaptive coi phần mềm hoạt động là thước đo tiến độ chủ yếu."
    }
  };

  const current = dimensions[selectedDimension];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Đấu Trường 6 Chiều Kích Thước Predictive vs Adaptive
            </h2>
            <p className="text-xs text-slate-400">
              Đối chiếu trực quan bản chất quản trị dự án giữa 2 trường phái lớn qua 6 lăng kính then chốt.
            </p>
          </div>
        </div>
      </div>

      {/* 6 Dimension Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {Object.entries(dimensions).map(([key, item]) => {
          const isSelected = selectedDimension === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedDimension(key)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-400 hover:text-slate-200`
              }`}
            >
              <Icon className={`w-4 h-4 mb-2 ${isSelected ? "text-cyan-400" : "text-slate-500"}`} />
              <div className="text-xs font-bold text-white truncate">{item.name.split(". ")[1]}</div>
            </button>
          );
        })}
      </div>

      {/* Side-by-side Dimension Details Arena */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 mb-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h3 className="font-extrabold text-sm sm:text-base text-white">{current.name}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Predictive */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-extrabold uppercase text-blue-400 block mb-1.5">
                ● Predictive Approach (Dự đoán)
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {current.predictive}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-blue-300/80 font-mono">
              Triết lý: Plan the work, then work the plan
            </div>
          </div>

          {/* Right: Adaptive */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-extrabold uppercase text-emerald-400 block mb-1.5">
                ● Adaptive Approach (Thích ứng)
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {current.adaptive}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-emerald-300/80 font-mono">
              Triết lý: Embrace change, deliver early and often
            </div>
          </div>
        </div>
      </div>

      {/* Takeaway Insight */}
      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-cyan-400 font-bold uppercase text-xs block mb-0.5">Điểm mấu chốt:</span>
          <span>{current.takeaway}</span>
        </div>
      </div>
    </div>
  );
}
