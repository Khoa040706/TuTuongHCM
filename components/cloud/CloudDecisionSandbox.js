"use client";
import React, { useState } from "react";
import { Sliders, CheckCircle2, ShieldCheck, DollarSign, Zap } from "lucide-react";

export default function CloudDecisionSandbox() {
  const [securityReq, setSecurityReq] = useState("high"); // low, medium, high, critical
  const [budgetTier, setBudgetTier] = useState("flexible"); // tight, flexible, large
  const [workloadType, setWorkloadType] = useState("web"); // web, database, enterprise, bigdata

  // Calculate recommendation
  const getRecommendation = () => {
    if (securityReq === "critical" || workloadType === "bigdata") {
      return {
        model: "Private Cloud + Bare-Metal Servers",
        storage: "Dedicated Block Storage (EBS / SAN)",
        rationale: "Yêu cầu an ninh tối thượng và tính toán cường độ cao đòi hỏi phần cứng chuyên dụng biệt lập hoàn toàn.",
        badgeColor: "bg-purple-100 text-purple-800"
      };
    }
    if (securityReq === "high" && budgetTier === "flexible") {
      return {
        model: "Hybrid Cloud (Private Core + Public Bursting)",
        storage: "Hybrid Storage (On-premise NAS + Cloud S3)",
        rationale: "Cân bằng tối ưu: Giữ dữ liệu nhạy cảm tại chỗ và mở rộng năng lực tính toán ra Public Cloud khi quá tải.",
        badgeColor: "bg-blue-100 text-blue-800"
      };
    }
    if (budgetTier === "tight") {
      return {
        model: "Public Cloud (Multi-tenant SaaS / PaaS)",
        storage: "Cloud Object Storage (AWS S3 / Google Cloud Storage)",
        rationale: "Tiết kiệm chi phí tối đa theo cơ chế Pay-as-you-go, không tốn chi phí đầu tư phần cứng và quản trị ban đầu.",
        badgeColor: "bg-emerald-100 text-emerald-800"
      };
    }
    return {
      model: "Public Cloud (Dedicated Virtual Server IaaS)",
      storage: "Cloud Block Storage (AWS EBS) + Object Storage Backup",
      rationale: "Hiệu năng ổn định, khả năng co giãn linh hoạt và dễ dàng kiểm soát chi phí hàng tháng.",
      badgeColor: "bg-amber-100 text-amber-800"
    };
  };

  const rec = getRecommendation();

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Decision Sandbox</span>
          <h3 className="text-lg sm:text-xl font-bold text-stone-850">
            Hộp cát Ra Quyết định Kiến trúc Đám mây
          </h3>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-stone-500 mb-6">
        Thử nghiệm điều chỉnh các tham số kinh tế và kỹ thuật của bài toán doanh nghiệp để tìm ra mô hình triển khai và loại lưu trữ tối ưu nhất.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-stone-50 border border-stone-200/80 mb-6">
        {/* Security Requirement */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-stone-500" />
            <span>Mức độ Yêu cầu An ninh:</span>
          </label>
          <select
            value={securityReq}
            onChange={(e) => setSecurityReq(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-semibold text-stone-800"
          >
            <option value="medium">Trung bình (Website công cộng)</option>
            <option value="high">Cao (Thương mại điện tử / CRM)</option>
            <option value="critical">Tối thượng (Tài chính / Quốc phòng / Y tế)</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-stone-500" />
            <span>Ngân sách Đầu tư:</span>
          </label>
          <select
            value={budgetTier}
            onChange={(e) => setBudgetTier(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-semibold text-stone-800"
          >
            <option value="tight">Tiết kiệm (Startup / SMEs)</option>
            <option value="flexible">Linh hoạt (Doanh nghiệp đang tăng trưởng)</option>
            <option value="large">Quy mô lớn (Tập đoàn đa quốc gia)</option>
          </select>
        </div>

        {/* Workload */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-stone-500" />
            <span>Loại Tải Ứng dụng:</span>
          </label>
          <select
            value={workloadType}
            onChange={(e) => setWorkloadType(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-semibold text-stone-800"
          >
            <option value="web">Web Application / API</option>
            <option value="database">Cơ sở dữ liệu giao dịch (OLTP)</option>
            <option value="enterprise">Hệ thống ERP / Quản trị nội bộ</option>
            <option value="bigdata">Xử lý Dữ liệu lớn (Big Data / AI)</option>
          </select>
        </div>
      </div>

      {/* Output Decision Result */}
      <div className="p-6 rounded-2xl bg-linear-to-br from-stone-900 to-stone-850 text-white border border-stone-800 shadow-lg">
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Khuyến nghị Kiến trúc Tối ưu</span>
          </span>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${rec.badgeColor}`}>
            Phân tích AI Model
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-white/10 border border-white/10">
            <span className="text-stone-400 text-xs block mb-1">Mô hình Triển khai & Máy chủ:</span>
            <span className="font-extrabold text-sm sm:text-base text-amber-300">{rec.model}</span>
          </div>
          <div className="p-4 rounded-xl bg-white/10 border border-white/10">
            <span className="text-stone-400 text-xs block mb-1">Cơ chế Lưu trữ Đề xuất:</span>
            <span className="font-extrabold text-sm sm:text-base text-sky-300">{rec.storage}</span>
          </div>
        </div>

        <p className="text-xs text-stone-300 leading-relaxed italic">
          <strong>Luận điểm lý giải:</strong> {rec.rationale}
        </p>
      </div>
    </div>
  );
}
