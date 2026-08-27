"use client";
import React, { useState } from "react";
import { 
  ShieldCheck, 
  DoorOpen, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  Layers,
  Scale,
  Briefcase
} from "lucide-react";

export default function ProjectInitiationGatekeeperStudio() {
  const [gateDecision, setGateDecision] = useState("approved"); // "approved" | "rejected"

  const activities = [
    { num: "1", name: "Identify Need / Opportunity", desc: "Nhận diện vấn đề nhức nhối hoặc cơ hội kinh doanh mới." },
    { num: "2", name: "Define System Request", desc: "Soạn thảo phiếu yêu cầu hệ thống ghi nhận chức năng và sponsor." },
    { num: "3", name: "Assess Feasibility", desc: "Thẩm định toàn diện 3 chiều: Kỹ thuật, Kinh tế (ROI), Tổ chức." },
    { num: "4", name: "Form Team & Approval", desc: "Thành lập đội dự án và trình phê duyệt ban lãnh đạo." }
  ];

  const deliverables = [
    { title: "System Request", desc: "Phiếu yêu cầu chính thức ghi nhận nhu cầu nghiệp vụ và sponsor.", icon: "📄" },
    { title: "Feasibility Report", desc: "Báo cáo tổng hợp đánh giá khả thi Kỹ thuật, Kinh tế, Tổ chức.", icon: "📊" },
    { title: "Project Charter / Plan", desc: "Bản điều lệ dự án phê duyệt phạm vi, ngân sách và nhân sự.", icon: "📜" },
    { title: "Initial Business Case", desc: "Hồ sơ biện minh cho khoản đầu tư tài chính chiến lược.", icon: "💼" }
  ];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <DoorOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Project Initiation Gatekeeper (Cổng Phê Duyệt Dự Án)
            </h2>
            <p className="text-xs text-slate-400">
              Giai đoạn khởi động nằm ở đầu Planning phase — Cầu nối biến ý tưởng sơ khai thành dự án chính thức có phạm vi và ngân sách.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Steps Flow */}
      <div className="mb-6">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
          Lộ trình 4 hoạt động trọng tâm của Initiation Phase:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {activities.map((act) => (
            <div key={act.num} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Bước {act.num}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-white">{act.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Gatekeeper Decision Simulator */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-400 block">
              Cổng Ra Quyết Định Ban Lãnh Đạo (Go / No-Go Decision Gate):
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              Câu hỏi cốt lõi: <em>&quot;Có nên làm dự án này không, và nếu có thì Scope & Cost ra sao?&quot;</em>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setGateDecision("approved")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                gateDecision === "approved"
                  ? "bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-400/40"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Phê Duyệt (Approve)
            </button>
            <button
              onClick={() => setGateDecision("rejected")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                gateDecision === "rejected"
                  ? "bg-rose-600 text-white shadow-lg ring-2 ring-rose-400/40"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <XCircle className="w-3.5 h-3.5" /> Từ Chối (Reject)
            </button>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
          {gateDecision === "approved" ? (
            <div className="flex items-start gap-2.5 text-emerald-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-400 mb-0.5">Dự án Đạt Khả Thi ➔ Ký duyệt Project Charter:</strong>
                <span>Dự án chính thức được cấp ngân sách, bổ nhiệm Project Manager, thành lập đội ngũ phát triển và chuyển sang giai đoạn Phân tích chi tiết (Detailed Analysis Phase).</span>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-2.5 text-rose-300">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-rose-400 mb-0.5">Dự án Không Khả Thi ➔ Dừng Ngay Tại Cửa (Killed at Gate):</strong>
                <span>Tiết kiệm hàng trăm triệu đồng và hàng ngàn giờ công cho doanh nghiệp bằng cách ngăn chặn sớm một dự án không mang lại hiệu quả kinh tế hoặc rủi ro kỹ thuật quá cao.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4 Deliverables Matrix */}
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
          Bộ 4 sản phẩm chuyển giao chính thức (Deliverables):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {deliverables.map((del, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex flex-col justify-between">
              <div>
                <div className="text-lg mb-1">{del.icon}</div>
                <div className="font-extrabold text-white">{del.title}</div>
                <div className="text-[11px] text-slate-400 mt-1">{del.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
